self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('barbearia-app-v1').then((cache) => {
      return cache.addAll([
        './index.html',
        './style.css',
        './script.js',
        './manifest.json',
        './icon.png',
        './icon-512x512.png',
        './modules/agendamentos.js',
        './modules/clientes.js',
        './modules/servicos.js',
        './modules/financeiro.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});