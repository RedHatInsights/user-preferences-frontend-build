"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[812],{99621:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(15861),o=n(87757),c=n.n(o),a=n(77865),i=n.n(a),s=n(334);const p=JSON.parse('{"_j":{"D":"/email","t":"/notifications/:bundleName"}}');var u=(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(807),n.e(542)]).then(n.bind(n,41832))})),l=(0,a.lazy)((function(){return Promise.all([n.e(410),n.e(252),n.e(736),n.e(807),n.e(814),n.e(741)]).then(n.bind(n,45410))})),f=function(){return i().createElement(a.Suspense,{fallback:a.Fragment},i().createElement(s.Switch,null,i().createElement(s.Route,{path:p._j.D,component:u,rootClass:"email"}),i().createElement(s.Route,{path:p._j.t,component:l,rootClass:"notification"}),i().createElement(s.Redirect,{path:"*",to:p._j.D,push:!0})))},O=n(17812),E=n(83215),b=n(51344),d=n(25091);const m=function(e){var t=(0,s.useHistory)();return(0,a.useEffect)((function(){(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:e.sent||(location.href="./");case 4:case"end":return e.stop()}}),e)})))(),(0,O.z2)({notifications:E.ee}),insights.chrome.init(),insights.chrome.identifyApp("email");var e=insights.chrome.on("APP_NAVIGATION",(function(e){var n=Object.keys(null==d?void 0:d["notification-preference"]);t.push("".concat(n.includes(e.navId)?"/notifications":"","/").concat(e.navId))}));return function(){return e()}}),[]),i().createElement(a.Fragment,null,i().createElement(b.ZP,null),i().createElement(f,{childProps:e}))}},58061:(e,t,n)=>{n.d(t,{aI:()=>u});var r=n(4942);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a="@@EMAIL/GET_SCHEMA",i="@@EMAIL/SAVE_VALUES",s="@@NOTIFICATION/GET_SCHEMA",p="@@NOTIFICATION/SAVE_VALUES",u=["_PENDING","_FULFILLED","_REJECTED"].reduce((function(e,t){var n;return c(c({},e),(n={},(0,r.Z)(n,"".concat(a).concat(t),a),(0,r.Z)(n,"".concat(i).concat(t),i),(0,r.Z)(n,"".concat(s).concat(t),s),(0,r.Z)(n,"".concat(p).concat(t),p),n))}),{GET_EMAIL_SCHEMA:a,SAVE_EMAIL_SCHEMA:i,GET_NOTIFICATION_SCHEMA:s,SAVE_NOTIFICATION_SCHEMA:p})},17812:(e,t,n)=>{n.d(t,{jP:()=>b,S1:()=>j,qS:()=>_,z2:()=>P});var r,o=n(93433),c=n(18546),a=n(57283),i=n.n(a),s=n(45987),p=n(4942),u=n(58061),l=["payload"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e,t){var n=t.payload,r=t.meta;return O(O({},e),{},(0,p.Z)({},r.appName,{schema:n||[],loaded:!0}))};const b={emailPreferences:(0,c.Gg)((r={},(0,p.Z)(r,u.aI.GET_EMAIL_SCHEMA,E),(0,p.Z)(r,"".concat(u.aI.GET_EMAIL_SCHEMA,"_FULFILLED"),E),(0,p.Z)(r,"".concat(u.aI.GET_EMAIL_SCHEMA,"_PENDING"),(function(e,t){var n=t.meta;return O(O({},e),{},(0,p.Z)({},n.appName,{schema:[],loaded:!1}))})),(0,p.Z)(r,"".concat(u.aI.GET_EMAIL_SCHEMA,"_REJECTED"),(function(e,t){t.payload;var n=(0,s.Z)(t,l);return E(e,n)})),r),{})};var d,m=["payload"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e,t){var n=t.payload,r=t.meta;return I(I({},e),{},{bundleName:r.bundleName,schema:n||{},loaded:!0})};const _={notificationPreferences:(0,c.Gg)((d={},(0,p.Z)(d,u.aI.GET_NOTIFICATION_SCHEMA,y),(0,p.Z)(d,"".concat(u.aI.GET_NOTIFICATION_SCHEMA,"_FULFILLED"),y),(0,p.Z)(d,"".concat(u.aI.GET_NOTIFICATION_SCHEMA,"_PENDING"),(function(e,t){var n=t.meta;return I(I({},e),{},{bundleName:n.bundleName,schema:{},loaded:!1})})),(0,p.Z)(d,"".concat(u.aI.GET_NOTIFICATION_SCHEMA,"_REJECTED"),(function(e,t){t.payload;var n=(0,s.Z)(t,m);return y(e,n)})),d),{})};var v,A=n(84885);function j(){if(!v){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];v=new c.ZP({},[i(),(0,A.ZP)({autoDismiss:!0})].concat((0,o.Z)(t.filter((function(e){return void 0!==e})))))}return v}function P(){var e;return(e=v).register.apply(e,arguments)}},25091:e=>{e.exports=JSON.parse('{"email-preference":{"advisor":{"title":"Advisor","url":"/user-preferences/","apiName":"insights","permissions":[{"method":"hasLoosePermissions","args":[["insights:*:*","insights:*:read","advisor:*:*","advisor:*:read","advisor:rules:read"]]}]},"unsubscribe":{"title":"","localFile":"data/unsubscribe.json"}},"notification-preference":{"application-services":{"title":"Application Services","application":"notifications","resourceType":"notification-preference?bundleName=application-services"},"openshift":{"title":"OpenShift","application":"notifications","resourceType":"notification-preference?bundleName=openshift"},"rhel":{"title":"Red Hat Enterprise Linux","application":"notifications","resourceType":"notification-preference?bundleName=rhel"},"console":{"title":"Console","application":"notifications","resourceType":"notification-preference?bundleName=console"}}}')}}]);