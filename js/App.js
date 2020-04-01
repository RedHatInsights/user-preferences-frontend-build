!function(e){function n(n){for(var r,o,c=n[0],i=n[1],a=n[2],u=0,s=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(I,o)&&I[o]&&s.push(I[o][0]),I[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(k&&k(n);s.length;)s.shift()();return S.push.apply(S,a||[]),t()}function t(){for(var e,n=0;n<S.length;n++){for(var t=S[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==I[c]&&(r=!1)}r&&(S.splice(n--,1),e=M(M.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!g[e]||!O[e])return;for(var t in O[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0==--m&&0===b&&P()}(e,n),r&&r(e,n)};var o,c=!0,i="f8e9795bd6234ea6c667",a={},u=[],s=[];function d(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:_,apply:A,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:a[e]};return o=void 0,n}var l=[],p="idle";function f(e){p=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var h,v,y,m=0,b=0,E={},O={},g={};function w(e){return+e+""===e?+e:e}function _(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return c=e,f("check"),(n=1e4,n=n||1e4,new Promise((function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=M.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}}))).then((function(e){if(!e)return f("idle"),null;O={},E={},g=e.c,y=e.h,f("prepare");var n=new Promise((function(e,n){h={resolve:e,reject:n}}));for(var t in v={},I)j(t);return"prepare"===p&&0===b&&0===m&&P(),n}));var n}function j(e){g[e]?(O[e]=!0,m++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=M.p+""+e+"."+i+".hot-update.js",document.head.appendChild(n)}(e)):E[e]=!0}function P(){f("ready");var e=h;if(h=null,e)if(c)Promise.resolve().then((function(){return A(c)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(w(t));e.resolve(n)}}function A(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var t,r,o,c,s;function d(e){for(var n=[e],t={},r=n.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),i=o.id,a=o.chain;if((c=D[i])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(c.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var u=0;u<c.parents.length;u++){var s=c.parents[u],d=D[s];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([s]),moduleId:i,parentId:s};-1===n.indexOf(s)&&(d.hot._acceptedDependencies[i]?(t[s]||(t[s]=[]),l(t[s],[i])):(delete t[s],n.push(s),r.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var h={},m=[],b={},E=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var O in v)if(Object.prototype.hasOwnProperty.call(v,O)){var _;s=w(O);var j=!1,P=!1,A=!1,S="";switch((_=v[O]?d(s):{type:"disposed",moduleId:O}).chain&&(S="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+_.moduleId+S));break;case"declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+S));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(_),n.ignoreUnaccepted||(j=new Error("Aborted because "+s+" is not accepted"+S));break;case"accepted":n.onAccepted&&n.onAccepted(_),P=!0;break;case"disposed":n.onDisposed&&n.onDisposed(_),A=!0;break;default:throw new Error("Unexception type "+_.type)}if(j)return f("abort"),Promise.reject(j);if(P)for(s in b[s]=v[s],l(m,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,s)&&(h[s]||(h[s]=[]),l(h[s],_.outdatedDependencies[s]));A&&(l(m,[_.moduleId]),b[s]=E)}var H,T=[];for(r=0;r<m.length;r++)s=m[r],D[s]&&D[s].hot._selfAccepted&&b[s]!==E&&T.push({module:s,errorHandler:D[s].hot._selfAccepted});f("dispose"),Object.keys(g).forEach((function(e){!1===g[e]&&function(e){delete I[e]}(e)}));for(var C,k,x=m.slice();x.length>0;)if(s=x.pop(),c=D[s]){var L={},N=c.hot._disposeHandlers;for(o=0;o<N.length;o++)(t=N[o])(L);for(a[s]=L,c.hot.active=!1,delete D[s],delete h[s],o=0;o<c.children.length;o++){var G=D[c.children[o]];G&&((H=G.parents.indexOf(s))>=0&&G.parents.splice(H,1))}}for(s in h)if(Object.prototype.hasOwnProperty.call(h,s)&&(c=D[s]))for(k=h[s],o=0;o<k.length;o++)C=k[o],(H=c.children.indexOf(C))>=0&&c.children.splice(H,1);for(s in f("apply"),i=y,b)Object.prototype.hasOwnProperty.call(b,s)&&(e[s]=b[s]);var R=null;for(s in h)if(Object.prototype.hasOwnProperty.call(h,s)&&(c=D[s])){k=h[s];var U=[];for(r=0;r<k.length;r++)if(C=k[r],t=c.hot._acceptedDependencies[C]){if(-1!==U.indexOf(t))continue;U.push(t)}for(r=0;r<U.length;r++){t=U[r];try{t(k)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:k[r],error:e}),n.ignoreErrored||R||(R=e)}}}for(r=0;r<T.length;r++){var q=T[r];s=q.module,u=[s];try{M(s)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:t,originalError:e}),n.ignoreErrored||R||(R=t),R||(R=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:e}),n.ignoreErrored||R||(R=e)}}return R?(f("fail"),Promise.reject(R)):(f("idle"),new Promise((function(e){e(m)})))}var D={},I={10:0},S=[];function M(n){if(D[n])return D[n].exports;var t=D[n]={i:n,l:!1,exports:{},hot:d(n),parents:(s=u,u=[],s),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=D[e];if(!n)return M;var t=function(t){return n.hot.active?(D[t]?-1===D[t].parents.indexOf(e)&&D[t].parents.push(e):(u=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),u=[]),M(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(n){M[e]=n}}};for(var c in M)Object.prototype.hasOwnProperty.call(M,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(t,c,r(c));return t.e=function(e){return"ready"===p&&f("prepare"),b++,M.e(e).then(n,(function(e){throw n(),e}));function n(){b--,"prepare"===p&&(E[e]||j(e),0===b&&0===m&&P())}},t.t=function(e,n){return 1&n&&(e=t(e)),M.t(e,-2&n)},t}(n)),t.l=!0,t.exports}M.e=function(e){var n=[],t=I[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=I[e]=[n,r]}));n.push(t[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,M.nc&&c.setAttribute("nonce",M.nc),c.src=function(e){return M.p+"js/"+({11:"SamplePage"}[e]||e)+".js"}(e);var i=new Error;o=function(n){c.onerror=c.onload=null,clearTimeout(a);var t=I[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,t[1](i)}I[e]=void 0}};var a=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(n)},M.m=e,M.c=D,M.d=function(e,n,t){M.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},M.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,n){if(1&n&&(e=M(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(M.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)M.d(t,r,function(n){return e[n]}.bind(null,r));return t},M.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(n,"a",n),n},M.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},M.p="/beta/apps/user-preferences/",M.oe=function(e){throw console.error(e),e},M.h=function(){return i};var H=window.webpackJsonp=window.webpackJsonp||[],T=H.push.bind(H);H.push=n,H=H.slice();for(var C=0;C<H.length;C++)n(H[C]);var k=T;S.push([176,12]),t()}({113:function(e,n,t){var r=t(4),o=t(338),c=t(339);(n=r(!1)).i(o),n.i(c),n.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}\n",""]),e.exports=n},122:function(e,n,t){"use strict";t.r(n);var r=t(54),o=t.n(r),c=t(55),i=t.n(c),a=t(56),u=t.n(a),s=t(57),d=t.n(s),l=t(58),p=t.n(l),f=t(0),h=t.n(f),v=t(1),y=t.n(v),m=t(17),b=t(31),E=t(130),O=t(42),g=t(32),w=(t(195),function(e){function n(){return o()(this,n),u()(this,d()(n).apply(this,arguments))}return p()(n,e),i()(n,[{key:"componentDidMount",value:function(){var e=this;Object(O.register)({notifications:g.notifications}),insights.chrome.init(),insights.chrome.identifyApp("user-preferences"),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(n){return e.props.history.push("/".concat(n.navId))}))}},{key:"componentWillUnmount",value:function(){this.appNav()}},{key:"render",value:function(){return y.a.createElement(v.Fragment,null,y.a.createElement(g.NotificationsPortal,null),y.a.createElement(E.Routes,{childProps:this.props}))}}]),n}(v.Component));w.propTypes={history:h.a.object},n.default=Object(m.o)(Object(b.connect)()(w))},124:function(e,n,t){"use strict";t.r(n),t.d(n,"loading",(function(){return p})),t.d(n,"getSchema",(function(){return f}));var r,o=t(43),c=t.n(o),i=t(16),a=t.n(i),u=t(59),s=t(39);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=function(e,n){var t=n.meta;return l({},e,a()({},t.appName,{schema:[],loaded:!1}))},f=function(e,n){var t=n.payload,r=n.meta;return l({},e,a()({},r.appName,{schema:t||[],loaded:!0}))};n.default={emailPreferences:Object(u.applyReducerHash)((r={},a()(r,s.ACTION_TYPES.GET_EMAIL_SCHEMA,f),a()(r,"".concat(s.ACTION_TYPES.GET_EMAIL_SCHEMA,"_FULFILLED"),f),a()(r,"".concat(s.ACTION_TYPES.GET_EMAIL_SCHEMA,"_PENDING"),p),a()(r,"".concat(s.ACTION_TYPES.GET_EMAIL_SCHEMA,"_REJECTED"),(function(e,n){n.payload;var t=c()(n,["payload"]);return f(e,t)})),r),{})}},130:function(e,n,t){"use strict";t.r(n),t.d(n,"Routes",(function(){return y}));var r=t(131),o=t.n(r),c=t(43),i=t.n(c),a=t(17),u=t(0),s=t.n(u),d=t(1),l=t.n(d),p=t(132),f=Object(p.default)((function(){return t.e(11).then(t.bind(null,343))})),h="/email",v=function(e){var n=e.component,t=e.rootClass,r=i()(e,["component","rootClass"]),c=document.getElementById("root");return c.removeAttribute("class"),c.classList.add("page__".concat(t),"pf-c-page__main"),c.setAttribute("role","main"),l.a.createElement(a.d,o()({},r,{component:n}))};v.propTypes={component:s.a.func,rootClass:s.a.string};var y=function(){return l.a.createElement(a.g,null,l.a.createElement(v,{path:h,component:f,rootClass:"email"}),l.a.createElement(a.c,{path:"*",to:h,push:!0}))}},132:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));var r=t(63),o=t.n(r),c=t(123),i=t.n(c),a=t(54),u=t.n(a),s=t(55),d=t.n(s),l=t(56),p=t.n(l),f=t(57),h=t.n(f),v=t(58),y=t.n(v),m=t(1),b=t.n(m),E=t(126);function O(e){return function(n){function t(e){var n;return u()(this,t),(n=p()(this,h()(t).call(this,e))).state={component:null},n}var r;return y()(t,n),d()(t,[{key:"componentDidMount",value:(r=i()(o.a.mark((function n(){var t,r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:t=n.sent,r=t.default,this.setState({component:r});case 5:case"end":return n.stop()}}),n,this)}))),function(){return r.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?b.a.createElement(e,this.props):b.a.createElement(E.Skeleton,null)}}]),t}(m.Component)}},176:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),c=t(19),i=t.n(c),a=t(37),u=t(31),s=t(42),d=t(122),l=t(164);i.a.render(o.a.createElement(u.Provider,{store:Object(s.init)().getStore()},o.a.createElement(a.BrowserRouter,{basename:Object(l.getBaseName)(window.location.pathname,1)},o.a.createElement(d.default,null))),document.getElementById("root"))},195:function(e,n,t){var r=t(113);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},c=t(5)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(113,(function(){var n=t(113);if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,r=0;for(t in e){if(!n||e[t]!==n[t])return!1;r++}for(t in n)r--;return 0===r}(r.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");c(n)})),e.hot.dispose((function(){c()}))},39:function(e,n,t){"use strict";t.r(n),t.d(n,"GET_EMAIL_SCHEMA",(function(){return i})),t.d(n,"SAVE_EMAIL_SCHEMA",(function(){return a})),t.d(n,"ACTION_TYPES",(function(){return u}));var r=t(16),o=t.n(r);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var i="@@EMAIL/GET_SCHEMA",a="@@EMAIL/SAVE_VALUES",u=["_PENDING","_FULFILLED","_REJECTED"].reduce((function(e,n){var t;return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,{},(t={},o()(t,"".concat(i).concat(n),i),o()(t,"".concat(a).concat(n),a),t))}),{GET_EMAIL_SCHEMA:i,SAVE_EMAIL_SCHEMA:a})},42:function(e,n,t){"use strict";t.r(n),t.d(n,"init",(function(){return s})),t.d(n,"getStore",(function(){return d})),t.d(n,"register",(function(){return l}));var r=t(59),o=t.n(r),c=t(166),i=t(124);t.d(n,"emailPreferences",(function(){return i.default}));var a,u=t(32);function s(){if(a)throw new Error("store already initialized");for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return a=new o.a({},[c.a,Object(u.notificationsMiddleware)({autoDismiss:!0})].concat(n))}function d(){return a.getStore()}function l(){var e;return(e=a).register.apply(e,arguments)}}});
//# sourceMappingURL=App.js.map