var _=Object.defineProperty;var P=e=>_(e,"__esModule",{value:!0});var q=(e,t)=>()=>(e&&(t=e(e=0)),t);var M=(e,t)=>{P(e);for(var o in t)_(e,o,{get:t[o],enumerable:!0})};var C={};M(C,{default:()=>z});function R(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),o=function(n,i){return!(t[n]===void 0||t[n]===i)};if(t.opacity<1||o("zIndex","auto")||o("transform","none")||o("mixBlendMode","normal")||o("filter","none")||o("perspective","none")||t.isolation==="isolate"||t.position==="fixed"||t.webkitOverflowScrolling==="touch")return!0;e=e.parentElement}return!1}function f(e){for(;e;){if(e.localName==="dialog")return e;e=e.parentElement}return null}function T(e){e&&e.blur&&e!==document.body&&e.blur()}function U(e,t){for(var o=0;o<e.length;++o)if(e[o]===t)return!0;return!1}function p(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function L(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var o=!1,n=function(){o?this.downgradeModal():this.maybeHideModal(),o=!1}.bind(this),i,r=function(l){if(l.target===e){var s="DOMNodeRemoved";o|=l.type.substr(0,s.length)===s,window.clearTimeout(i),i=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(l){e.addEventListener(l,r)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}var c,a,y,d,S,k,D,x,z,H=q(()=>{c=window.CustomEvent;(!c||typeof c=="object")&&(c=function(t,o){o=o||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!!o.bubbles,!!o.cancelable,o.detail||null),n},c.prototype=window.Event.prototype);L.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){!this.openAsModal_||(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),a.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var o=document.createEvent("MouseEvents");o.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(o),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"],o=t.map(function(n){return n+":not([disabled])"});o.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(o.join(", "))}T(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!a.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");R(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,a.needsCentering(this.dialog_)?(a.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var t=new c("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(t)}};a={};a.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,o=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,o)+"px"};a.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var o=document.styleSheets[t],n=null;try{n=o.cssRules}catch(I){}if(!!n)for(var i=0;i<n.length;++i){var r=n[i],l=null;try{l=document.querySelectorAll(r.selectorText)}catch(I){}if(!(!l||!U(l,e))){var s=r.style.getPropertyValue("top"),E=r.style.getPropertyValue("bottom");if(s&&s!=="auto"||E&&E!=="auto")return!0}}}return!1};a.needsCentering=function(e){var t=window.getComputedStyle(e);return t.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!a.isInlinePositionSetByStylesheet(e)};a.forceRegisterDialog=function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new L(e)};a.registerDialog=function(e){e.showModal||a.forceRegisterDialog(e)};a.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=1e5+150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var o=[];t.forEach(function(n){for(var i=0,r;r=n.removedNodes[i];++i){if(r instanceof Element)r.localName==="dialog"&&o.push(r);else continue;o=o.concat(r.querySelectorAll("dialog"))}}),o.length&&e(o)}))};a.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};a.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};a.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,t=0,o;o=this.pendingDialogStack[t];++t)o.updateZIndex(--e,--e),t===0&&(this.overlay.style.zIndex=--e);var n=this.pendingDialogStack[0];if(n){var i=n.dialog.parentNode||document.body;i.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};a.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=f(e);){for(var t=0,o;o=this.pendingDialogStack[t];++t)if(o.dialog===e)return t===0;e=e.parentElement}return!1};a.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),T(e.target),this.forwardTab_!==void 0)){var t=this.pendingDialogStack[0],o=t.dialog,n=o.compareDocumentPosition(e.target);return n&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():e.target!==document.documentElement&&document.documentElement.focus()),!1}};a.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var t=new c("cancel",{bubbles:!1,cancelable:!0}),o=this.pendingDialogStack[0];o&&o.dialog.dispatchEvent(t)&&o.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};a.DialogManager.prototype.checkDOM_=function(e){var t=this.pendingDialogStack.slice();t.forEach(function(o){e.indexOf(o.dialog)!==-1?o.downgradeModal():o.maybeHideModal()})};a.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};a.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};a.dm=new a.DialogManager;a.formSubmitter=null;a.useValue=null;window.HTMLDialogElement===void 0&&(y=document.createElement("form"),y.setAttribute("method","dialog"),y.method!=="dialog"&&(d=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method"),d&&(S=d.get,d.get=function(){return p(this)?"dialog":S.call(this)},k=d.set,d.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):k.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",d))),document.addEventListener("click",function(e){if(a.formSubmitter=null,a.useValue=null,!e.defaultPrevented){var t=e.target;if(!(!t||!p(t.form))){var o=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!o){if(!(t.localName==="input"&&t.type==="image"))return;a.useValue=e.offsetX+","+e.offsetY}var n=f(t);!n||(a.formSubmitter=t)}}},!1),D=HTMLFormElement.prototype.submit,x=function(){if(!p(this))return D.call(this);var e=f(this);e&&e.close()},HTMLFormElement.prototype.submit=x,document.addEventListener("submit",function(e){if(!e.defaultPrevented){var t=e.target;if(!!p(t)){e.preventDefault();var o=f(t);if(!!o){var n=a.formSubmitter;n&&n.form===t?o.close(a.useValue||n.value):o.close(),a.formSubmitter=null}}}},!1));z=a});function j(){let e=document.querySelector(".js-header"),t=document.querySelectorAll(".js-headerMenuButton");t.forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),e==null||e.classList.toggle("is-active"),n.setAttribute("aria-expanded",String(e==null?void 0:e.classList.contains("is-active")))})});let o=document.querySelector(".js-scrim");o==null||o.addEventListener("click",n=>{n.preventDefault(),e==null||e.classList.remove("is-active"),t.forEach(i=>{i.setAttribute("aria-expanded",String(e==null?void 0:e.classList.contains("is-active")))})})}function K(){let e=document.querySelector(".js-searchForm"),t=document.querySelector(".js-expandSearch"),o=e==null?void 0:e.querySelector("input"),n=document.querySelector(".js-headerLogo"),i=document.querySelector(".js-headerMenuButton");t==null||t.addEventListener("click",()=>{e==null||e.classList.add("go-SearchForm--expanded"),n==null||n.classList.add("go-Header-logo--hidden"),i==null||i.classList.add("go-Header-navOpen--hidden"),o==null||o.focus()}),document==null||document.addEventListener("click",r=>{(e==null?void 0:e.contains(r.target))||(e==null||e.classList.remove("go-SearchForm--expanded"),n==null||n.classList.remove("go-Header-logo--hidden"),i==null||i.classList.remove("go-Header-navOpen--hidden"))})}j();K();var g=class{constructor(t){this.el=t;var o,n,i,r,l;this.data=(o=t.dataset.toCopy)!=null?o:t.innerText,!this.data&&((n=t.parentElement)==null?void 0:n.classList.contains("go-InputGroup"))&&(this.data=(l=this.data||((r=(i=t.parentElement)==null?void 0:i.querySelector("input"))==null?void 0:r.value))!=null?l:""),t.addEventListener("click",s=>this.handleCopyClick(s))}handleCopyClick(t){t.preventDefault();let o=1e3;if(!navigator.clipboard){this.showTooltipText("Unable to copy",o);return}navigator.clipboard.writeText(this.data).then(()=>{this.showTooltipText("Copied!",o)}).catch(()=>{this.showTooltipText("Unable to copy",o)})}showTooltipText(t,o){this.el.setAttribute("data-tooltip",t),setTimeout(()=>this.el.setAttribute("data-tooltip",""),o)}};var m=class{constructor(t){this.el=t;document.addEventListener("click",o=>{this.el.contains(o.target)||this.el.removeAttribute("open")})}};var v=class{constructor(t){this.el=t;this.el.addEventListener("change",o=>{let n=o.target,i=n.value;n.value.startsWith("/")||(i="/"+i),window.location.href=i})}};var b=class{constructor(t){this.el=t;!window.HTMLDialogElement&&!t.showModal&&Promise.resolve().then(()=>(H(),C)).then(({default:i})=>{i.registerDialog(t)});let o=t.id,n=document.querySelector(`[aria-controls="${o}"]`);n&&n.addEventListener("click",()=>{var i;this.el.showModal?this.el.showModal():this.el.open=!0,(i=t.querySelector("input"))==null||i.focus()});for(let i of this.el.querySelectorAll("[data-modal-close]"))i.addEventListener("click",()=>{this.el.close?this.el.close():this.el.open=!1})}};var u={};M(u,{func:()=>B,track:()=>w});function w(e,t,o,n){var i;(i=window.dataLayer)!=null||(window.dataLayer=[]),typeof e=="string"?window.dataLayer.push({event:e,event_category:t,event_action:o,event_label:n}):window.dataLayer.push(e)}function B(e){var t;(t=window.dataLayer)!=null||(window.dataLayer=[]),window.dataLayer.push(e)}var A=class{constructor(){this.handlers={},document.addEventListener("keydown",t=>this.handleKeyPress(t))}on(t,o,n,i){var r,l;return(l=(r=this.handlers)[t])!=null||(r[t]=new Set),this.handlers[t].add({description:o,callback:n,...i}),this}handleKeyPress(t){var o;for(let n of(o=this.handlers[t.key.toLowerCase()])!=null?o:new Set){if(n.target&&n.target!==t.target)return;let i=t.target;if(!n.target&&((i==null?void 0:i.tagName)==="INPUT"||(i==null?void 0:i.tagName)==="SELECT"||(i==null?void 0:i.tagName)==="TEXTAREA")||(i==null?void 0:i.isContentEditable)||n.withMeta&&!(t.ctrlKey||t.metaKey)||!n.withMeta&&(t.ctrlKey||t.metaKey))return;w("keypress","hotkeys",`${t.key} pressed`,n.description),n.callback(t)}}},h=new A;for(let e of document.querySelectorAll(".js-clipboard"))new g(e);for(let e of document.querySelectorAll(".js-modal"))new b(e);for(let e of document.querySelectorAll(".js-tooltip"))new m(e);for(let e of document.querySelectorAll(".js-selectNav"))new v(e);h.on("t","toggle theme",()=>{let e="dark",t=document.documentElement.getAttribute("data-theme");t==="dark"?e="light":t==="light"&&(e="auto"),document.documentElement.setAttribute("data-theme",e),document.cookie=`prefers-color-scheme=${e};path=/;max-age=31536000;`});h.on("/","focus search",e=>{let t=Array.from(document.querySelectorAll(".js-searchFocus")).pop();t&&!window.navigator.userAgent.includes("Firefox")&&(e.preventDefault(),t.focus())});h.on("y","set canonical url",()=>{var t;let e=(t=document.querySelector(".js-canonicalURLPath"))==null?void 0:t.dataset.canonicalUrlPath;e&&e!==""&&window.history.replaceState(null,"",e)});(function(){u.track({"gtm.start":new Date().getTime(),event:"gtm.js"})})();function O(){let e=new URLSearchParams(window.location.search),t=e.get("utm_source");if(t!=="gopls"&&t!=="godoc"&&t!=="pkggodev")return;let o=new URL(window.location.href);e.delete("utm_source"),o.search=e.toString(),window.history.replaceState(null,"",o.toString())}var N;((N=document.querySelector(".js-gtmID"))==null?void 0:N.dataset.gtmid)&&window.dataLayer?u.func(function(){O()}):O();
/*!
 * @license
 * Copyright 2019-2020 The Go Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
/**
 * @license
 * Copyright 2020 The Go Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
/**
 * @license
 * Copyright 2021 The Go Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
//# sourceMappingURL=frontend.js.map
