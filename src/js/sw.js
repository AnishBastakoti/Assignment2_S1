self.addEventListener('install', function(event){
  //Precache files
});

const cacheTitle = 'bookbankcache';
const cacheVersion = 'C1v1';
const cacheName = cacheTitle + '-' + cacheVersion;
const urlsToCache = [
  '/',
  '/views/index.html',
  '/styles/style.css',
  '/js/start.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request) ||
      fetch(event.request)
  );
});
