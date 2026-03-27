// ══════════════════════════════════════════════════════
// INSTRUCCIONES — Agregar persistencia a cualquier guía
// ══════════════════════════════════════════════════════
//
// PASO 1: En el index.html de cada guía, agregar antes de </body>:
//   <script src="/AG/progress.js"></script>
//
// PASO 2: En el componente principal de la guía (ej: ATFGuia, SAFeGuiaCompleta, etc.)
//   reemplazar la sección de estado y las funciones de quiz con el código de abajo.
//   Solo cambia GUIDE_ID por el nombre de la guía.
//
// ══════════════════════════════════════════════════════

// ── GUÍA IDs disponibles ──
// safe | modelos | less | atf | calaris | herramientas

// ────────────────────────────────────────────────────
// BLOQUE A — Reemplazar el bloque useState al inicio
// del componente principal (los primeros 5 useState)
// ────────────────────────────────────────────────────

/*
  const GUIDE_ID = 'atf'; // ← cambiar según la guía

  // Cargar progreso guardado al iniciar
  const saved = (typeof window !== 'undefined' && window.AgProgress)
    ? window.AgProgress.load(GUIDE_ID)
    : null;

  const [chapter, setChapter] = useState(0);
  const [tab, setTab] = useState("functional");
  const [quizDone, setQuizDone] = useState(saved?.quizDone || {});
  const [totalScore, setTotalScore] = useState(saved?.totalScore || 0);
  const [totalQ, setTotalQ] = useState(saved?.totalQ || 0);
  const [quizKey, setQuizKey] = useState(0);
*/

// ────────────────────────────────────────────────────
// BLOQUE B — Reemplazar handleQuizComplete
// ────────────────────────────────────────────────────

/*
  function handleQuizComplete(score) {
    if (!quizDone[chapter]) {
      const newScore = totalScore + score;
      const newQ = totalQ + ch.questions.length;
      setTotalScore(newScore);
      setTotalQ(newQ);
      const newDone = {...quizDone, [chapter]: {done:true, score, total:ch.questions.length}};
      setQuizDone(newDone);
      // Guardar progreso inmediatamente
      if (typeof window !== 'undefined' && window.AgProgress) {
        window.AgProgress.save(GUIDE_ID, newDone, newScore, newQ);
      }
    } else {
      setQuizDone(d => ({...d, [chapter]: {done:true, score, total:ch.questions.length}}));
    }
  }
*/

// ────────────────────────────────────────────────────
// BLOQUE C — Botón "Resetear progreso" (opcional)
// Agregar dentro del footer o nav del componente
// ────────────────────────────────────────────────────

/*
  function resetProgress() {
    if (confirm('¿Borrar todo el progreso de esta guía?')) {
      setQuizDone({});
      setTotalScore(0);
      setTotalQ(0);
      if (typeof window !== 'undefined' && window.AgProgress) {
        window.AgProgress.clear(GUIDE_ID);
      }
      setQuizKey(k => k + 1);
    }
  }

  // En el JSX, agregar junto al score:
  // {doneCh > 0 && (
  //   <button onClick={resetProgress} style={{fontSize:10,color:"#64748b",background:"transparent",border:"none",cursor:"pointer"}}>
  //     Reset
  //   </button>
  // )}
*/

// ══════════════════════════════════════════════════════
// REFERENCIA RÁPIDA — GUIDE_ID por guía
// ══════════════════════════════════════════════════════
//
// safe/index.html        → GUIDE_ID = 'safe'
// modelos/index.html     → GUIDE_ID = 'modelos'
// less/index.html        → GUIDE_ID = 'less'
// atf/index.html         → GUIDE_ID = 'atf'
// calaris/index.html     → GUIDE_ID = 'calaris'
// herramientas/index.html→ GUIDE_ID = 'herramientas'
//
// ══════════════════════════════════════════════════════
