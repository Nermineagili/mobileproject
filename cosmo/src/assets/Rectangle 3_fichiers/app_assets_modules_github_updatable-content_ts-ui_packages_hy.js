"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_updatable-content_ts-ui_packages_hydro-analytics_hydro-analytics_ts-82813f"],{97390:(e,t,n)=>{let r,o,i;n.d(t,{M:()=>u,T:()=>c});var a=n(14840),l=n(80702);function u(e,t=!1,n=!1){var u;return!n&&c(e)||function(e,t){let n=r instanceof Element?r:e&&e.ownerDocument&&e.ownerDocument.activeElement?e.ownerDocument.activeElement:null;if(null===n||t&&n===e)return!1;let o=n===e&&(0,l.sw)(n);if(o)return!0;let u=e.contains(n)&&!function(e){if(e instanceof a.Z)return!0;let t=e instanceof HTMLAnchorElement||e instanceof HTMLButtonElement,n=e.parentElement?.classList.contains("task-list-item");if(t&&n)return!0;if(!(i instanceof Element))return!1;let r=e.closest(s);if(!r)return!1;let o=i.closest(s);return r===o}(n);if(u)return!0;let c=i instanceof Element&&e.contains(i)&&!!i.closest("details[open] > summary");return c}(e,t)||(u=e).matches(":active:enabled")||u.contains(o)||!!(e.closest(".is-dirty")||e.querySelector(".is-dirty"))}function c(e){for(let t of e.querySelectorAll("input, textarea"))if((t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&function(e){if(e instanceof HTMLInputElement&&("checkbox"===e.type||"radio"===e.type)){if(e.checked!==e.defaultChecked)return!0}else if(e.value!==e.defaultValue)return!0;return!1}(t))return!0;return!1}document.addEventListener("mousedown",function(e){o=e.target},!0),document.addEventListener("mouseup",function(e){o=null,i=e.target},!0),document.addEventListener("contextmenu",function(e){o=null,i=e.target},!0),document.addEventListener("dragend",function(){o=null},!0);let s="a[href], button"},73893:(e,t,n)=>{let r,o;n.d(t,{lO:()=>d,qA:()=>f,y0:()=>l});let i=[],a=0;function l(){return r}function u(){try{return Math.min(Math.max(0,history.length)||0,9007199254740991)}catch(e){return 0}}function c(e){r=e;let t=location.href;i[u()-1+a]={url:t,state:r},i.length=u(),window.dispatchEvent(new CustomEvent("statechange",{bubbles:!1,cancelable:!1}))}function s(){return new Date().getTime()}function f(e,t,n){a=0;let r={_id:s(),...e};history.pushState(r,t,n),c(r)}function d(e,t,n){let o={...r,...e};history.replaceState(o,t,n),c(o)}r=function(){let e={_id:new Date().getTime(),...history.state};return c(e),e}(),window.addEventListener("popstate",function(e){let t=e.state;if(!t||!t._id&&!t.turbo?.restorationIdentifier)return;let n=t.turbo?.restorationIdentifier,r=i[u()-1+a-1]?.state?.turbo?.restorationIdentifier;r===n?a--:a++,c(t)},!0),window.addEventListener("turbo:visit",e=>{e instanceof CustomEvent&&(o=e.detail.action)}),window.addEventListener("turbo:load",()=>{"restore"!==o&&(a=0,d(history.state,"",""))}),window.addEventListener("hashchange",function(){if(u()>i.length){let e={_id:s()};history.replaceState(e,"",location.href),c(e)}},!0),window.addEventListener("pageshow",()=>{i=[],a=0})},55555:(e,t,n)=>{n.d(t,{H5:()=>f,Of:()=>h,x0:()=>m,z8:()=>d});var r=n(97390),o=n(36071),i=n(85259),a=n(5223),l=n(96776),u=n(73893);let c=new WeakMap,s={};function f(){for(let e of Object.keys(s))delete s[e];let e=history.state||{};e.staleRecords=s,(0,u.lO)(e,"",location.href),window.location.reload()}function d(){if(Object.keys(s).length>0){let e=history.state||{};e.staleRecords=s,(0,u.lO)(e,"",location.href)}}async function m(e){if(c.get(e))return;let t=e.hasAttribute("data-retain-focus"),n=e.getAttribute("data-url");if(!n)throw Error("could not get url");let o=new AbortController;c.set(e,o);try{let i=await fetch(n,{signal:o.signal,headers:{Accept:"text/html","X-Requested-With":"XMLHttpRequest"}});if(!i.ok)return;let a=await i.text();if((0,r.M)(e,t)){console.warn("Failed to update content with interactions",e);return}return s[n]=a,p(e,a,t)}catch{}finally{c.delete(e)}}async function h(e,t,n=!1){let r=c.get(e);r?.abort();let o=e.closest(".js-updatable-content[data-url], .js-updatable-content [data-url]");return!n&&o&&o===e&&(s[o.getAttribute("data-url")||""]=t),p(e,t)}function p(e,t,n=!1){return(0,l._8)(document,()=>{let r=(0,a.r)(document,t.trim()),o=n&&e.ownerDocument&&e===e.ownerDocument.activeElement?r.querySelector("*"):null,l=Array.from(e.querySelectorAll("details[open][id]")).map(e=>e.id);for(let t of("DETAILS"===e.tagName&&e.id&&e.hasAttribute("open")&&l.push(e.id),e.querySelectorAll(".js-updatable-content-preserve-scroll-position"))){let e=t.getAttribute("data-updatable-content-scroll-position-id")||"";y.set(e,t.scrollTop)}for(let e of l){let t=r.querySelector(`#${e}`);t&&t.setAttribute("open","")}(0,i.nn)(e,r),o instanceof HTMLElement&&o.focus()})}let y=new Map;(0,o.N7)(".js-updatable-content-preserve-scroll-position",{constructor:HTMLElement,add(e){let t=e.getAttribute("data-updatable-content-scroll-position-id");if(!t)return;let n=y.get(t);null!=n&&(e.scrollTop=n)}})},40578:(e,t,n)=>{let r;function o(){if(!r)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return r}function i(){return r?.locale??"en-US"}n.d(t,{Kd:()=>i,dU:()=>o}),function(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{r=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}()},87274:(e,t,n)=>{n.d(t,{C:()=>i,x:()=>o});var r=n(71207);let o=r.n4?.readyState==="interactive"||r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),i=r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.iG?.addEventListener("load",e)})},18515:(e,t,n)=>{n.d(t,{$:()=>c,c:()=>u});var r=n(15205),o=n(40578),i=n(71207);function a(){let e=(0,o.dU)().featureFlags,t=e.map(e=>e.toUpperCase());return new Set(t)}let l=i.W6?a:(0,r.Z)(a);function u(e){return l().has(e.toUpperCase())}let c={isFeatureEnabled:u}},80702:(e,t,n)=>{n.d(t,{Bt:()=>i,DN:()=>l,KL:()=>s,Se:()=>a,qC:()=>f,sw:()=>u});var r=n(31347);function o(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:n}))}function i(e,t){t&&(function(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}(e,t),(0,r.j)(t)),o(e,"submit",!0)&&e.submit()}function a(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}o(e,"change",!1)}function l(e,t){for(let n in t){let r=t[n],o=e.elements.namedItem(n);o instanceof HTMLInputElement?o.value=r:o instanceof HTMLTextAreaElement&&(o.value=r)}}function u(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n||e.isContentEditable}function c(e){return new URLSearchParams(e)}function s(e,t){let n=new URLSearchParams(e.search),r=c(t);for(let[e,t]of r)n.append(e,t);return n.toString()}function f(e){return c(new FormData(e)).toString()}},31347:(e,t,n)=>{function r(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let n=o(t);if(e.name){let r=e.matches("input[type=submit]")?"Submit":"",o=e.value||r;n||((n=document.createElement("input")).type="hidden",n.classList.add("js-submit-button-value"),t.prepend(n)),n.name=e.name,n.value=o}else n&&n.remove()}function o(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}n.d(t,{j:()=>r,u:()=>o})},79697:(e,t,n)=>{let r;n.d(t,{YT:()=>d,qP:()=>m,yM:()=>h});var o=n(88149),i=n(86058),a=n(56363),l=n(43786);let{getItem:u}=(0,a.Z)("localStorage"),c="dimension_",s=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,o.n)("octolytics");delete e.baseContext,r=new i.R(e)}catch(e){}function f(e){let t=(0,o.n)("octolytics").baseContext||{};if(t)for(let[e,n]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=n,delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");if(n){let e=JSON.parse(atob(n.content));Object.assign(t,e)}let r=new URLSearchParams(window.location.search);for(let[e,n]of r)s.includes(e.toLowerCase())&&(t[e]=n);return t.staff=(0,l.B)().toString(),Object.assign(t,e)}function d(e){r?.sendPageView(f(e))}function m(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,o=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(o[e]=`${n}`);if(r){let t=e||"unknown";f(o),r.sendEvent(t,f(o))}}function h(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},85259:(e,t,n)=>{n.d(t,{j1:()=>i,jI:()=>l,nn:()=>a});var r=n(39492);function o(e){return{getNodeKey:()=>null,onBeforeElUpdated:(t,n)=>{if("TURBO-FRAME"===n.tagName||n.matches(".js-task-list-field, .contains-task-list")||"false"===n.getAttribute("data-morpheus-enabled"))return t.replaceWith(n),!1;if(t.hasAttribute("data-catalyst")&&n.setAttribute("data-catalyst",t.getAttribute("data-catalyst")||""),t.hasAttribute("data-morpheus-ignore")){let e=(t.getAttribute("data-morpheus-ignore")||"").trim().split(/\s+/);for(let r of e)t.hasAttribute(r)?n.setAttribute(r,t.getAttribute(r)||""):n.removeAttribute(r)}return e?.keepInputValues&&(n instanceof HTMLInputElement&&n.type===t.type||n instanceof HTMLTextAreaElement)&&(n instanceof HTMLInputElement&&("checkbox"===n.type||"radio"===n.type)?n.checked=t.checked:n.value=t.value),!0},onBeforeElChildrenUpdated:(e,t)=>{for(let n of[...e.childNodes,...t.childNodes])n.nodeType===Node.COMMENT_NODE&&n.remove();return!0},onElUpdated:e=>{e.connectedCallback&&queueMicrotask(()=>{e.disconnectedCallback?.(),e.connectedCallback?.()})}}}function i(e){let t=e.closest("[data-morpheus-enabled]");return null!=t&&"false"!==t.getAttribute("data-morpheus-enabled")}function a(e,t,n){if("string"==typeof t){let e=document.createElement("template");e.innerHTML=t,t=e.content}if(!i(e)){e.replaceWith(t);return}if(t instanceof DocumentFragment){let i=Array.from(t.children);i.length?((0,r.Z)(e,i[0],o(n)),e.after(...i.slice(1))):e.replaceWith(t)}else(0,r.Z)(e,t,o(n))}function l(e,t,n){if(!i(e)){e.innerHTML=t;return}let a="",l="";e.firstChild?.nodeType===Node.TEXT_NODE&&(a=e.firstChild.nodeValue?.match(/^\s+/)?.[0]||""),e.lastChild?.nodeType===Node.TEXT_NODE&&(l=e.lastChild.nodeValue?.match(/\s+$/)?.[0]||"");let u=e.cloneNode(!1);u.innerHTML=`${a}${t.trim()}${l}`,(0,r.Z)(e,u,o(n))}},54508:(e,t,n)=>{n.d(t,{A:()=>l,k:()=>a});var r=n(15205),o=n(71207);let i=(0,r.Z)(function(){return o.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),a=(0,r.Z)(function(){return"enterprise"===i()}),l="webpack"},56363:(e,t,n)=>{n.d(t,{Z:()=>a,_:()=>l});var r=n(71207),o=n(43786);let i=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function a(e,t={throwQuotaErrorsOnSet:!1},n=r.iG,a=e=>e,l=e=>e){let u;try{if(!n)throw Error();u=n[e]||new i}catch{u=new i}let{throwQuotaErrorsOnSet:c}=t;function s(e){t.sendCacheStats&&(0,o.b)({incrementKey:e})}function f(e){try{if(u.removeItem(e),t.ttl){let t=`${e}:expiry`;u.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let n=u.getItem(e);if(!n)return null;let r=`${e}:expiry`,o=Number(u.getItem(r));if(o&&t>o)return f(e),f(r),s("SAFE_STORAGE_VALUE_EXPIRED"),null;return s("SAFE_STORAGE_VALUE_WITHIN_TTL"),a(n)}catch(e){return null}},setItem:function(e,n,r=new Date().getTime()){try{if(u.setItem(e,l(n)),t.ttl){let n=`${e}:expiry`,o=r+t.ttl;u.setItem(n,o.toString())}}catch(e){if(c&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:f,clear:u.clear,key:u.key,get length(){return u.length}}}function l(e){return a(e,{throwQuotaErrorsOnSet:!1},r.iG,JSON.parse,JSON.stringify)}},65706:(e,t,n)=>{n.d(t,{LS:()=>i,cl:()=>a,rV:()=>o});var r=n(56363);let{getItem:o,setItem:i,removeItem:a}=(0,r.Z)("sessionStorage")},58374:(e,t,n)=>{n.d(t,{Ak:()=>g,CI:()=>S,Gj:()=>p,J$:()=>E,Nb:()=>L,Nt:()=>w,OE:()=>y,U6:()=>d,Wl:()=>b,XL:()=>f,jN:()=>o,pS:()=>m,sj:()=>h,vu:()=>T,wG:()=>A,wP:()=>v});var r=n(65706);let o="reload",i="soft-nav:fail",a="soft-nav:fail-referrer",l="soft-nav:referrer",u="soft-nav:marker",c="soft-nav:react-app-name",s="soft-nav:latest-mechanism";function f(){(0,r.LS)(u,"0"),(0,r.cl)(l),(0,r.cl)(i),(0,r.cl)(a),(0,r.cl)(c),(0,r.cl)(s)}function d(e){(0,r.LS)(u,e)}function m(){(0,r.LS)(u,"0")}function h(){let e=(0,r.rV)(u);return e&&"0"!==e}function p(){return(0,r.rV)(u)}function y(){return!!b()}function b(){return(0,r.rV)(i)}function g(e){(0,r.LS)(i,e||o),(0,r.LS)(a,window.location.href)}function w(){(0,r.LS)(l,window.location.href)}function v(){return(0,r.rV)(l)||document.referrer}function E(){let e=L();e?(0,r.LS)(c,e):(0,r.cl)(c)}function S(){return(0,r.rV)(c)}function L(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}function T(e){(0,r.LS)(s,e)}function A(){return(0,r.rV)(s)}},71207:(e,t,n)=>{n.d(t,{Qg:()=>r.Qg,W6:()=>r.W6,cF:()=>r.cF,iG:()=>o.iG,n4:()=>o.n4,ssrSafeLocation:()=>o.jX,zu:()=>o.zu});var r=n(60327),o=n(66199)},66199:(e,t,n)=>{n.d(t,{iG:()=>o,jX:()=>a,n4:()=>r,zu:()=>i});let r="undefined"==typeof document?void 0:document,o="undefined"==typeof window?void 0:window,i="undefined"==typeof history?void 0:history,a="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},60327:(e,t,n)=>{n.d(t,{Qg:()=>i,W6:()=>o,cF:()=>a});var r=n(66199);let o=void 0===r.n4,i=!o;function a(){return!!o||!!r.n4.querySelector('react-app[data-ssr="true"]')}},43786:(e,t,n)=>{n.d(t,{B:()=>d,b:()=>u});var r=n(71207),o=n(87274),i=n(54508),a=n(18515);let l=[];function u(e,t=!1,n=1){if(!0!==(0,a.c)("BROWSER_STATS_DISABLED")){if(n<0||n>1)throw RangeError("Sampling probability must be between 0 and 1");void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=!!r.n4?.head?.querySelector('meta[name="user-login"]')?.content,e.staff=d(),e.bundler=i.A,Math.random()<n&&l.push(e),t?f():s()}}let c=null;async function s(){await o.C,null==c&&(c=window.requestIdleCallback(f))}function f(){if(c=null,!l.length)return;let e=r.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!e)return;let t=function(e){let t=[],n=e.map(e=>JSON.stringify(e));for(;n.length>0;)t.push(function(e){let t=e.shift(),n=[t],r=t.length;for(;e.length>0&&r<=65536;){let t=e[0].length;if(r+t<=65536){let o=e.shift();n.push(o),r+=t}else break}return n}(n));return t}(l);for(let n of t)!function(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}(e,`{"stats": [${n.join(",")}] }`);l=[]}function d(){return!!r.n4?.head?.querySelector('meta[name="user-staff"]')?.content}r.n4?.addEventListener("pagehide",f),r.n4?.addEventListener("visibilitychange",f)}}]);
//# sourceMappingURL=app_assets_modules_github_updatable-content_ts-ui_packages_hydro-analytics_hydro-analytics_ts-82813f-d8b2441de6c9.js.map