(window.webpackJsonp=window.webpackJsonp||[]).push([[1,2],{245:function(e,t,r){"use strict";var n=r(303),s=r(351),o=r(352),c=!!n.create().defaults.headers;function a(e,t){for(var r=e.length,n=0;n<r;n++){var s=e[n];if(t(s))return s}}function i(e){return"[object Function]"===toString.call(e)}function u(e){return null!==e&&"object"==typeof e}function l(e,t){return e?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):t}function f(e,t){return("/"===e[0]?e.substr(1):e)===("/"===t[0]?t.substr(1):t)}function p(e,t,r,n){return["delete","get","head","options"].indexOf(e.toLowerCase())>=0?d(r,n?n.params:void 0):function(e,t){if(void 0===t)return!0;var r;try{r=JSON.parse(e)}catch(e){}return d(r||e,t)}(t,n)}function d(e,t){return void 0===t||("function"==typeof t.asymmetricMatch?t.asymmetricMatch(e):s(e,t))}function h(e,t,r,n){if(!c)return r;var s=new Error(e);return s.isAxiosError=!0,s.config=t,void 0!==r&&(s.response=r),void 0!==n&&(s.code=n),s}e.exports={find:a,findHandler:function(e,t,r,n,s,o,c){return a(e[t.toLowerCase()],(function(e){return"string"==typeof e[0]?(f(r,e[0])||f(l(c,r),e[0]))&&p(t,n,s,e[1])&&d(o,e[2]):e[0]instanceof RegExp?(e[0].test(r)||e[0].test(l(c,r)))&&p(t,n,s,e[1])&&d(o,e[2]):void 0}))},purgeIfReplyOnce:function(e,t){Object.keys(e.handlers).forEach((function(r){var n=e.handlers[r].indexOf(t);n>-1&&e.handlers[r].splice(n,1)}))},settle:function e(t,r,n,s){s>0?setTimeout((function(){e(t,r,n)}),s):n.config&&n.config.validateStatus?n.config.validateStatus(n.status)?t(n):r(h("Request failed with status code "+n.status,n.config,n)):n.status>=200&&n.status<300?t(n):r(n)},isStream:function(e){return u(e)&&i(e.pipe)},isArrayBuffer:function(e){return"[object ArrayBuffer]"===toString.call(e)},isFunction:i,isObjectOrArray:u,isBuffer:o,isEqual:s,createAxiosError:h}},273:function(e,t,r){"use strict";r.r(t),r.d(t,"mock",(function(){return o}));var n=r(231),s=r(349),o=new(r.n(s).a)(n.instance)},349:function(e,t,r){"use strict";var n=r(350),s=r(245),o=["get","post","head","delete","patch","put","options","list"];function c(){return o.reduce((function(e,t){return e[t]=[],e}),{})}function a(){i.call(this),u.call(this)}function i(){this.handlers=c()}function u(){this.history=c()}function l(e,t){a.call(this),e&&(this.axiosInstance=e,this.originalAdapter=e.defaults.adapter,this.delayResponse=t&&t.delayResponse>0?t.delayResponse:null,this.onNoMatch=t&&t.onNoMatch||null,e.defaults.adapter=this.adapter.call(this))}function f(e,t,r){if("any"===e)o.forEach((function(e){t[e].push(r)}));else{var n=function(e,t,r){for(var n=-1,o=0;o<t[e].length;o+=1){var c=t[e][o],a=7===c.length;(c[0]instanceof RegExp&&r[0]instanceof RegExp?String(c[0])===String(r[0]):c[0]===r[0])&&s.isEqual(c[1],r[1])&&s.isEqual(c[2],r[2])&&!a&&(n=o)}return n}(e,t,r);n>-1&&r.length<7?t[e].splice(n,1,r):t[e].push(r)}}l.prototype.adapter=function(){return function(e){var t=this;if(3!==arguments.length)return new Promise((function(r,s){n(t,r,s,e)}));n(t,arguments[0],arguments[1],arguments[2])}.bind(this)},l.prototype.restore=function(){this.axiosInstance&&(this.axiosInstance.defaults.adapter=this.originalAdapter,this.axiosInstance=void 0)},l.prototype.reset=a,l.prototype.resetHandlers=i,l.prototype.resetHistory=u,o.concat("any").forEach((function(e){var t="on"+e.charAt(0).toUpperCase()+e.slice(1);l.prototype[t]=function(t,r,n){var o=this;t=void 0===t?/.*/:t;function c(s,c,a){var i=[t,r,n,s,c,a];return f(e,o.handlers,i),o}function a(s,c,a){var i=[t,r,n,s,c,a,!0];return f(e,o.handlers,i),o}return{reply:c,replyOnce:a,passThrough:function(){var n=[t,r];return f(e,o.handlers,n),o},abortRequest:function(){return c((function(e){var t=s.createAxiosError("Request aborted",e,void 0,"ECONNABORTED");return Promise.reject(t)}))},abortRequestOnce:function(){return a((function(e){var t=s.createAxiosError("Request aborted",e,void 0,"ECONNABORTED");return Promise.reject(t)}))},networkError:function(){return c((function(e){var t=s.createAxiosError("Network Error",e);return Promise.reject(t)}))},networkErrorOnce:function(){return a((function(e){var t=s.createAxiosError("Network Error",e);return Promise.reject(t)}))},timeout:function(){return c((function(e){var t=s.createAxiosError(e.timeoutErrorMessage||"timeout of "+e.timeout+"ms exceeded",e,void 0,"ECONNABORTED");return Promise.reject(t)}))},timeoutOnce:function(){return a((function(e){var t=s.createAxiosError(e.timeoutErrorMessage||"timeout of "+e.timeout+"ms exceeded",e,void 0,"ECONNABORTED");return Promise.reject(t)}))}}}})),e.exports=l,e.exports.default=l},350:function(e,t,r){"use strict";var n=r(245);function s(e,t){return{status:e[0],data:(r=e[1],n.isArrayBuffer(r)||n.isBuffer(r)||n.isStream(r)?r:n.isObjectOrArray(r)?JSON.parse(JSON.stringify(r)):r),headers:e[2],config:t,request:{responseUrl:t.url}};var r}e.exports=function(e,t,r,o){var c=o.url;o.baseURL&&o.url.substr(0,o.baseURL.length)===o.baseURL&&(c=o.url.slice(o.baseURL.length)),delete o.adapter,e.history[o.method].push(o);var a=n.findHandler(e.handlers,o.method,c,o.data,o.params,o.headers,o.baseURL);if(a)if(7===a.length&&n.purgeIfReplyOnce(e,a),2===a.length)e.originalAdapter(o).then(t,r);else if("function"!=typeof a[3])n.settle(t,r,s(a.slice(3),o),e.delayResponse);else{var i=a[3](o);"function"!=typeof i.then?n.settle(t,r,s(i,o),e.delayResponse):i.then((function(c){c.config&&c.status?n.settle(t,r,s([c.status,c.data,c.headers],c.config),0):n.settle(t,r,s(c,o),e.delayResponse)}),(function(t){e.delayResponse>0?setTimeout((function(){r(t)}),e.delayResponse):r(t)}))}else switch(e.onNoMatch){case"passthrough":e.originalAdapter(o).then(t,r);break;default:n.settle(t,r,{status:404,config:o},e.delayResponse)}}},351:function(e,t,r){"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,s,o;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(s=n;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(o=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(s=n;0!=s--;)if(!Object.prototype.hasOwnProperty.call(r,o[s]))return!1;for(s=n;0!=s--;){var c=o[s];if(!e(t[c],r[c]))return!1}return!0}return t!=t&&r!=r}},352:function(e,t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},469:function(e,t,r){"use strict";r.r(t),function(e){var t=r(20),n=r.n(t),s=r(26),o=r.n(s),c=r(257),a=r(243),i=r.n(a),u=r(253),l=r(254),f=r(273);describe("getSchema",(function(){it("should return loader",(function(){var e=Object(u.getSchema)();expect(e).toMatchObject(l.loaderField)})),it("should return loader if not loaded",(function(){var e=Object(u.getSchema)({loaded:!1});expect(e).toMatchObject(l.loaderField)})),it("should return schema",(function(){var e={fields:[]},t=Object(u.getSchema)({loaded:!0,schema:e});expect(t).toMatchObject(e)}))})),describe("getSection",(function(){it("should return visible schema",(function(){var e=Object(u.getSection)("first",{isVisible:!0});expect(e).toMatchObject({name:"first",fields:l.loaderField})})),it("should return visible schema from store",(function(){var e={fields:[]},t=Object(u.getSection)("first",{isVisible:!0,title:"Some title"},{loaded:!0,schema:e});expect(t).toMatchObject({label:"Some title",name:"first",fields:e})})),it("should return loader",(function(){var e=Object(u.getSection)(),t=Object(c.mount)(e.label);expect(i()(t)).toMatchSnapshot(),expect(e).toMatchObject({fields:l.loaderField})})),it("should call success function",(function(e){var t=jest.fn(),r=Object(u.getSection)("first",{isVisible:!1},{},t);expect(r).toMatchObject({name:"first",fields:l.loaderField}),setTimeout((function(){expect(t).toHaveBeenCalled(),e()}))}))})),describe("calculatePermissions",(function(){it("should check visibility of one function",o()(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.calculatePermissions)({method:"something"});case 2:t=e.sent,expect(t).toBe(!1);case 4:case"end":return e.stop()}}),e)})))),it("should check visibility of array of functions",o()(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.calculatePermissions)([{method:"something"},{method:"something",args:[!0]}]);case 2:t=e.sent,expect(t).toBe(!1);case 4:case"end":return e.stop()}}),e)})))),it("should calculate visible for one function",o()(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.calculatePermissions)([{method:"something",args:[!0]}]);case 2:t=e.sent,expect(t).toBe(!0);case 4:case"end":return e.stop()}}),e)}))))})),describe("calculateEmailConfig",(function(){it("should not throw error",o()(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.calculateEmailConfig)();case 2:t=e.sent,expect(t).toMatchObject({});case 4:case"end":return e.stop()}}),e)})))),it("should calculate schema with permissions - false",o()(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.mock.onGet("/api*").reply(200,{}),t=Object(u.calculateEmailConfig)({"email-preference":{test:{permissions:{method:"something"}}}}),e.t0=expect,e.next=5,t.test.isVisible;case 5:e.t1=e.sent,(0,e.t0)(e.t1).toBe(!1);case 7:case"end":return e.stop()}}),e)})))),it("should calculate schema with permissions - true",o()(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.mock.onGet("/api/test/v1/user-config/email-preference").reply(200,{}),t=Object(u.calculateEmailConfig)({"email-preference":{test:{permissions:{method:"something",args:[!0]}}}}),e.t0=expect,e.next=5,t.test.isVisible;case 5:e.t1=e.sent,(0,e.t0)(e.t1).toBe(!0);case 7:case"end":return e.stop()}}),e)})))),it("should request localFile",(function(t){f.mock.onGet("/api/test/v1/user-config/email-preference").reply(200,{});var r=jest.fn();Object(u.calculateEmailConfig)({"email-preference":{test:{}}},r),e((function(){expect(r).toHaveBeenCalled(),expect(r.mock.calls[0][0]).toMatchObject({meta:{appName:"test"}}),t()}))})),it("should request localFile",(function(t){var r=jest.fn();Object(u.calculateEmailConfig)({"email-preference":{test:{localFile:"data/general.json"}}},r),e((function(){expect(r).toHaveBeenCalled(),expect(r.mock.calls[0][0]).toMatchObject({payload:{},meta:{appName:"test"}}),t()}))}))})),describe("concatApps",(function(){it("should concat no app",(function(){var e=Object(u.concatApps)();expect(e).toBe("")})),it("should concat one app",(function(){var e=Object(u.concatApps)(["one"]);expect(e).toBe("one")})),it("should concat two apps",(function(){var e=Object(u.concatApps)(["one","two"]);expect(e).toBe("one and two")})),it("should concat multiple apps",(function(){var e=Object(u.concatApps)(["one","two","three"]);expect(e).toBe("one, two and three")}))})),describe("distributeSuccessError",(function(){var e,t={promise:Promise.resolve(3)};try{e={promise:new Promise((function(e,t){return setTimeout(t,100,"foo")}))}}catch(e){}it("should not fail with empty",o()(n.a.mark((function e(){var t,r,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.distributeSuccessError)();case 2:t=e.sent,r=t.success,s=t.error,expect(r.length).toBe(0),expect(s.length).toBe(0);case 7:case"end":return e.stop()}}),e)})))),it("should not fail with false",o()(n.a.mark((function e(){var t,r,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.distributeSuccessError)([!1]);case 2:t=e.sent,r=t.success,s=t.error,expect(r.length).toBe(0),expect(s.length).toBe(1);case 7:case"end":return e.stop()}}),e)})))),it("should have one success and error",o()(n.a.mark((function r(){var s,o,c;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(u.distributeSuccessError)([t,e]);case 2:s=r.sent,o=s.success,c=s.error,expect(o.length).toBe(1),expect(c.length).toBe(1);case 7:case"end":return r.stop()}}),r)})))),it("should have 2 successes and no error",o()(n.a.mark((function e(){var r,s,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.distributeSuccessError)([t,t]);case 2:r=e.sent,s=r.success,o=r.error,expect(s.length).toBe(2),expect(o.length).toBe(0);case 7:case"end":return e.stop()}}),e)})))),it("should have 2 errors and no success",o()(n.a.mark((function t(){var r,s,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.distributeSuccessError)([e,e]);case 2:r=t.sent,s=r.success,o=r.error,expect(s.length).toBe(0),expect(o.length).toBe(2);case 7:case"end":return t.stop()}}),t)}))))})),describe("dispatchMessages",(function(){it("should not fail with no messages",(function(){var e=jest.fn();Object(u.dispatchMessages)(),expect(e).not.toHaveBeenCalled()})),it("should not fail with no messages",(function(){var e=jest.fn();Object(u.dispatchMessages)(e),expect(e).not.toHaveBeenCalled()})),it("should dispatch one success",(function(){var e=jest.fn();Object(u.dispatchMessages)(e,["some","message","multiple"]),expect(e).toHaveBeenCalled(),expect(e.mock.calls[0][0]).toMatchObject({payload:{dismissable:!1,title:"Preferences successfully saved",variant:"success"}})})),it("should dispatch one danger",(function(){var e=jest.fn();Object(u.dispatchMessages)(e,[],["some","message","multiple"]),expect(e).toHaveBeenCalled(),expect(e.mock.calls[0][0]).toMatchObject({payload:{dismissable:!1,title:"Preferences unsuccessfully saved",variant:"danger"}})})),it("should dispatch one danger and one error",(function(){var e=jest.fn();Object(u.dispatchMessages)(e,["some","message","multiple"],["some","message","multiple"]),expect(e).toHaveBeenCalled(),expect(e.mock.calls[0][0]).toMatchObject({payload:{dismissable:!1,title:"Email preferences for some, message and multiple successfully saved",variant:"success"}}),expect(e.mock.calls[1][0]).toMatchObject({payload:{dismissable:!1,title:"Email preferences for some, message and multiple unsuccessfully saved",variant:"danger"}})}))}))}.call(this,r(430).setImmediate)}}]);
//# sourceMappingURL=1.js.map