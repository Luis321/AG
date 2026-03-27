import { useState } from "react";

const GROUPS = [
  { id: "fundamentos", label: "Fundamentos",  color: "#7C3AED" },
  { id: "artefactos",  label: "Artefactos",   color: "#0D9488" },
  { id: "ceremonias",  label: "Ceremonias",   color: "#2563EB" },
  { id: "avanzado",    label: "Avanzado",     color: "#16A34A" },
];

const CHAPTERS = [

  {
    id:"que-es-atf", group:"fundamentos", title:"¿Qué es un ATF?", icon:"🧭",
    color:"#7C3AED", light:"#EDE9FE", border:"#C4B5FD", text:"#4C1D95",
    functional:`El Agile Team Facilitator (ATF) es el rol que crea las condiciones para que un equipo ágil pueda trabajar de forma efectiva, autónoma y sostenible. No es un jefe, no es un PM tradicional, no es quien resuelve los problemas del equipo — es quien facilita que el propio equipo los resuelva.

¿POR QUÉ EXISTE ESTE ROL?
Sin un ATF, los equipos tienden a: reportar en lugar de sincronizar (dailys que se convierten en status meetings), acumular impedimentos sin escalarlos, hacer retros que no producen cambios, y perder el foco en el valor.

CON UN ATF EFECTIVO:
→ El equipo se sincroniza en 15 minutos y sabe qué desbloquear
→ Los impedimentos se visibilizan y escalan antes de bloquear el sprint
→ Las retros producen 1–3 acciones concretas que realmente se implementan
→ Los stakeholders reciben feedback real, no demos de tareas completadas

LA DIFERENCIA CLAVE — Facilitador vs Director:
Un director dice qué hacer y cómo hacerlo. Un facilitador hace preguntas que llevan al equipo a descubrir la respuesta. El ATF nunca impone soluciones — crea el espacio para que el equipo las encuentre.

4 SOMBREROS DEL ATF:
FACILITADOR: diseña y conduce las ceremonias ágiles
COACH: hace preguntas poderosas que desbloquean el pensamiento
GENERADOR DE CLARIDAD: hace visible lo invisible — dependencias, conflictos, supuestos
PROTECTOR DEL EQUIPO: filtra el ruido externo y gestiona la presión de stakeholders

EN EL CONTEXTO BCP:
BCP es un banco grande con múltiples equipos, regulaciones estrictas y stakeholders ejecutivos. El ATF además de facilitar al equipo debe navegar la complejidad organizacional y mantener el equipo protegido del ruido externo.`,
    technical:`DIFERENCIA ATF vs SCRUM MASTER:
→ SM: rol formal de Scrum, enfocado en el framework y el proceso
→ ATF: rol más amplio, trabaja en cualquier framework (Scrum, Kanban, SAFe), énfasis en facilitación y coaching
→ En NTT DATA/BCP en la práctica: ATF = SM con habilidades de facilitación más desarrolladas

LOS 4 SOMBREROS EN DETALLE:

1. FACILITADOR (el más visible):
Diseña y conduce las ceremonias. Usa técnicas estructuradas para que todos participen y las sesiones produzcan resultados concretos.

2. COACH (el más profundo):
Hace preguntas poderosas. No da respuestas — da perspectivas. Ayuda al equipo a reflexionar sobre cómo trabaja.

3. GENERADOR DE CLARIDAD (el más crítico en banca):
Hace visible lo invisible: dependencias no mapeadas, supuestos no explicitados, conflictos no dichos.

4. PROTECTOR DEL EQUIPO:
Gestiona el ruido externo para que el equipo mantenga el foco. No es un escudo total — es un filtro inteligente.

MÉTRICAS DE UN ATF EFECTIVO:
→ Reducción de Lead Time sprint a sprint
→ Impedimentos resueltos vs abiertos (tendencia)
→ Participación en retrospectivas (¿hablan todos?)
→ % de acciones de retro implementadas
→ Team Health score trimestral

PARA LA ENTREVISTA EN BCP:
Cuando te pregunten "¿cómo agregas valor como ATF?", describí en términos concretos: reduciste el Lead Time en X%, resolviste Y impedimentos por sprint, las retros pasaron de producir 0 acciones a 2–3 implementadas. Números, no conceptos.`,
    visual:{ type:"que-es-atf" },
    questions:[
      {
        q:"Un dev llega al daily y dice 'ayer hice X, hoy haré Y, no tengo bloqueos'. Esto se repite en todo el equipo. ¿Qué está pasando y qué hacés?",
        opts:["El equipo trabaja bien — esa estructura es la correcta para el daily","El daily se convirtió en status report. Redirigís: '¿Qué está en riesgo de no terminar este sprint? ¿Hay algo que alguien pueda ayudar a desbloquear hoy?'","El daily necesita más tiempo para que cada uno explique su trabajo","El PO debe estar presente para validar que el trabajo es el correcto"],
        correct:1,
        explanation:"El anti-patrón más común: el Daily como status report. El objetivo es sincronizar el flujo y detectar bloqueos. El ATF redirige hacia el Sprint Goal y el flujo: '¿Qué podemos terminar HOY? ¿Qué está bloqueado? ¿Cómo nos ayudamos?'"
      },
      {
        q:"¿Cuál es la diferencia más crítica entre un ATF y un Project Manager tradicional?",
        opts:["El ATF no tiene responsabilidad sobre los plazos","El PM dirige y controla; el ATF facilita y crea condiciones para que el equipo se auto-organice. El ATF nunca impone soluciones","El ATF solo trabaja con equipos pequeños","No hay diferencia real — son el mismo rol con diferente nombre"],
        correct:1,
        explanation:"La diferencia es filosófica y práctica. El PM planifica, asigna y controla. El ATF facilita, pregunta, crea el espacio para que el equipo planifique y resuelva sus propios problemas. Un ATF que asigna tareas está destruyendo la autonomía del equipo."
      },
      {
        q:"En BCP, un stakeholder ejecutivo presiona directamente a los developers para priorizar 'urgencias' no planificadas. ¿Cuál es el rol del ATF?",
        opts:["Ignorarlo — las urgencias del negocio son legítimas","Actuar como filtro: interceptar la presión, visibilizar el impacto en el sprint goal, llevar la conversación al PO para que decida con datos, y proteger al equipo de interrupciones directas","Escalar al manager de NTT DATA","Agregar la urgencia al backlog sin afectar el sprint actual"],
        correct:1,
        explanation:"El ATF actúa como protector inteligente. No bloquea el negocio — canaliza la urgencia por el proceso correcto: PO evalúa el impacto, el equipo toma la decisión informada. Sin este filtro, los equipos bancarios pierden el foco constantemente."
      }
    ]
  },

  {
    id:"mentalidad", group:"fundamentos", title:"Mentalidad ATF", icon:"🧠",
    color:"#7C3AED", light:"#EDE9FE", border:"#C4B5FD", text:"#4C1D95",
    functional:`La mentalidad es la capa más importante del ATF. Las herramientas se aprenden en días. Los artefactos se dominan en semanas. La mentalidad se construye en meses o años.

5 PRINCIPIOS DE MENTALIDAD DEL ATF:

1. FACILITAR, NO DIRIGIR:
Resistir el impulso de dar la respuesta cuando el equipo pregunta. La pregunta correcta vale más que la respuesta correcta. "¿Qué opciones ven?" > "Yo haría X."

2. HACER VISIBLE LO INVISIBLE:
Los problemas más costosos son los que nadie dice en voz alta. Dependencias asumidas, conflictos no resueltos, supuestos no explicitados. El ATF crea el espacio y la seguridad para que esas cosas se nombren.

3. FOMENTAR AUTONOMÍA:
Un equipo que depende del ATF para funcionar es un fracaso del ATF. El objetivo es que el equipo necesite cada vez menos al facilitador.

4. CUIDAR LA SEGURIDAD PSICOLÓGICA:
Sin ella, nada funciona. Las personas no dicen lo que piensan, los impedimentos se ocultan, las retros son teatro. El ATF la construye con consistencia entre lo que dice y hace.

5. PROMOVER APRENDIZAJE CONTINUO:
Los errores son datos, no fracasos. Las retros son experimentos, no rituales.

PARA BCP:
En un banco, la cultura tiende a ser más conservadora y jerárquica. El ATF debe introducir estas mentalidades sin confrontar la cultura directamente — encontrando el lenguaje que conecte agilidad con los valores del cliente.`,
    technical:`EL COACHING STANCE:
Creer que el equipo tiene la capacidad de encontrar sus propias soluciones. No es ingenuidad — es una elección deliberada de cómo relacionarse.

POWERFUL QUESTIONS (preguntas poderosas):
→ Comienzan con ¿Qué? ¿Cómo? ¿Para qué? (no ¿Por qué? — suena a juicio)
→ No sugieren la respuesta dentro de la pregunta
→ Abren posibilidades en lugar de cerrarlas

Ejemplos prácticos:
→ "¿Qué haría falta para que este sprint fuera un éxito?"
→ "¿Qué está haciendo que esto sea difícil?"
→ "Si tuvieras un mes más, ¿qué harías diferente?"
→ "¿Qué aprendería el equipo si esto no funcionara?"

ESCUCHA ACTIVA — 3 niveles:
Nivel 1: Escuchás las palabras
Nivel 2: Escuchás el significado detrás de las palabras
Nivel 3: Escuchás lo que NO se dice — el silencio, la duda, la energía

Un ATF opera en Nivel 2 y 3.

FEEDBACK EFECTIVO — modelo SBI:
Situation: "En la retro del martes..."
Behavior: "cuando interrumpiste a María mientras hablaba..."
Impact: "noté que ella dejó de participar el resto de la sesión."

No es juicio — es observación. Abre la conversación sin poner a nadie a la defensiva.

RADICAL CANDOR (Kim Scott):
Cuidar genuinamente a la persona Y desafiarla directamente.
→ Empatía ruinosa: cuidar pero no desafiar (evitar decir lo difícil)
→ Agresión descarnada: desafiar sin cuidar (brutal sin empatía)
→ Insinceridad manipuladora: ni cuidar ni desafiar (el peor)
→ Radical Candor: cuidar Y desafiar ← donde debe operar el ATF`,
    visual:{ type:"mentalidad" },
    questions:[
      {
        q:"Un developer senior siempre tiene la respuesta en las retros y el resto deja de participar. ¿Qué técnica usás?",
        opts:["Pedirle al senior que hable menos","Round Robin: dar la palabra a cada persona en orden antes de abrir la discusión libre — garantiza que todas las voces se escuchen primero","Hacer la retro sin el senior","Es normal que los más experimentados lideren las conversaciones"],
        correct:1,
        explanation:"Round Robin es la técnica exacta para este anti-patrón. Al dar la palabra en orden, el ATF garantiza que todos participen antes de que la voz dominante tome el espacio. Combinarlo con Brainwriting (escribir ideas en silencio antes de compartirlas) maximiza la diversidad de perspectivas."
      },
      {
        q:"¿Qué es la seguridad psicológica y qué comportamiento del ATF la destruye más rápido?",
        opts:["Es la confidencialidad de lo que se habla en las retros","Es la creencia de que puedo hablar sin consecuencias negativas — la destruye cuando el ATF reacciona defensivamente o con juicio ante los problemas que el equipo plantea","Es la seguridad física del espacio de trabajo","Es la certeza de que el sprint goal se va a cumplir"],
        correct:1,
        explanation:"La seguridad psicológica (Amy Edmondson) es la creencia de que no seré castigado por hablar. El comportamiento que más rápido la destruye: cuando alguien plantea un problema y el ATF/manager reacciona con defensividad o minimización. Una sola reacción negativa puede silenciar al equipo por meses."
      },
      {
        q:"¿Cuál de estas es una 'powerful question' correctamente formulada?",
        opts:["'¿Por qué el equipo no terminó las historias del sprint?'","'¿No creen que deberían estimar mejor la próxima vez?'","'¿Qué haría falta para que el próximo sprint sea diferente?'","'¿Están todos de acuerdo en que el proceso actual no funciona?'"],
        correct:2,
        explanation:"'¿Qué haría falta para que el próximo sprint sea diferente?' es una powerful question porque: abre posibilidades, usa ¿Qué? (no ¿Por qué? que suena a juicio), está orientada al futuro, y genera reflexión genuina. Las otras opciones implican juicio o sugieren la respuesta dentro de la pregunta."
      }
    ]
  },

  {
    id:"herramientas", group:"fundamentos", title:"Herramientas del ATF", icon:"🧰",
    color:"#7C3AED", light:"#EDE9FE", border:"#C4B5FD", text:"#4C1D95",
    functional:`Las herramientas son los medios que facilitan la colaboración, visibilidad y toma de decisiones del equipo. El ATF no necesita dominarlas todas — necesita saber cuándo usar cuál y por qué.

GESTIÓN DE TRABAJO:
→ Jira / Azure DevOps: estándar corporativo en bancos como BCP. Tableros digitales, workflows configurables, trazabilidad.
→ Trello / ClickUp: más ligeros, buenos para equipos que empiezan.
→ Tableros Kanban físicos: máxima visibilidad. En trabajo híbrido, el tablero digital es obligatorio.

FACILITACIÓN Y COLABORACIÓN:
→ Miro / Mural: el estándar para workshops remotos y retros visuales. Imprescindible en BCP.
→ FigJam: más simple que Miro, bueno para sesiones rápidas.
→ Mentimeter / Slido: dinámicas participativas con votación anónima. Muy útil cuando la seguridad psicológica es baja.

COMUNICACIÓN:
→ Slack / Teams: comunicación asíncrona. En BCP probablemente Teams (ecosistema Microsoft).
→ Confluence / Notion: documentación viva. Working agreements, DoD, DoR, decisiones.

MÉTRICAS:
→ Dashboards de flujo (CFD): visualización del estado del trabajo en el tiempo.
→ Burn-down / Burn-up: seguimiento del progreso del sprint o release.
→ Herramientas de OKRs: alineación de objetivos entre equipo y negocio.

PARA BCP:
Es muy probable que usen Jira + Confluence (Atlassian) o Azure DevOps (Microsoft). Mencionar experiencia con ambos en la entrevista es un diferencial concreto.`,
    technical:`CUÁNDO USAR CADA HERRAMIENTA:

Retro remota con equipo disperso → Miro con plantilla preconfigurada
Votación rápida sin influencia grupal → Mentimeter (anónimo)
Tablero de work items y sprints → Jira con workflow custom
Documentar acuerdos → Confluence con template de Working Agreements
Daily visual → Tablero Kanban (físico o digital)
Workshop de refinamiento → Miro + Planning Poker digital
Métricas de flujo → CFD en Jira o Tableau conectado
Comunicación asíncrona → Canal de Teams/Slack por tipo

CONFIGURACIÓN MÍNIMA DE JIRA PARA UN ATF:
→ Columns: To Do / In Progress / Code Review / Testing / Done
→ WIP limits visibles por columna
→ Sprint goal visible en el board
→ Swimlanes: Feature / Bug / Tech Debt / Impedimento
→ Dashboards: Velocity, CFD, Lead Time

LIBERATING STRUCTURES — el arsenal del facilitador avanzado:
33 microestructuras para maximizar participación. Las más útiles:

1-2-4-All: reflexionar solo (1') → pares (2') → grupos de 4 (4') → todos. Garantiza participación total.
TRIZ: "¿Cómo podríamos garantizar el fracaso absoluto?" Invierte el problema para revelar lo que el equipo está haciendo inconscientemente.
What / So What / Now What: procesar experiencias y extraer acciones.

ANTI-PATRÓN:
Usar herramientas complejas para problemas simples. Un equipo de 5 personas en la misma sala no necesita Miro para una retro — puede hacerlo con post-its. El ATF elige la herramienta más simple que resuelve el problema.`,
    visual:{ type:"herramientas" },
    questions:[
      {
        q:"Tu equipo tiene el daily por Teams pero nadie actualiza el tablero Jira entre sesiones. Los datos de flujo son inútiles. ¿Cuál es la causa raíz y la solución?",
        opts:["El equipo necesita más capacitación en Jira","El proceso de actualización no está integrado en el flujo real. Solución: hacer que la actualización sea parte del daily mismo y definirlo en el Working Agreement","Hay que cambiar de Jira a una herramienta más simple","El ATF debe actualizar el tablero diariamente"],
        correct:1,
        explanation:"El tablero sin actualizar es síntoma de que la herramienta no está integrada en el flujo real. Si actualizar Jira es una tarea separada, nunca se hará consistentemente. Solución: actualización como parte del daily (30 segundos por persona moviendo su tarjeta en vivo) y documentarlo en el Working Agreement."
      },
      {
        q:"¿Para qué situación específica usarías Mentimeter en lugar de un brainstorming abierto en Miro?",
        opts:["Cuando tenés más de 20 personas y Miro se hace lento","Cuando la seguridad psicológica es baja y querés capturar opiniones honestas sin influencia grupal — la anonimidad de Mentimeter permite votar sin miedo al juicio","Cuando el equipo no tiene licencias de Miro","Cuando la conexión a internet es inestable"],
        correct:1,
        explanation:"Mentimeter y Slido son herramientas de participación anónima — su ventaja principal es la seguridad psicológica que habilitan. En equipos con jerarquía visible (el líder técnico opina primero), la anonimidad permite que las voces menos dominantes se expresen honestamente."
      },
      {
        q:"¿Qué es '1-2-4-All' de Liberating Structures y cuándo lo usarías en una retro?",
        opts:["Es una técnica de estimación con 4 niveles de puntos","Microestructura de facilitación: solo (1') → pares (2') → grupos de 4 (4') → todos. Se usa cuando querés máxima participación antes de la discusión plenaria","Es un formato de retro con 4 preguntas en 1 hora","Es una técnica de priorización con votación de puntos"],
        correct:1,
        explanation:"1-2-4-All garantiza que TODOS participen antes de que la voz más dominante tome el espacio. Al pasar por reflexión individual → pares → grupos → todos, el ATF amplifica voces menos visibles y genera ideas más diversas que una discusión abierta directa."
      }
    ]
  },

  {
    id:"artefactos-producto", group:"artefactos", title:"Artefactos de Producto", icon:"📋",
    color:"#0D9488", light:"#CCFBF1", border:"#5EEAD4", text:"#134E4A",
    functional:`Los artefactos de producto son los elementos que dan transparencia y foco al trabajo del equipo. Sin artefactos bien definidos, el equipo trabaja con supuestos distintos sobre qué hacer, cómo hacerlo y cuándo está terminado.

PRODUCT BACKLOG:
Lista priorizada de todo el trabajo que el equipo podría hacer. Gestionada por el PO. El ATF facilita que el backlog esté en el estado correcto para planificar con confianza.

Un backlog saludable tiene:
→ Los ítems de arriba detallados y listos (cumplen la DoR)
→ Los ítems del medio en nivel intermedio de detalle
→ Los ítems del fondo como epics o ideas sin desarrollar
→ No más de 3 sprints de trabajo detallado hacia adelante

USER STORIES — criterio INVEST:
Independent · Negotiable · Valuable · Estimable · Small · Testable

DEFINITION OF READY (DoR):
¿Cuándo está lista una historia para ENTRAR al sprint?
Checklist mínima: criterios de aceptación claros, estimada, sin dependencias externas sin resolver, diseño aprobado si aplica.

DEFINITION OF DONE (DoD):
¿Cuándo está lista una historia para ser ENTREGADA?
Checklist mínima: código en main, tests pasando, code review aprobado, deployed en staging, criterios verificados por QA.

ROADMAP ADAPTATIVO:
No es un Gantt con fechas fijas. Es una secuencia de capacidades con horizontes de tiempo:
→ Now (2–4 semanas): compromisos claros
→ Next (próximo mes): features planificadas
→ Later (6+ semanas): ideas de alto nivel, sujeto a cambio`,
    technical:`DOD vs DOR — la confusión más común:

DEFINITION OF READY (DoR):
→ La cumple el PO/equipo ANTES del Sprint Planning
→ Si una historia no cumple la DoR, no entra al sprint
→ Evita el "sprint planning hell" donde el equipo refina durante la planificación

DEFINITION OF DONE (DoD):
→ La cumple el equipo DURANTE el sprint
→ Si no cumple la DoD, no va al demo ni se cuenta como completada
→ Evita la deuda técnica y los "está casi listo"

CÓMO FACILITAR LA CREACIÓN DE LA DOD:
1. Preguntar: "¿Qué criterios mínimos debe cumplir una historia para decir honestamente que está terminada?"
2. Brainstorm individual (Miro o post-its)
3. Agrupar y priorizar
4. Definir mandatorias vs deseables
5. Documentar en Confluence y hacer visible en el tablero
6. Revisarla cada 3 sprints — debe evolucionar con la madurez del equipo

CRITERIOS DE ACEPTACIÓN — formato Given/When/Then:
→ Dado que [contexto inicial]
→ Cuando [acción del usuario]
→ Entonces [resultado esperado]

Ejemplo bancario: "Dado que soy cliente con cuenta activa, cuando ingreso mi PIN incorrecto 3 veces, entonces mi cuenta se bloquea y recibo un SMS de notificación."

ANTI-PATRONES:
→ El PO define criterios de aceptación sin el equipo → falta de entendimiento compartido
→ Refinar lo mismo 3 veces sin decidir → necesitan más información externa
→ Estimar sin entender → las estimaciones no tienen valor`,
    visual:{ type:"artefactos-producto" },
    questions:[
      {
        q:"En el Sprint Planning, 3 de 5 historias no tienen criterios de aceptación claros. ¿Qué hacés?",
        opts:["Continuar — los criterios se pueden definir durante el sprint","Las 3 historias no cumplen la DoR y no deberían entrar. El ATF facilita que el PO y el equipo decidan: ¿refinamos ahora o las movemos al siguiente sprint?","El ATF define los criterios en el momento para no perder el sprint","Escalar al manager — el PO no hizo bien su trabajo"],
        correct:1,
        explanation:"Este es el caso de uso exacto de la DoR. Historias sin criterios de aceptación claros generarán ambigüedad, retrabajo y conversaciones tardías. El ATF facilita la decisión sin imponerla: ¿refinamos ahora o las postergamos? La segunda opción suele ser más saludable para mantener la cadencia."
      },
      {
        q:"¿Cuál es el problema con una historia que 'está casi lista'?",
        opts:["No hay problema — 'casi lista' significa que le falta un detalle menor","'Casi lista' es la fuente principal de deuda técnica y bugs. La DoD elimina la ambigüedad: una historia o cumple TODOS los criterios o NO está done — no existe el 'casi'","La DoD la define el manager; 'casi lista' la define el developer","'Casi lista' aplica para bugs; la DoD aplica para features"],
        correct:1,
        explanation:"'Casi lista' genera: demos de cosas que no funcionan del todo, bugs en producción, deuda técnica acumulada, y desconfianza del stakeholder. La DoD es una promesa colectiva: o cumple todos los criterios o no está done. Sin gris."
      },
      {
        q:"Un ejecutivo de BCP pide un Gantt con fechas exactas para el próximo trimestre. ¿Cómo responde el ATF?",
        opts:["El ATF crea el Gantt — los ejecutivos tienen derecho a pedirlo","El ATF rechaza el pedido — los Gantts son incompatibles con Agile","El ATF ayuda al PO a preparar un Roadmap Now/Next/Later que responde a la necesidad de visibilidad sin comprometer fechas irreales, y facilita la conversación sobre por qué este formato produce mejores resultados","El ATF escala el conflicto al Agile Coach de NTT DATA"],
        correct:2,
        explanation:"El ATF no rechaza la necesidad — entiende que el ejecutivo quiere visibilidad y predictibilidad, que son legítimas. El roadmap adaptativo satisface esa necesidad con más honestidad que un Gantt ficticio. Un Gantt con fechas fijas en entorno incierto genera expectativas falsas que dañan la confianza más que un roadmap honesto."
      }
    ]
  },

  {
    id:"kanban-flow", group:"artefactos", title:"Kanban, WIP y Flujo", icon:"🌊",
    color:"#0D9488", light:"#CCFBF1", border:"#5EEAD4", text:"#134E4A",
    functional:`El tablero Kanban es la herramienta de visibilidad más poderosa del ATF. No es solo un tablero de tareas — es una representación visual del sistema de trabajo del equipo, con sus flujos, cuellos de botella y capacidad.

4 ELEMENTOS CLAVE DEL KANBAN:

1. BOARD (tablero):
Visualiza el estado de todo el trabajo. Columnas = estados del flujo. Swimlanes = tipos de trabajo.

2. WIP LIMITS (límites de trabajo en progreso):
La regla más contraintuitiva y más poderosa. Si una columna está llena, el equipo no puede iniciar trabajo nuevo — debe terminar lo que está en progreso.
"Stop starting, start finishing."

3. POLICIES EXPLÍCITAS:
Las reglas de cómo fluye el trabajo. ¿Qué significa que una tarjeta pase de "In Progress" a "Review"? Sin políticas explícitas, cada persona interpreta el tablero diferente.

4. FEEDBACK LOOPS:
Daily → Weekly → Retrospectiva → Revisión del sistema. Cada loop tiene un propósito y cadencia diferente.

SEÑALES DE TABLERO SALUDABLE:
→ Pocas tarjetas en cada columna (WIP bajo)
→ El trabajo fluye regularmente de izquierda a derecha
→ Las tarjetas no se quedan estancadas más de X días

SEÑALES DE ALERTA:
→ Muchas tarjetas en "In Progress" → multitasking, WIP alto
→ Tarjetas viejas en "Testing" o "Review" → cuello de botella
→ Columna "Done" vacía al final del sprint → se inicia pero no se termina`,
    technical:`CONFIGURACIÓN ÓPTIMA DE TABLERO KANBAN PARA BCP:

COLUMNAS RECOMENDADAS:
To Do | In Progress | Code Review | QA/Testing | Ready to Deploy | Done

WIP LIMITS RECOMENDADOS:
→ In Progress: máximo n+1 (n = número de devs)
→ Code Review: máximo 2–3 (cuello de botella frecuente)
→ QA/Testing: máximo 3 (si hay 1 QA, máximo 2)
→ Ready to Deploy: máximo 5

POLÍTICAS EXPLÍCITAS — ejemplos:
→ "Una tarjeta pasa a Code Review cuando el dev hizo self-review y todos los tests automáticos pasan"
→ "Una tarjeta en Code Review tiene máximo 24h antes de que el ATF la visibilice en el daily"
→ "Una tarjeta en QA tiene máximo 2 días sin feedback — si no hay comentarios, se asume aprobada"

CYCLE TIME BREAKDOWN — cómo diagnosticar el flujo:
Calcular el tiempo promedio en cada columna individualmente:
→ Si el tiempo en "Code Review" es 3x el de "In Progress": cuello de botella en revisión
→ Solución: pair programming, rotación de reviewers, PRs más pequeños

LAS 3 MÉTRICAS DEL TABLERO:
1. Cycle Time por columna (dónde se acumula el tiempo)
2. WIP promedio por columna (¿se respetan los límites?)
3. Throughput semanal (¿cuántas historias se completan por semana?)

SEÑAL DE ALERTA EN EL CFD:
Una banda que se ensancha semana a semana = cuello de botella en ese estado.
La banda que se adelgaza aguas arriba = falta de trabajo nuevo porque el cuello tapa todo.`,
    visual:{ type:"kanban-flow" },
    questions:[
      {
        q:"El equipo tiene WIP limit de 3 en 'In Progress' pero consistentemente lo viola con 6-7 tarjetas. ¿Qué hacés?",
        opts:["Aumentar el WIP limit a 6-7 para que refleje la realidad","Visibilizar el costo con datos (Cycle Time alto) y facilitar una conversación del equipo sobre qué los impulsa a iniciar en lugar de terminar — generalmente hay un impedimento oculto detrás del multitasking","Prohibir iniciar nuevas tarjetas hasta que el WIP baje a 3","El WIP limit es una sugerencia, no tiene sentido insistir"],
        correct:1,
        explanation:"Aumentar el WIP limit es rendirse. Prohibir sin entender la causa genera resistencia. El ATF investiga: ¿por qué el equipo inicia en lugar de terminar? Causas frecuentes: tarjetas bloqueadas, trabajo mal estimado, o presión cultural de 'parecer ocupado'. Con la causa raíz, el equipo diseña la solución real."
      },
      {
        q:"¿Qué son las 'políticas explícitas' en un tablero Kanban y por qué son críticas?",
        opts:["Son las reglas de confidencialidad sobre quién puede ver el tablero","Son las definiciones claras de cuándo una tarjeta pasa de un estado al siguiente — sin ellas cada persona interpreta el flujo diferente, generando ambigüedad y trabajo en falso estado","Son los WIP limits escritos visiblemente en cada columna","Son los acuerdos de equipo sobre horarios y comunicación"],
        correct:1,
        explanation:"Sin políticas explícitas, 'In Progress' significa cosas diferentes para cada persona. Esto produce un tablero que no refleja la realidad, métricas inútiles y conversaciones sobre el estado del trabajo en lugar de sobre cómo mejorarlo."
      },
      {
        q:"En el CFD del equipo, la banda de 'Code Review' se ensancha semana a semana. ¿Qué indica y cuál es la intervención del ATF?",
        opts:["El equipo produce más código — es señal positiva","Hay un cuello de botella en Code Review: se generan PRs más rápido de lo que se revisan. El ATF lo visibiliza en el daily y facilita acuerdos sobre el proceso de review","El equipo necesita más developers","El ATF debe hacer el code review para desbloquear el cuello de botella"],
        correct:1,
        explanation:"El ensanchamiento de una banda en el CFD es la señal de cuello de botella más clara. La intervención del ATF no es técnica sino de facilitación: hacer visible el problema con datos, y facilitar que el equipo diseñe la solución (PRs más pequeños, rotación de reviewers, pair programming). 'Stop starting, start finishing' aplicado al code review."
      }
    ]
  },

  {
    id:"daily", group:"ceremonias", title:"Daily Scrum / Daily Flow", icon:"☀️",
    color:"#2563EB", light:"#DBEAFE", border:"#93C5FD", text:"#1D4ED8",
    functional:`El Daily es la ceremonia más cotidiana y la más mal ejecutada. En su forma incorrecta es un status report de 30 minutos. En su forma correcta es una sincronización de 15 minutos que identifica impedimentos y mantiene el foco en el Sprint Goal.

EL OBJETIVO REAL:
No es que cada persona informe al ATF lo que hizo. Es que el equipo se sincronice colectivamente sobre el estado del flujo y decida qué priorizar para el día.

LAS 3 PREGUNTAS CORRECTAS (orientadas al flujo):
1. ¿Qué está bloqueado?
2. ¿Qué está en progreso y en riesgo de no terminar?
3. ¿Qué podemos terminar HOY?

LAS 3 PREGUNTAS INCORRECTAS (orientadas al status):
1. ¿Qué hiciste ayer?
2. ¿Qué harás hoy?
3. ¿Tenés impedimentos?

¿POR QUÉ LA DIFERENCIA IMPORTA?
Las preguntas de flujo mantienen el foco en el Sprint Goal y en terminar cosas. Las de status crean un ritual vacío donde cada persona reporta individualmente sin que el equipo colabore.

DURACIÓN: máximo 15 minutos. Si hay temas que necesitan más conversación, se sacan del daily y se resuelven en sesión separada (After Daily / Parking Lot).

PARA BCP EN MODALIDAD HÍBRIDA:
El ATF asegura que la experiencia sea equitativa para remotos y presenciales. Las cámaras encendidas mejoran la energía del daily remoto. El tablero digital debe ser visible para todos.`,
    technical:`FORMATOS DE DAILY SEGÚN EL CONTEXTO:

WALKING THE BOARD:
Recorrer el tablero de derecha a izquierda (de Done hacia To Do). Foco en las tarjetas más cercanas al done y en los bloqueados.
→ Ventaja: foco natural en terminar, no en empezar
→ Mejor para: equipos Kanban o con tablero actualizado

ROUND ROBIN CLÁSICO (con preguntas de flujo):
Cada persona responde las 3 preguntas de flujo en turno.
→ Ventaja: todos participan, estructura clara
→ Mejor para: equipos nuevos o distribuidos

STAND-UP ASÍNCRONO:
Cada persona escribe su update en Slack/Teams antes del daily. La reunión se dedica solo a resolver los impedimentos.
→ Ventaja: ahorra tiempo, documenta el contexto
→ Mejor para: equipos maduros con alta autonomía

SEÑALES DE DAILY DISFUNCIONAL:
→ Dura más de 20 minutos regularmente
→ Las personas reportan al SM, no se hablan entre sí
→ Se resuelven problemas técnicos en el daily
→ Alguien dice "no tengo bloqueos" y el ATF sabe que hay uno no dicho
→ Nadie sabe si el Sprint Goal está en riesgo

TIMEBOXING — la herramienta más simple:
Antes del daily, definir el tiempo total y hacerlo visible (timer). Cuando termina, termina — los temas sin cubrir van al Parking Lot para después.`,
    visual:{ type:"daily" },
    questions:[
      {
        q:"El daily lleva 25 minutos porque dos devs están resolviendo un problema técnico complejo. ¿Qué hacés?",
        opts:["Dejar que lo resuelvan — si es importante para el sprint, el tiempo está bien invertido","Interrumpir con respeto: 'Este tema necesita más tiempo — ¿pueden quedarse 10 minutos después? Sigamos con el resto del equipo.' Documentar en el Parking Lot.","Cancelar el daily para ese día","Pedirle al PO que defina si el problema es prioritario"],
        correct:1,
        explanation:"El daily es para todo el equipo, no para resolver problemas técnicos bilaterales. El ATF interviene con firmeza pero sin agresividad: reconoce la importancia del tema y lo preserva para una sesión separada. Los que no participan del problema no deben esperar 15 minutos que no los involucran."
      },
      {
        q:"¿Cuál es el argumento principal para preferir 'Walking the Board' sobre el Round Robin clásico?",
        opts:["Walking the Board es más rápido porque no todos hablan","Walking the Board mantiene el foco en lo más cercano a Done (de derecha a izquierda), generando un pull natural hacia terminar en lugar de empezar. El Round Robin puede terminar en status reports si las preguntas no están bien formuladas","Walking the Board es más fácil de facilitar para ATFs nuevos","Walking the Board es el formato oficial de SAFe"],
        correct:1,
        explanation:"Walking the Board aplica naturalmente el principio Lean 'Stop starting, start finishing'. Al recorrer el tablero de Done hacia To Do, el equipo prioriza las tarjetas más avanzadas. Esto reduce el WIP y acelera el throughput."
      },
      {
        q:"Una persona dice 'no tengo bloqueos' pero su tarjeta lleva 3 días en la misma columna. ¿Cómo lo manejás?",
        opts:["No decís nada — si dice que no tiene bloqueos, es su responsabilidad","Después del daily, hablás en privado: '¿Cómo va la tarjeta X? Lleva 3 días sin moverse — quería asegurarme de que tenés todo lo que necesitás.' Creás seguridad psicológica para que comparta lo que no dijo en público.","Lo confrontás en el daily frente al equipo: '¿Qué está pasando con tu tarjeta?'","Escalás al manager el problema de productividad"],
        correct:1,
        explanation:"La confrontación pública destruye la seguridad psicológica. La conversación privada después del daily crea un espacio seguro para que la persona comparta lo que no dijo en público (puede ser un bloqueador técnico, un conflicto, o que la historia es más compleja de lo estimado). El ATF actúa desde la curiosidad, no desde el juicio."
      }
    ]
  },

  {
    id:"planning-refinamiento", group:"ceremonias", title:"Planning y Refinamiento", icon:"📅",
    color:"#2563EB", light:"#DBEAFE", border:"#93C5FD", text:"#1D4ED8",
    functional:`El Sprint Planning y el Refinamiento son los dos momentos que definen si el sprint puede ejecutarse bien o si el equipo trabaja en la oscuridad.

REFINAMIENTO — la inversión preventiva:
Sin refinamiento regular: el Sprint Planning se convierte en una sesión de refinamiento urgente, las historias entran mal entendidas, y el equipo descubre dependencias durante el sprint cuando ya es tarde.

El ATF en el refinamiento:
→ Facilita las preguntas correctas: "¿Qué necesitamos saber para estimar esto?"
→ Gestiona el tiempo (1h máximo por sesión)
→ Visibiliza cuando una historia necesita descomposición
→ Asegura que se documente lo que se decide

LAS 3 PREGUNTAS DEL REFINAMIENTO:
1. ¿Esto aporta valor? (si no, sacarlo del backlog)
2. ¿Está suficientemente claro para estimarlo? (si no, agregar criterios)
3. ¿Es demasiado grande para un sprint? (si sí, descomponer)

SPRINT PLANNING — el compromiso realista:
Objetivo: que el equipo se comprometa con un Sprint Goal alcanzable que el negocio valore.

EL SPRINT GOAL — el elemento más subestimado:
Mal: "Sprint 14: completar las historias de autenticación y pagos"
Bien: "Sprint 14: que un usuario nuevo pueda registrarse y hacer su primer pago sin ayuda"

SPRINT REVIEW — feedback real:
La Review no es mostrar que el equipo trabajó. Es obtener feedback del stakeholder sobre el valor entregado para informar la próxima iteración.
Demo de tareas: "Implementamos el endpoint de pagos"
Demo de valor: "Ahora un usuario puede pagar en menos de 30 segundos" — mostrar el flujo completo en vivo.`,
    technical:`CAPACITY-BASED PLANNING:

PASO 1 — DÍAS DISPONIBLES:
Días del sprint - vacaciones/feriados - reuniones no desarrollo = días netos

PASO 2 — HORAS EFECTIVAS:
Días netos × 6h efectivas (de 8h, 2h son reuniones/interrupciones)

PASO 3 — CAPACIDAD EN PUNTOS:
Si el equipo tiene velocidad histórica de X puntos, ese es el techo. No comprometer más del 80% para dejar buffer.

TÉCNICAS DE DESCOMPOSICIÓN de historias grandes:
→ Por pasos del flujo del usuario (paso 1, paso 2, paso 3)
→ Por variación de datos (primero Visa, luego Mastercard, luego débito)
→ Por happy path + edge cases
→ Por spike técnico (explorar primero, implementar después)

PLANNING POKER — cuándo usarlo:
→ Útil: cuando hay alta incertidumbre o divergencia de estimaciones
→ No útil: para historias muy simples o cuando el equipo tiene claro el esfuerzo
→ En BCP: usar Fibonacci (1, 2, 3, 5, 8, 13). Una historia de 13 puntos = señal de que necesita descomposición

FACILITAR LA SPRINT REVIEW PARA BCP:
→ Invitar a stakeholders reales (usuarios de negocio, no solo managers)
→ Demo del producto funcionando, no PowerPoint
→ Preguntas clave: "¿Esto resuelve el problema que plantearon?" / "¿Qué cambiarían?"
→ Documentar el feedback para alimentar el backlog

ANTI-PATRÓN FRECUENTE EN BANCA:
Los sponsors piden ver "el avance del proyecto" en % completado. El ATF ayuda al PO a reencuadrar: "Lo relevante es qué puede hacer ahora el usuario que antes no podía."`,
    visual:{ type:"planning-review" },
    questions:[
      {
        q:"El PO presenta 60 puntos de historias para un equipo con velocidad histórica de 40 puntos. ¿Cuál es el rol del ATF?",
        opts:["Aceptar las 60 puntos — el equipo puede hacer un esfuerzo extra","Rechazar el planning hasta que el PO reduzca exactamente a 40 puntos","Facilitar la conversación: visibilizar que la capacidad es 40 puntos, preguntar al PO cuáles son críticas para el Sprint Goal, y ayudar al equipo a negociar el scope a un compromiso realista","Dividir el equipo en dos grupos para abordar los 60 puntos en paralelo"],
        correct:2,
        explanation:"El ATF no decide — facilita. No es su rol rechazar ni aceptar. Su rol es hacer visible la brecha (60 vs 40), facilitar la conversación sobre prioridades, y ayudar al equipo y al PO a llegar a un compromiso realista. Sobre-comprometerse garantiza un sprint fallido y stakeholders insatisfechos."
      },
      {
        q:"¿Cuál de estos es un Sprint Goal bien formulado?",
        opts:["Sprint 8: completar las historias US-101, US-102, US-103","Sprint 8: mejorar el rendimiento del sistema bancario","Sprint 8: que el cliente pueda consultar su saldo y movimientos desde la app sin ir a la sucursal","Sprint 8: implementar el módulo de consultas del core bancario"],
        correct:2,
        explanation:"Un Sprint Goal describe el valor para el usuario/negocio, no la lista de historias ni la tecnología. 'Que el cliente pueda consultar su saldo desde la app' describe un cambio real en la capacidad del usuario. Esto permite al equipo tomar decisiones durante el sprint y al stakeholder entender el valor entregado."
      },
      {
        q:"En la Sprint Review un ejecutivo de BCP pregunta '¿cuánto porcentaje del proyecto está completado?' ¿Cómo respondés?",
        opts:["Calculás el % de historias completadas vs total del backlog","Ignorás la pregunta y continuás con la demo","Reencuadrás hacia el valor: 'Lo que puedo mostrarte es qué puede hacer ahora el usuario que antes no podía, y cuál es el próximo bloque de valor. ¿Empezamos por ahí?'","Pedís al PO que responda — es su responsabilidad"],
        correct:2,
        explanation:"El % completado es una métrica de actividad que da falsa certeza en entornos inciertos. El ATF/PO reencuadra hacia valor: qué puede hacer el usuario ahora que no podía antes. Esto responde la necesidad real del ejecutivo (¿estamos avanzando bien?) con información más honesta y útil."
      }
    ]
  },

  {
    id:"retrospectiva-atf", group:"ceremonias", title:"Retrospectiva — la joya del ATF", icon:"🔄",
    color:"#2563EB", light:"#DBEAFE", border:"#93C5FD", text:"#1D4ED8",
    functional:`La retrospectiva es la ceremonia más poderosa del arsenal del ATF — y la más frecuentemente mal ejecutada. Es el momento donde el equipo reflexiona sobre CÓMO trabajó para trabajar mejor la próxima vez.

LA ESTRUCTURA BASE (5 pasos):
1. CHECK-IN: crear el espacio seguro y calibrar la energía
2. RECOGER DATOS: ¿qué observamos en el sprint? (hechos, no juicios)
3. GENERAR INSIGHTS: ¿qué significan esos datos? ¿qué patrones vemos?
4. DECIDIR ACCIONES: 1–3 acciones concretas con owner y fecha
5. CIERRE: cerrar el loop y generar energía para el próximo sprint

LAS REGLAS DE ORO:
→ SIEMPRE terminar con acciones concretas — una retro sin acciones es conversación sin impacto
→ SIEMPRE revisar las acciones de la retro anterior — si no se implementaron, ese es el primer tema
→ Foco en el SISTEMA, no en personas
→ VARIAR el formato — hacer siempre Start/Stop/Continue mata el engagement

FORMATOS DISPONIBLES:
→ Start / Stop / Continue: clásico, rápido, para equipos maduros
→ 4Ls (Liked/Learned/Lacked/Longed for): más matiz emocional
→ Sailboat: visual, estratégico
→ Mad/Sad/Glad: cuando hay tensión emocional
→ TRIZ: cuando siempre aparecen los mismos problemas sin resolverse
→ Futurospective: imaginar el éxito futuro (energizante para equipos con baja moral)

PARA BCP:
En entornos bancarios jerárquicos, la seguridad psicológica para la retro debe construirse deliberadamente. El ATF puede usar herramientas anónimas y establecer explícitamente al inicio: "Lo que se dice aquí, queda aquí para mejora del equipo."`,
    technical:`CUÁNDO USAR CADA FORMATO:

START / STOP / CONTINUE:
→ Cuándo: sprint normal, tiempo limitado (45 min), equipo maduro
→ Riesgo: puede volverse predecible si se usa siempre

4Ls (Liked / Learned / Lacked / Longed for):
→ Cuándo: equipo nuevo, separar emociones de observaciones
→ Ventaja: más matiz que Start/Stop/Continue

SAILBOAT:
→ Cuándo: inicio de nuevo proyecto o trimestre, retros estratégicas
→ Viento = impulso. Anclas = lo que frena. Sol = objetivo. Arrecifes = riesgos.

MAD / SAD / GLAD:
→ Cuándo: tensión emocional en el equipo, sprint difícil
→ Valida experiencias antes de ir a los datos

TRIZ (Liberating Structures):
→ Cuándo: siempre los mismos problemas sin resolverse
→ "¿Cómo garantizaríamos el fracaso absoluto?" — invierte el problema
→ Revela comportamientos inconscientes que el análisis directo nunca revela

CHEAT SHEET del ATF:
Equipo callado → 1-2-4-All + Brainwriting
Siempre los mismos hablan → Round Robin obligatorio
Equipo con baja moral → Mad/Sad/Glad primero
Sprint muy tenso → Futurospective
Siempre los mismos problemas → TRIZ

MÉTRICAS DE RETRO SALUDABLE:
→ % de acciones del sprint anterior completadas (objetivo: 100%)
→ Participación: ¿hablan todos?
→ Número de temas únicos (no repetidos)
→ Score de seguridad psicológica (encuesta anónima 1–5)`,
    visual:{ type:"retrospectiva" },
    questions:[
      {
        q:"Es la 6ta retro consecutiva y el equipo vuelve a mencionar 'las historias llegan mal refinadas al sprint'. ¿Qué problema indica y qué hacés diferente?",
        opts:["El problema no tiene solución — hay que aceptarlo y seguir","El equipo identifica el síntoma correcto pero las acciones anteriores no atacaron la causa raíz. Esta retro usás 5 Whys para ir más profundo: ¿por qué llegan mal refinadas? ¿falta de tiempo del PO? ¿DoR no clara? ¿el equipo no participa del refinamiento?","Dejás de incluir ese tema en la retro","Escalás al manager del PO"],
        correct:1,
        explanation:"Un problema que se repite 6 veces indica que las acciones anteriores atacaron síntomas, no la causa raíz. El 5 Whys en esta retro es la herramienta correcta: cada 'por qué' lleva más profundo hasta llegar a algo sistémico que el equipo puede realmente cambiar."
      },
      {
        q:"El equipo genera 12 acciones de mejora en la retro. ¿Cuál es el problema y cómo lo manejás?",
        opts:["12 acciones es perfecto — más compromisos significa más mejora","12 acciones significa que ninguna tiene prioridad real y probablemente ninguna se implementará. El ATF facilita votación para elegir las 1–3 más impactantes con owner y fecha. El resto queda documentado para futuras retros.","Las 12 se distribuyen entre los miembros del equipo — 2–3 por persona","12 acciones indica sprint muy problemático — escalar a management"],
        correct:1,
        explanation:"Menos es más en las retros. 12 acciones = dilución total del foco. La regla del ATF: 1–3 acciones máximo, con owner específico (una persona, no 'el equipo') y fecha de seguimiento. Una acción implementada vale más que 12 prometidas."
      },
      {
        q:"¿Cuándo usarías TRIZ y cuál es su dinámica central?",
        opts:["Cuando el equipo tiene poco tiempo — TRIZ es el formato más corto","Cuando siempre aparecen los mismos problemas sin resolverse. La dinámica: '¿Qué haríamos para garantizar el fracaso absoluto?' Invertir el problema revela comportamientos inconscientes que el equipo está teniendo sin darse cuenta","Cuando hay conflictos interpersonales — TRIZ es una técnica de mediación","Cuando el sprint fue exitoso — TRIZ ayuda a identificar qué replicar"],
        correct:1,
        explanation:"TRIZ rompe patrones de pensamiento establecidos. Al preguntar '¿cómo garantizaríamos el fracaso?', el equipo describe con honestidad los comportamientos más destructivos. Luego: '¿estamos haciendo alguna de estas cosas?' La respuesta suele ser sí — y eso abre cambios reales que el análisis directo nunca reveló."
      }
    ]
  },

  {
    id:"bloqueos", group:"avanzado", title:"Gestión de Bloqueos y Conflictos", icon:"🚧",
    color:"#16A34A", light:"#DCFCE7", border:"#86EFAC", text:"#14532D",
    functional:`La gestión de bloqueos es donde el ATF agrega valor real en el día a día. El valor diferencial aparece cuando hay impedimentos, conflictos y dependencias no resueltas.

TIPOS DE BLOQUEO:
1. TÉCNICO: dependencia de otro equipo, entorno roto, acceso no otorgado
2. DE PROCESO: decisión pendiente de aprobación, acuerdo no alcanzado
3. INTERPERSONAL: conflicto entre miembros del equipo
4. ORGANIZACIONAL: política corporativa, prioridades contradictorias entre áreas

OBSTÁCULO vs IMPEDIMENTO:
OBSTÁCULO: el equipo puede resolverlo solo en <48h. El ATF facilita pero no toma ownership.
IMPEDIMENTO: requiere acción de alguien externo al equipo. El ATF toma ownership y escala activamente.

EL ERROR MÁS COMÚN:
ATFs que "capturan" impedimentos en Jira pero no los escalan activamente. Los impedimentos envejecen, el equipo pierde fe en el proceso.

ESCALAMIENTO EN 3 NIVELES:
1. Equipo → si no resuelve en 24–48h, escalar
2. Programa/Tribe → si no resuelve en 3–5 días, escalar
3. Portfolio/Organización → urgente

COMUNICACIÓN NO VIOLENTA (CNV) para conflictos:
Observación → Sentimiento → Necesidad → Pedido
"Cuando las historias llegan sin criterios [observación], el equipo siente frustración [sentimiento] porque necesitamos claridad [necesidad]. ¿Podemos acordar que las historias cumplan la DoR antes del planning? [pedido]"

PARA BCP:
Los bloqueos más comunes son organizacionales — dependencias de seguridad, compliance, arquitectura empresarial. El ATF aprende a navegar esa burocracia con el PO.`,
    technical:`SISTEMA DE GESTIÓN DE BLOQUEOS:

PASO 1 — VISIBILIZAR:
Todo bloqueo visible en el tablero (tarjeta BLOCKED o swimlane dedicado). Lo invisible no se resuelve.

PASO 2 — CLASIFICAR:
¿El equipo puede resolverlo solo en <48h? → Obstáculo (equipo actúa)
¿Requiere acción externa? → Impedimento (ATF toma ownership)

PASO 3 — ESCALAR CON CONTEXTO:
No escalar "tenemos un bloqueo". Escalar con:
→ Descripción del problema
→ Impacto cuantificado ("X días de sprint en riesgo, Y historias bloqueadas")
→ Opciones posibles de solución
→ Qué decisión o acción se necesita de quién específicamente

PASO 4 — SLA DE RESPUESTA:
→ Nivel equipo: 24–48h
→ Nivel programa/área: 3–5 días
→ Si no hay respuesta en el SLA, re-escalar a nivel superior

PASO 5 — SEGUIMIENTO Y CIERRE:
El ATF hace follow-up activo — no espera que la solución llegue sola.

DINÁMICAS DE CONFLICTO — cheat sheet:
Dos personas en desacuerdo en el daily → Parkear, resolver en privado después
Silencio de alguien que normalmente participa → Check-in en privado
Sarcasmo o pasivo-agresividad → Nombrar el patrón sin señalar a la persona
Acusaciones directas → CNV: separar observación de juicio

GESTIÓN DE DEPENDENCIAS ENTRE EQUIPOS EN BCP:
→ Mapear dependencias del sprint en el Program Board
→ Canal directo con ATFs/SMs de equipos dependientes
→ Escalar al Tribe Lead / RTE si no se resuelve en 3 días
→ Dependencias recurrentes → defecto del modelo operativo, llevar al I&A`,
    visual:{ type:"bloqueos" },
    questions:[
      {
        q:"Un dev menciona en el daily que lleva 3 días esperando acceso a un entorno de staging de otro equipo. ¿Qué hacés?",
        opts:["Agregar al tablero de Jira y esperar a la próxima retro","Pedirle al dev que contacte él mismo al otro equipo","Clasificarlo como impedimento, tomar ownership inmediato, contactar al responsable del staging con contexto del impacto, definir SLA de resolución de 24h con escalamiento si no se resuelve","Esperar hasta que afecte el sprint goal antes de escalar"],
        correct:2,
        explanation:"3 días de bloqueo ya es demasiado — debería haberse escalado el primer día. El ATF toma ownership (el dev no debería perseguirlo), contacta activamente al responsable con contexto e impacto, define SLA de 24h, y si no hay respuesta escala a nivel programa. La velocidad del escalamiento es la diferencia entre un ATF efectivo e inefectivo."
      },
      {
        q:"Un bloqueo lleva 5 días en el tablero sin resolverse. El owner es 'el equipo'. ¿Qué está mal?",
        opts:["5 días es normal para bloqueos organizacionales","'El equipo' como owner equivale a nadie — no hay accountability. El ATF asigna a una persona específica como owner, define SLA concreto, y escala inmediatamente al nivel siguiente con el contexto del impacto en el sprint","El bloqueo debe removerse del tablero para no generar negatividad","El PO debe ser el owner de todos los bloqueos"],
        correct:1,
        explanation:"Responsabilidad colectiva = irresponsabilidad. Un bloqueo con 5 días sin resolución con 'el equipo' como owner es fallo de gestión. Solución: (1) asignar owner individual ahora; (2) escalar con impacto cuantificado; (3) definir SLA de 24h para respuesta del nivel superior."
      },
      {
        q:"¿Cómo aplicarías CNV para abordar con el PO el problema recurrente de historias sin criterios de aceptación?",
        opts:["'Las historias que mandás siempre están incompletas — necesitamos que las mejores.'","'Cuando las historias entran sin criterios [observación], el equipo siente incertidumbre [sentimiento] porque necesitamos claridad para comprometer el sprint goal [necesidad]. ¿Podemos acordar que las historias deben cumplir la DoR antes del planning? [pedido]'","'El equipo está muy molesto con la calidad del refinamiento — esto tiene que mejorar.'","No abordar el tema directamente — mejor esperar a que el PO lo note"],
        correct:1,
        explanation:"La CNV separa la observación del juicio, nombra el impacto sin acusar, y hace un pedido específico y accionable. 'Siempre están incompletas' es un juicio que pone al PO a la defensiva. La CNV mantiene la conversación productiva y enfocada en la necesidad compartida."
      }
    ]
  },

  {
    id:"coaching-agil", group:"avanzado", title:"Coaching Ágil y Dinámicas", icon:"💬",
    color:"#16A34A", light:"#DCFCE7", border:"#86EFAC", text:"#14532D",
    functional:`El coaching ágil diferencia a un ATF que facilita reuniones de uno que transforma equipos. No es terapia ni consultoría — es acompañar al equipo en su proceso de aprendizaje y mejora.

4 MODALIDADES DEL AGILE COACH (ICAgile):

1. TEACHING (enseñar): transmitir conocimiento cuando el equipo no sabe algo. "Explicar qué es Kanban o cómo se hace una retro."

2. MENTORING: compartir experiencia propia cuando es relevante. "Cuando lideré un equipo similar en banca..."

3. FACILITATING: crear el espacio para que el equipo tome sus propias decisiones.

4. COACHING PURO: hacer preguntas que lleven a la persona a descubrir su propia respuesta.

ERROR MÁS COMÚN: quedarse siempre en Teaching cuando el equipo necesita Coaching.

DINÁMICAS PARA SITUACIONES ESPECÍFICAS — cheat sheet:
EQUIPO CALLADO → Brainwriting (escribir ideas en silencio antes de compartir)
DOMINANCIA de alguien → Round Robin (turno obligatorio)
FALTA DE FOCO → Timeboxing explícito + Parking Lot visible
CONFLICTO no dicho → Check-in con "1 palabra que describe cómo te sentís hoy"
FALTA DE IDEAS → Crazy 8s (8 ideas en 8 minutos, sin filtro)
DECISIÓN DIFÍCIL → Fist of Five (consenso de 0 a 5)

FIST OF FIVE para decisiones en grupo:
5: Totalmente de acuerdo
4: De acuerdo
3: Puedo vivir con esto
2: Tengo dudas — necesito escuchar más
1: En desacuerdo fuerte
0: Bloqueo absoluto — la decisión no se toma hasta resolverlo

Promedio de 3+ = se puede avanzar. Un 1 o 0 requiere conversación antes de decidir.`,
    technical:`FEEDBACK EFECTIVO — modelo SBI:

Situation: describir el contexto específico
Behavior: describir la conducta observable, sin juicio
Impact: describir el efecto en vos, el equipo, o el resultado

EJEMPLO POSITIVO:
"En la retro del jueves [S], cuando propusiste el formato de Sailboat [B], el equipo participó con mucha más energía y llegamos a 3 acciones concretas [I]."

EJEMPLO DE MEJORA:
"En el daily de esta mañana [S], cuando respondiste el teléfono mientras Ana hablaba [B], noté que ella dejó de participar el resto de la sesión [I]."

RADICAL CANDOR (Kim Scott):
→ Cuidado personal ALTO + Desafío directo ALTO = Radical Candor ← el ATF opera aquí
→ Cuidado personal ALTO + Desafío directo BAJO = Empatía ruinosa
→ Cuidado personal BAJO + Desafío directo ALTO = Agresión descarnada
→ Cuidado personal BAJO + Desafío directo BAJO = Insinceridad manipuladora

PARA BCP CON FIST OF FIVE:
En culturas bancarias con jerarquías fuertes, las personas votan 5 porque el gerente votó 5 primero. El ATF puede hacerlo anónimo (Mentimeter) para obtener votos honestos.

DIAGNÓSTICO DE MADUREZ DEL EQUIPO:
Nivel 1 — Iniciando: alta dependencia del ATF, ceremonias inconsistentes
Nivel 2 — Desarrollando: ceremonias consistentes, primeras métricas
Nivel 3 — Definido: prácticas establecidas, auto-organización parcial
Nivel 4 — Gestionado: decisiones basadas en datos, alta predictibilidad
Nivel 5 — Optimizando: mejora continua sistémica, experimentación activa`,
    visual:{ type:"coaching-agil" },
    questions:[
      {
        q:"Un developer senior dice 'ya sé cómo hacer esto' cada vez que el ATF propone una nueva técnica. ¿Cómo respondés?",
        opts:["Imponer la técnica de todas formas — el ATF define el proceso","Usar SBI + curiosidad genuina: '¿Qué es lo que ya funciona bien y qué cambiarías?' Convertir la resistencia en expertise que aporta al diseño de la mejora","Ignorar la resistencia y seguir con la técnica propuesta","No proponer más cambios para evitar la resistencia"],
        correct:1,
        explanation:"La resistencia de un senior suele venir de experiencias previas con cambios mal implementados. El ATF no impone ni retrocede — usa curiosidad. Al preguntar qué funciona bien, valida la experiencia del senior y lo convierte en co-diseñador de la mejora."
      },
      {
        q:"¿Cuándo usarías Teaching vs Coaching como ATF?",
        opts:["Teaching siempre — el ATF es el experto en agilidad","Coaching siempre — el ATF nunca da respuestas","Teaching cuando el equipo no conoce algo específico; Coaching cuando el equipo tiene la capacidad de encontrar la solución pero necesita el espacio para reflexionar","Teaching con equipos nuevos; Coaching con equipos maduros — son etapas lineales"],
        correct:2,
        explanation:"El error más costoso es quedarse en Teaching cuando el equipo ya tiene la capacidad. Explicar Kanban a un equipo que nunca lo usó = Teaching correcto. Decirle cómo resolver un conflicto cuando el equipo podría resolverlo solo = Teaching incorrecto. La habilidad del ATF es diagnosticar cuál modo necesita cada situación."
      },
      {
        q:"El equipo vota con Fist of Five. Todos dan 4–5 excepto una persona que da 1. ¿Cuál es la acción correcta?",
        opts:["La mayoría gana — seguir adelante ignorando el voto 1","Cancelar la decisión automáticamente","Dar espacio a la persona que votó 1 para compartir sus preocupaciones antes de avanzar. Un voto 1 no es un veto — es una señal de que hay información importante que el grupo no escuchó todavía","Pedirle que reconsidere su voto dado que el resto está de acuerdo"],
        correct:2,
        explanation:"El Fist of Five no es votación de mayoría — es herramienta de consenso. Un voto 1 es la señal más valiosa de la sesión: hay alguien con información o perspectiva que el grupo no consideró. Ignorarla lleva a decisiones que el equipo no cumple realmente. Pedirle que cambie el voto destruye la herramienta."
      }
    ]
  },

  {
    id:"metricas-atf", group:"avanzado", title:"Métricas sin Micromanagement", icon:"📊",
    color:"#16A34A", light:"#DCFCE7", border:"#86EFAC", text:"#14532D",
    functional:`Las métricas son el lenguaje con el que el ATF habla con los stakeholders ejecutivos en BCP. Sin métricas, las conversaciones sobre el estado del equipo son opiniones. Con métricas correctas, son conversaciones basadas en hechos.

EL PRINCIPIO FUNDAMENTAL:
Las métricas son para aprender y mejorar — nunca para presionar, evaluar individualmente o comparar equipos entre sí.

LAS 3 MÉTRICAS MÍNIMAS:

CYCLE TIME:
Tiempo desde que alguien empieza a trabajar activamente en una historia hasta que está done.
Uso correcto: "Nuestro Cycle Time promedio es 4 días — ¿qué podemos hacer para reducirlo?"
Uso incorrecto: "Juan tarda 5 días y María 2 días — Juan necesita mejorar."

THROUGHPUT:
Número de historias completados por semana o sprint.
Uso correcto: para predecir cuánto puede entregar el equipo en el próximo PI.
Uso incorrecto: para comparar la "productividad" entre equipos.

WIP (Work In Progress):
Cantidad de historias en proceso simultáneamente.
La palanca más inmediata para reducir el Cycle Time.

VELOCITY (con precaución):
Puntos completados por sprint. Útil para planificación interna. Peligrosa si se usa para presionar.

BURN-DOWN vs BURN-UP:
Burn-down: muestra el trabajo restante. Útil para ver si el sprint está en riesgo.
Burn-up: muestra el trabajo completado Y el scope total. Más honesto cuando el scope cambia (lo que suele pasar en BCP con cambios regulatorios).`,
    technical:`CÓMO PRESENTAR MÉTRICAS A EJECUTIVOS DE BCP:

REGLA: los ejecutivos no quieren saber de Cycle Time — quieren saber cuándo llega el valor. Traducir siempre:

Cycle Time → "Desde que acordamos trabajar en algo hasta que está disponible para el usuario, tardamos X días en promedio."
Throughput → "Entregamos entre X y Y capacidades por sprint — proyección de Y meses para el roadmap actual."
WIP → "Tenemos X cosas en proceso — reducirlo a Y aceleraría la entrega."

DASHBOARD MÍNIMO PARA EL QBR EN BCP:
→ Sprint Goal achievement: ¿cuántos sprints alcanzaron el Sprint Goal?
→ Cycle Time trend: ¿mejorando, estable o empeorando?
→ Throughput por sprint: ¿predecible o muy variable?
→ Impedimentos resueltos vs abiertos: ¿el sistema funciona?
→ Team Health score trimestral

VELOCITY — cómo usarla bien:
→ Usar promedio de los últimos 3–5 sprints como baseline
→ No comparar velocity entre equipos
→ No "optimizar" inflando estimaciones
→ Si cae, investigar causa antes de reaccionar

ANTI-PATRÓN: usar métricas para evaluar individualmente:
Produce: inflación de puntos, menor colaboración, pérdida de fidelidad de los datos.
Las métricas ágiles miden el SISTEMA, no a las personas.

P85 EN LUGAR DE PROMEDIO:
Para comprometerse con plazos, usar percentil 85 del Cycle Time:
→ "El 85% de las historias similares se completan en X días o menos"
→ Más honesto y útil que el promedio distorsionado por outliers`,
    visual:{ type:"metricas-atf" },
    questions:[
      {
        q:"El SM anterior usaba la velocity individual para evaluar a los developers en 1:1s con management. ¿Qué problema genera?",
        opts:["Ninguno — la velocity individual es métrica válida de desempeño","Destruye la seguridad psicológica y la colaboración: el equipo empieza a inflar estimaciones para protegerse, deja de ayudarse entre sí, y las métricas dejan de reflejar la realidad. Las métricas deben ser del sistema, no de las personas","Es un problema menor — el equipo se adapta","El problema es técnico: la velocity se mide por equipo, no se puede desagregar"],
        correct:1,
        explanation:"Usar métricas para evaluar individualmente produce los peores efectos: inflación de puntos, menor colaboración, pérdida de fidelidad de los datos. Las métricas ágiles miden el sistema. El ATF debe proteger activamente esta distinción."
      },
      {
        q:"El Cycle Time del equipo subió de 5 días a 9 días en los últimos 3 sprints. ¿Cuál es el proceso correcto del ATF?",
        opts:["Presionar al equipo para trabajar más rápido","Investigar la causa antes de reaccionar: ¿aumentó el WIP? ¿hay cuello de botella en alguna columna? ¿las historias son más grandes? ¿hay un nuevo proceso regulatorio? El dato es una señal para investigar, no una sentencia","Cambiar las estimaciones para que las historias sean más pequeñas","Reportar el problema al management — el equipo rinde por debajo del promedio"],
        correct:1,
        explanation:"El Cycle Time alto es un síntoma — la causa puede ser diversa. En bancos las causas frecuentes son: nuevos procesos de compliance, deuda técnica acumulada, historias más complejas, o un cuello de botella en revisión de seguridad. El ATF abre una investigación con el equipo desde la curiosidad, no desde el juicio."
      },
      {
        q:"Un ejecutivo de BCP pregunta en el QBR '¿por qué bajó la velocity este sprint?' ¿Cómo respondés?",
        opts:["Prometés que el equipo hará más puntos el próximo sprint para compensar","Contextualizás: el equipo tuvo 2 días de feriados y una historia compleja que se dividió en dos sprints. Y mostrás el Cycle Time y Sprint Goal achievement que se mantuvieron estables — métricas más relevantes que la velocity","Pedís disculpas por el bajo rendimiento del equipo","Decís que la velocity no es una métrica válida"],
        correct:1,
        explanation:"La velocity baja no siempre indica un problema. El ATF contextualiza: feriados, cambios de scope, historias más complejas son causas legítimas. Y redirige la atención hacia métricas más relevantes. El ejecutivo necesita saber si el equipo entrega valor, no si sus estimaciones son consistentes."
      }
    ]
  }
];

