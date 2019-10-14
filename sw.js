self.addEventListener('install', event => {
	event.waitUntil(precache());
});

self.addEventListener('fetch', event => {
	const request = event.request;
	if (request.method !== 'GET') {
		return;
	}

	// buscar en cache
	event.respondWith(cachedResponse(request));

	//actualizar el cache
	event.waitUltil(updateCache(request));
});

async function updateCache(request) {
	const cache = await caches.open('v1');
	const response = await fetch(request);
	return cache.put(request, response);
}

async function precache() {
	const cache = await caches.open('v1');
	return cache.addAll(['/', '/index.html', '/plugins/AutoPause.js', '/plugins/AutoPlay.js', '/mediaPlayer.js', '/media/video.mp4', '/app.js']);
}

async function cachedResponse(request) {
	const cache = await caches.open('v1');
	const response = await cache.match(request);
	return response || fetch(request);
}
