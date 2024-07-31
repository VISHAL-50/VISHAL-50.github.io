(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Hc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wc={exports:{}},bo={},Yc={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jr=Symbol.for("react.element"),om=Symbol.for("react.portal"),sm=Symbol.for("react.fragment"),lm=Symbol.for("react.strict_mode"),am=Symbol.for("react.profiler"),um=Symbol.for("react.provider"),cm=Symbol.for("react.context"),dm=Symbol.for("react.forward_ref"),fm=Symbol.for("react.suspense"),pm=Symbol.for("react.memo"),mm=Symbol.for("react.lazy"),nu=Symbol.iterator;function hm(e){return e===null||typeof e!="object"?null:(e=nu&&e[nu]||e["@@iterator"],typeof e=="function"?e:null)}var Xc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qc=Object.assign,Kc={};function Zn(e,t,n){this.props=e,this.context=t,this.refs=Kc,this.updater=n||Xc}Zn.prototype.isReactComponent={};Zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qc(){}qc.prototype=Zn.prototype;function Xl(e,t,n){this.props=e,this.context=t,this.refs=Kc,this.updater=n||Xc}var Ql=Xl.prototype=new qc;Ql.constructor=Xl;Qc(Ql,Zn.prototype);Ql.isPureReactComponent=!0;var ru=Array.isArray,Zc=Object.prototype.hasOwnProperty,Kl={current:null},Jc={key:!0,ref:!0,__self:!0,__source:!0};function ed(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Zc.call(t,r)&&!Jc.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Jr,type:e,key:o,ref:s,props:i,_owner:Kl.current}}function gm(e,t){return{$$typeof:Jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ql(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jr}function vm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var iu=/\/+/g;function Uo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vm(""+e.key):t.toString(36)}function Ni(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Jr:case om:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Uo(s,0):r,ru(i)?(n="",e!=null&&(n=e.replace(iu,"$&/")+"/"),Ni(i,t,n,"",function(u){return u})):i!=null&&(ql(i)&&(i=gm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(iu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",ru(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Uo(o,l);s+=Ni(o,t,n,a,i)}else if(a=hm(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Uo(o,l++),s+=Ni(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ui(e,t,n){if(e==null)return e;var r=[],i=0;return Ni(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ym(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},zi={transition:null},wm={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:zi,ReactCurrentOwner:Kl};function td(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:ui,forEach:function(e,t,n){ui(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ui(e,function(){t++}),t},toArray:function(e){return ui(e,function(t){return t})||[]},only:function(e){if(!ql(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Zn;U.Fragment=sm;U.Profiler=am;U.PureComponent=Xl;U.StrictMode=lm;U.Suspense=fm;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wm;U.act=td;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qc({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Kl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Zc.call(t,a)&&!Jc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Jr,type:e.type,key:i,ref:o,props:r,_owner:s}};U.createContext=function(e){return e={$$typeof:cm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:um,_context:e},e.Consumer=e};U.createElement=ed;U.createFactory=function(e){var t=ed.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:dm,render:e}};U.isValidElement=ql;U.lazy=function(e){return{$$typeof:mm,_payload:{_status:-1,_result:e},_init:ym}};U.memo=function(e,t){return{$$typeof:pm,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=zi.transition;zi.transition={};try{e()}finally{zi.transition=t}};U.unstable_act=td;U.useCallback=function(e,t){return Ee.current.useCallback(e,t)};U.useContext=function(e){return Ee.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};U.useEffect=function(e,t){return Ee.current.useEffect(e,t)};U.useId=function(){return Ee.current.useId()};U.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Ee.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};U.useRef=function(e){return Ee.current.useRef(e)};U.useState=function(e){return Ee.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Ee.current.useTransition()};U.version="18.3.1";Yc.exports=U;var k=Yc.exports;const K=Hc(k);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm=k,Sm=Symbol.for("react.element"),bm=Symbol.for("react.fragment"),Em=Object.prototype.hasOwnProperty,km=xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cm={key:!0,ref:!0,__self:!0,__source:!0};function nd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Em.call(t,r)&&!Cm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Sm,type:e,key:o,ref:s,props:i,_owner:km.current}}bo.Fragment=bm;bo.jsx=nd;bo.jsxs=nd;Wc.exports=bo;var v=Wc.exports,un={},rd={exports:{}},Fe={},id={exports:{}},od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,L){var B=E.length;E.push(L);e:for(;0<B;){var _=B-1>>>1,O=E[_];if(0<i(O,L))E[_]=L,E[B]=O,B=_;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var L=E[0],B=E.pop();if(B!==L){E[0]=B;e:for(var _=0,O=E.length,Q=O>>>1;_<Q;){var Ye=2*(_+1)-1,Go=E[Ye],qt=Ye+1,ai=E[qt];if(0>i(Go,B))qt<O&&0>i(ai,Go)?(E[_]=ai,E[qt]=B,_=qt):(E[_]=Go,E[Ye]=B,_=Ye);else if(qt<O&&0>i(ai,B))E[_]=ai,E[qt]=B,_=qt;else break e}}return L}function i(E,L){var B=E.sortIndex-L.sortIndex;return B!==0?B:E.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],d=1,p=null,h=3,g=!1,y=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(E){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=E)r(u),L.sortIndex=L.expirationTime,t(a,L);else break;L=n(u)}}function w(E){if(x=!1,m(E),!y)if(n(a)!==null)y=!0,W(S);else{var L=n(u);L!==null&&R(w,L.startTime-E)}}function S(E,L){y=!1,x&&(x=!1,c(A),A=-1),g=!0;var B=h;try{for(m(L),p=n(a);p!==null&&(!(p.expirationTime>L)||E&&!j());){var _=p.callback;if(typeof _=="function"){p.callback=null,h=p.priorityLevel;var O=_(p.expirationTime<=L);L=e.unstable_now(),typeof O=="function"?p.callback=O:p===n(a)&&r(a),m(L)}else r(a);p=n(a)}if(p!==null)var Q=!0;else{var Ye=n(u);Ye!==null&&R(w,Ye.startTime-L),Q=!1}return Q}finally{p=null,h=B,g=!1}}var T=!1,z=null,A=-1,I=5,C=-1;function j(){return!(e.unstable_now()-C<I)}function P(){if(z!==null){var E=e.unstable_now();C=E;var L=!0;try{L=z(!0,E)}finally{L?N():(T=!1,z=null)}}else T=!1}var N;if(typeof f=="function")N=function(){f(P)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,$=V.port2;V.port1.onmessage=P,N=function(){$.postMessage(null)}}else N=function(){b(P,0)};function W(E){z=E,T||(T=!0,N())}function R(E,L){A=b(function(){E(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,W(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var B=h;h=L;try{return E()}finally{h=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,L){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var B=h;h=E;try{return L()}finally{h=B}},e.unstable_scheduleCallback=function(E,L,B){var _=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?_+B:_):B=_,E){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=B+O,E={id:d++,callback:L,priorityLevel:E,startTime:B,expirationTime:O,sortIndex:-1},B>_?(E.sortIndex=B,t(u,E),n(a)===null&&E===n(u)&&(x?(c(A),A=-1):x=!0,R(w,B-_))):(E.sortIndex=O,t(a,E),y||g||(y=!0,W(S))),E},e.unstable_shouldYield=j,e.unstable_wrapCallback=function(E){var L=h;return function(){var B=h;h=L;try{return E.apply(this,arguments)}finally{h=B}}}})(od);id.exports=od;var Am=id.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm=k,_e=Am;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sd=new Set,Or={};function yn(e,t){Gn(e,t),Gn(e+"Capture",t)}function Gn(e,t){for(Or[e]=t,e=0;e<t.length;e++)sd.add(t[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ls=Object.prototype.hasOwnProperty,Pm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ou={},su={};function Nm(e){return Ls.call(su,e)?!0:Ls.call(ou,e)?!1:Pm.test(e)?su[e]=!0:(ou[e]=!0,!1)}function zm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Im(e,t,n,r){if(t===null||typeof t>"u"||zm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zl=/[\-:]([a-z])/g;function Jl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zl,Jl);ge[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zl,Jl);ge[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zl,Jl);ge[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function ea(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Im(t,n,i,r)&&(n=null),r||i===null?Nm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Et=Tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ci=Symbol.for("react.element"),Sn=Symbol.for("react.portal"),bn=Symbol.for("react.fragment"),ta=Symbol.for("react.strict_mode"),js=Symbol.for("react.profiler"),ld=Symbol.for("react.provider"),ad=Symbol.for("react.context"),na=Symbol.for("react.forward_ref"),_s=Symbol.for("react.suspense"),Fs=Symbol.for("react.suspense_list"),ra=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),ud=Symbol.for("react.offscreen"),lu=Symbol.iterator;function sr(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Ho;function hr(e){if(Ho===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ho=t&&t[1]||""}return`
`+Ho+e}var Wo=!1;function Yo(e,t){if(!e||Wo)return"";Wo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Wo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?hr(e):""}function Mm(e){switch(e.tag){case 5:return hr(e.type);case 16:return hr("Lazy");case 13:return hr("Suspense");case 19:return hr("SuspenseList");case 0:case 2:case 15:return e=Yo(e.type,!1),e;case 11:return e=Yo(e.type.render,!1),e;case 1:return e=Yo(e.type,!0),e;default:return""}}function Rs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bn:return"Fragment";case Sn:return"Portal";case js:return"Profiler";case ta:return"StrictMode";case _s:return"Suspense";case Fs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ad:return(e.displayName||"Context")+".Consumer";case ld:return(e._context.displayName||"Context")+".Provider";case na:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ra:return t=e.displayName||null,t!==null?t:Rs(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return Rs(e(t))}catch{}}return null}function Om(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rs(t);case 8:return t===ta?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lm(e){var t=cd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function di(e){e._valueTracker||(e._valueTracker=Lm(e))}function dd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=cd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ds(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function au(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fd(e,t){t=t.checked,t!=null&&ea(e,"checked",t,!1)}function Vs(e,t){fd(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bs(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bs(e,t,n){(t!=="number"||Ui(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var gr=Array.isArray;function jn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $s(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(gr(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function pd(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function du(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function md(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?md(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fi,hd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fi=fi||document.createElement("div"),fi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jm=["Webkit","ms","Moz","O"];Object.keys(Sr).forEach(function(e){jm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sr[t]=Sr[e]})});function gd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sr.hasOwnProperty(e)&&Sr[e]?(""+t).trim():t+"px"}function vd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var _m=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Us(e,t){if(t){if(_m[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function Hs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ws=null;function ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,_n=null,Fn=null;function fu(e){if(e=ni(e)){if(typeof Ys!="function")throw Error(M(280));var t=e.stateNode;t&&(t=To(t),Ys(e.stateNode,e.type,t))}}function yd(e){_n?Fn?Fn.push(e):Fn=[e]:_n=e}function wd(){if(_n){var e=_n,t=Fn;if(Fn=_n=null,fu(e),t)for(e=0;e<t.length;e++)fu(t[e])}}function xd(e,t){return e(t)}function Sd(){}var Xo=!1;function bd(e,t,n){if(Xo)return e(t,n);Xo=!0;try{return xd(e,t,n)}finally{Xo=!1,(_n!==null||Fn!==null)&&(Sd(),wd())}}function jr(e,t){var n=e.stateNode;if(n===null)return null;var r=To(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Xs=!1;if(vt)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){Xs=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{Xs=!1}function Fm(e,t,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var br=!1,Hi=null,Wi=!1,Qs=null,Rm={onError:function(e){br=!0,Hi=e}};function Dm(e,t,n,r,i,o,s,l,a){br=!1,Hi=null,Fm.apply(Rm,arguments)}function Vm(e,t,n,r,i,o,s,l,a){if(Dm.apply(this,arguments),br){if(br){var u=Hi;br=!1,Hi=null}else throw Error(M(198));Wi||(Wi=!0,Qs=u)}}function wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ed(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pu(e){if(wn(e)!==e)throw Error(M(188))}function Bm(e){var t=e.alternate;if(!t){if(t=wn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return pu(i),e;if(o===r)return pu(i),t;o=o.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function kd(e){return e=Bm(e),e!==null?Cd(e):null}function Cd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cd(e);if(t!==null)return t;e=e.sibling}return null}var Ad=_e.unstable_scheduleCallback,mu=_e.unstable_cancelCallback,$m=_e.unstable_shouldYield,Gm=_e.unstable_requestPaint,le=_e.unstable_now,Um=_e.unstable_getCurrentPriorityLevel,oa=_e.unstable_ImmediatePriority,Td=_e.unstable_UserBlockingPriority,Yi=_e.unstable_NormalPriority,Hm=_e.unstable_LowPriority,Pd=_e.unstable_IdlePriority,Eo=null,at=null;function Wm(e){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Eo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:Qm,Ym=Math.log,Xm=Math.LN2;function Qm(e){return e>>>=0,e===0?32:31-(Ym(e)/Xm|0)|0}var pi=64,mi=4194304;function vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=vr(l):(o&=s,o!==0&&(r=vr(o)))}else s=n&~i,s!==0?r=vr(s):o!==0&&(r=vr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),i=1<<n,r|=e[n],t&=~i;return r}function Km(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ze(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=Km(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function Ks(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nd(){var e=pi;return pi<<=1,!(pi&4194240)&&(pi=64),e}function Qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ei(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function Zm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ze(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function sa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var X=0;function zd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Id,la,Md,Od,Ld,qs=!1,hi=[],jt=null,_t=null,Ft=null,_r=new Map,Fr=new Map,Nt=[],Jm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hu(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fr.delete(t.pointerId)}}function ar(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ni(t),t!==null&&la(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function eh(e,t,n,r,i){switch(t){case"focusin":return jt=ar(jt,e,t,n,r,i),!0;case"dragenter":return _t=ar(_t,e,t,n,r,i),!0;case"mouseover":return Ft=ar(Ft,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return _r.set(o,ar(_r.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Fr.set(o,ar(Fr.get(o)||null,e,t,n,r,i)),!0}return!1}function jd(e){var t=tn(e.target);if(t!==null){var n=wn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ed(n),t!==null){e.blockedOn=t,Ld(e.priority,function(){Md(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ws=r,n.target.dispatchEvent(r),Ws=null}else return t=ni(n),t!==null&&la(t),e.blockedOn=n,!1;t.shift()}return!0}function gu(e,t,n){Ii(e)&&n.delete(t)}function th(){qs=!1,jt!==null&&Ii(jt)&&(jt=null),_t!==null&&Ii(_t)&&(_t=null),Ft!==null&&Ii(Ft)&&(Ft=null),_r.forEach(gu),Fr.forEach(gu)}function ur(e,t){e.blockedOn===t&&(e.blockedOn=null,qs||(qs=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,th)))}function Rr(e){function t(i){return ur(i,e)}if(0<hi.length){ur(hi[0],e);for(var n=1;n<hi.length;n++){var r=hi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jt!==null&&ur(jt,e),_t!==null&&ur(_t,e),Ft!==null&&ur(Ft,e),_r.forEach(t),Fr.forEach(t),n=0;n<Nt.length;n++)r=Nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Nt.length&&(n=Nt[0],n.blockedOn===null);)jd(n),n.blockedOn===null&&Nt.shift()}var Rn=Et.ReactCurrentBatchConfig,Qi=!0;function nh(e,t,n,r){var i=X,o=Rn.transition;Rn.transition=null;try{X=1,aa(e,t,n,r)}finally{X=i,Rn.transition=o}}function rh(e,t,n,r){var i=X,o=Rn.transition;Rn.transition=null;try{X=4,aa(e,t,n,r)}finally{X=i,Rn.transition=o}}function aa(e,t,n,r){if(Qi){var i=Zs(e,t,n,r);if(i===null)os(e,t,r,Ki,n),hu(e,r);else if(eh(i,e,t,n,r))r.stopPropagation();else if(hu(e,r),t&4&&-1<Jm.indexOf(e)){for(;i!==null;){var o=ni(i);if(o!==null&&Id(o),o=Zs(e,t,n,r),o===null&&os(e,t,r,Ki,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else os(e,t,r,null,n)}}var Ki=null;function Zs(e,t,n,r){if(Ki=null,e=ia(r),e=tn(e),e!==null)if(t=wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ed(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ki=e,null}function _d(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Um()){case oa:return 1;case Td:return 4;case Yi:case Hm:return 16;case Pd:return 536870912;default:return 16}default:return 16}}var It=null,ua=null,Mi=null;function Fd(){if(Mi)return Mi;var e,t=ua,n=t.length,r,i="value"in It?It.value:It.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Mi=i.slice(e,1<r?1-r:void 0)}function Oi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gi(){return!0}function vu(){return!1}function Re(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?gi:vu,this.isPropagationStopped=vu,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gi)},persist:function(){},isPersistent:gi}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ca=Re(Jn),ti=oe({},Jn,{view:0,detail:0}),ih=Re(ti),Ko,qo,cr,ko=oe({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:da,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cr&&(cr&&e.type==="mousemove"?(Ko=e.screenX-cr.screenX,qo=e.screenY-cr.screenY):qo=Ko=0,cr=e),Ko)},movementY:function(e){return"movementY"in e?e.movementY:qo}}),yu=Re(ko),oh=oe({},ko,{dataTransfer:0}),sh=Re(oh),lh=oe({},ti,{relatedTarget:0}),Zo=Re(lh),ah=oe({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),uh=Re(ah),ch=oe({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dh=Re(ch),fh=oe({},Jn,{data:0}),wu=Re(fh),ph={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hh[e])?!!t[e]:!1}function da(){return gh}var vh=oe({},ti,{key:function(e){if(e.key){var t=ph[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:da,charCode:function(e){return e.type==="keypress"?Oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yh=Re(vh),wh=oe({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xu=Re(wh),xh=oe({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:da}),Sh=Re(xh),bh=oe({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eh=Re(bh),kh=oe({},ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ch=Re(kh),Ah=[9,13,27,32],fa=vt&&"CompositionEvent"in window,Er=null;vt&&"documentMode"in document&&(Er=document.documentMode);var Th=vt&&"TextEvent"in window&&!Er,Rd=vt&&(!fa||Er&&8<Er&&11>=Er),Su=" ",bu=!1;function Dd(e,t){switch(e){case"keyup":return Ah.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function Ph(e,t){switch(e){case"compositionend":return Vd(t);case"keypress":return t.which!==32?null:(bu=!0,Su);case"textInput":return e=t.data,e===Su&&bu?null:e;default:return null}}function Nh(e,t){if(En)return e==="compositionend"||!fa&&Dd(e,t)?(e=Fd(),Mi=ua=It=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rd&&t.locale!=="ko"?null:t.data;default:return null}}var zh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zh[e.type]:t==="textarea"}function Bd(e,t,n,r){yd(r),t=qi(t,"onChange"),0<t.length&&(n=new ca("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var kr=null,Dr=null;function Ih(e){Zd(e,0)}function Co(e){var t=An(e);if(dd(t))return e}function Mh(e,t){if(e==="change")return t}var $d=!1;if(vt){var Jo;if(vt){var es="oninput"in document;if(!es){var ku=document.createElement("div");ku.setAttribute("oninput","return;"),es=typeof ku.oninput=="function"}Jo=es}else Jo=!1;$d=Jo&&(!document.documentMode||9<document.documentMode)}function Cu(){kr&&(kr.detachEvent("onpropertychange",Gd),Dr=kr=null)}function Gd(e){if(e.propertyName==="value"&&Co(Dr)){var t=[];Bd(t,Dr,e,ia(e)),bd(Ih,t)}}function Oh(e,t,n){e==="focusin"?(Cu(),kr=t,Dr=n,kr.attachEvent("onpropertychange",Gd)):e==="focusout"&&Cu()}function Lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(Dr)}function jh(e,t){if(e==="click")return Co(t)}function _h(e,t){if(e==="input"||e==="change")return Co(t)}function Fh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:Fh;function Vr(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ls.call(t,i)||!et(e[i],t[i]))return!1}return!0}function Au(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tu(e,t){var n=Au(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Au(n)}}function Ud(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ud(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hd(){for(var e=window,t=Ui();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ui(e.document)}return t}function pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rh(e){var t=Hd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ud(n.ownerDocument.documentElement,n)){if(r!==null&&pa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Tu(n,o);var s=Tu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dh=vt&&"documentMode"in document&&11>=document.documentMode,kn=null,Js=null,Cr=null,el=!1;function Pu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;el||kn==null||kn!==Ui(r)||(r=kn,"selectionStart"in r&&pa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cr&&Vr(Cr,r)||(Cr=r,r=qi(Js,"onSelect"),0<r.length&&(t=new ca("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kn)))}function vi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:vi("Animation","AnimationEnd"),animationiteration:vi("Animation","AnimationIteration"),animationstart:vi("Animation","AnimationStart"),transitionend:vi("Transition","TransitionEnd")},ts={},Wd={};vt&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function Ao(e){if(ts[e])return ts[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wd)return ts[e]=t[n];return e}var Yd=Ao("animationend"),Xd=Ao("animationiteration"),Qd=Ao("animationstart"),Kd=Ao("transitionend"),qd=new Map,Nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){qd.set(e,t),yn(t,[e])}for(var ns=0;ns<Nu.length;ns++){var rs=Nu[ns],Vh=rs.toLowerCase(),Bh=rs[0].toUpperCase()+rs.slice(1);Xt(Vh,"on"+Bh)}Xt(Yd,"onAnimationEnd");Xt(Xd,"onAnimationIteration");Xt(Qd,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(Kd,"onTransitionEnd");Gn("onMouseEnter",["mouseout","mouseover"]);Gn("onMouseLeave",["mouseout","mouseover"]);Gn("onPointerEnter",["pointerout","pointerover"]);Gn("onPointerLeave",["pointerout","pointerover"]);yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$h=new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));function zu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vm(r,t,void 0,e),e.currentTarget=null}function Zd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;zu(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;zu(i,l,u),o=a}}}if(Wi)throw e=Qs,Wi=!1,Qs=null,e}function Z(e,t){var n=t[ol];n===void 0&&(n=t[ol]=new Set);var r=e+"__bubble";n.has(r)||(Jd(t,e,2,!1),n.add(r))}function is(e,t,n){var r=0;t&&(r|=4),Jd(n,e,r,t)}var yi="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[yi]){e[yi]=!0,sd.forEach(function(n){n!=="selectionchange"&&($h.has(n)||is(n,!1,e),is(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yi]||(t[yi]=!0,is("selectionchange",!1,t))}}function Jd(e,t,n,r){switch(_d(t)){case 1:var i=nh;break;case 4:i=rh;break;default:i=aa}n=i.bind(null,t,n,e),i=void 0,!Xs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function os(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=tn(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}bd(function(){var u=o,d=ia(n),p=[];e:{var h=qd.get(e);if(h!==void 0){var g=ca,y=e;switch(e){case"keypress":if(Oi(n)===0)break e;case"keydown":case"keyup":g=yh;break;case"focusin":y="focus",g=Zo;break;case"focusout":y="blur",g=Zo;break;case"beforeblur":case"afterblur":g=Zo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=yu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=sh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Sh;break;case Yd:case Xd:case Qd:g=uh;break;case Kd:g=Eh;break;case"scroll":g=ih;break;case"wheel":g=Ch;break;case"copy":case"cut":case"paste":g=dh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=xu}var x=(t&4)!==0,b=!x&&e==="scroll",c=x?h!==null?h+"Capture":null:h;x=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,c!==null&&(w=jr(f,c),w!=null&&x.push($r(f,w,m)))),b)break;f=f.return}0<x.length&&(h=new g(h,y,null,n,d),p.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Ws&&(y=n.relatedTarget||n.fromElement)&&(tn(y)||y[yt]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?tn(y):null,y!==null&&(b=wn(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(x=yu,w="onMouseLeave",c="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=xu,w="onPointerLeave",c="onPointerEnter",f="pointer"),b=g==null?h:An(g),m=y==null?h:An(y),h=new x(w,f+"leave",g,n,d),h.target=b,h.relatedTarget=m,w=null,tn(d)===u&&(x=new x(c,f+"enter",y,n,d),x.target=m,x.relatedTarget=b,w=x),b=w,g&&y)t:{for(x=g,c=y,f=0,m=x;m;m=xn(m))f++;for(m=0,w=c;w;w=xn(w))m++;for(;0<f-m;)x=xn(x),f--;for(;0<m-f;)c=xn(c),m--;for(;f--;){if(x===c||c!==null&&x===c.alternate)break t;x=xn(x),c=xn(c)}x=null}else x=null;g!==null&&Iu(p,h,g,x,!1),y!==null&&b!==null&&Iu(p,b,y,x,!0)}}e:{if(h=u?An(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var S=Mh;else if(Eu(h))if($d)S=_h;else{S=Lh;var T=Oh}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=jh);if(S&&(S=S(e,u))){Bd(p,S,n,d);break e}T&&T(e,h,u),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Bs(h,"number",h.value)}switch(T=u?An(u):window,e){case"focusin":(Eu(T)||T.contentEditable==="true")&&(kn=T,Js=u,Cr=null);break;case"focusout":Cr=Js=kn=null;break;case"mousedown":el=!0;break;case"contextmenu":case"mouseup":case"dragend":el=!1,Pu(p,n,d);break;case"selectionchange":if(Dh)break;case"keydown":case"keyup":Pu(p,n,d)}var z;if(fa)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else En?Dd(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Rd&&n.locale!=="ko"&&(En||A!=="onCompositionStart"?A==="onCompositionEnd"&&En&&(z=Fd()):(It=d,ua="value"in It?It.value:It.textContent,En=!0)),T=qi(u,A),0<T.length&&(A=new wu(A,e,null,n,d),p.push({event:A,listeners:T}),z?A.data=z:(z=Vd(n),z!==null&&(A.data=z)))),(z=Th?Ph(e,n):Nh(e,n))&&(u=qi(u,"onBeforeInput"),0<u.length&&(d=new wu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=z))}Zd(p,t)})}function $r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=jr(e,n),o!=null&&r.unshift($r(e,o,i)),o=jr(e,t),o!=null&&r.push($r(e,o,i))),e=e.return}return r}function xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Iu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=jr(n,o),a!=null&&s.unshift($r(n,a,l))):i||(a=jr(n,o),a!=null&&s.push($r(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Gh=/\r\n?/g,Uh=/\u0000|\uFFFD/g;function Mu(e){return(typeof e=="string"?e:""+e).replace(Gh,`
`).replace(Uh,"")}function wi(e,t,n){if(t=Mu(t),Mu(e)!==t&&n)throw Error(M(425))}function Zi(){}var tl=null,nl=null;function rl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var il=typeof setTimeout=="function"?setTimeout:void 0,Hh=typeof clearTimeout=="function"?clearTimeout:void 0,Ou=typeof Promise=="function"?Promise:void 0,Wh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ou<"u"?function(e){return Ou.resolve(null).then(e).catch(Yh)}:il;function Yh(e){setTimeout(function(){throw e})}function ss(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Rr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Rr(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),it="__reactFiber$"+er,Gr="__reactProps$"+er,yt="__reactContainer$"+er,ol="__reactEvents$"+er,Xh="__reactListeners$"+er,Qh="__reactHandles$"+er;function tn(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lu(e);e!==null;){if(n=e[it])return n;e=Lu(e)}return t}e=n,n=e.parentNode}return null}function ni(e){return e=e[it]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function To(e){return e[Gr]||null}var sl=[],Tn=-1;function Qt(e){return{current:e}}function J(e){0>Tn||(e.current=sl[Tn],sl[Tn]=null,Tn--)}function q(e,t){Tn++,sl[Tn]=e.current,e.current=t}var Ut={},xe=Qt(Ut),Te=Qt(!1),cn=Ut;function Un(e,t){var n=e.type.contextTypes;if(!n)return Ut;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pe(e){return e=e.childContextTypes,e!=null}function Ji(){J(Te),J(xe)}function ju(e,t,n){if(xe.current!==Ut)throw Error(M(168));q(xe,t),q(Te,n)}function ef(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,Om(e)||"Unknown",i));return oe({},n,r)}function eo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,cn=xe.current,q(xe,e),q(Te,Te.current),!0}function _u(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=ef(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,J(Te),J(xe),q(xe,e)):J(Te),q(Te,n)}var pt=null,Po=!1,ls=!1;function tf(e){pt===null?pt=[e]:pt.push(e)}function Kh(e){Po=!0,tf(e)}function Kt(){if(!ls&&pt!==null){ls=!0;var e=0,t=X;try{var n=pt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pt=null,Po=!1}catch(i){throw pt!==null&&(pt=pt.slice(e+1)),Ad(oa,Kt),i}finally{X=t,ls=!1}}return null}var Pn=[],Nn=0,to=null,no=0,Be=[],$e=0,dn=null,mt=1,ht="";function Zt(e,t){Pn[Nn++]=no,Pn[Nn++]=to,to=e,no=t}function nf(e,t,n){Be[$e++]=mt,Be[$e++]=ht,Be[$e++]=dn,dn=e;var r=mt;e=ht;var i=32-Ze(r)-1;r&=~(1<<i),n+=1;var o=32-Ze(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,mt=1<<32-Ze(t)+i|n<<i|r,ht=o+e}else mt=1<<o|n<<i|r,ht=e}function ma(e){e.return!==null&&(Zt(e,1),nf(e,1,0))}function ha(e){for(;e===to;)to=Pn[--Nn],Pn[Nn]=null,no=Pn[--Nn],Pn[Nn]=null;for(;e===dn;)dn=Be[--$e],Be[$e]=null,ht=Be[--$e],Be[$e]=null,mt=Be[--$e],Be[$e]=null}var Oe=null,Me=null,te=!1,qe=null;function rf(e,t){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oe=e,Me=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oe=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:mt,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oe=e,Me=null,!0):!1;default:return!1}}function ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function al(e){if(te){var t=Me;if(t){var n=t;if(!Fu(e,t)){if(ll(e))throw Error(M(418));t=Rt(n.nextSibling);var r=Oe;t&&Fu(e,t)?rf(r,n):(e.flags=e.flags&-4097|2,te=!1,Oe=e)}}else{if(ll(e))throw Error(M(418));e.flags=e.flags&-4097|2,te=!1,Oe=e}}}function Ru(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function xi(e){if(e!==Oe)return!1;if(!te)return Ru(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!rl(e.type,e.memoizedProps)),t&&(t=Me)){if(ll(e))throw of(),Error(M(418));for(;t;)rf(e,t),t=Rt(t.nextSibling)}if(Ru(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=Oe?Rt(e.stateNode.nextSibling):null;return!0}function of(){for(var e=Me;e;)e=Rt(e.nextSibling)}function Hn(){Me=Oe=null,te=!1}function ga(e){qe===null?qe=[e]:qe.push(e)}var qh=Et.ReactCurrentBatchConfig;function dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Si(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Du(e){var t=e._init;return t(e._payload)}function sf(e){function t(c,f){if(e){var m=c.deletions;m===null?(c.deletions=[f],c.flags|=16):m.push(f)}}function n(c,f){if(!e)return null;for(;f!==null;)t(c,f),f=f.sibling;return null}function r(c,f){for(c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function i(c,f){return c=$t(c,f),c.index=0,c.sibling=null,c}function o(c,f,m){return c.index=m,e?(m=c.alternate,m!==null?(m=m.index,m<f?(c.flags|=2,f):m):(c.flags|=2,f)):(c.flags|=1048576,f)}function s(c){return e&&c.alternate===null&&(c.flags|=2),c}function l(c,f,m,w){return f===null||f.tag!==6?(f=ms(m,c.mode,w),f.return=c,f):(f=i(f,m),f.return=c,f)}function a(c,f,m,w){var S=m.type;return S===bn?d(c,f,m.props.children,w,m.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tt&&Du(S)===f.type)?(w=i(f,m.props),w.ref=dr(c,f,m),w.return=c,w):(w=Vi(m.type,m.key,m.props,null,c.mode,w),w.ref=dr(c,f,m),w.return=c,w)}function u(c,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=hs(m,c.mode,w),f.return=c,f):(f=i(f,m.children||[]),f.return=c,f)}function d(c,f,m,w,S){return f===null||f.tag!==7?(f=sn(m,c.mode,w,S),f.return=c,f):(f=i(f,m),f.return=c,f)}function p(c,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ms(""+f,c.mode,m),f.return=c,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ci:return m=Vi(f.type,f.key,f.props,null,c.mode,m),m.ref=dr(c,null,f),m.return=c,m;case Sn:return f=hs(f,c.mode,m),f.return=c,f;case Tt:var w=f._init;return p(c,w(f._payload),m)}if(gr(f)||sr(f))return f=sn(f,c.mode,m,null),f.return=c,f;Si(c,f)}return null}function h(c,f,m,w){var S=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(c,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ci:return m.key===S?a(c,f,m,w):null;case Sn:return m.key===S?u(c,f,m,w):null;case Tt:return S=m._init,h(c,f,S(m._payload),w)}if(gr(m)||sr(m))return S!==null?null:d(c,f,m,w,null);Si(c,m)}return null}function g(c,f,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return c=c.get(m)||null,l(f,c,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ci:return c=c.get(w.key===null?m:w.key)||null,a(f,c,w,S);case Sn:return c=c.get(w.key===null?m:w.key)||null,u(f,c,w,S);case Tt:var T=w._init;return g(c,f,m,T(w._payload),S)}if(gr(w)||sr(w))return c=c.get(m)||null,d(f,c,w,S,null);Si(f,w)}return null}function y(c,f,m,w){for(var S=null,T=null,z=f,A=f=0,I=null;z!==null&&A<m.length;A++){z.index>A?(I=z,z=null):I=z.sibling;var C=h(c,z,m[A],w);if(C===null){z===null&&(z=I);break}e&&z&&C.alternate===null&&t(c,z),f=o(C,f,A),T===null?S=C:T.sibling=C,T=C,z=I}if(A===m.length)return n(c,z),te&&Zt(c,A),S;if(z===null){for(;A<m.length;A++)z=p(c,m[A],w),z!==null&&(f=o(z,f,A),T===null?S=z:T.sibling=z,T=z);return te&&Zt(c,A),S}for(z=r(c,z);A<m.length;A++)I=g(z,c,A,m[A],w),I!==null&&(e&&I.alternate!==null&&z.delete(I.key===null?A:I.key),f=o(I,f,A),T===null?S=I:T.sibling=I,T=I);return e&&z.forEach(function(j){return t(c,j)}),te&&Zt(c,A),S}function x(c,f,m,w){var S=sr(m);if(typeof S!="function")throw Error(M(150));if(m=S.call(m),m==null)throw Error(M(151));for(var T=S=null,z=f,A=f=0,I=null,C=m.next();z!==null&&!C.done;A++,C=m.next()){z.index>A?(I=z,z=null):I=z.sibling;var j=h(c,z,C.value,w);if(j===null){z===null&&(z=I);break}e&&z&&j.alternate===null&&t(c,z),f=o(j,f,A),T===null?S=j:T.sibling=j,T=j,z=I}if(C.done)return n(c,z),te&&Zt(c,A),S;if(z===null){for(;!C.done;A++,C=m.next())C=p(c,C.value,w),C!==null&&(f=o(C,f,A),T===null?S=C:T.sibling=C,T=C);return te&&Zt(c,A),S}for(z=r(c,z);!C.done;A++,C=m.next())C=g(z,c,A,C.value,w),C!==null&&(e&&C.alternate!==null&&z.delete(C.key===null?A:C.key),f=o(C,f,A),T===null?S=C:T.sibling=C,T=C);return e&&z.forEach(function(P){return t(c,P)}),te&&Zt(c,A),S}function b(c,f,m,w){if(typeof m=="object"&&m!==null&&m.type===bn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ci:e:{for(var S=m.key,T=f;T!==null;){if(T.key===S){if(S=m.type,S===bn){if(T.tag===7){n(c,T.sibling),f=i(T,m.props.children),f.return=c,c=f;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tt&&Du(S)===T.type){n(c,T.sibling),f=i(T,m.props),f.ref=dr(c,T,m),f.return=c,c=f;break e}n(c,T);break}else t(c,T);T=T.sibling}m.type===bn?(f=sn(m.props.children,c.mode,w,m.key),f.return=c,c=f):(w=Vi(m.type,m.key,m.props,null,c.mode,w),w.ref=dr(c,f,m),w.return=c,c=w)}return s(c);case Sn:e:{for(T=m.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(c,f.sibling),f=i(f,m.children||[]),f.return=c,c=f;break e}else{n(c,f);break}else t(c,f);f=f.sibling}f=hs(m,c.mode,w),f.return=c,c=f}return s(c);case Tt:return T=m._init,b(c,f,T(m._payload),w)}if(gr(m))return y(c,f,m,w);if(sr(m))return x(c,f,m,w);Si(c,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(c,f.sibling),f=i(f,m),f.return=c,c=f):(n(c,f),f=ms(m,c.mode,w),f.return=c,c=f),s(c)):n(c,f)}return b}var Wn=sf(!0),lf=sf(!1),ro=Qt(null),io=null,zn=null,va=null;function ya(){va=zn=io=null}function wa(e){var t=ro.current;J(ro),e._currentValue=t}function ul(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){io=e,va=zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(va!==e)if(e={context:e,memoizedValue:t,next:null},zn===null){if(io===null)throw Error(M(308));zn=e,io.dependencies={lanes:0,firstContext:e}}else zn=zn.next=e;return t}var nn=null;function xa(e){nn===null?nn=[e]:nn.push(e)}function af(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,xa(t)):(n.next=i.next,i.next=n),t.interleaved=n,wt(e,r)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function Sa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wt(e,n)}return i=r.interleaved,i===null?(t.next=t,xa(r)):(t.next=i.next,i.next=t),r.interleaved=t,wt(e,n)}function Li(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sa(e,n)}}function Vu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oo(e,t,n,r){var i=e.updateQueue;Pt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(o!==null){var p=i.baseState;s=0,d=u=a=null,l=o;do{var h=l.lane,g=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,x=l;switch(h=t,g=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){p=y.call(g,p,h);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,h=typeof y=="function"?y.call(g,p,h):y,h==null)break e;p=oe({},p,h);break e;case 2:Pt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=p):d=d.next=g,s|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=p),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pn|=s,e.lanes=s,e.memoizedState=p}}function Bu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var ri={},ut=Qt(ri),Ur=Qt(ri),Hr=Qt(ri);function rn(e){if(e===ri)throw Error(M(174));return e}function ba(e,t){switch(q(Hr,t),q(Ur,e),q(ut,ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gs(t,e)}J(ut),q(ut,t)}function Yn(){J(ut),J(Ur),J(Hr)}function cf(e){rn(Hr.current);var t=rn(ut.current),n=Gs(t,e.type);t!==n&&(q(Ur,e),q(ut,n))}function Ea(e){Ur.current===e&&(J(ut),J(Ur))}var re=Qt(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var as=[];function ka(){for(var e=0;e<as.length;e++)as[e]._workInProgressVersionPrimary=null;as.length=0}var ji=Et.ReactCurrentDispatcher,us=Et.ReactCurrentBatchConfig,fn=0,ie=null,ue=null,fe=null,lo=!1,Ar=!1,Wr=0,Zh=0;function ve(){throw Error(M(321))}function Ca(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function Aa(e,t,n,r,i,o){if(fn=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ji.current=e===null||e.memoizedState===null?ng:rg,e=n(r,i),Ar){o=0;do{if(Ar=!1,Wr=0,25<=o)throw Error(M(301));o+=1,fe=ue=null,t.updateQueue=null,ji.current=ig,e=n(r,i)}while(Ar)}if(ji.current=ao,t=ue!==null&&ue.next!==null,fn=0,fe=ue=ie=null,lo=!1,t)throw Error(M(300));return e}function Ta(){var e=Wr!==0;return Wr=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?ie.memoizedState=fe=e:fe=fe.next=e,fe}function We(){if(ue===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=fe===null?ie.memoizedState:fe.next;if(t!==null)fe=t,ue=e;else{if(e===null)throw Error(M(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},fe===null?ie.memoizedState=fe=e:fe=fe.next=e}return fe}function Yr(e,t){return typeof t=="function"?t(e):t}function cs(e){var t=We(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var d=u.lane;if((fn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=p,s=r):a=a.next=p,ie.lanes|=d,pn|=d}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,et(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,pn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ds(e){var t=We(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);et(o,t.memoizedState)||(Ae=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function df(){}function ff(e,t){var n=ie,r=We(),i=t(),o=!et(r.memoizedState,i);if(o&&(r.memoizedState=i,Ae=!0),r=r.queue,Pa(hf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,Xr(9,mf.bind(null,n,r,i,t),void 0,null),pe===null)throw Error(M(349));fn&30||pf(n,t,i)}return i}function pf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mf(e,t,n,r){t.value=n,t.getSnapshot=r,gf(t)&&vf(e)}function hf(e,t,n){return n(function(){gf(t)&&vf(e)})}function gf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function vf(e){var t=wt(e,1);t!==null&&Je(t,e,1,-1)}function $u(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:e},t.queue=e,e=e.dispatch=tg.bind(null,ie,e),[t.memoizedState,e]}function Xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yf(){return We().memoizedState}function _i(e,t,n,r){var i=nt();ie.flags|=e,i.memoizedState=Xr(1|t,n,void 0,r===void 0?null:r)}function No(e,t,n,r){var i=We();r=r===void 0?null:r;var o=void 0;if(ue!==null){var s=ue.memoizedState;if(o=s.destroy,r!==null&&Ca(r,s.deps)){i.memoizedState=Xr(t,n,o,r);return}}ie.flags|=e,i.memoizedState=Xr(1|t,n,o,r)}function Gu(e,t){return _i(8390656,8,e,t)}function Pa(e,t){return No(2048,8,e,t)}function wf(e,t){return No(4,2,e,t)}function xf(e,t){return No(4,4,e,t)}function Sf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bf(e,t,n){return n=n!=null?n.concat([e]):null,No(4,4,Sf.bind(null,t,e),n)}function Na(){}function Ef(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ca(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kf(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ca(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cf(e,t,n){return fn&21?(et(n,t)||(n=Nd(),ie.lanes|=n,pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n)}function Jh(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=us.transition;us.transition={};try{e(!1),t()}finally{X=n,us.transition=r}}function Af(){return We().memoizedState}function eg(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tf(e))Pf(t,n);else if(n=af(e,t,n,r),n!==null){var i=be();Je(n,e,r,i),Nf(n,t,r)}}function tg(e,t,n){var r=Bt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tf(e))Pf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,et(l,s)){var a=t.interleaved;a===null?(i.next=i,xa(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=af(e,t,i,r),n!==null&&(i=be(),Je(n,e,r,i),Nf(n,t,r))}}function Tf(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Pf(e,t){Ar=lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sa(e,n)}}var ao={readContext:He,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},ng={readContext:He,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:Gu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_i(4194308,4,Sf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _i(4194308,4,e,t)},useInsertionEffect:function(e,t){return _i(4,2,e,t)},useMemo:function(e,t){var n=nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=eg.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:$u,useDebugValue:Na,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=$u(!1),t=e[0];return e=Jh.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=nt();if(te){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),pe===null)throw Error(M(349));fn&30||pf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Gu(hf.bind(null,r,o,e),[e]),r.flags|=2048,Xr(9,mf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=nt(),t=pe.identifierPrefix;if(te){var n=ht,r=mt;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rg={readContext:He,useCallback:Ef,useContext:He,useEffect:Pa,useImperativeHandle:bf,useInsertionEffect:wf,useLayoutEffect:xf,useMemo:kf,useReducer:cs,useRef:yf,useState:function(){return cs(Yr)},useDebugValue:Na,useDeferredValue:function(e){var t=We();return Cf(t,ue.memoizedState,e)},useTransition:function(){var e=cs(Yr)[0],t=We().memoizedState;return[e,t]},useMutableSource:df,useSyncExternalStore:ff,useId:Af,unstable_isNewReconciler:!1},ig={readContext:He,useCallback:Ef,useContext:He,useEffect:Pa,useImperativeHandle:bf,useInsertionEffect:wf,useLayoutEffect:xf,useMemo:kf,useReducer:ds,useRef:yf,useState:function(){return ds(Yr)},useDebugValue:Na,useDeferredValue:function(e){var t=We();return ue===null?t.memoizedState=e:Cf(t,ue.memoizedState,e)},useTransition:function(){var e=ds(Yr)[0],t=We().memoizedState;return[e,t]},useMutableSource:df,useSyncExternalStore:ff,useId:Af,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function cl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zo={isMounted:function(e){return(e=e._reactInternals)?wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),i=Bt(e),o=gt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Dt(e,o,i),t!==null&&(Je(t,e,i,r),Li(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),i=Bt(e),o=gt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Dt(e,o,i),t!==null&&(Je(t,e,i,r),Li(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=Bt(e),i=gt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Dt(e,i,r),t!==null&&(Je(t,e,r,n),Li(t,e,r))}};function Uu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Vr(n,r)||!Vr(i,o):!0}function zf(e,t,n){var r=!1,i=Ut,o=t.contextType;return typeof o=="object"&&o!==null?o=He(o):(i=Pe(t)?cn:xe.current,r=t.contextTypes,o=(r=r!=null)?Un(e,i):Ut),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Hu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zo.enqueueReplaceState(t,t.state,null)}function dl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Sa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=He(o):(o=Pe(t)?cn:xe.current,i.context=Un(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(cl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&zo.enqueueReplaceState(i,i.state,null),oo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Xn(e,t){try{var n="",r=t;do n+=Mm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function fs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var og=typeof WeakMap=="function"?WeakMap:Map;function If(e,t,n){n=gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){co||(co=!0,bl=r),fl(e,t)},n}function Mf(e,t,n){n=gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){fl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){fl(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new og;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=wg.bind(null,e,t,n),t.then(e,e))}function Yu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gt(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var sg=Et.ReactCurrentOwner,Ae=!1;function Se(e,t,n,r){t.child=e===null?lf(t,null,n,r):Wn(t,e.child,n,r)}function Qu(e,t,n,r,i){n=n.render;var o=t.ref;return Dn(t,i),r=Aa(e,t,n,r,o,i),n=Ta(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):(te&&n&&ma(t),t.flags|=1,Se(e,t,r,i),t.child)}function Ku(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Fa(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Of(e,t,o,r,i)):(e=Vi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vr,n(s,r)&&e.ref===t.ref)return xt(e,t,i)}return t.flags|=1,e=$t(o,r),e.ref=t.ref,e.return=t,t.child=e}function Of(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Vr(o,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,xt(e,t,i)}return pl(e,t,n,r,i)}function Lf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Mn,ze),ze|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(Mn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,q(Mn,ze),ze|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,q(Mn,ze),ze|=r;return Se(e,t,i,n),t.child}function jf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function pl(e,t,n,r,i){var o=Pe(n)?cn:xe.current;return o=Un(t,o),Dn(t,i),n=Aa(e,t,n,r,o,i),r=Ta(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):(te&&r&&ma(t),t.flags|=1,Se(e,t,n,i),t.child)}function qu(e,t,n,r,i){if(Pe(n)){var o=!0;eo(t)}else o=!1;if(Dn(t,i),t.stateNode===null)Fi(e,t),zf(t,n,r),dl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=He(u):(u=Pe(n)?cn:xe.current,u=Un(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Hu(t,s,r,u),Pt=!1;var h=t.memoizedState;s.state=h,oo(t,r,s,i),a=t.memoizedState,l!==r||h!==a||Te.current||Pt?(typeof d=="function"&&(cl(t,n,d,r),a=t.memoizedState),(l=Pt||Uu(t,n,l,r,h,a,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,uf(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Qe(t.type,l),s.props=u,p=t.pendingProps,h=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=He(a):(a=Pe(n)?cn:xe.current,a=Un(t,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||h!==a)&&Hu(t,s,r,a),Pt=!1,h=t.memoizedState,s.state=h,oo(t,r,s,i);var y=t.memoizedState;l!==p||h!==y||Te.current||Pt?(typeof g=="function"&&(cl(t,n,g,r),y=t.memoizedState),(u=Pt||Uu(t,n,u,r,h,y,a)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ml(e,t,n,r,o,i)}function ml(e,t,n,r,i,o){jf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&_u(t,n,!1),xt(e,t,o);r=t.stateNode,sg.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Wn(t,e.child,null,o),t.child=Wn(t,null,l,o)):Se(e,t,l,o),t.memoizedState=r.state,i&&_u(t,n,!0),t.child}function _f(e){var t=e.stateNode;t.pendingContext?ju(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ju(e,t.context,!1),ba(e,t.containerInfo)}function Zu(e,t,n,r,i){return Hn(),ga(i),t.flags|=256,Se(e,t,n,r),t.child}var hl={dehydrated:null,treeContext:null,retryLane:0};function gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ff(e,t,n){var r=t.pendingProps,i=re.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),q(re,i&1),e===null)return al(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Oo(s,r,0,null),e=sn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=gl(n),t.memoizedState=hl,e):za(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return lg(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=$t(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=$t(l,o):(o=sn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?gl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=hl,r}return o=e.child,e=o.sibling,r=$t(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function za(e,t){return t=Oo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bi(e,t,n,r){return r!==null&&ga(r),Wn(t,e.child,null,n),e=za(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lg(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=fs(Error(M(422))),bi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Oo({mode:"visible",children:r.children},i,0,null),o=sn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Wn(t,e.child,null,s),t.child.memoizedState=gl(s),t.memoizedState=hl,o);if(!(t.mode&1))return bi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(M(419)),r=fs(o,r,void 0),bi(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ae||l){if(r=pe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,wt(e,i),Je(r,e,i,-1))}return _a(),r=fs(Error(M(421))),bi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=xg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Me=Rt(i.nextSibling),Oe=t,te=!0,qe=null,e!==null&&(Be[$e++]=mt,Be[$e++]=ht,Be[$e++]=dn,mt=e.id,ht=e.overflow,dn=t),t=za(t,r.children),t.flags|=4096,t)}function Ju(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ul(e.return,t,n)}function ps(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Rf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Se(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ju(e,n,t);else if(e.tag===19)Ju(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ps(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&so(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ps(t,!0,n,null,o);break;case"together":ps(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ag(e,t,n){switch(t.tag){case 3:_f(t),Hn();break;case 5:cf(t);break;case 1:Pe(t.type)&&eo(t);break;case 4:ba(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;q(ro,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?Ff(e,t,n):(q(re,re.current&1),e=xt(e,t,n),e!==null?e.sibling:null);q(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,Lf(e,t,n)}return xt(e,t,n)}var Df,vl,Vf,Bf;Df=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vl=function(){};Vf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,rn(ut.current);var o=null;switch(n){case"input":i=Ds(e,i),r=Ds(e,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=$s(e,i),r=$s(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zi)}Us(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Or.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Or.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Z("scroll",e),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Bf=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ug(e,t,n){var r=t.pendingProps;switch(ha(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Pe(t.type)&&Ji(),ye(t),null;case 3:return r=t.stateNode,Yn(),J(Te),J(xe),ka(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qe!==null&&(Cl(qe),qe=null))),vl(e,t),ye(t),null;case 5:Ea(t);var i=rn(Hr.current);if(n=t.type,e!==null&&t.stateNode!=null)Vf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return ye(t),null}if(e=rn(ut.current),xi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[it]=t,r[Gr]=o,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<yr.length;i++)Z(yr[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":au(r,o),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Z("invalid",r);break;case"textarea":cu(r,o),Z("invalid",r)}Us(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&wi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&wi(r.textContent,l,e),i=["children",""+l]):Or.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Z("scroll",r)}switch(n){case"input":di(r),uu(r,o,!0);break;case"textarea":di(r),du(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=md(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[it]=t,e[Gr]=r,Df(e,t,!1,!1),t.stateNode=e;e:{switch(s=Hs(n,r),n){case"dialog":Z("cancel",e),Z("close",e),i=r;break;case"iframe":case"object":case"embed":Z("load",e),i=r;break;case"video":case"audio":for(i=0;i<yr.length;i++)Z(yr[i],e);i=r;break;case"source":Z("error",e),i=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),i=r;break;case"details":Z("toggle",e),i=r;break;case"input":au(e,r),i=Ds(e,r),Z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),Z("invalid",e);break;case"textarea":cu(e,r),i=$s(e,r),Z("invalid",e);break;default:i=r}Us(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?vd(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&hd(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Lr(e,a):typeof a=="number"&&Lr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Or.hasOwnProperty(o)?a!=null&&o==="onScroll"&&Z("scroll",e):a!=null&&ea(e,o,a,s))}switch(n){case"input":di(e),uu(e,r,!1);break;case"textarea":di(e),du(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?jn(e,!!r.multiple,o,!1):r.defaultValue!=null&&jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)Bf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=rn(Hr.current),rn(ut.current),xi(t)){if(r=t.stateNode,n=t.memoizedProps,r[it]=t,(o=r.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:wi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=t,t.stateNode=r}return ye(t),null;case 13:if(J(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Me!==null&&t.mode&1&&!(t.flags&128))of(),Hn(),t.flags|=98560,o=!1;else if(o=xi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(M(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[it]=t}else Hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),o=!1}else qe!==null&&(Cl(qe),qe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?ce===0&&(ce=3):_a())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return Yn(),vl(e,t),e===null&&Br(t.stateNode.containerInfo),ye(t),null;case 10:return wa(t.type._context),ye(t),null;case 17:return Pe(t.type)&&Ji(),ye(t),null;case 19:if(J(re),o=t.memoizedState,o===null)return ye(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)fr(o,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=so(e),s!==null){for(t.flags|=128,fr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&le()>Qn&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304)}else{if(!r)if(e=so(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!te)return ye(t),null}else 2*le()-o.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,fr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=le(),t.sibling=null,n=re.current,q(re,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return ja(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function cg(e,t){switch(ha(t),t.tag){case 1:return Pe(t.type)&&Ji(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yn(),J(Te),J(xe),ka(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ea(t),null;case 13:if(J(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(re),null;case 4:return Yn(),null;case 10:return wa(t.type._context),null;case 22:case 23:return ja(),null;case 24:return null;default:return null}}var Ei=!1,we=!1,dg=typeof WeakSet=="function"?WeakSet:Set,F=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(e,t,r)}else n.current=null}function yl(e,t,n){try{n()}catch(r){se(e,t,r)}}var ec=!1;function fg(e,t){if(tl=Qi,e=Hd(),pa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var g;p!==n||i!==0&&p.nodeType!==3||(l=s+i),p!==o||r!==0&&p.nodeType!==3||(a=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===e)break t;if(h===n&&++u===i&&(l=s),h===o&&++d===r&&(a=s),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(nl={focusedElem:e,selectionRange:n},Qi=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,b=y.memoizedState,c=t.stateNode,f=c.getSnapshotBeforeUpdate(t.elementType===t.type?x:Qe(t.type,x),b);c.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(w){se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return y=ec,ec=!1,y}function Tr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&yl(t,n,o)}i=i.next}while(i!==r)}}function Io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $f(e){var t=e.alternate;t!==null&&(e.alternate=null,$f(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[Gr],delete t[ol],delete t[Xh],delete t[Qh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gf(e){return e.tag===5||e.tag===3||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zi));else if(r!==4&&(e=e.child,e!==null))for(xl(e,t,n),e=e.sibling;e!==null;)xl(e,t,n),e=e.sibling}function Sl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Sl(e,t,n),e=e.sibling;e!==null;)Sl(e,t,n),e=e.sibling}var me=null,Ke=!1;function Ct(e,t,n){for(n=n.child;n!==null;)Uf(e,t,n),n=n.sibling}function Uf(e,t,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Eo,n)}catch{}switch(n.tag){case 5:we||In(n,t);case 6:var r=me,i=Ke;me=null,Ct(e,t,n),me=r,Ke=i,me!==null&&(Ke?(e=me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(Ke?(e=me,n=n.stateNode,e.nodeType===8?ss(e.parentNode,n):e.nodeType===1&&ss(e,n),Rr(e)):ss(me,n.stateNode));break;case 4:r=me,i=Ke,me=n.stateNode.containerInfo,Ke=!0,Ct(e,t,n),me=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!we&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&yl(n,t,s),i=i.next}while(i!==r)}Ct(e,t,n);break;case 1:if(!we&&(In(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){se(n,t,l)}Ct(e,t,n);break;case 21:Ct(e,t,n);break;case 22:n.mode&1?(we=(r=we)||n.memoizedState!==null,Ct(e,t,n),we=r):Ct(e,t,n);break;default:Ct(e,t,n)}}function nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dg),t.forEach(function(r){var i=Sg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:me=l.stateNode,Ke=!1;break e;case 3:me=l.stateNode.containerInfo,Ke=!0;break e;case 4:me=l.stateNode.containerInfo,Ke=!0;break e}l=l.return}if(me===null)throw Error(M(160));Uf(o,s,i),me=null,Ke=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hf(t,e),t=t.sibling}function Hf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(t,e),tt(e),r&4){try{Tr(3,e,e.return),Io(3,e)}catch(x){se(e,e.return,x)}try{Tr(5,e,e.return)}catch(x){se(e,e.return,x)}}break;case 1:Xe(t,e),tt(e),r&512&&n!==null&&In(n,n.return);break;case 5:if(Xe(t,e),tt(e),r&512&&n!==null&&In(n,n.return),e.flags&32){var i=e.stateNode;try{Lr(i,"")}catch(x){se(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&fd(i,o),Hs(l,s);var u=Hs(l,o);for(s=0;s<a.length;s+=2){var d=a[s],p=a[s+1];d==="style"?vd(i,p):d==="dangerouslySetInnerHTML"?hd(i,p):d==="children"?Lr(i,p):ea(i,d,p,u)}switch(l){case"input":Vs(i,o);break;case"textarea":pd(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?jn(i,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?jn(i,!!o.multiple,o.defaultValue,!0):jn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Gr]=o}catch(x){se(e,e.return,x)}}break;case 6:if(Xe(t,e),tt(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){se(e,e.return,x)}}break;case 3:if(Xe(t,e),tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Rr(t.containerInfo)}catch(x){se(e,e.return,x)}break;case 4:Xe(t,e),tt(e);break;case 13:Xe(t,e),tt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Oa=le())),r&4&&nc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(we=(u=we)||d,Xe(t,e),we=u):Xe(t,e),tt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(F=e,d=e.child;d!==null;){for(p=F=d;F!==null;){switch(h=F,g=h.child,h.tag){case 0:case 11:case 14:case 15:Tr(4,h,h.return);break;case 1:In(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){se(r,n,x)}}break;case 5:In(h,h.return);break;case 22:if(h.memoizedState!==null){ic(p);continue}}g!==null?(g.return=h,F=g):ic(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,a=p.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=gd("display",s))}catch(x){se(e,e.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(x){se(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Xe(t,e),tt(e),r&4&&nc(e);break;case 21:break;default:Xe(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gf(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Lr(i,""),r.flags&=-33);var o=tc(e);Sl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=tc(e);xl(e,l,s);break;default:throw Error(M(161))}}catch(a){se(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pg(e,t,n){F=e,Wf(e)}function Wf(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ei;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||we;l=Ei;var u=we;if(Ei=s,(we=a)&&!u)for(F=i;F!==null;)s=F,a=s.child,s.tag===22&&s.memoizedState!==null?oc(i):a!==null?(a.return=s,F=a):oc(i);for(;o!==null;)F=o,Wf(o),o=o.sibling;F=i,Ei=l,we=u}rc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,F=o):rc(e)}}function rc(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:we||Io(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!we)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Bu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bu(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Rr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}we||t.flags&512&&wl(t)}catch(h){se(t,t.return,h)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function ic(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function oc(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Io(4,t)}catch(a){se(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){se(t,i,a)}}var o=t.return;try{wl(t)}catch(a){se(t,o,a)}break;case 5:var s=t.return;try{wl(t)}catch(a){se(t,s,a)}}}catch(a){se(t,t.return,a)}if(t===e){F=null;break}var l=t.sibling;if(l!==null){l.return=t.return,F=l;break}F=t.return}}var mg=Math.ceil,uo=Et.ReactCurrentDispatcher,Ia=Et.ReactCurrentOwner,Ue=Et.ReactCurrentBatchConfig,H=0,pe=null,ae=null,he=0,ze=0,Mn=Qt(0),ce=0,Qr=null,pn=0,Mo=0,Ma=0,Pr=null,Ce=null,Oa=0,Qn=1/0,ft=null,co=!1,bl=null,Vt=null,ki=!1,Mt=null,fo=0,Nr=0,El=null,Ri=-1,Di=0;function be(){return H&6?le():Ri!==-1?Ri:Ri=le()}function Bt(e){return e.mode&1?H&2&&he!==0?he&-he:qh.transition!==null?(Di===0&&(Di=Nd()),Di):(e=X,e!==0||(e=window.event,e=e===void 0?16:_d(e.type)),e):1}function Je(e,t,n,r){if(50<Nr)throw Nr=0,El=null,Error(M(185));ei(e,n,r),(!(H&2)||e!==pe)&&(e===pe&&(!(H&2)&&(Mo|=n),ce===4&&zt(e,he)),Ne(e,r),n===1&&H===0&&!(t.mode&1)&&(Qn=le()+500,Po&&Kt()))}function Ne(e,t){var n=e.callbackNode;qm(e,t);var r=Xi(e,e===pe?he:0);if(r===0)n!==null&&mu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mu(n),t===1)e.tag===0?Kh(sc.bind(null,e)):tf(sc.bind(null,e)),Wh(function(){!(H&6)&&Kt()}),n=null;else{switch(zd(r)){case 1:n=oa;break;case 4:n=Td;break;case 16:n=Yi;break;case 536870912:n=Pd;break;default:n=Yi}n=ep(n,Yf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yf(e,t){if(Ri=-1,Di=0,H&6)throw Error(M(327));var n=e.callbackNode;if(Vn()&&e.callbackNode!==n)return null;var r=Xi(e,e===pe?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=po(e,r);else{t=r;var i=H;H|=2;var o=Qf();(pe!==e||he!==t)&&(ft=null,Qn=le()+500,on(e,t));do try{vg();break}catch(l){Xf(e,l)}while(!0);ya(),uo.current=o,H=i,ae!==null?t=0:(pe=null,he=0,t=ce)}if(t!==0){if(t===2&&(i=Ks(e),i!==0&&(r=i,t=kl(e,i))),t===1)throw n=Qr,on(e,0),zt(e,r),Ne(e,le()),n;if(t===6)zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!hg(i)&&(t=po(e,r),t===2&&(o=Ks(e),o!==0&&(r=o,t=kl(e,o))),t===1))throw n=Qr,on(e,0),zt(e,r),Ne(e,le()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:Jt(e,Ce,ft);break;case 3:if(zt(e,r),(r&130023424)===r&&(t=Oa+500-le(),10<t)){if(Xi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=il(Jt.bind(null,e,Ce,ft),t);break}Jt(e,Ce,ft);break;case 4:if(zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ze(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mg(r/1960))-r,10<r){e.timeoutHandle=il(Jt.bind(null,e,Ce,ft),r);break}Jt(e,Ce,ft);break;case 5:Jt(e,Ce,ft);break;default:throw Error(M(329))}}}return Ne(e,le()),e.callbackNode===n?Yf.bind(null,e):null}function kl(e,t){var n=Pr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=po(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&Cl(t)),e}function Cl(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function hg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!et(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zt(e,t){for(t&=~Ma,t&=~Mo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(H&6)throw Error(M(327));Vn();var t=Xi(e,0);if(!(t&1))return Ne(e,le()),null;var n=po(e,t);if(e.tag!==0&&n===2){var r=Ks(e);r!==0&&(t=r,n=kl(e,r))}if(n===1)throw n=Qr,on(e,0),zt(e,t),Ne(e,le()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,Ce,ft),Ne(e,le()),null}function La(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(Qn=le()+500,Po&&Kt())}}function mn(e){Mt!==null&&Mt.tag===0&&!(H&6)&&Vn();var t=H;H|=1;var n=Ue.transition,r=X;try{if(Ue.transition=null,X=1,e)return e()}finally{X=r,Ue.transition=n,H=t,!(H&6)&&Kt()}}function ja(){ze=Mn.current,J(Mn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hh(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(ha(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ji();break;case 3:Yn(),J(Te),J(xe),ka();break;case 5:Ea(r);break;case 4:Yn();break;case 13:J(re);break;case 19:J(re);break;case 10:wa(r.type._context);break;case 22:case 23:ja()}n=n.return}if(pe=e,ae=e=$t(e.current,null),he=ze=t,ce=0,Qr=null,Ma=Mo=pn=0,Ce=Pr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}nn=null}return e}function Xf(e,t){do{var n=ae;try{if(ya(),ji.current=ao,lo){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}lo=!1}if(fn=0,fe=ue=ie=null,Ar=!1,Wr=0,Ia.current=null,n===null||n.return===null){ce=1,Qr=t,ae=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=he,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Yu(s);if(g!==null){g.flags&=-257,Xu(g,s,l,o,t),g.mode&1&&Wu(o,u,t),t=g,a=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(a),t.updateQueue=x}else y.add(a);break e}else{if(!(t&1)){Wu(o,u,t),_a();break e}a=Error(M(426))}}else if(te&&l.mode&1){var b=Yu(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Xu(b,s,l,o,t),ga(Xn(a,l));break e}}o=a=Xn(a,l),ce!==4&&(ce=2),Pr===null?Pr=[o]:Pr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var c=If(o,a,t);Vu(o,c);break e;case 1:l=a;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Vt===null||!Vt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Mf(o,l,t);Vu(o,w);break e}}o=o.return}while(o!==null)}qf(n)}catch(S){t=S,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function Qf(){var e=uo.current;return uo.current=ao,e===null?ao:e}function _a(){(ce===0||ce===3||ce===2)&&(ce=4),pe===null||!(pn&268435455)&&!(Mo&268435455)||zt(pe,he)}function po(e,t){var n=H;H|=2;var r=Qf();(pe!==e||he!==t)&&(ft=null,on(e,t));do try{gg();break}catch(i){Xf(e,i)}while(!0);if(ya(),H=n,uo.current=r,ae!==null)throw Error(M(261));return pe=null,he=0,ce}function gg(){for(;ae!==null;)Kf(ae)}function vg(){for(;ae!==null&&!$m();)Kf(ae)}function Kf(e){var t=Jf(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?qf(e):ae=t,Ia.current=null}function qf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cg(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,ae=null;return}}else if(n=ug(n,t,ze),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);ce===0&&(ce=5)}function Jt(e,t,n){var r=X,i=Ue.transition;try{Ue.transition=null,X=1,yg(e,t,n,r)}finally{Ue.transition=i,X=r}return null}function yg(e,t,n,r){do Vn();while(Mt!==null);if(H&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Zm(e,o),e===pe&&(ae=pe=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ki||(ki=!0,ep(Yi,function(){return Vn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ue.transition,Ue.transition=null;var s=X;X=1;var l=H;H|=4,Ia.current=null,fg(e,n),Hf(n,e),Rh(nl),Qi=!!tl,nl=tl=null,e.current=n,pg(n),Gm(),H=l,X=s,Ue.transition=o}else e.current=n;if(ki&&(ki=!1,Mt=e,fo=i),o=e.pendingLanes,o===0&&(Vt=null),Wm(n.stateNode),Ne(e,le()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(co)throw co=!1,e=bl,bl=null,e;return fo&1&&e.tag!==0&&Vn(),o=e.pendingLanes,o&1?e===El?Nr++:(Nr=0,El=e):Nr=0,Kt(),null}function Vn(){if(Mt!==null){var e=zd(fo),t=Ue.transition,n=X;try{if(Ue.transition=null,X=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,fo=0,H&6)throw Error(M(331));var i=H;for(H|=4,F=e.current;F!==null;){var o=F,s=o.child;if(F.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(F=u;F!==null;){var d=F;switch(d.tag){case 0:case 11:case 15:Tr(8,d,o)}var p=d.child;if(p!==null)p.return=d,F=p;else for(;F!==null;){d=F;var h=d.sibling,g=d.return;if($f(d),d===u){F=null;break}if(h!==null){h.return=g,F=h;break}F=g}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}F=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,F=s;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Tr(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,F=c;break e}F=o.return}}var f=e.current;for(F=f;F!==null;){s=F;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,F=m;else e:for(s=f;F!==null;){if(l=F,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Io(9,l)}}catch(S){se(l,l.return,S)}if(l===s){F=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,F=w;break e}F=l.return}}if(H=i,Kt(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Eo,e)}catch{}r=!0}return r}finally{X=n,Ue.transition=t}}return!1}function lc(e,t,n){t=Xn(n,t),t=If(e,t,1),e=Dt(e,t,1),t=be(),e!==null&&(ei(e,1,t),Ne(e,t))}function se(e,t,n){if(e.tag===3)lc(e,e,n);else for(;t!==null;){if(t.tag===3){lc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=Xn(n,e),e=Mf(t,e,1),t=Dt(t,e,1),e=be(),t!==null&&(ei(t,1,e),Ne(t,e));break}}t=t.return}}function wg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(he&n)===n&&(ce===4||ce===3&&(he&130023424)===he&&500>le()-Oa?on(e,0):Ma|=n),Ne(e,t)}function Zf(e,t){t===0&&(e.mode&1?(t=mi,mi<<=1,!(mi&130023424)&&(mi=4194304)):t=1);var n=be();e=wt(e,t),e!==null&&(ei(e,t,n),Ne(e,n))}function xg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zf(e,n)}function Sg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Zf(e,n)}var Jf;Jf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ae=!1,ag(e,t,n);Ae=!!(e.flags&131072)}else Ae=!1,te&&t.flags&1048576&&nf(t,no,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fi(e,t),e=t.pendingProps;var i=Un(t,xe.current);Dn(t,n),i=Aa(null,t,r,e,i,n);var o=Ta();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(o=!0,eo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sa(t),i.updater=zo,t.stateNode=i,i._reactInternals=t,dl(t,r,e,n),t=ml(null,t,r,!0,o,n)):(t.tag=0,te&&o&&ma(t),Se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Eg(r),e=Qe(r,e),i){case 0:t=pl(null,t,r,e,n);break e;case 1:t=qu(null,t,r,e,n);break e;case 11:t=Qu(null,t,r,e,n);break e;case 14:t=Ku(null,t,r,Qe(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),pl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),qu(e,t,r,i,n);case 3:e:{if(_f(t),e===null)throw Error(M(387));r=t.pendingProps,o=t.memoizedState,i=o.element,uf(e,t),oo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Xn(Error(M(423)),t),t=Zu(e,t,r,n,i);break e}else if(r!==i){i=Xn(Error(M(424)),t),t=Zu(e,t,r,n,i);break e}else for(Me=Rt(t.stateNode.containerInfo.firstChild),Oe=t,te=!0,qe=null,n=lf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===i){t=xt(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return cf(t),e===null&&al(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,rl(r,i)?s=null:o!==null&&rl(r,o)&&(t.flags|=32),jf(e,t),Se(e,t,s,n),t.child;case 6:return e===null&&al(t),null;case 13:return Ff(e,t,n);case 4:return ba(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wn(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Qu(e,t,r,i,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,q(ro,r._currentValue),r._currentValue=s,o!==null)if(et(o.value,s)){if(o.children===i.children&&!Te.current){t=xt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=gt(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ul(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(M(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ul(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Dn(t,n),i=He(i),r=r(i),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,i=Qe(r,t.pendingProps),i=Qe(r.type,i),Ku(e,t,r,i,n);case 15:return Of(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Fi(e,t),t.tag=1,Pe(r)?(e=!0,eo(t)):e=!1,Dn(t,n),zf(t,r,i),dl(t,r,i,n),ml(null,t,r,!0,e,n);case 19:return Rf(e,t,n);case 22:return Lf(e,t,n)}throw Error(M(156,t.tag))};function ep(e,t){return Ad(e,t)}function bg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,t,n,r){return new bg(e,t,n,r)}function Fa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Eg(e){if(typeof e=="function")return Fa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===na)return 11;if(e===ra)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=Ge(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Fa(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case bn:return sn(n.children,i,o,t);case ta:s=8,i|=8;break;case js:return e=Ge(12,n,t,i|2),e.elementType=js,e.lanes=o,e;case _s:return e=Ge(13,n,t,i),e.elementType=_s,e.lanes=o,e;case Fs:return e=Ge(19,n,t,i),e.elementType=Fs,e.lanes=o,e;case ud:return Oo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ld:s=10;break e;case ad:s=9;break e;case na:s=11;break e;case ra:s=14;break e;case Tt:s=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=Ge(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function sn(e,t,n,r){return e=Ge(7,e,r,t),e.lanes=n,e}function Oo(e,t,n,r){return e=Ge(22,e,r,t),e.elementType=ud,e.lanes=n,e.stateNode={isHidden:!1},e}function ms(e,t,n){return e=Ge(6,e,null,t),e.lanes=n,e}function hs(e,t,n){return t=Ge(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qo(0),this.expirationTimes=Qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ra(e,t,n,r,i,o,s,l,a){return e=new kg(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ge(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sa(o),e}function Cg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tp(e){if(!e)return Ut;e=e._reactInternals;e:{if(wn(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Pe(n))return ef(e,n,t)}return t}function np(e,t,n,r,i,o,s,l,a){return e=Ra(n,r,!0,e,i,o,s,l,a),e.context=tp(null),n=e.current,r=be(),i=Bt(n),o=gt(r,i),o.callback=t??null,Dt(n,o,i),e.current.lanes=i,ei(e,i,r),Ne(e,r),e}function Lo(e,t,n,r){var i=t.current,o=be(),s=Bt(i);return n=tp(n),t.context===null?t.context=n:t.pendingContext=n,t=gt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(i,t,s),e!==null&&(Je(e,i,s,o),Li(e,i,s)),s}function mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Da(e,t){ac(e,t),(e=e.alternate)&&ac(e,t)}function Ag(){return null}var rp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Va(e){this._internalRoot=e}jo.prototype.render=Va.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Lo(e,t,null,null)};jo.prototype.unmount=Va.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mn(function(){Lo(null,e,null,null)}),t[yt]=null}};function jo(e){this._internalRoot=e}jo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Od();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&t!==0&&t<Nt[n].priority;n++);Nt.splice(n,0,e),n===0&&jd(e)}};function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uc(){}function Tg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=mo(s);o.call(u)}}var s=np(t,r,e,0,null,!1,!1,"",uc);return e._reactRootContainer=s,e[yt]=s.current,Br(e.nodeType===8?e.parentNode:e),mn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=mo(a);l.call(u)}}var a=Ra(e,0,!1,null,null,!1,!1,"",uc);return e._reactRootContainer=a,e[yt]=a.current,Br(e.nodeType===8?e.parentNode:e),mn(function(){Lo(t,a,n,r)}),a}function Fo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=mo(s);l.call(a)}}Lo(t,s,e,i)}else s=Tg(n,t,e,i,r);return mo(s)}Id=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vr(t.pendingLanes);n!==0&&(sa(t,n|1),Ne(t,le()),!(H&6)&&(Qn=le()+500,Kt()))}break;case 13:mn(function(){var r=wt(e,1);if(r!==null){var i=be();Je(r,e,1,i)}}),Da(e,1)}};la=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=be();Je(t,e,134217728,n)}Da(e,134217728)}};Md=function(e){if(e.tag===13){var t=Bt(e),n=wt(e,t);if(n!==null){var r=be();Je(n,e,t,r)}Da(e,t)}};Od=function(){return X};Ld=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Ys=function(e,t,n){switch(t){case"input":if(Vs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=To(r);if(!i)throw Error(M(90));dd(r),Vs(r,i)}}}break;case"textarea":pd(e,n);break;case"select":t=n.value,t!=null&&jn(e,!!n.multiple,t,!1)}};xd=La;Sd=mn;var Pg={usingClientEntryPoint:!1,Events:[ni,An,To,yd,wd,La]},pr={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ng={bundleType:pr.bundleType,version:pr.version,rendererPackageName:pr.rendererPackageName,rendererConfig:pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kd(e),e===null?null:e.stateNode},findFiberByHostInstance:pr.findFiberByHostInstance||Ag,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ci.isDisabled&&Ci.supportsFiber)try{Eo=Ci.inject(Ng),at=Ci}catch{}}Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pg;Fe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ba(t))throw Error(M(200));return Cg(e,t,null,n)};Fe.createRoot=function(e,t){if(!Ba(e))throw Error(M(299));var n=!1,r="",i=rp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ra(e,1,!1,null,null,n,!1,r,i),e[yt]=t.current,Br(e.nodeType===8?e.parentNode:e),new Va(t)};Fe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=kd(t),e=e===null?null:e.stateNode,e};Fe.flushSync=function(e){return mn(e)};Fe.hydrate=function(e,t,n){if(!_o(t))throw Error(M(200));return Fo(null,e,t,!0,n)};Fe.hydrateRoot=function(e,t,n){if(!Ba(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=rp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=np(t,null,e,1,n??null,i,!1,o,s),e[yt]=t.current,Br(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new jo(t)};Fe.render=function(e,t,n){if(!_o(t))throw Error(M(200));return Fo(null,e,t,!1,n)};Fe.unmountComponentAtNode=function(e){if(!_o(e))throw Error(M(40));return e._reactRootContainer?(mn(function(){Fo(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};Fe.unstable_batchedUpdates=La;Fe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_o(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Fo(e,t,n,!1,r)};Fe.version="18.3.1-next-f1338f8080-20240426";function ip(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ip)}catch(e){console.error(e)}}ip(),rd.exports=Fe;var zg=rd.exports,cc=zg;un.createRoot=cc.createRoot,un.hydrateRoot=cc.hydrateRoot;const ii={prefix:"fas",iconName:"circle-chevron-right",icon:[512,512,["chevron-circle-right"],"f138","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"]},Ig={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]},tr=Ig,Ro={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Mg={prefix:"fas",iconName:"volume-xmark",icon:[576,512,["volume-mute","volume-times"],"f6a9","M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},nr=Mg,Og={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},rr=Og,oi={prefix:"fas",iconName:"circle-chevron-left",icon:[512,512,["chevron-circle-left"],"f137","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"]},dc=()=>{};let $a={},op={},sp=null,lp={mark:dc,measure:dc};try{typeof window<"u"&&($a=window),typeof document<"u"&&(op=document),typeof MutationObserver<"u"&&(sp=MutationObserver),typeof performance<"u"&&(lp=performance)}catch{}const{userAgent:fc=""}=$a.navigator||{},Ht=$a,ee=op,pc=sp,Ai=lp;Ht.document;const kt=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",ap=~fc.indexOf("MSIE")||~fc.indexOf("Trident/");var ne="classic",up="duotone",Le="sharp",je="sharp-duotone",Lg=[ne,up,Le,je],jg={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},mc={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},_g=["kit"],Fg=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Rg=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Dg={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Vg={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Bg={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},$g={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Gg={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Ug={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},cp={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Hg=["solid","regular","light","thin","duotone","brands"],dp=[1,2,3,4,5,6,7,8,9,10],Wg=dp.concat([11,12,13,14,15,16,17,18,19,20]),wr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Yg=[...Object.keys($g),...Hg,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wr.GROUP,wr.SWAP_OPACITY,wr.PRIMARY,wr.SECONDARY].concat(dp.map(e=>"".concat(e,"x"))).concat(Wg.map(e=>"w-".concat(e))),Xg={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Qg={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Kg={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},hc={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const St="___FONT_AWESOME___",Al=16,fp="fa",pp="svg-inline--fa",hn="data-fa-i2svg",Tl="data-fa-pseudo-element",qg="data-fa-pseudo-element-pending",Ga="data-prefix",Ua="data-icon",gc="fontawesome-i2svg",Zg="async",Jg=["HTML","HEAD","STYLE","SCRIPT"],mp=(()=>{try{return!0}catch{return!1}})(),hp=[ne,Le,je];function si(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[ne]}})}const gp={...cp};gp[ne]={...cp[ne],...mc.kit,...mc["kit-duotone"]};const ln=si(gp),Pl={...Ug};Pl[ne]={...Pl[ne],...hc.kit,...hc["kit-duotone"]};const Kr=si(Pl),Nl={...Gg};Nl[ne]={...Nl[ne],...Kg.kit};const an=si(Nl),zl={...Bg};zl[ne]={...zl[ne],...Qg.kit};const e0=si(zl),t0=Fg,vp="fa-layers-text",n0=Rg,r0={...jg};si(r0);const i0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gs=wr,Kn=new Set;Object.keys(Kr[ne]).map(Kn.add.bind(Kn));Object.keys(Kr[Le]).map(Kn.add.bind(Kn));Object.keys(Kr[je]).map(Kn.add.bind(Kn));const o0=[..._g,...Yg],zr=Ht.FontAwesomeConfig||{};function s0(e){var t=ee.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function l0(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}ee&&typeof ee.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=l0(s0(n));i!=null&&(zr[r]=i)});const yp={styleDefault:"solid",familyDefault:"classic",cssPrefix:fp,replacementClass:pp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};zr.familyPrefix&&(zr.cssPrefix=zr.familyPrefix);const qn={...yp,...zr};qn.autoReplaceSvg||(qn.observeMutations=!1);const D={};Object.keys(yp).forEach(e=>{Object.defineProperty(D,e,{enumerable:!0,set:function(t){qn[e]=t,Ir.forEach(n=>n(D))},get:function(){return qn[e]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(e){qn.cssPrefix=e,Ir.forEach(t=>t(D))},get:function(){return qn.cssPrefix}});Ht.FontAwesomeConfig=D;const Ir=[];function a0(e){return Ir.push(e),()=>{Ir.splice(Ir.indexOf(e),1)}}const At=Al,ot={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function u0(e){if(!e||!kt)return;const t=ee.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=ee.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return ee.head.insertBefore(t,r),e}const c0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function qr(){let e=12,t="";for(;e-- >0;)t+=c0[Math.random()*62|0];return t}function ir(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ha(e){return e.classList?ir(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function wp(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function d0(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(wp(e[n]),'" '),"").trim()}function Do(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Wa(e){return e.size!==ot.size||e.x!==ot.x||e.y!==ot.y||e.rotate!==ot.rotate||e.flipX||e.flipY}function f0(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),a={transform:"".concat(o," ").concat(s," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:a,path:u}}function p0(e){let{transform:t,width:n=Al,height:r=Al,startCentered:i=!1}=e,o="";return i&&ap?o+="translate(".concat(t.x/At-n/2,"em, ").concat(t.y/At-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(t.x/At,"em), calc(-50% + ").concat(t.y/At,"em)) "):o+="translate(".concat(t.x/At,"em, ").concat(t.y/At,"em) "),o+="scale(".concat(t.size/At*(t.flipX?-1:1),", ").concat(t.size/At*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var m0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function xp(){const e=fp,t=pp,n=D.cssPrefix,r=D.replacementClass;let i=m0;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let vc=!1;function vs(){D.autoAddCss&&!vc&&(u0(xp()),vc=!0)}var h0={mixout(){return{dom:{css:xp,insertCss:vs}}},hooks(){return{beforeDOMElementCreation(){vs()},beforeI2svg(){vs()}}}};const bt=Ht||{};bt[St]||(bt[St]={});bt[St].styles||(bt[St].styles={});bt[St].hooks||(bt[St].hooks={});bt[St].shims||(bt[St].shims=[]);var st=bt[St];const Sp=[],bp=function(){ee.removeEventListener("DOMContentLoaded",bp),ho=1,Sp.map(e=>e())};let ho=!1;kt&&(ho=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),ho||ee.addEventListener("DOMContentLoaded",bp));function g0(e){kt&&(ho?setTimeout(e,0):Sp.push(e))}function li(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?wp(e):"<".concat(t," ").concat(d0(n),">").concat(r.map(li).join(""),"</").concat(t,">")}function yc(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ys=function(t,n,r,i){var o=Object.keys(t),s=o.length,l=n,a,u,d;for(r===void 0?(a=1,d=t[o[0]]):(a=0,d=r);a<s;a++)u=o[a],d=l(d,t[u],u,t);return d};function v0(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Il(e){const t=v0(e);return t.length===1?t[0].toString(16):null}function y0(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function wc(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ml(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=wc(t);typeof st.hooks.addPack=="function"&&!r?st.hooks.addPack(e,wc(t)):st.styles[e]={...st.styles[e]||{},...i},e==="fas"&&Ml("fa",t)}const{styles:en,shims:w0}=st,x0={[ne]:Object.values(an[ne]),[Le]:Object.values(an[Le]),[je]:Object.values(an[je])};let Ya=null,Ep={},kp={},Cp={},Ap={},Tp={};const S0={[ne]:Object.keys(ln[ne]),[Le]:Object.keys(ln[Le]),[je]:Object.keys(ln[je])};function b0(e){return~o0.indexOf(e)}function E0(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!b0(i)?i:null}const Pp=()=>{const e=r=>ys(en,(i,o,s)=>(i[s]=ys(o,r,{}),i),{});Ep=e((r,i,o)=>(i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=o}),r)),kp=e((r,i,o)=>(r[o]=o,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=o}),r)),Tp=e((r,i,o)=>{const s=i[2];return r[o]=o,s.forEach(l=>{r[l]=o}),r});const t="far"in en||D.autoFetchSvg,n=ys(w0,(r,i)=>{const o=i[0];let s=i[1];const l=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Cp=n.names,Ap=n.unicodes,Ya=Vo(D.styleDefault,{family:D.familyDefault})};a0(e=>{Ya=Vo(e.styleDefault,{family:D.familyDefault})});Pp();function Xa(e,t){return(Ep[e]||{})[t]}function k0(e,t){return(kp[e]||{})[t]}function Ot(e,t){return(Tp[e]||{})[t]}function Np(e){return Cp[e]||{prefix:null,iconName:null}}function C0(e){const t=Ap[e],n=Xa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Wt(){return Ya}const Qa=()=>({prefix:null,iconName:null,rest:[]});function Vo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=ne}=t,r=ln[n][e],i=Kr[n][e]||Kr[n][r],o=e in st.styles?e:null;return i||o||null}const A0={[ne]:Object.keys(an[ne]),[Le]:Object.keys(an[Le]),[je]:Object.keys(an[je])};function Bo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[ne]:"".concat(D.cssPrefix,"-").concat(ne),[Le]:"".concat(D.cssPrefix,"-").concat(Le),[je]:"".concat(D.cssPrefix,"-").concat(je)};let i=null,o=ne;const s=Lg.filter(a=>a!==up);s.forEach(a=>{(e.includes(r[a])||e.some(u=>A0[a].includes(u)))&&(o=a)});const l=e.reduce((a,u)=>{const d=E0(D.cssPrefix,u);if(en[u]?(u=x0[o].includes(u)?e0[o][u]:u,i=u,a.prefix=u):S0[o].indexOf(u)>-1?(i=u,a.prefix=Vo(u,{family:o})):d?a.iconName=d:u!==D.replacementClass&&!s.some(p=>u===r[p])&&a.rest.push(u),!n&&a.prefix&&a.iconName){const p=i==="fa"?Np(a.iconName):{},h=Ot(a.prefix,a.iconName);p.prefix&&(i=null),a.iconName=p.iconName||h||a.iconName,a.prefix=p.prefix||a.prefix,a.prefix==="far"&&!en.far&&en.fas&&!D.autoFetchSvg&&(a.prefix="fas")}return a},Qa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===Le&&(en.fass||D.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ot(l.prefix,l.iconName)||l.iconName),!l.prefix&&o===je&&(en.fasds||D.autoFetchSvg)&&(l.prefix="fasds",l.iconName=Ot(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=Wt()||"fas"),l}class T0{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...i[o]},Ml(o,i[o]);const s=an[ne][o];s&&Ml(s,i[o]),Pp()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:o,iconName:s,icon:l}=r[i],a=l[2];t[o]||(t[o]={}),a.length>0&&a.forEach(u=>{typeof u=="string"&&(t[o][u]=l)}),t[o][s]=l}),t}}let xc=[],On={};const Bn={},P0=Object.keys(Bn);function N0(e,t){let{mixoutsTo:n}=t;return xc=e,On={},Object.keys(Bn).forEach(r=>{P0.indexOf(r)===-1&&delete Bn[r]}),xc.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{On[s]||(On[s]=[]),On[s].push(o[s])})}r.provides&&r.provides(Bn)}),n}function Ol(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(On[e]||[]).forEach(s=>{t=s.apply(null,[t,...r])}),t}function gn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(On[e]||[]).forEach(o=>{o.apply(null,n)})}function Yt(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Bn[e]?Bn[e].apply(null,t):void 0}function Ll(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Wt();if(t)return t=Ot(n,t)||t,yc(zp.definitions,n,t)||yc(st.styles,n,t)}const zp=new T0,z0=()=>{D.autoReplaceSvg=!1,D.observeMutations=!1,gn("noAuto")},I0={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return kt?(gn("beforeI2svg",e),Yt("pseudoElements2svg",e),Yt("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,g0(()=>{O0({autoReplaceSvgRoot:t}),gn("watch",e)})}},M0={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ot(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Vo(e[0]);return{prefix:n,iconName:Ot(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(D.cssPrefix,"-"))>-1||e.match(t0))){const t=Bo(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Wt(),iconName:Ot(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Wt();return{prefix:t,iconName:Ot(t,e)||e}}}},De={noAuto:z0,config:D,dom:I0,parse:M0,library:zp,findIconDefinition:Ll,toHtml:li},O0=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=ee}=e;(Object.keys(st.styles).length>0||D.autoFetchSvg)&&kt&&D.autoReplaceSvg&&De.dom.i2svg({node:t})};function $o(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>li(n))}}),Object.defineProperty(e,"node",{get:function(){if(!kt)return;const n=ee.createElement("div");return n.innerHTML=e.html,n.children}}),e}function L0(e){let{children:t,main:n,mask:r,attributes:i,styles:o,transform:s}=e;if(Wa(s)&&n.found&&!r.found){const{width:l,height:a}=n,u={x:l/a/2,y:.5};i.style=Do({...o,"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")})}return[{tag:"svg",attributes:i,children:t}]}function j0(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:o}=e;const s=o===!0?"".concat(t,"-").concat(D.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:s},children:r}]}]}function Ka(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:o,symbol:s,title:l,maskId:a,titleId:u,extra:d,watchable:p=!1}=e,{width:h,height:g}=n.found?n:t,y=r==="fak",x=[D.replacementClass,i?"".concat(D.cssPrefix,"-").concat(i):""].filter(S=>d.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(d.classes).join(" ");let b={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":i,class:x,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(g)}};const c=y&&!~d.classes.indexOf("fa-fw")?{width:"".concat(h/g*16*.0625,"em")}:{};p&&(b.attributes[hn]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(u||qr())},children:[l]}),delete b.attributes.title);const f={...b,prefix:r,iconName:i,main:t,mask:n,maskId:a,transform:o,symbol:s,styles:{...c,...d.styles}},{children:m,attributes:w}=n.found&&t.found?Yt("generateAbstractMask",f)||{children:[],attributes:{}}:Yt("generateAbstractIcon",f)||{children:[],attributes:{}};return f.children=m,f.attributes=w,s?j0(f):L0(f)}function Sc(e){const{content:t,width:n,height:r,transform:i,title:o,extra:s,watchable:l=!1}=e,a={...s.attributes,...o?{title:o}:{},class:s.classes.join(" ")};l&&(a[hn]="");const u={...s.styles};Wa(i)&&(u.transform=p0({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const d=Do(u);d.length>0&&(a.style=d);const p=[];return p.push({tag:"span",attributes:a,children:[t]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function _0(e){const{content:t,title:n,extra:r}=e,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=Do(r.styles);o.length>0&&(i.style=o);const s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:ws}=st;function jl(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(gs.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(gs.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(gs.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const F0={found:!1,width:512,height:512};function R0(e,t){!mp&&!D.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function _l(e,t){let n=t;return t==="fa"&&D.styleDefault!==null&&(t=Wt()),new Promise((r,i)=>{if(n==="fa"){const o=Np(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ws[t]&&ws[t][e]){const o=ws[t][e];return r(jl(o))}R0(e,t),r({...F0,icon:D.showMissingIcons&&e?Yt("missingIconAbstract")||{}:{}})})}const bc=()=>{},Fl=D.measurePerformance&&Ai&&Ai.mark&&Ai.measure?Ai:{mark:bc,measure:bc},xr='FA "6.6.0"',D0=e=>(Fl.mark("".concat(xr," ").concat(e," begins")),()=>Ip(e)),Ip=e=>{Fl.mark("".concat(xr," ").concat(e," ends")),Fl.measure("".concat(xr," ").concat(e),"".concat(xr," ").concat(e," begins"),"".concat(xr," ").concat(e," ends"))};var qa={begin:D0,end:Ip};const Bi=()=>{};function Ec(e){return typeof(e.getAttribute?e.getAttribute(hn):null)=="string"}function V0(e){const t=e.getAttribute?e.getAttribute(Ga):null,n=e.getAttribute?e.getAttribute(Ua):null;return t&&n}function B0(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(D.replacementClass)}function $0(){return D.autoReplaceSvg===!0?$i.replace:$i[D.autoReplaceSvg]||$i.replace}function G0(e){return ee.createElementNS("http://www.w3.org/2000/svg",e)}function U0(e){return ee.createElement(e)}function Mp(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?G0:U0}=t;if(typeof e=="string")return ee.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Mp(o,{ceFn:n}))}),r}function H0(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const $i={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Mp(n),t)}),t.getAttribute(hn)===null&&D.keepOriginalSource){let n=ee.createComment(H0(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Ha(t).indexOf(D.replacementClass))return $i.replace(e);const r=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,l)=>(l===D.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const i=n.map(o=>li(o)).join(`
`);t.setAttribute(hn,""),t.innerHTML=i}};function kc(e){e()}function Op(e,t){const n=typeof t=="function"?t:Bi;if(e.length===0)n();else{let r=kc;D.mutateApproach===Zg&&(r=Ht.requestAnimationFrame||kc),r(()=>{const i=$0(),o=qa.begin("mutate");e.map(i),o(),n()})}}let Za=!1;function Lp(){Za=!0}function Rl(){Za=!1}let go=null;function Cc(e){if(!pc||!D.observeMutations)return;const{treeCallback:t=Bi,nodeCallback:n=Bi,pseudoElementsCallback:r=Bi,observeMutationsRoot:i=ee}=e;go=new pc(o=>{if(Za)return;const s=Wt();ir(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Ec(l.addedNodes[0])&&(D.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&D.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&Ec(l.target)&&~i0.indexOf(l.attributeName))if(l.attributeName==="class"&&V0(l.target)){const{prefix:a,iconName:u}=Bo(Ha(l.target));l.target.setAttribute(Ga,a||s),u&&l.target.setAttribute(Ua,u)}else B0(l.target)&&n(l.target)})}),kt&&go.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function W0(){go&&go.disconnect()}function Y0(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const o=i.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(r[s]=l.join(":").trim()),r},{})),n}function X0(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=Bo(Ha(e));return i.prefix||(i.prefix=Wt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=k0(i.prefix,e.innerText)||Xa(i.prefix,Il(e.innerText))),!i.iconName&&D.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Q0(e){const t=ir(e.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return D.autoA11y&&(n?t["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(r||qr()):(t["aria-hidden"]="true",t.focusable="false")),t}function K0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ot,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ac(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=X0(e),o=Q0(e),s=Ol("parseNodeAttributes",{},e);let l=t.styleParser?Y0(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:ot,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o},...s}}const{styles:q0}=st;function jp(e){const t=D.autoReplaceSvg==="nest"?Ac(e,{styleParser:!1}):Ac(e);return~t.extra.classes.indexOf(vp)?Yt("generateLayersText",e,t):Yt("generateSvgReplacementMutation",e,t)}let ct=new Set;hp.map(e=>{ct.add("fa-".concat(e))});Object.keys(ln[ne]).map(ct.add.bind(ct));Object.keys(ln[Le]).map(ct.add.bind(ct));Object.keys(ln[je]).map(ct.add.bind(ct));ct=[...ct];function Tc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!kt)return Promise.resolve();const n=ee.documentElement.classList,r=d=>n.add("".concat(gc,"-").concat(d)),i=d=>n.remove("".concat(gc,"-").concat(d)),o=D.autoFetchSvg?ct:hp.map(d=>"fa-".concat(d)).concat(Object.keys(q0));o.includes("fa")||o.push("fa");const s=[".".concat(vp,":not([").concat(hn,"])")].concat(o.map(d=>".".concat(d,":not([").concat(hn,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=ir(e.querySelectorAll(s))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const a=qa.begin("onTree"),u=l.reduce((d,p)=>{try{const h=jp(p);h&&d.push(h)}catch(h){mp||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise((d,p)=>{Promise.all(u).then(h=>{Op(h,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),a(),d()})}).catch(h=>{a(),p(h)})})}function Z0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jp(e).then(n=>{n&&Op([n],t)})}function J0(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Ll(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Ll(i||{})),e(r,{...n,mask:i})}}const ev=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ot,symbol:r=!1,mask:i=null,maskId:o=null,title:s=null,titleId:l=null,classes:a=[],attributes:u={},styles:d={}}=t;if(!e)return;const{prefix:p,iconName:h,icon:g}=e;return $o({type:"icon",...e},()=>(gn("beforeDOMElementCreation",{iconDefinition:e,params:t}),D.autoA11y&&(s?u["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(l||qr()):(u["aria-hidden"]="true",u.focusable="false")),Ka({icons:{main:jl(g),mask:i?jl(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:h,transform:{...ot,...n},symbol:r,title:s,maskId:o,titleId:l,extra:{attributes:u,styles:d,classes:a}})))};var tv={mixout(){return{icon:J0(ev)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Tc,e.nodeCallback=Z0,e}}},provides(e){e.i2svg=function(t){const{node:n=ee,callback:r=()=>{}}=t;return Tc(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:o,prefix:s,transform:l,symbol:a,mask:u,maskId:d,extra:p}=n;return new Promise((h,g)=>{Promise.all([_l(r,s),u.iconName?_l(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[x,b]=y;h([t,Ka({icons:{main:x,mask:b},prefix:s,iconName:r,transform:l,symbol:a,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:o,styles:s}=t;const l=Do(s);l.length>0&&(r.style=l);let a;return Wa(o)&&(a=Yt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(a||i.icon),{children:n,attributes:r}}}},nv={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return $o({type:"layer"},()=>{gn("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(o=>{r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},rv={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:o={}}=t;return $o({type:"counter",content:e},()=>(gn("beforeDOMElementCreation",{content:e,params:t}),_0({content:e.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(D.cssPrefix,"-layers-counter"),...r]}})))}}}},iv={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ot,title:r=null,classes:i=[],attributes:o={},styles:s={}}=t;return $o({type:"text",content:e},()=>(gn("beforeDOMElementCreation",{content:e,params:t}),Sc({content:e,transform:{...ot,...n},title:r,extra:{attributes:o,styles:s,classes:["".concat(D.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:o}=n;let s=null,l=null;if(ap){const a=parseInt(getComputedStyle(t).fontSize,10),u=t.getBoundingClientRect();s=u.width/a,l=u.height/a}return D.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Sc({content:t.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}};const ov=new RegExp('"',"ug"),Pc=[1105920,1112319],Nc={FontAwesome:{normal:"fas",400:"fas"},...Vg,...Dg,...Xg},Dl=Object.keys(Nc).reduce((e,t)=>(e[t.toLowerCase()]=Nc[t],e),{}),sv=Object.keys(Dl).reduce((e,t)=>{const n=Dl[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function lv(e){const t=e.replace(ov,""),n=y0(t,0),r=n>=Pc[0]&&n<=Pc[1],i=t.length===2?t[0]===t[1]:!1;return{value:Il(i?t[0]:t),isSecondary:r||i}}function av(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(Dl[n]||{})[i]||sv[n]}function zc(e,t){const n="".concat(qg).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const s=ir(e.children).filter(h=>h.getAttribute(Tl)===t)[0],l=Ht.getComputedStyle(e,t),a=l.getPropertyValue("font-family"),u=a.match(n0),d=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(s&&!u)return e.removeChild(s),r();if(u&&p!=="none"&&p!==""){const h=l.getPropertyValue("content");let g=av(a,d);const{value:y,isSecondary:x}=lv(h),b=u[0].startsWith("FontAwesome");let c=Xa(g,y),f=c;if(b){const m=C0(y);m.iconName&&m.prefix&&(c=m.iconName,g=m.prefix)}if(c&&!x&&(!s||s.getAttribute(Ga)!==g||s.getAttribute(Ua)!==f)){e.setAttribute(n,f),s&&e.removeChild(s);const m=K0(),{extra:w}=m;w.attributes[Tl]=t,_l(c,g).then(S=>{const T=Ka({...m,icons:{main:S,mask:Qa()},prefix:g,iconName:f,extra:w,watchable:!0}),z=ee.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=T.map(A=>li(A)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function uv(e){return Promise.all([zc(e,"::before"),zc(e,"::after")])}function cv(e){return e.parentNode!==document.head&&!~Jg.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Tl)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ic(e){if(kt)return new Promise((t,n)=>{const r=ir(e.querySelectorAll("*")).filter(cv).map(uv),i=qa.begin("searchPseudoElements");Lp(),Promise.all(r).then(()=>{i(),Rl(),t()}).catch(()=>{i(),Rl(),n()})})}var dv={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Ic,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=ee}=t;D.searchPseudoElements&&Ic(n)}}};let Mc=!1;var fv={mixout(){return{dom:{unwatch(){Lp(),Mc=!0}}}},hooks(){return{bootstrap(){Cc(Ol("mutationObserverCallbacks",{}))},noAuto(){W0()},watch(e){const{observeMutationsRoot:t}=e;Mc?Rl():Cc(Ol("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Oc=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),o=i[0];let s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var pv={mixout(){return{parse:{transform:e=>Oc(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Oc(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:o}=t;const s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),a="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(a," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},h={outer:s,inner:d,path:p};return{tag:"g",attributes:{...h.outer},children:[{tag:"g",attributes:{...h.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...h.path}}]}]}}}};const xs={x:0,y:0,width:"100%",height:"100%"};function Lc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function mv(e){return e.tag==="g"?e.children:[e]}var hv={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Bo(n.split(" ").map(i=>i.trim())):Qa();return r.prefix||(r.prefix=Wt()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:o,maskId:s,transform:l}=t;const{width:a,icon:u}=i,{width:d,icon:p}=o,h=f0({transform:l,containerWidth:d,iconWidth:a}),g={tag:"rect",attributes:{...xs,fill:"white"}},y=u.children?{children:u.children.map(Lc)}:{},x={tag:"g",attributes:{...h.inner},children:[Lc({tag:u.tag,attributes:{...u.attributes,...h.path},...y})]},b={tag:"g",attributes:{...h.outer},children:[x]},c="mask-".concat(s||qr()),f="clip-".concat(s||qr()),m={tag:"mask",attributes:{...xs,id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,b]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:f},children:mv(p)},m]};return n.push(w,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(f,")"),mask:"url(#".concat(c,")"),...xs}}),{children:n,attributes:r}}}},gv={provides(e){let t=!1;Ht.matchMedia&&(t=Ht.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...i,attributeName:"opacity"},s={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||s.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},vv={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},yv=[h0,tv,nv,rv,iv,dv,fv,pv,hv,gv,vv];N0(yv,{mixoutsTo:De});De.noAuto;De.config;De.library;De.dom;const Vl=De.parse;De.findIconDefinition;De.toHtml;const wv=De.icon;De.layer;De.text;De.counter;var _p={exports:{}},xv="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Sv=xv,bv=Sv;function Fp(){}function Rp(){}Rp.resetWarningCache=Fp;var Ev=function(){function e(r,i,o,s,l,a){if(a!==bv){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Rp,resetWarningCache:Fp};return n.PropTypes=n,n};_p.exports=Ev();var kv=_p.exports;const G=Hc(kv);function jc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jc(Object(n),!0).forEach(function(r){Ln(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vo(e){"@babel/helpers - typeof";return vo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vo(e)}function Ln(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Cv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Av(e,t){if(e==null)return{};var n=Cv(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Bl(e){return Tv(e)||Pv(e)||Nv(e)||zv()}function Tv(e){if(Array.isArray(e))return $l(e)}function Pv(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Nv(e,t){if(e){if(typeof e=="string")return $l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $l(e,t)}}function $l(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Iv(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,l=e.flash,a=e.spin,u=e.spinPulse,d=e.spinReverse,p=e.pulse,h=e.fixedWidth,g=e.inverse,y=e.border,x=e.listItem,b=e.flip,c=e.size,f=e.rotation,m=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":l,"fa-spin":a,"fa-spin-reverse":d,"fa-spin-pulse":u,"fa-pulse":p,"fa-fw":h,"fa-inverse":g,"fa-border":y,"fa-li":x,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},Ln(t,"fa-".concat(c),typeof c<"u"&&c!==null),Ln(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),Ln(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Ln(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(S){return w[S]?S:null}).filter(function(S){return S})}function Mv(e){return e=e-0,e===e}function Dp(e){return Mv(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ov=["style"];function Lv(e){return e.charAt(0).toUpperCase()+e.slice(1)}function jv(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Dp(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[Lv(i)]=o:t[i]=o,t},{})}function Vp(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(a){return Vp(e,a)}),i=Object.keys(t.attributes||{}).reduce(function(a,u){var d=t.attributes[u];switch(u){case"class":a.attrs.className=d,delete t.attributes.class;break;case"style":a.attrs.style=jv(d);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?a.attrs[u.toLowerCase()]=d:a.attrs[Dp(u)]=d}return a},{attrs:{}}),o=n.style,s=o===void 0?{}:o,l=Av(n,Ov);return i.attrs.style=rt(rt({},i.attrs.style),s),e.apply(void 0,[t.tag,rt(rt({},i.attrs),l)].concat(Bl(r)))}var Bp=!1;try{Bp=!0}catch{}function _v(){if(!Bp&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function _c(e){if(e&&vo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Vl.icon)return Vl.icon(e);if(e===null)return null;if(e&&vo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ss(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ln({},e,t):{}}var Fc={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Y=K.forwardRef(function(e,t){var n=rt(rt({},Fc),e),r=n.icon,i=n.mask,o=n.symbol,s=n.className,l=n.title,a=n.titleId,u=n.maskId,d=_c(r),p=Ss("classes",[].concat(Bl(Iv(n)),Bl((s||"").split(" ")))),h=Ss("transform",typeof n.transform=="string"?Vl.transform(n.transform):n.transform),g=Ss("mask",_c(i)),y=wv(d,rt(rt(rt(rt({},p),h),g),{},{symbol:o,title:l,titleId:a,maskId:u}));if(!y)return _v("Could not find icon",d),null;var x=y.abstract,b={ref:t};return Object.keys(n).forEach(function(c){Fc.hasOwnProperty(c)||(b[c]=n[c])}),Fv(x[0],b)});Y.displayName="FontAwesomeIcon";Y.propTypes={beat:G.bool,border:G.bool,beatFade:G.bool,bounce:G.bool,className:G.string,fade:G.bool,flash:G.bool,mask:G.oneOfType([G.object,G.array,G.string]),maskId:G.string,fixedWidth:G.bool,inverse:G.bool,flip:G.oneOf([!0,!1,"horizontal","vertical","both"]),icon:G.oneOfType([G.object,G.array,G.string]),listItem:G.bool,pull:G.oneOf(["right","left"]),pulse:G.bool,rotation:G.oneOf([0,90,180,270]),shake:G.bool,size:G.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:G.bool,spinPulse:G.bool,spinReverse:G.bool,symbol:G.oneOfType([G.bool,G.string]),title:G.string,titleId:G.string,transform:G.oneOfType([G.string,G.object]),swapOpacity:G.bool};var Fv=Vp.bind(null,K.createElement);const Rv=()=>v.jsx("div",{className:"video-grid skeleton-container",children:v.jsx("div",{className:"video-content",children:v.jsx("p",{className:"txt"})})}),Dv=({videos:e,campaigns:t,loading:n})=>{const[r,i]=k.useState(null),o=u=>{i(u)},s=()=>{i(null)},[l,a]=k.useState(null);return n?v.jsx("div",{className:"outer-grid",children:v.jsx("div",{className:"grid",children:Array.from({length:6}).map((u,d)=>v.jsx(Rv,{},d))})}):v.jsx(v.Fragment,{children:v.jsxs("div",{className:"outer-grid",children:[v.jsx("div",{className:"grid",children:t.map((u,d)=>v.jsxs("div",{onClick:()=>o(d),children:[v.jsx("div",{className:"video-grid",onMouseEnter:()=>a(d),onMouseLeave:()=>a(null),children:l===d?v.jsx("video",{src:u.videoId[0],loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"}):v.jsx("img",{className:"thumbnail",src:u.campaignPhoto,width:"300",height:"200",alt:"video thumbnail"})}),v.jsx("div",{className:"video-content",children:v.jsxs("p",{className:"txt",children:[t[d].campaignName," ",v.jsx("br",{})," From"," ",t[d].offerPrice.currency,t[d].offerPrice.price]})})]},d))}),r!==null&&v.jsx(Vv,{campaigns:t,currentIndex:r,onClose:s})]})})},Vv=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=k.useState(t),[o,s]=k.useState(0),[l,a]=k.useState({}),[u,d]=k.useState(!1),[p,h]=k.useState(!1),[g,y]=k.useState(null),[x,b]=k.useState(!1),[c,f]=k.useState(!1),m=k.useRef([]),w=k.useRef(null);k.useRef(null);const S=k.useRef(null);k.useEffect(()=>{const R=new IntersectionObserver(E=>{E.forEach(L=>{const B=m.current.indexOf(L.target);L.isIntersecting?(L.target.play(),s(B),f(!1)):L.target.pause()})},{threshold:.5});return s(0),m.current.forEach(E=>{E&&R.observe(E)}),()=>{m.current.forEach(E=>{E&&R.unobserve(E)})}},[r]),k.useEffect(()=>{const R=m.current[o];R&&R.play()},[o]);const T=()=>{r!==null?r+1<e.length?(i(r+1),s(0)):(i(0),s(0)):e.length>0&&(i(0),s(0))},z=()=>{r!==null?r>0?(i(r-1),s(0)):(i(e.length-1),s(0)):e.length>0&&(i(e.length-1),s(0))},A=R=>{const E=m.current[R];E&&(E.paused?E.play():E.pause(),d(E.paused),f(E.paused))},I=R=>{const E=m.current[R];E&&(E.muted=!E.muted,a(L=>({...L,[R]:E.muted})))},C=R=>{clearTimeout(w.current)},j=(R,E)=>{R===0&&(y(E.duration),P(E.duration))},P=R=>{clearTimeout(w.current),w.current=setTimeout(()=>{h(!0),setTimeout(()=>{h(!1)},1e4)},R*1e3)},N=R=>{clearTimeout(w.current),R===0&&g&&P(g)},V=()=>{clearTimeout(w.current)},$=()=>{b(!x)},W=R=>{const E=R.split(`
`);return E.length>2?{truncated:E.slice(0,2).join(`
`),hasMore:!0}:{truncated:R,hasMore:!1}};return k.useEffect(()=>{s(0),S.current&&(S.current.scrollTop=0)},[r]),v.jsxs("div",{className:"whole123",children:[v.jsx("div",{className:"prevbtn123",onClick:z,children:v.jsx(Y,{icon:oi})}),v.jsx("div",{className:"nextbtn123",onClick:T,children:v.jsx(Y,{icon:ii})}),v.jsx("div",{className:"reelsContainer",ref:S,children:e[r].videoId.map((R,E)=>v.jsxs("div",{className:"reel",children:[v.jsx("div",{className:"closediv123",children:v.jsx("button",{className:"closebtn123",onClick:n,children:v.jsx(Y,{icon:rr})})}),v.jsxs("div",{className:"video-container1",children:[v.jsx("video",{ref:L=>m.current[E]=L,src:R,className:"ad",loop:!0,playsInline:!0,controls:!1,autoPlay:E===o,onClick:()=>A(E),onPause:()=>{V(),d(!0)},onPlay:()=>{N(E),d(!1)},onEnded:()=>C(),onLoadedMetadata:L=>j(E,L.target)}),u&&c&&v.jsx(Y,{icon:Ro,onClick:()=>A(E),className:"play-button123"}),v.jsxs("div",{className:"bookdiv123",children:[v.jsx("div",{className:"img1",children:v.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),v.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[v.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),v.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[x?e[r].campaignDetails:W(e[r].campaignDetails).truncated,W(e[r].campaignDetails).hasMore&&v.jsx("div",{children:v.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:$,children:x?" View Less":" View More"})})]}),v.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[r].offerPrice.currency,e[r].offerPrice.price]})]}),v.jsx("div",{className:"divbtn",children:v.jsx("a",{href:e[r].hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]}),v.jsx("div",{className:"functions",children:v.jsx(Y,{icon:l[E]?nr:tr,className:"volume123",onClick:()=>I(E),style:{cursor:"pointer"}})})]},E))})]})},Bv=()=>{const[e,t]=k.useState([]),[n,r]=k.useState([]),[i,o]=k.useState(!0);return k.useEffect(()=>{const l=document.getElementById("root-grid").dataset.campaignId;(async u=>{try{const p=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${u}`)).json(),h=p.campaigns.map(g=>g.videoId[0]);t(h),r(p.campaigns)}catch(d){console.error("Error fetching data:",d)}})(l)},[]),k.useEffect(()=>{n.length>0&&o(!1)},[n]),v.jsxs("div",{className:"App",children:[v.jsx("style",{children:`

      
.skeleton-container {
     background: #e9e9e9;
border-radius: 16px;
}
      .outer-grid {
  align-items: center;
}

.grid {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  min-height: 33vh;
}

.grid > div {
  font-size: 16px;
  text-align: center;
  width: 16em;
  height: 27em;
  position: relative;
  padding:0;
  margin:0;
}
.vid, .thumbnail {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 16px;
}
  .vid:hover{
  cursor:pointer;
  }

.video-grid {
  height: 100%;
  width: 100%;
}
.video-content {
  position: absolute;
  bottom: 0%;
  text-align: center;
  align-items: center;
  min-height:15%;
  width: 100%;
display:flex;
justify-content: center;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.199),
    rgba(0, 0, 0, 0.884)
  );
  
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
}

.video-content > .txt {
  color: white;
   text-align: start;
} 
  @media (max-width: 600px) {
.grid {
    grid-template-columns: repeat(2, 1fr); /* Two columns */
    grid-gap: 0.5rem; /* Smaller gap */
  }

  .grid > div {
    font-size: 12px; /* Smaller font size */
    width: 38vw; /* Smaller width */
    height: 60vw; /* Smaller height */
  }

  .vid {
  border-radius: 14px; /* Adjust border radius for smaller size */
  }

  .video-content {
    font-size: 12px;
    border-radius: 14px; /* Smaller font size */
  }
}


.whole123 {
  // pointer-events: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(62, 61, 61);
  display: flex;
  z-index: 1000 !important;
  justify-content: center;
  align-items: center;
  //  height: 100vh;
  // width: 100vw;
  /* background-color: rgba(0, 0, 0, 0.178); */
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 16px !important;
}
  .ad {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.video-container1 {
  height: 100%;
  width: 56vh;
  object-fit: cover;
  display: flex;
  align-items: center;
  border-radius: 16px;
  position: relative;
}

.background {
  background-size: cover;
  max-height: fit-content;
  max-width: 1510px;
  z-index: 1;
}

.reelsContainer::-webkit-scrollbar {
  display: none;
}

.reelsContainer {
  height: 100%;
  width: 100%;
  overflow: auto;
  flex-direction: column;
  z-index:1000;
  scroll-snap-type: y mandatory;
}

.reel {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  scroll-snap-align: start;
  border-radius: 70px;
  position: relative;
  z-index:1000;
  justify-content: center;
}

.closediv123 {
  position: absolute;
  top: 0vh;
  left: 50%; /* Move the div to the center horizontally */
  transform: translateX(-50%); /* Adjust the position to center */
  width: 56vh;
  height: 15vh;
  z-index: 10;
  background-color: transparent;
  display: grid;
}

.functions {
  position: absolute;
  bottom: 20%;
  left: 50%; /* Move the div to the center horizontally */
  transform: translateX(-50%); /* Adjust the position to center */
  width: 56vh;
  height: 15vh;

  display: grid;
}

.nextbtn123,
.prevbtn123 {
  color: white;
  background-color: transparent;
  z-index: 1040;
  border: none;
  font-size: 7vh;
  position: absolute;
  cursor:pointer;
}

.volume123 {
  position: absolute;
  right: 4%;
  top: 1vh;
  font-size: 3vh;
  color: white;
}

.closebtn123 {
  position: absolute;
  right: 2%;
  font-size: 5vh;
  color: white;
  background-color: transparent;
  border: none; /* Remove button border */
  padding: 0; /* Remove button padding */
  cursor: pointer; /* Add pointer cursor */
  z-index: 1000;
  outline: none; /* Remove focus outline */
}

.pre-wrap {
  white-space: pre-wrap;
}

.nextbtn123 {
  right: 0px;
}

.prevbtn123 {
  left: 0px;
}

    .play-button123 {
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 10vh;
  transform: translate(-50%, -50%);
  font-size: 34px;
  color: white;
}
/* Mobile responsive */
@media (max-width: 450px) {

  .carousel-container123 {
    position: relative;
    left: 2.5vw;
    width: 95vw;
    height: 408px;
  }



  .carousel::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }

  .nextbtn123,
  .prevbtn123 {
    color: white;
    z-index: 1040;
    border: none;
    font-size: 10vw;
    position: absolute;
  }

  .functions {
    position: absolute;
    bottom: 25%;
    left: 50%;
    transform: translateX(-50%);
    width: 94%;
    height: 10%;
    display: grid;
  }

  .closediv123 {
    position: absolute;
    top: 1%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 10%;
    z-index: 30;
    display: grid;
  }

  .volume123 {
    position: absolute;
    right: 0%;
    top: 3vh;
    font-size: 2.5vh;
  }


  .closebtn123 {
    position: absolute;
    right: 2%;
    font-size: 4vh;
    color: white;
    background-color: transparent;
    border: none; /* Remove button border */
    padding: 0; /* Remove button padding */
    cursor: pointer; /* Add pointer cursor */
    z-index: 1000;
    outline: none; /* Remove focus outline */
  }
}

.bookdiv123 {
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  /* min-height: 15vh; */
  background-color: rgba(255, 255, 255, 0.863);
  border-radius: 1.8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4vh;
  opacity: 0.8;
}
@media screen and (max-width: 450px) {
  .offer {
    text-wrap: wrap;
  }
}
.img1 {
  flex: 0 0 22%;
  display: flex;
  height: 12vh;
  justify-content: center;
  align-items: center;
}

.img {
  width: 100%;
  height: 100%;
  border-radius: 1.8vh;
}

.text {
  text-align: left;
  margin-left: 1vh;
  margin-right: 1vh;
  flex-grow: 1;
  line-height:normal;
}

.hotelname {
  margin-top: 0;
  margin-bottom: 0;
  color: black;
  font-weight: bolder;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  font-size: 2.2vh;
  margin-bottom: 0em !important;
}

.offer {
  color: black;
  margin: 2px 0;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  font-size: 1.8vh;
}

.view-more {
  font-size: 1.6vh;
  color: rgb(114, 94, 205);
  cursor: pointer;
}

.offerprice {
  color: black;
  margin: 4px 0;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  font-size: 2vh !important;
  line-height: normal;
}

.divbtn {
  display: flex;
  align-items: center;
}

.bookbtn {
  background-color: rgb(114, 94, 205);
  color: white;
  border: none;
  border-radius: 0.5vh;
  text-decoration: none;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 2.2vh;
  text-align: center;
  padding: 1.3vh 2.5vh;
}


`}),v.jsx(Dv,{videos:e,campaigns:n,loading:i})]})},$v=()=>v.jsx("div",{className:"inner not-played skeleton-container",children:v.jsx("p",{className:"txt2-123"})}),Gv=({campaigns:e,loading:t})=>{const n=k.useRef(null),[r,i]=k.useState(!1),[o,s]=k.useState(null),[l,a]=k.useState(0),[u,d]=k.useState(!1),[p,h]=k.useState(0),[g,y]=k.useState({}),[x,b]=k.useState(!1);k.useEffect(()=>{const P=n.current,N=()=>{b(P.paused),P.paused&&P.play()};return P&&(P.addEventListener("play",N),P.addEventListener("pause",N)),()=>{P&&(P.removeEventListener("play",N),P.removeEventListener("pause",N))}},[o,l,e]),k.useEffect(()=>{if(o!==null&&e[o]){const P=e[o];if(l<P.videoId.length){const N=P.videoId[l];n.current.src=N,n.current.play(),h(0),b(!1)}}},[o,l,e]),k.useEffect(()=>{const P=setInterval(()=>{n.current&&h(n.current.currentTime/n.current.duration*100)},100);return()=>clearInterval(P)},[l,o]),k.useEffect(()=>{n.current&&(n.current.muted=u)},[u]);const c=P=>{s(P),a(0)},f=()=>{if(y(P=>({...P,[`${o}-${l}`]:!0})),h(100),o!==null&&e[o]){const P=e[o];l+1<P.videoId.length?a(l+1):o+1<e.length?(s(o+1),a(0)):(s(null),a(0))}},m=()=>{o!==null?o+1<e.length?(s(o+1),a(0)):(s(0),a(0)):e.length>0&&(s(0),a(0))},w=()=>{o!==null?o>0?(s(o-1),a(0)):(s(e.length-1),a(0)):e.length>0&&(s(e.length-1),a(0))},S=()=>{o!==null&&e[o]&&l+1<e[o].videoId.length&&(y(P=>({...P,[`${o}-${l}`]:!0})),a(l+1))},T=()=>{o!==null&&e[o]&&l>0&&a(l-1)},z=()=>{d(P=>!P)},A=()=>{s(null),a(0),b(!1),d(!1)},I=P=>{const N=P.currentTarget.getBoundingClientRect(),V=P.clientX-N.left,$=N.width;V<$/2?T():S()},C=()=>{i(!r)},j=P=>{const N=P.split(`
`);return N.length>2?{truncated:N.slice(0,2).join(`
`),hasMore:!0}:{truncated:P,hasMore:!1}};return t?v.jsx("div",{className:"storiesHeader ",children:v.jsx("div",{className:"outer ",children:Array.from({length:5}).map((P,N)=>v.jsx($v,{},N))})}):v.jsx(v.Fragment,{children:v.jsxs("div",{className:"storiesHeader",children:[v.jsx("div",{className:"outer",children:e.map((P,N)=>v.jsx("div",{onClick:()=>c(N),className:`inner ${o===N?"active":""} ${P.videoId.some((V,$)=>g[`${N}-${$}`])?"played":"not-played"}`,children:v.jsx("img",{src:P.campaignPhoto,alt:"Campaign",className:"campaign-photo"})},N))}),v.jsxs("div",{className:`topp ${o!==null?"active":""}`,children:[v.jsx("div",{className:"next",onClick:m,children:v.jsx(Y,{icon:ii})}),v.jsx("div",{className:"previous",onClick:w,children:v.jsx(Y,{icon:oi})}),v.jsx("div",{className:"outer-box",children:o!==null&&v.jsxs("div",{className:"boxed-video",children:[v.jsx("div",{className:"mute-unmute",onClick:z,children:u?v.jsx(Y,{icon:nr}):v.jsx(Y,{icon:tr})}),v.jsx("div",{className:"close-button",onClick:A,children:v.jsx(Y,{className:"close",icon:rr})}),v.jsx("div",{className:"progress-bar",children:e[o].videoId.map((P,N)=>v.jsx("div",{className:"progress",children:v.jsx("div",{className:"progress1",style:{width:`${N===l?p:g[`${o}-${N}`]?100:0}%`}})},N))}),v.jsx("video",{className:"boxed-video",ref:n,onClick:I,onEnded:f,autoPlay:!0,children:"Your browser does not support the video tag."}),v.jsxs("div",{className:"bookdiv",children:[v.jsx("div",{className:"img1",children:v.jsx("img",{className:"img",src:e[o].campaignPhoto,alt:"Campaign"})}),v.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[v.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[o].campaignName}),v.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[r?e[o].campaignDetails:j(e[o].campaignDetails).truncated,j(e[o].campaignDetails).hasMore&&v.jsx("div",{children:v.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:C,children:r?" View Less":" View More"})})]}),v.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[o].offerPrice.currency,e[o].offerPrice.price]})]}),v.jsx("div",{className:"divbtn",children:v.jsx("a",{href:e[o].hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]})})]})]})})};function Uv(){k.useState([]);const[e,t]=k.useState([]);k.useState("");const[n,r]=k.useState(!0);return k.useEffect(()=>{const o=document.getElementById("root-stories").dataset.campaignId;o?(async l=>{try{const u=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${l}`)).json();t(u.campaigns)}catch(a){console.error("Error fetching data:",a)}})(o):console.log("no campaign id found!")},[]),k.useEffect(()=>{e.length>0&&r(!1)},[e]),v.jsxs("div",{className:"App1",children:[v.jsx("style",{children:`
                
               .skeleton-container {
     background: #e9e9e9;

}
      .root1 {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  line-height: normal;
}
:root {
  line-height: normal;
  --main-color: #8e44ad;
  /* --main-color: #ff9933; */
  --red: #e74c3c;
  --orange: #f39c12;
  --white: #fff;
  --black: #2c3e50;
  --light-color: #888;
  --light-bg: #eee;
  --border: 0.1rem solid rgba(0, 0, 0, 0.2);
}
/* Global reset for line-height */
body, p, h1, h2, h3, h4, h5, h6 {
  line-height: normal;
}
*, :after, :before {
    box-sizing: border-box !important;
}

.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  font-size:16px !important;
  opacity:1 !important;

}

/* stories heading section starts  */
.storiesHeader{
overflow: scroll;
    display: flex;
    width: 100%;
    margin: 0;
    justify-content: center;
    }
.outer {
  display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    overflow-x: scroll;
    padding: 1rem;
    border-radius: 1rem;
    scroll-behavior: smooth;
    cursor: pointer;
    /* width: 100%; */
   
}

.inner {
 height: 9rem;
    width: 9rem;
    background-color: rgb(255, 251, 240);
    font-size: 2rem;
    color: black;
    margin: .8rem;
    display: flex;
    /* border: 6px solid red; */
    padding: 2px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
}

.outer::-webkit-scrollbar {
  display: none;
}

.storiesHeader::-webkit-scrollbar {
  display: none;
}



/* Hide scrollbar for IE, Edge, and Firefox */
.outer {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.storiesHeader {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.inner video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure video covers the entire circular area */
  border-radius: 50%; /* Maintain circular shape */
}

.inner img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  border-radius: 50%;
}
.topp {
  height: 100%;
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.178); */
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 16px !important;
  display: none;
  background: rgb(62, 61, 61);;
}

/* .outer-box {
  height: 40rem;
  width: 51rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
} */

.close-button {
   position: absolute;
    position: absolute;
    top: 2%;
    right: 1%;
    /* transform: translate(-50%, -50%); */
    cursor: pointer;
    z-index: 10;
    /* background: rgba(255, 255, 255, 0.2); */
    padding: 2rem;
    font-size: 0.5rem;
    border-radius: 50%;
    /* transform: translateY(-50%); */
    font-size: 5vh;
    padding: 0.5rem 1rem;
    /* background-color: rgb(0 0 0 / 2%); */
    color: white;
    border-radius: 0.5rem;
    cursor: pointer;
}
    .play-pause {
 position: absolute;
    // top: 40%;
    // right: 44%;
    cursor: pointer;
    z-index: 10;
    font-size: 7vh;
    background-color: rgb(255 255 255 / 0%);
    color: white;
    border-radius: 50%;
    height: 12vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items:center;
display: none;

}
// .topp:hover .play-pause{
// display:block;
// }
/* Other styles you may have */

.active {
  display: flex;
  justify-content: center;
  align-items: center;
}
.outer-box {
     height: 100vh;
    width: 56vh; //31em;
    /* background-color: white; */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px !important;
}


.boxed-video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure video covers the entire box */
}

.next,
.previous {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 5.5vh;
  padding: 0.5rem 1rem;
  /* background-color: rgb(0 0 0 / 2%); */
  color: white;
  border-radius: 0.5rem;
  cursor: pointer;
  z-index:10;
  /* background: rgba(255, 255, 255, 0.2); */
}

.next {
  right: .2em;
}

.previous {
  left: .2em;
}

.mute-unmute {
      position: absolute;
    top: 60%;
    right: 1%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 10;
    /* background: rgba(255, 255, 255, 0.2); */
    padding: 2rem;
    // font-size: 0.em;
    border-radius: 50%;
    transform: translateY(-50%);
    font-size: 3.5vh;
    padding: 0.5rem 1rem;
    /* background-color: rgb(0 0 0 / 2%); */
    color: white;
    border-radius: 0.5rem;
    cursor: pointer;
    /* background: rgba(255, 255, 255, 0.2); */
}


.progress-bar {
display: flex;
    align-items: center;
    width: 99%;
    padding: 0px 0px;
    height: 0.5vh;
    top: 3%;
    /* margin-left: 10px; */
    /* margin-right: 26px; */
    position: relative;
    margin-top: 0px;
}

.progress {
  flex: 1;
    height: 100%;
    background-color: #1513133d;
    transition: 0.1s;
    margin-right: 2px;
    margin:.3rem
}
.progress1{
  height: 100%;
  background-color: white;
  transition: 0.1s;
  margin-right: 2px; /
}
 .bookdiv {
 position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    min-height: 15vh;
    background-color: rgba(255, 255, 255, 0.863);
    border-radius: 1.8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.4vh;
    opacity: 0.8;
}


.img1 {
 flex: 0 0 22%;
    display: flex;
    height: 12vh;
    justify-content: center;
    align-items: center;
}

.img {
     width: 100%;
    height: 100%;
    border-radius: 1.8vh;
}

.text {
     text-align: left;
    margin-left: 1vh;
    margin-right: 1vh;
    flex-grow: 1;

}

.hotelname {
  margin-top: 0;
  margin-bottom: 0;
  color: black;
  font-weight: bolder;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  font-size: 2.2vh;
  margin-bottom: 0em !important;
}

.offer {
  color: black;
  margin: 2px 0;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  font-size: 1.8vh;
}

.view-more {
  font-size: 1.6vh;
  color: rgb(114, 94, 205);
  cursor: pointer;
}

.offerprice {
  color: black;
  margin: 4px 0;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  font-size: 2vh !important;
  line-height:normal;
}

.divbtn {
  display: flex;
  align-items: center;
}

.bookbtn {
background-color: rgb(114, 94, 205);
    color: white;
    border: none;
    border-radius: .5vh;
    text-decoration: none;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 2.2vh;
    text-align: center;
    padding: 1.3vh 2.5vh;
}


/* Add this to your App.css */
.inner.not-played {
  border: 3px solid #ff7e5f; /* Example gradient border for not played */
}

.inner.played {
  border: 3px solid #ccc; /* Example solid border for played */
}

/* .inner.played {
  border-color: green; /* Change this to your desired color */
/* } */ */

.boxed-video-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

/* media query 
 */


/* Add this media query at the end of your CSS */
@media screen and (max-width: 800px) {
  /* // @media (max-width: 800px) { */
      .outer {
        padding: 0.5rem;
        overflow-x: auto;
      }

      .inner {
        // height: 6rem;
        // width: 6rem;
        font-size: 1.5rem;
        margin: 0.5rem;
      }


      // .close-button {
      //   font-size: 2rem;
      //   top: 1rem;
      //   right: 1rem;
      //   padding: 0.3rem 0.6rem;
      // }

      .next,
      .previous {
        // font-size: 2.5em;
        // padding: 0.3rem 0.6rem;
        // top: 45%;
        z-index: 20;
      }

      .progress-bar {
        width: 100%;
      }
    }
@media screen and (max-width: 450px) {
    /* // @media (max-width: 400px) { */
      .text {
        right: -13vh;
       // margin-left: 5em;
        //margin-right: -3vh; //-.2em;
        // text-wrap:wrap;
      }
        .offer{
        text-wrap:wrap;}
    }`}),v.jsx(Gv,{campaigns:e,loading:n})]})}function Rc(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Ja(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:Rc(t[n])&&Rc(e[n])&&Object.keys(t[n]).length>0&&Ja(e[n],t[n])})}const $p={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function or(){const e=typeof document<"u"?document:{};return Ja(e,$p),e}const Hv={document:$p,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Ve(){const e=typeof window<"u"?window:{};return Ja(e,Hv),e}function Wv(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function Yv(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Gl(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function yo(){return Date.now()}function Xv(e){const t=Ve();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function Qv(e,t){t===void 0&&(t="x");const n=Ve();let r,i,o;const s=Xv(e);return n.WebKitCSSMatrix?(i=s.transform||s.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Ti(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Kv(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ie(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!Kv(r)){const i=Object.keys(Object(r)).filter(o=>t.indexOf(o)<0);for(let o=0,s=i.length;o<s;o+=1){const l=i[o],a=Object.getOwnPropertyDescriptor(r,l);a!==void 0&&a.enumerable&&(Ti(e[l])&&Ti(r[l])?r[l].__swiper__?e[l]=r[l]:Ie(e[l],r[l]):!Ti(e[l])&&Ti(r[l])?(e[l]={},r[l].__swiper__?e[l]=r[l]:Ie(e[l],r[l])):e[l]=r[l])}}}return e}function Pi(e,t,n){e.style.setProperty(t,n)}function Gp(e){let{swiper:t,targetPosition:n,side:r}=e;const i=Ve(),o=-t.translate;let s=null,l;const a=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const u=n>o?"next":"prev",d=(h,g)=>u==="next"&&h>=g||u==="prev"&&h<=g,p=()=>{l=new Date().getTime(),s===null&&(s=l);const h=Math.max(Math.min((l-s)/a,1),0),g=.5-Math.cos(h*Math.PI)/2;let y=o+g*(n-o);if(d(y,n)&&(y=n),t.wrapperEl.scrollTo({[r]:y}),d(y,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:y})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(p)};p()}function eu(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function lt(e,t){return t===void 0&&(t=""),[...e.children].filter(n=>n.matches(t))}function wo(e){try{console.warn(e);return}catch{}}function Zr(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:Wv(t)),n}function qv(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Zv(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Lt(e,t){return Ve().getComputedStyle(e,null).getPropertyValue(t)}function xo(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Up(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Ul(e,t,n){const r=Ve();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function de(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Hp(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=lt(e.el,`.${r[i]}`)[0];o||(o=Zr("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}function Jv(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function o(y){let x;return y&&typeof y=="string"&&t.isElement&&(x=t.el.querySelector(y),x)?x:(y&&(typeof y=="string"&&(x=[...document.querySelectorAll(y)]),t.params.uniqueNavElements&&typeof y=="string"&&x&&x.length>1&&t.el.querySelectorAll(y).length===1?x=t.el.querySelector(y):x&&x.length===1&&(x=x[0])),y&&!x?y:x)}function s(y,x){const b=t.params.navigation;y=de(y),y.forEach(c=>{c&&(c.classList[x?"add":"remove"](...b.disabledClass.split(" ")),c.tagName==="BUTTON"&&(c.disabled=x),t.params.watchOverflow&&t.enabled&&c.classList[t.isLocked?"add":"remove"](b.lockClass))})}function l(){const{nextEl:y,prevEl:x}=t.navigation;if(t.params.loop){s(x,!1),s(y,!1);return}s(x,t.isBeginning&&!t.params.rewind),s(y,t.isEnd&&!t.params.rewind)}function a(y){y.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function u(y){y.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function d(){const y=t.params.navigation;if(t.params.navigation=Hp(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(y.nextEl||y.prevEl))return;let x=o(y.nextEl),b=o(y.prevEl);Object.assign(t.navigation,{nextEl:x,prevEl:b}),x=de(x),b=de(b);const c=(f,m)=>{f&&f.addEventListener("click",m==="next"?u:a),!t.enabled&&f&&f.classList.add(...y.lockClass.split(" "))};x.forEach(f=>c(f,"next")),b.forEach(f=>c(f,"prev"))}function p(){let{nextEl:y,prevEl:x}=t.navigation;y=de(y),x=de(x);const b=(c,f)=>{c.removeEventListener("click",f==="next"?u:a),c.classList.remove(...t.params.navigation.disabledClass.split(" "))};y.forEach(c=>b(c,"next")),x.forEach(c=>b(c,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?g():(d(),l())}),r("toEdge fromEdge lock unlock",()=>{l()}),r("destroy",()=>{p()}),r("enable disable",()=>{let{nextEl:y,prevEl:x}=t.navigation;if(y=de(y),x=de(x),t.enabled){l();return}[...y,...x].filter(b=>!!b).forEach(b=>b.classList.add(t.params.navigation.lockClass))}),r("click",(y,x)=>{let{nextEl:b,prevEl:c}=t.navigation;b=de(b),c=de(c);const f=x.target;let m=c.includes(f)||b.includes(f);if(t.isElement&&!m){const w=x.path||x.composedPath&&x.composedPath();w&&(m=w.find(S=>b.includes(S)||c.includes(S)))}if(t.params.navigation.hideOnClick&&!m){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===f||t.pagination.el.contains(f)))return;let w;b.length?w=b[0].classList.contains(t.params.navigation.hiddenClass):c.length&&(w=c[0].classList.contains(t.params.navigation.hiddenClass)),i(w===!0?"navigationShow":"navigationHide"),[...b,...c].filter(S=>!!S).forEach(S=>S.classList.toggle(t.params.navigation.hiddenClass))}});const h=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),d(),l()},g=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(t.navigation,{enable:h,disable:g,update:l,init:d,destroy:p})}function mr(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function e1(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:c=>c,formatFractionTotal:c=>c,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),t.pagination={el:null,bullets:[]};let s,l=0;function a(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function u(c,f){const{bulletActiveClass:m}=t.params.pagination;c&&(c=c[`${f==="prev"?"previous":"next"}ElementSibling`],c&&(c.classList.add(`${m}-${f}`),c=c[`${f==="prev"?"previous":"next"}ElementSibling`],c&&c.classList.add(`${m}-${f}-${f}`)))}function d(c){const f=c.target.closest(mr(t.params.pagination.bulletClass));if(!f)return;c.preventDefault();const m=xo(f)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===m)return;t.slideToLoop(m)}else t.slideTo(m)}function p(){const c=t.rtl,f=t.params.pagination;if(a())return;let m=t.pagination.el;m=de(m);let w,S;const T=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,z=t.params.loop?Math.ceil(T/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(S=t.previousRealIndex||0,w=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(w=t.snapIndex,S=t.previousSnapIndex):(S=t.previousIndex||0,w=t.activeIndex||0),f.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const A=t.pagination.bullets;let I,C,j;if(f.dynamicBullets&&(s=Ul(A[0],t.isHorizontal()?"width":"height"),m.forEach(P=>{P.style[t.isHorizontal()?"width":"height"]=`${s*(f.dynamicMainBullets+4)}px`}),f.dynamicMainBullets>1&&S!==void 0&&(l+=w-(S||0),l>f.dynamicMainBullets-1?l=f.dynamicMainBullets-1:l<0&&(l=0)),I=Math.max(w-l,0),C=I+(Math.min(A.length,f.dynamicMainBullets)-1),j=(C+I)/2),A.forEach(P=>{const N=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(V=>`${f.bulletActiveClass}${V}`)].map(V=>typeof V=="string"&&V.includes(" ")?V.split(" "):V).flat();P.classList.remove(...N)}),m.length>1)A.forEach(P=>{const N=xo(P);N===w?P.classList.add(...f.bulletActiveClass.split(" ")):t.isElement&&P.setAttribute("part","bullet"),f.dynamicBullets&&(N>=I&&N<=C&&P.classList.add(...`${f.bulletActiveClass}-main`.split(" ")),N===I&&u(P,"prev"),N===C&&u(P,"next"))});else{const P=A[w];if(P&&P.classList.add(...f.bulletActiveClass.split(" ")),t.isElement&&A.forEach((N,V)=>{N.setAttribute("part",V===w?"bullet-active":"bullet")}),f.dynamicBullets){const N=A[I],V=A[C];for(let $=I;$<=C;$+=1)A[$]&&A[$].classList.add(...`${f.bulletActiveClass}-main`.split(" "));u(N,"prev"),u(V,"next")}}if(f.dynamicBullets){const P=Math.min(A.length,f.dynamicMainBullets+4),N=(s*P-s)/2-j*s,V=c?"right":"left";A.forEach($=>{$.style[t.isHorizontal()?V:"top"]=`${N}px`})}}m.forEach((A,I)=>{if(f.type==="fraction"&&(A.querySelectorAll(mr(f.currentClass)).forEach(C=>{C.textContent=f.formatFractionCurrent(w+1)}),A.querySelectorAll(mr(f.totalClass)).forEach(C=>{C.textContent=f.formatFractionTotal(z)})),f.type==="progressbar"){let C;f.progressbarOpposite?C=t.isHorizontal()?"vertical":"horizontal":C=t.isHorizontal()?"horizontal":"vertical";const j=(w+1)/z;let P=1,N=1;C==="horizontal"?P=j:N=j,A.querySelectorAll(mr(f.progressbarFillClass)).forEach(V=>{V.style.transform=`translate3d(0,0,0) scaleX(${P}) scaleY(${N})`,V.style.transitionDuration=`${t.params.speed}ms`})}f.type==="custom"&&f.renderCustom?(A.innerHTML=f.renderCustom(t,w+1,z),I===0&&i("paginationRender",A)):(I===0&&i("paginationRender",A),i("paginationUpdate",A)),t.params.watchOverflow&&t.enabled&&A.classList[t.isLocked?"add":"remove"](f.lockClass)})}function h(){const c=t.params.pagination;if(a())return;const f=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let m=t.pagination.el;m=de(m);let w="";if(c.type==="bullets"){let S=t.params.loop?Math.ceil(f/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&S>f&&(S=f);for(let T=0;T<S;T+=1)c.renderBullet?w+=c.renderBullet.call(t,T,c.bulletClass):w+=`<${c.bulletElement} ${t.isElement?'part="bullet"':""} class="${c.bulletClass}"></${c.bulletElement}>`}c.type==="fraction"&&(c.renderFraction?w=c.renderFraction.call(t,c.currentClass,c.totalClass):w=`<span class="${c.currentClass}"></span> / <span class="${c.totalClass}"></span>`),c.type==="progressbar"&&(c.renderProgressbar?w=c.renderProgressbar.call(t,c.progressbarFillClass):w=`<span class="${c.progressbarFillClass}"></span>`),t.pagination.bullets=[],m.forEach(S=>{c.type!=="custom"&&(S.innerHTML=w||""),c.type==="bullets"&&t.pagination.bullets.push(...S.querySelectorAll(mr(c.bulletClass)))}),c.type!=="custom"&&i("paginationRender",m[0])}function g(){t.params.pagination=Hp(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const c=t.params.pagination;if(!c.el)return;let f;typeof c.el=="string"&&t.isElement&&(f=t.el.querySelector(c.el)),!f&&typeof c.el=="string"&&(f=[...document.querySelectorAll(c.el)]),f||(f=c.el),!(!f||f.length===0)&&(t.params.uniqueNavElements&&typeof c.el=="string"&&Array.isArray(f)&&f.length>1&&(f=[...t.el.querySelectorAll(c.el)],f.length>1&&(f=f.filter(m=>Up(m,".swiper")[0]===t.el)[0])),Array.isArray(f)&&f.length===1&&(f=f[0]),Object.assign(t.pagination,{el:f}),f=de(f),f.forEach(m=>{c.type==="bullets"&&c.clickable&&m.classList.add(...(c.clickableClass||"").split(" ")),m.classList.add(c.modifierClass+c.type),m.classList.add(t.isHorizontal()?c.horizontalClass:c.verticalClass),c.type==="bullets"&&c.dynamicBullets&&(m.classList.add(`${c.modifierClass}${c.type}-dynamic`),l=0,c.dynamicMainBullets<1&&(c.dynamicMainBullets=1)),c.type==="progressbar"&&c.progressbarOpposite&&m.classList.add(c.progressbarOppositeClass),c.clickable&&m.addEventListener("click",d),t.enabled||m.classList.add(c.lockClass)}))}function y(){const c=t.params.pagination;if(a())return;let f=t.pagination.el;f&&(f=de(f),f.forEach(m=>{m.classList.remove(c.hiddenClass),m.classList.remove(c.modifierClass+c.type),m.classList.remove(t.isHorizontal()?c.horizontalClass:c.verticalClass),c.clickable&&(m.classList.remove(...(c.clickableClass||"").split(" ")),m.removeEventListener("click",d))})),t.pagination.bullets&&t.pagination.bullets.forEach(m=>m.classList.remove(...c.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const c=t.params.pagination;let{el:f}=t.pagination;f=de(f),f.forEach(m=>{m.classList.remove(c.horizontalClass,c.verticalClass),m.classList.add(t.isHorizontal()?c.horizontalClass:c.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?b():(g(),h(),p())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&p()}),r("snapIndexChange",()=>{p()}),r("snapGridLengthChange",()=>{h(),p()}),r("destroy",()=>{y()}),r("enable disable",()=>{let{el:c}=t.pagination;c&&(c=de(c),c.forEach(f=>f.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{p()}),r("click",(c,f)=>{const m=f.target,w=de(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&w&&w.length>0&&!m.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&m===t.navigation.nextEl||t.navigation.prevEl&&m===t.navigation.prevEl))return;const S=w[0].classList.contains(t.params.pagination.hiddenClass);i(S===!0?"paginationShow":"paginationHide"),w.forEach(T=>T.classList.toggle(t.params.pagination.hiddenClass))}});const x=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:c}=t.pagination;c&&(c=de(c),c.forEach(f=>f.classList.remove(t.params.pagination.paginationDisabledClass))),g(),h(),p()},b=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:c}=t.pagination;c&&(c=de(c),c.forEach(f=>f.classList.add(t.params.pagination.paginationDisabledClass))),y()};Object.assign(t.pagination,{enable:x,disable:b,render:h,update:p,init:g,destroy:y})}function t1(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:o,overwriteParams:s,perspective:l,recreateShadows:a,getEffectParams:u}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),l&&l()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const p=s?s():{};Object.assign(n.params,p),Object.assign(n.originalParams,p)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(p,h)=>{n.params.effect===t&&o(h)}),r("transitionEnd",()=>{if(n.params.effect===t&&a){if(!u||!u().slideShadows)return;n.slides.forEach(p=>{p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>h.remove())}),a()}});let d;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(d=!0),requestAnimationFrame(()=>{d&&n.slides&&n.slides.length&&(i(),d=!1)}))})}function n1(e,t){const n=eu(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function Dc(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,i=eu(t);let o=i.querySelector(`.${r.split(" ").join(".")}`);return o||(o=Zr("div",r.split(" ")),i.append(o)),o}function r1(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),t1({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:s,height:l,slides:a,slidesSizesGrid:u}=t,d=t.params.coverflowEffect,p=t.isHorizontal(),h=t.translate,g=p?-h+s/2:-h+l/2,y=p?d.rotate:-d.rotate,x=d.depth;for(let b=0,c=a.length;b<c;b+=1){const f=a[b],m=u[b],w=f.swiperSlideOffset,S=(g-w-m/2)/m,T=typeof d.modifier=="function"?d.modifier(S):S*d.modifier;let z=p?y*T:0,A=p?0:y*T,I=-x*Math.abs(T),C=d.stretch;typeof C=="string"&&C.indexOf("%")!==-1&&(C=parseFloat(d.stretch)/100*m);let j=p?0:C*T,P=p?C*T:0,N=1-(1-d.scale)*Math.abs(T);Math.abs(P)<.001&&(P=0),Math.abs(j)<.001&&(j=0),Math.abs(I)<.001&&(I=0),Math.abs(z)<.001&&(z=0),Math.abs(A)<.001&&(A=0),Math.abs(N)<.001&&(N=0),t.browser&&t.browser.need3dFix&&(Math.abs(z)/90%2===1&&(z+=.001),Math.abs(A)/90%2===1&&(A+=.001));const V=`translate3d(${P}px,${j}px,${I}px)  rotateX(${A}deg) rotateY(${z}deg) scale(${N})`,$=n1(d,f);if($.style.transform=V,f.style.zIndex=-Math.abs(Math.round(T))+1,d.slideShadows){let W=p?f.querySelector(".swiper-slide-shadow-left"):f.querySelector(".swiper-slide-shadow-top"),R=p?f.querySelector(".swiper-slide-shadow-right"):f.querySelector(".swiper-slide-shadow-bottom");W||(W=Dc("coverflow",f,p?"left":"top")),R||(R=Dc("coverflow",f,p?"right":"bottom")),W&&(W.style.opacity=T>0?T:0),R&&(R.style.opacity=-T>0?-T:0)}}},setTransition:s=>{t.slides.map(a=>eu(a)).forEach(a=>{a.style.transitionDuration=`${s}ms`,a.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u=>{u.style.transitionDuration=`${s}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}let bs;function i1(){const e=Ve(),t=or();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Wp(){return bs||(bs=i1()),bs}let Es;function o1(e){let{userAgent:t}=e===void 0?{}:e;const n=Wp(),r=Ve(),i=r.navigator.platform,o=t||r.navigator.userAgent,s={ios:!1,android:!1},l=r.screen.width,a=r.screen.height,u=o.match(/(Android);?[\s\/]+([\d.]+)?/);let d=o.match(/(iPad).*OS\s([\d_]+)/);const p=o.match(/(iPod)(.*OS\s([\d_]+))?/),h=!d&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=i==="Win32";let y=i==="MacIntel";const x=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&y&&n.touch&&x.indexOf(`${l}x${a}`)>=0&&(d=o.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),y=!1),u&&!g&&(s.os="android",s.android=!0),(d||h||p)&&(s.os="ios",s.ios=!0),s}function Yp(e){return e===void 0&&(e={}),Es||(Es=o1(e)),Es}let ks;function s1(){const e=Ve(),t=Yp();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[a,u]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=a<16||a===16&&u<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),s=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:s,isWebView:i}}function l1(){return ks||(ks=s1()),ks}function a1(e){let{swiper:t,on:n,emit:r}=e;const i=Ve();let o=null,s=null;const l=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},a=()=>{!t||t.destroyed||!t.initialized||(o=new ResizeObserver(p=>{s=i.requestAnimationFrame(()=>{const{width:h,height:g}=t;let y=h,x=g;p.forEach(b=>{let{contentBoxSize:c,contentRect:f,target:m}=b;m&&m!==t.el||(y=f?f.width:(c[0]||c).inlineSize,x=f?f.height:(c[0]||c).blockSize)}),(y!==h||x!==g)&&l()})}),o.observe(t.el))},u=()=>{s&&i.cancelAnimationFrame(s),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},d=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){a();return}i.addEventListener("resize",l),i.addEventListener("orientationchange",d)}),n("destroy",()=>{u(),i.removeEventListener("resize",l),i.removeEventListener("orientationchange",d)})}function u1(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o=[],s=Ve(),l=function(d,p){p===void 0&&(p={});const h=s.MutationObserver||s.WebkitMutationObserver,g=new h(y=>{if(t.__preventObserver__)return;if(y.length===1){i("observerUpdate",y[0]);return}const x=function(){i("observerUpdate",y[0])};s.requestAnimationFrame?s.requestAnimationFrame(x):s.setTimeout(x,0)});g.observe(d,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:typeof p.childList>"u"?!0:p.childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),o.push(g)},a=()=>{if(t.params.observer){if(t.params.observeParents){const d=Up(t.hostEl);for(let p=0;p<d.length;p+=1)l(d[p])}l(t.hostEl,{childList:t.params.observeSlideChildren}),l(t.wrapperEl,{attributes:!1})}},u=()=>{o.forEach(d=>{d.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",a),r("destroy",u)}var c1={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];t.apply(r,s)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return typeof o[0]=="string"||Array.isArray(o[0])?(t=o[0],n=o.slice(1,o.length),r=e):(t=o[0].events,n=o[0].data,r=o[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(a=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(u=>{u.apply(r,[a,...n])}),e.eventsListeners&&e.eventsListeners[a]&&e.eventsListeners[a].forEach(u=>{u.apply(r,n)})}),e}};function d1(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Lt(r,"padding-left")||0,10)-parseInt(Lt(r,"padding-right")||0,10),n=n-parseInt(Lt(r,"padding-top")||0,10)-parseInt(Lt(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function f1(){const e=this;function t(C,j){return parseFloat(C.getPropertyValue(e.getDirectionLabel(j))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:o,rtlTranslate:s,wrongRTL:l}=e,a=e.virtual&&n.virtual.enabled,u=a?e.virtual.slides.length:e.slides.length,d=lt(i,`.${e.params.slideClass}, swiper-slide`),p=a?e.virtual.slides.length:d.length;let h=[];const g=[],y=[];let x=n.slidesOffsetBefore;typeof x=="function"&&(x=n.slidesOffsetBefore.call(e));let b=n.slidesOffsetAfter;typeof b=="function"&&(b=n.slidesOffsetAfter.call(e));const c=e.snapGrid.length,f=e.slidesGrid.length;let m=n.spaceBetween,w=-x,S=0,T=0;if(typeof o>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*o:typeof m=="string"&&(m=parseFloat(m)),e.virtualSize=-m,d.forEach(C=>{s?C.style.marginLeft="":C.style.marginRight="",C.style.marginBottom="",C.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Pi(r,"--swiper-centered-offset-before",""),Pi(r,"--swiper-centered-offset-after",""));const z=n.grid&&n.grid.rows>1&&e.grid;z?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let A;const I=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(C=>typeof n.breakpoints[C].slidesPerView<"u").length>0;for(let C=0;C<p;C+=1){A=0;let j;if(d[C]&&(j=d[C]),z&&e.grid.updateSlide(C,j,d),!(d[C]&&Lt(j,"display")==="none")){if(n.slidesPerView==="auto"){I&&(d[C].style[e.getDirectionLabel("width")]="");const P=getComputedStyle(j),N=j.style.transform,V=j.style.webkitTransform;if(N&&(j.style.transform="none"),V&&(j.style.webkitTransform="none"),n.roundLengths)A=e.isHorizontal()?Ul(j,"width"):Ul(j,"height");else{const $=t(P,"width"),W=t(P,"padding-left"),R=t(P,"padding-right"),E=t(P,"margin-left"),L=t(P,"margin-right"),B=P.getPropertyValue("box-sizing");if(B&&B==="border-box")A=$+E+L;else{const{clientWidth:_,offsetWidth:O}=j;A=$+W+R+E+L+(O-_)}}N&&(j.style.transform=N),V&&(j.style.webkitTransform=V),n.roundLengths&&(A=Math.floor(A))}else A=(o-(n.slidesPerView-1)*m)/n.slidesPerView,n.roundLengths&&(A=Math.floor(A)),d[C]&&(d[C].style[e.getDirectionLabel("width")]=`${A}px`);d[C]&&(d[C].swiperSlideSize=A),y.push(A),n.centeredSlides?(w=w+A/2+S/2+m,S===0&&C!==0&&(w=w-o/2-m),C===0&&(w=w-o/2-m),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),T%n.slidesPerGroup===0&&h.push(w),g.push(w)):(n.roundLengths&&(w=Math.floor(w)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&h.push(w),g.push(w),w=w+A+m),e.virtualSize+=A+m,S=A,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+b,s&&l&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+m}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),z&&e.grid.updateWrapperSize(A,h),!n.centeredSlides){const C=[];for(let j=0;j<h.length;j+=1){let P=h[j];n.roundLengths&&(P=Math.floor(P)),h[j]<=e.virtualSize-o&&C.push(P)}h=C,Math.floor(e.virtualSize-o)-Math.floor(h[h.length-1])>1&&h.push(e.virtualSize-o)}if(a&&n.loop){const C=y[0]+m;if(n.slidesPerGroup>1){const j=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),P=C*n.slidesPerGroup;for(let N=0;N<j;N+=1)h.push(h[h.length-1]+P)}for(let j=0;j<e.virtual.slidesBefore+e.virtual.slidesAfter;j+=1)n.slidesPerGroup===1&&h.push(h[h.length-1]+C),g.push(g[g.length-1]+C),e.virtualSize+=C}if(h.length===0&&(h=[0]),m!==0){const C=e.isHorizontal()&&s?"marginLeft":e.getDirectionLabel("marginRight");d.filter((j,P)=>!n.cssMode||n.loop?!0:P!==d.length-1).forEach(j=>{j.style[C]=`${m}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let C=0;y.forEach(P=>{C+=P+(m||0)}),C-=m;const j=C-o;h=h.map(P=>P<=0?-x:P>j?j+b:P)}if(n.centerInsufficientSlides){let C=0;y.forEach(P=>{C+=P+(m||0)}),C-=m;const j=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(C+j<o){const P=(o-C-j)/2;h.forEach((N,V)=>{h[V]=N-P}),g.forEach((N,V)=>{g[V]=N+P})}}if(Object.assign(e,{slides:d,snapGrid:h,slidesGrid:g,slidesSizesGrid:y}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Pi(r,"--swiper-centered-offset-before",`${-h[0]}px`),Pi(r,"--swiper-centered-offset-after",`${e.size/2-y[y.length-1]/2}px`);const C=-e.snapGrid[0],j=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(P=>P+C),e.slidesGrid=e.slidesGrid.map(P=>P+j)}if(p!==u&&e.emit("slidesLengthChange"),h.length!==c&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==f&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!a&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const C=`${n.containerModifierClass}backface-hidden`,j=e.el.classList.contains(C);p<=n.maxBackfaceHiddenSlides?j||e.el.classList.add(C):j&&e.el.classList.remove(C)}}function p1(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const s=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(s(l))}else n.push(s(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function m1(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Vc=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function h1(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let s=-e;i&&(s=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let a=0;a<r.length;a+=1){const u=r[a];let d=u.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const p=(s+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+l),h=(s-o[0]+(n.centeredSlides?t.minTranslate():0)-d)/(u.swiperSlideSize+l),g=-(s-d),y=g+t.slidesSizesGrid[a],x=g>=0&&g<=t.size-t.slidesSizesGrid[a],b=g>=0&&g<t.size-1||y>1&&y<=t.size||g<=0&&y>=t.size;b&&(t.visibleSlides.push(u),t.visibleSlidesIndexes.push(a)),Vc(u,b,n.slideVisibleClass),Vc(u,x,n.slideFullyVisibleClass),u.progress=i?-p:p,u.originalProgress=i?-h:h}}function g1(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:s,progressLoop:l}=t;const a=o,u=s;if(r===0)i=0,o=!0,s=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,p=Math.abs(e-t.maxTranslate())<1;o=d||i<=0,s=p||i>=1,d&&(i=0),p&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),p=t.getSlideIndexByData(t.slides.length-1),h=t.slidesGrid[d],g=t.slidesGrid[p],y=t.slidesGrid[t.slidesGrid.length-1],x=Math.abs(e);x>=h?l=(x-h)/y:l=(x+y-g)/y,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:s}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!a&&t.emit("reachBeginning toEdge"),s&&!u&&t.emit("reachEnd toEdge"),(a&&!o||u&&!s)&&t.emit("fromEdge"),t.emit("progress",i)}const Cs=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function v1(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,s=e.grid&&n.grid&&n.grid.rows>1,l=p=>lt(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];let a,u,d;if(o)if(n.loop){let p=i-e.virtual.slidesBefore;p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),a=l(`[data-swiper-slide-index="${p}"]`)}else a=l(`[data-swiper-slide-index="${i}"]`);else s?(a=t.filter(p=>p.column===i)[0],d=t.filter(p=>p.column===i+1)[0],u=t.filter(p=>p.column===i-1)[0]):a=t[i];a&&(s||(d=Zv(a,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),u=qv(a,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u===0&&(u=t[t.length-1]))),t.forEach(p=>{Cs(p,p===a,n.slideActiveClass),Cs(p,p===d,n.slideNextClass),Cs(p,p===u,n.slidePrevClass)}),e.emitSlidesClasses()}const Gi=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},As=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Hl=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const s=i,l=[s-t];l.push(...Array.from({length:t}).map((a,u)=>s+r+u)),e.slides.forEach((a,u)=>{l.includes(a.column)&&As(e,u)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let s=i-t;s<=o+t;s+=1){const l=(s%n+n)%n;(l<i||l>o)&&As(e,l)}else for(let s=Math.max(i-t,0);s<=Math.min(o+t,n-1);s+=1)s!==i&&(s>o||s<i)&&As(e,s)};function y1(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function w1(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:s,snapIndex:l}=t;let a=e,u;const d=g=>{let y=g-t.virtual.slidesBefore;return y<0&&(y=t.virtual.slides.length+y),y>=t.virtual.slides.length&&(y-=t.virtual.slides.length),y};if(typeof a>"u"&&(a=y1(t)),r.indexOf(n)>=0)u=r.indexOf(n);else{const g=Math.min(i.slidesPerGroupSkip,a);u=g+Math.floor((a-g)/i.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),a===o&&!t.params.loop){u!==l&&(t.snapIndex=u,t.emit("snapIndexChange"));return}if(a===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(a);return}const p=t.grid&&i.grid&&i.grid.rows>1;let h;if(t.virtual&&i.virtual.enabled&&i.loop)h=d(a);else if(p){const g=t.slides.filter(x=>x.column===a)[0];let y=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(y)&&(y=Math.max(t.slides.indexOf(g),0)),h=Math.floor(y/i.grid.rows)}else if(t.slides[a]){const g=t.slides[a].getAttribute("data-swiper-slide-index");g?h=parseInt(g,10):h=a}else h=a;Object.assign(t,{previousSnapIndex:l,snapIndex:u,previousRealIndex:s,realIndex:h,previousIndex:o,activeIndex:a}),t.initialized&&Hl(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(s!==h&&t.emit("realIndexChange"),t.emit("slideChange"))}function x1(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,s;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,s=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=s;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var S1={updateSize:d1,updateSlides:f1,updateAutoHeight:p1,updateSlidesOffset:m1,updateSlidesProgress:h1,updateProgress:g1,updateSlidesClasses:v1,updateActiveIndex:w1,updateClickedSlide:x1};function b1(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let s=Qv(o,e);return s+=t.cssOverflowAdjustment(),r&&(s=-s),s||0}function E1(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:s}=n;let l=0,a=0;const u=0;n.isHorizontal()?l=r?-e:e:a=e,i.roundLengths&&(l=Math.floor(l),a=Math.floor(a)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:a,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-a:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():a-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${a}px, ${u}px)`);let d;const p=n.maxTranslate()-n.minTranslate();p===0?d=0:d=(e-n.minTranslate())/p,d!==s&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function k1(){return-this.snapGrid[0]}function C1(){return-this.snapGrid[this.snapGrid.length-1]}function A1(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const o=this,{params:s,wrapperEl:l}=o;if(o.animating&&s.preventInteractionOnTransition)return!1;const a=o.minTranslate(),u=o.maxTranslate();let d;if(r&&e>a?d=a:r&&e<u?d=u:d=e,o.updateProgress(d),s.cssMode){const p=o.isHorizontal();if(t===0)l[p?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return Gp({swiper:o,targetPosition:-d,side:p?"left":"top"}),!0;l.scrollTo({[p?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(h){!o||o.destroyed||h.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var T1={getTranslate:b1,setTranslate:E1,minTranslate:k1,maxTranslate:C1,translateTo:A1};function P1(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Xp(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:o,previousIndex:s}=t;let l=r;if(l||(o>s?l="next":o<s?l="prev":l="reset"),t.emit(`transition${i}`),n&&o!==s){if(l==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),l==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function N1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Xp({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function z1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Xp({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var I1={setTransition:P1,transitionStart:N1,transitionEnd:z1};function M1(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;let s=e;s<0&&(s=0);const{params:l,snapGrid:a,slidesGrid:u,previousIndex:d,activeIndex:p,rtlTranslate:h,wrapperEl:g,enabled:y}=o;if(!y&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const x=Math.min(o.params.slidesPerGroupSkip,s);let b=x+Math.floor((s-x)/o.params.slidesPerGroup);b>=a.length&&(b=a.length-1);const c=-a[b];if(l.normalizeSlideIndex)for(let m=0;m<u.length;m+=1){const w=-Math.floor(c*100),S=Math.floor(u[m]*100),T=Math.floor(u[m+1]*100);typeof u[m+1]<"u"?w>=S&&w<T-(T-S)/2?s=m:w>=S&&w<T&&(s=m+1):w>=S&&(s=m)}if(o.initialized&&s!==p&&(!o.allowSlideNext&&(h?c>o.translate&&c>o.minTranslate():c<o.translate&&c<o.minTranslate())||!o.allowSlidePrev&&c>o.translate&&c>o.maxTranslate()&&(p||0)!==s))return!1;s!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(c);let f;if(s>p?f="next":s<p?f="prev":f="reset",h&&-c===o.translate||!h&&c===o.translate)return o.updateActiveIndex(s),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(c),f!=="reset"&&(o.transitionStart(n,f),o.transitionEnd(n,f)),!1;if(l.cssMode){const m=o.isHorizontal(),w=h?c:-c;if(t===0){const S=o.virtual&&o.params.virtual.enabled;S&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),S&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[m?"scrollLeft":"scrollTop"]=w})):g[m?"scrollLeft":"scrollTop"]=w,S&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1})}else{if(!o.support.smoothScroll)return Gp({swiper:o,targetPosition:w,side:m?"left":"top"}),!0;g.scrollTo({[m?"left":"top"]:w,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(c),o.updateActiveIndex(s),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,f),t===0?o.transitionEnd(n,f):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(w){!o||o.destroyed||w.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,f))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function O1(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let s=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)s=s+i.virtual.slidesBefore;else{let l;if(o){const h=s*i.params.grid.rows;l=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===h)[0].column}else l=i.getSlideIndexByData(s);const a=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:u}=i.params;let d=i.params.slidesPerView;d==="auto"?d=i.slidesPerViewDynamic():(d=Math.ceil(parseFloat(i.params.slidesPerView,10)),u&&d%2===0&&(d=d+1));let p=a-l<d;if(u&&(p=p||l<Math.ceil(d/2)),r&&u&&i.params.slidesPerView!=="auto"&&!o&&(p=!1),p){const h=u?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?l+1:l-a+1,slideRealIndex:h==="next"?i.realIndex:void 0})}if(o){const h=s*i.params.grid.rows;s=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===h)[0].column}else s=i.getSlideIndexByData(s)}return requestAnimationFrame(()=>{i.slideTo(s,t,n,r)}),i}function L1(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:o,animating:s}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const a=r.activeIndex<o.slidesPerGroupSkip?1:l,u=r.virtual&&o.virtual.enabled;if(o.loop){if(s&&!u&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+a,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+a,e,t,n)}function j1(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:o,slidesGrid:s,rtlTranslate:l,enabled:a,animating:u}=r;if(!a||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(u&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=l?r.translate:-r.translate;function h(c){return c<0?-Math.floor(Math.abs(c)):Math.floor(c)}const g=h(p),y=o.map(c=>h(c));let x=o[y.indexOf(g)-1];if(typeof x>"u"&&i.cssMode){let c;o.forEach((f,m)=>{g>=f&&(c=m)}),typeof c<"u"&&(x=o[c>0?c-1:c])}let b=0;if(typeof x<"u"&&(b=s.indexOf(x),b<0&&(b=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(b=b-r.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),i.rewind&&r.isBeginning){const c=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(c,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(b,e,t,n)}),!0;return r.slideTo(b,e,t,n)}function _1(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function F1(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const s=Math.min(i.params.slidesPerGroupSkip,o),l=s+Math.floor((o-s)/i.params.slidesPerGroup),a=i.rtlTranslate?i.translate:-i.translate;if(a>=i.snapGrid[l]){const u=i.snapGrid[l],d=i.snapGrid[l+1];a-u>(d-u)*r&&(o+=i.params.slidesPerGroup)}else{const u=i.snapGrid[l-1],d=i.snapGrid[l];a-u<=(d-u)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function R1(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,o;const s=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(lt(n,`${s}[data-swiper-slide-index="${o}"]`)[0]),Gl(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(lt(n,`${s}[data-swiper-slide-index="${o}"]`)[0]),Gl(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var D1={slideTo:M1,slideToLoop:O1,slideNext:L1,slidePrev:j1,slideReset:_1,slideToClosest:F1,slideToClickedSlide:R1};function V1(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{lt(r,`.${n.slideClass}, swiper-slide`).forEach((p,h)=>{p.setAttribute("data-swiper-slide-index",h)})},o=t.grid&&n.grid&&n.grid.rows>1,s=n.slidesPerGroup*(o?n.grid.rows:1),l=t.slides.length%s!==0,a=o&&t.slides.length%n.grid.rows!==0,u=d=>{for(let p=0;p<d;p+=1){const h=t.isElement?Zr("swiper-slide",[n.slideBlankClass]):Zr("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(h)}};if(l){if(n.loopAddBlankSlides){const d=s-t.slides.length%s;u(d),t.recalcSlides(),t.updateSlides()}else wo("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(a){if(n.loopAddBlankSlides){const d=n.grid.rows-t.slides.length%n.grid.rows;u(d),t.recalcSlides(),t.updateSlides()}else wo("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function B1(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:o,byController:s,byMousewheel:l}=e===void 0?{}:e;const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:u,allowSlidePrev:d,allowSlideNext:p,slidesEl:h,params:g}=a,{centeredSlides:y}=g;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&g.virtual.enabled){n&&(!g.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):g.centeredSlides&&a.snapIndex<g.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=d,a.allowSlideNext=p,a.emit("loopFix");return}let x=g.slidesPerView;x==="auto"?x=a.slidesPerViewDynamic():(x=Math.ceil(parseFloat(g.slidesPerView,10)),y&&x%2===0&&(x=x+1));const b=g.slidesPerGroupAuto?x:g.slidesPerGroup;let c=b;c%b!==0&&(c+=b-c%b),c+=g.loopAdditionalSlides,a.loopedSlides=c;const f=a.grid&&g.grid&&g.grid.rows>1;u.length<x+c?wo("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):f&&g.grid.fill==="row"&&wo("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const m=[],w=[];let S=a.activeIndex;typeof o>"u"?o=a.getSlideIndex(u.filter(N=>N.classList.contains(g.slideActiveClass))[0]):S=o;const T=r==="next"||!r,z=r==="prev"||!r;let A=0,I=0;const C=f?Math.ceil(u.length/g.grid.rows):u.length,P=(f?u[o].column:o)+(y&&typeof i>"u"?-x/2+.5:0);if(P<c){A=Math.max(c-P,b);for(let N=0;N<c-P;N+=1){const V=N-Math.floor(N/C)*C;if(f){const $=C-V-1;for(let W=u.length-1;W>=0;W-=1)u[W].column===$&&m.push(W)}else m.push(C-V-1)}}else if(P+x>C-c){I=Math.max(P-(C-c*2),b);for(let N=0;N<I;N+=1){const V=N-Math.floor(N/C)*C;f?u.forEach(($,W)=>{$.column===V&&w.push(W)}):w.push(V)}}if(a.__preventObserver__=!0,requestAnimationFrame(()=>{a.__preventObserver__=!1}),z&&m.forEach(N=>{u[N].swiperLoopMoveDOM=!0,h.prepend(u[N]),u[N].swiperLoopMoveDOM=!1}),T&&w.forEach(N=>{u[N].swiperLoopMoveDOM=!0,h.append(u[N]),u[N].swiperLoopMoveDOM=!1}),a.recalcSlides(),g.slidesPerView==="auto"?a.updateSlides():f&&(m.length>0&&z||w.length>0&&T)&&a.slides.forEach((N,V)=>{a.grid.updateSlide(V,N,a.slides)}),g.watchSlidesProgress&&a.updateSlidesOffset(),n){if(m.length>0&&z){if(typeof t>"u"){const N=a.slidesGrid[S],$=a.slidesGrid[S+A]-N;l?a.setTranslate(a.translate-$):(a.slideTo(S+Math.ceil(A),0,!1,!0),i&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-$,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-$))}else if(i){const N=f?m.length/g.grid.rows:m.length;a.slideTo(a.activeIndex+N,0,!1,!0),a.touchEventsData.currentTranslate=a.translate}}else if(w.length>0&&T)if(typeof t>"u"){const N=a.slidesGrid[S],$=a.slidesGrid[S-I]-N;l?a.setTranslate(a.translate-$):(a.slideTo(S-I,0,!1,!0),i&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-$,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-$))}else{const N=f?w.length/g.grid.rows:w.length;a.slideTo(a.activeIndex-N,0,!1,!0)}}if(a.allowSlidePrev=d,a.allowSlideNext=p,a.controller&&a.controller.control&&!s){const N={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(V=>{!V.destroyed&&V.params.loop&&V.loopFix({...N,slideTo:V.params.slidesPerView===g.slidesPerView?n:!1})}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix({...N,slideTo:a.controller.control.params.slidesPerView===g.slidesPerView?n:!1})}a.emit("loopFix")}function $1(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var G1={loopCreate:V1,loopFix:B1,loopDestroy:$1};function U1(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function H1(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var W1={setGrabCursor:U1,unsetGrabCursor:H1};function Y1(e,t){t===void 0&&(t=this);function n(r){if(!r||r===or()||r===Ve())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Bc(e,t,n){const r=Ve(),{params:i}=e,o=i.edgeSwipeDetection,s=i.edgeSwipeThreshold;return o&&(n<=s||n>=r.innerWidth-s)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function X1(e){const t=this,n=or();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Bc(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:s,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let a=r.target;if(o.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(a)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const u=!!o.noSwipingClass&&o.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;u&&r.target&&r.target.shadowRoot&&d&&(a=d[0]);const p=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,h=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(h?Y1(p,a):a.closest(p))){t.allowClick=!0;return}if(o.swipeHandler&&!a.closest(o.swipeHandler))return;s.currentX=r.pageX,s.currentY=r.pageY;const g=s.currentX,y=s.currentY;if(!Bc(t,r,g))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=g,s.startY=y,i.touchStartTime=yo(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let x=!0;a.matches(i.focusableElements)&&(x=!1,a.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==a&&n.activeElement.blur();const b=x&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||b)&&!a.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function Q1(e){const t=or(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:s,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let a=e;if(a.originalEvent&&(a=a.originalEvent),a.type==="pointermove"&&(r.touchId!==null||a.pointerId!==r.pointerId))return;let u;if(a.type==="touchmove"){if(u=[...a.changedTouches].filter(T=>T.identifier===r.touchId)[0],!u||u.identifier!==r.touchId)return}else u=a;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",a);return}const d=u.pageX,p=u.pageY;if(a.preventedByNestedSwiper){o.startX=d,o.startY=p;return}if(!n.allowTouchMove){a.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:p,currentX:d,currentY:p}),r.touchStartTime=yo());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(p<o.startY&&n.translate<=n.maxTranslate()||p>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&a.target===t.activeElement&&a.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",a),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=d,o.currentY=p;const h=o.currentX-o.startX,g=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(h**2+g**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let T;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:h*h+g*g>=25&&(T=Math.atan2(Math.abs(g),Math.abs(h))*180/Math.PI,r.isScrolling=n.isHorizontal()?T>i.touchAngle:90-T>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",a),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||a.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&a.cancelable&&a.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&a.stopPropagation();let y=n.isHorizontal()?h:g,x=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(y=Math.abs(y)*(s?1:-1),x=Math.abs(x)*(s?1:-1)),o.diff=y,y*=i.touchRatio,s&&(y=-y,x=-x);const b=n.touchesDirection;n.swipeDirection=y>0?"prev":"next",n.touchesDirection=x>0?"prev":"next";const c=n.params.loop&&!i.cssMode,f=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(c&&f&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(T)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",a)}let m;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&b!==n.touchesDirection&&c&&f&&Math.abs(y)>=1){Object.assign(o,{startX:d,startY:p,currentX:d,currentY:p,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",a),r.isMoved=!0,r.currentTranslate=y+r.startTranslate;let w=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),y>0?(c&&f&&!m&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+y)**S))):y<0&&(c&&f&&!m&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-y)**S))),w&&(a.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(y)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function K1(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(S=>S.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:s,touches:l,rtlTranslate:a,slidesGrid:u,enabled:d}=t;if(!d||!s.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}s.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const p=yo(),h=p-n.touchStartTime;if(t.allowClick){const S=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(S&&S[0]||r.target,S),t.emit("tap click",r),h<300&&p-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=yo(),Gl(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let g;if(s.followFinger?g=a?t.translate:-t.translate:g=-n.currentTranslate,s.cssMode)return;if(s.freeMode&&s.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:g});return}const y=g>=-t.maxTranslate()&&!t.params.loop;let x=0,b=t.slidesSizesGrid[0];for(let S=0;S<u.length;S+=S<s.slidesPerGroupSkip?1:s.slidesPerGroup){const T=S<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;typeof u[S+T]<"u"?(y||g>=u[S]&&g<u[S+T])&&(x=S,b=u[S+T]-u[S]):(y||g>=u[S])&&(x=S,b=u[u.length-1]-u[u.length-2])}let c=null,f=null;s.rewind&&(t.isBeginning?f=s.virtual&&s.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(c=0));const m=(g-u[x])/b,w=x<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(h>s.longSwipesMs){if(!s.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(m>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?c:x+w):t.slideTo(x)),t.swipeDirection==="prev"&&(m>1-s.longSwipesRatio?t.slideTo(x+w):f!==null&&m<0&&Math.abs(m)>s.longSwipesRatio?t.slideTo(f):t.slideTo(x))}else{if(!s.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(x+w):t.slideTo(x):(t.swipeDirection==="next"&&t.slideTo(c!==null?c:x+w),t.swipeDirection==="prev"&&t.slideTo(f!==null?f:x))}}function $c(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,s=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=s&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!s?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function q1(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Z1(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function J1(e){const t=this;Gi(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function ey(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Qp=(e,t)=>{const n=or(),{params:r,el:i,wrapperEl:o,device:s}=e,l=!!r.nested,a=t==="on"?"addEventListener":"removeEventListener",u=t;!i||typeof i=="string"||(n[a]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[a]("touchstart",e.onTouchStart,{passive:!1}),i[a]("pointerdown",e.onTouchStart,{passive:!1}),n[a]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[a]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[a]("touchend",e.onTouchEnd,{passive:!0}),n[a]("pointerup",e.onTouchEnd,{passive:!0}),n[a]("pointercancel",e.onTouchEnd,{passive:!0}),n[a]("touchcancel",e.onTouchEnd,{passive:!0}),n[a]("pointerout",e.onTouchEnd,{passive:!0}),n[a]("pointerleave",e.onTouchEnd,{passive:!0}),n[a]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[a]("click",e.onClick,!0),r.cssMode&&o[a]("scroll",e.onScroll),r.updateOnWindowResize?e[u](s.ios||s.android?"resize orientationchange observerUpdate":"resize observerUpdate",$c,!0):e[u]("observerUpdate",$c,!0),i[a]("load",e.onLoad,{capture:!0}))};function ty(){const e=this,{params:t}=e;e.onTouchStart=X1.bind(e),e.onTouchMove=Q1.bind(e),e.onTouchEnd=K1.bind(e),e.onDocumentTouchStart=ey.bind(e),t.cssMode&&(e.onScroll=Z1.bind(e)),e.onClick=q1.bind(e),e.onLoad=J1.bind(e),Qp(e,"on")}function ny(){Qp(this,"off")}var ry={attachEvents:ty,detachEvents:ny};const Gc=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function iy(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const s=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!s||e.currentBreakpoint===s)return;const a=(s in o?o[s]:void 0)||e.originalParams,u=Gc(e,r),d=Gc(e,a),p=e.params.grabCursor,h=a.grabCursor,g=r.enabled;u&&!d?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&d&&(i.classList.add(`${r.containerModifierClass}grid`),(a.grid.fill&&a.grid.fill==="column"||!a.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!h?e.unsetGrabCursor():!p&&h&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(m=>{if(typeof a[m]>"u")return;const w=r[m]&&r[m].enabled,S=a[m]&&a[m].enabled;w&&!S&&e[m].disable(),!w&&S&&e[m].enable()});const y=a.direction&&a.direction!==r.direction,x=r.loop&&(a.slidesPerView!==r.slidesPerView||y),b=r.loop;y&&n&&e.changeDirection(),Ie(e.params,a);const c=e.params.enabled,f=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),g&&!c?e.disable():!g&&c&&e.enable(),e.currentBreakpoint=s,e.emit("_beforeBreakpoint",a),n&&(x?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&f?(e.loopCreate(t),e.updateSlides()):b&&!f&&e.loopDestroy()),e.emit("breakpoint",a)}function oy(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=Ve(),o=t==="window"?i.innerHeight:n.clientHeight,s=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const a=parseFloat(l.substr(1));return{value:o*a,point:l}}return{value:l,point:l}});s.sort((l,a)=>parseInt(l.value,10)-parseInt(a.value,10));for(let l=0;l<s.length;l+=1){const{point:a,value:u}=s[l];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=a):u<=n.clientWidth&&(r=a)}return r||"max"}var sy={setBreakpoint:iy,getBreakpoint:oy};function ly(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function ay(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,s=ly(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...s),i.classList.add(...t),e.emitContainerClasses()}function uy(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var cy={addClasses:ay,removeClasses:uy};function dy(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var fy={checkOverflow:dy},Wl={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function py(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Ie(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Ie(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Ie(t,r)}}const Ts={eventsEmitter:c1,update:S1,translate:T1,transition:I1,slide:D1,loop:G1,grabCursor:W1,events:ry,breakpoints:sy,checkOverflow:fy,classes:cy},Ps={};let tu=class dt{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=Ie({},n),t&&!n.el&&(n.el=t);const s=or();if(n.el&&typeof n.el=="string"&&s.querySelectorAll(n.el).length>1){const d=[];return s.querySelectorAll(n.el).forEach(p=>{const h=Ie({},n,{el:p});d.push(new dt(h))}),d}const l=this;l.__swiper__=!0,l.support=Wp(),l.device=Yp({userAgent:n.userAgent}),l.browser=l1(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],n.modules&&Array.isArray(n.modules)&&l.modules.push(...n.modules);const a={};l.modules.forEach(d=>{d({params:n,swiper:l,extendParams:py(n,a),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const u=Ie({},Wl,a);return l.params=Ie({},u,Ps,n),l.originalParams=Ie({},l.params),l.passedParams=Ie({},n),l.params&&l.params.on&&Object.keys(l.params.on).forEach(d=>{l.on(d,l.params.on[d])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=lt(n,`.${r.slideClass}, swiper-slide`),o=xo(i[0]);return xo(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=lt(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),s=(r.maxTranslate()-i)*t+i;r.translateTo(s,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:o,slidesGrid:s,slidesSizesGrid:l,size:a,activeIndex:u}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let p=o[u]?Math.ceil(o[u].swiperSlideSize):0,h;for(let g=u+1;g<o.length;g+=1)o[g]&&!h&&(p+=Math.ceil(o[g].swiperSlideSize),d+=1,p>a&&(h=!0));for(let g=u-1;g>=0;g-=1)o[g]&&!h&&(p+=o[g].swiperSlideSize,d+=1,p>a&&(h=!0))}else if(t==="current")for(let p=u+1;p<o.length;p+=1)(n?s[p]+l[p]-s[u]<a:s[p]-s[u]<a)&&(d+=1);else for(let p=u-1;p>=0;p-=1)s[u]-s[p]<a&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(s=>{s.complete&&Gi(t,s)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const s=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(s,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const s=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(s.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):lt(r,i())[0];return!s&&n.params.createElements&&(s=Zr("div",n.params.wrapperClass),r.append(s),lt(r,`.${n.params.slideClass}`).forEach(l=>{s.append(l)})),Object.assign(n,{el:r,wrapperEl:s,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:s,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Lt(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Lt(r,"direction")==="rtl"),wrongRTL:Lt(s,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Gi(n,o):o.addEventListener("load",s=>{Gi(n,s.target)})}),Hl(n),n.initialized=!0,Hl(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:o,wrapperEl:s,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),s&&s.removeAttribute("style"),l&&l.length&&l.forEach(a=>{a.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(a=>{r.off(a)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),Yv(r)),r.destroyed=!0),null}static extendDefaults(t){Ie(Ps,t)}static get extendedDefaults(){return Ps}static get defaults(){return Wl}static installModule(t){dt.prototype.__modules__||(dt.prototype.__modules__=[]);const n=dt.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>dt.installModule(n)),dt):(dt.installModule(t),dt)}};Object.keys(Ts).forEach(e=>{Object.keys(Ts[e]).forEach(t=>{tu.prototype[t]=Ts[e][t]})});tu.use([a1,u1]);const Kp=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function vn(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function $n(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:vn(t[r])&&vn(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:$n(e[r],t[r]):e[r]=t[r]})}function qp(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Zp(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Jp(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function em(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function my(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function hy(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:o,prevEl:s,scrollbarEl:l,paginationEl:a}=e;const u=i.filter(I=>I!=="children"&&I!=="direction"&&I!=="wrapperClass"),{params:d,pagination:p,navigation:h,scrollbar:g,virtual:y,thumbs:x}=t;let b,c,f,m,w,S,T,z;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(b=!0),i.includes("controller")&&r.controller&&r.controller.control&&d.controller&&!d.controller.control&&(c=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||a)&&(d.pagination||d.pagination===!1)&&p&&!p.el&&(f=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||l)&&(d.scrollbar||d.scrollbar===!1)&&g&&!g.el&&(m=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||s)&&(r.navigation.nextEl||o)&&(d.navigation||d.navigation===!1)&&h&&!h.prevEl&&!h.nextEl&&(w=!0);const A=I=>{t[I]&&(t[I].destroy(),I==="navigation"?(t.isElement&&(t[I].prevEl.remove(),t[I].nextEl.remove()),d[I].prevEl=void 0,d[I].nextEl=void 0,t[I].prevEl=void 0,t[I].nextEl=void 0):(t.isElement&&t[I].el.remove(),d[I].el=void 0,t[I].el=void 0))};i.includes("loop")&&t.isElement&&(d.loop&&!r.loop?S=!0:!d.loop&&r.loop?T=!0:z=!0),u.forEach(I=>{if(vn(d[I])&&vn(r[I]))Object.assign(d[I],r[I]),(I==="navigation"||I==="pagination"||I==="scrollbar")&&"enabled"in r[I]&&!r[I].enabled&&A(I);else{const C=r[I];(C===!0||C===!1)&&(I==="navigation"||I==="pagination"||I==="scrollbar")?C===!1&&A(I):d[I]=r[I]}}),u.includes("controller")&&!c&&t.controller&&t.controller.control&&d.controller&&d.controller.control&&(t.controller.control=d.controller.control),i.includes("children")&&n&&y&&d.virtual.enabled?(y.slides=n,y.update(!0)):i.includes("virtual")&&y&&d.virtual.enabled&&(n&&(y.slides=n),y.update(!0)),i.includes("children")&&n&&d.loop&&(z=!0),b&&x.init()&&x.update(!0),c&&(t.controller.control=d.controller.control),f&&(t.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),a.part.add("pagination"),t.el.appendChild(a)),a&&(d.pagination.el=a),p.init(),p.render(),p.update()),m&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-scrollbar"),l.part.add("scrollbar"),t.el.appendChild(l)),l&&(d.scrollbar.el=l),g.init(),g.updateSize(),g.setTranslate()),w&&(t.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),o.innerHTML=t.hostEl.constructor.nextButtonSvg,o.part.add("button-next"),t.el.appendChild(o)),(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-prev"),s.innerHTML=t.hostEl.constructor.prevButtonSvg,s.part.add("button-prev"),t.el.appendChild(s))),o&&(d.navigation.nextEl=o),s&&(d.navigation.prevEl=s),h.init(),h.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(S||z)&&t.loopDestroy(),(T||z)&&t.loopCreate(),t.update()}function gy(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};$n(n,Wl),n._emitClasses=!0,n.init=!1;const o={},s=Kp.map(a=>a.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(a=>{typeof e[a]>"u"||(s.indexOf(a)>=0?vn(e[a])?(n[a]={},i[a]={},$n(n[a],e[a]),$n(i[a],e[a])):(n[a]=e[a],i[a]=e[a]):a.search(/on[A-Z]/)===0&&typeof e[a]=="function"?t?r[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:n.on[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:o[a]=e[a])}),["navigation","pagination","scrollbar"].forEach(a=>{n[a]===!0&&(n[a]={}),n[a]===!1&&delete n[a]}),{params:n,passedParams:i,rest:o,events:r}}function vy(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:o,scrollbarEl:s,swiper:l}=e;qp(t)&&r&&i&&(l.params.navigation.nextEl=r,l.originalParams.navigation.nextEl=r,l.params.navigation.prevEl=i,l.originalParams.navigation.prevEl=i),Zp(t)&&o&&(l.params.pagination.el=o,l.originalParams.pagination.el=o),Jp(t)&&s&&(l.params.scrollbar.el=s,l.originalParams.scrollbar.el=s),l.init(n)}function yy(e,t,n,r,i){const o=[];if(!t)return o;const s=a=>{o.indexOf(a)<0&&o.push(a)};if(n&&r){const a=r.map(i),u=n.map(i);a.join("")!==u.join("")&&s("children"),r.length!==n.length&&s("children")}return Kp.filter(a=>a[0]==="_").map(a=>a.replace(/_/,"")).forEach(a=>{if(a in e&&a in t)if(vn(e[a])&&vn(t[a])){const u=Object.keys(e[a]),d=Object.keys(t[a]);u.length!==d.length?s(a):(u.forEach(p=>{e[a][p]!==t[a][p]&&s(a)}),d.forEach(p=>{e[a][p]!==t[a][p]&&s(a)}))}else e[a]!==t[a]&&s(a)}),o}const wy=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function So(){return So=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},So.apply(this,arguments)}function tm(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function nm(e){const t=[];return K.Children.toArray(e).forEach(n=>{tm(n)?t.push(n):n.props&&n.props.children&&nm(n.props.children).forEach(r=>t.push(r))}),t}function xy(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return K.Children.toArray(e).forEach(r=>{if(tm(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=nm(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function Sy(e,t,n){if(!n)return null;const r=d=>{let p=d;return d<0?p=t.length+d:p>=t.length&&(p=p-t.length),p},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:s}=n,l=e.params.loop?-t.length:0,a=e.params.loop?t.length*2:t.length,u=[];for(let d=l;d<a;d+=1)d>=o&&d<=s&&u.push(t[r(d)]);return u.map((d,p)=>K.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${p}`}))}function Mr(e,t){return typeof window>"u"?k.useEffect(e,t):k.useLayoutEffect(e,t)}const Uc=k.createContext(null),by=k.createContext(null),rm=k.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:o,onSwiper:s,...l}=e===void 0?{}:e,a=!1;const[u,d]=k.useState("swiper"),[p,h]=k.useState(null),[g,y]=k.useState(!1),x=k.useRef(!1),b=k.useRef(null),c=k.useRef(null),f=k.useRef(null),m=k.useRef(null),w=k.useRef(null),S=k.useRef(null),T=k.useRef(null),z=k.useRef(null),{params:A,passedParams:I,rest:C,events:j}=gy(l),{slides:P,slots:N}=xy(o),V=()=>{y(!g)};Object.assign(A.on,{_containerClasses(L,B){d(B)}});const $=()=>{Object.assign(A.on,j),a=!0;const L={...A};if(delete L.wrapperClass,c.current=new tu(L),c.current.virtual&&c.current.params.virtual.enabled){c.current.virtual.slides=P;const B={cache:!1,slides:P,renderExternal:h,renderExternalUpdate:!1};$n(c.current.params.virtual,B),$n(c.current.originalParams.virtual,B)}};b.current||$(),c.current&&c.current.on("_beforeBreakpoint",V);const W=()=>{a||!j||!c.current||Object.keys(j).forEach(L=>{c.current.on(L,j[L])})},R=()=>{!j||!c.current||Object.keys(j).forEach(L=>{c.current.off(L,j[L])})};k.useEffect(()=>()=>{c.current&&c.current.off("_beforeBreakpoint",V)}),k.useEffect(()=>{!x.current&&c.current&&(c.current.emitSlidesClasses(),x.current=!0)}),Mr(()=>{if(t&&(t.current=b.current),!!b.current)return c.current.destroyed&&$(),vy({el:b.current,nextEl:w.current,prevEl:S.current,paginationEl:T.current,scrollbarEl:z.current,swiper:c.current},A),s&&!c.current.destroyed&&s(c.current),()=>{c.current&&!c.current.destroyed&&c.current.destroy(!0,!1)}},[]),Mr(()=>{W();const L=yy(I,f.current,P,m.current,B=>B.key);return f.current=I,m.current=P,L.length&&c.current&&!c.current.destroyed&&hy({swiper:c.current,slides:P,passedParams:I,changedParams:L,nextEl:w.current,prevEl:S.current,scrollbarEl:z.current,paginationEl:T.current}),()=>{R()}}),Mr(()=>{wy(c.current)},[p]);function E(){return A.virtual?Sy(c.current,P,p):P.map((L,B)=>K.cloneElement(L,{swiper:c.current,swiperSlideIndex:B}))}return K.createElement(r,So({ref:b,className:em(`${u}${n?` ${n}`:""}`)},C),K.createElement(by.Provider,{value:c.current},N["container-start"],K.createElement(i,{className:my(A.wrapperClass)},N["wrapper-start"],E(),N["wrapper-end"]),qp(A)&&K.createElement(K.Fragment,null,K.createElement("div",{ref:S,className:"swiper-button-prev"}),K.createElement("div",{ref:w,className:"swiper-button-next"})),Jp(A)&&K.createElement("div",{ref:z,className:"swiper-scrollbar"}),Zp(A)&&K.createElement("div",{ref:T,className:"swiper-pagination"}),N["container-end"]))});rm.displayName="Swiper";const Yl=k.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:o,zoom:s,lazy:l,virtualIndex:a,swiperSlideIndex:u,...d}=e===void 0?{}:e;const p=k.useRef(null),[h,g]=k.useState("swiper-slide"),[y,x]=k.useState(!1);function b(w,S,T){S===p.current&&g(T)}Mr(()=>{if(typeof u<"u"&&(p.current.swiperSlideIndex=u),t&&(t.current=p.current),!(!p.current||!o)){if(o.destroyed){h!=="swiper-slide"&&g("swiper-slide");return}return o.on("_slideClass",b),()=>{o&&o.off("_slideClass",b)}}}),Mr(()=>{o&&p.current&&!o.destroyed&&g(o.getSlideClasses(p.current))},[o]);const c={isActive:h.indexOf("swiper-slide-active")>=0,isVisible:h.indexOf("swiper-slide-visible")>=0,isPrev:h.indexOf("swiper-slide-prev")>=0,isNext:h.indexOf("swiper-slide-next")>=0},f=()=>typeof r=="function"?r(c):r,m=()=>{x(!0)};return K.createElement(n,So({ref:p,className:em(`${h}${i?` ${i}`:""}`),"data-swiper-slide-index":a,onLoad:m},d),s&&K.createElement(Uc.Provider,{value:c},K.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof s=="number"?s:void 0},f(),l&&!y&&K.createElement("div",{className:"swiper-lazy-preloader"}))),!s&&K.createElement(Uc.Provider,{value:c},f(),l&&!y&&K.createElement("div",{className:"swiper-lazy-preloader"})))});Yl.displayName="SwiperSlide";const Ey=()=>v.jsx("div",{className:"video-container123 skeleton-container",children:v.jsx("div",{className:"carousel-div123",children:v.jsx("p",{className:"txt2-123"})})}),ky=({videos:e,campaigns:t,loading:n})=>{const r=k.useRef(null);k.useRef([]),k.useState(!1);const[i,o]=k.useState(null),[s,l]=k.useState(!1),[a,u]=k.useState(!0),[d,p]=k.useState(null),h=c=>{o(c)},g=()=>{o(null)},y=()=>{r.current.scrollBy({left:-r.current.clientWidth,behavior:"smooth"})},x=()=>{r.current.scrollBy({left:r.current.clientWidth,behavior:"smooth"})},b=()=>{const c=r.current.scrollLeft,f=r.current.scrollWidth-r.current.clientWidth;l(c>70),u(c<f-70)};return k.useEffect(()=>{const c=r.current;return c.addEventListener("scroll",b),b(),()=>{c.removeEventListener("scroll",b)}},[]),v.jsx(v.Fragment,{children:v.jsxs("div",{className:"container",children:[v.jsx("style",{children:`

       
          /* Skeleton styles */
.skeleton-container {
     background: #e9e9e9;

}

          /**
 * Swiper 11.1.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 30, 2024
 */

/* FONT_START */
@font-face {
  font-family: "swiper-icons";
  src: url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA");
  font-weight: 400;
  font-style: normal;
}
/* FONT_END */
:root {
  --swiper-theme-color: #007aff;
  /*
  --swiper-preloader-color: var(--swiper-theme-color);
  --swiper-wrapper-transition-timing-function: initial;
  */
}
:host {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
}
.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
  z-index: 1;
  display: block;
}
.swiper-vertical > .swiper-wrapper {
  flex-direction: column;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  transition-timing-function: var(
    --swiper-wrapper-transition-timing-function,
    initial
  );
  box-sizing: content-box;
  width: 160px;
}
.swiper-android .swiper-slide,
.swiper-ios .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0px, 0, 0);
}
.swiper-horizontal {
  touch-action: pan-y;
}
.swiper-vertical {
  touch-action: pan-x;
}
.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  display: block;
}
.swiper-slide-invisible-blank {
  visibility: hidden;
}
/* Auto Height */
.swiper-autoheight,
.swiper-autoheight .swiper-slide {
  height: auto;
}
.swiper-autoheight .swiper-wrapper {
  align-items: flex-start;
  transition-property: transform, height;
}
.swiper-backface-hidden .swiper-slide {
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
/* 3D Effects */
.swiper-3d.swiper-css-mode .swiper-wrapper {
  perspective: 1200px;
}
.swiper-3d .swiper-wrapper {
  transform-style: preserve-3d;
}
.swiper-3d {
  perspective: 1200px;
}
.swiper-3d .swiper-slide,
.swiper-3d .swiper-cube-shadow {
  transform-style: preserve-3d;
}
/* CSS Mode */
.swiper-css-mode > .swiper-wrapper {
  overflow: auto;
  scrollbar-width: none;
  /* For Firefox */
  -ms-overflow-style: none;
  /* For Internet Explorer and Edge */
}
.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
  display: none;
}
.swiper-css-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: start start;
}
.swiper-css-mode.swiper-horizontal > .swiper-wrapper {
  scroll-snap-type: x mandatory;
}
.swiper-css-mode.swiper-vertical > .swiper-wrapper {
  scroll-snap-type: y mandatory;
}
.swiper-css-mode.swiper-free-mode > .swiper-wrapper {
  scroll-snap-type: none;
}
.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: none;
}
.swiper-css-mode.swiper-centered > .swiper-wrapper::before {
  content: "";
  flex-shrink: 0;
  order: 9999;
}
.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: center center;
  scroll-snap-stop: always;
}
.swiper-css-mode.swiper-centered.swiper-horizontal
  > .swiper-wrapper
  > .swiper-slide:first-child {
  margin-inline-start: var(--swiper-centered-offset-before);
}
.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {
  height: 100%;
  min-height: 1px;
  width: var(--swiper-centered-offset-after);
}
.swiper-css-mode.swiper-centered.swiper-vertical
  > .swiper-wrapper
  > .swiper-slide:first-child {
  margin-block-start: var(--swiper-centered-offset-before);
}
.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {
  width: 100%;
  min-width: 1px;
  height: var(--swiper-centered-offset-after);
}
/* Slide styles start */
/* 3D Shadows */
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom,
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}
.swiper-3d .swiper-slide-shadow {
  background: rgba(0, 0, 0, 0.15);
}
.swiper-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}
.swiper-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}
.swiper-3d .swiper-slide-shadow-top {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}
.swiper-3d .swiper-slide-shadow-bottom {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0)
  );
}
.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  transform-origin: 50%;
  box-sizing: border-box;
  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
  border-radius: 50%;
  border-top-color: transparent;
}
.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,
.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {
  animation: swiper-preloader-spin 1s infinite linear;
}
.swiper-lazy-preloader-white {
  --swiper-preloader-color: #fff;
}
.swiper-lazy-preloader-black {
  --swiper-preloader-color: #000;
}
@keyframes swiper-preloader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* Slide styles end */