const tabs = [
  { id:"functional", label:"Funcional" },
  { id:"technical",  label:"Técnico" },
  { id:"visual",     label:"Visual" },
  { id:"quiz",       label:"¿Lo entendí?" }
];

function VisualQueEsATF() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
        {[{icon:"🎙️",n:"Facilitador",d:"Diseña y conduce ceremonias. Crea espacio para conversaciones importantes.",c:"#7C3AED",bg:"#EDE9FE"},{icon:"🧭",n:"Coach",d:"Preguntas poderosas. Acompaña al equipo a descubrir sus propias soluciones.",c:"#0D9488",bg:"#CCFBF1"},{icon:"🔦",n:"Generador de claridad",d:"Hace visible lo invisible: dependencias, conflictos, supuestos no explicitados.",c:"#2563EB",bg:"#DBEAFE"},{icon:"🛡️",n:"Protector del equipo",d:"Filtra el ruido externo. Gestiona interrupciones y presión de stakeholders.",c:"#16A34A",bg:"#DCFCE7"}].map((x,i)=>(
          <div key={i} style={{background:x.bg,border:`1px solid ${x.c}40`,borderRadius:8,padding:"10px 12px"}}>
            <div style={{fontSize:16,marginBottom:4}}>{x.icon}</div>
            <div style={{fontSize:11,fontWeight:700,color:x.c,marginBottom:3}}>{x.n}</div>
            <div style={{fontSize:10,color:"#374151",lineHeight:1.5}}>{x.d}</div>
          </div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
        <div style={{background:"#FEE2E2",border:"1px solid #FCA5A5",borderRadius:8,padding:"10px 12px"}}>
          <div style={{fontSize:12,fontWeight:700,color:"#DC2626",marginBottom:6}}>❌ NO es el ATF</div>
          {["Jefe del equipo","Project Manager tradicional","Quien resuelve los problemas","Quien asigna las tareas"].map((x,i)=><div key={i} style={{fontSize:10,color:"#7F1D1D",lineHeight:1.7}}>{x}</div>)}
        </div>
        <div style={{background:"#DCFCE7",border:"1px solid #86EFAC",borderRadius:8,padding:"10px 12px"}}>
          <div style={{fontSize:12,fontWeight:700,color:"#14532D",marginBottom:6}}>✓ SÍ es el ATF</div>
          {["Facilitador del proceso","Coach del equipo","Generador de claridad","Protector del foco"].map((x,i)=><div key={i} style={{fontSize:10,color:"#14532D",lineHeight:1.7}}>{x}</div>)}
        </div>
      </div>
    </div>
  );
}

function VisualMentalidad() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      {[{n:"Facilitar, no dirigir",d:"Resistir el impulso de dar la respuesta. La pregunta correcta vale más.",c:"#7C3AED"},{n:"Hacer visible lo invisible",d:"Dependencias ocultas, conflictos no dichos, supuestos no explicitados.",c:"#0D9488"},{n:"Fomentar autonomía",d:"Un equipo que depende del ATF es un fracaso del ATF.",c:"#2563EB"},{n:"Cuidar la seguridad psicológica",d:"Sin ella nada funciona. Se construye con consistencia entre palabras y acciones.",c:"#D97706"},{n:"Promover aprendizaje continuo",d:"Los errores son datos. Las retros son experimentos, no rituales.",c:"#16A34A"}].map((x,i)=>(
        <div key={i} style={{background:"#f8fafc",border:`1px solid ${x.c}40`,borderRadius:7,padding:"8px 12px",borderLeft:`4px solid ${x.c}`}}>
          <div style={{fontSize:11,fontWeight:700,color:x.c}}>{x.n}</div>
          <div style={{fontSize:10,color:"#374151",marginTop:2}}>{x.d}</div>
        </div>
      ))}
      <div style={{background:"#0f172a",borderRadius:8,padding:"10px 14px"}}>
        <div style={{fontSize:10,fontWeight:700,color:"#fbbf24",marginBottom:5}}>POWERFUL QUESTIONS — ejemplos para BCP</div>
        {["¿Qué haría falta para que este sprint fuera un éxito?","¿Qué está haciendo que esto sea difícil?","¿Qué aprendería el equipo si esto no funcionara?","¿Si tuvieras un mes más, qué harías diferente?"].map((x,i)=><div key={i} style={{fontSize:10,color:"#e2e8f0",lineHeight:1.7}}>→ {x}</div>)}
      </div>
    </div>
  );
}

