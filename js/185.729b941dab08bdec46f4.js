(self.webpackChunkuser_preferences_frontend=self.webpackChunkuser_preferences_frontend||[]).push([[185],{32185:(e,n,t)=>{"use strict";t.r(n),t.d(n,{ScalprumComponent:()=>P,ScalprumContext:()=>_,ScalprumProvider:()=>A,default:()=>A,useLoadModule:()=>q,useModule:()=>I,useScalprum:()=>L});var r=t(92950),o=t.n(r),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},a=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((r=r.apply(e,n||[])).next())}))},c=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},u="__scalprum__",l=function(e,n,t){void 0===t&&(t=!1);var r=window[u].factories[e];if(r)if(t||((new Date).getTime()-r.expiration.getTime())/1e3>window[u].scalprumOptions.cacheTimeout)delete window[u].factories[e];else{var o=r.modules[n];if(n)return o}},s=function(e,n){window[u].pendingInjections[e]=n},f=function(e,n,t){return window[u].pendingLoading[e+"#"+n]=t,t.then((function(t){return delete window[u].pendingLoading[e+"#"+n],t})).catch((function(){delete window[u].pendingLoading[e+"#"+n]})),t},p=function(e){var n=e.appsConfig,t=e.api,r=e.options,o=i({cacheTimeout:120},r);window[u]=i({appsConfig:n,pendingInjections:{},pendingLoading:{},factories:{},scalprumOptions:o},t)},h=function(e){return window[u].appsConfig[e]},d=function(e,n,t){var r;void 0===t&&(t=!1);var o=void 0;if(!function(e){var n;return 0===(null===(n=document.querySelectorAll('script[src="'+e+'"]'))||void 0===n?void 0:n.length)}(n))return Promise.resolve([e,null===(r=document.querySelectorAll('script[src="'+n+'"]'))||void 0===r?void 0:r[0]]);var i=new Promise((function(r,i){(o=document.createElement("script")).src=n,o.id=e,t?o.onload=function(){r([e,o])}:s(e,(function(){return r([e,o])})),o.onerror=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];console.log(n),t?i([n,o]):s(e,(function(){return i([n,o])}))}}));return void 0!==o&&document.body.appendChild(o),i};function v(e,n,t,r){return a(this,void 0,void 0,(function(){var o,i;return c(this,(function(a){switch(a.label){case 0:return(o=new Headers).append("Pragma","no-cache"),o.append("Cache-Control","no-cache"),o.append("expires","0"),[4,fetch(e,{method:"GET",headers:o})];case 1:return[4,a.sent().json()];case 2:return i=a.sent(),[2,Promise.all(Object.entries(i).filter((function(e){var n=e[0];return!t||n===t})).flatMap(r||function(e){return e[1].entry||e}).map((function(e){return d(n,e,!0)})))]}}))}))}function y(e,n){return a(this,void 0,void 0,(function(){var r,o,a,l;return c(this,(function(c){switch(c.label){case 0:if(void 0===e||0===e.length)throw new Error("Scope can't be undefined or empty");if(void 0===n||0===n.length)throw new Error("Module can't be undefined or empty");return n.startsWith("./")||console.warn("Your module "+n+" doesn't start with './' this indicates an error"),[4,t.I("default")];case 1:return c.sent(),[4,(r=window[e]).init(t.S.default)];case 2:return c.sent(),[4,window[e].get(n)];case 3:return o=c.sent(),window[u].factories[e]||(window[u].factories[e]={}),a={init:r.init,modules:i(i({},window[u].factories[e].modules),(l={},l[n]=o(),l)),expiration:new Date},window[u].factories[e]=a,[2,o()]}}))}))}var w=t(18446),m=t.n(w);const b=function(e){var n=e.error,t=e.errorInfo;return o().createElement("div",null,o().createElement("h2",null,"Error loading component"),(null==n?void 0:n.message)&&o().createElement("p",null,n.message),(null==t?void 0:t.componentStack)?o().createElement("pre",null,null==t?void 0:t.componentStack):(null==n?void 0:n.stack)&&o().createElement("pre",null,n.stack))};var g=function(){return g=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},g.apply(this,arguments)};function E(e,n,t){var r=this;return void 0===t&&(t=b),function(){return i=r,a=void 0,u=function(){var r,i;return function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,y(e,n)];case 1:return r=a.sent(),[3,3];case 2:return i=a.sent(),r={default:function(e){return o().createElement(t,g({},e,{error:i}))}},[3,3];case 3:return[2,r]}}))},new((c=void 0)||(c=Promise))((function(e,n){function t(e){try{o(u.next(e))}catch(e){n(e)}}function r(e){try{o(u.throw(e))}catch(e){n(e)}}function o(n){var o;n.done?e(n.value):(o=n.value,o instanceof c?o:new c((function(e){e(o)}))).then(t,r)}o((u=u.apply(i,a||[])).next())}));var i,a,c,u}}var k,O=(k=function(e,n){return k=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},k(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}k(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),C=function(){return C=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},C.apply(this,arguments)},S=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},x=function(e){var n=e.fallback,t=void 0===n?"loading":n,i=e.appName,a=e.scope,c=e.module,s=e.ErrorComponent,p=e.processor,y=e.innerRef,w=e.skipCache,m=void 0!==w&&w,b=S(e,["fallback","appName","scope","module","ErrorComponent","processor","innerRef","skipCache"]),g=h(i),k=g.scriptLocation,O=g.manifestLocation,x=(0,r.useReducer)((function(e){return e+1}),0),j=x[0],P=x[1],_=(0,r.useState)(void 0),R=_[0],A=_[1];return(0,r.useEffect)((function(){var e=l(a,c,m),n=!0,t=function(){return n&&A((function(){return function(e){return o().createElement(s,C({},e))}}))},r=function(e,n){return window[u].pendingLoading[e+"#"+n]}(a,c);if(!e&&r)r.finally((function(){P()}));else if(e)try{n&&A((function(){return e.default}))}catch(e){t()}else if(k){var h=d(i,k).then((function(){n&&A((function(){return o().lazy(E(a,c,s))}))})).catch(t);f(a,c,h)}else if(O){var y=v(O,i,a,p).then((function(){n&&A((function(){return o().lazy(E(a,c,s))}))})).catch(t);f(a,c,y)}return function(){n=!1}}),[i,a,m,j]),o().createElement(r.Suspense,{fallback:t},R?o().createElement(R,C({ref:y},b)):t)},j=function(e){function n(n){var t=e.call(this,n)||this;return t.state={hasError:!1},t.selfRepairAttempt=!1,t}return O(n,e),n.getDerivedStateFromError=function(){return{hasError:!0}},n.prototype.shouldComponentUpdate=function(e,n){return this.state.hasError!==n.hasError||!m()(e,this.props)||!m()(n,this.state)},n.prototype.componentDidCatch=function(e,n){!0===this.selfRepairAttempt?(console.error("Scalprum encountered an error!",e.message),this.setState({error:e,errorInfo:n})):(console.warn("Scalprum failed to render component. Attempting to skip module cache."),this.setState({repairAttempt:!0}))},n.prototype.render=function(){var e=this,n=this.props,t=n.ErrorComponent,r=void 0===t?o().createElement(b,C({},this.state)):t,i=S(n,["ErrorComponent"]),a=function(n){return o().cloneElement(r,C(C({},e.state),n))};return this.state.repairAttempt&&!this.selfRepairAttempt?(this.selfRepairAttempt=!0,o().createElement(x,C({},i,{skipCache:!0,ErrorComponent:a}))):this.state.hasError&&this.selfRepairAttempt?o().cloneElement(r,C({},this.state)):o().createElement(x,C({},i,{ErrorComponent:a}))},n.defaultProps={ErrorComponent:o().createElement(b,null)},n}(o().Component),P=o().forwardRef((function(e,n){return o().createElement(j,C({},e,{innerRef:n}))})),_=(0,r.createContext)({initialized:!1,config:{},api:void 0}),R=function(){return R=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},R.apply(this,arguments)};function A(e){var n=e.config,t=e.children,i=e.api,a=(0,r.useRef)(!1),c=(0,r.useState)({initialized:!1,config:{},api:i}),u=c[0],l=c[1];return(0,r.useEffect)((function(){"object"==typeof n&&(p({appsConfig:n,api:i}),l((function(e){return R(R({},e),{initialized:!0,config:n})})),a.current=!0),"function"==typeof n&&Promise.resolve(n()).then((function(e){l((function(n){return R(R({},n),{initialized:!0,config:e})})),p({appsConfig:e,api:i}),a.current=!0}))}),[n]),(0,r.useEffect)((function(){a.current&&l((function(e){return R(R({},e),{api:i})}))}),[i]),o().createElement(_.Provider,{value:u},t)}function L(e){var n=(0,r.useContext)(_);return"function"==typeof e?e(n):n}var T=function(){return T=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},T.apply(this,arguments)},z=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((r=r.apply(e,n||[])).next())}))},M=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function I(e,n,t,o){var i=this;void 0===o&&(o={});var a=T({skipCache:!1},o),c=(0,r.useState)(t),u=c[0],s=c[1],f=(0,r.useCallback)((function(){return z(i,void 0,void 0,(function(){var t,r;return M(this,(function(o){switch(o.label){case 0:if(t=l(e,n,a.skipCache))return[3,5];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,y(e,n)];case 2:return r=o.sent(),[3,4];case 3:return o.sent(),console.error('Module not initialized! Module "'+n+'" was not found in "'+e+'" webpack scope. Make sure the remote container is loaded?'),[3,4];case 4:return[3,6];case 5:r=t,o.label=6;case 6:return s((function(){return r})),[2]}}))}))}),[e,n]);return(0,r.useEffect)((function(){f()}),[e,n]),u}var G=function(){return G=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},G.apply(this,arguments)},D=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((r=r.apply(e,n||[])).next())}))},N=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};function q(e,n,t){var o=this,i=e.appName,a=e.scope,c=e.module,u=e.processor;void 0===t&&(t={});var s=G({skipCache:!1},t),f=h(i||a),p=f.scriptLocation,w=f.manifestLocation,m=(0,r.useState)(n),b=m[0],g=m[1],E=(0,r.useState)(),k=E[0],O=E[1],C=l(a,c,s.skipCache),S=(0,r.useRef)(!0);return(0,r.useEffect)((function(){if(S.current)if(C)try{y(a,c).then((function(e){g((function(){return e}))}))}catch(e){O((function(){return e}))}else p?d(i||a,p).then((function(){return D(o,void 0,void 0,(function(){var e;return N(this,(function(n){switch(n.label){case 0:return[4,y(a,c)];case 1:return e=n.sent(),g((function(){return e})),[2]}}))}))})).catch((function(e){O((function(){return e}))})):w&&v(w,i||a,a,u).then((function(){return D(o,void 0,void 0,(function(){var e;return N(this,(function(n){switch(n.label){case 0:return[4,y(a,c)];case 1:return e=n.sent(),g((function(){return e})),[2]}}))}))})).catch((function(e){O((function(){return e}))}));return function(){S.current=!1}}),[i,a,C,s.skipCache]),[b,k]}},18446:(e,n,t)=>{var r=t(90939);e.exports=function(e,n){return r(e,n)}}}]);