.txt1-123 {
  position: relative;
  top: 1vh;
  color: white;
}



.vid, .thumbnail {
height:100%;
  border-radius: 16px;
  box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.75);
  width: 100%;
  object-fit: cover;
}

.video-container123 {
  height: 408px;
  width: 230px;
  object-fit: cover;
  border-radius: 16px;
  flex: 0 0 230px;
  margin-right: 10px;
  position:relative;
}

.nav-btn123 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.694);
  color: black;
  font-weight: bolder;
  border: none;
  border-color: transparent;
  outline: none;
  cursor: pointer;
  padding: 25px 5px;
  font-size: 20px;
  z-index: 2;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.nav-btn123:hover {
  transform: translateY(-50%) scale(1.2);
  background-color: rgba(255, 255, 255, 0.694);
}

.nav-btn123:first-child {
  left: 0;
  z-index: 2;
}

.nav-btn123:last-child {
  right: 0;
  z-index: 2;
}


.inner-video-container123{

height:100%;
width:100%;
position:absolute;
z-index:99;
}

@media (max-width: 450px) {
 
  .txt1-123 {
    top: 0.5vh;
  }

  .txt2-123 {
    top: 0vh;
    margin-top: 2px;
  }

  .vid {
    height: 100%;
    width: 100%;
  }

  .video-container123 {
    height: 408px;
    width: 230px;
    margin-right: 10px;
  }

  .nav-btn123 {
    font-size: 18px;
    padding: 20px 4px;
  }
}