function VisualHerramientas() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
        {[{c:"🔧 Gestión de trabajo",items:["Jira / Azure DevOps","Trello / ClickUp","Kanban boards"],col:"#7C3AED",bg:"#EDE9FE"},{c:"🎨 Facilitación",items:["Miro / Mural","FigJam","Mentimeter / Slido"],col:"#0D9488",bg:"#CCFBF1"},{c:"💬 Comunicación",items:["Slack / Teams","Confluence / Notion","Documentación viva"],col:"#2563EB",bg:"#DBEAFE"},{c:"📊 Métricas",items:["CFD / Burn-down","Lead Time / Cycle Time","OKR tracking"],col:"#D97706",bg:"#FEF3C7"}].map((cat,i)=>(
          <div key={i} style={{background:cat.bg,border:`1px solid ${cat.col}40`,borderRadius:8,padding:"10px 12px"}}>
            <div style={{fontSize:11,fontWeight:700,color:cat.col,marginBottom:6}}>{cat.c}</div>
            {cat.items.map((x,j)=><div key={j} style={{fontSize:10,color:"#374151",lineHeight:1.7}}>→ {x}</div>)}
          </div>
        ))}
      </div>
      <div style={{background:"#0f172a",borderRadius:8,padding:"10px 14px"}}>
        <div style={{fontSize:10,fontWeight:700,color:"#fbbf24",marginBottom:6}}>CUANDO VEO ESTO → USO ESTO</div>
        {[["Equipo callado","Brainwriting / 1-2-4-All"],["Alguien domina","Round Robin"],["Falta de foco","Timeboxing + Parking Lot"],["Conflicto","CNV"],["Sin ideas","Crazy 8s"],["Decisión difícil","Fist of Five"]].map((x,i)=>(
          <div key={i} style={{display:"flex",gap:8,marginBottom:4}}>
            <div style={{fontSize:10,color:"#94a3b8",minWidth:120}}>{x[0]}</div>
            <div style={{fontSize:10,color:"#4ade80",fontWeight:600}}>→ {x[1]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualArtefactosProducto() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
        <div style={{background:"#DBEAFE",border:"1px solid #93C5FD",borderRadius:8,padding:"10px 14px"}}>
          <div style={{fontSize:12,fontWeight:700,color:"#1D4ED8",marginBottom:6}}>Definition of READY (DoR)</div>
          <div style={{fontSize:10,color:"#374151",marginBottom:6}}>¿Cuándo entra al sprint?</div>
          {["Criterios de aceptación claros","Estimada por el equipo","Sin dependencias sin resolver","Diseño aprobado (si aplica)","Cabe en un sprint"].map((x,i)=><div key={i} style={{fontSize:10,color:"#1D4ED8",lineHeight:1.7}}>☐ {x}</div>)}
        </div>
        <div style={{background:"#DCFCE7",border:"1px solid #86EFAC",borderRadius:8,padding:"10px 14px"}}>
          <div style={{fontSize:12,fontWeight:700,color:"#14532D",marginBottom:6}}>Definition of DONE (DoD)</div>
          <div style={{fontSize:10,color:"#374151",marginBottom:6}}>¿Cuándo se entrega?</div>
          {["Código en main branch","Tests unitarios pasando","Code review aprobado","Deployed en staging","Criterios verificados por QA"].map((x,i)=><div key={i} style={{fontSize:10,color:"#14532D",lineHeight:1.7}}>☐ {x}</div>)}
        </div>
      </div>
      <div style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:8,padding:"10px 14px"}}>
        <div style={{fontSize:11,fontWeight:700,color:"#1e293b",marginBottom:6}}>INVEST — historia bien formada</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:4}}>
          {[{l:"I",n:"Independent"},{l:"N",n:"Negotiable"},{l:"V",n:"Valuable"},{l:"E",n:"Estimable"},{l:"S",n:"Small"},{l:"T",n:"Testable"}].map((x,i)=>(
            <div key={i} style={{textAlign:"center",background:"#EDE9FE",borderRadius:6,padding:"6px"}}>
              <div style={{fontSize:14,fontWeight:700,color:"#7C3AED"}}>{x.l}</div>
              <div style={{fontSize:9,color:"#4C1D95"}}>{x.n}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisualKanbanFlow() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      <div style={{overflowX:"auto"}}>
        <div style={{display:"flex",gap:4,minWidth:520}}>
          {[{n:"To Do",wip:"∞",items:["US-23","US-24"],c:"#94a3b8",bg:"#f8fafc",alert:false},{n:"In Progress",wip:"3",items:["US-21","US-22"],c:"#2563EB",bg:"#DBEAFE",alert:false},{n:"Code Review",wip:"2",items:["US-19","US-20","US-18"],c:"#D97706",bg:"#FEF3C7",alert:true},{n:"Testing",wip:"2",items:["US-17"],c:"#7C3AED",bg:"#EDE9FE",alert:false},{n:"Done",wip:"∞",items:["US-15","US-16"],c:"#16A34A",bg:"#DCFCE7",alert:false}].map((col,i)=>(
            <div key={i} style={{flex:1,minWidth:88}}>
              <div style={{background:col.bg,border:`2px solid ${col.alert?"#DC2626":col.c+"40"}`,borderRadius:"6px 6px 0 0",padding:"6px 8px",textAlign:"center"}}>
                <div style={{fontSize:10,fontWeight:700,color:col.alert?"#DC2626":col.c}}>{col.n}</div>
                <div style={{fontSize:9,color:col.alert?"#DC2626":"#64748b"}}>WIP:{col.wip}{col.alert?" ⚠️":""}</div>
              </div>
              <div style={{background:"#f8fafc",border:`1px solid ${col.c}30`,borderTop:"none",borderRadius:"0 0 6px 6px",padding:4,minHeight:80}}>
                {col.items.map((it,j)=><div key={j} style={{background:"white",border:`1px solid ${col.c}40`,borderRadius:4,padding:"3px 6px",fontSize:9,color:"#374151",marginBottom:3}}>{it}</div>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{background:"#FEF3C7",border:"1px solid #FCD34D",borderRadius:7,padding:"8px 12px",fontSize:11,color:"#78350F"}}>
        ⚠️ Code Review tiene 3 tarjetas con WIP limit de 2 → cuello de botella. Acción: revisar antes de iniciar cosas nuevas.
      </div>
      <div style={{background:"#0f172a",borderRadius:7,padding:"8px 12px",fontSize:11,color:"#e2e8f0",textAlign:"center"}}>
        <strong style={{color:"#4ade80"}}>"Stop starting, start finishing"</strong> — el principio más contraintuitivo del Kanban
      </div>
    </div>
  );
}

function VisualDaily() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
        <div style={{background:"#FEE2E2",border:"1px solid #FCA5A5",borderRadius:8,padding:"10px 12px"}}>
          <div style={{fontSize:12,fontWeight:700,color:"#DC2626",marginBottom:6}}>❌ STATUS REPORT</div>
          {["'Ayer hice la tarea X'","'Hoy haré la tarea Y'","'No tengo bloqueos'","(se repite 8 veces, 25 min)"].map((x,i)=><div key={i} style={{fontSize:10,color:"#7F1D1D",lineHeight:1.7}}>{x}</div>)}
        </div>
        <div style={{background:"#DCFCE7",border:"1px solid #86EFAC",borderRadius:8,padding:"10px 12px"}}>
          <div style={{fontSize:12,fontWeight:700,color:"#14532D",marginBottom:6}}>✓ SINCRONIZACIÓN DE FLUJO</div>
          {["'¿Qué está bloqueado?'","'¿Qué está en riesgo?'","'¿Qué terminamos HOY?'","(15 min, foco en Sprint Goal)"].map((x,i)=><div key={i} style={{fontSize:10,color:"#14532D",lineHeight:1.7}}>{x}</div>)}
        </div>
      </div>
      <div style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:8,padding:"10px 14px"}}>
        <div style={{fontSize:11,fontWeight:700,color:"#1e293b",marginBottom:6}}>2 FORMATOS RECOMENDADOS</div>
        {[{n:"Walking the Board",d:"Recorrer tablero derecha→izquierda. Foco natural en terminar.",c:"#0D9488"},{n:"Round Robin de flujo",d:"Turno por persona con las 3 preguntas de flujo. Garantiza participación.",c:"#2563EB"},{n:"Stand-up asíncrono",d:"Update en Teams/Slack. Reunión solo para impedimentos. Equipos maduros.",c:"#7C3AED"}].map((x,i)=>(
          <div key={i} style={{display:"flex",gap:8,marginBottom:5}}>
            <div style={{minWidth:160,fontSize:10,fontWeight:700,color:x.c}}>{x.n}</div>
            <div style={{fontSize:10,color:"#64748b"}}>{x.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualPlanningReview() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
        <div style={{background:"#FEE2E2",border:"1px solid #FCA5A5",borderRadius:8,padding:"10px 12px"}}>
          <div style={{fontSize:12,fontWeight:700,color:"#DC2626",marginBottom:6}}>❌ Sprint Goal MALO</div>
          <div style={{fontSize:10,color:"#7F1D1D",lineHeight:1.7}}>"Sprint 8: completar las historias US-101, US-102, US-103 y US-104"</div>
          <div style={{fontSize:9,color:"#991B1B",marginTop:6,fontStyle:"italic"}}>Lista de tareas, no objetivo de valor</div>
        </div>
        <div style={{background:"#DCFCE7",border:"1px solid #86EFAC",borderRadius:8,padding:"10px 12px"}}>
          <div style={{fontSize:12,fontWeight:700,color:"#14532D",marginBottom:6}}>✓ Sprint Goal BUENO</div>
          <div style={{fontSize:10,color:"#14532D",lineHeight:1.7}}>"Sprint 8: que el cliente pueda consultar su saldo y movimientos desde la app sin ir a la sucursal"</div>
          <div style={{fontSize:9,color:"#166534",marginTop:6,fontStyle:"italic"}}>Cambio real en la capacidad del usuario</div>
        </div>
      </div>
      <div style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:8,padding:"10px 14px"}}>
        <div style={{fontSize:11,fontWeight:700,color:"#1e293b",marginBottom:6}}>SPRINT REVIEW — demo de valor, no de tareas</div>
        {[{malo:"'Implementamos el endpoint de pagos'",bien:"'Ahora un usuario puede pagar en menos de 30 segundos'"}].map((x,i)=>(
          <div key={i} style={{marginBottom:6}}>
            <div style={{fontSize:10,color:"#DC2626",marginBottom:3}}>✗ {x.malo}</div>
            <div style={{fontSize:10,color:"#16A34A"}}>✓ {x.bien}</div>
          </div>
        ))}
      </div>
      <div style={{background:"#DBEAFE",border:"1px solid #93C5FD",borderRadius:7,padding:"8px 12px",fontSize:11,color:"#1D4ED8"}}>
        <strong>Roadmap adaptativo:</strong> Now (compromisos claros) → Next (features planificadas) → Later (ideas de alto nivel). No un Gantt.
      </div>
    </div>
  );
}

function VisualRetrospectiva() {
  const formatos = [{n:"Start/Stop/Continue",c:"#7C3AED"},{n:"4Ls",c:"#0D9488"},{n:"Sailboat",c:"#2563EB"},{n:"Mad/Sad/Glad",c:"#D97706"},{n:"TRIZ",c:"#DC2626"},{n:"Futurospective",c:"#16A34A"}];
  return (
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:5}}>
        {formatos.map((f,i)=>(
          <div key={i} style={{background:"#f8fafc",border:`2px solid ${f.c}40`,borderRadius:7,padding:"8px",textAlign:"center"}}>
            <div style={{fontSize:10,fontWeight:700,color:f.c}}>{f.n}</div>
          </div>
        ))}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
        <div style={{background:"#DCFCE7",border:"1px solid #86EFAC",borderRadius:8,padding:"10px 12px"}}>
          <div style={{fontSize:12,fontWeight:700,color:"#14532D",marginBottom:6}}>✓ RETRO EFECTIVA</div>
          {["Todos hablan","Foco en el SISTEMA, no personas","1–3 acciones con owner y fecha","Se revisan acciones de la retro anterior","Sale con energía"].map((x,i)=><div key={i} style={{fontSize:10,color:"#14532D",lineHeight:1.7}}>{x}</div>)}
        </div>
        <div style={{background:"#FEE2E2",border:"1px solid #FCA5A5",borderRadius:8,padding:"10px 12px"}}>
          <div style={{fontSize:12,fontWeight:700,color:"#DC2626",marginBottom:6}}>✗ RETRO QUE FALLA</div>
          {["Siempre los mismos hablan","El ATF habla más que el equipo","Acciones sin owner ni fecha","Los mismos problemas sin resolver","Sale agotado"].map((x,i)=><div key={i} style={{fontSize:10,color:"#7F1D1D",lineHeight:1.7}}>{x}</div>)}
        </div>
      </div>
      <div style={{background:"#0f172a",borderRadius:7,padding:"8px 12px",fontSize:11,color:"#e2e8f0",textAlign:"center"}}>
        <strong style={{color:"#4ade80"}}>1 acción implementada vale más que 10 prometidas.</strong>
      </div>
    </div>
  );
}

function VisualBloqueos() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
        <div style={{background:"#DBEAFE",border:"1px solid #93C5FD",borderRadius:8,padding:"10px 12px"}}>
          <div style={{fontSize:12,fontWeight:700,color:"#1D4ED8",marginBottom:5}}>OBSTÁCULO</div>
          <div style={{fontSize:11,color:"#374151",lineHeight:1.6}}>El equipo puede resolverlo solo en &lt;48h. ATF facilita pero no toma ownership.</div>
        </div>
        <div style={{background:"#FEE2E2",border:"1px solid #FCA5A5",borderRadius:8,padding:"10px 12px"}}>
          <div style={{fontSize:12,fontWeight:700,color:"#DC2626",marginBottom:5}}>IMPEDIMENTO</div>
          <div style={{fontSize:11,color:"#374151",lineHeight:1.6}}>Requiere acción externa. ATF toma ownership y escala activamente.</div>
        </div>
      </div>
      <div style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:8,padding:"10px 14px"}}>
        <div style={{fontSize:11,fontWeight:700,color:"#1e293b",marginBottom:6}}>ESCALAMIENTO EN 3 NIVELES</div>
        {[{n:"Equipo",t:"24–48h",c:"#16A34A"},{n:"Programa / Tribe",t:"3–5 días",c:"#D97706"},{n:"Portfolio / Org.",t:"Urgente",c:"#DC2626"}].map((x,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:8,marginBottom:5}}>
            <div style={{minWidth:100,background:x.c,color:"#fff",borderRadius:4,padding:"3px 8px",fontSize:10,fontWeight:700,textAlign:"center"}}>{x.n}</div>
            <div style={{fontSize:11,color:"#374151"}}>Resolver en: <strong>{x.t}</strong></div>
          </div>
        ))}
      </div>
      <div style={{background:"#DCFCE7",border:"1px solid #86EFAC",borderRadius:7,padding:"8px 12px"}}>
        <div style={{fontSize:11,fontWeight:700,color:"#14532D",marginBottom:4}}>ESCALAMIENTO EFECTIVO incluye:</div>
        {["Descripción del problema","Impacto cuantificado (X días de sprint en riesgo)","Opciones posibles de solución","Qué decisión o acción se necesita de quién"].map((x,i)=><div key={i} style={{fontSize:10,color:"#374151",lineHeight:1.7}}>→ {x}</div>)}
      </div>
    </div>
  );
}

