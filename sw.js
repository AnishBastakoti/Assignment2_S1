const cacheTitle = 'bookbankcache';
const cacheVersion = 'v1';
const cacheName = cacheTitle + '-' + cacheVersion;
const urlsToCache = [
  '/',
  '/src/views/index.html',
  '/src/views/views/mainpage.html',
  '/src/views/views/book.html',
  '/src/views/views/cancel.html',
  '/src/views/views/checkout.html',
  '/src/views/views/confirm.html',
  '/src/views/views/userinfo.html',
  '/src/styles/style.css',
  '/src/styles/book.css',
  '/src/styles/cancel.css',
  '/src/styles/checkout.css',
  '/src/styles/checkout1.css',
  '/src/styles/mainpage.css',
  '/src/styles/menu.css',
  '/src/styles/user.css',
  '/src/js/book.js',
  '/src/js/cancel.js',
  '/src/js/card.js',
  '/src/js/checkout.js',
  '/src/js/contact_me.js',
  '/src/js/login.js',
  '/src/js/popup.js',
  '/src/js/mainpage.js',
  '/src/js/index.js',
  '/src/img/aero.png',
  '/src/img/civil.png',
  '/src/img/book.png',
  '/src/img/comic.png',
  '/src/img/cyber.png',
  '/src/img/doctor.png',
  '/src/img/harrypotter.png',
  '/src/img/harrypotter1.png',
  '/src/img/harrypotter3.png',
  '/src/img/icon.png',
  '/src/img/icon1.png',
  '/src/img/icon2.jpg',
  '/src/img/img3.png',
  '/src/img/img5.png',
  '/src/img/img1.png',
  '/src/img/jk.jpg',
  '/src/img/law.png',
  '/src/img/martin.jpg',
  '/src/img/maya.jpg',
  '/src/img/ML.png',
  '/src/img/novel.png',
  '/src/img/novel1.png',
  '/src/img/search.png',
  '/src/img/toni.jpg',
  '/src/img/spider.png',
];

self.addEventListener("install", (e) => {
  console.log("Service Worker: Installed");

  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("Service Worker: Caching Files");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Call Activate Event
self.addEventListener("activate", (e) => {
  console.log("Service Worker: Activated");
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service Worker: Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener("fetch", (e) => {
  console.log("Service Worker: Fetching");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
