"use strict";(self.webpackChunkuser_preferences_frontend=self.webpackChunkuser_preferences_frontend||[]).push([[759],{30273:(e,t,r)=>{r.d(t,{Z:()=>n});const n={notifications:{link:"/notifications",route:"notifications/*"}}},3318:(e,t,r)=>{r.r(t);var n=r(92950),o=r.n(n),c=r(12181),a=r.n(c),i=r(50925),s=r(28216),l=r(51344),u=r(55140),p=r(30273),f=r(49602);const O=(0,n.lazy)((()=>Promise.all([r.e(697),r.e(228),r.e(961),r.e(837),r.e(636),r.e(396),r.e(8)]).then(r.bind(r,12299)))),b=[{path:p.Z.notifications.route,element:O}],E=(e=[])=>e.map((({path:e,element:t,childRoutes:r,elementProps:n})=>o().createElement(i.Route,{key:e,path:e,element:o().createElement(t,{...n})},E(r)))),d=()=>{const e=(0,n.useMemo)((()=>E(b)),[b]);return o().createElement(n.Suspense,{fallback:n.Fragment},o().createElement(i.Routes,null,e,o().createElement(i.Route,{path:"*",element:o().createElement(f.InvalidObject,null)})))},m=()=>{const{auth:e,updateDocumentTitle:t}=(0,u.Z)();return t?.("User Preferences"),(0,n.useEffect)((()=>{(async()=>{await e.getUser()||(location.href="./")})()}),[]),o().createElement(n.Fragment,null,o().createElement(l.ZP,null),o().createElement(d,null))};var y,g=r(35240),j=r(9036),v=r(57283),P=r.n(v),h=r(84885),Z=r(83215),w=r(49661),I=r.n(w),_=r(45987),D=r(4942),S=r(36580),A=r(25091),N=["payload"];function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,D.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=Object.keys(A["email-preference"]).reduce((function(e,t){return C(C({},e),{},(0,D.Z)({},t,{loaded:!1}))}),{}),F=function(e,t){var r=t.payload,n=t.meta;return C(C({},e),{},(0,D.Z)({},n.appName,{schema:r||[],loaded:!0}))};const k=(y={},(0,D.Z)(y,S.u5,F),(0,D.Z)(y,"".concat(S.u5,"_FULFILLED"),F),(0,D.Z)(y,"".concat(S.u5,"_PENDING"),(function(e,t){var r=t.meta;return C(C({},e),{},(0,D.Z)({},r.appName,{schema:[],loaded:!1}))})),(0,D.Z)(y,"".concat(S.u5,"_REJECTED"),(function(e,t){t.payload;var r=(0,_.Z)(t,N);return F(e,r)})),y);var R,M=["payload"];function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,D.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var H=function(e,t){var r=t.payload,n=t.meta;return U(U({},e),{},{bundles:(null==r?void 0:r.bundles)||{},meta:n,loaded:!0})};const V=(R={},(0,D.Z)(R,S.rZ,H),(0,D.Z)(R,"".concat(S.rZ,"_FULFILLED"),H),(0,D.Z)(R,"".concat(S.rZ,"_PENDING"),(function(e){return U(U({},e),{},{loaded:!1})})),(0,D.Z)(R,"".concat(S.rZ,"_REJECTED"),(function(e,t){t.payload;var r=(0,_.Z)(t,M);return H(e,r)})),R);var J=(0,n.createContext)({getRegistry:function(){}}),x=[P(),(0,h.ZP)({errorTitleKey:["statusText","message","errors[0].status"],errorDescriptionKey:["errors[0].detail","errors","stack"]}),I()].filter((function(e){return"function"==typeof e})),z=new j.ZP({},x);z.register({emailReducer:(0,j.Gg)(k,L),notificationsReducer:(0,j.Gg)(V,{}),notifications:Z.ee});const B=()=>o().createElement(J.Provider,{value:{getRegistry:()=>z}},o().createElement(s.zt,{store:z.getStore()},o().createElement(i.BrowserRouter,{basename:(0,g.eb)(window.location.pathname)},o().createElement(m,null))));a().render(o().createElement(B,null),document.getElementById("root"))},36580:(e,t,r)=>{r.d(t,{aI:()=>u,rZ:()=>s,u5:()=>a});var n=r(4942);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a="@@EMAIL/GET_SCHEMA",i="@@EMAIL/SAVE_VALUES",s="@@NOTIFICATION/GET_SCHEMA",l="@@NOTIFICATION/SAVE_VALUES",u=["_PENDING","_FULFILLED","_REJECTED"].reduce((function(e,t){var r;return c(c({},e),(r={},(0,n.Z)(r,"".concat(a).concat(t),a),(0,n.Z)(r,"".concat(i).concat(t),i),(0,n.Z)(r,"".concat(s).concat(t),s),(0,n.Z)(r,"".concat(l).concat(t),l),r))}),{GET_EMAIL_SCHEMA:a,SAVE_EMAIL_SCHEMA:i,GET_NOTIFICATIONS_SCHEMA:s,SAVE_NOTIFICATION_SCHEMA:l})},25091:e=>{e.exports=JSON.parse('{"email-preference":{"advisor":{"bundle":"rhel","title":"Advisor","url":"/user-preferences/","apiName":"insights","permissions":[{"method":"hasLoosePermissions","args":[["insights:*:*","insights:*:read","advisor:*:*","advisor:*:read","advisor:rules:read"]]}]},"unsubscribe":{"title":"","localFile":"data/unsubscribe.json"}},"notification-preference":["openshift","rhel","ansible","console","application-services"]}')}}]);