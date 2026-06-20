const CACHE_NAME = 'mymoney-v2';
const STATIC_URLS = [
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.3/dist/umd/supabase.js',
  '/MyMoney_Logo_transparente_11.png',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_URLS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = event.request.url;

  // Nunca interceptar llamadas a Supabase
  if (url.includes('supabase.co')) return;

  // index.html → siempre network-first para recibir updates
  if (url.includes('index.html') || url.endsWith('/') || url === self.location.origin + '/') {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Recursos estáticos (JS, fuentes, imágenes) → cache-first
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(res => {
        if (res && res.status === 200 && res.type !== 'opaque') {
          caches.open(CACHE_NAME).then(c => c.put(event.request, res.clone()));
        }
        return res;
      });
    })
  );
});
