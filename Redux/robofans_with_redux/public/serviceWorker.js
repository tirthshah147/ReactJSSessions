const CACHE_NAME = "version-3";
const urlsToCache = ['index.html','offline.html'];

const self = this;

// Installing the SW
self.addEventListener('install',(event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache) => {
      console.log("Cache is Opened!")
      return cache.addAll(urlsToCache);
    })
  )
})



// Listening for the request
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
    .then(() => {
      return fetch(event.request)
              .catch(() => caches.match('offline.html'))
    })
  )
})


// Activating the SW
self.addEventListener('activate',(event) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if(!cacheWhiteList.includes(cacheName)){
          return caches.delete(cacheName)
        }
      })
    ))
  )
})