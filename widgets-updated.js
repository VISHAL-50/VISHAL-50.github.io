(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Uc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wc={exports:{}},bo={},Yc={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zr=Symbol.for("react.element"),sm=Symbol.for("react.portal"),lm=Symbol.for("react.fragment"),am=Symbol.for("react.strict_mode"),um=Symbol.for("react.profiler"),cm=Symbol.for("react.provider"),dm=Symbol.for("react.context"),fm=Symbol.for("react.forward_ref"),pm=Symbol.for("react.suspense"),mm=Symbol.for("react.memo"),hm=Symbol.for("react.lazy"),nu=Symbol.iterator;function gm(e){return e===null||typeof e!="object"?null:(e=nu&&e[nu]||e["@@iterator"],typeof e=="function"?e:null)}var Qc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xc=Object.assign,Kc={};function qn(e,t,n){this.props=e,this.context=t,this.refs=Kc,this.updater=n||Qc}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qc(){}qc.prototype=qn.prototype;function Ql(e,t,n){this.props=e,this.context=t,this.refs=Kc,this.updater=n||Qc}var Xl=Ql.prototype=new qc;Xl.constructor=Ql;Xc(Xl,qn.prototype);Xl.isPureReactComponent=!0;var ru=Array.isArray,Zc=Object.prototype.hasOwnProperty,Kl={current:null},Jc={key:!0,ref:!0,__self:!0,__source:!0};function ed(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Zc.call(t,r)&&!Jc.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Zr,type:e,key:o,ref:s,props:i,_owner:Kl.current}}function vm(e,t){return{$$typeof:Zr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ql(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zr}function ym(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var iu=/\/+/g;function Go(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ym(""+e.key):t.toString(36)}function Ni(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Zr:case sm:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Go(s,0):r,ru(i)?(n="",e!=null&&(n=e.replace(iu,"$&/")+"/"),Ni(i,t,n,"",function(c){return c})):i!=null&&(ql(i)&&(i=vm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(iu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",ru(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Go(o,a);s+=Ni(o,t,n,l,i)}else if(l=gm(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Go(o,a++),s+=Ni(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ui(e,t,n){if(e==null)return e;var r=[],i=0;return Ni(e,r,"","",function(o){return t.call(n,o,i++)}),r}function wm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},zi={transition:null},xm={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:zi,ReactCurrentOwner:Kl};function td(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:ui,forEach:function(e,t,n){ui(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ui(e,function(){t++}),t},toArray:function(e){return ui(e,function(t){return t})||[]},only:function(e){if(!ql(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=qn;$.Fragment=lm;$.Profiler=um;$.PureComponent=Ql;$.StrictMode=am;$.Suspense=pm;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xm;$.act=td;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xc({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Kl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Zc.call(t,l)&&!Jc.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Zr,type:e.type,key:i,ref:o,props:r,_owner:s}};$.createContext=function(e){return e={$$typeof:dm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cm,_context:e},e.Consumer=e};$.createElement=ed;$.createFactory=function(e){var t=ed.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:fm,render:e}};$.isValidElement=ql;$.lazy=function(e){return{$$typeof:hm,_payload:{_status:-1,_result:e},_init:wm}};$.memo=function(e,t){return{$$typeof:mm,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=zi.transition;zi.transition={};try{e()}finally{zi.transition=t}};$.unstable_act=td;$.useCallback=function(e,t){return be.current.useCallback(e,t)};$.useContext=function(e){return be.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return be.current.useDeferredValue(e)};$.useEffect=function(e,t){return be.current.useEffect(e,t)};$.useId=function(){return be.current.useId()};$.useImperativeHandle=function(e,t,n){return be.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return be.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return be.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return be.current.useMemo(e,t)};$.useReducer=function(e,t,n){return be.current.useReducer(e,t,n)};$.useRef=function(e){return be.current.useRef(e)};$.useState=function(e){return be.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return be.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return be.current.useTransition()};$.version="18.3.1";Yc.exports=$;var P=Yc.exports;const Y=Uc(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm=P,bm=Symbol.for("react.element"),Em=Symbol.for("react.fragment"),km=Object.prototype.hasOwnProperty,Cm=Sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pm={key:!0,ref:!0,__self:!0,__source:!0};function nd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)km.call(t,r)&&!Pm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:bm,type:e,key:o,ref:s,props:i,_owner:Cm.current}}bo.Fragment=Em;bo.jsx=nd;bo.jsxs=nd;Wc.exports=bo;var g=Wc.exports,Vt={},rd={exports:{}},_e={},id={exports:{}},od={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,F){var R=j.length;j.push(F);e:for(;0<R;){var ee=R-1>>>1,se=j[ee];if(0<i(se,F))j[ee]=F,j[R]=se,R=ee;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var F=j[0],R=j.pop();if(R!==F){j[0]=R;e:for(var ee=0,se=j.length,li=se>>>1;ee<li;){var Kt=2*(ee+1)-1,Ho=j[Kt],qt=Kt+1,ai=j[qt];if(0>i(Ho,R))qt<se&&0>i(ai,Ho)?(j[ee]=ai,j[qt]=R,ee=qt):(j[ee]=Ho,j[Kt]=R,ee=Kt);else if(qt<se&&0>i(ai,R))j[ee]=ai,j[qt]=R,ee=qt;else break e}}return F}function i(j,F){var R=j.sortIndex-F.sortIndex;return R!==0?R:j.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],f=1,p=null,m=3,v=!1,y=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(j){for(var F=n(c);F!==null;){if(F.callback===null)r(c);else if(F.startTime<=j)r(c),F.sortIndex=F.expirationTime,t(l,F);else break;F=n(c)}}function S(j){if(w=!1,h(j),!y)if(n(l)!==null)y=!0,L(k);else{var F=n(c);F!==null&&H(S,F.startTime-j)}}function k(j,F){y=!1,w&&(w=!1,u(A),A=-1),v=!0;var R=m;try{for(h(F),p=n(l);p!==null&&(!(p.expirationTime>F)||j&&!x());){var ee=p.callback;if(typeof ee=="function"){p.callback=null,m=p.priorityLevel;var se=ee(p.expirationTime<=F);F=e.unstable_now(),typeof se=="function"?p.callback=se:p===n(l)&&r(l),h(F)}else r(l);p=n(l)}if(p!==null)var li=!0;else{var Kt=n(c);Kt!==null&&H(S,Kt.startTime-F),li=!1}return li}finally{p=null,m=R,v=!1}}var T=!1,z=null,A=-1,I=5,b=-1;function x(){return!(e.unstable_now()-b<I)}function C(){if(z!==null){var j=e.unstable_now();b=j;var F=!0;try{F=z(!0,j)}finally{F?N():(T=!1,z=null)}}else T=!1}var N;if(typeof d=="function")N=function(){d(C)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,B=_.port2;_.port1.onmessage=C,N=function(){B.postMessage(null)}}else N=function(){E(C,0)};function L(j){z=j,T||(T=!0,N())}function H(j,F){A=E(function(){j(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,L(k))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(j){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var R=m;m=F;try{return j()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,F){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var R=m;m=j;try{return F()}finally{m=R}},e.unstable_scheduleCallback=function(j,F,R){var ee=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?ee+R:ee):R=ee,j){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=R+se,j={id:f++,callback:F,priorityLevel:j,startTime:R,expirationTime:se,sortIndex:-1},R>ee?(j.sortIndex=R,t(c,j),n(l)===null&&j===n(c)&&(w?(u(A),A=-1):w=!0,H(S,R-ee))):(j.sortIndex=se,t(l,j),y||v||(y=!0,L(k))),j},e.unstable_shouldYield=x,e.unstable_wrapCallback=function(j){var F=m;return function(){var R=m;m=F;try{return j.apply(this,arguments)}finally{m=R}}}})(od);id.exports=od;var Am=id.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm=P,Oe=Am;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sd=new Set,Mr={};function vn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(Mr[e]=t,e=0;e<t.length;e++)sd.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ls=Object.prototype.hasOwnProperty,Nm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ou={},su={};function zm(e){return Ls.call(su,e)?!0:Ls.call(ou,e)?!1:Nm.test(e)?su[e]=!0:(ou[e]=!0,!1)}function Im(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mm(e,t,n,r){if(t===null||typeof t>"u"||Im(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zl=/[\-:]([a-z])/g;function Jl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zl,Jl);he[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zl,Jl);he[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zl,Jl);he[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function ea(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mm(t,n,i,r)&&(n=null),r||i===null?zm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=Tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ci=Symbol.for("react.element"),xn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),ta=Symbol.for("react.strict_mode"),Os=Symbol.for("react.profiler"),ld=Symbol.for("react.provider"),ad=Symbol.for("react.context"),na=Symbol.for("react.forward_ref"),_s=Symbol.for("react.suspense"),Fs=Symbol.for("react.suspense_list"),ra=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),ud=Symbol.for("react.offscreen"),lu=Symbol.iterator;function or(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,Uo;function mr(e){if(Uo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Uo=t&&t[1]||""}return`
`+Uo+e}var Wo=!1;function Yo(e,t){if(!e||Wo)return"";Wo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Wo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mr(e):""}function jm(e){switch(e.tag){case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 2:case 15:return e=Yo(e.type,!1),e;case 11:return e=Yo(e.type.render,!1),e;case 1:return e=Yo(e.type,!0),e;default:return""}}function Ds(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case xn:return"Portal";case Os:return"Profiler";case ta:return"StrictMode";case _s:return"Suspense";case Fs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ad:return(e.displayName||"Context")+".Consumer";case ld:return(e._context.displayName||"Context")+".Provider";case na:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ra:return t=e.displayName||null,t!==null?t:Ds(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return Ds(e(t))}catch{}}return null}function Lm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ds(t);case 8:return t===ta?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Om(e){var t=cd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function di(e){e._valueTracker||(e._valueTracker=Om(e))}function dd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=cd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rs(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function au(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fd(e,t){t=t.checked,t!=null&&ea(e,"checked",t,!1)}function Bs(e,t){fd(e,t);var n=$t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vs(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vs(e,t,n){(t!=="number"||Gi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var hr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $s(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(hr(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$t(n)}}function pd(e,t){var n=$t(t.value),r=$t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function du(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function md(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?md(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fi,hd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fi=fi||document.createElement("div"),fi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_m=["Webkit","ms","Moz","O"];Object.keys(xr).forEach(function(e){_m.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xr[t]=xr[e]})});function gd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xr.hasOwnProperty(e)&&xr[e]?(""+t).trim():t+"px"}function vd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Fm=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gs(e,t){if(t){if(Fm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function Us(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ws=null;function ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,On=null,_n=null;function fu(e){if(e=ti(e)){if(typeof Ys!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Ao(t),Ys(e.stateNode,e.type,t))}}function yd(e){On?_n?_n.push(e):_n=[e]:On=e}function wd(){if(On){var e=On,t=_n;if(_n=On=null,fu(e),t)for(e=0;e<t.length;e++)fu(t[e])}}function xd(e,t){return e(t)}function Sd(){}var Qo=!1;function bd(e,t,n){if(Qo)return e(t,n);Qo=!0;try{return xd(e,t,n)}finally{Qo=!1,(On!==null||_n!==null)&&(Sd(),wd())}}function Lr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ao(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Qs=!1;if(ht)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){Qs=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{Qs=!1}function Dm(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var Sr=!1,Ui=null,Wi=!1,Xs=null,Rm={onError:function(e){Sr=!0,Ui=e}};function Bm(e,t,n,r,i,o,s,a,l){Sr=!1,Ui=null,Dm.apply(Rm,arguments)}function Vm(e,t,n,r,i,o,s,a,l){if(Bm.apply(this,arguments),Sr){if(Sr){var c=Ui;Sr=!1,Ui=null}else throw Error(M(198));Wi||(Wi=!0,Xs=c)}}function yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ed(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pu(e){if(yn(e)!==e)throw Error(M(188))}function $m(e){var t=e.alternate;if(!t){if(t=yn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return pu(i),e;if(o===r)return pu(i),t;o=o.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function kd(e){return e=$m(e),e!==null?Cd(e):null}function Cd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cd(e);if(t!==null)return t;e=e.sibling}return null}var Pd=Oe.unstable_scheduleCallback,mu=Oe.unstable_cancelCallback,Hm=Oe.unstable_shouldYield,Gm=Oe.unstable_requestPaint,oe=Oe.unstable_now,Um=Oe.unstable_getCurrentPriorityLevel,oa=Oe.unstable_ImmediatePriority,Ad=Oe.unstable_UserBlockingPriority,Yi=Oe.unstable_NormalPriority,Wm=Oe.unstable_LowPriority,Td=Oe.unstable_IdlePriority,Eo=null,st=null;function Ym(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Eo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:Km,Qm=Math.log,Xm=Math.LN2;function Km(e){return e>>>=0,e===0?32:31-(Qm(e)/Xm|0)|0}var pi=64,mi=4194304;function gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=gr(a):(o&=s,o!==0&&(r=gr(o)))}else s=n&~i,s!==0?r=gr(s):o!==0&&(r=gr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),i=1<<n,r|=e[n],t&=~i;return r}function qm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ke(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=qm(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Ks(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nd(){var e=pi;return pi<<=1,!(pi&4194240)&&(pi=64),e}function Xo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function Jm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ke(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function sa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var W=0;function zd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Id,la,Md,jd,Ld,qs=!1,hi=[],jt=null,Lt=null,Ot=null,Or=new Map,_r=new Map,At=[],eh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hu(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(t.pointerId)}}function lr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ti(t),t!==null&&la(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function th(e,t,n,r,i){switch(t){case"focusin":return jt=lr(jt,e,t,n,r,i),!0;case"dragenter":return Lt=lr(Lt,e,t,n,r,i),!0;case"mouseover":return Ot=lr(Ot,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Or.set(o,lr(Or.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,_r.set(o,lr(_r.get(o)||null,e,t,n,r,i)),!0}return!1}function Od(e){var t=tn(e.target);if(t!==null){var n=yn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ed(n),t!==null){e.blockedOn=t,Ld(e.priority,function(){Md(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ws=r,n.target.dispatchEvent(r),Ws=null}else return t=ti(n),t!==null&&la(t),e.blockedOn=n,!1;t.shift()}return!0}function gu(e,t,n){Ii(e)&&n.delete(t)}function nh(){qs=!1,jt!==null&&Ii(jt)&&(jt=null),Lt!==null&&Ii(Lt)&&(Lt=null),Ot!==null&&Ii(Ot)&&(Ot=null),Or.forEach(gu),_r.forEach(gu)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,qs||(qs=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,nh)))}function Fr(e){function t(i){return ar(i,e)}if(0<hi.length){ar(hi[0],e);for(var n=1;n<hi.length;n++){var r=hi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jt!==null&&ar(jt,e),Lt!==null&&ar(Lt,e),Ot!==null&&ar(Ot,e),Or.forEach(t),_r.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)Od(n),n.blockedOn===null&&At.shift()}var Fn=St.ReactCurrentBatchConfig,Xi=!0;function rh(e,t,n,r){var i=W,o=Fn.transition;Fn.transition=null;try{W=1,aa(e,t,n,r)}finally{W=i,Fn.transition=o}}function ih(e,t,n,r){var i=W,o=Fn.transition;Fn.transition=null;try{W=4,aa(e,t,n,r)}finally{W=i,Fn.transition=o}}function aa(e,t,n,r){if(Xi){var i=Zs(e,t,n,r);if(i===null)os(e,t,r,Ki,n),hu(e,r);else if(th(i,e,t,n,r))r.stopPropagation();else if(hu(e,r),t&4&&-1<eh.indexOf(e)){for(;i!==null;){var o=ti(i);if(o!==null&&Id(o),o=Zs(e,t,n,r),o===null&&os(e,t,r,Ki,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else os(e,t,r,null,n)}}var Ki=null;function Zs(e,t,n,r){if(Ki=null,e=ia(r),e=tn(e),e!==null)if(t=yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ed(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ki=e,null}function _d(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Um()){case oa:return 1;case Ad:return 4;case Yi:case Wm:return 16;case Td:return 536870912;default:return 16}default:return 16}}var Nt=null,ua=null,Mi=null;function Fd(){if(Mi)return Mi;var e,t=ua,n=t.length,r,i="value"in Nt?Nt.value:Nt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Mi=i.slice(e,1<r?1-r:void 0)}function ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gi(){return!0}function vu(){return!1}function Fe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?gi:vu,this.isPropagationStopped=vu,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gi)},persist:function(){},isPersistent:gi}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ca=Fe(Zn),ei=re({},Zn,{view:0,detail:0}),oh=Fe(ei),Ko,qo,ur,ko=re({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:da,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(Ko=e.screenX-ur.screenX,qo=e.screenY-ur.screenY):qo=Ko=0,ur=e),Ko)},movementY:function(e){return"movementY"in e?e.movementY:qo}}),yu=Fe(ko),sh=re({},ko,{dataTransfer:0}),lh=Fe(sh),ah=re({},ei,{relatedTarget:0}),Zo=Fe(ah),uh=re({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),ch=Fe(uh),dh=re({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fh=Fe(dh),ph=re({},Zn,{data:0}),wu=Fe(ph),mh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gh[e])?!!t[e]:!1}function da(){return vh}var yh=re({},ei,{key:function(e){if(e.key){var t=mh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:da,charCode:function(e){return e.type==="keypress"?ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wh=Fe(yh),xh=re({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xu=Fe(xh),Sh=re({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:da}),bh=Fe(Sh),Eh=re({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kh=Fe(Eh),Ch=re({},ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ph=Fe(Ch),Ah=[9,13,27,32],fa=ht&&"CompositionEvent"in window,br=null;ht&&"documentMode"in document&&(br=document.documentMode);var Th=ht&&"TextEvent"in window&&!br,Dd=ht&&(!fa||br&&8<br&&11>=br),Su=" ",bu=!1;function Rd(e,t){switch(e){case"keyup":return Ah.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bn=!1;function Nh(e,t){switch(e){case"compositionend":return Bd(t);case"keypress":return t.which!==32?null:(bu=!0,Su);case"textInput":return e=t.data,e===Su&&bu?null:e;default:return null}}function zh(e,t){if(bn)return e==="compositionend"||!fa&&Rd(e,t)?(e=Fd(),Mi=ua=Nt=null,bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dd&&t.locale!=="ko"?null:t.data;default:return null}}var Ih={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ih[e.type]:t==="textarea"}function Vd(e,t,n,r){yd(r),t=qi(t,"onChange"),0<t.length&&(n=new ca("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Er=null,Dr=null;function Mh(e){Zd(e,0)}function Co(e){var t=Cn(e);if(dd(t))return e}function jh(e,t){if(e==="change")return t}var $d=!1;if(ht){var Jo;if(ht){var es="oninput"in document;if(!es){var ku=document.createElement("div");ku.setAttribute("oninput","return;"),es=typeof ku.oninput=="function"}Jo=es}else Jo=!1;$d=Jo&&(!document.documentMode||9<document.documentMode)}function Cu(){Er&&(Er.detachEvent("onpropertychange",Hd),Dr=Er=null)}function Hd(e){if(e.propertyName==="value"&&Co(Dr)){var t=[];Vd(t,Dr,e,ia(e)),bd(Mh,t)}}function Lh(e,t,n){e==="focusin"?(Cu(),Er=t,Dr=n,Er.attachEvent("onpropertychange",Hd)):e==="focusout"&&Cu()}function Oh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(Dr)}function _h(e,t){if(e==="click")return Co(t)}function Fh(e,t){if(e==="input"||e==="change")return Co(t)}function Dh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:Dh;function Rr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ls.call(t,i)||!Ze(e[i],t[i]))return!1}return!0}function Pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Au(e,t){var n=Pu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pu(n)}}function Gd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ud(){for(var e=window,t=Gi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gi(e.document)}return t}function pa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rh(e){var t=Ud(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gd(n.ownerDocument.documentElement,n)){if(r!==null&&pa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Au(n,o);var s=Au(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bh=ht&&"documentMode"in document&&11>=document.documentMode,En=null,Js=null,kr=null,el=!1;function Tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;el||En==null||En!==Gi(r)||(r=En,"selectionStart"in r&&pa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&Rr(kr,r)||(kr=r,r=qi(Js,"onSelect"),0<r.length&&(t=new ca("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function vi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:vi("Animation","AnimationEnd"),animationiteration:vi("Animation","AnimationIteration"),animationstart:vi("Animation","AnimationStart"),transitionend:vi("Transition","TransitionEnd")},ts={},Wd={};ht&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function Po(e){if(ts[e])return ts[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wd)return ts[e]=t[n];return e}var Yd=Po("animationend"),Qd=Po("animationiteration"),Xd=Po("animationstart"),Kd=Po("transitionend"),qd=new Map,Nu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){qd.set(e,t),vn(t,[e])}for(var ns=0;ns<Nu.length;ns++){var rs=Nu[ns],Vh=rs.toLowerCase(),$h=rs[0].toUpperCase()+rs.slice(1);Yt(Vh,"on"+$h)}Yt(Yd,"onAnimationEnd");Yt(Qd,"onAnimationIteration");Yt(Xd,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(Kd,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hh=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function zu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vm(r,t,void 0,e),e.currentTarget=null}function Zd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;zu(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;zu(i,a,c),o=l}}}if(Wi)throw e=Xs,Wi=!1,Xs=null,e}function X(e,t){var n=t[ol];n===void 0&&(n=t[ol]=new Set);var r=e+"__bubble";n.has(r)||(Jd(t,e,2,!1),n.add(r))}function is(e,t,n){var r=0;t&&(r|=4),Jd(n,e,r,t)}var yi="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[yi]){e[yi]=!0,sd.forEach(function(n){n!=="selectionchange"&&(Hh.has(n)||is(n,!1,e),is(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[yi]||(t[yi]=!0,is("selectionchange",!1,t))}}function Jd(e,t,n,r){switch(_d(t)){case 1:var i=rh;break;case 4:i=ih;break;default:i=aa}n=i.bind(null,t,n,e),i=void 0,!Qs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function os(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=tn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}bd(function(){var c=o,f=ia(n),p=[];e:{var m=qd.get(e);if(m!==void 0){var v=ca,y=e;switch(e){case"keypress":if(ji(n)===0)break e;case"keydown":case"keyup":v=wh;break;case"focusin":y="focus",v=Zo;break;case"focusout":y="blur",v=Zo;break;case"beforeblur":case"afterblur":v=Zo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=yu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=lh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=bh;break;case Yd:case Qd:case Xd:v=ch;break;case Kd:v=kh;break;case"scroll":v=oh;break;case"wheel":v=Ph;break;case"copy":case"cut":case"paste":v=fh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=xu}var w=(t&4)!==0,E=!w&&e==="scroll",u=w?m!==null?m+"Capture":null:m;w=[];for(var d=c,h;d!==null;){h=d;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,u!==null&&(S=Lr(d,u),S!=null&&w.push(Vr(d,S,h)))),E)break;d=d.return}0<w.length&&(m=new v(m,y,null,n,f),p.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Ws&&(y=n.relatedTarget||n.fromElement)&&(tn(y)||y[gt]))break e;if((v||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?tn(y):null,y!==null&&(E=yn(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(w=yu,S="onMouseLeave",u="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=xu,S="onPointerLeave",u="onPointerEnter",d="pointer"),E=v==null?m:Cn(v),h=y==null?m:Cn(y),m=new w(S,d+"leave",v,n,f),m.target=E,m.relatedTarget=h,S=null,tn(f)===c&&(w=new w(u,d+"enter",y,n,f),w.target=h,w.relatedTarget=E,S=w),E=S,v&&y)t:{for(w=v,u=y,d=0,h=w;h;h=wn(h))d++;for(h=0,S=u;S;S=wn(S))h++;for(;0<d-h;)w=wn(w),d--;for(;0<h-d;)u=wn(u),h--;for(;d--;){if(w===u||u!==null&&w===u.alternate)break t;w=wn(w),u=wn(u)}w=null}else w=null;v!==null&&Iu(p,m,v,w,!1),y!==null&&E!==null&&Iu(p,E,y,w,!0)}}e:{if(m=c?Cn(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var k=jh;else if(Eu(m))if($d)k=Fh;else{k=Oh;var T=Lh}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=_h);if(k&&(k=k(e,c))){Vd(p,k,n,f);break e}T&&T(e,m,c),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&Vs(m,"number",m.value)}switch(T=c?Cn(c):window,e){case"focusin":(Eu(T)||T.contentEditable==="true")&&(En=T,Js=c,kr=null);break;case"focusout":kr=Js=En=null;break;case"mousedown":el=!0;break;case"contextmenu":case"mouseup":case"dragend":el=!1,Tu(p,n,f);break;case"selectionchange":if(Bh)break;case"keydown":case"keyup":Tu(p,n,f)}var z;if(fa)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else bn?Rd(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Dd&&n.locale!=="ko"&&(bn||A!=="onCompositionStart"?A==="onCompositionEnd"&&bn&&(z=Fd()):(Nt=f,ua="value"in Nt?Nt.value:Nt.textContent,bn=!0)),T=qi(c,A),0<T.length&&(A=new wu(A,e,null,n,f),p.push({event:A,listeners:T}),z?A.data=z:(z=Bd(n),z!==null&&(A.data=z)))),(z=Th?Nh(e,n):zh(e,n))&&(c=qi(c,"onBeforeInput"),0<c.length&&(f=new wu("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=z))}Zd(p,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Lr(e,n),o!=null&&r.unshift(Vr(e,o,i)),o=Lr(e,t),o!=null&&r.push(Vr(e,o,i))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Iu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Lr(n,o),l!=null&&s.unshift(Vr(n,l,a))):i||(l=Lr(n,o),l!=null&&s.push(Vr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Gh=/\r\n?/g,Uh=/\u0000|\uFFFD/g;function Mu(e){return(typeof e=="string"?e:""+e).replace(Gh,`
`).replace(Uh,"")}function wi(e,t,n){if(t=Mu(t),Mu(e)!==t&&n)throw Error(M(425))}function Zi(){}var tl=null,nl=null;function rl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var il=typeof setTimeout=="function"?setTimeout:void 0,Wh=typeof clearTimeout=="function"?clearTimeout:void 0,ju=typeof Promise=="function"?Promise:void 0,Yh=typeof queueMicrotask=="function"?queueMicrotask:typeof ju<"u"?function(e){return ju.resolve(null).then(e).catch(Qh)}:il;function Qh(e){setTimeout(function(){throw e})}function ss(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Fr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fr(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),nt="__reactFiber$"+Jn,$r="__reactProps$"+Jn,gt="__reactContainer$"+Jn,ol="__reactEvents$"+Jn,Xh="__reactListeners$"+Jn,Kh="__reactHandles$"+Jn;function tn(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lu(e);e!==null;){if(n=e[nt])return n;e=Lu(e)}return t}e=n,n=e.parentNode}return null}function ti(e){return e=e[nt]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Ao(e){return e[$r]||null}var sl=[],Pn=-1;function Qt(e){return{current:e}}function K(e){0>Pn||(e.current=sl[Pn],sl[Pn]=null,Pn--)}function Q(e,t){Pn++,sl[Pn]=e.current,e.current=t}var Ht={},we=Qt(Ht),Pe=Qt(!1),un=Ht;function Hn(e,t){var n=e.type.contextTypes;if(!n)return Ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function Ji(){K(Pe),K(we)}function Ou(e,t,n){if(we.current!==Ht)throw Error(M(168));Q(we,t),Q(Pe,n)}function ef(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,Lm(e)||"Unknown",i));return re({},n,r)}function eo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,un=we.current,Q(we,e),Q(Pe,Pe.current),!0}function _u(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=ef(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,K(Pe),K(we),Q(we,e)):K(Pe),Q(Pe,n)}var dt=null,To=!1,ls=!1;function tf(e){dt===null?dt=[e]:dt.push(e)}function qh(e){To=!0,tf(e)}function Xt(){if(!ls&&dt!==null){ls=!0;var e=0,t=W;try{var n=dt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,To=!1}catch(i){throw dt!==null&&(dt=dt.slice(e+1)),Pd(oa,Xt),i}finally{W=t,ls=!1}}return null}var An=[],Tn=0,to=null,no=0,Be=[],Ve=0,cn=null,ft=1,pt="";function Zt(e,t){An[Tn++]=no,An[Tn++]=to,to=e,no=t}function nf(e,t,n){Be[Ve++]=ft,Be[Ve++]=pt,Be[Ve++]=cn,cn=e;var r=ft;e=pt;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var o=32-Ke(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ft=1<<32-Ke(t)+i|n<<i|r,pt=o+e}else ft=1<<o|n<<i|r,pt=e}function ma(e){e.return!==null&&(Zt(e,1),nf(e,1,0))}function ha(e){for(;e===to;)to=An[--Tn],An[Tn]=null,no=An[--Tn],An[Tn]=null;for(;e===cn;)cn=Be[--Ve],Be[Ve]=null,pt=Be[--Ve],Be[Ve]=null,ft=Be[--Ve],Be[Ve]=null}var Me=null,Ie=null,Z=!1,Xe=null;function rf(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,Ie=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,Ie=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:ft,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,Ie=null,!0):!1;default:return!1}}function ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function al(e){if(Z){var t=Ie;if(t){var n=t;if(!Fu(e,t)){if(ll(e))throw Error(M(418));t=_t(n.nextSibling);var r=Me;t&&Fu(e,t)?rf(r,n):(e.flags=e.flags&-4097|2,Z=!1,Me=e)}}else{if(ll(e))throw Error(M(418));e.flags=e.flags&-4097|2,Z=!1,Me=e}}}function Du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function xi(e){if(e!==Me)return!1;if(!Z)return Du(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!rl(e.type,e.memoizedProps)),t&&(t=Ie)){if(ll(e))throw of(),Error(M(418));for(;t;)rf(e,t),t=_t(t.nextSibling)}if(Du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ie=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ie=null}}else Ie=Me?_t(e.stateNode.nextSibling):null;return!0}function of(){for(var e=Ie;e;)e=_t(e.nextSibling)}function Gn(){Ie=Me=null,Z=!1}function ga(e){Xe===null?Xe=[e]:Xe.push(e)}var Zh=St.ReactCurrentBatchConfig;function cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Si(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ru(e){var t=e._init;return t(e._payload)}function sf(e){function t(u,d){if(e){var h=u.deletions;h===null?(u.deletions=[d],u.flags|=16):h.push(d)}}function n(u,d){if(!e)return null;for(;d!==null;)t(u,d),d=d.sibling;return null}function r(u,d){for(u=new Map;d!==null;)d.key!==null?u.set(d.key,d):u.set(d.index,d),d=d.sibling;return u}function i(u,d){return u=Bt(u,d),u.index=0,u.sibling=null,u}function o(u,d,h){return u.index=h,e?(h=u.alternate,h!==null?(h=h.index,h<d?(u.flags|=2,d):h):(u.flags|=2,d)):(u.flags|=1048576,d)}function s(u){return e&&u.alternate===null&&(u.flags|=2),u}function a(u,d,h,S){return d===null||d.tag!==6?(d=ms(h,u.mode,S),d.return=u,d):(d=i(d,h),d.return=u,d)}function l(u,d,h,S){var k=h.type;return k===Sn?f(u,d,h.props.children,S,h.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ct&&Ru(k)===d.type)?(S=i(d,h.props),S.ref=cr(u,d,h),S.return=u,S):(S=Bi(h.type,h.key,h.props,null,u.mode,S),S.ref=cr(u,d,h),S.return=u,S)}function c(u,d,h,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=hs(h,u.mode,S),d.return=u,d):(d=i(d,h.children||[]),d.return=u,d)}function f(u,d,h,S,k){return d===null||d.tag!==7?(d=sn(h,u.mode,S,k),d.return=u,d):(d=i(d,h),d.return=u,d)}function p(u,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ms(""+d,u.mode,h),d.return=u,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ci:return h=Bi(d.type,d.key,d.props,null,u.mode,h),h.ref=cr(u,null,d),h.return=u,h;case xn:return d=hs(d,u.mode,h),d.return=u,d;case Ct:var S=d._init;return p(u,S(d._payload),h)}if(hr(d)||or(d))return d=sn(d,u.mode,h,null),d.return=u,d;Si(u,d)}return null}function m(u,d,h,S){var k=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:a(u,d,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ci:return h.key===k?l(u,d,h,S):null;case xn:return h.key===k?c(u,d,h,S):null;case Ct:return k=h._init,m(u,d,k(h._payload),S)}if(hr(h)||or(h))return k!==null?null:f(u,d,h,S,null);Si(u,h)}return null}function v(u,d,h,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(h)||null,a(d,u,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ci:return u=u.get(S.key===null?h:S.key)||null,l(d,u,S,k);case xn:return u=u.get(S.key===null?h:S.key)||null,c(d,u,S,k);case Ct:var T=S._init;return v(u,d,h,T(S._payload),k)}if(hr(S)||or(S))return u=u.get(h)||null,f(d,u,S,k,null);Si(d,S)}return null}function y(u,d,h,S){for(var k=null,T=null,z=d,A=d=0,I=null;z!==null&&A<h.length;A++){z.index>A?(I=z,z=null):I=z.sibling;var b=m(u,z,h[A],S);if(b===null){z===null&&(z=I);break}e&&z&&b.alternate===null&&t(u,z),d=o(b,d,A),T===null?k=b:T.sibling=b,T=b,z=I}if(A===h.length)return n(u,z),Z&&Zt(u,A),k;if(z===null){for(;A<h.length;A++)z=p(u,h[A],S),z!==null&&(d=o(z,d,A),T===null?k=z:T.sibling=z,T=z);return Z&&Zt(u,A),k}for(z=r(u,z);A<h.length;A++)I=v(z,u,A,h[A],S),I!==null&&(e&&I.alternate!==null&&z.delete(I.key===null?A:I.key),d=o(I,d,A),T===null?k=I:T.sibling=I,T=I);return e&&z.forEach(function(x){return t(u,x)}),Z&&Zt(u,A),k}function w(u,d,h,S){var k=or(h);if(typeof k!="function")throw Error(M(150));if(h=k.call(h),h==null)throw Error(M(151));for(var T=k=null,z=d,A=d=0,I=null,b=h.next();z!==null&&!b.done;A++,b=h.next()){z.index>A?(I=z,z=null):I=z.sibling;var x=m(u,z,b.value,S);if(x===null){z===null&&(z=I);break}e&&z&&x.alternate===null&&t(u,z),d=o(x,d,A),T===null?k=x:T.sibling=x,T=x,z=I}if(b.done)return n(u,z),Z&&Zt(u,A),k;if(z===null){for(;!b.done;A++,b=h.next())b=p(u,b.value,S),b!==null&&(d=o(b,d,A),T===null?k=b:T.sibling=b,T=b);return Z&&Zt(u,A),k}for(z=r(u,z);!b.done;A++,b=h.next())b=v(z,u,A,b.value,S),b!==null&&(e&&b.alternate!==null&&z.delete(b.key===null?A:b.key),d=o(b,d,A),T===null?k=b:T.sibling=b,T=b);return e&&z.forEach(function(C){return t(u,C)}),Z&&Zt(u,A),k}function E(u,d,h,S){if(typeof h=="object"&&h!==null&&h.type===Sn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ci:e:{for(var k=h.key,T=d;T!==null;){if(T.key===k){if(k=h.type,k===Sn){if(T.tag===7){n(u,T.sibling),d=i(T,h.props.children),d.return=u,u=d;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ct&&Ru(k)===T.type){n(u,T.sibling),d=i(T,h.props),d.ref=cr(u,T,h),d.return=u,u=d;break e}n(u,T);break}else t(u,T);T=T.sibling}h.type===Sn?(d=sn(h.props.children,u.mode,S,h.key),d.return=u,u=d):(S=Bi(h.type,h.key,h.props,null,u.mode,S),S.ref=cr(u,d,h),S.return=u,u=S)}return s(u);case xn:e:{for(T=h.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(u,d.sibling),d=i(d,h.children||[]),d.return=u,u=d;break e}else{n(u,d);break}else t(u,d);d=d.sibling}d=hs(h,u.mode,S),d.return=u,u=d}return s(u);case Ct:return T=h._init,E(u,d,T(h._payload),S)}if(hr(h))return y(u,d,h,S);if(or(h))return w(u,d,h,S);Si(u,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(u,d.sibling),d=i(d,h),d.return=u,u=d):(n(u,d),d=ms(h,u.mode,S),d.return=u,u=d),s(u)):n(u,d)}return E}var Un=sf(!0),lf=sf(!1),ro=Qt(null),io=null,Nn=null,va=null;function ya(){va=Nn=io=null}function wa(e){var t=ro.current;K(ro),e._currentValue=t}function ul(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){io=e,va=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(va!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(io===null)throw Error(M(308));Nn=e,io.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var nn=null;function xa(e){nn===null?nn=[e]:nn.push(e)}function af(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,xa(t)):(n.next=i.next,i.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function Sa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,vt(e,n)}return i=r.interleaved,i===null?(t.next=t,xa(r)):(t.next=i.next,i.next=t),r.interleaved=t,vt(e,n)}function Li(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sa(e,n)}}function Bu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oo(e,t,n,r){var i=e.updateQueue;Pt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,f=c=l=null,a=o;do{var m=a.lane,v=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(m=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(v,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,m=typeof y=="function"?y.call(v,p,m):y,m==null)break e;p=re({},p,m);break e;case 2:Pt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=v,l=p):f=f.next=v,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(l=p),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);fn|=s,e.lanes=s,e.memoizedState=p}}function Vu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var ni={},lt=Qt(ni),Hr=Qt(ni),Gr=Qt(ni);function rn(e){if(e===ni)throw Error(M(174));return e}function ba(e,t){switch(Q(Gr,t),Q(Hr,e),Q(lt,ni),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hs(t,e)}K(lt),Q(lt,t)}function Wn(){K(lt),K(Hr),K(Gr)}function cf(e){rn(Gr.current);var t=rn(lt.current),n=Hs(t,e.type);t!==n&&(Q(Hr,e),Q(lt,n))}function Ea(e){Hr.current===e&&(K(lt),K(Hr))}var te=Qt(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var as=[];function ka(){for(var e=0;e<as.length;e++)as[e]._workInProgressVersionPrimary=null;as.length=0}var Oi=St.ReactCurrentDispatcher,us=St.ReactCurrentBatchConfig,dn=0,ne=null,ae=null,de=null,lo=!1,Cr=!1,Ur=0,Jh=0;function ge(){throw Error(M(321))}function Ca(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function Pa(e,t,n,r,i,o){if(dn=o,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oi.current=e===null||e.memoizedState===null?rg:ig,e=n(r,i),Cr){o=0;do{if(Cr=!1,Ur=0,25<=o)throw Error(M(301));o+=1,de=ae=null,t.updateQueue=null,Oi.current=og,e=n(r,i)}while(Cr)}if(Oi.current=ao,t=ae!==null&&ae.next!==null,dn=0,de=ae=ne=null,lo=!1,t)throw Error(M(300));return e}function Aa(){var e=Ur!==0;return Ur=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?ne.memoizedState=de=e:de=de.next=e,de}function Ue(){if(ae===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=de===null?ne.memoizedState:de.next;if(t!==null)de=t,ae=e;else{if(e===null)throw Error(M(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},de===null?ne.memoizedState=de=e:de=de.next=e}return de}function Wr(e,t){return typeof t=="function"?t(e):t}function cs(e){var t=Ue(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var f=c.lane;if((dn&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,ne.lanes|=f,fn|=f}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,Ze(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ne.lanes|=o,fn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ds(e){var t=Ue(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ze(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function df(){}function ff(e,t){var n=ne,r=Ue(),i=t(),o=!Ze(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,Ta(hf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Yr(9,mf.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(M(349));dn&30||pf(n,t,i)}return i}function pf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mf(e,t,n,r){t.value=n,t.getSnapshot=r,gf(t)&&vf(e)}function hf(e,t,n){return n(function(){gf(t)&&vf(e)})}function gf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function vf(e){var t=vt(e,1);t!==null&&qe(t,e,1,-1)}function $u(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:e},t.queue=e,e=e.dispatch=ng.bind(null,ne,e),[t.memoizedState,e]}function Yr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yf(){return Ue().memoizedState}function _i(e,t,n,r){var i=et();ne.flags|=e,i.memoizedState=Yr(1|t,n,void 0,r===void 0?null:r)}function No(e,t,n,r){var i=Ue();r=r===void 0?null:r;var o=void 0;if(ae!==null){var s=ae.memoizedState;if(o=s.destroy,r!==null&&Ca(r,s.deps)){i.memoizedState=Yr(t,n,o,r);return}}ne.flags|=e,i.memoizedState=Yr(1|t,n,o,r)}function Hu(e,t){return _i(8390656,8,e,t)}function Ta(e,t){return No(2048,8,e,t)}function wf(e,t){return No(4,2,e,t)}function xf(e,t){return No(4,4,e,t)}function Sf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bf(e,t,n){return n=n!=null?n.concat([e]):null,No(4,4,Sf.bind(null,t,e),n)}function Na(){}function Ef(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ca(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kf(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ca(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cf(e,t,n){return dn&21?(Ze(n,t)||(n=Nd(),ne.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function eg(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=us.transition;us.transition={};try{e(!1),t()}finally{W=n,us.transition=r}}function Pf(){return Ue().memoizedState}function tg(e,t,n){var r=Rt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Af(e))Tf(t,n);else if(n=af(e,t,n,r),n!==null){var i=Se();qe(n,e,r,i),Nf(n,t,r)}}function ng(e,t,n){var r=Rt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Af(e))Tf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Ze(a,s)){var l=t.interleaved;l===null?(i.next=i,xa(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=af(e,t,i,r),n!==null&&(i=Se(),qe(n,e,r,i),Nf(n,t,r))}}function Af(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function Tf(e,t){Cr=lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Nf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sa(e,n)}}var ao={readContext:Ge,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},rg={readContext:Ge,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:Hu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_i(4194308,4,Sf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _i(4194308,4,e,t)},useInsertionEffect:function(e,t){return _i(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tg.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:$u,useDebugValue:Na,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=$u(!1),t=e[0];return e=eg.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,i=et();if(Z){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),fe===null)throw Error(M(349));dn&30||pf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Hu(hf.bind(null,r,o,e),[e]),r.flags|=2048,Yr(9,mf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=et(),t=fe.identifierPrefix;if(Z){var n=pt,r=ft;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ig={readContext:Ge,useCallback:Ef,useContext:Ge,useEffect:Ta,useImperativeHandle:bf,useInsertionEffect:wf,useLayoutEffect:xf,useMemo:kf,useReducer:cs,useRef:yf,useState:function(){return cs(Wr)},useDebugValue:Na,useDeferredValue:function(e){var t=Ue();return Cf(t,ae.memoizedState,e)},useTransition:function(){var e=cs(Wr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:df,useSyncExternalStore:ff,useId:Pf,unstable_isNewReconciler:!1},og={readContext:Ge,useCallback:Ef,useContext:Ge,useEffect:Ta,useImperativeHandle:bf,useInsertionEffect:wf,useLayoutEffect:xf,useMemo:kf,useReducer:ds,useRef:yf,useState:function(){return ds(Wr)},useDebugValue:Na,useDeferredValue:function(e){var t=Ue();return ae===null?t.memoizedState=e:Cf(t,ae.memoizedState,e)},useTransition:function(){var e=ds(Wr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:df,useSyncExternalStore:ff,useId:Pf,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function cl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zo={isMounted:function(e){return(e=e._reactInternals)?yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Rt(e),o=mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(qe(t,e,i,r),Li(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Rt(e),o=mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(qe(t,e,i,r),Li(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Rt(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ft(e,i,r),t!==null&&(qe(t,e,r,n),Li(t,e,r))}};function Gu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(i,o):!0}function zf(e,t,n){var r=!1,i=Ht,o=t.contextType;return typeof o=="object"&&o!==null?o=Ge(o):(i=Ae(t)?un:we.current,r=t.contextTypes,o=(r=r!=null)?Hn(e,i):Ht),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Uu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zo.enqueueReplaceState(t,t.state,null)}function dl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Sa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ge(o):(o=Ae(t)?un:we.current,i.context=Hn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(cl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&zo.enqueueReplaceState(i,i.state,null),oo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yn(e,t){try{var n="",r=t;do n+=jm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function fs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sg=typeof WeakMap=="function"?WeakMap:Map;function If(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){co||(co=!0,bl=r),fl(e,t)},n}function Mf(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){fl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){fl(e,t),typeof r!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=xg.bind(null,e,t,n),t.then(e,e))}function Yu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var lg=St.ReactCurrentOwner,Ce=!1;function xe(e,t,n,r){t.child=e===null?lf(t,null,n,r):Un(t,e.child,n,r)}function Xu(e,t,n,r,i){n=n.render;var o=t.ref;return Dn(t,i),r=Pa(e,t,n,r,o,i),n=Aa(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(Z&&n&&ma(t),t.flags|=1,xe(e,t,r,i),t.child)}function Ku(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Fa(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,jf(e,t,o,r,i)):(e=Bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Rr,n(s,r)&&e.ref===t.ref)return yt(e,t,i)}return t.flags|=1,e=Bt(o,r),e.ref=t.ref,e.return=t,t.child=e}function jf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Rr(o,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,yt(e,t,i)}return pl(e,t,n,r,i)}function Lf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(In,Ne),Ne|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(In,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Q(In,Ne),Ne|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Q(In,Ne),Ne|=r;return xe(e,t,i,n),t.child}function Of(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function pl(e,t,n,r,i){var o=Ae(n)?un:we.current;return o=Hn(t,o),Dn(t,i),n=Pa(e,t,n,r,o,i),r=Aa(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(Z&&r&&ma(t),t.flags|=1,xe(e,t,n,i),t.child)}function qu(e,t,n,r,i){if(Ae(n)){var o=!0;eo(t)}else o=!1;if(Dn(t,i),t.stateNode===null)Fi(e,t),zf(t,n,r),dl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ge(c):(c=Ae(n)?un:we.current,c=Hn(t,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Uu(t,s,r,c),Pt=!1;var m=t.memoizedState;s.state=m,oo(t,r,s,i),l=t.memoizedState,a!==r||m!==l||Pe.current||Pt?(typeof f=="function"&&(cl(t,n,f,r),l=t.memoizedState),(a=Pt||Gu(t,n,a,r,m,l,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,uf(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ye(t.type,a),s.props=c,p=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ge(l):(l=Ae(n)?un:we.current,l=Hn(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==l)&&Uu(t,s,r,l),Pt=!1,m=t.memoizedState,s.state=m,oo(t,r,s,i);var y=t.memoizedState;a!==p||m!==y||Pe.current||Pt?(typeof v=="function"&&(cl(t,n,v,r),y=t.memoizedState),(c=Pt||Gu(t,n,c,r,m,y,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ml(e,t,n,r,o,i)}function ml(e,t,n,r,i,o){Of(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&_u(t,n,!1),yt(e,t,o);r=t.stateNode,lg.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Un(t,e.child,null,o),t.child=Un(t,null,a,o)):xe(e,t,a,o),t.memoizedState=r.state,i&&_u(t,n,!0),t.child}function _f(e){var t=e.stateNode;t.pendingContext?Ou(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ou(e,t.context,!1),ba(e,t.containerInfo)}function Zu(e,t,n,r,i){return Gn(),ga(i),t.flags|=256,xe(e,t,n,r),t.child}var hl={dehydrated:null,treeContext:null,retryLane:0};function gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ff(e,t,n){var r=t.pendingProps,i=te.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Q(te,i&1),e===null)return al(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=jo(s,r,0,null),e=sn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=gl(n),t.memoizedState=hl,e):za(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ag(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Bt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Bt(a,o):(o=sn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?gl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=hl,r}return o=e.child,e=o.sibling,r=Bt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function za(e,t){return t=jo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bi(e,t,n,r){return r!==null&&ga(r),Un(t,e.child,null,n),e=za(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ag(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=fs(Error(M(422))),bi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=jo({mode:"visible",children:r.children},i,0,null),o=sn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Un(t,e.child,null,s),t.child.memoizedState=gl(s),t.memoizedState=hl,o);if(!(t.mode&1))return bi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(M(419)),r=fs(o,r,void 0),bi(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ce||a){if(r=fe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,vt(e,i),qe(r,e,i,-1))}return _a(),r=fs(Error(M(421))),bi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Sg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ie=_t(i.nextSibling),Me=t,Z=!0,Xe=null,e!==null&&(Be[Ve++]=ft,Be[Ve++]=pt,Be[Ve++]=cn,ft=e.id,pt=e.overflow,cn=t),t=za(t,r.children),t.flags|=4096,t)}function Ju(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ul(e.return,t,n)}function ps(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Df(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(xe(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ju(e,n,t);else if(e.tag===19)Ju(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ps(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&so(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ps(t,!0,n,null,o);break;case"together":ps(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ug(e,t,n){switch(t.tag){case 3:_f(t),Gn();break;case 5:cf(t);break;case 1:Ae(t.type)&&eo(t);break;case 4:ba(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Q(ro,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?Ff(e,t,n):(Q(te,te.current&1),e=yt(e,t,n),e!==null?e.sibling:null);Q(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Df(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,Lf(e,t,n)}return yt(e,t,n)}var Rf,vl,Bf,Vf;Rf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vl=function(){};Bf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,rn(lt.current);var o=null;switch(n){case"input":i=Rs(e,i),r=Rs(e,r),o=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),o=[];break;case"textarea":i=$s(e,i),r=$s(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zi)}Gs(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mr.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&X("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Vf=function(e,t,n,r){n!==r&&(t.flags|=4)};function dr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function cg(e,t,n){var r=t.pendingProps;switch(ha(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Ae(t.type)&&Ji(),ve(t),null;case 3:return r=t.stateNode,Wn(),K(Pe),K(we),ka(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(Cl(Xe),Xe=null))),vl(e,t),ve(t),null;case 5:Ea(t);var i=rn(Gr.current);if(n=t.type,e!==null&&t.stateNode!=null)Bf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return ve(t),null}if(e=rn(lt.current),xi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[nt]=t,r[$r]=o,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<vr.length;i++)X(vr[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":au(r,o),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},X("invalid",r);break;case"textarea":cu(r,o),X("invalid",r)}Gs(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&wi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&wi(r.textContent,a,e),i=["children",""+a]):Mr.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&X("scroll",r)}switch(n){case"input":di(r),uu(r,o,!0);break;case"textarea":di(r),du(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Zi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=md(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[nt]=t,e[$r]=r,Rf(e,t,!1,!1),t.stateNode=e;e:{switch(s=Us(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<vr.length;i++)X(vr[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":au(e,r),i=Rs(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),X("invalid",e);break;case"textarea":cu(e,r),i=$s(e,r),X("invalid",e);break;default:i=r}Gs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?vd(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hd(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&jr(e,l):typeof l=="number"&&jr(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Mr.hasOwnProperty(o)?l!=null&&o==="onScroll"&&X("scroll",e):l!=null&&ea(e,o,l,s))}switch(n){case"input":di(e),uu(e,r,!1);break;case"textarea":di(e),du(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$t(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Vf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=rn(Gr.current),rn(lt.current),xi(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(o=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:wi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return ve(t),null;case 13:if(K(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Ie!==null&&t.mode&1&&!(t.flags&128))of(),Gn(),t.flags|=98560,o=!1;else if(o=xi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(M(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[nt]=t}else Gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else Xe!==null&&(Cl(Xe),Xe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?ue===0&&(ue=3):_a())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Wn(),vl(e,t),e===null&&Br(t.stateNode.containerInfo),ve(t),null;case 10:return wa(t.type._context),ve(t),null;case 17:return Ae(t.type)&&Ji(),ve(t),null;case 19:if(K(te),o=t.memoizedState,o===null)return ve(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)dr(o,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=so(e),s!==null){for(t.flags|=128,dr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(te,te.current&1|2),t.child}e=e.sibling}o.tail!==null&&oe()>Qn&&(t.flags|=128,r=!0,dr(o,!1),t.lanes=4194304)}else{if(!r)if(e=so(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Z)return ve(t),null}else 2*oe()-o.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,dr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=oe(),t.sibling=null,n=te.current,Q(te,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Oa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function dg(e,t){switch(ha(t),t.tag){case 1:return Ae(t.type)&&Ji(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),K(Pe),K(we),ka(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ea(t),null;case 13:if(K(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(te),null;case 4:return Wn(),null;case 10:return wa(t.type._context),null;case 22:case 23:return Oa(),null;case 24:return null;default:return null}}var Ei=!1,ye=!1,fg=typeof WeakSet=="function"?WeakSet:Set,O=null;function zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function yl(e,t,n){try{n()}catch(r){ie(e,t,r)}}var ec=!1;function pg(e,t){if(tl=Xi,e=Ud(),pa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,f=0,p=e,m=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===e)break t;if(m===n&&++c===i&&(a=s),m===o&&++f===r&&(l=s),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nl={focusedElem:e,selectionRange:n},Xi=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,E=y.memoizedState,u=t.stateNode,d=u.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ye(t.type,w),E);u.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(S){ie(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return y=ec,ec=!1,y}function Pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&yl(t,n,o)}i=i.next}while(i!==r)}}function Io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $f(e){var t=e.alternate;t!==null&&(e.alternate=null,$f(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[$r],delete t[ol],delete t[Xh],delete t[Kh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hf(e){return e.tag===5||e.tag===3||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zi));else if(r!==4&&(e=e.child,e!==null))for(xl(e,t,n),e=e.sibling;e!==null;)xl(e,t,n),e=e.sibling}function Sl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Sl(e,t,n),e=e.sibling;e!==null;)Sl(e,t,n),e=e.sibling}var pe=null,Qe=!1;function Et(e,t,n){for(n=n.child;n!==null;)Gf(e,t,n),n=n.sibling}function Gf(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Eo,n)}catch{}switch(n.tag){case 5:ye||zn(n,t);case 6:var r=pe,i=Qe;pe=null,Et(e,t,n),pe=r,Qe=i,pe!==null&&(Qe?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(Qe?(e=pe,n=n.stateNode,e.nodeType===8?ss(e.parentNode,n):e.nodeType===1&&ss(e,n),Fr(e)):ss(pe,n.stateNode));break;case 4:r=pe,i=Qe,pe=n.stateNode.containerInfo,Qe=!0,Et(e,t,n),pe=r,Qe=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&yl(n,t,s),i=i.next}while(i!==r)}Et(e,t,n);break;case 1:if(!ye&&(zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ie(n,t,a)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Et(e,t,n),ye=r):Et(e,t,n);break;default:Et(e,t,n)}}function nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fg),t.forEach(function(r){var i=bg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:pe=a.stateNode,Qe=!1;break e;case 3:pe=a.stateNode.containerInfo,Qe=!0;break e;case 4:pe=a.stateNode.containerInfo,Qe=!0;break e}a=a.return}if(pe===null)throw Error(M(160));Gf(o,s,i),pe=null,Qe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ie(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uf(t,e),t=t.sibling}function Uf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),Je(e),r&4){try{Pr(3,e,e.return),Io(3,e)}catch(w){ie(e,e.return,w)}try{Pr(5,e,e.return)}catch(w){ie(e,e.return,w)}}break;case 1:We(t,e),Je(e),r&512&&n!==null&&zn(n,n.return);break;case 5:if(We(t,e),Je(e),r&512&&n!==null&&zn(n,n.return),e.flags&32){var i=e.stateNode;try{jr(i,"")}catch(w){ie(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&fd(i,o),Us(a,s);var c=Us(a,o);for(s=0;s<l.length;s+=2){var f=l[s],p=l[s+1];f==="style"?vd(i,p):f==="dangerouslySetInnerHTML"?hd(i,p):f==="children"?jr(i,p):ea(i,f,p,c)}switch(a){case"input":Bs(i,o);break;case"textarea":pd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Ln(i,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?Ln(i,!!o.multiple,o.defaultValue,!0):Ln(i,!!o.multiple,o.multiple?[]:"",!1))}i[$r]=o}catch(w){ie(e,e.return,w)}}break;case 6:if(We(t,e),Je(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){ie(e,e.return,w)}}break;case 3:if(We(t,e),Je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(w){ie(e,e.return,w)}break;case 4:We(t,e),Je(e);break;case 13:We(t,e),Je(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ja=oe())),r&4&&nc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(c=ye)||f,We(t,e),ye=c):We(t,e),Je(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(O=e,f=e.child;f!==null;){for(p=O=f;O!==null;){switch(m=O,v=m.child,m.tag){case 0:case 11:case 14:case 15:Pr(4,m,m.return);break;case 1:zn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){ie(r,n,w)}}break;case 5:zn(m,m.return);break;case 22:if(m.memoizedState!==null){ic(p);continue}}v!==null?(v.return=m,O=v):ic(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gd("display",s))}catch(w){ie(e,e.return,w)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){ie(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:We(t,e),Je(e),r&4&&nc(e);break;case 21:break;default:We(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hf(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jr(i,""),r.flags&=-33);var o=tc(e);Sl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=tc(e);xl(e,a,s);break;default:throw Error(M(161))}}catch(l){ie(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mg(e,t,n){O=e,Wf(e)}function Wf(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ei;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ye;a=Ei;var c=ye;if(Ei=s,(ye=l)&&!c)for(O=i;O!==null;)s=O,l=s.child,s.tag===22&&s.memoizedState!==null?oc(i):l!==null?(l.return=s,O=l):oc(i);for(;o!==null;)O=o,Wf(o),o=o.sibling;O=i,Ei=a,ye=c}rc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):rc(e)}}function rc(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Io(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Vu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Vu(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Fr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}ye||t.flags&512&&wl(t)}catch(m){ie(t,t.return,m)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function ic(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function oc(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Io(4,t)}catch(l){ie(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ie(t,i,l)}}var o=t.return;try{wl(t)}catch(l){ie(t,o,l)}break;case 5:var s=t.return;try{wl(t)}catch(l){ie(t,s,l)}}}catch(l){ie(t,t.return,l)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var hg=Math.ceil,uo=St.ReactCurrentDispatcher,Ia=St.ReactCurrentOwner,He=St.ReactCurrentBatchConfig,G=0,fe=null,le=null,me=0,Ne=0,In=Qt(0),ue=0,Qr=null,fn=0,Mo=0,Ma=0,Ar=null,ke=null,ja=0,Qn=1/0,ct=null,co=!1,bl=null,Dt=null,ki=!1,zt=null,fo=0,Tr=0,El=null,Di=-1,Ri=0;function Se(){return G&6?oe():Di!==-1?Di:Di=oe()}function Rt(e){return e.mode&1?G&2&&me!==0?me&-me:Zh.transition!==null?(Ri===0&&(Ri=Nd()),Ri):(e=W,e!==0||(e=window.event,e=e===void 0?16:_d(e.type)),e):1}function qe(e,t,n,r){if(50<Tr)throw Tr=0,El=null,Error(M(185));Jr(e,n,r),(!(G&2)||e!==fe)&&(e===fe&&(!(G&2)&&(Mo|=n),ue===4&&Tt(e,me)),Te(e,r),n===1&&G===0&&!(t.mode&1)&&(Qn=oe()+500,To&&Xt()))}function Te(e,t){var n=e.callbackNode;Zm(e,t);var r=Qi(e,e===fe?me:0);if(r===0)n!==null&&mu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mu(n),t===1)e.tag===0?qh(sc.bind(null,e)):tf(sc.bind(null,e)),Yh(function(){!(G&6)&&Xt()}),n=null;else{switch(zd(r)){case 1:n=oa;break;case 4:n=Ad;break;case 16:n=Yi;break;case 536870912:n=Td;break;default:n=Yi}n=ep(n,Yf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yf(e,t){if(Di=-1,Ri=0,G&6)throw Error(M(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=Qi(e,e===fe?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=po(e,r);else{t=r;var i=G;G|=2;var o=Xf();(fe!==e||me!==t)&&(ct=null,Qn=oe()+500,on(e,t));do try{yg();break}catch(a){Qf(e,a)}while(!0);ya(),uo.current=o,G=i,le!==null?t=0:(fe=null,me=0,t=ue)}if(t!==0){if(t===2&&(i=Ks(e),i!==0&&(r=i,t=kl(e,i))),t===1)throw n=Qr,on(e,0),Tt(e,r),Te(e,oe()),n;if(t===6)Tt(e,r);else{if(i=e.current.alternate,!(r&30)&&!gg(i)&&(t=po(e,r),t===2&&(o=Ks(e),o!==0&&(r=o,t=kl(e,o))),t===1))throw n=Qr,on(e,0),Tt(e,r),Te(e,oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:Jt(e,ke,ct);break;case 3:if(Tt(e,r),(r&130023424)===r&&(t=ja+500-oe(),10<t)){if(Qi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=il(Jt.bind(null,e,ke,ct),t);break}Jt(e,ke,ct);break;case 4:if(Tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ke(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hg(r/1960))-r,10<r){e.timeoutHandle=il(Jt.bind(null,e,ke,ct),r);break}Jt(e,ke,ct);break;case 5:Jt(e,ke,ct);break;default:throw Error(M(329))}}}return Te(e,oe()),e.callbackNode===n?Yf.bind(null,e):null}function kl(e,t){var n=Ar;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=po(e,t),e!==2&&(t=ke,ke=n,t!==null&&Cl(t)),e}function Cl(e){ke===null?ke=e:ke.push.apply(ke,e)}function gg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ze(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tt(e,t){for(t&=~Ma,t&=~Mo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(G&6)throw Error(M(327));Rn();var t=Qi(e,0);if(!(t&1))return Te(e,oe()),null;var n=po(e,t);if(e.tag!==0&&n===2){var r=Ks(e);r!==0&&(t=r,n=kl(e,r))}if(n===1)throw n=Qr,on(e,0),Tt(e,t),Te(e,oe()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,ke,ct),Te(e,oe()),null}function La(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Qn=oe()+500,To&&Xt())}}function pn(e){zt!==null&&zt.tag===0&&!(G&6)&&Rn();var t=G;G|=1;var n=He.transition,r=W;try{if(He.transition=null,W=1,e)return e()}finally{W=r,He.transition=n,G=t,!(G&6)&&Xt()}}function Oa(){Ne=In.current,K(In)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wh(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(ha(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ji();break;case 3:Wn(),K(Pe),K(we),ka();break;case 5:Ea(r);break;case 4:Wn();break;case 13:K(te);break;case 19:K(te);break;case 10:wa(r.type._context);break;case 22:case 23:Oa()}n=n.return}if(fe=e,le=e=Bt(e.current,null),me=Ne=t,ue=0,Qr=null,Ma=Mo=fn=0,ke=Ar=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}nn=null}return e}function Qf(e,t){do{var n=le;try{if(ya(),Oi.current=ao,lo){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}lo=!1}if(dn=0,de=ae=ne=null,Cr=!1,Ur=0,Ia.current=null,n===null||n.return===null){ue=1,Qr=t,le=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=me,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Yu(s);if(v!==null){v.flags&=-257,Qu(v,s,a,o,t),v.mode&1&&Wu(o,c,t),t=v,l=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){Wu(o,c,t),_a();break e}l=Error(M(426))}}else if(Z&&a.mode&1){var E=Yu(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Qu(E,s,a,o,t),ga(Yn(l,a));break e}}o=l=Yn(l,a),ue!==4&&(ue=2),Ar===null?Ar=[o]:Ar.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var u=If(o,l,t);Bu(o,u);break e;case 1:a=l;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Dt===null||!Dt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=Mf(o,a,t);Bu(o,S);break e}}o=o.return}while(o!==null)}qf(n)}catch(k){t=k,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function Xf(){var e=uo.current;return uo.current=ao,e===null?ao:e}function _a(){(ue===0||ue===3||ue===2)&&(ue=4),fe===null||!(fn&268435455)&&!(Mo&268435455)||Tt(fe,me)}function po(e,t){var n=G;G|=2;var r=Xf();(fe!==e||me!==t)&&(ct=null,on(e,t));do try{vg();break}catch(i){Qf(e,i)}while(!0);if(ya(),G=n,uo.current=r,le!==null)throw Error(M(261));return fe=null,me=0,ue}function vg(){for(;le!==null;)Kf(le)}function yg(){for(;le!==null&&!Hm();)Kf(le)}function Kf(e){var t=Jf(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?qf(e):le=t,Ia.current=null}function qf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=dg(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,le=null;return}}else if(n=cg(n,t,Ne),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ue===0&&(ue=5)}function Jt(e,t,n){var r=W,i=He.transition;try{He.transition=null,W=1,wg(e,t,n,r)}finally{He.transition=i,W=r}return null}function wg(e,t,n,r){do Rn();while(zt!==null);if(G&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Jm(e,o),e===fe&&(le=fe=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ki||(ki=!0,ep(Yi,function(){return Rn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=He.transition,He.transition=null;var s=W;W=1;var a=G;G|=4,Ia.current=null,pg(e,n),Uf(n,e),Rh(nl),Xi=!!tl,nl=tl=null,e.current=n,mg(n),Gm(),G=a,W=s,He.transition=o}else e.current=n;if(ki&&(ki=!1,zt=e,fo=i),o=e.pendingLanes,o===0&&(Dt=null),Ym(n.stateNode),Te(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(co)throw co=!1,e=bl,bl=null,e;return fo&1&&e.tag!==0&&Rn(),o=e.pendingLanes,o&1?e===El?Tr++:(Tr=0,El=e):Tr=0,Xt(),null}function Rn(){if(zt!==null){var e=zd(fo),t=He.transition,n=W;try{if(He.transition=null,W=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,fo=0,G&6)throw Error(M(331));var i=G;for(G|=4,O=e.current;O!==null;){var o=O,s=o.child;if(O.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(O=c;O!==null;){var f=O;switch(f.tag){case 0:case 11:case 15:Pr(8,f,o)}var p=f.child;if(p!==null)p.return=f,O=p;else for(;O!==null;){f=O;var m=f.sibling,v=f.return;if($f(f),f===c){O=null;break}if(m!==null){m.return=v,O=m;break}O=v}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}O=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,O=s;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Pr(9,o,o.return)}var u=o.sibling;if(u!==null){u.return=o.return,O=u;break e}O=o.return}}var d=e.current;for(O=d;O!==null;){s=O;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,O=h;else e:for(s=d;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Io(9,a)}}catch(k){ie(a,a.return,k)}if(a===s){O=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,O=S;break e}O=a.return}}if(G=i,Xt(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Eo,e)}catch{}r=!0}return r}finally{W=n,He.transition=t}}return!1}function lc(e,t,n){t=Yn(n,t),t=If(e,t,1),e=Ft(e,t,1),t=Se(),e!==null&&(Jr(e,1,t),Te(e,t))}function ie(e,t,n){if(e.tag===3)lc(e,e,n);else for(;t!==null;){if(t.tag===3){lc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dt===null||!Dt.has(r))){e=Yn(n,e),e=Mf(t,e,1),t=Ft(t,e,1),e=Se(),t!==null&&(Jr(t,1,e),Te(t,e));break}}t=t.return}}function xg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(me&n)===n&&(ue===4||ue===3&&(me&130023424)===me&&500>oe()-ja?on(e,0):Ma|=n),Te(e,t)}function Zf(e,t){t===0&&(e.mode&1?(t=mi,mi<<=1,!(mi&130023424)&&(mi=4194304)):t=1);var n=Se();e=vt(e,t),e!==null&&(Jr(e,t,n),Te(e,n))}function Sg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zf(e,n)}function bg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Zf(e,n)}var Jf;Jf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,ug(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,Z&&t.flags&1048576&&nf(t,no,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fi(e,t),e=t.pendingProps;var i=Hn(t,we.current);Dn(t,n),i=Pa(null,t,r,e,i,n);var o=Aa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,eo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sa(t),i.updater=zo,t.stateNode=i,i._reactInternals=t,dl(t,r,e,n),t=ml(null,t,r,!0,o,n)):(t.tag=0,Z&&o&&ma(t),xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=kg(r),e=Ye(r,e),i){case 0:t=pl(null,t,r,e,n);break e;case 1:t=qu(null,t,r,e,n);break e;case 11:t=Xu(null,t,r,e,n);break e;case 14:t=Ku(null,t,r,Ye(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),pl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),qu(e,t,r,i,n);case 3:e:{if(_f(t),e===null)throw Error(M(387));r=t.pendingProps,o=t.memoizedState,i=o.element,uf(e,t),oo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Yn(Error(M(423)),t),t=Zu(e,t,r,n,i);break e}else if(r!==i){i=Yn(Error(M(424)),t),t=Zu(e,t,r,n,i);break e}else for(Ie=_t(t.stateNode.containerInfo.firstChild),Me=t,Z=!0,Xe=null,n=lf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gn(),r===i){t=yt(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return cf(t),e===null&&al(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,rl(r,i)?s=null:o!==null&&rl(r,o)&&(t.flags|=32),Of(e,t),xe(e,t,s,n),t.child;case 6:return e===null&&al(t),null;case 13:return Ff(e,t,n);case 4:return ba(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Un(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Xu(e,t,r,i,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Q(ro,r._currentValue),r._currentValue=s,o!==null)if(Ze(o.value,s)){if(o.children===i.children&&!Pe.current){t=yt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=mt(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ul(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(M(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ul(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Dn(t,n),i=Ge(i),r=r(i),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),Ku(e,t,r,i,n);case 15:return jf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Fi(e,t),t.tag=1,Ae(r)?(e=!0,eo(t)):e=!1,Dn(t,n),zf(t,r,i),dl(t,r,i,n),ml(null,t,r,!0,e,n);case 19:return Df(e,t,n);case 22:return Lf(e,t,n)}throw Error(M(156,t.tag))};function ep(e,t){return Pd(e,t)}function Eg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new Eg(e,t,n,r)}function Fa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kg(e){if(typeof e=="function")return Fa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===na)return 11;if(e===ra)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bi(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Fa(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Sn:return sn(n.children,i,o,t);case ta:s=8,i|=8;break;case Os:return e=$e(12,n,t,i|2),e.elementType=Os,e.lanes=o,e;case _s:return e=$e(13,n,t,i),e.elementType=_s,e.lanes=o,e;case Fs:return e=$e(19,n,t,i),e.elementType=Fs,e.lanes=o,e;case ud:return jo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ld:s=10;break e;case ad:s=9;break e;case na:s=11;break e;case ra:s=14;break e;case Ct:s=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=$e(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function sn(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function jo(e,t,n,r){return e=$e(22,e,r,t),e.elementType=ud,e.lanes=n,e.stateNode={isHidden:!1},e}function ms(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function hs(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xo(0),this.expirationTimes=Xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Da(e,t,n,r,i,o,s,a,l){return e=new Cg(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=$e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sa(o),e}function Pg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function tp(e){if(!e)return Ht;e=e._reactInternals;e:{if(yn(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Ae(n))return ef(e,n,t)}return t}function np(e,t,n,r,i,o,s,a,l){return e=Da(n,r,!0,e,i,o,s,a,l),e.context=tp(null),n=e.current,r=Se(),i=Rt(n),o=mt(r,i),o.callback=t??null,Ft(n,o,i),e.current.lanes=i,Jr(e,i,r),Te(e,r),e}function Lo(e,t,n,r){var i=t.current,o=Se(),s=Rt(i);return n=tp(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(i,t,s),e!==null&&(qe(e,i,s,o),Li(e,i,s)),s}function mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ra(e,t){ac(e,t),(e=e.alternate)&&ac(e,t)}function Ag(){return null}var rp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ba(e){this._internalRoot=e}Oo.prototype.render=Ba.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Lo(e,t,null,null)};Oo.prototype.unmount=Ba.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Lo(null,e,null,null)}),t[gt]=null}};function Oo(e){this._internalRoot=e}Oo.prototype.unstable_scheduleHydration=function(e){if(e){var t=jd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&Od(e)}};function Va(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uc(){}function Tg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=mo(s);o.call(c)}}var s=np(t,r,e,0,null,!1,!1,"",uc);return e._reactRootContainer=s,e[gt]=s.current,Br(e.nodeType===8?e.parentNode:e),pn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=mo(l);a.call(c)}}var l=Da(e,0,!1,null,null,!1,!1,"",uc);return e._reactRootContainer=l,e[gt]=l.current,Br(e.nodeType===8?e.parentNode:e),pn(function(){Lo(t,l,n,r)}),l}function Fo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=mo(s);a.call(l)}}Lo(t,s,e,i)}else s=Tg(n,t,e,i,r);return mo(s)}Id=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=gr(t.pendingLanes);n!==0&&(sa(t,n|1),Te(t,oe()),!(G&6)&&(Qn=oe()+500,Xt()))}break;case 13:pn(function(){var r=vt(e,1);if(r!==null){var i=Se();qe(r,e,1,i)}}),Ra(e,1)}};la=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=Se();qe(t,e,134217728,n)}Ra(e,134217728)}};Md=function(e){if(e.tag===13){var t=Rt(e),n=vt(e,t);if(n!==null){var r=Se();qe(n,e,t,r)}Ra(e,t)}};jd=function(){return W};Ld=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};Ys=function(e,t,n){switch(t){case"input":if(Bs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ao(r);if(!i)throw Error(M(90));dd(r),Bs(r,i)}}}break;case"textarea":pd(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};xd=La;Sd=pn;var Ng={usingClientEntryPoint:!1,Events:[ti,Cn,Ao,yd,wd,La]},fr={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zg={bundleType:fr.bundleType,version:fr.version,rendererPackageName:fr.rendererPackageName,rendererConfig:fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kd(e),e===null?null:e.stateNode},findFiberByHostInstance:fr.findFiberByHostInstance||Ag,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ci.isDisabled&&Ci.supportsFiber)try{Eo=Ci.inject(zg),st=Ci}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ng;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Va(t))throw Error(M(200));return Pg(e,t,null,n)};_e.createRoot=function(e,t){if(!Va(e))throw Error(M(299));var n=!1,r="",i=rp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Da(e,1,!1,null,null,n,!1,r,i),e[gt]=t.current,Br(e.nodeType===8?e.parentNode:e),new Ba(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=kd(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return pn(e)};_e.hydrate=function(e,t,n){if(!_o(t))throw Error(M(200));return Fo(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!Va(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=rp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=np(t,null,e,1,n??null,i,!1,o,s),e[gt]=t.current,Br(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Oo(t)};_e.render=function(e,t,n){if(!_o(t))throw Error(M(200));return Fo(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!_o(e))throw Error(M(40));return e._reactRootContainer?(pn(function(){Fo(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};_e.unstable_batchedUpdates=La;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_o(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Fo(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function ip(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ip)}catch(e){console.error(e)}}ip(),rd.exports=_e;var Ig=rd.exports,cc=Ig;Vt.createRoot=cc.createRoot,Vt.hydrateRoot=cc.hydrateRoot;const ri={prefix:"fas",iconName:"circle-chevron-right",icon:[512,512,["chevron-circle-right"],"f138","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"]},Mg={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]},er=Mg,jg={prefix:"fas",iconName:"window-maximize",icon:[512,512,[128470],"f2d0","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM96 96l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Do={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Lg={prefix:"fas",iconName:"volume-xmark",icon:[576,512,["volume-mute","volume-times"],"f6a9","M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},tr=Lg,Og={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},nr=Og,ii={prefix:"fas",iconName:"circle-chevron-left",icon:[512,512,["chevron-circle-left"],"f137","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"]},_g={prefix:"fas",iconName:"window-minimize",icon:[512,512,[128469],"f2d1","M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 416z"]},dc=()=>{};let $a={},op={},sp=null,lp={mark:dc,measure:dc};try{typeof window<"u"&&($a=window),typeof document<"u"&&(op=document),typeof MutationObserver<"u"&&(sp=MutationObserver),typeof performance<"u"&&(lp=performance)}catch{}const{userAgent:fc=""}=$a.navigator||{},Gt=$a,q=op,pc=sp,Pi=lp;Gt.document;const bt=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",ap=~fc.indexOf("MSIE")||~fc.indexOf("Trident/");var J="classic",up="duotone",je="sharp",Le="sharp-duotone",Fg=[J,up,je,Le],Dg={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},mc={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Rg=["kit"],Bg=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Vg=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,$g={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Hg={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Gg={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Ug={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Wg={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Yg={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},cp={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Qg=["solid","regular","light","thin","duotone","brands"],dp=[1,2,3,4,5,6,7,8,9,10],Xg=dp.concat([11,12,13,14,15,16,17,18,19,20]),yr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Kg=[...Object.keys(Ug),...Qg,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",yr.GROUP,yr.SWAP_OPACITY,yr.PRIMARY,yr.SECONDARY].concat(dp.map(e=>"".concat(e,"x"))).concat(Xg.map(e=>"w-".concat(e))),qg={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Zg={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Jg={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},hc={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const wt="___FONT_AWESOME___",Pl=16,fp="fa",pp="svg-inline--fa",mn="data-fa-i2svg",Al="data-fa-pseudo-element",e0="data-fa-pseudo-element-pending",Ha="data-prefix",Ga="data-icon",gc="fontawesome-i2svg",t0="async",n0=["HTML","HEAD","STYLE","SCRIPT"],mp=(()=>{try{return!0}catch{return!1}})(),hp=[J,je,Le];function oi(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[J]}})}const gp={...cp};gp[J]={...cp[J],...mc.kit,...mc["kit-duotone"]};const ln=oi(gp),Tl={...Yg};Tl[J]={...Tl[J],...hc.kit,...hc["kit-duotone"]};const Xr=oi(Tl),Nl={...Wg};Nl[J]={...Nl[J],...Jg.kit};const an=oi(Nl),zl={...Gg};zl[J]={...zl[J],...Zg.kit};const r0=oi(zl),i0=Bg,vp="fa-layers-text",o0=Vg,s0={...Dg};oi(s0);const l0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gs=yr,Xn=new Set;Object.keys(Xr[J]).map(Xn.add.bind(Xn));Object.keys(Xr[je]).map(Xn.add.bind(Xn));Object.keys(Xr[Le]).map(Xn.add.bind(Xn));const a0=[...Rg,...Kg],Nr=Gt.FontAwesomeConfig||{};function u0(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function c0(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}q&&typeof q.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=c0(u0(n));i!=null&&(Nr[r]=i)});const yp={styleDefault:"solid",familyDefault:"classic",cssPrefix:fp,replacementClass:pp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Nr.familyPrefix&&(Nr.cssPrefix=Nr.familyPrefix);const Kn={...yp,...Nr};Kn.autoReplaceSvg||(Kn.observeMutations=!1);const D={};Object.keys(yp).forEach(e=>{Object.defineProperty(D,e,{enumerable:!0,set:function(t){Kn[e]=t,zr.forEach(n=>n(D))},get:function(){return Kn[e]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(e){Kn.cssPrefix=e,zr.forEach(t=>t(D))},get:function(){return Kn.cssPrefix}});Gt.FontAwesomeConfig=D;const zr=[];function d0(e){return zr.push(e),()=>{zr.splice(zr.indexOf(e),1)}}const kt=Pl,rt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function f0(e){if(!e||!bt)return;const t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=q.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return q.head.insertBefore(t,r),e}const p0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Kr(){let e=12,t="";for(;e-- >0;)t+=p0[Math.random()*62|0];return t}function rr(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ua(e){return e.classList?rr(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function wp(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function m0(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(wp(e[n]),'" '),"").trim()}function Ro(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Wa(e){return e.size!==rt.size||e.x!==rt.x||e.y!==rt.y||e.rotate!==rt.rotate||e.flipX||e.flipY}function h0(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function g0(e){let{transform:t,width:n=Pl,height:r=Pl,startCentered:i=!1}=e,o="";return i&&ap?o+="translate(".concat(t.x/kt-n/2,"em, ").concat(t.y/kt-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(t.x/kt,"em), calc(-50% + ").concat(t.y/kt,"em)) "):o+="translate(".concat(t.x/kt,"em, ").concat(t.y/kt,"em) "),o+="scale(".concat(t.size/kt*(t.flipX?-1:1),", ").concat(t.size/kt*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var v0=`:root, :host {
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
}`;function xp(){const e=fp,t=pp,n=D.cssPrefix,r=D.replacementClass;let i=v0;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}let vc=!1;function vs(){D.autoAddCss&&!vc&&(f0(xp()),vc=!0)}var y0={mixout(){return{dom:{css:xp,insertCss:vs}}},hooks(){return{beforeDOMElementCreation(){vs()},beforeI2svg(){vs()}}}};const xt=Gt||{};xt[wt]||(xt[wt]={});xt[wt].styles||(xt[wt].styles={});xt[wt].hooks||(xt[wt].hooks={});xt[wt].shims||(xt[wt].shims=[]);var it=xt[wt];const Sp=[],bp=function(){q.removeEventListener("DOMContentLoaded",bp),ho=1,Sp.map(e=>e())};let ho=!1;bt&&(ho=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),ho||q.addEventListener("DOMContentLoaded",bp));function w0(e){bt&&(ho?setTimeout(e,0):Sp.push(e))}function si(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?wp(e):"<".concat(t," ").concat(m0(n),">").concat(r.map(si).join(""),"</").concat(t,">")}function yc(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ys=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=n,l,c,f;for(r===void 0?(l=1,f=t[o[0]]):(l=0,f=r);l<s;l++)c=o[l],f=a(f,t[c],c,t);return f};function x0(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Il(e){const t=x0(e);return t.length===1?t[0].toString(16):null}function S0(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function wc(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ml(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=wc(t);typeof it.hooks.addPack=="function"&&!r?it.hooks.addPack(e,wc(t)):it.styles[e]={...it.styles[e]||{},...i},e==="fas"&&Ml("fa",t)}const{styles:en,shims:b0}=it,E0={[J]:Object.values(an[J]),[je]:Object.values(an[je]),[Le]:Object.values(an[Le])};let Ya=null,Ep={},kp={},Cp={},Pp={},Ap={};const k0={[J]:Object.keys(ln[J]),[je]:Object.keys(ln[je]),[Le]:Object.keys(ln[Le])};function C0(e){return~a0.indexOf(e)}function P0(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!C0(i)?i:null}const Tp=()=>{const e=r=>ys(en,(i,o,s)=>(i[s]=ys(o,r,{}),i),{});Ep=e((r,i,o)=>(i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{r[a.toString(16)]=o}),r)),kp=e((r,i,o)=>(r[o]=o,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{r[a]=o}),r)),Ap=e((r,i,o)=>{const s=i[2];return r[o]=o,s.forEach(a=>{r[a]=o}),r});const t="far"in en||D.autoFetchSvg,n=ys(b0,(r,i)=>{const o=i[0];let s=i[1];const a=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:a}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:a}),r},{names:{},unicodes:{}});Cp=n.names,Pp=n.unicodes,Ya=Bo(D.styleDefault,{family:D.familyDefault})};d0(e=>{Ya=Bo(e.styleDefault,{family:D.familyDefault})});Tp();function Qa(e,t){return(Ep[e]||{})[t]}function A0(e,t){return(kp[e]||{})[t]}function It(e,t){return(Ap[e]||{})[t]}function Np(e){return Cp[e]||{prefix:null,iconName:null}}function T0(e){const t=Pp[e],n=Qa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ut(){return Ya}const Xa=()=>({prefix:null,iconName:null,rest:[]});function Bo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=J}=t,r=ln[n][e],i=Xr[n][e]||Xr[n][r],o=e in it.styles?e:null;return i||o||null}const N0={[J]:Object.keys(an[J]),[je]:Object.keys(an[je]),[Le]:Object.keys(an[Le])};function Vo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[J]:"".concat(D.cssPrefix,"-").concat(J),[je]:"".concat(D.cssPrefix,"-").concat(je),[Le]:"".concat(D.cssPrefix,"-").concat(Le)};let i=null,o=J;const s=Fg.filter(l=>l!==up);s.forEach(l=>{(e.includes(r[l])||e.some(c=>N0[l].includes(c)))&&(o=l)});const a=e.reduce((l,c)=>{const f=P0(D.cssPrefix,c);if(en[c]?(c=E0[o].includes(c)?r0[o][c]:c,i=c,l.prefix=c):k0[o].indexOf(c)>-1?(i=c,l.prefix=Bo(c,{family:o})):f?l.iconName=f:c!==D.replacementClass&&!s.some(p=>c===r[p])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const p=i==="fa"?Np(l.iconName):{},m=It(l.prefix,l.iconName);p.prefix&&(i=null),l.iconName=p.iconName||m||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!en.far&&en.fas&&!D.autoFetchSvg&&(l.prefix="fas")}return l},Xa());return(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(a.prefix="fad"),!a.prefix&&o===je&&(en.fass||D.autoFetchSvg)&&(a.prefix="fass",a.iconName=It(a.prefix,a.iconName)||a.iconName),!a.prefix&&o===Le&&(en.fasds||D.autoFetchSvg)&&(a.prefix="fasds",a.iconName=It(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=Ut()||"fas"),a}class z0{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...i[o]},Ml(o,i[o]);const s=an[J][o];s&&Ml(s,i[o]),Tp()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:o,iconName:s,icon:a}=r[i],l=a[2];t[o]||(t[o]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(t[o][c]=a)}),t[o][s]=a}),t}}let xc=[],Mn={};const Bn={},I0=Object.keys(Bn);function M0(e,t){let{mixoutsTo:n}=t;return xc=e,Mn={},Object.keys(Bn).forEach(r=>{I0.indexOf(r)===-1&&delete Bn[r]}),xc.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{Mn[s]||(Mn[s]=[]),Mn[s].push(o[s])})}r.provides&&r.provides(Bn)}),n}function jl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(Mn[e]||[]).forEach(s=>{t=s.apply(null,[t,...r])}),t}function hn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(Mn[e]||[]).forEach(o=>{o.apply(null,n)})}function Wt(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Bn[e]?Bn[e].apply(null,t):void 0}function Ll(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Ut();if(t)return t=It(n,t)||t,yc(zp.definitions,n,t)||yc(it.styles,n,t)}const zp=new z0,j0=()=>{D.autoReplaceSvg=!1,D.observeMutations=!1,hn("noAuto")},L0={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return bt?(hn("beforeI2svg",e),Wt("pseudoElements2svg",e),Wt("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,w0(()=>{_0({autoReplaceSvgRoot:t}),hn("watch",e)})}},O0={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:It(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Bo(e[0]);return{prefix:n,iconName:It(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(D.cssPrefix,"-"))>-1||e.match(i0))){const t=Vo(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Ut(),iconName:It(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Ut();return{prefix:t,iconName:It(t,e)||e}}}},De={noAuto:j0,config:D,dom:L0,parse:O0,library:zp,findIconDefinition:Ll,toHtml:si},_0=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=q}=e;(Object.keys(it.styles).length>0||D.autoFetchSvg)&&bt&&D.autoReplaceSvg&&De.dom.i2svg({node:t})};function $o(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>si(n))}}),Object.defineProperty(e,"node",{get:function(){if(!bt)return;const n=q.createElement("div");return n.innerHTML=e.html,n.children}}),e}function F0(e){let{children:t,main:n,mask:r,attributes:i,styles:o,transform:s}=e;if(Wa(s)&&n.found&&!r.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};i.style=Ro({...o,"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")})}return[{tag:"svg",attributes:i,children:t}]}function D0(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:o}=e;const s=o===!0?"".concat(t,"-").concat(D.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:s},children:r}]}]}function Ka(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:o,symbol:s,title:a,maskId:l,titleId:c,extra:f,watchable:p=!1}=e,{width:m,height:v}=n.found?n:t,y=r==="fak",w=[D.replacementClass,i?"".concat(D.cssPrefix,"-").concat(i):""].filter(k=>f.classes.indexOf(k)===-1).filter(k=>k!==""||!!k).concat(f.classes).join(" ");let E={children:[],attributes:{...f.attributes,"data-prefix":r,"data-icon":i,class:w,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(v)}};const u=y&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/v*16*.0625,"em")}:{};p&&(E.attributes[mn]=""),a&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(c||Kr())},children:[a]}),delete E.attributes.title);const d={...E,prefix:r,iconName:i,main:t,mask:n,maskId:l,transform:o,symbol:s,styles:{...u,...f.styles}},{children:h,attributes:S}=n.found&&t.found?Wt("generateAbstractMask",d)||{children:[],attributes:{}}:Wt("generateAbstractIcon",d)||{children:[],attributes:{}};return d.children=h,d.attributes=S,s?D0(d):F0(d)}function Sc(e){const{content:t,width:n,height:r,transform:i,title:o,extra:s,watchable:a=!1}=e,l={...s.attributes,...o?{title:o}:{},class:s.classes.join(" ")};a&&(l[mn]="");const c={...s.styles};Wa(i)&&(c.transform=g0({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const f=Ro(c);f.length>0&&(l.style=f);const p=[];return p.push({tag:"span",attributes:l,children:[t]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function R0(e){const{content:t,title:n,extra:r}=e,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=Ro(r.styles);o.length>0&&(i.style=o);const s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:ws}=it;function Ol(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(gs.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(gs.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(gs.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const B0={found:!1,width:512,height:512};function V0(e,t){!mp&&!D.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function _l(e,t){let n=t;return t==="fa"&&D.styleDefault!==null&&(t=Ut()),new Promise((r,i)=>{if(n==="fa"){const o=Np(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ws[t]&&ws[t][e]){const o=ws[t][e];return r(Ol(o))}V0(e,t),r({...B0,icon:D.showMissingIcons&&e?Wt("missingIconAbstract")||{}:{}})})}const bc=()=>{},Fl=D.measurePerformance&&Pi&&Pi.mark&&Pi.measure?Pi:{mark:bc,measure:bc},wr='FA "6.6.0"',$0=e=>(Fl.mark("".concat(wr," ").concat(e," begins")),()=>Ip(e)),Ip=e=>{Fl.mark("".concat(wr," ").concat(e," ends")),Fl.measure("".concat(wr," ").concat(e),"".concat(wr," ").concat(e," begins"),"".concat(wr," ").concat(e," ends"))};var qa={begin:$0,end:Ip};const Vi=()=>{};function Ec(e){return typeof(e.getAttribute?e.getAttribute(mn):null)=="string"}function H0(e){const t=e.getAttribute?e.getAttribute(Ha):null,n=e.getAttribute?e.getAttribute(Ga):null;return t&&n}function G0(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(D.replacementClass)}function U0(){return D.autoReplaceSvg===!0?$i.replace:$i[D.autoReplaceSvg]||$i.replace}function W0(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function Y0(e){return q.createElement(e)}function Mp(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?W0:Y0}=t;if(typeof e=="string")return q.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Mp(o,{ceFn:n}))}),r}function Q0(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const $i={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Mp(n),t)}),t.getAttribute(mn)===null&&D.keepOriginalSource){let n=q.createComment(Q0(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Ua(t).indexOf(D.replacementClass))return $i.replace(e);const r=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,a)=>(a===D.replacementClass||a.match(r)?s.toSvg.push(a):s.toNode.push(a),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const i=n.map(o=>si(o)).join(`
`);t.setAttribute(mn,""),t.innerHTML=i}};function kc(e){e()}function jp(e,t){const n=typeof t=="function"?t:Vi;if(e.length===0)n();else{let r=kc;D.mutateApproach===t0&&(r=Gt.requestAnimationFrame||kc),r(()=>{const i=U0(),o=qa.begin("mutate");e.map(i),o(),n()})}}let Za=!1;function Lp(){Za=!0}function Dl(){Za=!1}let go=null;function Cc(e){if(!pc||!D.observeMutations)return;const{treeCallback:t=Vi,nodeCallback:n=Vi,pseudoElementsCallback:r=Vi,observeMutationsRoot:i=q}=e;go=new pc(o=>{if(Za)return;const s=Ut();rr(o).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Ec(a.addedNodes[0])&&(D.searchPseudoElements&&r(a.target),t(a.target)),a.type==="attributes"&&a.target.parentNode&&D.searchPseudoElements&&r(a.target.parentNode),a.type==="attributes"&&Ec(a.target)&&~l0.indexOf(a.attributeName))if(a.attributeName==="class"&&H0(a.target)){const{prefix:l,iconName:c}=Vo(Ua(a.target));a.target.setAttribute(Ha,l||s),c&&a.target.setAttribute(Ga,c)}else G0(a.target)&&n(a.target)})}),bt&&go.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function X0(){go&&go.disconnect()}function K0(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function q0(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=Vo(Ua(e));return i.prefix||(i.prefix=Ut()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=A0(i.prefix,e.innerText)||Qa(i.prefix,Il(e.innerText))),!i.iconName&&D.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Z0(e){const t=rr(e.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return D.autoA11y&&(n?t["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(r||Kr()):(t["aria-hidden"]="true",t.focusable="false")),t}function J0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:rt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Pc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=q0(e),o=Z0(e),s=jl("parseNodeAttributes",{},e);let a=t.styleParser?K0(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:rt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:o},...s}}const{styles:ev}=it;function Op(e){const t=D.autoReplaceSvg==="nest"?Pc(e,{styleParser:!1}):Pc(e);return~t.extra.classes.indexOf(vp)?Wt("generateLayersText",e,t):Wt("generateSvgReplacementMutation",e,t)}let at=new Set;hp.map(e=>{at.add("fa-".concat(e))});Object.keys(ln[J]).map(at.add.bind(at));Object.keys(ln[je]).map(at.add.bind(at));Object.keys(ln[Le]).map(at.add.bind(at));at=[...at];function Ac(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!bt)return Promise.resolve();const n=q.documentElement.classList,r=f=>n.add("".concat(gc,"-").concat(f)),i=f=>n.remove("".concat(gc,"-").concat(f)),o=D.autoFetchSvg?at:hp.map(f=>"fa-".concat(f)).concat(Object.keys(ev));o.includes("fa")||o.push("fa");const s=[".".concat(vp,":not([").concat(mn,"])")].concat(o.map(f=>".".concat(f,":not([").concat(mn,"])"))).join(", ");if(s.length===0)return Promise.resolve();let a=[];try{a=rr(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();const l=qa.begin("onTree"),c=a.reduce((f,p)=>{try{const m=Op(p);m&&f.push(m)}catch(m){mp||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,p)=>{Promise.all(c).then(m=>{jp(m,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),f()})}).catch(m=>{l(),p(m)})})}function tv(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Op(e).then(n=>{n&&jp([n],t)})}function nv(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Ll(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Ll(i||{})),e(r,{...n,mask:i})}}const rv=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=rt,symbol:r=!1,mask:i=null,maskId:o=null,title:s=null,titleId:a=null,classes:l=[],attributes:c={},styles:f={}}=t;if(!e)return;const{prefix:p,iconName:m,icon:v}=e;return $o({type:"icon",...e},()=>(hn("beforeDOMElementCreation",{iconDefinition:e,params:t}),D.autoA11y&&(s?c["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(a||Kr()):(c["aria-hidden"]="true",c.focusable="false")),Ka({icons:{main:Ol(v),mask:i?Ol(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:{...rt,...n},symbol:r,title:s,maskId:o,titleId:a,extra:{attributes:c,styles:f,classes:l}})))};var iv={mixout(){return{icon:nv(rv)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Ac,e.nodeCallback=tv,e}}},provides(e){e.i2svg=function(t){const{node:n=q,callback:r=()=>{}}=t;return Ac(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:o,prefix:s,transform:a,symbol:l,mask:c,maskId:f,extra:p}=n;return new Promise((m,v)=>{Promise.all([_l(r,s),c.iconName?_l(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[w,E]=y;m([t,Ka({icons:{main:w,mask:E},prefix:s,iconName:r,transform:a,symbol:l,maskId:f,title:i,titleId:o,extra:p,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:o,styles:s}=t;const a=Ro(s);a.length>0&&(r.style=a);let l;return Wa(o)&&(l=Wt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:r}}}},ov={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return $o({type:"layer"},()=>{hn("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(o=>{r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},sv={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:o={}}=t;return $o({type:"counter",content:e},()=>(hn("beforeDOMElementCreation",{content:e,params:t}),R0({content:e.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(D.cssPrefix,"-layers-counter"),...r]}})))}}}},lv={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=rt,title:r=null,classes:i=[],attributes:o={},styles:s={}}=t;return $o({type:"text",content:e},()=>(hn("beforeDOMElementCreation",{content:e,params:t}),Sc({content:e,transform:{...rt,...n},title:r,extra:{attributes:o,styles:s,classes:["".concat(D.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:o}=n;let s=null,a=null;if(ap){const l=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();s=c.width/l,a=c.height/l}return D.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,Sc({content:t.innerHTML,width:s,height:a,transform:i,title:r,extra:o,watchable:!0})])}}};const av=new RegExp('"',"ug"),Tc=[1105920,1112319],Nc={FontAwesome:{normal:"fas",400:"fas"},...Hg,...$g,...qg},Rl=Object.keys(Nc).reduce((e,t)=>(e[t.toLowerCase()]=Nc[t],e),{}),uv=Object.keys(Rl).reduce((e,t)=>{const n=Rl[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function cv(e){const t=e.replace(av,""),n=S0(t,0),r=n>=Tc[0]&&n<=Tc[1],i=t.length===2?t[0]===t[1]:!1;return{value:Il(i?t[0]:t),isSecondary:r||i}}function dv(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(Rl[n]||{})[i]||uv[n]}function zc(e,t){const n="".concat(e0).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const s=rr(e.children).filter(m=>m.getAttribute(Al)===t)[0],a=Gt.getComputedStyle(e,t),l=a.getPropertyValue("font-family"),c=l.match(o0),f=a.getPropertyValue("font-weight"),p=a.getPropertyValue("content");if(s&&!c)return e.removeChild(s),r();if(c&&p!=="none"&&p!==""){const m=a.getPropertyValue("content");let v=dv(l,f);const{value:y,isSecondary:w}=cv(m),E=c[0].startsWith("FontAwesome");let u=Qa(v,y),d=u;if(E){const h=T0(y);h.iconName&&h.prefix&&(u=h.iconName,v=h.prefix)}if(u&&!w&&(!s||s.getAttribute(Ha)!==v||s.getAttribute(Ga)!==d)){e.setAttribute(n,d),s&&e.removeChild(s);const h=J0(),{extra:S}=h;S.attributes[Al]=t,_l(u,v).then(k=>{const T=Ka({...h,icons:{main:k,mask:Xa()},prefix:v,iconName:d,extra:S,watchable:!0}),z=q.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=T.map(A=>si(A)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function fv(e){return Promise.all([zc(e,"::before"),zc(e,"::after")])}function pv(e){return e.parentNode!==document.head&&!~n0.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Al)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ic(e){if(bt)return new Promise((t,n)=>{const r=rr(e.querySelectorAll("*")).filter(pv).map(fv),i=qa.begin("searchPseudoElements");Lp(),Promise.all(r).then(()=>{i(),Dl(),t()}).catch(()=>{i(),Dl(),n()})})}var mv={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Ic,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=q}=t;D.searchPseudoElements&&Ic(n)}}};let Mc=!1;var hv={mixout(){return{dom:{unwatch(){Lp(),Mc=!0}}}},hooks(){return{bootstrap(){Cc(jl("mutationObserverCallbacks",{}))},noAuto(){X0()},watch(e){const{observeMutationsRoot:t}=e;Mc?Dl():Cc(jl("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const jc=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),o=i[0];let s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var gv={mixout(){return{parse:{transform:e=>jc(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=jc(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:o}=t;const s={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(a," ").concat(l," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:f,path:p};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const xs={x:0,y:0,width:"100%",height:"100%"};function Lc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function vv(e){return e.tag==="g"?e.children:[e]}var yv={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Vo(n.split(" ").map(i=>i.trim())):Xa();return r.prefix||(r.prefix=Ut()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:o,maskId:s,transform:a}=t;const{width:l,icon:c}=i,{width:f,icon:p}=o,m=h0({transform:a,containerWidth:f,iconWidth:l}),v={tag:"rect",attributes:{...xs,fill:"white"}},y=c.children?{children:c.children.map(Lc)}:{},w={tag:"g",attributes:{...m.inner},children:[Lc({tag:c.tag,attributes:{...c.attributes,...m.path},...y})]},E={tag:"g",attributes:{...m.outer},children:[w]},u="mask-".concat(s||Kr()),d="clip-".concat(s||Kr()),h={tag:"mask",attributes:{...xs,id:u,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[v,E]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:vv(p)},h]};return n.push(S,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(u,")"),...xs}}),{children:n,attributes:r}}}},wv={provides(e){let t=!1;Gt.matchMedia&&(t=Gt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...i,attributeName:"opacity"},s={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||s.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},xv={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},Sv=[y0,iv,ov,sv,lv,mv,hv,gv,yv,wv,xv];M0(Sv,{mixoutsTo:De});De.noAuto;De.config;De.library;De.dom;const Bl=De.parse;De.findIconDefinition;De.toHtml;const bv=De.icon;De.layer;De.text;De.counter;var _p={exports:{}},Ev="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",kv=Ev,Cv=kv;function Fp(){}function Dp(){}Dp.resetWarningCache=Fp;var Pv=function(){function e(r,i,o,s,a,l){if(l!==Cv){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Dp,resetWarningCache:Fp};return n.PropTypes=n,n};_p.exports=Pv();var Av=_p.exports;const V=Uc(Av);function Oc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function tt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oc(Object(n),!0).forEach(function(r){jn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function vo(e){"@babel/helpers - typeof";return vo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vo(e)}function jn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Nv(e,t){if(e==null)return{};var n=Tv(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Vl(e){return zv(e)||Iv(e)||Mv(e)||jv()}function zv(e){if(Array.isArray(e))return $l(e)}function Iv(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Mv(e,t){if(e){if(typeof e=="string")return $l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $l(e,t)}}function $l(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function jv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lv(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,c=e.spinPulse,f=e.spinReverse,p=e.pulse,m=e.fixedWidth,v=e.inverse,y=e.border,w=e.listItem,E=e.flip,u=e.size,d=e.rotation,h=e.pull,S=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":v,"fa-border":y,"fa-li":w,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},jn(t,"fa-".concat(u),typeof u<"u"&&u!==null),jn(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),jn(t,"fa-pull-".concat(h),typeof h<"u"&&h!==null),jn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(S).map(function(k){return S[k]?k:null}).filter(function(k){return k})}function Ov(e){return e=e-0,e===e}function Rp(e){return Ov(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var _v=["style"];function Fv(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Dv(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Rp(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[Fv(i)]=o:t[i]=o,t},{})}function Bp(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Bp(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var f=t.attributes[c];switch(c){case"class":l.attrs.className=f,delete t.attributes.class;break;case"style":l.attrs.style=Dv(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[Rp(c)]=f}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=Nv(n,_v);return i.attrs.style=tt(tt({},i.attrs.style),s),e.apply(void 0,[t.tag,tt(tt({},i.attrs),a)].concat(Vl(r)))}var Vp=!1;try{Vp=!0}catch{}function Rv(){if(!Vp&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function _c(e){if(e&&vo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Bl.icon)return Bl.icon(e);if(e===null)return null;if(e&&vo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ss(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?jn({},e,t):{}}var Fc={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},U=Y.forwardRef(function(e,t){var n=tt(tt({},Fc),e),r=n.icon,i=n.mask,o=n.symbol,s=n.className,a=n.title,l=n.titleId,c=n.maskId,f=_c(r),p=Ss("classes",[].concat(Vl(Lv(n)),Vl((s||"").split(" ")))),m=Ss("transform",typeof n.transform=="string"?Bl.transform(n.transform):n.transform),v=Ss("mask",_c(i)),y=bv(f,tt(tt(tt(tt({},p),m),v),{},{symbol:o,title:a,titleId:l,maskId:c}));if(!y)return Rv("Could not find icon",f),null;var w=y.abstract,E={ref:t};return Object.keys(n).forEach(function(u){Fc.hasOwnProperty(u)||(E[u]=n[u])}),Bv(w[0],E)});U.displayName="FontAwesomeIcon";U.propTypes={beat:V.bool,border:V.bool,beatFade:V.bool,bounce:V.bool,className:V.string,fade:V.bool,flash:V.bool,mask:V.oneOfType([V.object,V.array,V.string]),maskId:V.string,fixedWidth:V.bool,inverse:V.bool,flip:V.oneOf([!0,!1,"horizontal","vertical","both"]),icon:V.oneOfType([V.object,V.array,V.string]),listItem:V.bool,pull:V.oneOf(["right","left"]),pulse:V.bool,rotation:V.oneOf([0,90,180,270]),shake:V.bool,size:V.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:V.bool,spinPulse:V.bool,spinReverse:V.bool,symbol:V.oneOfType([V.bool,V.string]),title:V.string,titleId:V.string,transform:V.oneOfType([V.string,V.object]),swapOpacity:V.bool};var Bv=Bp.bind(null,Y.createElement);const Vv=()=>g.jsx("div",{className:"video-grid skeleton-container",children:g.jsx("div",{className:"video-content",children:g.jsx("p",{className:"grid-txt"})})}),$v=({videos:e,campaigns:t,loading:n,widgetsDiv:r})=>{const[i,o]=P.useState(null),[s,a]=P.useState(null),l=m=>{o(m)},c=()=>{o(null)},f=m=>{a(m)},p=()=>{a(null)};return n?g.jsx("div",{className:"outer-grid",children:g.jsx("div",{className:"grid",children:Array.from({length:6}).map((m,v)=>g.jsx(Vv,{},v))})}):g.jsx(g.Fragment,{children:g.jsxs("div",{className:"outer-grid",children:[g.jsx("div",{className:"grid",children:t.map((m,v)=>{var y,w,E,u,d,h,S;return g.jsxs("div",{onClick:()=>l(v),children:[g.jsx("div",{className:"video-grid",onMouseEnter:()=>f(v),onMouseLeave:p,onTouchStart:()=>f(v),onTouchEnd:p,children:s===v?g.jsx("video",{src:m.videoId[0],loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"}):g.jsx("img",{className:"thumbnail",src:m.campaignPhoto,width:"300",height:"200",alt:"video thumbnail"})}),r?g.jsxs("div",{className:"widgetsDivBookdiv123",children:[g.jsx("div",{className:"img1 widgetsDivImg1",children:g.jsx("img",{className:"img widgetsDivImg",src:m.campaignPhoto,alt:"Campaign"})}),g.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[g.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname widgetsDivHotelname",children:m.campaignName}),g.jsx("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer"}),((y=m.offerPrice)==null?void 0:y.currency)&&((w=m.offerPrice)==null?void 0:w.price)&&g.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"widgetsDivOfferprice",children:["From"," ",g.jsxs(g.Fragment,{children:[m.offerPrice.currency,m.offerPrice.price]})]})]}),g.jsx("div",{className:"divbtn",children:g.jsx("a",{href:m.campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn widgetsDivBookbtn",children:"Book"})})]}):g.jsx("div",{className:"video-content",children:g.jsxs("p",{className:"txt",children:[((E=t[v])==null?void 0:E.campaignName)&&g.jsxs(g.Fragment,{children:[t[v].campaignName," ",g.jsx("br",{})]}),((d=(u=t[v])==null?void 0:u.offerPrice)==null?void 0:d.currency)&&((S=(h=t[v])==null?void 0:h.offerPrice)==null?void 0:S.price)&&g.jsxs(g.Fragment,{children:["From",g.jsxs(g.Fragment,{children:[" ",t[v].offerPrice.currency,t[v].offerPrice.price]})]})]})})]},v)})}),i!==null&&g.jsx(Hv,{campaigns:t,currentIndex:i,onClose:c})]})})},Hv=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=P.useState(t),[o,s]=P.useState(0),[a,l]=P.useState({mutedAll:!1}),[c,f]=P.useState(!1),[p,m]=P.useState(!1),[v,y]=P.useState(!1),[w,E]=P.useState(!1),u=P.useRef([]);P.useRef(null);const d=P.useRef(null);P.useEffect(()=>{const b=()=>{if(document.visibilityState==="hidden"){const x=u.current[o];x&&!x.paused&&(x.pause(),f(!0),E(!0))}};return document.addEventListener("visibilitychange",b),()=>{document.removeEventListener("visibilitychange",b)}},[o]),P.useEffect(()=>{const b=new IntersectionObserver(x=>{x.forEach(C=>{const N=u.current.indexOf(C.target);C.isIntersecting?(C.target.play(),s(N),E(!1)):C.target.pause()})},{threshold:.5});return s(0),u.current.forEach(x=>{x&&b.observe(x)}),()=>{u.current.forEach(x=>{x&&b.unobserve(x)})}},[r]),P.useEffect(()=>{const b=u.current[o];b&&b.play()},[o]);const h=()=>{r!==null?r+1<e.length?(i(r+1),s(0)):(i(0),s(0)):e.length>0&&(i(0),s(0)),m(!1),y(!1)},S=()=>{r!==null?r>0?(i(r-1),s(0)):(i(e.length-1),s(0)):e.length>0&&(i(e.length-1),s(0)),m(!1),y(!1)},k=b=>{const x=u.current[b];x&&(x.paused?(x.play(),console.log("Playing")):(x.pause(),console.log("Paused")),f(x.paused),E(x.paused))},T=()=>{u.current.forEach(x=>{x.muted=!a.mutedAll}),l(x=>({mutedAll:!x.mutedAll}))},z=()=>{y(!v)},A=(b,x=65)=>b.length>x?{truncated:b.slice(0,x)+"...",hasMore:!0}:{truncated:b,hasMore:!1},I=b=>{console.log("Video ended, checking if animation should play");const x=e[r];if(b<x.videoId.length-1)console.log("Not the last video, playing animation"),m(!0),setTimeout(()=>{const C=u.current[b];C&&(C.currentTime=0,C.play()),m(!1)},1500);else{console.log("Last video, no animation, just restart");const C=u.current[b];C&&(C.currentTime=0,C.play())}};return P.useEffect(()=>{s(0),d.current&&(d.current.scrollTop=0)},[r]),P.useEffect(()=>{const b=()=>{m(!1),y(!1)},x=d.current;return x&&x.addEventListener("scroll",b),()=>{x&&x.removeEventListener("scroll",b)}},[]),g.jsxs("div",{className:"whole123",children:[g.jsx("div",{className:"prevbtn123",onClick:S,children:g.jsx(U,{icon:ii})}),g.jsx("div",{className:"nextbtn123",onClick:h,children:g.jsx(U,{icon:ri})}),g.jsxs("div",{className:"reelsContainer",ref:d,children:[e[r].videoId.map((b,x)=>{var C,N,_,B;return g.jsx("div",{className:"reel",children:g.jsxs("div",{className:"video-container1",children:[g.jsx("div",{className:"closediv123",children:g.jsx("button",{className:"closebtn123",onClick:n,children:g.jsx(U,{icon:nr})})}),g.jsx("div",{className:"functions",children:g.jsx(U,{icon:a.mutedAll?tr:er,className:"volume123",onClick:T,style:{cursor:"pointer"}})}),g.jsx("video",{ref:L=>u.current[x]=L,src:b,className:"ad",loop:!1,playsInline:!0,controls:!1,autoPlay:x===o,onClick:()=>k(x),onPause:()=>{f(!0)},onPlay:()=>{f(!1)},onEnded:()=>I(x)}),c&&w&&g.jsx(U,{icon:Do,onClick:()=>k(x),className:"play-button123"}),g.jsxs("div",{className:"bookdiv123",children:[g.jsx("div",{className:"img1",children:g.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),g.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[g.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),g.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[v?e[r].campaignDetails:A(e[r].campaignDetails).truncated,A(e[r].campaignDetails).hasMore&&g.jsx("div",{children:g.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:z,children:v?" View Less":" View More"})})]}),g.jsxs("div",{className:"bottom-div",children:[" ",((N=(C=e[r])==null?void 0:C.offerPrice)==null?void 0:N.currency)&&((B=(_=e[r])==null?void 0:_.offerPrice)==null?void 0:B.price)&&g.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From"," ",e[r].offerPrice.currency,e[r].offerPrice.price]}),g.jsx("div",{className:"divbtn",children:g.jsx("a",{href:e[r].campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]})]})]})},x)}),p&&g.jsx("dotlottie-player",{src:"https://lottie.host/9dbbaa88-603c-407f-a9d4-f40ef822c697/JKZJQpvfeR.json",background:"transparent",speed:"1",style:{width:"29vh",height:"29vh",position:"absolute",bottom:"0",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"34px",color:"white",zIndex:1e3},loop:!0,autoplay:!0})]})]})},$p=()=>{const[e,t]=P.useState([]),[n,r]=P.useState([]),[i,o]=P.useState(!0),[s,a]=P.useState(!1);return P.useEffect(()=>{const l=document.getElementById("root-grid"),c=l.dataset.campaignId,f=l.dataset.widgetStatus;a(f==="true"),(async m=>{try{const y=await(await fetch(`https://widgetapi.tripbuilder.in/${m}`)).json(),w=y.campaigns.map(E=>E.videoId[0]);t(w),r(y.campaigns)}catch(v){console.error("Error fetching data:",v)}})(c)},[]),P.useEffect(()=>{n.length>0&&o(!1)},[n]),g.jsxs("div",{className:"App",children:[g.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

            .down-arrow {
  bottom: 0;
  position: absolute;
  top: 90%;
  left: 50%;
  /* max-height: 10vh; */
  transform: translate(-50%, -50%);
  font-size: 34px;
  color: white;
  z-index: 1000;
}
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

.video-content > .grid-txt {
  color: white;
   text-align: start;
    margin-bottom: 1em !important;
      font-family: 'Poppins';


} 
  @media (max-width: 600px) {
  .video-content > .grid-txt {
  font-size: 2.5vw;
  }
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
  justify-content: center;
}

.bottom-div {
  display: flex;
  gap: 2rem;
  align-items: end;
  justify-content: space-between;
}
.closediv123 {
    position: absolute;
    top: 0vh;
    right: 0%;
    z-index: 10;
}

.functions {
   position: absolute;
    top: 60%;
    right: 0;
    transform: translateY(-50%);
    font-size: 3vh;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 1rem;
    color: #ffffff;
    cursor: pointer;
    z-index: 10;
}

.nextbtn123,
.prevbtn123 {
    background-color: transparent;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3.5vh;
    padding: 1rem;
    color: #ffffff94;
    border-radius: 0.5rem;
    cursor: pointer;
    z-index: 10;
}



.closebtn123 {
  background-color: transparent;
    border: none;
    outline: none;
    font-size: 3.5vh;
    padding: 1rem;
    color: #ffffff;
    cursor: pointer;
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



 
 
}

  .bookdiv123 {

    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
    width: 97%;
    min-height: 15vh;
    background-color: rgb(255 255 255 / 66%);
    border-radius: 1.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh;
    box-sizing: border-box;

}
@media screen and (max-width: 450px) {
  .offer {
    text-wrap: wrap;
  }
}
.img1 {
  flex: 0 0 22%;
  display: flex;
  height: 13vh;
  justify-content: center;
  align-items: center;
}

.img {
  width: 100%;
  height: 100%;
  border-radius: 1vh;
}

.text {
  text-align: left;
  margin-left: 1vh;
  margin-right: 1vh;
  flex-grow: 1;
  line-height:normal;
  padding:0em !important;
}

.hotelname {
        margin-top: 1.1vh !important;
    margin-bottom: 1.6vh !important;
    color: black;
    font-weight: bolder;
    line-height: 0;
    font-family: 'Poppins';
    font-size: 2vh;
}
.offer {
     color: black;
    margin: 2px 0;
    font-family: 'Poppins';
    font-size: 1.6vh;
    line-height: 1.4;
    margin: 1.2vh 0 0 0;
     padding: 0 !important;
  background-color: rgba(255, 255, 255, 0) !important;
    font-weight: 400;
    text-wrap: wrap;
}

.view-more {   
 font-family: 'Poppins';

  font-size: 1.6vh;
  color: rgb(114, 94, 205);
  cursor: pointer;
}

.offerprice {
    color: black;
    margin: 1vh 0;
    font-weight: bold;
          font-family: 'Poppins';

    font-size: 1.8vh !important;
    line-height: 1;
    text-wrap: wrap;
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
    font-family: 'Poppins';
    font-size: 1.8vh;
    text-align: center;
    padding: 1vh 2vh;
    font-weight: 700;
}



.widgetsDivImg1{
height:3.2rem!important;
}
.widgetsDivImg{
border-radius:8px !important;
}
.widgetsDivHotelname{
font-size:0.7rem !important;
}
.widgetsDivOfferprice {
 
    margin: 4px 0 !important;
    

    font-size: 0.8rem !important;
   
}
    .widgetsDivBookbtn{
      font-size: 0.67rem !important;
    padding: .7rem 1rem !important;
    }
    .widgetsDivBookdiv123{
        position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    /* min-height: 15vh; */
    background-color: rgba(255, 255, 255, 0.863);
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem;
    opacity: 0.8;
     z-index: 100;
    }

    @media (max-width: 600px) {
   .widgetsDivBookdiv123 {
   
    border-radius: 12px;
  
    padding: .3rem !important;
    opacity: 0.8;
}
    .widgetsDivImg1 {
    height: 2.2rem !important;
}
    .text {

    margin-left: .3rem !important;
    margin-right: .3rem !important;
}
    .widgetsDivHotelname {
    font-size: 0.3rem !important;
}
    .widgetsDivOfferprice {
  
    margin: 4px 0 !important;
   
    font-size: 0.3rem !important;
   
}
    .widgetsDivBookbtn {
    font-size: 0.4rem !important;
    padding: .4rem .5rem !important;
}
}
`}),g.jsx($v,{videos:e,campaigns:n,loading:i,widgetsDiv:s})]})},Gv=({campaigns:e,loading:t})=>{var C,N,_,B;const n=P.useRef(null),[r,i]=P.useState(!1),[o,s]=P.useState(null),[a,l]=P.useState(0),[c,f]=P.useState(!1),[p,m]=P.useState(0),[v,y]=P.useState({}),[w,E]=P.useState(!1);P.useEffect(()=>{const L=()=>{document.hidden&&n.current&&(n.current.muted=!0,f(!0))};return document.addEventListener("visibilitychange",L),()=>{document.removeEventListener("visibilitychange",L)}},[]),P.useEffect(()=>{const L=n.current,H=()=>{E(L.paused),L.paused&&L.play()};return L&&(L.addEventListener("play",H),L.addEventListener("pause",H)),()=>{L&&(L.removeEventListener("play",H),L.removeEventListener("pause",H))}},[o,a,e]),P.useEffect(()=>{if(o!==null&&e[o]){const L=e[o];if(a<L.videoId.length){const H=L.videoId[a];n.current.src=H,n.current.play(),m(0),E(!1)}}},[o,a,e]),P.useEffect(()=>{const L=setInterval(()=>{n.current&&m(n.current.currentTime/n.current.duration*100)},100);return()=>clearInterval(L)},[a,o]),P.useEffect(()=>{n.current&&(n.current.muted=c)},[c]);const u=L=>{s(L),l(0)},d=()=>{if(y(L=>({...L,[`${o}-${a}`]:!0})),m(100),o!==null&&e[o]){const L=e[o];a+1<L.videoId.length?l(a+1):o+1<e.length?(s(o+1),l(0)):(s(null),l(0))}},h=()=>{o!==null?o+1<e.length?(s(o+1),l(0)):(s(0),l(0)):e.length>0&&(s(0),l(0)),i(!1)},S=()=>{o!==null?o>0?(s(o-1),l(0)):(s(e.length-1),l(0)):e.length>0&&(s(e.length-1),l(0)),i(!1)},k=()=>{o!==null&&e[o]&&a+1<e[o].videoId.length&&(y(L=>({...L,[`${o}-${a}`]:!0})),l(a+1)),i(!1)},T=()=>{o!==null&&e[o]&&a>0&&l(a-1),i(!1)},z=()=>{f(L=>!L)},A=()=>{s(null),l(0),E(!1),f(!1)},I=L=>{const H=L.currentTarget.getBoundingClientRect(),j=L.clientX-H.left,F=H.width;j<F/2?T():k()},b=()=>{i(!r)},x=(L,H=65)=>L.length>H?{truncated:L.slice(0,H)+"...",hasMore:!0}:{truncated:L,hasMore:!1};return g.jsx(g.Fragment,{children:g.jsxs("div",{className:"storiesHeader",children:[g.jsx("div",{className:"outer",children:e.map((L,H)=>g.jsx("div",{onClick:()=>u(H),className:`inner ${o===H?"active":""} ${L.videoId.some((j,F)=>v[`${H}-${F}`])?"played":"not-played"}`,children:g.jsx("img",{src:L.campaignPhoto,alt:"Campaign",className:"campaign-photo",loading:"lazy"})},H))}),g.jsxs("div",{className:`topp ${o!==null?"active":""}`,children:[g.jsx("div",{className:"next",onClick:h,children:g.jsx(U,{icon:ri})}),g.jsx("div",{className:"previous",onClick:S,children:g.jsx(U,{icon:ii})}),g.jsx("div",{className:"outer-box",children:o!==null&&g.jsxs("div",{className:"boxed-video",children:[g.jsx("div",{className:"mute-unmute",onClick:z,children:c?g.jsx(U,{icon:tr}):g.jsx(U,{icon:er})}),g.jsx("div",{className:"close-button",onClick:A,children:g.jsx(U,{className:"close",icon:nr})}),g.jsx("div",{className:"progress-bar",children:e[o].videoId.map((L,H)=>g.jsx("div",{className:"progress",children:g.jsx("div",{className:"progress1",style:{width:`${H===a?p:v[`${o}-${H}`]?100:0}%`}})},H))}),g.jsx("video",{className:"boxed-video",ref:n,playsInline:!0,onClick:I,onEnded:d,autoPlay:!0,children:"Your browser does not support the video tag."}),g.jsxs("div",{className:"bookdiv",children:[g.jsx("div",{className:"img1",children:g.jsx("img",{className:"img",src:e[o].campaignPhoto,alt:"Campaign",loading:"lazy"})}),g.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[g.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[o].campaignName}),g.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[r?e[o].campaignDetails:x(e[o].campaignDetails,65).truncated,x(e[o].campaignDetails,65).hasMore&&g.jsx("div",{children:g.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:b,children:r?" View Less":" View More"})})]}),g.jsxs("div",{className:"bottom-div",children:[" ",((N=(C=e[o])==null?void 0:C.offerPrice)==null?void 0:N.currency)&&((B=(_=e[o])==null?void 0:_.offerPrice)==null?void 0:B.price)&&g.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From"," ",e[o].offerPrice.currency,e[o].offerPrice.price]}),g.jsx("div",{className:"divbtn",children:g.jsx("a",{href:e[o].campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]})]})]})})]})]})})};function Uv(){P.useState([]);const[e,t]=P.useState([]);P.useState("");const[n,r]=P.useState(!0);return P.useEffect(()=>{const o=document.getElementById("root-stories").dataset.campaignId;o?(async a=>{try{const c=await(await fetch(`https://widgetapi.tripbuilder.in/${a}`)).json();t(c.campaigns)}catch(l){console.error("Error fetching data:",l)}})(o):console.log("no campaign id found!")},[]),P.useEffect(()=>{e.length>0&&r(!1)},[e]),g.jsxs("div",{className:"App1",children:[g.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
                
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
 height: 6rem;
    width: 6rem;
    background-color: rgb(255, 251, 240);
    font-size: 2rem;
    color: black;
    margin: .5rem;
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
  .bottom-div {
  display: flex;
  gap: 2rem;
  align-items: end;
  justify-content: space-between;
}

/* .outer-box {
  height: 40rem;
  width: 51rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
} */

.close-button {
   position: absolute;
    top: 6%;
    right: 0%;
    transform: translateY(-50%);
    font-size: 3.5vh;
    padding: 1rem;
    color: #ffffff;
    border-radius: 0.5rem;
    cursor: pointer;
    z-index: 10;
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
    font-size: 3.5vh;
    padding: 1rem;
    color: #ffffff94;
    border-radius: 0.5rem;
    cursor: pointer;
    z-index: 10;

}

.next {
  right: 0em;
}

.previous {
  left: 0em;
}

.mute-unmute {
   position: absolute;
    top: 60%;
    right: 0%;
    transform: translateY(-50%);
    font-size: 3vh;
    padding: 1rem;
    color: #ffffff;
    border-radius: 0.5rem;
    cursor: pointer;
    z-index: 10;
}


.progress-bar {
display: flex;
    align-items: center;
    // width: 99%;
    padding: 0px 0px;
    height: 0.5vh;
    top: 3%;
    position: relative;
    margin-top: 0px;
}

.progress {
    flex: 1;
    height: 100%;
    background-color: #9795953d;
    transition: 0.1s;
    margin-right: 2px;
    margin: .3rem;
}
.progress1{
  height: 100%;
  background-color: white;
  transition: 0.1s;
  margin-right: 2px; 
}
 .bookdiv {
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
    width: 97%;
    min-height: 15vh;
    background-color: rgb(255 255 255 / 66%);
    border-radius: 1.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh;
    box-sizing: border-box;
    // opacity: 0.8;
}


.img1 {
 flex: 0 0 22%;
    display: flex;
    height: 13vh;
    justify-content: center;
    align-items: center;
}

.img {
     width: 100%;
    height: 100%;
    border-radius: 1vh;
}

.text {
     text-align: left;
    margin-left: 1vh;
    margin-right: 1vh;
    flex-grow: 1;
    padding:0em !important;
   line-height:normal;

}

.hotelname {
    margin-top: 1.1vh !important;
    margin-bottom: 1.6vh !important;
    color: black;
    font-weight: bolder;
    line-height: 0;
    font-family: 'Poppins';
    font-size: 2vh;
}

.offer {
    color: black;
    margin: 2px 0;
    font-family: 'Poppins';
    font-size: 1.6vh;
    line-height: 1.4;
    margin: 1.2vh 0 0 0;
     padding: 0 !important;
  background-color: rgba(255, 255, 255, 0) !important;
    font-weight: 400;
    text-wrap: wrap;
}
.view-more {
  font-size: 1.6vh;
  color: rgb(114, 94, 205);
  cursor: pointer;
      font-family: 'Poppins';

}

.offerprice {
    color: black;
    margin: 1vh 0;
    font-weight: bold;
    font-family: 'Poppins';
    font-size: 1.8vh !important;
    line-height: 1;
    text-wrap: wrap;
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
    font-family: 'Poppins';
    font-size: 1.6vh;
    text-align: center;
    padding: 1vh 2vh;
    font-weight: 600;
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
    }
    
    
    
  .boxed-video::before {
   content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 15vh;
    background: linear-gradient(to bottom, rgb(0 0 0), transparent);
    pointer-events: none;
}`}),g.jsx(Gv,{campaigns:e,loading:n})]})}function Dc(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Ja(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:Dc(t[n])&&Dc(e[n])&&Object.keys(t[n]).length>0&&Ja(e[n],t[n])})}const Hp={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function ir(){const e=typeof document<"u"?document:{};return Ja(e,Hp),e}const Wv={document:Hp,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Re(){const e=typeof window<"u"?window:{};return Ja(e,Wv),e}function Yv(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function Qv(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Hl(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function yo(){return Date.now()}function Xv(e){const t=Re();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function Kv(e,t){t===void 0&&(t="x");const n=Re();let r,i,o;const s=Xv(e);return n.WebKitCSSMatrix?(i=s.transform||s.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Ai(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function qv(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function ze(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!qv(r)){const i=Object.keys(Object(r)).filter(o=>t.indexOf(o)<0);for(let o=0,s=i.length;o<s;o+=1){const a=i[o],l=Object.getOwnPropertyDescriptor(r,a);l!==void 0&&l.enumerable&&(Ai(e[a])&&Ai(r[a])?r[a].__swiper__?e[a]=r[a]:ze(e[a],r[a]):!Ai(e[a])&&Ai(r[a])?(e[a]={},r[a].__swiper__?e[a]=r[a]:ze(e[a],r[a])):e[a]=r[a])}}}return e}function Ti(e,t,n){e.style.setProperty(t,n)}function Gp(e){let{swiper:t,targetPosition:n,side:r}=e;const i=Re(),o=-t.translate;let s=null,a;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=n>o?"next":"prev",f=(m,v)=>c==="next"&&m>=v||c==="prev"&&m<=v,p=()=>{a=new Date().getTime(),s===null&&(s=a);const m=Math.max(Math.min((a-s)/l,1),0),v=.5-Math.cos(m*Math.PI)/2;let y=o+v*(n-o);if(f(y,n)&&(y=n),t.wrapperEl.scrollTo({[r]:y}),f(y,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:y})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(p)};p()}function eu(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function ot(e,t){return t===void 0&&(t=""),[...e.children].filter(n=>n.matches(t))}function wo(e){try{console.warn(e);return}catch{}}function qr(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:Yv(t)),n}function Zv(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Jv(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Mt(e,t){return Re().getComputedStyle(e,null).getPropertyValue(t)}function xo(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Up(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Gl(e,t,n){const r=Re();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function ce(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Wp(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=ot(e.el,`.${r[i]}`)[0];o||(o=qr("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}function e1(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function o(y){let w;return y&&typeof y=="string"&&t.isElement&&(w=t.el.querySelector(y),w)?w:(y&&(typeof y=="string"&&(w=[...document.querySelectorAll(y)]),t.params.uniqueNavElements&&typeof y=="string"&&w&&w.length>1&&t.el.querySelectorAll(y).length===1?w=t.el.querySelector(y):w&&w.length===1&&(w=w[0])),y&&!w?y:w)}function s(y,w){const E=t.params.navigation;y=ce(y),y.forEach(u=>{u&&(u.classList[w?"add":"remove"](...E.disabledClass.split(" ")),u.tagName==="BUTTON"&&(u.disabled=w),t.params.watchOverflow&&t.enabled&&u.classList[t.isLocked?"add":"remove"](E.lockClass))})}function a(){const{nextEl:y,prevEl:w}=t.navigation;if(t.params.loop){s(w,!1),s(y,!1);return}s(w,t.isBeginning&&!t.params.rewind),s(y,t.isEnd&&!t.params.rewind)}function l(y){y.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(y){y.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function f(){const y=t.params.navigation;if(t.params.navigation=Wp(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(y.nextEl||y.prevEl))return;let w=o(y.nextEl),E=o(y.prevEl);Object.assign(t.navigation,{nextEl:w,prevEl:E}),w=ce(w),E=ce(E);const u=(d,h)=>{d&&d.addEventListener("click",h==="next"?c:l),!t.enabled&&d&&d.classList.add(...y.lockClass.split(" "))};w.forEach(d=>u(d,"next")),E.forEach(d=>u(d,"prev"))}function p(){let{nextEl:y,prevEl:w}=t.navigation;y=ce(y),w=ce(w);const E=(u,d)=>{u.removeEventListener("click",d==="next"?c:l),u.classList.remove(...t.params.navigation.disabledClass.split(" "))};y.forEach(u=>E(u,"next")),w.forEach(u=>E(u,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?v():(f(),a())}),r("toEdge fromEdge lock unlock",()=>{a()}),r("destroy",()=>{p()}),r("enable disable",()=>{let{nextEl:y,prevEl:w}=t.navigation;if(y=ce(y),w=ce(w),t.enabled){a();return}[...y,...w].filter(E=>!!E).forEach(E=>E.classList.add(t.params.navigation.lockClass))}),r("click",(y,w)=>{let{nextEl:E,prevEl:u}=t.navigation;E=ce(E),u=ce(u);const d=w.target;let h=u.includes(d)||E.includes(d);if(t.isElement&&!h){const S=w.path||w.composedPath&&w.composedPath();S&&(h=S.find(k=>E.includes(k)||u.includes(k)))}if(t.params.navigation.hideOnClick&&!h){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===d||t.pagination.el.contains(d)))return;let S;E.length?S=E[0].classList.contains(t.params.navigation.hiddenClass):u.length&&(S=u[0].classList.contains(t.params.navigation.hiddenClass)),i(S===!0?"navigationShow":"navigationHide"),[...E,...u].filter(k=>!!k).forEach(k=>k.classList.toggle(t.params.navigation.hiddenClass))}});const m=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),f(),a()},v=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(t.navigation,{enable:m,disable:v,update:a,init:f,destroy:p})}function pr(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function t1(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:u=>u,formatFractionTotal:u=>u,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),t.pagination={el:null,bullets:[]};let s,a=0;function l(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function c(u,d){const{bulletActiveClass:h}=t.params.pagination;u&&(u=u[`${d==="prev"?"previous":"next"}ElementSibling`],u&&(u.classList.add(`${h}-${d}`),u=u[`${d==="prev"?"previous":"next"}ElementSibling`],u&&u.classList.add(`${h}-${d}-${d}`)))}function f(u){const d=u.target.closest(pr(t.params.pagination.bulletClass));if(!d)return;u.preventDefault();const h=xo(d)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===h)return;t.slideToLoop(h)}else t.slideTo(h)}function p(){const u=t.rtl,d=t.params.pagination;if(l())return;let h=t.pagination.el;h=ce(h);let S,k;const T=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,z=t.params.loop?Math.ceil(T/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(k=t.previousRealIndex||0,S=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(S=t.snapIndex,k=t.previousSnapIndex):(k=t.previousIndex||0,S=t.activeIndex||0),d.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const A=t.pagination.bullets;let I,b,x;if(d.dynamicBullets&&(s=Gl(A[0],t.isHorizontal()?"width":"height"),h.forEach(C=>{C.style[t.isHorizontal()?"width":"height"]=`${s*(d.dynamicMainBullets+4)}px`}),d.dynamicMainBullets>1&&k!==void 0&&(a+=S-(k||0),a>d.dynamicMainBullets-1?a=d.dynamicMainBullets-1:a<0&&(a=0)),I=Math.max(S-a,0),b=I+(Math.min(A.length,d.dynamicMainBullets)-1),x=(b+I)/2),A.forEach(C=>{const N=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(_=>`${d.bulletActiveClass}${_}`)].map(_=>typeof _=="string"&&_.includes(" ")?_.split(" "):_).flat();C.classList.remove(...N)}),h.length>1)A.forEach(C=>{const N=xo(C);N===S?C.classList.add(...d.bulletActiveClass.split(" ")):t.isElement&&C.setAttribute("part","bullet"),d.dynamicBullets&&(N>=I&&N<=b&&C.classList.add(...`${d.bulletActiveClass}-main`.split(" ")),N===I&&c(C,"prev"),N===b&&c(C,"next"))});else{const C=A[S];if(C&&C.classList.add(...d.bulletActiveClass.split(" ")),t.isElement&&A.forEach((N,_)=>{N.setAttribute("part",_===S?"bullet-active":"bullet")}),d.dynamicBullets){const N=A[I],_=A[b];for(let B=I;B<=b;B+=1)A[B]&&A[B].classList.add(...`${d.bulletActiveClass}-main`.split(" "));c(N,"prev"),c(_,"next")}}if(d.dynamicBullets){const C=Math.min(A.length,d.dynamicMainBullets+4),N=(s*C-s)/2-x*s,_=u?"right":"left";A.forEach(B=>{B.style[t.isHorizontal()?_:"top"]=`${N}px`})}}h.forEach((A,I)=>{if(d.type==="fraction"&&(A.querySelectorAll(pr(d.currentClass)).forEach(b=>{b.textContent=d.formatFractionCurrent(S+1)}),A.querySelectorAll(pr(d.totalClass)).forEach(b=>{b.textContent=d.formatFractionTotal(z)})),d.type==="progressbar"){let b;d.progressbarOpposite?b=t.isHorizontal()?"vertical":"horizontal":b=t.isHorizontal()?"horizontal":"vertical";const x=(S+1)/z;let C=1,N=1;b==="horizontal"?C=x:N=x,A.querySelectorAll(pr(d.progressbarFillClass)).forEach(_=>{_.style.transform=`translate3d(0,0,0) scaleX(${C}) scaleY(${N})`,_.style.transitionDuration=`${t.params.speed}ms`})}d.type==="custom"&&d.renderCustom?(A.innerHTML=d.renderCustom(t,S+1,z),I===0&&i("paginationRender",A)):(I===0&&i("paginationRender",A),i("paginationUpdate",A)),t.params.watchOverflow&&t.enabled&&A.classList[t.isLocked?"add":"remove"](d.lockClass)})}function m(){const u=t.params.pagination;if(l())return;const d=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let h=t.pagination.el;h=ce(h);let S="";if(u.type==="bullets"){let k=t.params.loop?Math.ceil(d/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&k>d&&(k=d);for(let T=0;T<k;T+=1)u.renderBullet?S+=u.renderBullet.call(t,T,u.bulletClass):S+=`<${u.bulletElement} ${t.isElement?'part="bullet"':""} class="${u.bulletClass}"></${u.bulletElement}>`}u.type==="fraction"&&(u.renderFraction?S=u.renderFraction.call(t,u.currentClass,u.totalClass):S=`<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`),u.type==="progressbar"&&(u.renderProgressbar?S=u.renderProgressbar.call(t,u.progressbarFillClass):S=`<span class="${u.progressbarFillClass}"></span>`),t.pagination.bullets=[],h.forEach(k=>{u.type!=="custom"&&(k.innerHTML=S||""),u.type==="bullets"&&t.pagination.bullets.push(...k.querySelectorAll(pr(u.bulletClass)))}),u.type!=="custom"&&i("paginationRender",h[0])}function v(){t.params.pagination=Wp(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const u=t.params.pagination;if(!u.el)return;let d;typeof u.el=="string"&&t.isElement&&(d=t.el.querySelector(u.el)),!d&&typeof u.el=="string"&&(d=[...document.querySelectorAll(u.el)]),d||(d=u.el),!(!d||d.length===0)&&(t.params.uniqueNavElements&&typeof u.el=="string"&&Array.isArray(d)&&d.length>1&&(d=[...t.el.querySelectorAll(u.el)],d.length>1&&(d=d.filter(h=>Up(h,".swiper")[0]===t.el)[0])),Array.isArray(d)&&d.length===1&&(d=d[0]),Object.assign(t.pagination,{el:d}),d=ce(d),d.forEach(h=>{u.type==="bullets"&&u.clickable&&h.classList.add(...(u.clickableClass||"").split(" ")),h.classList.add(u.modifierClass+u.type),h.classList.add(t.isHorizontal()?u.horizontalClass:u.verticalClass),u.type==="bullets"&&u.dynamicBullets&&(h.classList.add(`${u.modifierClass}${u.type}-dynamic`),a=0,u.dynamicMainBullets<1&&(u.dynamicMainBullets=1)),u.type==="progressbar"&&u.progressbarOpposite&&h.classList.add(u.progressbarOppositeClass),u.clickable&&h.addEventListener("click",f),t.enabled||h.classList.add(u.lockClass)}))}function y(){const u=t.params.pagination;if(l())return;let d=t.pagination.el;d&&(d=ce(d),d.forEach(h=>{h.classList.remove(u.hiddenClass),h.classList.remove(u.modifierClass+u.type),h.classList.remove(t.isHorizontal()?u.horizontalClass:u.verticalClass),u.clickable&&(h.classList.remove(...(u.clickableClass||"").split(" ")),h.removeEventListener("click",f))})),t.pagination.bullets&&t.pagination.bullets.forEach(h=>h.classList.remove(...u.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const u=t.params.pagination;let{el:d}=t.pagination;d=ce(d),d.forEach(h=>{h.classList.remove(u.horizontalClass,u.verticalClass),h.classList.add(t.isHorizontal()?u.horizontalClass:u.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?E():(v(),m(),p())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&p()}),r("snapIndexChange",()=>{p()}),r("snapGridLengthChange",()=>{m(),p()}),r("destroy",()=>{y()}),r("enable disable",()=>{let{el:u}=t.pagination;u&&(u=ce(u),u.forEach(d=>d.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{p()}),r("click",(u,d)=>{const h=d.target,S=ce(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&S&&S.length>0&&!h.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&h===t.navigation.nextEl||t.navigation.prevEl&&h===t.navigation.prevEl))return;const k=S[0].classList.contains(t.params.pagination.hiddenClass);i(k===!0?"paginationShow":"paginationHide"),S.forEach(T=>T.classList.toggle(t.params.pagination.hiddenClass))}});const w=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:u}=t.pagination;u&&(u=ce(u),u.forEach(d=>d.classList.remove(t.params.pagination.paginationDisabledClass))),v(),m(),p()},E=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:u}=t.pagination;u&&(u=ce(u),u.forEach(d=>d.classList.add(t.params.pagination.paginationDisabledClass))),y()};Object.assign(t.pagination,{enable:w,disable:E,render:m,update:p,init:v,destroy:y})}function n1(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:o,overwriteParams:s,perspective:a,recreateShadows:l,getEffectParams:c}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),a&&a()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const p=s?s():{};Object.assign(n.params,p),Object.assign(n.originalParams,p)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(p,m)=>{n.params.effect===t&&o(m)}),r("transitionEnd",()=>{if(n.params.effect===t&&l){if(!c||!c().slideShadows)return;n.slides.forEach(p=>{p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(m=>m.remove())}),l()}});let f;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(f=!0),requestAnimationFrame(()=>{f&&n.slides&&n.slides.length&&(i(),f=!1)}))})}function r1(e,t){const n=eu(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function Rc(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,i=eu(t);let o=i.querySelector(`.${r.split(" ").join(".")}`);return o||(o=qr("div",r.split(" ")),i.append(o)),o}function i1(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),n1({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:s,height:a,slides:l,slidesSizesGrid:c}=t,f=t.params.coverflowEffect,p=t.isHorizontal(),m=t.translate,v=p?-m+s/2:-m+a/2,y=p?f.rotate:-f.rotate,w=f.depth;for(let E=0,u=l.length;E<u;E+=1){const d=l[E],h=c[E],S=d.swiperSlideOffset,k=(v-S-h/2)/h,T=typeof f.modifier=="function"?f.modifier(k):k*f.modifier;let z=p?y*T:0,A=p?0:y*T,I=-w*Math.abs(T),b=f.stretch;typeof b=="string"&&b.indexOf("%")!==-1&&(b=parseFloat(f.stretch)/100*h);let x=p?0:b*T,C=p?b*T:0,N=1-(1-f.scale)*Math.abs(T);Math.abs(C)<.001&&(C=0),Math.abs(x)<.001&&(x=0),Math.abs(I)<.001&&(I=0),Math.abs(z)<.001&&(z=0),Math.abs(A)<.001&&(A=0),Math.abs(N)<.001&&(N=0),t.browser&&t.browser.need3dFix&&(Math.abs(z)/90%2===1&&(z+=.001),Math.abs(A)/90%2===1&&(A+=.001));const _=`translate3d(${C}px,${x}px,${I}px)  rotateX(${A}deg) rotateY(${z}deg) scale(${N})`,B=r1(f,d);if(B.style.transform=_,d.style.zIndex=-Math.abs(Math.round(T))+1,f.slideShadows){let L=p?d.querySelector(".swiper-slide-shadow-left"):d.querySelector(".swiper-slide-shadow-top"),H=p?d.querySelector(".swiper-slide-shadow-right"):d.querySelector(".swiper-slide-shadow-bottom");L||(L=Rc("coverflow",d,p?"left":"top")),H||(H=Rc("coverflow",d,p?"right":"bottom")),L&&(L.style.opacity=T>0?T:0),H&&(H.style.opacity=-T>0?-T:0)}}},setTransition:s=>{t.slides.map(l=>eu(l)).forEach(l=>{l.style.transitionDuration=`${s}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${s}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}let bs;function o1(){const e=Re(),t=ir();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Yp(){return bs||(bs=o1()),bs}let Es;function s1(e){let{userAgent:t}=e===void 0?{}:e;const n=Yp(),r=Re(),i=r.navigator.platform,o=t||r.navigator.userAgent,s={ios:!1,android:!1},a=r.screen.width,l=r.screen.height,c=o.match(/(Android);?[\s\/]+([\d.]+)?/);let f=o.match(/(iPad).*OS\s([\d_]+)/);const p=o.match(/(iPod)(.*OS\s([\d_]+))?/),m=!f&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=i==="Win32";let y=i==="MacIntel";const w=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&y&&n.touch&&w.indexOf(`${a}x${l}`)>=0&&(f=o.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),y=!1),c&&!v&&(s.os="android",s.android=!0),(f||m||p)&&(s.os="ios",s.ios=!0),s}function Qp(e){return e===void 0&&(e={}),Es||(Es=s1(e)),Es}let ks;function l1(){const e=Re(),t=Qp();let n=!1;function r(){const a=e.navigator.userAgent.toLowerCase();return a.indexOf("safari")>=0&&a.indexOf("chrome")<0&&a.indexOf("android")<0}if(r()){const a=String(e.navigator.userAgent);if(a.includes("Version/")){const[l,c]=a.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));n=l<16||l===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),s=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:s,isWebView:i}}function a1(){return ks||(ks=l1()),ks}function u1(e){let{swiper:t,on:n,emit:r}=e;const i=Re();let o=null,s=null;const a=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(o=new ResizeObserver(p=>{s=i.requestAnimationFrame(()=>{const{width:m,height:v}=t;let y=m,w=v;p.forEach(E=>{let{contentBoxSize:u,contentRect:d,target:h}=E;h&&h!==t.el||(y=d?d.width:(u[0]||u).inlineSize,w=d?d.height:(u[0]||u).blockSize)}),(y!==m||w!==v)&&a()})}),o.observe(t.el))},c=()=>{s&&i.cancelAnimationFrame(s),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},f=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",f)}),n("destroy",()=>{c(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",f)})}function c1(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o=[],s=Re(),a=function(f,p){p===void 0&&(p={});const m=s.MutationObserver||s.WebkitMutationObserver,v=new m(y=>{if(t.__preventObserver__)return;if(y.length===1){i("observerUpdate",y[0]);return}const w=function(){i("observerUpdate",y[0])};s.requestAnimationFrame?s.requestAnimationFrame(w):s.setTimeout(w,0)});v.observe(f,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:typeof p.childList>"u"?!0:p.childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),o.push(v)},l=()=>{if(t.params.observer){if(t.params.observeParents){const f=Up(t.hostEl);for(let p=0;p<f.length;p+=1)a(f[p])}a(t.hostEl,{childList:t.params.observeSlideChildren}),a(t.wrapperEl,{attributes:!1})}},c=()=>{o.forEach(f=>{f.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",c)}var d1={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];t.apply(r,s)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return typeof o[0]=="string"||Array.isArray(o[0])?(t=o[0],n=o.slice(1,o.length),r=e):(t=o[0].events,n=o[0].data,r=o[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(c=>{c.apply(r,n)})}),e}};function f1(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Mt(r,"padding-left")||0,10)-parseInt(Mt(r,"padding-right")||0,10),n=n-parseInt(Mt(r,"padding-top")||0,10)-parseInt(Mt(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function p1(){const e=this;function t(b,x){return parseFloat(b.getPropertyValue(e.getDirectionLabel(x))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:o,rtlTranslate:s,wrongRTL:a}=e,l=e.virtual&&n.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,f=ot(i,`.${e.params.slideClass}, swiper-slide`),p=l?e.virtual.slides.length:f.length;let m=[];const v=[],y=[];let w=n.slidesOffsetBefore;typeof w=="function"&&(w=n.slidesOffsetBefore.call(e));let E=n.slidesOffsetAfter;typeof E=="function"&&(E=n.slidesOffsetAfter.call(e));const u=e.snapGrid.length,d=e.slidesGrid.length;let h=n.spaceBetween,S=-w,k=0,T=0;if(typeof o>"u")return;typeof h=="string"&&h.indexOf("%")>=0?h=parseFloat(h.replace("%",""))/100*o:typeof h=="string"&&(h=parseFloat(h)),e.virtualSize=-h,f.forEach(b=>{s?b.style.marginLeft="":b.style.marginRight="",b.style.marginBottom="",b.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Ti(r,"--swiper-centered-offset-before",""),Ti(r,"--swiper-centered-offset-after",""));const z=n.grid&&n.grid.rows>1&&e.grid;z?e.grid.initSlides(f):e.grid&&e.grid.unsetSlides();let A;const I=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(b=>typeof n.breakpoints[b].slidesPerView<"u").length>0;for(let b=0;b<p;b+=1){A=0;let x;if(f[b]&&(x=f[b]),z&&e.grid.updateSlide(b,x,f),!(f[b]&&Mt(x,"display")==="none")){if(n.slidesPerView==="auto"){I&&(f[b].style[e.getDirectionLabel("width")]="");const C=getComputedStyle(x),N=x.style.transform,_=x.style.webkitTransform;if(N&&(x.style.transform="none"),_&&(x.style.webkitTransform="none"),n.roundLengths)A=e.isHorizontal()?Gl(x,"width"):Gl(x,"height");else{const B=t(C,"width"),L=t(C,"padding-left"),H=t(C,"padding-right"),j=t(C,"margin-left"),F=t(C,"margin-right"),R=C.getPropertyValue("box-sizing");if(R&&R==="border-box")A=B+j+F;else{const{clientWidth:ee,offsetWidth:se}=x;A=B+L+H+j+F+(se-ee)}}N&&(x.style.transform=N),_&&(x.style.webkitTransform=_),n.roundLengths&&(A=Math.floor(A))}else A=(o-(n.slidesPerView-1)*h)/n.slidesPerView,n.roundLengths&&(A=Math.floor(A)),f[b]&&(f[b].style[e.getDirectionLabel("width")]=`${A}px`);f[b]&&(f[b].swiperSlideSize=A),y.push(A),n.centeredSlides?(S=S+A/2+k/2+h,k===0&&b!==0&&(S=S-o/2-h),b===0&&(S=S-o/2-h),Math.abs(S)<1/1e3&&(S=0),n.roundLengths&&(S=Math.floor(S)),T%n.slidesPerGroup===0&&m.push(S),v.push(S)):(n.roundLengths&&(S=Math.floor(S)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&m.push(S),v.push(S),S=S+A+h),e.virtualSize+=A+h,k=A,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+E,s&&a&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+h}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+h}px`),z&&e.grid.updateWrapperSize(A,m),!n.centeredSlides){const b=[];for(let x=0;x<m.length;x+=1){let C=m[x];n.roundLengths&&(C=Math.floor(C)),m[x]<=e.virtualSize-o&&b.push(C)}m=b,Math.floor(e.virtualSize-o)-Math.floor(m[m.length-1])>1&&m.push(e.virtualSize-o)}if(l&&n.loop){const b=y[0]+h;if(n.slidesPerGroup>1){const x=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),C=b*n.slidesPerGroup;for(let N=0;N<x;N+=1)m.push(m[m.length-1]+C)}for(let x=0;x<e.virtual.slidesBefore+e.virtual.slidesAfter;x+=1)n.slidesPerGroup===1&&m.push(m[m.length-1]+b),v.push(v[v.length-1]+b),e.virtualSize+=b}if(m.length===0&&(m=[0]),h!==0){const b=e.isHorizontal()&&s?"marginLeft":e.getDirectionLabel("marginRight");f.filter((x,C)=>!n.cssMode||n.loop?!0:C!==f.length-1).forEach(x=>{x.style[b]=`${h}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let b=0;y.forEach(C=>{b+=C+(h||0)}),b-=h;const x=b-o;m=m.map(C=>C<=0?-w:C>x?x+E:C)}if(n.centerInsufficientSlides){let b=0;y.forEach(C=>{b+=C+(h||0)}),b-=h;const x=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(b+x<o){const C=(o-b-x)/2;m.forEach((N,_)=>{m[_]=N-C}),v.forEach((N,_)=>{v[_]=N+C})}}if(Object.assign(e,{slides:f,snapGrid:m,slidesGrid:v,slidesSizesGrid:y}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Ti(r,"--swiper-centered-offset-before",`${-m[0]}px`),Ti(r,"--swiper-centered-offset-after",`${e.size/2-y[y.length-1]/2}px`);const b=-e.snapGrid[0],x=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(C=>C+b),e.slidesGrid=e.slidesGrid.map(C=>C+x)}if(p!==c&&e.emit("slidesLengthChange"),m.length!==u&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==d&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const b=`${n.containerModifierClass}backface-hidden`,x=e.el.classList.contains(b);p<=n.maxBackfaceHiddenSlides?x||e.el.classList.add(b):x&&e.el.classList.remove(b)}}function m1(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const s=a=>r?t.slides[t.getSlideIndexByData(a)]:t.slides[a];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(a=>{n.push(a)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const a=t.activeIndex+o;if(a>t.slides.length&&!r)break;n.push(s(a))}else n.push(s(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const a=n[o].offsetHeight;i=a>i?a:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function h1(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Bc=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function g1(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let s=-e;i&&(s=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;typeof a=="string"&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:typeof a=="string"&&(a=parseFloat(a));for(let l=0;l<r.length;l+=1){const c=r[l];let f=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(f-=r[0].swiperSlideOffset);const p=(s+(n.centeredSlides?t.minTranslate():0)-f)/(c.swiperSlideSize+a),m=(s-o[0]+(n.centeredSlides?t.minTranslate():0)-f)/(c.swiperSlideSize+a),v=-(s-f),y=v+t.slidesSizesGrid[l],w=v>=0&&v<=t.size-t.slidesSizesGrid[l],E=v>=0&&v<t.size-1||y>1&&y<=t.size||v<=0&&y>=t.size;E&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l)),Bc(c,E,n.slideVisibleClass),Bc(c,w,n.slideFullyVisibleClass),c.progress=i?-p:p,c.originalProgress=i?-m:m}}function v1(e){const t=this;if(typeof e>"u"){const f=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*f||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:s,progressLoop:a}=t;const l=o,c=s;if(r===0)i=0,o=!0,s=!0;else{i=(e-t.minTranslate())/r;const f=Math.abs(e-t.minTranslate())<1,p=Math.abs(e-t.maxTranslate())<1;o=f||i<=0,s=p||i>=1,f&&(i=0),p&&(i=1)}if(n.loop){const f=t.getSlideIndexByData(0),p=t.getSlideIndexByData(t.slides.length-1),m=t.slidesGrid[f],v=t.slidesGrid[p],y=t.slidesGrid[t.slidesGrid.length-1],w=Math.abs(e);w>=m?a=(w-m)/y:a=(w+y-v)/y,a>1&&(a-=1)}Object.assign(t,{progress:i,progressLoop:a,isBeginning:o,isEnd:s}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!l&&t.emit("reachBeginning toEdge"),s&&!c&&t.emit("reachEnd toEdge"),(l&&!o||c&&!s)&&t.emit("fromEdge"),t.emit("progress",i)}const Cs=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function y1(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,s=e.grid&&n.grid&&n.grid.rows>1,a=p=>ot(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];let l,c,f;if(o)if(n.loop){let p=i-e.virtual.slidesBefore;p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),l=a(`[data-swiper-slide-index="${p}"]`)}else l=a(`[data-swiper-slide-index="${i}"]`);else s?(l=t.filter(p=>p.column===i)[0],f=t.filter(p=>p.column===i+1)[0],c=t.filter(p=>p.column===i-1)[0]):l=t[i];l&&(s||(f=Jv(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!f&&(f=t[0]),c=Zv(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(p=>{Cs(p,p===l,n.slideActiveClass),Cs(p,p===f,n.slideNextClass),Cs(p,p===c,n.slidePrevClass)}),e.emitSlidesClasses()}const Hi=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},Ps=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Ul=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const s=i,a=[s-t];a.push(...Array.from({length:t}).map((l,c)=>s+r+c)),e.slides.forEach((l,c)=>{a.includes(l.column)&&Ps(e,c)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let s=i-t;s<=o+t;s+=1){const a=(s%n+n)%n;(a<i||a>o)&&Ps(e,a)}else for(let s=Math.max(i-t,0);s<=Math.min(o+t,n-1);s+=1)s!==i&&(s>o||s<i)&&Ps(e,s)};function w1(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function x1(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:s,snapIndex:a}=t;let l=e,c;const f=v=>{let y=v-t.virtual.slidesBefore;return y<0&&(y=t.virtual.slides.length+y),y>=t.virtual.slides.length&&(y-=t.virtual.slides.length),y};if(typeof l>"u"&&(l=w1(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const v=Math.min(i.slidesPerGroupSkip,l);c=v+Math.floor((l-v)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),l===o&&!t.params.loop){c!==a&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(l===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=f(l);return}const p=t.grid&&i.grid&&i.grid.rows>1;let m;if(t.virtual&&i.virtual.enabled&&i.loop)m=f(l);else if(p){const v=t.slides.filter(w=>w.column===l)[0];let y=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(y)&&(y=Math.max(t.slides.indexOf(v),0)),m=Math.floor(y/i.grid.rows)}else if(t.slides[l]){const v=t.slides[l].getAttribute("data-swiper-slide-index");v?m=parseInt(v,10):m=l}else m=l;Object.assign(t,{previousSnapIndex:a,snapIndex:c,previousRealIndex:s,realIndex:m,previousIndex:o,activeIndex:l}),t.initialized&&Ul(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(s!==m&&t.emit("realIndexChange"),t.emit("slideChange"))}function S1(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(a=>{!i&&a.matches&&a.matches(`.${r.slideClass}, swiper-slide`)&&(i=a)});let o=!1,s;if(i){for(let a=0;a<n.slides.length;a+=1)if(n.slides[a]===i){o=!0,s=a;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=s;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var b1={updateSize:f1,updateSlides:p1,updateAutoHeight:m1,updateSlidesOffset:h1,updateSlidesProgress:g1,updateProgress:v1,updateSlidesClasses:y1,updateActiveIndex:x1,updateClickedSlide:S1};function E1(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let s=Kv(o,e);return s+=t.cssOverflowAdjustment(),r&&(s=-s),s||0}function k1(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:s}=n;let a=0,l=0;const c=0;n.isHorizontal()?a=r?-e:e:l=e,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:i.virtualTranslate||(n.isHorizontal()?a-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`);let f;const p=n.maxTranslate()-n.minTranslate();p===0?f=0:f=(e-n.minTranslate())/p,f!==s&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function C1(){return-this.snapGrid[0]}function P1(){return-this.snapGrid[this.snapGrid.length-1]}function A1(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const o=this,{params:s,wrapperEl:a}=o;if(o.animating&&s.preventInteractionOnTransition)return!1;const l=o.minTranslate(),c=o.maxTranslate();let f;if(r&&e>l?f=l:r&&e<c?f=c:f=e,o.updateProgress(f),s.cssMode){const p=o.isHorizontal();if(t===0)a[p?"scrollLeft":"scrollTop"]=-f;else{if(!o.support.smoothScroll)return Gp({swiper:o,targetPosition:-f,side:p?"left":"top"}),!0;a.scrollTo({[p?"left":"top"]:-f,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(f),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(f),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(m){!o||o.destroyed||m.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var T1={getTranslate:E1,setTranslate:k1,minTranslate:C1,maxTranslate:P1,translateTo:A1};function N1(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Xp(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:o,previousIndex:s}=t;let a=r;if(a||(o>s?a="next":o<s?a="prev":a="reset"),t.emit(`transition${i}`),n&&o!==s){if(a==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),a==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function z1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Xp({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function I1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Xp({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var M1={setTransition:N1,transitionStart:z1,transitionEnd:I1};function j1(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;let s=e;s<0&&(s=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:f,activeIndex:p,rtlTranslate:m,wrapperEl:v,enabled:y}=o;if(!y&&!r&&!i||o.destroyed||o.animating&&a.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const w=Math.min(o.params.slidesPerGroupSkip,s);let E=w+Math.floor((s-w)/o.params.slidesPerGroup);E>=l.length&&(E=l.length-1);const u=-l[E];if(a.normalizeSlideIndex)for(let h=0;h<c.length;h+=1){const S=-Math.floor(u*100),k=Math.floor(c[h]*100),T=Math.floor(c[h+1]*100);typeof c[h+1]<"u"?S>=k&&S<T-(T-k)/2?s=h:S>=k&&S<T&&(s=h+1):S>=k&&(s=h)}if(o.initialized&&s!==p&&(!o.allowSlideNext&&(m?u>o.translate&&u>o.minTranslate():u<o.translate&&u<o.minTranslate())||!o.allowSlidePrev&&u>o.translate&&u>o.maxTranslate()&&(p||0)!==s))return!1;s!==(f||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(u);let d;if(s>p?d="next":s<p?d="prev":d="reset",m&&-u===o.translate||!m&&u===o.translate)return o.updateActiveIndex(s),a.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),a.effect!=="slide"&&o.setTranslate(u),d!=="reset"&&(o.transitionStart(n,d),o.transitionEnd(n,d)),!1;if(a.cssMode){const h=o.isHorizontal(),S=m?u:-u;if(t===0){const k=o.virtual&&o.params.virtual.enabled;k&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),k&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[h?"scrollLeft":"scrollTop"]=S})):v[h?"scrollLeft":"scrollTop"]=S,k&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1})}else{if(!o.support.smoothScroll)return Gp({swiper:o,targetPosition:S,side:h?"left":"top"}),!0;v.scrollTo({[h?"left":"top"]:S,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(u),o.updateActiveIndex(s),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,d),t===0?o.transitionEnd(n,d):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(S){!o||o.destroyed||S.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,d))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function L1(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let s=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)s=s+i.virtual.slidesBefore;else{let a;if(o){const m=s*i.params.grid.rows;a=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===m)[0].column}else a=i.getSlideIndexByData(s);const l=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c}=i.params;let f=i.params.slidesPerView;f==="auto"?f=i.slidesPerViewDynamic():(f=Math.ceil(parseFloat(i.params.slidesPerView,10)),c&&f%2===0&&(f=f+1));let p=l-a<f;if(c&&(p=p||a<Math.ceil(f/2)),r&&c&&i.params.slidesPerView!=="auto"&&!o&&(p=!1),p){const m=c?a<i.activeIndex?"prev":"next":a-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:m,slideTo:!0,activeSlideIndex:m==="next"?a+1:a-l+1,slideRealIndex:m==="next"?i.realIndex:void 0})}if(o){const m=s*i.params.grid.rows;s=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===m)[0].column}else s=i.getSlideIndexByData(s)}return requestAnimationFrame(()=>{i.slideTo(s,t,n,r)}),i}function O1(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:o,animating:s}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let a=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<o.slidesPerGroupSkip?1:a,c=r.virtual&&o.virtual.enabled;if(o.loop){if(s&&!c&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function _1(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:o,slidesGrid:s,rtlTranslate:a,enabled:l,animating:c}=r;if(!l||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const f=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!f&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=a?r.translate:-r.translate;function m(u){return u<0?-Math.floor(Math.abs(u)):Math.floor(u)}const v=m(p),y=o.map(u=>m(u));let w=o[y.indexOf(v)-1];if(typeof w>"u"&&i.cssMode){let u;o.forEach((d,h)=>{v>=d&&(u=h)}),typeof u<"u"&&(w=o[u>0?u-1:u])}let E=0;if(typeof w<"u"&&(E=s.indexOf(w),E<0&&(E=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(E=E-r.slidesPerViewDynamic("previous",!0)+1,E=Math.max(E,0))),i.rewind&&r.isBeginning){const u=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(u,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(E,e,t,n)}),!0;return r.slideTo(E,e,t,n)}function F1(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function D1(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const s=Math.min(i.params.slidesPerGroupSkip,o),a=s+Math.floor((o-s)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const c=i.snapGrid[a],f=i.snapGrid[a+1];l-c>(f-c)*r&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[a-1],f=i.snapGrid[a];l-c<=(f-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function R1(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,o;const s=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(ot(n,`${s}[data-swiper-slide-index="${o}"]`)[0]),Hl(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(ot(n,`${s}[data-swiper-slide-index="${o}"]`)[0]),Hl(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var B1={slideTo:j1,slideToLoop:L1,slideNext:O1,slidePrev:_1,slideReset:F1,slideToClosest:D1,slideToClickedSlide:R1};function V1(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{ot(r,`.${n.slideClass}, swiper-slide`).forEach((p,m)=>{p.setAttribute("data-swiper-slide-index",m)})},o=t.grid&&n.grid&&n.grid.rows>1,s=n.slidesPerGroup*(o?n.grid.rows:1),a=t.slides.length%s!==0,l=o&&t.slides.length%n.grid.rows!==0,c=f=>{for(let p=0;p<f;p+=1){const m=t.isElement?qr("swiper-slide",[n.slideBlankClass]):qr("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(m)}};if(a){if(n.loopAddBlankSlides){const f=s-t.slides.length%s;c(f),t.recalcSlides(),t.updateSlides()}else wo("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const f=n.grid.rows-t.slides.length%n.grid.rows;c(f),t.recalcSlides(),t.updateSlides()}else wo("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function $1(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:o,byController:s,byMousewheel:a}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:f,allowSlideNext:p,slidesEl:m,params:v}=l,{centeredSlides:y}=v;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&v.virtual.enabled){n&&(!v.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):v.centeredSlides&&l.snapIndex<v.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=f,l.allowSlideNext=p,l.emit("loopFix");return}let w=v.slidesPerView;w==="auto"?w=l.slidesPerViewDynamic():(w=Math.ceil(parseFloat(v.slidesPerView,10)),y&&w%2===0&&(w=w+1));const E=v.slidesPerGroupAuto?w:v.slidesPerGroup;let u=E;u%E!==0&&(u+=E-u%E),u+=v.loopAdditionalSlides,l.loopedSlides=u;const d=l.grid&&v.grid&&v.grid.rows>1;c.length<w+u?wo("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):d&&v.grid.fill==="row"&&wo("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const h=[],S=[];let k=l.activeIndex;typeof o>"u"?o=l.getSlideIndex(c.filter(N=>N.classList.contains(v.slideActiveClass))[0]):k=o;const T=r==="next"||!r,z=r==="prev"||!r;let A=0,I=0;const b=d?Math.ceil(c.length/v.grid.rows):c.length,C=(d?c[o].column:o)+(y&&typeof i>"u"?-w/2+.5:0);if(C<u){A=Math.max(u-C,E);for(let N=0;N<u-C;N+=1){const _=N-Math.floor(N/b)*b;if(d){const B=b-_-1;for(let L=c.length-1;L>=0;L-=1)c[L].column===B&&h.push(L)}else h.push(b-_-1)}}else if(C+w>b-u){I=Math.max(C-(b-u*2),E);for(let N=0;N<I;N+=1){const _=N-Math.floor(N/b)*b;d?c.forEach((B,L)=>{B.column===_&&S.push(L)}):S.push(_)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),z&&h.forEach(N=>{c[N].swiperLoopMoveDOM=!0,m.prepend(c[N]),c[N].swiperLoopMoveDOM=!1}),T&&S.forEach(N=>{c[N].swiperLoopMoveDOM=!0,m.append(c[N]),c[N].swiperLoopMoveDOM=!1}),l.recalcSlides(),v.slidesPerView==="auto"?l.updateSlides():d&&(h.length>0&&z||S.length>0&&T)&&l.slides.forEach((N,_)=>{l.grid.updateSlide(_,N,l.slides)}),v.watchSlidesProgress&&l.updateSlidesOffset(),n){if(h.length>0&&z){if(typeof t>"u"){const N=l.slidesGrid[k],B=l.slidesGrid[k+A]-N;a?l.setTranslate(l.translate-B):(l.slideTo(k+Math.ceil(A),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-B,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-B))}else if(i){const N=d?h.length/v.grid.rows:h.length;l.slideTo(l.activeIndex+N,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(S.length>0&&T)if(typeof t>"u"){const N=l.slidesGrid[k],B=l.slidesGrid[k-I]-N;a?l.setTranslate(l.translate-B):(l.slideTo(k-I,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-B,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-B))}else{const N=d?S.length/v.grid.rows:S.length;l.slideTo(l.activeIndex-N,0,!1,!0)}}if(l.allowSlidePrev=f,l.allowSlideNext=p,l.controller&&l.controller.control&&!s){const N={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(_=>{!_.destroyed&&_.params.loop&&_.loopFix({...N,slideTo:_.params.slidesPerView===v.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...N,slideTo:l.controller.control.params.slidesPerView===v.slidesPerView?n:!1})}l.emit("loopFix")}function H1(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var G1={loopCreate:V1,loopFix:$1,loopDestroy:H1};function U1(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function W1(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Y1={setGrabCursor:U1,unsetGrabCursor:W1};function Q1(e,t){t===void 0&&(t=this);function n(r){if(!r||r===ir()||r===Re())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Vc(e,t,n){const r=Re(),{params:i}=e,o=i.edgeSwipeDetection,s=i.edgeSwipeThreshold;return o&&(n<=s||n>=r.innerWidth-s)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function X1(e){const t=this,n=ir();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Vc(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:s,enabled:a}=t;if(!a||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let l=r.target;if(o.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(l)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",f=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&f&&(l=f[0]);const p=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,m=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(m?Q1(p,l):l.closest(p))){t.allowClick=!0;return}if(o.swipeHandler&&!l.closest(o.swipeHandler))return;s.currentX=r.pageX,s.currentY=r.pageY;const v=s.currentX,y=s.currentY;if(!Vc(t,r,v))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=v,s.startY=y,i.touchStartTime=yo(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let w=!0;l.matches(i.focusableElements)&&(w=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const E=w&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||E)&&!l.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function K1(e){const t=ir(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:s,enabled:a}=n;if(!a||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].filter(T=>T.identifier===r.touchId)[0],!c||c.identifier!==r.touchId)return}else c=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const f=c.pageX,p=c.pageY;if(l.preventedByNestedSwiper){o.startX=f,o.startY=p;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:f,startY:p,currentX:f,currentY:p}),r.touchStartTime=yo());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(p<o.startY&&n.translate<=n.maxTranslate()||p>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(f<o.startX&&n.translate<=n.maxTranslate()||f>o.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=f,o.currentY=p;const m=o.currentX-o.startX,v=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(m**2+v**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let T;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:m*m+v*v>=25&&(T=Math.atan2(Math.abs(v),Math.abs(m))*180/Math.PI,r.isScrolling=n.isHorizontal()?T>i.touchAngle:90-T>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||l.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let y=n.isHorizontal()?m:v,w=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(y=Math.abs(y)*(s?1:-1),w=Math.abs(w)*(s?1:-1)),o.diff=y,y*=i.touchRatio,s&&(y=-y,w=-w);const E=n.touchesDirection;n.swipeDirection=y>0?"prev":"next",n.touchesDirection=w>0?"prev":"next";const u=n.params.loop&&!i.cssMode,d=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(u&&d&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(T)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let h;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&E!==n.touchesDirection&&u&&d&&Math.abs(y)>=1){Object.assign(o,{startX:f,startY:p,currentX:f,currentY:p,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=y+r.startTranslate;let S=!0,k=i.resistanceRatio;if(i.touchReleaseOnEdges&&(k=0),y>0?(u&&d&&!h&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+y)**k))):y<0&&(u&&d&&!h&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-y)**k))),S&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(y)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function q1(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(k=>k.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:s,touches:a,rtlTranslate:l,slidesGrid:c,enabled:f}=t;if(!f||!s.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}s.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const p=yo(),m=p-n.touchStartTime;if(t.allowClick){const k=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(k&&k[0]||r.target,k),t.emit("tap click",r),m<300&&p-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=yo(),Hl(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||a.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let v;if(s.followFinger?v=l?t.translate:-t.translate:v=-n.currentTranslate,s.cssMode)return;if(s.freeMode&&s.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:v});return}const y=v>=-t.maxTranslate()&&!t.params.loop;let w=0,E=t.slidesSizesGrid[0];for(let k=0;k<c.length;k+=k<s.slidesPerGroupSkip?1:s.slidesPerGroup){const T=k<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;typeof c[k+T]<"u"?(y||v>=c[k]&&v<c[k+T])&&(w=k,E=c[k+T]-c[k]):(y||v>=c[k])&&(w=k,E=c[c.length-1]-c[c.length-2])}let u=null,d=null;s.rewind&&(t.isBeginning?d=s.virtual&&s.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(u=0));const h=(v-c[w])/E,S=w<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(m>s.longSwipesMs){if(!s.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(h>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?u:w+S):t.slideTo(w)),t.swipeDirection==="prev"&&(h>1-s.longSwipesRatio?t.slideTo(w+S):d!==null&&h<0&&Math.abs(h)>s.longSwipesRatio?t.slideTo(d):t.slideTo(w))}else{if(!s.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(w+S):t.slideTo(w):(t.swipeDirection==="next"&&t.slideTo(u!==null?u:w+S),t.swipeDirection==="prev"&&t.slideTo(d!==null?d:w))}}function $c(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,s=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=s&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!a?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!s?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function Z1(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function J1(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function ey(e){const t=this;Hi(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function ty(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Kp=(e,t)=>{const n=ir(),{params:r,el:i,wrapperEl:o,device:s}=e,a=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;!i||typeof i=="string"||(n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:a}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:a}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:a}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&o[l]("scroll",e.onScroll),r.updateOnWindowResize?e[c](s.ios||s.android?"resize orientationchange observerUpdate":"resize observerUpdate",$c,!0):e[c]("observerUpdate",$c,!0),i[l]("load",e.onLoad,{capture:!0}))};function ny(){const e=this,{params:t}=e;e.onTouchStart=X1.bind(e),e.onTouchMove=K1.bind(e),e.onTouchEnd=q1.bind(e),e.onDocumentTouchStart=ty.bind(e),t.cssMode&&(e.onScroll=J1.bind(e)),e.onClick=Z1.bind(e),e.onLoad=ey.bind(e),Kp(e,"on")}function ry(){Kp(this,"off")}var iy={attachEvents:ny,detachEvents:ry};const Hc=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function oy(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const s=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!s||e.currentBreakpoint===s)return;const l=(s in o?o[s]:void 0)||e.originalParams,c=Hc(e,r),f=Hc(e,l),p=e.params.grabCursor,m=l.grabCursor,v=r.enabled;c&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!m?e.unsetGrabCursor():!p&&m&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(h=>{if(typeof l[h]>"u")return;const S=r[h]&&r[h].enabled,k=l[h]&&l[h].enabled;S&&!k&&e[h].disable(),!S&&k&&e[h].enable()});const y=l.direction&&l.direction!==r.direction,w=r.loop&&(l.slidesPerView!==r.slidesPerView||y),E=r.loop;y&&n&&e.changeDirection(),ze(e.params,l);const u=e.params.enabled,d=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),v&&!u?e.disable():!v&&u&&e.enable(),e.currentBreakpoint=s,e.emit("_beforeBreakpoint",l),n&&(w?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!E&&d?(e.loopCreate(t),e.updateSlides()):E&&!d&&e.loopDestroy()),e.emit("breakpoint",l)}function sy(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=Re(),o=t==="window"?i.innerHeight:n.clientHeight,s=Object.keys(e).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:o*l,point:a}}return{value:a,point:a}});s.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<s.length;a+=1){const{point:l,value:c}=s[a];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=l):c<=n.clientWidth&&(r=l)}return r||"max"}var ly={setBreakpoint:oy,getBreakpoint:sy};function ay(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function uy(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,s=ay(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...s),i.classList.add(...t),e.emitContainerClasses()}function cy(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var dy={addClasses:uy,removeClasses:cy};function fy(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var py={checkOverflow:fy},Wl={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function my(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){ze(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){ze(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),ze(t,r)}}const As={eventsEmitter:d1,update:b1,translate:T1,transition:M1,slide:B1,loop:G1,grabCursor:Y1,events:iy,breakpoints:ly,checkOverflow:py,classes:dy},Ts={};let tu=class ut{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=ze({},n),t&&!n.el&&(n.el=t);const s=ir();if(n.el&&typeof n.el=="string"&&s.querySelectorAll(n.el).length>1){const f=[];return s.querySelectorAll(n.el).forEach(p=>{const m=ze({},n,{el:p});f.push(new ut(m))}),f}const a=this;a.__swiper__=!0,a.support=Yp(),a.device=Qp({userAgent:n.userAgent}),a.browser=a1(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],n.modules&&Array.isArray(n.modules)&&a.modules.push(...n.modules);const l={};a.modules.forEach(f=>{f({params:n,swiper:a,extendParams:my(n,l),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})});const c=ze({},Wl,l);return a.params=ze({},c,Ts,n),a.originalParams=ze({},a.params),a.passedParams=ze({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach(f=>{a.on(f,a.params.on[f])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction==="horizontal"},isVertical(){return a.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=ot(n,`.${r.slideClass}, swiper-slide`),o=xo(i[0]);return xo(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=ot(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),s=(r.maxTranslate()-i)*t+i;r.translateTo(s,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:o,slidesGrid:s,slidesSizesGrid:a,size:l,activeIndex:c}=r;let f=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let p=o[c]?Math.ceil(o[c].swiperSlideSize):0,m;for(let v=c+1;v<o.length;v+=1)o[v]&&!m&&(p+=Math.ceil(o[v].swiperSlideSize),f+=1,p>l&&(m=!0));for(let v=c-1;v>=0;v-=1)o[v]&&!m&&(p+=o[v].swiperSlideSize,f+=1,p>l&&(m=!0))}else if(t==="current")for(let p=c+1;p<o.length;p+=1)(n?s[p]+a[p]-s[c]<l:s[p]-s[c]<l)&&(f+=1);else for(let p=c-1;p>=0;p-=1)s[c]-s[p]<l&&(f+=1);return f}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(s=>{s.complete&&Hi(t,s)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const s=t.rtlTranslate?t.translate*-1:t.translate,a=Math.min(Math.max(s,t.maxTranslate()),t.minTranslate());t.setTranslate(a),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const s=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(s.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):ot(r,i())[0];return!s&&n.params.createElements&&(s=qr("div",n.params.wrapperClass),r.append(s),ot(r,`.${n.params.slideClass}`).forEach(a=>{s.append(a)})),Object.assign(n,{el:r,wrapperEl:s,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:s,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Mt(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Mt(r,"direction")==="rtl"),wrongRTL:Mt(s,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Hi(n,o):o.addEventListener("load",s=>{Hi(n,s.target)})}),Ul(n),n.initialized=!0,Ul(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:o,wrapperEl:s,slides:a}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),s&&s.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),Qv(r)),r.destroyed=!0),null}static extendDefaults(t){ze(Ts,t)}static get extendedDefaults(){return Ts}static get defaults(){return Wl}static installModule(t){ut.prototype.__modules__||(ut.prototype.__modules__=[]);const n=ut.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>ut.installModule(n)),ut):(ut.installModule(t),ut)}};Object.keys(As).forEach(e=>{Object.keys(As[e]).forEach(t=>{tu.prototype[t]=As[e][t]})});tu.use([u1,c1]);const qp=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function gn(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Vn(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:gn(t[r])&&gn(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Vn(e[r],t[r]):e[r]=t[r]})}function Zp(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Jp(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function em(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function tm(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function hy(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function gy(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:o,prevEl:s,scrollbarEl:a,paginationEl:l}=e;const c=i.filter(I=>I!=="children"&&I!=="direction"&&I!=="wrapperClass"),{params:f,pagination:p,navigation:m,scrollbar:v,virtual:y,thumbs:w}=t;let E,u,d,h,S,k,T,z;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&f.thumbs&&!f.thumbs.swiper&&(E=!0),i.includes("controller")&&r.controller&&r.controller.control&&f.controller&&!f.controller.control&&(u=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(f.pagination||f.pagination===!1)&&p&&!p.el&&(d=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||a)&&(f.scrollbar||f.scrollbar===!1)&&v&&!v.el&&(h=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||s)&&(r.navigation.nextEl||o)&&(f.navigation||f.navigation===!1)&&m&&!m.prevEl&&!m.nextEl&&(S=!0);const A=I=>{t[I]&&(t[I].destroy(),I==="navigation"?(t.isElement&&(t[I].prevEl.remove(),t[I].nextEl.remove()),f[I].prevEl=void 0,f[I].nextEl=void 0,t[I].prevEl=void 0,t[I].nextEl=void 0):(t.isElement&&t[I].el.remove(),f[I].el=void 0,t[I].el=void 0))};i.includes("loop")&&t.isElement&&(f.loop&&!r.loop?k=!0:!f.loop&&r.loop?T=!0:z=!0),c.forEach(I=>{if(gn(f[I])&&gn(r[I]))Object.assign(f[I],r[I]),(I==="navigation"||I==="pagination"||I==="scrollbar")&&"enabled"in r[I]&&!r[I].enabled&&A(I);else{const b=r[I];(b===!0||b===!1)&&(I==="navigation"||I==="pagination"||I==="scrollbar")?b===!1&&A(I):f[I]=r[I]}}),c.includes("controller")&&!u&&t.controller&&t.controller.control&&f.controller&&f.controller.control&&(t.controller.control=f.controller.control),i.includes("children")&&n&&y&&f.virtual.enabled?(y.slides=n,y.update(!0)):i.includes("virtual")&&y&&f.virtual.enabled&&(n&&(y.slides=n),y.update(!0)),i.includes("children")&&n&&f.loop&&(z=!0),E&&w.init()&&w.update(!0),u&&(t.controller.control=f.controller.control),d&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(f.pagination.el=l),p.init(),p.render(),p.update()),h&&(t.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-scrollbar"),a.part.add("scrollbar"),t.el.appendChild(a)),a&&(f.scrollbar.el=a),v.init(),v.updateSize(),v.setTranslate()),S&&(t.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),o.innerHTML=t.hostEl.constructor.nextButtonSvg,o.part.add("button-next"),t.el.appendChild(o)),(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-prev"),s.innerHTML=t.hostEl.constructor.prevButtonSvg,s.part.add("button-prev"),t.el.appendChild(s))),o&&(f.navigation.nextEl=o),s&&(f.navigation.prevEl=s),m.init(),m.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(k||z)&&t.loopDestroy(),(T||z)&&t.loopCreate(),t.update()}function vy(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};Vn(n,Wl),n._emitClasses=!0,n.init=!1;const o={},s=qp.map(l=>l.replace(/_/,"")),a=Object.assign({},e);return Object.keys(a).forEach(l=>{typeof e[l]>"u"||(s.indexOf(l)>=0?gn(e[l])?(n[l]={},i[l]={},Vn(n[l],e[l]),Vn(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:o[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:o,events:r}}function yy(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:o,scrollbarEl:s,swiper:a}=e;Zp(t)&&r&&i&&(a.params.navigation.nextEl=r,a.originalParams.navigation.nextEl=r,a.params.navigation.prevEl=i,a.originalParams.navigation.prevEl=i),Jp(t)&&o&&(a.params.pagination.el=o,a.originalParams.pagination.el=o),em(t)&&s&&(a.params.scrollbar.el=s,a.originalParams.scrollbar.el=s),a.init(n)}function wy(e,t,n,r,i){const o=[];if(!t)return o;const s=l=>{o.indexOf(l)<0&&o.push(l)};if(n&&r){const l=r.map(i),c=n.map(i);l.join("")!==c.join("")&&s("children"),r.length!==n.length&&s("children")}return qp.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(gn(e[l])&&gn(t[l])){const c=Object.keys(e[l]),f=Object.keys(t[l]);c.length!==f.length?s(l):(c.forEach(p=>{e[l][p]!==t[l][p]&&s(l)}),f.forEach(p=>{e[l][p]!==t[l][p]&&s(l)}))}else e[l]!==t[l]&&s(l)}),o}const xy=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function So(){return So=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},So.apply(this,arguments)}function nm(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function rm(e){const t=[];return Y.Children.toArray(e).forEach(n=>{nm(n)?t.push(n):n.props&&n.props.children&&rm(n.props.children).forEach(r=>t.push(r))}),t}function Sy(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Y.Children.toArray(e).forEach(r=>{if(nm(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=rm(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function by(e,t,n){if(!n)return null;const r=f=>{let p=f;return f<0?p=t.length+f:p>=t.length&&(p=p-t.length),p},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:s}=n,a=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,c=[];for(let f=a;f<l;f+=1)f>=o&&f<=s&&c.push(t[r(f)]);return c.map((f,p)=>Y.cloneElement(f,{swiper:e,style:i,key:f.props.virtualIndex||f.key||`slide-${p}`}))}function Ir(e,t){return typeof window>"u"?P.useEffect(e,t):P.useLayoutEffect(e,t)}const Gc=P.createContext(null),Ey=P.createContext(null),im=P.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:o,onSwiper:s,...a}=e===void 0?{}:e,l=!1;const[c,f]=P.useState("swiper"),[p,m]=P.useState(null),[v,y]=P.useState(!1),w=P.useRef(!1),E=P.useRef(null),u=P.useRef(null),d=P.useRef(null),h=P.useRef(null),S=P.useRef(null),k=P.useRef(null),T=P.useRef(null),z=P.useRef(null),{params:A,passedParams:I,rest:b,events:x}=vy(a),{slides:C,slots:N}=Sy(o),_=()=>{y(!v)};Object.assign(A.on,{_containerClasses(F,R){f(R)}});const B=()=>{Object.assign(A.on,x),l=!0;const F={...A};if(delete F.wrapperClass,u.current=new tu(F),u.current.virtual&&u.current.params.virtual.enabled){u.current.virtual.slides=C;const R={cache:!1,slides:C,renderExternal:m,renderExternalUpdate:!1};Vn(u.current.params.virtual,R),Vn(u.current.originalParams.virtual,R)}};E.current||B(),u.current&&u.current.on("_beforeBreakpoint",_);const L=()=>{l||!x||!u.current||Object.keys(x).forEach(F=>{u.current.on(F,x[F])})},H=()=>{!x||!u.current||Object.keys(x).forEach(F=>{u.current.off(F,x[F])})};P.useEffect(()=>()=>{u.current&&u.current.off("_beforeBreakpoint",_)}),P.useEffect(()=>{!w.current&&u.current&&(u.current.emitSlidesClasses(),w.current=!0)}),Ir(()=>{if(t&&(t.current=E.current),!!E.current)return u.current.destroyed&&B(),yy({el:E.current,nextEl:S.current,prevEl:k.current,paginationEl:T.current,scrollbarEl:z.current,swiper:u.current},A),s&&!u.current.destroyed&&s(u.current),()=>{u.current&&!u.current.destroyed&&u.current.destroy(!0,!1)}},[]),Ir(()=>{L();const F=wy(I,d.current,C,h.current,R=>R.key);return d.current=I,h.current=C,F.length&&u.current&&!u.current.destroyed&&gy({swiper:u.current,slides:C,passedParams:I,changedParams:F,nextEl:S.current,prevEl:k.current,scrollbarEl:z.current,paginationEl:T.current}),()=>{H()}}),Ir(()=>{xy(u.current)},[p]);function j(){return A.virtual?by(u.current,C,p):C.map((F,R)=>Y.cloneElement(F,{swiper:u.current,swiperSlideIndex:R}))}return Y.createElement(r,So({ref:E,className:tm(`${c}${n?` ${n}`:""}`)},b),Y.createElement(Ey.Provider,{value:u.current},N["container-start"],Y.createElement(i,{className:hy(A.wrapperClass)},N["wrapper-start"],j(),N["wrapper-end"]),Zp(A)&&Y.createElement(Y.Fragment,null,Y.createElement("div",{ref:k,className:"swiper-button-prev"}),Y.createElement("div",{ref:S,className:"swiper-button-next"})),em(A)&&Y.createElement("div",{ref:z,className:"swiper-scrollbar"}),Jp(A)&&Y.createElement("div",{ref:T,className:"swiper-pagination"}),N["container-end"]))});im.displayName="Swiper";const Yl=P.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:o,zoom:s,lazy:a,virtualIndex:l,swiperSlideIndex:c,...f}=e===void 0?{}:e;const p=P.useRef(null),[m,v]=P.useState("swiper-slide"),[y,w]=P.useState(!1);function E(S,k,T){k===p.current&&v(T)}Ir(()=>{if(typeof c<"u"&&(p.current.swiperSlideIndex=c),t&&(t.current=p.current),!(!p.current||!o)){if(o.destroyed){m!=="swiper-slide"&&v("swiper-slide");return}return o.on("_slideClass",E),()=>{o&&o.off("_slideClass",E)}}}),Ir(()=>{o&&p.current&&!o.destroyed&&v(o.getSlideClasses(p.current))},[o]);const u={isActive:m.indexOf("swiper-slide-active")>=0,isVisible:m.indexOf("swiper-slide-visible")>=0,isPrev:m.indexOf("swiper-slide-prev")>=0,isNext:m.indexOf("swiper-slide-next")>=0},d=()=>typeof r=="function"?r(u):r,h=()=>{w(!0)};return Y.createElement(n,So({ref:p,className:tm(`${m}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:h},f),s&&Y.createElement(Gc.Provider,{value:u},Y.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof s=="number"?s:void 0},d(),a&&!y&&Y.createElement("div",{className:"swiper-lazy-preloader"}))),!s&&Y.createElement(Gc.Provider,{value:u},d(),a&&!y&&Y.createElement("div",{className:"swiper-lazy-preloader"})))});Yl.displayName="SwiperSlide";const ky=()=>g.jsx("div",{className:"video-container123 skeleton-container",children:g.jsx("div",{className:"carousel-div123",children:g.jsx("p",{className:"txt2-123"})})}),Cy=({campaigns:e,loading:t,widgetsDiv:n})=>{const r=P.useRef(null);P.useRef([]),P.useState(!1);const[i,o]=P.useState(null),[s,a]=P.useState(!1),[l,c]=P.useState(!0),[f,p]=P.useState(null),m=u=>{o(u)},v=()=>{o(null)},y=()=>{r.current.scrollBy({left:-r.current.clientWidth,behavior:"smooth"})},w=()=>{r.current.scrollBy({left:r.current.clientWidth,behavior:"smooth"})},E=()=>{const u=r.current.scrollLeft,d=r.current.scrollWidth-r.current.clientWidth;a(u>70),c(u<d-70)};return P.useEffect(()=>{const u=r.current;return u.addEventListener("scroll",E),E(),()=>{u.removeEventListener("scroll",E)}},[]),g.jsx(g.Fragment,{children:g.jsxs("div",{className:"container",children:[g.jsx(im,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:0,stretch:0,depth:100,modifier:2.5},modules:[i1,t1,e1],className:"swiper_container",children:t?Array.from({length:5}).map((u,d)=>g.jsx(Yl,{children:g.jsx(ky,{})},d)):e.map((u,d)=>{var h,S;return g.jsx(Yl,{onClick:()=>m(d),children:g.jsxs("div",{className:"video-container123",children:[g.jsx("div",{className:"inner-video-container123",onMouseEnter:()=>p(d),onMouseLeave:()=>p(null),onTouchStart:()=>p(d),onTouchEnd:()=>p(null)}),f===d?g.jsx("video",{src:u.videoId[0],loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"}):g.jsx("img",{className:"thumbnail",src:u.campaignPhoto,width:"300",height:"200",alt:"video thumbnail"}),n?g.jsxs("div",{className:"widgetsDivBookdiv123",children:[g.jsx("div",{className:"img1 widgetsDivImg1",children:g.jsx("img",{className:"img widgetsDivImg",src:u.campaignPhoto,alt:"Campaign"})}),g.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[g.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname widgetsDivHotelname",children:u.campaignName}),g.jsx("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer"}),g.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"widgetsDivOfferprice",children:["From",g.jsxs(g.Fragment,{children:[" ",u.offerPrice.currency,u.offerPrice.price]})]})]}),g.jsx("div",{className:"divbtn",children:g.jsx("a",{href:u.campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn widgetsDivBookbtn",children:"Book"})})]}):g.jsx("div",{className:"carousel-div123",children:g.jsxs("p",{className:"txt2-123",children:[(u==null?void 0:u.campaignName)&&g.jsxs(g.Fragment,{children:[u.campaignName," ",g.jsx("br",{})]}),((h=u==null?void 0:u.offerPrice)==null?void 0:h.currency)&&((S=u==null?void 0:u.offerPrice)==null?void 0:S.price)&&g.jsxs(g.Fragment,{children:["From",g.jsxs(g.Fragment,{children:[" ",u.offerPrice.currency,u.offerPrice.price]})]})]})})]})},d)})}),s&&g.jsx("button",{className:"nav-btn123",onClick:y,children:"<"}),g.jsx("div",{className:"carousel",ref:r}),l&&g.jsx("button",{className:"nav-btn123",onClick:w,children:">"}),i!==null&&g.jsx(Py,{campaigns:e,currentIndex:i,onClose:v})]})})},Py=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=P.useState(t),[o,s]=P.useState(0),[a,l]=P.useState({mutedAll:!1}),[c,f]=P.useState(!1),[p,m]=P.useState(!1),[v,y]=P.useState(!1),[w,E]=P.useState(!1),u=P.useRef([]);P.useRef(null);const d=P.useRef(null);P.useEffect(()=>{const b=()=>{if(document.visibilityState==="hidden"){const x=u.current[o];x&&!x.paused&&(x.pause(),f(!0),E(!0))}};return document.addEventListener("visibilitychange",b),()=>{document.removeEventListener("visibilitychange",b)}},[o]),P.useEffect(()=>{const b=new IntersectionObserver(x=>{x.forEach(C=>{const N=u.current.indexOf(C.target);C.isIntersecting?(C.target.play(),s(N),E(!1)):C.target.pause()})},{threshold:.5});return s(0),u.current.forEach(x=>{x&&b.observe(x)}),()=>{u.current.forEach(x=>{x&&b.unobserve(x)})}},[r]),P.useEffect(()=>{const b=u.current[o];b&&b.play()},[o]);const h=()=>{r!==null?r+1<e.length?(i(r+1),s(0)):(i(0),s(0)):e.length>0&&(i(0),s(0)),m(!1),y(!1)},S=()=>{r!==null?r>0?(i(r-1),s(0)):(i(e.length-1),s(0)):e.length>0&&(i(e.length-1),s(0)),m(!1),y(!1)},k=b=>{const x=u.current[b];x&&(x.paused?(x.play(),console.log("Playing")):(x.pause(),console.log("Paused")),f(x.paused),E(x.paused))},T=()=>{u.current.forEach(x=>{x.muted=!a.mutedAll}),l(x=>({mutedAll:!x.mutedAll}))},z=()=>{y(!v)},A=(b,x=65)=>b.length>x?{truncated:b.slice(0,x)+"...",hasMore:!0}:{truncated:b,hasMore:!1},I=b=>{console.log("Video ended, checking if animation should play");const x=e[r];if(b<x.videoId.length-1)console.log("Not the last video, playing animation"),m(!0),setTimeout(()=>{const C=u.current[b];C&&(C.currentTime=0,C.play()),m(!1)},1500);else{console.log("Last video, no animation, just restart");const C=u.current[b];C&&(C.currentTime=0,C.play())}};return P.useEffect(()=>{s(0),d.current&&(d.current.scrollTop=0)},[r]),P.useEffect(()=>{const b=()=>{m(!1),y(!1)},x=d.current;return x&&x.addEventListener("scroll",b),()=>{x&&x.removeEventListener("scroll",b)}},[]),g.jsxs("div",{className:"whole123",children:[g.jsx("div",{className:"prevbtn123",onClick:S,children:g.jsx(U,{icon:ii})}),g.jsx("div",{className:"nextbtn123",onClick:h,children:g.jsx(U,{icon:ri})}),g.jsxs("div",{className:"reelsContainer",ref:d,children:[e[r].videoId.map((b,x)=>{var C,N,_,B;return g.jsx("div",{className:"reel",children:g.jsxs("div",{className:"video-container1",children:[g.jsx("div",{className:"closediv123",children:g.jsx("button",{className:"closebtn123",onClick:n,children:g.jsx(U,{icon:nr})})}),g.jsx("div",{className:"functions",children:g.jsx(U,{icon:a.mutedAll?tr:er,className:"volume123",onClick:T,style:{cursor:"pointer"}})}),g.jsx("video",{ref:L=>u.current[x]=L,src:b,className:"ad",loop:!1,playsInline:!0,controls:!1,autoPlay:x===o,onClick:()=>k(x),onPause:()=>{f(!0)},onPlay:()=>{f(!1)},onEnded:()=>I(x)}),c&&w&&g.jsx(U,{icon:Do,onClick:()=>k(x),className:"play-button123"}),g.jsxs("div",{className:"bookdiv123",children:[g.jsx("div",{className:"img1",children:g.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),g.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[g.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),g.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[v?e[r].campaignDetails:A(e[r].campaignDetails,65).truncated,A(e[r].campaignDetails,65).hasMore&&g.jsx("div",{children:g.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:z,children:v?" View Less":" View More"})})]}),g.jsxs("div",{className:"bottom-div",children:[" ",((N=(C=e[r])==null?void 0:C.offerPrice)==null?void 0:N.currency)&&((B=(_=e[r])==null?void 0:_.offerPrice)==null?void 0:B.price)&&g.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From"," ",e[r].offerPrice.currency,e[r].offerPrice.price]}),g.jsx("div",{className:"divbtn",children:g.jsx("a",{href:e[r].campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]})]})]})},x)}),p&&g.jsx("dotlottie-player",{src:"https://lottie.host/9dbbaa88-603c-407f-a9d4-f40ef822c697/JKZJQpvfeR.json",background:"transparent",speed:"1",style:{width:"29vh",height:"29vh",position:"absolute",bottom:"0",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"34px",color:"white",zIndex:1e3},loop:!0,autoplay:!0})]})]})},Ay=()=>{const[e,t]=P.useState([]),[n,r]=P.useState([]),[i,o]=P.useState(!0),[s,a]=P.useState(!1);return P.useEffect(()=>{const l=document.getElementById("root-stack"),c=l.dataset.campaignId,f=l.dataset.widgetStatus;a(f==="true"),(async m=>{try{const y=await(await fetch(`https://widgetapi.tripbuilder.in/${m}`)).json(),w=y.campaigns.map(E=>E.videoId[0]);t(w),r(y.campaigns)}catch(v){console.error("Error fetching data:",v)}})(c)},[]),P.useEffect(()=>{n.length>0&&o(!1)},[n]),g.jsxs("div",{className:"App2",children:[" ",g.jsx("style",{children:`
       @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

.down-arrow {
  bottom: 0;
  position: absolute;
  top: 90%;
  left: 50%;
  /* max-height: 10vh; */
  transform: translate(-50%, -50%);
  font-size: 34px;
  color: white;
  z-index: 1000;
}

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
  /* display: block; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
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

.vid,
.thumbnail {
  height: 100%;
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
  position: relative;
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

.inner-video-container123 {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 99;
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
  font-family: 'Poppins';

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
  position: absolute;
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
  margin-bottom: 1em !important;
  font-family: 'Poppins';

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
  background-color: transparent;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3.5vh;
  padding: 1rem;
  color: #ffffff94;
  border-radius: 0.5rem;
  cursor: pointer;
  z-index: 10;
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

  /* background-color: rgba(0, 0, 0, 0.178); */
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
  justify-content: center;
}

.closediv123 {
  position: absolute;
  top: 0vh;
  right: 0%;
  z-index: 10;
}

.functions {
  position: absolute;
  top: 60%;
  right: 0;
  transform: translateY(-50%);
  font-size: 3vh;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 1rem;
  color: #ffffff;
  cursor: pointer;
  z-index: 10;
}

.bottom-div {
  display: flex;
  gap: 2rem;
  align-items: end;
  justify-content: space-between;
}

.closebtn123 {
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 3.5vh;
  padding: 1rem;
  color: #ffffff;
  cursor: pointer;
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
}

.bookdiv123 {
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  width: 97%;
  min-height: 15vh;
  background-color: rgb(255 255 255 / 66%);
  border-radius: 1.5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vh;
  box-sizing: border-box;
}
@media screen and (max-width: 450px) {
  .offer {
    text-wrap: wrap;
  }
}
.img1 {
  flex: 0 0 22%;
  display: flex;
  height: 13vh;
  justify-content: center;
  align-items: center;
}

.img {
  width: 100%;
  height: 100%;
  border-radius: 1vh;
}

.text {
  text-align: left;
  margin-left: 1vh;
  margin-right: 1vh;
  flex-grow: 1;
  line-height: normal;
  padding: 0em !important;
}

.hotelname {
  margin-top: 1.1vh !important;
  margin-bottom: 1.6vh !important;
  color: black;
  font-weight: bolder;
  line-height: 0;
  font-family: "Poppins";
  font-size: 2vh;
}

.offer {
  color: black;
  margin: 2px 0;
  font-family: "Poppins";
  font-size: 1.6vh;
  line-height: 1.4;
  margin: 1.2vh 0 0 0;
  padding: 0 !important;
  background-color: rgba(255, 255, 255, 0) !important;
  font-weight: 400;
  text-wrap: wrap;
}

.view-more {
  font-size: 1.6vh;
  color: rgb(114, 94, 205);
  cursor: pointer;
}

.offerprice {
  color: black;
  margin: 1vh 0;
  font-weight: bold;
  font-family: "Poppins";

  font-size: 1.8vh !important;
  line-height: 1;
  text-wrap: wrap;
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
  font-family: "Poppins";
  font-size: 1.8vh;
  text-align: center;
  padding: 1vh 2vh;
  font-weight: 700;
}

.widgetsDivImg1 {
  height: 3.2rem !important;
}

.widgetsDivImg {
  border-radius: 8px !important;
}

.widgetsDivHotelname {
  font-size: 0.7rem !important;
}

.widgetsDivOfferprice {
  color: black !important;
  margin: 4px 0 !important;
  font-weight: bold !important;
  font-family: "Poppins";

  font-size: 0.8rem !important;
  line-height: normal !important;
}

.widgetsDivBookbtn {
  font-size: 0.67rem !important;
  padding: 0.7rem 1rem !important;
}

.widgetsDivBookdiv123 {
  position: absolute !important;
  bottom: 2% !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: 90% !important;
  background-color: rgba(255, 255, 255, 0.863) !important;
  border-radius: 16px !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  padding: 0.5rem !important;
  opacity: 0.8 !important;
}

`}),g.jsx(Cy,{videos:e,campaigns:n,loading:i,widgetsDiv:s})," "]})},Ty=()=>g.jsx("div",{className:"video-container123 skeleton-container",children:g.jsx("div",{className:"video-content",children:g.jsx("p",{className:"txt2-123"})})}),Ny=({videos:e,campaigns:t,loading:n,widgetsDiv:r})=>{const i=P.useRef(null),[o,s]=P.useState(null),[a,l]=P.useState(null),c=w=>{s(w)},f=()=>{s(null)},p=()=>{i.current.scrollBy({left:-i.current.clientWidth,behavior:"smooth"})},m=()=>{i.current.scrollBy({left:i.current.clientWidth,behavior:"smooth"})},v=w=>{l(w)},y=()=>{l(null)};return n?g.jsx("div",{className:"carousel-container",children:g.jsx("div",{className:"carousel",children:Array.from({length:5}).map((w,E)=>g.jsx(Ty,{},E))})}):g.jsxs("div",{className:"carousel-container",children:[g.jsx("button",{className:"nav-btn",onClick:p,children:"<"}),g.jsx("div",{className:"carousel",ref:i,children:t.map((w,E)=>{var u,d,h,S,k;return g.jsxs("div",{className:"video-container123",onClick:()=>c(E),onMouseEnter:()=>v(E),onMouseLeave:y,onTouchStart:()=>v(E),onTouchEnd:y,children:[a===E?g.jsx("video",{src:w.videoId[0],loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"}):g.jsx("img",{className:"thumbnail",src:w.campaignPhoto,width:"300",height:"200",alt:"video thumbnail"}),r?g.jsxs("div",{className:"widgetsDivBookdiv123",children:[g.jsx("div",{className:"img1 widgetsDivImg1",children:g.jsx("img",{className:"img widgetsDivImg",src:w.campaignPhoto,alt:"Campaign"})}),g.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[g.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname widgetsDivHotelname",children:w.campaignName}),g.jsx("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer"}),g.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"widgetsDivOfferprice",children:["From ",w.offerPrice.currency,w.offerPrice.price]})]}),g.jsx("div",{className:"divbtn",children:g.jsx("a",{href:w.campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn widgetsDivBookbtn",children:"Book"})})]}):g.jsx("div",{className:"video-content",children:g.jsxs("p",{className:"txt",children:[((u=t[E])==null?void 0:u.campaignName)&&g.jsxs(g.Fragment,{children:[t[E].campaignName,g.jsx("br",{})]}),((h=(d=t[E])==null?void 0:d.offerPrice)==null?void 0:h.currency)&&((k=(S=t[E])==null?void 0:S.offerPrice)==null?void 0:k.price)&&g.jsxs(g.Fragment,{children:["From",g.jsxs(g.Fragment,{children:[" ",t[E].offerPrice.currency,t[E].offerPrice.price]})]})]})})]},E)})}),g.jsx("button",{className:"nav-btn",onClick:m,children:">"}),o!==null&&g.jsx(zy,{campaigns:t,currentIndex:o,onClose:f})]})},zy=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=P.useState(t),[o,s]=P.useState(0),[a,l]=P.useState({mutedAll:!1}),[c,f]=P.useState(!1),[p,m]=P.useState(!1),[v,y]=P.useState(!1),[w,E]=P.useState(!1),u=P.useRef([]);P.useRef(null);const d=P.useRef(null);P.useEffect(()=>{const b=()=>{if(document.visibilityState==="hidden"){const x=u.current[o];x&&!x.paused&&(x.pause(),f(!0),E(!0))}};return document.addEventListener("visibilitychange",b),()=>{document.removeEventListener("visibilitychange",b)}},[o]),P.useEffect(()=>{const b=new IntersectionObserver(x=>{x.forEach(C=>{const N=u.current.indexOf(C.target);C.isIntersecting?(C.target.play(),s(N),E(!1)):C.target.pause()})},{threshold:.5});return s(0),u.current.forEach(x=>{x&&b.observe(x)}),()=>{u.current.forEach(x=>{x&&b.unobserve(x)})}},[r]),P.useEffect(()=>{const b=u.current[o];b&&b.play()},[o]);const h=()=>{r!==null?r+1<e.length?(i(r+1),s(0)):(i(0),s(0)):e.length>0&&(i(0),s(0)),m(!1),y(!1)},S=()=>{r!==null?r>0?(i(r-1),s(0)):(i(e.length-1),s(0)):e.length>0&&(i(e.length-1),s(0)),m(!1),y(!1)},k=b=>{const x=u.current[b];x&&(x.paused?(x.play(),console.log("Playing")):(x.pause(),console.log("Paused")),f(x.paused),E(x.paused))},T=()=>{u.current.forEach(x=>{x.muted=!a.mutedAll}),l(x=>({mutedAll:!x.mutedAll}))},z=()=>{y(!v)},A=(b,x=65)=>b.length>x?{truncated:b.slice(0,x)+"...",hasMore:!0}:{truncated:b,hasMore:!1},I=b=>{console.log("Video ended, checking if animation should play");const x=e[r];if(b<x.videoId.length-1)console.log("Not the last video, playing animation"),m(!0),setTimeout(()=>{const C=u.current[b];C&&(C.currentTime=0,C.play()),m(!1)},1500);else{console.log("Last video, no animation, just restart");const C=u.current[b];C&&(C.currentTime=0,C.play())}};return P.useEffect(()=>{s(0),d.current&&(d.current.scrollTop=0)},[r]),P.useEffect(()=>{const b=()=>{m(!1),y(!1)},x=d.current;return x&&x.addEventListener("scroll",b),()=>{x&&x.removeEventListener("scroll",b)}},[]),g.jsxs("div",{className:"whole123",children:[g.jsx("div",{className:"prevbtn123",onClick:S,children:g.jsx(U,{icon:ii})}),g.jsx("div",{className:"nextbtn123",onClick:h,children:g.jsx(U,{icon:ri})}),g.jsxs("div",{className:"reelsContainer",ref:d,children:[e[r].videoId.map((b,x)=>{var C,N,_,B;return g.jsx("div",{className:"reel",children:g.jsxs("div",{className:"video-container1",children:[g.jsx("div",{className:"closediv123",children:g.jsx("button",{className:"closebtn123",onClick:n,children:g.jsx(U,{icon:nr})})}),g.jsx("div",{className:"functions",children:g.jsx(U,{icon:a.mutedAll?tr:er,className:"volume123",onClick:T,style:{cursor:"pointer"}})}),g.jsx("video",{ref:L=>u.current[x]=L,src:b,className:"ad",loop:!1,playsInline:!0,controls:!1,autoPlay:x===o,onClick:()=>k(x),onPause:()=>{f(!0)},onPlay:()=>{f(!1)},onEnded:()=>I(x)}),c&&w&&g.jsx(U,{icon:Do,onClick:()=>k(x),className:"play-button123"}),g.jsxs("div",{className:"bookdiv123",children:[g.jsx("div",{className:"img1",children:g.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),g.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[g.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),g.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[v?e[r].campaignDetails:A(e[r].campaignDetails,65).truncated,A(e[r].campaignDetails,65).hasMore&&g.jsx("div",{children:g.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:z,children:v?" View Less":" View More"})})]}),g.jsxs("div",{className:"bottom-div",children:[" ",((N=(C=e[r])==null?void 0:C.offerPrice)==null?void 0:N.currency)&&((B=(_=e[r])==null?void 0:_.offerPrice)==null?void 0:B.price)&&g.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From"," ",e[r].offerPrice.currency,e[r].offerPrice.price]}),g.jsx("div",{className:"divbtn",children:g.jsx("a",{href:e[r].campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]})]})]})},x)}),p&&g.jsx("dotlottie-player",{src:"https://lottie.host/9dbbaa88-603c-407f-a9d4-f40ef822c697/JKZJQpvfeR.json",background:"transparent",speed:"1",style:{width:"29vh",height:"29vh",position:"absolute",bottom:"0",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"34px",color:"white",zIndex:1e3},loop:!0,autoplay:!0})]})]})},Iy=()=>{const[e,t]=P.useState([]),[n,r]=P.useState([]),[i,o]=P.useState(!0),[s,a]=P.useState(!1);return P.useEffect(()=>{const l=document.getElementById("root-carosole"),c=l.dataset.widgetStatus;a(c==="true");const f=l.dataset.campaignId;f?(async m=>{try{const y=await(await fetch(`https://widgetapi.tripbuilder.in/${m}`)).json(),w=y.campaigns.map(E=>E.videoId[0]);t(w),r(y.campaigns)}catch(v){console.error("Error fetching data:",v)}})(f):console.error("No campaign ID found")},[]),P.useEffect(()=>{n.length>0&&o(!1)},[n]),g.jsxs("div",{className:"App3",children:[g.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
      
            .down-arrow {
  bottom: 0;
  position: absolute;
  top: 90%;
  left: 50%;
  /* max-height: 10vh; */
  transform: translate(-50%, -50%);
  font-size: 34px;
  color: white;
  z-index: 1000;
}
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

    width: 100%;
    justify-content: center;
    display: flex;
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
  height: 100% !important;
  overflow-y:scroll !important;
  width: 100%;
  overflow: auto;
  flex-direction: column;
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
  justify-content: center;
}

.closediv123 {
    position: absolute;
    top: 0vh;
    right: 0%;
    z-index: 10;
}

.functions {
   position: absolute;
    top: 60%;
    right: 0;
    transform: translateY(-50%);
    font-size: 3vh;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 1rem;
    color: #ffffff;
    cursor: pointer;
    z-index: 10;
}

.nextbtn123,
.prevbtn123 {
    background-color: transparent;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3.5vh;
    padding: 1rem;
    color: #ffffff94;
    border-radius: 0.5rem;
    cursor: pointer;
    z-index: 10;
}



.closebtn123 {
  background-color: transparent;
    border: none;
    outline: none;
    font-size: 3.5vh;
    padding: 1rem;
    color: #ffffff;
    cursor: pointer;
}



  .bottom-div {
  display: flex;
  gap: 2rem;
  align-items: end;
  justify-content: space-between;
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

 


}

 .bookdiv123 {
   position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
    width: 97%;
    min-height: 15vh;
    background-color: rgb(255 255 255 / 66%);
    border-radius: 1.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh;
    box-sizing: border-box;
}


@media screen and (max-width: 450px) {
  .offer {
    text-wrap: wrap;
  }
}
.img1 {
  flex: 0 0 22%;
  display: flex;
  height: 13vh;
  justify-content: center;
  align-items: center;
}

.img {
  // width: 100%;
  // height: 100%;
  // border-radius: 1.8vh;
   height: 100% !important;
   width: 100% !important;
   border-radius: 1vh !important;
}

.text {
  text-align: left;
  margin-left: 1vh;
  margin-right: 1vh;
  flex-grow: 1;
  line-height: normal;
  padding:0em !important;
}

.hotelname {
    margin-top: 1.1vh !important;
    margin-bottom: 1.6vh !important;
    color: black;
    font-weight: bolder;
    line-height: 0;
     font-family: 'Poppins';
    font-size: 2vh;
}

  
.offer {
    color: black;
    margin: 2px 0;
      font-family: 'Poppins';
    font-size: 1.6vh;
    line-height: 1.4;
    margin: 1.2vh 0 0 0;
     padding: 0 !important;
  background-color: rgba(255, 255, 255, 0) !important;
    font-weight: 400;
    text-wrap: wrap;
}


.view-more {
  font-size: 1.6vh;
  color: rgb(114, 94, 205);
  cursor: pointer;
}

.offerprice {
    color: black;
    margin: 1vh 0;
    font-weight: bold;
      font-family: 'Poppins';
    font-size: 1.8vh !important;
    line-height: 1;
    text-wrap: wrap;
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
      font-family: 'Poppins';
    font-size: 1.8vh;
    text-align: center;
    padding: 1vh 2vh;
}

/* Mobile responsive */
@media (max-width: 450px) {


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
     margin-bottom: 1em !important;
       font-family: 'Poppins';


}
    .txt > p {
          margin-bottom: 0 !important;
        }


  

.widgetsDivImg1 {
    height: 3.2rem !important;
}

.widgetsDivImg {
    border-radius: 8px !important;
}

.widgetsDivHotelname {
    font-size: 0.7rem !important;
}

.widgetsDivOfferprice {
    color: black !important;
    margin: 4px 0 !important;
    font-weight: bold !important;
     font-family: 'Poppins';
    font-size: 0.8rem !important;
    line-height: normal !important;
}

.widgetsDivBookbtn {
    font-size: 0.67rem !important;
    padding: 0.7rem 1rem !important;
}

.widgetsDivBookdiv123 {
    position: absolute !important;
    bottom: 2% !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    width: 90% !important;
    background-color: rgba(255, 255, 255, 0.863) !important;
    border-radius: 16px !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    padding: 0.5rem !important;
    opacity: 0.8 !important;
    z-index: 100;
}      

`}),g.jsx(Ny,{videos:e,campaigns:n,loading:i,widgetsDiv:s})," "]})},My=({campaigns:e,onClose:t})=>{const[n,r]=P.useState(!0),[i,o]=P.useState(null),[s,a]=P.useState(!1),l=P.useRef(null);P.useEffect(()=>{(async()=>{try{l.current&&await l.current.play()}catch(w){console.log("Autoplay was prevented",w)}})()},[]);const c=y=>{o(y),r(!0)},f=()=>{o(null)},p=()=>{a(!s)};if(e.length===0)return null;const m=e[0].videoId[0],v=()=>{r(!n)};return g.jsxs(g.Fragment,{children:[" ",i!==null&&g.jsx(jy,{campaigns:e,currentIndex:i,onClose:f}),g.jsx("div",{className:`page-video ${s?"minimized":""}`,children:g.jsxs("div",{className:"popupVideo",children:[g.jsxs("div",{className:"popup-control-buttons",children:[g.jsx("div",{className:"popup-minimize-button",onClick:p,children:g.jsx(U,{icon:s?jg:_g})}),g.jsx("div",{className:"popup-close-button",onClick:t,children:g.jsx(U,{icon:nr})})]}),!s&&g.jsxs(g.Fragment,{children:[g.jsx("video",{ref:l,src:m,muted:n,playsInline:!0,autoPlay:!0,loop:!0,onClick:()=>c(0)}),g.jsx("div",{className:"mute-unmute-button",onClick:v,children:g.jsx(U,{className:"mute",icon:n?tr:er})})]})]})})]})},jy=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=P.useState(t),[o,s]=P.useState(0),[a,l]=P.useState({mutedAll:!1}),[c,f]=P.useState(!1),[p,m]=P.useState(!1),[v,y]=P.useState(!1),[w,E]=P.useState(!1),u=P.useRef([]);P.useRef(null);const d=P.useRef(null),h=P.useRef(null);P.useEffect(()=>{const x=()=>{if(document.visibilityState==="hidden"){const C=u.current[o];C&&!C.paused&&(C.pause(),f(!0),E(!0))}};return document.addEventListener("visibilitychange",x),()=>{document.removeEventListener("visibilitychange",x)}},[o]),P.useEffect(()=>{const x=new IntersectionObserver(C=>{C.forEach(N=>{const _=u.current.indexOf(N.target);N.isIntersecting?(N.target.play(),s(_),E(!1)):N.target.pause()})},{threshold:.5});return s(0),u.current.forEach(C=>{C&&x.observe(C)}),()=>{u.current.forEach(C=>{C&&x.unobserve(C)})}},[r]),P.useEffect(()=>{const x=u.current[o];x&&x.play()},[o]);const S=()=>{r!==null?r+1<e.length?(i(r+1),s(0)):(i(0),s(0)):e.length>0&&(i(0),s(0)),m(!1),y(!1)},k=()=>{r!==null?r>0?(i(r-1),s(0)):(i(e.length-1),s(0)):e.length>0&&(i(e.length-1),s(0)),m(!1),y(!1)},T=x=>{const C=u.current[x];C&&(C.paused?(C.play(),console.log("Playing")):(C.pause(),console.log("Paused")),f(C.paused),E(C.paused))},z=()=>{u.current.forEach(C=>{C.muted=!a.mutedAll}),l(C=>({mutedAll:!C.mutedAll}))},A=()=>{y(!v)},I=(x,C=65)=>x.length>C?{truncated:x.slice(0,C)+"...",hasMore:!0}:{truncated:x,hasMore:!1},b=x=>{console.log("Video ended, checking if animation should play");const C=e[r];if(x<C.videoId.length-1)console.log("Not the last video, playing animation"),m(!0),setTimeout(()=>{const N=u.current[x];N&&(N.currentTime=0,N.play()),m(!1)},1500);else{console.log("Last video, no animation, just restart");const N=u.current[x];N&&(N.currentTime=0,N.play())}};return P.useEffect(()=>{s(0),h.current&&(h.current.scrollTop=0)},[r]),P.useEffect(()=>{const x=()=>{m(!1),y(!1)},C=h.current;return C&&C.addEventListener("scroll",x),()=>{C&&C.removeEventListener("scroll",x)}},[]),g.jsxs("div",{className:"wholePopup",ref:d,children:[g.jsx("div",{className:"prevbtn123",onClick:k,children:g.jsx(U,{icon:ii})}),g.jsx("div",{className:"nextbtn123",onClick:S,children:g.jsx(U,{icon:ri})}),g.jsxs("div",{className:"reelsPopupContainer",ref:h,children:[e[r].videoId.map((x,C)=>{var N,_,B,L;return g.jsx("div",{className:"reel",children:g.jsxs("div",{className:"video-container1",children:[g.jsx("div",{className:"closediv123",children:g.jsx("button",{className:"closebtn123",onClick:n,children:g.jsx(U,{icon:nr})})}),g.jsx("div",{className:"functions",children:g.jsx(U,{icon:a.mutedAll?tr:er,className:"volume123",onClick:z,style:{cursor:"pointer"}})}),g.jsx("video",{ref:H=>u.current[C]=H,src:x,className:"ad",loop:!1,playsInline:!0,controls:!1,autoPlay:C===o,onClick:()=>T(C),onPause:()=>{f(!0)},onPlay:()=>{f(!1)},onEnded:()=>b(C)}),c&&w&&g.jsx(U,{icon:Do,onClick:()=>T(C),className:"play-button123"}),g.jsxs("div",{className:"bookdiv123",children:[g.jsx("div",{className:"img1",children:g.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),g.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[g.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),g.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[v?e[r].campaignDetails:I(e[r].campaignDetails,65).truncated,I(e[r].campaignDetails,65).hasMore&&g.jsx("div",{children:g.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:A,children:v?" View Less":" View More"})})]}),g.jsxs("div",{className:"bottom-div",children:[" ",((_=(N=e[r])==null?void 0:N.offerPrice)==null?void 0:_.currency)&&((L=(B=e[r])==null?void 0:B.offerPrice)==null?void 0:L.price)&&g.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From"," ",e[r].offerPrice.currency,e[r].offerPrice.price]}),g.jsx("div",{className:"divbtn",children:g.jsx("a",{href:e[r].campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]})]})]})},C)}),p&&g.jsx("dotlottie-player",{src:"https://lottie.host/9dbbaa88-603c-407f-a9d4-f40ef822c697/JKZJQpvfeR.json",background:"transparent",speed:"1",style:{width:"29vh",height:"29vh",position:"absolute",bottom:"0",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"34px",color:"white",zIndex:1e3},loop:!0,autoplay:!0})]})]})};function om(){console.log("Popup component rendered");const[e,t]=P.useState([]),[n,r]=P.useState(!0);P.useEffect(()=>{const s=document.getElementById("root-popup").dataset.campaignId;console.log("Popup useEffect triggered"),s?(async l=>{try{console.log("Fetching video data for campaignId:",l);const f=await(await fetch(`https://widgetapi.tripbuilder.in/${l}`)).json();console.log("Fetched data:",f),t(f.campaigns)}catch(c){console.error("Error fetching data:",c)}})(s):console.log("No campaign ID found!")},[]);const i=()=>{console.log("Close button clicked"),r(!1)};return g.jsxs("div",{className:"App4",children:[g.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

          
//                 .down-arrow {
//   bottom: 0;
//   position: absolute;
//   top: 90%;
//   left: 50%;
//   /* max-height: 10vh; */
//   transform: translate(-50%, -50%);
//   font-size: 34px;
//   color: white;
//   z-index: 1000;
// }
    .page-video {
  position: fixed;
  bottom: 8px;
  height: 36vh;
  right: 8px;
  width: 22vh;
  transition: all 0.5s ease;
}

.page-video.minimized {
  height: 7.5vh;
  width: 14vh;
}

.popupVideo {
  height: 100%;
  width: 100%;
  position: relative;
  align-items: center;
  overflow: hidden;
  border-radius: 1.3vh;
  background: rgba(0, 0, 0, 0.5);
}

.popup-control-buttons {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
  z-index: 10;
}

.popup-minimize-button,
.popup-close-button {
  cursor: pointer;
  width: 5vh;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.popup-minimize-button svg,
.popup-close-button svg {
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
  bottom: 0;
  position: absolute;
  text-align: center;
  justify-content: center;
  overflow: hidden;
  padding: 2vh 0;
  border-radius: 1.3vh;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.mute {
  font-size: 4vh;
  color: white;
}


.page-video.hidden {
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
}

/* reels css */

.wholePopup {
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

.reelsPopupContainer::-webkit-scrollbar {
  display: none;
}

.reelsPopupContainer {
  height: 100%;
  width: 100%;
  overflow: auto;
  flex-direction: column;
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


.bottom-div {
  display: flex;
  gap: 2rem;
  align-items: end;
  justify-content: space-between;
}

.closediv123 {
    position: absolute;
    top: 0vh;
    right: 0%;
    z-index: 10;
}

.functions {
   position: absolute;
    top: 60%;
    right: 0;
    transform: translateY(-50%);
    font-size: 3vh;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 1rem;
    color: #ffffff;
    cursor: pointer;
    z-index: 10;
}

.nextbtn123,
.prevbtn123 {
    background-color: transparent;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3.5vh;
    padding: 1rem;
    color: #ffffff94;
    border-radius: 0.5rem;
    cursor: pointer;
    z-index: 10;
}



.closebtn123 {
  background-color: transparent;
    border: none;
    outline: none;
    font-size: 3.5vh;
    padding: 1rem;
    color: #ffffff;
    cursor: pointer;
}



.bookdiv123 {
   position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
    width: 97%;
    min-height: 15vh;
    background-color: rgb(255 255 255 / 66%);
    border-radius: 1.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh;
    box-sizing: border-box;
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


  .carousel-container123 {
    position: relative;
    left: 2.5vw;
    width: 95vw;
    height: 408px;
  }

 

  .carousel::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }

  

  
}
 



@media screen and (max-width: 450px) {
  .offer {
    text-wrap: wrap;
  }
}
.img1 {
    flex: 0 0 22%;
    display: flex;
    height: 13vh;
    justify-content: center;
    align-items: center;
}

.img {
    height: 100% !important;
    width: 100% !important;
    border-radius: 1vh !important;
}

.text {
  text-align: left;
  margin-left: 1vh;
  margin-right: 1vh;
  flex-grow: 1;
  line-height: normal;
  padding:0em !important;
}

.hotelname {
    margin-top: 1.1vh !important;
    margin-bottom: 1.6vh !important;
    color: black;
    font-weight: bolder;
    line-height: 0;
     font-family: 'Poppins';

    font-size: 2vh;
}

.offer {
    color: black;
    margin: 2px 0;
      font-family: 'Poppins';

    font-size: 1.6vh;
    line-height: 1.4;
    margin: 1.2vh 0 0 0;
     padding: 0 !important;
  background-color: rgba(255, 255, 255, 0) !important;
    font-weight: 400;
    text-wrap: wrap;
}
.view-more {
  font-size: 1.6vh;
  color: rgb(114, 94, 205);
  cursor: pointer;
}

.offerprice {
    color: black;
    margin: 1vh 0;
    font-weight: bold;
      font-family: 'Poppins';

    font-size: 1.8vh !important;
    line-height: 1;
    text-wrap: wrap;
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
      font-family: 'Poppins';

    font-size: 1.8vh;
    text-align: center;
    padding: 1vh 2vh;
}
/* Mobile responsive */
@media (max-width: 450px) {


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
`}),n&&g.jsx(My,{campaigns:e,onClose:i})]})}const Ns=document.getElementById("root-stories"),zs=document.getElementById("root-grid"),Is=document.getElementById("root-carosole"),Ms=document.getElementById("root-stack"),js=document.getElementById("root-popup");js&&js.dataset.name==="popup"&&Vt.createRoot(js).render(g.jsx(Y.StrictMode,{children:g.jsx(om,{})}));Ns&&Ns.dataset.name==="stories"&&Vt.createRoot(Ns).render(g.jsx(Y.StrictMode,{children:g.jsx(Uv,{})}));zs&&zs.dataset.name==="grid"&&Vt.createRoot(zs).render(g.jsx(Y.StrictMode,{children:g.jsx($p,{})}));Is&&Is.dataset.name==="carosole"&&Vt.createRoot(Is).render(g.jsx(Y.StrictMode,{children:g.jsx(Iy,{})}));Ms&&Ms.dataset.name==="stack"&&Vt.createRoot(Ms).render(g.jsx(Y.StrictMode,{children:g.jsx(Ay,{})}));Vt.createRoot(document.getElementById("root")).render(g.jsxs(Y.StrictMode,{children:[g.jsx(om,{}),g.jsx($p,{})]}));
