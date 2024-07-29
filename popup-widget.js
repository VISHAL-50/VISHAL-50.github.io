(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function tf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nf={exports:{}},ra={},rf={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ir=Symbol.for("react.element"),Kd=Symbol.for("react.portal"),Gd=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),Jd=Symbol.for("react.profiler"),qd=Symbol.for("react.provider"),ep=Symbol.for("react.context"),tp=Symbol.for("react.forward_ref"),np=Symbol.for("react.suspense"),rp=Symbol.for("react.memo"),ip=Symbol.for("react.lazy"),wu=Symbol.iterator;function ap(e){return e===null||typeof e!="object"?null:(e=wu&&e[wu]||e["@@iterator"],typeof e=="function"?e:null)}var af={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},of=Object.assign,lf={};function jn(e,t,n){this.props=e,this.context=t,this.refs=lf,this.updater=n||af}jn.prototype.isReactComponent={};jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function uf(){}uf.prototype=jn.prototype;function cl(e,t,n){this.props=e,this.context=t,this.refs=lf,this.updater=n||af}var dl=cl.prototype=new uf;dl.constructor=cl;of(dl,jn.prototype);dl.isPureReactComponent=!0;var ku=Array.isArray,sf=Object.prototype.hasOwnProperty,pl={current:null},ff={key:!0,ref:!0,__self:!0,__source:!0};function cf(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)sf.call(t,r)&&!ff.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ir,type:e,key:a,ref:o,props:i,_owner:pl.current}}function op(e,t){return{$$typeof:Ir,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ml(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ir}function lp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xu=/\/+/g;function _a(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lp(""+e.key):t.toString(36)}function vi(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ir:case Kd:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+_a(o,0):r,ku(i)?(n="",e!=null&&(n=e.replace(xu,"$&/")+"/"),vi(i,t,n,"",function(s){return s})):i!=null&&(ml(i)&&(i=op(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",ku(e))for(var l=0;l<e.length;l++){a=e[l];var u=r+_a(a,l);o+=vi(a,t,n,u,i)}else if(u=ap(e),typeof u=="function")for(e=u.call(e),l=0;!(a=e.next()).done;)a=a.value,u=r+_a(a,l++),o+=vi(a,t,n,u,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Wr(e,t,n){if(e==null)return e;var r=[],i=0;return vi(e,r,"","",function(a){return t.call(n,a,i++)}),r}function up(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},hi={transition:null},sp={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:hi,ReactCurrentOwner:pl};function df(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Wr,forEach:function(e,t,n){Wr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wr(e,function(){t++}),t},toArray:function(e){return Wr(e,function(t){return t})||[]},only:function(e){if(!ml(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=jn;R.Fragment=Gd;R.Profiler=Jd;R.PureComponent=cl;R.StrictMode=Zd;R.Suspense=np;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sp;R.act=df;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=of({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=pl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)sf.call(t,u)&&!ff.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var s=0;s<u;s++)l[s]=arguments[s+2];r.children=l}return{$$typeof:Ir,type:e.type,key:i,ref:a,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:ep,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qd,_context:e},e.Consumer=e};R.createElement=cf;R.createFactory=function(e){var t=cf.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:tp,render:e}};R.isValidElement=ml;R.lazy=function(e){return{$$typeof:ip,_payload:{_status:-1,_result:e},_init:up}};R.memo=function(e,t){return{$$typeof:rp,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=hi.transition;hi.transition={};try{e()}finally{hi.transition=t}};R.unstable_act=df;R.useCallback=function(e,t){return ge.current.useCallback(e,t)};R.useContext=function(e){return ge.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};R.useEffect=function(e,t){return ge.current.useEffect(e,t)};R.useId=function(){return ge.current.useId()};R.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ge.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};R.useRef=function(e){return ge.current.useRef(e)};R.useState=function(e){return ge.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ge.current.useTransition()};R.version="18.3.1";rf.exports=R;var ae=rf.exports;const vl=tf(ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp=ae,cp=Symbol.for("react.element"),dp=Symbol.for("react.fragment"),pp=Object.prototype.hasOwnProperty,mp=fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vp={key:!0,ref:!0,__self:!0,__source:!0};function pf(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)pp.call(t,r)&&!vp.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:cp,type:e,key:a,ref:o,props:i,_owner:mp.current}}ra.Fragment=dp;ra.jsx=pf;ra.jsxs=pf;nf.exports=ra;var b=nf.exports,ro={},mf={exports:{}},Oe={},vf={exports:{}},hf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,A){var I=_.length;_.push(A);e:for(;0<I;){var J=I-1>>>1,ie=_[J];if(0<i(ie,A))_[J]=A,_[I]=ie,I=J;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var A=_[0],I=_.pop();if(I!==A){_[0]=I;e:for(var J=0,ie=_.length,Ur=ie>>>1;J<Ur;){var jt=2*(J+1)-1,Pa=_[jt],Ft=jt+1,Vr=_[Ft];if(0>i(Pa,I))Ft<ie&&0>i(Vr,Pa)?(_[J]=Vr,_[Ft]=I,J=Ft):(_[J]=Pa,_[jt]=I,J=jt);else if(Ft<ie&&0>i(Vr,I))_[J]=Vr,_[Ft]=I,J=Ft;else break e}}return A}function i(_,A){var I=_.sortIndex-A.sortIndex;return I!==0?I:_.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var u=[],s=[],d=1,m=null,v=3,h=!1,y=!1,k=!1,T=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(_){for(var A=n(s);A!==null;){if(A.callback===null)r(s);else if(A.startTime<=_)r(s),A.sortIndex=A.expirationTime,t(u,A);else break;A=n(s)}}function g(_){if(k=!1,p(_),!y)if(n(u)!==null)y=!0,Ea(x);else{var A=n(s);A!==null&&Ca(g,A.startTime-_)}}function x(_,A){y=!1,k&&(k=!1,c(O),O=-1),h=!0;var I=v;try{for(p(A),m=n(u);m!==null&&(!(m.expirationTime>A)||_&&!z());){var J=m.callback;if(typeof J=="function"){m.callback=null,v=m.priorityLevel;var ie=J(m.expirationTime<=A);A=e.unstable_now(),typeof ie=="function"?m.callback=ie:m===n(u)&&r(u),p(A)}else r(u);m=n(u)}if(m!==null)var Ur=!0;else{var jt=n(s);jt!==null&&Ca(g,jt.startTime-A),Ur=!1}return Ur}finally{m=null,v=I,h=!1}}var S=!1,E=null,O=-1,F=5,L=-1;function z(){return!(e.unstable_now()-L<F)}function $(){if(E!==null){var _=e.unstable_now();L=_;var A=!0;try{A=E(!0,_)}finally{A?dt():(S=!1,E=null)}}else S=!1}var dt;if(typeof f=="function")dt=function(){f($)};else if(typeof MessageChannel<"u"){var an=new MessageChannel,Xd=an.port2;an.port1.onmessage=$,dt=function(){Xd.postMessage(null)}}else dt=function(){T($,0)};function Ea(_){E=_,S||(S=!0,dt())}function Ca(_,A){O=T(function(){_(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,Ea(x))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(v){case 1:case 2:case 3:var A=3;break;default:A=v}var I=v;v=A;try{return _()}finally{v=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,A){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var I=v;v=_;try{return A()}finally{v=I}},e.unstable_scheduleCallback=function(_,A,I){var J=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?J+I:J):I=J,_){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=I+ie,_={id:d++,callback:A,priorityLevel:_,startTime:I,expirationTime:ie,sortIndex:-1},I>J?(_.sortIndex=I,t(s,_),n(u)===null&&_===n(s)&&(k?(c(O),O=-1):k=!0,Ca(g,I-J))):(_.sortIndex=ie,t(u,_),y||h||(y=!0,Ea(x))),_},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(_){var A=v;return function(){var I=v;v=A;try{return _.apply(this,arguments)}finally{v=I}}}})(hf);vf.exports=hf;var hp=vf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp=ae,Ne=hp;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gf=new Set,cr={};function nn(e,t){Tn(e,t),Tn(e+"Capture",t)}function Tn(e,t){for(cr[e]=t,e=0;e<t.length;e++)gf.add(t[e])}var rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),io=Object.prototype.hasOwnProperty,yp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Su={},Eu={};function wp(e){return io.call(Eu,e)?!0:io.call(Su,e)?!1:yp.test(e)?Eu[e]=!0:(Su[e]=!0,!1)}function kp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xp(e,t,n,r){if(t===null||typeof t>"u"||kp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ye(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var hl=/[\-:]([a-z])/g;function gl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(hl,gl);fe[t]=new ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(hl,gl);fe[t]=new ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(hl,gl);fe[t]=new ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new ye(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function yl(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xp(t,n,i,r)&&(n=null),r||i===null?wp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ft=gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hr=Symbol.for("react.element"),ln=Symbol.for("react.portal"),un=Symbol.for("react.fragment"),wl=Symbol.for("react.strict_mode"),ao=Symbol.for("react.profiler"),yf=Symbol.for("react.provider"),wf=Symbol.for("react.context"),kl=Symbol.for("react.forward_ref"),oo=Symbol.for("react.suspense"),lo=Symbol.for("react.suspense_list"),xl=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),kf=Symbol.for("react.offscreen"),Cu=Symbol.iterator;function Un(e){return e===null||typeof e!="object"?null:(e=Cu&&e[Cu]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Na;function Kn(e){if(Na===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Na=t&&t[1]||""}return`
`+Na+e}var Oa=!1;function Ta(e,t){if(!e||Oa)return"";Oa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=l);break}}}finally{Oa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Kn(e):""}function Sp(e){switch(e.tag){case 5:return Kn(e.type);case 16:return Kn("Lazy");case 13:return Kn("Suspense");case 19:return Kn("SuspenseList");case 0:case 2:case 15:return e=Ta(e.type,!1),e;case 11:return e=Ta(e.type.render,!1),e;case 1:return e=Ta(e.type,!0),e;default:return""}}function uo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case un:return"Fragment";case ln:return"Portal";case ao:return"Profiler";case wl:return"StrictMode";case oo:return"Suspense";case lo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wf:return(e.displayName||"Context")+".Consumer";case yf:return(e._context.displayName||"Context")+".Provider";case kl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xl:return t=e.displayName||null,t!==null?t:uo(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return uo(e(t))}catch{}}return null}function Ep(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uo(t);case 8:return t===wl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cp(e){var t=xf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Br(e){e._valueTracker||(e._valueTracker=Cp(e))}function Sf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ti(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function so(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Pu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ef(e,t){t=t.checked,t!=null&&yl(e,"checked",t,!1)}function fo(e,t){Ef(e,t);var n=Tt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?co(e,t.type,n):t.hasOwnProperty("defaultValue")&&co(e,t.type,Tt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _u(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function co(e,t,n){(t!=="number"||Ti(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Gn=Array.isArray;function Sn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function po(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Nu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Gn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tt(n)}}function Cf(e,t){var n=Tt(t.value),r=Tt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ou(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Yr,_f=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function dr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pp=["Webkit","ms","Moz","O"];Object.keys(er).forEach(function(e){Pp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),er[t]=er[e]})});function Nf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||er.hasOwnProperty(e)&&er[e]?(""+t).trim():t+"px"}function Of(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Nf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var _p=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vo(e,t){if(t){if(_p[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function ho(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var go=null;function Sl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yo=null,En=null,Cn=null;function Tu(e){if(e=Rr(e)){if(typeof yo!="function")throw Error(w(280));var t=e.stateNode;t&&(t=ua(t),yo(e.stateNode,e.type,t))}}function Tf(e){En?Cn?Cn.push(e):Cn=[e]:En=e}function zf(){if(En){var e=En,t=Cn;if(Cn=En=null,Tu(e),t)for(e=0;e<t.length;e++)Tu(t[e])}}function Af(e,t){return e(t)}function Lf(){}var za=!1;function If(e,t,n){if(za)return e(t,n);za=!0;try{return Af(e,t,n)}finally{za=!1,(En!==null||Cn!==null)&&(Lf(),zf())}}function pr(e,t){var n=e.stateNode;if(n===null)return null;var r=ua(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var wo=!1;if(rt)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){wo=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{wo=!1}function Np(e,t,n,r,i,a,o,l,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(d){this.onError(d)}}var tr=!1,zi=null,Ai=!1,ko=null,Op={onError:function(e){tr=!0,zi=e}};function Tp(e,t,n,r,i,a,o,l,u){tr=!1,zi=null,Np.apply(Op,arguments)}function zp(e,t,n,r,i,a,o,l,u){if(Tp.apply(this,arguments),tr){if(tr){var s=zi;tr=!1,zi=null}else throw Error(w(198));Ai||(Ai=!0,ko=s)}}function rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zu(e){if(rn(e)!==e)throw Error(w(188))}function Ap(e){var t=e.alternate;if(!t){if(t=rn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return zu(i),e;if(a===r)return zu(i),t;a=a.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Mf(e){return e=Ap(e),e!==null?Rf(e):null}function Rf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rf(e);if(t!==null)return t;e=e.sibling}return null}var jf=Ne.unstable_scheduleCallback,Au=Ne.unstable_cancelCallback,Lp=Ne.unstable_shouldYield,Ip=Ne.unstable_requestPaint,q=Ne.unstable_now,bp=Ne.unstable_getCurrentPriorityLevel,El=Ne.unstable_ImmediatePriority,Ff=Ne.unstable_UserBlockingPriority,Li=Ne.unstable_NormalPriority,Mp=Ne.unstable_LowPriority,Df=Ne.unstable_IdlePriority,ia=null,Ge=null;function Rp(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(ia,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:Dp,jp=Math.log,Fp=Math.LN2;function Dp(e){return e>>>=0,e===0?32:31-(jp(e)/Fp|0)|0}var Qr=64,Xr=4194304;function Zn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ii(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Zn(l):(a&=o,a!==0&&(r=Zn(a)))}else o=n&~i,o!==0?r=Zn(o):a!==0&&(r=Zn(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),i=1<<n,r|=e[n],t&=~i;return r}function $p(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Up(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ve(a),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=$p(l,t)):u<=t&&(e.expiredLanes|=l),a&=~l}}function xo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $f(){var e=Qr;return Qr<<=1,!(Qr&4194240)&&(Qr=64),e}function Aa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function Vp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ve(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Cl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function Uf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vf,Pl,Wf,Hf,Bf,So=!1,Kr=[],xt=null,St=null,Et=null,mr=new Map,vr=new Map,gt=[],Wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lu(e,t){switch(e){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":St=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vr.delete(t.pointerId)}}function Wn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Rr(t),t!==null&&Pl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Hp(e,t,n,r,i){switch(t){case"focusin":return xt=Wn(xt,e,t,n,r,i),!0;case"dragenter":return St=Wn(St,e,t,n,r,i),!0;case"mouseover":return Et=Wn(Et,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return mr.set(a,Wn(mr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,vr.set(a,Wn(vr.get(a)||null,e,t,n,r,i)),!0}return!1}function Yf(e){var t=Vt(e.target);if(t!==null){var n=rn(t);if(n!==null){if(t=n.tag,t===13){if(t=bf(n),t!==null){e.blockedOn=t,Bf(e.priority,function(){Wf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Eo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);go=r,n.target.dispatchEvent(r),go=null}else return t=Rr(n),t!==null&&Pl(t),e.blockedOn=n,!1;t.shift()}return!0}function Iu(e,t,n){gi(e)&&n.delete(t)}function Bp(){So=!1,xt!==null&&gi(xt)&&(xt=null),St!==null&&gi(St)&&(St=null),Et!==null&&gi(Et)&&(Et=null),mr.forEach(Iu),vr.forEach(Iu)}function Hn(e,t){e.blockedOn===t&&(e.blockedOn=null,So||(So=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Bp)))}function hr(e){function t(i){return Hn(i,e)}if(0<Kr.length){Hn(Kr[0],e);for(var n=1;n<Kr.length;n++){var r=Kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xt!==null&&Hn(xt,e),St!==null&&Hn(St,e),Et!==null&&Hn(Et,e),mr.forEach(t),vr.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)Yf(n),n.blockedOn===null&&gt.shift()}var Pn=ft.ReactCurrentBatchConfig,bi=!0;function Yp(e,t,n,r){var i=D,a=Pn.transition;Pn.transition=null;try{D=1,_l(e,t,n,r)}finally{D=i,Pn.transition=a}}function Qp(e,t,n,r){var i=D,a=Pn.transition;Pn.transition=null;try{D=4,_l(e,t,n,r)}finally{D=i,Pn.transition=a}}function _l(e,t,n,r){if(bi){var i=Eo(e,t,n,r);if(i===null)Ua(e,t,r,Mi,n),Lu(e,r);else if(Hp(i,e,t,n,r))r.stopPropagation();else if(Lu(e,r),t&4&&-1<Wp.indexOf(e)){for(;i!==null;){var a=Rr(i);if(a!==null&&Vf(a),a=Eo(e,t,n,r),a===null&&Ua(e,t,r,Mi,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ua(e,t,r,null,n)}}var Mi=null;function Eo(e,t,n,r){if(Mi=null,e=Sl(r),e=Vt(e),e!==null)if(t=rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mi=e,null}function Qf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bp()){case El:return 1;case Ff:return 4;case Li:case Mp:return 16;case Df:return 536870912;default:return 16}default:return 16}}var wt=null,Nl=null,yi=null;function Xf(){if(yi)return yi;var e,t=Nl,n=t.length,r,i="value"in wt?wt.value:wt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return yi=i.slice(e,1<r?1-r:void 0)}function wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gr(){return!0}function bu(){return!1}function Te(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Gr:bu,this.isPropagationStopped=bu,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gr)},persist:function(){},isPersistent:Gr}),t}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Te(Fn),Mr=K({},Fn,{view:0,detail:0}),Xp=Te(Mr),La,Ia,Bn,aa=K({},Mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(La=e.screenX-Bn.screenX,Ia=e.screenY-Bn.screenY):Ia=La=0,Bn=e),La)},movementY:function(e){return"movementY"in e?e.movementY:Ia}}),Mu=Te(aa),Kp=K({},aa,{dataTransfer:0}),Gp=Te(Kp),Zp=K({},Mr,{relatedTarget:0}),ba=Te(Zp),Jp=K({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),qp=Te(Jp),em=K({},Fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tm=Te(em),nm=K({},Fn,{data:0}),Ru=Te(nm),rm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},im={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function om(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=am[e])?!!t[e]:!1}function Tl(){return om}var lm=K({},Mr,{key:function(e){if(e.key){var t=rm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?im[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tl,charCode:function(e){return e.type==="keypress"?wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),um=Te(lm),sm=K({},aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ju=Te(sm),fm=K({},Mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tl}),cm=Te(fm),dm=K({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),pm=Te(dm),mm=K({},aa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vm=Te(mm),hm=[9,13,27,32],zl=rt&&"CompositionEvent"in window,nr=null;rt&&"documentMode"in document&&(nr=document.documentMode);var gm=rt&&"TextEvent"in window&&!nr,Kf=rt&&(!zl||nr&&8<nr&&11>=nr),Fu=" ",Du=!1;function Gf(e,t){switch(e){case"keyup":return hm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sn=!1;function ym(e,t){switch(e){case"compositionend":return Zf(t);case"keypress":return t.which!==32?null:(Du=!0,Fu);case"textInput":return e=t.data,e===Fu&&Du?null:e;default:return null}}function wm(e,t){if(sn)return e==="compositionend"||!zl&&Gf(e,t)?(e=Xf(),yi=Nl=wt=null,sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kf&&t.locale!=="ko"?null:t.data;default:return null}}var km={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!km[e.type]:t==="textarea"}function Jf(e,t,n,r){Tf(r),t=Ri(t,"onChange"),0<t.length&&(n=new Ol("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var rr=null,gr=null;function xm(e){sc(e,0)}function oa(e){var t=dn(e);if(Sf(t))return e}function Sm(e,t){if(e==="change")return t}var qf=!1;if(rt){var Ma;if(rt){var Ra="oninput"in document;if(!Ra){var Uu=document.createElement("div");Uu.setAttribute("oninput","return;"),Ra=typeof Uu.oninput=="function"}Ma=Ra}else Ma=!1;qf=Ma&&(!document.documentMode||9<document.documentMode)}function Vu(){rr&&(rr.detachEvent("onpropertychange",ec),gr=rr=null)}function ec(e){if(e.propertyName==="value"&&oa(gr)){var t=[];Jf(t,gr,e,Sl(e)),If(xm,t)}}function Em(e,t,n){e==="focusin"?(Vu(),rr=t,gr=n,rr.attachEvent("onpropertychange",ec)):e==="focusout"&&Vu()}function Cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oa(gr)}function Pm(e,t){if(e==="click")return oa(t)}function _m(e,t){if(e==="input"||e==="change")return oa(t)}function Nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:Nm;function yr(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!io.call(t,i)||!He(e[i],t[i]))return!1}return!0}function Wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hu(e,t){var n=Wu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wu(n)}}function tc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nc(){for(var e=window,t=Ti();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ti(e.document)}return t}function Al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Om(e){var t=nc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tc(n.ownerDocument.documentElement,n)){if(r!==null&&Al(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Hu(n,a);var o=Hu(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tm=rt&&"documentMode"in document&&11>=document.documentMode,fn=null,Co=null,ir=null,Po=!1;function Bu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Po||fn==null||fn!==Ti(r)||(r=fn,"selectionStart"in r&&Al(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ir&&yr(ir,r)||(ir=r,r=Ri(Co,"onSelect"),0<r.length&&(t=new Ol("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fn)))}function Zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cn={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionend:Zr("Transition","TransitionEnd")},ja={},rc={};rt&&(rc=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.transition);function la(e){if(ja[e])return ja[e];if(!cn[e])return e;var t=cn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rc)return ja[e]=t[n];return e}var ic=la("animationend"),ac=la("animationiteration"),oc=la("animationstart"),lc=la("transitionend"),uc=new Map,Yu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){uc.set(e,t),nn(t,[e])}for(var Fa=0;Fa<Yu.length;Fa++){var Da=Yu[Fa],zm=Da.toLowerCase(),Am=Da[0].toUpperCase()+Da.slice(1);bt(zm,"on"+Am)}bt(ic,"onAnimationEnd");bt(ac,"onAnimationIteration");bt(oc,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(lc,"onTransitionEnd");Tn("onMouseEnter",["mouseout","mouseover"]);Tn("onMouseLeave",["mouseout","mouseover"]);Tn("onPointerEnter",["pointerout","pointerover"]);Tn("onPointerLeave",["pointerout","pointerover"]);nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));function Qu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zp(r,t,void 0,e),e.currentTarget=null}function sc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,s=l.currentTarget;if(l=l.listener,u!==a&&i.isPropagationStopped())break e;Qu(i,l,s),a=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,s=l.currentTarget,l=l.listener,u!==a&&i.isPropagationStopped())break e;Qu(i,l,s),a=u}}}if(Ai)throw e=ko,Ai=!1,ko=null,e}function V(e,t){var n=t[zo];n===void 0&&(n=t[zo]=new Set);var r=e+"__bubble";n.has(r)||(fc(t,e,2,!1),n.add(r))}function $a(e,t,n){var r=0;t&&(r|=4),fc(n,e,r,t)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function wr(e){if(!e[Jr]){e[Jr]=!0,gf.forEach(function(n){n!=="selectionchange"&&(Lm.has(n)||$a(n,!1,e),$a(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Jr]||(t[Jr]=!0,$a("selectionchange",!1,t))}}function fc(e,t,n,r){switch(Qf(t)){case 1:var i=Yp;break;case 4:i=Qp;break;default:i=_l}n=i.bind(null,t,n,e),i=void 0,!wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ua(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Vt(l),o===null)return;if(u=o.tag,u===5||u===6){r=a=o;continue e}l=l.parentNode}}r=r.return}If(function(){var s=a,d=Sl(n),m=[];e:{var v=uc.get(e);if(v!==void 0){var h=Ol,y=e;switch(e){case"keypress":if(wi(n)===0)break e;case"keydown":case"keyup":h=um;break;case"focusin":y="focus",h=ba;break;case"focusout":y="blur",h=ba;break;case"beforeblur":case"afterblur":h=ba;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=cm;break;case ic:case ac:case oc:h=qp;break;case lc:h=pm;break;case"scroll":h=Xp;break;case"wheel":h=vm;break;case"copy":case"cut":case"paste":h=tm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ju}var k=(t&4)!==0,T=!k&&e==="scroll",c=k?v!==null?v+"Capture":null:v;k=[];for(var f=s,p;f!==null;){p=f;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,c!==null&&(g=pr(f,c),g!=null&&k.push(kr(f,g,p)))),T)break;f=f.return}0<k.length&&(v=new h(v,y,null,n,d),m.push({event:v,listeners:k}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",v&&n!==go&&(y=n.relatedTarget||n.fromElement)&&(Vt(y)||y[it]))break e;if((h||v)&&(v=d.window===d?d:(v=d.ownerDocument)?v.defaultView||v.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=s,y=y?Vt(y):null,y!==null&&(T=rn(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=s),h!==y)){if(k=Mu,g="onMouseLeave",c="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(k=ju,g="onPointerLeave",c="onPointerEnter",f="pointer"),T=h==null?v:dn(h),p=y==null?v:dn(y),v=new k(g,f+"leave",h,n,d),v.target=T,v.relatedTarget=p,g=null,Vt(d)===s&&(k=new k(c,f+"enter",y,n,d),k.target=p,k.relatedTarget=T,g=k),T=g,h&&y)t:{for(k=h,c=y,f=0,p=k;p;p=on(p))f++;for(p=0,g=c;g;g=on(g))p++;for(;0<f-p;)k=on(k),f--;for(;0<p-f;)c=on(c),p--;for(;f--;){if(k===c||c!==null&&k===c.alternate)break t;k=on(k),c=on(c)}k=null}else k=null;h!==null&&Xu(m,v,h,k,!1),y!==null&&T!==null&&Xu(m,T,y,k,!0)}}e:{if(v=s?dn(s):window,h=v.nodeName&&v.nodeName.toLowerCase(),h==="select"||h==="input"&&v.type==="file")var x=Sm;else if($u(v))if(qf)x=_m;else{x=Cm;var S=Em}else(h=v.nodeName)&&h.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(x=Pm);if(x&&(x=x(e,s))){Jf(m,x,n,d);break e}S&&S(e,v,s),e==="focusout"&&(S=v._wrapperState)&&S.controlled&&v.type==="number"&&co(v,"number",v.value)}switch(S=s?dn(s):window,e){case"focusin":($u(S)||S.contentEditable==="true")&&(fn=S,Co=s,ir=null);break;case"focusout":ir=Co=fn=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,Bu(m,n,d);break;case"selectionchange":if(Tm)break;case"keydown":case"keyup":Bu(m,n,d)}var E;if(zl)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else sn?Gf(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Kf&&n.locale!=="ko"&&(sn||O!=="onCompositionStart"?O==="onCompositionEnd"&&sn&&(E=Xf()):(wt=d,Nl="value"in wt?wt.value:wt.textContent,sn=!0)),S=Ri(s,O),0<S.length&&(O=new Ru(O,e,null,n,d),m.push({event:O,listeners:S}),E?O.data=E:(E=Zf(n),E!==null&&(O.data=E)))),(E=gm?ym(e,n):wm(e,n))&&(s=Ri(s,"onBeforeInput"),0<s.length&&(d=new Ru("onBeforeInput","beforeinput",null,n,d),m.push({event:d,listeners:s}),d.data=E))}sc(m,t)})}function kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ri(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=pr(e,n),a!=null&&r.unshift(kr(e,a,i)),a=pr(e,t),a!=null&&r.push(kr(e,a,i))),e=e.return}return r}function on(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xu(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,s=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&s!==null&&(l=s,i?(u=pr(n,a),u!=null&&o.unshift(kr(n,u,l))):i||(u=pr(n,a),u!=null&&o.push(kr(n,u,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Im=/\r\n?/g,bm=/\u0000|\uFFFD/g;function Ku(e){return(typeof e=="string"?e:""+e).replace(Im,`
`).replace(bm,"")}function qr(e,t,n){if(t=Ku(t),Ku(e)!==t&&n)throw Error(w(425))}function ji(){}var _o=null,No=null;function Oo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var To=typeof setTimeout=="function"?setTimeout:void 0,Mm=typeof clearTimeout=="function"?clearTimeout:void 0,Gu=typeof Promise=="function"?Promise:void 0,Rm=typeof queueMicrotask=="function"?queueMicrotask:typeof Gu<"u"?function(e){return Gu.resolve(null).then(e).catch(jm)}:To;function jm(e){setTimeout(function(){throw e})}function Va(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),hr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);hr(t)}function Ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Dn=Math.random().toString(36).slice(2),Xe="__reactFiber$"+Dn,xr="__reactProps$"+Dn,it="__reactContainer$"+Dn,zo="__reactEvents$"+Dn,Fm="__reactListeners$"+Dn,Dm="__reactHandles$"+Dn;function Vt(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[it]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zu(e);e!==null;){if(n=e[Xe])return n;e=Zu(e)}return t}e=n,n=e.parentNode}return null}function Rr(e){return e=e[Xe]||e[it],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ua(e){return e[xr]||null}var Ao=[],pn=-1;function Mt(e){return{current:e}}function H(e){0>pn||(e.current=Ao[pn],Ao[pn]=null,pn--)}function U(e,t){pn++,Ao[pn]=e.current,e.current=t}var zt={},me=Mt(zt),xe=Mt(!1),Kt=zt;function zn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Se(e){return e=e.childContextTypes,e!=null}function Fi(){H(xe),H(me)}function Ju(e,t,n){if(me.current!==zt)throw Error(w(168));U(me,t),U(xe,n)}function cc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(w(108,Ep(e)||"Unknown",i));return K({},n,r)}function Di(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,Kt=me.current,U(me,e),U(xe,xe.current),!0}function qu(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=cc(e,t,Kt),r.__reactInternalMemoizedMergedChildContext=e,H(xe),H(me),U(me,e)):H(xe),U(xe,n)}var qe=null,sa=!1,Wa=!1;function dc(e){qe===null?qe=[e]:qe.push(e)}function $m(e){sa=!0,dc(e)}function Rt(){if(!Wa&&qe!==null){Wa=!0;var e=0,t=D;try{var n=qe;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qe=null,sa=!1}catch(i){throw qe!==null&&(qe=qe.slice(e+1)),jf(El,Rt),i}finally{D=t,Wa=!1}}return null}var mn=[],vn=0,$i=null,Ui=0,Ae=[],Le=0,Gt=null,et=1,tt="";function Dt(e,t){mn[vn++]=Ui,mn[vn++]=$i,$i=e,Ui=t}function pc(e,t,n){Ae[Le++]=et,Ae[Le++]=tt,Ae[Le++]=Gt,Gt=e;var r=et;e=tt;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var a=32-Ve(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,et=1<<32-Ve(t)+i|n<<i|r,tt=a+e}else et=1<<a|n<<i|r,tt=e}function Ll(e){e.return!==null&&(Dt(e,1),pc(e,1,0))}function Il(e){for(;e===$i;)$i=mn[--vn],mn[vn]=null,Ui=mn[--vn],mn[vn]=null;for(;e===Gt;)Gt=Ae[--Le],Ae[Le]=null,tt=Ae[--Le],Ae[Le]=null,et=Ae[--Le],Ae[Le]=null}var _e=null,Pe=null,Y=!1,$e=null;function mc(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function es(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,Pe=Ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gt!==null?{id:et,overflow:tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ie(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,Pe=null,!0):!1;default:return!1}}function Lo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Io(e){if(Y){var t=Pe;if(t){var n=t;if(!es(e,t)){if(Lo(e))throw Error(w(418));t=Ct(n.nextSibling);var r=_e;t&&es(e,t)?mc(r,n):(e.flags=e.flags&-4097|2,Y=!1,_e=e)}}else{if(Lo(e))throw Error(w(418));e.flags=e.flags&-4097|2,Y=!1,_e=e}}}function ts(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function ei(e){if(e!==_e)return!1;if(!Y)return ts(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oo(e.type,e.memoizedProps)),t&&(t=Pe)){if(Lo(e))throw vc(),Error(w(418));for(;t;)mc(e,t),t=Ct(t.nextSibling)}if(ts(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=_e?Ct(e.stateNode.nextSibling):null;return!0}function vc(){for(var e=Pe;e;)e=Ct(e.nextSibling)}function An(){Pe=_e=null,Y=!1}function bl(e){$e===null?$e=[e]:$e.push(e)}var Um=ft.ReactCurrentBatchConfig;function Yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var l=i.refs;o===null?delete l[a]:l[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function ti(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ns(e){var t=e._init;return t(e._payload)}function hc(e){function t(c,f){if(e){var p=c.deletions;p===null?(c.deletions=[f],c.flags|=16):p.push(f)}}function n(c,f){if(!e)return null;for(;f!==null;)t(c,f),f=f.sibling;return null}function r(c,f){for(c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function i(c,f){return c=Ot(c,f),c.index=0,c.sibling=null,c}function a(c,f,p){return c.index=p,e?(p=c.alternate,p!==null?(p=p.index,p<f?(c.flags|=2,f):p):(c.flags|=2,f)):(c.flags|=1048576,f)}function o(c){return e&&c.alternate===null&&(c.flags|=2),c}function l(c,f,p,g){return f===null||f.tag!==6?(f=Ga(p,c.mode,g),f.return=c,f):(f=i(f,p),f.return=c,f)}function u(c,f,p,g){var x=p.type;return x===un?d(c,f,p.props.children,g,p.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===vt&&ns(x)===f.type)?(g=i(f,p.props),g.ref=Yn(c,f,p),g.return=c,g):(g=_i(p.type,p.key,p.props,null,c.mode,g),g.ref=Yn(c,f,p),g.return=c,g)}function s(c,f,p,g){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=Za(p,c.mode,g),f.return=c,f):(f=i(f,p.children||[]),f.return=c,f)}function d(c,f,p,g,x){return f===null||f.tag!==7?(f=Xt(p,c.mode,g,x),f.return=c,f):(f=i(f,p),f.return=c,f)}function m(c,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ga(""+f,c.mode,p),f.return=c,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Hr:return p=_i(f.type,f.key,f.props,null,c.mode,p),p.ref=Yn(c,null,f),p.return=c,p;case ln:return f=Za(f,c.mode,p),f.return=c,f;case vt:var g=f._init;return m(c,g(f._payload),p)}if(Gn(f)||Un(f))return f=Xt(f,c.mode,p,null),f.return=c,f;ti(c,f)}return null}function v(c,f,p,g){var x=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return x!==null?null:l(c,f,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Hr:return p.key===x?u(c,f,p,g):null;case ln:return p.key===x?s(c,f,p,g):null;case vt:return x=p._init,v(c,f,x(p._payload),g)}if(Gn(p)||Un(p))return x!==null?null:d(c,f,p,g,null);ti(c,p)}return null}function h(c,f,p,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return c=c.get(p)||null,l(f,c,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Hr:return c=c.get(g.key===null?p:g.key)||null,u(f,c,g,x);case ln:return c=c.get(g.key===null?p:g.key)||null,s(f,c,g,x);case vt:var S=g._init;return h(c,f,p,S(g._payload),x)}if(Gn(g)||Un(g))return c=c.get(p)||null,d(f,c,g,x,null);ti(f,g)}return null}function y(c,f,p,g){for(var x=null,S=null,E=f,O=f=0,F=null;E!==null&&O<p.length;O++){E.index>O?(F=E,E=null):F=E.sibling;var L=v(c,E,p[O],g);if(L===null){E===null&&(E=F);break}e&&E&&L.alternate===null&&t(c,E),f=a(L,f,O),S===null?x=L:S.sibling=L,S=L,E=F}if(O===p.length)return n(c,E),Y&&Dt(c,O),x;if(E===null){for(;O<p.length;O++)E=m(c,p[O],g),E!==null&&(f=a(E,f,O),S===null?x=E:S.sibling=E,S=E);return Y&&Dt(c,O),x}for(E=r(c,E);O<p.length;O++)F=h(E,c,O,p[O],g),F!==null&&(e&&F.alternate!==null&&E.delete(F.key===null?O:F.key),f=a(F,f,O),S===null?x=F:S.sibling=F,S=F);return e&&E.forEach(function(z){return t(c,z)}),Y&&Dt(c,O),x}function k(c,f,p,g){var x=Un(p);if(typeof x!="function")throw Error(w(150));if(p=x.call(p),p==null)throw Error(w(151));for(var S=x=null,E=f,O=f=0,F=null,L=p.next();E!==null&&!L.done;O++,L=p.next()){E.index>O?(F=E,E=null):F=E.sibling;var z=v(c,E,L.value,g);if(z===null){E===null&&(E=F);break}e&&E&&z.alternate===null&&t(c,E),f=a(z,f,O),S===null?x=z:S.sibling=z,S=z,E=F}if(L.done)return n(c,E),Y&&Dt(c,O),x;if(E===null){for(;!L.done;O++,L=p.next())L=m(c,L.value,g),L!==null&&(f=a(L,f,O),S===null?x=L:S.sibling=L,S=L);return Y&&Dt(c,O),x}for(E=r(c,E);!L.done;O++,L=p.next())L=h(E,c,O,L.value,g),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?O:L.key),f=a(L,f,O),S===null?x=L:S.sibling=L,S=L);return e&&E.forEach(function($){return t(c,$)}),Y&&Dt(c,O),x}function T(c,f,p,g){if(typeof p=="object"&&p!==null&&p.type===un&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Hr:e:{for(var x=p.key,S=f;S!==null;){if(S.key===x){if(x=p.type,x===un){if(S.tag===7){n(c,S.sibling),f=i(S,p.props.children),f.return=c,c=f;break e}}else if(S.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===vt&&ns(x)===S.type){n(c,S.sibling),f=i(S,p.props),f.ref=Yn(c,S,p),f.return=c,c=f;break e}n(c,S);break}else t(c,S);S=S.sibling}p.type===un?(f=Xt(p.props.children,c.mode,g,p.key),f.return=c,c=f):(g=_i(p.type,p.key,p.props,null,c.mode,g),g.ref=Yn(c,f,p),g.return=c,c=g)}return o(c);case ln:e:{for(S=p.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(c,f.sibling),f=i(f,p.children||[]),f.return=c,c=f;break e}else{n(c,f);break}else t(c,f);f=f.sibling}f=Za(p,c.mode,g),f.return=c,c=f}return o(c);case vt:return S=p._init,T(c,f,S(p._payload),g)}if(Gn(p))return y(c,f,p,g);if(Un(p))return k(c,f,p,g);ti(c,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(c,f.sibling),f=i(f,p),f.return=c,c=f):(n(c,f),f=Ga(p,c.mode,g),f.return=c,c=f),o(c)):n(c,f)}return T}var Ln=hc(!0),gc=hc(!1),Vi=Mt(null),Wi=null,hn=null,Ml=null;function Rl(){Ml=hn=Wi=null}function jl(e){var t=Vi.current;H(Vi),e._currentValue=t}function bo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){Wi=e,Ml=hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(Ml!==e)if(e={context:e,memoizedValue:t,next:null},hn===null){if(Wi===null)throw Error(w(308));hn=e,Wi.dependencies={lanes:0,firstContext:e}}else hn=hn.next=e;return t}var Wt=null;function Fl(e){Wt===null?Wt=[e]:Wt.push(e)}function yc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Fl(t)):(n.next=i.next,i.next=n),t.interleaved=n,at(e,r)}function at(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ht=!1;function Dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,at(e,n)}return i=r.interleaved,i===null?(t.next=t,Fl(r)):(t.next=i.next,i.next=t),r.interleaved=t,at(e,n)}function ki(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cl(e,n)}}function rs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hi(e,t,n,r){var i=e.updateQueue;ht=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,s=u.next;u.next=null,o===null?a=s:o.next=s,o=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=s:l.next=s,d.lastBaseUpdate=u))}if(a!==null){var m=i.baseState;o=0,d=s=u=null,l=a;do{var v=l.lane,h=l.eventTime;if((r&v)===v){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,k=l;switch(v=t,h=n,k.tag){case 1:if(y=k.payload,typeof y=="function"){m=y.call(h,m,v);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=k.payload,v=typeof y=="function"?y.call(h,m,v):y,v==null)break e;m=K({},m,v);break e;case 2:ht=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else h={eventTime:h,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(s=d=h,u=m):d=d.next=h,o|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(d===null&&(u=m),i.baseState=u,i.firstBaseUpdate=s,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Jt|=o,e.lanes=o,e.memoizedState=m}}function is(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var jr={},Ze=Mt(jr),Sr=Mt(jr),Er=Mt(jr);function Ht(e){if(e===jr)throw Error(w(174));return e}function $l(e,t){switch(U(Er,t),U(Sr,e),U(Ze,jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:mo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=mo(t,e)}H(Ze),U(Ze,t)}function In(){H(Ze),H(Sr),H(Er)}function kc(e){Ht(Er.current);var t=Ht(Ze.current),n=mo(t,e.type);t!==n&&(U(Sr,e),U(Ze,n))}function Ul(e){Sr.current===e&&(H(Ze),H(Sr))}var Q=Mt(0);function Bi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ha=[];function Vl(){for(var e=0;e<Ha.length;e++)Ha[e]._workInProgressVersionPrimary=null;Ha.length=0}var xi=ft.ReactCurrentDispatcher,Ba=ft.ReactCurrentBatchConfig,Zt=0,X=null,te=null,oe=null,Yi=!1,ar=!1,Cr=0,Vm=0;function ce(){throw Error(w(321))}function Wl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!He(e[n],t[n]))return!1;return!0}function Hl(e,t,n,r,i,a){if(Zt=a,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xi.current=e===null||e.memoizedState===null?Ym:Qm,e=n(r,i),ar){a=0;do{if(ar=!1,Cr=0,25<=a)throw Error(w(301));a+=1,oe=te=null,t.updateQueue=null,xi.current=Xm,e=n(r,i)}while(ar)}if(xi.current=Qi,t=te!==null&&te.next!==null,Zt=0,oe=te=X=null,Yi=!1,t)throw Error(w(300));return e}function Bl(){var e=Cr!==0;return Cr=0,e}function Ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?X.memoizedState=oe=e:oe=oe.next=e,oe}function Re(){if(te===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=oe===null?X.memoizedState:oe.next;if(t!==null)oe=t,te=e;else{if(e===null)throw Error(w(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},oe===null?X.memoizedState=oe=e:oe=oe.next=e}return oe}function Pr(e,t){return typeof t=="function"?t(e):t}function Ya(e){var t=Re(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=te,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,u=null,s=a;do{var d=s.lane;if((Zt&d)===d)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var m={lane:d,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,X.lanes|=d,Jt|=d}s=s.next}while(s!==null&&s!==a);u===null?o=r:u.next=l,He(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,X.lanes|=a,Jt|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qa(e){var t=Re(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);He(a,t.memoizedState)||(ke=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function xc(){}function Sc(e,t){var n=X,r=Re(),i=t(),a=!He(r.memoizedState,i);if(a&&(r.memoizedState=i,ke=!0),r=r.queue,Yl(Pc.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,_r(9,Cc.bind(null,n,r,i,t),void 0,null),le===null)throw Error(w(349));Zt&30||Ec(n,t,i)}return i}function Ec(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cc(e,t,n,r){t.value=n,t.getSnapshot=r,_c(t)&&Nc(e)}function Pc(e,t,n){return n(function(){_c(t)&&Nc(e)})}function _c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!He(e,n)}catch{return!0}}function Nc(e){var t=at(e,1);t!==null&&We(t,e,1,-1)}function as(e){var t=Ye();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:e},t.queue=e,e=e.dispatch=Bm.bind(null,X,e),[t.memoizedState,e]}function _r(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Oc(){return Re().memoizedState}function Si(e,t,n,r){var i=Ye();X.flags|=e,i.memoizedState=_r(1|t,n,void 0,r===void 0?null:r)}function fa(e,t,n,r){var i=Re();r=r===void 0?null:r;var a=void 0;if(te!==null){var o=te.memoizedState;if(a=o.destroy,r!==null&&Wl(r,o.deps)){i.memoizedState=_r(t,n,a,r);return}}X.flags|=e,i.memoizedState=_r(1|t,n,a,r)}function os(e,t){return Si(8390656,8,e,t)}function Yl(e,t){return fa(2048,8,e,t)}function Tc(e,t){return fa(4,2,e,t)}function zc(e,t){return fa(4,4,e,t)}function Ac(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lc(e,t,n){return n=n!=null?n.concat([e]):null,fa(4,4,Ac.bind(null,t,e),n)}function Ql(){}function Ic(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bc(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mc(e,t,n){return Zt&21?(He(n,t)||(n=$f(),X.lanes|=n,Jt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function Wm(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Ba.transition;Ba.transition={};try{e(!1),t()}finally{D=n,Ba.transition=r}}function Rc(){return Re().memoizedState}function Hm(e,t,n){var r=Nt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jc(e))Fc(t,n);else if(n=yc(e,t,n,r),n!==null){var i=he();We(n,e,r,i),Dc(n,t,r)}}function Bm(e,t,n){var r=Nt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jc(e))Fc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,l=a(o,n);if(i.hasEagerState=!0,i.eagerState=l,He(l,o)){var u=t.interleaved;u===null?(i.next=i,Fl(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=yc(e,t,i,r),n!==null&&(i=he(),We(n,e,r,i),Dc(n,t,r))}}function jc(e){var t=e.alternate;return e===X||t!==null&&t===X}function Fc(e,t){ar=Yi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cl(e,n)}}var Qi={readContext:Me,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},Ym={readContext:Me,useCallback:function(e,t){return Ye().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:os,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Si(4194308,4,Ac.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Si(4194308,4,e,t)},useInsertionEffect:function(e,t){return Si(4,2,e,t)},useMemo:function(e,t){var n=Ye();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ye();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Hm.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=Ye();return e={current:e},t.memoizedState=e},useState:as,useDebugValue:Ql,useDeferredValue:function(e){return Ye().memoizedState=e},useTransition:function(){var e=as(!1),t=e[0];return e=Wm.bind(null,e[1]),Ye().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=Ye();if(Y){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),le===null)throw Error(w(349));Zt&30||Ec(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,os(Pc.bind(null,r,a,e),[e]),r.flags|=2048,_r(9,Cc.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Ye(),t=le.identifierPrefix;if(Y){var n=tt,r=et;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Vm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qm={readContext:Me,useCallback:Ic,useContext:Me,useEffect:Yl,useImperativeHandle:Lc,useInsertionEffect:Tc,useLayoutEffect:zc,useMemo:bc,useReducer:Ya,useRef:Oc,useState:function(){return Ya(Pr)},useDebugValue:Ql,useDeferredValue:function(e){var t=Re();return Mc(t,te.memoizedState,e)},useTransition:function(){var e=Ya(Pr)[0],t=Re().memoizedState;return[e,t]},useMutableSource:xc,useSyncExternalStore:Sc,useId:Rc,unstable_isNewReconciler:!1},Xm={readContext:Me,useCallback:Ic,useContext:Me,useEffect:Yl,useImperativeHandle:Lc,useInsertionEffect:Tc,useLayoutEffect:zc,useMemo:bc,useReducer:Qa,useRef:Oc,useState:function(){return Qa(Pr)},useDebugValue:Ql,useDeferredValue:function(e){var t=Re();return te===null?t.memoizedState=e:Mc(t,te.memoizedState,e)},useTransition:function(){var e=Qa(Pr)[0],t=Re().memoizedState;return[e,t]},useMutableSource:xc,useSyncExternalStore:Sc,useId:Rc,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Mo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ca={isMounted:function(e){return(e=e._reactInternals)?rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),i=Nt(e),a=nt(r,i);a.payload=t,n!=null&&(a.callback=n),t=Pt(e,a,i),t!==null&&(We(t,e,i,r),ki(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),i=Nt(e),a=nt(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Pt(e,a,i),t!==null&&(We(t,e,i,r),ki(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=Nt(e),i=nt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Pt(e,i,r),t!==null&&(We(t,e,r,n),ki(t,e,r))}};function ls(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(i,a):!0}function $c(e,t,n){var r=!1,i=zt,a=t.contextType;return typeof a=="object"&&a!==null?a=Me(a):(i=Se(t)?Kt:me.current,r=t.contextTypes,a=(r=r!=null)?zn(e,i):zt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ca,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function us(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ca.enqueueReplaceState(t,t.state,null)}function Ro(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Dl(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Me(a):(a=Se(t)?Kt:me.current,i.context=zn(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Mo(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ca.enqueueReplaceState(i,i.state,null),Hi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function bn(e,t){try{var n="",r=t;do n+=Sp(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Xa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function jo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Km=typeof WeakMap=="function"?WeakMap:Map;function Uc(e,t,n){n=nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ki||(Ki=!0,Qo=r),jo(e,t)},n}function Vc(e,t,n){n=nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){jo(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){jo(e,t),typeof r!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ss(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Km;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=sv.bind(null,e,t,n),t.then(e,e))}function fs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=nt(-1,1),t.tag=2,Pt(n,t,1))),n.lanes|=1),e)}var Gm=ft.ReactCurrentOwner,ke=!1;function ve(e,t,n,r){t.child=e===null?gc(t,null,n,r):Ln(t,e.child,n,r)}function ds(e,t,n,r,i){n=n.render;var a=t.ref;return _n(t,i),r=Hl(e,t,n,r,a,i),n=Bl(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ot(e,t,i)):(Y&&n&&Ll(t),t.flags|=1,ve(e,t,r,i),t.child)}function ps(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!tu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Wc(e,t,a,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:yr,n(o,r)&&e.ref===t.ref)return ot(e,t,i)}return t.flags|=1,e=Ot(a,r),e.ref=t.ref,e.return=t,t.child=e}function Wc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(yr(a,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,ot(e,t,i)}return Fo(e,t,n,r,i)}function Hc(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(yn,Ce),Ce|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(yn,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,U(yn,Ce),Ce|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,U(yn,Ce),Ce|=r;return ve(e,t,i,n),t.child}function Bc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Fo(e,t,n,r,i){var a=Se(n)?Kt:me.current;return a=zn(t,a),_n(t,i),n=Hl(e,t,n,r,a,i),r=Bl(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ot(e,t,i)):(Y&&r&&Ll(t),t.flags|=1,ve(e,t,n,i),t.child)}function ms(e,t,n,r,i){if(Se(n)){var a=!0;Di(t)}else a=!1;if(_n(t,i),t.stateNode===null)Ei(e,t),$c(t,n,r),Ro(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var u=o.context,s=n.contextType;typeof s=="object"&&s!==null?s=Me(s):(s=Se(n)?Kt:me.current,s=zn(t,s));var d=n.getDerivedStateFromProps,m=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==s)&&us(t,o,r,s),ht=!1;var v=t.memoizedState;o.state=v,Hi(t,r,o,i),u=t.memoizedState,l!==r||v!==u||xe.current||ht?(typeof d=="function"&&(Mo(t,n,d,r),u=t.memoizedState),(l=ht||ls(t,n,l,r,v,u,s))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=s,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,wc(e,t),l=t.memoizedProps,s=t.type===t.elementType?l:Fe(t.type,l),o.props=s,m=t.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Me(u):(u=Se(n)?Kt:me.current,u=zn(t,u));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||v!==u)&&us(t,o,r,u),ht=!1,v=t.memoizedState,o.state=v,Hi(t,r,o,i);var y=t.memoizedState;l!==m||v!==y||xe.current||ht?(typeof h=="function"&&(Mo(t,n,h,r),y=t.memoizedState),(s=ht||ls(t,n,s,r,v,y,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=u,r=s):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Do(e,t,n,r,a,i)}function Do(e,t,n,r,i,a){Bc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&qu(t,n,!1),ot(e,t,a);r=t.stateNode,Gm.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ln(t,e.child,null,a),t.child=Ln(t,null,l,a)):ve(e,t,l,a),t.memoizedState=r.state,i&&qu(t,n,!0),t.child}function Yc(e){var t=e.stateNode;t.pendingContext?Ju(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ju(e,t.context,!1),$l(e,t.containerInfo)}function vs(e,t,n,r,i){return An(),bl(i),t.flags|=256,ve(e,t,n,r),t.child}var $o={dehydrated:null,treeContext:null,retryLane:0};function Uo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qc(e,t,n){var r=t.pendingProps,i=Q.current,a=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(Q,i&1),e===null)return Io(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=ma(o,r,0,null),e=Xt(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Uo(n),t.memoizedState=$o,e):Xl(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Zm(e,t,o,r,l,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ot(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=Ot(l,a):(a=Xt(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Uo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=$o,r}return a=e.child,e=a.sibling,r=Ot(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xl(e,t){return t=ma({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ni(e,t,n,r){return r!==null&&bl(r),Ln(t,e.child,null,n),e=Xl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zm(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Xa(Error(w(422))),ni(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=ma({mode:"visible",children:r.children},i,0,null),a=Xt(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Ln(t,e.child,null,o),t.child.memoizedState=Uo(o),t.memoizedState=$o,a);if(!(t.mode&1))return ni(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(w(419)),r=Xa(a,r,void 0),ni(e,t,o,r)}if(l=(o&e.childLanes)!==0,ke||l){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,at(e,i),We(r,e,i,-1))}return eu(),r=Xa(Error(w(421))),ni(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=fv.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Pe=Ct(i.nextSibling),_e=t,Y=!0,$e=null,e!==null&&(Ae[Le++]=et,Ae[Le++]=tt,Ae[Le++]=Gt,et=e.id,tt=e.overflow,Gt=t),t=Xl(t,r.children),t.flags|=4096,t)}function hs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bo(e.return,t,n)}function Ka(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Xc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ve(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hs(e,n,t);else if(e.tag===19)hs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Bi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ka(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ka(t,!0,n,null,a);break;case"together":Ka(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ei(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Ot(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ot(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jm(e,t,n){switch(t.tag){case 3:Yc(t),An();break;case 5:kc(t);break;case 1:Se(t.type)&&Di(t);break;case 4:$l(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(Vi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Qc(e,t,n):(U(Q,Q.current&1),e=ot(e,t,n),e!==null?e.sibling:null);U(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Hc(e,t,n)}return ot(e,t,n)}var Kc,Vo,Gc,Zc;Kc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vo=function(){};Gc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ht(Ze.current);var a=null;switch(n){case"input":i=so(e,i),r=so(e,r),a=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),a=[];break;case"textarea":i=po(e,i),r=po(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ji)}vo(n,r);var o;n=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var l=i[s];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(cr.hasOwnProperty(s)?a||(a=[]):(a=a||[]).push(s,null));for(s in r){var u=r[s];if(l=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&u!==l&&(u!=null||l!=null))if(s==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(a||(a=[]),a.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(a=a||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(cr.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&V("scroll",e),a||l===u||(a=[])):(a=a||[]).push(s,u))}n&&(a=a||[]).push("style",n);var s=a;(t.updateQueue=s)&&(t.flags|=4)}};Zc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qn(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function qm(e,t,n){var r=t.pendingProps;switch(Il(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Se(t.type)&&Fi(),de(t),null;case 3:return r=t.stateNode,In(),H(xe),H(me),Vl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$e!==null&&(Go($e),$e=null))),Vo(e,t),de(t),null;case 5:Ul(t);var i=Ht(Er.current);if(n=t.type,e!==null&&t.stateNode!=null)Gc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return de(t),null}if(e=Ht(Ze.current),ei(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Xe]=t,r[xr]=a,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Jn.length;i++)V(Jn[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Pu(r,a),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},V("invalid",r);break;case"textarea":Nu(r,a),V("invalid",r)}vo(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&qr(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&qr(r.textContent,l,e),i=["children",""+l]):cr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&V("scroll",r)}switch(n){case"input":Br(r),_u(r,a,!0);break;case"textarea":Br(r),Ou(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=ji)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Xe]=t,e[xr]=r,Kc(e,t,!1,!1),t.stateNode=e;e:{switch(o=ho(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Jn.length;i++)V(Jn[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Pu(e,r),i=so(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),V("invalid",e);break;case"textarea":Nu(e,r),i=po(e,r),V("invalid",e);break;default:i=r}vo(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var u=l[a];a==="style"?Of(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&_f(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&dr(e,u):typeof u=="number"&&dr(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(cr.hasOwnProperty(a)?u!=null&&a==="onScroll"&&V("scroll",e):u!=null&&yl(e,a,u,o))}switch(n){case"input":Br(e),_u(e,r,!1);break;case"textarea":Br(e),Ou(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Sn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ji)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)Zc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Ht(Er.current),Ht(Ze.current),ei(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xe]=t,(a=r.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:qr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qr(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=t,t.stateNode=r}return de(t),null;case 13:if(H(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Pe!==null&&t.mode&1&&!(t.flags&128))vc(),An(),t.flags|=98560,a=!1;else if(a=ei(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(w(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(w(317));a[Xe]=t}else An(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),a=!1}else $e!==null&&(Go($e),$e=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ne===0&&(ne=3):eu())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return In(),Vo(e,t),e===null&&wr(t.stateNode.containerInfo),de(t),null;case 10:return jl(t.type._context),de(t),null;case 17:return Se(t.type)&&Fi(),de(t),null;case 19:if(H(Q),a=t.memoizedState,a===null)return de(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Qn(a,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Bi(e),o!==null){for(t.flags|=128,Qn(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Q,Q.current&1|2),t.child}e=e.sibling}a.tail!==null&&q()>Mn&&(t.flags|=128,r=!0,Qn(a,!1),t.lanes=4194304)}else{if(!r)if(e=Bi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!Y)return de(t),null}else 2*q()-a.renderingStartTime>Mn&&n!==1073741824&&(t.flags|=128,r=!0,Qn(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=q(),t.sibling=null,n=Q.current,U(Q,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return ql(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ce&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function ev(e,t){switch(Il(t),t.tag){case 1:return Se(t.type)&&Fi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return In(),H(xe),H(me),Vl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ul(t),null;case 13:if(H(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));An()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Q),null;case 4:return In(),null;case 10:return jl(t.type._context),null;case 22:case 23:return ql(),null;case 24:return null;default:return null}}var ri=!1,pe=!1,tv=typeof WeakSet=="function"?WeakSet:Set,P=null;function gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Wo(e,t,n){try{n()}catch(r){G(e,t,r)}}var gs=!1;function nv(e,t){if(_o=bi,e=nc(),Al(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,s=0,d=0,m=e,v=null;t:for(;;){for(var h;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==a||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(h=m.firstChild)!==null;)v=m,m=h;for(;;){if(m===e)break t;if(v===n&&++s===i&&(l=o),v===a&&++d===r&&(u=o),(h=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=h}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(No={focusedElem:e,selectionRange:n},bi=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var k=y.memoizedProps,T=y.memoizedState,c=t.stateNode,f=c.getSnapshotBeforeUpdate(t.elementType===t.type?k:Fe(t.type,k),T);c.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(g){G(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=gs,gs=!1,y}function or(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Wo(t,n,a)}i=i.next}while(i!==r)}}function da(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ho(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jc(e){var t=e.alternate;t!==null&&(e.alternate=null,Jc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[xr],delete t[zo],delete t[Fm],delete t[Dm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qc(e){return e.tag===5||e.tag===3||e.tag===4}function ys(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ji));else if(r!==4&&(e=e.child,e!==null))for(Bo(e,t,n),e=e.sibling;e!==null;)Bo(e,t,n),e=e.sibling}function Yo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yo(e,t,n),e=e.sibling;e!==null;)Yo(e,t,n),e=e.sibling}var ue=null,De=!1;function pt(e,t,n){for(n=n.child;n!==null;)ed(e,t,n),n=n.sibling}function ed(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(ia,n)}catch{}switch(n.tag){case 5:pe||gn(n,t);case 6:var r=ue,i=De;ue=null,pt(e,t,n),ue=r,De=i,ue!==null&&(De?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(De?(e=ue,n=n.stateNode,e.nodeType===8?Va(e.parentNode,n):e.nodeType===1&&Va(e,n),hr(e)):Va(ue,n.stateNode));break;case 4:r=ue,i=De,ue=n.stateNode.containerInfo,De=!0,pt(e,t,n),ue=r,De=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Wo(n,t,o),i=i.next}while(i!==r)}pt(e,t,n);break;case 1:if(!pe&&(gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){G(n,t,l)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,pt(e,t,n),pe=r):pt(e,t,n);break;default:pt(e,t,n)}}function ws(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tv),t.forEach(function(r){var i=cv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ue=l.stateNode,De=!1;break e;case 3:ue=l.stateNode.containerInfo,De=!0;break e;case 4:ue=l.stateNode.containerInfo,De=!0;break e}l=l.return}if(ue===null)throw Error(w(160));ed(a,o,i),ue=null,De=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(s){G(i,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)td(t,e),t=t.sibling}function td(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(je(t,e),Be(e),r&4){try{or(3,e,e.return),da(3,e)}catch(k){G(e,e.return,k)}try{or(5,e,e.return)}catch(k){G(e,e.return,k)}}break;case 1:je(t,e),Be(e),r&512&&n!==null&&gn(n,n.return);break;case 5:if(je(t,e),Be(e),r&512&&n!==null&&gn(n,n.return),e.flags&32){var i=e.stateNode;try{dr(i,"")}catch(k){G(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Ef(i,a),ho(l,o);var s=ho(l,a);for(o=0;o<u.length;o+=2){var d=u[o],m=u[o+1];d==="style"?Of(i,m):d==="dangerouslySetInnerHTML"?_f(i,m):d==="children"?dr(i,m):yl(i,d,m,s)}switch(l){case"input":fo(i,a);break;case"textarea":Cf(i,a);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;h!=null?Sn(i,!!a.multiple,h,!1):v!==!!a.multiple&&(a.defaultValue!=null?Sn(i,!!a.multiple,a.defaultValue,!0):Sn(i,!!a.multiple,a.multiple?[]:"",!1))}i[xr]=a}catch(k){G(e,e.return,k)}}break;case 6:if(je(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(k){G(e,e.return,k)}}break;case 3:if(je(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{hr(t.containerInfo)}catch(k){G(e,e.return,k)}break;case 4:je(t,e),Be(e);break;case 13:je(t,e),Be(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Zl=q())),r&4&&ws(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(s=pe)||d,je(t,e),pe=s):je(t,e),Be(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!d&&e.mode&1)for(P=e,d=e.child;d!==null;){for(m=P=d;P!==null;){switch(v=P,h=v.child,v.tag){case 0:case 11:case 14:case 15:or(4,v,v.return);break;case 1:gn(v,v.return);var y=v.stateNode;if(typeof y.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(k){G(r,n,k)}}break;case 5:gn(v,v.return);break;case 22:if(v.memoizedState!==null){xs(m);continue}}h!==null?(h.return=v,P=h):xs(m)}d=d.sibling}e:for(d=null,m=e;;){if(m.tag===5){if(d===null){d=m;try{i=m.stateNode,s?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Nf("display",o))}catch(k){G(e,e.return,k)}}}else if(m.tag===6){if(d===null)try{m.stateNode.nodeValue=s?"":m.memoizedProps}catch(k){G(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;d===m&&(d=null),m=m.return}d===m&&(d=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:je(t,e),Be(e),r&4&&ws(e);break;case 21:break;default:je(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(dr(i,""),r.flags&=-33);var a=ys(e);Yo(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ys(e);Bo(e,l,o);break;default:throw Error(w(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rv(e,t,n){P=e,nd(e)}function nd(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ri;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||pe;l=ri;var s=pe;if(ri=o,(pe=u)&&!s)for(P=i;P!==null;)o=P,u=o.child,o.tag===22&&o.memoizedState!==null?Ss(i):u!==null?(u.return=o,P=u):Ss(i);for(;a!==null;)P=a,nd(a),a=a.sibling;P=i,ri=l,pe=s}ks(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,P=a):ks(e)}}function ks(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||da(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&is(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}is(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var d=s.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&hr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}pe||t.flags&512&&Ho(t)}catch(v){G(t,t.return,v)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function xs(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Ss(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{da(4,t)}catch(u){G(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){G(t,i,u)}}var a=t.return;try{Ho(t)}catch(u){G(t,a,u)}break;case 5:var o=t.return;try{Ho(t)}catch(u){G(t,o,u)}}}catch(u){G(t,t.return,u)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var iv=Math.ceil,Xi=ft.ReactCurrentDispatcher,Kl=ft.ReactCurrentOwner,be=ft.ReactCurrentBatchConfig,j=0,le=null,ee=null,se=0,Ce=0,yn=Mt(0),ne=0,Nr=null,Jt=0,pa=0,Gl=0,lr=null,we=null,Zl=0,Mn=1/0,Je=null,Ki=!1,Qo=null,_t=null,ii=!1,kt=null,Gi=0,ur=0,Xo=null,Ci=-1,Pi=0;function he(){return j&6?q():Ci!==-1?Ci:Ci=q()}function Nt(e){return e.mode&1?j&2&&se!==0?se&-se:Um.transition!==null?(Pi===0&&(Pi=$f()),Pi):(e=D,e!==0||(e=window.event,e=e===void 0?16:Qf(e.type)),e):1}function We(e,t,n,r){if(50<ur)throw ur=0,Xo=null,Error(w(185));br(e,n,r),(!(j&2)||e!==le)&&(e===le&&(!(j&2)&&(pa|=n),ne===4&&yt(e,se)),Ee(e,r),n===1&&j===0&&!(t.mode&1)&&(Mn=q()+500,sa&&Rt()))}function Ee(e,t){var n=e.callbackNode;Up(e,t);var r=Ii(e,e===le?se:0);if(r===0)n!==null&&Au(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Au(n),t===1)e.tag===0?$m(Es.bind(null,e)):dc(Es.bind(null,e)),Rm(function(){!(j&6)&&Rt()}),n=null;else{switch(Uf(r)){case 1:n=El;break;case 4:n=Ff;break;case 16:n=Li;break;case 536870912:n=Df;break;default:n=Li}n=fd(n,rd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rd(e,t){if(Ci=-1,Pi=0,j&6)throw Error(w(327));var n=e.callbackNode;if(Nn()&&e.callbackNode!==n)return null;var r=Ii(e,e===le?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Zi(e,r);else{t=r;var i=j;j|=2;var a=ad();(le!==e||se!==t)&&(Je=null,Mn=q()+500,Qt(e,t));do try{lv();break}catch(l){id(e,l)}while(!0);Rl(),Xi.current=a,j=i,ee!==null?t=0:(le=null,se=0,t=ne)}if(t!==0){if(t===2&&(i=xo(e),i!==0&&(r=i,t=Ko(e,i))),t===1)throw n=Nr,Qt(e,0),yt(e,r),Ee(e,q()),n;if(t===6)yt(e,r);else{if(i=e.current.alternate,!(r&30)&&!av(i)&&(t=Zi(e,r),t===2&&(a=xo(e),a!==0&&(r=a,t=Ko(e,a))),t===1))throw n=Nr,Qt(e,0),yt(e,r),Ee(e,q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:$t(e,we,Je);break;case 3:if(yt(e,r),(r&130023424)===r&&(t=Zl+500-q(),10<t)){if(Ii(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=To($t.bind(null,e,we,Je),t);break}$t(e,we,Je);break;case 4:if(yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ve(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iv(r/1960))-r,10<r){e.timeoutHandle=To($t.bind(null,e,we,Je),r);break}$t(e,we,Je);break;case 5:$t(e,we,Je);break;default:throw Error(w(329))}}}return Ee(e,q()),e.callbackNode===n?rd.bind(null,e):null}function Ko(e,t){var n=lr;return e.current.memoizedState.isDehydrated&&(Qt(e,t).flags|=256),e=Zi(e,t),e!==2&&(t=we,we=n,t!==null&&Go(t)),e}function Go(e){we===null?we=e:we.push.apply(we,e)}function av(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!He(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~Gl,t&=~pa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function Es(e){if(j&6)throw Error(w(327));Nn();var t=Ii(e,0);if(!(t&1))return Ee(e,q()),null;var n=Zi(e,t);if(e.tag!==0&&n===2){var r=xo(e);r!==0&&(t=r,n=Ko(e,r))}if(n===1)throw n=Nr,Qt(e,0),yt(e,t),Ee(e,q()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$t(e,we,Je),Ee(e,q()),null}function Jl(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(Mn=q()+500,sa&&Rt())}}function qt(e){kt!==null&&kt.tag===0&&!(j&6)&&Nn();var t=j;j|=1;var n=be.transition,r=D;try{if(be.transition=null,D=1,e)return e()}finally{D=r,be.transition=n,j=t,!(j&6)&&Rt()}}function ql(){Ce=yn.current,H(yn)}function Qt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Mm(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Il(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fi();break;case 3:In(),H(xe),H(me),Vl();break;case 5:Ul(r);break;case 4:In();break;case 13:H(Q);break;case 19:H(Q);break;case 10:jl(r.type._context);break;case 22:case 23:ql()}n=n.return}if(le=e,ee=e=Ot(e.current,null),se=Ce=t,ne=0,Nr=null,Gl=pa=Jt=0,we=lr=null,Wt!==null){for(t=0;t<Wt.length;t++)if(n=Wt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Wt=null}return e}function id(e,t){do{var n=ee;try{if(Rl(),xi.current=Qi,Yi){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yi=!1}if(Zt=0,oe=te=X=null,ar=!1,Cr=0,Kl.current=null,n===null||n.return===null){ne=1,Nr=t,ee=null;break}e:{var a=e,o=n.return,l=n,u=t;if(t=se,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,d=l,m=d.tag;if(!(d.mode&1)&&(m===0||m===11||m===15)){var v=d.alternate;v?(d.updateQueue=v.updateQueue,d.memoizedState=v.memoizedState,d.lanes=v.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=fs(o);if(h!==null){h.flags&=-257,cs(h,o,l,a,t),h.mode&1&&ss(a,s,t),t=h,u=s;var y=t.updateQueue;if(y===null){var k=new Set;k.add(u),t.updateQueue=k}else y.add(u);break e}else{if(!(t&1)){ss(a,s,t),eu();break e}u=Error(w(426))}}else if(Y&&l.mode&1){var T=fs(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),cs(T,o,l,a,t),bl(bn(u,l));break e}}a=u=bn(u,l),ne!==4&&(ne=2),lr===null?lr=[a]:lr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var c=Uc(a,u,t);rs(a,c);break e;case 1:l=u;var f=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(_t===null||!_t.has(p)))){a.flags|=65536,t&=-t,a.lanes|=t;var g=Vc(a,l,t);rs(a,g);break e}}a=a.return}while(a!==null)}ld(n)}catch(x){t=x,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function ad(){var e=Xi.current;return Xi.current=Qi,e===null?Qi:e}function eu(){(ne===0||ne===3||ne===2)&&(ne=4),le===null||!(Jt&268435455)&&!(pa&268435455)||yt(le,se)}function Zi(e,t){var n=j;j|=2;var r=ad();(le!==e||se!==t)&&(Je=null,Qt(e,t));do try{ov();break}catch(i){id(e,i)}while(!0);if(Rl(),j=n,Xi.current=r,ee!==null)throw Error(w(261));return le=null,se=0,ne}function ov(){for(;ee!==null;)od(ee)}function lv(){for(;ee!==null&&!Lp();)od(ee)}function od(e){var t=sd(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?ld(e):ee=t,Kl.current=null}function ld(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ev(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=qm(n,t,Ce),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function $t(e,t,n){var r=D,i=be.transition;try{be.transition=null,D=1,uv(e,t,n,r)}finally{be.transition=i,D=r}return null}function uv(e,t,n,r){do Nn();while(kt!==null);if(j&6)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Vp(e,a),e===le&&(ee=le=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ii||(ii=!0,fd(Li,function(){return Nn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=be.transition,be.transition=null;var o=D;D=1;var l=j;j|=4,Kl.current=null,nv(e,n),td(n,e),Om(No),bi=!!_o,No=_o=null,e.current=n,rv(n),Ip(),j=l,D=o,be.transition=a}else e.current=n;if(ii&&(ii=!1,kt=e,Gi=i),a=e.pendingLanes,a===0&&(_t=null),Rp(n.stateNode),Ee(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ki)throw Ki=!1,e=Qo,Qo=null,e;return Gi&1&&e.tag!==0&&Nn(),a=e.pendingLanes,a&1?e===Xo?ur++:(ur=0,Xo=e):ur=0,Rt(),null}function Nn(){if(kt!==null){var e=Uf(Gi),t=be.transition,n=D;try{if(be.transition=null,D=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,Gi=0,j&6)throw Error(w(331));var i=j;for(j|=4,P=e.current;P!==null;){var a=P,o=a.child;if(P.flags&16){var l=a.deletions;if(l!==null){for(var u=0;u<l.length;u++){var s=l[u];for(P=s;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:or(8,d,a)}var m=d.child;if(m!==null)m.return=d,P=m;else for(;P!==null;){d=P;var v=d.sibling,h=d.return;if(Jc(d),d===s){P=null;break}if(v!==null){v.return=h,P=v;break}P=h}}}var y=a.alternate;if(y!==null){var k=y.child;if(k!==null){y.child=null;do{var T=k.sibling;k.sibling=null,k=T}while(k!==null)}}P=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,P=o;else e:for(;P!==null;){if(a=P,a.flags&2048)switch(a.tag){case 0:case 11:case 15:or(9,a,a.return)}var c=a.sibling;if(c!==null){c.return=a.return,P=c;break e}P=a.return}}var f=e.current;for(P=f;P!==null;){o=P;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,P=p;else e:for(o=f;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:da(9,l)}}catch(x){G(l,l.return,x)}if(l===o){P=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,P=g;break e}P=l.return}}if(j=i,Rt(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(ia,e)}catch{}r=!0}return r}finally{D=n,be.transition=t}}return!1}function Cs(e,t,n){t=bn(n,t),t=Uc(e,t,1),e=Pt(e,t,1),t=he(),e!==null&&(br(e,1,t),Ee(e,t))}function G(e,t,n){if(e.tag===3)Cs(e,e,n);else for(;t!==null;){if(t.tag===3){Cs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_t===null||!_t.has(r))){e=bn(n,e),e=Vc(t,e,1),t=Pt(t,e,1),e=he(),t!==null&&(br(t,1,e),Ee(t,e));break}}t=t.return}}function sv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(se&n)===n&&(ne===4||ne===3&&(se&130023424)===se&&500>q()-Zl?Qt(e,0):Gl|=n),Ee(e,t)}function ud(e,t){t===0&&(e.mode&1?(t=Xr,Xr<<=1,!(Xr&130023424)&&(Xr=4194304)):t=1);var n=he();e=at(e,t),e!==null&&(br(e,t,n),Ee(e,n))}function fv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ud(e,n)}function cv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),ud(e,n)}var sd;sd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,Jm(e,t,n);ke=!!(e.flags&131072)}else ke=!1,Y&&t.flags&1048576&&pc(t,Ui,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ei(e,t),e=t.pendingProps;var i=zn(t,me.current);_n(t,n),i=Hl(null,t,r,e,i,n);var a=Bl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)?(a=!0,Di(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dl(t),i.updater=ca,t.stateNode=i,i._reactInternals=t,Ro(t,r,e,n),t=Do(null,t,r,!0,a,n)):(t.tag=0,Y&&a&&Ll(t),ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ei(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=pv(r),e=Fe(r,e),i){case 0:t=Fo(null,t,r,e,n);break e;case 1:t=ms(null,t,r,e,n);break e;case 11:t=ds(null,t,r,e,n);break e;case 14:t=ps(null,t,r,Fe(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),Fo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),ms(e,t,r,i,n);case 3:e:{if(Yc(t),e===null)throw Error(w(387));r=t.pendingProps,a=t.memoizedState,i=a.element,wc(e,t),Hi(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=bn(Error(w(423)),t),t=vs(e,t,r,n,i);break e}else if(r!==i){i=bn(Error(w(424)),t),t=vs(e,t,r,n,i);break e}else for(Pe=Ct(t.stateNode.containerInfo.firstChild),_e=t,Y=!0,$e=null,n=gc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(An(),r===i){t=ot(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return kc(t),e===null&&Io(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,Oo(r,i)?o=null:a!==null&&Oo(r,a)&&(t.flags|=32),Bc(e,t),ve(e,t,o,n),t.child;case 6:return e===null&&Io(t),null;case 13:return Qc(e,t,n);case 4:return $l(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ln(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),ds(e,t,r,i,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,U(Vi,r._currentValue),r._currentValue=o,a!==null)if(He(a.value,o)){if(a.children===i.children&&!xe.current){t=ot(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=nt(-1,n&-n),u.tag=2;var s=a.updateQueue;if(s!==null){s=s.shared;var d=s.pending;d===null?u.next=u:(u.next=d.next,d.next=u),s.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),bo(a.return,n,t),l.lanes|=n;break}u=u.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),bo(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,_n(t,n),i=Me(i),r=r(i),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,i=Fe(r,t.pendingProps),i=Fe(r.type,i),ps(e,t,r,i,n);case 15:return Wc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Fe(r,i),Ei(e,t),t.tag=1,Se(r)?(e=!0,Di(t)):e=!1,_n(t,n),$c(t,r,i),Ro(t,r,i,n),Do(null,t,r,!0,e,n);case 19:return Xc(e,t,n);case 22:return Hc(e,t,n)}throw Error(w(156,t.tag))};function fd(e,t){return jf(e,t)}function dv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,r){return new dv(e,t,n,r)}function tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pv(e){if(typeof e=="function")return tu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kl)return 11;if(e===xl)return 14}return 2}function Ot(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _i(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")tu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case un:return Xt(n.children,i,a,t);case wl:o=8,i|=8;break;case ao:return e=Ie(12,n,t,i|2),e.elementType=ao,e.lanes=a,e;case oo:return e=Ie(13,n,t,i),e.elementType=oo,e.lanes=a,e;case lo:return e=Ie(19,n,t,i),e.elementType=lo,e.lanes=a,e;case kf:return ma(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yf:o=10;break e;case wf:o=9;break e;case kl:o=11;break e;case xl:o=14;break e;case vt:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ie(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Xt(e,t,n,r){return e=Ie(7,e,r,t),e.lanes=n,e}function ma(e,t,n,r){return e=Ie(22,e,r,t),e.elementType=kf,e.lanes=n,e.stateNode={isHidden:!1},e}function Ga(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function Za(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function mv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Aa(0),this.expirationTimes=Aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Aa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,i,a,o,l,u){return e=new mv(e,t,n,l,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ie(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dl(a),e}function vv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ln,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cd(e){if(!e)return zt;e=e._reactInternals;e:{if(rn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Se(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(Se(n))return cc(e,n,t)}return t}function dd(e,t,n,r,i,a,o,l,u){return e=nu(n,r,!0,e,i,a,o,l,u),e.context=cd(null),n=e.current,r=he(),i=Nt(n),a=nt(r,i),a.callback=t??null,Pt(n,a,i),e.current.lanes=i,br(e,i,r),Ee(e,r),e}function va(e,t,n,r){var i=t.current,a=he(),o=Nt(i);return n=cd(n),t.context===null?t.context=n:t.pendingContext=n,t=nt(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pt(i,t,o),e!==null&&(We(e,i,o,a),ki(e,i,o)),o}function Ji(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ps(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ru(e,t){Ps(e,t),(e=e.alternate)&&Ps(e,t)}function hv(){return null}var pd=typeof reportError=="function"?reportError:function(e){console.error(e)};function iu(e){this._internalRoot=e}ha.prototype.render=iu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));va(e,t,null,null)};ha.prototype.unmount=iu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qt(function(){va(null,e,null,null)}),t[it]=null}};function ha(e){this._internalRoot=e}ha.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&Yf(e)}};function au(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _s(){}function gv(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var s=Ji(o);a.call(s)}}var o=dd(t,r,e,0,null,!1,!1,"",_s);return e._reactRootContainer=o,e[it]=o.current,wr(e.nodeType===8?e.parentNode:e),qt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var s=Ji(u);l.call(s)}}var u=nu(e,0,!1,null,null,!1,!1,"",_s);return e._reactRootContainer=u,e[it]=u.current,wr(e.nodeType===8?e.parentNode:e),qt(function(){va(t,u,n,r)}),u}function ya(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var u=Ji(o);l.call(u)}}va(t,o,e,i)}else o=gv(n,t,e,i,r);return Ji(o)}Vf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zn(t.pendingLanes);n!==0&&(Cl(t,n|1),Ee(t,q()),!(j&6)&&(Mn=q()+500,Rt()))}break;case 13:qt(function(){var r=at(e,1);if(r!==null){var i=he();We(r,e,1,i)}}),ru(e,1)}};Pl=function(e){if(e.tag===13){var t=at(e,134217728);if(t!==null){var n=he();We(t,e,134217728,n)}ru(e,134217728)}};Wf=function(e){if(e.tag===13){var t=Nt(e),n=at(e,t);if(n!==null){var r=he();We(n,e,t,r)}ru(e,t)}};Hf=function(){return D};Bf=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};yo=function(e,t,n){switch(t){case"input":if(fo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ua(r);if(!i)throw Error(w(90));Sf(r),fo(r,i)}}}break;case"textarea":Cf(e,n);break;case"select":t=n.value,t!=null&&Sn(e,!!n.multiple,t,!1)}};Af=Jl;Lf=qt;var yv={usingClientEntryPoint:!1,Events:[Rr,dn,ua,Tf,zf,Jl]},Xn={findFiberByHostInstance:Vt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wv={bundleType:Xn.bundleType,version:Xn.version,rendererPackageName:Xn.rendererPackageName,rendererConfig:Xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mf(e),e===null?null:e.stateNode},findFiberByHostInstance:Xn.findFiberByHostInstance||hv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ai=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ai.isDisabled&&ai.supportsFiber)try{ia=ai.inject(wv),Ge=ai}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yv;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!au(t))throw Error(w(200));return vv(e,t,null,n)};Oe.createRoot=function(e,t){if(!au(e))throw Error(w(299));var n=!1,r="",i=pd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,r,i),e[it]=t.current,wr(e.nodeType===8?e.parentNode:e),new iu(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Mf(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return qt(e)};Oe.hydrate=function(e,t,n){if(!ga(t))throw Error(w(200));return ya(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!au(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=pd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=dd(t,null,e,1,n??null,i,!1,a,o),e[it]=t.current,wr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ha(t)};Oe.render=function(e,t,n){if(!ga(t))throw Error(w(200));return ya(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!ga(e))throw Error(w(40));return e._reactRootContainer?(qt(function(){ya(null,null,e,!1,function(){e._reactRootContainer=null,e[it]=null})}),!0):!1};Oe.unstable_batchedUpdates=Jl;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ga(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return ya(e,t,n,!1,r)};Oe.version="18.3.1-next-f1338f8080-20240426";function md(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(md)}catch(e){console.error(e)}}md(),mf.exports=Oe;var kv=mf.exports,Ns=kv;ro.createRoot=Ns.createRoot,ro.hydrateRoot=Ns.hydrateRoot;var xv={prefix:"fas",iconName:"circle-chevron-right",icon:[512,512,["chevron-circle-right"],"f138","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"]},Sv={prefix:"fas",iconName:"volume-high",icon:[640,512,[128266,"volume-up"],"f028","M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"]},Ev=Sv,Cv={prefix:"fas",iconName:"volume-xmark",icon:[576,512,["volume-mute","volume-times"],"f6a9","M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},Pv=Cv,_v={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Nv=_v,Ov={prefix:"fas",iconName:"circle-chevron-left",icon:[512,512,["chevron-circle-left"],"f137","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"]};function Os(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Os(Object(n),!0).forEach(function(r){re(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Os(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qi(e){"@babel/helpers - typeof";return qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qi(e)}function Tv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function zv(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Av(e,t,n){return t&&zv(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ou(e,t){return Iv(e)||Mv(e,t)||vd(e,t)||jv()}function Fr(e){return Lv(e)||bv(e)||vd(e)||Rv()}function Lv(e){if(Array.isArray(e))return Zo(e)}function Iv(e){if(Array.isArray(e))return e}function bv(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Mv(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,l;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(u){a=!0,l=u}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw l}}return r}}function vd(e,t){if(e){if(typeof e=="string")return Zo(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zo(e,t)}}function Zo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Rv(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jv(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ts=function(){},lu={},hd={},gd=null,yd={mark:Ts,measure:Ts};try{typeof window<"u"&&(lu=window),typeof document<"u"&&(hd=document),typeof MutationObserver<"u"&&(gd=MutationObserver),typeof performance<"u"&&(yd=performance)}catch{}var Fv=lu.navigator||{},zs=Fv.userAgent,As=zs===void 0?"":zs,At=lu,B=hd,Ls=gd,oi=yd;At.document;var ct=!!B.documentElement&&!!B.head&&typeof B.addEventListener=="function"&&typeof B.createElement=="function",wd=~As.indexOf("MSIE")||~As.indexOf("Trident/"),li,ui,si,fi,ci,lt="___FONT_AWESOME___",Jo=16,kd="fa",xd="svg-inline--fa",en="data-fa-i2svg",qo="data-fa-pseudo-element",Dv="data-fa-pseudo-element-pending",uu="data-prefix",su="data-icon",Is="fontawesome-i2svg",$v="async",Uv=["HTML","HEAD","STYLE","SCRIPT"],Sd=function(){try{return!0}catch{return!1}}(),W="classic",Z="sharp",fu=[W,Z];function Dr(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[W]}})}var Or=Dr((li={},re(li,W,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),re(li,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),li)),Tr=Dr((ui={},re(ui,W,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),re(ui,Z,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),ui)),zr=Dr((si={},re(si,W,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),re(si,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),si)),Vv=Dr((fi={},re(fi,W,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),re(fi,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),fi)),Wv=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ed="fa-layers-text",Hv=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Bv=Dr((ci={},re(ci,W,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),re(ci,Z,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ci)),Cd=[1,2,3,4,5,6,7,8,9,10],Yv=Cd.concat([11,12,13,14,15,16,17,18,19,20]),Qv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Bt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ar=new Set;Object.keys(Tr[W]).map(Ar.add.bind(Ar));Object.keys(Tr[Z]).map(Ar.add.bind(Ar));var Xv=[].concat(fu,Fr(Ar),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Bt.GROUP,Bt.SWAP_OPACITY,Bt.PRIMARY,Bt.SECONDARY]).concat(Cd.map(function(e){return"".concat(e,"x")})).concat(Yv.map(function(e){return"w-".concat(e)})),sr=At.FontAwesomeConfig||{};function Kv(e){var t=B.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Gv(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(B&&typeof B.querySelector=="function"){var Zv=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Zv.forEach(function(e){var t=ou(e,2),n=t[0],r=t[1],i=Gv(Kv(n));i!=null&&(sr[r]=i)})}var Pd={styleDefault:"solid",familyDefault:"classic",cssPrefix:kd,replacementClass:xd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};sr.familyPrefix&&(sr.cssPrefix=sr.familyPrefix);var Rn=C(C({},Pd),sr);Rn.autoReplaceSvg||(Rn.observeMutations=!1);var N={};Object.keys(Pd).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){Rn[e]=n,fr.forEach(function(r){return r(N)})},get:function(){return Rn[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){Rn.cssPrefix=t,fr.forEach(function(n){return n(N)})},get:function(){return Rn.cssPrefix}});At.FontAwesomeConfig=N;var fr=[];function Jv(e){return fr.push(e),function(){fr.splice(fr.indexOf(e),1)}}var mt=Jo,Ke={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qv(e){if(!(!e||!ct)){var t=B.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=B.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return B.head.insertBefore(t,r),e}}var e0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Lr(){for(var e=12,t="";e-- >0;)t+=e0[Math.random()*62|0];return t}function $n(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function cu(e){return e.classList?$n(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function _d(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t0(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(_d(e[n]),'" ')},"").trim()}function wa(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function du(e){return e.size!==Ke.size||e.x!==Ke.x||e.y!==Ke.y||e.rotate!==Ke.rotate||e.flipX||e.flipY}function n0(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),u={transform:"".concat(a," ").concat(o," ").concat(l)},s={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:u,path:s}}function r0(e){var t=e.transform,n=e.width,r=n===void 0?Jo:n,i=e.height,a=i===void 0?Jo:i,o=e.startCentered,l=o===void 0?!1:o,u="";return l&&wd?u+="translate(".concat(t.x/mt-r/2,"em, ").concat(t.y/mt-a/2,"em) "):l?u+="translate(calc(-50% + ".concat(t.x/mt,"em), calc(-50% + ").concat(t.y/mt,"em)) "):u+="translate(".concat(t.x/mt,"em, ").concat(t.y/mt,"em) "),u+="scale(".concat(t.size/mt*(t.flipX?-1:1),", ").concat(t.size/mt*(t.flipY?-1:1),") "),u+="rotate(".concat(t.rotate,"deg) "),u}var i0=`:root, :host {
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
}`;function Nd(){var e=kd,t=xd,n=N.cssPrefix,r=N.replacementClass,i=i0;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var bs=!1;function Ja(){N.autoAddCss&&!bs&&(qv(Nd()),bs=!0)}var a0={mixout:function(){return{dom:{css:Nd,insertCss:Ja}}},hooks:function(){return{beforeDOMElementCreation:function(){Ja()},beforeI2svg:function(){Ja()}}}},ut=At||{};ut[lt]||(ut[lt]={});ut[lt].styles||(ut[lt].styles={});ut[lt].hooks||(ut[lt].hooks={});ut[lt].shims||(ut[lt].shims=[]);var Ue=ut[lt],Od=[],o0=function e(){B.removeEventListener("DOMContentLoaded",e),ea=1,Od.map(function(t){return t()})},ea=!1;ct&&(ea=(B.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(B.readyState),ea||B.addEventListener("DOMContentLoaded",o0));function l0(e){ct&&(ea?setTimeout(e,0):Od.push(e))}function $r(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?_d(e):"<".concat(t," ").concat(t0(r),">").concat(a.map($r).join(""),"</").concat(t,">")}function Ms(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var qa=function(t,n,r,i){var a=Object.keys(t),o=a.length,l=n,u,s,d;for(r===void 0?(u=1,d=t[a[0]]):(u=0,d=r);u<o;u++)s=a[u],d=l(d,t[s],s,t);return d};function u0(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function el(e){var t=u0(e);return t.length===1?t[0].toString(16):null}function s0(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Rs(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function tl(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Rs(t);typeof Ue.hooks.addPack=="function"&&!i?Ue.hooks.addPack(e,Rs(t)):Ue.styles[e]=C(C({},Ue.styles[e]||{}),a),e==="fas"&&tl("fa",t)}var di,pi,mi,wn=Ue.styles,f0=Ue.shims,c0=(di={},re(di,W,Object.values(zr[W])),re(di,Z,Object.values(zr[Z])),di),pu=null,Td={},zd={},Ad={},Ld={},Id={},d0=(pi={},re(pi,W,Object.keys(Or[W])),re(pi,Z,Object.keys(Or[Z])),pi);function p0(e){return~Xv.indexOf(e)}function m0(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!p0(i)?i:null}var bd=function(){var t=function(a){return qa(wn,function(o,l,u){return o[u]=qa(l,a,{}),o},{})};Td=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var l=a[2].filter(function(u){return typeof u=="number"});l.forEach(function(u){i[u.toString(16)]=o})}return i}),zd=t(function(i,a,o){if(i[o]=o,a[2]){var l=a[2].filter(function(u){return typeof u=="string"});l.forEach(function(u){i[u]=o})}return i}),Id=t(function(i,a,o){var l=a[2];return i[o]=o,l.forEach(function(u){i[u]=o}),i});var n="far"in wn||N.autoFetchSvg,r=qa(f0,function(i,a){var o=a[0],l=a[1],u=a[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:u}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:u}),i},{names:{},unicodes:{}});Ad=r.names,Ld=r.unicodes,pu=ka(N.styleDefault,{family:N.familyDefault})};Jv(function(e){pu=ka(e.styleDefault,{family:N.familyDefault})});bd();function mu(e,t){return(Td[e]||{})[t]}function v0(e,t){return(zd[e]||{})[t]}function Yt(e,t){return(Id[e]||{})[t]}function Md(e){return Ad[e]||{prefix:null,iconName:null}}function h0(e){var t=Ld[e],n=mu("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Lt(){return pu}var vu=function(){return{prefix:null,iconName:null,rest:[]}};function ka(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?W:n,i=Or[r][e],a=Tr[r][e]||Tr[r][i],o=e in Ue.styles?e:null;return a||o||null}var js=(mi={},re(mi,W,Object.keys(zr[W])),re(mi,Z,Object.keys(zr[Z])),mi);function xa(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},re(t,W,"".concat(N.cssPrefix,"-").concat(W)),re(t,Z,"".concat(N.cssPrefix,"-").concat(Z)),t),o=null,l=W;(e.includes(a[W])||e.some(function(s){return js[W].includes(s)}))&&(l=W),(e.includes(a[Z])||e.some(function(s){return js[Z].includes(s)}))&&(l=Z);var u=e.reduce(function(s,d){var m=m0(N.cssPrefix,d);if(wn[d]?(d=c0[l].includes(d)?Vv[l][d]:d,o=d,s.prefix=d):d0[l].indexOf(d)>-1?(o=d,s.prefix=ka(d,{family:l})):m?s.iconName=m:d!==N.replacementClass&&d!==a[W]&&d!==a[Z]&&s.rest.push(d),!i&&s.prefix&&s.iconName){var v=o==="fa"?Md(s.iconName):{},h=Yt(s.prefix,s.iconName);v.prefix&&(o=null),s.iconName=v.iconName||h||s.iconName,s.prefix=v.prefix||s.prefix,s.prefix==="far"&&!wn.far&&wn.fas&&!N.autoFetchSvg&&(s.prefix="fas")}return s},vu());return(e.includes("fa-brands")||e.includes("fab"))&&(u.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(u.prefix="fad"),!u.prefix&&l===Z&&(wn.fass||N.autoFetchSvg)&&(u.prefix="fass",u.iconName=Yt(u.prefix,u.iconName)||u.iconName),(u.prefix==="fa"||o==="fa")&&(u.prefix=Lt()||"fas"),u}var g0=function(){function e(){Tv(this,e),this.definitions={}}return Av(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=C(C({},n.definitions[l]||{}),o[l]),tl(l,o[l]);var u=zr[W][l];u&&tl(u,o[l]),bd()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],l=o.prefix,u=o.iconName,s=o.icon,d=s[2];n[l]||(n[l]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[l][m]=s)}),n[l][u]=s}),n}}]),e}(),Fs=[],kn={},On={},y0=Object.keys(On);function w0(e,t){var n=t.mixoutsTo;return Fs=e,kn={},Object.keys(On).forEach(function(r){y0.indexOf(r)===-1&&delete On[r]}),Fs.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),qi(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){kn[o]||(kn[o]=[]),kn[o].push(a[o])})}r.provides&&r.provides(On)}),n}function nl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=kn[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function tn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=kn[e]||[];i.forEach(function(a){a.apply(null,n)})}function st(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return On[e]?On[e].apply(null,t):void 0}function rl(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Lt();if(t)return t=Yt(n,t)||t,Ms(Rd.definitions,n,t)||Ms(Ue.styles,n,t)}var Rd=new g0,k0=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,tn("noAuto")},x0={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ct?(tn("beforeI2svg",t),st("pseudoElements2svg",t),st("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,l0(function(){E0({autoReplaceSvgRoot:n}),tn("watch",t)})}},S0={icon:function(t){if(t===null)return null;if(qi(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Yt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ka(t[0]);return{prefix:r,iconName:Yt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(Wv))){var i=xa(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Lt(),iconName:Yt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=Lt();return{prefix:a,iconName:Yt(a,t)||t}}}},ze={noAuto:k0,config:N,dom:x0,parse:S0,library:Rd,findIconDefinition:rl,toHtml:$r},E0=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?B:n;(Object.keys(Ue.styles).length>0||N.autoFetchSvg)&&ct&&N.autoReplaceSvg&&ze.dom.i2svg({node:r})};function Sa(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return $r(r)})}}),Object.defineProperty(e,"node",{get:function(){if(ct){var r=B.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function C0(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(du(o)&&n.found&&!r.found){var l=n.width,u=n.height,s={x:l/u/2,y:.5};i.style=wa(C(C({},a),{},{"transform-origin":"".concat(s.x+o.x/16,"em ").concat(s.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function P0(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},i),{},{id:o}),children:r}]}]}function hu(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,l=e.symbol,u=e.title,s=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,h=v===void 0?!1:v,y=r.found?r:n,k=y.width,T=y.height,c=i==="fak",f=[N.replacementClass,a?"".concat(N.cssPrefix,"-").concat(a):""].filter(function(F){return m.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(m.classes).join(" "),p={children:[],attributes:C(C({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:f,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(T)})},g=c&&!~m.classes.indexOf("fa-fw")?{width:"".concat(k/T*16*.0625,"em")}:{};h&&(p.attributes[en]=""),u&&(p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(d||Lr())},children:[u]}),delete p.attributes.title);var x=C(C({},p),{},{prefix:i,iconName:a,main:n,mask:r,maskId:s,transform:o,symbol:l,styles:C(C({},g),m.styles)}),S=r.found&&n.found?st("generateAbstractMask",x)||{children:[],attributes:{}}:st("generateAbstractIcon",x)||{children:[],attributes:{}},E=S.children,O=S.attributes;return x.children=E,x.attributes=O,l?P0(x):C0(x)}function Ds(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,l=e.watchable,u=l===void 0?!1:l,s=C(C(C({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});u&&(s[en]="");var d=C({},o.styles);du(i)&&(d.transform=r0({transform:i,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=wa(d);m.length>0&&(s.style=m);var v=[];return v.push({tag:"span",attributes:s,children:[t]}),a&&v.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),v}function _0(e){var t=e.content,n=e.title,r=e.extra,i=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=wa(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var eo=Ue.styles;function il(e){var t=e[0],n=e[1],r=e.slice(4),i=ou(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(Bt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Bt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Bt.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var N0={found:!1,width:512,height:512};function O0(e,t){!Sd&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function al(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=Lt()),new Promise(function(r,i){if(st("missingIconAbstract"),n==="fa"){var a=Md(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&eo[t]&&eo[t][e]){var o=eo[t][e];return r(il(o))}O0(e,t),r(C(C({},N0),{},{icon:N.showMissingIcons&&e?st("missingIconAbstract")||{}:{}}))})}var $s=function(){},ol=N.measurePerformance&&oi&&oi.mark&&oi.measure?oi:{mark:$s,measure:$s},qn='FA "6.5.2"',T0=function(t){return ol.mark("".concat(qn," ").concat(t," begins")),function(){return jd(t)}},jd=function(t){ol.mark("".concat(qn," ").concat(t," ends")),ol.measure("".concat(qn," ").concat(t),"".concat(qn," ").concat(t," begins"),"".concat(qn," ").concat(t," ends"))},gu={begin:T0,end:jd},Ni=function(){};function Us(e){var t=e.getAttribute?e.getAttribute(en):null;return typeof t=="string"}function z0(e){var t=e.getAttribute?e.getAttribute(uu):null,n=e.getAttribute?e.getAttribute(su):null;return t&&n}function A0(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function L0(){if(N.autoReplaceSvg===!0)return Oi.replace;var e=Oi[N.autoReplaceSvg];return e||Oi.replace}function I0(e){return B.createElementNS("http://www.w3.org/2000/svg",e)}function b0(e){return B.createElement(e)}function Fd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?I0:b0:n;if(typeof e=="string")return B.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(Fd(o,{ceFn:r}))}),i}function M0(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Oi={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Fd(i),n)}),n.getAttribute(en)===null&&N.keepOriginalSource){var r=B.createComment(M0(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~cu(n).indexOf(N.replacementClass))return Oi.replace(t);var i=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(l,u){return u===N.replacementClass||u.match(i)?l.toSvg.push(u):l.toNode.push(u),l},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(l){return $r(l)}).join(`
`);n.setAttribute(en,""),n.innerHTML=o}};function Vs(e){e()}function Dd(e,t){var n=typeof t=="function"?t:Ni;if(e.length===0)n();else{var r=Vs;N.mutateApproach===$v&&(r=At.requestAnimationFrame||Vs),r(function(){var i=L0(),a=gu.begin("mutate");e.map(i),a(),n()})}}var yu=!1;function $d(){yu=!0}function ll(){yu=!1}var ta=null;function Ws(e){if(Ls&&N.observeMutations){var t=e.treeCallback,n=t===void 0?Ni:t,r=e.nodeCallback,i=r===void 0?Ni:r,a=e.pseudoElementsCallback,o=a===void 0?Ni:a,l=e.observeMutationsRoot,u=l===void 0?B:l;ta=new Ls(function(s){if(!yu){var d=Lt();$n(s).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Us(m.addedNodes[0])&&(N.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&N.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Us(m.target)&&~Qv.indexOf(m.attributeName))if(m.attributeName==="class"&&z0(m.target)){var v=xa(cu(m.target)),h=v.prefix,y=v.iconName;m.target.setAttribute(uu,h||d),y&&m.target.setAttribute(su,y)}else A0(m.target)&&i(m.target)})}}),ct&&ta.observe(u,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function R0(){ta&&ta.disconnect()}function j0(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],l=a.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function F0(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=xa(cu(e));return i.prefix||(i.prefix=Lt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=v0(i.prefix,e.innerText)||mu(i.prefix,el(e.innerText))),!i.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function D0(e){var t=$n(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||Lr()):(t["aria-hidden"]="true",t.focusable="false")),t}function $0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ke,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Hs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=F0(e),r=n.iconName,i=n.prefix,a=n.rest,o=D0(e),l=nl("parseNodeAttributes",{},e),u=t.styleParser?j0(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ke,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:u,attributes:o}},l)}var U0=Ue.styles;function Ud(e){var t=N.autoReplaceSvg==="nest"?Hs(e,{styleParser:!1}):Hs(e);return~t.extra.classes.indexOf(Ed)?st("generateLayersText",e,t):st("generateSvgReplacementMutation",e,t)}var It=new Set;fu.map(function(e){It.add("fa-".concat(e))});Object.keys(Or[W]).map(It.add.bind(It));Object.keys(Or[Z]).map(It.add.bind(It));It=Fr(It);function Bs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ct)return Promise.resolve();var n=B.documentElement.classList,r=function(m){return n.add("".concat(Is,"-").concat(m))},i=function(m){return n.remove("".concat(Is,"-").concat(m))},a=N.autoFetchSvg?It:fu.map(function(d){return"fa-".concat(d)}).concat(Object.keys(U0));a.includes("fa")||a.push("fa");var o=[".".concat(Ed,":not([").concat(en,"])")].concat(a.map(function(d){return".".concat(d,":not([").concat(en,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=$n(e.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var u=gu.begin("onTree"),s=l.reduce(function(d,m){try{var v=Ud(m);v&&d.push(v)}catch(h){Sd||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise(function(d,m){Promise.all(s).then(function(v){Dd(v,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),u(),d()})}).catch(function(v){u(),m(v)})})}function V0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ud(e).then(function(n){n&&Dd([n],t)})}function W0(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:rl(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:rl(i||{})),e(r,C(C({},n),{},{mask:i}))}}var H0=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ke:r,a=n.symbol,o=a===void 0?!1:a,l=n.mask,u=l===void 0?null:l,s=n.maskId,d=s===void 0?null:s,m=n.title,v=m===void 0?null:m,h=n.titleId,y=h===void 0?null:h,k=n.classes,T=k===void 0?[]:k,c=n.attributes,f=c===void 0?{}:c,p=n.styles,g=p===void 0?{}:p;if(t){var x=t.prefix,S=t.iconName,E=t.icon;return Sa(C({type:"icon"},t),function(){return tn("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(v?f["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(y||Lr()):(f["aria-hidden"]="true",f.focusable="false")),hu({icons:{main:il(E),mask:u?il(u.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:S,transform:C(C({},Ke),i),symbol:o,title:v,maskId:d,titleId:y,extra:{attributes:f,styles:g,classes:T}})})}},B0={mixout:function(){return{icon:W0(H0)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Bs,n.nodeCallback=V0,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?B:r,a=n.callback,o=a===void 0?function(){}:a;return Bs(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,l=r.prefix,u=r.transform,s=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(h,y){Promise.all([al(i,l),d.iconName?al(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(k){var T=ou(k,2),c=T[0],f=T[1];h([n,hu({icons:{main:c,mask:f},prefix:l,iconName:i,transform:u,symbol:s,maskId:m,title:a,titleId:o,extra:v,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,l=n.styles,u=wa(l);u.length>0&&(i.style=u);var s;return du(o)&&(s=st("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(s||a.icon),{children:r,attributes:i}}}},Y0={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Sa({type:"layer"},function(){tn("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(u){o=o.concat(u.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(Fr(a)).join(" ")},children:o}]})}}}},Q0={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,u=r.attributes,s=u===void 0?{}:u,d=r.styles,m=d===void 0?{}:d;return Sa({type:"counter",content:n},function(){return tn("beforeDOMElementCreation",{content:n,params:r}),_0({content:n.toString(),title:a,extra:{attributes:s,styles:m,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(Fr(l))}})})}}}},X0={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Ke:i,o=r.title,l=o===void 0?null:o,u=r.classes,s=u===void 0?[]:u,d=r.attributes,m=d===void 0?{}:d,v=r.styles,h=v===void 0?{}:v;return Sa({type:"text",content:n},function(){return tn("beforeDOMElementCreation",{content:n,params:r}),Ds({content:n,transform:C(C({},Ke),a),title:l,extra:{attributes:m,styles:h,classes:["".concat(N.cssPrefix,"-layers-text")].concat(Fr(s))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,l=null,u=null;if(wd){var s=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();l=d.width/s,u=d.height/s}return N.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ds({content:n.innerHTML,width:l,height:u,transform:a,title:i,extra:o,watchable:!0})])}}},K0=new RegExp('"',"ug"),Ys=[1105920,1112319];function G0(e){var t=e.replace(K0,""),n=s0(t,0),r=n>=Ys[0]&&n<=Ys[1],i=t.length===2?t[0]===t[1]:!1;return{value:el(i?t[0]:t),isSecondary:r||i}}function Qs(e,t){var n="".concat(Dv).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=$n(e.children),o=a.filter(function(E){return E.getAttribute(qo)===t})[0],l=At.getComputedStyle(e,t),u=l.getPropertyValue("font-family").match(Hv),s=l.getPropertyValue("font-weight"),d=l.getPropertyValue("content");if(o&&!u)return e.removeChild(o),r();if(u&&d!=="none"&&d!==""){var m=l.getPropertyValue("content"),v=~["Sharp"].indexOf(u[2])?Z:W,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?Tr[v][u[2].toLowerCase()]:Bv[v][s],y=G0(m),k=y.value,T=y.isSecondary,c=u[0].startsWith("FontAwesome"),f=mu(h,k),p=f;if(c){var g=h0(k);g.iconName&&g.prefix&&(f=g.iconName,h=g.prefix)}if(f&&!T&&(!o||o.getAttribute(uu)!==h||o.getAttribute(su)!==p)){e.setAttribute(n,p),o&&e.removeChild(o);var x=$0(),S=x.extra;S.attributes[qo]=t,al(f,h).then(function(E){var O=hu(C(C({},x),{},{icons:{main:E,mask:vu()},prefix:h,iconName:p,extra:S,watchable:!0})),F=B.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(F,e.firstChild):e.appendChild(F),F.outerHTML=O.map(function(L){return $r(L)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Z0(e){return Promise.all([Qs(e,"::before"),Qs(e,"::after")])}function J0(e){return e.parentNode!==document.head&&!~Uv.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(qo)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Xs(e){if(ct)return new Promise(function(t,n){var r=$n(e.querySelectorAll("*")).filter(J0).map(Z0),i=gu.begin("searchPseudoElements");$d(),Promise.all(r).then(function(){i(),ll(),t()}).catch(function(){i(),ll(),n()})})}var q0={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Xs,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?B:r;N.searchPseudoElements&&Xs(i)}}},Ks=!1,eh={mixout:function(){return{dom:{unwatch:function(){$d(),Ks=!0}}}},hooks:function(){return{bootstrap:function(){Ws(nl("mutationObserverCallbacks",{}))},noAuto:function(){R0()},watch:function(n){var r=n.observeMutationsRoot;Ks?ll():Ws(nl("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Gs=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],l=a.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},th={mixout:function(){return{parse:{transform:function(n){return Gs(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Gs(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(a/2," 256)")},u="translate(".concat(i.x*32,", ").concat(i.y*32,") "),s="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),d="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(u," ").concat(s," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},h={outer:l,inner:m,path:v};return{tag:"g",attributes:C({},h.outer),children:[{tag:"g",attributes:C({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),h.path)}]}]}}}},to={x:0,y:0,width:"100%",height:"100%"};function Zs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function nh(e){return e.tag==="g"?e.children:[e]}var rh={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?xa(i.split(" ").map(function(o){return o.trim()})):vu();return a.prefix||(a.prefix=Lt()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,l=n.maskId,u=n.transform,s=a.width,d=a.icon,m=o.width,v=o.icon,h=n0({transform:u,containerWidth:m,iconWidth:s}),y={tag:"rect",attributes:C(C({},to),{},{fill:"white"})},k=d.children?{children:d.children.map(Zs)}:{},T={tag:"g",attributes:C({},h.inner),children:[Zs(C({tag:d.tag,attributes:C(C({},d.attributes),h.path)},k))]},c={tag:"g",attributes:C({},h.outer),children:[T]},f="mask-".concat(l||Lr()),p="clip-".concat(l||Lr()),g={tag:"mask",attributes:C(C({},to),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,c]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:nh(v)},g]};return r.push(x,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(f,")")},to)}),{children:r,attributes:i}}}},ih={provides:function(t){var n=!1;At.matchMedia&&(n=At.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},a),{},{attributeName:"opacity"}),l={tag:"circle",attributes:C(C({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:C(C({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:C(C({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ah={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},oh=[a0,B0,Y0,Q0,X0,q0,eh,th,rh,ih,ah];w0(oh,{mixoutsTo:ze});ze.noAuto;ze.config;ze.library;ze.dom;var ul=ze.parse;ze.findIconDefinition;ze.toHtml;var lh=ze.icon;ze.layer;ze.text;ze.counter;var Vd={exports:{}},uh="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",sh=uh,fh=sh;function Wd(){}function Hd(){}Hd.resetWarningCache=Wd;var ch=function(){function e(r,i,a,o,l,u){if(u!==fh){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Hd,resetWarningCache:Wd};return n.PropTypes=n,n};Vd.exports=ch();var dh=Vd.exports;const M=tf(dh);function Js(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Qe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Js(Object(n),!0).forEach(function(r){xn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Js(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function na(e){"@babel/helpers - typeof";return na=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},na(e)}function xn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ph(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function mh(e,t){if(e==null)return{};var n=ph(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sl(e){return vh(e)||hh(e)||gh(e)||yh()}function vh(e){if(Array.isArray(e))return fl(e)}function hh(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gh(e,t){if(e){if(typeof e=="string")return fl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fl(e,t)}}function fl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wh(e){var t,n=e.beat,r=e.fade,i=e.beatFade,a=e.bounce,o=e.shake,l=e.flash,u=e.spin,s=e.spinPulse,d=e.spinReverse,m=e.pulse,v=e.fixedWidth,h=e.inverse,y=e.border,k=e.listItem,T=e.flip,c=e.size,f=e.rotation,p=e.pull,g=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":a,"fa-shake":o,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":d,"fa-spin-pulse":s,"fa-pulse":m,"fa-fw":v,"fa-inverse":h,"fa-border":y,"fa-li":k,"fa-flip":T===!0,"fa-flip-horizontal":T==="horizontal"||T==="both","fa-flip-vertical":T==="vertical"||T==="both"},xn(t,"fa-".concat(c),typeof c<"u"&&c!==null),xn(t,"fa-rotate-".concat(f),typeof f<"u"&&f!==null&&f!==0),xn(t,"fa-pull-".concat(p),typeof p<"u"&&p!==null),xn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(g).map(function(x){return g[x]?x:null}).filter(function(x){return x})}function kh(e){return e=e-0,e===e}function Bd(e){return kh(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var xh=["style"];function Sh(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Eh(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Bd(n.slice(0,r)),a=n.slice(r+1).trim();return i.startsWith("webkit")?t[Sh(i)]=a:t[i]=a,t},{})}function Yd(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(u){return Yd(e,u)}),i=Object.keys(t.attributes||{}).reduce(function(u,s){var d=t.attributes[s];switch(s){case"class":u.attrs.className=d,delete t.attributes.class;break;case"style":u.attrs.style=Eh(d);break;default:s.indexOf("aria-")===0||s.indexOf("data-")===0?u.attrs[s.toLowerCase()]=d:u.attrs[Bd(s)]=d}return u},{attrs:{}}),a=n.style,o=a===void 0?{}:a,l=mh(n,xh);return i.attrs.style=Qe(Qe({},i.attrs.style),o),e.apply(void 0,[t.tag,Qe(Qe({},i.attrs),l)].concat(sl(r)))}var Qd=!1;try{Qd=!0}catch{}function Ch(){if(!Qd&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function qs(e){if(e&&na(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ul.icon)return ul.icon(e);if(e===null)return null;if(e&&na(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function no(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xn({},e,t):{}}var ef={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ut=vl.forwardRef(function(e,t){var n=Qe(Qe({},ef),e),r=n.icon,i=n.mask,a=n.symbol,o=n.className,l=n.title,u=n.titleId,s=n.maskId,d=qs(r),m=no("classes",[].concat(sl(wh(n)),sl((o||"").split(" ")))),v=no("transform",typeof n.transform=="string"?ul.transform(n.transform):n.transform),h=no("mask",qs(i)),y=lh(d,Qe(Qe(Qe(Qe({},m),v),h),{},{symbol:a,title:l,titleId:u,maskId:s}));if(!y)return Ch("Could not find icon",d),null;var k=y.abstract,T={ref:t};return Object.keys(n).forEach(function(c){ef.hasOwnProperty(c)||(T[c]=n[c])}),Ph(k[0],T)});Ut.displayName="FontAwesomeIcon";Ut.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};var Ph=Yd.bind(null,vl.createElement);const _h=({campaigns:e})=>{const t=ae.useRef(null),[n,r]=ae.useState(!1),[i,a]=ae.useState(null),[o,l]=ae.useState(0),[u,s]=ae.useState(!1),[d,m]=ae.useState(0),[v,h]=ae.useState({}),[y,k]=ae.useState(!1);ae.useEffect(()=>{const z=t.current,$=()=>{k(z.paused),z.paused&&z.play()};return z&&(z.addEventListener("play",$),z.addEventListener("pause",$)),()=>{z&&(z.removeEventListener("play",$),z.removeEventListener("pause",$))}},[i,o,e]),ae.useEffect(()=>{if(i!==null&&e[i]){const z=e[i];if(o<z.videoId.length){const $=z.videoId[o];t.current.src=$,t.current.play(),m(0),k(!1)}}},[i,o,e]),ae.useEffect(()=>{const z=setInterval(()=>{t.current&&m(t.current.currentTime/t.current.duration*100)},100);return()=>clearInterval(z)},[o,i]),ae.useEffect(()=>{t.current&&(t.current.muted=u)},[u]);const T=z=>{a(z),l(0)},c=()=>{if(h(z=>({...z,[`${i}-${o}`]:!0})),m(100),i!==null&&e[i]){const z=e[i];o+1<z.videoId.length?l(o+1):i+1<e.length?(a(i+1),l(0)):(a(null),l(0))}},f=()=>{i!==null?i+1<e.length?(a(i+1),l(0)):(a(0),l(0)):e.length>0&&(a(0),l(0))},p=()=>{i!==null?i>0?(a(i-1),l(0)):(a(e.length-1),l(0)):e.length>0&&(a(e.length-1),l(0))},g=()=>{i!==null&&e[i]&&o+1<e[i].videoId.length&&(h(z=>({...z,[`${i}-${o}`]:!0})),l(o+1))},x=()=>{i!==null&&e[i]&&o>0&&l(o-1)},S=()=>{s(z=>!z)},E=()=>{a(null),l(0),k(!1),s(!1)},O=z=>{const $=z.currentTarget.getBoundingClientRect(),dt=z.clientX-$.left,an=$.width;dt<an/2?x():g()},F=()=>{r(!n)},L=z=>{const $=z.split(`
`);return $.length>2?{truncated:$.slice(0,2).join(`
`),hasMore:!0}:{truncated:z,hasMore:!1}};return b.jsx(b.Fragment,{children:b.jsxs("div",{className:"storiesHeader",children:[b.jsx("div",{className:"outer",children:e.map((z,$)=>b.jsx("div",{onClick:()=>T($),className:`inner ${i===$?"active":""} ${z.videoId.some((dt,an)=>v[`${$}-${an}`])?"played":"not-played"}`,children:b.jsx("img",{src:z.campaignPhoto,alt:"Campaign",className:"campaign-photo"})},$))}),b.jsxs("div",{className:`topp ${i!==null?"active":""}`,children:[b.jsx("div",{className:"next",onClick:f,children:b.jsx(Ut,{icon:xv})}),b.jsx("div",{className:"previous",onClick:p,children:b.jsx(Ut,{icon:Ov})}),b.jsx("div",{className:"outer-box",children:i!==null&&b.jsxs("div",{className:"boxed-video",children:[b.jsx("div",{className:"mute-unmute",onClick:S,children:u?b.jsx(Ut,{icon:Pv}):b.jsx(Ut,{icon:Ev})}),b.jsx("div",{className:"close-button",onClick:E,children:b.jsx(Ut,{className:"close",icon:Nv})}),b.jsx("div",{className:"progress-bar",children:e[i].videoId.map((z,$)=>b.jsx("div",{className:"progress",children:b.jsx("div",{className:"progress1",style:{width:`${$===o?d:v[`${i}-${$}`]?100:0}%`}})},$))}),b.jsx("video",{className:"boxed-video",ref:t,onClick:O,onEnded:c,autoPlay:!0,children:"Your browser does not support the video tag."}),b.jsxs("div",{className:"bookdiv",children:[b.jsx("div",{className:"img1",children:b.jsx("img",{className:"img",src:e[i].campaignPhoto,alt:"Campaign"})}),b.jsxs("div",{style:{fontFamily:"Poppins, sans-serif"},className:"text",children:[b.jsx("p",{style:{fontFamily:"Poppins, sans-serif"},className:"hotelname",children:e[i].campaignName}),b.jsxs("pre",{style:{fontFamily:"Poppins, sans-serif"},className:"offer",children:[n?e[i].campaignDetails:L(e[i].campaignDetails).truncated,L(e[i].campaignDetails).hasMore&&b.jsx("div",{children:b.jsx("span",{style:{fontFamily:"Poppins, sans-serif"},className:"view-more",onClick:F,children:n?" View Less":" View More"})})]}),b.jsxs("h2",{style:{fontFamily:"Poppins, sans-serif"},className:"offerprice",children:["From ",e[i].offerPrice.currency,e[i].offerPrice.price]})]}),b.jsx("div",{className:"divbtn",children:b.jsx("a",{href:e[i].hotelInfo.hotellink,target:"_blank",rel:"noopener noreferrer",className:"bookbtn",children:"Book"})})]})]})})]})]})})};function Nh(){ae.useState([]);const[e,t]=ae.useState([]);return ae.useEffect(()=>{const r=document.getElementById("root").dataset.campaignId;r?(async a=>{try{const l=await(await fetch(`https://www.tripbuilder.in/php/shoppable.php/getCampaignsForHotel/${a}`)).json();t(l.campaigns)}catch(o){console.error("Error fetching data:",o)}})(r):console.log("no campaign id found!")},[]),b.jsxs("div",{className:"App",children:[b.jsx("style",{children:` .root1 {
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
    }`}),b.jsx(_h,{campaigns:e})]})}ro.createRoot(document.getElementById("root")).render(b.jsx(vl.StrictMode,{children:b.jsx(Nh,{})}));
