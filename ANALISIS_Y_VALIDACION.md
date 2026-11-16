# Análisis y validación · Cuestionario PE

## Referencia analizada

Se revisaron completos los tres archivos adjuntos del cuestionario de Estructuras de Datos: HTML, CSS y JavaScript.

| Aspecto | Cuestionario de referencia | Versión de Programación Estructurada |
|---|---|---|
| Selección | El alumno elige un tema y se extraen 10 preguntas. | Un intento integra los 14 temas con cuotas proporcionales. |
| Banco | El script solicita `data/preguntas_estructuras.json`. | Se utiliza el banco existente de 215 preguntas, en un JS externo. |
| Orden | Se mezclan las preguntas de un solo tema. | Se mezclan todos los temas, evitando temas consecutivos iguales. |
| Dificultad | El código no establece una proporción mínima. | Se garantiza al menos la mitad de preguntas difíciles. |
| Opciones | Texto simple dentro de una etiqueta. | Texto, salidas o código con saltos, indentación y resaltado. |
| Identificación | Se compara el texto elegido con la respuesta. | Se usan identificadores de opción estables, aunque cambien las letras visibles. |
| Calificación | Aciertos × 10 para 10 preguntas. | Puntos obtenidos / puntos posibles × 100; media=1 y difícil=2. |
| Revisión | Muestra respuestas y explicaciones al terminar. | Conserva esa revisión y añade puntos y desglose por tema. |
| Repetición | Nuevo sorteo dentro del tema seleccionado. | Otro intento con todos los temas, sin repetir las preguntas inmediatamente anteriores cuando hay disponibilidad. |
| Integración | `styles/site.css` y `scripts/site.js` del proyecto ED. | `styles/styles.css`, `layout.js`, `app.js` y componentes maestros del proyecto PE. |

El JSON de preguntas de Estructuras de Datos no venía adjunto. Por tanto, el análisis de esa referencia corresponde a su estructura, estilos y comportamiento programado; las preguntas de esta solución provienen exclusivamente del banco de Programación Estructurada.

## Validación del banco y la selección

- Conversión exacta de las 215 preguntas del Markdown actual: enunciados, código, opciones y respuestas correctas.
- 107 preguntas medias y 108 difíciles disponibles.
- 65 reactivos en el completo: 33 difíciles y 32 medios, con 98 puntos posibles.
- 14 reactivos en la prueba: 7 difíciles y 7 medios, con 21 puntos posibles.
- Comprobación de 3,000 intentos completos y 3,000 rápidos: cuotas, dificultad, identificadores únicos y mezcla de temas.
- Comprobación adicional de 300 repeticiones consecutivas por versión para evitar repetir las preguntas del intento anterior.
- Revisión de la calificación para todo correcto, todo incorrecto y aciertos únicamente difíciles.
- Bloqueo de calificación incompleta y de opciones inexistentes; conservación de la clave tras mezclar alternativas.

## Presentación e integración

Las páginas usan los componentes maestros reales del sitio PE, verificados en el sitio actual. Sus estilos propios están limitados a `page-cuestionario-pe` para no cambiar las demás páginas del curso.

Se mantienen los bloques de código como texto, sin ejecutarlos. Las opciones de código conservan espacios y saltos de línea, con desplazamiento horizontal propio en pantallas pequeñas.

La versión autónoma incluye los datos, estilos y lógica necesarios dentro de un solo HTML para la revisión rápida mediante doble clic. Las páginas integradas cargan los archivos compartidos indicados en el documento de instalación.

## Pruebas en el navegador

| Comprobación | Resultado observado |
|---|---|
| Prueba rápida, todas correctas | 14 aciertos, 21/21 puntos y 100/100; 56 opciones bloqueadas y 14 explicaciones visibles. |
| Repetición de la prueba rápida | 14 preguntas distintas de las anteriores, respuestas reiniciadas y resultado oculto. |
| Completo al comenzar | 65 preguntas, 33 difíciles, 32 medias y 260 opciones. |
| Calificar sin responder | Se impide la evaluación y se enfoca la primera pregunta pendiente. |
| Completo con aciertos solo difíciles | 33 aciertos, 32 errores, 66/98 puntos y 67.3/100, coincidiendo con el cálculo independiente. |
| Retroalimentación del completo | 65 explicaciones visibles, 260 opciones bloqueadas y 14 filas de resultados por tema. |
| Vista autónoma | 14 preguntas y selección funcional, sin scripts ni hojas de estilo externos. |
| Diseño a 375, 768, 1024 y 1440 px | Sin desbordamiento horizontal general ni opciones fuera del ancho disponible. El código conserva su desplazamiento interno. |

Se verificó también que los títulos a los que se salta queden visibles debajo de la cabecera y la barra de progreso. Se corrigió la herencia del fondo de las cabeceras de fila en las tablas para mantener el contraste del texto.

La revisión utilizó copias locales de los estilos y componentes actuales del sitio real; no se publicó ni se modificó el repositorio remoto durante la preparación de esta entrega.
