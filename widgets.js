(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function $c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var jc={exports:{}},ka={},Rc={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),Kp=Symbol.for("react.portal"),qp=Symbol.for("react.fragment"),Zp=Symbol.for("react.strict_mode"),Jp=Symbol.for("react.profiler"),em=Symbol.for("react.provider"),tm=Symbol.for("react.context"),nm=Symbol.for("react.forward_ref"),rm=Symbol.for("react.suspense"),im=Symbol.for("react.memo"),am=Symbol.for("react.lazy"),Ws=Symbol.iterator;function om(e){return e===null||typeof e!="object"?null:(e=Ws&&e[Ws]||e["@@iterator"],typeof e=="function"?e:null)}var Dc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fc=Object.assign,Vc={};function qn(e,t,n){this.props=e,this.context=t,this.refs=Vc,this.updater=n||Dc}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bc(){}Bc.prototype=qn.prototype;function $l(e,t,n){this.props=e,this.context=t,this.refs=Vc,this.updater=n||Dc}var jl=$l.prototype=new Bc;jl.constructor=$l;Fc(jl,qn.prototype);jl.isPureReactComponent=!0;var Gs=Array.isArray,Hc=Object.prototype.hasOwnProperty,Rl={current:null},Uc={key:!0,ref:!0,__self:!0,__source:!0};function Wc(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Hc.call(t,r)&&!Uc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Qr,type:e,key:a,ref:o,props:i,_owner:Rl.current}}function lm(e,t){return{$$typeof:Qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Dl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qr}function sm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ys=/\/+/g;function Ha(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sm(""+e.key):t.toString(36)}function Ii(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Qr:case Kp:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ha(o,0):r,Gs(i)?(n="",e!=null&&(n=e.replace(Ys,"$&/")+"/"),Ii(i,t,n,"",function(u){return u})):i!=null&&(Dl(i)&&(i=lm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ys,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Gs(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Ha(a,s);o+=Ii(a,t,n,l,i)}else if(l=om(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Ha(a,s++),o+=Ii(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function oi(e,t,n){if(e==null)return e;var r=[],i=0;return Ii(e,r,"","",function(a){return t.call(n,a,i++)}),r}function um(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},Ai={transition:null},cm={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Ai,ReactCurrentOwner:Rl};function Gc(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:oi,forEach:function(e,t,n){oi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oi(e,function(){t++}),t},toArray:function(e){return oi(e,function(t){return t})||[]},only:function(e){if(!Dl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=qn;F.Fragment=qp;F.Profiler=Jp;F.PureComponent=$l;F.StrictMode=Zp;F.Suspense=rm;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cm;F.act=Gc;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Fc({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Rl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Hc.call(t,l)&&!Uc.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Qr,type:e.type,key:i,ref:a,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:tm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:em,_context:e},e.Consumer=e};F.createElement=Wc;F.createFactory=function(e){var t=Wc.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:nm,render:e}};F.isValidElement=Dl;F.lazy=function(e){return{$$typeof:am,_payload:{_status:-1,_result:e},_init:um}};F.memo=function(e,t){return{$$typeof:im,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Ai.transition;Ai.transition={};try{e()}finally{Ai.transition=t}};F.unstable_act=Gc;F.useCallback=function(e,t){return ke.current.useCallback(e,t)};F.useContext=function(e){return ke.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};F.useEffect=function(e,t){return ke.current.useEffect(e,t)};F.useId=function(){return ke.current.useId()};F.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return ke.current.useMemo(e,t)};F.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};F.useRef=function(e){return ke.current.useRef(e)};F.useState=function(e){return ke.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return ke.current.useTransition()};F.version="18.3.1";Rc.exports=F;var j=Rc.exports;const ee=$c(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm=j,dm=Symbol.for("react.element"),pm=Symbol.for("react.fragment"),mm=Object.prototype.hasOwnProperty,hm=fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vm={key:!0,ref:!0,__self:!0,__source:!0};function Yc(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)mm.call(t,r)&&!vm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:dm,type:e,key:a,ref:o,props:i,_owner:hm.current}}ka.Fragment=pm;ka.jsx=Yc;ka.jsxs=Yc;jc.exports=ka;var O=jc.exports,To={},Xc={exports:{}},Re={},Qc={exports:{}},Kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,P){var $=E.length;E.push(P);e:for(;0<$;){var W=$-1>>>1,ie=E[W];if(0<i(ie,P))E[W]=P,E[$]=ie,$=W;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var P=E[0],$=E.pop();if($!==P){E[0]=$;e:for(var W=0,ie=E.length,ii=ie>>>1;W<ii;){var Kt=2*(W+1)-1,Ba=E[Kt],qt=Kt+1,ai=E[qt];if(0>i(Ba,$))qt<ie&&0>i(ai,Ba)?(E[W]=ai,E[qt]=$,W=qt):(E[W]=Ba,E[Kt]=$,W=Kt);else if(qt<ie&&0>i(ai,$))E[W]=ai,E[qt]=$,W=qt;else break e}}return P}function i(E,P){var $=E.sortIndex-P.sortIndex;return $!==0?$:E.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,f=null,d=3,g=!1,y=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(E){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=E)r(u),P.sortIndex=P.expirationTime,t(l,P);else break;P=n(u)}}function x(E){if(v=!1,h(E),!y)if(n(l)!==null)y=!0,Ee(S);else{var P=n(u);P!==null&&st(x,P.startTime-E)}}function S(E,P){y=!1,v&&(v=!1,p(b),b=-1),g=!0;var $=d;try{for(h(P),f=n(l);f!==null&&(!(f.expirationTime>P)||E&&!k());){var W=f.callback;if(typeof W=="function"){f.callback=null,d=f.priorityLevel;var ie=W(f.expirationTime<=P);P=e.unstable_now(),typeof ie=="function"?f.callback=ie:f===n(l)&&r(l),h(P)}else r(l);f=n(l)}if(f!==null)var ii=!0;else{var Kt=n(u);Kt!==null&&st(x,Kt.startTime-P),ii=!1}return ii}finally{f=null,d=$,g=!1}}var C=!1,N=null,b=-1,R=5,T=-1;function k(){return!(e.unstable_now()-T<R)}function z(){if(N!==null){var E=e.unstable_now();T=E;var P=!0;try{P=N(!0,E)}finally{P?V():(C=!1,N=null)}}else C=!1}var V;if(typeof m=="function")V=function(){m(z)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,Ce=he.port2;he.port1.onmessage=z,V=function(){Ce.postMessage(null)}}else V=function(){w(z,0)};function Ee(E){N=E,C||(C=!0,V())}function st(E,P){b=w(function(){E(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Ee(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(E){switch(d){case 1:case 2:case 3:var P=3;break;default:P=d}var $=d;d=P;try{return E()}finally{d=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,P){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var $=d;d=E;try{return P()}finally{d=$}},e.unstable_scheduleCallback=function(E,P,$){var W=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?W+$:W):$=W,E){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=$+ie,E={id:c++,callback:P,priorityLevel:E,startTime:$,expirationTime:ie,sortIndex:-1},$>W?(E.sortIndex=$,t(u,E),n(l)===null&&E===n(u)&&(v?(p(b),b=-1):v=!0,st(x,$-W))):(E.sortIndex=ie,t(l,E),y||g||(y=!0,Ee(S))),E},e.unstable_shouldYield=k,e.unstable_wrapCallback=function(E){var P=d;return function(){var $=d;d=P;try{return E.apply(this,arguments)}finally{d=$}}}})(Kc);Qc.exports=Kc;var gm=Qc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=j,je=gm;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qc=new Set,Tr={};function vn(e,t){Bn(e,t),Bn(e+"Capture",t)}function Bn(e,t){for(Tr[e]=t,e=0;e<t.length;e++)qc.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Po=Object.prototype.hasOwnProperty,wm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xs={},Qs={};function xm(e){return Po.call(Qs,e)?!0:Po.call(Xs,e)?!1:wm.test(e)?Qs[e]=!0:(Xs[e]=!0,!1)}function Sm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function km(e,t,n,r){if(t===null||typeof t>"u"||Sm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fl=/[\-:]([a-z])/g;function Vl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fl,Vl);me[t]=new be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fl,Vl);me[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fl,Vl);me[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bl(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(km(t,n,i,r)&&(n=null),r||i===null?xm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var kt=ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,li=Symbol.for("react.element"),xn=Symbol.for("react.portal"),Sn=Symbol.for("react.fragment"),Hl=Symbol.for("react.strict_mode"),_o=Symbol.for("react.profiler"),Zc=Symbol.for("react.provider"),Jc=Symbol.for("react.context"),Ul=Symbol.for("react.forward_ref"),No=Symbol.for("react.suspense"),Oo=Symbol.for("react.suspense_list"),Wl=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),ef=Symbol.for("react.offscreen"),Ks=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=Ks&&e[Ks]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Ua;function ur(e){if(Ua===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ua=t&&t[1]||""}return`
`+Ua+e}var Wa=!1;function Ga(e,t){if(!e||Wa)return"";Wa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Wa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ur(e):""}function bm(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=Ga(e.type,!1),e;case 11:return e=Ga(e.type.render,!1),e;case 1:return e=Ga(e.type,!0),e;default:return""}}function zo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sn:return"Fragment";case xn:return"Portal";case _o:return"Profiler";case Hl:return"StrictMode";case No:return"Suspense";case Oo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jc:return(e.displayName||"Context")+".Consumer";case Zc:return(e._context.displayName||"Context")+".Provider";case Ul:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wl:return t=e.displayName||null,t!==null?t:zo(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return zo(e(t))}catch{}}return null}function Cm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zo(t);case 8:return t===Hl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Em(e){var t=tf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function si(e){e._valueTracker||(e._valueTracker=Em(e))}function nf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=tf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Lo(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rf(e,t){t=t.checked,t!=null&&Bl(e,"checked",t,!1)}function Mo(e,t){rf(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Io(e,t.type,n):t.hasOwnProperty("defaultValue")&&Io(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Io(e,t,n){(t!=="number"||Xi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var cr=Array.isArray;function An(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ao(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Js(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(cr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function af(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function eu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function of(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $o(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?of(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ui,lf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ui=ui||document.createElement("div"),ui.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ui.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tm=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){Tm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function sf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function uf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Pm=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jo(e,t){if(t){if(Pm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Ro(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Do=null;function Gl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fo=null,$n=null,jn=null;function tu(e){if(e=Zr(e)){if(typeof Fo!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Pa(t),Fo(e.stateNode,e.type,t))}}function cf(e){$n?jn?jn.push(e):jn=[e]:$n=e}function ff(){if($n){var e=$n,t=jn;if(jn=$n=null,tu(e),t)for(e=0;e<t.length;e++)tu(t[e])}}function df(e,t){return e(t)}function pf(){}var Ya=!1;function mf(e,t,n){if(Ya)return e(t,n);Ya=!0;try{return df(e,t,n)}finally{Ya=!1,($n!==null||jn!==null)&&(pf(),ff())}}function _r(e,t){var n=e.stateNode;if(n===null)return null;var r=Pa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Vo=!1;if(ht)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Vo=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Vo=!1}function _m(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var hr=!1,Qi=null,Ki=!1,Bo=null,Nm={onError:function(e){hr=!0,Qi=e}};function Om(e,t,n,r,i,a,o,s,l){hr=!1,Qi=null,_m.apply(Nm,arguments)}function zm(e,t,n,r,i,a,o,s,l){if(Om.apply(this,arguments),hr){if(hr){var u=Qi;hr=!1,Qi=null}else throw Error(_(198));Ki||(Ki=!0,Bo=u)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nu(e){if(gn(e)!==e)throw Error(_(188))}function Lm(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return nu(i),e;if(a===r)return nu(i),t;a=a.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function vf(e){return e=Lm(e),e!==null?gf(e):null}function gf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gf(e);if(t!==null)return t;e=e.sibling}return null}var yf=je.unstable_scheduleCallback,ru=je.unstable_cancelCallback,Mm=je.unstable_shouldYield,Im=je.unstable_requestPaint,re=je.unstable_now,Am=je.unstable_getCurrentPriorityLevel,Yl=je.unstable_ImmediatePriority,wf=je.unstable_UserBlockingPriority,qi=je.unstable_NormalPriority,$m=je.unstable_LowPriority,xf=je.unstable_IdlePriority,ba=null,ot=null;function jm(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(ba,e,void 0,(e.current.flags&128)===128)}catch{}}var Ze=Math.clz32?Math.clz32:Fm,Rm=Math.log,Dm=Math.LN2;function Fm(e){return e>>>=0,e===0?32:31-(Rm(e)/Dm|0)|0}var ci=64,fi=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=fr(s):(a&=o,a!==0&&(r=fr(a)))}else o=n&~i,o!==0?r=fr(o):a!==0&&(r=fr(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ze(t),i=1<<n,r|=e[n],t&=~i;return r}function Vm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ze(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=Vm(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function Ho(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sf(){var e=ci;return ci<<=1,!(ci&4194240)&&(ci=64),e}function Xa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ze(t),e[t]=n}function Hm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ze(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Xl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ze(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function kf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bf,Ql,Cf,Ef,Tf,Uo=!1,di=[],It=null,At=null,$t=null,Nr=new Map,Or=new Map,_t=[],Um="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function iu(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":At=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Or.delete(t.pointerId)}}function rr(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Zr(t),t!==null&&Ql(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Wm(e,t,n,r,i){switch(t){case"focusin":return It=rr(It,e,t,n,r,i),!0;case"dragenter":return At=rr(At,e,t,n,r,i),!0;case"mouseover":return $t=rr($t,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Nr.set(a,rr(Nr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Or.set(a,rr(Or.get(a)||null,e,t,n,r,i)),!0}return!1}function Pf(e){var t=en(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=hf(n),t!==null){e.blockedOn=t,Tf(e.priority,function(){Cf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Do=r,n.target.dispatchEvent(r),Do=null}else return t=Zr(n),t!==null&&Ql(t),e.blockedOn=n,!1;t.shift()}return!0}function au(e,t,n){$i(e)&&n.delete(t)}function Gm(){Uo=!1,It!==null&&$i(It)&&(It=null),At!==null&&$i(At)&&(At=null),$t!==null&&$i($t)&&($t=null),Nr.forEach(au),Or.forEach(au)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Uo||(Uo=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Gm)))}function zr(e){function t(i){return ir(i,e)}if(0<di.length){ir(di[0],e);for(var n=1;n<di.length;n++){var r=di[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&ir(It,e),At!==null&&ir(At,e),$t!==null&&ir($t,e),Nr.forEach(t),Or.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)Pf(n),n.blockedOn===null&&_t.shift()}var Rn=kt.ReactCurrentBatchConfig,Ji=!0;function Ym(e,t,n,r){var i=H,a=Rn.transition;Rn.transition=null;try{H=1,Kl(e,t,n,r)}finally{H=i,Rn.transition=a}}function Xm(e,t,n,r){var i=H,a=Rn.transition;Rn.transition=null;try{H=4,Kl(e,t,n,r)}finally{H=i,Rn.transition=a}}function Kl(e,t,n,r){if(Ji){var i=Wo(e,t,n,r);if(i===null)io(e,t,r,ea,n),iu(e,r);else if(Wm(i,e,t,n,r))r.stopPropagation();else if(iu(e,r),t&4&&-1<Um.indexOf(e)){for(;i!==null;){var a=Zr(i);if(a!==null&&bf(a),a=Wo(e,t,n,r),a===null&&io(e,t,r,ea,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else io(e,t,r,null,n)}}var ea=null;function Wo(e,t,n,r){if(ea=null,e=Gl(r),e=en(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ea=e,null}function _f(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Am()){case Yl:return 1;case wf:return 4;case qi:case $m:return 16;case xf:return 536870912;default:return 16}default:return 16}}var Ot=null,ql=null,ji=null;function Nf(){if(ji)return ji;var e,t=ql,n=t.length,r,i="value"in Ot?Ot.value:Ot.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return ji=i.slice(e,1<r?1-r:void 0)}function Ri(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pi(){return!0}function ou(){return!1}function De(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?pi:ou,this.isPropagationStopped=ou,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pi)},persist:function(){},isPersistent:pi}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=De(Zn),qr=J({},Zn,{view:0,detail:0}),Qm=De(qr),Qa,Ka,ar,Ca=J({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(Qa=e.screenX-ar.screenX,Ka=e.screenY-ar.screenY):Ka=Qa=0,ar=e),Qa)},movementY:function(e){return"movementY"in e?e.movementY:Ka}}),lu=De(Ca),Km=J({},Ca,{dataTransfer:0}),qm=De(Km),Zm=J({},qr,{relatedTarget:0}),qa=De(Zm),Jm=J({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),eh=De(Jm),th=J({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nh=De(th),rh=J({},Zn,{data:0}),su=De(rh),ih={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ah={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=oh[e])?!!t[e]:!1}function Jl(){return lh}var sh=J({},qr,{key:function(e){if(e.key){var t=ih[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ah[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(e){return e.type==="keypress"?Ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uh=De(sh),ch=J({},Ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uu=De(ch),fh=J({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),dh=De(fh),ph=J({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),mh=De(ph),hh=J({},Ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vh=De(hh),gh=[9,13,27,32],es=ht&&"CompositionEvent"in window,vr=null;ht&&"documentMode"in document&&(vr=document.documentMode);var yh=ht&&"TextEvent"in window&&!vr,Of=ht&&(!es||vr&&8<vr&&11>=vr),cu=" ",fu=!1;function zf(e,t){switch(e){case"keyup":return gh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function wh(e,t){switch(e){case"compositionend":return Lf(t);case"keypress":return t.which!==32?null:(fu=!0,cu);case"textInput":return e=t.data,e===cu&&fu?null:e;default:return null}}function xh(e,t){if(kn)return e==="compositionend"||!es&&zf(e,t)?(e=Nf(),ji=ql=Ot=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Of&&t.locale!=="ko"?null:t.data;default:return null}}var Sh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sh[e.type]:t==="textarea"}function Mf(e,t,n,r){cf(r),t=ta(t,"onChange"),0<t.length&&(n=new Zl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var gr=null,Lr=null;function kh(e){Uf(e,0)}function Ea(e){var t=En(e);if(nf(t))return e}function bh(e,t){if(e==="change")return t}var If=!1;if(ht){var Za;if(ht){var Ja="oninput"in document;if(!Ja){var pu=document.createElement("div");pu.setAttribute("oninput","return;"),Ja=typeof pu.oninput=="function"}Za=Ja}else Za=!1;If=Za&&(!document.documentMode||9<document.documentMode)}function mu(){gr&&(gr.detachEvent("onpropertychange",Af),Lr=gr=null)}function Af(e){if(e.propertyName==="value"&&Ea(Lr)){var t=[];Mf(t,Lr,e,Gl(e)),mf(kh,t)}}function Ch(e,t,n){e==="focusin"?(mu(),gr=t,Lr=n,gr.attachEvent("onpropertychange",Af)):e==="focusout"&&mu()}function Eh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ea(Lr)}function Th(e,t){if(e==="click")return Ea(t)}function Ph(e,t){if(e==="input"||e==="change")return Ea(t)}function _h(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:_h;function Mr(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Po.call(t,i)||!et(e[i],t[i]))return!1}return!0}function hu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vu(e,t){var n=hu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hu(n)}}function $f(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$f(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jf(){for(var e=window,t=Xi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xi(e.document)}return t}function ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Nh(e){var t=jf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$f(n.ownerDocument.documentElement,n)){if(r!==null&&ts(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=vu(n,a);var o=vu(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Oh=ht&&"documentMode"in document&&11>=document.documentMode,bn=null,Go=null,yr=null,Yo=!1;function gu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yo||bn==null||bn!==Xi(r)||(r=bn,"selectionStart"in r&&ts(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yr&&Mr(yr,r)||(yr=r,r=ta(Go,"onSelect"),0<r.length&&(t=new Zl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bn)))}function mi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Cn={animationend:mi("Animation","AnimationEnd"),animationiteration:mi("Animation","AnimationIteration"),animationstart:mi("Animation","AnimationStart"),transitionend:mi("Transition","TransitionEnd")},eo={},Rf={};ht&&(Rf=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function Ta(e){if(eo[e])return eo[e];if(!Cn[e])return e;var t=Cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rf)return eo[e]=t[n];return e}var Df=Ta("animationend"),Ff=Ta("animationiteration"),Vf=Ta("animationstart"),Bf=Ta("transitionend"),Hf=new Map,yu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){Hf.set(e,t),vn(t,[e])}for(var to=0;to<yu.length;to++){var no=yu[to],zh=no.toLowerCase(),Lh=no[0].toUpperCase()+no.slice(1);Yt(zh,"on"+Lh)}Yt(Df,"onAnimationEnd");Yt(Ff,"onAnimationIteration");Yt(Vf,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(Bf,"onTransitionEnd");Bn("onMouseEnter",["mouseout","mouseover"]);Bn("onMouseLeave",["mouseout","mouseover"]);Bn("onPointerEnter",["pointerout","pointerover"]);Bn("onPointerLeave",["pointerout","pointerover"]);vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mh=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function wu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zm(r,t,void 0,e),e.currentTarget=null}function Uf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;wu(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;wu(i,s,u),a=l}}}if(Ki)throw e=Bo,Ki=!1,Bo=null,e}function G(e,t){var n=t[Zo];n===void 0&&(n=t[Zo]=new Set);var r=e+"__bubble";n.has(r)||(Wf(t,e,2,!1),n.add(r))}function ro(e,t,n){var r=0;t&&(r|=4),Wf(n,e,r,t)}var hi="_reactListening"+Math.random().toString(36).slice(2);function Ir(e){if(!e[hi]){e[hi]=!0,qc.forEach(function(n){n!=="selectionchange"&&(Mh.has(n)||ro(n,!1,e),ro(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hi]||(t[hi]=!0,ro("selectionchange",!1,t))}}function Wf(e,t,n,r){switch(_f(t)){case 1:var i=Ym;break;case 4:i=Xm;break;default:i=Kl}n=i.bind(null,t,n,e),i=void 0,!Vo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function io(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=en(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}mf(function(){var u=a,c=Gl(n),f=[];e:{var d=Hf.get(e);if(d!==void 0){var g=Zl,y=e;switch(e){case"keypress":if(Ri(n)===0)break e;case"keydown":case"keyup":g=uh;break;case"focusin":y="focus",g=qa;break;case"focusout":y="blur",g=qa;break;case"beforeblur":case"afterblur":g=qa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=qm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=dh;break;case Df:case Ff:case Vf:g=eh;break;case Bf:g=mh;break;case"scroll":g=Qm;break;case"wheel":g=vh;break;case"copy":case"cut":case"paste":g=nh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=uu}var v=(t&4)!==0,w=!v&&e==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var m=u,h;m!==null;){h=m;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,p!==null&&(x=_r(m,p),x!=null&&v.push(Ar(m,x,h)))),w)break;m=m.return}0<v.length&&(d=new g(d,y,null,n,c),f.push({event:d,listeners:v}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",d&&n!==Do&&(y=n.relatedTarget||n.fromElement)&&(en(y)||y[vt]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?en(y):null,y!==null&&(w=gn(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=lu,x="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=uu,x="onPointerLeave",p="onPointerEnter",m="pointer"),w=g==null?d:En(g),h=y==null?d:En(y),d=new v(x,m+"leave",g,n,c),d.target=w,d.relatedTarget=h,x=null,en(c)===u&&(v=new v(p,m+"enter",y,n,c),v.target=h,v.relatedTarget=w,x=v),w=x,g&&y)t:{for(v=g,p=y,m=0,h=v;h;h=yn(h))m++;for(h=0,x=p;x;x=yn(x))h++;for(;0<m-h;)v=yn(v),m--;for(;0<h-m;)p=yn(p),h--;for(;m--;){if(v===p||p!==null&&v===p.alternate)break t;v=yn(v),p=yn(p)}v=null}else v=null;g!==null&&xu(f,d,g,v,!1),y!==null&&w!==null&&xu(f,w,y,v,!0)}}e:{if(d=u?En(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var S=bh;else if(du(d))if(If)S=Ph;else{S=Eh;var C=Ch}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=Th);if(S&&(S=S(e,u))){Mf(f,S,n,c);break e}C&&C(e,d,u),e==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Io(d,"number",d.value)}switch(C=u?En(u):window,e){case"focusin":(du(C)||C.contentEditable==="true")&&(bn=C,Go=u,yr=null);break;case"focusout":yr=Go=bn=null;break;case"mousedown":Yo=!0;break;case"contextmenu":case"mouseup":case"dragend":Yo=!1,gu(f,n,c);break;case"selectionchange":if(Oh)break;case"keydown":case"keyup":gu(f,n,c)}var N;if(es)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else kn?zf(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Of&&n.locale!=="ko"&&(kn||b!=="onCompositionStart"?b==="onCompositionEnd"&&kn&&(N=Nf()):(Ot=c,ql="value"in Ot?Ot.value:Ot.textContent,kn=!0)),C=ta(u,b),0<C.length&&(b=new su(b,e,null,n,c),f.push({event:b,listeners:C}),N?b.data=N:(N=Lf(n),N!==null&&(b.data=N)))),(N=yh?wh(e,n):xh(e,n))&&(u=ta(u,"onBeforeInput"),0<u.length&&(c=new su("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=N))}Uf(f,t)})}function Ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ta(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=_r(e,n),a!=null&&r.unshift(Ar(e,a,i)),a=_r(e,t),a!=null&&r.push(Ar(e,a,i))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xu(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=_r(n,a),l!=null&&o.unshift(Ar(n,l,s))):i||(l=_r(n,a),l!=null&&o.push(Ar(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ih=/\r\n?/g,Ah=/\u0000|\uFFFD/g;function Su(e){return(typeof e=="string"?e:""+e).replace(Ih,`
`).replace(Ah,"")}function vi(e,t,n){if(t=Su(t),Su(e)!==t&&n)throw Error(_(425))}function na(){}var Xo=null,Qo=null;function Ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qo=typeof setTimeout=="function"?setTimeout:void 0,$h=typeof clearTimeout=="function"?clearTimeout:void 0,ku=typeof Promise=="function"?Promise:void 0,jh=typeof queueMicrotask=="function"?queueMicrotask:typeof ku<"u"?function(e){return ku.resolve(null).then(e).catch(Rh)}:qo;function Rh(e){setTimeout(function(){throw e})}function ao(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),zr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zr(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),it="__reactFiber$"+Jn,$r="__reactProps$"+Jn,vt="__reactContainer$"+Jn,Zo="__reactEvents$"+Jn,Dh="__reactListeners$"+Jn,Fh="__reactHandles$"+Jn;function en(e){var t=e[it];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[it]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bu(e);e!==null;){if(n=e[it])return n;e=bu(e)}return t}e=n,n=e.parentNode}return null}function Zr(e){return e=e[it]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Pa(e){return e[$r]||null}var Jo=[],Tn=-1;function Xt(e){return{current:e}}function X(e){0>Tn||(e.current=Jo[Tn],Jo[Tn]=null,Tn--)}function U(e,t){Tn++,Jo[Tn]=e.current,e.current=t}var Ht={},we=Xt(Ht),_e=Xt(!1),sn=Ht;function Hn(e,t){var n=e.type.contextTypes;if(!n)return Ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function ra(){X(_e),X(we)}function Cu(e,t,n){if(we.current!==Ht)throw Error(_(168));U(we,t),U(_e,n)}function Gf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,Cm(e)||"Unknown",i));return J({},n,r)}function ia(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,sn=we.current,U(we,e),U(_e,_e.current),!0}function Eu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Gf(e,t,sn),r.__reactInternalMemoizedMergedChildContext=e,X(_e),X(we),U(we,e)):X(_e),U(_e,n)}var ft=null,_a=!1,oo=!1;function Yf(e){ft===null?ft=[e]:ft.push(e)}function Vh(e){_a=!0,Yf(e)}function Qt(){if(!oo&&ft!==null){oo=!0;var e=0,t=H;try{var n=ft;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,_a=!1}catch(i){throw ft!==null&&(ft=ft.slice(e+1)),yf(Yl,Qt),i}finally{H=t,oo=!1}}return null}var Pn=[],_n=0,aa=null,oa=0,Ve=[],Be=0,un=null,dt=1,pt="";function Zt(e,t){Pn[_n++]=oa,Pn[_n++]=aa,aa=e,oa=t}function Xf(e,t,n){Ve[Be++]=dt,Ve[Be++]=pt,Ve[Be++]=un,un=e;var r=dt;e=pt;var i=32-Ze(r)-1;r&=~(1<<i),n+=1;var a=32-Ze(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dt=1<<32-Ze(t)+i|n<<i|r,pt=a+e}else dt=1<<a|n<<i|r,pt=e}function ns(e){e.return!==null&&(Zt(e,1),Xf(e,1,0))}function rs(e){for(;e===aa;)aa=Pn[--_n],Pn[_n]=null,oa=Pn[--_n],Pn[_n]=null;for(;e===un;)un=Ve[--Be],Ve[Be]=null,pt=Ve[--Be],Ve[Be]=null,dt=Ve[--Be],Ve[Be]=null}var $e=null,Ae=null,K=!1,Ke=null;function Qf(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Tu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Ae=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:dt,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Ae=null,!0):!1;default:return!1}}function el(e){return(e.mode&1)!==0&&(e.flags&128)===0}function tl(e){if(K){var t=Ae;if(t){var n=t;if(!Tu(e,t)){if(el(e))throw Error(_(418));t=jt(n.nextSibling);var r=$e;t&&Tu(e,t)?Qf(r,n):(e.flags=e.flags&-4097|2,K=!1,$e=e)}}else{if(el(e))throw Error(_(418));e.flags=e.flags&-4097|2,K=!1,$e=e}}}function Pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function gi(e){if(e!==$e)return!1;if(!K)return Pu(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ko(e.type,e.memoizedProps)),t&&(t=Ae)){if(el(e))throw Kf(),Error(_(418));for(;t;)Qf(e,t),t=jt(t.nextSibling)}if(Pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ae=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=$e?jt(e.stateNode.nextSibling):null;return!0}function Kf(){for(var e=Ae;e;)e=jt(e.nextSibling)}function Un(){Ae=$e=null,K=!1}function is(e){Ke===null?Ke=[e]:Ke.push(e)}var Bh=kt.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _u(e){var t=e._init;return t(e._payload)}function qf(e){function t(p,m){if(e){var h=p.deletions;h===null?(p.deletions=[m],p.flags|=16):h.push(m)}}function n(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=Vt(p,m),p.index=0,p.sibling=null,p}function a(p,m,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<m?(p.flags|=2,m):h):(p.flags|=2,m)):(p.flags|=1048576,m)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,m,h,x){return m===null||m.tag!==6?(m=mo(h,p.mode,x),m.return=p,m):(m=i(m,h),m.return=p,m)}function l(p,m,h,x){var S=h.type;return S===Sn?c(p,m,h.props.children,x,h.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tt&&_u(S)===m.type)?(x=i(m,h.props),x.ref=or(p,m,h),x.return=p,x):(x=Wi(h.type,h.key,h.props,null,p.mode,x),x.ref=or(p,m,h),x.return=p,x)}function u(p,m,h,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==h.containerInfo||m.stateNode.implementation!==h.implementation?(m=ho(h,p.mode,x),m.return=p,m):(m=i(m,h.children||[]),m.return=p,m)}function c(p,m,h,x,S){return m===null||m.tag!==7?(m=ln(h,p.mode,x,S),m.return=p,m):(m=i(m,h),m.return=p,m)}function f(p,m,h){if(typeof m=="string"&&m!==""||typeof m=="number")return m=mo(""+m,p.mode,h),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case li:return h=Wi(m.type,m.key,m.props,null,p.mode,h),h.ref=or(p,null,m),h.return=p,h;case xn:return m=ho(m,p.mode,h),m.return=p,m;case Tt:var x=m._init;return f(p,x(m._payload),h)}if(cr(m)||tr(m))return m=ln(m,p.mode,h,null),m.return=p,m;yi(p,m)}return null}function d(p,m,h,x){var S=m!==null?m.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:s(p,m,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case li:return h.key===S?l(p,m,h,x):null;case xn:return h.key===S?u(p,m,h,x):null;case Tt:return S=h._init,d(p,m,S(h._payload),x)}if(cr(h)||tr(h))return S!==null?null:c(p,m,h,x,null);yi(p,h)}return null}function g(p,m,h,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(h)||null,s(m,p,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case li:return p=p.get(x.key===null?h:x.key)||null,l(m,p,x,S);case xn:return p=p.get(x.key===null?h:x.key)||null,u(m,p,x,S);case Tt:var C=x._init;return g(p,m,h,C(x._payload),S)}if(cr(x)||tr(x))return p=p.get(h)||null,c(m,p,x,S,null);yi(m,x)}return null}function y(p,m,h,x){for(var S=null,C=null,N=m,b=m=0,R=null;N!==null&&b<h.length;b++){N.index>b?(R=N,N=null):R=N.sibling;var T=d(p,N,h[b],x);if(T===null){N===null&&(N=R);break}e&&N&&T.alternate===null&&t(p,N),m=a(T,m,b),C===null?S=T:C.sibling=T,C=T,N=R}if(b===h.length)return n(p,N),K&&Zt(p,b),S;if(N===null){for(;b<h.length;b++)N=f(p,h[b],x),N!==null&&(m=a(N,m,b),C===null?S=N:C.sibling=N,C=N);return K&&Zt(p,b),S}for(N=r(p,N);b<h.length;b++)R=g(N,p,b,h[b],x),R!==null&&(e&&R.alternate!==null&&N.delete(R.key===null?b:R.key),m=a(R,m,b),C===null?S=R:C.sibling=R,C=R);return e&&N.forEach(function(k){return t(p,k)}),K&&Zt(p,b),S}function v(p,m,h,x){var S=tr(h);if(typeof S!="function")throw Error(_(150));if(h=S.call(h),h==null)throw Error(_(151));for(var C=S=null,N=m,b=m=0,R=null,T=h.next();N!==null&&!T.done;b++,T=h.next()){N.index>b?(R=N,N=null):R=N.sibling;var k=d(p,N,T.value,x);if(k===null){N===null&&(N=R);break}e&&N&&k.alternate===null&&t(p,N),m=a(k,m,b),C===null?S=k:C.sibling=k,C=k,N=R}if(T.done)return n(p,N),K&&Zt(p,b),S;if(N===null){for(;!T.done;b++,T=h.next())T=f(p,T.value,x),T!==null&&(m=a(T,m,b),C===null?S=T:C.sibling=T,C=T);return K&&Zt(p,b),S}for(N=r(p,N);!T.done;b++,T=h.next())T=g(N,p,b,T.value,x),T!==null&&(e&&T.alternate!==null&&N.delete(T.key===null?b:T.key),m=a(T,m,b),C===null?S=T:C.sibling=T,C=T);return e&&N.forEach(function(z){return t(p,z)}),K&&Zt(p,b),S}function w(p,m,h,x){if(typeof h=="object"&&h!==null&&h.type===Sn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case li:e:{for(var S=h.key,C=m;C!==null;){if(C.key===S){if(S=h.type,S===Sn){if(C.tag===7){n(p,C.sibling),m=i(C,h.props.children),m.return=p,p=m;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Tt&&_u(S)===C.type){n(p,C.sibling),m=i(C,h.props),m.ref=or(p,C,h),m.return=p,p=m;break e}n(p,C);break}else t(p,C);C=C.sibling}h.type===Sn?(m=ln(h.props.children,p.mode,x,h.key),m.return=p,p=m):(x=Wi(h.type,h.key,h.props,null,p.mode,x),x.ref=or(p,m,h),x.return=p,p=x)}return o(p);case xn:e:{for(C=h.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===h.containerInfo&&m.stateNode.implementation===h.implementation){n(p,m.sibling),m=i(m,h.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else t(p,m);m=m.sibling}m=ho(h,p.mode,x),m.return=p,p=m}return o(p);case Tt:return C=h._init,w(p,m,C(h._payload),x)}if(cr(h))return y(p,m,h,x);if(tr(h))return v(p,m,h,x);yi(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,m!==null&&m.tag===6?(n(p,m.sibling),m=i(m,h),m.return=p,p=m):(n(p,m),m=mo(h,p.mode,x),m.return=p,p=m),o(p)):n(p,m)}return w}var Wn=qf(!0),Zf=qf(!1),la=Xt(null),sa=null,Nn=null,as=null;function os(){as=Nn=sa=null}function ls(e){var t=la.current;X(la),e._currentValue=t}function nl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){sa=e,as=Nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function We(e){var t=e._currentValue;if(as!==e)if(e={context:e,memoizedValue:t,next:null},Nn===null){if(sa===null)throw Error(_(308));Nn=e,sa.dependencies={lanes:0,firstContext:e}}else Nn=Nn.next=e;return t}var tn=null;function ss(e){tn===null?tn=[e]:tn.push(e)}function Jf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ss(t)):(n.next=i.next,i.next=n),t.interleaved=n,gt(e,r)}function gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function us(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ed(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gt(e,n)}return i=r.interleaved,i===null?(t.next=t,ss(r)):(t.next=i.next,i.next=t),r.interleaved=t,gt(e,n)}function Di(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xl(e,n)}}function Nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ua(e,t,n,r){var i=e.updateQueue;Pt=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;o=0,c=u=l=null,s=a;do{var d=s.lane,g=s.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,v=s;switch(d=t,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(g,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(g,f,d):y,d==null)break e;f=J({},f,d);break e;case 2:Pt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[s]:d.push(s))}else g={eventTime:g,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=d;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;d=s,s=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);fn|=o,e.lanes=o,e.memoizedState=f}}function Ou(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Jr={},lt=Xt(Jr),jr=Xt(Jr),Rr=Xt(Jr);function nn(e){if(e===Jr)throw Error(_(174));return e}function cs(e,t){switch(U(Rr,t),U(jr,e),U(lt,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$o(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$o(t,e)}X(lt),U(lt,t)}function Gn(){X(lt),X(jr),X(Rr)}function td(e){nn(Rr.current);var t=nn(lt.current),n=$o(t,e.type);t!==n&&(U(jr,e),U(lt,n))}function fs(e){jr.current===e&&(X(lt),X(jr))}var q=Xt(0);function ca(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var lo=[];function ds(){for(var e=0;e<lo.length;e++)lo[e]._workInProgressVersionPrimary=null;lo.length=0}var Fi=kt.ReactCurrentDispatcher,so=kt.ReactCurrentBatchConfig,cn=0,Z=null,oe=null,ue=null,fa=!1,wr=!1,Dr=0,Hh=0;function ve(){throw Error(_(321))}function ps(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function ms(e,t,n,r,i,a){if(cn=a,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fi.current=e===null||e.memoizedState===null?Yh:Xh,e=n(r,i),wr){a=0;do{if(wr=!1,Dr=0,25<=a)throw Error(_(301));a+=1,ue=oe=null,t.updateQueue=null,Fi.current=Qh,e=n(r,i)}while(wr)}if(Fi.current=da,t=oe!==null&&oe.next!==null,cn=0,ue=oe=Z=null,fa=!1,t)throw Error(_(300));return e}function hs(){var e=Dr!==0;return Dr=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Z.memoizedState=ue=e:ue=ue.next=e,ue}function Ge(){if(oe===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ue===null?Z.memoizedState:ue.next;if(t!==null)ue=t,oe=e;else{if(e===null)throw Error(_(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?Z.memoizedState=ue=e:ue=ue.next=e}return ue}function Fr(e,t){return typeof t=="function"?t(e):t}function uo(e){var t=Ge(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((cn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,o=r):l=l.next=f,Z.lanes|=c,fn|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,et(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Z.lanes|=a,fn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function co(e){var t=Ge(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);et(a,t.memoizedState)||(Pe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function nd(){}function rd(e,t){var n=Z,r=Ge(),i=t(),a=!et(r.memoizedState,i);if(a&&(r.memoizedState=i,Pe=!0),r=r.queue,vs(od.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Vr(9,ad.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(_(349));cn&30||id(n,t,i)}return i}function id(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ad(e,t,n,r){t.value=n,t.getSnapshot=r,ld(t)&&sd(e)}function od(e,t,n){return n(function(){ld(t)&&sd(e)})}function ld(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function sd(e){var t=gt(e,1);t!==null&&Je(t,e,1,-1)}function zu(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:e},t.queue=e,e=e.dispatch=Gh.bind(null,Z,e),[t.memoizedState,e]}function Vr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ud(){return Ge().memoizedState}function Vi(e,t,n,r){var i=nt();Z.flags|=e,i.memoizedState=Vr(1|t,n,void 0,r===void 0?null:r)}function Na(e,t,n,r){var i=Ge();r=r===void 0?null:r;var a=void 0;if(oe!==null){var o=oe.memoizedState;if(a=o.destroy,r!==null&&ps(r,o.deps)){i.memoizedState=Vr(t,n,a,r);return}}Z.flags|=e,i.memoizedState=Vr(1|t,n,a,r)}function Lu(e,t){return Vi(8390656,8,e,t)}function vs(e,t){return Na(2048,8,e,t)}function cd(e,t){return Na(4,2,e,t)}function fd(e,t){return Na(4,4,e,t)}function dd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pd(e,t,n){return n=n!=null?n.concat([e]):null,Na(4,4,dd.bind(null,t,e),n)}function gs(){}function md(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ps(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hd(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ps(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vd(e,t,n){return cn&21?(et(n,t)||(n=Sf(),Z.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function Uh(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=so.transition;so.transition={};try{e(!1),t()}finally{H=n,so.transition=r}}function gd(){return Ge().memoizedState}function Wh(e,t,n){var r=Ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yd(e))wd(t,n);else if(n=Jf(e,t,n,r),n!==null){var i=Se();Je(n,e,r,i),xd(n,t,r)}}function Gh(e,t,n){var r=Ft(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yd(e))wd(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,et(s,o)){var l=t.interleaved;l===null?(i.next=i,ss(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Jf(e,t,i,r),n!==null&&(i=Se(),Je(n,e,r,i),xd(n,t,r))}}function yd(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function wd(e,t){wr=fa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xl(e,n)}}var da={readContext:We,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useInsertionEffect:ve,useLayoutEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useMutableSource:ve,useSyncExternalStore:ve,useId:ve,unstable_isNewReconciler:!1},Yh={readContext:We,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:Lu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vi(4194308,4,dd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vi(4,2,e,t)},useMemo:function(e,t){var n=nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Wh.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:zu,useDebugValue:gs,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=zu(!1),t=e[0];return e=Uh.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,i=nt();if(K){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),ce===null)throw Error(_(349));cn&30||id(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Lu(od.bind(null,r,a,e),[e]),r.flags|=2048,Vr(9,ad.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=nt(),t=ce.identifierPrefix;if(K){var n=pt,r=dt;n=(r&~(1<<32-Ze(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Dr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xh={readContext:We,useCallback:md,useContext:We,useEffect:vs,useImperativeHandle:pd,useInsertionEffect:cd,useLayoutEffect:fd,useMemo:hd,useReducer:uo,useRef:ud,useState:function(){return uo(Fr)},useDebugValue:gs,useDeferredValue:function(e){var t=Ge();return vd(t,oe.memoizedState,e)},useTransition:function(){var e=uo(Fr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:nd,useSyncExternalStore:rd,useId:gd,unstable_isNewReconciler:!1},Qh={readContext:We,useCallback:md,useContext:We,useEffect:vs,useImperativeHandle:pd,useInsertionEffect:cd,useLayoutEffect:fd,useMemo:hd,useReducer:co,useRef:ud,useState:function(){return co(Fr)},useDebugValue:gs,useDeferredValue:function(e){var t=Ge();return oe===null?t.memoizedState=e:vd(t,oe.memoizedState,e)},useTransition:function(){var e=co(Fr)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:nd,useSyncExternalStore:rd,useId:gd,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oa={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Ft(e),a=mt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Rt(e,a,i),t!==null&&(Je(t,e,i,r),Di(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Ft(e),a=mt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Rt(e,a,i),t!==null&&(Je(t,e,i,r),Di(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Ft(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Rt(e,i,r),t!==null&&(Je(t,e,r,n),Di(t,e,r))}};function Mu(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Sd(e,t,n){var r=!1,i=Ht,a=t.contextType;return typeof a=="object"&&a!==null?a=We(a):(i=Ne(t)?sn:we.current,r=t.contextTypes,a=(r=r!=null)?Hn(e,i):Ht),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Iu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oa.enqueueReplaceState(t,t.state,null)}function il(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},us(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=We(a):(a=Ne(t)?sn:we.current,i.context=Hn(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(rl(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Oa.enqueueReplaceState(i,i.state,null),ua(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yn(e,t){try{var n="",r=t;do n+=bm(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function fo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function al(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kh=typeof WeakMap=="function"?WeakMap:Map;function kd(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ma||(ma=!0,hl=r),al(e,t)},n}function bd(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){al(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){al(e,t),typeof r!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Au(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=cv.bind(null,e,t,n),t.then(e,e))}function $u(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ju(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e)}var qh=kt.ReactCurrentOwner,Pe=!1;function xe(e,t,n,r){t.child=e===null?Zf(t,null,n,r):Wn(t,e.child,n,r)}function Ru(e,t,n,r,i){n=n.render;var a=t.ref;return Dn(t,i),r=ms(e,t,n,r,a,i),n=hs(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(K&&n&&ns(t),t.flags|=1,xe(e,t,r,i),t.child)}function Du(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Es(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Cd(e,t,a,r,i)):(e=Wi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Mr,n(o,r)&&e.ref===t.ref)return yt(e,t,i)}return t.flags|=1,e=Vt(a,r),e.ref=t.ref,e.return=t,t.child=e}function Cd(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,yt(e,t,i)}return ol(e,t,n,r,i)}function Ed(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(zn,Le),Le|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(zn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,U(zn,Le),Le|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,U(zn,Le),Le|=r;return xe(e,t,i,n),t.child}function Td(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ol(e,t,n,r,i){var a=Ne(n)?sn:we.current;return a=Hn(t,a),Dn(t,i),n=ms(e,t,n,r,a,i),r=hs(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(K&&r&&ns(t),t.flags|=1,xe(e,t,n,i),t.child)}function Fu(e,t,n,r,i){if(Ne(n)){var a=!0;ia(t)}else a=!1;if(Dn(t,i),t.stateNode===null)Bi(e,t),Sd(t,n,r),il(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=We(u):(u=Ne(n)?sn:we.current,u=Hn(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Iu(t,o,r,u),Pt=!1;var d=t.memoizedState;o.state=d,ua(t,r,o,i),l=t.memoizedState,s!==r||d!==l||_e.current||Pt?(typeof c=="function"&&(rl(t,n,c,r),l=t.memoizedState),(s=Pt||Mu(t,n,s,r,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ed(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Xe(t.type,s),o.props=u,f=t.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=We(l):(l=Ne(n)?sn:we.current,l=Hn(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||d!==l)&&Iu(t,o,r,l),Pt=!1,d=t.memoizedState,o.state=d,ua(t,r,o,i);var y=t.memoizedState;s!==f||d!==y||_e.current||Pt?(typeof g=="function"&&(rl(t,n,g,r),y=t.memoizedState),(u=Pt||Mu(t,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return ll(e,t,n,r,a,i)}function ll(e,t,n,r,i,a){Td(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Eu(t,n,!1),yt(e,t,a);r=t.stateNode,qh.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Wn(t,e.child,null,a),t.child=Wn(t,null,s,a)):xe(e,t,s,a),t.memoizedState=r.state,i&&Eu(t,n,!0),t.child}function Pd(e){var t=e.stateNode;t.pendingContext?Cu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cu(e,t.context,!1),cs(e,t.containerInfo)}function Vu(e,t,n,r,i){return Un(),is(i),t.flags|=256,xe(e,t,n,r),t.child}var sl={dehydrated:null,treeContext:null,retryLane:0};function ul(e){return{baseLanes:e,cachePool:null,transitions:null}}function _d(e,t,n){var r=t.pendingProps,i=q.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(q,i&1),e===null)return tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ma(o,r,0,null),e=ln(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ul(n),t.memoizedState=sl,e):ys(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Zh(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Vt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Vt(s,a):(a=ln(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?ul(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=sl,r}return a=e.child,e=a.sibling,r=Vt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ys(e,t){return t=Ma({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wi(e,t,n,r){return r!==null&&is(r),Wn(t,e.child,null,n),e=ys(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zh(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=fo(Error(_(422))),wi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Ma({mode:"visible",children:r.children},i,0,null),a=ln(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Wn(t,e.child,null,o),t.child.memoizedState=ul(o),t.memoizedState=sl,a);if(!(t.mode&1))return wi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(_(419)),r=fo(a,r,void 0),wi(e,t,o,r)}if(s=(o&e.childLanes)!==0,Pe||s){if(r=ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,gt(e,i),Je(r,e,i,-1))}return Cs(),r=fo(Error(_(421))),wi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=fv.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Ae=jt(i.nextSibling),$e=t,K=!0,Ke=null,e!==null&&(Ve[Be++]=dt,Ve[Be++]=pt,Ve[Be++]=un,dt=e.id,pt=e.overflow,un=t),t=ys(t,r.children),t.flags|=4096,t)}function Bu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),nl(e.return,t,n)}function po(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Nd(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(xe(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bu(e,n,t);else if(e.tag===19)Bu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ca(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),po(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ca(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}po(t,!0,n,null,a);break;case"together":po(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jh(e,t,n){switch(t.tag){case 3:Pd(t),Un();break;case 5:td(t);break;case 1:Ne(t.type)&&ia(t);break;case 4:cs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(la,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?_d(e,t,n):(U(q,q.current&1),e=yt(e,t,n),e!==null?e.sibling:null);U(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Nd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Ed(e,t,n)}return yt(e,t,n)}var Od,cl,zd,Ld;Od=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cl=function(){};zd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,nn(lt.current);var a=null;switch(n){case"input":i=Lo(e,i),r=Lo(e,r),a=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),a=[];break;case"textarea":i=Ao(e,i),r=Ao(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=na)}jo(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Tr.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Tr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&G("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Ld=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ev(e,t,n){var r=t.pendingProps;switch(rs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Ne(t.type)&&ra(),ge(t),null;case 3:return r=t.stateNode,Gn(),X(_e),X(we),ds(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(yl(Ke),Ke=null))),cl(e,t),ge(t),null;case 5:fs(t);var i=nn(Rr.current);if(n=t.type,e!==null&&t.stateNode!=null)zd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return ge(t),null}if(e=nn(lt.current),gi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[it]=t,r[$r]=a,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(i=0;i<dr.length;i++)G(dr[i],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":qs(r,a),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},G("invalid",r);break;case"textarea":Js(r,a),G("invalid",r)}jo(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&vi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&vi(r.textContent,s,e),i=["children",""+s]):Tr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&G("scroll",r)}switch(n){case"input":si(r),Zs(r,a,!0);break;case"textarea":si(r),eu(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=na)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=of(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[it]=t,e[$r]=r,Od(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ro(n,r),n){case"dialog":G("cancel",e),G("close",e),i=r;break;case"iframe":case"object":case"embed":G("load",e),i=r;break;case"video":case"audio":for(i=0;i<dr.length;i++)G(dr[i],e);i=r;break;case"source":G("error",e),i=r;break;case"img":case"image":case"link":G("error",e),G("load",e),i=r;break;case"details":G("toggle",e),i=r;break;case"input":qs(e,r),i=Lo(e,r),G("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),G("invalid",e);break;case"textarea":Js(e,r),i=Ao(e,r),G("invalid",e);break;default:i=r}jo(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?uf(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lf(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pr(e,l):typeof l=="number"&&Pr(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Tr.hasOwnProperty(a)?l!=null&&a==="onScroll"&&G("scroll",e):l!=null&&Bl(e,a,l,o))}switch(n){case"input":si(e),Zs(e,r,!1);break;case"textarea":si(e),eu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?An(e,!!r.multiple,a,!1):r.defaultValue!=null&&An(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=na)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)Ld(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=nn(Rr.current),nn(lt.current),gi(t)){if(r=t.stateNode,n=t.memoizedProps,r[it]=t,(a=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:vi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vi(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[it]=t,t.stateNode=r}return ge(t),null;case 13:if(X(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ae!==null&&t.mode&1&&!(t.flags&128))Kf(),Un(),t.flags|=98560,a=!1;else if(a=gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(_(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(_(317));a[it]=t}else Un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),a=!1}else Ke!==null&&(yl(Ke),Ke=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?le===0&&(le=3):Cs())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return Gn(),cl(e,t),e===null&&Ir(t.stateNode.containerInfo),ge(t),null;case 10:return ls(t.type._context),ge(t),null;case 17:return Ne(t.type)&&ra(),ge(t),null;case 19:if(X(q),a=t.memoizedState,a===null)return ge(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)lr(a,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ca(e),o!==null){for(t.flags|=128,lr(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(q,q.current&1|2),t.child}e=e.sibling}a.tail!==null&&re()>Xn&&(t.flags|=128,r=!0,lr(a,!1),t.lanes=4194304)}else{if(!r)if(e=ca(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!K)return ge(t),null}else 2*re()-a.renderingStartTime>Xn&&n!==1073741824&&(t.flags|=128,r=!0,lr(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=re(),t.sibling=null,n=q.current,U(q,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return bs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function tv(e,t){switch(rs(t),t.tag){case 1:return Ne(t.type)&&ra(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),X(_e),X(we),ds(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fs(t),null;case 13:if(X(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(q),null;case 4:return Gn(),null;case 10:return ls(t.type._context),null;case 22:case 23:return bs(),null;case 24:return null;default:return null}}var xi=!1,ye=!1,nv=typeof WeakSet=="function"?WeakSet:Set,I=null;function On(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function fl(e,t,n){try{n()}catch(r){te(e,t,r)}}var Hu=!1;function rv(e,t){if(Xo=Ji,e=jf(),ts(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(s=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===e)break t;if(d===n&&++u===i&&(s=o),d===a&&++c===r&&(l=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qo={focusedElem:e,selectionRange:n},Ji=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,w=y.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Xe(t.type,v),w);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(x){te(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return y=Hu,Hu=!1,y}function xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&fl(t,n,a)}i=i.next}while(i!==r)}}function za(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function dl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Md(e){var t=e.alternate;t!==null&&(e.alternate=null,Md(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[it],delete t[$r],delete t[Zo],delete t[Dh],delete t[Fh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Id(e){return e.tag===5||e.tag===3||e.tag===4}function Uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Id(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=na));else if(r!==4&&(e=e.child,e!==null))for(pl(e,t,n),e=e.sibling;e!==null;)pl(e,t,n),e=e.sibling}function ml(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ml(e,t,n),e=e.sibling;e!==null;)ml(e,t,n),e=e.sibling}var de=null,Qe=!1;function Ct(e,t,n){for(n=n.child;n!==null;)Ad(e,t,n),n=n.sibling}function Ad(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(ba,n)}catch{}switch(n.tag){case 5:ye||On(n,t);case 6:var r=de,i=Qe;de=null,Ct(e,t,n),de=r,Qe=i,de!==null&&(Qe?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Qe?(e=de,n=n.stateNode,e.nodeType===8?ao(e.parentNode,n):e.nodeType===1&&ao(e,n),zr(e)):ao(de,n.stateNode));break;case 4:r=de,i=Qe,de=n.stateNode.containerInfo,Qe=!0,Ct(e,t,n),de=r,Qe=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&fl(n,t,o),i=i.next}while(i!==r)}Ct(e,t,n);break;case 1:if(!ye&&(On(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){te(n,t,s)}Ct(e,t,n);break;case 21:Ct(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Ct(e,t,n),ye=r):Ct(e,t,n);break;default:Ct(e,t,n)}}function Wu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new nv),t.forEach(function(r){var i=dv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ye(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:de=s.stateNode,Qe=!1;break e;case 3:de=s.stateNode.containerInfo,Qe=!0;break e;case 4:de=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(de===null)throw Error(_(160));Ad(a,o,i),de=null,Qe=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$d(t,e),t=t.sibling}function $d(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),tt(e),r&4){try{xr(3,e,e.return),za(3,e)}catch(v){te(e,e.return,v)}try{xr(5,e,e.return)}catch(v){te(e,e.return,v)}}break;case 1:Ye(t,e),tt(e),r&512&&n!==null&&On(n,n.return);break;case 5:if(Ye(t,e),tt(e),r&512&&n!==null&&On(n,n.return),e.flags&32){var i=e.stateNode;try{Pr(i,"")}catch(v){te(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&rf(i,a),Ro(s,o);var u=Ro(s,a);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?uf(i,f):c==="dangerouslySetInnerHTML"?lf(i,f):c==="children"?Pr(i,f):Bl(i,c,f,u)}switch(s){case"input":Mo(i,a);break;case"textarea":af(i,a);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?An(i,!!a.multiple,g,!1):d!==!!a.multiple&&(a.defaultValue!=null?An(i,!!a.multiple,a.defaultValue,!0):An(i,!!a.multiple,a.multiple?[]:"",!1))}i[$r]=a}catch(v){te(e,e.return,v)}}break;case 6:if(Ye(t,e),tt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){te(e,e.return,v)}}break;case 3:if(Ye(t,e),tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zr(t.containerInfo)}catch(v){te(e,e.return,v)}break;case 4:Ye(t,e),tt(e);break;case 13:Ye(t,e),tt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Ss=re())),r&4&&Wu(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||c,Ye(t,e),ye=u):Ye(t,e),tt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(I=e,c=e.child;c!==null;){for(f=I=c;I!==null;){switch(d=I,g=d.child,d.tag){case 0:case 11:case 14:case 15:xr(4,d,d.return);break;case 1:On(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){te(r,n,v)}}break;case 5:On(d,d.return);break;case 22:if(d.memoizedState!==null){Yu(f);continue}}g!==null?(g.return=d,I=g):Yu(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=sf("display",o))}catch(v){te(e,e.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){te(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ye(t,e),tt(e),r&4&&Wu(e);break;case 21:break;default:Ye(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Id(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pr(i,""),r.flags&=-33);var a=Uu(e);ml(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Uu(e);pl(e,s,o);break;default:throw Error(_(161))}}catch(l){te(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function iv(e,t,n){I=e,jd(e)}function jd(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xi;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||ye;s=xi;var u=ye;if(xi=o,(ye=l)&&!u)for(I=i;I!==null;)o=I,l=o.child,o.tag===22&&o.memoizedState!==null?Xu(i):l!==null?(l.return=o,I=l):Xu(i);for(;a!==null;)I=a,jd(a),a=a.sibling;I=i,xi=s,ye=u}Gu(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,I=a):Gu(e)}}function Gu(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||za(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Ou(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ou(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&zr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ye||t.flags&512&&dl(t)}catch(d){te(t,t.return,d)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Yu(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Xu(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{za(4,t)}catch(l){te(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){te(t,i,l)}}var a=t.return;try{dl(t)}catch(l){te(t,a,l)}break;case 5:var o=t.return;try{dl(t)}catch(l){te(t,o,l)}}}catch(l){te(t,t.return,l)}if(t===e){I=null;break}var s=t.sibling;if(s!==null){s.return=t.return,I=s;break}I=t.return}}var av=Math.ceil,pa=kt.ReactCurrentDispatcher,ws=kt.ReactCurrentOwner,Ue=kt.ReactCurrentBatchConfig,B=0,ce=null,ae=null,pe=0,Le=0,zn=Xt(0),le=0,Br=null,fn=0,La=0,xs=0,Sr=null,Te=null,Ss=0,Xn=1/0,ct=null,ma=!1,hl=null,Dt=null,Si=!1,zt=null,ha=0,kr=0,vl=null,Hi=-1,Ui=0;function Se(){return B&6?re():Hi!==-1?Hi:Hi=re()}function Ft(e){return e.mode&1?B&2&&pe!==0?pe&-pe:Bh.transition!==null?(Ui===0&&(Ui=Sf()),Ui):(e=H,e!==0||(e=window.event,e=e===void 0?16:_f(e.type)),e):1}function Je(e,t,n,r){if(50<kr)throw kr=0,vl=null,Error(_(185));Kr(e,n,r),(!(B&2)||e!==ce)&&(e===ce&&(!(B&2)&&(La|=n),le===4&&Nt(e,pe)),Oe(e,r),n===1&&B===0&&!(t.mode&1)&&(Xn=re()+500,_a&&Qt()))}function Oe(e,t){var n=e.callbackNode;Bm(e,t);var r=Zi(e,e===ce?pe:0);if(r===0)n!==null&&ru(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ru(n),t===1)e.tag===0?Vh(Qu.bind(null,e)):Yf(Qu.bind(null,e)),jh(function(){!(B&6)&&Qt()}),n=null;else{switch(kf(r)){case 1:n=Yl;break;case 4:n=wf;break;case 16:n=qi;break;case 536870912:n=xf;break;default:n=qi}n=Wd(n,Rd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rd(e,t){if(Hi=-1,Ui=0,B&6)throw Error(_(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=Zi(e,e===ce?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=va(e,r);else{t=r;var i=B;B|=2;var a=Fd();(ce!==e||pe!==t)&&(ct=null,Xn=re()+500,on(e,t));do try{sv();break}catch(s){Dd(e,s)}while(!0);os(),pa.current=a,B=i,ae!==null?t=0:(ce=null,pe=0,t=le)}if(t!==0){if(t===2&&(i=Ho(e),i!==0&&(r=i,t=gl(e,i))),t===1)throw n=Br,on(e,0),Nt(e,r),Oe(e,re()),n;if(t===6)Nt(e,r);else{if(i=e.current.alternate,!(r&30)&&!ov(i)&&(t=va(e,r),t===2&&(a=Ho(e),a!==0&&(r=a,t=gl(e,a))),t===1))throw n=Br,on(e,0),Nt(e,r),Oe(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Jt(e,Te,ct);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=Ss+500-re(),10<t)){if(Zi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=qo(Jt.bind(null,e,Te,ct),t);break}Jt(e,Te,ct);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ze(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*av(r/1960))-r,10<r){e.timeoutHandle=qo(Jt.bind(null,e,Te,ct),r);break}Jt(e,Te,ct);break;case 5:Jt(e,Te,ct);break;default:throw Error(_(329))}}}return Oe(e,re()),e.callbackNode===n?Rd.bind(null,e):null}function gl(e,t){var n=Sr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=va(e,t),e!==2&&(t=Te,Te=n,t!==null&&yl(t)),e}function yl(e){Te===null?Te=e:Te.push.apply(Te,e)}function ov(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!et(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~xs,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ze(t),r=1<<n;e[n]=-1,t&=~r}}function Qu(e){if(B&6)throw Error(_(327));Fn();var t=Zi(e,0);if(!(t&1))return Oe(e,re()),null;var n=va(e,t);if(e.tag!==0&&n===2){var r=Ho(e);r!==0&&(t=r,n=gl(e,r))}if(n===1)throw n=Br,on(e,0),Nt(e,t),Oe(e,re()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,Te,ct),Oe(e,re()),null}function ks(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(Xn=re()+500,_a&&Qt())}}function dn(e){zt!==null&&zt.tag===0&&!(B&6)&&Fn();var t=B;B|=1;var n=Ue.transition,r=H;try{if(Ue.transition=null,H=1,e)return e()}finally{H=r,Ue.transition=n,B=t,!(B&6)&&Qt()}}function bs(){Le=zn.current,X(zn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$h(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(rs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ra();break;case 3:Gn(),X(_e),X(we),ds();break;case 5:fs(r);break;case 4:Gn();break;case 13:X(q);break;case 19:X(q);break;case 10:ls(r.type._context);break;case 22:case 23:bs()}n=n.return}if(ce=e,ae=e=Vt(e.current,null),pe=Le=t,le=0,Br=null,xs=La=fn=0,Te=Sr=null,tn!==null){for(t=0;t<tn.length;t++)if(n=tn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}tn=null}return e}function Dd(e,t){do{var n=ae;try{if(os(),Fi.current=da,fa){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fa=!1}if(cn=0,ue=oe=Z=null,wr=!1,Dr=0,ws.current=null,n===null||n.return===null){le=1,Br=t,ae=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=pe,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=$u(o);if(g!==null){g.flags&=-257,ju(g,o,s,a,t),g.mode&1&&Au(a,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(l),t.updateQueue=v}else y.add(l);break e}else{if(!(t&1)){Au(a,u,t),Cs();break e}l=Error(_(426))}}else if(K&&s.mode&1){var w=$u(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),ju(w,o,s,a,t),is(Yn(l,s));break e}}a=l=Yn(l,s),le!==4&&(le=2),Sr===null?Sr=[a]:Sr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=kd(a,l,t);Nu(a,p);break e;case 1:s=l;var m=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Dt===null||!Dt.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=bd(a,s,t);Nu(a,x);break e}}a=a.return}while(a!==null)}Bd(n)}catch(S){t=S,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function Fd(){var e=pa.current;return pa.current=da,e===null?da:e}function Cs(){(le===0||le===3||le===2)&&(le=4),ce===null||!(fn&268435455)&&!(La&268435455)||Nt(ce,pe)}function va(e,t){var n=B;B|=2;var r=Fd();(ce!==e||pe!==t)&&(ct=null,on(e,t));do try{lv();break}catch(i){Dd(e,i)}while(!0);if(os(),B=n,pa.current=r,ae!==null)throw Error(_(261));return ce=null,pe=0,le}function lv(){for(;ae!==null;)Vd(ae)}function sv(){for(;ae!==null&&!Mm();)Vd(ae)}function Vd(e){var t=Ud(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?Bd(e):ae=t,ws.current=null}function Bd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=tv(n,t),n!==null){n.flags&=32767,ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ae=null;return}}else if(n=ev(n,t,Le),n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);le===0&&(le=5)}function Jt(e,t,n){var r=H,i=Ue.transition;try{Ue.transition=null,H=1,uv(e,t,n,r)}finally{Ue.transition=i,H=r}return null}function uv(e,t,n,r){do Fn();while(zt!==null);if(B&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Hm(e,a),e===ce&&(ae=ce=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Si||(Si=!0,Wd(qi,function(){return Fn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ue.transition,Ue.transition=null;var o=H;H=1;var s=B;B|=4,ws.current=null,rv(e,n),$d(n,e),Nh(Qo),Ji=!!Xo,Qo=Xo=null,e.current=n,iv(n),Im(),B=s,H=o,Ue.transition=a}else e.current=n;if(Si&&(Si=!1,zt=e,ha=i),a=e.pendingLanes,a===0&&(Dt=null),jm(n.stateNode),Oe(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ma)throw ma=!1,e=hl,hl=null,e;return ha&1&&e.tag!==0&&Fn(),a=e.pendingLanes,a&1?e===vl?kr++:(kr=0,vl=e):kr=0,Qt(),null}function Fn(){if(zt!==null){var e=kf(ha),t=Ue.transition,n=H;try{if(Ue.transition=null,H=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,ha=0,B&6)throw Error(_(331));var i=B;for(B|=4,I=e.current;I!==null;){var a=I,o=a.child;if(I.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(I=u;I!==null;){var c=I;switch(c.tag){case 0:case 11:case 15:xr(8,c,a)}var f=c.child;if(f!==null)f.return=c,I=f;else for(;I!==null;){c=I;var d=c.sibling,g=c.return;if(Md(c),c===u){I=null;break}if(d!==null){d.return=g,I=d;break}I=g}}}var y=a.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}I=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,I=o;else e:for(;I!==null;){if(a=I,a.flags&2048)switch(a.tag){case 0:case 11:case 15:xr(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,I=p;break e}I=a.return}}var m=e.current;for(I=m;I!==null;){o=I;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,I=h;else e:for(o=m;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:za(9,s)}}catch(S){te(s,s.return,S)}if(s===o){I=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,I=x;break e}I=s.return}}if(B=i,Qt(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(ba,e)}catch{}r=!0}return r}finally{H=n,Ue.transition=t}}return!1}function Ku(e,t,n){t=Yn(n,t),t=kd(e,t,1),e=Rt(e,t,1),t=Se(),e!==null&&(Kr(e,1,t),Oe(e,t))}function te(e,t,n){if(e.tag===3)Ku(e,e,n);else for(;t!==null;){if(t.tag===3){Ku(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dt===null||!Dt.has(r))){e=Yn(n,e),e=bd(t,e,1),t=Rt(t,e,1),e=Se(),t!==null&&(Kr(t,1,e),Oe(t,e));break}}t=t.return}}function cv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(pe&n)===n&&(le===4||le===3&&(pe&130023424)===pe&&500>re()-Ss?on(e,0):xs|=n),Oe(e,t)}function Hd(e,t){t===0&&(e.mode&1?(t=fi,fi<<=1,!(fi&130023424)&&(fi=4194304)):t=1);var n=Se();e=gt(e,t),e!==null&&(Kr(e,t,n),Oe(e,n))}function fv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hd(e,n)}function dv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Hd(e,n)}var Ud;Ud=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,Jh(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,K&&t.flags&1048576&&Xf(t,oa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bi(e,t),e=t.pendingProps;var i=Hn(t,we.current);Dn(t,n),i=ms(null,t,r,e,i,n);var a=hs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(a=!0,ia(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,us(t),i.updater=Oa,t.stateNode=i,i._reactInternals=t,il(t,r,e,n),t=ll(null,t,r,!0,a,n)):(t.tag=0,K&&a&&ns(t),xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=mv(r),e=Xe(r,e),i){case 0:t=ol(null,t,r,e,n);break e;case 1:t=Fu(null,t,r,e,n);break e;case 11:t=Ru(null,t,r,e,n);break e;case 14:t=Du(null,t,r,Xe(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),ol(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Fu(e,t,r,i,n);case 3:e:{if(Pd(t),e===null)throw Error(_(387));r=t.pendingProps,a=t.memoizedState,i=a.element,ed(e,t),ua(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Yn(Error(_(423)),t),t=Vu(e,t,r,n,i);break e}else if(r!==i){i=Yn(Error(_(424)),t),t=Vu(e,t,r,n,i);break e}else for(Ae=jt(t.stateNode.containerInfo.firstChild),$e=t,K=!0,Ke=null,n=Zf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),r===i){t=yt(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return td(t),e===null&&tl(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Ko(r,i)?o=null:a!==null&&Ko(r,a)&&(t.flags|=32),Td(e,t),xe(e,t,o,n),t.child;case 6:return e===null&&tl(t),null;case 13:return _d(e,t,n);case 4:return cs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wn(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Ru(e,t,r,i,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,U(la,r._currentValue),r._currentValue=o,a!==null)if(et(a.value,o)){if(a.children===i.children&&!_e.current){t=yt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=mt(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),nl(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(_(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),nl(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Dn(t,n),i=We(i),r=r(i),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,i=Xe(r,t.pendingProps),i=Xe(r.type,i),Du(e,t,r,i,n);case 15:return Cd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Xe(r,i),Bi(e,t),t.tag=1,Ne(r)?(e=!0,ia(t)):e=!1,Dn(t,n),Sd(t,r,i),il(t,r,i,n),ll(null,t,r,!0,e,n);case 19:return Nd(e,t,n);case 22:return Ed(e,t,n)}throw Error(_(156,t.tag))};function Wd(e,t){return yf(e,t)}function pv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new pv(e,t,n,r)}function Es(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mv(e){if(typeof e=="function")return Es(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ul)return 11;if(e===Wl)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wi(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")Es(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Sn:return ln(n.children,i,a,t);case Hl:o=8,i|=8;break;case _o:return e=He(12,n,t,i|2),e.elementType=_o,e.lanes=a,e;case No:return e=He(13,n,t,i),e.elementType=No,e.lanes=a,e;case Oo:return e=He(19,n,t,i),e.elementType=Oo,e.lanes=a,e;case ef:return Ma(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zc:o=10;break e;case Jc:o=9;break e;case Ul:o=11;break e;case Wl:o=14;break e;case Tt:o=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=He(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function ln(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function Ma(e,t,n,r){return e=He(22,e,r,t),e.elementType=ef,e.lanes=n,e.stateNode={isHidden:!1},e}function mo(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function ho(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xa(0),this.expirationTimes=Xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ts(e,t,n,r,i,a,o,s,l){return e=new hv(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=He(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},us(a),e}function vv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Gd(e){if(!e)return Ht;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Gf(e,n,t)}return t}function Yd(e,t,n,r,i,a,o,s,l){return e=Ts(n,r,!0,e,i,a,o,s,l),e.context=Gd(null),n=e.current,r=Se(),i=Ft(n),a=mt(r,i),a.callback=t??null,Rt(n,a,i),e.current.lanes=i,Kr(e,i,r),Oe(e,r),e}function Ia(e,t,n,r){var i=t.current,a=Se(),o=Ft(i);return n=Gd(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rt(i,t,o),e!==null&&(Je(e,i,o,a),Di(e,i,o)),o}function ga(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ps(e,t){qu(e,t),(e=e.alternate)&&qu(e,t)}function gv(){return null}var Xd=typeof reportError=="function"?reportError:function(e){console.error(e)};function _s(e){this._internalRoot=e}Aa.prototype.render=_s.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Ia(e,t,null,null)};Aa.prototype.unmount=_s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){Ia(null,e,null,null)}),t[vt]=null}};function Aa(e){this._internalRoot=e}Aa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ef();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&Pf(e)}};function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zu(){}function yv(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=ga(o);a.call(u)}}var o=Yd(t,r,e,0,null,!1,!1,"",Zu);return e._reactRootContainer=o,e[vt]=o.current,Ir(e.nodeType===8?e.parentNode:e),dn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=ga(l);s.call(u)}}var l=Ts(e,0,!1,null,null,!1,!1,"",Zu);return e._reactRootContainer=l,e[vt]=l.current,Ir(e.nodeType===8?e.parentNode:e),dn(function(){Ia(t,l,n,r)}),l}function ja(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=ga(o);s.call(l)}}Ia(t,o,e,i)}else o=yv(n,t,e,i,r);return ga(o)}bf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(Xl(t,n|1),Oe(t,re()),!(B&6)&&(Xn=re()+500,Qt()))}break;case 13:dn(function(){var r=gt(e,1);if(r!==null){var i=Se();Je(r,e,1,i)}}),Ps(e,1)}};Ql=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var n=Se();Je(t,e,134217728,n)}Ps(e,134217728)}};Cf=function(e){if(e.tag===13){var t=Ft(e),n=gt(e,t);if(n!==null){var r=Se();Je(n,e,t,r)}Ps(e,t)}};Ef=function(){return H};Tf=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Fo=function(e,t,n){switch(t){case"input":if(Mo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Pa(r);if(!i)throw Error(_(90));nf(r),Mo(r,i)}}}break;case"textarea":af(e,n);break;case"select":t=n.value,t!=null&&An(e,!!n.multiple,t,!1)}};df=ks;pf=dn;var wv={usingClientEntryPoint:!1,Events:[Zr,En,Pa,cf,ff,ks]},sr={findFiberByHostInstance:en,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xv={bundleType:sr.bundleType,version:sr.version,rendererPackageName:sr.rendererPackageName,rendererConfig:sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vf(e),e===null?null:e.stateNode},findFiberByHostInstance:sr.findFiberByHostInstance||gv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{ba=ki.inject(xv),ot=ki}catch{}}Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv;Re.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ns(t))throw Error(_(200));return vv(e,t,null,n)};Re.createRoot=function(e,t){if(!Ns(e))throw Error(_(299));var n=!1,r="",i=Xd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ts(e,1,!1,null,null,n,!1,r,i),e[vt]=t.current,Ir(e.nodeType===8?e.parentNode:e),new _s(t)};Re.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=vf(t),e=e===null?null:e.stateNode,e};Re.flushSync=function(e){return dn(e)};Re.hydrate=function(e,t,n){if(!$a(t))throw Error(_(200));return ja(null,e,t,!0,n)};Re.hydrateRoot=function(e,t,n){if(!Ns(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Xd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Yd(t,null,e,1,n??null,i,!1,a,o),e[vt]=t.current,Ir(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Aa(t)};Re.render=function(e,t,n){if(!$a(t))throw Error(_(200));return ja(null,e,t,!1,n)};Re.unmountComponentAtNode=function(e){if(!$a(e))throw Error(_(40));return e._reactRootContainer?(dn(function(){ja(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1};Re.unstable_batchedUpdates=ks;Re.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$a(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return ja(e,t,n,!1,r)};Re.version="18.3.1-next-f1338f8080-20240426";function Qd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qd)}catch(e){console.error(e)}}Qd(),Xc.exports=Re;var Sv=Xc.exports,Ju=Sv;To.createRoot=Ju.createRoot,To.hydrateRoot=Ju.hydrateRoot;var Kd={prefix:"fas",iconName:"circle-chevron-right",icon:[512,512,["chevron-circle-right"],"f138","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"]},kv={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]},qd=kv,bv={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Cv={prefix:"fas",iconName:"volume-xmark",icon:[576,512,["volume-mute","volume-times"],"f6a9","M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},Zd=Cv,Ev={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Jd=Ev,ep={prefix:"fas",iconName:"circle-chevron-left",icon:[512,512,["chevron-circle-left"],"f137","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"]};function ec(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ec(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ec(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ya(e){"@babel/helpers - typeof";return ya=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ya(e)}function Tv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _v(e,t,n){return t&&Pv(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Os(e,t){return Ov(e)||Lv(e,t)||tp(e,t)||Iv()}function ei(e){return Nv(e)||zv(e)||tp(e)||Mv()}function Nv(e){if(Array.isArray(e))return wl(e)}function Ov(e){if(Array.isArray(e))return e}function zv(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Lv(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function tp(e,t){if(e){if(typeof e=="string")return wl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wl(e,t)}}function wl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Mv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Iv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var tc=function(){},zs={},np={},rp=null,ip={mark:tc,measure:tc};try{typeof window<"u"&&(zs=window),typeof document<"u"&&(np=document),typeof MutationObserver<"u"&&(rp=MutationObserver),typeof performance<"u"&&(ip=performance)}catch{}var Av=zs.navigator||{},nc=Av.userAgent,rc=nc===void 0?"":nc,Ut=zs,Q=np,ic=rp,bi=ip;Ut.document;var bt=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",ap=~rc.indexOf("MSIE")||~rc.indexOf("Trident/"),Ci,Ei,Ti,Pi,_i,wt="___FONT_AWESOME___",xl=16,op="fa",lp="svg-inline--fa",pn="data-fa-i2svg",Sl="data-fa-pseudo-element",$v="data-fa-pseudo-element-pending",Ls="data-prefix",Ms="data-icon",ac="fontawesome-i2svg",jv="async",Rv=["HTML","HEAD","STYLE","SCRIPT"],sp=function(){try{return!0}catch{return!1}}(),Y="classic",ne="sharp",Is=[Y,ne];function ti(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Y]}})}var Hr=ti((Ci={},se(Ci,Y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),se(Ci,ne,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Ci)),Ur=ti((Ei={},se(Ei,Y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),se(Ei,ne,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ei)),Wr=ti((Ti={},se(Ti,Y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),se(Ti,ne,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Ti)),Dv=ti((Pi={},se(Pi,Y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),se(Pi,ne,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Pi)),Fv=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,up="fa-layers-text",Vv=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Bv=ti((_i={},se(_i,Y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),se(_i,ne,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),_i)),cp=[1,2,3,4,5,6,7,8,9,10],Hv=cp.concat([11,12,13,14,15,16,17,18,19,20]),Uv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],rn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gr=new Set;Object.keys(Ur[Y]).map(Gr.add.bind(Gr));Object.keys(Ur[ne]).map(Gr.add.bind(Gr));var Wv=[].concat(Is,ei(Gr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rn.GROUP,rn.SWAP_OPACITY,rn.PRIMARY,rn.SECONDARY]).concat(cp.map(function(e){return"".concat(e,"x")})).concat(Hv.map(function(e){return"w-".concat(e)})),br=Ut.FontAwesomeConfig||{};function Gv(e){var t=Q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Yv(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var Xv=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Xv.forEach(function(e){var t=Os(e,2),n=t[0],r=t[1],i=Yv(Gv(n));i!=null&&(br[r]=i)})}var fp={styleDefault:"solid",familyDefault:"classic",cssPrefix:op,replacementClass:lp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};br.familyPrefix&&(br.cssPrefix=br.familyPrefix);var Qn=M(M({},fp),br);Qn.autoReplaceSvg||(Qn.observeMutations=!1);var A={};Object.keys(fp).forEach(function(e){Object.defineProperty(A,e,{enumerable:!0,set:function(n){Qn[e]=n,Cr.forEach(function(r){return r(A)})},get:function(){return Qn[e]}})});Object.defineProperty(A,"familyPrefix",{enumerable:!0,set:function(t){Qn.cssPrefix=t,Cr.forEach(function(n){return n(A)})},get:function(){return Qn.cssPrefix}});Ut.FontAwesomeConfig=A;var Cr=[];function Qv(e){return Cr.push(e),function(){Cr.splice(Cr.indexOf(e),1)}}var Et=xl,at={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Kv(e){if(!(!e||!bt)){var t=Q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Q.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return Q.head.insertBefore(t,r),e}}var qv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yr(){for(var e=12,t="";e-- >0;)t+=qv[Math.random()*62|0];return t}function er(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function As(e){return e.classList?er(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function dp(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zv(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(dp(e[n]),'" ')},"").trim()}function Ra(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function $s(e){return e.size!==at.size||e.x!==at.x||e.y!==at.y||e.rotate!==at.rotate||e.flipX||e.flipY}function Jv(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function eg(e){var t=e.transform,n=e.width,r=n===void 0?xl:n,i=e.height,a=i===void 0?xl:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ap?l+="translate(".concat(t.x/Et-r/2,"em, ").concat(t.y/Et-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Et,"em), calc(-50% + ").concat(t.y/Et,"em)) "):l+="translate(".concat(t.x/Et,"em, ").concat(t.y/Et,"em) "),l+="scale(".concat(t.size/Et*(t.flipX?-1:1),", ").concat(t.size/Et*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var tg=`:root, :host {
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
}`;function pp(){var e=op,t=lp,n=A.cssPrefix,r=A.replacementClass,i=tg;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var oc=!1;function vo(){A.autoAddCss&&!oc&&(Kv(pp()),oc=!0)}var ng={mixout:function(){return{dom:{css:pp,insertCss:vo}}},hooks:function(){return{beforeDOMElementCreation:function(){vo()},beforeI2svg:function(){vo()}}}},xt=Ut||{};xt[wt]||(xt[wt]={});xt[wt].styles||(xt[wt].styles={});xt[wt].hooks||(xt[wt].hooks={});xt[wt].shims||(xt[wt].shims=[]);var qe=xt[wt],mp=[],rg=function e(){Q.removeEventListener("DOMContentLoaded",e),wa=1,mp.map(function(t){return t()})},wa=!1;bt&&(wa=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),wa||Q.addEventListener("DOMContentLoaded",rg));function ig(e){bt&&(wa?setTimeout(e,0):mp.push(e))}function ni(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?dp(e):"<".concat(t," ").concat(Zv(r),">").concat(a.map(ni).join(""),"</").concat(t,">")}function lc(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var go=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=n,l,u,c;for(r===void 0?(l=1,c=t[a[0]]):(l=0,c=r);l<o;l++)u=a[l],c=s(c,t[u],u,t);return c};function ag(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function kl(e){var t=ag(e);return t.length===1?t[0].toString(16):null}function og(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function sc(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function bl(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=sc(t);typeof qe.hooks.addPack=="function"&&!i?qe.hooks.addPack(e,sc(t)):qe.styles[e]=M(M({},qe.styles[e]||{}),a),e==="fas"&&bl("fa",t)}var Ni,Oi,zi,Ln=qe.styles,lg=qe.shims,sg=(Ni={},se(Ni,Y,Object.values(Wr[Y])),se(Ni,ne,Object.values(Wr[ne])),Ni),js=null,hp={},vp={},gp={},yp={},wp={},ug=(Oi={},se(Oi,Y,Object.keys(Hr[Y])),se(Oi,ne,Object.keys(Hr[ne])),Oi);function cg(e){return~Wv.indexOf(e)}function fg(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!cg(i)?i:null}var xp=function(){var t=function(a){return go(Ln,function(o,s,l){return o[l]=go(s,a,{}),o},{})};hp=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),vp=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),wp=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in Ln||A.autoFetchSvg,r=go(lg,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});gp=r.names,yp=r.unicodes,js=Da(A.styleDefault,{family:A.familyDefault})};Qv(function(e){js=Da(e.styleDefault,{family:A.familyDefault})});xp();function Rs(e,t){return(hp[e]||{})[t]}function dg(e,t){return(vp[e]||{})[t]}function an(e,t){return(wp[e]||{})[t]}function Sp(e){return gp[e]||{prefix:null,iconName:null}}function pg(e){var t=yp[e],n=Rs("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Wt(){return js}var Ds=function(){return{prefix:null,iconName:null,rest:[]}};function Da(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Y:n,i=Hr[r][e],a=Ur[r][e]||Ur[r][i],o=e in qe.styles?e:null;return a||o||null}var uc=(zi={},se(zi,Y,Object.keys(Wr[Y])),se(zi,ne,Object.keys(Wr[ne])),zi);function Fa(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},se(t,Y,"".concat(A.cssPrefix,"-").concat(Y)),se(t,ne,"".concat(A.cssPrefix,"-").concat(ne)),t),o=null,s=Y;(e.includes(a[Y])||e.some(function(u){return uc[Y].includes(u)}))&&(s=Y),(e.includes(a[ne])||e.some(function(u){return uc[ne].includes(u)}))&&(s=ne);var l=e.reduce(function(u,c){var f=fg(A.cssPrefix,c);if(Ln[c]?(c=sg[s].includes(c)?Dv[s][c]:c,o=c,u.prefix=c):ug[s].indexOf(c)>-1?(o=c,u.prefix=Da(c,{family:s})):f?u.iconName=f:c!==A.replacementClass&&c!==a[Y]&&c!==a[ne]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=o==="fa"?Sp(u.iconName):{},g=an(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||g||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Ln.far&&Ln.fas&&!A.autoFetchSvg&&(u.prefix="fas")}return u},Ds());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ne&&(Ln.fass||A.autoFetchSvg)&&(l.prefix="fass",l.iconName=an(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Wt()||"fas"),l}var mg=function(){function e(){Tv(this,e),this.definitions={}}return _v(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=M(M({},n.definitions[s]||{}),o[s]),bl(s,o[s]);var l=Wr[Y][s];l&&bl(l,o[s]),xp()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),cc=[],Mn={},Vn={},hg=Object.keys(Vn);function vg(e,t){var n=t.mixoutsTo;return cc=e,Mn={},Object.keys(Vn).forEach(function(r){hg.indexOf(r)===-1&&delete Vn[r]}),cc.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),ya(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Mn[o]||(Mn[o]=[]),Mn[o].push(a[o])})}r.provides&&r.provides(Vn)}),n}function Cl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Mn[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function mn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Mn[e]||[];i.forEach(function(a){a.apply(null,n)})}function St(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Vn[e]?Vn[e].apply(null,t):void 0}function El(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Wt();if(t)return t=an(n,t)||t,lc(kp.definitions,n,t)||lc(qe.styles,n,t)}var kp=new mg,gg=function(){A.autoReplaceSvg=!1,A.observeMutations=!1,mn("noAuto")},yg={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return bt?(mn("beforeI2svg",t),St("pseudoElements2svg",t),St("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;A.autoReplaceSvg===!1&&(A.autoReplaceSvg=!0),A.observeMutations=!0,ig(function(){xg({autoReplaceSvgRoot:n}),mn("watch",t)})}},wg={icon:function(t){if(t===null)return null;if(ya(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:an(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Da(t[0]);return{prefix:r,iconName:an(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(A.cssPrefix,"-"))>-1||t.match(Fv))){var i=Fa(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Wt(),iconName:an(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Wt();return{prefix:a,iconName:an(a,t)||t}}}},Fe={noAuto:gg,config:A,dom:yg,parse:wg,library:kp,findIconDefinition:El,toHtml:ni},xg=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(qe.styles).length>0||A.autoFetchSvg)&&bt&&A.autoReplaceSvg&&Fe.dom.i2svg({node:r})};function Va(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ni(r)})}}),Object.defineProperty(e,"node",{get:function(){if(bt){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Sg(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if($s(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};i.style=Ra(M(M({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function kg(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(A.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:o}),children:r}]}]}function Fs(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,d=e.watchable,g=d===void 0?!1:d,y=r.found?r:n,v=y.width,w=y.height,p=i==="fak",m=[A.replacementClass,a?"".concat(A.cssPrefix,"-").concat(a):""].filter(function(R){return f.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(f.classes).join(" "),h={children:[],attributes:M(M({},f.attributes),{},{"data-prefix":i,"data-icon":a,class:m,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(w)})},x=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(v/w*16*.0625,"em")}:{};g&&(h.attributes[pn]=""),l&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||Yr())},children:[l]}),delete h.attributes.title);var S=M(M({},h),{},{prefix:i,iconName:a,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:M(M({},x),f.styles)}),C=r.found&&n.found?St("generateAbstractMask",S)||{children:[],attributes:{}}:St("generateAbstractIcon",S)||{children:[],attributes:{}},N=C.children,b=C.attributes;return S.children=N,S.attributes=b,s?kg(S):Sg(S)}function fc(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=M(M(M({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[pn]="");var c=M({},o.styles);$s(i)&&(c.transform=eg({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Ra(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[t]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function bg(e){var t=e.content,n=e.title,r=e.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Ra(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var yo=qe.styles;function Tl(e){var t=e[0],n=e[1],r=e.slice(4),i=Os(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(A.cssPrefix,"-").concat(rn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(rn.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(A.cssPrefix,"-").concat(rn.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var Cg={found:!1,width:512,height:512};function Eg(e,t){!sp&&!A.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Pl(e,t){var n=t;return t==="fa"&&A.styleDefault!==null&&(t=Wt()),new Promise(function(r,i){if(St("missingIconAbstract"),n==="fa"){var a=Sp(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&yo[t]&&yo[t][e]){var o=yo[t][e];return r(Tl(o))}Eg(e,t),r(M(M({},Cg),{},{icon:A.showMissingIcons&&e?St("missingIconAbstract")||{}:{}}))})}var dc=function(){},_l=A.measurePerformance&&bi&&bi.mark&&bi.measure?bi:{mark:dc,measure:dc},pr='FA "6.5.2"',Tg=function(t){return _l.mark("".concat(pr," ").concat(t," begins")),function(){return bp(t)}},bp=function(t){_l.mark("".concat(pr," ").concat(t," ends")),_l.measure("".concat(pr," ").concat(t),"".concat(pr," ").concat(t," begins"),"".concat(pr," ").concat(t," ends"))},Vs={begin:Tg,end:bp},Gi=function(){};function pc(e){var t=e.getAttribute?e.getAttribute(pn):null;return typeof t=="string"}function Pg(e){var t=e.getAttribute?e.getAttribute(Ls):null,n=e.getAttribute?e.getAttribute(Ms):null;return t&&n}function _g(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(A.replacementClass)}function Ng(){if(A.autoReplaceSvg===!0)return Yi.replace;var e=Yi[A.autoReplaceSvg];return e||Yi.replace}function Og(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function zg(e){return Q.createElement(e)}function Cp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Og:zg:n;if(typeof e=="string")return Q.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Cp(o,{ceFn:r}))}),i}function Lg(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Yi={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Cp(i),n)}),n.getAttribute(pn)===null&&A.keepOriginalSource){var r=Q.createComment(Lg(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~As(n).indexOf(A.replacementClass))return Yi.replace(t);var i=new RegExp("".concat(A.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===A.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return ni(s)}).join(`
`);n.setAttribute(pn,""),n.innerHTML=o}};function mc(e){e()}function Ep(e,t){var n=typeof t=="function"?t:Gi;if(e.length===0)n();else{var r=mc;A.mutateApproach===jv&&(r=Ut.requestAnimationFrame||mc),r(function(){var i=Ng(),a=Vs.begin("mutate");e.map(i),a(),n()})}}var Bs=!1;function Tp(){Bs=!0}function Nl(){Bs=!1}var xa=null;function hc(e){if(ic&&A.observeMutations){var t=e.treeCallback,n=t===void 0?Gi:t,r=e.nodeCallback,i=r===void 0?Gi:r,a=e.pseudoElementsCallback,o=a===void 0?Gi:a,s=e.observeMutationsRoot,l=s===void 0?Q:s;xa=new ic(function(u){if(!Bs){var c=Wt();er(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!pc(f.addedNodes[0])&&(A.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&A.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&pc(f.target)&&~Uv.indexOf(f.attributeName))if(f.attributeName==="class"&&Pg(f.target)){var d=Fa(As(f.target)),g=d.prefix,y=d.iconName;f.target.setAttribute(Ls,g||c),y&&f.target.setAttribute(Ms,y)}else _g(f.target)&&i(f.target)})}}),bt&&xa.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Mg(){xa&&xa.disconnect()}function Ig(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ag(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Fa(As(e));return i.prefix||(i.prefix=Wt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=dg(i.prefix,e.innerText)||Rs(i.prefix,kl(e.innerText))),!i.iconName&&A.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function $g(e){var t=er(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return A.autoA11y&&(n?t["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(r||Yr()):(t["aria-hidden"]="true",t.focusable="false")),t}function jg(){return{iconName:null,title:null,titleId:null,prefix:null,transform:at,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function vc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ag(e),r=n.iconName,i=n.prefix,a=n.rest,o=$g(e),s=Cl("parseNodeAttributes",{},e),l=t.styleParser?Ig(e):[];return M({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:at,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var Rg=qe.styles;function Pp(e){var t=A.autoReplaceSvg==="nest"?vc(e,{styleParser:!1}):vc(e);return~t.extra.classes.indexOf(up)?St("generateLayersText",e,t):St("generateSvgReplacementMutation",e,t)}var Gt=new Set;Is.map(function(e){Gt.add("fa-".concat(e))});Object.keys(Hr[Y]).map(Gt.add.bind(Gt));Object.keys(Hr[ne]).map(Gt.add.bind(Gt));Gt=ei(Gt);function gc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!bt)return Promise.resolve();var n=Q.documentElement.classList,r=function(f){return n.add("".concat(ac,"-").concat(f))},i=function(f){return n.remove("".concat(ac,"-").concat(f))},a=A.autoFetchSvg?Gt:Is.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Rg));a.includes("fa")||a.push("fa");var o=[".".concat(up,":not([").concat(pn,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(pn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=er(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Vs.begin("onTree"),u=s.reduce(function(c,f){try{var d=Pp(f);d&&c.push(d)}catch(g){sp||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){Ep(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),f(d)})})}function Dg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Pp(e).then(function(n){n&&Ep([n],t)})}function Fg(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:El(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:El(i||{})),e(r,M(M({},n),{},{mask:i}))}}var Vg=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?at:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,g=n.titleId,y=g===void 0?null:g,v=n.classes,w=v===void 0?[]:v,p=n.attributes,m=p===void 0?{}:p,h=n.styles,x=h===void 0?{}:h;if(t){var S=t.prefix,C=t.iconName,N=t.icon;return Va(M({type:"icon"},t),function(){return mn("beforeDOMElementCreation",{iconDefinition:t,params:n}),A.autoA11y&&(d?m["aria-labelledby"]="".concat(A.replacementClass,"-title-").concat(y||Yr()):(m["aria-hidden"]="true",m.focusable="false")),Fs({icons:{main:Tl(N),mask:l?Tl(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:C,transform:M(M({},at),i),symbol:o,title:d,maskId:c,titleId:y,extra:{attributes:m,styles:x,classes:w}})})}},Bg={mixout:function(){return{icon:Fg(Vg)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=gc,n.nodeCallback=Dg,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Q:r,a=n.callback,o=a===void 0?function(){}:a;return gc(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(g,y){Promise.all([Pl(i,s),c.iconName?Pl(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var w=Os(v,2),p=w[0],m=w[1];g([n,Fs({icons:{main:p,mask:m},prefix:s,iconName:i,transform:l,symbol:u,maskId:f,title:a,titleId:o,extra:d,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Ra(s);l.length>0&&(i.style=l);var u;return $s(o)&&(u=St("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(u||a.icon),{children:r,attributes:i}}}},Hg={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Va({type:"layer"},function(){mn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(A.cssPrefix,"-layers")].concat(ei(a)).join(" ")},children:o}]})}}}},Ug={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Va({type:"counter",content:n},function(){return mn("beforeDOMElementCreation",{content:n,params:r}),bg({content:n.toString(),title:a,extra:{attributes:u,styles:f,classes:["".concat(A.cssPrefix,"-layers-counter")].concat(ei(s))}})})}}}},Wg={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?at:i,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,g=d===void 0?{}:d;return Va({type:"text",content:n},function(){return mn("beforeDOMElementCreation",{content:n,params:r}),fc({content:n,transform:M(M({},at),a),title:s,extra:{attributes:f,styles:g,classes:["".concat(A.cssPrefix,"-layers-text")].concat(ei(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(ap){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return A.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,fc({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},Gg=new RegExp('"',"ug"),yc=[1105920,1112319];function Yg(e){var t=e.replace(Gg,""),n=og(t,0),r=n>=yc[0]&&n<=yc[1],i=t.length===2?t[0]===t[1]:!1;return{value:kl(i?t[0]:t),isSecondary:r||i}}function wc(e,t){var n="".concat($v).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=er(e.children),o=a.filter(function(N){return N.getAttribute(Sl)===t})[0],s=Ut.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Vv),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?ne:Y,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ur[d][l[2].toLowerCase()]:Bv[d][u],y=Yg(f),v=y.value,w=y.isSecondary,p=l[0].startsWith("FontAwesome"),m=Rs(g,v),h=m;if(p){var x=pg(v);x.iconName&&x.prefix&&(m=x.iconName,g=x.prefix)}if(m&&!w&&(!o||o.getAttribute(Ls)!==g||o.getAttribute(Ms)!==h)){e.setAttribute(n,h),o&&e.removeChild(o);var S=jg(),C=S.extra;C.attributes[Sl]=t,Pl(m,g).then(function(N){var b=Fs(M(M({},S),{},{icons:{main:N,mask:Ds()},prefix:g,iconName:h,extra:C,watchable:!0})),R=Q.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(R,e.firstChild):e.appendChild(R),R.outerHTML=b.map(function(T){return ni(T)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Xg(e){return Promise.all([wc(e,"::before"),wc(e,"::after")])}function Qg(e){return e.parentNode!==document.head&&!~Rv.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Sl)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function xc(e){if(bt)return new Promise(function(t,n){var r=er(e.querySelectorAll("*")).filter(Qg).map(Xg),i=Vs.begin("searchPseudoElements");Tp(),Promise.all(r).then(function(){i(),Nl(),t()}).catch(function(){i(),Nl(),n()})})}var Kg={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=xc,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Q:r;A.searchPseudoElements&&xc(i)}}},Sc=!1,qg={mixout:function(){return{dom:{unwatch:function(){Tp(),Sc=!0}}}},hooks:function(){return{bootstrap:function(){hc(Cl("mutationObserverCallbacks",{}))},noAuto:function(){Mg()},watch:function(n){var r=n.observeMutationsRoot;Sc?Nl():hc(Cl("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},kc=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Zg={mixout:function(){return{parse:{transform:function(n){return kc(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=kc(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:f,path:d};return{tag:"g",attributes:M({},g.outer),children:[{tag:"g",attributes:M({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),g.path)}]}]}}}},wo={x:0,y:0,width:"100%",height:"100%"};function bc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Jg(e){return e.tag==="g"?e.children:[e]}var e0={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Fa(i.split(" ").map(function(o){return o.trim()})):Ds();return a.prefix||(a.prefix=Wt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,f=o.width,d=o.icon,g=Jv({transform:l,containerWidth:f,iconWidth:u}),y={tag:"rect",attributes:M(M({},wo),{},{fill:"white"})},v=c.children?{children:c.children.map(bc)}:{},w={tag:"g",attributes:M({},g.inner),children:[bc(M({tag:c.tag,attributes:M(M({},c.attributes),g.path)},v))]},p={tag:"g",attributes:M({},g.outer),children:[w]},m="mask-".concat(s||Yr()),h="clip-".concat(s||Yr()),x={tag:"mask",attributes:M(M({},wo),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,p]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:Jg(d)},x]};return r.push(S,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(m,")")},wo)}),{children:r,attributes:i}}}},t0={provides:function(t){var n=!1;Ut.matchMedia&&(n=Ut.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=M(M({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:M(M({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},n0={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},r0=[ng,Bg,Hg,Ug,Wg,Kg,qg,Zg,e0,t0,n0];vg(r0,{mixoutsTo:Fe});Fe.noAuto;Fe.config;Fe.library;Fe.dom;var Ol=Fe.parse;Fe.findIconDefinition;Fe.toHtml;var i0=Fe.icon;Fe.layer;Fe.text;Fe.counter;var _p={exports:{}},a0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",o0=a0,l0=o0;function Np(){}function Op(){}Op.resetWarningCache=Np;var s0=function(){function e(r,i,a,o,s,l){if(l!==l0){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Op,resetWarningCache:Np};return n.PropTypes=n,n};_p.exports=s0();var u0=_p.exports;const D=$c(u0);function Cc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cc(Object(n),!0).forEach(function(r){In(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Sa(e){"@babel/helpers - typeof";return Sa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Sa(e)}function In(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function f0(e,t){if(e==null)return{};var n=c0(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function zl(e){return d0(e)||p0(e)||m0(e)||h0()}function d0(e){if(Array.isArray(e))return Ll(e)}function p0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function m0(e,t){if(e){if(typeof e=="string")return Ll(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ll(e,t)}}function Ll(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v0(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,s=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,d=e.fixedWidth,g=e.inverse,y=e.border,v=e.listItem,w=e.flip,p=e.size,m=e.rotation,h=e.pull,x=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":g,"fa-border":y,"fa-li":v,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},In(t,"fa-".concat(p),typeof p<"u"&&p!==null),In(t,"fa-rotate-".concat(m),typeof m<"u"&&m!==null&&m!==0),In(t,"fa-pull-".concat(h),typeof h<"u"&&h!==null),In(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map(function(S){return x[S]?S:null}).filter(function(S){return S})}function g0(e){return e=e-0,e===e}function zp(e){return g0(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var y0=["style"];function w0(e){return e.charAt(0).toUpperCase()+e.slice(1)}function x0(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=zp(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[w0(i)]=a:t[i]=a,t},{})}function Lp(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Lp(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=x0(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[zp(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=f0(n,y0);return i.attrs.style=rt(rt({},i.attrs.style),o),e.apply(void 0,[t.tag,rt(rt({},i.attrs),s)].concat(zl(r)))}var Mp=!1;try{Mp=!0}catch{}function S0(){if(!Mp&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ec(e){if(e&&Sa(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ol.icon)return Ol.icon(e);if(e===null)return null;if(e&&Sa(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function xo(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?In({},e,t):{}}var Tc={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ie=ee.forwardRef(function(e,t){var n=rt(rt({},Tc),e),r=n.icon,i=n.mask,a=n.symbol,o=n.className,s=n.title,l=n.titleId,u=n.maskId,c=Ec(r),f=xo("classes",[].concat(zl(v0(n)),zl((o||"").split(" ")))),d=xo("transform",typeof n.transform=="string"?Ol.transform(n.transform):n.transform),g=xo("mask",Ec(i)),y=i0(c,rt(rt(rt(rt({},f),d),g),{},{symbol:a,title:s,titleId:l,maskId:u}));if(!y)return S0("Could not find icon",c),null;var v=y.abstract,w={ref:t};return Object.keys(n).forEach(function(p){Tc.hasOwnProperty(p)||(w[p]=n[p])}),k0(v[0],w)});Ie.displayName="FontAwesomeIcon";Ie.propTypes={beat:D.bool,border:D.bool,beatFade:D.bool,bounce:D.bool,className:D.string,fade:D.bool,flash:D.bool,mask:D.oneOfType([D.object,D.array,D.string]),maskId:D.string,fixedWidth:D.bool,inverse:D.bool,flip:D.oneOf([!0,!1,"horizontal","vertical","both"]),icon:D.oneOfType([D.object,D.array,D.string]),listItem:D.bool,pull:D.oneOf(["right","left"]),pulse:D.bool,rotation:D.oneOf([0,90,180,270]),shake:D.bool,size:D.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:D.bool,spinPulse:D.bool,spinReverse:D.bool,symbol:D.oneOfType([D.bool,D.string]),title:D.string,titleId:D.string,transform:D.oneOfType([D.string,D.object]),swapOpacity:D.bool};var k0=Lp.bind(null,ee.createElement);function Pc(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Hs(e={},t={}){Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:Pc(t[n])&&Pc(e[n])&&Object.keys(t[n]).length>0&&Hs(e[n],t[n])})}const Ip={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function ze(){const e=typeof document<"u"?document:{};return Hs(e,Ip),e}const b0={document:Ip,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function fe(){const e=typeof window<"u"?window:{};return Hs(e,b0),e}function C0(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get(){return t},set(n){t.__proto__=n}})}class Lt extends Array{constructor(t){typeof t=="number"?super(t):(super(...t||[]),C0(this))}}function ri(e=[]){const t=[];return e.forEach(n=>{Array.isArray(n)?t.push(...ri(n)):t.push(n)}),t}function Ap(e,t){return Array.prototype.filter.call(e,t)}function E0(e){const t=[];for(let n=0;n<e.length;n+=1)t.indexOf(e[n])===-1&&t.push(e[n]);return t}function T0(e,t){if(typeof e!="string")return[e];const n=[],r=t.querySelectorAll(e);for(let i=0;i<r.length;i+=1)n.push(r[i]);return n}function L(e,t){const n=fe(),r=ze();let i=[];if(!t&&e instanceof Lt)return e;if(!e)return new Lt(i);if(typeof e=="string"){const a=e.trim();if(a.indexOf("<")>=0&&a.indexOf(">")>=0){let o="div";a.indexOf("<li")===0&&(o="ul"),a.indexOf("<tr")===0&&(o="tbody"),(a.indexOf("<td")===0||a.indexOf("<th")===0)&&(o="tr"),a.indexOf("<tbody")===0&&(o="table"),a.indexOf("<option")===0&&(o="select");const s=r.createElement(o);s.innerHTML=a;for(let l=0;l<s.childNodes.length;l+=1)i.push(s.childNodes[l])}else i=T0(e.trim(),t||r)}else if(e.nodeType||e===n||e===r)i.push(e);else if(Array.isArray(e)){if(e instanceof Lt)return e;i=e}return new Lt(E0(i))}L.fn=Lt.prototype;function P0(...e){const t=ri(e.map(n=>n.split(" ")));return this.forEach(n=>{n.classList.add(...t)}),this}function _0(...e){const t=ri(e.map(n=>n.split(" ")));return this.forEach(n=>{n.classList.remove(...t)}),this}function N0(...e){const t=ri(e.map(n=>n.split(" ")));this.forEach(n=>{t.forEach(r=>{n.classList.toggle(r)})})}function O0(...e){const t=ri(e.map(n=>n.split(" ")));return Ap(this,n=>t.filter(r=>n.classList.contains(r)).length>0).length>0}function z0(e,t){if(arguments.length===1&&typeof e=="string")return this[0]?this[0].getAttribute(e):void 0;for(let n=0;n<this.length;n+=1)if(arguments.length===2)this[n].setAttribute(e,t);else for(const r in e)this[n][r]=e[r],this[n].setAttribute(r,e[r]);return this}function L0(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this}function M0(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this}function I0(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration=typeof e!="string"?`${e}ms`:e;return this}function A0(...e){let[t,n,r,i]=e;typeof e[1]=="function"&&([t,r,i]=e,n=void 0),i||(i=!1);function a(u){const c=u.target;if(!c)return;const f=u.target.dom7EventData||[];if(f.indexOf(u)<0&&f.unshift(u),L(c).is(n))r.apply(c,f);else{const d=L(c).parents();for(let g=0;g<d.length;g+=1)L(d[g]).is(n)&&r.apply(d[g],f)}}function o(u){const c=u&&u.target?u.target.dom7EventData||[]:[];c.indexOf(u)<0&&c.unshift(u),r.apply(this,c)}const s=t.split(" ");let l;for(let u=0;u<this.length;u+=1){const c=this[u];if(n)for(l=0;l<s.length;l+=1){const f=s[l];c.dom7LiveListeners||(c.dom7LiveListeners={}),c.dom7LiveListeners[f]||(c.dom7LiveListeners[f]=[]),c.dom7LiveListeners[f].push({listener:r,proxyListener:a}),c.addEventListener(f,a,i)}else for(l=0;l<s.length;l+=1){const f=s[l];c.dom7Listeners||(c.dom7Listeners={}),c.dom7Listeners[f]||(c.dom7Listeners[f]=[]),c.dom7Listeners[f].push({listener:r,proxyListener:o}),c.addEventListener(f,o,i)}}return this}function $0(...e){let[t,n,r,i]=e;typeof e[1]=="function"&&([t,r,i]=e,n=void 0),i||(i=!1);const a=t.split(" ");for(let o=0;o<a.length;o+=1){const s=a[o];for(let l=0;l<this.length;l+=1){const u=this[l];let c;if(!n&&u.dom7Listeners?c=u.dom7Listeners[s]:n&&u.dom7LiveListeners&&(c=u.dom7LiveListeners[s]),c&&c.length)for(let f=c.length-1;f>=0;f-=1){const d=c[f];r&&d.listener===r||r&&d.listener&&d.listener.dom7proxy&&d.listener.dom7proxy===r?(u.removeEventListener(s,d.proxyListener,i),c.splice(f,1)):r||(u.removeEventListener(s,d.proxyListener,i),c.splice(f,1))}}}return this}function j0(...e){const t=fe(),n=e[0].split(" "),r=e[1];for(let i=0;i<n.length;i+=1){const a=n[i];for(let o=0;o<this.length;o+=1){const s=this[o];if(t.CustomEvent){const l=new t.CustomEvent(a,{detail:r,bubbles:!0,cancelable:!0});s.dom7EventData=e.filter((u,c)=>c>0),s.dispatchEvent(l),s.dom7EventData=[],delete s.dom7EventData}}}return this}function R0(e){const t=this;function n(r){r.target===this&&(e.call(this,r),t.off("transitionend",n))}return e&&t.on("transitionend",n),this}function D0(e){if(this.length>0){if(e){const t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function F0(e){if(this.length>0){if(e){const t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function V0(){if(this.length>0){const e=fe(),t=ze(),n=this[0],r=n.getBoundingClientRect(),i=t.body,a=n.clientTop||i.clientTop||0,o=n.clientLeft||i.clientLeft||0,s=n===e?e.scrollY:n.scrollTop,l=n===e?e.scrollX:n.scrollLeft;return{top:r.top+s-a,left:r.left+l-o}}return null}function B0(){const e=fe();return this[0]?e.getComputedStyle(this[0],null):{}}function H0(e,t){const n=fe();let r;if(arguments.length===1)if(typeof e=="string"){if(this[0])return n.getComputedStyle(this[0],null).getPropertyValue(e)}else{for(r=0;r<this.length;r+=1)for(const i in e)this[r].style[i]=e[i];return this}if(arguments.length===2&&typeof e=="string"){for(r=0;r<this.length;r+=1)this[r].style[e]=t;return this}return this}function U0(e){return e?(this.forEach((t,n)=>{e.apply(t,[t,n])}),this):this}function W0(e){const t=Ap(this,e);return L(t)}function G0(e){if(typeof e>"u")return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this}function Y0(e){if(typeof e>"u")return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this}function X0(e){const t=fe(),n=ze(),r=this[0];let i,a;if(!r||typeof e>"u")return!1;if(typeof e=="string"){if(r.matches)return r.matches(e);if(r.webkitMatchesSelector)return r.webkitMatchesSelector(e);if(r.msMatchesSelector)return r.msMatchesSelector(e);for(i=L(e),a=0;a<i.length;a+=1)if(i[a]===r)return!0;return!1}if(e===n)return r===n;if(e===t)return r===t;if(e.nodeType||e instanceof Lt){for(i=e.nodeType?[e]:e,a=0;a<i.length;a+=1)if(i[a]===r)return!0;return!1}return!1}function Q0(){let e=this[0],t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function K0(e){if(typeof e>"u")return this;const t=this.length;if(e>t-1)return L([]);if(e<0){const n=t+e;return n<0?L([]):L([this[n]])}return L([this[e]])}function q0(...e){let t;const n=ze();for(let r=0;r<e.length;r+=1){t=e[r];for(let i=0;i<this.length;i+=1)if(typeof t=="string"){const a=n.createElement("div");for(a.innerHTML=t;a.firstChild;)this[i].appendChild(a.firstChild)}else if(t instanceof Lt)for(let a=0;a<t.length;a+=1)this[i].appendChild(t[a]);else this[i].appendChild(t)}return this}function Z0(e){const t=ze();let n,r;for(n=0;n<this.length;n+=1)if(typeof e=="string"){const i=t.createElement("div");for(i.innerHTML=e,r=i.childNodes.length-1;r>=0;r-=1)this[n].insertBefore(i.childNodes[r],this[n].childNodes[0])}else if(e instanceof Lt)for(r=0;r<e.length;r+=1)this[n].insertBefore(e[r],this[n].childNodes[0]);else this[n].insertBefore(e,this[n].childNodes[0]);return this}function J0(e){return this.length>0?e?this[0].nextElementSibling&&L(this[0].nextElementSibling).is(e)?L([this[0].nextElementSibling]):L([]):this[0].nextElementSibling?L([this[0].nextElementSibling]):L([]):L([])}function e1(e){const t=[];let n=this[0];if(!n)return L([]);for(;n.nextElementSibling;){const r=n.nextElementSibling;e?L(r).is(e)&&t.push(r):t.push(r),n=r}return L(t)}function t1(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&L(t.previousElementSibling).is(e)?L([t.previousElementSibling]):L([]):t.previousElementSibling?L([t.previousElementSibling]):L([])}return L([])}function n1(e){const t=[];let n=this[0];if(!n)return L([]);for(;n.previousElementSibling;){const r=n.previousElementSibling;e?L(r).is(e)&&t.push(r):t.push(r),n=r}return L(t)}function r1(e){const t=[];for(let n=0;n<this.length;n+=1)this[n].parentNode!==null&&(e?L(this[n].parentNode).is(e)&&t.push(this[n].parentNode):t.push(this[n].parentNode));return L(t)}function i1(e){const t=[];for(let n=0;n<this.length;n+=1){let r=this[n].parentNode;for(;r;)e?L(r).is(e)&&t.push(r):t.push(r),r=r.parentNode}return L(t)}function a1(e){let t=this;return typeof e>"u"?L([]):(t.is(e)||(t=t.parents(e).eq(0)),t)}function o1(e){const t=[];for(let n=0;n<this.length;n+=1){const r=this[n].querySelectorAll(e);for(let i=0;i<r.length;i+=1)t.push(r[i])}return L(t)}function l1(e){const t=[];for(let n=0;n<this.length;n+=1){const r=this[n].children;for(let i=0;i<r.length;i+=1)(!e||L(r[i]).is(e))&&t.push(r[i])}return L(t)}function s1(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}const _c={addClass:P0,removeClass:_0,hasClass:O0,toggleClass:N0,attr:z0,removeAttr:L0,transform:M0,transition:I0,on:A0,off:$0,trigger:j0,transitionEnd:R0,outerWidth:D0,outerHeight:F0,styles:B0,offset:V0,css:H0,each:U0,html:G0,text:Y0,is:X0,index:Q0,eq:K0,append:q0,prepend:Z0,next:J0,nextAll:e1,prev:t1,prevAll:n1,parent:r1,parents:i1,closest:a1,find:o1,children:l1,filter:W0,remove:s1};Object.keys(_c).forEach(e=>{Object.defineProperty(L.fn,e,{value:_c[e],writable:!0})});function u1(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Ml(e,t=0){return setTimeout(e,t)}function Xr(){return Date.now()}function c1(e){const t=fe();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function f1(e,t="x"){const n=fe();let r,i,a;const o=c1(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(s=>s.replace(",",".")).join(", ")),a=new n.WebKitCSSMatrix(i==="none"?"":i)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=a.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=a.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=a.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Li(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function d1(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Me(...e){const t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let r=1;r<e.length;r+=1){const i=e[r];if(i!=null&&!d1(i)){const a=Object.keys(Object(i)).filter(o=>n.indexOf(o)<0);for(let o=0,s=a.length;o<s;o+=1){const l=a[o],u=Object.getOwnPropertyDescriptor(i,l);u!==void 0&&u.enumerable&&(Li(t[l])&&Li(i[l])?i[l].__swiper__?t[l]=i[l]:Me(t[l],i[l]):!Li(t[l])&&Li(i[l])?(t[l]={},i[l].__swiper__?t[l]=i[l]:Me(t[l],i[l])):t[l]=i[l])}}}return t}function Mi(e,t,n){e.style.setProperty(t,n)}function $p({swiper:e,targetPosition:t,side:n}){const r=fe(),i=-e.translate;let a=null,o;const s=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const l=t>i?"next":"prev",u=(f,d)=>l==="next"&&f>=d||l==="prev"&&f<=d,c=()=>{o=new Date().getTime(),a===null&&(a=o);const f=Math.max(Math.min((o-a)/s,1),0),d=.5-Math.cos(f*Math.PI)/2;let g=i+d*(t-i);if(u(g,t)&&(g=t),e.wrapperEl.scrollTo({[n]:g}),u(g,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:g})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(c)};c()}let So;function p1(){const e=fe(),t=ze();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let r=!1;try{const i=Object.defineProperty({},"passive",{get(){r=!0}});e.addEventListener("testPassiveListener",null,i)}catch{}return r}(),gestures:function(){return"ongesturestart"in e}()}}function jp(){return So||(So=p1()),So}let ko;function m1({userAgent:e}={}){const t=jp(),n=fe(),r=n.navigator.platform,i=e||n.navigator.userAgent,a={ios:!1,android:!1},o=n.screen.width,s=n.screen.height,l=i.match(/(Android);?[\s\/]+([\d.]+)?/);let u=i.match(/(iPad).*OS\s([\d_]+)/);const c=i.match(/(iPod)(.*OS\s([\d_]+))?/),f=!u&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),d=r==="Win32";let g=r==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!u&&g&&t.touch&&y.indexOf(`${o}x${s}`)>=0&&(u=i.match(/(Version)\/([\d.]+)/),u||(u=[0,1,"13_0_0"]),g=!1),l&&!d&&(a.os="android",a.android=!0),(u||f||c)&&(a.os="ios",a.ios=!0),a}function h1(e={}){return ko||(ko=m1(e)),ko}let bo;function v1(){const e=fe();function t(){const n=e.navigator.userAgent.toLowerCase();return n.indexOf("safari")>=0&&n.indexOf("chrome")<0&&n.indexOf("android")<0}return{isSafari:t(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function g1(){return bo||(bo=v1()),bo}function y1({swiper:e,on:t,emit:n}){const r=fe();let i=null,a=null;const o=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},s=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(c=>{a=r.requestAnimationFrame(()=>{const{width:f,height:d}=e;let g=f,y=d;c.forEach(({contentBoxSize:v,contentRect:w,target:p})=>{p&&p!==e.el||(g=w?w.width:(v[0]||v).inlineSize,y=w?w.height:(v[0]||v).blockSize)}),(g!==f||y!==d)&&o()})}),i.observe(e.el))},l=()=>{a&&r.cancelAnimationFrame(a),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},u=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){s();return}r.addEventListener("resize",o),r.addEventListener("orientationchange",u)}),t("destroy",()=>{l(),r.removeEventListener("resize",o),r.removeEventListener("orientationchange",u)})}function w1({swiper:e,extendParams:t,on:n,emit:r}){const i=[],a=fe(),o=(u,c={})=>{const f=a.MutationObserver||a.WebkitMutationObserver,d=new f(g=>{if(g.length===1){r("observerUpdate",g[0]);return}const y=function(){r("observerUpdate",g[0])};a.requestAnimationFrame?a.requestAnimationFrame(y):a.setTimeout(y,0)});d.observe(u,{attributes:typeof c.attributes>"u"?!0:c.attributes,childList:typeof c.childList>"u"?!0:c.childList,characterData:typeof c.characterData>"u"?!0:c.characterData}),i.push(d)},s=()=>{if(e.params.observer){if(e.params.observeParents){const u=e.$el.parents();for(let c=0;c<u.length;c+=1)o(u[c])}o(e.$el[0],{childList:e.params.observeSlideChildren}),o(e.$wrapperEl[0],{attributes:!1})}},l=()=>{i.forEach(u=>{u.disconnect()}),i.splice(0,i.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",s),n("destroy",l)}const x1={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(a=>{r.eventsListeners[a]||(r.eventsListeners[a]=[]),r.eventsListeners[a][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(...a){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,a)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,a)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(a,1)})}),n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(o=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(s=>{s.apply(i,[o,...r])}),t.eventsListeners&&t.eventsListeners[o]&&t.eventsListeners[o].forEach(s=>{s.apply(i,r)})}),t}};function S1(){const e=this;let t,n;const r=e.$el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r[0].clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r[0].clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(r.css("padding-left")||0,10)-parseInt(r.css("padding-right")||0,10),n=n-parseInt(r.css("padding-top")||0,10)-parseInt(r.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function k1(){const e=this;function t(T){return e.isHorizontal()?T:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[T]}function n(T,k){return parseFloat(T.getPropertyValue(t(k))||0)}const r=e.params,{$wrapperEl:i,size:a,rtlTranslate:o,wrongRTL:s}=e,l=e.virtual&&r.virtual.enabled,u=l?e.virtual.slides.length:e.slides.length,c=i.children(`.${e.params.slideClass}`),f=l?e.virtual.slides.length:c.length;let d=[];const g=[],y=[];let v=r.slidesOffsetBefore;typeof v=="function"&&(v=r.slidesOffsetBefore.call(e));let w=r.slidesOffsetAfter;typeof w=="function"&&(w=r.slidesOffsetAfter.call(e));const p=e.snapGrid.length,m=e.slidesGrid.length;let h=r.spaceBetween,x=-v,S=0,C=0;if(typeof a>"u")return;typeof h=="string"&&h.indexOf("%")>=0&&(h=parseFloat(h.replace("%",""))/100*a),e.virtualSize=-h,o?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),r.centeredSlides&&r.cssMode&&(Mi(e.wrapperEl,"--swiper-centered-offset-before",""),Mi(e.wrapperEl,"--swiper-centered-offset-after",""));const N=r.grid&&r.grid.rows>1&&e.grid;N&&e.grid.initSlides(f);let b;const R=r.slidesPerView==="auto"&&r.breakpoints&&Object.keys(r.breakpoints).filter(T=>typeof r.breakpoints[T].slidesPerView<"u").length>0;for(let T=0;T<f;T+=1){b=0;const k=c.eq(T);if(N&&e.grid.updateSlide(T,k,f,t),k.css("display")!=="none"){if(r.slidesPerView==="auto"){R&&(c[T].style[t("width")]="");const z=getComputedStyle(k[0]),V=k[0].style.transform,he=k[0].style.webkitTransform;if(V&&(k[0].style.transform="none"),he&&(k[0].style.webkitTransform="none"),r.roundLengths)b=e.isHorizontal()?k.outerWidth(!0):k.outerHeight(!0);else{const Ce=n(z,"width"),Ee=n(z,"padding-left"),st=n(z,"padding-right"),E=n(z,"margin-left"),P=n(z,"margin-right"),$=z.getPropertyValue("box-sizing");if($&&$==="border-box")b=Ce+E+P;else{const{clientWidth:W,offsetWidth:ie}=k[0];b=Ce+Ee+st+E+P+(ie-W)}}V&&(k[0].style.transform=V),he&&(k[0].style.webkitTransform=he),r.roundLengths&&(b=Math.floor(b))}else b=(a-(r.slidesPerView-1)*h)/r.slidesPerView,r.roundLengths&&(b=Math.floor(b)),c[T]&&(c[T].style[t("width")]=`${b}px`);c[T]&&(c[T].swiperSlideSize=b),y.push(b),r.centeredSlides?(x=x+b/2+S/2+h,S===0&&T!==0&&(x=x-a/2-h),T===0&&(x=x-a/2-h),Math.abs(x)<1/1e3&&(x=0),r.roundLengths&&(x=Math.floor(x)),C%r.slidesPerGroup===0&&d.push(x),g.push(x)):(r.roundLengths&&(x=Math.floor(x)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup===0&&d.push(x),g.push(x),x=x+b+h),e.virtualSize+=b+h,S=b,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,a)+w,o&&s&&(r.effect==="slide"||r.effect==="coverflow")&&i.css({width:`${e.virtualSize+r.spaceBetween}px`}),r.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+r.spaceBetween}px`}),N&&e.grid.updateWrapperSize(b,d,t),!r.centeredSlides){const T=[];for(let k=0;k<d.length;k+=1){let z=d[k];r.roundLengths&&(z=Math.floor(z)),d[k]<=e.virtualSize-a&&T.push(z)}d=T,Math.floor(e.virtualSize-a)-Math.floor(d[d.length-1])>1&&d.push(e.virtualSize-a)}if(d.length===0&&(d=[0]),r.spaceBetween!==0){const T=e.isHorizontal()&&o?"marginLeft":t("marginRight");c.filter((k,z)=>r.cssMode?z!==c.length-1:!0).css({[T]:`${h}px`})}if(r.centeredSlides&&r.centeredSlidesBounds){let T=0;y.forEach(z=>{T+=z+(r.spaceBetween?r.spaceBetween:0)}),T-=r.spaceBetween;const k=T-a;d=d.map(z=>z<0?-v:z>k?k+w:z)}if(r.centerInsufficientSlides){let T=0;if(y.forEach(k=>{T+=k+(r.spaceBetween?r.spaceBetween:0)}),T-=r.spaceBetween,T<a){const k=(a-T)/2;d.forEach((z,V)=>{d[V]=z-k}),g.forEach((z,V)=>{g[V]=z+k})}}if(Object.assign(e,{slides:c,snapGrid:d,slidesGrid:g,slidesSizesGrid:y}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){Mi(e.wrapperEl,"--swiper-centered-offset-before",`${-d[0]}px`),Mi(e.wrapperEl,"--swiper-centered-offset-after",`${e.size/2-y[y.length-1]/2}px`);const T=-e.snapGrid[0],k=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(z=>z+T),e.slidesGrid=e.slidesGrid.map(z=>z+k)}if(f!==u&&e.emit("slidesLengthChange"),d.length!==p&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==m&&e.emit("slidesGridLengthChange"),r.watchSlidesProgress&&e.updateSlidesOffset(),!l&&!r.cssMode&&(r.effect==="slide"||r.effect==="fade")){const T=`${r.containerModifierClass}backface-hidden`,k=e.$el.hasClass(T);f<=r.maxBackfaceHiddenSlides?k||e.$el.addClass(T):k&&e.$el.removeClass(T)}}function b1(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,a;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=s=>r?t.slides.filter(l=>parseInt(l.getAttribute("data-swiper-slide-index"),10)===s)[0]:t.slides.eq(s)[0];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||L([])).each(s=>{n.push(s)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){const s=t.activeIndex+a;if(s>t.slides.length&&!r)break;n.push(o(s))}else n.push(o(t.activeIndex));for(a=0;a<n.length;a+=1)if(typeof n[a]<"u"){const s=n[a].offsetHeight;i=s>i?s:i}(i||i===0)&&t.$wrapperEl.css("height",`${i}px`)}function C1(){const e=this,t=e.slides;for(let n=0;n<t.length;n+=1)t[n].swiperSlideOffset=e.isHorizontal()?t[n].offsetLeft:t[n].offsetTop}function E1(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:a}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;i&&(o=e),r.removeClass(n.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let s=0;s<r.length;s+=1){const l=r[s];let u=l.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(u-=r[0].swiperSlideOffset);const c=(o+(n.centeredSlides?t.minTranslate():0)-u)/(l.swiperSlideSize+n.spaceBetween),f=(o-a[0]+(n.centeredSlides?t.minTranslate():0)-u)/(l.swiperSlideSize+n.spaceBetween),d=-(o-u),g=d+t.slidesSizesGrid[s];(d>=0&&d<t.size-1||g>1&&g<=t.size||d<=0&&g>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(s),r.eq(s).addClass(n.slideVisibleClass)),l.progress=i?-c:c,l.originalProgress=i?-f:f}t.visibleSlides=L(t.visibleSlides)}function T1(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:a,isEnd:o}=t;const s=a,l=o;r===0?(i=0,a=!0,o=!0):(i=(e-t.minTranslate())/r,a=i<=0,o=i>=1),Object.assign(t,{progress:i,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!s&&t.emit("reachBeginning toEdge"),o&&!l&&t.emit("reachEnd toEdge"),(s&&!a||l&&!o)&&t.emit("fromEdge"),t.emit("progress",i)}function P1(){const e=this,{slides:t,params:n,$wrapperEl:r,activeIndex:i,realIndex:a}=e,o=e.virtual&&n.virtual.enabled;t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`);let s;o?s=e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${i}"]`):s=t.eq(i),s.addClass(n.slideActiveClass),n.loop&&(s.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${a}"]`).addClass(n.slideDuplicateActiveClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${a}"]`).addClass(n.slideDuplicateActiveClass));let l=s.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);n.loop&&l.length===0&&(l=t.eq(0),l.addClass(n.slideNextClass));let u=s.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);n.loop&&u.length===0&&(u=t.eq(-1),u.addClass(n.slidePrevClass)),n.loop&&(l.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass),u.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)),e.emitSlidesClasses()}function _1(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:r,snapGrid:i,params:a,activeIndex:o,realIndex:s,snapIndex:l}=t;let u=e,c;if(typeof u>"u"){for(let d=0;d<r.length;d+=1)typeof r[d+1]<"u"?n>=r[d]&&n<r[d+1]-(r[d+1]-r[d])/2?u=d:n>=r[d]&&n<r[d+1]&&(u=d+1):n>=r[d]&&(u=d);a.normalizeSlideIndex&&(u<0||typeof u>"u")&&(u=0)}if(i.indexOf(n)>=0)c=i.indexOf(n);else{const d=Math.min(a.slidesPerGroupSkip,u);c=d+Math.floor((u-d)/a.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),u===o){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}const f=parseInt(t.slides.eq(u).attr("data-swiper-slide-index")||u,10);Object.assign(t,{snapIndex:c,realIndex:f,previousIndex:o,activeIndex:u}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),s!==f&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}function N1(e){const t=this,n=t.params,r=L(e).closest(`.${n.slideClass}`)[0];let i=!1,a;if(r){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===r){i=!0,a=o;break}}if(r&&i)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(L(r).attr("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}const O1={updateSize:S1,updateSlides:k1,updateAutoHeight:b1,updateSlidesOffset:C1,updateSlidesProgress:E1,updateProgress:T1,updateSlidesClasses:P1,updateActiveIndex:_1,updateClickedSlide:N1};function z1(e=this.isHorizontal()?"x":"y"){const t=this,{params:n,rtlTranslate:r,translate:i,$wrapperEl:a}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=f1(a[0],e);return r&&(o=-o),o||0}function L1(e,t){const n=this,{rtlTranslate:r,params:i,$wrapperEl:a,wrapperEl:o,progress:s}=n;let l=0,u=0;const c=0;n.isHorizontal()?l=r?-e:e:u=e,i.roundLengths&&(l=Math.floor(l),u=Math.floor(u)),i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-u:i.virtualTranslate||a.transform(`translate3d(${l}px, ${u}px, ${c}px)`),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:u;let f;const d=n.maxTranslate()-n.minTranslate();d===0?f=0:f=(e-n.minTranslate())/d,f!==s&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function M1(){return-this.snapGrid[0]}function I1(){return-this.snapGrid[this.snapGrid.length-1]}function A1(e=0,t=this.params.speed,n=!0,r=!0,i){const a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;const l=a.minTranslate(),u=a.maxTranslate();let c;if(r&&e>l?c=l:r&&e<u?c=u:c=e,a.updateProgress(c),o.cssMode){const f=a.isHorizontal();if(t===0)s[f?"scrollLeft":"scrollTop"]=-c;else{if(!a.support.smoothScroll)return $p({swiper:a,targetPosition:-c,side:f?"left":"top"}),!0;s.scrollTo({[f?"left":"top"]:-c,behavior:"smooth"})}return!0}return t===0?(a.setTransition(0),a.setTranslate(c),n&&(a.emit("beforeTransitionStart",t,i),a.emit("transitionEnd"))):(a.setTransition(t),a.setTranslate(c),n&&(a.emit("beforeTransitionStart",t,i),a.emit("transitionStart")),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||(a.onTranslateToWrapperTransitionEnd=function(d){!a||a.destroyed||d.target===this&&(a.$wrapperEl[0].removeEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.$wrapperEl[0].removeEventListener("webkitTransitionEnd",a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,n&&a.emit("transitionEnd"))}),a.$wrapperEl[0].addEventListener("transitionend",a.onTranslateToWrapperTransitionEnd),a.$wrapperEl[0].addEventListener("webkitTransitionEnd",a.onTranslateToWrapperTransitionEnd))),!0}const $1={getTranslate:z1,setTranslate:L1,minTranslate:M1,maxTranslate:I1,translateTo:A1};function j1(e,t){const n=this;n.params.cssMode||n.$wrapperEl.transition(e),n.emit("setTransition",e,t)}function Rp({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:a}=e;let o=n;if(o||(i>a?o="next":i<a?o="prev":o="reset"),e.emit(`transition${r}`),t&&i!==a){if(o==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),o==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function R1(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Rp({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function D1(e=!0,t){const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Rp({swiper:n,runCallbacks:e,direction:t,step:"End"}))}const F1={setTransition:j1,transitionStart:R1,transitionEnd:D1};function V1(e=0,t=this.params.speed,n=!0,r,i){if(typeof e!="number"&&typeof e!="string")throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if(typeof e=="string"){const h=parseInt(e,10);if(!isFinite(h))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=h}const a=this;let o=e;o<0&&(o=0);const{params:s,snapGrid:l,slidesGrid:u,previousIndex:c,activeIndex:f,rtlTranslate:d,wrapperEl:g,enabled:y}=a;if(a.animating&&s.preventInteractionOnTransition||!y&&!r&&!i)return!1;const v=Math.min(a.params.slidesPerGroupSkip,o);let w=v+Math.floor((o-v)/a.params.slidesPerGroup);w>=l.length&&(w=l.length-1);const p=-l[w];if(s.normalizeSlideIndex)for(let h=0;h<u.length;h+=1){const x=-Math.floor(p*100),S=Math.floor(u[h]*100),C=Math.floor(u[h+1]*100);typeof u[h+1]<"u"?x>=S&&x<C-(C-S)/2?o=h:x>=S&&x<C&&(o=h+1):x>=S&&(o=h)}if(a.initialized&&o!==f&&(!a.allowSlideNext&&p<a.translate&&p<a.minTranslate()||!a.allowSlidePrev&&p>a.translate&&p>a.maxTranslate()&&(f||0)!==o))return!1;o!==(c||0)&&n&&a.emit("beforeSlideChangeStart"),a.updateProgress(p);let m;if(o>f?m="next":o<f?m="prev":m="reset",d&&-p===a.translate||!d&&p===a.translate)return a.updateActiveIndex(o),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),s.effect!=="slide"&&a.setTranslate(p),m!=="reset"&&(a.transitionStart(n,m),a.transitionEnd(n,m)),!1;if(s.cssMode){const h=a.isHorizontal(),x=d?p:-p;if(t===0){const S=a.virtual&&a.params.virtual.enabled;S&&(a.wrapperEl.style.scrollSnapType="none",a._immediateVirtual=!0),g[h?"scrollLeft":"scrollTop"]=x,S&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType="",a._swiperImmediateVirtual=!1})}else{if(!a.support.smoothScroll)return $p({swiper:a,targetPosition:x,side:h?"left":"top"}),!0;g.scrollTo({[h?"left":"top"]:x,behavior:"smooth"})}return!0}return a.setTransition(t),a.setTranslate(p),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,r),a.transitionStart(n,m),t===0?a.transitionEnd(n,m):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(x){!a||a.destroyed||x.target===this&&(a.$wrapperEl[0].removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.$wrapperEl[0].removeEventListener("webkitTransitionEnd",a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,m))}),a.$wrapperEl[0].addEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.$wrapperEl[0].addEventListener("webkitTransitionEnd",a.onSlideToWrapperTransitionEnd)),!0}function B1(e=0,t=this.params.speed,n=!0,r){if(typeof e=="string"){const o=parseInt(e,10);if(!isFinite(o))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=o}const i=this;let a=e;return i.params.loop&&(a+=i.loopedSlides),i.slideTo(a,t,n,r)}function H1(e=this.params.speed,t=!0,n){const r=this,{animating:i,enabled:a,params:o}=r;if(!a)return r;let s=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<o.slidesPerGroupSkip?1:s;if(o.loop){if(i&&o.loopPreventsSlide)return!1;r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)}function U1(e=this.params.speed,t=!0,n){const r=this,{params:i,animating:a,snapGrid:o,slidesGrid:s,rtlTranslate:l,enabled:u}=r;if(!u)return r;if(i.loop){if(a&&i.loopPreventsSlide)return!1;r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft}const c=l?r.translate:-r.translate;function f(w){return w<0?-Math.floor(Math.abs(w)):Math.floor(w)}const d=f(c),g=o.map(w=>f(w));let y=o[g.indexOf(d)-1];if(typeof y>"u"&&i.cssMode){let w;o.forEach((p,m)=>{d>=p&&(w=m)}),typeof w<"u"&&(y=o[w>0?w-1:w])}let v=0;if(typeof y<"u"&&(v=s.indexOf(y),v<0&&(v=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(v=v-r.slidesPerViewDynamic("previous",!0)+1,v=Math.max(v,0))),i.rewind&&r.isBeginning){const w=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(w,e,t,n)}return r.slideTo(v,e,t,n)}function W1(e=this.params.speed,t=!0,n){const r=this;return r.slideTo(r.activeIndex,e,t,n)}function G1(e=this.params.speed,t=!0,n,r=.5){const i=this;let a=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[s]){const u=i.snapGrid[s],c=i.snapGrid[s+1];l-u>(c-u)*r&&(a+=i.params.slidesPerGroup)}else{const u=i.snapGrid[s-1],c=i.snapGrid[s];l-u<=(c-u)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)}function Y1(){const e=this,{params:t,$wrapperEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,a;if(t.loop){if(e.animating)return;a=parseInt(L(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=n.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),Ml(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=n.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),Ml(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}const X1={slideTo:V1,slideToLoop:B1,slideNext:H1,slidePrev:U1,slideReset:W1,slideToClosest:G1,slideToClickedSlide:Y1};function Q1(){const e=this,t=ze(),{params:n,$wrapperEl:r}=e,i=r.children().length>0?L(r.children()[0].parentNode):r;i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();let a=i.children(`.${n.slideClass}`);if(n.loopFillGroupWithBlank){const l=n.slidesPerGroup-a.length%n.slidesPerGroup;if(l!==n.slidesPerGroup){for(let u=0;u<l;u+=1){const c=L(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);i.append(c)}a=i.children(`.${n.slideClass}`)}}n.slidesPerView==="auto"&&!n.loopedSlides&&(n.loopedSlides=a.length),e.loopedSlides=Math.ceil(parseFloat(n.loopedSlides||n.slidesPerView,10)),e.loopedSlides+=n.loopAdditionalSlides,e.loopedSlides>a.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=a.length);const o=[],s=[];a.each((l,u)=>{L(l).attr("data-swiper-slide-index",u)});for(let l=0;l<e.loopedSlides;l+=1){const u=l-Math.floor(l/a.length)*a.length;s.push(a.eq(u)[0]),o.unshift(a.eq(a.length-u-1)[0])}for(let l=0;l<s.length;l+=1)i.append(L(s[l].cloneNode(!0)).addClass(n.slideDuplicateClass));for(let l=o.length-1;l>=0;l-=1)i.prepend(L(o[l].cloneNode(!0)).addClass(n.slideDuplicateClass))}function K1(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:n,loopedSlides:r,allowSlidePrev:i,allowSlideNext:a,snapGrid:o,rtlTranslate:s}=e;let l;e.allowSlidePrev=!0,e.allowSlideNext=!0;const c=-o[t]-e.getTranslate();t<r?(l=n.length-r*3+t,l+=r,e.slideTo(l,0,!1,!0)&&c!==0&&e.setTranslate((s?-e.translate:e.translate)-c)):t>=n.length-r&&(l=-n.length+t+r,l+=r,e.slideTo(l,0,!1,!0)&&c!==0&&e.setTranslate((s?-e.translate:e.translate)-c)),e.allowSlidePrev=i,e.allowSlideNext=a,e.emit("loopFix")}function q1(){const e=this,{$wrapperEl:t,params:n,slides:r}=e;t.children(`.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`).remove(),r.removeAttr("data-swiper-slide-index")}const Z1={loopCreate:Q1,loopFix:K1,loopDestroy:q1};function J1(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;n.style.cursor="move",n.style.cursor=e?"grabbing":"grab"}function ey(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="")}const ty={setGrabCursor:J1,unsetGrabCursor:ey};function ny(e,t=this){function n(r){if(!r||r===ze()||r===fe())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function ry(e){const t=this,n=ze(),r=fe(),i=t.touchEventsData,{params:a,touches:o,enabled:s}=t;if(!s||t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let l=e;l.originalEvent&&(l=l.originalEvent);let u=L(l.target);if(a.touchEventsTarget==="wrapper"&&!u.closest(t.wrapperEl).length||(i.isTouchEvent=l.type==="touchstart",!i.isTouchEvent&&"which"in l&&l.which===3)||!i.isTouchEvent&&"button"in l&&l.button>0||i.isTouched&&i.isMoved)return;const c=!!a.noSwipingClass&&a.noSwipingClass!=="",f=e.composedPath?e.composedPath():e.path;c&&l.target&&l.target.shadowRoot&&f&&(u=L(f[0]));const d=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,g=!!(l.target&&l.target.shadowRoot);if(a.noSwiping&&(g?ny(d,u[0]):u.closest(d)[0])){t.allowClick=!0;return}if(a.swipeHandler&&!u.closest(a.swipeHandler)[0])return;o.currentX=l.type==="touchstart"?l.targetTouches[0].pageX:l.pageX,o.currentY=l.type==="touchstart"?l.targetTouches[0].pageY:l.pageY;const y=o.currentX,v=o.currentY,w=a.edgeSwipeDetection||a.iOSEdgeSwipeDetection,p=a.edgeSwipeThreshold||a.iOSEdgeSwipeThreshold;if(w&&(y<=p||y>=r.innerWidth-p))if(w==="prevent")e.preventDefault();else return;if(Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=y,o.startY=v,i.touchStartTime=Xr(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(i.allowThresholdMove=!1),l.type!=="touchstart"){let m=!0;u.is(i.focusableElements)&&(m=!1,u[0].nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&L(n.activeElement).is(i.focusableElements)&&n.activeElement!==u[0]&&n.activeElement.blur();const h=m&&t.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||h)&&!u[0].isContentEditable&&l.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",l)}function iy(e){const t=ze(),n=this,r=n.touchEventsData,{params:i,touches:a,rtlTranslate:o,enabled:s}=n;if(!s)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l);return}if(r.isTouchEvent&&l.type!=="touchmove")return;const u=l.type==="touchmove"&&l.targetTouches&&(l.targetTouches[0]||l.changedTouches[0]),c=l.type==="touchmove"?u.pageX:l.pageX,f=l.type==="touchmove"?u.pageY:l.pageY;if(l.preventedByNestedSwiper){a.startX=c,a.startY=f;return}if(!n.allowTouchMove){L(l.target).is(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(a,{startX:c,startY:f,currentX:c,currentY:f}),r.touchStartTime=Xr());return}if(r.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(f<a.startY&&n.translate<=n.maxTranslate()||f>a.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(c<a.startX&&n.translate<=n.maxTranslate()||c>a.startX&&n.translate>=n.minTranslate())return}if(r.isTouchEvent&&t.activeElement&&l.target===t.activeElement&&L(l.target).is(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}if(r.allowTouchCallbacks&&n.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;a.currentX=c,a.currentY=f;const d=a.currentX-a.startX,g=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(d**2+g**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let p;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?r.isScrolling=!1:d*d+g*g>=25&&(p=Math.atan2(Math.abs(g),Math.abs(d))*180/Math.PI,r.isScrolling=n.isHorizontal()?p>i.touchAngle:90-p>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),typeof r.startMoving>"u"&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(r.startMoving=!0),r.isScrolling){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation(),r.isMoved||(i.loop&&!i.cssMode&&n.loopFix(),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating&&n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)),n.emit("sliderMove",l),r.isMoved=!0;let y=n.isHorizontal()?d:g;a.diff=y,y*=i.touchRatio,o&&(y=-y),n.swipeDirection=y>0?"prev":"next",r.currentTranslate=y+r.startTranslate;let v=!0,w=i.resistanceRatio;if(i.touchReleaseOnEdges&&(w=0),y>0&&r.currentTranslate>n.minTranslate()?(v=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+y)**w)):y<0&&r.currentTranslate<n.maxTranslate()&&(v=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-y)**w)),v&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(y)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,r.currentTranslate=r.startTranslate,a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function ay(e){const t=this,n=t.touchEventsData,{params:r,touches:i,rtlTranslate:a,slidesGrid:o,enabled:s}=t;if(!s)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",l),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&r.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}r.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=Xr(),c=u-n.touchStartTime;if(t.allowClick){const m=l.path||l.composedPath&&l.composedPath();t.updateClickedSlide(m&&m[0]||l.target),t.emit("tap click",l),c<300&&u-n.lastClickTime<300&&t.emit("doubleTap doubleClick",l)}if(n.lastClickTime=Xr(),Ml(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||i.diff===0||n.currentTranslate===n.startTranslate){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let f;if(r.followFinger?f=a?t.translate:-t.translate:f=-n.currentTranslate,r.cssMode)return;if(t.params.freeMode&&r.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}let d=0,g=t.slidesSizesGrid[0];for(let m=0;m<o.length;m+=m<r.slidesPerGroupSkip?1:r.slidesPerGroup){const h=m<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;typeof o[m+h]<"u"?f>=o[m]&&f<o[m+h]&&(d=m,g=o[m+h]-o[m]):f>=o[m]&&(d=m,g=o[o.length-1]-o[o.length-2])}let y=null,v=null;r.rewind&&(t.isBeginning?v=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(y=0));const w=(f-o[d])/g,p=d<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(c>r.longSwipesMs){if(!r.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(w>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?y:d+p):t.slideTo(d)),t.swipeDirection==="prev"&&(w>1-r.longSwipesRatio?t.slideTo(d+p):v!==null&&w<0&&Math.abs(w)>r.longSwipesRatio?t.slideTo(v):t.slideTo(d))}else{if(!r.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(l.target===t.navigation.nextEl||l.target===t.navigation.prevEl)?l.target===t.navigation.nextEl?t.slideTo(d+p):t.slideTo(d):(t.swipeDirection==="next"&&t.slideTo(y!==null?y:d+p),t.swipeDirection==="prev"&&t.slideTo(v!==null?v:d))}}function Nc(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function oy(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function ly(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const a=e.maxTranslate()-e.minTranslate();a===0?i=0:i=(e.translate-e.minTranslate())/a,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let Oc=!1;function sy(){}const Dp=(e,t)=>{const n=ze(),{params:r,touchEvents:i,el:a,wrapperEl:o,device:s,support:l}=e,u=!!r.nested,c=t==="on"?"addEventListener":"removeEventListener",f=t;if(!l.touch)a[c](i.start,e.onTouchStart,!1),n[c](i.move,e.onTouchMove,u),n[c](i.end,e.onTouchEnd,!1);else{const d=i.start==="touchstart"&&l.passiveListener&&r.passiveListeners?{passive:!0,capture:!1}:!1;a[c](i.start,e.onTouchStart,d),a[c](i.move,e.onTouchMove,l.passiveListener?{passive:!1,capture:u}:u),a[c](i.end,e.onTouchEnd,d),i.cancel&&a[c](i.cancel,e.onTouchEnd,d)}(r.preventClicks||r.preventClicksPropagation)&&a[c]("click",e.onClick,!0),r.cssMode&&o[c]("scroll",e.onScroll),r.updateOnWindowResize?e[f](s.ios||s.android?"resize orientationchange observerUpdate":"resize observerUpdate",Nc,!0):e[f]("observerUpdate",Nc,!0)};function uy(){const e=this,t=ze(),{params:n,support:r}=e;e.onTouchStart=ry.bind(e),e.onTouchMove=iy.bind(e),e.onTouchEnd=ay.bind(e),n.cssMode&&(e.onScroll=ly.bind(e)),e.onClick=oy.bind(e),r.touch&&!Oc&&(t.addEventListener("touchstart",sy),Oc=!0),Dp(e,"on")}function cy(){Dp(this,"off")}const fy={attachEvents:uy,detachEvents:cy},zc=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function dy(){const e=this,{activeIndex:t,initialized:n,loopedSlides:r=0,params:i,$el:a}=e,o=i.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const s=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!s||e.currentBreakpoint===s)return;const u=(s in o?o[s]:void 0)||e.originalParams,c=zc(e,i),f=zc(e,u),d=i.enabled;c&&!f?(a.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&f&&(a.addClass(`${i.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&i.grid.fill==="column")&&a.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(w=>{const p=i[w]&&i[w].enabled,m=u[w]&&u[w].enabled;p&&!m&&e[w].disable(),!p&&m&&e[w].enable()});const g=u.direction&&u.direction!==i.direction,y=i.loop&&(u.slidesPerView!==i.slidesPerView||g);g&&n&&e.changeDirection(),Me(e.params,u);const v=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),d&&!v?e.disable():!d&&v&&e.enable(),e.currentBreakpoint=s,e.emit("_beforeBreakpoint",u),y&&n&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-r+e.loopedSlides,0,!1)),e.emit("breakpoint",u)}function py(e,t="window",n){if(!e||t==="container"&&!n)return;let r=!1;const i=fe(),a=t==="window"?i.innerHeight:n.clientHeight,o=Object.keys(e).map(s=>{if(typeof s=="string"&&s.indexOf("@")===0){const l=parseFloat(s.substr(1));return{value:a*l,point:s}}return{value:s,point:s}});o.sort((s,l)=>parseInt(s.value,10)-parseInt(l.value,10));for(let s=0;s<o.length;s+=1){const{point:l,value:u}=o[s];t==="window"?i.matchMedia(`(min-width: ${u}px)`).matches&&(r=l):u<=n.clientWidth&&(r=l)}return r||"max"}const my={setBreakpoint:dy,getBreakpoint:py};function hy(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function vy(){const e=this,{classNames:t,params:n,rtl:r,$el:i,device:a,support:o}=e,s=hy(["initialized",n.direction,{"pointer-events":!o.touch},{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...s),i.addClass([...t].join(" ")),e.emitContainerClasses()}function gy(){const e=this,{$el:t,classNames:n}=e;t.removeClass(n.join(" ")),e.emitContainerClasses()}const yy={addClasses:vy,removeClasses:gy};function wy(e,t,n,r,i,a){const o=fe();let s;function l(){a&&a()}!L(e).parent("picture")[0]&&(!e.complete||!i)&&t?(s=new o.Image,s.onload=l,s.onerror=l,r&&(s.sizes=r),n&&(s.srcset=n),t&&(s.src=t)):l()}function xy(){const e=this;e.imagesToLoad=e.$el.find("img");function t(){typeof e>"u"||e===null||!e||e.destroyed||(e.imagesLoaded!==void 0&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}for(let n=0;n<e.imagesToLoad.length;n+=1){const r=e.imagesToLoad[n];e.loadImage(r,r.currentSrc||r.getAttribute("src"),r.srcset||r.getAttribute("srcset"),r.sizes||r.getAttribute("sizes"),!0,t)}}const Sy={loadImage:wy,preloadImages:xy};function ky(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,a=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>a}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}const by={checkOverflow:ky},Lc={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function Cy(e,t){return function(r={}){const i=Object.keys(r)[0],a=r[i];if(typeof a!="object"||a===null){Me(t,r);return}if(["navigation","pagination","scrollbar"].indexOf(i)>=0&&e[i]===!0&&(e[i]={auto:!0}),!(i in e&&"enabled"in a)){Me(t,r);return}e[i]===!0&&(e[i]={enabled:!0}),typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Me(t,r)}}const Co={eventsEmitter:x1,update:O1,translate:$1,transition:F1,slide:X1,loop:Z1,grabCursor:ty,events:fy,breakpoints:my,checkOverflow:by,classes:yy,images:Sy},Eo={};let Kn=class ut{constructor(...t){let n,r;if(t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?r=t[0]:[n,r]=t,r||(r={}),r=Me({},r),n&&!r.el&&(r.el=n),r.el&&L(r.el).length>1){const s=[];return L(r.el).each(l=>{const u=Me({},r,{el:l});s.push(new ut(u))}),s}const i=this;i.__swiper__=!0,i.support=jp(),i.device=h1({userAgent:r.userAgent}),i.browser=g1(),i.eventsListeners={},i.eventsAnyListeners=[],i.modules=[...i.__modules__],r.modules&&Array.isArray(r.modules)&&i.modules.push(...r.modules);const a={};i.modules.forEach(s=>{s({swiper:i,extendParams:Cy(r,a),on:i.on.bind(i),once:i.once.bind(i),off:i.off.bind(i),emit:i.emit.bind(i)})});const o=Me({},Lc,a);return i.params=Me({},o,Eo,r),i.originalParams=Me({},i.params),i.passedParams=Me({},r),i.params&&i.params.on&&Object.keys(i.params.on).forEach(s=>{i.on(s,i.params.on[s])}),i.params&&i.params.onAny&&i.onAny(i.params.onAny),i.$=L,Object.assign(i,{enabled:i.params.enabled,el:n,classNames:[],slides:L(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return i.params.direction==="horizontal"},isVertical(){return i.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEvents:function(){const l=["touchstart","touchmove","touchend","touchcancel"],u=["pointerdown","pointermove","pointerup"];return i.touchEventsTouch={start:l[0],move:l[1],end:l[2],cancel:l[3]},i.touchEventsDesktop={start:u[0],move:u[1],end:u[2]},i.support.touch||!i.params.simulateTouch?i.touchEventsTouch:i.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:i.params.focusableElements,lastClickTime:Xr(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.emit("_swiper"),i.params.init&&i.init(),i}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),o=(r.maxTranslate()-i)*t+i;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.each(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){const r=this,{params:i,slides:a,slidesGrid:o,slidesSizesGrid:s,size:l,activeIndex:u}=r;let c=1;if(i.centeredSlides){let f=a[u].swiperSlideSize,d;for(let g=u+1;g<a.length;g+=1)a[g]&&!d&&(f+=a[g].swiperSlideSize,c+=1,f>l&&(d=!0));for(let g=u-1;g>=0;g-=1)a[g]&&!d&&(f+=a[g].swiperSlideSize,c+=1,f>l&&(d=!0))}else if(t==="current")for(let f=u+1;f<a.length;f+=1)(n?o[f]+s[f]-o[u]<l:o[f]-o[u]<l)&&(c+=1);else for(let f=u-1;f>=0;f-=1)o[u]-o[f]<l&&(c+=1);return c}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const o=t.rtlTranslate?t.translate*-1:t.translate,s=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(s),t.updateActiveIndex(),t.updateSlidesClasses()}let a;t.params.freeMode&&t.params.freeMode.enabled?(i(),t.params.autoHeight&&t.updateAutoHeight()):((t.params.slidesPerView==="auto"||t.params.slidesPerView>1)&&t.isEnd&&!t.params.centeredSlides?a=t.slideTo(t.slides.length-1,0,!1,!0):a=t.slideTo(t.activeIndex,0,!1,!0),a||i()),r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.$el.removeClass(`${r.params.containerModifierClass}${i}`).addClass(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.each(a=>{t==="vertical"?a.style.width="":a.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.$el.addClass(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.$el.removeClass(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;const r=L(t||n.params.el);if(t=r[0],!t)return!1;t.swiper=n;const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>{if(t&&t.shadowRoot&&t.shadowRoot.querySelector){const s=L(t.shadowRoot.querySelector(i()));return s.children=l=>r.children(l),s}return r.children?r.children(i()):L(r).children(i())})();if(o.length===0&&n.params.createElements){const l=ze().createElement("div");o=L(l),l.className=n.params.wrapperClass,r.append(l),r.children(`.${n.params.slideClass}`).each(u=>{o.append(u)})}return Object.assign(n,{$el:r,el:t,$wrapperEl:o,wrapperEl:o[0],mounted:!0,rtl:t.dir.toLowerCase()==="rtl"||r.css("direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(t.dir.toLowerCase()==="rtl"||r.css("direction")==="rtl"),wrongRTL:o.css("display")==="-webkit-box"}),!0}init(t){const n=this;return n.initialized||n.mount(t)===!1||(n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.params.loop&&n.loopCreate(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.preloadImages&&n.preloadImages(),n.params.loop?n.slideTo(n.params.initialSlide+n.loopedSlides,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.attachEvents(),n.initialized=!0,n.emit("init"),n.emit("afterInit")),n}destroy(t=!0,n=!0){const r=this,{params:i,$el:a,$wrapperEl:o,slides:s}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),a.removeAttr("style"),o.removeAttr("style"),s&&s.length&&s.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(l=>{r.off(l)}),t!==!1&&(r.$el[0].swiper=null,u1(r)),r.destroyed=!0),null}static extendDefaults(t){Me(Eo,t)}static get extendedDefaults(){return Eo}static get defaults(){return Lc}static installModule(t){ut.prototype.__modules__||(ut.prototype.__modules__=[]);const n=ut.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>ut.installModule(n)),ut):(ut.installModule(t),ut)}};Object.keys(Co).forEach(e=>{Object.keys(Co[e]).forEach(t=>{Kn.prototype[t]=Co[e][t]})});Kn.use([y1,w1]);function Fp(e,t,n,r){const i=ze();return e.params.createElements&&Object.keys(r).forEach(a=>{if(!n[a]&&n.auto===!0){let o=e.$el.children(`.${r[a]}`)[0];o||(o=i.createElement("div"),o.className=r[a],e.$el.append(o)),n[a]=o,t[a]=o}}),n}function Ey({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function i(g){let y;return g&&(y=L(g),e.params.uniqueNavElements&&typeof g=="string"&&y.length>1&&e.$el.find(g).length===1&&(y=e.$el.find(g))),y}function a(g,y){const v=e.params.navigation;g&&g.length>0&&(g[y?"addClass":"removeClass"](v.disabledClass),g[0]&&g[0].tagName==="BUTTON"&&(g[0].disabled=y),e.params.watchOverflow&&e.enabled&&g[e.isLocked?"addClass":"removeClass"](v.lockClass))}function o(){if(e.params.loop)return;const{$nextEl:g,$prevEl:y}=e.navigation;a(y,e.isBeginning&&!e.params.rewind),a(g,e.isEnd&&!e.params.rewind)}function s(g){g.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function l(g){g.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const g=e.params.navigation;if(e.params.navigation=Fp(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(g.nextEl||g.prevEl))return;const y=i(g.nextEl),v=i(g.prevEl);y&&y.length>0&&y.on("click",l),v&&v.length>0&&v.on("click",s),Object.assign(e.navigation,{$nextEl:y,nextEl:y&&y[0],$prevEl:v,prevEl:v&&v[0]}),e.enabled||(y&&y.addClass(g.lockClass),v&&v.addClass(g.lockClass))}function c(){const{$nextEl:g,$prevEl:y}=e.navigation;g&&g.length&&(g.off("click",l),g.removeClass(e.params.navigation.disabledClass)),y&&y.length&&(y.off("click",s),y.removeClass(e.params.navigation.disabledClass))}n("init",()=>{e.params.navigation.enabled===!1?d():(u(),o())}),n("toEdge fromEdge lock unlock",()=>{o()}),n("destroy",()=>{c()}),n("enable disable",()=>{const{$nextEl:g,$prevEl:y}=e.navigation;g&&g[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),y&&y[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)}),n("click",(g,y)=>{const{$nextEl:v,$prevEl:w}=e.navigation,p=y.target;if(e.params.navigation.hideOnClick&&!L(p).is(w)&&!L(p).is(v)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===p||e.pagination.el.contains(p)))return;let m;v?m=v.hasClass(e.params.navigation.hiddenClass):w&&(m=w.hasClass(e.params.navigation.hiddenClass)),r(m===!0?"navigationShow":"navigationHide"),v&&v.toggleClass(e.params.navigation.hiddenClass),w&&w.toggleClass(e.params.navigation.hiddenClass)}});const f=()=>{e.$el.removeClass(e.params.navigation.navigationDisabledClass),u(),o()},d=()=>{e.$el.addClass(e.params.navigation.navigationDisabledClass),c()};Object.assign(e.navigation,{enable:f,disable:d,update:o,init:u,destroy:c})}function wn(e=""){return`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function Ty({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:v=>v,formatFractionTotal:v=>v,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,$el:null,bullets:[]};let a,o=0;function s(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||e.pagination.$el.length===0}function l(v,w){const{bulletActiveClass:p}=e.params.pagination;v[w]().addClass(`${p}-${w}`)[w]().addClass(`${p}-${w}-${w}`)}function u(){const v=e.rtl,w=e.params.pagination;if(s())return;const p=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,m=e.pagination.$el;let h;const x=e.params.loop?Math.ceil((p-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(h=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),h>p-1-e.loopedSlides*2&&(h-=p-e.loopedSlides*2),h>x-1&&(h-=x),h<0&&e.params.paginationType!=="bullets"&&(h=x+h)):typeof e.snapIndex<"u"?h=e.snapIndex:h=e.activeIndex||0,w.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const S=e.pagination.bullets;let C,N,b;if(w.dynamicBullets&&(a=S.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),m.css(e.isHorizontal()?"width":"height",`${a*(w.dynamicMainBullets+4)}px`),w.dynamicMainBullets>1&&e.previousIndex!==void 0&&(o+=h-(e.previousIndex-e.loopedSlides||0),o>w.dynamicMainBullets-1?o=w.dynamicMainBullets-1:o<0&&(o=0)),C=Math.max(h-o,0),N=C+(Math.min(S.length,w.dynamicMainBullets)-1),b=(N+C)/2),S.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(R=>`${w.bulletActiveClass}${R}`).join(" ")),m.length>1)S.each(R=>{const T=L(R),k=T.index();k===h&&T.addClass(w.bulletActiveClass),w.dynamicBullets&&(k>=C&&k<=N&&T.addClass(`${w.bulletActiveClass}-main`),k===C&&l(T,"prev"),k===N&&l(T,"next"))});else{const R=S.eq(h),T=R.index();if(R.addClass(w.bulletActiveClass),w.dynamicBullets){const k=S.eq(C),z=S.eq(N);for(let V=C;V<=N;V+=1)S.eq(V).addClass(`${w.bulletActiveClass}-main`);if(e.params.loop)if(T>=S.length){for(let V=w.dynamicMainBullets;V>=0;V-=1)S.eq(S.length-V).addClass(`${w.bulletActiveClass}-main`);S.eq(S.length-w.dynamicMainBullets-1).addClass(`${w.bulletActiveClass}-prev`)}else l(k,"prev"),l(z,"next");else l(k,"prev"),l(z,"next")}}if(w.dynamicBullets){const R=Math.min(S.length,w.dynamicMainBullets+4),T=(a*R-a)/2-b*a,k=v?"right":"left";S.css(e.isHorizontal()?k:"top",`${T}px`)}}if(w.type==="fraction"&&(m.find(wn(w.currentClass)).text(w.formatFractionCurrent(h+1)),m.find(wn(w.totalClass)).text(w.formatFractionTotal(x))),w.type==="progressbar"){let S;w.progressbarOpposite?S=e.isHorizontal()?"vertical":"horizontal":S=e.isHorizontal()?"horizontal":"vertical";const C=(h+1)/x;let N=1,b=1;S==="horizontal"?N=C:b=C,m.find(wn(w.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${N}) scaleY(${b})`).transition(e.params.speed)}w.type==="custom"&&w.renderCustom?(m.html(w.renderCustom(e,h+1,x)),r("paginationRender",m[0])):r("paginationUpdate",m[0]),e.params.watchOverflow&&e.enabled&&m[e.isLocked?"addClass":"removeClass"](w.lockClass)}function c(){const v=e.params.pagination;if(s())return;const w=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,p=e.pagination.$el;let m="";if(v.type==="bullets"){let h=e.params.loop?Math.ceil((w-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&h>w&&(h=w);for(let x=0;x<h;x+=1)v.renderBullet?m+=v.renderBullet.call(e,x,v.bulletClass):m+=`<${v.bulletElement} class="${v.bulletClass}"></${v.bulletElement}>`;p.html(m),e.pagination.bullets=p.find(wn(v.bulletClass))}v.type==="fraction"&&(v.renderFraction?m=v.renderFraction.call(e,v.currentClass,v.totalClass):m=`<span class="${v.currentClass}"></span> / <span class="${v.totalClass}"></span>`,p.html(m)),v.type==="progressbar"&&(v.renderProgressbar?m=v.renderProgressbar.call(e,v.progressbarFillClass):m=`<span class="${v.progressbarFillClass}"></span>`,p.html(m)),v.type!=="custom"&&r("paginationRender",e.pagination.$el[0])}function f(){e.params.pagination=Fp(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const v=e.params.pagination;if(!v.el)return;let w=L(v.el);w.length!==0&&(e.params.uniqueNavElements&&typeof v.el=="string"&&w.length>1&&(w=e.$el.find(v.el),w.length>1&&(w=w.filter(p=>L(p).parents(".swiper")[0]===e.el))),v.type==="bullets"&&v.clickable&&w.addClass(v.clickableClass),w.addClass(v.modifierClass+v.type),w.addClass(e.isHorizontal()?v.horizontalClass:v.verticalClass),v.type==="bullets"&&v.dynamicBullets&&(w.addClass(`${v.modifierClass}${v.type}-dynamic`),o=0,v.dynamicMainBullets<1&&(v.dynamicMainBullets=1)),v.type==="progressbar"&&v.progressbarOpposite&&w.addClass(v.progressbarOppositeClass),v.clickable&&w.on("click",wn(v.bulletClass),function(m){m.preventDefault();let h=L(this).index()*e.params.slidesPerGroup;e.params.loop&&(h+=e.loopedSlides),e.slideTo(h)}),Object.assign(e.pagination,{$el:w,el:w[0]}),e.enabled||w.addClass(v.lockClass))}function d(){const v=e.params.pagination;if(s())return;const w=e.pagination.$el;w.removeClass(v.hiddenClass),w.removeClass(v.modifierClass+v.type),w.removeClass(e.isHorizontal()?v.horizontalClass:v.verticalClass),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(v.bulletActiveClass),v.clickable&&w.off("click",wn(v.bulletClass))}n("init",()=>{e.params.pagination.enabled===!1?y():(f(),c(),u())}),n("activeIndexChange",()=>{(e.params.loop||typeof e.snapIndex>"u")&&u()}),n("snapIndexChange",()=>{e.params.loop||u()}),n("slidesLengthChange",()=>{e.params.loop&&(c(),u())}),n("snapGridLengthChange",()=>{e.params.loop||(c(),u())}),n("destroy",()=>{d()}),n("enable disable",()=>{const{$el:v}=e.pagination;v&&v[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)}),n("lock unlock",()=>{u()}),n("click",(v,w)=>{const p=w.target,{$el:m}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&m&&m.length>0&&!L(p).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&p===e.navigation.nextEl||e.navigation.prevEl&&p===e.navigation.prevEl))return;const h=m.hasClass(e.params.pagination.hiddenClass);r(h===!0?"paginationShow":"paginationHide"),m.toggleClass(e.params.pagination.hiddenClass)}});const g=()=>{e.$el.removeClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass),f(),c(),u()},y=()=>{e.$el.addClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass),d()};Object.assign(e.pagination,{enable:g,disable:y,render:c,update:u,init:f,destroy:d})}function Py(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:a,overwriteParams:o,perspective:s,recreateShadows:l,getEffectParams:u}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),s&&s()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const f=o?o():{};Object.assign(n.params,f),Object.assign(n.originalParams,f)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(f,d)=>{n.params.effect===t&&a(d)}),r("transitionEnd",()=>{if(n.params.effect===t&&l){if(!u||!u().slideShadows)return;n.slides.each(f=>{n.$(f).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()}),l()}});let c;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(c=!0),requestAnimationFrame(()=>{c&&n.slides&&n.slides.length&&(i(),c=!1)}))})}function _y(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function Mc(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}`,i=e.transformEl?t.find(e.transformEl):t;let a=i.children(`.${r}`);return a.length||(a=L(`<div class="swiper-slide-shadow${n?`-${n}`:""}"></div>`),i.append(a)),a}function Ny({swiper:e,extendParams:t,on:n}){t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),Py({effect:"coverflow",swiper:e,on:n,setTranslate:()=>{const{width:a,height:o,slides:s,slidesSizesGrid:l}=e,u=e.params.coverflowEffect,c=e.isHorizontal(),f=e.translate,d=c?-f+a/2:-f+o/2,g=c?u.rotate:-u.rotate,y=u.depth;for(let v=0,w=s.length;v<w;v+=1){const p=s.eq(v),m=l[v],h=p[0].swiperSlideOffset,x=(d-h-m/2)/m,S=typeof u.modifier=="function"?u.modifier(x):x*u.modifier;let C=c?g*S:0,N=c?0:g*S,b=-y*Math.abs(S),R=u.stretch;typeof R=="string"&&R.indexOf("%")!==-1&&(R=parseFloat(u.stretch)/100*m);let T=c?0:R*S,k=c?R*S:0,z=1-(1-u.scale)*Math.abs(S);Math.abs(k)<.001&&(k=0),Math.abs(T)<.001&&(T=0),Math.abs(b)<.001&&(b=0),Math.abs(C)<.001&&(C=0),Math.abs(N)<.001&&(N=0),Math.abs(z)<.001&&(z=0);const V=`translate3d(${k}px,${T}px,${b}px)  rotateX(${N}deg) rotateY(${C}deg) scale(${z})`;if(_y(u,p).transform(V),p[0].style.zIndex=-Math.abs(Math.round(S))+1,u.slideShadows){let Ce=c?p.find(".swiper-slide-shadow-left"):p.find(".swiper-slide-shadow-top"),Ee=c?p.find(".swiper-slide-shadow-right"):p.find(".swiper-slide-shadow-bottom");Ce.length===0&&(Ce=Mc(u,p,c?"left":"top")),Ee.length===0&&(Ee=Mc(u,p,c?"right":"bottom")),Ce.length&&(Ce[0].style.opacity=S>0?S:0),Ee.length&&(Ee[0].style.opacity=-S>0?-S:0)}}},setTransition:a=>{const{transformEl:o}=e.params.coverflowEffect;(o?e.slides.find(o):e.slides).transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function hn(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Mt(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:hn(t[r])&&hn(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Mt(e[r],t[r]):e[r]=t[r]})}function Vp(e={}){return e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Bp(e={}){return e.pagination&&typeof e.pagination.el>"u"}function Hp(e={}){return e.scrollbar&&typeof e.scrollbar.el>"u"}function Up(e=""){const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}const Wp=["modules","init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopedSlidesLimit","_loopFillGroupWithBlank","loopPreventsSlide","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"];function Oy(e={},t=!0){const n={on:{}},r={},i={};Mt(n,Kn.defaults),Mt(n,Kn.extendedDefaults),n._emitClasses=!0,n.init=!1;const a={},o=Wp.map(l=>l.replace(/_/,"")),s=Object.assign({},e);return Object.keys(s).forEach(l=>{typeof e[l]>"u"||(o.indexOf(l)>=0?hn(e[l])?(n[l]={},i[l]={},Mt(n[l],e[l]),Mt(i[l],e[l])):(n[l]=e[l],i[l]=e[l]):l.search(/on[A-Z]/)===0&&typeof e[l]=="function"?t?r[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=e[l]:a[l]=e[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:a,events:r}}function zy({el:e,nextEl:t,prevEl:n,paginationEl:r,scrollbarEl:i,swiper:a},o){Vp(o)&&t&&n&&(a.params.navigation.nextEl=t,a.originalParams.navigation.nextEl=t,a.params.navigation.prevEl=n,a.originalParams.navigation.prevEl=n),Bp(o)&&r&&(a.params.pagination.el=r,a.originalParams.pagination.el=r),Hp(o)&&i&&(a.params.scrollbar.el=i,a.originalParams.scrollbar.el=i),a.init(e)}const Gp=(e,t)=>{let n=t.slidesPerView;if(t.breakpoints){const i=Kn.prototype.getBreakpoint(t.breakpoints),a=i in t.breakpoints?t.breakpoints[i]:void 0;a&&a.slidesPerView&&(n=a.slidesPerView)}let r=Math.ceil(parseFloat(t.loopedSlides||n,10));return r+=t.loopAdditionalSlides,r>e.length&&t.loopedSlidesLimit&&(r=e.length),r};function Ly(e,t,n){const r=t.map((l,u)=>ee.cloneElement(l,{swiper:e,"data-swiper-slide-index":u}));function i(l,u,c){return ee.cloneElement(l,{key:`${l.key}-duplicate-${u}-${c}`,className:`${l.props.className||""} ${n.slideDuplicateClass}`})}if(n.loopFillGroupWithBlank){const l=n.slidesPerGroup-r.length%n.slidesPerGroup;if(l!==n.slidesPerGroup)for(let u=0;u<l;u+=1){const c=ee.createElement("div",{className:`${n.slideClass} ${n.slideBlankClass}`});r.push(c)}}n.slidesPerView==="auto"&&!n.loopedSlides&&(n.loopedSlides=r.length);const a=Gp(r,n),o=[],s=[];for(let l=0;l<a;l+=1){const u=l-Math.floor(l/r.length)*r.length;s.push(i(r[u],l,"append")),o.unshift(i(r[r.length-u-1],l,"prepend"))}return e&&(e.loopedSlides=a),[...o,...r,...s]}function My(e,t,n,r,i){const a=[];if(!t)return a;const o=l=>{a.indexOf(l)<0&&a.push(l)};if(n&&r){const l=r.map(i),u=n.map(i);l.join("")!==u.join("")&&o("children"),r.length!==n.length&&o("children")}return Wp.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in e&&l in t)if(hn(e[l])&&hn(t[l])){const u=Object.keys(e[l]),c=Object.keys(t[l]);u.length!==c.length?o(l):(u.forEach(f=>{e[l][f]!==t[l][f]&&o(l)}),c.forEach(f=>{e[l][f]!==t[l][f]&&o(l)}))}else e[l]!==t[l]&&o(l)}),a}function Yp(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Xp(e){const t=[];return ee.Children.toArray(e).forEach(n=>{Yp(n)?t.push(n):n.props&&n.props.children&&Xp(n.props.children).forEach(r=>t.push(r))}),t}function Iy(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return ee.Children.toArray(e).forEach(r=>{if(Yp(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=Xp(r.props.children);i.length>0?i.forEach(a=>t.push(a)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function Ay({swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:i,prevEl:a,scrollbarEl:o,paginationEl:s}){const l=r.filter(S=>S!=="children"&&S!=="direction"),{params:u,pagination:c,navigation:f,scrollbar:d,virtual:g,thumbs:y}=e;let v,w,p,m,h;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&u.thumbs&&!u.thumbs.swiper&&(v=!0),r.includes("controller")&&n.controller&&n.controller.control&&u.controller&&!u.controller.control&&(w=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||s)&&(u.pagination||u.pagination===!1)&&c&&!c.el&&(p=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||o)&&(u.scrollbar||u.scrollbar===!1)&&d&&!d.el&&(m=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||a)&&(n.navigation.nextEl||i)&&(u.navigation||u.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(h=!0);const x=S=>{e[S]&&(e[S].destroy(),S==="navigation"?(u[S].prevEl=void 0,u[S].nextEl=void 0,e[S].prevEl=void 0,e[S].nextEl=void 0):(u[S].el=void 0,e[S].el=void 0))};l.forEach(S=>{if(hn(u[S])&&hn(n[S]))Mt(u[S],n[S]);else{const C=n[S];(C===!0||C===!1)&&(S==="navigation"||S==="pagination"||S==="scrollbar")?C===!1&&x(S):u[S]=n[S]}}),l.includes("controller")&&!w&&e.controller&&e.controller.control&&u.controller&&u.controller.control&&(e.controller.control=u.controller.control),r.includes("children")&&t&&g&&u.virtual.enabled?(g.slides=t,g.update(!0)):r.includes("children")&&e.lazy&&e.params.lazy.enabled&&e.lazy.load(),v&&y.init()&&y.update(!0),w&&(e.controller.control=u.controller.control),p&&(s&&(u.pagination.el=s),c.init(),c.render(),c.update()),m&&(o&&(u.scrollbar.el=o),d.init(),d.updateSize(),d.setTranslate()),h&&(i&&(u.navigation.nextEl=i),a&&(u.navigation.prevEl=a),f.init(),f.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),e.update()}function $y(e,t,n){if(!n)return null;const r=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`};return t.filter((i,a)=>a>=n.from&&a<=n.to).map(i=>ee.cloneElement(i,{swiper:e,style:r}))}const jy=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function Er(e,t){return typeof window>"u"?j.useEffect(e,t):j.useLayoutEffect(e,t)}const Ry=j.createContext(null),Dy=j.createContext(null);function Il(){return Il=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Il.apply(this,arguments)}const Qp=j.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:a,onSwiper:o,...s}=e===void 0?{}:e,l=!1;const[u,c]=j.useState("swiper"),[f,d]=j.useState(null),[g,y]=j.useState(!1),v=j.useRef(!1),w=j.useRef(null),p=j.useRef(null),m=j.useRef(null),h=j.useRef(null),x=j.useRef(null),S=j.useRef(null),C=j.useRef(null),N=j.useRef(null),{params:b,passedParams:R,rest:T,events:k}=Oy(s),{slides:z,slots:V}=Iy(a),he=()=>{y(!g)};Object.assign(b.on,{_containerClasses(P,$){c($)}});const Ce=()=>{if(Object.assign(b.on,k),l=!0,p.current=new Kn(b),p.current.loopCreate=()=>{},p.current.loopDestroy=()=>{},b.loop&&(p.current.loopedSlides=Gp(z,b)),p.current.virtual&&p.current.params.virtual.enabled){p.current.virtual.slides=z;const P={cache:!1,slides:z,renderExternal:d,renderExternalUpdate:!1};Mt(p.current.params.virtual,P),Mt(p.current.originalParams.virtual,P)}};w.current||Ce(),p.current&&p.current.on("_beforeBreakpoint",he);const Ee=()=>{l||!k||!p.current||Object.keys(k).forEach(P=>{p.current.on(P,k[P])})},st=()=>{!k||!p.current||Object.keys(k).forEach(P=>{p.current.off(P,k[P])})};j.useEffect(()=>()=>{p.current&&p.current.off("_beforeBreakpoint",he)}),j.useEffect(()=>{!v.current&&p.current&&(p.current.emitSlidesClasses(),v.current=!0)}),Er(()=>{if(t&&(t.current=w.current),!!w.current)return p.current.destroyed&&Ce(),zy({el:w.current,nextEl:x.current,prevEl:S.current,paginationEl:C.current,scrollbarEl:N.current,swiper:p.current},b),o&&o(p.current),()=>{p.current&&!p.current.destroyed&&p.current.destroy(!0,!1)}},[]),Er(()=>{Ee();const P=My(R,m.current,z,h.current,$=>$.key);return m.current=R,h.current=z,P.length&&p.current&&!p.current.destroyed&&Ay({swiper:p.current,slides:z,passedParams:R,changedParams:P,nextEl:x.current,prevEl:S.current,scrollbarEl:N.current,paginationEl:C.current}),()=>{st()}}),Er(()=>{jy(p.current)},[f]);function E(){return b.virtual?$y(p.current,z,f):!b.loop||p.current&&p.current.destroyed?z.map(P=>ee.cloneElement(P,{swiper:p.current})):Ly(p.current,z,b)}return ee.createElement(r,Il({ref:w,className:Up(`${u}${n?` ${n}`:""}`)},T),ee.createElement(Dy.Provider,{value:p.current},V["container-start"],ee.createElement(i,{className:"swiper-wrapper"},V["wrapper-start"],E(),V["wrapper-end"]),Vp(b)&&ee.createElement(ee.Fragment,null,ee.createElement("div",{ref:S,className:"swiper-button-prev"}),ee.createElement("div",{ref:x,className:"swiper-button-next"})),Hp(b)&&ee.createElement("div",{ref:N,className:"swiper-scrollbar"}),Bp(b)&&ee.createElement("div",{ref:C,className:"swiper-pagination"}),V["container-end"]))});Qp.displayName="Swiper";function Al(){return Al=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Al.apply(this,arguments)}const Us=j.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:a,zoom:o,virtualIndex:s,...l}=e===void 0?{}:e;const u=j.useRef(null),[c,f]=j.useState("swiper-slide");function d(v,w,p){w===u.current&&f(p)}Er(()=>{if(t&&(t.current=u.current),!(!u.current||!a)){if(a.destroyed){c!=="swiper-slide"&&f("swiper-slide");return}return a.on("_slideClass",d),()=>{a&&a.off("_slideClass",d)}}}),Er(()=>{a&&u.current&&!a.destroyed&&f(a.getSlideClasses(u.current))},[a]);const g={isActive:c.indexOf("swiper-slide-active")>=0||c.indexOf("swiper-slide-duplicate-active")>=0,isVisible:c.indexOf("swiper-slide-visible")>=0,isDuplicate:c.indexOf("swiper-slide-duplicate")>=0,isPrev:c.indexOf("swiper-slide-prev")>=0||c.indexOf("swiper-slide-duplicate-prev")>=0,isNext:c.indexOf("swiper-slide-next")>=0||c.indexOf("swiper-slide-duplicate-next")>=0},y=()=>typeof r=="function"?r(g):r;return ee.createElement(n,Al({ref:u,className:Up(`${c}${i?` ${i}`:""}`),"data-swiper-slide-index":s},l),ee.createElement(Ry.Provider,{value:g},o?ee.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},y()):y()))});Us.displayName="SwiperSlide";const Fy=({videos:e,campaigns:t})=>{const[n,r]=j.useState(null),i=o=>{r(o)},a=()=>{r(null)};return O.jsxs("div",{className:"container",children:[O.jsxs(Qp,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:0,stretch:0,depth:100,modifier:2.5},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",clickable:!0},modules:[Ny,Ty,Ey],className:"swiper_container",children:[e.map((o,s)=>O.jsx(O.Fragment,{children:O.jsx(Us,{onClick:()=>i(s),children:O.jsxs("div",{className:"video-container",children:[O.jsx("video",{src:o,loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"}),O.jsx("div",{className:"carousel-div",children:O.jsxs("p",{className:"txt2",children:[t[s].campaignName," ",O.jsx("br",{})," From"," ",t[s].offerPrice.currency,t[s].offerPrice.price]})})]})},s)})),O.jsxs("div",{className:"slider-controler",children:[O.jsx("div",{className:"swiper-button-prev slider-arrow",children:O.jsx("ion-icon",{name:"arrow-back-outline"})}),O.jsx("div",{className:"swiper-button-next slider-arrow",children:O.jsx("ion-icon",{name:"arrow-forward-outline"})}),O.jsx("div",{className:"swiper-pagination"})]})]}),n!==null&&O.jsx(Vy,{campaigns:t,currentIndex:n,onClose:a})]})},Vy=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=j.useState(t),[a,o]=j.useState(0),[s,l]=j.useState({}),[u,c]=j.useState(!1),[f,d]=j.useState(!1),[g,y]=j.useState(null),[v,w]=j.useState(!1),p=j.useRef([]),m=j.useRef(null),h=j.useRef(null),x=window.innerWidth<=450;j.useEffect(()=>{const E=new IntersectionObserver(P=>{P.forEach($=>{const W=p.current.indexOf($.target);$.isIntersecting?($.target.play(),o(W)):$.target.pause()})},{threshold:.5});return p.current.forEach(P=>{P&&E.observe(P)}),()=>{p.current.forEach(P=>{P&&E.unobserve(P)})}},[r]),j.useEffect(()=>{const E=p.current[a];E&&E.play()},[a]);const S=()=>{const E=(r+1)%e.length;o(0),i(E),d(!1),clearTimeout(m.current)},C=()=>{const E=(r-1+e.length)%e.length;i(E),o(0),d(!1),clearTimeout(m.current)},N=E=>{const P=p.current[E];P&&(P.paused?P.play():P.pause(),c(P.paused))},b=E=>{const P=p.current[E];P&&(P.muted=!P.muted,l($=>({...$,[E]:P.muted})))},R=E=>{clearTimeout(m.current)},T=(E,P)=>{E===0&&(y(P.duration),k(P.duration))},k=E=>{clearTimeout(m.current),m.current=setTimeout(()=>{d(!0),setTimeout(()=>{d(!1)},1e4)},E*1e3)},z=E=>{clearTimeout(m.current),E===0&&g&&k(g)},V=()=>{clearTimeout(m.current)},he=()=>{w(!v)},Ce=E=>{const P=E.split(`
`),$=P.slice(0,2).join(" ");return P.length>3?`${$}...`:$},Ee=()=>{x&&h.current&&(h.current.requestFullscreen?h.current.requestFullscreen():h.current.mozRequestFullScreen?h.current.mozRequestFullScreen():h.current.webkitRequestFullscreen?h.current.webkitRequestFullscreen():h.current.msRequestFullscreen&&h.current.msRequestFullscreen())},st=()=>{document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()};return j.useEffect(()=>{Ee();const E=()=>{document.fullscreenElement||n()};return document.addEventListener("fullscreenchange",E),()=>{document.removeEventListener("fullscreenchange",E),document.fullscreenElement&&st()}},[n]),O.jsxs("div",{ref:h,className:"whole",children:[O.jsx("div",{className:"prevbtn",onClick:C,children:O.jsx(Ie,{icon:ep})}),O.jsx("div",{className:"closediv",children:O.jsx("button",{className:"closebtn",onClick:n,children:O.jsx(Ie,{icon:Jd})})}),O.jsx("div",{className:"reelsContainer",children:e[r].videoId.map((E,P)=>O.jsx(Us,{children:O.jsxs("div",{className:"reel",children:[O.jsxs("div",{className:"video-container",children:[O.jsx("video",{ref:$=>p.current[P]=$,src:E,className:"ad",loop:!0,playsInline:!0,controls:!1,autoPlay:P===a,onClick:()=>N(P),onPause:()=>{V(),c(!0)},onPlay:()=>{z(P),c(!1)},onEnded:()=>R(),onLoadedMetadata:$=>T(P,$.target)}),u&&O.jsx(Ie,{icon:bv,onClick:()=>N(P),className:"play-button"}),P===0&&f&&O.jsx(Ie,{icon:faAnglesDown,bounce:!0,className:"down-arrow"})]}),O.jsx("div",{className:"functions",children:O.jsx(Ie,{icon:s[P]?Zd:qd,className:"volume",onClick:()=>b(P),style:{cursor:"pointer"}})}),O.jsxs("div",{className:"bookdiv",children:[O.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"}),O.jsxs("div",{className:"text",children:[O.jsx("p",{className:"hotelname",children:e[r].campaignName}),O.jsxs("p",{className:"offer",children:[v?e[r].campaignDetails:Ce(e[r].campaignDetails),O.jsx("br",{}),O.jsx("span",{className:"view-more",onClick:he,children:v?" View Less":" View More"})]}),O.jsxs("h2",{className:"offerprice",children:["From ",e[r].offerPrice.currency,e[r].offerPrice.price]})]}),O.jsx("div",{className:"divbtn",children:O.jsx("a",{href:e[r].campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]},P)}))}),O.jsx("div",{className:"nextbtn",onClick:S,children:O.jsx(Ie,{icon:Kd})})]})},Ic=()=>{const[e,t]=j.useState([]),[n,r]=j.useState([]);return j.useEffect(()=>{new URLSearchParams(window.location.search),(async o=>{try{const l=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${o}`)).json(),u=l.campaigns.map(c=>c.videoId[0]);t(u),r(l.campaigns)}catch(s){console.error("Error fetching data:",s)}})("24c5e580-0291-1fb8-b7ef-97cd6d3971a2")},[]),O.jsxs("div",{className:"App",children:[O.jsx("style",{children:`
        .swiper-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* background: red; */
  height: auto;
  display: flex;
  width: auto !important;
  max-width: 100% !important;
  justify-content: center;
  align-items: center;
}



.swiper-wrapper {
  /* transform: translate3d(0px, 0px, 0px);
  transition-duration: 0ms;
  width: 3118px;
  display: flex;
  align-items: center;
  place-content: center;
  transition-delay: 0ms;
  align-content: center;
  justify-content: flex-start; */




  display: flex;
  width: 3118px;
  transform: translate3d(-779.5px, 0px, 0px);
  transition-duration: 0ms;
  transition-delay: 0ms;
  align-content: center;
  align-items: flex-end;
}



/* .swiper swiper-initialized swiper-horizontal swiper-grid swiper-backface-hidden mySwiper{
  display: flex;
  align-items: center;
  justify-content: center;
} */


.swiper-3d .swiper-slide-shadow-left {
  background-color: transparent !important;
}

.swiper-3d .swiper-slide-shadow-right {
  background-color: transparent !important;
}


.carousel-div {
  min-width: 100%;
  /* background-color: rgba(234, 227, 227, 0.212); */
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.199), rgba(0, 0, 0, 0.884));
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  height: 15%;
  bottom: 61px;
  border-radius: 20px;
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

.video-container {
  width: 100%;
  height: 100%;
  margin-top: 100px;
}


.video-container2 {
  margin-top: 20px;
}

.vid {
  width: 100%;
  height: auto;
}

.down-arrow {
  position: absolute;
  top: 67%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10vh;
  color: white;
  pointer-events: none;
  /* So the icon does not block clicks on the video */
}

.play-button {
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
  overflow: hidden;
  left: 2.5%;
  width: 95%;
  /* Ensure the carousel container has a fixed width */
}

.carousel {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  /* Smooth scrolling */
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.carousel::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, and Opera */
}

.vid {
  border-radius: 20px;
   box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.75); 
  width: 100%;
  object-fit: cover;
}

.video-container {
  object-fit: cover;
  max-width: 230px;
  // flex: 0 0 calc(20% - 10px);
  /* Adjust the width to fit 5 videos with a gap */
  margin-right: 10px;
  /* Adjust the gap between videos */
}

.video-container:last-child {
  margin-right: 0;
  /* Remove margin from the last video to prevent unnecessary gap */
}


.nextbtn,
.prevbtn {
  color: white;
  background-color: transparent;
  z-index: 1000;
  border: none;
  font-size: 7vh;

}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .video-container {
    flex: 0 0 calc(25% - 10px);
    /* Adjust to 4 videos per view */
  }
}

@media (max-width: 900px) {
  .video-container {
    flex: 0 0 calc(33.33% - 10px);
    /* Adjust to 3 videos per view */
  }
}

@media (max-width: 600px) {
  .video-container {
    flex: 0 0 calc(50% - 10px);
    /* Adjust to 2 videos per view */
  }
}

@media (max-width: 400px) {
  .video-container {
    flex: 0 0 calc(100% - 10px);
    /* Adjust to 1 video per view */
  }
}

.whole {
  pointer-events: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgb(62, 61, 61);
  display: flex;
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
  /* width: 100%; */
  width: 84%;
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
  left: 50%;
  /* Move the div to the center horizontally */
  transform: translateX(-50%);
  /* Adjust the position to center */
  width: 56vh;
  height: 15vh;
  z-index: 10;
  background-color: transparent;
  display: grid;
}

.functions {
  position: absolute;
  bottom: 20%;
  left: 50%;
  /* Move the div to the center horizontally */
  transform: translateX(-50%);
  /* Adjust the position to center */
  width: 56vh;
  height: 15vh;

  display: grid;

}

.bookdiv {
  position: absolute;
  bottom: 1.5%;
  left: 50%;
  /* Move the div to the center horizontally */
  transform: translateX(-50%);
  /* Adjust the position to center */
  width: 53vh;
  min-height: 15vh;
  background-color: rgba(255, 255, 255, 0.863);
  border-radius: 10px;
  display: flex;
}

.img {
  position: absolute;
  top: 50%;
  /* Move the div to the center horizontally */
  transform: translateY(-50%);
  left: 4%;
  width: 22%;
  height: 80%;
  border-radius: 10px;
}

.divbtn {
  width: 20vh;
  min-height: 100%;
  position: absolute;
  right: 0px;

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

.text {
  display: block;
  position: relative;

  cursor: pointer;
  width: 45%;
  right: -15vh;
}

.hotelname {
  position: relative;
  top: 1vh;
  color: black;
  padding-left: 0vh;
  font-weight: bolder;
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  font-size: 2.2vh;
}

.offer {
  position: relative;
  color: black;
  top: 1vh;

  padding-left: 0vh;
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  font-size: 1.8vh;
}

.view-more {
  font-size: 1.6vh;
  color: rgb(114, 94, 205);
  position: relative;
  top: -0.5vh;
  cursor: pointer;
}

.offerprice {
  position: relative;
  top: 1vh;
  color: black;
  padding-left: 0vh;
  font-weight: bold;
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  font-size: 2vh;
}

.volume {
  position: absolute;
  right: 4%;
  top: 1vh;
  font-size: 3vh;
  color: white;
}

.closebtn {
  position: absolute;
  right: 2%;
  font-size: 5vh;
  color: white;
  background-color: transparent;
  border: none;
  /* Remove button border */
  padding: 0;
  /* Remove button padding */
  cursor: pointer;
  /* Add pointer cursor */
  z-index: 1000;
  outline: none;
  /* Remove focus outline */
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
    pointer-events: none;
    /* So the icon does not block clicks on the video */
  }

  .carousel-container {
    position: relative;
    overflow: hidden;
    left: 2.5%;
    width: 95vw;

    max-height: 408px;
    min-height: 300px;
  }

  .carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    /* Smooth scrolling */
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
    max-height: 408px;
    min-height: 300px;
  }

  .carousel::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari, and Opera */
  }

  .vid {
    border-radius: 20px;
    /* box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.75); */
    width: 100%;
    object-fit: cover;
  }

  .video-container {


    min-width: 200px;
    max-width: 230px;

    object-fit: cover;
    border-radius: 20px;
    flex: 0 0 calc(20% - 10px);
    /* Adjust the width to fit 5 videos with a gap */
    margin-right: 10px;
    /* Adjust the gap between videos */
  }

  .whole {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    /* background-color: rgba(0, 0, 0, 0.831); */
    /* semi-transparent black */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .reelsContainer {
    height: 100vh;
    width: 100vw;
    /* Ensure the reelsContainer takes the full width of the viewport */
    overflow: auto;
    flex-direction: column;
    scroll-snap-type: y mandatory;
    position: relative;
  }

  .reel {
    height: 100%;
    width: 100%;
    /* Ensure each reel takes the full width of the viewport */
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

  .nextbtn,
  .prevbtn {

    color: white;
    z-index: 1000;
    border: none;
    font-size: 10vw;
    position: absolute;

  }

  .nextbtn {
    right: 0px;
  }

  .prevbtn {
    left: 0px;
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
    left: 50%;
    /* Move the div to the center horizontally */
    transform: translateX(-50%);
    /* Adjust the position to center */
    width: 100%;
    min-height: 15vh;
    background-color: rgba(255, 255, 255, 0.863);
    border-radius: 10px;
    display: flex;
  }

  .img {
    position: absolute;
    top: 50%;
    /* Move the div to the center horizontally */
    transform: translateY(-50%);
    left: 4%;
    width: 22%;
    height: 80%;
    border-radius: 10px;
  }

  .divbtn {
    width: 20vh;
    min-height: 100%;
    position: absolute;
    right: 0px;

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

  .text {
    display: block;
    position: relative;

    cursor: pointer;
    width: 40%;
    right: -15vh;
  }

  .hotelname {
    position: relative;
    top: 1vh;
    color: black;
    padding-left: 0vh;
    font-weight: 700;
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    font-size: 2.2vh;
  }

  .offer {
    position: relative;
    color: black;
    top: 1vh;
    padding-left: 0vh;
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    font-size: 1.8vh;
  }

  .view-more {
    font-size: 1.6vh;
    color: rgb(114, 94, 205);
    position: relative;
    top: -0.5vh;
    cursor: pointer;
  }

  .offerprice {
    position: relative;
    top: 0vh;
    color: black;
    padding-left: 0vh;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    font-size: 2vh;
  }

  .volume {
    position: absolute;
    right: 0%;
    top: 3vh;
    font-size: 2.5vh;
  }

  .closebtn {
    position: absolute;
    right: 2%;
    font-size: 4vh;
    color: white;
    background-color: transparent;
    border: none;
    /* Remove button border */
    padding: 0;
    /* Remove button padding */
    cursor: pointer;
    /* Add pointer cursor */
    z-index: 1000;
    outline: none;
    /* Remove focus outline */
  }

}`}),O.jsx(Fy,{videos:e,campaigns:n})," "]})},Ac=({campaigns:e})=>{const t=j.useRef(null),[n,r]=j.useState(!1),[i,a]=j.useState(null),[o,s]=j.useState(0),[l,u]=j.useState(!1),[c,f]=j.useState(0),[d,g]=j.useState({}),[y,v]=j.useState(!1);j.useEffect(()=>{const k=t.current,z=()=>{v(k.paused),k.paused&&k.play()};return k&&(k.addEventListener("play",z),k.addEventListener("pause",z)),()=>{k&&(k.removeEventListener("play",z),k.removeEventListener("pause",z))}},[i,o,e]),j.useEffect(()=>{if(i!==null&&e[i]){const k=e[i];if(o<k.videoId.length){const z=k.videoId[o];t.current.src=z,t.current.play(),f(0),v(!1)}}},[i,o,e]),j.useEffect(()=>{const k=setInterval(()=>{t.current&&f(t.current.currentTime/t.current.duration*100)},100);return()=>clearInterval(k)},[o,i]),j.useEffect(()=>{t.current&&(t.current.muted=l)},[l]);const w=k=>{a(k),s(0)},p=()=>{if(g(k=>({...k,[`${i}-${o}`]:!0})),f(100),i!==null&&e[i]){const k=e[i];o+1<k.videoId.length?s(o+1):i+1<e.length?(a(i+1),s(0)):(a(null),s(0))}},m=()=>{i!==null?i+1<e.length?(a(i+1),s(0)):(a(0),s(0)):e.length>0&&(a(0),s(0))},h=()=>{i!==null?i>0?(a(i-1),s(0)):(a(e.length-1),s(0)):e.length>0&&(a(e.length-1),s(0))},x=()=>{i!==null&&e[i]&&o+1<e[i].videoId.length&&(g(k=>({...k,[`${i}-${o}`]:!0})),s(o+1))},S=()=>{i!==null&&e[i]&&o>0&&s(o-1)},C=()=>{u(k=>!k)},N=()=>{a(null),s(0),v(!1),u(!1)},b=k=>{const z=k.currentTarget.getBoundingClientRect(),V=k.clientX-z.left,he=z.width;V<he/2?S():x()},R=()=>{r(!n)},T=k=>{const z=k.split(`
`);return z.length>2?{truncated:z.slice(0,2).join(`
`),hasMore:!0}:{truncated:k,hasMore:!1}};return O.jsx(O.Fragment,{children:O.jsxs("div",{className:"storiesHeader",children:[O.jsx("div",{className:"outer",children:e.map((k,z)=>O.jsx("div",{onClick:()=>w(z),className:`inner ${i===z?"active":""} ${k.videoId.some((V,he)=>d[`${z}-${he}`])?"played":"not-played"}`,children:O.jsx("img",{src:k.campaignPhoto,alt:"Campaign",className:"campaign-photo"})},z))}),O.jsxs("div",{className:`topp ${i!==null?"active":""}`,children:[O.jsx("div",{className:"next",onClick:m,children:O.jsx(Ie,{icon:Kd})}),O.jsx("div",{className:"previous",onClick:h,children:O.jsx(Ie,{icon:ep})}),O.jsx("div",{className:"outer-box",children:i!==null&&O.jsxs("div",{className:"boxed-video",children:[O.jsx("div",{className:"mute-unmute",onClick:C,children:l?O.jsx(Ie,{icon:Zd}):O.jsx(Ie,{icon:qd})}),O.jsx("div",{className:"close-button",onClick:N,children:O.jsx(Ie,{className:"close",icon:Jd})}),O.jsx("div",{className:"progress-bar",children:e[i].videoId.map((k,z)=>O.jsx("div",{className:"progress",children:O.jsx("div",{className:"progress1",style:{width:`${z===o?c:d[`${i}-${z}`]?100:0}%`}})},z))}),O.jsx("video",{className:"boxed-video",ref:t,onClick:b,onEnded:p,autoPlay:!0,children:"Your browser does not support the video tag."}),O.jsxs("div",{className:"bookdiv",children:[O.jsx("div",{className:"img1",children:O.jsx("img",{className:"img",src:e[i].campaignPhoto,alt:"Campaign"})}),O.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[O.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[i].campaignName}),O.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[n?e[i].campaignDetails:T(e[i].campaignDetails).truncated,T(e[i].campaignDetails).hasMore&&O.jsx("div",{children:O.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:R,children:n?" View Less":" View More"})})]}),O.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[i].offerPrice.currency,e[i].offerPrice.price]})]}),O.jsx("div",{className:"divbtn",children:O.jsx("a",{href:e[i].hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]})})]})]})})};function By(){j.useState([]);const[e,t]=j.useState([]),[n,r]=j.useState("");j.useEffect(()=>{const a=document.getElementById("root"),o=a.dataset.campaignId,s=a.dataset.componentName;r(s),o?(async u=>{try{const f=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${u}`)).json();t(f.campaigns)}catch(c){console.error("Error fetching data:",c)}})(o):console.log("no campaign id found!")},[]);const i=()=>{switch(n){case"Stories":return O.jsx(Ac,{campaigns:e});case"Carosole":return O.jsx(Ic,{campaigns:e});case"both":return O.jsxs("div",{children:[O.jsx(Ic,{campaigns:e}),O.jsx(Ac,{campaigns:e})]});default:return O.jsx("div",{children:"No valid component type specified"})}};return O.jsxs("div",{className:"App1",children:[O.jsx("style",{children:` .root1 {
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
      }`}),i()]})}To.createRoot(document.getElementById("stories")).render(O.jsx(ee.StrictMode,{children:O.jsx(By,{})}));
