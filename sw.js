// ══════════════════════════════════════════════
// sw.js — Service Worker con cache versionado
// Cambia CACHE_VERSION para forzar actualización
// automática en todos los dispositivos
// ══════════════════════════════════════════════

const CACHE_VERSION = 'v7-calaris'; // ← incrementar con cada deploy
const CACHE_NAME = `ag-prep-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  '/AG/',
  '/AG/index.html',
  '/AG/manifest.json',
  '/AG/plan/',
  '/AG/herramientas/',
  '/AG/safe/',
  '/AG/modelos/',
  '/AG/less/',
  '/AG/atf/',
  '/AG/calaris/',
];

// ── INSTALL: precachear recursos esenciales ──
self.addEventListener('install', event => {
  // Activar inmediatamente sin esperar a que cierren las pestañas
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_URLS.map(url => {
        return new Request(url, { cache: 'reload' });
      })).catch(err => {
        // Si falla alguna URL no crítica, continuar igual
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
      // Tomar control de todas las pestañas abiertas inmediatamente
      return self.clients.claim();
    })
  );
});

// ── FETCH: Network First para HTML, Cache First para assets ──
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Solo manejar requests del mismo origen
  if (url.origin !== location.origin) return;

  // Para documentos HTML: Network First (para recibir actualizaciones)
  if (event.request.mode === 'navigate' ||
      event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Guardar copia fresca en cache
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          return response;
        })
        .catch(() => {
          // Sin red: servir desde cache
          return caches.match(event.request)
            .then(cached => cached || caches.match('/AG/'));
        })
    );
    return;
  }

  // Para JS, CSS, imágenes: Cache First con fallback a red
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

// ── MESSAGE: responder a petición de skip waiting ──
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
