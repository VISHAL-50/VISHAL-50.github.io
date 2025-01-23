(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Gc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Uc={exports:{}},vo={},Wc={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=Symbol.for("react.element"),rm=Symbol.for("react.portal"),im=Symbol.for("react.fragment"),om=Symbol.for("react.strict_mode"),sm=Symbol.for("react.profiler"),lm=Symbol.for("react.provider"),am=Symbol.for("react.context"),um=Symbol.for("react.forward_ref"),cm=Symbol.for("react.suspense"),dm=Symbol.for("react.memo"),fm=Symbol.for("react.lazy"),tu=Symbol.iterator;function pm(e){return e===null||typeof e!="object"?null:(e=tu&&e[tu]||e["@@iterator"],typeof e=="function"?e:null)}var Yc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qc=Object.assign,Xc={};function qn(e,t,n){this.props=e,this.context=t,this.refs=Xc,this.updater=n||Yc}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kc(){}Kc.prototype=qn.prototype;function Wl(e,t,n){this.props=e,this.context=t,this.refs=Xc,this.updater=n||Yc}var Yl=Wl.prototype=new Kc;Yl.constructor=Wl;Qc(Yl,qn.prototype);Yl.isPureReactComponent=!0;var nu=Array.isArray,qc=Object.prototype.hasOwnProperty,Ql={current:null},Zc={key:!0,ref:!0,__self:!0,__source:!0};function Jc(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)qc.call(t,r)&&!Zc.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Xr,type:e,key:o,ref:s,props:i,_owner:Ql.current}}function mm(e,t){return{$$typeof:Xr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xr}function hm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ru=/\/+/g;function Ho(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hm(""+e.key):t.toString(36)}function ki(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Xr:case rm:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ho(s,0):r,nu(i)?(n="",e!=null&&(n=e.replace(ru,"$&/")+"/"),ki(i,t,n,"",function(c){return c})):i!=null&&(Xl(i)&&(i=mm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ru,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",nu(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Ho(o,l);s+=ki(o,t,n,a,i)}else if(a=pm(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Ho(o,l++),s+=ki(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ii(e,t,n){if(e==null)return e;var r=[],i=0;return ki(e,r,"","",function(o){return t.call(n,o,i++)}),r}function gm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},Ci={transition:null},vm={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Ci,ReactCurrentOwner:Ql};function ed(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:ii,forEach:function(e,t,n){ii(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ii(e,function(){t++}),t},toArray:function(e){return ii(e,function(t){return t})||[]},only:function(e){if(!Xl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=qn;$.Fragment=im;$.Profiler=sm;$.PureComponent=Wl;$.StrictMode=om;$.Suspense=cm;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vm;$.act=ed;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qc({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Ql.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)qc.call(t,a)&&!Zc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Xr,type:e.type,key:i,ref:o,props:r,_owner:s}};$.createContext=function(e){return e={$$typeof:am,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lm,_context:e},e.Consumer=e};$.createElement=Jc;$.createFactory=function(e){var t=Jc.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:um,render:e}};$.isValidElement=Xl;$.lazy=function(e){return{$$typeof:fm,_payload:{_status:-1,_result:e},_init:gm}};$.memo=function(e,t){return{$$typeof:dm,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Ci.transition;Ci.transition={};try{e()}finally{Ci.transition=t}};$.unstable_act=ed;$.useCallback=function(e,t){return Ee.current.useCallback(e,t)};$.useContext=function(e){return Ee.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};$.useEffect=function(e,t){return Ee.current.useEffect(e,t)};$.useId=function(){return Ee.current.useId()};$.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Ee.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};$.useRef=function(e){return Ee.current.useRef(e)};$.useState=function(e){return Ee.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Ee.current.useTransition()};$.version="18.3.1";Wc.exports=$;var T=Wc.exports;const Q=Gc(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=T,wm=Symbol.for("react.element"),xm=Symbol.for("react.fragment"),Sm=Object.prototype.hasOwnProperty,Em=ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bm={key:!0,ref:!0,__self:!0,__source:!0};function td(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Sm.call(t,r)&&!bm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:wm,type:e,key:o,ref:s,props:i,_owner:Em.current}}vo.Fragment=xm;vo.jsx=td;vo.jsxs=td;Uc.exports=vo;var y=Uc.exports,Vn={},nd={exports:{}},je={},rd={exports:{}},id={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,j){var R=L.length;L.push(j);e:for(;0<R;){var J=R-1>>>1,se=L[J];if(0<i(se,j))L[J]=j,L[R]=se,R=J;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var j=L[0],R=L.pop();if(R!==j){L[0]=R;e:for(var J=0,se=L.length,ni=se>>>1;J<ni;){var Xt=2*(J+1)-1,$o=L[Xt],Kt=Xt+1,ri=L[Kt];if(0>i($o,R))Kt<se&&0>i(ri,$o)?(L[J]=ri,L[Kt]=R,J=Kt):(L[J]=$o,L[Xt]=R,J=Xt);else if(Kt<se&&0>i(ri,R))L[J]=ri,L[Kt]=R,J=Kt;else break e}}return j}function i(L,j){var R=L.sortIndex-j.sortIndex;return R!==0?R:L.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],c=[],f=1,p=null,m=3,g=!1,v=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(L){for(var j=n(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=L)r(c),j.sortIndex=j.expirationTime,t(a,j);else break;j=n(c)}}function x(L){if(w=!1,h(L),!v)if(n(a)!==null)v=!0,_(k);else{var j=n(c);j!==null&&H(x,j.startTime-L)}}function k(L,j){v=!1,w&&(w=!1,u(C),C=-1),g=!0;var R=m;try{for(h(j),p=n(a);p!==null&&(!(p.expirationTime>j)||L&&!E());){var J=p.callback;if(typeof J=="function"){p.callback=null,m=p.priorityLevel;var se=J(p.expirationTime<=j);j=e.unstable_now(),typeof se=="function"?p.callback=se:p===n(a)&&r(a),h(j)}else r(a);p=n(a)}if(p!==null)var ni=!0;else{var Xt=n(c);Xt!==null&&H(x,Xt.startTime-j),ni=!1}return ni}finally{p=null,m=R,g=!1}}var A=!1,N=null,C=-1,M=5,S=-1;function E(){return!(e.unstable_now()-S<M)}function P(){if(N!==null){var L=e.unstable_now();S=L;var j=!0;try{j=N(!0,L)}finally{j?z():(A=!1,N=null)}}else A=!1}var z;if(typeof d=="function")z=function(){d(P)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,B=F.port2;F.port1.onmessage=P,z=function(){B.postMessage(null)}}else z=function(){b(P,0)};function _(L){N=L,A||(A=!0,z())}function H(L,j){C=b(function(){L(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,_(k))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(L){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var R=m;m=j;try{return L()}finally{m=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,j){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var R=m;m=L;try{return j()}finally{m=R}},e.unstable_scheduleCallback=function(L,j,R){var J=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?J+R:J):R=J,L){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=R+se,L={id:f++,callback:j,priorityLevel:L,startTime:R,expirationTime:se,sortIndex:-1},R>J?(L.sortIndex=R,t(c,L),n(a)===null&&L===n(c)&&(w?(u(C),C=-1):w=!0,H(x,R-J))):(L.sortIndex=se,t(a,L),v||g||(v=!0,_(k))),L},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(L){var j=m;return function(){var R=m;m=j;try{return L.apply(this,arguments)}finally{m=R}}}})(id);rd.exports=id;var km=rd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm=T,_e=km;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var od=new Set,Nr={};function gn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(Nr[e]=t,e=0;e<t.length;e++)od.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ms=Object.prototype.hasOwnProperty,Pm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,iu={},ou={};function Am(e){return Ms.call(ou,e)?!0:Ms.call(iu,e)?!1:Pm.test(e)?ou[e]=!0:(iu[e]=!0,!1)}function Tm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nm(e,t,n,r){if(t===null||typeof t>"u"||Tm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Kl=/[\-:]([a-z])/g;function ql(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Kl,ql);he[t]=new be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Kl,ql);he[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Kl,ql);he[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zl(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Nm(t,n,i,r)&&(n=null),r||i===null?Am(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=Cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oi=Symbol.for("react.element"),wn=Symbol.for("react.portal"),xn=Symbol.for("react.fragment"),Jl=Symbol.for("react.strict_mode"),Ls=Symbol.for("react.profiler"),sd=Symbol.for("react.provider"),ld=Symbol.for("react.context"),ea=Symbol.for("react.forward_ref"),Os=Symbol.for("react.suspense"),_s=Symbol.for("react.suspense_list"),ta=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),ad=Symbol.for("react.offscreen"),su=Symbol.iterator;function nr(e){return e===null||typeof e!="object"?null:(e=su&&e[su]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,Go;function dr(e){if(Go===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Go=t&&t[1]||""}return`
`+Go+e}var Uo=!1;function Wo(e,t){if(!e||Uo)return"";Uo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Uo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function zm(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=Wo(e.type,!1),e;case 11:return e=Wo(e.type.render,!1),e;case 1:return e=Wo(e.type,!0),e;default:return""}}function js(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xn:return"Fragment";case wn:return"Portal";case Ls:return"Profiler";case Jl:return"StrictMode";case Os:return"Suspense";case _s:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ld:return(e.displayName||"Context")+".Consumer";case sd:return(e._context.displayName||"Context")+".Provider";case ea:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ta:return t=e.displayName||null,t!==null?t:js(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return js(e(t))}catch{}}return null}function Im(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return js(t);case 8:return t===Jl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ud(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mm(e){var t=ud(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function si(e){e._valueTracker||(e._valueTracker=Mm(e))}function cd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ud(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ds(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function lu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dd(e,t){t=t.checked,t!=null&&Zl(e,"checked",t,!1)}function Fs(e,t){dd(e,t);var n=Vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Rs(e,t.type,Vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function au(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Rs(e,t,n){(t!=="number"||Ri(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(fr(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vt(n)}}function fd(e,t){var n=Vt(t.value),r=Vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var li,md=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(li=li||document.createElement("div"),li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lm=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(e){Lm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vr[t]=vr[e]})});function hd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vr.hasOwnProperty(e)&&vr[e]?(""+t).trim():t+"px"}function gd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Om=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $s(e,t){if(t){if(Om[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function Hs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gs=null;function na(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Us=null,On=null,_n=null;function du(e){if(e=Zr(e)){if(typeof Us!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Eo(t),Us(e.stateNode,e.type,t))}}function vd(e){On?_n?_n.push(e):_n=[e]:On=e}function yd(){if(On){var e=On,t=_n;if(_n=On=null,du(e),t)for(e=0;e<t.length;e++)du(t[e])}}function wd(e,t){return e(t)}function xd(){}var Yo=!1;function Sd(e,t,n){if(Yo)return e(t,n);Yo=!0;try{return wd(e,t,n)}finally{Yo=!1,(On!==null||_n!==null)&&(xd(),yd())}}function Ir(e,t){var n=e.stateNode;if(n===null)return null;var r=Eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Ws=!1;if(ht)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){Ws=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{Ws=!1}function _m(e,t,n,r,i,o,s,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var yr=!1,Bi=null,Vi=!1,Ys=null,jm={onError:function(e){yr=!0,Bi=e}};function Dm(e,t,n,r,i,o,s,l,a){yr=!1,Bi=null,_m.apply(jm,arguments)}function Fm(e,t,n,r,i,o,s,l,a){if(Dm.apply(this,arguments),yr){if(yr){var c=Bi;yr=!1,Bi=null}else throw Error(I(198));Vi||(Vi=!0,Ys=c)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ed(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fu(e){if(vn(e)!==e)throw Error(I(188))}function Rm(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return fu(i),e;if(o===r)return fu(i),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function bd(e){return e=Rm(e),e!==null?kd(e):null}function kd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kd(e);if(t!==null)return t;e=e.sibling}return null}var Cd=_e.unstable_scheduleCallback,pu=_e.unstable_cancelCallback,Bm=_e.unstable_shouldYield,Vm=_e.unstable_requestPaint,oe=_e.unstable_now,$m=_e.unstable_getCurrentPriorityLevel,ra=_e.unstable_ImmediatePriority,Pd=_e.unstable_UserBlockingPriority,$i=_e.unstable_NormalPriority,Hm=_e.unstable_LowPriority,Ad=_e.unstable_IdlePriority,yo=null,st=null;function Gm(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(yo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:Ym,Um=Math.log,Wm=Math.LN2;function Ym(e){return e>>>=0,e===0?32:31-(Um(e)/Wm|0)|0}var ai=64,ui=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=pr(l):(o&=s,o!==0&&(r=pr(o)))}else s=n&~i,s!==0?r=pr(s):o!==0&&(r=pr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),i=1<<n,r|=e[n],t&=~i;return r}function Qm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ke(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=Qm(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function Qs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Td(){var e=ai;return ai<<=1,!(ai&4194240)&&(ai=64),e}function Qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function Km(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ke(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ia(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Nd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zd,oa,Id,Md,Ld,Xs=!1,ci=[],Lt=null,Ot=null,_t=null,Mr=new Map,Lr=new Map,At=[],qm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mu(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(t.pointerId)}}function ir(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Zr(t),t!==null&&oa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Zm(e,t,n,r,i){switch(t){case"focusin":return Lt=ir(Lt,e,t,n,r,i),!0;case"dragenter":return Ot=ir(Ot,e,t,n,r,i),!0;case"mouseover":return _t=ir(_t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Mr.set(o,ir(Mr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Lr.set(o,ir(Lr.get(o)||null,e,t,n,r,i)),!0}return!1}function Od(e){var t=en(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ed(n),t!==null){e.blockedOn=t,Ld(e.priority,function(){Id(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ks(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gs=r,n.target.dispatchEvent(r),Gs=null}else return t=Zr(n),t!==null&&oa(t),e.blockedOn=n,!1;t.shift()}return!0}function hu(e,t,n){Pi(e)&&n.delete(t)}function Jm(){Xs=!1,Lt!==null&&Pi(Lt)&&(Lt=null),Ot!==null&&Pi(Ot)&&(Ot=null),_t!==null&&Pi(_t)&&(_t=null),Mr.forEach(hu),Lr.forEach(hu)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,Xs||(Xs=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,Jm)))}function Or(e){function t(i){return or(i,e)}if(0<ci.length){or(ci[0],e);for(var n=1;n<ci.length;n++){var r=ci[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&or(Lt,e),Ot!==null&&or(Ot,e),_t!==null&&or(_t,e),Mr.forEach(t),Lr.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)Od(n),n.blockedOn===null&&At.shift()}var jn=St.ReactCurrentBatchConfig,Gi=!0;function eh(e,t,n,r){var i=U,o=jn.transition;jn.transition=null;try{U=1,sa(e,t,n,r)}finally{U=i,jn.transition=o}}function th(e,t,n,r){var i=U,o=jn.transition;jn.transition=null;try{U=4,sa(e,t,n,r)}finally{U=i,jn.transition=o}}function sa(e,t,n,r){if(Gi){var i=Ks(e,t,n,r);if(i===null)is(e,t,r,Ui,n),mu(e,r);else if(Zm(i,e,t,n,r))r.stopPropagation();else if(mu(e,r),t&4&&-1<qm.indexOf(e)){for(;i!==null;){var o=Zr(i);if(o!==null&&zd(o),o=Ks(e,t,n,r),o===null&&is(e,t,r,Ui,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else is(e,t,r,null,n)}}var Ui=null;function Ks(e,t,n,r){if(Ui=null,e=na(r),e=en(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ed(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ui=e,null}function _d(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($m()){case ra:return 1;case Pd:return 4;case $i:case Hm:return 16;case Ad:return 536870912;default:return 16}default:return 16}}var Nt=null,la=null,Ai=null;function jd(){if(Ai)return Ai;var e,t=la,n=t.length,r,i="value"in Nt?Nt.value:Nt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ai=i.slice(e,1<r?1-r:void 0)}function Ti(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function gu(){return!1}function De(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?di:gu,this.isPropagationStopped=gu,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},aa=De(Zn),qr=ne({},Zn,{view:0,detail:0}),nh=De(qr),Xo,Ko,sr,wo=ne({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ua,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(Xo=e.screenX-sr.screenX,Ko=e.screenY-sr.screenY):Ko=Xo=0,sr=e),Xo)},movementY:function(e){return"movementY"in e?e.movementY:Ko}}),vu=De(wo),rh=ne({},wo,{dataTransfer:0}),ih=De(rh),oh=ne({},qr,{relatedTarget:0}),qo=De(oh),sh=ne({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),lh=De(sh),ah=ne({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uh=De(ah),ch=ne({},Zn,{data:0}),yu=De(ch),dh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ph={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ph[e])?!!t[e]:!1}function ua(){return mh}var hh=ne({},qr,{key:function(e){if(e.key){var t=dh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ua,charCode:function(e){return e.type==="keypress"?Ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gh=De(hh),vh=ne({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wu=De(vh),yh=ne({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ua}),wh=De(yh),xh=ne({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sh=De(xh),Eh=ne({},wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bh=De(Eh),kh=[9,13,27,32],ca=ht&&"CompositionEvent"in window,wr=null;ht&&"documentMode"in document&&(wr=document.documentMode);var Ch=ht&&"TextEvent"in window&&!wr,Dd=ht&&(!ca||wr&&8<wr&&11>=wr),xu=" ",Su=!1;function Fd(e,t){switch(e){case"keyup":return kh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function Ph(e,t){switch(e){case"compositionend":return Rd(t);case"keypress":return t.which!==32?null:(Su=!0,xu);case"textInput":return e=t.data,e===xu&&Su?null:e;default:return null}}function Ah(e,t){if(Sn)return e==="compositionend"||!ca&&Fd(e,t)?(e=jd(),Ai=la=Nt=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dd&&t.locale!=="ko"?null:t.data;default:return null}}var Th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Th[e.type]:t==="textarea"}function Bd(e,t,n,r){vd(r),t=Wi(t,"onChange"),0<t.length&&(n=new aa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xr=null,_r=null;function Nh(e){qd(e,0)}function xo(e){var t=kn(e);if(cd(t))return e}function zh(e,t){if(e==="change")return t}var Vd=!1;if(ht){var Zo;if(ht){var Jo="oninput"in document;if(!Jo){var bu=document.createElement("div");bu.setAttribute("oninput","return;"),Jo=typeof bu.oninput=="function"}Zo=Jo}else Zo=!1;Vd=Zo&&(!document.documentMode||9<document.documentMode)}function ku(){xr&&(xr.detachEvent("onpropertychange",$d),_r=xr=null)}function $d(e){if(e.propertyName==="value"&&xo(_r)){var t=[];Bd(t,_r,e,na(e)),Sd(Nh,t)}}function Ih(e,t,n){e==="focusin"?(ku(),xr=t,_r=n,xr.attachEvent("onpropertychange",$d)):e==="focusout"&&ku()}function Mh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(_r)}function Lh(e,t){if(e==="click")return xo(t)}function Oh(e,t){if(e==="input"||e==="change")return xo(t)}function _h(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:_h;function jr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ms.call(t,i)||!Ze(e[i],t[i]))return!1}return!0}function Cu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pu(e,t){var n=Cu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cu(n)}}function Hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gd(){for(var e=window,t=Ri();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ri(e.document)}return t}function da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jh(e){var t=Gd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hd(n.ownerDocument.documentElement,n)){if(r!==null&&da(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Pu(n,o);var s=Pu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dh=ht&&"documentMode"in document&&11>=document.documentMode,En=null,qs=null,Sr=null,Zs=!1;function Au(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zs||En==null||En!==Ri(r)||(r=En,"selectionStart"in r&&da(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&jr(Sr,r)||(Sr=r,r=Wi(qs,"onSelect"),0<r.length&&(t=new aa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function fi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bn={animationend:fi("Animation","AnimationEnd"),animationiteration:fi("Animation","AnimationIteration"),animationstart:fi("Animation","AnimationStart"),transitionend:fi("Transition","TransitionEnd")},es={},Ud={};ht&&(Ud=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function So(e){if(es[e])return es[e];if(!bn[e])return e;var t=bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ud)return es[e]=t[n];return e}var Wd=So("animationend"),Yd=So("animationiteration"),Qd=So("animationstart"),Xd=So("transitionend"),Kd=new Map,Tu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){Kd.set(e,t),gn(t,[e])}for(var ts=0;ts<Tu.length;ts++){var ns=Tu[ts],Fh=ns.toLowerCase(),Rh=ns[0].toUpperCase()+ns.slice(1);Wt(Fh,"on"+Rh)}Wt(Wd,"onAnimationEnd");Wt(Yd,"onAnimationIteration");Wt(Qd,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(Xd,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bh=new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));function Nu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fm(r,t,void 0,e),e.currentTarget=null}function qd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Nu(i,l,c),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,c=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Nu(i,l,c),o=a}}}if(Vi)throw e=Ys,Vi=!1,Ys=null,e}function Y(e,t){var n=t[rl];n===void 0&&(n=t[rl]=new Set);var r=e+"__bubble";n.has(r)||(Zd(t,e,2,!1),n.add(r))}function rs(e,t,n){var r=0;t&&(r|=4),Zd(n,e,r,t)}var pi="_reactListening"+Math.random().toString(36).slice(2);function Dr(e){if(!e[pi]){e[pi]=!0,od.forEach(function(n){n!=="selectionchange"&&(Bh.has(n)||rs(n,!1,e),rs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pi]||(t[pi]=!0,rs("selectionchange",!1,t))}}function Zd(e,t,n,r){switch(_d(t)){case 1:var i=eh;break;case 4:i=th;break;default:i=sa}n=i.bind(null,t,n,e),i=void 0,!Ws||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function is(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=en(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Sd(function(){var c=o,f=na(n),p=[];e:{var m=Kd.get(e);if(m!==void 0){var g=aa,v=e;switch(e){case"keypress":if(Ti(n)===0)break e;case"keydown":case"keyup":g=gh;break;case"focusin":v="focus",g=qo;break;case"focusout":v="blur",g=qo;break;case"beforeblur":case"afterblur":g=qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=wh;break;case Wd:case Yd:case Qd:g=lh;break;case Xd:g=Sh;break;case"scroll":g=nh;break;case"wheel":g=bh;break;case"copy":case"cut":case"paste":g=uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=wu}var w=(t&4)!==0,b=!w&&e==="scroll",u=w?m!==null?m+"Capture":null:m;w=[];for(var d=c,h;d!==null;){h=d;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,u!==null&&(x=Ir(d,u),x!=null&&w.push(Fr(d,x,h)))),b)break;d=d.return}0<w.length&&(m=new g(m,v,null,n,f),p.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Gs&&(v=n.relatedTarget||n.fromElement)&&(en(v)||v[gt]))break e;if((g||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?en(v):null,v!==null&&(b=vn(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(w=vu,x="onMouseLeave",u="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=wu,x="onPointerLeave",u="onPointerEnter",d="pointer"),b=g==null?m:kn(g),h=v==null?m:kn(v),m=new w(x,d+"leave",g,n,f),m.target=b,m.relatedTarget=h,x=null,en(f)===c&&(w=new w(u,d+"enter",v,n,f),w.target=h,w.relatedTarget=b,x=w),b=x,g&&v)t:{for(w=g,u=v,d=0,h=w;h;h=yn(h))d++;for(h=0,x=u;x;x=yn(x))h++;for(;0<d-h;)w=yn(w),d--;for(;0<h-d;)u=yn(u),h--;for(;d--;){if(w===u||u!==null&&w===u.alternate)break t;w=yn(w),u=yn(u)}w=null}else w=null;g!==null&&zu(p,m,g,w,!1),v!==null&&b!==null&&zu(p,b,v,w,!0)}}e:{if(m=c?kn(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var k=zh;else if(Eu(m))if(Vd)k=Oh;else{k=Mh;var A=Ih}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Lh);if(k&&(k=k(e,c))){Bd(p,k,n,f);break e}A&&A(e,m,c),e==="focusout"&&(A=m._wrapperState)&&A.controlled&&m.type==="number"&&Rs(m,"number",m.value)}switch(A=c?kn(c):window,e){case"focusin":(Eu(A)||A.contentEditable==="true")&&(En=A,qs=c,Sr=null);break;case"focusout":Sr=qs=En=null;break;case"mousedown":Zs=!0;break;case"contextmenu":case"mouseup":case"dragend":Zs=!1,Au(p,n,f);break;case"selectionchange":if(Dh)break;case"keydown":case"keyup":Au(p,n,f)}var N;if(ca)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Sn?Fd(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Dd&&n.locale!=="ko"&&(Sn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Sn&&(N=jd()):(Nt=f,la="value"in Nt?Nt.value:Nt.textContent,Sn=!0)),A=Wi(c,C),0<A.length&&(C=new yu(C,e,null,n,f),p.push({event:C,listeners:A}),N?C.data=N:(N=Rd(n),N!==null&&(C.data=N)))),(N=Ch?Ph(e,n):Ah(e,n))&&(c=Wi(c,"onBeforeInput"),0<c.length&&(f=new yu("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=N))}qd(p,t)})}function Fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ir(e,n),o!=null&&r.unshift(Fr(e,o,i)),o=Ir(e,t),o!=null&&r.push(Fr(e,o,i))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=Ir(n,o),a!=null&&s.unshift(Fr(n,a,l))):i||(a=Ir(n,o),a!=null&&s.push(Fr(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Vh=/\r\n?/g,$h=/\u0000|\uFFFD/g;function Iu(e){return(typeof e=="string"?e:""+e).replace(Vh,`
`).replace($h,"")}function mi(e,t,n){if(t=Iu(t),Iu(e)!==t&&n)throw Error(I(425))}function Yi(){}var Js=null,el=null;function tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nl=typeof setTimeout=="function"?setTimeout:void 0,Hh=typeof clearTimeout=="function"?clearTimeout:void 0,Mu=typeof Promise=="function"?Promise:void 0,Gh=typeof queueMicrotask=="function"?queueMicrotask:typeof Mu<"u"?function(e){return Mu.resolve(null).then(e).catch(Uh)}:nl;function Uh(e){setTimeout(function(){throw e})}function os(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Or(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),nt="__reactFiber$"+Jn,Rr="__reactProps$"+Jn,gt="__reactContainer$"+Jn,rl="__reactEvents$"+Jn,Wh="__reactListeners$"+Jn,Yh="__reactHandles$"+Jn;function en(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lu(e);e!==null;){if(n=e[nt])return n;e=Lu(e)}return t}e=n,n=e.parentNode}return null}function Zr(e){return e=e[nt]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Eo(e){return e[Rr]||null}var il=[],Cn=-1;function Yt(e){return{current:e}}function X(e){0>Cn||(e.current=il[Cn],il[Cn]=null,Cn--)}function W(e,t){Cn++,il[Cn]=e.current,e.current=t}var $t={},we=Yt($t),Pe=Yt(!1),an=$t;function Hn(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function Qi(){X(Pe),X(we)}function Ou(e,t,n){if(we.current!==$t)throw Error(I(168));W(we,t),W(Pe,n)}function Jd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,Im(e)||"Unknown",i));return ne({},n,r)}function Xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,an=we.current,W(we,e),W(Pe,Pe.current),!0}function _u(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=Jd(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,X(Pe),X(we),W(we,e)):X(Pe),W(Pe,n)}var dt=null,bo=!1,ss=!1;function ef(e){dt===null?dt=[e]:dt.push(e)}function Qh(e){bo=!0,ef(e)}function Qt(){if(!ss&&dt!==null){ss=!0;var e=0,t=U;try{var n=dt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,bo=!1}catch(i){throw dt!==null&&(dt=dt.slice(e+1)),Cd(ra,Qt),i}finally{U=t,ss=!1}}return null}var Pn=[],An=0,Ki=null,qi=0,Be=[],Ve=0,un=null,ft=1,pt="";function qt(e,t){Pn[An++]=qi,Pn[An++]=Ki,Ki=e,qi=t}function tf(e,t,n){Be[Ve++]=ft,Be[Ve++]=pt,Be[Ve++]=un,un=e;var r=ft;e=pt;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var o=32-Ke(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ft=1<<32-Ke(t)+i|n<<i|r,pt=o+e}else ft=1<<o|n<<i|r,pt=e}function fa(e){e.return!==null&&(qt(e,1),tf(e,1,0))}function pa(e){for(;e===Ki;)Ki=Pn[--An],Pn[An]=null,qi=Pn[--An],Pn[An]=null;for(;e===un;)un=Be[--Ve],Be[Ve]=null,pt=Be[--Ve],Be[Ve]=null,ft=Be[--Ve],Be[Ve]=null}var Me=null,Ie=null,q=!1,Xe=null;function nf(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ju(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,Ie=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,Ie=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:ft,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,Ie=null,!0):!1;default:return!1}}function ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sl(e){if(q){var t=Ie;if(t){var n=t;if(!ju(e,t)){if(ol(e))throw Error(I(418));t=jt(n.nextSibling);var r=Me;t&&ju(e,t)?nf(r,n):(e.flags=e.flags&-4097|2,q=!1,Me=e)}}else{if(ol(e))throw Error(I(418));e.flags=e.flags&-4097|2,q=!1,Me=e}}}function Du(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function hi(e){if(e!==Me)return!1;if(!q)return Du(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tl(e.type,e.memoizedProps)),t&&(t=Ie)){if(ol(e))throw rf(),Error(I(418));for(;t;)nf(e,t),t=jt(t.nextSibling)}if(Du(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ie=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ie=null}}else Ie=Me?jt(e.stateNode.nextSibling):null;return!0}function rf(){for(var e=Ie;e;)e=jt(e.nextSibling)}function Gn(){Ie=Me=null,q=!1}function ma(e){Xe===null?Xe=[e]:Xe.push(e)}var Xh=St.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function gi(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fu(e){var t=e._init;return t(e._payload)}function of(e){function t(u,d){if(e){var h=u.deletions;h===null?(u.deletions=[d],u.flags|=16):h.push(d)}}function n(u,d){if(!e)return null;for(;d!==null;)t(u,d),d=d.sibling;return null}function r(u,d){for(u=new Map;d!==null;)d.key!==null?u.set(d.key,d):u.set(d.index,d),d=d.sibling;return u}function i(u,d){return u=Bt(u,d),u.index=0,u.sibling=null,u}function o(u,d,h){return u.index=h,e?(h=u.alternate,h!==null?(h=h.index,h<d?(u.flags|=2,d):h):(u.flags|=2,d)):(u.flags|=1048576,d)}function s(u){return e&&u.alternate===null&&(u.flags|=2),u}function l(u,d,h,x){return d===null||d.tag!==6?(d=ps(h,u.mode,x),d.return=u,d):(d=i(d,h),d.return=u,d)}function a(u,d,h,x){var k=h.type;return k===xn?f(u,d,h.props.children,x,h.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ct&&Fu(k)===d.type)?(x=i(d,h.props),x.ref=lr(u,d,h),x.return=u,x):(x=_i(h.type,h.key,h.props,null,u.mode,x),x.ref=lr(u,d,h),x.return=u,x)}function c(u,d,h,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=ms(h,u.mode,x),d.return=u,d):(d=i(d,h.children||[]),d.return=u,d)}function f(u,d,h,x,k){return d===null||d.tag!==7?(d=on(h,u.mode,x,k),d.return=u,d):(d=i(d,h),d.return=u,d)}function p(u,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ps(""+d,u.mode,h),d.return=u,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case oi:return h=_i(d.type,d.key,d.props,null,u.mode,h),h.ref=lr(u,null,d),h.return=u,h;case wn:return d=ms(d,u.mode,h),d.return=u,d;case Ct:var x=d._init;return p(u,x(d._payload),h)}if(fr(d)||nr(d))return d=on(d,u.mode,h,null),d.return=u,d;gi(u,d)}return null}function m(u,d,h,x){var k=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:l(u,d,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case oi:return h.key===k?a(u,d,h,x):null;case wn:return h.key===k?c(u,d,h,x):null;case Ct:return k=h._init,m(u,d,k(h._payload),x)}if(fr(h)||nr(h))return k!==null?null:f(u,d,h,x,null);gi(u,h)}return null}function g(u,d,h,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(h)||null,l(d,u,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case oi:return u=u.get(x.key===null?h:x.key)||null,a(d,u,x,k);case wn:return u=u.get(x.key===null?h:x.key)||null,c(d,u,x,k);case Ct:var A=x._init;return g(u,d,h,A(x._payload),k)}if(fr(x)||nr(x))return u=u.get(h)||null,f(d,u,x,k,null);gi(d,x)}return null}function v(u,d,h,x){for(var k=null,A=null,N=d,C=d=0,M=null;N!==null&&C<h.length;C++){N.index>C?(M=N,N=null):M=N.sibling;var S=m(u,N,h[C],x);if(S===null){N===null&&(N=M);break}e&&N&&S.alternate===null&&t(u,N),d=o(S,d,C),A===null?k=S:A.sibling=S,A=S,N=M}if(C===h.length)return n(u,N),q&&qt(u,C),k;if(N===null){for(;C<h.length;C++)N=p(u,h[C],x),N!==null&&(d=o(N,d,C),A===null?k=N:A.sibling=N,A=N);return q&&qt(u,C),k}for(N=r(u,N);C<h.length;C++)M=g(N,u,C,h[C],x),M!==null&&(e&&M.alternate!==null&&N.delete(M.key===null?C:M.key),d=o(M,d,C),A===null?k=M:A.sibling=M,A=M);return e&&N.forEach(function(E){return t(u,E)}),q&&qt(u,C),k}function w(u,d,h,x){var k=nr(h);if(typeof k!="function")throw Error(I(150));if(h=k.call(h),h==null)throw Error(I(151));for(var A=k=null,N=d,C=d=0,M=null,S=h.next();N!==null&&!S.done;C++,S=h.next()){N.index>C?(M=N,N=null):M=N.sibling;var E=m(u,N,S.value,x);if(E===null){N===null&&(N=M);break}e&&N&&E.alternate===null&&t(u,N),d=o(E,d,C),A===null?k=E:A.sibling=E,A=E,N=M}if(S.done)return n(u,N),q&&qt(u,C),k;if(N===null){for(;!S.done;C++,S=h.next())S=p(u,S.value,x),S!==null&&(d=o(S,d,C),A===null?k=S:A.sibling=S,A=S);return q&&qt(u,C),k}for(N=r(u,N);!S.done;C++,S=h.next())S=g(N,u,C,S.value,x),S!==null&&(e&&S.alternate!==null&&N.delete(S.key===null?C:S.key),d=o(S,d,C),A===null?k=S:A.sibling=S,A=S);return e&&N.forEach(function(P){return t(u,P)}),q&&qt(u,C),k}function b(u,d,h,x){if(typeof h=="object"&&h!==null&&h.type===xn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case oi:e:{for(var k=h.key,A=d;A!==null;){if(A.key===k){if(k=h.type,k===xn){if(A.tag===7){n(u,A.sibling),d=i(A,h.props.children),d.return=u,u=d;break e}}else if(A.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Ct&&Fu(k)===A.type){n(u,A.sibling),d=i(A,h.props),d.ref=lr(u,A,h),d.return=u,u=d;break e}n(u,A);break}else t(u,A);A=A.sibling}h.type===xn?(d=on(h.props.children,u.mode,x,h.key),d.return=u,u=d):(x=_i(h.type,h.key,h.props,null,u.mode,x),x.ref=lr(u,d,h),x.return=u,u=x)}return s(u);case wn:e:{for(A=h.key;d!==null;){if(d.key===A)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(u,d.sibling),d=i(d,h.children||[]),d.return=u,u=d;break e}else{n(u,d);break}else t(u,d);d=d.sibling}d=ms(h,u.mode,x),d.return=u,u=d}return s(u);case Ct:return A=h._init,b(u,d,A(h._payload),x)}if(fr(h))return v(u,d,h,x);if(nr(h))return w(u,d,h,x);gi(u,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(u,d.sibling),d=i(d,h),d.return=u,u=d):(n(u,d),d=ps(h,u.mode,x),d.return=u,u=d),s(u)):n(u,d)}return b}var Un=of(!0),sf=of(!1),Zi=Yt(null),Ji=null,Tn=null,ha=null;function ga(){ha=Tn=Ji=null}function va(e){var t=Zi.current;X(Zi),e._currentValue=t}function ll(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){Ji=e,ha=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(ha!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(Ji===null)throw Error(I(308));Tn=e,Ji.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var tn=null;function ya(e){tn===null?tn=[e]:tn.push(e)}function lf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ya(t)):(n.next=i.next,i.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function af(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,vt(e,n)}return i=r.interleaved,i===null?(t.next=t,ya(r)):(t.next=i.next,i.next=t),r.interleaved=t,vt(e,n)}function Ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ia(e,n)}}function Ru(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;Pt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,s===null?o=c:s.next=c,s=a;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=a))}if(o!==null){var p=i.baseState;s=0,f=c=a=null,l=o;do{var m=l.lane,g=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,w=l;switch(m=t,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){p=v.call(g,p,m);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,m=typeof v=="function"?v.call(g,p,m):v,m==null)break e;p=ne({},p,m);break e;case 2:Pt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else g={eventTime:g,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=g,a=p):f=f.next=g,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(a=p),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);dn|=s,e.lanes=s,e.memoizedState=p}}function Bu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Jr={},lt=Yt(Jr),Br=Yt(Jr),Vr=Yt(Jr);function nn(e){if(e===Jr)throw Error(I(174));return e}function xa(e,t){switch(W(Vr,t),W(Br,e),W(lt,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vs(t,e)}X(lt),W(lt,t)}function Wn(){X(lt),X(Br),X(Vr)}function uf(e){nn(Vr.current);var t=nn(lt.current),n=Vs(t,e.type);t!==n&&(W(Br,e),W(lt,n))}function Sa(e){Br.current===e&&(X(lt),X(Br))}var ee=Yt(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ls=[];function Ea(){for(var e=0;e<ls.length;e++)ls[e]._workInProgressVersionPrimary=null;ls.length=0}var zi=St.ReactCurrentDispatcher,as=St.ReactCurrentBatchConfig,cn=0,te=null,ae=null,de=null,no=!1,Er=!1,$r=0,Kh=0;function ge(){throw Error(I(321))}function ba(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function ka(e,t,n,r,i,o){if(cn=o,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zi.current=e===null||e.memoizedState===null?eg:tg,e=n(r,i),Er){o=0;do{if(Er=!1,$r=0,25<=o)throw Error(I(301));o+=1,de=ae=null,t.updateQueue=null,zi.current=ng,e=n(r,i)}while(Er)}if(zi.current=ro,t=ae!==null&&ae.next!==null,cn=0,de=ae=te=null,no=!1,t)throw Error(I(300));return e}function Ca(){var e=$r!==0;return $r=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?te.memoizedState=de=e:de=de.next=e,de}function Ue(){if(ae===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=de===null?te.memoizedState:de.next;if(t!==null)de=t,ae=e;else{if(e===null)throw Error(I(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},de===null?te.memoizedState=de=e:de=de.next=e}return de}function Hr(e,t){return typeof t=="function"?t(e):t}function us(e){var t=Ue(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,c=o;do{var f=c.lane;if((cn&f)===f)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=p,s=r):a=a.next=p,te.lanes|=f,dn|=f}c=c.next}while(c!==null&&c!==o);a===null?s=r:a.next=l,Ze(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,te.lanes|=o,dn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cs(e){var t=Ue(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ze(o,t.memoizedState)||(Ce=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function cf(){}function df(e,t){var n=te,r=Ue(),i=t(),o=!Ze(r.memoizedState,i);if(o&&(r.memoizedState=i,Ce=!0),r=r.queue,Pa(mf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Gr(9,pf.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(I(349));cn&30||ff(n,t,i)}return i}function ff(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pf(e,t,n,r){t.value=n,t.getSnapshot=r,hf(t)&&gf(e)}function mf(e,t,n){return n(function(){hf(t)&&gf(e)})}function hf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function gf(e){var t=vt(e,1);t!==null&&qe(t,e,1,-1)}function Vu(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},t.queue=e,e=e.dispatch=Jh.bind(null,te,e),[t.memoizedState,e]}function Gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vf(){return Ue().memoizedState}function Ii(e,t,n,r){var i=et();te.flags|=e,i.memoizedState=Gr(1|t,n,void 0,r===void 0?null:r)}function ko(e,t,n,r){var i=Ue();r=r===void 0?null:r;var o=void 0;if(ae!==null){var s=ae.memoizedState;if(o=s.destroy,r!==null&&ba(r,s.deps)){i.memoizedState=Gr(t,n,o,r);return}}te.flags|=e,i.memoizedState=Gr(1|t,n,o,r)}function $u(e,t){return Ii(8390656,8,e,t)}function Pa(e,t){return ko(2048,8,e,t)}function yf(e,t){return ko(4,2,e,t)}function wf(e,t){return ko(4,4,e,t)}function xf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sf(e,t,n){return n=n!=null?n.concat([e]):null,ko(4,4,xf.bind(null,t,e),n)}function Aa(){}function Ef(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ba(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bf(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ba(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kf(e,t,n){return cn&21?(Ze(n,t)||(n=Td(),te.lanes|=n,dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function qh(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=as.transition;as.transition={};try{e(!1),t()}finally{U=n,as.transition=r}}function Cf(){return Ue().memoizedState}function Zh(e,t,n){var r=Rt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pf(e))Af(t,n);else if(n=lf(e,t,n,r),n!==null){var i=Se();qe(n,e,r,i),Tf(n,t,r)}}function Jh(e,t,n){var r=Rt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pf(e))Af(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Ze(l,s)){var a=t.interleaved;a===null?(i.next=i,ya(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=lf(e,t,i,r),n!==null&&(i=Se(),qe(n,e,r,i),Tf(n,t,r))}}function Pf(e){var t=e.alternate;return e===te||t!==null&&t===te}function Af(e,t){Er=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ia(e,n)}}var ro={readContext:Ge,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},eg={readContext:Ge,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:$u,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ii(4194308,4,xf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ii(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ii(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zh.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:Vu,useDebugValue:Aa,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=Vu(!1),t=e[0];return e=qh.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,i=et();if(q){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),fe===null)throw Error(I(349));cn&30||ff(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,$u(mf.bind(null,r,o,e),[e]),r.flags|=2048,Gr(9,pf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=et(),t=fe.identifierPrefix;if(q){var n=pt,r=ft;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tg={readContext:Ge,useCallback:Ef,useContext:Ge,useEffect:Pa,useImperativeHandle:Sf,useInsertionEffect:yf,useLayoutEffect:wf,useMemo:bf,useReducer:us,useRef:vf,useState:function(){return us(Hr)},useDebugValue:Aa,useDeferredValue:function(e){var t=Ue();return kf(t,ae.memoizedState,e)},useTransition:function(){var e=us(Hr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:cf,useSyncExternalStore:df,useId:Cf,unstable_isNewReconciler:!1},ng={readContext:Ge,useCallback:Ef,useContext:Ge,useEffect:Pa,useImperativeHandle:Sf,useInsertionEffect:yf,useLayoutEffect:wf,useMemo:bf,useReducer:cs,useRef:vf,useState:function(){return cs(Hr)},useDebugValue:Aa,useDeferredValue:function(e){var t=Ue();return ae===null?t.memoizedState=e:kf(t,ae.memoizedState,e)},useTransition:function(){var e=cs(Hr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:cf,useSyncExternalStore:df,useId:Cf,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function al(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Co={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Rt(e),o=mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Dt(e,o,i),t!==null&&(qe(t,e,i,r),Ni(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Rt(e),o=mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Dt(e,o,i),t!==null&&(qe(t,e,i,r),Ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Rt(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Dt(e,i,r),t!==null&&(qe(t,e,r,n),Ni(t,e,r))}};function Hu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,o):!0}function Nf(e,t,n){var r=!1,i=$t,o=t.contextType;return typeof o=="object"&&o!==null?o=Ge(o):(i=Ae(t)?an:we.current,r=t.contextTypes,o=(r=r!=null)?Hn(e,i):$t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Gu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function ul(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},wa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ge(o):(o=Ae(t)?an:we.current,i.context=Hn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(al(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Co.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yn(e,t){try{var n="",r=t;do n+=zm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ds(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rg=typeof WeakMap=="function"?WeakMap:Map;function zf(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,xl=r),cl(e,t)},n}function If(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){cl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){cl(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=vg.bind(null,e,t,n),t.then(e,e))}function Wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var ig=St.ReactCurrentOwner,Ce=!1;function xe(e,t,n,r){t.child=e===null?sf(t,null,n,r):Un(t,e.child,n,r)}function Qu(e,t,n,r,i){n=n.render;var o=t.ref;return Dn(t,i),r=ka(e,t,n,r,o,i),n=Ca(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(q&&n&&fa(t),t.flags|=1,xe(e,t,r,i),t.child)}function Xu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!_a(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Mf(e,t,o,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:jr,n(s,r)&&e.ref===t.ref)return yt(e,t,i)}return t.flags|=1,e=Bt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Mf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(jr(o,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,yt(e,t,i)}return dl(e,t,n,r,i)}function Lf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(zn,Ne),Ne|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(zn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(zn,Ne),Ne|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(zn,Ne),Ne|=r;return xe(e,t,i,n),t.child}function Of(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function dl(e,t,n,r,i){var o=Ae(n)?an:we.current;return o=Hn(t,o),Dn(t,i),n=ka(e,t,n,r,o,i),r=Ca(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(q&&r&&fa(t),t.flags|=1,xe(e,t,n,i),t.child)}function Ku(e,t,n,r,i){if(Ae(n)){var o=!0;Xi(t)}else o=!1;if(Dn(t,i),t.stateNode===null)Mi(e,t),Nf(t,n,r),ul(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ge(c):(c=Ae(n)?an:we.current,c=Hn(t,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==c)&&Gu(t,s,r,c),Pt=!1;var m=t.memoizedState;s.state=m,eo(t,r,s,i),a=t.memoizedState,l!==r||m!==a||Pe.current||Pt?(typeof f=="function"&&(al(t,n,f,r),a=t.memoizedState),(l=Pt||Hu(t,n,l,r,m,a,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,af(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ye(t.type,l),s.props=c,p=t.pendingProps,m=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ge(a):(a=Ae(n)?an:we.current,a=Hn(t,a));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||m!==a)&&Gu(t,s,r,a),Pt=!1,m=t.memoizedState,s.state=m,eo(t,r,s,i);var v=t.memoizedState;l!==p||m!==v||Pe.current||Pt?(typeof g=="function"&&(al(t,n,g,r),v=t.memoizedState),(c=Pt||Hu(t,n,c,r,m,v,a)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=a,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return fl(e,t,n,r,o,i)}function fl(e,t,n,r,i,o){Of(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&_u(t,n,!1),yt(e,t,o);r=t.stateNode,ig.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Un(t,e.child,null,o),t.child=Un(t,null,l,o)):xe(e,t,l,o),t.memoizedState=r.state,i&&_u(t,n,!0),t.child}function _f(e){var t=e.stateNode;t.pendingContext?Ou(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ou(e,t.context,!1),xa(e,t.containerInfo)}function qu(e,t,n,r,i){return Gn(),ma(i),t.flags|=256,xe(e,t,n,r),t.child}var pl={dehydrated:null,treeContext:null,retryLane:0};function ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function jf(e,t,n){var r=t.pendingProps,i=ee.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(ee,i&1),e===null)return sl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=To(s,r,0,null),e=on(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ml(n),t.memoizedState=pl,e):Ta(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return og(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Bt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Bt(l,o):(o=on(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ml(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=pl,r}return o=e.child,e=o.sibling,r=Bt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ta(e,t){return t=To({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vi(e,t,n,r){return r!==null&&ma(r),Un(t,e.child,null,n),e=Ta(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function og(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ds(Error(I(422))),vi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=To({mode:"visible",children:r.children},i,0,null),o=on(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Un(t,e.child,null,s),t.child.memoizedState=ml(s),t.memoizedState=pl,o);if(!(t.mode&1))return vi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(I(419)),r=ds(o,r,void 0),vi(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ce||l){if(r=fe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,vt(e,i),qe(r,e,i,-1))}return Oa(),r=ds(Error(I(421))),vi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=yg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ie=jt(i.nextSibling),Me=t,q=!0,Xe=null,e!==null&&(Be[Ve++]=ft,Be[Ve++]=pt,Be[Ve++]=un,ft=e.id,pt=e.overflow,un=t),t=Ta(t,r.children),t.flags|=4096,t)}function Zu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ll(e.return,t,n)}function fs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Df(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(xe(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zu(e,n,t);else if(e.tag===19)Zu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fs(t,!0,n,null,o);break;case"together":fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sg(e,t,n){switch(t.tag){case 3:_f(t),Gn();break;case 5:uf(t);break;case 1:Ae(t.type)&&Xi(t);break;case 4:xa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(Zi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?jf(e,t,n):(W(ee,ee.current&1),e=yt(e,t,n),e!==null?e.sibling:null);W(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Df(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Lf(e,t,n)}return yt(e,t,n)}var Ff,hl,Rf,Bf;Ff=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hl=function(){};Rf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,nn(lt.current);var o=null;switch(n){case"input":i=Ds(e,i),r=Ds(e,r),o=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),o=[];break;case"textarea":i=Bs(e,i),r=Bs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yi)}$s(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Nr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Nr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&Y("scroll",e),o||l===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Bf=function(e,t,n,r){n!==r&&(t.flags|=4)};function ar(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lg(e,t,n){var r=t.pendingProps;switch(pa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Ae(t.type)&&Qi(),ve(t),null;case 3:return r=t.stateNode,Wn(),X(Pe),X(we),Ea(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(bl(Xe),Xe=null))),hl(e,t),ve(t),null;case 5:Sa(t);var i=nn(Vr.current);if(n=t.type,e!==null&&t.stateNode!=null)Rf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return ve(t),null}if(e=nn(lt.current),hi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[nt]=t,r[Rr]=o,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(i=0;i<mr.length;i++)Y(mr[i],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":lu(r,o),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Y("invalid",r);break;case"textarea":uu(r,o),Y("invalid",r)}$s(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,l,e),i=["children",""+l]):Nr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Y("scroll",r)}switch(n){case"input":si(r),au(r,o,!0);break;case"textarea":si(r),cu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Yi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[nt]=t,e[Rr]=r,Ff(e,t,!1,!1),t.stateNode=e;e:{switch(s=Hs(n,r),n){case"dialog":Y("cancel",e),Y("close",e),i=r;break;case"iframe":case"object":case"embed":Y("load",e),i=r;break;case"video":case"audio":for(i=0;i<mr.length;i++)Y(mr[i],e);i=r;break;case"source":Y("error",e),i=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),i=r;break;case"details":Y("toggle",e),i=r;break;case"input":lu(e,r),i=Ds(e,r),Y("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),Y("invalid",e);break;case"textarea":uu(e,r),i=Bs(e,r),Y("invalid",e);break;default:i=r}$s(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?gd(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&md(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&zr(e,a):typeof a=="number"&&zr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Nr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&Y("scroll",e):a!=null&&Zl(e,o,a,s))}switch(n){case"input":si(e),au(e,r,!1);break;case"textarea":si(e),cu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Bf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=nn(Vr.current),nn(lt.current),hi(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(o=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return ve(t),null;case 13:if(X(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&Ie!==null&&t.mode&1&&!(t.flags&128))rf(),Gn(),t.flags|=98560,o=!1;else if(o=hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[nt]=t}else Gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),o=!1}else Xe!==null&&(bl(Xe),Xe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ue===0&&(ue=3):Oa())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Wn(),hl(e,t),e===null&&Dr(t.stateNode.containerInfo),ve(t),null;case 10:return va(t.type._context),ve(t),null;case 17:return Ae(t.type)&&Qi(),ve(t),null;case 19:if(X(ee),o=t.memoizedState,o===null)return ve(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ar(o,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=to(e),s!==null){for(t.flags|=128,ar(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(ee,ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&oe()>Qn&&(t.flags|=128,r=!0,ar(o,!1),t.lanes=4194304)}else{if(!r)if(e=to(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ar(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!q)return ve(t),null}else 2*oe()-o.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,ar(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=oe(),t.sibling=null,n=ee.current,W(ee,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return La(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function ag(e,t){switch(pa(t),t.tag){case 1:return Ae(t.type)&&Qi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),X(Pe),X(we),Ea(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Sa(t),null;case 13:if(X(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(ee),null;case 4:return Wn(),null;case 10:return va(t.type._context),null;case 22:case 23:return La(),null;case 24:return null;default:return null}}var yi=!1,ye=!1,ug=typeof WeakSet=="function"?WeakSet:Set,O=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function gl(e,t,n){try{n()}catch(r){re(e,t,r)}}var Ju=!1;function cg(e,t){if(Js=Gi,e=Gd(),da(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,c=0,f=0,p=e,m=null;t:for(;;){for(var g;p!==n||i!==0&&p.nodeType!==3||(l=s+i),p!==o||r!==0&&p.nodeType!==3||(a=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)m=p,p=g;for(;;){if(p===e)break t;if(m===n&&++c===i&&(l=s),m===o&&++f===r&&(a=s),(g=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(el={focusedElem:e,selectionRange:n},Gi=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,b=v.memoizedState,u=t.stateNode,d=u.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ye(t.type,w),b);u.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(x){re(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return v=Ju,Ju=!1,v}function br(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&gl(t,n,o)}i=i.next}while(i!==r)}}function Po(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vf(e){var t=e.alternate;t!==null&&(e.alternate=null,Vf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[Rr],delete t[rl],delete t[Wh],delete t[Yh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $f(e){return e.tag===5||e.tag===3||e.tag===4}function ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yi));else if(r!==4&&(e=e.child,e!==null))for(yl(e,t,n),e=e.sibling;e!==null;)yl(e,t,n),e=e.sibling}function wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wl(e,t,n),e=e.sibling;e!==null;)wl(e,t,n),e=e.sibling}var pe=null,Qe=!1;function bt(e,t,n){for(n=n.child;n!==null;)Hf(e,t,n),n=n.sibling}function Hf(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(yo,n)}catch{}switch(n.tag){case 5:ye||Nn(n,t);case 6:var r=pe,i=Qe;pe=null,bt(e,t,n),pe=r,Qe=i,pe!==null&&(Qe?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(Qe?(e=pe,n=n.stateNode,e.nodeType===8?os(e.parentNode,n):e.nodeType===1&&os(e,n),Or(e)):os(pe,n.stateNode));break;case 4:r=pe,i=Qe,pe=n.stateNode.containerInfo,Qe=!0,bt(e,t,n),pe=r,Qe=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&gl(n,t,s),i=i.next}while(i!==r)}bt(e,t,n);break;case 1:if(!ye&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){re(n,t,l)}bt(e,t,n);break;case 21:bt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,bt(e,t,n),ye=r):bt(e,t,n);break;default:bt(e,t,n)}}function tc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ug),t.forEach(function(r){var i=wg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:pe=l.stateNode,Qe=!1;break e;case 3:pe=l.stateNode.containerInfo,Qe=!0;break e;case 4:pe=l.stateNode.containerInfo,Qe=!0;break e}l=l.return}if(pe===null)throw Error(I(160));Hf(o,s,i),pe=null,Qe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){re(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gf(t,e),t=t.sibling}function Gf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),Je(e),r&4){try{br(3,e,e.return),Po(3,e)}catch(w){re(e,e.return,w)}try{br(5,e,e.return)}catch(w){re(e,e.return,w)}}break;case 1:We(t,e),Je(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(We(t,e),Je(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var i=e.stateNode;try{zr(i,"")}catch(w){re(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&dd(i,o),Hs(l,s);var c=Hs(l,o);for(s=0;s<a.length;s+=2){var f=a[s],p=a[s+1];f==="style"?gd(i,p):f==="dangerouslySetInnerHTML"?md(i,p):f==="children"?zr(i,p):Zl(i,f,p,c)}switch(l){case"input":Fs(i,o);break;case"textarea":fd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Ln(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?Ln(i,!!o.multiple,o.defaultValue,!0):Ln(i,!!o.multiple,o.multiple?[]:"",!1))}i[Rr]=o}catch(w){re(e,e.return,w)}}break;case 6:if(We(t,e),Je(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){re(e,e.return,w)}}break;case 3:if(We(t,e),Je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(w){re(e,e.return,w)}break;case 4:We(t,e),Je(e);break;case 13:We(t,e),Je(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ia=oe())),r&4&&tc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(c=ye)||f,We(t,e),ye=c):We(t,e),Je(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(O=e,f=e.child;f!==null;){for(p=O=f;O!==null;){switch(m=O,g=m.child,m.tag){case 0:case 11:case 14:case 15:br(4,m,m.return);break;case 1:Nn(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){re(r,n,w)}}break;case 5:Nn(m,m.return);break;case 22:if(m.memoizedState!==null){rc(p);continue}}g!==null?(g.return=m,O=g):rc(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,a=p.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=hd("display",s))}catch(w){re(e,e.return,w)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){re(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:We(t,e),Je(e),r&4&&tc(e);break;case 21:break;default:We(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($f(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zr(i,""),r.flags&=-33);var o=ec(e);wl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=ec(e);yl(e,l,s);break;default:throw Error(I(161))}}catch(a){re(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dg(e,t,n){O=e,Uf(e)}function Uf(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||yi;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ye;l=yi;var c=ye;if(yi=s,(ye=a)&&!c)for(O=i;O!==null;)s=O,a=s.child,s.tag===22&&s.memoizedState!==null?ic(i):a!==null?(a.return=s,O=a):ic(i);for(;o!==null;)O=o,Uf(o),o=o.sibling;O=i,yi=l,ye=c}nc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):nc(e)}}function nc(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Po(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Bu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bu(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Or(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}ye||t.flags&512&&vl(t)}catch(m){re(t,t.return,m)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function rc(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function ic(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Po(4,t)}catch(a){re(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){re(t,i,a)}}var o=t.return;try{vl(t)}catch(a){re(t,o,a)}break;case 5:var s=t.return;try{vl(t)}catch(a){re(t,s,a)}}}catch(a){re(t,t.return,a)}if(t===e){O=null;break}var l=t.sibling;if(l!==null){l.return=t.return,O=l;break}O=t.return}}var fg=Math.ceil,io=St.ReactCurrentDispatcher,Na=St.ReactCurrentOwner,He=St.ReactCurrentBatchConfig,G=0,fe=null,le=null,me=0,Ne=0,zn=Yt(0),ue=0,Ur=null,dn=0,Ao=0,za=0,kr=null,ke=null,Ia=0,Qn=1/0,ct=null,oo=!1,xl=null,Ft=null,wi=!1,zt=null,so=0,Cr=0,Sl=null,Li=-1,Oi=0;function Se(){return G&6?oe():Li!==-1?Li:Li=oe()}function Rt(e){return e.mode&1?G&2&&me!==0?me&-me:Xh.transition!==null?(Oi===0&&(Oi=Td()),Oi):(e=U,e!==0||(e=window.event,e=e===void 0?16:_d(e.type)),e):1}function qe(e,t,n,r){if(50<Cr)throw Cr=0,Sl=null,Error(I(185));Kr(e,n,r),(!(G&2)||e!==fe)&&(e===fe&&(!(G&2)&&(Ao|=n),ue===4&&Tt(e,me)),Te(e,r),n===1&&G===0&&!(t.mode&1)&&(Qn=oe()+500,bo&&Qt()))}function Te(e,t){var n=e.callbackNode;Xm(e,t);var r=Hi(e,e===fe?me:0);if(r===0)n!==null&&pu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pu(n),t===1)e.tag===0?Qh(oc.bind(null,e)):ef(oc.bind(null,e)),Gh(function(){!(G&6)&&Qt()}),n=null;else{switch(Nd(r)){case 1:n=ra;break;case 4:n=Pd;break;case 16:n=$i;break;case 536870912:n=Ad;break;default:n=$i}n=Jf(n,Wf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wf(e,t){if(Li=-1,Oi=0,G&6)throw Error(I(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=Hi(e,e===fe?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=lo(e,r);else{t=r;var i=G;G|=2;var o=Qf();(fe!==e||me!==t)&&(ct=null,Qn=oe()+500,rn(e,t));do try{hg();break}catch(l){Yf(e,l)}while(!0);ga(),io.current=o,G=i,le!==null?t=0:(fe=null,me=0,t=ue)}if(t!==0){if(t===2&&(i=Qs(e),i!==0&&(r=i,t=El(e,i))),t===1)throw n=Ur,rn(e,0),Tt(e,r),Te(e,oe()),n;if(t===6)Tt(e,r);else{if(i=e.current.alternate,!(r&30)&&!pg(i)&&(t=lo(e,r),t===2&&(o=Qs(e),o!==0&&(r=o,t=El(e,o))),t===1))throw n=Ur,rn(e,0),Tt(e,r),Te(e,oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Zt(e,ke,ct);break;case 3:if(Tt(e,r),(r&130023424)===r&&(t=Ia+500-oe(),10<t)){if(Hi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=nl(Zt.bind(null,e,ke,ct),t);break}Zt(e,ke,ct);break;case 4:if(Tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ke(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fg(r/1960))-r,10<r){e.timeoutHandle=nl(Zt.bind(null,e,ke,ct),r);break}Zt(e,ke,ct);break;case 5:Zt(e,ke,ct);break;default:throw Error(I(329))}}}return Te(e,oe()),e.callbackNode===n?Wf.bind(null,e):null}function El(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=lo(e,t),e!==2&&(t=ke,ke=n,t!==null&&bl(t)),e}function bl(e){ke===null?ke=e:ke.push.apply(ke,e)}function pg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ze(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tt(e,t){for(t&=~za,t&=~Ao,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function oc(e){if(G&6)throw Error(I(327));Fn();var t=Hi(e,0);if(!(t&1))return Te(e,oe()),null;var n=lo(e,t);if(e.tag!==0&&n===2){var r=Qs(e);r!==0&&(t=r,n=El(e,r))}if(n===1)throw n=Ur,rn(e,0),Tt(e,t),Te(e,oe()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zt(e,ke,ct),Te(e,oe()),null}function Ma(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Qn=oe()+500,bo&&Qt())}}function fn(e){zt!==null&&zt.tag===0&&!(G&6)&&Fn();var t=G;G|=1;var n=He.transition,r=U;try{if(He.transition=null,U=1,e)return e()}finally{U=r,He.transition=n,G=t,!(G&6)&&Qt()}}function La(){Ne=zn.current,X(zn)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hh(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(pa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qi();break;case 3:Wn(),X(Pe),X(we),Ea();break;case 5:Sa(r);break;case 4:Wn();break;case 13:X(ee);break;case 19:X(ee);break;case 10:va(r.type._context);break;case 22:case 23:La()}n=n.return}if(fe=e,le=e=Bt(e.current,null),me=Ne=t,ue=0,Ur=null,za=Ao=dn=0,ke=kr=null,tn!==null){for(t=0;t<tn.length;t++)if(n=tn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}tn=null}return e}function Yf(e,t){do{var n=le;try{if(ga(),zi.current=ro,no){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(cn=0,de=ae=te=null,Er=!1,$r=0,Na.current=null,n===null||n.return===null){ue=1,Ur=t,le=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=me,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Wu(s);if(g!==null){g.flags&=-257,Yu(g,s,l,o,t),g.mode&1&&Uu(o,c,t),t=g,a=c;var v=t.updateQueue;if(v===null){var w=new Set;w.add(a),t.updateQueue=w}else v.add(a);break e}else{if(!(t&1)){Uu(o,c,t),Oa();break e}a=Error(I(426))}}else if(q&&l.mode&1){var b=Wu(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Yu(b,s,l,o,t),ma(Yn(a,l));break e}}o=a=Yn(a,l),ue!==4&&(ue=2),kr===null?kr=[o]:kr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var u=zf(o,a,t);Ru(o,u);break e;case 1:l=a;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ft===null||!Ft.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=If(o,l,t);Ru(o,x);break e}}o=o.return}while(o!==null)}Kf(n)}catch(k){t=k,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function Qf(){var e=io.current;return io.current=ro,e===null?ro:e}function Oa(){(ue===0||ue===3||ue===2)&&(ue=4),fe===null||!(dn&268435455)&&!(Ao&268435455)||Tt(fe,me)}function lo(e,t){var n=G;G|=2;var r=Qf();(fe!==e||me!==t)&&(ct=null,rn(e,t));do try{mg();break}catch(i){Yf(e,i)}while(!0);if(ga(),G=n,io.current=r,le!==null)throw Error(I(261));return fe=null,me=0,ue}function mg(){for(;le!==null;)Xf(le)}function hg(){for(;le!==null&&!Bm();)Xf(le)}function Xf(e){var t=Zf(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Kf(e):le=t,Na.current=null}function Kf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ag(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,le=null;return}}else if(n=lg(n,t,Ne),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ue===0&&(ue=5)}function Zt(e,t,n){var r=U,i=He.transition;try{He.transition=null,U=1,gg(e,t,n,r)}finally{He.transition=i,U=r}return null}function gg(e,t,n,r){do Fn();while(zt!==null);if(G&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Km(e,o),e===fe&&(le=fe=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wi||(wi=!0,Jf($i,function(){return Fn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=He.transition,He.transition=null;var s=U;U=1;var l=G;G|=4,Na.current=null,cg(e,n),Gf(n,e),jh(el),Gi=!!Js,el=Js=null,e.current=n,dg(n),Vm(),G=l,U=s,He.transition=o}else e.current=n;if(wi&&(wi=!1,zt=e,so=i),o=e.pendingLanes,o===0&&(Ft=null),Gm(n.stateNode),Te(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=xl,xl=null,e;return so&1&&e.tag!==0&&Fn(),o=e.pendingLanes,o&1?e===Sl?Cr++:(Cr=0,Sl=e):Cr=0,Qt(),null}function Fn(){if(zt!==null){var e=Nd(so),t=He.transition,n=U;try{if(He.transition=null,U=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,so=0,G&6)throw Error(I(331));var i=G;for(G|=4,O=e.current;O!==null;){var o=O,s=o.child;if(O.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(O=c;O!==null;){var f=O;switch(f.tag){case 0:case 11:case 15:br(8,f,o)}var p=f.child;if(p!==null)p.return=f,O=p;else for(;O!==null;){f=O;var m=f.sibling,g=f.return;if(Vf(f),f===c){O=null;break}if(m!==null){m.return=g,O=m;break}O=g}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}O=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,O=s;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:br(9,o,o.return)}var u=o.sibling;if(u!==null){u.return=o.return,O=u;break e}O=o.return}}var d=e.current;for(O=d;O!==null;){s=O;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,O=h;else e:for(s=d;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Po(9,l)}}catch(k){re(l,l.return,k)}if(l===s){O=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,O=x;break e}O=l.return}}if(G=i,Qt(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(yo,e)}catch{}r=!0}return r}finally{U=n,He.transition=t}}return!1}function sc(e,t,n){t=Yn(n,t),t=zf(e,t,1),e=Dt(e,t,1),t=Se(),e!==null&&(Kr(e,1,t),Te(e,t))}function re(e,t,n){if(e.tag===3)sc(e,e,n);else for(;t!==null;){if(t.tag===3){sc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=Yn(n,e),e=If(t,e,1),t=Dt(t,e,1),e=Se(),t!==null&&(Kr(t,1,e),Te(t,e));break}}t=t.return}}function vg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(me&n)===n&&(ue===4||ue===3&&(me&130023424)===me&&500>oe()-Ia?rn(e,0):za|=n),Te(e,t)}function qf(e,t){t===0&&(e.mode&1?(t=ui,ui<<=1,!(ui&130023424)&&(ui=4194304)):t=1);var n=Se();e=vt(e,t),e!==null&&(Kr(e,t,n),Te(e,n))}function yg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qf(e,n)}function wg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),qf(e,n)}var Zf;Zf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,sg(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,q&&t.flags&1048576&&tf(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mi(e,t),e=t.pendingProps;var i=Hn(t,we.current);Dn(t,n),i=ka(null,t,r,e,i,n);var o=Ca();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,Xi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wa(t),i.updater=Co,t.stateNode=i,i._reactInternals=t,ul(t,r,e,n),t=fl(null,t,r,!0,o,n)):(t.tag=0,q&&o&&fa(t),xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Sg(r),e=Ye(r,e),i){case 0:t=dl(null,t,r,e,n);break e;case 1:t=Ku(null,t,r,e,n);break e;case 11:t=Qu(null,t,r,e,n);break e;case 14:t=Xu(null,t,r,Ye(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),dl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Ku(e,t,r,i,n);case 3:e:{if(_f(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,i=o.element,af(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Yn(Error(I(423)),t),t=qu(e,t,r,n,i);break e}else if(r!==i){i=Yn(Error(I(424)),t),t=qu(e,t,r,n,i);break e}else for(Ie=jt(t.stateNode.containerInfo.firstChild),Me=t,q=!0,Xe=null,n=sf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gn(),r===i){t=yt(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return uf(t),e===null&&sl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,tl(r,i)?s=null:o!==null&&tl(r,o)&&(t.flags|=32),Of(e,t),xe(e,t,s,n),t.child;case 6:return e===null&&sl(t),null;case 13:return jf(e,t,n);case 4:return xa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Un(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Qu(e,t,r,i,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,W(Zi,r._currentValue),r._currentValue=s,o!==null)if(Ze(o.value,s)){if(o.children===i.children&&!Pe.current){t=yt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=mt(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ll(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ll(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Dn(t,n),i=Ge(i),r=r(i),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),Xu(e,t,r,i,n);case 15:return Mf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Mi(e,t),t.tag=1,Ae(r)?(e=!0,Xi(t)):e=!1,Dn(t,n),Nf(t,r,i),ul(t,r,i,n),fl(null,t,r,!0,e,n);case 19:return Df(e,t,n);case 22:return Lf(e,t,n)}throw Error(I(156,t.tag))};function Jf(e,t){return Cd(e,t)}function xg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new xg(e,t,n,r)}function _a(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sg(e){if(typeof e=="function")return _a(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ea)return 11;if(e===ta)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _i(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")_a(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case xn:return on(n.children,i,o,t);case Jl:s=8,i|=8;break;case Ls:return e=$e(12,n,t,i|2),e.elementType=Ls,e.lanes=o,e;case Os:return e=$e(13,n,t,i),e.elementType=Os,e.lanes=o,e;case _s:return e=$e(19,n,t,i),e.elementType=_s,e.lanes=o,e;case ad:return To(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sd:s=10;break e;case ld:s=9;break e;case ea:s=11;break e;case ta:s=14;break e;case Ct:s=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=$e(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function on(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function To(e,t,n,r){return e=$e(22,e,r,t),e.elementType=ad,e.lanes=n,e.stateNode={isHidden:!1},e}function ps(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function ms(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Eg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qo(0),this.expirationTimes=Qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ja(e,t,n,r,i,o,s,l,a){return e=new Eg(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=$e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wa(o),e}function bg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ep(e){if(!e)return $t;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Jd(e,n,t)}return t}function tp(e,t,n,r,i,o,s,l,a){return e=ja(n,r,!0,e,i,o,s,l,a),e.context=ep(null),n=e.current,r=Se(),i=Rt(n),o=mt(r,i),o.callback=t??null,Dt(n,o,i),e.current.lanes=i,Kr(e,i,r),Te(e,r),e}function No(e,t,n,r){var i=t.current,o=Se(),s=Rt(i);return n=ep(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(i,t,s),e!==null&&(qe(e,i,s,o),Ni(e,i,s)),s}function ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Da(e,t){lc(e,t),(e=e.alternate)&&lc(e,t)}function kg(){return null}var np=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fa(e){this._internalRoot=e}zo.prototype.render=Fa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));No(e,t,null,null)};zo.prototype.unmount=Fa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){No(null,e,null,null)}),t[gt]=null}};function zo(e){this._internalRoot=e}zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Md();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&Od(e)}};function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ac(){}function Cg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=ao(s);o.call(c)}}var s=tp(t,r,e,0,null,!1,!1,"",ac);return e._reactRootContainer=s,e[gt]=s.current,Dr(e.nodeType===8?e.parentNode:e),fn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=ao(a);l.call(c)}}var a=ja(e,0,!1,null,null,!1,!1,"",ac);return e._reactRootContainer=a,e[gt]=a.current,Dr(e.nodeType===8?e.parentNode:e),fn(function(){No(t,a,n,r)}),a}function Mo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=ao(s);l.call(a)}}No(t,s,e,i)}else s=Cg(n,t,e,i,r);return ao(s)}zd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pr(t.pendingLanes);n!==0&&(ia(t,n|1),Te(t,oe()),!(G&6)&&(Qn=oe()+500,Qt()))}break;case 13:fn(function(){var r=vt(e,1);if(r!==null){var i=Se();qe(r,e,1,i)}}),Da(e,1)}};oa=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=Se();qe(t,e,134217728,n)}Da(e,134217728)}};Id=function(e){if(e.tag===13){var t=Rt(e),n=vt(e,t);if(n!==null){var r=Se();qe(n,e,t,r)}Da(e,t)}};Md=function(){return U};Ld=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Us=function(e,t,n){switch(t){case"input":if(Fs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Eo(r);if(!i)throw Error(I(90));cd(r),Fs(r,i)}}}break;case"textarea":fd(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};wd=Ma;xd=fn;var Pg={usingClientEntryPoint:!1,Events:[Zr,kn,Eo,vd,yd,Ma]},ur={findFiberByHostInstance:en,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ag={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bd(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||kg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xi.isDisabled&&xi.supportsFiber)try{yo=xi.inject(Ag),st=xi}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pg;je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ra(t))throw Error(I(200));return bg(e,t,null,n)};je.createRoot=function(e,t){if(!Ra(e))throw Error(I(299));var n=!1,r="",i=np;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ja(e,1,!1,null,null,n,!1,r,i),e[gt]=t.current,Dr(e.nodeType===8?e.parentNode:e),new Fa(t)};je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=bd(t),e=e===null?null:e.stateNode,e};je.flushSync=function(e){return fn(e)};je.hydrate=function(e,t,n){if(!Io(t))throw Error(I(200));return Mo(null,e,t,!0,n)};je.hydrateRoot=function(e,t,n){if(!Ra(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=np;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=tp(t,null,e,1,n??null,i,!1,o,s),e[gt]=t.current,Dr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new zo(t)};je.render=function(e,t,n){if(!Io(t))throw Error(I(200));return Mo(null,e,t,!1,n)};je.unmountComponentAtNode=function(e){if(!Io(e))throw Error(I(40));return e._reactRootContainer?(fn(function(){Mo(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};je.unstable_batchedUpdates=Ma;je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Io(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Mo(e,t,n,!1,r)};je.version="18.3.1-next-f1338f8080-20240426";function rp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rp)}catch(e){console.error(e)}}rp(),nd.exports=je;var Tg=nd.exports,uc=Tg;Vn.createRoot=uc.createRoot,Vn.hydrateRoot=uc.hydrateRoot;const Lo={prefix:"fas",iconName:"circle-chevron-right",icon:[512,512,["chevron-circle-right"],"f138","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"]},Ng={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]},Oo=Ng,Ba={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},zg={prefix:"fas",iconName:"volume-xmark",icon:[576,512,["volume-mute","volume-times"],"f6a9","M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},_o=zg,Ig={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},jo=Ig,Do={prefix:"fas",iconName:"circle-chevron-left",icon:[512,512,["chevron-circle-left"],"f137","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"]},cc=()=>{};let Va={},ip={},op=null,sp={mark:cc,measure:cc};try{typeof window<"u"&&(Va=window),typeof document<"u"&&(ip=document),typeof MutationObserver<"u"&&(op=MutationObserver),typeof performance<"u"&&(sp=performance)}catch{}const{userAgent:dc=""}=Va.navigator||{},Ht=Va,K=ip,fc=op,Si=sp;Ht.document;const Et=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",lp=~dc.indexOf("MSIE")||~dc.indexOf("Trident/");var Z="classic",ap="duotone",Le="sharp",Oe="sharp-duotone",Mg=[Z,ap,Le,Oe],Lg={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},pc={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Og=["kit"],_g=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,jg=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Dg={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Fg={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Rg={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Bg={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Vg={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},$g={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},up={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Hg=["solid","regular","light","thin","duotone","brands"],cp=[1,2,3,4,5,6,7,8,9,10],Gg=cp.concat([11,12,13,14,15,16,17,18,19,20]),hr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ug=[...Object.keys(Bg),...Hg,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",hr.GROUP,hr.SWAP_OPACITY,hr.PRIMARY,hr.SECONDARY].concat(cp.map(e=>"".concat(e,"x"))).concat(Gg.map(e=>"w-".concat(e))),Wg={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Yg={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Qg={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},mc={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const wt="___FONT_AWESOME___",kl=16,dp="fa",fp="svg-inline--fa",pn="data-fa-i2svg",Cl="data-fa-pseudo-element",Xg="data-fa-pseudo-element-pending",$a="data-prefix",Ha="data-icon",hc="fontawesome-i2svg",Kg="async",qg=["HTML","HEAD","STYLE","SCRIPT"],pp=(()=>{try{return!0}catch{return!1}})(),mp=[Z,Le,Oe];function ei(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[Z]}})}const hp={...up};hp[Z]={...up[Z],...pc.kit,...pc["kit-duotone"]};const sn=ei(hp),Pl={...$g};Pl[Z]={...Pl[Z],...mc.kit,...mc["kit-duotone"]};const Wr=ei(Pl),Al={...Vg};Al[Z]={...Al[Z],...Qg.kit};const ln=ei(Al),Tl={...Rg};Tl[Z]={...Tl[Z],...Yg.kit};const Zg=ei(Tl),Jg=_g,gp="fa-layers-text",ev=jg,tv={...Lg};ei(tv);const nv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],hs=hr,Xn=new Set;Object.keys(Wr[Z]).map(Xn.add.bind(Xn));Object.keys(Wr[Le]).map(Xn.add.bind(Xn));Object.keys(Wr[Oe]).map(Xn.add.bind(Xn));const rv=[...Og,...Ug],Pr=Ht.FontAwesomeConfig||{};function iv(e){var t=K.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ov(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}K&&typeof K.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=ov(iv(n));i!=null&&(Pr[r]=i)});const vp={styleDefault:"solid",familyDefault:"classic",cssPrefix:dp,replacementClass:fp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Pr.familyPrefix&&(Pr.cssPrefix=Pr.familyPrefix);const Kn={...vp,...Pr};Kn.autoReplaceSvg||(Kn.observeMutations=!1);const D={};Object.keys(vp).forEach(e=>{Object.defineProperty(D,e,{enumerable:!0,set:function(t){Kn[e]=t,Ar.forEach(n=>n(D))},get:function(){return Kn[e]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(e){Kn.cssPrefix=e,Ar.forEach(t=>t(D))},get:function(){return Kn.cssPrefix}});Ht.FontAwesomeConfig=D;const Ar=[];function sv(e){return Ar.push(e),()=>{Ar.splice(Ar.indexOf(e),1)}}const kt=kl,rt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function lv(e){if(!e||!Et)return;const t=K.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=K.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return K.head.insertBefore(t,r),e}const av="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yr(){let e=12,t="";for(;e-- >0;)t+=av[Math.random()*62|0];return t}function er(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ga(e){return e.classList?er(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function yp(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function uv(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(yp(e[n]),'" '),"").trim()}function Fo(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Ua(e){return e.size!==rt.size||e.x!==rt.x||e.y!==rt.y||e.rotate!==rt.rotate||e.flipX||e.flipY}function cv(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),a={transform:"".concat(o," ").concat(s," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:a,path:c}}function dv(e){let{transform:t,width:n=kl,height:r=kl,startCentered:i=!1}=e,o="";return i&&lp?o+="translate(".concat(t.x/kt-n/2,"em, ").concat(t.y/kt-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(t.x/kt,"em), calc(-50% + ").concat(t.y/kt,"em)) "):o+="translate(".concat(t.x/kt,"em, ").concat(t.y/kt,"em) "),o+="scale(".concat(t.size/kt*(t.flipX?-1:1),", ").concat(t.size/kt*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var fv=`:root, :host {
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
}`;function wp(){const e=dp,t=fp,n=D.cssPrefix,r=D.replacementClass;let i=fv;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let gc=!1;function gs(){D.autoAddCss&&!gc&&(lv(wp()),gc=!0)}var pv={mixout(){return{dom:{css:wp,insertCss:gs}}},hooks(){return{beforeDOMElementCreation(){gs()},beforeI2svg(){gs()}}}};const xt=Ht||{};xt[wt]||(xt[wt]={});xt[wt].styles||(xt[wt].styles={});xt[wt].hooks||(xt[wt].hooks={});xt[wt].shims||(xt[wt].shims=[]);var it=xt[wt];const xp=[],Sp=function(){K.removeEventListener("DOMContentLoaded",Sp),uo=1,xp.map(e=>e())};let uo=!1;Et&&(uo=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),uo||K.addEventListener("DOMContentLoaded",Sp));function mv(e){Et&&(uo?setTimeout(e,0):xp.push(e))}function ti(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?yp(e):"<".concat(t," ").concat(uv(n),">").concat(r.map(ti).join(""),"</").concat(t,">")}function vc(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var vs=function(t,n,r,i){var o=Object.keys(t),s=o.length,l=n,a,c,f;for(r===void 0?(a=1,f=t[o[0]]):(a=0,f=r);a<s;a++)c=o[a],f=l(f,t[c],c,t);return f};function hv(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Nl(e){const t=hv(e);return t.length===1?t[0].toString(16):null}function gv(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function yc(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function zl(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=yc(t);typeof it.hooks.addPack=="function"&&!r?it.hooks.addPack(e,yc(t)):it.styles[e]={...it.styles[e]||{},...i},e==="fas"&&zl("fa",t)}const{styles:Jt,shims:vv}=it,yv={[Z]:Object.values(ln[Z]),[Le]:Object.values(ln[Le]),[Oe]:Object.values(ln[Oe])};let Wa=null,Ep={},bp={},kp={},Cp={},Pp={};const wv={[Z]:Object.keys(sn[Z]),[Le]:Object.keys(sn[Le]),[Oe]:Object.keys(sn[Oe])};function xv(e){return~rv.indexOf(e)}function Sv(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!xv(i)?i:null}const Ap=()=>{const e=r=>vs(Jt,(i,o,s)=>(i[s]=vs(o,r,{}),i),{});Ep=e((r,i,o)=>(i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=o}),r)),bp=e((r,i,o)=>(r[o]=o,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=o}),r)),Pp=e((r,i,o)=>{const s=i[2];return r[o]=o,s.forEach(l=>{r[l]=o}),r});const t="far"in Jt||D.autoFetchSvg,n=vs(vv,(r,i)=>{const o=i[0];let s=i[1];const l=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});kp=n.names,Cp=n.unicodes,Wa=Ro(D.styleDefault,{family:D.familyDefault})};sv(e=>{Wa=Ro(e.styleDefault,{family:D.familyDefault})});Ap();function Ya(e,t){return(Ep[e]||{})[t]}function Ev(e,t){return(bp[e]||{})[t]}function It(e,t){return(Pp[e]||{})[t]}function Tp(e){return kp[e]||{prefix:null,iconName:null}}function bv(e){const t=Cp[e],n=Ya("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Gt(){return Wa}const Qa=()=>({prefix:null,iconName:null,rest:[]});function Ro(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Z}=t,r=sn[n][e],i=Wr[n][e]||Wr[n][r],o=e in it.styles?e:null;return i||o||null}const kv={[Z]:Object.keys(ln[Z]),[Le]:Object.keys(ln[Le]),[Oe]:Object.keys(ln[Oe])};function Bo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[Z]:"".concat(D.cssPrefix,"-").concat(Z),[Le]:"".concat(D.cssPrefix,"-").concat(Le),[Oe]:"".concat(D.cssPrefix,"-").concat(Oe)};let i=null,o=Z;const s=Mg.filter(a=>a!==ap);s.forEach(a=>{(e.includes(r[a])||e.some(c=>kv[a].includes(c)))&&(o=a)});const l=e.reduce((a,c)=>{const f=Sv(D.cssPrefix,c);if(Jt[c]?(c=yv[o].includes(c)?Zg[o][c]:c,i=c,a.prefix=c):wv[o].indexOf(c)>-1?(i=c,a.prefix=Ro(c,{family:o})):f?a.iconName=f:c!==D.replacementClass&&!s.some(p=>c===r[p])&&a.rest.push(c),!n&&a.prefix&&a.iconName){const p=i==="fa"?Tp(a.iconName):{},m=It(a.prefix,a.iconName);p.prefix&&(i=null),a.iconName=p.iconName||m||a.iconName,a.prefix=p.prefix||a.prefix,a.prefix==="far"&&!Jt.far&&Jt.fas&&!D.autoFetchSvg&&(a.prefix="fas")}return a},Qa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===Le&&(Jt.fass||D.autoFetchSvg)&&(l.prefix="fass",l.iconName=It(l.prefix,l.iconName)||l.iconName),!l.prefix&&o===Oe&&(Jt.fasds||D.autoFetchSvg)&&(l.prefix="fasds",l.iconName=It(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=Gt()||"fas"),l}class Cv{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...i[o]},zl(o,i[o]);const s=ln[Z][o];s&&zl(s,i[o]),Ap()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:o,iconName:s,icon:l}=r[i],a=l[2];t[o]||(t[o]={}),a.length>0&&a.forEach(c=>{typeof c=="string"&&(t[o][c]=l)}),t[o][s]=l}),t}}let wc=[],In={};const Rn={},Pv=Object.keys(Rn);function Av(e,t){let{mixoutsTo:n}=t;return wc=e,In={},Object.keys(Rn).forEach(r=>{Pv.indexOf(r)===-1&&delete Rn[r]}),wc.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{In[s]||(In[s]=[]),In[s].push(o[s])})}r.provides&&r.provides(Rn)}),n}function Il(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(In[e]||[]).forEach(s=>{t=s.apply(null,[t,...r])}),t}function mn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(In[e]||[]).forEach(o=>{o.apply(null,n)})}function Ut(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Rn[e]?Rn[e].apply(null,t):void 0}function Ml(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Gt();if(t)return t=It(n,t)||t,vc(Np.definitions,n,t)||vc(it.styles,n,t)}const Np=new Cv,Tv=()=>{D.autoReplaceSvg=!1,D.observeMutations=!1,mn("noAuto")},Nv={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Et?(mn("beforeI2svg",e),Ut("pseudoElements2svg",e),Ut("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,mv(()=>{Iv({autoReplaceSvgRoot:t}),mn("watch",e)})}},zv={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:It(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Ro(e[0]);return{prefix:n,iconName:It(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(D.cssPrefix,"-"))>-1||e.match(Jg))){const t=Bo(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Gt(),iconName:It(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Gt();return{prefix:t,iconName:It(t,e)||e}}}},Fe={noAuto:Tv,config:D,dom:Nv,parse:zv,library:Np,findIconDefinition:Ml,toHtml:ti},Iv=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=K}=e;(Object.keys(it.styles).length>0||D.autoFetchSvg)&&Et&&D.autoReplaceSvg&&Fe.dom.i2svg({node:t})};function Vo(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>ti(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Et)return;const n=K.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Mv(e){let{children:t,main:n,mask:r,attributes:i,styles:o,transform:s}=e;if(Ua(s)&&n.found&&!r.found){const{width:l,height:a}=n,c={x:l/a/2,y:.5};i.style=Fo({...o,"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")})}return[{tag:"svg",attributes:i,children:t}]}function Lv(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:o}=e;const s=o===!0?"".concat(t,"-").concat(D.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:s},children:r}]}]}function Xa(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:o,symbol:s,title:l,maskId:a,titleId:c,extra:f,watchable:p=!1}=e,{width:m,height:g}=n.found?n:t,v=r==="fak",w=[D.replacementClass,i?"".concat(D.cssPrefix,"-").concat(i):""].filter(k=>f.classes.indexOf(k)===-1).filter(k=>k!==""||!!k).concat(f.classes).join(" ");let b={children:[],attributes:{...f.attributes,"data-prefix":r,"data-icon":i,class:w,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)}};const u=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};p&&(b.attributes[pn]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(c||Yr())},children:[l]}),delete b.attributes.title);const d={...b,prefix:r,iconName:i,main:t,mask:n,maskId:a,transform:o,symbol:s,styles:{...u,...f.styles}},{children:h,attributes:x}=n.found&&t.found?Ut("generateAbstractMask",d)||{children:[],attributes:{}}:Ut("generateAbstractIcon",d)||{children:[],attributes:{}};return d.children=h,d.attributes=x,s?Lv(d):Mv(d)}function xc(e){const{content:t,width:n,height:r,transform:i,title:o,extra:s,watchable:l=!1}=e,a={...s.attributes,...o?{title:o}:{},class:s.classes.join(" ")};l&&(a[pn]="");const c={...s.styles};Ua(i)&&(c.transform=dv({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const f=Fo(c);f.length>0&&(a.style=f);const p=[];return p.push({tag:"span",attributes:a,children:[t]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function Ov(e){const{content:t,title:n,extra:r}=e,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=Fo(r.styles);o.length>0&&(i.style=o);const s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:ys}=it;function Ll(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(hs.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(hs.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(hs.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const _v={found:!1,width:512,height:512};function jv(e,t){!pp&&!D.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ol(e,t){let n=t;return t==="fa"&&D.styleDefault!==null&&(t=Gt()),new Promise((r,i)=>{if(n==="fa"){const o=Tp(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ys[t]&&ys[t][e]){const o=ys[t][e];return r(Ll(o))}jv(e,t),r({..._v,icon:D.showMissingIcons&&e?Ut("missingIconAbstract")||{}:{}})})}const Sc=()=>{},_l=D.measurePerformance&&Si&&Si.mark&&Si.measure?Si:{mark:Sc,measure:Sc},gr='FA "6.6.0"',Dv=e=>(_l.mark("".concat(gr," ").concat(e," begins")),()=>zp(e)),zp=e=>{_l.mark("".concat(gr," ").concat(e," ends")),_l.measure("".concat(gr," ").concat(e),"".concat(gr," ").concat(e," begins"),"".concat(gr," ").concat(e," ends"))};var Ka={begin:Dv,end:zp};const ji=()=>{};function Ec(e){return typeof(e.getAttribute?e.getAttribute(pn):null)=="string"}function Fv(e){const t=e.getAttribute?e.getAttribute($a):null,n=e.getAttribute?e.getAttribute(Ha):null;return t&&n}function Rv(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(D.replacementClass)}function Bv(){return D.autoReplaceSvg===!0?Di.replace:Di[D.autoReplaceSvg]||Di.replace}function Vv(e){return K.createElementNS("http://www.w3.org/2000/svg",e)}function $v(e){return K.createElement(e)}function Ip(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Vv:$v}=t;if(typeof e=="string")return K.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Ip(o,{ceFn:n}))}),r}function Hv(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Di={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Ip(n),t)}),t.getAttribute(pn)===null&&D.keepOriginalSource){let n=K.createComment(Hv(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Ga(t).indexOf(D.replacementClass))return Di.replace(e);const r=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,l)=>(l===D.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const i=n.map(o=>ti(o)).join(`
`);t.setAttribute(pn,""),t.innerHTML=i}};function bc(e){e()}function Mp(e,t){const n=typeof t=="function"?t:ji;if(e.length===0)n();else{let r=bc;D.mutateApproach===Kg&&(r=Ht.requestAnimationFrame||bc),r(()=>{const i=Bv(),o=Ka.begin("mutate");e.map(i),o(),n()})}}let qa=!1;function Lp(){qa=!0}function jl(){qa=!1}let co=null;function kc(e){if(!fc||!D.observeMutations)return;const{treeCallback:t=ji,nodeCallback:n=ji,pseudoElementsCallback:r=ji,observeMutationsRoot:i=K}=e;co=new fc(o=>{if(qa)return;const s=Gt();er(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Ec(l.addedNodes[0])&&(D.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&D.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&Ec(l.target)&&~nv.indexOf(l.attributeName))if(l.attributeName==="class"&&Fv(l.target)){const{prefix:a,iconName:c}=Bo(Ga(l.target));l.target.setAttribute($a,a||s),c&&l.target.setAttribute(Ha,c)}else Rv(l.target)&&n(l.target)})}),Et&&co.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Gv(){co&&co.disconnect()}function Uv(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const o=i.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(r[s]=l.join(":").trim()),r},{})),n}function Wv(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=Bo(Ga(e));return i.prefix||(i.prefix=Gt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Ev(i.prefix,e.innerText)||Ya(i.prefix,Nl(e.innerText))),!i.iconName&&D.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Yv(e){const t=er(e.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return D.autoA11y&&(n?t["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(r||Yr()):(t["aria-hidden"]="true",t.focusable="false")),t}function Qv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:rt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Cc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=Wv(e),o=Yv(e),s=Il("parseNodeAttributes",{},e);let l=t.styleParser?Uv(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:rt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o},...s}}const{styles:Xv}=it;function Op(e){const t=D.autoReplaceSvg==="nest"?Cc(e,{styleParser:!1}):Cc(e);return~t.extra.classes.indexOf(gp)?Ut("generateLayersText",e,t):Ut("generateSvgReplacementMutation",e,t)}let at=new Set;mp.map(e=>{at.add("fa-".concat(e))});Object.keys(sn[Z]).map(at.add.bind(at));Object.keys(sn[Le]).map(at.add.bind(at));Object.keys(sn[Oe]).map(at.add.bind(at));at=[...at];function Pc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Et)return Promise.resolve();const n=K.documentElement.classList,r=f=>n.add("".concat(hc,"-").concat(f)),i=f=>n.remove("".concat(hc,"-").concat(f)),o=D.autoFetchSvg?at:mp.map(f=>"fa-".concat(f)).concat(Object.keys(Xv));o.includes("fa")||o.push("fa");const s=[".".concat(gp,":not([").concat(pn,"])")].concat(o.map(f=>".".concat(f,":not([").concat(pn,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=er(e.querySelectorAll(s))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const a=Ka.begin("onTree"),c=l.reduce((f,p)=>{try{const m=Op(p);m&&f.push(m)}catch(m){pp||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,p)=>{Promise.all(c).then(m=>{Mp(m,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),a(),f()})}).catch(m=>{a(),p(m)})})}function Kv(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Op(e).then(n=>{n&&Mp([n],t)})}function qv(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Ml(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Ml(i||{})),e(r,{...n,mask:i})}}const Zv=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=rt,symbol:r=!1,mask:i=null,maskId:o=null,title:s=null,titleId:l=null,classes:a=[],attributes:c={},styles:f={}}=t;if(!e)return;const{prefix:p,iconName:m,icon:g}=e;return Vo({type:"icon",...e},()=>(mn("beforeDOMElementCreation",{iconDefinition:e,params:t}),D.autoA11y&&(s?c["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(l||Yr()):(c["aria-hidden"]="true",c.focusable="false")),Xa({icons:{main:Ll(g),mask:i?Ll(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:{...rt,...n},symbol:r,title:s,maskId:o,titleId:l,extra:{attributes:c,styles:f,classes:a}})))};var Jv={mixout(){return{icon:qv(Zv)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Pc,e.nodeCallback=Kv,e}}},provides(e){e.i2svg=function(t){const{node:n=K,callback:r=()=>{}}=t;return Pc(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:o,prefix:s,transform:l,symbol:a,mask:c,maskId:f,extra:p}=n;return new Promise((m,g)=>{Promise.all([Ol(r,s),c.iconName?Ol(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(v=>{let[w,b]=v;m([t,Xa({icons:{main:w,mask:b},prefix:s,iconName:r,transform:l,symbol:a,maskId:f,title:i,titleId:o,extra:p,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:o,styles:s}=t;const l=Fo(s);l.length>0&&(r.style=l);let a;return Ua(o)&&(a=Ut("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(a||i.icon),{children:n,attributes:r}}}},e0={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Vo({type:"layer"},()=>{mn("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(o=>{r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},t0={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:o={}}=t;return Vo({type:"counter",content:e},()=>(mn("beforeDOMElementCreation",{content:e,params:t}),Ov({content:e.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(D.cssPrefix,"-layers-counter"),...r]}})))}}}},n0={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=rt,title:r=null,classes:i=[],attributes:o={},styles:s={}}=t;return Vo({type:"text",content:e},()=>(mn("beforeDOMElementCreation",{content:e,params:t}),xc({content:e,transform:{...rt,...n},title:r,extra:{attributes:o,styles:s,classes:["".concat(D.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:o}=n;let s=null,l=null;if(lp){const a=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();s=c.width/a,l=c.height/a}return D.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,xc({content:t.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}};const r0=new RegExp('"',"ug"),Ac=[1105920,1112319],Tc={FontAwesome:{normal:"fas",400:"fas"},...Fg,...Dg,...Wg},Dl=Object.keys(Tc).reduce((e,t)=>(e[t.toLowerCase()]=Tc[t],e),{}),i0=Object.keys(Dl).reduce((e,t)=>{const n=Dl[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function o0(e){const t=e.replace(r0,""),n=gv(t,0),r=n>=Ac[0]&&n<=Ac[1],i=t.length===2?t[0]===t[1]:!1;return{value:Nl(i?t[0]:t),isSecondary:r||i}}function s0(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(Dl[n]||{})[i]||i0[n]}function Nc(e,t){const n="".concat(Xg).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const s=er(e.children).filter(m=>m.getAttribute(Cl)===t)[0],l=Ht.getComputedStyle(e,t),a=l.getPropertyValue("font-family"),c=a.match(ev),f=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(s&&!c)return e.removeChild(s),r();if(c&&p!=="none"&&p!==""){const m=l.getPropertyValue("content");let g=s0(a,f);const{value:v,isSecondary:w}=o0(m),b=c[0].startsWith("FontAwesome");let u=Ya(g,v),d=u;if(b){const h=bv(v);h.iconName&&h.prefix&&(u=h.iconName,g=h.prefix)}if(u&&!w&&(!s||s.getAttribute($a)!==g||s.getAttribute(Ha)!==d)){e.setAttribute(n,d),s&&e.removeChild(s);const h=Qv(),{extra:x}=h;x.attributes[Cl]=t,Ol(u,g).then(k=>{const A=Xa({...h,icons:{main:k,mask:Qa()},prefix:g,iconName:d,extra:x,watchable:!0}),N=K.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(N,e.firstChild):e.appendChild(N),N.outerHTML=A.map(C=>ti(C)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function l0(e){return Promise.all([Nc(e,"::before"),Nc(e,"::after")])}function a0(e){return e.parentNode!==document.head&&!~qg.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Cl)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function zc(e){if(Et)return new Promise((t,n)=>{const r=er(e.querySelectorAll("*")).filter(a0).map(l0),i=Ka.begin("searchPseudoElements");Lp(),Promise.all(r).then(()=>{i(),jl(),t()}).catch(()=>{i(),jl(),n()})})}var u0={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=zc,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=K}=t;D.searchPseudoElements&&zc(n)}}};let Ic=!1;var c0={mixout(){return{dom:{unwatch(){Lp(),Ic=!0}}}},hooks(){return{bootstrap(){kc(Il("mutationObserverCallbacks",{}))},noAuto(){Gv()},watch(e){const{observeMutationsRoot:t}=e;Ic?jl():kc(Il("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Mc=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),o=i[0];let s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var d0={mixout(){return{parse:{transform:e=>Mc(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Mc(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:o}=t;const s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),a="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(a," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:f,path:p};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const ws={x:0,y:0,width:"100%",height:"100%"};function Lc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function f0(e){return e.tag==="g"?e.children:[e]}var p0={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Bo(n.split(" ").map(i=>i.trim())):Qa();return r.prefix||(r.prefix=Gt()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:o,maskId:s,transform:l}=t;const{width:a,icon:c}=i,{width:f,icon:p}=o,m=cv({transform:l,containerWidth:f,iconWidth:a}),g={tag:"rect",attributes:{...ws,fill:"white"}},v=c.children?{children:c.children.map(Lc)}:{},w={tag:"g",attributes:{...m.inner},children:[Lc({tag:c.tag,attributes:{...c.attributes,...m.path},...v})]},b={tag:"g",attributes:{...m.outer},children:[w]},u="mask-".concat(s||Yr()),d="clip-".concat(s||Yr()),h={tag:"mask",attributes:{...ws,id:u,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,b]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:f0(p)},h]};return n.push(x,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(u,")"),...ws}}),{children:n,attributes:r}}}},m0={provides(e){let t=!1;Ht.matchMedia&&(t=Ht.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...i,attributeName:"opacity"},s={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||s.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},h0={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},g0=[pv,Jv,e0,t0,n0,u0,c0,d0,p0,m0,h0];Av(g0,{mixoutsTo:Fe});Fe.noAuto;Fe.config;Fe.library;Fe.dom;const Fl=Fe.parse;Fe.findIconDefinition;Fe.toHtml;const v0=Fe.icon;Fe.layer;Fe.text;Fe.counter;var _p={exports:{}},y0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",w0=y0,x0=w0;function jp(){}function Dp(){}Dp.resetWarningCache=jp;var S0=function(){function e(r,i,o,s,l,a){if(a!==x0){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Dp,resetWarningCache:jp};return n.PropTypes=n,n};_p.exports=S0();var E0=_p.exports;const V=Gc(E0);function Oc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function tt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oc(Object(n),!0).forEach(function(r){Mn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fo(e){"@babel/helpers - typeof";return fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fo(e)}function Mn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function k0(e,t){if(e==null)return{};var n=b0(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Rl(e){return C0(e)||P0(e)||A0(e)||T0()}function C0(e){if(Array.isArray(e))return Bl(e)}function P0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function A0(e,t){if(e){if(typeof e=="string")return Bl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bl(e,t)}}function Bl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N0(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,l=e.flash,a=e.spin,c=e.spinPulse,f=e.spinReverse,p=e.pulse,m=e.fixedWidth,g=e.inverse,v=e.border,w=e.listItem,b=e.flip,u=e.size,d=e.rotation,h=e.pull,x=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":l,"fa-spin":a,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":g,"fa-border":v,"fa-li":w,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},Mn(t,"fa-".concat(u),typeof u<"u"&&u!==null),Mn(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Mn(t,"fa-pull-".concat(h),typeof h<"u"&&h!==null),Mn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map(function(k){return x[k]?k:null}).filter(function(k){return k})}function z0(e){return e=e-0,e===e}function Fp(e){return z0(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var I0=["style"];function M0(e){return e.charAt(0).toUpperCase()+e.slice(1)}function L0(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Fp(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[M0(i)]=o:t[i]=o,t},{})}function Rp(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(a){return Rp(e,a)}),i=Object.keys(t.attributes||{}).reduce(function(a,c){var f=t.attributes[c];switch(c){case"class":a.attrs.className=f,delete t.attributes.class;break;case"style":a.attrs.style=L0(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?a.attrs[c.toLowerCase()]=f:a.attrs[Fp(c)]=f}return a},{attrs:{}}),o=n.style,s=o===void 0?{}:o,l=k0(n,I0);return i.attrs.style=tt(tt({},i.attrs.style),s),e.apply(void 0,[t.tag,tt(tt({},i.attrs),l)].concat(Rl(r)))}var Bp=!1;try{Bp=!0}catch{}function O0(){if(!Bp&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function _c(e){if(e&&fo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Fl.icon)return Fl.icon(e);if(e===null)return null;if(e&&fo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function xs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Mn({},e,t):{}}var jc={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ie=Q.forwardRef(function(e,t){var n=tt(tt({},jc),e),r=n.icon,i=n.mask,o=n.symbol,s=n.className,l=n.title,a=n.titleId,c=n.maskId,f=_c(r),p=xs("classes",[].concat(Rl(N0(n)),Rl((s||"").split(" ")))),m=xs("transform",typeof n.transform=="string"?Fl.transform(n.transform):n.transform),g=xs("mask",_c(i)),v=v0(f,tt(tt(tt(tt({},p),m),g),{},{symbol:o,title:l,titleId:a,maskId:c}));if(!v)return O0("Could not find icon",f),null;var w=v.abstract,b={ref:t};return Object.keys(n).forEach(function(u){jc.hasOwnProperty(u)||(b[u]=n[u])}),_0(w[0],b)});ie.displayName="FontAwesomeIcon";ie.propTypes={beat:V.bool,border:V.bool,beatFade:V.bool,bounce:V.bool,className:V.string,fade:V.bool,flash:V.bool,mask:V.oneOfType([V.object,V.array,V.string]),maskId:V.string,fixedWidth:V.bool,inverse:V.bool,flip:V.oneOf([!0,!1,"horizontal","vertical","both"]),icon:V.oneOfType([V.object,V.array,V.string]),listItem:V.bool,pull:V.oneOf(["right","left"]),pulse:V.bool,rotation:V.oneOf([0,90,180,270]),shake:V.bool,size:V.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:V.bool,spinPulse:V.bool,spinReverse:V.bool,symbol:V.oneOfType([V.bool,V.string]),title:V.string,titleId:V.string,transform:V.oneOfType([V.string,V.object]),swapOpacity:V.bool};var _0=Rp.bind(null,Q.createElement);const j0=()=>y.jsx("div",{className:"video-grid skeleton-container",children:y.jsx("div",{className:"video-content",children:y.jsx("p",{className:"grid-txt"})})}),D0=({videos:e,campaigns:t,loading:n,widgetsDiv:r})=>{const[i,o]=T.useState(null),[s,l]=T.useState(null),a=m=>{o(m)},c=()=>{o(null)},f=m=>{l(m)},p=()=>{l(null)};return n?y.jsx("div",{className:"outer-grid",children:y.jsx("div",{className:"grid",children:Array.from({length:6}).map((m,g)=>y.jsx(j0,{},g))})}):y.jsx(y.Fragment,{children:y.jsxs("div",{className:"outer-grid",children:[y.jsx("div",{className:"grid",children:t.map((m,g)=>{var v,w,b,u,d,h,x;return y.jsxs("div",{onClick:()=>a(g),children:[y.jsx("div",{className:"video-grid",onMouseEnter:()=>f(g),onMouseLeave:p,onTouchStart:()=>f(g),onTouchEnd:p,children:s===g?y.jsx("video",{src:m.videoId[0],loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"}):y.jsx("img",{className:"thumbnail",src:m.campaignPhoto,width:"300",height:"200",alt:"video thumbnail"})}),r?y.jsxs("div",{className:"widgetsDivBookdiv123",children:[y.jsx("div",{className:"img1 widgetsDivImg1",children:y.jsx("img",{className:"img widgetsDivImg",src:m.campaignPhoto,alt:"Campaign"})}),y.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[y.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname widgetsDivHotelname",children:m.campaignName}),y.jsx("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer"}),((v=m.offerPrice)==null?void 0:v.currency)&&((w=m.offerPrice)==null?void 0:w.price)&&y.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"widgetsDivOfferprice",children:["From ",m.offerPrice.currency," ",m.offerPrice.price]})]}),y.jsx("div",{className:"divbtn",children:y.jsx("a",{href:m.campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn widgetsDivBookbtn",children:"Book"})})]}):y.jsx("div",{className:"video-content",children:y.jsxs("p",{className:"txt",children:[((b=t[g])==null?void 0:b.campaignName)&&y.jsxs(y.Fragment,{children:[t[g].campaignName," ",y.jsx("br",{})]}),((d=(u=t[g])==null?void 0:u.offerPrice)==null?void 0:d.currency)&&((x=(h=t[g])==null?void 0:h.offerPrice)==null?void 0:x.price)&&y.jsxs(y.Fragment,{children:["From ",t[g].offerPrice.currency," ",t[g].offerPrice.price]})]})})]},g)})}),i!==null&&y.jsx(F0,{campaigns:t,currentIndex:i,onClose:c})]})})},F0=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=T.useState(t),[o,s]=T.useState(0),[l,a]=T.useState({mutedAll:!1}),[c,f]=T.useState(!1),[p,m]=T.useState(!1),[g,v]=T.useState(!1),[w,b]=T.useState(!1),u=T.useRef([]);T.useRef(null);const d=T.useRef(null);T.useEffect(()=>{const S=()=>{if(document.visibilityState==="hidden"){const E=u.current[o];E&&!E.paused&&(E.pause(),f(!0),b(!0))}};return document.addEventListener("visibilitychange",S),()=>{document.removeEventListener("visibilitychange",S)}},[o]),T.useEffect(()=>{const S=new IntersectionObserver(E=>{E.forEach(P=>{const z=u.current.indexOf(P.target);P.isIntersecting?(P.target.play(),s(z),b(!1)):P.target.pause()})},{threshold:.5});return s(0),u.current.forEach(E=>{E&&S.observe(E)}),()=>{u.current.forEach(E=>{E&&S.unobserve(E)})}},[r]),T.useEffect(()=>{const S=u.current[o];S&&S.play()},[o]);const h=()=>{r!==null?r+1<e.length?(i(r+1),s(0)):(i(0),s(0)):e.length>0&&(i(0),s(0)),m(!1),v(!1)},x=()=>{r!==null?r>0?(i(r-1),s(0)):(i(e.length-1),s(0)):e.length>0&&(i(e.length-1),s(0)),m(!1),v(!1)},k=S=>{const E=u.current[S];E&&(E.paused?(E.play(),console.log("Playing")):(E.pause(),console.log("Paused")),f(E.paused),b(E.paused))},A=()=>{u.current.forEach(E=>{E.muted=!l.mutedAll}),a(E=>({mutedAll:!E.mutedAll}))},N=()=>{v(!g)},C=(S,E=65)=>S.length>E?{truncated:S.slice(0,E)+"...",hasMore:!0}:{truncated:S,hasMore:!1},M=S=>{console.log("Video ended, checking if animation should play");const E=e[r];if(S<E.videoId.length-1)console.log("Not the last video, playing animation"),m(!0),setTimeout(()=>{const P=u.current[S];P&&(P.currentTime=0,P.play()),m(!1)},1500);else{console.log("Last video, no animation, just restart");const P=u.current[S];P&&(P.currentTime=0,P.play())}};return T.useEffect(()=>{s(0),d.current&&(d.current.scrollTop=0)},[r]),T.useEffect(()=>{const S=()=>{m(!1),v(!1)},E=d.current;return E&&E.addEventListener("scroll",S),()=>{E&&E.removeEventListener("scroll",S)}},[]),y.jsxs("div",{className:"whole123",children:[y.jsx("div",{className:"prevbtn123",onClick:x,children:y.jsx(ie,{icon:Do})}),y.jsx("div",{className:"nextbtn123",onClick:h,children:y.jsx(ie,{icon:Lo})}),y.jsxs("div",{className:"reelsContainer",ref:d,children:[e[r].videoId.map((S,E)=>{var P,z,F,B;return y.jsx("div",{className:"reel",children:y.jsxs("div",{className:"video-container1",children:[y.jsx("div",{className:"closediv123",children:y.jsx("button",{className:"closebtn123",onClick:n,children:y.jsx(ie,{icon:jo})})}),y.jsx("div",{className:"functions",children:y.jsx(ie,{icon:l.mutedAll?_o:Oo,className:"volume123",onClick:A,style:{cursor:"pointer"}})}),y.jsx("video",{ref:_=>u.current[E]=_,src:S,className:"ad",loop:!1,playsInline:!0,controls:!1,autoPlay:E===o,onClick:()=>k(E),onPause:()=>{f(!0)},onPlay:()=>{f(!1)},onEnded:()=>M(E)}),c&&w&&y.jsx(ie,{icon:Ba,onClick:()=>k(E),className:"play-button123"}),y.jsxs("div",{className:"bookdiv123",children:[y.jsx("div",{className:"img1",children:y.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),y.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[y.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),y.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[g?e[r].campaignDetails:C(e[r].campaignDetails).truncated,C(e[r].campaignDetails).hasMore&&y.jsx("div",{children:y.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:N,children:g?" View Less":" View More"})})]}),y.jsxs("div",{className:"bottom-div",children:[" ",((z=(P=e[r])==null?void 0:P.offerPrice)==null?void 0:z.currency)&&((B=(F=e[r])==null?void 0:F.offerPrice)==null?void 0:B.price)&&y.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From"," ",e[r].offerPrice.currency," ",e[r].offerPrice.price]}),y.jsx("div",{className:"divbtn",children:y.jsx("a",{href:e[r].campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]})]})]})},E)}),p&&y.jsx("dotlottie-player",{src:"https://lottie.host/9dbbaa88-603c-407f-a9d4-f40ef822c697/JKZJQpvfeR.json",background:"transparent",speed:"1",style:{width:"29vh",height:"29vh",position:"absolute",bottom:"0",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"34px",color:"white",zIndex:1e3},loop:!0,autoplay:!0})]})]})},R0=()=>{const[e,t]=T.useState([]),[n,r]=T.useState([]),[i,o]=T.useState(!0),[s,l]=T.useState(!1);return T.useEffect(()=>{const a=document.getElementById("root-grid"),c=a.dataset.campaignId,f=a.dataset.widgetStatus;l(f==="true"),(async m=>{try{const v=await(await fetch(`https://widgetapi.tripbuilder.in/${m}`)).json(),w=v.campaigns.map(b=>b.videoId[0]);t(w),r(v.campaigns)}catch(g){console.error("Error fetching data:",g)}})(c)},[]),T.useEffect(()=>{n.length>0&&o(!1)},[n]),y.jsxs("div",{className:"App",children:[y.jsx("style",{children:`
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
`}),y.jsx(D0,{videos:e,campaigns:n,loading:i,widgetsDiv:s})]})},B0=({campaigns:e,loading:t})=>{var P,z,F,B;const n=T.useRef(null),[r,i]=T.useState(!1),[o,s]=T.useState(null),[l,a]=T.useState(0),[c,f]=T.useState(!1),[p,m]=T.useState(0),[g,v]=T.useState({}),[w,b]=T.useState(!1);T.useEffect(()=>{const _=()=>{document.hidden&&n.current&&(n.current.muted=!0,f(!0))};return document.addEventListener("visibilitychange",_),()=>{document.removeEventListener("visibilitychange",_)}},[]),T.useEffect(()=>{const _=n.current,H=()=>{b(_.paused),_.paused&&_.play()};return _&&(_.addEventListener("play",H),_.addEventListener("pause",H)),()=>{_&&(_.removeEventListener("play",H),_.removeEventListener("pause",H))}},[o,l,e]),T.useEffect(()=>{if(o!==null&&e[o]){const _=e[o];if(l<_.videoId.length){const H=_.videoId[l];n.current.src=H,n.current.play(),m(0),b(!1)}}},[o,l,e]),T.useEffect(()=>{const _=setInterval(()=>{n.current&&m(n.current.currentTime/n.current.duration*100)},100);return()=>clearInterval(_)},[l,o]),T.useEffect(()=>{n.current&&(n.current.muted=c)},[c]);const u=_=>{s(_),a(0)},d=()=>{if(v(_=>({..._,[`${o}-${l}`]:!0})),m(100),o!==null&&e[o]){const _=e[o];l+1<_.videoId.length?a(l+1):o+1<e.length?(s(o+1),a(0)):(s(null),a(0))}},h=()=>{o!==null?o+1<e.length?(s(o+1),a(0)):(s(0),a(0)):e.length>0&&(s(0),a(0)),i(!1)},x=()=>{o!==null?o>0?(s(o-1),a(0)):(s(e.length-1),a(0)):e.length>0&&(s(e.length-1),a(0)),i(!1)},k=()=>{o!==null&&e[o]&&l+1<e[o].videoId.length&&(v(_=>({..._,[`${o}-${l}`]:!0})),a(l+1)),i(!1)},A=()=>{o!==null&&e[o]&&l>0&&a(l-1),i(!1)},N=()=>{f(_=>!_)},C=()=>{s(null),a(0),b(!1),f(!1)},M=_=>{const H=_.currentTarget.getBoundingClientRect(),L=_.clientX-H.left,j=H.width;L<j/2?A():k()},S=()=>{i(!r)},E=(_,H=65)=>_.length>H?{truncated:_.slice(0,H)+"...",hasMore:!0}:{truncated:_,hasMore:!1};return y.jsx(y.Fragment,{children:y.jsxs("div",{className:"storiesHeader",children:[y.jsx("div",{className:"outer",children:e.map((_,H)=>y.jsx("div",{onClick:()=>u(H),className:`inner ${o===H?"active":""} ${_.videoId.some((L,j)=>g[`${H}-${j}`])?"played":"not-played"}`,children:y.jsx("img",{src:_.campaignPhoto,alt:"Campaign",className:"campaign-photo",loading:"lazy"})},H))}),y.jsxs("div",{className:`topp ${o!==null?"active":""}`,children:[y.jsx("div",{className:"next",onClick:h,children:y.jsx(ie,{icon:Lo})}),y.jsx("div",{className:"previous",onClick:x,children:y.jsx(ie,{icon:Do})}),y.jsx("div",{className:"outer-box",children:o!==null&&y.jsxs("div",{className:"boxed-video",children:[y.jsx("div",{className:"mute-unmute",onClick:N,children:c?y.jsx(ie,{icon:_o}):y.jsx(ie,{icon:Oo})}),y.jsx("div",{className:"close-button",onClick:C,children:y.jsx(ie,{className:"close",icon:jo})}),y.jsx("div",{className:"progress-bar",children:e[o].videoId.map((_,H)=>y.jsx("div",{className:"progress",children:y.jsx("div",{className:"progress1",style:{width:`${H===l?p:g[`${o}-${H}`]?100:0}%`}})},H))}),y.jsx("video",{className:"boxed-video",ref:n,playsInline:!0,onClick:M,onEnded:d,autoPlay:!0,children:"Your browser does not support the video tag."}),y.jsxs("div",{className:"bookdiv",children:[y.jsx("div",{className:"img1",children:y.jsx("img",{className:"img",src:e[o].campaignPhoto,alt:"Campaign",loading:"lazy"})}),y.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[y.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[o].campaignName}),y.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[r?e[o].campaignDetails:E(e[o].campaignDetails,65).truncated,E(e[o].campaignDetails,65).hasMore&&y.jsx("div",{children:y.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:S,children:r?" View Less":" View More"})})]}),y.jsxs("div",{className:"bottom-div",children:[" ",((z=(P=e[o])==null?void 0:P.offerPrice)==null?void 0:z.currency)&&((B=(F=e[o])==null?void 0:F.offerPrice)==null?void 0:B.price)&&y.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From",e[o].offerPrice.currency," ",e[o].offerPrice.price]}),y.jsx("div",{className:"divbtn",children:y.jsx("a",{href:e[o].campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]})]})]})})]})]})})};function V0(){T.useState([]);const[e,t]=T.useState([]);T.useState("");const[n,r]=T.useState(!0);return T.useEffect(()=>{const o=document.getElementById("root-stories").dataset.campaignId;o?(async l=>{try{const c=await(await fetch(`https://widgetapi.tripbuilder.in/${l}`)).json();t(c.campaigns)}catch(a){console.error("Error fetching data:",a)}})(o):console.log("no campaign id found!")},[]),T.useEffect(()=>{e.length>0&&r(!1)},[e]),y.jsxs("div",{className:"App1",children:[y.jsx("style",{children:`
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
}`}),y.jsx(B0,{campaigns:e,loading:n})]})}function Dc(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Za(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:Dc(t[n])&&Dc(e[n])&&Object.keys(t[n]).length>0&&Za(e[n],t[n])})}const Vp={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function tr(){const e=typeof document<"u"?document:{};return Za(e,Vp),e}const $0={document:Vp,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Re(){const e=typeof window<"u"?window:{};return Za(e,$0),e}function H0(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function G0(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Vl(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function po(){return Date.now()}function U0(e){const t=Re();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function W0(e,t){t===void 0&&(t="x");const n=Re();let r,i,o;const s=U0(e);return n.WebKitCSSMatrix?(i=s.transform||s.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Ei(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Y0(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function ze(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!Y0(r)){const i=Object.keys(Object(r)).filter(o=>t.indexOf(o)<0);for(let o=0,s=i.length;o<s;o+=1){const l=i[o],a=Object.getOwnPropertyDescriptor(r,l);a!==void 0&&a.enumerable&&(Ei(e[l])&&Ei(r[l])?r[l].__swiper__?e[l]=r[l]:ze(e[l],r[l]):!Ei(e[l])&&Ei(r[l])?(e[l]={},r[l].__swiper__?e[l]=r[l]:ze(e[l],r[l])):e[l]=r[l])}}}return e}function bi(e,t,n){e.style.setProperty(t,n)}function $p(e){let{swiper:t,targetPosition:n,side:r}=e;const i=Re(),o=-t.translate;let s=null,l;const a=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=n>o?"next":"prev",f=(m,g)=>c==="next"&&m>=g||c==="prev"&&m<=g,p=()=>{l=new Date().getTime(),s===null&&(s=l);const m=Math.max(Math.min((l-s)/a,1),0),g=.5-Math.cos(m*Math.PI)/2;let v=o+g*(n-o);if(f(v,n)&&(v=n),t.wrapperEl.scrollTo({[r]:v}),f(v,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:v})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(p)};p()}function Ja(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function ot(e,t){return t===void 0&&(t=""),[...e.children].filter(n=>n.matches(t))}function mo(e){try{console.warn(e);return}catch{}}function Qr(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:H0(t)),n}function Q0(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function X0(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Mt(e,t){return Re().getComputedStyle(e,null).getPropertyValue(t)}function ho(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Hp(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function $l(e,t,n){const r=Re();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function ce(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Gp(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=ot(e.el,`.${r[i]}`)[0];o||(o=Qr("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}function K0(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function o(v){let w;return v&&typeof v=="string"&&t.isElement&&(w=t.el.querySelector(v),w)?w:(v&&(typeof v=="string"&&(w=[...document.querySelectorAll(v)]),t.params.uniqueNavElements&&typeof v=="string"&&w&&w.length>1&&t.el.querySelectorAll(v).length===1?w=t.el.querySelector(v):w&&w.length===1&&(w=w[0])),v&&!w?v:w)}function s(v,w){const b=t.params.navigation;v=ce(v),v.forEach(u=>{u&&(u.classList[w?"add":"remove"](...b.disabledClass.split(" ")),u.tagName==="BUTTON"&&(u.disabled=w),t.params.watchOverflow&&t.enabled&&u.classList[t.isLocked?"add":"remove"](b.lockClass))})}function l(){const{nextEl:v,prevEl:w}=t.navigation;if(t.params.loop){s(w,!1),s(v,!1);return}s(w,t.isBeginning&&!t.params.rewind),s(v,t.isEnd&&!t.params.rewind)}function a(v){v.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(v){v.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function f(){const v=t.params.navigation;if(t.params.navigation=Gp(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(v.nextEl||v.prevEl))return;let w=o(v.nextEl),b=o(v.prevEl);Object.assign(t.navigation,{nextEl:w,prevEl:b}),w=ce(w),b=ce(b);const u=(d,h)=>{d&&d.addEventListener("click",h==="next"?c:a),!t.enabled&&d&&d.classList.add(...v.lockClass.split(" "))};w.forEach(d=>u(d,"next")),b.forEach(d=>u(d,"prev"))}function p(){let{nextEl:v,prevEl:w}=t.navigation;v=ce(v),w=ce(w);const b=(u,d)=>{u.removeEventListener("click",d==="next"?c:a),u.classList.remove(...t.params.navigation.disabledClass.split(" "))};v.forEach(u=>b(u,"next")),w.forEach(u=>b(u,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?g():(f(),l())}),r("toEdge fromEdge lock unlock",()=>{l()}),r("destroy",()=>{p()}),r("enable disable",()=>{let{nextEl:v,prevEl:w}=t.navigation;if(v=ce(v),w=ce(w),t.enabled){l();return}[...v,...w].filter(b=>!!b).forEach(b=>b.classList.add(t.params.navigation.lockClass))}),r("click",(v,w)=>{let{nextEl:b,prevEl:u}=t.navigation;b=ce(b),u=ce(u);const d=w.target;let h=u.includes(d)||b.includes(d);if(t.isElement&&!h){const x=w.path||w.composedPath&&w.composedPath();x&&(h=x.find(k=>b.includes(k)||u.includes(k)))}if(t.params.navigation.hideOnClick&&!h){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===d||t.pagination.el.contains(d)))return;let x;b.length?x=b[0].classList.contains(t.params.navigation.hiddenClass):u.length&&(x=u[0].classList.contains(t.params.navigation.hiddenClass)),i(x===!0?"navigationShow":"navigationHide"),[...b,...u].filter(k=>!!k).forEach(k=>k.classList.toggle(t.params.navigation.hiddenClass))}});const m=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),f(),l()},g=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(t.navigation,{enable:m,disable:g,update:l,init:f,destroy:p})}function cr(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function q0(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:u=>u,formatFractionTotal:u=>u,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),t.pagination={el:null,bullets:[]};let s,l=0;function a(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function c(u,d){const{bulletActiveClass:h}=t.params.pagination;u&&(u=u[`${d==="prev"?"previous":"next"}ElementSibling`],u&&(u.classList.add(`${h}-${d}`),u=u[`${d==="prev"?"previous":"next"}ElementSibling`],u&&u.classList.add(`${h}-${d}-${d}`)))}function f(u){const d=u.target.closest(cr(t.params.pagination.bulletClass));if(!d)return;u.preventDefault();const h=ho(d)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===h)return;t.slideToLoop(h)}else t.slideTo(h)}function p(){const u=t.rtl,d=t.params.pagination;if(a())return;let h=t.pagination.el;h=ce(h);let x,k;const A=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,N=t.params.loop?Math.ceil(A/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(k=t.previousRealIndex||0,x=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(x=t.snapIndex,k=t.previousSnapIndex):(k=t.previousIndex||0,x=t.activeIndex||0),d.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const C=t.pagination.bullets;let M,S,E;if(d.dynamicBullets&&(s=$l(C[0],t.isHorizontal()?"width":"height"),h.forEach(P=>{P.style[t.isHorizontal()?"width":"height"]=`${s*(d.dynamicMainBullets+4)}px`}),d.dynamicMainBullets>1&&k!==void 0&&(l+=x-(k||0),l>d.dynamicMainBullets-1?l=d.dynamicMainBullets-1:l<0&&(l=0)),M=Math.max(x-l,0),S=M+(Math.min(C.length,d.dynamicMainBullets)-1),E=(S+M)/2),C.forEach(P=>{const z=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(F=>`${d.bulletActiveClass}${F}`)].map(F=>typeof F=="string"&&F.includes(" ")?F.split(" "):F).flat();P.classList.remove(...z)}),h.length>1)C.forEach(P=>{const z=ho(P);z===x?P.classList.add(...d.bulletActiveClass.split(" ")):t.isElement&&P.setAttribute("part","bullet"),d.dynamicBullets&&(z>=M&&z<=S&&P.classList.add(...`${d.bulletActiveClass}-main`.split(" ")),z===M&&c(P,"prev"),z===S&&c(P,"next"))});else{const P=C[x];if(P&&P.classList.add(...d.bulletActiveClass.split(" ")),t.isElement&&C.forEach((z,F)=>{z.setAttribute("part",F===x?"bullet-active":"bullet")}),d.dynamicBullets){const z=C[M],F=C[S];for(let B=M;B<=S;B+=1)C[B]&&C[B].classList.add(...`${d.bulletActiveClass}-main`.split(" "));c(z,"prev"),c(F,"next")}}if(d.dynamicBullets){const P=Math.min(C.length,d.dynamicMainBullets+4),z=(s*P-s)/2-E*s,F=u?"right":"left";C.forEach(B=>{B.style[t.isHorizontal()?F:"top"]=`${z}px`})}}h.forEach((C,M)=>{if(d.type==="fraction"&&(C.querySelectorAll(cr(d.currentClass)).forEach(S=>{S.textContent=d.formatFractionCurrent(x+1)}),C.querySelectorAll(cr(d.totalClass)).forEach(S=>{S.textContent=d.formatFractionTotal(N)})),d.type==="progressbar"){let S;d.progressbarOpposite?S=t.isHorizontal()?"vertical":"horizontal":S=t.isHorizontal()?"horizontal":"vertical";const E=(x+1)/N;let P=1,z=1;S==="horizontal"?P=E:z=E,C.querySelectorAll(cr(d.progressbarFillClass)).forEach(F=>{F.style.transform=`translate3d(0,0,0) scaleX(${P}) scaleY(${z})`,F.style.transitionDuration=`${t.params.speed}ms`})}d.type==="custom"&&d.renderCustom?(C.innerHTML=d.renderCustom(t,x+1,N),M===0&&i("paginationRender",C)):(M===0&&i("paginationRender",C),i("paginationUpdate",C)),t.params.watchOverflow&&t.enabled&&C.classList[t.isLocked?"add":"remove"](d.lockClass)})}function m(){const u=t.params.pagination;if(a())return;const d=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let h=t.pagination.el;h=ce(h);let x="";if(u.type==="bullets"){let k=t.params.loop?Math.ceil(d/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&k>d&&(k=d);for(let A=0;A<k;A+=1)u.renderBullet?x+=u.renderBullet.call(t,A,u.bulletClass):x+=`<${u.bulletElement} ${t.isElement?'part="bullet"':""} class="${u.bulletClass}"></${u.bulletElement}>`}u.type==="fraction"&&(u.renderFraction?x=u.renderFraction.call(t,u.currentClass,u.totalClass):x=`<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`),u.type==="progressbar"&&(u.renderProgressbar?x=u.renderProgressbar.call(t,u.progressbarFillClass):x=`<span class="${u.progressbarFillClass}"></span>`),t.pagination.bullets=[],h.forEach(k=>{u.type!=="custom"&&(k.innerHTML=x||""),u.type==="bullets"&&t.pagination.bullets.push(...k.querySelectorAll(cr(u.bulletClass)))}),u.type!=="custom"&&i("paginationRender",h[0])}function g(){t.params.pagination=Gp(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const u=t.params.pagination;if(!u.el)return;let d;typeof u.el=="string"&&t.isElement&&(d=t.el.querySelector(u.el)),!d&&typeof u.el=="string"&&(d=[...document.querySelectorAll(u.el)]),d||(d=u.el),!(!d||d.length===0)&&(t.params.uniqueNavElements&&typeof u.el=="string"&&Array.isArray(d)&&d.length>1&&(d=[...t.el.querySelectorAll(u.el)],d.length>1&&(d=d.filter(h=>Hp(h,".swiper")[0]===t.el)[0])),Array.isArray(d)&&d.length===1&&(d=d[0]),Object.assign(t.pagination,{el:d}),d=ce(d),d.forEach(h=>{u.type==="bullets"&&u.clickable&&h.classList.add(...(u.clickableClass||"").split(" ")),h.classList.add(u.modifierClass+u.type),h.classList.add(t.isHorizontal()?u.horizontalClass:u.verticalClass),u.type==="bullets"&&u.dynamicBullets&&(h.classList.add(`${u.modifierClass}${u.type}-dynamic`),l=0,u.dynamicMainBullets<1&&(u.dynamicMainBullets=1)),u.type==="progressbar"&&u.progressbarOpposite&&h.classList.add(u.progressbarOppositeClass),u.clickable&&h.addEventListener("click",f),t.enabled||h.classList.add(u.lockClass)}))}function v(){const u=t.params.pagination;if(a())return;let d=t.pagination.el;d&&(d=ce(d),d.forEach(h=>{h.classList.remove(u.hiddenClass),h.classList.remove(u.modifierClass+u.type),h.classList.remove(t.isHorizontal()?u.horizontalClass:u.verticalClass),u.clickable&&(h.classList.remove(...(u.clickableClass||"").split(" ")),h.removeEventListener("click",f))})),t.pagination.bullets&&t.pagination.bullets.forEach(h=>h.classList.remove(...u.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const u=t.params.pagination;let{el:d}=t.pagination;d=ce(d),d.forEach(h=>{h.classList.remove(u.horizontalClass,u.verticalClass),h.classList.add(t.isHorizontal()?u.horizontalClass:u.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?b():(g(),m(),p())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&p()}),r("snapIndexChange",()=>{p()}),r("snapGridLengthChange",()=>{m(),p()}),r("destroy",()=>{v()}),r("enable disable",()=>{let{el:u}=t.pagination;u&&(u=ce(u),u.forEach(d=>d.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{p()}),r("click",(u,d)=>{const h=d.target,x=ce(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&x&&x.length>0&&!h.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&h===t.navigation.nextEl||t.navigation.prevEl&&h===t.navigation.prevEl))return;const k=x[0].classList.contains(t.params.pagination.hiddenClass);i(k===!0?"paginationShow":"paginationHide"),x.forEach(A=>A.classList.toggle(t.params.pagination.hiddenClass))}});const w=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:u}=t.pagination;u&&(u=ce(u),u.forEach(d=>d.classList.remove(t.params.pagination.paginationDisabledClass))),g(),m(),p()},b=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:u}=t.pagination;u&&(u=ce(u),u.forEach(d=>d.classList.add(t.params.pagination.paginationDisabledClass))),v()};Object.assign(t.pagination,{enable:w,disable:b,render:m,update:p,init:g,destroy:v})}function Z0(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:o,overwriteParams:s,perspective:l,recreateShadows:a,getEffectParams:c}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),l&&l()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const p=s?s():{};Object.assign(n.params,p),Object.assign(n.originalParams,p)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(p,m)=>{n.params.effect===t&&o(m)}),r("transitionEnd",()=>{if(n.params.effect===t&&a){if(!c||!c().slideShadows)return;n.slides.forEach(p=>{p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(m=>m.remove())}),a()}});let f;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(f=!0),requestAnimationFrame(()=>{f&&n.slides&&n.slides.length&&(i(),f=!1)}))})}function J0(e,t){const n=Ja(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function Fc(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,i=Ja(t);let o=i.querySelector(`.${r.split(" ").join(".")}`);return o||(o=Qr("div",r.split(" ")),i.append(o)),o}function e1(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Z0({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:s,height:l,slides:a,slidesSizesGrid:c}=t,f=t.params.coverflowEffect,p=t.isHorizontal(),m=t.translate,g=p?-m+s/2:-m+l/2,v=p?f.rotate:-f.rotate,w=f.depth;for(let b=0,u=a.length;b<u;b+=1){const d=a[b],h=c[b],x=d.swiperSlideOffset,k=(g-x-h/2)/h,A=typeof f.modifier=="function"?f.modifier(k):k*f.modifier;let N=p?v*A:0,C=p?0:v*A,M=-w*Math.abs(A),S=f.stretch;typeof S=="string"&&S.indexOf("%")!==-1&&(S=parseFloat(f.stretch)/100*h);let E=p?0:S*A,P=p?S*A:0,z=1-(1-f.scale)*Math.abs(A);Math.abs(P)<.001&&(P=0),Math.abs(E)<.001&&(E=0),Math.abs(M)<.001&&(M=0),Math.abs(N)<.001&&(N=0),Math.abs(C)<.001&&(C=0),Math.abs(z)<.001&&(z=0),t.browser&&t.browser.need3dFix&&(Math.abs(N)/90%2===1&&(N+=.001),Math.abs(C)/90%2===1&&(C+=.001));const F=`translate3d(${P}px,${E}px,${M}px)  rotateX(${C}deg) rotateY(${N}deg) scale(${z})`,B=J0(f,d);if(B.style.transform=F,d.style.zIndex=-Math.abs(Math.round(A))+1,f.slideShadows){let _=p?d.querySelector(".swiper-slide-shadow-left"):d.querySelector(".swiper-slide-shadow-top"),H=p?d.querySelector(".swiper-slide-shadow-right"):d.querySelector(".swiper-slide-shadow-bottom");_||(_=Fc("coverflow",d,p?"left":"top")),H||(H=Fc("coverflow",d,p?"right":"bottom")),_&&(_.style.opacity=A>0?A:0),H&&(H.style.opacity=-A>0?-A:0)}}},setTransition:s=>{t.slides.map(a=>Ja(a)).forEach(a=>{a.style.transitionDuration=`${s}ms`,a.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${s}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}let Ss;function t1(){const e=Re(),t=tr();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Up(){return Ss||(Ss=t1()),Ss}let Es;function n1(e){let{userAgent:t}=e===void 0?{}:e;const n=Up(),r=Re(),i=r.navigator.platform,o=t||r.navigator.userAgent,s={ios:!1,android:!1},l=r.screen.width,a=r.screen.height,c=o.match(/(Android);?[\s\/]+([\d.]+)?/);let f=o.match(/(iPad).*OS\s([\d_]+)/);const p=o.match(/(iPod)(.*OS\s([\d_]+))?/),m=!f&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=i==="Win32";let v=i==="MacIntel";const w=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&v&&n.touch&&w.indexOf(`${l}x${a}`)>=0&&(f=o.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),v=!1),c&&!g&&(s.os="android",s.android=!0),(f||m||p)&&(s.os="ios",s.ios=!0),s}function Wp(e){return e===void 0&&(e={}),Es||(Es=n1(e)),Es}let bs;function r1(){const e=Re(),t=Wp();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[a,c]=l.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));n=a<16||a===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),s=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:s,isWebView:i}}function i1(){return bs||(bs=r1()),bs}function o1(e){let{swiper:t,on:n,emit:r}=e;const i=Re();let o=null,s=null;const l=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},a=()=>{!t||t.destroyed||!t.initialized||(o=new ResizeObserver(p=>{s=i.requestAnimationFrame(()=>{const{width:m,height:g}=t;let v=m,w=g;p.forEach(b=>{let{contentBoxSize:u,contentRect:d,target:h}=b;h&&h!==t.el||(v=d?d.width:(u[0]||u).inlineSize,w=d?d.height:(u[0]||u).blockSize)}),(v!==m||w!==g)&&l()})}),o.observe(t.el))},c=()=>{s&&i.cancelAnimationFrame(s),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},f=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){a();return}i.addEventListener("resize",l),i.addEventListener("orientationchange",f)}),n("destroy",()=>{c(),i.removeEventListener("resize",l),i.removeEventListener("orientationchange",f)})}function s1(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o=[],s=Re(),l=function(f,p){p===void 0&&(p={});const m=s.MutationObserver||s.WebkitMutationObserver,g=new m(v=>{if(t.__preventObserver__)return;if(v.length===1){i("observerUpdate",v[0]);return}const w=function(){i("observerUpdate",v[0])};s.requestAnimationFrame?s.requestAnimationFrame(w):s.setTimeout(w,0)});g.observe(f,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:typeof p.childList>"u"?!0:p.childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),o.push(g)},a=()=>{if(t.params.observer){if(t.params.observeParents){const f=Hp(t.hostEl);for(let p=0;p<f.length;p+=1)l(f[p])}l(t.hostEl,{childList:t.params.observeSlideChildren}),l(t.wrapperEl,{attributes:!1})}},c=()=>{o.forEach(f=>{f.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",a),r("destroy",c)}var l1={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];t.apply(r,s)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return typeof o[0]=="string"||Array.isArray(o[0])?(t=o[0],n=o.slice(1,o.length),r=e):(t=o[0].events,n=o[0].data,r=o[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(a=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(r,[a,...n])}),e.eventsListeners&&e.eventsListeners[a]&&e.eventsListeners[a].forEach(c=>{c.apply(r,n)})}),e}};function a1(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Mt(r,"padding-left")||0,10)-parseInt(Mt(r,"padding-right")||0,10),n=n-parseInt(Mt(r,"padding-top")||0,10)-parseInt(Mt(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function u1(){const e=this;function t(S,E){return parseFloat(S.getPropertyValue(e.getDirectionLabel(E))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:o,rtlTranslate:s,wrongRTL:l}=e,a=e.virtual&&n.virtual.enabled,c=a?e.virtual.slides.length:e.slides.length,f=ot(i,`.${e.params.slideClass}, swiper-slide`),p=a?e.virtual.slides.length:f.length;let m=[];const g=[],v=[];let w=n.slidesOffsetBefore;typeof w=="function"&&(w=n.slidesOffsetBefore.call(e));let b=n.slidesOffsetAfter;typeof b=="function"&&(b=n.slidesOffsetAfter.call(e));const u=e.snapGrid.length,d=e.slidesGrid.length;let h=n.spaceBetween,x=-w,k=0,A=0;if(typeof o>"u")return;typeof h=="string"&&h.indexOf("%")>=0?h=parseFloat(h.replace("%",""))/100*o:typeof h=="string"&&(h=parseFloat(h)),e.virtualSize=-h,f.forEach(S=>{s?S.style.marginLeft="":S.style.marginRight="",S.style.marginBottom="",S.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(bi(r,"--swiper-centered-offset-before",""),bi(r,"--swiper-centered-offset-after",""));const N=n.grid&&n.grid.rows>1&&e.grid;N?e.grid.initSlides(f):e.grid&&e.grid.unsetSlides();let C;const M=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(S=>typeof n.breakpoints[S].slidesPerView<"u").length>0;for(let S=0;S<p;S+=1){C=0;let E;if(f[S]&&(E=f[S]),N&&e.grid.updateSlide(S,E,f),!(f[S]&&Mt(E,"display")==="none")){if(n.slidesPerView==="auto"){M&&(f[S].style[e.getDirectionLabel("width")]="");const P=getComputedStyle(E),z=E.style.transform,F=E.style.webkitTransform;if(z&&(E.style.transform="none"),F&&(E.style.webkitTransform="none"),n.roundLengths)C=e.isHorizontal()?$l(E,"width"):$l(E,"height");else{const B=t(P,"width"),_=t(P,"padding-left"),H=t(P,"padding-right"),L=t(P,"margin-left"),j=t(P,"margin-right"),R=P.getPropertyValue("box-sizing");if(R&&R==="border-box")C=B+L+j;else{const{clientWidth:J,offsetWidth:se}=E;C=B+_+H+L+j+(se-J)}}z&&(E.style.transform=z),F&&(E.style.webkitTransform=F),n.roundLengths&&(C=Math.floor(C))}else C=(o-(n.slidesPerView-1)*h)/n.slidesPerView,n.roundLengths&&(C=Math.floor(C)),f[S]&&(f[S].style[e.getDirectionLabel("width")]=`${C}px`);f[S]&&(f[S].swiperSlideSize=C),v.push(C),n.centeredSlides?(x=x+C/2+k/2+h,k===0&&S!==0&&(x=x-o/2-h),S===0&&(x=x-o/2-h),Math.abs(x)<1/1e3&&(x=0),n.roundLengths&&(x=Math.floor(x)),A%n.slidesPerGroup===0&&m.push(x),g.push(x)):(n.roundLengths&&(x=Math.floor(x)),(A-Math.min(e.params.slidesPerGroupSkip,A))%e.params.slidesPerGroup===0&&m.push(x),g.push(x),x=x+C+h),e.virtualSize+=C+h,k=C,A+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+b,s&&l&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+h}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+h}px`),N&&e.grid.updateWrapperSize(C,m),!n.centeredSlides){const S=[];for(let E=0;E<m.length;E+=1){let P=m[E];n.roundLengths&&(P=Math.floor(P)),m[E]<=e.virtualSize-o&&S.push(P)}m=S,Math.floor(e.virtualSize-o)-Math.floor(m[m.length-1])>1&&m.push(e.virtualSize-o)}if(a&&n.loop){const S=v[0]+h;if(n.slidesPerGroup>1){const E=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),P=S*n.slidesPerGroup;for(let z=0;z<E;z+=1)m.push(m[m.length-1]+P)}for(let E=0;E<e.virtual.slidesBefore+e.virtual.slidesAfter;E+=1)n.slidesPerGroup===1&&m.push(m[m.length-1]+S),g.push(g[g.length-1]+S),e.virtualSize+=S}if(m.length===0&&(m=[0]),h!==0){const S=e.isHorizontal()&&s?"marginLeft":e.getDirectionLabel("marginRight");f.filter((E,P)=>!n.cssMode||n.loop?!0:P!==f.length-1).forEach(E=>{E.style[S]=`${h}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let S=0;v.forEach(P=>{S+=P+(h||0)}),S-=h;const E=S-o;m=m.map(P=>P<=0?-w:P>E?E+b:P)}if(n.centerInsufficientSlides){let S=0;v.forEach(P=>{S+=P+(h||0)}),S-=h;const E=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(S+E<o){const P=(o-S-E)/2;m.forEach((z,F)=>{m[F]=z-P}),g.forEach((z,F)=>{g[F]=z+P})}}if(Object.assign(e,{slides:f,snapGrid:m,slidesGrid:g,slidesSizesGrid:v}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){bi(r,"--swiper-centered-offset-before",`${-m[0]}px`),bi(r,"--swiper-centered-offset-after",`${e.size/2-v[v.length-1]/2}px`);const S=-e.snapGrid[0],E=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(P=>P+S),e.slidesGrid=e.slidesGrid.map(P=>P+E)}if(p!==c&&e.emit("slidesLengthChange"),m.length!==u&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==d&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!a&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const S=`${n.containerModifierClass}backface-hidden`,E=e.el.classList.contains(S);p<=n.maxBackfaceHiddenSlides?E||e.el.classList.add(S):E&&e.el.classList.remove(S)}}function c1(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const s=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(s(l))}else n.push(s(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function d1(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Rc=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function f1(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let s=-e;i&&(s=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let a=0;a<r.length;a+=1){const c=r[a];let f=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(f-=r[0].swiperSlideOffset);const p=(s+(n.centeredSlides?t.minTranslate():0)-f)/(c.swiperSlideSize+l),m=(s-o[0]+(n.centeredSlides?t.minTranslate():0)-f)/(c.swiperSlideSize+l),g=-(s-f),v=g+t.slidesSizesGrid[a],w=g>=0&&g<=t.size-t.slidesSizesGrid[a],b=g>=0&&g<t.size-1||v>1&&v<=t.size||g<=0&&v>=t.size;b&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(a)),Rc(c,b,n.slideVisibleClass),Rc(c,w,n.slideFullyVisibleClass),c.progress=i?-p:p,c.originalProgress=i?-m:m}}function p1(e){const t=this;if(typeof e>"u"){const f=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*f||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:s,progressLoop:l}=t;const a=o,c=s;if(r===0)i=0,o=!0,s=!0;else{i=(e-t.minTranslate())/r;const f=Math.abs(e-t.minTranslate())<1,p=Math.abs(e-t.maxTranslate())<1;o=f||i<=0,s=p||i>=1,f&&(i=0),p&&(i=1)}if(n.loop){const f=t.getSlideIndexByData(0),p=t.getSlideIndexByData(t.slides.length-1),m=t.slidesGrid[f],g=t.slidesGrid[p],v=t.slidesGrid[t.slidesGrid.length-1],w=Math.abs(e);w>=m?l=(w-m)/v:l=(w+v-g)/v,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:s}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!a&&t.emit("reachBeginning toEdge"),s&&!c&&t.emit("reachEnd toEdge"),(a&&!o||c&&!s)&&t.emit("fromEdge"),t.emit("progress",i)}const ks=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function m1(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,s=e.grid&&n.grid&&n.grid.rows>1,l=p=>ot(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];let a,c,f;if(o)if(n.loop){let p=i-e.virtual.slidesBefore;p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),a=l(`[data-swiper-slide-index="${p}"]`)}else a=l(`[data-swiper-slide-index="${i}"]`);else s?(a=t.filter(p=>p.column===i)[0],f=t.filter(p=>p.column===i+1)[0],c=t.filter(p=>p.column===i-1)[0]):a=t[i];a&&(s||(f=X0(a,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!f&&(f=t[0]),c=Q0(a,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(p=>{ks(p,p===a,n.slideActiveClass),ks(p,p===f,n.slideNextClass),ks(p,p===c,n.slidePrevClass)}),e.emitSlidesClasses()}const Fi=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},Cs=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Hl=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const s=i,l=[s-t];l.push(...Array.from({length:t}).map((a,c)=>s+r+c)),e.slides.forEach((a,c)=>{l.includes(a.column)&&Cs(e,c)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let s=i-t;s<=o+t;s+=1){const l=(s%n+n)%n;(l<i||l>o)&&Cs(e,l)}else for(let s=Math.max(i-t,0);s<=Math.min(o+t,n-1);s+=1)s!==i&&(s>o||s<i)&&Cs(e,s)};function h1(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function g1(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:s,snapIndex:l}=t;let a=e,c;const f=g=>{let v=g-t.virtual.slidesBefore;return v<0&&(v=t.virtual.slides.length+v),v>=t.virtual.slides.length&&(v-=t.virtual.slides.length),v};if(typeof a>"u"&&(a=h1(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const g=Math.min(i.slidesPerGroupSkip,a);c=g+Math.floor((a-g)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),a===o&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(a===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=f(a);return}const p=t.grid&&i.grid&&i.grid.rows>1;let m;if(t.virtual&&i.virtual.enabled&&i.loop)m=f(a);else if(p){const g=t.slides.filter(w=>w.column===a)[0];let v=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(v)&&(v=Math.max(t.slides.indexOf(g),0)),m=Math.floor(v/i.grid.rows)}else if(t.slides[a]){const g=t.slides[a].getAttribute("data-swiper-slide-index");g?m=parseInt(g,10):m=a}else m=a;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:s,realIndex:m,previousIndex:o,activeIndex:a}),t.initialized&&Hl(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(s!==m&&t.emit("realIndexChange"),t.emit("slideChange"))}function v1(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,s;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,s=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=s;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var y1={updateSize:a1,updateSlides:u1,updateAutoHeight:c1,updateSlidesOffset:d1,updateSlidesProgress:f1,updateProgress:p1,updateSlidesClasses:m1,updateActiveIndex:g1,updateClickedSlide:v1};function w1(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let s=W0(o,e);return s+=t.cssOverflowAdjustment(),r&&(s=-s),s||0}function x1(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:s}=n;let l=0,a=0;const c=0;n.isHorizontal()?l=r?-e:e:a=e,i.roundLengths&&(l=Math.floor(l),a=Math.floor(a)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:a,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-a:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():a-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${a}px, ${c}px)`);let f;const p=n.maxTranslate()-n.minTranslate();p===0?f=0:f=(e-n.minTranslate())/p,f!==s&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function S1(){return-this.snapGrid[0]}function E1(){return-this.snapGrid[this.snapGrid.length-1]}function b1(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const o=this,{params:s,wrapperEl:l}=o;if(o.animating&&s.preventInteractionOnTransition)return!1;const a=o.minTranslate(),c=o.maxTranslate();let f;if(r&&e>a?f=a:r&&e<c?f=c:f=e,o.updateProgress(f),s.cssMode){const p=o.isHorizontal();if(t===0)l[p?"scrollLeft":"scrollTop"]=-f;else{if(!o.support.smoothScroll)return $p({swiper:o,targetPosition:-f,side:p?"left":"top"}),!0;l.scrollTo({[p?"left":"top"]:-f,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(f),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(f),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(m){!o||o.destroyed||m.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var k1={getTranslate:w1,setTranslate:x1,minTranslate:S1,maxTranslate:E1,translateTo:b1};function C1(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Yp(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:o,previousIndex:s}=t;let l=r;if(l||(o>s?l="next":o<s?l="prev":l="reset"),t.emit(`transition${i}`),n&&o!==s){if(l==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),l==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function P1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Yp({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function A1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Yp({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var T1={setTransition:C1,transitionStart:P1,transitionEnd:A1};function N1(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;let s=e;s<0&&(s=0);const{params:l,snapGrid:a,slidesGrid:c,previousIndex:f,activeIndex:p,rtlTranslate:m,wrapperEl:g,enabled:v}=o;if(!v&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const w=Math.min(o.params.slidesPerGroupSkip,s);let b=w+Math.floor((s-w)/o.params.slidesPerGroup);b>=a.length&&(b=a.length-1);const u=-a[b];if(l.normalizeSlideIndex)for(let h=0;h<c.length;h+=1){const x=-Math.floor(u*100),k=Math.floor(c[h]*100),A=Math.floor(c[h+1]*100);typeof c[h+1]<"u"?x>=k&&x<A-(A-k)/2?s=h:x>=k&&x<A&&(s=h+1):x>=k&&(s=h)}if(o.initialized&&s!==p&&(!o.allowSlideNext&&(m?u>o.translate&&u>o.minTranslate():u<o.translate&&u<o.minTranslate())||!o.allowSlidePrev&&u>o.translate&&u>o.maxTranslate()&&(p||0)!==s))return!1;s!==(f||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(u);let d;if(s>p?d="next":s<p?d="prev":d="reset",m&&-u===o.translate||!m&&u===o.translate)return o.updateActiveIndex(s),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(u),d!=="reset"&&(o.transitionStart(n,d),o.transitionEnd(n,d)),!1;if(l.cssMode){const h=o.isHorizontal(),x=m?u:-u;if(t===0){const k=o.virtual&&o.params.virtual.enabled;k&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),k&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[h?"scrollLeft":"scrollTop"]=x})):g[h?"scrollLeft":"scrollTop"]=x,k&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1})}else{if(!o.support.smoothScroll)return $p({swiper:o,targetPosition:x,side:h?"left":"top"}),!0;g.scrollTo({[h?"left":"top"]:x,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(u),o.updateActiveIndex(s),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,d),t===0?o.transitionEnd(n,d):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(x){!o||o.destroyed||x.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,d))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function z1(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let s=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)s=s+i.virtual.slidesBefore;else{let l;if(o){const m=s*i.params.grid.rows;l=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===m)[0].column}else l=i.getSlideIndexByData(s);const a=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c}=i.params;let f=i.params.slidesPerView;f==="auto"?f=i.slidesPerViewDynamic():(f=Math.ceil(parseFloat(i.params.slidesPerView,10)),c&&f%2===0&&(f=f+1));let p=a-l<f;if(c&&(p=p||l<Math.ceil(f/2)),r&&c&&i.params.slidesPerView!=="auto"&&!o&&(p=!1),p){const m=c?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:m,slideTo:!0,activeSlideIndex:m==="next"?l+1:l-a+1,slideRealIndex:m==="next"?i.realIndex:void 0})}if(o){const m=s*i.params.grid.rows;s=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===m)[0].column}else s=i.getSlideIndexByData(s)}return requestAnimationFrame(()=>{i.slideTo(s,t,n,r)}),i}function I1(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:o,animating:s}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const a=r.activeIndex<o.slidesPerGroupSkip?1:l,c=r.virtual&&o.virtual.enabled;if(o.loop){if(s&&!c&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+a,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+a,e,t,n)}function M1(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:o,slidesGrid:s,rtlTranslate:l,enabled:a,animating:c}=r;if(!a||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const f=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!f&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=l?r.translate:-r.translate;function m(u){return u<0?-Math.floor(Math.abs(u)):Math.floor(u)}const g=m(p),v=o.map(u=>m(u));let w=o[v.indexOf(g)-1];if(typeof w>"u"&&i.cssMode){let u;o.forEach((d,h)=>{g>=d&&(u=h)}),typeof u<"u"&&(w=o[u>0?u-1:u])}let b=0;if(typeof w<"u"&&(b=s.indexOf(w),b<0&&(b=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(b=b-r.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),i.rewind&&r.isBeginning){const u=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(u,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(b,e,t,n)}),!0;return r.slideTo(b,e,t,n)}function L1(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function O1(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const s=Math.min(i.params.slidesPerGroupSkip,o),l=s+Math.floor((o-s)/i.params.slidesPerGroup),a=i.rtlTranslate?i.translate:-i.translate;if(a>=i.snapGrid[l]){const c=i.snapGrid[l],f=i.snapGrid[l+1];a-c>(f-c)*r&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[l-1],f=i.snapGrid[l];a-c<=(f-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function _1(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,o;const s=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(ot(n,`${s}[data-swiper-slide-index="${o}"]`)[0]),Vl(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(ot(n,`${s}[data-swiper-slide-index="${o}"]`)[0]),Vl(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var j1={slideTo:N1,slideToLoop:z1,slideNext:I1,slidePrev:M1,slideReset:L1,slideToClosest:O1,slideToClickedSlide:_1};function D1(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{ot(r,`.${n.slideClass}, swiper-slide`).forEach((p,m)=>{p.setAttribute("data-swiper-slide-index",m)})},o=t.grid&&n.grid&&n.grid.rows>1,s=n.slidesPerGroup*(o?n.grid.rows:1),l=t.slides.length%s!==0,a=o&&t.slides.length%n.grid.rows!==0,c=f=>{for(let p=0;p<f;p+=1){const m=t.isElement?Qr("swiper-slide",[n.slideBlankClass]):Qr("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(m)}};if(l){if(n.loopAddBlankSlides){const f=s-t.slides.length%s;c(f),t.recalcSlides(),t.updateSlides()}else mo("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(a){if(n.loopAddBlankSlides){const f=n.grid.rows-t.slides.length%n.grid.rows;c(f),t.recalcSlides(),t.updateSlides()}else mo("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function F1(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:o,byController:s,byMousewheel:l}=e===void 0?{}:e;const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:c,allowSlidePrev:f,allowSlideNext:p,slidesEl:m,params:g}=a,{centeredSlides:v}=g;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&g.virtual.enabled){n&&(!g.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):g.centeredSlides&&a.snapIndex<g.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=f,a.allowSlideNext=p,a.emit("loopFix");return}let w=g.slidesPerView;w==="auto"?w=a.slidesPerViewDynamic():(w=Math.ceil(parseFloat(g.slidesPerView,10)),v&&w%2===0&&(w=w+1));const b=g.slidesPerGroupAuto?w:g.slidesPerGroup;let u=b;u%b!==0&&(u+=b-u%b),u+=g.loopAdditionalSlides,a.loopedSlides=u;const d=a.grid&&g.grid&&g.grid.rows>1;c.length<w+u?mo("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):d&&g.grid.fill==="row"&&mo("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const h=[],x=[];let k=a.activeIndex;typeof o>"u"?o=a.getSlideIndex(c.filter(z=>z.classList.contains(g.slideActiveClass))[0]):k=o;const A=r==="next"||!r,N=r==="prev"||!r;let C=0,M=0;const S=d?Math.ceil(c.length/g.grid.rows):c.length,P=(d?c[o].column:o)+(v&&typeof i>"u"?-w/2+.5:0);if(P<u){C=Math.max(u-P,b);for(let z=0;z<u-P;z+=1){const F=z-Math.floor(z/S)*S;if(d){const B=S-F-1;for(let _=c.length-1;_>=0;_-=1)c[_].column===B&&h.push(_)}else h.push(S-F-1)}}else if(P+w>S-u){M=Math.max(P-(S-u*2),b);for(let z=0;z<M;z+=1){const F=z-Math.floor(z/S)*S;d?c.forEach((B,_)=>{B.column===F&&x.push(_)}):x.push(F)}}if(a.__preventObserver__=!0,requestAnimationFrame(()=>{a.__preventObserver__=!1}),N&&h.forEach(z=>{c[z].swiperLoopMoveDOM=!0,m.prepend(c[z]),c[z].swiperLoopMoveDOM=!1}),A&&x.forEach(z=>{c[z].swiperLoopMoveDOM=!0,m.append(c[z]),c[z].swiperLoopMoveDOM=!1}),a.recalcSlides(),g.slidesPerView==="auto"?a.updateSlides():d&&(h.length>0&&N||x.length>0&&A)&&a.slides.forEach((z,F)=>{a.grid.updateSlide(F,z,a.slides)}),g.watchSlidesProgress&&a.updateSlidesOffset(),n){if(h.length>0&&N){if(typeof t>"u"){const z=a.slidesGrid[k],B=a.slidesGrid[k+C]-z;l?a.setTranslate(a.translate-B):(a.slideTo(k+Math.ceil(C),0,!1,!0),i&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-B,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-B))}else if(i){const z=d?h.length/g.grid.rows:h.length;a.slideTo(a.activeIndex+z,0,!1,!0),a.touchEventsData.currentTranslate=a.translate}}else if(x.length>0&&A)if(typeof t>"u"){const z=a.slidesGrid[k],B=a.slidesGrid[k-M]-z;l?a.setTranslate(a.translate-B):(a.slideTo(k-M,0,!1,!0),i&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-B,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-B))}else{const z=d?x.length/g.grid.rows:x.length;a.slideTo(a.activeIndex-z,0,!1,!0)}}if(a.allowSlidePrev=f,a.allowSlideNext=p,a.controller&&a.controller.control&&!s){const z={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(F=>{!F.destroyed&&F.params.loop&&F.loopFix({...z,slideTo:F.params.slidesPerView===g.slidesPerView?n:!1})}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix({...z,slideTo:a.controller.control.params.slidesPerView===g.slidesPerView?n:!1})}a.emit("loopFix")}function R1(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var B1={loopCreate:D1,loopFix:F1,loopDestroy:R1};function V1(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function $1(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var H1={setGrabCursor:V1,unsetGrabCursor:$1};function G1(e,t){t===void 0&&(t=this);function n(r){if(!r||r===tr()||r===Re())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Bc(e,t,n){const r=Re(),{params:i}=e,o=i.edgeSwipeDetection,s=i.edgeSwipeThreshold;return o&&(n<=s||n>=r.innerWidth-s)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function U1(e){const t=this,n=tr();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Bc(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:s,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let a=r.target;if(o.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(a)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",f=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&f&&(a=f[0]);const p=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,m=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(m?G1(p,a):a.closest(p))){t.allowClick=!0;return}if(o.swipeHandler&&!a.closest(o.swipeHandler))return;s.currentX=r.pageX,s.currentY=r.pageY;const g=s.currentX,v=s.currentY;if(!Bc(t,r,g))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=g,s.startY=v,i.touchStartTime=po(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let w=!0;a.matches(i.focusableElements)&&(w=!1,a.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==a&&n.activeElement.blur();const b=w&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||b)&&!a.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function W1(e){const t=tr(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:s,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let a=e;if(a.originalEvent&&(a=a.originalEvent),a.type==="pointermove"&&(r.touchId!==null||a.pointerId!==r.pointerId))return;let c;if(a.type==="touchmove"){if(c=[...a.changedTouches].filter(A=>A.identifier===r.touchId)[0],!c||c.identifier!==r.touchId)return}else c=a;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",a);return}const f=c.pageX,p=c.pageY;if(a.preventedByNestedSwiper){o.startX=f,o.startY=p;return}if(!n.allowTouchMove){a.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:f,startY:p,currentX:f,currentY:p}),r.touchStartTime=po());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(p<o.startY&&n.translate<=n.maxTranslate()||p>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(f<o.startX&&n.translate<=n.maxTranslate()||f>o.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&a.target===t.activeElement&&a.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",a),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=f,o.currentY=p;const m=o.currentX-o.startX,g=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(m**2+g**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let A;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:m*m+g*g>=25&&(A=Math.atan2(Math.abs(g),Math.abs(m))*180/Math.PI,r.isScrolling=n.isHorizontal()?A>i.touchAngle:90-A>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",a),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||a.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&a.cancelable&&a.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&a.stopPropagation();let v=n.isHorizontal()?m:g,w=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(v=Math.abs(v)*(s?1:-1),w=Math.abs(w)*(s?1:-1)),o.diff=v,v*=i.touchRatio,s&&(v=-v,w=-w);const b=n.touchesDirection;n.swipeDirection=v>0?"prev":"next",n.touchesDirection=w>0?"prev":"next";const u=n.params.loop&&!i.cssMode,d=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(u&&d&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const A=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(A)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",a)}let h;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&b!==n.touchesDirection&&u&&d&&Math.abs(v)>=1){Object.assign(o,{startX:f,startY:p,currentX:f,currentY:p,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",a),r.isMoved=!0,r.currentTranslate=v+r.startTranslate;let x=!0,k=i.resistanceRatio;if(i.touchReleaseOnEdges&&(k=0),v>0?(u&&d&&!h&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(x=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+v)**k))):v<0&&(u&&d&&!h&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(x=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-v)**k))),x&&(a.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(v)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function Y1(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(k=>k.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:s,touches:l,rtlTranslate:a,slidesGrid:c,enabled:f}=t;if(!f||!s.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}s.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const p=po(),m=p-n.touchStartTime;if(t.allowClick){const k=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(k&&k[0]||r.target,k),t.emit("tap click",r),m<300&&p-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=po(),Vl(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let g;if(s.followFinger?g=a?t.translate:-t.translate:g=-n.currentTranslate,s.cssMode)return;if(s.freeMode&&s.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:g});return}const v=g>=-t.maxTranslate()&&!t.params.loop;let w=0,b=t.slidesSizesGrid[0];for(let k=0;k<c.length;k+=k<s.slidesPerGroupSkip?1:s.slidesPerGroup){const A=k<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;typeof c[k+A]<"u"?(v||g>=c[k]&&g<c[k+A])&&(w=k,b=c[k+A]-c[k]):(v||g>=c[k])&&(w=k,b=c[c.length-1]-c[c.length-2])}let u=null,d=null;s.rewind&&(t.isBeginning?d=s.virtual&&s.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(u=0));const h=(g-c[w])/b,x=w<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(m>s.longSwipesMs){if(!s.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(h>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?u:w+x):t.slideTo(w)),t.swipeDirection==="prev"&&(h>1-s.longSwipesRatio?t.slideTo(w+x):d!==null&&h<0&&Math.abs(h)>s.longSwipesRatio?t.slideTo(d):t.slideTo(w))}else{if(!s.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(w+x):t.slideTo(w):(t.swipeDirection==="next"&&t.slideTo(u!==null?u:w+x),t.swipeDirection==="prev"&&t.slideTo(d!==null?d:w))}}function Vc(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,s=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=s&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!s?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function Q1(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function X1(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function K1(e){const t=this;Fi(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function q1(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Qp=(e,t)=>{const n=tr(),{params:r,el:i,wrapperEl:o,device:s}=e,l=!!r.nested,a=t==="on"?"addEventListener":"removeEventListener",c=t;!i||typeof i=="string"||(n[a]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[a]("touchstart",e.onTouchStart,{passive:!1}),i[a]("pointerdown",e.onTouchStart,{passive:!1}),n[a]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[a]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[a]("touchend",e.onTouchEnd,{passive:!0}),n[a]("pointerup",e.onTouchEnd,{passive:!0}),n[a]("pointercancel",e.onTouchEnd,{passive:!0}),n[a]("touchcancel",e.onTouchEnd,{passive:!0}),n[a]("pointerout",e.onTouchEnd,{passive:!0}),n[a]("pointerleave",e.onTouchEnd,{passive:!0}),n[a]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[a]("click",e.onClick,!0),r.cssMode&&o[a]("scroll",e.onScroll),r.updateOnWindowResize?e[c](s.ios||s.android?"resize orientationchange observerUpdate":"resize observerUpdate",Vc,!0):e[c]("observerUpdate",Vc,!0),i[a]("load",e.onLoad,{capture:!0}))};function Z1(){const e=this,{params:t}=e;e.onTouchStart=U1.bind(e),e.onTouchMove=W1.bind(e),e.onTouchEnd=Y1.bind(e),e.onDocumentTouchStart=q1.bind(e),t.cssMode&&(e.onScroll=X1.bind(e)),e.onClick=Q1.bind(e),e.onLoad=K1.bind(e),Qp(e,"on")}function J1(){Qp(this,"off")}var ey={attachEvents:Z1,detachEvents:J1};const $c=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function ty(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const s=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!s||e.currentBreakpoint===s)return;const a=(s in o?o[s]:void 0)||e.originalParams,c=$c(e,r),f=$c(e,a),p=e.params.grabCursor,m=a.grabCursor,g=r.enabled;c&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(a.grid.fill&&a.grid.fill==="column"||!a.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!m?e.unsetGrabCursor():!p&&m&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(h=>{if(typeof a[h]>"u")return;const x=r[h]&&r[h].enabled,k=a[h]&&a[h].enabled;x&&!k&&e[h].disable(),!x&&k&&e[h].enable()});const v=a.direction&&a.direction!==r.direction,w=r.loop&&(a.slidesPerView!==r.slidesPerView||v),b=r.loop;v&&n&&e.changeDirection(),ze(e.params,a);const u=e.params.enabled,d=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),g&&!u?e.disable():!g&&u&&e.enable(),e.currentBreakpoint=s,e.emit("_beforeBreakpoint",a),n&&(w?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&d?(e.loopCreate(t),e.updateSlides()):b&&!d&&e.loopDestroy()),e.emit("breakpoint",a)}function ny(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=Re(),o=t==="window"?i.innerHeight:n.clientHeight,s=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const a=parseFloat(l.substr(1));return{value:o*a,point:l}}return{value:l,point:l}});s.sort((l,a)=>parseInt(l.value,10)-parseInt(a.value,10));for(let l=0;l<s.length;l+=1){const{point:a,value:c}=s[l];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=a):c<=n.clientWidth&&(r=a)}return r||"max"}var ry={setBreakpoint:ty,getBreakpoint:ny};function iy(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function oy(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,s=iy(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...s),i.classList.add(...t),e.emitContainerClasses()}function sy(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var ly={addClasses:oy,removeClasses:sy};function ay(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var uy={checkOverflow:ay},Gl={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function cy(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){ze(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){ze(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),ze(t,r)}}const Ps={eventsEmitter:l1,update:y1,translate:k1,transition:T1,slide:j1,loop:B1,grabCursor:H1,events:ey,breakpoints:ry,checkOverflow:uy,classes:ly},As={};let eu=class ut{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=ze({},n),t&&!n.el&&(n.el=t);const s=tr();if(n.el&&typeof n.el=="string"&&s.querySelectorAll(n.el).length>1){const f=[];return s.querySelectorAll(n.el).forEach(p=>{const m=ze({},n,{el:p});f.push(new ut(m))}),f}const l=this;l.__swiper__=!0,l.support=Up(),l.device=Wp({userAgent:n.userAgent}),l.browser=i1(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],n.modules&&Array.isArray(n.modules)&&l.modules.push(...n.modules);const a={};l.modules.forEach(f=>{f({params:n,swiper:l,extendParams:cy(n,a),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const c=ze({},Gl,a);return l.params=ze({},c,As,n),l.originalParams=ze({},l.params),l.passedParams=ze({},n),l.params&&l.params.on&&Object.keys(l.params.on).forEach(f=>{l.on(f,l.params.on[f])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=ot(n,`.${r.slideClass}, swiper-slide`),o=ho(i[0]);return ho(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=ot(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),s=(r.maxTranslate()-i)*t+i;r.translateTo(s,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:o,slidesGrid:s,slidesSizesGrid:l,size:a,activeIndex:c}=r;let f=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let p=o[c]?Math.ceil(o[c].swiperSlideSize):0,m;for(let g=c+1;g<o.length;g+=1)o[g]&&!m&&(p+=Math.ceil(o[g].swiperSlideSize),f+=1,p>a&&(m=!0));for(let g=c-1;g>=0;g-=1)o[g]&&!m&&(p+=o[g].swiperSlideSize,f+=1,p>a&&(m=!0))}else if(t==="current")for(let p=c+1;p<o.length;p+=1)(n?s[p]+l[p]-s[c]<a:s[p]-s[c]<a)&&(f+=1);else for(let p=c-1;p>=0;p-=1)s[c]-s[p]<a&&(f+=1);return f}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(s=>{s.complete&&Fi(t,s)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const s=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(s,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const s=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(s.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):ot(r,i())[0];return!s&&n.params.createElements&&(s=Qr("div",n.params.wrapperClass),r.append(s),ot(r,`.${n.params.slideClass}`).forEach(l=>{s.append(l)})),Object.assign(n,{el:r,wrapperEl:s,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:s,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Mt(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Mt(r,"direction")==="rtl"),wrongRTL:Mt(s,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Fi(n,o):o.addEventListener("load",s=>{Fi(n,s.target)})}),Hl(n),n.initialized=!0,Hl(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:o,wrapperEl:s,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),s&&s.removeAttribute("style"),l&&l.length&&l.forEach(a=>{a.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(a=>{r.off(a)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),G0(r)),r.destroyed=!0),null}static extendDefaults(t){ze(As,t)}static get extendedDefaults(){return As}static get defaults(){return Gl}static installModule(t){ut.prototype.__modules__||(ut.prototype.__modules__=[]);const n=ut.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>ut.installModule(n)),ut):(ut.installModule(t),ut)}};Object.keys(Ps).forEach(e=>{Object.keys(Ps[e]).forEach(t=>{eu.prototype[t]=Ps[e][t]})});eu.use([o1,s1]);const Xp=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function hn(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Bn(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:hn(t[r])&&hn(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Bn(e[r],t[r]):e[r]=t[r]})}function Kp(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function qp(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Zp(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Jp(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function dy(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function fy(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:o,prevEl:s,scrollbarEl:l,paginationEl:a}=e;const c=i.filter(M=>M!=="children"&&M!=="direction"&&M!=="wrapperClass"),{params:f,pagination:p,navigation:m,scrollbar:g,virtual:v,thumbs:w}=t;let b,u,d,h,x,k,A,N;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&f.thumbs&&!f.thumbs.swiper&&(b=!0),i.includes("controller")&&r.controller&&r.controller.control&&f.controller&&!f.controller.control&&(u=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||a)&&(f.pagination||f.pagination===!1)&&p&&!p.el&&(d=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||l)&&(f.scrollbar||f.scrollbar===!1)&&g&&!g.el&&(h=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||s)&&(r.navigation.nextEl||o)&&(f.navigation||f.navigation===!1)&&m&&!m.prevEl&&!m.nextEl&&(x=!0);const C=M=>{t[M]&&(t[M].destroy(),M==="navigation"?(t.isElement&&(t[M].prevEl.remove(),t[M].nextEl.remove()),f[M].prevEl=void 0,f[M].nextEl=void 0,t[M].prevEl=void 0,t[M].nextEl=void 0):(t.isElement&&t[M].el.remove(),f[M].el=void 0,t[M].el=void 0))};i.includes("loop")&&t.isElement&&(f.loop&&!r.loop?k=!0:!f.loop&&r.loop?A=!0:N=!0),c.forEach(M=>{if(hn(f[M])&&hn(r[M]))Object.assign(f[M],r[M]),(M==="navigation"||M==="pagination"||M==="scrollbar")&&"enabled"in r[M]&&!r[M].enabled&&C(M);else{const S=r[M];(S===!0||S===!1)&&(M==="navigation"||M==="pagination"||M==="scrollbar")?S===!1&&C(M):f[M]=r[M]}}),c.includes("controller")&&!u&&t.controller&&t.controller.control&&f.controller&&f.controller.control&&(t.controller.control=f.controller.control),i.includes("children")&&n&&v&&f.virtual.enabled?(v.slides=n,v.update(!0)):i.includes("virtual")&&v&&f.virtual.enabled&&(n&&(v.slides=n),v.update(!0)),i.includes("children")&&n&&f.loop&&(N=!0),b&&w.init()&&w.update(!0),u&&(t.controller.control=f.controller.control),d&&(t.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),a.part.add("pagination"),t.el.appendChild(a)),a&&(f.pagination.el=a),p.init(),p.render(),p.update()),h&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-scrollbar"),l.part.add("scrollbar"),t.el.appendChild(l)),l&&(f.scrollbar.el=l),g.init(),g.updateSize(),g.setTranslate()),x&&(t.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),o.innerHTML=t.hostEl.constructor.nextButtonSvg,o.part.add("button-next"),t.el.appendChild(o)),(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-prev"),s.innerHTML=t.hostEl.constructor.prevButtonSvg,s.part.add("button-prev"),t.el.appendChild(s))),o&&(f.navigation.nextEl=o),s&&(f.navigation.prevEl=s),m.init(),m.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(k||N)&&t.loopDestroy(),(A||N)&&t.loopCreate(),t.update()}function py(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};Bn(n,Gl),n._emitClasses=!0,n.init=!1;const o={},s=Xp.map(a=>a.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(a=>{typeof e[a]>"u"||(s.indexOf(a)>=0?hn(e[a])?(n[a]={},i[a]={},Bn(n[a],e[a]),Bn(i[a],e[a])):(n[a]=e[a],i[a]=e[a]):a.search(/on[A-Z]/)===0&&typeof e[a]=="function"?t?r[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:n.on[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:o[a]=e[a])}),["navigation","pagination","scrollbar"].forEach(a=>{n[a]===!0&&(n[a]={}),n[a]===!1&&delete n[a]}),{params:n,passedParams:i,rest:o,events:r}}function my(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:o,scrollbarEl:s,swiper:l}=e;Kp(t)&&r&&i&&(l.params.navigation.nextEl=r,l.originalParams.navigation.nextEl=r,l.params.navigation.prevEl=i,l.originalParams.navigation.prevEl=i),qp(t)&&o&&(l.params.pagination.el=o,l.originalParams.pagination.el=o),Zp(t)&&s&&(l.params.scrollbar.el=s,l.originalParams.scrollbar.el=s),l.init(n)}function hy(e,t,n,r,i){const o=[];if(!t)return o;const s=a=>{o.indexOf(a)<0&&o.push(a)};if(n&&r){const a=r.map(i),c=n.map(i);a.join("")!==c.join("")&&s("children"),r.length!==n.length&&s("children")}return Xp.filter(a=>a[0]==="_").map(a=>a.replace(/_/,"")).forEach(a=>{if(a in e&&a in t)if(hn(e[a])&&hn(t[a])){const c=Object.keys(e[a]),f=Object.keys(t[a]);c.length!==f.length?s(a):(c.forEach(p=>{e[a][p]!==t[a][p]&&s(a)}),f.forEach(p=>{e[a][p]!==t[a][p]&&s(a)}))}else e[a]!==t[a]&&s(a)}),o}const gy=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function go(){return go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},go.apply(this,arguments)}function em(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function tm(e){const t=[];return Q.Children.toArray(e).forEach(n=>{em(n)?t.push(n):n.props&&n.props.children&&tm(n.props.children).forEach(r=>t.push(r))}),t}function vy(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return Q.Children.toArray(e).forEach(r=>{if(em(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=tm(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function yy(e,t,n){if(!n)return null;const r=f=>{let p=f;return f<0?p=t.length+f:p>=t.length&&(p=p-t.length),p},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:s}=n,l=e.params.loop?-t.length:0,a=e.params.loop?t.length*2:t.length,c=[];for(let f=l;f<a;f+=1)f>=o&&f<=s&&c.push(t[r(f)]);return c.map((f,p)=>Q.cloneElement(f,{swiper:e,style:i,key:f.props.virtualIndex||f.key||`slide-${p}`}))}function Tr(e,t){return typeof window>"u"?T.useEffect(e,t):T.useLayoutEffect(e,t)}const Hc=T.createContext(null),wy=T.createContext(null),nm=T.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:o,onSwiper:s,...l}=e===void 0?{}:e,a=!1;const[c,f]=T.useState("swiper"),[p,m]=T.useState(null),[g,v]=T.useState(!1),w=T.useRef(!1),b=T.useRef(null),u=T.useRef(null),d=T.useRef(null),h=T.useRef(null),x=T.useRef(null),k=T.useRef(null),A=T.useRef(null),N=T.useRef(null),{params:C,passedParams:M,rest:S,events:E}=py(l),{slides:P,slots:z}=vy(o),F=()=>{v(!g)};Object.assign(C.on,{_containerClasses(j,R){f(R)}});const B=()=>{Object.assign(C.on,E),a=!0;const j={...C};if(delete j.wrapperClass,u.current=new eu(j),u.current.virtual&&u.current.params.virtual.enabled){u.current.virtual.slides=P;const R={cache:!1,slides:P,renderExternal:m,renderExternalUpdate:!1};Bn(u.current.params.virtual,R),Bn(u.current.originalParams.virtual,R)}};b.current||B(),u.current&&u.current.on("_beforeBreakpoint",F);const _=()=>{a||!E||!u.current||Object.keys(E).forEach(j=>{u.current.on(j,E[j])})},H=()=>{!E||!u.current||Object.keys(E).forEach(j=>{u.current.off(j,E[j])})};T.useEffect(()=>()=>{u.current&&u.current.off("_beforeBreakpoint",F)}),T.useEffect(()=>{!w.current&&u.current&&(u.current.emitSlidesClasses(),w.current=!0)}),Tr(()=>{if(t&&(t.current=b.current),!!b.current)return u.current.destroyed&&B(),my({el:b.current,nextEl:x.current,prevEl:k.current,paginationEl:A.current,scrollbarEl:N.current,swiper:u.current},C),s&&!u.current.destroyed&&s(u.current),()=>{u.current&&!u.current.destroyed&&u.current.destroy(!0,!1)}},[]),Tr(()=>{_();const j=hy(M,d.current,P,h.current,R=>R.key);return d.current=M,h.current=P,j.length&&u.current&&!u.current.destroyed&&fy({swiper:u.current,slides:P,passedParams:M,changedParams:j,nextEl:x.current,prevEl:k.current,scrollbarEl:N.current,paginationEl:A.current}),()=>{H()}}),Tr(()=>{gy(u.current)},[p]);function L(){return C.virtual?yy(u.current,P,p):P.map((j,R)=>Q.cloneElement(j,{swiper:u.current,swiperSlideIndex:R}))}return Q.createElement(r,go({ref:b,className:Jp(`${c}${n?` ${n}`:""}`)},S),Q.createElement(wy.Provider,{value:u.current},z["container-start"],Q.createElement(i,{className:dy(C.wrapperClass)},z["wrapper-start"],L(),z["wrapper-end"]),Kp(C)&&Q.createElement(Q.Fragment,null,Q.createElement("div",{ref:k,className:"swiper-button-prev"}),Q.createElement("div",{ref:x,className:"swiper-button-next"})),Zp(C)&&Q.createElement("div",{ref:N,className:"swiper-scrollbar"}),qp(C)&&Q.createElement("div",{ref:A,className:"swiper-pagination"}),z["container-end"]))});nm.displayName="Swiper";const Ul=T.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:o,zoom:s,lazy:l,virtualIndex:a,swiperSlideIndex:c,...f}=e===void 0?{}:e;const p=T.useRef(null),[m,g]=T.useState("swiper-slide"),[v,w]=T.useState(!1);function b(x,k,A){k===p.current&&g(A)}Tr(()=>{if(typeof c<"u"&&(p.current.swiperSlideIndex=c),t&&(t.current=p.current),!(!p.current||!o)){if(o.destroyed){m!=="swiper-slide"&&g("swiper-slide");return}return o.on("_slideClass",b),()=>{o&&o.off("_slideClass",b)}}}),Tr(()=>{o&&p.current&&!o.destroyed&&g(o.getSlideClasses(p.current))},[o]);const u={isActive:m.indexOf("swiper-slide-active")>=0,isVisible:m.indexOf("swiper-slide-visible")>=0,isPrev:m.indexOf("swiper-slide-prev")>=0,isNext:m.indexOf("swiper-slide-next")>=0},d=()=>typeof r=="function"?r(u):r,h=()=>{w(!0)};return Q.createElement(n,go({ref:p,className:Jp(`${m}${i?` ${i}`:""}`),"data-swiper-slide-index":a,onLoad:h},f),s&&Q.createElement(Hc.Provider,{value:u},Q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof s=="number"?s:void 0},d(),l&&!v&&Q.createElement("div",{className:"swiper-lazy-preloader"}))),!s&&Q.createElement(Hc.Provider,{value:u},d(),l&&!v&&Q.createElement("div",{className:"swiper-lazy-preloader"})))});Ul.displayName="SwiperSlide";const xy=()=>y.jsx("div",{className:"video-container123 skeleton-container",children:y.jsx("div",{className:"carousel-div123",children:y.jsx("p",{className:"txt2-123"})})}),Sy=({campaigns:e,loading:t,widgetsDiv:n})=>{const r=T.useRef(null);T.useRef([]),T.useState(!1);const[i,o]=T.useState(null),[s,l]=T.useState(!1),[a,c]=T.useState(!0),[f,p]=T.useState(null),m=u=>{o(u)},g=()=>{o(null)},v=()=>{r.current.scrollBy({left:-r.current.clientWidth,behavior:"smooth"})},w=()=>{r.current.scrollBy({left:r.current.clientWidth,behavior:"smooth"})},b=()=>{const u=r.current.scrollLeft,d=r.current.scrollWidth-r.current.clientWidth;l(u>70),c(u<d-70)};return T.useEffect(()=>{const u=r.current;return u.addEventListener("scroll",b),b(),()=>{u.removeEventListener("scroll",b)}},[]),y.jsx(y.Fragment,{children:y.jsxs("div",{className:"container",children:[y.jsx(nm,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:0,stretch:0,depth:100,modifier:2.5},modules:[e1,q0,K0],className:"swiper_container",children:t?Array.from({length:5}).map((u,d)=>y.jsx(Ul,{children:y.jsx(xy,{})},d)):e.map((u,d)=>{var h,x;return y.jsx(Ul,{onClick:()=>m(d),children:y.jsxs("div",{className:"video-container123",children:[y.jsx("div",{className:"inner-video-container123",onMouseEnter:()=>p(d),onMouseLeave:()=>p(null),onTouchStart:()=>p(d),onTouchEnd:()=>p(null)}),f===d?y.jsx("video",{src:u.videoId[0],loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"}):y.jsx("img",{className:"thumbnail",src:u.campaignPhoto,width:"300",height:"200",alt:"video thumbnail"}),n?y.jsxs("div",{className:"widgetsDivBookdiv123",children:[y.jsx("div",{className:"img1 widgetsDivImg1",children:y.jsx("img",{className:"img widgetsDivImg",src:u.campaignPhoto,alt:"Campaign"})}),y.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[y.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname widgetsDivHotelname",children:u.campaignName}),y.jsx("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer"}),y.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"widgetsDivOfferprice",children:["From ",u.offerPrice.currency," ",u.offerPrice.price]})]}),y.jsx("div",{className:"divbtn",children:y.jsx("a",{href:u.campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn widgetsDivBookbtn",children:"Book"})})]}):y.jsx("div",{className:"carousel-div123",children:y.jsxs("p",{className:"txt2-123",children:[(u==null?void 0:u.campaignName)&&y.jsxs(y.Fragment,{children:[u.campaignName," ",y.jsx("br",{})]}),((h=u==null?void 0:u.offerPrice)==null?void 0:h.currency)&&((x=u==null?void 0:u.offerPrice)==null?void 0:x.price)&&y.jsxs(y.Fragment,{children:["From ",u.offerPrice.currency," ",u.offerPrice.price]})]})})]})},d)})}),s&&y.jsx("button",{className:"nav-btn123",onClick:v,children:"<"}),y.jsx("div",{className:"carousel",ref:r}),a&&y.jsx("button",{className:"nav-btn123",onClick:w,children:">"}),i!==null&&y.jsx(Ey,{campaigns:e,currentIndex:i,onClose:g})]})})},Ey=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=T.useState(t),[o,s]=T.useState(0),[l,a]=T.useState({mutedAll:!1}),[c,f]=T.useState(!1),[p,m]=T.useState(!1),[g,v]=T.useState(!1),[w,b]=T.useState(!1),u=T.useRef([]);T.useRef(null);const d=T.useRef(null);T.useEffect(()=>{const S=()=>{if(document.visibilityState==="hidden"){const E=u.current[o];E&&!E.paused&&(E.pause(),f(!0),b(!0))}};return document.addEventListener("visibilitychange",S),()=>{document.removeEventListener("visibilitychange",S)}},[o]),T.useEffect(()=>{const S=new IntersectionObserver(E=>{E.forEach(P=>{const z=u.current.indexOf(P.target);P.isIntersecting?(P.target.play(),s(z),b(!1)):P.target.pause()})},{threshold:.5});return s(0),u.current.forEach(E=>{E&&S.observe(E)}),()=>{u.current.forEach(E=>{E&&S.unobserve(E)})}},[r]),T.useEffect(()=>{const S=u.current[o];S&&S.play()},[o]);const h=()=>{r!==null?r+1<e.length?(i(r+1),s(0)):(i(0),s(0)):e.length>0&&(i(0),s(0)),m(!1),v(!1)},x=()=>{r!==null?r>0?(i(r-1),s(0)):(i(e.length-1),s(0)):e.length>0&&(i(e.length-1),s(0)),m(!1),v(!1)},k=S=>{const E=u.current[S];E&&(E.paused?(E.play(),console.log("Playing")):(E.pause(),console.log("Paused")),f(E.paused),b(E.paused))},A=()=>{u.current.forEach(E=>{E.muted=!l.mutedAll}),a(E=>({mutedAll:!E.mutedAll}))},N=()=>{v(!g)},C=(S,E=65)=>S.length>E?{truncated:S.slice(0,E)+"...",hasMore:!0}:{truncated:S,hasMore:!1},M=S=>{console.log("Video ended, checking if animation should play");const E=e[r];if(S<E.videoId.length-1)console.log("Not the last video, playing animation"),m(!0),setTimeout(()=>{const P=u.current[S];P&&(P.currentTime=0,P.play()),m(!1)},1500);else{console.log("Last video, no animation, just restart");const P=u.current[S];P&&(P.currentTime=0,P.play())}};return T.useEffect(()=>{s(0),d.current&&(d.current.scrollTop=0)},[r]),T.useEffect(()=>{const S=()=>{m(!1),v(!1)},E=d.current;return E&&E.addEventListener("scroll",S),()=>{E&&E.removeEventListener("scroll",S)}},[]),y.jsxs("div",{className:"whole123",children:[y.jsx("div",{className:"prevbtn123",onClick:x,children:y.jsx(ie,{icon:Do})}),y.jsx("div",{className:"nextbtn123",onClick:h,children:y.jsx(ie,{icon:Lo})}),y.jsxs("div",{className:"reelsContainer",ref:d,children:[e[r].videoId.map((S,E)=>{var P,z,F,B;return y.jsx("div",{className:"reel",children:y.jsxs("div",{className:"video-container1",children:[y.jsx("div",{className:"closediv123",children:y.jsx("button",{className:"closebtn123",onClick:n,children:y.jsx(ie,{icon:jo})})}),y.jsx("div",{className:"functions",children:y.jsx(ie,{icon:l.mutedAll?_o:Oo,className:"volume123",onClick:A,style:{cursor:"pointer"}})}),y.jsx("video",{ref:_=>u.current[E]=_,src:S,className:"ad",loop:!1,playsInline:!0,controls:!1,autoPlay:E===o,onClick:()=>k(E),onPause:()=>{f(!0)},onPlay:()=>{f(!1)},onEnded:()=>M(E)}),c&&w&&y.jsx(ie,{icon:Ba,onClick:()=>k(E),className:"play-button123"}),y.jsxs("div",{className:"bookdiv123",children:[y.jsx("div",{className:"img1",children:y.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),y.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[y.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),y.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[g?e[r].campaignDetails:C(e[r].campaignDetails,65).truncated,C(e[r].campaignDetails,65).hasMore&&y.jsx("div",{children:y.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:N,children:g?" View Less":" View More"})})]}),y.jsxs("div",{className:"bottom-div",children:[" ",((z=(P=e[r])==null?void 0:P.offerPrice)==null?void 0:z.currency)&&((B=(F=e[r])==null?void 0:F.offerPrice)==null?void 0:B.price)&&y.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From",e[r].offerPrice.currency," ",e[r].offerPrice.price]}),y.jsx("div",{className:"divbtn",children:y.jsx("a",{href:e[r].campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]})]})]})},E)}),p&&y.jsx("dotlottie-player",{src:"https://lottie.host/9dbbaa88-603c-407f-a9d4-f40ef822c697/JKZJQpvfeR.json",background:"transparent",speed:"1",style:{width:"29vh",height:"29vh",position:"absolute",bottom:"0",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"34px",color:"white",zIndex:1e3},loop:!0,autoplay:!0})]})]})},by=()=>{const[e,t]=T.useState([]),[n,r]=T.useState([]),[i,o]=T.useState(!0),[s,l]=T.useState(!1);return T.useEffect(()=>{const a=document.getElementById("root-stack"),c=a.dataset.campaignId,f=a.dataset.widgetStatus;l(f==="true"),(async m=>{try{const v=await(await fetch(`https://widgetapi.tripbuilder.in/${m}`)).json(),w=v.campaigns.map(b=>b.videoId[0]);t(w),r(v.campaigns)}catch(g){console.error("Error fetching data:",g)}})(c)},[]),T.useEffect(()=>{n.length>0&&o(!1)},[n]),y.jsxs("div",{className:"App2",children:[" ",y.jsx("style",{children:`
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

`}),y.jsx(Sy,{videos:e,campaigns:n,loading:i,widgetsDiv:s})," "]})},ky=()=>y.jsx("div",{className:"video-container123 skeleton-container",children:y.jsx("div",{className:"video-content",children:y.jsx("p",{className:"txt2-123"})})}),Cy=({videos:e,campaigns:t,loading:n,widgetsDiv:r})=>{const i=T.useRef(null),[o,s]=T.useState(null),[l,a]=T.useState(null),c=w=>{s(w)},f=()=>{s(null)},p=()=>{i.current.scrollBy({left:-i.current.clientWidth,behavior:"smooth"})},m=()=>{i.current.scrollBy({left:i.current.clientWidth,behavior:"smooth"})},g=w=>{a(w)},v=()=>{a(null)};return n?y.jsx("div",{className:"carousel-container",children:y.jsx("div",{className:"carousel",children:Array.from({length:5}).map((w,b)=>y.jsx(ky,{},b))})}):y.jsxs("div",{className:"carousel-container",children:[y.jsx("button",{className:"nav-btn",onClick:p,children:"<"}),y.jsx("div",{className:"carousel",ref:i,children:t.map((w,b)=>{var u,d,h,x,k;return y.jsxs("div",{className:"video-container123",onClick:()=>c(b),onMouseEnter:()=>g(b),onMouseLeave:v,onTouchStart:()=>g(b),onTouchEnd:v,children:[l===b?y.jsx("video",{src:w.videoId[0],loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"}):y.jsx("img",{className:"thumbnail",src:w.campaignPhoto,width:"300",height:"200",alt:"video thumbnail"}),r?y.jsxs("div",{className:"widgetsDivBookdiv123",children:[y.jsx("div",{className:"img1 widgetsDivImg1",children:y.jsx("img",{className:"img widgetsDivImg",src:w.campaignPhoto,alt:"Campaign"})}),y.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[y.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname widgetsDivHotelname",children:w.campaignName}),y.jsx("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer"}),y.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"widgetsDivOfferprice",children:["From ",w.offerPrice.currency,w.offerPrice.price]})]}),y.jsx("div",{className:"divbtn",children:y.jsx("a",{href:w.campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn widgetsDivBookbtn",children:"Book"})})]}):y.jsx("div",{className:"video-content",children:y.jsxs("p",{className:"txt",children:[((u=t[b])==null?void 0:u.campaignName)&&y.jsxs(y.Fragment,{children:[t[b].campaignName,y.jsx("br",{})]}),((h=(d=t[b])==null?void 0:d.offerPrice)==null?void 0:h.currency)&&((k=(x=t[b])==null?void 0:x.offerPrice)==null?void 0:k.price)&&y.jsxs(y.Fragment,{children:["From ",t[b].offerPrice.currency," ",t[b].offerPrice.price]})]})})]},b)})}),y.jsx("button",{className:"nav-btn",onClick:m,children:">"}),o!==null&&y.jsx(Py,{campaigns:t,currentIndex:o,onClose:f})]})},Py=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=T.useState(t),[o,s]=T.useState(0),[l,a]=T.useState({mutedAll:!1}),[c,f]=T.useState(!1),[p,m]=T.useState(!1),[g,v]=T.useState(!1),[w,b]=T.useState(!1),u=T.useRef([]);T.useRef(null);const d=T.useRef(null);T.useEffect(()=>{const S=()=>{if(document.visibilityState==="hidden"){const E=u.current[o];E&&!E.paused&&(E.pause(),f(!0),b(!0))}};return document.addEventListener("visibilitychange",S),()=>{document.removeEventListener("visibilitychange",S)}},[o]),T.useEffect(()=>{const S=new IntersectionObserver(E=>{E.forEach(P=>{const z=u.current.indexOf(P.target);P.isIntersecting?(P.target.play(),s(z),b(!1)):P.target.pause()})},{threshold:.5});return s(0),u.current.forEach(E=>{E&&S.observe(E)}),()=>{u.current.forEach(E=>{E&&S.unobserve(E)})}},[r]),T.useEffect(()=>{const S=u.current[o];S&&S.play()},[o]);const h=()=>{r!==null?r+1<e.length?(i(r+1),s(0)):(i(0),s(0)):e.length>0&&(i(0),s(0)),m(!1),v(!1)},x=()=>{r!==null?r>0?(i(r-1),s(0)):(i(e.length-1),s(0)):e.length>0&&(i(e.length-1),s(0)),m(!1),v(!1)},k=S=>{const E=u.current[S];E&&(E.paused?(E.play(),console.log("Playing")):(E.pause(),console.log("Paused")),f(E.paused),b(E.paused))},A=()=>{u.current.forEach(E=>{E.muted=!l.mutedAll}),a(E=>({mutedAll:!E.mutedAll}))},N=()=>{v(!g)},C=(S,E=65)=>S.length>E?{truncated:S.slice(0,E)+"...",hasMore:!0}:{truncated:S,hasMore:!1},M=S=>{console.log("Video ended, checking if animation should play");const E=e[r];if(S<E.videoId.length-1)console.log("Not the last video, playing animation"),m(!0),setTimeout(()=>{const P=u.current[S];P&&(P.currentTime=0,P.play()),m(!1)},1500);else{console.log("Last video, no animation, just restart");const P=u.current[S];P&&(P.currentTime=0,P.play())}};return T.useEffect(()=>{s(0),d.current&&(d.current.scrollTop=0)},[r]),T.useEffect(()=>{const S=()=>{m(!1),v(!1)},E=d.current;return E&&E.addEventListener("scroll",S),()=>{E&&E.removeEventListener("scroll",S)}},[]),y.jsxs("div",{className:"whole123",children:[y.jsx("div",{className:"prevbtn123",onClick:x,children:y.jsx(ie,{icon:Do})}),y.jsx("div",{className:"nextbtn123",onClick:h,children:y.jsx(ie,{icon:Lo})}),y.jsxs("div",{className:"reelsContainer",ref:d,children:[e[r].videoId.map((S,E)=>{var P,z,F,B;return y.jsx("div",{className:"reel",children:y.jsxs("div",{className:"video-container1",children:[y.jsx("div",{className:"closediv123",children:y.jsx("button",{className:"closebtn123",onClick:n,children:y.jsx(ie,{icon:jo})})}),y.jsx("div",{className:"functions",children:y.jsx(ie,{icon:l.mutedAll?_o:Oo,className:"volume123",onClick:A,style:{cursor:"pointer"}})}),y.jsx("video",{ref:_=>u.current[E]=_,src:S,className:"ad",loop:!1,playsInline:!0,controls:!1,autoPlay:E===o,onClick:()=>k(E),onPause:()=>{f(!0)},onPlay:()=>{f(!1)},onEnded:()=>M(E)}),c&&w&&y.jsx(ie,{icon:Ba,onClick:()=>k(E),className:"play-button123"}),y.jsxs("div",{className:"bookdiv123",children:[y.jsx("div",{className:"img1",children:y.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),y.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[y.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),y.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[g?e[r].campaignDetails:C(e[r].campaignDetails,65).truncated,C(e[r].campaignDetails,65).hasMore&&y.jsx("div",{children:y.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:N,children:g?" View Less":" View More"})})]}),y.jsxs("div",{className:"bottom-div",children:[" ",((z=(P=e[r])==null?void 0:P.offerPrice)==null?void 0:z.currency)&&((B=(F=e[r])==null?void 0:F.offerPrice)==null?void 0:B.price)&&y.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From",e[r].offerPrice.currency," ",e[r].offerPrice.price]}),y.jsx("div",{className:"divbtn",children:y.jsx("a",{href:e[r].campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]})]})]})},E)}),p&&y.jsx("dotlottie-player",{src:"https://lottie.host/9dbbaa88-603c-407f-a9d4-f40ef822c697/JKZJQpvfeR.json",background:"transparent",speed:"1",style:{width:"29vh",height:"29vh",position:"absolute",bottom:"0",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"34px",color:"white",zIndex:1e3},loop:!0,autoplay:!0})]})]})},Ay=()=>{const[e,t]=T.useState([]),[n,r]=T.useState([]),[i,o]=T.useState(!0),[s,l]=T.useState(!1);return T.useEffect(()=>{const a=document.getElementById("root-carosole"),c=a.dataset.widgetStatus;l(c==="true");const f=a.dataset.campaignId;f?(async m=>{try{const v=await(await fetch(`https://widgetapi.tripbuilder.in/${m}`)).json(),w=v.campaigns.map(b=>b.videoId[0]);t(w),r(v.campaigns)}catch(g){console.error("Error fetching data:",g)}})(f):console.error("No campaign ID found")},[]),T.useEffect(()=>{n.length>0&&o(!1)},[n]),y.jsxs("div",{className:"App3",children:[y.jsx("style",{children:`
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

`}),y.jsx(Cy,{videos:e,campaigns:n,loading:i,widgetsDiv:s})," "]})},Ts=document.getElementById("root-stories"),Ns=document.getElementById("root-grid"),zs=document.getElementById("root-carosole"),Is=document.getElementById("root-stack");Ts&&Ts.dataset.name==="stories"&&Vn.createRoot(Ts).render(y.jsx(Q.StrictMode,{children:y.jsx(V0,{})}));Ns&&Ns.dataset.name==="grid"&&Vn.createRoot(Ns).render(y.jsx(Q.StrictMode,{children:y.jsx(R0,{})}));zs&&zs.dataset.name==="carosole"&&Vn.createRoot(zs).render(y.jsx(Q.StrictMode,{children:y.jsx(Ay,{})}));Is&&Is.dataset.name==="stack"&&Vn.createRoot(Is).render(y.jsx(Q.StrictMode,{children:y.jsx(by,{})}));