function VisualCoachingAgil() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:6}}>
        {[{n:"Teaching",d:"Transmitir conocimiento. El equipo no sabe algo.",icon:"📚",c:"#7C3AED",bg:"#EDE9FE"},{n:"Mentoring",d:"Compartir experiencia propia cuando es relevante.",icon:"🎓",c:"#0D9488",bg:"#CCFBF1"},{n:"Facilitating",d:"Crear el espacio para que el equipo decida.",icon:"🎙️",c:"#2563EB",bg:"#DBEAFE"},{n:"Coaching puro",d:"Preguntas que llevan a descubrir la propia respuesta.",icon:"💬",c:"#16A34A",bg:"#DCFCE7"}].map((x,i)=>(
          <div key={i} style={{background:x.bg,border:`1px solid ${x.c}40`,borderRadius:8,padding:"10px 12px"}}>
            <div style={{fontSize:16,marginBottom:4}}>{x.icon}</div>
            <div style={{fontSize:11,fontWeight:700,color:x.c,marginBottom:3}}>{x.n}</div>
            <div style={{fontSize:10,color:"#374151",lineHeight:1.5}}>{x.d}</div>
          </div>
        ))}
      </div>
      <div style={{background:"#0f172a",borderRadius:8,padding:"10px 14px"}}>
        <div style={{fontSize:10,fontWeight:700,color:"#fbbf24",marginBottom:6}}>FIST OF FIVE — para tomar decisiones en grupo</div>
        <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
          {[{n:"5",d:"Totalmente de acuerdo",c:"#16A34A"},{n:"4",d:"De acuerdo",c:"#84CC16"},{n:"3",d:"Puedo vivir con esto",c:"#FBBF24"},{n:"2",d:"Tengo dudas",c:"#F59E0B"},{n:"1",d:"En desacuerdo",c:"#EF4444"},{n:"0",d:"Bloqueo total",c:"#DC2626"}].map((x,i)=>(
            <div key={i} style={{textAlign:"center",flex:1,minWidth:50}}>
              <div style={{background:x.c,borderRadius:6,padding:"6px",fontWeight:700,fontSize:14,color:"#fff",marginBottom:3}}>{x.n}</div>
              <div style={{fontSize:8,color:"#94a3b8",lineHeight:1.3}}>{x.d}</div>
            </div>
          ))}
        </div>
        <div style={{fontSize:10,color:"#94a3b8",marginTop:6}}>Promedio 3+ = avanzar. Un 1 o 0 = conversación antes de decidir.</div>
      </div>
    </div>
  );
}

