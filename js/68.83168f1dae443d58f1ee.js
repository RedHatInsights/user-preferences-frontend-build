(self.webpackChunkuser_preferences_frontend=self.webpackChunkuser_preferences_frontend||[]).push([[68],{34155:e=>{var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,f=[],a=!1,l=-1;function s(){a&&c&&(a=!1,c.length?f=c.concat(f):l=-1,f.length&&p())}function p(){if(!a){var e=u(s);a=!0;for(var t=f.length;t;){for(c=f,f=[];++l<t;)c&&c[l].run();l=-1,t=f.length}c=null,a=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function d(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];f.push(new y(e,t)),1!==f.length||a||u(p)},y.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},5068:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e){return null!==e&&"object"===n(e)&&e&&"function"==typeof e.then}r.r(t),r.d(t,{ActionType:()=>a,createPromise:()=>l,default:()=>s});var i=r(34155);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a={Pending:"PENDING",Fulfilled:"FULFILLED",Rejected:"REJECTED"};function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[a.Pending,a.Fulfilled,a.Rejected],r=e.promiseTypeSuffixes||t,n=void 0===e.promiseTypeDelimiter?"_":e.promiseTypeDelimiter;return function(e){var t=e.dispatch;return function(e){return function(i){var u,f;if(!i.payload)return e(i);var a=i.payload;if(o(a))u=a;else if(o(a.promise))u=a.promise,f=a.data;else{if("function"!=typeof a&&"function"!=typeof a.promise)return e(i);if(u=a.promise?a.promise():a(),f=a.promise?a.data:void 0,!o(u))return e(c({},i,{payload:u}))}var l,s,p=i.type,y=i.meta,d=(s=3,function(e){if(Array.isArray(e))return e}(l=r)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(l,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),h=d[0],m=d[1],v=d[2],b=function(e,t){return c({type:[p,t?v:m].join(n)},null==e?{}:{payload:e},{},void 0!==y?{meta:y}:{},{},t?{error:!0}:{})};return e(c({type:[p,h].join(n)},void 0!==f?{payload:f}:{},{},void 0!==y?{meta:y}:{})),u.then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=b(e,!1);return t(r),{value:e,action:r}}),(function(e){var r=b(e,!0);throw t(r),e}))}}}}function s(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).dispatch;return"function"==typeof e?l()({dispatch:e}):(i&&i.env,null)}}}]);
//# sourceMappingURL=../sourcemaps/68.adf447bcbd2336213c2fe1cd13b1d10c.js.map