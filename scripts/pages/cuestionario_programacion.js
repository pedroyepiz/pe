(() => {
  'use strict';
  const C=window.PEQuizCore, $=id=>document.getElementById(id);
  const inline=text=>C.escapeHtml(text).replace(/`([^`]+)`/g,'<code class="peq-inline-code">$1</code>');
  class LocalProvider {
    constructor(){this.remote=false;this.previousIds=[];}
    async start(profile){
      if(!window.PE_MEDIUM_DATA) await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='../data/preguntas_programacion_media.js';script.onload=resolve;script.onerror=()=>reject(new Error('No se pudieron cargar los ejercicios. Vuelve a cargar la página.'));document.head.appendChild(script);});
      C.validateData(window.PE_MEDIUM_DATA);
      this.attempt=C.createAttempt(window.PE_MEDIUM_DATA,{previousIds:this.previousIds});
      this.previousIds=this.attempt.privateQuestions.map(q=>q.sourceId);this.profile=profile;this.startedAt=new Date().toISOString();
      return {questions:this.attempt.publicQuestions,canEmail:false};
    }
    async grade(answers){return {profile:this.profile,result:C.grade(this.attempt.privateQuestions,answers,window.PE_MEDIUM_DATA.topics,{startedAt:this.startedAt}),canEmail:false};}
  }
  class RemoteProvider {
    constructor(base){this.remote=true;this.base=base.replace(/\/$/,'');}
    async request(path,body,authenticated=false){
      const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),45000);
      try{
        const response=await fetch(this.base+path,{method:'POST',headers:{'Content-Type':'application/json',...(authenticated?{Authorization:'Bearer '+this.token}:{})},body:JSON.stringify(body),signal:controller.signal,credentials:'omit'});
        const data=await response.json().catch(()=>({}));
        if(!response.ok)throw new Error(data.error||'El servicio no está disponible. Inténtalo de nuevo.');return data;
      }catch(error){if(error.name==='AbortError')throw new Error('La respuesta está tardando. Inténtalo de nuevo; tus respuestas siguen aquí.');throw error;}
      finally{clearTimeout(timer);}
    }
    async start(profile,turnstileToken,website){const data=await this.request('/api/start',{profile,turnstileToken,website});this.attemptId=data.attemptId;this.token=data.token;return data;}
    grade(answers){return this.request('/api/grade',{attemptId:this.attemptId,answers},true);}
    send(){return this.request('/api/send',{attemptId:this.attemptId},true);}
  }
  class PEQuizApp {
    constructor({provider,config=window.PE_QUIZ_CONFIG||{}}={}){
      this.config=config;this.provider=provider||(config.apiBaseUrl?new RemoteProvider(config.apiBaseUrl):new LocalProvider());
      this.answers={};this.token='';this.inProgress=false;this.visualComplete=false;
      this.puzzle=new window.CimarronPuzzle($('peq-puzzle'),'../images/cuestionario/cimarron.png',complete=>{this.visualComplete=complete;if(complete&&this.provider.remote)this.mountTurnstile();});
      $('peq-register-form').addEventListener('submit',event=>{event.preventDefault();this.start();});
      $('peq-quiz-form').addEventListener('submit',event=>{event.preventDefault();this.finish();});
      $('peq-questions').addEventListener('change',event=>{if(event.target.matches('input[type=radio]')){this.answers[event.target.name]=event.target.value;event.target.closest('.peq-question').classList.remove('is-missing');this.progress();}});
      window.addEventListener('beforeunload',event=>{if(this.inProgress){event.preventDefault();event.returnValue='';}});
      const offset=()=>{const header=$('site-header');const rect=header?.getBoundingClientRect();document.body.style.setProperty('--peq-header-offset',(rect&&rect.bottom>0?Math.ceil(rect.bottom):0)+'px');};
      document.addEventListener('masterlayout:ready',offset);window.addEventListener('scroll',offset,{passive:true});window.addEventListener('resize',offset);offset();
    }
    say(text){$('peq-live').textContent=text;}
    message(id,text){const el=$(id);el.textContent=text;el.hidden=!text;}
    focus(id){const el=$(id);el.focus({preventScroll:true});el.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});}
    async mountTurnstile(){
      if(!this.config.turnstileSiteKey){this.message('peq-register-error','La verificación de seguridad todavía no está configurada. Contacta a tu docente.');return;}
      $('peq-turnstile').hidden=false;
      try{
        if(!window.turnstile)await (this.turnstileLoading||(this.turnstileLoading=new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';script.async=true;script.onload=resolve;script.onerror=()=>reject(new Error('No se pudo cargar la verificación de seguridad. Revisa tu conexión y vuelve a intentarlo.'));document.head.appendChild(script);})));
        if(this.widgetId!==undefined)return;
        this.widgetId=window.turnstile.render($('peq-turnstile'),{sitekey:this.config.turnstileSiteKey,action:'pe-quiz-start',theme:'light',size:'flexible',callback:token=>{this.token=token;this.message('peq-register-error','');},'expired-callback':()=>{this.token='';this.message('peq-register-error','La verificación venció. Complétala de nuevo para comenzar.');},'error-callback':()=>{this.token='';this.message('peq-register-error','No se pudo validar la seguridad. Inténtalo de nuevo.');}});
      }catch(error){this.turnstileLoading=null;this.message('peq-register-error',error.message);}
    }
    async start(){
      if(this.starting)return;
      const raw=Object.fromEntries(new FormData($('peq-register-form'))),checked=C.validateProfile(raw),errors={...checked.errors};
      if(C.normalizeProfile({email:raw.confirmEmail}).email!==checked.profile.email)errors.confirmEmail='Los correos deben coincidir.';
      for(const key of ['name','matricula','group','email','confirmEmail']){const el=key==='confirmEmail'?$('peq-confirm-email'):$('peq-'+key);el.setAttribute('aria-invalid',String(!!errors[key]));$('peq-'+key+'-error').textContent=errors[key]||'';}
      if(Object.keys(errors).length){this.message('peq-register-error','Revisa los datos señalados antes de continuar.');const first=Object.keys(errors)[0];const field=first==='confirmEmail'?$('peq-confirm-email'):$('peq-'+first);field.focus({preventScroll:true});field.scrollIntoView({block:'center'});return;}
      if(!this.visualComplete){this.message('peq-register-error','Completa la imagen del Cimarrón para continuar.');$('peq-drag').focus();return;}
      if(this.provider.remote&&!this.token){this.message('peq-register-error','Completa también la verificación de seguridad para comenzar.');await this.mountTurnstile();return;}
      this.starting=true;const button=$('peq-start');button.disabled=true;button.textContent='Preparando evaluación…';this.message('peq-register-error','');
      try{const data=await this.provider.start(checked.profile,this.token,raw.website||'');this.profile=checked.profile;this.beginAttempt(data);}
      catch(error){this.message('peq-register-error',error.message);if(this.provider.remote){this.token='';if(window.turnstile&&this.widgetId!==undefined)window.turnstile.reset(this.widgetId);}}
      finally{this.starting=false;button.disabled=false;button.textContent='Comenzar evaluación →';}
    }
    beginAttempt(data){
      this.questions=data.questions;this.canEmail=!!data.canEmail;this.answers={};this.inProgress=true;this.result=null;
      $('peq-registration').hidden=true;$('peq-result').hidden=true;$('peq-result').replaceChildren();$('peq-attempt').hidden=false;
      $('peq-questions').innerHTML=this.questions.map(q=>this.questionHtml(q)).join('');this.progress();this.message('peq-quiz-error','');this.focus('peq-attempt-title');this.say('La evaluación está lista.');
    }
    questionHtml(q,detail){
      const e=C.escapeHtml;
      return '<section class="peq-question" id="card-'+e(q.id)+'" aria-labelledby="title-'+e(q.id)+'"><h3 id="title-'+e(q.id)+'" tabindex="-1">'+inline(q.prompt)+'</h3>'+(q.code?'<pre><code>'+e(q.code)+'</code></pre>':'')+'<div class="peq-options" role="radiogroup" aria-labelledby="title-'+e(q.id)+'">'+q.options.map((o,i)=>{
        const selected=this.answers[q.id]===o.id,correct=detail&&detail.correctId===o.id,incorrect=detail&&selected&&!detail.correct;
        return '<label class="peq-option'+(correct?' correct':'')+(incorrect?' incorrect':'')+'"><input type="radio" name="'+e(q.id)+'" value="'+e(o.id)+'"'+(selected?' checked':'')+(detail?' disabled':'')+'><span class="peq-option-body"><span class="peq-option-letter">'+String.fromCharCode(65+i)+(correct?' · RESPUESTA CORRECTA':incorrect?' · TU RESPUESTA':'')+'</span>'+(o.format==='code'||o.format==='output'?'<pre><code>'+e(o.text)+'</code></pre>':'<p>'+inline(o.text)+'</p>')+'</span></label>';
      }).join('')+'</div>'+(detail?'<div class="peq-feedback"><p><strong>'+(detail.correct?'Correcto.':'Revisa tu respuesta.')+'</strong> · '+e(detail.topicTitle)+'</p><p>'+inline(detail.explanation)+'</p></div>':'')+'</section>';
    }
    progress(){const percent=Math.round(100*Object.keys(this.answers).length/this.questions.length);$('peq-progress-label').textContent=percent+'%';$('peq-progress-fill').style.width=percent+'%';$('peq-progress-track').setAttribute('aria-valuenow',String(percent));}
    async finish(){
      if(this.finishing)return;
      const missing=C.missingQuestions(this.questions,this.answers);document.querySelectorAll('.peq-question.is-missing').forEach(el=>el.classList.remove('is-missing'));
      if(missing.length){missing.forEach(id=>$('card-'+id).classList.add('is-missing'));this.message('peq-quiz-error','Todavía hay respuestas pendientes. Selecciona una opción en cada ejercicio.');this.focus('title-'+missing[0]);return;}
      this.finishing=true;$('peq-finish').disabled=true;$('peq-finish').textContent='Evaluando…';this.message('peq-quiz-error','');
      try{const data=await this.provider.grade({...this.answers});this.profile=data.profile;this.result=data.result;this.canEmail=!!data.canEmail;this.inProgress=false;this.showResult();}
      catch(error){this.message('peq-quiz-error',error.message);}
      finally{this.finishing=false;$('peq-finish').disabled=false;$('peq-finish').textContent='Finalizar evaluación';}
    }
    showResult(){
      const e=C.escapeHtml,r=this.result,p=this.profile,fields=[['Nombre',p.name],['Matrícula',p.matricula],['Grupo',p.group],['Correo',p.email],['Folio',r.folio],['Fecha',C.formatDate(r.completedAt)]];
      $('peq-attempt').hidden=true;$('peq-questions').replaceChildren();
      $('peq-result').innerHTML='<div id="peq-print-report"><div class="peq-result-heading"><div class="peq-score"><strong>'+e(r.percentage)+'</strong><span>/ 100</span></div><div><span class="peq-eyebrow">EVALUACIÓN FINALIZADA</span><h2 id="peq-result-title" tabindex="-1">Tu resultado</h2><p class="peq-muted">Revisa tu desempeño y conserva tu comprobante.</p></div></div><dl class="peq-student-data">'+fields.map(([label,value])=>'<div><dt>'+label+'</dt><dd>'+e(value)+'</dd></div>').join('')+'</dl><section class="peq-result-topics"><h3>Desempeño por tema</h3><div class="peq-table-wrap"><table class="peq-table"><thead><tr><th scope="col">Tema</th><th scope="col">Resultado</th></tr></thead><tbody>'+r.byTopic.map(t=>'<tr><th scope="row">'+e(t.title)+'</th><td>'+e(t.percentage)+'%</td></tr>').join('')+'</tbody></table></div></section></div><div class="peq-result-actions"><button id="peq-send" class="peq-button" type="button"'+(this.canEmail?'':' disabled')+'>Enviar resultado a mi correo</button><button id="peq-download" class="peq-button secondary" type="button">Descargar comprobante</button><button id="peq-print" class="peq-button secondary" type="button">Imprimir / Guardar PDF</button><button id="peq-repeat" class="peq-button secondary" type="button">Realizar otra evaluación</button></div><p class="peq-mail-note peq-muted peq-small">'+(this.canEmail?'Se enviará una copia del resultado a '+e(p.email)+'.':'El envío por correo no está habilitado. Puedes guardar tu comprobante.')+'</p><p id="peq-mail-status" class="peq-message" role="status" aria-live="polite" hidden></p><h3 class="peq-review-heading" id="peq-review-title">Revisión de respuestas</h3><div class="peq-review-list">'+this.questions.map(q=>this.questionHtml(q,r.details.find(d=>d.id===q.id))).join('')+'</div>';
      $('peq-result').hidden=false;$('peq-send').addEventListener('click',()=>this.send());$('peq-download').addEventListener('click',()=>this.download());$('peq-print').addEventListener('click',()=>window.print());$('peq-repeat').addEventListener('click',()=>this.repeat());this.focus('peq-result-title');this.say('Tu resultado está disponible.');
    }
    async send(){
      if(this.sending||!this.canEmail)return;this.sending=true;const button=$('peq-send');button.disabled=true;$('peq-repeat').disabled=true;button.textContent='Enviando…';this.message('peq-mail-status','');$('peq-mail-status').classList.remove('error');
      try{const response=await this.provider.send();if(response.status!=='sent')throw new Error('No se pudo confirmar el envío. Conserva tu comprobante e inténtalo más tarde.');this.message('peq-mail-status','El servicio de correo aceptó el resultado para '+this.profile.email+'. Revisa también la carpeta de correo no deseado.');button.textContent='Resultado enviado';this.canEmail=false;}
      catch(error){$('peq-mail-status').classList.add('error');this.message('peq-mail-status',error.message);button.disabled=false;button.textContent='Enviar resultado a mi correo';}
      finally{this.sending=false;if($('peq-repeat'))$('peq-repeat').disabled=false;}
    }
    download(){const url=URL.createObjectURL(new Blob([C.receiptHtml(this.profile,this.result)],{type:'text/html;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download='Resultado_'+this.result.folio+'.html';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
    repeat(){this.inProgress=false;this.answers={};this.questions=[];this.result=null;this.token='';$('peq-result').hidden=true;$('peq-result').replaceChildren();$('peq-registration').hidden=false;this.puzzle.reset();if(window.turnstile&&this.widgetId!==undefined)window.turnstile.reset(this.widgetId);this.message('peq-register-error','');this.focus('peq-register-title');}
  }
  window.PEQuizApp=PEQuizApp;
  if(window.PE_QUIZ_AUTO_INIT!==false)window.addEventListener('DOMContentLoaded',()=>{window.peQuiz=new PEQuizApp();},{once:true});
})();
