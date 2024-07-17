(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Zc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jc={exports:{}},zo={},ef={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kr=Symbol.for("react.element"),lm=Symbol.for("react.portal"),um=Symbol.for("react.fragment"),cm=Symbol.for("react.strict_mode"),fm=Symbol.for("react.profiler"),dm=Symbol.for("react.provider"),pm=Symbol.for("react.context"),mm=Symbol.for("react.forward_ref"),hm=Symbol.for("react.suspense"),vm=Symbol.for("react.memo"),gm=Symbol.for("react.lazy"),lu=Symbol.iterator;function ym(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var tf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nf=Object.assign,rf={};function Kn(e,t,n){this.props=e,this.context=t,this.refs=rf,this.updater=n||tf}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function of(){}of.prototype=Kn.prototype;function qs(e,t,n){this.props=e,this.context=t,this.refs=rf,this.updater=n||tf}var Zs=qs.prototype=new of;Zs.constructor=qs;nf(Zs,Kn.prototype);Zs.isPureReactComponent=!0;var uu=Array.isArray,af=Object.prototype.hasOwnProperty,Js={current:null},sf={key:!0,ref:!0,__self:!0,__source:!0};function lf(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)af.call(t,r)&&!sf.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Kr,type:e,key:o,ref:a,props:i,_owner:Js.current}}function wm(e,t){return{$$typeof:Kr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function el(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kr}function xm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var cu=/\/+/g;function ta(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xm(""+e.key):t.toString(36)}function Li(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Kr:case lm:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ta(a,0):r,uu(i)?(n="",e!=null&&(n=e.replace(cu,"$&/")+"/"),Li(i,t,n,"",function(c){return c})):i!=null&&(el(i)&&(i=wm(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(cu,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",uu(e))for(var s=0;s<e.length;s++){o=e[s];var l=r+ta(o,s);a+=Li(o,t,n,l,i)}else if(l=ym(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=r+ta(o,s++),a+=Li(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ai(e,t,n){if(e==null)return e;var r=[],i=0;return Li(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Sm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},_i={transition:null},bm={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:_i,ReactCurrentOwner:Js};function uf(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:ai,forEach:function(e,t,n){ai(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ai(e,function(){t++}),t},toArray:function(e){return ai(e,function(t){return t})||[]},only:function(e){if(!el(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=Kn;G.Fragment=um;G.Profiler=fm;G.PureComponent=qs;G.StrictMode=cm;G.Suspense=hm;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bm;G.act=uf;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=nf({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Js.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)af.call(t,l)&&!sf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Kr,type:e.type,key:i,ref:o,props:r,_owner:a}};G.createContext=function(e){return e={$$typeof:pm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dm,_context:e},e.Consumer=e};G.createElement=lf;G.createFactory=function(e){var t=lf.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:mm,render:e}};G.isValidElement=el;G.lazy=function(e){return{$$typeof:gm,_payload:{_status:-1,_result:e},_init:Sm}};G.memo=function(e,t){return{$$typeof:vm,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=_i.transition;_i.transition={};try{e()}finally{_i.transition=t}};G.unstable_act=uf;G.useCallback=function(e,t){return Ce.current.useCallback(e,t)};G.useContext=function(e){return Ce.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};G.useEffect=function(e,t){return Ce.current.useEffect(e,t)};G.useId=function(){return Ce.current.useId()};G.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Ce.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};G.useRef=function(e){return Ce.current.useRef(e)};G.useState=function(e){return Ce.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Ce.current.useTransition()};G.version="18.3.1";ef.exports=G;var T=ef.exports;const Q=Zc(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km=T,Em=Symbol.for("react.element"),Cm=Symbol.for("react.fragment"),Am=Object.prototype.hasOwnProperty,Tm=km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pm={key:!0,ref:!0,__self:!0,__source:!0};function cf(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Am.call(t,r)&&!Pm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Em,type:e,key:o,ref:a,props:i,_owner:Tm.current}}zo.Fragment=Cm;zo.jsx=cf;zo.jsxs=cf;Jc.exports=zo;var S=Jc.exports,$n={},ff={exports:{}},Re={},df={exports:{}},pf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,L){var D=O.length;O.push(L);e:for(;0<D;){var W=D-1>>>1,se=O[W];if(0<i(se,L))O[W]=L,O[D]=se,D=W;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var L=O[0],D=O.pop();if(D!==L){O[0]=D;e:for(var W=0,se=O.length,ii=se>>>1;W<ii;){var Qt=2*(W+1)-1,ea=O[Qt],Kt=Qt+1,oi=O[Kt];if(0>i(ea,D))Kt<se&&0>i(oi,ea)?(O[W]=oi,O[Kt]=D,W=Kt):(O[W]=ea,O[Qt]=D,W=Qt);else if(Kt<se&&0>i(oi,D))O[W]=oi,O[Kt]=D,W=Kt;else break e}}return L}function i(O,L){var D=O.sortIndex-L.sortIndex;return D!==0?D:O.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],f=1,p=null,h=3,v=!1,g=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=O)r(c),L.sortIndex=L.expirationTime,t(l,L);else break;L=n(c)}}function w(O){if(y=!1,m(O),!g)if(n(l)!==null)g=!0,$(x);else{var L=n(c);L!==null&&de(w,L.startTime-O)}}function x(O,L){g=!1,y&&(y=!1,u(C),C=-1),v=!0;var D=h;try{for(m(L),p=n(l);p!==null&&(!(p.expirationTime>L)||O&&!A());){var W=p.callback;if(typeof W=="function"){p.callback=null,h=p.priorityLevel;var se=W(p.expirationTime<=L);L=e.unstable_now(),typeof se=="function"?p.callback=se:p===n(l)&&r(l),m(L)}else r(l);p=n(l)}if(p!==null)var ii=!0;else{var Qt=n(c);Qt!==null&&de(w,Qt.startTime-L),ii=!1}return ii}finally{p=null,h=D,v=!1}}var E=!1,z=null,C=-1,P=5,k=-1;function A(){return!(e.unstable_now()-k<P)}function N(){if(z!==null){var O=e.unstable_now();k=O;var L=!0;try{L=z(!0,O)}finally{L?j():(E=!1,z=null)}}else E=!1}var j;if(typeof d=="function")j=function(){d(N)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,I=M.port2;M.port1.onmessage=N,j=function(){I.postMessage(null)}}else j=function(){b(N,0)};function $(O){z=O,E||(E=!0,j())}function de(O,L){C=b(function(){O(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,$(x))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(O){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var D=h;h=L;try{return O()}finally{h=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,L){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var D=h;h=O;try{return L()}finally{h=D}},e.unstable_scheduleCallback=function(O,L,D){var W=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?W+D:W):D=W,O){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=D+se,O={id:f++,callback:L,priorityLevel:O,startTime:D,expirationTime:se,sortIndex:-1},D>W?(O.sortIndex=D,t(c,O),n(l)===null&&O===n(c)&&(y?(u(C),C=-1):y=!0,de(w,D-W))):(O.sortIndex=se,t(l,O),g||v||(g=!0,$(x))),O},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(O){var L=h;return function(){var D=h;h=L;try{return O.apply(this,arguments)}finally{h=D}}}})(pf);df.exports=pf;var zm=df.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm=T,je=zm;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mf=new Set,Tr={};function hn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(Tr[e]=t,e=0;e<t.length;e++)mf.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$a=Object.prototype.hasOwnProperty,Im=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fu={},du={};function Mm(e){return $a.call(du,e)?!0:$a.call(fu,e)?!1:Im.test(e)?du[e]=!0:(fu[e]=!0,!1)}function Om(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lm(e,t,n,r){if(t===null||typeof t>"u"||Om(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var tl=/[\-:]([a-z])/g;function nl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tl,nl);ye[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tl,nl);ye[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tl,nl);ye[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function rl(e,t,n,r){var i=ye.hasOwnProperty(t)?ye[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lm(t,n,i,r)&&(n=null),r||i===null?Mm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var bt=Nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,si=Symbol.for("react.element"),yn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),il=Symbol.for("react.strict_mode"),Ba=Symbol.for("react.profiler"),hf=Symbol.for("react.provider"),vf=Symbol.for("react.context"),ol=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),Ua=Symbol.for("react.suspense_list"),al=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),gf=Symbol.for("react.offscreen"),pu=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,na;function cr(e){if(na===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);na=t&&t[1]||""}return`
`+na+e}var ra=!1;function ia(e,t){if(!e||ra)return"";ra=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{ra=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cr(e):""}function _m(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=ia(e.type,!1),e;case 11:return e=ia(e.type.render,!1),e;case 1:return e=ia(e.type,!0),e;default:return""}}function Ha(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case yn:return"Portal";case Ba:return"Profiler";case il:return"StrictMode";case Ga:return"Suspense";case Ua:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vf:return(e.displayName||"Context")+".Consumer";case hf:return(e._context.displayName||"Context")+".Provider";case ol:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case al:return t=e.displayName||null,t!==null?t:Ha(e.type)||"Memo";case At:t=e._payload,e=e._init;try{return Ha(e(t))}catch{}}return null}function jm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ha(t);case 8:return t===il?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rm(e){var t=yf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function li(e){e._valueTracker||(e._valueTracker=Rm(e))}function wf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=yf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ya(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function mu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xf(e,t){t=t.checked,t!=null&&rl(e,"checked",t,!1)}function Wa(e,t){xf(e,t);var n=$t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xa(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xa(e,t,n){(t!=="number"||Ki(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function On(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(fr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$t(n)}}function Sf(e,t){var n=$t(t.value),r=$t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function gu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ka(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ui,kf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fm=["Webkit","ms","Moz","O"];Object.keys(hr).forEach(function(e){Fm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),hr[t]=hr[e]})});function Ef(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||hr.hasOwnProperty(e)&&hr[e]?(""+t).trim():t+"px"}function Cf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ef(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Dm=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qa(e,t){if(t){if(Dm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Za(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ja=null;function sl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var es=null,Ln=null,_n=null;function yu(e){if(e=Jr(e)){if(typeof es!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Lo(t),es(e.stateNode,e.type,t))}}function Af(e){Ln?_n?_n.push(e):_n=[e]:Ln=e}function Tf(){if(Ln){var e=Ln,t=_n;if(_n=Ln=null,yu(e),t)for(e=0;e<t.length;e++)yu(t[e])}}function Pf(e,t){return e(t)}function zf(){}var oa=!1;function Nf(e,t,n){if(oa)return e(t,n);oa=!0;try{return Pf(e,t,n)}finally{oa=!1,(Ln!==null||_n!==null)&&(zf(),Tf())}}function zr(e,t){var n=e.stateNode;if(n===null)return null;var r=Lo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ts=!1;if(ht)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){ts=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{ts=!1}function Vm(e,t,n,r,i,o,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var vr=!1,qi=null,Zi=!1,ns=null,$m={onError:function(e){vr=!0,qi=e}};function Bm(e,t,n,r,i,o,a,s,l){vr=!1,qi=null,Vm.apply($m,arguments)}function Gm(e,t,n,r,i,o,a,s,l){if(Bm.apply(this,arguments),vr){if(vr){var c=qi;vr=!1,qi=null}else throw Error(_(198));Zi||(Zi=!0,ns=c)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function If(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wu(e){if(vn(e)!==e)throw Error(_(188))}function Um(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return wu(i),e;if(o===r)return wu(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Mf(e){return e=Um(e),e!==null?Of(e):null}function Of(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Of(e);if(t!==null)return t;e=e.sibling}return null}var Lf=je.unstable_scheduleCallback,xu=je.unstable_cancelCallback,Hm=je.unstable_shouldYield,Ym=je.unstable_requestPaint,ae=je.unstable_now,Wm=je.unstable_getCurrentPriorityLevel,ll=je.unstable_ImmediatePriority,_f=je.unstable_UserBlockingPriority,Ji=je.unstable_NormalPriority,Xm=je.unstable_LowPriority,jf=je.unstable_IdlePriority,No=null,st=null;function Qm(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(No,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:Zm,Km=Math.log,qm=Math.LN2;function Zm(e){return e>>>=0,e===0?32:31-(Km(e)/qm|0)|0}var ci=64,fi=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=dr(s):(o&=a,o!==0&&(r=dr(o)))}else a=n&~i,a!==0?r=dr(a):o!==0&&(r=dr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),i=1<<n,r|=e[n],t&=~i;return r}function Jm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function eh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ze(o),s=1<<a,l=i[a];l===-1?(!(s&n)||s&r)&&(i[a]=Jm(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function rs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rf(){var e=ci;return ci<<=1,!(ci&4194240)&&(ci=64),e}function aa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function th(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ze(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ul(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function Ff(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Df,cl,Vf,$f,Bf,is=!1,di=[],Ot=null,Lt=null,_t=null,Nr=new Map,Ir=new Map,Pt=[],nh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Su(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(t.pointerId)}}function rr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Jr(t),t!==null&&cl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function rh(e,t,n,r,i){switch(t){case"focusin":return Ot=rr(Ot,e,t,n,r,i),!0;case"dragenter":return Lt=rr(Lt,e,t,n,r,i),!0;case"mouseover":return _t=rr(_t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Nr.set(o,rr(Nr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ir.set(o,rr(Ir.get(o)||null,e,t,n,r,i)),!0}return!1}function Gf(e){var t=Jt(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=If(n),t!==null){e.blockedOn=t,Bf(e.priority,function(){Vf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=os(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ja=r,n.target.dispatchEvent(r),Ja=null}else return t=Jr(n),t!==null&&cl(t),e.blockedOn=n,!1;t.shift()}return!0}function bu(e,t,n){ji(e)&&n.delete(t)}function ih(){is=!1,Ot!==null&&ji(Ot)&&(Ot=null),Lt!==null&&ji(Lt)&&(Lt=null),_t!==null&&ji(_t)&&(_t=null),Nr.forEach(bu),Ir.forEach(bu)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,is||(is=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,ih)))}function Mr(e){function t(i){return ir(i,e)}if(0<di.length){ir(di[0],e);for(var n=1;n<di.length;n++){var r=di[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&ir(Ot,e),Lt!==null&&ir(Lt,e),_t!==null&&ir(_t,e),Nr.forEach(t),Ir.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)Gf(n),n.blockedOn===null&&Pt.shift()}var jn=bt.ReactCurrentBatchConfig,to=!0;function oh(e,t,n,r){var i=H,o=jn.transition;jn.transition=null;try{H=1,fl(e,t,n,r)}finally{H=i,jn.transition=o}}function ah(e,t,n,r){var i=H,o=jn.transition;jn.transition=null;try{H=4,fl(e,t,n,r)}finally{H=i,jn.transition=o}}function fl(e,t,n,r){if(to){var i=os(e,t,n,r);if(i===null)va(e,t,r,no,n),Su(e,r);else if(rh(i,e,t,n,r))r.stopPropagation();else if(Su(e,r),t&4&&-1<nh.indexOf(e)){for(;i!==null;){var o=Jr(i);if(o!==null&&Df(o),o=os(e,t,n,r),o===null&&va(e,t,r,no,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else va(e,t,r,null,n)}}var no=null;function os(e,t,n,r){if(no=null,e=sl(r),e=Jt(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=If(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return no=e,null}function Uf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wm()){case ll:return 1;case _f:return 4;case Ji:case Xm:return 16;case jf:return 536870912;default:return 16}default:return 16}}var Nt=null,dl=null,Ri=null;function Hf(){if(Ri)return Ri;var e,t=dl,n=t.length,r,i="value"in Nt?Nt.value:Nt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ri=i.slice(e,1<r?1-r:void 0)}function Fi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pi(){return!0}function ku(){return!1}function Fe(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?pi:ku,this.isPropagationStopped=ku,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=Fe(qn),Zr=re({},qn,{view:0,detail:0}),sh=Fe(Zr),sa,la,or,Io=re({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(sa=e.screenX-or.screenX,la=e.screenY-or.screenY):la=sa=0,or=e),sa)},movementY:function(e){return"movementY"in e?e.movementY:la}}),Eu=Fe(Io),lh=re({},Io,{dataTransfer:0}),uh=Fe(lh),ch=re({},Zr,{relatedTarget:0}),ua=Fe(ch),fh=re({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),dh=Fe(fh),ph=re({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),mh=Fe(ph),hh=re({},qn,{data:0}),Cu=Fe(hh),vh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yh[e])?!!t[e]:!1}function ml(){return wh}var xh=re({},Zr,{key:function(e){if(e.key){var t=vh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ml,charCode:function(e){return e.type==="keypress"?Fi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sh=Fe(xh),bh=re({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Au=Fe(bh),kh=re({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ml}),Eh=Fe(kh),Ch=re({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ah=Fe(Ch),Th=re({},Io,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ph=Fe(Th),zh=[9,13,27,32],hl=ht&&"CompositionEvent"in window,gr=null;ht&&"documentMode"in document&&(gr=document.documentMode);var Nh=ht&&"TextEvent"in window&&!gr,Yf=ht&&(!hl||gr&&8<gr&&11>=gr),Tu=" ",Pu=!1;function Wf(e,t){switch(e){case"keyup":return zh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function Ih(e,t){switch(e){case"compositionend":return Xf(t);case"keypress":return t.which!==32?null:(Pu=!0,Tu);case"textInput":return e=t.data,e===Tu&&Pu?null:e;default:return null}}function Mh(e,t){if(xn)return e==="compositionend"||!hl&&Wf(e,t)?(e=Hf(),Ri=dl=Nt=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yf&&t.locale!=="ko"?null:t.data;default:return null}}var Oh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Oh[e.type]:t==="textarea"}function Qf(e,t,n,r){Af(r),t=ro(t,"onChange"),0<t.length&&(n=new pl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yr=null,Or=null;function Lh(e){ad(e,0)}function Mo(e){var t=kn(e);if(wf(t))return e}function _h(e,t){if(e==="change")return t}var Kf=!1;if(ht){var ca;if(ht){var fa="oninput"in document;if(!fa){var Nu=document.createElement("div");Nu.setAttribute("oninput","return;"),fa=typeof Nu.oninput=="function"}ca=fa}else ca=!1;Kf=ca&&(!document.documentMode||9<document.documentMode)}function Iu(){yr&&(yr.detachEvent("onpropertychange",qf),Or=yr=null)}function qf(e){if(e.propertyName==="value"&&Mo(Or)){var t=[];Qf(t,Or,e,sl(e)),Nf(Lh,t)}}function jh(e,t,n){e==="focusin"?(Iu(),yr=t,Or=n,yr.attachEvent("onpropertychange",qf)):e==="focusout"&&Iu()}function Rh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mo(Or)}function Fh(e,t){if(e==="click")return Mo(t)}function Dh(e,t){if(e==="input"||e==="change")return Mo(t)}function Vh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:Vh;function Lr(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$a.call(t,i)||!et(e[i],t[i]))return!1}return!0}function Mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ou(e,t){var n=Mu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mu(n)}}function Zf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jf(){for(var e=window,t=Ki();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ki(e.document)}return t}function vl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $h(e){var t=Jf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zf(n.ownerDocument.documentElement,n)){if(r!==null&&vl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ou(n,o);var a=Ou(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bh=ht&&"documentMode"in document&&11>=document.documentMode,Sn=null,as=null,wr=null,ss=!1;function Lu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ss||Sn==null||Sn!==Ki(r)||(r=Sn,"selectionStart"in r&&vl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&Lr(wr,r)||(wr=r,r=ro(as,"onSelect"),0<r.length&&(t=new pl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function mi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bn={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionend:mi("Transition","TransitionEnd")},da={},ed={};ht&&(ed=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function Oo(e){if(da[e])return da[e];if(!bn[e])return e;var t=bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ed)return da[e]=t[n];return e}var td=Oo("animationend"),nd=Oo("animationiteration"),rd=Oo("animationstart"),id=Oo("transitionend"),od=new Map,_u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){od.set(e,t),hn(t,[e])}for(var pa=0;pa<_u.length;pa++){var ma=_u[pa],Gh=ma.toLowerCase(),Uh=ma[0].toUpperCase()+ma.slice(1);Yt(Gh,"on"+Uh)}Yt(td,"onAnimationEnd");Yt(nd,"onAnimationIteration");Yt(rd,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(id,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hh=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function ju(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gm(r,t,void 0,e),e.currentTarget=null}function ad(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;ju(i,s,c),o=l}else for(a=0;a<r.length;a++){if(s=r[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;ju(i,s,c),o=l}}}if(Zi)throw e=ns,Zi=!1,ns=null,e}function X(e,t){var n=t[ds];n===void 0&&(n=t[ds]=new Set);var r=e+"__bubble";n.has(r)||(sd(t,e,2,!1),n.add(r))}function ha(e,t,n){var r=0;t&&(r|=4),sd(n,e,r,t)}var hi="_reactListening"+Math.random().toString(36).slice(2);function _r(e){if(!e[hi]){e[hi]=!0,mf.forEach(function(n){n!=="selectionchange"&&(Hh.has(n)||ha(n,!1,e),ha(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hi]||(t[hi]=!0,ha("selectionchange",!1,t))}}function sd(e,t,n,r){switch(Uf(t)){case 1:var i=oh;break;case 4:i=ah;break;default:i=fl}n=i.bind(null,t,n,e),i=void 0,!ts||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function va(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Jt(s),a===null)return;if(l=a.tag,l===5||l===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Nf(function(){var c=o,f=sl(n),p=[];e:{var h=od.get(e);if(h!==void 0){var v=pl,g=e;switch(e){case"keypress":if(Fi(n)===0)break e;case"keydown":case"keyup":v=Sh;break;case"focusin":g="focus",v=ua;break;case"focusout":g="blur",v=ua;break;case"beforeblur":case"afterblur":v=ua;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Eu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=uh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Eh;break;case td:case nd:case rd:v=dh;break;case id:v=Ah;break;case"scroll":v=sh;break;case"wheel":v=Ph;break;case"copy":case"cut":case"paste":v=mh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Au}var y=(t&4)!==0,b=!y&&e==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var d=c,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,u!==null&&(w=zr(d,u),w!=null&&y.push(jr(d,w,m)))),b)break;d=d.return}0<y.length&&(h=new v(h,g,null,n,f),p.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Ja&&(g=n.relatedTarget||n.fromElement)&&(Jt(g)||g[vt]))break e;if((v||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=c,g=g?Jt(g):null,g!==null&&(b=vn(g),g!==b||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=c),v!==g)){if(y=Eu,w="onMouseLeave",u="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Au,w="onPointerLeave",u="onPointerEnter",d="pointer"),b=v==null?h:kn(v),m=g==null?h:kn(g),h=new y(w,d+"leave",v,n,f),h.target=b,h.relatedTarget=m,w=null,Jt(f)===c&&(y=new y(u,d+"enter",g,n,f),y.target=m,y.relatedTarget=b,w=y),b=w,v&&g)t:{for(y=v,u=g,d=0,m=y;m;m=gn(m))d++;for(m=0,w=u;w;w=gn(w))m++;for(;0<d-m;)y=gn(y),d--;for(;0<m-d;)u=gn(u),m--;for(;d--;){if(y===u||u!==null&&y===u.alternate)break t;y=gn(y),u=gn(u)}y=null}else y=null;v!==null&&Ru(p,h,v,y,!1),g!==null&&b!==null&&Ru(p,b,g,y,!0)}}e:{if(h=c?kn(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var x=_h;else if(zu(h))if(Kf)x=Dh;else{x=Rh;var E=jh}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=Fh);if(x&&(x=x(e,c))){Qf(p,x,n,f);break e}E&&E(e,h,c),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Xa(h,"number",h.value)}switch(E=c?kn(c):window,e){case"focusin":(zu(E)||E.contentEditable==="true")&&(Sn=E,as=c,wr=null);break;case"focusout":wr=as=Sn=null;break;case"mousedown":ss=!0;break;case"contextmenu":case"mouseup":case"dragend":ss=!1,Lu(p,n,f);break;case"selectionchange":if(Bh)break;case"keydown":case"keyup":Lu(p,n,f)}var z;if(hl)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else xn?Wf(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Yf&&n.locale!=="ko"&&(xn||C!=="onCompositionStart"?C==="onCompositionEnd"&&xn&&(z=Hf()):(Nt=f,dl="value"in Nt?Nt.value:Nt.textContent,xn=!0)),E=ro(c,C),0<E.length&&(C=new Cu(C,e,null,n,f),p.push({event:C,listeners:E}),z?C.data=z:(z=Xf(n),z!==null&&(C.data=z)))),(z=Nh?Ih(e,n):Mh(e,n))&&(c=ro(c,"onBeforeInput"),0<c.length&&(f=new Cu("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=z))}ad(p,t)})}function jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=zr(e,n),o!=null&&r.unshift(jr(e,o,i)),o=zr(e,t),o!=null&&r.push(jr(e,o,i))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ru(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,i?(l=zr(n,o),l!=null&&a.unshift(jr(n,l,s))):i||(l=zr(n,o),l!=null&&a.push(jr(n,l,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Yh=/\r\n?/g,Wh=/\u0000|\uFFFD/g;function Fu(e){return(typeof e=="string"?e:""+e).replace(Yh,`
`).replace(Wh,"")}function vi(e,t,n){if(t=Fu(t),Fu(e)!==t&&n)throw Error(_(425))}function io(){}var ls=null,us=null;function cs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fs=typeof setTimeout=="function"?setTimeout:void 0,Xh=typeof clearTimeout=="function"?clearTimeout:void 0,Du=typeof Promise=="function"?Promise:void 0,Qh=typeof queueMicrotask=="function"?queueMicrotask:typeof Du<"u"?function(e){return Du.resolve(null).then(e).catch(Kh)}:fs;function Kh(e){setTimeout(function(){throw e})}function ga(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mr(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),it="__reactFiber$"+Zn,Rr="__reactProps$"+Zn,vt="__reactContainer$"+Zn,ds="__reactEvents$"+Zn,qh="__reactListeners$"+Zn,Zh="__reactHandles$"+Zn;function Jt(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vu(e);e!==null;){if(n=e[it])return n;e=Vu(e)}return t}e=n,n=e.parentNode}return null}function Jr(e){return e=e[it]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Lo(e){return e[Rr]||null}var ps=[],En=-1;function Wt(e){return{current:e}}function q(e){0>En||(e.current=ps[En],ps[En]=null,En--)}function Y(e,t){En++,ps[En]=e.current,e.current=t}var Bt={},be=Wt(Bt),ze=Wt(!1),sn=Bt;function Gn(e,t){var n=e.type.contextTypes;if(!n)return Bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function oo(){q(ze),q(be)}function $u(e,t,n){if(be.current!==Bt)throw Error(_(168));Y(be,t),Y(ze,n)}function ld(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,jm(e)||"Unknown",i));return re({},n,r)}function ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,sn=be.current,Y(be,e),Y(ze,ze.current),!0}function Bu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=ld(e,t,sn),r.__reactInternalMemoizedMergedChildContext=e,q(ze),q(be),Y(be,e)):q(ze),Y(ze,n)}var ft=null,_o=!1,ya=!1;function ud(e){ft===null?ft=[e]:ft.push(e)}function Jh(e){_o=!0,ud(e)}function Xt(){if(!ya&&ft!==null){ya=!0;var e=0,t=H;try{var n=ft;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,_o=!1}catch(i){throw ft!==null&&(ft=ft.slice(e+1)),Lf(ll,Xt),i}finally{H=t,ya=!1}}return null}var Cn=[],An=0,so=null,lo=0,$e=[],Be=0,ln=null,dt=1,pt="";function qt(e,t){Cn[An++]=lo,Cn[An++]=so,so=e,lo=t}function cd(e,t,n){$e[Be++]=dt,$e[Be++]=pt,$e[Be++]=ln,ln=e;var r=dt;e=pt;var i=32-Ze(r)-1;r&=~(1<<i),n+=1;var o=32-Ze(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,dt=1<<32-Ze(t)+i|n<<i|r,pt=o+e}else dt=1<<o|n<<i|r,pt=e}function gl(e){e.return!==null&&(qt(e,1),cd(e,1,0))}function yl(e){for(;e===so;)so=Cn[--An],Cn[An]=null,lo=Cn[--An],Cn[An]=null;for(;e===ln;)ln=$e[--Be],$e[Be]=null,pt=$e[--Be],$e[Be]=null,dt=$e[--Be],$e[Be]=null}var _e=null,Le=null,J=!1,Ke=null;function fd(e,t){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,Le=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ln!==null?{id:dt,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,Le=null,!0):!1;default:return!1}}function ms(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hs(e){if(J){var t=Le;if(t){var n=t;if(!Gu(e,t)){if(ms(e))throw Error(_(418));t=jt(n.nextSibling);var r=_e;t&&Gu(e,t)?fd(r,n):(e.flags=e.flags&-4097|2,J=!1,_e=e)}}else{if(ms(e))throw Error(_(418));e.flags=e.flags&-4097|2,J=!1,_e=e}}}function Uu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function gi(e){if(e!==_e)return!1;if(!J)return Uu(e),J=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!cs(e.type,e.memoizedProps)),t&&(t=Le)){if(ms(e))throw dd(),Error(_(418));for(;t;)fd(e,t),t=jt(t.nextSibling)}if(Uu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=_e?jt(e.stateNode.nextSibling):null;return!0}function dd(){for(var e=Le;e;)e=jt(e.nextSibling)}function Un(){Le=_e=null,J=!1}function wl(e){Ke===null?Ke=[e]:Ke.push(e)}var ev=bt.ReactCurrentBatchConfig;function ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hu(e){var t=e._init;return t(e._payload)}function pd(e){function t(u,d){if(e){var m=u.deletions;m===null?(u.deletions=[d],u.flags|=16):m.push(d)}}function n(u,d){if(!e)return null;for(;d!==null;)t(u,d),d=d.sibling;return null}function r(u,d){for(u=new Map;d!==null;)d.key!==null?u.set(d.key,d):u.set(d.index,d),d=d.sibling;return u}function i(u,d){return u=Vt(u,d),u.index=0,u.sibling=null,u}function o(u,d,m){return u.index=m,e?(m=u.alternate,m!==null?(m=m.index,m<d?(u.flags|=2,d):m):(u.flags|=2,d)):(u.flags|=1048576,d)}function a(u){return e&&u.alternate===null&&(u.flags|=2),u}function s(u,d,m,w){return d===null||d.tag!==6?(d=Ca(m,u.mode,w),d.return=u,d):(d=i(d,m),d.return=u,d)}function l(u,d,m,w){var x=m.type;return x===wn?f(u,d,m.props.children,w,m.key):d!==null&&(d.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===At&&Hu(x)===d.type)?(w=i(d,m.props),w.ref=ar(u,d,m),w.return=u,w):(w=Hi(m.type,m.key,m.props,null,u.mode,w),w.ref=ar(u,d,m),w.return=u,w)}function c(u,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Aa(m,u.mode,w),d.return=u,d):(d=i(d,m.children||[]),d.return=u,d)}function f(u,d,m,w,x){return d===null||d.tag!==7?(d=an(m,u.mode,w,x),d.return=u,d):(d=i(d,m),d.return=u,d)}function p(u,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ca(""+d,u.mode,m),d.return=u,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case si:return m=Hi(d.type,d.key,d.props,null,u.mode,m),m.ref=ar(u,null,d),m.return=u,m;case yn:return d=Aa(d,u.mode,m),d.return=u,d;case At:var w=d._init;return p(u,w(d._payload),m)}if(fr(d)||tr(d))return d=an(d,u.mode,m,null),d.return=u,d;yi(u,d)}return null}function h(u,d,m,w){var x=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return x!==null?null:s(u,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case si:return m.key===x?l(u,d,m,w):null;case yn:return m.key===x?c(u,d,m,w):null;case At:return x=m._init,h(u,d,x(m._payload),w)}if(fr(m)||tr(m))return x!==null?null:f(u,d,m,w,null);yi(u,m)}return null}function v(u,d,m,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return u=u.get(m)||null,s(d,u,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case si:return u=u.get(w.key===null?m:w.key)||null,l(d,u,w,x);case yn:return u=u.get(w.key===null?m:w.key)||null,c(d,u,w,x);case At:var E=w._init;return v(u,d,m,E(w._payload),x)}if(fr(w)||tr(w))return u=u.get(m)||null,f(d,u,w,x,null);yi(d,w)}return null}function g(u,d,m,w){for(var x=null,E=null,z=d,C=d=0,P=null;z!==null&&C<m.length;C++){z.index>C?(P=z,z=null):P=z.sibling;var k=h(u,z,m[C],w);if(k===null){z===null&&(z=P);break}e&&z&&k.alternate===null&&t(u,z),d=o(k,d,C),E===null?x=k:E.sibling=k,E=k,z=P}if(C===m.length)return n(u,z),J&&qt(u,C),x;if(z===null){for(;C<m.length;C++)z=p(u,m[C],w),z!==null&&(d=o(z,d,C),E===null?x=z:E.sibling=z,E=z);return J&&qt(u,C),x}for(z=r(u,z);C<m.length;C++)P=v(z,u,C,m[C],w),P!==null&&(e&&P.alternate!==null&&z.delete(P.key===null?C:P.key),d=o(P,d,C),E===null?x=P:E.sibling=P,E=P);return e&&z.forEach(function(A){return t(u,A)}),J&&qt(u,C),x}function y(u,d,m,w){var x=tr(m);if(typeof x!="function")throw Error(_(150));if(m=x.call(m),m==null)throw Error(_(151));for(var E=x=null,z=d,C=d=0,P=null,k=m.next();z!==null&&!k.done;C++,k=m.next()){z.index>C?(P=z,z=null):P=z.sibling;var A=h(u,z,k.value,w);if(A===null){z===null&&(z=P);break}e&&z&&A.alternate===null&&t(u,z),d=o(A,d,C),E===null?x=A:E.sibling=A,E=A,z=P}if(k.done)return n(u,z),J&&qt(u,C),x;if(z===null){for(;!k.done;C++,k=m.next())k=p(u,k.value,w),k!==null&&(d=o(k,d,C),E===null?x=k:E.sibling=k,E=k);return J&&qt(u,C),x}for(z=r(u,z);!k.done;C++,k=m.next())k=v(z,u,C,k.value,w),k!==null&&(e&&k.alternate!==null&&z.delete(k.key===null?C:k.key),d=o(k,d,C),E===null?x=k:E.sibling=k,E=k);return e&&z.forEach(function(N){return t(u,N)}),J&&qt(u,C),x}function b(u,d,m,w){if(typeof m=="object"&&m!==null&&m.type===wn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case si:e:{for(var x=m.key,E=d;E!==null;){if(E.key===x){if(x=m.type,x===wn){if(E.tag===7){n(u,E.sibling),d=i(E,m.props.children),d.return=u,u=d;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===At&&Hu(x)===E.type){n(u,E.sibling),d=i(E,m.props),d.ref=ar(u,E,m),d.return=u,u=d;break e}n(u,E);break}else t(u,E);E=E.sibling}m.type===wn?(d=an(m.props.children,u.mode,w,m.key),d.return=u,u=d):(w=Hi(m.type,m.key,m.props,null,u.mode,w),w.ref=ar(u,d,m),w.return=u,u=w)}return a(u);case yn:e:{for(E=m.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(u,d.sibling),d=i(d,m.children||[]),d.return=u,u=d;break e}else{n(u,d);break}else t(u,d);d=d.sibling}d=Aa(m,u.mode,w),d.return=u,u=d}return a(u);case At:return E=m._init,b(u,d,E(m._payload),w)}if(fr(m))return g(u,d,m,w);if(tr(m))return y(u,d,m,w);yi(u,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(u,d.sibling),d=i(d,m),d.return=u,u=d):(n(u,d),d=Ca(m,u.mode,w),d.return=u,u=d),a(u)):n(u,d)}return b}var Hn=pd(!0),md=pd(!1),uo=Wt(null),co=null,Tn=null,xl=null;function Sl(){xl=Tn=co=null}function bl(e){var t=uo.current;q(uo),e._currentValue=t}function vs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rn(e,t){co=e,xl=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(xl!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(co===null)throw Error(_(308));Tn=e,co.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var en=null;function kl(e){en===null?en=[e]:en.push(e)}function hd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,kl(t)):(n.next=i.next,i.next=n),t.interleaved=n,gt(e,r)}function gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tt=!1;function El(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gt(e,n)}return i=r.interleaved,i===null?(t.next=t,kl(r)):(t.next=i.next,i.next=t),r.interleaved=t,gt(e,n)}function Di(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ul(e,n)}}function Yu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fo(e,t,n,r){var i=e.updateQueue;Tt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?o=c:a.next=c,a=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=c:s.next=c,f.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;a=0,f=c=l=null,s=o;do{var h=s.lane,v=s.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,y=s;switch(h=t,v=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){p=g.call(v,p,h);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(v,p,h):g,h==null)break e;p=re({},p,h);break e;case 2:Tt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(c=f=v,l=p):f=f.next=v,a|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(f===null&&(l=p),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);cn|=a,e.lanes=a,e.memoizedState=p}}function Wu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var ei={},lt=Wt(ei),Fr=Wt(ei),Dr=Wt(ei);function tn(e){if(e===ei)throw Error(_(174));return e}function Cl(e,t){switch(Y(Dr,t),Y(Fr,e),Y(lt,ei),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ka(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ka(t,e)}q(lt),Y(lt,t)}function Yn(){q(lt),q(Fr),q(Dr)}function gd(e){tn(Dr.current);var t=tn(lt.current),n=Ka(t,e.type);t!==n&&(Y(Fr,e),Y(lt,n))}function Al(e){Fr.current===e&&(q(lt),q(Fr))}var ee=Wt(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wa=[];function Tl(){for(var e=0;e<wa.length;e++)wa[e]._workInProgressVersionPrimary=null;wa.length=0}var Vi=bt.ReactCurrentDispatcher,xa=bt.ReactCurrentBatchConfig,un=0,ne=null,ue=null,me=null,mo=!1,xr=!1,Vr=0,tv=0;function we(){throw Error(_(321))}function Pl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function zl(e,t,n,r,i,o){if(un=o,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vi.current=e===null||e.memoizedState===null?ov:av,e=n(r,i),xr){o=0;do{if(xr=!1,Vr=0,25<=o)throw Error(_(301));o+=1,me=ue=null,t.updateQueue=null,Vi.current=sv,e=n(r,i)}while(xr)}if(Vi.current=ho,t=ue!==null&&ue.next!==null,un=0,me=ue=ne=null,mo=!1,t)throw Error(_(300));return e}function Nl(){var e=Vr!==0;return Vr=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ne.memoizedState=me=e:me=me.next=e,me}function Ye(){if(ue===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=me===null?ne.memoizedState:me.next;if(t!==null)me=t,ue=e;else{if(e===null)throw Error(_(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},me===null?ne.memoizedState=me=e:me=me.next=e}return me}function $r(e,t){return typeof t=="function"?t(e):t}function Sa(e){var t=Ye(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,l=null,c=o;do{var f=c.lane;if((un&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=p,a=r):l=l.next=p,ne.lanes|=f,cn|=f}c=c.next}while(c!==null&&c!==o);l===null?a=r:l.next=s,et(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ne.lanes|=o,cn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ba(e){var t=Ye(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);et(o,t.memoizedState)||(Pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function yd(){}function wd(e,t){var n=ne,r=Ye(),i=t(),o=!et(r.memoizedState,i);if(o&&(r.memoizedState=i,Pe=!0),r=r.queue,Il(bd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Br(9,Sd.bind(null,n,r,i,t),void 0,null),he===null)throw Error(_(349));un&30||xd(n,t,i)}return i}function xd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sd(e,t,n,r){t.value=n,t.getSnapshot=r,kd(t)&&Ed(e)}function bd(e,t,n){return n(function(){kd(t)&&Ed(e)})}function kd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function Ed(e){var t=gt(e,1);t!==null&&Je(t,e,1,-1)}function Xu(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=iv.bind(null,ne,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Cd(){return Ye().memoizedState}function $i(e,t,n,r){var i=nt();ne.flags|=e,i.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function jo(e,t,n,r){var i=Ye();r=r===void 0?null:r;var o=void 0;if(ue!==null){var a=ue.memoizedState;if(o=a.destroy,r!==null&&Pl(r,a.deps)){i.memoizedState=Br(t,n,o,r);return}}ne.flags|=e,i.memoizedState=Br(1|t,n,o,r)}function Qu(e,t){return $i(8390656,8,e,t)}function Il(e,t){return jo(2048,8,e,t)}function Ad(e,t){return jo(4,2,e,t)}function Td(e,t){return jo(4,4,e,t)}function Pd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zd(e,t,n){return n=n!=null?n.concat([e]):null,jo(4,4,Pd.bind(null,t,e),n)}function Ml(){}function Nd(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Id(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Md(e,t,n){return un&21?(et(n,t)||(n=Rf(),ne.lanes|=n,cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function nv(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=xa.transition;xa.transition={};try{e(!1),t()}finally{H=n,xa.transition=r}}function Od(){return Ye().memoizedState}function rv(e,t,n){var r=Dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ld(e))_d(t,n);else if(n=hd(e,t,n,r),n!==null){var i=Ee();Je(n,e,r,i),jd(n,t,r)}}function iv(e,t,n){var r=Dt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ld(e))_d(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,et(s,a)){var l=t.interleaved;l===null?(i.next=i,kl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=hd(e,t,i,r),n!==null&&(i=Ee(),Je(n,e,r,i),jd(n,t,r))}}function Ld(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function _d(e,t){xr=mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ul(e,n)}}var ho={readContext:He,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},ov={readContext:He,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:Qu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$i(4194308,4,Pd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $i(4194308,4,e,t)},useInsertionEffect:function(e,t){return $i(4,2,e,t)},useMemo:function(e,t){var n=nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rv.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:Xu,useDebugValue:Ml,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=Xu(!1),t=e[0];return e=nv.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,i=nt();if(J){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),he===null)throw Error(_(349));un&30||xd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Qu(bd.bind(null,r,o,e),[e]),r.flags|=2048,Br(9,Sd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=nt(),t=he.identifierPrefix;if(J){var n=pt,r=dt;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=tv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},av={readContext:He,useCallback:Nd,useContext:He,useEffect:Il,useImperativeHandle:zd,useInsertionEffect:Ad,useLayoutEffect:Td,useMemo:Id,useReducer:Sa,useRef:Cd,useState:function(){return Sa($r)},useDebugValue:Ml,useDeferredValue:function(e){var t=Ye();return Md(t,ue.memoizedState,e)},useTransition:function(){var e=Sa($r)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:yd,useSyncExternalStore:wd,useId:Od,unstable_isNewReconciler:!1},sv={readContext:He,useCallback:Nd,useContext:He,useEffect:Il,useImperativeHandle:zd,useInsertionEffect:Ad,useLayoutEffect:Td,useMemo:Id,useReducer:ba,useRef:Cd,useState:function(){return ba($r)},useDebugValue:Ml,useDeferredValue:function(e){var t=Ye();return ue===null?t.memoizedState=e:Md(t,ue.memoizedState,e)},useTransition:function(){var e=ba($r)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:yd,useSyncExternalStore:wd,useId:Od,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ro={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),i=Dt(e),o=mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Rt(e,o,i),t!==null&&(Je(t,e,i,r),Di(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),i=Dt(e),o=mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Rt(e,o,i),t!==null&&(Je(t,e,i,r),Di(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=Dt(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Rt(e,i,r),t!==null&&(Je(t,e,r,n),Di(t,e,r))}};function Ku(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Lr(n,r)||!Lr(i,o):!0}function Rd(e,t,n){var r=!1,i=Bt,o=t.contextType;return typeof o=="object"&&o!==null?o=He(o):(i=Ne(t)?sn:be.current,r=t.contextTypes,o=(r=r!=null)?Gn(e,i):Bt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ro,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function qu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ro.enqueueReplaceState(t,t.state,null)}function ys(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},El(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=He(o):(o=Ne(t)?sn:be.current,i.context=Gn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(gs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ro.enqueueReplaceState(i,i.state,null),fo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wn(e,t){try{var n="",r=t;do n+=_m(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ka(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ws(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lv=typeof WeakMap=="function"?WeakMap:Map;function Fd(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){go||(go=!0,zs=r),ws(e,t)},n}function Dd(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ws(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ws(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Zu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=bv.bind(null,e,t,n),t.then(e,e))}function Ju(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ec(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e)}var uv=bt.ReactCurrentOwner,Pe=!1;function ke(e,t,n,r){t.child=e===null?md(t,null,n,r):Hn(t,e.child,n,r)}function tc(e,t,n,r,i){n=n.render;var o=t.ref;return Rn(t,i),r=zl(e,t,n,r,o,i),n=Nl(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(J&&n&&gl(t),t.flags|=1,ke(e,t,r,i),t.child)}function nc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Vl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Vd(e,t,o,r,i)):(e=Hi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Lr,n(a,r)&&e.ref===t.ref)return yt(e,t,i)}return t.flags|=1,e=Vt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Vd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Lr(o,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,yt(e,t,i)}return xs(e,t,n,r,i)}function $d(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(zn,Me),Me|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(zn,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(zn,Me),Me|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(zn,Me),Me|=r;return ke(e,t,i,n),t.child}function Bd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xs(e,t,n,r,i){var o=Ne(n)?sn:be.current;return o=Gn(t,o),Rn(t,i),n=zl(e,t,n,r,o,i),r=Nl(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(J&&r&&gl(t),t.flags|=1,ke(e,t,n,i),t.child)}function rc(e,t,n,r,i){if(Ne(n)){var o=!0;ao(t)}else o=!1;if(Rn(t,i),t.stateNode===null)Bi(e,t),Rd(t,n,r),ys(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=He(c):(c=Ne(n)?sn:be.current,c=Gn(t,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||l!==c)&&qu(t,a,r,c),Tt=!1;var h=t.memoizedState;a.state=h,fo(t,r,a,i),l=t.memoizedState,s!==r||h!==l||ze.current||Tt?(typeof f=="function"&&(gs(t,n,f,r),l=t.memoizedState),(s=Tt||Ku(t,n,s,r,h,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,vd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Xe(t.type,s),a.props=c,p=t.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=He(l):(l=Ne(n)?sn:be.current,l=Gn(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||h!==l)&&qu(t,a,r,l),Tt=!1,h=t.memoizedState,a.state=h,fo(t,r,a,i);var g=t.memoizedState;s!==p||h!==g||ze.current||Tt?(typeof v=="function"&&(gs(t,n,v,r),g=t.memoizedState),(c=Tt||Ku(t,n,c,r,h,g,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=l,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ss(e,t,n,r,o,i)}function Ss(e,t,n,r,i,o){Bd(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Bu(t,n,!1),yt(e,t,o);r=t.stateNode,uv.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Hn(t,e.child,null,o),t.child=Hn(t,null,s,o)):ke(e,t,s,o),t.memoizedState=r.state,i&&Bu(t,n,!0),t.child}function Gd(e){var t=e.stateNode;t.pendingContext?$u(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$u(e,t.context,!1),Cl(e,t.containerInfo)}function ic(e,t,n,r,i){return Un(),wl(i),t.flags|=256,ke(e,t,n,r),t.child}var bs={dehydrated:null,treeContext:null,retryLane:0};function ks(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ud(e,t,n){var r=t.pendingProps,i=ee.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(ee,i&1),e===null)return hs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Vo(a,r,0,null),e=an(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ks(n),t.memoizedState=bs,e):Ol(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return cv(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Vt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Vt(s,o):(o=an(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ks(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=bs,r}return o=e.child,e=o.sibling,r=Vt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ol(e,t){return t=Vo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,n,r){return r!==null&&wl(r),Hn(t,e.child,null,n),e=Ol(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cv(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=ka(Error(_(422))),wi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Vo({mode:"visible",children:r.children},i,0,null),o=an(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Hn(t,e.child,null,a),t.child.memoizedState=ks(a),t.memoizedState=bs,o);if(!(t.mode&1))return wi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(_(419)),r=ka(o,r,void 0),wi(e,t,a,r)}if(s=(a&e.childLanes)!==0,Pe||s){if(r=he,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,gt(e,i),Je(r,e,i,-1))}return Dl(),r=ka(Error(_(421))),wi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=kv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Le=jt(i.nextSibling),_e=t,J=!0,Ke=null,e!==null&&($e[Be++]=dt,$e[Be++]=pt,$e[Be++]=ln,dt=e.id,pt=e.overflow,ln=t),t=Ol(t,r.children),t.flags|=4096,t)}function oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),vs(e.return,t,n)}function Ea(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Hd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ke(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&oc(e,n,t);else if(e.tag===19)oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ea(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ea(t,!0,n,null,o);break;case"together":Ea(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fv(e,t,n){switch(t.tag){case 3:Gd(t),Un();break;case 5:gd(t);break;case 1:Ne(t.type)&&ao(t);break;case 4:Cl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(uo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?Ud(e,t,n):(Y(ee,ee.current&1),e=yt(e,t,n),e!==null?e.sibling:null);Y(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,$d(e,t,n)}return yt(e,t,n)}var Yd,Es,Wd,Xd;Yd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Es=function(){};Wd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tn(lt.current);var o=null;switch(n){case"input":i=Ya(e,i),r=Ya(e,r),o=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),o=[];break;case"textarea":i=Qa(e,i),r=Qa(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=io)}qa(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Tr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&X("scroll",e),o||s===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Xd=function(e,t,n,r){n!==r&&(t.flags|=4)};function sr(e,t){if(!J)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dv(e,t,n){var r=t.pendingProps;switch(yl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Ne(t.type)&&oo(),xe(t),null;case 3:return r=t.stateNode,Yn(),q(ze),q(be),Tl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(Ms(Ke),Ke=null))),Es(e,t),xe(t),null;case 5:Al(t);var i=tn(Dr.current);if(n=t.type,e!==null&&t.stateNode!=null)Wd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return xe(t),null}if(e=tn(lt.current),gi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[it]=t,r[Rr]=o,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<pr.length;i++)X(pr[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":mu(r,o),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},X("invalid",r);break;case"textarea":vu(r,o),X("invalid",r)}qa(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&vi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&vi(r.textContent,s,e),i=["children",""+s]):Tr.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&X("scroll",r)}switch(n){case"input":li(r),hu(r,o,!0);break;case"textarea":li(r),gu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=io)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[it]=t,e[Rr]=r,Yd(e,t,!1,!1),t.stateNode=e;e:{switch(a=Za(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<pr.length;i++)X(pr[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":mu(e,r),i=Ya(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),X("invalid",e);break;case"textarea":vu(e,r),i=Qa(e,r),X("invalid",e);break;default:i=r}qa(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?Cf(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&kf(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pr(e,l):typeof l=="number"&&Pr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Tr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&X("scroll",e):l!=null&&rl(e,o,l,a))}switch(n){case"input":li(e),hu(e,r,!1);break;case"textarea":li(e),gu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$t(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?On(e,!!r.multiple,o,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=io)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)Xd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=tn(Dr.current),tn(lt.current),gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[it]=t,(o=r.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:vi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=t,t.stateNode=r}return xe(t),null;case 13:if(q(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(J&&Le!==null&&t.mode&1&&!(t.flags&128))dd(),Un(),t.flags|=98560,o=!1;else if(o=gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[it]=t}else Un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),o=!1}else Ke!==null&&(Ms(Ke),Ke=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ce===0&&(ce=3):Dl())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return Yn(),Es(e,t),e===null&&_r(t.stateNode.containerInfo),xe(t),null;case 10:return bl(t.type._context),xe(t),null;case 17:return Ne(t.type)&&oo(),xe(t),null;case 19:if(q(ee),o=t.memoizedState,o===null)return xe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)sr(o,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=po(e),a!==null){for(t.flags|=128,sr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(ee,ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&ae()>Xn&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304)}else{if(!r)if(e=po(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!J)return xe(t),null}else 2*ae()-o.renderingStartTime>Xn&&n!==1073741824&&(t.flags|=128,r=!0,sr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ae(),t.sibling=null,n=ee.current,Y(ee,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return Fl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function pv(e,t){switch(yl(t),t.tag){case 1:return Ne(t.type)&&oo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yn(),q(ze),q(be),Tl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Al(t),null;case 13:if(q(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(ee),null;case 4:return Yn(),null;case 10:return bl(t.type._context),null;case 22:case 23:return Fl(),null;case 24:return null;default:return null}}var xi=!1,Se=!1,mv=typeof WeakSet=="function"?WeakSet:Set,F=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function Cs(e,t,n){try{n()}catch(r){ie(e,t,r)}}var ac=!1;function hv(e,t){if(ls=to,e=Jf(),vl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,c=0,f=0,p=e,h=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(s=a+i),p!==o||r!==0&&p.nodeType!==3||(l=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(v=p.firstChild)!==null;)h=p,p=v;for(;;){if(p===e)break t;if(h===n&&++c===i&&(s=a),h===o&&++f===r&&(l=a),(v=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(us={focusedElem:e,selectionRange:n},to=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,b=g.memoizedState,u=t.stateNode,d=u.getSnapshotBeforeUpdate(t.elementType===t.type?y:Xe(t.type,y),b);u.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){ie(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return g=ac,ac=!1,g}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Cs(t,n,o)}i=i.next}while(i!==r)}}function Fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function As(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qd(e){var t=e.alternate;t!==null&&(e.alternate=null,Qd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[Rr],delete t[ds],delete t[qh],delete t[Zh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kd(e){return e.tag===5||e.tag===3||e.tag===4}function sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ts(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=io));else if(r!==4&&(e=e.child,e!==null))for(Ts(e,t,n),e=e.sibling;e!==null;)Ts(e,t,n),e=e.sibling}function Ps(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ps(e,t,n),e=e.sibling;e!==null;)Ps(e,t,n),e=e.sibling}var ve=null,Qe=!1;function Et(e,t,n){for(n=n.child;n!==null;)qd(e,t,n),n=n.sibling}function qd(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(No,n)}catch{}switch(n.tag){case 5:Se||Pn(n,t);case 6:var r=ve,i=Qe;ve=null,Et(e,t,n),ve=r,Qe=i,ve!==null&&(Qe?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(Qe?(e=ve,n=n.stateNode,e.nodeType===8?ga(e.parentNode,n):e.nodeType===1&&ga(e,n),Mr(e)):ga(ve,n.stateNode));break;case 4:r=ve,i=Qe,ve=n.stateNode.containerInfo,Qe=!0,Et(e,t,n),ve=r,Qe=i;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Cs(n,t,a),i=i.next}while(i!==r)}Et(e,t,n);break;case 1:if(!Se&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ie(n,t,s)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Et(e,t,n),Se=r):Et(e,t,n);break;default:Et(e,t,n)}}function lc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new mv),t.forEach(function(r){var i=Ev.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:ve=s.stateNode,Qe=!1;break e;case 3:ve=s.stateNode.containerInfo,Qe=!0;break e;case 4:ve=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(ve===null)throw Error(_(160));qd(o,a,i),ve=null,Qe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ie(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zd(t,e),t=t.sibling}function Zd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),tt(e),r&4){try{Sr(3,e,e.return),Fo(3,e)}catch(y){ie(e,e.return,y)}try{Sr(5,e,e.return)}catch(y){ie(e,e.return,y)}}break;case 1:We(t,e),tt(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(We(t,e),tt(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var i=e.stateNode;try{Pr(i,"")}catch(y){ie(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&xf(i,o),Za(s,a);var c=Za(s,o);for(a=0;a<l.length;a+=2){var f=l[a],p=l[a+1];f==="style"?Cf(i,p):f==="dangerouslySetInnerHTML"?kf(i,p):f==="children"?Pr(i,p):rl(i,f,p,c)}switch(s){case"input":Wa(i,o);break;case"textarea":Sf(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?On(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?On(i,!!o.multiple,o.defaultValue,!0):On(i,!!o.multiple,o.multiple?[]:"",!1))}i[Rr]=o}catch(y){ie(e,e.return,y)}}break;case 6:if(We(t,e),tt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){ie(e,e.return,y)}}break;case 3:if(We(t,e),tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mr(t.containerInfo)}catch(y){ie(e,e.return,y)}break;case 4:We(t,e),tt(e);break;case 13:We(t,e),tt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(jl=ae())),r&4&&lc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(c=Se)||f,We(t,e),Se=c):We(t,e),tt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(F=e,f=e.child;f!==null;){for(p=F=f;F!==null;){switch(h=F,v=h.child,h.tag){case 0:case 11:case 14:case 15:Sr(4,h,h.return);break;case 1:Pn(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){ie(r,n,y)}}break;case 5:Pn(h,h.return);break;case 22:if(h.memoizedState!==null){cc(p);continue}}v!==null?(v.return=h,F=v):cc(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Ef("display",a))}catch(y){ie(e,e.return,y)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){ie(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:We(t,e),tt(e),r&4&&lc(e);break;case 21:break;default:We(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Kd(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pr(i,""),r.flags&=-33);var o=sc(e);Ps(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=sc(e);Ts(e,s,a);break;default:throw Error(_(161))}}catch(l){ie(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vv(e,t,n){F=e,Jd(e)}function Jd(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||xi;if(!a){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Se;s=xi;var c=Se;if(xi=a,(Se=l)&&!c)for(F=i;F!==null;)a=F,l=a.child,a.tag===22&&a.memoizedState!==null?fc(i):l!==null?(l.return=a,F=l):fc(i);for(;o!==null;)F=o,Jd(o),o=o.sibling;F=i,xi=s,Se=c}uc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,F=o):uc(e)}}function uc(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||Fo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Wu(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wu(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Mr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Se||t.flags&512&&As(t)}catch(h){ie(t,t.return,h)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function cc(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function fc(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fo(4,t)}catch(l){ie(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ie(t,i,l)}}var o=t.return;try{As(t)}catch(l){ie(t,o,l)}break;case 5:var a=t.return;try{As(t)}catch(l){ie(t,a,l)}}}catch(l){ie(t,t.return,l)}if(t===e){F=null;break}var s=t.sibling;if(s!==null){s.return=t.return,F=s;break}F=t.return}}var gv=Math.ceil,vo=bt.ReactCurrentDispatcher,Ll=bt.ReactCurrentOwner,Ue=bt.ReactCurrentBatchConfig,U=0,he=null,le=null,ge=0,Me=0,zn=Wt(0),ce=0,Gr=null,cn=0,Do=0,_l=0,br=null,Te=null,jl=0,Xn=1/0,ct=null,go=!1,zs=null,Ft=null,Si=!1,It=null,yo=0,kr=0,Ns=null,Gi=-1,Ui=0;function Ee(){return U&6?ae():Gi!==-1?Gi:Gi=ae()}function Dt(e){return e.mode&1?U&2&&ge!==0?ge&-ge:ev.transition!==null?(Ui===0&&(Ui=Rf()),Ui):(e=H,e!==0||(e=window.event,e=e===void 0?16:Uf(e.type)),e):1}function Je(e,t,n,r){if(50<kr)throw kr=0,Ns=null,Error(_(185));qr(e,n,r),(!(U&2)||e!==he)&&(e===he&&(!(U&2)&&(Do|=n),ce===4&&zt(e,ge)),Ie(e,r),n===1&&U===0&&!(t.mode&1)&&(Xn=ae()+500,_o&&Xt()))}function Ie(e,t){var n=e.callbackNode;eh(e,t);var r=eo(e,e===he?ge:0);if(r===0)n!==null&&xu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xu(n),t===1)e.tag===0?Jh(dc.bind(null,e)):ud(dc.bind(null,e)),Qh(function(){!(U&6)&&Xt()}),n=null;else{switch(Ff(r)){case 1:n=ll;break;case 4:n=_f;break;case 16:n=Ji;break;case 536870912:n=jf;break;default:n=Ji}n=sp(n,ep.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ep(e,t){if(Gi=-1,Ui=0,U&6)throw Error(_(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=eo(e,e===he?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wo(e,r);else{t=r;var i=U;U|=2;var o=np();(he!==e||ge!==t)&&(ct=null,Xn=ae()+500,on(e,t));do try{xv();break}catch(s){tp(e,s)}while(!0);Sl(),vo.current=o,U=i,le!==null?t=0:(he=null,ge=0,t=ce)}if(t!==0){if(t===2&&(i=rs(e),i!==0&&(r=i,t=Is(e,i))),t===1)throw n=Gr,on(e,0),zt(e,r),Ie(e,ae()),n;if(t===6)zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!yv(i)&&(t=wo(e,r),t===2&&(o=rs(e),o!==0&&(r=o,t=Is(e,o))),t===1))throw n=Gr,on(e,0),zt(e,r),Ie(e,ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Zt(e,Te,ct);break;case 3:if(zt(e,r),(r&130023424)===r&&(t=jl+500-ae(),10<t)){if(eo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=fs(Zt.bind(null,e,Te,ct),t);break}Zt(e,Te,ct);break;case 4:if(zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ze(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gv(r/1960))-r,10<r){e.timeoutHandle=fs(Zt.bind(null,e,Te,ct),r);break}Zt(e,Te,ct);break;case 5:Zt(e,Te,ct);break;default:throw Error(_(329))}}}return Ie(e,ae()),e.callbackNode===n?ep.bind(null,e):null}function Is(e,t){var n=br;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=wo(e,t),e!==2&&(t=Te,Te=n,t!==null&&Ms(t)),e}function Ms(e){Te===null?Te=e:Te.push.apply(Te,e)}function yv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!et(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zt(e,t){for(t&=~_l,t&=~Do,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function dc(e){if(U&6)throw Error(_(327));Fn();var t=eo(e,0);if(!(t&1))return Ie(e,ae()),null;var n=wo(e,t);if(e.tag!==0&&n===2){var r=rs(e);r!==0&&(t=r,n=Is(e,r))}if(n===1)throw n=Gr,on(e,0),zt(e,t),Ie(e,ae()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zt(e,Te,ct),Ie(e,ae()),null}function Rl(e,t){var n=U;U|=1;try{return e(t)}finally{U=n,U===0&&(Xn=ae()+500,_o&&Xt())}}function fn(e){It!==null&&It.tag===0&&!(U&6)&&Fn();var t=U;U|=1;var n=Ue.transition,r=H;try{if(Ue.transition=null,H=1,e)return e()}finally{H=r,Ue.transition=n,U=t,!(U&6)&&Xt()}}function Fl(){Me=zn.current,q(zn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xh(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(yl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oo();break;case 3:Yn(),q(ze),q(be),Tl();break;case 5:Al(r);break;case 4:Yn();break;case 13:q(ee);break;case 19:q(ee);break;case 10:bl(r.type._context);break;case 22:case 23:Fl()}n=n.return}if(he=e,le=e=Vt(e.current,null),ge=Me=t,ce=0,Gr=null,_l=Do=cn=0,Te=br=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}en=null}return e}function tp(e,t){do{var n=le;try{if(Sl(),Vi.current=ho,mo){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mo=!1}if(un=0,me=ue=ne=null,xr=!1,Vr=0,Ll.current=null,n===null||n.return===null){ce=1,Gr=t,le=null;break}e:{var o=e,a=n.return,s=n,l=t;if(t=ge,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=s,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Ju(a);if(v!==null){v.flags&=-257,ec(v,a,s,o,t),v.mode&1&&Zu(o,c,t),t=v,l=c;var g=t.updateQueue;if(g===null){var y=new Set;y.add(l),t.updateQueue=y}else g.add(l);break e}else{if(!(t&1)){Zu(o,c,t),Dl();break e}l=Error(_(426))}}else if(J&&s.mode&1){var b=Ju(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),ec(b,a,s,o,t),wl(Wn(l,s));break e}}o=l=Wn(l,s),ce!==4&&(ce=2),br===null?br=[o]:br.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var u=Fd(o,l,t);Yu(o,u);break e;case 1:s=l;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ft===null||!Ft.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Dd(o,s,t);Yu(o,w);break e}}o=o.return}while(o!==null)}ip(n)}catch(x){t=x,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function np(){var e=vo.current;return vo.current=ho,e===null?ho:e}function Dl(){(ce===0||ce===3||ce===2)&&(ce=4),he===null||!(cn&268435455)&&!(Do&268435455)||zt(he,ge)}function wo(e,t){var n=U;U|=2;var r=np();(he!==e||ge!==t)&&(ct=null,on(e,t));do try{wv();break}catch(i){tp(e,i)}while(!0);if(Sl(),U=n,vo.current=r,le!==null)throw Error(_(261));return he=null,ge=0,ce}function wv(){for(;le!==null;)rp(le)}function xv(){for(;le!==null&&!Hm();)rp(le)}function rp(e){var t=ap(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?ip(e):le=t,Ll.current=null}function ip(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pv(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,le=null;return}}else if(n=dv(n,t,Me),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ce===0&&(ce=5)}function Zt(e,t,n){var r=H,i=Ue.transition;try{Ue.transition=null,H=1,Sv(e,t,n,r)}finally{Ue.transition=i,H=r}return null}function Sv(e,t,n,r){do Fn();while(It!==null);if(U&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(th(e,o),e===he&&(le=he=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Si||(Si=!0,sp(Ji,function(){return Fn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ue.transition,Ue.transition=null;var a=H;H=1;var s=U;U|=4,Ll.current=null,hv(e,n),Zd(n,e),$h(us),to=!!ls,us=ls=null,e.current=n,vv(n),Ym(),U=s,H=a,Ue.transition=o}else e.current=n;if(Si&&(Si=!1,It=e,yo=i),o=e.pendingLanes,o===0&&(Ft=null),Qm(n.stateNode),Ie(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(go)throw go=!1,e=zs,zs=null,e;return yo&1&&e.tag!==0&&Fn(),o=e.pendingLanes,o&1?e===Ns?kr++:(kr=0,Ns=e):kr=0,Xt(),null}function Fn(){if(It!==null){var e=Ff(yo),t=Ue.transition,n=H;try{if(Ue.transition=null,H=16>e?16:e,It===null)var r=!1;else{if(e=It,It=null,yo=0,U&6)throw Error(_(331));var i=U;for(U|=4,F=e.current;F!==null;){var o=F,a=o.child;if(F.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(F=c;F!==null;){var f=F;switch(f.tag){case 0:case 11:case 15:Sr(8,f,o)}var p=f.child;if(p!==null)p.return=f,F=p;else for(;F!==null;){f=F;var h=f.sibling,v=f.return;if(Qd(f),f===c){F=null;break}if(h!==null){h.return=v,F=h;break}F=v}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}F=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,F=a;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Sr(9,o,o.return)}var u=o.sibling;if(u!==null){u.return=o.return,F=u;break e}F=o.return}}var d=e.current;for(F=d;F!==null;){a=F;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,F=m;else e:for(a=d;F!==null;){if(s=F,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Fo(9,s)}}catch(x){ie(s,s.return,x)}if(s===a){F=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,F=w;break e}F=s.return}}if(U=i,Xt(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(No,e)}catch{}r=!0}return r}finally{H=n,Ue.transition=t}}return!1}function pc(e,t,n){t=Wn(n,t),t=Fd(e,t,1),e=Rt(e,t,1),t=Ee(),e!==null&&(qr(e,1,t),Ie(e,t))}function ie(e,t,n){if(e.tag===3)pc(e,e,n);else for(;t!==null;){if(t.tag===3){pc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=Wn(n,e),e=Dd(t,e,1),t=Rt(t,e,1),e=Ee(),t!==null&&(qr(t,1,e),Ie(t,e));break}}t=t.return}}function bv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(ge&n)===n&&(ce===4||ce===3&&(ge&130023424)===ge&&500>ae()-jl?on(e,0):_l|=n),Ie(e,t)}function op(e,t){t===0&&(e.mode&1?(t=fi,fi<<=1,!(fi&130023424)&&(fi=4194304)):t=1);var n=Ee();e=gt(e,t),e!==null&&(qr(e,t,n),Ie(e,n))}function kv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),op(e,n)}function Ev(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),op(e,n)}var ap;ap=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,fv(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,J&&t.flags&1048576&&cd(t,lo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bi(e,t),e=t.pendingProps;var i=Gn(t,be.current);Rn(t,n),i=zl(null,t,r,e,i,n);var o=Nl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(o=!0,ao(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,El(t),i.updater=Ro,t.stateNode=i,i._reactInternals=t,ys(t,r,e,n),t=Ss(null,t,r,!0,o,n)):(t.tag=0,J&&o&&gl(t),ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Av(r),e=Xe(r,e),i){case 0:t=xs(null,t,r,e,n);break e;case 1:t=rc(null,t,r,e,n);break e;case 11:t=tc(null,t,r,e,n);break e;case 14:t=nc(null,t,r,Xe(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),xs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),rc(e,t,r,i,n);case 3:e:{if(Gd(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,vd(e,t),fo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Wn(Error(_(423)),t),t=ic(e,t,r,n,i);break e}else if(r!==i){i=Wn(Error(_(424)),t),t=ic(e,t,r,n,i);break e}else for(Le=jt(t.stateNode.containerInfo.firstChild),_e=t,J=!0,Ke=null,n=md(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),r===i){t=yt(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return gd(t),e===null&&hs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,cs(r,i)?a=null:o!==null&&cs(r,o)&&(t.flags|=32),Bd(e,t),ke(e,t,a,n),t.child;case 6:return e===null&&hs(t),null;case 13:return Ud(e,t,n);case 4:return Cl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hn(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),tc(e,t,r,i,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Y(uo,r._currentValue),r._currentValue=a,o!==null)if(et(o.value,a)){if(o.children===i.children&&!ze.current){t=yt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=mt(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),vs(o.return,n,t),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(_(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),vs(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Rn(t,n),i=He(i),r=r(i),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,i=Xe(r,t.pendingProps),i=Xe(r.type,i),nc(e,t,r,i,n);case 15:return Vd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Bi(e,t),t.tag=1,Ne(r)?(e=!0,ao(t)):e=!1,Rn(t,n),Rd(t,r,i),ys(t,r,i,n),Ss(null,t,r,!0,e,n);case 19:return Hd(e,t,n);case 22:return $d(e,t,n)}throw Error(_(156,t.tag))};function sp(e,t){return Lf(e,t)}function Cv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,t,n,r){return new Cv(e,t,n,r)}function Vl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Av(e){if(typeof e=="function")return Vl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ol)return 11;if(e===al)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=Ge(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hi(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Vl(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case wn:return an(n.children,i,o,t);case il:a=8,i|=8;break;case Ba:return e=Ge(12,n,t,i|2),e.elementType=Ba,e.lanes=o,e;case Ga:return e=Ge(13,n,t,i),e.elementType=Ga,e.lanes=o,e;case Ua:return e=Ge(19,n,t,i),e.elementType=Ua,e.lanes=o,e;case gf:return Vo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hf:a=10;break e;case vf:a=9;break e;case ol:a=11;break e;case al:a=14;break e;case At:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ge(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function an(e,t,n,r){return e=Ge(7,e,r,t),e.lanes=n,e}function Vo(e,t,n,r){return e=Ge(22,e,r,t),e.elementType=gf,e.lanes=n,e.stateNode={isHidden:!1},e}function Ca(e,t,n){return e=Ge(6,e,null,t),e.lanes=n,e}function Aa(e,t,n){return t=Ge(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=aa(0),this.expirationTimes=aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $l(e,t,n,r,i,o,a,s,l){return e=new Tv(e,t,n,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ge(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},El(o),e}function Pv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lp(e){if(!e)return Bt;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ne(n))return ld(e,n,t)}return t}function up(e,t,n,r,i,o,a,s,l){return e=$l(n,r,!0,e,i,o,a,s,l),e.context=lp(null),n=e.current,r=Ee(),i=Dt(n),o=mt(r,i),o.callback=t??null,Rt(n,o,i),e.current.lanes=i,qr(e,i,r),Ie(e,r),e}function $o(e,t,n,r){var i=t.current,o=Ee(),a=Dt(i);return n=lp(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rt(i,t,a),e!==null&&(Je(e,i,a,o),Di(e,i,a)),a}function xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bl(e,t){mc(e,t),(e=e.alternate)&&mc(e,t)}function zv(){return null}var cp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gl(e){this._internalRoot=e}Bo.prototype.render=Gl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));$o(e,t,null,null)};Bo.prototype.unmount=Gl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){$o(null,e,null,null)}),t[vt]=null}};function Bo(e){this._internalRoot=e}Bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=$f();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&Gf(e)}};function Ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hc(){}function Nv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=xo(a);o.call(c)}}var a=up(t,r,e,0,null,!1,!1,"",hc);return e._reactRootContainer=a,e[vt]=a.current,_r(e.nodeType===8?e.parentNode:e),fn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=xo(l);s.call(c)}}var l=$l(e,0,!1,null,null,!1,!1,"",hc);return e._reactRootContainer=l,e[vt]=l.current,_r(e.nodeType===8?e.parentNode:e),fn(function(){$o(t,l,n,r)}),l}function Uo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var l=xo(a);s.call(l)}}$o(t,a,e,i)}else a=Nv(n,t,e,i,r);return xo(a)}Df=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(ul(t,n|1),Ie(t,ae()),!(U&6)&&(Xn=ae()+500,Xt()))}break;case 13:fn(function(){var r=gt(e,1);if(r!==null){var i=Ee();Je(r,e,1,i)}}),Bl(e,1)}};cl=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var n=Ee();Je(t,e,134217728,n)}Bl(e,134217728)}};Vf=function(e){if(e.tag===13){var t=Dt(e),n=gt(e,t);if(n!==null){var r=Ee();Je(n,e,t,r)}Bl(e,t)}};$f=function(){return H};Bf=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};es=function(e,t,n){switch(t){case"input":if(Wa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Lo(r);if(!i)throw Error(_(90));wf(r),Wa(r,i)}}}break;case"textarea":Sf(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};Pf=Rl;zf=fn;var Iv={usingClientEntryPoint:!1,Events:[Jr,kn,Lo,Af,Tf,Rl]},lr={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mv={bundleType:lr.bundleType,version:lr.version,rendererPackageName:lr.rendererPackageName,rendererConfig:lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mf(e),e===null?null:e.stateNode},findFiberByHostInstance:lr.findFiberByHostInstance||zv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bi.isDisabled&&bi.supportsFiber)try{No=bi.inject(Mv),st=bi}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iv;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ul(t))throw Error(_(200));return Pv(e,t,null,n)};Re.createRoot=function(e,t){if(!Ul(e))throw Error(_(299));var n=!1,r="",i=cp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$l(e,1,!1,null,null,n,!1,r,i),e[vt]=t.current,_r(e.nodeType===8?e.parentNode:e),new Gl(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Mf(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return fn(e)};Re.hydrate=function(e,t,n){if(!Go(t))throw Error(_(200));return Uo(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!Ul(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=cp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=up(t,null,e,1,n??null,i,!1,o,a),e[vt]=t.current,_r(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Bo(t)};Re.render=function(e,t,n){if(!Go(t))throw Error(_(200));return Uo(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!Go(e))throw Error(_(40));return e._reactRootContainer?(fn(function(){Uo(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1};Re.unstable_batchedUpdates=Rl;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Go(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Uo(e,t,n,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function fp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fp)}catch(e){console.error(e)}}fp(),ff.exports=Re;var Ov=ff.exports,vc=Ov;$n.createRoot=vc.createRoot,$n.hydrateRoot=vc.hydrateRoot;var Ho={prefix:"fas",iconName:"circle-chevron-right",icon:[512,512,["chevron-circle-right"],"f138","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"]},Lv={prefix:"fas",iconName:"angles-down",icon:[448,512,["angle-double-down"],"f103","M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"]},_v={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]},Yo=_v,Hl={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},jv={prefix:"fas",iconName:"volume-xmark",icon:[576,512,["volume-mute","volume-times"],"f6a9","M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},Wo=jv,Rv={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Xo=Rv,Qo={prefix:"fas",iconName:"circle-chevron-left",icon:[512,512,["chevron-circle-left"],"f137","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"]};function gc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gc(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function So(e){"@babel/helpers - typeof";return So=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},So(e)}function Fv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Dv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Vv(e,t,n){return t&&Dv(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yl(e,t){return Bv(e)||Uv(e,t)||dp(e,t)||Yv()}function ti(e){return $v(e)||Gv(e)||dp(e)||Hv()}function $v(e){if(Array.isArray(e))return Os(e)}function Bv(e){if(Array.isArray(e))return e}function Gv(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Uv(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,s;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw s}}return r}}function dp(e,t){if(e){if(typeof e=="string")return Os(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Os(e,t)}}function Os(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Hv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yc=function(){},Wl={},pp={},mp=null,hp={mark:yc,measure:yc};try{typeof window<"u"&&(Wl=window),typeof document<"u"&&(pp=document),typeof MutationObserver<"u"&&(mp=MutationObserver),typeof performance<"u"&&(hp=performance)}catch{}var Wv=Wl.navigator||{},wc=Wv.userAgent,xc=wc===void 0?"":wc,Gt=Wl,Z=pp,Sc=mp,ki=hp;Gt.document;var kt=!!Z.documentElement&&!!Z.head&&typeof Z.addEventListener=="function"&&typeof Z.createElement=="function",vp=~xc.indexOf("MSIE")||~xc.indexOf("Trident/"),Ei,Ci,Ai,Ti,Pi,wt="___FONT_AWESOME___",Ls=16,gp="fa",yp="svg-inline--fa",dn="data-fa-i2svg",_s="data-fa-pseudo-element",Xv="data-fa-pseudo-element-pending",Xl="data-prefix",Ql="data-icon",bc="fontawesome-i2svg",Qv="async",Kv=["HTML","HEAD","STYLE","SCRIPT"],wp=function(){try{return!0}catch{return!1}}(),K="classic",oe="sharp",Kl=[K,oe];function ni(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var Ur=ni((Ei={},fe(Ei,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),fe(Ei,oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Ei)),Hr=ni((Ci={},fe(Ci,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),fe(Ci,oe,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ci)),Yr=ni((Ai={},fe(Ai,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),fe(Ai,oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ai)),qv=ni((Ti={},fe(Ti,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),fe(Ti,oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ti)),Zv=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,xp="fa-layers-text",Jv=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,eg=ni((Pi={},fe(Pi,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),fe(Pi,oe,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Pi)),Sp=[1,2,3,4,5,6,7,8,9,10],tg=Sp.concat([11,12,13,14,15,16,17,18,19,20]),ng=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],nn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wr=new Set;Object.keys(Hr[K]).map(Wr.add.bind(Wr));Object.keys(Hr[oe]).map(Wr.add.bind(Wr));var rg=[].concat(Kl,ti(Wr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",nn.GROUP,nn.SWAP_OPACITY,nn.PRIMARY,nn.SECONDARY]).concat(Sp.map(function(e){return"".concat(e,"x")})).concat(tg.map(function(e){return"w-".concat(e)})),Er=Gt.FontAwesomeConfig||{};function ig(e){var t=Z.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function og(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Z&&typeof Z.querySelector=="function"){var ag=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ag.forEach(function(e){var t=Yl(e,2),n=t[0],r=t[1],i=og(ig(n));i!=null&&(Er[r]=i)})}var bp={styleDefault:"solid",familyDefault:"classic",cssPrefix:gp,replacementClass:yp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Er.familyPrefix&&(Er.cssPrefix=Er.familyPrefix);var Qn=R(R({},bp),Er);Qn.autoReplaceSvg||(Qn.observeMutations=!1);var V={};Object.keys(bp).forEach(function(e){Object.defineProperty(V,e,{enumerable:!0,set:function(n){Qn[e]=n,Cr.forEach(function(r){return r(V)})},get:function(){return Qn[e]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(t){Qn.cssPrefix=t,Cr.forEach(function(n){return n(V)})},get:function(){return Qn.cssPrefix}});Gt.FontAwesomeConfig=V;var Cr=[];function sg(e){return Cr.push(e),function(){Cr.splice(Cr.indexOf(e),1)}}var Ct=Ls,ot={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function lg(e){if(!(!e||!kt)){var t=Z.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Z.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return Z.head.insertBefore(t,r),e}}var ug="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xr(){for(var e=12,t="";e-- >0;)t+=ug[Math.random()*62|0];return t}function Jn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ql(e){return e.classList?Jn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function kp(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cg(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(kp(e[n]),'" ')},"").trim()}function Ko(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Zl(e){return e.size!==ot.size||e.x!==ot.x||e.y!==ot.y||e.rotate!==ot.rotate||e.flipX||e.flipY}function fg(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(a," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function dg(e){var t=e.transform,n=e.width,r=n===void 0?Ls:n,i=e.height,o=i===void 0?Ls:i,a=e.startCentered,s=a===void 0?!1:a,l="";return s&&vp?l+="translate(".concat(t.x/Ct-r/2,"em, ").concat(t.y/Ct-o/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ct,"em), calc(-50% + ").concat(t.y/Ct,"em)) "):l+="translate(".concat(t.x/Ct,"em, ").concat(t.y/Ct,"em) "),l+="scale(".concat(t.size/Ct*(t.flipX?-1:1),", ").concat(t.size/Ct*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var pg=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
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
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
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
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
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
  left: calc(var(--fa-li-width, 2em) * -1);
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
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
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
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
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
}`;function Ep(){var e=gp,t=yp,n=V.cssPrefix,r=V.replacementClass,i=pg;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var kc=!1;function Ta(){V.autoAddCss&&!kc&&(lg(Ep()),kc=!0)}var mg={mixout:function(){return{dom:{css:Ep,insertCss:Ta}}},hooks:function(){return{beforeDOMElementCreation:function(){Ta()},beforeI2svg:function(){Ta()}}}},xt=Gt||{};xt[wt]||(xt[wt]={});xt[wt].styles||(xt[wt].styles={});xt[wt].hooks||(xt[wt].hooks={});xt[wt].shims||(xt[wt].shims=[]);var qe=xt[wt],Cp=[],hg=function e(){Z.removeEventListener("DOMContentLoaded",e),bo=1,Cp.map(function(t){return t()})},bo=!1;kt&&(bo=(Z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Z.readyState),bo||Z.addEventListener("DOMContentLoaded",hg));function vg(e){kt&&(bo?setTimeout(e,0):Cp.push(e))}function ri(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?kp(e):"<".concat(t," ").concat(cg(r),">").concat(o.map(ri).join(""),"</").concat(t,">")}function Ec(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Pa=function(t,n,r,i){var o=Object.keys(t),a=o.length,s=n,l,c,f;for(r===void 0?(l=1,f=t[o[0]]):(l=0,f=r);l<a;l++)c=o[l],f=s(f,t[c],c,t);return f};function gg(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function js(e){var t=gg(e);return t.length===1?t[0].toString(16):null}function yg(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Cc(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Rs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=Cc(t);typeof qe.hooks.addPack=="function"&&!i?qe.hooks.addPack(e,Cc(t)):qe.styles[e]=R(R({},qe.styles[e]||{}),o),e==="fas"&&Rs("fa",t)}var zi,Ni,Ii,Nn=qe.styles,wg=qe.shims,xg=(zi={},fe(zi,K,Object.values(Yr[K])),fe(zi,oe,Object.values(Yr[oe])),zi),Jl=null,Ap={},Tp={},Pp={},zp={},Np={},Sg=(Ni={},fe(Ni,K,Object.keys(Ur[K])),fe(Ni,oe,Object.keys(Ur[oe])),Ni);function bg(e){return~rg.indexOf(e)}function kg(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!bg(i)?i:null}var Ip=function(){var t=function(o){return Pa(Nn,function(a,s,l){return a[l]=Pa(s,o,{}),a},{})};Ap=t(function(i,o,a){if(o[3]&&(i[o[3]]=a),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=a})}return i}),Tp=t(function(i,o,a){if(i[a]=a,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=a})}return i}),Np=t(function(i,o,a){var s=o[2];return i[a]=a,s.forEach(function(l){i[l]=a}),i});var n="far"in Nn||V.autoFetchSvg,r=Pa(wg,function(i,o){var a=o[0],s=o[1],l=o[2];return s==="far"&&!n&&(s="fas"),typeof a=="string"&&(i.names[a]={prefix:s,iconName:l}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Pp=r.names,zp=r.unicodes,Jl=qo(V.styleDefault,{family:V.familyDefault})};sg(function(e){Jl=qo(e.styleDefault,{family:V.familyDefault})});Ip();function eu(e,t){return(Ap[e]||{})[t]}function Eg(e,t){return(Tp[e]||{})[t]}function rn(e,t){return(Np[e]||{})[t]}function Mp(e){return Pp[e]||{prefix:null,iconName:null}}function Cg(e){var t=zp[e],n=eu("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ut(){return Jl}var tu=function(){return{prefix:null,iconName:null,rest:[]}};function qo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,i=Ur[r][e],o=Hr[r][e]||Hr[r][i],a=e in qe.styles?e:null;return o||a||null}var Ac=(Ii={},fe(Ii,K,Object.keys(Yr[K])),fe(Ii,oe,Object.keys(Yr[oe])),Ii);function Zo(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},fe(t,K,"".concat(V.cssPrefix,"-").concat(K)),fe(t,oe,"".concat(V.cssPrefix,"-").concat(oe)),t),a=null,s=K;(e.includes(o[K])||e.some(function(c){return Ac[K].includes(c)}))&&(s=K),(e.includes(o[oe])||e.some(function(c){return Ac[oe].includes(c)}))&&(s=oe);var l=e.reduce(function(c,f){var p=kg(V.cssPrefix,f);if(Nn[f]?(f=xg[s].includes(f)?qv[s][f]:f,a=f,c.prefix=f):Sg[s].indexOf(f)>-1?(a=f,c.prefix=qo(f,{family:s})):p?c.iconName=p:f!==V.replacementClass&&f!==o[K]&&f!==o[oe]&&c.rest.push(f),!i&&c.prefix&&c.iconName){var h=a==="fa"?Mp(c.iconName):{},v=rn(c.prefix,c.iconName);h.prefix&&(a=null),c.iconName=h.iconName||v||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Nn.far&&Nn.fas&&!V.autoFetchSvg&&(c.prefix="fas")}return c},tu());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===oe&&(Nn.fass||V.autoFetchSvg)&&(l.prefix="fass",l.iconName=rn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=Ut()||"fas"),l}var Ag=function(){function e(){Fv(this,e),this.definitions={}}return Vv(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){n.definitions[s]=R(R({},n.definitions[s]||{}),a[s]),Rs(s,a[s]);var l=Yr[K][s];l&&Rs(l,a[s]),Ip()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],s=a.prefix,l=a.iconName,c=a.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(p){typeof p=="string"&&(n[s][p]=c)}),n[s][l]=c}),n}}]),e}(),Tc=[],In={},Dn={},Tg=Object.keys(Dn);function Pg(e,t){var n=t.mixoutsTo;return Tc=e,In={},Object.keys(Dn).forEach(function(r){Tg.indexOf(r)===-1&&delete Dn[r]}),Tc.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),So(i[a])==="object"&&Object.keys(i[a]).forEach(function(s){n[a]||(n[a]={}),n[a][s]=i[a][s]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){In[a]||(In[a]=[]),In[a].push(o[a])})}r.provides&&r.provides(Dn)}),n}function Fs(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=In[e]||[];return o.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function pn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=In[e]||[];i.forEach(function(o){o.apply(null,n)})}function St(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Dn[e]?Dn[e].apply(null,t):void 0}function Ds(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ut();if(t)return t=rn(n,t)||t,Ec(Op.definitions,n,t)||Ec(qe.styles,n,t)}var Op=new Ag,zg=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,pn("noAuto")},Ng={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return kt?(pn("beforeI2svg",t),St("pseudoElements2svg",t),St("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,vg(function(){Mg({autoReplaceSvgRoot:n}),pn("watch",t)})}},Ig={icon:function(t){if(t===null)return null;if(So(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:rn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=qo(t[0]);return{prefix:r,iconName:rn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(V.cssPrefix,"-"))>-1||t.match(Zv))){var i=Zo(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ut(),iconName:rn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=Ut();return{prefix:o,iconName:rn(o,t)||t}}}},De={noAuto:zg,config:V,dom:Ng,parse:Ig,library:Op,findIconDefinition:Ds,toHtml:ri},Mg=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Z:n;(Object.keys(qe.styles).length>0||V.autoFetchSvg)&&kt&&V.autoReplaceSvg&&De.dom.i2svg({node:r})};function Jo(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ri(r)})}}),Object.defineProperty(e,"node",{get:function(){if(kt){var r=Z.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Og(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(Zl(a)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};i.style=Ko(R(R({},o),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Lg(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,a=o===!0?"".concat(t,"-").concat(V.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},i),{},{id:a}),children:r}]}]}function nu(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,p=e.extra,h=e.watchable,v=h===void 0?!1:h,g=r.found?r:n,y=g.width,b=g.height,u=i==="fak",d=[V.replacementClass,o?"".concat(V.cssPrefix,"-").concat(o):""].filter(function(P){return p.classes.indexOf(P)===-1}).filter(function(P){return P!==""||!!P}).concat(p.classes).join(" "),m={children:[],attributes:R(R({},p.attributes),{},{"data-prefix":i,"data-icon":o,class:d,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(b)})},w=u&&!~p.classes.indexOf("fa-fw")?{width:"".concat(y/b*16*.0625,"em")}:{};v&&(m.attributes[dn]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(f||Xr())},children:[l]}),delete m.attributes.title);var x=R(R({},m),{},{prefix:i,iconName:o,main:n,mask:r,maskId:c,transform:a,symbol:s,styles:R(R({},w),p.styles)}),E=r.found&&n.found?St("generateAbstractMask",x)||{children:[],attributes:{}}:St("generateAbstractIcon",x)||{children:[],attributes:{}},z=E.children,C=E.attributes;return x.children=z,x.attributes=C,s?Lg(x):Og(x)}function Pc(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,a=e.extra,s=e.watchable,l=s===void 0?!1:s,c=R(R(R({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});l&&(c[dn]="");var f=R({},a.styles);Zl(i)&&(f.transform=dg({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var p=Ko(f);p.length>0&&(c.style=p);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function _g(e){var t=e.content,n=e.title,r=e.extra,i=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Ko(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var za=qe.styles;function Vs(e){var t=e[0],n=e[1],r=e.slice(4),i=Yl(r,1),o=i[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(nn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(nn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(nn.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:a}}var jg={found:!1,width:512,height:512};function Rg(e,t){!wp&&!V.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function $s(e,t){var n=t;return t==="fa"&&V.styleDefault!==null&&(t=Ut()),new Promise(function(r,i){if(St("missingIconAbstract"),n==="fa"){var o=Mp(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&za[t]&&za[t][e]){var a=za[t][e];return r(Vs(a))}Rg(e,t),r(R(R({},jg),{},{icon:V.showMissingIcons&&e?St("missingIconAbstract")||{}:{}}))})}var zc=function(){},Bs=V.measurePerformance&&ki&&ki.mark&&ki.measure?ki:{mark:zc,measure:zc},mr='FA "6.5.2"',Fg=function(t){return Bs.mark("".concat(mr," ").concat(t," begins")),function(){return Lp(t)}},Lp=function(t){Bs.mark("".concat(mr," ").concat(t," ends")),Bs.measure("".concat(mr," ").concat(t),"".concat(mr," ").concat(t," begins"),"".concat(mr," ").concat(t," ends"))},ru={begin:Fg,end:Lp},Yi=function(){};function Nc(e){var t=e.getAttribute?e.getAttribute(dn):null;return typeof t=="string"}function Dg(e){var t=e.getAttribute?e.getAttribute(Xl):null,n=e.getAttribute?e.getAttribute(Ql):null;return t&&n}function Vg(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(V.replacementClass)}function $g(){if(V.autoReplaceSvg===!0)return Wi.replace;var e=Wi[V.autoReplaceSvg];return e||Wi.replace}function Bg(e){return Z.createElementNS("http://www.w3.org/2000/svg",e)}function Gg(e){return Z.createElement(e)}function _p(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Bg:Gg:n;if(typeof e=="string")return Z.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var o=e.children||[];return o.forEach(function(a){i.appendChild(_p(a,{ceFn:r}))}),i}function Ug(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Wi={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(_p(i),n)}),n.getAttribute(dn)===null&&V.keepOriginalSource){var r=Z.createComment(Ug(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ql(n).indexOf(V.replacementClass))return Wi.replace(t);var i=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(s,l){return l===V.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(s){return ri(s)}).join(`
`);n.setAttribute(dn,""),n.innerHTML=a}};function Ic(e){e()}function jp(e,t){var n=typeof t=="function"?t:Yi;if(e.length===0)n();else{var r=Ic;V.mutateApproach===Qv&&(r=Gt.requestAnimationFrame||Ic),r(function(){var i=$g(),o=ru.begin("mutate");e.map(i),o(),n()})}}var iu=!1;function Rp(){iu=!0}function Gs(){iu=!1}var ko=null;function Mc(e){if(Sc&&V.observeMutations){var t=e.treeCallback,n=t===void 0?Yi:t,r=e.nodeCallback,i=r===void 0?Yi:r,o=e.pseudoElementsCallback,a=o===void 0?Yi:o,s=e.observeMutationsRoot,l=s===void 0?Z:s;ko=new Sc(function(c){if(!iu){var f=Ut();Jn(c).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!Nc(p.addedNodes[0])&&(V.searchPseudoElements&&a(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&V.searchPseudoElements&&a(p.target.parentNode),p.type==="attributes"&&Nc(p.target)&&~ng.indexOf(p.attributeName))if(p.attributeName==="class"&&Dg(p.target)){var h=Zo(ql(p.target)),v=h.prefix,g=h.iconName;p.target.setAttribute(Xl,v||f),g&&p.target.setAttribute(Ql,g)}else Vg(p.target)&&i(p.target)})}}),kt&&ko.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Hg(){ko&&ko.disconnect()}function Yg(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),a=o[0],s=o.slice(1);return a&&s.length>0&&(r[a]=s.join(":").trim()),r},{})),n}function Wg(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Zo(ql(e));return i.prefix||(i.prefix=Ut()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Eg(i.prefix,e.innerText)||eu(i.prefix,js(e.innerText))),!i.iconName&&V.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Xg(e){var t=Jn(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return V.autoA11y&&(n?t["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(r||Xr()):(t["aria-hidden"]="true",t.focusable="false")),t}function Qg(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ot,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Wg(e),r=n.iconName,i=n.prefix,o=n.rest,a=Xg(e),s=Fs("parseNodeAttributes",{},e),l=t.styleParser?Yg(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:ot,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:a}},s)}var Kg=qe.styles;function Fp(e){var t=V.autoReplaceSvg==="nest"?Oc(e,{styleParser:!1}):Oc(e);return~t.extra.classes.indexOf(xp)?St("generateLayersText",e,t):St("generateSvgReplacementMutation",e,t)}var Ht=new Set;Kl.map(function(e){Ht.add("fa-".concat(e))});Object.keys(Ur[K]).map(Ht.add.bind(Ht));Object.keys(Ur[oe]).map(Ht.add.bind(Ht));Ht=ti(Ht);function Lc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!kt)return Promise.resolve();var n=Z.documentElement.classList,r=function(p){return n.add("".concat(bc,"-").concat(p))},i=function(p){return n.remove("".concat(bc,"-").concat(p))},o=V.autoFetchSvg?Ht:Kl.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Kg));o.includes("fa")||o.push("fa");var a=[".".concat(xp,":not([").concat(dn,"])")].concat(o.map(function(f){return".".concat(f,":not([").concat(dn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=Jn(e.querySelectorAll(a))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=ru.begin("onTree"),c=s.reduce(function(f,p){try{var h=Fp(p);h&&f.push(h)}catch(v){wp||v.name==="MissingIcon"&&console.error(v)}return f},[]);return new Promise(function(f,p){Promise.all(c).then(function(h){jp(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(h){l(),p(h)})})}function qg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Fp(e).then(function(n){n&&jp([n],t)})}function Zg(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ds(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ds(i||{})),e(r,R(R({},n),{},{mask:i}))}}var Jg=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?ot:r,o=n.symbol,a=o===void 0?!1:o,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,p=n.title,h=p===void 0?null:p,v=n.titleId,g=v===void 0?null:v,y=n.classes,b=y===void 0?[]:y,u=n.attributes,d=u===void 0?{}:u,m=n.styles,w=m===void 0?{}:m;if(t){var x=t.prefix,E=t.iconName,z=t.icon;return Jo(R({type:"icon"},t),function(){return pn("beforeDOMElementCreation",{iconDefinition:t,params:n}),V.autoA11y&&(h?d["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(g||Xr()):(d["aria-hidden"]="true",d.focusable="false")),nu({icons:{main:Vs(z),mask:l?Vs(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:E,transform:R(R({},ot),i),symbol:a,title:h,maskId:f,titleId:g,extra:{attributes:d,styles:w,classes:b}})})}},e0={mixout:function(){return{icon:Zg(Jg)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Lc,n.nodeCallback=qg,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Z:r,o=n.callback,a=o===void 0?function(){}:o;return Lc(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,a=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,p=r.maskId,h=r.extra;return new Promise(function(v,g){Promise.all([$s(i,s),f.iconName?$s(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var b=Yl(y,2),u=b[0],d=b[1];v([n,nu({icons:{main:u,mask:d},prefix:s,iconName:i,transform:l,symbol:c,maskId:p,title:o,titleId:a,extra:h,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.transform,s=n.styles,l=Ko(s);l.length>0&&(i.style=l);var c;return Zl(a)&&(c=St("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(c||o.icon),{children:r,attributes:i}}}},t0={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return Jo({type:"layer"},function(){pn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(s){Array.isArray(s)?s.map(function(l){a=a.concat(l.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(ti(o)).join(" ")},children:a}]})}}}},n0={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,a=r.classes,s=a===void 0?[]:a,l=r.attributes,c=l===void 0?{}:l,f=r.styles,p=f===void 0?{}:f;return Jo({type:"counter",content:n},function(){return pn("beforeDOMElementCreation",{content:n,params:r}),_g({content:n.toString(),title:o,extra:{attributes:c,styles:p,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(ti(s))}})})}}}},r0={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?ot:i,a=r.title,s=a===void 0?null:a,l=r.classes,c=l===void 0?[]:l,f=r.attributes,p=f===void 0?{}:f,h=r.styles,v=h===void 0?{}:h;return Jo({type:"text",content:n},function(){return pn("beforeDOMElementCreation",{content:n,params:r}),Pc({content:n,transform:R(R({},ot),o),title:s,extra:{attributes:p,styles:v,classes:["".concat(V.cssPrefix,"-layers-text")].concat(ti(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,a=r.extra,s=null,l=null;if(vp){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return V.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,Pc({content:n.innerHTML,width:s,height:l,transform:o,title:i,extra:a,watchable:!0})])}}},i0=new RegExp('"',"ug"),_c=[1105920,1112319];function o0(e){var t=e.replace(i0,""),n=yg(t,0),r=n>=_c[0]&&n<=_c[1],i=t.length===2?t[0]===t[1]:!1;return{value:js(i?t[0]:t),isSecondary:r||i}}function jc(e,t){var n="".concat(Xv).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=Jn(e.children),a=o.filter(function(z){return z.getAttribute(_s)===t})[0],s=Gt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Jv),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(a&&!l)return e.removeChild(a),r();if(l&&f!=="none"&&f!==""){var p=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?oe:K,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Hr[h][l[2].toLowerCase()]:eg[h][c],g=o0(p),y=g.value,b=g.isSecondary,u=l[0].startsWith("FontAwesome"),d=eu(v,y),m=d;if(u){var w=Cg(y);w.iconName&&w.prefix&&(d=w.iconName,v=w.prefix)}if(d&&!b&&(!a||a.getAttribute(Xl)!==v||a.getAttribute(Ql)!==m)){e.setAttribute(n,m),a&&e.removeChild(a);var x=Qg(),E=x.extra;E.attributes[_s]=t,$s(d,v).then(function(z){var C=nu(R(R({},x),{},{icons:{main:z,mask:tu()},prefix:v,iconName:m,extra:E,watchable:!0})),P=Z.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(P,e.firstChild):e.appendChild(P),P.outerHTML=C.map(function(k){return ri(k)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function a0(e){return Promise.all([jc(e,"::before"),jc(e,"::after")])}function s0(e){return e.parentNode!==document.head&&!~Kv.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(_s)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Rc(e){if(kt)return new Promise(function(t,n){var r=Jn(e.querySelectorAll("*")).filter(s0).map(a0),i=ru.begin("searchPseudoElements");Rp(),Promise.all(r).then(function(){i(),Gs(),t()}).catch(function(){i(),Gs(),n()})})}var l0={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Rc,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Z:r;V.searchPseudoElements&&Rc(i)}}},Fc=!1,u0={mixout:function(){return{dom:{unwatch:function(){Rp(),Fc=!0}}}},hooks:function(){return{bootstrap:function(){Mc(Fs("mutationObserverCallbacks",{}))},noAuto:function(){Hg()},watch:function(n){var r=n.observeMutationsRoot;Fc?Gs():Mc(Fs("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Dc=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),a=o[0],s=o.slice(1).join("-");if(a&&s==="h")return r.flipX=!0,r;if(a&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(a){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},c0={mixout:function(){return{parse:{transform:function(n){return Dc(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Dc(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,a=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),p={transform:"".concat(l," ").concat(c," ").concat(f)},h={transform:"translate(".concat(a/2*-1," -256)")},v={outer:s,inner:p,path:h};return{tag:"g",attributes:R({},v.outer),children:[{tag:"g",attributes:R({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),v.path)}]}]}}}},Na={x:0,y:0,width:"100%",height:"100%"};function Vc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function f0(e){return e.tag==="g"?e.children:[e]}var d0={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Zo(i.split(" ").map(function(a){return a.trim()})):tu();return o.prefix||(o.prefix=Ut()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.mask,s=n.maskId,l=n.transform,c=o.width,f=o.icon,p=a.width,h=a.icon,v=fg({transform:l,containerWidth:p,iconWidth:c}),g={tag:"rect",attributes:R(R({},Na),{},{fill:"white"})},y=f.children?{children:f.children.map(Vc)}:{},b={tag:"g",attributes:R({},v.inner),children:[Vc(R({tag:f.tag,attributes:R(R({},f.attributes),v.path)},y))]},u={tag:"g",attributes:R({},v.outer),children:[b]},d="mask-".concat(s||Xr()),m="clip-".concat(s||Xr()),w={tag:"mask",attributes:R(R({},Na),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,u]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:f0(h)},w]};return r.push(x,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},Na)}),{children:r,attributes:i}}}},p0={provides:function(t){var n=!1;Gt.matchMedia&&(n=Gt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=R(R({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:R(R({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:R(R({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:R(R({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},m0={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},h0=[mg,e0,t0,n0,r0,l0,u0,c0,d0,p0,m0];Pg(h0,{mixoutsTo:De});De.noAuto;De.config;De.library;De.dom;var Us=De.parse;De.findIconDefinition;De.toHtml;var v0=De.icon;De.layer;De.text;De.counter;var Dp={exports:{}},g0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",y0=g0,w0=y0;function Vp(){}function $p(){}$p.resetWarningCache=Vp;var x0=function(){function e(r,i,o,a,s,l){if(l!==w0){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:$p,resetWarningCache:Vp};return n.PropTypes=n,n};Dp.exports=x0();var S0=Dp.exports;const B=Zc(S0);function $c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$c(Object(n),!0).forEach(function(r){Mn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$c(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Eo(e){"@babel/helpers - typeof";return Eo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Eo(e)}function Mn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function k0(e,t){if(e==null)return{};var n=b0(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Hs(e){return E0(e)||C0(e)||A0(e)||T0()}function E0(e){if(Array.isArray(e))return Ys(e)}function C0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function A0(e,t){if(e){if(typeof e=="string")return Ys(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ys(e,t)}}function Ys(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P0(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,f=e.spinReverse,p=e.pulse,h=e.fixedWidth,v=e.inverse,g=e.border,y=e.listItem,b=e.flip,u=e.size,d=e.rotation,m=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":h,"fa-inverse":v,"fa-border":g,"fa-li":y,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},Mn(t,"fa-".concat(u),typeof u<"u"&&u!==null),Mn(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Mn(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Mn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(x){return w[x]?x:null}).filter(function(x){return x})}function z0(e){return e=e-0,e===e}function Bp(e){return z0(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var N0=["style"];function I0(e){return e.charAt(0).toUpperCase()+e.slice(1)}function M0(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Bp(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[I0(i)]=o:t[i]=o,t},{})}function Gp(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Gp(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var f=t.attributes[c];switch(c){case"class":l.attrs.className=f,delete t.attributes.class;break;case"style":l.attrs.style=M0(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[Bp(c)]=f}return l},{attrs:{}}),o=n.style,a=o===void 0?{}:o,s=k0(n,N0);return i.attrs.style=rt(rt({},i.attrs.style),a),e.apply(void 0,[t.tag,rt(rt({},i.attrs),s)].concat(Hs(r)))}var Up=!1;try{Up=!0}catch{}function O0(){if(!Up&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Bc(e){if(e&&Eo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Us.icon)return Us.icon(e);if(e===null)return null;if(e&&Eo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ia(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Mn({},e,t):{}}var Gc={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},te=Q.forwardRef(function(e,t){var n=rt(rt({},Gc),e),r=n.icon,i=n.mask,o=n.symbol,a=n.className,s=n.title,l=n.titleId,c=n.maskId,f=Bc(r),p=Ia("classes",[].concat(Hs(P0(n)),Hs((a||"").split(" ")))),h=Ia("transform",typeof n.transform=="string"?Us.transform(n.transform):n.transform),v=Ia("mask",Bc(i)),g=v0(f,rt(rt(rt(rt({},p),h),v),{},{symbol:o,title:s,titleId:l,maskId:c}));if(!g)return O0("Could not find icon",f),null;var y=g.abstract,b={ref:t};return Object.keys(n).forEach(function(u){Gc.hasOwnProperty(u)||(b[u]=n[u])}),L0(y[0],b)});te.displayName="FontAwesomeIcon";te.propTypes={beat:B.bool,border:B.bool,beatFade:B.bool,bounce:B.bool,className:B.string,fade:B.bool,flash:B.bool,mask:B.oneOfType([B.object,B.array,B.string]),maskId:B.string,fixedWidth:B.bool,inverse:B.bool,flip:B.oneOf([!0,!1,"horizontal","vertical","both"]),icon:B.oneOfType([B.object,B.array,B.string]),listItem:B.bool,pull:B.oneOf(["right","left"]),pulse:B.bool,rotation:B.oneOf([0,90,180,270]),shake:B.bool,size:B.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:B.bool,spinPulse:B.bool,spinReverse:B.bool,symbol:B.oneOfType([B.bool,B.string]),title:B.string,titleId:B.string,transform:B.oneOfType([B.string,B.object]),swapOpacity:B.bool};var L0=Gp.bind(null,Q.createElement);const _0=({videos:e,campaigns:t})=>{const[n,r]=T.useState(null),i=a=>{r(a)},o=()=>{r(null)};return S.jsx(S.Fragment,{children:S.jsxs("div",{className:"outer-grid",children:[S.jsx("div",{className:"grid",children:e.map((a,s)=>S.jsxs("div",{onClick:()=>i(s),children:[S.jsx("div",{className:"video-grid",children:S.jsx("video",{src:a,loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"})}),S.jsxs("div",{className:"video-content",children:[S.jsx("p",{className:"txt",children:t[s].campaignName}),S.jsxs("p",{className:"txt",children:["From ",t[s].offerPrice.currency,t[s].offerPrice.price]})]})]},s))}),n!==null&&S.jsx(j0,{campaigns:t,currentIndex:n,onClose:o})]})})},j0=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=T.useState(t),[o,a]=T.useState(0),[s,l]=T.useState({}),[c,f]=T.useState(!1),[p,h]=T.useState(!1),[v,g]=T.useState(null),[y,b]=T.useState(!1),u=T.useRef([]),d=T.useRef(null);T.useRef(null),T.useEffect(()=>{const M=new IntersectionObserver(I=>{I.forEach($=>{const de=u.current.indexOf($.target);$.isIntersecting?($.target.play(),a(de)):$.target.pause()})},{threshold:.5});return a(0),u.current.forEach(I=>{I&&M.observe(I)}),()=>{u.current.forEach(I=>{I&&M.unobserve(I)})}},[r]),T.useEffect(()=>{const M=u.current[o];M&&M.play()},[o]);const m=()=>{r!==null?r+1<e.length?(i(r+1),a(0)):(i(0),a(0)):e.length>0&&(i(0),a(0))},w=()=>{r!==null?r>0?(i(r-1),a(0)):(i(e.length-1),a(0)):e.length>0&&(i(e.length-1),a(0))},x=M=>{const I=u.current[M];I&&(I.paused?I.play():I.pause(),f(I.paused))},E=M=>{const I=u.current[M];I&&(I.muted=!I.muted,l($=>({...$,[M]:I.muted})))},z=M=>{clearTimeout(d.current)},C=(M,I)=>{M===0&&(g(I.duration),P(I.duration))},P=M=>{clearTimeout(d.current),d.current=setTimeout(()=>{h(!0),setTimeout(()=>{h(!1)},1e4)},M*1e3)},k=M=>{clearTimeout(d.current),M===0&&v&&P(v)},A=()=>{clearTimeout(d.current)},N=()=>{b(!y)},j=M=>{const I=M.split(`
`);return I.length>2?{truncated:I.slice(0,2).join(`
`),hasMore:!0}:{truncated:M,hasMore:!1}};return T.useEffect(()=>{a(0)},[r]),S.jsxs("div",{className:"whole123",children:[S.jsx("div",{className:"prevbtn123",onClick:w,children:S.jsx(te,{icon:Qo})}),S.jsx("div",{className:"nextbtn123",onClick:m,children:S.jsx(te,{icon:Ho})}),S.jsx("div",{className:"reelsContainer",children:e[r].videoId.map((M,I)=>S.jsxs("div",{className:"reel",children:[S.jsx("div",{className:"closediv123",children:S.jsx("button",{className:"closebtn123",onClick:n,children:S.jsx(te,{icon:Xo})})}),S.jsxs("div",{className:"video-container",children:[S.jsx("video",{ref:$=>u.current[I]=$,src:M,className:"ad",loop:!0,playsInline:!0,controls:!1,autoPlay:I===o,onClick:()=>x(I),onPause:()=>{A(),f(!0)},onPlay:()=>{k(I),f(!1)},onEnded:()=>z(),onLoadedMetadata:$=>C(I,$.target)}),c&&S.jsx(te,{icon:Hl,onClick:()=>x(I),className:"play-button123"}),S.jsxs("div",{className:"bookdiv123",children:[S.jsx("div",{className:"img1",children:S.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),S.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[S.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),S.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[y?e[r].campaignDetails:j(e[r].campaignDetails).truncated,j(e[r].campaignDetails).hasMore&&S.jsx("div",{children:S.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:N,children:y?" View Less":" View More"})})]}),S.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[r].offerPrice.currency,e[r].offerPrice.price]})]}),S.jsx("div",{className:"divbtn",children:S.jsx("a",{href:e[r].hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]}),S.jsx("div",{className:"functions",children:S.jsx(te,{icon:s[I]?Wo:Yo,className:"volume123",onClick:()=>E(I),style:{cursor:"pointer"}})})]},I))})]})},R0=()=>{const[e,t]=T.useState([]),[n,r]=T.useState([]);return T.useEffect(()=>{const o=document.getElementById("root-grid").dataset.campaignId;(async s=>{try{const c=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${s}`)).json(),f=c.campaigns.map(p=>p.videoId[0]);t(f),r(c.campaigns)}catch(l){console.error("Error fetching data:",l)}})(o)},[]),S.jsxs("div",{className:"App",children:[S.jsx("style",{children:`
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
.vid {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 3vh;
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
  width: 100%;

  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.199),
    rgba(0, 0, 0, 0.884)
  );
  border-radius: 3vh;
  font-size: 16px;
  font-weight: 600;
}

.video-content > .txt {
  color: white;
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
.video-container {
  height: 100%;
  width: 56vh;
  object-fit: cover;
  display: flex;
  align-items: center;
  border-radius: 20px;
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

  .carousel {
    display: flex;
    overflow-x: auto !important;
    overflow-y: hidden;
    scroll-behavior: smooth; /* Smooth scrolling */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
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


`}),S.jsx(_0,{videos:e,campaigns:n})]})},F0=({campaigns:e})=>{const t=T.useRef(null),[n,r]=T.useState(!1),[i,o]=T.useState(null),[a,s]=T.useState(0),[l,c]=T.useState(!1),[f,p]=T.useState(0),[h,v]=T.useState({}),[g,y]=T.useState(!1);T.useEffect(()=>{const A=t.current,N=()=>{y(A.paused),A.paused&&A.play()};return A&&(A.addEventListener("play",N),A.addEventListener("pause",N)),()=>{A&&(A.removeEventListener("play",N),A.removeEventListener("pause",N))}},[i,a,e]),T.useEffect(()=>{if(i!==null&&e[i]){const A=e[i];if(a<A.videoId.length){const N=A.videoId[a];t.current.src=N,t.current.play(),p(0),y(!1)}}},[i,a,e]),T.useEffect(()=>{const A=setInterval(()=>{t.current&&p(t.current.currentTime/t.current.duration*100)},100);return()=>clearInterval(A)},[a,i]),T.useEffect(()=>{t.current&&(t.current.muted=l)},[l]);const b=A=>{o(A),s(0)},u=()=>{if(v(A=>({...A,[`${i}-${a}`]:!0})),p(100),i!==null&&e[i]){const A=e[i];a+1<A.videoId.length?s(a+1):i+1<e.length?(o(i+1),s(0)):(o(null),s(0))}},d=()=>{i!==null?i+1<e.length?(o(i+1),s(0)):(o(0),s(0)):e.length>0&&(o(0),s(0))},m=()=>{i!==null?i>0?(o(i-1),s(0)):(o(e.length-1),s(0)):e.length>0&&(o(e.length-1),s(0))},w=()=>{i!==null&&e[i]&&a+1<e[i].videoId.length&&(v(A=>({...A,[`${i}-${a}`]:!0})),s(a+1))},x=()=>{i!==null&&e[i]&&a>0&&s(a-1)},E=()=>{c(A=>!A)},z=()=>{o(null),s(0),y(!1),c(!1)},C=A=>{const N=A.currentTarget.getBoundingClientRect(),j=A.clientX-N.left,M=N.width;j<M/2?x():w()},P=()=>{r(!n)},k=A=>{const N=A.split(`
`);return N.length>2?{truncated:N.slice(0,2).join(`
`),hasMore:!0}:{truncated:A,hasMore:!1}};return S.jsx(S.Fragment,{children:S.jsxs("div",{className:"storiesHeader",children:[S.jsx("div",{className:"outer",children:e.map((A,N)=>S.jsx("div",{onClick:()=>b(N),className:`inner ${i===N?"active":""} ${A.videoId.some((j,M)=>h[`${N}-${M}`])?"played":"not-played"}`,children:S.jsx("img",{src:A.campaignPhoto,alt:"Campaign",className:"campaign-photo"})},N))}),S.jsxs("div",{className:`topp ${i!==null?"active":""}`,children:[S.jsx("div",{className:"next",onClick:d,children:S.jsx(te,{icon:Ho})}),S.jsx("div",{className:"previous",onClick:m,children:S.jsx(te,{icon:Qo})}),S.jsx("div",{className:"outer-box",children:i!==null&&S.jsxs("div",{className:"boxed-video",children:[S.jsx("div",{className:"mute-unmute",onClick:E,children:l?S.jsx(te,{icon:Wo}):S.jsx(te,{icon:Yo})}),S.jsx("div",{className:"close-button",onClick:z,children:S.jsx(te,{className:"close",icon:Xo})}),S.jsx("div",{className:"progress-bar",children:e[i].videoId.map((A,N)=>S.jsx("div",{className:"progress",children:S.jsx("div",{className:"progress1",style:{width:`${N===a?f:h[`${i}-${N}`]?100:0}%`}})},N))}),S.jsx("video",{className:"boxed-video",ref:t,onClick:C,onEnded:u,autoPlay:!0,children:"Your browser does not support the video tag."}),S.jsxs("div",{className:"bookdiv",children:[S.jsx("div",{className:"img1",children:S.jsx("img",{className:"img",src:e[i].campaignPhoto,alt:"Campaign"})}),S.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[S.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[i].campaignName}),S.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[n?e[i].campaignDetails:k(e[i].campaignDetails).truncated,k(e[i].campaignDetails).hasMore&&S.jsx("div",{children:S.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:P,children:n?" View Less":" View More"})})]}),S.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[i].offerPrice.currency,e[i].offerPrice.price]})]}),S.jsx("div",{className:"divbtn",children:S.jsx("a",{href:e[i].hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]})})]})]})})};function D0(){T.useState([]);const[e,t]=T.useState([]);return T.useState(""),T.useEffect(()=>{const r=document.getElementById("root-stories").dataset.campaignId;r?(async o=>{try{const s=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${o}`)).json();t(s.campaigns)}catch(a){console.error("Error fetching data:",a)}})(r):console.log("no campaign id found!")},[]),S.jsxs("div",{className:"App1",children:[S.jsx("style",{children:` .root1 {
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
.outer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  padding: 1rem;
  border-radius: 1rem;
  scroll-behavior: smooth;
  cursor: pointer;
  /* position: absolute; */
}

.inner {
 height: 6vw;
    width: 6vw;
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

/* Hide scrollbar for IE, Edge, and Firefox */
.outer {
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
        height: 6rem;
        width: 6rem;
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
    }`}),S.jsx(F0,{campaigns:e})]})}function Uc(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function ou(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:Uc(t[n])&&Uc(e[n])&&Object.keys(t[n]).length>0&&ou(e[n],t[n])})}const Hp={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function er(){const e=typeof document<"u"?document:{};return ou(e,Hp),e}const V0={document:Hp,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Ve(){const e=typeof window<"u"?window:{};return ou(e,V0),e}function $0(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function B0(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Ws(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Co(){return Date.now()}function G0(e){const t=Ve();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function U0(e,t){t===void 0&&(t="x");const n=Ve();let r,i,o;const a=G0(e);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(s=>s.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Mi(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function H0(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Oe(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!H0(r)){const i=Object.keys(Object(r)).filter(o=>t.indexOf(o)<0);for(let o=0,a=i.length;o<a;o+=1){const s=i[o],l=Object.getOwnPropertyDescriptor(r,s);l!==void 0&&l.enumerable&&(Mi(e[s])&&Mi(r[s])?r[s].__swiper__?e[s]=r[s]:Oe(e[s],r[s]):!Mi(e[s])&&Mi(r[s])?(e[s]={},r[s].__swiper__?e[s]=r[s]:Oe(e[s],r[s])):e[s]=r[s])}}}return e}function Oi(e,t,n){e.style.setProperty(t,n)}function Yp(e){let{swiper:t,targetPosition:n,side:r}=e;const i=Ve(),o=-t.translate;let a=null,s;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=n>o?"next":"prev",f=(h,v)=>c==="next"&&h>=v||c==="prev"&&h<=v,p=()=>{s=new Date().getTime(),a===null&&(a=s);const h=Math.max(Math.min((s-a)/l,1),0),v=.5-Math.cos(h*Math.PI)/2;let g=o+v*(n-o);if(f(g,n)&&(g=n),t.wrapperEl.scrollTo({[r]:g}),f(g,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:g})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(p)};p()}function au(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function at(e,t){return t===void 0&&(t=""),[...e.children].filter(n=>n.matches(t))}function Ao(e){try{console.warn(e);return}catch{}}function Qr(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:$0(t)),n}function Y0(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function W0(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Mt(e,t){return Ve().getComputedStyle(e,null).getPropertyValue(t)}function To(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Wp(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Xs(e,t,n){const r=Ve();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function pe(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Xp(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=at(e.el,`.${r[i]}`)[0];o||(o=Qr("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}function X0(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function o(g){let y;return g&&typeof g=="string"&&t.isElement&&(y=t.el.querySelector(g),y)?y:(g&&(typeof g=="string"&&(y=[...document.querySelectorAll(g)]),t.params.uniqueNavElements&&typeof g=="string"&&y&&y.length>1&&t.el.querySelectorAll(g).length===1?y=t.el.querySelector(g):y&&y.length===1&&(y=y[0])),g&&!y?g:y)}function a(g,y){const b=t.params.navigation;g=pe(g),g.forEach(u=>{u&&(u.classList[y?"add":"remove"](...b.disabledClass.split(" ")),u.tagName==="BUTTON"&&(u.disabled=y),t.params.watchOverflow&&t.enabled&&u.classList[t.isLocked?"add":"remove"](b.lockClass))})}function s(){const{nextEl:g,prevEl:y}=t.navigation;if(t.params.loop){a(y,!1),a(g,!1);return}a(y,t.isBeginning&&!t.params.rewind),a(g,t.isEnd&&!t.params.rewind)}function l(g){g.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(g){g.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function f(){const g=t.params.navigation;if(t.params.navigation=Xp(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(g.nextEl||g.prevEl))return;let y=o(g.nextEl),b=o(g.prevEl);Object.assign(t.navigation,{nextEl:y,prevEl:b}),y=pe(y),b=pe(b);const u=(d,m)=>{d&&d.addEventListener("click",m==="next"?c:l),!t.enabled&&d&&d.classList.add(...g.lockClass.split(" "))};y.forEach(d=>u(d,"next")),b.forEach(d=>u(d,"prev"))}function p(){let{nextEl:g,prevEl:y}=t.navigation;g=pe(g),y=pe(y);const b=(u,d)=>{u.removeEventListener("click",d==="next"?c:l),u.classList.remove(...t.params.navigation.disabledClass.split(" "))};g.forEach(u=>b(u,"next")),y.forEach(u=>b(u,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?v():(f(),s())}),r("toEdge fromEdge lock unlock",()=>{s()}),r("destroy",()=>{p()}),r("enable disable",()=>{let{nextEl:g,prevEl:y}=t.navigation;if(g=pe(g),y=pe(y),t.enabled){s();return}[...g,...y].filter(b=>!!b).forEach(b=>b.classList.add(t.params.navigation.lockClass))}),r("click",(g,y)=>{let{nextEl:b,prevEl:u}=t.navigation;b=pe(b),u=pe(u);const d=y.target;let m=u.includes(d)||b.includes(d);if(t.isElement&&!m){const w=y.path||y.composedPath&&y.composedPath();w&&(m=w.find(x=>b.includes(x)||u.includes(x)))}if(t.params.navigation.hideOnClick&&!m){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===d||t.pagination.el.contains(d)))return;let w;b.length?w=b[0].classList.contains(t.params.navigation.hiddenClass):u.length&&(w=u[0].classList.contains(t.params.navigation.hiddenClass)),i(w===!0?"navigationShow":"navigationHide"),[...b,...u].filter(x=>!!x).forEach(x=>x.classList.toggle(t.params.navigation.hiddenClass))}});const h=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),f(),s()},v=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(t.navigation,{enable:h,disable:v,update:s,init:f,destroy:p})}function ur(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Q0(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:u=>u,formatFractionTotal:u=>u,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),t.pagination={el:null,bullets:[]};let a,s=0;function l(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function c(u,d){const{bulletActiveClass:m}=t.params.pagination;u&&(u=u[`${d==="prev"?"previous":"next"}ElementSibling`],u&&(u.classList.add(`${m}-${d}`),u=u[`${d==="prev"?"previous":"next"}ElementSibling`],u&&u.classList.add(`${m}-${d}-${d}`)))}function f(u){const d=u.target.closest(ur(t.params.pagination.bulletClass));if(!d)return;u.preventDefault();const m=To(d)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===m)return;t.slideToLoop(m)}else t.slideTo(m)}function p(){const u=t.rtl,d=t.params.pagination;if(l())return;let m=t.pagination.el;m=pe(m);let w,x;const E=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,z=t.params.loop?Math.ceil(E/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(x=t.previousRealIndex||0,w=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(w=t.snapIndex,x=t.previousSnapIndex):(x=t.previousIndex||0,w=t.activeIndex||0),d.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const C=t.pagination.bullets;let P,k,A;if(d.dynamicBullets&&(a=Xs(C[0],t.isHorizontal()?"width":"height"),m.forEach(N=>{N.style[t.isHorizontal()?"width":"height"]=`${a*(d.dynamicMainBullets+4)}px`}),d.dynamicMainBullets>1&&x!==void 0&&(s+=w-(x||0),s>d.dynamicMainBullets-1?s=d.dynamicMainBullets-1:s<0&&(s=0)),P=Math.max(w-s,0),k=P+(Math.min(C.length,d.dynamicMainBullets)-1),A=(k+P)/2),C.forEach(N=>{const j=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(M=>`${d.bulletActiveClass}${M}`)].map(M=>typeof M=="string"&&M.includes(" ")?M.split(" "):M).flat();N.classList.remove(...j)}),m.length>1)C.forEach(N=>{const j=To(N);j===w?N.classList.add(...d.bulletActiveClass.split(" ")):t.isElement&&N.setAttribute("part","bullet"),d.dynamicBullets&&(j>=P&&j<=k&&N.classList.add(...`${d.bulletActiveClass}-main`.split(" ")),j===P&&c(N,"prev"),j===k&&c(N,"next"))});else{const N=C[w];if(N&&N.classList.add(...d.bulletActiveClass.split(" ")),t.isElement&&C.forEach((j,M)=>{j.setAttribute("part",M===w?"bullet-active":"bullet")}),d.dynamicBullets){const j=C[P],M=C[k];for(let I=P;I<=k;I+=1)C[I]&&C[I].classList.add(...`${d.bulletActiveClass}-main`.split(" "));c(j,"prev"),c(M,"next")}}if(d.dynamicBullets){const N=Math.min(C.length,d.dynamicMainBullets+4),j=(a*N-a)/2-A*a,M=u?"right":"left";C.forEach(I=>{I.style[t.isHorizontal()?M:"top"]=`${j}px`})}}m.forEach((C,P)=>{if(d.type==="fraction"&&(C.querySelectorAll(ur(d.currentClass)).forEach(k=>{k.textContent=d.formatFractionCurrent(w+1)}),C.querySelectorAll(ur(d.totalClass)).forEach(k=>{k.textContent=d.formatFractionTotal(z)})),d.type==="progressbar"){let k;d.progressbarOpposite?k=t.isHorizontal()?"vertical":"horizontal":k=t.isHorizontal()?"horizontal":"vertical";const A=(w+1)/z;let N=1,j=1;k==="horizontal"?N=A:j=A,C.querySelectorAll(ur(d.progressbarFillClass)).forEach(M=>{M.style.transform=`translate3d(0,0,0) scaleX(${N}) scaleY(${j})`,M.style.transitionDuration=`${t.params.speed}ms`})}d.type==="custom"&&d.renderCustom?(C.innerHTML=d.renderCustom(t,w+1,z),P===0&&i("paginationRender",C)):(P===0&&i("paginationRender",C),i("paginationUpdate",C)),t.params.watchOverflow&&t.enabled&&C.classList[t.isLocked?"add":"remove"](d.lockClass)})}function h(){const u=t.params.pagination;if(l())return;const d=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let m=t.pagination.el;m=pe(m);let w="";if(u.type==="bullets"){let x=t.params.loop?Math.ceil(d/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&x>d&&(x=d);for(let E=0;E<x;E+=1)u.renderBullet?w+=u.renderBullet.call(t,E,u.bulletClass):w+=`<${u.bulletElement} ${t.isElement?'part="bullet"':""} class="${u.bulletClass}"></${u.bulletElement}>`}u.type==="fraction"&&(u.renderFraction?w=u.renderFraction.call(t,u.currentClass,u.totalClass):w=`<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`),u.type==="progressbar"&&(u.renderProgressbar?w=u.renderProgressbar.call(t,u.progressbarFillClass):w=`<span class="${u.progressbarFillClass}"></span>`),t.pagination.bullets=[],m.forEach(x=>{u.type!=="custom"&&(x.innerHTML=w||""),u.type==="bullets"&&t.pagination.bullets.push(...x.querySelectorAll(ur(u.bulletClass)))}),u.type!=="custom"&&i("paginationRender",m[0])}function v(){t.params.pagination=Xp(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const u=t.params.pagination;if(!u.el)return;let d;typeof u.el=="string"&&t.isElement&&(d=t.el.querySelector(u.el)),!d&&typeof u.el=="string"&&(d=[...document.querySelectorAll(u.el)]),d||(d=u.el),!(!d||d.length===0)&&(t.params.uniqueNavElements&&typeof u.el=="string"&&Array.isArray(d)&&d.length>1&&(d=[...t.el.querySelectorAll(u.el)],d.length>1&&(d=d.filter(m=>Wp(m,".swiper")[0]===t.el)[0])),Array.isArray(d)&&d.length===1&&(d=d[0]),Object.assign(t.pagination,{el:d}),d=pe(d),d.forEach(m=>{u.type==="bullets"&&u.clickable&&m.classList.add(...(u.clickableClass||"").split(" ")),m.classList.add(u.modifierClass+u.type),m.classList.add(t.isHorizontal()?u.horizontalClass:u.verticalClass),u.type==="bullets"&&u.dynamicBullets&&(m.classList.add(`${u.modifierClass}${u.type}-dynamic`),s=0,u.dynamicMainBullets<1&&(u.dynamicMainBullets=1)),u.type==="progressbar"&&u.progressbarOpposite&&m.classList.add(u.progressbarOppositeClass),u.clickable&&m.addEventListener("click",f),t.enabled||m.classList.add(u.lockClass)}))}function g(){const u=t.params.pagination;if(l())return;let d=t.pagination.el;d&&(d=pe(d),d.forEach(m=>{m.classList.remove(u.hiddenClass),m.classList.remove(u.modifierClass+u.type),m.classList.remove(t.isHorizontal()?u.horizontalClass:u.verticalClass),u.clickable&&(m.classList.remove(...(u.clickableClass||"").split(" ")),m.removeEventListener("click",f))})),t.pagination.bullets&&t.pagination.bullets.forEach(m=>m.classList.remove(...u.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const u=t.params.pagination;let{el:d}=t.pagination;d=pe(d),d.forEach(m=>{m.classList.remove(u.horizontalClass,u.verticalClass),m.classList.add(t.isHorizontal()?u.horizontalClass:u.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?b():(v(),h(),p())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&p()}),r("snapIndexChange",()=>{p()}),r("snapGridLengthChange",()=>{h(),p()}),r("destroy",()=>{g()}),r("enable disable",()=>{let{el:u}=t.pagination;u&&(u=pe(u),u.forEach(d=>d.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{p()}),r("click",(u,d)=>{const m=d.target,w=pe(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&w&&w.length>0&&!m.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&m===t.navigation.nextEl||t.navigation.prevEl&&m===t.navigation.prevEl))return;const x=w[0].classList.contains(t.params.pagination.hiddenClass);i(x===!0?"paginationShow":"paginationHide"),w.forEach(E=>E.classList.toggle(t.params.pagination.hiddenClass))}});const y=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:u}=t.pagination;u&&(u=pe(u),u.forEach(d=>d.classList.remove(t.params.pagination.paginationDisabledClass))),v(),h(),p()},b=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:u}=t.pagination;u&&(u=pe(u),u.forEach(d=>d.classList.add(t.params.pagination.paginationDisabledClass))),g()};Object.assign(t.pagination,{enable:y,disable:b,render:h,update:p,init:v,destroy:g})}function K0(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:o,overwriteParams:a,perspective:s,recreateShadows:l,getEffectParams:c}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),s&&s()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const p=a?a():{};Object.assign(n.params,p),Object.assign(n.originalParams,p)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(p,h)=>{n.params.effect===t&&o(h)}),r("transitionEnd",()=>{if(n.params.effect===t&&l){if(!c||!c().slideShadows)return;n.slides.forEach(p=>{p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>h.remove())}),l()}});let f;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(f=!0),requestAnimationFrame(()=>{f&&n.slides&&n.slides.length&&(i(),f=!1)}))})}function q0(e,t){const n=au(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function Hc(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,i=au(t);let o=i.querySelector(`.${r.split(" ").join(".")}`);return o||(o=Qr("div",r.split(" ")),i.append(o)),o}function Z0(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),K0({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:a,height:s,slides:l,slidesSizesGrid:c}=t,f=t.params.coverflowEffect,p=t.isHorizontal(),h=t.translate,v=p?-h+a/2:-h+s/2,g=p?f.rotate:-f.rotate,y=f.depth;for(let b=0,u=l.length;b<u;b+=1){const d=l[b],m=c[b],w=d.swiperSlideOffset,x=(v-w-m/2)/m,E=typeof f.modifier=="function"?f.modifier(x):x*f.modifier;let z=p?g*E:0,C=p?0:g*E,P=-y*Math.abs(E),k=f.stretch;typeof k=="string"&&k.indexOf("%")!==-1&&(k=parseFloat(f.stretch)/100*m);let A=p?0:k*E,N=p?k*E:0,j=1-(1-f.scale)*Math.abs(E);Math.abs(N)<.001&&(N=0),Math.abs(A)<.001&&(A=0),Math.abs(P)<.001&&(P=0),Math.abs(z)<.001&&(z=0),Math.abs(C)<.001&&(C=0),Math.abs(j)<.001&&(j=0),t.browser&&t.browser.need3dFix&&(Math.abs(z)/90%2===1&&(z+=.001),Math.abs(C)/90%2===1&&(C+=.001));const M=`translate3d(${N}px,${A}px,${P}px)  rotateX(${C}deg) rotateY(${z}deg) scale(${j})`,I=q0(f,d);if(I.style.transform=M,d.style.zIndex=-Math.abs(Math.round(E))+1,f.slideShadows){let $=p?d.querySelector(".swiper-slide-shadow-left"):d.querySelector(".swiper-slide-shadow-top"),de=p?d.querySelector(".swiper-slide-shadow-right"):d.querySelector(".swiper-slide-shadow-bottom");$||($=Hc("coverflow",d,p?"left":"top")),de||(de=Hc("coverflow",d,p?"right":"bottom")),$&&($.style.opacity=E>0?E:0),de&&(de.style.opacity=-E>0?-E:0)}}},setTransition:a=>{t.slides.map(l=>au(l)).forEach(l=>{l.style.transitionDuration=`${a}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${a}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}let Ma;function J0(){const e=Ve(),t=er();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Qp(){return Ma||(Ma=J0()),Ma}let Oa;function e1(e){let{userAgent:t}=e===void 0?{}:e;const n=Qp(),r=Ve(),i=r.navigator.platform,o=t||r.navigator.userAgent,a={ios:!1,android:!1},s=r.screen.width,l=r.screen.height,c=o.match(/(Android);?[\s\/]+([\d.]+)?/);let f=o.match(/(iPad).*OS\s([\d_]+)/);const p=o.match(/(iPod)(.*OS\s([\d_]+))?/),h=!f&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=i==="Win32";let g=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&g&&n.touch&&y.indexOf(`${s}x${l}`)>=0&&(f=o.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),g=!1),c&&!v&&(a.os="android",a.android=!0),(f||h||p)&&(a.os="ios",a.ios=!0),a}function Kp(e){return e===void 0&&(e={}),Oa||(Oa=e1(e)),Oa}let La;function t1(){const e=Ve(),t=Kp();let n=!1;function r(){const s=e.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(r()){const s=String(e.navigator.userAgent);if(s.includes("Version/")){const[l,c]=s.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));n=l<16||l===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),a=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:a,isWebView:i}}function n1(){return La||(La=t1()),La}function r1(e){let{swiper:t,on:n,emit:r}=e;const i=Ve();let o=null,a=null;const s=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(o=new ResizeObserver(p=>{a=i.requestAnimationFrame(()=>{const{width:h,height:v}=t;let g=h,y=v;p.forEach(b=>{let{contentBoxSize:u,contentRect:d,target:m}=b;m&&m!==t.el||(g=d?d.width:(u[0]||u).inlineSize,y=d?d.height:(u[0]||u).blockSize)}),(g!==h||y!==v)&&s()})}),o.observe(t.el))},c=()=>{a&&i.cancelAnimationFrame(a),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},f=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",s),i.addEventListener("orientationchange",f)}),n("destroy",()=>{c(),i.removeEventListener("resize",s),i.removeEventListener("orientationchange",f)})}function i1(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o=[],a=Ve(),s=function(f,p){p===void 0&&(p={});const h=a.MutationObserver||a.WebkitMutationObserver,v=new h(g=>{if(t.__preventObserver__)return;if(g.length===1){i("observerUpdate",g[0]);return}const y=function(){i("observerUpdate",g[0])};a.requestAnimationFrame?a.requestAnimationFrame(y):a.setTimeout(y,0)});v.observe(f,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:typeof p.childList>"u"?!0:p.childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),o.push(v)},l=()=>{if(t.params.observer){if(t.params.observeParents){const f=Wp(t.hostEl);for(let p=0;p<f.length;p+=1)s(f[p])}s(t.hostEl,{childList:t.params.observeSlideChildren}),s(t.wrapperEl,{attributes:!1})}},c=()=>{o.forEach(f=>{f.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",c)}var o1={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];t.apply(r,a)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return typeof o[0]=="string"||Array.isArray(o[0])?(t=o[0],n=o.slice(1,o.length),r=e):(t=o[0].events,n=o[0].data,r=o[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(c=>{c.apply(r,n)})}),e}};function a1(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Mt(r,"padding-left")||0,10)-parseInt(Mt(r,"padding-right")||0,10),n=n-parseInt(Mt(r,"padding-top")||0,10)-parseInt(Mt(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function s1(){const e=this;function t(k,A){return parseFloat(k.getPropertyValue(e.getDirectionLabel(A))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:o,rtlTranslate:a,wrongRTL:s}=e,l=e.virtual&&n.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,f=at(i,`.${e.params.slideClass}, swiper-slide`),p=l?e.virtual.slides.length:f.length;let h=[];const v=[],g=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(e));let b=n.slidesOffsetAfter;typeof b=="function"&&(b=n.slidesOffsetAfter.call(e));const u=e.snapGrid.length,d=e.slidesGrid.length;let m=n.spaceBetween,w=-y,x=0,E=0;if(typeof o>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*o:typeof m=="string"&&(m=parseFloat(m)),e.virtualSize=-m,f.forEach(k=>{a?k.style.marginLeft="":k.style.marginRight="",k.style.marginBottom="",k.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Oi(r,"--swiper-centered-offset-before",""),Oi(r,"--swiper-centered-offset-after",""));const z=n.grid&&n.grid.rows>1&&e.grid;z?e.grid.initSlides(f):e.grid&&e.grid.unsetSlides();let C;const P=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(k=>typeof n.breakpoints[k].slidesPerView<"u").length>0;for(let k=0;k<p;k+=1){C=0;let A;if(f[k]&&(A=f[k]),z&&e.grid.updateSlide(k,A,f),!(f[k]&&Mt(A,"display")==="none")){if(n.slidesPerView==="auto"){P&&(f[k].style[e.getDirectionLabel("width")]="");const N=getComputedStyle(A),j=A.style.transform,M=A.style.webkitTransform;if(j&&(A.style.transform="none"),M&&(A.style.webkitTransform="none"),n.roundLengths)C=e.isHorizontal()?Xs(A,"width"):Xs(A,"height");else{const I=t(N,"width"),$=t(N,"padding-left"),de=t(N,"padding-right"),O=t(N,"margin-left"),L=t(N,"margin-right"),D=N.getPropertyValue("box-sizing");if(D&&D==="border-box")C=I+O+L;else{const{clientWidth:W,offsetWidth:se}=A;C=I+$+de+O+L+(se-W)}}j&&(A.style.transform=j),M&&(A.style.webkitTransform=M),n.roundLengths&&(C=Math.floor(C))}else C=(o-(n.slidesPerView-1)*m)/n.slidesPerView,n.roundLengths&&(C=Math.floor(C)),f[k]&&(f[k].style[e.getDirectionLabel("width")]=`${C}px`);f[k]&&(f[k].swiperSlideSize=C),g.push(C),n.centeredSlides?(w=w+C/2+x/2+m,x===0&&k!==0&&(w=w-o/2-m),k===0&&(w=w-o/2-m),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),E%n.slidesPerGroup===0&&h.push(w),v.push(w)):(n.roundLengths&&(w=Math.floor(w)),(E-Math.min(e.params.slidesPerGroupSkip,E))%e.params.slidesPerGroup===0&&h.push(w),v.push(w),w=w+C+m),e.virtualSize+=C+m,x=C,E+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+b,a&&s&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+m}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),z&&e.grid.updateWrapperSize(C,h),!n.centeredSlides){const k=[];for(let A=0;A<h.length;A+=1){let N=h[A];n.roundLengths&&(N=Math.floor(N)),h[A]<=e.virtualSize-o&&k.push(N)}h=k,Math.floor(e.virtualSize-o)-Math.floor(h[h.length-1])>1&&h.push(e.virtualSize-o)}if(l&&n.loop){const k=g[0]+m;if(n.slidesPerGroup>1){const A=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),N=k*n.slidesPerGroup;for(let j=0;j<A;j+=1)h.push(h[h.length-1]+N)}for(let A=0;A<e.virtual.slidesBefore+e.virtual.slidesAfter;A+=1)n.slidesPerGroup===1&&h.push(h[h.length-1]+k),v.push(v[v.length-1]+k),e.virtualSize+=k}if(h.length===0&&(h=[0]),m!==0){const k=e.isHorizontal()&&a?"marginLeft":e.getDirectionLabel("marginRight");f.filter((A,N)=>!n.cssMode||n.loop?!0:N!==f.length-1).forEach(A=>{A.style[k]=`${m}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let k=0;g.forEach(N=>{k+=N+(m||0)}),k-=m;const A=k-o;h=h.map(N=>N<=0?-y:N>A?A+b:N)}if(n.centerInsufficientSlides){let k=0;g.forEach(N=>{k+=N+(m||0)}),k-=m;const A=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(k+A<o){const N=(o-k-A)/2;h.forEach((j,M)=>{h[M]=j-N}),v.forEach((j,M)=>{v[M]=j+N})}}if(Object.assign(e,{slides:f,snapGrid:h,slidesGrid:v,slidesSizesGrid:g}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Oi(r,"--swiper-centered-offset-before",`${-h[0]}px`),Oi(r,"--swiper-centered-offset-after",`${e.size/2-g[g.length-1]/2}px`);const k=-e.snapGrid[0],A=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(N=>N+k),e.slidesGrid=e.slidesGrid.map(N=>N+A)}if(p!==c&&e.emit("slidesLengthChange"),h.length!==u&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==d&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const k=`${n.containerModifierClass}backface-hidden`,A=e.el.classList.contains(k);p<=n.maxBackfaceHiddenSlides?A||e.el.classList.add(k):A&&e.el.classList.remove(k)}}function l1(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const a=s=>r?t.slides[t.getSlideIndexByData(s)]:t.slides[s];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(s=>{n.push(s)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const s=t.activeIndex+o;if(s>t.slides.length&&!r)break;n.push(a(s))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const s=n[o].offsetHeight;i=s>i?s:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function u1(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Yc=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function c1(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;i&&(a=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s=="string"&&s.indexOf("%")>=0?s=parseFloat(s.replace("%",""))/100*t.size:typeof s=="string"&&(s=parseFloat(s));for(let l=0;l<r.length;l+=1){const c=r[l];let f=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(f-=r[0].swiperSlideOffset);const p=(a+(n.centeredSlides?t.minTranslate():0)-f)/(c.swiperSlideSize+s),h=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-f)/(c.swiperSlideSize+s),v=-(a-f),g=v+t.slidesSizesGrid[l],y=v>=0&&v<=t.size-t.slidesSizesGrid[l],b=v>=0&&v<t.size-1||g>1&&g<=t.size||v<=0&&g>=t.size;b&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l)),Yc(c,b,n.slideVisibleClass),Yc(c,y,n.slideFullyVisibleClass),c.progress=i?-p:p,c.originalProgress=i?-h:h}}function f1(e){const t=this;if(typeof e>"u"){const f=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*f||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:a,progressLoop:s}=t;const l=o,c=a;if(r===0)i=0,o=!0,a=!0;else{i=(e-t.minTranslate())/r;const f=Math.abs(e-t.minTranslate())<1,p=Math.abs(e-t.maxTranslate())<1;o=f||i<=0,a=p||i>=1,f&&(i=0),p&&(i=1)}if(n.loop){const f=t.getSlideIndexByData(0),p=t.getSlideIndexByData(t.slides.length-1),h=t.slidesGrid[f],v=t.slidesGrid[p],g=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=h?s=(y-h)/g:s=(y+g-v)/g,s>1&&(s-=1)}Object.assign(t,{progress:i,progressLoop:s,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!l&&t.emit("reachBeginning toEdge"),a&&!c&&t.emit("reachEnd toEdge"),(l&&!o||c&&!a)&&t.emit("fromEdge"),t.emit("progress",i)}const _a=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function d1(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,a=e.grid&&n.grid&&n.grid.rows>1,s=p=>at(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];let l,c,f;if(o)if(n.loop){let p=i-e.virtual.slidesBefore;p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),l=s(`[data-swiper-slide-index="${p}"]`)}else l=s(`[data-swiper-slide-index="${i}"]`);else a?(l=t.filter(p=>p.column===i)[0],f=t.filter(p=>p.column===i+1)[0],c=t.filter(p=>p.column===i-1)[0]):l=t[i];l&&(a||(f=W0(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!f&&(f=t[0]),c=Y0(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(p=>{_a(p,p===l,n.slideActiveClass),_a(p,p===f,n.slideNextClass),_a(p,p===c,n.slidePrevClass)}),e.emitSlidesClasses()}const Xi=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},ja=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Qs=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const a=i,s=[a-t];s.push(...Array.from({length:t}).map((l,c)=>a+r+c)),e.slides.forEach((l,c)=>{s.includes(l.column)&&ja(e,c)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let a=i-t;a<=o+t;a+=1){const s=(a%n+n)%n;(s<i||s>o)&&ja(e,s)}else for(let a=Math.max(i-t,0);a<=Math.min(o+t,n-1);a+=1)a!==i&&(a>o||a<i)&&ja(e,a)};function p1(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function m1(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:a,snapIndex:s}=t;let l=e,c;const f=v=>{let g=v-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof l>"u"&&(l=p1(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const v=Math.min(i.slidesPerGroupSkip,l);c=v+Math.floor((l-v)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),l===o&&!t.params.loop){c!==s&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(l===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=f(l);return}const p=t.grid&&i.grid&&i.grid.rows>1;let h;if(t.virtual&&i.virtual.enabled&&i.loop)h=f(l);else if(p){const v=t.slides.filter(y=>y.column===l)[0];let g=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(v),0)),h=Math.floor(g/i.grid.rows)}else if(t.slides[l]){const v=t.slides[l].getAttribute("data-swiper-slide-index");v?h=parseInt(v,10):h=l}else h=l;Object.assign(t,{previousSnapIndex:s,snapIndex:c,previousRealIndex:a,realIndex:h,previousIndex:o,activeIndex:l}),t.initialized&&Qs(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(a!==h&&t.emit("realIndexChange"),t.emit("slideChange"))}function h1(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(s=>{!i&&s.matches&&s.matches(`.${r.slideClass}, swiper-slide`)&&(i=s)});let o=!1,a;if(i){for(let s=0;s<n.slides.length;s+=1)if(n.slides[s]===i){o=!0,a=s;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=a;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var v1={updateSize:a1,updateSlides:s1,updateAutoHeight:l1,updateSlidesOffset:u1,updateSlidesProgress:c1,updateProgress:f1,updateSlidesClasses:d1,updateActiveIndex:m1,updateClickedSlide:h1};function g1(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=U0(o,e);return a+=t.cssOverflowAdjustment(),r&&(a=-a),a||0}function y1(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:a}=n;let s=0,l=0;const c=0;n.isHorizontal()?s=r?-e:e:l=e,i.roundLengths&&(s=Math.floor(s),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:l,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-s:-l:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${s}px, ${l}px, ${c}px)`);let f;const p=n.maxTranslate()-n.minTranslate();p===0?f=0:f=(e-n.minTranslate())/p,f!==a&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function w1(){return-this.snapGrid[0]}function x1(){return-this.snapGrid[this.snapGrid.length-1]}function S1(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const o=this,{params:a,wrapperEl:s}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;const l=o.minTranslate(),c=o.maxTranslate();let f;if(r&&e>l?f=l:r&&e<c?f=c:f=e,o.updateProgress(f),a.cssMode){const p=o.isHorizontal();if(t===0)s[p?"scrollLeft":"scrollTop"]=-f;else{if(!o.support.smoothScroll)return Yp({swiper:o,targetPosition:-f,side:p?"left":"top"}),!0;s.scrollTo({[p?"left":"top"]:-f,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(f),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(f),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(h){!o||o.destroyed||h.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var b1={getTranslate:g1,setTranslate:y1,minTranslate:w1,maxTranslate:x1,translateTo:S1};function k1(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function qp(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:o,previousIndex:a}=t;let s=r;if(s||(o>a?s="next":o<a?s="prev":s="reset"),t.emit(`transition${i}`),n&&o!==a){if(s==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),s==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function E1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),qp({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function C1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),qp({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var A1={setTransition:k1,transitionStart:E1,transitionEnd:C1};function T1(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;let a=e;a<0&&(a=0);const{params:s,snapGrid:l,slidesGrid:c,previousIndex:f,activeIndex:p,rtlTranslate:h,wrapperEl:v,enabled:g}=o;if(!g&&!r&&!i||o.destroyed||o.animating&&s.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const y=Math.min(o.params.slidesPerGroupSkip,a);let b=y+Math.floor((a-y)/o.params.slidesPerGroup);b>=l.length&&(b=l.length-1);const u=-l[b];if(s.normalizeSlideIndex)for(let m=0;m<c.length;m+=1){const w=-Math.floor(u*100),x=Math.floor(c[m]*100),E=Math.floor(c[m+1]*100);typeof c[m+1]<"u"?w>=x&&w<E-(E-x)/2?a=m:w>=x&&w<E&&(a=m+1):w>=x&&(a=m)}if(o.initialized&&a!==p&&(!o.allowSlideNext&&(h?u>o.translate&&u>o.minTranslate():u<o.translate&&u<o.minTranslate())||!o.allowSlidePrev&&u>o.translate&&u>o.maxTranslate()&&(p||0)!==a))return!1;a!==(f||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(u);let d;if(a>p?d="next":a<p?d="prev":d="reset",h&&-u===o.translate||!h&&u===o.translate)return o.updateActiveIndex(a),s.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),s.effect!=="slide"&&o.setTranslate(u),d!=="reset"&&(o.transitionStart(n,d),o.transitionEnd(n,d)),!1;if(s.cssMode){const m=o.isHorizontal(),w=h?u:-u;if(t===0){const x=o.virtual&&o.params.virtual.enabled;x&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),x&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[m?"scrollLeft":"scrollTop"]=w})):v[m?"scrollLeft":"scrollTop"]=w,x&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1})}else{if(!o.support.smoothScroll)return Yp({swiper:o,targetPosition:w,side:m?"left":"top"}),!0;v.scrollTo({[m?"left":"top"]:w,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(u),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,d),t===0?o.transitionEnd(n,d):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(w){!o||o.destroyed||w.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,d))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function P1(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let s;if(o){const h=a*i.params.grid.rows;s=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===h)[0].column}else s=i.getSlideIndexByData(a);const l=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c}=i.params;let f=i.params.slidesPerView;f==="auto"?f=i.slidesPerViewDynamic():(f=Math.ceil(parseFloat(i.params.slidesPerView,10)),c&&f%2===0&&(f=f+1));let p=l-s<f;if(c&&(p=p||s<Math.ceil(f/2)),r&&c&&i.params.slidesPerView!=="auto"&&!o&&(p=!1),p){const h=c?s<i.activeIndex?"prev":"next":s-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?s+1:s-l+1,slideRealIndex:h==="next"?i.realIndex:void 0})}if(o){const h=a*i.params.grid.rows;a=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===h)[0].column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,t,n,r)}),i}function z1(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:o,animating:a}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let s=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<o.slidesPerGroupSkip?1:s,c=r.virtual&&o.virtual.enabled;if(o.loop){if(a&&!c&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function N1(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:o,slidesGrid:a,rtlTranslate:s,enabled:l,animating:c}=r;if(!l||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const f=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!f&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=s?r.translate:-r.translate;function h(u){return u<0?-Math.floor(Math.abs(u)):Math.floor(u)}const v=h(p),g=o.map(u=>h(u));let y=o[g.indexOf(v)-1];if(typeof y>"u"&&i.cssMode){let u;o.forEach((d,m)=>{v>=d&&(u=m)}),typeof u<"u"&&(y=o[u>0?u-1:u])}let b=0;if(typeof y<"u"&&(b=a.indexOf(y),b<0&&(b=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(b=b-r.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),i.rewind&&r.isBeginning){const u=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(u,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(b,e,t,n)}),!0;return r.slideTo(b,e,t,n)}function I1(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function M1(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,o),s=a+Math.floor((o-a)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[s]){const c=i.snapGrid[s],f=i.snapGrid[s+1];l-c>(f-c)*r&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[s-1],f=i.snapGrid[s];l-c<=(f-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function O1(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,o;const a=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(at(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),Ws(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(at(n,`${a}[data-swiper-slide-index="${o}"]`)[0]),Ws(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var L1={slideTo:T1,slideToLoop:P1,slideNext:z1,slidePrev:N1,slideReset:I1,slideToClosest:M1,slideToClickedSlide:O1};function _1(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{at(r,`.${n.slideClass}, swiper-slide`).forEach((p,h)=>{p.setAttribute("data-swiper-slide-index",h)})},o=t.grid&&n.grid&&n.grid.rows>1,a=n.slidesPerGroup*(o?n.grid.rows:1),s=t.slides.length%a!==0,l=o&&t.slides.length%n.grid.rows!==0,c=f=>{for(let p=0;p<f;p+=1){const h=t.isElement?Qr("swiper-slide",[n.slideBlankClass]):Qr("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(h)}};if(s){if(n.loopAddBlankSlides){const f=a-t.slides.length%a;c(f),t.recalcSlides(),t.updateSlides()}else Ao("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const f=n.grid.rows-t.slides.length%n.grid.rows;c(f),t.recalcSlides(),t.updateSlides()}else Ao("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function j1(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:o,byController:a,byMousewheel:s}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:f,allowSlideNext:p,slidesEl:h,params:v}=l,{centeredSlides:g}=v;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&v.virtual.enabled){n&&(!v.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):v.centeredSlides&&l.snapIndex<v.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=f,l.allowSlideNext=p,l.emit("loopFix");return}let y=v.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(v.slidesPerView,10)),g&&y%2===0&&(y=y+1));const b=v.slidesPerGroupAuto?y:v.slidesPerGroup;let u=b;u%b!==0&&(u+=b-u%b),u+=v.loopAdditionalSlides,l.loopedSlides=u;const d=l.grid&&v.grid&&v.grid.rows>1;c.length<y+u?Ao("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):d&&v.grid.fill==="row"&&Ao("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const m=[],w=[];let x=l.activeIndex;typeof o>"u"?o=l.getSlideIndex(c.filter(j=>j.classList.contains(v.slideActiveClass))[0]):x=o;const E=r==="next"||!r,z=r==="prev"||!r;let C=0,P=0;const k=d?Math.ceil(c.length/v.grid.rows):c.length,N=(d?c[o].column:o)+(g&&typeof i>"u"?-y/2+.5:0);if(N<u){C=Math.max(u-N,b);for(let j=0;j<u-N;j+=1){const M=j-Math.floor(j/k)*k;if(d){const I=k-M-1;for(let $=c.length-1;$>=0;$-=1)c[$].column===I&&m.push($)}else m.push(k-M-1)}}else if(N+y>k-u){P=Math.max(N-(k-u*2),b);for(let j=0;j<P;j+=1){const M=j-Math.floor(j/k)*k;d?c.forEach((I,$)=>{I.column===M&&w.push($)}):w.push(M)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),z&&m.forEach(j=>{c[j].swiperLoopMoveDOM=!0,h.prepend(c[j]),c[j].swiperLoopMoveDOM=!1}),E&&w.forEach(j=>{c[j].swiperLoopMoveDOM=!0,h.append(c[j]),c[j].swiperLoopMoveDOM=!1}),l.recalcSlides(),v.slidesPerView==="auto"?l.updateSlides():d&&(m.length>0&&z||w.length>0&&E)&&l.slides.forEach((j,M)=>{l.grid.updateSlide(M,j,l.slides)}),v.watchSlidesProgress&&l.updateSlidesOffset(),n){if(m.length>0&&z){if(typeof t>"u"){const j=l.slidesGrid[x],I=l.slidesGrid[x+C]-j;s?l.setTranslate(l.translate-I):(l.slideTo(x+Math.ceil(C),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-I,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-I))}else if(i){const j=d?m.length/v.grid.rows:m.length;l.slideTo(l.activeIndex+j,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(w.length>0&&E)if(typeof t>"u"){const j=l.slidesGrid[x],I=l.slidesGrid[x-P]-j;s?l.setTranslate(l.translate-I):(l.slideTo(x-P,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-I,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-I))}else{const j=d?w.length/v.grid.rows:w.length;l.slideTo(l.activeIndex-j,0,!1,!0)}}if(l.allowSlidePrev=f,l.allowSlideNext=p,l.controller&&l.controller.control&&!a){const j={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(M=>{!M.destroyed&&M.params.loop&&M.loopFix({...j,slideTo:M.params.slidesPerView===v.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...j,slideTo:l.controller.control.params.slidesPerView===v.slidesPerView?n:!1})}l.emit("loopFix")}function R1(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var F1={loopCreate:_1,loopFix:j1,loopDestroy:R1};function D1(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function V1(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var $1={setGrabCursor:D1,unsetGrabCursor:V1};function B1(e,t){t===void 0&&(t=this);function n(r){if(!r||r===er()||r===Ve())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Wc(e,t,n){const r=Ve(),{params:i}=e,o=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return o&&(n<=a||n>=r.innerWidth-a)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function G1(e){const t=this,n=er();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Wc(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:a,enabled:s}=t;if(!s||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let l=r.target;if(o.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(l)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",f=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&f&&(l=f[0]);const p=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,h=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(h?B1(p,l):l.closest(p))){t.allowClick=!0;return}if(o.swipeHandler&&!l.closest(o.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const v=a.currentX,g=a.currentY;if(!Wc(t,r,v))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=v,a.startY=g,i.touchStartTime=Co(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let y=!0;l.matches(i.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const b=y&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||b)&&!l.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function U1(e){const t=er(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:s}=n;if(!s||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].filter(E=>E.identifier===r.touchId)[0],!c||c.identifier!==r.touchId)return}else c=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const f=c.pageX,p=c.pageY;if(l.preventedByNestedSwiper){o.startX=f,o.startY=p;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:f,startY:p,currentX:f,currentY:p}),r.touchStartTime=Co());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(p<o.startY&&n.translate<=n.maxTranslate()||p>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(f<o.startX&&n.translate<=n.maxTranslate()||f>o.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=f,o.currentY=p;const h=o.currentX-o.startX,v=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(h**2+v**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let E;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:h*h+v*v>=25&&(E=Math.atan2(Math.abs(v),Math.abs(h))*180/Math.PI,r.isScrolling=n.isHorizontal()?E>i.touchAngle:90-E>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||l.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let g=n.isHorizontal()?h:v,y=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(g=Math.abs(g)*(a?1:-1),y=Math.abs(y)*(a?1:-1)),o.diff=g,g*=i.touchRatio,a&&(g=-g,y=-y);const b=n.touchesDirection;n.swipeDirection=g>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const u=n.params.loop&&!i.cssMode,d=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(u&&d&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const E=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(E)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let m;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&b!==n.touchesDirection&&u&&d&&Math.abs(g)>=1){Object.assign(o,{startX:f,startY:p,currentX:f,currentY:p,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=g+r.startTranslate;let w=!0,x=i.resistanceRatio;if(i.touchReleaseOnEdges&&(x=0),g>0?(u&&d&&!m&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+g)**x))):g<0&&(u&&d&&!m&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-g)**x))),w&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(g)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function H1(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(x=>x.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:a,touches:s,rtlTranslate:l,slidesGrid:c,enabled:f}=t;if(!f||!a.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const p=Co(),h=p-n.touchStartTime;if(t.allowClick){const x=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(x&&x[0]||r.target,x),t.emit("tap click",r),h<300&&p-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=Co(),Ws(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||s.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let v;if(a.followFinger?v=l?t.translate:-t.translate:v=-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:v});return}const g=v>=-t.maxTranslate()&&!t.params.loop;let y=0,b=t.slidesSizesGrid[0];for(let x=0;x<c.length;x+=x<a.slidesPerGroupSkip?1:a.slidesPerGroup){const E=x<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[x+E]<"u"?(g||v>=c[x]&&v<c[x+E])&&(y=x,b=c[x+E]-c[x]):(g||v>=c[x])&&(y=x,b=c[c.length-1]-c[c.length-2])}let u=null,d=null;a.rewind&&(t.isBeginning?d=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(u=0));const m=(v-c[y])/b,w=y<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(h>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(m>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?u:y+w):t.slideTo(y)),t.swipeDirection==="prev"&&(m>1-a.longSwipesRatio?t.slideTo(y+w):d!==null&&m<0&&Math.abs(m)>a.longSwipesRatio?t.slideTo(d):t.slideTo(y))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+w):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(u!==null?u:y+w),t.swipeDirection==="prev"&&t.slideTo(d!==null?d:y))}}function Xc(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,a=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const s=a&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!a?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function Y1(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function W1(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function X1(e){const t=this;Xi(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function Q1(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Zp=(e,t)=>{const n=er(),{params:r,el:i,wrapperEl:o,device:a}=e,s=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;!i||typeof i=="string"||(n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:s}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:s}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:s}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&o[l]("scroll",e.onScroll),r.updateOnWindowResize?e[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Xc,!0):e[c]("observerUpdate",Xc,!0),i[l]("load",e.onLoad,{capture:!0}))};function K1(){const e=this,{params:t}=e;e.onTouchStart=G1.bind(e),e.onTouchMove=U1.bind(e),e.onTouchEnd=H1.bind(e),e.onDocumentTouchStart=Q1.bind(e),t.cssMode&&(e.onScroll=W1.bind(e)),e.onClick=Y1.bind(e),e.onLoad=X1.bind(e),Zp(e,"on")}function q1(){Zp(this,"off")}var Z1={attachEvents:K1,detachEvents:q1};const Qc=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function J1(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const a=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!a||e.currentBreakpoint===a)return;const l=(a in o?o[a]:void 0)||e.originalParams,c=Qc(e,r),f=Qc(e,l),p=e.params.grabCursor,h=l.grabCursor,v=r.enabled;c&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!h?e.unsetGrabCursor():!p&&h&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(m=>{if(typeof l[m]>"u")return;const w=r[m]&&r[m].enabled,x=l[m]&&l[m].enabled;w&&!x&&e[m].disable(),!w&&x&&e[m].enable()});const g=l.direction&&l.direction!==r.direction,y=r.loop&&(l.slidesPerView!==r.slidesPerView||g),b=r.loop;g&&n&&e.changeDirection(),Oe(e.params,l);const u=e.params.enabled,d=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),v&&!u?e.disable():!v&&u&&e.enable(),e.currentBreakpoint=a,e.emit("_beforeBreakpoint",l),n&&(y?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&d?(e.loopCreate(t),e.updateSlides()):b&&!d&&e.loopDestroy()),e.emit("breakpoint",l)}function ey(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=Ve(),o=t==="window"?i.innerHeight:n.clientHeight,a=Object.keys(e).map(s=>{if(typeof s=="string"&&s.indexOf("@")===0){const l=parseFloat(s.substr(1));return{value:o*l,point:s}}return{value:s,point:s}});a.sort((s,l)=>parseInt(s.value,10)-parseInt(l.value,10));for(let s=0;s<a.length;s+=1){const{point:l,value:c}=a[s];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=l):c<=n.clientWidth&&(r=l)}return r||"max"}var ty={setBreakpoint:J1,getBreakpoint:ey};function ny(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function ry(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,a=ny(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...a),i.classList.add(...t),e.emitContainerClasses()}function iy(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var oy={addClasses:ry,removeClasses:iy};function ay(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var sy={checkOverflow:ay},Ks={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ly(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Oe(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Oe(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Oe(t,r)}}const Ra={eventsEmitter:o1,update:v1,translate:b1,transition:A1,slide:L1,loop:F1,grabCursor:$1,events:Z1,breakpoints:ty,checkOverflow:sy,classes:oy},Fa={};let su=class ut{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=Oe({},n),t&&!n.el&&(n.el=t);const a=er();if(n.el&&typeof n.el=="string"&&a.querySelectorAll(n.el).length>1){const f=[];return a.querySelectorAll(n.el).forEach(p=>{const h=Oe({},n,{el:p});f.push(new ut(h))}),f}const s=this;s.__swiper__=!0,s.support=Qp(),s.device=Kp({userAgent:n.userAgent}),s.browser=n1(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const l={};s.modules.forEach(f=>{f({params:n,swiper:s,extendParams:ly(n,l),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const c=Oe({},Ks,l);return s.params=Oe({},c,Fa,n),s.originalParams=Oe({},s.params),s.passedParams=Oe({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach(f=>{s.on(f,s.params.on[f])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=at(n,`.${r.slideClass}, swiper-slide`),o=To(i[0]);return To(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=at(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*t+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:s,size:l,activeIndex:c}=r;let f=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let p=o[c]?Math.ceil(o[c].swiperSlideSize):0,h;for(let v=c+1;v<o.length;v+=1)o[v]&&!h&&(p+=Math.ceil(o[v].swiperSlideSize),f+=1,p>l&&(h=!0));for(let v=c-1;v>=0;v-=1)o[v]&&!h&&(p+=o[v].swiperSlideSize,f+=1,p>l&&(h=!0))}else if(t==="current")for(let p=c+1;p<o.length;p+=1)(n?a[p]+s[p]-a[c]<l:a[p]-a[c]<l)&&(f+=1);else for(let p=c-1;p>=0;p-=1)a[c]-a[p]<l&&(f+=1);return f}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Xi(t,a)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const a=t.rtlTranslate?t.translate*-1:t.translate,s=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(s),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const a=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(a.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):at(r,i())[0];return!a&&n.params.createElements&&(a=Qr("div",n.params.wrapperClass),r.append(a),at(r,`.${n.params.slideClass}`).forEach(s=>{a.append(s)})),Object.assign(n,{el:r,wrapperEl:a,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Mt(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Mt(r,"direction")==="rtl"),wrongRTL:Mt(a,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Xi(n,o):o.addEventListener("load",a=>{Xi(n,a.target)})}),Qs(n),n.initialized=!0,Qs(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:o,wrapperEl:a,slides:s}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),a&&a.removeAttribute("style"),s&&s.length&&s.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),B0(r)),r.destroyed=!0),null}static extendDefaults(t){Oe(Fa,t)}static get extendedDefaults(){return Fa}static get defaults(){return Ks}static installModule(t){ut.prototype.__modules__||(ut.prototype.__modules__=[]);const n=ut.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>ut.installModule(n)),ut):(ut.installModule(t),ut)}};Object.keys(Ra).forEach(e=>{Object.keys(Ra[e]).forEach(t=>{su.prototype[t]=Ra[e][t]})});su.use([r1,i1]);const Jp=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function mn(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Vn(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:mn(t[r])&&mn(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Vn(e[r],t[r]):e[r]=t[r]})}function em(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function tm(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function nm(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function rm(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function uy(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function cy(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:o,prevEl:a,scrollbarEl:s,paginationEl:l}=e;const c=i.filter(P=>P!=="children"&&P!=="direction"&&P!=="wrapperClass"),{params:f,pagination:p,navigation:h,scrollbar:v,virtual:g,thumbs:y}=t;let b,u,d,m,w,x,E,z;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&f.thumbs&&!f.thumbs.swiper&&(b=!0),i.includes("controller")&&r.controller&&r.controller.control&&f.controller&&!f.controller.control&&(u=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(f.pagination||f.pagination===!1)&&p&&!p.el&&(d=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||s)&&(f.scrollbar||f.scrollbar===!1)&&v&&!v.el&&(m=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||a)&&(r.navigation.nextEl||o)&&(f.navigation||f.navigation===!1)&&h&&!h.prevEl&&!h.nextEl&&(w=!0);const C=P=>{t[P]&&(t[P].destroy(),P==="navigation"?(t.isElement&&(t[P].prevEl.remove(),t[P].nextEl.remove()),f[P].prevEl=void 0,f[P].nextEl=void 0,t[P].prevEl=void 0,t[P].nextEl=void 0):(t.isElement&&t[P].el.remove(),f[P].el=void 0,t[P].el=void 0))};i.includes("loop")&&t.isElement&&(f.loop&&!r.loop?x=!0:!f.loop&&r.loop?E=!0:z=!0),c.forEach(P=>{if(mn(f[P])&&mn(r[P]))Object.assign(f[P],r[P]),(P==="navigation"||P==="pagination"||P==="scrollbar")&&"enabled"in r[P]&&!r[P].enabled&&C(P);else{const k=r[P];(k===!0||k===!1)&&(P==="navigation"||P==="pagination"||P==="scrollbar")?k===!1&&C(P):f[P]=r[P]}}),c.includes("controller")&&!u&&t.controller&&t.controller.control&&f.controller&&f.controller.control&&(t.controller.control=f.controller.control),i.includes("children")&&n&&g&&f.virtual.enabled?(g.slides=n,g.update(!0)):i.includes("virtual")&&g&&f.virtual.enabled&&(n&&(g.slides=n),g.update(!0)),i.includes("children")&&n&&f.loop&&(z=!0),b&&y.init()&&y.update(!0),u&&(t.controller.control=f.controller.control),d&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(f.pagination.el=l),p.init(),p.render(),p.update()),m&&(t.isElement&&(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-scrollbar"),s.part.add("scrollbar"),t.el.appendChild(s)),s&&(f.scrollbar.el=s),v.init(),v.updateSize(),v.setTranslate()),w&&(t.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),o.innerHTML=t.hostEl.constructor.nextButtonSvg,o.part.add("button-next"),t.el.appendChild(o)),(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-prev"),a.innerHTML=t.hostEl.constructor.prevButtonSvg,a.part.add("button-prev"),t.el.appendChild(a))),o&&(f.navigation.nextEl=o),a&&(f.navigation.prevEl=a),h.init(),h.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(x||z)&&t.loopDestroy(),(E||z)&&t.loopCreate(),t.update()}function fy(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};Vn(n,Ks),n._emitClasses=!0,n.init=!1;const o={},a=Jp.map(l=>l.replace(/_/,"")),s=Object.assign({},e);return Object.keys(s).forEach(l=>{typeof e[l]>"u"||(a.indexOf(l)>=0?mn(e[l])?(n[l]={},i[l]={},Vn(n[l],e[l]),Vn(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:o[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:o,events:r}}function dy(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:o,scrollbarEl:a,swiper:s}=e;em(t)&&r&&i&&(s.params.navigation.nextEl=r,s.originalParams.navigation.nextEl=r,s.params.navigation.prevEl=i,s.originalParams.navigation.prevEl=i),tm(t)&&o&&(s.params.pagination.el=o,s.originalParams.pagination.el=o),nm(t)&&a&&(s.params.scrollbar.el=a,s.originalParams.scrollbar.el=a),s.init(n)}function py(e,t,n,r,i){const o=[];if(!t)return o;const a=l=>{o.indexOf(l)<0&&o.push(l)};if(n&&r){const l=r.map(i),c=n.map(i);l.join("")!==c.join("")&&a("children"),r.length!==n.length&&a("children")}return Jp.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(mn(e[l])&&mn(t[l])){const c=Object.keys(e[l]),f=Object.keys(t[l]);c.length!==f.length?a(l):(c.forEach(p=>{e[l][p]!==t[l][p]&&a(l)}),f.forEach(p=>{e[l][p]!==t[l][p]&&a(l)}))}else e[l]!==t[l]&&a(l)}),o}const my=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Po(){return Po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Po.apply(this,arguments)}function im(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function om(e){const t=[];return Q.Children.toArray(e).forEach(n=>{im(n)?t.push(n):n.props&&n.props.children&&om(n.props.children).forEach(r=>t.push(r))}),t}function hy(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Q.Children.toArray(e).forEach(r=>{if(im(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=om(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function vy(e,t,n){if(!n)return null;const r=f=>{let p=f;return f<0?p=t.length+f:p>=t.length&&(p=p-t.length),p},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:a}=n,s=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,c=[];for(let f=s;f<l;f+=1)f>=o&&f<=a&&c.push(t[r(f)]);return c.map((f,p)=>Q.cloneElement(f,{swiper:e,style:i,key:f.props.virtualIndex||f.key||`slide-${p}`}))}function Ar(e,t){return typeof window>"u"?T.useEffect(e,t):T.useLayoutEffect(e,t)}const Kc=T.createContext(null),gy=T.createContext(null),am=T.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:o,onSwiper:a,...s}=e===void 0?{}:e,l=!1;const[c,f]=T.useState("swiper"),[p,h]=T.useState(null),[v,g]=T.useState(!1),y=T.useRef(!1),b=T.useRef(null),u=T.useRef(null),d=T.useRef(null),m=T.useRef(null),w=T.useRef(null),x=T.useRef(null),E=T.useRef(null),z=T.useRef(null),{params:C,passedParams:P,rest:k,events:A}=fy(s),{slides:N,slots:j}=hy(o),M=()=>{g(!v)};Object.assign(C.on,{_containerClasses(L,D){f(D)}});const I=()=>{Object.assign(C.on,A),l=!0;const L={...C};if(delete L.wrapperClass,u.current=new su(L),u.current.virtual&&u.current.params.virtual.enabled){u.current.virtual.slides=N;const D={cache:!1,slides:N,renderExternal:h,renderExternalUpdate:!1};Vn(u.current.params.virtual,D),Vn(u.current.originalParams.virtual,D)}};b.current||I(),u.current&&u.current.on("_beforeBreakpoint",M);const $=()=>{l||!A||!u.current||Object.keys(A).forEach(L=>{u.current.on(L,A[L])})},de=()=>{!A||!u.current||Object.keys(A).forEach(L=>{u.current.off(L,A[L])})};T.useEffect(()=>()=>{u.current&&u.current.off("_beforeBreakpoint",M)}),T.useEffect(()=>{!y.current&&u.current&&(u.current.emitSlidesClasses(),y.current=!0)}),Ar(()=>{if(t&&(t.current=b.current),!!b.current)return u.current.destroyed&&I(),dy({el:b.current,nextEl:w.current,prevEl:x.current,paginationEl:E.current,scrollbarEl:z.current,swiper:u.current},C),a&&!u.current.destroyed&&a(u.current),()=>{u.current&&!u.current.destroyed&&u.current.destroy(!0,!1)}},[]),Ar(()=>{$();const L=py(P,d.current,N,m.current,D=>D.key);return d.current=P,m.current=N,L.length&&u.current&&!u.current.destroyed&&cy({swiper:u.current,slides:N,passedParams:P,changedParams:L,nextEl:w.current,prevEl:x.current,scrollbarEl:z.current,paginationEl:E.current}),()=>{de()}}),Ar(()=>{my(u.current)},[p]);function O(){return C.virtual?vy(u.current,N,p):N.map((L,D)=>Q.cloneElement(L,{swiper:u.current,swiperSlideIndex:D}))}return Q.createElement(r,Po({ref:b,className:rm(`${c}${n?` ${n}`:""}`)},k),Q.createElement(gy.Provider,{value:u.current},j["container-start"],Q.createElement(i,{className:uy(C.wrapperClass)},j["wrapper-start"],O(),j["wrapper-end"]),em(C)&&Q.createElement(Q.Fragment,null,Q.createElement("div",{ref:x,className:"swiper-button-prev"}),Q.createElement("div",{ref:w,className:"swiper-button-next"})),nm(C)&&Q.createElement("div",{ref:z,className:"swiper-scrollbar"}),tm(C)&&Q.createElement("div",{ref:E,className:"swiper-pagination"}),j["container-end"]))});am.displayName="Swiper";const sm=T.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:o,zoom:a,lazy:s,virtualIndex:l,swiperSlideIndex:c,...f}=e===void 0?{}:e;const p=T.useRef(null),[h,v]=T.useState("swiper-slide"),[g,y]=T.useState(!1);function b(w,x,E){x===p.current&&v(E)}Ar(()=>{if(typeof c<"u"&&(p.current.swiperSlideIndex=c),t&&(t.current=p.current),!(!p.current||!o)){if(o.destroyed){h!=="swiper-slide"&&v("swiper-slide");return}return o.on("_slideClass",b),()=>{o&&o.off("_slideClass",b)}}}),Ar(()=>{o&&p.current&&!o.destroyed&&v(o.getSlideClasses(p.current))},[o]);const u={isActive:h.indexOf("swiper-slide-active")>=0,isVisible:h.indexOf("swiper-slide-visible")>=0,isPrev:h.indexOf("swiper-slide-prev")>=0,isNext:h.indexOf("swiper-slide-next")>=0},d=()=>typeof r=="function"?r(u):r,m=()=>{y(!0)};return Q.createElement(n,Po({ref:p,className:rm(`${h}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:m},f),a&&Q.createElement(Kc.Provider,{value:u},Q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof a=="number"?a:void 0},d(),s&&!g&&Q.createElement("div",{className:"swiper-lazy-preloader"}))),!a&&Q.createElement(Kc.Provider,{value:u},d(),s&&!g&&Q.createElement("div",{className:"swiper-lazy-preloader"})))});sm.displayName="SwiperSlide";const yy=({videos:e,campaigns:t})=>{const n=T.useRef(null);T.useRef([]),T.useState(!1);const[r,i]=T.useState(null),[o,a]=T.useState(!1),[s,l]=T.useState(!0),c=g=>{i(g)},f=()=>{i(null)},p=()=>{n.current.scrollBy({left:-n.current.clientWidth,behavior:"smooth"})},h=()=>{n.current.scrollBy({left:n.current.clientWidth,behavior:"smooth"})},v=()=>{const g=n.current.scrollLeft,y=n.current.scrollWidth-n.current.clientWidth;a(g>70),l(g<y-70)};return T.useEffect(()=>{const g=n.current;return g.addEventListener("scroll",v),v(),()=>{g.removeEventListener("scroll",v)}},[]),S.jsx(S.Fragment,{children:S.jsxs("div",{className:"container",children:[S.jsx("style",{children:`
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
.carousel-div123 {
  width: 100%;
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

.vid {
  border-radius: 20px;
  box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.75);
  width: 100%;
  object-fit: cover;
}

.video-container123 {
  height: 408px;
  width: 230px;
  object-fit: cover;
  border-radius: 20px;
  flex: 0 0 230px;
  margin-right: 10px;
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

@media (max-width: 450px) {
  .carousel-div123 {
    height: 12%;
    bottom: 60px;
  }

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

.carousel-div123 {
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

.vid {
  border-radius: 20px;
  box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.75);
  width: 100%;
  object-fit: cover;
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
.video-container {
  height: 100%;
  width: 56vh;
  object-fit: cover;
  display: flex;
  align-items: center;
  border-radius: 20px;
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


`}),S.jsxs(am,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:0,stretch:0,depth:100,modifier:2.5},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",clickable:!0},modules:[Z0,Q0,X0],className:"swiper_container",children:[e.map((g,y)=>S.jsx(S.Fragment,{children:S.jsx(sm,{onClick:()=>c(y),children:S.jsxs("div",{className:"video-container123",children:[S.jsx("video",{src:g,loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"}),S.jsx("div",{className:"carousel-div123",children:S.jsxs("p",{className:"txt2-123",children:[t[y].campaignName," ",S.jsx("br",{})," From"," ",t[y].offerPrice.currency,t[y].offerPrice.price]})})]})},y)})),S.jsxs("div",{className:"slider-controler",children:[S.jsx("div",{className:"swiper-button-prev slider-arrow",children:S.jsx("ion-icon",{name:"arrow-back-outline"})}),S.jsx("div",{className:"swiper-button-next slider-arrow",children:S.jsx("ion-icon",{name:"arrow-forward-outline"})}),S.jsx("div",{className:"swiper-pagination"})]})]}),o&&S.jsx("button",{className:"nav-btn123",onClick:p,children:"<"}),S.jsx("div",{className:"carousel",ref:n}),s&&S.jsx("button",{className:"nav-btn123",onClick:h,children:">"}),r!==null&&S.jsx(wy,{campaigns:t,currentIndex:r,onClose:f})]})})},wy=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=T.useState(t),[o,a]=T.useState(0),[s,l]=T.useState({}),[c,f]=T.useState(!1),[p,h]=T.useState(!1),[v,g]=T.useState(null),[y,b]=T.useState(!1),u=T.useRef([]),d=T.useRef(null);T.useRef(null),T.useEffect(()=>{const M=new IntersectionObserver(I=>{I.forEach($=>{const de=u.current.indexOf($.target);$.isIntersecting?($.target.play(),a(de)):$.target.pause()})},{threshold:.5});return a(0),u.current.forEach(I=>{I&&M.observe(I)}),()=>{u.current.forEach(I=>{I&&M.unobserve(I)})}},[r]),T.useEffect(()=>{const M=u.current[o];M&&M.play()},[o]);const m=()=>{r!==null?r+1<e.length?(i(r+1),a(0)):(i(0),a(0)):e.length>0&&(i(0),a(0))},w=()=>{r!==null?r>0?(i(r-1),a(0)):(i(e.length-1),a(0)):e.length>0&&(i(e.length-1),a(0))},x=M=>{const I=u.current[M];I&&(I.paused?I.play():I.pause(),f(I.paused))},E=M=>{const I=u.current[M];I&&(I.muted=!I.muted,l($=>({...$,[M]:I.muted})))},z=M=>{clearTimeout(d.current)},C=(M,I)=>{M===0&&(g(I.duration),P(I.duration))},P=M=>{clearTimeout(d.current),d.current=setTimeout(()=>{h(!0),setTimeout(()=>{h(!1)},1e4)},M*1e3)},k=M=>{clearTimeout(d.current),M===0&&v&&P(v)},A=()=>{clearTimeout(d.current)},N=()=>{b(!y)},j=M=>{const I=M.split(`
`);return I.length>2?{truncated:I.slice(0,2).join(`
`),hasMore:!0}:{truncated:M,hasMore:!1}};return T.useEffect(()=>{a(0)},[r]),S.jsxs("div",{className:"whole123",children:[S.jsx("div",{className:"prevbtn123",onClick:w,children:S.jsx(te,{icon:Qo})}),S.jsx("div",{className:"nextbtn123",onClick:m,children:S.jsx(te,{icon:Ho})}),S.jsx("div",{className:"reelsContainer",children:e[r].videoId.map((M,I)=>S.jsxs("div",{className:"reel",children:[S.jsx("div",{className:"closediv123",children:S.jsx("button",{className:"closebtn123",onClick:n,children:S.jsx(te,{icon:Xo})})}),S.jsxs("div",{className:"video-container",children:[S.jsx("video",{ref:$=>u.current[I]=$,src:M,className:"ad",loop:!0,playsInline:!0,controls:!1,autoPlay:I===o,onClick:()=>x(I),onPause:()=>{A(),f(!0)},onPlay:()=>{k(I),f(!1)},onEnded:()=>z(),onLoadedMetadata:$=>C(I,$.target)}),c&&S.jsx(te,{icon:Hl,onClick:()=>x(I),className:"play-button123"}),S.jsxs("div",{className:"bookdiv123",children:[S.jsx("div",{className:"img1",children:S.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),S.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[S.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),S.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[y?e[r].campaignDetails:j(e[r].campaignDetails).truncated,j(e[r].campaignDetails).hasMore&&S.jsx("div",{children:S.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:N,children:y?" View Less":" View More"})})]}),S.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[r].offerPrice.currency,e[r].offerPrice.price]})]}),S.jsx("div",{className:"divbtn",children:S.jsx("a",{href:e[r].hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]}),S.jsx("div",{className:"functions",children:S.jsx(te,{icon:s[I]?Wo:Yo,className:"volume123",onClick:()=>E(I),style:{cursor:"pointer"}})})]},I))})]})},xy=()=>{const[e,t]=T.useState([]),[n,r]=T.useState([]);return T.useEffect(()=>{const o=document.getElementById("root-carosole").dataset.campaignId;(async s=>{try{const c=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${s}`)).json(),f=c.campaigns.map(p=>p.videoId[0]);t(f),r(c.campaigns)}catch(l){console.error("Error fetching data:",l)}})(o)},[]),S.jsxs("div",{className:"App",children:[S.jsx(yy,{videos:e,campaigns:n})," "]})},Sy=({videos:e,campaigns:t})=>{const n=T.useRef(null),r=T.useRef([]),[i,o]=T.useState(null),[a,s]=T.useState(!1),[l,c]=T.useState(!0),f=y=>{o(y)},p=()=>{o(null)},h=()=>{n.current.scrollBy({left:-n.current.clientWidth,behavior:"smooth"})},v=()=>{n.current.scrollBy({left:n.current.clientWidth,behavior:"smooth"})},g=()=>{const y=n.current.scrollLeft,b=n.current.scrollWidth-n.current.clientWidth;s(y>70),c(y<b-70)};return T.useEffect(()=>{const y=n.current;return y.addEventListener("scroll",g),g(),()=>{y.removeEventListener("scroll",g)}},[]),S.jsxs("div",{className:"carousel-container",children:[S.jsx("style",{children:`
.carousel-div{
  width:100%;
  /* background-color: rgba(68, 21, 237, 0.616); */
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.199), rgba(0, 0, 0, 0.884));
  position:relative;
  display:grid;
  justify-content: center; 
  align-items: center;
  height:15%;
  bottom:61px;
  border-radius:20px;
  left:0px;
  font-size:16px;
  font-weight: 600;
}

.txt1{
  position: relative;
  top:1vh;
  color:white;
}

.txt2{
  position: relative;
  top:0vh;
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

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  max-height:10vh;
  transform: translate(-50%, -50%);
  font-size: 34px; 
  color: white;

}

.carousel-container {
  position: relative;
  left:2.5vw;
  width: 95vw; 
  height:408px;
  
}

.carousel {
  display: flex;
  overflow-x:auto !important;
  overflow-y:hidden;
  scroll-behavior: smooth; /* Smooth scrolling */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  height:408px;

}

.carousel::-webkit-scrollbar {
  display: none;  /* Chrome, Safari, and Opera */
}

.carousel-container::-webkit-scrollbar {
  display: none;  /* Chrome, Safari, and Opera */
}
  
.vid {
  border-radius:20px;
  box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.75);
  width: 100%; 
  object-fit: cover;
}

.video-container {

  height:408px;
  width:230px;
  object-fit: cover;
  border-radius:20px;
  flex: 0 0 230px; /* Adjust the width to fit 5 videos with a gap */
  margin-right: 10px; /* Adjust the gap between videos */
}

.video-container:last-child {
  margin-right: 0; /* Remove margin from the last video to prevent unnecessary gap */
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.694);
  color: black;
  font-weight:bolder;
  border: none;
  border-color: transparent;
  outline: none;
  cursor: pointer;
  padding: 25px 5px;
  padding-left:5px;
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

.nextbtn, .prevbtn{
  color:white;
  background-color:transparent;
  z-index:1000;
  border:none;
  font-size:7vh;

}



.whole {
  pointer-events: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(62, 61, 61);
  display: flex;
  z-index:1000000 !important;
  justify-content: center;
  align-items: center;
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

.ad {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  justify-content: center;
}

.reelsContainer {
  height: 100%;
  width: 100%;
  overflow: auto;
  flex-direction: column;
  scroll-snap-type: y mandatory;
}

.reel {
  height: 100%;
  width: 100%;
  scroll-snap-align: start;
  border-radius: 70px;
  position: relative;
  justify-content: center;
}

.closediv {
  position: absolute;
  top: 0vh;
  left: 50%; /* Move the div to the center horizontally */
  transform: translateX(-50%); /* Adjust the position to center */
  width: 56vh;
  height: 15vh;
  z-index:10;
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

.bookdiv {
  position: absolute;
  bottom: 1.5%;
  left: 50%; /* Move the div to the center horizontally */
  transform: translateX(-50%); /* Adjust the position to center */
  width: 53vh;
  min-height: 15vh;
  background-color: rgba(255, 255, 255, 0.863);
  border-radius: 10px;
  display:flex;
}

.img {
  position: absolute;
  top: 50%; /* Move the div to the center horizontally */
  transform: translateY(-50%);
  left: 4%;
  width: 22%;
  height:80%;
  border-radius: 10px;
}

.divbtn{
  width:20vh;
  min-height:100%;
  position: absolute;
  right:0px;
  
}

.bookbtn {
  background-color: rgb(114, 94, 205);
  color: white;
  border: none;
  border-radius: 5px;
  width: 11vh;
  height: 5vh;
  right: -13vh;
  position: relative;
  top: 5vh;
  transform: translateX(-50%);
  text-decoration: none;
  font-weight: bold;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 2.2vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text{
  display: block;
  position: relative;
  
  cursor: pointer;
  width:45%;
  right:-15vh;
}

.hotelname {
  position: relative;
  top: 1vh;
  color:black;
  padding-left: 0vh;
  font-weight: bolder;
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  font-size: 2.2vh;
}

.offer {
  position: relative;
  color:black;
  top:1vh;
  
  padding-left: 0vh;
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  font-size: 1.8vh;
}

.view-more{
  font-size:1.6vh;
  color: rgb(114, 94, 205);
  position: relative;
  top:-0.5vh;
  cursor: pointer;
}

.offerprice {
  position: relative;
  top:1vh;
  color:black;
  padding-left: 0vh;
  font-weight: bold;
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  font-size: 2vh;
}

.volume {
  position: absolute;
  right: 4%;
  top:1vh;
  font-size:3vh;
  color:white;
}

.closebtn {
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
    left:2.5vw;
    width: 95vw; 
    height:408px;
    
  }
  
  .carousel {
    display: flex;
    overflow-x:auto !important;
    overflow-y:hidden;
    scroll-behavior: smooth; /* Smooth scrolling */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    height:408px;
  
  }
  
  .carousel::-webkit-scrollbar {
    display: none;  /* Chrome, Safari, and Opera */
  }
  
  .vid {
    border-radius:20px;
    box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.75);
    width: 100%; 
    object-fit: cover;
  }
  
  .video-container {
  
    height:408px;
    width:230px;
    object-fit: cover;
    border-radius:20px;
    flex: 0 0 230px; /* Adjust the width to fit 5 videos with a gap */
    margin-right: 10px; /* Adjust the gap between videos */
  }

  .whole {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.831); /* semi-transparent black */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .reelsContainer {
    height: 100vh;
    width: 100vw; /* Ensure the reelsContainer takes the full width of the viewport */
    overflow: auto;
    flex-direction: column;
    scroll-snap-type: y mandatory;
    position: relative;
  }

  .reel {
    height: 100%;
    width: 100%; /* Ensure each reel takes the full width of the viewport */
    scroll-snap-align: start;
    border-radius: 40px;
    position: relative;
    justify-content: center;
  }

  .ad {
    height: 100%;
    width: 100%;
    object-fit: fill;
    border-radius: 10px;
    position: absolute;
    justify-content: center;
  }

  .nextbtn, .prevbtn {
    
    color: white;
    z-index: 1000;
    border: none;
    font-size: 10vw;
    position:absolute;

  }
  
  .nextbtn{
    right:0px;
  }

  .prevbtn{
    left:0px;
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

  .closediv {
    position: absolute;
    top: 1%;
    left: 50%;
    transform: translateX(-50%); 
    width: 100%;
    height: 10%;
    z-index: 30;
    display: grid;
  }

  .bookdiv {
    position: absolute;
    bottom: 1.5%;
    left: 50%; /* Move the div to the center horizontally */
    transform: translateX(-50%); /* Adjust the position to center */
    width: 100%;
    min-height: 15vh;
    background-color: rgba(255, 255, 255, 0.863);
    border-radius: 10px;
    display:flex;
  }
  
  .img {
    position: absolute;
    top: 50%; /* Move the div to the center horizontally */
    transform: translateY(-50%);
    left: 4%;
    width: 22%;
    height:80%;
    border-radius: 10px;
  }
  
  .divbtn{
    width:20vh;
    min-height:100%;
    position: absolute;
    right:0px;
    
  }
  
  .bookbtn {
    background-color: rgb(114, 94, 205);
    color: white;
    border: none;
    border-radius: 5px;
    width: 11vh;
    height: 5vh;
    right: -13vh;
    position: relative;
    top: 5vh;
    transform: translateX(-50%);
    text-decoration: none;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 2.2vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .text{
    display: block;
    position: relative;
    cursor: pointer;
    width:40%;
    right:-15vh;
  }
  
  .hotelname {
    position: relative;
    top: 1vh;
    color:black;
    padding-left: 0vh;
    font-weight: 700;
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    font-size: 2.2vh;
  }
  
  .offer {
    position: relative;
    color:black;
    top:1vh;
    padding-left: 0vh;
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    font-size: 1.8vh;
  }
  
  .view-more{
    font-size:1.6vh;
    color: rgb(114, 94, 205);
    position: relative;
    top:-0.5vh;
    cursor: pointer;
  }
  
  .offerprice {
    position: relative;
    top:0vh;
    color:black;
    padding-left: 0vh;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    font-size: 2vh;
  }

  .volume {
    position: absolute;
    right: 0%;
    top:3vh;
    font-size:2.5vh;
  }

  .closebtn {
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
  
}`}),a&&S.jsx("button",{className:"nav-btn",onClick:h,children:"<"}),S.jsx("div",{className:"carousel",ref:n,children:e.map((y,b)=>S.jsxs("div",{className:"video-container",onClick:()=>f(b),children:[S.jsx("video",{ref:u=>r.current[b]=u,src:y,loop:!0,muted:!0,autoPlay:!0,className:"vid"}),S.jsxs("div",{className:"carousel-div",children:[S.jsx("p",{className:"txt1",children:t[b].campaignName}),S.jsxs("p",{className:"txt2",children:["From ",t[b].offerPrice.currency,t[b].offerPrice.price]})]})]},b))}),l&&S.jsx("button",{className:"nav-btn",onClick:v,children:">"}),i!==null&&S.jsx(by,{campaigns:t,currentIndex:i,onClose:p})]})},by=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=T.useState(t),[o,a]=T.useState(0),[s,l]=T.useState({}),[c,f]=T.useState(!1),[p,h]=T.useState(!1),[v,g]=T.useState(null),[y,b]=T.useState(!1),u=T.useRef([]),d=T.useRef(null),m=T.useRef(null),w=window.innerWidth<=450;T.useEffect(()=>{const O=new IntersectionObserver(L=>{L.forEach(D=>{const W=u.current.indexOf(D.target);D.isIntersecting?(D.target.play(),a(W)):D.target.pause()})},{threshold:.5});return a(0),u.current.forEach(L=>{L&&O.observe(L)}),()=>{u.current.forEach(L=>{L&&O.unobserve(L)})}},[r]),T.useEffect(()=>{const O=u.current[o];O&&O.play()},[o]);const x=()=>{const O=(r+1)%e.length;a(0),i(O),h(!1),clearTimeout(d.current)},E=()=>{const O=(r-1+e.length)%e.length;i(O),a(0),h(!1),clearTimeout(d.current)},z=O=>{const L=u.current[O];L&&(L.paused?L.play():L.pause(),f(L.paused))},C=O=>{const L=u.current[O];L&&(L.muted=!L.muted,l(D=>({...D,[O]:L.muted})))},P=O=>{clearTimeout(d.current)},k=(O,L)=>{O===0&&(g(L.duration),A(L.duration))},A=O=>{clearTimeout(d.current),d.current=setTimeout(()=>{h(!0),setTimeout(()=>{h(!1)},1e4)},O*1e3)},N=O=>{clearTimeout(d.current),O===0&&v&&A(v)},j=()=>{clearTimeout(d.current)},M=()=>{b(!y)},I=O=>{const L=O.split(`
`),D=L.slice(0,2).join(" ");return L.length>3?`${D}...`:D},$=()=>{w&&m.current&&(m.current.requestFullscreen?m.current.requestFullscreen():m.current.mozRequestFullScreen?m.current.mozRequestFullScreen():m.current.webkitRequestFullscreen?m.current.webkitRequestFullscreen():m.current.msRequestFullscreen&&m.current.msRequestFullscreen())},de=()=>{document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()};return T.useEffect(()=>{$();const O=()=>{document.fullscreenElement||n()};return document.addEventListener("fullscreenchange",O),()=>{document.removeEventListener("fullscreenchange",O),document.fullscreenElement&&de()}},[n]),T.useEffect(()=>{a(0)},[r]),S.jsxs("div",{ref:m,className:"whole",children:[S.jsx("div",{className:"prevbtn",onClick:E,children:S.jsx(te,{icon:Qo})}),S.jsx("div",{className:"closediv",children:S.jsx("button",{className:"closebtn",onClick:n,children:S.jsx(te,{icon:Xo})})}),S.jsx("div",{className:"reelsContainer",children:e[r].videoId.map((O,L)=>S.jsxs("div",{className:"reel",children:[S.jsxs("div",{className:"video-container",children:[S.jsx("video",{ref:D=>u.current[L]=D,src:O,className:"ad",loop:!0,playsInline:!0,controls:!1,autoPlay:L===o,onClick:()=>z(L),onPause:()=>{j(),f(!0)},onPlay:()=>{N(L),f(!1)},onEnded:()=>P(),onLoadedMetadata:D=>k(L,D.target)}),c&&S.jsx(te,{icon:Hl,onClick:()=>z(L),className:"play-button"}),L===0&&p&&S.jsx(te,{icon:Lv,bounce:!0,className:"down-arrow"})]}),S.jsx("div",{className:"functions",children:S.jsx(te,{icon:s[L]?Wo:Yo,className:"volume",onClick:()=>C(L),style:{cursor:"pointer"}})}),S.jsxs("div",{className:"bookdiv",children:[S.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"}),S.jsxs("div",{className:"text",children:[S.jsx("p",{className:"hotelname",children:e[r].campaignName}),S.jsxs("p",{className:"offer",children:[y?e[r].campaignDetails:I(e[r].campaignDetails),S.jsx("br",{}),S.jsx("span",{className:"view-more",onClick:M,children:y?" View Less":" View More"})]}),S.jsxs("h2",{className:"offerprice",children:["From ",e[r].offerPrice.currency,e[r].offerPrice.price]})]}),S.jsx("div",{className:"divbtn",children:S.jsx("a",{href:"https://app.tripbuilder.in/",target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]},L))}),S.jsx("div",{className:"nextbtn",onClick:x,children:S.jsx(te,{icon:Ho})})]})},ky=()=>{const[e,t]=T.useState([]),[n,r]=T.useState([]);return T.useEffect(()=>{(async a=>{try{const l=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${a}`)).json(),c=l.campaigns.map(f=>f.videoId[0]);t(c),r(l.campaigns)}catch(s){console.error("Error fetching data:",s)}})("d2447b80-05cd-1ffc-8da0-d58e3051e5ea")},[]),S.jsxs("div",{className:"App",children:[S.jsx(Sy,{videos:e,campaigns:n})," "]})},Da=document.getElementById("root-stories"),Va=document.getElementById("root-grid"),Qi=document.getElementById("root-carosole"),qc=document.getElementById("root-stack-carosole");Da&&Da.dataset.name==="stories"&&$n.createRoot(Da).render(S.jsx(Q.StrictMode,{children:S.jsx(D0,{})}));Va&&Va.dataset.name==="grid"&&$n.createRoot(Va).render(S.jsx(Q.StrictMode,{children:S.jsx(R0,{})}));qc&&qc.dataset.name==="stack-carosole"&&$n.createRoot(Qi).render(S.jsx(Q.StrictMode,{children:S.jsx(ky,{})}));Qi&&Qi.dataset.name==="carosole"&&$n.createRoot(Qi).render(S.jsx(Q.StrictMode,{children:S.jsx(xy,{})}));
