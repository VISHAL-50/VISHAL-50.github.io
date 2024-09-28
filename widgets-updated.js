(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function $c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gc={exports:{}},vo={},Hc={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qr=Symbol.for("react.element"),nm=Symbol.for("react.portal"),rm=Symbol.for("react.fragment"),im=Symbol.for("react.strict_mode"),om=Symbol.for("react.profiler"),sm=Symbol.for("react.provider"),lm=Symbol.for("react.context"),am=Symbol.for("react.forward_ref"),um=Symbol.for("react.suspense"),cm=Symbol.for("react.memo"),dm=Symbol.for("react.lazy"),Ja=Symbol.iterator;function fm(e){return e===null||typeof e!="object"?null:(e=Ja&&e[Ja]||e["@@iterator"],typeof e=="function"?e:null)}var Uc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wc=Object.assign,Yc={};function Kn(e,t,n){this.props=e,this.context=t,this.refs=Yc,this.updater=n||Uc}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xc(){}Xc.prototype=Kn.prototype;function Bl(e,t,n){this.props=e,this.context=t,this.refs=Yc,this.updater=n||Uc}var Vl=Bl.prototype=new Xc;Vl.constructor=Bl;Wc(Vl,Kn.prototype);Vl.isPureReactComponent=!0;var eu=Array.isArray,Qc=Object.prototype.hasOwnProperty,$l={current:null},Kc={key:!0,ref:!0,__self:!0,__source:!0};function qc(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Qc.call(t,r)&&!Kc.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Qr,type:e,key:o,ref:s,props:i,_owner:$l.current}}function pm(e,t){return{$$typeof:Qr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qr}function mm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var tu=/\/+/g;function Do(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mm(""+e.key):t.toString(36)}function bi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Qr:case nm:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Do(s,0):r,eu(i)?(n="",e!=null&&(n=e.replace(tu,"$&/")+"/"),bi(i,t,n,"",function(c){return c})):i!=null&&(Gl(i)&&(i=pm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(tu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",eu(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Do(o,l);s+=bi(o,t,n,a,i)}else if(a=fm(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Do(o,l++),s+=bi(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function ii(e,t,n){if(e==null)return e;var r=[],i=0;return bi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function hm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Ci={transition:null},gm={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Ci,ReactCurrentOwner:$l};function Zc(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:ii,forEach:function(e,t,n){ii(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ii(e,function(){t++}),t},toArray:function(e){return ii(e,function(t){return t})||[]},only:function(e){if(!Gl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=Kn;B.Fragment=rm;B.Profiler=om;B.PureComponent=Bl;B.StrictMode=im;B.Suspense=um;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gm;B.act=Zc;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Wc({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=$l.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Qc.call(t,a)&&!Kc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Qr,type:e.type,key:i,ref:o,props:r,_owner:s}};B.createContext=function(e){return e={$$typeof:lm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sm,_context:e},e.Consumer=e};B.createElement=qc;B.createFactory=function(e){var t=qc.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:am,render:e}};B.isValidElement=Gl;B.lazy=function(e){return{$$typeof:dm,_payload:{_status:-1,_result:e},_init:hm}};B.memo=function(e,t){return{$$typeof:cm,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Ci.transition;Ci.transition={};try{e()}finally{Ci.transition=t}};B.unstable_act=Zc;B.useCallback=function(e,t){return Se.current.useCallback(e,t)};B.useContext=function(e){return Se.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};B.useEffect=function(e,t){return Se.current.useEffect(e,t)};B.useId=function(){return Se.current.useId()};B.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Se.current.useMemo(e,t)};B.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};B.useRef=function(e){return Se.current.useRef(e)};B.useState=function(e){return Se.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return Se.current.useTransition()};B.version="18.3.1";Hc.exports=B;var N=Hc.exports;const X=$c(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm=N,ym=Symbol.for("react.element"),wm=Symbol.for("react.fragment"),xm=Object.prototype.hasOwnProperty,Sm=vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Em={key:!0,ref:!0,__self:!0,__source:!0};function Jc(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)xm.call(t,r)&&!Em.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ym,type:e,key:o,ref:s,props:i,_owner:Sm.current}}vo.Fragment=wm;vo.jsx=Jc;vo.jsxs=Jc;Gc.exports=vo;var E=Gc.exports,Pr={},ed={exports:{}},_e={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,j){var F=L.length;L.push(j);e:for(;0<F;){var q=F-1>>>1,re=L[q];if(0<i(re,j))L[q]=j,L[F]=re,F=q;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var j=L[0],F=L.pop();if(F!==j){L[0]=F;e:for(var q=0,re=L.length,ni=re>>>1;q<ni;){var Qt=2*(q+1)-1,Fo=L[Qt],Kt=Qt+1,ri=L[Kt];if(0>i(Fo,F))Kt<re&&0>i(ri,Fo)?(L[q]=ri,L[Kt]=F,q=Kt):(L[q]=Fo,L[Qt]=F,q=Qt);else if(Kt<re&&0>i(ri,F))L[q]=ri,L[Kt]=F,q=Kt;else break e}}return j}function i(L,j){var F=L.sortIndex-j.sortIndex;return F!==0?F:L.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],c=[],f=1,p=null,m=3,g=!1,v=!1,y=!1,b=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(L){for(var j=n(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=L)r(c),j.sortIndex=j.expirationTime,t(a,j);else break;j=n(c)}}function w(L){if(y=!1,h(L),!v)if(n(a)!==null)v=!0,oe(S);else{var j=n(c);j!==null&&Re(w,j.startTime-L)}}function S(L,j){v=!1,y&&(y=!1,u(A),A=-1),g=!0;var F=m;try{for(h(j),p=n(a);p!==null&&(!(p.expirationTime>j)||L&&!k());){var q=p.callback;if(typeof q=="function"){p.callback=null,m=p.priorityLevel;var re=q(p.expirationTime<=j);j=e.unstable_now(),typeof re=="function"?p.callback=re:p===n(a)&&r(a),h(j)}else r(a);p=n(a)}if(p!==null)var ni=!0;else{var Qt=n(c);Qt!==null&&Re(w,Qt.startTime-j),ni=!1}return ni}finally{p=null,m=F,g=!1}}var T=!1,z=null,A=-1,M=5,x=-1;function k(){return!(e.unstable_now()-x<M)}function C(){if(z!==null){var L=e.unstable_now();x=L;var j=!0;try{j=z(!0,L)}finally{j?P():(T=!1,z=null)}}else T=!1}var P;if(typeof d=="function")P=function(){d(C)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,$=D.port2;D.port1.onmessage=C,P=function(){$.postMessage(null)}}else P=function(){b(C,0)};function oe(L){z=L,T||(T=!0,P())}function Re(L,j){A=b(function(){L(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,oe(S))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(L){switch(m){case 1:case 2:case 3:var j=3;break;default:j=m}var F=m;m=j;try{return L()}finally{m=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,j){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var F=m;m=L;try{return j()}finally{m=F}},e.unstable_scheduleCallback=function(L,j,F){var q=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?q+F:q):F=q,L){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=F+re,L={id:f++,callback:j,priorityLevel:L,startTime:F,expirationTime:re,sortIndex:-1},F>q?(L.sortIndex=F,t(c,L),n(a)===null&&L===n(c)&&(y?(u(A),A=-1):y=!0,Re(w,F-q))):(L.sortIndex=re,t(a,L),v||g||(v=!0,oe(S))),L},e.unstable_shouldYield=k,e.unstable_wrapCallback=function(L){var j=m;return function(){var F=m;m=j;try{return L.apply(this,arguments)}finally{m=F}}}})(nd);td.exports=nd;var km=td.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm=N,Oe=km;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rd=new Set,Nr={};function gn(e,t){Vn(e,t),Vn(e+"Capture",t)}function Vn(e,t){for(Nr[e]=t,e=0;e<t.length;e++)rd.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),As=Object.prototype.hasOwnProperty,Cm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nu={},ru={};function Am(e){return As.call(ru,e)?!0:As.call(nu,e)?!1:Cm.test(e)?ru[e]=!0:(nu[e]=!0,!1)}function Tm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pm(e,t,n,r){if(t===null||typeof t>"u"||Tm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hl=/[\-:]([a-z])/g;function Ul(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hl,Ul);me[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hl,Ul);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hl,Ul);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wl(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Pm(t,n,i,r)&&(n=null),r||i===null?Am(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oi=Symbol.for("react.element"),wn=Symbol.for("react.portal"),xn=Symbol.for("react.fragment"),Yl=Symbol.for("react.strict_mode"),Ts=Symbol.for("react.profiler"),id=Symbol.for("react.provider"),od=Symbol.for("react.context"),Xl=Symbol.for("react.forward_ref"),Ps=Symbol.for("react.suspense"),Ns=Symbol.for("react.suspense_list"),Ql=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),sd=Symbol.for("react.offscreen"),iu=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=iu&&e[iu]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Ro;function cr(e){if(Ro===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ro=t&&t[1]||""}return`
`+Ro+e}var Bo=!1;function Vo(e,t){if(!e||Bo)return"";Bo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Bo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cr(e):""}function Nm(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=Vo(e.type,!1),e;case 11:return e=Vo(e.type.render,!1),e;case 1:return e=Vo(e.type,!0),e;default:return""}}function zs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xn:return"Fragment";case wn:return"Portal";case Ts:return"Profiler";case Yl:return"StrictMode";case Ps:return"Suspense";case Ns:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case od:return(e.displayName||"Context")+".Consumer";case id:return(e._context.displayName||"Context")+".Provider";case Xl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ql:return t=e.displayName||null,t!==null?t:zs(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return zs(e(t))}catch{}}return null}function zm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zs(t);case 8:return t===Yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ld(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Im(e){var t=ld(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function si(e){e._valueTracker||(e._valueTracker=Im(e))}function ad(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ld(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ri(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Is(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ou(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ud(e,t){t=t.checked,t!=null&&Wl(e,"checked",t,!1)}function Ms(e,t){ud(e,t);var n=Vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ls(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ls(e,t.type,Vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function su(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ls(e,t,n){(t!=="number"||Ri(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var dr=Array.isArray;function Ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Os(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(dr(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Vt(n)}}function cd(e,t){var n=Vt(t.value),r=Vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function au(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _s(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var li,fd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(li=li||document.createElement("div"),li.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mm=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){Mm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gr[t]=gr[e]})});function pd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gr.hasOwnProperty(e)&&gr[e]?(""+t).trim():t+"px"}function md(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=pd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Lm=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function js(e,t){if(t){if(Lm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function Fs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ds=null;function Kl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rs=null,On=null,_n=null;function uu(e){if(e=Zr(e)){if(typeof Rs!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Eo(t),Rs(e.stateNode,e.type,t))}}function hd(e){On?_n?_n.push(e):_n=[e]:On=e}function gd(){if(On){var e=On,t=_n;if(_n=On=null,uu(e),t)for(e=0;e<t.length;e++)uu(t[e])}}function vd(e,t){return e(t)}function yd(){}var $o=!1;function wd(e,t,n){if($o)return e(t,n);$o=!0;try{return vd(e,t,n)}finally{$o=!1,(On!==null||_n!==null)&&(yd(),gd())}}function Ir(e,t){var n=e.stateNode;if(n===null)return null;var r=Eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Bs=!1;if(ht)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Bs=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Bs=!1}function Om(e,t,n,r,i,o,s,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var vr=!1,Bi=null,Vi=!1,Vs=null,_m={onError:function(e){vr=!0,Bi=e}};function jm(e,t,n,r,i,o,s,l,a){vr=!1,Bi=null,Om.apply(_m,arguments)}function Fm(e,t,n,r,i,o,s,l,a){if(jm.apply(this,arguments),vr){if(vr){var c=Bi;vr=!1,Bi=null}else throw Error(I(198));Vi||(Vi=!0,Vs=c)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cu(e){if(vn(e)!==e)throw Error(I(188))}function Dm(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cu(i),e;if(o===r)return cu(i),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Sd(e){return e=Dm(e),e!==null?Ed(e):null}function Ed(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ed(e);if(t!==null)return t;e=e.sibling}return null}var kd=Oe.unstable_scheduleCallback,du=Oe.unstable_cancelCallback,Rm=Oe.unstable_shouldYield,Bm=Oe.unstable_requestPaint,ne=Oe.unstable_now,Vm=Oe.unstable_getCurrentPriorityLevel,ql=Oe.unstable_ImmediatePriority,bd=Oe.unstable_UserBlockingPriority,$i=Oe.unstable_NormalPriority,$m=Oe.unstable_LowPriority,Cd=Oe.unstable_IdlePriority,yo=null,st=null;function Gm(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(yo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:Wm,Hm=Math.log,Um=Math.LN2;function Wm(e){return e>>>=0,e===0?32:31-(Hm(e)/Um|0)|0}var ai=64,ui=4194304;function fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Gi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=fr(l):(o&=s,o!==0&&(r=fr(o)))}else s=n&~i,s!==0?r=fr(s):o!==0&&(r=fr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),i=1<<n,r|=e[n],t&=~i;return r}function Ym(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ke(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=Ym(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function $s(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ad(){var e=ai;return ai<<=1,!(ai&4194240)&&(ai=64),e}function Go(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function Qm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ke(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Zl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var G=0;function Td(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pd,Jl,Nd,zd,Id,Gs=!1,ci=[],Lt=null,Ot=null,_t=null,Mr=new Map,Lr=new Map,Tt=[],Km="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":Mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(t.pointerId)}}function rr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Zr(t),t!==null&&Jl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function qm(e,t,n,r,i){switch(t){case"focusin":return Lt=rr(Lt,e,t,n,r,i),!0;case"dragenter":return Ot=rr(Ot,e,t,n,r,i),!0;case"mouseover":return _t=rr(_t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Mr.set(o,rr(Mr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Lr.set(o,rr(Lr.get(o)||null,e,t,n,r,i)),!0}return!1}function Md(e){var t=en(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=xd(n),t!==null){e.blockedOn=t,Id(e.priority,function(){Nd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ds=r,n.target.dispatchEvent(r),Ds=null}else return t=Zr(n),t!==null&&Jl(t),e.blockedOn=n,!1;t.shift()}return!0}function pu(e,t,n){Ai(e)&&n.delete(t)}function Zm(){Gs=!1,Lt!==null&&Ai(Lt)&&(Lt=null),Ot!==null&&Ai(Ot)&&(Ot=null),_t!==null&&Ai(_t)&&(_t=null),Mr.forEach(pu),Lr.forEach(pu)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Gs||(Gs=!0,Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority,Zm)))}function Or(e){function t(i){return ir(i,e)}if(0<ci.length){ir(ci[0],e);for(var n=1;n<ci.length;n++){var r=ci[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&ir(Lt,e),Ot!==null&&ir(Ot,e),_t!==null&&ir(_t,e),Mr.forEach(t),Lr.forEach(t),n=0;n<Tt.length;n++)r=Tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tt.length&&(n=Tt[0],n.blockedOn===null);)Md(n),n.blockedOn===null&&Tt.shift()}var jn=St.ReactCurrentBatchConfig,Hi=!0;function Jm(e,t,n,r){var i=G,o=jn.transition;jn.transition=null;try{G=1,ea(e,t,n,r)}finally{G=i,jn.transition=o}}function eh(e,t,n,r){var i=G,o=jn.transition;jn.transition=null;try{G=4,ea(e,t,n,r)}finally{G=i,jn.transition=o}}function ea(e,t,n,r){if(Hi){var i=Hs(e,t,n,r);if(i===null)Jo(e,t,r,Ui,n),fu(e,r);else if(qm(i,e,t,n,r))r.stopPropagation();else if(fu(e,r),t&4&&-1<Km.indexOf(e)){for(;i!==null;){var o=Zr(i);if(o!==null&&Pd(o),o=Hs(e,t,n,r),o===null&&Jo(e,t,r,Ui,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Jo(e,t,r,null,n)}}var Ui=null;function Hs(e,t,n,r){if(Ui=null,e=Kl(r),e=en(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ui=e,null}function Ld(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vm()){case ql:return 1;case bd:return 4;case $i:case $m:return 16;case Cd:return 536870912;default:return 16}default:return 16}}var Nt=null,ta=null,Ti=null;function Od(){if(Ti)return Ti;var e,t=ta,n=t.length,r,i="value"in Nt?Nt.value:Nt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ti=i.slice(e,1<r?1-r:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function di(){return!0}function mu(){return!1}function je(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?di:mu,this.isPropagationStopped=mu,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},na=je(qn),qr=ee({},qn,{view:0,detail:0}),th=je(qr),Ho,Uo,or,wo=ee({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ra,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(Ho=e.screenX-or.screenX,Uo=e.screenY-or.screenY):Uo=Ho=0,or=e),Ho)},movementY:function(e){return"movementY"in e?e.movementY:Uo}}),hu=je(wo),nh=ee({},wo,{dataTransfer:0}),rh=je(nh),ih=ee({},qr,{relatedTarget:0}),Wo=je(ih),oh=ee({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),sh=je(oh),lh=ee({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ah=je(lh),uh=ee({},qn,{data:0}),gu=je(uh),ch={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ph(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fh[e])?!!t[e]:!1}function ra(){return ph}var mh=ee({},qr,{key:function(e){if(e.key){var t=ch[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ra,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hh=je(mh),gh=ee({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vu=je(gh),vh=ee({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ra}),yh=je(vh),wh=ee({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),xh=je(wh),Sh=ee({},wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Eh=je(Sh),kh=[9,13,27,32],ia=ht&&"CompositionEvent"in window,yr=null;ht&&"documentMode"in document&&(yr=document.documentMode);var bh=ht&&"TextEvent"in window&&!yr,_d=ht&&(!ia||yr&&8<yr&&11>=yr),yu=" ",wu=!1;function jd(e,t){switch(e){case"keyup":return kh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function Ch(e,t){switch(e){case"compositionend":return Fd(t);case"keypress":return t.which!==32?null:(wu=!0,yu);case"textInput":return e=t.data,e===yu&&wu?null:e;default:return null}}function Ah(e,t){if(Sn)return e==="compositionend"||!ia&&jd(e,t)?(e=Od(),Ti=ta=Nt=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _d&&t.locale!=="ko"?null:t.data;default:return null}}var Th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Th[e.type]:t==="textarea"}function Dd(e,t,n,r){hd(r),t=Wi(t,"onChange"),0<t.length&&(n=new na("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wr=null,_r=null;function Ph(e){Qd(e,0)}function xo(e){var t=bn(e);if(ad(t))return e}function Nh(e,t){if(e==="change")return t}var Rd=!1;if(ht){var Yo;if(ht){var Xo="oninput"in document;if(!Xo){var Su=document.createElement("div");Su.setAttribute("oninput","return;"),Xo=typeof Su.oninput=="function"}Yo=Xo}else Yo=!1;Rd=Yo&&(!document.documentMode||9<document.documentMode)}function Eu(){wr&&(wr.detachEvent("onpropertychange",Bd),_r=wr=null)}function Bd(e){if(e.propertyName==="value"&&xo(_r)){var t=[];Dd(t,_r,e,Kl(e)),wd(Ph,t)}}function zh(e,t,n){e==="focusin"?(Eu(),wr=t,_r=n,wr.attachEvent("onpropertychange",Bd)):e==="focusout"&&Eu()}function Ih(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xo(_r)}function Mh(e,t){if(e==="click")return xo(t)}function Lh(e,t){if(e==="input"||e==="change")return xo(t)}function Oh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:Oh;function jr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!As.call(t,i)||!Ze(e[i],t[i]))return!1}return!0}function ku(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bu(e,t){var n=ku(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ku(n)}}function Vd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $d(){for(var e=window,t=Ri();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ri(e.document)}return t}function oa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _h(e){var t=$d(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vd(n.ownerDocument.documentElement,n)){if(r!==null&&oa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=bu(n,o);var s=bu(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jh=ht&&"documentMode"in document&&11>=document.documentMode,En=null,Us=null,xr=null,Ws=!1;function Cu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ws||En==null||En!==Ri(r)||(r=En,"selectionStart"in r&&oa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&jr(xr,r)||(xr=r,r=Wi(Us,"onSelect"),0<r.length&&(t=new na("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function fi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:fi("Animation","AnimationEnd"),animationiteration:fi("Animation","AnimationIteration"),animationstart:fi("Animation","AnimationStart"),transitionend:fi("Transition","TransitionEnd")},Qo={},Gd={};ht&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function So(e){if(Qo[e])return Qo[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gd)return Qo[e]=t[n];return e}var Hd=So("animationend"),Ud=So("animationiteration"),Wd=So("animationstart"),Yd=So("transitionend"),Xd=new Map,Au="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){Xd.set(e,t),gn(t,[e])}for(var Ko=0;Ko<Au.length;Ko++){var qo=Au[Ko],Fh=qo.toLowerCase(),Dh=qo[0].toUpperCase()+qo.slice(1);Wt(Fh,"on"+Dh)}Wt(Hd,"onAnimationEnd");Wt(Ud,"onAnimationIteration");Wt(Wd,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(Yd,"onTransitionEnd");Vn("onMouseEnter",["mouseout","mouseover"]);Vn("onMouseLeave",["mouseout","mouseover"]);Vn("onPointerEnter",["pointerout","pointerover"]);Vn("onPointerLeave",["pointerout","pointerover"]);gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rh=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function Tu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fm(r,t,void 0,e),e.currentTarget=null}function Qd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Tu(i,l,c),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,c=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Tu(i,l,c),o=a}}}if(Vi)throw e=Vs,Vi=!1,Vs=null,e}function U(e,t){var n=t[qs];n===void 0&&(n=t[qs]=new Set);var r=e+"__bubble";n.has(r)||(Kd(t,e,2,!1),n.add(r))}function Zo(e,t,n){var r=0;t&&(r|=4),Kd(n,e,r,t)}var pi="_reactListening"+Math.random().toString(36).slice(2);function Fr(e){if(!e[pi]){e[pi]=!0,rd.forEach(function(n){n!=="selectionchange"&&(Rh.has(n)||Zo(n,!1,e),Zo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pi]||(t[pi]=!0,Zo("selectionchange",!1,t))}}function Kd(e,t,n,r){switch(Ld(t)){case 1:var i=Jm;break;case 4:i=eh;break;default:i=ea}n=i.bind(null,t,n,e),i=void 0,!Bs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Jo(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=en(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}wd(function(){var c=o,f=Kl(n),p=[];e:{var m=Xd.get(e);if(m!==void 0){var g=na,v=e;switch(e){case"keypress":if(Pi(n)===0)break e;case"keydown":case"keyup":g=hh;break;case"focusin":v="focus",g=Wo;break;case"focusout":v="blur",g=Wo;break;case"beforeblur":case"afterblur":g=Wo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=rh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=yh;break;case Hd:case Ud:case Wd:g=sh;break;case Yd:g=xh;break;case"scroll":g=th;break;case"wheel":g=Eh;break;case"copy":case"cut":case"paste":g=ah;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=vu}var y=(t&4)!==0,b=!y&&e==="scroll",u=y?m!==null?m+"Capture":null:m;y=[];for(var d=c,h;d!==null;){h=d;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,u!==null&&(w=Ir(d,u),w!=null&&y.push(Dr(d,w,h)))),b)break;d=d.return}0<y.length&&(m=new g(m,v,null,n,f),p.push({event:m,listeners:y}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Ds&&(v=n.relatedTarget||n.fromElement)&&(en(v)||v[gt]))break e;if((g||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=c,v=v?en(v):null,v!==null&&(b=vn(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=c),g!==v)){if(y=hu,w="onMouseLeave",u="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=vu,w="onPointerLeave",u="onPointerEnter",d="pointer"),b=g==null?m:bn(g),h=v==null?m:bn(v),m=new y(w,d+"leave",g,n,f),m.target=b,m.relatedTarget=h,w=null,en(f)===c&&(y=new y(u,d+"enter",v,n,f),y.target=h,y.relatedTarget=b,w=y),b=w,g&&v)t:{for(y=g,u=v,d=0,h=y;h;h=yn(h))d++;for(h=0,w=u;w;w=yn(w))h++;for(;0<d-h;)y=yn(y),d--;for(;0<h-d;)u=yn(u),h--;for(;d--;){if(y===u||u!==null&&y===u.alternate)break t;y=yn(y),u=yn(u)}y=null}else y=null;g!==null&&Pu(p,m,g,y,!1),v!==null&&b!==null&&Pu(p,b,v,y,!0)}}e:{if(m=c?bn(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var S=Nh;else if(xu(m))if(Rd)S=Lh;else{S=Ih;var T=zh}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Mh);if(S&&(S=S(e,c))){Dd(p,S,n,f);break e}T&&T(e,m,c),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&Ls(m,"number",m.value)}switch(T=c?bn(c):window,e){case"focusin":(xu(T)||T.contentEditable==="true")&&(En=T,Us=c,xr=null);break;case"focusout":xr=Us=En=null;break;case"mousedown":Ws=!0;break;case"contextmenu":case"mouseup":case"dragend":Ws=!1,Cu(p,n,f);break;case"selectionchange":if(jh)break;case"keydown":case"keyup":Cu(p,n,f)}var z;if(ia)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Sn?jd(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(_d&&n.locale!=="ko"&&(Sn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Sn&&(z=Od()):(Nt=f,ta="value"in Nt?Nt.value:Nt.textContent,Sn=!0)),T=Wi(c,A),0<T.length&&(A=new gu(A,e,null,n,f),p.push({event:A,listeners:T}),z?A.data=z:(z=Fd(n),z!==null&&(A.data=z)))),(z=bh?Ch(e,n):Ah(e,n))&&(c=Wi(c,"onBeforeInput"),0<c.length&&(f=new gu("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=z))}Qd(p,t)})}function Dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ir(e,n),o!=null&&r.unshift(Dr(e,o,i)),o=Ir(e,t),o!=null&&r.push(Dr(e,o,i))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=Ir(n,o),a!=null&&s.unshift(Dr(n,a,l))):i||(a=Ir(n,o),a!=null&&s.push(Dr(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Bh=/\r\n?/g,Vh=/\u0000|\uFFFD/g;function Nu(e){return(typeof e=="string"?e:""+e).replace(Bh,`
`).replace(Vh,"")}function mi(e,t,n){if(t=Nu(t),Nu(e)!==t&&n)throw Error(I(425))}function Yi(){}var Ys=null,Xs=null;function Qs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ks=typeof setTimeout=="function"?setTimeout:void 0,$h=typeof clearTimeout=="function"?clearTimeout:void 0,zu=typeof Promise=="function"?Promise:void 0,Gh=typeof queueMicrotask=="function"?queueMicrotask:typeof zu<"u"?function(e){return zu.resolve(null).then(e).catch(Hh)}:Ks;function Hh(e){setTimeout(function(){throw e})}function es(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Or(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Iu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),nt="__reactFiber$"+Zn,Rr="__reactProps$"+Zn,gt="__reactContainer$"+Zn,qs="__reactEvents$"+Zn,Uh="__reactListeners$"+Zn,Wh="__reactHandles$"+Zn;function en(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Iu(e);e!==null;){if(n=e[nt])return n;e=Iu(e)}return t}e=n,n=e.parentNode}return null}function Zr(e){return e=e[nt]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Eo(e){return e[Rr]||null}var Zs=[],Cn=-1;function Yt(e){return{current:e}}function W(e){0>Cn||(e.current=Zs[Cn],Zs[Cn]=null,Cn--)}function H(e,t){Cn++,Zs[Cn]=e.current,e.current=t}var $t={},ye=Yt($t),Ce=Yt(!1),an=$t;function $n(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(e){return e=e.childContextTypes,e!=null}function Xi(){W(Ce),W(ye)}function Mu(e,t,n){if(ye.current!==$t)throw Error(I(168));H(ye,t),H(Ce,n)}function qd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,zm(e)||"Unknown",i));return ee({},n,r)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,an=ye.current,H(ye,e),H(Ce,Ce.current),!0}function Lu(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=qd(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,W(Ce),W(ye),H(ye,e)):W(Ce),H(Ce,n)}var dt=null,ko=!1,ts=!1;function Zd(e){dt===null?dt=[e]:dt.push(e)}function Yh(e){ko=!0,Zd(e)}function Xt(){if(!ts&&dt!==null){ts=!0;var e=0,t=G;try{var n=dt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,ko=!1}catch(i){throw dt!==null&&(dt=dt.slice(e+1)),kd(ql,Xt),i}finally{G=t,ts=!1}}return null}var An=[],Tn=0,Ki=null,qi=0,Be=[],Ve=0,un=null,ft=1,pt="";function qt(e,t){An[Tn++]=qi,An[Tn++]=Ki,Ki=e,qi=t}function Jd(e,t,n){Be[Ve++]=ft,Be[Ve++]=pt,Be[Ve++]=un,un=e;var r=ft;e=pt;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var o=32-Ke(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ft=1<<32-Ke(t)+i|n<<i|r,pt=o+e}else ft=1<<o|n<<i|r,pt=e}function sa(e){e.return!==null&&(qt(e,1),Jd(e,1,0))}function la(e){for(;e===Ki;)Ki=An[--Tn],An[Tn]=null,qi=An[--Tn],An[Tn]=null;for(;e===un;)un=Be[--Ve],Be[Ve]=null,pt=Be[--Ve],Be[Ve]=null,ft=Be[--Ve],Be[Ve]=null}var Ie=null,ze=null,Q=!1,Qe=null;function ef(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ou(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,ze=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:ft,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,ze=null,!0):!1;default:return!1}}function Js(e){return(e.mode&1)!==0&&(e.flags&128)===0}function el(e){if(Q){var t=ze;if(t){var n=t;if(!Ou(e,t)){if(Js(e))throw Error(I(418));t=jt(n.nextSibling);var r=Ie;t&&Ou(e,t)?ef(r,n):(e.flags=e.flags&-4097|2,Q=!1,Ie=e)}}else{if(Js(e))throw Error(I(418));e.flags=e.flags&-4097|2,Q=!1,Ie=e}}}function _u(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function hi(e){if(e!==Ie)return!1;if(!Q)return _u(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Qs(e.type,e.memoizedProps)),t&&(t=ze)){if(Js(e))throw tf(),Error(I(418));for(;t;)ef(e,t),t=jt(t.nextSibling)}if(_u(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Ie?jt(e.stateNode.nextSibling):null;return!0}function tf(){for(var e=ze;e;)e=jt(e.nextSibling)}function Gn(){ze=Ie=null,Q=!1}function aa(e){Qe===null?Qe=[e]:Qe.push(e)}var Xh=St.ReactCurrentBatchConfig;function sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function gi(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ju(e){var t=e._init;return t(e._payload)}function nf(e){function t(u,d){if(e){var h=u.deletions;h===null?(u.deletions=[d],u.flags|=16):h.push(d)}}function n(u,d){if(!e)return null;for(;d!==null;)t(u,d),d=d.sibling;return null}function r(u,d){for(u=new Map;d!==null;)d.key!==null?u.set(d.key,d):u.set(d.index,d),d=d.sibling;return u}function i(u,d){return u=Bt(u,d),u.index=0,u.sibling=null,u}function o(u,d,h){return u.index=h,e?(h=u.alternate,h!==null?(h=h.index,h<d?(u.flags|=2,d):h):(u.flags|=2,d)):(u.flags|=1048576,d)}function s(u){return e&&u.alternate===null&&(u.flags|=2),u}function l(u,d,h,w){return d===null||d.tag!==6?(d=as(h,u.mode,w),d.return=u,d):(d=i(d,h),d.return=u,d)}function a(u,d,h,w){var S=h.type;return S===xn?f(u,d,h.props.children,w,h.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ct&&ju(S)===d.type)?(w=i(d,h.props),w.ref=sr(u,d,h),w.return=u,w):(w=_i(h.type,h.key,h.props,null,u.mode,w),w.ref=sr(u,d,h),w.return=u,w)}function c(u,d,h,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=us(h,u.mode,w),d.return=u,d):(d=i(d,h.children||[]),d.return=u,d)}function f(u,d,h,w,S){return d===null||d.tag!==7?(d=on(h,u.mode,w,S),d.return=u,d):(d=i(d,h),d.return=u,d)}function p(u,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=as(""+d,u.mode,h),d.return=u,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case oi:return h=_i(d.type,d.key,d.props,null,u.mode,h),h.ref=sr(u,null,d),h.return=u,h;case wn:return d=us(d,u.mode,h),d.return=u,d;case Ct:var w=d._init;return p(u,w(d._payload),h)}if(dr(d)||tr(d))return d=on(d,u.mode,h,null),d.return=u,d;gi(u,d)}return null}function m(u,d,h,w){var S=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:l(u,d,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case oi:return h.key===S?a(u,d,h,w):null;case wn:return h.key===S?c(u,d,h,w):null;case Ct:return S=h._init,m(u,d,S(h._payload),w)}if(dr(h)||tr(h))return S!==null?null:f(u,d,h,w,null);gi(u,h)}return null}function g(u,d,h,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return u=u.get(h)||null,l(d,u,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case oi:return u=u.get(w.key===null?h:w.key)||null,a(d,u,w,S);case wn:return u=u.get(w.key===null?h:w.key)||null,c(d,u,w,S);case Ct:var T=w._init;return g(u,d,h,T(w._payload),S)}if(dr(w)||tr(w))return u=u.get(h)||null,f(d,u,w,S,null);gi(d,w)}return null}function v(u,d,h,w){for(var S=null,T=null,z=d,A=d=0,M=null;z!==null&&A<h.length;A++){z.index>A?(M=z,z=null):M=z.sibling;var x=m(u,z,h[A],w);if(x===null){z===null&&(z=M);break}e&&z&&x.alternate===null&&t(u,z),d=o(x,d,A),T===null?S=x:T.sibling=x,T=x,z=M}if(A===h.length)return n(u,z),Q&&qt(u,A),S;if(z===null){for(;A<h.length;A++)z=p(u,h[A],w),z!==null&&(d=o(z,d,A),T===null?S=z:T.sibling=z,T=z);return Q&&qt(u,A),S}for(z=r(u,z);A<h.length;A++)M=g(z,u,A,h[A],w),M!==null&&(e&&M.alternate!==null&&z.delete(M.key===null?A:M.key),d=o(M,d,A),T===null?S=M:T.sibling=M,T=M);return e&&z.forEach(function(k){return t(u,k)}),Q&&qt(u,A),S}function y(u,d,h,w){var S=tr(h);if(typeof S!="function")throw Error(I(150));if(h=S.call(h),h==null)throw Error(I(151));for(var T=S=null,z=d,A=d=0,M=null,x=h.next();z!==null&&!x.done;A++,x=h.next()){z.index>A?(M=z,z=null):M=z.sibling;var k=m(u,z,x.value,w);if(k===null){z===null&&(z=M);break}e&&z&&k.alternate===null&&t(u,z),d=o(k,d,A),T===null?S=k:T.sibling=k,T=k,z=M}if(x.done)return n(u,z),Q&&qt(u,A),S;if(z===null){for(;!x.done;A++,x=h.next())x=p(u,x.value,w),x!==null&&(d=o(x,d,A),T===null?S=x:T.sibling=x,T=x);return Q&&qt(u,A),S}for(z=r(u,z);!x.done;A++,x=h.next())x=g(z,u,A,x.value,w),x!==null&&(e&&x.alternate!==null&&z.delete(x.key===null?A:x.key),d=o(x,d,A),T===null?S=x:T.sibling=x,T=x);return e&&z.forEach(function(C){return t(u,C)}),Q&&qt(u,A),S}function b(u,d,h,w){if(typeof h=="object"&&h!==null&&h.type===xn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case oi:e:{for(var S=h.key,T=d;T!==null;){if(T.key===S){if(S=h.type,S===xn){if(T.tag===7){n(u,T.sibling),d=i(T,h.props.children),d.return=u,u=d;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ct&&ju(S)===T.type){n(u,T.sibling),d=i(T,h.props),d.ref=sr(u,T,h),d.return=u,u=d;break e}n(u,T);break}else t(u,T);T=T.sibling}h.type===xn?(d=on(h.props.children,u.mode,w,h.key),d.return=u,u=d):(w=_i(h.type,h.key,h.props,null,u.mode,w),w.ref=sr(u,d,h),w.return=u,u=w)}return s(u);case wn:e:{for(T=h.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(u,d.sibling),d=i(d,h.children||[]),d.return=u,u=d;break e}else{n(u,d);break}else t(u,d);d=d.sibling}d=us(h,u.mode,w),d.return=u,u=d}return s(u);case Ct:return T=h._init,b(u,d,T(h._payload),w)}if(dr(h))return v(u,d,h,w);if(tr(h))return y(u,d,h,w);gi(u,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(u,d.sibling),d=i(d,h),d.return=u,u=d):(n(u,d),d=as(h,u.mode,w),d.return=u,u=d),s(u)):n(u,d)}return b}var Hn=nf(!0),rf=nf(!1),Zi=Yt(null),Ji=null,Pn=null,ua=null;function ca(){ua=Pn=Ji=null}function da(e){var t=Zi.current;W(Zi),e._currentValue=t}function tl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fn(e,t){Ji=e,ua=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(ua!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(Ji===null)throw Error(I(308));Pn=e,Ji.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var tn=null;function fa(e){tn===null?tn=[e]:tn.push(e)}function of(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,fa(t)):(n.next=i.next,i.next=n),t.interleaved=n,vt(e,r)}function vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function pa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,vt(e,n)}return i=r.interleaved,i===null?(t.next=t,fa(r)):(t.next=i.next,i.next=t),r.interleaved=t,vt(e,n)}function Ni(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zl(e,n)}}function Fu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;At=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,s===null?o=c:s.next=c,s=a;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=a))}if(o!==null){var p=i.baseState;s=0,f=c=a=null,l=o;do{var m=l.lane,g=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,y=l;switch(m=t,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){p=v.call(g,p,m);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,m=typeof v=="function"?v.call(g,p,m):v,m==null)break e;p=ee({},p,m);break e;case 2:At=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else g={eventTime:g,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=g,a=p):f=f.next=g,s|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(a=p),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);dn|=s,e.lanes=s,e.memoizedState=p}}function Du(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Jr={},lt=Yt(Jr),Br=Yt(Jr),Vr=Yt(Jr);function nn(e){if(e===Jr)throw Error(I(174));return e}function ma(e,t){switch(H(Vr,t),H(Br,e),H(lt,Jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_s(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_s(t,e)}W(lt),H(lt,t)}function Un(){W(lt),W(Br),W(Vr)}function lf(e){nn(Vr.current);var t=nn(lt.current),n=_s(t,e.type);t!==n&&(H(Br,e),H(lt,n))}function ha(e){Br.current===e&&(W(lt),W(Br))}var Z=Yt(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ns=[];function ga(){for(var e=0;e<ns.length;e++)ns[e]._workInProgressVersionPrimary=null;ns.length=0}var zi=St.ReactCurrentDispatcher,rs=St.ReactCurrentBatchConfig,cn=0,J=null,se=null,ue=null,no=!1,Sr=!1,$r=0,Qh=0;function he(){throw Error(I(321))}function va(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function ya(e,t,n,r,i,o){if(cn=o,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zi.current=e===null||e.memoizedState===null?Jh:eg,e=n(r,i),Sr){o=0;do{if(Sr=!1,$r=0,25<=o)throw Error(I(301));o+=1,ue=se=null,t.updateQueue=null,zi.current=tg,e=n(r,i)}while(Sr)}if(zi.current=ro,t=se!==null&&se.next!==null,cn=0,ue=se=J=null,no=!1,t)throw Error(I(300));return e}function wa(){var e=$r!==0;return $r=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?J.memoizedState=ue=e:ue=ue.next=e,ue}function Ue(){if(se===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=ue===null?J.memoizedState:ue.next;if(t!==null)ue=t,se=e;else{if(e===null)throw Error(I(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ue===null?J.memoizedState=ue=e:ue=ue.next=e}return ue}function Gr(e,t){return typeof t=="function"?t(e):t}function is(e){var t=Ue(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,c=o;do{var f=c.lane;if((cn&f)===f)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=p,s=r):a=a.next=p,J.lanes|=f,dn|=f}c=c.next}while(c!==null&&c!==o);a===null?s=r:a.next=l,Ze(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,J.lanes|=o,dn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function os(e){var t=Ue(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ze(o,t.memoizedState)||(be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function af(){}function uf(e,t){var n=J,r=Ue(),i=t(),o=!Ze(r.memoizedState,i);if(o&&(r.memoizedState=i,be=!0),r=r.queue,xa(ff.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Hr(9,df.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(I(349));cn&30||cf(n,t,i)}return i}function cf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function df(e,t,n,r){t.value=n,t.getSnapshot=r,pf(t)&&mf(e)}function ff(e,t,n){return n(function(){pf(t)&&mf(e)})}function pf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function mf(e){var t=vt(e,1);t!==null&&qe(t,e,1,-1)}function Ru(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gr,lastRenderedState:e},t.queue=e,e=e.dispatch=Zh.bind(null,J,e),[t.memoizedState,e]}function Hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hf(){return Ue().memoizedState}function Ii(e,t,n,r){var i=et();J.flags|=e,i.memoizedState=Hr(1|t,n,void 0,r===void 0?null:r)}function bo(e,t,n,r){var i=Ue();r=r===void 0?null:r;var o=void 0;if(se!==null){var s=se.memoizedState;if(o=s.destroy,r!==null&&va(r,s.deps)){i.memoizedState=Hr(t,n,o,r);return}}J.flags|=e,i.memoizedState=Hr(1|t,n,o,r)}function Bu(e,t){return Ii(8390656,8,e,t)}function xa(e,t){return bo(2048,8,e,t)}function gf(e,t){return bo(4,2,e,t)}function vf(e,t){return bo(4,4,e,t)}function yf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wf(e,t,n){return n=n!=null?n.concat([e]):null,bo(4,4,yf.bind(null,t,e),n)}function Sa(){}function xf(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&va(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sf(e,t){var n=Ue();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&va(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ef(e,t,n){return cn&21?(Ze(n,t)||(n=Ad(),J.lanes|=n,dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=n)}function Kh(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=rs.transition;rs.transition={};try{e(!1),t()}finally{G=n,rs.transition=r}}function kf(){return Ue().memoizedState}function qh(e,t,n){var r=Rt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bf(e))Cf(t,n);else if(n=of(e,t,n,r),n!==null){var i=xe();qe(n,e,r,i),Af(n,t,r)}}function Zh(e,t,n){var r=Rt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bf(e))Cf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Ze(l,s)){var a=t.interleaved;a===null?(i.next=i,fa(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=of(e,t,i,r),n!==null&&(i=xe(),qe(n,e,r,i),Af(n,t,r))}}function bf(e){var t=e.alternate;return e===J||t!==null&&t===J}function Cf(e,t){Sr=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Af(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zl(e,n)}}var ro={readContext:He,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Jh={readContext:He,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:Bu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ii(4194308,4,yf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ii(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ii(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qh.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:Ru,useDebugValue:Sa,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=Ru(!1),t=e[0];return e=Kh.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=et();if(Q){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),ce===null)throw Error(I(349));cn&30||cf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Bu(ff.bind(null,r,o,e),[e]),r.flags|=2048,Hr(9,df.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=et(),t=ce.identifierPrefix;if(Q){var n=pt,r=ft;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},eg={readContext:He,useCallback:xf,useContext:He,useEffect:xa,useImperativeHandle:wf,useInsertionEffect:gf,useLayoutEffect:vf,useMemo:Sf,useReducer:is,useRef:hf,useState:function(){return is(Gr)},useDebugValue:Sa,useDeferredValue:function(e){var t=Ue();return Ef(t,se.memoizedState,e)},useTransition:function(){var e=is(Gr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:af,useSyncExternalStore:uf,useId:kf,unstable_isNewReconciler:!1},tg={readContext:He,useCallback:xf,useContext:He,useEffect:xa,useImperativeHandle:wf,useInsertionEffect:gf,useLayoutEffect:vf,useMemo:Sf,useReducer:os,useRef:hf,useState:function(){return os(Gr)},useDebugValue:Sa,useDeferredValue:function(e){var t=Ue();return se===null?t.memoizedState=e:Ef(t,se.memoizedState,e)},useTransition:function(){var e=os(Gr)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:af,useSyncExternalStore:uf,useId:kf,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function nl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Co={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),i=Rt(e),o=mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(qe(t,e,i,r),Ni(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),i=Rt(e),o=mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,i),t!==null&&(qe(t,e,i,r),Ni(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=Rt(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ft(e,i,r),t!==null&&(qe(t,e,r,n),Ni(t,e,r))}};function Vu(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,o):!0}function Tf(e,t,n){var r=!1,i=$t,o=t.contextType;return typeof o=="object"&&o!==null?o=He(o):(i=Ae(t)?an:ye.current,r=t.contextTypes,o=(r=r!=null)?$n(e,i):$t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function $u(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function rl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},pa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=He(o):(o=Ae(t)?an:ye.current,i.context=$n(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(nl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Co.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Wn(e,t){try{var n="",r=t;do n+=Nm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ss(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function il(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ng=typeof WeakMap=="function"?WeakMap:Map;function Pf(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,ml=r),il(e,t)},n}function Nf(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){il(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){il(e,t),typeof r!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ng;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=gg.bind(null,e,t,n),t.then(e,e))}function Hu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var rg=St.ReactCurrentOwner,be=!1;function we(e,t,n,r){t.child=e===null?rf(t,null,n,r):Hn(t,e.child,n,r)}function Wu(e,t,n,r,i){n=n.render;var o=t.ref;return Fn(t,i),r=ya(e,t,n,r,o,i),n=wa(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(Q&&n&&sa(t),t.flags|=1,we(e,t,r,i),t.child)}function Yu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Na(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,zf(e,t,o,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:jr,n(s,r)&&e.ref===t.ref)return yt(e,t,i)}return t.flags|=1,e=Bt(o,r),e.ref=t.ref,e.return=t,t.child=e}function zf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(jr(o,r)&&e.ref===t.ref)if(be=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,yt(e,t,i)}return ol(e,t,n,r,i)}function If(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(zn,Pe),Pe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(zn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,H(zn,Pe),Pe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,H(zn,Pe),Pe|=r;return we(e,t,i,n),t.child}function Mf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ol(e,t,n,r,i){var o=Ae(n)?an:ye.current;return o=$n(t,o),Fn(t,i),n=ya(e,t,n,r,o,i),r=wa(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yt(e,t,i)):(Q&&r&&sa(t),t.flags|=1,we(e,t,n,i),t.child)}function Xu(e,t,n,r,i){if(Ae(n)){var o=!0;Qi(t)}else o=!1;if(Fn(t,i),t.stateNode===null)Mi(e,t),Tf(t,n,r),rl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=He(c):(c=Ae(n)?an:ye.current,c=$n(t,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==c)&&$u(t,s,r,c),At=!1;var m=t.memoizedState;s.state=m,eo(t,r,s,i),a=t.memoizedState,l!==r||m!==a||Ce.current||At?(typeof f=="function"&&(nl(t,n,f,r),a=t.memoizedState),(l=At||Vu(t,n,l,r,m,a,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,sf(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ye(t.type,l),s.props=c,p=t.pendingProps,m=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=He(a):(a=Ae(n)?an:ye.current,a=$n(t,a));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||m!==a)&&$u(t,s,r,a),At=!1,m=t.memoizedState,s.state=m,eo(t,r,s,i);var v=t.memoizedState;l!==p||m!==v||Ce.current||At?(typeof g=="function"&&(nl(t,n,g,r),v=t.memoizedState),(c=At||Vu(t,n,c,r,m,v,a)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=a,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return sl(e,t,n,r,o,i)}function sl(e,t,n,r,i,o){Mf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Lu(t,n,!1),yt(e,t,o);r=t.stateNode,rg.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Hn(t,e.child,null,o),t.child=Hn(t,null,l,o)):we(e,t,l,o),t.memoizedState=r.state,i&&Lu(t,n,!0),t.child}function Lf(e){var t=e.stateNode;t.pendingContext?Mu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mu(e,t.context,!1),ma(e,t.containerInfo)}function Qu(e,t,n,r,i){return Gn(),aa(i),t.flags|=256,we(e,t,n,r),t.child}var ll={dehydrated:null,treeContext:null,retryLane:0};function al(e){return{baseLanes:e,cachePool:null,transitions:null}}function Of(e,t,n){var r=t.pendingProps,i=Z.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(Z,i&1),e===null)return el(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Po(s,r,0,null),e=on(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=al(n),t.memoizedState=ll,e):Ea(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ig(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Bt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Bt(l,o):(o=on(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?al(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ll,r}return o=e.child,e=o.sibling,r=Bt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ea(e,t){return t=Po({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vi(e,t,n,r){return r!==null&&aa(r),Hn(t,e.child,null,n),e=Ea(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ig(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ss(Error(I(422))),vi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Po({mode:"visible",children:r.children},i,0,null),o=on(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Hn(t,e.child,null,s),t.child.memoizedState=al(s),t.memoizedState=ll,o);if(!(t.mode&1))return vi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(I(419)),r=ss(o,r,void 0),vi(e,t,s,r)}if(l=(s&e.childLanes)!==0,be||l){if(r=ce,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,vt(e,i),qe(r,e,i,-1))}return Pa(),r=ss(Error(I(421))),vi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=vg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=jt(i.nextSibling),Ie=t,Q=!0,Qe=null,e!==null&&(Be[Ve++]=ft,Be[Ve++]=pt,Be[Ve++]=un,ft=e.id,pt=e.overflow,un=t),t=Ea(t,r.children),t.flags|=4096,t)}function Ku(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),tl(e.return,t,n)}function ls(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function _f(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(we(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ku(e,n,t);else if(e.tag===19)Ku(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(Z,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ls(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ls(t,!0,n,null,o);break;case"together":ls(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function og(e,t,n){switch(t.tag){case 3:Lf(t),Gn();break;case 5:lf(t);break;case 1:Ae(t.type)&&Qi(t);break;case 4:ma(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(Zi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?Of(e,t,n):(H(Z,Z.current&1),e=yt(e,t,n),e!==null?e.sibling:null);H(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _f(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,If(e,t,n)}return yt(e,t,n)}var jf,ul,Ff,Df;jf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ul=function(){};Ff=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,nn(lt.current);var o=null;switch(n){case"input":i=Is(e,i),r=Is(e,r),o=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),o=[];break;case"textarea":i=Os(e,i),r=Os(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yi)}js(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Nr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Nr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&U("scroll",e),o||l===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Df=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sg(e,t,n){var r=t.pendingProps;switch(la(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Ae(t.type)&&Xi(),ge(t),null;case 3:return r=t.stateNode,Un(),W(Ce),W(ye),ga(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(vl(Qe),Qe=null))),ul(e,t),ge(t),null;case 5:ha(t);var i=nn(Vr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ff(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return ge(t),null}if(e=nn(lt.current),hi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[nt]=t,r[Rr]=o,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<pr.length;i++)U(pr[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":ou(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":lu(r,o),U("invalid",r)}js(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&mi(r.textContent,l,e),i=["children",""+l]):Nr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&U("scroll",r)}switch(n){case"input":si(r),su(r,o,!0);break;case"textarea":si(r),au(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Yi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[nt]=t,e[Rr]=r,jf(e,t,!1,!1),t.stateNode=e;e:{switch(s=Fs(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<pr.length;i++)U(pr[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":ou(e,r),i=Is(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),U("invalid",e);break;case"textarea":lu(e,r),i=Os(e,r),U("invalid",e);break;default:i=r}js(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?md(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&fd(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&zr(e,a):typeof a=="number"&&zr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Nr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&U("scroll",e):a!=null&&Wl(e,o,a,s))}switch(n){case"input":si(e),su(e,r,!1);break;case"textarea":si(e),au(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Vt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ln(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)Df(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=nn(Vr.current),nn(lt.current),hi(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(o=r.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return ge(t),null;case 13:if(W(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&ze!==null&&t.mode&1&&!(t.flags&128))tf(),Gn(),t.flags|=98560,o=!1;else if(o=hi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[nt]=t}else Gn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),o=!1}else Qe!==null&&(vl(Qe),Qe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?le===0&&(le=3):Pa())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return Un(),ul(e,t),e===null&&Fr(t.stateNode.containerInfo),ge(t),null;case 10:return da(t.type._context),ge(t),null;case 17:return Ae(t.type)&&Xi(),ge(t),null;case 19:if(W(Z),o=t.memoizedState,o===null)return ge(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)lr(o,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=to(e),s!==null){for(t.flags|=128,lr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(Z,Z.current&1|2),t.child}e=e.sibling}o.tail!==null&&ne()>Yn&&(t.flags|=128,r=!0,lr(o,!1),t.lanes=4194304)}else{if(!r)if(e=to(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Q)return ge(t),null}else 2*ne()-o.renderingStartTime>Yn&&n!==1073741824&&(t.flags|=128,r=!0,lr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ne(),t.sibling=null,n=Z.current,H(Z,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return Ta(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function lg(e,t){switch(la(t),t.tag){case 1:return Ae(t.type)&&Xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),W(Ce),W(ye),ga(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ha(t),null;case 13:if(W(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Z),null;case 4:return Un(),null;case 10:return da(t.type._context),null;case 22:case 23:return Ta(),null;case 24:return null;default:return null}}var yi=!1,ve=!1,ag=typeof WeakSet=="function"?WeakSet:Set,O=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function cl(e,t,n){try{n()}catch(r){te(e,t,r)}}var qu=!1;function ug(e,t){if(Ys=Hi,e=$d(),oa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,c=0,f=0,p=e,m=null;t:for(;;){for(var g;p!==n||i!==0&&p.nodeType!==3||(l=s+i),p!==o||r!==0&&p.nodeType!==3||(a=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)m=p,p=g;for(;;){if(p===e)break t;if(m===n&&++c===i&&(l=s),m===o&&++f===r&&(a=s),(g=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xs={focusedElem:e,selectionRange:n},Hi=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,b=v.memoizedState,u=t.stateNode,d=u.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ye(t.type,y),b);u.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(w){te(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return v=qu,qu=!1,v}function Er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&cl(t,n,o)}i=i.next}while(i!==r)}}function Ao(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function dl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rf(e){var t=e.alternate;t!==null&&(e.alternate=null,Rf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[Rr],delete t[qs],delete t[Uh],delete t[Wh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bf(e){return e.tag===5||e.tag===3||e.tag===4}function Zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yi));else if(r!==4&&(e=e.child,e!==null))for(fl(e,t,n),e=e.sibling;e!==null;)fl(e,t,n),e=e.sibling}function pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(pl(e,t,n),e=e.sibling;e!==null;)pl(e,t,n),e=e.sibling}var de=null,Xe=!1;function kt(e,t,n){for(n=n.child;n!==null;)Vf(e,t,n),n=n.sibling}function Vf(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(yo,n)}catch{}switch(n.tag){case 5:ve||Nn(n,t);case 6:var r=de,i=Xe;de=null,kt(e,t,n),de=r,Xe=i,de!==null&&(Xe?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Xe?(e=de,n=n.stateNode,e.nodeType===8?es(e.parentNode,n):e.nodeType===1&&es(e,n),Or(e)):es(de,n.stateNode));break;case 4:r=de,i=Xe,de=n.stateNode.containerInfo,Xe=!0,kt(e,t,n),de=r,Xe=i;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&cl(n,t,s),i=i.next}while(i!==r)}kt(e,t,n);break;case 1:if(!ve&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,t,l)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,kt(e,t,n),ve=r):kt(e,t,n);break;default:kt(e,t,n)}}function Ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ag),t.forEach(function(r){var i=yg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:de=l.stateNode,Xe=!1;break e;case 3:de=l.stateNode.containerInfo,Xe=!0;break e;case 4:de=l.stateNode.containerInfo,Xe=!0;break e}l=l.return}if(de===null)throw Error(I(160));Vf(o,s,i),de=null,Xe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){te(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$f(t,e),t=t.sibling}function $f(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),Je(e),r&4){try{Er(3,e,e.return),Ao(3,e)}catch(y){te(e,e.return,y)}try{Er(5,e,e.return)}catch(y){te(e,e.return,y)}}break;case 1:We(t,e),Je(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(We(t,e),Je(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var i=e.stateNode;try{zr(i,"")}catch(y){te(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&ud(i,o),Fs(l,s);var c=Fs(l,o);for(s=0;s<a.length;s+=2){var f=a[s],p=a[s+1];f==="style"?md(i,p):f==="dangerouslySetInnerHTML"?fd(i,p):f==="children"?zr(i,p):Wl(i,f,p,c)}switch(l){case"input":Ms(i,o);break;case"textarea":cd(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Ln(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?Ln(i,!!o.multiple,o.defaultValue,!0):Ln(i,!!o.multiple,o.multiple?[]:"",!1))}i[Rr]=o}catch(y){te(e,e.return,y)}}break;case 6:if(We(t,e),Je(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){te(e,e.return,y)}}break;case 3:if(We(t,e),Je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(y){te(e,e.return,y)}break;case 4:We(t,e),Je(e);break;case 13:We(t,e),Je(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ca=ne())),r&4&&Ju(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(c=ve)||f,We(t,e),ve=c):We(t,e),Je(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(O=e,f=e.child;f!==null;){for(p=O=f;O!==null;){switch(m=O,g=m.child,m.tag){case 0:case 11:case 14:case 15:Er(4,m,m.return);break;case 1:Nn(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){te(r,n,y)}}break;case 5:Nn(m,m.return);break;case 22:if(m.memoizedState!==null){tc(p);continue}}g!==null?(g.return=m,O=g):tc(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,a=p.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=pd("display",s))}catch(y){te(e,e.return,y)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){te(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:We(t,e),Je(e),r&4&&Ju(e);break;case 21:break;default:We(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bf(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zr(i,""),r.flags&=-33);var o=Zu(e);pl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Zu(e);fl(e,l,s);break;default:throw Error(I(161))}}catch(a){te(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cg(e,t,n){O=e,Gf(e)}function Gf(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||yi;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ve;l=yi;var c=ve;if(yi=s,(ve=a)&&!c)for(O=i;O!==null;)s=O,a=s.child,s.tag===22&&s.memoizedState!==null?nc(i):a!==null?(a.return=s,O=a):nc(i);for(;o!==null;)O=o,Gf(o),o=o.sibling;O=i,yi=l,ve=c}ec(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):ec(e)}}function ec(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||Ao(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Du(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Du(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Or(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}ve||t.flags&512&&dl(t)}catch(m){te(t,t.return,m)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function tc(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function nc(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ao(4,t)}catch(a){te(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){te(t,i,a)}}var o=t.return;try{dl(t)}catch(a){te(t,o,a)}break;case 5:var s=t.return;try{dl(t)}catch(a){te(t,s,a)}}}catch(a){te(t,t.return,a)}if(t===e){O=null;break}var l=t.sibling;if(l!==null){l.return=t.return,O=l;break}O=t.return}}var dg=Math.ceil,io=St.ReactCurrentDispatcher,ka=St.ReactCurrentOwner,Ge=St.ReactCurrentBatchConfig,V=0,ce=null,ie=null,pe=0,Pe=0,zn=Yt(0),le=0,Ur=null,dn=0,To=0,ba=0,kr=null,ke=null,Ca=0,Yn=1/0,ct=null,oo=!1,ml=null,Dt=null,wi=!1,zt=null,so=0,br=0,hl=null,Li=-1,Oi=0;function xe(){return V&6?ne():Li!==-1?Li:Li=ne()}function Rt(e){return e.mode&1?V&2&&pe!==0?pe&-pe:Xh.transition!==null?(Oi===0&&(Oi=Ad()),Oi):(e=G,e!==0||(e=window.event,e=e===void 0?16:Ld(e.type)),e):1}function qe(e,t,n,r){if(50<br)throw br=0,hl=null,Error(I(185));Kr(e,n,r),(!(V&2)||e!==ce)&&(e===ce&&(!(V&2)&&(To|=n),le===4&&Pt(e,pe)),Te(e,r),n===1&&V===0&&!(t.mode&1)&&(Yn=ne()+500,ko&&Xt()))}function Te(e,t){var n=e.callbackNode;Xm(e,t);var r=Gi(e,e===ce?pe:0);if(r===0)n!==null&&du(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&du(n),t===1)e.tag===0?Yh(rc.bind(null,e)):Zd(rc.bind(null,e)),Gh(function(){!(V&6)&&Xt()}),n=null;else{switch(Td(r)){case 1:n=ql;break;case 4:n=bd;break;case 16:n=$i;break;case 536870912:n=Cd;break;default:n=$i}n=qf(n,Hf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hf(e,t){if(Li=-1,Oi=0,V&6)throw Error(I(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=Gi(e,e===ce?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=lo(e,r);else{t=r;var i=V;V|=2;var o=Wf();(ce!==e||pe!==t)&&(ct=null,Yn=ne()+500,rn(e,t));do try{mg();break}catch(l){Uf(e,l)}while(!0);ca(),io.current=o,V=i,ie!==null?t=0:(ce=null,pe=0,t=le)}if(t!==0){if(t===2&&(i=$s(e),i!==0&&(r=i,t=gl(e,i))),t===1)throw n=Ur,rn(e,0),Pt(e,r),Te(e,ne()),n;if(t===6)Pt(e,r);else{if(i=e.current.alternate,!(r&30)&&!fg(i)&&(t=lo(e,r),t===2&&(o=$s(e),o!==0&&(r=o,t=gl(e,o))),t===1))throw n=Ur,rn(e,0),Pt(e,r),Te(e,ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Zt(e,ke,ct);break;case 3:if(Pt(e,r),(r&130023424)===r&&(t=Ca+500-ne(),10<t)){if(Gi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ks(Zt.bind(null,e,ke,ct),t);break}Zt(e,ke,ct);break;case 4:if(Pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ke(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dg(r/1960))-r,10<r){e.timeoutHandle=Ks(Zt.bind(null,e,ke,ct),r);break}Zt(e,ke,ct);break;case 5:Zt(e,ke,ct);break;default:throw Error(I(329))}}}return Te(e,ne()),e.callbackNode===n?Hf.bind(null,e):null}function gl(e,t){var n=kr;return e.current.memoizedState.isDehydrated&&(rn(e,t).flags|=256),e=lo(e,t),e!==2&&(t=ke,ke=n,t!==null&&vl(t)),e}function vl(e){ke===null?ke=e:ke.push.apply(ke,e)}function fg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ze(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t){for(t&=~ba,t&=~To,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function rc(e){if(V&6)throw Error(I(327));Dn();var t=Gi(e,0);if(!(t&1))return Te(e,ne()),null;var n=lo(e,t);if(e.tag!==0&&n===2){var r=$s(e);r!==0&&(t=r,n=gl(e,r))}if(n===1)throw n=Ur,rn(e,0),Pt(e,t),Te(e,ne()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Zt(e,ke,ct),Te(e,ne()),null}function Aa(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Yn=ne()+500,ko&&Xt())}}function fn(e){zt!==null&&zt.tag===0&&!(V&6)&&Dn();var t=V;V|=1;var n=Ge.transition,r=G;try{if(Ge.transition=null,G=1,e)return e()}finally{G=r,Ge.transition=n,V=t,!(V&6)&&Xt()}}function Ta(){Pe=zn.current,W(zn)}function rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$h(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(la(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xi();break;case 3:Un(),W(Ce),W(ye),ga();break;case 5:ha(r);break;case 4:Un();break;case 13:W(Z);break;case 19:W(Z);break;case 10:da(r.type._context);break;case 22:case 23:Ta()}n=n.return}if(ce=e,ie=e=Bt(e.current,null),pe=Pe=t,le=0,Ur=null,ba=To=dn=0,ke=kr=null,tn!==null){for(t=0;t<tn.length;t++)if(n=tn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}tn=null}return e}function Uf(e,t){do{var n=ie;try{if(ca(),zi.current=ro,no){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(cn=0,ue=se=J=null,Sr=!1,$r=0,ka.current=null,n===null||n.return===null){le=1,Ur=t,ie=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=pe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Hu(s);if(g!==null){g.flags&=-257,Uu(g,s,l,o,t),g.mode&1&&Gu(o,c,t),t=g,a=c;var v=t.updateQueue;if(v===null){var y=new Set;y.add(a),t.updateQueue=y}else v.add(a);break e}else{if(!(t&1)){Gu(o,c,t),Pa();break e}a=Error(I(426))}}else if(Q&&l.mode&1){var b=Hu(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Uu(b,s,l,o,t),aa(Wn(a,l));break e}}o=a=Wn(a,l),le!==4&&(le=2),kr===null?kr=[o]:kr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var u=Pf(o,a,t);Fu(o,u);break e;case 1:l=a;var d=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Dt===null||!Dt.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Nf(o,l,t);Fu(o,w);break e}}o=o.return}while(o!==null)}Xf(n)}catch(S){t=S,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function Wf(){var e=io.current;return io.current=ro,e===null?ro:e}function Pa(){(le===0||le===3||le===2)&&(le=4),ce===null||!(dn&268435455)&&!(To&268435455)||Pt(ce,pe)}function lo(e,t){var n=V;V|=2;var r=Wf();(ce!==e||pe!==t)&&(ct=null,rn(e,t));do try{pg();break}catch(i){Uf(e,i)}while(!0);if(ca(),V=n,io.current=r,ie!==null)throw Error(I(261));return ce=null,pe=0,le}function pg(){for(;ie!==null;)Yf(ie)}function mg(){for(;ie!==null&&!Rm();)Yf(ie)}function Yf(e){var t=Kf(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?Xf(e):ie=t,ka.current=null}function Xf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lg(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ie=null;return}}else if(n=sg(n,t,Pe),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);le===0&&(le=5)}function Zt(e,t,n){var r=G,i=Ge.transition;try{Ge.transition=null,G=1,hg(e,t,n,r)}finally{Ge.transition=i,G=r}return null}function hg(e,t,n,r){do Dn();while(zt!==null);if(V&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Qm(e,o),e===ce&&(ie=ce=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wi||(wi=!0,qf($i,function(){return Dn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ge.transition,Ge.transition=null;var s=G;G=1;var l=V;V|=4,ka.current=null,ug(e,n),$f(n,e),_h(Xs),Hi=!!Ys,Xs=Ys=null,e.current=n,cg(n),Bm(),V=l,G=s,Ge.transition=o}else e.current=n;if(wi&&(wi=!1,zt=e,so=i),o=e.pendingLanes,o===0&&(Dt=null),Gm(n.stateNode),Te(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=ml,ml=null,e;return so&1&&e.tag!==0&&Dn(),o=e.pendingLanes,o&1?e===hl?br++:(br=0,hl=e):br=0,Xt(),null}function Dn(){if(zt!==null){var e=Td(so),t=Ge.transition,n=G;try{if(Ge.transition=null,G=16>e?16:e,zt===null)var r=!1;else{if(e=zt,zt=null,so=0,V&6)throw Error(I(331));var i=V;for(V|=4,O=e.current;O!==null;){var o=O,s=o.child;if(O.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(O=c;O!==null;){var f=O;switch(f.tag){case 0:case 11:case 15:Er(8,f,o)}var p=f.child;if(p!==null)p.return=f,O=p;else for(;O!==null;){f=O;var m=f.sibling,g=f.return;if(Rf(f),f===c){O=null;break}if(m!==null){m.return=g,O=m;break}O=g}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}O=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,O=s;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Er(9,o,o.return)}var u=o.sibling;if(u!==null){u.return=o.return,O=u;break e}O=o.return}}var d=e.current;for(O=d;O!==null;){s=O;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,O=h;else e:for(s=d;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ao(9,l)}}catch(S){te(l,l.return,S)}if(l===s){O=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,O=w;break e}O=l.return}}if(V=i,Xt(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(yo,e)}catch{}r=!0}return r}finally{G=n,Ge.transition=t}}return!1}function ic(e,t,n){t=Wn(n,t),t=Pf(e,t,1),e=Ft(e,t,1),t=xe(),e!==null&&(Kr(e,1,t),Te(e,t))}function te(e,t,n){if(e.tag===3)ic(e,e,n);else for(;t!==null;){if(t.tag===3){ic(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dt===null||!Dt.has(r))){e=Wn(n,e),e=Nf(t,e,1),t=Ft(t,e,1),e=xe(),t!==null&&(Kr(t,1,e),Te(t,e));break}}t=t.return}}function gg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(pe&n)===n&&(le===4||le===3&&(pe&130023424)===pe&&500>ne()-Ca?rn(e,0):ba|=n),Te(e,t)}function Qf(e,t){t===0&&(e.mode&1?(t=ui,ui<<=1,!(ui&130023424)&&(ui=4194304)):t=1);var n=xe();e=vt(e,t),e!==null&&(Kr(e,t,n),Te(e,n))}function vg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qf(e,n)}function yg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),Qf(e,n)}var Kf;Kf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return be=!1,og(e,t,n);be=!!(e.flags&131072)}else be=!1,Q&&t.flags&1048576&&Jd(t,qi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Mi(e,t),e=t.pendingProps;var i=$n(t,ye.current);Fn(t,n),i=ya(null,t,r,e,i,n);var o=wa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(o=!0,Qi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pa(t),i.updater=Co,t.stateNode=i,i._reactInternals=t,rl(t,r,e,n),t=sl(null,t,r,!0,o,n)):(t.tag=0,Q&&o&&sa(t),we(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Mi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=xg(r),e=Ye(r,e),i){case 0:t=ol(null,t,r,e,n);break e;case 1:t=Xu(null,t,r,e,n);break e;case 11:t=Wu(null,t,r,e,n);break e;case 14:t=Yu(null,t,r,Ye(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),ol(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Xu(e,t,r,i,n);case 3:e:{if(Lf(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,i=o.element,sf(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Wn(Error(I(423)),t),t=Qu(e,t,r,n,i);break e}else if(r!==i){i=Wn(Error(I(424)),t),t=Qu(e,t,r,n,i);break e}else for(ze=jt(t.stateNode.containerInfo.firstChild),Ie=t,Q=!0,Qe=null,n=rf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gn(),r===i){t=yt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return lf(t),e===null&&el(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Qs(r,i)?s=null:o!==null&&Qs(r,o)&&(t.flags|=32),Mf(e,t),we(e,t,s,n),t.child;case 6:return e===null&&el(t),null;case 13:return Of(e,t,n);case 4:return ma(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Wu(e,t,r,i,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,H(Zi,r._currentValue),r._currentValue=s,o!==null)if(Ze(o.value,s)){if(o.children===i.children&&!Ce.current){t=yt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=mt(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),tl(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),tl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}we(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fn(t,n),i=He(i),r=r(i),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),Yu(e,t,r,i,n);case 15:return zf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Mi(e,t),t.tag=1,Ae(r)?(e=!0,Qi(t)):e=!1,Fn(t,n),Tf(t,r,i),rl(t,r,i,n),sl(null,t,r,!0,e,n);case 19:return _f(e,t,n);case 22:return If(e,t,n)}throw Error(I(156,t.tag))};function qf(e,t){return kd(e,t)}function wg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new wg(e,t,n,r)}function Na(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xg(e){if(typeof e=="function")return Na(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xl)return 11;if(e===Ql)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _i(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Na(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case xn:return on(n.children,i,o,t);case Yl:s=8,i|=8;break;case Ts:return e=$e(12,n,t,i|2),e.elementType=Ts,e.lanes=o,e;case Ps:return e=$e(13,n,t,i),e.elementType=Ps,e.lanes=o,e;case Ns:return e=$e(19,n,t,i),e.elementType=Ns,e.lanes=o,e;case sd:return Po(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case id:s=10;break e;case od:s=9;break e;case Xl:s=11;break e;case Ql:s=14;break e;case Ct:s=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=$e(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function on(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function Po(e,t,n,r){return e=$e(22,e,r,t),e.elementType=sd,e.lanes=n,e.stateNode={isHidden:!1},e}function as(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function us(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Go(0),this.expirationTimes=Go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function za(e,t,n,r,i,o,s,l,a){return e=new Sg(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=$e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pa(o),e}function Eg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zf(e){if(!e)return $t;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(Ae(n))return qd(e,n,t)}return t}function Jf(e,t,n,r,i,o,s,l,a){return e=za(n,r,!0,e,i,o,s,l,a),e.context=Zf(null),n=e.current,r=xe(),i=Rt(n),o=mt(r,i),o.callback=t??null,Ft(n,o,i),e.current.lanes=i,Kr(e,i,r),Te(e,r),e}function No(e,t,n,r){var i=t.current,o=xe(),s=Rt(i);return n=Zf(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(i,t,s),e!==null&&(qe(e,i,s,o),Ni(e,i,s)),s}function ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function oc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ia(e,t){oc(e,t),(e=e.alternate)&&oc(e,t)}function kg(){return null}var ep=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ma(e){this._internalRoot=e}zo.prototype.render=Ma.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));No(e,t,null,null)};zo.prototype.unmount=Ma.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){No(null,e,null,null)}),t[gt]=null}};function zo(e){this._internalRoot=e}zo.prototype.unstable_scheduleHydration=function(e){if(e){var t=zd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tt.length&&t!==0&&t<Tt[n].priority;n++);Tt.splice(n,0,e),n===0&&Md(e)}};function La(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sc(){}function bg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=ao(s);o.call(c)}}var s=Jf(t,r,e,0,null,!1,!1,"",sc);return e._reactRootContainer=s,e[gt]=s.current,Fr(e.nodeType===8?e.parentNode:e),fn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=ao(a);l.call(c)}}var a=za(e,0,!1,null,null,!1,!1,"",sc);return e._reactRootContainer=a,e[gt]=a.current,Fr(e.nodeType===8?e.parentNode:e),fn(function(){No(t,a,n,r)}),a}function Mo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=ao(s);l.call(a)}}No(t,s,e,i)}else s=bg(n,t,e,i,r);return ao(s)}Pd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fr(t.pendingLanes);n!==0&&(Zl(t,n|1),Te(t,ne()),!(V&6)&&(Yn=ne()+500,Xt()))}break;case 13:fn(function(){var r=vt(e,1);if(r!==null){var i=xe();qe(r,e,1,i)}}),Ia(e,1)}};Jl=function(e){if(e.tag===13){var t=vt(e,134217728);if(t!==null){var n=xe();qe(t,e,134217728,n)}Ia(e,134217728)}};Nd=function(e){if(e.tag===13){var t=Rt(e),n=vt(e,t);if(n!==null){var r=xe();qe(n,e,t,r)}Ia(e,t)}};zd=function(){return G};Id=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};Rs=function(e,t,n){switch(t){case"input":if(Ms(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Eo(r);if(!i)throw Error(I(90));ad(r),Ms(r,i)}}}break;case"textarea":cd(e,n);break;case"select":t=n.value,t!=null&&Ln(e,!!n.multiple,t,!1)}};vd=Aa;yd=fn;var Cg={usingClientEntryPoint:!1,Events:[Zr,bn,Eo,hd,gd,Aa]},ar={findFiberByHostInstance:en,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ag={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sd(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||kg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xi.isDisabled&&xi.supportsFiber)try{yo=xi.inject(Ag),st=xi}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cg;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!La(t))throw Error(I(200));return Eg(e,t,null,n)};_e.createRoot=function(e,t){if(!La(e))throw Error(I(299));var n=!1,r="",i=ep;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=za(e,1,!1,null,null,n,!1,r,i),e[gt]=t.current,Fr(e.nodeType===8?e.parentNode:e),new Ma(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Sd(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return fn(e)};_e.hydrate=function(e,t,n){if(!Io(t))throw Error(I(200));return Mo(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!La(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=ep;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Jf(t,null,e,1,n??null,i,!1,o,s),e[gt]=t.current,Fr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new zo(t)};_e.render=function(e,t,n){if(!Io(t))throw Error(I(200));return Mo(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!Io(e))throw Error(I(40));return e._reactRootContainer?(fn(function(){Mo(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};_e.unstable_batchedUpdates=Aa;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Io(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Mo(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function tp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tp)}catch(e){console.error(e)}}tp(),ed.exports=_e;var Tg=ed.exports,lc=Tg;Pr.createRoot=lc.createRoot,Pr.hydrateRoot=lc.hydrateRoot;const Oa={prefix:"fas",iconName:"circle-chevron-right",icon:[512,512,["chevron-circle-right"],"f138","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"]},Pg={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]},_a=Pg,np={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Ng={prefix:"fas",iconName:"volume-xmark",icon:[576,512,["volume-mute","volume-times"],"f6a9","M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},ja=Ng,zg={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Fa=zg,Da={prefix:"fas",iconName:"circle-chevron-left",icon:[512,512,["chevron-circle-left"],"f137","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"]},ac=()=>{};let Ra={},rp={},ip=null,op={mark:ac,measure:ac};try{typeof window<"u"&&(Ra=window),typeof document<"u"&&(rp=document),typeof MutationObserver<"u"&&(ip=MutationObserver),typeof performance<"u"&&(op=performance)}catch{}const{userAgent:uc=""}=Ra.navigator||{},Gt=Ra,Y=rp,cc=ip,Si=op;Gt.document;const Et=!!Y.documentElement&&!!Y.head&&typeof Y.addEventListener=="function"&&typeof Y.createElement=="function",sp=~uc.indexOf("MSIE")||~uc.indexOf("Trident/");var K="classic",lp="duotone",Me="sharp",Le="sharp-duotone",Ig=[K,lp,Me,Le],Mg={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},dc={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Lg=["kit"],Og=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,_g=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,jg={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Fg={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Dg={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Rg={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Bg={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Vg={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},ap={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},$g=["solid","regular","light","thin","duotone","brands"],up=[1,2,3,4,5,6,7,8,9,10],Gg=up.concat([11,12,13,14,15,16,17,18,19,20]),mr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Hg=[...Object.keys(Rg),...$g,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",mr.GROUP,mr.SWAP_OPACITY,mr.PRIMARY,mr.SECONDARY].concat(up.map(e=>"".concat(e,"x"))).concat(Gg.map(e=>"w-".concat(e))),Ug={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Wg={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Yg={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},fc={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const wt="___FONT_AWESOME___",yl=16,cp="fa",dp="svg-inline--fa",pn="data-fa-i2svg",wl="data-fa-pseudo-element",Xg="data-fa-pseudo-element-pending",Ba="data-prefix",Va="data-icon",pc="fontawesome-i2svg",Qg="async",Kg=["HTML","HEAD","STYLE","SCRIPT"],fp=(()=>{try{return!0}catch{return!1}})(),pp=[K,Me,Le];function ei(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[K]}})}const mp={...ap};mp[K]={...ap[K],...dc.kit,...dc["kit-duotone"]};const sn=ei(mp),xl={...Vg};xl[K]={...xl[K],...fc.kit,...fc["kit-duotone"]};const Wr=ei(xl),Sl={...Bg};Sl[K]={...Sl[K],...Yg.kit};const ln=ei(Sl),El={...Dg};El[K]={...El[K],...Wg.kit};const qg=ei(El),Zg=Og,hp="fa-layers-text",Jg=_g,ev={...Mg};ei(ev);const tv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],cs=mr,Xn=new Set;Object.keys(Wr[K]).map(Xn.add.bind(Xn));Object.keys(Wr[Me]).map(Xn.add.bind(Xn));Object.keys(Wr[Le]).map(Xn.add.bind(Xn));const nv=[...Lg,...Hg],Cr=Gt.FontAwesomeConfig||{};function rv(e){var t=Y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function iv(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}Y&&typeof Y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,r]=t;const i=iv(rv(n));i!=null&&(Cr[r]=i)});const gp={styleDefault:"solid",familyDefault:"classic",cssPrefix:cp,replacementClass:dp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Cr.familyPrefix&&(Cr.cssPrefix=Cr.familyPrefix);const Qn={...gp,...Cr};Qn.autoReplaceSvg||(Qn.observeMutations=!1);const _={};Object.keys(gp).forEach(e=>{Object.defineProperty(_,e,{enumerable:!0,set:function(t){Qn[e]=t,Ar.forEach(n=>n(_))},get:function(){return Qn[e]}})});Object.defineProperty(_,"familyPrefix",{enumerable:!0,set:function(e){Qn.cssPrefix=e,Ar.forEach(t=>t(_))},get:function(){return Qn.cssPrefix}});Gt.FontAwesomeConfig=_;const Ar=[];function ov(e){return Ar.push(e),()=>{Ar.splice(Ar.indexOf(e),1)}}const bt=yl,rt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function sv(e){if(!e||!Et)return;const t=Y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=Y.head.childNodes;let r=null;for(let i=n.length-1;i>-1;i--){const o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return Y.head.insertBefore(t,r),e}const lv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Yr(){let e=12,t="";for(;e-- >0;)t+=lv[Math.random()*62|0];return t}function Jn(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function $a(e){return e.classList?Jn(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function vp(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function av(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(vp(e[n]),'" '),"").trim()}function Lo(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Ga(e){return e.size!==rt.size||e.x!==rt.x||e.y!==rt.y||e.rotate!==rt.rotate||e.flipX||e.flipY}function uv(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),a={transform:"".concat(o," ").concat(s," ").concat(l)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:a,path:c}}function cv(e){let{transform:t,width:n=yl,height:r=yl,startCentered:i=!1}=e,o="";return i&&sp?o+="translate(".concat(t.x/bt-n/2,"em, ").concat(t.y/bt-r/2,"em) "):i?o+="translate(calc(-50% + ".concat(t.x/bt,"em), calc(-50% + ").concat(t.y/bt,"em)) "):o+="translate(".concat(t.x/bt,"em, ").concat(t.y/bt,"em) "),o+="scale(".concat(t.size/bt*(t.flipX?-1:1),", ").concat(t.size/bt*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var dv=`:root, :host {
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
}`;function yp(){const e=cp,t=dp,n=_.cssPrefix,r=_.replacementClass;let i=dv;if(n!==e||r!==t){const o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(r))}return i}let mc=!1;function ds(){_.autoAddCss&&!mc&&(sv(yp()),mc=!0)}var fv={mixout(){return{dom:{css:yp,insertCss:ds}}},hooks(){return{beforeDOMElementCreation(){ds()},beforeI2svg(){ds()}}}};const xt=Gt||{};xt[wt]||(xt[wt]={});xt[wt].styles||(xt[wt].styles={});xt[wt].hooks||(xt[wt].hooks={});xt[wt].shims||(xt[wt].shims=[]);var it=xt[wt];const wp=[],xp=function(){Y.removeEventListener("DOMContentLoaded",xp),uo=1,wp.map(e=>e())};let uo=!1;Et&&(uo=(Y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Y.readyState),uo||Y.addEventListener("DOMContentLoaded",xp));function pv(e){Et&&(uo?setTimeout(e,0):wp.push(e))}function ti(e){const{tag:t,attributes:n={},children:r=[]}=e;return typeof e=="string"?vp(e):"<".concat(t," ").concat(av(n),">").concat(r.map(ti).join(""),"</").concat(t,">")}function hc(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var fs=function(t,n,r,i){var o=Object.keys(t),s=o.length,l=n,a,c,f;for(r===void 0?(a=1,f=t[o[0]]):(a=0,f=r);a<s;a++)c=o[a],f=l(f,t[c],c,t);return f};function mv(e){const t=[];let n=0;const r=e.length;for(;n<r;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){const o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function kl(e){const t=mv(e);return t.length===1?t[0].toString(16):null}function hv(e,t){const n=e.length;let r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function gc(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function bl(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,i=gc(t);typeof it.hooks.addPack=="function"&&!r?it.hooks.addPack(e,gc(t)):it.styles[e]={...it.styles[e]||{},...i},e==="fas"&&bl("fa",t)}const{styles:Jt,shims:gv}=it,vv={[K]:Object.values(ln[K]),[Me]:Object.values(ln[Me]),[Le]:Object.values(ln[Le])};let Ha=null,Sp={},Ep={},kp={},bp={},Cp={};const yv={[K]:Object.keys(sn[K]),[Me]:Object.keys(sn[Me]),[Le]:Object.keys(sn[Le])};function wv(e){return~nv.indexOf(e)}function xv(e,t){const n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!wv(i)?i:null}const Ap=()=>{const e=r=>fs(Jt,(i,o,s)=>(i[s]=fs(o,r,{}),i),{});Sp=e((r,i,o)=>(i[3]&&(r[i[3]]=o),i[2]&&i[2].filter(l=>typeof l=="number").forEach(l=>{r[l.toString(16)]=o}),r)),Ep=e((r,i,o)=>(r[o]=o,i[2]&&i[2].filter(l=>typeof l=="string").forEach(l=>{r[l]=o}),r)),Cp=e((r,i,o)=>{const s=i[2];return r[o]=o,s.forEach(l=>{r[l]=o}),r});const t="far"in Jt||_.autoFetchSvg,n=fs(gv,(r,i)=>{const o=i[0];let s=i[1];const l=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});kp=n.names,bp=n.unicodes,Ha=Oo(_.styleDefault,{family:_.familyDefault})};ov(e=>{Ha=Oo(e.styleDefault,{family:_.familyDefault})});Ap();function Ua(e,t){return(Sp[e]||{})[t]}function Sv(e,t){return(Ep[e]||{})[t]}function It(e,t){return(Cp[e]||{})[t]}function Tp(e){return kp[e]||{prefix:null,iconName:null}}function Ev(e){const t=bp[e],n=Ua("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ht(){return Ha}const Wa=()=>({prefix:null,iconName:null,rest:[]});function Oo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=K}=t,r=sn[n][e],i=Wr[n][e]||Wr[n][r],o=e in it.styles?e:null;return i||o||null}const kv={[K]:Object.keys(ln[K]),[Me]:Object.keys(ln[Me]),[Le]:Object.keys(ln[Le])};function _o(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,r={[K]:"".concat(_.cssPrefix,"-").concat(K),[Me]:"".concat(_.cssPrefix,"-").concat(Me),[Le]:"".concat(_.cssPrefix,"-").concat(Le)};let i=null,o=K;const s=Ig.filter(a=>a!==lp);s.forEach(a=>{(e.includes(r[a])||e.some(c=>kv[a].includes(c)))&&(o=a)});const l=e.reduce((a,c)=>{const f=xv(_.cssPrefix,c);if(Jt[c]?(c=vv[o].includes(c)?qg[o][c]:c,i=c,a.prefix=c):yv[o].indexOf(c)>-1?(i=c,a.prefix=Oo(c,{family:o})):f?a.iconName=f:c!==_.replacementClass&&!s.some(p=>c===r[p])&&a.rest.push(c),!n&&a.prefix&&a.iconName){const p=i==="fa"?Tp(a.iconName):{},m=It(a.prefix,a.iconName);p.prefix&&(i=null),a.iconName=p.iconName||m||a.iconName,a.prefix=p.prefix||a.prefix,a.prefix==="far"&&!Jt.far&&Jt.fas&&!_.autoFetchSvg&&(a.prefix="fas")}return a},Wa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===Me&&(Jt.fass||_.autoFetchSvg)&&(l.prefix="fass",l.iconName=It(l.prefix,l.iconName)||l.iconName),!l.prefix&&o===Le&&(Jt.fasds||_.autoFetchSvg)&&(l.prefix="fasds",l.iconName=It(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=Ht()||"fas"),l}class bv{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...i[o]},bl(o,i[o]);const s=ln[K][o];s&&bl(s,i[o]),Ap()})}reset(){this.definitions={}}_pullDefinitions(t,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(i=>{const{prefix:o,iconName:s,icon:l}=r[i],a=l[2];t[o]||(t[o]={}),a.length>0&&a.forEach(c=>{typeof c=="string"&&(t[o][c]=l)}),t[o][s]=l}),t}}let vc=[],In={};const Rn={},Cv=Object.keys(Rn);function Av(e,t){let{mixoutsTo:n}=t;return vc=e,In={},Object.keys(Rn).forEach(r=>{Cv.indexOf(r)===-1&&delete Rn[r]}),vc.forEach(r=>{const i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(o=>{typeof i[o]=="function"&&(n[o]=i[o]),typeof i[o]=="object"&&Object.keys(i[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{In[s]||(In[s]=[]),In[s].push(o[s])})}r.provides&&r.provides(Rn)}),n}function Cl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return(In[e]||[]).forEach(s=>{t=s.apply(null,[t,...r])}),t}function mn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(In[e]||[]).forEach(o=>{o.apply(null,n)})}function Ut(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Rn[e]?Rn[e].apply(null,t):void 0}function Al(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||Ht();if(t)return t=It(n,t)||t,hc(Pp.definitions,n,t)||hc(it.styles,n,t)}const Pp=new bv,Tv=()=>{_.autoReplaceSvg=!1,_.observeMutations=!1,mn("noAuto")},Pv={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Et?(mn("beforeI2svg",e),Ut("pseudoElements2svg",e),Ut("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;_.autoReplaceSvg===!1&&(_.autoReplaceSvg=!0),_.observeMutations=!0,pv(()=>{zv({autoReplaceSvgRoot:t}),mn("watch",e)})}},Nv={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:It(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Oo(e[0]);return{prefix:n,iconName:It(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(_.cssPrefix,"-"))>-1||e.match(Zg))){const t=_o(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||Ht(),iconName:It(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=Ht();return{prefix:t,iconName:It(t,e)||e}}}},Fe={noAuto:Tv,config:_,dom:Pv,parse:Nv,library:Pp,findIconDefinition:Al,toHtml:ti},zv=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=Y}=e;(Object.keys(it.styles).length>0||_.autoFetchSvg)&&Et&&_.autoReplaceSvg&&Fe.dom.i2svg({node:t})};function jo(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>ti(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Et)return;const n=Y.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Iv(e){let{children:t,main:n,mask:r,attributes:i,styles:o,transform:s}=e;if(Ga(s)&&n.found&&!r.found){const{width:l,height:a}=n,c={x:l/a/2,y:.5};i.style=Lo({...o,"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")})}return[{tag:"svg",attributes:i,children:t}]}function Mv(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:o}=e;const s=o===!0?"".concat(t,"-").concat(_.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:s},children:r}]}]}function Ya(e){const{icons:{main:t,mask:n},prefix:r,iconName:i,transform:o,symbol:s,title:l,maskId:a,titleId:c,extra:f,watchable:p=!1}=e,{width:m,height:g}=n.found?n:t,v=r==="fak",y=[_.replacementClass,i?"".concat(_.cssPrefix,"-").concat(i):""].filter(S=>f.classes.indexOf(S)===-1).filter(S=>S!==""||!!S).concat(f.classes).join(" ");let b={children:[],attributes:{...f.attributes,"data-prefix":r,"data-icon":i,class:y,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)}};const u=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};p&&(b.attributes[pn]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(c||Yr())},children:[l]}),delete b.attributes.title);const d={...b,prefix:r,iconName:i,main:t,mask:n,maskId:a,transform:o,symbol:s,styles:{...u,...f.styles}},{children:h,attributes:w}=n.found&&t.found?Ut("generateAbstractMask",d)||{children:[],attributes:{}}:Ut("generateAbstractIcon",d)||{children:[],attributes:{}};return d.children=h,d.attributes=w,s?Mv(d):Iv(d)}function yc(e){const{content:t,width:n,height:r,transform:i,title:o,extra:s,watchable:l=!1}=e,a={...s.attributes,...o?{title:o}:{},class:s.classes.join(" ")};l&&(a[pn]="");const c={...s.styles};Ga(i)&&(c.transform=cv({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const f=Lo(c);f.length>0&&(a.style=f);const p=[];return p.push({tag:"span",attributes:a,children:[t]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}function Lv(e){const{content:t,title:n,extra:r}=e,i={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=Lo(r.styles);o.length>0&&(i.style=o);const s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:ps}=it;function Tl(e){const t=e[0],n=e[1],[r]=e.slice(4);let i=null;return Array.isArray(r)?i={tag:"g",attributes:{class:"".concat(_.cssPrefix,"-").concat(cs.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(cs.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(_.cssPrefix,"-").concat(cs.PRIMARY),fill:"currentColor",d:r[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:i}}const Ov={found:!1,width:512,height:512};function _v(e,t){!fp&&!_.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Pl(e,t){let n=t;return t==="fa"&&_.styleDefault!==null&&(t=Ht()),new Promise((r,i)=>{if(n==="fa"){const o=Tp(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ps[t]&&ps[t][e]){const o=ps[t][e];return r(Tl(o))}_v(e,t),r({...Ov,icon:_.showMissingIcons&&e?Ut("missingIconAbstract")||{}:{}})})}const wc=()=>{},Nl=_.measurePerformance&&Si&&Si.mark&&Si.measure?Si:{mark:wc,measure:wc},hr='FA "6.6.0"',jv=e=>(Nl.mark("".concat(hr," ").concat(e," begins")),()=>Np(e)),Np=e=>{Nl.mark("".concat(hr," ").concat(e," ends")),Nl.measure("".concat(hr," ").concat(e),"".concat(hr," ").concat(e," begins"),"".concat(hr," ").concat(e," ends"))};var Xa={begin:jv,end:Np};const ji=()=>{};function xc(e){return typeof(e.getAttribute?e.getAttribute(pn):null)=="string"}function Fv(e){const t=e.getAttribute?e.getAttribute(Ba):null,n=e.getAttribute?e.getAttribute(Va):null;return t&&n}function Dv(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(_.replacementClass)}function Rv(){return _.autoReplaceSvg===!0?Fi.replace:Fi[_.autoReplaceSvg]||Fi.replace}function Bv(e){return Y.createElementNS("http://www.w3.org/2000/svg",e)}function Vv(e){return Y.createElement(e)}function zp(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Bv:Vv}=t;if(typeof e=="string")return Y.createTextNode(e);const r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])}),(e.children||[]).forEach(function(o){r.appendChild(zp(o,{ceFn:n}))}),r}function $v(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const Fi={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(zp(n),t)}),t.getAttribute(pn)===null&&_.keepOriginalSource){let n=Y.createComment($v(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~$a(t).indexOf(_.replacementClass))return Fi.replace(e);const r=new RegExp("".concat(_.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,l)=>(l===_.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",o.toNode.join(" "))}const i=n.map(o=>ti(o)).join(`
`);t.setAttribute(pn,""),t.innerHTML=i}};function Sc(e){e()}function Ip(e,t){const n=typeof t=="function"?t:ji;if(e.length===0)n();else{let r=Sc;_.mutateApproach===Qg&&(r=Gt.requestAnimationFrame||Sc),r(()=>{const i=Rv(),o=Xa.begin("mutate");e.map(i),o(),n()})}}let Qa=!1;function Mp(){Qa=!0}function zl(){Qa=!1}let co=null;function Ec(e){if(!cc||!_.observeMutations)return;const{treeCallback:t=ji,nodeCallback:n=ji,pseudoElementsCallback:r=ji,observeMutationsRoot:i=Y}=e;co=new cc(o=>{if(Qa)return;const s=Ht();Jn(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!xc(l.addedNodes[0])&&(_.searchPseudoElements&&r(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&_.searchPseudoElements&&r(l.target.parentNode),l.type==="attributes"&&xc(l.target)&&~tv.indexOf(l.attributeName))if(l.attributeName==="class"&&Fv(l.target)){const{prefix:a,iconName:c}=_o($a(l.target));l.target.setAttribute(Ba,a||s),c&&l.target.setAttribute(Va,c)}else Dv(l.target)&&n(l.target)})}),Et&&co.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Gv(){co&&co.disconnect()}function Hv(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((r,i)=>{const o=i.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(r[s]=l.join(":").trim()),r},{})),n}function Uv(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"";let i=_o($a(e));return i.prefix||(i.prefix=Ht()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Sv(i.prefix,e.innerText)||Ua(i.prefix,kl(e.innerText))),!i.iconName&&_.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Wv(e){const t=Jn(e.attributes).reduce((i,o)=>(i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return _.autoA11y&&(n?t["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(r||Yr()):(t["aria-hidden"]="true",t.focusable="false")),t}function Yv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:rt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function kc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:i}=Uv(e),o=Wv(e),s=Cl("parseNodeAttributes",{},e);let l=t.styleParser?Hv(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:rt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o},...s}}const{styles:Xv}=it;function Lp(e){const t=_.autoReplaceSvg==="nest"?kc(e,{styleParser:!1}):kc(e);return~t.extra.classes.indexOf(hp)?Ut("generateLayersText",e,t):Ut("generateSvgReplacementMutation",e,t)}let at=new Set;pp.map(e=>{at.add("fa-".concat(e))});Object.keys(sn[K]).map(at.add.bind(at));Object.keys(sn[Me]).map(at.add.bind(at));Object.keys(sn[Le]).map(at.add.bind(at));at=[...at];function bc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Et)return Promise.resolve();const n=Y.documentElement.classList,r=f=>n.add("".concat(pc,"-").concat(f)),i=f=>n.remove("".concat(pc,"-").concat(f)),o=_.autoFetchSvg?at:pp.map(f=>"fa-".concat(f)).concat(Object.keys(Xv));o.includes("fa")||o.push("fa");const s=[".".concat(hp,":not([").concat(pn,"])")].concat(o.map(f=>".".concat(f,":not([").concat(pn,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=Jn(e.querySelectorAll(s))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();const a=Xa.begin("onTree"),c=l.reduce((f,p)=>{try{const m=Lp(p);m&&f.push(m)}catch(m){fp||m.name==="MissingIcon"&&console.error(m)}return f},[]);return new Promise((f,p)=>{Promise.all(c).then(m=>{Ip(m,()=>{r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),a(),f()})}).catch(m=>{a(),p(m)})})}function Qv(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Lp(e).then(n=>{n&&Ip([n],t)})}function Kv(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(t||{}).icon?t:Al(t||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Al(i||{})),e(r,{...n,mask:i})}}const qv=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=rt,symbol:r=!1,mask:i=null,maskId:o=null,title:s=null,titleId:l=null,classes:a=[],attributes:c={},styles:f={}}=t;if(!e)return;const{prefix:p,iconName:m,icon:g}=e;return jo({type:"icon",...e},()=>(mn("beforeDOMElementCreation",{iconDefinition:e,params:t}),_.autoA11y&&(s?c["aria-labelledby"]="".concat(_.replacementClass,"-title-").concat(l||Yr()):(c["aria-hidden"]="true",c.focusable="false")),Ya({icons:{main:Tl(g),mask:i?Tl(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:{...rt,...n},symbol:r,title:s,maskId:o,titleId:l,extra:{attributes:c,styles:f,classes:a}})))};var Zv={mixout(){return{icon:Kv(qv)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=bc,e.nodeCallback=Qv,e}}},provides(e){e.i2svg=function(t){const{node:n=Y,callback:r=()=>{}}=t;return bc(n,r)},e.generateSvgReplacementMutation=function(t,n){const{iconName:r,title:i,titleId:o,prefix:s,transform:l,symbol:a,mask:c,maskId:f,extra:p}=n;return new Promise((m,g)=>{Promise.all([Pl(r,s),c.iconName?Pl(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(v=>{let[y,b]=v;m([t,Ya({icons:{main:y,mask:b},prefix:s,iconName:r,transform:l,symbol:a,maskId:f,title:i,titleId:o,extra:p,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(t){let{children:n,attributes:r,main:i,transform:o,styles:s}=t;const l=Lo(s);l.length>0&&(r.style=l);let a;return Ga(o)&&(a=Ut("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),n.push(a||i.icon),{children:n,attributes:r}}}},Jv={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return jo({type:"layer"},()=>{mn("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e(i=>{Array.isArray(i)?i.map(o=>{r=r.concat(o.abstract)}):r=r.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(_.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},e0={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:i={},styles:o={}}=t;return jo({type:"counter",content:e},()=>(mn("beforeDOMElementCreation",{content:e,params:t}),Lv({content:e.toString(),title:n,extra:{attributes:i,styles:o,classes:["".concat(_.cssPrefix,"-layers-counter"),...r]}})))}}}},t0={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=rt,title:r=null,classes:i=[],attributes:o={},styles:s={}}=t;return jo({type:"text",content:e},()=>(mn("beforeDOMElementCreation",{content:e,params:t}),yc({content:e,transform:{...rt,...n},title:r,extra:{attributes:o,styles:s,classes:["".concat(_.cssPrefix,"-layers-text"),...i]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:r,transform:i,extra:o}=n;let s=null,l=null;if(sp){const a=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();s=c.width/a,l=c.height/a}return _.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,yc({content:t.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}};const n0=new RegExp('"',"ug"),Cc=[1105920,1112319],Ac={FontAwesome:{normal:"fas",400:"fas"},...Fg,...jg,...Ug},Il=Object.keys(Ac).reduce((e,t)=>(e[t.toLowerCase()]=Ac[t],e),{}),r0=Object.keys(Il).reduce((e,t)=>{const n=Il[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function i0(e){const t=e.replace(n0,""),n=hv(t,0),r=n>=Cc[0]&&n<=Cc[1],i=t.length===2?t[0]===t[1]:!1;return{value:kl(i?t[0]:t),isSecondary:r||i}}function o0(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),i=isNaN(r)?"normal":r;return(Il[n]||{})[i]||r0[n]}function Tc(e,t){const n="".concat(Xg).concat(t.replace(":","-"));return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();const s=Jn(e.children).filter(m=>m.getAttribute(wl)===t)[0],l=Gt.getComputedStyle(e,t),a=l.getPropertyValue("font-family"),c=a.match(Jg),f=l.getPropertyValue("font-weight"),p=l.getPropertyValue("content");if(s&&!c)return e.removeChild(s),r();if(c&&p!=="none"&&p!==""){const m=l.getPropertyValue("content");let g=o0(a,f);const{value:v,isSecondary:y}=i0(m),b=c[0].startsWith("FontAwesome");let u=Ua(g,v),d=u;if(b){const h=Ev(v);h.iconName&&h.prefix&&(u=h.iconName,g=h.prefix)}if(u&&!y&&(!s||s.getAttribute(Ba)!==g||s.getAttribute(Va)!==d)){e.setAttribute(n,d),s&&e.removeChild(s);const h=Yv(),{extra:w}=h;w.attributes[wl]=t,Pl(u,g).then(S=>{const T=Ya({...h,icons:{main:S,mask:Wa()},prefix:g,iconName:d,extra:w,watchable:!0}),z=Y.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=T.map(A=>ti(A)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function s0(e){return Promise.all([Tc(e,"::before"),Tc(e,"::after")])}function l0(e){return e.parentNode!==document.head&&!~Kg.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(wl)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Pc(e){if(Et)return new Promise((t,n)=>{const r=Jn(e.querySelectorAll("*")).filter(l0).map(s0),i=Xa.begin("searchPseudoElements");Mp(),Promise.all(r).then(()=>{i(),zl(),t()}).catch(()=>{i(),zl(),n()})})}var a0={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Pc,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=Y}=t;_.searchPseudoElements&&Pc(n)}}};let Nc=!1;var u0={mixout(){return{dom:{unwatch(){Mp(),Nc=!0}}}},hooks(){return{bootstrap(){Ec(Cl("mutationObserverCallbacks",{}))},noAuto(){Gv()},watch(e){const{observeMutationsRoot:t}=e;Nc?zl():Ec(Cl("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const zc=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,r)=>{const i=r.toLowerCase().split("-"),o=i[0];let s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},t)};var c0={mixout(){return{parse:{transform:e=>zc(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=zc(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:r,containerWidth:i,iconWidth:o}=t;const s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),a="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(a," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:f,path:p};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const ms={x:0,y:0,width:"100%",height:"100%"};function Ic(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function d0(e){return e.tag==="g"?e.children:[e]}var f0={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?_o(n.split(" ").map(i=>i.trim())):Wa();return r.prefix||(r.prefix=Ht()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:r,main:i,mask:o,maskId:s,transform:l}=t;const{width:a,icon:c}=i,{width:f,icon:p}=o,m=uv({transform:l,containerWidth:f,iconWidth:a}),g={tag:"rect",attributes:{...ms,fill:"white"}},v=c.children?{children:c.children.map(Ic)}:{},y={tag:"g",attributes:{...m.inner},children:[Ic({tag:c.tag,attributes:{...c.attributes,...m.path},...v})]},b={tag:"g",attributes:{...m.outer},children:[y]},u="mask-".concat(s||Yr()),d="clip-".concat(s||Yr()),h={tag:"mask",attributes:{...ms,id:u,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,b]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:d0(p)},h]};return n.push(w,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(u,")"),...ms}}),{children:n,attributes:r}}}},p0={provides(e){let t=!1;Gt.matchMedia&&(t=Gt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...i,attributeName:"opacity"},s={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return t||s.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},m0={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return e.symbol=r,e}}}},h0=[fv,Zv,Jv,e0,t0,a0,u0,c0,f0,p0,m0];Av(h0,{mixoutsTo:Fe});Fe.noAuto;Fe.config;Fe.library;Fe.dom;const Ml=Fe.parse;Fe.findIconDefinition;Fe.toHtml;const g0=Fe.icon;Fe.layer;Fe.text;Fe.counter;var Op={exports:{}},v0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",y0=v0,w0=y0;function _p(){}function jp(){}jp.resetWarningCache=_p;var x0=function(){function e(r,i,o,s,l,a){if(a!==w0){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:jp,resetWarningCache:_p};return n.PropTypes=n,n};Op.exports=x0();var S0=Op.exports;const R=$c(S0);function Mc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function tt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mc(Object(n),!0).forEach(function(r){Mn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fo(e){"@babel/helpers - typeof";return fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fo(e)}function Mn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function k0(e,t){if(e==null)return{};var n=E0(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ll(e){return b0(e)||C0(e)||A0(e)||T0()}function b0(e){if(Array.isArray(e))return Ol(e)}function C0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function A0(e,t){if(e){if(typeof e=="string")return Ol(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ol(e,t)}}function Ol(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P0(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,l=e.flash,a=e.spin,c=e.spinPulse,f=e.spinReverse,p=e.pulse,m=e.fixedWidth,g=e.inverse,v=e.border,y=e.listItem,b=e.flip,u=e.size,d=e.rotation,h=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":l,"fa-spin":a,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":m,"fa-inverse":g,"fa-border":v,"fa-li":y,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},Mn(t,"fa-".concat(u),typeof u<"u"&&u!==null),Mn(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Mn(t,"fa-pull-".concat(h),typeof h<"u"&&h!==null),Mn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(S){return w[S]?S:null}).filter(function(S){return S})}function N0(e){return e=e-0,e===e}function Fp(e){return N0(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var z0=["style"];function I0(e){return e.charAt(0).toUpperCase()+e.slice(1)}function M0(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Fp(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[I0(i)]=o:t[i]=o,t},{})}function Dp(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(a){return Dp(e,a)}),i=Object.keys(t.attributes||{}).reduce(function(a,c){var f=t.attributes[c];switch(c){case"class":a.attrs.className=f,delete t.attributes.class;break;case"style":a.attrs.style=M0(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?a.attrs[c.toLowerCase()]=f:a.attrs[Fp(c)]=f}return a},{attrs:{}}),o=n.style,s=o===void 0?{}:o,l=k0(n,z0);return i.attrs.style=tt(tt({},i.attrs.style),s),e.apply(void 0,[t.tag,tt(tt({},i.attrs),l)].concat(Ll(r)))}var Rp=!1;try{Rp=!0}catch{}function L0(){if(!Rp&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Lc(e){if(e&&fo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ml.icon)return Ml.icon(e);if(e===null)return null;if(e&&fo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function hs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Mn({},e,t):{}}var Oc={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},fe=X.forwardRef(function(e,t){var n=tt(tt({},Oc),e),r=n.icon,i=n.mask,o=n.symbol,s=n.className,l=n.title,a=n.titleId,c=n.maskId,f=Lc(r),p=hs("classes",[].concat(Ll(P0(n)),Ll((s||"").split(" ")))),m=hs("transform",typeof n.transform=="string"?Ml.transform(n.transform):n.transform),g=hs("mask",Lc(i)),v=g0(f,tt(tt(tt(tt({},p),m),g),{},{symbol:o,title:l,titleId:a,maskId:c}));if(!v)return L0("Could not find icon",f),null;var y=v.abstract,b={ref:t};return Object.keys(n).forEach(function(u){Oc.hasOwnProperty(u)||(b[u]=n[u])}),O0(y[0],b)});fe.displayName="FontAwesomeIcon";fe.propTypes={beat:R.bool,border:R.bool,beatFade:R.bool,bounce:R.bool,className:R.string,fade:R.bool,flash:R.bool,mask:R.oneOfType([R.object,R.array,R.string]),maskId:R.string,fixedWidth:R.bool,inverse:R.bool,flip:R.oneOf([!0,!1,"horizontal","vertical","both"]),icon:R.oneOfType([R.object,R.array,R.string]),listItem:R.bool,pull:R.oneOf(["right","left"]),pulse:R.bool,rotation:R.oneOf([0,90,180,270]),shake:R.bool,size:R.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:R.bool,spinPulse:R.bool,spinReverse:R.bool,symbol:R.oneOfType([R.bool,R.string]),title:R.string,titleId:R.string,transform:R.oneOfType([R.string,R.object]),swapOpacity:R.bool};var O0=Dp.bind(null,X.createElement);const _0=()=>E.jsx("div",{className:"inner not-played",children:E.jsx("p",{className:"txt2-123"})}),j0=({campaigns:e,loading:t})=>{const n=N.useRef(null),[r,i]=N.useState(!1),[o,s]=N.useState(null),[l,a]=N.useState(0),[c,f]=N.useState(!1),[p,m]=N.useState(0),[g,v]=N.useState({}),[y,b]=N.useState(!1);N.useEffect(()=>{const C=()=>{document.hidden&&n.current&&(n.current.muted=!0,f(!0))};return document.addEventListener("visibilitychange",C),()=>{document.removeEventListener("visibilitychange",C)}},[]),N.useEffect(()=>{const C=n.current,P=()=>{b(C.paused),C.paused&&C.play()};return C&&(C.addEventListener("play",P),C.addEventListener("pause",P)),()=>{C&&(C.removeEventListener("play",P),C.removeEventListener("pause",P))}},[o,l,e]),N.useEffect(()=>{if(o!==null&&e[o]){const C=e[o];if(l<C.videoId.length){const P=C.videoId[l];n.current.src=P,n.current.play(),m(0),b(!1)}}},[o,l,e]),N.useEffect(()=>{const C=setInterval(()=>{n.current&&m(n.current.currentTime/n.current.duration*100)},100);return()=>clearInterval(C)},[l,o]),N.useEffect(()=>{n.current&&(n.current.muted=c)},[c]);const u=C=>{s(C),a(0)},d=()=>{if(v(C=>({...C,[`${o}-${l}`]:!0})),m(100),o!==null&&e[o]){const C=e[o];l+1<C.videoId.length?a(l+1):o+1<e.length?(s(o+1),a(0)):(s(null),a(0))}},h=()=>{o!==null?o+1<e.length?(s(o+1),a(0)):(s(0),a(0)):e.length>0&&(s(0),a(0))},w=()=>{o!==null?o>0?(s(o-1),a(0)):(s(e.length-1),a(0)):e.length>0&&(s(e.length-1),a(0))},S=()=>{o!==null&&e[o]&&l+1<e[o].videoId.length&&(v(C=>({...C,[`${o}-${l}`]:!0})),a(l+1))},T=()=>{o!==null&&e[o]&&l>0&&a(l-1)},z=()=>{f(C=>!C)},A=()=>{s(null),a(0),b(!1),f(!1)},M=C=>{const P=C.currentTarget.getBoundingClientRect(),D=C.clientX-P.left,$=P.width;D<$/2?T():S()},x=()=>{i(!r)},k=C=>{const P=C.split(`
`);return P.length>2?{truncated:P.slice(0,2).join(`
`),hasMore:!0}:{truncated:C,hasMore:!1}};return t?E.jsx("div",{className:"storiesHeader ",children:E.jsx("div",{className:"outer ",children:Array.from({length:5}).map((C,P)=>E.jsx(_0,{},P))})}):E.jsx(E.Fragment,{children:E.jsxs("div",{className:"storiesHeader",children:[E.jsx("div",{className:"outer",children:e.map((C,P)=>E.jsx("div",{onClick:()=>u(P),className:`inner ${o===P?"active":""} ${C.videoId.some((D,$)=>g[`${P}-${$}`])?"played":"not-played"}`,children:E.jsx("img",{src:C.campaignPhoto,alt:"Campaign",className:"campaign-photo"})},P))}),E.jsxs("div",{className:`topp ${o!==null?"active":""}`,children:[E.jsx("div",{className:"next",onClick:h,children:E.jsx(fe,{icon:Oa})}),E.jsx("div",{className:"previous",onClick:w,children:E.jsx(fe,{icon:Da})}),E.jsx("div",{className:"outer-box",children:o!==null&&E.jsxs("div",{className:"boxed-video",children:[E.jsx("div",{className:"mute-unmute",onClick:z,children:c?E.jsx(fe,{icon:ja}):E.jsx(fe,{icon:_a})}),E.jsx("div",{className:"close-button",onClick:A,children:E.jsx(fe,{className:"close",icon:Fa})}),E.jsx("div",{className:"progress-bar",children:e[o].videoId.map((C,P)=>E.jsx("div",{className:"progress",children:E.jsx("div",{className:"progress1",style:{width:`${P===l?p:g[`${o}-${P}`]?100:0}%`}})},P))}),E.jsx("video",{className:"boxed-video",ref:n,onClick:M,onEnded:d,autoPlay:!0,children:"Your browser does not support the video tag."}),E.jsxs("div",{className:"bookdiv",children:[E.jsx("div",{className:"img1",children:E.jsx("img",{className:"img",src:e[o].campaignPhoto,alt:"Campaign"})}),E.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[E.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[o].campaignName}),E.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[r?e[o].campaignDetails:k(e[o].campaignDetails).truncated,k(e[o].campaignDetails).hasMore&&E.jsx("div",{children:E.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:x,children:r?" View Less":" View More"})})]}),E.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[o].offerPrice.currency,e[o].offerPrice.price]})]}),E.jsx("div",{className:"divbtn",children:E.jsx("a",{href:e[o].campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]})})]})]})})};function F0(){N.useState([]);const[e,t]=N.useState([]);N.useState("");const[n,r]=N.useState(!0);return N.useEffect(()=>{const o=document.getElementById("root-stories").dataset.campaignId;o?(async l=>{try{const c=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${l}`)).json();t(c.campaigns)}catch(a){console.error("Error fetching data:",a)}})(o):console.log("no campaign id found!")},[]),N.useEffect(()=>{e.length>0&&r(!1)},[e]),E.jsxs("div",{className:"App1",children:[E.jsx("style",{children:`
                
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
    }`}),E.jsx(j0,{campaigns:e,loading:n})]})}function _c(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Ka(e,t){e===void 0&&(e={}),t===void 0&&(t={}),Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:_c(t[n])&&_c(e[n])&&Object.keys(t[n]).length>0&&Ka(e[n],t[n])})}const Bp={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function er(){const e=typeof document<"u"?document:{};return Ka(e,Bp),e}const D0={document:Bp,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function De(){const e=typeof window<"u"?window:{};return Ka(e,D0),e}function R0(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function B0(e){const t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function _l(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function po(){return Date.now()}function V0(e){const t=De();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function $0(e,t){t===void 0&&(t="x");const n=De();let r,i,o;const s=V0(e);return n.WebKitCSSMatrix?(i=s.transform||s.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),t==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Ei(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function G0(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ne(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!G0(r)){const i=Object.keys(Object(r)).filter(o=>t.indexOf(o)<0);for(let o=0,s=i.length;o<s;o+=1){const l=i[o],a=Object.getOwnPropertyDescriptor(r,l);a!==void 0&&a.enumerable&&(Ei(e[l])&&Ei(r[l])?r[l].__swiper__?e[l]=r[l]:Ne(e[l],r[l]):!Ei(e[l])&&Ei(r[l])?(e[l]={},r[l].__swiper__?e[l]=r[l]:Ne(e[l],r[l])):e[l]=r[l])}}}return e}function ki(e,t,n){e.style.setProperty(t,n)}function Vp(e){let{swiper:t,targetPosition:n,side:r}=e;const i=De(),o=-t.translate;let s=null,l;const a=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=n>o?"next":"prev",f=(m,g)=>c==="next"&&m>=g||c==="prev"&&m<=g,p=()=>{l=new Date().getTime(),s===null&&(s=l);const m=Math.max(Math.min((l-s)/a,1),0),g=.5-Math.cos(m*Math.PI)/2;let v=o+g*(n-o);if(f(v,n)&&(v=n),t.wrapperEl.scrollTo({[r]:v}),f(v,n)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:v})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(p)};p()}function qa(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function ot(e,t){return t===void 0&&(t=""),[...e.children].filter(n=>n.matches(t))}function mo(e){try{console.warn(e);return}catch{}}function Xr(e,t){t===void 0&&(t=[]);const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:R0(t)),n}function H0(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function U0(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function Mt(e,t){return De().getComputedStyle(e,null).getPropertyValue(t)}function ho(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function $p(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function jl(e,t,n){const r=De();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function ae(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Gp(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach(i=>{if(!n[i]&&n.auto===!0){let o=ot(e.el,`.${r[i]}`)[0];o||(o=Xr("div",r[i]),o.className=r[i],e.el.append(o)),n[i]=o,t[i]=o}}),n}function W0(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;n({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};function o(v){let y;return v&&typeof v=="string"&&t.isElement&&(y=t.el.querySelector(v),y)?y:(v&&(typeof v=="string"&&(y=[...document.querySelectorAll(v)]),t.params.uniqueNavElements&&typeof v=="string"&&y&&y.length>1&&t.el.querySelectorAll(v).length===1?y=t.el.querySelector(v):y&&y.length===1&&(y=y[0])),v&&!y?v:y)}function s(v,y){const b=t.params.navigation;v=ae(v),v.forEach(u=>{u&&(u.classList[y?"add":"remove"](...b.disabledClass.split(" ")),u.tagName==="BUTTON"&&(u.disabled=y),t.params.watchOverflow&&t.enabled&&u.classList[t.isLocked?"add":"remove"](b.lockClass))})}function l(){const{nextEl:v,prevEl:y}=t.navigation;if(t.params.loop){s(y,!1),s(v,!1);return}s(y,t.isBeginning&&!t.params.rewind),s(v,t.isEnd&&!t.params.rewind)}function a(v){v.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(v){v.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function f(){const v=t.params.navigation;if(t.params.navigation=Gp(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(v.nextEl||v.prevEl))return;let y=o(v.nextEl),b=o(v.prevEl);Object.assign(t.navigation,{nextEl:y,prevEl:b}),y=ae(y),b=ae(b);const u=(d,h)=>{d&&d.addEventListener("click",h==="next"?c:a),!t.enabled&&d&&d.classList.add(...v.lockClass.split(" "))};y.forEach(d=>u(d,"next")),b.forEach(d=>u(d,"prev"))}function p(){let{nextEl:v,prevEl:y}=t.navigation;v=ae(v),y=ae(y);const b=(u,d)=>{u.removeEventListener("click",d==="next"?c:a),u.classList.remove(...t.params.navigation.disabledClass.split(" "))};v.forEach(u=>b(u,"next")),y.forEach(u=>b(u,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?g():(f(),l())}),r("toEdge fromEdge lock unlock",()=>{l()}),r("destroy",()=>{p()}),r("enable disable",()=>{let{nextEl:v,prevEl:y}=t.navigation;if(v=ae(v),y=ae(y),t.enabled){l();return}[...v,...y].filter(b=>!!b).forEach(b=>b.classList.add(t.params.navigation.lockClass))}),r("click",(v,y)=>{let{nextEl:b,prevEl:u}=t.navigation;b=ae(b),u=ae(u);const d=y.target;let h=u.includes(d)||b.includes(d);if(t.isElement&&!h){const w=y.path||y.composedPath&&y.composedPath();w&&(h=w.find(S=>b.includes(S)||u.includes(S)))}if(t.params.navigation.hideOnClick&&!h){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===d||t.pagination.el.contains(d)))return;let w;b.length?w=b[0].classList.contains(t.params.navigation.hiddenClass):u.length&&(w=u[0].classList.contains(t.params.navigation.hiddenClass)),i(w===!0?"navigationShow":"navigationHide"),[...b,...u].filter(S=>!!S).forEach(S=>S.classList.toggle(t.params.navigation.hiddenClass))}});const m=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),f(),l()},g=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),p()};Object.assign(t.navigation,{enable:m,disable:g,update:l,init:f,destroy:p})}function ur(e){return e===void 0&&(e=""),`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Y0(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o="swiper-pagination";n({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:u=>u,formatFractionTotal:u=>u,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),t.pagination={el:null,bullets:[]};let s,l=0;function a(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function c(u,d){const{bulletActiveClass:h}=t.params.pagination;u&&(u=u[`${d==="prev"?"previous":"next"}ElementSibling`],u&&(u.classList.add(`${h}-${d}`),u=u[`${d==="prev"?"previous":"next"}ElementSibling`],u&&u.classList.add(`${h}-${d}-${d}`)))}function f(u){const d=u.target.closest(ur(t.params.pagination.bulletClass));if(!d)return;u.preventDefault();const h=ho(d)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===h)return;t.slideToLoop(h)}else t.slideTo(h)}function p(){const u=t.rtl,d=t.params.pagination;if(a())return;let h=t.pagination.el;h=ae(h);let w,S;const T=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,z=t.params.loop?Math.ceil(T/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(S=t.previousRealIndex||0,w=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(w=t.snapIndex,S=t.previousSnapIndex):(S=t.previousIndex||0,w=t.activeIndex||0),d.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const A=t.pagination.bullets;let M,x,k;if(d.dynamicBullets&&(s=jl(A[0],t.isHorizontal()?"width":"height"),h.forEach(C=>{C.style[t.isHorizontal()?"width":"height"]=`${s*(d.dynamicMainBullets+4)}px`}),d.dynamicMainBullets>1&&S!==void 0&&(l+=w-(S||0),l>d.dynamicMainBullets-1?l=d.dynamicMainBullets-1:l<0&&(l=0)),M=Math.max(w-l,0),x=M+(Math.min(A.length,d.dynamicMainBullets)-1),k=(x+M)/2),A.forEach(C=>{const P=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(D=>`${d.bulletActiveClass}${D}`)].map(D=>typeof D=="string"&&D.includes(" ")?D.split(" "):D).flat();C.classList.remove(...P)}),h.length>1)A.forEach(C=>{const P=ho(C);P===w?C.classList.add(...d.bulletActiveClass.split(" ")):t.isElement&&C.setAttribute("part","bullet"),d.dynamicBullets&&(P>=M&&P<=x&&C.classList.add(...`${d.bulletActiveClass}-main`.split(" ")),P===M&&c(C,"prev"),P===x&&c(C,"next"))});else{const C=A[w];if(C&&C.classList.add(...d.bulletActiveClass.split(" ")),t.isElement&&A.forEach((P,D)=>{P.setAttribute("part",D===w?"bullet-active":"bullet")}),d.dynamicBullets){const P=A[M],D=A[x];for(let $=M;$<=x;$+=1)A[$]&&A[$].classList.add(...`${d.bulletActiveClass}-main`.split(" "));c(P,"prev"),c(D,"next")}}if(d.dynamicBullets){const C=Math.min(A.length,d.dynamicMainBullets+4),P=(s*C-s)/2-k*s,D=u?"right":"left";A.forEach($=>{$.style[t.isHorizontal()?D:"top"]=`${P}px`})}}h.forEach((A,M)=>{if(d.type==="fraction"&&(A.querySelectorAll(ur(d.currentClass)).forEach(x=>{x.textContent=d.formatFractionCurrent(w+1)}),A.querySelectorAll(ur(d.totalClass)).forEach(x=>{x.textContent=d.formatFractionTotal(z)})),d.type==="progressbar"){let x;d.progressbarOpposite?x=t.isHorizontal()?"vertical":"horizontal":x=t.isHorizontal()?"horizontal":"vertical";const k=(w+1)/z;let C=1,P=1;x==="horizontal"?C=k:P=k,A.querySelectorAll(ur(d.progressbarFillClass)).forEach(D=>{D.style.transform=`translate3d(0,0,0) scaleX(${C}) scaleY(${P})`,D.style.transitionDuration=`${t.params.speed}ms`})}d.type==="custom"&&d.renderCustom?(A.innerHTML=d.renderCustom(t,w+1,z),M===0&&i("paginationRender",A)):(M===0&&i("paginationRender",A),i("paginationUpdate",A)),t.params.watchOverflow&&t.enabled&&A.classList[t.isLocked?"add":"remove"](d.lockClass)})}function m(){const u=t.params.pagination;if(a())return;const d=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let h=t.pagination.el;h=ae(h);let w="";if(u.type==="bullets"){let S=t.params.loop?Math.ceil(d/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&S>d&&(S=d);for(let T=0;T<S;T+=1)u.renderBullet?w+=u.renderBullet.call(t,T,u.bulletClass):w+=`<${u.bulletElement} ${t.isElement?'part="bullet"':""} class="${u.bulletClass}"></${u.bulletElement}>`}u.type==="fraction"&&(u.renderFraction?w=u.renderFraction.call(t,u.currentClass,u.totalClass):w=`<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`),u.type==="progressbar"&&(u.renderProgressbar?w=u.renderProgressbar.call(t,u.progressbarFillClass):w=`<span class="${u.progressbarFillClass}"></span>`),t.pagination.bullets=[],h.forEach(S=>{u.type!=="custom"&&(S.innerHTML=w||""),u.type==="bullets"&&t.pagination.bullets.push(...S.querySelectorAll(ur(u.bulletClass)))}),u.type!=="custom"&&i("paginationRender",h[0])}function g(){t.params.pagination=Gp(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const u=t.params.pagination;if(!u.el)return;let d;typeof u.el=="string"&&t.isElement&&(d=t.el.querySelector(u.el)),!d&&typeof u.el=="string"&&(d=[...document.querySelectorAll(u.el)]),d||(d=u.el),!(!d||d.length===0)&&(t.params.uniqueNavElements&&typeof u.el=="string"&&Array.isArray(d)&&d.length>1&&(d=[...t.el.querySelectorAll(u.el)],d.length>1&&(d=d.filter(h=>$p(h,".swiper")[0]===t.el)[0])),Array.isArray(d)&&d.length===1&&(d=d[0]),Object.assign(t.pagination,{el:d}),d=ae(d),d.forEach(h=>{u.type==="bullets"&&u.clickable&&h.classList.add(...(u.clickableClass||"").split(" ")),h.classList.add(u.modifierClass+u.type),h.classList.add(t.isHorizontal()?u.horizontalClass:u.verticalClass),u.type==="bullets"&&u.dynamicBullets&&(h.classList.add(`${u.modifierClass}${u.type}-dynamic`),l=0,u.dynamicMainBullets<1&&(u.dynamicMainBullets=1)),u.type==="progressbar"&&u.progressbarOpposite&&h.classList.add(u.progressbarOppositeClass),u.clickable&&h.addEventListener("click",f),t.enabled||h.classList.add(u.lockClass)}))}function v(){const u=t.params.pagination;if(a())return;let d=t.pagination.el;d&&(d=ae(d),d.forEach(h=>{h.classList.remove(u.hiddenClass),h.classList.remove(u.modifierClass+u.type),h.classList.remove(t.isHorizontal()?u.horizontalClass:u.verticalClass),u.clickable&&(h.classList.remove(...(u.clickableClass||"").split(" ")),h.removeEventListener("click",f))})),t.pagination.bullets&&t.pagination.bullets.forEach(h=>h.classList.remove(...u.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const u=t.params.pagination;let{el:d}=t.pagination;d=ae(d),d.forEach(h=>{h.classList.remove(u.horizontalClass,u.verticalClass),h.classList.add(t.isHorizontal()?u.horizontalClass:u.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?b():(g(),m(),p())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&p()}),r("snapIndexChange",()=>{p()}),r("snapGridLengthChange",()=>{m(),p()}),r("destroy",()=>{v()}),r("enable disable",()=>{let{el:u}=t.pagination;u&&(u=ae(u),u.forEach(d=>d.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{p()}),r("click",(u,d)=>{const h=d.target,w=ae(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&w&&w.length>0&&!h.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&h===t.navigation.nextEl||t.navigation.prevEl&&h===t.navigation.prevEl))return;const S=w[0].classList.contains(t.params.pagination.hiddenClass);i(S===!0?"paginationShow":"paginationHide"),w.forEach(T=>T.classList.toggle(t.params.pagination.hiddenClass))}});const y=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:u}=t.pagination;u&&(u=ae(u),u.forEach(d=>d.classList.remove(t.params.pagination.paginationDisabledClass))),g(),m(),p()},b=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:u}=t.pagination;u&&(u=ae(u),u.forEach(d=>d.classList.add(t.params.pagination.paginationDisabledClass))),v()};Object.assign(t.pagination,{enable:y,disable:b,render:m,update:p,init:g,destroy:v})}function X0(e){const{effect:t,swiper:n,on:r,setTranslate:i,setTransition:o,overwriteParams:s,perspective:l,recreateShadows:a,getEffectParams:c}=e;r("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),l&&l()&&n.classNames.push(`${n.params.containerModifierClass}3d`);const p=s?s():{};Object.assign(n.params,p),Object.assign(n.originalParams,p)}),r("setTranslate",()=>{n.params.effect===t&&i()}),r("setTransition",(p,m)=>{n.params.effect===t&&o(m)}),r("transitionEnd",()=>{if(n.params.effect===t&&a){if(!c||!c().slideShadows)return;n.slides.forEach(p=>{p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(m=>m.remove())}),a()}});let f;r("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(f=!0),requestAnimationFrame(()=>{f&&n.slides&&n.slides.length&&(i(),f=!1)}))})}function Q0(e,t){const n=qa(t);return n!==t&&(n.style.backfaceVisibility="hidden",n.style["-webkit-backface-visibility"]="hidden"),n}function jc(e,t,n){const r=`swiper-slide-shadow${n?`-${n}`:""}${` swiper-slide-shadow-${e}`}`,i=qa(t);let o=i.querySelector(`.${r.split(" ").join(".")}`);return o||(o=Xr("div",r.split(" ")),i.append(o)),o}function K0(e){let{swiper:t,extendParams:n,on:r}=e;n({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),X0({effect:"coverflow",swiper:t,on:r,setTranslate:()=>{const{width:s,height:l,slides:a,slidesSizesGrid:c}=t,f=t.params.coverflowEffect,p=t.isHorizontal(),m=t.translate,g=p?-m+s/2:-m+l/2,v=p?f.rotate:-f.rotate,y=f.depth;for(let b=0,u=a.length;b<u;b+=1){const d=a[b],h=c[b],w=d.swiperSlideOffset,S=(g-w-h/2)/h,T=typeof f.modifier=="function"?f.modifier(S):S*f.modifier;let z=p?v*T:0,A=p?0:v*T,M=-y*Math.abs(T),x=f.stretch;typeof x=="string"&&x.indexOf("%")!==-1&&(x=parseFloat(f.stretch)/100*h);let k=p?0:x*T,C=p?x*T:0,P=1-(1-f.scale)*Math.abs(T);Math.abs(C)<.001&&(C=0),Math.abs(k)<.001&&(k=0),Math.abs(M)<.001&&(M=0),Math.abs(z)<.001&&(z=0),Math.abs(A)<.001&&(A=0),Math.abs(P)<.001&&(P=0),t.browser&&t.browser.need3dFix&&(Math.abs(z)/90%2===1&&(z+=.001),Math.abs(A)/90%2===1&&(A+=.001));const D=`translate3d(${C}px,${k}px,${M}px)  rotateX(${A}deg) rotateY(${z}deg) scale(${P})`,$=Q0(f,d);if($.style.transform=D,d.style.zIndex=-Math.abs(Math.round(T))+1,f.slideShadows){let oe=p?d.querySelector(".swiper-slide-shadow-left"):d.querySelector(".swiper-slide-shadow-top"),Re=p?d.querySelector(".swiper-slide-shadow-right"):d.querySelector(".swiper-slide-shadow-bottom");oe||(oe=jc("coverflow",d,p?"left":"top")),Re||(Re=jc("coverflow",d,p?"right":"bottom")),oe&&(oe.style.opacity=T>0?T:0),Re&&(Re.style.opacity=-T>0?-T:0)}}},setTransition:s=>{t.slides.map(a=>qa(a)).forEach(a=>{a.style.transitionDuration=`${s}ms`,a.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>{c.style.transitionDuration=`${s}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}let gs;function q0(){const e=De(),t=er();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Hp(){return gs||(gs=q0()),gs}let vs;function Z0(e){let{userAgent:t}=e===void 0?{}:e;const n=Hp(),r=De(),i=r.navigator.platform,o=t||r.navigator.userAgent,s={ios:!1,android:!1},l=r.screen.width,a=r.screen.height,c=o.match(/(Android);?[\s\/]+([\d.]+)?/);let f=o.match(/(iPad).*OS\s([\d_]+)/);const p=o.match(/(iPod)(.*OS\s([\d_]+))?/),m=!f&&o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=i==="Win32";let v=i==="MacIntel";const y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&v&&n.touch&&y.indexOf(`${l}x${a}`)>=0&&(f=o.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),v=!1),c&&!g&&(s.os="android",s.android=!0),(f||m||p)&&(s.os="ios",s.ios=!0),s}function Up(e){return e===void 0&&(e={}),vs||(vs=Z0(e)),vs}let ys;function J0(){const e=De(),t=Up();let n=!1;function r(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[a,c]=l.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));n=a<16||a===16&&c<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=r(),s=o||i&&t.ios;return{isSafari:n||o,needPerspectiveFix:n,need3dFix:s,isWebView:i}}function e1(){return ys||(ys=J0()),ys}function t1(e){let{swiper:t,on:n,emit:r}=e;const i=De();let o=null,s=null;const l=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},a=()=>{!t||t.destroyed||!t.initialized||(o=new ResizeObserver(p=>{s=i.requestAnimationFrame(()=>{const{width:m,height:g}=t;let v=m,y=g;p.forEach(b=>{let{contentBoxSize:u,contentRect:d,target:h}=b;h&&h!==t.el||(v=d?d.width:(u[0]||u).inlineSize,y=d?d.height:(u[0]||u).blockSize)}),(v!==m||y!==g)&&l()})}),o.observe(t.el))},c=()=>{s&&i.cancelAnimationFrame(s),o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},f=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};n("init",()=>{if(t.params.resizeObserver&&typeof i.ResizeObserver<"u"){a();return}i.addEventListener("resize",l),i.addEventListener("orientationchange",f)}),n("destroy",()=>{c(),i.removeEventListener("resize",l),i.removeEventListener("orientationchange",f)})}function n1(e){let{swiper:t,extendParams:n,on:r,emit:i}=e;const o=[],s=De(),l=function(f,p){p===void 0&&(p={});const m=s.MutationObserver||s.WebkitMutationObserver,g=new m(v=>{if(t.__preventObserver__)return;if(v.length===1){i("observerUpdate",v[0]);return}const y=function(){i("observerUpdate",v[0])};s.requestAnimationFrame?s.requestAnimationFrame(y):s.setTimeout(y,0)});g.observe(f,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:typeof p.childList>"u"?!0:p.childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),o.push(g)},a=()=>{if(t.params.observer){if(t.params.observeParents){const f=$p(t.hostEl);for(let p=0;p<f.length;p+=1)l(f[p])}l(t.hostEl,{childList:t.params.observeSlideChildren}),l(t.wrapperEl,{attributes:!1})}},c=()=>{o.forEach(f=>{f.disconnect()}),o.splice(0,o.length)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",a),r("destroy",c)}var r1={on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;const i=n?"unshift":"push";return e.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](t)}),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];t.apply(r,s)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(r=>{typeof t>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[r].splice(o,1)})}),n},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return typeof o[0]=="string"||Array.isArray(o[0])?(t=o[0],n=o.slice(1,o.length),r=e):(t=o[0].events,n=o[0].data,r=o[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(a=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(r,[a,...n])}),e.eventsListeners&&e.eventsListeners[a]&&e.eventsListeners[a].forEach(c=>{c.apply(r,n)})}),e}};function i1(){const e=this;let t,n;const r=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=r.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(Mt(r,"padding-left")||0,10)-parseInt(Mt(r,"padding-right")||0,10),n=n-parseInt(Mt(r,"padding-top")||0,10)-parseInt(Mt(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function o1(){const e=this;function t(x,k){return parseFloat(x.getPropertyValue(e.getDirectionLabel(k))||0)}const n=e.params,{wrapperEl:r,slidesEl:i,size:o,rtlTranslate:s,wrongRTL:l}=e,a=e.virtual&&n.virtual.enabled,c=a?e.virtual.slides.length:e.slides.length,f=ot(i,`.${e.params.slideClass}, swiper-slide`),p=a?e.virtual.slides.length:f.length;let m=[];const g=[],v=[];let y=n.slidesOffsetBefore;typeof y=="function"&&(y=n.slidesOffsetBefore.call(e));let b=n.slidesOffsetAfter;typeof b=="function"&&(b=n.slidesOffsetAfter.call(e));const u=e.snapGrid.length,d=e.slidesGrid.length;let h=n.spaceBetween,w=-y,S=0,T=0;if(typeof o>"u")return;typeof h=="string"&&h.indexOf("%")>=0?h=parseFloat(h.replace("%",""))/100*o:typeof h=="string"&&(h=parseFloat(h)),e.virtualSize=-h,f.forEach(x=>{s?x.style.marginLeft="":x.style.marginRight="",x.style.marginBottom="",x.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(ki(r,"--swiper-centered-offset-before",""),ki(r,"--swiper-centered-offset-after",""));const z=n.grid&&n.grid.rows>1&&e.grid;z?e.grid.initSlides(f):e.grid&&e.grid.unsetSlides();let A;const M=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(x=>typeof n.breakpoints[x].slidesPerView<"u").length>0;for(let x=0;x<p;x+=1){A=0;let k;if(f[x]&&(k=f[x]),z&&e.grid.updateSlide(x,k,f),!(f[x]&&Mt(k,"display")==="none")){if(n.slidesPerView==="auto"){M&&(f[x].style[e.getDirectionLabel("width")]="");const C=getComputedStyle(k),P=k.style.transform,D=k.style.webkitTransform;if(P&&(k.style.transform="none"),D&&(k.style.webkitTransform="none"),n.roundLengths)A=e.isHorizontal()?jl(k,"width"):jl(k,"height");else{const $=t(C,"width"),oe=t(C,"padding-left"),Re=t(C,"padding-right"),L=t(C,"margin-left"),j=t(C,"margin-right"),F=C.getPropertyValue("box-sizing");if(F&&F==="border-box")A=$+L+j;else{const{clientWidth:q,offsetWidth:re}=k;A=$+oe+Re+L+j+(re-q)}}P&&(k.style.transform=P),D&&(k.style.webkitTransform=D),n.roundLengths&&(A=Math.floor(A))}else A=(o-(n.slidesPerView-1)*h)/n.slidesPerView,n.roundLengths&&(A=Math.floor(A)),f[x]&&(f[x].style[e.getDirectionLabel("width")]=`${A}px`);f[x]&&(f[x].swiperSlideSize=A),v.push(A),n.centeredSlides?(w=w+A/2+S/2+h,S===0&&x!==0&&(w=w-o/2-h),x===0&&(w=w-o/2-h),Math.abs(w)<1/1e3&&(w=0),n.roundLengths&&(w=Math.floor(w)),T%n.slidesPerGroup===0&&m.push(w),g.push(w)):(n.roundLengths&&(w=Math.floor(w)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&m.push(w),g.push(w),w=w+A+h),e.virtualSize+=A+h,S=A,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+b,s&&l&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${e.virtualSize+h}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel("width")]=`${e.virtualSize+h}px`),z&&e.grid.updateWrapperSize(A,m),!n.centeredSlides){const x=[];for(let k=0;k<m.length;k+=1){let C=m[k];n.roundLengths&&(C=Math.floor(C)),m[k]<=e.virtualSize-o&&x.push(C)}m=x,Math.floor(e.virtualSize-o)-Math.floor(m[m.length-1])>1&&m.push(e.virtualSize-o)}if(a&&n.loop){const x=v[0]+h;if(n.slidesPerGroup>1){const k=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),C=x*n.slidesPerGroup;for(let P=0;P<k;P+=1)m.push(m[m.length-1]+C)}for(let k=0;k<e.virtual.slidesBefore+e.virtual.slidesAfter;k+=1)n.slidesPerGroup===1&&m.push(m[m.length-1]+x),g.push(g[g.length-1]+x),e.virtualSize+=x}if(m.length===0&&(m=[0]),h!==0){const x=e.isHorizontal()&&s?"marginLeft":e.getDirectionLabel("marginRight");f.filter((k,C)=>!n.cssMode||n.loop?!0:C!==f.length-1).forEach(k=>{k.style[x]=`${h}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let x=0;v.forEach(C=>{x+=C+(h||0)}),x-=h;const k=x-o;m=m.map(C=>C<=0?-y:C>k?k+b:C)}if(n.centerInsufficientSlides){let x=0;v.forEach(C=>{x+=C+(h||0)}),x-=h;const k=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(x+k<o){const C=(o-x-k)/2;m.forEach((P,D)=>{m[D]=P-C}),g.forEach((P,D)=>{g[D]=P+C})}}if(Object.assign(e,{slides:f,snapGrid:m,slidesGrid:g,slidesSizesGrid:v}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){ki(r,"--swiper-centered-offset-before",`${-m[0]}px`),ki(r,"--swiper-centered-offset-after",`${e.size/2-v[v.length-1]/2}px`);const x=-e.snapGrid[0],k=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(C=>C+x),e.slidesGrid=e.slidesGrid.map(C=>C+k)}if(p!==c&&e.emit("slidesLengthChange"),m.length!==u&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),g.length!==d&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!a&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const x=`${n.containerModifierClass}backface-hidden`,k=e.el.classList.contains(x);p<=n.maxBackfaceHiddenSlides?k||e.el.classList.add(x):k&&e.el.classList.remove(x)}}function s1(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const s=l=>r?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!r)break;n.push(s(l))}else n.push(s(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){const l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function l1(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}const Fc=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function a1(e){e===void 0&&(e=this&&this.translate||0);const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:o}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let s=-e;i&&(s=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=n.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let a=0;a<r.length;a+=1){const c=r[a];let f=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(f-=r[0].swiperSlideOffset);const p=(s+(n.centeredSlides?t.minTranslate():0)-f)/(c.swiperSlideSize+l),m=(s-o[0]+(n.centeredSlides?t.minTranslate():0)-f)/(c.swiperSlideSize+l),g=-(s-f),v=g+t.slidesSizesGrid[a],y=g>=0&&g<=t.size-t.slidesSizesGrid[a],b=g>=0&&g<t.size-1||v>1&&v<=t.size||g<=0&&v>=t.size;b&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(a)),Fc(c,b,n.slideVisibleClass),Fc(c,y,n.slideFullyVisibleClass),c.progress=i?-p:p,c.originalProgress=i?-m:m}}function u1(e){const t=this;if(typeof e>"u"){const f=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*f||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:o,isEnd:s,progressLoop:l}=t;const a=o,c=s;if(r===0)i=0,o=!0,s=!0;else{i=(e-t.minTranslate())/r;const f=Math.abs(e-t.minTranslate())<1,p=Math.abs(e-t.maxTranslate())<1;o=f||i<=0,s=p||i>=1,f&&(i=0),p&&(i=1)}if(n.loop){const f=t.getSlideIndexByData(0),p=t.getSlideIndexByData(t.slides.length-1),m=t.slidesGrid[f],g=t.slidesGrid[p],v=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=m?l=(y-m)/v:l=(y+v-g)/v,l>1&&(l-=1)}Object.assign(t,{progress:i,progressLoop:l,isBeginning:o,isEnd:s}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!a&&t.emit("reachBeginning toEdge"),s&&!c&&t.emit("reachEnd toEdge"),(a&&!o||c&&!s)&&t.emit("fromEdge"),t.emit("progress",i)}const ws=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function c1(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,o=e.virtual&&n.virtual.enabled,s=e.grid&&n.grid&&n.grid.rows>1,l=p=>ot(r,`.${n.slideClass}${p}, swiper-slide${p}`)[0];let a,c,f;if(o)if(n.loop){let p=i-e.virtual.slidesBefore;p<0&&(p=e.virtual.slides.length+p),p>=e.virtual.slides.length&&(p-=e.virtual.slides.length),a=l(`[data-swiper-slide-index="${p}"]`)}else a=l(`[data-swiper-slide-index="${i}"]`);else s?(a=t.filter(p=>p.column===i)[0],f=t.filter(p=>p.column===i+1)[0],c=t.filter(p=>p.column===i-1)[0]):a=t[i];a&&(s||(f=U0(a,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!f&&(f=t[0]),c=H0(a,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(p=>{ws(p,p===a,n.slideActiveClass),ws(p,p===f,n.slideNextClass),ws(p,p===c,n.slidePrevClass)}),e.emitSlidesClasses()}const Di=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,r=t.closest(n());if(r){let i=r.querySelector(`.${e.params.lazyPreloaderClass}`);!i&&e.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},xs=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Fl=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const s=i,l=[s-t];l.push(...Array.from({length:t}).map((a,c)=>s+r+c)),e.slides.forEach((a,c)=>{l.includes(a.column)&&xs(e,c)});return}const o=i+r-1;if(e.params.rewind||e.params.loop)for(let s=i-t;s<=o+t;s+=1){const l=(s%n+n)%n;(l<i||l>o)&&xs(e,l)}else for(let s=Math.max(i-t,0);s<=Math.min(o+t,n-1);s+=1)s!==i&&(s>o||s<i)&&xs(e,s)};function d1(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?r>=t[o]&&r<t[o+1]-(t[o+1]-t[o])/2?i=o:r>=t[o]&&r<t[o+1]&&(i=o+1):r>=t[o]&&(i=o);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function f1(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:o,realIndex:s,snapIndex:l}=t;let a=e,c;const f=g=>{let v=g-t.virtual.slidesBefore;return v<0&&(v=t.virtual.slides.length+v),v>=t.virtual.slides.length&&(v-=t.virtual.slides.length),v};if(typeof a>"u"&&(a=d1(t)),r.indexOf(n)>=0)c=r.indexOf(n);else{const g=Math.min(i.slidesPerGroupSkip,a);c=g+Math.floor((a-g)/i.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),a===o&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(a===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=f(a);return}const p=t.grid&&i.grid&&i.grid.rows>1;let m;if(t.virtual&&i.virtual.enabled&&i.loop)m=f(a);else if(p){const g=t.slides.filter(y=>y.column===a)[0];let v=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(v)&&(v=Math.max(t.slides.indexOf(g),0)),m=Math.floor(v/i.grid.rows)}else if(t.slides[a]){const g=t.slides[a].getAttribute("data-swiper-slide-index");g?m=parseInt(g,10):m=a}else m=a;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:s,realIndex:m,previousIndex:o,activeIndex:a}),t.initialized&&Fl(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(s!==m&&t.emit("realIndexChange"),t.emit("slideChange"))}function p1(e,t){const n=this,r=n.params;let i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let o=!1,s;if(i){for(let l=0;l<n.slides.length;l+=1)if(n.slides[l]===i){o=!0,s=l;break}}if(i&&o)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):n.clickedIndex=s;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var m1={updateSize:i1,updateSlides:o1,updateAutoHeight:s1,updateSlidesOffset:l1,updateSlidesProgress:a1,updateProgress:u1,updateSlidesClasses:c1,updateActiveIndex:f1,updateClickedSlide:p1};function h1(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:o}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let s=$0(o,e);return s+=t.cssOverflowAdjustment(),r&&(s=-s),s||0}function g1(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:o,progress:s}=n;let l=0,a=0;const c=0;n.isHorizontal()?l=r?-e:e:a=e,i.roundLengths&&(l=Math.floor(l),a=Math.floor(a)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:a,i.cssMode?o[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-a:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():a-=n.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${a}px, ${c}px)`);let f;const p=n.maxTranslate()-n.minTranslate();p===0?f=0:f=(e-n.minTranslate())/p,f!==s&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}function v1(){return-this.snapGrid[0]}function y1(){return-this.snapGrid[this.snapGrid.length-1]}function w1(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);const o=this,{params:s,wrapperEl:l}=o;if(o.animating&&s.preventInteractionOnTransition)return!1;const a=o.minTranslate(),c=o.maxTranslate();let f;if(r&&e>a?f=a:r&&e<c?f=c:f=e,o.updateProgress(f),s.cssMode){const p=o.isHorizontal();if(t===0)l[p?"scrollLeft":"scrollTop"]=-f;else{if(!o.support.smoothScroll)return Vp({swiper:o,targetPosition:-f,side:p?"left":"top"}),!0;l.scrollTo({[p?"left":"top"]:-f,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(f),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(f),n&&(o.emit("beforeTransitionStart",t,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(m){!o||o.destroyed||m.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,n&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var x1={getTranslate:h1,setTranslate:g1,minTranslate:v1,maxTranslate:y1,translateTo:w1};function S1(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?"0ms":""),n.emit("setTransition",e,t)}function Wp(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e;const{activeIndex:o,previousIndex:s}=t;let l=r;if(l||(o>s?l="next":o<s?l="prev":l="reset"),t.emit(`transition${i}`),n&&o!==s){if(l==="reset"){t.emit(`slideResetTransition${i}`);return}t.emit(`slideChangeTransition${i}`),l==="next"?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}function E1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Wp({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}function k1(e,t){e===void 0&&(e=!0);const n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Wp({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var b1={setTransition:S1,transitionStart:E1,transitionEnd:k1};function C1(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const o=this;let s=e;s<0&&(s=0);const{params:l,snapGrid:a,slidesGrid:c,previousIndex:f,activeIndex:p,rtlTranslate:m,wrapperEl:g,enabled:v}=o;if(!v&&!r&&!i||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const y=Math.min(o.params.slidesPerGroupSkip,s);let b=y+Math.floor((s-y)/o.params.slidesPerGroup);b>=a.length&&(b=a.length-1);const u=-a[b];if(l.normalizeSlideIndex)for(let h=0;h<c.length;h+=1){const w=-Math.floor(u*100),S=Math.floor(c[h]*100),T=Math.floor(c[h+1]*100);typeof c[h+1]<"u"?w>=S&&w<T-(T-S)/2?s=h:w>=S&&w<T&&(s=h+1):w>=S&&(s=h)}if(o.initialized&&s!==p&&(!o.allowSlideNext&&(m?u>o.translate&&u>o.minTranslate():u<o.translate&&u<o.minTranslate())||!o.allowSlidePrev&&u>o.translate&&u>o.maxTranslate()&&(p||0)!==s))return!1;s!==(f||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(u);let d;if(s>p?d="next":s<p?d="prev":d="reset",m&&-u===o.translate||!m&&u===o.translate)return o.updateActiveIndex(s),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(u),d!=="reset"&&(o.transitionStart(n,d),o.transitionEnd(n,d)),!1;if(l.cssMode){const h=o.isHorizontal(),w=m?u:-u;if(t===0){const S=o.virtual&&o.params.virtual.enabled;S&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),S&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[h?"scrollLeft":"scrollTop"]=w})):g[h?"scrollLeft":"scrollTop"]=w,S&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1})}else{if(!o.support.smoothScroll)return Vp({swiper:o,targetPosition:w,side:h?"left":"top"}),!0;g.scrollTo({[h?"left":"top"]:w,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(u),o.updateActiveIndex(s),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,r),o.transitionStart(n,d),t===0?o.transitionEnd(n,d):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(w){!o||o.destroyed||w.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,d))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function A1(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e=="string"&&(e=parseInt(e,10));const i=this;if(i.destroyed)return;typeof t>"u"&&(t=i.params.speed);const o=i.grid&&i.params.grid&&i.params.grid.rows>1;let s=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)s=s+i.virtual.slidesBefore;else{let l;if(o){const m=s*i.params.grid.rows;l=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===m)[0].column}else l=i.getSlideIndexByData(s);const a=o?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:c}=i.params;let f=i.params.slidesPerView;f==="auto"?f=i.slidesPerViewDynamic():(f=Math.ceil(parseFloat(i.params.slidesPerView,10)),c&&f%2===0&&(f=f+1));let p=a-l<f;if(c&&(p=p||l<Math.ceil(f/2)),r&&c&&i.params.slidesPerView!=="auto"&&!o&&(p=!1),p){const m=c?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:m,slideTo:!0,activeSlideIndex:m==="next"?l+1:l-a+1,slideRealIndex:m==="next"?i.realIndex:void 0})}if(o){const m=s*i.params.grid.rows;s=i.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===m)[0].column}else s=i.getSlideIndexByData(s)}return requestAnimationFrame(()=>{i.slideTo(s,t,n,r)}),i}function T1(e,t,n){t===void 0&&(t=!0);const r=this,{enabled:i,params:o,animating:s}=r;if(!i||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const a=r.activeIndex<o.slidesPerGroupSkip?1:l,c=r.virtual&&o.virtual.enabled;if(o.loop){if(s&&!c&&o.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+a,e,t,n)}),!0}return o.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+a,e,t,n)}function P1(e,t,n){t===void 0&&(t=!0);const r=this,{params:i,snapGrid:o,slidesGrid:s,rtlTranslate:l,enabled:a,animating:c}=r;if(!a||r.destroyed)return r;typeof e>"u"&&(e=r.params.speed);const f=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!f&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const p=l?r.translate:-r.translate;function m(u){return u<0?-Math.floor(Math.abs(u)):Math.floor(u)}const g=m(p),v=o.map(u=>m(u));let y=o[v.indexOf(g)-1];if(typeof y>"u"&&i.cssMode){let u;o.forEach((d,h)=>{g>=d&&(u=h)}),typeof u<"u"&&(y=o[u>0?u-1:u])}let b=0;if(typeof y<"u"&&(b=s.indexOf(y),b<0&&(b=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(b=b-r.slidesPerViewDynamic("previous",!0)+1,b=Math.max(b,0))),i.rewind&&r.isBeginning){const u=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(u,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(b,e,t,n)}),!0;return r.slideTo(b,e,t,n)}function N1(e,t,n){t===void 0&&(t=!0);const r=this;if(!r.destroyed)return typeof e>"u"&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function z1(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);let o=i.activeIndex;const s=Math.min(i.params.slidesPerGroupSkip,o),l=s+Math.floor((o-s)/i.params.slidesPerGroup),a=i.rtlTranslate?i.translate:-i.translate;if(a>=i.snapGrid[l]){const c=i.snapGrid[l],f=i.snapGrid[l+1];a-c>(f-c)*r&&(o+=i.params.slidesPerGroup)}else{const c=i.snapGrid[l-1],f=i.snapGrid[l];a-c<=(f-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,e,t,n)}function I1(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:n}=e,r=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let i=e.clickedIndex,o;const s=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?i<e.loopedSlides-r/2||i>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),i=e.getSlideIndex(ot(n,`${s}[data-swiper-slide-index="${o}"]`)[0]),_l(()=>{e.slideTo(i)})):e.slideTo(i):i>e.slides.length-r?(e.loopFix(),i=e.getSlideIndex(ot(n,`${s}[data-swiper-slide-index="${o}"]`)[0]),_l(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var M1={slideTo:C1,slideToLoop:A1,slideNext:T1,slidePrev:P1,slideReset:N1,slideToClosest:z1,slideToClickedSlide:I1};function L1(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;const i=()=>{ot(r,`.${n.slideClass}, swiper-slide`).forEach((p,m)=>{p.setAttribute("data-swiper-slide-index",m)})},o=t.grid&&n.grid&&n.grid.rows>1,s=n.slidesPerGroup*(o?n.grid.rows:1),l=t.slides.length%s!==0,a=o&&t.slides.length%n.grid.rows!==0,c=f=>{for(let p=0;p<f;p+=1){const m=t.isElement?Xr("swiper-slide",[n.slideBlankClass]):Xr("div",[n.slideClass,n.slideBlankClass]);t.slidesEl.append(m)}};if(l){if(n.loopAddBlankSlides){const f=s-t.slides.length%s;c(f),t.recalcSlides(),t.updateSlides()}else mo("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(a){if(n.loopAddBlankSlides){const f=n.grid.rows-t.slides.length%n.grid.rows;c(f),t.recalcSlides(),t.updateSlides()}else mo("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})}function O1(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:o,byController:s,byMousewheel:l}=e===void 0?{}:e;const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:c,allowSlidePrev:f,allowSlideNext:p,slidesEl:m,params:g}=a,{centeredSlides:v}=g;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&g.virtual.enabled){n&&(!g.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):g.centeredSlides&&a.snapIndex<g.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=f,a.allowSlideNext=p,a.emit("loopFix");return}let y=g.slidesPerView;y==="auto"?y=a.slidesPerViewDynamic():(y=Math.ceil(parseFloat(g.slidesPerView,10)),v&&y%2===0&&(y=y+1));const b=g.slidesPerGroupAuto?y:g.slidesPerGroup;let u=b;u%b!==0&&(u+=b-u%b),u+=g.loopAdditionalSlides,a.loopedSlides=u;const d=a.grid&&g.grid&&g.grid.rows>1;c.length<y+u?mo("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):d&&g.grid.fill==="row"&&mo("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const h=[],w=[];let S=a.activeIndex;typeof o>"u"?o=a.getSlideIndex(c.filter(P=>P.classList.contains(g.slideActiveClass))[0]):S=o;const T=r==="next"||!r,z=r==="prev"||!r;let A=0,M=0;const x=d?Math.ceil(c.length/g.grid.rows):c.length,C=(d?c[o].column:o)+(v&&typeof i>"u"?-y/2+.5:0);if(C<u){A=Math.max(u-C,b);for(let P=0;P<u-C;P+=1){const D=P-Math.floor(P/x)*x;if(d){const $=x-D-1;for(let oe=c.length-1;oe>=0;oe-=1)c[oe].column===$&&h.push(oe)}else h.push(x-D-1)}}else if(C+y>x-u){M=Math.max(C-(x-u*2),b);for(let P=0;P<M;P+=1){const D=P-Math.floor(P/x)*x;d?c.forEach(($,oe)=>{$.column===D&&w.push(oe)}):w.push(D)}}if(a.__preventObserver__=!0,requestAnimationFrame(()=>{a.__preventObserver__=!1}),z&&h.forEach(P=>{c[P].swiperLoopMoveDOM=!0,m.prepend(c[P]),c[P].swiperLoopMoveDOM=!1}),T&&w.forEach(P=>{c[P].swiperLoopMoveDOM=!0,m.append(c[P]),c[P].swiperLoopMoveDOM=!1}),a.recalcSlides(),g.slidesPerView==="auto"?a.updateSlides():d&&(h.length>0&&z||w.length>0&&T)&&a.slides.forEach((P,D)=>{a.grid.updateSlide(D,P,a.slides)}),g.watchSlidesProgress&&a.updateSlidesOffset(),n){if(h.length>0&&z){if(typeof t>"u"){const P=a.slidesGrid[S],$=a.slidesGrid[S+A]-P;l?a.setTranslate(a.translate-$):(a.slideTo(S+Math.ceil(A),0,!1,!0),i&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-$,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-$))}else if(i){const P=d?h.length/g.grid.rows:h.length;a.slideTo(a.activeIndex+P,0,!1,!0),a.touchEventsData.currentTranslate=a.translate}}else if(w.length>0&&T)if(typeof t>"u"){const P=a.slidesGrid[S],$=a.slidesGrid[S-M]-P;l?a.setTranslate(a.translate-$):(a.slideTo(S-M,0,!1,!0),i&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-$,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-$))}else{const P=d?w.length/g.grid.rows:w.length;a.slideTo(a.activeIndex-P,0,!1,!0)}}if(a.allowSlidePrev=f,a.allowSlideNext=p,a.controller&&a.controller.control&&!s){const P={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:o,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(D=>{!D.destroyed&&D.params.loop&&D.loopFix({...P,slideTo:D.params.slidesPerView===g.slidesPerView?n:!1})}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix({...P,slideTo:a.controller.control.params.slidesPerView===g.slidesPerView?n:!1})}a.emit("loopFix")}function _1(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach(i=>{const o=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[o]=i}),e.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{n.append(i)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var j1={loopCreate:L1,loopFix:O1,loopDestroy:_1};function F1(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function D1(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var R1={setGrabCursor:F1,unsetGrabCursor:D1};function B1(e,t){t===void 0&&(t=this);function n(r){if(!r||r===er()||r===De())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(e);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(t)}function Dc(e,t,n){const r=De(),{params:i}=e,o=i.edgeSwipeDetection,s=i.edgeSwipeThreshold;return o&&(n<=s||n>=r.innerWidth-s)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function V1(e){const t=this,n=er();let r=e;r.originalEvent&&(r=r.originalEvent);const i=t.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Dc(t,r,r.targetTouches[0].pageX);return}const{params:o,touches:s,enabled:l}=t;if(!l||!o.simulateTouch&&r.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let a=r.target;if(o.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(a)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",f=r.composedPath?r.composedPath():r.path;c&&r.target&&r.target.shadowRoot&&f&&(a=f[0]);const p=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,m=!!(r.target&&r.target.shadowRoot);if(o.noSwiping&&(m?B1(p,a):a.closest(p))){t.allowClick=!0;return}if(o.swipeHandler&&!a.closest(o.swipeHandler))return;s.currentX=r.pageX,s.currentY=r.pageY;const g=s.currentX,v=s.currentY;if(!Dc(t,r,g))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=g,s.startY=v,i.touchStartTime=po(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1);let y=!0;a.matches(i.focusableElements)&&(y=!1,a.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==a&&n.activeElement.blur();const b=y&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||b)&&!a.isContentEditable&&r.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function $1(e){const t=er(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:s,enabled:l}=n;if(!l||!i.simulateTouch&&e.pointerType==="mouse")return;let a=e;if(a.originalEvent&&(a=a.originalEvent),a.type==="pointermove"&&(r.touchId!==null||a.pointerId!==r.pointerId))return;let c;if(a.type==="touchmove"){if(c=[...a.changedTouches].filter(T=>T.identifier===r.touchId)[0],!c||c.identifier!==r.touchId)return}else c=a;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",a);return}const f=c.pageX,p=c.pageY;if(a.preventedByNestedSwiper){o.startX=f,o.startY=p;return}if(!n.allowTouchMove){a.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:f,startY:p,currentX:f,currentY:p}),r.touchStartTime=po());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(p<o.startY&&n.translate<=n.maxTranslate()||p>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(f<o.startX&&n.translate<=n.maxTranslate()||f>o.startX&&n.translate>=n.minTranslate())return}if(t.activeElement&&a.target===t.activeElement&&a.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit("touchMove",a),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=f,o.currentY=p;const m=o.currentX-o.startX,g=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(m**2+g**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let T;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:m*m+g*g>=25&&(T=Math.atan2(Math.abs(g),Math.abs(m))*180/Math.PI,r.isScrolling=n.isHorizontal()?T>i.touchAngle:90-T>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",a),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling||a.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&a.cancelable&&a.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&a.stopPropagation();let v=n.isHorizontal()?m:g,y=n.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;i.oneWayMovement&&(v=Math.abs(v)*(s?1:-1),y=Math.abs(y)*(s?1:-1)),o.diff=v,v*=i.touchRatio,s&&(v=-v,y=-y);const b=n.touchesDirection;n.swipeDirection=v>0?"prev":"next",n.touchesDirection=y>0?"prev":"next";const u=n.params.loop&&!i.cssMode,d=n.touchesDirection==="next"&&n.allowSlideNext||n.touchesDirection==="prev"&&n.allowSlidePrev;if(!r.isMoved){if(u&&d&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(T)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",a)}let h;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&b!==n.touchesDirection&&u&&d&&Math.abs(v)>=1){Object.assign(o,{startX:f,startY:p,currentX:f,currentY:p,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit("sliderMove",a),r.isMoved=!0,r.currentTranslate=v+r.startTranslate;let w=!0,S=i.resistanceRatio;if(i.touchReleaseOnEdges&&(S=0),v>0?(u&&d&&!h&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+v)**S))):v<0&&(u&&d&&!h&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(w=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-v)**S))),w&&(a.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(v)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function G1(e){const t=this,n=t.touchEventsData;let r=e;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(S=>S.identifier===n.touchId)[0],!i||i.identifier!==n.touchId)return}else{if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;const{params:s,touches:l,rtlTranslate:a,slidesGrid:c,enabled:f}=t;if(!f||!s.simulateTouch&&r.pointerType==="mouse")return;if(n.allowTouchCallbacks&&t.emit("touchEnd",r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}s.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const p=po(),m=p-n.touchStartTime;if(t.allowClick){const S=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(S&&S[0]||r.target,S),t.emit("tap click",r),m<300&&p-n.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(n.lastClickTime=po(),_l(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||l.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let g;if(s.followFinger?g=a?t.translate:-t.translate:g=-n.currentTranslate,s.cssMode)return;if(s.freeMode&&s.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:g});return}const v=g>=-t.maxTranslate()&&!t.params.loop;let y=0,b=t.slidesSizesGrid[0];for(let S=0;S<c.length;S+=S<s.slidesPerGroupSkip?1:s.slidesPerGroup){const T=S<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;typeof c[S+T]<"u"?(v||g>=c[S]&&g<c[S+T])&&(y=S,b=c[S+T]-c[S]):(v||g>=c[S])&&(y=S,b=c[c.length-1]-c[c.length-2])}let u=null,d=null;s.rewind&&(t.isBeginning?d=s.virtual&&s.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(u=0));const h=(g-c[y])/b,w=y<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(m>s.longSwipesMs){if(!s.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(h>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?u:y+w):t.slideTo(y)),t.swipeDirection==="prev"&&(h>1-s.longSwipesRatio?t.slideTo(y+w):d!==null&&h<0&&Math.abs(h)>s.longSwipesRatio?t.slideTo(d):t.slideTo(y))}else{if(!s.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(y+w):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(u!==null?u:y+w),t.swipeDirection==="prev"&&t.slideTo(d!==null?d:y))}}function Rc(){const e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=e,s=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=s&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!s?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function H1(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function U1(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i;const o=e.maxTranslate()-e.minTranslate();o===0?i=0:i=(e.translate-e.minTranslate())/o,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function W1(e){const t=this;Di(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function Y1(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Yp=(e,t)=>{const n=er(),{params:r,el:i,wrapperEl:o,device:s}=e,l=!!r.nested,a=t==="on"?"addEventListener":"removeEventListener",c=t;!i||typeof i=="string"||(n[a]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),i[a]("touchstart",e.onTouchStart,{passive:!1}),i[a]("pointerdown",e.onTouchStart,{passive:!1}),n[a]("touchmove",e.onTouchMove,{passive:!1,capture:l}),n[a]("pointermove",e.onTouchMove,{passive:!1,capture:l}),n[a]("touchend",e.onTouchEnd,{passive:!0}),n[a]("pointerup",e.onTouchEnd,{passive:!0}),n[a]("pointercancel",e.onTouchEnd,{passive:!0}),n[a]("touchcancel",e.onTouchEnd,{passive:!0}),n[a]("pointerout",e.onTouchEnd,{passive:!0}),n[a]("pointerleave",e.onTouchEnd,{passive:!0}),n[a]("contextmenu",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[a]("click",e.onClick,!0),r.cssMode&&o[a]("scroll",e.onScroll),r.updateOnWindowResize?e[c](s.ios||s.android?"resize orientationchange observerUpdate":"resize observerUpdate",Rc,!0):e[c]("observerUpdate",Rc,!0),i[a]("load",e.onLoad,{capture:!0}))};function X1(){const e=this,{params:t}=e;e.onTouchStart=V1.bind(e),e.onTouchMove=$1.bind(e),e.onTouchEnd=G1.bind(e),e.onDocumentTouchStart=Y1.bind(e),t.cssMode&&(e.onScroll=U1.bind(e)),e.onClick=H1.bind(e),e.onLoad=W1.bind(e),Yp(e,"on")}function Q1(){Yp(this,"off")}var K1={attachEvents:X1,detachEvents:Q1};const Bc=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function q1(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,o=r.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const s=e.getBreakpoint(o,e.params.breakpointsBase,e.el);if(!s||e.currentBreakpoint===s)return;const a=(s in o?o[s]:void 0)||e.originalParams,c=Bc(e,r),f=Bc(e,a),p=e.params.grabCursor,m=a.grabCursor,g=r.enabled;c&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(a.grid.fill&&a.grid.fill==="column"||!a.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!m?e.unsetGrabCursor():!p&&m&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(h=>{if(typeof a[h]>"u")return;const w=r[h]&&r[h].enabled,S=a[h]&&a[h].enabled;w&&!S&&e[h].disable(),!w&&S&&e[h].enable()});const v=a.direction&&a.direction!==r.direction,y=r.loop&&(a.slidesPerView!==r.slidesPerView||v),b=r.loop;v&&n&&e.changeDirection(),Ne(e.params,a);const u=e.params.enabled,d=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),g&&!u?e.disable():!g&&u&&e.enable(),e.currentBreakpoint=s,e.emit("_beforeBreakpoint",a),n&&(y?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&d?(e.loopCreate(t),e.updateSlides()):b&&!d&&e.loopDestroy()),e.emit("breakpoint",a)}function Z1(e,t,n){if(t===void 0&&(t="window"),!e||t==="container"&&!n)return;let r=!1;const i=De(),o=t==="window"?i.innerHeight:n.clientHeight,s=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const a=parseFloat(l.substr(1));return{value:o*a,point:l}}return{value:l,point:l}});s.sort((l,a)=>parseInt(l.value,10)-parseInt(a.value,10));for(let l=0;l<s.length;l+=1){const{point:a,value:c}=s[l];t==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=a):c<=n.clientWidth&&(r=a)}return r||"max"}var J1={setBreakpoint:q1,getBreakpoint:Z1};function ey(e,t){const n=[];return e.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(t+i)}):typeof r=="string"&&n.push(t+r)}),n}function ty(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:o}=e,s=ey(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...s),i.classList.add(...t),e.emitContainerClasses()}function ny(){const e=this,{el:t,classNames:n}=e;!t||typeof t=="string"||(t.classList.remove(...n),e.emitContainerClasses())}var ry={addClasses:ty,removeClasses:ny};function iy(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const i=e.slides.length-1,o=e.slidesGrid[i]+e.slidesSizesGrid[i]+r*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var oy={checkOverflow:iy},Dl={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function sy(e,t){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Ne(t,r);return}if(e[i]===!0&&(e[i]={enabled:!0}),i==="navigation"&&e[i]&&e[i].enabled&&!e[i].prevEl&&!e[i].nextEl&&(e[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&e[i]&&e[i].enabled&&!e[i].el&&(e[i].auto=!0),!(i in e&&"enabled"in o)){Ne(t,r);return}typeof e[i]=="object"&&!("enabled"in e[i])&&(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),Ne(t,r)}}const Ss={eventsEmitter:r1,update:m1,translate:x1,transition:b1,slide:M1,loop:j1,grabCursor:R1,events:K1,breakpoints:J1,checkOverflow:oy,classes:ry},Es={};let Za=class ut{constructor(){let t,n;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?n=i[0]:[t,n]=i,n||(n={}),n=Ne({},n),t&&!n.el&&(n.el=t);const s=er();if(n.el&&typeof n.el=="string"&&s.querySelectorAll(n.el).length>1){const f=[];return s.querySelectorAll(n.el).forEach(p=>{const m=Ne({},n,{el:p});f.push(new ut(m))}),f}const l=this;l.__swiper__=!0,l.support=Hp(),l.device=Up({userAgent:n.userAgent}),l.browser=e1(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],n.modules&&Array.isArray(n.modules)&&l.modules.push(...n.modules);const a={};l.modules.forEach(f=>{f({params:n,swiper:l,extendParams:sy(n,a),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const c=Ne({},Dl,a);return l.params=Ne({},c,Es,n),l.originalParams=Ne({},l.params),l.passedParams=Ne({},n),l.params&&l.params.on&&Object.keys(l.params.on).forEach(f=>{l.on(f,l.params.on[f])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:n,params:r}=this,i=ot(n,`.${r.slideClass}, swiper-slide`),o=ho(i[0]);return ho(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(n=>n.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){const t=this,{slidesEl:n,params:r}=t;t.slides=ot(n,`.${r.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){const r=this;t=Math.min(Math.max(t,0),1);const i=r.minTranslate(),s=(r.maxTranslate()-i)*t+i;r.translateTo(s,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){const n=this;return n.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const n=[];t.slides.forEach(r=>{const i=t.getSlideClasses(r);n.push({slideEl:r,classNames:i}),t.emit("_slideClass",r,i)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t,n){t===void 0&&(t="current"),n===void 0&&(n=!1);const r=this,{params:i,slides:o,slidesGrid:s,slidesSizesGrid:l,size:a,activeIndex:c}=r;let f=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let p=o[c]?Math.ceil(o[c].swiperSlideSize):0,m;for(let g=c+1;g<o.length;g+=1)o[g]&&!m&&(p+=Math.ceil(o[g].swiperSlideSize),f+=1,p>a&&(m=!0));for(let g=c-1;g>=0;g-=1)o[g]&&!m&&(p+=o[g].swiperSlideSize,f+=1,p>a&&(m=!0))}else if(t==="current")for(let p=c+1;p<o.length;p+=1)(n?s[p]+l[p]-s[c]<a:s[p]-s[c]<a)&&(f+=1);else for(let p=c-1;p>=0;p-=1)s[c]-s[p]<a&&(f+=1);return f}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:n,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(s=>{s.complete&&Di(t,s)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function i(){const s=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(s,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){const s=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(s.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||i()}r.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n){n===void 0&&(n=!0);const r=this,i=r.params.direction;return t||(t=i==="horizontal"?"vertical":"horizontal"),t===i||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(t){const n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){const n=this;if(n.mounted)return!0;let r=t||n.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=n,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===n.params.swiperElementNodeName.toUpperCase()&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):ot(r,i())[0];return!s&&n.params.createElements&&(s=Xr("div",n.params.wrapperClass),r.append(s),ot(r,`.${n.params.slideClass}`).forEach(l=>{s.append(l)})),Object.assign(n,{el:r,wrapperEl:s,slidesEl:n.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:s,hostEl:n.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Mt(r,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Mt(r,"direction")==="rtl"),wrongRTL:Mt(s,"display")==="-webkit-box"}),!0}init(t){const n=this;if(n.initialized||n.mount(t)===!1)return n;n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents();const i=[...n.el.querySelectorAll('[loading="lazy"]')];return n.isElement&&i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(o=>{o.complete?Di(n,o):o.addEventListener("load",s=>{Di(n,s.target)})}),Fl(n),n.initialized=!0,Fl(n),n.emit("init"),n.emit("afterInit"),n}destroy(t,n){t===void 0&&(t=!0),n===void 0&&(n=!0);const r=this,{params:i,el:o,wrapperEl:s,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),s&&s.removeAttribute("style"),l&&l.length&&l.forEach(a=>{a.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(a=>{r.off(a)}),t!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),B0(r)),r.destroyed=!0),null}static extendDefaults(t){Ne(Es,t)}static get extendedDefaults(){return Es}static get defaults(){return Dl}static installModule(t){ut.prototype.__modules__||(ut.prototype.__modules__=[]);const n=ut.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>ut.installModule(n)),ut):(ut.installModule(t),ut)}};Object.keys(Ss).forEach(e=>{Object.keys(Ss[e]).forEach(t=>{Za.prototype[t]=Ss[e][t]})});Za.use([t1,n1]);const Xp=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function hn(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"&&!e.__swiper__}function Bn(e,t){const n=["__proto__","constructor","prototype"];Object.keys(t).filter(r=>n.indexOf(r)<0).forEach(r=>{typeof e[r]>"u"?e[r]=t[r]:hn(t[r])&&hn(e[r])&&Object.keys(t[r]).length>0?t[r].__swiper__?e[r]=t[r]:Bn(e[r],t[r]):e[r]=t[r]})}function Qp(e){return e===void 0&&(e={}),e.navigation&&typeof e.navigation.nextEl>"u"&&typeof e.navigation.prevEl>"u"}function Kp(e){return e===void 0&&(e={}),e.pagination&&typeof e.pagination.el>"u"}function qp(e){return e===void 0&&(e={}),e.scrollbar&&typeof e.scrollbar.el>"u"}function Zp(e){e===void 0&&(e="");const t=e.split(" ").map(r=>r.trim()).filter(r=>!!r),n=[];return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n.join(" ")}function ly(e){return e===void 0&&(e=""),e?e.includes("swiper-wrapper")?e:`swiper-wrapper ${e}`:"swiper-wrapper"}function ay(e){let{swiper:t,slides:n,passedParams:r,changedParams:i,nextEl:o,prevEl:s,scrollbarEl:l,paginationEl:a}=e;const c=i.filter(M=>M!=="children"&&M!=="direction"&&M!=="wrapperClass"),{params:f,pagination:p,navigation:m,scrollbar:g,virtual:v,thumbs:y}=t;let b,u,d,h,w,S,T,z;i.includes("thumbs")&&r.thumbs&&r.thumbs.swiper&&f.thumbs&&!f.thumbs.swiper&&(b=!0),i.includes("controller")&&r.controller&&r.controller.control&&f.controller&&!f.controller.control&&(u=!0),i.includes("pagination")&&r.pagination&&(r.pagination.el||a)&&(f.pagination||f.pagination===!1)&&p&&!p.el&&(d=!0),i.includes("scrollbar")&&r.scrollbar&&(r.scrollbar.el||l)&&(f.scrollbar||f.scrollbar===!1)&&g&&!g.el&&(h=!0),i.includes("navigation")&&r.navigation&&(r.navigation.prevEl||s)&&(r.navigation.nextEl||o)&&(f.navigation||f.navigation===!1)&&m&&!m.prevEl&&!m.nextEl&&(w=!0);const A=M=>{t[M]&&(t[M].destroy(),M==="navigation"?(t.isElement&&(t[M].prevEl.remove(),t[M].nextEl.remove()),f[M].prevEl=void 0,f[M].nextEl=void 0,t[M].prevEl=void 0,t[M].nextEl=void 0):(t.isElement&&t[M].el.remove(),f[M].el=void 0,t[M].el=void 0))};i.includes("loop")&&t.isElement&&(f.loop&&!r.loop?S=!0:!f.loop&&r.loop?T=!0:z=!0),c.forEach(M=>{if(hn(f[M])&&hn(r[M]))Object.assign(f[M],r[M]),(M==="navigation"||M==="pagination"||M==="scrollbar")&&"enabled"in r[M]&&!r[M].enabled&&A(M);else{const x=r[M];(x===!0||x===!1)&&(M==="navigation"||M==="pagination"||M==="scrollbar")?x===!1&&A(M):f[M]=r[M]}}),c.includes("controller")&&!u&&t.controller&&t.controller.control&&f.controller&&f.controller.control&&(t.controller.control=f.controller.control),i.includes("children")&&n&&v&&f.virtual.enabled?(v.slides=n,v.update(!0)):i.includes("virtual")&&v&&f.virtual.enabled&&(n&&(v.slides=n),v.update(!0)),i.includes("children")&&n&&f.loop&&(z=!0),b&&y.init()&&y.update(!0),u&&(t.controller.control=f.controller.control),d&&(t.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),a.part.add("pagination"),t.el.appendChild(a)),a&&(f.pagination.el=a),p.init(),p.render(),p.update()),h&&(t.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-scrollbar"),l.part.add("scrollbar"),t.el.appendChild(l)),l&&(f.scrollbar.el=l),g.init(),g.updateSize(),g.setTranslate()),w&&(t.isElement&&((!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-next"),o.innerHTML=t.hostEl.constructor.nextButtonSvg,o.part.add("button-next"),t.el.appendChild(o)),(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-prev"),s.innerHTML=t.hostEl.constructor.prevButtonSvg,s.part.add("button-prev"),t.el.appendChild(s))),o&&(f.navigation.nextEl=o),s&&(f.navigation.prevEl=s),m.init(),m.update()),i.includes("allowSlideNext")&&(t.allowSlideNext=r.allowSlideNext),i.includes("allowSlidePrev")&&(t.allowSlidePrev=r.allowSlidePrev),i.includes("direction")&&t.changeDirection(r.direction,!1),(S||z)&&t.loopDestroy(),(T||z)&&t.loopCreate(),t.update()}function uy(e,t){e===void 0&&(e={}),t===void 0&&(t=!0);const n={on:{}},r={},i={};Bn(n,Dl),n._emitClasses=!0,n.init=!1;const o={},s=Xp.map(a=>a.replace(/_/,"")),l=Object.assign({},e);return Object.keys(l).forEach(a=>{typeof e[a]>"u"||(s.indexOf(a)>=0?hn(e[a])?(n[a]={},i[a]={},Bn(n[a],e[a]),Bn(i[a],e[a])):(n[a]=e[a],i[a]=e[a]):a.search(/on[A-Z]/)===0&&typeof e[a]=="function"?t?r[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:n.on[`${a[2].toLowerCase()}${a.substr(3)}`]=e[a]:o[a]=e[a])}),["navigation","pagination","scrollbar"].forEach(a=>{n[a]===!0&&(n[a]={}),n[a]===!1&&delete n[a]}),{params:n,passedParams:i,rest:o,events:r}}function cy(e,t){let{el:n,nextEl:r,prevEl:i,paginationEl:o,scrollbarEl:s,swiper:l}=e;Qp(t)&&r&&i&&(l.params.navigation.nextEl=r,l.originalParams.navigation.nextEl=r,l.params.navigation.prevEl=i,l.originalParams.navigation.prevEl=i),Kp(t)&&o&&(l.params.pagination.el=o,l.originalParams.pagination.el=o),qp(t)&&s&&(l.params.scrollbar.el=s,l.originalParams.scrollbar.el=s),l.init(n)}function dy(e,t,n,r,i){const o=[];if(!t)return o;const s=a=>{o.indexOf(a)<0&&o.push(a)};if(n&&r){const a=r.map(i),c=n.map(i);a.join("")!==c.join("")&&s("children"),r.length!==n.length&&s("children")}return Xp.filter(a=>a[0]==="_").map(a=>a.replace(/_/,"")).forEach(a=>{if(a in e&&a in t)if(hn(e[a])&&hn(t[a])){const c=Object.keys(e[a]),f=Object.keys(t[a]);c.length!==f.length?s(a):(c.forEach(p=>{e[a][p]!==t[a][p]&&s(a)}),f.forEach(p=>{e[a][p]!==t[a][p]&&s(a)}))}else e[a]!==t[a]&&s(a)}),o}const fy=e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())};function go(){return go=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},go.apply(this,arguments)}function Jp(e){return e.type&&e.type.displayName&&e.type.displayName.includes("SwiperSlide")}function em(e){const t=[];return X.Children.toArray(e).forEach(n=>{Jp(n)?t.push(n):n.props&&n.props.children&&em(n.props.children).forEach(r=>t.push(r))}),t}function py(e){const t=[],n={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return X.Children.toArray(e).forEach(r=>{if(Jp(r))t.push(r);else if(r.props&&r.props.slot&&n[r.props.slot])n[r.props.slot].push(r);else if(r.props&&r.props.children){const i=em(r.props.children);i.length>0?i.forEach(o=>t.push(o)):n["container-end"].push(r)}else n["container-end"].push(r)}),{slides:t,slots:n}}function my(e,t,n){if(!n)return null;const r=f=>{let p=f;return f<0?p=t.length+f:p>=t.length&&(p=p-t.length),p},i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:o,to:s}=n,l=e.params.loop?-t.length:0,a=e.params.loop?t.length*2:t.length,c=[];for(let f=l;f<a;f+=1)f>=o&&f<=s&&c.push(t[r(f)]);return c.map((f,p)=>X.cloneElement(f,{swiper:e,style:i,key:f.props.virtualIndex||f.key||`slide-${p}`}))}function Tr(e,t){return typeof window>"u"?N.useEffect(e,t):N.useLayoutEffect(e,t)}const Vc=N.createContext(null),hy=N.createContext(null),tm=N.forwardRef(function(e,t){let{className:n,tag:r="div",wrapperTag:i="div",children:o,onSwiper:s,...l}=e===void 0?{}:e,a=!1;const[c,f]=N.useState("swiper"),[p,m]=N.useState(null),[g,v]=N.useState(!1),y=N.useRef(!1),b=N.useRef(null),u=N.useRef(null),d=N.useRef(null),h=N.useRef(null),w=N.useRef(null),S=N.useRef(null),T=N.useRef(null),z=N.useRef(null),{params:A,passedParams:M,rest:x,events:k}=uy(l),{slides:C,slots:P}=py(o),D=()=>{v(!g)};Object.assign(A.on,{_containerClasses(j,F){f(F)}});const $=()=>{Object.assign(A.on,k),a=!0;const j={...A};if(delete j.wrapperClass,u.current=new Za(j),u.current.virtual&&u.current.params.virtual.enabled){u.current.virtual.slides=C;const F={cache:!1,slides:C,renderExternal:m,renderExternalUpdate:!1};Bn(u.current.params.virtual,F),Bn(u.current.originalParams.virtual,F)}};b.current||$(),u.current&&u.current.on("_beforeBreakpoint",D);const oe=()=>{a||!k||!u.current||Object.keys(k).forEach(j=>{u.current.on(j,k[j])})},Re=()=>{!k||!u.current||Object.keys(k).forEach(j=>{u.current.off(j,k[j])})};N.useEffect(()=>()=>{u.current&&u.current.off("_beforeBreakpoint",D)}),N.useEffect(()=>{!y.current&&u.current&&(u.current.emitSlidesClasses(),y.current=!0)}),Tr(()=>{if(t&&(t.current=b.current),!!b.current)return u.current.destroyed&&$(),cy({el:b.current,nextEl:w.current,prevEl:S.current,paginationEl:T.current,scrollbarEl:z.current,swiper:u.current},A),s&&!u.current.destroyed&&s(u.current),()=>{u.current&&!u.current.destroyed&&u.current.destroy(!0,!1)}},[]),Tr(()=>{oe();const j=dy(M,d.current,C,h.current,F=>F.key);return d.current=M,h.current=C,j.length&&u.current&&!u.current.destroyed&&ay({swiper:u.current,slides:C,passedParams:M,changedParams:j,nextEl:w.current,prevEl:S.current,scrollbarEl:z.current,paginationEl:T.current}),()=>{Re()}}),Tr(()=>{fy(u.current)},[p]);function L(){return A.virtual?my(u.current,C,p):C.map((j,F)=>X.cloneElement(j,{swiper:u.current,swiperSlideIndex:F}))}return X.createElement(r,go({ref:b,className:Zp(`${c}${n?` ${n}`:""}`)},x),X.createElement(hy.Provider,{value:u.current},P["container-start"],X.createElement(i,{className:ly(A.wrapperClass)},P["wrapper-start"],L(),P["wrapper-end"]),Qp(A)&&X.createElement(X.Fragment,null,X.createElement("div",{ref:S,className:"swiper-button-prev"}),X.createElement("div",{ref:w,className:"swiper-button-next"})),qp(A)&&X.createElement("div",{ref:z,className:"swiper-scrollbar"}),Kp(A)&&X.createElement("div",{ref:T,className:"swiper-pagination"}),P["container-end"]))});tm.displayName="Swiper";const Rl=N.forwardRef(function(e,t){let{tag:n="div",children:r,className:i="",swiper:o,zoom:s,lazy:l,virtualIndex:a,swiperSlideIndex:c,...f}=e===void 0?{}:e;const p=N.useRef(null),[m,g]=N.useState("swiper-slide"),[v,y]=N.useState(!1);function b(w,S,T){S===p.current&&g(T)}Tr(()=>{if(typeof c<"u"&&(p.current.swiperSlideIndex=c),t&&(t.current=p.current),!(!p.current||!o)){if(o.destroyed){m!=="swiper-slide"&&g("swiper-slide");return}return o.on("_slideClass",b),()=>{o&&o.off("_slideClass",b)}}}),Tr(()=>{o&&p.current&&!o.destroyed&&g(o.getSlideClasses(p.current))},[o]);const u={isActive:m.indexOf("swiper-slide-active")>=0,isVisible:m.indexOf("swiper-slide-visible")>=0,isPrev:m.indexOf("swiper-slide-prev")>=0,isNext:m.indexOf("swiper-slide-next")>=0},d=()=>typeof r=="function"?r(u):r,h=()=>{y(!0)};return X.createElement(n,go({ref:p,className:Zp(`${m}${i?` ${i}`:""}`),"data-swiper-slide-index":a,onLoad:h},f),s&&X.createElement(Vc.Provider,{value:u},X.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof s=="number"?s:void 0},d(),l&&!v&&X.createElement("div",{className:"swiper-lazy-preloader"}))),!s&&X.createElement(Vc.Provider,{value:u},d(),l&&!v&&X.createElement("div",{className:"swiper-lazy-preloader"})))});Rl.displayName="SwiperSlide";const gy=()=>E.jsx("div",{className:"video-container123 skeleton-container",children:E.jsx("div",{className:"carousel-div123",children:E.jsx("p",{className:"txt2-123"})})}),vy=({campaigns:e,loading:t,widgetsDiv:n})=>{const r=N.useRef(null);N.useRef([]),N.useState(!1);const[i,o]=N.useState(null),[s,l]=N.useState(!1),[a,c]=N.useState(!0),[f,p]=N.useState(null),m=u=>{o(u)},g=()=>{o(null)},v=()=>{r.current.scrollBy({left:-r.current.clientWidth,behavior:"smooth"})},y=()=>{r.current.scrollBy({left:r.current.clientWidth,behavior:"smooth"})},b=()=>{const u=r.current.scrollLeft,d=r.current.scrollWidth-r.current.clientWidth;l(u>70),c(u<d-70)};return N.useEffect(()=>{const u=r.current;return u.addEventListener("scroll",b),b(),()=>{u.removeEventListener("scroll",b)}},[]),E.jsx(E.Fragment,{children:E.jsxs("div",{className:"container",children:[E.jsx("style",{children:`
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
`}),E.jsx(tm,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,loop:!0,slidesPerView:"auto",coverflowEffect:{rotate:0,stretch:0,depth:100,modifier:2.5},modules:[K0,Y0,W0],className:"swiper_container",children:t?Array.from({length:5}).map((u,d)=>E.jsx(Rl,{children:E.jsx(gy,{})},d)):e.map((u,d)=>E.jsx(Rl,{onClick:()=>m(d),children:E.jsxs("div",{className:"video-container123",children:[E.jsx("div",{className:"inner-video-container123",onMouseEnter:()=>p(d),onMouseLeave:()=>p(null)}),f===d?E.jsx("video",{src:u.videoId[0],loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"}):E.jsx("img",{className:"thumbnail",src:u.campaignPhoto,width:"300",height:"200",alt:"video thumbnail"}),n?E.jsxs("div",{className:"widgetsDivBookdiv123",children:[E.jsx("div",{className:"img1 widgetsDivImg1",children:E.jsx("img",{className:"img widgetsDivImg",src:u.campaignPhoto,alt:"Campaign"})}),E.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[E.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname widgetsDivHotelname",children:u.campaignName}),E.jsx("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer"}),E.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"widgetsDivOfferprice",children:["From ",u.offerPrice.currency,u.offerPrice.price]})]}),E.jsx("div",{className:"divbtn",children:E.jsx("a",{href:u.hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn widgetsDivBookbtn",children:"Book"})})]}):E.jsx("div",{className:"carousel-div123",children:E.jsxs("p",{className:"txt2-123",children:[u.campaignName," ",E.jsx("br",{})," From"," ",u.offerPrice.currency,u.offerPrice.price]})})]})},d))}),s&&E.jsx("button",{className:"nav-btn123",onClick:v,children:"<"}),E.jsx("div",{className:"carousel",ref:r}),a&&E.jsx("button",{className:"nav-btn123",onClick:y,children:">"}),i!==null&&E.jsx(yy,{campaigns:e,currentIndex:i,onClose:g})]})})},yy=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=N.useState(t),[o,s]=N.useState(0),[l,a]=N.useState({mutedAll:!1}),[c,f]=N.useState(!1),[p,m]=N.useState(!1),[g,v]=N.useState(!1),[y,b]=N.useState(!1),u=N.useRef([]);N.useRef(null);const d=N.useRef(null);N.useEffect(()=>{const x=()=>{if(document.visibilityState==="hidden"){const k=u.current[o];k&&!k.paused&&(k.pause(),f(!0),b(!0))}};return document.addEventListener("visibilitychange",x),()=>{document.removeEventListener("visibilitychange",x)}},[o]),N.useEffect(()=>{const x=new IntersectionObserver(k=>{k.forEach(C=>{const P=u.current.indexOf(C.target);C.isIntersecting?(C.target.play(),s(P),b(!1)):C.target.pause()})},{threshold:.5});return s(0),u.current.forEach(k=>{k&&x.observe(k)}),()=>{u.current.forEach(k=>{k&&x.unobserve(k)})}},[r]),N.useEffect(()=>{const x=u.current[o];x&&x.play()},[o]);const h=()=>{r!==null?r+1<e.length?(i(r+1),s(0)):(i(0),s(0)):e.length>0&&(i(0),s(0)),m(!1)},w=()=>{r!==null?r>0?(i(r-1),s(0)):(i(e.length-1),s(0)):e.length>0&&(i(e.length-1),s(0)),m(!1)},S=x=>{const k=u.current[x];k&&(k.paused?(k.play(),console.log("Playing")):(k.pause(),console.log("Paused")),f(k.paused),b(k.paused))},T=()=>{u.current.forEach(k=>{k.muted=!l.mutedAll}),a(k=>({mutedAll:!k.mutedAll}))},z=()=>{v(!g)},A=x=>{const k=x.split(`
`);return k.length>2?{truncated:k.slice(0,2).join(`
`),hasMore:!0}:{truncated:x,hasMore:!1}},M=x=>{console.log("Video ended, checking if animation should play");const k=e[r];if(x<k.videoId.length-1)console.log("Not the last video, playing animation"),m(!0),setTimeout(()=>{const C=u.current[x];C&&(C.currentTime=0,C.play()),m(!1)},5e3);else{console.log("Last video, no animation, just restart");const C=u.current[x];C&&(C.currentTime=0,C.play())}};return N.useEffect(()=>{s(0),d.current&&(d.current.scrollTop=0)},[r]),N.useEffect(()=>{const x=()=>{m(!1)},k=d.current;return k&&k.addEventListener("scroll",x),()=>{k&&k.removeEventListener("scroll",x)}},[]),E.jsxs("div",{className:"whole123",children:[E.jsx("div",{className:"prevbtn123",onClick:w,children:E.jsx(fe,{icon:Da})}),E.jsx("div",{className:"nextbtn123",onClick:h,children:E.jsx(fe,{icon:Oa})}),E.jsxs("div",{className:"reelsContainer",ref:d,children:[e[r].videoId.map((x,k)=>E.jsxs("div",{className:"reel",children:[E.jsx("div",{className:"closediv123",children:E.jsx("button",{className:"closebtn123",onClick:n,children:E.jsx(fe,{icon:Fa})})}),E.jsxs("div",{className:"video-container1",children:[E.jsx("video",{ref:C=>u.current[k]=C,src:x,className:"ad",loop:!1,playsInline:!0,controls:!1,autoPlay:k===o,onClick:()=>S(k),onPause:()=>{f(!0)},onPlay:()=>{f(!1)},onEnded:()=>M(k)}),c&&y&&E.jsx(fe,{icon:np,onClick:()=>S(k),className:"play-button123"}),E.jsxs("div",{className:"bookdiv123",children:[E.jsx("div",{className:"img1",children:E.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),E.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[E.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),E.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[g?e[r].campaignDetails:A(e[r].campaignDetails).truncated,A(e[r].campaignDetails).hasMore&&E.jsx("div",{children:E.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:z,children:g?" View Less":" View More"})})]}),E.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[r].offerPrice.currency,e[r].offerPrice.price]})]}),E.jsx("div",{className:"divbtn",children:E.jsx("a",{href:e[r].hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]}),E.jsx("div",{className:"functions",children:E.jsx(fe,{icon:l.mutedAll?ja:_a,className:"volume123",onClick:T,style:{cursor:"pointer"}})})]},k)),p&&E.jsx("dotlottie-player",{src:"https://lottie.host/9dbbaa88-603c-407f-a9d4-f40ef822c697/JKZJQpvfeR.json",background:"transparent",speed:"1",style:{width:"29vh",height:"29vh",position:"absolute",bottom:"0",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"34px",color:"white",zIndex:1e3},loop:!0,autoplay:!0})]})]})},wy=()=>{const[e,t]=N.useState([]),[n,r]=N.useState([]),[i,o]=N.useState(!0),[s,l]=N.useState(!1);return N.useEffect(()=>{const a=document.getElementById("root-stack"),c=a.dataset.campaignId,f=a.dataset.widgetStatus;l(f==="true"),(async m=>{try{const v=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${m}`)).json(),y=v.campaigns.map(b=>b.videoId[0]);t(y),r(v.campaigns)}catch(g){console.error("Error fetching data:",g)}})(c)},[]),N.useEffect(()=>{n.length>0&&o(!1)},[n]),E.jsxs("div",{className:"App",children:[E.jsx(vy,{videos:e,campaigns:n,loading:i,widgetsDiv:s})," "]})},xy=()=>E.jsx("div",{className:"video-container123 skeleton-container",children:E.jsx("div",{className:"video-content",children:E.jsx("p",{className:"txt2-123"})})}),Sy=({campaigns:e,loading:t,widgetsDiv:n})=>{const r=N.useRef(null);N.useRef([]);const[i,o]=N.useState(null),[s,l]=N.useState(null),a=m=>{o(m)},c=()=>{o(null)},f=()=>{r.current.scrollBy({left:-r.current.clientWidth,behavior:"smooth"})},p=()=>{r.current.scrollBy({left:r.current.clientWidth,behavior:"smooth"})};return t?E.jsx("div",{className:"carousel-container",children:E.jsx("div",{className:"carousel",children:Array.from({length:5}).map((m,g)=>E.jsx(xy,{},g))})}):E.jsxs("div",{className:"carousel-container",children:[E.jsx("button",{className:"nav-btn",onClick:f,children:"<"}),E.jsx("div",{className:"carousel",ref:r,children:e.map((m,g)=>E.jsxs("div",{className:"video-container123",onClick:()=>a(g),onMouseEnter:()=>l(g),onMouseLeave:()=>l(null),children:[s===g?E.jsx("video",{src:m.videoId[0],loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"}):E.jsx("img",{className:"thumbnail",src:m.campaignPhoto,width:"300",height:"200",alt:"video thumbnail"}),n?E.jsxs("div",{className:"widgetsDivBookdiv123",children:[E.jsx("div",{className:"img1 widgetsDivImg1",children:E.jsx("img",{className:"img widgetsDivImg",src:m.campaignPhoto,alt:"Campaign"})}),E.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[E.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname widgetsDivHotelname",children:m.campaignName}),E.jsx("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer"}),E.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"widgetsDivOfferprice",children:["From ",m.offerPrice.currency,m.offerPrice.price]})]}),E.jsx("div",{className:"divbtn",children:E.jsx("a",{href:m.hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn widgetsDivBookbtn",children:"Book"})})]}):E.jsx("div",{className:"video-content",children:E.jsxs("p",{className:"txt",children:[e[g].campaignName," ",E.jsx("br",{})," From"," ",e[g].offerPrice.currency,e[g].offerPrice.price]})})]},g))}),E.jsx("button",{className:"nav-btn",onClick:p,children:">"}),i!==null&&E.jsx(Ey,{campaigns:e,currentIndex:i,onClose:c})]})},Ey=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=N.useState(t),[o,s]=N.useState(0),[l,a]=N.useState({mutedAll:!1}),[c,f]=N.useState(!1),[p,m]=N.useState(!1),[g,v]=N.useState(!1),[y,b]=N.useState(!1),u=N.useRef([]);N.useRef(null);const d=N.useRef(null);N.useEffect(()=>{const x=()=>{if(document.visibilityState==="hidden"){const k=u.current[o];k&&!k.paused&&(k.pause(),f(!0),b(!0))}};return document.addEventListener("visibilitychange",x),()=>{document.removeEventListener("visibilitychange",x)}},[o]),N.useEffect(()=>{const x=new IntersectionObserver(k=>{k.forEach(C=>{const P=u.current.indexOf(C.target);C.isIntersecting?(C.target.play(),s(P),b(!1)):C.target.pause()})},{threshold:.5});return s(0),u.current.forEach(k=>{k&&x.observe(k)}),()=>{u.current.forEach(k=>{k&&x.unobserve(k)})}},[r]),N.useEffect(()=>{const x=u.current[o];x&&x.play()},[o]);const h=()=>{r!==null?r+1<e.length?(i(r+1),s(0)):(i(0),s(0)):e.length>0&&(i(0),s(0)),m(!1)},w=()=>{r!==null?r>0?(i(r-1),s(0)):(i(e.length-1),s(0)):e.length>0&&(i(e.length-1),s(0)),m(!1)},S=x=>{const k=u.current[x];k&&(k.paused?(k.play(),console.log("Playing")):(k.pause(),console.log("Paused")),f(k.paused),b(k.paused))},T=()=>{u.current.forEach(k=>{k.muted=!l.mutedAll}),a(k=>({mutedAll:!k.mutedAll}))},z=()=>{v(!g)},A=x=>{const k=x.split(`
`);return k.length>2?{truncated:k.slice(0,2).join(`
`),hasMore:!0}:{truncated:x,hasMore:!1}},M=x=>{console.log("Video ended, checking if animation should play");const k=e[r];if(x<k.videoId.length-1)console.log("Not the last video, playing animation"),m(!0),setTimeout(()=>{const C=u.current[x];C&&(C.currentTime=0,C.play()),m(!1)},5e3);else{console.log("Last video, no animation, just restart");const C=u.current[x];C&&(C.currentTime=0,C.play())}};return N.useEffect(()=>{s(0),d.current&&(d.current.scrollTop=0)},[r]),N.useEffect(()=>{const x=()=>{m(!1)},k=d.current;return k&&k.addEventListener("scroll",x),()=>{k&&k.removeEventListener("scroll",x)}},[]),E.jsxs("div",{className:"whole123",children:[E.jsx("div",{className:"prevbtn123",onClick:w,children:E.jsx(fe,{icon:Da})}),E.jsx("div",{className:"nextbtn123",onClick:h,children:E.jsx(fe,{icon:Oa})}),E.jsxs("div",{className:"reelsContainer",ref:d,children:[e[r].videoId.map((x,k)=>E.jsxs("div",{className:"reel",children:[E.jsx("div",{className:"closediv123",children:E.jsx("button",{className:"closebtn123",onClick:n,children:E.jsx(fe,{icon:Fa})})}),E.jsxs("div",{className:"video-container1",children:[E.jsx("video",{ref:C=>u.current[k]=C,src:x,className:"ad",loop:!1,playsInline:!0,controls:!1,autoPlay:k===o,onClick:()=>S(k),onPause:()=>{f(!0)},onPlay:()=>{f(!1)},onEnded:()=>M(k)}),c&&y&&E.jsx(fe,{icon:np,onClick:()=>S(k),className:"play-button123"}),E.jsxs("div",{className:"bookdiv123",children:[E.jsx("div",{className:"img1",children:E.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),E.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[E.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),E.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[g?e[r].campaignDetails:A(e[r].campaignDetails).truncated,A(e[r].campaignDetails).hasMore&&E.jsx("div",{children:E.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:z,children:g?" View Less":" View More"})})]}),E.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[r].offerPrice.currency,e[r].offerPrice.price]})]}),E.jsx("div",{className:"divbtn",children:E.jsx("a",{href:e[r].campaignLink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]}),E.jsx("div",{className:"functions",children:E.jsx(fe,{icon:l.mutedAll?ja:_a,className:"volume123",onClick:T,style:{cursor:"pointer"}})})]},k)),p&&E.jsx("dotlottie-player",{src:"https://lottie.host/9dbbaa88-603c-407f-a9d4-f40ef822c697/JKZJQpvfeR.json",background:"transparent",speed:"1",style:{width:"29vh",height:"29vh",position:"absolute",bottom:"0",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"34px",color:"white",zIndex:1e3},loop:!0,autoplay:!0})]})]})},ky=()=>{const[e,t]=N.useState([]),[n,r]=N.useState([]),[i,o]=N.useState(!0),[s,l]=N.useState(!1);return N.useEffect(()=>{const a=document.getElementById("root-carosole"),c=a.dataset.widgetStatus;l(c==="true");const f=a.dataset.campaignId;f?(async m=>{try{const v=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${m}`)).json(),y=v.campaigns.map(b=>b.videoId[0]);t(y),r(v.campaigns)}catch(g){console.error("Error fetching data:",g)}})(f):console.error("No campaign ID found")},[]),N.useEffect(()=>{n.length>0&&o(!1)},[n]),E.jsxs("div",{className:"App",children:[E.jsx("style",{children:`

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
`}),E.jsx(Sy,{videos:e,campaigns:n,loading:i,widgetsDiv:s})," "]})},ks=document.getElementById("root-stories"),bs=document.getElementById("root-carosole"),Cs=document.getElementById("root-stack");ks&&ks.dataset.name==="stories"&&Pr.createRoot(ks).render(E.jsx(X.StrictMode,{children:E.jsx(F0,{})}));bs&&bs.dataset.name==="carosole"&&Pr.createRoot(bs).render(E.jsx(X.StrictMode,{children:E.jsx(ky,{})}));Cs&&Cs.dataset.name==="stack"&&Pr.createRoot(Cs).render(E.jsx(X.StrictMode,{children:E.jsx(wy,{})}));
