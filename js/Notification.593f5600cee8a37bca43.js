"use strict";(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[741],{45410:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var r=n(87462),a=n(45987),s=n(93433),c=n(4942),i=n(15861),o=n(87757),u=n.n(o),l=n(77865),f=n.n(l),p=n(86350),m=n(48716),d=n(39173),b=n(334),h=n(57849),v=n(41387),E=n(81797),y=n(67850),Z=n(74209),O=n(62176),g=n(61084),w=n(20679),N=n(17812),P=n(17814),j=n(83215),k=["unsubscribe"];function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const C=function(){var e,t=(0,b.useParams)().bundleName,n=(0,g.useDispatch)(),o=(0,g.useSelector)((function(e){return e.notificationPreferences}));(0,l.useEffect)((function(){(0,N.z2)(N.qS)}),[]),(0,l.useEffect)((function(){(0,i.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:t&&n((0,w.ux)({bundleName:t}));case 3:case"end":return e.stop()}}),e)})))()}),[t]);var x=(0,l.useMemo)((function(){if(null!=o&&o.loaded){var e=S({},o.schema);return e.fields?(e.fields=(0,s.Z)(e.fields),e.fields[0].sections=(0,s.Z)(e.fields[0].sections),e.fields[0].sections.push({fields:P})):e.fields=[],{isLoaded:!0,schema:e}}return{isLoaded:!1,schema:[]}}),[o]),C=x.isLoaded,_=x.schema,T=(0,l.useCallback)(function(){var e=(0,i.Z)(u().mark((function e(r){var s,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.unsubscribe,s=(0,a.Z)(r,k),c=(0,w.G1)({bundleName:t,values:s}),n(c),e.prev=3,e.next=6,c.payload;case 6:n((0,j.wN)({dismissable:!1,variant:"success",title:"Notification preferences successfully saved"})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),n((0,j.wN)({dismissable:!1,variant:"danger",title:"Notification preferences unsuccessfully saved"}));case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return f().createElement(f().Fragment,null,f().createElement(m.Z,null,f().createElement(d.Z,{title:"Notification Insights"})),f().createElement(p.Z,{className:"pref-notification"},f().createElement(h.Stack,{hasGutter:!0},f().createElement(h.StackItem,null,f().createElement(h.Card,{ouiaId:"user-pref-notification-subscriptions-card"},f().createElement(h.CardHeader,{className:"pf-u-pb-0"},f().createElement(h.TextContent,null,f().createElement(h.Text,{component:h.TextVariants.h2},"Notifications"),f().createElement(h.Text,{component:h.TextVariants.p},"Select the notifications you want to receive."))),f().createElement(h.CardBody,{className:"pref-notification_form"},C?f().createElement(O.Z,{componentMapper:S(S({},v.ZP),{},(e={},(0,c.Z)(e,E.L5,E.eU),(0,c.Z)(e,E.gI,E.aN),(0,c.Z)(e,E.GZ,E.RN),e)),FormTemplate:function(e){return f().createElement(y.ZP,(0,r.Z)({},e,{FormButtons:Z.Z}))},schema:_,onSubmit:T}):f().createElement(h.Bullseye,null,f().createElement(h.Spinner,null))))))))}}}]);