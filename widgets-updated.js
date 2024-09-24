(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function jc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fc={exports:{}},gs={},Dc={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=Symbol.for("react.element"),em=Symbol.for("react.portal"),tm=Symbol.for("react.fragment"),nm=Symbol.for("react.strict_mode"),rm=Symbol.for("react.profiler"),im=Symbol.for("react.provider"),sm=Symbol.for("react.context"),om=Symbol.for("react.forward_ref"),lm=Symbol.for("react.suspense"),am=Symbol.for("react.memo"),um=Symbol.for("react.lazy"),Ya=Symbol.iterator;function cm(e){return e===null||typeof e!="object"?null:(e=Ya&&e[Ya]||e["@@iterator"],typeof e=="function"?e:null)}var Rc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bc=Object.assign,$c={};function Kn(e,t,n){this.props=e,this.context=t,this.refs=$c,this.updater=n||Rc}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vc(){}Vc.prototype=Kn.prototype;function Rl(e,t,n){this.props=e,this.context=t,this.refs=$c,this.updater=n||Rc}var Bl=Rl.prototype=new Vc;Bl.constructor=Rl;Bc(Bl,Kn.prototype);Bl.isPureReactComponent=!0;var Xa=Array.isArray,Gc=Object.prototype.hasOwnProperty,$l={current:null},Hc={key:!0,ref:!0,__self:!0,__source:!0};function Uc(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Gc.call(t,r)&&!Hc.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Xr,type:e,key:s,ref:o,props:i,_owner:$l.current}}function fm(e,t){return{$$typeof:Xr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xr}function dm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Qa=/\/+/g;function Fs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?dm(""+e.key):t.toString(36)}function ki(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Xr:case em:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Fs(o,0):r,Xa(i)?(n="",e!=null&&(n=e.replace(Qa,"$&/")+"/"),ki(i,t,n,"",function(c){return c})):i!=null&&(Vl(i)&&(i=fm(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Qa,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Xa(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+Fs(s,l);o+=ki(s,t,n,a,i)}else if(a=cm(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+Fs(s,l++),o+=ki(s,t,n,a,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ri(e,t,n){if(e==null)return e;var r=[],i=0;return ki(e,r,"","",function(s){return t.call(n,s,i++)}),r}function pm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},Ci={transition:null},mm={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:Ci,ReactCurrentOwner:$l};function Wc(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:ri,forEach:function(e,t,n){ri(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ri(e,function(){t++}),t},toArray:function(e){return ri(e,function(t){return t})||[]},only:function(e){if(!Vl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Kn;B.Fragment=tm;B.Profiler=rm;B.PureComponent=Rl;B.StrictMode=nm;B.Suspense=lm;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mm;B.act=Wc;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Bc({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=$l.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Gc.call(t,a)&&!Hc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Xr,type:e.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(e){return e={$$typeof:sm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:im,_context:e},e.Consumer=e};B.createElement=Uc;B.createFactory=function(e){var t=Uc.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:om,render:e}};B.isValidElement=Vl;B.lazy=function(e){return{$$typeof:um,_payload:{_status:-1,_result:e},_init:pm}};B.memo=function(e,t){return{$$typeof:am,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Ci.transition;Ci.transition={};try{e()}finally{Ci.transition=t}};B.unstable_act=Wc;B.useCallback=function(e,t){return xe.current.useCallback(e,t)};B.useContext=function(e){return xe.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};B.useEffect=function(e,t){return xe.current.useEffect(e,t)};B.useId=function(){return xe.current.useId()};B.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return xe.current.useMemo(e,t)};B.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};B.useRef=function(e){return xe.current.useRef(e)};B.useState=function(e){return xe.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return xe.current.useTransition()};B.version="18.3.1";Dc.exports=B;var M=Dc.exports;const q=jc(M);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm=M,gm=Symbol.for("react.element"),vm=Symbol.for("react.fragment"),ym=Object.prototype.hasOwnProperty,wm=hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xm={key:!0,ref:!0,__self:!0,__source:!0};function Yc(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)ym.call(t,r)&&!xm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:gm,type:e,key:s,ref:o,props:i,_owner:wm.current}}gs.Fragment=vm;gs.jsx=Yc;gs.jsxs=Yc;Fc.exports=gs;var b=Fc.exports,Di={},Xc={exports:{}},Le={},Qc={exports:{}},Kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,j){var F=O.length;O.push(j);e:for(;0<F;){var K=F-1>>>1,re=O[K];if(0<i(re,j))O[K]=j,O[F]=re,F=K;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var j=O[0],F=O.pop();if(F!==j){O[0]=F;e:for(var K=0,re=O.length,ti=re>>>1;K<ti;){var Qt=2*(K+1)-1,js=O[Qt],Kt=Qt+1,ni=O[Kt];if(0>i(js,F))Kt<re&&0>i(ni,js)?(O[K]=ni,O[Kt]=F,K=Kt):(O[K]=js,O[Qt]=F,K=Qt);else if(Kt<re&&0>i(ni,F))O[K]=ni,O[Kt]=F,K=Kt;else break e}}return j}function i(O,j){var F=O.sortIndex-j.sortIndex;return F!==0?F:O.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],c=[],d=1,p=null,h=3,g=!1,v=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var j=n(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=O)r(c),j.sortIndex=j.expirationTime,t(a,j);else break;j=n(c)}}function w(O){if(y=!1,m(O),!v)if(n(a)!==null)v=!0,se(x);else{var j=n(c);j!==null&&De(w,j.startTime-O)}}function x(O,j){v=!1,y&&(y=!1,u(C),C=-1),g=!0;var F=h;try{for(m(j),p=n(a);p!==null&&(!(p.expirationTime>j)||O&&!T());){var K=p.callback;if(typeof K=="function"){p.callback=null,h=p.priorityLevel;var re=K(p.expirationTime<=j);j=e.unstable_now(),typeof re=="function"?p.callback=re:p===n(a)&&r(a),m(j)}else r(a);p=n(a)}if(p!==null)var ti=!0;else{var Qt=n(c);Qt!==null&&De(w,Qt.startTime-j),ti=!1}return ti}finally{p=null,h=F,g=!1}}var A=!1,z=null,C=-1,I=5,S=-1;function T(){return!(e.unstable_now()-S<I)}function k(){if(z!==null){var O=e.unstable_now();S=O;var j=!0;try{j=z(!0,O)}finally{j?P():(A=!1,z=null)}}else A=!1}var P;if(typeof f=="function")P=function(){f(k)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,V=D.port2;D.port1.onmessage=k,P=function(){V.postMessage(null)}}else P=function(){E(k,0)};function se(O){z=O,A||(A=!0,P())}function De(O,j){C=E(function(){O(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,se(x))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(O){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var F=h;h=j;try{return O()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,j){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var F=h;h=O;try{return j()}finally{h=F}},e.unstable_scheduleCallback=function(O,j,F){var K=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?K+F:K):F=K,O){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=F+re,O={id:d++,callback:j,priorityLevel:O,startTime:F,expirationTime:re,sortIndex:-1},F>K?(O.sortIndex=F,t(c,O),n(a)===null&&O===n(c)&&(y?(u(C),C=-1):y=!0,De(w,F-K))):(O.sortIndex=re,t(a,O),v||g||(v=!0,se(x))),O},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(O){var j=h;return function(){var F=h;h=j;try{return O.apply(this,arguments)}finally{h=F}}}})(Kc);Qc.exports=Kc;var Sm=Qc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em=M,Oe=Sm;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qc=new Set,Pr={};function gn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(Pr[e]=t,e=0;e<t.length;e++)qc.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ao=Object.prototype.hasOwnProperty,km=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ka={},qa={};function Cm(e){return Ao.call(qa,e)?!0:Ao.call(Ka,e)?!1:km.test(e)?qa[e]=!0:(Ka[e]=!0,!1)}function Am(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tm(e,t,n,r){if(t===null||typeof t>"u"||Am(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gl=/[\-:]([a-z])/g;function Hl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gl,Hl);pe[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gl,Hl);pe[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gl,Hl);pe[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ul(e,t,n,r){var i=pe.hasOwnProperty(t)?pe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Tm(t,n,i,r)&&(n=null),r||i===null?Cm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=Em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ii=Symbol.for("react.element"),wn=Symbol.for("react.portal"),xn=Symbol.for("react.fragment"),Wl=Symbol.for("react.strict_mode"),To=Symbol.for("react.profiler"),Zc=Symbol.for("react.provider"),Jc=Symbol.for("react.context"),Yl=Symbol.for("react.forward_ref"),bo=Symbol.for("react.suspense"),Po=Symbol.for("react.suspense_list"),Xl=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),ef=Symbol.for("react.offscreen"),Za=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=Za&&e[Za]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Ds;function cr(e){if(Ds===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ds=t&&t[1]||""}return`
`+Ds+e}var Rs=!1;function Bs(e,t){if(!e||Rs)return"";Rs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{Rs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cr(e):""}function bm(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=Bs(e.type,!1),e;case 11:return e=Bs(e.type.render,!1),e;case 1:return e=Bs(e.type,!0),e;default:return""}}function No(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xn:return"Fragment";case wn:return"Portal";case To:return"Profiler";case Wl:return"StrictMode";case bo:return"Suspense";case Po:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jc:return(e.displayName||"Context")+".Consumer";case Zc:return(e._context.displayName||"Context")+".Provider";case Yl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xl:return t=e.displayName||null,t!==null?t:No(e.type)||"Memo";case At:t=e._payload,e=e._init;try{return No(e(t))}catch{}}return null}function Pm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return No(t);case 8:return t===Wl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $t(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Nm(e){var t=tf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function si(e){e._valueTracker||(e._valueTracker=Nm(e))}function nf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=tf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zo(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ja(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$t(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rf(e,t){t=t.checked,t!=null&&Ul(e,"checked",t,!1)}function Io(e,t){rf(e,t);var n=$t(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Mo(e,t.type,$t(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function eu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Mo(e,t,n){(t!=="number"||Ri(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function On(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$t(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Oo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(fr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$t(n)}}function sf(e,t){var n=$t(t.value),r=$t(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function nu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function of(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?of(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,lf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zm=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){zm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gr[t]=gr[e]})});function af(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gr.hasOwnProperty(e)&&gr[e]?(""+t).trim():t+"px"}function uf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=af(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Im=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _o(e,t){if(t){if(Im[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function jo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fo=null;function Ql(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Do=null,Ln=null,_n=null;function ru(e){if(e=qr(e)){if(typeof Do!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Ss(t),Do(e.stateNode,e.type,t))}}function cf(e){Ln?_n?_n.push(e):_n=[e]:Ln=e}function ff(){if(Ln){var e=Ln,t=_n;if(_n=Ln=null,ru(e),t)for(e=0;e<t.length;e++)ru(t[e])}}function df(e,t){return e(t)}function pf(){}var $s=!1;function mf(e,t,n){if($s)return e(t,n);$s=!0;try{return df(e,t,n)}finally{$s=!1,(Ln!==null||_n!==null)&&(pf(),ff())}}function zr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ss(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Ro=!1;if(ht)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Ro=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Ro=!1}function Mm(e,t,n,r,i,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var vr=!1,Bi=null,$i=!1,Bo=null,Om={onError:function(e){vr=!0,Bi=e}};function Lm(e,t,n,r,i,s,o,l,a){vr=!1,Bi=null,Mm.apply(Om,arguments)}function _m(e,t,n,r,i,s,o,l,a){if(Lm.apply(this,arguments),vr){if(vr){var c=Bi;vr=!1,Bi=null}else throw Error(N(198));$i||($i=!0,Bo=c)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function iu(e){if(vn(e)!==e)throw Error(N(188))}function jm(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return iu(i),e;if(s===r)return iu(i),t;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function gf(e){return e=jm(e),e!==null?vf(e):null}function vf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vf(e);if(t!==null)return t;e=e.sibling}return null}var yf=Oe.unstable_scheduleCallback,su=Oe.unstable_cancelCallback,Fm=Oe.unstable_shouldYield,Dm=Oe.unstable_requestPaint,ne=Oe.unstable_now,Rm=Oe.unstable_getCurrentPriorityLevel,Kl=Oe.unstable_ImmediatePriority,wf=Oe.unstable_UserBlockingPriority,Vi=Oe.unstable_NormalPriority,Bm=Oe.unstable_LowPriority,xf=Oe.unstable_IdlePriority,vs=null,ot=null;function $m(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(vs,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:Hm,Vm=Math.log,Gm=Math.LN2;function Hm(e){return e>>>=0,e===0?32:31-(Vm(e)/Gm|0)|0}var li=64,ai=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=dr(l):(s&=o,s!==0&&(r=dr(s)))}else o=n&~i,o!==0?r=dr(o):s!==0&&(r=dr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),i=1<<n,r|=e[n],t&=~i;return r}function Um(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Ke(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Um(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function $o(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sf(){var e=li;return li<<=1,!(li&4194240)&&(li=64),e}function Vs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function Ym(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ke(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function ql(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var G=0;function Ef(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var kf,Zl,Cf,Af,Tf,Vo=!1,ui=[],Ot=null,Lt=null,_t=null,Ir=new Map,Mr=new Map,bt=[],Xm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ou(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":Ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(t.pointerId)}}function rr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=qr(t),t!==null&&Zl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Qm(e,t,n,r,i){switch(t){case"focusin":return Ot=rr(Ot,e,t,n,r,i),!0;case"dragenter":return Lt=rr(Lt,e,t,n,r,i),!0;case"mouseover":return _t=rr(_t,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ir.set(s,rr(Ir.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Mr.set(s,rr(Mr.get(s)||null,e,t,n,r,i)),!0}return!1}function bf(e){var t=en(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=hf(n),t!==null){e.blockedOn=t,Tf(e.priority,function(){Cf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Go(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fo=r,n.target.dispatchEvent(r),Fo=null}else return t=qr(n),t!==null&&Zl(t),e.blockedOn=n,!1;t.shift()}return!0}function lu(e,t,n){Ai(e)&&n.delete(t)}function Km(){Vo=!1,Ot!==null&&Ai(Ot)&&(Ot=null),Lt!==null&&Ai(Lt)&&(Lt=null),_t!==null&&Ai(_t)&&(_t=null),Ir.forEach(lu),Mr.forEach(lu)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Vo||(Vo=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,Km)))}function Or(e){function t(i){return ir(i,e)}if(0<ui.length){ir(ui[0],e);for(var n=1;n<ui.length;n++){var r=ui[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&ir(Ot,e),Lt!==null&&ir(Lt,e),_t!==null&&ir(_t,e),Ir.forEach(t),Mr.forEach(t),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)bf(n),n.blockedOn===null&&bt.shift()}var jn=St.ReactCurrentBatchConfig,Hi=!0;function qm(e,t,n,r){var i=G,s=jn.transition;jn.transition=null;try{G=1,Jl(e,t,n,r)}finally{G=i,jn.transition=s}}function Zm(e,t,n,r){var i=G,s=jn.transition;jn.transition=null;try{G=4,Jl(e,t,n,r)}finally{G=i,jn.transition=s}}function Jl(e,t,n,r){if(Hi){var i=Go(e,t,n,r);if(i===null)Zs(e,t,r,Ui,n),ou(e,r);else if(Qm(i,e,t,n,r))r.stopPropagation();else if(ou(e,r),t&4&&-1<Xm.indexOf(e)){for(;i!==null;){var s=qr(i);if(s!==null&&kf(s),s=Go(e,t,n,r),s===null&&Zs(e,t,r,Ui,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zs(e,t,r,null,n)}}var Ui=null;function Go(e,t,n,r){if(Ui=null,e=Ql(r),e=en(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ui=e,null}function Pf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rm()){case Kl:return 1;case wf:return 4;case Vi:case Bm:return 16;case xf:return 536870912;default:return 16}default:return 16}}var Nt=null,ea=null,Ti=null;function Nf(){if(Ti)return Ti;var e,t=ea,n=t.length,r,i="value"in Nt?Nt.value:Nt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Ti=i.slice(e,1<r?1-r:void 0)}function bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function au(){return!1}function _e(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ci:au,this.isPropagationStopped=au,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ta=_e(qn),Kr=ee({},qn,{view:0,detail:0}),Jm=_e(Kr),Gs,Hs,sr,ys=ee({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:na,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(Gs=e.screenX-sr.screenX,Hs=e.screenY-sr.screenY):Hs=Gs=0,sr=e),Gs)},movementY:function(e){return"movementY"in e?e.movementY:Hs}}),uu=_e(ys),eh=ee({},ys,{dataTransfer:0}),th=_e(eh),nh=ee({},Kr,{relatedTarget:0}),Us=_e(nh),rh=ee({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),ih=_e(rh),sh=ee({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),oh=_e(sh),lh=ee({},qn,{data:0}),cu=_e(lh),ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ch={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ch[e])?!!t[e]:!1}function na(){return fh}var dh=ee({},Kr,{key:function(e){if(e.key){var t=ah[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:na,charCode:function(e){return e.type==="keypress"?bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ph=_e(dh),mh=ee({},ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fu=_e(mh),hh=ee({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:na}),gh=_e(hh),vh=ee({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),yh=_e(vh),wh=ee({},ys,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xh=_e(wh),Sh=[9,13,27,32],ra=ht&&"CompositionEvent"in window,yr=null;ht&&"documentMode"in document&&(yr=document.documentMode);var Eh=ht&&"TextEvent"in window&&!yr,zf=ht&&(!ra||yr&&8<yr&&11>=yr),du=" ",pu=!1;function If(e,t){switch(e){case"keyup":return Sh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function kh(e,t){switch(e){case"compositionend":return Mf(t);case"keypress":return t.which!==32?null:(pu=!0,du);case"textInput":return e=t.data,e===du&&pu?null:e;default:return null}}function Ch(e,t){if(Sn)return e==="compositionend"||!ra&&If(e,t)?(e=Nf(),Ti=ea=Nt=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zf&&t.locale!=="ko"?null:t.data;default:return null}}var Ah={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ah[e.type]:t==="textarea"}function Of(e,t,n,r){cf(r),t=Wi(t,"onChange"),0<t.length&&(n=new ta("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wr=null,Lr=null;function Th(e){Hf(e,0)}function ws(e){var t=Cn(e);if(nf(t))return e}function bh(e,t){if(e==="change")return t}var Lf=!1;if(ht){var Ws;if(ht){var Ys="oninput"in document;if(!Ys){var hu=document.createElement("div");hu.setAttribute("oninput","return;"),Ys=typeof hu.oninput=="function"}Ws=Ys}else Ws=!1;Lf=Ws&&(!document.documentMode||9<document.documentMode)}function gu(){wr&&(wr.detachEvent("onpropertychange",_f),Lr=wr=null)}function _f(e){if(e.propertyName==="value"&&ws(Lr)){var t=[];Of(t,Lr,e,Ql(e)),mf(Th,t)}}function Ph(e,t,n){e==="focusin"?(gu(),wr=t,Lr=n,wr.attachEvent("onpropertychange",_f)):e==="focusout"&&gu()}function Nh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ws(Lr)}function zh(e,t){if(e==="click")return ws(t)}function Ih(e,t){if(e==="input"||e==="change")return ws(t)}function Mh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:Mh;function _r(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ao.call(t,i)||!Ze(e[i],t[i]))return!1}return!0}function vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yu(e,t){var n=vu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vu(n)}}function jf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ff(){for(var e=window,t=Ri();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ri(e.document)}return t}function ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Oh(e){var t=Ff(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jf(n.ownerDocument.documentElement,n)){if(r!==null&&ia(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=yu(n,s);var o=yu(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lh=ht&&"documentMode"in document&&11>=document.documentMode,En=null,Ho=null,xr=null,Uo=!1;function wu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uo||En==null||En!==Ri(r)||(r=En,"selectionStart"in r&&ia(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&_r(xr,r)||(xr=r,r=Wi(Ho,"onSelect"),0<r.length&&(t=new ta("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function fi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:fi("Animation","AnimationEnd"),animationiteration:fi("Animation","AnimationIteration"),animationstart:fi("Animation","AnimationStart"),transitionend:fi("Transition","TransitionEnd")},Xs={},Df={};ht&&(Df=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function xs(e){if(Xs[e])return Xs[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Df)return Xs[e]=t[n];return e}var Rf=xs("animationend"),Bf=xs("animationiteration"),$f=xs("animationstart"),Vf=xs("transitionend"),Gf=new Map,xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){Gf.set(e,t),gn(t,[e])}for(var Qs=0;Qs<xu.length;Qs++){var Ks=xu[Qs],_h=Ks.toLowerCase(),jh=Ks[0].toUpperCase()+Ks.slice(1);Wt(_h,"on"+jh)}Wt(Rf,"onAnimationEnd");Wt(Bf,"onAnimationIteration");Wt($f,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(Vf,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fh=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function Su(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_m(r,t,void 0,e),e.currentTarget=null}function Hf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Su(i,l,c),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Su(i,l,c),s=a}}}if($i)throw e=Bo,$i=!1,Bo=null,e}function U(e,t){var n=t[Ko];n===void 0&&(n=t[Ko]=new Set);var r=e+"__bubble";n.has(r)||(Uf(t,e,2,!1),n.add(r))}function qs(e,t,n){var r=0;t&&(r|=4),Uf(n,e,r,t)}var di="_reactListening"+Math.random().toString(36).slice(2);function jr(e){if(!e[di]){e[di]=!0,qc.forEach(function(n){n!=="selectionchange"&&(Fh.has(n)||qs(n,!1,e),qs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[di]||(t[di]=!0,qs("selectionchange",!1,t))}}function Uf(e,t,n,r){switch(Pf(t)){case 1:var i=qm;break;case 4:i=Zm;break;default:i=Jl}n=i.bind(null,t,n,e),i=void 0,!Ro||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zs(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=en(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}mf(function(){var c=s,d=Ql(n),p=[];e:{var h=Gf.get(e);if(h!==void 0){var g=ta,v=e;switch(e){case"keypress":if(bi(n)===0)break e;case"keydown":case"keyup":g=ph;break;case"focusin":v="focus",g=Us;break;case"focusout":v="blur",g=Us;break;case"beforeblur":case"afterblur":g=Us;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=uu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gh;break;case Rf:case Bf:case $f:g=ih;break;case Vf:g=yh;break;case"scroll":g=Jm;break;case"wheel":g=xh;break;case"copy":case"cut":case"paste":g=oh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=fu}var y=(t&4)!==0,E=!y&&e==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var f=c,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,u!==null&&(w=zr(f,u),w!=null&&y.push(Fr(f,w,m)))),E)break;f=f.return}0<y.length&&(h=new g(h,v,null,n,d),p.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Fo&&(v=n.relatedTarget||n.fromElement)&&(en(v)||v[gt]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?en(v):null,v!==null&&(E=vn(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(y=uu,w="onMouseLeave",u="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=fu,w="onPointerLeave",u="onPointerEnter",f="pointer"),E=g==null?h:Cn(g),m=v==null?h:Cn(v),h=new y(w,f+"leave",g,n,d),h.target=E,h.relatedTarget=m,w=null,en(d)===c&&(y=new y(u,f+"enter",v,n,d),y.target=m,y.relatedTarget=E,w=y),E=w,g&&v)t:{for(y=g,u=v,f=0,m=y;m;m=yn(m))f++;for(m=0,w=u;w;w=yn(w))m++;for(;0<f-m;)y=yn(y),f--;for(;0<m-f;)u=yn(u),m--;for(;f--;){if(y===u||u!==null&&y===u.alternate)break t;y=yn(y),u=yn(u)}y=null}else y=null;g!==null&&Eu(p,h,g,y,!1),v!==null&&E!==null&&Eu(p,E,v,y,!0)}}e:{if(h=c?Cn(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var x=bh;else if(mu(h))if(Lf)x=Ih;else{x=Nh;var A=Ph}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=zh);if(x&&(x=x(e,c))){Of(p,x,n,d);break e}A&&A(e,h,c),e==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Mo(h,"number",h.value)}switch(A=c?Cn(c):window,e){case"focusin":(mu(A)||A.contentEditable==="true")&&(En=A,Ho=c,xr=null);break;case"focusout":xr=Ho=En=null;break;case"mousedown":Uo=!0;break;case"contextmenu":case"mouseup":case"dragend":Uo=!1,wu(p,n,d);break;case"selectionchange":if(Lh)break;case"keydown":case"keyup":wu(p,n,d)}var z;if(ra)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Sn?If(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(zf&&n.locale!=="ko"&&(Sn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Sn&&(z=Nf()):(Nt=d,ea="value"in Nt?Nt.value:Nt.textContent,Sn=!0)),A=Wi(c,C),0<A.length&&(C=new cu(C,e,null,n,d),p.push({event:C,listeners:A}),z?C.data=z:(z=Mf(n),z!==null&&(C.data=z)))),(z=Eh?kh(e,n):Ch(e,n))&&(c=Wi(c,"onBeforeInput"),0<c.length&&(d=new cu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=z))}Hf(p,t)})}function Fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=zr(e,n),s!=null&&r.unshift(Fr(e,s,i)),s=zr(e,t),s!=null&&r.push(Fr(e,s,i))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Eu(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=zr(n,s),a!=null&&o.unshift(Fr(n,a,l))):i||(a=zr(n,s),a!=null&&o.push(Fr(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Dh=/\r\n?/g,Rh=/\u0000|\uFFFD/g;function ku(e){return(typeof e=="string"?e:""+e).replace(Dh,`
`).replace(Rh,"")}function pi(e,t,n){if(t=ku(t),ku(e)!==t&&n)throw Error(N(425))}function Yi(){}var Wo=null,Yo=null;function Xo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qo=typeof setTimeout=="function"?setTimeout:void 0,Bh=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,$h=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu<"u"?function(e){return Cu.resolve(null).then(e).catch(Vh)}:Qo;function Vh(e){setTimeout(function(){throw e})}function Js(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Or(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),nt="__reactFiber$"+Zn,Dr="__reactProps$"+Zn,gt="__reactContainer$"+Zn,Ko="__reactEvents$"+Zn,Gh="__reactListeners$"+Zn,Hh="__reactHandles$"+Zn;function en(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Au(e);e!==null;){if(n=e[nt])return n;e=Au(e)}return t}e=n,n=e.parentNode}return null}function qr(e){return e=e[nt]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Ss(e){return e[Dr]||null}var qo=[],An=-1;function Yt(e){return{current:e}}function W(e){0>An||(e.current=qo[An],qo[An]=null,An--)}function H(e,t){An++,qo[An]=e.current,e.current=t}var Vt={},ve=Yt(Vt),Ce=Yt(!1),an=Vt;function Vn(e,t){var n=e.type.contextTypes;if(!n)return Vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function Xi(){W(Ce),W(ve)}function Tu(e,t,n){if(ve.current!==Vt)throw Error(N(168));H(ve,t),H(Ce,n)}function Wf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,Pm(e)||"Unknown",i));return ee({},n,r)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,an=ve.current,H(ve,e),H(Ce,Ce.current),!0}function bu(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Wf(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,W(Ce),W(ve),H(ve,e)):W(Ce),H(Ce,n)}var ft=null,Es=!1,eo=!1;function Yf(e){ft===null?ft=[e]:ft.push(e)}function Uh(e){Es=!0,Yf(e)}function Xt(){if(!eo&&ft!==null){eo=!0;var e=0,t=G;try{var n=ft;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,Es=!1}catch(i){throw ft!==null&&(ft=ft.slice(e+1)),yf(Kl,Xt),i}finally{G=t,eo=!1}}return null}var Tn=[],bn=0,Ki=null,qi=0,Re=[],Be=0,un=null,dt=1,pt="";function qt(e,t){Tn[bn++]=qi,Tn[bn++]=Ki,Ki=e,qi=t}function Xf(e,t,n){Re[Be++]=dt,Re[Be++]=pt,Re[Be++]=un,un=e;var r=dt;e=pt;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var s=32-Ke(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dt=1<<32-Ke(t)+i|n<<i|r,pt=s+e}else dt=1<<s|n<<i|r,pt=e}function sa(e){e.return!==null&&(qt(e,1),Xf(e,1,0))}function oa(e){for(;e===Ki;)Ki=Tn[--bn],Tn[bn]=null,qi=Tn[--bn],Tn[bn]=null;for(;e===un;)un=Re[--Be],Re[Be]=null,pt=Re[--Be],Re[Be]=null,dt=Re[--Be],Re[Be]=null}var ze=null,Ne=null,X=!1,Qe=null;function Qf(e,t){var n=Ve(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Pu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Ne=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:dt,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ve(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Ne=null,!0):!1;default:return!1}}function Zo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jo(e){if(X){var t=Ne;if(t){var n=t;if(!Pu(e,t)){if(Zo(e))throw Error(N(418));t=jt(n.nextSibling);var r=ze;t&&Pu(e,t)?Qf(r,n):(e.flags=e.flags&-4097|2,X=!1,ze=e)}}else{if(Zo(e))throw Error(N(418));e.flags=e.flags&-4097|2,X=!1,ze=e}}}function Nu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function mi(e){if(e!==ze)return!1;if(!X)return Nu(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xo(e.type,e.memoizedProps)),t&&(t=Ne)){if(Zo(e))throw Kf(),Error(N(418));for(;t;)Qf(e,t),t=jt(t.nextSibling)}if(Nu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=ze?jt(e.stateNode.nextSibling):null;return!0}function Kf(){for(var e=Ne;e;)e=jt(e.nextSibling)}function Gn(){Ne=ze=null,X=!1}function la(e){Qe===null?Qe=[e]:Qe.push(e)}var Wh=St.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function hi(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zu(e){var t=e._init;return t(e._payload)}function qf(e){function t(u,f){if(e){var m=u.deletions;m===null?(u.deletions=[f],u.flags|=16):m.push(f)}}function n(u,f){if(!e)return null;for(;f!==null;)t(u,f),f=f.sibling;return null}function r(u,f){for(u=new Map;f!==null;)f.key!==null?u.set(f.key,f):u.set(f.index,f),f=f.sibling;return u}function i(u,f){return u=Bt(u,f),u.index=0,u.sibling=null,u}function s(u,f,m){return u.index=m,e?(m=u.alternate,m!==null?(m=m.index,m<f?(u.flags|=2,f):m):(u.flags|=2,f)):(u.flags|=1048576,f)}function o(u){return e&&u.alternate===null&&(u.flags|=2),u}function l(u,f,m,w){return f===null||f.tag!==6?(f=lo(m,u.mode,w),f.return=u,f):(f=i(f,m),f.return=u,f)}function a(u,f,m,w){var x=m.type;return x===xn?d(u,f,m.props.children,w,m.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===At&&zu(x)===f.type)?(w=i(f,m.props),w.ref=or(u,f,m),w.return=u,w):(w=Li(m.type,m.key,m.props,null,u.mode,w),w.ref=or(u,f,m),w.return=u,w)}function c(u,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ao(m,u.mode,w),f.return=u,f):(f=i(f,m.children||[]),f.return=u,f)}function d(u,f,m,w,x){return f===null||f.tag!==7?(f=sn(m,u.mode,w,x),f.return=u,f):(f=i(f,m),f.return=u,f)}function p(u,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=lo(""+f,u.mode,m),f.return=u,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ii:return m=Li(f.type,f.key,f.props,null,u.mode,m),m.ref=or(u,null,f),m.return=u,m;case wn:return f=ao(f,u.mode,m),f.return=u,f;case At:var w=f._init;return p(u,w(f._payload),m)}if(fr(f)||tr(f))return f=sn(f,u.mode,m,null),f.return=u,f;hi(u,f)}return null}function h(u,f,m,w){var x=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return x!==null?null:l(u,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ii:return m.key===x?a(u,f,m,w):null;case wn:return m.key===x?c(u,f,m,w):null;case At:return x=m._init,h(u,f,x(m._payload),w)}if(fr(m)||tr(m))return x!==null?null:d(u,f,m,w,null);hi(u,m)}return null}function g(u,f,m,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return u=u.get(m)||null,l(f,u,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ii:return u=u.get(w.key===null?m:w.key)||null,a(f,u,w,x);case wn:return u=u.get(w.key===null?m:w.key)||null,c(f,u,w,x);case At:var A=w._init;return g(u,f,m,A(w._payload),x)}if(fr(w)||tr(w))return u=u.get(m)||null,d(f,u,w,x,null);hi(f,w)}return null}function v(u,f,m,w){for(var x=null,A=null,z=f,C=f=0,I=null;z!==null&&C<m.length;C++){z.index>C?(I=z,z=null):I=z.sibling;var S=h(u,z,m[C],w);if(S===null){z===null&&(z=I);break}e&&z&&S.alternate===null&&t(u,z),f=s(S,f,C),A===null?x=S:A.sibling=S,A=S,z=I}if(C===m.length)return n(u,z),X&&qt(u,C),x;if(z===null){for(;C<m.length;C++)z=p(u,m[C],w),z!==null&&(f=s(z,f,C),A===null?x=z:A.sibling=z,A=z);return X&&qt(u,C),x}for(z=r(u,z);C<m.length;C++)I=g(z,u,C,m[C],w),I!==null&&(e&&I.alternate!==null&&z.delete(I.key===null?C:I.key),f=s(I,f,C),A===null?x=I:A.sibling=I,A=I);return e&&z.forEach(function(T){return t(u,T)}),X&&qt(u,C),x}function y(u,f,m,w){var x=tr(m);if(typeof x!="function")throw Error(N(150));if(m=x.call(m),m==null)throw Error(N(151));for(var A=x=null,z=f,C=f=0,I=null,S=m.next();z!==null&&!S.done;C++,S=m.next()){z.index>C?(I=z,z=null):I=z.sibling;var T=h(u,z,S.value,w);if(T===null){z===null&&(z=I);break}e&&z&&T.alternate===null&&t(u,z),f=s(T,f,C),A===null?x=T:A.sibling=T,A=T,z=I}if(S.done)return n(u,z),X&&qt(u,C),x;if(z===null){for(;!S.done;C++,S=m.next())S=p(u,S.value,w),S!==null&&(f=s(S,f,C),A===null?x=S:A.sibling=S,A=S);return X&&qt(u,C),x}for(z=r(u,z);!S.done;C++,S=m.next())S=g(z,u,C,S.value,w),S!==null&&(e&&S.alternate!==null&&z.delete(S.key===null?C:S.key),f=s(S,f,C),A===null?x=S:A.sibling=S,A=S);return e&&z.forEach(function(k){return t(u,k)}),X&&qt(u,C),x}function E(u,f,m,w){if(typeof m=="object"&&m!==null&&m.type===xn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ii:e:{for(var x=m.key,A=f;A!==null;){if(A.key===x){if(x=m.type,x===xn){if(A.tag===7){n(u,A.sibling),f=i(A,m.props.children),f.return=u,u=f;break e}}else if(A.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===At&&zu(x)===A.type){n(u,A.sibling),f=i(A,m.props),f.ref=or(u,A,m),f.return=u,u=f;break e}n(u,A);break}else t(u,A);A=A.sibling}m.type===xn?(f=sn(m.props.children,u.mode,w,m.key),f.return=u,u=f):(w=Li(m.type,m.key,m.props,null,u.mode,w),w.ref=or(u,f,m),w.return=u,u=w)}return o(u);case wn:e:{for(A=m.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(u,f.sibling),f=i(f,m.children||[]),f.return=u,u=f;break e}else{n(u,f);break}else t(u,f);f=f.sibling}f=ao(m,u.mode,w),f.return=u,u=f}return o(u);case At:return A=m._init,E(u,f,A(m._payload),w)}if(fr(m))return v(u,f,m,w);if(tr(m))return y(u,f,m,w);hi(u,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(u,f.sibling),f=i(f,m),f.return=u,u=f):(n(u,f),f=lo(m,u.mode,w),f.return=u,u=f),o(u)):n(u,f)}return E}var Hn=qf(!0),Zf=qf(!1),Zi=Yt(null),Ji=null,Pn=null,aa=null;function ua(){aa=Pn=Ji=null}function ca(e){var t=Zi.current;W(Zi),e._currentValue=t}function el(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fn(e,t){Ji=e,aa=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(aa!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(Ji===null)throw Error(N(308));Pn=e,Ji.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var tn=null;function fa(e){tn===null?tn=[e]:tn.push(e)}function Jf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,fa(t)):(n.next=i.next,i.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tt=!1;function da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ed(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,vt(e,n)}return i=r.interleaved,i===null?(t.next=t,fa(r)):(t.next=i.next,i.next=t),r.interleaved=t,vt(e,n)}function Pi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ql(e,n)}}function Iu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function es(e,t,n,r){var i=e.updateQueue;Tt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=a))}if(s!==null){var p=i.baseState;o=0,d=c=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,y=l;switch(h=t,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){p=v.call(g,p,h);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(g,p,h):v,h==null)break e;p=ee({},p,h);break e;case 2:Tt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=g,a=p):d=d.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=p),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);fn|=o,e.lanes=o,e.memoizedState=p}}function Mu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Zr={},lt=Yt(Zr),Rr=Yt(Zr),Br=Yt(Zr);function nn(e){if(e===Zr)throw Error(N(174));return e}function pa(e,t){switch(H(Br,t),H(Rr,e),H(lt,Zr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Lo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Lo(t,e)}W(lt),H(lt,t)}function Un(){W(lt),W(Rr),W(Br)}function td(e){nn(Br.current);var t=nn(lt.current),n=Lo(t,e.type);t!==n&&(H(Rr,e),H(lt,n))}function ma(e){Rr.current===e&&(W(lt),W(Rr))}var Z=Yt(0);function ts(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function ha(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var Ni=St.ReactCurrentDispatcher,no=St.ReactCurrentBatchConfig,cn=0,J=null,oe=null,ue=null,ns=!1,Sr=!1,$r=0,Yh=0;function me(){throw Error(N(321))}function ga(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function va(e,t,n,r,i,s){if(cn=s,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ni.current=e===null||e.memoizedState===null?qh:Zh,e=n(r,i),Sr){s=0;do{if(Sr=!1,$r=0,25<=s)throw Error(N(301));s+=1,ue=oe=null,t.updateQueue=null,Ni.current=Jh,e=n(r,i)}while(Sr)}if(Ni.current=rs,t=oe!==null&&oe.next!==null,cn=0,ue=oe=J=null,ns=!1,t)throw Error(N(300));return e}function ya(){var e=$r!==0;return $r=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?J.memoizedState=ue=e:ue=ue.next=e,ue}function Ue(){if(oe===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ue===null?J.memoizedState:ue.next;if(t!==null)ue=t,oe=e;else{if(e===null)throw Error(N(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?J.memoizedState=ue=e:ue=ue.next=e}return ue}function Vr(e,t){return typeof t=="function"?t(e):t}function ro(e){var t=Ue(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,c=s;do{var d=c.lane;if((cn&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=p,o=r):a=a.next=p,J.lanes|=d,fn|=d}c=c.next}while(c!==null&&c!==s);a===null?o=r:a.next=l,Ze(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,J.lanes|=s,fn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function io(e){var t=Ue(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ze(s,t.memoizedState)||(ke=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function nd(){}function rd(e,t){var n=J,r=Ue(),i=t(),s=!Ze(r.memoizedState,i);if(s&&(r.memoizedState=i,ke=!0),r=r.queue,wa(od.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Gr(9,sd.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(N(349));cn&30||id(n,t,i)}return i}function id(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sd(e,t,n,r){t.value=n,t.getSnapshot=r,ld(t)&&ad(e)}function od(e,t,n){return n(function(){ld(t)&&ad(e)})}function ld(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function ad(e){var t=vt(e,1);t!==null&&qe(t,e,1,-1)}function Ou(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vr,lastRenderedState:e},t.queue=e,e=e.dispatch=Kh.bind(null,J,e),[t.memoizedState,e]}function Gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ud(){return Ue().memoizedState}function zi(e,t,n,r){var i=et();J.flags|=e,i.memoizedState=Gr(1|t,n,void 0,r===void 0?null:r)}function ks(e,t,n,r){var i=Ue();r=r===void 0?null:r;var s=void 0;if(oe!==null){var o=oe.memoizedState;if(s=o.destroy,r!==null&&ga(r,o.deps)){i.memoizedState=Gr(t,n,s,r);return}}J.flags|=e,i.memoizedState=Gr(1|t,n,s,r)}function Lu(e,t){return zi(8390656,8,e,t)}function wa(e,t){return ks(2048,8,e,t)}function cd(e,t){return ks(4,2,e,t)}function fd(e,t){return ks(4,4,e,t)}function dd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pd(e,t,n){return n=n!=null?n.concat([e]):null,ks(4,4,dd.bind(null,t,e),n)}function xa(){}function md(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ga(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hd(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ga(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function gd(e,t,n){return cn&21?(Ze(n,t)||(n=Sf(),J.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function Xh(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=no.transition;no.transition={};try{e(!1),t()}finally{G=n,no.transition=r}}function vd(){return Ue().memoizedState}function Qh(e,t,n){var r=Rt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yd(e))wd(t,n);else if(n=Jf(e,t,n,r),n!==null){var i=we();qe(n,e,r,i),xd(n,t,r)}}function Kh(e,t,n){var r=Rt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yd(e))wd(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ze(l,o)){var a=t.interleaved;a===null?(i.next=i,fa(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Jf(e,t,i,r),n!==null&&(i=we(),qe(n,e,r,i),xd(n,t,r))}}function yd(e){var t=e.alternate;return e===J||t!==null&&t===J}function wd(e,t){Sr=ns=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ql(e,n)}}var rs={readContext:He,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},qh={readContext:He,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:Lu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zi(4194308,4,dd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return zi(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qh.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:Ou,useDebugValue:xa,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=Ou(!1),t=e[0];return e=Xh.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=et();if(X){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ce===null)throw Error(N(349));cn&30||id(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Lu(od.bind(null,r,s,e),[e]),r.flags|=2048,Gr(9,sd.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=et(),t=ce.identifierPrefix;if(X){var n=pt,r=dt;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zh={readContext:He,useCallback:md,useContext:He,useEffect:wa,useImperativeHandle:pd,useInsertionEffect:cd,useLayoutEffect:fd,useMemo:hd,useReducer:ro,useRef:ud,useState:function(){return ro(Vr)},useDebugValue:xa,useDeferredValue:function(e){var t=Ue();return gd(t,oe.memoizedState,e)},useTransition:function(){var e=ro(Vr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:nd,useSyncExternalStore:rd,useId:vd,unstable_isNewReconciler:!1},Jh={readContext:He,useCallback:md,useContext:He,useEffect:wa,useImperativeHandle:pd,useInsertionEffect:cd,useLayoutEffect:fd,useMemo:hd,useReducer:io,useRef:ud,useState:function(){return io(Vr)},useDebugValue:xa,useDeferredValue:function(e){var t=Ue();return oe===null?t.memoizedState=e:gd(t,oe.memoizedState,e)},useTransition:function(){var e=io(Vr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:nd,useSyncExternalStore:rd,useId:vd,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function tl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cs={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),i=Rt(e),s=mt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Ft(e,s,i),t!==null&&(qe(t,e,i,r),Pi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),i=Rt(e),s=mt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ft(e,s,i),t!==null&&(qe(t,e,i,r),Pi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=Rt(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ft(e,i,r),t!==null&&(qe(t,e,r,n),Pi(t,e,r))}};function _u(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!_r(n,r)||!_r(i,s):!0}function Sd(e,t,n){var r=!1,i=Vt,s=t.contextType;return typeof s=="object"&&s!==null?s=He(s):(i=Ae(t)?an:ve.current,r=t.contextTypes,s=(r=r!=null)?Vn(e,i):Vt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ju(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cs.enqueueReplaceState(t,t.state,null)}function nl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},da(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=He(s):(s=Ae(t)?an:ve.current,i.context=Vn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(tl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Cs.enqueueReplaceState(i,i.state,null),es(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wn(e,t){try{var n="",r=t;do n+=bm(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function so(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function rl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var eg=typeof WeakMap=="function"?WeakMap:Map;function Ed(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ss||(ss=!0,pl=r),rl(e,t)},n}function kd(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){rl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rl(e,t),typeof r!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Fu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new eg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=mg.bind(null,e,t,n),t.then(e,e))}function Du(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ru(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var tg=St.ReactCurrentOwner,ke=!1;function ye(e,t,n,r){t.child=e===null?Zf(t,null,n,r):Hn(t,e.child,n,r)}function Bu(e,t,n,r,i){n=n.render;var s=t.ref;return Fn(t,i),r=va(e,t,n,r,s,i),n=ya(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(X&&n&&sa(t),t.flags|=1,ye(e,t,r,i),t.child)}function $u(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Pa(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Cd(e,t,s,r,i)):(e=Li(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_r,n(o,r)&&e.ref===t.ref)return yt(e,t,i)}return t.flags|=1,e=Bt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Cd(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(_r(s,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,yt(e,t,i)}return il(e,t,n,r,i)}function Ad(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(zn,be),be|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(zn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,H(zn,be),be|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,H(zn,be),be|=r;return ye(e,t,i,n),t.child}function Td(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function il(e,t,n,r,i){var s=Ae(n)?an:ve.current;return s=Vn(t,s),Fn(t,i),n=va(e,t,n,r,s,i),r=ya(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(X&&r&&sa(t),t.flags|=1,ye(e,t,n,i),t.child)}function Vu(e,t,n,r,i){if(Ae(n)){var s=!0;Qi(t)}else s=!1;if(Fn(t,i),t.stateNode===null)Ii(e,t),Sd(t,n,r),nl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=He(c):(c=Ae(n)?an:ve.current,c=Vn(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==c)&&ju(t,o,r,c),Tt=!1;var h=t.memoizedState;o.state=h,es(t,r,o,i),a=t.memoizedState,l!==r||h!==a||Ce.current||Tt?(typeof d=="function"&&(tl(t,n,d,r),a=t.memoizedState),(l=Tt||_u(t,n,l,r,h,a,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ed(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ye(t.type,l),o.props=c,p=t.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=He(a):(a=Ae(n)?an:ve.current,a=Vn(t,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||h!==a)&&ju(t,o,r,a),Tt=!1,h=t.memoizedState,o.state=h,es(t,r,o,i);var v=t.memoizedState;l!==p||h!==v||Ce.current||Tt?(typeof g=="function"&&(tl(t,n,g,r),v=t.memoizedState),(c=Tt||_u(t,n,c,r,h,v,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return sl(e,t,n,r,s,i)}function sl(e,t,n,r,i,s){Td(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&bu(t,n,!1),yt(e,t,s);r=t.stateNode,tg.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Hn(t,e.child,null,s),t.child=Hn(t,null,l,s)):ye(e,t,l,s),t.memoizedState=r.state,i&&bu(t,n,!0),t.child}function bd(e){var t=e.stateNode;t.pendingContext?Tu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tu(e,t.context,!1),pa(e,t.containerInfo)}function Gu(e,t,n,r,i){return Gn(),la(i),t.flags|=256,ye(e,t,n,r),t.child}var ol={dehydrated:null,treeContext:null,retryLane:0};function ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pd(e,t,n){var r=t.pendingProps,i=Z.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(Z,i&1),e===null)return Jo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bs(o,r,0,null),e=sn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ll(n),t.memoizedState=ol,e):Sa(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ng(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Bt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Bt(l,s):(s=sn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?ll(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=ol,r}return s=e.child,e=s.sibling,r=Bt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Sa(e,t){return t=bs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gi(e,t,n,r){return r!==null&&la(r),Hn(t,e.child,null,n),e=Sa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ng(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=so(Error(N(422))),gi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=bs({mode:"visible",children:r.children},i,0,null),s=sn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Hn(t,e.child,null,o),t.child.memoizedState=ll(o),t.memoizedState=ol,s);if(!(t.mode&1))return gi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(N(419)),r=so(s,r,void 0),gi(e,t,o,r)}if(l=(o&e.childLanes)!==0,ke||l){if(r=ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,vt(e,i),qe(r,e,i,-1))}return ba(),r=so(Error(N(421))),gi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=hg.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ne=jt(i.nextSibling),ze=t,X=!0,Qe=null,e!==null&&(Re[Be++]=dt,Re[Be++]=pt,Re[Be++]=un,dt=e.id,pt=e.overflow,un=t),t=Sa(t,r.children),t.flags|=4096,t)}function Hu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),el(e.return,t,n)}function oo(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Nd(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ye(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hu(e,n,t);else if(e.tag===19)Hu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(Z,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ts(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),oo(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ts(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}oo(t,!0,n,null,s);break;case"together":oo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ii(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rg(e,t,n){switch(t.tag){case 3:bd(t),Gn();break;case 5:td(t);break;case 1:Ae(t.type)&&Qi(t);break;case 4:pa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(Zi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?Pd(e,t,n):(H(Z,Z.current&1),e=yt(e,t,n),e!==null?e.sibling:null);H(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Nd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Ad(e,t,n)}return yt(e,t,n)}var zd,al,Id,Md;zd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};al=function(){};Id=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,nn(lt.current);var s=null;switch(n){case"input":i=zo(e,i),r=zo(e,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=Oo(e,i),r=Oo(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yi)}_o(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Pr.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Pr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&U("scroll",e),s||l===a||(s=[])):(s=s||[]).push(c,a))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};Md=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ig(e,t,n){var r=t.pendingProps;switch(oa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Ae(t.type)&&Xi(),he(t),null;case 3:return r=t.stateNode,Un(),W(Ce),W(ve),ha(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(gl(Qe),Qe=null))),al(e,t),he(t),null;case 5:ma(t);var i=nn(Br.current);if(n=t.type,e!==null&&t.stateNode!=null)Id(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return he(t),null}if(e=nn(lt.current),mi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[nt]=t,r[Dr]=s,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<pr.length;i++)U(pr[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Ja(r,s),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},U("invalid",r);break;case"textarea":tu(r,s),U("invalid",r)}_o(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&pi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&pi(r.textContent,l,e),i=["children",""+l]):Pr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&U("scroll",r)}switch(n){case"input":si(r),eu(r,s,!0);break;case"textarea":si(r),nu(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Yi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=of(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[nt]=t,e[Dr]=r,zd(e,t,!1,!1),t.stateNode=e;e:{switch(o=jo(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<pr.length;i++)U(pr[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":Ja(e,r),i=zo(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),U("invalid",e);break;case"textarea":tu(e,r),i=Oo(e,r),U("invalid",e);break;default:i=r}_o(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?uf(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&lf(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Nr(e,a):typeof a=="number"&&Nr(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pr.hasOwnProperty(s)?a!=null&&s==="onScroll"&&U("scroll",e):a!=null&&Ul(e,s,a,o))}switch(n){case"input":si(e),eu(e,r,!1);break;case"textarea":si(e),nu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$t(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?On(e,!!r.multiple,s,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Md(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=nn(Br.current),nn(lt.current),mi(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(s=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:pi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pi(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return he(t),null;case 13:if(W(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Ne!==null&&t.mode&1&&!(t.flags&128))Kf(),Gn(),t.flags|=98560,s=!1;else if(s=mi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(N(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[nt]=t}else Gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),s=!1}else Qe!==null&&(gl(Qe),Qe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?le===0&&(le=3):ba())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return Un(),al(e,t),e===null&&jr(t.stateNode.containerInfo),he(t),null;case 10:return ca(t.type._context),he(t),null;case 17:return Ae(t.type)&&Xi(),he(t),null;case 19:if(W(Z),s=t.memoizedState,s===null)return he(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)lr(s,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ts(e),o!==null){for(t.flags|=128,lr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(Z,Z.current&1|2),t.child}e=e.sibling}s.tail!==null&&ne()>Yn&&(t.flags|=128,r=!0,lr(s,!1),t.lanes=4194304)}else{if(!r)if(e=ts(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!X)return he(t),null}else 2*ne()-s.renderingStartTime>Yn&&n!==1073741824&&(t.flags|=128,r=!0,lr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ne(),t.sibling=null,n=Z.current,H(Z,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return Ta(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function sg(e,t){switch(oa(t),t.tag){case 1:return Ae(t.type)&&Xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),W(Ce),W(ve),ha(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ma(t),null;case 13:if(W(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Z),null;case 4:return Un(),null;case 10:return ca(t.type._context),null;case 22:case 23:return Ta(),null;case 24:return null;default:return null}}var vi=!1,ge=!1,og=typeof WeakSet=="function"?WeakSet:Set,L=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function ul(e,t,n){try{n()}catch(r){te(e,t,r)}}var Uu=!1;function lg(e,t){if(Wo=Hi,e=Ff(),ia(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,d=0,p=e,h=null;t:for(;;){for(var g;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(a=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)h=p,p=g;for(;;){if(p===e)break t;if(h===n&&++c===i&&(l=o),h===s&&++d===r&&(a=o),(g=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yo={focusedElem:e,selectionRange:n},Hi=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,E=v.memoizedState,u=t.stateNode,f=u.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ye(t.type,y),E);u.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){te(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return v=Uu,Uu=!1,v}function Er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ul(t,n,s)}i=i.next}while(i!==r)}}function As(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function cl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Od(e){var t=e.alternate;t!==null&&(e.alternate=null,Od(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[Dr],delete t[Ko],delete t[Gh],delete t[Hh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ld(e){return e.tag===5||e.tag===3||e.tag===4}function Wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ld(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yi));else if(r!==4&&(e=e.child,e!==null))for(fl(e,t,n),e=e.sibling;e!==null;)fl(e,t,n),e=e.sibling}function dl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(dl(e,t,n),e=e.sibling;e!==null;)dl(e,t,n),e=e.sibling}var fe=null,Xe=!1;function kt(e,t,n){for(n=n.child;n!==null;)_d(e,t,n),n=n.sibling}function _d(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(vs,n)}catch{}switch(n.tag){case 5:ge||Nn(n,t);case 6:var r=fe,i=Xe;fe=null,kt(e,t,n),fe=r,Xe=i,fe!==null&&(Xe?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Xe?(e=fe,n=n.stateNode,e.nodeType===8?Js(e.parentNode,n):e.nodeType===1&&Js(e,n),Or(e)):Js(fe,n.stateNode));break;case 4:r=fe,i=Xe,fe=n.stateNode.containerInfo,Xe=!0,kt(e,t,n),fe=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ul(n,t,o),i=i.next}while(i!==r)}kt(e,t,n);break;case 1:if(!ge&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,t,l)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,kt(e,t,n),ge=r):kt(e,t,n);break;default:kt(e,t,n)}}function Yu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new og),t.forEach(function(r){var i=gg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:fe=l.stateNode,Xe=!1;break e;case 3:fe=l.stateNode.containerInfo,Xe=!0;break e;case 4:fe=l.stateNode.containerInfo,Xe=!0;break e}l=l.return}if(fe===null)throw Error(N(160));_d(s,o,i),fe=null,Xe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){te(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jd(t,e),t=t.sibling}function jd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),Je(e),r&4){try{Er(3,e,e.return),As(3,e)}catch(y){te(e,e.return,y)}try{Er(5,e,e.return)}catch(y){te(e,e.return,y)}}break;case 1:We(t,e),Je(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(We(t,e),Je(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var i=e.stateNode;try{Nr(i,"")}catch(y){te(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&rf(i,s),jo(l,o);var c=jo(l,s);for(o=0;o<a.length;o+=2){var d=a[o],p=a[o+1];d==="style"?uf(i,p):d==="dangerouslySetInnerHTML"?lf(i,p):d==="children"?Nr(i,p):Ul(i,d,p,c)}switch(l){case"input":Io(i,s);break;case"textarea":sf(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?On(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?On(i,!!s.multiple,s.defaultValue,!0):On(i,!!s.multiple,s.multiple?[]:"",!1))}i[Dr]=s}catch(y){te(e,e.return,y)}}break;case 6:if(We(t,e),Je(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){te(e,e.return,y)}}break;case 3:if(We(t,e),Je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(y){te(e,e.return,y)}break;case 4:We(t,e),Je(e);break;case 13:We(t,e),Je(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ca=ne())),r&4&&Yu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(c=ge)||d,We(t,e),ge=c):We(t,e),Je(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(p=L=d;L!==null;){switch(h=L,g=h.child,h.tag){case 0:case 11:case 14:case 15:Er(4,h,h.return);break;case 1:Nn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){te(r,n,y)}}break;case 5:Nn(h,h.return);break;case 22:if(h.memoizedState!==null){Qu(p);continue}}g!==null?(g.return=h,L=g):Qu(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,a=p.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=af("display",o))}catch(y){te(e,e.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){te(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:We(t,e),Je(e),r&4&&Yu(e);break;case 21:break;default:We(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ld(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Nr(i,""),r.flags&=-33);var s=Wu(e);dl(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Wu(e);fl(e,l,o);break;default:throw Error(N(161))}}catch(a){te(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ag(e,t,n){L=e,Fd(e)}function Fd(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vi;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ge;l=vi;var c=ge;if(vi=o,(ge=a)&&!c)for(L=i;L!==null;)o=L,a=o.child,o.tag===22&&o.memoizedState!==null?Ku(i):a!==null?(a.return=o,L=a):Ku(i);for(;s!==null;)L=s,Fd(s),s=s.sibling;L=i,vi=l,ge=c}Xu(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):Xu(e)}}function Xu(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||As(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Mu(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mu(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Or(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ge||t.flags&512&&cl(t)}catch(h){te(t,t.return,h)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Qu(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Ku(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{As(4,t)}catch(a){te(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){te(t,i,a)}}var s=t.return;try{cl(t)}catch(a){te(t,s,a)}break;case 5:var o=t.return;try{cl(t)}catch(a){te(t,o,a)}}}catch(a){te(t,t.return,a)}if(t===e){L=null;break}var l=t.sibling;if(l!==null){l.return=t.return,L=l;break}L=t.return}}var ug=Math.ceil,is=St.ReactCurrentDispatcher,Ea=St.ReactCurrentOwner,Ge=St.ReactCurrentBatchConfig,$=0,ce=null,ie=null,de=0,be=0,zn=Yt(0),le=0,Hr=null,fn=0,Ts=0,ka=0,kr=null,Ee=null,Ca=0,Yn=1/0,ct=null,ss=!1,pl=null,Dt=null,yi=!1,zt=null,os=0,Cr=0,ml=null,Mi=-1,Oi=0;function we(){return $&6?ne():Mi!==-1?Mi:Mi=ne()}function Rt(e){return e.mode&1?$&2&&de!==0?de&-de:Wh.transition!==null?(Oi===0&&(Oi=Sf()),Oi):(e=G,e!==0||(e=window.event,e=e===void 0?16:Pf(e.type)),e):1}function qe(e,t,n,r){if(50<Cr)throw Cr=0,ml=null,Error(N(185));Qr(e,n,r),(!($&2)||e!==ce)&&(e===ce&&(!($&2)&&(Ts|=n),le===4&&Pt(e,de)),Te(e,r),n===1&&$===0&&!(t.mode&1)&&(Yn=ne()+500,Es&&Xt()))}function Te(e,t){var n=e.callbackNode;Wm(e,t);var r=Gi(e,e===ce?de:0);if(r===0)n!==null&&su(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&su(n),t===1)e.tag===0?Uh(qu.bind(null,e)):Yf(qu.bind(null,e)),$h(function(){!($&6)&&Xt()}),n=null;else{switch(Ef(r)){case 1:n=Kl;break;case 4:n=wf;break;case 16:n=Vi;break;case 536870912:n=xf;break;default:n=Vi}n=Ud(n,Dd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Dd(e,t){if(Mi=-1,Oi=0,$&6)throw Error(N(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=Gi(e,e===ce?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ls(e,r);else{t=r;var i=$;$|=2;var s=Bd();(ce!==e||de!==t)&&(ct=null,Yn=ne()+500,rn(e,t));do try{dg();break}catch(l){Rd(e,l)}while(!0);ua(),is.current=s,$=i,ie!==null?t=0:(ce=null,de=0,t=le)}if(t!==0){if(t===2&&(i=$o(e),i!==0&&(r=i,t=hl(e,i))),t===1)throw n=Hr,rn(e,0),Pt(e,r),Te(e,ne()),n;if(t===6)Pt(e,r);else{if(i=e.current.alternate,!(r&30)&&!cg(i)&&(t=ls(e,r),t===2&&(s=$o(e),s!==0&&(r=s,t=hl(e,s))),t===1))throw n=Hr,rn(e,0),Pt(e,r),Te(e,ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Zt(e,Ee,ct);break;case 3:if(Pt(e,r),(r&130023424)===r&&(t=Ca+500-ne(),10<t)){if(Gi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Qo(Zt.bind(null,e,Ee,ct),t);break}Zt(e,Ee,ct);break;case 4:if(Pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ke(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ug(r/1960))-r,10<r){e.timeoutHandle=Qo(Zt.bind(null,e,Ee,ct),r);break}Zt(e,Ee,ct);break;case 5:Zt(e,Ee,ct);break;default:throw Error(N(329))}}}return Te(e,ne()),e.callbackNode===n?Dd.bind(null,e):null}function hl(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=ls(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&gl(t)),e}function gl(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function cg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ze(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t){for(t&=~ka,t&=~Ts,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function qu(e){if($&6)throw Error(N(327));Dn();var t=Gi(e,0);if(!(t&1))return Te(e,ne()),null;var n=ls(e,t);if(e.tag!==0&&n===2){var r=$o(e);r!==0&&(t=r,n=hl(e,r))}if(n===1)throw n=Hr,rn(e,0),Pt(e,t),Te(e,ne()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zt(e,Ee,ct),Te(e,ne()),null}function Aa(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(Yn=ne()+500,Es&&Xt())}}function dn(e){zt!==null&&zt.tag===0&&!($&6)&&Dn();var t=$;$|=1;var n=Ge.transition,r=G;try{if(Ge.transition=null,G=1,e)return e()}finally{G=r,Ge.transition=n,$=t,!($&6)&&Xt()}}function Ta(){be=zn.current,W(zn)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bh(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(oa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xi();break;case 3:Un(),W(Ce),W(ve),ha();break;case 5:ma(r);break;case 4:Un();break;case 13:W(Z);break;case 19:W(Z);break;case 10:ca(r.type._context);break;case 22:case 23:Ta()}n=n.return}if(ce=e,ie=e=Bt(e.current,null),de=be=t,le=0,Hr=null,ka=Ts=fn=0,Ee=kr=null,tn!==null){for(t=0;t<tn.length;t++)if(n=tn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}tn=null}return e}function Rd(e,t){do{var n=ie;try{if(ua(),Ni.current=rs,ns){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ns=!1}if(cn=0,ue=oe=J=null,Sr=!1,$r=0,Ea.current=null,n===null||n.return===null){le=1,Hr=t,ie=null;break}e:{var s=e,o=n.return,l=n,a=t;if(t=de,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Du(o);if(g!==null){g.flags&=-257,Ru(g,o,l,s,t),g.mode&1&&Fu(s,c,t),t=g,a=c;var v=t.updateQueue;if(v===null){var y=new Set;y.add(a),t.updateQueue=y}else v.add(a);break e}else{if(!(t&1)){Fu(s,c,t),ba();break e}a=Error(N(426))}}else if(X&&l.mode&1){var E=Du(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Ru(E,o,l,s,t),la(Wn(a,l));break e}}s=a=Wn(a,l),le!==4&&(le=2),kr===null?kr=[s]:kr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var u=Ed(s,a,t);Iu(s,u);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Dt===null||!Dt.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=kd(s,l,t);Iu(s,w);break e}}s=s.return}while(s!==null)}Vd(n)}catch(x){t=x,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function Bd(){var e=is.current;return is.current=rs,e===null?rs:e}function ba(){(le===0||le===3||le===2)&&(le=4),ce===null||!(fn&268435455)&&!(Ts&268435455)||Pt(ce,de)}function ls(e,t){var n=$;$|=2;var r=Bd();(ce!==e||de!==t)&&(ct=null,rn(e,t));do try{fg();break}catch(i){Rd(e,i)}while(!0);if(ua(),$=n,is.current=r,ie!==null)throw Error(N(261));return ce=null,de=0,le}function fg(){for(;ie!==null;)$d(ie)}function dg(){for(;ie!==null&&!Fm();)$d(ie)}function $d(e){var t=Hd(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Vd(e):ie=t,Ea.current=null}function Vd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=sg(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ie=null;return}}else if(n=ig(n,t,be),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);le===0&&(le=5)}function Zt(e,t,n){var r=G,i=Ge.transition;try{Ge.transition=null,G=1,pg(e,t,n,r)}finally{Ge.transition=i,G=r}return null}function pg(e,t,n,r){do Dn();while(zt!==null);if($&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ym(e,s),e===ce&&(ie=ce=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yi||(yi=!0,Ud(Vi,function(){return Dn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ge.transition,Ge.transition=null;var o=G;G=1;var l=$;$|=4,Ea.current=null,lg(e,n),jd(n,e),Oh(Yo),Hi=!!Wo,Yo=Wo=null,e.current=n,ag(n),Dm(),$=l,G=o,Ge.transition=s}else e.current=n;if(yi&&(yi=!1,zt=e,os=i),s=e.pendingLanes,s===0&&(Dt=null),$m(n.stateNode),Te(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ss)throw ss=!1,e=pl,pl=null,e;return os&1&&e.tag!==0&&Dn(),s=e.pendingLanes,s&1?e===ml?Cr++:(Cr=0,ml=e):Cr=0,Xt(),null}function Dn(){if(zt!==null){var e=Ef(os),t=Ge.transition,n=G;try{if(Ge.transition=null,G=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,os=0,$&6)throw Error(N(331));var i=$;for($|=4,L=e.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(L=c;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:Er(8,d,s)}var p=d.child;if(p!==null)p.return=d,L=p;else for(;L!==null;){d=L;var h=d.sibling,g=d.return;if(Od(d),d===c){L=null;break}if(h!==null){h.return=g,L=h;break}L=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Er(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,L=u;break e}L=s.return}}var f=e.current;for(L=f;L!==null;){o=L;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,L=m;else e:for(o=f;L!==null;){if(l=L,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:As(9,l)}}catch(x){te(l,l.return,x)}if(l===o){L=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,L=w;break e}L=l.return}}if($=i,Xt(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(vs,e)}catch{}r=!0}return r}finally{G=n,Ge.transition=t}}return!1}function Zu(e,t,n){t=Wn(n,t),t=Ed(e,t,1),e=Ft(e,t,1),t=we(),e!==null&&(Qr(e,1,t),Te(e,t))}function te(e,t,n){if(e.tag===3)Zu(e,e,n);else for(;t!==null;){if(t.tag===3){Zu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dt===null||!Dt.has(r))){e=Wn(n,e),e=kd(t,e,1),t=Ft(t,e,1),e=we(),t!==null&&(Qr(t,1,e),Te(t,e));break}}t=t.return}}function mg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(de&n)===n&&(le===4||le===3&&(de&130023424)===de&&500>ne()-Ca?rn(e,0):ka|=n),Te(e,t)}function Gd(e,t){t===0&&(e.mode&1?(t=ai,ai<<=1,!(ai&130023424)&&(ai=4194304)):t=1);var n=we();e=vt(e,t),e!==null&&(Qr(e,t,n),Te(e,n))}function hg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gd(e,n)}function gg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Gd(e,n)}var Hd;Hd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,rg(e,t,n);ke=!!(e.flags&131072)}else ke=!1,X&&t.flags&1048576&&Xf(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ii(e,t),e=t.pendingProps;var i=Vn(t,ve.current);Fn(t,n),i=va(null,t,r,e,i,n);var s=ya();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(s=!0,Qi(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,da(t),i.updater=Cs,t.stateNode=i,i._reactInternals=t,nl(t,r,e,n),t=sl(null,t,r,!0,s,n)):(t.tag=0,X&&s&&sa(t),ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ii(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=yg(r),e=Ye(r,e),i){case 0:t=il(null,t,r,e,n);break e;case 1:t=Vu(null,t,r,e,n);break e;case 11:t=Bu(null,t,r,e,n);break e;case 14:t=$u(null,t,r,Ye(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),il(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Vu(e,t,r,i,n);case 3:e:{if(bd(t),e===null)throw Error(N(387));r=t.pendingProps,s=t.memoizedState,i=s.element,ed(e,t),es(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Wn(Error(N(423)),t),t=Gu(e,t,r,n,i);break e}else if(r!==i){i=Wn(Error(N(424)),t),t=Gu(e,t,r,n,i);break e}else for(Ne=jt(t.stateNode.containerInfo.firstChild),ze=t,X=!0,Qe=null,n=Zf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gn(),r===i){t=yt(e,t,n);break e}ye(e,t,r,n)}t=t.child}return t;case 5:return td(t),e===null&&Jo(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Xo(r,i)?o=null:s!==null&&Xo(r,s)&&(t.flags|=32),Td(e,t),ye(e,t,o,n),t.child;case 6:return e===null&&Jo(t),null;case 13:return Pd(e,t,n);case 4:return pa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hn(t,null,r,n):ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Bu(e,t,r,i,n);case 7:return ye(e,t,t.pendingProps,n),t.child;case 8:return ye(e,t,t.pendingProps.children,n),t.child;case 12:return ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,H(Zi,r._currentValue),r._currentValue=o,s!==null)if(Ze(s.value,o)){if(s.children===i.children&&!Ce.current){t=yt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=mt(-1,n&-n),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),el(s.return,n,t),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),el(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fn(t,n),i=He(i),r=r(i),t.flags|=1,ye(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),$u(e,t,r,i,n);case 15:return Cd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Ii(e,t),t.tag=1,Ae(r)?(e=!0,Qi(t)):e=!1,Fn(t,n),Sd(t,r,i),nl(t,r,i,n),sl(null,t,r,!0,e,n);case 19:return Nd(e,t,n);case 22:return Ad(e,t,n)}throw Error(N(156,t.tag))};function Ud(e,t){return yf(e,t)}function vg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,t,n,r){return new vg(e,t,n,r)}function Pa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yg(e){if(typeof e=="function")return Pa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yl)return 11;if(e===Xl)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=Ve(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Li(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Pa(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case xn:return sn(n.children,i,s,t);case Wl:o=8,i|=8;break;case To:return e=Ve(12,n,t,i|2),e.elementType=To,e.lanes=s,e;case bo:return e=Ve(13,n,t,i),e.elementType=bo,e.lanes=s,e;case Po:return e=Ve(19,n,t,i),e.elementType=Po,e.lanes=s,e;case ef:return bs(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zc:o=10;break e;case Jc:o=9;break e;case Yl:o=11;break e;case Xl:o=14;break e;case At:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Ve(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function sn(e,t,n,r){return e=Ve(7,e,r,t),e.lanes=n,e}function bs(e,t,n,r){return e=Ve(22,e,r,t),e.elementType=ef,e.lanes=n,e.stateNode={isHidden:!1},e}function lo(e,t,n){return e=Ve(6,e,null,t),e.lanes=n,e}function ao(e,t,n){return t=Ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vs(0),this.expirationTimes=Vs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Na(e,t,n,r,i,s,o,l,a){return e=new wg(e,t,n,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ve(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},da(s),e}function xg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wd(e){if(!e)return Vt;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Wf(e,n,t)}return t}function Yd(e,t,n,r,i,s,o,l,a){return e=Na(n,r,!0,e,i,s,o,l,a),e.context=Wd(null),n=e.current,r=we(),i=Rt(n),s=mt(r,i),s.callback=t??null,Ft(n,s,i),e.current.lanes=i,Qr(e,i,r),Te(e,r),e}function Ps(e,t,n,r){var i=t.current,s=we(),o=Rt(i);return n=Wd(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(i,t,o),e!==null&&(qe(e,i,o,s),Pi(e,i,o)),o}function as(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ju(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function za(e,t){Ju(e,t),(e=e.alternate)&&Ju(e,t)}function Sg(){return null}var Xd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ia(e){this._internalRoot=e}Ns.prototype.render=Ia.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Ps(e,t,null,null)};Ns.prototype.unmount=Ia.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){Ps(null,e,null,null)}),t[gt]=null}};function Ns(e){this._internalRoot=e}Ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=Af();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bt.length&&t!==0&&t<bt[n].priority;n++);bt.splice(n,0,e),n===0&&bf(e)}};function Ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ec(){}function Eg(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=as(o);s.call(c)}}var o=Yd(t,r,e,0,null,!1,!1,"",ec);return e._reactRootContainer=o,e[gt]=o.current,jr(e.nodeType===8?e.parentNode:e),dn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=as(a);l.call(c)}}var a=Na(e,0,!1,null,null,!1,!1,"",ec);return e._reactRootContainer=a,e[gt]=a.current,jr(e.nodeType===8?e.parentNode:e),dn(function(){Ps(t,a,n,r)}),a}function Is(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=as(o);l.call(a)}}Ps(t,o,e,i)}else o=Eg(n,t,e,i,r);return as(o)}kf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(ql(t,n|1),Te(t,ne()),!($&6)&&(Yn=ne()+500,Xt()))}break;case 13:dn(function(){var r=vt(e,1);if(r!==null){var i=we();qe(r,e,1,i)}}),za(e,1)}};Zl=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=we();qe(t,e,134217728,n)}za(e,134217728)}};Cf=function(e){if(e.tag===13){var t=Rt(e),n=vt(e,t);if(n!==null){var r=we();qe(n,e,t,r)}za(e,t)}};Af=function(){return G};Tf=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};Do=function(e,t,n){switch(t){case"input":if(Io(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ss(r);if(!i)throw Error(N(90));nf(r),Io(r,i)}}}break;case"textarea":sf(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};df=Aa;pf=dn;var kg={usingClientEntryPoint:!1,Events:[qr,Cn,Ss,cf,ff,Aa]},ar={findFiberByHostInstance:en,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cg={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gf(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||Sg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{vs=wi.inject(Cg),ot=wi}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kg;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ma(t))throw Error(N(200));return xg(e,t,null,n)};Le.createRoot=function(e,t){if(!Ma(e))throw Error(N(299));var n=!1,r="",i=Xd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Na(e,1,!1,null,null,n,!1,r,i),e[gt]=t.current,jr(e.nodeType===8?e.parentNode:e),new Ia(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=gf(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return dn(e)};Le.hydrate=function(e,t,n){if(!zs(t))throw Error(N(200));return Is(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!Ma(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Xd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Yd(t,null,e,1,n??null,i,!1,s,o),e[gt]=t.current,jr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ns(t)};Le.render=function(e,t,n){if(!zs(t))throw Error(N(200));return Is(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!zs(e))throw Error(N(40));return e._reactRootContainer?(dn(function(){Is(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Le.unstable_batchedUpdates=Aa;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zs(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Is(e,t,n,!1,r)};Le.version="18.3.1-next-f1338f8080-20240426";function Qd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qd)}catch(e){console.error(e)}}Qd(),Xc.exports=Le;var Ag=Xc.exports,tc=Ag;Di.createRoot=tc.createRoot,Di.hydrateRoot=tc.hydrateRoot;const Kd={prefix:"fas",iconName:"circle-chevron-right",icon:[512,512,["chevron-circle-right"],"f138","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"]},Tg={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]},qd=Tg,bg={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Pg={prefix:"fas",iconName:"volume-xmark",icon:[576,512,["volume-mute","volume-times"],"f6a9","M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},Zd=Pg,Ng={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Jd=Ng,ep={prefix:"fas",iconName:"circle-chevron-left",icon:[512,512,["chevron-circle-left"],"f137","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"]},nc=()=>{};let Oa={},tp={},np=null,rp={mark:nc,measure:nc};try{typeof window<"u"&&(Oa=window),typeof document<"u"&&(tp=document),typeof MutationObserver<"u"&&(np=MutationObserver),typeof performance<"u"&&(rp=performance)}catch{}const{userAgent:rc=""}=Oa.navigator||{},Gt=Oa,Y=tp,ic=np,xi=rp;Gt.document;const Et=!!Y.documentElement&&!!Y.head&&typeof Y.addEventListener=="function"&&typeof Y.createElement=="function",ip=~rc.indexOf("MSIE")||~rc.indexOf("Trident/");var Q="classic",sp="duotone",Ie="sharp",Me="sharp-duotone",zg=[Q,sp,Ie,Me],Ig={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},sc={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Mg=["kit"],Og=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Lg=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,_g={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},jg={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Fg={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Dg={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Rg={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Bg={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},op={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},$g=["solid","regular","light","thin","duotone","brands"],lp=[1,2,3,4,5,6,7,8,9,10],Vg=lp.concat([11,12,13,14,15,16,17,18,19,20]),mr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gg=[...Object.keys(Dg),...$g,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",mr.GROUP,mr.SWAP_OPACITY,mr.PRIMARY,mr.SECONDARY].concat(lp.map(e=>"".concat(e,"x"))).concat(Vg.map(e=>"w-".concat(e))),Hg={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ug={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Wg={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},oc={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const wt="___FONT_AWESOME___",vl=16,ap="fa",up="svg-inline--fa",pn="data-fa-i2svg",yl="data-fa-pseudo-element",Yg="data-fa-pseudo-element-pending",La="data-prefix",_a="data-icon",lc="fontawesome-i2svg",Xg="async",Qg=["HTML","HEAD","STYLE","SCRIPT"],cp=(()=>{try{return!0}catch{return!1}})(),fp=[Q,Ie,Me];function Jr(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[Q]}})}const dp={...op};dp[Q]={...op[Q],...sc.kit,...sc["kit-duotone"]};const on=Jr(dp),wl={...Bg};wl[Q]={...wl[Q],...oc.kit,...oc["kit-duotone"]};const Ur=Jr(wl),xl={...Rg};xl[Q]={...xl[Q],...Wg.kit};const ln=Jr(xl),Sl={...Fg};Sl[Q]={...Sl[Q],...Ug.kit};const Kg=Jr(Sl),qg=Og,pp="fa-layers-text",Zg=Lg,Jg={...Ig};Jr(Jg);const ev=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],uo=mr,Xn=new Set;Object.keys(Ur[Q]).map(Xn.add.bind(Xn));Object.keys(Ur[Ie]).map(Xn.add.bind(Xn));Object.keys(Ur[Me]).map(Xn.add.bind(Xn));const tv=[...Mg,...Gg],Ar=Gt.FontAwesomeConfig||{};function nv(e){var t=Y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function rv(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}Y&&typeof Y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=rv(nv(n));i!=null&&(Ar[r]=i)});const mp={styleDefault:"solid",familyDefault:"classic",cssPrefix:ap,replacementClass:up,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ar.familyPrefix&&(Ar.cssPrefix=Ar.familyPrefix);const Qn={...mp,...Ar};Qn.autoReplaceSvg||(Qn.observeMutations=!1);const _={};Object.keys(mp).forEach(e=>{Object.defineProperty(_,e,{enumerable:!0,set:function(t){Qn[e]=t,Tr.forEach(n=>n(_))},get:function(){return Qn[e]}})});Object.defineProperty(_,"familyPrefix",{enumerable:!0,set:function(e){Qn.cssPrefix=e,Tr.forEach(t=>t(_))},get:function(){return Qn.cssPrefix}});Gt.FontAwesomeConfig=_;const Tr=[];function iv(e){return Tr.push(e),()=>{Tr.splice(Tr.indexOf(e),1)}}const Ct=vl,rt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function sv(e){if(!e||!Et)return;const t=Y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=Y.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Y.head.insertBefore(t,r),e}const ov="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Wr(){let e=12,t="";for(;e-- >0;)t+=ov[Math.random()*62|0];return t}function Jn(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ja(e){return e.classList?Jn(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function hp(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lv(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(hp(e[n]),'" '),"").trim()}function Ms(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Fa(e){return e.size!==rt.size||e.x!==rt.x||e.y!==rt.y||e.rotate!==rt.rotate||e.flipX||e.flipY}function av(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),a={transform:"".concat(s," ").concat(o," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:a,path:c}}function uv(e){let{transform:t,width:n=vl,height:r=vl,startCentered:i=!1}=e,s="";return i&&ip?s+="translate(".concat(t.x/Ct-n/2,"em, ").concat(t.y/Ct-r/2,"em) "):i?s+="translate(calc(-50% + ".concat(t.x/Ct,"em), calc(-50% + ").concat(t.y/Ct,"em)) "):s+="translate(".concat(t.x/Ct,"em, ").concat(t.y/Ct,"em) "),s+="scale(".concat(t.size/Ct*(t.flipX?-1:1),", ").concat(t.size/Ct*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var cv=`:root, :host {
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
}`;function gp(){const e=ap,t=up,n=_.cssPrefix,r=_.replacementClass;let i=cv;if(n!==e||r!==t){const s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let ac=!1;function co(){_.autoAddCss&&!ac&&(sv(gp()),ac=!0)}var fv={mixout(){return{dom:{css:gp,insertCss:co}}},hooks(){return{beforeDOMElementCreation(){co()},beforeI2svg(){co()}}}};const xt=Gt||{};xt[wt]||(xt[wt]={});xt[wt].styles||(xt[wt].styles={});xt[wt].hooks||(xt[wt].hooks={});xt[wt].shims||(xt[wt].shims=[]);var it=xt[wt];const vp=[],yp=function(){Y.removeEventListener("DOMContentLoaded",yp),us=1,vp.map(e=>e())};let us=!1;Et&&(us=(Y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Y.readyState),us||Y.addEventListener("DOMContentLoaded",yp));function dv(e){Et&&(us?setTimeout(e,0):vp.push(e))}function ei(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?hp(e):"<".concat(t," ").concat(lv(n),">").concat(r.map(ei).join(""),"</").concat(t,">")}function uc(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var fo=function(t,n,r,i){var s=Object.keys(t),o=s.length,l=n,a,c,d;for(r===void 0?(a=1,d=t[s[0]]):(a=0,d=r);a<o;a++)c=s[a],d=l(d,t[c],c,t);return d};function pv(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function El(e){const t=pv(e);return t.length===1?t[0].toString(16):null}function mv(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function cc(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function kl(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=cc(t);typeof it.hooks.addPack=="function"&&!r?it.hooks.addPack(e,cc(t)):it.styles[e]={...it.styles[e]||{},...i},e==="fas"&&kl("fa",t)}const{styles:Jt,shims:hv}=it,gv={[Q]:Object.values(ln[Q]),[Ie]:Object.values(ln[Ie]),[Me]:Object.values(ln[Me])};let Da=null,wp={},xp={},Sp={},Ep={},kp={};const vv={[Q]:Object.keys(on[Q]),[Ie]:Object.keys(on[Ie]),[Me]:Object.keys(on[Me])};function yv(e){return~tv.indexOf(e)}function wv(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!yv(i)?i:null}const Cp=()=>{const e=r=>fo(Jt,(i,s,o)=>(i[o]=fo(s,r,{}),i),{});wp=e((r,i,s)=>(i[3]&&(r[i[3]]=s),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=s}),r)),xp=e((r,i,s)=>(r[s]=s,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=s}),r)),kp=e((r,i,s)=>{const o=i[2];return r[s]=s,o.forEach(l=>{r[l]=s}),r});const t="far"in Jt||_.autoFetchSvg,n=fo(hv,(r,i)=>{const s=i[0];let o=i[1];const l=i[2];return o==="far"&&!t&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});Sp=n.names,Ep=n.unicodes,Da=Os(_.styleDefault,{family:_.familyDefault})};iv(e=>{Da=Os(e.styleDefault,{family:_.familyDefault})});Cp();function Ra(e,t){return(wp[e]||{})[t]}function xv(e,t){return(xp[e]||{})[t]}function It(e,t){return(kp[e]||{})[t]}function Ap(e){return Sp[e]||{prefix:null,iconName:null}}function Sv(e){const t=Ep[e],n=Ra("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ht(){return Da}const Ba=()=>({prefix:null,iconName:null,rest:[]});function Os(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Q}=t,r=on[n][e],i=Ur[n][e]||Ur[n][r],s=e in it.styles?e:null;return i||s||null}const Ev={[Q]:Object.keys(ln[Q]),[Ie]:Object.keys(ln[Ie]),[Me]:Object.keys(ln[Me])};function Ls(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[Q]:"".concat(_.cssPrefix,"-").concat(Q),[Ie]:"".concat(_.cssPrefix,"-").concat(Ie),[Me]:"".concat(_.cssPrefix,"-").concat(Me)};let i=null,s=Q;const o=zg.filter(a=>a!==sp);o.forEach(a=>{(e.includes(r[a])||e.some(c=>Ev[a].includes(c)))&&(s=a)});const l=e.reduce((a,c)=>{const d=wv(_.cssPrefix,c);if(Jt[c]?(c=gv[s].includes(c)?Kg[s][c]:c,i=c,a.prefix=c):vv[s].indexOf(c)>-1?(i=c,a.prefix=Os(c,{family:s})):d?a.iconName=d:c!==_.replacementClass&&!o.some(p=>c===r[p])&&a.rest.push(c),!n&&a.prefix&&a.iconName){const p=i==="fa"?Ap(a.iconName):{},h=It(a.prefix,a.iconName);p.prefix&&(i=null),a.iconName=p.iconName||h||a.iconName,a.prefix=p.prefix||a.prefix,a.prefix==="far"&&!Jt.far&&Jt.fas&&!_.autoFetchSvg&&(a.prefix="fas")}return a},Ba());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Ie&&(Jt.fass||_.autoFetchSvg)&&(l.prefix="fass",l.iconName=It(l.prefix,l.iconName)||l.iconName),!l.prefix&&s===Me&&(Jt.fasds||_.autoFetchSvg)&&(l.prefix="fasds",l.iconName=It(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=Ht()||"fas"),l}class kv{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...i[s]},kl(s,i[s]);const o=ln[Q][s];o&&kl(o,i[s]),Cp()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:s,iconName:o,icon:l}=r[i],a=l[2];t[s]||(t[s]={}),a.length>0&&a.forEach(c=>{typeof c=="string"&&(t[s][c]=l)}),t[s][o]=l}),t}}let fc=[],In={};const Rn={},Cv=Object.keys(Rn);function Av(e,t){let{mixoutsTo:n}=t;return fc=e,In={},Object.keys(Rn).forEach(r=>{Cv.indexOf(r)===-1&&delete Rn[r]}),fc.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(s=>{typeof i[s]=="function"&&(n[s]=i[s]),typeof i[s]=="object"&&Object.keys(i[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(o=>{In[o]||(In[o]=[]),In[o].push(s[o])})}r.provides&&r.provides(Rn)}),n}function Cl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(In[e]||[]).forEach(o=>{t=o.apply(null,[t,...r])}),t}function mn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(In[e]||[]).forEach(s=>{s.apply(null,n)})}function Ut(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Rn[e]?Rn[e].apply(null,t):void 0}function Al(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Ht();if(t)return t=It(n,t)||t,uc(Tp.definitions,n,t)||uc(it.styles,n,t)}const Tp=new kv,Tv=()=>{_.autoReplaceSvg=!1,_.observeMutations=!1,mn("noAuto")},bv={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Et?(mn("beforeI2svg",e),Ut("pseudoElements2svg",e),Ut("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;_.autoReplaceSvg===!1&&(_.autoReplaceSvg=!0),_.observeMutations=!0,dv(()=>{Nv({autoReplaceSvgRoot:t}),mn("watch",e)})}},Pv={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:It(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Os(e[0]);return{prefix:n,iconName:It(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(_.cssPrefix,"-"))>-1||e.match(qg))){const t=Ls(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Ht(),iconName:It(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Ht();return{prefix:t,iconName:It(t,e)||e}}}},je={noAuto:Tv,config:_,dom:bv,parse:Pv,library:Tp,findIconDefinition:Al,toHtml:ei},Nv=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=Y}=e;(Object.keys(it.styles).length>0||_.autoFetchSvg)&&Et&&_.autoReplaceSvg&&je.dom.i2svg({node:t})};function _s(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>ei(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Et)return;const n=Y.createElement("div");return n.innerHTML=e.html,n.children}}),e}function zv(e){let{children:t,main:n,mask:r,attributes:i,styles:s,transform:o}=e;if(Fa(o)&&n.found&&!r.found){const{width:l,height:a}=n,c={x:l/a/2,y:.5};i.style=Ms({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:t}]}function Iv(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:s}=e;const o=s===!0?"".concat(t,"-").concat(_.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:r}]}]}function $a(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:s,symbol:o,title:l,maskId:a,titleId:c,extra:d,watchable:p=!1}=e,{width:h,height:g}=n.found?n:t,v=r==="fak",y=[_.replacementClass,i?"".concat(_.cssPrefix,"-").concat(i):""].filter(x=>d.classes.indexOf(x)===-1).filter(x=>x!==""||!!x).concat(d.classes).join(" ");let E={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":i,class:y,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(g)}};const u=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(h/g*16*.0625,"em")}:{};p&&(E.attributes[pn]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(c||Wr())},children:[l]}),delete E.attributes.title);const f={...E,prefix:r,iconName:i,main:t,mask:n,maskId:a,transform:s,symbol:o,styles:{...u,...d.styles}},{children:m,attributes:w}=n.found&&t.found?Ut("generateAbstractMask",f)||{children:[],attributes:{}}:Ut("generateAbstractIcon",f)||{children:[],attributes:{}};return f.children=m,f.attributes=w,o?Iv(f):zv(f)}function dc(e){const{content:t,width:n,height:r,transform:i,title:s,extra:o,watchable:l=!1}=e,a={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};l&&(a[pn]="");const c={...o.styles};Fa(i)&&(c.transform=uv({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const d=Ms(c);d.length>0&&(a.style=d);const p=[];return p.push({tag:"span",attributes:a,children:[t]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function Mv(e){const{content:t,title:n,extra:r}=e,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=Ms(r.styles);s.length>0&&(i.style=s);const o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:po}=it;function Tl(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(_.cssPrefix,"-").concat(uo.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(uo.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(uo.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const Ov={found:!1,width:512,height:512};function Lv(e,t){!cp&&!_.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function bl(e,t){let n=t;return t==="fa"&&_.styleDefault!==null&&(t=Ht()),new Promise((r,i)=>{if(n==="fa"){const s=Ap(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&po[t]&&po[t][e]){const s=po[t][e];return r(Tl(s))}Lv(e,t),r({...Ov,icon:_.showMissingIcons&&e?Ut("missingIconAbstract")||{}:{}})})}const pc=()=>{},Pl=_.measurePerformance&&xi&&xi.mark&&xi.measure?xi:{mark:pc,measure:pc},hr='FA "6.6.0"',_v=e=>(Pl.mark("".concat(hr," ").concat(e," begins")),()=>bp(e)),bp=e=>{Pl.mark("".concat(hr," ").concat(e," ends")),Pl.measure("".concat(hr," ").concat(e),"".concat(hr," ").concat(e," begins"),"".concat(hr," ").concat(e," ends"))};var Va={begin:_v,end:bp};const _i=()=>{};function mc(e){return typeof(e.getAttribute?e.getAttribute(pn):null)=="string"}function jv(e){const t=e.getAttribute?e.getAttribute(La):null,n=e.getAttribute?e.getAttribute(_a):null;return t&&n}function Fv(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(_.replacementClass)}function Dv(){return _.autoReplaceSvg===!0?ji.replace:ji[_.autoReplaceSvg]||ji.replace}function Rv(e){return Y.createElementNS("http://www.w3.org/2000/svg",e)}function Bv(e){return Y.createElement(e)}function Pp(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Rv:Bv}=t;if(typeof e=="string")return Y.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(s){r.setAttribute(s,e.attributes[s])}),(e.children||[]).forEach(function(s){r.appendChild(Pp(s,{ceFn:n}))}),r}function $v(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const ji={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Pp(n),t)}),t.getAttribute(pn)===null&&_.keepOriginalSource){let n=Y.createComment($v(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~ja(t).indexOf(_.replacementClass))return ji.replace(e);const r=new RegExp("".concat(_.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,l)=>(l===_.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}const i=n.map(s=>ei(s)).join(`
`);t.setAttribute(pn,""),t.innerHTML=i}};function hc(e){e()}function Np(e,t){const n=typeof t=="function"?t:_i;if(e.length===0)n();else{let r=hc;_.mutateApproach===Xg&&(r=Gt.requestAnimationFrame||hc),r(()=>{const i=Dv(),s=Va.begin("mutate");e.map(i),s(),n()})}}let Ga=!1;function zp(){Ga=!0}function Nl(){Ga=!1}let cs=null;function gc(e){if(!ic||!_.observeMutations)return;const{treeCallback:t=_i,nodeCallback:n=_i,pseudoElementsCallback:r=_i,observeMutationsRoot:i=Y}=e;cs=new ic(s=>{if(Ga)return;const o=Ht();Jn(s).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!mc(l.addedNodes[0])&&(_.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&_.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&mc(l.target)&&~ev.indexOf(l.attributeName))if(l.attributeName==="class"&&jv(l.target)){const{prefix:a,iconName:c}=Ls(ja(l.target));l.target.setAttribute(La,a||o),c&&l.target.setAttribute(_a,c)}else Fv(l.target)&&n(l.target)})}),Et&&cs.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Vv(){cs&&cs.disconnect()}function Gv(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const s=i.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function Hv(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=Ls(ja(e));return i.prefix||(i.prefix=Ht()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=xv(i.prefix,e.innerText)||Ra(i.prefix,El(e.innerText))),!i.iconName&&_.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Uv(e){const t=Jn(e.attributes).reduce((i,s)=>(i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return _.autoA11y&&(n?t["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(r||Wr()):(t["aria-hidden"]="true",t.focusable="false")),t}function Wv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:rt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function vc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=Hv(e),s=Uv(e),o=Cl("parseNodeAttributes",{},e);let l=t.styleParser?Gv(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:rt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s},...o}}const{styles:Yv}=it;function Ip(e){const t=_.autoReplaceSvg==="nest"?vc(e,{styleParser:!1}):vc(e);return~t.extra.classes.indexOf(pp)?Ut("generateLayersText",e,t):Ut("generateSvgReplacementMutation",e,t)}let at=new Set;fp.map(e=>{at.add("fa-".concat(e))});Object.keys(on[Q]).map(at.add.bind(at));Object.keys(on[Ie]).map(at.add.bind(at));Object.keys(on[Me]).map(at.add.bind(at));at=[...at];function yc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Et)return Promise.resolve();const n=Y.documentElement.classList,r=d=>n.add("".concat(lc,"-").concat(d)),i=d=>n.remove("".concat(lc,"-").concat(d)),s=_.autoFetchSvg?at:fp.map(d=>"fa-".concat(d)).concat(Object.keys(Yv));s.includes("fa")||s.push("fa");const o=[".".concat(pp,":not([").concat(pn,"])")].concat(s.map(d=>".".concat(d,":not([").concat(pn,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=Jn(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const a=Va.begin("onTree"),c=l.reduce((d,p)=>{try{const h=Ip(p);h&&d.push(h)}catch(h){cp||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise((d,p)=>{Promise.all(c).then(h=>{Np(h,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),a(),d()})}).catch(h=>{a(),p(h)})})}function Xv(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ip(e).then(n=>{n&&Np([n],t)})}function Qv(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Al(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Al(i||{})),e(r,{...n,mask:i})}}const Kv=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=rt,symbol:r=!1,mask:i=null,maskId:s=null,title:o=null,titleId:l=null,classes:a=[],attributes:c={},styles:d={}}=t;if(!e)return;const{prefix:p,iconName:h,icon:g}=e;return _s({type:"icon",...e},()=>(mn("beforeDOMElementCreation",{iconDefinition:e,params:t}),_.autoA11y&&(o?c["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(l||Wr()):(c["aria-hidden"]="true",c.focusable="false")),$a({icons:{main:Tl(g),mask:i?Tl(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:h,transform:{...rt,...n},symbol:r,title:o,maskId:s,titleId:l,extra:{attributes:c,styles:d,classes:a}})))};var qv={mixout(){return{icon:Qv(Kv)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=yc,e.nodeCallback=Xv,e}}},provides(e){e.i2svg=function(t){const{node:n=Y,callback:r=()=>{}}=t;return yc(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:s,prefix:o,transform:l,symbol:a,mask:c,maskId:d,extra:p}=n;return new Promise((h,g)=>{Promise.all([bl(r,o),c.iconName?bl(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(v=>{let[y,E]=v;h([t,$a({icons:{main:y,mask:E},prefix:o,iconName:r,transform:l,symbol:a,maskId:d,title:i,titleId:s,extra:p,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:s,styles:o}=t;const l=Ms(o);l.length>0&&(r.style=l);let a;return Fa(s)&&(a=Ut("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(a||i.icon),{children:n,attributes:r}}}},Zv={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return _s({type:"layer"},()=>{mn("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(s=>{r=r.concat(s.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(_.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Jv={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:s={}}=t;return _s({type:"counter",content:e},()=>(mn("beforeDOMElementCreation",{content:e,params:t}),Mv({content:e.toString(),title:n,extra:{attributes:i,styles:s,classes:["".concat(_.cssPrefix,"-layers-counter"),...r]}})))}}}},e0={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=rt,title:r=null,classes:i=[],attributes:s={},styles:o={}}=t;return _s({type:"text",content:e},()=>(mn("beforeDOMElementCreation",{content:e,params:t}),dc({content:e,transform:{...rt,...n},title:r,extra:{attributes:s,styles:o,classes:["".concat(_.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:s}=n;let o=null,l=null;if(ip){const a=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/a,l=c.height/a}return _.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,dc({content:t.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}};const t0=new RegExp('"',"ug"),wc=[1105920,1112319],xc={FontAwesome:{normal:"fas",400:"fas"},...jg,..._g,...Hg},zl=Object.keys(xc).reduce((e,t)=>(e[t.toLowerCase()]=xc[t],e),{}),n0=Object.keys(zl).reduce((e,t)=>{const n=zl[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function r0(e){const t=e.replace(t0,""),n=mv(t,0),r=n>=wc[0]&&n<=wc[1],i=t.length===2?t[0]===t[1]:!1;return{value:El(i?t[0]:t),isSecondary:r||i}}function i0(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(zl[n]||{})[i]||n0[n]}function Sc(e,t){const n="".concat(Yg).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const o=Jn(e.children).filter(h=>h.getAttribute(yl)===t)[0],l=Gt.getComputedStyle(e,t),a=l.getPropertyValue("font-family"),c=a.match(Zg),d=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&p!=="none"&&p!==""){const h=l.getPropertyValue("content");let g=i0(a,d);const{value:v,isSecondary:y}=r0(h),E=c[0].startsWith("FontAwesome");let u=Ra(g,v),f=u;if(E){const m=Sv(v);m.iconName&&m.prefix&&(u=m.iconName,g=m.prefix)}if(u&&!y&&(!o||o.getAttribute(La)!==g||o.getAttribute(_a)!==f)){e.setAttribute(n,f),o&&e.removeChild(o);const m=Wv(),{extra:w}=m;w.attributes[yl]=t,bl(u,g).then(x=>{const A=$a({...m,icons:{main:x,mask:Ba()},prefix:g,iconName:f,extra:w,watchable:!0}),z=Y.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=A.map(C=>ei(C)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function s0(e){return Promise.all([Sc(e,"::before"),Sc(e,"::after")])}function o0(e){return e.parentNode!==document.head&&!~Qg.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(yl)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ec(e){if(Et)return new Promise((t,n)=>{const r=Jn(e.querySelectorAll("*")).filter(o0).map(s0),i=Va.begin("searchPseudoElements");zp(),Promise.all(r).then(()=>{i(),Nl(),t()}).catch(()=>{i(),Nl(),n()})})}var l0={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Ec,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=Y}=t;_.searchPseudoElements&&Ec(n)}}};let kc=!1;var a0={mixout(){return{dom:{unwatch(){zp(),kc=!0}}}},hooks(){return{bootstrap(){gc(Cl("mutationObserverCallbacks",{}))},noAuto(){Vv()},watch(e){const{observeMutationsRoot:t}=e;kc?Nl():gc(Cl("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Cc=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),s=i[0];let o=i.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var u0={mixout(){return{parse:{transform:e=>Cc(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Cc(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:s}=t;const o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),a="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(a," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},h={outer:o,inner:d,path:p};return{tag:"g",attributes:{...h.outer},children:[{tag:"g",attributes:{...h.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...h.path}}]}]}}}};const mo={x:0,y:0,width:"100%",height:"100%"};function Ac(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function c0(e){return e.tag==="g"?e.children:[e]}var f0={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Ls(n.split(" ").map(i=>i.trim())):Ba();return r.prefix||(r.prefix=Ht()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:s,maskId:o,transform:l}=t;const{width:a,icon:c}=i,{width:d,icon:p}=s,h=av({transform:l,containerWidth:d,iconWidth:a}),g={tag:"rect",attributes:{...mo,fill:"white"}},v=c.children?{children:c.children.map(Ac)}:{},y={tag:"g",attributes:{...h.inner},children:[Ac({tag:c.tag,attributes:{...c.attributes,...h.path},...v})]},E={tag:"g",attributes:{...h.outer},children:[y]},u="mask-".concat(o||Wr()),f="clip-".concat(o||Wr()),m={tag:"mask",attributes:{...mo,id:u,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,E]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:f},children:c0(p)},m]};return n.push(w,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(f,")"),mask:"url(#".concat(u,")"),...mo}}),{children:n,attributes:r}}}},d0={provides(e){let t=!1;Gt.matchMedia&&(t=Gt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},p0={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},m0=[fv,qv,Zv,Jv,e0,l0,a0,u0,f0,d0,p0];Av(m0,{mixoutsTo:je});je.noAuto;je.config;je.library;je.dom;const Il=je.parse;je.findIconDefinition;je.toHtml;const h0=je.icon;je.layer;je.text;je.counter;var Mp={exports:{}},g0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",v0=g0,y0=v0;function Op(){}function Lp(){}Lp.resetWarningCache=Op;var w0=function(){function e(r,i,s,o,l,a){if(a!==y0){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Lp,resetWarningCache:Op};return n.PropTypes=n,n};Mp.exports=w0();var x0=Mp.exports;const R=jc(x0);function Tc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function tt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tc(Object(n),!0).forEach(function(r){Mn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fs(e){"@babel/helpers - typeof";return fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fs(e)}function Mn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function E0(e,t){if(e==null)return{};var n=S0(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ml(e){return k0(e)||C0(e)||A0(e)||T0()}function k0(e){if(Array.isArray(e))return Ol(e)}function C0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function A0(e,t){if(e){if(typeof e=="string")return Ol(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ol(e,t)}}function Ol(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b0(e){var t,n=e.beat,r=e.fade,i=e.beatFade,s=e.bounce,o=e.shake,l=e.flash,a=e.spin,c=e.spinPulse,d=e.spinReverse,p=e.pulse,h=e.fixedWidth,g=e.inverse,v=e.border,y=e.listItem,E=e.flip,u=e.size,f=e.rotation,m=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":l,"fa-spin":a,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":h,"fa-inverse":g,"fa-border":v,"fa-li":y,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},Mn(t,"fa-".concat(u),typeof u<"u"&&u!==null),Mn(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),Mn(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Mn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(x){return w[x]?x:null}).filter(function(x){return x})}function P0(e){return e=e-0,e===e}function _p(e){return P0(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var N0=["style"];function z0(e){return e.charAt(0).toUpperCase()+e.slice(1)}function I0(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=_p(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?t[z0(i)]=s:t[i]=s,t},{})}function jp(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(a){return jp(e,a)}),i=Object.keys(t.attributes||{}).reduce(function(a,c){var d=t.attributes[c];switch(c){case"class":a.attrs.className=d,delete t.attributes.class;break;case"style":a.attrs.style=I0(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?a.attrs[c.toLowerCase()]=d:a.attrs[_p(c)]=d}return a},{attrs:{}}),s=n.style,o=s===void 0?{}:s,l=E0(n,N0);return i.attrs.style=tt(tt({},i.attrs.style),o),e.apply(void 0,[t.tag,tt(tt({},i.attrs),l)].concat(Ml(r)))}var Fp=!1;try{Fp=!0}catch{}function M0(){if(!Fp&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function bc(e){if(e&&fs(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Il.icon)return Il.icon(e);if(e===null)return null;if(e&&fs(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ho(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Mn({},e,t):{}}var Pc={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},$e=q.forwardRef(function(e,t){var n=tt(tt({},Pc),e),r=n.icon,i=n.mask,s=n.symbol,o=n.className,l=n.title,a=n.titleId,c=n.maskId,d=bc(r),p=ho("classes",[].concat(Ml(b0(n)),Ml((o||"").split(" ")))),h=ho("transform",typeof n.transform=="string"?Il.transform(n.transform):n.transform),g=ho("mask",bc(i)),v=h0(d,tt(tt(tt(tt({},p),h),g),{},{symbol:s,title:l,titleId:a,maskId:c}));if(!v)return M0("Could not find icon",d),null;var y=v.abstract,E={ref:t};return Object.keys(n).forEach(function(u){Pc.hasOwnProperty(u)||(E[u]=n[u])}),O0(y[0],E)});$e.displayName="FontAwesomeIcon";$e.propTypes={beat:R.bool,border:R.bool,beatFade:R.bool,bounce:R.bool,className:R.string,fade:R.bool,flash:R.bool,mask:R.oneOfType([R.object,R.array,R.string]),maskId:R.string,fixedWidth:R.bool,inverse:R.bool,flip:R.oneOf([!0,!1,"horizontal","vertical","both"]),icon:R.oneOfType([R.object,R.array,R.string]),listItem:R.bool,pull:R.oneOf(["right","left"]),pulse:R.bool,rotation:R.oneOf([0,90,180,270]),shake:R.bool,size:R.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:R.bool,spinPulse:R.bool,spinReverse:R.bool,symbol:R.oneOfType([R.bool,R.string]),title:R.string,titleId:R.string,transform:R.oneOfType([R.string,R.object]),swapOpacity:R.bool};var O0=jp.bind(null,q.createElement);const L0=()=>b.jsx("div",{className:"inner not-played",children:b.jsx("p",{className:"txt2-123"})}),_0=({campaigns:e,loading:t})=>{const n=M.useRef(null),[r,i]=M.useState(!1),[s,o]=M.useState(null),[l,a]=M.useState(0),[c,d]=M.useState(!1),[p,h]=M.useState(0),[g,v]=M.useState({}),[y,E]=M.useState(!1);M.useEffect(()=>{const k=()=>{document.hidden&&n.current?(n.current.muted=!0,d(!0)):video&&(n.current.muted=!1,d(!1))};return document.addEventListener("visibilitychange",k),()=>{document.removeEventListener("visibilitychange",k)}},[]),M.useEffect(()=>{const k=n.current,P=()=>{E(k.paused),k.paused&&k.play()};return k&&(k.addEventListener("play",P),k.addEventListener("pause",P)),()=>{k&&(k.removeEventListener("play",P),k.removeEventListener("pause",P))}},[s,l,e]),M.useEffect(()=>{if(s!==null&&e[s]){const k=e[s];if(l<k.videoId.length){const P=k.videoId[l];n.current.src=P,n.current.play(),h(0),E(!1)}}},[s,l,e]),M.useEffect(()=>{const k=setInterval(()=>{n.current&&h(n.current.currentTime/n.current.duration*100)},100);return()=>clearInterval(k)},[l,s]),M.useEffect(()=>{n.current&&(n.current.muted=c)},[c]);const u=k=>{o(k),a(0)},f=()=>{if(v(k=>({...k,[`${s}-${l}`]:!0})),h(100),s!==null&&e[s]){const k=e[s];l+1<k.videoId.length?a(l+1):s+1<e.length?(o(s+1),a(0)):(o(null),a(0))}},m=()=>{s!==null?s+1<e.length?(o(s+1),a(0)):(o(0),a(0)):e.length>0&&(o(0),a(0))},w=()=>{s!==null?s>0?(o(s-1),a(0)):(o(e.length-1),a(0)):e.length>0&&(o(e.length-1),a(0))},x=()=>{s!==null&&e[s]&&l+1<e[s].videoId.length&&(v(k=>({...k,[`${s}-${l}`]:!0})),a(l+1))},A=()=>{s!==null&&e[s]&&l>0&&a(l-1)},z=()=>{d(k=>!k)},C=()=>{o(null),a(0),E(!1),d(!1)},I=k=>{const P=k.currentTarget.getBoundingClientRect(),D=k.clientX-P.left,V=P.width;D<V/2?A():x()},S=()=>{i(!r)},T=k=>{const P=k.split(`
`);return P.length>2?{truncated:P.slice(0,2).join(`
`),hasMore:!0}:{truncated:k,hasMore:!1}};return t?b.jsx("div",{className:"storiesHeader ",children:b.jsx("div",{className:"outer ",children:Array.from({length:5}).map((k,P)=>b.jsx(L0,{},P))})}):b.jsx(b.Fragment,{children:b.jsxs("div",{className:"storiesHeader",children:[b.jsx("div",{className:"outer",children:e.map((k,P)=>b.jsx("div",{onClick:()=>u(P),className:`inner ${s===P?"active":""} ${k.videoId.some((D,V)=>g[`${P}-${V}`])?"played":"not-played"}`,children:b.jsx("img",{src:k.campaignPhoto,alt:"Campaign",className:"campaign-photo"})},P))}),b.jsxs("div",{className:`topp ${s!==null?"active":""}`,children:[b.jsx("div",{className:"next",onClick:m,children:b.jsx($e,{icon:Kd})}),b.jsx("div",{className:"previous",onClick:w,children:b.jsx($e,{icon:ep})}),b.jsx("div",{className:"outer-box",children:s!==null&&b.jsxs("div",{className:"boxed-video",children:[b.jsx("div",{className:"mute-unmute",onClick:z,children:c?b.jsx($e,{icon:Zd}):b.jsx($e,{icon:qd})}),b.jsx("div",{className:"close-button",onClick:C,children:b.jsx($e,{className:"close",icon:Jd})}),b.jsx("div",{className:"progress-bar",children:e[s].videoId.map((k,P)=>b.jsx("div",{className:"progress",children:b.jsx("div",{className:"progress1",style:{width:`${P===l?p:g[`${s}-${P}`]?100:0}%`}})},P))}),b.jsx("video",{className:"boxed-video",ref:n,onClick:I,onEnded:f,autoPlay:!0,children:"Your browser does not support the video tag."}),b.jsxs("div",{className:"bookdiv",children:[b.jsx("div",{className:"img1",children:b.jsx("img",{className:"img",src:e[s].campaignPhoto,alt:"Campaign"})}),b.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[b.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[s].campaignName}),b.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[r?e[s].campaignDetails:T(e[s].campaignDetails).truncated,T(e[s].campaignDetails).hasMore&&b.jsx("div",{children:b.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:S,children:r?" View Less":" View More"})})]}),b.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[s].offerPrice.currency,e[s].offerPrice.price]})]}),b.jsx("div",{className:"divbtn",children:b.jsx("a",{href:e[s].campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]})})]})]})})};function j0(){M.useState([]);const[e,t]=M.useState([]);M.useState("");const[n,r]=M.useState(!0);return M.useEffect(()=>{const s=document.getElementById("root-stories").dataset.campaignId;s?(async l=>{try{const c=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${l}`)).json();t(c.campaigns)}catch(a){console.error("Error fetching data:",a)}})(s):console.log("no campaign id found!")},[]),M.useEffect(()=>{e.length>0&&r(!1)},[e]),b.jsxs("div",{className:"App1",children:[b.jsx("style",{children:`
                
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
    padding:0em !important;
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
      text-wrap: pretty;
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
    }`}),b.jsx(_0,{campaigns:e,loading:n})]})}function Nc(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Ha(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:Nc(t[n])&&Nc(e[n])&&Object.keys(t[n]).length>0&&Ha(e[n],t[n])})}const Dp={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function er(){const e=typeof document<"u"?document:{};return Ha(e,Dp),e}const F0={document:Dp,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Fe(){const e=typeof window<"u"?window:{};return Ha(e,F0),e}function D0(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function R0(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Ll(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function ds(){return Date.now()}function B0(e){const t=Fe();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function $0(e,t){t===void 0&&(t="x");const n=Fe();let r,i,s;const o=B0(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),s=new n.WebKitCSSMatrix(i==="none"?"":i)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=s.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=s.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Si(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function V0(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Pe(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!V0(r)){const i=Object.keys(Object(r)).filter(s=>t.indexOf(s)<0);for(let s=0,o=i.length;s<o;s+=1){const l=i[s],a=Object.getOwnPropertyDescriptor(r,l);a!==void 0&&a.enumerable&&(Si(e[l])&&Si(r[l])?r[l].__swiper__?e[l]=r[l]:Pe(e[l],r[l]):!Si(e[l])&&Si(r[l])?(e[l]={},r[l].__swiper__?e[l]=r[l]:Pe(e[l],r[l])):e[l]=r[l])}}}return e}function Ei(e,t,n){e.style.setProperty(t,n)}function Rp(e){let{swiper:t,targetPosition:n,side:r}=e;const i=Fe(),s=-t.translate;let o=null,l;const a=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=n>s?"next":"prev",d=(h,g)=>c==="next"&&h>=g||c==="prev"&&h<=g,p=()=>{l=new Date().getTime(),o===null&&(o=l);const h=Math.max(Math.min((l-o)/a,1),0),g=.5-Math.cos(h*Math.PI)/2;let v=s+g*(n-s);if(d(v,n)&&(v=n),t.wrapperEl.scrollTo({[r]:v}),d(v,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:v})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(p)};p()}function Ua(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function st(e,t){return t===void 0&&(t=""),[...e.children].filter(n=>n.matches(t))}function ps(e){try{console.warn(e);return}catch{}}function Yr(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:D0(t)),n}function G0(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function H0(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Mt(e,t){return Fe().getComputedStyle(e,null).getPropertyValue(t)}function ms(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Bp(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function _l(e,t,n){const r=Fe();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function ae(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function $p(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let s=st(e.el,`.${r[i]}`)[0];s||(s=Yr("div",r[i]),s.className=r[i],e.el.append(s)),n[i]=s,t[i]=s}}),n}function U0(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function s(v){let y;return v&&typeof v=="string"&&t.isElement&&(y=t.el.querySelector(v),y)?y:(v&&(typeof v=="string"&&(y=[...document.querySelectorAll(v)]),t.params.uniqueNavElements&&typeof v=="string"&&y&&y.length>1&&t.el.querySelectorAll(v).length===1?y=t.el.querySelector(v):y&&y.length===1&&(y=y[0])),v&&!y?v:y)}function o(v,y){const E=t.params.navigation;v=ae(v),v.forEach(u=>{u&&(u.classList[y?"add":"remove"](...E.disabledClass.split(" ")),u.tagName==="BUTTON"&&(u.disabled=y),t.params.watchOverflow&&t.enabled&&u.classList[t.isLocked?"add":"remove"](E.lockClass))})}function l(){const{nextEl:v,prevEl:y}=t.navigation;if(t.params.loop){o(y,!1),o(v,!1);return}o(y,t.isBeginning&&!t.params.rewind),o(v,t.isEnd&&!t.params.rewind)}function a(v){v.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(v){v.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function d(){const v=t.params.navigation;if(t.params.navigation=$p(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(v.nextEl||v.prevEl))return;let y=s(v.nextEl),E=s(v.prevEl);Object.assign(t.navigation,{nextEl:y,prevEl:E}),y=ae(y),E=ae(E);const u=(f,m)=>{f&&f.addEventListener("click",m==="next"?c:a),!t.enabled&&f&&f.classList.add(...v.lockClass.split(" "))};y.forEach(f=>u(f,"next")),E.forEach(f=>u(f,"prev"))}function p(){let{nextEl:v,prevEl:y}=t.navigation;v=ae(v),y=ae(y);const E=(u,f)=>{u.removeEventListener("click",f==="next"?c:a),u.classList.remove(...t.params.navigation.disabledClass.split(" "))};v.forEach(u=>E(u,"next")),y.forEach(u=>E(u,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?g():(d(),l())}),r("toEdge fromEdge lock unlock",()=>{l()}),r("destroy",()=>{p()}),r("enable disable",()=>{let{nextEl:v,prevEl:y}=t.navigation;if(v=ae(v),y=ae(y),t.enabled){l();return}[...v,...y].filter(E=>!!E).forEach(E=>E.classList.add(t.params.navigation.lockClass))}),r("click",(v,y)=>{let{nextEl:E,prevEl:u}=t.navigation;E=ae(E),u=ae(u);const f=y.target;let m=u.includes(f)||E.includes(f);if(t.isElement&&!m){const w=y.path||y.composedPath&&y.composedPath();w&&(m=w.find(x=>E.includes(x)||u.includes(x)))}if(t.params.navigation.hideOnClick&&!m){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===f||t.pagination.el.contains(f)))return;let w;E.length?w=E[0].classList.contains(t.params.navigation.hiddenClass):u.length&&(w=u[0].classList.contains(t.params.navigation.hiddenClass)),i(w===!0?"navigationShow":"navigationHide"),[...E,...u].filter(x=>!!x).forEach(x=>x.classList.toggle(t.params.navigation.hiddenClass))}});const h=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),d(),l()},g=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(t.navigation,{enable:h,disable:g,update:l,init:d,destroy:p})}function ur(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function W0(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const s="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:u=>u,formatFractionTotal:u=>u,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),t.pagination={el:null,bullets:[]};let o,l=0;function a(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function c(u,f){const{bulletActiveClass:m}=t.params.pagination;u&&(u=u[`${f==="prev"?"previous":"next"}ElementSibling`],u&&(u.classList.add(`${m}-${f}`),u=u[`${f==="prev"?"previous":"next"}ElementSibling`],u&&u.classList.add(`${m}-${f}-${f}`)))}function d(u){const f=u.target.closest(ur(t.params.pagination.bulletClass));if(!f)return;u.preventDefault();const m=ms(f)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===m)return;t.slideToLoop(m)}else t.slideTo(m)}function p(){const u=t.rtl,f=t.params.pagination;if(a())return;let m=t.pagination.el;m=ae(m);let w,x;const A=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,z=t.params.loop?Math.ceil(A/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(x=t.previousRealIndex||0,w=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(w=t.snapIndex,x=t.previousSnapIndex):(x=t.previousIndex||0,w=t.activeIndex||0),f.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const C=t.pagination.bullets;let I,S,T;if(f.dynamicBullets&&(o=_l(C[0],t.isHorizontal()?"width":"height"),m.forEach(k=>{k.style[t.isHorizontal()?"width":"height"]=`${o*(f.dynamicMainBullets+4)}px`}),f.dynamicMainBullets>1&&x!==void 0&&(l+=w-(x||0),l>f.dynamicMainBullets-1?l=f.dynamicMainBullets-1:l<0&&(l=0)),I=Math.max(w-l,0),S=I+(Math.min(C.length,f.dynamicMainBullets)-1),T=(S+I)/2),C.forEach(k=>{const P=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(D=>`${f.bulletActiveClass}${D}`)].map(D=>typeof D=="string"&&D.includes(" ")?D.split(" "):D).flat();k.classList.remove(...P)}),m.length>1)C.forEach(k=>{const P=ms(k);P===w?k.classList.add(...f.bulletActiveClass.split(" ")):t.isElement&&k.setAttribute("part","bullet"),f.dynamicBullets&&(P>=I&&P<=S&&k.classList.add(...`${f.bulletActiveClass}-main`.split(" ")),P===I&&c(k,"prev"),P===S&&c(k,"next"))});else{const k=C[w];if(k&&k.classList.add(...f.bulletActiveClass.split(" ")),t.isElement&&C.forEach((P,D)=>{P.setAttribute("part",D===w?"bullet-active":"bullet")}),f.dynamicBullets){const P=C[I],D=C[S];for(let V=I;V<=S;V+=1)C[V]&&C[V].classList.add(...`${f.bulletActiveClass}-main`.split(" "));c(P,"prev"),c(D,"next")}}if(f.dynamicBullets){const k=Math.min(C.length,f.dynamicMainBullets+4),P=(o*k-o)/2-T*o,D=u?"right":"left";C.forEach(V=>{V.style[t.isHorizontal()?D:"top"]=`${P}px`})}}m.forEach((C,I)=>{if(f.type==="fraction"&&(C.querySelectorAll(ur(f.currentClass)).forEach(S=>{S.textContent=f.formatFractionCurrent(w+1)}),C.querySelectorAll(ur(f.totalClass)).forEach(S=>{S.textContent=f.formatFractionTotal(z)})),f.type==="progressbar"){let S;f.progressbarOpposite?S=t.isHorizontal()?"vertical":"horizontal":S=t.isHorizontal()?"horizontal":"vertical";const T=(w+1)/z;let k=1,P=1;S==="horizontal"?k=T:P=T,C.querySelectorAll(ur(f.progressbarFillClass)).forEach(D=>{D.style.transform=`translate3d(0,0,0) scaleX(${k}) scaleY(${P})`,D.style.transitionDuration=`${t.params.speed}ms`})}f.type==="custom"&&f.renderCustom?(C.innerHTML=f.renderCustom(t,w+1,z),I===0&&i("paginationRender",C)):(I===0&&i("paginationRender",C),i("paginationUpdate",C)),t.params.watchOverflow&&t.enabled&&C.classList[t.isLocked?"add":"remove"](f.lockClass)})}function h(){const u=t.params.pagination;if(a())return;const f=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let m=t.pagination.el;m=ae(m);let w="";if(u.type==="bullets"){let x=t.params.loop?Math.ceil(f/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&x>f&&(x=f);for(let A=0;A<x;A+=1)u.renderBullet?w+=u.renderBullet.call(t,A,u.bulletClass):w+=`<${u.bulletElement} ${t.isElement?'part="bullet"':""} class="${u.bulletClass}"></${u.bulletElement}>`}u.type==="fraction"&&(u.renderFraction?w=u.renderFraction.call(t,u.currentClass,u.totalClass):w=`<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`),u.type==="progressbar"&&(u.renderProgressbar?w=u.renderProgressbar.call(t,u.progressbarFillClass):w=`<span class="${u.progressbarFillClass}"></span>`),t.pagination.bullets=[],m.forEach(x=>{u.type!=="custom"&&(x.innerHTML=w||""),u.type==="bullets"&&t.pagination.bullets.push(...x.querySelectorAll(ur(u.bulletClass)))}),u.type!=="custom"&&i("paginationRender",m[0])}function g(){t.params.pagination=$p(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const u=t.params.pagination;if(!u.el)return;let f;typeof u.el=="string"&&t.isElement&&(f=t.el.querySelector(u.el)),!f&&typeof u.el=="string"&&(f=[...document.querySelectorAll(u.el)]),f||(f=u.el),!(!f||f.length===0)&&(t.params.uniqueNavElements&&typeof u.el=="string"&&Array.isArray(f)&&f.length>1&&(f=[...t.el.querySelectorAll(u.el)],f.length>1&&(f=f.filter(m=>Bp(m,".swiper")[0]===t.el)[0])),Array.isArray(f)&&f.length===1&&(f=f[0]),Object.assign(t.pagination,{el:f}),f=ae(f),f.forEach(m=>{u.type==="bullets"&&u.clickable&&m.classList.add(...(u.clickableClass||"").split(" ")),m.classList.add(u.modifierClass+u.type),m.classList.add(t.isHorizontal()?u.horizontalClass:u.verticalClass),u.type==="bullets"&&u.dynamicBullets&&(m.classList.add(`${u.modifierClass}${u.type}-dynamic`),l=0,u.dynamicMainBullets<1&&(u.dynamicMainBullets=1)),u.type==="progressbar"&&u.progressbarOpposite&&m.classList.add(u.progressbarOppositeClass),u.clickable&&m.addEventListener("click",d),t.enabled||m.classList.add(u.lockClass)}))}function v(){const u=t.params.pagination;if(a())return;let f=t.pagination.el;f&&(f=ae(f),f.forEach(m=>{m.classList.remove(u.hiddenClass),m.classList.remove(u.modifierClass+u.type),m.classList.remove(t.isHorizontal()?u.horizontalClass:u.verticalClass),u.clickable&&(m.classList.remove(...(u.clickableClass||"").split(" ")),m.removeEventListener("click",d))})),t.pagination.bullets&&t.pagination.bullets.forEach(m=>m.classList.remove(...u.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const u=t.params.pagination;let{el:f}=t.pagination;f=ae(f),f.forEach(m=>{m.classList.remove(u.horizontalClass,u.verticalClass),m.classList.add(t.isHorizontal()?u.horizontalClass:u.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?E():(g(),h(),p())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&p()}),r("snapIndexChange",()=>{p()}),r("snapGridLengthChange",()=>{h(),p()}),r("destroy",()=>{v()}),r("enable disable",()=>{let{el:u}=t.pagination;u&&(u=ae(u),u.forEach(f=>f.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{p()}),r("click",(u,f)=>{const m=f.target,w=ae(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&w&&w.length>0&&!m.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&m===t.navigation.nextEl||t.navigation.prevEl&&m===t.navigation.prevEl))return;const x=w[0].classList.contains(t.params.pagination.hiddenClass);i(x===!0?"paginationShow":"paginationHide"),w.forEach(A=>A.classList.toggle(t.params.pagination.hiddenClass))}});const y=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:u}=t.pagination;u&&(u=ae(u),u.forEach(f=>f.classList.remove(t.params.pagination.paginationDisabledClass))),g(),h(),p()},E=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:u}=t.pagination;u&&(u=ae(u),u.forEach(f=>f.classList.add(t.params.pagination.paginationDisabledClass))),v()};Object.assign(t.pagination,{enable:y,disable:E,render:h,update:p,init:g,destroy:v})}function Y0(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:s,overwriteParams:o,perspective:l,recreateShadows:a,getEffectParams:c}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),l&&l()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const p=o?o():{};Object.assign(n.params,p),Object.assign(n.originalParams,p)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(p,h)=>{n.params.effect===t&&s(h)}),r("transitionEnd",()=>{if(n.params.effect===t&&a){if(!c||!c().slideShadows)return;n.slides.forEach(p=>{p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>h.remove())}),a()}});let d;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(d=!0),requestAnimationFrame(()=>{d&&n.slides&&n.slides.length&&(i(),d=!1)}))})}function X0(e,t){const n=Ua(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function zc(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,i=Ua(t);let s=i.querySelector(`.${r.split(" ").join(".")}`);return s||(s=Yr("div",r.split(" ")),i.append(s)),s}function Q0(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Y0({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:o,height:l,slides:a,slidesSizesGrid:c}=t,d=t.params.coverflowEffect,p=t.isHorizontal(),h=t.translate,g=p?-h+o/2:-h+l/2,v=p?d.rotate:-d.rotate,y=d.depth;for(let E=0,u=a.length;E<u;E+=1){const f=a[E],m=c[E],w=f.swiperSlideOffset,x=(g-w-m/2)/m,A=typeof d.modifier=="function"?d.modifier(x):x*d.modifier;let z=p?v*A:0,C=p?0:v*A,I=-y*Math.abs(A),S=d.stretch;typeof S=="string"&&S.indexOf("%")!==-1&&(S=parseFloat(d.stretch)/100*m);let T=p?0:S*A,k=p?S*A:0,P=1-(1-d.scale)*Math.abs(A);Math.abs(k)<.001&&(k=0),Math.abs(T)<.001&&(T=0),Math.abs(I)<.001&&(I=0),Math.abs(z)<.001&&(z=0),Math.abs(C)<.001&&(C=0),Math.abs(P)<.001&&(P=0),t.browser&&t.browser.need3dFix&&(Math.abs(z)/90%2===1&&(z+=.001),Math.abs(C)/90%2===1&&(C+=.001));const D=`translate3d(${k}px,${T}px,${I}px)  rotateX(${C}deg) rotateY(${z}deg) scale(${P})`,V=X0(d,f);if(V.style.transform=D,f.style.zIndex=-Math.abs(Math.round(A))+1,d.slideShadows){let se=p?f.querySelector(".swiper-slide-shadow-left"):f.querySelector(".swiper-slide-shadow-top"),De=p?f.querySelector(".swiper-slide-shadow-right"):f.querySelector(".swiper-slide-shadow-bottom");se||(se=zc("coverflow",f,p?"left":"top")),De||(De=zc("coverflow",f,p?"right":"bottom")),se&&(se.style.opacity=A>0?A:0),De&&(De.style.opacity=-A>0?-A:0)}}},setTransition:o=>{t.slides.map(a=>Ua(a)).forEach(a=>{a.style.transitionDuration=`${o}ms`,a.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${o}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}let go;function K0(){const e=Fe(),t=er();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Vp(){return go||(go=K0()),go}let vo;function q0(e){let{userAgent:t}=e===void 0?{}:e;const n=Vp(),r=Fe(),i=r.navigator.platform,s=t||r.navigator.userAgent,o={ios:!1,android:!1},l=r.screen.width,a=r.screen.height,c=s.match(/(Android);?[\s\/]+([\d.]+)?/);let d=s.match(/(iPad).*OS\s([\d_]+)/);const p=s.match(/(iPod)(.*OS\s([\d_]+))?/),h=!d&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=i==="Win32";let v=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&v&&n.touch&&y.indexOf(`${l}x${a}`)>=0&&(d=s.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),v=!1),c&&!g&&(o.os="android",o.android=!0),(d||h||p)&&(o.os="ios",o.ios=!0),o}function Gp(e){return e===void 0&&(e={}),vo||(vo=q0(e)),vo}let yo;function Z0(){const e=Fe(),t=Gp();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[a,c]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=a<16||a===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),s=r(),o=s||i&&t.ios;return{isSafari:n||s,needPerspectiveFix:n,need3dFix:o,isWebView:i}}function J0(){return yo||(yo=Z0()),yo}function e1(e){let{swiper:t,on:n,emit:r}=e;const i=Fe();let s=null,o=null;const l=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},a=()=>{!t||t.destroyed||!t.initialized||(s=new ResizeObserver(p=>{o=i.requestAnimationFrame(()=>{const{width:h,height:g}=t;let v=h,y=g;p.forEach(E=>{let{contentBoxSize:u,contentRect:f,target:m}=E;m&&m!==t.el||(v=f?f.width:(u[0]||u).inlineSize,y=f?f.height:(u[0]||u).blockSize)}),(v!==h||y!==g)&&l()})}),s.observe(t.el))},c=()=>{o&&i.cancelAnimationFrame(o),s&&s.unobserve&&t.el&&(s.unobserve(t.el),s=null)},d=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){a();return}i.addEventListener("resize",l),i.addEventListener("orientationchange",d)}),n("destroy",()=>{c(),i.removeEventListener("resize",l),i.removeEventListener("orientationchange",d)})}function t1(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const s=[],o=Fe(),l=function(d,p){p===void 0&&(p={});const h=o.MutationObserver||o.WebkitMutationObserver,g=new h(v=>{if(t.__preventObserver__)return;if(v.length===1){i("observerUpdate",v[0]);return}const y=function(){i("observerUpdate",v[0])};o.requestAnimationFrame?o.requestAnimationFrame(y):o.setTimeout(y,0)});g.observe(d,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:typeof p.childList>"u"?!0:p.childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),s.push(g)},a=()=>{if(t.params.observer){if(t.params.observeParents){const d=Bp(t.hostEl);for(let p=0;p<d.length;p+=1)l(d[p])}l(t.hostEl,{childList:t.params.observeSlideChildren}),l(t.wrapperEl,{attributes:!1})}},c=()=>{s.forEach(d=>{d.disconnect()}),s.splice(0,s.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",a),r("destroy",c)}var n1={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];t.apply(r,o)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,s)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(s,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return typeof s[0]=="string"||Array.isArray(s[0])?(t=s[0],n=s.slice(1,s.length),r=e):(t=s[0].events,n=s[0].data,r=s[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(a=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(r,[a,...n])}),e.eventsListeners&&e.eventsListeners[a]&&e.eventsListeners[a].forEach(c=>{c.apply(r,n)})}),e}};function r1(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Mt(r,"padding-left")||0,10)-parseInt(Mt(r,"padding-right")||0,10),n=n-parseInt(Mt(r,"padding-top")||0,10)-parseInt(Mt(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function i1(){const e=this;function t(S,T){return parseFloat(S.getPropertyValue(e.getDirectionLabel(T))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:s,rtlTranslate:o,wrongRTL:l}=e,a=e.virtual&&n.virtual.enabled,c=a?e.virtual.slides.length:e.slides.length,d=st(i,`.${e.params.slideClass}, swiper-slide`),p=a?e.virtual.slides.length:d.length;let h=[];const g=[],v=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(e));let E=n.slidesOffsetAfter;typeof E=="function"&&(E=n.slidesOffsetAfter.call(e));const u=e.snapGrid.length,f=e.slidesGrid.length;let m=n.spaceBetween,w=-y,x=0,A=0;if(typeof s>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*s:typeof m=="string"&&(m=parseFloat(m)),e.virtualSize=-m,d.forEach(S=>{o?S.style.marginLeft="":S.style.marginRight="",S.style.marginBottom="",S.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Ei(r,"--swiper-centered-offset-before",""),Ei(r,"--swiper-centered-offset-after",""));const z=n.grid&&n.grid.rows>1&&e.grid;z?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let C;const I=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(S=>typeof n.breakpoints[S].slidesPerView<"u").length>0;for(let S=0;S<p;S+=1){C=0;let T;if(d[S]&&(T=d[S]),z&&e.grid.updateSlide(S,T,d),!(d[S]&&Mt(T,"display")==="none")){if(n.slidesPerView==="auto"){I&&(d[S].style[e.getDirectionLabel("width")]="");const k=getComputedStyle(T),P=T.style.transform,D=T.style.webkitTransform;if(P&&(T.style.transform="none"),D&&(T.style.webkitTransform="none"),n.roundLengths)C=e.isHorizontal()?_l(T,"width"):_l(T,"height");else{const V=t(k,"width"),se=t(k,"padding-left"),De=t(k,"padding-right"),O=t(k,"margin-left"),j=t(k,"margin-right"),F=k.getPropertyValue("box-sizing");if(F&&F==="border-box")C=V+O+j;else{const{clientWidth:K,offsetWidth:re}=T;C=V+se+De+O+j+(re-K)}}P&&(T.style.transform=P),D&&(T.style.webkitTransform=D),n.roundLengths&&(C=Math.floor(C))}else C=(s-(n.slidesPerView-1)*m)/n.slidesPerView,n.roundLengths&&(C=Math.floor(C)),d[S]&&(d[S].style[e.getDirectionLabel("width")]=`${C}px`);d[S]&&(d[S].swiperSlideSize=C),v.push(C),n.centeredSlides?(w=w+C/2+x/2+m,x===0&&S!==0&&(w=w-s/2-m),S===0&&(w=w-s/2-m),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),A%n.slidesPerGroup===0&&h.push(w),g.push(w)):(n.roundLengths&&(w=Math.floor(w)),(A-Math.min(e.params.slidesPerGroupSkip,A))%e.params.slidesPerGroup===0&&h.push(w),g.push(w),w=w+C+m),e.virtualSize+=C+m,x=C,A+=1}}if(e.virtualSize=Math.max(e.virtualSize,s)+E,o&&l&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+m}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+m}px`),z&&e.grid.updateWrapperSize(C,h),!n.centeredSlides){const S=[];for(let T=0;T<h.length;T+=1){let k=h[T];n.roundLengths&&(k=Math.floor(k)),h[T]<=e.virtualSize-s&&S.push(k)}h=S,Math.floor(e.virtualSize-s)-Math.floor(h[h.length-1])>1&&h.push(e.virtualSize-s)}if(a&&n.loop){const S=v[0]+m;if(n.slidesPerGroup>1){const T=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),k=S*n.slidesPerGroup;for(let P=0;P<T;P+=1)h.push(h[h.length-1]+k)}for(let T=0;T<e.virtual.slidesBefore+e.virtual.slidesAfter;T+=1)n.slidesPerGroup===1&&h.push(h[h.length-1]+S),g.push(g[g.length-1]+S),e.virtualSize+=S}if(h.length===0&&(h=[0]),m!==0){const S=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");d.filter((T,k)=>!n.cssMode||n.loop?!0:k!==d.length-1).forEach(T=>{T.style[S]=`${m}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let S=0;v.forEach(k=>{S+=k+(m||0)}),S-=m;const T=S-s;h=h.map(k=>k<=0?-y:k>T?T+E:k)}if(n.centerInsufficientSlides){let S=0;v.forEach(k=>{S+=k+(m||0)}),S-=m;const T=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(S+T<s){const k=(s-S-T)/2;h.forEach((P,D)=>{h[D]=P-k}),g.forEach((P,D)=>{g[D]=P+k})}}if(Object.assign(e,{slides:d,snapGrid:h,slidesGrid:g,slidesSizesGrid:v}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Ei(r,"--swiper-centered-offset-before",`${-h[0]}px`),Ei(r,"--swiper-centered-offset-after",`${e.size/2-v[v.length-1]/2}px`);const S=-e.snapGrid[0],T=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(k=>k+S),e.slidesGrid=e.slidesGrid.map(k=>k+T)}if(p!==c&&e.emit("slidesLengthChange"),h.length!==u&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==f&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!a&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const S=`${n.containerModifierClass}backface-hidden`,T=e.el.classList.contains(S);p<=n.maxBackfaceHiddenSlides?T||e.el.classList.add(S):T&&e.el.classList.remove(S)}}function s1(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,s;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const l=t.activeIndex+s;if(l>t.slides.length&&!r)break;n.push(o(l))}else n.push(o(t.activeIndex));for(s=0;s<n.length;s+=1)if(typeof n[s]<"u"){const l=n[s].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function o1(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Ic=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function l1(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:s}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;i&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let a=0;a<r.length;a+=1){const c=r[a];let d=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const p=(o+(n.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),h=(o-s[0]+(n.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),g=-(o-d),v=g+t.slidesSizesGrid[a],y=g>=0&&g<=t.size-t.slidesSizesGrid[a],E=g>=0&&g<t.size-1||v>1&&v<=t.size||g<=0&&v>=t.size;E&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(a)),Ic(c,E,n.slideVisibleClass),Ic(c,y,n.slideFullyVisibleClass),c.progress=i?-p:p,c.originalProgress=i?-h:h}}function a1(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:s,isEnd:o,progressLoop:l}=t;const a=s,c=o;if(r===0)i=0,s=!0,o=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,p=Math.abs(e-t.maxTranslate())<1;s=d||i<=0,o=p||i>=1,d&&(i=0),p&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),p=t.getSlideIndexByData(t.slides.length-1),h=t.slidesGrid[d],g=t.slidesGrid[p],v=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=h?l=(y-h)/v:l=(y+v-g)/v,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!a&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(a&&!s||c&&!o)&&t.emit("fromEdge"),t.emit("progress",i)}const wo=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function u1(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,s=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,l=p=>st(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];let a,c,d;if(s)if(n.loop){let p=i-e.virtual.slidesBefore;p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),a=l(`[data-swiper-slide-index="${p}"]`)}else a=l(`[data-swiper-slide-index="${i}"]`);else o?(a=t.filter(p=>p.column===i)[0],d=t.filter(p=>p.column===i+1)[0],c=t.filter(p=>p.column===i-1)[0]):a=t[i];a&&(o||(d=H0(a,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),c=G0(a,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(p=>{wo(p,p===a,n.slideActiveClass),wo(p,p===d,n.slideNextClass),wo(p,p===c,n.slidePrevClass)}),e.emitSlidesClasses()}const Fi=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},xo=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},jl=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=i,l=[o-t];l.push(...Array.from({length:t}).map((a,c)=>o+r+c)),e.slides.forEach((a,c)=>{l.includes(a.column)&&xo(e,c)});return}const s=i+r-1;if(e.params.rewind||e.params.loop)for(let o=i-t;o<=s+t;o+=1){const l=(o%n+n)%n;(l<i||l>s)&&xo(e,l)}else for(let o=Math.max(i-t,0);o<=Math.min(s+t,n-1);o+=1)o!==i&&(o>s||o<i)&&xo(e,o)};function c1(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let s=0;s<t.length;s+=1)typeof t[s+1]<"u"?r>=t[s]&&r<t[s+1]-(t[s+1]-t[s])/2?i=s:r>=t[s]&&r<t[s+1]&&(i=s+1):r>=t[s]&&(i=s);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function f1(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:o,snapIndex:l}=t;let a=e,c;const d=g=>{let v=g-t.virtual.slidesBefore;return v<0&&(v=t.virtual.slides.length+v),v>=t.virtual.slides.length&&(v-=t.virtual.slides.length),v};if(typeof a>"u"&&(a=c1(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const g=Math.min(i.slidesPerGroupSkip,a);c=g+Math.floor((a-g)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),a===s&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(a===s&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(a);return}const p=t.grid&&i.grid&&i.grid.rows>1;let h;if(t.virtual&&i.virtual.enabled&&i.loop)h=d(a);else if(p){const g=t.slides.filter(y=>y.column===a)[0];let v=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(v)&&(v=Math.max(t.slides.indexOf(g),0)),h=Math.floor(v/i.grid.rows)}else if(t.slides[a]){const g=t.slides[a].getAttribute("data-swiper-slide-index");g?h=parseInt(g,10):h=a}else h=a;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:o,realIndex:h,previousIndex:s,activeIndex:a}),t.initialized&&jl(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==h&&t.emit("realIndexChange"),t.emit("slideChange"))}function d1(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let s=!1,o;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){s=!0,o=l;break}}if(i&&s)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var p1={updateSize:r1,updateSlides:i1,updateAutoHeight:s1,updateSlidesOffset:o1,updateSlidesProgress:l1,updateProgress:a1,updateSlidesClasses:u1,updateActiveIndex:f1,updateClickedSlide:d1};function m1(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:s}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=$0(s,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function h1(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:o}=n;let l=0,a=0;const c=0;n.isHorizontal()?l=r?-e:e:a=e,i.roundLengths&&(l=Math.floor(l),a=Math.floor(a)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:a,i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-a:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():a-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${l}px, ${a}px, ${c}px)`);let d;const p=n.maxTranslate()-n.minTranslate();p===0?d=0:d=(e-n.minTranslate())/p,d!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function g1(){return-this.snapGrid[0]}function v1(){return-this.snapGrid[this.snapGrid.length-1]}function y1(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const s=this,{params:o,wrapperEl:l}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const a=s.minTranslate(),c=s.maxTranslate();let d;if(r&&e>a?d=a:r&&e<c?d=c:d=e,s.updateProgress(d),o.cssMode){const p=s.isHorizontal();if(t===0)l[p?"scrollLeft":"scrollTop"]=-d;else{if(!s.support.smoothScroll)return Rp({swiper:s,targetPosition:-d,side:p?"left":"top"}),!0;l.scrollTo({[p?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(s.setTransition(0),s.setTranslate(d),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(d),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(h){!s||s.destroyed||h.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var w1={getTranslate:m1,setTranslate:h1,minTranslate:g1,maxTranslate:v1,translateTo:y1};function x1(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Hp(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:s,previousIndex:o}=t;let l=r;if(l||(s>o?l="next":s<o?l="prev":l="reset"),t.emit(`transition${i}`),n&&s!==o){if(l==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),l==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function S1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Hp({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function E1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Hp({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var k1={setTransition:x1,transitionStart:S1,transitionEnd:E1};function C1(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const s=this;let o=e;o<0&&(o=0);const{params:l,snapGrid:a,slidesGrid:c,previousIndex:d,activeIndex:p,rtlTranslate:h,wrapperEl:g,enabled:v}=s;if(!v&&!r&&!i||s.destroyed||s.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=s.params.speed);const y=Math.min(s.params.slidesPerGroupSkip,o);let E=y+Math.floor((o-y)/s.params.slidesPerGroup);E>=a.length&&(E=a.length-1);const u=-a[E];if(l.normalizeSlideIndex)for(let m=0;m<c.length;m+=1){const w=-Math.floor(u*100),x=Math.floor(c[m]*100),A=Math.floor(c[m+1]*100);typeof c[m+1]<"u"?w>=x&&w<A-(A-x)/2?o=m:w>=x&&w<A&&(o=m+1):w>=x&&(o=m)}if(s.initialized&&o!==p&&(!s.allowSlideNext&&(h?u>s.translate&&u>s.minTranslate():u<s.translate&&u<s.minTranslate())||!s.allowSlidePrev&&u>s.translate&&u>s.maxTranslate()&&(p||0)!==o))return!1;o!==(d||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(u);let f;if(o>p?f="next":o<p?f="prev":f="reset",h&&-u===s.translate||!h&&u===s.translate)return s.updateActiveIndex(o),l.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),l.effect!=="slide"&&s.setTranslate(u),f!=="reset"&&(s.transitionStart(n,f),s.transitionEnd(n,f)),!1;if(l.cssMode){const m=s.isHorizontal(),w=h?u:-u;if(t===0){const x=s.virtual&&s.params.virtual.enabled;x&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),x&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[m?"scrollLeft":"scrollTop"]=w})):g[m?"scrollLeft":"scrollTop"]=w,x&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return Rp({swiper:s,targetPosition:w,side:m?"left":"top"}),!0;g.scrollTo({[m?"left":"top"]:w,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(u),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,r),s.transitionStart(n,f),t===0?s.transitionEnd(n,f):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(w){!s||s.destroyed||w.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,f))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function A1(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const s=i.grid&&i.params.grid&&i.params.grid.rows>1;let o=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o=o+i.virtual.slidesBefore;else{let l;if(s){const h=o*i.params.grid.rows;l=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===h)[0].column}else l=i.getSlideIndexByData(o);const a=s?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c}=i.params;let d=i.params.slidesPerView;d==="auto"?d=i.slidesPerViewDynamic():(d=Math.ceil(parseFloat(i.params.slidesPerView,10)),c&&d%2===0&&(d=d+1));let p=a-l<d;if(c&&(p=p||l<Math.ceil(d/2)),r&&c&&i.params.slidesPerView!=="auto"&&!s&&(p=!1),p){const h=c?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?l+1:l-a+1,slideRealIndex:h==="next"?i.realIndex:void 0})}if(s){const h=o*i.params.grid.rows;o=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===h)[0].column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}function T1(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:s,animating:o}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const a=r.activeIndex<s.slidesPerGroupSkip?1:l,c=r.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+a,e,t,n)}),!0}return s.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+a,e,t,n)}function b1(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:s,slidesGrid:o,rtlTranslate:l,enabled:a,animating:c}=r;if(!a||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=l?r.translate:-r.translate;function h(u){return u<0?-Math.floor(Math.abs(u)):Math.floor(u)}const g=h(p),v=s.map(u=>h(u));let y=s[v.indexOf(g)-1];if(typeof y>"u"&&i.cssMode){let u;s.forEach((f,m)=>{g>=f&&(u=m)}),typeof u<"u"&&(y=s[u>0?u-1:u])}let E=0;if(typeof y<"u"&&(E=o.indexOf(y),E<0&&(E=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(E=E-r.slidesPerViewDynamic("previous",!0)+1,E=Math.max(E,0))),i.rewind&&r.isBeginning){const u=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(u,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(E,e,t,n)}),!0;return r.slideTo(E,e,t,n)}function P1(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function N1(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),l=o+Math.floor((s-o)/i.params.slidesPerGroup),a=i.rtlTranslate?i.translate:-i.translate;if(a>=i.snapGrid[l]){const c=i.snapGrid[l],d=i.snapGrid[l+1];a-c>(d-c)*r&&(s+=i.params.slidesPerGroup)}else{const c=i.snapGrid[l-1],d=i.snapGrid[l];a-c<=(d-c)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,e,t,n)}function z1(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,s;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;s=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(st(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),Ll(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(st(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),Ll(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var I1={slideTo:C1,slideToLoop:A1,slideNext:T1,slidePrev:b1,slideReset:P1,slideToClosest:N1,slideToClickedSlide:z1};function M1(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{st(r,`.${n.slideClass}, swiper-slide`).forEach((p,h)=>{p.setAttribute("data-swiper-slide-index",h)})},s=t.grid&&n.grid&&n.grid.rows>1,o=n.slidesPerGroup*(s?n.grid.rows:1),l=t.slides.length%o!==0,a=s&&t.slides.length%n.grid.rows!==0,c=d=>{for(let p=0;p<d;p+=1){const h=t.isElement?Yr("swiper-slide",[n.slideBlankClass]):Yr("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(h)}};if(l){if(n.loopAddBlankSlides){const d=o-t.slides.length%o;c(d),t.recalcSlides(),t.updateSlides()}else ps("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(a){if(n.loopAddBlankSlides){const d=n.grid.rows-t.slides.length%n.grid.rows;c(d),t.recalcSlides(),t.updateSlides()}else ps("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function O1(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:s,byController:o,byMousewheel:l}=e===void 0?{}:e;const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:p,slidesEl:h,params:g}=a,{centeredSlides:v}=g;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&g.virtual.enabled){n&&(!g.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):g.centeredSlides&&a.snapIndex<g.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=d,a.allowSlideNext=p,a.emit("loopFix");return}let y=g.slidesPerView;y==="auto"?y=a.slidesPerViewDynamic():(y=Math.ceil(parseFloat(g.slidesPerView,10)),v&&y%2===0&&(y=y+1));const E=g.slidesPerGroupAuto?y:g.slidesPerGroup;let u=E;u%E!==0&&(u+=E-u%E),u+=g.loopAdditionalSlides,a.loopedSlides=u;const f=a.grid&&g.grid&&g.grid.rows>1;c.length<y+u?ps("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):f&&g.grid.fill==="row"&&ps("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const m=[],w=[];let x=a.activeIndex;typeof s>"u"?s=a.getSlideIndex(c.filter(P=>P.classList.contains(g.slideActiveClass))[0]):x=s;const A=r==="next"||!r,z=r==="prev"||!r;let C=0,I=0;const S=f?Math.ceil(c.length/g.grid.rows):c.length,k=(f?c[s].column:s)+(v&&typeof i>"u"?-y/2+.5:0);if(k<u){C=Math.max(u-k,E);for(let P=0;P<u-k;P+=1){const D=P-Math.floor(P/S)*S;if(f){const V=S-D-1;for(let se=c.length-1;se>=0;se-=1)c[se].column===V&&m.push(se)}else m.push(S-D-1)}}else if(k+y>S-u){I=Math.max(k-(S-u*2),E);for(let P=0;P<I;P+=1){const D=P-Math.floor(P/S)*S;f?c.forEach((V,se)=>{V.column===D&&w.push(se)}):w.push(D)}}if(a.__preventObserver__=!0,requestAnimationFrame(()=>{a.__preventObserver__=!1}),z&&m.forEach(P=>{c[P].swiperLoopMoveDOM=!0,h.prepend(c[P]),c[P].swiperLoopMoveDOM=!1}),A&&w.forEach(P=>{c[P].swiperLoopMoveDOM=!0,h.append(c[P]),c[P].swiperLoopMoveDOM=!1}),a.recalcSlides(),g.slidesPerView==="auto"?a.updateSlides():f&&(m.length>0&&z||w.length>0&&A)&&a.slides.forEach((P,D)=>{a.grid.updateSlide(D,P,a.slides)}),g.watchSlidesProgress&&a.updateSlidesOffset(),n){if(m.length>0&&z){if(typeof t>"u"){const P=a.slidesGrid[x],V=a.slidesGrid[x+C]-P;l?a.setTranslate(a.translate-V):(a.slideTo(x+Math.ceil(C),0,!1,!0),i&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-V,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-V))}else if(i){const P=f?m.length/g.grid.rows:m.length;a.slideTo(a.activeIndex+P,0,!1,!0),a.touchEventsData.currentTranslate=a.translate}}else if(w.length>0&&A)if(typeof t>"u"){const P=a.slidesGrid[x],V=a.slidesGrid[x-I]-P;l?a.setTranslate(a.translate-V):(a.slideTo(x-I,0,!1,!0),i&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-V,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-V))}else{const P=f?w.length/g.grid.rows:w.length;a.slideTo(a.activeIndex-P,0,!1,!0)}}if(a.allowSlidePrev=d,a.allowSlideNext=p,a.controller&&a.controller.control&&!o){const P={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(D=>{!D.destroyed&&D.params.loop&&D.loopFix({...P,slideTo:D.params.slidesPerView===g.slidesPerView?n:!1})}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix({...P,slideTo:a.controller.control.params.slidesPerView===g.slidesPerView?n:!1})}a.emit("loopFix")}function L1(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const s=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[s]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var _1={loopCreate:M1,loopFix:O1,loopDestroy:L1};function j1(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function F1(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var D1={setGrabCursor:j1,unsetGrabCursor:F1};function R1(e,t){t===void 0&&(t=this);function n(r){if(!r||r===er()||r===Fe())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Mc(e,t,n){const r=Fe(),{params:i}=e,s=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return s&&(n<=o||n>=r.innerWidth-o)?s==="prevent"?(t.preventDefault(),!0):!1:!0}function B1(e){const t=this,n=er();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Mc(t,r,r.targetTouches[0].pageX);return}const{params:s,touches:o,enabled:l}=t;if(!l||!s.simulateTouch&&r.pointerType==="mouse"||t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let a=r.target;if(s.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(a)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!s.noSwipingClass&&s.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&d&&(a=d[0]);const p=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,h=!!(r.target&&r.target.shadowRoot);if(s.noSwiping&&(h?R1(p,a):a.closest(p))){t.allowClick=!0;return}if(s.swipeHandler&&!a.closest(s.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;const g=o.currentX,v=o.currentY;if(!Mc(t,r,g))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=v,i.touchStartTime=ds(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let y=!0;a.matches(i.focusableElements)&&(y=!1,a.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==a&&n.activeElement.blur();const E=y&&t.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||E)&&!a.isContentEditable&&r.preventDefault(),s.freeMode&&s.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function $1(e){const t=er(),n=this,r=n.touchEventsData,{params:i,touches:s,rtlTranslate:o,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let a=e;if(a.originalEvent&&(a=a.originalEvent),a.type==="pointermove"&&(r.touchId!==null||a.pointerId!==r.pointerId))return;let c;if(a.type==="touchmove"){if(c=[...a.changedTouches].filter(A=>A.identifier===r.touchId)[0],!c||c.identifier!==r.touchId)return}else c=a;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",a);return}const d=c.pageX,p=c.pageY;if(a.preventedByNestedSwiper){s.startX=d,s.startY=p;return}if(!n.allowTouchMove){a.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:d,startY:p,currentX:d,currentY:p}),r.touchStartTime=ds());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(p<s.startY&&n.translate<=n.maxTranslate()||p>s.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(d<s.startX&&n.translate<=n.maxTranslate()||d>s.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&a.target===t.activeElement&&a.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",a),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=d,s.currentY=p;const h=s.currentX-s.startX,g=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(h**2+g**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let A;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:h*h+g*g>=25&&(A=Math.atan2(Math.abs(g),Math.abs(h))*180/Math.PI,r.isScrolling=n.isHorizontal()?A>i.touchAngle:90-A>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",a),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling||a.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&a.cancelable&&a.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&a.stopPropagation();let v=n.isHorizontal()?h:g,y=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(v=Math.abs(v)*(o?1:-1),y=Math.abs(y)*(o?1:-1)),s.diff=v,v*=i.touchRatio,o&&(v=-v,y=-y);const E=n.touchesDirection;n.swipeDirection=v>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const u=n.params.loop&&!i.cssMode,f=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(u&&f&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const A=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(A)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",a)}let m;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&E!==n.touchesDirection&&u&&f&&Math.abs(v)>=1){Object.assign(s,{startX:d,startY:p,currentX:d,currentY:p,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",a),r.isMoved=!0,r.currentTranslate=v+r.startTranslate;let w=!0,x=i.resistanceRatio;if(i.touchReleaseOnEdges&&(x=0),v>0?(u&&f&&!m&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+v)**x))):v<0&&(u&&f&&!m&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-v)**x))),w&&(a.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(v)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function V1(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(x=>x.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:o,touches:l,rtlTranslate:a,slidesGrid:c,enabled:d}=t;if(!d||!o.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&o.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}o.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const p=ds(),h=p-n.touchStartTime;if(t.allowClick){const x=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(x&&x[0]||r.target,x),t.emit("tap click",r),h<300&&p-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=ds(),Ll(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let g;if(o.followFinger?g=a?t.translate:-t.translate:g=-n.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:g});return}const v=g>=-t.maxTranslate()&&!t.params.loop;let y=0,E=t.slidesSizesGrid[0];for(let x=0;x<c.length;x+=x<o.slidesPerGroupSkip?1:o.slidesPerGroup){const A=x<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[x+A]<"u"?(v||g>=c[x]&&g<c[x+A])&&(y=x,E=c[x+A]-c[x]):(v||g>=c[x])&&(y=x,E=c[c.length-1]-c[c.length-2])}let u=null,f=null;o.rewind&&(t.isBeginning?f=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(u=0));const m=(g-c[y])/E,w=y<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(h>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(m>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?u:y+w):t.slideTo(y)),t.swipeDirection==="prev"&&(m>1-o.longSwipesRatio?t.slideTo(y+w):f!==null&&m<0&&Math.abs(m)>o.longSwipesRatio?t.slideTo(f):t.slideTo(y))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+w):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(u!==null?u:y+w),t.swipeDirection==="prev"&&t.slideTo(f!==null?f:y))}}function Oc(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function G1(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function H1(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const s=e.maxTranslate()-e.minTranslate();s===0?i=0:i=(e.translate-e.minTranslate())/s,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function U1(e){const t=this;Fi(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function W1(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Up=(e,t)=>{const n=er(),{params:r,el:i,wrapperEl:s,device:o}=e,l=!!r.nested,a=t==="on"?"addEventListener":"removeEventListener",c=t;!i||typeof i=="string"||(n[a]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[a]("touchstart",e.onTouchStart,{passive:!1}),i[a]("pointerdown",e.onTouchStart,{passive:!1}),n[a]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[a]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[a]("touchend",e.onTouchEnd,{passive:!0}),n[a]("pointerup",e.onTouchEnd,{passive:!0}),n[a]("pointercancel",e.onTouchEnd,{passive:!0}),n[a]("touchcancel",e.onTouchEnd,{passive:!0}),n[a]("pointerout",e.onTouchEnd,{passive:!0}),n[a]("pointerleave",e.onTouchEnd,{passive:!0}),n[a]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[a]("click",e.onClick,!0),r.cssMode&&s[a]("scroll",e.onScroll),r.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Oc,!0):e[c]("observerUpdate",Oc,!0),i[a]("load",e.onLoad,{capture:!0}))};function Y1(){const e=this,{params:t}=e;e.onTouchStart=B1.bind(e),e.onTouchMove=$1.bind(e),e.onTouchEnd=V1.bind(e),e.onDocumentTouchStart=W1.bind(e),t.cssMode&&(e.onScroll=H1.bind(e)),e.onClick=G1.bind(e),e.onLoad=U1.bind(e),Up(e,"on")}function X1(){Up(this,"off")}var Q1={attachEvents:Y1,detachEvents:X1};const Lc=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function K1(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,s=r.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=e.getBreakpoint(s,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const a=(o in s?s[o]:void 0)||e.originalParams,c=Lc(e,r),d=Lc(e,a),p=e.params.grabCursor,h=a.grabCursor,g=r.enabled;c&&!d?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&d&&(i.classList.add(`${r.containerModifierClass}grid`),(a.grid.fill&&a.grid.fill==="column"||!a.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!h?e.unsetGrabCursor():!p&&h&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(m=>{if(typeof a[m]>"u")return;const w=r[m]&&r[m].enabled,x=a[m]&&a[m].enabled;w&&!x&&e[m].disable(),!w&&x&&e[m].enable()});const v=a.direction&&a.direction!==r.direction,y=r.loop&&(a.slidesPerView!==r.slidesPerView||v),E=r.loop;v&&n&&e.changeDirection(),Pe(e.params,a);const u=e.params.enabled,f=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),g&&!u?e.disable():!g&&u&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",a),n&&(y?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!E&&f?(e.loopCreate(t),e.updateSlides()):E&&!f&&e.loopDestroy()),e.emit("breakpoint",a)}function q1(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=Fe(),s=t==="window"?i.innerHeight:n.clientHeight,o=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const a=parseFloat(l.substr(1));return{value:s*a,point:l}}return{value:l,point:l}});o.sort((l,a)=>parseInt(l.value,10)-parseInt(a.value,10));for(let l=0;l<o.length;l+=1){const{point:a,value:c}=o[l];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=a):c<=n.clientWidth&&(r=a)}return r||"max"}var Z1={setBreakpoint:K1,getBreakpoint:q1};function J1(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function ey(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:s}=e,o=J1(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function ty(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var ny={addClasses:ey,removeClasses:ty};function ry(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,s=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>s}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var iy={checkOverflow:ry},Fl={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function sy(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){Pe(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in s)){Pe(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Pe(t,r)}}const So={eventsEmitter:n1,update:p1,translate:w1,transition:k1,slide:I1,loop:_1,grabCursor:D1,events:Q1,breakpoints:Z1,checkOverflow:iy,classes:ny},Eo={};let Wa=class ut{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=Pe({},n),t&&!n.el&&(n.el=t);const o=er();if(n.el&&typeof n.el=="string"&&o.querySelectorAll(n.el).length>1){const d=[];return o.querySelectorAll(n.el).forEach(p=>{const h=Pe({},n,{el:p});d.push(new ut(h))}),d}const l=this;l.__swiper__=!0,l.support=Vp(),l.device=Gp({userAgent:n.userAgent}),l.browser=J0(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],n.modules&&Array.isArray(n.modules)&&l.modules.push(...n.modules);const a={};l.modules.forEach(d=>{d({params:n,swiper:l,extendParams:sy(n,a),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const c=Pe({},Fl,a);return l.params=Pe({},c,Eo,n),l.originalParams=Pe({},l.params),l.passedParams=Pe({},n),l.params&&l.params.on&&Object.keys(l.params.on).forEach(d=>{l.on(d,l.params.on[d])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=st(n,`.${r.slideClass}, swiper-slide`),s=ms(i[0]);return ms(t)-s}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=st(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),o=(r.maxTranslate()-i)*t+i;r.translateTo(o,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:s,slidesGrid:o,slidesSizesGrid:l,size:a,activeIndex:c}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let p=s[c]?Math.ceil(s[c].swiperSlideSize):0,h;for(let g=c+1;g<s.length;g+=1)s[g]&&!h&&(p+=Math.ceil(s[g].swiperSlideSize),d+=1,p>a&&(h=!0));for(let g=c-1;g>=0;g-=1)s[g]&&!h&&(p+=s[g].swiperSlideSize,d+=1,p>a&&(h=!0))}else if(t==="current")for(let p=c+1;p<s.length;p+=1)(n?o[p]+l[p]-o[c]<a:o[p]-o[c]<a)&&(d+=1);else for(let p=c-1;p>=0;p-=1)o[c]-o[p]<a&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Fi(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const o=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let s;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const o=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;s=t.slideTo(o.length-1,0,!1,!0)}else s=t.slideTo(t.activeIndex,0,!1,!0);s||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(s=>{t==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):st(r,i())[0];return!o&&n.params.createElements&&(o=Yr("div",n.params.wrapperClass),r.append(o),st(r,`.${n.params.slideClass}`).forEach(l=>{o.append(l)})),Object.assign(n,{el:r,wrapperEl:o,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:o,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Mt(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Mt(r,"direction")==="rtl"),wrongRTL:Mt(o,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(s=>{s.complete?Fi(n,s):s.addEventListener("load",o=>{Fi(n,o.target)})}),jl(n),n.initialized=!0,jl(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:s,wrapperEl:o,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),s&&typeof s!="string"&&s.removeAttribute("style"),o&&o.removeAttribute("style"),l&&l.length&&l.forEach(a=>{a.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(a=>{r.off(a)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),R0(r)),r.destroyed=!0),null}static extendDefaults(t){Pe(Eo,t)}static get extendedDefaults(){return Eo}static get defaults(){return Fl}static installModule(t){ut.prototype.__modules__||(ut.prototype.__modules__=[]);const n=ut.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>ut.installModule(n)),ut):(ut.installModule(t),ut)}};Object.keys(So).forEach(e=>{Object.keys(So[e]).forEach(t=>{Wa.prototype[t]=So[e][t]})});Wa.use([e1,t1]);const Wp=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function hn(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Bn(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:hn(t[r])&&hn(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Bn(e[r],t[r]):e[r]=t[r]})}function Yp(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Xp(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Qp(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Kp(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function oy(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function ly(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:s,prevEl:o,scrollbarEl:l,paginationEl:a}=e;const c=i.filter(I=>I!=="children"&&I!=="direction"&&I!=="wrapperClass"),{params:d,pagination:p,navigation:h,scrollbar:g,virtual:v,thumbs:y}=t;let E,u,f,m,w,x,A,z;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(E=!0),i.includes("controller")&&r.controller&&r.controller.control&&d.controller&&!d.controller.control&&(u=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||a)&&(d.pagination||d.pagination===!1)&&p&&!p.el&&(f=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||l)&&(d.scrollbar||d.scrollbar===!1)&&g&&!g.el&&(m=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||o)&&(r.navigation.nextEl||s)&&(d.navigation||d.navigation===!1)&&h&&!h.prevEl&&!h.nextEl&&(w=!0);const C=I=>{t[I]&&(t[I].destroy(),I==="navigation"?(t.isElement&&(t[I].prevEl.remove(),t[I].nextEl.remove()),d[I].prevEl=void 0,d[I].nextEl=void 0,t[I].prevEl=void 0,t[I].nextEl=void 0):(t.isElement&&t[I].el.remove(),d[I].el=void 0,t[I].el=void 0))};i.includes("loop")&&t.isElement&&(d.loop&&!r.loop?x=!0:!d.loop&&r.loop?A=!0:z=!0),c.forEach(I=>{if(hn(d[I])&&hn(r[I]))Object.assign(d[I],r[I]),(I==="navigation"||I==="pagination"||I==="scrollbar")&&"enabled"in r[I]&&!r[I].enabled&&C(I);else{const S=r[I];(S===!0||S===!1)&&(I==="navigation"||I==="pagination"||I==="scrollbar")?S===!1&&C(I):d[I]=r[I]}}),c.includes("controller")&&!u&&t.controller&&t.controller.control&&d.controller&&d.controller.control&&(t.controller.control=d.controller.control),i.includes("children")&&n&&v&&d.virtual.enabled?(v.slides=n,v.update(!0)):i.includes("virtual")&&v&&d.virtual.enabled&&(n&&(v.slides=n),v.update(!0)),i.includes("children")&&n&&d.loop&&(z=!0),E&&y.init()&&y.update(!0),u&&(t.controller.control=d.controller.control),f&&(t.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),a.part.add("pagination"),t.el.appendChild(a)),a&&(d.pagination.el=a),p.init(),p.render(),p.update()),m&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-scrollbar"),l.part.add("scrollbar"),t.el.appendChild(l)),l&&(d.scrollbar.el=l),g.init(),g.updateSize(),g.setTranslate()),w&&(t.isElement&&((!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-next"),s.innerHTML=t.hostEl.constructor.nextButtonSvg,s.part.add("button-next"),t.el.appendChild(s)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=t.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),t.el.appendChild(o))),s&&(d.navigation.nextEl=s),o&&(d.navigation.prevEl=o),h.init(),h.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(x||z)&&t.loopDestroy(),(A||z)&&t.loopCreate(),t.update()}function ay(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};Bn(n,Fl),n._emitClasses=!0,n.init=!1;const s={},o=Wp.map(a=>a.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(a=>{typeof e[a]>"u"||(o.indexOf(a)>=0?hn(e[a])?(n[a]={},i[a]={},Bn(n[a],e[a]),Bn(i[a],e[a])):(n[a]=e[a],i[a]=e[a]):a.search(/on[A-Z]/)===0&&typeof e[a]=="function"?t?r[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:n.on[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:s[a]=e[a])}),["navigation","pagination","scrollbar"].forEach(a=>{n[a]===!0&&(n[a]={}),n[a]===!1&&delete n[a]}),{params:n,passedParams:i,rest:s,events:r}}function uy(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:s,scrollbarEl:o,swiper:l}=e;Yp(t)&&r&&i&&(l.params.navigation.nextEl=r,l.originalParams.navigation.nextEl=r,l.params.navigation.prevEl=i,l.originalParams.navigation.prevEl=i),Xp(t)&&s&&(l.params.pagination.el=s,l.originalParams.pagination.el=s),Qp(t)&&o&&(l.params.scrollbar.el=o,l.originalParams.scrollbar.el=o),l.init(n)}function cy(e,t,n,r,i){const s=[];if(!t)return s;const o=a=>{s.indexOf(a)<0&&s.push(a)};if(n&&r){const a=r.map(i),c=n.map(i);a.join("")!==c.join("")&&o("children"),r.length!==n.length&&o("children")}return Wp.filter(a=>a[0]==="_").map(a=>a.replace(/_/,"")).forEach(a=>{if(a in e&&a in t)if(hn(e[a])&&hn(t[a])){const c=Object.keys(e[a]),d=Object.keys(t[a]);c.length!==d.length?o(a):(c.forEach(p=>{e[a][p]!==t[a][p]&&o(a)}),d.forEach(p=>{e[a][p]!==t[a][p]&&o(a)}))}else e[a]!==t[a]&&o(a)}),s}const fy=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function hs(){return hs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hs.apply(this,arguments)}function qp(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function Zp(e){const t=[];return q.Children.toArray(e).forEach(n=>{qp(n)?t.push(n):n.props&&n.props.children&&Zp(n.props.children).forEach(r=>t.push(r))}),t}function dy(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return q.Children.toArray(e).forEach(r=>{if(qp(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=Zp(r.props.children);i.length>0?i.forEach(s=>t.push(s)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function py(e,t,n){if(!n)return null;const r=d=>{let p=d;return d<0?p=t.length+d:p>=t.length&&(p=p-t.length),p},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:s,to:o}=n,l=e.params.loop?-t.length:0,a=e.params.loop?t.length*2:t.length,c=[];for(let d=l;d<a;d+=1)d>=s&&d<=o&&c.push(t[r(d)]);return c.map((d,p)=>q.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${p}`}))}function br(e,t){return typeof window>"u"?M.useEffect(e,t):M.useLayoutEffect(e,t)}const _c=M.createContext(null),my=M.createContext(null),Jp=M.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:s,onSwiper:o,...l}=e===void 0?{}:e,a=!1;const[c,d]=M.useState("swiper"),[p,h]=M.useState(null),[g,v]=M.useState(!1),y=M.useRef(!1),E=M.useRef(null),u=M.useRef(null),f=M.useRef(null),m=M.useRef(null),w=M.useRef(null),x=M.useRef(null),A=M.useRef(null),z=M.useRef(null),{params:C,passedParams:I,rest:S,events:T}=ay(l),{slides:k,slots:P}=dy(s),D=()=>{v(!g)};Object.assign(C.on,{_containerClasses(j,F){d(F)}});const V=()=>{Object.assign(C.on,T),a=!0;const j={...C};if(delete j.wrapperClass,u.current=new Wa(j),u.current.virtual&&u.current.params.virtual.enabled){u.current.virtual.slides=k;const F={cache:!1,slides:k,renderExternal:h,renderExternalUpdate:!1};Bn(u.current.params.virtual,F),Bn(u.current.originalParams.virtual,F)}};E.current||V(),u.current&&u.current.on("_beforeBreakpoint",D);const se=()=>{a||!T||!u.current||Object.keys(T).forEach(j=>{u.current.on(j,T[j])})},De=()=>{!T||!u.current||Object.keys(T).forEach(j=>{u.current.off(j,T[j])})};M.useEffect(()=>()=>{u.current&&u.current.off("_beforeBreakpoint",D)}),M.useEffect(()=>{!y.current&&u.current&&(u.current.emitSlidesClasses(),y.current=!0)}),br(()=>{if(t&&(t.current=E.current),!!E.current)return u.current.destroyed&&V(),uy({el:E.current,nextEl:w.current,prevEl:x.current,paginationEl:A.current,scrollbarEl:z.current,swiper:u.current},C),o&&!u.current.destroyed&&o(u.current),()=>{u.current&&!u.current.destroyed&&u.current.destroy(!0,!1)}},[]),br(()=>{se();const j=cy(I,f.current,k,m.current,F=>F.key);return f.current=I,m.current=k,j.length&&u.current&&!u.current.destroyed&&ly({swiper:u.current,slides:k,passedParams:I,changedParams:j,nextEl:w.current,prevEl:x.current,scrollbarEl:z.current,paginationEl:A.current}),()=>{De()}}),br(()=>{fy(u.current)},[p]);function O(){return C.virtual?py(u.current,k,p):k.map((j,F)=>q.cloneElement(j,{swiper:u.current,swiperSlideIndex:F}))}return q.createElement(r,hs({ref:E,className:Kp(`${c}${n?` ${n}`:""}`)},S),q.createElement(my.Provider,{value:u.current},P["container-start"],q.createElement(i,{className:oy(C.wrapperClass)},P["wrapper-start"],O(),P["wrapper-end"]),Yp(C)&&q.createElement(q.Fragment,null,q.createElement("div",{ref:x,className:"swiper-button-prev"}),q.createElement("div",{ref:w,className:"swiper-button-next"})),Qp(C)&&q.createElement("div",{ref:z,className:"swiper-scrollbar"}),Xp(C)&&q.createElement("div",{ref:A,className:"swiper-pagination"}),P["container-end"]))});Jp.displayName="Swiper";const Dl=M.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:s,zoom:o,lazy:l,virtualIndex:a,swiperSlideIndex:c,...d}=e===void 0?{}:e;const p=M.useRef(null),[h,g]=M.useState("swiper-slide"),[v,y]=M.useState(!1);function E(w,x,A){x===p.current&&g(A)}br(()=>{if(typeof c<"u"&&(p.current.swiperSlideIndex=c),t&&(t.current=p.current),!(!p.current||!s)){if(s.destroyed){h!=="swiper-slide"&&g("swiper-slide");return}return s.on("_slideClass",E),()=>{s&&s.off("_slideClass",E)}}}),br(()=>{s&&p.current&&!s.destroyed&&g(s.getSlideClasses(p.current))},[s]);const u={isActive:h.indexOf("swiper-slide-active")>=0,isVisible:h.indexOf("swiper-slide-visible")>=0,isPrev:h.indexOf("swiper-slide-prev")>=0,isNext:h.indexOf("swiper-slide-next")>=0},f=()=>typeof r=="function"?r(u):r,m=()=>{y(!0)};return q.createElement(n,hs({ref:p,className:Kp(`${h}${i?` ${i}`:""}`),"data-swiper-slide-index":a,onLoad:m},d),o&&q.createElement(_c.Provider,{value:u},q.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},f(),l&&!v&&q.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&q.createElement(_c.Provider,{value:u},f(),l&&!v&&q.createElement("div",{className:"swiper-lazy-preloader"})))});Dl.displayName="SwiperSlide";const hy=()=>b.jsx("div",{className:"video-container123 skeleton-container",children:b.jsx("div",{className:"carousel-div123",children:b.jsx("p",{className:"txt2-123"})})}),gy=({campaigns:e,loading:t,widgetsDiv:n})=>{const r=M.useRef(null);M.useRef([]),M.useState(!1);const[i,s]=M.useState(null),[o,l]=M.useState(!1),[a,c]=M.useState(!0),[d,p]=M.useState(null),h=u=>{s(u)},g=()=>{s(null)},v=()=>{r.current.scrollBy({left:-r.current.clientWidth,behavior:"smooth"})},y=()=>{r.current.scrollBy({left:r.current.clientWidth,behavior:"smooth"})},E=()=>{const u=r.current.scrollLeft,f=r.current.scrollWidth-r.current.clientWidth;l(u>70),c(u<f-70)};return M.useEffect(()=>{const u=r.current;return u.addEventListener("scroll",E),E(),()=>{u.removeEventListener("scroll",E)}},[]),b.jsx(b.Fragment,{children:b.jsxs("div",{className:"container",children:[b.jsx("style",{children:`
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
      margin-bottom: 1em !important;
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
  padding:0em !important;
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
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 2.2vh;
  text-align: center;
  padding: 1.3vh 2.5vh;
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
    font-family: "Segoe UI", Tahoma, Verdana, sans-serif !important;
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
`}),b.jsx(Jp,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:0,stretch:0,depth:100,modifier:2.5},modules:[Q0,W0,U0],className:"swiper_container",children:t?Array.from({length:5}).map((u,f)=>b.jsx(Dl,{children:b.jsx(hy,{})},f)):e.map((u,f)=>b.jsx(Dl,{onClick:()=>h(f),children:b.jsxs("div",{className:"video-container123",children:[b.jsx("div",{className:"inner-video-container123",onMouseEnter:()=>p(f),onMouseLeave:()=>p(null)}),d===f?b.jsx("video",{src:u.videoId[0],loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"}):b.jsx("img",{className:"thumbnail",src:u.campaignPhoto,width:"300",height:"200",alt:"video thumbnail"}),n?b.jsxs("div",{className:"widgetsDivBookdiv123",children:[b.jsx("div",{className:"img1 widgetsDivImg1",children:b.jsx("img",{className:"img widgetsDivImg",src:u.campaignPhoto,alt:"Campaign"})}),b.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[b.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname widgetsDivHotelname",children:u.campaignName}),b.jsx("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer"}),b.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"widgetsDivOfferprice",children:["From ",u.offerPrice.currency,u.offerPrice.price]})]}),b.jsx("div",{className:"divbtn",children:b.jsx("a",{href:u.hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn widgetsDivBookbtn",children:"Book"})})]}):b.jsx("div",{className:"carousel-div123",children:b.jsxs("p",{className:"txt2-123",children:[u.campaignName," ",b.jsx("br",{})," From"," ",u.offerPrice.currency,u.offerPrice.price]})})]})},f))}),o&&b.jsx("button",{className:"nav-btn123",onClick:v,children:"<"}),b.jsx("div",{className:"carousel",ref:r}),a&&b.jsx("button",{className:"nav-btn123",onClick:y,children:">"}),i!==null&&b.jsx(vy,{campaigns:e,currentIndex:i,onClose:g})]})})},vy=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=M.useState(t),[s,o]=M.useState(0),[l,a]=M.useState({}),[c,d]=M.useState(!1),[p,h]=M.useState(!1),[g,v]=M.useState(!1),[y,E]=M.useState(!1),u=M.useRef([]);M.useRef(null);const f=M.useRef(null);M.useEffect(()=>{const S=()=>{if(document.visibilityState==="hidden"){const T=u.current[s];T&&!T.paused&&(T.pause(),d(!0),E(!0))}};return document.addEventListener("visibilitychange",S),()=>{document.removeEventListener("visibilitychange",S)}},[s]),M.useEffect(()=>{const S=new IntersectionObserver(T=>{T.forEach(k=>{const P=u.current.indexOf(k.target);k.isIntersecting?(k.target.play(),o(P),E(!1)):k.target.pause()})},{threshold:.5});return o(0),u.current.forEach(T=>{T&&S.observe(T)}),()=>{u.current.forEach(T=>{T&&S.unobserve(T)})}},[r]),M.useEffect(()=>{const S=u.current[s];S&&S.play()},[s]);const m=()=>{r!==null?r+1<e.length?(i(r+1),o(0)):(i(0),o(0)):e.length>0&&(i(0),o(0)),h(!1)},w=()=>{r!==null?r>0?(i(r-1),o(0)):(i(e.length-1),o(0)):e.length>0&&(i(e.length-1),o(0)),h(!1)},x=S=>{const T=u.current[S];T&&(T.paused?(T.play(),console.log("Playing")):(T.pause(),console.log("Paused")),d(T.paused),E(T.paused))},A=S=>{const T=u.current[S];T&&(T.muted=!T.muted,a(k=>({...k,[S]:T.muted})))},z=()=>{v(!g)},C=S=>{const T=S.split(`
`);return T.length>2?{truncated:T.slice(0,2).join(`
`),hasMore:!0}:{truncated:S,hasMore:!1}},I=S=>{console.log("Video ended, checking if animation should play");const T=e[r];if(S<T.videoId.length-1)console.log("Not the last video, playing animation"),h(!0),setTimeout(()=>{const k=u.current[S];k&&(k.currentTime=0,k.play()),h(!1)},5e3);else{console.log("Last video, no animation, just restart");const k=u.current[S];k&&(k.currentTime=0,k.play())}};return M.useEffect(()=>{o(0),f.current&&(f.current.scrollTop=0)},[r]),M.useEffect(()=>{const S=()=>{h(!1)},T=f.current;return T&&T.addEventListener("scroll",S),()=>{T&&T.removeEventListener("scroll",S)}},[]),b.jsxs("div",{className:"whole123",children:[b.jsx("div",{className:"prevbtn123",onClick:w,children:b.jsx($e,{icon:ep})}),b.jsx("div",{className:"nextbtn123",onClick:m,children:b.jsx($e,{icon:Kd})}),b.jsxs("div",{className:"reelsContainer",ref:f,children:[e[r].videoId.map((S,T)=>b.jsxs("div",{className:"reel",children:[b.jsx("div",{className:"closediv123",children:b.jsx("button",{className:"closebtn123",onClick:n,children:b.jsx($e,{icon:Jd})})}),b.jsxs("div",{className:"video-container1",children:[b.jsx("video",{ref:k=>u.current[T]=k,src:S,className:"ad",loop:!1,playsInline:!0,controls:!1,autoPlay:T===s,onClick:()=>x(T),onPause:()=>{d(!0)},onPlay:()=>{d(!1)},onEnded:()=>I(T)}),c&&y&&b.jsx($e,{icon:bg,onClick:()=>x(T),className:"play-button123"}),b.jsxs("div",{className:"bookdiv123",children:[b.jsx("div",{className:"img1",children:b.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),b.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[b.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),b.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[g?e[r].campaignDetails:C(e[r].campaignDetails).truncated,C(e[r].campaignDetails).hasMore&&b.jsx("div",{children:b.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:z,children:g?" View Less":" View More"})})]}),b.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[r].offerPrice.currency,e[r].offerPrice.price]})]}),b.jsx("div",{className:"divbtn",children:b.jsx("a",{href:e[r].hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]}),b.jsx("div",{className:"functions",children:b.jsx($e,{icon:l[T]?Zd:qd,className:"volume123",onClick:()=>A(T),style:{cursor:"pointer"}})})]},T)),p&&b.jsx("img",{src:"scroll.gif",alt:"",className:"down-arrow"})]})]})},yy=()=>{const[e,t]=M.useState([]),[n,r]=M.useState([]),[i,s]=M.useState(!0),[o,l]=M.useState(!1);return M.useEffect(()=>{const a=document.getElementById("root-stack"),c=a.dataset.campaignId,d=a.dataset.widgetStatus;l(d==="true"),(async h=>{try{const v=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${h}`)).json(),y=v.campaigns.map(E=>E.videoId[0]);t(y),r(v.campaigns)}catch(g){console.error("Error fetching data:",g)}})(c)},[]),M.useEffect(()=>{n.length>0&&s(!1)},[n]),b.jsxs("div",{className:"App",children:[b.jsx(gy,{videos:e,campaigns:n,loading:i,widgetsDiv:o})," "]})},ko=document.getElementById("root-stories"),Co=document.getElementById("root-stack");ko&&ko.dataset.name==="stories"&&Di.createRoot(ko).render(b.jsx(q.StrictMode,{children:b.jsx(j0,{})}));Co&&Co.dataset.name==="stack"&&Di.createRoot(Co).render(b.jsx(q.StrictMode,{children:b.jsx(yy,{})}));
