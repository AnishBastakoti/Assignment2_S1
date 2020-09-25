self.addEventListener('install', function(event){
  //Precache files
});

const cacheTitle = 'bookbankcache';
const cacheVersion = 'v1';
const cacheName = cacheTitle + '-' + cacheVersion;
const urlsToCache = [
  '/',
  'index.html',
  'views/mainpage.html',
  'views/book.html',
  'views/cancel.html',
  'views/checkout.html',
  'views/confirm.html',
  'views/userinfo.html',
  'styles/style.css',
  'styles/book.css',
  'styles/cancel.css',
  'styles/checkout.css',
  'styles/checkout1.css',
  'styles/mainpage.css',
  'styles/menu.css',
  'styles/user.css',
  'js/book.js',
  'js/cancel.js',
  'js/card.js',
  'js/checkout.js',
  'js/contact_me.js',
  'js/login.js',
  'js/mainpage.js',
  'js/popup.js',
  'js/index.js',
  'img/aero.png',
  'img/civil.png',
  'img/book.png',
  'img/comic.png',
  'img/cyber.png',
  'img/doctor.png',
  'img/harrypotter.png',
  'img/harrypotter1.png',
  'img/harrypotter3.png',
  'img/icon.png',
  'img/icon1.png',
  'img/icon2.jpg',
  'img/img3.png',
  'img/img5.png',
  'img/img1.png',
  'img/jk.jpg',
  'img/law.png',
  'img/martin.jpg',
  'img/maya.jpg',
  'img/ML.png',
  'img/novel.png',
  'img/novel1.png',
  'img/search.png',
  'img/toni.jpg',
  'img/spider.png',
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
