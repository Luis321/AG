import { useState } from "react";

const GROUPS = [
  { id: "psicologia",  label: "Psicología",   color: "#0D9488" },
  { id: "casos",       label: "Casos Reales", color: "#D97706" },
  { id: "experto",     label: "Nivel Experto", color: "#DC2626" },
];

const CHAPTERS = [

  // ══════════ PSICOLOGÍA ══════════
  {
    id:"seguridad-psicologica", group:"psicologia", title:"Seguridad Psicológica en Práctica", icon:"🛡️",
    color:"#0D9488", light:"#CCFBF1", border:"#5EEAD4", text:"#134E4A",
    functional:`La seguridad psicológica (Amy Edmondson, Harvard) es la creencia de que puedo hablar, preguntar, equivocarme o desafiar sin consecuencias negativas para mi carrera o mis relaciones. Es la condición habilitante de todo lo demás en Agile.

Sin seguridad psicológica:
→ Las retrospectivas son teatro — nadie dice lo que realmente piensa
→ Los impedimentos se ocultan hasta que explotan
→ Las estimaciones son infladas para "protegerse"
→ Los errores no se reportan hasta que ya es demasiado tarde
→ Los líderes reciben información filtrada, nunca la realidad

CÓMO DETECTAR QUE NO EXISTE — señales concretas:

SEÑALES VERBALES:
→ "Todo está bien" en todas las retros (estadísticamente improbable)
→ Siempre las mismas 2-3 personas hablan; el resto asiente
→ Nadie cuestiona al tech lead aunque su decisión sea claramente subóptima
→ Los impedimentos aparecen como "casi listo", nunca como "estoy bloqueado"
→ El equipo acepta scope adicional sin objeción, aunque sea imposible

SEÑALES NO VERBALES:
→ Las personas se miran antes de hablar (buscan permiso implícito)
→ Cámaras siempre apagadas en reuniones remotas
→ Silencio después de que el manager opina
→ El equipo acuerda en la reunión y hace lo contrario después

SEÑALES SISTÉMICAS:
→ Los errores no se reportan hasta que explotan
→ Las retros producen los mismos temas sin resolución
→ Nadie propone mejoras espontáneamente
→ El equipo no escala impedimentos hasta que bloquean el sprint completo

CÓMO CONSTRUIRLA — las 4 acciones más efectivas:

1. MODELAR LA VULNERABILIDAD (la más poderosa):
Cuando el ATF/SM admite públicamente un error propio: "La retro pasada no funcionó porque no preparé bien el formato — voy a hacerlo diferente." Un comportamiento real da más permiso que cien reglas escritas.

2. RESPONDER CORRECTAMENTE A LAS PRIMERAS SEÑALES:
La primera vez que alguien habla y recibe una respuesta defensiva o minimizante, el mensaje del sistema es: "no es seguro hablar aquí." Una sola mala respuesta puede silenciar al equipo por meses.

3. CURIOSIDAD ANTES QUE JUICIO:
"Contame más sobre eso" antes que "¿Cómo llegó a ese punto?" La segunda frase suena a juicio aunque no sea la intención.

4. ERRORES COMO DATOS:
Post-mortems sin culpa. "¿Qué aprendemos de esto?" en lugar de "¿Quién fue responsable?"`,
    technical:`LOS 4 NIVELES DE SEGURIDAD PSICOLÓGICA (Timothy Clark):

NIVEL 1 — SEGURIDAD DE INCLUSIÓN:
"Soy parte del equipo, me aceptan como soy."
Sin esto: las personas no participan activamente, se sienten observadas, no aportan perspectivas genuinas.
Cómo construir: rituales de bienvenida, atención explícita a voces menos visibles, celebrar la diversidad de perspectivas.

NIVEL 2 — SEGURIDAD DE APRENDIZAJE:
"Puedo preguntar, pedir ayuda, admitir que no sé, sin ser juzgado."
Sin esto: las personas aprenden solas, ocultan sus gaps, no preguntan aunque estén bloqueadas.
Cómo construir: SM/ATF hace preguntas "obvias" en público, normaliza el "no sé, busquemos juntos."

NIVEL 3 — SEGURIDAD DE CONTRIBUCIÓN:
"Puedo proponer, disentir, aportar perspectivas diferentes sin consecuencias."
Sin esto: todos asienten en las reuniones y hacen lo contrario después. El grupo valida al que tiene más poder.
Cómo construir: Fist of Five visible, Round Robin para escuchar todas las voces, reconocer explícitamente las ideas que desafían el status quo.

NIVEL 4 — SEGURIDAD DE DESAFÍO:
"Puedo cuestionar el rumbo, desafiar al liderazgo, señalar cuando el sistema falla."
Sin esto: los problemas sistémicos se visibilizan tarde. Los líderes reciben información filtrada.
Cómo construir: canales anónimos para feedback, liderazgo que modela receptividad al challenge, post-mortems sin culpa como práctica permanente.

DIAGNÓSTICO RÁPIDO — en la próxima retro:
Pregunta anónima en Mentimeter: "En una escala del 1 al 10, ¿cuánto sentís que podés decir lo que realmente pensás en este equipo sin consecuencias negativas?"
→ Promedio > 8: alta seguridad — foco en mantenerla
→ Promedio 5-7: seguridad parcial — hay temas prohibidos implícitos
→ Promedio < 5: trabajo más urgente del ATF en este equipo

PARA BCP — contexto bancario jerárquico:
En organizaciones bancarias la jerarquía cultural puede suprimir el Nivel 3 y 4 aunque el Nivel 1 y 2 sean fuertes. El ATF en BCP necesita crear estructuras explícitas (votación anónima, breakouts sin el manager, canales de feedback) que suplan la falta de seguridad cultural.`,
    visual:{ type:"seguridad-psicologica" },
    questions:[
      {
        q:"En 6 retros consecutivas el equipo nunca menciona problemas con las decisiones del tech lead senior, aunque todos saben que algunas bloquean el trabajo. ¿Qué nivel de seguridad psicológica falta y qué hacés?",
        opts:["Nivel 1 — el equipo no se siente incluido","Nivel 3 falta (contribución) o Nivel 4 (desafío al liderazgo). El silencio sistemático sobre un tema específico indica que hay un 'tema prohibido'. Acción: usar Mentimeter anónimo en la fase de datos de la próxima retro y facilitar la conversación sobre patrones sin nombrar personas.","El equipo está bien — si no hay conflictos visibles, la seguridad psicológica es alta","Hay que escalar el comportamiento del tech lead a HR directamente"],
        correct:1,
        explanation:"El silencio sistemático sobre un tema específico es la señal más clara de baja seguridad en los niveles 3 y 4. El equipo puede tener alta seguridad para hacer preguntas (Nivel 2) pero baja seguridad para desafiar a figuras de autoridad (Nivel 4). Las herramientas anónimas crean la seguridad estructural que la cultura todavía no tiene. El ATF hace visible lo invisible sin señalar personas."
      },
      {
        q:"¿Cuál es la acción más poderosa para construir seguridad psicológica en las primeras 2 semanas en un nuevo equipo?",
        opts:["Organizar un team building para que el equipo se conozca","Establecer reglas explícitas de confidencialidad en las retros","Modelar la vulnerabilidad públicamente: admitir un error propio en las primeras sesiones. 'El planning del martes no funcionó bien porque no verifiqué que las historias cumplían la DoR.' Este comportamiento real da permiso al equipo para hacer lo mismo — más que cualquier regla escrita.","Hacer una encuesta de seguridad psicológica para tener un baseline"],
        correct:2,
        explanation:"La modelación de vulnerabilidad es la intervención más efectiva y menos ejecutada — porque requiere que el facilitador baje su propia guardia. Un comportamiento real del ATF ('admití mi error') da más permiso que cien reglas de 'aquí podemos equivocarnos'. La regla dice cómo deberías actuar. El comportamiento del líder demuestra cómo el sistema realmente responde a los errores."
      },
      {
        q:"El equipo de BCP tiene Nivel 2 alto (preguntan y aprenden libremente) pero Nivel 4 bajo (nadie cuestiona al gerente). ¿Qué intervención específica hacés?",
        opts:["El Nivel 2 es suficiente — los niveles superiores se desarrollan con el tiempo","Crear canales estructurales para el Nivel 4: encuestas anónimas de feedback al liderazgo, post-mortems sin culpa como práctica permanente, y facilitar que el gerente modele receptividad al challenge respondiendo sin defensividad a los primeros que se animen a cuestionar.","Hablar con el gerente para que sea más accesible en términos generales","Agregar más herramientas anónimas en todas las ceremonias"],
        correct:1,
        explanation:"Los niveles de seguridad psicológica son escalables pero no automáticos. Tener Nivel 2 no garantiza Nivel 4. Para construir el Nivel 4 en una cultura bancaria jerárquica, se necesitan dos cosas simultáneas: estructuras que permitan el desafío (canales anónimos, post-mortems) Y liderazgo que modele receptividad (el gerente no puede ser defensivo cuando alguien lo desafía por primera vez — esa respuesta define si el Nivel 4 es posible en ese equipo)."
      }
    ]
  },

  {
    id:"toma-decisiones", group:"psicologia", title:"Toma de Decisiones en Grupos", icon:"⚖️",
    color:"#0D9488", light:"#CCFBF1", border:"#5EEAD4", text:"#134E4A",
    functional:`La toma de decisiones en grupos es donde más se pierde tiempo y donde más se cometen errores sistémicos. El ATF experto no solo facilita la decisión — diseña el proceso que produce la mejor decisión posible en el tiempo disponible.

CONSENSO vs CONSENTIMIENTO — la distinción más útil:

CONSENSO: todos están de acuerdo.
Raramente alcanzable. Costoso en tiempo. Inhibe el pensamiento crítico si se persigue a toda costa.
Cuándo usarlo: decisiones que afectan profundamente a todos y donde la implementación requiere entusiasmo genuino de cada persona.

CONSENTIMIENTO: nadie tiene una objeción fundamental que el grupo no pueda vivir.
Más rápido. Permite el disenso sin parálisis. Es el estándar ágil real.
La pregunta correcta no es "¿estás de acuerdo?" sino "¿podés vivir con esto y comprometerte a implementarlo?"
Cuándo usarlo: la mayoría de las decisiones operativas y tácticas.

DECISIÓN TIMEBOXED — para parálisis decisional:
"Tenemos 10 minutos para tomar esta decisión. Si no llegamos a acuerdo, tomo la decisión provisional como Driver — puede revisarse en el próximo sprint con más información. ¿De acuerdo con este proceso?"

TIPOS DE DECISIONES Y QUIÉN LAS TOMA:
Decisiones técnicas de implementación → el equipo (autonomía total)
Decisiones de priorización del sprint → el PO con input del equipo
Decisiones de arquitectura con impacto multi-equipo → System Architect + equipo
Decisiones de inversión o dirección estratégica → Portfolio Leadership
Decisiones de proceso del equipo → el equipo (con facilitación del ATF)

EL ERROR MÁS FRECUENTE:
Llevar al grupo decisiones que ya están tomadas ejecutivamente, como si fueran abiertas. El grupo invierte tiempo y energía, descubre que la decisión ya estaba tomada, y pierde confianza en el proceso. Si la decisión ya está tomada, comunicarla como tal. Si está abierta, abrirla genuinamente.`,
    technical:`FRAMEWORKS DE DECISIÓN:

DACI — para decisiones con múltiples stakeholders:
D (Driver): conduce el proceso → el ATF
A (Approver): autoridad final → un ejecutivo (UNO solo — múltiples Approvers = parálisis)
C (Contributors): aportan información → equipo técnico, PO, SMEs
I (Informed): necesitan saber la decisión → resto de stakeholders

RACI SIMPLIFICADO (versión ejecutiva):
R (Responsible): quien hace el trabajo
A (Accountable): quien tiene la responsabilidad final (firma)
C (Consulted): quien opina antes de decidir
I (Informed): quien se entera después

CONSENSO vs CONSENTIMIENTO en práctica:
Cuando el grupo llega a "todos estamos de acuerdo" pero hay dudas → Fist of Five para verificar
Cuando hay un voto bajo (1 o 2) → dar espacio: "¿Qué objeción específica tenés?"
La objeción no es "no me gusta" — es "esto impide que el objetivo se alcance"

DECIDIR EN ENTORNOS DE INCERTIDUMBRE:
OBVIO (causa-efecto clara) → seguir el proceso establecido
COMPLICADO (requiere expertise) → analizar, consultar expertos, decidir
COMPLEJO (causa-efecto solo visible en retrospectiva) → experimentar, aprender, adaptar
CAÓTICO (sin causa-efecto perceptible) → actuar para estabilizar, analizar después

La mayoría del trabajo en software es COMPLEJO → experimentos cortos (sprints) son más efectivos que análisis upfront extenso. Esto justifica Agile sobre Waterfall con el marco Cynefin.

CUÁNDO EL ATF NO DEBERÍA FACILITAR LA DECISIÓN:
→ Cuando tiene un interés personal en el resultado
→ Cuando la decisión requiere conocimiento técnico que el ATF no tiene
→ Cuando la decisión es ejecutiva y está fuera del mandato del equipo
En estos casos: identificar a alguien más apropiado para facilitar o para decidir.`,
    visual:{ type:"toma-decisiones" },
    questions:[
      {
        q:"El equipo lleva 45 minutos debatiendo qué tecnología usar para un nuevo módulo. No hay consenso. ¿Cuál es la intervención del ATF?",
        opts:["Dejar que continúen — las decisiones técnicas necesitan el tiempo que necesitan","Decidir vos la tecnología para avanzar","Activar decisión timeboxed: '5 minutos más. Al terminar, si no hay acuerdo, el tech lead toma la decisión provisional basada en lo que escuchó. La decisión puede revisarse en la próxima retro con los aprendizajes del sprint.' Esto preserva la autonomía técnica del equipo y rompe la parálisis.","Escalar la decisión al arquitecto empresarial de BCP"],
        correct:2,
        explanation:"El timeboxing + decisión provisional es la combinación correcta. 45 minutos en una decisión técnica que el equipo debería poder tomar en 15 sugiere que hay información faltante, criterios no explícitos, o que la discusión se convirtió en debate de preferencias. La decisión provisional con revisión posible preserva la autonomía del equipo sin que la reunión se convierta en una negociación interminable."
      },
      {
        q:"¿Cuál es la diferencia práctica entre buscar consenso y buscar consentimiento en una decisión del equipo?",
        opts:["Son lo mismo — ambos requieren que todos estén de acuerdo","Consenso requiere que todos estén de acuerdo (costoso, lento, puede inhibir el pensamiento crítico); consentimiento requiere que nadie tenga una objeción fundamental que impida que el objetivo se alcance. La pregunta del consentimiento no es '¿estás de acuerdo?' sino '¿podés vivir con esto y comprometerte a implementarlo?'","Consenso es para decisiones técnicas; consentimiento para decisiones de proceso","Consenso se usa en Scrum; consentimiento se usa en SAFe"],
        correct:1,
        explanation:"La distinción es operacionalmente crítica. Buscar consenso en cada decisión es una de las causas de reuniones interminables en equipos ágiles. El consentimiento es el estándar correcto para la mayoría de las decisiones: no necesito que todos amen la opción — necesito que nadie tenga una objeción que impida que funcione. Esta distinción acelera las decisiones sin sacrificar la calidad ni el compromiso del equipo."
      },
      {
        q:"En una sesión de PI Planning, el equipo está tomando una decisión arquitectónica compleja. El CTO (que está presente) tiene una preferencia clara. Todos están mirando al CTO antes de responder. ¿Qué efecto estás observando y cómo lo manejas?",
        opts:["El equipo respeta la experiencia del CTO — es natural","Efecto HiPPO (Highest Paid Person's Opinion): la opinión de quien tiene más jerarquía determina la decisión ignorando el conocimiento técnico del equipo. Intervención: Brainwriting antes de la discusión ('5 minutos en silencio, cada uno escribe su evaluación de las opciones') y mostrar los resultados simultáneamente — incluyendo los del CTO — antes de la conversación.","El equipo está siendo deferente — hay que pedirles que sean más asertivos","El CTO debería salir de la sala para que el equipo decida libremente"],
        correct:1,
        explanation:"El efecto HiPPO destruye la inteligencia colectiva del equipo: todos tienen la respuesta correcta pero nadie la dice porque el jefe ya habló (o todos saben cuál es su preferencia). El Brainwriting simultaneo iguala la cancha: el CTO escribe su evaluación en silencio como todos los demás. Cuando se revelan simultáneamente, los argumentos técnicos del equipo tienen el mismo peso visual que la opinión del CTO. La calidad de la decisión mejora."
      }
    ]
  },

  // ══════════ CASOS REALES ══════════
  {
    id:"casos-1-3", group:"casos", title:"Casos 1-3: Sprint que falla · PO que no refina · Developer que bloquea", icon:"🎯",
    color:"#D97706", light:"#FEF3C7", border:"#FCD34D", text:"#78350F",
    functional:`CASO 1 — EL SPRINT QUE NUNCA TERMINA:

Contexto: el equipo completa el 40% de las historias comprometidas. Llevan 4 sprints así. La velocity es inconsistente. El manager dice "hay que trabajar más."

5 diagnósticos posibles ANTES de actuar:
→ ¿Las historias cumplen la DoR cuando entran al sprint?
→ ¿Hay interrupciones no planificadas (bugs urgentes, soporte ad-hoc)?
→ ¿El equipo sobreestima sistemáticamente?
→ ¿Hay un cuello de botella específico (code review, testing, aprobaciones)?
→ ¿El sprint goal es claro o las historias son un mix sin coherencia?

Intervención paso a paso:
1. UN sprint de solo observación — no cambies nada, solo mide: Lead Time por columna, WIP promedio, interrupciones no planificadas vs planificadas.
2. CFD del último mes — identificar visualmente dónde se acumula el trabajo.
3. Llevar los datos al manager ANTES de proponer soluciones: "El equipo pasa el 60% del tiempo en code review. El problema no es el esfuerzo — es el flujo."
4. Retro específica con los datos: cambio de una sola variable primero.
Error a evitar: diagnosticar que "el equipo no trabaja suficientemente" sin datos.

CASO 2 — EL PO QUE NUNCA REFINA:

Contexto: el PO está sobrecargado, el backlog tiene historias sin criterios de aceptación. El Sprint Planning se convierte en refinamiento urgente.

Intervención:
1. Cuantificar el costo con datos: "Los últimos 3 plannings duraron 3h en lugar de 2h — eso es 3 × (n personas × 1h) = X horas del equipo perdidas."
2. Propuesta simple: 30 min de refinamiento semanal facilitado por el ATF mismo.
3. Co-crear la DoR con el equipo y el PO en 1 hora.
4. Verificar en el siguiente planning si mejoró.
Error a evitar: hacer el refinamiento por el PO en lugar de facilitar que el PO lo haga.

CASO 3 — EL DEVELOPER QUE BLOQUEA AL EQUIPO:

Contexto: el tech lead senior tiene la respuesta a todo, interrumpe en el daily, el equipo dejó de proponer soluciones técnicas.

Intervención:
1. Conversación privada con modelo SBI: "En los últimos 2 dailys [S], cuando diste la solución técnica antes de que el equipo terminara de pensar [B], noté que los otros dejaron de proponer opciones [I]. ¿Lo notaste vos también?"
2. En el daily: Round Robin explícito antes de abrir la discusión general.
3. Involucrar al tech lead en un rol de mentor explícito: "En lugar de dar la respuesta, ¿hacés la pregunta que los lleve a encontrarla?"
Error a evitar: confrontar públicamente al tech lead — destruye la seguridad psicológica de todo el equipo.`,
    technical:`MÉTRICAS PARA DIAGNOSTICAR CADA CASO:

CASO 1 — herramientas de diagnóstico:
→ CFD: visualizar dónde se ensancha cada banda (cuello de botella)
→ WIP por columna: verificar si se respetan los límites
→ Interruption log: cantidad de trabajo no planificado que entró al sprint
→ Sprint goal achievement histórico: ¿4 sprints fallidos o es tendencia más larga?
→ DoR compliance rate: % de historias que cumplen la DoR al entrar al sprint

CASO 2 — cómo medir el impacto del PO:
→ Tiempo de planning vs tiempo estándar (señal de historias sin refinar)
→ % de historias con criterios de aceptación al entrar al planning
→ % de historias reabiertas durante el sprint (señal de DoR incompleta)
→ Número de preguntas al PO durante el sprint (alta = DoR pobre)

CASO 3 — cómo medir el efecto del dominante:
→ Participación en retros y dailys: ¿cuántas personas hablan vs cuántas asienten?
→ Número de propuestas técnicas por persona: ¿solo el tech lead propone soluciones?
→ Score de seguridad psicológica (encuesta anónima)
→ Retrospectiva específica con Brainwriting para capturar perspectivas sin influencia

MODELO SBI EN DETALLE:
S — Situation: "En la retro del jueves..."
B — Behavior: "...cuando respondiste el teléfono mientras Ana hablaba..."
I — Impact: "...noté que Ana dejó de participar el resto de la sesión."

REGLAS DEL SBI:
→ La situación es un hecho específico, no "siempre" o "nunca"
→ El behavior es observable, no una interpretación de intenciones
→ El impact es el efecto en vos, el equipo o el resultado — no un juicio moral
→ Después del SBI: escuchar sin defenderse. El feedback es un regalo.

EL MODELO DE CONVERSACIÓN DIFÍCIL CALARIS:
C: Contexto — describir la situación con datos objetivos
A: Alineación — confirmar que ambos quieren el mismo resultado
L: Liderazgo — tomar postura con respeto y firmeza
A: Audiencia — adaptar el tono a la persona (el tech lead senior necesita un enfoque diferente al junior)
R: Roadmap — proponer concretamente qué cambiaría
I: Impacto — qué mejora si se hace el cambio
S: Standard — qué acuerdo queda como práctica del equipo`,
    visual:{ type:"casos-1-3" },
    questions:[
      {
        q:"El equipo completa el 40% del sprint. El manager quiere saber qué vas a hacer diferente el próximo sprint. ¿Cuál es tu respuesta?",
        opts:["'Vamos a comprometer menos historias para garantizar el 100%'","'Vamos a trabajar más horas hasta alcanzar el compromiso'","'Antes de proponer cambios, necesito un sprint de observación para diagnosticar la causa raíz. Los datos preliminares muestran [X]. Con ese diagnóstico podré proponer un cambio específico que ataque la causa real, no el síntoma.'","'Necesitamos dividir las historias en partes más pequeñas para facilitar la completitud'"],
        correct:2,
        explanation:"Reducir el compromiso o aumentar las horas son respuestas reactivas que no atacan la causa raíz. El diagnóstico primero produce una intervención que realmente funciona. La respuesta al manager demuestra madurez profesional: no promete soluciones sin datos, no acepta el diagnóstico implícito del manager ('trabajan poco'), y establece un proceso claro con un entregable (el diagnóstico) en el próximo sprint."
      },
      {
        q:"Después de la conversación privada con el tech lead usando SBI, él responde: 'Lo hago porque el equipo no tiene suficiente experiencia para tomar esas decisiones.' ¿Cómo continuás?",
        opts:["Validar su preocupación y decirle que tiene razón — hay que esperar que el equipo madure","'Ese es exactamente el punto — si siempre damos la respuesta, el equipo nunca desarrolla la experiencia. ¿Qué pasaría si en el próximo daily, en lugar de dar la solución, hacés la pregunta que los guíe? Tu expertise es más valioso como mentor que como oráculo.' Convertir la preocupación en un rol positivo.","Escalar el problema a HR porque el tech lead tiene una actitud de control","Implementar pair programming para que el tech lead transmita su conocimiento"],
        correct:1,
        explanation:"La respuesta del tech lead revela una necesidad legítima (asegurar la calidad técnica) mal ejecutada. El ATF no invalida esa preocupación — la redirige. 'Tu expertise como mentor vale más que como oráculo' es una reformulación que da al tech lead un rol de mayor impacto y más sostenible. El equipo aprende, el tech lead sigue aportando su expertise, y la seguridad psicológica se recupera."
      },
      {
        q:"¿Por qué el primer paso ante el Sprint que no termina es 'un sprint de solo observación' en lugar de implementar cambios inmediatamente?",
        opts:["Porque los cambios llevan tiempo en implementarse y hay que planificarlos","Porque los cambios inmediatos sin diagnóstico pueden empeorar el problema — la causa del 40% puede ser sobrecompromiso, interrupciones, deuda técnica, DoR pobre o liderazgo deficiente. Cada causa tiene una solución diferente. Sin diagnóstico, el cambio es una apuesta.","Porque el equipo necesita adaptarse gradualmente a los cambios","Porque los datos del sprint de observación son necesarios para justificar los cambios ante el manager"],
        correct:1,
        explanation:"Cambiar sin diagnóstico es el error más costoso en coaching ágil. Si el problema es sobrecompromiso y reducís el WIP, el sprint mejora. Si el problema son interrupciones externas y reducís el WIP, el sprint sigue fallando. Si el problema es un cuello de botella en code review y añadís más desarrolladores, el cuello de botella empeora. El sprint de observación cuesta 2 semanas. Aplicar la solución equivocada cuesta meses."
      }
    ]
  },

  {
    id:"casos-4-5", group:"casos", title:"Casos 4-5: Transformación que no transforma · PO vs Técnico", icon:"🔥",
    color:"#D97706", light:"#FEF3C7", border:"#FCD34D", text:"#78350F",
    functional:`CASO 4 — LA TRANSFORMACIÓN QUE NO TRANSFORMA:

Contexto: 6 meses de "transformación ágil". Todos hacen Scrum. Todos tienen las ceremonias. Nada cambió en los resultados de negocio. Los stakeholders ejecutivos están perdiendo la paciencia.

Los 5 problemas más frecuentes detrás de este patrón:
1. Solo cambiaron los nombres: el standup = daily, la reunión de proyecto = sprint planning.
2. Los managers siguen asignando trabajo individualmente fuera del sprint.
3. El backlog refleja el plan de proyecto original, no las prioridades de negocio reales.
4. No hay métricas de outcome — solo de output: velocity, puntos completados.
5. El liderazgo no cambió su comportamiento: sigue pidiendo fechas exactas, microgestinoando.

Intervención de Agile Coach (no de SM — este problema está fuera del nivel del SM):
1. Diagnóstico formal: entrevistas en 3 niveles (equipo, management, C-Level) + mapeo del flujo de valor + análisis de métricas.
2. Presentación del diagnóstico con datos a los sponsors — sin culpar personas: "Las ceremonias ágiles están implementadas. Los comportamientos organizacionales que permiten que la agilidad produzca resultados aún no están presentes."
3. Proponer cambios en el modelo operativo, no más ceremonias.
4. Quick win en 4 semanas para demostrar que el enfoque correcto produce resultados.

CASO 5 — EL CONFLICTO ENTRE PO Y EQUIPO TÉCNICO:

Contexto: el PO quiere features nuevas constantemente. El equipo técnico dice que la deuda técnica los está ahogando. Cada sprint planning es un conflicto abierto.

Intervención:
1. No tomar partido — el ATF facilita, no decide.
2. Cuantificar ambos lados con datos: "Si seguimos solo haciendo features, en 3 meses el velocity cae un X% por deuda técnica acumulada. Si solo hacemos deuda técnica, el time to market del competidor nos supera."
3. Workshop de alineación con ambas partes: hacer visibles los tradeoffs con datos.
4. Acordar una política explícita: 70% features / 30% enablers (o la proporción que tiene sentido para el contexto).
5. Documentarla como estándar del equipo en la DoD o en el Working Agreement.`,
    technical:`DIAGNÓSTICO PROFUNDO — CASO 4:

SEÑALES DE "AGILE COSMÉTICO":
→ Las ceremonias existen pero las decisiones se toman fuera de ellas
→ El velocity sube pero el NPS del cliente no cambia
→ Los sprint goals no conectan con los OKRs de negocio
→ La retro produce mejoras de proceso pero no de resultados
→ Los managers hablan de Agile en las reuniones y micromanagean entre reuniones

HERRAMIENTAS DE DIAGNÓSTICO PARA EL COACH:
→ Entrevistas 1:1 con muestra representativa: developers, POs, managers, un ejecutivo
→ Value Stream Mapping del flujo completo: idea → producción
→ Revisión de métricas históricas: ¿qué mejoró y qué no?
→ Observación de las ceremonias sin facilitar (solo observar)
→ Encuesta de madurez ágil por niveles

CÓMO PRESENTAR EL DIAGNÓSTICO SIN CULPAR:
"El equipo implementó correctamente las prácticas ágiles — las ceremonias funcionan. Los resultados de negocio no mejoraron porque las prácticas ágiles operan dentro de un sistema organizacional que aún tiene los siguientes comportamientos que las neutralizan: [lista con datos]. La propuesta es intervenir en esos comportamientos sistémicos."

CASO 5 — POLÍTICA EXPLÍCITA DE CAPACIDAD:

La política 70/30 como práctica establecida:
→ 70% del sprint para features de negocio (valor directo al cliente)
→ 20% para deuda técnica y refactoring
→ 10% para innovación / experimentos / enablers

Variaciones comunes en contexto bancario:
→ Alta deuda técnica legacy: 50/40/10
→ Sistema estable y bien mantenido: 80/15/5
→ Post-lanzamiento de producto nuevo: 60/30/10

La política se documenta en el Working Agreement del equipo y se revisa en la retrospectiva del PI.

CÓMO EL ATF FACILITA EL WORKSHOP DE ALINEACIÓN PO vs TECH:
1. Divergencia: cada parte describe el problema desde su perspectiva (brainwriting)
2. Datos: mostrar el impacto medido de la deuda técnica actual (bugs por sprint, tiempo en retrabajo)
3. Simulación: "¿qué pasa si seguimos 3 meses más como estamos?" (proyección)
4. Convergencia: proponer la política como hipótesis a validar en 2 sprints
5. Acuerdo: documentar la política y el criterio de revisión`,
    visual:{ type:"casos-4-5" },
    questions:[
      {
        q:"Llevas 6 meses en una transformación ágil en BCP. Las ceremonias funcionan perfectamente. Pero el Time to Market no mejoró y el NPS del cliente está estancado. ¿Qué nivel de intervención requiere esto y qué hacés?",
        opts:["Más paciencia — 6 meses es poco para una transformación","Es un problema de SM — mejorar la calidad de las ceremonias resolverá los resultados","Requiere intervención de Agile Coach, no de SM. Las ceremonias son el síntoma correcto pero el problema es sistémico: los comportamientos organizacionales (cómo se priorizan las decisiones, cómo reporta el management, qué miden los KPIs ejecutivos) están neutralizando las prácticas ágiles. El diagnóstico formal con entrevistas y VSM es el primer paso.","El equipo necesita más capacitación en SAFe para mejorar los resultados"],
        correct:2,
        explanation:"Este es el caso más importante para diferenciar al SM del Agile Coach. El SM facilita las ceremonias — y aquí las ceremonias funcionan. El problema está en el sistema organizacional que rodea al equipo: la gobernanza, los incentivos, los comportamientos del liderazgo. Eso requiere intervención al nivel del Agile Coach, no del SM. Diagnosticar antes de proponer — y proponer cambios sistémicos, no más ceremonias."
      },
      {
        q:"En el workshop de alineación entre PO y equipo técnico, acordaron una política 70/30 (features/deuda). Dos sprints después, el PO está ignorando la política porque hay 'urgencias de negocio'. ¿Cuál es la intervención del ATF?",
        opts:["El PO tiene razón — las urgencias de negocio siempre deben tener prioridad","Aceptar el cambio — la política era solo una guía","Hacer visible el costo del desvío con datos: 'En los 2 sprints que ignoramos la política 70/30, la deuda técnica aumentó X% y los bugs en producción subieron Y%. ¿Revisamos la política o aceptamos explícitamente este tradeoff?' La conversación hace visible la consecuencia antes de que se acumule durante meses.","Escalar al manager para que haga respetar la política"],
        correct:2,
        explanation:"El ATF no impone la política — hace visible el costo de ignorarla. La decisión de cambiar la política pertenece al equipo y al PO, pero debe tomarse con información completa sobre las consecuencias. Dos sprints de datos son suficientes para mostrar el impacto. Si el PO decide continuar ignorando la política después de ver los datos, eso es una decisión legítima que debe documentarse como un riesgo aceptado conscientemente."
      },
      {
        q:"¿Cuál es la diferencia en el tipo de intervención que hace un SM vs un Agile Coach en la Caso 4 (transformación que no transforma)?",
        opts:["No hay diferencia — ambos pueden diagnosticar y resolver el mismo problema","El SM interviene en las ceremonias y en el equipo directo (nivel táctico); el Agile Coach interviene en el sistema organizacional, los comportamientos del liderazgo, el modelo operativo y los incentivos que neutralizan las prácticas ágiles (nivel sistémico). El SM no tiene el mandato ni las herramientas para cambiar el comportamiento del management.","El Coach tiene más años de experiencia — puede hacer todo lo que hace el SM y más","El SM facilita las reuniones; el Coach las diseña"],
        correct:1,
        explanation:"Esta es la distinción más importante entre los dos roles. El SM opera dentro del sistema — facilita el trabajo del equipo dentro del marco organizacional existente. El Agile Coach cambia el sistema — interviene en la estructura, los incentivos, los comportamientos del liderazgo y el modelo operativo. Un SM que intenta cambiar el comportamiento del management sin el mandato de Coach está fuera de su autoridad y probablemente generará resistencia política."
      }
    ]
  },

  // ══════════ NIVEL EXPERTO ══════════
  {
    id:"sesgos-grupales", group:"experto", title:"Sesgos en Decisiones Grupales", icon:"🧠",
    color:"#DC2626", light:"#FEE2E2", border:"#FCA5A5", text:"#7F1D1D",
    functional:`Los sesgos cognitivos en grupos son invisibles para quienes los sufren y obvios para quien sabe dónde mirar. Un ATF experto los detecta antes de que destruyan la calidad de las decisiones.

LOS 5 SESGOS MÁS FRECUENTES EN EQUIPOS BANCARIOS:

1. EFECTO DE ANCLAJE:
El primer número mencionado ancla todas las estimaciones siguientes.
Ejemplo: alguien dice "esta feature va a costar 2 semanas" — todas las estimaciones posteriores orbitan alrededor de ese número aunque sea incorrecto.
Señal: el planning poker produce estimaciones muy similares cuando hay alguien que habla primero.
Fix: estimación simultánea — todos muestran su número al mismo tiempo.

2. GROUPTHINK (pensamiento grupal):
El grupo valora la cohesión sobre el pensamiento crítico. Nadie dice no nunca.
Señal: unanimidad inmediata en decisiones complejas, ausencia de preguntas incómodas, "el equipo siempre está de acuerdo."
Fix: designar un abogado del diablo con rol explícito. Rotar el rol en cada PI Planning.

3. EFECTO HiPPO (Highest Paid Person's Opinion):
La opinión de quien gana más o tiene más jerarquía determina la decisión independientemente de los datos.
Señal: el equipo mira al gerente/CTO antes de responder, las ideas del equipo "mejoran" cuando el ejecutivo habla.
Fix: Brainwriting antes de la discusión. Datos antes de opiniones. Mostrar resultados simultáneamente.

4. SESGO DE DISPONIBILIDAD:
El grupo sobre-pondera la evidencia más reciente o más fácil de recordar.
Ejemplo: el último bug grave hace que el equipo sobre-invierta en testing e ignore features de valor.
Fix: datos históricos completos, no solo el evento más reciente.

5. SESGO DE CONFIRMACIÓN:
El grupo busca información que confirma lo que ya cree y descarta la evidencia contraria.
Señal: "Ese dato no cuenta porque [razón débil]."
Fix: hacer que el grupo busque explícitamente evidencia contraria a su hipótesis antes de decidir.`,
    technical:`CÓMO DISEÑAR PROCESOS QUE CONTRARRESTEN LOS SESGOS:

PARA EL EFECTO DE ANCLAJE:
→ Planning Poker: regla de no hablar hasta que todos muestran su carta simultáneamente
→ En workshops de priorización: Brainwriting individual antes de cualquier discusión
→ En estimaciones de tiempo: pedir rangos (mejor caso / caso probable / peor caso) en lugar de puntos únicos

PARA EL GROUPTHINK:
→ Abogado del diablo: asignar explícitamente el rol de cuestionar cada decisión
→ Pre-mortem: "Imaginen que es 6 meses después y esto fracasó totalmente. ¿Qué pasó?" Fuerza el pensamiento crítico de forma no amenazante
→ Brainwriting anónimo: las ideas sin nombre evitan la presión social de disentir
→ TRIZ en retros: "¿Cómo garantizaríamos el fracaso absoluto?" revela comportamientos inconscientes

PARA EL HiPPO:
→ El ejecutivo/manager habla último, no primero
→ Datos antes de opiniones: presentar la evidencia antes de que nadie opine
→ Votación simultánea (Fist of Five, Dot Voting) para evitar el efecto de ancla social
→ Breakouts sin el manager para generar ideas independientes

PARA EL SESGO DE CONFIRMACIÓN:
→ Protocolo de "devil's advocate data": antes de cerrar una decisión, el grupo tiene 5 minutos para buscar activamente evidencia en contra de la opción elegida
→ Red team / Blue team: dividir el grupo en dos equipos que defienden posiciones opuestas

PARA EL SESGO DE DISPONIBILIDAD:
→ Siempre mostrar datos históricos de al menos 3-5 sprints, no solo el último
→ Antes de una retrospectiva después de un sprint difícil: mostrar la tendencia de los últimos 5 sprints para contextualizar

SEÑALES DE ALARMA EN UNA SESIÓN:
"Siempre hacemos esto así" → sesgo de disponibilidad o status quo
"Todo el mundo sabe que..." → supuesto no verificado
"El último sprint nos enseñó que..." → sesgo de disponibilidad
"Ya que todos estamos de acuerdo..." → posible groupthink
"X tiene razón" (sin argumento) → efecto HiPPO`,
    visual:{ type:"sesgos" },
    questions:[
      {
        q:"En el Sprint Planning, el tech lead dice 'yo estimo esto en 13 puntos' antes de que el resto estime. Luego, 6 de 7 developers estiman entre 8 y 13. ¿Qué sesgo identificás y cómo lo prevés la próxima vez?",
        opts:["El equipo es consistente — eso es una buena señal de madurez","Efecto de anclaje: el 13 del tech lead ancló las estimaciones del resto. Fix para la próxima vez: usar Planning Poker con la regla explícita de no hablar y mostrar simultáneamente las cartas. Si alguien habla antes de la revelación, el ATF detiene la estimación y la reinicia.","El tech lead tiene razón — su experiencia produce estimaciones más precisas","El equipo debería usar tallas de remera en lugar de Fibonacci para evitar el ancla numérica"],
        correct:1,
        explanation:"El efecto de anclaje en Planning Poker es tan frecuente que la herramienta fue diseñada específicamente para prevenirlo: revelar simultáneamente. Cuando alguien habla antes de la revelación, contamina el proceso. El ATF explica la regla al inicio del planning, la refuerza durante, y cuando ocurre el sesgo lo nombra directamente: 'Antes de que la estimación de X influya, quiero que cada uno tenga su número en mente. Revelamos juntos.'"
      },
      {
        q:"El equipo acaba de tener un bug crítico en producción. En el siguiente planning, proponen dedicar el 80% del sprint a testing y QA. ¿Qué sesgo puede estar operando y cómo lo abordás?",
        opts:["El equipo tiene razón — un bug crítico justifica priorizar QA masivamente","Sesgo de disponibilidad: el evento reciente (el bug) está siendo sobre-ponderado respecto a la tendencia histórica. Intervención: mostrar la tasa de bugs de los últimos 5 sprints antes de decidir. Si el bug fue un evento atípico, el 80% a QA es una sobrerreacción. Si es una tendencia, hay que investigar la causa raíz, no solo aumentar el testing.","El equipo es maduro — están aprendiendo de su error","El testing es siempre prioritario en banca — el 80% es apropiado para BCP"],
        correct:1,
        explanation:"El sesgo de disponibilidad hace que el evento más reciente domine las decisiones aunque no sea representativo de la tendencia. Un bug crítico en el último sprint no necesariamente indica que el proceso de QA falla sistemáticamente — puede haber sido un caso excepcional. Los datos históricos de 5 sprints son la vacuna contra este sesgo: si el 80% de los bugs aparecen en las últimas 2 semanas antes de release, el problema es el proceso de testing. Si este fue el primero en 4 meses, es un evento atípico."
      },
      {
        q:"¿Qué es el Pre-mortem y cuándo es más útil que una retrospectiva tradicional?",
        opts:["Es una retrospectiva antes del sprint para anticipar qué va a salir mal","Es una técnica para identificar riesgos al inicio de un proyecto o PI: 'Imaginen que es 6 meses después y esto fracasó totalmente. ¿Qué pasó?' Fuerza el pensamiento crítico sin que nadie tenga que admitir dudas directamente. Es más útil que la retro cuando el groupthink es alto y nadie se atreve a cuestionar el plan.","Es un análisis post-mortem adelantado para preparar el equipo para el fracaso","Es una técnica de SAFe para identificar riesgos en el PI Planning"],
        correct:1,
        explanation:"El pre-mortem es más efectivo que pedir al equipo 'qué riesgos ven' porque la pregunta directa activa el sesgo de optimismo (nadie quiere ser el pesimista). Al enmarcarla como 'imaginen que ya fracasó' se elimina la inhibición social: el fracaso ya ocurrió (en la ficción), por lo que señalar las causas no es pesimismo sino análisis. Las personas identifican riesgos que nunca hubieran mencionado en un formato directo."
      }
    ]
  },

  {
    id:"dinamicas-poder", group:"experto", title:"Dinámicas de Poder y Cómo Leer una Sala", icon:"♟️",
    color:"#DC2626", light:"#FEE2E2", border:"#FCA5A5", text:"#7F1D1D",
    functional:`Este es el conocimiento que separa a un certificado de un profesional que realmente influye en organizaciones. No está en los cursos de Scrum ni en los libros de SAFe.

CÓMO LEER UNA SALA — los primeros 30 segundos:

Antes de hablar en cualquier reunión, 30 segundos de observación silenciosa:
→ ¿Quién llegó tarde y todos esperaron? → poder real sin título formal
→ ¿Quién está con el cuerpo cerrado (brazos cruzados, lejos de la mesa)? → resistencia o baja energía
→ ¿Quién se mira con quién antes de hablar? → alianzas implícitas
→ ¿Quién está en el teléfono? → bajo compromiso o señal de alarma
→ ¿Cuál es el nivel de energía general? → post-almuerzo, viernes tarde, sprint difícil
→ ¿Hay tensión no resuelta de una conversación anterior? → el grupo no está en el presente

Estos datos modifican cómo empezás la sesión. Una sala tensa necesita check-in antes del trabajo. Un grupo con energía baja necesita una actividad de activación. Un grupo donde todos miran al CTO antes de hablar necesita Brainwriting desde el principio.

DINÁMICAS DE PODER IMPLÍCITAS — las que nadie nombra:

EL PODER DEL SILENCIO ESTRATÉGICO:
Algunos líderes usan el silencio para ejercer poder — no dicen nada durante la primera parte de la sesión y solo hablan al final. Su opinión, al ser la última y de alto status, cierra la discusión. Fix del ATF: preguntar directamente al grupo antes de que el líder hable "¿alguien tiene una perspectiva diferente a lo que escuchamos hasta ahora?"

EL PODER DE LA AGENDA:
Quien controla la agenda controla la sesión. En organizaciones bancarias, la persona que envía el invite generalmente controla qué temas se tratan y cuáles no. El ATF que acepta la agenda sin cuestionarla puede estar facilitando una sesión diseñada para producir un resultado predeterminado.

EL PODER DE LAS CONVERSACIONES PREVIAS:
En las organizaciones maduras, las decisiones importantes se toman antes de las reuniones, en conversaciones bilaterales. La reunión es donde se "oficializa" lo ya acordado. El ATF que no tiene esas conversaciones previas llega a facilitar algo que ya está decidido.

CUÁNDO ROMPER LAS REGLAS ÁGILES:

Las reglas ágiles son principios, no leyes físicas. Los expertos saben cuándo doblarlas y lo hacen explícitamente.

Romper el timebox del daily: cuando hay un impedimento crítico que resolverlo en 5 minutos adicionales desbloquea el sprint completo.
Agregar una story mid-sprint: cuando es un bug crítico de seguridad o compliance que afecta a clientes del banco.
Cancelar una retro: cuando el equipo está en crisis aguda — hacer la retro en ese momento produce drama, no insights.
Hacer planning sin DoR: cuando el contexto del negocio cambió radicalmente y esperar al próximo sprint cuesta más que planificar con incertidumbre.

La regla para romper reglas: ser explícito sobre por qué la rompés y cuál es el costo. "Estamos agregando esta story mid-sprint porque es un bug de seguridad crítico. Esto cuesta X del sprint. ¿El equipo está de acuerdo?"`,
    technical:`PENSAMIENTO SISTÉMICO — los loops que el ATF debe ver:

LOOP DE REFUERZO NEGATIVO (amplificador del problema):
Cuanta más presión pone el management → más deuda técnica acumulada → más bugs en producción → más presión del cliente → más presión del management. Un loop de refuerzo negativo se acelera hasta que algo colapsa.
La intervención sistémica: romper el loop en su punto de menor resistencia, no en el más obvio.

LOOP DE BALANCE POSITIVO (virtuoso):
Cuando el equipo mejora el proceso → más resultados visibles → más confianza del management → más autonomía → el equipo puede mejorar más → más resultados. Este loop también se puede diseñar intencionalmente.
Cómo activarlo: el quick win en las primeras 4 semanas que genera confianza del management.

PUNTO DE APALANCAMIENTO EN BCP:
El management de nivel medio — ni el C-Level ni el equipo. Son quienes tienen poder Y presencia cotidiana.
El C-Level da el mandato pero no opera en el día a día.
El equipo quiere cambiar pero no tiene autoridad para cambiar el sistema.
Los managers de nivel medio definen realmente cómo se trabaja: asignan trabajo fuera del sprint o no, dan autonomía o micromanagean, priorizan la retro o la cancelan.
Ganar a los managers de nivel medio es ganar la transformación.

CÓMO LEER SEÑALES NO VERBALES EN SESIONES REMOTAS:
Cámaras apagadas constantemente → posible baja seguridad psicológica o baja energía
Respuestas muy breves y genéricas → el grupo no está comprometido
Nadie escribe en el chat cuando se hace una pregunta abierta → resistencia o desconexión
Un participante que responde sistemáticamente más tarde que los demás → está multitasking o hay algo no dicho

CÓMO USAR CALARIS PARA LEER EL CONTEXTO POLÍTICO:
C: ¿Quiénes son los stakeholders reales con poder? ¿Coinciden con los formales?
A: ¿La alineación declarada es real o performativa?
L: ¿Quién tiene el poder informal de bloquear el cambio?
A: ¿Qué lenguaje usa cada stakeholder? ¿Qué le importa en términos concretos?
R: ¿Qué cambios en el roadmap político serían bienvenidos vs resistidos?
I: ¿Qué métricas les importan a los stakeholders con poder?
S: ¿Qué estándares o procesos existentes tienen valor político aunque no tengan valor técnico?`,
    visual:{ type:"dinamicas-poder" },
    questions:[
      {
        q:"Entrás a un PI Planning y en los primeros 30 segundos notás: 3 personas con brazos cruzados, el Gerente de Tecnología llegó 15 minutos tarde y todos lo esperaron, y hay 5 personas mirando el teléfono. ¿Cómo modificás el inicio de la sesión?",
        opts:["Empezás con la agenda — el PI Planning es el evento más importante del trimestre y no hay tiempo que perder","Señalás los comportamientos que observás para hacerlos explícitos ante todo el grupo","Antes de entrar al contenido, hacés un check-in que captura el estado del grupo: 'En una palabra, ¿cómo llegás hoy a esta sesión?' Los datos del check-in te dicen si hay un tema urgente no resuelto que necesita ser nombrado antes del trabajo. El Gerente que llegó tarde y la energía baja son señales de que algo no está dicho.","Ignorás las señales no verbales — en PI Planning el contenido importa más que la dinámica de grupo"],
        correct:2,
        explanation:"Los 30 segundos de lectura de sala son inversión, no demora. Tres personas con cuerpos cerrados + un líder de alto poder que llegó tarde y todos esperaron + personas distraídas = un grupo que no está presente. Arrancar con el contenido en ese estado garantiza que la primera mitad del evento sea improductiva. 5 minutos de check-in que revelan un tema no dicho ahorran 2 horas de trabajo superficial."
      },
      {
        q:"Descubrís que las decisiones importantes del area ya están tomadas en conversaciones bilaterales antes de las reuniones de facilitación. La reunión es solo para 'oficializar'. ¿Cómo manejás esto?",
        opts:["Ignorarlo — es normal en organizaciones maduras y no hay nada que hacer","Denunciarlo públicamente en la próxima sesión para que el grupo esté al tanto","Tener conversaciones previas también. No como alianza política sino para entender el estado real del sistema antes de llegar a facilitar. Si la reunión va a officializar lo ya decidido, ser explícito sobre eso: '¿Queremos que esta sea una sesión de decisión genuina o de comunicación de lo acordado?' y diseñar la sesión en consecuencia.","Rechazar facilitar cualquier sesión que no sea una decisión genuinamente abierta"],
        correct:2,
        explanation:"Las conversaciones previas a las reuniones son una realidad política en todas las organizaciones. El ATF experto no las niega ni las enfrenta — las entiende y actúa en consecuencia. Tener conversaciones bilaterales previas permite conocer el estado real, anticipar resistencias, y diseñar la sesión para el contexto real. Si la sesión va a officializar algo ya decidido, ser transparente sobre eso es más honesto que simular que es una decisión abierta."
      },
      {
        q:"¿Cuál es el punto de apalancamiento más efectivo para una transformación ágil en BCP y por qué?",
        opts:["El C-Level — sin su mandato explícito nada cambia","Los equipos de desarrollo — el cambio real ocurre donde se hace el trabajo","El management de nivel medio — tienen tanto poder (pueden bloquear o acelerar) como presencia cotidiana (definen cómo se trabaja realmente). El C-Level da el mandato pero no está en el sprint. El equipo quiere cambiar pero no tiene autoridad. El nivel medio tiene ambos.","Los Agile Coaches y SMs — su expertise técnico impulsa el cambio"],
        correct:2,
        explanation:"El management de nivel medio es el punto de apalancamiento más ignorado y más crítico. Son quienes realmente definen si la agilidad funciona o no en el día a día: ¿asignan trabajo directamente a los developers fuera del sprint? ¿Cancelan la retro cuando hay una urgencia? ¿Dan tiempo real para la mejora continua? Sin ganar a ese nivel, el cambio cultural no ocurre independientemente de cuántas ceremonias se implementen."
      }
    ]
  },

  {
    id:"nivel-experto-final", group:"experto", title:"Nivel Experto — Lo que Nadie Enseña", icon:"🔥",
    color:"#DC2626", light:"#FEE2E2", border:"#FCA5A5", text:"#7F1D1D",
    functional:`Los últimos patrones que separan al profesional certificado del practicante que realmente transforma sistemas complejos.

CUÁNDO ROMPER LAS REGLAS ÁGILES — con criterio:

REGLA: un sprint no se puede modificar una vez iniciado.
Cuándo romperla: bug crítico de seguridad que afecta a datos de clientes bancarios. El costo de no actuar supera el costo de interrumpir el sprint.
Cómo romperla bien: "Estamos agregando esta story mid-sprint. Esto cuesta X puntos del sprint goal. El equipo está de acuerdo en que el riesgo de seguridad justifica el tradeoff. ¿Qué sacamos para hacer espacio?"

REGLA: el daily debe durar 15 minutos.
Cuándo romperla: hay un impedimento crítico que 5 minutos adicionales resuelven completamente y que de otro modo bloquearía el sprint por 2 días.
Cómo romperla bien: "Voy a extender el daily 5 minutos para resolver esto ahora — es más eficiente que bloquear el sprint. ¿De acuerdo?"

REGLA: la retro es obligatoria al final de cada sprint.
Cuándo cancelarla: el equipo está en crisis aguda (delivery crítico fallido, conflicto interpersonal grave, muerte de un colega). En ese estado, la retro produce drama, no insights.
Cómo hacerlo bien: "Esta semana no es el momento para una retro. Programamos una sesión específica la semana que viene cuando el equipo esté en condiciones de reflexionar productivamente."

LA REGLA META: ser explícito sobre por qué rompés la regla y cuál es el costo. Nunca romper una regla silenciosamente — eso crea un precedente implícito de que las reglas son opcionales.

PENSAMIENTO SISTÉMICO — los patrones que el ATF experto ve:

El equipo de alta performance no tiene menos problemas — tiene mejor procesamiento de problemas. La diferencia está en la velocidad con que los problemas se visibilizan y la calidad de las soluciones que el equipo genera autónomamente.

El ATF que es indispensable está fallando. El ATF que el equipo "no necesita" (porque desarrolló la capacidad internamente) está teniendo éxito.

El Agile Coach que no puede nombrar exactamente qué comportamiento organizacional cambió en los últimos 6 meses no está haciendo coaching — está haciendo facilitación costosa.`,
    technical:`SÍNTESIS — CALARIS APLICADO AL NIVEL EXPERTO:

Cada capa de CALARIS actúa como detector de los patrones que vimos en esta guía:

C — CONTEXTO:
¿Qué sesgos culturales predominan en esta organización?
¿Qué dinámicas de poder implícitas operan?
¿Qué conversaciones previas ya ocurrieron?

A — ALINEACIÓN:
¿La alineación declarada es real o es groupthink?
¿El "consenso" del equipo es genuino o es efecto HiPPO?

L — LIDERAZGO:
¿Estoy operando como SM, ATF o Coach en este contexto?
¿Cuál de los 6 anti-patrones estoy en riesgo de cometer?
¿Qué conversación difícil estoy evitando?

A — AUDIENCIA:
¿A qué nivel de seguridad psicológica está el grupo?
¿Necesito Brainwriting anónimo para contrarrestar el HiPPO?
¿La sala tiene tensión no resuelta que necesito nombrar primero?

R — ROADMAP:
¿El plan de intervención ataca la causa raíz o el síntoma?
¿Qué quick win puedo producir en las próximas 4 semanas?
¿Estoy interviniendo en el punto de apalancamiento correcto?

I — IMPACTO:
¿Estoy midiendo cambios de comportamiento o solo outputs?
¿El equipo puede hacer X sin mí? (métrica de autonomía)
¿Qué mejoró concretamente en los últimos 3 meses?

S — STANDARDS:
¿Las reglas que estoy aplicando son principios o dogmas?
¿Cuándo fue la última vez que rompí una regla ágil explícitamente y con criterio?
¿El equipo tiene los estándares internalizados o los cumple porque el ATF está mirando?

EL TEST FINAL DEL ATF EXPERTO:
Si mañana no vinieras al trabajo, ¿el equipo funcionaría?
Si la respuesta es no: todavía hay trabajo de coaching que hacer.
Si la respuesta es sí: lograste el objetivo más importante del rol.`,
    visual:{ type:"nivel-experto" },
    questions:[
      {
        q:"A mitad del sprint, el equipo descubre que hay una vulnerabilidad de seguridad crítica en el módulo de autenticación de BCP. El sprint goal original era sobre pagos internacionales. ¿Romper el sprint o no?",
        opts:["No — el sprint no se modifica. Se agenda para el próximo sprint.","Sí, sin avisar al equipo — es una emergencia","Sí, explícitamente: 'Tenemos una vulnerabilidad de seguridad crítica. Propongo agregar una story de emergencia mid-sprint. Esto afecta el sprint goal de pagos internacionales — probablemente completaremos X de Y historias. ¿El equipo acuerda que el riesgo de seguridad justifica el tradeoff?' Con el equipo alineado y el costo explícito.","Escalar al manager para que tome la decisión — el ATF no puede modificar el sprint"],
        correct:2,
        explanation:"En banca, las vulnerabilidades de seguridad son exactamente el tipo de excepción que justifica romper la regla del sprint inmutable. La clave es la explicitez: nombrar el costo (el sprint goal se afecta), justificar el tradeoff (el riesgo de seguridad para los clientes del banco), y obtener el acuerdo del equipo antes de proceder. Romper la regla silenciosamente crea un precedente implícito de que cualquier 'urgencia' puede modificar el sprint — eso sí destruye la agilidad."
      },
      {
        q:"¿Cuál es la señal más clara de que un ATF está logrando su objetivo en un equipo?",
        opts:["El equipo lo consulta para todas las decisiones importantes","Las métricas de velocity del equipo mejoran consistentemente","El equipo puede funcionar bien sin la presencia del ATF en las ceremonias cotidianas — logró transferir la habilidad de autogestión. El ATF que es indispensable está fallando; el ATF que el equipo 'no necesita' está teniendo éxito.","Los stakeholders reconocen públicamente el valor del ATF en las reuniones ejecutivas"],
        correct:2,
        explanation:"La paradoja del rol: el éxito del ATF se mide en qué tan innecesario se vuelve para el funcionamiento cotidiano del equipo. Si el equipo necesita al ATF para hacer el daily, para tomar decisiones técnicas, para escalar impedimentos — el ATF no está haciendo coaching, está haciendo management ágil. El objetivo es que el equipo internalice las capacidades. Cuando eso ocurre, el ATF puede subir al siguiente nivel de intervención."
      },
      {
        q:"¿Cómo distinguís a un Agile Coach que está transformando realmente la organización de uno que solo tiene el título?",
        opts:["El Coach real tiene más certificaciones SAFe y ICAgile","El Coach real puede nombrar exactamente qué comportamiento organizacional específico cambió en los últimos 6 meses, quién cambió, cómo lo cambió y cuál fue el impacto medible. El que solo tiene el título habla de ceremonias implementadas y frameworks adoptados — outputs, no comportamientos.","El Coach real trabaja con más equipos simultáneamente","El Coach real tiene más años de experiencia en el rol"],
        correct:1,
        explanation:"La prueba del algodón del Agile Coach es la especificidad del impacto. 'Implementamos SAFe' es un output. 'El Gerente de Producto ahora co-facilita la Review con el equipo en lugar de recibirla como espectador, y en los últimos 3 trimestres el NPS del producto subió de 34 a 52' es un comportamiento cambiado con impacto medible. Si el Coach no puede responder la pregunta con esa especificidad, está haciendo facilitación costosa, no coaching organizacional."
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

// ── VISUALS ──

function VisualSeguridadPsicologica() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      {[
        {n:"Nivel 1 — Inclusión","d":"Soy parte del equipo, me aceptan como soy","build":"Rituales de bienvenida · atención a voces menos visibles",c:"#16A34A",bg:"#DCFCE7"},
        {n:"Nivel 2 — Aprendizaje","d":"Puedo preguntar y admitir que no sé sin ser juzgado","build":"ATF hace preguntas 'obvias' en público · normaliza 'no sé'",c:"#0D9488",bg:"#CCFBF1"},
        {n:"Nivel 3 — Contribución","d":"Puedo proponer, disentir, aportar perspectivas diferentes","build":"Round Robin · Fist of Five · reconocer ideas que desafían el status quo",c:"#2563EB",bg:"#DBEAFE"},
        {n:"Nivel 4 — Desafío","d":"Puedo cuestionar el rumbo y desafiar al liderazgo","build":"Canales anónimos · post-mortems sin culpa · liderazgo que modela receptividad",c:"#DC2626",bg:"#FEE2E2"},
      ].map((x,i)=>(
        <div key={i} style={{background:x.bg,border:`1px solid ${x.c}40`,borderRadius:8,padding:"10px 14px",borderLeft:`4px solid ${x.c}`}}>
          <div style={{fontSize:12,fontWeight:700,color:x.c,marginBottom:3}}>{x.n}</div>
          <div style={{fontSize:11,color:"#374151",marginBottom:4}}>{x.d}</div>
          <div style={{fontSize:10,color:"#64748b"}}>→ Construir: {x.build}</div>
        </div>
      ))}
      <div style={{background:"#0f172a",borderRadius:7,padding:"8px 12px",fontSize:11,color:"#fbbf24",textAlign:"center",fontWeight:700}}>
        Diagnóstico: pregunta anónima en Mentimeter · Promedio &lt;5 = trabajo más urgente del ATF
      </div>
    </div>
  );
}

function VisualTomaDecisiones() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
        <div style={{background:"#FEE2E2",border:"1px solid #FCA5A5",borderRadius:8,padding:"10px 12px"}}>
          <div style={{fontSize:12,fontWeight:700,color:"#DC2626",marginBottom:5}}>CONSENSO</div>
          <div style={{fontSize:10,color:"#374151",lineHeight:1.6}}>Todos de acuerdo. Costoso y lento. Puede suprimir pensamiento crítico.<br/><em>Cuándo: decisiones que afectan profundamente a todos y requieren entusiasmo genuino.</em></div>
        </div>
        <div style={{background:"#DCFCE7",border:"1px solid #86EFAC",borderRadius:8,padding:"10px 12px"}}>
          <div style={{fontSize:12,fontWeight:700,color:"#16A34A",marginBottom:5}}>CONSENTIMIENTO ✓</div>
          <div style={{fontSize:10,color:"#374151",lineHeight:1.6}}>Nadie tiene objeción fundamental. Más rápido. Permite el disenso.<br/><em>Pregunta: "¿Podés vivir con esto y comprometerte a implementarlo?"</em></div>
        </div>
      </div>
      <div style={{background:"#0f172a",borderRadius:8,padding:"10px 14px"}}>
        <div style={{fontSize:10,fontWeight:700,color:"#fbbf24",marginBottom:6}}>CYNEFIN — qué tipo de decisión es</div>
        {[
          {d:"OBVIO","a":"Seguir el proceso establecido",c:"#4ade80"},
          {d:"COMPLICADO","a":"Analizar · consultar expertos · decidir",c:"#fbbf24"},
          {d:"COMPLEJO","a":"Experimentar (sprints) · aprender · adaptar ← la mayoría del software",c:"#f87171"},
          {d:"CAÓTICO","a":"Actuar para estabilizar · analizar después",c:"#a78bfa"},
        ].map((x,i)=>(
          <div key={i} style={{display:"flex",gap:8,marginBottom:4}}>
            <div style={{fontSize:10,fontWeight:700,color:x.c,minWidth:90}}>{x.d}</div>
            <div style={{fontSize:10,color:"#e2e8f0"}}>{x.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualCasos13() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      {[
        {n:"Caso 1 — Sprint que no termina",steps:["Sprint de observación — medir sin cambiar nada","CFD del último mes — visualizar el cuello de botella","Llevar datos al manager antes de proponer soluciones","Retro específica con los datos · cambiar 1 variable primero"],c:"#DC2626",bg:"#FEE2E2"},
        {n:"Caso 2 — PO que no refina",steps:["Cuantificar el costo: X horas perdidas en plannings extendidos","Proponer 30 min de refinamiento semanal facilitado por el ATF","Co-crear la DoR con el equipo y el PO en 1 hora","Verificar en el siguiente planning si mejoró"],c:"#D97706",bg:"#FEF3C7"},
        {n:"Caso 3 — Developer que bloquea",steps:["Conversación privada con modelo SBI","Round Robin explícito en el daily antes de discusión abierta","Involucrar al senior en rol de mentor: preguntas en lugar de respuestas","NUNCA confrontar públicamente — destruye la seguridad psicológica"],c:"#7C3AED",bg:"#EDE9FE"},
      ].map((x,i)=>(
        <div key={i} style={{background:x.bg,border:`1px solid ${x.c}40`,borderRadius:8,padding:"10px 14px",borderLeft:`4px solid ${x.c}`}}>
          <div style={{fontSize:12,fontWeight:700,color:x.c,marginBottom:6}}>{x.n}</div>
          {x.steps.map((s,j)=>(
            <div key={j} style={{fontSize:10,color:"#374151",lineHeight:1.7}}>{j+1}. {s}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

function VisualCasos45() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      <div style={{background:"#FEE2E2",border:"1px solid #FCA5A5",borderRadius:8,padding:"10px 14px",borderLeft:"4px solid #DC2626"}}>
        <div style={{fontSize:12,fontWeight:700,color:"#DC2626",marginBottom:6}}>Caso 4 — Transformación que no transforma</div>
        <div style={{fontSize:10,fontWeight:700,color:"#7F1D1D",marginBottom:4}}>Las 5 causas más frecuentes:</div>
        {["Solo cambiaron los nombres (standup = daily)","Managers siguen asignando trabajo fuera del sprint","Backlog = plan de proyecto original, no prioridades de negocio","Solo métricas de output (velocity), no de outcome (NPS, TTM)","El liderazgo no cambió su comportamiento"].map((s,i)=>(
          <div key={i} style={{fontSize:10,color:"#374151",lineHeight:1.7}}>✗ {s}</div>
        ))}
        <div style={{fontSize:10,fontWeight:700,color:"#DC2626",marginTop:6}}>→ Requiere intervención de Agile Coach, no de SM</div>
      </div>
      <div style={{background:"#FEF3C7",border:"1px solid #FCD34D",borderRadius:8,padding:"10px 14px",borderLeft:"4px solid #D97706"}}>
        <div style={{fontSize:12,fontWeight:700,color:"#D97706",marginBottom:6}}>Caso 5 — PO vs Equipo Técnico</div>
        <div style={{fontSize:10,fontWeight:700,color:"#78350F",marginBottom:4}}>Política de capacidad explícita:</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:5}}>
          {[{p:"70%",d:"Features de negocio",c:"#16A34A",bg:"#DCFCE7"},{p:"20%",d:"Deuda técnica / refactoring",c:"#D97706",bg:"#FEF3C7"},{p:"10%",d:"Innovación / enablers",c:"#7C3AED",bg:"#EDE9FE"}].map((x,i)=>(
            <div key={i} style={{background:x.bg,border:`1px solid ${x.c}40`,borderRadius:6,padding:"8px",textAlign:"center"}}>
              <div style={{fontSize:16,fontWeight:700,color:x.c}}>{x.p}</div>
              <div style={{fontSize:9,color:"#374151",lineHeight:1.3}}>{x.d}</div>
            </div>
          ))}
        </div>
        <div style={{fontSize:10,color:"#78350F",marginTop:6}}>Documentar en Working Agreement · revisar en retro del PI</div>
      </div>
    </div>
  );
}

function VisualSesgos() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:6}}>
      {[
        {n:"Efecto de Anclaje",s:"El primer número ancla todas las estimaciones",fix:"Planning Poker simultáneo · Brainwriting antes de discutir",c:"#DC2626"},
        {n:"Groupthink",s:"El grupo valora cohesión sobre pensamiento crítico",fix:"Abogado del diablo · Pre-mortem · Brainwriting anónimo",c:"#D97706"},
        {n:"Efecto HiPPO",s:"La opinión del de mayor jerarquía determina la decisión",fix:"El ejecutivo habla último · datos antes de opiniones · votación simultánea",c:"#7C3AED"},
        {n:"Sesgo de Disponibilidad",s:"El evento reciente se sobre-pondera",fix:"Datos históricos de 5 sprints antes de decidir",c:"#2563EB"},
        {n:"Sesgo de Confirmación",s:"El grupo busca evidencia que confirma lo que ya cree",fix:"Protocolo: buscar activamente evidencia contraria antes de cerrar",c:"#0D9488"},
      ].map((x,i)=>(
        <div key={i} style={{background:"#f8fafc",border:`1px solid ${x.c}30`,borderRadius:7,padding:"8px 12px",borderLeft:`3px solid ${x.c}`}}>
          <div style={{fontSize:11,fontWeight:700,color:x.c,marginBottom:2}}>⚠ {x.n}</div>
          <div style={{fontSize:10,color:"#64748b",marginBottom:3}}>{x.s}</div>
          <div style={{fontSize:10,color:"#16A34A",fontWeight:600}}>→ Fix: {x.fix}</div>
        </div>
      ))}
    </div>
  );
}

function VisualDinamicasPoder() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      <div style={{background:"#0f172a",borderRadius:8,padding:"10px 14px"}}>
        <div style={{fontSize:10,fontWeight:700,color:"#fbbf24",marginBottom:6}}>LEER UNA SALA — primeros 30 segundos</div>
        {[
          {s:"¿Quién llegó tarde y todos esperaron?","r":"→ Poder real sin título formal"},
          {s:"¿Cuerpos cerrados, brazos cruzados?","r":"→ Resistencia o baja energía"},
          {s:"¿Quién se mira con quién antes de hablar?","r":"→ Alianzas implícitas"},
          {s:"¿Quién está en el teléfono?","r":"→ Bajo compromiso o señal de alarma"},
          {s:"¿Energía general baja?","r":"→ Activación antes del trabajo"},
        ].map((x,i)=>(
          <div key={i} style={{display:"flex",gap:8,marginBottom:4}}>
            <div style={{fontSize:10,color:"#94a3b8",flex:1}}>{x.s}</div>
            <div style={{fontSize:10,color:"#4ade80",fontWeight:600}}>{x.r}</div>
          </div>
        ))}
      </div>
      <div style={{background:"#FEE2E2",border:"1px solid #FCA5A5",borderRadius:8,padding:"10px 14px"}}>
        <div style={{fontSize:11,fontWeight:700,color:"#DC2626",marginBottom:5}}>CUÁNDO ROMPER LAS REGLAS ÁGILES</div>
        {[
          {r:"Sprint inmutable","q":"Bug crítico de seguridad en banca","h":"Ser explícito: costo + acuerdo del equipo"},
          {r:"Daily de 15 min","q":"Impedimento que 5 min más resuelven completamente","h":"'Lo extiendo 5 min — es más eficiente que bloquear el sprint'"},
          {r:"Retro obligatoria","q":"Equipo en crisis aguda","h":"Posponer a cuando el equipo pueda reflexionar productivamente"},
        ].map((x,i)=>(
          <div key={i} style={{marginBottom:6}}>
            <div style={{fontSize:10,fontWeight:700,color:"#DC2626"}}>Regla: {x.r}</div>
            <div style={{fontSize:10,color:"#374151"}}>Cuándo: {x.q}</div>
            <div style={{fontSize:10,color:"#16A34A",fontWeight:600}}>Cómo: {x.h}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualNivelExperto() {
  return (
    <div style={{display:"flex",flexDirection:"column",gap:8}}>
      <div style={{background:"#0f172a",borderRadius:8,padding:"10px 14px"}}>
        <div style={{fontSize:10,fontWeight:700,color:"#fbbf24",marginBottom:6}}>CALARIS COMO DETECTOR DE PATRONES EXPERTO</div>
        {[
          {l:"C Contexto","d":"¿Qué sesgos culturales y dinámicas de poder operan?",c:"#7C3AED"},
          {l:"A Alineación","d":"¿El 'consenso' es genuino o es Groupthink / HiPPO?",c:"#0D9488"},
          {l:"L Liderazgo","d":"¿Qué anti-patrón estoy en riesgo de cometer hoy?",c:"#2563EB"},
          {l:"A Audiencia","d":"¿A qué nivel de seguridad psicológica está el grupo?",c:"#D97706"},
          {l:"R Roadmap","d":"¿Intervengo en el punto de apalancamiento correcto?",c:"#DC2626"},
          {l:"I Impacto","d":"¿El equipo puede hacer X sin mí? (métrica de autonomía)",c:"#16A34A"},
          {l:"S Standards","d":"¿El equipo cumple las reglas porque las internalizó o porque estoy mirando?",c:"#64748b"},
        ].map((x,i)=>(
          <div key={i} style={{display:"flex",gap:8,marginBottom:4}}>
            <div style={{fontSize:10,fontWeight:700,color:x.c,minWidth:80}}>{x.l}</div>
            <div style={{fontSize:10,color:"#e2e8f0"}}>{x.d}</div>
          </div>
        ))}
      </div>
      <div style={{background:"#DCFCE7",border:"1px solid #86EFAC",borderRadius:7,padding:"8px 12px",fontSize:11,color:"#14532D",textAlign:"center",fontWeight:700}}>
        TEST FINAL: Si mañana no vinieras al trabajo, ¿el equipo funcionaría?<br/>
        <span style={{fontWeight:400,fontSize:10}}>Si no → hay coaching pendiente. Si sí → lograste el objetivo más importante del rol.</span>
      </div>
    </div>
  );
}

function Visual({chapter}) {
  const t = chapter.visual.type;
  if(t==="seguridad-psicologica") return <VisualSeguridadPsicologica/>;
  if(t==="toma-decisiones")       return <VisualTomaDecisiones/>;
  if(t==="casos-1-3")             return <VisualCasos13/>;
  if(t==="casos-4-5")             return <VisualCasos45/>;
  if(t==="sesgos")                return <VisualSesgos/>;
  if(t==="dinamicas-poder")       return <VisualDinamicasPoder/>;
  if(t==="nivel-experto")         return <VisualNivelExperto/>;
  return null;
}

function Quiz({questions, color, light, onComplete}) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  function answer(qi,oi){if(submitted||answers[qi]!==undefined)return;setAnswers(a=>({...a,[qi]:oi}));}
  function submit(){
    if(Object.keys(answers).length<questions.length)return;
    const score=questions.reduce((s,q,i)=>s+(answers[i]===q.correct?1:0),0);
    setSubmitted(true);onComplete(score);
  }
  return (
    <div>
      {questions.map((q,qi)=>(
        <div key={qi} style={{marginBottom:16}}>
          <div style={{fontSize:13,fontWeight:500,color:"#1e293b",marginBottom:8,lineHeight:1.5}}>{qi+1}. {q.q}</div>
          <div style={{display:"flex",flexDirection:"column",gap:5}}>
            {q.opts.map((o,oi)=>{
              let bg="#f8fafc",border="1px solid #e2e8f0",tc="#374151";
              if(answers[qi]===oi){bg=light;border=`1px solid ${color}`;tc="#1e293b";}
              if(submitted&&oi===q.correct){bg="#f0fdf4";border="1px solid #86efac";tc="#14532d";}
              if(submitted&&answers[qi]===oi&&oi!==q.correct){bg="#fef2f2";border="1px solid #fca5a5";tc="#7f1d1d";}
              return <div key={oi} onClick={()=>answer(qi,oi)} style={{padding:"9px 13px",borderRadius:7,border,background:bg,cursor:submitted||answers[qi]!==undefined?"default":"pointer",fontSize:12,color:tc,lineHeight:1.4}}>{o}</div>;
            })}
          </div>
          {submitted&&<div style={{marginTop:8,padding:"8px 12px",background:answers[qi]===q.correct?"#f0fdf4":"#fef2f2",border:`1px solid ${answers[qi]===q.correct?"#86efac":"#fca5a5"}`,borderRadius:6,fontSize:12,color:answers[qi]===q.correct?"#14532d":"#7f1d1d",lineHeight:1.6}}>{answers[qi]===q.correct?"✓ ":"✗ "}{q.explanation}</div>}
        </div>
      ))}
      {!submitted&&<button onClick={submit} disabled={Object.keys(answers).length<questions.length} style={{marginTop:4,padding:"9px 20px",borderRadius:7,border:"none",background:Object.keys(answers).length<questions.length?"#e2e8f0":color,color:Object.keys(answers).length<questions.length?"#94a3b8":"#fff",fontSize:13,fontWeight:600,cursor:Object.keys(answers).length<questions.length?"not-allowed":"pointer"}}>Verificar respuestas</button>}
    </div>
  );
}

export default function SMATFCoachParte2() {
  const [chapter, setChapter] = useState(0);
  const [tab, setTab] = useState("functional");
  const [quizDone, setQuizDone] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [totalQ, setTotalQ] = useState(0);
  const [quizKey, setQuizKey] = useState(0);

  const ch = CHAPTERS[chapter];
  const pct = totalQ>0?Math.round((totalScore/totalQ)*100):0;
  const doneCh = Object.keys(quizDone).length;

  function handleQuizComplete(score){
    if(!quizDone[chapter]){setTotalScore(s=>s+score);setTotalQ(t=>t+ch.questions.length);}
    setQuizDone(d=>({...d,[chapter]:{done:true,score,total:ch.questions.length}}));
  }
  function goChapter(idx){setChapter(idx);setTab("functional");setQuizKey(k=>k+1);}

  return (
    <div style={{fontFamily:"var(--font-sans)",maxWidth:780,margin:"0 auto"}}>
      <div style={{background:"#0f172a",borderRadius:"12px 12px 0 0",padding:"12px 16px",display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:32,height:32,borderRadius:8,background:"rgba(220,38,38,.25)",border:"1px solid rgba(252,165,165,.4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>🔥</div>
        <div style={{flex:1}}>
          <div style={{fontSize:13,fontWeight:500,color:"#f1f5f9"}}>SM → ATF → Agile Coach · Parte 2 de 2</div>
          <div style={{fontSize:11,color:"#64748b"}}>7 secciones · 21 preguntas · Psicología · Casos Reales · Nivel Experto</div>
        </div>
        {doneCh>0&&<div style={{textAlign:"right"}}><div style={{fontSize:18,fontWeight:700,color:pct>=80?"#4ade80":pct>=60?"#fbbf24":"#f87171"}}>{pct}%</div><div style={{fontSize:10,color:"#64748b"}}>{doneCh}/{CHAPTERS.length}</div></div>}
      </div>

      <div style={{background:"#1e293b",padding:"8px 12px",borderBottom:"1px solid #0f172a"}}>
        {GROUPS.map(group=>{
          const gc=CHAPTERS.filter(c=>c.group===group.id);
          return (
            <div key={group.id} style={{marginBottom:6}}>
              <div style={{fontSize:10,fontWeight:700,color:group.color,letterSpacing:".05em",marginBottom:4,paddingLeft:2}}>{group.label.toUpperCase()}</div>
              <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
                {gc.map(c=>{
                  const idx=CHAPTERS.indexOf(c);
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
          {tab==="functional"&&<div><div style={{fontSize:10,fontWeight:700,color:"#94a3b8",letterSpacing:".5px",marginBottom:10}}>¿QUÉ ES Y POR QUÉ IMPORTA?</div><div style={{fontSize:13,color:"#374151",lineHeight:1.85,whiteSpace:"pre-line"}}>{ch.functional}</div><div style={{marginTop:14,padding:"10px 14px",background:ch.light,border:`1px solid ${ch.border}`,borderRadius:8,fontSize:12,color:ch.text}}>Orden: <strong>Funcional → Técnico → Visual → ¿Lo entendí?</strong></div></div>}
          {tab==="technical"&&<div><div style={{fontSize:10,fontWeight:700,color:"#94a3b8",letterSpacing:".5px",marginBottom:10}}>IMPLEMENTACIÓN Y DETALLES</div><div style={{background:"#0f172a",borderRadius:8,padding:"14px 16px"}}><div style={{fontSize:12,color:"#e2e8f0",lineHeight:1.9,whiteSpace:"pre-line",fontFamily:"monospace"}}>{ch.technical}</div></div></div>}
          {tab==="visual"&&<div><div style={{fontSize:10,fontWeight:700,color:"#94a3b8",letterSpacing:".5px",marginBottom:10}}>REPRESENTACIÓN VISUAL</div><Visual chapter={ch}/></div>}
          {tab==="quiz"&&<div><div style={{fontSize:10,fontWeight:700,color:"#94a3b8",letterSpacing:".5px",marginBottom:12}}>VALIDA TU COMPRENSIÓN</div>{quizDone[chapter]?(<div><div style={{background:quizDone[chapter].score===quizDone[chapter].total?"#f0fdf4":"#fffbeb",border:`1px solid ${quizDone[chapter].score===quizDone[chapter].total?"#86efac":"#fcd34d"}`,borderRadius:8,padding:"12px 14px",marginBottom:12}}><div style={{fontSize:13,fontWeight:600,color:"#1e293b"}}>{quizDone[chapter].score===quizDone[chapter].total?"🎯 ¡Sección dominada!":"✅ Completada"}</div><div style={{fontSize:12,color:"#64748b",marginTop:4}}>{quizDone[chapter].score}/{quizDone[chapter].total} correctas</div></div><button onClick={()=>{setQuizDone(d=>{const nd={...d};delete nd[chapter];return nd;});setQuizKey(k=>k+1);}} style={{fontSize:12,padding:"8px 16px",borderRadius:7,border:"1px solid #e2e8f0",background:"#f8fafc",cursor:"pointer",color:"#64748b"}}>Repetir quiz</button></div>):(<Quiz key={quizKey} questions={ch.questions} color={ch.color} light={ch.light} onComplete={handleQuizComplete}/>)}</div>}
        </div>

        <div style={{padding:"10px 18px 14px",borderTop:"1px solid #f1f5f9",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <button onClick={()=>goChapter(chapter-1)} disabled={chapter===0} style={{fontSize:12,padding:"8px 16px",borderRadius:7,border:"1px solid #e2e8f0",background:"#f8fafc",cursor:chapter===0?"not-allowed":"pointer",color:chapter===0?"#cbd5e1":"#374151"}}>← Anterior</button>
          <div style={{fontSize:11,color:"#94a3b8"}}>{chapter+1} / {CHAPTERS.length} · Parte 2</div>
          <button onClick={()=>goChapter(chapter+1)} disabled={chapter===CHAPTERS.length-1} style={{fontSize:12,padding:"8px 16px",borderRadius:7,border:`1px solid ${ch.color}`,background:ch.color,color:"#fff",cursor:chapter===CHAPTERS.length-1?"not-allowed":"pointer",opacity:chapter===CHAPTERS.length-1?.5:1}}>Siguiente →</button>
        </div>
      </div>
    </div>
  );
}
