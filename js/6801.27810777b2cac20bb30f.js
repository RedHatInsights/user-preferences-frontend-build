(self.webpackChunkuserPreferences=self.webpackChunkuserPreferences||[]).push([[6801,1398,6791],{74992:(e,t,n)=>{"use strict";n.d(t,{E:()=>o});var i=n(8674),a=n(93345),r=n(33774);n(21741);const s="pf-m-read",l="pf-m-unread",o=e=>{var{isRead:t=!1,className:n="",children:o="",screenReaderText:c}=e,d=(0,i.Tt)(e,["isRead","className","children","screenReaderText"]);return a.createElement("span",Object.assign({},d,{className:(0,r.A)("pf-v5-c-badge",t?s:l,n)}),o,c&&a.createElement("span",{className:"pf-v5-screen-reader"},c))};o.displayName="Badge"},72583:(e,t,n)=>{"use strict";n.d(t,{$n:()=>u,Ak:()=>i,Mp:()=>r,VQ:()=>a});var i,a,r,s=n(8674),l=n(93345),o=n(73530),c=n(33774),d=n(932),p=n(31398),m=n(74992);!function(e){e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e.danger="danger",e.warning="warning",e.link="link",e.plain="plain",e.control="control"}(i||(i={})),function(e){e.button="button",e.submit="submit",e.reset="reset"}(a||(a={})),function(e){e.default="default",e.sm="sm",e.lg="lg"}(r||(r={}));const f=e=>{var{children:t=null,className:n="",component:f="button",isActive:g=!1,isBlock:b=!1,isDisabled:v=!1,isAriaDisabled:h=!1,isLoading:y=null,isDanger:A=!1,spinnerAriaValueText:x,spinnerAriaLabelledBy:E,spinnerAriaLabel:w,size:N=r.default,inoperableEvents:I=["onClick","onKeyPress"],isInline:O=!1,type:L=a.button,variant:P=i.primary,iconPosition:k="start","aria-label":T=null,icon:D=null,ouiaId:z,ouiaSafe:R=!0,tabIndex:$=null,innerRef:C,countOptions:B}=e,M=(0,s.Tt)(e,["children","className","component","isActive","isBlock","isDisabled","isAriaDisabled","isLoading","isDanger","spinnerAriaValueText","spinnerAriaLabelledBy","spinnerAriaLabel","size","inoperableEvents","isInline","type","variant","iconPosition","aria-label","icon","ouiaId","ouiaSafe","tabIndex","innerRef","countOptions"]);const _=(0,p.useOUIAProps)(u.displayName,z,R,P),j=f,S="button"===j,U=O&&"span"===j,W=I.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:e=>{e.preventDefault()}})),{});return l.createElement(j,Object.assign({},M,h?W:null,{"aria-disabled":v||h,"aria-label":T,className:(0,c.A)(o.A.button,o.A.modifiers[P],b&&o.A.modifiers.block,v&&o.A.modifiers.disabled,h&&o.A.modifiers.ariaDisabled,g&&o.A.modifiers.active,O&&P===i.link&&o.A.modifiers.inline,A&&(P===i.secondary||P===i.link)&&o.A.modifiers.danger,null!==y&&P!==i.plain&&o.A.modifiers.progress,y&&o.A.modifiers.inProgress,N===r.sm&&o.A.modifiers.small,N===r.lg&&o.A.modifiers.displayLg,n),disabled:S?v:null,tabIndex:null!==$?$:v?S?null:-1:h?null:U?0:void 0,type:S||U?L:null,role:U?"button":null,ref:C},_),y&&l.createElement("span",{className:(0,c.A)(o.A.buttonProgress)},l.createElement(d.y,{size:d.J.md,isInline:O,"aria-valuetext":x,"aria-label":w,"aria-labelledby":E})),P===i.plain&&null===t&&D?D:null,P!==i.plain&&D&&("start"===k||"left"===k)&&l.createElement("span",{className:(0,c.A)(o.A.buttonIcon,o.A.modifiers.start)},D),t,P!==i.plain&&D&&("end"===k||"right"===k)&&l.createElement("span",{className:(0,c.A)(o.A.buttonIcon,o.A.modifiers.end)},D),B&&l.createElement("span",{className:(0,c.A)(o.A.buttonCount,B.className)},l.createElement(m.E,{isRead:B.isRead},B.count)))},u=l.forwardRef(((e,t)=>l.createElement(f,Object.assign({innerRef:t},e))));u.displayName="Button"},932:(e,t,n)=>{"use strict";n.d(t,{y:()=>c,J:()=>o});var i=n(8674),a=n(93345);n(97553);const r={modifiers:{inline:"pf-m-inline",sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",xl:"pf-m-xl"},spinner:"pf-v5-c-spinner",spinnerPath:"pf-v5-c-spinner__path"};var s=n(33774);const l="--pf-v5-c-spinner--diameter";var o;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(o||(o={}));const c=e=>{var{className:t="",size:n="xl","aria-valuetext":o="Loading...",diameter:c,isInline:d=!1,"aria-label":p,"aria-labelledBy":m}=e,f=(0,i.Tt)(e,["className","size","aria-valuetext","diameter","isInline","aria-label","aria-labelledBy"]);return a.createElement("svg",Object.assign({className:(0,s.A)(r.spinner,d?r.modifiers.inline:r.modifiers[n],t),role:"progressbar","aria-valuetext":o,viewBox:"0 0 100 100"},c&&{style:{[l]:c}},p&&{"aria-label":p},m&&{"aria-labelledBy":m},!p&&!m&&{"aria-label":"Contents"},f),a.createElement("circle",{className:r.spinnerPath,cx:"50",cy:"50",r:"45",fill:"none"}))};c.displayName="Spinner"},45523:(e,t,n)=>{"use strict";n.d(t,{m:()=>O});var i=n(8674),a=n(93345);n(27077);const r="pf-m-top",s="pf-m-top-left",l="pf-m-top-right",o="pf-m-bottom",c="pf-m-bottom-left",d="pf-m-bottom-right",p="pf-m-left",m="pf-m-left-top",f="pf-m-left-bottom",u="pf-m-right",g="pf-m-right-top",b="pf-m-right-bottom",v="pf-m-text-align-left";var h=n(33774);const y=e=>{var{className:t,children:n,isLeftAligned:r}=e,s=(0,i.Tt)(e,["className","children","isLeftAligned"]);return a.createElement("div",Object.assign({className:(0,h.A)("pf-v5-c-tooltip__content",r&&v,t)},s),n)};y.displayName="TooltipContent";const A=e=>{var{className:t}=e,n=(0,i.Tt)(e,["className"]);return a.createElement("div",Object.assign({className:(0,h.A)("pf-v5-c-tooltip__arrow",t)},n))};A.displayName="TooltipArrow";var x=n(17732);const E={name:"--pf-v5-c-tooltip--MaxWidth",value:"18.75rem",var:"var(--pf-v5-c-tooltip--MaxWidth)"};var w,N=n(17694);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right",e.topStart="top-start",e.topEnd="top-end",e.bottomStart="bottom-start",e.bottomEnd="bottom-end",e.leftStart="left-start",e.leftEnd="left-end",e.rightStart="right-start",e.rightEnd="right-end"}(w||(w={}));let I=1;const O=e=>{var{content:t,position:n="top",trigger:v="mouseenter focus",isVisible:w=!1,isContentLeftAligned:O=!1,enableFlip:L=!0,className:P="",entryDelay:k=300,exitDelay:T=300,appendTo:D=()=>document.body,zIndex:z=9999,minWidth:R,maxWidth:$=E.value,distance:C=15,aria:B="describedby",flipBehavior:M=["top","right","bottom","left","top","right","bottom"],id:_="pf-tooltip-"+I++,children:j,animationDuration:S=300,triggerRef:U,"aria-live":W=(U?"polite":"off"),onTooltipHidden:F=()=>{}}=e,V=(0,i.Tt)(e,["content","position","trigger","isVisible","isContentLeftAligned","enableFlip","className","entryDelay","exitDelay","appendTo","zIndex","minWidth","maxWidth","distance","aria","flipBehavior","id","children","animationDuration","triggerRef","aria-live","onTooltipHidden"]);const H=v.includes("mouseenter"),J=v.includes("focus"),K=v.includes("click"),Q="manual"===v,[q,G]=a.useState(!1),X=a.createRef();a.useEffect((()=>{w?Y():Z()}),[w]);const Y=()=>{G(!0)},Z=()=>{G(!1)},ee={top:r,bottom:o,left:p,right:u,"top-start":s,"top-end":l,"bottom-start":c,"bottom-end":d,"left-start":m,"left-end":f,"right-start":g,"right-end":b},te=$!==E.value,ne=a.createElement("div",Object.assign({"aria-live":W,className:(0,h.A)("pf-v5-c-tooltip",P),role:"tooltip",id:_,style:{maxWidth:te?$:null},ref:X},V),a.createElement(A,null),a.createElement(y,{isLeftAligned:O},t));return a.createElement(N.N,{trigger:"none"!==B&&q?"describedby"===B&&j&&j.props&&!j.props["aria-describedby"]?a.cloneElement(j,{"aria-describedby":_}):"labelledby"===B&&j.props&&!j.props["aria-labelledby"]?a.cloneElement(j,{"aria-labelledby":_}):j:j,triggerRef:U,popper:ne,popperRef:X,minWidth:void 0!==R?R:"revert",appendTo:D,isVisible:q,positionModifiers:ee,distance:C,placement:n,onMouseEnter:H&&Y,onMouseLeave:H&&Z,onPopperMouseEnter:H&&Y,onPopperMouseLeave:H&&Z,onFocus:J&&Y,onBlur:J&&Z,onDocumentClick:K&&((e,t)=>{q?Z():e.target===t&&Y()}),onDocumentKeyDown:Q?null:e=>{Q||e.key===x.RU.Escape&&q&&Z()},onTriggerEnter:Q?null:e=>{e.key===x.RU.Enter&&(q?Z():Y())},enableFlip:L,zIndex:z,flipBehavior:M,animationDuration:S,entryDelay:k,exitDelay:T,onHidden:F})};O.displayName="Tooltip"},31398:(e,t,n)=>{"use strict";n.r(t),n.d(t,{getDefaultOUIAId:()=>d,getOUIAProps:()=>l,useOUIAId:()=>c,useOUIAProps:()=>o});var i=n(93345);let a=0;const r="OUIA-Generated-",s={};function l(e,t,n=!0){return{"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":n,"data-ouia-component-id":t}}const o=(e,t,n=!0,i)=>({"data-ouia-component-type":`PF5/${e}`,"data-ouia-safe":n,"data-ouia-component-id":c(e,t,i)}),c=(e,t,n)=>{const a=(0,i.useMemo)((()=>d(e,n)),[e,n]);return null!=t?t:a};function d(e,t){try{let n;return n="undefined"!=typeof window?`${window.location.href}-${e}-${t||""}`:`${e}-${t||""}`,s[n]||(s[n]=0),`${r}${e}-${t?`${t}-`:""}${++s[n]}`}catch(n){return`${r}${e}-${t?`${t}-`:""}${++a}`}}},57709:(e,t,n)=>{"use strict";n.d(t,{L:()=>i});const i="*"},49045:(e,t,n)=>{"use strict";n.d(t,{N:()=>a});var i=n(47931);const a=(e,t,n)=>{let a;if(i.Sw){const{ResizeObserver:r}=window;if(e&&r){const s=new r((e=>{n?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&(0,i.sg)(t,100)})):Array.isArray(e)&&e.length>0&&t()}));s.observe(e),a=()=>s.unobserve(e)}else window.addEventListener("resize",t),a=()=>window.removeEventListener("resize",t)}return()=>{a&&a()}}},68419:(e,t,n)=>{"use strict";n.d(t,{w:()=>s});var i=n(8674),a=n(93345);let r=0;function s({name:e,xOffset:t=0,yOffset:n=0,width:s,height:l,svgPath:o}){var c;return c=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+r++}render(){const e=this.props,{title:r,className:c}=e,d=(0,i.Tt)(e,["title","className"]),p=c?`pf-v5-svg ${c}`:"pf-v5-svg",m=Boolean(r),f=[t,n,s,l].join(" ");return a.createElement("svg",Object.assign({className:p,viewBox:f,fill:"currentColor","aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img",width:"1em",height:"1em"},d),m&&a.createElement("title",{id:this.id},r),a.createElement("path",{d:o}))}},c.displayName=e,c}},89015:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AngleRightIcon:()=>r,AngleRightIconConfig:()=>a,default:()=>s});var i=n(68419);const a={name:"AngleRightIcon",height:512,width:256,svgPath:"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",yOffset:0,xOffset:0},r=(0,i.w)(a),s=r},19202:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>i});const i=(0,n(68419).w)({name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0})},31003:(e,t,n)=>{"use strict";n.d(t,{$Q:()=>i,Ay:()=>a});const i=(0,n(68419).w)({name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0}),a=i},99851:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ExclamationTriangleIcon:()=>r,ExclamationTriangleIconConfig:()=>a,default:()=>s});var i=n(68419);const a={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},r=(0,i.w)(a),s=r},44397:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>i});const i=(0,n(68419).w)({name:"TimesIcon",height:512,width:352,svgPath:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",yOffset:0,xOffset:0})},73530:(e,t,n)=>{"use strict";n.d(t,{A:()=>i}),n(30935);const i={badge:"pf-v5-c-badge",button:"pf-v5-c-button",buttonCount:"pf-v5-c-button__count",buttonIcon:"pf-v5-c-button__icon",buttonProgress:"pf-v5-c-button__progress",modifiers:{active:"pf-m-active",block:"pf-m-block",small:"pf-m-small",primary:"pf-m-primary",displayLg:"pf-m-display-lg",secondary:"pf-m-secondary",tertiary:"pf-m-tertiary",link:"pf-m-link",unread:"pf-m-unread",inline:"pf-m-inline",danger:"pf-m-danger",warning:"pf-m-warning",control:"pf-m-control",expanded:"pf-m-expanded",plain:"pf-m-plain",noPadding:"pf-m-no-padding",disabled:"pf-m-disabled",ariaDisabled:"pf-m-aria-disabled",progress:"pf-m-progress",inProgress:"pf-m-in-progress",start:"pf-m-start",end:"pf-m-end"},spinner:"pf-v5-c-spinner",themeDark:"pf-v5-theme-dark"}},79826:()=>{},21741:()=>{},30935:()=>{},43619:()=>{},92004:()=>{},74895:()=>{},63701:()=>{},71036:()=>{},98497:()=>{},97553:()=>{},28195:()=>{},27077:()=>{}}]);
//# sourceMappingURL=../sourcemaps/6801.4ac7023148108da2e73d4ac7e807efa6.js.map