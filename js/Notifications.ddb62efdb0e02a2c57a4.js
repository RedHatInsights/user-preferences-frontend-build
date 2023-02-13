(self.webpackChunkuser_preferences_frontend=self.webpackChunkuser_preferences_frontend||[]).push([[623],{24402:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Re});var r=n(93433),i=n(15861),a=n(4942),o=n(29439),c=n(87757),s=n.n(c),l=n(92950),u=n.n(l),p=n(57557),f=n.n(p),d=n(46118),m=n(15395),v=n(89117),b=n(39173),y=n(83215),h=n(28216),g=n(33366);g.ZP.interceptors.response.use((function(e){var t;if(null!=e&&null!==(t=e.config)&&void 0!==t&&t.data)try{return JSON.parse(e.config.data)}catch(t){return e.config.data}return e}));var O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"v1",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3?arguments[3]:void 0;return g.ZP.get("/api/".concat(e,"/").concat(t).concat(r||"/user-config/".concat(n)))},E=function(){var e=(0,i.Z)(s().mark((function e(t,n){var r,i,a,o=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>2&&void 0!==o[2]?o[2]:"v1",i=o.length>3&&void 0!==o[3]?o[3]:"",a=o.length>4?o[4]:void 0,e.abrupt("return",g.ZP.post("/api/".concat(t,"/").concat(r).concat(a||"/user-config/".concat(i)),n));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=n(36580),P=n(45987),S=n(25091),w=function(e){var t,n,r=e.application,i=e.apiVersion,a=e.resourceType,o=void 0===a?"email-preference":a,c=e.schema,s=e.url,l=e.apiName;return{type:j.aI.GET_EMAIL_SCHEMA,payload:c||O(l||r,i,o,s),meta:{appName:r,notifications:{rejected:{variant:"danger",title:"Request for user's configuration failed",description:"User's configuration email for ".concat(null===(t=S["email-preference"])||void 0===t||null===(n=t[r])||void 0===n?void 0:n.title," application does not exist.")}}}}},Z=n(87462),N=n(94184),k=n.n(N),C=n(45697),F=n.n(C),x=n(48880),D=n(41693),T=n(74041),R=["onChange","checked"];function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t=(0,D.Z)(L(L({},e),{},{type:"checkbox"})),n=t.group,r=t.section,i=t.label,a=t.beforeOnChange,o=t.title,c=t.description,s=t.isDanger,l=t.isGlobal,p=t.checkedWarning,f=t.infoMessage,d=t.input,m=d.onChange,b=d.checked,y=(0,P.Z)(d,R),h=(0,x.default)();return u().createElement(v.Checkbox,(0,Z.Z)({},y,{isChecked:b,id:"descriptive-checkbox-".concat(y.name),onChange:function(t,i){a(l,t,h,n,r,e.name);for(var o=arguments.length,c=new Array(o>2?o-2:0),s=2;s<o;s++)c[s-2]=arguments[s];m.apply(void 0,[t,i].concat(c))},"data-type":"descriptive-checkbox",className:"pref-c-descriptive-checkbox",label:u().createElement("span",{className:k()("pref-c-checkbox-label",{"pref-c-checkbox-label-error":s||l})},i||o),description:u().createElement("div",null,c&&u().createElement(u().Fragment,null,u().createElement("span",{className:"pref-c-checkbox-description"},c)),!b&&p&&u().createElement("span",{className:"pref-c-checkbox-info"},u().createElement(T.InfoCircleIcon,null)," ",f),b&&p&&u().createElement("span",{className:"pref-c-checkbox-warning"},u().createElement(T.ExclamationTriangleIcon,null)," ",p))}))};_.propTypes={FieldProvider:F().any,formOptions:F().any,group:F().string,section:F().string,name:F().string,label:F().string,title:F().string,description:F().string,isDanger:F().bool,isGlobal:F().bool},_.defaultProps={name:"",label:"",isDanger:!1};const A=_;var B=n(35664),M=["name","size","FieldProvider","validate","FormSpyProvider","formOptions"],V=function(e){e.name;var t=e.size,n=(e.FieldProvider,e.validate,e.FormSpyProvider,e.formOptions,(0,P.Z)(e,M));return u().createElement("div",n,u().createElement(B.Z,{size:t}))};V.propTypes={FieldProvider:F().any,formOptions:F().any,FormSpyProvider:F().any,validate:F().any,name:F().string,size:F().string},V.defaultProps={name:"",size:"md"};const z=V;var U=n(15671),G=n(43144),H=n(97326),q=n(60136),K=n(82963),Q=n(61120);var X=function(e){(0,q.Z)(i,e);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,Q.Z)(t);if(n){var i=(0,Q.Z)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return(0,K.Z)(this,e)});function i(){var e;(0,U.Z)(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=r.call.apply(r,[this].concat(n)),(0,a.Z)((0,H.Z)(e),"state",{hasError:!1}),e}return(0,G.Z)(i,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:t})}},{key:"render",value:function(){var e=this.props,t=e.fieldsKey,n=e.label,r=e.fields,i=e.formOptions,a=this.state.hasError;return u().createElement(v.DataListItemRow,null,u().createElement(v.DataListItemCells,{dataListCells:[u().createElement(v.DataListCell,{isFilled:!1,className:"pref-c-title pref-u-bold",key:"".concat(t,"-title")},0===t?n:""),u().createElement(v.DataListCell,{isFilled:!0,key:"".concat(t,"-content")},a?"Error while mapping fields, please check your schema if it has valid component types":null==i?void 0:i.renderForm(r,i))]}))}}]),i}(l.Component);X.propTypes={fieldsKey:F().oneOfType([F().string,F().number]),fields:F().array,FieldProvider:F().any,formOptions:F().any,label:F().node,name:F().string,validate:F().any,FormSpyProvider:F().any};var J=function(e){var t=(0,D.Z)(e),n=t.sections,r=t.label,i=t.name,a=(0,x.default)();return u().createElement(v.DataList,(0,Z.Z)({"aria-label":r||i},e),n.map((function(e,t){var n=e.label,r=e.fields,o=Array.isArray(r)?r:[r];return o.length>0&&u().createElement(v.DataListItem,{name:i,key:t,"aria-labelledby":"simple-item1"},o.map((function(e,r){var i=e.fields;return u().createElement(X,{key:"".concat(t,"-").concat(r),fieldsKey:r,label:n,fields:i,formOptions:a})})))})))};J.propTypes={sections:F().array,FieldProvider:F().any,formOptions:F().any,label:F().node,name:F().string,validate:F().any,FormSpyProvider:F().any};const Y=J;var W,$="UNSUBSCRIBE_ALL",ee=["permissions","url","apiName","apiVersion","localFile"];function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re,ie,ae=function(e){var t;return null===(t=S["notification-preference"])||void 0===t?void 0:t[e]},oe=(re=ne(ne({},null===(W=insights.chrome)||void 0===W?void 0:W.visibilityFunctions),{},{hasLoosePermissions:(ie=(0,i.Z)(s().mark((function e(){var t,n,r=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:[],e.next=3,insights.chrome.getUserPermissions();case 3:return n=e.sent,e.abrupt("return",t.some((function(e){return null==n?void 0:n.find((function(t){return t.permission===e}))})));case 5:case"end":return e.stop()}}),e)}))),function(){return ie.apply(this,arguments)})}),ne(ne({},re),Object.fromEntries(Object.keys(re).map((function(e){return["!".concat(e),function(){return!re[e].apply(re,arguments)}]}))))),ce=function(e){return Promise.all([e].flat().map((function(e){var t,n=e.method,i=e.args;return null==oe||null===(t=oe[n])||void 0===t?void 0:t.call.apply(t,[oe].concat((0,r.Z)(i||[])))}))).then((function(e){return e.every(Boolean)}))},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{"email-preference":{}},t=e["email-preference"],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return Object.entries(t).map((function(e){var t=(0,o.Z)(e,2),c=t[0],l=t[1],u=l.permissions,p=l.url,f=l.apiName,d=l.apiVersion,m=l.localFile,v=(0,P.Z)(l,ee),b=!u||ce(u);return(0,i.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(b);case 2:if(!e.sent){e.next=12;break}if(!m){e.next=11;break}return e.next=7,n(40118)("./".concat(m));case 7:t=e.sent.default,r(w({schema:t,application:c})),e.next=12;break;case 11:r(w({application:c,url:p,apiName:f,apiVersion:d}));case 12:case"end":return e.stop()}}),e)})))(),(0,a.Z)({},c,ne({localFile:m,isVisible:b,url:p,apiName:f,apiVersion:d},v))})).reduce((function(e,t){return ne(ne({},e),t)}),{})},le=n(334),ue=n(66688);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var de=function(e,t,n){var r,i=new URLSearchParams(null==e||null===(r=e.location)||void 0===r?void 0:r.search),a=Object.fromEntries(i);return t.some((function(e){return e.name===a.bundle&&e.fields.some((function(e){return e.name===a.app}))}))?a:(n.bundle&&n.app&&(i.set("bundle",n.bundle),i.set("app",n.app),e.replace({pathname:e.location.pathname,search:i.toString()})),fe(fe({},a),n))},me=function(e){var t=e.searchRef,n=e.search,r=e.setSearch,i=e.fields,a=e.onClick,o=(0,le.useHistory)(),c=(0,l.useMemo)((function(){return de(o,i,{})}),[null==o?void 0:o.location.search]),s=c.bundle,p=c.app;return u().createElement(v.Menu,{isPlain:!0,isScrollable:!0},u().createElement(v.MenuInput,{ref:t,className:"pf-u-mx-sm"},u().createElement(v.TextInput,{"aria-label":"Filter menu items",placeholder:"Search applications",iconVariant:"search",type:"search",onChange:function(e){return r(e)},value:n})),u().createElement(v.Divider,null),u().createElement(v.MenuContent,{id:"notifications-menu-content"},i.some((function(e){return e.fields.length>0}))?i.map((function(e){var t=e.fields,n=e.title,r=e.name;return t.length>0?u().createElement(v.MenuGroup,{label:n,className:"pf-u-px-sm",key:"menu-group-".concat(r)},u().createElement(v.MenuList,null,t.map((function(e){var t=e.label,n=e.name;return u().createElement(v.MenuItem,{onClick:function(e){return a(e,r,n)},key:"menu-item-".concat(r,"-").concat(n),isFocused:s===r&&p===n},t)})))):null})):function(e){return u().createElement(v.EmptyState,{variant:v.EmptyStateVariant.small,className:"pf-u-mt-lg"},u().createElement(v.EmptyStateIcon,{icon:T.SearchIcon}),u().createElement(v.Title,{headingLevel:"h4",size:"lg"},"No matching applications found"),u().createElement(v.EmptyStateBody,null,"Adjust you filters and try again."),u().createElement(v.Button,{variant:v.ButtonVariant.link,onClick:function(){return e("")}},"Clear filters"))}(r)))};me.propTypes={fields:F().array.isRequired,search:F().string,setSearch:F().func,searchRef:F().object,onClick:F().func};const ve=me;function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var he=function(e){var t,n,i,a,c,s=e.fields,p=e.titleRef,f=(0,le.useHistory)(),m=(0,d.XQ)(),b=(0,l.useRef)(null),y=(0,l.useRef)({}),h=(0,l.useState)(""),g=(0,o.Z)(h,2),O=g[0],E=g[1],j=(0,l.useState)(s),P=(0,o.Z)(j,2),w=P[0],Z=P[1],N=(0,ue.cl)(),k=N.pristine,C=N.submitSucceeded,F=N.dirtyFieldsSinceLastSubmit,x=function(){var e=document.getElementById("notifications-container"),t=document.getElementById("notifications-grid"),n=document.getElementById("notifications-menu-content");if(null!=n&&n.style&&null!=t&&t.style){var r,i,a=(null===(r=document.getElementById("user-pref__form-buttons"))||void 0===r||null===(i=r.getBoundingClientRect())||void 0===i?void 0:i.height)||0;t.style.height="".concat(e.getBoundingClientRect().height-a,"px");var o=e.getBoundingClientRect().height-p.current.getBoundingClientRect().height-b.current.getBoundingClientRect().height-(o<n.scrollHeight?a:0)-1;n.style.maxHeight="".concat(o,"px"),n.style.height="".concat(o-a,"px")}};return(0,l.useEffect)((function(){var e,t,n,r;return window.screen.width>768&&(window.addEventListener("resize",x),x()),y.current=de(f,s,{bundle:null==s||null===(e=s[0])||void 0===e?void 0:e.name,app:null==s||null===(t=s[0])||void 0===t||null===(n=t.fields)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.name}),function(){return window.removeEventListener("resize",x)}}),[]),(0,l.useEffect)((function(){var e=s.reduce((function(e,t){return[].concat((0,r.Z)(e),[ye(ye({},t),{},{fields:t.fields.filter((function(e){var t,n,r=O.toLowerCase();return(null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(r))||(null===(n=e.title)||void 0===n?void 0:n.toLowerCase().includes(r))}),[])})])}),[]);Z(e)}),[O]),(0,l.useEffect)((function(){x()}),[k,C,F]),u().createElement(u().Fragment,null,u().createElement("div",{className:"pref-notifications--nav"},u().createElement(ve,{searchRef:b,search:O,setSearch:E,fields:w,onClick:function(e,t,n){e.preventDefault(),y.current={bundle:t,app:n},function(e,t){var n,r=new URLSearchParams(null==e||null===(n=e.location)||void 0===n?void 0:n.search);Object.entries(t).forEach((function(e){var t=(0,o.Z)(e,2),n=t[0],i=t[1];r.set(n,i)})),e.replace({pathname:e.location.pathname,search:r.toString()})}(f,y.current)}})),u().createElement("div",{className:"pref-notifications--inputs"},u().createElement(u().Fragment,null,(a=null===(t=S["notification-preference"][y.current.bundle])||void 0===t?void 0:t.title,c=null===(n=s.reduce((function(e,t){return[].concat((0,r.Z)(e),(0,r.Z)(t.fields))}),[]).filter((function(e){return e.name===y.current.app&&e.bundle===y.current.bundle})))||void 0===n||null===(i=n[0])||void 0===i?void 0:i.label,u().createElement(u().Fragment,null,u().createElement(v.Title,{headingLevel:"h3",size:"xl",className:"pf-u-pb-xs"},"".concat(c," | ").concat(a)),u().createElement(v.Text,{className:"pf-u-mb-xl"},"Configure your ",c," notifications."))),u().createElement("div",null,m.renderForm(s.reduce((function(e,t){return[].concat((0,r.Z)(e),(0,r.Z)(t.fields.map((function(e){return ye(ye({},e),{},{key:"form-".concat(e.bundle,"-").concat(e.name),fields:[e.fields.map((function(t){return ye(ye({},t),{},{hideField:!(e.name===y.current.app&&e.bundle===y.current.bundle)})}))]})}))))}),[]),m)))))};he.propTypes={fields:F().array.isRequired,dataType:F().any,validate:F().any,component:F().any,titleRef:F().any};const ge=u().memo(he);var Oe=function(e){var t=e.fields,n=(0,d.XQ)();return u().createElement("div",{className:"pf-c-form"},n.renderForm(t,n))};Oe.propTypes={fields:F().array.isRequired};const Ee=Oe;function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Se=function(e,t,n){return Object.entries(e).reduce((function(e,i){var a=(0,o.Z)(i,2),c=a[0],s=a[1];return[].concat((0,r.Z)(e),[{title:S["notification-preference"][c].title,name:c,fields:s.sections.reduce((function(e,i){var a=!1,o=[].concat((0,r.Z)(i.fields[0].fields.map((function(e){return a=a||e.initialValue,Pe(Pe({},e),{},{group:c,section:i.name,category:"notification-preference",beforeOnChange:we})}))),(0,r.Z)(Object.entries(t).reduce((function(e,t){var o,s;return[].concat((0,r.Z)(e),(0,r.Z)(t[0]===i.name&&(null===(o=n[t[0]])||void 0===o?void 0:o.bundle)===c&&(null===(s=t[1].schema[0])||void 0===s?void 0:s.fields.map((function(e){return a=a||e.initialValue,Pe(Pe({},e),{},{group:c,section:i.name,category:"email-preference",beforeOnChange:we})})))||[]))}),[])));return[].concat((0,r.Z)(e),[Pe(Pe({},i),{},{bundle:c,component:"tabGroup",fields:[].concat((0,r.Z)(o),[{name:"bundles[".concat(c,"].applications[").concat(i.name,"].notifications[").concat($,"]"),label:"Unsubscribe from all",isGlobal:!0,initialValue:!a,group:c,section:i.name,component:"descriptiveCheckbox",validate:[],category:"notification-preference",beforeOnChange:we}])})])}),[])}])}),[])},we=function(e,t,n,r,i,a){if(e)n.batch((function(){n.getRegisteredFields().forEach((function(e){t&&"boolean"==typeof n.getFieldState(e).value&&(e.includes(r)&&e.includes(i)||"is_subscribed"===e&&"rhel"===r&&"advisor"==i)&&!e.includes($)&&n.change(e,!1)}))}));else if(t){var o=n.getRegisteredFields().find((function(e){return"boolean"==typeof n.getFieldState(e).value&&e.includes(r)&&e.includes(i)&&e.includes($)}));o&&n.change(o,!1)}else{var c,s=!0;n.batch((function(){n.getRegisteredFields().forEach((function(e){"boolean"==typeof n.getFieldState(e).value&&(e.includes(r)&&e.includes(i)||"is_subscribed"===e&&"rhel"===r&&"advisor"==i)&&(e.includes($)?c=e:n.getFieldState(e).value&&e!==a&&(s=!1))}))})),c&&n.change(c,s)}},Ze=n(41609),Ne=n.n(Ze),ke=function(e){var t=e.dirtyFieldsSinceLastSubmit,n=e.submitSucceeded,r=e.pristine,i=(0,x.default)().reset,a=Ne()(t)||!n&&r;return a?null:u().createElement("div",{id:"user-pref__form-buttons",className:"pref-shared--buttons pf-m-9-col-on-md"},u().createElement(v.ActionGroup,{className:"pref-shared--actions pf-u-px-lg pf-u-py-md"},u().createElement(v.Button,{type:"submit",ouiaId:"user-pref__submit-button",isDisabled:a,variant:"primary"},"Save"),u().createElement(v.Button,{variant:"link",ouiaId:"user-pref__reset-button",isDisabled:a,onClick:function(){return i()}},"Cancel")))};ke.propTypes={dirtyFieldsSinceLastSubmit:F().shape((0,a.Z)({},F().string,F().oneOfType([F().bool]))),submitSucceeded:F().bool,pristine:F().bool};const Ce=function(e){return u().createElement(d.lP,{subscription:{pristine:!0,submitSucceeded:!0,dirtyFieldsSinceLastSubmit:!0}},(function(t){return u().createElement(ke,(0,Z.Z)({},t,e))}))};var Fe=function(e){var t=e.schema,n=e.formFields,r=(0,d.XQ)().handleSubmit;return u().createElement("form",{onSubmit:r,style:{display:"contents"}},t.title,n,u().createElement(Ce,null))};Fe.propTypes={schema:F().shape({title:F().node}),formFields:F().array};const xe=Fe;function De(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?De(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):De(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Re=function(){var e,t=(0,h.I0)(),n=(0,l.useRef)(null),c=(0,l.useState)(!1),p=(0,o.Z)(c,2),g=p[0],P=p[1],w=(0,l.useState)({}),Z=(0,o.Z)(w,2),N=Z[0],k=Z[1],C=(0,h.v9)((function(e){return e.emailReducer})),F=(0,h.v9)((function(e){return Te({bundles:{}},e.notificationsReducer)})).bundles;return(0,l.useEffect)((function(){P(!0),(0,i.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.chrome.auth.getUser();case 2:return e.t0=k,e.next=5,se(S,t);case 5:e.t1=e.sent,(0,e.t0)(e.t1),n=Object.keys(S["notification-preference"]).map((function(e){var t,n;return O(null===(t=ae(e))||void 0===t?void 0:t.application,void 0,null===(n=ae(e))||void 0===n?void 0:n.resourceType).then((function(t){return{data:t,bundleName:e}}))})),Promise.all(n).then((function(e){var n,r=e.reduce((function(e,t){var n=t.data,r=t.bundleName;return Te(Te({},e),{},(0,a.Z)({},r,null==n?void 0:n.fields[0]))}),{});t((n=r,{type:j.aI.GET_NOTIFICATION_SCHEMAS,payload:n})),P(!1)}));case 9:case"end":return e.stop()}}),e)})))()}),[]),g?null:u().createElement("div",{id:"notifications-container",className:"pref-notifications--container"},u().createElement("div",{className:"pref-notifications--wrapper"},u().createElement("div",{id:"notifications-grid",className:"pref-notifications--grid"},u().createElement("div",{ref:n,className:"pref-notifications--head"},u().createElement(b.Z,{className:"pref-notifications--title sticky",title:"My Notifications"}),u().createElement(v.Text,{className:"pref-notifications--subtitle"},"This service allows you to opt-in and out of receiving notifications. Your Organization Administrator has configured which notifications you can or can not receive in their"," ",u().createElement("a",{href:"/settings/notifications"},"Settings"),".")),u().createElement(d.lT,{componentMapper:Te(Te({},m.YS),{},(e={},(0,a.Z)(e,"descriptiveCheckbox",A),(0,a.Z)(e,"loader",z),(0,a.Z)(e,"section",Y),(0,a.Z)(e,"tabs",ge),(0,a.Z)(e,"tabGroup",Ee),e)),FormTemplate:xe,schema:{fields:[{component:"tabs",name:"notifTabs",titleRef:n,fields:Se(F,C,N)}]},onSubmit:function(e,n){var i=Object.entries(F).reduce((function(e,t){var i=t[1].sections.filter((function(e){return Object.entries(n.getState().dirtyFields).some((function(n){var r=(0,o.Z)(n,2),i=r[0],a=r[1];return i.includes(t[0])&&i.includes(e.name)&&i.includes("notifications")&&a}))})).map((function(e){return e.name})),c=(0,r.Z)(new Set([].concat((0,r.Z)((null==e?void 0:e[t[0]])||[]),(0,r.Z)(i))));return Te(Te({},e),c.length>0?(0,a.Z)({},t[0],c):{})}),{}),c=Object.keys(i).map((function(n){return t(function(e){var t,n,r=e.bundleName,i=e.values,a=e.apiVersion;return{type:j.aI.SAVE_NOTIFICATION_SCHEMA,payload:E(null===(t=ae(r))||void 0===t?void 0:t.application,i,a,null===(n=ae(r))||void 0===n?void 0:n.resourceType),meta:{bundleName:r,noError:!0}}}({bundleName:n,values:{bundles:(0,a.Z)({},n,{applications:Object.entries(e.bundles[n].applications).reduce((function(e,t){var n=(0,o.Z)(t,2),r=n[0],i=n[1];return Te(Te({},e),{},(0,a.Z)({},r,{notifications:f()(i.notifications,$)}))}),{})})}}))}));if(n.getState().dirtyFields.is_subscribed){var s=N.advisor,l=s.url,u=s.apiName,p=function(e){var t,n,r=e.application,i=e.values,a=e.apiVersion,o=e.resourceType,c=void 0===o?"email-preference":o,s=e.url,l=e.apiName;return{type:j.aI.SAVE_EMAIL_SCHEMA,payload:E(l||r,i,a,c,s),meta:{appName:r,title:null===(t=S["email-preference"])||void 0===t||null===(n=t[r])||void 0===n?void 0:n.title,noError:!0}}}({application:"advisor",values:{is_subscribed:e.is_subscribed},url:l,apiName:u});c.push(t(p))}Promise.all(c).then((function(){t((0,y.wN)({dismissable:!0,variant:"success",title:"Notification preferences successfully saved"}))})).catch((function(){t((0,y.wN)({dismissable:!0,variant:"danger",title:"Notification preferences unsuccessfully saved"}))}))}}))))}},40118:(e,t,n)=>{var r={"./config.json":[25091],"./data/general.json":[14298,298],"./data/unsubscribe.json":[17814,814]};function i(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n.t(i,19)))}i.keys=()=>Object.keys(r),i.id=40118,e.exports=i},97890:()=>{},44370:()=>{},17657:()=>{},22972:()=>{},45467:()=>{},81754:()=>{},70347:()=>{},11452:()=>{},34946:()=>{},10497:()=>{},32857:()=>{},93818:()=>{},94498:()=>{},10108:()=>{},54476:()=>{},28992:()=>{},80897:()=>{},30187:()=>{},40837:()=>{},90479:()=>{},78752:()=>{},74282:()=>{},98379:()=>{},25238:()=>{},1508:()=>{},91993:()=>{},99624:()=>{},36974:()=>{},27479:()=>{},66822:()=>{},93661:()=>{},56024:()=>{},43390:()=>{},22143:()=>{},314:()=>{},49854:()=>{},40209:()=>{},87234:()=>{},38299:()=>{},72816:()=>{},11177:()=>{},25091:e=>{"use strict";e.exports=JSON.parse('{"email-preference":{"advisor":{"bundle":"rhel","title":"Advisor","url":"/user-preferences/","apiName":"insights","permissions":[{"method":"hasLoosePermissions","args":[["insights:*:*","insights:*:read","advisor:*:*","advisor:*:read","advisor:rules:read"]]}]},"unsubscribe":{"title":"","localFile":"data/unsubscribe.json"}},"notification-preference":{"application-services":{"title":"Application Services","application":"notifications","resourceType":"notification-preference?bundleName=application-services"},"openshift":{"title":"OpenShift","application":"notifications","resourceType":"notification-preference?bundleName=openshift"},"rhel":{"title":"Red Hat Enterprise Linux","application":"notifications","resourceType":"notification-preference?bundleName=rhel"},"ansible":{"title":"Ansible","application":"notifications","resourceType":"notification-preference?bundleName=ansible"},"console":{"title":"Console","application":"notifications","resourceType":"notification-preference?bundleName=console"}}}')}}]);
//# sourceMappingURL=../sourcemaps/Notifications.98108c0988baef2d279583a47b434159.js.map