function VisualMetricasATF() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
        {[{n:"Cycle Time",d:"Inicio del trabajo activo → Done. Capacidad real del equipo.",c:"#DC2626",bg:"#FEE2E2"},{n:"Throughput",d:"Historias completadas por semana/sprint. Para proyectar el PI.",c:"#2563EB",bg:"#DBEAFE"},{n:"WIP",d:"Historias en proceso. La palanca más inmediata para reducir Cycle Time.",c:"#D97706",bg:"#FEF3C7"},{n:"Velocity (con cuidado)",d:"Puntos por sprint. Solo para planificación interna. Nunca para comparar.",c:"#7C3AED",bg:"#EDE9FE"}].map((x,i)=>(
          <div key={i} style={{background:x.bg,border:`1px solid ${x.c}40`,borderRadius:8,padding:"10px 12px",borderLeft:`4px solid ${x.c}`}}>
            <div style={{fontSize:11,fontWeight:700,color:x.c,marginBottom:4}}>{x.n}</div>
            <div style={{fontSize:10,color:"#374151",lineHeight:1.5}}>{x.d}</div>
          </div>
        ))}
      </div>
      <div style={{background:"#0f172a",borderRadius:8,padding:"10px 14px"}}>
        <div style={{fontSize:10,fontWeight:700,color:"#fbbf24",marginBottom:6}}>CÓMO TRADUCIR MÉTRICAS PARA EJECUTIVOS DE BCP</div>
        {[{m:"Cycle Time",t:"'Desde que acordamos trabajar en algo hasta que está disponible para el usuario, tardamos X días'"},
          {m:"Throughput",t:"'Entregamos X–Y capacidades por sprint — proyección de Y meses para el roadmap'"},
          {m:"WIP alto",t:"'Tenemos X cosas en proceso — reducirlo a Y aceleraría la entrega'"}].map((x,i)=>(
          <div key={i} style={{marginBottom:6}}>
            <div style={{fontSize:10,color:"#4ade80",fontWeight:700,marginBottom:2}}>{x.m}:</div>
            <div style={{fontSize:10,color:"#e2e8f0",lineHeight:1.5}}>{x.t}</div>
          </div>
        ))}
      </div>
      <div style={{background:"#FEE2E2",border:"1px solid #FCA5A5",borderRadius:7,padding:"8px 12px",fontSize:11,color:"#7F1D1D"}}>
        <strong>ANTI-PATRÓN:</strong> usar métricas para evaluar individualmente → inflación de puntos, menor colaboración, pérdida de fidelidad de los datos.
      </div>
    </div>
  );
}

