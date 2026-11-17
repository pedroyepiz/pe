(function(root,factory){"use strict";if(typeof module==='object'&&module.exports)module.exports=factory();else root.PEQuizCore=factory();})(typeof globalThis!=='undefined'?globalThis:this,function(){
  "use strict";
  const QUOTAS=Object.freeze([1,1,2,2,2,2,6,1,1,1,1,1,6,6]);
  const shuffle=(items,random=Math.random)=>{const out=[...items];for(let i=out.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;};
  const tidy=value=>typeof value==='string'?value.normalize('NFC').trim().replace(/\s+/g,' '):'';
  function normalizeProfile(raw={}){if(!raw||typeof raw!=='object'||Array.isArray(raw))raw={};return {name:tidy(raw.name),matricula:tidy(raw.matricula),group:tidy(raw.group).toUpperCase(),email:tidy(raw.email).toLowerCase()};}
  function validateProfile(raw={}){
    const p=normalizeProfile(raw),errors={};
    if(p.name.length<2||p.name.length>100||!/^\p{L}[\p{L}\p{M}]*(?:[ '\u2019-][\p{L}\p{M}]+)*$/u.test(p.name)) errors.name='Escribe tu nombre con letras, espacios o guiones.';
    if(!/^\d{5,10}$/.test(p.matricula)) errors.matricula='Escribe tu matrícula de 5 a 10 dígitos.';
    if(!/^[A-Z0-9][A-Z0-9 _.-]{0,19}$/.test(p.group)) errors.group='Escribe el grupo como aparece en tu lista.';
    if(p.email.length>254||!/^([^\s@<>]{1,64})@([A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$/.test(p.email)) errors.email='Escribe un correo válido.';
    // PE_CORREO_UABC_V2
    if(!errors.email&&!p.email.endsWith("@uabc.edu.mx")) errors.email="Utiliza tu correo institucional @uabc.edu.mx.";
    return {profile:p,errors,valid:Object.keys(errors).length===0};
  }
  function validateData(data){
    if(!data||!Array.isArray(data.questions)||!Array.isArray(data.topics))throw new Error('No se pudieron cargar los ejercicios.');
    const ids=new Set();
    for(const q of data.questions){if(ids.has(q.id)||q.difficulty!=='media'||q.options.length!==4||!q.options.some(o=>o.id===q.correctId))throw new Error('Hay un ejercicio con formato incorrecto.');ids.add(q.id);}
    QUOTAS.forEach((n,t)=>{if(data.questions.filter(q=>q.topic===t).length<n)throw new Error('No hay ejercicios disponibles para comenzar.');});
    return true;
  }
  function mixTopics(questions,random=Math.random){
    const groups=new Map();for(const q of shuffle(questions,random)){if(!groups.has(q.topic))groups.set(q.topic,[]);groups.get(q.topic).push(q);}
    const out=[];let previous=-1;
    while(out.length<questions.length){const remaining=questions.length-out.length-1;const candidates=[...groups].filter(([t,g])=>g.length&&t!==previous&&[...groups].every(([other,rows])=>rows.length-(other===t?1:0)<=(other===t?Math.floor(remaining/2):Math.ceil(remaining/2))));if(!candidates.length)throw new Error('No se pudo preparar la evaluación.');let ticket=random()*candidates.reduce((s,[,g])=>s+g.length,0);let chosen=candidates[candidates.length-1];for(const c of candidates){ticket-=c[1].length;if(ticket<0){chosen=c;break;}}out.push(chosen[1].pop());previous=chosen[0];}
    return out;
  }
  function createAttempt(data,{random=Math.random,previousIds=[]}={}){
    const previous=new Set(previousIds),selected=[];
    QUOTAS.forEach((count,topic)=>{const pool=data.questions.filter(q=>q.topic===topic&&q.difficulty==='media');const preferred=[...shuffle(pool.filter(q=>!previous.has(q.id)),random),...shuffle(pool.filter(q=>previous.has(q.id)),random)];selected.push(...preferred.slice(0,count));});
    const privateQuestions=mixTopics(selected,random).map((q,index)=>{const options=shuffle(q.options,random).map((o,i)=>({...o,sourceId:o.id,id:'o'+i}));return {...q,sourceId:q.id,id:'q'+index,options,correctId:options.find(o=>o.sourceId===q.correctId).id};});
    const publicQuestions=privateQuestions.map(q=>({id:q.id,prompt:q.prompt,code:q.code,options:q.options.map(({id,text,format,language})=>({id,text,format,language}))}));
    return {privateQuestions,publicQuestions};
  }
  function missingQuestions(questions,answers={}){return questions.filter(q=>!q.options.some(o=>o.id===answers[q.id])).map(q=>q.id);}
  function grade(questions,answers,topics,meta={}){
    const missing=missingQuestions(questions,answers);if(missing.length){const e=new Error('Todavía hay respuestas pendientes.');e.missingIds=missing;throw e;}
    if(Object.keys(answers).some(id=>!questions.some(q=>q.id===id)))throw new Error('Se recibieron respuestas no reconocidas.');
    const details=questions.map(q=>({id:q.id,correct:answers[q.id]===q.correctId,selectedId:answers[q.id],correctId:q.correctId,explanation:q.explanation,topic:q.topic,topicTitle:topics.find(t=>t.id===q.topic).title}));
    const correct=details.filter(d=>d.correct).length;
    const byTopic=[...topics].sort((a,b)=>a.id-b.id).map(t=>{const rows=details.filter(d=>d.topic===t.id);return {id:t.id,title:t.title,percentage:Math.round(1000*rows.filter(r=>r.correct).length/rows.length)/10};});
    const completedAt=meta.completedAt||new Date().toISOString();
    return {percentage:Math.round(1000*correct/questions.length)/10,details,byTopic,completedAt,startedAt:meta.startedAt||completedAt,folio:meta.folio||'PE-'+Date.now().toString(36).toUpperCase()};
  }
  function puzzleGeometry(width,random=Math.random){const w=Math.max(160,width),h=Math.round(w*.66),size=Math.round(w*.145);return {width:w,height:h,size,targetX:Math.round(w*(.40+random()*.28)),targetY:Math.round(h*(.25+random()*.28)),max:w-size};}
  const puzzleFits=(value,target,tolerance=5)=>Number.isFinite(value)&&Number.isFinite(target)&&Math.abs(value-target)<=tolerance;
  const escapeHtml=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function formatDate(iso){return new Intl.DateTimeFormat('es-MX',{dateStyle:'long',timeStyle:'short',timeZone:'America/Tijuana'}).format(new Date(iso));}
  function receiptHtml(profile,result){const e=escapeHtml;return '<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Resultado de Programación Estructurada</title><style>body{font:16px system-ui;color:#173d31;max-width:780px;margin:35px auto;padding:20px}h1,h2{color:#006847}dl{display:grid;grid-template-columns:140px 1fr;gap:9px}dt{font-weight:700}dd{margin:0;overflow-wrap:anywhere}table{width:100%;border-collapse:collapse}td,th{padding:10px;border-bottom:1px solid #d6e6df;text-align:left}thead{background:#006847;color:white}.grade{font-size:40px;font-weight:800}</style></head><body><p>UABC · FIAD · Prof. Pedro Núñez Yepiz</p><h1>Resultado de Programación Estructurada</h1><dl><dt>Nombre</dt><dd>'+e(profile.name)+'</dd><dt>Matrícula</dt><dd>'+e(profile.matricula)+'</dd><dt>Grupo</dt><dd>'+e(profile.group)+'</dd><dt>Correo</dt><dd>'+e(profile.email)+'</dd><dt>Folio</dt><dd>'+e(result.folio)+'</dd><dt>Fecha</dt><dd>'+e(formatDate(result.completedAt))+'</dd></dl><p class="grade">'+e(result.percentage)+' / 100</p><h2>Desempeño por tema</h2><table><thead><tr><th>Tema</th><th>Resultado</th></tr></thead><tbody>'+result.byTopic.map(t=>'<tr><td>'+e(t.title)+'</td><td>'+e(t.percentage)+'%</td></tr>').join('')+'</tbody></table></body></html>';}
  function receiptText(profile,result){return ['Programación Estructurada · UABC FIAD','Nombre: '+profile.name,'Matrícula: '+profile.matricula,'Grupo: '+profile.group,'Correo: '+profile.email,'Folio: '+result.folio,'Fecha: '+formatDate(result.completedAt),'Calificación: '+result.percentage+'/100','','Desempeño por tema:',...result.byTopic.map(t=>t.title+': '+t.percentage+'%')].join('\n');}
  return Object.freeze({QUOTAS,shuffle,normalizeProfile,validateProfile,validateData,mixTopics,createAttempt,missingQuestions,grade,puzzleGeometry,puzzleFits,escapeHtml,formatDate,receiptHtml,receiptText});
});
