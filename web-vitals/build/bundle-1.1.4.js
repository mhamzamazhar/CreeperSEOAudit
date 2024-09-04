/*! For license information please see bundle-1.1.4.js.LICENSE.txt */
(()=>{"use strict";var t,e,n=function(){var t=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(t&&t.responseStart>0&&t.responseStart<performance.now())return t},r=function(t){if("loading"===document.readyState)return"loading";var e=n();if(e){if(t<e.domInteractive)return"loading";if(0===e.domContentLoadedEventStart||t<e.domContentLoadedEventStart)return"dom-interactive";if(0===e.domComplete||t<e.domComplete)return"dom-content-loaded"}return"complete"},i=function(t){var e=t.nodeName;return 1===t.nodeType?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},a=function(t,e){var n="";try{for(;t&&9!==t.nodeType;){var r=t,a=r.id?"#"+r.id:i(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(n.length+a.length>(e||100)-1)return n||a;if(n=n?a+">"+n:a,r.id)break;t=r.parentNode}}catch(t){}return n},o=-1,c=function(){return o},u=function(t){addEventListener("pageshow",(function(e){e.persisted&&(o=e.timeStamp,t(e))}),!0)},s=function(){var t=n();return t&&t.activationStart||0},f=function(t,e){var r=n(),i="navigate";return c()>=0?i="back-forward-cache":r&&(document.prerendering||s()>0?i="prerender":document.wasDiscarded?i="restore":r.type&&(i=r.type.replace(/_/g,"-"))),{name:t,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:i}},l=function(t,e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var r=new PerformanceObserver((function(t){Promise.resolve().then((function(){e(t.getEntries())}))}));return r.observe(Object.assign({type:t,buffered:!0},n||{})),r}}catch(t){}},d=function(t,e,n,r){var i,a;return function(o){e.value>=0&&(o||r)&&((a=e.value-(i||0))||void 0===i)&&(i=e.value,e.delta=a,e.rating=function(t,e){return t>e[1]?"poor":t>e[0]?"needs-improvement":"good"}(e.value,n),t(e))}},h=function(t){requestAnimationFrame((function(){return requestAnimationFrame((function(){return t()}))}))},p=function(t){document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&t()}))},v=function(t){var e=!1;return function(){e||(t(),e=!0)}},m=-1,g=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},y=function(t){"hidden"===document.visibilityState&&m>-1&&(m="visibilitychange"===t.type?t.timeStamp:0,b())},T=function(){addEventListener("visibilitychange",y,!0),addEventListener("prerenderingchange",y,!0)},b=function(){removeEventListener("visibilitychange",y,!0),removeEventListener("prerenderingchange",y,!0)},w=function(){return m<0&&(m=g(),T(),u((function(){setTimeout((function(){m=g(),T()}),0)}))),{get firstHiddenTime(){return m}}},E=function(t){document.prerendering?addEventListener("prerenderingchange",(function(){return t()}),!0):t()},S=[1800,3e3],L=function(t,e){e=e||{},E((function(){var n,r=w(),i=f("FCP"),a=l("paint",(function(t){t.forEach((function(t){"first-contentful-paint"===t.name&&(a.disconnect(),t.startTime<r.firstHiddenTime&&(i.value=Math.max(t.startTime-s(),0),i.entries.push(t),n(!0)))}))}));a&&(n=d(t,i,S,e.reportAllChanges),u((function(r){i=f("FCP"),n=d(t,i,S,e.reportAllChanges),h((function(){i.value=performance.now()-r.timeStamp,n(!0)}))})))}))},x=[.1,.25],C=0,M=1/0,k=0,D=function(t){t.forEach((function(t){t.interactionId&&(M=Math.min(M,t.interactionId),k=Math.max(k,t.interactionId),C=k?(k-M)/7+1:0)}))},O=function(){return t?C:performance.interactionCount||0},P=function(){"interactionCount"in performance||t||(t=l("event",D,{type:"event",buffered:!0,durationThreshold:0}))},I=[],j=new Map,_=0,F=[],A=function(t){if(F.forEach((function(e){return e(t)})),t.interactionId||"first-input"===t.entryType){var e=I[I.length-1],n=j.get(t.interactionId);if(n||I.length<10||t.duration>e.latency){if(n)t.duration>n.latency?(n.entries=[t],n.latency=t.duration):t.duration===n.latency&&t.startTime===n.entries[0].startTime&&n.entries.push(t);else{var r={id:t.interactionId,latency:t.duration,entries:[t]};j.set(r.id,r),I.push(r)}I.sort((function(t,e){return e.latency-t.latency})),I.length>10&&I.splice(10).forEach((function(t){return j.delete(t.id)}))}}},N=function(t){var e=self.requestIdleCallback||self.setTimeout,n=-1;return t=v(t),"hidden"===document.visibilityState?t():(n=e(t),p(t)),n},B=[200,500],G=[],R=[],q=0,V=new WeakMap,W=new Map,z=-1,H=function(t){G=G.concat(t),U()},U=function(){z<0&&(z=N(Y))},Y=function(){W.size>10&&W.forEach((function(t,e){j.has(e)||W.delete(e)}));var t=I.map((function(t){return V.get(t.entries[0])})),e=R.length-50;R=R.filter((function(n,r){return r>=e||t.includes(n)}));for(var n=new Set,r=0;r<R.length;r++){var i=R[r];J(i.startTime,i.processingEnd).forEach((function(t){n.add(t)}))}var a=G.length-1-50;G=G.filter((function(t,e){return t.startTime>q&&e>a||n.has(t)})),z=-1};F.push((function(t){t.interactionId&&t.target&&!W.has(t.interactionId)&&W.set(t.interactionId,t.target)}),(function(t){var e,n=t.startTime+t.duration;q=Math.max(q,t.processingEnd);for(var r=R.length-1;r>=0;r--){var i=R[r];if(Math.abs(n-i.renderTime)<=8){(e=i).startTime=Math.min(t.startTime,e.startTime),e.processingStart=Math.min(t.processingStart,e.processingStart),e.processingEnd=Math.max(t.processingEnd,e.processingEnd),e.entries.push(t);break}}e||(e={startTime:t.startTime,processingStart:t.processingStart,processingEnd:t.processingEnd,renderTime:n,entries:[t]},R.push(e)),(t.interactionId||"first-input"===t.entryType)&&V.set(t,e),U()}));var J=function(t,e){for(var n,r=[],i=0;n=G[i];i++)if(!(n.startTime+n.duration<t)){if(n.startTime>e)break;r.push(n)}return r},K=[2500,4e3],Q={},X=[800,1800],Z=function t(e){document.prerendering?E((function(){return t(e)})):"complete"!==document.readyState?addEventListener("load",(function(){return t(e)}),!0):setTimeout(e,0)},$=function(t,e){e=e||{};var r=f("TTFB"),i=d(t,r,X,e.reportAllChanges);Z((function(){var a=n();a&&(r.value=Math.max(a.responseStart-s(),0),r.entries=[a],i(!0),u((function(){r=f("TTFB",0),(i=d(t,r,X,e.reportAllChanges))(!0)})))}))};function tt(t){return tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tt(t)}function et(){et=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var a=e&&e.prototype instanceof g?e:g,o=Object.create(a.prototype),c=new O(r||[]);return i(o,"_invoke",{value:C(t,n,c)}),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d="suspendedStart",h="suspendedYield",p="executing",v="completed",m={};function g(){}function y(){}function T(){}var b={};s(b,o,(function(){return this}));var w=Object.getPrototypeOf,E=w&&w(w(P([])));E&&E!==n&&r.call(E,o)&&(b=E);var S=T.prototype=g.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(i,a,o,c){var u=l(t[i],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==tt(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,o,c)}),(function(t){n("throw",t,o,c)})):e.resolve(f).then((function(t){s.value=t,o(s)}),(function(t){return n("throw",t,o,c)}))}c(u.arg)}var a;i(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,i){n(t,r,e,i)}))}return a=a?a.then(i,i):i()}})}function C(e,n,r){var i=d;return function(a,o){if(i===p)throw Error("Generator is already running");if(i===v){if("throw"===a)throw o;return{value:t,done:!0}}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var u=M(c,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===d)throw i=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=p;var s=l(e,n,r);if("normal"===s.type){if(i=r.done?v:h,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(i=v,r.method="throw",r.arg=s.arg)}}}function M(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,M(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=l(i,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,m;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(e){if(e||""===e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(tt(e)+" is not iterable")}return y.prototype=T,i(S,"constructor",{value:T,configurable:!0}),i(T,"constructor",{value:y,configurable:!0}),y.displayName=s(T,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,T):(t.__proto__=T,s(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},L(x.prototype),s(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new x(f(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},L(S),s(S,u,"Generator"),s(S,o,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=P,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return c.type="throw",c.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(u&&s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),D(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;D(n)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}function nt(t,e,n,r,i,a,o){try{var c=t[a](o),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,i)}new Date,window.initializeWebVitalsTracking=function(t,i,o){if(t){var m="https://app.creeperseoaudit.com/api/cvw-metrics";!function(t){!function(t,e){e=e||{},L(v((function(){var n,r=f("CLS",0),i=0,a=[],o=function(t){t.forEach((function(t){if(!t.hadRecentInput){var e=a[0],n=a[a.length-1];i&&t.startTime-n.startTime<1e3&&t.startTime-e.startTime<5e3?(i+=t.value,a.push(t)):(i=t.value,a=[t])}})),i>r.value&&(r.value=i,r.entries=a,n())},c=l("layout-shift",o);c&&(n=d(t,r,x,e.reportAllChanges),p((function(){o(c.takeRecords()),n(!0)})),u((function(){i=0,r=f("CLS",0),n=d(t,r,x,e.reportAllChanges),h((function(){return n()}))})),setTimeout(n,0))})))}((function(e){var n=function(t){var e,n={};if(t.entries.length){var i=t.entries.reduce((function(t,e){return t&&t.value>e.value?t:e}));if(i&&i.sources&&i.sources.length){var o=(e=i.sources).find((function(t){return t.node&&1===t.node.nodeType}))||e[0];o&&(n={largestShiftTarget:a(o.node),largestShiftTime:i.startTime,largestShiftValue:i.value,largestShiftSource:o,largestShiftEntry:i,loadState:r(i.startTime)})}}return Object.assign(t,{attribution:n})}(e);t(n)}),void 0)}(g),function(t){L((function(e){var i=function(t){var e={timeToFirstByte:0,firstByteToFCP:t.value,loadState:r(c())};if(t.entries.length){var i=n(),a=t.entries[t.entries.length-1];if(i){var o=i.activationStart||0,u=Math.max(0,i.responseStart-o);e={timeToFirstByte:u,firstByteToFCP:t.value-u,loadState:r(t.entries[0].startTime),navigationEntry:i,fcpEntry:a}}}return Object.assign(t,{attribution:e})}(e);t(i)}),void 0)}(g),function(t){e||(e=l("long-animation-frame",H)),function(t,e){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(e=e||{},E((function(){var n;P();var r,i=f("INP"),a=function(t){N((function(){t.forEach(A);var e=function(){var t=Math.min(I.length-1,Math.floor((O()-_)/50));return I[t]}();e&&e.latency!==i.value&&(i.value=e.latency,i.entries=e.entries,r())}))},o=l("event",a,{durationThreshold:null!==(n=e.durationThreshold)&&void 0!==n?n:40});r=d(t,i,B,e.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),p((function(){a(o.takeRecords()),r(!0)})),u((function(){_=O(),I.length=0,j.clear(),i=f("INP"),r=d(t,i,B,e.reportAllChanges)})))})))}((function(e){var n=function(t){var e=t.entries[0],n=V.get(e),i=e.processingStart,o=n.processingEnd,c=n.entries.sort((function(t,e){return t.processingStart-e.processingStart})),u=J(e.startTime,o),s=t.entries.find((function(t){return t.target})),f=s&&s.target||W.get(e.interactionId),l=[e.startTime+e.duration,o].concat(u.map((function(t){return t.startTime+t.duration}))),d=Math.max.apply(Math,l),h={interactionTarget:a(f),interactionTargetElement:f,interactionType:e.name.startsWith("key")?"keyboard":"pointer",interactionTime:e.startTime,nextPaintTime:d,processedEventEntries:c,longAnimationFrameEntries:u,inputDelay:i-e.startTime,processingDuration:o-i,presentationDelay:Math.max(d-o,0),loadState:r(e.startTime)};return Object.assign(t,{attribution:h})}(e);t(n)}),void 0)}(g),function(t){!function(t,e){e=e||{},E((function(){var n,r=w(),i=f("LCP"),a=function(t){e.reportAllChanges||(t=t.slice(-1)),t.forEach((function(t){t.startTime<r.firstHiddenTime&&(i.value=Math.max(t.startTime-s(),0),i.entries=[t],n())}))},o=l("largest-contentful-paint",a);if(o){n=d(t,i,K,e.reportAllChanges);var c=v((function(){Q[i.id]||(a(o.takeRecords()),o.disconnect(),Q[i.id]=!0,n(!0))}));["keydown","click"].forEach((function(t){addEventListener(t,(function(){return N(c)}),!0)})),p(c),u((function(r){i=f("LCP"),n=d(t,i,K,e.reportAllChanges),h((function(){i.value=performance.now()-r.timeStamp,Q[i.id]=!0,n(!0)}))}))}}))}((function(e){var r=function(t){var e={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:t.value};if(t.entries.length){var r=n();if(r){var i=r.activationStart||0,o=t.entries[t.entries.length-1],c=o.url&&performance.getEntriesByType("resource").filter((function(t){return t.name===o.url}))[0],u=Math.max(0,r.responseStart-i),s=Math.max(u,c?(c.requestStart||c.startTime)-i:0),f=Math.max(s,c?c.responseEnd-i:0),l=Math.max(f,o.startTime-i);e={element:a(o.element),timeToFirstByte:u,resourceLoadDelay:s-u,resourceLoadDuration:f-s,elementRenderDelay:l-f,navigationEntry:r,lcpEntry:o},o.url&&(e.url=o.url),c&&(e.lcpResourceEntry=c)}}return Object.assign(t,{attribution:e})}(e);t(r)}),void 0)}(g),function(t){$((function(e){var n=function(t){var e={waitingDuration:0,cacheDuration:0,dnsDuration:0,connectionDuration:0,requestDuration:0};if(t.entries.length){var n=t.entries[0],r=n.activationStart||0,i=Math.max((n.workerStart||n.fetchStart)-r,0),a=Math.max(n.domainLookupStart-r,0),o=Math.max(n.connectStart-r,0),c=Math.max(n.connectEnd-r,0);e={waitingDuration:i,cacheDuration:a-i,dnsDuration:o-a,connectionDuration:c-o,requestDuration:t.value-c,navigationEntry:n}}return Object.assign(t,{attribution:e})}(e);t(n)}),void 0)}(g)}else console.warn("Server ID is not provided. Web Vitals tracking will not be initialized.");function g(t){return y.apply(this,arguments)}function y(){return y=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(t){nt(a,r,i,o,c,"next",t)}function c(t){nt(a,r,i,o,c,"throw",t)}o(void 0)}))}}(et().mark((function e(n){var r,a;return et().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=window.location.href,a=JSON.stringify({name:n.name,value:n.value,rating:n.rating,delta:n.delta,id:n.id,attribution:n.attribution,projectId:t,pageURL:r}),!0===i&&gtag("event",n.name,{metric_value:n.value,metric_rating:n.rating,value:n.delta,metric_id:n.id}),!0===o&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"web_vitals",webVitalsData:{name:n.name,value:n.value,rating:n.rating,delta:n.delta,id:n.id,navigation_type:n.navigationType,attribution:n.attribution}})),"DEBUG"!==t){e.next=8;break}console.log("Debug mode enabled. Metric data:",a),e.next=12;break;case 8:return e.next=10,fetch(m,{method:"POST",headers:{"Content-Type":"application/json"},body:a}).catch((function(t){return console.error("Fetch send failed:",t)}));case 10:e.sent,console.log("SOS CVW Data Sent");case 12:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}}})();