.txt2-123 {
  position: relative;
  top: 0vh;
  color: white;
  margin-top: 4px;
}

.down-arrow123 {
  position: absolute;
  top: 67%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10vh;
  color: white;
  pointer-events: none;
}

.play-button123 {
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 10vh;
  transform: translate(-50%, -50%);
  font-size: 34px;
  color: white;
}

.carousel-container123 {
  position: relative;
  left: 2.5vw;
  width: 95vw;
  height: 408px;
}

.carousel-div123 {
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.199),
    rgba(0, 0, 0, 0.884)
  );
  display: grid;
  justify-content: center;
  align-items: center;
  height: 15%;
  bottom: 0%;
  position:absolute;
  border-radius: 16px;
  left: 0px;
  font-size: 16px;
  font-weight: 600;
}

.txt1-123 {
  position: relative;
  top: 1vh;
  color: white;
}

.txt2-123 {
  position: relative;
  top: 0vh;
  color: white;
  margin-top: 4px;
}

.carousel {
  display: flex;
  overflow-x: auto !important;
  overflow-y: hidden;
  scroll-behavior: smooth; /* Smooth scrolling */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.carousel::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}

.carousel-container123::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}




.video-container123:last-child {
  margin-right: 0; /* Remove margin from the last video to prevent unnecessary gap */
}
.ad {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.nav-btn123 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.694);
  color: black;
  font-weight: bolder;
  border: none;
  border-color: transparent;
  outline: none;
  cursor: pointer;
  padding: 25px 5px;
  padding-left: 5px;
  font-size: 20px;
  z-index: 2;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.nav-btn123:hover {
  transform: translateY(-50%) scale(1.2);
  background-color: rgba(255, 255, 255, 0.694);
}

