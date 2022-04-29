var userPreferences;(()=>{"use strict";var e,r,t,n,o,a,i,l,s,u,d,f,c,p,h,m,v,g,b,y,w,P={88933:(e,r,t)=>{var n={"./RootApp":()=>Promise.all([t.e(968),t.e(583),t.e(939),t.e(548),t.e(865),t.e(704),t.e(334),t.e(283),t.e(715)]).then((()=>()=>t(28412)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n=t.S.default,o="default";if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[o]=e,t.I(o,r)}};t.d(r,{get:()=>o,init:()=>a})}},j={};function E(e){var r=j[e];if(void 0!==r)return r.exports;var t=j[e]={id:e,loaded:!1,exports:{}};return P[e].call(t.exports,t,t.exports,E),t.loaded=!0,t.exports}E.m=P,E.c=j,E.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return E.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,E.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);E.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,E.d(o,a),o},E.d=(e,r)=>{for(var t in r)E.o(r,t)&&!E.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},E.f={},E.e=e=>Promise.all(Object.keys(E.f).reduce(((r,t)=>(E.f[t](e,r),r)),[])),E.u=e=>"js/"+({542:"Email",741:"Notification"}[e]||e)+".1651229810067."+E.h()+".js",E.miniCssF=e=>"css/"+({542:"Email",741:"Notification"}[e]||e)+"."+{542:"2409b39cdcbc40f5642e",715:"2a5b45eff7ac357d2a08",741:"b6a7c3a78b2516fa3100"}[e]+".css",E.h=()=>"c3c746b479a84bbdddc8",E.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),E.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),E.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="insights-frontend-starter-app:",E.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,l;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,E.nc&&i.setAttribute("nonce",E.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var f=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},E.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},E.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{E.S={};var e={},r={};E.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];E.o(E.S,t)||(E.S[t]={});var a=E.S[t],i="insights-frontend-starter-app",l=(e,r,t,n)=>{var o=a[e]=a[e]||{},l=o[r];(!l||!l.loaded&&(!n!=!l.eager?n:i>l.from))&&(o[r]={get:t,from:i,eager:!!n})},s=[];return"default"===t&&(l("@patternfly/react-core","4.162.3",(()=>Promise.all([E.e(968),E.e(985),E.e(583),E.e(410),E.e(865),E.e(704),E.e(281)]).then((()=>()=>E(82410))))),l("@patternfly/react-icons","4.26.4",(()=>Promise.all([E.e(968),E.e(549),E.e(865),E.e(476)]).then((()=>()=>E(27549))))),l("@scalprum/react-core","0.1.1",(()=>Promise.all([E.e(939),E.e(865),E.e(704),E.e(334),E.e(977)]).then((()=>()=>E(25977))))),l("react-dom","17.0.2",(()=>Promise.all([E.e(935),E.e(865)]).then((()=>()=>E(73935))))),l("react-router-dom","5.3.0",(()=>Promise.all([E.e(338),E.e(865)]).then((()=>()=>E(23338))))),l("react","17.0.2",(()=>E.e(294).then((()=>()=>E(67294))))),l("redux-promise-middleware","6.1.2",(()=>E.e(68).then((()=>()=>E(5068)))))),e[t]=s.length?Promise.all(s).then((()=>e[t]=1)):1}}})(),E.p="/beta/apps/user-preferences/",o=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},a=(e,r)=>{e=o(e),r=o(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var n=e[t],a=(typeof n)[0];if(t>=r.length)return"u"==a;var i=r[t],l=(typeof i)[0];if(a!=l)return"o"==a&&"n"==l||"s"==l||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;t++}},i=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(l=e[o]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var a=[];for(o=1;o<e.length;o++){var l=e[o];a.push(0===l?"not("+s()+")":1===l?"("+s()+" || "+s()+")":2===l?a.pop()+" "+a.pop():i(l))}return s();function s(){return a.pop().replace(/^\((.+)\)$/,"$1")}},l=(e,r)=>{if(0 in e){r=o(r);var t=e[0],n=t<0;n&&(t=-t-1);for(var a=0,i=1,s=!0;;i++,a++){var u,d,f=i<e.length?(typeof e[i])[0]:"";if(a>=r.length||"o"==(d=(typeof(u=r[a]))[0]))return!s||("u"==f?i>t&&!n:""==f!=n);if("u"==d){if(!s||"u"!=f)return!1}else if(s)if(f==d)if(i<=t){if(u!=e[i])return!1}else{if(n?u>e[i]:u<e[i])return!1;u!=e[i]&&(s=!1)}else if("s"!=f&&"n"!=f){if(n||i<=t)return!1;s=!1,i--}else{if(i<=t||d<f!=n)return!1;s=!1}else"s"!=f&&"n"!=f&&(s=!1,i--)}}var c=[],p=c.pop.bind(c);for(a=1;a<e.length;a++){var h=e[a];c.push(1==h?p()|p():2==h?p()&p():h?l(h,r):!p())}return!!p()},s=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},u=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+i(t)+")",d=(e,r,t,n)=>{var o=s(e,t);return l(n,o)||"undefined"!=typeof console&&console.warn&&console.warn(u(t,o,n)),c(e[t][o])},f=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!l(t,r)||e&&!a(e,r)?e:r),0))&&n[r]},c=e=>(e.loaded=1,e.get()),h=(p=e=>function(r,t,n,o){var a=E.I(r);return a&&a.then?a.then(e.bind(e,r,E.S[r],t,n,o)):e(r,E.S[r],t,n,o)})(((e,r,t,n,o)=>r&&E.o(r,t)?d(r,0,t,n):o())),m=p(((e,r,t,n,o)=>{var a=r&&E.o(r,t)&&f(r,t,n);return a?c(a):o()})),v={},g={77865:()=>h("default","react",[1,17,0,1],(()=>E.e(294).then((()=>()=>E(67294))))),21704:()=>h("default","react-dom",[1,17,0,1],(()=>E.e(935).then((()=>()=>E(73935))))),334:()=>m("default","react-router-dom",[1,5,2,0],(()=>E.e(338).then((()=>()=>E(23338))))),57283:()=>m("default","redux-promise-middleware",[1,6,1,2],(()=>E.e(68).then((()=>()=>E(5068))))),11085:()=>m("default","@patternfly/react-icons",[1,4,26,4],(()=>E.e(549).then((()=>()=>E(27549))))),54025:()=>h("default","@scalprum/react-core",[0],(()=>E.e(809).then((()=>()=>E(25977))))),57849:()=>m("default","@patternfly/react-core",[1,4,162,3],(()=>Promise.all([E.e(410),E.e(455)]).then((()=>()=>E(82410)))))},b={109:[11085,54025,57849],283:[57283],334:[334],704:[21704],865:[77865]},E.f.consumes=(e,r)=>{E.o(b,e)&&b[e].forEach((e=>{if(E.o(v,e))return r.push(v[e]);var t=r=>{v[e]=0,E.m[e]=t=>{delete E.c[e],t.exports=r()}},n=r=>{delete v[e],E.m[e]=t=>{throw delete E.c[e],r}};try{var o=g[e]();o.then?r.push(v[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},y=e=>new Promise(((r,t)=>{var n=E.miniCssF(e),o=E.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===r)return i}})(n,o))return r();((e,r,t,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,o.parentNode.removeChild(o),n(s)}},o.href=r,document.head.appendChild(o)})(e,o,r,t)})),w={317:0},E.f.miniCss=(e,r)=>{w[e]?r.push(w[e]):0!==w[e]&&{542:1,715:1,741:1}[e]&&r.push(w[e]=y(e).then((()=>{w[e]=0}),(r=>{throw delete w[e],r})))},(()=>{var e={317:0};E.f.j=(r,t)=>{var n=E.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(283|334|704|865)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=E.p+E.u(r),i=new Error;E.l(a,(t=>{if(E.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,l]=t,s=0;if(a.some((r=>0!==e[r]))){for(n in i)E.o(i,n)&&(E.m[n]=i[n]);l&&l(E)}for(r&&r(t);s<a.length;s++)o=a[s],E.o(e,o)&&e[o]&&e[o][0](),e[a[s]]=0},t=self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var O=E(88933);userPreferences=O})();