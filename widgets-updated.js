(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Gc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Uc={exports:{}},vo={},Wc={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),rm=Symbol.for("react.portal"),im=Symbol.for("react.fragment"),om=Symbol.for("react.strict_mode"),sm=Symbol.for("react.profiler"),lm=Symbol.for("react.provider"),am=Symbol.for("react.context"),um=Symbol.for("react.forward_ref"),cm=Symbol.for("react.suspense"),dm=Symbol.for("react.memo"),fm=Symbol.for("react.lazy"),tu=Symbol.iterator;function pm(e){return e===null||typeof e!="object"?null:(e=tu&&e[tu]||e["@@iterator"],typeof e=="function"?e:null)}var Yc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xc=Object.assign,Qc={};function qn(e,t,n){this.props=e,this.context=t,this.refs=Qc,this.updater=n||Yc}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kc(){}Kc.prototype=qn.prototype;function Wl(e,t,n){this.props=e,this.context=t,this.refs=Qc,this.updater=n||Yc}var Yl=Wl.prototype=new Kc;Yl.constructor=Wl;Xc(Yl,qn.prototype);Yl.isPureReactComponent=!0;var nu=Array.isArray,qc=Object.prototype.hasOwnProperty,Xl={current:null},Zc={key:!0,ref:!0,__self:!0,__source:!0};function Jc(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)qc.call(t,r)&&!Zc.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Qr,type:e,key:o,ref:s,props:i,_owner:Xl.current}}function mm(e,t){return{$$typeof:Qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ql(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qr}function hm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ru=/\/+/g;function Ho(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hm(""+e.key):t.toString(36)}function ki(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Qr:case rm:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ho(s,0):r,nu(i)?(n="",e!=null&&(n=e.replace(ru,"$&/")+"/"),ki(i,t,n,"",function(c){return c})):i!=null&&(Ql(i)&&(i=mm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ru,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",nu(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Ho(o,l);s+=ki(o,t,n,a,i)}else if(a=pm(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Ho(o,l++),s+=ki(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ii(e,t,n){if(e==null)return e;var r=[],i=0;return ki(e,r,"","",function(o){return t.call(n,o,i++)}),r}function gm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Ci={transition:null},vm={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Ci,ReactCurrentOwner:Xl};function ed(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:ii,forEach:function(e,t,n){ii(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ii(e,function(){t++}),t},toArray:function(e){return ii(e,function(t){return t})||[]},only:function(e){if(!Ql(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=qn;B.Fragment=im;B.Profiler=sm;B.PureComponent=Wl;B.StrictMode=om;B.Suspense=cm;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vm;B.act=ed;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xc({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Xl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)qc.call(t,a)&&!Zc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Qr,type:e.type,key:i,ref:o,props:r,_owner:s}};B.createContext=function(e){return e={$$typeof:am,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lm,_context:e},e.Consumer=e};B.createElement=Jc;B.createFactory=function(e){var t=Jc.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:um,render:e}};B.isValidElement=Ql;B.lazy=function(e){return{$$typeof:fm,_payload:{_status:-1,_result:e},_init:gm}};B.memo=function(e,t){return{$$typeof:dm,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Ci.transition;Ci.transition={};try{e()}finally{Ci.transition=t}};B.unstable_act=ed;B.useCallback=function(e,t){return Se.current.useCallback(e,t)};B.useContext=function(e){return Se.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};B.useEffect=function(e,t){return Se.current.useEffect(e,t)};B.useId=function(){return Se.current.useId()};B.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Se.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};B.useRef=function(e){return Se.current.useRef(e)};B.useState=function(e){return Se.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Se.current.useTransition()};B.version="18.3.1";Wc.exports=B;var P=Wc.exports;const W=Gc(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=P,wm=Symbol.for("react.element"),xm=Symbol.for("react.fragment"),Sm=Object.prototype.hasOwnProperty,bm=ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Em={key:!0,ref:!0,__self:!0,__source:!0};function td(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Sm.call(t,r)&&!Em.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:wm,type:e,key:o,ref:s,props:i,_owner:bm.current}}vo.Fragment=xm;vo.jsx=td;vo.jsxs=td;Uc.exports=vo;var y=Uc.exports,Vn={},nd={exports:{}},_e={},rd={exports:{}},id={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,j){var F=L.length;L.push(j);e:for(;0<F;){var q=F-1>>>1,ie=L[q];if(0<i(ie,j))L[q]=j,L[F]=ie,F=q;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var j=L[0],F=L.pop();if(F!==j){L[0]=F;e:for(var q=0,ie=L.length,ni=ie>>>1;q<ni;){var Qt=2*(q+1)-1,$o=L[Qt],Kt=Qt+1,ri=L[Kt];if(0>i($o,F))Kt<ie&&0>i(ri,$o)?(L[q]=ri,L[Kt]=F,q=Kt):(L[q]=$o,L[Qt]=F,q=Qt);else if(Kt<ie&&0>i(ri,F))L[q]=ri,L[Kt]=F,q=Kt;else break e}}return j}function i(L,j){var F=L.sortIndex-j.sortIndex;return F!==0?F:L.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],c=[],d=1,p=null,m=3,g=!1,v=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(L){for(var j=n(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=L)r(c),j.sortIndex=j.expirationTime,t(a,j);else break;j=n(c)}}function x(L){if(w=!1,h(L),!v)if(n(a)!==null)v=!0,se(E);else{var j=n(c);j!==null&&Re(x,j.startTime-L)}}function E(L,j){v=!1,w&&(w=!1,u(A),A=-1),g=!0;var F=m;try{for(h(j),p=n(a);p!==null&&(!(p.expirationTime>j)||L&&!S());){var q=p.callback;if(typeof q=="function"){p.callback=null,m=p.priorityLevel;var ie=q(p.expirationTime<=j);j=e.unstable_now(),typeof ie=="function"?p.callback=ie:p===n(a)&&r(a),h(j)}else r(a);p=n(a)}if(p!==null)var ni=!0;else{var Qt=n(c);Qt!==null&&Re(x,Qt.startTime-j),ni=!1}return ni}finally{p=null,m=F,g=!1}}var T=!1,z=null,A=-1,M=5,b=-1;function S(){return!(e.unstable_now()-b<M)}function k(){if(z!==null){var L=e.unstable_now();b=L;var j=!0;try{j=z(!0,L)}finally{j?N():(T=!1,z=null)}}else T=!1}var N;if(typeof f=="function")N=function(){f(k)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,$=D.port2;D.port1.onmessage=k,N=function(){$.postMessage(null)}}else N=function(){C(k,0)};function se(L){z=L,T||(T=!0,N())}function Re(L,j){A=C(function(){L(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,se(E))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(L){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var F=m;m=j;try{return L()}finally{m=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,j){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var F=m;m=L;try{return j()}finally{m=F}},e.unstable_scheduleCallback=function(L,j,F){var q=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?q+F:q):F=q,L){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=F+ie,L={id:d++,callback:j,priorityLevel:L,startTime:F,expirationTime:ie,sortIndex:-1},F>q?(L.sortIndex=F,t(c,L),n(a)===null&&L===n(c)&&(w?(u(A),A=-1):w=!0,Re(x,F-q))):(L.sortIndex=ie,t(a,L),v||g||(v=!0,se(E))),L},e.unstable_shouldYield=S,e.unstable_wrapCallback=function(L){var j=m;return function(){var F=m;m=j;try{return L.apply(this,arguments)}finally{m=F}}}})(id);rd.exports=id;var km=rd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm=P,Oe=km;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var od=new Set,Nr={};function gn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(Nr[e]=t,e=0;e<t.length;e++)od.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ms=Object.prototype.hasOwnProperty,Am=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,iu={},ou={};function Tm(e){return Ms.call(ou,e)?!0:Ms.call(iu,e)?!1:Am.test(e)?ou[e]=!0:(iu[e]=!0,!1)}function Pm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nm(e,t,n,r){if(t===null||typeof t>"u"||Pm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Kl=/[\-:]([a-z])/g;function ql(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Kl,ql);me[t]=new be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Kl,ql);me[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Kl,ql);me[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zl(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Nm(t,n,i,r)&&(n=null),r||i===null?Tm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=Cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oi=Symbol.for("react.element"),wn=Symbol.for("react.portal"),xn=Symbol.for("react.fragment"),Jl=Symbol.for("react.strict_mode"),Ls=Symbol.for("react.profiler"),sd=Symbol.for("react.provider"),ld=Symbol.for("react.context"),ea=Symbol.for("react.forward_ref"),Os=Symbol.for("react.suspense"),_s=Symbol.for("react.suspense_list"),ta=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),ad=Symbol.for("react.offscreen"),su=Symbol.iterator;function nr(e){return e===null||typeof e!="object"?null:(e=su&&e[su]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Go;function dr(e){if(Go===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Go=t&&t[1]||""}return`
`+Go+e}var Uo=!1;function Wo(e,t){if(!e||Uo)return"";Uo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Uo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function zm(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=Wo(e.type,!1),e;case 11:return e=Wo(e.type.render,!1),e;case 1:return e=Wo(e.type,!0),e;default:return""}}function js(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xn:return"Fragment";case wn:return"Portal";case Ls:return"Profiler";case Jl:return"StrictMode";case Os:return"Suspense";case _s:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ld:return(e.displayName||"Context")+".Consumer";case sd:return(e._context.displayName||"Context")+".Provider";case ea:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ta:return t=e.displayName||null,t!==null?t:js(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return js(e(t))}catch{}}return null}function Im(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return js(t);case 8:return t===Jl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ud(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mm(e){var t=ud(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function si(e){e._valueTracker||(e._valueTracker=Mm(e))}function cd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ud(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fs(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function lu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dd(e,t){t=t.checked,t!=null&&Zl(e,"checked",t,!1)}function Ds(e,t){dd(e,t);var n=Vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Rs(e,t.type,Vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function au(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Rs(e,t,n){(t!=="number"||Ri(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(fr(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vt(n)}}function fd(e,t){var n=Vt(t.value),r=Vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var li,md=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(li=li||document.createElement("div"),li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lm=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(e){Lm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vr[t]=vr[e]})});function hd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||vr.hasOwnProperty(e)&&vr[e]?(""+t).trim():t+"px"}function gd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Om=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $s(e,t){if(t){if(Om[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function Hs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gs=null;function na(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Us=null,On=null,_n=null;function du(e){if(e=Zr(e)){if(typeof Us!="function")throw Error(I(280));var t=e.stateNode;t&&(t=bo(t),Us(e.stateNode,e.type,t))}}function vd(e){On?_n?_n.push(e):_n=[e]:On=e}function yd(){if(On){var e=On,t=_n;if(_n=On=null,du(e),t)for(e=0;e<t.length;e++)du(t[e])}}function wd(e,t){return e(t)}function xd(){}var Yo=!1;function Sd(e,t,n){if(Yo)return e(t,n);Yo=!0;try{return wd(e,t,n)}finally{Yo=!1,(On!==null||_n!==null)&&(xd(),yd())}}function Ir(e,t){var n=e.stateNode;if(n===null)return null;var r=bo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Ws=!1;if(ht)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){Ws=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{Ws=!1}function _m(e,t,n,r,i,o,s,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var yr=!1,Bi=null,Vi=!1,Ys=null,jm={onError:function(e){yr=!0,Bi=e}};function Fm(e,t,n,r,i,o,s,l,a){yr=!1,Bi=null,_m.apply(jm,arguments)}function Dm(e,t,n,r,i,o,s,l,a){if(Fm.apply(this,arguments),yr){if(yr){var c=Bi;yr=!1,Bi=null}else throw Error(I(198));Vi||(Vi=!0,Ys=c)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fu(e){if(vn(e)!==e)throw Error(I(188))}function Rm(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return fu(i),e;if(o===r)return fu(i),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Ed(e){return e=Rm(e),e!==null?kd(e):null}function kd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kd(e);if(t!==null)return t;e=e.sibling}return null}var Cd=Oe.unstable_scheduleCallback,pu=Oe.unstable_cancelCallback,Bm=Oe.unstable_shouldYield,Vm=Oe.unstable_requestPaint,re=Oe.unstable_now,$m=Oe.unstable_getCurrentPriorityLevel,ra=Oe.unstable_ImmediatePriority,Ad=Oe.unstable_UserBlockingPriority,$i=Oe.unstable_NormalPriority,Hm=Oe.unstable_LowPriority,Td=Oe.unstable_IdlePriority,yo=null,st=null;function Gm(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(yo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:Ym,Um=Math.log,Wm=Math.LN2;function Ym(e){return e>>>=0,e===0?32:31-(Um(e)/Wm|0)|0}var ai=64,ui=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=pr(l):(o&=s,o!==0&&(r=pr(o)))}else s=n&~i,s!==0?r=pr(s):o!==0&&(r=pr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),i=1<<n,r|=e[n],t&=~i;return r}function Xm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ke(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=Xm(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function Xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pd(){var e=ai;return ai<<=1,!(ai&4194240)&&(ai=64),e}function Xo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function Km(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ke(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ia(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function Nd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zd,oa,Id,Md,Ld,Qs=!1,ci=[],Lt=null,Ot=null,_t=null,Mr=new Map,Lr=new Map,Tt=[],qm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mu(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(t.pointerId)}}function ir(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Zr(t),t!==null&&oa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Zm(e,t,n,r,i){switch(t){case"focusin":return Lt=ir(Lt,e,t,n,r,i),!0;case"dragenter":return Ot=ir(Ot,e,t,n,r,i),!0;case"mouseover":return _t=ir(_t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Mr.set(o,ir(Mr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Lr.set(o,ir(Lr.get(o)||null,e,t,n,r,i)),!0}return!1}function Od(e){var t=en(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=bd(n),t!==null){e.blockedOn=t,Ld(e.priority,function(){Id(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ks(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gs=r,n.target.dispatchEvent(r),Gs=null}else return t=Zr(n),t!==null&&oa(t),e.blockedOn=n,!1;t.shift()}return!0}function hu(e,t,n){Ai(e)&&n.delete(t)}function Jm(){Qs=!1,Lt!==null&&Ai(Lt)&&(Lt=null),Ot!==null&&Ai(Ot)&&(Ot=null),_t!==null&&Ai(_t)&&(_t=null),Mr.forEach(hu),Lr.forEach(hu)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,Qs||(Qs=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,Jm)))}function Or(e){function t(i){return or(i,e)}if(0<ci.length){or(ci[0],e);for(var n=1;n<ci.length;n++){var r=ci[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&or(Lt,e),Ot!==null&&or(Ot,e),_t!==null&&or(_t,e),Mr.forEach(t),Lr.forEach(t),n=0;n<Tt.length;n++)r=Tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tt.length&&(n=Tt[0],n.blockedOn===null);)Od(n),n.blockedOn===null&&Tt.shift()}var jn=St.ReactCurrentBatchConfig,Gi=!0;function eh(e,t,n,r){var i=H,o=jn.transition;jn.transition=null;try{H=1,sa(e,t,n,r)}finally{H=i,jn.transition=o}}function th(e,t,n,r){var i=H,o=jn.transition;jn.transition=null;try{H=4,sa(e,t,n,r)}finally{H=i,jn.transition=o}}function sa(e,t,n,r){if(Gi){var i=Ks(e,t,n,r);if(i===null)is(e,t,r,Ui,n),mu(e,r);else if(Zm(i,e,t,n,r))r.stopPropagation();else if(mu(e,r),t&4&&-1<qm.indexOf(e)){for(;i!==null;){var o=Zr(i);if(o!==null&&zd(o),o=Ks(e,t,n,r),o===null&&is(e,t,r,Ui,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else is(e,t,r,null,n)}}var Ui=null;function Ks(e,t,n,r){if(Ui=null,e=na(r),e=en(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ui=e,null}function _d(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($m()){case ra:return 1;case Ad:return 4;case $i:case Hm:return 16;case Td:return 536870912;default:return 16}default:return 16}}var Nt=null,la=null,Ti=null;function jd(){if(Ti)return Ti;var e,t=la,n=t.length,r,i="value"in Nt?Nt.value:Nt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ti=i.slice(e,1<r?1-r:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function gu(){return!1}function je(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?di:gu,this.isPropagationStopped=gu,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},aa=je(Zn),qr=ee({},Zn,{view:0,detail:0}),nh=je(qr),Qo,Ko,sr,wo=ee({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ua,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(Qo=e.screenX-sr.screenX,Ko=e.screenY-sr.screenY):Ko=Qo=0,sr=e),Qo)},movementY:function(e){return"movementY"in e?e.movementY:Ko}}),vu=je(wo),rh=ee({},wo,{dataTransfer:0}),ih=je(rh),oh=ee({},qr,{relatedTarget:0}),qo=je(oh),sh=ee({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),lh=je(sh),ah=ee({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uh=je(ah),ch=ee({},Zn,{data:0}),yu=je(ch),dh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ph={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ph[e])?!!t[e]:!1}function ua(){return mh}var hh=ee({},qr,{key:function(e){if(e.key){var t=dh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ua,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gh=je(hh),vh=ee({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wu=je(vh),yh=ee({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ua}),wh=je(yh),xh=ee({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sh=je(xh),bh=ee({},wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Eh=je(bh),kh=[9,13,27,32],ca=ht&&"CompositionEvent"in window,wr=null;ht&&"documentMode"in document&&(wr=document.documentMode);var Ch=ht&&"TextEvent"in window&&!wr,Fd=ht&&(!ca||wr&&8<wr&&11>=wr),xu=" ",Su=!1;function Dd(e,t){switch(e){case"keyup":return kh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function Ah(e,t){switch(e){case"compositionend":return Rd(t);case"keypress":return t.which!==32?null:(Su=!0,xu);case"textInput":return e=t.data,e===xu&&Su?null:e;default:return null}}function Th(e,t){if(Sn)return e==="compositionend"||!ca&&Dd(e,t)?(e=jd(),Ti=la=Nt=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fd&&t.locale!=="ko"?null:t.data;default:return null}}var Ph={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ph[e.type]:t==="textarea"}function Bd(e,t,n,r){vd(r),t=Wi(t,"onChange"),0<t.length&&(n=new aa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xr=null,_r=null;function Nh(e){qd(e,0)}function xo(e){var t=kn(e);if(cd(t))return e}function zh(e,t){if(e==="change")return t}var Vd=!1;if(ht){var Zo;if(ht){var Jo="oninput"in document;if(!Jo){var Eu=document.createElement("div");Eu.setAttribute("oninput","return;"),Jo=typeof Eu.oninput=="function"}Zo=Jo}else Zo=!1;Vd=Zo&&(!document.documentMode||9<document.documentMode)}function ku(){xr&&(xr.detachEvent("onpropertychange",$d),_r=xr=null)}function $d(e){if(e.propertyName==="value"&&xo(_r)){var t=[];Bd(t,_r,e,na(e)),Sd(Nh,t)}}function Ih(e,t,n){e==="focusin"?(ku(),xr=t,_r=n,xr.attachEvent("onpropertychange",$d)):e==="focusout"&&ku()}function Mh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(_r)}function Lh(e,t){if(e==="click")return xo(t)}function Oh(e,t){if(e==="input"||e==="change")return xo(t)}function _h(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:_h;function jr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ms.call(t,i)||!Ze(e[i],t[i]))return!1}return!0}function Cu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Au(e,t){var n=Cu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cu(n)}}function Hd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gd(){for(var e=window,t=Ri();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ri(e.document)}return t}function da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jh(e){var t=Gd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hd(n.ownerDocument.documentElement,n)){if(r!==null&&da(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Au(n,o);var s=Au(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fh=ht&&"documentMode"in document&&11>=document.documentMode,bn=null,qs=null,Sr=null,Zs=!1;function Tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zs||bn==null||bn!==Ri(r)||(r=bn,"selectionStart"in r&&da(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&jr(Sr,r)||(Sr=r,r=Wi(qs,"onSelect"),0<r.length&&(t=new aa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bn)))}function fi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:fi("Animation","AnimationEnd"),animationiteration:fi("Animation","AnimationIteration"),animationstart:fi("Animation","AnimationStart"),transitionend:fi("Transition","TransitionEnd")},es={},Ud={};ht&&(Ud=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function So(e){if(es[e])return es[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ud)return es[e]=t[n];return e}var Wd=So("animationend"),Yd=So("animationiteration"),Xd=So("animationstart"),Qd=So("transitionend"),Kd=new Map,Pu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){Kd.set(e,t),gn(t,[e])}for(var ts=0;ts<Pu.length;ts++){var ns=Pu[ts],Dh=ns.toLowerCase(),Rh=ns[0].toUpperCase()+ns.slice(1);Wt(Dh,"on"+Rh)}Wt(Wd,"onAnimationEnd");Wt(Yd,"onAnimationIteration");Wt(Xd,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(Qd,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bh=new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));function Nu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dm(r,t,void 0,e),e.currentTarget=null}function qd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Nu(i,l,c),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,c=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Nu(i,l,c),o=a}}}if(Vi)throw e=Ys,Vi=!1,Ys=null,e}function U(e,t){var n=t[rl];n===void 0&&(n=t[rl]=new Set);var r=e+"__bubble";n.has(r)||(Zd(t,e,2,!1),n.add(r))}function rs(e,t,n){var r=0;t&&(r|=4),Zd(n,e,r,t)}var pi="_reactListening"+Math.random().toString(36).slice(2);function Fr(e){if(!e[pi]){e[pi]=!0,od.forEach(function(n){n!=="selectionchange"&&(Bh.has(n)||rs(n,!1,e),rs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pi]||(t[pi]=!0,rs("selectionchange",!1,t))}}function Zd(e,t,n,r){switch(_d(t)){case 1:var i=eh;break;case 4:i=th;break;default:i=sa}n=i.bind(null,t,n,e),i=void 0,!Ws||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function is(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=en(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Sd(function(){var c=o,d=na(n),p=[];e:{var m=Kd.get(e);if(m!==void 0){var g=aa,v=e;switch(e){case"keypress":if(Pi(n)===0)break e;case"keydown":case"keyup":g=gh;break;case"focusin":v="focus",g=qo;break;case"focusout":v="blur",g=qo;break;case"beforeblur":case"afterblur":g=qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=wh;break;case Wd:case Yd:case Xd:g=lh;break;case Qd:g=Sh;break;case"scroll":g=nh;break;case"wheel":g=Eh;break;case"copy":case"cut":case"paste":g=uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=wu}var w=(t&4)!==0,C=!w&&e==="scroll",u=w?m!==null?m+"Capture":null:m;w=[];for(var f=c,h;f!==null;){h=f;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,u!==null&&(x=Ir(f,u),x!=null&&w.push(Dr(f,x,h)))),C)break;f=f.return}0<w.length&&(m=new g(m,v,null,n,d),p.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Gs&&(v=n.relatedTarget||n.fromElement)&&(en(v)||v[gt]))break e;if((g||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?en(v):null,v!==null&&(C=vn(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(w=vu,x="onMouseLeave",u="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=wu,x="onPointerLeave",u="onPointerEnter",f="pointer"),C=g==null?m:kn(g),h=v==null?m:kn(v),m=new w(x,f+"leave",g,n,d),m.target=C,m.relatedTarget=h,x=null,en(d)===c&&(w=new w(u,f+"enter",v,n,d),w.target=h,w.relatedTarget=C,x=w),C=x,g&&v)t:{for(w=g,u=v,f=0,h=w;h;h=yn(h))f++;for(h=0,x=u;x;x=yn(x))h++;for(;0<f-h;)w=yn(w),f--;for(;0<h-f;)u=yn(u),h--;for(;f--;){if(w===u||u!==null&&w===u.alternate)break t;w=yn(w),u=yn(u)}w=null}else w=null;g!==null&&zu(p,m,g,w,!1),v!==null&&C!==null&&zu(p,C,v,w,!0)}}e:{if(m=c?kn(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var E=zh;else if(bu(m))if(Vd)E=Oh;else{E=Mh;var T=Ih}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=Lh);if(E&&(E=E(e,c))){Bd(p,E,n,d);break e}T&&T(e,m,c),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&Rs(m,"number",m.value)}switch(T=c?kn(c):window,e){case"focusin":(bu(T)||T.contentEditable==="true")&&(bn=T,qs=c,Sr=null);break;case"focusout":Sr=qs=bn=null;break;case"mousedown":Zs=!0;break;case"contextmenu":case"mouseup":case"dragend":Zs=!1,Tu(p,n,d);break;case"selectionchange":if(Fh)break;case"keydown":case"keyup":Tu(p,n,d)}var z;if(ca)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Sn?Dd(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Fd&&n.locale!=="ko"&&(Sn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Sn&&(z=jd()):(Nt=d,la="value"in Nt?Nt.value:Nt.textContent,Sn=!0)),T=Wi(c,A),0<T.length&&(A=new yu(A,e,null,n,d),p.push({event:A,listeners:T}),z?A.data=z:(z=Rd(n),z!==null&&(A.data=z)))),(z=Ch?Ah(e,n):Th(e,n))&&(c=Wi(c,"onBeforeInput"),0<c.length&&(d=new yu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=z))}qd(p,t)})}function Dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ir(e,n),o!=null&&r.unshift(Dr(e,o,i)),o=Ir(e,t),o!=null&&r.push(Dr(e,o,i))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=Ir(n,o),a!=null&&s.unshift(Dr(n,a,l))):i||(a=Ir(n,o),a!=null&&s.push(Dr(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Vh=/\r\n?/g,$h=/\u0000|\uFFFD/g;function Iu(e){return(typeof e=="string"?e:""+e).replace(Vh,`
`).replace($h,"")}function mi(e,t,n){if(t=Iu(t),Iu(e)!==t&&n)throw Error(I(425))}function Yi(){}var Js=null,el=null;function tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nl=typeof setTimeout=="function"?setTimeout:void 0,Hh=typeof clearTimeout=="function"?clearTimeout:void 0,Mu=typeof Promise=="function"?Promise:void 0,Gh=typeof queueMicrotask=="function"?queueMicrotask:typeof Mu<"u"?function(e){return Mu.resolve(null).then(e).catch(Uh)}:nl;function Uh(e){setTimeout(function(){throw e})}function os(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Or(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),nt="__reactFiber$"+Jn,Rr="__reactProps$"+Jn,gt="__reactContainer$"+Jn,rl="__reactEvents$"+Jn,Wh="__reactListeners$"+Jn,Yh="__reactHandles$"+Jn;function en(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lu(e);e!==null;){if(n=e[nt])return n;e=Lu(e)}return t}e=n,n=e.parentNode}return null}function Zr(e){return e=e[nt]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function bo(e){return e[Rr]||null}var il=[],Cn=-1;function Yt(e){return{current:e}}function Y(e){0>Cn||(e.current=il[Cn],il[Cn]=null,Cn--)}function G(e,t){Cn++,il[Cn]=e.current,e.current=t}var $t={},ye=Yt($t),Ce=Yt(!1),an=$t;function Hn(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function Xi(){Y(Ce),Y(ye)}function Ou(e,t,n){if(ye.current!==$t)throw Error(I(168));G(ye,t),G(Ce,n)}function Jd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,Im(e)||"Unknown",i));return ee({},n,r)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,an=ye.current,G(ye,e),G(Ce,Ce.current),!0}function _u(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=Jd(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,Y(Ce),Y(ye),G(ye,e)):Y(Ce),G(Ce,n)}var dt=null,Eo=!1,ss=!1;function ef(e){dt===null?dt=[e]:dt.push(e)}function Xh(e){Eo=!0,ef(e)}function Xt(){if(!ss&&dt!==null){ss=!0;var e=0,t=H;try{var n=dt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,Eo=!1}catch(i){throw dt!==null&&(dt=dt.slice(e+1)),Cd(ra,Xt),i}finally{H=t,ss=!1}}return null}var An=[],Tn=0,Ki=null,qi=0,Be=[],Ve=0,un=null,ft=1,pt="";function qt(e,t){An[Tn++]=qi,An[Tn++]=Ki,Ki=e,qi=t}function tf(e,t,n){Be[Ve++]=ft,Be[Ve++]=pt,Be[Ve++]=un,un=e;var r=ft;e=pt;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var o=32-Ke(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ft=1<<32-Ke(t)+i|n<<i|r,pt=o+e}else ft=1<<o|n<<i|r,pt=e}function fa(e){e.return!==null&&(qt(e,1),tf(e,1,0))}function pa(e){for(;e===Ki;)Ki=An[--Tn],An[Tn]=null,qi=An[--Tn],An[Tn]=null;for(;e===un;)un=Be[--Ve],Be[Ve]=null,pt=Be[--Ve],Be[Ve]=null,ft=Be[--Ve],Be[Ve]=null}var Ie=null,ze=null,Q=!1,Qe=null;function nf(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ju(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,ze=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:ft,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,ze=null,!0):!1;default:return!1}}function ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sl(e){if(Q){var t=ze;if(t){var n=t;if(!ju(e,t)){if(ol(e))throw Error(I(418));t=jt(n.nextSibling);var r=Ie;t&&ju(e,t)?nf(r,n):(e.flags=e.flags&-4097|2,Q=!1,Ie=e)}}else{if(ol(e))throw Error(I(418));e.flags=e.flags&-4097|2,Q=!1,Ie=e}}}function Fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function hi(e){if(e!==Ie)return!1;if(!Q)return Fu(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tl(e.type,e.memoizedProps)),t&&(t=ze)){if(ol(e))throw rf(),Error(I(418));for(;t;)nf(e,t),t=jt(t.nextSibling)}if(Fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Ie?jt(e.stateNode.nextSibling):null;return!0}function rf(){for(var e=ze;e;)e=jt(e.nextSibling)}function Gn(){ze=Ie=null,Q=!1}function ma(e){Qe===null?Qe=[e]:Qe.push(e)}var Qh=St.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function gi(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Du(e){var t=e._init;return t(e._payload)}function of(e){function t(u,f){if(e){var h=u.deletions;h===null?(u.deletions=[f],u.flags|=16):h.push(f)}}function n(u,f){if(!e)return null;for(;f!==null;)t(u,f),f=f.sibling;return null}function r(u,f){for(u=new Map;f!==null;)f.key!==null?u.set(f.key,f):u.set(f.index,f),f=f.sibling;return u}function i(u,f){return u=Bt(u,f),u.index=0,u.sibling=null,u}function o(u,f,h){return u.index=h,e?(h=u.alternate,h!==null?(h=h.index,h<f?(u.flags|=2,f):h):(u.flags|=2,f)):(u.flags|=1048576,f)}function s(u){return e&&u.alternate===null&&(u.flags|=2),u}function l(u,f,h,x){return f===null||f.tag!==6?(f=ps(h,u.mode,x),f.return=u,f):(f=i(f,h),f.return=u,f)}function a(u,f,h,x){var E=h.type;return E===xn?d(u,f,h.props.children,x,h.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ct&&Du(E)===f.type)?(x=i(f,h.props),x.ref=lr(u,f,h),x.return=u,x):(x=_i(h.type,h.key,h.props,null,u.mode,x),x.ref=lr(u,f,h),x.return=u,x)}function c(u,f,h,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=ms(h,u.mode,x),f.return=u,f):(f=i(f,h.children||[]),f.return=u,f)}function d(u,f,h,x,E){return f===null||f.tag!==7?(f=on(h,u.mode,x,E),f.return=u,f):(f=i(f,h),f.return=u,f)}function p(u,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ps(""+f,u.mode,h),f.return=u,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case oi:return h=_i(f.type,f.key,f.props,null,u.mode,h),h.ref=lr(u,null,f),h.return=u,h;case wn:return f=ms(f,u.mode,h),f.return=u,f;case Ct:var x=f._init;return p(u,x(f._payload),h)}if(fr(f)||nr(f))return f=on(f,u.mode,h,null),f.return=u,f;gi(u,f)}return null}function m(u,f,h,x){var E=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:l(u,f,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case oi:return h.key===E?a(u,f,h,x):null;case wn:return h.key===E?c(u,f,h,x):null;case Ct:return E=h._init,m(u,f,E(h._payload),x)}if(fr(h)||nr(h))return E!==null?null:d(u,f,h,x,null);gi(u,h)}return null}function g(u,f,h,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(h)||null,l(f,u,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case oi:return u=u.get(x.key===null?h:x.key)||null,a(f,u,x,E);case wn:return u=u.get(x.key===null?h:x.key)||null,c(f,u,x,E);case Ct:var T=x._init;return g(u,f,h,T(x._payload),E)}if(fr(x)||nr(x))return u=u.get(h)||null,d(f,u,x,E,null);gi(f,x)}return null}function v(u,f,h,x){for(var E=null,T=null,z=f,A=f=0,M=null;z!==null&&A<h.length;A++){z.index>A?(M=z,z=null):M=z.sibling;var b=m(u,z,h[A],x);if(b===null){z===null&&(z=M);break}e&&z&&b.alternate===null&&t(u,z),f=o(b,f,A),T===null?E=b:T.sibling=b,T=b,z=M}if(A===h.length)return n(u,z),Q&&qt(u,A),E;if(z===null){for(;A<h.length;A++)z=p(u,h[A],x),z!==null&&(f=o(z,f,A),T===null?E=z:T.sibling=z,T=z);return Q&&qt(u,A),E}for(z=r(u,z);A<h.length;A++)M=g(z,u,A,h[A],x),M!==null&&(e&&M.alternate!==null&&z.delete(M.key===null?A:M.key),f=o(M,f,A),T===null?E=M:T.sibling=M,T=M);return e&&z.forEach(function(S){return t(u,S)}),Q&&qt(u,A),E}function w(u,f,h,x){var E=nr(h);if(typeof E!="function")throw Error(I(150));if(h=E.call(h),h==null)throw Error(I(151));for(var T=E=null,z=f,A=f=0,M=null,b=h.next();z!==null&&!b.done;A++,b=h.next()){z.index>A?(M=z,z=null):M=z.sibling;var S=m(u,z,b.value,x);if(S===null){z===null&&(z=M);break}e&&z&&S.alternate===null&&t(u,z),f=o(S,f,A),T===null?E=S:T.sibling=S,T=S,z=M}if(b.done)return n(u,z),Q&&qt(u,A),E;if(z===null){for(;!b.done;A++,b=h.next())b=p(u,b.value,x),b!==null&&(f=o(b,f,A),T===null?E=b:T.sibling=b,T=b);return Q&&qt(u,A),E}for(z=r(u,z);!b.done;A++,b=h.next())b=g(z,u,A,b.value,x),b!==null&&(e&&b.alternate!==null&&z.delete(b.key===null?A:b.key),f=o(b,f,A),T===null?E=b:T.sibling=b,T=b);return e&&z.forEach(function(k){return t(u,k)}),Q&&qt(u,A),E}function C(u,f,h,x){if(typeof h=="object"&&h!==null&&h.type===xn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case oi:e:{for(var E=h.key,T=f;T!==null;){if(T.key===E){if(E=h.type,E===xn){if(T.tag===7){n(u,T.sibling),f=i(T,h.props.children),f.return=u,u=f;break e}}else if(T.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ct&&Du(E)===T.type){n(u,T.sibling),f=i(T,h.props),f.ref=lr(u,T,h),f.return=u,u=f;break e}n(u,T);break}else t(u,T);T=T.sibling}h.type===xn?(f=on(h.props.children,u.mode,x,h.key),f.return=u,u=f):(x=_i(h.type,h.key,h.props,null,u.mode,x),x.ref=lr(u,f,h),x.return=u,u=x)}return s(u);case wn:e:{for(T=h.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(u,f.sibling),f=i(f,h.children||[]),f.return=u,u=f;break e}else{n(u,f);break}else t(u,f);f=f.sibling}f=ms(h,u.mode,x),f.return=u,u=f}return s(u);case Ct:return T=h._init,C(u,f,T(h._payload),x)}if(fr(h))return v(u,f,h,x);if(nr(h))return w(u,f,h,x);gi(u,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(u,f.sibling),f=i(f,h),f.return=u,u=f):(n(u,f),f=ps(h,u.mode,x),f.return=u,u=f),s(u)):n(u,f)}return C}var Un=of(!0),sf=of(!1),Zi=Yt(null),Ji=null,Pn=null,ha=null;function ga(){ha=Pn=Ji=null}function va(e){var t=Zi.current;Y(Zi),e._currentValue=t}function ll(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fn(e,t){Ji=e,ha=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(ha!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(Ji===null)throw Error(I(308));Pn=e,Ji.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var tn=null;function ya(e){tn===null?tn=[e]:tn.push(e)}function lf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ya(t)):(n.next=i.next,i.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function af(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,vt(e,n)}return i=r.interleaved,i===null?(t.next=t,ya(r)):(t.next=i.next,i.next=t),r.interleaved=t,vt(e,n)}function Ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ia(e,n)}}function Ru(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;At=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,s===null?o=c:s.next=c,s=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=a))}if(o!==null){var p=i.baseState;s=0,d=c=a=null,l=o;do{var m=l.lane,g=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,w=l;switch(m=t,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){p=v.call(g,p,m);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,m=typeof v=="function"?v.call(g,p,m):v,m==null)break e;p=ee({},p,m);break e;case 2:At=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else g={eventTime:g,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=g,a=p):d=d.next=g,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(a=p),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);dn|=s,e.lanes=s,e.memoizedState=p}}function Bu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Jr={},lt=Yt(Jr),Br=Yt(Jr),Vr=Yt(Jr);function nn(e){if(e===Jr)throw Error(I(174));return e}function xa(e,t){switch(G(Vr,t),G(Br,e),G(lt,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vs(t,e)}Y(lt),G(lt,t)}function Wn(){Y(lt),Y(Br),Y(Vr)}function uf(e){nn(Vr.current);var t=nn(lt.current),n=Vs(t,e.type);t!==n&&(G(Br,e),G(lt,n))}function Sa(e){Br.current===e&&(Y(lt),Y(Br))}var Z=Yt(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ls=[];function ba(){for(var e=0;e<ls.length;e++)ls[e]._workInProgressVersionPrimary=null;ls.length=0}var zi=St.ReactCurrentDispatcher,as=St.ReactCurrentBatchConfig,cn=0,J=null,le=null,ce=null,no=!1,br=!1,$r=0,Kh=0;function he(){throw Error(I(321))}function Ea(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function ka(e,t,n,r,i,o){if(cn=o,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zi.current=e===null||e.memoizedState===null?eg:tg,e=n(r,i),br){o=0;do{if(br=!1,$r=0,25<=o)throw Error(I(301));o+=1,ce=le=null,t.updateQueue=null,zi.current=ng,e=n(r,i)}while(br)}if(zi.current=ro,t=le!==null&&le.next!==null,cn=0,ce=le=J=null,no=!1,t)throw Error(I(300));return e}function Ca(){var e=$r!==0;return $r=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?J.memoizedState=ce=e:ce=ce.next=e,ce}function Ue(){if(le===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ce===null?J.memoizedState:ce.next;if(t!==null)ce=t,le=e;else{if(e===null)throw Error(I(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ce===null?J.memoizedState=ce=e:ce=ce.next=e}return ce}function Hr(e,t){return typeof t=="function"?t(e):t}function us(e){var t=Ue(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=le,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,c=o;do{var d=c.lane;if((cn&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=p,s=r):a=a.next=p,J.lanes|=d,dn|=d}c=c.next}while(c!==null&&c!==o);a===null?s=r:a.next=l,Ze(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,J.lanes|=o,dn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cs(e){var t=Ue(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ze(o,t.memoizedState)||(ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function cf(){}function df(e,t){var n=J,r=Ue(),i=t(),o=!Ze(r.memoizedState,i);if(o&&(r.memoizedState=i,ke=!0),r=r.queue,Aa(mf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,Gr(9,pf.bind(null,n,r,i,t),void 0,null),de===null)throw Error(I(349));cn&30||ff(n,t,i)}return i}function ff(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pf(e,t,n,r){t.value=n,t.getSnapshot=r,hf(t)&&gf(e)}function mf(e,t,n){return n(function(){hf(t)&&gf(e)})}function hf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function gf(e){var t=vt(e,1);t!==null&&qe(t,e,1,-1)}function Vu(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},t.queue=e,e=e.dispatch=Jh.bind(null,J,e),[t.memoizedState,e]}function Gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vf(){return Ue().memoizedState}function Ii(e,t,n,r){var i=et();J.flags|=e,i.memoizedState=Gr(1|t,n,void 0,r===void 0?null:r)}function ko(e,t,n,r){var i=Ue();r=r===void 0?null:r;var o=void 0;if(le!==null){var s=le.memoizedState;if(o=s.destroy,r!==null&&Ea(r,s.deps)){i.memoizedState=Gr(t,n,o,r);return}}J.flags|=e,i.memoizedState=Gr(1|t,n,o,r)}function $u(e,t){return Ii(8390656,8,e,t)}function Aa(e,t){return ko(2048,8,e,t)}function yf(e,t){return ko(4,2,e,t)}function wf(e,t){return ko(4,4,e,t)}function xf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sf(e,t,n){return n=n!=null?n.concat([e]):null,ko(4,4,xf.bind(null,t,e),n)}function Ta(){}function bf(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ea(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ef(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ea(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kf(e,t,n){return cn&21?(Ze(n,t)||(n=Pd(),J.lanes|=n,dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function qh(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=as.transition;as.transition={};try{e(!1),t()}finally{H=n,as.transition=r}}function Cf(){return Ue().memoizedState}function Zh(e,t,n){var r=Rt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Af(e))Tf(t,n);else if(n=lf(e,t,n,r),n!==null){var i=xe();qe(n,e,r,i),Pf(n,t,r)}}function Jh(e,t,n){var r=Rt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Af(e))Tf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Ze(l,s)){var a=t.interleaved;a===null?(i.next=i,ya(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=lf(e,t,i,r),n!==null&&(i=xe(),qe(n,e,r,i),Pf(n,t,r))}}function Af(e){var t=e.alternate;return e===J||t!==null&&t===J}function Tf(e,t){br=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ia(e,n)}}var ro={readContext:Ge,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},eg={readContext:Ge,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:$u,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ii(4194308,4,xf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ii(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ii(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zh.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:Vu,useDebugValue:Ta,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=Vu(!1),t=e[0];return e=qh.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=et();if(Q){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),de===null)throw Error(I(349));cn&30||ff(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,$u(mf.bind(null,r,o,e),[e]),r.flags|=2048,Gr(9,pf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=et(),t=de.identifierPrefix;if(Q){var n=pt,r=ft;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tg={readContext:Ge,useCallback:bf,useContext:Ge,useEffect:Aa,useImperativeHandle:Sf,useInsertionEffect:yf,useLayoutEffect:wf,useMemo:Ef,useReducer:us,useRef:vf,useState:function(){return us(Hr)},useDebugValue:Ta,useDeferredValue:function(e){var t=Ue();return kf(t,le.memoizedState,e)},useTransition:function(){var e=us(Hr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:cf,useSyncExternalStore:df,useId:Cf,unstable_isNewReconciler:!1},ng={readContext:Ge,useCallback:bf,useContext:Ge,useEffect:Aa,useImperativeHandle:Sf,useInsertionEffect:yf,useLayoutEffect:wf,useMemo:Ef,useReducer:cs,useRef:vf,useState:function(){return cs(Hr)},useDebugValue:Ta,useDeferredValue:function(e){var t=Ue();return le===null?t.memoizedState=e:kf(t,le.memoizedState,e)},useTransition:function(){var e=cs(Hr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:cf,useSyncExternalStore:df,useId:Cf,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function al(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Co={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),i=Rt(e),o=mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(qe(t,e,i,r),Ni(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),i=Rt(e),o=mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(qe(t,e,i,r),Ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=Rt(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ft(e,i,r),t!==null&&(qe(t,e,r,n),Ni(t,e,r))}};function Hu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,o):!0}function Nf(e,t,n){var r=!1,i=$t,o=t.contextType;return typeof o=="object"&&o!==null?o=Ge(o):(i=Ae(t)?an:ye.current,r=t.contextTypes,o=(r=r!=null)?Hn(e,i):$t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Gu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function ul(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},wa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ge(o):(o=Ae(t)?an:ye.current,i.context=Hn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(al(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Co.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yn(e,t){try{var n="",r=t;do n+=zm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ds(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rg=typeof WeakMap=="function"?WeakMap:Map;function zf(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,xl=r),cl(e,t)},n}function If(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){cl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){cl(e,t),typeof r!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Uu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=vg.bind(null,e,t,n),t.then(e,e))}function Wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var ig=St.ReactCurrentOwner,ke=!1;function we(e,t,n,r){t.child=e===null?sf(t,null,n,r):Un(t,e.child,n,r)}function Xu(e,t,n,r,i){n=n.render;var o=t.ref;return Fn(t,i),r=ka(e,t,n,r,o,i),n=Ca(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(Q&&n&&fa(t),t.flags|=1,we(e,t,r,i),t.child)}function Qu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!_a(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Mf(e,t,o,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:jr,n(s,r)&&e.ref===t.ref)return yt(e,t,i)}return t.flags|=1,e=Bt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Mf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(jr(o,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,yt(e,t,i)}return dl(e,t,n,r,i)}function Lf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(zn,Pe),Pe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(zn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,G(zn,Pe),Pe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,G(zn,Pe),Pe|=r;return we(e,t,i,n),t.child}function Of(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function dl(e,t,n,r,i){var o=Ae(n)?an:ye.current;return o=Hn(t,o),Fn(t,i),n=ka(e,t,n,r,o,i),r=Ca(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(Q&&r&&fa(t),t.flags|=1,we(e,t,n,i),t.child)}function Ku(e,t,n,r,i){if(Ae(n)){var o=!0;Qi(t)}else o=!1;if(Fn(t,i),t.stateNode===null)Mi(e,t),Nf(t,n,r),ul(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ge(c):(c=Ae(n)?an:ye.current,c=Hn(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==c)&&Gu(t,s,r,c),At=!1;var m=t.memoizedState;s.state=m,eo(t,r,s,i),a=t.memoizedState,l!==r||m!==a||Ce.current||At?(typeof d=="function"&&(al(t,n,d,r),a=t.memoizedState),(l=At||Hu(t,n,l,r,m,a,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,af(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ye(t.type,l),s.props=c,p=t.pendingProps,m=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ge(a):(a=Ae(n)?an:ye.current,a=Hn(t,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||m!==a)&&Gu(t,s,r,a),At=!1,m=t.memoizedState,s.state=m,eo(t,r,s,i);var v=t.memoizedState;l!==p||m!==v||Ce.current||At?(typeof g=="function"&&(al(t,n,g,r),v=t.memoizedState),(c=At||Hu(t,n,c,r,m,v,a)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=a,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return fl(e,t,n,r,o,i)}function fl(e,t,n,r,i,o){Of(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&_u(t,n,!1),yt(e,t,o);r=t.stateNode,ig.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Un(t,e.child,null,o),t.child=Un(t,null,l,o)):we(e,t,l,o),t.memoizedState=r.state,i&&_u(t,n,!0),t.child}function _f(e){var t=e.stateNode;t.pendingContext?Ou(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ou(e,t.context,!1),xa(e,t.containerInfo)}function qu(e,t,n,r,i){return Gn(),ma(i),t.flags|=256,we(e,t,n,r),t.child}var pl={dehydrated:null,treeContext:null,retryLane:0};function ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function jf(e,t,n){var r=t.pendingProps,i=Z.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(Z,i&1),e===null)return sl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Po(s,r,0,null),e=on(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ml(n),t.memoizedState=pl,e):Pa(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return og(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Bt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Bt(l,o):(o=on(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ml(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=pl,r}return o=e.child,e=o.sibling,r=Bt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pa(e,t){return t=Po({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vi(e,t,n,r){return r!==null&&ma(r),Un(t,e.child,null,n),e=Pa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function og(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ds(Error(I(422))),vi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Po({mode:"visible",children:r.children},i,0,null),o=on(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Un(t,e.child,null,s),t.child.memoizedState=ml(s),t.memoizedState=pl,o);if(!(t.mode&1))return vi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(I(419)),r=ds(o,r,void 0),vi(e,t,s,r)}if(l=(s&e.childLanes)!==0,ke||l){if(r=de,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,vt(e,i),qe(r,e,i,-1))}return Oa(),r=ds(Error(I(421))),vi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=yg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=jt(i.nextSibling),Ie=t,Q=!0,Qe=null,e!==null&&(Be[Ve++]=ft,Be[Ve++]=pt,Be[Ve++]=un,ft=e.id,pt=e.overflow,un=t),t=Pa(t,r.children),t.flags|=4096,t)}function Zu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ll(e.return,t,n)}function fs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ff(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(we(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zu(e,n,t);else if(e.tag===19)Zu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(Z,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fs(t,!0,n,null,o);break;case"together":fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function sg(e,t,n){switch(t.tag){case 3:_f(t),Gn();break;case 5:uf(t);break;case 1:Ae(t.type)&&Qi(t);break;case 4:xa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;G(Zi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?jf(e,t,n):(G(Z,Z.current&1),e=yt(e,t,n),e!==null?e.sibling:null);G(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ff(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Lf(e,t,n)}return yt(e,t,n)}var Df,hl,Rf,Bf;Df=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hl=function(){};Rf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,nn(lt.current);var o=null;switch(n){case"input":i=Fs(e,i),r=Fs(e,r),o=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),o=[];break;case"textarea":i=Bs(e,i),r=Bs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yi)}$s(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Nr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Nr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&U("scroll",e),o||l===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Bf=function(e,t,n,r){n!==r&&(t.flags|=4)};function ar(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lg(e,t,n){var r=t.pendingProps;switch(pa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Ae(t.type)&&Xi(),ge(t),null;case 3:return r=t.stateNode,Wn(),Y(Ce),Y(ye),ba(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(El(Qe),Qe=null))),hl(e,t),ge(t),null;case 5:Sa(t);var i=nn(Vr.current);if(n=t.type,e!==null&&t.stateNode!=null)Rf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return ge(t),null}if(e=nn(lt.current),hi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[nt]=t,r[Rr]=o,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<mr.length;i++)U(mr[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":lu(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":uu(r,o),U("invalid",r)}$s(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,l,e),i=["children",""+l]):Nr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&U("scroll",r)}switch(n){case"input":si(r),au(r,o,!0);break;case"textarea":si(r),cu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Yi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[nt]=t,e[Rr]=r,Df(e,t,!1,!1),t.stateNode=e;e:{switch(s=Hs(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<mr.length;i++)U(mr[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":lu(e,r),i=Fs(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),U("invalid",e);break;case"textarea":uu(e,r),i=Bs(e,r),U("invalid",e);break;default:i=r}$s(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?gd(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&md(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&zr(e,a):typeof a=="number"&&zr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Nr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&U("scroll",e):a!=null&&Zl(e,o,a,s))}switch(n){case"input":si(e),au(e,r,!1);break;case"textarea":si(e),cu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)Bf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=nn(Vr.current),nn(lt.current),hi(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(o=r.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return ge(t),null;case 13:if(Y(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&ze!==null&&t.mode&1&&!(t.flags&128))rf(),Gn(),t.flags|=98560,o=!1;else if(o=hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[nt]=t}else Gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),o=!1}else Qe!==null&&(El(Qe),Qe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ae===0&&(ae=3):Oa())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return Wn(),hl(e,t),e===null&&Fr(t.stateNode.containerInfo),ge(t),null;case 10:return va(t.type._context),ge(t),null;case 17:return Ae(t.type)&&Xi(),ge(t),null;case 19:if(Y(Z),o=t.memoizedState,o===null)return ge(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ar(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=to(e),s!==null){for(t.flags|=128,ar(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(Z,Z.current&1|2),t.child}e=e.sibling}o.tail!==null&&re()>Xn&&(t.flags|=128,r=!0,ar(o,!1),t.lanes=4194304)}else{if(!r)if(e=to(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ar(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Q)return ge(t),null}else 2*re()-o.renderingStartTime>Xn&&n!==1073741824&&(t.flags|=128,r=!0,ar(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,n=Z.current,G(Z,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return La(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function ag(e,t){switch(pa(t),t.tag){case 1:return Ae(t.type)&&Xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),Y(Ce),Y(ye),ba(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Sa(t),null;case 13:if(Y(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(Z),null;case 4:return Wn(),null;case 10:return va(t.type._context),null;case 22:case 23:return La(),null;case 24:return null;default:return null}}var yi=!1,ve=!1,ug=typeof WeakSet=="function"?WeakSet:Set,O=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function gl(e,t,n){try{n()}catch(r){te(e,t,r)}}var Ju=!1;function cg(e,t){if(Js=Gi,e=Gd(),da(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,c=0,d=0,p=e,m=null;t:for(;;){for(var g;p!==n||i!==0&&p.nodeType!==3||(l=s+i),p!==o||r!==0&&p.nodeType!==3||(a=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)m=p,p=g;for(;;){if(p===e)break t;if(m===n&&++c===i&&(l=s),m===o&&++d===r&&(a=s),(g=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(el={focusedElem:e,selectionRange:n},Gi=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,C=v.memoizedState,u=t.stateNode,f=u.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ye(t.type,w),C);u.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(x){te(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return v=Ju,Ju=!1,v}function Er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&gl(t,n,o)}i=i.next}while(i!==r)}}function Ao(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vf(e){var t=e.alternate;t!==null&&(e.alternate=null,Vf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[Rr],delete t[rl],delete t[Wh],delete t[Yh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $f(e){return e.tag===5||e.tag===3||e.tag===4}function ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yi));else if(r!==4&&(e=e.child,e!==null))for(yl(e,t,n),e=e.sibling;e!==null;)yl(e,t,n),e=e.sibling}function wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wl(e,t,n),e=e.sibling;e!==null;)wl(e,t,n),e=e.sibling}var fe=null,Xe=!1;function Et(e,t,n){for(n=n.child;n!==null;)Hf(e,t,n),n=n.sibling}function Hf(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(yo,n)}catch{}switch(n.tag){case 5:ve||Nn(n,t);case 6:var r=fe,i=Xe;fe=null,Et(e,t,n),fe=r,Xe=i,fe!==null&&(Xe?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Xe?(e=fe,n=n.stateNode,e.nodeType===8?os(e.parentNode,n):e.nodeType===1&&os(e,n),Or(e)):os(fe,n.stateNode));break;case 4:r=fe,i=Xe,fe=n.stateNode.containerInfo,Xe=!0,Et(e,t,n),fe=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&gl(n,t,s),i=i.next}while(i!==r)}Et(e,t,n);break;case 1:if(!ve&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,t,l)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,Et(e,t,n),ve=r):Et(e,t,n);break;default:Et(e,t,n)}}function tc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ug),t.forEach(function(r){var i=wg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:fe=l.stateNode,Xe=!1;break e;case 3:fe=l.stateNode.containerInfo,Xe=!0;break e;case 4:fe=l.stateNode.containerInfo,Xe=!0;break e}l=l.return}if(fe===null)throw Error(I(160));Hf(o,s,i),fe=null,Xe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){te(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gf(t,e),t=t.sibling}function Gf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),Je(e),r&4){try{Er(3,e,e.return),Ao(3,e)}catch(w){te(e,e.return,w)}try{Er(5,e,e.return)}catch(w){te(e,e.return,w)}}break;case 1:We(t,e),Je(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(We(t,e),Je(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var i=e.stateNode;try{zr(i,"")}catch(w){te(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&dd(i,o),Hs(l,s);var c=Hs(l,o);for(s=0;s<a.length;s+=2){var d=a[s],p=a[s+1];d==="style"?gd(i,p):d==="dangerouslySetInnerHTML"?md(i,p):d==="children"?zr(i,p):Zl(i,d,p,c)}switch(l){case"input":Ds(i,o);break;case"textarea":fd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Ln(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?Ln(i,!!o.multiple,o.defaultValue,!0):Ln(i,!!o.multiple,o.multiple?[]:"",!1))}i[Rr]=o}catch(w){te(e,e.return,w)}}break;case 6:if(We(t,e),Je(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){te(e,e.return,w)}}break;case 3:if(We(t,e),Je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(w){te(e,e.return,w)}break;case 4:We(t,e),Je(e);break;case 13:We(t,e),Je(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ia=re())),r&4&&tc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(c=ve)||d,We(t,e),ve=c):We(t,e),Je(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(O=e,d=e.child;d!==null;){for(p=O=d;O!==null;){switch(m=O,g=m.child,m.tag){case 0:case 11:case 14:case 15:Er(4,m,m.return);break;case 1:Nn(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){te(r,n,w)}}break;case 5:Nn(m,m.return);break;case 22:if(m.memoizedState!==null){rc(p);continue}}g!==null?(g.return=m,O=g):rc(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,a=p.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=hd("display",s))}catch(w){te(e,e.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){te(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:We(t,e),Je(e),r&4&&tc(e);break;case 21:break;default:We(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($f(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zr(i,""),r.flags&=-33);var o=ec(e);wl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=ec(e);yl(e,l,s);break;default:throw Error(I(161))}}catch(a){te(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dg(e,t,n){O=e,Uf(e)}function Uf(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||yi;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ve;l=yi;var c=ve;if(yi=s,(ve=a)&&!c)for(O=i;O!==null;)s=O,a=s.child,s.tag===22&&s.memoizedState!==null?ic(i):a!==null?(a.return=s,O=a):ic(i);for(;o!==null;)O=o,Uf(o),o=o.sibling;O=i,yi=l,ve=c}nc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):nc(e)}}function nc(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||Ao(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Bu(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bu(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Or(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}ve||t.flags&512&&vl(t)}catch(m){te(t,t.return,m)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function rc(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function ic(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ao(4,t)}catch(a){te(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){te(t,i,a)}}var o=t.return;try{vl(t)}catch(a){te(t,o,a)}break;case 5:var s=t.return;try{vl(t)}catch(a){te(t,s,a)}}}catch(a){te(t,t.return,a)}if(t===e){O=null;break}var l=t.sibling;if(l!==null){l.return=t.return,O=l;break}O=t.return}}var fg=Math.ceil,io=St.ReactCurrentDispatcher,Na=St.ReactCurrentOwner,He=St.ReactCurrentBatchConfig,V=0,de=null,oe=null,pe=0,Pe=0,zn=Yt(0),ae=0,Ur=null,dn=0,To=0,za=0,kr=null,Ee=null,Ia=0,Xn=1/0,ct=null,oo=!1,xl=null,Dt=null,wi=!1,zt=null,so=0,Cr=0,Sl=null,Li=-1,Oi=0;function xe(){return V&6?re():Li!==-1?Li:Li=re()}function Rt(e){return e.mode&1?V&2&&pe!==0?pe&-pe:Qh.transition!==null?(Oi===0&&(Oi=Pd()),Oi):(e=H,e!==0||(e=window.event,e=e===void 0?16:_d(e.type)),e):1}function qe(e,t,n,r){if(50<Cr)throw Cr=0,Sl=null,Error(I(185));Kr(e,n,r),(!(V&2)||e!==de)&&(e===de&&(!(V&2)&&(To|=n),ae===4&&Pt(e,pe)),Te(e,r),n===1&&V===0&&!(t.mode&1)&&(Xn=re()+500,Eo&&Xt()))}function Te(e,t){var n=e.callbackNode;Qm(e,t);var r=Hi(e,e===de?pe:0);if(r===0)n!==null&&pu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pu(n),t===1)e.tag===0?Xh(oc.bind(null,e)):ef(oc.bind(null,e)),Gh(function(){!(V&6)&&Xt()}),n=null;else{switch(Nd(r)){case 1:n=ra;break;case 4:n=Ad;break;case 16:n=$i;break;case 536870912:n=Td;break;default:n=$i}n=Jf(n,Wf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wf(e,t){if(Li=-1,Oi=0,V&6)throw Error(I(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=Hi(e,e===de?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=lo(e,r);else{t=r;var i=V;V|=2;var o=Xf();(de!==e||pe!==t)&&(ct=null,Xn=re()+500,rn(e,t));do try{hg();break}catch(l){Yf(e,l)}while(!0);ga(),io.current=o,V=i,oe!==null?t=0:(de=null,pe=0,t=ae)}if(t!==0){if(t===2&&(i=Xs(e),i!==0&&(r=i,t=bl(e,i))),t===1)throw n=Ur,rn(e,0),Pt(e,r),Te(e,re()),n;if(t===6)Pt(e,r);else{if(i=e.current.alternate,!(r&30)&&!pg(i)&&(t=lo(e,r),t===2&&(o=Xs(e),o!==0&&(r=o,t=bl(e,o))),t===1))throw n=Ur,rn(e,0),Pt(e,r),Te(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Zt(e,Ee,ct);break;case 3:if(Pt(e,r),(r&130023424)===r&&(t=Ia+500-re(),10<t)){if(Hi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=nl(Zt.bind(null,e,Ee,ct),t);break}Zt(e,Ee,ct);break;case 4:if(Pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ke(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fg(r/1960))-r,10<r){e.timeoutHandle=nl(Zt.bind(null,e,Ee,ct),r);break}Zt(e,Ee,ct);break;case 5:Zt(e,Ee,ct);break;default:throw Error(I(329))}}}return Te(e,re()),e.callbackNode===n?Wf.bind(null,e):null}function bl(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=lo(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&El(t)),e}function El(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function pg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ze(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t){for(t&=~za,t&=~To,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function oc(e){if(V&6)throw Error(I(327));Dn();var t=Hi(e,0);if(!(t&1))return Te(e,re()),null;var n=lo(e,t);if(e.tag!==0&&n===2){var r=Xs(e);r!==0&&(t=r,n=bl(e,r))}if(n===1)throw n=Ur,rn(e,0),Pt(e,t),Te(e,re()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zt(e,Ee,ct),Te(e,re()),null}function Ma(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Xn=re()+500,Eo&&Xt())}}function fn(e){zt!==null&&zt.tag===0&&!(V&6)&&Dn();var t=V;V|=1;var n=He.transition,r=H;try{if(He.transition=null,H=1,e)return e()}finally{H=r,He.transition=n,V=t,!(V&6)&&Xt()}}function La(){Pe=zn.current,Y(zn)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hh(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(pa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xi();break;case 3:Wn(),Y(Ce),Y(ye),ba();break;case 5:Sa(r);break;case 4:Wn();break;case 13:Y(Z);break;case 19:Y(Z);break;case 10:va(r.type._context);break;case 22:case 23:La()}n=n.return}if(de=e,oe=e=Bt(e.current,null),pe=Pe=t,ae=0,Ur=null,za=To=dn=0,Ee=kr=null,tn!==null){for(t=0;t<tn.length;t++)if(n=tn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}tn=null}return e}function Yf(e,t){do{var n=oe;try{if(ga(),zi.current=ro,no){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(cn=0,ce=le=J=null,br=!1,$r=0,Na.current=null,n===null||n.return===null){ae=1,Ur=t,oe=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=pe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Wu(s);if(g!==null){g.flags&=-257,Yu(g,s,l,o,t),g.mode&1&&Uu(o,c,t),t=g,a=c;var v=t.updateQueue;if(v===null){var w=new Set;w.add(a),t.updateQueue=w}else v.add(a);break e}else{if(!(t&1)){Uu(o,c,t),Oa();break e}a=Error(I(426))}}else if(Q&&l.mode&1){var C=Wu(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Yu(C,s,l,o,t),ma(Yn(a,l));break e}}o=a=Yn(a,l),ae!==4&&(ae=2),kr===null?kr=[o]:kr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var u=zf(o,a,t);Ru(o,u);break e;case 1:l=a;var f=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Dt===null||!Dt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=If(o,l,t);Ru(o,x);break e}}o=o.return}while(o!==null)}Kf(n)}catch(E){t=E,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Xf(){var e=io.current;return io.current=ro,e===null?ro:e}function Oa(){(ae===0||ae===3||ae===2)&&(ae=4),de===null||!(dn&268435455)&&!(To&268435455)||Pt(de,pe)}function lo(e,t){var n=V;V|=2;var r=Xf();(de!==e||pe!==t)&&(ct=null,rn(e,t));do try{mg();break}catch(i){Yf(e,i)}while(!0);if(ga(),V=n,io.current=r,oe!==null)throw Error(I(261));return de=null,pe=0,ae}function mg(){for(;oe!==null;)Qf(oe)}function hg(){for(;oe!==null&&!Bm();)Qf(oe)}function Qf(e){var t=Zf(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?Kf(e):oe=t,Na.current=null}function Kf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ag(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,oe=null;return}}else if(n=lg(n,t,Pe),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ae===0&&(ae=5)}function Zt(e,t,n){var r=H,i=He.transition;try{He.transition=null,H=1,gg(e,t,n,r)}finally{He.transition=i,H=r}return null}function gg(e,t,n,r){do Dn();while(zt!==null);if(V&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Km(e,o),e===de&&(oe=de=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wi||(wi=!0,Jf($i,function(){return Dn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=He.transition,He.transition=null;var s=H;H=1;var l=V;V|=4,Na.current=null,cg(e,n),Gf(n,e),jh(el),Gi=!!Js,el=Js=null,e.current=n,dg(n),Vm(),V=l,H=s,He.transition=o}else e.current=n;if(wi&&(wi=!1,zt=e,so=i),o=e.pendingLanes,o===0&&(Dt=null),Gm(n.stateNode),Te(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=xl,xl=null,e;return so&1&&e.tag!==0&&Dn(),o=e.pendingLanes,o&1?e===Sl?Cr++:(Cr=0,Sl=e):Cr=0,Xt(),null}function Dn(){if(zt!==null){var e=Nd(so),t=He.transition,n=H;try{if(He.transition=null,H=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,so=0,V&6)throw Error(I(331));var i=V;for(V|=4,O=e.current;O!==null;){var o=O,s=o.child;if(O.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(O=c;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:Er(8,d,o)}var p=d.child;if(p!==null)p.return=d,O=p;else for(;O!==null;){d=O;var m=d.sibling,g=d.return;if(Vf(d),d===c){O=null;break}if(m!==null){m.return=g,O=m;break}O=g}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}O=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,O=s;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Er(9,o,o.return)}var u=o.sibling;if(u!==null){u.return=o.return,O=u;break e}O=o.return}}var f=e.current;for(O=f;O!==null;){s=O;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,O=h;else e:for(s=f;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ao(9,l)}}catch(E){te(l,l.return,E)}if(l===s){O=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,O=x;break e}O=l.return}}if(V=i,Xt(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(yo,e)}catch{}r=!0}return r}finally{H=n,He.transition=t}}return!1}function sc(e,t,n){t=Yn(n,t),t=zf(e,t,1),e=Ft(e,t,1),t=xe(),e!==null&&(Kr(e,1,t),Te(e,t))}function te(e,t,n){if(e.tag===3)sc(e,e,n);else for(;t!==null;){if(t.tag===3){sc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dt===null||!Dt.has(r))){e=Yn(n,e),e=If(t,e,1),t=Ft(t,e,1),e=xe(),t!==null&&(Kr(t,1,e),Te(t,e));break}}t=t.return}}function vg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(pe&n)===n&&(ae===4||ae===3&&(pe&130023424)===pe&&500>re()-Ia?rn(e,0):za|=n),Te(e,t)}function qf(e,t){t===0&&(e.mode&1?(t=ui,ui<<=1,!(ui&130023424)&&(ui=4194304)):t=1);var n=xe();e=vt(e,t),e!==null&&(Kr(e,t,n),Te(e,n))}function yg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qf(e,n)}function wg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),qf(e,n)}var Zf;Zf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,sg(e,t,n);ke=!!(e.flags&131072)}else ke=!1,Q&&t.flags&1048576&&tf(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mi(e,t),e=t.pendingProps;var i=Hn(t,ye.current);Fn(t,n),i=ka(null,t,r,e,i,n);var o=Ca();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,Qi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wa(t),i.updater=Co,t.stateNode=i,i._reactInternals=t,ul(t,r,e,n),t=fl(null,t,r,!0,o,n)):(t.tag=0,Q&&o&&fa(t),we(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Sg(r),e=Ye(r,e),i){case 0:t=dl(null,t,r,e,n);break e;case 1:t=Ku(null,t,r,e,n);break e;case 11:t=Xu(null,t,r,e,n);break e;case 14:t=Qu(null,t,r,Ye(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),dl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Ku(e,t,r,i,n);case 3:e:{if(_f(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,i=o.element,af(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Yn(Error(I(423)),t),t=qu(e,t,r,n,i);break e}else if(r!==i){i=Yn(Error(I(424)),t),t=qu(e,t,r,n,i);break e}else for(ze=jt(t.stateNode.containerInfo.firstChild),Ie=t,Q=!0,Qe=null,n=sf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gn(),r===i){t=yt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return uf(t),e===null&&sl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,tl(r,i)?s=null:o!==null&&tl(r,o)&&(t.flags|=32),Of(e,t),we(e,t,s,n),t.child;case 6:return e===null&&sl(t),null;case 13:return jf(e,t,n);case 4:return xa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Un(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Xu(e,t,r,i,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,G(Zi,r._currentValue),r._currentValue=s,o!==null)if(Ze(o.value,s)){if(o.children===i.children&&!Ce.current){t=yt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=mt(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ll(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ll(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}we(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fn(t,n),i=Ge(i),r=r(i),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),Qu(e,t,r,i,n);case 15:return Mf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Mi(e,t),t.tag=1,Ae(r)?(e=!0,Qi(t)):e=!1,Fn(t,n),Nf(t,r,i),ul(t,r,i,n),fl(null,t,r,!0,e,n);case 19:return Ff(e,t,n);case 22:return Lf(e,t,n)}throw Error(I(156,t.tag))};function Jf(e,t){return Cd(e,t)}function xg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new xg(e,t,n,r)}function _a(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sg(e){if(typeof e=="function")return _a(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ea)return 11;if(e===ta)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _i(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")_a(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case xn:return on(n.children,i,o,t);case Jl:s=8,i|=8;break;case Ls:return e=$e(12,n,t,i|2),e.elementType=Ls,e.lanes=o,e;case Os:return e=$e(13,n,t,i),e.elementType=Os,e.lanes=o,e;case _s:return e=$e(19,n,t,i),e.elementType=_s,e.lanes=o,e;case ad:return Po(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sd:s=10;break e;case ld:s=9;break e;case ea:s=11;break e;case ta:s=14;break e;case Ct:s=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=$e(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function on(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function Po(e,t,n,r){return e=$e(22,e,r,t),e.elementType=ad,e.lanes=n,e.stateNode={isHidden:!1},e}function ps(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function ms(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xo(0),this.expirationTimes=Xo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ja(e,t,n,r,i,o,s,l,a){return e=new bg(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=$e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wa(o),e}function Eg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ep(e){if(!e)return $t;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Jd(e,n,t)}return t}function tp(e,t,n,r,i,o,s,l,a){return e=ja(n,r,!0,e,i,o,s,l,a),e.context=ep(null),n=e.current,r=xe(),i=Rt(n),o=mt(r,i),o.callback=t??null,Ft(n,o,i),e.current.lanes=i,Kr(e,i,r),Te(e,r),e}function No(e,t,n,r){var i=t.current,o=xe(),s=Rt(i);return n=ep(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(i,t,s),e!==null&&(qe(e,i,s,o),Ni(e,i,s)),s}function ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fa(e,t){lc(e,t),(e=e.alternate)&&lc(e,t)}function kg(){return null}var np=typeof reportError=="function"?reportError:function(e){console.error(e)};function Da(e){this._internalRoot=e}zo.prototype.render=Da.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));No(e,t,null,null)};zo.prototype.unmount=Da.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){No(null,e,null,null)}),t[gt]=null}};function zo(e){this._internalRoot=e}zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Md();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tt.length&&t!==0&&t<Tt[n].priority;n++);Tt.splice(n,0,e),n===0&&Od(e)}};function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ac(){}function Cg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=ao(s);o.call(c)}}var s=tp(t,r,e,0,null,!1,!1,"",ac);return e._reactRootContainer=s,e[gt]=s.current,Fr(e.nodeType===8?e.parentNode:e),fn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=ao(a);l.call(c)}}var a=ja(e,0,!1,null,null,!1,!1,"",ac);return e._reactRootContainer=a,e[gt]=a.current,Fr(e.nodeType===8?e.parentNode:e),fn(function(){No(t,a,n,r)}),a}function Mo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=ao(s);l.call(a)}}No(t,s,e,i)}else s=Cg(n,t,e,i,r);return ao(s)}zd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pr(t.pendingLanes);n!==0&&(ia(t,n|1),Te(t,re()),!(V&6)&&(Xn=re()+500,Xt()))}break;case 13:fn(function(){var r=vt(e,1);if(r!==null){var i=xe();qe(r,e,1,i)}}),Fa(e,1)}};oa=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=xe();qe(t,e,134217728,n)}Fa(e,134217728)}};Id=function(e){if(e.tag===13){var t=Rt(e),n=vt(e,t);if(n!==null){var r=xe();qe(n,e,t,r)}Fa(e,t)}};Md=function(){return H};Ld=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Us=function(e,t,n){switch(t){case"input":if(Ds(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bo(r);if(!i)throw Error(I(90));cd(r),Ds(r,i)}}}break;case"textarea":fd(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};wd=Ma;xd=fn;var Ag={usingClientEntryPoint:!1,Events:[Zr,kn,bo,vd,yd,Ma]},ur={findFiberByHostInstance:en,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tg={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ed(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||kg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xi.isDisabled&&xi.supportsFiber)try{yo=xi.inject(Tg),st=xi}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ag;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ra(t))throw Error(I(200));return Eg(e,t,null,n)};_e.createRoot=function(e,t){if(!Ra(e))throw Error(I(299));var n=!1,r="",i=np;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ja(e,1,!1,null,null,n,!1,r,i),e[gt]=t.current,Fr(e.nodeType===8?e.parentNode:e),new Da(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Ed(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return fn(e)};_e.hydrate=function(e,t,n){if(!Io(t))throw Error(I(200));return Mo(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!Ra(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=np;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=tp(t,null,e,1,n??null,i,!1,o,s),e[gt]=t.current,Fr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new zo(t)};_e.render=function(e,t,n){if(!Io(t))throw Error(I(200));return Mo(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!Io(e))throw Error(I(40));return e._reactRootContainer?(fn(function(){Mo(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};_e.unstable_batchedUpdates=Ma;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Io(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Mo(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function rp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rp)}catch(e){console.error(e)}}rp(),nd.exports=_e;var Pg=nd.exports,uc=Pg;Vn.createRoot=uc.createRoot,Vn.hydrateRoot=uc.hydrateRoot;const Lo={prefix:"fas",iconName:"circle-chevron-right",icon:[512,512,["chevron-circle-right"],"f138","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"]},Ng={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]},Oo=Ng,Ba={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},zg={prefix:"fas",iconName:"volume-xmark",icon:[576,512,["volume-mute","volume-times"],"f6a9","M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},_o=zg,Ig={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},jo=Ig,Fo={prefix:"fas",iconName:"circle-chevron-left",icon:[512,512,["chevron-circle-left"],"f137","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"]},cc=()=>{};let Va={},ip={},op=null,sp={mark:cc,measure:cc};try{typeof window<"u"&&(Va=window),typeof document<"u"&&(ip=document),typeof MutationObserver<"u"&&(op=MutationObserver),typeof performance<"u"&&(sp=performance)}catch{}const{userAgent:dc=""}=Va.navigator||{},Ht=Va,X=ip,fc=op,Si=sp;Ht.document;const bt=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",lp=~dc.indexOf("MSIE")||~dc.indexOf("Trident/");var K="classic",ap="duotone",Me="sharp",Le="sharp-duotone",Mg=[K,ap,Me,Le],Lg={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},pc={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Og=["kit"],_g=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,jg=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Fg={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Dg={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Rg={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Bg={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Vg={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},$g={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},up={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Hg=["solid","regular","light","thin","duotone","brands"],cp=[1,2,3,4,5,6,7,8,9,10],Gg=cp.concat([11,12,13,14,15,16,17,18,19,20]),hr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ug=[...Object.keys(Bg),...Hg,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",hr.GROUP,hr.SWAP_OPACITY,hr.PRIMARY,hr.SECONDARY].concat(cp.map(e=>"".concat(e,"x"))).concat(Gg.map(e=>"w-".concat(e))),Wg={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Yg={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Xg={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},mc={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const wt="___FONT_AWESOME___",kl=16,dp="fa",fp="svg-inline--fa",pn="data-fa-i2svg",Cl="data-fa-pseudo-element",Qg="data-fa-pseudo-element-pending",$a="data-prefix",Ha="data-icon",hc="fontawesome-i2svg",Kg="async",qg=["HTML","HEAD","STYLE","SCRIPT"],pp=(()=>{try{return!0}catch{return!1}})(),mp=[K,Me,Le];function ei(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[K]}})}const hp={...up};hp[K]={...up[K],...pc.kit,...pc["kit-duotone"]};const sn=ei(hp),Al={...$g};Al[K]={...Al[K],...mc.kit,...mc["kit-duotone"]};const Wr=ei(Al),Tl={...Vg};Tl[K]={...Tl[K],...Xg.kit};const ln=ei(Tl),Pl={...Rg};Pl[K]={...Pl[K],...Yg.kit};const Zg=ei(Pl),Jg=_g,gp="fa-layers-text",ev=jg,tv={...Lg};ei(tv);const nv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],hs=hr,Qn=new Set;Object.keys(Wr[K]).map(Qn.add.bind(Qn));Object.keys(Wr[Me]).map(Qn.add.bind(Qn));Object.keys(Wr[Le]).map(Qn.add.bind(Qn));const rv=[...Og,...Ug],Ar=Ht.FontAwesomeConfig||{};function iv(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ov(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}X&&typeof X.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=ov(iv(n));i!=null&&(Ar[r]=i)});const vp={styleDefault:"solid",familyDefault:"classic",cssPrefix:dp,replacementClass:fp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ar.familyPrefix&&(Ar.cssPrefix=Ar.familyPrefix);const Kn={...vp,...Ar};Kn.autoReplaceSvg||(Kn.observeMutations=!1);const _={};Object.keys(vp).forEach(e=>{Object.defineProperty(_,e,{enumerable:!0,set:function(t){Kn[e]=t,Tr.forEach(n=>n(_))},get:function(){return Kn[e]}})});Object.defineProperty(_,"familyPrefix",{enumerable:!0,set:function(e){Kn.cssPrefix=e,Tr.forEach(t=>t(_))},get:function(){return Kn.cssPrefix}});Ht.FontAwesomeConfig=_;const Tr=[];function sv(e){return Tr.push(e),()=>{Tr.splice(Tr.indexOf(e),1)}}const kt=kl,rt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function lv(e){if(!e||!bt)return;const t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=X.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return X.head.insertBefore(t,r),e}const av="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yr(){let e=12,t="";for(;e-- >0;)t+=av[Math.random()*62|0];return t}function er(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ga(e){return e.classList?er(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function yp(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function uv(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(yp(e[n]),'" '),"").trim()}function Do(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Ua(e){return e.size!==rt.size||e.x!==rt.x||e.y!==rt.y||e.rotate!==rt.rotate||e.flipX||e.flipY}function cv(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),a={transform:"".concat(o," ").concat(s," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:a,path:c}}function dv(e){let{transform:t,width:n=kl,height:r=kl,startCentered:i=!1}=e,o="";return i&&lp?o+="translate(".concat(t.x/kt-n/2,"em, ").concat(t.y/kt-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(t.x/kt,"em), calc(-50% + ").concat(t.y/kt,"em)) "):o+="translate(".concat(t.x/kt,"em, ").concat(t.y/kt,"em) "),o+="scale(".concat(t.size/kt*(t.flipX?-1:1),", ").concat(t.size/kt*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var fv=`:root, :host {
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
}`;function wp(){const e=dp,t=fp,n=_.cssPrefix,r=_.replacementClass;let i=fv;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let gc=!1;function gs(){_.autoAddCss&&!gc&&(lv(wp()),gc=!0)}var pv={mixout(){return{dom:{css:wp,insertCss:gs}}},hooks(){return{beforeDOMElementCreation(){gs()},beforeI2svg(){gs()}}}};const xt=Ht||{};xt[wt]||(xt[wt]={});xt[wt].styles||(xt[wt].styles={});xt[wt].hooks||(xt[wt].hooks={});xt[wt].shims||(xt[wt].shims=[]);var it=xt[wt];const xp=[],Sp=function(){X.removeEventListener("DOMContentLoaded",Sp),uo=1,xp.map(e=>e())};let uo=!1;bt&&(uo=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),uo||X.addEventListener("DOMContentLoaded",Sp));function mv(e){bt&&(uo?setTimeout(e,0):xp.push(e))}function ti(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?yp(e):"<".concat(t," ").concat(uv(n),">").concat(r.map(ti).join(""),"</").concat(t,">")}function vc(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var vs=function(t,n,r,i){var o=Object.keys(t),s=o.length,l=n,a,c,d;for(r===void 0?(a=1,d=t[o[0]]):(a=0,d=r);a<s;a++)c=o[a],d=l(d,t[c],c,t);return d};function hv(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Nl(e){const t=hv(e);return t.length===1?t[0].toString(16):null}function gv(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function yc(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function zl(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=yc(t);typeof it.hooks.addPack=="function"&&!r?it.hooks.addPack(e,yc(t)):it.styles[e]={...it.styles[e]||{},...i},e==="fas"&&zl("fa",t)}const{styles:Jt,shims:vv}=it,yv={[K]:Object.values(ln[K]),[Me]:Object.values(ln[Me]),[Le]:Object.values(ln[Le])};let Wa=null,bp={},Ep={},kp={},Cp={},Ap={};const wv={[K]:Object.keys(sn[K]),[Me]:Object.keys(sn[Me]),[Le]:Object.keys(sn[Le])};function xv(e){return~rv.indexOf(e)}function Sv(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!xv(i)?i:null}const Tp=()=>{const e=r=>vs(Jt,(i,o,s)=>(i[s]=vs(o,r,{}),i),{});bp=e((r,i,o)=>(i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=o}),r)),Ep=e((r,i,o)=>(r[o]=o,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=o}),r)),Ap=e((r,i,o)=>{const s=i[2];return r[o]=o,s.forEach(l=>{r[l]=o}),r});const t="far"in Jt||_.autoFetchSvg,n=vs(vv,(r,i)=>{const o=i[0];let s=i[1];const l=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});kp=n.names,Cp=n.unicodes,Wa=Ro(_.styleDefault,{family:_.familyDefault})};sv(e=>{Wa=Ro(e.styleDefault,{family:_.familyDefault})});Tp();function Ya(e,t){return(bp[e]||{})[t]}function bv(e,t){return(Ep[e]||{})[t]}function It(e,t){return(Ap[e]||{})[t]}function Pp(e){return kp[e]||{prefix:null,iconName:null}}function Ev(e){const t=Cp[e],n=Ya("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Gt(){return Wa}const Xa=()=>({prefix:null,iconName:null,rest:[]});function Ro(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=K}=t,r=sn[n][e],i=Wr[n][e]||Wr[n][r],o=e in it.styles?e:null;return i||o||null}const kv={[K]:Object.keys(ln[K]),[Me]:Object.keys(ln[Me]),[Le]:Object.keys(ln[Le])};function Bo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[K]:"".concat(_.cssPrefix,"-").concat(K),[Me]:"".concat(_.cssPrefix,"-").concat(Me),[Le]:"".concat(_.cssPrefix,"-").concat(Le)};let i=null,o=K;const s=Mg.filter(a=>a!==ap);s.forEach(a=>{(e.includes(r[a])||e.some(c=>kv[a].includes(c)))&&(o=a)});const l=e.reduce((a,c)=>{const d=Sv(_.cssPrefix,c);if(Jt[c]?(c=yv[o].includes(c)?Zg[o][c]:c,i=c,a.prefix=c):wv[o].indexOf(c)>-1?(i=c,a.prefix=Ro(c,{family:o})):d?a.iconName=d:c!==_.replacementClass&&!s.some(p=>c===r[p])&&a.rest.push(c),!n&&a.prefix&&a.iconName){const p=i==="fa"?Pp(a.iconName):{},m=It(a.prefix,a.iconName);p.prefix&&(i=null),a.iconName=p.iconName||m||a.iconName,a.prefix=p.prefix||a.prefix,a.prefix==="far"&&!Jt.far&&Jt.fas&&!_.autoFetchSvg&&(a.prefix="fas")}return a},Xa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===Me&&(Jt.fass||_.autoFetchSvg)&&(l.prefix="fass",l.iconName=It(l.prefix,l.iconName)||l.iconName),!l.prefix&&o===Le&&(Jt.fasds||_.autoFetchSvg)&&(l.prefix="fasds",l.iconName=It(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=Gt()||"fas"),l}class Cv{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...i[o]},zl(o,i[o]);const s=ln[K][o];s&&zl(s,i[o]),Tp()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:o,iconName:s,icon:l}=r[i],a=l[2];t[o]||(t[o]={}),a.length>0&&a.forEach(c=>{typeof c=="string"&&(t[o][c]=l)}),t[o][s]=l}),t}}let wc=[],In={};const Rn={},Av=Object.keys(Rn);function Tv(e,t){let{mixoutsTo:n}=t;return wc=e,In={},Object.keys(Rn).forEach(r=>{Av.indexOf(r)===-1&&delete Rn[r]}),wc.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{In[s]||(In[s]=[]),In[s].push(o[s])})}r.provides&&r.provides(Rn)}),n}function Il(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(In[e]||[]).forEach(s=>{t=s.apply(null,[t,...r])}),t}function mn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(In[e]||[]).forEach(o=>{o.apply(null,n)})}function Ut(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Rn[e]?Rn[e].apply(null,t):void 0}function Ml(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Gt();if(t)return t=It(n,t)||t,vc(Np.definitions,n,t)||vc(it.styles,n,t)}const Np=new Cv,Pv=()=>{_.autoReplaceSvg=!1,_.observeMutations=!1,mn("noAuto")},Nv={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return bt?(mn("beforeI2svg",e),Ut("pseudoElements2svg",e),Ut("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;_.autoReplaceSvg===!1&&(_.autoReplaceSvg=!0),_.observeMutations=!0,mv(()=>{Iv({autoReplaceSvgRoot:t}),mn("watch",e)})}},zv={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:It(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Ro(e[0]);return{prefix:n,iconName:It(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(_.cssPrefix,"-"))>-1||e.match(Jg))){const t=Bo(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Gt(),iconName:It(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Gt();return{prefix:t,iconName:It(t,e)||e}}}},Fe={noAuto:Pv,config:_,dom:Nv,parse:zv,library:Np,findIconDefinition:Ml,toHtml:ti},Iv=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=X}=e;(Object.keys(it.styles).length>0||_.autoFetchSvg)&&bt&&_.autoReplaceSvg&&Fe.dom.i2svg({node:t})};function Vo(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>ti(n))}}),Object.defineProperty(e,"node",{get:function(){if(!bt)return;const n=X.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Mv(e){let{children:t,main:n,mask:r,attributes:i,styles:o,transform:s}=e;if(Ua(s)&&n.found&&!r.found){const{width:l,height:a}=n,c={x:l/a/2,y:.5};i.style=Do({...o,"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")})}return[{tag:"svg",attributes:i,children:t}]}function Lv(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:o}=e;const s=o===!0?"".concat(t,"-").concat(_.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:s},children:r}]}]}function Qa(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:o,symbol:s,title:l,maskId:a,titleId:c,extra:d,watchable:p=!1}=e,{width:m,height:g}=n.found?n:t,v=r==="fak",w=[_.replacementClass,i?"".concat(_.cssPrefix,"-").concat(i):""].filter(E=>d.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(d.classes).join(" ");let C={children:[],attributes:{...d.attributes,"data-prefix":r,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)}};const u=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};p&&(C.attributes[pn]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(c||Yr())},children:[l]}),delete C.attributes.title);const f={...C,prefix:r,iconName:i,main:t,mask:n,maskId:a,transform:o,symbol:s,styles:{...u,...d.styles}},{children:h,attributes:x}=n.found&&t.found?Ut("generateAbstractMask",f)||{children:[],attributes:{}}:Ut("generateAbstractIcon",f)||{children:[],attributes:{}};return f.children=h,f.attributes=x,s?Lv(f):Mv(f)}function xc(e){const{content:t,width:n,height:r,transform:i,title:o,extra:s,watchable:l=!1}=e,a={...s.attributes,...o?{title:o}:{},class:s.classes.join(" ")};l&&(a[pn]="");const c={...s.styles};Ua(i)&&(c.transform=dv({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const d=Do(c);d.length>0&&(a.style=d);const p=[];return p.push({tag:"span",attributes:a,children:[t]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function Ov(e){const{content:t,title:n,extra:r}=e,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=Do(r.styles);o.length>0&&(i.style=o);const s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:ys}=it;function Ll(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(_.cssPrefix,"-").concat(hs.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(hs.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(hs.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const _v={found:!1,width:512,height:512};function jv(e,t){!pp&&!_.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ol(e,t){let n=t;return t==="fa"&&_.styleDefault!==null&&(t=Gt()),new Promise((r,i)=>{if(n==="fa"){const o=Pp(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ys[t]&&ys[t][e]){const o=ys[t][e];return r(Ll(o))}jv(e,t),r({..._v,icon:_.showMissingIcons&&e?Ut("missingIconAbstract")||{}:{}})})}const Sc=()=>{},_l=_.measurePerformance&&Si&&Si.mark&&Si.measure?Si:{mark:Sc,measure:Sc},gr='FA "6.6.0"',Fv=e=>(_l.mark("".concat(gr," ").concat(e," begins")),()=>zp(e)),zp=e=>{_l.mark("".concat(gr," ").concat(e," ends")),_l.measure("".concat(gr," ").concat(e),"".concat(gr," ").concat(e," begins"),"".concat(gr," ").concat(e," ends"))};var Ka={begin:Fv,end:zp};const ji=()=>{};function bc(e){return typeof(e.getAttribute?e.getAttribute(pn):null)=="string"}function Dv(e){const t=e.getAttribute?e.getAttribute($a):null,n=e.getAttribute?e.getAttribute(Ha):null;return t&&n}function Rv(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(_.replacementClass)}function Bv(){return _.autoReplaceSvg===!0?Fi.replace:Fi[_.autoReplaceSvg]||Fi.replace}function Vv(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function $v(e){return X.createElement(e)}function Ip(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Vv:$v}=t;if(typeof e=="string")return X.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(Ip(o,{ceFn:n}))}),r}function Hv(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Fi={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(Ip(n),t)}),t.getAttribute(pn)===null&&_.keepOriginalSource){let n=X.createComment(Hv(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Ga(t).indexOf(_.replacementClass))return Fi.replace(e);const r=new RegExp("".concat(_.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,l)=>(l===_.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const i=n.map(o=>ti(o)).join(`
`);t.setAttribute(pn,""),t.innerHTML=i}};function Ec(e){e()}function Mp(e,t){const n=typeof t=="function"?t:ji;if(e.length===0)n();else{let r=Ec;_.mutateApproach===Kg&&(r=Ht.requestAnimationFrame||Ec),r(()=>{const i=Bv(),o=Ka.begin("mutate");e.map(i),o(),n()})}}let qa=!1;function Lp(){qa=!0}function jl(){qa=!1}let co=null;function kc(e){if(!fc||!_.observeMutations)return;const{treeCallback:t=ji,nodeCallback:n=ji,pseudoElementsCallback:r=ji,observeMutationsRoot:i=X}=e;co=new fc(o=>{if(qa)return;const s=Gt();er(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!bc(l.addedNodes[0])&&(_.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&_.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&bc(l.target)&&~nv.indexOf(l.attributeName))if(l.attributeName==="class"&&Dv(l.target)){const{prefix:a,iconName:c}=Bo(Ga(l.target));l.target.setAttribute($a,a||s),c&&l.target.setAttribute(Ha,c)}else Rv(l.target)&&n(l.target)})}),bt&&co.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Gv(){co&&co.disconnect()}function Uv(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const o=i.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(r[s]=l.join(":").trim()),r},{})),n}function Wv(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=Bo(Ga(e));return i.prefix||(i.prefix=Gt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=bv(i.prefix,e.innerText)||Ya(i.prefix,Nl(e.innerText))),!i.iconName&&_.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Yv(e){const t=er(e.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return _.autoA11y&&(n?t["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(r||Yr()):(t["aria-hidden"]="true",t.focusable="false")),t}function Xv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:rt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Cc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=Wv(e),o=Yv(e),s=Il("parseNodeAttributes",{},e);let l=t.styleParser?Uv(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:rt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o},...s}}const{styles:Qv}=it;function Op(e){const t=_.autoReplaceSvg==="nest"?Cc(e,{styleParser:!1}):Cc(e);return~t.extra.classes.indexOf(gp)?Ut("generateLayersText",e,t):Ut("generateSvgReplacementMutation",e,t)}let at=new Set;mp.map(e=>{at.add("fa-".concat(e))});Object.keys(sn[K]).map(at.add.bind(at));Object.keys(sn[Me]).map(at.add.bind(at));Object.keys(sn[Le]).map(at.add.bind(at));at=[...at];function Ac(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!bt)return Promise.resolve();const n=X.documentElement.classList,r=d=>n.add("".concat(hc,"-").concat(d)),i=d=>n.remove("".concat(hc,"-").concat(d)),o=_.autoFetchSvg?at:mp.map(d=>"fa-".concat(d)).concat(Object.keys(Qv));o.includes("fa")||o.push("fa");const s=[".".concat(gp,":not([").concat(pn,"])")].concat(o.map(d=>".".concat(d,":not([").concat(pn,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=er(e.querySelectorAll(s))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const a=Ka.begin("onTree"),c=l.reduce((d,p)=>{try{const m=Op(p);m&&d.push(m)}catch(m){pp||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,p)=>{Promise.all(c).then(m=>{Mp(m,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),a(),d()})}).catch(m=>{a(),p(m)})})}function Kv(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Op(e).then(n=>{n&&Mp([n],t)})}function qv(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Ml(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Ml(i||{})),e(r,{...n,mask:i})}}const Zv=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=rt,symbol:r=!1,mask:i=null,maskId:o=null,title:s=null,titleId:l=null,classes:a=[],attributes:c={},styles:d={}}=t;if(!e)return;const{prefix:p,iconName:m,icon:g}=e;return Vo({type:"icon",...e},()=>(mn("beforeDOMElementCreation",{iconDefinition:e,params:t}),_.autoA11y&&(s?c["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(l||Yr()):(c["aria-hidden"]="true",c.focusable="false")),Qa({icons:{main:Ll(g),mask:i?Ll(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:{...rt,...n},symbol:r,title:s,maskId:o,titleId:l,extra:{attributes:c,styles:d,classes:a}})))};var Jv={mixout(){return{icon:qv(Zv)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Ac,e.nodeCallback=Kv,e}}},provides(e){e.i2svg=function(t){const{node:n=X,callback:r=()=>{}}=t;return Ac(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:o,prefix:s,transform:l,symbol:a,mask:c,maskId:d,extra:p}=n;return new Promise((m,g)=>{Promise.all([Ol(r,s),c.iconName?Ol(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(v=>{let[w,C]=v;m([t,Qa({icons:{main:w,mask:C},prefix:s,iconName:r,transform:l,symbol:a,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:o,styles:s}=t;const l=Do(s);l.length>0&&(r.style=l);let a;return Ua(o)&&(a=Ut("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(a||i.icon),{children:n,attributes:r}}}},e0={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Vo({type:"layer"},()=>{mn("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(o=>{r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(_.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},t0={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:o={}}=t;return Vo({type:"counter",content:e},()=>(mn("beforeDOMElementCreation",{content:e,params:t}),Ov({content:e.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(_.cssPrefix,"-layers-counter"),...r]}})))}}}},n0={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=rt,title:r=null,classes:i=[],attributes:o={},styles:s={}}=t;return Vo({type:"text",content:e},()=>(mn("beforeDOMElementCreation",{content:e,params:t}),xc({content:e,transform:{...rt,...n},title:r,extra:{attributes:o,styles:s,classes:["".concat(_.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:o}=n;let s=null,l=null;if(lp){const a=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();s=c.width/a,l=c.height/a}return _.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,xc({content:t.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}};const r0=new RegExp('"',"ug"),Tc=[1105920,1112319],Pc={FontAwesome:{normal:"fas",400:"fas"},...Dg,...Fg,...Wg},Fl=Object.keys(Pc).reduce((e,t)=>(e[t.toLowerCase()]=Pc[t],e),{}),i0=Object.keys(Fl).reduce((e,t)=>{const n=Fl[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function o0(e){const t=e.replace(r0,""),n=gv(t,0),r=n>=Tc[0]&&n<=Tc[1],i=t.length===2?t[0]===t[1]:!1;return{value:Nl(i?t[0]:t),isSecondary:r||i}}function s0(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(Fl[n]||{})[i]||i0[n]}function Nc(e,t){const n="".concat(Qg).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const s=er(e.children).filter(m=>m.getAttribute(Cl)===t)[0],l=Ht.getComputedStyle(e,t),a=l.getPropertyValue("font-family"),c=a.match(ev),d=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(s&&!c)return e.removeChild(s),r();if(c&&p!=="none"&&p!==""){const m=l.getPropertyValue("content");let g=s0(a,d);const{value:v,isSecondary:w}=o0(m),C=c[0].startsWith("FontAwesome");let u=Ya(g,v),f=u;if(C){const h=Ev(v);h.iconName&&h.prefix&&(u=h.iconName,g=h.prefix)}if(u&&!w&&(!s||s.getAttribute($a)!==g||s.getAttribute(Ha)!==f)){e.setAttribute(n,f),s&&e.removeChild(s);const h=Xv(),{extra:x}=h;x.attributes[Cl]=t,Ol(u,g).then(E=>{const T=Qa({...h,icons:{main:E,mask:Xa()},prefix:g,iconName:f,extra:x,watchable:!0}),z=X.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=T.map(A=>ti(A)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function l0(e){return Promise.all([Nc(e,"::before"),Nc(e,"::after")])}function a0(e){return e.parentNode!==document.head&&!~qg.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Cl)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function zc(e){if(bt)return new Promise((t,n)=>{const r=er(e.querySelectorAll("*")).filter(a0).map(l0),i=Ka.begin("searchPseudoElements");Lp(),Promise.all(r).then(()=>{i(),jl(),t()}).catch(()=>{i(),jl(),n()})})}var u0={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=zc,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=X}=t;_.searchPseudoElements&&zc(n)}}};let Ic=!1;var c0={mixout(){return{dom:{unwatch(){Lp(),Ic=!0}}}},hooks(){return{bootstrap(){kc(Il("mutationObserverCallbacks",{}))},noAuto(){Gv()},watch(e){const{observeMutationsRoot:t}=e;Ic?jl():kc(Il("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Mc=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),o=i[0];let s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var d0={mixout(){return{parse:{transform:e=>Mc(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Mc(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:o}=t;const s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),a="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(a," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:d,path:p};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const ws={x:0,y:0,width:"100%",height:"100%"};function Lc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function f0(e){return e.tag==="g"?e.children:[e]}var p0={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?Bo(n.split(" ").map(i=>i.trim())):Xa();return r.prefix||(r.prefix=Gt()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:o,maskId:s,transform:l}=t;const{width:a,icon:c}=i,{width:d,icon:p}=o,m=cv({transform:l,containerWidth:d,iconWidth:a}),g={tag:"rect",attributes:{...ws,fill:"white"}},v=c.children?{children:c.children.map(Lc)}:{},w={tag:"g",attributes:{...m.inner},children:[Lc({tag:c.tag,attributes:{...c.attributes,...m.path},...v})]},C={tag:"g",attributes:{...m.outer},children:[w]},u="mask-".concat(s||Yr()),f="clip-".concat(s||Yr()),h={tag:"mask",attributes:{...ws,id:u,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,C]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:f},children:f0(p)},h]};return n.push(x,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(f,")"),mask:"url(#".concat(u,")"),...ws}}),{children:n,attributes:r}}}},m0={provides(e){let t=!1;Ht.matchMedia&&(t=Ht.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...i,attributeName:"opacity"},s={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||s.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},h0={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},g0=[pv,Jv,e0,t0,n0,u0,c0,d0,p0,m0,h0];Tv(g0,{mixoutsTo:Fe});Fe.noAuto;Fe.config;Fe.library;Fe.dom;const Dl=Fe.parse;Fe.findIconDefinition;Fe.toHtml;const v0=Fe.icon;Fe.layer;Fe.text;Fe.counter;var _p={exports:{}},y0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",w0=y0,x0=w0;function jp(){}function Fp(){}Fp.resetWarningCache=jp;var S0=function(){function e(r,i,o,s,l,a){if(a!==x0){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Fp,resetWarningCache:jp};return n.PropTypes=n,n};_p.exports=S0();var b0=_p.exports;const R=Gc(b0);function Oc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function tt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oc(Object(n),!0).forEach(function(r){Mn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fo(e){"@babel/helpers - typeof";return fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fo(e)}function Mn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function k0(e,t){if(e==null)return{};var n=E0(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Rl(e){return C0(e)||A0(e)||T0(e)||P0()}function C0(e){if(Array.isArray(e))return Bl(e)}function A0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function T0(e,t){if(e){if(typeof e=="string")return Bl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bl(e,t)}}function Bl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N0(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,l=e.flash,a=e.spin,c=e.spinPulse,d=e.spinReverse,p=e.pulse,m=e.fixedWidth,g=e.inverse,v=e.border,w=e.listItem,C=e.flip,u=e.size,f=e.rotation,h=e.pull,x=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":l,"fa-spin":a,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":g,"fa-border":v,"fa-li":w,"fa-flip":C===!0,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},Mn(t,"fa-".concat(u),typeof u<"u"&&u!==null),Mn(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),Mn(t,"fa-pull-".concat(h),typeof h<"u"&&h!==null),Mn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map(function(E){return x[E]?E:null}).filter(function(E){return E})}function z0(e){return e=e-0,e===e}function Dp(e){return z0(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var I0=["style"];function M0(e){return e.charAt(0).toUpperCase()+e.slice(1)}function L0(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Dp(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[M0(i)]=o:t[i]=o,t},{})}function Rp(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(a){return Rp(e,a)}),i=Object.keys(t.attributes||{}).reduce(function(a,c){var d=t.attributes[c];switch(c){case"class":a.attrs.className=d,delete t.attributes.class;break;case"style":a.attrs.style=L0(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?a.attrs[c.toLowerCase()]=d:a.attrs[Dp(c)]=d}return a},{attrs:{}}),o=n.style,s=o===void 0?{}:o,l=k0(n,I0);return i.attrs.style=tt(tt({},i.attrs.style),s),e.apply(void 0,[t.tag,tt(tt({},i.attrs),l)].concat(Rl(r)))}var Bp=!1;try{Bp=!0}catch{}function O0(){if(!Bp&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function _c(e){if(e&&fo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Dl.icon)return Dl.icon(e);if(e===null)return null;if(e&&fo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function xs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Mn({},e,t):{}}var jc={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ne=W.forwardRef(function(e,t){var n=tt(tt({},jc),e),r=n.icon,i=n.mask,o=n.symbol,s=n.className,l=n.title,a=n.titleId,c=n.maskId,d=_c(r),p=xs("classes",[].concat(Rl(N0(n)),Rl((s||"").split(" ")))),m=xs("transform",typeof n.transform=="string"?Dl.transform(n.transform):n.transform),g=xs("mask",_c(i)),v=v0(d,tt(tt(tt(tt({},p),m),g),{},{symbol:o,title:l,titleId:a,maskId:c}));if(!v)return O0("Could not find icon",d),null;var w=v.abstract,C={ref:t};return Object.keys(n).forEach(function(u){jc.hasOwnProperty(u)||(C[u]=n[u])}),_0(w[0],C)});ne.displayName="FontAwesomeIcon";ne.propTypes={beat:R.bool,border:R.bool,beatFade:R.bool,bounce:R.bool,className:R.string,fade:R.bool,flash:R.bool,mask:R.oneOfType([R.object,R.array,R.string]),maskId:R.string,fixedWidth:R.bool,inverse:R.bool,flip:R.oneOf([!0,!1,"horizontal","vertical","both"]),icon:R.oneOfType([R.object,R.array,R.string]),listItem:R.bool,pull:R.oneOf(["right","left"]),pulse:R.bool,rotation:R.oneOf([0,90,180,270]),shake:R.bool,size:R.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:R.bool,spinPulse:R.bool,spinReverse:R.bool,symbol:R.oneOfType([R.bool,R.string]),title:R.string,titleId:R.string,transform:R.oneOfType([R.string,R.object]),swapOpacity:R.bool};var _0=Rp.bind(null,W.createElement);const j0=()=>y.jsx("div",{className:"video-grid skeleton-container",children:y.jsx("div",{className:"video-content",children:y.jsx("p",{className:"txt"})})}),F0=({campaigns:e,loading:t,widgetsDiv:n})=>{const[r,i]=P.useState(null),o=c=>{i(c)},s=()=>{i(null)},[l,a]=P.useState(null);return t?y.jsx("div",{className:"outer-grid",children:y.jsx("div",{className:"grid",children:Array.from({length:6}).map((c,d)=>y.jsx(j0,{},d))})}):y.jsx(y.Fragment,{children:y.jsxs("div",{className:"outer-grid",children:[y.jsx("div",{className:"grid",children:e.map((c,d)=>y.jsxs("div",{onClick:()=>o(d),children:[y.jsx("div",{className:"video-grid",onMouseEnter:()=>a(d),onMouseLeave:()=>a(null),children:l===d?y.jsx("video",{src:c.videoId[0],loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"}):y.jsx("img",{className:"thumbnail",src:c.campaignPhoto,width:"300",height:"200",alt:"video thumbnail"})}),n?y.jsxs("div",{className:"widgetsDivBookdiv123",children:[y.jsx("div",{className:"img1 widgetsDivImg1",children:y.jsx("img",{className:"img widgetsDivImg",src:c.campaignPhoto,alt:"Campaign"})}),y.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[y.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname widgetsDivHotelname",children:c.campaignName}),y.jsx("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer"}),y.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"widgetsDivOfferprice",children:["From ",c.offerPrice.currency,c.offerPrice.price]})]}),y.jsx("div",{className:"divbtn",children:y.jsx("a",{href:c.hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn widgetsDivBookbtn",children:"Book"})})]}):y.jsx("div",{className:"video-content",children:y.jsxs("p",{className:"txt",children:[e[d].campaignName," ",y.jsx("br",{})," From"," ",e[d].offerPrice.currency,e[d].offerPrice.price]})})]},d))}),r!==null&&y.jsx(D0,{campaigns:e,currentIndex:r,onClose:s})]})})},D0=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=P.useState(t),[o,s]=P.useState(0),[l,a]=P.useState({}),[c,d]=P.useState(!1),[p,m]=P.useState(!1),[g,v]=P.useState(!1),[w,C]=P.useState(!1),u=P.useRef([]);P.useRef(null);const f=P.useRef(null);P.useEffect(()=>{const b=()=>{if(document.visibilityState==="hidden"){const S=u.current[o];S&&!S.paused&&(S.pause(),d(!0),C(!0))}};return document.addEventListener("visibilitychange",b),()=>{document.removeEventListener("visibilitychange",b)}},[o]),P.useEffect(()=>{const b=new IntersectionObserver(S=>{S.forEach(k=>{const N=u.current.indexOf(k.target);k.isIntersecting?(k.target.play(),s(N),C(!1)):k.target.pause()})},{threshold:.5});return s(0),u.current.forEach(S=>{S&&b.observe(S)}),()=>{u.current.forEach(S=>{S&&b.unobserve(S)})}},[r]),P.useEffect(()=>{const b=u.current[o];b&&b.play()},[o]);const h=()=>{r!==null?r+1<e.length?(i(r+1),s(0)):(i(0),s(0)):e.length>0&&(i(0),s(0)),m(!1)},x=()=>{r!==null?r>0?(i(r-1),s(0)):(i(e.length-1),s(0)):e.length>0&&(i(e.length-1),s(0)),m(!1)},E=b=>{const S=u.current[b];S&&(S.paused?(S.play(),console.log("Playing")):(S.pause(),console.log("Paused")),d(S.paused),C(S.paused))},T=b=>{const S=u.current[b];S&&(S.muted=!S.muted,a(k=>({...k,[b]:S.muted})))},z=()=>{v(!g)},A=b=>{const S=b.split(`
`);return S.length>2?{truncated:S.slice(0,2).join(`
`),hasMore:!0}:{truncated:b,hasMore:!1}},M=b=>{console.log("Video ended, checking if animation should play");const S=e[r];if(b<S.videoId.length-1)console.log("Not the last video, playing animation"),m(!0),setTimeout(()=>{const k=u.current[b];k&&(k.currentTime=0,k.play()),m(!1)},5e3);else{console.log("Last video, no animation, just restart");const k=u.current[b];k&&(k.currentTime=0,k.play())}};return P.useEffect(()=>{s(0),f.current&&(f.current.scrollTop=0)},[r]),P.useEffect(()=>{const b=()=>{m(!1)},S=f.current;return S&&S.addEventListener("scroll",b),()=>{S&&S.removeEventListener("scroll",b)}},[]),y.jsxs("div",{className:"whole123",children:[y.jsx("div",{className:"prevbtn123",onClick:x,children:y.jsx(ne,{icon:Fo})}),y.jsx("div",{className:"nextbtn123",onClick:h,children:y.jsx(ne,{icon:Lo})}),y.jsxs("div",{className:"reelsContainer",ref:f,children:[e[r].videoId.map((b,S)=>y.jsxs("div",{className:"reel",children:[y.jsx("div",{className:"closediv123",children:y.jsx("button",{className:"closebtn123",onClick:n,children:y.jsx(ne,{icon:jo})})}),y.jsxs("div",{className:"video-container1",children:[y.jsx("video",{ref:k=>u.current[S]=k,src:b,className:"ad",loop:!1,playsInline:!0,controls:!1,autoPlay:S===o,onClick:()=>E(S),onPause:()=>{d(!0)},onPlay:()=>{d(!1)},onEnded:()=>M(S)}),c&&w&&y.jsx(ne,{icon:Ba,onClick:()=>E(S),className:"play-button123"}),y.jsxs("div",{className:"bookdiv123",children:[y.jsx("div",{className:"img1",children:y.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),y.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[y.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),y.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[g?e[r].campaignDetails:A(e[r].campaignDetails).truncated,A(e[r].campaignDetails).hasMore&&y.jsx("div",{children:y.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:z,children:g?" View Less":" View More"})})]}),y.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[r].offerPrice.currency,e[r].offerPrice.price]})]}),y.jsx("div",{className:"divbtn",children:y.jsx("a",{href:e[r].campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]}),y.jsx("div",{className:"functions",children:y.jsx(ne,{icon:l[S]?_o:Oo,className:"volume123",onClick:()=>T(S),style:{cursor:"pointer"}})})]},S)),p&&y.jsx("img",{src:"scroll.gif",alt:"",className:"down-arrow"})]})]})},R0=()=>{const[e,t]=P.useState([]),[n,r]=P.useState([]),[i,o]=P.useState(!0),s="true";return P.useEffect(()=>{const a=document.getElementById("root-grid").dataset.campaignId;(async d=>{try{const m=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${d}`)).json(),g=m.campaigns.map(v=>v.videoId[0]);t(g),r(m.campaigns)}catch(p){console.error("Error fetching data:",p)}})(a)},[]),P.useEffect(()=>{n.length>0&&o(!1)},[n]),y.jsxs("div",{className:"App",children:[y.jsx("style",{children:`

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

.video-content > .txt {
  color: white;
   text-align: start;
       margin-bottom: 1em !important;

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
`}),y.jsx(F0,{videos:e,campaigns:n,loading:i,widgetsDiv:s})]})},B0=()=>y.jsx("div",{className:"inner not-played",children:y.jsx("p",{className:"txt2-123"})}),V0=({campaigns:e,loading:t})=>{const n=P.useRef(null),[r,i]=P.useState(!1),[o,s]=P.useState(null),[l,a]=P.useState(0),[c,d]=P.useState(!1),[p,m]=P.useState(0),[g,v]=P.useState({}),[w,C]=P.useState(!1);P.useEffect(()=>{const k=()=>{document.hidden&&n.current&&(n.current.muted=!0,d(!0))};return document.addEventListener("visibilitychange",k),()=>{document.removeEventListener("visibilitychange",k)}},[]),P.useEffect(()=>{const k=n.current,N=()=>{C(k.paused),k.paused&&k.play()};return k&&(k.addEventListener("play",N),k.addEventListener("pause",N)),()=>{k&&(k.removeEventListener("play",N),k.removeEventListener("pause",N))}},[o,l,e]),P.useEffect(()=>{if(o!==null&&e[o]){const k=e[o];if(l<k.videoId.length){const N=k.videoId[l];n.current.src=N,n.current.play(),m(0),C(!1)}}},[o,l,e]),P.useEffect(()=>{const k=setInterval(()=>{n.current&&m(n.current.currentTime/n.current.duration*100)},100);return()=>clearInterval(k)},[l,o]),P.useEffect(()=>{n.current&&(n.current.muted=c)},[c]);const u=k=>{s(k),a(0)},f=()=>{if(v(k=>({...k,[`${o}-${l}`]:!0})),m(100),o!==null&&e[o]){const k=e[o];l+1<k.videoId.length?a(l+1):o+1<e.length?(s(o+1),a(0)):(s(null),a(0))}},h=()=>{o!==null?o+1<e.length?(s(o+1),a(0)):(s(0),a(0)):e.length>0&&(s(0),a(0))},x=()=>{o!==null?o>0?(s(o-1),a(0)):(s(e.length-1),a(0)):e.length>0&&(s(e.length-1),a(0))},E=()=>{o!==null&&e[o]&&l+1<e[o].videoId.length&&(v(k=>({...k,[`${o}-${l}`]:!0})),a(l+1))},T=()=>{o!==null&&e[o]&&l>0&&a(l-1)},z=()=>{d(k=>!k)},A=()=>{s(null),a(0),C(!1),d(!1)},M=k=>{const N=k.currentTarget.getBoundingClientRect(),D=k.clientX-N.left,$=N.width;D<$/2?T():E()},b=()=>{i(!r)},S=k=>{const N=k.split(`
`);return N.length>2?{truncated:N.slice(0,2).join(`
`),hasMore:!0}:{truncated:k,hasMore:!1}};return t?y.jsx("div",{className:"storiesHeader ",children:y.jsx("div",{className:"outer ",children:Array.from({length:5}).map((k,N)=>y.jsx(B0,{},N))})}):y.jsx(y.Fragment,{children:y.jsxs("div",{className:"storiesHeader",children:[y.jsx("div",{className:"outer",children:e.map((k,N)=>y.jsx("div",{onClick:()=>u(N),className:`inner ${o===N?"active":""} ${k.videoId.some((D,$)=>g[`${N}-${$}`])?"played":"not-played"}`,children:y.jsx("img",{src:k.campaignPhoto,alt:"Campaign",className:"campaign-photo"})},N))}),y.jsxs("div",{className:`topp ${o!==null?"active":""}`,children:[y.jsx("div",{className:"next",onClick:h,children:y.jsx(ne,{icon:Lo})}),y.jsx("div",{className:"previous",onClick:x,children:y.jsx(ne,{icon:Fo})}),y.jsx("div",{className:"outer-box",children:o!==null&&y.jsxs("div",{className:"boxed-video",children:[y.jsx("div",{className:"mute-unmute",onClick:z,children:c?y.jsx(ne,{icon:_o}):y.jsx(ne,{icon:Oo})}),y.jsx("div",{className:"close-button",onClick:A,children:y.jsx(ne,{className:"close",icon:jo})}),y.jsx("div",{className:"progress-bar",children:e[o].videoId.map((k,N)=>y.jsx("div",{className:"progress",children:y.jsx("div",{className:"progress1",style:{width:`${N===l?p:g[`${o}-${N}`]?100:0}%`}})},N))}),y.jsx("video",{className:"boxed-video",ref:n,onClick:M,onEnded:f,autoPlay:!0,children:"Your browser does not support the video tag."}),y.jsxs("div",{className:"bookdiv",children:[y.jsx("div",{className:"img1",children:y.jsx("img",{className:"img",src:e[o].campaignPhoto,alt:"Campaign"})}),y.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[y.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[o].campaignName}),y.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[r?e[o].campaignDetails:S(e[o].campaignDetails).truncated,S(e[o].campaignDetails).hasMore&&y.jsx("div",{children:y.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:b,children:r?" View Less":" View More"})})]}),y.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[o].offerPrice.currency,e[o].offerPrice.price]})]}),y.jsx("div",{className:"divbtn",children:y.jsx("a",{href:e[o].campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]})})]})]})})};function $0(){P.useState([]);const[e,t]=P.useState([]);P.useState("");const[n,r]=P.useState(!0);return P.useEffect(()=>{const o=document.getElementById("root-stories").dataset.campaignId;o?(async l=>{try{const c=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${l}`)).json();t(c.campaigns)}catch(a){console.error("Error fetching data:",a)}})(o):console.log("no campaign id found!")},[]),P.useEffect(()=>{e.length>0&&r(!1)},[e]),y.jsxs("div",{className:"App1",children:[y.jsx("style",{children:`
                
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
    }`}),y.jsx(V0,{campaigns:e,loading:n})]})}function Fc(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Za(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:Fc(t[n])&&Fc(e[n])&&Object.keys(t[n]).length>0&&Za(e[n],t[n])})}const Vp={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function tr(){const e=typeof document<"u"?document:{};return Za(e,Vp),e}const H0={document:Vp,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function De(){const e=typeof window<"u"?window:{};return Za(e,H0),e}function G0(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function U0(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Vl(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function po(){return Date.now()}function W0(e){const t=De();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function Y0(e,t){t===void 0&&(t="x");const n=De();let r,i,o;const s=W0(e);return n.WebKitCSSMatrix?(i=s.transform||s.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function bi(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function X0(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ne(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!X0(r)){const i=Object.keys(Object(r)).filter(o=>t.indexOf(o)<0);for(let o=0,s=i.length;o<s;o+=1){const l=i[o],a=Object.getOwnPropertyDescriptor(r,l);a!==void 0&&a.enumerable&&(bi(e[l])&&bi(r[l])?r[l].__swiper__?e[l]=r[l]:Ne(e[l],r[l]):!bi(e[l])&&bi(r[l])?(e[l]={},r[l].__swiper__?e[l]=r[l]:Ne(e[l],r[l])):e[l]=r[l])}}}return e}function Ei(e,t,n){e.style.setProperty(t,n)}function $p(e){let{swiper:t,targetPosition:n,side:r}=e;const i=De(),o=-t.translate;let s=null,l;const a=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=n>o?"next":"prev",d=(m,g)=>c==="next"&&m>=g||c==="prev"&&m<=g,p=()=>{l=new Date().getTime(),s===null&&(s=l);const m=Math.max(Math.min((l-s)/a,1),0),g=.5-Math.cos(m*Math.PI)/2;let v=o+g*(n-o);if(d(v,n)&&(v=n),t.wrapperEl.scrollTo({[r]:v}),d(v,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:v})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(p)};p()}function Ja(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function ot(e,t){return t===void 0&&(t=""),[...e.children].filter(n=>n.matches(t))}function mo(e){try{console.warn(e);return}catch{}}function Xr(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:G0(t)),n}function Q0(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function K0(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Mt(e,t){return De().getComputedStyle(e,null).getPropertyValue(t)}function ho(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Hp(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function $l(e,t,n){const r=De();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function ue(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Gp(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=ot(e.el,`.${r[i]}`)[0];o||(o=Xr("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}function q0(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function o(v){let w;return v&&typeof v=="string"&&t.isElement&&(w=t.el.querySelector(v),w)?w:(v&&(typeof v=="string"&&(w=[...document.querySelectorAll(v)]),t.params.uniqueNavElements&&typeof v=="string"&&w&&w.length>1&&t.el.querySelectorAll(v).length===1?w=t.el.querySelector(v):w&&w.length===1&&(w=w[0])),v&&!w?v:w)}function s(v,w){const C=t.params.navigation;v=ue(v),v.forEach(u=>{u&&(u.classList[w?"add":"remove"](...C.disabledClass.split(" ")),u.tagName==="BUTTON"&&(u.disabled=w),t.params.watchOverflow&&t.enabled&&u.classList[t.isLocked?"add":"remove"](C.lockClass))})}function l(){const{nextEl:v,prevEl:w}=t.navigation;if(t.params.loop){s(w,!1),s(v,!1);return}s(w,t.isBeginning&&!t.params.rewind),s(v,t.isEnd&&!t.params.rewind)}function a(v){v.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(v){v.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function d(){const v=t.params.navigation;if(t.params.navigation=Gp(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(v.nextEl||v.prevEl))return;let w=o(v.nextEl),C=o(v.prevEl);Object.assign(t.navigation,{nextEl:w,prevEl:C}),w=ue(w),C=ue(C);const u=(f,h)=>{f&&f.addEventListener("click",h==="next"?c:a),!t.enabled&&f&&f.classList.add(...v.lockClass.split(" "))};w.forEach(f=>u(f,"next")),C.forEach(f=>u(f,"prev"))}function p(){let{nextEl:v,prevEl:w}=t.navigation;v=ue(v),w=ue(w);const C=(u,f)=>{u.removeEventListener("click",f==="next"?c:a),u.classList.remove(...t.params.navigation.disabledClass.split(" "))};v.forEach(u=>C(u,"next")),w.forEach(u=>C(u,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?g():(d(),l())}),r("toEdge fromEdge lock unlock",()=>{l()}),r("destroy",()=>{p()}),r("enable disable",()=>{let{nextEl:v,prevEl:w}=t.navigation;if(v=ue(v),w=ue(w),t.enabled){l();return}[...v,...w].filter(C=>!!C).forEach(C=>C.classList.add(t.params.navigation.lockClass))}),r("click",(v,w)=>{let{nextEl:C,prevEl:u}=t.navigation;C=ue(C),u=ue(u);const f=w.target;let h=u.includes(f)||C.includes(f);if(t.isElement&&!h){const x=w.path||w.composedPath&&w.composedPath();x&&(h=x.find(E=>C.includes(E)||u.includes(E)))}if(t.params.navigation.hideOnClick&&!h){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===f||t.pagination.el.contains(f)))return;let x;C.length?x=C[0].classList.contains(t.params.navigation.hiddenClass):u.length&&(x=u[0].classList.contains(t.params.navigation.hiddenClass)),i(x===!0?"navigationShow":"navigationHide"),[...C,...u].filter(E=>!!E).forEach(E=>E.classList.toggle(t.params.navigation.hiddenClass))}});const m=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),d(),l()},g=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(t.navigation,{enable:m,disable:g,update:l,init:d,destroy:p})}function cr(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Z0(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:u=>u,formatFractionTotal:u=>u,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),t.pagination={el:null,bullets:[]};let s,l=0;function a(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function c(u,f){const{bulletActiveClass:h}=t.params.pagination;u&&(u=u[`${f==="prev"?"previous":"next"}ElementSibling`],u&&(u.classList.add(`${h}-${f}`),u=u[`${f==="prev"?"previous":"next"}ElementSibling`],u&&u.classList.add(`${h}-${f}-${f}`)))}function d(u){const f=u.target.closest(cr(t.params.pagination.bulletClass));if(!f)return;u.preventDefault();const h=ho(f)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===h)return;t.slideToLoop(h)}else t.slideTo(h)}function p(){const u=t.rtl,f=t.params.pagination;if(a())return;let h=t.pagination.el;h=ue(h);let x,E;const T=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,z=t.params.loop?Math.ceil(T/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(E=t.previousRealIndex||0,x=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(x=t.snapIndex,E=t.previousSnapIndex):(E=t.previousIndex||0,x=t.activeIndex||0),f.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const A=t.pagination.bullets;let M,b,S;if(f.dynamicBullets&&(s=$l(A[0],t.isHorizontal()?"width":"height"),h.forEach(k=>{k.style[t.isHorizontal()?"width":"height"]=`${s*(f.dynamicMainBullets+4)}px`}),f.dynamicMainBullets>1&&E!==void 0&&(l+=x-(E||0),l>f.dynamicMainBullets-1?l=f.dynamicMainBullets-1:l<0&&(l=0)),M=Math.max(x-l,0),b=M+(Math.min(A.length,f.dynamicMainBullets)-1),S=(b+M)/2),A.forEach(k=>{const N=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(D=>`${f.bulletActiveClass}${D}`)].map(D=>typeof D=="string"&&D.includes(" ")?D.split(" "):D).flat();k.classList.remove(...N)}),h.length>1)A.forEach(k=>{const N=ho(k);N===x?k.classList.add(...f.bulletActiveClass.split(" ")):t.isElement&&k.setAttribute("part","bullet"),f.dynamicBullets&&(N>=M&&N<=b&&k.classList.add(...`${f.bulletActiveClass}-main`.split(" ")),N===M&&c(k,"prev"),N===b&&c(k,"next"))});else{const k=A[x];if(k&&k.classList.add(...f.bulletActiveClass.split(" ")),t.isElement&&A.forEach((N,D)=>{N.setAttribute("part",D===x?"bullet-active":"bullet")}),f.dynamicBullets){const N=A[M],D=A[b];for(let $=M;$<=b;$+=1)A[$]&&A[$].classList.add(...`${f.bulletActiveClass}-main`.split(" "));c(N,"prev"),c(D,"next")}}if(f.dynamicBullets){const k=Math.min(A.length,f.dynamicMainBullets+4),N=(s*k-s)/2-S*s,D=u?"right":"left";A.forEach($=>{$.style[t.isHorizontal()?D:"top"]=`${N}px`})}}h.forEach((A,M)=>{if(f.type==="fraction"&&(A.querySelectorAll(cr(f.currentClass)).forEach(b=>{b.textContent=f.formatFractionCurrent(x+1)}),A.querySelectorAll(cr(f.totalClass)).forEach(b=>{b.textContent=f.formatFractionTotal(z)})),f.type==="progressbar"){let b;f.progressbarOpposite?b=t.isHorizontal()?"vertical":"horizontal":b=t.isHorizontal()?"horizontal":"vertical";const S=(x+1)/z;let k=1,N=1;b==="horizontal"?k=S:N=S,A.querySelectorAll(cr(f.progressbarFillClass)).forEach(D=>{D.style.transform=`translate3d(0,0,0) scaleX(${k}) scaleY(${N})`,D.style.transitionDuration=`${t.params.speed}ms`})}f.type==="custom"&&f.renderCustom?(A.innerHTML=f.renderCustom(t,x+1,z),M===0&&i("paginationRender",A)):(M===0&&i("paginationRender",A),i("paginationUpdate",A)),t.params.watchOverflow&&t.enabled&&A.classList[t.isLocked?"add":"remove"](f.lockClass)})}function m(){const u=t.params.pagination;if(a())return;const f=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let h=t.pagination.el;h=ue(h);let x="";if(u.type==="bullets"){let E=t.params.loop?Math.ceil(f/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&E>f&&(E=f);for(let T=0;T<E;T+=1)u.renderBullet?x+=u.renderBullet.call(t,T,u.bulletClass):x+=`<${u.bulletElement} ${t.isElement?'part="bullet"':""} class="${u.bulletClass}"></${u.bulletElement}>`}u.type==="fraction"&&(u.renderFraction?x=u.renderFraction.call(t,u.currentClass,u.totalClass):x=`<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`),u.type==="progressbar"&&(u.renderProgressbar?x=u.renderProgressbar.call(t,u.progressbarFillClass):x=`<span class="${u.progressbarFillClass}"></span>`),t.pagination.bullets=[],h.forEach(E=>{u.type!=="custom"&&(E.innerHTML=x||""),u.type==="bullets"&&t.pagination.bullets.push(...E.querySelectorAll(cr(u.bulletClass)))}),u.type!=="custom"&&i("paginationRender",h[0])}function g(){t.params.pagination=Gp(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const u=t.params.pagination;if(!u.el)return;let f;typeof u.el=="string"&&t.isElement&&(f=t.el.querySelector(u.el)),!f&&typeof u.el=="string"&&(f=[...document.querySelectorAll(u.el)]),f||(f=u.el),!(!f||f.length===0)&&(t.params.uniqueNavElements&&typeof u.el=="string"&&Array.isArray(f)&&f.length>1&&(f=[...t.el.querySelectorAll(u.el)],f.length>1&&(f=f.filter(h=>Hp(h,".swiper")[0]===t.el)[0])),Array.isArray(f)&&f.length===1&&(f=f[0]),Object.assign(t.pagination,{el:f}),f=ue(f),f.forEach(h=>{u.type==="bullets"&&u.clickable&&h.classList.add(...(u.clickableClass||"").split(" ")),h.classList.add(u.modifierClass+u.type),h.classList.add(t.isHorizontal()?u.horizontalClass:u.verticalClass),u.type==="bullets"&&u.dynamicBullets&&(h.classList.add(`${u.modifierClass}${u.type}-dynamic`),l=0,u.dynamicMainBullets<1&&(u.dynamicMainBullets=1)),u.type==="progressbar"&&u.progressbarOpposite&&h.classList.add(u.progressbarOppositeClass),u.clickable&&h.addEventListener("click",d),t.enabled||h.classList.add(u.lockClass)}))}function v(){const u=t.params.pagination;if(a())return;let f=t.pagination.el;f&&(f=ue(f),f.forEach(h=>{h.classList.remove(u.hiddenClass),h.classList.remove(u.modifierClass+u.type),h.classList.remove(t.isHorizontal()?u.horizontalClass:u.verticalClass),u.clickable&&(h.classList.remove(...(u.clickableClass||"").split(" ")),h.removeEventListener("click",d))})),t.pagination.bullets&&t.pagination.bullets.forEach(h=>h.classList.remove(...u.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const u=t.params.pagination;let{el:f}=t.pagination;f=ue(f),f.forEach(h=>{h.classList.remove(u.horizontalClass,u.verticalClass),h.classList.add(t.isHorizontal()?u.horizontalClass:u.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?C():(g(),m(),p())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&p()}),r("snapIndexChange",()=>{p()}),r("snapGridLengthChange",()=>{m(),p()}),r("destroy",()=>{v()}),r("enable disable",()=>{let{el:u}=t.pagination;u&&(u=ue(u),u.forEach(f=>f.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{p()}),r("click",(u,f)=>{const h=f.target,x=ue(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&x&&x.length>0&&!h.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&h===t.navigation.nextEl||t.navigation.prevEl&&h===t.navigation.prevEl))return;const E=x[0].classList.contains(t.params.pagination.hiddenClass);i(E===!0?"paginationShow":"paginationHide"),x.forEach(T=>T.classList.toggle(t.params.pagination.hiddenClass))}});const w=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:u}=t.pagination;u&&(u=ue(u),u.forEach(f=>f.classList.remove(t.params.pagination.paginationDisabledClass))),g(),m(),p()},C=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:u}=t.pagination;u&&(u=ue(u),u.forEach(f=>f.classList.add(t.params.pagination.paginationDisabledClass))),v()};Object.assign(t.pagination,{enable:w,disable:C,render:m,update:p,init:g,destroy:v})}function J0(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:o,overwriteParams:s,perspective:l,recreateShadows:a,getEffectParams:c}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),l&&l()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const p=s?s():{};Object.assign(n.params,p),Object.assign(n.originalParams,p)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(p,m)=>{n.params.effect===t&&o(m)}),r("transitionEnd",()=>{if(n.params.effect===t&&a){if(!c||!c().slideShadows)return;n.slides.forEach(p=>{p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(m=>m.remove())}),a()}});let d;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(d=!0),requestAnimationFrame(()=>{d&&n.slides&&n.slides.length&&(i(),d=!1)}))})}function e1(e,t){const n=Ja(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function Dc(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,i=Ja(t);let o=i.querySelector(`.${r.split(" ").join(".")}`);return o||(o=Xr("div",r.split(" ")),i.append(o)),o}function t1(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),J0({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:s,height:l,slides:a,slidesSizesGrid:c}=t,d=t.params.coverflowEffect,p=t.isHorizontal(),m=t.translate,g=p?-m+s/2:-m+l/2,v=p?d.rotate:-d.rotate,w=d.depth;for(let C=0,u=a.length;C<u;C+=1){const f=a[C],h=c[C],x=f.swiperSlideOffset,E=(g-x-h/2)/h,T=typeof d.modifier=="function"?d.modifier(E):E*d.modifier;let z=p?v*T:0,A=p?0:v*T,M=-w*Math.abs(T),b=d.stretch;typeof b=="string"&&b.indexOf("%")!==-1&&(b=parseFloat(d.stretch)/100*h);let S=p?0:b*T,k=p?b*T:0,N=1-(1-d.scale)*Math.abs(T);Math.abs(k)<.001&&(k=0),Math.abs(S)<.001&&(S=0),Math.abs(M)<.001&&(M=0),Math.abs(z)<.001&&(z=0),Math.abs(A)<.001&&(A=0),Math.abs(N)<.001&&(N=0),t.browser&&t.browser.need3dFix&&(Math.abs(z)/90%2===1&&(z+=.001),Math.abs(A)/90%2===1&&(A+=.001));const D=`translate3d(${k}px,${S}px,${M}px)  rotateX(${A}deg) rotateY(${z}deg) scale(${N})`,$=e1(d,f);if($.style.transform=D,f.style.zIndex=-Math.abs(Math.round(T))+1,d.slideShadows){let se=p?f.querySelector(".swiper-slide-shadow-left"):f.querySelector(".swiper-slide-shadow-top"),Re=p?f.querySelector(".swiper-slide-shadow-right"):f.querySelector(".swiper-slide-shadow-bottom");se||(se=Dc("coverflow",f,p?"left":"top")),Re||(Re=Dc("coverflow",f,p?"right":"bottom")),se&&(se.style.opacity=T>0?T:0),Re&&(Re.style.opacity=-T>0?-T:0)}}},setTransition:s=>{t.slides.map(a=>Ja(a)).forEach(a=>{a.style.transitionDuration=`${s}ms`,a.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${s}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}let Ss;function n1(){const e=De(),t=tr();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Up(){return Ss||(Ss=n1()),Ss}let bs;function r1(e){let{userAgent:t}=e===void 0?{}:e;const n=Up(),r=De(),i=r.navigator.platform,o=t||r.navigator.userAgent,s={ios:!1,android:!1},l=r.screen.width,a=r.screen.height,c=o.match(/(Android);?[\s\/]+([\d.]+)?/);let d=o.match(/(iPad).*OS\s([\d_]+)/);const p=o.match(/(iPod)(.*OS\s([\d_]+))?/),m=!d&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=i==="Win32";let v=i==="MacIntel";const w=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&v&&n.touch&&w.indexOf(`${l}x${a}`)>=0&&(d=o.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),v=!1),c&&!g&&(s.os="android",s.android=!0),(d||m||p)&&(s.os="ios",s.ios=!0),s}function Wp(e){return e===void 0&&(e={}),bs||(bs=r1(e)),bs}let Es;function i1(){const e=De(),t=Wp();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[a,c]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));n=a<16||a===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),s=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:s,isWebView:i}}function o1(){return Es||(Es=i1()),Es}function s1(e){let{swiper:t,on:n,emit:r}=e;const i=De();let o=null,s=null;const l=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},a=()=>{!t||t.destroyed||!t.initialized||(o=new ResizeObserver(p=>{s=i.requestAnimationFrame(()=>{const{width:m,height:g}=t;let v=m,w=g;p.forEach(C=>{let{contentBoxSize:u,contentRect:f,target:h}=C;h&&h!==t.el||(v=f?f.width:(u[0]||u).inlineSize,w=f?f.height:(u[0]||u).blockSize)}),(v!==m||w!==g)&&l()})}),o.observe(t.el))},c=()=>{s&&i.cancelAnimationFrame(s),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},d=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){a();return}i.addEventListener("resize",l),i.addEventListener("orientationchange",d)}),n("destroy",()=>{c(),i.removeEventListener("resize",l),i.removeEventListener("orientationchange",d)})}function l1(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o=[],s=De(),l=function(d,p){p===void 0&&(p={});const m=s.MutationObserver||s.WebkitMutationObserver,g=new m(v=>{if(t.__preventObserver__)return;if(v.length===1){i("observerUpdate",v[0]);return}const w=function(){i("observerUpdate",v[0])};s.requestAnimationFrame?s.requestAnimationFrame(w):s.setTimeout(w,0)});g.observe(d,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:typeof p.childList>"u"?!0:p.childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),o.push(g)},a=()=>{if(t.params.observer){if(t.params.observeParents){const d=Hp(t.hostEl);for(let p=0;p<d.length;p+=1)l(d[p])}l(t.hostEl,{childList:t.params.observeSlideChildren}),l(t.wrapperEl,{attributes:!1})}},c=()=>{o.forEach(d=>{d.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",a),r("destroy",c)}var a1={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];t.apply(r,s)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return typeof o[0]=="string"||Array.isArray(o[0])?(t=o[0],n=o.slice(1,o.length),r=e):(t=o[0].events,n=o[0].data,r=o[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(a=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(r,[a,...n])}),e.eventsListeners&&e.eventsListeners[a]&&e.eventsListeners[a].forEach(c=>{c.apply(r,n)})}),e}};function u1(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Mt(r,"padding-left")||0,10)-parseInt(Mt(r,"padding-right")||0,10),n=n-parseInt(Mt(r,"padding-top")||0,10)-parseInt(Mt(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function c1(){const e=this;function t(b,S){return parseFloat(b.getPropertyValue(e.getDirectionLabel(S))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:o,rtlTranslate:s,wrongRTL:l}=e,a=e.virtual&&n.virtual.enabled,c=a?e.virtual.slides.length:e.slides.length,d=ot(i,`.${e.params.slideClass}, swiper-slide`),p=a?e.virtual.slides.length:d.length;let m=[];const g=[],v=[];let w=n.slidesOffsetBefore;typeof w=="function"&&(w=n.slidesOffsetBefore.call(e));let C=n.slidesOffsetAfter;typeof C=="function"&&(C=n.slidesOffsetAfter.call(e));const u=e.snapGrid.length,f=e.slidesGrid.length;let h=n.spaceBetween,x=-w,E=0,T=0;if(typeof o>"u")return;typeof h=="string"&&h.indexOf("%")>=0?h=parseFloat(h.replace("%",""))/100*o:typeof h=="string"&&(h=parseFloat(h)),e.virtualSize=-h,d.forEach(b=>{s?b.style.marginLeft="":b.style.marginRight="",b.style.marginBottom="",b.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(Ei(r,"--swiper-centered-offset-before",""),Ei(r,"--swiper-centered-offset-after",""));const z=n.grid&&n.grid.rows>1&&e.grid;z?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let A;const M=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(b=>typeof n.breakpoints[b].slidesPerView<"u").length>0;for(let b=0;b<p;b+=1){A=0;let S;if(d[b]&&(S=d[b]),z&&e.grid.updateSlide(b,S,d),!(d[b]&&Mt(S,"display")==="none")){if(n.slidesPerView==="auto"){M&&(d[b].style[e.getDirectionLabel("width")]="");const k=getComputedStyle(S),N=S.style.transform,D=S.style.webkitTransform;if(N&&(S.style.transform="none"),D&&(S.style.webkitTransform="none"),n.roundLengths)A=e.isHorizontal()?$l(S,"width"):$l(S,"height");else{const $=t(k,"width"),se=t(k,"padding-left"),Re=t(k,"padding-right"),L=t(k,"margin-left"),j=t(k,"margin-right"),F=k.getPropertyValue("box-sizing");if(F&&F==="border-box")A=$+L+j;else{const{clientWidth:q,offsetWidth:ie}=S;A=$+se+Re+L+j+(ie-q)}}N&&(S.style.transform=N),D&&(S.style.webkitTransform=D),n.roundLengths&&(A=Math.floor(A))}else A=(o-(n.slidesPerView-1)*h)/n.slidesPerView,n.roundLengths&&(A=Math.floor(A)),d[b]&&(d[b].style[e.getDirectionLabel("width")]=`${A}px`);d[b]&&(d[b].swiperSlideSize=A),v.push(A),n.centeredSlides?(x=x+A/2+E/2+h,E===0&&b!==0&&(x=x-o/2-h),b===0&&(x=x-o/2-h),Math.abs(x)<1/1e3&&(x=0),n.roundLengths&&(x=Math.floor(x)),T%n.slidesPerGroup===0&&m.push(x),g.push(x)):(n.roundLengths&&(x=Math.floor(x)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&m.push(x),g.push(x),x=x+A+h),e.virtualSize+=A+h,E=A,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+C,s&&l&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+h}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+h}px`),z&&e.grid.updateWrapperSize(A,m),!n.centeredSlides){const b=[];for(let S=0;S<m.length;S+=1){let k=m[S];n.roundLengths&&(k=Math.floor(k)),m[S]<=e.virtualSize-o&&b.push(k)}m=b,Math.floor(e.virtualSize-o)-Math.floor(m[m.length-1])>1&&m.push(e.virtualSize-o)}if(a&&n.loop){const b=v[0]+h;if(n.slidesPerGroup>1){const S=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),k=b*n.slidesPerGroup;for(let N=0;N<S;N+=1)m.push(m[m.length-1]+k)}for(let S=0;S<e.virtual.slidesBefore+e.virtual.slidesAfter;S+=1)n.slidesPerGroup===1&&m.push(m[m.length-1]+b),g.push(g[g.length-1]+b),e.virtualSize+=b}if(m.length===0&&(m=[0]),h!==0){const b=e.isHorizontal()&&s?"marginLeft":e.getDirectionLabel("marginRight");d.filter((S,k)=>!n.cssMode||n.loop?!0:k!==d.length-1).forEach(S=>{S.style[b]=`${h}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let b=0;v.forEach(k=>{b+=k+(h||0)}),b-=h;const S=b-o;m=m.map(k=>k<=0?-w:k>S?S+C:k)}if(n.centerInsufficientSlides){let b=0;v.forEach(k=>{b+=k+(h||0)}),b-=h;const S=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(b+S<o){const k=(o-b-S)/2;m.forEach((N,D)=>{m[D]=N-k}),g.forEach((N,D)=>{g[D]=N+k})}}if(Object.assign(e,{slides:d,snapGrid:m,slidesGrid:g,slidesSizesGrid:v}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){Ei(r,"--swiper-centered-offset-before",`${-m[0]}px`),Ei(r,"--swiper-centered-offset-after",`${e.size/2-v[v.length-1]/2}px`);const b=-e.snapGrid[0],S=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(k=>k+b),e.slidesGrid=e.slidesGrid.map(k=>k+S)}if(p!==c&&e.emit("slidesLengthChange"),m.length!==u&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==f&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!a&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const b=`${n.containerModifierClass}backface-hidden`,S=e.el.classList.contains(b);p<=n.maxBackfaceHiddenSlides?S||e.el.classList.add(b):S&&e.el.classList.remove(b)}}function d1(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const s=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(s(l))}else n.push(s(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function f1(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Rc=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function p1(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let s=-e;i&&(s=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let a=0;a<r.length;a+=1){const c=r[a];let d=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(d-=r[0].swiperSlideOffset);const p=(s+(n.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),m=(s-o[0]+(n.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),g=-(s-d),v=g+t.slidesSizesGrid[a],w=g>=0&&g<=t.size-t.slidesSizesGrid[a],C=g>=0&&g<t.size-1||v>1&&v<=t.size||g<=0&&v>=t.size;C&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(a)),Rc(c,C,n.slideVisibleClass),Rc(c,w,n.slideFullyVisibleClass),c.progress=i?-p:p,c.originalProgress=i?-m:m}}function m1(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:s,progressLoop:l}=t;const a=o,c=s;if(r===0)i=0,o=!0,s=!0;else{i=(e-t.minTranslate())/r;const d=Math.abs(e-t.minTranslate())<1,p=Math.abs(e-t.maxTranslate())<1;o=d||i<=0,s=p||i>=1,d&&(i=0),p&&(i=1)}if(n.loop){const d=t.getSlideIndexByData(0),p=t.getSlideIndexByData(t.slides.length-1),m=t.slidesGrid[d],g=t.slidesGrid[p],v=t.slidesGrid[t.slidesGrid.length-1],w=Math.abs(e);w>=m?l=(w-m)/v:l=(w+v-g)/v,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:s}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!a&&t.emit("reachBeginning toEdge"),s&&!c&&t.emit("reachEnd toEdge"),(a&&!o||c&&!s)&&t.emit("fromEdge"),t.emit("progress",i)}const ks=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function h1(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,s=e.grid&&n.grid&&n.grid.rows>1,l=p=>ot(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];let a,c,d;if(o)if(n.loop){let p=i-e.virtual.slidesBefore;p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),a=l(`[data-swiper-slide-index="${p}"]`)}else a=l(`[data-swiper-slide-index="${i}"]`);else s?(a=t.filter(p=>p.column===i)[0],d=t.filter(p=>p.column===i+1)[0],c=t.filter(p=>p.column===i-1)[0]):a=t[i];a&&(s||(d=K0(a,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!d&&(d=t[0]),c=Q0(a,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(p=>{ks(p,p===a,n.slideActiveClass),ks(p,p===d,n.slideNextClass),ks(p,p===c,n.slidePrevClass)}),e.emitSlidesClasses()}const Di=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},Cs=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Hl=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const s=i,l=[s-t];l.push(...Array.from({length:t}).map((a,c)=>s+r+c)),e.slides.forEach((a,c)=>{l.includes(a.column)&&Cs(e,c)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let s=i-t;s<=o+t;s+=1){const l=(s%n+n)%n;(l<i||l>o)&&Cs(e,l)}else for(let s=Math.max(i-t,0);s<=Math.min(o+t,n-1);s+=1)s!==i&&(s>o||s<i)&&Cs(e,s)};function g1(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function v1(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:s,snapIndex:l}=t;let a=e,c;const d=g=>{let v=g-t.virtual.slidesBefore;return v<0&&(v=t.virtual.slides.length+v),v>=t.virtual.slides.length&&(v-=t.virtual.slides.length),v};if(typeof a>"u"&&(a=g1(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const g=Math.min(i.slidesPerGroupSkip,a);c=g+Math.floor((a-g)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),a===o&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(a===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(a);return}const p=t.grid&&i.grid&&i.grid.rows>1;let m;if(t.virtual&&i.virtual.enabled&&i.loop)m=d(a);else if(p){const g=t.slides.filter(w=>w.column===a)[0];let v=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(v)&&(v=Math.max(t.slides.indexOf(g),0)),m=Math.floor(v/i.grid.rows)}else if(t.slides[a]){const g=t.slides[a].getAttribute("data-swiper-slide-index");g?m=parseInt(g,10):m=a}else m=a;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:s,realIndex:m,previousIndex:o,activeIndex:a}),t.initialized&&Hl(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(s!==m&&t.emit("realIndexChange"),t.emit("slideChange"))}function y1(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,s;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,s=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=s;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var w1={updateSize:u1,updateSlides:c1,updateAutoHeight:d1,updateSlidesOffset:f1,updateSlidesProgress:p1,updateProgress:m1,updateSlidesClasses:h1,updateActiveIndex:v1,updateClickedSlide:y1};function x1(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let s=Y0(o,e);return s+=t.cssOverflowAdjustment(),r&&(s=-s),s||0}function S1(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:s}=n;let l=0,a=0;const c=0;n.isHorizontal()?l=r?-e:e:a=e,i.roundLengths&&(l=Math.floor(l),a=Math.floor(a)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:a,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-a:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():a-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${a}px, ${c}px)`);let d;const p=n.maxTranslate()-n.minTranslate();p===0?d=0:d=(e-n.minTranslate())/p,d!==s&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function b1(){return-this.snapGrid[0]}function E1(){return-this.snapGrid[this.snapGrid.length-1]}function k1(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const o=this,{params:s,wrapperEl:l}=o;if(o.animating&&s.preventInteractionOnTransition)return!1;const a=o.minTranslate(),c=o.maxTranslate();let d;if(r&&e>a?d=a:r&&e<c?d=c:d=e,o.updateProgress(d),s.cssMode){const p=o.isHorizontal();if(t===0)l[p?"scrollLeft":"scrollTop"]=-d;else{if(!o.support.smoothScroll)return $p({swiper:o,targetPosition:-d,side:p?"left":"top"}),!0;l.scrollTo({[p?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(d),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(m){!o||o.destroyed||m.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var C1={getTranslate:x1,setTranslate:S1,minTranslate:b1,maxTranslate:E1,translateTo:k1};function A1(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Yp(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:o,previousIndex:s}=t;let l=r;if(l||(o>s?l="next":o<s?l="prev":l="reset"),t.emit(`transition${i}`),n&&o!==s){if(l==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),l==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function T1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Yp({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function P1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Yp({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var N1={setTransition:A1,transitionStart:T1,transitionEnd:P1};function z1(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;let s=e;s<0&&(s=0);const{params:l,snapGrid:a,slidesGrid:c,previousIndex:d,activeIndex:p,rtlTranslate:m,wrapperEl:g,enabled:v}=o;if(!v&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const w=Math.min(o.params.slidesPerGroupSkip,s);let C=w+Math.floor((s-w)/o.params.slidesPerGroup);C>=a.length&&(C=a.length-1);const u=-a[C];if(l.normalizeSlideIndex)for(let h=0;h<c.length;h+=1){const x=-Math.floor(u*100),E=Math.floor(c[h]*100),T=Math.floor(c[h+1]*100);typeof c[h+1]<"u"?x>=E&&x<T-(T-E)/2?s=h:x>=E&&x<T&&(s=h+1):x>=E&&(s=h)}if(o.initialized&&s!==p&&(!o.allowSlideNext&&(m?u>o.translate&&u>o.minTranslate():u<o.translate&&u<o.minTranslate())||!o.allowSlidePrev&&u>o.translate&&u>o.maxTranslate()&&(p||0)!==s))return!1;s!==(d||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(u);let f;if(s>p?f="next":s<p?f="prev":f="reset",m&&-u===o.translate||!m&&u===o.translate)return o.updateActiveIndex(s),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(u),f!=="reset"&&(o.transitionStart(n,f),o.transitionEnd(n,f)),!1;if(l.cssMode){const h=o.isHorizontal(),x=m?u:-u;if(t===0){const E=o.virtual&&o.params.virtual.enabled;E&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),E&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[h?"scrollLeft":"scrollTop"]=x})):g[h?"scrollLeft":"scrollTop"]=x,E&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1})}else{if(!o.support.smoothScroll)return $p({swiper:o,targetPosition:x,side:h?"left":"top"}),!0;g.scrollTo({[h?"left":"top"]:x,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(u),o.updateActiveIndex(s),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,f),t===0?o.transitionEnd(n,f):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(x){!o||o.destroyed||x.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,f))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function I1(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let s=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)s=s+i.virtual.slidesBefore;else{let l;if(o){const m=s*i.params.grid.rows;l=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===m)[0].column}else l=i.getSlideIndexByData(s);const a=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c}=i.params;let d=i.params.slidesPerView;d==="auto"?d=i.slidesPerViewDynamic():(d=Math.ceil(parseFloat(i.params.slidesPerView,10)),c&&d%2===0&&(d=d+1));let p=a-l<d;if(c&&(p=p||l<Math.ceil(d/2)),r&&c&&i.params.slidesPerView!=="auto"&&!o&&(p=!1),p){const m=c?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:m,slideTo:!0,activeSlideIndex:m==="next"?l+1:l-a+1,slideRealIndex:m==="next"?i.realIndex:void 0})}if(o){const m=s*i.params.grid.rows;s=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===m)[0].column}else s=i.getSlideIndexByData(s)}return requestAnimationFrame(()=>{i.slideTo(s,t,n,r)}),i}function M1(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:o,animating:s}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const a=r.activeIndex<o.slidesPerGroupSkip?1:l,c=r.virtual&&o.virtual.enabled;if(o.loop){if(s&&!c&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+a,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+a,e,t,n)}function L1(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:o,slidesGrid:s,rtlTranslate:l,enabled:a,animating:c}=r;if(!a||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const d=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!d&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=l?r.translate:-r.translate;function m(u){return u<0?-Math.floor(Math.abs(u)):Math.floor(u)}const g=m(p),v=o.map(u=>m(u));let w=o[v.indexOf(g)-1];if(typeof w>"u"&&i.cssMode){let u;o.forEach((f,h)=>{g>=f&&(u=h)}),typeof u<"u"&&(w=o[u>0?u-1:u])}let C=0;if(typeof w<"u"&&(C=s.indexOf(w),C<0&&(C=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(C=C-r.slidesPerViewDynamic("previous",!0)+1,C=Math.max(C,0))),i.rewind&&r.isBeginning){const u=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(u,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(C,e,t,n)}),!0;return r.slideTo(C,e,t,n)}function O1(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function _1(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const s=Math.min(i.params.slidesPerGroupSkip,o),l=s+Math.floor((o-s)/i.params.slidesPerGroup),a=i.rtlTranslate?i.translate:-i.translate;if(a>=i.snapGrid[l]){const c=i.snapGrid[l],d=i.snapGrid[l+1];a-c>(d-c)*r&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[l-1],d=i.snapGrid[l];a-c<=(d-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function j1(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,o;const s=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(ot(n,`${s}[data-swiper-slide-index="${o}"]`)[0]),Vl(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(ot(n,`${s}[data-swiper-slide-index="${o}"]`)[0]),Vl(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var F1={slideTo:z1,slideToLoop:I1,slideNext:M1,slidePrev:L1,slideReset:O1,slideToClosest:_1,slideToClickedSlide:j1};function D1(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{ot(r,`.${n.slideClass}, swiper-slide`).forEach((p,m)=>{p.setAttribute("data-swiper-slide-index",m)})},o=t.grid&&n.grid&&n.grid.rows>1,s=n.slidesPerGroup*(o?n.grid.rows:1),l=t.slides.length%s!==0,a=o&&t.slides.length%n.grid.rows!==0,c=d=>{for(let p=0;p<d;p+=1){const m=t.isElement?Xr("swiper-slide",[n.slideBlankClass]):Xr("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(m)}};if(l){if(n.loopAddBlankSlides){const d=s-t.slides.length%s;c(d),t.recalcSlides(),t.updateSlides()}else mo("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(a){if(n.loopAddBlankSlides){const d=n.grid.rows-t.slides.length%n.grid.rows;c(d),t.recalcSlides(),t.updateSlides()}else mo("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function R1(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:o,byController:s,byMousewheel:l}=e===void 0?{}:e;const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:p,slidesEl:m,params:g}=a,{centeredSlides:v}=g;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&g.virtual.enabled){n&&(!g.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):g.centeredSlides&&a.snapIndex<g.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=d,a.allowSlideNext=p,a.emit("loopFix");return}let w=g.slidesPerView;w==="auto"?w=a.slidesPerViewDynamic():(w=Math.ceil(parseFloat(g.slidesPerView,10)),v&&w%2===0&&(w=w+1));const C=g.slidesPerGroupAuto?w:g.slidesPerGroup;let u=C;u%C!==0&&(u+=C-u%C),u+=g.loopAdditionalSlides,a.loopedSlides=u;const f=a.grid&&g.grid&&g.grid.rows>1;c.length<w+u?mo("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):f&&g.grid.fill==="row"&&mo("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const h=[],x=[];let E=a.activeIndex;typeof o>"u"?o=a.getSlideIndex(c.filter(N=>N.classList.contains(g.slideActiveClass))[0]):E=o;const T=r==="next"||!r,z=r==="prev"||!r;let A=0,M=0;const b=f?Math.ceil(c.length/g.grid.rows):c.length,k=(f?c[o].column:o)+(v&&typeof i>"u"?-w/2+.5:0);if(k<u){A=Math.max(u-k,C);for(let N=0;N<u-k;N+=1){const D=N-Math.floor(N/b)*b;if(f){const $=b-D-1;for(let se=c.length-1;se>=0;se-=1)c[se].column===$&&h.push(se)}else h.push(b-D-1)}}else if(k+w>b-u){M=Math.max(k-(b-u*2),C);for(let N=0;N<M;N+=1){const D=N-Math.floor(N/b)*b;f?c.forEach(($,se)=>{$.column===D&&x.push(se)}):x.push(D)}}if(a.__preventObserver__=!0,requestAnimationFrame(()=>{a.__preventObserver__=!1}),z&&h.forEach(N=>{c[N].swiperLoopMoveDOM=!0,m.prepend(c[N]),c[N].swiperLoopMoveDOM=!1}),T&&x.forEach(N=>{c[N].swiperLoopMoveDOM=!0,m.append(c[N]),c[N].swiperLoopMoveDOM=!1}),a.recalcSlides(),g.slidesPerView==="auto"?a.updateSlides():f&&(h.length>0&&z||x.length>0&&T)&&a.slides.forEach((N,D)=>{a.grid.updateSlide(D,N,a.slides)}),g.watchSlidesProgress&&a.updateSlidesOffset(),n){if(h.length>0&&z){if(typeof t>"u"){const N=a.slidesGrid[E],$=a.slidesGrid[E+A]-N;l?a.setTranslate(a.translate-$):(a.slideTo(E+Math.ceil(A),0,!1,!0),i&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-$,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-$))}else if(i){const N=f?h.length/g.grid.rows:h.length;a.slideTo(a.activeIndex+N,0,!1,!0),a.touchEventsData.currentTranslate=a.translate}}else if(x.length>0&&T)if(typeof t>"u"){const N=a.slidesGrid[E],$=a.slidesGrid[E-M]-N;l?a.setTranslate(a.translate-$):(a.slideTo(E-M,0,!1,!0),i&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-$,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-$))}else{const N=f?x.length/g.grid.rows:x.length;a.slideTo(a.activeIndex-N,0,!1,!0)}}if(a.allowSlidePrev=d,a.allowSlideNext=p,a.controller&&a.controller.control&&!s){const N={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(D=>{!D.destroyed&&D.params.loop&&D.loopFix({...N,slideTo:D.params.slidesPerView===g.slidesPerView?n:!1})}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix({...N,slideTo:a.controller.control.params.slidesPerView===g.slidesPerView?n:!1})}a.emit("loopFix")}function B1(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var V1={loopCreate:D1,loopFix:R1,loopDestroy:B1};function $1(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function H1(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var G1={setGrabCursor:$1,unsetGrabCursor:H1};function U1(e,t){t===void 0&&(t=this);function n(r){if(!r||r===tr()||r===De())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Bc(e,t,n){const r=De(),{params:i}=e,o=i.edgeSwipeDetection,s=i.edgeSwipeThreshold;return o&&(n<=s||n>=r.innerWidth-s)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function W1(e){const t=this,n=tr();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Bc(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:s,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let a=r.target;if(o.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(a)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",d=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&d&&(a=d[0]);const p=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,m=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(m?U1(p,a):a.closest(p))){t.allowClick=!0;return}if(o.swipeHandler&&!a.closest(o.swipeHandler))return;s.currentX=r.pageX,s.currentY=r.pageY;const g=s.currentX,v=s.currentY;if(!Bc(t,r,g))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=g,s.startY=v,i.touchStartTime=po(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let w=!0;a.matches(i.focusableElements)&&(w=!1,a.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==a&&n.activeElement.blur();const C=w&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||C)&&!a.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function Y1(e){const t=tr(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:s,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let a=e;if(a.originalEvent&&(a=a.originalEvent),a.type==="pointermove"&&(r.touchId!==null||a.pointerId!==r.pointerId))return;let c;if(a.type==="touchmove"){if(c=[...a.changedTouches].filter(T=>T.identifier===r.touchId)[0],!c||c.identifier!==r.touchId)return}else c=a;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",a);return}const d=c.pageX,p=c.pageY;if(a.preventedByNestedSwiper){o.startX=d,o.startY=p;return}if(!n.allowTouchMove){a.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:d,startY:p,currentX:d,currentY:p}),r.touchStartTime=po());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(p<o.startY&&n.translate<=n.maxTranslate()||p>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(d<o.startX&&n.translate<=n.maxTranslate()||d>o.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&a.target===t.activeElement&&a.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",a),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=d,o.currentY=p;const m=o.currentX-o.startX,g=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(m**2+g**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let T;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:m*m+g*g>=25&&(T=Math.atan2(Math.abs(g),Math.abs(m))*180/Math.PI,r.isScrolling=n.isHorizontal()?T>i.touchAngle:90-T>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",a),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||a.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&a.cancelable&&a.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&a.stopPropagation();let v=n.isHorizontal()?m:g,w=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(v=Math.abs(v)*(s?1:-1),w=Math.abs(w)*(s?1:-1)),o.diff=v,v*=i.touchRatio,s&&(v=-v,w=-w);const C=n.touchesDirection;n.swipeDirection=v>0?"prev":"next",n.touchesDirection=w>0?"prev":"next";const u=n.params.loop&&!i.cssMode,f=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(u&&f&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(T)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",a)}let h;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&C!==n.touchesDirection&&u&&f&&Math.abs(v)>=1){Object.assign(o,{startX:d,startY:p,currentX:d,currentY:p,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",a),r.isMoved=!0,r.currentTranslate=v+r.startTranslate;let x=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),v>0?(u&&f&&!h&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(x=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+v)**E))):v<0&&(u&&f&&!h&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(x=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-v)**E))),x&&(a.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(v)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function X1(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(E=>E.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:s,touches:l,rtlTranslate:a,slidesGrid:c,enabled:d}=t;if(!d||!s.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}s.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const p=po(),m=p-n.touchStartTime;if(t.allowClick){const E=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(E&&E[0]||r.target,E),t.emit("tap click",r),m<300&&p-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=po(),Vl(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let g;if(s.followFinger?g=a?t.translate:-t.translate:g=-n.currentTranslate,s.cssMode)return;if(s.freeMode&&s.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:g});return}const v=g>=-t.maxTranslate()&&!t.params.loop;let w=0,C=t.slidesSizesGrid[0];for(let E=0;E<c.length;E+=E<s.slidesPerGroupSkip?1:s.slidesPerGroup){const T=E<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;typeof c[E+T]<"u"?(v||g>=c[E]&&g<c[E+T])&&(w=E,C=c[E+T]-c[E]):(v||g>=c[E])&&(w=E,C=c[c.length-1]-c[c.length-2])}let u=null,f=null;s.rewind&&(t.isBeginning?f=s.virtual&&s.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(u=0));const h=(g-c[w])/C,x=w<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(m>s.longSwipesMs){if(!s.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(h>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?u:w+x):t.slideTo(w)),t.swipeDirection==="prev"&&(h>1-s.longSwipesRatio?t.slideTo(w+x):f!==null&&h<0&&Math.abs(h)>s.longSwipesRatio?t.slideTo(f):t.slideTo(w))}else{if(!s.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(w+x):t.slideTo(w):(t.swipeDirection==="next"&&t.slideTo(u!==null?u:w+x),t.swipeDirection==="prev"&&t.slideTo(f!==null?f:w))}}function Vc(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,s=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=s&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!s?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function Q1(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function K1(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function q1(e){const t=this;Di(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function Z1(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Xp=(e,t)=>{const n=tr(),{params:r,el:i,wrapperEl:o,device:s}=e,l=!!r.nested,a=t==="on"?"addEventListener":"removeEventListener",c=t;!i||typeof i=="string"||(n[a]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[a]("touchstart",e.onTouchStart,{passive:!1}),i[a]("pointerdown",e.onTouchStart,{passive:!1}),n[a]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[a]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[a]("touchend",e.onTouchEnd,{passive:!0}),n[a]("pointerup",e.onTouchEnd,{passive:!0}),n[a]("pointercancel",e.onTouchEnd,{passive:!0}),n[a]("touchcancel",e.onTouchEnd,{passive:!0}),n[a]("pointerout",e.onTouchEnd,{passive:!0}),n[a]("pointerleave",e.onTouchEnd,{passive:!0}),n[a]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[a]("click",e.onClick,!0),r.cssMode&&o[a]("scroll",e.onScroll),r.updateOnWindowResize?e[c](s.ios||s.android?"resize orientationchange observerUpdate":"resize observerUpdate",Vc,!0):e[c]("observerUpdate",Vc,!0),i[a]("load",e.onLoad,{capture:!0}))};function J1(){const e=this,{params:t}=e;e.onTouchStart=W1.bind(e),e.onTouchMove=Y1.bind(e),e.onTouchEnd=X1.bind(e),e.onDocumentTouchStart=Z1.bind(e),t.cssMode&&(e.onScroll=K1.bind(e)),e.onClick=Q1.bind(e),e.onLoad=q1.bind(e),Xp(e,"on")}function ey(){Xp(this,"off")}var ty={attachEvents:J1,detachEvents:ey};const $c=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function ny(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const s=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!s||e.currentBreakpoint===s)return;const a=(s in o?o[s]:void 0)||e.originalParams,c=$c(e,r),d=$c(e,a),p=e.params.grabCursor,m=a.grabCursor,g=r.enabled;c&&!d?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&d&&(i.classList.add(`${r.containerModifierClass}grid`),(a.grid.fill&&a.grid.fill==="column"||!a.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!m?e.unsetGrabCursor():!p&&m&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(h=>{if(typeof a[h]>"u")return;const x=r[h]&&r[h].enabled,E=a[h]&&a[h].enabled;x&&!E&&e[h].disable(),!x&&E&&e[h].enable()});const v=a.direction&&a.direction!==r.direction,w=r.loop&&(a.slidesPerView!==r.slidesPerView||v),C=r.loop;v&&n&&e.changeDirection(),Ne(e.params,a);const u=e.params.enabled,f=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),g&&!u?e.disable():!g&&u&&e.enable(),e.currentBreakpoint=s,e.emit("_beforeBreakpoint",a),n&&(w?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!C&&f?(e.loopCreate(t),e.updateSlides()):C&&!f&&e.loopDestroy()),e.emit("breakpoint",a)}function ry(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=De(),o=t==="window"?i.innerHeight:n.clientHeight,s=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const a=parseFloat(l.substr(1));return{value:o*a,point:l}}return{value:l,point:l}});s.sort((l,a)=>parseInt(l.value,10)-parseInt(a.value,10));for(let l=0;l<s.length;l+=1){const{point:a,value:c}=s[l];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=a):c<=n.clientWidth&&(r=a)}return r||"max"}var iy={setBreakpoint:ny,getBreakpoint:ry};function oy(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function sy(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,s=oy(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...s),i.classList.add(...t),e.emitContainerClasses()}function ly(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var ay={addClasses:sy,removeClasses:ly};function uy(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var cy={checkOverflow:uy},Gl={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function dy(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Ne(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Ne(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Ne(t,r)}}const As={eventsEmitter:a1,update:w1,translate:C1,transition:N1,slide:F1,loop:V1,grabCursor:G1,events:ty,breakpoints:iy,checkOverflow:cy,classes:ay},Ts={};let eu=class ut{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=Ne({},n),t&&!n.el&&(n.el=t);const s=tr();if(n.el&&typeof n.el=="string"&&s.querySelectorAll(n.el).length>1){const d=[];return s.querySelectorAll(n.el).forEach(p=>{const m=Ne({},n,{el:p});d.push(new ut(m))}),d}const l=this;l.__swiper__=!0,l.support=Up(),l.device=Wp({userAgent:n.userAgent}),l.browser=o1(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],n.modules&&Array.isArray(n.modules)&&l.modules.push(...n.modules);const a={};l.modules.forEach(d=>{d({params:n,swiper:l,extendParams:dy(n,a),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const c=Ne({},Gl,a);return l.params=Ne({},c,Ts,n),l.originalParams=Ne({},l.params),l.passedParams=Ne({},n),l.params&&l.params.on&&Object.keys(l.params.on).forEach(d=>{l.on(d,l.params.on[d])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=ot(n,`.${r.slideClass}, swiper-slide`),o=ho(i[0]);return ho(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=ot(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),s=(r.maxTranslate()-i)*t+i;r.translateTo(s,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:o,slidesGrid:s,slidesSizesGrid:l,size:a,activeIndex:c}=r;let d=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let p=o[c]?Math.ceil(o[c].swiperSlideSize):0,m;for(let g=c+1;g<o.length;g+=1)o[g]&&!m&&(p+=Math.ceil(o[g].swiperSlideSize),d+=1,p>a&&(m=!0));for(let g=c-1;g>=0;g-=1)o[g]&&!m&&(p+=o[g].swiperSlideSize,d+=1,p>a&&(m=!0))}else if(t==="current")for(let p=c+1;p<o.length;p+=1)(n?s[p]+l[p]-s[c]<a:s[p]-s[c]<a)&&(d+=1);else for(let p=c-1;p>=0;p-=1)s[c]-s[p]<a&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(s=>{s.complete&&Di(t,s)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const s=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(s,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const s=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(s.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):ot(r,i())[0];return!s&&n.params.createElements&&(s=Xr("div",n.params.wrapperClass),r.append(s),ot(r,`.${n.params.slideClass}`).forEach(l=>{s.append(l)})),Object.assign(n,{el:r,wrapperEl:s,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:s,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Mt(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Mt(r,"direction")==="rtl"),wrongRTL:Mt(s,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Di(n,o):o.addEventListener("load",s=>{Di(n,s.target)})}),Hl(n),n.initialized=!0,Hl(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:o,wrapperEl:s,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),s&&s.removeAttribute("style"),l&&l.length&&l.forEach(a=>{a.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(a=>{r.off(a)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),U0(r)),r.destroyed=!0),null}static extendDefaults(t){Ne(Ts,t)}static get extendedDefaults(){return Ts}static get defaults(){return Gl}static installModule(t){ut.prototype.__modules__||(ut.prototype.__modules__=[]);const n=ut.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>ut.installModule(n)),ut):(ut.installModule(t),ut)}};Object.keys(As).forEach(e=>{Object.keys(As[e]).forEach(t=>{eu.prototype[t]=As[e][t]})});eu.use([s1,l1]);const Qp=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function hn(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Bn(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:hn(t[r])&&hn(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Bn(e[r],t[r]):e[r]=t[r]})}function Kp(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function qp(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function Zp(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Jp(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function fy(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function py(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:o,prevEl:s,scrollbarEl:l,paginationEl:a}=e;const c=i.filter(M=>M!=="children"&&M!=="direction"&&M!=="wrapperClass"),{params:d,pagination:p,navigation:m,scrollbar:g,virtual:v,thumbs:w}=t;let C,u,f,h,x,E,T,z;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(C=!0),i.includes("controller")&&r.controller&&r.controller.control&&d.controller&&!d.controller.control&&(u=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||a)&&(d.pagination||d.pagination===!1)&&p&&!p.el&&(f=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||l)&&(d.scrollbar||d.scrollbar===!1)&&g&&!g.el&&(h=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||s)&&(r.navigation.nextEl||o)&&(d.navigation||d.navigation===!1)&&m&&!m.prevEl&&!m.nextEl&&(x=!0);const A=M=>{t[M]&&(t[M].destroy(),M==="navigation"?(t.isElement&&(t[M].prevEl.remove(),t[M].nextEl.remove()),d[M].prevEl=void 0,d[M].nextEl=void 0,t[M].prevEl=void 0,t[M].nextEl=void 0):(t.isElement&&t[M].el.remove(),d[M].el=void 0,t[M].el=void 0))};i.includes("loop")&&t.isElement&&(d.loop&&!r.loop?E=!0:!d.loop&&r.loop?T=!0:z=!0),c.forEach(M=>{if(hn(d[M])&&hn(r[M]))Object.assign(d[M],r[M]),(M==="navigation"||M==="pagination"||M==="scrollbar")&&"enabled"in r[M]&&!r[M].enabled&&A(M);else{const b=r[M];(b===!0||b===!1)&&(M==="navigation"||M==="pagination"||M==="scrollbar")?b===!1&&A(M):d[M]=r[M]}}),c.includes("controller")&&!u&&t.controller&&t.controller.control&&d.controller&&d.controller.control&&(t.controller.control=d.controller.control),i.includes("children")&&n&&v&&d.virtual.enabled?(v.slides=n,v.update(!0)):i.includes("virtual")&&v&&d.virtual.enabled&&(n&&(v.slides=n),v.update(!0)),i.includes("children")&&n&&d.loop&&(z=!0),C&&w.init()&&w.update(!0),u&&(t.controller.control=d.controller.control),f&&(t.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),a.part.add("pagination"),t.el.appendChild(a)),a&&(d.pagination.el=a),p.init(),p.render(),p.update()),h&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-scrollbar"),l.part.add("scrollbar"),t.el.appendChild(l)),l&&(d.scrollbar.el=l),g.init(),g.updateSize(),g.setTranslate()),x&&(t.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),o.innerHTML=t.hostEl.constructor.nextButtonSvg,o.part.add("button-next"),t.el.appendChild(o)),(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-prev"),s.innerHTML=t.hostEl.constructor.prevButtonSvg,s.part.add("button-prev"),t.el.appendChild(s))),o&&(d.navigation.nextEl=o),s&&(d.navigation.prevEl=s),m.init(),m.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(E||z)&&t.loopDestroy(),(T||z)&&t.loopCreate(),t.update()}function my(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};Bn(n,Gl),n._emitClasses=!0,n.init=!1;const o={},s=Qp.map(a=>a.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(a=>{typeof e[a]>"u"||(s.indexOf(a)>=0?hn(e[a])?(n[a]={},i[a]={},Bn(n[a],e[a]),Bn(i[a],e[a])):(n[a]=e[a],i[a]=e[a]):a.search(/on[A-Z]/)===0&&typeof e[a]=="function"?t?r[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:n.on[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:o[a]=e[a])}),["navigation","pagination","scrollbar"].forEach(a=>{n[a]===!0&&(n[a]={}),n[a]===!1&&delete n[a]}),{params:n,passedParams:i,rest:o,events:r}}function hy(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:o,scrollbarEl:s,swiper:l}=e;Kp(t)&&r&&i&&(l.params.navigation.nextEl=r,l.originalParams.navigation.nextEl=r,l.params.navigation.prevEl=i,l.originalParams.navigation.prevEl=i),qp(t)&&o&&(l.params.pagination.el=o,l.originalParams.pagination.el=o),Zp(t)&&s&&(l.params.scrollbar.el=s,l.originalParams.scrollbar.el=s),l.init(n)}function gy(e,t,n,r,i){const o=[];if(!t)return o;const s=a=>{o.indexOf(a)<0&&o.push(a)};if(n&&r){const a=r.map(i),c=n.map(i);a.join("")!==c.join("")&&s("children"),r.length!==n.length&&s("children")}return Qp.filter(a=>a[0]==="_").map(a=>a.replace(/_/,"")).forEach(a=>{if(a in e&&a in t)if(hn(e[a])&&hn(t[a])){const c=Object.keys(e[a]),d=Object.keys(t[a]);c.length!==d.length?s(a):(c.forEach(p=>{e[a][p]!==t[a][p]&&s(a)}),d.forEach(p=>{e[a][p]!==t[a][p]&&s(a)}))}else e[a]!==t[a]&&s(a)}),o}const vy=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function go(){return go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},go.apply(this,arguments)}function em(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function tm(e){const t=[];return W.Children.toArray(e).forEach(n=>{em(n)?t.push(n):n.props&&n.props.children&&tm(n.props.children).forEach(r=>t.push(r))}),t}function yy(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return W.Children.toArray(e).forEach(r=>{if(em(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=tm(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function wy(e,t,n){if(!n)return null;const r=d=>{let p=d;return d<0?p=t.length+d:p>=t.length&&(p=p-t.length),p},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:s}=n,l=e.params.loop?-t.length:0,a=e.params.loop?t.length*2:t.length,c=[];for(let d=l;d<a;d+=1)d>=o&&d<=s&&c.push(t[r(d)]);return c.map((d,p)=>W.cloneElement(d,{swiper:e,style:i,key:d.props.virtualIndex||d.key||`slide-${p}`}))}function Pr(e,t){return typeof window>"u"?P.useEffect(e,t):P.useLayoutEffect(e,t)}const Hc=P.createContext(null),xy=P.createContext(null),nm=P.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:o,onSwiper:s,...l}=e===void 0?{}:e,a=!1;const[c,d]=P.useState("swiper"),[p,m]=P.useState(null),[g,v]=P.useState(!1),w=P.useRef(!1),C=P.useRef(null),u=P.useRef(null),f=P.useRef(null),h=P.useRef(null),x=P.useRef(null),E=P.useRef(null),T=P.useRef(null),z=P.useRef(null),{params:A,passedParams:M,rest:b,events:S}=my(l),{slides:k,slots:N}=yy(o),D=()=>{v(!g)};Object.assign(A.on,{_containerClasses(j,F){d(F)}});const $=()=>{Object.assign(A.on,S),a=!0;const j={...A};if(delete j.wrapperClass,u.current=new eu(j),u.current.virtual&&u.current.params.virtual.enabled){u.current.virtual.slides=k;const F={cache:!1,slides:k,renderExternal:m,renderExternalUpdate:!1};Bn(u.current.params.virtual,F),Bn(u.current.originalParams.virtual,F)}};C.current||$(),u.current&&u.current.on("_beforeBreakpoint",D);const se=()=>{a||!S||!u.current||Object.keys(S).forEach(j=>{u.current.on(j,S[j])})},Re=()=>{!S||!u.current||Object.keys(S).forEach(j=>{u.current.off(j,S[j])})};P.useEffect(()=>()=>{u.current&&u.current.off("_beforeBreakpoint",D)}),P.useEffect(()=>{!w.current&&u.current&&(u.current.emitSlidesClasses(),w.current=!0)}),Pr(()=>{if(t&&(t.current=C.current),!!C.current)return u.current.destroyed&&$(),hy({el:C.current,nextEl:x.current,prevEl:E.current,paginationEl:T.current,scrollbarEl:z.current,swiper:u.current},A),s&&!u.current.destroyed&&s(u.current),()=>{u.current&&!u.current.destroyed&&u.current.destroy(!0,!1)}},[]),Pr(()=>{se();const j=gy(M,f.current,k,h.current,F=>F.key);return f.current=M,h.current=k,j.length&&u.current&&!u.current.destroyed&&py({swiper:u.current,slides:k,passedParams:M,changedParams:j,nextEl:x.current,prevEl:E.current,scrollbarEl:z.current,paginationEl:T.current}),()=>{Re()}}),Pr(()=>{vy(u.current)},[p]);function L(){return A.virtual?wy(u.current,k,p):k.map((j,F)=>W.cloneElement(j,{swiper:u.current,swiperSlideIndex:F}))}return W.createElement(r,go({ref:C,className:Jp(`${c}${n?` ${n}`:""}`)},b),W.createElement(xy.Provider,{value:u.current},N["container-start"],W.createElement(i,{className:fy(A.wrapperClass)},N["wrapper-start"],L(),N["wrapper-end"]),Kp(A)&&W.createElement(W.Fragment,null,W.createElement("div",{ref:E,className:"swiper-button-prev"}),W.createElement("div",{ref:x,className:"swiper-button-next"})),Zp(A)&&W.createElement("div",{ref:z,className:"swiper-scrollbar"}),qp(A)&&W.createElement("div",{ref:T,className:"swiper-pagination"}),N["container-end"]))});nm.displayName="Swiper";const Ul=P.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:o,zoom:s,lazy:l,virtualIndex:a,swiperSlideIndex:c,...d}=e===void 0?{}:e;const p=P.useRef(null),[m,g]=P.useState("swiper-slide"),[v,w]=P.useState(!1);function C(x,E,T){E===p.current&&g(T)}Pr(()=>{if(typeof c<"u"&&(p.current.swiperSlideIndex=c),t&&(t.current=p.current),!(!p.current||!o)){if(o.destroyed){m!=="swiper-slide"&&g("swiper-slide");return}return o.on("_slideClass",C),()=>{o&&o.off("_slideClass",C)}}}),Pr(()=>{o&&p.current&&!o.destroyed&&g(o.getSlideClasses(p.current))},[o]);const u={isActive:m.indexOf("swiper-slide-active")>=0,isVisible:m.indexOf("swiper-slide-visible")>=0,isPrev:m.indexOf("swiper-slide-prev")>=0,isNext:m.indexOf("swiper-slide-next")>=0},f=()=>typeof r=="function"?r(u):r,h=()=>{w(!0)};return W.createElement(n,go({ref:p,className:Jp(`${m}${i?` ${i}`:""}`),"data-swiper-slide-index":a,onLoad:h},d),s&&W.createElement(Hc.Provider,{value:u},W.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof s=="number"?s:void 0},f(),l&&!v&&W.createElement("div",{className:"swiper-lazy-preloader"}))),!s&&W.createElement(Hc.Provider,{value:u},f(),l&&!v&&W.createElement("div",{className:"swiper-lazy-preloader"})))});Ul.displayName="SwiperSlide";const Sy=()=>y.jsx("div",{className:"video-container123 skeleton-container",children:y.jsx("div",{className:"carousel-div123",children:y.jsx("p",{className:"txt2-123"})})}),by=({campaigns:e,loading:t,widgetsDiv:n})=>{const r=P.useRef(null);P.useRef([]),P.useState(!1);const[i,o]=P.useState(null),[s,l]=P.useState(!1),[a,c]=P.useState(!0),[d,p]=P.useState(null),m=u=>{o(u)},g=()=>{o(null)},v=()=>{r.current.scrollBy({left:-r.current.clientWidth,behavior:"smooth"})},w=()=>{r.current.scrollBy({left:r.current.clientWidth,behavior:"smooth"})},C=()=>{const u=r.current.scrollLeft,f=r.current.scrollWidth-r.current.clientWidth;l(u>70),c(u<f-70)};return P.useEffect(()=>{const u=r.current;return u.addEventListener("scroll",C),C(),()=>{u.removeEventListener("scroll",C)}},[]),y.jsx(y.Fragment,{children:y.jsxs("div",{className:"container",children:[y.jsx("style",{children:`
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
`}),y.jsx(nm,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:0,stretch:0,depth:100,modifier:2.5},modules:[t1,Z0,q0],className:"swiper_container",children:t?Array.from({length:5}).map((u,f)=>y.jsx(Ul,{children:y.jsx(Sy,{})},f)):e.map((u,f)=>y.jsx(Ul,{onClick:()=>m(f),children:y.jsxs("div",{className:"video-container123",children:[y.jsx("div",{className:"inner-video-container123",onMouseEnter:()=>p(f),onMouseLeave:()=>p(null)}),d===f?y.jsx("video",{src:u.videoId[0],loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"}):y.jsx("img",{className:"thumbnail",src:u.campaignPhoto,width:"300",height:"200",alt:"video thumbnail"}),n?y.jsxs("div",{className:"widgetsDivBookdiv123",children:[y.jsx("div",{className:"img1 widgetsDivImg1",children:y.jsx("img",{className:"img widgetsDivImg",src:u.campaignPhoto,alt:"Campaign"})}),y.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[y.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname widgetsDivHotelname",children:u.campaignName}),y.jsx("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer"}),y.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"widgetsDivOfferprice",children:["From ",u.offerPrice.currency,u.offerPrice.price]})]}),y.jsx("div",{className:"divbtn",children:y.jsx("a",{href:u.hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn widgetsDivBookbtn",children:"Book"})})]}):y.jsx("div",{className:"carousel-div123",children:y.jsxs("p",{className:"txt2-123",children:[u.campaignName," ",y.jsx("br",{})," From"," ",u.offerPrice.currency,u.offerPrice.price]})})]})},f))}),s&&y.jsx("button",{className:"nav-btn123",onClick:v,children:"<"}),y.jsx("div",{className:"carousel",ref:r}),a&&y.jsx("button",{className:"nav-btn123",onClick:w,children:">"}),i!==null&&y.jsx(Ey,{campaigns:e,currentIndex:i,onClose:g})]})})},Ey=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=P.useState(t),[o,s]=P.useState(0),[l,a]=P.useState({mutedAll:!1}),[c,d]=P.useState(!1),[p,m]=P.useState(!1),[g,v]=P.useState(!1),[w,C]=P.useState(!1),u=P.useRef([]);P.useRef(null);const f=P.useRef(null);P.useEffect(()=>{const b=()=>{if(document.visibilityState==="hidden"){const S=u.current[o];S&&!S.paused&&(S.pause(),d(!0),C(!0))}};return document.addEventListener("visibilitychange",b),()=>{document.removeEventListener("visibilitychange",b)}},[o]),P.useEffect(()=>{const b=new IntersectionObserver(S=>{S.forEach(k=>{const N=u.current.indexOf(k.target);k.isIntersecting?(k.target.play(),s(N),C(!1)):k.target.pause()})},{threshold:.5});return s(0),u.current.forEach(S=>{S&&b.observe(S)}),()=>{u.current.forEach(S=>{S&&b.unobserve(S)})}},[r]),P.useEffect(()=>{const b=u.current[o];b&&b.play()},[o]);const h=()=>{r!==null?r+1<e.length?(i(r+1),s(0)):(i(0),s(0)):e.length>0&&(i(0),s(0)),m(!1)},x=()=>{r!==null?r>0?(i(r-1),s(0)):(i(e.length-1),s(0)):e.length>0&&(i(e.length-1),s(0)),m(!1)},E=b=>{const S=u.current[b];S&&(S.paused?(S.play(),console.log("Playing")):(S.pause(),console.log("Paused")),d(S.paused),C(S.paused))},T=()=>{u.current.forEach(S=>{S.muted=!l.mutedAll}),a(S=>({mutedAll:!S.mutedAll}))},z=()=>{v(!g)},A=b=>{const S=b.split(`
`);return S.length>2?{truncated:S.slice(0,2).join(`
`),hasMore:!0}:{truncated:b,hasMore:!1}},M=b=>{console.log("Video ended, checking if animation should play");const S=e[r];if(b<S.videoId.length-1)console.log("Not the last video, playing animation"),m(!0),setTimeout(()=>{const k=u.current[b];k&&(k.currentTime=0,k.play()),m(!1)},5e3);else{console.log("Last video, no animation, just restart");const k=u.current[b];k&&(k.currentTime=0,k.play())}};return P.useEffect(()=>{s(0),f.current&&(f.current.scrollTop=0)},[r]),P.useEffect(()=>{const b=()=>{m(!1)},S=f.current;return S&&S.addEventListener("scroll",b),()=>{S&&S.removeEventListener("scroll",b)}},[]),y.jsxs("div",{className:"whole123",children:[y.jsx("div",{className:"prevbtn123",onClick:x,children:y.jsx(ne,{icon:Fo})}),y.jsx("div",{className:"nextbtn123",onClick:h,children:y.jsx(ne,{icon:Lo})}),y.jsxs("div",{className:"reelsContainer",ref:f,children:[e[r].videoId.map((b,S)=>y.jsxs("div",{className:"reel",children:[y.jsx("div",{className:"closediv123",children:y.jsx("button",{className:"closebtn123",onClick:n,children:y.jsx(ne,{icon:jo})})}),y.jsxs("div",{className:"video-container1",children:[y.jsx("video",{ref:k=>u.current[S]=k,src:b,className:"ad",loop:!1,playsInline:!0,controls:!1,autoPlay:S===o,onClick:()=>E(S),onPause:()=>{d(!0)},onPlay:()=>{d(!1)},onEnded:()=>M(S)}),c&&w&&y.jsx(ne,{icon:Ba,onClick:()=>E(S),className:"play-button123"}),y.jsxs("div",{className:"bookdiv123",children:[y.jsx("div",{className:"img1",children:y.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),y.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[y.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),y.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[g?e[r].campaignDetails:A(e[r].campaignDetails).truncated,A(e[r].campaignDetails).hasMore&&y.jsx("div",{children:y.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:z,children:g?" View Less":" View More"})})]}),y.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[r].offerPrice.currency,e[r].offerPrice.price]})]}),y.jsx("div",{className:"divbtn",children:y.jsx("a",{href:e[r].hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]}),y.jsx("div",{className:"functions",children:y.jsx(ne,{icon:l.mutedAll?_o:Oo,className:"volume123",onClick:T,style:{cursor:"pointer"}})})]},S)),p&&y.jsx("dotlottie-player",{src:"https://lottie.host/9dbbaa88-603c-407f-a9d4-f40ef822c697/JKZJQpvfeR.json",background:"transparent",speed:"1",style:{width:"29vh",height:"29vh",position:"absolute",bottom:"0",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"34px",color:"white",zIndex:1e3},loop:!0,autoplay:!0})]})]})},ky=()=>{const[e,t]=P.useState([]),[n,r]=P.useState([]),[i,o]=P.useState(!0),[s,l]=P.useState(!1);return P.useEffect(()=>{const a=document.getElementById("root-stack"),c=a.dataset.campaignId,d=a.dataset.widgetStatus;l(d==="true"),(async m=>{try{const v=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${m}`)).json(),w=v.campaigns.map(C=>C.videoId[0]);t(w),r(v.campaigns)}catch(g){console.error("Error fetching data:",g)}})(c)},[]),P.useEffect(()=>{n.length>0&&o(!1)},[n]),y.jsxs("div",{className:"App",children:[y.jsx(by,{videos:e,campaigns:n,loading:i,widgetsDiv:s})," "]})},Cy=()=>y.jsx("div",{className:"video-container123 skeleton-container",children:y.jsx("div",{className:"video-content",children:y.jsx("p",{className:"txt2-123"})})}),Ay=({campaigns:e,loading:t,widgetsDiv:n})=>{const r=P.useRef(null);P.useRef([]);const[i,o]=P.useState(null),[s,l]=P.useState(null),a=m=>{o(m)},c=()=>{o(null)},d=()=>{r.current.scrollBy({left:-r.current.clientWidth,behavior:"smooth"})},p=()=>{r.current.scrollBy({left:r.current.clientWidth,behavior:"smooth"})};return t?y.jsx("div",{className:"carousel-container",children:y.jsx("div",{className:"carousel",children:Array.from({length:5}).map((m,g)=>y.jsx(Cy,{},g))})}):y.jsxs("div",{className:"carousel-container",children:[y.jsx("button",{className:"nav-btn",onClick:d,children:"<"}),y.jsx("div",{className:"carousel",ref:r,children:e.map((m,g)=>y.jsxs("div",{className:"video-container123",onClick:()=>a(g),onMouseEnter:()=>l(g),onMouseLeave:()=>l(null),children:[s===g?y.jsx("video",{src:m.videoId[0],loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"}):y.jsx("img",{className:"thumbnail",src:m.campaignPhoto,width:"300",height:"200",alt:"video thumbnail"}),n?y.jsxs("div",{className:"widgetsDivBookdiv123",children:[y.jsx("div",{className:"img1 widgetsDivImg1",children:y.jsx("img",{className:"img widgetsDivImg",src:m.campaignPhoto,alt:"Campaign"})}),y.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[y.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname widgetsDivHotelname",children:m.campaignName}),y.jsx("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer"}),y.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"widgetsDivOfferprice",children:["From ",m.offerPrice.currency,m.offerPrice.price]})]}),y.jsx("div",{className:"divbtn",children:y.jsx("a",{href:m.hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn widgetsDivBookbtn",children:"Book"})})]}):y.jsx("div",{className:"video-content",children:y.jsxs("p",{className:"txt",children:[e[g].campaignName," ",y.jsx("br",{})," From"," ",e[g].offerPrice.currency,e[g].offerPrice.price]})})]},g))}),y.jsx("button",{className:"nav-btn",onClick:p,children:">"}),i!==null&&y.jsx(Ty,{campaigns:e,currentIndex:i,onClose:c})]})},Ty=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=P.useState(t),[o,s]=P.useState(0),[l,a]=P.useState({mutedAll:!1}),[c,d]=P.useState(!1),[p,m]=P.useState(!1),[g,v]=P.useState(!1),[w,C]=P.useState(!1),u=P.useRef([]);P.useRef(null);const f=P.useRef(null);P.useEffect(()=>{const b=()=>{if(document.visibilityState==="hidden"){const S=u.current[o];S&&!S.paused&&(S.pause(),d(!0),C(!0))}};return document.addEventListener("visibilitychange",b),()=>{document.removeEventListener("visibilitychange",b)}},[o]),P.useEffect(()=>{const b=new IntersectionObserver(S=>{S.forEach(k=>{const N=u.current.indexOf(k.target);k.isIntersecting?(k.target.play(),s(N),C(!1)):k.target.pause()})},{threshold:.5});return s(0),u.current.forEach(S=>{S&&b.observe(S)}),()=>{u.current.forEach(S=>{S&&b.unobserve(S)})}},[r]),P.useEffect(()=>{const b=u.current[o];b&&b.play()},[o]);const h=()=>{r!==null?r+1<e.length?(i(r+1),s(0)):(i(0),s(0)):e.length>0&&(i(0),s(0)),m(!1)},x=()=>{r!==null?r>0?(i(r-1),s(0)):(i(e.length-1),s(0)):e.length>0&&(i(e.length-1),s(0)),m(!1)},E=b=>{const S=u.current[b];S&&(S.paused?(S.play(),console.log("Playing")):(S.pause(),console.log("Paused")),d(S.paused),C(S.paused))},T=()=>{u.current.forEach(S=>{S.muted=!l.mutedAll}),a(S=>({mutedAll:!S.mutedAll}))},z=()=>{v(!g)},A=b=>{const S=b.split(`
`);return S.length>2?{truncated:S.slice(0,2).join(`
`),hasMore:!0}:{truncated:b,hasMore:!1}},M=b=>{console.log("Video ended, checking if animation should play");const S=e[r];if(b<S.videoId.length-1)console.log("Not the last video, playing animation"),m(!0),setTimeout(()=>{const k=u.current[b];k&&(k.currentTime=0,k.play()),m(!1)},5e3);else{console.log("Last video, no animation, just restart");const k=u.current[b];k&&(k.currentTime=0,k.play())}};return P.useEffect(()=>{s(0),f.current&&(f.current.scrollTop=0)},[r]),P.useEffect(()=>{const b=()=>{m(!1)},S=f.current;return S&&S.addEventListener("scroll",b),()=>{S&&S.removeEventListener("scroll",b)}},[]),y.jsxs("div",{className:"whole123",children:[y.jsx("div",{className:"prevbtn123",onClick:x,children:y.jsx(ne,{icon:Fo})}),y.jsx("div",{className:"nextbtn123",onClick:h,children:y.jsx(ne,{icon:Lo})}),y.jsxs("div",{className:"reelsContainer",ref:f,children:[e[r].videoId.map((b,S)=>y.jsxs("div",{className:"reel",children:[y.jsx("div",{className:"closediv123",children:y.jsx("button",{className:"closebtn123",onClick:n,children:y.jsx(ne,{icon:jo})})}),y.jsxs("div",{className:"video-container1",children:[y.jsx("video",{ref:k=>u.current[S]=k,src:b,className:"ad",loop:!1,playsInline:!0,controls:!1,autoPlay:S===o,onClick:()=>E(S),onPause:()=>{d(!0)},onPlay:()=>{d(!1)},onEnded:()=>M(S)}),c&&w&&y.jsx(ne,{icon:Ba,onClick:()=>E(S),className:"play-button123"}),y.jsxs("div",{className:"bookdiv123",children:[y.jsx("div",{className:"img1",children:y.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),y.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[y.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),y.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[g?e[r].campaignDetails:A(e[r].campaignDetails).truncated,A(e[r].campaignDetails).hasMore&&y.jsx("div",{children:y.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:z,children:g?" View Less":" View More"})})]}),y.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[r].offerPrice.currency,e[r].offerPrice.price]})]}),y.jsx("div",{className:"divbtn",children:y.jsx("a",{href:e[r].campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]}),y.jsx("div",{className:"functions",children:y.jsx(ne,{icon:l.mutedAll?_o:Oo,className:"volume123",onClick:T,style:{cursor:"pointer"}})})]},S)),p&&y.jsx("dotlottie-player",{src:"https://lottie.host/9dbbaa88-603c-407f-a9d4-f40ef822c697/JKZJQpvfeR.json",background:"transparent",speed:"1",style:{width:"29vh",height:"29vh",position:"absolute",bottom:"0",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"34px",color:"white",zIndex:1e3},loop:!0,autoplay:!0})]})]})},Py=()=>{const[e,t]=P.useState([]),[n,r]=P.useState([]),[i,o]=P.useState(!0),[s,l]=P.useState(!1);return P.useEffect(()=>{const a=document.getElementById("root-carosole"),c=a.dataset.widgetStatus;l(c==="true");const d=a.dataset.campaignId;d?(async m=>{try{const v=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${m}`)).json(),w=v.campaigns.map(C=>C.videoId[0]);t(w),r(v.campaigns)}catch(g){console.error("Error fetching data:",g)}})(d):console.error("No campaign ID found")},[]),P.useEffect(()=>{n.length>0&&o(!1)},[n]),y.jsxs("div",{className:"App",children:[y.jsx("style",{children:`

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
  padding: 0 !important;
  background-color: rgba(255, 255, 255, 0) !important;
  text-wrap: wrap;
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
    z-index: 100;
}      
`}),y.jsx(Ay,{videos:e,campaigns:n,loading:i,widgetsDiv:s})," "]})},Ps=document.getElementById("root-stories"),Ns=document.getElementById("root-grid"),zs=document.getElementById("root-carosole"),Is=document.getElementById("root-stack");Ps&&Ps.dataset.name==="stories"&&Vn.createRoot(Ps).render(y.jsx(W.StrictMode,{children:y.jsx($0,{})}));Ns&&Ns.dataset.name==="grid"&&Vn.createRoot(Ns).render(y.jsx(W.StrictMode,{children:y.jsx(R0,{})}));zs&&zs.dataset.name==="carosole"&&Vn.createRoot(zs).render(y.jsx(W.StrictMode,{children:y.jsx(Py,{})}));Is&&Is.dataset.name==="stack"&&Vn.createRoot(Is).render(y.jsx(W.StrictMode,{children:y.jsx(ky,{})}));