.nav-btn123:first-child {
  left: 0;
  z-index: 2;
}

.nav-btn123:last-child {
  right: 0;
  z-index: 2;
}

.nextbtn123,
.prevbtn123 {
  color: white;
  background-color: transparent;
  z-index: 1040;
  border: none;
  font-size: 7vh;
  position: absolute;
}

.whole123 {
  // pointer-events: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(62, 61, 61);
  display: flex;
  z-index: 1000 !important;
  justify-content: center;
  align-items: center;
  //  height: 100vh;
  // width: 100vw;
  /* background-color: rgba(0, 0, 0, 0.178); */
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 16px !important;
}
.video-container1{
  height: 100%;
  width: 56vh;
  object-fit: cover;
  display: flex;
  align-items: center;
  border-radius: 16px;
  position: relative;
}

.background {
  background-size: cover;
  max-height: fit-content;
  max-width: 1510px;
  z-index: 1;
}

.reelsContainer::-webkit-scrollbar {
  display: none;
}

.reelsContainer {
  height: 100%;
  width: 100%;
  overflow: auto;
  flex-direction: column;
  z-index:1000;
  scroll-snap-type: y mandatory;
}

.reel {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  scroll-snap-align: start;
  border-radius: 70px;
  position: relative;
  z-index:1000;
  justify-content: center;
}

