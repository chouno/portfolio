"use strict";var precacheConfig=[["/portfolio/index.html","2da3fccb44639c283fd7f95770b4a727"],["/portfolio/static/css/main.624cf3c7.css","fffccc971d397cfdee56e4af64fbc2e6"],["/portfolio/static/js/main.7181237e.js","e10fad94649df4ac1fc9b1596e105f52"],["/portfolio/static/media/about.17c8c645.png","17c8c6459afdcafdd2df656e4ca0a2ee"],["/portfolio/static/media/dashboard1.5dd5c7a6.png","5dd5c7a6c518033d4aaa9b9f2eabe2a5"],["/portfolio/static/media/dashboard2.f9b3a46d.png","f9b3a46d8431873486e1a8d942658f7f"],["/portfolio/static/media/detail.9b2d7769.png","9b2d77691fa6bb9ce146d81316296dc2"],["/portfolio/static/media/detail1.158d6893.png","158d68930658cdaf11416247a24aa9e5"],["/portfolio/static/media/detail2.6dfe1c23.png","6dfe1c238c00b4d8111422a2cc7949b9"],["/portfolio/static/media/downloaded.3cf0a1f4.png","3cf0a1f405451caab162ef5a25558df0"],["/portfolio/static/media/drop.7f4d73fc.png","7f4d73fc66fdcd92dfce51de0f002036"],["/portfolio/static/media/droped.894cde17.png","894cde17583287f1e9c5242fa4db175d"],["/portfolio/static/media/enter.ad187606.png","ad18760628f16303df9ee44a00cfba24"],["/portfolio/static/media/gallery.f1252319.png","f125231946b7289f8cc6c43441dbaf7e"],["/portfolio/static/media/guide.81f57428.png","81f57428c93905bbf63a4cfe715fb7bc"],["/portfolio/static/media/map_selected.be8adb31.png","be8adb31ecd7790dc2161c07a88e3dcf"],["/portfolio/static/media/menu.6b9b93ad.png","6b9b93add18950e22f4a19acde9d3763"],["/portfolio/static/media/new.7ed38ba7.png","7ed38ba75259483becc4ea8467ef626e"],["/portfolio/static/media/pie.f52512e3.png","f52512e3425e0985754c6b1f1360fcbe"],["/portfolio/static/media/report.70248b9b.png","70248b9bf3ecd3aaf188f0dbe72b2c5d"],["/portfolio/static/media/search.19b4eba5.png","19b4eba5e3005aebbc76df22820f0d02"],["/portfolio/static/media/select.92e7d04c.png","92e7d04c861d769a2d661e735749496b"],["/portfolio/static/media/top.2aca047d.png","2aca047d2c9bc0527d019a36fe556085"],["/portfolio/static/media/top.404b8070.png","404b807021ebfc7783dd61cc6fe7a0f9"],["/portfolio/static/media/top.4a6fb14b.png","4a6fb14b422f296a0823a6de22ba879b"],["/portfolio/static/media/top.99fe529e.png","99fe529e6027e00be3baf3b827d69468"],["/portfolio/static/media/user.bcbb4a5d.png","bcbb4a5d0465d18e1a3ba5738565ddc2"],["/portfolio/static/media/word_description.7f50b9f3.png","7f50b9f3b6cbbbd334826b0d9b909fa7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});