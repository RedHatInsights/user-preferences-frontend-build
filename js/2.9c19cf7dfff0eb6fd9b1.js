(self.webpackChunkinsights_frontend_starter_app=self.webpackChunkinsights_frontend_starter_app||[]).push([[2],{74209:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(87462),i=n(4942),a=n(41609),o=n.n(a),c=n(77865),s=n.n(c),l=n(48880),u=n(76429),p=n(45697),f=n.n(p),d=n(57849),v=function(e){var t=e.dirtyFieldsSinceLastSubmit,n=e.submitSucceeded,r=e.pristine,i=(0,l.default)().reset,a=o()(t)||!n&&r;return s().createElement(d.ActionGroup,null,s().createElement(d.Button,{className:"pref-email__form-button",type:"submit",ouiaId:"user-pref-primary-button",isDisabled:a,variant:"primary"},"Save"),s().createElement(d.Button,{variant:"link",ouiaId:"user-pref-reset-button",isDisabled:a,onClick:function(){return i()}},"Cancel"))};v.propTypes={dirtyFieldsSinceLastSubmit:f().arrayOf(f().shape((0,i.Z)({},f().string,f().oneOfType([f().string,f().number,f().bool])))),submitSucceeded:f().bool,pristine:f().bool};const m=function(e){return s().createElement(u.Z,{subscription:{pristine:!0,submitSucceeded:!0,dirtyFieldsSinceLastSubmit:!0}},(function(t){return s().createElement(v,(0,r.Z)({},t,e))}))}},81797:(e,t,n)=>{"use strict";n.d(t,{GZ:()=>L,L5:()=>T,RN:()=>I,eU:()=>O,gI:()=>_,aN:()=>Z});var r=n(87462),i=n(4942),a=n(45987),o=n(77865),c=n.n(o),s=n(57849),l=n(94184),u=n.n(l),p=n(45697),f=n.n(p),d=n(48880),v=n(41693),m=n(11085),y=["onChange","checked"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=(0,v.Z)(h(h({},e),{},{type:"checkbox"})),n=t.label,i=t.title,o=t.description,l=t.isDanger,p=t.isGlobal,f=t.checkedWarning,b=t.input,g=b.onChange,O=b.checked,E=(0,a.Z)(b,y),P=(0,d.default)();return c().createElement(s.Checkbox,(0,r.Z)({},E,{isChecked:O,id:"descriptive-checkbox-".concat(E.name),onChange:function(){p?P.batch((function(){P.getRegisteredFields().forEach((function(e){"boolean"==typeof P.getFieldState(e).value&&P.change(e,!1)}))})):P.change("unsubscribe.from-all",!1),g.apply(void 0,arguments)},"data-type":"descriptive-checkbox",className:"pref-c-descriptive-checkbox",label:c().createElement("span",{className:u()("pref-c-checkbox-label",{"pref-c-checkbox-label-error":l||p})},n||i),description:c().createElement("div",null,o&&c().createElement("span",{className:"pref-c-checkbox-description"},o),O&&f&&c().createElement("span",{className:"pref-c-checkbox-warning"},c().createElement(m.ExclamationTriangleIcon,null)," ",f))}))};g.propTypes={FieldProvider:f().any,formOptions:f().any,name:f().string,label:f().string,title:f().string,description:f().string,isDanger:f().bool,isGlobal:f().bool},g.defaultProps={name:"",label:"",isDanger:!1};const O=g;var E=n(56455),P=["name","size","FieldProvider","validate","FormSpyProvider","formOptions"],k=function(e){e.name;var t=e.size,n=(e.FieldProvider,e.validate,e.FormSpyProvider,e.formOptions,(0,a.Z)(e,P));return c().createElement("div",n,c().createElement(E.Z,{size:t}))};k.propTypes={FieldProvider:f().any,formOptions:f().any,FormSpyProvider:f().any,validate:f().any,name:f().string,size:f().string},k.defaultProps={name:"",size:"md"};const Z=k;var j=n(15671),N=n(43144),w=n(97326),S=n(60136),F=n(82963),x=n(61120);var C=function(e){(0,S.Z)(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,x.Z)(t);if(n){var i=(0,x.Z)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return(0,F.Z)(this,e)});function a(){var e;(0,j.Z)(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=r.call.apply(r,[this].concat(n)),(0,i.Z)((0,w.Z)(e),"state",{hasError:!1}),e}return(0,N.Z)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:t})}},{key:"render",value:function(){var e=this.props,t=e.fieldsKey,n=e.label,r=e.fields,i=e.formOptions,a=this.state.hasError;return c().createElement(s.DataListItemRow,null,c().createElement(s.DataListItemCells,{dataListCells:[c().createElement(s.DataListCell,{isFilled:!1,className:"pref-c-title pref-u-bold",key:"".concat(t,"-title")},0===t?n:""),c().createElement(s.DataListCell,{isFilled:!0,key:"".concat(t,"-content")},a?"Error while mapping fields, please check your schema if it has valid component types":null==i?void 0:i.renderForm(r,i))]}))}}]),a}(o.Component);C.propTypes={fieldsKey:f().oneOfType([f().string,f().number]),fields:f().array,FieldProvider:f().any,formOptions:f().any,label:f().node,name:f().string,validate:f().any,FormSpyProvider:f().any};var D=function(e){var t=(0,v.Z)(e),n=t.sections,i=t.label,a=t.name,o=(0,d.default)();return c().createElement(s.DataList,(0,r.Z)({"aria-label":i||a},e),n.map((function(e,t){var n=e.label,r=e.fields,i=Array.isArray(r)?r:[r];return i.length>0&&c().createElement(s.DataListItem,{name:a,key:t,"aria-labelledby":"simple-item1"},i.map((function(e,r){var i=e.fields;return c().createElement(C,{key:"".concat(t,"-").concat(r),fieldsKey:r,label:n,fields:i,formOptions:o})})))})))};D.propTypes={sections:f().array,FieldProvider:f().any,formOptions:f().any,label:f().node,name:f().string,validate:f().any,FormSpyProvider:f().any};const I=D;var T="descriptiveCheckbox",_="loader",L="section"},78668:(e,t,n)=>{"use strict";n.d(t,{vF:()=>F,Sp:()=>I,d9:()=>D,If:()=>x,pU:()=>j,sJ:()=>N});var r,i=n(45987),a=n(29439),o=n(93433),c=n(15861),s=n(4942),l=n(87757),u=n.n(l),p=n(77865),f=n.n(p),d=n(56455),v=n(20679),m=[{fields:[{component:n(81797).gI}]}],y=n(25091),b=n(55140),h=n(83215),g=["permissions","url","apiName","apiVersion","localFile"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P,k,Z=function(e){return e&&e.loaded?e.schema:m},j=function(e){var t;return null===(t=y["notification-preference"])||void 0===t?void 0:t[e]},N=function(){var e=(0,b.Z)((function(e){var t=e.chromeHistory;return(t=void 0===t?{}:t).push}));return function(t,n){"function"==typeof e&&(t.preventDefault(),e(n.replace(/^.\//,"/")))}},w=(P=E(E({},null===(r=insights.chrome)||void 0===r?void 0:r.visibilityFunctions),{},{hasLoosePermissions:(k=(0,c.Z)(u().mark((function e(){var t,n,r=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:[],e.next=3,insights.chrome.getUserPermissions();case 3:return n=e.sent,e.abrupt("return",t.some((function(e){return null==n?void 0:n.find((function(t){return t.permission===e}))})));case 5:case"end":return e.stop()}}),e)}))),function(){return k.apply(this,arguments)})}),E(E({},P),Object.fromEntries(Object.keys(P).map((function(e){return["!".concat(e),function(){return!P[e].apply(P,arguments)}]}))))),S=function(e){return Promise.all([e].flat().map((function(e){var t,n=e.method,r=e.args;return null==w||null===(t=w[n])||void 0===t?void 0:t.call.apply(t,[w].concat((0,o.Z)(r||[])))}))).then((function(e){return e.every(Boolean)}))},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{"email-preference":{}},t=e["email-preference"],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return Object.entries(t).map((function(e){var t=(0,a.Z)(e,2),o=t[0],l=t[1],p=l.permissions,f=l.url,d=l.apiName,m=l.apiVersion,y=l.localFile,b=(0,i.Z)(l,g),h=!p||S(p);return(0,c.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(h);case 2:if(!e.sent){e.next=12;break}if(!y){e.next=11;break}return e.next=7,n(40118)("./".concat(y));case 7:t=e.sent.default,r((0,v.Re)({schema:t,application:o})),e.next=12;break;case 11:r((0,v.Re)({application:o,url:f,apiName:d,apiVersion:m}));case 12:case"end":return e.stop()}}),e)})))(),(0,s.Z)({},o,E({localFile:y,isVisible:h,url:f,apiName:d,apiVersion:m},b))})).reduce((function(e,t){return E(E({},e),t)}),{})},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};return!0===t.isVisible?{label:null==t?void 0:t.title,name:e,fields:(null==t?void 0:t.fields)||Z(n)}:(Promise.resolve(t.isVisible).then(r),{label:f().createElement(d.Z,null),name:e,fields:m})},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return"".concat(e.slice(0,e.length-(e.length>1)).join(", ")).concat(e.length>=2?" and ".concat(e[e.length-1]):"")},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Promise.allSettled(e.map((function(e){return e.promise}))).then((function(t){return t.reduce((function(t,n,r){var i,a,c=n.value;return E(E({},t),{},(0,s.Z)({},c?"success":"error",[].concat((0,o.Z)(t[c?"success":"error"]),[null===(i=e[r])||void 0===i||null===(a=i.meta)||void 0===a?void 0:a.title])))}),{success:[],error:[]})}))},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];0!==n.length&&0!==t.length&&(e((0,h.wN)({dismissable:!1,variant:"success",title:"Email preferences for ".concat(C(t)," successfully saved")})),e((0,h.wN)({dismissable:!1,variant:"danger",title:"Email preferences for ".concat(C(n)," unsuccessfully saved")}))),0===n.length&&0!==t.length&&e((0,h.wN)({dismissable:!1,variant:"success",title:"Preferences successfully saved"})),0!==n.length&&0===t.length&&e((0,h.wN)({dismissable:!1,variant:"danger",title:"Preferences unsuccessfully saved"}))}},20679:(e,t,n)=>{"use strict";n.d(t,{Re:()=>v,ux:()=>f,fj:()=>m,G1:()=>d});var r=n(15861),i=n(87757),a=n.n(i),o=n(77460);o.ZP.interceptors.response.use((function(e){var t;if(null!=e&&null!==(t=e.config)&&void 0!==t&&t.data)try{return JSON.parse(e.config.data)}catch(t){return e.config.data}return e}));var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"v1",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3?arguments[3]:void 0;return o.ZP.get("/api/".concat(e,"/").concat(t).concat(r||"/user-config/".concat(n)))},s=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r,i,c,s=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>2&&void 0!==s[2]?s[2]:"v1",i=s.length>3&&void 0!==s[3]?s[3]:"",c=s.length>4?s[4]:void 0,e.abrupt("return",o.ZP.post("/api/".concat(t,"/").concat(r).concat(c||"/user-config/".concat(i)),n));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=n(58061),u=n(25091),p=n(78668),f=function(e){var t,n,r=e.bundleName,i=e.apiVersion;return{type:l.aI.GET_NOTIFICATION_SCHEMA,payload:c(null===(t=(0,p.pU)(r))||void 0===t?void 0:t.application,i,null===(n=(0,p.pU)(r))||void 0===n?void 0:n.resourceType),meta:{bundleName:r,notifications:{rejected:{variant:"danger",title:"Request for user's configuration failed",description:"User's configuration notification for this bundle does not exist."}}}}},d=function(e){var t,n,r=e.bundleName,i=e.values,a=e.apiVersion;return{type:l.aI.SAVE_NOTIFICATION_SCHEMA,payload:s(null===(t=(0,p.pU)(r))||void 0===t?void 0:t.application,i,a,null===(n=(0,p.pU)(r))||void 0===n?void 0:n.resourceType),meta:{bundleName:r,noError:!0}}},v=function(e){var t,n,r=e.application,i=e.apiVersion,a=e.resourceType,o=void 0===a?"email-preference":a,s=e.schema,p=e.url,f=e.apiName;return{type:l.aI.GET_EMAIL_SCHEMA,payload:s||c(f||r,i,o,p),meta:{appName:r,notifications:{rejected:{variant:"danger",title:"Request for user's configuration failed",description:"User's configuration email for ".concat(null===(t=u["email-preference"])||void 0===t||null===(n=t[r])||void 0===n?void 0:n.title," application does not exist.")}}}}},m=function(e){var t,n,r=e.application,i=e.values,a=e.apiVersion,o=e.resourceType,c=void 0===o?"email-preference":o,p=e.url,f=e.apiName;return{type:l.aI.SAVE_EMAIL_SCHEMA,payload:s(f||r,i,a,c,p),meta:{appName:r,title:null===(t=u["email-preference"])||void 0===t||null===(n=t[r])||void 0===n?void 0:n.title,noError:!0}}}},40118:(e,t,n)=>{var r={"./config.json":[25091],"./data/general.json":[14298,298],"./data/unsubscribe.json":[17814,814]};function i(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n.t(i,19)))}i.keys=()=>Object.keys(r),i.id=40118,e.exports=i}}]);
//# sourceMappingURL=../sourcemaps/2.4ebbdeb6c038b6b35281e63eb7eb98f2.js.map