.closediv123 {
  position: absolute;
  top: 0vh;
  left: 50%; /* Move the div to the center horizontally */
  transform: translateX(-50%); /* Adjust the position to center */
  width: 56vh;
  height: 15vh;
  z-index: 10;
  background-color: transparent;
  display: grid;
}

.functions {
  position: absolute;
  bottom: 20%;
  left: 50%; /* Move the div to the center horizontally */
  transform: translateX(-50%); /* Adjust the position to center */
  width: 56vh;
  height: 15vh;

  display: grid;
}

/* .bookdiv123 {
  position: absolute;
  bottom: 1.5%;
  left: 50%;
  transform: translateX(-50%);
  width: 51vh;
  min-height: 15vh;
  background-color: rgba(255, 255, 255, 0.863);
  border-radius: 10px;
  display: flex;
  padding: 1.2vh;
} */

.volume123 {
  position: absolute;
  right: 4%;
  top: 1vh;
  font-size: 3vh;
  color: white;
}

.closebtn123 {
  position: absolute;
  right: 2%;
  font-size: 5vh;
  color: white;
  background-color: transparent;
  border: none; /* Remove button border */
  padding: 0; /* Remove button padding */
  cursor: pointer; /* Add pointer cursor */
  z-index: 1000;
  outline: none; /* Remove focus outline */
}

