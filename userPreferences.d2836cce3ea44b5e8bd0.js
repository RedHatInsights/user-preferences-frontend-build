var userPreferences;(()=>{"use strict";var e,r,t,n,o,a,i,d,c,l,s,f,u,p,h,v,m,y,b,g,E,_,w,O,P,j={88933:(e,r,t)=>{var n={"./RootApp":()=>Promise.all([t.e(410),t.e(252),t.e(697),t.e(906),t.e(362),t.e(665),t.e(659),t.e(865),t.e(704),t.e(592),t.e(396),t.e(374)]).then((()=>()=>t(41374)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n=t.S.default,o="default";if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>o,init:()=>a})}},x={};function k(e){var r=x[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var t=x[e]={id:e,loaded:!1,exports:{}};try{var n={id:e,module:t,factory:j[e],require:k};k.i.forEach((function(e){e(n)})),t=n.module,n.factory.call(t.exports,t,t.exports,n.require)}catch(e){throw t.error=e,e}return t.loaded=!0,t.exports}k.m=j,k.c=x,k.i=[],e=[],k.O=(r,t,n,o)=>{if(!t){var a=1/0;for(c=0;c<e.length;c++){for(var[t,n,o]=e[c],i=!0,d=0;d<t.length;d++)(!1&o||a>=o)&&Object.keys(k.O).every((e=>k.O[e](t[d])))?t.splice(d--,1):(i=!1,o<a&&(a=o));i&&(e.splice(c--,1),r=n())}return r}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[t,n,o]},k.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return k.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,k.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);k.r(o);var a={};r=r||[null,t({}),t([]),t(t)];for(var i=2&n&&e;"object"==typeof i&&!~r.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,k.d(o,a),o},k.d=(e,r)=>{for(var t in r)k.o(r,t)&&!k.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},k.f={},k.e=e=>Promise.all(Object.keys(k.f).reduce(((r,t)=>(k.f[t](e,r),r)),[])),k.u=e=>"js/"+({252:"rhcsVendor",410:"pfVendor",542:"Email",741:"Notification",880:"reactvendor"}[e]||e)+"."+{68:"061d5848c866e4eff2d8",132:"0e4bdec0c77ee32c4a53",155:"e964eeaaddb0b4018c8f",252:"2c7e362314a161249509",338:"f719b3d1e3eec7ec8bf3",362:"6e75fba1d372b67c4447",374:"0d90399faa35c3568795",396:"b05379e10c5b5fd8463d",407:"bca6b58feab24e513488",410:"bfecb961a5d243705e44",418:"d5c6119802248803812d",519:"a03c55064dfd239e3b63",542:"5c63bf903e116c5d60d5",544:"bf86c29682fcd8b59de6",592:"a509ccb2e4d2cf7ee617",627:"4ae1909603d965c276fc",636:"e33aaf18484417a1b954",659:"f8470997129e27b00410",665:"28e46aa3fef1e3191ef3",669:"e96248c5c60f0454da46",679:"334982736e0faa4b7cbe",697:"927b4557c18ef49773d8",703:"a68377107c2f7da92adc",704:"e73e7d280951739089c2",741:"e8a153b06c5611dd5334",788:"a11e0ec72cd426a78cc9",840:"13931e12d79f3c59ed4d",864:"528175142948a465b67d",865:"51d033576eb4b2c98673",880:"2d9433240f2011ed675e",890:"923d5c743851e712e838",906:"4754cee9919ef4be1fb9"}[e]+".js",k.hu=e=>e+"."+k.h()+".hot-update.js",k.miniCssF=e=>{},k.hmrF=()=>"userPreferences."+k.h()+".hot-update.json",k.h=()=>"c579a5fad2ba7e92692c",k.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),k.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),k.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n={},o="insights-frontend-starter-app:",k.l=(e,r,t,a)=>{if(n[e])n[e].push(r);else{var i,d;if(void 0!==t)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var s=c[l];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+t){i=s;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,k.nc&&i.setAttribute("nonce",k.nc),i.setAttribute("data-webpack",o+t),i.src=e),n[e]=[r];var f=(r,t)=>{i.onerror=i.onload=null,clearTimeout(u);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(t))),r)return r(t)},u=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),d&&document.head.appendChild(i)}},k.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},k.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{k.S={};var e={},r={};k.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];k.o(k.S,t)||(k.S[t]={});var a=k.S[t],i="insights-frontend-starter-app",d=(e,r,t,n)=>{var o=a[e]=a[e]||{},d=o[r];(!d||!d.loaded&&(!n!=!d.eager?n:i>d.from))&&(o[r]={get:t,from:i,eager:!!n})},c=[];switch(t){case"default":d("@patternfly/react-core","4.101.3",(()=>Promise.all([k.e(410),k.e(697),k.e(362),k.e(519),k.e(865),k.e(704)]).then((()=>()=>k(62308))))),d("axios","0.21.1",(()=>Promise.all([k.e(155),k.e(669)]).then((()=>()=>k(9669))))),d("react-dom","17.0.1",(()=>Promise.all([k.e(880),k.e(418),k.e(840),k.e(865)]).then((()=>()=>k(73935))))),d("react-redux","7.2.2",(()=>Promise.all([k.e(864),k.e(697),k.e(679),k.e(906),k.e(703),k.e(865),k.e(704),k.e(592)]).then((()=>()=>k(37703))))),d("react-router-dom","5.2.0",(()=>Promise.all([k.e(864),k.e(697),k.e(679),k.e(906),k.e(788),k.e(665),k.e(338),k.e(865)]).then((()=>()=>k(23338))))),d("react","17.0.1",(()=>Promise.all([k.e(880),k.e(418)]).then((()=>()=>k(67294))))),d("redux-promise-middleware","6.1.2",(()=>Promise.all([k.e(155),k.e(68)]).then((()=>()=>k(5068))))),d("redux","4.0.5",(()=>k.e(890).then((()=>()=>k(14890)))))}return e[t]=c.length?Promise.all(c).then((()=>e[t]=1)):1}}})(),(()=>{var e,r,t,n,o={},a=k.c,i=[],d=[],c="idle";function l(e){c=e;for(var r=0;r<d.length;r++)d[r].call(null,e)}function s(e){if(0===r.length)return e();var t=r;return r=[],Promise.all(t).then((function(){return s(e)}))}function f(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return l("check"),k.hmrM().then((function(n){if(!n)return l(h()?"ready":"idle"),null;l("prepare");var o=[];return r=[],t=[],Promise.all(Object.keys(k.hmrC).reduce((function(e,r){return k.hmrC[r](n.c,n.r,n.m,e,t,o),e}),[])).then((function(){return s((function(){return e?p(e):(l("ready"),o)}))}))}))}function u(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):p(e)}function p(e){e=e||{},h();var r=t.map((function(r){return r(e)}));t=void 0;var o,a=r.map((function(e){return e.error})).filter(Boolean);if(a.length>0)return l("abort"),Promise.resolve().then((function(){throw a[0]}));l("dispose"),r.forEach((function(e){e.dispose&&e.dispose()})),l("apply");var i=function(e){o||(o=e)},d=[];return r.forEach((function(e){if(e.apply){var r=e.apply(i);if(r)for(var t=0;t<r.length;t++)d.push(r[t])}})),o?(l("fail"),Promise.resolve().then((function(){throw o}))):n?p(e).then((function(e){return d.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):(l("idle"),Promise.resolve(d))}function h(){if(n)return t||(t=[]),Object.keys(k.hmrI).forEach((function(e){n.forEach((function(r){k.hmrI[e](r,t)}))})),n=void 0,!0}k.hmrD=o,k.i.push((function(p){var h,v,m,y=p.module,b=function(t,n){var o=a[n];if(!o)return t;var d=function(r){if(o.hot.active){if(a[r]){var d=a[r].parents;-1===d.indexOf(n)&&d.push(n)}else i=[n],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+n),i=[];return t(r)},f=function(e){return{configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(r){t[e]=r}}};for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&"e"!==u&&Object.defineProperty(d,u,f(u));return d.e=function(e){return function(e){switch(c){case"ready":return l("prepare"),r.push(e),s((function(){l("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(t.e(e))},d}(p.require,p.id);y.hot=(h=p.id,v=y,m={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:e!==h,_requireSelf:function(){i=v.parents.slice(),e=h,k(h)},active:!0,accept:function(e,r,t){if(void 0===e)m._selfAccepted=!0;else if("function"==typeof e)m._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)m._acceptedDependencies[e[n]]=r||function(){},m._acceptedErrorHandlers[e[n]]=t;else m._acceptedDependencies[e]=r||function(){},m._acceptedErrorHandlers[e]=t},decline:function(e){if(void 0===e)m._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)m._declinedDependencies[e[r]]=!0;else m._declinedDependencies[e]=!0},dispose:function(e){m._disposeHandlers.push(e)},addDisposeHandler:function(e){m._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=m._disposeHandlers.indexOf(e);r>=0&&m._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":t=[],Object.keys(k.hmrI).forEach((function(e){k.hmrI[e](h,t)})),l("ready");break;case"ready":Object.keys(k.hmrI).forEach((function(e){k.hmrI[e](h,t)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(h)}},check:f,apply:u,status:function(e){if(!e)return c;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var r=d.indexOf(e);r>=0&&d.splice(r,1)},data:o[h]},e=void 0,m),y.parents=i,y.children=[],i=[],p.require=b})),k.hmrC={},k.hmrI={}})(),k.p="/beta/apps/user-preferences/",a=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},i=(e,r)=>{e=a(e),r=a(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var n=e[t],o=(typeof n)[0];if(t>=r.length)return"u"==o;var i=r[t],d=(typeof i)[0];if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;t++}},d=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(i=e[o]))[0]?"-":(n>0?".":"")+(n=2,i);return t}var a=[];for(o=1;o<e.length;o++){var i=e[o];a.push(0===i?"not("+c()+")":1===i?"("+c()+" || "+c()+")":2===i?a.pop()+" "+a.pop():d(i))}return c();function c(){return a.pop().replace(/^\((.+)\)$/,"$1")}},c=(e,r)=>{if(0 in e){r=a(r);var t=e[0],n=t<0;n&&(t=-t-1);for(var o=0,i=1,d=!0;;i++,o++){var l,s,f=i<e.length?(typeof e[i])[0]:"";if(o>=r.length||"o"==(s=(typeof(l=r[o]))[0]))return!d||("u"==f?i>t&&!n:""==f!=n);if("u"==s){if(!d||"u"!=f)return!1}else if(d)if(f==s)if(i<=t){if(l!=e[i])return!1}else{if(n?l>e[i]:l<e[i])return!1;l!=e[i]&&(d=!1)}else if("s"!=f&&"n"!=f){if(n||i<=t)return!1;d=!1,i--}else{if(i<=t||s<f!=n)return!1;d=!1}else"s"!=f&&"n"!=f&&(d=!1,i--)}}var u=[],p=u.pop.bind(u);for(o=1;o<e.length;o++){var h=e[o];u.push(1==h?p()|p():2==h?p()&p():h?c(h,r):!p())}return!!p()},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&i(e,r)?r:e),0)},s=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+d(t)+")",f=(e,r,t,n)=>{var o=l(e,t);return c(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(s(t,o,n)),p(e[t][o])},u=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!c(t,r)||e&&!i(e,r)?e:r),0))&&n[r]},p=e=>(e.loaded=1,e.get()),v=(h=e=>function(r,t,n,o){var a=k.I(r);return a&&a.then?a.then(e.bind(e,r,k.S[r],t,n,o)):e(r,k.S[r],t,n,o)})(((e,r,t,n,o)=>r&&k.o(r,t)?f(r,0,t,n):o())),m=h(((e,r,t,n,o)=>{var a=r&&k.o(r,t)&&u(r,t,n);return a?p(a):o()})),y={},b={77865:()=>v("default","react",[1,17,0,1],(()=>Promise.all([k.e(880),k.e(418)]).then((()=>()=>k(67294))))),21704:()=>v("default","react-dom",[1,17,0,1],(()=>Promise.all([k.e(880),k.e(418),k.e(840)]).then((()=>()=>k(73935))))),35592:()=>m("default","redux",[1,4,0,5],(()=>k.e(890).then((()=>()=>k(14890))))),334:()=>m("default","react-router-dom",[1,5,2,0],(()=>Promise.all([k.e(864),k.e(679),k.e(788),k.e(338)]).then((()=>()=>k(23338))))),57283:()=>m("default","redux-promise-middleware",[1,6,1,2],(()=>Promise.all([k.e(155),k.e(68)]).then((()=>()=>k(5068))))),61084:()=>m("default","react-redux",[1,7,2,2],(()=>Promise.all([k.e(864),k.e(679),k.e(703)]).then((()=>()=>k(37703))))),78991:()=>m("default","axios",[2,0,21,1],(()=>k.e(669).then((()=>()=>k(9669))))),96315:()=>m("default","@patternfly/react-core",[4,4,101,3],(()=>Promise.all([k.e(410),k.e(519)]).then((()=>()=>k(62308)))))},g={396:[334,57283,61084],407:[78991,96315],592:[35592],704:[21704],865:[77865]},k.f.consumes=(e,r)=>{k.o(g,e)&&g[e].forEach((e=>{if(k.o(y,e))return r.push(y[e]);var t=r=>{y[e]=0,k.m[e]=t=>{delete k.c[e],t.exports=r()}},n=r=>{delete y[e],k.m[e]=t=>{throw delete k.c[e],r}};try{var o=b[e]();o.then?r.push(y[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},E=(e,r,t,n)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),d=a&&a.target&&a.target.href||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=d,o.parentNode.removeChild(o),n(c)}},o.href=r,document.head.appendChild(o),o},_=(e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===r)return i}},w=[],O=[],P=e=>({dispose:()=>{for(var e=0;e<w.length;e++){var r=w[e];r.parentNode&&r.parentNode.removeChild(r)}w.length=0},apply:()=>{for(var e=0;e<O.length;e++)O[e].rel="stylesheet";O.length=0}}),k.hmrC.miniCss=(e,r,t,n,o,a)=>{o.push(P),e.forEach((e=>{var r=k.miniCssF(e),t=k.p+r;const o=_(r,t);o&&n.push(new Promise(((r,n)=>{var a=E(e,t,(()=>{a.as="style",a.rel="preload",r()}),n);w.push(o),O.push(a)})))}))},(()=>{var e={317:0,677:0};k.f.j=(r,t)=>{var n=k.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(592|677|704|865)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=k.p+k.u(r),i=new Error;k.l(a,(t=>{if(k.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r,t,n,o,a={};function i(e){return new Promise(((r,t)=>{a[e]=r;var n=k.p+k.hu(e),o=new Error;k.l(n,(r=>{if(a[e]){a[e]=void 0;var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,t(o)}}))}))}function d(a){function i(e){for(var r=[e],t={},n=r.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),a=o.id,i=o.chain,c=k.c[a];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(c.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var l=0;l<c.parents.length;l++){var s=c.parents[l],f=k.c[s];if(f){if(f.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([s]),moduleId:a,parentId:s};-1===r.indexOf(s)&&(f.hot._acceptedDependencies[a]?(t[s]||(t[s]=[]),d(t[s],[a])):(delete t[s],r.push(s),n.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:t}}function d(e,r){for(var t=0;t<r.length;t++){var n=r[t];-1===e.indexOf(n)&&e.push(n)}}k.f&&delete k.f.jsonpHmr,r=void 0;var c={},l=[],s={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var u in t)if(k.o(t,u)){var p,h=t[u],v=!1,m=!1,y=!1,b="";switch((p=h?i(u):{type:"disposed",moduleId:u}).chain&&(b="\nUpdate propagation: "+p.chain.join(" -> ")),p.type){case"self-declined":a.onDeclined&&a.onDeclined(p),a.ignoreDeclined||(v=new Error("Aborted because of self decline: "+p.moduleId+b));break;case"declined":a.onDeclined&&a.onDeclined(p),a.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+p.moduleId+" in "+p.parentId+b));break;case"unaccepted":a.onUnaccepted&&a.onUnaccepted(p),a.ignoreUnaccepted||(v=new Error("Aborted because "+u+" is not accepted"+b));break;case"accepted":a.onAccepted&&a.onAccepted(p),m=!0;break;case"disposed":a.onDisposed&&a.onDisposed(p),y=!0;break;default:throw new Error("Unexception type "+p.type)}if(v)return{error:v};if(m)for(u in s[u]=h,d(l,p.outdatedModules),p.outdatedDependencies)k.o(p.outdatedDependencies,u)&&(c[u]||(c[u]=[]),d(c[u],p.outdatedDependencies[u]));y&&(d(l,[p.moduleId]),s[u]=f)}t=void 0;for(var g,E=[],_=0;_<l.length;_++){var w=l[_],O=k.c[w];O&&O.hot._selfAccepted&&s[w]!==f&&!O.hot._selfInvalidated&&E.push({module:w,require:O.hot._requireSelf,errorHandler:O.hot._selfAccepted})}return{dispose:function(){var r;n.forEach((function(r){delete e[r]})),n=void 0;for(var t,o=l.slice();o.length>0;){var a=o.pop(),i=k.c[a];if(i){var d={},s=i.hot._disposeHandlers;for(_=0;_<s.length;_++)s[_].call(null,d);for(k.hmrD[a]=d,i.hot.active=!1,delete k.c[a],delete c[a],_=0;_<i.children.length;_++){var f=k.c[i.children[_]];f&&(r=f.parents.indexOf(a))>=0&&f.parents.splice(r,1)}}}for(var u in c)if(k.o(c,u)&&(i=k.c[u]))for(g=c[u],_=0;_<g.length;_++)t=g[_],(r=i.children.indexOf(t))>=0&&i.children.splice(r,1)},apply:function(e){for(var r in s)k.o(s,r)&&(k.m[r]=s[r]);for(var t=0;t<o.length;t++)o[t](k);for(var n in c)if(k.o(c,n)){var i=k.c[n];if(i){g=c[n];for(var d=[],f=[],u=[],p=0;p<g.length;p++){var h=g[p],v=i.hot._acceptedDependencies[h],m=i.hot._acceptedErrorHandlers[h];if(v){if(-1!==d.indexOf(v))continue;d.push(v),f.push(m),u.push(h)}}for(var y=0;y<d.length;y++)try{d[y].call(null,g)}catch(r){if("function"==typeof f[y])try{f[y](r,{moduleId:n,dependencyId:u[y]})}catch(t){a.onErrored&&a.onErrored({type:"accept-error-handler-errored",moduleId:n,dependencyId:u[y],error:t,originalError:r}),a.ignoreErrored||(e(t),e(r))}else a.onErrored&&a.onErrored({type:"accept-errored",moduleId:n,dependencyId:u[y],error:r}),a.ignoreErrored||e(r)}}}for(var b=0;b<E.length;b++){var _=E[b],w=_.module;try{_.require(w)}catch(r){if("function"==typeof _.errorHandler)try{_.errorHandler(r,{moduleId:w,module:k.c[w]})}catch(t){a.onErrored&&a.onErrored({type:"self-accept-error-handler-errored",moduleId:w,error:t,originalError:r}),a.ignoreErrored||(e(t),e(r))}else a.onErrored&&a.onErrored({type:"self-accept-errored",moduleId:w,error:r}),a.ignoreErrored||e(r)}}return l}}}self.webpackHotUpdateinsights_frontend_starter_app=(e,r,n)=>{for(var i in r)k.o(r,i)&&(t[i]=r[i]);n&&o.push(n),a[e]&&(a[e](),a[e]=void 0)},k.hmrI.jsonp=function(e,r){t||(t={},o=[],n=[],r.push(d)),k.o(t,e)||(t[e]=k.m[e])},k.hmrC.jsonp=function(a,c,l,s,f,u){f.push(d),r={},n=c,t=l.reduce((function(e,r){return e[r]=!1,e}),{}),o=[],a.forEach((function(t){k.o(e,t)&&void 0!==e[t]&&(s.push(i(t)),r[t]=!0)})),k.f&&(k.f.jsonpHmr=function(t,n){r&&!k.o(r,t)&&k.o(e,t)&&void 0!==e[t]&&(n.push(i(t)),r[t]=!0)})},k.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(k.p+k.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},k.O.j=r=>0===e[r];var c=(r,t)=>{var n,o,[a,i,d]=t,c=0;for(n in i)k.o(i,n)&&(k.m[n]=i[n]);for(d&&d(k),r&&r(t);c<a.length;c++)o=a[c],k.o(e,o)&&e[o]&&e[o][0](),e[a[c]]=0;k.O()},l=self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[];l.forEach(c.bind(null,0)),l.push=c.bind(null,l.push.bind(l))})();var I=k.O(void 0,[677],(()=>k(88933)));I=k.O(I),userPreferences=I})();
//# sourceMappingURL=userPreferences.d2836cce3ea44b5e8bd0.js.map