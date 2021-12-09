var userPreferences;(()=>{"use strict";var e,r,t,n,a,o,i,d,l,f,s,u,c,p,h,v,m,b,g,y,w,O,P={88933:(e,r,t)=>{var n={"./RootApp":()=>Promise.all([t.e(410),t.e(252),t.e(736),t.e(865),t.e(704),t.e(812),t.e(412)]).then((()=>()=>t(28412)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n=t.S.default,a="default";if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>a,init:()=>o})}},j={};function x(e){var r=j[e];if(void 0!==r)return r.exports;var t=j[e]={id:e,loaded:!1,exports:{}};return P[e](t,t.exports,x),t.loaded=!0,t.exports}x.m=P,x.c=j,e=[],x.O=(r,t,n,a)=>{if(!t){var o=1/0;for(f=0;f<e.length;f++){for(var[t,n,a]=e[f],i=!0,d=0;d<t.length;d++)(!1&a||o>=a)&&Object.keys(x.O).every((e=>x.O[e](t[d])))?t.splice(d--,1):(i=!1,a<o&&(o=a));if(i){e.splice(f--,1);var l=n();void 0!==l&&(r=l)}}return r}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[t,n,a]},x.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return x.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,x.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var a=Object.create(null);x.r(a);var o={};r=r||[null,t({}),t([]),t(t)];for(var i=2&n&&e;"object"==typeof i&&!~r.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((r=>o[r]=()=>e[r]));return o.default=()=>e,x.d(a,o),a},x.d=(e,r)=>{for(var t in r)x.o(r,t)&&!x.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},x.f={},x.e=e=>Promise.all(Object.keys(x.f).reduce(((r,t)=>(x.f[t](e,r),r)),[])),x.u=e=>"js/"+({252:"rhcsVendor",293:"reactVendor",410:"pfVendor",542:"Email",736:"vendor",741:"Notification"}[e]||e)+"."+{252:"61e749872384721d5fcc",293:"4464404fc2142f17631d",298:"0d068b809a69120eb8de",410:"3390f4b7c5e4e6c290fc",412:"43f57efbe7be0de26a2a",542:"4d091584d710c4813a7f",704:"b47e62f77199ad92c0bc",736:"4ad06266554ad052b879",741:"a6e558c6277d3766d954",807:"5156a914ae6f0bbd6011",812:"c0b99b06cb97bf55f8a8",814:"cac8f250b22da7f88df3",865:"4c57803c9c0243499bc9"}[e]+".js",x.miniCssF=e=>"css/"+({252:"rhcsVendor",410:"pfVendor",542:"Email",736:"vendor",741:"Notification"}[e]||e)+"."+{252:"a18e68c6f09902c60a97",410:"f4d664015747ec347340",542:"2d4d4697634882118f99",736:"79790d9eb1e0411625a4",741:"67471c347cb84f7531eb",807:"4aaa5fa0d0764e42ef80",812:"4fe3f4015a9f706a4d9e"}[e]+".css",x.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),x.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),x.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n={},a="insights-frontend-starter-app:",x.l=(e,r,t,o)=>{if(n[e])n[e].push(r);else{var i,d;if(void 0!==t)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==a+t){i=s;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,x.nc&&i.setAttribute("nonce",x.nc),i.setAttribute("data-webpack",a+t),i.src=e),n[e]=[r];var u=(r,t)=>{i.onerror=i.onload=null,clearTimeout(c);var a=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(t))),r)return r(t)},c=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),d&&document.head.appendChild(i)}},x.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},x.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{x.S={};var e={},r={};x.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];x.o(x.S,t)||(x.S[t]={});var o=x.S[t],i="insights-frontend-starter-app",d=(e,r,t,n)=>{var a=o[e]=o[e]||{},d=a[r];(!d||!d.loaded&&(!n!=!d.eager?n:i>d.from))&&(a[r]={get:t,from:i,eager:!!n})},l=[];return"default"===t&&(d("@patternfly/react-core","4.162.3",(()=>Promise.all([x.e(410),x.e(736),x.e(865),x.e(704)]).then((()=>()=>x(21625))))),d("@patternfly/react-icons","4.26.4",(()=>Promise.all([x.e(410),x.e(736),x.e(865)]).then((()=>()=>x(27549))))),d("react-dom","17.0.2",(()=>Promise.all([x.e(293),x.e(736),x.e(865)]).then((()=>()=>x(73935))))),d("react-redux","7.2.5",(()=>Promise.all([x.e(736),x.e(865),x.e(704)]).then((()=>()=>x(28216))))),d("react-router-dom","5.3.0",(()=>Promise.all([x.e(736),x.e(865)]).then((()=>()=>x(23338))))),d("react","17.0.2",(()=>Promise.all([x.e(293),x.e(736)]).then((()=>()=>x(67294))))),d("redux-promise-middleware","6.1.2",(()=>x.e(736).then((()=>()=>x(5068))))),d("redux","4.1.1",(()=>x.e(736).then((()=>()=>x(97779)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),x.p="/beta/apps/user-preferences/",o=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},i=(e,r)=>{e=o(e),r=o(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var n=e[t],a=(typeof n)[0];if(t>=r.length)return"u"==a;var i=r[t],d=(typeof i)[0];if(a!=d)return"o"==a&&"n"==d||"s"==d||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;t++}},d=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,t+="u"==(typeof(i=e[a]))[0]?"-":(n>0?".":"")+(n=2,i);return t}var o=[];for(a=1;a<e.length;a++){var i=e[a];o.push(0===i?"not("+l()+")":1===i?"("+l()+" || "+l()+")":2===i?o.pop()+" "+o.pop():d(i))}return l();function l(){return o.pop().replace(/^\((.+)\)$/,"$1")}},l=(e,r)=>{if(0 in e){r=o(r);var t=e[0],n=t<0;n&&(t=-t-1);for(var a=0,i=1,d=!0;;i++,a++){var f,s,u=i<e.length?(typeof e[i])[0]:"";if(a>=r.length||"o"==(s=(typeof(f=r[a]))[0]))return!d||("u"==u?i>t&&!n:""==u!=n);if("u"==s){if(!d||"u"!=u)return!1}else if(d)if(u==s)if(i<=t){if(f!=e[i])return!1}else{if(n?f>e[i]:f<e[i])return!1;f!=e[i]&&(d=!1)}else if("s"!=u&&"n"!=u){if(n||i<=t)return!1;d=!1,i--}else{if(i<=t||s<u!=n)return!1;d=!1}else"s"!=u&&"n"!=u&&(d=!1,i--)}}var c=[],p=c.pop.bind(c);for(a=1;a<e.length;a++){var h=e[a];c.push(1==h?p()|p():2==h?p()&p():h?l(h,r):!p())}return!!p()},f=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&i(e,r)?r:e),0)},s=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+d(t)+")",u=(e,r,t,n)=>{var a=f(e,t);return l(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(s(t,a,n)),p(e[t][a])},c=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!l(t,r)||e&&!i(e,r)?e:r),0))&&n[r]},p=e=>(e.loaded=1,e.get()),v=(h=e=>function(r,t,n,a){var o=x.I(r);return o&&o.then?o.then(e.bind(e,r,x.S[r],t,n,a)):e(r,x.S[r],t,n,a)})(((e,r,t,n,a)=>r&&x.o(r,t)?u(r,0,t,n):a())),m=h(((e,r,t,n,a)=>{var o=r&&x.o(r,t)&&c(r,t,n);return o?p(o):a()})),b={},g={77865:()=>v("default","react",[1,17,0,1],(()=>Promise.all([x.e(293),x.e(736)]).then((()=>()=>x(67294))))),21704:()=>v("default","react-dom",[1,17,0,1],(()=>Promise.all([x.e(293),x.e(736)]).then((()=>()=>x(73935))))),334:()=>m("default","react-router-dom",[1,5,2,0],(()=>x.e(736).then((()=>()=>x(23338))))),35592:()=>m("default","redux",[1,4,0,5],(()=>x.e(736).then((()=>()=>x(97779))))),57283:()=>m("default","redux-promise-middleware",[1,6,1,2],(()=>x.e(736).then((()=>()=>x(5068))))),61084:()=>m("default","react-redux",[1,7,2,2],(()=>x.e(736).then((()=>()=>x(28216))))),11085:()=>m("default","@patternfly/react-icons",[1,4,26,4],(()=>x.e(410).then((()=>()=>x(27549))))),57849:()=>m("default","@patternfly/react-core",[1,4,162,3],(()=>Promise.all([x.e(410),x.e(736)]).then((()=>()=>x(21625)))))},y={704:[21704],807:[11085,57849],812:[334,35592,57283,61084],865:[77865]},x.f.consumes=(e,r)=>{x.o(y,e)&&y[e].forEach((e=>{if(x.o(b,e))return r.push(b[e]);var t=r=>{b[e]=0,x.m[e]=t=>{delete x.c[e],t.exports=r()}},n=r=>{delete b[e],x.m[e]=t=>{throw delete x.c[e],r}};try{var a=g[e]();a.then?r.push(b[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},w=e=>new Promise(((r,t)=>{var n=x.miniCssF(e),a=x.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var a=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===r))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===r)return i}})(n,a))return r();((e,r,t,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=o=>{if(a.onerror=a.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),d=o&&o.target&&o.target.href||r,l=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=d,a.parentNode.removeChild(a),n(l)}},a.href=r,document.head.appendChild(a)})(e,a,r,t)})),O={317:0},x.f.miniCss=(e,r)=>{O[e]?r.push(O[e]):0!==O[e]&&{252:1,410:1,542:1,736:1,741:1,807:1,812:1}[e]&&r.push(O[e]=w(e).then((()=>{O[e]=0}),(r=>{throw delete O[e],r})))},(()=>{var e={317:0,941:0};x.f.j=(r,t)=>{var n=x.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(704|865|941)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=x.p+x.u(r),i=new Error;x.l(o,(t=>{if(x.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}},x.O.j=r=>0===e[r];var r=(r,t)=>{var n,a,[o,i,d]=t,l=0;if(o.some((r=>0!==e[r]))){for(n in i)x.o(i,n)&&(x.m[n]=i[n]);if(d)var f=d(x)}for(r&&r(t);l<o.length;l++)a=o[l],x.o(e,a)&&e[a]&&e[a][0](),e[o[l]]=0;return x.O(f)},t=self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var E=x.O(void 0,[941],(()=>x(88933)));E=x.O(E),userPreferences=E})();