.pre-wrap {
  white-space: pre-wrap;
}

.nextbtn123 {
  right: 0px;
}

.prevbtn123 {
  left: 0px;
}
/* Mobile responsive */
@media (max-width: 450px) {
  .down-arrow123 {
    position: absolute;
    top: 65%;
    left: 43%;
    transform: translate(-50%, -50%);
    font-size: 10vh;
    color: white;
    pointer-events: none; /* So the icon does not block clicks on the video */
  }

  .carousel-container123 {
    position: relative;
    left: 2.5vw;
    width: 95vw;
    height: 408px;
  }

  .carousel {
    display: flex;
    overflow-x: auto !important;
    overflow-y: hidden;
    scroll-behavior: smooth; /* Smooth scrolling */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    // height: 408px;
  }

  .carousel::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }



  .functions {
    position: absolute;
    bottom: 25%;
    left: 50%;
    transform: translateX(-50%);
    width: 94%;
    height: 10%;
    display: grid;
  }

  .closediv123 {
    position: absolute;
    top: 1%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 10%;
    z-index: 30;
    display: grid;
  }

  .volume123 {
    position: absolute;
    right: 0%;
    top: 3vh;
    font-size: 2.5vh;
  }

  .closebtn123 {
    position: absolute;
    right: 2%;
    font-size: 4vh;
    color: white;
    background-color: transparent;
    border: none; /* Remove button border */
    padding: 0; /* Remove button padding */
    cursor: pointer; /* Add pointer cursor */
    z-index: 1000;
    outline: none; /* Remove focus outline */
  }
}

