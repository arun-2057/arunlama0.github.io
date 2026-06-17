/**
 * Service Worker for Portfolio PWA
 * Enables offline functionality and caching strategies
 */

const CACHE_VERSION = 'v1';
const CACHE_NAMES = {
  STATIC: `portfolio-static-${CACHE_VERSION}`,
  DYNAMIC: `portfolio-dynamic-${CACHE_VERSION}`,
  IMAGES: `portfolio-images-${CACHE_VERSION}`,
};

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon-32.png',
  '/favicon-16.png',
  '/favicon-48.png',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAMES.STATIC)
      .then((cache) => {
        console.log('SW: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (Object.values(CACHE_NAMES).includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - implement caching strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external API calls
  if (!url.origin.includes(self.location.origin)) {
    return;
  }

  // Image caching strategy: cache first, fall back to network
  if (request.destination === 'image') {
    return event.respondWith(
      caches.open(CACHE_NAMES.IMAGES).then((cache) => {
        return cache.match(request).then((response) => {
          return response || fetch(request).then((response) => {
            cache.put(request, response.clone());
            return response;
          }).catch(() => {
            return cache.match('/favicon-32.png');
          });
        });
      })
    );
  }

  // Document/Script caching: network first, fall back to cache
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (!response || response.status !== 200) {
          return response;
        }
        const cache = CACHE_NAMES.DYNAMIC;
        caches.open(cache).then((c) => {
          c.put(request, response.clone());
        });
        return response;
      })
      .catch(() => {
        return caches.match(request)
          .then((response) => {
            return response || caches.match('/index.html');
          });
      })
  );
});

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
