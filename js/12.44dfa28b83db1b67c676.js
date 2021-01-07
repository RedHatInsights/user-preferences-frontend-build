(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{754:function(e,t,c){"use strict";c.r(t),function(e){var t=c(93),s=c.n(t),a=c(119),n=c.n(a),o=c(581),r=c(569),i=c.n(r),l=c(577),u=c(578),p=c(647);describe("getSchema",(function(){it("should return loader",(function(){var e=Object(l.getSchema)();expect(e).toMatchObject(u.loaderField)})),it("should return loader if not loaded",(function(){var e=Object(l.getSchema)({loaded:!1});expect(e).toMatchObject(u.loaderField)})),it("should return schema",(function(){var e={fields:[]},t=Object(l.getSchema)({loaded:!0,schema:e});expect(t).toMatchObject(e)}))})),describe("getSection",(function(){it("should return visible schema",(function(){var e=Object(l.getSection)("first",{isVisible:!0});expect(e).toMatchObject({name:"first",fields:u.loaderField})})),it("should return visible schema from store",(function(){var e={fields:[]},t=Object(l.getSection)("first",{isVisible:!0,title:"Some title"},{loaded:!0,schema:e});expect(t).toMatchObject({label:"Some title",name:"first",fields:e})})),it("should return loader",(function(){var e=Object(l.getSection)(),t=Object(o.mount)(e.label);expect(i()(t)).toMatchSnapshot(),expect(e).toMatchObject({fields:u.loaderField})})),it("should call success function",(function(e){var t=jest.fn(),c=Object(l.getSection)("first",{isVisible:!1},{},t);expect(c).toMatchObject({name:"first",fields:u.loaderField}),setTimeout((function(){expect(t).toHaveBeenCalled(),e()}))}))})),describe("calculatePermissions",(function(){it("should check visibility of one function",n()(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.calculatePermissions)({method:"something"});case 2:t=e.sent,expect(t).toBe(!1);case 4:case"end":return e.stop()}}),e)})))),it("should check visibility of array of functions",n()(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.calculatePermissions)([{method:"something"},{method:"something",args:[!0]}]);case 2:t=e.sent,expect(t).toBe(!1);case 4:case"end":return e.stop()}}),e)})))),it("should calculate visible for one function",n()(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.calculatePermissions)([{method:"something",args:[!0]}]);case 2:t=e.sent,expect(t).toBe(!0);case 4:case"end":return e.stop()}}),e)}))))})),describe("calculateEmailConfig",(function(){it("should not throw error",n()(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.calculateEmailConfig)();case 2:t=e.sent,expect(t).toMatchObject({});case 4:case"end":return e.stop()}}),e)})))),it("should calculate schema with permissions - false",n()(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.mock.onGet("/api*").reply(200,{}),t=Object(l.calculateEmailConfig)({"email-preference":{test:{permissions:{method:"something"}}}}),e.t0=expect,e.next=5,t.test.isVisible;case 5:e.t1=e.sent,(0,e.t0)(e.t1).toBe(!1);case 7:case"end":return e.stop()}}),e)})))),it("should calculate schema with permissions - true",n()(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.mock.onGet("/api/test/v1/user-config/email-preference").reply(200,{}),t=Object(l.calculateEmailConfig)({"email-preference":{test:{permissions:{method:"something",args:[!0]}}}}),e.t0=expect,e.next=5,t.test.isVisible;case 5:e.t1=e.sent,(0,e.t0)(e.t1).toBe(!0);case 7:case"end":return e.stop()}}),e)})))),it("should request localFile",(function(t){p.mock.onGet("/api/test/v1/user-config/email-preference").reply(200,{});var c=jest.fn();Object(l.calculateEmailConfig)({"email-preference":{test:{}}},c),e((function(){expect(c).toHaveBeenCalled(),expect(c.mock.calls[0][0]).toMatchObject({meta:{appName:"test"}}),t()}))})),it("should request localFile",(function(t){var c=jest.fn();Object(l.calculateEmailConfig)({"email-preference":{test:{localFile:"data/general.json"}}},c),e((function(){expect(c).toHaveBeenCalled(),expect(c.mock.calls[0][0]).toMatchObject({payload:{},meta:{appName:"test"}}),t()}))}))})),describe("concatApps",(function(){it("should concat no app",(function(){var e=Object(l.concatApps)();expect(e).toBe("")})),it("should concat one app",(function(){var e=Object(l.concatApps)(["one"]);expect(e).toBe("one")})),it("should concat two apps",(function(){var e=Object(l.concatApps)(["one","two"]);expect(e).toBe("one and two")})),it("should concat multiple apps",(function(){var e=Object(l.concatApps)(["one","two","three"]);expect(e).toBe("one, two and three")}))})),describe("distributeSuccessError",(function(){var e,t={promise:Promise.resolve(3)};try{e={promise:new Promise((function(e,t){return setTimeout(t,100,"foo")}))}}catch(e){}it("should not fail with empty",n()(s.a.mark((function e(){var t,c,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.distributeSuccessError)();case 2:t=e.sent,c=t.success,a=t.error,expect(c.length).toBe(0),expect(a.length).toBe(0);case 7:case"end":return e.stop()}}),e)})))),it("should not fail with false",n()(s.a.mark((function e(){var t,c,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.distributeSuccessError)([!1]);case 2:t=e.sent,c=t.success,a=t.error,expect(c.length).toBe(0),expect(a.length).toBe(1);case 7:case"end":return e.stop()}}),e)})))),it("should have one success and error",n()(s.a.mark((function c(){var a,n,o;return s.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(l.distributeSuccessError)([t,e]);case 2:a=c.sent,n=a.success,o=a.error,expect(n.length).toBe(1),expect(o.length).toBe(1);case 7:case"end":return c.stop()}}),c)})))),it("should have 2 successes and no error",n()(s.a.mark((function e(){var c,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.distributeSuccessError)([t,t]);case 2:c=e.sent,a=c.success,n=c.error,expect(a.length).toBe(2),expect(n.length).toBe(0);case 7:case"end":return e.stop()}}),e)})))),it("should have 2 errors and no success",n()(s.a.mark((function t(){var c,a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.distributeSuccessError)([e,e]);case 2:c=t.sent,a=c.success,n=c.error,expect(a.length).toBe(0),expect(n.length).toBe(2);case 7:case"end":return t.stop()}}),t)}))))})),describe("dispatchMessages",(function(){it("should not fail with no messages",(function(){var e=jest.fn();Object(l.dispatchMessages)(),expect(e).not.toHaveBeenCalled()})),it("should not fail with no messages",(function(){var e=jest.fn();Object(l.dispatchMessages)(e),expect(e).not.toHaveBeenCalled()})),it("should dispatch one success",(function(){var e=jest.fn();Object(l.dispatchMessages)(e,["some","message","multiple"]),expect(e).toHaveBeenCalled(),expect(e.mock.calls[0][0]).toMatchObject({payload:{dismissable:!1,title:"Preferences successfully saved",variant:"success"}})})),it("should dispatch one danger",(function(){var e=jest.fn();Object(l.dispatchMessages)(e,[],["some","message","multiple"]),expect(e).toHaveBeenCalled(),expect(e.mock.calls[0][0]).toMatchObject({payload:{dismissable:!1,title:"Preferences unsuccessfully saved",variant:"danger"}})})),it("should dispatch one danger and one error",(function(){var e=jest.fn();Object(l.dispatchMessages)(e,["some","message","multiple"],["some","message","multiple"]),expect(e).toHaveBeenCalled(),expect(e.mock.calls[0][0]).toMatchObject({payload:{dismissable:!1,title:"Email preferences for some, message and multiple successfully saved",variant:"success"}}),expect(e.mock.calls[1][0]).toMatchObject({payload:{dismissable:!1,title:"Email preferences for some, message and multiple unsuccessfully saved",variant:"danger"}})}))}))}.call(this,c(715).setImmediate)}}]);
//# sourceMappingURL=12.44dfa28b83db1b67c676.js.map