.bookdiv123 {
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  /* min-height: 15vh; */
  background-color: rgba(255, 255, 255, 0.863);
  border-radius: 1.8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4vh;
  opacity: 0.8;
}
@media screen and (max-width: 450px) {
  .offer {
    text-wrap: wrap;
  }
}
.img1 {
  flex: 0 0 22%;
  display: flex;
  height: 12vh;
  justify-content: center;
  align-items: center;
}

.img {
  width: 100%;
  height: 100%;
  border-radius: 1.8vh;
}

.text {
  text-align: left;
  margin-left: 1vh;
  margin-right: 1vh;
  flex-grow: 1;
  line-height:normal;
}

.hotelname {
  margin-top: 0;
  margin-bottom: 0;
  color: black;
  font-weight: bolder;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  font-size: 2.2vh;
  margin-bottom: 0em !important;
}

.offer {
  color: black;
  margin: 2px 0;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  font-size: 1.8vh;
}

.view-more {
  font-size: 1.6vh;
  color: rgb(114, 94, 205);
  cursor: pointer;
}

.offerprice {
  color: black;
  margin: 4px 0;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  font-size: 2vh !important;
  line-height: normal;
}

.divbtn {
  display: flex;
  align-items: center;
}

.bookbtn {
  background-color: rgb(114, 94, 205);
  color: white;
  border: none;
  border-radius: 0.5vh;
  text-decoration: none;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 2.2vh;
  text-align: center;
  padding: 1.3vh 2.5vh;
}


