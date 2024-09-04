(()=>{"use strict";var t,e,n=function(){var t=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(t&&t.responseStart>0&&t.responseStart<performance.now())return t},r=function(t){if("loading"===document.readyState)return"loading";var e=n();if(e){if(t<e.domInteractive)return"loading";if(0===e.domContentLoadedEventStart||t<e.domContentLoadedEventStart)return"dom-interactive";if(0===e.domComplete||t<e.domComplete)return"dom-content-loaded"}return"complete"},i=function(t){var e=t.nodeName;return 1===t.nodeType?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},a=function(t,e){var n="";try{for(;t&&9!==t.nodeType;){var r=t,a=r.id?"#"+r.id:i(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(n.length+a.length>(e||100)-1)return n||a;if(n=n?a+">"+n:a,r.id)break;t=r.parentNode}}catch(t){}return n},o=-1,c=function(){return o},u=function(t){addEventListener("pageshow",(function(e){e.persisted&&(o=e.timeStamp,t(e))}),!0)},s=function(){var t=n();return t&&t.activationStart||0},d=function(t,e){var r=n(),i="navigate";return c()>=0?i="back-forward-cache":r&&(document.prerendering||s()>0?i="prerender":document.wasDiscarded?i="restore":r.type&&(i=r.type.replace(/_/g,"-"))),{name:t,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:i}},f=function(t,e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var r=new PerformanceObserver((function(t){Promise.resolve().then((function(){e(t.getEntries())}))}));return r.observe(Object.assign({type:t,buffered:!0},n||{})),r}}catch(t){}},l=function(t,e,n,r){var i,a;return function(o){e.value>=0&&(o||r)&&((a=e.value-(i||0))||void 0===i)&&(i=e.value,e.delta=a,e.rating=function(t,e){return t>e[1]?"poor":t>e[0]?"needs-improvement":"good"}(e.value,n),t(e))}},m=function(t){requestAnimationFrame((function(){return requestAnimationFrame((function(){return t()}))}))},v=function(t){document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&t()}))},p=function(t){var e=!1;return function(){e||(t(),e=!0)}},g=-1,h=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},y=function(t){"hidden"===document.visibilityState&&g>-1&&(g="visibilitychange"===t.type?t.timeStamp:0,E())},T=function(){addEventListener("visibilitychange",y,!0),addEventListener("prerenderingchange",y,!0)},E=function(){removeEventListener("visibilitychange",y,!0),removeEventListener("prerenderingchange",y,!0)},S=function(){return g<0&&(g=h(),T(),u((function(){setTimeout((function(){g=h(),T()}),0)}))),{get firstHiddenTime(){return g}}},b=function(t){document.prerendering?addEventListener("prerenderingchange",(function(){return t()}),!0):t()},w=[1800,3e3],C=function(t,e){e=e||{},b((function(){var n,r=S(),i=d("FCP"),a=f("paint",(function(t){t.forEach((function(t){"first-contentful-paint"===t.name&&(a.disconnect(),t.startTime<r.firstHiddenTime&&(i.value=Math.max(t.startTime-s(),0),i.entries.push(t),n(!0)))}))}));a&&(n=l(t,i,w,e.reportAllChanges),u((function(r){i=d("FCP"),n=l(t,i,w,e.reportAllChanges),m((function(){i.value=performance.now()-r.timeStamp,n(!0)}))})))}))},M=[.1,.25],L=0,D=1/0,I=0,x=function(t){t.forEach((function(t){t.interactionId&&(D=Math.min(D,t.interactionId),I=Math.max(I,t.interactionId),L=I?(I-D)/7+1:0)}))},k=function(){return t?L:performance.interactionCount||0},P=function(){"interactionCount"in performance||t||(t=f("event",x,{type:"event",buffered:!0,durationThreshold:0}))},A=[],F=new Map,B=0,O=[],R=function(t){if(O.forEach((function(e){return e(t)})),t.interactionId||"first-input"===t.entryType){var e=A[A.length-1],n=F.get(t.interactionId);if(n||A.length<10||t.duration>e.latency){if(n)t.duration>n.latency?(n.entries=[t],n.latency=t.duration):t.duration===n.latency&&t.startTime===n.entries[0].startTime&&n.entries.push(t);else{var r={id:t.interactionId,latency:t.duration,entries:[t]};F.set(r.id,r),A.push(r)}A.sort((function(t,e){return e.latency-t.latency})),A.length>10&&A.splice(10).forEach((function(t){return F.delete(t.id)}))}}},j=function(t){var e=self.requestIdleCallback||self.setTimeout,n=-1;return t=p(t),"hidden"===document.visibilityState?t():(n=e(t),v(t)),n},_=[200,500],q=[],N=[],V=0,W=new WeakMap,z=new Map,H=-1,U=function(t){q=q.concat(t),G()},G=function(){H<0&&(H=j(J))},J=function(){z.size>10&&z.forEach((function(t,e){F.has(e)||z.delete(e)}));var t=A.map((function(t){return W.get(t.entries[0])})),e=N.length-50;N=N.filter((function(n,r){return r>=e||t.includes(n)}));for(var n=new Set,r=0;r<N.length;r++){var i=N[r];K(i.startTime,i.processingEnd).forEach((function(t){n.add(t)}))}var a=q.length-1-50;q=q.filter((function(t,e){return t.startTime>V&&e>a||n.has(t)})),H=-1};O.push((function(t){t.interactionId&&t.target&&!z.has(t.interactionId)&&z.set(t.interactionId,t.target)}),(function(t){var e,n=t.startTime+t.duration;V=Math.max(V,t.processingEnd);for(var r=N.length-1;r>=0;r--){var i=N[r];if(Math.abs(n-i.renderTime)<=8){(e=i).startTime=Math.min(t.startTime,e.startTime),e.processingStart=Math.min(t.processingStart,e.processingStart),e.processingEnd=Math.max(t.processingEnd,e.processingEnd),e.entries.push(t);break}}e||(e={startTime:t.startTime,processingStart:t.processingStart,processingEnd:t.processingEnd,renderTime:n,entries:[t]},N.push(e)),(t.interactionId||"first-input"===t.entryType)&&W.set(t,e),G()}));var K=function(t,e){for(var n,r=[],i=0;n=q[i];i++)if(!(n.startTime+n.duration<t)){if(n.startTime>e)break;r.push(n)}return r},Q=[2500,4e3],X={},Y=[800,1800],Z=function t(e){document.prerendering?b((function(){return t(e)})):"complete"!==document.readyState?addEventListener("load",(function(){return t(e)}),!0):setTimeout(e,0)},$=function(t,e){e=e||{};var r=d("TTFB"),i=l(t,r,Y,e.reportAllChanges);Z((function(){var a=n();a&&(r.value=Math.max(a.responseStart-s(),0),r.entries=[a],i(!0),u((function(){r=d("TTFB",0),(i=l(t,r,Y,e.reportAllChanges))(!0)})))}))};new Date,window.initializeWebVitalsTracking=function(t,i,o){if(t){var g="https://app.creeperseoaudit.com/cvw-metrics?id=".concat(encodeURIComponent(t));!function(t){!function(t,e){e=e||{},C(p((function(){var n,r=d("CLS",0),i=0,a=[],o=function(t){t.forEach((function(t){if(!t.hadRecentInput){var e=a[0],n=a[a.length-1];i&&t.startTime-n.startTime<1e3&&t.startTime-e.startTime<5e3?(i+=t.value,a.push(t)):(i=t.value,a=[t])}})),i>r.value&&(r.value=i,r.entries=a,n())},c=f("layout-shift",o);c&&(n=l(t,r,M,e.reportAllChanges),v((function(){o(c.takeRecords()),n(!0)})),u((function(){i=0,r=d("CLS",0),n=l(t,r,M,e.reportAllChanges),m((function(){return n()}))})),setTimeout(n,0))})))}((function(e){var n=function(t){var e,n={};if(t.entries.length){var i=t.entries.reduce((function(t,e){return t&&t.value>e.value?t:e}));if(i&&i.sources&&i.sources.length){var o=(e=i.sources).find((function(t){return t.node&&1===t.node.nodeType}))||e[0];o&&(n={largestShiftTarget:a(o.node),largestShiftTime:i.startTime,largestShiftValue:i.value,largestShiftSource:o,largestShiftEntry:i,loadState:r(i.startTime)})}}return Object.assign(t,{attribution:n})}(e);t(n)}),void 0)}(h),function(t){C((function(e){var i=function(t){var e={timeToFirstByte:0,firstByteToFCP:t.value,loadState:r(c())};if(t.entries.length){var i=n(),a=t.entries[t.entries.length-1];if(i){var o=i.activationStart||0,u=Math.max(0,i.responseStart-o);e={timeToFirstByte:u,firstByteToFCP:t.value-u,loadState:r(t.entries[0].startTime),navigationEntry:i,fcpEntry:a}}}return Object.assign(t,{attribution:e})}(e);t(i)}),void 0)}(h),function(t){e||(e=f("long-animation-frame",U)),function(t,e){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(e=e||{},b((function(){var n;P();var r,i=d("INP"),a=function(t){j((function(){t.forEach(R);var e=function(){var t=Math.min(A.length-1,Math.floor((k()-B)/50));return A[t]}();e&&e.latency!==i.value&&(i.value=e.latency,i.entries=e.entries,r())}))},o=f("event",a,{durationThreshold:null!==(n=e.durationThreshold)&&void 0!==n?n:40});r=l(t,i,_,e.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),v((function(){a(o.takeRecords()),r(!0)})),u((function(){B=k(),A.length=0,F.clear(),i=d("INP"),r=l(t,i,_,e.reportAllChanges)})))})))}((function(e){var n=function(t){var e=t.entries[0],n=W.get(e),i=e.processingStart,o=n.processingEnd,c=n.entries.sort((function(t,e){return t.processingStart-e.processingStart})),u=K(e.startTime,o),s=t.entries.find((function(t){return t.target})),d=s&&s.target||z.get(e.interactionId),f=[e.startTime+e.duration,o].concat(u.map((function(t){return t.startTime+t.duration}))),l=Math.max.apply(Math,f),m={interactionTarget:a(d),interactionTargetElement:d,interactionType:e.name.startsWith("key")?"keyboard":"pointer",interactionTime:e.startTime,nextPaintTime:l,processedEventEntries:c,longAnimationFrameEntries:u,inputDelay:i-e.startTime,processingDuration:o-i,presentationDelay:Math.max(l-o,0),loadState:r(e.startTime)};return Object.assign(t,{attribution:m})}(e);t(n)}),void 0)}(h),function(t){!function(t,e){e=e||{},b((function(){var n,r=S(),i=d("LCP"),a=function(t){e.reportAllChanges||(t=t.slice(-1)),t.forEach((function(t){t.startTime<r.firstHiddenTime&&(i.value=Math.max(t.startTime-s(),0),i.entries=[t],n())}))},o=f("largest-contentful-paint",a);if(o){n=l(t,i,Q,e.reportAllChanges);var c=p((function(){X[i.id]||(a(o.takeRecords()),o.disconnect(),X[i.id]=!0,n(!0))}));["keydown","click"].forEach((function(t){addEventListener(t,(function(){return j(c)}),!0)})),v(c),u((function(r){i=d("LCP"),n=l(t,i,Q,e.reportAllChanges),m((function(){i.value=performance.now()-r.timeStamp,X[i.id]=!0,n(!0)}))}))}}))}((function(e){var r=function(t){var e={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:t.value};if(t.entries.length){var r=n();if(r){var i=r.activationStart||0,o=t.entries[t.entries.length-1],c=o.url&&performance.getEntriesByType("resource").filter((function(t){return t.name===o.url}))[0],u=Math.max(0,r.responseStart-i),s=Math.max(u,c?(c.requestStart||c.startTime)-i:0),d=Math.max(s,c?c.responseEnd-i:0),f=Math.max(d,o.startTime-i);e={element:a(o.element),timeToFirstByte:u,resourceLoadDelay:s-u,resourceLoadDuration:d-s,elementRenderDelay:f-d,navigationEntry:r,lcpEntry:o},o.url&&(e.url=o.url),c&&(e.lcpResourceEntry=c)}}return Object.assign(t,{attribution:e})}(e);t(r)}),void 0)}(h),function(t){$((function(e){var n=function(t){var e={waitingDuration:0,cacheDuration:0,dnsDuration:0,connectionDuration:0,requestDuration:0};if(t.entries.length){var n=t.entries[0],r=n.activationStart||0,i=Math.max((n.workerStart||n.fetchStart)-r,0),a=Math.max(n.domainLookupStart-r,0),o=Math.max(n.connectStart-r,0),c=Math.max(n.connectEnd-r,0);e={waitingDuration:i,cacheDuration:a-i,dnsDuration:o-a,connectionDuration:c-o,requestDuration:t.value-c,navigationEntry:n}}return Object.assign(t,{attribution:e})}(e);t(n)}),void 0)}(h)}else console.warn("Server ID is not provided. Web Vitals tracking will not be initialized.");function h(e){var n=JSON.stringify({name:e.name,value:e.value,rating:e.rating,delta:e.delta,id:e.id});"DEBUG"===t?console.log("Debug mode enabled. Metric data:",n):navigator.sendBeacon(g,n)||fetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:n}).catch((function(t){return console.error("Fetch send failed:",t)})),!0===i&&gtag("event",e.name,{metric_value:e.value,metric_rating:e.rating,metric_delta:e.delta,metric_id:e.id}),!0===o&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"web_vitals",webVitalsData:{name:e.name,value:e.value,rating:e.rating,delta:e.delta,id:e.id,navigation_type:e.navigationType,attribution:e.attribution}}))}}})();