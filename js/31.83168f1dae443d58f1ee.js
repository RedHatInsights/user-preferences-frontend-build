"use strict";(self.webpackChunkuser_preferences_frontend=self.webpackChunkuser_preferences_frontend||[]).push([[31],{40591:(e,t,r)=>{r.r(t);var n=r(92950),c=r.n(n),o=r(12181),a=r.n(o),u=r(334),i=r(28216),s=r(15861),l=r(87757),f=r.n(l);const p=JSON.parse('{"_j":{"N":"/notifications"}}');var O=(0,n.lazy)((function(){return Promise.all([r.e(69),r.e(135),r.e(308),r.e(623)]).then(r.bind(r,24402))})),E=function(){return c().createElement(n.Suspense,{fallback:n.Fragment},c().createElement(u.Switch,null,c().createElement(u.Route,{path:p._j.N,component:O,rootClass:"notifications"}),c().createElement(u.Redirect,{path:"*",to:p._j.N,push:!0})))},b=r(51344),m=r(55140);const y=function(e){var t=(0,m.Z)(),r=t.auth,o=t.updateDocumentTitle;return null==o||o("User Preferences"),(0,n.useEffect)((function(){(0,s.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getUser();case 2:e.sent||(location.href="./");case 4:case"end":return e.stop()}}),e)})))()}),[]),c().createElement(n.Fragment,null,c().createElement(b.ZP,null),c().createElement(E,{childProps:e}))};var d,j=r(35240),g=r(9036),P=r(57283),v=r.n(P),_=r(84885),I=r(83215),h=r(49661),N=r.n(h),w=r(45987),S=r(4942),Z=r(36580),A=["payload"];function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,S.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=function(e,t){var r=t.payload,n=t.meta;return D(D({},e),{},(0,S.Z)({},n.appName,{schema:r||[],loaded:!0}))};const G=(d={},(0,S.Z)(d,Z.u5,C),(0,S.Z)(d,"".concat(Z.u5,"_FULFILLED"),C),(0,S.Z)(d,"".concat(Z.u5,"_PENDING"),(function(e,t){var r=t.meta;return D(D({},e),{},(0,S.Z)({},r.appName,{schema:[],loaded:!1}))})),(0,S.Z)(d,"".concat(Z.u5,"_REJECTED"),(function(e,t){t.payload;var r=(0,w.Z)(t,A);return C(e,r)})),d);var L,F=["payload"];function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){(0,S.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R=function(e,t){var r=t.payload,n=t.meta;return k(k({},e),{},{bundleName:n.bundleName,schema:r||{},loaded:!0})};const H=(L={},(0,S.Z)(L,Z.xO,(function(e,t){var r=t.payload;return k(k({},e),{},{bundles:r})})),(0,S.Z)(L,Z.Gf,R),(0,S.Z)(L,"".concat(Z.Gf,"_FULFILLED"),R),(0,S.Z)(L,"".concat(Z.Gf,"_PENDING"),(function(e,t){var r=t.meta;return k(k({},e),{},{bundleName:r.bundleName,schema:{},loaded:!1})})),(0,S.Z)(L,"".concat(Z.Gf,"_REJECTED"),(function(e,t){t.payload;var r=(0,w.Z)(t,F);return R(e,r)})),L);var U=(0,n.createContext)({getRegistry:function(){}}),x=[v(),(0,_.ZP)({errorTitleKey:["statusText","message","errors[0].status"],errorDescriptionKey:["errors[0].detail","errors","stack"]}),N()].filter((function(e){return"function"==typeof e})),V=new g.ZP({},x);V.register({emailReducer:(0,g.Gg)(G,{}),notificationsReducer:(0,g.Gg)(H,{}),notifications:I.ee});const J=function(){return c().createElement(U.Provider,{value:{getRegistry:function(){return V}}},c().createElement(i.zt,{store:V.getStore()},c().createElement(u.BrowserRouter,{basename:(0,j.eb)(window.location.pathname)},c().createElement(y,null))))};a().render(c().createElement(J,null),document.getElementById("root"))},36580:(e,t,r)=>{r.d(t,{Gf:()=>i,aI:()=>f,u5:()=>a,xO:()=>s});var n=r(4942);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a="@@EMAIL/GET_SCHEMA",u="@@EMAIL/SAVE_VALUES",i="@@NOTIFICATION/GET_SCHEMA",s="@@NOTIFICATION/GET_SCHEMAS",l="@@NOTIFICATION/SAVE_VALUES",f=["_PENDING","_FULFILLED","_REJECTED"].reduce((function(e,t){var r;return o(o({},e),(r={},(0,n.Z)(r,"".concat(a).concat(t),a),(0,n.Z)(r,"".concat(u).concat(t),u),(0,n.Z)(r,"".concat(i).concat(t),i),(0,n.Z)(r,"".concat(l).concat(t),l),r))}),{GET_EMAIL_SCHEMA:a,SAVE_EMAIL_SCHEMA:u,GET_NOTIFICATION_SCHEMA:i,GET_NOTIFICATION_SCHEMAS:s,SAVE_NOTIFICATION_SCHEMA:l})}}]);
//# sourceMappingURL=../sourcemaps/31.c4dcfa73486d2547088b18bc6fd37fe5.js.map