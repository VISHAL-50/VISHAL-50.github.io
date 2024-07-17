(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Kc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qc={exports:{}},Ta={},Zc={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kr=Symbol.for("react.element"),sm=Symbol.for("react.portal"),lm=Symbol.for("react.fragment"),um=Symbol.for("react.strict_mode"),cm=Symbol.for("react.profiler"),fm=Symbol.for("react.provider"),dm=Symbol.for("react.context"),pm=Symbol.for("react.forward_ref"),mm=Symbol.for("react.suspense"),hm=Symbol.for("react.memo"),vm=Symbol.for("react.lazy"),su=Symbol.iterator;function gm(e){return e===null||typeof e!="object"?null:(e=su&&e[su]||e["@@iterator"],typeof e=="function"?e:null)}var Jc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ef=Object.assign,tf={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=tf,this.updater=n||Jc}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nf(){}nf.prototype=Qn.prototype;function Ys(e,t,n){this.props=e,this.context=t,this.refs=tf,this.updater=n||Jc}var Ws=Ys.prototype=new nf;Ws.constructor=Ys;ef(Ws,Qn.prototype);Ws.isPureReactComponent=!0;var lu=Array.isArray,rf=Object.prototype.hasOwnProperty,Xs={current:null},af={key:!0,ref:!0,__self:!0,__source:!0};function of(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)rf.call(t,r)&&!af.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Kr,type:e,key:a,ref:o,props:i,_owner:Xs.current}}function ym(e,t){return{$$typeof:Kr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kr}function wm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var uu=/\/+/g;function Xa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wm(""+e.key):t.toString(36)}function _i(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Kr:case sm:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Xa(o,0):r,lu(i)?(n="",e!=null&&(n=e.replace(uu,"$&/")+"/"),_i(i,t,n,"",function(c){return c})):i!=null&&(Qs(i)&&(i=ym(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(uu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",lu(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Xa(a,s);o+=_i(a,t,n,l,i)}else if(l=gm(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Xa(a,s++),o+=_i(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function oi(e,t,n){if(e==null)return e;var r=[],i=0;return _i(e,r,"","",function(a){return t.call(n,a,i++)}),r}function xm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},Li={transition:null},Sm={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Li,ReactCurrentOwner:Xs};function sf(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:oi,forEach:function(e,t,n){oi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oi(e,function(){t++}),t},toArray:function(e){return oi(e,function(t){return t})||[]},only:function(e){if(!Qs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=Qn;G.Fragment=lm;G.Profiler=cm;G.PureComponent=Ys;G.StrictMode=um;G.Suspense=mm;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sm;G.act=sf;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ef({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Xs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)rf.call(t,l)&&!af.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Kr,type:e.type,key:i,ref:a,props:r,_owner:o}};G.createContext=function(e){return e={$$typeof:dm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fm,_context:e},e.Consumer=e};G.createElement=of;G.createFactory=function(e){var t=of.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:pm,render:e}};G.isValidElement=Qs;G.lazy=function(e){return{$$typeof:vm,_payload:{_status:-1,_result:e},_init:xm}};G.memo=function(e,t){return{$$typeof:hm,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Li.transition;Li.transition={};try{e()}finally{Li.transition=t}};G.unstable_act=sf;G.useCallback=function(e,t){return Ce.current.useCallback(e,t)};G.useContext=function(e){return Ce.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};G.useEffect=function(e,t){return Ce.current.useEffect(e,t)};G.useId=function(){return Ce.current.useId()};G.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Ce.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};G.useRef=function(e){return Ce.current.useRef(e)};G.useState=function(e){return Ce.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Ce.current.useTransition()};G.version="18.3.1";Zc.exports=G;var _=Zc.exports;const q=Kc(_);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm=_,km=Symbol.for("react.element"),Em=Symbol.for("react.fragment"),Cm=Object.prototype.hasOwnProperty,Am=bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tm={key:!0,ref:!0,__self:!0,__source:!0};function lf(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Cm.call(t,r)&&!Tm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:km,type:e,key:a,ref:o,props:i,_owner:Am.current}}Ta.Fragment=Em;Ta.jsx=lf;Ta.jsxs=lf;qc.exports=Ta;var b=qc.exports,Ar={},uf={exports:{}},Re={},cf={exports:{}},ff={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,F){var $=L.length;L.push(F);e:for(;0<$;){var J=$-1>>>1,oe=L[J];if(0<i(oe,F))L[J]=F,L[$]=oe,$=J;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var F=L[0],$=L.pop();if($!==F){L[0]=$;e:for(var J=0,oe=L.length,ii=oe>>>1;J<ii;){var Qt=2*(J+1)-1,Wa=L[Qt],Kt=Qt+1,ai=L[Kt];if(0>i(Wa,$))Kt<oe&&0>i(ai,Wa)?(L[J]=ai,L[Kt]=$,J=Kt):(L[J]=Wa,L[Qt]=$,J=Qt);else if(Kt<oe&&0>i(ai,$))L[J]=ai,L[Kt]=$,J=Kt;else break e}}return F}function i(L,F){var $=L.sortIndex-F.sortIndex;return $!==0?$:L.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],c=[],f=1,p=null,h=3,v=!1,g=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var F=n(c);F!==null;){if(F.callback===null)r(c);else if(F.startTime<=L)r(c),F.sortIndex=F.expirationTime,t(l,F);else break;F=n(c)}}function w(L){if(y=!1,m(L),!g)if(n(l)!==null)g=!0,B(x);else{var F=n(c);F!==null&&ye(w,F.startTime-L)}}function x(L,F){g=!1,y&&(y=!1,u(C),C=-1),v=!0;var $=h;try{for(m(F),p=n(l);p!==null&&(!(p.expirationTime>F)||L&&!A());){var J=p.callback;if(typeof J=="function"){p.callback=null,h=p.priorityLevel;var oe=J(p.expirationTime<=F);F=e.unstable_now(),typeof oe=="function"?p.callback=oe:p===n(l)&&r(l),m(F)}else r(l);p=n(l)}if(p!==null)var ii=!0;else{var Qt=n(c);Qt!==null&&ye(w,Qt.startTime-F),ii=!1}return ii}finally{p=null,h=$,v=!1}}var E=!1,P=null,C=-1,T=5,k=-1;function A(){return!(e.unstable_now()-k<T)}function z(){if(P!==null){var L=e.unstable_now();k=L;var F=!0;try{F=P(!0,L)}finally{F?O():(E=!1,P=null)}}else E=!1}var O;if(typeof d=="function")O=function(){d(z)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,N=I.port2;I.port1.onmessage=z,O=function(){N.postMessage(null)}}else O=function(){S(z,0)};function B(L){P=L,E||(E=!0,O())}function ye(L,F){C=S(function(){L(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,B(x))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var $=h;h=F;try{return L()}finally{h=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var $=h;h=L;try{return F()}finally{h=$}},e.unstable_scheduleCallback=function(L,F,$){var J=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?J+$:J):$=J,L){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=$+oe,L={id:f++,callback:F,priorityLevel:L,startTime:$,expirationTime:oe,sortIndex:-1},$>J?(L.sortIndex=$,t(c,L),n(l)===null&&L===n(c)&&(y?(u(C),C=-1):y=!0,ye(w,$-J))):(L.sortIndex=oe,t(l,L),g||v||(g=!0,B(x))),L},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(L){var F=h;return function(){var $=h;h=F;try{return L.apply(this,arguments)}finally{h=$}}}})(ff);cf.exports=ff;var Pm=cf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm=_,je=Pm;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var df=new Set,Tr={};function hn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(Tr[e]=t,e=0;e<t.length;e++)df.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jo=Object.prototype.hasOwnProperty,Nm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cu={},fu={};function Im(e){return jo.call(fu,e)?!0:jo.call(cu,e)?!1:Nm.test(e)?fu[e]=!0:(cu[e]=!0,!1)}function Mm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Om(e,t,n,r){if(t===null||typeof t>"u"||Mm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ks=/[\-:]([a-z])/g;function qs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ks,qs);ge[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ks,qs);ge[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ks,qs);ge[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zs(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Om(t,n,i,r)&&(n=null),r||i===null?Im(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var bt=zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,si=Symbol.for("react.element"),yn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),Js=Symbol.for("react.strict_mode"),Ro=Symbol.for("react.profiler"),pf=Symbol.for("react.provider"),mf=Symbol.for("react.context"),el=Symbol.for("react.forward_ref"),Do=Symbol.for("react.suspense"),Fo=Symbol.for("react.suspense_list"),tl=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),hf=Symbol.for("react.offscreen"),du=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,Qa;function ur(e){if(Qa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qa=t&&t[1]||""}return`
`+Qa+e}var Ka=!1;function qa(e,t){if(!e||Ka)return"";Ka=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Ka=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ur(e):""}function _m(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=qa(e.type,!1),e;case 11:return e=qa(e.type.render,!1),e;case 1:return e=qa(e.type,!0),e;default:return""}}function $o(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case yn:return"Portal";case Ro:return"Profiler";case Js:return"StrictMode";case Do:return"Suspense";case Fo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mf:return(e.displayName||"Context")+".Consumer";case pf:return(e._context.displayName||"Context")+".Provider";case el:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tl:return t=e.displayName||null,t!==null?t:$o(e.type)||"Memo";case At:t=e._payload,e=e._init;try{return $o(e(t))}catch{}}return null}function Lm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $o(t);case 8:return t===Js?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jm(e){var t=vf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function li(e){e._valueTracker||(e._valueTracker=jm(e))}function gf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bo(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yf(e,t){t=t.checked,t!=null&&Zs(e,"checked",t,!1)}function Vo(e,t){yf(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Go(e,t.type,n):t.hasOwnProperty("defaultValue")&&Go(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Go(e,t,n){(t!=="number"||Qi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var cr=Array.isArray;function On(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ho(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(cr(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function wf(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ui,Sf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rm=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){Rm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function bf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function kf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Dm=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yo(e,t){if(t){if(Dm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function Wo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xo=null;function nl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qo=null,_n=null,Ln=null;function gu(e){if(e=Jr(e)){if(typeof Qo!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Ma(t),Qo(e.stateNode,e.type,t))}}function Ef(e){_n?Ln?Ln.push(e):Ln=[e]:_n=e}function Cf(){if(_n){var e=_n,t=Ln;if(Ln=_n=null,gu(e),t)for(e=0;e<t.length;e++)gu(t[e])}}function Af(e,t){return e(t)}function Tf(){}var Za=!1;function Pf(e,t,n){if(Za)return e(t,n);Za=!0;try{return Af(e,t,n)}finally{Za=!1,(_n!==null||Ln!==null)&&(Tf(),Cf())}}function zr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ma(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Ko=!1;if(ht)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Ko=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Ko=!1}function Fm(e,t,n,r,i,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var hr=!1,Ki=null,qi=!1,qo=null,$m={onError:function(e){hr=!0,Ki=e}};function Bm(e,t,n,r,i,a,o,s,l){hr=!1,Ki=null,Fm.apply($m,arguments)}function Vm(e,t,n,r,i,a,o,s,l){if(Bm.apply(this,arguments),hr){if(hr){var c=Ki;hr=!1,Ki=null}else throw Error(M(198));qi||(qi=!0,qo=c)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yu(e){if(vn(e)!==e)throw Error(M(188))}function Gm(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return yu(i),e;if(a===r)return yu(i),t;a=a.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function Nf(e){return e=Gm(e),e!==null?If(e):null}function If(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=If(e);if(t!==null)return t;e=e.sibling}return null}var Mf=je.unstable_scheduleCallback,wu=je.unstable_cancelCallback,Hm=je.unstable_shouldYield,Um=je.unstable_requestPaint,ae=je.unstable_now,Ym=je.unstable_getCurrentPriorityLevel,rl=je.unstable_ImmediatePriority,Of=je.unstable_UserBlockingPriority,Zi=je.unstable_NormalPriority,Wm=je.unstable_LowPriority,_f=je.unstable_IdlePriority,Pa=null,st=null;function Xm(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Pa,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:qm,Qm=Math.log,Km=Math.LN2;function qm(e){return e>>>=0,e===0?32:31-(Qm(e)/Km|0)|0}var ci=64,fi=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ji(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=fr(s):(a&=o,a!==0&&(r=fr(a)))}else o=n&~i,o!==0?r=fr(o):a!==0&&(r=fr(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),i=1<<n,r|=e[n],t&=~i;return r}function Zm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ze(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=Zm(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function Zo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Lf(){var e=ci;return ci<<=1,!(ci&4194240)&&(ci=64),e}function Ja(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function eh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ze(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function il(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function jf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Rf,al,Df,Ff,$f,Jo=!1,di=[],Ot=null,_t=null,Lt=null,Nr=new Map,Ir=new Map,Pt=[],th="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xu(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(t.pointerId)}}function nr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Jr(t),t!==null&&al(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function nh(e,t,n,r,i){switch(t){case"focusin":return Ot=nr(Ot,e,t,n,r,i),!0;case"dragenter":return _t=nr(_t,e,t,n,r,i),!0;case"mouseover":return Lt=nr(Lt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Nr.set(a,nr(Nr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Ir.set(a,nr(Ir.get(a)||null,e,t,n,r,i)),!0}return!1}function Bf(e){var t=Jt(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=zf(n),t!==null){e.blockedOn=t,$f(e.priority,function(){Df(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xo=r,n.target.dispatchEvent(r),Xo=null}else return t=Jr(n),t!==null&&al(t),e.blockedOn=n,!1;t.shift()}return!0}function Su(e,t,n){ji(e)&&n.delete(t)}function rh(){Jo=!1,Ot!==null&&ji(Ot)&&(Ot=null),_t!==null&&ji(_t)&&(_t=null),Lt!==null&&ji(Lt)&&(Lt=null),Nr.forEach(Su),Ir.forEach(Su)}function rr(e,t){e.blockedOn===t&&(e.blockedOn=null,Jo||(Jo=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,rh)))}function Mr(e){function t(i){return rr(i,e)}if(0<di.length){rr(di[0],e);for(var n=1;n<di.length;n++){var r=di[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&rr(Ot,e),_t!==null&&rr(_t,e),Lt!==null&&rr(Lt,e),Nr.forEach(t),Ir.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)Bf(n),n.blockedOn===null&&Pt.shift()}var jn=bt.ReactCurrentBatchConfig,ea=!0;function ih(e,t,n,r){var i=U,a=jn.transition;jn.transition=null;try{U=1,ol(e,t,n,r)}finally{U=i,jn.transition=a}}function ah(e,t,n,r){var i=U,a=jn.transition;jn.transition=null;try{U=4,ol(e,t,n,r)}finally{U=i,jn.transition=a}}function ol(e,t,n,r){if(ea){var i=es(e,t,n,r);if(i===null)uo(e,t,r,ta,n),xu(e,r);else if(nh(i,e,t,n,r))r.stopPropagation();else if(xu(e,r),t&4&&-1<th.indexOf(e)){for(;i!==null;){var a=Jr(i);if(a!==null&&Rf(a),a=es(e,t,n,r),a===null&&uo(e,t,r,ta,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else uo(e,t,r,null,n)}}var ta=null;function es(e,t,n,r){if(ta=null,e=nl(r),e=Jt(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ta=e,null}function Vf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ym()){case rl:return 1;case Of:return 4;case Zi:case Wm:return 16;case _f:return 536870912;default:return 16}default:return 16}}var Nt=null,sl=null,Ri=null;function Gf(){if(Ri)return Ri;var e,t=sl,n=t.length,r,i="value"in Nt?Nt.value:Nt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Ri=i.slice(e,1<r?1-r:void 0)}function Di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pi(){return!0}function bu(){return!1}function De(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?pi:bu,this.isPropagationStopped=bu,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=De(Kn),Zr=ne({},Kn,{view:0,detail:0}),oh=De(Zr),eo,to,ir,za=ne({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ul,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(eo=e.screenX-ir.screenX,to=e.screenY-ir.screenY):to=eo=0,ir=e),eo)},movementY:function(e){return"movementY"in e?e.movementY:to}}),ku=De(za),sh=ne({},za,{dataTransfer:0}),lh=De(sh),uh=ne({},Zr,{relatedTarget:0}),no=De(uh),ch=ne({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),fh=De(ch),dh=ne({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ph=De(dh),mh=ne({},Kn,{data:0}),Eu=De(mh),hh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gh[e])?!!t[e]:!1}function ul(){return yh}var wh=ne({},Zr,{key:function(e){if(e.key){var t=hh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ul,charCode:function(e){return e.type==="keypress"?Di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xh=De(wh),Sh=ne({},za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cu=De(Sh),bh=ne({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ul}),kh=De(bh),Eh=ne({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ch=De(Eh),Ah=ne({},za,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Th=De(Ah),Ph=[9,13,27,32],cl=ht&&"CompositionEvent"in window,vr=null;ht&&"documentMode"in document&&(vr=document.documentMode);var zh=ht&&"TextEvent"in window&&!vr,Hf=ht&&(!cl||vr&&8<vr&&11>=vr),Au=" ",Tu=!1;function Uf(e,t){switch(e){case"keyup":return Ph.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function Nh(e,t){switch(e){case"compositionend":return Yf(t);case"keypress":return t.which!==32?null:(Tu=!0,Au);case"textInput":return e=t.data,e===Au&&Tu?null:e;default:return null}}function Ih(e,t){if(xn)return e==="compositionend"||!cl&&Uf(e,t)?(e=Gf(),Ri=sl=Nt=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hf&&t.locale!=="ko"?null:t.data;default:return null}}var Mh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mh[e.type]:t==="textarea"}function Wf(e,t,n,r){Ef(r),t=na(t,"onChange"),0<t.length&&(n=new ll("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var gr=null,Or=null;function Oh(e){id(e,0)}function Na(e){var t=kn(e);if(gf(t))return e}function _h(e,t){if(e==="change")return t}var Xf=!1;if(ht){var ro;if(ht){var io="oninput"in document;if(!io){var zu=document.createElement("div");zu.setAttribute("oninput","return;"),io=typeof zu.oninput=="function"}ro=io}else ro=!1;Xf=ro&&(!document.documentMode||9<document.documentMode)}function Nu(){gr&&(gr.detachEvent("onpropertychange",Qf),Or=gr=null)}function Qf(e){if(e.propertyName==="value"&&Na(Or)){var t=[];Wf(t,Or,e,nl(e)),Pf(Oh,t)}}function Lh(e,t,n){e==="focusin"?(Nu(),gr=t,Or=n,gr.attachEvent("onpropertychange",Qf)):e==="focusout"&&Nu()}function jh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Na(Or)}function Rh(e,t){if(e==="click")return Na(t)}function Dh(e,t){if(e==="input"||e==="change")return Na(t)}function Fh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:Fh;function _r(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jo.call(t,i)||!et(e[i],t[i]))return!1}return!0}function Iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mu(e,t){var n=Iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Iu(n)}}function Kf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qf(){for(var e=window,t=Qi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qi(e.document)}return t}function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $h(e){var t=qf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kf(n.ownerDocument.documentElement,n)){if(r!==null&&fl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Mu(n,a);var o=Mu(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bh=ht&&"documentMode"in document&&11>=document.documentMode,Sn=null,ts=null,yr=null,ns=!1;function Ou(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ns||Sn==null||Sn!==Qi(r)||(r=Sn,"selectionStart"in r&&fl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yr&&_r(yr,r)||(yr=r,r=na(ts,"onSelect"),0<r.length&&(t=new ll("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function mi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bn={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionend:mi("Transition","TransitionEnd")},ao={},Zf={};ht&&(Zf=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function Ia(e){if(ao[e])return ao[e];if(!bn[e])return e;var t=bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zf)return ao[e]=t[n];return e}var Jf=Ia("animationend"),ed=Ia("animationiteration"),td=Ia("animationstart"),nd=Ia("transitionend"),rd=new Map,_u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){rd.set(e,t),hn(t,[e])}for(var oo=0;oo<_u.length;oo++){var so=_u[oo],Vh=so.toLowerCase(),Gh=so[0].toUpperCase()+so.slice(1);Yt(Vh,"on"+Gh)}Yt(Jf,"onAnimationEnd");Yt(ed,"onAnimationIteration");Yt(td,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(nd,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hh=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function Lu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vm(r,t,void 0,e),e.currentTarget=null}function id(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Lu(i,s,c),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Lu(i,s,c),a=l}}}if(qi)throw e=qo,qi=!1,qo=null,e}function W(e,t){var n=t[ss];n===void 0&&(n=t[ss]=new Set);var r=e+"__bubble";n.has(r)||(ad(t,e,2,!1),n.add(r))}function lo(e,t,n){var r=0;t&&(r|=4),ad(n,e,r,t)}var hi="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[hi]){e[hi]=!0,df.forEach(function(n){n!=="selectionchange"&&(Hh.has(n)||lo(n,!1,e),lo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hi]||(t[hi]=!0,lo("selectionchange",!1,t))}}function ad(e,t,n,r){switch(Vf(t)){case 1:var i=ih;break;case 4:i=ah;break;default:i=ol}n=i.bind(null,t,n,e),i=void 0,!Ko||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function uo(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Jt(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}Pf(function(){var c=a,f=nl(n),p=[];e:{var h=rd.get(e);if(h!==void 0){var v=ll,g=e;switch(e){case"keypress":if(Di(n)===0)break e;case"keydown":case"keyup":v=xh;break;case"focusin":g="focus",v=no;break;case"focusout":g="blur",v=no;break;case"beforeblur":case"afterblur":v=no;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=lh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=kh;break;case Jf:case ed:case td:v=fh;break;case nd:v=Ch;break;case"scroll":v=oh;break;case"wheel":v=Th;break;case"copy":case"cut":case"paste":v=ph;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Cu}var y=(t&4)!==0,S=!y&&e==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var d=c,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,u!==null&&(w=zr(d,u),w!=null&&y.push(jr(d,w,m)))),S)break;d=d.return}0<y.length&&(h=new v(h,g,null,n,f),p.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Xo&&(g=n.relatedTarget||n.fromElement)&&(Jt(g)||g[vt]))break e;if((v||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=c,g=g?Jt(g):null,g!==null&&(S=vn(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=c),v!==g)){if(y=ku,w="onMouseLeave",u="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=Cu,w="onPointerLeave",u="onPointerEnter",d="pointer"),S=v==null?h:kn(v),m=g==null?h:kn(g),h=new y(w,d+"leave",v,n,f),h.target=S,h.relatedTarget=m,w=null,Jt(f)===c&&(y=new y(u,d+"enter",g,n,f),y.target=m,y.relatedTarget=S,w=y),S=w,v&&g)t:{for(y=v,u=g,d=0,m=y;m;m=gn(m))d++;for(m=0,w=u;w;w=gn(w))m++;for(;0<d-m;)y=gn(y),d--;for(;0<m-d;)u=gn(u),m--;for(;d--;){if(y===u||u!==null&&y===u.alternate)break t;y=gn(y),u=gn(u)}y=null}else y=null;v!==null&&ju(p,h,v,y,!1),g!==null&&S!==null&&ju(p,S,g,y,!0)}}e:{if(h=c?kn(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var x=_h;else if(Pu(h))if(Xf)x=Dh;else{x=jh;var E=Lh}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=Rh);if(x&&(x=x(e,c))){Wf(p,x,n,f);break e}E&&E(e,h,c),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Go(h,"number",h.value)}switch(E=c?kn(c):window,e){case"focusin":(Pu(E)||E.contentEditable==="true")&&(Sn=E,ts=c,yr=null);break;case"focusout":yr=ts=Sn=null;break;case"mousedown":ns=!0;break;case"contextmenu":case"mouseup":case"dragend":ns=!1,Ou(p,n,f);break;case"selectionchange":if(Bh)break;case"keydown":case"keyup":Ou(p,n,f)}var P;if(cl)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else xn?Uf(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Hf&&n.locale!=="ko"&&(xn||C!=="onCompositionStart"?C==="onCompositionEnd"&&xn&&(P=Gf()):(Nt=f,sl="value"in Nt?Nt.value:Nt.textContent,xn=!0)),E=na(c,C),0<E.length&&(C=new Eu(C,e,null,n,f),p.push({event:C,listeners:E}),P?C.data=P:(P=Yf(n),P!==null&&(C.data=P)))),(P=zh?Nh(e,n):Ih(e,n))&&(c=na(c,"onBeforeInput"),0<c.length&&(f=new Eu("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=P))}id(p,t)})}function jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function na(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=zr(e,n),a!=null&&r.unshift(jr(e,a,i)),a=zr(e,t),a!=null&&r.push(jr(e,a,i))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ju(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,i?(l=zr(n,a),l!=null&&o.unshift(jr(n,l,s))):i||(l=zr(n,a),l!=null&&o.push(jr(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Uh=/\r\n?/g,Yh=/\u0000|\uFFFD/g;function Ru(e){return(typeof e=="string"?e:""+e).replace(Uh,`
`).replace(Yh,"")}function vi(e,t,n){if(t=Ru(t),Ru(e)!==t&&n)throw Error(M(425))}function ra(){}var rs=null,is=null;function as(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var os=typeof setTimeout=="function"?setTimeout:void 0,Wh=typeof clearTimeout=="function"?clearTimeout:void 0,Du=typeof Promise=="function"?Promise:void 0,Xh=typeof queueMicrotask=="function"?queueMicrotask:typeof Du<"u"?function(e){return Du.resolve(null).then(e).catch(Qh)}:os;function Qh(e){setTimeout(function(){throw e})}function co(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Mr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mr(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qn=Math.random().toString(36).slice(2),it="__reactFiber$"+qn,Rr="__reactProps$"+qn,vt="__reactContainer$"+qn,ss="__reactEvents$"+qn,Kh="__reactListeners$"+qn,qh="__reactHandles$"+qn;function Jt(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fu(e);e!==null;){if(n=e[it])return n;e=Fu(e)}return t}e=n,n=e.parentNode}return null}function Jr(e){return e=e[it]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Ma(e){return e[Rr]||null}var ls=[],En=-1;function Wt(e){return{current:e}}function Q(e){0>En||(e.current=ls[En],ls[En]=null,En--)}function Y(e,t){En++,ls[En]=e.current,e.current=t}var Vt={},be=Wt(Vt),ze=Wt(!1),sn=Vt;function Vn(e,t){var n=e.type.contextTypes;if(!n)return Vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function ia(){Q(ze),Q(be)}function $u(e,t,n){if(be.current!==Vt)throw Error(M(168));Y(be,t),Y(ze,n)}function od(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,Lm(e)||"Unknown",i));return ne({},n,r)}function aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,sn=be.current,Y(be,e),Y(ze,ze.current),!0}function Bu(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=od(e,t,sn),r.__reactInternalMemoizedMergedChildContext=e,Q(ze),Q(be),Y(be,e)):Q(ze),Y(ze,n)}var ft=null,Oa=!1,fo=!1;function sd(e){ft===null?ft=[e]:ft.push(e)}function Zh(e){Oa=!0,sd(e)}function Xt(){if(!fo&&ft!==null){fo=!0;var e=0,t=U;try{var n=ft;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,Oa=!1}catch(i){throw ft!==null&&(ft=ft.slice(e+1)),Mf(rl,Xt),i}finally{U=t,fo=!1}}return null}var Cn=[],An=0,oa=null,sa=0,Be=[],Ve=0,ln=null,dt=1,pt="";function qt(e,t){Cn[An++]=sa,Cn[An++]=oa,oa=e,sa=t}function ld(e,t,n){Be[Ve++]=dt,Be[Ve++]=pt,Be[Ve++]=ln,ln=e;var r=dt;e=pt;var i=32-Ze(r)-1;r&=~(1<<i),n+=1;var a=32-Ze(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dt=1<<32-Ze(t)+i|n<<i|r,pt=a+e}else dt=1<<a|n<<i|r,pt=e}function dl(e){e.return!==null&&(qt(e,1),ld(e,1,0))}function pl(e){for(;e===oa;)oa=Cn[--An],Cn[An]=null,sa=Cn[--An],Cn[An]=null;for(;e===ln;)ln=Be[--Ve],Be[Ve]=null,pt=Be[--Ve],Be[Ve]=null,dt=Be[--Ve],Be[Ve]=null}var Le=null,_e=null,Z=!1,Ke=null;function ud(e,t){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Vu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,_e=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ln!==null?{id:dt,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Le=e,_e=null,!0):!1;default:return!1}}function us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cs(e){if(Z){var t=_e;if(t){var n=t;if(!Vu(e,t)){if(us(e))throw Error(M(418));t=jt(n.nextSibling);var r=Le;t&&Vu(e,t)?ud(r,n):(e.flags=e.flags&-4097|2,Z=!1,Le=e)}}else{if(us(e))throw Error(M(418));e.flags=e.flags&-4097|2,Z=!1,Le=e}}}function Gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function gi(e){if(e!==Le)return!1;if(!Z)return Gu(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!as(e.type,e.memoizedProps)),t&&(t=_e)){if(us(e))throw cd(),Error(M(418));for(;t;)ud(e,t),t=jt(t.nextSibling)}if(Gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Le?jt(e.stateNode.nextSibling):null;return!0}function cd(){for(var e=_e;e;)e=jt(e.nextSibling)}function Gn(){_e=Le=null,Z=!1}function ml(e){Ke===null?Ke=[e]:Ke.push(e)}var Jh=bt.ReactCurrentBatchConfig;function ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hu(e){var t=e._init;return t(e._payload)}function fd(e){function t(u,d){if(e){var m=u.deletions;m===null?(u.deletions=[d],u.flags|=16):m.push(d)}}function n(u,d){if(!e)return null;for(;d!==null;)t(u,d),d=d.sibling;return null}function r(u,d){for(u=new Map;d!==null;)d.key!==null?u.set(d.key,d):u.set(d.index,d),d=d.sibling;return u}function i(u,d){return u=$t(u,d),u.index=0,u.sibling=null,u}function a(u,d,m){return u.index=m,e?(m=u.alternate,m!==null?(m=m.index,m<d?(u.flags|=2,d):m):(u.flags|=2,d)):(u.flags|=1048576,d)}function o(u){return e&&u.alternate===null&&(u.flags|=2),u}function s(u,d,m,w){return d===null||d.tag!==6?(d=wo(m,u.mode,w),d.return=u,d):(d=i(d,m),d.return=u,d)}function l(u,d,m,w){var x=m.type;return x===wn?f(u,d,m.props.children,w,m.key):d!==null&&(d.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===At&&Hu(x)===d.type)?(w=i(d,m.props),w.ref=ar(u,d,m),w.return=u,w):(w=Ui(m.type,m.key,m.props,null,u.mode,w),w.ref=ar(u,d,m),w.return=u,w)}function c(u,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=xo(m,u.mode,w),d.return=u,d):(d=i(d,m.children||[]),d.return=u,d)}function f(u,d,m,w,x){return d===null||d.tag!==7?(d=on(m,u.mode,w,x),d.return=u,d):(d=i(d,m),d.return=u,d)}function p(u,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=wo(""+d,u.mode,m),d.return=u,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case si:return m=Ui(d.type,d.key,d.props,null,u.mode,m),m.ref=ar(u,null,d),m.return=u,m;case yn:return d=xo(d,u.mode,m),d.return=u,d;case At:var w=d._init;return p(u,w(d._payload),m)}if(cr(d)||er(d))return d=on(d,u.mode,m,null),d.return=u,d;yi(u,d)}return null}function h(u,d,m,w){var x=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return x!==null?null:s(u,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case si:return m.key===x?l(u,d,m,w):null;case yn:return m.key===x?c(u,d,m,w):null;case At:return x=m._init,h(u,d,x(m._payload),w)}if(cr(m)||er(m))return x!==null?null:f(u,d,m,w,null);yi(u,m)}return null}function v(u,d,m,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return u=u.get(m)||null,s(d,u,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case si:return u=u.get(w.key===null?m:w.key)||null,l(d,u,w,x);case yn:return u=u.get(w.key===null?m:w.key)||null,c(d,u,w,x);case At:var E=w._init;return v(u,d,m,E(w._payload),x)}if(cr(w)||er(w))return u=u.get(m)||null,f(d,u,w,x,null);yi(d,w)}return null}function g(u,d,m,w){for(var x=null,E=null,P=d,C=d=0,T=null;P!==null&&C<m.length;C++){P.index>C?(T=P,P=null):T=P.sibling;var k=h(u,P,m[C],w);if(k===null){P===null&&(P=T);break}e&&P&&k.alternate===null&&t(u,P),d=a(k,d,C),E===null?x=k:E.sibling=k,E=k,P=T}if(C===m.length)return n(u,P),Z&&qt(u,C),x;if(P===null){for(;C<m.length;C++)P=p(u,m[C],w),P!==null&&(d=a(P,d,C),E===null?x=P:E.sibling=P,E=P);return Z&&qt(u,C),x}for(P=r(u,P);C<m.length;C++)T=v(P,u,C,m[C],w),T!==null&&(e&&T.alternate!==null&&P.delete(T.key===null?C:T.key),d=a(T,d,C),E===null?x=T:E.sibling=T,E=T);return e&&P.forEach(function(A){return t(u,A)}),Z&&qt(u,C),x}function y(u,d,m,w){var x=er(m);if(typeof x!="function")throw Error(M(150));if(m=x.call(m),m==null)throw Error(M(151));for(var E=x=null,P=d,C=d=0,T=null,k=m.next();P!==null&&!k.done;C++,k=m.next()){P.index>C?(T=P,P=null):T=P.sibling;var A=h(u,P,k.value,w);if(A===null){P===null&&(P=T);break}e&&P&&A.alternate===null&&t(u,P),d=a(A,d,C),E===null?x=A:E.sibling=A,E=A,P=T}if(k.done)return n(u,P),Z&&qt(u,C),x;if(P===null){for(;!k.done;C++,k=m.next())k=p(u,k.value,w),k!==null&&(d=a(k,d,C),E===null?x=k:E.sibling=k,E=k);return Z&&qt(u,C),x}for(P=r(u,P);!k.done;C++,k=m.next())k=v(P,u,C,k.value,w),k!==null&&(e&&k.alternate!==null&&P.delete(k.key===null?C:k.key),d=a(k,d,C),E===null?x=k:E.sibling=k,E=k);return e&&P.forEach(function(z){return t(u,z)}),Z&&qt(u,C),x}function S(u,d,m,w){if(typeof m=="object"&&m!==null&&m.type===wn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case si:e:{for(var x=m.key,E=d;E!==null;){if(E.key===x){if(x=m.type,x===wn){if(E.tag===7){n(u,E.sibling),d=i(E,m.props.children),d.return=u,u=d;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===At&&Hu(x)===E.type){n(u,E.sibling),d=i(E,m.props),d.ref=ar(u,E,m),d.return=u,u=d;break e}n(u,E);break}else t(u,E);E=E.sibling}m.type===wn?(d=on(m.props.children,u.mode,w,m.key),d.return=u,u=d):(w=Ui(m.type,m.key,m.props,null,u.mode,w),w.ref=ar(u,d,m),w.return=u,u=w)}return o(u);case yn:e:{for(E=m.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(u,d.sibling),d=i(d,m.children||[]),d.return=u,u=d;break e}else{n(u,d);break}else t(u,d);d=d.sibling}d=xo(m,u.mode,w),d.return=u,u=d}return o(u);case At:return E=m._init,S(u,d,E(m._payload),w)}if(cr(m))return g(u,d,m,w);if(er(m))return y(u,d,m,w);yi(u,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(u,d.sibling),d=i(d,m),d.return=u,u=d):(n(u,d),d=wo(m,u.mode,w),d.return=u,u=d),o(u)):n(u,d)}return S}var Hn=fd(!0),dd=fd(!1),la=Wt(null),ua=null,Tn=null,hl=null;function vl(){hl=Tn=ua=null}function gl(e){var t=la.current;Q(la),e._currentValue=t}function fs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rn(e,t){ua=e,hl=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(hl!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(ua===null)throw Error(M(308));Tn=e,ua.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var en=null;function yl(e){en===null?en=[e]:en.push(e)}function pd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yl(t)):(n.next=i.next,i.next=n),t.interleaved=n,gt(e,r)}function gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tt=!1;function wl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function md(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gt(e,n)}return i=r.interleaved,i===null?(t.next=t,yl(r)):(t.next=i.next,i.next=t),r.interleaved=t,gt(e,n)}function Fi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,il(e,n)}}function Uu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ca(e,t,n,r){var i=e.updateQueue;Tt=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,c=l.next;l.next=null,o===null?a=c:o.next=c,o=l;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==o&&(s===null?f.firstBaseUpdate=c:s.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=i.baseState;o=0,f=c=l=null,s=a;do{var h=s.lane,v=s.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,y=s;switch(h=t,v=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){p=g.call(v,p,h);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(v,p,h):g,h==null)break e;p=ne({},p,h);break e;case 2:Tt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(c=f=v,l=p):f=f.next=v,o|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(f===null&&(l=p),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);cn|=o,e.lanes=o,e.memoizedState=p}}function Yu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var ei={},lt=Wt(ei),Dr=Wt(ei),Fr=Wt(ei);function tn(e){if(e===ei)throw Error(M(174));return e}function xl(e,t){switch(Y(Fr,t),Y(Dr,e),Y(lt,ei),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Uo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Uo(t,e)}Q(lt),Y(lt,t)}function Un(){Q(lt),Q(Dr),Q(Fr)}function hd(e){tn(Fr.current);var t=tn(lt.current),n=Uo(t,e.type);t!==n&&(Y(Dr,e),Y(lt,n))}function Sl(e){Dr.current===e&&(Q(lt),Q(Dr))}var ee=Wt(0);function fa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var po=[];function bl(){for(var e=0;e<po.length;e++)po[e]._workInProgressVersionPrimary=null;po.length=0}var $i=bt.ReactCurrentDispatcher,mo=bt.ReactCurrentBatchConfig,un=0,te=null,le=null,de=null,da=!1,wr=!1,$r=0,ev=0;function we(){throw Error(M(321))}function kl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function El(e,t,n,r,i,a){if(un=a,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$i.current=e===null||e.memoizedState===null?iv:av,e=n(r,i),wr){a=0;do{if(wr=!1,$r=0,25<=a)throw Error(M(301));a+=1,de=le=null,t.updateQueue=null,$i.current=ov,e=n(r,i)}while(wr)}if($i.current=pa,t=le!==null&&le.next!==null,un=0,de=le=te=null,da=!1,t)throw Error(M(300));return e}function Cl(){var e=$r!==0;return $r=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?te.memoizedState=de=e:de=de.next=e,de}function Ye(){if(le===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=de===null?te.memoizedState:de.next;if(t!==null)de=t,le=e;else{if(e===null)throw Error(M(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},de===null?te.memoizedState=de=e:de=de.next=e}return de}function Br(e,t){return typeof t=="function"?t(e):t}function ho(e){var t=Ye(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=le,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,c=a;do{var f=c.lane;if((un&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=p,o=r):l=l.next=p,te.lanes|=f,cn|=f}c=c.next}while(c!==null&&c!==a);l===null?o=r:l.next=s,et(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,te.lanes|=a,cn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vo(e){var t=Ye(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);et(a,t.memoizedState)||(Pe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function vd(){}function gd(e,t){var n=te,r=Ye(),i=t(),a=!et(r.memoizedState,i);if(a&&(r.memoizedState=i,Pe=!0),r=r.queue,Al(xd.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Vr(9,wd.bind(null,n,r,i,t),void 0,null),pe===null)throw Error(M(349));un&30||yd(n,t,i)}return i}function yd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wd(e,t,n,r){t.value=n,t.getSnapshot=r,Sd(t)&&bd(e)}function xd(e,t,n){return n(function(){Sd(t)&&bd(e)})}function Sd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function bd(e){var t=gt(e,1);t!==null&&Je(t,e,1,-1)}function Wu(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},t.queue=e,e=e.dispatch=rv.bind(null,te,e),[t.memoizedState,e]}function Vr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kd(){return Ye().memoizedState}function Bi(e,t,n,r){var i=nt();te.flags|=e,i.memoizedState=Vr(1|t,n,void 0,r===void 0?null:r)}function _a(e,t,n,r){var i=Ye();r=r===void 0?null:r;var a=void 0;if(le!==null){var o=le.memoizedState;if(a=o.destroy,r!==null&&kl(r,o.deps)){i.memoizedState=Vr(t,n,a,r);return}}te.flags|=e,i.memoizedState=Vr(1|t,n,a,r)}function Xu(e,t){return Bi(8390656,8,e,t)}function Al(e,t){return _a(2048,8,e,t)}function Ed(e,t){return _a(4,2,e,t)}function Cd(e,t){return _a(4,4,e,t)}function Ad(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Td(e,t,n){return n=n!=null?n.concat([e]):null,_a(4,4,Ad.bind(null,t,e),n)}function Tl(){}function Pd(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zd(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nd(e,t,n){return un&21?(et(n,t)||(n=Lf(),te.lanes|=n,cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function tv(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=mo.transition;mo.transition={};try{e(!1),t()}finally{U=n,mo.transition=r}}function Id(){return Ye().memoizedState}function nv(e,t,n){var r=Ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Md(e))Od(t,n);else if(n=pd(e,t,n,r),n!==null){var i=Ee();Je(n,e,r,i),_d(n,t,r)}}function rv(e,t,n){var r=Ft(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Md(e))Od(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,et(s,o)){var l=t.interleaved;l===null?(i.next=i,yl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=pd(e,t,i,r),n!==null&&(i=Ee(),Je(n,e,r,i),_d(n,t,r))}}function Md(e){var t=e.alternate;return e===te||t!==null&&t===te}function Od(e,t){wr=da=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _d(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,il(e,n)}}var pa={readContext:Ue,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},iv={readContext:Ue,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:Xu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Bi(4194308,4,Ad.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Bi(4,2,e,t)},useMemo:function(e,t){var n=nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=nv.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:Wu,useDebugValue:Tl,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=Wu(!1),t=e[0];return e=tv.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,i=nt();if(Z){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),pe===null)throw Error(M(349));un&30||yd(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Xu(xd.bind(null,r,a,e),[e]),r.flags|=2048,Vr(9,wd.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=nt(),t=pe.identifierPrefix;if(Z){var n=pt,r=dt;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ev++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},av={readContext:Ue,useCallback:Pd,useContext:Ue,useEffect:Al,useImperativeHandle:Td,useInsertionEffect:Ed,useLayoutEffect:Cd,useMemo:zd,useReducer:ho,useRef:kd,useState:function(){return ho(Br)},useDebugValue:Tl,useDeferredValue:function(e){var t=Ye();return Nd(t,le.memoizedState,e)},useTransition:function(){var e=ho(Br)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:vd,useSyncExternalStore:gd,useId:Id,unstable_isNewReconciler:!1},ov={readContext:Ue,useCallback:Pd,useContext:Ue,useEffect:Al,useImperativeHandle:Td,useInsertionEffect:Ed,useLayoutEffect:Cd,useMemo:zd,useReducer:vo,useRef:kd,useState:function(){return vo(Br)},useDebugValue:Tl,useDeferredValue:function(e){var t=Ye();return le===null?t.memoizedState=e:Nd(t,le.memoizedState,e)},useTransition:function(){var e=vo(Br)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:vd,useSyncExternalStore:gd,useId:Id,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ds(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var La={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ee(),i=Ft(e),a=mt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Rt(e,a,i),t!==null&&(Je(t,e,i,r),Fi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ee(),i=Ft(e),a=mt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Rt(e,a,i),t!==null&&(Je(t,e,i,r),Fi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ee(),r=Ft(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Rt(e,i,r),t!==null&&(Je(t,e,r,n),Fi(t,e,r))}};function Qu(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!_r(n,r)||!_r(i,a):!0}function Ld(e,t,n){var r=!1,i=Vt,a=t.contextType;return typeof a=="object"&&a!==null?a=Ue(a):(i=Ne(t)?sn:be.current,r=t.contextTypes,a=(r=r!=null)?Vn(e,i):Vt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=La,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ku(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&La.enqueueReplaceState(t,t.state,null)}function ps(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},wl(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Ue(a):(a=Ne(t)?sn:be.current,i.context=Vn(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ds(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&La.enqueueReplaceState(i,i.state,null),ca(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yn(e,t){try{var n="",r=t;do n+=_m(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function go(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ms(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sv=typeof WeakMap=="function"?WeakMap:Map;function jd(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ha||(ha=!0,Es=r),ms(e,t)},n}function Rd(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ms(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ms(e,t),typeof r!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function qu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Sv.bind(null,e,t,n),t.then(e,e))}function Zu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ju(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e)}var lv=bt.ReactCurrentOwner,Pe=!1;function ke(e,t,n,r){t.child=e===null?dd(t,null,n,r):Hn(t,e.child,n,r)}function ec(e,t,n,r,i){n=n.render;var a=t.ref;return Rn(t,i),r=El(e,t,n,r,a,i),n=Cl(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(Z&&n&&dl(t),t.flags|=1,ke(e,t,r,i),t.child)}function tc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Ll(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Dd(e,t,a,r,i)):(e=Ui(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:_r,n(o,r)&&e.ref===t.ref)return yt(e,t,i)}return t.flags|=1,e=$t(a,r),e.ref=t.ref,e.return=t,t.child=e}function Dd(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(_r(a,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,yt(e,t,i)}return hs(e,t,n,r,i)}function Fd(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(zn,Me),Me|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(zn,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Y(zn,Me),Me|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Y(zn,Me),Me|=r;return ke(e,t,i,n),t.child}function $d(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hs(e,t,n,r,i){var a=Ne(n)?sn:be.current;return a=Vn(t,a),Rn(t,i),n=El(e,t,n,r,a,i),r=Cl(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(Z&&r&&dl(t),t.flags|=1,ke(e,t,n,i),t.child)}function nc(e,t,n,r,i){if(Ne(n)){var a=!0;aa(t)}else a=!1;if(Rn(t,i),t.stateNode===null)Vi(e,t),Ld(t,n,r),ps(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ue(c):(c=Ne(n)?sn:be.current,c=Vn(t,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==c)&&Ku(t,o,r,c),Tt=!1;var h=t.memoizedState;o.state=h,ca(t,r,o,i),l=t.memoizedState,s!==r||h!==l||ze.current||Tt?(typeof f=="function"&&(ds(t,n,f,r),l=t.memoizedState),(s=Tt||Qu(t,n,s,r,h,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,md(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Xe(t.type,s),o.props=c,p=t.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ue(l):(l=Ne(n)?sn:be.current,l=Vn(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==p||h!==l)&&Ku(t,o,r,l),Tt=!1,h=t.memoizedState,o.state=h,ca(t,r,o,i);var g=t.memoizedState;s!==p||h!==g||ze.current||Tt?(typeof v=="function"&&(ds(t,n,v,r),g=t.memoizedState),(c=Tt||Qu(t,n,c,r,h,g,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return vs(e,t,n,r,a,i)}function vs(e,t,n,r,i,a){$d(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Bu(t,n,!1),yt(e,t,a);r=t.stateNode,lv.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Hn(t,e.child,null,a),t.child=Hn(t,null,s,a)):ke(e,t,s,a),t.memoizedState=r.state,i&&Bu(t,n,!0),t.child}function Bd(e){var t=e.stateNode;t.pendingContext?$u(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$u(e,t.context,!1),xl(e,t.containerInfo)}function rc(e,t,n,r,i){return Gn(),ml(i),t.flags|=256,ke(e,t,n,r),t.child}var gs={dehydrated:null,treeContext:null,retryLane:0};function ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vd(e,t,n){var r=t.pendingProps,i=ee.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(ee,i&1),e===null)return cs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Da(o,r,0,null),e=on(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ys(n),t.memoizedState=gs,e):Pl(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return uv(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=$t(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=$t(s,a):(a=on(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?ys(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=gs,r}return a=e.child,e=a.sibling,r=$t(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pl(e,t){return t=Da({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,n,r){return r!==null&&ml(r),Hn(t,e.child,null,n),e=Pl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uv(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=go(Error(M(422))),wi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Da({mode:"visible",children:r.children},i,0,null),a=on(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Hn(t,e.child,null,o),t.child.memoizedState=ys(o),t.memoizedState=gs,a);if(!(t.mode&1))return wi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(M(419)),r=go(a,r,void 0),wi(e,t,o,r)}if(s=(o&e.childLanes)!==0,Pe||s){if(r=pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,gt(e,i),Je(r,e,i,-1))}return _l(),r=go(Error(M(421))),wi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=bv.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,_e=jt(i.nextSibling),Le=t,Z=!0,Ke=null,e!==null&&(Be[Ve++]=dt,Be[Ve++]=pt,Be[Ve++]=ln,dt=e.id,pt=e.overflow,ln=t),t=Pl(t,r.children),t.flags|=4096,t)}function ic(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fs(e.return,t,n)}function yo(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Gd(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ke(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ic(e,n,t);else if(e.tag===19)ic(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(ee,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),yo(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}yo(t,!0,n,null,a);break;case"together":yo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cv(e,t,n){switch(t.tag){case 3:Bd(t),Gn();break;case 5:hd(t);break;case 1:Ne(t.type)&&aa(t);break;case 4:xl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(la,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?Vd(e,t,n):(Y(ee,ee.current&1),e=yt(e,t,n),e!==null?e.sibling:null);Y(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Gd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Fd(e,t,n)}return yt(e,t,n)}var Hd,ws,Ud,Yd;Hd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ws=function(){};Ud=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,tn(lt.current);var a=null;switch(n){case"input":i=Bo(e,i),r=Bo(e,r),a=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),a=[];break;case"textarea":i=Ho(e,i),r=Ho(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ra)}Yo(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Tr.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var l=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&W("scroll",e),a||s===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};Yd=function(e,t,n,r){n!==r&&(t.flags|=4)};function or(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fv(e,t,n){var r=t.pendingProps;switch(pl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return Ne(t.type)&&ia(),xe(t),null;case 3:return r=t.stateNode,Un(),Q(ze),Q(be),bl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(Ts(Ke),Ke=null))),ws(e,t),xe(t),null;case 5:Sl(t);var i=tn(Fr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ud(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return xe(t),null}if(e=tn(lt.current),gi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[it]=t,r[Rr]=a,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<dr.length;i++)W(dr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":pu(r,a),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},W("invalid",r);break;case"textarea":hu(r,a),W("invalid",r)}Yo(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&vi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&vi(r.textContent,s,e),i=["children",""+s]):Tr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&W("scroll",r)}switch(n){case"input":li(r),mu(r,a,!0);break;case"textarea":li(r),vu(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ra)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[it]=t,e[Rr]=r,Hd(e,t,!1,!1),t.stateNode=e;e:{switch(o=Wo(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<dr.length;i++)W(dr[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":pu(e,r),i=Bo(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),W("invalid",e);break;case"textarea":hu(e,r),i=Ho(e,r),W("invalid",e);break;default:i=r}Yo(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?kf(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sf(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pr(e,l):typeof l=="number"&&Pr(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Tr.hasOwnProperty(a)?l!=null&&a==="onScroll"&&W("scroll",e):l!=null&&Zs(e,a,l,o))}switch(n){case"input":li(e),mu(e,r,!1);break;case"textarea":li(e),vu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?On(e,!!r.multiple,a,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ra)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return xe(t),null;case 6:if(e&&t.stateNode!=null)Yd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=tn(Fr.current),tn(lt.current),gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[it]=t,(a=r.nodeValue!==n)&&(e=Le,e!==null))switch(e.tag){case 3:vi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vi(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=t,t.stateNode=r}return xe(t),null;case 13:if(Q(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&_e!==null&&t.mode&1&&!(t.flags&128))cd(),Gn(),t.flags|=98560,a=!1;else if(a=gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(M(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(M(317));a[it]=t}else Gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;xe(t),a=!1}else Ke!==null&&(Ts(Ke),Ke=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ue===0&&(ue=3):_l())),t.updateQueue!==null&&(t.flags|=4),xe(t),null);case 4:return Un(),ws(e,t),e===null&&Lr(t.stateNode.containerInfo),xe(t),null;case 10:return gl(t.type._context),xe(t),null;case 17:return Ne(t.type)&&ia(),xe(t),null;case 19:if(Q(ee),a=t.memoizedState,a===null)return xe(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)or(a,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fa(e),o!==null){for(t.flags|=128,or(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(ee,ee.current&1|2),t.child}e=e.sibling}a.tail!==null&&ae()>Wn&&(t.flags|=128,r=!0,or(a,!1),t.lanes=4194304)}else{if(!r)if(e=fa(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),or(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Z)return xe(t),null}else 2*ae()-a.renderingStartTime>Wn&&n!==1073741824&&(t.flags|=128,r=!0,or(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ae(),t.sibling=null,n=ee.current,Y(ee,r?n&1|2:n&1),t):(xe(t),null);case 22:case 23:return Ol(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function dv(e,t){switch(pl(t),t.tag){case 1:return Ne(t.type)&&ia(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),Q(ze),Q(be),bl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Sl(t),null;case 13:if(Q(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(ee),null;case 4:return Un(),null;case 10:return gl(t.type._context),null;case 22:case 23:return Ol(),null;case 24:return null;default:return null}}var xi=!1,Se=!1,pv=typeof WeakSet=="function"?WeakSet:Set,R=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function xs(e,t,n){try{n()}catch(r){re(e,t,r)}}var ac=!1;function mv(e,t){if(rs=ea,e=qf(),fl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,c=0,f=0,p=e,h=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(s=o+i),p!==a||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)h=p,p=v;for(;;){if(p===e)break t;if(h===n&&++c===i&&(s=o),h===a&&++f===r&&(l=o),(v=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(is={focusedElem:e,selectionRange:n},ea=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,S=g.memoizedState,u=t.stateNode,d=u.getSnapshotBeforeUpdate(t.elementType===t.type?y:Xe(t.type,y),S);u.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(w){re(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return g=ac,ac=!1,g}function xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&xs(t,n,a)}i=i.next}while(i!==r)}}function ja(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ss(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wd(e){var t=e.alternate;t!==null&&(e.alternate=null,Wd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[Rr],delete t[ss],delete t[Kh],delete t[qh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xd(e){return e.tag===5||e.tag===3||e.tag===4}function oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ra));else if(r!==4&&(e=e.child,e!==null))for(bs(e,t,n),e=e.sibling;e!==null;)bs(e,t,n),e=e.sibling}function ks(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ks(e,t,n),e=e.sibling;e!==null;)ks(e,t,n),e=e.sibling}var me=null,Qe=!1;function Et(e,t,n){for(n=n.child;n!==null;)Qd(e,t,n),n=n.sibling}function Qd(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Pa,n)}catch{}switch(n.tag){case 5:Se||Pn(n,t);case 6:var r=me,i=Qe;me=null,Et(e,t,n),me=r,Qe=i,me!==null&&(Qe?(e=me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(Qe?(e=me,n=n.stateNode,e.nodeType===8?co(e.parentNode,n):e.nodeType===1&&co(e,n),Mr(e)):co(me,n.stateNode));break;case 4:r=me,i=Qe,me=n.stateNode.containerInfo,Qe=!0,Et(e,t,n),me=r,Qe=i;break;case 0:case 11:case 14:case 15:if(!Se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&xs(n,t,o),i=i.next}while(i!==r)}Et(e,t,n);break;case 1:if(!Se&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){re(n,t,s)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(Se=(r=Se)||n.memoizedState!==null,Et(e,t,n),Se=r):Et(e,t,n);break;default:Et(e,t,n)}}function sc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pv),t.forEach(function(r){var i=kv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:me=s.stateNode,Qe=!1;break e;case 3:me=s.stateNode.containerInfo,Qe=!0;break e;case 4:me=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(me===null)throw Error(M(160));Qd(a,o,i),me=null,Qe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){re(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kd(t,e),t=t.sibling}function Kd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),tt(e),r&4){try{xr(3,e,e.return),ja(3,e)}catch(y){re(e,e.return,y)}try{xr(5,e,e.return)}catch(y){re(e,e.return,y)}}break;case 1:We(t,e),tt(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(We(t,e),tt(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var i=e.stateNode;try{Pr(i,"")}catch(y){re(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&yf(i,a),Wo(s,o);var c=Wo(s,a);for(o=0;o<l.length;o+=2){var f=l[o],p=l[o+1];f==="style"?kf(i,p):f==="dangerouslySetInnerHTML"?Sf(i,p):f==="children"?Pr(i,p):Zs(i,f,p,c)}switch(s){case"input":Vo(i,a);break;case"textarea":wf(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?On(i,!!a.multiple,v,!1):h!==!!a.multiple&&(a.defaultValue!=null?On(i,!!a.multiple,a.defaultValue,!0):On(i,!!a.multiple,a.multiple?[]:"",!1))}i[Rr]=a}catch(y){re(e,e.return,y)}}break;case 6:if(We(t,e),tt(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(y){re(e,e.return,y)}}break;case 3:if(We(t,e),tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mr(t.containerInfo)}catch(y){re(e,e.return,y)}break;case 4:We(t,e),tt(e);break;case 13:We(t,e),tt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Il=ae())),r&4&&sc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Se=(c=Se)||f,We(t,e),Se=c):We(t,e),tt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(R=e,f=e.child;f!==null;){for(p=R=f;R!==null;){switch(h=R,v=h.child,h.tag){case 0:case 11:case 14:case 15:xr(4,h,h.return);break;case 1:Pn(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:Pn(h,h.return);break;case 22:if(h.memoizedState!==null){uc(p);continue}}v!==null?(v.return=h,R=v):uc(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=bf("display",o))}catch(y){re(e,e.return,y)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){re(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:We(t,e),tt(e),r&4&&sc(e);break;case 21:break;default:We(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xd(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pr(i,""),r.flags&=-33);var a=oc(e);ks(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=oc(e);bs(e,s,o);break;default:throw Error(M(161))}}catch(l){re(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hv(e,t,n){R=e,qd(e)}function qd(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xi;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Se;s=xi;var c=Se;if(xi=o,(Se=l)&&!c)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?cc(i):l!==null?(l.return=o,R=l):cc(i);for(;a!==null;)R=a,qd(a),a=a.sibling;R=i,xi=s,Se=c}lc(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,R=a):lc(e)}}function lc(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Se||ja(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Yu(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Yu(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Mr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Se||t.flags&512&&Ss(t)}catch(h){re(t,t.return,h)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function uc(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function cc(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ja(4,t)}catch(l){re(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){re(t,i,l)}}var a=t.return;try{Ss(t)}catch(l){re(t,a,l)}break;case 5:var o=t.return;try{Ss(t)}catch(l){re(t,o,l)}}}catch(l){re(t,t.return,l)}if(t===e){R=null;break}var s=t.sibling;if(s!==null){s.return=t.return,R=s;break}R=t.return}}var vv=Math.ceil,ma=bt.ReactCurrentDispatcher,zl=bt.ReactCurrentOwner,He=bt.ReactCurrentBatchConfig,H=0,pe=null,se=null,ve=0,Me=0,zn=Wt(0),ue=0,Gr=null,cn=0,Ra=0,Nl=0,Sr=null,Te=null,Il=0,Wn=1/0,ct=null,ha=!1,Es=null,Dt=null,Si=!1,It=null,va=0,br=0,Cs=null,Gi=-1,Hi=0;function Ee(){return H&6?ae():Gi!==-1?Gi:Gi=ae()}function Ft(e){return e.mode&1?H&2&&ve!==0?ve&-ve:Jh.transition!==null?(Hi===0&&(Hi=Lf()),Hi):(e=U,e!==0||(e=window.event,e=e===void 0?16:Vf(e.type)),e):1}function Je(e,t,n,r){if(50<br)throw br=0,Cs=null,Error(M(185));qr(e,n,r),(!(H&2)||e!==pe)&&(e===pe&&(!(H&2)&&(Ra|=n),ue===4&&zt(e,ve)),Ie(e,r),n===1&&H===0&&!(t.mode&1)&&(Wn=ae()+500,Oa&&Xt()))}function Ie(e,t){var n=e.callbackNode;Jm(e,t);var r=Ji(e,e===pe?ve:0);if(r===0)n!==null&&wu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wu(n),t===1)e.tag===0?Zh(fc.bind(null,e)):sd(fc.bind(null,e)),Xh(function(){!(H&6)&&Xt()}),n=null;else{switch(jf(r)){case 1:n=rl;break;case 4:n=Of;break;case 16:n=Zi;break;case 536870912:n=_f;break;default:n=Zi}n=ap(n,Zd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zd(e,t){if(Gi=-1,Hi=0,H&6)throw Error(M(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=Ji(e,e===pe?ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ga(e,r);else{t=r;var i=H;H|=2;var a=ep();(pe!==e||ve!==t)&&(ct=null,Wn=ae()+500,an(e,t));do try{wv();break}catch(s){Jd(e,s)}while(!0);vl(),ma.current=a,H=i,se!==null?t=0:(pe=null,ve=0,t=ue)}if(t!==0){if(t===2&&(i=Zo(e),i!==0&&(r=i,t=As(e,i))),t===1)throw n=Gr,an(e,0),zt(e,r),Ie(e,ae()),n;if(t===6)zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!gv(i)&&(t=ga(e,r),t===2&&(a=Zo(e),a!==0&&(r=a,t=As(e,a))),t===1))throw n=Gr,an(e,0),zt(e,r),Ie(e,ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:Zt(e,Te,ct);break;case 3:if(zt(e,r),(r&130023424)===r&&(t=Il+500-ae(),10<t)){if(Ji(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ee(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=os(Zt.bind(null,e,Te,ct),t);break}Zt(e,Te,ct);break;case 4:if(zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ze(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vv(r/1960))-r,10<r){e.timeoutHandle=os(Zt.bind(null,e,Te,ct),r);break}Zt(e,Te,ct);break;case 5:Zt(e,Te,ct);break;default:throw Error(M(329))}}}return Ie(e,ae()),e.callbackNode===n?Zd.bind(null,e):null}function As(e,t){var n=Sr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=ga(e,t),e!==2&&(t=Te,Te=n,t!==null&&Ts(t)),e}function Ts(e){Te===null?Te=e:Te.push.apply(Te,e)}function gv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!et(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zt(e,t){for(t&=~Nl,t&=~Ra,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function fc(e){if(H&6)throw Error(M(327));Dn();var t=Ji(e,0);if(!(t&1))return Ie(e,ae()),null;var n=ga(e,t);if(e.tag!==0&&n===2){var r=Zo(e);r!==0&&(t=r,n=As(e,r))}if(n===1)throw n=Gr,an(e,0),zt(e,t),Ie(e,ae()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zt(e,Te,ct),Ie(e,ae()),null}function Ml(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(Wn=ae()+500,Oa&&Xt())}}function fn(e){It!==null&&It.tag===0&&!(H&6)&&Dn();var t=H;H|=1;var n=He.transition,r=U;try{if(He.transition=null,U=1,e)return e()}finally{U=r,He.transition=n,H=t,!(H&6)&&Xt()}}function Ol(){Me=zn.current,Q(zn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wh(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(pl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ia();break;case 3:Un(),Q(ze),Q(be),bl();break;case 5:Sl(r);break;case 4:Un();break;case 13:Q(ee);break;case 19:Q(ee);break;case 10:gl(r.type._context);break;case 22:case 23:Ol()}n=n.return}if(pe=e,se=e=$t(e.current,null),ve=Me=t,ue=0,Gr=null,Nl=Ra=cn=0,Te=Sr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}en=null}return e}function Jd(e,t){do{var n=se;try{if(vl(),$i.current=pa,da){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}da=!1}if(un=0,de=le=te=null,wr=!1,$r=0,zl.current=null,n===null||n.return===null){ue=1,Gr=t,se=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=ve,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=s,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Zu(o);if(v!==null){v.flags&=-257,Ju(v,o,s,a,t),v.mode&1&&qu(a,c,t),t=v,l=c;var g=t.updateQueue;if(g===null){var y=new Set;y.add(l),t.updateQueue=y}else g.add(l);break e}else{if(!(t&1)){qu(a,c,t),_l();break e}l=Error(M(426))}}else if(Z&&s.mode&1){var S=Zu(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Ju(S,o,s,a,t),ml(Yn(l,s));break e}}a=l=Yn(l,s),ue!==4&&(ue=2),Sr===null?Sr=[a]:Sr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var u=jd(a,l,t);Uu(a,u);break e;case 1:s=l;var d=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Dt===null||!Dt.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=Rd(a,s,t);Uu(a,w);break e}}a=a.return}while(a!==null)}np(n)}catch(x){t=x,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function ep(){var e=ma.current;return ma.current=pa,e===null?pa:e}function _l(){(ue===0||ue===3||ue===2)&&(ue=4),pe===null||!(cn&268435455)&&!(Ra&268435455)||zt(pe,ve)}function ga(e,t){var n=H;H|=2;var r=ep();(pe!==e||ve!==t)&&(ct=null,an(e,t));do try{yv();break}catch(i){Jd(e,i)}while(!0);if(vl(),H=n,ma.current=r,se!==null)throw Error(M(261));return pe=null,ve=0,ue}function yv(){for(;se!==null;)tp(se)}function wv(){for(;se!==null&&!Hm();)tp(se)}function tp(e){var t=ip(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?np(e):se=t,zl.current=null}function np(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=dv(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,se=null;return}}else if(n=fv(n,t,Me),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ue===0&&(ue=5)}function Zt(e,t,n){var r=U,i=He.transition;try{He.transition=null,U=1,xv(e,t,n,r)}finally{He.transition=i,U=r}return null}function xv(e,t,n,r){do Dn();while(It!==null);if(H&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(eh(e,a),e===pe&&(se=pe=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Si||(Si=!0,ap(Zi,function(){return Dn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=He.transition,He.transition=null;var o=U;U=1;var s=H;H|=4,zl.current=null,mv(e,n),Kd(n,e),$h(is),ea=!!rs,is=rs=null,e.current=n,hv(n),Um(),H=s,U=o,He.transition=a}else e.current=n;if(Si&&(Si=!1,It=e,va=i),a=e.pendingLanes,a===0&&(Dt=null),Xm(n.stateNode),Ie(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ha)throw ha=!1,e=Es,Es=null,e;return va&1&&e.tag!==0&&Dn(),a=e.pendingLanes,a&1?e===Cs?br++:(br=0,Cs=e):br=0,Xt(),null}function Dn(){if(It!==null){var e=jf(va),t=He.transition,n=U;try{if(He.transition=null,U=16>e?16:e,It===null)var r=!1;else{if(e=It,It=null,va=0,H&6)throw Error(M(331));var i=H;for(H|=4,R=e.current;R!==null;){var a=R,o=a.child;if(R.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(R=c;R!==null;){var f=R;switch(f.tag){case 0:case 11:case 15:xr(8,f,a)}var p=f.child;if(p!==null)p.return=f,R=p;else for(;R!==null;){f=R;var h=f.sibling,v=f.return;if(Wd(f),f===c){R=null;break}if(h!==null){h.return=v,R=h;break}R=v}}}var g=a.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}R=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,R=o;else e:for(;R!==null;){if(a=R,a.flags&2048)switch(a.tag){case 0:case 11:case 15:xr(9,a,a.return)}var u=a.sibling;if(u!==null){u.return=a.return,R=u;break e}R=a.return}}var d=e.current;for(R=d;R!==null;){o=R;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,R=m;else e:for(o=d;R!==null;){if(s=R,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ja(9,s)}}catch(x){re(s,s.return,x)}if(s===o){R=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,R=w;break e}R=s.return}}if(H=i,Xt(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Pa,e)}catch{}r=!0}return r}finally{U=n,He.transition=t}}return!1}function dc(e,t,n){t=Yn(n,t),t=jd(e,t,1),e=Rt(e,t,1),t=Ee(),e!==null&&(qr(e,1,t),Ie(e,t))}function re(e,t,n){if(e.tag===3)dc(e,e,n);else for(;t!==null;){if(t.tag===3){dc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dt===null||!Dt.has(r))){e=Yn(n,e),e=Rd(t,e,1),t=Rt(t,e,1),e=Ee(),t!==null&&(qr(t,1,e),Ie(t,e));break}}t=t.return}}function Sv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ee(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(ve&n)===n&&(ue===4||ue===3&&(ve&130023424)===ve&&500>ae()-Il?an(e,0):Nl|=n),Ie(e,t)}function rp(e,t){t===0&&(e.mode&1?(t=fi,fi<<=1,!(fi&130023424)&&(fi=4194304)):t=1);var n=Ee();e=gt(e,t),e!==null&&(qr(e,t,n),Ie(e,n))}function bv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rp(e,n)}function kv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),rp(e,n)}var ip;ip=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,cv(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,Z&&t.flags&1048576&&ld(t,sa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vi(e,t),e=t.pendingProps;var i=Vn(t,be.current);Rn(t,n),i=El(null,t,r,e,i,n);var a=Cl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(a=!0,aa(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wl(t),i.updater=La,t.stateNode=i,i._reactInternals=t,ps(t,r,e,n),t=vs(null,t,r,!0,a,n)):(t.tag=0,Z&&a&&dl(t),ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Cv(r),e=Xe(r,e),i){case 0:t=hs(null,t,r,e,n);break e;case 1:t=nc(null,t,r,e,n);break e;case 11:t=ec(null,t,r,e,n);break e;case 14:t=tc(null,t,r,Xe(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),hs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),nc(e,t,r,i,n);case 3:e:{if(Bd(t),e===null)throw Error(M(387));r=t.pendingProps,a=t.memoizedState,i=a.element,md(e,t),ca(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Yn(Error(M(423)),t),t=rc(e,t,r,n,i);break e}else if(r!==i){i=Yn(Error(M(424)),t),t=rc(e,t,r,n,i);break e}else for(_e=jt(t.stateNode.containerInfo.firstChild),Le=t,Z=!0,Ke=null,n=dd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gn(),r===i){t=yt(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return hd(t),e===null&&cs(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,as(r,i)?o=null:a!==null&&as(r,a)&&(t.flags|=32),$d(e,t),ke(e,t,o,n),t.child;case 6:return e===null&&cs(t),null;case 13:return Vd(e,t,n);case 4:return xl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hn(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),ec(e,t,r,i,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,Y(la,r._currentValue),r._currentValue=o,a!==null)if(et(a.value,o)){if(a.children===i.children&&!ze.current){t=yt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=mt(-1,n&-n),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),fs(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(M(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),fs(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Rn(t,n),i=Ue(i),r=r(i),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,i=Xe(r,t.pendingProps),i=Xe(r.type,i),tc(e,t,r,i,n);case 15:return Dd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Vi(e,t),t.tag=1,Ne(r)?(e=!0,aa(t)):e=!1,Rn(t,n),Ld(t,r,i),ps(t,r,i,n),vs(null,t,r,!0,e,n);case 19:return Gd(e,t,n);case 22:return Fd(e,t,n)}throw Error(M(156,t.tag))};function ap(e,t){return Mf(e,t)}function Ev(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,t,n,r){return new Ev(e,t,n,r)}function Ll(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cv(e){if(typeof e=="function")return Ll(e)?1:0;if(e!=null){if(e=e.$$typeof,e===el)return 11;if(e===tl)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=Ge(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ui(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Ll(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case wn:return on(n.children,i,a,t);case Js:o=8,i|=8;break;case Ro:return e=Ge(12,n,t,i|2),e.elementType=Ro,e.lanes=a,e;case Do:return e=Ge(13,n,t,i),e.elementType=Do,e.lanes=a,e;case Fo:return e=Ge(19,n,t,i),e.elementType=Fo,e.lanes=a,e;case hf:return Da(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pf:o=10;break e;case mf:o=9;break e;case el:o=11;break e;case tl:o=14;break e;case At:o=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=Ge(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function on(e,t,n,r){return e=Ge(7,e,r,t),e.lanes=n,e}function Da(e,t,n,r){return e=Ge(22,e,r,t),e.elementType=hf,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,t,n){return e=Ge(6,e,null,t),e.lanes=n,e}function xo(e,t,n){return t=Ge(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Av(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ja(0),this.expirationTimes=Ja(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ja(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jl(e,t,n,r,i,a,o,s,l){return e=new Av(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ge(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wl(a),e}function Tv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function op(e){if(!e)return Vt;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Ne(n))return od(e,n,t)}return t}function sp(e,t,n,r,i,a,o,s,l){return e=jl(n,r,!0,e,i,a,o,s,l),e.context=op(null),n=e.current,r=Ee(),i=Ft(n),a=mt(r,i),a.callback=t??null,Rt(n,a,i),e.current.lanes=i,qr(e,i,r),Ie(e,r),e}function Fa(e,t,n,r){var i=t.current,a=Ee(),o=Ft(i);return n=op(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rt(i,t,o),e!==null&&(Je(e,i,o,a),Fi(e,i,o)),o}function ya(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rl(e,t){pc(e,t),(e=e.alternate)&&pc(e,t)}function Pv(){return null}var lp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Dl(e){this._internalRoot=e}$a.prototype.render=Dl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Fa(e,t,null,null)};$a.prototype.unmount=Dl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){Fa(null,e,null,null)}),t[vt]=null}};function $a(e){this._internalRoot=e}$a.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ff();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&Bf(e)}};function Fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mc(){}function zv(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var c=ya(o);a.call(c)}}var o=sp(t,r,e,0,null,!1,!1,"",mc);return e._reactRootContainer=o,e[vt]=o.current,Lr(e.nodeType===8?e.parentNode:e),fn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=ya(l);s.call(c)}}var l=jl(e,0,!1,null,null,!1,!1,"",mc);return e._reactRootContainer=l,e[vt]=l.current,Lr(e.nodeType===8?e.parentNode:e),fn(function(){Fa(t,l,n,r)}),l}function Va(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=ya(o);s.call(l)}}Fa(t,o,e,i)}else o=zv(n,t,e,i,r);return ya(o)}Rf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(il(t,n|1),Ie(t,ae()),!(H&6)&&(Wn=ae()+500,Xt()))}break;case 13:fn(function(){var r=gt(e,1);if(r!==null){var i=Ee();Je(r,e,1,i)}}),Rl(e,1)}};al=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var n=Ee();Je(t,e,134217728,n)}Rl(e,134217728)}};Df=function(e){if(e.tag===13){var t=Ft(e),n=gt(e,t);if(n!==null){var r=Ee();Je(n,e,t,r)}Rl(e,t)}};Ff=function(){return U};$f=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Qo=function(e,t,n){switch(t){case"input":if(Vo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ma(r);if(!i)throw Error(M(90));gf(r),Vo(r,i)}}}break;case"textarea":wf(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};Af=Ml;Tf=fn;var Nv={usingClientEntryPoint:!1,Events:[Jr,kn,Ma,Ef,Cf,Ml]},sr={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Iv={bundleType:sr.bundleType,version:sr.version,rendererPackageName:sr.rendererPackageName,rendererConfig:sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nf(e),e===null?null:e.stateNode},findFiberByHostInstance:sr.findFiberByHostInstance||Pv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bi.isDisabled&&bi.supportsFiber)try{Pa=bi.inject(Iv),st=bi}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nv;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fl(t))throw Error(M(200));return Tv(e,t,null,n)};Re.createRoot=function(e,t){if(!Fl(e))throw Error(M(299));var n=!1,r="",i=lp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=jl(e,1,!1,null,null,n,!1,r,i),e[vt]=t.current,Lr(e.nodeType===8?e.parentNode:e),new Dl(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=Nf(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return fn(e)};Re.hydrate=function(e,t,n){if(!Ba(t))throw Error(M(200));return Va(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!Fl(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=lp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=sp(t,null,e,1,n??null,i,!1,a,o),e[vt]=t.current,Lr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new $a(t)};Re.render=function(e,t,n){if(!Ba(t))throw Error(M(200));return Va(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!Ba(e))throw Error(M(40));return e._reactRootContainer?(fn(function(){Va(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1};Re.unstable_batchedUpdates=Ml;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ba(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Va(e,t,n,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function up(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(up)}catch(e){console.error(e)}}up(),uf.exports=Re;var Mv=uf.exports,hc=Mv;Ar.createRoot=hc.createRoot,Ar.hydrateRoot=hc.hydrateRoot;var $l={prefix:"fas",iconName:"circle-chevron-right",icon:[512,512,["chevron-circle-right"],"f138","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"]},Ov={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]},Bl=Ov,cp={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},_v={prefix:"fas",iconName:"volume-xmark",icon:[576,512,["volume-mute","volume-times"],"f6a9","M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},Vl=_v,Lv={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Gl=Lv,Hl={prefix:"fas",iconName:"circle-chevron-left",icon:[512,512,["chevron-circle-left"],"f137","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"]};function vc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vc(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wa(e){"@babel/helpers - typeof";return wa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wa(e)}function jv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Rv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Dv(e,t,n){return t&&Rv(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ul(e,t){return $v(e)||Vv(e,t)||fp(e,t)||Hv()}function ti(e){return Fv(e)||Bv(e)||fp(e)||Gv()}function Fv(e){if(Array.isArray(e))return Ps(e)}function $v(e){if(Array.isArray(e))return e}function Bv(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Vv(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function fp(e,t){if(e){if(typeof e=="string")return Ps(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ps(e,t)}}function Ps(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Gv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gc=function(){},Yl={},dp={},pp=null,mp={mark:gc,measure:gc};try{typeof window<"u"&&(Yl=window),typeof document<"u"&&(dp=document),typeof MutationObserver<"u"&&(pp=MutationObserver),typeof performance<"u"&&(mp=performance)}catch{}var Uv=Yl.navigator||{},yc=Uv.userAgent,wc=yc===void 0?"":yc,Gt=Yl,K=dp,xc=pp,ki=mp;Gt.document;var kt=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",hp=~wc.indexOf("MSIE")||~wc.indexOf("Trident/"),Ei,Ci,Ai,Ti,Pi,wt="___FONT_AWESOME___",zs=16,vp="fa",gp="svg-inline--fa",dn="data-fa-i2svg",Ns="data-fa-pseudo-element",Yv="data-fa-pseudo-element-pending",Wl="data-prefix",Xl="data-icon",Sc="fontawesome-i2svg",Wv="async",Xv=["HTML","HEAD","STYLE","SCRIPT"],yp=function(){try{return!0}catch{return!1}}(),X="classic",ie="sharp",Ql=[X,ie];function ni(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var Hr=ni((Ei={},ce(Ei,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ce(Ei,ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Ei)),Ur=ni((Ci={},ce(Ci,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ce(Ci,ie,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ci)),Yr=ni((Ai={},ce(Ai,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ce(Ai,ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ai)),Qv=ni((Ti={},ce(Ti,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ce(Ti,ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ti)),Kv=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,wp="fa-layers-text",qv=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Zv=ni((Pi={},ce(Pi,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ce(Pi,ie,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Pi)),xp=[1,2,3,4,5,6,7,8,9,10],Jv=xp.concat([11,12,13,14,15,16,17,18,19,20]),eg=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],nn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wr=new Set;Object.keys(Ur[X]).map(Wr.add.bind(Wr));Object.keys(Ur[ie]).map(Wr.add.bind(Wr));var tg=[].concat(Ql,ti(Wr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",nn.GROUP,nn.SWAP_OPACITY,nn.PRIMARY,nn.SECONDARY]).concat(xp.map(function(e){return"".concat(e,"x")})).concat(Jv.map(function(e){return"w-".concat(e)})),kr=Gt.FontAwesomeConfig||{};function ng(e){var t=K.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function rg(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(K&&typeof K.querySelector=="function"){var ig=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ig.forEach(function(e){var t=Ul(e,2),n=t[0],r=t[1],i=rg(ng(n));i!=null&&(kr[r]=i)})}var Sp={styleDefault:"solid",familyDefault:"classic",cssPrefix:vp,replacementClass:gp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};kr.familyPrefix&&(kr.cssPrefix=kr.familyPrefix);var Xn=j(j({},Sp),kr);Xn.autoReplaceSvg||(Xn.observeMutations=!1);var D={};Object.keys(Sp).forEach(function(e){Object.defineProperty(D,e,{enumerable:!0,set:function(n){Xn[e]=n,Er.forEach(function(r){return r(D)})},get:function(){return Xn[e]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(t){Xn.cssPrefix=t,Er.forEach(function(n){return n(D)})},get:function(){return Xn.cssPrefix}});Gt.FontAwesomeConfig=D;var Er=[];function ag(e){return Er.push(e),function(){Er.splice(Er.indexOf(e),1)}}var Ct=zs,at={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function og(e){if(!(!e||!kt)){var t=K.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=K.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return K.head.insertBefore(t,r),e}}var sg="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xr(){for(var e=12,t="";e-- >0;)t+=sg[Math.random()*62|0];return t}function Zn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Kl(e){return e.classList?Zn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function bp(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lg(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(bp(e[n]),'" ')},"").trim()}function Ga(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ql(e){return e.size!==at.size||e.x!==at.x||e.y!==at.y||e.rotate!==at.rotate||e.flipX||e.flipY}function ug(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function cg(e){var t=e.transform,n=e.width,r=n===void 0?zs:n,i=e.height,a=i===void 0?zs:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&hp?l+="translate(".concat(t.x/Ct-r/2,"em, ").concat(t.y/Ct-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ct,"em), calc(-50% + ").concat(t.y/Ct,"em)) "):l+="translate(".concat(t.x/Ct,"em, ").concat(t.y/Ct,"em) "),l+="scale(".concat(t.size/Ct*(t.flipX?-1:1),", ").concat(t.size/Ct*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var fg=`:root, :host {
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
}`;function kp(){var e=vp,t=gp,n=D.cssPrefix,r=D.replacementClass,i=fg;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var bc=!1;function So(){D.autoAddCss&&!bc&&(og(kp()),bc=!0)}var dg={mixout:function(){return{dom:{css:kp,insertCss:So}}},hooks:function(){return{beforeDOMElementCreation:function(){So()},beforeI2svg:function(){So()}}}},xt=Gt||{};xt[wt]||(xt[wt]={});xt[wt].styles||(xt[wt].styles={});xt[wt].hooks||(xt[wt].hooks={});xt[wt].shims||(xt[wt].shims=[]);var qe=xt[wt],Ep=[],pg=function e(){K.removeEventListener("DOMContentLoaded",e),xa=1,Ep.map(function(t){return t()})},xa=!1;kt&&(xa=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),xa||K.addEventListener("DOMContentLoaded",pg));function mg(e){kt&&(xa?setTimeout(e,0):Ep.push(e))}function ri(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?bp(e):"<".concat(t," ").concat(lg(r),">").concat(a.map(ri).join(""),"</").concat(t,">")}function kc(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var bo=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=n,l,c,f;for(r===void 0?(l=1,f=t[a[0]]):(l=0,f=r);l<o;l++)c=a[l],f=s(f,t[c],c,t);return f};function hg(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Is(e){var t=hg(e);return t.length===1?t[0].toString(16):null}function vg(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ec(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ms(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Ec(t);typeof qe.hooks.addPack=="function"&&!i?qe.hooks.addPack(e,Ec(t)):qe.styles[e]=j(j({},qe.styles[e]||{}),a),e==="fas"&&Ms("fa",t)}var zi,Ni,Ii,Nn=qe.styles,gg=qe.shims,yg=(zi={},ce(zi,X,Object.values(Yr[X])),ce(zi,ie,Object.values(Yr[ie])),zi),Zl=null,Cp={},Ap={},Tp={},Pp={},zp={},wg=(Ni={},ce(Ni,X,Object.keys(Hr[X])),ce(Ni,ie,Object.keys(Hr[ie])),Ni);function xg(e){return~tg.indexOf(e)}function Sg(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!xg(i)?i:null}var Np=function(){var t=function(a){return bo(Nn,function(o,s,l){return o[l]=bo(s,a,{}),o},{})};Cp=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),Ap=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),zp=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Nn||D.autoFetchSvg,r=bo(gg,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});Tp=r.names,Pp=r.unicodes,Zl=Ha(D.styleDefault,{family:D.familyDefault})};ag(function(e){Zl=Ha(e.styleDefault,{family:D.familyDefault})});Np();function Jl(e,t){return(Cp[e]||{})[t]}function bg(e,t){return(Ap[e]||{})[t]}function rn(e,t){return(zp[e]||{})[t]}function Ip(e){return Tp[e]||{prefix:null,iconName:null}}function kg(e){var t=Pp[e],n=Jl("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ht(){return Zl}var eu=function(){return{prefix:null,iconName:null,rest:[]}};function Ha(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,i=Hr[r][e],a=Ur[r][e]||Ur[r][i],o=e in qe.styles?e:null;return a||o||null}var Cc=(Ii={},ce(Ii,X,Object.keys(Yr[X])),ce(Ii,ie,Object.keys(Yr[ie])),Ii);function Ua(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},ce(t,X,"".concat(D.cssPrefix,"-").concat(X)),ce(t,ie,"".concat(D.cssPrefix,"-").concat(ie)),t),o=null,s=X;(e.includes(a[X])||e.some(function(c){return Cc[X].includes(c)}))&&(s=X),(e.includes(a[ie])||e.some(function(c){return Cc[ie].includes(c)}))&&(s=ie);var l=e.reduce(function(c,f){var p=Sg(D.cssPrefix,f);if(Nn[f]?(f=yg[s].includes(f)?Qv[s][f]:f,o=f,c.prefix=f):wg[s].indexOf(f)>-1?(o=f,c.prefix=Ha(f,{family:s})):p?c.iconName=p:f!==D.replacementClass&&f!==a[X]&&f!==a[ie]&&c.rest.push(f),!i&&c.prefix&&c.iconName){var h=o==="fa"?Ip(c.iconName):{},v=rn(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||v||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Nn.far&&Nn.fas&&!D.autoFetchSvg&&(c.prefix="fas")}return c},eu());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ie&&(Nn.fass||D.autoFetchSvg)&&(l.prefix="fass",l.iconName=rn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ht()||"fas"),l}var Eg=function(){function e(){jv(this,e),this.definitions={}}return Dv(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=j(j({},n.definitions[s]||{}),o[s]),Ms(s,o[s]);var l=Yr[X][s];l&&Ms(l,o[s]),Np()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(p){typeof p=="string"&&(n[s][p]=c)}),n[s][l]=c}),n}}]),e}(),Ac=[],In={},Fn={},Cg=Object.keys(Fn);function Ag(e,t){var n=t.mixoutsTo;return Ac=e,In={},Object.keys(Fn).forEach(function(r){Cg.indexOf(r)===-1&&delete Fn[r]}),Ac.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),wa(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){In[o]||(In[o]=[]),In[o].push(a[o])})}r.provides&&r.provides(Fn)}),n}function Os(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=In[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function pn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=In[e]||[];i.forEach(function(a){a.apply(null,n)})}function St(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Fn[e]?Fn[e].apply(null,t):void 0}function _s(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ht();if(t)return t=rn(n,t)||t,kc(Mp.definitions,n,t)||kc(qe.styles,n,t)}var Mp=new Eg,Tg=function(){D.autoReplaceSvg=!1,D.observeMutations=!1,pn("noAuto")},Pg={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return kt?(pn("beforeI2svg",t),St("pseudoElements2svg",t),St("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,mg(function(){Ng({autoReplaceSvgRoot:n}),pn("watch",t)})}},zg={icon:function(t){if(t===null)return null;if(wa(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:rn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ha(t[0]);return{prefix:r,iconName:rn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(D.cssPrefix,"-"))>-1||t.match(Kv))){var i=Ua(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ht(),iconName:rn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Ht();return{prefix:a,iconName:rn(a,t)||t}}}},Fe={noAuto:Tg,config:D,dom:Pg,parse:zg,library:Mp,findIconDefinition:_s,toHtml:ri},Ng=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?K:n;(Object.keys(qe.styles).length>0||D.autoFetchSvg)&&kt&&D.autoReplaceSvg&&Fe.dom.i2svg({node:r})};function Ya(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ri(r)})}}),Object.defineProperty(e,"node",{get:function(){if(kt){var r=K.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ig(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(ql(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};i.style=Ga(j(j({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Mg(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(D.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j(j({},i),{},{id:o}),children:r}]}]}function tu(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,p=e.extra,h=e.watchable,v=h===void 0?!1:h,g=r.found?r:n,y=g.width,S=g.height,u=i==="fak",d=[D.replacementClass,a?"".concat(D.cssPrefix,"-").concat(a):""].filter(function(T){return p.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(p.classes).join(" "),m={children:[],attributes:j(j({},p.attributes),{},{"data-prefix":i,"data-icon":a,class:d,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(S)})},w=u&&!~p.classes.indexOf("fa-fw")?{width:"".concat(y/S*16*.0625,"em")}:{};v&&(m.attributes[dn]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(f||Xr())},children:[l]}),delete m.attributes.title);var x=j(j({},m),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:j(j({},w),p.styles)}),E=r.found&&n.found?St("generateAbstractMask",x)||{children:[],attributes:{}}:St("generateAbstractIcon",x)||{children:[],attributes:{}},P=E.children,C=E.attributes;return x.children=P,x.attributes=C,s?Mg(x):Ig(x)}function Tc(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=j(j(j({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(c[dn]="");var f=j({},o.styles);ql(i)&&(f.transform=cg({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var p=Ga(f);p.length>0&&(c.style=p);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function Og(e){var t=e.content,n=e.title,r=e.extra,i=j(j(j({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Ga(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ko=qe.styles;function Ls(e){var t=e[0],n=e[1],r=e.slice(4),i=Ul(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(nn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(nn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(nn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var _g={found:!1,width:512,height:512};function Lg(e,t){!yp&&!D.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function js(e,t){var n=t;return t==="fa"&&D.styleDefault!==null&&(t=Ht()),new Promise(function(r,i){if(St("missingIconAbstract"),n==="fa"){var a=Ip(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&ko[t]&&ko[t][e]){var o=ko[t][e];return r(Ls(o))}Lg(e,t),r(j(j({},_g),{},{icon:D.showMissingIcons&&e?St("missingIconAbstract")||{}:{}}))})}var Pc=function(){},Rs=D.measurePerformance&&ki&&ki.mark&&ki.measure?ki:{mark:Pc,measure:Pc},pr='FA "6.5.2"',jg=function(t){return Rs.mark("".concat(pr," ").concat(t," begins")),function(){return Op(t)}},Op=function(t){Rs.mark("".concat(pr," ").concat(t," ends")),Rs.measure("".concat(pr," ").concat(t),"".concat(pr," ").concat(t," begins"),"".concat(pr," ").concat(t," ends"))},nu={begin:jg,end:Op},Yi=function(){};function zc(e){var t=e.getAttribute?e.getAttribute(dn):null;return typeof t=="string"}function Rg(e){var t=e.getAttribute?e.getAttribute(Wl):null,n=e.getAttribute?e.getAttribute(Xl):null;return t&&n}function Dg(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(D.replacementClass)}function Fg(){if(D.autoReplaceSvg===!0)return Wi.replace;var e=Wi[D.autoReplaceSvg];return e||Wi.replace}function $g(e){return K.createElementNS("http://www.w3.org/2000/svg",e)}function Bg(e){return K.createElement(e)}function _p(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?$g:Bg:n;if(typeof e=="string")return K.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(_p(o,{ceFn:r}))}),i}function Vg(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Wi={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(_p(i),n)}),n.getAttribute(dn)===null&&D.keepOriginalSource){var r=K.createComment(Vg(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Kl(n).indexOf(D.replacementClass))return Wi.replace(t);var i=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===D.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return ri(s)}).join(`
`);n.setAttribute(dn,""),n.innerHTML=o}};function Nc(e){e()}function Lp(e,t){var n=typeof t=="function"?t:Yi;if(e.length===0)n();else{var r=Nc;D.mutateApproach===Wv&&(r=Gt.requestAnimationFrame||Nc),r(function(){var i=Fg(),a=nu.begin("mutate");e.map(i),a(),n()})}}var ru=!1;function jp(){ru=!0}function Ds(){ru=!1}var Sa=null;function Ic(e){if(xc&&D.observeMutations){var t=e.treeCallback,n=t===void 0?Yi:t,r=e.nodeCallback,i=r===void 0?Yi:r,a=e.pseudoElementsCallback,o=a===void 0?Yi:a,s=e.observeMutationsRoot,l=s===void 0?K:s;Sa=new xc(function(c){if(!ru){var f=Ht();Zn(c).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!zc(p.addedNodes[0])&&(D.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&D.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&zc(p.target)&&~eg.indexOf(p.attributeName))if(p.attributeName==="class"&&Rg(p.target)){var h=Ua(Kl(p.target)),v=h.prefix,g=h.iconName;p.target.setAttribute(Wl,v||f),g&&p.target.setAttribute(Xl,g)}else Dg(p.target)&&i(p.target)})}}),kt&&Sa.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Gg(){Sa&&Sa.disconnect()}function Hg(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ug(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Ua(Kl(e));return i.prefix||(i.prefix=Ht()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=bg(i.prefix,e.innerText)||Jl(i.prefix,Is(e.innerText))),!i.iconName&&D.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Yg(e){var t=Zn(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return D.autoA11y&&(n?t["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(r||Xr()):(t["aria-hidden"]="true",t.focusable="false")),t}function Wg(){return{iconName:null,title:null,titleId:null,prefix:null,transform:at,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ug(e),r=n.iconName,i=n.prefix,a=n.rest,o=Yg(e),s=Os("parseNodeAttributes",{},e),l=t.styleParser?Hg(e):[];return j({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:at,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Xg=qe.styles;function Rp(e){var t=D.autoReplaceSvg==="nest"?Mc(e,{styleParser:!1}):Mc(e);return~t.extra.classes.indexOf(wp)?St("generateLayersText",e,t):St("generateSvgReplacementMutation",e,t)}var Ut=new Set;Ql.map(function(e){Ut.add("fa-".concat(e))});Object.keys(Hr[X]).map(Ut.add.bind(Ut));Object.keys(Hr[ie]).map(Ut.add.bind(Ut));Ut=ti(Ut);function Oc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!kt)return Promise.resolve();var n=K.documentElement.classList,r=function(p){return n.add("".concat(Sc,"-").concat(p))},i=function(p){return n.remove("".concat(Sc,"-").concat(p))},a=D.autoFetchSvg?Ut:Ql.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Xg));a.includes("fa")||a.push("fa");var o=[".".concat(wp,":not([").concat(dn,"])")].concat(a.map(function(f){return".".concat(f,":not([").concat(dn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Zn(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=nu.begin("onTree"),c=s.reduce(function(f,p){try{var h=Rp(p);h&&f.push(h)}catch(v){yp||v.name==="MissingIcon"&&console.error(v)}return f},[]);return new Promise(function(f,p){Promise.all(c).then(function(h){Lp(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(h){l(),p(h)})})}function Qg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Rp(e).then(function(n){n&&Lp([n],t)})}function Kg(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:_s(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:_s(i||{})),e(r,j(j({},n),{},{mask:i}))}}var qg=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?at:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,p=n.title,h=p===void 0?null:p,v=n.titleId,g=v===void 0?null:v,y=n.classes,S=y===void 0?[]:y,u=n.attributes,d=u===void 0?{}:u,m=n.styles,w=m===void 0?{}:m;if(t){var x=t.prefix,E=t.iconName,P=t.icon;return Ya(j({type:"icon"},t),function(){return pn("beforeDOMElementCreation",{iconDefinition:t,params:n}),D.autoA11y&&(h?d["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(g||Xr()):(d["aria-hidden"]="true",d.focusable="false")),tu({icons:{main:Ls(P),mask:l?Ls(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:E,transform:j(j({},at),i),symbol:o,title:h,maskId:f,titleId:g,extra:{attributes:d,styles:w,classes:S}})})}},Zg={mixout:function(){return{icon:Kg(qg)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Oc,n.nodeCallback=Qg,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?K:r,a=n.callback,o=a===void 0?function(){}:a;return Oc(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,p=r.maskId,h=r.extra;return new Promise(function(v,g){Promise.all([js(i,s),f.iconName?js(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var S=Ul(y,2),u=S[0],d=S[1];v([n,tu({icons:{main:u,mask:d},prefix:s,iconName:i,transform:l,symbol:c,maskId:p,title:a,titleId:o,extra:h,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Ga(s);l.length>0&&(i.style=l);var c;return ql(o)&&(c=St("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(c||a.icon),{children:r,attributes:i}}}},Jg={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Ya({type:"layer"},function(){pn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers")].concat(ti(a)).join(" ")},children:o}]})}}}},e0={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,p=f===void 0?{}:f;return Ya({type:"counter",content:n},function(){return pn("beforeDOMElementCreation",{content:n,params:r}),Og({content:n.toString(),title:a,extra:{attributes:c,styles:p,classes:["".concat(D.cssPrefix,"-layers-counter")].concat(ti(s))}})})}}}},t0={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?at:i,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,p=f===void 0?{}:f,h=r.styles,v=h===void 0?{}:h;return Ya({type:"text",content:n},function(){return pn("beforeDOMElementCreation",{content:n,params:r}),Tc({content:n,transform:j(j({},at),a),title:s,extra:{attributes:p,styles:v,classes:["".concat(D.cssPrefix,"-layers-text")].concat(ti(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(hp){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return D.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Tc({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},n0=new RegExp('"',"ug"),_c=[1105920,1112319];function r0(e){var t=e.replace(n0,""),n=vg(t,0),r=n>=_c[0]&&n<=_c[1],i=t.length===2?t[0]===t[1]:!1;return{value:Is(i?t[0]:t),isSecondary:r||i}}function Lc(e,t){var n="".concat(Yv).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Zn(e.children),o=a.filter(function(P){return P.getAttribute(Ns)===t})[0],s=Gt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(qv),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var p=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ie:X,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ur[h][l[2].toLowerCase()]:Zv[h][c],g=r0(p),y=g.value,S=g.isSecondary,u=l[0].startsWith("FontAwesome"),d=Jl(v,y),m=d;if(u){var w=kg(y);w.iconName&&w.prefix&&(d=w.iconName,v=w.prefix)}if(d&&!S&&(!o||o.getAttribute(Wl)!==v||o.getAttribute(Xl)!==m)){e.setAttribute(n,m),o&&e.removeChild(o);var x=Wg(),E=x.extra;E.attributes[Ns]=t,js(d,v).then(function(P){var C=tu(j(j({},x),{},{icons:{main:P,mask:eu()},prefix:v,iconName:m,extra:E,watchable:!0})),T=K.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(T,e.firstChild):e.appendChild(T),T.outerHTML=C.map(function(k){return ri(k)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function i0(e){return Promise.all([Lc(e,"::before"),Lc(e,"::after")])}function a0(e){return e.parentNode!==document.head&&!~Xv.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ns)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function jc(e){if(kt)return new Promise(function(t,n){var r=Zn(e.querySelectorAll("*")).filter(a0).map(i0),i=nu.begin("searchPseudoElements");jp(),Promise.all(r).then(function(){i(),Ds(),t()}).catch(function(){i(),Ds(),n()})})}var o0={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=jc,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?K:r;D.searchPseudoElements&&jc(i)}}},Rc=!1,s0={mixout:function(){return{dom:{unwatch:function(){jp(),Rc=!0}}}},hooks:function(){return{bootstrap:function(){Ic(Os("mutationObserverCallbacks",{}))},noAuto:function(){Gg()},watch:function(n){var r=n.observeMutationsRoot;Rc?Ds():Ic(Os("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Dc=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},l0={mixout:function(){return{parse:{transform:function(n){return Dc(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Dc(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),p={transform:"".concat(l," ").concat(c," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:p,path:h};return{tag:"g",attributes:j({},v.outer),children:[{tag:"g",attributes:j({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:j(j({},r.icon.attributes),v.path)}]}]}}}},Eo={x:0,y:0,width:"100%",height:"100%"};function Fc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function u0(e){return e.tag==="g"?e.children:[e]}var c0={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Ua(i.split(" ").map(function(o){return o.trim()})):eu();return a.prefix||(a.prefix=Ht()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,c=a.width,f=a.icon,p=o.width,h=o.icon,v=ug({transform:l,containerWidth:p,iconWidth:c}),g={tag:"rect",attributes:j(j({},Eo),{},{fill:"white"})},y=f.children?{children:f.children.map(Fc)}:{},S={tag:"g",attributes:j({},v.inner),children:[Fc(j({tag:f.tag,attributes:j(j({},f.attributes),v.path)},y))]},u={tag:"g",attributes:j({},v.outer),children:[S]},d="mask-".concat(s||Xr()),m="clip-".concat(s||Xr()),w={tag:"mask",attributes:j(j({},Eo),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,u]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:u0(h)},w]};return r.push(x,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},Eo)}),{children:r,attributes:i}}}},f0={provides:function(t){var n=!1;Gt.matchMedia&&(n=Gt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:j(j({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=j(j({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:j(j({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:j(j({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j(j({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:j(j({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:j(j({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:j(j({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j(j({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},d0={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},p0=[dg,Zg,Jg,e0,t0,o0,s0,l0,c0,f0,d0];Ag(p0,{mixoutsTo:Fe});Fe.noAuto;Fe.config;Fe.library;Fe.dom;var Fs=Fe.parse;Fe.findIconDefinition;Fe.toHtml;var m0=Fe.icon;Fe.layer;Fe.text;Fe.counter;var Dp={exports:{}},h0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",v0=h0,g0=v0;function Fp(){}function $p(){}$p.resetWarningCache=Fp;var y0=function(){function e(r,i,a,o,s,l){if(l!==g0){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:$p,resetWarningCache:Fp};return n.PropTypes=n,n};Dp.exports=y0();var w0=Dp.exports;const V=Kc(w0);function $c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$c(Object(n),!0).forEach(function(r){Mn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$c(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ba(e){"@babel/helpers - typeof";return ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ba(e)}function Mn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function S0(e,t){if(e==null)return{};var n=x0(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $s(e){return b0(e)||k0(e)||E0(e)||C0()}function b0(e){if(Array.isArray(e))return Bs(e)}function k0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function E0(e,t){if(e){if(typeof e=="string")return Bs(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bs(e,t)}}function Bs(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A0(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,f=e.spinReverse,p=e.pulse,h=e.fixedWidth,v=e.inverse,g=e.border,y=e.listItem,S=e.flip,u=e.size,d=e.rotation,m=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":h,"fa-inverse":v,"fa-border":g,"fa-li":y,"fa-flip":S===!0,"fa-flip-horizontal":S==="horizontal"||S==="both","fa-flip-vertical":S==="vertical"||S==="both"},Mn(t,"fa-".concat(u),typeof u<"u"&&u!==null),Mn(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Mn(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Mn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(x){return w[x]?x:null}).filter(function(x){return x})}function T0(e){return e=e-0,e===e}function Bp(e){return T0(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var P0=["style"];function z0(e){return e.charAt(0).toUpperCase()+e.slice(1)}function N0(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Bp(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[z0(i)]=a:t[i]=a,t},{})}function Vp(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Vp(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var f=t.attributes[c];switch(c){case"class":l.attrs.className=f,delete t.attributes.class;break;case"style":l.attrs.style=N0(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[Bp(c)]=f}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=S0(n,P0);return i.attrs.style=rt(rt({},i.attrs.style),o),e.apply(void 0,[t.tag,rt(rt({},i.attrs),s)].concat($s(r)))}var Gp=!1;try{Gp=!0}catch{}function I0(){if(!Gp&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Bc(e){if(e&&ba(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Fs.icon)return Fs.icon(e);if(e===null)return null;if(e&&ba(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Co(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Mn({},e,t):{}}var Vc={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},he=q.forwardRef(function(e,t){var n=rt(rt({},Vc),e),r=n.icon,i=n.mask,a=n.symbol,o=n.className,s=n.title,l=n.titleId,c=n.maskId,f=Bc(r),p=Co("classes",[].concat($s(A0(n)),$s((o||"").split(" ")))),h=Co("transform",typeof n.transform=="string"?Fs.transform(n.transform):n.transform),v=Co("mask",Bc(i)),g=m0(f,rt(rt(rt(rt({},p),h),v),{},{symbol:a,title:s,titleId:l,maskId:c}));if(!g)return I0("Could not find icon",f),null;var y=g.abstract,S={ref:t};return Object.keys(n).forEach(function(u){Vc.hasOwnProperty(u)||(S[u]=n[u])}),M0(y[0],S)});he.displayName="FontAwesomeIcon";he.propTypes={beat:V.bool,border:V.bool,beatFade:V.bool,bounce:V.bool,className:V.string,fade:V.bool,flash:V.bool,mask:V.oneOfType([V.object,V.array,V.string]),maskId:V.string,fixedWidth:V.bool,inverse:V.bool,flip:V.oneOf([!0,!1,"horizontal","vertical","both"]),icon:V.oneOfType([V.object,V.array,V.string]),listItem:V.bool,pull:V.oneOf(["right","left"]),pulse:V.bool,rotation:V.oneOf([0,90,180,270]),shake:V.bool,size:V.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:V.bool,spinPulse:V.bool,spinReverse:V.bool,symbol:V.oneOfType([V.bool,V.string]),title:V.string,titleId:V.string,transform:V.oneOfType([V.string,V.object]),swapOpacity:V.bool};var M0=Vp.bind(null,q.createElement);const O0=({videos:e,campaigns:t})=>{const[n,r]=_.useState(null),i=o=>{r(o)},a=()=>{r(null)};return b.jsx(b.Fragment,{children:b.jsxs("div",{className:"outer-grid",children:[b.jsx("div",{className:"grid",children:e.map((o,s)=>b.jsxs("div",{onClick:()=>i(s),children:[b.jsx("div",{className:"video-grid",children:b.jsx("video",{src:o,loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"})}),b.jsxs("div",{className:"video-content",children:[b.jsx("p",{className:"txt",children:t[s].campaignName}),b.jsxs("p",{className:"txt",children:["From ",t[s].offerPrice.currency,t[s].offerPrice.price]})]})]},s))}),n!==null&&b.jsx(_0,{campaigns:t,currentIndex:n,onClose:a})]})})},_0=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=_.useState(t),[a,o]=_.useState(0),[s,l]=_.useState({}),[c,f]=_.useState(!1),[p,h]=_.useState(!1),[v,g]=_.useState(null),[y,S]=_.useState(!1),u=_.useRef([]),d=_.useRef(null);_.useRef(null),_.useEffect(()=>{const I=new IntersectionObserver(N=>{N.forEach(B=>{const ye=u.current.indexOf(B.target);B.isIntersecting?(B.target.play(),o(ye)):B.target.pause()})},{threshold:.5});return o(0),u.current.forEach(N=>{N&&I.observe(N)}),()=>{u.current.forEach(N=>{N&&I.unobserve(N)})}},[r]),_.useEffect(()=>{const I=u.current[a];I&&I.play()},[a]);const m=()=>{r!==null?r+1<e.length?(i(r+1),o(0)):(i(0),o(0)):e.length>0&&(i(0),o(0))},w=()=>{r!==null?r>0?(i(r-1),o(0)):(i(e.length-1),o(0)):e.length>0&&(i(e.length-1),o(0))},x=I=>{const N=u.current[I];N&&(N.paused?N.play():N.pause(),f(N.paused))},E=I=>{const N=u.current[I];N&&(N.muted=!N.muted,l(B=>({...B,[I]:N.muted})))},P=I=>{clearTimeout(d.current)},C=(I,N)=>{I===0&&(g(N.duration),T(N.duration))},T=I=>{clearTimeout(d.current),d.current=setTimeout(()=>{h(!0),setTimeout(()=>{h(!1)},1e4)},I*1e3)},k=I=>{clearTimeout(d.current),I===0&&v&&T(v)},A=()=>{clearTimeout(d.current)},z=()=>{S(!y)},O=I=>{const N=I.split(`
`);return N.length>2?{truncated:N.slice(0,2).join(`
`),hasMore:!0}:{truncated:I,hasMore:!1}};return _.useEffect(()=>{o(0)},[r]),b.jsxs("div",{className:"whole123",children:[b.jsx("div",{className:"prevbtn123",onClick:w,children:b.jsx(he,{icon:Hl})}),b.jsx("div",{className:"nextbtn123",onClick:m,children:b.jsx(he,{icon:$l})}),b.jsx("div",{className:"reelsContainer",children:e[r].videoId.map((I,N)=>b.jsxs("div",{className:"reel",children:[b.jsx("div",{className:"closediv123",children:b.jsx("button",{className:"closebtn123",onClick:n,children:b.jsx(he,{icon:Gl})})}),b.jsxs("div",{className:"video-container",children:[b.jsx("video",{ref:B=>u.current[N]=B,src:I,className:"ad",loop:!0,playsInline:!0,controls:!1,autoPlay:N===a,onClick:()=>x(N),onPause:()=>{A(),f(!0)},onPlay:()=>{k(N),f(!1)},onEnded:()=>P(),onLoadedMetadata:B=>C(N,B.target)}),c&&b.jsx(he,{icon:cp,onClick:()=>x(N),className:"play-button123"}),b.jsxs("div",{className:"bookdiv123",children:[b.jsx("div",{className:"img1",children:b.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),b.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[b.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),b.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[y?e[r].campaignDetails:O(e[r].campaignDetails).truncated,O(e[r].campaignDetails).hasMore&&b.jsx("div",{children:b.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:z,children:y?" View Less":" View More"})})]}),b.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[r].offerPrice.currency,e[r].offerPrice.price]})]}),b.jsx("div",{className:"divbtn",children:b.jsx("a",{href:e[r].hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]}),b.jsx("div",{className:"functions",children:b.jsx(he,{icon:s[N]?Vl:Bl,className:"volume123",onClick:()=>E(N),style:{cursor:"pointer"}})})]},N))})]})},L0=()=>{const[e,t]=_.useState([]),[n,r]=_.useState([]);return _.useEffect(()=>{const a=document.getElementById("root-grid").dataset.campaignId;(async s=>{try{const c=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${s}`)).json(),f=c.campaigns.map(p=>p.videoId[0]);t(f),r(c.campaigns)}catch(l){console.error("Error fetching data:",l)}})(a)},[]),b.jsxs("div",{className:"App",children:[b.jsx("style",{children:`
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


`}),b.jsx(O0,{videos:e,campaigns:n})]})},j0=({campaigns:e})=>{const t=_.useRef(null),[n,r]=_.useState(!1),[i,a]=_.useState(null),[o,s]=_.useState(0),[l,c]=_.useState(!1),[f,p]=_.useState(0),[h,v]=_.useState({}),[g,y]=_.useState(!1);_.useEffect(()=>{const A=t.current,z=()=>{y(A.paused),A.paused&&A.play()};return A&&(A.addEventListener("play",z),A.addEventListener("pause",z)),()=>{A&&(A.removeEventListener("play",z),A.removeEventListener("pause",z))}},[i,o,e]),_.useEffect(()=>{if(i!==null&&e[i]){const A=e[i];if(o<A.videoId.length){const z=A.videoId[o];t.current.src=z,t.current.play(),p(0),y(!1)}}},[i,o,e]),_.useEffect(()=>{const A=setInterval(()=>{t.current&&p(t.current.currentTime/t.current.duration*100)},100);return()=>clearInterval(A)},[o,i]),_.useEffect(()=>{t.current&&(t.current.muted=l)},[l]);const S=A=>{a(A),s(0)},u=()=>{if(v(A=>({...A,[`${i}-${o}`]:!0})),p(100),i!==null&&e[i]){const A=e[i];o+1<A.videoId.length?s(o+1):i+1<e.length?(a(i+1),s(0)):(a(null),s(0))}},d=()=>{i!==null?i+1<e.length?(a(i+1),s(0)):(a(0),s(0)):e.length>0&&(a(0),s(0))},m=()=>{i!==null?i>0?(a(i-1),s(0)):(a(e.length-1),s(0)):e.length>0&&(a(e.length-1),s(0))},w=()=>{i!==null&&e[i]&&o+1<e[i].videoId.length&&(v(A=>({...A,[`${i}-${o}`]:!0})),s(o+1))},x=()=>{i!==null&&e[i]&&o>0&&s(o-1)},E=()=>{c(A=>!A)},P=()=>{a(null),s(0),y(!1),c(!1)},C=A=>{const z=A.currentTarget.getBoundingClientRect(),O=A.clientX-z.left,I=z.width;O<I/2?x():w()},T=()=>{r(!n)},k=A=>{const z=A.split(`
`);return z.length>2?{truncated:z.slice(0,2).join(`
`),hasMore:!0}:{truncated:A,hasMore:!1}};return b.jsx(b.Fragment,{children:b.jsxs("div",{className:"storiesHeader",children:[b.jsx("div",{className:"outer",children:e.map((A,z)=>b.jsx("div",{onClick:()=>S(z),className:`inner ${i===z?"active":""} ${A.videoId.some((O,I)=>h[`${z}-${I}`])?"played":"not-played"}`,children:b.jsx("img",{src:A.campaignPhoto,alt:"Campaign",className:"campaign-photo"})},z))}),b.jsxs("div",{className:`topp ${i!==null?"active":""}`,children:[b.jsx("div",{className:"next",onClick:d,children:b.jsx(he,{icon:$l})}),b.jsx("div",{className:"previous",onClick:m,children:b.jsx(he,{icon:Hl})}),b.jsx("div",{className:"outer-box",children:i!==null&&b.jsxs("div",{className:"boxed-video",children:[b.jsx("div",{className:"mute-unmute",onClick:E,children:l?b.jsx(he,{icon:Vl}):b.jsx(he,{icon:Bl})}),b.jsx("div",{className:"close-button",onClick:P,children:b.jsx(he,{className:"close",icon:Gl})}),b.jsx("div",{className:"progress-bar",children:e[i].videoId.map((A,z)=>b.jsx("div",{className:"progress",children:b.jsx("div",{className:"progress1",style:{width:`${z===o?f:h[`${i}-${z}`]?100:0}%`}})},z))}),b.jsx("video",{className:"boxed-video",ref:t,onClick:C,onEnded:u,autoPlay:!0,children:"Your browser does not support the video tag."}),b.jsxs("div",{className:"bookdiv",children:[b.jsx("div",{className:"img1",children:b.jsx("img",{className:"img",src:e[i].campaignPhoto,alt:"Campaign"})}),b.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[b.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[i].campaignName}),b.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[n?e[i].campaignDetails:k(e[i].campaignDetails).truncated,k(e[i].campaignDetails).hasMore&&b.jsx("div",{children:b.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:T,children:n?" View Less":" View More"})})]}),b.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[i].offerPrice.currency,e[i].offerPrice.price]})]}),b.jsx("div",{className:"divbtn",children:b.jsx("a",{href:e[i].hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]})})]})]})})};function R0(){_.useState([]);const[e,t]=_.useState([]);return _.useState(""),_.useEffect(()=>{const r=document.getElementById("root-stories").dataset.campaignId;r?(async a=>{try{const s=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${a}`)).json();t(s.campaigns)}catch(o){console.error("Error fetching data:",o)}})(r):console.log("no campaign id found!")},[]),b.jsxs("div",{className:"App1",children:[b.jsx("style",{children:` .root1 {
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
    }`}),b.jsx(j0,{campaigns:e}),";"]})}function Gc(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function iu(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:Gc(t[n])&&Gc(e[n])&&Object.keys(t[n]).length>0&&iu(e[n],t[n])})}const Hp={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Jn(){const e=typeof document<"u"?document:{};return iu(e,Hp),e}const D0={document:Hp,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function $e(){const e=typeof window<"u"?window:{};return iu(e,D0),e}function F0(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function $0(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Vs(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function ka(){return Date.now()}function B0(e){const t=$e();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function V0(e,t){t===void 0&&(t="x");const n=$e();let r,i,a;const o=B0(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(s=>s.replace(",",".")).join(", ")),a=new n.WebKitCSSMatrix(i==="none"?"":i)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=a.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=a.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=a.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Mi(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function G0(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Oe(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!G0(r)){const i=Object.keys(Object(r)).filter(a=>t.indexOf(a)<0);for(let a=0,o=i.length;a<o;a+=1){const s=i[a],l=Object.getOwnPropertyDescriptor(r,s);l!==void 0&&l.enumerable&&(Mi(e[s])&&Mi(r[s])?r[s].__swiper__?e[s]=r[s]:Oe(e[s],r[s]):!Mi(e[s])&&Mi(r[s])?(e[s]={},r[s].__swiper__?e[s]=r[s]:Oe(e[s],r[s])):e[s]=r[s])}}}return e}function Oi(e,t,n){e.style.setProperty(t,n)}function Up(e){let{swiper:t,targetPosition:n,side:r}=e;const i=$e(),a=-t.translate;let o=null,s;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=n>a?"next":"prev",f=(h,v)=>c==="next"&&h>=v||c==="prev"&&h<=v,p=()=>{s=new Date().getTime(),o===null&&(o=s);const h=Math.max(Math.min((s-o)/l,1),0),v=.5-Math.cos(h*Math.PI)/2;let g=a+v*(n-a);if(f(g,n)&&(g=n),t.wrapperEl.scrollTo({[r]:g}),f(g,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:g})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(p)};p()}function au(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function ot(e,t){return t===void 0&&(t=""),[...e.children].filter(n=>n.matches(t))}function Ea(e){try{console.warn(e);return}catch{}}function Qr(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:F0(t)),n}function H0(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function U0(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Mt(e,t){return $e().getComputedStyle(e,null).getPropertyValue(t)}function Ca(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Yp(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Gs(e,t,n){const r=$e();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function fe(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Wp(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let a=ot(e.el,`.${r[i]}`)[0];a||(a=Qr("div",r[i]),a.className=r[i],e.el.append(a)),n[i]=a,t[i]=a}}),n}function Y0(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function a(g){let y;return g&&typeof g=="string"&&t.isElement&&(y=t.el.querySelector(g),y)?y:(g&&(typeof g=="string"&&(y=[...document.querySelectorAll(g)]),t.params.uniqueNavElements&&typeof g=="string"&&y&&y.length>1&&t.el.querySelectorAll(g).length===1?y=t.el.querySelector(g):y&&y.length===1&&(y=y[0])),g&&!y?g:y)}function o(g,y){const S=t.params.navigation;g=fe(g),g.forEach(u=>{u&&(u.classList[y?"add":"remove"](...S.disabledClass.split(" ")),u.tagName==="BUTTON"&&(u.disabled=y),t.params.watchOverflow&&t.enabled&&u.classList[t.isLocked?"add":"remove"](S.lockClass))})}function s(){const{nextEl:g,prevEl:y}=t.navigation;if(t.params.loop){o(y,!1),o(g,!1);return}o(y,t.isBeginning&&!t.params.rewind),o(g,t.isEnd&&!t.params.rewind)}function l(g){g.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(g){g.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function f(){const g=t.params.navigation;if(t.params.navigation=Wp(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(g.nextEl||g.prevEl))return;let y=a(g.nextEl),S=a(g.prevEl);Object.assign(t.navigation,{nextEl:y,prevEl:S}),y=fe(y),S=fe(S);const u=(d,m)=>{d&&d.addEventListener("click",m==="next"?c:l),!t.enabled&&d&&d.classList.add(...g.lockClass.split(" "))};y.forEach(d=>u(d,"next")),S.forEach(d=>u(d,"prev"))}function p(){let{nextEl:g,prevEl:y}=t.navigation;g=fe(g),y=fe(y);const S=(u,d)=>{u.removeEventListener("click",d==="next"?c:l),u.classList.remove(...t.params.navigation.disabledClass.split(" "))};g.forEach(u=>S(u,"next")),y.forEach(u=>S(u,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?v():(f(),s())}),r("toEdge fromEdge lock unlock",()=>{s()}),r("destroy",()=>{p()}),r("enable disable",()=>{let{nextEl:g,prevEl:y}=t.navigation;if(g=fe(g),y=fe(y),t.enabled){s();return}[...g,...y].filter(S=>!!S).forEach(S=>S.classList.add(t.params.navigation.lockClass))}),r("click",(g,y)=>{let{nextEl:S,prevEl:u}=t.navigation;S=fe(S),u=fe(u);const d=y.target;let m=u.includes(d)||S.includes(d);if(t.isElement&&!m){const w=y.path||y.composedPath&&y.composedPath();w&&(m=w.find(x=>S.includes(x)||u.includes(x)))}if(t.params.navigation.hideOnClick&&!m){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===d||t.pagination.el.contains(d)))return;let w;S.length?w=S[0].classList.contains(t.params.navigation.hiddenClass):u.length&&(w=u[0].classList.contains(t.params.navigation.hiddenClass)),i(w===!0?"navigationShow":"navigationHide"),[...S,...u].filter(x=>!!x).forEach(x=>x.classList.toggle(t.params.navigation.hiddenClass))}});const h=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),f(),s()},v=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(t.navigation,{enable:h,disable:v,update:s,init:f,destroy:p})}function lr(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function W0(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const a="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:u=>u,formatFractionTotal:u=>u,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),t.pagination={el:null,bullets:[]};let o,s=0;function l(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function c(u,d){const{bulletActiveClass:m}=t.params.pagination;u&&(u=u[`${d==="prev"?"previous":"next"}ElementSibling`],u&&(u.classList.add(`${m}-${d}`),u=u[`${d==="prev"?"previous":"next"}ElementSibling`],u&&u.classList.add(`${m}-${d}-${d}`)))}function f(u){const d=u.target.closest(lr(t.params.pagination.bulletClass));if(!d)return;u.preventDefault();const m=Ca(d)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===m)return;t.slideToLoop(m)}else t.slideTo(m)}function p(){const u=t.rtl,d=t.params.pagination;if(l())return;let m=t.pagination.el;m=fe(m);let w,x;const E=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,P=t.params.loop?Math.ceil(E/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(x=t.previousRealIndex||0,w=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(w=t.snapIndex,x=t.previousSnapIndex):(x=t.previousIndex||0,w=t.activeIndex||0),d.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const C=t.pagination.bullets;let T,k,A;if(d.dynamicBullets&&(o=Gs(C[0],t.isHorizontal()?"width":"height"),m.forEach(z=>{z.style[t.isHorizontal()?"width":"height"]=`${o*(d.dynamicMainBullets+4)}px`}),d.dynamicMainBullets>1&&x!==void 0&&(s+=w-(x||0),s>d.dynamicMainBullets-1?s=d.dynamicMainBullets-1:s<0&&(s=0)),T=Math.max(w-s,0),k=T+(Math.min(C.length,d.dynamicMainBullets)-1),A=(k+T)/2),C.forEach(z=>{const O=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(I=>`${d.bulletActiveClass}${I}`)].map(I=>typeof I=="string"&&I.includes(" ")?I.split(" "):I).flat();z.classList.remove(...O)}),m.length>1)C.forEach(z=>{const O=Ca(z);O===w?z.classList.add(...d.bulletActiveClass.split(" ")):t.isElement&&z.setAttribute("part","bullet"),d.dynamicBullets&&(O>=T&&O<=k&&z.classList.add(...`${d.bulletActiveClass}-main`.split(" ")),O===T&&c(z,"prev"),O===k&&c(z,"next"))});else{const z=C[w];if(z&&z.classList.add(...d.bulletActiveClass.split(" ")),t.isElement&&C.forEach((O,I)=>{O.setAttribute("part",I===w?"bullet-active":"bullet")}),d.dynamicBullets){const O=C[T],I=C[k];for(let N=T;N<=k;N+=1)C[N]&&C[N].classList.add(...`${d.bulletActiveClass}-main`.split(" "));c(O,"prev"),c(I,"next")}}if(d.dynamicBullets){const z=Math.min(C.length,d.dynamicMainBullets+4),O=(o*z-o)/2-A*o,I=u?"right":"left";C.forEach(N=>{N.style[t.isHorizontal()?I:"top"]=`${O}px`})}}m.forEach((C,T)=>{if(d.type==="fraction"&&(C.querySelectorAll(lr(d.currentClass)).forEach(k=>{k.textContent=d.formatFractionCurrent(w+1)}),C.querySelectorAll(lr(d.totalClass)).forEach(k=>{k.textContent=d.formatFractionTotal(P)})),d.type==="progressbar"){let k;d.progressbarOpposite?k=t.isHorizontal()?"vertical":"horizontal":k=t.isHorizontal()?"horizontal":"vertical";const A=(w+1)/P;let z=1,O=1;k==="horizontal"?z=A:O=A,C.querySelectorAll(lr(d.progressbarFillClass)).forEach(I=>{I.style.transform=`translate3d(0,0,0) scaleX(${z}) scaleY(${O})`,I.style.transitionDuration=`${t.params.speed}ms`})}d.type==="custom"&&d.renderCustom?(C.innerHTML=d.renderCustom(t,w+1,P),T===0&&i("paginationRender",C)):(T===0&&i("paginationRender",C),i("paginationUpdate",C)),t.params.watchOverflow&&t.enabled&&C.classList[t.isLocked?"add":"remove"](d.lockClass)})}function h(){const u=t.params.pagination;if(l())return;const d=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let m=t.pagination.el;m=fe(m);let w="";if(u.type==="bullets"){let x=t.params.loop?Math.ceil(d/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&x>d&&(x=d);for(let E=0;E<x;E+=1)u.renderBullet?w+=u.renderBullet.call(t,E,u.bulletClass):w+=`<${u.bulletElement} ${t.isElement?'part="bullet"':""} class="${u.bulletClass}"></${u.bulletElement}>`}u.type==="fraction"&&(u.renderFraction?w=u.renderFraction.call(t,u.currentClass,u.totalClass):w=`<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`),u.type==="progressbar"&&(u.renderProgressbar?w=u.renderProgressbar.call(t,u.progressbarFillClass):w=`<span class="${u.progressbarFillClass}"></span>`),t.pagination.bullets=[],m.forEach(x=>{u.type!=="custom"&&(x.innerHTML=w||""),u.type==="bullets"&&t.pagination.bullets.push(...x.querySelectorAll(lr(u.bulletClass)))}),u.type!=="custom"&&i("paginationRender",m[0])}function v(){t.params.pagination=Wp(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const u=t.params.pagination;if(!u.el)return;let d;typeof u.el=="string"&&t.isElement&&(d=t.el.querySelector(u.el)),!d&&typeof u.el=="string"&&(d=[...document.querySelectorAll(u.el)]),d||(d=u.el),!(!d||d.length===0)&&(t.params.uniqueNavElements&&typeof u.el=="string"&&Array.isArray(d)&&d.length>1&&(d=[...t.el.querySelectorAll(u.el)],d.length>1&&(d=d.filter(m=>Yp(m,".swiper")[0]===t.el)[0])),Array.isArray(d)&&d.length===1&&(d=d[0]),Object.assign(t.pagination,{el:d}),d=fe(d),d.forEach(m=>{u.type==="bullets"&&u.clickable&&m.classList.add(...(u.clickableClass||"").split(" ")),m.classList.add(u.modifierClass+u.type),m.classList.add(t.isHorizontal()?u.horizontalClass:u.verticalClass),u.type==="bullets"&&u.dynamicBullets&&(m.classList.add(`${u.modifierClass}${u.type}-dynamic`),s=0,u.dynamicMainBullets<1&&(u.dynamicMainBullets=1)),u.type==="progressbar"&&u.progressbarOpposite&&m.classList.add(u.progressbarOppositeClass),u.clickable&&m.addEventListener("click",f),t.enabled||m.classList.add(u.lockClass)}))}function g(){const u=t.params.pagination;if(l())return;let d=t.pagination.el;d&&(d=fe(d),d.forEach(m=>{m.classList.remove(u.hiddenClass),m.classList.remove(u.modifierClass+u.type),m.classList.remove(t.isHorizontal()?u.horizontalClass:u.verticalClass),u.clickable&&(m.classList.remove(...(u.clickableClass||"").split(" ")),m.removeEventListener("click",f))})),t.pagination.bullets&&t.pagination.bullets.forEach(m=>m.classList.remove(...u.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const u=t.params.pagination;let{el:d}=t.pagination;d=fe(d),d.forEach(m=>{m.classList.remove(u.horizontalClass,u.verticalClass),m.classList.add(t.isHorizontal()?u.horizontalClass:u.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?S():(v(),h(),p())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&p()}),r("snapIndexChange",()=>{p()}),r("snapGridLengthChange",()=>{h(),p()}),r("destroy",()=>{g()}),r("enable disable",()=>{let{el:u}=t.pagination;u&&(u=fe(u),u.forEach(d=>d.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{p()}),r("click",(u,d)=>{const m=d.target,w=fe(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&w&&w.length>0&&!m.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&m===t.navigation.nextEl||t.navigation.prevEl&&m===t.navigation.prevEl))return;const x=w[0].classList.contains(t.params.pagination.hiddenClass);i(x===!0?"paginationShow":"paginationHide"),w.forEach(E=>E.classList.toggle(t.params.pagination.hiddenClass))}});const y=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:u}=t.pagination;u&&(u=fe(u),u.forEach(d=>d.classList.remove(t.params.pagination.paginationDisabledClass))),v(),h(),p()},S=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:u}=t.pagination;u&&(u=fe(u),u.forEach(d=>d.classList.add(t.params.pagination.paginationDisabledClass))),g()};Object.assign(t.pagination,{enable:y,disable:S,render:h,update:p,init:v,destroy:g})}function X0(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:a,overwriteParams:o,perspective:s,recreateShadows:l,getEffectParams:c}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),s&&s()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const p=o?o():{};Object.assign(n.params,p),Object.assign(n.originalParams,p)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(p,h)=>{n.params.effect===t&&a(h)}),r("transitionEnd",()=>{if(n.params.effect===t&&l){if(!c||!c().slideShadows)return;n.slides.forEach(p=>{p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>h.remove())}),l()}});let f;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(f=!0),requestAnimationFrame(()=>{f&&n.slides&&n.slides.length&&(i(),f=!1)}))})}function Q0(e,t){const n=au(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function Hc(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,i=au(t);let a=i.querySelector(`.${r.split(" ").join(".")}`);return a||(a=Qr("div",r.split(" ")),i.append(a)),a}function K0(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),X0({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:o,height:s,slides:l,slidesSizesGrid:c}=t,f=t.params.coverflowEffect,p=t.isHorizontal(),h=t.translate,v=p?-h+o/2:-h+s/2,g=p?f.rotate:-f.rotate,y=f.depth;for(let S=0,u=l.length;S<u;S+=1){const d=l[S],m=c[S],w=d.swiperSlideOffset,x=(v-w-m/2)/m,E=typeof f.modifier=="function"?f.modifier(x):x*f.modifier;let P=p?g*E:0,C=p?0:g*E,T=-y*Math.abs(E),k=f.stretch;typeof k=="string"&&k.indexOf("%")!==-1&&(k=parseFloat(f.stretch)/100*m);let A=p?0:k*E,z=p?k*E:0,O=1-(1-f.scale)*Math.abs(E);Math.abs(z)<.001&&(z=0),Math.abs(A)<.001&&(A=0),Math.abs(T)<.001&&(T=0),Math.abs(P)<.001&&(P=0),Math.abs(C)<.001&&(C=0),Math.abs(O)<.001&&(O=0),t.browser&&t.browser.need3dFix&&(Math.abs(P)/90%2===1&&(P+=.001),Math.abs(C)/90%2===1&&(C+=.001));const I=`translate3d(${z}px,${A}px,${T}px)  rotateX(${C}deg) rotateY(${P}deg) scale(${O})`,N=Q0(f,d);if(N.style.transform=I,d.style.zIndex=-Math.abs(Math.round(E))+1,f.slideShadows){let B=p?d.querySelector(".swiper-slide-shadow-left"):d.querySelector(".swiper-slide-shadow-top"),ye=p?d.querySelector(".swiper-slide-shadow-right"):d.querySelector(".swiper-slide-shadow-bottom");B||(B=Hc("coverflow",d,p?"left":"top")),ye||(ye=Hc("coverflow",d,p?"right":"bottom")),B&&(B.style.opacity=E>0?E:0),ye&&(ye.style.opacity=-E>0?-E:0)}}},setTransition:o=>{t.slides.map(l=>au(l)).forEach(l=>{l.style.transitionDuration=`${o}ms`,l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${o}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}let Ao;function q0(){const e=$e(),t=Jn();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Xp(){return Ao||(Ao=q0()),Ao}let To;function Z0(e){let{userAgent:t}=e===void 0?{}:e;const n=Xp(),r=$e(),i=r.navigator.platform,a=t||r.navigator.userAgent,o={ios:!1,android:!1},s=r.screen.width,l=r.screen.height,c=a.match(/(Android);?[\s\/]+([\d.]+)?/);let f=a.match(/(iPad).*OS\s([\d_]+)/);const p=a.match(/(iPod)(.*OS\s([\d_]+))?/),h=!f&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),v=i==="Win32";let g=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&g&&n.touch&&y.indexOf(`${s}x${l}`)>=0&&(f=a.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),g=!1),c&&!v&&(o.os="android",o.android=!0),(f||h||p)&&(o.os="ios",o.ios=!0),o}function Qp(e){return e===void 0&&(e={}),To||(To=Z0(e)),To}let Po;function J0(){const e=$e(),t=Qp();let n=!1;function r(){const s=e.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(r()){const s=String(e.navigator.userAgent);if(s.includes("Version/")){const[l,c]=s.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));n=l<16||l===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),a=r(),o=a||i&&t.ios;return{isSafari:n||a,needPerspectiveFix:n,need3dFix:o,isWebView:i}}function e1(){return Po||(Po=J0()),Po}function t1(e){let{swiper:t,on:n,emit:r}=e;const i=$e();let a=null,o=null;const s=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(a=new ResizeObserver(p=>{o=i.requestAnimationFrame(()=>{const{width:h,height:v}=t;let g=h,y=v;p.forEach(S=>{let{contentBoxSize:u,contentRect:d,target:m}=S;m&&m!==t.el||(g=d?d.width:(u[0]||u).inlineSize,y=d?d.height:(u[0]||u).blockSize)}),(g!==h||y!==v)&&s()})}),a.observe(t.el))},c=()=>{o&&i.cancelAnimationFrame(o),a&&a.unobserve&&t.el&&(a.unobserve(t.el),a=null)},f=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",s),i.addEventListener("orientationchange",f)}),n("destroy",()=>{c(),i.removeEventListener("resize",s),i.removeEventListener("orientationchange",f)})}function n1(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const a=[],o=$e(),s=function(f,p){p===void 0&&(p={});const h=o.MutationObserver||o.WebkitMutationObserver,v=new h(g=>{if(t.__preventObserver__)return;if(g.length===1){i("observerUpdate",g[0]);return}const y=function(){i("observerUpdate",g[0])};o.requestAnimationFrame?o.requestAnimationFrame(y):o.setTimeout(y,0)});v.observe(f,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:typeof p.childList>"u"?!0:p.childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),a.push(v)},l=()=>{if(t.params.observer){if(t.params.observeParents){const f=Yp(t.hostEl);for(let p=0;p<f.length;p+=1)s(f[p])}s(t.hostEl,{childList:t.params.observeSlideChildren}),s(t.wrapperEl,{attributes:!1})}},c=()=>{a.forEach(f=>{f.disconnect()}),a.splice(0,a.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",l),r("destroy",c)}var r1={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(a=>{r.eventsListeners[a]||(r.eventsListeners[a]=[]),r.eventsListeners[a][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,a)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(a,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return typeof a[0]=="string"||Array.isArray(a[0])?(t=a[0],n=a.slice(1,a.length),r=e):(t=a[0].events,n=a[0].data,r=a[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(r,[l,...n])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(c=>{c.apply(r,n)})}),e}};function i1(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Mt(r,"padding-left")||0,10)-parseInt(Mt(r,"padding-right")||0,10),n=n-parseInt(Mt(r,"padding-top")||0,10)-parseInt(Mt(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function a1(){const e=this;function t(k,A){return parseFloat(k.getPropertyValue(e.getDirectionLabel(A))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:a,rtlTranslate:o,wrongRTL:s}=e,l=e.virtual&&n.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,f=ot(i,`.${e.params.slideClass}, swiper-slide`),p=l?e.virtual.slides.length:f.length;let h=[];const v=[],g=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(e));let S=n.slidesOffsetAfter;typeof S=="function"&&(S=n.slidesOffsetAfter.call(e));const u=e.snapGrid.length,d=e.slidesGrid.length;let m=n.spaceBetween,w=-y,x=0,E=0;if(typeof a>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*a:typeof m=="string"&&(m=parseFloat(m)),e.virtualSize=-m,f.forEach(k=>{o?k.style.marginLeft="":k.style.marginRight="",k.style.marginBottom="",k.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Oi(r,"--swiper-centered-offset-before",""),Oi(r,"--swiper-centered-offset-after",""));const P=n.grid&&n.grid.rows>1&&e.grid;P?e.grid.initSlides(f):e.grid&&e.grid.unsetSlides();let C;const T=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(k=>typeof n.breakpoints[k].slidesPerView<"u").length>0;for(let k=0;k<p;k+=1){C=0;let A;if(f[k]&&(A=f[k]),P&&e.grid.updateSlide(k,A,f),!(f[k]&&Mt(A,"display")==="none")){if(n.slidesPerView==="auto"){T&&(f[k].style[e.getDirectionLabel("width")]="");const z=getComputedStyle(A),O=A.style.transform,I=A.style.webkitTransform;if(O&&(A.style.transform="none"),I&&(A.style.webkitTransform="none"),n.roundLengths)C=e.isHorizontal()?Gs(A,"width"):Gs(A,"height");else{const N=t(z,"width"),B=t(z,"padding-left"),ye=t(z,"padding-right"),L=t(z,"margin-left"),F=t(z,"margin-right"),$=z.getPropertyValue("box-sizing");if($&&$==="border-box")C=N+L+F;else{const{clientWidth:J,offsetWidth:oe}=A;C=N+B+ye+L+F+(oe-J)}}O&&(A.style.transform=O),I&&(A.style.webkitTransform=I),n.roundLengths&&(C=Math.floor(C))}else C=(a-(n.slidesPerView-1)*m)/n.slidesPerView,n.roundLengths&&(C=Math.floor(C)),f[k]&&(f[k].style[e.getDirectionLabel("width")]=`${C}px`);f[k]&&(f[k].swiperSlideSize=C),g.push(C),n.centeredSlides?(w=w+C/2+x/2+m,x===0&&k!==0&&(w=w-a/2-m),k===0&&(w=w-a/2-m),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),E%n.slidesPerGroup===0&&h.push(w),v.push(w)):(n.roundLengths&&(w=Math.floor(w)),(E-Math.min(e.params.slidesPerGroupSkip,E))%e.params.slidesPerGroup===0&&h.push(w),v.push(w),w=w+C+m),e.virtualSize+=C+m,x=C,E+=1}}if(e.virtualSize=Math.max(e.virtualSize,a)+S,o&&s&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+m}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),P&&e.grid.updateWrapperSize(C,h),!n.centeredSlides){const k=[];for(let A=0;A<h.length;A+=1){let z=h[A];n.roundLengths&&(z=Math.floor(z)),h[A]<=e.virtualSize-a&&k.push(z)}h=k,Math.floor(e.virtualSize-a)-Math.floor(h[h.length-1])>1&&h.push(e.virtualSize-a)}if(l&&n.loop){const k=g[0]+m;if(n.slidesPerGroup>1){const A=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),z=k*n.slidesPerGroup;for(let O=0;O<A;O+=1)h.push(h[h.length-1]+z)}for(let A=0;A<e.virtual.slidesBefore+e.virtual.slidesAfter;A+=1)n.slidesPerGroup===1&&h.push(h[h.length-1]+k),v.push(v[v.length-1]+k),e.virtualSize+=k}if(h.length===0&&(h=[0]),m!==0){const k=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");f.filter((A,z)=>!n.cssMode||n.loop?!0:z!==f.length-1).forEach(A=>{A.style[k]=`${m}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let k=0;g.forEach(z=>{k+=z+(m||0)}),k-=m;const A=k-a;h=h.map(z=>z<=0?-y:z>A?A+S:z)}if(n.centerInsufficientSlides){let k=0;g.forEach(z=>{k+=z+(m||0)}),k-=m;const A=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(k+A<a){const z=(a-k-A)/2;h.forEach((O,I)=>{h[I]=O-z}),v.forEach((O,I)=>{v[I]=O+z})}}if(Object.assign(e,{slides:f,snapGrid:h,slidesGrid:v,slidesSizesGrid:g}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Oi(r,"--swiper-centered-offset-before",`${-h[0]}px`),Oi(r,"--swiper-centered-offset-after",`${e.size/2-g[g.length-1]/2}px`);const k=-e.snapGrid[0],A=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(z=>z+k),e.slidesGrid=e.slidesGrid.map(z=>z+A)}if(p!==c&&e.emit("slidesLengthChange"),h.length!==u&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),v.length!==d&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const k=`${n.containerModifierClass}backface-hidden`,A=e.el.classList.contains(k);p<=n.maxBackfaceHiddenSlides?A||e.el.classList.add(k):A&&e.el.classList.remove(k)}}function o1(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,a;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=s=>r?t.slides[t.getSlideIndexByData(s)]:t.slides[s];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(s=>{n.push(s)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){const s=t.activeIndex+a;if(s>t.slides.length&&!r)break;n.push(o(s))}else n.push(o(t.activeIndex));for(a=0;a<n.length;a+=1)if(typeof n[a]<"u"){const s=n[a].offsetHeight;i=s>i?s:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function s1(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Uc=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function l1(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:a}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;i&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s=="string"&&s.indexOf("%")>=0?s=parseFloat(s.replace("%",""))/100*t.size:typeof s=="string"&&(s=parseFloat(s));for(let l=0;l<r.length;l+=1){const c=r[l];let f=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(f-=r[0].swiperSlideOffset);const p=(o+(n.centeredSlides?t.minTranslate():0)-f)/(c.swiperSlideSize+s),h=(o-a[0]+(n.centeredSlides?t.minTranslate():0)-f)/(c.swiperSlideSize+s),v=-(o-f),g=v+t.slidesSizesGrid[l],y=v>=0&&v<=t.size-t.slidesSizesGrid[l],S=v>=0&&v<t.size-1||g>1&&g<=t.size||v<=0&&g>=t.size;S&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l)),Uc(c,S,n.slideVisibleClass),Uc(c,y,n.slideFullyVisibleClass),c.progress=i?-p:p,c.originalProgress=i?-h:h}}function u1(e){const t=this;if(typeof e>"u"){const f=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*f||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:a,isEnd:o,progressLoop:s}=t;const l=a,c=o;if(r===0)i=0,a=!0,o=!0;else{i=(e-t.minTranslate())/r;const f=Math.abs(e-t.minTranslate())<1,p=Math.abs(e-t.maxTranslate())<1;a=f||i<=0,o=p||i>=1,f&&(i=0),p&&(i=1)}if(n.loop){const f=t.getSlideIndexByData(0),p=t.getSlideIndexByData(t.slides.length-1),h=t.slidesGrid[f],v=t.slidesGrid[p],g=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=h?s=(y-h)/g:s=(y+g-v)/g,s>1&&(s-=1)}Object.assign(t,{progress:i,progressLoop:s,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!a||c&&!o)&&t.emit("fromEdge"),t.emit("progress",i)}const zo=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function c1(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,a=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,s=p=>ot(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];let l,c,f;if(a)if(n.loop){let p=i-e.virtual.slidesBefore;p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),l=s(`[data-swiper-slide-index="${p}"]`)}else l=s(`[data-swiper-slide-index="${i}"]`);else o?(l=t.filter(p=>p.column===i)[0],f=t.filter(p=>p.column===i+1)[0],c=t.filter(p=>p.column===i-1)[0]):l=t[i];l&&(o||(f=U0(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!f&&(f=t[0]),c=H0(l,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(p=>{zo(p,p===l,n.slideActiveClass),zo(p,p===f,n.slideNextClass),zo(p,p===c,n.slidePrevClass)}),e.emitSlidesClasses()}const Xi=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},No=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Hs=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=i,s=[o-t];s.push(...Array.from({length:t}).map((l,c)=>o+r+c)),e.slides.forEach((l,c)=>{s.includes(l.column)&&No(e,c)});return}const a=i+r-1;if(e.params.rewind||e.params.loop)for(let o=i-t;o<=a+t;o+=1){const s=(o%n+n)%n;(s<i||s>a)&&No(e,s)}else for(let o=Math.max(i-t,0);o<=Math.min(a+t,n-1);o+=1)o!==i&&(o>a||o<i)&&No(e,o)};function f1(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let a=0;a<t.length;a+=1)typeof t[a+1]<"u"?r>=t[a]&&r<t[a+1]-(t[a+1]-t[a])/2?i=a:r>=t[a]&&r<t[a+1]&&(i=a+1):r>=t[a]&&(i=a);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function d1(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:a,realIndex:o,snapIndex:s}=t;let l=e,c;const f=v=>{let g=v-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof l>"u"&&(l=f1(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const v=Math.min(i.slidesPerGroupSkip,l);c=v+Math.floor((l-v)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),l===a&&!t.params.loop){c!==s&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(l===a&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=f(l);return}const p=t.grid&&i.grid&&i.grid.rows>1;let h;if(t.virtual&&i.virtual.enabled&&i.loop)h=f(l);else if(p){const v=t.slides.filter(y=>y.column===l)[0];let g=parseInt(v.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(v),0)),h=Math.floor(g/i.grid.rows)}else if(t.slides[l]){const v=t.slides[l].getAttribute("data-swiper-slide-index");v?h=parseInt(v,10):h=l}else h=l;Object.assign(t,{previousSnapIndex:s,snapIndex:c,previousRealIndex:o,realIndex:h,previousIndex:a,activeIndex:l}),t.initialized&&Hs(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==h&&t.emit("realIndexChange"),t.emit("slideChange"))}function p1(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(s=>{!i&&s.matches&&s.matches(`.${r.slideClass}, swiper-slide`)&&(i=s)});let a=!1,o;if(i){for(let s=0;s<n.slides.length;s+=1)if(n.slides[s]===i){a=!0,o=s;break}}if(i&&a)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var m1={updateSize:i1,updateSlides:a1,updateAutoHeight:o1,updateSlidesOffset:s1,updateSlidesProgress:l1,updateProgress:u1,updateSlidesClasses:c1,updateActiveIndex:d1,updateClickedSlide:p1};function h1(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:a}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=V0(a,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function v1(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:a,progress:o}=n;let s=0,l=0;const c=0;n.isHorizontal()?s=r?-e:e:l=e,i.roundLengths&&(s=Math.floor(s),l=Math.floor(l)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:l,i.cssMode?a[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-s:-l:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():l-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${s}px, ${l}px, ${c}px)`);let f;const p=n.maxTranslate()-n.minTranslate();p===0?f=0:f=(e-n.minTranslate())/p,f!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function g1(){return-this.snapGrid[0]}function y1(){return-this.snapGrid[this.snapGrid.length-1]}function w1(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;const l=a.minTranslate(),c=a.maxTranslate();let f;if(r&&e>l?f=l:r&&e<c?f=c:f=e,a.updateProgress(f),o.cssMode){const p=a.isHorizontal();if(t===0)s[p?"scrollLeft":"scrollTop"]=-f;else{if(!a.support.smoothScroll)return Up({swiper:a,targetPosition:-f,side:p?"left":"top"}),!0;s.scrollTo({[p?"left":"top"]:-f,behavior:"smooth"})}return!0}return t===0?(a.setTransition(0),a.setTranslate(f),n&&(a.emit("beforeTransitionStart",t,i),a.emit("transitionEnd"))):(a.setTransition(t),a.setTranslate(f),n&&(a.emit("beforeTransitionStart",t,i),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(h){!a||a.destroyed||h.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,n&&a.emit("transitionEnd"))}),a.wrapperEl.addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd))),!0}var x1={getTranslate:h1,setTranslate:v1,minTranslate:g1,maxTranslate:y1,translateTo:w1};function S1(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Kp(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:a,previousIndex:o}=t;let s=r;if(s||(a>o?s="next":a<o?s="prev":s="reset"),t.emit(`transition${i}`),n&&a!==o){if(s==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),s==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function b1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Kp({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function k1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Kp({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var E1={setTransition:S1,transitionStart:b1,transitionEnd:k1};function C1(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const a=this;let o=e;o<0&&(o=0);const{params:s,snapGrid:l,slidesGrid:c,previousIndex:f,activeIndex:p,rtlTranslate:h,wrapperEl:v,enabled:g}=a;if(!g&&!r&&!i||a.destroyed||a.animating&&s.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=a.params.speed);const y=Math.min(a.params.slidesPerGroupSkip,o);let S=y+Math.floor((o-y)/a.params.slidesPerGroup);S>=l.length&&(S=l.length-1);const u=-l[S];if(s.normalizeSlideIndex)for(let m=0;m<c.length;m+=1){const w=-Math.floor(u*100),x=Math.floor(c[m]*100),E=Math.floor(c[m+1]*100);typeof c[m+1]<"u"?w>=x&&w<E-(E-x)/2?o=m:w>=x&&w<E&&(o=m+1):w>=x&&(o=m)}if(a.initialized&&o!==p&&(!a.allowSlideNext&&(h?u>a.translate&&u>a.minTranslate():u<a.translate&&u<a.minTranslate())||!a.allowSlidePrev&&u>a.translate&&u>a.maxTranslate()&&(p||0)!==o))return!1;o!==(f||0)&&n&&a.emit("beforeSlideChangeStart"),a.updateProgress(u);let d;if(o>p?d="next":o<p?d="prev":d="reset",h&&-u===a.translate||!h&&u===a.translate)return a.updateActiveIndex(o),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),s.effect!=="slide"&&a.setTranslate(u),d!=="reset"&&(a.transitionStart(n,d),a.transitionEnd(n,d)),!1;if(s.cssMode){const m=a.isHorizontal(),w=h?u:-u;if(t===0){const x=a.virtual&&a.params.virtual.enabled;x&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),x&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{v[m?"scrollLeft":"scrollTop"]=w})):v[m?"scrollLeft":"scrollTop"]=w,x&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType="",a._immediateVirtual=!1})}else{if(!a.support.smoothScroll)return Up({swiper:a,targetPosition:w,side:m?"left":"top"}),!0;v.scrollTo({[m?"left":"top"]:w,behavior:"smooth"})}return!0}return a.setTransition(t),a.setTranslate(u),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,r),a.transitionStart(n,d),t===0?a.transitionEnd(n,d):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(w){!a||a.destroyed||w.target===this&&(a.wrapperEl.removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,d))}),a.wrapperEl.addEventListener("transitionend",a.onSlideToWrapperTransitionEnd)),!0}function A1(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const a=i.grid&&i.params.grid&&i.params.grid.rows>1;let o=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o=o+i.virtual.slidesBefore;else{let s;if(a){const h=o*i.params.grid.rows;s=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===h)[0].column}else s=i.getSlideIndexByData(o);const l=a?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c}=i.params;let f=i.params.slidesPerView;f==="auto"?f=i.slidesPerViewDynamic():(f=Math.ceil(parseFloat(i.params.slidesPerView,10)),c&&f%2===0&&(f=f+1));let p=l-s<f;if(c&&(p=p||s<Math.ceil(f/2)),r&&c&&i.params.slidesPerView!=="auto"&&!a&&(p=!1),p){const h=c?s<i.activeIndex?"prev":"next":s-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?s+1:s-l+1,slideRealIndex:h==="next"?i.realIndex:void 0})}if(a){const h=o*i.params.grid.rows;o=i.slides.filter(v=>v.getAttribute("data-swiper-slide-index")*1===h)[0].column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}function T1(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:a,animating:o}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let s=a.slidesPerGroup;a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<a.slidesPerGroupSkip?1:s,c=r.virtual&&a.virtual.enabled;if(a.loop){if(o&&!c&&a.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+l,e,t,n)}),!0}return a.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function P1(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:a,slidesGrid:o,rtlTranslate:s,enabled:l,animating:c}=r;if(!l||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const f=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!f&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=s?r.translate:-r.translate;function h(u){return u<0?-Math.floor(Math.abs(u)):Math.floor(u)}const v=h(p),g=a.map(u=>h(u));let y=a[g.indexOf(v)-1];if(typeof y>"u"&&i.cssMode){let u;a.forEach((d,m)=>{v>=d&&(u=m)}),typeof u<"u"&&(y=a[u>0?u-1:u])}let S=0;if(typeof y<"u"&&(S=o.indexOf(y),S<0&&(S=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(S=S-r.slidesPerViewDynamic("previous",!0)+1,S=Math.max(S,0))),i.rewind&&r.isBeginning){const u=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(u,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(S,e,t,n)}),!0;return r.slideTo(S,e,t,n)}function z1(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function N1(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let a=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[s]){const c=i.snapGrid[s],f=i.snapGrid[s+1];l-c>(f-c)*r&&(a+=i.params.slidesPerGroup)}else{const c=i.snapGrid[s-1],f=i.snapGrid[s];l-c<=(f-c)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)}function I1(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,a;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;a=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(ot(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),Vs(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(ot(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),Vs(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var M1={slideTo:C1,slideToLoop:A1,slideNext:T1,slidePrev:P1,slideReset:z1,slideToClosest:N1,slideToClickedSlide:I1};function O1(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{ot(r,`.${n.slideClass}, swiper-slide`).forEach((p,h)=>{p.setAttribute("data-swiper-slide-index",h)})},a=t.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(a?n.grid.rows:1),s=t.slides.length%o!==0,l=a&&t.slides.length%n.grid.rows!==0,c=f=>{for(let p=0;p<f;p+=1){const h=t.isElement?Qr("swiper-slide",[n.slideBlankClass]):Qr("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(h)}};if(s){if(n.loopAddBlankSlides){const f=o-t.slides.length%o;c(f),t.recalcSlides(),t.updateSlides()}else Ea("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(l){if(n.loopAddBlankSlides){const f=n.grid.rows-t.slides.length%n.grid.rows;c(f),t.recalcSlides(),t.updateSlides()}else Ea("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function _1(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:a,byController:o,byMousewheel:s}=e===void 0?{}:e;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:f,allowSlideNext:p,slidesEl:h,params:v}=l,{centeredSlides:g}=v;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&v.virtual.enabled){n&&(!v.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):v.centeredSlides&&l.snapIndex<v.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=f,l.allowSlideNext=p,l.emit("loopFix");return}let y=v.slidesPerView;y==="auto"?y=l.slidesPerViewDynamic():(y=Math.ceil(parseFloat(v.slidesPerView,10)),g&&y%2===0&&(y=y+1));const S=v.slidesPerGroupAuto?y:v.slidesPerGroup;let u=S;u%S!==0&&(u+=S-u%S),u+=v.loopAdditionalSlides,l.loopedSlides=u;const d=l.grid&&v.grid&&v.grid.rows>1;c.length<y+u?Ea("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):d&&v.grid.fill==="row"&&Ea("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const m=[],w=[];let x=l.activeIndex;typeof a>"u"?a=l.getSlideIndex(c.filter(O=>O.classList.contains(v.slideActiveClass))[0]):x=a;const E=r==="next"||!r,P=r==="prev"||!r;let C=0,T=0;const k=d?Math.ceil(c.length/v.grid.rows):c.length,z=(d?c[a].column:a)+(g&&typeof i>"u"?-y/2+.5:0);if(z<u){C=Math.max(u-z,S);for(let O=0;O<u-z;O+=1){const I=O-Math.floor(O/k)*k;if(d){const N=k-I-1;for(let B=c.length-1;B>=0;B-=1)c[B].column===N&&m.push(B)}else m.push(k-I-1)}}else if(z+y>k-u){T=Math.max(z-(k-u*2),S);for(let O=0;O<T;O+=1){const I=O-Math.floor(O/k)*k;d?c.forEach((N,B)=>{N.column===I&&w.push(B)}):w.push(I)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),P&&m.forEach(O=>{c[O].swiperLoopMoveDOM=!0,h.prepend(c[O]),c[O].swiperLoopMoveDOM=!1}),E&&w.forEach(O=>{c[O].swiperLoopMoveDOM=!0,h.append(c[O]),c[O].swiperLoopMoveDOM=!1}),l.recalcSlides(),v.slidesPerView==="auto"?l.updateSlides():d&&(m.length>0&&P||w.length>0&&E)&&l.slides.forEach((O,I)=>{l.grid.updateSlide(I,O,l.slides)}),v.watchSlidesProgress&&l.updateSlidesOffset(),n){if(m.length>0&&P){if(typeof t>"u"){const O=l.slidesGrid[x],N=l.slidesGrid[x+C]-O;s?l.setTranslate(l.translate-N):(l.slideTo(x+Math.ceil(C),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-N,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-N))}else if(i){const O=d?m.length/v.grid.rows:m.length;l.slideTo(l.activeIndex+O,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(w.length>0&&E)if(typeof t>"u"){const O=l.slidesGrid[x],N=l.slidesGrid[x-T]-O;s?l.setTranslate(l.translate-N):(l.slideTo(x-T,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-N,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-N))}else{const O=d?w.length/v.grid.rows:w.length;l.slideTo(l.activeIndex-O,0,!1,!0)}}if(l.allowSlidePrev=f,l.allowSlideNext=p,l.controller&&l.controller.control&&!o){const O={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:a,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(I=>{!I.destroyed&&I.params.loop&&I.loopFix({...O,slideTo:I.params.slidesPerView===v.slidesPerView?n:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...O,slideTo:l.controller.control.params.slidesPerView===v.slidesPerView?n:!1})}l.emit("loopFix")}function L1(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const a=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[a]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var j1={loopCreate:O1,loopFix:_1,loopDestroy:L1};function R1(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function D1(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var F1={setGrabCursor:R1,unsetGrabCursor:D1};function $1(e,t){t===void 0&&(t=this);function n(r){if(!r||r===Jn()||r===$e())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Yc(e,t,n){const r=$e(),{params:i}=e,a=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return a&&(n<=o||n>=r.innerWidth-o)?a==="prevent"?(t.preventDefault(),!0):!1:!0}function B1(e){const t=this,n=Jn();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Yc(t,r,r.targetTouches[0].pageX);return}const{params:a,touches:o,enabled:s}=t;if(!s||!a.simulateTouch&&r.pointerType==="mouse"||t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let l=r.target;if(a.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(l)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!a.noSwipingClass&&a.noSwipingClass!=="",f=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&f&&(l=f[0]);const p=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,h=!!(r.target&&r.target.shadowRoot);if(a.noSwiping&&(h?$1(p,l):l.closest(p))){t.allowClick=!0;return}if(a.swipeHandler&&!l.closest(a.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;const v=o.currentX,g=o.currentY;if(!Yc(t,r,v))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=v,o.startY=g,i.touchStartTime=ka(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(i.allowThresholdMove=!1);let y=!0;l.matches(i.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==l&&n.activeElement.blur();const S=y&&t.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||S)&&!l.isContentEditable&&r.preventDefault(),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function V1(e){const t=Jn(),n=this,r=n.touchEventsData,{params:i,touches:a,rtlTranslate:o,enabled:s}=n;if(!s||!i.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(r.touchId!==null||l.pointerId!==r.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].filter(E=>E.identifier===r.touchId)[0],!c||c.identifier!==r.touchId)return}else c=l;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}const f=c.pageX,p=c.pageY;if(l.preventedByNestedSwiper){a.startX=f,a.startY=p;return}if(!n.allowTouchMove){l.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(a,{startX:f,startY:p,currentX:f,currentY:p}),r.touchStartTime=ka());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(p<a.startY&&n.translate<=n.maxTranslate()||p>a.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(f<a.startX&&n.translate<=n.maxTranslate()||f>a.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",l),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=f,a.currentY=p;const h=a.currentX-a.startX,v=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(h**2+v**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let E;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?r.isScrolling=!1:h*h+v*v>=25&&(E=Math.atan2(Math.abs(v),Math.abs(h))*180/Math.PI,r.isScrolling=n.isHorizontal()?E>i.touchAngle:90-E>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(r.startMoving=!0),r.isScrolling||l.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let g=n.isHorizontal()?h:v,y=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;i.oneWayMovement&&(g=Math.abs(g)*(o?1:-1),y=Math.abs(y)*(o?1:-1)),a.diff=g,g*=i.touchRatio,o&&(g=-g,y=-y);const S=n.touchesDirection;n.swipeDirection=g>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const u=n.params.loop&&!i.cssMode,d=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(u&&d&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const E=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(E)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let m;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&S!==n.touchesDirection&&u&&d&&Math.abs(g)>=1){Object.assign(a,{startX:f,startY:p,currentX:f,currentY:p,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=g+r.startTranslate;let w=!0,x=i.resistanceRatio;if(i.touchReleaseOnEdges&&(x=0),g>0?(u&&d&&!m&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+g)**x))):g<0&&(u&&d&&!m&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-g)**x))),w&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(g)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,r.currentTranslate=r.startTranslate,a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function G1(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(x=>x.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:s,rtlTranslate:l,slidesGrid:c,enabled:f}=t;if(!f||!o.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const p=ka(),h=p-n.touchStartTime;if(t.allowClick){const x=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(x&&x[0]||r.target,x),t.emit("tap click",r),h<300&&p-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=ka(),Vs(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||s.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let v;if(o.followFinger?v=l?t.translate:-t.translate:v=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:v});return}const g=v>=-t.maxTranslate()&&!t.params.loop;let y=0,S=t.slidesSizesGrid[0];for(let x=0;x<c.length;x+=x<o.slidesPerGroupSkip?1:o.slidesPerGroup){const E=x<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[x+E]<"u"?(g||v>=c[x]&&v<c[x+E])&&(y=x,S=c[x+E]-c[x]):(g||v>=c[x])&&(y=x,S=c[c.length-1]-c[c.length-2])}let u=null,d=null;o.rewind&&(t.isBeginning?d=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(u=0));const m=(v-c[y])/S,w=y<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(h>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(m>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?u:y+w):t.slideTo(y)),t.swipeDirection==="prev"&&(m>1-o.longSwipesRatio?t.slideTo(y+w):d!==null&&m<0&&Math.abs(m)>o.longSwipesRatio?t.slideTo(d):t.slideTo(y))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+w):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(u!==null?u:y+w),t.swipeDirection==="prev"&&t.slideTo(d!==null?d:y))}}function Wc(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const s=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function H1(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function U1(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const a=e.maxTranslate()-e.minTranslate();a===0?i=0:i=(e.translate-e.minTranslate())/a,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Y1(e){const t=this;Xi(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function W1(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const qp=(e,t)=>{const n=Jn(),{params:r,el:i,wrapperEl:a,device:o}=e,s=!!r.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;!i||typeof i=="string"||(n[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:s}),i[l]("touchstart",e.onTouchStart,{passive:!1}),i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("touchmove",e.onTouchMove,{passive:!1,capture:s}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:s}),n[l]("touchend",e.onTouchEnd,{passive:!0}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("touchcancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),n[l]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&a[l]("scroll",e.onScroll),r.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Wc,!0):e[c]("observerUpdate",Wc,!0),i[l]("load",e.onLoad,{capture:!0}))};function X1(){const e=this,{params:t}=e;e.onTouchStart=B1.bind(e),e.onTouchMove=V1.bind(e),e.onTouchEnd=G1.bind(e),e.onDocumentTouchStart=W1.bind(e),t.cssMode&&(e.onScroll=U1.bind(e)),e.onClick=H1.bind(e),e.onLoad=Y1.bind(e),qp(e,"on")}function Q1(){qp(this,"off")}var K1={attachEvents:X1,detachEvents:Q1};const Xc=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function q1(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;const o=e.getBreakpoint(a,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const l=(o in a?a[o]:void 0)||e.originalParams,c=Xc(e,r),f=Xc(e,l),p=e.params.grabCursor,h=l.grabCursor,v=r.enabled;c&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!h?e.unsetGrabCursor():!p&&h&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(m=>{if(typeof l[m]>"u")return;const w=r[m]&&r[m].enabled,x=l[m]&&l[m].enabled;w&&!x&&e[m].disable(),!w&&x&&e[m].enable()});const g=l.direction&&l.direction!==r.direction,y=r.loop&&(l.slidesPerView!==r.slidesPerView||g),S=r.loop;g&&n&&e.changeDirection(),Oe(e.params,l);const u=e.params.enabled,d=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),v&&!u?e.disable():!v&&u&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",l),n&&(y?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!S&&d?(e.loopCreate(t),e.updateSlides()):S&&!d&&e.loopDestroy()),e.emit("breakpoint",l)}function Z1(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=$e(),a=t==="window"?i.innerHeight:n.clientHeight,o=Object.keys(e).map(s=>{if(typeof s=="string"&&s.indexOf("@")===0){const l=parseFloat(s.substr(1));return{value:a*l,point:s}}return{value:s,point:s}});o.sort((s,l)=>parseInt(s.value,10)-parseInt(l.value,10));for(let s=0;s<o.length;s+=1){const{point:l,value:c}=o[s];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=l):c<=n.clientWidth&&(r=l)}return r||"max"}var J1={setBreakpoint:q1,getBreakpoint:Z1};function ey(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function ty(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:a}=e,o=ey(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function ny(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var ry={addClasses:ty,removeClasses:ny};function iy(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,a=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>a}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var ay={checkOverflow:iy},Us={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function oy(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],a=r[i];if(typeof a!="object"||a===null){Oe(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in a)){Oe(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Oe(t,r)}}const Io={eventsEmitter:r1,update:m1,translate:x1,transition:E1,slide:M1,loop:j1,grabCursor:F1,events:K1,breakpoints:J1,checkOverflow:ay,classes:ry},Mo={};let ou=class ut{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=Oe({},n),t&&!n.el&&(n.el=t);const o=Jn();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const f=[];return o.querySelectorAll(n.el).forEach(p=>{const h=Oe({},n,{el:p});f.push(new ut(h))}),f}const s=this;s.__swiper__=!0,s.support=Xp(),s.device=Qp({userAgent:n.userAgent}),s.browser=e1(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const l={};s.modules.forEach(f=>{f({params:n,swiper:s,extendParams:oy(n,l),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const c=Oe({},Us,l);return s.params=Oe({},c,Mo,n),s.originalParams=Oe({},s.params),s.passedParams=Oe({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach(f=>{s.on(f,s.params.on[f])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=ot(n,`.${r.slideClass}, swiper-slide`),a=Ca(i[0]);return Ca(t)-a}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=ot(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),o=(r.maxTranslate()-i)*t+i;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:a,slidesGrid:o,slidesSizesGrid:s,size:l,activeIndex:c}=r;let f=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let p=a[c]?Math.ceil(a[c].swiperSlideSize):0,h;for(let v=c+1;v<a.length;v+=1)a[v]&&!h&&(p+=Math.ceil(a[v].swiperSlideSize),f+=1,p>l&&(h=!0));for(let v=c-1;v>=0;v-=1)a[v]&&!h&&(p+=a[v].swiperSlideSize,f+=1,p>l&&(h=!0))}else if(t==="current")for(let p=c+1;p<a.length;p+=1)(n?o[p]+s[p]-o[c]<l:o[p]-o[c]<l)&&(f+=1);else for(let p=c-1;p>=0;p-=1)o[c]-o[p]<l&&(f+=1);return f}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Xi(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const o=t.rtlTranslate?t.translate*-1:t.translate,s=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(s),t.updateActiveIndex(),t.updateSlidesClasses()}let a;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const o=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;a=t.slideTo(o.length-1,0,!1,!0)}else a=t.slideTo(t.activeIndex,0,!1,!0);a||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(a=>{t==="vertical"?a.style.width="":a.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):ot(r,i())[0];return!o&&n.params.createElements&&(o=Qr("div",n.params.wrapperClass),r.append(o),ot(r,`.${n.params.slideClass}`).forEach(s=>{o.append(s)})),Object.assign(n,{el:r,wrapperEl:o,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:o,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Mt(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Mt(r,"direction")==="rtl"),wrongRTL:Mt(o,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(a=>{a.complete?Xi(n,a):a.addEventListener("load",o=>{Xi(n,o.target)})}),Hs(n),n.initialized=!0,Hs(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:a,wrapperEl:o,slides:s}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),a&&typeof a!="string"&&a.removeAttribute("style"),o&&o.removeAttribute("style"),s&&s.length&&s.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),$0(r)),r.destroyed=!0),null}static extendDefaults(t){Oe(Mo,t)}static get extendedDefaults(){return Mo}static get defaults(){return Us}static installModule(t){ut.prototype.__modules__||(ut.prototype.__modules__=[]);const n=ut.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>ut.installModule(n)),ut):(ut.installModule(t),ut)}};Object.keys(Io).forEach(e=>{Object.keys(Io[e]).forEach(t=>{ou.prototype[t]=Io[e][t]})});ou.use([t1,n1]);const Zp=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function mn(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function $n(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:mn(t[r])&&mn(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:$n(e[r],t[r]):e[r]=t[r]})}function Jp(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function em(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function tm(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function nm(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function sy(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function ly(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:a,prevEl:o,scrollbarEl:s,paginationEl:l}=e;const c=i.filter(T=>T!=="children"&&T!=="direction"&&T!=="wrapperClass"),{params:f,pagination:p,navigation:h,scrollbar:v,virtual:g,thumbs:y}=t;let S,u,d,m,w,x,E,P;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&f.thumbs&&!f.thumbs.swiper&&(S=!0),i.includes("controller")&&r.controller&&r.controller.control&&f.controller&&!f.controller.control&&(u=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||l)&&(f.pagination||f.pagination===!1)&&p&&!p.el&&(d=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||s)&&(f.scrollbar||f.scrollbar===!1)&&v&&!v.el&&(m=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||a)&&(f.navigation||f.navigation===!1)&&h&&!h.prevEl&&!h.nextEl&&(w=!0);const C=T=>{t[T]&&(t[T].destroy(),T==="navigation"?(t.isElement&&(t[T].prevEl.remove(),t[T].nextEl.remove()),f[T].prevEl=void 0,f[T].nextEl=void 0,t[T].prevEl=void 0,t[T].nextEl=void 0):(t.isElement&&t[T].el.remove(),f[T].el=void 0,t[T].el=void 0))};i.includes("loop")&&t.isElement&&(f.loop&&!r.loop?x=!0:!f.loop&&r.loop?E=!0:P=!0),c.forEach(T=>{if(mn(f[T])&&mn(r[T]))Object.assign(f[T],r[T]),(T==="navigation"||T==="pagination"||T==="scrollbar")&&"enabled"in r[T]&&!r[T].enabled&&C(T);else{const k=r[T];(k===!0||k===!1)&&(T==="navigation"||T==="pagination"||T==="scrollbar")?k===!1&&C(T):f[T]=r[T]}}),c.includes("controller")&&!u&&t.controller&&t.controller.control&&f.controller&&f.controller.control&&(t.controller.control=f.controller.control),i.includes("children")&&n&&g&&f.virtual.enabled?(g.slides=n,g.update(!0)):i.includes("virtual")&&g&&f.virtual.enabled&&(n&&(g.slides=n),g.update(!0)),i.includes("children")&&n&&f.loop&&(P=!0),S&&y.init()&&y.update(!0),u&&(t.controller.control=f.controller.control),d&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),t.el.appendChild(l)),l&&(f.pagination.el=l),p.init(),p.render(),p.update()),m&&(t.isElement&&(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-scrollbar"),s.part.add("scrollbar"),t.el.appendChild(s)),s&&(f.scrollbar.el=s),v.init(),v.updateSize(),v.setTranslate()),w&&(t.isElement&&((!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-next"),a.innerHTML=t.hostEl.constructor.nextButtonSvg,a.part.add("button-next"),t.el.appendChild(a)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=t.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),t.el.appendChild(o))),a&&(f.navigation.nextEl=a),o&&(f.navigation.prevEl=o),h.init(),h.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(x||P)&&t.loopDestroy(),(E||P)&&t.loopCreate(),t.update()}function uy(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};$n(n,Us),n._emitClasses=!0,n.init=!1;const a={},o=Zp.map(l=>l.replace(/_/,"")),s=Object.assign({},e);return Object.keys(s).forEach(l=>{typeof e[l]>"u"||(o.indexOf(l)>=0?mn(e[l])?(n[l]={},i[l]={},$n(n[l],e[l]),$n(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:a[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:a,events:r}}function cy(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:a,scrollbarEl:o,swiper:s}=e;Jp(t)&&r&&i&&(s.params.navigation.nextEl=r,s.originalParams.navigation.nextEl=r,s.params.navigation.prevEl=i,s.originalParams.navigation.prevEl=i),em(t)&&a&&(s.params.pagination.el=a,s.originalParams.pagination.el=a),tm(t)&&o&&(s.params.scrollbar.el=o,s.originalParams.scrollbar.el=o),s.init(n)}function fy(e,t,n,r,i){const a=[];if(!t)return a;const o=l=>{a.indexOf(l)<0&&a.push(l)};if(n&&r){const l=r.map(i),c=n.map(i);l.join("")!==c.join("")&&o("children"),r.length!==n.length&&o("children")}return Zp.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(mn(e[l])&&mn(t[l])){const c=Object.keys(e[l]),f=Object.keys(t[l]);c.length!==f.length?o(l):(c.forEach(p=>{e[l][p]!==t[l][p]&&o(l)}),f.forEach(p=>{e[l][p]!==t[l][p]&&o(l)}))}else e[l]!==t[l]&&o(l)}),a}const dy=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Aa(){return Aa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Aa.apply(this,arguments)}function rm(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function im(e){const t=[];return q.Children.toArray(e).forEach(n=>{rm(n)?t.push(n):n.props&&n.props.children&&im(n.props.children).forEach(r=>t.push(r))}),t}function py(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return q.Children.toArray(e).forEach(r=>{if(rm(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=im(r.props.children);i.length>0?i.forEach(a=>t.push(a)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function my(e,t,n){if(!n)return null;const r=f=>{let p=f;return f<0?p=t.length+f:p>=t.length&&(p=p-t.length),p},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:a,to:o}=n,s=e.params.loop?-t.length:0,l=e.params.loop?t.length*2:t.length,c=[];for(let f=s;f<l;f+=1)f>=a&&f<=o&&c.push(t[r(f)]);return c.map((f,p)=>q.cloneElement(f,{swiper:e,style:i,key:f.props.virtualIndex||f.key||`slide-${p}`}))}function Cr(e,t){return typeof window>"u"?_.useEffect(e,t):_.useLayoutEffect(e,t)}const Qc=_.createContext(null),hy=_.createContext(null),am=_.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:a,onSwiper:o,...s}=e===void 0?{}:e,l=!1;const[c,f]=_.useState("swiper"),[p,h]=_.useState(null),[v,g]=_.useState(!1),y=_.useRef(!1),S=_.useRef(null),u=_.useRef(null),d=_.useRef(null),m=_.useRef(null),w=_.useRef(null),x=_.useRef(null),E=_.useRef(null),P=_.useRef(null),{params:C,passedParams:T,rest:k,events:A}=uy(s),{slides:z,slots:O}=py(a),I=()=>{g(!v)};Object.assign(C.on,{_containerClasses(F,$){f($)}});const N=()=>{Object.assign(C.on,A),l=!0;const F={...C};if(delete F.wrapperClass,u.current=new ou(F),u.current.virtual&&u.current.params.virtual.enabled){u.current.virtual.slides=z;const $={cache:!1,slides:z,renderExternal:h,renderExternalUpdate:!1};$n(u.current.params.virtual,$),$n(u.current.originalParams.virtual,$)}};S.current||N(),u.current&&u.current.on("_beforeBreakpoint",I);const B=()=>{l||!A||!u.current||Object.keys(A).forEach(F=>{u.current.on(F,A[F])})},ye=()=>{!A||!u.current||Object.keys(A).forEach(F=>{u.current.off(F,A[F])})};_.useEffect(()=>()=>{u.current&&u.current.off("_beforeBreakpoint",I)}),_.useEffect(()=>{!y.current&&u.current&&(u.current.emitSlidesClasses(),y.current=!0)}),Cr(()=>{if(t&&(t.current=S.current),!!S.current)return u.current.destroyed&&N(),cy({el:S.current,nextEl:w.current,prevEl:x.current,paginationEl:E.current,scrollbarEl:P.current,swiper:u.current},C),o&&!u.current.destroyed&&o(u.current),()=>{u.current&&!u.current.destroyed&&u.current.destroy(!0,!1)}},[]),Cr(()=>{B();const F=fy(T,d.current,z,m.current,$=>$.key);return d.current=T,m.current=z,F.length&&u.current&&!u.current.destroyed&&ly({swiper:u.current,slides:z,passedParams:T,changedParams:F,nextEl:w.current,prevEl:x.current,scrollbarEl:P.current,paginationEl:E.current}),()=>{ye()}}),Cr(()=>{dy(u.current)},[p]);function L(){return C.virtual?my(u.current,z,p):z.map((F,$)=>q.cloneElement(F,{swiper:u.current,swiperSlideIndex:$}))}return q.createElement(r,Aa({ref:S,className:nm(`${c}${n?` ${n}`:""}`)},k),q.createElement(hy.Provider,{value:u.current},O["container-start"],q.createElement(i,{className:sy(C.wrapperClass)},O["wrapper-start"],L(),O["wrapper-end"]),Jp(C)&&q.createElement(q.Fragment,null,q.createElement("div",{ref:x,className:"swiper-button-prev"}),q.createElement("div",{ref:w,className:"swiper-button-next"})),tm(C)&&q.createElement("div",{ref:P,className:"swiper-scrollbar"}),em(C)&&q.createElement("div",{ref:E,className:"swiper-pagination"}),O["container-end"]))});am.displayName="Swiper";const om=_.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:a,zoom:o,lazy:s,virtualIndex:l,swiperSlideIndex:c,...f}=e===void 0?{}:e;const p=_.useRef(null),[h,v]=_.useState("swiper-slide"),[g,y]=_.useState(!1);function S(w,x,E){x===p.current&&v(E)}Cr(()=>{if(typeof c<"u"&&(p.current.swiperSlideIndex=c),t&&(t.current=p.current),!(!p.current||!a)){if(a.destroyed){h!=="swiper-slide"&&v("swiper-slide");return}return a.on("_slideClass",S),()=>{a&&a.off("_slideClass",S)}}}),Cr(()=>{a&&p.current&&!a.destroyed&&v(a.getSlideClasses(p.current))},[a]);const u={isActive:h.indexOf("swiper-slide-active")>=0,isVisible:h.indexOf("swiper-slide-visible")>=0,isPrev:h.indexOf("swiper-slide-prev")>=0,isNext:h.indexOf("swiper-slide-next")>=0},d=()=>typeof r=="function"?r(u):r,m=()=>{y(!0)};return q.createElement(n,Aa({ref:p,className:nm(`${h}${i?` ${i}`:""}`),"data-swiper-slide-index":l,onLoad:m},f),o&&q.createElement(Qc.Provider,{value:u},q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},d(),s&&!g&&q.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&q.createElement(Qc.Provider,{value:u},d(),s&&!g&&q.createElement("div",{className:"swiper-lazy-preloader"})))});om.displayName="SwiperSlide";const vy=({videos:e,campaigns:t})=>{const n=_.useRef(null);_.useRef([]),_.useState(!1);const[r,i]=_.useState(null),[a,o]=_.useState(!1),[s,l]=_.useState(!0),c=g=>{i(g)},f=()=>{i(null)},p=()=>{n.current.scrollBy({left:-n.current.clientWidth,behavior:"smooth"})},h=()=>{n.current.scrollBy({left:n.current.clientWidth,behavior:"smooth"})},v=()=>{const g=n.current.scrollLeft,y=n.current.scrollWidth-n.current.clientWidth;o(g>70),l(g<y-70)};return _.useEffect(()=>{const g=n.current;return g.addEventListener("scroll",v),v(),()=>{g.removeEventListener("scroll",v)}},[]),b.jsx(b.Fragment,{children:b.jsxs("div",{className:"container",children:[b.jsx("style",{children:`
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


`}),b.jsxs(am,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:0,stretch:0,depth:100,modifier:2.5},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",clickable:!0},modules:[K0,W0,Y0],className:"swiper_container",children:[e.map((g,y)=>b.jsx(b.Fragment,{children:b.jsx(om,{onClick:()=>c(y),children:b.jsxs("div",{className:"video-container123",children:[b.jsx("video",{src:g,loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"}),b.jsx("div",{className:"carousel-div123",children:b.jsxs("p",{className:"txt2-123",children:[t[y].campaignName," ",b.jsx("br",{})," From"," ",t[y].offerPrice.currency,t[y].offerPrice.price]})})]})},y)})),b.jsxs("div",{className:"slider-controler",children:[b.jsx("div",{className:"swiper-button-prev slider-arrow",children:b.jsx("ion-icon",{name:"arrow-back-outline"})}),b.jsx("div",{className:"swiper-button-next slider-arrow",children:b.jsx("ion-icon",{name:"arrow-forward-outline"})}),b.jsx("div",{className:"swiper-pagination"})]})]}),a&&b.jsx("button",{className:"nav-btn123",onClick:p,children:"<"}),b.jsx("div",{className:"carousel",ref:n}),s&&b.jsx("button",{className:"nav-btn123",onClick:h,children:">"}),r!==null&&b.jsx(gy,{campaigns:t,currentIndex:r,onClose:f})]})})},gy=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=_.useState(t),[a,o]=_.useState(0),[s,l]=_.useState({}),[c,f]=_.useState(!1),[p,h]=_.useState(!1),[v,g]=_.useState(null),[y,S]=_.useState(!1),u=_.useRef([]),d=_.useRef(null);_.useRef(null),_.useEffect(()=>{const I=new IntersectionObserver(N=>{N.forEach(B=>{const ye=u.current.indexOf(B.target);B.isIntersecting?(B.target.play(),o(ye)):B.target.pause()})},{threshold:.5});return o(0),u.current.forEach(N=>{N&&I.observe(N)}),()=>{u.current.forEach(N=>{N&&I.unobserve(N)})}},[r]),_.useEffect(()=>{const I=u.current[a];I&&I.play()},[a]);const m=()=>{r!==null?r+1<e.length?(i(r+1),o(0)):(i(0),o(0)):e.length>0&&(i(0),o(0))},w=()=>{r!==null?r>0?(i(r-1),o(0)):(i(e.length-1),o(0)):e.length>0&&(i(e.length-1),o(0))},x=I=>{const N=u.current[I];N&&(N.paused?N.play():N.pause(),f(N.paused))},E=I=>{const N=u.current[I];N&&(N.muted=!N.muted,l(B=>({...B,[I]:N.muted})))},P=I=>{clearTimeout(d.current)},C=(I,N)=>{I===0&&(g(N.duration),T(N.duration))},T=I=>{clearTimeout(d.current),d.current=setTimeout(()=>{h(!0),setTimeout(()=>{h(!1)},1e4)},I*1e3)},k=I=>{clearTimeout(d.current),I===0&&v&&T(v)},A=()=>{clearTimeout(d.current)},z=()=>{S(!y)},O=I=>{const N=I.split(`
`);return N.length>2?{truncated:N.slice(0,2).join(`
`),hasMore:!0}:{truncated:I,hasMore:!1}};return _.useEffect(()=>{o(0)},[r]),b.jsxs("div",{className:"whole123",children:[b.jsx("div",{className:"prevbtn123",onClick:w,children:b.jsx(he,{icon:Hl})}),b.jsx("div",{className:"nextbtn123",onClick:m,children:b.jsx(he,{icon:$l})}),b.jsx("div",{className:"reelsContainer",children:e[r].videoId.map((I,N)=>b.jsxs("div",{className:"reel",children:[b.jsx("div",{className:"closediv123",children:b.jsx("button",{className:"closebtn123",onClick:n,children:b.jsx(he,{icon:Gl})})}),b.jsxs("div",{className:"video-container",children:[b.jsx("video",{ref:B=>u.current[N]=B,src:I,className:"ad",loop:!0,playsInline:!0,controls:!1,autoPlay:N===a,onClick:()=>x(N),onPause:()=>{A(),f(!0)},onPlay:()=>{k(N),f(!1)},onEnded:()=>P(),onLoadedMetadata:B=>C(N,B.target)}),c&&b.jsx(he,{icon:cp,onClick:()=>x(N),className:"play-button123"}),b.jsxs("div",{className:"bookdiv123",children:[b.jsx("div",{className:"img1",children:b.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),b.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[b.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),b.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[y?e[r].campaignDetails:O(e[r].campaignDetails).truncated,O(e[r].campaignDetails).hasMore&&b.jsx("div",{children:b.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:z,children:y?" View Less":" View More"})})]}),b.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[r].offerPrice.currency,e[r].offerPrice.price]})]}),b.jsx("div",{className:"divbtn",children:b.jsx("a",{href:e[r].hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]}),b.jsx("div",{className:"functions",children:b.jsx(he,{icon:s[N]?Vl:Bl,className:"volume123",onClick:()=>E(N),style:{cursor:"pointer"}})})]},N))})]})},yy=()=>{const[e,t]=_.useState([]),[n,r]=_.useState([]);return _.useEffect(()=>{const a=document.getElementById("root-carosole").dataset.campaignId;(async s=>{try{const c=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${s}`)).json(),f=c.campaigns.map(p=>p.videoId[0]);t(f),r(c.campaigns)}catch(l){console.error("Error fetching data:",l)}})(a)},[]),b.jsxs("div",{className:"App",children:[b.jsx(vy,{videos:e,campaigns:n})," "]})},Oo=document.getElementById("root-stories"),_o=document.getElementById("root-grid"),Lo=document.getElementById("root-carosole");Oo&&Oo.dataset.name==="stories"&&Ar.createRoot(Oo).render(b.jsx(q.StrictMode,{children:b.jsx(R0,{})}));_o&&_o.dataset.name==="grid"&&Ar.createRoot(_o).render(b.jsx(q.StrictMode,{children:b.jsx(L0,{})}));Lo&&Lo.dataset.name==="carosole"&&Ar.createRoot(Lo).render(b.jsx(q.StrictMode,{children:b.jsx(yy,{})}));
