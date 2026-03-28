// ══════════════════════════════════════════════
// sw.js — Service Worker con cache versionado
// CACHE_VERSION: incrementar con cada deploy
// para forzar actualización automática en todos
// los dispositivos sin borrar cache manualmente
// ══════════════════════════════════════════════

const CACHE_VERSION = 'v9-fix-404-directories';
const CACHE_NAME    = `ag-prep-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  '/AG/',
  '/AG/index.html',
  '/AG/manifest.json',
  '/AG/progress.js',
  // Guías existentes
  '/AG/plan/',
  '/AG/safe/',
  '/AG/modelos/',
  '/AG/less/',
  '/AG/atf/',
  '/AG/calaris/',
  '/AG/herramientas/',
  // Nuevas guías
  '/AG/sm-atf-coach-p1/',
  '/AG/sm-atf-coach-p2/',
  '/AG/playbook/',
];

// ── INSTALL: precachear recursos esenciales ──
self.addEventListener('install', event => {
  // Activar inmediatamente sin esperar cierre de pestañas
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_URLS.map(url => (
        new Request(url, {cache: 'reload'})
      ))).catch(err => {
        // Si una URL no existe aún, continuar igual
        console.warn('SW precache parcial:', err);
      });
    })
  );
});

// ── ACTIVATE: eliminar caches viejos automáticamente ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name.startsWith('ag-prep-') && name !== CACHE_NAME)
          .map(name => {
            console.log('SW eliminando cache viejo:', name);
            return caches.delete(name);
          })
      );
    }).then(() => {
      // Tomar control de todas las pestañas abiertas
      return self.clients.claim();
    })
  );
});

// ── FETCH: Network First para HTML, Cache First para assets ──
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  // HTML → Network First (recibe actualizaciones)
  if (
    event.request.mode === 'navigate' ||
    event.request.headers.get('accept')?.includes('text/html')
  ) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request)
          .then(cached => cached || caches.match('/AG/')))
    );
    return;
  }

  // JS/CSS/imágenes → Cache First con fallback a red
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});

// ── MESSAGE: skip waiting cuando hay nueva versión ──
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
