/* Image cache: stores every site image once, then serves it instantly on every page (cache-first). */
const C = "elmasria-img-v1";
const isImg = u => /(^|\.)ik\.imagekit\.io$/.test(u.hostname);
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("elmasria-img-") && k !== C).map(k => caches.delete(k))))
    .then(() => self.clients.claim())
));
self.addEventListener("message", e => {
  const urls = e.data && e.data.preload;
  if (!Array.isArray(urls)) return;
  e.waitUntil(caches.open(C).then(async c => {
    for (const u of urls) {
      try {
        if (await c.match(u)) continue;
        await c.put(u, await fetch(new Request(u, { mode: "no-cors", credentials: "omit" })));
      } catch (_) {}
    }
  }));
});
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || r.destination !== "image" || !isImg(new URL(r.url))) return;
  e.respondWith(caches.open(C).then(async c => {
    const hit = await c.match(r.url);
    if (hit) return hit;
    const res = await fetch(r);
    if (res && (res.ok || res.type === "opaque")) c.put(r.url, res.clone()).catch(() => {});
    return res;
  }));
});
