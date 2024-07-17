(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function nf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rf={exports:{}},oa={},af={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mr=Symbol.for("react.element"),Kd=Symbol.for("react.portal"),Gd=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),Jd=Symbol.for("react.profiler"),qd=Symbol.for("react.provider"),ep=Symbol.for("react.context"),tp=Symbol.for("react.forward_ref"),np=Symbol.for("react.suspense"),rp=Symbol.for("react.memo"),ip=Symbol.for("react.lazy"),ku=Symbol.iterator;function ap(e){return e===null||typeof e!="object"?null:(e=ku&&e[ku]||e["@@iterator"],typeof e=="function"?e:null)}var of={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lf=Object.assign,uf={};function Dn(e,t,n){this.props=e,this.context=t,this.refs=uf,this.updater=n||of}Dn.prototype.isReactComponent={};Dn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sf(){}sf.prototype=Dn.prototype;function dl(e,t,n){this.props=e,this.context=t,this.refs=uf,this.updater=n||of}var pl=dl.prototype=new sf;pl.constructor=dl;lf(pl,Dn.prototype);pl.isPureReactComponent=!0;var xu=Array.isArray,ff=Object.prototype.hasOwnProperty,ml={current:null},cf={key:!0,ref:!0,__self:!0,__source:!0};function df(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)ff.call(t,r)&&!cf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Mr,type:e,key:a,ref:o,props:i,_owner:ml.current}}function op(e,t){return{$$typeof:Mr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mr}function lp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Su=/\/+/g;function Na(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lp(""+e.key):t.toString(36)}function yi(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Mr:case Kd:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Na(o,0):r,xu(i)?(n="",e!=null&&(n=e.replace(Su,"$&/")+"/"),yi(i,t,n,"",function(s){return s})):i!=null&&(vl(i)&&(i=op(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Su,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",xu(e))for(var l=0;l<e.length;l++){a=e[l];var u=r+Na(a,l);o+=yi(a,t,n,u,i)}else if(u=ap(e),typeof u=="function")for(e=u.call(e),l=0;!(a=e.next()).done;)a=a.value,u=r+Na(a,l++),o+=yi(a,t,n,u,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Yr(e,t,n){if(e==null)return e;var r=[],i=0;return yi(e,r,"","",function(a){return t.call(n,a,i++)}),r}function up(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},wi={transition:null},sp={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:wi,ReactCurrentOwner:ml};function pf(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Yr,forEach:function(e,t,n){Yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yr(e,function(){t++}),t},toArray:function(e){return Yr(e,function(t){return t})||[]},only:function(e){if(!vl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=Dn;R.Fragment=Gd;R.Profiler=Jd;R.PureComponent=dl;R.StrictMode=Zd;R.Suspense=np;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sp;R.act=pf;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=lf({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=ml.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)ff.call(t,u)&&!cf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var s=0;s<u;s++)l[s]=arguments[s+2];r.children=l}return{$$typeof:Mr,type:e.type,key:i,ref:a,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:ep,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qd,_context:e},e.Consumer=e};R.createElement=df;R.createFactory=function(e){var t=df.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:tp,render:e}};R.isValidElement=vl;R.lazy=function(e){return{$$typeof:ip,_payload:{_status:-1,_result:e},_init:up}};R.memo=function(e,t){return{$$typeof:rp,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=wi.transition;wi.transition={};try{e()}finally{wi.transition=t}};R.unstable_act=pf;R.useCallback=function(e,t){return ge.current.useCallback(e,t)};R.useContext=function(e){return ge.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};R.useEffect=function(e,t){return ge.current.useEffect(e,t)};R.useId=function(){return ge.current.useId()};R.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ge.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};R.useRef=function(e){return ge.current.useRef(e)};R.useState=function(e){return ge.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ge.current.useTransition()};R.version="18.3.1";af.exports=R;var ee=af.exports;const hl=nf(ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp=ee,cp=Symbol.for("react.element"),dp=Symbol.for("react.fragment"),pp=Object.prototype.hasOwnProperty,mp=fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vp={key:!0,ref:!0,__self:!0,__source:!0};function mf(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)pp.call(t,r)&&!vp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:cp,type:e,key:a,ref:o,props:i,_owner:mp.current}}oa.Fragment=dp;oa.jsx=mf;oa.jsxs=mf;rf.exports=oa;var z=rf.exports,io={},vf={exports:{}},ze={},hf={exports:{}},gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,A){var I=_.length;_.push(A);e:for(;0<I;){var J=I-1>>>1,ae=_[J];if(0<i(ae,A))_[J]=A,_[I]=ae,I=J;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var A=_[0],I=_.pop();if(I!==A){_[0]=I;e:for(var J=0,ae=_.length,Hr=ae>>>1;J<Hr;){var $t=2*(J+1)-1,_a=_[$t],Ut=$t+1,Br=_[Ut];if(0>i(_a,I))Ut<ae&&0>i(Br,_a)?(_[J]=Br,_[Ut]=I,J=Ut):(_[J]=_a,_[$t]=I,J=$t);else if(Ut<ae&&0>i(Br,I))_[J]=Br,_[Ut]=I,J=Ut;else break e}}return A}function i(_,A){var I=_.sortIndex-A.sortIndex;return I!==0?I:_.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var u=[],s=[],d=1,m=null,v=3,h=!1,y=!1,k=!1,T=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(_){for(var A=n(s);A!==null;){if(A.callback===null)r(s);else if(A.startTime<=_)r(s),A.sortIndex=A.expirationTime,t(u,A);else break;A=n(s)}}function g(_){if(k=!1,p(_),!y)if(n(u)!==null)y=!0,we(x);else{var A=n(s);A!==null&&Wn(g,A.startTime-_)}}function x(_,A){y=!1,k&&(k=!1,c(O),O=-1),h=!0;var I=v;try{for(p(A),m=n(u);m!==null&&(!(m.expirationTime>A)||_&&!Pe());){var J=m.callback;if(typeof J=="function"){m.callback=null,v=m.priorityLevel;var ae=J(m.expirationTime<=A);A=e.unstable_now(),typeof ae=="function"?m.callback=ae:m===n(u)&&r(u),p(A)}else r(u);m=n(u)}if(m!==null)var Hr=!0;else{var $t=n(s);$t!==null&&Wn(g,$t.startTime-A),Hr=!1}return Hr}finally{m=null,v=I,h=!1}}var S=!1,E=null,O=-1,j=5,L=-1;function Pe(){return!(e.unstable_now()-L<j)}function Dt(){if(E!==null){var _=e.unstable_now();L=_;var A=!0;try{A=E(!0,_)}finally{A?mt():(S=!1,E=null)}}else S=!1}var mt;if(typeof f=="function")mt=function(){f(Dt)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,M=U.port2;U.port1.onmessage=Dt,mt=function(){M.postMessage(null)}}else mt=function(){T(Dt,0)};function we(_){E=_,S||(S=!0,mt())}function Wn(_,A){O=T(function(){_(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,we(x))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(v){case 1:case 2:case 3:var A=3;break;default:A=v}var I=v;v=A;try{return _()}finally{v=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,A){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var I=v;v=_;try{return A()}finally{v=I}},e.unstable_scheduleCallback=function(_,A,I){var J=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?J+I:J):I=J,_){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=I+ae,_={id:d++,callback:A,priorityLevel:_,startTime:I,expirationTime:ae,sortIndex:-1},I>J?(_.sortIndex=I,t(s,_),n(u)===null&&_===n(s)&&(k?(c(O),O=-1):k=!0,Wn(g,I-J))):(_.sortIndex=ae,t(u,_),y||h||(y=!0,we(x))),_},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(_){var A=v;return function(){var I=v;v=A;try{return _.apply(this,arguments)}finally{v=I}}}})(gf);hf.exports=gf;var hp=hf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp=ee,Te=hp;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yf=new Set,mr={};function on(e,t){An(e,t),An(e+"Capture",t)}function An(e,t){for(mr[e]=t,e=0;e<t.length;e++)yf.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ao=Object.prototype.hasOwnProperty,yp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Eu={},Cu={};function wp(e){return ao.call(Cu,e)?!0:ao.call(Eu,e)?!1:yp.test(e)?Cu[e]=!0:(Eu[e]=!0,!1)}function kp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xp(e,t,n,r){if(t===null||typeof t>"u"||kp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var gl=/[\-:]([a-z])/g;function yl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gl,yl);fe[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gl,yl);fe[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gl,yl);fe[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function wl(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xp(t,n,i,r)&&(n=null),r||i===null?wp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),sn=Symbol.for("react.portal"),fn=Symbol.for("react.fragment"),kl=Symbol.for("react.strict_mode"),oo=Symbol.for("react.profiler"),wf=Symbol.for("react.provider"),kf=Symbol.for("react.context"),xl=Symbol.for("react.forward_ref"),lo=Symbol.for("react.suspense"),uo=Symbol.for("react.suspense_list"),Sl=Symbol.for("react.memo"),gt=Symbol.for("react.lazy"),xf=Symbol.for("react.offscreen"),Pu=Symbol.iterator;function Hn(e){return e===null||typeof e!="object"?null:(e=Pu&&e[Pu]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Oa;function Jn(e){if(Oa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oa=t&&t[1]||""}return`
`+Oa+e}var Ta=!1;function za(e,t){if(!e||Ta)return"";Ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ta=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jn(e):""}function Sp(e){switch(e.tag){case 5:return Jn(e.type);case 16:return Jn("Lazy");case 13:return Jn("Suspense");case 19:return Jn("SuspenseList");case 0:case 2:case 15:return e=za(e.type,!1),e;case 11:return e=za(e.type.render,!1),e;case 1:return e=za(e.type,!0),e;default:return""}}function so(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fn:return"Fragment";case sn:return"Portal";case oo:return"Profiler";case kl:return"StrictMode";case lo:return"Suspense";case uo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kf:return(e.displayName||"Context")+".Consumer";case wf:return(e._context.displayName||"Context")+".Provider";case xl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sl:return t=e.displayName||null,t!==null?t:so(e.type)||"Memo";case gt:t=e._payload,e=e._init;try{return so(e(t))}catch{}}return null}function Ep(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return so(t);case 8:return t===kl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function At(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cp(e){var t=Sf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xr(e){e._valueTracker||(e._valueTracker=Cp(e))}function Ef(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Sf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fo(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _u(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=At(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cf(e,t){t=t.checked,t!=null&&wl(e,"checked",t,!1)}function co(e,t){Cf(e,t);var n=At(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?po(e,t.type,n):t.hasOwnProperty("defaultValue")&&po(e,t.type,At(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function po(e,t,n){(t!=="number"||Li(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qn=Array.isArray;function Cn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+At(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function mo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(qn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:At(n)}}function Pf(e,t){var n=At(t.value),r=At(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Tu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _f(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_f(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kr,Nf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kr=Kr||document.createElement("div"),Kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pp=["Webkit","ms","Moz","O"];Object.keys(rr).forEach(function(e){Pp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),rr[t]=rr[e]})});function Of(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||rr.hasOwnProperty(e)&&rr[e]?(""+t).trim():t+"px"}function Tf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Of(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var _p=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ho(e,t){if(t){if(_p[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function go(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yo=null;function El(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wo=null,Pn=null,_n=null;function zu(e){if(e=Dr(e)){if(typeof wo!="function")throw Error(w(280));var t=e.stateNode;t&&(t=ca(t),wo(e.stateNode,e.type,t))}}function zf(e){Pn?_n?_n.push(e):_n=[e]:Pn=e}function Af(){if(Pn){var e=Pn,t=_n;if(_n=Pn=null,zu(e),t)for(e=0;e<t.length;e++)zu(t[e])}}function Lf(e,t){return e(t)}function If(){}var Aa=!1;function bf(e,t,n){if(Aa)return e(t,n);Aa=!0;try{return Lf(e,t,n)}finally{Aa=!1,(Pn!==null||_n!==null)&&(If(),Af())}}function hr(e,t){var n=e.stateNode;if(n===null)return null;var r=ca(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var ko=!1;if(at)try{var Bn={};Object.defineProperty(Bn,"passive",{get:function(){ko=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{ko=!1}function Np(e,t,n,r,i,a,o,l,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(d){this.onError(d)}}var ir=!1,Ii=null,bi=!1,xo=null,Op={onError:function(e){ir=!0,Ii=e}};function Tp(e,t,n,r,i,a,o,l,u){ir=!1,Ii=null,Np.apply(Op,arguments)}function zp(e,t,n,r,i,a,o,l,u){if(Tp.apply(this,arguments),ir){if(ir){var s=Ii;ir=!1,Ii=null}else throw Error(w(198));bi||(bi=!0,xo=s)}}function ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Au(e){if(ln(e)!==e)throw Error(w(188))}function Ap(e){var t=e.alternate;if(!t){if(t=ln(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Au(i),e;if(a===r)return Au(i),t;a=a.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Mf(e){return e=Ap(e),e!==null?jf(e):null}function jf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jf(e);if(t!==null)return t;e=e.sibling}return null}var Ff=Te.unstable_scheduleCallback,Lu=Te.unstable_cancelCallback,Lp=Te.unstable_shouldYield,Ip=Te.unstable_requestPaint,q=Te.unstable_now,bp=Te.unstable_getCurrentPriorityLevel,Cl=Te.unstable_ImmediatePriority,Df=Te.unstable_UserBlockingPriority,Ri=Te.unstable_NormalPriority,Rp=Te.unstable_LowPriority,$f=Te.unstable_IdlePriority,la=null,Je=null;function Mp(e){if(Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(la,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:Dp,jp=Math.log,Fp=Math.LN2;function Dp(e){return e>>>=0,e===0?32:31-(jp(e)/Fp|0)|0}var Gr=64,Zr=4194304;function er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=er(l):(a&=o,a!==0&&(r=er(a)))}else o=n&~i,o!==0?r=er(o):a!==0&&(r=er(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-He(t),i=1<<n,r|=e[n],t&=~i;return r}function $p(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Up(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-He(a),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=$p(l,t)):u<=t&&(e.expiredLanes|=l),a&=~l}}function So(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uf(){var e=Gr;return Gr<<=1,!(Gr&4194240)&&(Gr=64),e}function La(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=n}function Vp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-He(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Pl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function Vf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wf,_l,Hf,Bf,Yf,Eo=!1,Jr=[],Et=null,Ct=null,Pt=null,gr=new Map,yr=new Map,wt=[],Wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Iu(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":Ct=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yr.delete(t.pointerId)}}function Yn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Dr(t),t!==null&&_l(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Hp(e,t,n,r,i){switch(t){case"focusin":return Et=Yn(Et,e,t,n,r,i),!0;case"dragenter":return Ct=Yn(Ct,e,t,n,r,i),!0;case"mouseover":return Pt=Yn(Pt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return gr.set(a,Yn(gr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,yr.set(a,Yn(yr.get(a)||null,e,t,n,r,i)),!0}return!1}function Qf(e){var t=Bt(e.target);if(t!==null){var n=ln(t);if(n!==null){if(t=n.tag,t===13){if(t=Rf(n),t!==null){e.blockedOn=t,Yf(e.priority,function(){Hf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Co(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yo=r,n.target.dispatchEvent(r),yo=null}else return t=Dr(n),t!==null&&_l(t),e.blockedOn=n,!1;t.shift()}return!0}function bu(e,t,n){ki(e)&&n.delete(t)}function Bp(){Eo=!1,Et!==null&&ki(Et)&&(Et=null),Ct!==null&&ki(Ct)&&(Ct=null),Pt!==null&&ki(Pt)&&(Pt=null),gr.forEach(bu),yr.forEach(bu)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Eo||(Eo=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,Bp)))}function wr(e){function t(i){return Qn(i,e)}if(0<Jr.length){Qn(Jr[0],e);for(var n=1;n<Jr.length;n++){var r=Jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Et!==null&&Qn(Et,e),Ct!==null&&Qn(Ct,e),Pt!==null&&Qn(Pt,e),gr.forEach(t),yr.forEach(t),n=0;n<wt.length;n++)r=wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<wt.length&&(n=wt[0],n.blockedOn===null);)Qf(n),n.blockedOn===null&&wt.shift()}var Nn=dt.ReactCurrentBatchConfig,ji=!0;function Yp(e,t,n,r){var i=D,a=Nn.transition;Nn.transition=null;try{D=1,Nl(e,t,n,r)}finally{D=i,Nn.transition=a}}function Qp(e,t,n,r){var i=D,a=Nn.transition;Nn.transition=null;try{D=4,Nl(e,t,n,r)}finally{D=i,Nn.transition=a}}function Nl(e,t,n,r){if(ji){var i=Co(e,t,n,r);if(i===null)Va(e,t,r,Fi,n),Iu(e,r);else if(Hp(i,e,t,n,r))r.stopPropagation();else if(Iu(e,r),t&4&&-1<Wp.indexOf(e)){for(;i!==null;){var a=Dr(i);if(a!==null&&Wf(a),a=Co(e,t,n,r),a===null&&Va(e,t,r,Fi,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Va(e,t,r,null,n)}}var Fi=null;function Co(e,t,n,r){if(Fi=null,e=El(r),e=Bt(e),e!==null)if(t=ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fi=e,null}function Xf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bp()){case Cl:return 1;case Df:return 4;case Ri:case Rp:return 16;case $f:return 536870912;default:return 16}default:return 16}}var xt=null,Ol=null,xi=null;function Kf(){if(xi)return xi;var e,t=Ol,n=t.length,r,i="value"in xt?xt.value:xt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xi=i.slice(e,1<r?1-r:void 0)}function Si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qr(){return!0}function Ru(){return!1}function Ae(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?qr:Ru,this.isPropagationStopped=Ru,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qr)},persist:function(){},isPersistent:qr}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tl=Ae($n),Fr=K({},$n,{view:0,detail:0}),Xp=Ae(Fr),Ia,ba,Xn,ua=K({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(Ia=e.screenX-Xn.screenX,ba=e.screenY-Xn.screenY):ba=Ia=0,Xn=e),Ia)},movementY:function(e){return"movementY"in e?e.movementY:ba}}),Mu=Ae(ua),Kp=K({},ua,{dataTransfer:0}),Gp=Ae(Kp),Zp=K({},Fr,{relatedTarget:0}),Ra=Ae(Zp),Jp=K({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),qp=Ae(Jp),em=K({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tm=Ae(em),nm=K({},$n,{data:0}),ju=Ae(nm),rm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},im={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function om(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=am[e])?!!t[e]:!1}function zl(){return om}var lm=K({},Fr,{key:function(e){if(e.key){var t=rm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?im[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zl,charCode:function(e){return e.type==="keypress"?Si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),um=Ae(lm),sm=K({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fu=Ae(sm),fm=K({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zl}),cm=Ae(fm),dm=K({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),pm=Ae(dm),mm=K({},ua,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vm=Ae(mm),hm=[9,13,27,32],Al=at&&"CompositionEvent"in window,ar=null;at&&"documentMode"in document&&(ar=document.documentMode);var gm=at&&"TextEvent"in window&&!ar,Gf=at&&(!Al||ar&&8<ar&&11>=ar),Du=" ",$u=!1;function Zf(e,t){switch(e){case"keyup":return hm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cn=!1;function ym(e,t){switch(e){case"compositionend":return Jf(t);case"keypress":return t.which!==32?null:($u=!0,Du);case"textInput":return e=t.data,e===Du&&$u?null:e;default:return null}}function wm(e,t){if(cn)return e==="compositionend"||!Al&&Zf(e,t)?(e=Kf(),xi=Ol=xt=null,cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gf&&t.locale!=="ko"?null:t.data;default:return null}}var km={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!km[e.type]:t==="textarea"}function qf(e,t,n,r){zf(r),t=Di(t,"onChange"),0<t.length&&(n=new Tl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var or=null,kr=null;function xm(e){fc(e,0)}function sa(e){var t=mn(e);if(Ef(t))return e}function Sm(e,t){if(e==="change")return t}var ec=!1;if(at){var Ma;if(at){var ja="oninput"in document;if(!ja){var Vu=document.createElement("div");Vu.setAttribute("oninput","return;"),ja=typeof Vu.oninput=="function"}Ma=ja}else Ma=!1;ec=Ma&&(!document.documentMode||9<document.documentMode)}function Wu(){or&&(or.detachEvent("onpropertychange",tc),kr=or=null)}function tc(e){if(e.propertyName==="value"&&sa(kr)){var t=[];qf(t,kr,e,El(e)),bf(xm,t)}}function Em(e,t,n){e==="focusin"?(Wu(),or=t,kr=n,or.attachEvent("onpropertychange",tc)):e==="focusout"&&Wu()}function Cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sa(kr)}function Pm(e,t){if(e==="click")return sa(t)}function _m(e,t){if(e==="input"||e==="change")return sa(t)}function Nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:Nm;function xr(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ao.call(t,i)||!Ye(e[i],t[i]))return!1}return!0}function Hu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bu(e,t){var n=Hu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hu(n)}}function nc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rc(){for(var e=window,t=Li();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Li(e.document)}return t}function Ll(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Om(e){var t=rc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&nc(n.ownerDocument.documentElement,n)){if(r!==null&&Ll(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Bu(n,a);var o=Bu(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tm=at&&"documentMode"in document&&11>=document.documentMode,dn=null,Po=null,lr=null,_o=!1;function Yu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_o||dn==null||dn!==Li(r)||(r=dn,"selectionStart"in r&&Ll(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lr&&xr(lr,r)||(lr=r,r=Di(Po,"onSelect"),0<r.length&&(t=new Tl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dn)))}function ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pn={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionend:ei("Transition","TransitionEnd")},Fa={},ic={};at&&(ic=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function fa(e){if(Fa[e])return Fa[e];if(!pn[e])return e;var t=pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ic)return Fa[e]=t[n];return e}var ac=fa("animationend"),oc=fa("animationiteration"),lc=fa("animationstart"),uc=fa("transitionend"),sc=new Map,Qu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,t){sc.set(e,t),on(t,[e])}for(var Da=0;Da<Qu.length;Da++){var $a=Qu[Da],zm=$a.toLowerCase(),Am=$a[0].toUpperCase()+$a.slice(1);Mt(zm,"on"+Am)}Mt(ac,"onAnimationEnd");Mt(oc,"onAnimationIteration");Mt(lc,"onAnimationStart");Mt("dblclick","onDoubleClick");Mt("focusin","onFocus");Mt("focusout","onBlur");Mt(uc,"onTransitionEnd");An("onMouseEnter",["mouseout","mouseover"]);An("onMouseLeave",["mouseout","mouseover"]);An("onPointerEnter",["pointerout","pointerover"]);An("onPointerLeave",["pointerout","pointerover"]);on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));on("onBeforeInput",["compositionend","keypress","textInput","paste"]);on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lm=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function Xu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zp(r,t,void 0,e),e.currentTarget=null}function fc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,s=l.currentTarget;if(l=l.listener,u!==a&&i.isPropagationStopped())break e;Xu(i,l,s),a=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,s=l.currentTarget,l=l.listener,u!==a&&i.isPropagationStopped())break e;Xu(i,l,s),a=u}}}if(bi)throw e=xo,bi=!1,xo=null,e}function V(e,t){var n=t[Ao];n===void 0&&(n=t[Ao]=new Set);var r=e+"__bubble";n.has(r)||(cc(t,e,2,!1),n.add(r))}function Ua(e,t,n){var r=0;t&&(r|=4),cc(n,e,r,t)}var ti="_reactListening"+Math.random().toString(36).slice(2);function Sr(e){if(!e[ti]){e[ti]=!0,yf.forEach(function(n){n!=="selectionchange"&&(Lm.has(n)||Ua(n,!1,e),Ua(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ti]||(t[ti]=!0,Ua("selectionchange",!1,t))}}function cc(e,t,n,r){switch(Xf(t)){case 1:var i=Yp;break;case 4:i=Qp;break;default:i=Nl}n=i.bind(null,t,n,e),i=void 0,!ko||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Va(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Bt(l),o===null)return;if(u=o.tag,u===5||u===6){r=a=o;continue e}l=l.parentNode}}r=r.return}bf(function(){var s=a,d=El(n),m=[];e:{var v=sc.get(e);if(v!==void 0){var h=Tl,y=e;switch(e){case"keypress":if(Si(n)===0)break e;case"keydown":case"keyup":h=um;break;case"focusin":y="focus",h=Ra;break;case"focusout":y="blur",h=Ra;break;case"beforeblur":case"afterblur":h=Ra;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=cm;break;case ac:case oc:case lc:h=qp;break;case uc:h=pm;break;case"scroll":h=Xp;break;case"wheel":h=vm;break;case"copy":case"cut":case"paste":h=tm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Fu}var k=(t&4)!==0,T=!k&&e==="scroll",c=k?v!==null?v+"Capture":null:v;k=[];for(var f=s,p;f!==null;){p=f;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,c!==null&&(g=hr(f,c),g!=null&&k.push(Er(f,g,p)))),T)break;f=f.return}0<k.length&&(v=new h(v,y,null,n,d),m.push({event:v,listeners:k}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",v&&n!==yo&&(y=n.relatedTarget||n.fromElement)&&(Bt(y)||y[ot]))break e;if((h||v)&&(v=d.window===d?d:(v=d.ownerDocument)?v.defaultView||v.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=s,y=y?Bt(y):null,y!==null&&(T=ln(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=s),h!==y)){if(k=Mu,g="onMouseLeave",c="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(k=Fu,g="onPointerLeave",c="onPointerEnter",f="pointer"),T=h==null?v:mn(h),p=y==null?v:mn(y),v=new k(g,f+"leave",h,n,d),v.target=T,v.relatedTarget=p,g=null,Bt(d)===s&&(k=new k(c,f+"enter",y,n,d),k.target=p,k.relatedTarget=T,g=k),T=g,h&&y)t:{for(k=h,c=y,f=0,p=k;p;p=un(p))f++;for(p=0,g=c;g;g=un(g))p++;for(;0<f-p;)k=un(k),f--;for(;0<p-f;)c=un(c),p--;for(;f--;){if(k===c||c!==null&&k===c.alternate)break t;k=un(k),c=un(c)}k=null}else k=null;h!==null&&Ku(m,v,h,k,!1),y!==null&&T!==null&&Ku(m,T,y,k,!0)}}e:{if(v=s?mn(s):window,h=v.nodeName&&v.nodeName.toLowerCase(),h==="select"||h==="input"&&v.type==="file")var x=Sm;else if(Uu(v))if(ec)x=_m;else{x=Cm;var S=Em}else(h=v.nodeName)&&h.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(x=Pm);if(x&&(x=x(e,s))){qf(m,x,n,d);break e}S&&S(e,v,s),e==="focusout"&&(S=v._wrapperState)&&S.controlled&&v.type==="number"&&po(v,"number",v.value)}switch(S=s?mn(s):window,e){case"focusin":(Uu(S)||S.contentEditable==="true")&&(dn=S,Po=s,lr=null);break;case"focusout":lr=Po=dn=null;break;case"mousedown":_o=!0;break;case"contextmenu":case"mouseup":case"dragend":_o=!1,Yu(m,n,d);break;case"selectionchange":if(Tm)break;case"keydown":case"keyup":Yu(m,n,d)}var E;if(Al)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else cn?Zf(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Gf&&n.locale!=="ko"&&(cn||O!=="onCompositionStart"?O==="onCompositionEnd"&&cn&&(E=Kf()):(xt=d,Ol="value"in xt?xt.value:xt.textContent,cn=!0)),S=Di(s,O),0<S.length&&(O=new ju(O,e,null,n,d),m.push({event:O,listeners:S}),E?O.data=E:(E=Jf(n),E!==null&&(O.data=E)))),(E=gm?ym(e,n):wm(e,n))&&(s=Di(s,"onBeforeInput"),0<s.length&&(d=new ju("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:s}),d.data=E))}fc(m,t)})}function Er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Di(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=hr(e,n),a!=null&&r.unshift(Er(e,a,i)),a=hr(e,t),a!=null&&r.push(Er(e,a,i))),e=e.return}return r}function un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ku(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,s=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&s!==null&&(l=s,i?(u=hr(n,a),u!=null&&o.unshift(Er(n,u,l))):i||(u=hr(n,a),u!=null&&o.push(Er(n,u,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Im=/\r\n?/g,bm=/\u0000|\uFFFD/g;function Gu(e){return(typeof e=="string"?e:""+e).replace(Im,`
`).replace(bm,"")}function ni(e,t,n){if(t=Gu(t),Gu(e)!==t&&n)throw Error(w(425))}function $i(){}var No=null,Oo=null;function To(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zo=typeof setTimeout=="function"?setTimeout:void 0,Rm=typeof clearTimeout=="function"?clearTimeout:void 0,Zu=typeof Promise=="function"?Promise:void 0,Mm=typeof queueMicrotask=="function"?queueMicrotask:typeof Zu<"u"?function(e){return Zu.resolve(null).then(e).catch(jm)}:zo;function jm(e){setTimeout(function(){throw e})}function Wa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),wr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wr(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Un=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Un,Cr="__reactProps$"+Un,ot="__reactContainer$"+Un,Ao="__reactEvents$"+Un,Fm="__reactListeners$"+Un,Dm="__reactHandles$"+Un;function Bt(e){var t=e[Ge];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[Ge]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ju(e);e!==null;){if(n=e[Ge])return n;e=Ju(e)}return t}e=n,n=e.parentNode}return null}function Dr(e){return e=e[Ge]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ca(e){return e[Cr]||null}var Lo=[],vn=-1;function jt(e){return{current:e}}function H(e){0>vn||(e.current=Lo[vn],Lo[vn]=null,vn--)}function $(e,t){vn++,Lo[vn]=e.current,e.current=t}var Lt={},me=jt(Lt),Se=jt(!1),Jt=Lt;function Ln(e,t){var n=e.type.contextTypes;if(!n)return Lt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ee(e){return e=e.childContextTypes,e!=null}function Ui(){H(Se),H(me)}function qu(e,t,n){if(me.current!==Lt)throw Error(w(168));$(me,t),$(Se,n)}function dc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(w(108,Ep(e)||"Unknown",i));return K({},n,r)}function Vi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Jt=me.current,$(me,e),$(Se,Se.current),!0}function es(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=dc(e,t,Jt),r.__reactInternalMemoizedMergedChildContext=e,H(Se),H(me),$(me,e)):H(Se),$(Se,n)}var tt=null,da=!1,Ha=!1;function pc(e){tt===null?tt=[e]:tt.push(e)}function $m(e){da=!0,pc(e)}function Ft(){if(!Ha&&tt!==null){Ha=!0;var e=0,t=D;try{var n=tt;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tt=null,da=!1}catch(i){throw tt!==null&&(tt=tt.slice(e+1)),Ff(Cl,Ft),i}finally{D=t,Ha=!1}}return null}var hn=[],gn=0,Wi=null,Hi=0,Ie=[],be=0,qt=null,nt=1,rt="";function Vt(e,t){hn[gn++]=Hi,hn[gn++]=Wi,Wi=e,Hi=t}function mc(e,t,n){Ie[be++]=nt,Ie[be++]=rt,Ie[be++]=qt,qt=e;var r=nt;e=rt;var i=32-He(r)-1;r&=~(1<<i),n+=1;var a=32-He(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,nt=1<<32-He(t)+i|n<<i|r,rt=a+e}else nt=1<<a|n<<i|r,rt=e}function Il(e){e.return!==null&&(Vt(e,1),mc(e,1,0))}function bl(e){for(;e===Wi;)Wi=hn[--gn],hn[gn]=null,Hi=hn[--gn],hn[gn]=null;for(;e===qt;)qt=Ie[--be],Ie[be]=null,rt=Ie[--be],Ie[be]=null,nt=Ie[--be],Ie[be]=null}var Oe=null,Ne=null,Y=!1,Ve=null;function vc(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ts(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oe=e,Ne=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oe=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=qt!==null?{id:nt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oe=e,Ne=null,!0):!1;default:return!1}}function Io(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bo(e){if(Y){var t=Ne;if(t){var n=t;if(!ts(e,t)){if(Io(e))throw Error(w(418));t=_t(n.nextSibling);var r=Oe;t&&ts(e,t)?vc(r,n):(e.flags=e.flags&-4097|2,Y=!1,Oe=e)}}else{if(Io(e))throw Error(w(418));e.flags=e.flags&-4097|2,Y=!1,Oe=e}}}function ns(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function ri(e){if(e!==Oe)return!1;if(!Y)return ns(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!To(e.type,e.memoizedProps)),t&&(t=Ne)){if(Io(e))throw hc(),Error(w(418));for(;t;)vc(e,t),t=_t(t.nextSibling)}if(ns(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Oe?_t(e.stateNode.nextSibling):null;return!0}function hc(){for(var e=Ne;e;)e=_t(e.nextSibling)}function In(){Ne=Oe=null,Y=!1}function Rl(e){Ve===null?Ve=[e]:Ve.push(e)}var Um=dt.ReactCurrentBatchConfig;function Kn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function ii(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rs(e){var t=e._init;return t(e._payload)}function gc(e){function t(c,f){if(e){var p=c.deletions;p===null?(c.deletions=[f],c.flags|=16):p.push(f)}}function n(c,f){if(!e)return null;for(;f!==null;)t(c,f),f=f.sibling;return null}function r(c,f){for(c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function i(c,f){return c=zt(c,f),c.index=0,c.sibling=null,c}function a(c,f,p){return c.index=p,e?(p=c.alternate,p!==null?(p=p.index,p<f?(c.flags|=2,f):p):(c.flags|=2,f)):(c.flags|=1048576,f)}function o(c){return e&&c.alternate===null&&(c.flags|=2),c}function l(c,f,p,g){return f===null||f.tag!==6?(f=Za(p,c.mode,g),f.return=c,f):(f=i(f,p),f.return=c,f)}function u(c,f,p,g){var x=p.type;return x===fn?d(c,f,p.props.children,g,p.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===gt&&rs(x)===f.type)?(g=i(f,p.props),g.ref=Kn(c,f,p),g.return=c,g):(g=Ti(p.type,p.key,p.props,null,c.mode,g),g.ref=Kn(c,f,p),g.return=c,g)}function s(c,f,p,g){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=Ja(p,c.mode,g),f.return=c,f):(f=i(f,p.children||[]),f.return=c,f)}function d(c,f,p,g,x){return f===null||f.tag!==7?(f=Zt(p,c.mode,g,x),f.return=c,f):(f=i(f,p),f.return=c,f)}function m(c,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Za(""+f,c.mode,p),f.return=c,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qr:return p=Ti(f.type,f.key,f.props,null,c.mode,p),p.ref=Kn(c,null,f),p.return=c,p;case sn:return f=Ja(f,c.mode,p),f.return=c,f;case gt:var g=f._init;return m(c,g(f._payload),p)}if(qn(f)||Hn(f))return f=Zt(f,c.mode,p,null),f.return=c,f;ii(c,f)}return null}function v(c,f,p,g){var x=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return x!==null?null:l(c,f,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:return p.key===x?u(c,f,p,g):null;case sn:return p.key===x?s(c,f,p,g):null;case gt:return x=p._init,v(c,f,x(p._payload),g)}if(qn(p)||Hn(p))return x!==null?null:d(c,f,p,g,null);ii(c,p)}return null}function h(c,f,p,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return c=c.get(p)||null,l(f,c,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Qr:return c=c.get(g.key===null?p:g.key)||null,u(f,c,g,x);case sn:return c=c.get(g.key===null?p:g.key)||null,s(f,c,g,x);case gt:var S=g._init;return h(c,f,p,S(g._payload),x)}if(qn(g)||Hn(g))return c=c.get(p)||null,d(f,c,g,x,null);ii(f,g)}return null}function y(c,f,p,g){for(var x=null,S=null,E=f,O=f=0,j=null;E!==null&&O<p.length;O++){E.index>O?(j=E,E=null):j=E.sibling;var L=v(c,E,p[O],g);if(L===null){E===null&&(E=j);break}e&&E&&L.alternate===null&&t(c,E),f=a(L,f,O),S===null?x=L:S.sibling=L,S=L,E=j}if(O===p.length)return n(c,E),Y&&Vt(c,O),x;if(E===null){for(;O<p.length;O++)E=m(c,p[O],g),E!==null&&(f=a(E,f,O),S===null?x=E:S.sibling=E,S=E);return Y&&Vt(c,O),x}for(E=r(c,E);O<p.length;O++)j=h(E,c,O,p[O],g),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?O:j.key),f=a(j,f,O),S===null?x=j:S.sibling=j,S=j);return e&&E.forEach(function(Pe){return t(c,Pe)}),Y&&Vt(c,O),x}function k(c,f,p,g){var x=Hn(p);if(typeof x!="function")throw Error(w(150));if(p=x.call(p),p==null)throw Error(w(151));for(var S=x=null,E=f,O=f=0,j=null,L=p.next();E!==null&&!L.done;O++,L=p.next()){E.index>O?(j=E,E=null):j=E.sibling;var Pe=v(c,E,L.value,g);if(Pe===null){E===null&&(E=j);break}e&&E&&Pe.alternate===null&&t(c,E),f=a(Pe,f,O),S===null?x=Pe:S.sibling=Pe,S=Pe,E=j}if(L.done)return n(c,E),Y&&Vt(c,O),x;if(E===null){for(;!L.done;O++,L=p.next())L=m(c,L.value,g),L!==null&&(f=a(L,f,O),S===null?x=L:S.sibling=L,S=L);return Y&&Vt(c,O),x}for(E=r(c,E);!L.done;O++,L=p.next())L=h(E,c,O,L.value,g),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?O:L.key),f=a(L,f,O),S===null?x=L:S.sibling=L,S=L);return e&&E.forEach(function(Dt){return t(c,Dt)}),Y&&Vt(c,O),x}function T(c,f,p,g){if(typeof p=="object"&&p!==null&&p.type===fn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:e:{for(var x=p.key,S=f;S!==null;){if(S.key===x){if(x=p.type,x===fn){if(S.tag===7){n(c,S.sibling),f=i(S,p.props.children),f.return=c,c=f;break e}}else if(S.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===gt&&rs(x)===S.type){n(c,S.sibling),f=i(S,p.props),f.ref=Kn(c,S,p),f.return=c,c=f;break e}n(c,S);break}else t(c,S);S=S.sibling}p.type===fn?(f=Zt(p.props.children,c.mode,g,p.key),f.return=c,c=f):(g=Ti(p.type,p.key,p.props,null,c.mode,g),g.ref=Kn(c,f,p),g.return=c,c=g)}return o(c);case sn:e:{for(S=p.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(c,f.sibling),f=i(f,p.children||[]),f.return=c,c=f;break e}else{n(c,f);break}else t(c,f);f=f.sibling}f=Ja(p,c.mode,g),f.return=c,c=f}return o(c);case gt:return S=p._init,T(c,f,S(p._payload),g)}if(qn(p))return y(c,f,p,g);if(Hn(p))return k(c,f,p,g);ii(c,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(c,f.sibling),f=i(f,p),f.return=c,c=f):(n(c,f),f=Za(p,c.mode,g),f.return=c,c=f),o(c)):n(c,f)}return T}var bn=gc(!0),yc=gc(!1),Bi=jt(null),Yi=null,yn=null,Ml=null;function jl(){Ml=yn=Yi=null}function Fl(e){var t=Bi.current;H(Bi),e._currentValue=t}function Ro(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){Yi=e,Ml=yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function je(e){var t=e._currentValue;if(Ml!==e)if(e={context:e,memoizedValue:t,next:null},yn===null){if(Yi===null)throw Error(w(308));yn=e,Yi.dependencies={lanes:0,firstContext:e}}else yn=yn.next=e;return t}var Yt=null;function Dl(e){Yt===null?Yt=[e]:Yt.push(e)}function wc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Dl(t)):(n.next=i.next,i.next=n),t.interleaved=n,lt(e,r)}function lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function $l(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,lt(e,n)}return i=r.interleaved,i===null?(t.next=t,Dl(r)):(t.next=i.next,i.next=t),r.interleaved=t,lt(e,n)}function Ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pl(e,n)}}function is(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qi(e,t,n,r){var i=e.updateQueue;yt=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,s=u.next;u.next=null,o===null?a=s:o.next=s,o=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=s:l.next=s,d.lastBaseUpdate=u))}if(a!==null){var m=i.baseState;o=0,d=s=u=null,l=a;do{var v=l.lane,h=l.eventTime;if((r&v)===v){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,k=l;switch(v=t,h=n,k.tag){case 1:if(y=k.payload,typeof y=="function"){m=y.call(h,m,v);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=k.payload,v=typeof y=="function"?y.call(h,m,v):y,v==null)break e;m=K({},m,v);break e;case 2:yt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else h={eventTime:h,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(s=d=h,u=m):d=d.next=h,o|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(d===null&&(u=m),i.baseState=u,i.firstBaseUpdate=s,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);tn|=o,e.lanes=o,e.memoizedState=m}}function as(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var $r={},qe=jt($r),Pr=jt($r),_r=jt($r);function Qt(e){if(e===$r)throw Error(w(174));return e}function Ul(e,t){switch($(_r,t),$(Pr,e),$(qe,$r),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vo(t,e)}H(qe),$(qe,t)}function Rn(){H(qe),H(Pr),H(_r)}function xc(e){Qt(_r.current);var t=Qt(qe.current),n=vo(t,e.type);t!==n&&($(Pr,e),$(qe,n))}function Vl(e){Pr.current===e&&(H(qe),H(Pr))}var Q=jt(0);function Xi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ba=[];function Wl(){for(var e=0;e<Ba.length;e++)Ba[e]._workInProgressVersionPrimary=null;Ba.length=0}var Ci=dt.ReactCurrentDispatcher,Ya=dt.ReactCurrentBatchConfig,en=0,X=null,ne=null,oe=null,Ki=!1,ur=!1,Nr=0,Vm=0;function ce(){throw Error(w(321))}function Hl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ye(e[n],t[n]))return!1;return!0}function Bl(e,t,n,r,i,a){if(en=a,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ci.current=e===null||e.memoizedState===null?Ym:Qm,e=n(r,i),ur){a=0;do{if(ur=!1,Nr=0,25<=a)throw Error(w(301));a+=1,oe=ne=null,t.updateQueue=null,Ci.current=Xm,e=n(r,i)}while(ur)}if(Ci.current=Gi,t=ne!==null&&ne.next!==null,en=0,oe=ne=X=null,Ki=!1,t)throw Error(w(300));return e}function Yl(){var e=Nr!==0;return Nr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?X.memoizedState=oe=e:oe=oe.next=e,oe}function Fe(){if(ne===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=oe===null?X.memoizedState:oe.next;if(t!==null)oe=t,ne=e;else{if(e===null)throw Error(w(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},oe===null?X.memoizedState=oe=e:oe=oe.next=e}return oe}function Or(e,t){return typeof t=="function"?t(e):t}function Qa(e){var t=Fe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=ne,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,u=null,s=a;do{var d=s.lane;if((en&d)===d)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var m={lane:d,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,X.lanes|=d,tn|=d}s=s.next}while(s!==null&&s!==a);u===null?o=r:u.next=l,Ye(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,X.lanes|=a,tn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xa(e){var t=Fe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Ye(a,t.memoizedState)||(xe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Sc(){}function Ec(e,t){var n=X,r=Fe(),i=t(),a=!Ye(r.memoizedState,i);if(a&&(r.memoizedState=i,xe=!0),r=r.queue,Ql(_c.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,Tr(9,Pc.bind(null,n,r,i,t),void 0,null),le===null)throw Error(w(349));en&30||Cc(n,t,i)}return i}function Cc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Pc(e,t,n,r){t.value=n,t.getSnapshot=r,Nc(t)&&Oc(e)}function _c(e,t,n){return n(function(){Nc(t)&&Oc(e)})}function Nc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ye(e,n)}catch{return!0}}function Oc(e){var t=lt(e,1);t!==null&&Be(t,e,1,-1)}function os(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Or,lastRenderedState:e},t.queue=e,e=e.dispatch=Bm.bind(null,X,e),[t.memoizedState,e]}function Tr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Tc(){return Fe().memoizedState}function Pi(e,t,n,r){var i=Xe();X.flags|=e,i.memoizedState=Tr(1|t,n,void 0,r===void 0?null:r)}function pa(e,t,n,r){var i=Fe();r=r===void 0?null:r;var a=void 0;if(ne!==null){var o=ne.memoizedState;if(a=o.destroy,r!==null&&Hl(r,o.deps)){i.memoizedState=Tr(t,n,a,r);return}}X.flags|=e,i.memoizedState=Tr(1|t,n,a,r)}function ls(e,t){return Pi(8390656,8,e,t)}function Ql(e,t){return pa(2048,8,e,t)}function zc(e,t){return pa(4,2,e,t)}function Ac(e,t){return pa(4,4,e,t)}function Lc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ic(e,t,n){return n=n!=null?n.concat([e]):null,pa(4,4,Lc.bind(null,t,e),n)}function Xl(){}function bc(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rc(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mc(e,t,n){return en&21?(Ye(n,t)||(n=Uf(),X.lanes|=n,tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function Wm(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Ya.transition;Ya.transition={};try{e(!1),t()}finally{D=n,Ya.transition=r}}function jc(){return Fe().memoizedState}function Hm(e,t,n){var r=Tt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fc(e))Dc(t,n);else if(n=wc(e,t,n,r),n!==null){var i=he();Be(n,e,r,i),$c(n,t,r)}}function Bm(e,t,n){var r=Tt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fc(e))Dc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ye(l,o)){var u=t.interleaved;u===null?(i.next=i,Dl(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=wc(e,t,i,r),n!==null&&(i=he(),Be(n,e,r,i),$c(n,t,r))}}function Fc(e){var t=e.alternate;return e===X||t!==null&&t===X}function Dc(e,t){ur=Ki=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $c(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pl(e,n)}}var Gi={readContext:je,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},Ym={readContext:je,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:je,useEffect:ls,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pi(4194308,4,Lc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pi(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hm.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:os,useDebugValue:Xl,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=os(!1),t=e[0];return e=Wm.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=Xe();if(Y){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),le===null)throw Error(w(349));en&30||Cc(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ls(_c.bind(null,r,a,e),[e]),r.flags|=2048,Tr(9,Pc.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Xe(),t=le.identifierPrefix;if(Y){var n=rt,r=nt;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qm={readContext:je,useCallback:bc,useContext:je,useEffect:Ql,useImperativeHandle:Ic,useInsertionEffect:zc,useLayoutEffect:Ac,useMemo:Rc,useReducer:Qa,useRef:Tc,useState:function(){return Qa(Or)},useDebugValue:Xl,useDeferredValue:function(e){var t=Fe();return Mc(t,ne.memoizedState,e)},useTransition:function(){var e=Qa(Or)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Sc,useSyncExternalStore:Ec,useId:jc,unstable_isNewReconciler:!1},Xm={readContext:je,useCallback:bc,useContext:je,useEffect:Ql,useImperativeHandle:Ic,useInsertionEffect:zc,useLayoutEffect:Ac,useMemo:Rc,useReducer:Xa,useRef:Tc,useState:function(){return Xa(Or)},useDebugValue:Xl,useDeferredValue:function(e){var t=Fe();return ne===null?t.memoizedState=e:Mc(t,ne.memoizedState,e)},useTransition:function(){var e=Xa(Or)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Sc,useSyncExternalStore:Ec,useId:jc,unstable_isNewReconciler:!1};function $e(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Mo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ma={isMounted:function(e){return(e=e._reactInternals)?ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),i=Tt(e),a=it(r,i);a.payload=t,n!=null&&(a.callback=n),t=Nt(e,a,i),t!==null&&(Be(t,e,i,r),Ei(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),i=Tt(e),a=it(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Nt(e,a,i),t!==null&&(Be(t,e,i,r),Ei(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=Tt(e),i=it(n,r);i.tag=2,t!=null&&(i.callback=t),t=Nt(e,i,r),t!==null&&(Be(t,e,r,n),Ei(t,e,r))}};function us(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!xr(n,r)||!xr(i,a):!0}function Uc(e,t,n){var r=!1,i=Lt,a=t.contextType;return typeof a=="object"&&a!==null?a=je(a):(i=Ee(t)?Jt:me.current,r=t.contextTypes,a=(r=r!=null)?Ln(e,i):Lt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ma,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ss(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ma.enqueueReplaceState(t,t.state,null)}function jo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},$l(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=je(a):(a=Ee(t)?Jt:me.current,i.context=Ln(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Mo(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ma.enqueueReplaceState(i,i.state,null),Qi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Mn(e,t){try{var n="",r=t;do n+=Sp(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Ka(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Km=typeof WeakMap=="function"?WeakMap:Map;function Vc(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ji||(Ji=!0,Xo=r),Fo(e,t)},n}function Wc(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Fo(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Fo(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function fs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Km;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=sv.bind(null,e,t,n),t.then(e,e))}function cs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ds(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=it(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var Gm=dt.ReactCurrentOwner,xe=!1;function ve(e,t,n,r){t.child=e===null?yc(t,null,n,r):bn(t,e.child,n,r)}function ps(e,t,n,r,i){n=n.render;var a=t.ref;return On(t,i),r=Bl(e,t,n,r,a,i),n=Yl(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(Y&&n&&Il(t),t.flags|=1,ve(e,t,r,i),t.child)}function ms(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!nu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Hc(e,t,a,r,i)):(e=Ti(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:xr,n(o,r)&&e.ref===t.ref)return ut(e,t,i)}return t.flags|=1,e=zt(a,r),e.ref=t.ref,e.return=t,t.child=e}function Hc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(xr(a,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,ut(e,t,i)}return Do(e,t,n,r,i)}function Bc(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(kn,_e),_e|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$(kn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,$(kn,_e),_e|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,$(kn,_e),_e|=r;return ve(e,t,i,n),t.child}function Yc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Do(e,t,n,r,i){var a=Ee(n)?Jt:me.current;return a=Ln(t,a),On(t,i),n=Bl(e,t,n,r,a,i),r=Yl(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(Y&&r&&Il(t),t.flags|=1,ve(e,t,n,i),t.child)}function vs(e,t,n,r,i){if(Ee(n)){var a=!0;Vi(t)}else a=!1;if(On(t,i),t.stateNode===null)_i(e,t),Uc(t,n,r),jo(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var u=o.context,s=n.contextType;typeof s=="object"&&s!==null?s=je(s):(s=Ee(n)?Jt:me.current,s=Ln(t,s));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==s)&&ss(t,o,r,s),yt=!1;var v=t.memoizedState;o.state=v,Qi(t,r,o,i),u=t.memoizedState,l!==r||v!==u||Se.current||yt?(typeof d=="function"&&(Mo(t,n,d,r),u=t.memoizedState),(l=yt||us(t,n,l,r,v,u,s))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=s,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,kc(e,t),l=t.memoizedProps,s=t.type===t.elementType?l:$e(t.type,l),o.props=s,m=t.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=je(u):(u=Ee(n)?Jt:me.current,u=Ln(t,u));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||v!==u)&&ss(t,o,r,u),yt=!1,v=t.memoizedState,o.state=v,Qi(t,r,o,i);var y=t.memoizedState;l!==m||v!==y||Se.current||yt?(typeof h=="function"&&(Mo(t,n,h,r),y=t.memoizedState),(s=yt||us(t,n,s,r,v,y,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=u,r=s):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return $o(e,t,n,r,a,i)}function $o(e,t,n,r,i,a){Yc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&es(t,n,!1),ut(e,t,a);r=t.stateNode,Gm.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=bn(t,e.child,null,a),t.child=bn(t,null,l,a)):ve(e,t,l,a),t.memoizedState=r.state,i&&es(t,n,!0),t.child}function Qc(e){var t=e.stateNode;t.pendingContext?qu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qu(e,t.context,!1),Ul(e,t.containerInfo)}function hs(e,t,n,r,i){return In(),Rl(i),t.flags|=256,ve(e,t,n,r),t.child}var Uo={dehydrated:null,treeContext:null,retryLane:0};function Vo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xc(e,t,n){var r=t.pendingProps,i=Q.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$(Q,i&1),e===null)return bo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=ga(o,r,0,null),e=Zt(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Vo(n),t.memoizedState=Uo,e):Kl(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Zm(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=zt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=zt(l,a):(a=Zt(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Vo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Uo,r}return a=e.child,e=a.sibling,r=zt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Kl(e,t){return t=ga({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ai(e,t,n,r){return r!==null&&Rl(r),bn(t,e.child,null,n),e=Kl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zm(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Ka(Error(w(422))),ai(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=ga({mode:"visible",children:r.children},i,0,null),a=Zt(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&bn(t,e.child,null,o),t.child.memoizedState=Vo(o),t.memoizedState=Uo,a);if(!(t.mode&1))return ai(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(w(419)),r=Ka(a,r,void 0),ai(e,t,o,r)}if(l=(o&e.childLanes)!==0,xe||l){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,lt(e,i),Be(r,e,i,-1))}return tu(),r=Ka(Error(w(421))),ai(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=fv.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Ne=_t(i.nextSibling),Oe=t,Y=!0,Ve=null,e!==null&&(Ie[be++]=nt,Ie[be++]=rt,Ie[be++]=qt,nt=e.id,rt=e.overflow,qt=t),t=Kl(t,r.children),t.flags|=4096,t)}function gs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ro(e.return,t,n)}function Ga(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ve(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gs(e,n,t);else if(e.tag===19)gs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ga(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ga(t,!0,n,null,a);break;case"together":Ga(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _i(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jm(e,t,n){switch(t.tag){case 3:Qc(t),In();break;case 5:xc(t);break;case 1:Ee(t.type)&&Vi(t);break;case 4:Ul(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;$(Bi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Xc(e,t,n):($(Q,Q.current&1),e=ut(e,t,n),e!==null?e.sibling:null);$(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Bc(e,t,n)}return ut(e,t,n)}var Gc,Wo,Zc,Jc;Gc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wo=function(){};Zc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qt(qe.current);var a=null;switch(n){case"input":i=fo(e,i),r=fo(e,r),a=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),a=[];break;case"textarea":i=mo(e,i),r=mo(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$i)}ho(n,r);var o;n=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var l=i[s];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(mr.hasOwnProperty(s)?a||(a=[]):(a=a||[]).push(s,null));for(s in r){var u=r[s];if(l=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&u!==l&&(u!=null||l!=null))if(s==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(a||(a=[]),a.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(a=a||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(mr.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&V("scroll",e),a||l===u||(a=[])):(a=a||[]).push(s,u))}n&&(a=a||[]).push("style",n);var s=a;(t.updateQueue=s)&&(t.flags|=4)}};Jc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gn(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qm(e,t,n){var r=t.pendingProps;switch(bl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Ee(t.type)&&Ui(),de(t),null;case 3:return r=t.stateNode,Rn(),H(Se),H(me),Wl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(Zo(Ve),Ve=null))),Wo(e,t),de(t),null;case 5:Vl(t);var i=Qt(_r.current);if(n=t.type,e!==null&&t.stateNode!=null)Zc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return de(t),null}if(e=Qt(qe.current),ri(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ge]=t,r[Cr]=a,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<tr.length;i++)V(tr[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":_u(r,a),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},V("invalid",r);break;case"textarea":Ou(r,a),V("invalid",r)}ho(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&ni(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&ni(r.textContent,l,e),i=["children",""+l]):mr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&V("scroll",r)}switch(n){case"input":Xr(r),Nu(r,a,!0);break;case"textarea":Xr(r),Tu(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=$i)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_f(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ge]=t,e[Cr]=r,Gc(e,t,!1,!1),t.stateNode=e;e:{switch(o=go(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<tr.length;i++)V(tr[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":_u(e,r),i=fo(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),V("invalid",e);break;case"textarea":Ou(e,r),i=mo(e,r),V("invalid",e);break;default:i=r}ho(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var u=l[a];a==="style"?Tf(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Nf(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&vr(e,u):typeof u=="number"&&vr(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(mr.hasOwnProperty(a)?u!=null&&a==="onScroll"&&V("scroll",e):u!=null&&wl(e,a,u,o))}switch(n){case"input":Xr(e),Nu(e,r,!1);break;case"textarea":Xr(e),Tu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+At(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Cn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Cn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=$i)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)Jc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Qt(_r.current),Qt(qe.current),ri(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ge]=t,(a=r.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:ni(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ni(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ge]=t,t.stateNode=r}return de(t),null;case 13:if(H(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ne!==null&&t.mode&1&&!(t.flags&128))hc(),In(),t.flags|=98560,a=!1;else if(a=ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(w(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(w(317));a[Ge]=t}else In(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),a=!1}else Ve!==null&&(Zo(Ve),Ve=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?re===0&&(re=3):tu())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return Rn(),Wo(e,t),e===null&&Sr(t.stateNode.containerInfo),de(t),null;case 10:return Fl(t.type._context),de(t),null;case 17:return Ee(t.type)&&Ui(),de(t),null;case 19:if(H(Q),a=t.memoizedState,a===null)return de(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Gn(a,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xi(e),o!==null){for(t.flags|=128,Gn(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(Q,Q.current&1|2),t.child}e=e.sibling}a.tail!==null&&q()>jn&&(t.flags|=128,r=!0,Gn(a,!1),t.lanes=4194304)}else{if(!r)if(e=Xi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Y)return de(t),null}else 2*q()-a.renderingStartTime>jn&&n!==1073741824&&(t.flags|=128,r=!0,Gn(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=q(),t.sibling=null,n=Q.current,$(Q,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return eu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function ev(e,t){switch(bl(t),t.tag){case 1:return Ee(t.type)&&Ui(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(),H(Se),H(me),Wl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vl(t),null;case 13:if(H(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));In()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Q),null;case 4:return Rn(),null;case 10:return Fl(t.type._context),null;case 22:case 23:return eu(),null;case 24:return null;default:return null}}var oi=!1,pe=!1,tv=typeof WeakSet=="function"?WeakSet:Set,P=null;function wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Ho(e,t,n){try{n()}catch(r){G(e,t,r)}}var ys=!1;function nv(e,t){if(No=ji,e=rc(),Ll(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,s=0,d=0,m=e,v=null;t:for(;;){for(var h;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==a||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(h=m.firstChild)!==null;)v=m,m=h;for(;;){if(m===e)break t;if(v===n&&++s===i&&(l=o),v===a&&++d===r&&(u=o),(h=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=h}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oo={focusedElem:e,selectionRange:n},ji=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var k=y.memoizedProps,T=y.memoizedState,c=t.stateNode,f=c.getSnapshotBeforeUpdate(t.elementType===t.type?k:$e(t.type,k),T);c.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(g){G(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=ys,ys=!1,y}function sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ho(t,n,a)}i=i.next}while(i!==r)}}function va(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qc(e){var t=e.alternate;t!==null&&(e.alternate=null,qc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[Cr],delete t[Ao],delete t[Fm],delete t[Dm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ed(e){return e.tag===5||e.tag===3||e.tag===4}function ws(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ed(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$i));else if(r!==4&&(e=e.child,e!==null))for(Yo(e,t,n),e=e.sibling;e!==null;)Yo(e,t,n),e=e.sibling}function Qo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qo(e,t,n),e=e.sibling;e!==null;)Qo(e,t,n),e=e.sibling}var ue=null,Ue=!1;function vt(e,t,n){for(n=n.child;n!==null;)td(e,t,n),n=n.sibling}function td(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(la,n)}catch{}switch(n.tag){case 5:pe||wn(n,t);case 6:var r=ue,i=Ue;ue=null,vt(e,t,n),ue=r,Ue=i,ue!==null&&(Ue?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ue?(e=ue,n=n.stateNode,e.nodeType===8?Wa(e.parentNode,n):e.nodeType===1&&Wa(e,n),wr(e)):Wa(ue,n.stateNode));break;case 4:r=ue,i=Ue,ue=n.stateNode.containerInfo,Ue=!0,vt(e,t,n),ue=r,Ue=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Ho(n,t,o),i=i.next}while(i!==r)}vt(e,t,n);break;case 1:if(!pe&&(wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){G(n,t,l)}vt(e,t,n);break;case 21:vt(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,vt(e,t,n),pe=r):vt(e,t,n);break;default:vt(e,t,n)}}function ks(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tv),t.forEach(function(r){var i=cv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function De(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ue=l.stateNode,Ue=!1;break e;case 3:ue=l.stateNode.containerInfo,Ue=!0;break e;case 4:ue=l.stateNode.containerInfo,Ue=!0;break e}l=l.return}if(ue===null)throw Error(w(160));td(a,o,i),ue=null,Ue=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(s){G(i,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nd(t,e),t=t.sibling}function nd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Qe(e),r&4){try{sr(3,e,e.return),va(3,e)}catch(k){G(e,e.return,k)}try{sr(5,e,e.return)}catch(k){G(e,e.return,k)}}break;case 1:De(t,e),Qe(e),r&512&&n!==null&&wn(n,n.return);break;case 5:if(De(t,e),Qe(e),r&512&&n!==null&&wn(n,n.return),e.flags&32){var i=e.stateNode;try{vr(i,"")}catch(k){G(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Cf(i,a),go(l,o);var s=go(l,a);for(o=0;o<u.length;o+=2){var d=u[o],m=u[o+1];d==="style"?Tf(i,m):d==="dangerouslySetInnerHTML"?Nf(i,m):d==="children"?vr(i,m):wl(i,d,m,s)}switch(l){case"input":co(i,a);break;case"textarea":Pf(i,a);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;h!=null?Cn(i,!!a.multiple,h,!1):v!==!!a.multiple&&(a.defaultValue!=null?Cn(i,!!a.multiple,a.defaultValue,!0):Cn(i,!!a.multiple,a.multiple?[]:"",!1))}i[Cr]=a}catch(k){G(e,e.return,k)}}break;case 6:if(De(t,e),Qe(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(k){G(e,e.return,k)}}break;case 3:if(De(t,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wr(t.containerInfo)}catch(k){G(e,e.return,k)}break;case 4:De(t,e),Qe(e);break;case 13:De(t,e),Qe(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Jl=q())),r&4&&ks(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(s=pe)||d,De(t,e),pe=s):De(t,e),Qe(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!d&&e.mode&1)for(P=e,d=e.child;d!==null;){for(m=P=d;P!==null;){switch(v=P,h=v.child,v.tag){case 0:case 11:case 14:case 15:sr(4,v,v.return);break;case 1:wn(v,v.return);var y=v.stateNode;if(typeof y.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(k){G(r,n,k)}}break;case 5:wn(v,v.return);break;case 22:if(v.memoizedState!==null){Ss(m);continue}}h!==null?(h.return=v,P=h):Ss(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,s?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Of("display",o))}catch(k){G(e,e.return,k)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=s?"":m.memoizedProps}catch(k){G(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:De(t,e),Qe(e),r&4&&ks(e);break;case 21:break;default:De(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ed(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vr(i,""),r.flags&=-33);var a=ws(e);Qo(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ws(e);Yo(e,l,o);break;default:throw Error(w(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rv(e,t,n){P=e,rd(e)}function rd(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||oi;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||pe;l=oi;var s=pe;if(oi=o,(pe=u)&&!s)for(P=i;P!==null;)o=P,u=o.child,o.tag===22&&o.memoizedState!==null?Es(i):u!==null?(u.return=o,P=u):Es(i);for(;a!==null;)P=a,rd(a),a=a.sibling;P=i,oi=l,pe=s}xs(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,P=a):xs(e)}}function xs(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||va(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:$e(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&as(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}as(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var d=s.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&wr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}pe||t.flags&512&&Bo(t)}catch(v){G(t,t.return,v)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Ss(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Es(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{va(4,t)}catch(u){G(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){G(t,i,u)}}var a=t.return;try{Bo(t)}catch(u){G(t,a,u)}break;case 5:var o=t.return;try{Bo(t)}catch(u){G(t,o,u)}}}catch(u){G(t,t.return,u)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var iv=Math.ceil,Zi=dt.ReactCurrentDispatcher,Gl=dt.ReactCurrentOwner,Me=dt.ReactCurrentBatchConfig,F=0,le=null,te=null,se=0,_e=0,kn=jt(0),re=0,zr=null,tn=0,ha=0,Zl=0,fr=null,ke=null,Jl=0,jn=1/0,et=null,Ji=!1,Xo=null,Ot=null,li=!1,St=null,qi=0,cr=0,Ko=null,Ni=-1,Oi=0;function he(){return F&6?q():Ni!==-1?Ni:Ni=q()}function Tt(e){return e.mode&1?F&2&&se!==0?se&-se:Um.transition!==null?(Oi===0&&(Oi=Uf()),Oi):(e=D,e!==0||(e=window.event,e=e===void 0?16:Xf(e.type)),e):1}function Be(e,t,n,r){if(50<cr)throw cr=0,Ko=null,Error(w(185));jr(e,n,r),(!(F&2)||e!==le)&&(e===le&&(!(F&2)&&(ha|=n),re===4&&kt(e,se)),Ce(e,r),n===1&&F===0&&!(t.mode&1)&&(jn=q()+500,da&&Ft()))}function Ce(e,t){var n=e.callbackNode;Up(e,t);var r=Mi(e,e===le?se:0);if(r===0)n!==null&&Lu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Lu(n),t===1)e.tag===0?$m(Cs.bind(null,e)):pc(Cs.bind(null,e)),Mm(function(){!(F&6)&&Ft()}),n=null;else{switch(Vf(r)){case 1:n=Cl;break;case 4:n=Df;break;case 16:n=Ri;break;case 536870912:n=$f;break;default:n=Ri}n=cd(n,id.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function id(e,t){if(Ni=-1,Oi=0,F&6)throw Error(w(327));var n=e.callbackNode;if(Tn()&&e.callbackNode!==n)return null;var r=Mi(e,e===le?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ea(e,r);else{t=r;var i=F;F|=2;var a=od();(le!==e||se!==t)&&(et=null,jn=q()+500,Gt(e,t));do try{lv();break}catch(l){ad(e,l)}while(!0);jl(),Zi.current=a,F=i,te!==null?t=0:(le=null,se=0,t=re)}if(t!==0){if(t===2&&(i=So(e),i!==0&&(r=i,t=Go(e,i))),t===1)throw n=zr,Gt(e,0),kt(e,r),Ce(e,q()),n;if(t===6)kt(e,r);else{if(i=e.current.alternate,!(r&30)&&!av(i)&&(t=ea(e,r),t===2&&(a=So(e),a!==0&&(r=a,t=Go(e,a))),t===1))throw n=zr,Gt(e,0),kt(e,r),Ce(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Wt(e,ke,et);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=Jl+500-q(),10<t)){if(Mi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=zo(Wt.bind(null,e,ke,et),t);break}Wt(e,ke,et);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-He(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iv(r/1960))-r,10<r){e.timeoutHandle=zo(Wt.bind(null,e,ke,et),r);break}Wt(e,ke,et);break;case 5:Wt(e,ke,et);break;default:throw Error(w(329))}}}return Ce(e,q()),e.callbackNode===n?id.bind(null,e):null}function Go(e,t){var n=fr;return e.current.memoizedState.isDehydrated&&(Gt(e,t).flags|=256),e=ea(e,t),e!==2&&(t=ke,ke=n,t!==null&&Zo(t)),e}function Zo(e){ke===null?ke=e:ke.push.apply(ke,e)}function av(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ye(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~Zl,t&=~ha,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-He(t),r=1<<n;e[n]=-1,t&=~r}}function Cs(e){if(F&6)throw Error(w(327));Tn();var t=Mi(e,0);if(!(t&1))return Ce(e,q()),null;var n=ea(e,t);if(e.tag!==0&&n===2){var r=So(e);r!==0&&(t=r,n=Go(e,r))}if(n===1)throw n=zr,Gt(e,0),kt(e,t),Ce(e,q()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,ke,et),Ce(e,q()),null}function ql(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(jn=q()+500,da&&Ft())}}function nn(e){St!==null&&St.tag===0&&!(F&6)&&Tn();var t=F;F|=1;var n=Me.transition,r=D;try{if(Me.transition=null,D=1,e)return e()}finally{D=r,Me.transition=n,F=t,!(F&6)&&Ft()}}function eu(){_e=kn.current,H(kn)}function Gt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Rm(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(bl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ui();break;case 3:Rn(),H(Se),H(me),Wl();break;case 5:Vl(r);break;case 4:Rn();break;case 13:H(Q);break;case 19:H(Q);break;case 10:Fl(r.type._context);break;case 22:case 23:eu()}n=n.return}if(le=e,te=e=zt(e.current,null),se=_e=t,re=0,zr=null,Zl=ha=tn=0,ke=fr=null,Yt!==null){for(t=0;t<Yt.length;t++)if(n=Yt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Yt=null}return e}function ad(e,t){do{var n=te;try{if(jl(),Ci.current=Gi,Ki){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ki=!1}if(en=0,oe=ne=X=null,ur=!1,Nr=0,Gl.current=null,n===null||n.return===null){re=1,zr=t,te=null;break}e:{var a=e,o=n.return,l=n,u=t;if(t=se,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,d=l,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var v=d.alternate;v?(d.updateQueue=v.updateQueue,d.memoizedState=v.memoizedState,d.lanes=v.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=cs(o);if(h!==null){h.flags&=-257,ds(h,o,l,a,t),h.mode&1&&fs(a,s,t),t=h,u=s;var y=t.updateQueue;if(y===null){var k=new Set;k.add(u),t.updateQueue=k}else y.add(u);break e}else{if(!(t&1)){fs(a,s,t),tu();break e}u=Error(w(426))}}else if(Y&&l.mode&1){var T=cs(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),ds(T,o,l,a,t),Rl(Mn(u,l));break e}}a=u=Mn(u,l),re!==4&&(re=2),fr===null?fr=[a]:fr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var c=Vc(a,u,t);is(a,c);break e;case 1:l=u;var f=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ot===null||!Ot.has(p)))){a.flags|=65536,t&=-t,a.lanes|=t;var g=Wc(a,l,t);is(a,g);break e}}a=a.return}while(a!==null)}ud(n)}catch(x){t=x,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function od(){var e=Zi.current;return Zi.current=Gi,e===null?Gi:e}function tu(){(re===0||re===3||re===2)&&(re=4),le===null||!(tn&268435455)&&!(ha&268435455)||kt(le,se)}function ea(e,t){var n=F;F|=2;var r=od();(le!==e||se!==t)&&(et=null,Gt(e,t));do try{ov();break}catch(i){ad(e,i)}while(!0);if(jl(),F=n,Zi.current=r,te!==null)throw Error(w(261));return le=null,se=0,re}function ov(){for(;te!==null;)ld(te)}function lv(){for(;te!==null&&!Lp();)ld(te)}function ld(e){var t=fd(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?ud(e):te=t,Gl.current=null}function ud(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ev(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=qm(n,t,_e),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function Wt(e,t,n){var r=D,i=Me.transition;try{Me.transition=null,D=1,uv(e,t,n,r)}finally{Me.transition=i,D=r}return null}function uv(e,t,n,r){do Tn();while(St!==null);if(F&6)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Vp(e,a),e===le&&(te=le=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||li||(li=!0,cd(Ri,function(){return Tn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Me.transition,Me.transition=null;var o=D;D=1;var l=F;F|=4,Gl.current=null,nv(e,n),nd(n,e),Om(Oo),ji=!!No,Oo=No=null,e.current=n,rv(n),Ip(),F=l,D=o,Me.transition=a}else e.current=n;if(li&&(li=!1,St=e,qi=i),a=e.pendingLanes,a===0&&(Ot=null),Mp(n.stateNode),Ce(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ji)throw Ji=!1,e=Xo,Xo=null,e;return qi&1&&e.tag!==0&&Tn(),a=e.pendingLanes,a&1?e===Ko?cr++:(cr=0,Ko=e):cr=0,Ft(),null}function Tn(){if(St!==null){var e=Vf(qi),t=Me.transition,n=D;try{if(Me.transition=null,D=16>e?16:e,St===null)var r=!1;else{if(e=St,St=null,qi=0,F&6)throw Error(w(331));var i=F;for(F|=4,P=e.current;P!==null;){var a=P,o=a.child;if(P.flags&16){var l=a.deletions;if(l!==null){for(var u=0;u<l.length;u++){var s=l[u];for(P=s;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:sr(8,d,a)}var m=d.child;if(m!==null)m.return=d,P=m;else for(;P!==null;){d=P;var v=d.sibling,h=d.return;if(qc(d),d===s){P=null;break}if(v!==null){v.return=h,P=v;break}P=h}}}var y=a.alternate;if(y!==null){var k=y.child;if(k!==null){y.child=null;do{var T=k.sibling;k.sibling=null,k=T}while(k!==null)}}P=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,P=o;else e:for(;P!==null;){if(a=P,a.flags&2048)switch(a.tag){case 0:case 11:case 15:sr(9,a,a.return)}var c=a.sibling;if(c!==null){c.return=a.return,P=c;break e}P=a.return}}var f=e.current;for(P=f;P!==null;){o=P;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,P=p;else e:for(o=f;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:va(9,l)}}catch(x){G(l,l.return,x)}if(l===o){P=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,P=g;break e}P=l.return}}if(F=i,Ft(),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(la,e)}catch{}r=!0}return r}finally{D=n,Me.transition=t}}return!1}function Ps(e,t,n){t=Mn(n,t),t=Vc(e,t,1),e=Nt(e,t,1),t=he(),e!==null&&(jr(e,1,t),Ce(e,t))}function G(e,t,n){if(e.tag===3)Ps(e,e,n);else for(;t!==null;){if(t.tag===3){Ps(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Mn(n,e),e=Wc(t,e,1),t=Nt(t,e,1),e=he(),t!==null&&(jr(t,1,e),Ce(t,e));break}}t=t.return}}function sv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(se&n)===n&&(re===4||re===3&&(se&130023424)===se&&500>q()-Jl?Gt(e,0):Zl|=n),Ce(e,t)}function sd(e,t){t===0&&(e.mode&1?(t=Zr,Zr<<=1,!(Zr&130023424)&&(Zr=4194304)):t=1);var n=he();e=lt(e,t),e!==null&&(jr(e,t,n),Ce(e,n))}function fv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sd(e,n)}function cv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),sd(e,n)}var fd;fd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,Jm(e,t,n);xe=!!(e.flags&131072)}else xe=!1,Y&&t.flags&1048576&&mc(t,Hi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_i(e,t),e=t.pendingProps;var i=Ln(t,me.current);On(t,n),i=Bl(null,t,r,e,i,n);var a=Yl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(a=!0,Vi(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$l(t),i.updater=ma,t.stateNode=i,i._reactInternals=t,jo(t,r,e,n),t=$o(null,t,r,!0,a,n)):(t.tag=0,Y&&a&&Il(t),ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_i(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=pv(r),e=$e(r,e),i){case 0:t=Do(null,t,r,e,n);break e;case 1:t=vs(null,t,r,e,n);break e;case 11:t=ps(null,t,r,e,n);break e;case 14:t=ms(null,t,r,$e(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),Do(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),vs(e,t,r,i,n);case 3:e:{if(Qc(t),e===null)throw Error(w(387));r=t.pendingProps,a=t.memoizedState,i=a.element,kc(e,t),Qi(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Mn(Error(w(423)),t),t=hs(e,t,r,n,i);break e}else if(r!==i){i=Mn(Error(w(424)),t),t=hs(e,t,r,n,i);break e}else for(Ne=_t(t.stateNode.containerInfo.firstChild),Oe=t,Y=!0,Ve=null,n=yc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(In(),r===i){t=ut(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return xc(t),e===null&&bo(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,To(r,i)?o=null:a!==null&&To(r,a)&&(t.flags|=32),Yc(e,t),ve(e,t,o,n),t.child;case 6:return e===null&&bo(t),null;case 13:return Xc(e,t,n);case 4:return Ul(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),ps(e,t,r,i,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,$(Bi,r._currentValue),r._currentValue=o,a!==null)if(Ye(a.value,o)){if(a.children===i.children&&!Se.current){t=ut(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=it(-1,n&-n),u.tag=2;var s=a.updateQueue;if(s!==null){s=s.shared;var d=s.pending;d===null?u.next=u:(u.next=d.next,d.next=u),s.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Ro(a.return,n,t),l.lanes|=n;break}u=u.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ro(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,On(t,n),i=je(i),r=r(i),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,i=$e(r,t.pendingProps),i=$e(r.type,i),ms(e,t,r,i,n);case 15:return Hc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$e(r,i),_i(e,t),t.tag=1,Ee(r)?(e=!0,Vi(t)):e=!1,On(t,n),Uc(t,r,i),jo(t,r,i,n),$o(null,t,r,!0,e,n);case 19:return Kc(e,t,n);case 22:return Bc(e,t,n)}throw Error(w(156,t.tag))};function cd(e,t){return Ff(e,t)}function dv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new dv(e,t,n,r)}function nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pv(e){if(typeof e=="function")return nu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xl)return 11;if(e===Sl)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ti(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")nu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case fn:return Zt(n.children,i,a,t);case kl:o=8,i|=8;break;case oo:return e=Re(12,n,t,i|2),e.elementType=oo,e.lanes=a,e;case lo:return e=Re(13,n,t,i),e.elementType=lo,e.lanes=a,e;case uo:return e=Re(19,n,t,i),e.elementType=uo,e.lanes=a,e;case xf:return ga(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wf:o=10;break e;case kf:o=9;break e;case xl:o=11;break e;case Sl:o=14;break e;case gt:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Re(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Zt(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function ga(e,t,n,r){return e=Re(22,e,r,t),e.elementType=xf,e.lanes=n,e.stateNode={isHidden:!1},e}function Za(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function Ja(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=La(0),this.expirationTimes=La(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=La(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ru(e,t,n,r,i,a,o,l,u){return e=new mv(e,t,n,l,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Re(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$l(a),e}function vv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dd(e){if(!e)return Lt;e=e._reactInternals;e:{if(ln(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(Ee(n))return dc(e,n,t)}return t}function pd(e,t,n,r,i,a,o,l,u){return e=ru(n,r,!0,e,i,a,o,l,u),e.context=dd(null),n=e.current,r=he(),i=Tt(n),a=it(r,i),a.callback=t??null,Nt(n,a,i),e.current.lanes=i,jr(e,i,r),Ce(e,r),e}function ya(e,t,n,r){var i=t.current,a=he(),o=Tt(i);return n=dd(n),t.context===null?t.context=n:t.pendingContext=n,t=it(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(i,t,o),e!==null&&(Be(e,i,o,a),Ei(e,i,o)),o}function ta(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _s(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function iu(e,t){_s(e,t),(e=e.alternate)&&_s(e,t)}function hv(){return null}var md=typeof reportError=="function"?reportError:function(e){console.error(e)};function au(e){this._internalRoot=e}wa.prototype.render=au.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));ya(e,t,null,null)};wa.prototype.unmount=au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){ya(null,e,null,null)}),t[ot]=null}};function wa(e){this._internalRoot=e}wa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wt.length&&t!==0&&t<wt[n].priority;n++);wt.splice(n,0,e),n===0&&Qf(e)}};function ou(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ns(){}function gv(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var s=ta(o);a.call(s)}}var o=pd(t,r,e,0,null,!1,!1,"",Ns);return e._reactRootContainer=o,e[ot]=o.current,Sr(e.nodeType===8?e.parentNode:e),nn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var s=ta(u);l.call(s)}}var u=ru(e,0,!1,null,null,!1,!1,"",Ns);return e._reactRootContainer=u,e[ot]=u.current,Sr(e.nodeType===8?e.parentNode:e),nn(function(){ya(t,u,n,r)}),u}function xa(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var u=ta(o);l.call(u)}}ya(t,o,e,i)}else o=gv(n,t,e,i,r);return ta(o)}Wf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=er(t.pendingLanes);n!==0&&(Pl(t,n|1),Ce(t,q()),!(F&6)&&(jn=q()+500,Ft()))}break;case 13:nn(function(){var r=lt(e,1);if(r!==null){var i=he();Be(r,e,1,i)}}),iu(e,1)}};_l=function(e){if(e.tag===13){var t=lt(e,134217728);if(t!==null){var n=he();Be(t,e,134217728,n)}iu(e,134217728)}};Hf=function(e){if(e.tag===13){var t=Tt(e),n=lt(e,t);if(n!==null){var r=he();Be(n,e,t,r)}iu(e,t)}};Bf=function(){return D};Yf=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};wo=function(e,t,n){switch(t){case"input":if(co(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ca(r);if(!i)throw Error(w(90));Ef(r),co(r,i)}}}break;case"textarea":Pf(e,n);break;case"select":t=n.value,t!=null&&Cn(e,!!n.multiple,t,!1)}};Lf=ql;If=nn;var yv={usingClientEntryPoint:!1,Events:[Dr,mn,ca,zf,Af,ql]},Zn={findFiberByHostInstance:Bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wv={bundleType:Zn.bundleType,version:Zn.version,rendererPackageName:Zn.rendererPackageName,rendererConfig:Zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mf(e),e===null?null:e.stateNode},findFiberByHostInstance:Zn.findFiberByHostInstance||hv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ui.isDisabled&&ui.supportsFiber)try{la=ui.inject(wv),Je=ui}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yv;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(t))throw Error(w(200));return vv(e,t,null,n)};ze.createRoot=function(e,t){if(!ou(e))throw Error(w(299));var n=!1,r="",i=md;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ru(e,1,!1,null,null,n,!1,r,i),e[ot]=t.current,Sr(e.nodeType===8?e.parentNode:e),new au(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Mf(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return nn(e)};ze.hydrate=function(e,t,n){if(!ka(t))throw Error(w(200));return xa(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!ou(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=md;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=pd(t,null,e,1,n??null,i,!1,a,o),e[ot]=t.current,Sr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new wa(t)};ze.render=function(e,t,n){if(!ka(t))throw Error(w(200));return xa(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!ka(e))throw Error(w(40));return e._reactRootContainer?(nn(function(){xa(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};ze.unstable_batchedUpdates=ql;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ka(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return xa(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function vd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vd)}catch(e){console.error(e)}}vd(),vf.exports=ze;var kv=vf.exports,Os=kv;io.createRoot=Os.createRoot,io.hydrateRoot=Os.hydrateRoot;var xv={prefix:"fas",iconName:"circle-chevron-right",icon:[512,512,["chevron-circle-right"],"f138","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"]},Sv={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]},Ev=Sv,Cv={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},Pv={prefix:"fas",iconName:"volume-xmark",icon:[576,512,["volume-mute","volume-times"],"f6a9","M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},_v=Pv,Nv={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Ov=Nv,Tv={prefix:"fas",iconName:"circle-chevron-left",icon:[512,512,["chevron-circle-left"],"f137","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"]};function Ts(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ts(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ts(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function na(e){"@babel/helpers - typeof";return na=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},na(e)}function zv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Av(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Lv(e,t,n){return t&&Av(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lu(e,t){return bv(e)||Mv(e,t)||hd(e,t)||Fv()}function Ur(e){return Iv(e)||Rv(e)||hd(e)||jv()}function Iv(e){if(Array.isArray(e))return Jo(e)}function bv(e){if(Array.isArray(e))return e}function Rv(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Mv(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,l;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(u){a=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function hd(e,t){if(e){if(typeof e=="string")return Jo(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jo(e,t)}}function Jo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function jv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var zs=function(){},uu={},gd={},yd=null,wd={mark:zs,measure:zs};try{typeof window<"u"&&(uu=window),typeof document<"u"&&(gd=document),typeof MutationObserver<"u"&&(yd=MutationObserver),typeof performance<"u"&&(wd=performance)}catch{}var Dv=uu.navigator||{},As=Dv.userAgent,Ls=As===void 0?"":As,It=uu,B=gd,Is=yd,si=wd;It.document;var pt=!!B.documentElement&&!!B.head&&typeof B.addEventListener=="function"&&typeof B.createElement=="function",kd=~Ls.indexOf("MSIE")||~Ls.indexOf("Trident/"),fi,ci,di,pi,mi,st="___FONT_AWESOME___",qo=16,xd="fa",Sd="svg-inline--fa",rn="data-fa-i2svg",el="data-fa-pseudo-element",$v="data-fa-pseudo-element-pending",su="data-prefix",fu="data-icon",bs="fontawesome-i2svg",Uv="async",Vv=["HTML","HEAD","STYLE","SCRIPT"],Ed=function(){try{return!0}catch{return!1}}(),W="classic",Z="sharp",cu=[W,Z];function Vr(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[W]}})}var Ar=Vr((fi={},ie(fi,W,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),ie(fi,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),fi)),Lr=Vr((ci={},ie(ci,W,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ie(ci,Z,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),ci)),Ir=Vr((di={},ie(di,W,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ie(di,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),di)),Wv=Vr((pi={},ie(pi,W,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ie(pi,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),pi)),Hv=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Cd="fa-layers-text",Bv=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Yv=Vr((mi={},ie(mi,W,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ie(mi,Z,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),mi)),Pd=[1,2,3,4,5,6,7,8,9,10],Qv=Pd.concat([11,12,13,14,15,16,17,18,19,20]),Xv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},br=new Set;Object.keys(Lr[W]).map(br.add.bind(br));Object.keys(Lr[Z]).map(br.add.bind(br));var Kv=[].concat(cu,Ur(br),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Xt.GROUP,Xt.SWAP_OPACITY,Xt.PRIMARY,Xt.SECONDARY]).concat(Pd.map(function(e){return"".concat(e,"x")})).concat(Qv.map(function(e){return"w-".concat(e)})),dr=It.FontAwesomeConfig||{};function Gv(e){var t=B.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Zv(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(B&&typeof B.querySelector=="function"){var Jv=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Jv.forEach(function(e){var t=lu(e,2),n=t[0],r=t[1],i=Zv(Gv(n));i!=null&&(dr[r]=i)})}var _d={styleDefault:"solid",familyDefault:"classic",cssPrefix:xd,replacementClass:Sd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};dr.familyPrefix&&(dr.cssPrefix=dr.familyPrefix);var Fn=C(C({},_d),dr);Fn.autoReplaceSvg||(Fn.observeMutations=!1);var N={};Object.keys(_d).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){Fn[e]=n,pr.forEach(function(r){return r(N)})},get:function(){return Fn[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){Fn.cssPrefix=t,pr.forEach(function(n){return n(N)})},get:function(){return Fn.cssPrefix}});It.FontAwesomeConfig=N;var pr=[];function qv(e){return pr.push(e),function(){pr.splice(pr.indexOf(e),1)}}var ht=qo,Ze={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function eh(e){if(!(!e||!pt)){var t=B.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=B.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return B.head.insertBefore(t,r),e}}var th="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Rr(){for(var e=12,t="";e-- >0;)t+=th[Math.random()*62|0];return t}function Vn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function du(e){return e.classList?Vn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Nd(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function nh(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Nd(e[n]),'" ')},"").trim()}function Sa(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function pu(e){return e.size!==Ze.size||e.x!==Ze.x||e.y!==Ze.y||e.rotate!==Ze.rotate||e.flipX||e.flipY}function rh(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(a," ").concat(o," ").concat(l)},s={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:s}}function ih(e){var t=e.transform,n=e.width,r=n===void 0?qo:n,i=e.height,a=i===void 0?qo:i,o=e.startCentered,l=o===void 0?!1:o,u="";return l&&kd?u+="translate(".concat(t.x/ht-r/2,"em, ").concat(t.y/ht-a/2,"em) "):l?u+="translate(calc(-50% + ".concat(t.x/ht,"em), calc(-50% + ").concat(t.y/ht,"em)) "):u+="translate(".concat(t.x/ht,"em, ").concat(t.y/ht,"em) "),u+="scale(".concat(t.size/ht*(t.flipX?-1:1),", ").concat(t.size/ht*(t.flipY?-1:1),") "),u+="rotate(".concat(t.rotate,"deg) "),u}var ah=`:root, :host {
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
}`;function Od(){var e=xd,t=Sd,n=N.cssPrefix,r=N.replacementClass,i=ah;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var Rs=!1;function qa(){N.autoAddCss&&!Rs&&(eh(Od()),Rs=!0)}var oh={mixout:function(){return{dom:{css:Od,insertCss:qa}}},hooks:function(){return{beforeDOMElementCreation:function(){qa()},beforeI2svg:function(){qa()}}}},ft=It||{};ft[st]||(ft[st]={});ft[st].styles||(ft[st].styles={});ft[st].hooks||(ft[st].hooks={});ft[st].shims||(ft[st].shims=[]);var We=ft[st],Td=[],lh=function e(){B.removeEventListener("DOMContentLoaded",e),ra=1,Td.map(function(t){return t()})},ra=!1;pt&&(ra=(B.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(B.readyState),ra||B.addEventListener("DOMContentLoaded",lh));function uh(e){pt&&(ra?setTimeout(e,0):Td.push(e))}function Wr(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Nd(e):"<".concat(t," ").concat(nh(r),">").concat(a.map(Wr).join(""),"</").concat(t,">")}function Ms(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var eo=function(t,n,r,i){var a=Object.keys(t),o=a.length,l=n,u,s,d;for(r===void 0?(u=1,d=t[a[0]]):(u=0,d=r);u<o;u++)s=a[u],d=l(d,t[s],s,t);return d};function sh(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function tl(e){var t=sh(e);return t.length===1?t[0].toString(16):null}function fh(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function js(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function nl(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=js(t);typeof We.hooks.addPack=="function"&&!i?We.hooks.addPack(e,js(t)):We.styles[e]=C(C({},We.styles[e]||{}),a),e==="fas"&&nl("fa",t)}var vi,hi,gi,xn=We.styles,ch=We.shims,dh=(vi={},ie(vi,W,Object.values(Ir[W])),ie(vi,Z,Object.values(Ir[Z])),vi),mu=null,zd={},Ad={},Ld={},Id={},bd={},ph=(hi={},ie(hi,W,Object.keys(Ar[W])),ie(hi,Z,Object.keys(Ar[Z])),hi);function mh(e){return~Kv.indexOf(e)}function vh(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!mh(i)?i:null}var Rd=function(){var t=function(a){return eo(xn,function(o,l,u){return o[u]=eo(l,a,{}),o},{})};zd=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var l=a[2].filter(function(u){return typeof u=="number"});l.forEach(function(u){i[u.toString(16)]=o})}return i}),Ad=t(function(i,a,o){if(i[o]=o,a[2]){var l=a[2].filter(function(u){return typeof u=="string"});l.forEach(function(u){i[u]=o})}return i}),bd=t(function(i,a,o){var l=a[2];return i[o]=o,l.forEach(function(u){i[u]=o}),i});var n="far"in xn||N.autoFetchSvg,r=eo(ch,function(i,a){var o=a[0],l=a[1],u=a[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:u}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:u}),i},{names:{},unicodes:{}});Ld=r.names,Id=r.unicodes,mu=Ea(N.styleDefault,{family:N.familyDefault})};qv(function(e){mu=Ea(e.styleDefault,{family:N.familyDefault})});Rd();function vu(e,t){return(zd[e]||{})[t]}function hh(e,t){return(Ad[e]||{})[t]}function Kt(e,t){return(bd[e]||{})[t]}function Md(e){return Ld[e]||{prefix:null,iconName:null}}function gh(e){var t=Id[e],n=vu("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function bt(){return mu}var hu=function(){return{prefix:null,iconName:null,rest:[]}};function Ea(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?W:n,i=Ar[r][e],a=Lr[r][e]||Lr[r][i],o=e in We.styles?e:null;return a||o||null}var Fs=(gi={},ie(gi,W,Object.keys(Ir[W])),ie(gi,Z,Object.keys(Ir[Z])),gi);function Ca(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},ie(t,W,"".concat(N.cssPrefix,"-").concat(W)),ie(t,Z,"".concat(N.cssPrefix,"-").concat(Z)),t),o=null,l=W;(e.includes(a[W])||e.some(function(s){return Fs[W].includes(s)}))&&(l=W),(e.includes(a[Z])||e.some(function(s){return Fs[Z].includes(s)}))&&(l=Z);var u=e.reduce(function(s,d){var m=vh(N.cssPrefix,d);if(xn[d]?(d=dh[l].includes(d)?Wv[l][d]:d,o=d,s.prefix=d):ph[l].indexOf(d)>-1?(o=d,s.prefix=Ea(d,{family:l})):m?s.iconName=m:d!==N.replacementClass&&d!==a[W]&&d!==a[Z]&&s.rest.push(d),!i&&s.prefix&&s.iconName){var v=o==="fa"?Md(s.iconName):{},h=Kt(s.prefix,s.iconName);v.prefix&&(o=null),s.iconName=v.iconName||h||s.iconName,s.prefix=v.prefix||s.prefix,s.prefix==="far"&&!xn.far&&xn.fas&&!N.autoFetchSvg&&(s.prefix="fas")}return s},hu());return(e.includes("fa-brands")||e.includes("fab"))&&(u.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(u.prefix="fad"),!u.prefix&&l===Z&&(xn.fass||N.autoFetchSvg)&&(u.prefix="fass",u.iconName=Kt(u.prefix,u.iconName)||u.iconName),(u.prefix==="fa"||o==="fa")&&(u.prefix=bt()||"fas"),u}var yh=function(){function e(){zv(this,e),this.definitions={}}return Lv(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=C(C({},n.definitions[l]||{}),o[l]),nl(l,o[l]);var u=Ir[W][l];u&&nl(u,o[l]),Rd()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],l=o.prefix,u=o.iconName,s=o.icon,d=s[2];n[l]||(n[l]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[l][m]=s)}),n[l][u]=s}),n}}]),e}(),Ds=[],Sn={},zn={},wh=Object.keys(zn);function kh(e,t){var n=t.mixoutsTo;return Ds=e,Sn={},Object.keys(zn).forEach(function(r){wh.indexOf(r)===-1&&delete zn[r]}),Ds.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),na(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){Sn[o]||(Sn[o]=[]),Sn[o].push(a[o])})}r.provides&&r.provides(zn)}),n}function rl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Sn[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function an(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Sn[e]||[];i.forEach(function(a){a.apply(null,n)})}function ct(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return zn[e]?zn[e].apply(null,t):void 0}function il(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||bt();if(t)return t=Kt(n,t)||t,Ms(jd.definitions,n,t)||Ms(We.styles,n,t)}var jd=new yh,xh=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,an("noAuto")},Sh={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pt?(an("beforeI2svg",t),ct("pseudoElements2svg",t),ct("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,uh(function(){Ch({autoReplaceSvgRoot:n}),an("watch",t)})}},Eh={icon:function(t){if(t===null)return null;if(na(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Kt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ea(t[0]);return{prefix:r,iconName:Kt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(Hv))){var i=Ca(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||bt(),iconName:Kt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=bt();return{prefix:a,iconName:Kt(a,t)||t}}}},Le={noAuto:xh,config:N,dom:Sh,parse:Eh,library:jd,findIconDefinition:il,toHtml:Wr},Ch=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?B:n;(Object.keys(We.styles).length>0||N.autoFetchSvg)&&pt&&N.autoReplaceSvg&&Le.dom.i2svg({node:r})};function Pa(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Wr(r)})}}),Object.defineProperty(e,"node",{get:function(){if(pt){var r=B.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ph(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(pu(o)&&n.found&&!r.found){var l=n.width,u=n.height,s={x:l/u/2,y:.5};i.style=Sa(C(C({},a),{},{"transform-origin":"".concat(s.x+o.x/16,"em ").concat(s.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function _h(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},i),{},{id:o}),children:r}]}]}function gu(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,l=e.symbol,u=e.title,s=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,h=v===void 0?!1:v,y=r.found?r:n,k=y.width,T=y.height,c=i==="fak",f=[N.replacementClass,a?"".concat(N.cssPrefix,"-").concat(a):""].filter(function(j){return m.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(m.classes).join(" "),p={children:[],attributes:C(C({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:f,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(T)})},g=c&&!~m.classes.indexOf("fa-fw")?{width:"".concat(k/T*16*.0625,"em")}:{};h&&(p.attributes[rn]=""),u&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(d||Rr())},children:[u]}),delete p.attributes.title);var x=C(C({},p),{},{prefix:i,iconName:a,main:n,mask:r,maskId:s,transform:o,symbol:l,styles:C(C({},g),m.styles)}),S=r.found&&n.found?ct("generateAbstractMask",x)||{children:[],attributes:{}}:ct("generateAbstractIcon",x)||{children:[],attributes:{}},E=S.children,O=S.attributes;return x.children=E,x.attributes=O,l?_h(x):Ph(x)}function $s(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,l=e.watchable,u=l===void 0?!1:l,s=C(C(C({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});u&&(s[rn]="");var d=C({},o.styles);pu(i)&&(d.transform=ih({transform:i,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Sa(d);m.length>0&&(s.style=m);var v=[];return v.push({tag:"span",attributes:s,children:[t]}),a&&v.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),v}function Nh(e){var t=e.content,n=e.title,r=e.extra,i=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Sa(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var to=We.styles;function al(e){var t=e[0],n=e[1],r=e.slice(4),i=lu(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(Xt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Xt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Xt.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var Oh={found:!1,width:512,height:512};function Th(e,t){!Ed&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ol(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=bt()),new Promise(function(r,i){if(ct("missingIconAbstract"),n==="fa"){var a=Md(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&to[t]&&to[t][e]){var o=to[t][e];return r(al(o))}Th(e,t),r(C(C({},Oh),{},{icon:N.showMissingIcons&&e?ct("missingIconAbstract")||{}:{}}))})}var Us=function(){},ll=N.measurePerformance&&si&&si.mark&&si.measure?si:{mark:Us,measure:Us},nr='FA "6.5.2"',zh=function(t){return ll.mark("".concat(nr," ").concat(t," begins")),function(){return Fd(t)}},Fd=function(t){ll.mark("".concat(nr," ").concat(t," ends")),ll.measure("".concat(nr," ").concat(t),"".concat(nr," ").concat(t," begins"),"".concat(nr," ").concat(t," ends"))},yu={begin:zh,end:Fd},zi=function(){};function Vs(e){var t=e.getAttribute?e.getAttribute(rn):null;return typeof t=="string"}function Ah(e){var t=e.getAttribute?e.getAttribute(su):null,n=e.getAttribute?e.getAttribute(fu):null;return t&&n}function Lh(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function Ih(){if(N.autoReplaceSvg===!0)return Ai.replace;var e=Ai[N.autoReplaceSvg];return e||Ai.replace}function bh(e){return B.createElementNS("http://www.w3.org/2000/svg",e)}function Rh(e){return B.createElement(e)}function Dd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?bh:Rh:n;if(typeof e=="string")return B.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Dd(o,{ceFn:r}))}),i}function Mh(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ai={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Dd(i),n)}),n.getAttribute(rn)===null&&N.keepOriginalSource){var r=B.createComment(Mh(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~du(n).indexOf(N.replacementClass))return Ai.replace(t);var i=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(l,u){return u===N.replacementClass||u.match(i)?l.toSvg.push(u):l.toNode.push(u),l},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(l){return Wr(l)}).join(`
`);n.setAttribute(rn,""),n.innerHTML=o}};function Ws(e){e()}function $d(e,t){var n=typeof t=="function"?t:zi;if(e.length===0)n();else{var r=Ws;N.mutateApproach===Uv&&(r=It.requestAnimationFrame||Ws),r(function(){var i=Ih(),a=yu.begin("mutate");e.map(i),a(),n()})}}var wu=!1;function Ud(){wu=!0}function ul(){wu=!1}var ia=null;function Hs(e){if(Is&&N.observeMutations){var t=e.treeCallback,n=t===void 0?zi:t,r=e.nodeCallback,i=r===void 0?zi:r,a=e.pseudoElementsCallback,o=a===void 0?zi:a,l=e.observeMutationsRoot,u=l===void 0?B:l;ia=new Is(function(s){if(!wu){var d=bt();Vn(s).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Vs(m.addedNodes[0])&&(N.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&N.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Vs(m.target)&&~Xv.indexOf(m.attributeName))if(m.attributeName==="class"&&Ah(m.target)){var v=Ca(du(m.target)),h=v.prefix,y=v.iconName;m.target.setAttribute(su,h||d),y&&m.target.setAttribute(fu,y)}else Lh(m.target)&&i(m.target)})}}),pt&&ia.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function jh(){ia&&ia.disconnect()}function Fh(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],l=a.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function Dh(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Ca(du(e));return i.prefix||(i.prefix=bt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=hh(i.prefix,e.innerText)||vu(i.prefix,tl(e.innerText))),!i.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function $h(e){var t=Vn(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||Rr()):(t["aria-hidden"]="true",t.focusable="false")),t}function Uh(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ze,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Bs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Dh(e),r=n.iconName,i=n.prefix,a=n.rest,o=$h(e),l=rl("parseNodeAttributes",{},e),u=t.styleParser?Fh(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ze,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:u,attributes:o}},l)}var Vh=We.styles;function Vd(e){var t=N.autoReplaceSvg==="nest"?Bs(e,{styleParser:!1}):Bs(e);return~t.extra.classes.indexOf(Cd)?ct("generateLayersText",e,t):ct("generateSvgReplacementMutation",e,t)}var Rt=new Set;cu.map(function(e){Rt.add("fa-".concat(e))});Object.keys(Ar[W]).map(Rt.add.bind(Rt));Object.keys(Ar[Z]).map(Rt.add.bind(Rt));Rt=Ur(Rt);function Ys(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pt)return Promise.resolve();var n=B.documentElement.classList,r=function(m){return n.add("".concat(bs,"-").concat(m))},i=function(m){return n.remove("".concat(bs,"-").concat(m))},a=N.autoFetchSvg?Rt:cu.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Vh));a.includes("fa")||a.push("fa");var o=[".".concat(Cd,":not([").concat(rn,"])")].concat(a.map(function(d){return".".concat(d,":not([").concat(rn,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Vn(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var u=yu.begin("onTree"),s=l.reduce(function(d,m){try{var v=Vd(m);v&&d.push(v)}catch(h){Ed||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise(function(d,m){Promise.all(s).then(function(v){$d(v,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),u(),d()})}).catch(function(v){u(),m(v)})})}function Wh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vd(e).then(function(n){n&&$d([n],t)})}function Hh(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:il(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:il(i||{})),e(r,C(C({},n),{},{mask:i}))}}var Bh=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ze:r,a=n.symbol,o=a===void 0?!1:a,l=n.mask,u=l===void 0?null:l,s=n.maskId,d=s===void 0?null:s,m=n.title,v=m===void 0?null:m,h=n.titleId,y=h===void 0?null:h,k=n.classes,T=k===void 0?[]:k,c=n.attributes,f=c===void 0?{}:c,p=n.styles,g=p===void 0?{}:p;if(t){var x=t.prefix,S=t.iconName,E=t.icon;return Pa(C({type:"icon"},t),function(){return an("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(v?f["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(y||Rr()):(f["aria-hidden"]="true",f.focusable="false")),gu({icons:{main:al(E),mask:u?al(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:S,transform:C(C({},Ze),i),symbol:o,title:v,maskId:d,titleId:y,extra:{attributes:f,styles:g,classes:T}})})}},Yh={mixout:function(){return{icon:Hh(Bh)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ys,n.nodeCallback=Wh,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?B:r,a=n.callback,o=a===void 0?function(){}:a;return Ys(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,l=r.prefix,u=r.transform,s=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(h,y){Promise.all([ol(i,l),d.iconName?ol(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(k){var T=lu(k,2),c=T[0],f=T[1];h([n,gu({icons:{main:c,mask:f},prefix:l,iconName:i,transform:u,symbol:s,maskId:m,title:a,titleId:o,extra:v,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,l=n.styles,u=Sa(l);u.length>0&&(i.style=u);var s;return pu(o)&&(s=ct("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(s||a.icon),{children:r,attributes:i}}}},Qh={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Pa({type:"layer"},function(){an("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(u){o=o.concat(u.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(Ur(a)).join(" ")},children:o}]})}}}},Xh={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,u=r.attributes,s=u===void 0?{}:u,d=r.styles,m=d===void 0?{}:d;return Pa({type:"counter",content:n},function(){return an("beforeDOMElementCreation",{content:n,params:r}),Nh({content:n.toString(),title:a,extra:{attributes:s,styles:m,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(Ur(l))}})})}}}},Kh={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Ze:i,o=r.title,l=o===void 0?null:o,u=r.classes,s=u===void 0?[]:u,d=r.attributes,m=d===void 0?{}:d,v=r.styles,h=v===void 0?{}:v;return Pa({type:"text",content:n},function(){return an("beforeDOMElementCreation",{content:n,params:r}),$s({content:n,transform:C(C({},Ze),a),title:l,extra:{attributes:m,styles:h,classes:["".concat(N.cssPrefix,"-layers-text")].concat(Ur(s))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,l=null,u=null;if(kd){var s=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();l=d.width/s,u=d.height/s}return N.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,$s({content:n.innerHTML,width:l,height:u,transform:a,title:i,extra:o,watchable:!0})])}}},Gh=new RegExp('"',"ug"),Qs=[1105920,1112319];function Zh(e){var t=e.replace(Gh,""),n=fh(t,0),r=n>=Qs[0]&&n<=Qs[1],i=t.length===2?t[0]===t[1]:!1;return{value:tl(i?t[0]:t),isSecondary:r||i}}function Xs(e,t){var n="".concat($v).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Vn(e.children),o=a.filter(function(E){return E.getAttribute(el)===t})[0],l=It.getComputedStyle(e,t),u=l.getPropertyValue("font-family").match(Bv),s=l.getPropertyValue("font-weight"),d=l.getPropertyValue("content");if(o&&!u)return e.removeChild(o),r();if(u&&d!=="none"&&d!==""){var m=l.getPropertyValue("content"),v=~["Sharp"].indexOf(u[2])?Z:W,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?Lr[v][u[2].toLowerCase()]:Yv[v][s],y=Zh(m),k=y.value,T=y.isSecondary,c=u[0].startsWith("FontAwesome"),f=vu(h,k),p=f;if(c){var g=gh(k);g.iconName&&g.prefix&&(f=g.iconName,h=g.prefix)}if(f&&!T&&(!o||o.getAttribute(su)!==h||o.getAttribute(fu)!==p)){e.setAttribute(n,p),o&&e.removeChild(o);var x=Uh(),S=x.extra;S.attributes[el]=t,ol(f,h).then(function(E){var O=gu(C(C({},x),{},{icons:{main:E,mask:hu()},prefix:h,iconName:p,extra:S,watchable:!0})),j=B.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(j,e.firstChild):e.appendChild(j),j.outerHTML=O.map(function(L){return Wr(L)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Jh(e){return Promise.all([Xs(e,"::before"),Xs(e,"::after")])}function qh(e){return e.parentNode!==document.head&&!~Vv.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(el)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ks(e){if(pt)return new Promise(function(t,n){var r=Vn(e.querySelectorAll("*")).filter(qh).map(Jh),i=yu.begin("searchPseudoElements");Ud(),Promise.all(r).then(function(){i(),ul(),t()}).catch(function(){i(),ul(),n()})})}var e0={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ks,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?B:r;N.searchPseudoElements&&Ks(i)}}},Gs=!1,t0={mixout:function(){return{dom:{unwatch:function(){Ud(),Gs=!0}}}},hooks:function(){return{bootstrap:function(){Hs(rl("mutationObserverCallbacks",{}))},noAuto:function(){jh()},watch:function(n){var r=n.observeMutationsRoot;Gs?ul():Hs(rl("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Zs=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],l=a.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},n0={mixout:function(){return{parse:{transform:function(n){return Zs(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Zs(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(a/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),s="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(u," ").concat(s," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},h={outer:l,inner:m,path:v};return{tag:"g",attributes:C({},h.outer),children:[{tag:"g",attributes:C({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),h.path)}]}]}}}},no={x:0,y:0,width:"100%",height:"100%"};function Js(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function r0(e){return e.tag==="g"?e.children:[e]}var i0={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Ca(i.split(" ").map(function(o){return o.trim()})):hu();return a.prefix||(a.prefix=bt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,l=n.maskId,u=n.transform,s=a.width,d=a.icon,m=o.width,v=o.icon,h=rh({transform:u,containerWidth:m,iconWidth:s}),y={tag:"rect",attributes:C(C({},no),{},{fill:"white"})},k=d.children?{children:d.children.map(Js)}:{},T={tag:"g",attributes:C({},h.inner),children:[Js(C({tag:d.tag,attributes:C(C({},d.attributes),h.path)},k))]},c={tag:"g",attributes:C({},h.outer),children:[T]},f="mask-".concat(l||Rr()),p="clip-".concat(l||Rr()),g={tag:"mask",attributes:C(C({},no),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,c]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:r0(v)},g]};return r.push(x,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(f,")")},no)}),{children:r,attributes:i}}}},a0={provides:function(t){var n=!1;It.matchMedia&&(n=It.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:C(C({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:C(C({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:C(C({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},o0={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},l0=[oh,Yh,Qh,Xh,Kh,e0,t0,n0,i0,a0,o0];kh(l0,{mixoutsTo:Le});Le.noAuto;Le.config;Le.library;Le.dom;var sl=Le.parse;Le.findIconDefinition;Le.toHtml;var u0=Le.icon;Le.layer;Le.text;Le.counter;var Wd={exports:{}},s0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",f0=s0,c0=f0;function Hd(){}function Bd(){}Bd.resetWarningCache=Hd;var d0=function(){function e(r,i,a,o,l,u){if(u!==c0){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Bd,resetWarningCache:Hd};return n.PropTypes=n,n};Wd.exports=d0();var p0=Wd.exports;const b=nf(p0);function qs(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qs(Object(n),!0).forEach(function(r){En(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qs(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function aa(e){"@babel/helpers - typeof";return aa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},aa(e)}function En(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function v0(e,t){if(e==null)return{};var n=m0(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function fl(e){return h0(e)||g0(e)||y0(e)||w0()}function h0(e){if(Array.isArray(e))return cl(e)}function g0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function y0(e,t){if(e){if(typeof e=="string")return cl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return cl(e,t)}}function cl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k0(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,l=e.flash,u=e.spin,s=e.spinPulse,d=e.spinReverse,m=e.pulse,v=e.fixedWidth,h=e.inverse,y=e.border,k=e.listItem,T=e.flip,c=e.size,f=e.rotation,p=e.pull,g=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":s,"fa-pulse":m,"fa-fw":v,"fa-inverse":h,"fa-border":y,"fa-li":k,"fa-flip":T===!0,"fa-flip-horizontal":T==="horizontal"||T==="both","fa-flip-vertical":T==="vertical"||T==="both"},En(t,"fa-".concat(c),typeof c<"u"&&c!==null),En(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),En(t,"fa-pull-".concat(p),typeof p<"u"&&p!==null),En(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(g).map(function(x){return g[x]?x:null}).filter(function(x){return x})}function x0(e){return e=e-0,e===e}function Yd(e){return x0(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var S0=["style"];function E0(e){return e.charAt(0).toUpperCase()+e.slice(1)}function C0(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Yd(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[E0(i)]=a:t[i]=a,t},{})}function Qd(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return Qd(e,u)}),i=Object.keys(t.attributes||{}).reduce(function(u,s){var d=t.attributes[s];switch(s){case"class":u.attrs.className=d,delete t.attributes.class;break;case"style":u.attrs.style=C0(d);break;default:s.indexOf("aria-")===0||s.indexOf("data-")===0?u.attrs[s.toLowerCase()]=d:u.attrs[Yd(s)]=d}return u},{attrs:{}}),a=n.style,o=a===void 0?{}:a,l=v0(n,S0);return i.attrs.style=Ke(Ke({},i.attrs.style),o),e.apply(void 0,[t.tag,Ke(Ke({},i.attrs),l)].concat(fl(r)))}var Xd=!1;try{Xd=!0}catch{}function P0(){if(!Xd&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function ef(e){if(e&&aa(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(sl.icon)return sl.icon(e);if(e===null)return null;if(e&&aa(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function ro(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?En({},e,t):{}}var tf={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ht=hl.forwardRef(function(e,t){var n=Ke(Ke({},tf),e),r=n.icon,i=n.mask,a=n.symbol,o=n.className,l=n.title,u=n.titleId,s=n.maskId,d=ef(r),m=ro("classes",[].concat(fl(k0(n)),fl((o||"").split(" ")))),v=ro("transform",typeof n.transform=="string"?sl.transform(n.transform):n.transform),h=ro("mask",ef(i)),y=u0(d,Ke(Ke(Ke(Ke({},m),v),h),{},{symbol:a,title:l,titleId:u,maskId:s}));if(!y)return P0("Could not find icon",d),null;var k=y.abstract,T={ref:t};return Object.keys(n).forEach(function(c){tf.hasOwnProperty(c)||(T[c]=n[c])}),_0(k[0],T)});Ht.displayName="FontAwesomeIcon";Ht.propTypes={beat:b.bool,border:b.bool,beatFade:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool};var _0=Qd.bind(null,hl.createElement);const N0=({videos:e,campaigns:t})=>{const[n,r]=ee.useState(null),i=o=>{r(o)},a=()=>{r(null)};return z.jsx(z.Fragment,{children:z.jsxs("div",{className:"outer-grid",children:[z.jsx("div",{class:"grid",children:e.map((o,l)=>z.jsxs("div",{onClick:()=>i(l),children:[z.jsx("div",{className:"video-grid",children:z.jsx("video",{src:o,loop:!0,muted:!0,autoPlay:!0,playsInline:!0,className:"vid"})}),z.jsxs("div",{className:"video-content",children:[z.jsx("p",{className:"txt",children:t[l].campaignName}),z.jsxs("p",{className:"txt",children:["From ",t[l].offerPrice.currency,t[l].offerPrice.price]})]})]},l))}),n!==null&&z.jsx(O0,{campaigns:t,currentIndex:n,onClose:a})]})})},O0=({campaigns:e,currentIndex:t,onClose:n})=>{const[r,i]=ee.useState(t),[a,o]=ee.useState(0),[l,u]=ee.useState({}),[s,d]=ee.useState(!1),[m,v]=ee.useState(!1),[h,y]=ee.useState(null),[k,T]=ee.useState(!1),c=ee.useRef([]),f=ee.useRef(null);ee.useRef(null),ee.useEffect(()=>{const U=new IntersectionObserver(M=>{M.forEach(we=>{const Wn=c.current.indexOf(we.target);we.isIntersecting?(we.target.play(),o(Wn)):we.target.pause()})},{threshold:.5});return o(0),c.current.forEach(M=>{M&&U.observe(M)}),()=>{c.current.forEach(M=>{M&&U.unobserve(M)})}},[r]),ee.useEffect(()=>{const U=c.current[a];U&&U.play()},[a]);const p=()=>{r!==null?r+1<e.length?(i(r+1),o(0)):(i(0),o(0)):e.length>0&&(i(0),o(0))},g=()=>{r!==null?r>0?(i(r-1),o(0)):(i(e.length-1),o(0)):e.length>0&&(i(e.length-1),o(0))},x=U=>{const M=c.current[U];M&&(M.paused?M.play():M.pause(),d(M.paused))},S=U=>{const M=c.current[U];M&&(M.muted=!M.muted,u(we=>({...we,[U]:M.muted})))},E=U=>{clearTimeout(f.current)},O=(U,M)=>{U===0&&(y(M.duration),j(M.duration))},j=U=>{clearTimeout(f.current),f.current=setTimeout(()=>{v(!0),setTimeout(()=>{v(!1)},1e4)},U*1e3)},L=U=>{clearTimeout(f.current),U===0&&h&&j(h)},Pe=()=>{clearTimeout(f.current)},Dt=()=>{T(!k)},mt=U=>{const M=U.split(`
`);return M.length>2?{truncated:M.slice(0,2).join(`
`),hasMore:!0}:{truncated:U,hasMore:!1}};return ee.useEffect(()=>{o(0)},[r]),z.jsxs("div",{className:"whole123",children:[z.jsx("div",{className:"prevbtn123",onClick:g,children:z.jsx(Ht,{icon:Tv})}),z.jsx("div",{className:"nextbtn123",onClick:p,children:z.jsx(Ht,{icon:xv})}),z.jsx("div",{className:"reelsContainer",children:e[r].videoId.map((U,M)=>z.jsxs("div",{className:"reel",children:[z.jsx("div",{className:"closediv123",children:z.jsx("button",{className:"closebtn123",onClick:n,children:z.jsx(Ht,{icon:Ov})})}),z.jsxs("div",{className:"video-container",children:[z.jsx("video",{ref:we=>c.current[M]=we,src:U,className:"ad",loop:!0,playsInline:!0,controls:!1,autoPlay:M===a,onClick:()=>x(M),onPause:()=>{Pe(),d(!0)},onPlay:()=>{L(M),d(!1)},onEnded:()=>E(),onLoadedMetadata:we=>O(M,we.target)}),s&&z.jsx(Ht,{icon:Cv,onClick:()=>x(M),className:"play-button123"}),z.jsxs("div",{className:"bookdiv123",children:[z.jsx("div",{className:"img1",children:z.jsx("img",{className:"img",src:e[r].campaignPhoto,alt:"Campaign"})}),z.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[z.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[r].campaignName}),z.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[k?e[r].campaignDetails:mt(e[r].campaignDetails).truncated,mt(e[r].campaignDetails).hasMore&&z.jsx("div",{children:z.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:Dt,children:k?" View Less":" View More"})})]}),z.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[r].offerPrice.currency,e[r].offerPrice.price]})]}),z.jsx("div",{className:"divbtn",children:z.jsx("a",{href:e[r].hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]}),z.jsx("div",{className:"functions",children:z.jsx(Ht,{icon:l[M]?_v:Ev,className:"volume123",onClick:()=>S(M),style:{cursor:"pointer"}})})]},M))})]})},T0=()=>{const[e,t]=ee.useState([]),[n,r]=ee.useState([]);return ee.useEffect(()=>{(async o=>{try{const u=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${o}`)).json(),s=u.campaigns.map(d=>d.videoId[0]);t(s),r(u.campaigns)}catch(l){console.error("Error fetching data:",l)}})("24c5e580-0291-1fb8-b7ef-97cd6d3971a2")},[]),z.jsxs("div",{className:"App",children:[z.jsx("style",{children:`
      .outer-grid {
  align-items: center;
}
.grid {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  min-height: 33vh;
}

.grid > div {
  font-size: 20px;
  /* padding: 1rem; */
  color: yellow;
  text-align: center;
  /* background: red; */
  width: 16em;
  height: 27em;
  position: relative;
}
.vid {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 3vh;
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


`}),z.jsx(N0,{videos:e,campaigns:n})]})};io.createRoot(document.getElementById("root")).render(z.jsx(hl.StrictMode,{children:z.jsx(T0,{})}));