function Visual({ chapter }) {
  const t = chapter.visual.type;
  if(t==="que-es-atf")          return <VisualQueEsATF/>;
  if(t==="mentalidad")          return <VisualMentalidad/>;
  if(t==="herramientas")        return <VisualHerramientas/>;
  if(t==="artefactos-producto") return <VisualArtefactosProducto/>;
  if(t==="kanban-flow")         return <VisualKanbanFlow/>;
  if(t==="daily")               return <VisualDaily/>;
  if(t==="planning-review")     return <VisualPlanningReview/>;
  if(t==="retrospectiva")       return <VisualRetrospectiva/>;
  if(t==="bloqueos")            return <VisualBloqueos/>;
  if(t==="coaching-agil")       return <VisualCoachingAgil/>;
  if(t==="metricas-atf")        return <VisualMetricasATF/>;
  return null;
}

function Quiz({ questions, color, light, onComplete }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  function answer(qi, oi) { if (submitted || answers[qi] !== undefined) return; setAnswers(a => ({...a,[qi]:oi})); }
  function submit() {
    if (Object.keys(answers).length < questions.length) return;
    const score = questions.reduce((s,q,i) => s+(answers[i]===q.correct?1:0), 0);
    setSubmitted(true); onComplete(score);
  }
  return (
    <div>
      {questions.map((q,qi) => (
        <div key={qi} style={{marginBottom:16}}>
          <div style={{fontSize:13,fontWeight:500,color:"#1e293b",marginBottom:8,lineHeight:1.5}}>{qi+1}. {q.q}</div>
          <div style={{display:"flex",flexDirection:"column",gap:5}}>
            {q.opts.map((o,oi) => {
              let bg="#f8fafc", border="1px solid #e2e8f0", tc="#374151";
              if(answers[qi]===oi) { bg=light; border=`1px solid ${color}`; tc="#1e293b"; }
              if(submitted && oi===q.correct) { bg="#f0fdf4"; border="1px solid #86efac"; tc="#14532d"; }
              if(submitted && answers[qi]===oi && oi!==q.correct) { bg="#fef2f2"; border="1px solid #fca5a5"; tc="#7f1d1d"; }
              return <div key={oi} onClick={()=>answer(qi,oi)} style={{padding:"9px 13px",borderRadius:7,border,background:bg,cursor:submitted||answers[qi]!==undefined?"default":"pointer",fontSize:12,color:tc,lineHeight:1.4}}>{o}</div>;
            })}
          </div>
          {submitted && <div style={{marginTop:8,padding:"8px 12px",background:answers[qi]===q.correct?"#f0fdf4":"#fef2f2",border:`1px solid ${answers[qi]===q.correct?"#86efac":"#fca5a5"}`,borderRadius:6,fontSize:12,color:answers[qi]===q.correct?"#14532d":"#7f1d1d",lineHeight:1.6}}>{answers[qi]===q.correct?"✓ ":"✗ "}{q.explanation}</div>}
        </div>
      ))}
      {!submitted && <button onClick={submit} disabled={Object.keys(answers).length<questions.length} style={{marginTop:4,padding:"9px 20px",borderRadius:7,border:"none",background:Object.keys(answers).length<questions.length?"#e2e8f0":color,color:Object.keys(answers).length<questions.length?"#94a3b8":"#fff",fontSize:13,fontWeight:600,cursor:Object.keys(answers).length<questions.length?"not-allowed":"pointer"}}>Verificar respuestas</button>}
    </div>
  );
}

