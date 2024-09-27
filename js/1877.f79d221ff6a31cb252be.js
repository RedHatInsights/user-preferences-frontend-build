(self.webpackChunkuserPreferences=self.webpackChunkuserPreferences||[]).push([[1877,1398,8663,9955],{74992:(e,a,n)=>{"use strict";n.d(a,{E:()=>c});var i=n(8674),s=n(93345),t=n(33774);n(21741);const r="pf-m-read",l="pf-m-unread",c=e=>{var{isRead:a=!1,className:n="",children:c="",screenReaderText:o}=e,d=(0,i.Tt)(e,["isRead","className","children","screenReaderText"]);return s.createElement("span",Object.assign({},d,{className:(0,t.A)("pf-v5-c-badge",a?r:l,n)}),c,o&&s.createElement("span",{className:"pf-v5-screen-reader"},o))};c.displayName="Badge"},72583:(e,a,n)=>{"use strict";n.d(a,{$n:()=>f,Ak:()=>i,Mp:()=>t,VQ:()=>s});var i,s,t,r=n(8674),l=n(93345),c=n(73530),o=n(33774),d=n(932),p=n(31398),m=n(74992);!function(e){e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e.danger="danger",e.warning="warning",e.link="link",e.plain="plain",e.control="control"}(i||(i={})),function(e){e.button="button",e.submit="submit",e.reset="reset"}(s||(s={})),function(e){e.default="default",e.sm="sm",e.lg="lg"}(t||(t={}));const u=e=>{var{children:a=null,className:n="",component:u="button",isActive:b=!1,isBlock:g=!1,isDisabled:h=!1,isAriaDisabled:v=!1,isLoading:A=null,isDanger:y=!1,spinnerAriaValueText:k,spinnerAriaLabelledBy:N,spinnerAriaLabel:I,size:w=t.default,inoperableEvents:x=["onClick","onKeyPress"],isInline:E=!1,type:C=s.button,variant:O=i.primary,iconPosition:P="start","aria-label":$=null,icon:L=null,ouiaId:_,ouiaSafe:R=!0,tabIndex:B=null,innerRef:D,countOptions:z}=e,S=(0,r.Tt)(e,["children","className","component","isActive","isBlock","isDisabled","isAriaDisabled","isLoading","isDanger","spinnerAriaValueText","spinnerAriaLabelledBy","spinnerAriaLabel","size","inoperableEvents","isInline","type","variant","iconPosition","aria-label","icon","ouiaId","ouiaSafe","tabIndex","innerRef","countOptions"]);const T=(0,p.useOUIAProps)(f.displayName,_,R,O),j=u,U="button"===j,q=E&&"span"===j,F=x.reduce(((e,a)=>Object.assign(Object.assign({},e),{[a]:e=>{e.preventDefault()}})),{});return l.createElement(j,Object.assign({},S,v?F:null,{"aria-disabled":h||v,"aria-label":$,className:(0,o.A)(c.A.button,c.A.modifiers[O],g&&c.A.modifiers.block,h&&c.A.modifiers.disabled,v&&c.A.modifiers.ariaDisabled,b&&c.A.modifiers.active,E&&O===i.link&&c.A.modifiers.inline,y&&(O===i.secondary||O===i.link)&&c.A.modifiers.danger,null!==A&&O!==i.plain&&c.A.modifiers.progress,A&&c.A.modifiers.inProgress,w===t.sm&&c.A.modifiers.small,w===t.lg&&c.A.modifiers.displayLg,n),disabled:U?h:null,tabIndex:null!==B?B:h?U?null:-1:v?null:q?0:void 0,type:U||q?C:null,role:q?"button":null,ref:D},T),A&&l.createElement("span",{className:(0,o.A)(c.A.buttonProgress)},l.createElement(d.y,{size:d.J.md,isInline:E,"aria-valuetext":k,"aria-label":I,"aria-labelledby":N})),O===i.plain&&null===a&&L?L:null,O!==i.plain&&L&&("start"===P||"left"===P)&&l.createElement("span",{className:(0,o.A)(c.A.buttonIcon,c.A.modifiers.start)},L),a,O!==i.plain&&L&&("end"===P||"right"===P)&&l.createElement("span",{className:(0,o.A)(c.A.buttonIcon,c.A.modifiers.end)},L),z&&l.createElement("span",{className:(0,o.A)(c.A.buttonCount,z.className)},l.createElement(m.E,{isRead:z.isRead},z.count)))},f=l.forwardRef(((e,a)=>l.createElement(u,Object.assign({innerRef:a},e))));f.displayName="Button"},63838:(e,a,n)=>{"use strict";n.d(a,{S:()=>p});var i=n(8674),s=n(93345);n(56905);const t="pf-m-standalone",r="pf-m-disabled";var l=n(33774),c=n(31398),o=n(57709);const d=()=>{};class p extends s.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e,e.currentTarget.checked)},this.state={ouiaStateId:(0,c.getDefaultOUIAId)(p.displayName)}}render(){const e=this.props,{"aria-label":a,className:n,inputClassName:m,onChange:u,isLabelWrapped:f,isLabelBeforeButton:b,isValid:g,isDisabled:h,isRequired:v,isChecked:A,label:y,checked:k,defaultChecked:N,description:I,body:w,ouiaId:x,ouiaSafe:E,component:C}=e,O=(0,i.Tt)(e,["aria-label","className","inputClassName","onChange","isLabelWrapped","isLabelBeforeButton","isValid","isDisabled","isRequired","isChecked","label","checked","defaultChecked","description","body","ouiaId","ouiaSafe","component"]);O.id||console.error("Checkbox:","id is required to make input accessible");const P={};([!0,!1].includes(k)||!0===A)&&(P.checked=k||A),u!==d&&(P.checked=A),[!1,!0].includes(N)&&(P.defaultChecked=N);const $=s.createElement("input",Object.assign({},O,{className:(0,l.A)("pf-v5-c-check__input",m),type:"checkbox",onChange:this.handleChange,"aria-invalid":!g,"aria-label":a,disabled:h,required:v,ref:e=>e&&(e.indeterminate=null===A)},P,(0,c.getOUIAProps)(p.displayName,void 0!==x?x:this.state.ouiaStateId,E))),L=f&&!C||"label"===C,_=L?"span":"label",R=y?s.createElement(_,{className:(0,l.A)("pf-v5-c-check__label",h&&r),htmlFor:L?void 0:O.id},y,v&&s.createElement("span",{className:(0,l.A)("pf-v5-c-check__label-required"),"aria-hidden":"true"},o.L)):null,B=null!=C?C:L?"label":"div";return P.checked=null!==P.checked&&P.checked,s.createElement(B,{className:(0,l.A)("pf-v5-c-check",!y&&t,n),htmlFor:L?O.id:void 0},b?s.createElement(s.Fragment,null,R,$):s.createElement(s.Fragment,null,$,R),I&&s.createElement("span",{className:(0,l.A)("pf-v5-c-check__description")},I),w&&s.createElement("span",{className:(0,l.A)("pf-v5-c-check__body")},w))}}p.displayName="Checkbox",p.defaultProps={className:"",isLabelWrapped:!1,isValid:!0,isDisabled:!1,isRequired:!1,isChecked:!1,onChange:d,ouiaSafe:!0}},932:(e,a,n)=>{"use strict";n.d(a,{y:()=>o,J:()=>c});var i=n(8674),s=n(93345);n(97553);const t={modifiers:{inline:"pf-m-inline",sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl"},spinner:"pf-v5-c-spinner",spinnerPath:"pf-v5-c-spinner__path"};var r=n(33774);const l="--pf-v5-c-spinner--diameter";var c;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(c||(c={}));const o=e=>{var{className:a="",size:n="xl","aria-valuetext":c="Loading...",diameter:o,isInline:d=!1,"aria-label":p,"aria-labelledBy":m}=e,u=(0,i.Tt)(e,["className","size","aria-valuetext","diameter","isInline","aria-label","aria-labelledBy"]);return s.createElement("svg",Object.assign({className:(0,r.A)(t.spinner,d?t.modifiers.inline:t.modifiers[n],a),role:"progressbar","aria-valuetext":c,viewBox:"0 0 100 100"},o&&{style:{[l]:o}},p&&{"aria-label":p},m&&{"aria-labelledBy":m},!p&&!m&&{"aria-label":"Contents"},u),s.createElement("circle",{className:t.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}))};o.displayName="Spinner"},31398:(e,a,n)=>{"use strict";n.r(a),n.d(a,{getDefaultOUIAId:()=>d,getOUIAProps:()=>l,useOUIAId:()=>o,useOUIAProps:()=>c});var i=n(93345);let s=0;const t="OUIA-Generated-",r={};function l(e,a,n=!0){return{"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":n,"data-ouia-component-id":a}}const c=(e,a,n=!0,i)=>({"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":n,"data-ouia-component-id":o(e,a,i)}),o=(e,a,n)=>{const s=(0,i.useMemo)((()=>d(e,n)),[e,n]);return null!=a?a:s};function d(e,a){try{let n;return n="undefined"!=typeof window?`${window.location.href}-${e}-${a||""}`:`${e}-${a||""}`,r[n]||(r[n]=0),`${t}${e}-${a?`${a}-`:""}${++r[n]}`}catch(n){return`${t}${e}-${a?`${a}-`:""}${++s}`}}},57709:(e,a,n)=>{"use strict";n.d(a,{L:()=>i});const i="*"},49045:(e,a,n)=>{"use strict";n.d(a,{N:()=>s});var i=n(47931);const s=(e,a,n)=>{let s;if(i.Sw){const{ResizeObserver:t}=window;if(e&&t){const r=new t((e=>{n?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&(0,i.sg)(a,100)})):Array.isArray(e)&&e.length>0&&a()}));r.observe(e),s=()=>r.unobserve(e)}else window.addEventListener("resize",a),s=()=>window.removeEventListener("resize",a)}return()=>{s&&s()}}},68419:(e,a,n)=>{"use strict";n.d(a,{w:()=>r});var i=n(8674),s=n(93345);let t=0;function r({name:e,xOffset:a=0,yOffset:n=0,width:r,height:l,svgPath:c}){var o;return o=class extends s.Component{constructor(){super(...arguments),this.id="icon-title-"+t++}render(){const e=this.props,{title:t,className:o}=e,d=(0,i.Tt)(e,["title","className"]),p=o?`pf-v5-svg ${o}`:"pf-v5-svg",m=Boolean(t),u=[a,n,r,l].join(" ");return s.createElement("svg",Object.assign({className:p,viewBox:u,fill:"currentColor","aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img",width:"1em",height:"1em"},d),m&&s.createElement("title",{id:this.id},t),s.createElement("path",{d:c}))}},o.displayName=e,o}},89015:(e,a,n)=>{"use strict";n.r(a),n.d(a,{AngleRightIcon:()=>t,AngleRightIconConfig:()=>s,default:()=>r});var i=n(68419);const s={name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0},t=(0,i.w)(s),r=t},31003:(e,a,n)=>{"use strict";n.d(a,{$Q:()=>i,Ay:()=>s});const i=(0,n(68419).w)({name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0}),s=i},73530:(e,a,n)=>{"use strict";n.d(a,{A:()=>i}),n(30935);const i={badge:"pf-v5-c-badge",button:"pf-v5-c-button",buttonCount:"pf-v5-c-button__count",buttonIcon:"pf-v5-c-button__icon",buttonProgress:"pf-v5-c-button__progress",modifiers:{active:"pf-m-active",block:"pf-m-block",small:"pf-m-small",primary:"pf-m-primary",displayLg:"pf-m-display-lg",secondary:"pf-m-secondary",tertiary:"pf-m-tertiary",link:"pf-m-link",unread:"pf-m-unread",inline:"pf-m-inline",danger:"pf-m-danger",warning:"pf-m-warning",control:"pf-m-control",expanded:"pf-m-expanded",plain:"pf-m-plain",noPadding:"pf-m-no-padding",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",progress:"pf-m-progress",inProgress:"pf-m-in-progress",start:"pf-m-start",end:"pf-m-end"},spinner:"pf-v5-c-spinner",themeDark:"pf-v5-theme-dark"}},79826:()=>{},21741:()=>{},39829:()=>{},30935:()=>{},43502:()=>{},56905:()=>{},61858:()=>{},41069:()=>{},92004:()=>{},7302:()=>{},71036:()=>{},8700:()=>{},1641:()=>{},5937:()=>{},97553:()=>{},27077:()=>{}}]);
//# sourceMappingURL=../sourcemaps/1877.7e969aa4c49ed630bea86a4212e83e65.js.map