!function(e){function t(t){for(var r,o,c=t[0],i=t[1],a=t[2],u=0,s=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(I,o)&&I[o]&&s.push(I[o][0]),I[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(x&&x(t);s.length;)s.shift()();return S.push.apply(S,a||[]),n()}function n(){for(var e,t=0;t<S.length;t++){for(var n=S[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==I[c]&&(r=!1)}r&&(S.splice(t--,1),e=M(M.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!g[e]||!O[e])return;for(var n in O[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0==--y&&0===b&&P()}(e,t),r&&r(e,t)};var o,c=!0,i="b013c81a8cd1560213e8",a={},u=[],s=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:_,apply:A,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:a[e]};return o=void 0,t}var l=[],p="idle";function f(e){p=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var h,v,m,y=0,b=0,E={},O={},g={};function w(e){return+e+""===e?+e:e}function _(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return c=e,f("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=M.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return f("idle"),null;O={},E={},g=e.c,m=e.h,f("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var n in v={},I)j(n);return"prepare"===p&&0===b&&0===y&&P(),t}));var t}function j(e){g[e]?(O[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=M.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):E[e]=!0}function P(){f("ready");var e=h;if(h=null,e)if(c)Promise.resolve().then((function(){return A(c)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(w(n));e.resolve(t)}}function A(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,o,c,s;function d(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),i=o.id,a=o.chain;if((c=D[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var u=0;u<c.parents.length;u++){var s=c.parents[u],d=D[s];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(d.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),l(n[s],[i])):(delete n[s],t.push(s),r.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var h={},y=[],b={},E=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var O in v)if(Object.prototype.hasOwnProperty.call(v,O)){var _;s=w(O);var j=!1,P=!1,A=!1,S="";switch((_=v[O]?d(s):{type:"disposed",moduleId:O}).chain&&(S="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(j=new Error("Aborted because of self decline: "+_.moduleId+S));break;case"declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+S));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(_),t.ignoreUnaccepted||(j=new Error("Aborted because "+s+" is not accepted"+S));break;case"accepted":t.onAccepted&&t.onAccepted(_),P=!0;break;case"disposed":t.onDisposed&&t.onDisposed(_),A=!0;break;default:throw new Error("Unexception type "+_.type)}if(j)return f("abort"),Promise.reject(j);if(P)for(s in b[s]=v[s],l(y,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,s)&&(h[s]||(h[s]=[]),l(h[s],_.outdatedDependencies[s]));A&&(l(y,[_.moduleId]),b[s]=E)}var H,T=[];for(r=0;r<y.length;r++)s=y[r],D[s]&&D[s].hot._selfAccepted&&b[s]!==E&&T.push({module:s,errorHandler:D[s].hot._selfAccepted});f("dispose"),Object.keys(g).forEach((function(e){!1===g[e]&&function(e){delete I[e]}(e)}));for(var C,x,k=y.slice();k.length>0;)if(s=k.pop(),c=D[s]){var L={},N=c.hot._disposeHandlers;for(o=0;o<N.length;o++)(n=N[o])(L);for(a[s]=L,c.hot.active=!1,delete D[s],delete h[s],o=0;o<c.children.length;o++){var G=D[c.children[o]];G&&((H=G.parents.indexOf(s))>=0&&G.parents.splice(H,1))}}for(s in h)if(Object.prototype.hasOwnProperty.call(h,s)&&(c=D[s]))for(x=h[s],o=0;o<x.length;o++)C=x[o],(H=c.children.indexOf(C))>=0&&c.children.splice(H,1);for(s in f("apply"),i=m,b)Object.prototype.hasOwnProperty.call(b,s)&&(e[s]=b[s]);var R=null;for(s in h)if(Object.prototype.hasOwnProperty.call(h,s)&&(c=D[s])){x=h[s];var U=[];for(r=0;r<x.length;r++)if(C=x[r],n=c.hot._acceptedDependencies[C]){if(-1!==U.indexOf(n))continue;U.push(n)}for(r=0;r<U.length;r++){n=U[r];try{n(x)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:x[r],error:e}),t.ignoreErrored||R||(R=e)}}}for(r=0;r<T.length;r++){var q=T[r];s=q.module,u=[s];try{M(s)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:e}),t.ignoreErrored||R||(R=n),R||(R=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:e}),t.ignoreErrored||R||(R=e)}}return R?(f("fail"),Promise.reject(R)):(f("idle"),new Promise((function(e){e(y)})))}var D={},I={10:0},S=[];function M(t){if(D[t])return D[t].exports;var n=D[t]={i:t,l:!1,exports:{},hot:d(t),parents:(s=u,u=[],s),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=D[e];if(!t)return M;var n=function(n){return t.hot.active?(D[n]?-1===D[n].parents.indexOf(e)&&D[n].parents.push(e):(u=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),u=[]),M(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(t){M[e]=t}}};for(var c in M)Object.prototype.hasOwnProperty.call(M,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(n,c,r(c));return n.e=function(e){return"ready"===p&&f("prepare"),b++,M.e(e).then(t,(function(e){throw t(),e}));function t(){b--,"prepare"===p&&(E[e]||j(e),0===b&&0===y&&P())}},n.t=function(e,t){return 1&t&&(e=n(e)),M.t(e,-2&t)},n}(t)),n.l=!0,n.exports}M.e=function(e){var t=[],n=I[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=I[e]=[t,r]}));t.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,M.nc&&c.setAttribute("nonce",M.nc),c.src=function(e){return M.p+"js/"+({11:"SamplePage"}[e]||e)+".js"}(e);var i=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(a);var n=I[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}I[e]=void 0}};var a=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},M.m=e,M.c=D,M.d=function(e,t,n){M.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},M.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,t){if(1&t&&(e=M(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(M.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)M.d(n,r,function(t){return e[t]}.bind(null,r));return n},M.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(t,"a",t),t},M.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},M.p="/apps/user-preferences/",M.oe=function(e){throw console.error(e),e},M.h=function(){return i};var H=window.webpackJsonp=window.webpackJsonp||[],T=H.push.bind(H);H.push=t,H=H.slice();for(var C=0;C<H.length;C++)t(H[C]);var x=T;S.push([256,12]),n()}({152:function(e,t,n){var r=n(4),o=n(442),c=n(443);(t=r(!1)).i(o),t.i(c),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}\n",""]),e.exports=t},171:function(e,t,n){"use strict";n.r(t);var r=n(45),o=n.n(r),c=(n(83),n(63)),i=n.n(c),a=n(1),u=n.n(a),s=n(21),d=n(187),l=n(61),p=n(48);n(272);t.default=function(e){var t=Object(s.k)();return Object(a.useEffect)((function(){i()(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:e.sent||(location.href="./");case 4:case"end":return e.stop()}}),e)})))(),Object(l.register)({notifications:p.notifications}),insights.chrome.init(),insights.chrome.identifyApp("user-preferences");var e=insights.chrome.on("APP_NAVIGATION",(function(e){return t.push("/".concat(e.navId))}));return function(){return e()}}),[]),u.a.createElement(a.Fragment,null,u.a.createElement(p.NotificationsPortal,null),u.a.createElement(d.Routes,{childProps:e}))}},176:function(e,t,n){"use strict";n.r(t),n.d(t,"loading",(function(){return p})),n.d(t,"getSchema",(function(){return f}));n(161),n(162),n(163),n(164),n(165),n(166),n(167),n(168),n(169);var r,o=n(62),c=n.n(o),i=n(20),a=n.n(i),u=n(79),s=n(58);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e,t){var n=t.meta;return l({},e,a()({},n.appName,{schema:[],loaded:!1}))},f=function(e,t){var n=t.payload,r=t.meta;return l({},e,a()({},r.appName,{schema:n||[],loaded:!0}))};t.default={emailPreferences:Object(u.applyReducerHash)((r={},a()(r,s.ACTION_TYPES.GET_EMAIL_SCHEMA,f),a()(r,"".concat(s.ACTION_TYPES.GET_EMAIL_SCHEMA,"_FULFILLED"),f),a()(r,"".concat(s.ACTION_TYPES.GET_EMAIL_SCHEMA,"_PENDING"),p),a()(r,"".concat(s.ACTION_TYPES.GET_EMAIL_SCHEMA,"_REJECTED"),(function(e,t){t.payload;var n=c()(t,["payload"]);return f(e,n)})),r),{})}},187:function(e,t,n){"use strict";n.r(t),n.d(t,"Routes",(function(){return m}));n(254),n(258);var r=n(159),o=n.n(r),c=n(62),i=n.n(c),a=n(21),u=n(0),s=n.n(u),d=n(1),l=n.n(d),p=n(190),f=Object(p.default)((function(){return n.e(11).then(n.bind(null,451))})),h="/email",v=function(e){var t=e.component,n=e.rootClass,r=i()(e,["component","rootClass"]),c=document.getElementById("root");return c.removeAttribute("class"),c.classList.add("page__".concat(n),"pf-c-page__main"),c.setAttribute("role","main"),l.a.createElement(a.d,o()({},r,{component:t}))};v.propTypes={component:s.a.func,rootClass:s.a.string};var m=function(){return l.a.createElement(a.g,null,l.a.createElement(v,{path:h,component:f,rootClass:"email"}),l.a.createElement(a.c,{path:"*",to:h,push:!0}))}},190:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r=n(45),o=n.n(r),c=(n(83),n(63)),i=n.n(c),a=n(223),u=n.n(a),s=n(224),d=n.n(s),l=n(225),p=n.n(l),f=n(226),h=n.n(f),v=n(227),m=n.n(v),y=n(1),b=n.n(y),E=n(179);function O(e){return function(t){function n(e){var t;return u()(this,n),(t=p()(this,h()(n).call(this,e))).state={component:null},t}var r;return m()(n,t),d()(n,[{key:"componentDidMount",value:(r=i()(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,r=n.default,this.setState({component:r});case 5:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?b.a.createElement(e,this.props):b.a.createElement(E.Skeleton,null)}}]),n}(y.Component)}},256:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=n(24),i=n.n(c),a=n(56),u=n(66),s=n(61),d=n(171),l=n(241);i.a.render(o.a.createElement(u.Provider,{store:Object(s.init)().getStore()},o.a.createElement(a.BrowserRouter,{basename:Object(l.getBaseName)(window.location.pathname,1)},o.a.createElement(d.default,null))),document.getElementById("root"))},272:function(e,t,n){var r=n(152);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},c=n(5)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(152,(function(){var t=n(152);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");c(t)})),e.hot.dispose((function(){c()}))},58:function(e,t,n){"use strict";n.r(t),n.d(t,"GET_EMAIL_SCHEMA",(function(){return i})),n.d(t,"SAVE_EMAIL_SCHEMA",(function(){return a})),n.d(t,"ACTION_TYPES",(function(){return u}));n(161),n(162),n(163),n(264),n(164),n(165),n(166),n(167),n(168),n(169);var r=n(20),o=n.n(r);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var i="@@EMAIL/GET_SCHEMA",a="@@EMAIL/SAVE_VALUES",u=["_PENDING","_FULFILLED","_REJECTED"].reduce((function(e,t){var n;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},(n={},o()(n,"".concat(i).concat(t),i),o()(n,"".concat(a).concat(t),a),n))}),{GET_EMAIL_SCHEMA:i,SAVE_EMAIL_SCHEMA:a})},61:function(e,t,n){"use strict";n.r(t),n.d(t,"init",(function(){return s})),n.d(t,"getStore",(function(){return d})),n.d(t,"register",(function(){return l}));n(253);var r=n(79),o=n.n(r),c=n(243),i=n(176);n.d(t,"emailPreferences",(function(){return i.default}));var a,u=n(48);function s(){if(a)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return a=new o.a({},[c.a,Object(u.notificationsMiddleware)({autoDismiss:!0})].concat(t))}function d(){return a.getStore()}function l(){var e;return(e=a).register.apply(e,arguments)}}});
//# sourceMappingURL=App.js.map