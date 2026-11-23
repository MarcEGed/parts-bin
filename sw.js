/* Parts Bin service worker: makes the app open offline. It caches the app's own files only, never your data. */
const VERSION="parts-bin-c2fa85ff59";
const ASSETS=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./apple-touch-icon.png"];
self.addEventListener("install",e=>{
  e.waitUntil(caches.open(VERSION).then(c=>c.addAll(ASSETS)));
});
self.addEventListener("activate",e=>{
  e.waitUntil((async()=>{
    for(const k of await caches.keys())if(k!==VERSION)await caches.delete(k);
    await self.clients.claim();
  })());
});
self.addEventListener("message",e=>{if(e.data==="skipWaiting")self.skipWaiting()});
self.addEventListener("fetch",e=>{
  const req=e.request;
  if(req.method!=="GET"||new URL(req.url).origin!==self.location.origin)return;
  e.respondWith((async()=>{
    const cache=await caches.open(VERSION);
    const hit=await cache.match(req,{ignoreSearch:true})||(req.mode==="navigate"?await cache.match("./index.html"):null);
    if(hit)return hit;
    try{
      const res=await fetch(req);
      if(res&&res.ok&&res.type==="basic")cache.put(req,res.clone()).catch(()=>{});
      return res;
    }catch(err){
      if(req.mode==="navigate"){const shell=await cache.match("./index.html");if(shell)return shell}
      return new Response("Offline and this file isn't cached.",{status:503,headers:{"Content-Type":"text/plain"}});
    }
  })());
});
