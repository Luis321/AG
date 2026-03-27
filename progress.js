// ══════════════════════════════════════════════
// progress.js — Persistencia de progreso
// Compartido entre todas las guías interactivas
// Usar: <script src="/AG/progress.js"></script>
// ══════════════════════════════════════════════

window.AgProgress = {

  // Guardar el estado completo de una guía
  save(guideId, quizDone, totalScore, totalQ) {
    try {
      const data = {
        quizDone,
        totalScore,
        totalQ,
        lastSaved: new Date().toISOString(),
        version: 1
      };
      localStorage.setItem(`ag-progress-${guideId}`, JSON.stringify(data));
    } catch(e) {
      console.warn('AgProgress: no se pudo guardar', e);
    }
  },

  // Cargar el estado guardado de una guía
  load(guideId) {
    try {
      const raw = localStorage.getItem(`ag-progress-${guideId}`);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch(e) {
      console.warn('AgProgress: no se pudo cargar', e);
      return null;
    }
  },

  // Borrar el progreso de una guía
  clear(guideId) {
    try {
      localStorage.removeItem(`ag-progress-${guideId}`);
    } catch(e) {}
  },

  // Obtener resumen de todas las guías para el índice
  getSummary() {
    const guides = ['safe', 'modelos', 'less', 'atf', 'calaris', 'herramientas'];
    return guides.reduce((acc, id) => {
      const data = this.load(id);
      if (data && data.totalQ > 0) {
        acc[id] = {
          pct: Math.round((data.totalScore / data.totalQ) * 100),
          done: Object.keys(data.quizDone).length,
          lastSaved: data.lastSaved
        };
      }
      return acc;
    }, {});
  }
};
