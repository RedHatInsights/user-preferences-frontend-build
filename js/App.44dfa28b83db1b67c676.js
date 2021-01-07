!function(e){function t(t){for(var r,o,c=t[0],a=t[1],i=t[2],u=0,s=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(H,o)&&H[o]&&s.push(H[o][0]),H[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(N&&N(t);s.length;)s.shift()();return x.push.apply(x,i||[]),n()}function n(){for(var e,t=0;t<x.length;t++){for(var n=x[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==H[c]&&(r=!1)}r&&(x.splice(t--,1),e=T(T.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0==--b&&0===E&&A()}(e,t),r&&r(e,t)};var o,c=!0,a="44dfa28b83db1b67c676",i={},u=[],s=[];function d(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:o!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,f){case"idle":(v={})[t]=e[t],p("ready");break;case"ready":S(t);break;case"prepare":case"check":case"dispose":case"apply":(m=m||[]).push(t)}},check:j,apply:D,status:function(e){if(!e)return f;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:i[t]};return o=void 0,n}var l=[],f="idle";function p(e){f=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var h,v,y,m,b=0,E=0,O={},g={},w={};function _(e){return+e+""===e?+e:e}function j(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return c=e,p("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=T.p+""+a+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return p(I()?"ready":"idle"),null;g={},O={},w=e.c,y=e.h,p("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var n in v={},H)P(n);return"prepare"===f&&0===E&&0===b&&A(),t}));var t}function P(e){w[e]?(g[e]=!0,b++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=T.p+""+e+"."+a+".hot-update.js",document.head.appendChild(t)}(e)):O[e]=!0}function A(){p("ready");var e=h;if(h=null,e)if(c)Promise.resolve().then((function(){return D(c)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(_(n));e.resolve(t)}}function D(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");return function t(n){var r,c,s,d,l;function f(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),c=o.id,a=o.chain;if((d=M[c])&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(d.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var i=0;i<d.parents.length;i++){var u=d.parents[i],s=M[u];if(s){if(s.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([u]),moduleId:c,parentId:u};-1===t.indexOf(u)&&(s.hot._acceptedDependencies[c]?(n[u]||(n[u]=[]),h(n[u],[c])):(delete n[u],t.push(u),r.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}I();var b={},E=[],O={},g=function(){console.warn("[HMR] unexpected require("+P.moduleId+") to disposed module")};for(var j in v)if(Object.prototype.hasOwnProperty.call(v,j)){var P;l=_(j),P=v[j]?f(l):{type:"disposed",moduleId:j};var A=!1,D=!1,S=!1,x="";switch(P.chain&&(x="\nUpdate propagation: "+P.chain.join(" -> ")),P.type){case"self-declined":n.onDeclined&&n.onDeclined(P),n.ignoreDeclined||(A=new Error("Aborted because of self decline: "+P.moduleId+x));break;case"declined":n.onDeclined&&n.onDeclined(P),n.ignoreDeclined||(A=new Error("Aborted because of declined dependency: "+P.moduleId+" in "+P.parentId+x));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(P),n.ignoreUnaccepted||(A=new Error("Aborted because "+l+" is not accepted"+x));break;case"accepted":n.onAccepted&&n.onAccepted(P),D=!0;break;case"disposed":n.onDisposed&&n.onDisposed(P),S=!0;break;default:throw new Error("Unexception type "+P.type)}if(A)return p("abort"),Promise.reject(A);if(D)for(l in O[l]=v[l],h(E,P.outdatedModules),P.outdatedDependencies)Object.prototype.hasOwnProperty.call(P.outdatedDependencies,l)&&(b[l]||(b[l]=[]),h(b[l],P.outdatedDependencies[l]));S&&(h(E,[P.moduleId]),O[l]=g)}var k,C=[];for(c=0;c<E.length;c++)l=E[c],M[l]&&M[l].hot._selfAccepted&&O[l]!==g&&!M[l].hot._selfInvalidated&&C.push({module:l,parents:M[l].parents.slice(),errorHandler:M[l].hot._selfAccepted});p("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete H[e]}(e)}));var L,N,R=E.slice();for(;R.length>0;)if(l=R.pop(),d=M[l]){var G={},U=d.hot._disposeHandlers;for(s=0;s<U.length;s++)(r=U[s])(G);for(i[l]=G,d.hot.active=!1,delete M[l],delete b[l],s=0;s<d.children.length;s++){var q=M[d.children[s]];q&&((k=q.parents.indexOf(l))>=0&&q.parents.splice(k,1))}}for(l in b)if(Object.prototype.hasOwnProperty.call(b,l)&&(d=M[l]))for(N=b[l],s=0;s<N.length;s++)L=N[s],(k=d.children.indexOf(L))>=0&&d.children.splice(k,1);p("apply"),void 0!==y&&(a=y,y=void 0);for(l in v=void 0,O)Object.prototype.hasOwnProperty.call(O,l)&&(e[l]=O[l]);var J=null;for(l in b)if(Object.prototype.hasOwnProperty.call(b,l)&&(d=M[l])){N=b[l];var F=[];for(c=0;c<N.length;c++)if(L=N[c],r=d.hot._acceptedDependencies[L]){if(-1!==F.indexOf(r))continue;F.push(r)}for(c=0;c<F.length;c++){r=F[c];try{r(N)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:N[c],error:e}),n.ignoreErrored||J||(J=e)}}}for(c=0;c<C.length;c++){var V=C[c];l=V.module,u=V.parents,o=l;try{T(l)}catch(e){if("function"==typeof V.errorHandler)try{V.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,originalError:e}),n.ignoreErrored||J||(J=t),J||(J=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||J||(J=e)}}if(J)return p("fail"),Promise.reject(J);if(m)return t(n).then((function(e){return E.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return p("idle"),new Promise((function(e){e(E)}))}(t=t||{})}function I(){if(m)return v||(v={}),m.forEach(S),m=void 0,!0}function S(t){Object.prototype.hasOwnProperty.call(v,t)||(v[t]=e[t])}var M={},H={15:0},x=[];function T(t){if(M[t])return M[t].exports;var n=M[t]={i:t,l:!1,exports:{},hot:d(t),parents:(s=u,u=[],s),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=M[e];if(!t)return T;var n=function(n){return t.hot.active?(M[n]?-1===M[n].parents.indexOf(e)&&M[n].parents.push(e):(u=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),u=[]),T(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return T[e]},set:function(t){T[e]=t}}};for(var c in T)Object.prototype.hasOwnProperty.call(T,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(n,c,r(c));return n.e=function(e){return"ready"===f&&p("prepare"),E++,T.e(e).then(t,(function(e){throw t(),e}));function t(){E--,"prepare"===f&&(O[e]||P(e),0===E&&0===b&&A())}},n.t=function(e,t){return 1&t&&(e=n(e)),T.t(e,-2&t)},n}(t)),n.l=!0,n.exports}T.e=function(e){var t=[],n=H[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=H[e]=[t,r]}));t.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,T.nc&&c.setAttribute("nonce",T.nc),c.src=function(e){return T.p+"js/"+({16:"Email",19:"vendors~Email"}[e]||e)+"."+a+".js"}(e);var i=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=H[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}H[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},T.m=e,T.c=M,T.d=function(e,t,n){T.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},T.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},T.t=function(e,t){if(1&t&&(e=T(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(T.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)T.d(n,r,function(t){return e[t]}.bind(null,r));return n},T.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return T.d(t,"a",t),t},T.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},T.p="/beta/apps/user-preferences/",T.oe=function(e){throw console.error(e),e},T.h=function(){return a};var k=window.webpackJsonp=window.webpackJsonp||[],C=k.push.bind(k);k.push=t,k=k.slice();for(var L=0;L<k.length;L++)t(k[L]);var N=C;x.push([339,5,6,17,18]),n()}({109:function(e,t,n){"use strict";n.r(t),n.d(t,"GET_EMAIL_SCHEMA",(function(){return a})),n.d(t,"SAVE_EMAIL_SCHEMA",(function(){return i})),n.d(t,"ACTION_TYPES",(function(){return u}));var r=n(51),o=n.n(r);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var a="@@EMAIL/GET_SCHEMA",i="@@EMAIL/SAVE_VALUES",u=["_PENDING","_FULFILLED","_REJECTED"].reduce((function(e,t){var n;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},(n={},o()(n,"".concat(a).concat(t),a),o()(n,"".concat(i).concat(t),i),n))}),{GET_EMAIL_SCHEMA:a,SAVE_EMAIL_SCHEMA:i})},115:function(e,t,n){"use strict";n.r(t),n.d(t,"init",(function(){return s})),n.d(t,"getStore",(function(){return d})),n.d(t,"register",(function(){return l}));var r=n(130),o=n.n(r),c=n(310),a=n(280);n.d(t,"emailPreferences",(function(){return a.default}));var i,u=n(127);function s(){if(i)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i=new o.a({},[c.a,Object(u.notificationsMiddleware)({autoDismiss:!0})].concat(t))}function d(){return i.getStore()}function l(){var e;return(e=i).register.apply(e,arguments)}},222:function(e,t,n){var r=n(6),o=n(435),c=n(436);(t=r(!1)).i(o),t.i(c),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}\n",""]),e.exports=t},243:function(e){e.exports=JSON.parse('{"a":{"email":"/email"}}')},276:function(e,t,n){"use strict";n.r(t);var r=n(93),o=n.n(r),c=n(119),a=n.n(c),i=n(1),u=n.n(i),s=n(55),d=n(284),l=n(115),f=n(336),p=n.n(f),h=n(127);n(343);t.default=function(e){var t=Object(s.g)();return Object(i.useEffect)((function(){a()(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:e.sent||(location.href="./");case 4:case"end":return e.stop()}}),e)})))(),Object(l.register)({notifications:p.a}),insights.chrome.init(),insights.chrome.identifyApp("user-preferences");var e=insights.chrome.on("APP_NAVIGATION",(function(e){return t.push("/".concat(e.navId))}));return function(){return e()}}),[]),u.a.createElement(i.Fragment,null,u.a.createElement(h.NotificationsPortal,null),u.a.createElement(d.Routes,{childProps:e}))}},280:function(e,t,n){"use strict";n.r(t),n.d(t,"loading",(function(){return f})),n.d(t,"getSchema",(function(){return p}));var r,o=n(116),c=n.n(o),a=n(51),i=n.n(a),u=n(130),s=n(109);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e,t){var n=t.meta;return l({},e,i()({},n.appName,{schema:[],loaded:!1}))},p=function(e,t){var n=t.payload,r=t.meta;return l({},e,i()({},r.appName,{schema:n||[],loaded:!0}))};t.default={emailPreferences:Object(u.applyReducerHash)((r={},i()(r,s.ACTION_TYPES.GET_EMAIL_SCHEMA,p),i()(r,"".concat(s.ACTION_TYPES.GET_EMAIL_SCHEMA,"_FULFILLED"),p),i()(r,"".concat(s.ACTION_TYPES.GET_EMAIL_SCHEMA,"_PENDING"),f),i()(r,"".concat(s.ACTION_TYPES.GET_EMAIL_SCHEMA,"_REJECTED"),(function(e,t){t.payload;var n=c()(t,["payload"]);return p(e,n)})),r),{})}},284:function(e,t,n){"use strict";n.r(t),n.d(t,"Routes",(function(){return y}));var r=n(252),o=n.n(r),c=n(116),a=n.n(c),i=n(55),u=n(13),s=n.n(u),d=n(1),l=n.n(d),f=n(285),p=n(243),h=Object(f.default)((function(){return Promise.all([n.e(5),n.e(6),n.e(19),n.e(16)]).then(n.bind(null,487))})),v=function(e){var t=e.component,n=e.rootClass,r=a()(e,["component","rootClass"]),c=document.getElementById("root");return c.removeAttribute("class"),c.classList.add("page__".concat(n),"pf-c-page__main"),c.setAttribute("role","main"),l.a.createElement(i.b,o()({},r,{component:t}))};v.propTypes={component:s.a.func,rootClass:s.a.string};var y=function(){return l.a.createElement(i.d,null,l.a.createElement(v,{path:p.a.email,component:h,rootClass:"email"}),l.a.createElement(i.a,{path:"*",to:p.a.email,push:!0}))}},285:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r=n(93),o=n.n(r),c=n(119),a=n.n(c),i=n(289),u=n.n(i),s=n(290),d=n.n(s),l=n(291),f=n.n(l),p=n(292),h=n.n(p),v=n(237),y=n.n(v),m=n(1),b=n.n(m),E=n(283);function O(e){return function(t){f()(c,t);var n,r=function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=y()(e);if(t()){var o=y()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h()(this,n)}}(c);function c(e){var t;return u()(this,c),(t=r.call(this,e)).state={component:null},t}return d()(c,[{key:"componentDidMount",value:(n=a()(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?b.a.createElement(e,this.props):b.a.createElement(E.Skeleton,null)}}]),c}(m.Component)}},339:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=n(23),a=n.n(c),i=n(123),u=n(120),s=n(115),d=n(276),l=n(293);a.a.render(o.a.createElement(u.Provider,{store:Object(s.init)().getStore()},o.a.createElement(i.a,{basename:Object(l.getBaseName)(window.location.pathname,1)},o.a.createElement(d.default,null))),document.getElementById("root"))},343:function(e,t,n){var r=n(222);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},c=n(7)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(222,(function(){var t=n(222);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");c(t)})),e.hot.dispose((function(){c()}))}});
//# sourceMappingURL=App.44dfa28b83db1b67c676.js.map