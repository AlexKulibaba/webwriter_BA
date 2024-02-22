(function($,p){typeof exports=="object"&&typeof module<"u"?p(exports):typeof define=="function"&&define.amd?define(["exports"],p):($=typeof globalThis<"u"?globalThis:$||self,p(($.index=$.index||{},$.index.js={})))})(this,function($){"use strict";var zt=Object.defineProperty;var Bt=($,p,_)=>p in $?zt($,p,{enumerable:!0,configurable:!0,writable:!0,value:_}):$[p]=_;var S=($,p,_)=>(Bt($,typeof p!="symbol"?p+"":p,_),_);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $t;const p=globalThis,_=p.ShadowRoot&&(p.ShadyCSS===void 0||p.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),K=new WeakMap;let _t=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(_&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=K.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&K.set(e,t))}return t}toString(){return this.cssText}};const ft=n=>new _t(typeof n=="string"?n:n+"",void 0,J),Z=(n,t)=>{if(_)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=p.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},F=_?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ft(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mt,defineProperty:gt,getOwnPropertyDescriptor:yt,getOwnPropertyNames:At,getOwnPropertySymbols:vt,getPrototypeOf:Et}=Object,m=globalThis,G=m.trustedTypes,St=G?G.emptyScript:"",D=m.reactiveElementPolyfillSupport,P=(n,t)=>n,R={toAttribute(n,t){switch(t){case Boolean:n=n?St:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},z=(n,t)=>!mt(n,t),Q={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:z};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&gt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=yt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const c=i==null?void 0:i.call(this);r.call(this,o),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Q}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=Et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,s=[...At(e),...vt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(F(i))}else t!==void 0&&e.push(F(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$E_)==null||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Z(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var r;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:R).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var r;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:R;this._$Em=i,this[i]=c.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??z)(this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$ET??(this._$ET=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.C(r,this[r],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$E_)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(e)):this._$Ej()}catch(i){throw t=!1,this._$Ej(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$E_)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&(this._$ET=this._$ET.forEach(e=>this._$EO(e,this[e]))),this._$Ej()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[P("elementProperties")]=new Map,b[P("finalized")]=new Map,D==null||D({ReactiveElement:b}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis,k=x.trustedTypes,X=k?k.createPolicy("lit-html",{createHTML:n=>n}):void 0,Y="$lit$",g=`lit$${(Math.random()+"").slice(9)}$`,tt="?"+g,bt=`<${tt}>`,A=document,O=()=>A.createComment(""),U=n=>n===null||typeof n!="object"&&typeof n!="function",et=Array.isArray,wt=n=>et(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",B=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,st=/-->/g,it=/>/g,v=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,rt=/"/g,ot=/^(?:script|style|textarea|title)$/i,w=Symbol.for("lit-noChange"),l=Symbol.for("lit-nothing"),ht=new WeakMap,E=A.createTreeWalker(A,129);function ct(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(t):t}const Ct=(n,t)=>{const e=n.length-1,s=[];let i,r=t===2?"<svg>":"",o=M;for(let c=0;c<e;c++){const h=n[c];let d,u,a=-1,f=0;for(;f<h.length&&(o.lastIndex=f,u=o.exec(h),u!==null);)f=o.lastIndex,o===M?u[1]==="!--"?o=st:u[1]!==void 0?o=it:u[2]!==void 0?(ot.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=v):u[3]!==void 0&&(o=v):o===v?u[0]===">"?(o=i??M,a=-1):u[1]===void 0?a=-2:(a=o.lastIndex-u[2].length,d=u[1],o=u[3]===void 0?v:u[3]==='"'?rt:nt):o===rt||o===nt?o=v:o===st||o===it?o=M:(o=v,i=void 0);const y=o===v&&n[c+1].startsWith("/>")?" ":"";r+=o===M?h+bt:a>=0?(s.push(d),h.slice(0,a)+Y+h.slice(a)+g+y):h+g+(a===-2?c:y)}return[ct(n,r+(n[e]||"<?>")+(t===2?"</svg>":"")),s]};class H{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const c=t.length-1,h=this.parts,[d,u]=Ct(t,e);if(this.el=H.createElement(d,s),E.currentNode=this.el.content,e===2){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=E.nextNode())!==null&&h.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const a of i.getAttributeNames())if(a.endsWith(Y)){const f=u[o++],y=i.getAttribute(a).split(g),L=/([.?@])?(.*)/.exec(f);h.push({type:1,index:r,name:L[2],strings:y,ctor:L[1]==="."?xt:L[1]==="?"?Ot:L[1]==="@"?Ut:j}),i.removeAttribute(a)}else a.startsWith(g)&&(h.push({type:6,index:r}),i.removeAttribute(a));if(ot.test(i.tagName)){const a=i.textContent.split(g),f=a.length-1;if(f>0){i.textContent=k?k.emptyScript:"";for(let y=0;y<f;y++)i.append(a[y],O()),E.nextNode(),h.push({type:2,index:++r});i.append(a[f],O())}}}else if(i.nodeType===8)if(i.data===tt)h.push({type:2,index:r});else{let a=-1;for(;(a=i.data.indexOf(g,a+1))!==-1;)h.push({type:7,index:r}),a+=g.length-1}r++}}static createElement(t,e){const s=A.createElement("template");return s.innerHTML=t,s}}function C(n,t,e=n,s){var o,c;if(t===w)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const r=U(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=C(n,i._$AS(n,t.values),i,s)),t}class Pt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??A).importNode(e,!0);E.currentNode=i;let r=E.nextNode(),o=0,c=0,h=s[0];for(;h!==void 0;){if(o===h.index){let d;h.type===2?d=new T(r,r.nextSibling,this,t):h.type===1?d=new h.ctor(r,h.name,h.strings,this,t):h.type===6&&(d=new Mt(r,this,t)),this._$AV.push(d),h=s[++c]}o!==(h==null?void 0:h.index)&&(r=E.nextNode(),o++)}return E.currentNode=A,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class T{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=l,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),U(t)?t===l||t==null||t===""?(this._$AH!==l&&this._$AR(),this._$AH=l):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):wt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==l&&U(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var r;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=H.createElement(ct(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(e);else{const o=new Pt(i,this),c=o.u(this.options);o.p(e),this.$(c),this._$AH=o}}_$AC(t){let e=ht.get(t.strings);return e===void 0&&ht.set(t.strings,e=new H(t)),e}T(t){et(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new T(this.k(O()),this.k(O()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=l,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=l}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(r===void 0)t=C(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const c=t;let h,d;for(t=r[0],h=0;h<r.length-1;h++)d=C(this,c[s+h],e,h),d===w&&(d=this._$AH[h]),o||(o=!U(d)||d!==this._$AH[h]),d===l?t=l:t!==l&&(t+=(d??"")+r[h+1]),this._$AH[h]=d}o&&!i&&this.O(t)}O(t){t===l?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xt extends j{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===l?void 0:t}}class Ot extends j{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==l)}}class Ut extends j{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??l)===w)return;const s=this._$AH,i=t===l&&s!==l||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==l&&(s===l||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Mt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const W=x.litHtmlPolyfillSupport;W==null||W(H,T),(x.litHtmlVersions??(x.litHtmlVersions=[])).push("3.1.1");const Ht=(n,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new T(t.insertBefore(O(),r),r,void 0,e??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class N extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return w}}N._$litElement$=!0,N.finalized=!0,($t=globalThis.litElementHydrateSupport)==null||$t.call(globalThis,{LitElement:N});const V=globalThis.litElementPolyfillSupport;V==null||V({LitElement:N}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:z},Nt=(n=Tt,t,e)=>{const{kind:s,metadata:i}=e;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(e.name,n),s==="accessor"){const{name:o}=e;return{set(c){const h=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,h,n)},init(c){return c!==void 0&&this.C(o,void 0,n),c}}}if(s==="setter"){const{name:o}=e;return function(c){const h=this[o];t.call(this,c),this.requestUpdate(o,h,n)}}throw Error("Unsupported decorator location: "+s)};function at(n){return(t,e)=>typeof e=="object"?Nt(n,t,e):((s,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(i,r):void 0})(n,t,e)}const lt=new WeakMap;function Rt(n,t){let e=t;for(;e;){if(lt.get(e)===n)return!0;e=Object.getPrototypeOf(e)}return!1}function dt(n){return t=>{if(Rt(n,t))return t;const e=n(t);return lt.set(e,n),e}}const q="3.0.0",pt=window.scopedElementsVersions||(window.scopedElementsVersions=[]);pt.includes(q)||pt.push(q);const kt=dt(n=>{var t;return t=class extends n{static get scopedElementsVersion(){return q}get registry(){return this.constructor.__registry}set registry(s){this.constructor.__registry=s}attachShadow(s){const{scopedElements:i}=this.constructor;if(!this.registry){this.registry=new CustomElementRegistry;for(const[r,o]of Object.entries(i??{}))this.registry.define(r,o)}return super.attachShadow({...s,customElements:this.registry,registry:this.registry})}},S(t,"scopedElements"),S(t,"__registry"),t}),jt=dt(n=>class extends kt(n){createRenderRoot(){var r;const{shadowRootOptions:e,elementStyles:s}=this.constructor,i=this.attachShadow(e);return this.renderOptions.creationScope=i,Z(i,s),(r=this.renderOptions).renderBefore??(r.renderBefore=i.firstChild),i}});var It=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,ut=(n,t,e,s)=>{for(var i=s>1?void 0:s?Lt(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&It(t,e,i),i};function Dt(n={type:"string"}){return(t,e)=>{t.constructor.options={...t.constructor.options,[e]:n}}}class I extends jt(N){constructor(){super(...arguments);S(this,"options");S(this,"contentEditable");S(this,"lang")}connectedCallback(){super.connectedCallback(),this.getAttributeNames().forEach(e=>this.setAttribute(e,this.getAttribute(e)))}}S(I,"options",{}),ut([at({type:String,attribute:!0,reflect:!0})],I.prototype,"contentEditable",2),ut([at({type:String,attribute:!0,reflect:!0})],I.prototype,"lang",2),$.LitElementWw=I,$.option=Dt,Object.defineProperty($,Symbol.toStringTag,{value:"Module"})});
