(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[68],{5068:(t,e,r)=>{"use strict";r.r(e),r.d(e,{ActionType:()=>f,createPromise:()=>l,default:()=>p});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t){return null!==t&&"object"===(void 0===t?"undefined":n(t))&&t&&"function"==typeof t.then}var i=r(34155),a=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},f={Pending:"PENDING",Fulfilled:"FULFILLED",Rejected:"REJECTED"};function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=[f.Pending,f.Fulfilled,f.Rejected],r=t.promiseTypeSuffixes||e,n=t.promiseTypeDelimiter||"_";return function(t){var e=t.dispatch;return function(t){return function(i){var f=void 0,l=void 0;if(!i.payload)return t(i);var p=i.payload;if(o(p))f=p;else if(o(p.promise))f=p.promise,l=p.data;else{if("function"!=typeof p&&"function"!=typeof p.promise)return t(i);if(f=p.promise?p.promise():p(),l=p.promise?p.data:void 0,!o(f))return t(u({},i,{payload:f}))}var c=i.type,y=i.meta,d=a(r,3),s=d[0],v=d[1],m=d[2],h=function(t,e){return u({type:[c,e?m:v].join(n)},null==t?{}:{payload:t},void 0!==y?{meta:y}:{},e?{error:!0}:{})};return t(u({type:[c,s].join(n)},void 0!==l?{payload:l}:{},void 0!==y?{meta:y}:{})),f.then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=h(t,!1);return e(r),{value:t,action:r}}),(function(t){var r=h(t,!0);throw e(r),t}))}}}}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.dispatch;return"function"==typeof e?l()({dispatch:e}):(i&&i.env,null)}}}]);
//# sourceMappingURL=68.061d5848c866e4eff2d8.js.map