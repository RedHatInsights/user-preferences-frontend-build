(self.webpackChunkuser_preferences_frontend=self.webpackChunkuser_preferences_frontend||[]).push([[961],{77412:e=>{e.exports=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n&&!1!==r(e[t],t,e););return e}},44037:(e,r,t)=>{var n=t(98363),o=t(3674);e.exports=function(e,r){return e&&n(r,o(r),e)}},63886:(e,r,t)=>{var n=t(98363),o=t(81704);e.exports=function(e,r){return e&&n(r,o(r),e)}},85990:(e,r,t)=>{var n=t(46384),o=t(77412),c=t(34865),a=t(44037),u=t(63886),i=t(64626),s=t(278),f=t(18805),b=t(1911),l=t(58234),p=t(46904),j=t(64160),v=t(43824),y=t(29148),h=t(38517),d=t(1469),x=t(44144),m=t(56688),w=t(13218),A=t(72928),g=t(3674),T=t(81704),E="[object Arguments]",O="[object Function]",S="[object Object]",I={};I[E]=I["[object Array]"]=I["[object ArrayBuffer]"]=I["[object DataView]"]=I["[object Boolean]"]=I["[object Date]"]=I["[object Float32Array]"]=I["[object Float64Array]"]=I["[object Int8Array]"]=I["[object Int16Array]"]=I["[object Int32Array]"]=I["[object Map]"]=I["[object Number]"]=I[S]=I["[object RegExp]"]=I["[object Set]"]=I["[object String]"]=I["[object Symbol]"]=I["[object Uint8Array]"]=I["[object Uint8ClampedArray]"]=I["[object Uint16Array]"]=I["[object Uint32Array]"]=!0,I["[object Error]"]=I[O]=I["[object WeakMap]"]=!1,e.exports=function e(r,t,U,k,F,L){var M,B=1&t,C=2&t,D=4&t;if(U&&(M=F?U(r,k,F,L):U(r)),void 0!==M)return M;if(!w(r))return r;var _=d(r);if(_){if(M=v(r),!B)return s(r,M)}else{var N=j(r),P=N==O||"[object GeneratorFunction]"==N;if(x(r))return i(r,B);if(N==S||N==E||P&&!F){if(M=C||P?{}:h(r),!B)return C?b(r,u(M,r)):f(r,a(M,r))}else{if(!I[N])return F?r:{};M=y(r,N,B)}}L||(L=new n);var R=L.get(r);if(R)return R;L.set(r,M),A(r)?r.forEach((function(n){M.add(e(n,t,U,n,r,L))})):m(r)&&r.forEach((function(n,o){M.set(o,e(n,t,U,o,r,L))}));var V=_?void 0:(D?C?p:l:C?T:g)(r);return o(V||r,(function(n,o){V&&(n=r[o=n]),c(M,o,e(n,t,U,o,r,L))})),M}},25588:(e,r,t)=>{var n=t(64160),o=t(37005);e.exports=function(e){return o(e)&&"[object Map]"==n(e)}},29221:(e,r,t)=>{var n=t(64160),o=t(37005);e.exports=function(e){return o(e)&&"[object Set]"==n(e)}},14259:e=>{e.exports=function(e,r,t){var n=-1,o=e.length;r<0&&(r=-r>o?0:o+r),(t=t>o?o:t)<0&&(t+=o),o=r>t?0:t-r>>>0,r>>>=0;for(var c=Array(o);++n<o;)c[n]=e[n+r];return c}},57157:(e,r,t)=>{var n=t(74318);e.exports=function(e,r){var t=r?n(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}},93147:e=>{var r=/\w*$/;e.exports=function(e){var t=new e.constructor(e.source,r.exec(e));return t.lastIndex=e.lastIndex,t}},40419:(e,r,t)=>{var n=t(62705),o=n?n.prototype:void 0,c=o?o.valueOf:void 0;e.exports=function(e){return c?Object(c.call(e)):{}}},18805:(e,r,t)=>{var n=t(98363),o=t(99551);e.exports=function(e,r){return n(e,o(e),r)}},1911:(e,r,t)=>{var n=t(98363),o=t(92833);e.exports=function(e,r){return n(e,o(e),r)}},46904:(e,r,t)=>{var n=t(68866),o=t(92833),c=t(81704);e.exports=function(e){return n(e,c,o)}},92833:(e,r,t)=>{var n=t(62488),o=t(85924),c=t(99551),a=t(70479),u=Object.getOwnPropertySymbols?function(e){for(var r=[];e;)n(r,c(e)),e=o(e);return r}:a;e.exports=u},43824:e=>{var r=Object.prototype.hasOwnProperty;e.exports=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&r.call(e,"index")&&(n.index=e.index,n.input=e.input),n}},29148:(e,r,t)=>{var n=t(74318),o=t(57157),c=t(93147),a=t(40419),u=t(77133);e.exports=function(e,r,t){var i=e.constructor;switch(r){case"[object ArrayBuffer]":return n(e);case"[object Boolean]":case"[object Date]":return new i(+e);case"[object DataView]":return o(e,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return u(e,t);case"[object Map]":case"[object Set]":return new i;case"[object Number]":case"[object String]":return new i(e);case"[object RegExp]":return c(e);case"[object Symbol]":return a(e)}}},18446:(e,r,t)=>{var n=t(90939);e.exports=function(e,r){return n(e,r)}},56688:(e,r,t)=>{var n=t(25588),o=t(7518),c=t(31167),a=c&&c.isMap,u=a?o(a):n;e.exports=u},72928:(e,r,t)=>{var n=t(29221),o=t(7518),c=t(31167),a=c&&c.isSet,u=a?o(a):n;e.exports=u},34155:e=>{var r,t,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{t="function"==typeof clearTimeout?clearTimeout:c}catch(e){t=c}}();var u,i=[],s=!1,f=-1;function b(){s&&u&&(s=!1,u.length?i=u.concat(i):f=-1,i.length&&l())}function l(){if(!s){var e=a(b);s=!0;for(var r=i.length;r;){for(u=i,i=[];++f<r;)u&&u[f].run();f=-1,r=i.length}u=null,s=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===c||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{return t(e)}catch(r){try{return t.call(null,e)}catch(r){return t.call(this,e)}}}(e)}}function p(e,r){this.fun=e,this.array=r}function j(){}n.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];i.push(new p(e,r)),1!==i.length||s||a(l)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=j,n.addListener=j,n.once=j,n.off=j,n.removeListener=j,n.removeAllListeners=j,n.emit=j,n.prependListener=j,n.prependOnceListener=j,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}}]);