`}),v.jsxs(rm,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:0,stretch:0,depth:100,modifier:2.5},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",clickable:!0},modules:[r1,e1,Jv],className:"swiper_container",children:[n?Array.from({length:5}).map((c,f)=>v.jsx(Yl,{children:v.jsx(Ey,{})},f)):t.map((c,f)=>v.jsx(Yl,{onClick:()=>h(f),children:v.jsxs("div",{className:"video-container123",children:[v.jsx("div",{className:"inner-video-container123",onMouseEnter:()=>p(f),onMouseLeave:()=>p(null)}),d===f?v.jsx("video",{src:c.videoId[0],loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"}):v.jsx("img",{className:"thumbnail",src:c.campaignPhoto,width:"300",height:"200",alt:"video thumbnail"}),v.jsx("div",{className:"carousel-div123",children:v.jsxs("p",{className:"txt2-123",children:[c.campaignName," ",v.jsx("br",{})," From"," ",c.offerPrice.currency,c.offerPrice.price]})})]})},f)),v.jsxs("div",{className:"slider-controler",children:[v.jsx("div",{className:"swiper-button-prev slider-arrow",children:v.jsx("ion-icon",{name:"arrow-back-outline"})}),v.jsx("div",{className:"swiper-button-next slider-arrow",children:v.jsx("ion-icon",{name:"arrow-forward-outline"})}),v.jsx("div",{className:"swiper-pagination"})]})]}),s&&v.jsx("button",{className:"nav-btn123",onClick:y,children:"<"}),v.jsx("div",{className:"carousel",ref:r}),a&&v.jsx("button",{className:"nav-btn123",onClick:x,children:">"}),i!==null&&v.jsx(Cy,{campaigns:t,currentIndex:i,onClose:g})]})})},Cy=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=k.useState(t),[o,s]=k.useState(0),[l,a]=k.useState({}),[u,d]=k.useState(!1),[p,h]=k.useState(!1),[g,y]=k.useState(null),[x,b]=k.useState(!1),[c,f]=k.useState(!1),m=k.useRef([]),w=k.useRef(null);k.useRef(null);const S=k.useRef(null);k.useEffect(()=>{const R=new IntersectionObserver(E=>{E.forEach(L=>{const B=m.current.indexOf(L.target);L.isIntersecting?(L.target.play(),s(B),f(!1)):L.target.pause()})},{threshold:.5});return s(0),m.current.forEach(E=>{E&&R.observe(E)}),()=>{m.current.forEach(E=>{E&&R.unobserve(E)})}},[r]),k.useEffect(()=>{const R=m.current[o];R&&R.play()},[o]);const T=()=>{r!==null?r+1<e.length?(i(r+1),s(0)):(i(0),s(0)):e.length>0&&(i(0),s(0))},z=()=>{r!==null?r>0?(i(r-1),s(0)):(i(e.length-1),s(0)):e.length>0&&(i(e.length-1),s(0))},A=R=>{const E=m.current[R];E&&(E.paused?E.play():E.pause(),d(E.paused),f(E.paused))},I=R=>{const E=m.current[R];E&&(E.muted=!E.muted,a(L=>({...L,[R]:E.muted})))},C=R=>{clearTimeout(w.current)},j=(R,E)=>{R===0&&(y(E.duration),P(E.duration))},P=R=>{clearTimeout(w.current),w.current=setTimeout(()=>{h(!0),setTimeout(()=>{h(!1)},1e4)},R*1e3)},N=R=>{clearTimeout(w.current),R===0&&g&&P(g)},V=()=>{clearTimeout(w.current)},$=()=>{b(!x)},W=R=>{const E=R.split(`
`);return E.length>2?{truncated:E.slice(0,2).join(`
`),hasMore:!0}:{truncated:R,hasMore:!1}};return k.useEffect(()=>{s(0),S.current&&(S.current.scrollTop=0)},[r]),v.jsxs("div",{className:"whole123",children:[v.jsx("div",{className:"prevbtn123",onClick:z,children:v.jsx(Y,{icon:oi})}),v.jsx("div",{className:"nextbtn123",onClick:T,children:v.jsx(Y,{icon:ii})}),v.jsx("div",{className:"reelsContainer",ref:S,children:e[r].videoId.map((R,E)=>v.jsxs("div",{className:"reel",children:[v.jsx("div",{className:"closediv123",children:v.jsx("button",{className:"closebtn123",onClick:n,children:v.jsx(Y,{icon:rr})})}),v.jsxs("div",{className:"video-container1",children:[v.jsx("video",{ref:L=>m.current[E]=L,src:R,className:"ad",loop:!0,playsInline:!0,controls:!1,autoPlay:E===o,onClick:()=>A(E),onPause:()=>{V(),d(!0)},onPlay:()=>{N(E),d(!1)},onEnded:()=>C(),onLoadedMetadata:L=>j(E,L.target)}),u&&c&&v.jsx(Y,{icon:Ro,onClick:()=>A(E),className:"play-button123"}),v.jsxs("div",{className:"bookdiv123",children:[v.jsx("div",{className:"img1",children:v.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),v.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[v.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),v.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[x?e[r].campaignDetails:W(e[r].campaignDetails).truncated,W(e[r].campaignDetails).hasMore&&v.jsx("div",{children:v.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:$,children:x?" View Less":" View More"})})]}),v.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[r].offerPrice.currency,e[r].offerPrice.price]})]}),v.jsx("div",{className:"divbtn",children:v.jsx("a",{href:e[r].hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]}),v.jsx("div",{className:"functions",children:v.jsx(Y,{icon:l[E]?nr:tr,className:"volume123",onClick:()=>I(E),style:{cursor:"pointer"}})})]},E))})]})},Ay=()=>{const[e,t]=k.useState([]),[n,r]=k.useState([]),[i,o]=k.useState(!0);return k.useEffect(()=>{const l=document.getElementById("root-stack").dataset.campaignId;(async u=>{try{const p=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${u}`)).json(),h=p.campaigns.map(g=>g.videoId[0]);t(h),r(p.campaigns)}catch(d){console.error("Error fetching data:",d)}})(l)},[]),k.useEffect(()=>{n.length>0&&o(!1)},[n]),v.jsxs("div",{className:"App",children:[v.jsx(ky,{videos:e,campaigns:n,loading:i})," "]})},Ty=()=>v.jsx("div",{className:"video-container123 skeleton-container",children:v.jsx("div",{className:"carousel-div123",children:v.jsx("p",{className:"txt2-123"})})}),Py=({videos:e,campaigns:t,loading:n})=>{const r=k.useRef(null);k.useRef([]);const[i,o]=k.useState(null),[s,l]=k.useState(null),a=h=>{o(h)},u=()=>{o(null)},d=()=>{r.current.scrollBy({left:-r.current.clientWidth,behavior:"smooth"})},p=()=>{r.current.scrollBy({left:r.current.clientWidth,behavior:"smooth"})};return n?v.jsx("div",{className:"carousel-container",children:v.jsx("div",{className:"carousel",children:Array.from({length:5}).map((h,g)=>v.jsx(Ty,{},g))})}):v.jsxs("div",{className:"carousel-container",children:[v.jsx("button",{className:"nav-btn",onClick:d,children:"<"}),v.jsx("div",{className:"carousel",ref:r,children:t.map((h,g)=>v.jsxs("div",{className:"video-container123",onClick:()=>a(g),onMouseEnter:()=>l(g),onMouseLeave:()=>l(null),children:[s===g?v.jsx("video",{src:h.videoId[0],loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"}):v.jsx("img",{className:"thumbnail",src:h.campaignPhoto,width:"300",height:"200",alt:"video thumbnail"}),v.jsx("div",{className:"video-content",children:v.jsxs("p",{className:"txt",children:[t[g].campaignName," ",v.jsx("br",{})," From"," ",t[g].offerPrice.currency,t[g].offerPrice.price]})})]},g))}),v.jsx("button",{className:"nav-btn",onClick:p,children:">"}),i!==null&&v.jsx(Ny,{campaigns:t,currentIndex:i,onClose:u})]})},Ny=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=k.useState(t),[o,s]=k.useState(0),[l,a]=k.useState({}),[u,d]=k.useState(!1),[p,h]=k.useState(!1),[g,y]=k.useState(null),[x,b]=k.useState(!1),[c,f]=k.useState(!1),m=k.useRef([]),w=k.useRef(null),S=k.useRef(null),T=k.useRef(null),z=window.innerWidth<=450;k.useEffect(()=>{const _=new IntersectionObserver(O=>{O.forEach(Q=>{const Ye=m.current.indexOf(Q.target);Q.isIntersecting?(Q.target.play(),s(Ye),f(!1)):Q.target.pause()})},{threshold:.5});return s(0),m.current.forEach(O=>{O&&_.observe(O)}),()=>{m.current.forEach(O=>{O&&_.unobserve(O)})}},[r]),k.useEffect(()=>{const _=m.current[o];_&&_.play()},[o]);const A=()=>{r!==null?r+1<e.length?(i(r+1),s(0)):(i(0),s(0)):e.length>0&&(i(0),s(0))},I=()=>{r!==null?r>0?(i(r-1),s(0)):(i(e.length-1),s(0)):e.length>0&&(i(e.length-1),s(0))},C=_=>{const O=m.current[_];O&&(O.paused?O.play():O.pause(),d(O.paused),f(O.paused))},j=_=>{const O=m.current[_];O&&(O.muted=!O.muted,a(Q=>({...Q,[_]:O.muted})))},P=_=>{clearTimeout(w.current)},N=(_,O)=>{_===0&&(y(O.duration),V(O.duration))},V=_=>{clearTimeout(w.current),w.current=setTimeout(()=>{h(!0),setTimeout(()=>{h(!1)},1e4)},_*1e3)},$=_=>{clearTimeout(w.current),_===0&&g&&V(g)},W=()=>{clearTimeout(w.current)},R=()=>{b(!x)},E=_=>{const O=_.split(`
`);return O.length>2?{truncated:O.slice(0,2).join(`
`),hasMore:!0}:{truncated:_,hasMore:!1}},L=()=>{z&&S.current&&(S.current.requestFullscreen?S.current.requestFullscreen():S.current.mozRequestFullScreen?S.current.mozRequestFullScreen():S.current.webkitRequestFullscreen?S.current.webkitRequestFullscreen():S.current.msRequestFullscreen&&S.current.msRequestFullscreen())},B=()=>{document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()};return k.useEffect(()=>{L();const _=()=>{document.fullscreenElement||n()};return document.addEventListener("fullscreenchange",_),()=>{document.removeEventListener("fullscreenchange",_),document.fullscreenElement&&B()}},[n]),k.useEffect(()=>{s(0),T.current&&(T.current.scrollTop=0)},[r]),v.jsxs("div",{className:"whole123",children:[v.jsx("div",{className:"prevbtn123",onClick:I,children:v.jsx(Y,{icon:oi})}),v.jsx("div",{className:"nextbtn123",onClick:A,children:v.jsx(Y,{icon:ii})}),v.jsx("div",{className:"reelsContainer",ref:T,children:e[r].videoId.map((_,O)=>v.jsxs("div",{className:"reel",children:[v.jsx("div",{className:"closediv123",children:v.jsx("button",{className:"closebtn123",onClick:n,children:v.jsx(Y,{icon:rr})})}),v.jsxs("div",{className:"video-container1",children:[v.jsx("video",{ref:Q=>m.current[O]=Q,src:_,className:"ad",loop:!0,playsInline:!0,controls:!1,autoPlay:O===o,onClick:()=>C(O),onPause:()=>{W(),d(!0)},onPlay:()=>{$(O),d(!1)},onEnded:()=>P(),onLoadedMetadata:Q=>N(O,Q.target)}),u&&c&&v.jsx(Y,{icon:Ro,onClick:()=>C(O),className:"play-button123"}),v.jsxs("div",{className:"bookdiv123",children:[v.jsx("div",{className:"img1",children:v.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),v.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[v.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),v.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[x?e[r].campaignDetails:E(e[r].campaignDetails).truncated,E(e[r].campaignDetails).hasMore&&v.jsx("div",{children:v.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:R,children:x?" View Less":" View More"})})]}),v.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[r].offerPrice.currency,e[r].offerPrice.price]})]}),v.jsx("div",{className:"divbtn",children:v.jsx("a",{href:e[r].hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]}),v.jsx("div",{className:"functions",children:v.jsx(Y,{icon:l[O]?nr:tr,className:"volume123",onClick:()=>j(O),style:{cursor:"pointer"}})})]},O))})]})},zy=()=>{const[e,t]=k.useState([]),[n,r]=k.useState([]),[i,o]=k.useState(!0);return k.useEffect(()=>{const l=document.getElementById("root-carosole").dataset.campaignId;l?(async u=>{try{const p=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${u}`)).json(),h=p.campaigns.map(g=>g.videoId[0]);t(h),r(p.campaigns)}catch(d){console.error("Error fetching data:",d)}})(l):console.error("No campaign ID found")},[]),k.useEffect(()=>{n.length>0&&o(!1)},[n]),v.jsxs("div",{className:"App",children:[v.jsx("style",{children:`
       .skeleton-container {
     background: #e9e9e9;

}
      .carousel-div {
  width: 100%;
  /* background-color: rgba(68, 21, 237, 0.616); */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.199),
    rgba(0, 0, 0, 0.884)
  );
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  height: 15%;
  bottom: 61px;
  border-radius: 20px;
  left: 0px;
  font-size: 16px;
  font-weight: 600;
}

.txt1 {
  position: relative;
  top: 1vh;
  color: white;
}

.txt2 {
  position: relative;
  top: 0vh;
  color: white;
}

.down-arrow {
  position: absolute;
  top: 67%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10vh;
  color: white;
  pointer-events: none;
}

.play-button123 {
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 10vh;
  transform: translate(-50%, -50%);
  font-size: 34px;
  color: white;
}
.carousel-container {
  position: relative;
  // left: 2.5vw;
  // width: 95vw;
  height: 408px;
}

.carousel {
  display: flex;
  overflow-x: auto !important;
  overflow-y: hidden;
  scroll-behavior: smooth; /* Smooth scrolling */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  // height: 408px;
}

.carousel::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}

.carousel-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}

.vid, .thumbnail {
height:100% !important;
  border-radius: 16px !important;
  box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.75);
  width: 100%;
  object-fit: cover;
}

.video-container123 {
  height: 408px;
  width: 230px;
  object-fit: cover;
  border-radius: 16px;
  position: relative;
  flex: 0 0 230px; /* Adjust the width to fit 5 videos with a gap */
  margin-right: 10px; /* Adjust the gap between videos */
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.694);
  color: black;
  font-weight: bolder;
  border: none;
  border-color: transparent;
  outline: none;
  cursor: pointer;
  padding: 25px 5px;
  padding-left: 5px;
  font-size: 20px;
  z-index: 2;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.nav-btn:hover {
  transform: translateY(-50%) scale(1.2);
  background-color: rgba(255, 255, 255, 0.694);
}

.nav-btn:first-child {
  left: 0;
  z-index: 2;
}

.nav-btn:last-child {
  right: 0;
  z-index: 2;
}

.nextbtn,
.prevbtn {
  color: white;
  background-color: transparent;
  z-index: 1000;
  border: none;
  font-size: 7vh;
}
.ad {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.whole123 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(62, 61, 61);
  display: flex;
  z-index: 1000 !important;
  justify-content: center;
  align-items: center;

  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 16px !important;
}
.video-container1 {
  height: 100%;
  width: 56vh;
  object-fit: cover;
  display: flex;
  align-items: center;
  border-radius: 16px;
  position: relative;
}

.background {
  background-size: cover;
  max-height: fit-content;
  max-width: 1510px;
  z-index: 1;
}

.reelsContainer::-webkit-scrollbar {
  display: none;
}

.reelsContainer {
  height: 100%;
  width: 100%;
  overflow: auto;
  flex-direction: column;
  z-index: 1000;
  scroll-snap-type: y mandatory;
}

.reel {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  scroll-snap-align: start;
  border-radius: 70px;
  position: relative;
  z-index: 1000;
  justify-content: center;
}

.closediv123 {
  position: absolute;
  top: 0vh;
  left: 50%; /* Move the div to the center horizontally */
  transform: translateX(-50%); /* Adjust the position to center */
  width: 56vh;
  height: 15vh;
  z-index: 10;
  background-color: transparent;
  display: grid;
}

.functions {
  position: absolute;
  bottom: 20%;
  left: 50%; /* Move the div to the center horizontally */
  transform: translateX(-50%); /* Adjust the position to center */
  width: 56vh;
  height: 15vh;

  display: grid;
}

/* .bookdiv123 {
  position: absolute;
  bottom: 1.5%;
  left: 50%;
  transform: translateX(-50%);
  width: 51vh;
  min-height: 15vh;
  background-color: rgba(255, 255, 255, 0.863);
  border-radius: 10px;
  display: flex;
  padding: 1.2vh;
} */

.volume123 {
  position: absolute;
  right: 4%;
  top: 1vh;
  font-size: 3vh;
  color: white;
}

.closebtn123 {
  position: absolute;
  right: 2%;
  font-size: 5vh;
  color: white;
  background-color: transparent;
  border: none; /* Remove button border */
  padding: 0; /* Remove button padding */
  cursor: pointer; /* Add pointer cursor */
  z-index: 1000;
  outline: none; /* Remove focus outline */
}

.pre-wrap {
  white-space: pre-wrap;
}

.nextbtn123 {
  right: 0px;
}

.prevbtn123 {
  left: 0px;
}
/* Mobile responsive */
@media (max-width: 450px) {
  .down-arrow123 {
    position: absolute;
    top: 65%;
    left: 43%;
    transform: translate(-50%, -50%);
    font-size: 10vh;
    color: white;
    pointer-events: none; /* So the icon does not block clicks on the video */
  }

  .carousel-container123 {
    position: relative;
    // left: 2.5vw;
    // width: 95vw;
    height: 408px;
  }

  .carousel {
    display: flex;
    overflow-x: auto !important;
    overflow-y: hidden;
    scroll-behavior: smooth; /* Smooth scrolling */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    // height: 408px;
  }

  .carousel::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }

  .functions {
    position: absolute;
    bottom: 25%;
    left: 50%;
    transform: translateX(-50%);
    width: 94%;
    height: 10%;
    display: grid;
  }

  .closediv123 {
    position: absolute;
    top: 1%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 10%;
    z-index: 30;
    display: grid;
  }

  .volume123 {
    position: absolute;
    right: 0%;
    top: 3vh;
    font-size: 2.5vh;
  }

  .closebtn123 {
    position: absolute;
    right: 2%;
    font-size: 4vh;
    color: white;
    background-color: transparent;
    border: none; /* Remove button border */
    padding: 0; /* Remove button padding */
    cursor: pointer; /* Add pointer cursor */
    z-index: 1000;
    outline: none; /* Remove focus outline */
  }
}

.bookdiv123 {
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  /* min-height: 15vh; */
  background-color: rgba(255, 255, 255, 0.863);
  border-radius: 1.8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4vh;
  opacity: 0.8;
}
.nextbtn123,
.prevbtn123 {
  color: white;
  background-color: transparent;
  z-index: 1040;
  border: none;
  font-size: 7vh;
  position: absolute;
}

@media screen and (max-width: 450px) {
  .offer {
    text-wrap: wrap;
  }
}
.img1 {
  flex: 0 0 22%;
  display: flex;
  height: 12vh;
  justify-content: center;
  align-items: center;
}

.img {
  // width: 100%;
  // height: 100%;
  // border-radius: 1.8vh;
   height: 100% !important;
   width: 100% !important;
   border-radius: 1.8vh !important;
}

.text {
  text-align: left;
  margin-left: 1vh;
  margin-right: 1vh;
  flex-grow: 1;
  line-height: normal;
}

.hotelname {
  margin-top: 0;
  margin-bottom: 0;
  color: black;
  font-weight: bolder;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  font-size: 2.2vh;
  margin-bottom: 0em !important;
}

.offer {
  color: black;
  margin: 2px 0;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  font-size: 1.8vh;
  padding: 0 !important;
  background-color: rgba(255, 255, 255, 0) !important;
}

.view-more {
  font-size: 1.6vh;
  color: rgb(114, 94, 205);
  cursor: pointer;
}

.offerprice {
  color: black;
  margin: 4px 0;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  font-size: 2vh !important;
  line-height: normal;
}

.divbtn {
  display: flex;
  align-items: center;
}

.bookbtn {
  background-color: rgb(114, 94, 205);
  color: white;
  border: none;
  border-radius: 0.5vh;
  text-decoration: none;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 2.2vh;
  text-align: center;
  padding: 1.3vh 2.5vh;
}

/* Mobile responsive */
@media (max-width: 450px) {
  .down-arrow {
    position: absolute;
    top: 65%;
    left: 43%;
    transform: translate(-50%, -50%);
    font-size: 10vh;
    color: white;
    pointer-events: none; /* So the icon does not block clicks on the video */
  }

  .carousel-container {
    position: relative;
    // left: 2.5vw;
    // width: 95vw;
    height: 408px;
  }

 

  .carousel::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
}
.video-content {
 align-items: center;
  min-height:15%;
  position: absolute;
  bottom: 0%;
  text-align: center;
  width: 100%;
display:flex;
justify-content: center;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.199),
    rgba(0, 0, 0, 0.884)
  );
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
}

.video-content > .txt {
  color: white;
   text-align: start;
     margin-bottom: 0 !important;

}
    .txt > p {
          margin-bottom: 0 !important;
        }
`}),v.jsx(Py,{videos:e,campaigns:n,loading:i})," "]})},im=({campaigns:e,onClose:t})=>{const[n,r]=k.useState(!1),[i,o]=k.useState(null),s=k.useRef(null),l=p=>{o(p),r(!0)},a=()=>{o(null)};if(k.useEffect(()=>{s.current&&(i===null?s.current.play():s.current.pause())},[i,im]),e.length===0)return null;const u=e[0].videoId[0],d=()=>{r(!n)};return v.jsxs(v.Fragment,{children:[i!==null&&v.jsx(Iy,{campaigns:e,currentIndex:i,onClose:a}),v.jsxs("div",{className:"page-video",children:[v.jsx("style",{children:`.page-video {
  position: fixed;
  bottom: 8px;
  height: 36vh;
  right: 8px;
  width: 22vh;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.popupVideo {
  height: 100%;
  width: 100%;
  position: relative;
  align-items: center;
  overflow: hidden;
}

.popu-close-button {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 5vh;
  height: 5vh;
  display: flex;
  z-index: 10;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  opacity: 0;
  transform: translateY(-10px); /* Start slightly above */
}

.popu-close-button svg {
  font-size: 2.5vh;
  color: white;
}

.popupVideo > video {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 1.3vh;
}

.mute-unmute-button {
  cursor: pointer;

  width: 100%;
  display: flex;
  bottom: 0%; /* Start slightly above */
  position: absolute;
  text-align: center;
  justify-content: center;
  overflow: hidden;
  padding: 2vh 0;
  border-radius: 1.3vh;
  background: rgba(0, 0, 0, 0.5);

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  opacity: 0;
  transform: translateY(10px);
}

.mute {
  font-size: 4vh;
  color: white;
}

.page-video:hover .popu-close-button,
.page-video:hover .mute-unmute-button {
  opacity: 1; /* Fully visible */
  transform: translateY(0); /* Move to original position */
}

.page-video.hidden {
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
}

/* reels css */

.whole123 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(62, 61, 61);
  display: flex;
  z-index: 1000 !important;
  justify-content: center;
  align-items: center;

  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 16px !important;
}
.video-container1 {
  height: 100%;
  width: 56vh;
  object-fit: cover;
  display: flex;
  align-items: center;
  border-radius: 16px;
  position: relative;
}

.background {
  background-size: cover;
  max-height: fit-content;
  max-width: 1510px;
  z-index: 1;
}

.reelsContainer::-webkit-scrollbar {
  display: none;
}

.reelsContainer {
  height: 100%;
  width: 100%;
  overflow: auto;
  flex-direction: column;
  z-index: 1000;
  scroll-snap-type: y mandatory;
}

.reel {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  scroll-snap-align: start;
  border-radius: 70px;
  position: relative;
  z-index: 1000;
  justify-content: center;
}
.play-button123 {
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 10vh;
  transform: translate(-50%, -50%);
  font-size: 34px;
  color: white;
}
.closediv123 {
  position: absolute;
  top: 0vh;
  left: 50%; /* Move the div to the center horizontally */
  transform: translateX(-50%); /* Adjust the position to center */
  width: 56vh;
  height: 15vh;
  z-index: 10;
  background-color: transparent;
  display: grid;
}

.functions {
  position: absolute;
  bottom: 20%;
  left: 50%; /* Move the div to the center horizontally */
  transform: translateX(-50%); /* Adjust the position to center */
  width: 56vh;
  height: 15vh;

  display: grid;
}

/* .bookdiv123 {
  position: absolute;
  bottom: 1.5%;
  left: 50%;
  transform: translateX(-50%);
  width: 51vh;
  min-height: 15vh;
  background-color: rgba(255, 255, 255, 0.863);
  border-radius: 10px;
  display: flex;
  padding: 1.2vh;
} */

.volume123 {
  position: absolute;
  right: 4%;
  top: 1vh;
  font-size: 3vh;
  color: white;
}

.closebtn123 {
  position: absolute;
  right: 2%;
  font-size: 5vh;
  color: white;
  background-color: transparent;
  border: none; /* Remove button border */
  padding: 0; /* Remove button padding */
  cursor: pointer; /* Add pointer cursor */
  z-index: 1000;
  outline: none; /* Remove focus outline */
}

.pre-wrap {
  white-space: pre-wrap;
}

.nextbtn123 {
  right: 0px;
}

.prevbtn123 {
  left: 0px;
}
/* Mobile responsive */
@media (max-width: 450px) {
  .down-arrow123 {
    position: absolute;
    top: 65%;
    left: 43%;
    transform: translate(-50%, -50%);
    font-size: 10vh;
    color: white;
    pointer-events: none; /* So the icon does not block clicks on the video */
  }

  .carousel-container123 {
    position: relative;
    left: 2.5vw;
    width: 95vw;
    height: 408px;
  }

 

  .carousel::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }

  .functions {
    position: absolute;
    bottom: 25%;
    left: 50%;
    transform: translateX(-50%);
    width: 94%;
    height: 10%;
    display: grid;
  }

  .closediv123 {
    position: absolute;
    top: 1%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 10%;
    z-index: 30;
    display: grid;
  }

  .volume123 {
    position: absolute;
    right: 0%;
    top: 3vh;
    font-size: 2.5vh;
  }

  .closebtn123 {
    position: absolute;
    right: 2%;
    font-size: 4vh;
    color: white;
    background-color: transparent;
    border: none; /* Remove button border */
    padding: 0; /* Remove button padding */
    cursor: pointer; /* Add pointer cursor */
    z-index: 1000;
    outline: none; /* Remove focus outline */
  }
}

.bookdiv123 {
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  /* min-height: 15vh; */
  background-color: rgba(255, 255, 255, 0.863);
  border-radius: 1.8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4vh;
  opacity: 0.8;
}
.nextbtn123,
.prevbtn123 {
  color: white;
  background-color: transparent;
  z-index: 1040;
  border: none;
  font-size: 7vh;
  position: absolute;
}

@media screen and (max-width: 450px) {
  .offer {
    text-wrap: wrap;
  }
}
.img1 {
  flex: 0 0 22%;
  display: flex;
  height: 12vh;
  justify-content: center;
  align-items: center;
}

.img {
  width: 100%;
  height: 100%;
  border-radius: 1.8vh;
}

.text {
  text-align: left;
  margin-left: 1vh;
  margin-right: 1vh;
  flex-grow: 1;
  line-height: normal;
}

.hotelname {
  margin-top: 0;
  margin-bottom: 0;
  color: black;
  font-weight: bolder;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  font-size: 2.2vh;
  margin-bottom: 0em !important;
}

.offer {
  color: black;
  margin: 2px 0;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  font-size: 1.8vh;
}

.view-more {
  font-size: 1.6vh;
  color: rgb(114, 94, 205);
  cursor: pointer;
}

.offerprice {
  color: black;
  margin: 4px 0;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  font-size: 2vh !important;
  line-height: normal;
}

.divbtn {
  display: flex;
  align-items: center;
}

.bookbtn {
  background-color: rgb(114, 94, 205);
  color: white;
  border: none;
  border-radius: 0.5vh;
  text-decoration: none;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 2.2vh;
  text-align: center;
  padding: 1.3vh 2.5vh;
}

/* Mobile responsive */
@media (max-width: 450px) {
  .down-arrow {
    position: absolute;
    top: 65%;
    left: 43%;
    transform: translate(-50%, -50%);
    font-size: 10vh;
    color: white;
    pointer-events: none; /* So the icon does not block clicks on the video */
  }

  .carousel-container {
    position: relative;
    left: 2.5vw;
    width: 95vw;
    height: 408px;
  }



  .carousel::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
}
.video-content {
  position: absolute;
   align-items: center;
  min-height:15%;
  bottom: 0%;
  text-align: center;
  width: 100%;
display:flex;
justify-content: center;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.199),
    rgba(0, 0, 0, 0.884)
  );
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
}

.video-content > .txt {
  color: white;
   text-align: start;
}
.ad {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
`}),v.jsxs("div",{className:"popupVideo",children:[v.jsx("div",{className:"popu-close-button",onClick:t,children:v.jsx(Y,{icon:rr})}),v.jsx("video",{ref:s,src:u,autoPlay:!0,loop:!0,muted:n,onClick:()=>l(0)}),v.jsx("div",{className:"mute-unmute-button",onClick:d,children:v.jsx(Y,{className:"mute",icon:n?nr:tr})})]})]})]})},Iy=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=k.useState(t),[o,s]=k.useState(0),[l,a]=k.useState({}),[u,d]=k.useState(!1),[p,h]=k.useState(!1),[g,y]=k.useState(null),[x,b]=k.useState(!1),[c,f]=k.useState(!1),m=k.useRef([]),w=k.useRef(null),S=k.useRef(null),T=k.useRef(null),z=window.innerWidth<=450;k.useEffect(()=>{const _=new IntersectionObserver(O=>{O.forEach(Q=>{const Ye=m.current.indexOf(Q.target);Q.isIntersecting?(Q.target.play(),s(Ye),f(!1)):Q.target.pause()})},{threshold:.5});return s(0),m.current.forEach(O=>{O&&_.observe(O)}),()=>{m.current.forEach(O=>{O&&_.unobserve(O)})}},[r]),k.useEffect(()=>{const _=m.current[o];_&&_.play()},[o]);const A=()=>{r!==null?r+1<e.length?(i(r+1),s(0)):(i(0),s(0)):e.length>0&&(i(0),s(0))},I=()=>{r!==null?r>0?(i(r-1),s(0)):(i(e.length-1),s(0)):e.length>0&&(i(e.length-1),s(0))},C=_=>{const O=m.current[_];O&&(O.paused?O.play():O.pause(),d(O.paused),f(O.paused))},j=_=>{const O=m.current[_];O&&(O.muted=!O.muted,a(Q=>({...Q,[_]:O.muted})))},P=_=>{clearTimeout(w.current)},N=(_,O)=>{_===0&&(y(O.duration),V(O.duration))},V=_=>{clearTimeout(w.current),w.current=setTimeout(()=>{h(!0),setTimeout(()=>{h(!1)},1e4)},_*1e3)},$=_=>{clearTimeout(w.current),_===0&&g&&V(g)},W=()=>{clearTimeout(w.current)},R=()=>{b(!x)},E=_=>{const O=_.split(`
`);return O.length>2?{truncated:O.slice(0,2).join(`
`),hasMore:!0}:{truncated:_,hasMore:!1}},L=()=>{z&&S.current&&(S.current.requestFullscreen?S.current.requestFullscreen():S.current.mozRequestFullScreen?S.current.mozRequestFullScreen():S.current.webkitRequestFullscreen?S.current.webkitRequestFullscreen():S.current.msRequestFullscreen&&S.current.msRequestFullscreen())},B=()=>{document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()};return k.useEffect(()=>{L();const _=()=>{document.fullscreenElement||n()};return document.addEventListener("fullscreenchange",_),()=>{document.removeEventListener("fullscreenchange",_),document.fullscreenElement&&B()}},[n]),k.useEffect(()=>{s(0),T.current&&(T.current.scrollTop=0)},[r]),v.jsxs("div",{className:"whole123",ref:S,children:[v.jsx("div",{className:"prevbtn123",onClick:I,children:v.jsx(Y,{icon:oi})}),v.jsx("div",{className:"nextbtn123",onClick:A,children:v.jsx(Y,{icon:ii})}),v.jsx("div",{className:"reelsContainer",ref:T,children:e[r].videoId.map((_,O)=>v.jsxs("div",{className:"reel",children:[v.jsx("div",{className:"closediv123",children:v.jsx("button",{className:"closebtn123",onClick:n,children:v.jsx(Y,{icon:rr})})}),v.jsxs("div",{className:"video-container1",children:[v.jsx("video",{ref:Q=>m.current[O]=Q,src:_,className:"ad",loop:!0,playsInline:!0,controls:!1,autoPlay:O===o,onClick:()=>C(O),onPause:()=>{W(),d(!0)},onPlay:()=>{$(O),d(!1)},onEnded:()=>P(),onLoadedMetadata:Q=>N(O,Q.target)}),u&&c&&v.jsx(Y,{icon:Ro,onClick:()=>C(O),className:"play-button123"}),v.jsxs("div",{className:"bookdiv123",children:[v.jsx("div",{className:"img1",children:v.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),v.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[v.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),v.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[x?e[r].campaignDetails:E(e[r].campaignDetails).truncated,E(e[r].campaignDetails).hasMore&&v.jsx("div",{children:v.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:R,children:x?" View Less":" View More"})})]}),v.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[r].offerPrice.currency,e[r].offerPrice.price]})]}),v.jsx("div",{className:"divbtn",children:v.jsx("a",{href:e[r].hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]}),v.jsx("div",{className:"functions",children:v.jsx(Y,{icon:l[O]?nr:tr,className:"volume123",onClick:()=>j(O),style:{cursor:"pointer"}})})]},O))})]})};function My(){const[e,t]=k.useState([]),[n,r]=k.useState(!0);k.useEffect(()=>{const s=document.getElementById("root-popup").dataset.campaignId;s?(async a=>{try{const d=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${a}`)).json();t(d.campaigns),console.log(d.campaigns[0].campaignDetails)}catch(u){console.error("Error fetching data:",u)}})(s):console.log("No campaign ID found!")},[]);const i=()=>{r(!1),console.log("close button")};return v.jsx(v.Fragment,{children:n&&v.jsx(im,{campaigns:e,onClose:i})})}const Ns=document.getElementById("root-stories"),zs=document.getElementById("root-grid"),Is=document.getElementById("root-carosole"),Ms=document.getElementById("root-stack"),Os=document.getElementById("root-popup");Ns&&Ns.dataset.name==="stories"&&un.createRoot(Ns).render(v.jsx(K.StrictMode,{children:v.jsx(Uv,{})}));zs&&zs.dataset.name==="grid"&&un.createRoot(zs).render(v.jsx(K.StrictMode,{children:v.jsx(Bv,{})}));Is&&Is.dataset.name==="carosole"&&un.createRoot(Is).render(v.jsx(K.StrictMode,{children:v.jsx(zy,{})}));Ms&&Ms.dataset.name==="stack"&&un.createRoot(Ms).render(v.jsx(K.StrictMode,{children:v.jsx(Ay,{})}));Os&&Os.dataset.name==="popup"&&un.createRoot(Os).render(v.jsx(K.StrictMode,{children:v.jsx(My,{})}));