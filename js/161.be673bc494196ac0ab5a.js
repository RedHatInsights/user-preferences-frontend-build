/*! For license information please see 161.be673bc494196ac0ab5a.js.LICENSE.txt */
"use strict";(self.webpackChunkuser_preferences_frontend=self.webpackChunkuser_preferences_frontend||[]).push([[161],{8679:(e,r,t)=>{var o=t(21296),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},f={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function s(e){return o.isMemo(e)?f:a[e.$$typeof]||n}a[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[o.Memo]=f;var p=Object.defineProperty,i=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(r,t,o){if("string"!=typeof t){if(m){var n=l(t);n&&n!==m&&e(r,n,o)}var f=i(t);y&&(f=f.concat(y(t)));for(var a=s(r),b=s(t),d=0;d<f.length;++d){var $=f[d];if(!(c[$]||o&&o[$]||b&&b[$]||a&&a[$])){var S=u(t,$);try{p(r,$,S)}catch(e){}}}}return r}},96103:(e,r)=>{var t="function"==typeof Symbol&&Symbol.for,o=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,c=t?Symbol.for("react.fragment"):60107,f=t?Symbol.for("react.strict_mode"):60108,a=t?Symbol.for("react.profiler"):60114,s=t?Symbol.for("react.provider"):60109,p=t?Symbol.for("react.context"):60110,i=t?Symbol.for("react.async_mode"):60111,y=t?Symbol.for("react.concurrent_mode"):60111,u=t?Symbol.for("react.forward_ref"):60112,l=t?Symbol.for("react.suspense"):60113,m=t?Symbol.for("react.suspense_list"):60120,b=t?Symbol.for("react.memo"):60115,d=t?Symbol.for("react.lazy"):60116,$=t?Symbol.for("react.block"):60121,S=t?Symbol.for("react.fundamental"):60117,g=t?Symbol.for("react.responder"):60118,v=t?Symbol.for("react.scope"):60119;function O(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case o:switch(e=e.type){case i:case y:case c:case a:case f:case l:return e;default:switch(e=e&&e.$$typeof){case p:case u:case d:case b:case s:return e;default:return r}}case n:return r}}}function P(e){return O(e)===y}r.AsyncMode=i,r.ConcurrentMode=y,r.ContextConsumer=p,r.ContextProvider=s,r.Element=o,r.ForwardRef=u,r.Fragment=c,r.Lazy=d,r.Memo=b,r.Portal=n,r.Profiler=a,r.StrictMode=f,r.Suspense=l,r.isAsyncMode=function(e){return P(e)||O(e)===i},r.isConcurrentMode=P,r.isContextConsumer=function(e){return O(e)===p},r.isContextProvider=function(e){return O(e)===s},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},r.isForwardRef=function(e){return O(e)===u},r.isFragment=function(e){return O(e)===c},r.isLazy=function(e){return O(e)===d},r.isMemo=function(e){return O(e)===b},r.isPortal=function(e){return O(e)===n},r.isProfiler=function(e){return O(e)===a},r.isStrictMode=function(e){return O(e)===f},r.isSuspense=function(e){return O(e)===l},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===y||e===a||e===f||e===l||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===b||e.$$typeof===s||e.$$typeof===p||e.$$typeof===u||e.$$typeof===S||e.$$typeof===g||e.$$typeof===v||e.$$typeof===$)},r.typeOf=O},21296:(e,r,t)=>{e.exports=t(96103)},87462:(e,r,t)=>{function o(){return o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(this,arguments)}t.d(r,{Z:()=>o})},63366:(e,r,t)=>{function o(e,r){if(null==e)return{};var t,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}t.d(r,{Z:()=>o})}}]);