export default function ATFGuia() {
  const [chapter, setChapter] = useState(0);
  const [tab, setTab] = useState("functional");
  const [quizDone, setQuizDone] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [totalQ, setTotalQ] = useState(0);
  const [quizKey, setQuizKey] = useState(0);

  const ch = CHAPTERS[chapter];
  const pct = totalQ>0 ? Math.round((totalScore/totalQ)*100) : 0;
  const doneCh = Object.keys(quizDone).length;

  function handleQuizComplete(score) {
    if (!quizDone[chapter]) { setTotalScore(s=>s+score); setTotalQ(t=>t+ch.questions.length); }
    setQuizDone(d=>({...d,[chapter]:{done:true,score,total:ch.questions.length}}));
  }
  function goChapter(idx) { setChapter(idx); setTab("functional"); setQuizKey(k=>k+1); }

  return (
    <div style={{fontFamily:"var(--font-sans)",maxWidth:780,margin:"0 auto"}}>

      <div style={{background:"#0f172a",borderRadius:"12px 12px 0 0",padding:"12px 16px",display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:32,height:32,borderRadius:8,background:"rgba(13,148,136,.25)",border:"1px solid rgba(94,234,212,.4)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:16}}>🧭</div>
        <div style={{flex:1}}>
          <div style={{fontSize:13,fontWeight:500,color:"#f1f5f9"}}>Agile Team Facilitator — Guía interactiva · BCP prep</div>
          <div style={{fontSize:11,color:"#64748b"}}>{CHAPTERS.length} secciones · {CHAPTERS.reduce((s,c)=>s+c.questions.length,0)} preguntas · Herramientas · Artefactos · Ceremonias · Avanzado</div>
        </div>
        {doneCh>0 && <div style={{textAlign:"right"}}><div style={{fontSize:18,fontWeight:700,color:pct>=80?"#4ade80":pct>=60?"#fbbf24":"#f87171"}}>{pct}%</div><div style={{fontSize:10,color:"#64748b"}}>{doneCh}/{CHAPTERS.length}</div></div>}
      </div>

      <div style={{background:"#1e293b",padding:"8px 12px",borderBottom:"1px solid #0f172a"}}>
        {GROUPS.map(group => {
          const gc = CHAPTERS.filter(c=>c.group===group.id);
          return (
            <div key={group.id} style={{marginBottom:6}}>
              <div style={{fontSize:10,fontWeight:700,color:group.color,letterSpacing:".05em",marginBottom:4,paddingLeft:2}}>{group.label.toUpperCase()}</div>
              <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
                {gc.map(c => {
                  const idx = CHAPTERS.indexOf(c);
                  return <button key={idx} onClick={()=>goChapter(idx)} style={{fontSize:11,padding:"5px 10px",borderRadius:6,cursor:"pointer",background:chapter===idx?c.color:"transparent",color:chapter===idx?"#fff":"#94a3b8",border:`1px solid ${chapter===idx?c.color:"#334155"}`,fontWeight:chapter===idx?600:400,display:"flex",alignItems:"center",gap:4,transition:".15s"}}>
                    {quizDone[idx]&&<span style={{fontSize:9}}>{quizDone[idx].score===quizDone[idx].total?"✓":"~"}</span>}
                    {c.icon} {c.title}
                  </button>;
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{background:"#fff",border:"1px solid #e2e8f0",borderTop:"none"}}>
        <div style={{background:ch.light,borderBottom:`2px solid ${ch.border}`,padding:"14px 18px"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
            <div style={{width:42,height:42,borderRadius:10,background:ch.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{ch.icon}</div>
            <div style={{flex:1}}>
              <div style={{fontSize:15,fontWeight:700,color:ch.text}}>{ch.title}</div>
              <div style={{fontSize:11,color:ch.color,marginTop:2}}>{ch.questions.length} preguntas{quizDone[chapter]&&` · ${quizDone[chapter].score}/${quizDone[chapter].total} correctas`}</div>
            </div>
            <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
              {tabs.map(t=><button key={t.id} onClick={()=>setTab(t.id)} style={{fontSize:11,padding:"5px 12px",borderRadius:6,cursor:"pointer",background:tab===t.id?ch.color:"transparent",color:tab===t.id?"#fff":ch.text,border:`1px solid ${tab===t.id?ch.color:ch.border}`,fontWeight:tab===t.id?600:400}}>{t.label}</button>)}
            </div>
          </div>
        </div>

        <div style={{padding:"16px 18px"}}>
          {tab==="functional"&&<div><div style={{fontSize:10,fontWeight:700,color:"#94a3b8",letterSpacing:".5px",marginBottom:10}}>¿QUÉ ES Y POR QUÉ IMPORTA?</div><div style={{fontSize:13,color:"#374151",lineHeight:1.85,whiteSpace:"pre-line"}}>{ch.functional}</div><div style={{marginTop:14,padding:"10px 14px",background:ch.light,border:`1px solid ${ch.border}`,borderRadius:8,fontSize:12,color:ch.text}}>Orden recomendado: <strong>Funcional → Técnico → Visual → ¿Lo entendí?</strong></div></div>}
          {tab==="technical"&&<div><div style={{fontSize:10,fontWeight:700,color:"#94a3b8",letterSpacing:".5px",marginBottom:10}}>CÓMO SE IMPLEMENTA — DETALLES</div><div style={{background:"#0f172a",borderRadius:8,padding:"14px 16px"}}><div style={{fontSize:12,color:"#e2e8f0",lineHeight:1.9,whiteSpace:"pre-line",fontFamily:"monospace"}}>{ch.technical}</div></div></div>}
          {tab==="visual"&&<div><div style={{fontSize:10,fontWeight:700,color:"#94a3b8",letterSpacing:".5px",marginBottom:10}}>DIAGRAMA / ESTRUCTURA VISUAL</div><Visual chapter={ch}/><div style={{fontSize:12,color:"#64748b",marginTop:10}}>Mapa mental para la entrevista — estudiá la estructura antes del quiz.</div></div>}
          {tab==="quiz"&&<div><div style={{fontSize:10,fontWeight:700,color:"#94a3b8",letterSpacing:".5px",marginBottom:12}}>VALIDA TU COMPRENSIÓN</div>{quizDone[chapter]?(<div><div style={{background:quizDone[chapter].score===quizDone[chapter].total?"#f0fdf4":"#fffbeb",border:`1px solid ${quizDone[chapter].score===quizDone[chapter].total?"#86efac":"#fcd34d"}`,borderRadius:8,padding:"12px 14px",marginBottom:12}}><div style={{fontSize:13,fontWeight:600,color:"#1e293b"}}>{quizDone[chapter].score===quizDone[chapter].total?"🎯 ¡Sección dominada!":"✅ Sección completada"}</div><div style={{fontSize:12,color:"#64748b",marginTop:4}}>{quizDone[chapter].score}/{quizDone[chapter].total} correctas</div></div><button onClick={()=>{setQuizDone(d=>{const nd={...d};delete nd[chapter];return nd;});setQuizKey(k=>k+1);}} style={{fontSize:12,padding:"8px 16px",borderRadius:7,border:"1px solid #e2e8f0",background:"#f8fafc",cursor:"pointer",color:"#64748b"}}>Repetir quiz</button></div>):(<Quiz key={quizKey} questions={ch.questions} color={ch.color} light={ch.light} onComplete={handleQuizComplete}/>)}</div>}
        </div>

        <div style={{padding:"10px 18px 14px",borderTop:"1px solid #f1f5f9",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <button onClick={()=>goChapter(chapter-1)} disabled={chapter===0} style={{fontSize:12,padding:"8px 16px",borderRadius:7,border:"1px solid #e2e8f0",background:"#f8fafc",cursor:chapter===0?"not-allowed":"pointer",color:chapter===0?"#cbd5e1":"#374151"}}>← Anterior</button>
          <div style={{fontSize:11,color:"#94a3b8"}}>{chapter+1} / {CHAPTERS.length}</div>
          <button onClick={()=>goChapter(chapter+1)} disabled={chapter===CHAPTERS.length-1} style={{fontSize:12,padding:"8px 16px",borderRadius:7,border:`1px solid ${ch.color}`,background:ch.color,color:"#fff",cursor:chapter===CHAPTERS.length-1?"not-allowed":"pointer",opacity:chapter===CHAPTERS.length-1?.5:1}}>Siguiente →</button>
        </div>
      </div>
    </div>
  );
}
