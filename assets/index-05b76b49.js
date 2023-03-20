(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function wy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var If={},Ey={get exports(){return If},set exports(n){If=n}},Uu={},Ma={},Ty={get exports(){return Ma},set exports(n){Ma=n}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Za=Symbol.for("react.element"),by=Symbol.for("react.portal"),Cy=Symbol.for("react.fragment"),Ay=Symbol.for("react.strict_mode"),Py=Symbol.for("react.profiler"),Ly=Symbol.for("react.provider"),Dy=Symbol.for("react.context"),Ry=Symbol.for("react.forward_ref"),Iy=Symbol.for("react.suspense"),ky=Symbol.for("react.memo"),Ny=Symbol.for("react.lazy"),Ap=Symbol.iterator;function Oy(n){return n===null||typeof n!="object"?null:(n=Ap&&n[Ap]||n["@@iterator"],typeof n=="function"?n:null)}var S_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M_=Object.assign,w_={};function Ro(n,e,t){this.props=n,this.context=e,this.refs=w_,this.updater=t||S_}Ro.prototype.isReactComponent={};Ro.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ro.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function E_(){}E_.prototype=Ro.prototype;function Jd(n,e,t){this.props=n,this.context=e,this.refs=w_,this.updater=t||S_}var eh=Jd.prototype=new E_;eh.constructor=Jd;M_(eh,Ro.prototype);eh.isPureReactComponent=!0;var Pp=Array.isArray,T_=Object.prototype.hasOwnProperty,th={current:null},b_={key:!0,ref:!0,__self:!0,__source:!0};function C_(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)T_.call(e,i)&&!b_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Za,type:n,key:s,ref:o,props:r,_owner:th.current}}function zy(n,e){return{$$typeof:Za,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function nh(n){return typeof n=="object"&&n!==null&&n.$$typeof===Za}function Fy(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Lp=/\/+/g;function gc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Fy(""+n.key):e.toString(36)}function jl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Za:case by:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+gc(o,0):i,Pp(r)?(t="",n!=null&&(t=n.replace(Lp,"$&/")+"/"),jl(r,e,t,"",function(u){return u})):r!=null&&(nh(r)&&(r=zy(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Lp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Pp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+gc(s,a);o+=jl(s,e,t,l,r)}else if(l=Oy(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+gc(s,a++),o+=jl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ol(n,e,t){if(n==null)return n;var i=[],r=0;return jl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Uy(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var tn={current:null},Xl={transition:null},By={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:Xl,ReactCurrentOwner:th};Pe.Children={map:ol,forEach:function(n,e,t){ol(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ol(n,function(){e++}),e},toArray:function(n){return ol(n,function(e){return e})||[]},only:function(n){if(!nh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Pe.Component=Ro;Pe.Fragment=Cy;Pe.Profiler=Py;Pe.PureComponent=Jd;Pe.StrictMode=Ay;Pe.Suspense=Iy;Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=By;Pe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=M_({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=th.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)T_.call(e,l)&&!b_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Za,type:n.type,key:r,ref:s,props:i,_owner:o}};Pe.createContext=function(n){return n={$$typeof:Dy,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Ly,_context:n},n.Consumer=n};Pe.createElement=C_;Pe.createFactory=function(n){var e=C_.bind(null,n);return e.type=n,e};Pe.createRef=function(){return{current:null}};Pe.forwardRef=function(n){return{$$typeof:Ry,render:n}};Pe.isValidElement=nh;Pe.lazy=function(n){return{$$typeof:Ny,_payload:{_status:-1,_result:n},_init:Uy}};Pe.memo=function(n,e){return{$$typeof:ky,type:n,compare:e===void 0?null:e}};Pe.startTransition=function(n){var e=Xl.transition;Xl.transition={};try{n()}finally{Xl.transition=e}};Pe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Pe.useCallback=function(n,e){return tn.current.useCallback(n,e)};Pe.useContext=function(n){return tn.current.useContext(n)};Pe.useDebugValue=function(){};Pe.useDeferredValue=function(n){return tn.current.useDeferredValue(n)};Pe.useEffect=function(n,e){return tn.current.useEffect(n,e)};Pe.useId=function(){return tn.current.useId()};Pe.useImperativeHandle=function(n,e,t){return tn.current.useImperativeHandle(n,e,t)};Pe.useInsertionEffect=function(n,e){return tn.current.useInsertionEffect(n,e)};Pe.useLayoutEffect=function(n,e){return tn.current.useLayoutEffect(n,e)};Pe.useMemo=function(n,e){return tn.current.useMemo(n,e)};Pe.useReducer=function(n,e,t){return tn.current.useReducer(n,e,t)};Pe.useRef=function(n){return tn.current.useRef(n)};Pe.useState=function(n){return tn.current.useState(n)};Pe.useSyncExternalStore=function(n,e,t){return tn.current.useSyncExternalStore(n,e,t)};Pe.useTransition=function(){return tn.current.useTransition()};Pe.version="18.2.0";(function(n){n.exports=Pe})(Ty);const Vy=wy(Ma);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gy=Ma,Wy=Symbol.for("react.element"),Hy=Symbol.for("react.fragment"),jy=Object.prototype.hasOwnProperty,Xy=Gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qy={key:!0,ref:!0,__self:!0,__source:!0};function A_(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)jy.call(e,i)&&!qy.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Wy,type:n,key:s,ref:o,props:r,_owner:Xy.current}}Uu.Fragment=Hy;Uu.jsx=A_;Uu.jsxs=A_;(function(n){n.exports=Uu})(Ey);const kf=If.jsx;var Nf={},Of={},Yy={get exports(){return Of},set exports(n){Of=n}},In={},zf={},$y={get exports(){return zf},set exports(n){zf=n}},P_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,H){var G=D.length;D.push(H);e:for(;0<G;){var re=G-1>>>1,k=D[re];if(0<r(k,H))D[re]=H,D[G]=k,G=re;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var H=D[0],G=D.pop();if(G!==H){D[0]=G;e:for(var re=0,k=D.length,Q=k>>>1;re<Q;){var J=2*(re+1)-1,z=D[J],ae=J+1,ue=D[ae];if(0>r(z,G))ae<k&&0>r(ue,z)?(D[re]=ue,D[ae]=G,re=ae):(D[re]=z,D[J]=G,re=J);else if(ae<k&&0>r(ue,G))D[re]=ue,D[ae]=G,re=ae;else break e}}return H}function r(D,H){var G=D.sortIndex-H.sortIndex;return G!==0?G:D.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,x=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var H=t(u);H!==null;){if(H.callback===null)i(u);else if(H.startTime<=D)i(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=t(u)}}function y(D){if(h=!1,v(D),!x)if(t(l)!==null)x=!0,$(M);else{var H=t(u);H!==null&&K(y,H.startTime-D)}}function M(D,H){x=!1,h&&(h=!1,g(S),S=-1),m=!0;var G=f;try{for(v(H),d=t(l);d!==null&&(!(d.expirationTime>H)||D&&!V());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var k=re(d.expirationTime<=H);H=n.unstable_now(),typeof k=="function"?d.callback=k:d===t(l)&&i(l),v(H)}else i(l);d=t(l)}if(d!==null)var Q=!0;else{var J=t(u);J!==null&&K(y,J.startTime-H),Q=!1}return Q}finally{d=null,f=G,m=!1}}var T=!1,b=null,S=-1,w=5,L=-1;function V(){return!(n.unstable_now()-L<w)}function j(){if(b!==null){var D=n.unstable_now();L=D;var H=!0;try{H=b(!0,D)}finally{H?O():(T=!1,b=null)}}else T=!1}var O;if(typeof _=="function")O=function(){_(j)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,W=I.port2;I.port1.onmessage=j,O=function(){W.postMessage(null)}}else O=function(){p(j,0)};function $(D){b=D,T||(T=!0,O())}function K(D,H){S=p(function(){D(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){x||m||(x=!0,$(M))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(f){case 1:case 2:case 3:var H=3;break;default:H=f}var G=f;f=H;try{return D()}finally{f=G}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var G=f;f=D;try{return H()}finally{f=G}},n.unstable_scheduleCallback=function(D,H,G){var re=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?re+G:re):G=re,D){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=G+k,D={id:c++,callback:H,priorityLevel:D,startTime:G,expirationTime:k,sortIndex:-1},G>re?(D.sortIndex=G,e(u,D),t(l)===null&&D===t(u)&&(h?(g(S),S=-1):h=!0,K(y,G-re))):(D.sortIndex=k,e(l,D),x||m||(x=!0,$(M))),D},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(D){var H=f;return function(){var G=f;f=H;try{return D.apply(this,arguments)}finally{f=G}}}})(P_);(function(n){n.exports=P_})($y);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_=Ma,Ln=zf;function ee(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var D_=new Set,wa={};function _s(n,e){po(n,e),po(n+"Capture",e)}function po(n,e){for(wa[n]=e,n=0;n<e.length;n++)D_.add(e[n])}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ff=Object.prototype.hasOwnProperty,Zy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dp={},Rp={};function Ky(n){return Ff.call(Rp,n)?!0:Ff.call(Dp,n)?!1:Zy.test(n)?Rp[n]=!0:(Dp[n]=!0,!1)}function Qy(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Jy(n,e,t,i){if(e===null||typeof e>"u"||Qy(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){kt[n]=new nn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];kt[e]=new nn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){kt[n]=new nn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){kt[n]=new nn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){kt[n]=new nn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){kt[n]=new nn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){kt[n]=new nn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){kt[n]=new nn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){kt[n]=new nn(n,5,!1,n.toLowerCase(),null,!1,!1)});var ih=/[\-:]([a-z])/g;function rh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(ih,rh);kt[e]=new nn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(ih,rh);kt[e]=new nn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(ih,rh);kt[e]=new nn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){kt[n]=new nn(n,1,!1,n.toLowerCase(),null,!1,!1)});kt.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){kt[n]=new nn(n,1,!1,n.toLowerCase(),null,!0,!0)});function sh(n,e,t,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jy(e,t,r,i)&&(t=null),i||r===null?Ky(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Zi=L_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,al=Symbol.for("react.element"),Us=Symbol.for("react.portal"),Bs=Symbol.for("react.fragment"),oh=Symbol.for("react.strict_mode"),Uf=Symbol.for("react.profiler"),R_=Symbol.for("react.provider"),I_=Symbol.for("react.context"),ah=Symbol.for("react.forward_ref"),Bf=Symbol.for("react.suspense"),Vf=Symbol.for("react.suspense_list"),lh=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),k_=Symbol.for("react.offscreen"),Ip=Symbol.iterator;function Uo(n){return n===null||typeof n!="object"?null:(n=Ip&&n[Ip]||n["@@iterator"],typeof n=="function"?n:null)}var rt=Object.assign,_c;function na(n){if(_c===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);_c=e&&e[1]||""}return`
`+_c+n}var vc=!1;function xc(n,e){if(!n||vc)return"";vc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{vc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?na(n):""}function e1(n){switch(n.tag){case 5:return na(n.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return n=xc(n.type,!1),n;case 11:return n=xc(n.type.render,!1),n;case 1:return n=xc(n.type,!0),n;default:return""}}function Gf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Bs:return"Fragment";case Us:return"Portal";case Uf:return"Profiler";case oh:return"StrictMode";case Bf:return"Suspense";case Vf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case I_:return(n.displayName||"Context")+".Consumer";case R_:return(n._context.displayName||"Context")+".Provider";case ah:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case lh:return e=n.displayName||null,e!==null?e:Gf(n.type)||"Memo";case nr:e=n._payload,n=n._init;try{return Gf(n(e))}catch{}}return null}function t1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gf(e);case 8:return e===oh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function N_(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function n1(n){var e=N_(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ll(n){n._valueTracker||(n._valueTracker=n1(n))}function O_(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=N_(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function au(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Wf(n,e){var t=e.checked;return rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function kp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Er(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function z_(n,e){e=e.checked,e!=null&&sh(n,"checked",e,!1)}function Hf(n,e){z_(n,e);var t=Er(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?jf(n,e.type,t):e.hasOwnProperty("defaultValue")&&jf(n,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Np(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function jf(n,e,t){(e!=="number"||au(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ia=Array.isArray;function to(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Er(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Xf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return rt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Op(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ee(92));if(ia(t)){if(1<t.length)throw Error(ee(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Er(t)}}function F_(n,e){var t=Er(e.value),i=Er(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function zp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function U_(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?U_(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ul,B_=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ea(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i1=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(n){i1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ca[e]=ca[n]})});function V_(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ca.hasOwnProperty(n)&&ca[n]?(""+e).trim():e+"px"}function G_(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=V_(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var r1=rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yf(n,e){if(e){if(r1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function $f(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zf=null;function uh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Kf=null,no=null,io=null;function Fp(n){if(n=Ja(n)){if(typeof Kf!="function")throw Error(ee(280));var e=n.stateNode;e&&(e=Hu(e),Kf(n.stateNode,n.type,e))}}function W_(n){no?io?io.push(n):io=[n]:no=n}function H_(){if(no){var n=no,e=io;if(io=no=null,Fp(n),e)for(n=0;n<e.length;n++)Fp(e[n])}}function j_(n,e){return n(e)}function X_(){}var yc=!1;function q_(n,e,t){if(yc)return n(e,t);yc=!0;try{return j_(n,e,t)}finally{yc=!1,(no!==null||io!==null)&&(X_(),H_())}}function Ta(n,e){var t=n.stateNode;if(t===null)return null;var i=Hu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ee(231,e,typeof t));return t}var Qf=!1;if(Hi)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){Qf=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{Qf=!1}function s1(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var fa=!1,lu=null,uu=!1,Jf=null,o1={onError:function(n){fa=!0,lu=n}};function a1(n,e,t,i,r,s,o,a,l){fa=!1,lu=null,s1.apply(o1,arguments)}function l1(n,e,t,i,r,s,o,a,l){if(a1.apply(this,arguments),fa){if(fa){var u=lu;fa=!1,lu=null}else throw Error(ee(198));uu||(uu=!0,Jf=u)}}function vs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Y_(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Up(n){if(vs(n)!==n)throw Error(ee(188))}function u1(n){var e=n.alternate;if(!e){if(e=vs(n),e===null)throw Error(ee(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Up(r),n;if(s===i)return Up(r),e;s=s.sibling}throw Error(ee(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(t.alternate!==i)throw Error(ee(190))}if(t.tag!==3)throw Error(ee(188));return t.stateNode.current===t?n:e}function $_(n){return n=u1(n),n!==null?Z_(n):null}function Z_(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Z_(n);if(e!==null)return e;n=n.sibling}return null}var K_=Ln.unstable_scheduleCallback,Bp=Ln.unstable_cancelCallback,c1=Ln.unstable_shouldYield,f1=Ln.unstable_requestPaint,ut=Ln.unstable_now,d1=Ln.unstable_getCurrentPriorityLevel,ch=Ln.unstable_ImmediatePriority,Q_=Ln.unstable_UserBlockingPriority,cu=Ln.unstable_NormalPriority,h1=Ln.unstable_LowPriority,J_=Ln.unstable_IdlePriority,Bu=null,Ei=null;function p1(n){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(Bu,n,void 0,(n.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:_1,m1=Math.log,g1=Math.LN2;function _1(n){return n>>>=0,n===0?32:31-(m1(n)/g1|0)|0}var cl=64,fl=4194304;function ra(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function fu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ra(a):(s&=o,s!==0&&(i=ra(s)))}else o=t&~r,o!==0?i=ra(o):s!==0&&(i=ra(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-oi(e),r=1<<t,i|=n[t],e&=~r;return i}function v1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-oi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=v1(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function ed(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function e0(){var n=cl;return cl<<=1,!(cl&4194240)&&(cl=64),n}function Sc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ka(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-oi(e),n[e]=t}function y1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-oi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function fh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-oi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ue=0;function t0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var n0,dh,i0,r0,s0,td=!1,dl=[],hr=null,pr=null,mr=null,ba=new Map,Ca=new Map,rr=[],S1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vp(n,e){switch(n){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function Vo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ja(e),e!==null&&dh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function M1(n,e,t,i,r){switch(e){case"focusin":return hr=Vo(hr,n,e,t,i,r),!0;case"dragenter":return pr=Vo(pr,n,e,t,i,r),!0;case"mouseover":return mr=Vo(mr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ba.set(s,Vo(ba.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ca.set(s,Vo(Ca.get(s)||null,n,e,t,i,r)),!0}return!1}function o0(n){var e=Yr(n.target);if(e!==null){var t=vs(e);if(t!==null){if(e=t.tag,e===13){if(e=Y_(t),e!==null){n.blockedOn=e,s0(n.priority,function(){i0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ql(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=nd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Zf=i,t.target.dispatchEvent(i),Zf=null}else return e=Ja(t),e!==null&&dh(e),n.blockedOn=t,!1;e.shift()}return!0}function Gp(n,e,t){ql(n)&&t.delete(e)}function w1(){td=!1,hr!==null&&ql(hr)&&(hr=null),pr!==null&&ql(pr)&&(pr=null),mr!==null&&ql(mr)&&(mr=null),ba.forEach(Gp),Ca.forEach(Gp)}function Go(n,e){n.blockedOn===e&&(n.blockedOn=null,td||(td=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,w1)))}function Aa(n){function e(r){return Go(r,n)}if(0<dl.length){Go(dl[0],n);for(var t=1;t<dl.length;t++){var i=dl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(hr!==null&&Go(hr,n),pr!==null&&Go(pr,n),mr!==null&&Go(mr,n),ba.forEach(e),Ca.forEach(e),t=0;t<rr.length;t++)i=rr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<rr.length&&(t=rr[0],t.blockedOn===null);)o0(t),t.blockedOn===null&&rr.shift()}var ro=Zi.ReactCurrentBatchConfig,du=!0;function E1(n,e,t,i){var r=Ue,s=ro.transition;ro.transition=null;try{Ue=1,hh(n,e,t,i)}finally{Ue=r,ro.transition=s}}function T1(n,e,t,i){var r=Ue,s=ro.transition;ro.transition=null;try{Ue=4,hh(n,e,t,i)}finally{Ue=r,ro.transition=s}}function hh(n,e,t,i){if(du){var r=nd(n,e,t,i);if(r===null)Dc(n,e,i,hu,t),Vp(n,i);else if(M1(r,n,e,t,i))i.stopPropagation();else if(Vp(n,i),e&4&&-1<S1.indexOf(n)){for(;r!==null;){var s=Ja(r);if(s!==null&&n0(s),s=nd(n,e,t,i),s===null&&Dc(n,e,i,hu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Dc(n,e,i,null,t)}}var hu=null;function nd(n,e,t,i){if(hu=null,n=uh(i),n=Yr(n),n!==null)if(e=vs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Y_(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return hu=n,null}function a0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(d1()){case ch:return 1;case Q_:return 4;case cu:case h1:return 16;case J_:return 536870912;default:return 16}default:return 16}}var or=null,ph=null,Yl=null;function l0(){if(Yl)return Yl;var n,e=ph,t=e.length,i,r="value"in or?or.value:or.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Yl=r.slice(n,1<i?1-i:void 0)}function $l(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function hl(){return!0}function Wp(){return!1}function kn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?hl:Wp,this.isPropagationStopped=Wp,this}return rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),e}var Io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mh=kn(Io),Qa=rt({},Io,{view:0,detail:0}),b1=kn(Qa),Mc,wc,Wo,Vu=rt({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wo&&(Wo&&n.type==="mousemove"?(Mc=n.screenX-Wo.screenX,wc=n.screenY-Wo.screenY):wc=Mc=0,Wo=n),Mc)},movementY:function(n){return"movementY"in n?n.movementY:wc}}),Hp=kn(Vu),C1=rt({},Vu,{dataTransfer:0}),A1=kn(C1),P1=rt({},Qa,{relatedTarget:0}),Ec=kn(P1),L1=rt({},Io,{animationName:0,elapsedTime:0,pseudoElement:0}),D1=kn(L1),R1=rt({},Io,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),I1=kn(R1),k1=rt({},Io,{data:0}),jp=kn(k1),N1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=z1[n])?!!e[n]:!1}function gh(){return F1}var U1=rt({},Qa,{key:function(n){if(n.key){var e=N1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=$l(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?O1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gh,charCode:function(n){return n.type==="keypress"?$l(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?$l(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),B1=kn(U1),V1=rt({},Vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=kn(V1),G1=rt({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gh}),W1=kn(G1),H1=rt({},Io,{propertyName:0,elapsedTime:0,pseudoElement:0}),j1=kn(H1),X1=rt({},Vu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),q1=kn(X1),Y1=[9,13,27,32],_h=Hi&&"CompositionEvent"in window,da=null;Hi&&"documentMode"in document&&(da=document.documentMode);var $1=Hi&&"TextEvent"in window&&!da,u0=Hi&&(!_h||da&&8<da&&11>=da),qp=String.fromCharCode(32),Yp=!1;function c0(n,e){switch(n){case"keyup":return Y1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Vs=!1;function Z1(n,e){switch(n){case"compositionend":return f0(e);case"keypress":return e.which!==32?null:(Yp=!0,qp);case"textInput":return n=e.data,n===qp&&Yp?null:n;default:return null}}function K1(n,e){if(Vs)return n==="compositionend"||!_h&&c0(n,e)?(n=l0(),Yl=ph=or=null,Vs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return u0&&e.locale!=="ko"?null:e.data;default:return null}}var Q1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Q1[n.type]:e==="textarea"}function d0(n,e,t,i){W_(i),e=pu(e,"onChange"),0<e.length&&(t=new mh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ha=null,Pa=null;function J1(n){w0(n,0)}function Gu(n){var e=Hs(n);if(O_(e))return n}function eS(n,e){if(n==="change")return e}var h0=!1;if(Hi){var Tc;if(Hi){var bc="oninput"in document;if(!bc){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),bc=typeof Zp.oninput=="function"}Tc=bc}else Tc=!1;h0=Tc&&(!document.documentMode||9<document.documentMode)}function Kp(){ha&&(ha.detachEvent("onpropertychange",p0),Pa=ha=null)}function p0(n){if(n.propertyName==="value"&&Gu(Pa)){var e=[];d0(e,Pa,n,uh(n)),q_(J1,e)}}function tS(n,e,t){n==="focusin"?(Kp(),ha=e,Pa=t,ha.attachEvent("onpropertychange",p0)):n==="focusout"&&Kp()}function nS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Gu(Pa)}function iS(n,e){if(n==="click")return Gu(e)}function rS(n,e){if(n==="input"||n==="change")return Gu(e)}function sS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ci=typeof Object.is=="function"?Object.is:sS;function La(n,e){if(ci(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Ff.call(e,r)||!ci(n[r],e[r]))return!1}return!0}function Qp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jp(n,e){var t=Qp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Qp(t)}}function m0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?m0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function g0(){for(var n=window,e=au();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=au(n.document)}return e}function vh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function oS(n){var e=g0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&m0(t.ownerDocument.documentElement,t)){if(i!==null&&vh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Jp(t,s);var o=Jp(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var aS=Hi&&"documentMode"in document&&11>=document.documentMode,Gs=null,id=null,pa=null,rd=!1;function em(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;rd||Gs==null||Gs!==au(i)||(i=Gs,"selectionStart"in i&&vh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),pa&&La(pa,i)||(pa=i,i=pu(id,"onSelect"),0<i.length&&(e=new mh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Gs)))}function pl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ws={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},Cc={},_0={};Hi&&(_0=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function Wu(n){if(Cc[n])return Cc[n];if(!Ws[n])return n;var e=Ws[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in _0)return Cc[n]=e[t];return n}var v0=Wu("animationend"),x0=Wu("animationiteration"),y0=Wu("animationstart"),S0=Wu("transitionend"),M0=new Map,tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(n,e){M0.set(n,e),_s(e,[n])}for(var Ac=0;Ac<tm.length;Ac++){var Pc=tm[Ac],lS=Pc.toLowerCase(),uS=Pc[0].toUpperCase()+Pc.slice(1);Lr(lS,"on"+uS)}Lr(v0,"onAnimationEnd");Lr(x0,"onAnimationIteration");Lr(y0,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(S0,"onTransitionEnd");po("onMouseEnter",["mouseout","mouseover"]);po("onMouseLeave",["mouseout","mouseover"]);po("onPointerEnter",["pointerout","pointerover"]);po("onPointerLeave",["pointerout","pointerover"]);_s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_s("onBeforeInput",["compositionend","keypress","textInput","paste"]);_s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cS=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function nm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,l1(i,e,void 0,n),n.currentTarget=null}function w0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;nm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;nm(r,a,u),s=l}}}if(uu)throw n=Jf,uu=!1,Jf=null,n}function qe(n,e){var t=e[ud];t===void 0&&(t=e[ud]=new Set);var i=n+"__bubble";t.has(i)||(E0(e,n,2,!1),t.add(i))}function Lc(n,e,t){var i=0;e&&(i|=4),E0(t,n,i,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[ml]){n[ml]=!0,D_.forEach(function(t){t!=="selectionchange"&&(cS.has(t)||Lc(t,!1,n),Lc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ml]||(e[ml]=!0,Lc("selectionchange",!1,e))}}function E0(n,e,t,i){switch(a0(e)){case 1:var r=E1;break;case 4:r=T1;break;default:r=hh}t=r.bind(null,e,t,n),r=void 0,!Qf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Dc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Yr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}q_(function(){var u=s,c=uh(t),d=[];e:{var f=M0.get(n);if(f!==void 0){var m=mh,x=n;switch(n){case"keypress":if($l(t)===0)break e;case"keydown":case"keyup":m=B1;break;case"focusin":x="focus",m=Ec;break;case"focusout":x="blur",m=Ec;break;case"beforeblur":case"afterblur":m=Ec;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=A1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=W1;break;case v0:case x0:case y0:m=D1;break;case S0:m=j1;break;case"scroll":m=b1;break;case"wheel":m=q1;break;case"copy":case"cut":case"paste":m=I1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Xp}var h=(e&4)!==0,p=!h&&n==="scroll",g=h?f!==null?f+"Capture":null:f;h=[];for(var _=u,v;_!==null;){v=_;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,g!==null&&(y=Ta(_,g),y!=null&&h.push(Ra(_,y,v)))),p)break;_=_.return}0<h.length&&(f=new m(f,x,null,t,c),d.push({event:f,listeners:h}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",f&&t!==Zf&&(x=t.relatedTarget||t.fromElement)&&(Yr(x)||x[ji]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=t.relatedTarget||t.toElement,m=u,x=x?Yr(x):null,x!==null&&(p=vs(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(h=Hp,y="onMouseLeave",g="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(h=Xp,y="onPointerLeave",g="onPointerEnter",_="pointer"),p=m==null?f:Hs(m),v=x==null?f:Hs(x),f=new h(y,_+"leave",m,t,c),f.target=p,f.relatedTarget=v,y=null,Yr(c)===u&&(h=new h(g,_+"enter",x,t,c),h.target=v,h.relatedTarget=p,y=h),p=y,m&&x)t:{for(h=m,g=x,_=0,v=h;v;v=Ss(v))_++;for(v=0,y=g;y;y=Ss(y))v++;for(;0<_-v;)h=Ss(h),_--;for(;0<v-_;)g=Ss(g),v--;for(;_--;){if(h===g||g!==null&&h===g.alternate)break t;h=Ss(h),g=Ss(g)}h=null}else h=null;m!==null&&im(d,f,m,h,!1),x!==null&&p!==null&&im(d,p,x,h,!0)}}e:{if(f=u?Hs(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var M=eS;else if($p(f))if(h0)M=rS;else{M=nS;var T=tS}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=iS);if(M&&(M=M(n,u))){d0(d,M,t,c);break e}T&&T(n,f,u),n==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&jf(f,"number",f.value)}switch(T=u?Hs(u):window,n){case"focusin":($p(T)||T.contentEditable==="true")&&(Gs=T,id=u,pa=null);break;case"focusout":pa=id=Gs=null;break;case"mousedown":rd=!0;break;case"contextmenu":case"mouseup":case"dragend":rd=!1,em(d,t,c);break;case"selectionchange":if(aS)break;case"keydown":case"keyup":em(d,t,c)}var b;if(_h)e:{switch(n){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Vs?c0(n,t)&&(S="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(u0&&t.locale!=="ko"&&(Vs||S!=="onCompositionStart"?S==="onCompositionEnd"&&Vs&&(b=l0()):(or=c,ph="value"in or?or.value:or.textContent,Vs=!0)),T=pu(u,S),0<T.length&&(S=new jp(S,n,null,t,c),d.push({event:S,listeners:T}),b?S.data=b:(b=f0(t),b!==null&&(S.data=b)))),(b=$1?Z1(n,t):K1(n,t))&&(u=pu(u,"onBeforeInput"),0<u.length&&(c=new jp("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=b))}w0(d,e)})}function Ra(n,e,t){return{instance:n,listener:e,currentTarget:t}}function pu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ta(n,t),s!=null&&i.unshift(Ra(n,s,r)),s=Ta(n,e),s!=null&&i.push(Ra(n,s,r))),n=n.return}return i}function Ss(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function im(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ta(t,s),l!=null&&o.unshift(Ra(t,l,a))):r||(l=Ta(t,s),l!=null&&o.push(Ra(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var fS=/\r\n?/g,dS=/\u0000|\uFFFD/g;function rm(n){return(typeof n=="string"?n:""+n).replace(fS,`
`).replace(dS,"")}function gl(n,e,t){if(e=rm(e),rm(n)!==e&&t)throw Error(ee(425))}function mu(){}var sd=null,od=null;function ad(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ld=typeof setTimeout=="function"?setTimeout:void 0,hS=typeof clearTimeout=="function"?clearTimeout:void 0,sm=typeof Promise=="function"?Promise:void 0,pS=typeof queueMicrotask=="function"?queueMicrotask:typeof sm<"u"?function(n){return sm.resolve(null).then(n).catch(mS)}:ld;function mS(n){setTimeout(function(){throw n})}function Rc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Aa(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Aa(e)}function gr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function om(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ko=Math.random().toString(36).slice(2),Mi="__reactFiber$"+ko,Ia="__reactProps$"+ko,ji="__reactContainer$"+ko,ud="__reactEvents$"+ko,gS="__reactListeners$"+ko,_S="__reactHandles$"+ko;function Yr(n){var e=n[Mi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ji]||t[Mi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=om(n);n!==null;){if(t=n[Mi])return t;n=om(n)}return e}n=t,t=n.parentNode}return null}function Ja(n){return n=n[Mi]||n[ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ee(33))}function Hu(n){return n[Ia]||null}var cd=[],js=-1;function Dr(n){return{current:n}}function $e(n){0>js||(n.current=cd[js],cd[js]=null,js--)}function He(n,e){js++,cd[js]=n.current,n.current=e}var Tr={},Ht=Dr(Tr),ln=Dr(!1),os=Tr;function mo(n,e){var t=n.type.contextTypes;if(!t)return Tr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function un(n){return n=n.childContextTypes,n!=null}function gu(){$e(ln),$e(Ht)}function am(n,e,t){if(Ht.current!==Tr)throw Error(ee(168));He(Ht,e),He(ln,t)}function T0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,t1(n)||"Unknown",r));return rt({},t,i)}function _u(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Tr,os=Ht.current,He(Ht,n),He(ln,ln.current),!0}function lm(n,e,t){var i=n.stateNode;if(!i)throw Error(ee(169));t?(n=T0(n,e,os),i.__reactInternalMemoizedMergedChildContext=n,$e(ln),$e(Ht),He(Ht,n)):$e(ln),He(ln,t)}var Oi=null,ju=!1,Ic=!1;function b0(n){Oi===null?Oi=[n]:Oi.push(n)}function vS(n){ju=!0,b0(n)}function Rr(){if(!Ic&&Oi!==null){Ic=!0;var n=0,e=Ue;try{var t=Oi;for(Ue=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Oi=null,ju=!1}catch(r){throw Oi!==null&&(Oi=Oi.slice(n+1)),K_(ch,Rr),r}finally{Ue=e,Ic=!1}}return null}var Xs=[],qs=0,vu=null,xu=0,Un=[],Bn=0,as=null,Ui=1,Bi="";function Gr(n,e){Xs[qs++]=xu,Xs[qs++]=vu,vu=n,xu=e}function C0(n,e,t){Un[Bn++]=Ui,Un[Bn++]=Bi,Un[Bn++]=as,as=n;var i=Ui;n=Bi;var r=32-oi(i)-1;i&=~(1<<r),t+=1;var s=32-oi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ui=1<<32-oi(e)+r|t<<r|i,Bi=s+n}else Ui=1<<s|t<<r|i,Bi=n}function xh(n){n.return!==null&&(Gr(n,1),C0(n,1,0))}function yh(n){for(;n===vu;)vu=Xs[--qs],Xs[qs]=null,xu=Xs[--qs],Xs[qs]=null;for(;n===as;)as=Un[--Bn],Un[Bn]=null,Bi=Un[--Bn],Un[Bn]=null,Ui=Un[--Bn],Un[Bn]=null}var bn=null,Tn=null,Qe=!1,ii=null;function A0(n,e){var t=Gn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function um(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,bn=n,Tn=gr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,bn=n,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=as!==null?{id:Ui,overflow:Bi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Gn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,bn=n,Tn=null,!0):!1;default:return!1}}function fd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function dd(n){if(Qe){var e=Tn;if(e){var t=e;if(!um(n,e)){if(fd(n))throw Error(ee(418));e=gr(t.nextSibling);var i=bn;e&&um(n,e)?A0(i,t):(n.flags=n.flags&-4097|2,Qe=!1,bn=n)}}else{if(fd(n))throw Error(ee(418));n.flags=n.flags&-4097|2,Qe=!1,bn=n}}}function cm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;bn=n}function _l(n){if(n!==bn)return!1;if(!Qe)return cm(n),Qe=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!ad(n.type,n.memoizedProps)),e&&(e=Tn)){if(fd(n))throw P0(),Error(ee(418));for(;e;)A0(n,e),e=gr(e.nextSibling)}if(cm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ee(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Tn=gr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Tn=null}}else Tn=bn?gr(n.stateNode.nextSibling):null;return!0}function P0(){for(var n=Tn;n;)n=gr(n.nextSibling)}function go(){Tn=bn=null,Qe=!1}function Sh(n){ii===null?ii=[n]:ii.push(n)}var xS=Zi.ReactCurrentBatchConfig;function ti(n,e){if(n&&n.defaultProps){e=rt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var yu=Dr(null),Su=null,Ys=null,Mh=null;function wh(){Mh=Ys=Su=null}function Eh(n){var e=yu.current;$e(yu),n._currentValue=e}function hd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function so(n,e){Su=n,Mh=Ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(an=!0),n.firstContext=null)}function qn(n){var e=n._currentValue;if(Mh!==n)if(n={context:n,memoizedValue:e,next:null},Ys===null){if(Su===null)throw Error(ee(308));Ys=n,Su.dependencies={lanes:0,firstContext:n}}else Ys=Ys.next=n;return e}var $r=null;function Th(n){$r===null?$r=[n]:$r.push(n)}function L0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Th(e)):(t.next=r.next,r.next=t),e.interleaved=t,Xi(n,i)}function Xi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ir=!1;function bh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Gi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(n,t)}return r=i.interleaved,r===null?(e.next=e,Th(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(n,t)}function Zl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,fh(n,t)}}function fm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Mu(n,e,t,i){var r=n.updateQueue;ir=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,h=a;switch(f=e,m=t,h.tag){case 1:if(x=h.payload,typeof x=="function"){d=x.call(m,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=h.payload,f=typeof x=="function"?x.call(m,d,f):x,f==null)break e;d=rt({},d,f);break e;case 2:ir=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);us|=o,n.lanes=o,n.memoizedState=d}}function dm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var R0=new L_.Component().refs;function pd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:rt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Xu={isMounted:function(n){return(n=n._reactInternals)?vs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=en(),r=xr(n),s=Gi(i,r);s.payload=e,t!=null&&(s.callback=t),e=_r(n,s,r),e!==null&&(ai(e,n,r,i),Zl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=en(),r=xr(n),s=Gi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=_r(n,s,r),e!==null&&(ai(e,n,r,i),Zl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=en(),i=xr(n),r=Gi(t,i);r.tag=2,e!=null&&(r.callback=e),e=_r(n,r,i),e!==null&&(ai(e,n,i,t),Zl(e,n,i))}};function hm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!La(t,i)||!La(r,s):!0}function I0(n,e,t){var i=!1,r=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=qn(s):(r=un(e)?os:Ht.current,i=e.contextTypes,s=(i=i!=null)?mo(n,r):Tr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function pm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Xu.enqueueReplaceState(e,e.state,null)}function md(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=R0,bh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qn(s):(s=un(e)?os:Ht.current,r.context=mo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Xu.enqueueReplaceState(r,r.state,null),Mu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ho(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ee(309));var i=t.stateNode}if(!i)throw Error(ee(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===R0&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ee(284));if(!t._owner)throw Error(ee(290,n))}return n}function vl(n,e){throw n=Object.prototype.toString.call(e),Error(ee(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function mm(n){var e=n._init;return e(n._payload)}function k0(n){function e(g,_){if(n){var v=g.deletions;v===null?(g.deletions=[_],g.flags|=16):v.push(_)}}function t(g,_){if(!n)return null;for(;_!==null;)e(g,_),_=_.sibling;return null}function i(g,_){for(g=new Map;_!==null;)_.key!==null?g.set(_.key,_):g.set(_.index,_),_=_.sibling;return g}function r(g,_){return g=yr(g,_),g.index=0,g.sibling=null,g}function s(g,_,v){return g.index=v,n?(v=g.alternate,v!==null?(v=v.index,v<_?(g.flags|=2,_):v):(g.flags|=2,_)):(g.flags|=1048576,_)}function o(g){return n&&g.alternate===null&&(g.flags|=2),g}function a(g,_,v,y){return _===null||_.tag!==6?(_=Bc(v,g.mode,y),_.return=g,_):(_=r(_,v),_.return=g,_)}function l(g,_,v,y){var M=v.type;return M===Bs?c(g,_,v.props.children,y,v.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===nr&&mm(M)===_.type)?(y=r(_,v.props),y.ref=Ho(g,_,v),y.return=g,y):(y=nu(v.type,v.key,v.props,null,g.mode,y),y.ref=Ho(g,_,v),y.return=g,y)}function u(g,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Vc(v,g.mode,y),_.return=g,_):(_=r(_,v.children||[]),_.return=g,_)}function c(g,_,v,y,M){return _===null||_.tag!==7?(_=ts(v,g.mode,y,M),_.return=g,_):(_=r(_,v),_.return=g,_)}function d(g,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Bc(""+_,g.mode,v),_.return=g,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case al:return v=nu(_.type,_.key,_.props,null,g.mode,v),v.ref=Ho(g,null,_),v.return=g,v;case Us:return _=Vc(_,g.mode,v),_.return=g,_;case nr:var y=_._init;return d(g,y(_._payload),v)}if(ia(_)||Uo(_))return _=ts(_,g.mode,v,null),_.return=g,_;vl(g,_)}return null}function f(g,_,v,y){var M=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:a(g,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case al:return v.key===M?l(g,_,v,y):null;case Us:return v.key===M?u(g,_,v,y):null;case nr:return M=v._init,f(g,_,M(v._payload),y)}if(ia(v)||Uo(v))return M!==null?null:c(g,_,v,y,null);vl(g,v)}return null}function m(g,_,v,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(v)||null,a(_,g,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case al:return g=g.get(y.key===null?v:y.key)||null,l(_,g,y,M);case Us:return g=g.get(y.key===null?v:y.key)||null,u(_,g,y,M);case nr:var T=y._init;return m(g,_,v,T(y._payload),M)}if(ia(y)||Uo(y))return g=g.get(v)||null,c(_,g,y,M,null);vl(_,y)}return null}function x(g,_,v,y){for(var M=null,T=null,b=_,S=_=0,w=null;b!==null&&S<v.length;S++){b.index>S?(w=b,b=null):w=b.sibling;var L=f(g,b,v[S],y);if(L===null){b===null&&(b=w);break}n&&b&&L.alternate===null&&e(g,b),_=s(L,_,S),T===null?M=L:T.sibling=L,T=L,b=w}if(S===v.length)return t(g,b),Qe&&Gr(g,S),M;if(b===null){for(;S<v.length;S++)b=d(g,v[S],y),b!==null&&(_=s(b,_,S),T===null?M=b:T.sibling=b,T=b);return Qe&&Gr(g,S),M}for(b=i(g,b);S<v.length;S++)w=m(b,g,S,v[S],y),w!==null&&(n&&w.alternate!==null&&b.delete(w.key===null?S:w.key),_=s(w,_,S),T===null?M=w:T.sibling=w,T=w);return n&&b.forEach(function(V){return e(g,V)}),Qe&&Gr(g,S),M}function h(g,_,v,y){var M=Uo(v);if(typeof M!="function")throw Error(ee(150));if(v=M.call(v),v==null)throw Error(ee(151));for(var T=M=null,b=_,S=_=0,w=null,L=v.next();b!==null&&!L.done;S++,L=v.next()){b.index>S?(w=b,b=null):w=b.sibling;var V=f(g,b,L.value,y);if(V===null){b===null&&(b=w);break}n&&b&&V.alternate===null&&e(g,b),_=s(V,_,S),T===null?M=V:T.sibling=V,T=V,b=w}if(L.done)return t(g,b),Qe&&Gr(g,S),M;if(b===null){for(;!L.done;S++,L=v.next())L=d(g,L.value,y),L!==null&&(_=s(L,_,S),T===null?M=L:T.sibling=L,T=L);return Qe&&Gr(g,S),M}for(b=i(g,b);!L.done;S++,L=v.next())L=m(b,g,S,L.value,y),L!==null&&(n&&L.alternate!==null&&b.delete(L.key===null?S:L.key),_=s(L,_,S),T===null?M=L:T.sibling=L,T=L);return n&&b.forEach(function(j){return e(g,j)}),Qe&&Gr(g,S),M}function p(g,_,v,y){if(typeof v=="object"&&v!==null&&v.type===Bs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case al:e:{for(var M=v.key,T=_;T!==null;){if(T.key===M){if(M=v.type,M===Bs){if(T.tag===7){t(g,T.sibling),_=r(T,v.props.children),_.return=g,g=_;break e}}else if(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===nr&&mm(M)===T.type){t(g,T.sibling),_=r(T,v.props),_.ref=Ho(g,T,v),_.return=g,g=_;break e}t(g,T);break}else e(g,T);T=T.sibling}v.type===Bs?(_=ts(v.props.children,g.mode,y,v.key),_.return=g,g=_):(y=nu(v.type,v.key,v.props,null,g.mode,y),y.ref=Ho(g,_,v),y.return=g,g=y)}return o(g);case Us:e:{for(T=v.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){t(g,_.sibling),_=r(_,v.children||[]),_.return=g,g=_;break e}else{t(g,_);break}else e(g,_);_=_.sibling}_=Vc(v,g.mode,y),_.return=g,g=_}return o(g);case nr:return T=v._init,p(g,_,T(v._payload),y)}if(ia(v))return x(g,_,v,y);if(Uo(v))return h(g,_,v,y);vl(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(t(g,_.sibling),_=r(_,v),_.return=g,g=_):(t(g,_),_=Bc(v,g.mode,y),_.return=g,g=_),o(g)):t(g,_)}return p}var _o=k0(!0),N0=k0(!1),el={},Ti=Dr(el),ka=Dr(el),Na=Dr(el);function Zr(n){if(n===el)throw Error(ee(174));return n}function Ch(n,e){switch(He(Na,e),He(ka,n),He(Ti,el),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=qf(e,n)}$e(Ti),He(Ti,e)}function vo(){$e(Ti),$e(ka),$e(Na)}function O0(n){Zr(Na.current);var e=Zr(Ti.current),t=qf(e,n.type);e!==t&&(He(ka,n),He(Ti,t))}function Ah(n){ka.current===n&&($e(Ti),$e(ka))}var et=Dr(0);function wu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kc=[];function Ph(){for(var n=0;n<kc.length;n++)kc[n]._workInProgressVersionPrimary=null;kc.length=0}var Kl=Zi.ReactCurrentDispatcher,Nc=Zi.ReactCurrentBatchConfig,ls=0,it=null,_t=null,At=null,Eu=!1,ma=!1,Oa=0,yS=0;function Ot(){throw Error(ee(321))}function Lh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ci(n[t],e[t]))return!1;return!0}function Dh(n,e,t,i,r,s){if(ls=s,it=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Kl.current=n===null||n.memoizedState===null?ES:TS,n=t(i,r),ma){s=0;do{if(ma=!1,Oa=0,25<=s)throw Error(ee(301));s+=1,At=_t=null,e.updateQueue=null,Kl.current=bS,n=t(i,r)}while(ma)}if(Kl.current=Tu,e=_t!==null&&_t.next!==null,ls=0,At=_t=it=null,Eu=!1,e)throw Error(ee(300));return n}function Rh(){var n=Oa!==0;return Oa=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?it.memoizedState=At=n:At=At.next=n,At}function Yn(){if(_t===null){var n=it.alternate;n=n!==null?n.memoizedState:null}else n=_t.next;var e=At===null?it.memoizedState:At.next;if(e!==null)At=e,_t=n;else{if(n===null)throw Error(ee(310));_t=n,n={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},At===null?it.memoizedState=At=n:At=At.next=n}return At}function za(n,e){return typeof e=="function"?e(n):e}function Oc(n){var e=Yn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=_t,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ls&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,it.lanes|=c,us|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ci(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,it.lanes|=s,us|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function zc(n){var e=Yn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ci(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function z0(){}function F0(n,e){var t=it,i=Yn(),r=e(),s=!ci(i.memoizedState,r);if(s&&(i.memoizedState=r,an=!0),i=i.queue,Ih(V0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||At!==null&&At.memoizedState.tag&1){if(t.flags|=2048,Fa(9,B0.bind(null,t,i,r,e),void 0,null),Pt===null)throw Error(ee(349));ls&30||U0(t,e,r)}return r}function U0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=it.updateQueue,e===null?(e={lastEffect:null,stores:null},it.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function B0(n,e,t,i){e.value=t,e.getSnapshot=i,G0(e)&&W0(n)}function V0(n,e,t){return t(function(){G0(e)&&W0(n)})}function G0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ci(n,t)}catch{return!0}}function W0(n){var e=Xi(n,1);e!==null&&ai(e,n,1,-1)}function gm(n){var e=vi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:n},e.queue=n,n=n.dispatch=wS.bind(null,it,n),[e.memoizedState,n]}function Fa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=it.updateQueue,e===null?(e={lastEffect:null,stores:null},it.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function H0(){return Yn().memoizedState}function Ql(n,e,t,i){var r=vi();it.flags|=n,r.memoizedState=Fa(1|e,t,void 0,i===void 0?null:i)}function qu(n,e,t,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if(_t!==null){var o=_t.memoizedState;if(s=o.destroy,i!==null&&Lh(i,o.deps)){r.memoizedState=Fa(e,t,s,i);return}}it.flags|=n,r.memoizedState=Fa(1|e,t,s,i)}function _m(n,e){return Ql(8390656,8,n,e)}function Ih(n,e){return qu(2048,8,n,e)}function j0(n,e){return qu(4,2,n,e)}function X0(n,e){return qu(4,4,n,e)}function q0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Y0(n,e,t){return t=t!=null?t.concat([n]):null,qu(4,4,q0.bind(null,e,n),t)}function kh(){}function $0(n,e){var t=Yn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Lh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Z0(n,e){var t=Yn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Lh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function K0(n,e,t){return ls&21?(ci(t,e)||(t=e0(),it.lanes|=t,us|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,an=!0),n.memoizedState=t)}function SS(n,e){var t=Ue;Ue=t!==0&&4>t?t:4,n(!0);var i=Nc.transition;Nc.transition={};try{n(!1),e()}finally{Ue=t,Nc.transition=i}}function Q0(){return Yn().memoizedState}function MS(n,e,t){var i=xr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},J0(n))ev(e,t);else if(t=L0(n,e,t,i),t!==null){var r=en();ai(t,n,i,r),tv(t,e,i)}}function wS(n,e,t){var i=xr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(J0(n))ev(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ci(a,o)){var l=e.interleaved;l===null?(r.next=r,Th(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=L0(n,e,r,i),t!==null&&(r=en(),ai(t,n,i,r),tv(t,e,i))}}function J0(n){var e=n.alternate;return n===it||e!==null&&e===it}function ev(n,e){ma=Eu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function tv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,fh(n,t)}}var Tu={readContext:qn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},ES={readContext:qn,useCallback:function(n,e){return vi().memoizedState=[n,e===void 0?null:e],n},useContext:qn,useEffect:_m,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ql(4194308,4,q0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ql(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ql(4,2,n,e)},useMemo:function(n,e){var t=vi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=vi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=MS.bind(null,it,n),[i.memoizedState,n]},useRef:function(n){var e=vi();return n={current:n},e.memoizedState=n},useState:gm,useDebugValue:kh,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=gm(!1),e=n[0];return n=SS.bind(null,n[1]),vi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=it,r=vi();if(Qe){if(t===void 0)throw Error(ee(407));t=t()}else{if(t=e(),Pt===null)throw Error(ee(349));ls&30||U0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,_m(V0.bind(null,i,s,n),[n]),i.flags|=2048,Fa(9,B0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=vi(),e=Pt.identifierPrefix;if(Qe){var t=Bi,i=Ui;t=(i&~(1<<32-oi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Oa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=yS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},TS={readContext:qn,useCallback:$0,useContext:qn,useEffect:Ih,useImperativeHandle:Y0,useInsertionEffect:j0,useLayoutEffect:X0,useMemo:Z0,useReducer:Oc,useRef:H0,useState:function(){return Oc(za)},useDebugValue:kh,useDeferredValue:function(n){var e=Yn();return K0(e,_t.memoizedState,n)},useTransition:function(){var n=Oc(za)[0],e=Yn().memoizedState;return[n,e]},useMutableSource:z0,useSyncExternalStore:F0,useId:Q0,unstable_isNewReconciler:!1},bS={readContext:qn,useCallback:$0,useContext:qn,useEffect:Ih,useImperativeHandle:Y0,useInsertionEffect:j0,useLayoutEffect:X0,useMemo:Z0,useReducer:zc,useRef:H0,useState:function(){return zc(za)},useDebugValue:kh,useDeferredValue:function(n){var e=Yn();return _t===null?e.memoizedState=n:K0(e,_t.memoizedState,n)},useTransition:function(){var n=zc(za)[0],e=Yn().memoizedState;return[n,e]},useMutableSource:z0,useSyncExternalStore:F0,useId:Q0,unstable_isNewReconciler:!1};function xo(n,e){try{var t="",i=e;do t+=e1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Fc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function gd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var CS=typeof WeakMap=="function"?WeakMap:Map;function nv(n,e,t){t=Gi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Cu||(Cu=!0,bd=i),gd(n,e)},t}function iv(n,e,t){t=Gi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){gd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){gd(n,e),typeof i!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function vm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new CS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=VS.bind(null,n,e,t),e.then(n,n))}function xm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function ym(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Gi(-1,1),e.tag=2,_r(t,e,1))),t.lanes|=1),n)}var AS=Zi.ReactCurrentOwner,an=!1;function Kt(n,e,t,i){e.child=n===null?N0(e,null,t,i):_o(e,n.child,t,i)}function Sm(n,e,t,i,r){t=t.render;var s=e.ref;return so(e,r),i=Dh(n,e,t,i,s,r),t=Rh(),n!==null&&!an?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qi(n,e,r)):(Qe&&t&&xh(e),e.flags|=1,Kt(n,e,i,r),e.child)}function Mm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Gh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,rv(n,e,s,i,r)):(n=nu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:La,t(o,i)&&n.ref===e.ref)return qi(n,e,r)}return e.flags|=1,n=yr(s,i),n.ref=e.ref,n.return=e,e.child=n}function rv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(La(s,i)&&n.ref===e.ref)if(an=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(an=!0);else return e.lanes=n.lanes,qi(n,e,r)}return _d(n,e,t,i,r)}function sv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Zs,Sn),Sn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,He(Zs,Sn),Sn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,He(Zs,Sn),Sn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,He(Zs,Sn),Sn|=i;return Kt(n,e,r,t),e.child}function ov(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function _d(n,e,t,i,r){var s=un(t)?os:Ht.current;return s=mo(e,s),so(e,r),t=Dh(n,e,t,i,s,r),i=Rh(),n!==null&&!an?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qi(n,e,r)):(Qe&&i&&xh(e),e.flags|=1,Kt(n,e,t,r),e.child)}function wm(n,e,t,i,r){if(un(t)){var s=!0;_u(e)}else s=!1;if(so(e,r),e.stateNode===null)Jl(n,e),I0(e,t,i),md(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=qn(u):(u=un(t)?os:Ht.current,u=mo(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&pm(e,o,i,u),ir=!1;var f=e.memoizedState;o.state=f,Mu(e,i,o,r),l=e.memoizedState,a!==i||f!==l||ln.current||ir?(typeof c=="function"&&(pd(e,t,c,i),l=e.memoizedState),(a=ir||hm(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,D0(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:ti(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=un(t)?os:Ht.current,l=mo(e,l));var m=t.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&pm(e,o,i,l),ir=!1,f=e.memoizedState,o.state=f,Mu(e,i,o,r);var x=e.memoizedState;a!==d||f!==x||ln.current||ir?(typeof m=="function"&&(pd(e,t,m,i),x=e.memoizedState),(u=ir||hm(e,t,u,i,f,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return vd(n,e,t,i,s,r)}function vd(n,e,t,i,r,s){ov(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&lm(e,t,!1),qi(n,e,s);i=e.stateNode,AS.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=_o(e,n.child,null,s),e.child=_o(e,null,a,s)):Kt(n,e,a,s),e.memoizedState=i.state,r&&lm(e,t,!0),e.child}function av(n){var e=n.stateNode;e.pendingContext?am(n,e.pendingContext,e.pendingContext!==e.context):e.context&&am(n,e.context,!1),Ch(n,e.containerInfo)}function Em(n,e,t,i,r){return go(),Sh(r),e.flags|=256,Kt(n,e,t,i),e.child}var xd={dehydrated:null,treeContext:null,retryLane:0};function yd(n){return{baseLanes:n,cachePool:null,transitions:null}}function lv(n,e,t){var i=e.pendingProps,r=et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),He(et,r&1),n===null)return dd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zu(o,i,0,null),n=ts(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=yd(t),e.memoizedState=xd,n):Nh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return PS(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=yr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=yr(a,s):(s=ts(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?yd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=xd,i}return s=n.child,n=s.sibling,i=yr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Nh(n,e){return e=Zu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function xl(n,e,t,i){return i!==null&&Sh(i),_o(e,n.child,null,t),n=Nh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function PS(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Fc(Error(ee(422))),xl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Zu({mode:"visible",children:i.children},r,0,null),s=ts(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_o(e,n.child,null,o),e.child.memoizedState=yd(o),e.memoizedState=xd,s);if(!(e.mode&1))return xl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Fc(s,i,void 0),xl(n,e,o,i)}if(a=(o&n.childLanes)!==0,an||a){if(i=Pt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xi(n,r),ai(i,n,r,-1))}return Vh(),i=Fc(Error(ee(421))),xl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=GS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Tn=gr(r.nextSibling),bn=e,Qe=!0,ii=null,n!==null&&(Un[Bn++]=Ui,Un[Bn++]=Bi,Un[Bn++]=as,Ui=n.id,Bi=n.overflow,as=e),e=Nh(e,i.children),e.flags|=4096,e)}function Tm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),hd(n.return,e,t)}function Uc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function uv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(n,e,i.children,t),i=et.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Tm(n,t,e);else if(n.tag===19)Tm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(He(et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&wu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Uc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&wu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Uc(e,!0,t,null,s);break;case"together":Uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function qi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),us|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ee(153));if(e.child!==null){for(n=e.child,t=yr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=yr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function LS(n,e,t){switch(e.tag){case 3:av(e),go();break;case 5:O0(e);break;case 1:un(e.type)&&_u(e);break;case 4:Ch(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;He(yu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(He(et,et.current&1),e.flags|=128,null):t&e.child.childLanes?lv(n,e,t):(He(et,et.current&1),n=qi(n,e,t),n!==null?n.sibling:null);He(et,et.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return uv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),He(et,et.current),i)break;return null;case 22:case 23:return e.lanes=0,sv(n,e,t)}return qi(n,e,t)}var cv,Sd,fv,dv;cv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Sd=function(){};fv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Zr(Ti.current);var s=null;switch(t){case"input":r=Wf(n,r),i=Wf(n,i),s=[];break;case"select":r=rt({},r,{value:void 0}),i=rt({},i,{value:void 0}),s=[];break;case"textarea":r=Xf(n,r),i=Xf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=mu)}Yf(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&qe("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};dv=function(n,e,t,i){t!==i&&(e.flags|=4)};function jo(n,e){if(!Qe)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function zt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function DS(n,e,t){var i=e.pendingProps;switch(yh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return un(e.type)&&gu(),zt(e),null;case 3:return i=e.stateNode,vo(),$e(ln),$e(Ht),Ph(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(_l(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(Pd(ii),ii=null))),Sd(n,e),zt(e),null;case 5:Ah(e);var r=Zr(Na.current);if(t=e.type,n!==null&&e.stateNode!=null)fv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return zt(e),null}if(n=Zr(Ti.current),_l(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Mi]=e,i[Ia]=s,n=(e.mode&1)!==0,t){case"dialog":qe("cancel",i),qe("close",i);break;case"iframe":case"object":case"embed":qe("load",i);break;case"video":case"audio":for(r=0;r<sa.length;r++)qe(sa[r],i);break;case"source":qe("error",i);break;case"img":case"image":case"link":qe("error",i),qe("load",i);break;case"details":qe("toggle",i);break;case"input":kp(i,s),qe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},qe("invalid",i);break;case"textarea":Op(i,s),qe("invalid",i)}Yf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&gl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&gl(i.textContent,a,n),r=["children",""+a]):wa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&qe("scroll",i)}switch(t){case"input":ll(i),Np(i,s,!0);break;case"textarea":ll(i),zp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=mu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U_(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Mi]=e,n[Ia]=i,cv(n,e,!1,!1),e.stateNode=n;e:{switch(o=$f(t,i),t){case"dialog":qe("cancel",n),qe("close",n),r=i;break;case"iframe":case"object":case"embed":qe("load",n),r=i;break;case"video":case"audio":for(r=0;r<sa.length;r++)qe(sa[r],n);r=i;break;case"source":qe("error",n),r=i;break;case"img":case"image":case"link":qe("error",n),qe("load",n),r=i;break;case"details":qe("toggle",n),r=i;break;case"input":kp(n,i),r=Wf(n,i),qe("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=rt({},i,{value:void 0}),qe("invalid",n);break;case"textarea":Op(n,i),r=Xf(n,i),qe("invalid",n);break;default:r=i}Yf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?G_(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&B_(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ea(n,l):typeof l=="number"&&Ea(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&qe("scroll",n):l!=null&&sh(n,s,l,o))}switch(t){case"input":ll(n),Np(n,i,!1);break;case"textarea":ll(n),zp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Er(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?to(n,!!i.multiple,s,!1):i.defaultValue!=null&&to(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=mu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(n&&e.stateNode!=null)dv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(t=Zr(Na.current),Zr(Ti.current),_l(e)){if(i=e.stateNode,t=e.memoizedProps,i[Mi]=e,(s=i.nodeValue!==t)&&(n=bn,n!==null))switch(n.tag){case 3:gl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&gl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Mi]=e,e.stateNode=i}return zt(e),null;case 13:if($e(et),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&Tn!==null&&e.mode&1&&!(e.flags&128))P0(),go(),e.flags|=98560,s=!1;else if(s=_l(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Mi]=e}else go(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else ii!==null&&(Pd(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||et.current&1?xt===0&&(xt=3):Vh())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return vo(),Sd(n,e),n===null&&Da(e.stateNode.containerInfo),zt(e),null;case 10:return Eh(e.type._context),zt(e),null;case 17:return un(e.type)&&gu(),zt(e),null;case 19:if($e(et),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)jo(s,!1);else{if(xt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=wu(n),o!==null){for(e.flags|=128,jo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return He(et,et.current&1|2),e.child}n=n.sibling}s.tail!==null&&ut()>yo&&(e.flags|=128,i=!0,jo(s,!1),e.lanes=4194304)}else{if(!i)if(n=wu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),jo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Qe)return zt(e),null}else 2*ut()-s.renderingStartTime>yo&&t!==1073741824&&(e.flags|=128,i=!0,jo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ut(),e.sibling=null,t=et.current,He(et,i?t&1|2:t&1),e):(zt(e),null);case 22:case 23:return Bh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function RS(n,e){switch(yh(e),e.tag){case 1:return un(e.type)&&gu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return vo(),$e(ln),$e(Ht),Ph(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Ah(e),null;case 13:if($e(et),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));go()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return $e(et),null;case 4:return vo(),null;case 10:return Eh(e.type._context),null;case 22:case 23:return Bh(),null;case 24:return null;default:return null}}var yl=!1,Bt=!1,IS=typeof WeakSet=="function"?WeakSet:Set,de=null;function $s(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){st(n,e,i)}else t.current=null}function Md(n,e,t){try{t()}catch(i){st(n,e,i)}}var bm=!1;function kS(n,e){if(sd=du,n=g0(),vh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var m;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(od={focusedElem:n,selectionRange:t},du=!1,de=e;de!==null;)if(e=de,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,de=n;else for(;de!==null;){e=de;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var h=x.memoizedProps,p=x.memoizedState,g=e.stateNode,_=g.getSnapshotBeforeUpdate(e.elementType===e.type?h:ti(e.type,h),p);g.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){st(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}return x=bm,bm=!1,x}function ga(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Md(e,t,s)}r=r.next}while(r!==i)}}function Yu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function wd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function hv(n){var e=n.alternate;e!==null&&(n.alternate=null,hv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Mi],delete e[Ia],delete e[ud],delete e[gS],delete e[_S])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function pv(n){return n.tag===5||n.tag===3||n.tag===4}function Cm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||pv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ed(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=mu));else if(i!==4&&(n=n.child,n!==null))for(Ed(n,e,t),n=n.sibling;n!==null;)Ed(n,e,t),n=n.sibling}function Td(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Td(n,e,t),n=n.sibling;n!==null;)Td(n,e,t),n=n.sibling}var Dt=null,ni=!1;function Ki(n,e,t){for(t=t.child;t!==null;)mv(n,e,t),t=t.sibling}function mv(n,e,t){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(Bu,t)}catch{}switch(t.tag){case 5:Bt||$s(t,e);case 6:var i=Dt,r=ni;Dt=null,Ki(n,e,t),Dt=i,ni=r,Dt!==null&&(ni?(n=Dt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Dt.removeChild(t.stateNode));break;case 18:Dt!==null&&(ni?(n=Dt,t=t.stateNode,n.nodeType===8?Rc(n.parentNode,t):n.nodeType===1&&Rc(n,t),Aa(n)):Rc(Dt,t.stateNode));break;case 4:i=Dt,r=ni,Dt=t.stateNode.containerInfo,ni=!0,Ki(n,e,t),Dt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Md(t,e,o),r=r.next}while(r!==i)}Ki(n,e,t);break;case 1:if(!Bt&&($s(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){st(t,e,a)}Ki(n,e,t);break;case 21:Ki(n,e,t);break;case 22:t.mode&1?(Bt=(i=Bt)||t.memoizedState!==null,Ki(n,e,t),Bt=i):Ki(n,e,t);break;default:Ki(n,e,t)}}function Am(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new IS),e.forEach(function(i){var r=WS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Kn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Dt=a.stateNode,ni=!1;break e;case 3:Dt=a.stateNode.containerInfo,ni=!0;break e;case 4:Dt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(Dt===null)throw Error(ee(160));mv(s,o,r),Dt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){st(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gv(e,n),e=e.sibling}function gv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Kn(e,n),gi(n),i&4){try{ga(3,n,n.return),Yu(3,n)}catch(h){st(n,n.return,h)}try{ga(5,n,n.return)}catch(h){st(n,n.return,h)}}break;case 1:Kn(e,n),gi(n),i&512&&t!==null&&$s(t,t.return);break;case 5:if(Kn(e,n),gi(n),i&512&&t!==null&&$s(t,t.return),n.flags&32){var r=n.stateNode;try{Ea(r,"")}catch(h){st(n,n.return,h)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&z_(r,s),$f(a,o);var u=$f(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?G_(r,d):c==="dangerouslySetInnerHTML"?B_(r,d):c==="children"?Ea(r,d):sh(r,c,d,u)}switch(a){case"input":Hf(r,s);break;case"textarea":F_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?to(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?to(r,!!s.multiple,s.defaultValue,!0):to(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ia]=s}catch(h){st(n,n.return,h)}}break;case 6:if(Kn(e,n),gi(n),i&4){if(n.stateNode===null)throw Error(ee(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(h){st(n,n.return,h)}}break;case 3:if(Kn(e,n),gi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(h){st(n,n.return,h)}break;case 4:Kn(e,n),gi(n);break;case 13:Kn(e,n),gi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Fh=ut())),i&4&&Am(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Bt=(u=Bt)||c,Kn(e,n),Bt=u):Kn(e,n),gi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(de=n,c=n.child;c!==null;){for(d=de=c;de!==null;){switch(f=de,m=f.child,f.tag){case 0:case 11:case 14:case 15:ga(4,f,f.return);break;case 1:$s(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(h){st(i,t,h)}}break;case 5:$s(f,f.return);break;case 22:if(f.memoizedState!==null){Lm(d);continue}}m!==null?(m.return=f,de=m):Lm(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=V_("display",o))}catch(h){st(n,n.return,h)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){st(n,n.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kn(e,n),gi(n),i&4&&Am(n);break;case 21:break;default:Kn(e,n),gi(n)}}function gi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(pv(t)){var i=t;break e}t=t.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ea(r,""),i.flags&=-33);var s=Cm(n);Td(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Cm(n);Ed(n,a,o);break;default:throw Error(ee(161))}}catch(l){st(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function NS(n,e,t){de=n,_v(n)}function _v(n,e,t){for(var i=(n.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||yl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Bt;a=yl;var u=Bt;if(yl=o,(Bt=l)&&!u)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Dm(r):l!==null?(l.return=o,de=l):Dm(r);for(;s!==null;)de=s,_v(s),s=s.sibling;de=r,yl=a,Bt=u}Pm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):Pm(n)}}function Pm(n){for(;de!==null;){var e=de;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Yu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ti(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}dm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Aa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Bt||e.flags&512&&wd(e)}catch(f){st(e,e.return,f)}}if(e===n){de=null;break}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}}function Lm(n){for(;de!==null;){var e=de;if(e===n){de=null;break}var t=e.sibling;if(t!==null){t.return=e.return,de=t;break}de=e.return}}function Dm(n){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Yu(4,e)}catch(l){st(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){st(e,r,l)}}var s=e.return;try{wd(e)}catch(l){st(e,s,l)}break;case 5:var o=e.return;try{wd(e)}catch(l){st(e,o,l)}}}catch(l){st(e,e.return,l)}if(e===n){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var OS=Math.ceil,bu=Zi.ReactCurrentDispatcher,Oh=Zi.ReactCurrentOwner,Xn=Zi.ReactCurrentBatchConfig,ze=0,Pt=null,mt=null,It=0,Sn=0,Zs=Dr(0),xt=0,Ua=null,us=0,$u=0,zh=0,_a=null,rn=null,Fh=0,yo=1/0,ki=null,Cu=!1,bd=null,vr=null,Sl=!1,ar=null,Au=0,va=0,Cd=null,eu=-1,tu=0;function en(){return ze&6?ut():eu!==-1?eu:eu=ut()}function xr(n){return n.mode&1?ze&2&&It!==0?It&-It:xS.transition!==null?(tu===0&&(tu=e0()),tu):(n=Ue,n!==0||(n=window.event,n=n===void 0?16:a0(n.type)),n):1}function ai(n,e,t,i){if(50<va)throw va=0,Cd=null,Error(ee(185));Ka(n,t,i),(!(ze&2)||n!==Pt)&&(n===Pt&&(!(ze&2)&&($u|=t),xt===4&&sr(n,It)),cn(n,i),t===1&&ze===0&&!(e.mode&1)&&(yo=ut()+500,ju&&Rr()))}function cn(n,e){var t=n.callbackNode;x1(n,e);var i=fu(n,n===Pt?It:0);if(i===0)t!==null&&Bp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Bp(t),e===1)n.tag===0?vS(Rm.bind(null,n)):b0(Rm.bind(null,n)),pS(function(){!(ze&6)&&Rr()}),t=null;else{switch(t0(i)){case 1:t=ch;break;case 4:t=Q_;break;case 16:t=cu;break;case 536870912:t=J_;break;default:t=cu}t=Tv(t,vv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function vv(n,e){if(eu=-1,tu=0,ze&6)throw Error(ee(327));var t=n.callbackNode;if(oo()&&n.callbackNode!==t)return null;var i=fu(n,n===Pt?It:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Pu(n,i);else{e=i;var r=ze;ze|=2;var s=yv();(Pt!==n||It!==e)&&(ki=null,yo=ut()+500,es(n,e));do try{US();break}catch(a){xv(n,a)}while(1);wh(),bu.current=s,ze=r,mt!==null?e=0:(Pt=null,It=0,e=xt)}if(e!==0){if(e===2&&(r=ed(n),r!==0&&(i=r,e=Ad(n,r))),e===1)throw t=Ua,es(n,0),sr(n,i),cn(n,ut()),t;if(e===6)sr(n,i);else{if(r=n.current.alternate,!(i&30)&&!zS(r)&&(e=Pu(n,i),e===2&&(s=ed(n),s!==0&&(i=s,e=Ad(n,s))),e===1))throw t=Ua,es(n,0),sr(n,i),cn(n,ut()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:Wr(n,rn,ki);break;case 3:if(sr(n,i),(i&130023424)===i&&(e=Fh+500-ut(),10<e)){if(fu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){en(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=ld(Wr.bind(null,n,rn,ki),e);break}Wr(n,rn,ki);break;case 4:if(sr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-oi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ut()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*OS(i/1960))-i,10<i){n.timeoutHandle=ld(Wr.bind(null,n,rn,ki),i);break}Wr(n,rn,ki);break;case 5:Wr(n,rn,ki);break;default:throw Error(ee(329))}}}return cn(n,ut()),n.callbackNode===t?vv.bind(null,n):null}function Ad(n,e){var t=_a;return n.current.memoizedState.isDehydrated&&(es(n,e).flags|=256),n=Pu(n,e),n!==2&&(e=rn,rn=t,e!==null&&Pd(e)),n}function Pd(n){rn===null?rn=n:rn.push.apply(rn,n)}function zS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ci(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(n,e){for(e&=~zh,e&=~$u,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-oi(e),i=1<<t;n[t]=-1,e&=~i}}function Rm(n){if(ze&6)throw Error(ee(327));oo();var e=fu(n,0);if(!(e&1))return cn(n,ut()),null;var t=Pu(n,e);if(n.tag!==0&&t===2){var i=ed(n);i!==0&&(e=i,t=Ad(n,i))}if(t===1)throw t=Ua,es(n,0),sr(n,e),cn(n,ut()),t;if(t===6)throw Error(ee(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Wr(n,rn,ki),cn(n,ut()),null}function Uh(n,e){var t=ze;ze|=1;try{return n(e)}finally{ze=t,ze===0&&(yo=ut()+500,ju&&Rr())}}function cs(n){ar!==null&&ar.tag===0&&!(ze&6)&&oo();var e=ze;ze|=1;var t=Xn.transition,i=Ue;try{if(Xn.transition=null,Ue=1,n)return n()}finally{Ue=i,Xn.transition=t,ze=e,!(ze&6)&&Rr()}}function Bh(){Sn=Zs.current,$e(Zs)}function es(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,hS(t)),mt!==null)for(t=mt.return;t!==null;){var i=t;switch(yh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gu();break;case 3:vo(),$e(ln),$e(Ht),Ph();break;case 5:Ah(i);break;case 4:vo();break;case 13:$e(et);break;case 19:$e(et);break;case 10:Eh(i.type._context);break;case 22:case 23:Bh()}t=t.return}if(Pt=n,mt=n=yr(n.current,null),It=Sn=e,xt=0,Ua=null,zh=$u=us=0,rn=_a=null,$r!==null){for(e=0;e<$r.length;e++)if(t=$r[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}$r=null}return n}function xv(n,e){do{var t=mt;try{if(wh(),Kl.current=Tu,Eu){for(var i=it.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Eu=!1}if(ls=0,At=_t=it=null,ma=!1,Oa=0,Oh.current=null,t===null||t.return===null){xt=1,Ua=e,mt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=xm(o);if(m!==null){m.flags&=-257,ym(m,o,a,s,e),m.mode&1&&vm(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var h=new Set;h.add(l),e.updateQueue=h}else x.add(l);break e}else{if(!(e&1)){vm(s,u,e),Vh();break e}l=Error(ee(426))}}else if(Qe&&a.mode&1){var p=xm(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),ym(p,o,a,s,e),Sh(xo(l,a));break e}}s=l=xo(l,a),xt!==4&&(xt=2),_a===null?_a=[s]:_a.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=nv(s,l,e);fm(s,g);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(vr===null||!vr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=iv(s,a,e);fm(s,y);break e}}s=s.return}while(s!==null)}Mv(t)}catch(M){e=M,mt===t&&t!==null&&(mt=t=t.return);continue}break}while(1)}function yv(){var n=bu.current;return bu.current=Tu,n===null?Tu:n}function Vh(){(xt===0||xt===3||xt===2)&&(xt=4),Pt===null||!(us&268435455)&&!($u&268435455)||sr(Pt,It)}function Pu(n,e){var t=ze;ze|=2;var i=yv();(Pt!==n||It!==e)&&(ki=null,es(n,e));do try{FS();break}catch(r){xv(n,r)}while(1);if(wh(),ze=t,bu.current=i,mt!==null)throw Error(ee(261));return Pt=null,It=0,xt}function FS(){for(;mt!==null;)Sv(mt)}function US(){for(;mt!==null&&!c1();)Sv(mt)}function Sv(n){var e=Ev(n.alternate,n,Sn);n.memoizedProps=n.pendingProps,e===null?Mv(n):mt=e,Oh.current=null}function Mv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=RS(t,e),t!==null){t.flags&=32767,mt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{xt=6,mt=null;return}}else if(t=DS(t,e,Sn),t!==null){mt=t;return}if(e=e.sibling,e!==null){mt=e;return}mt=e=n}while(e!==null);xt===0&&(xt=5)}function Wr(n,e,t){var i=Ue,r=Xn.transition;try{Xn.transition=null,Ue=1,BS(n,e,t,i)}finally{Xn.transition=r,Ue=i}return null}function BS(n,e,t,i){do oo();while(ar!==null);if(ze&6)throw Error(ee(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ee(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(y1(n,s),n===Pt&&(mt=Pt=null,It=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Sl||(Sl=!0,Tv(cu,function(){return oo(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var o=Ue;Ue=1;var a=ze;ze|=4,Oh.current=null,kS(n,t),gv(t,n),oS(od),du=!!sd,od=sd=null,n.current=t,NS(t),f1(),ze=a,Ue=o,Xn.transition=s}else n.current=t;if(Sl&&(Sl=!1,ar=n,Au=r),s=n.pendingLanes,s===0&&(vr=null),p1(t.stateNode),cn(n,ut()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Cu)throw Cu=!1,n=bd,bd=null,n;return Au&1&&n.tag!==0&&oo(),s=n.pendingLanes,s&1?n===Cd?va++:(va=0,Cd=n):va=0,Rr(),null}function oo(){if(ar!==null){var n=t0(Au),e=Xn.transition,t=Ue;try{if(Xn.transition=null,Ue=16>n?16:n,ar===null)var i=!1;else{if(n=ar,ar=null,Au=0,ze&6)throw Error(ee(331));var r=ze;for(ze|=4,de=n.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var c=de;switch(c.tag){case 0:case 11:case 15:ga(8,c,s)}var d=c.child;if(d!==null)d.return=c,de=d;else for(;de!==null;){c=de;var f=c.sibling,m=c.return;if(hv(c),c===u){de=null;break}if(f!==null){f.return=m,de=f;break}de=m}}}var x=s.alternate;if(x!==null){var h=x.child;if(h!==null){x.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ga(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,de=g;break e}de=s.return}}var _=n.current;for(de=_;de!==null;){o=de;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,de=v;else e:for(o=_;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yu(9,a)}}catch(M){st(a,a.return,M)}if(a===o){de=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,de=y;break e}de=a.return}}if(ze=r,Rr(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(Bu,n)}catch{}i=!0}return i}finally{Ue=t,Xn.transition=e}}return!1}function Im(n,e,t){e=xo(t,e),e=nv(n,e,1),n=_r(n,e,1),e=en(),n!==null&&(Ka(n,1,e),cn(n,e))}function st(n,e,t){if(n.tag===3)Im(n,n,t);else for(;e!==null;){if(e.tag===3){Im(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(vr===null||!vr.has(i))){n=xo(t,n),n=iv(e,n,1),e=_r(e,n,1),n=en(),e!==null&&(Ka(e,1,n),cn(e,n));break}}e=e.return}}function VS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=en(),n.pingedLanes|=n.suspendedLanes&t,Pt===n&&(It&t)===t&&(xt===4||xt===3&&(It&130023424)===It&&500>ut()-Fh?es(n,0):zh|=t),cn(n,e)}function wv(n,e){e===0&&(n.mode&1?(e=fl,fl<<=1,!(fl&130023424)&&(fl=4194304)):e=1);var t=en();n=Xi(n,e),n!==null&&(Ka(n,e,t),cn(n,t))}function GS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),wv(n,t)}function WS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),wv(n,t)}var Ev;Ev=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return an=!1,LS(n,e,t);an=!!(n.flags&131072)}else an=!1,Qe&&e.flags&1048576&&C0(e,xu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Jl(n,e),n=e.pendingProps;var r=mo(e,Ht.current);so(e,t),r=Dh(null,e,i,n,r,t);var s=Rh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,_u(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bh(e),r.updater=Xu,e.stateNode=r,r._reactInternals=e,md(e,i,n,t),e=vd(null,e,i,!0,s,t)):(e.tag=0,Qe&&s&&xh(e),Kt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Jl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=jS(i),n=ti(i,n),r){case 0:e=_d(null,e,i,n,t);break e;case 1:e=wm(null,e,i,n,t);break e;case 11:e=Sm(null,e,i,n,t);break e;case 14:e=Mm(null,e,i,ti(i.type,n),t);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),_d(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),wm(n,e,i,r,t);case 3:e:{if(av(e),n===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,D0(n,e),Mu(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=xo(Error(ee(423)),e),e=Em(n,e,i,t,r);break e}else if(i!==r){r=xo(Error(ee(424)),e),e=Em(n,e,i,t,r);break e}else for(Tn=gr(e.stateNode.containerInfo.firstChild),bn=e,Qe=!0,ii=null,t=N0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(go(),i===r){e=qi(n,e,t);break e}Kt(n,e,i,t)}e=e.child}return e;case 5:return O0(e),n===null&&dd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,ad(i,r)?o=null:s!==null&&ad(i,s)&&(e.flags|=32),ov(n,e),Kt(n,e,o,t),e.child;case 6:return n===null&&dd(e),null;case 13:return lv(n,e,t);case 4:return Ch(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=_o(e,null,i,t):Kt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Sm(n,e,i,r,t);case 7:return Kt(n,e,e.pendingProps,t),e.child;case 8:return Kt(n,e,e.pendingProps.children,t),e.child;case 12:return Kt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,He(yu,i._currentValue),i._currentValue=o,s!==null)if(ci(s.value,o)){if(s.children===r.children&&!ln.current){e=qi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),hd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),hd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,so(e,t),r=qn(r),i=i(r),e.flags|=1,Kt(n,e,i,t),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),Mm(n,e,i,r,t);case 15:return rv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Jl(n,e),e.tag=1,un(i)?(n=!0,_u(e)):n=!1,so(e,t),I0(e,i,r),md(e,i,r,t),vd(null,e,i,!0,n,t);case 19:return uv(n,e,t);case 22:return sv(n,e,t)}throw Error(ee(156,e.tag))};function Tv(n,e){return K_(n,e)}function HS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(n,e,t,i){return new HS(n,e,t,i)}function Gh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function jS(n){if(typeof n=="function")return Gh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ah)return 11;if(n===lh)return 14}return 2}function yr(n,e){var t=n.alternate;return t===null?(t=Gn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function nu(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Gh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Bs:return ts(t.children,r,s,e);case oh:o=8,r|=8;break;case Uf:return n=Gn(12,t,e,r|2),n.elementType=Uf,n.lanes=s,n;case Bf:return n=Gn(13,t,e,r),n.elementType=Bf,n.lanes=s,n;case Vf:return n=Gn(19,t,e,r),n.elementType=Vf,n.lanes=s,n;case k_:return Zu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R_:o=10;break e;case I_:o=9;break e;case ah:o=11;break e;case lh:o=14;break e;case nr:o=16,i=null;break e}throw Error(ee(130,n==null?n:typeof n,""))}return e=Gn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ts(n,e,t,i){return n=Gn(7,n,i,e),n.lanes=t,n}function Zu(n,e,t,i){return n=Gn(22,n,i,e),n.elementType=k_,n.lanes=t,n.stateNode={isHidden:!1},n}function Bc(n,e,t){return n=Gn(6,n,null,e),n.lanes=t,n}function Vc(n,e,t){return e=Gn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function XS(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sc(0),this.expirationTimes=Sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Wh(n,e,t,i,r,s,o,a,l){return n=new XS(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(s),n}function qS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function bv(n){if(!n)return Tr;n=n._reactInternals;e:{if(vs(n)!==n||n.tag!==1)throw Error(ee(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(n.tag===1){var t=n.type;if(un(t))return T0(n,t,e)}return e}function Cv(n,e,t,i,r,s,o,a,l){return n=Wh(t,i,!0,n,r,s,o,a,l),n.context=bv(null),t=n.current,i=en(),r=xr(t),s=Gi(i,r),s.callback=e??null,_r(t,s,r),n.current.lanes=r,Ka(n,r,i),cn(n,i),n}function Ku(n,e,t,i){var r=e.current,s=en(),o=xr(r);return t=bv(t),e.context===null?e.context=t:e.pendingContext=t,e=Gi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=_r(r,e,o),n!==null&&(ai(n,r,o,s),Zl(n,r,o)),o}function Lu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function km(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Hh(n,e){km(n,e),(n=n.alternate)&&km(n,e)}function YS(){return null}var Av=typeof reportError=="function"?reportError:function(n){console.error(n)};function jh(n){this._internalRoot=n}Qu.prototype.render=jh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ee(409));Ku(n,e,null,null)};Qu.prototype.unmount=jh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;cs(function(){Ku(null,n,null,null)}),e[ji]=null}};function Qu(n){this._internalRoot=n}Qu.prototype.unstable_scheduleHydration=function(n){if(n){var e=r0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<rr.length&&e!==0&&e<rr[t].priority;t++);rr.splice(t,0,n),t===0&&o0(n)}};function Xh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ju(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Nm(){}function $S(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Lu(o);s.call(u)}}var o=Cv(e,i,n,0,null,!1,!1,"",Nm);return n._reactRootContainer=o,n[ji]=o.current,Da(n.nodeType===8?n.parentNode:n),cs(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Lu(l);a.call(u)}}var l=Wh(n,0,!1,null,null,!1,!1,"",Nm);return n._reactRootContainer=l,n[ji]=l.current,Da(n.nodeType===8?n.parentNode:n),cs(function(){Ku(e,l,t,i)}),l}function ec(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Lu(o);a.call(l)}}Ku(e,o,n,r)}else o=$S(t,e,n,r,i);return Lu(o)}n0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ra(e.pendingLanes);t!==0&&(fh(e,t|1),cn(e,ut()),!(ze&6)&&(yo=ut()+500,Rr()))}break;case 13:cs(function(){var i=Xi(n,1);if(i!==null){var r=en();ai(i,n,1,r)}}),Hh(n,1)}};dh=function(n){if(n.tag===13){var e=Xi(n,134217728);if(e!==null){var t=en();ai(e,n,134217728,t)}Hh(n,134217728)}};i0=function(n){if(n.tag===13){var e=xr(n),t=Xi(n,e);if(t!==null){var i=en();ai(t,n,e,i)}Hh(n,e)}};r0=function(){return Ue};s0=function(n,e){var t=Ue;try{return Ue=n,e()}finally{Ue=t}};Kf=function(n,e,t){switch(e){case"input":if(Hf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Hu(i);if(!r)throw Error(ee(90));O_(i),Hf(i,r)}}}break;case"textarea":F_(n,t);break;case"select":e=t.value,e!=null&&to(n,!!t.multiple,e,!1)}};j_=Uh;X_=cs;var ZS={usingClientEntryPoint:!1,Events:[Ja,Hs,Hu,W_,H_,Uh]},Xo={findFiberByHostInstance:Yr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},KS={bundleType:Xo.bundleType,version:Xo.version,rendererPackageName:Xo.rendererPackageName,rendererConfig:Xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=$_(n),n===null?null:n.stateNode},findFiberByHostInstance:Xo.findFiberByHostInstance||YS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{Bu=Ml.inject(KS),Ei=Ml}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS;In.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(e))throw Error(ee(200));return qS(n,e,null,t)};In.createRoot=function(n,e){if(!Xh(n))throw Error(ee(299));var t=!1,i="",r=Av;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Wh(n,1,!1,null,null,t,!1,i,r),n[ji]=e.current,Da(n.nodeType===8?n.parentNode:n),new jh(e)};In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ee(188)):(n=Object.keys(n).join(","),Error(ee(268,n)));return n=$_(e),n=n===null?null:n.stateNode,n};In.flushSync=function(n){return cs(n)};In.hydrate=function(n,e,t){if(!Ju(e))throw Error(ee(200));return ec(null,n,e,!0,t)};In.hydrateRoot=function(n,e,t){if(!Xh(n))throw Error(ee(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Av;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Cv(e,null,n,1,t??null,r,!1,s,o),n[ji]=e.current,Da(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Qu(e)};In.render=function(n,e,t){if(!Ju(e))throw Error(ee(200));return ec(null,n,e,!1,t)};In.unmountComponentAtNode=function(n){if(!Ju(n))throw Error(ee(40));return n._reactRootContainer?(cs(function(){ec(null,null,n,!1,function(){n._reactRootContainer=null,n[ji]=null})}),!0):!1};In.unstable_batchedUpdates=Uh;In.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Ju(t))throw Error(ee(200));if(n==null||n._reactInternals===void 0)throw Error(ee(38));return ec(n,e,t,!1,i)};In.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=In})(Yy);var Om=Of;Nf.createRoot=Om.createRoot,Nf.hydrateRoot=Om.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qh="150",Ms={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},QS=0,zm=1,JS=2,Pv=1,eM=2,oa=3,br=0,Cn=1,lr=2,Sr=0,ao=1,Fm=2,Um=3,Bm=4,tM=5,Fs=100,nM=101,iM=102,Vm=103,Gm=104,rM=200,sM=201,oM=202,aM=203,Lv=204,Dv=205,lM=206,uM=207,cM=208,fM=209,dM=210,hM=0,pM=1,mM=2,Ld=3,gM=4,_M=5,vM=6,xM=7,Rv=0,yM=1,SM=2,Wi=0,MM=1,wM=2,EM=3,TM=4,bM=5,Iv=300,So=301,Mo=302,Dd=303,Rd=304,tc=306,Id=1e3,ri=1001,kd=1002,Qt=1003,Wm=1004,Gc=1005,Vn=1006,CM=1007,Ba=1008,fs=1009,AM=1010,PM=1011,kv=1012,LM=1013,Kr=1014,Qr=1015,Va=1016,DM=1017,RM=1018,lo=1020,IM=1021,si=1023,kM=1024,NM=1025,ns=1026,wo=1027,OM=1028,zM=1029,FM=1030,UM=1031,BM=1033,Wc=33776,Hc=33777,jc=33778,Xc=33779,Hm=35840,jm=35841,Xm=35842,qm=35843,VM=36196,Ym=37492,$m=37496,Zm=37808,Km=37809,Qm=37810,Jm=37811,eg=37812,tg=37813,ng=37814,ig=37815,rg=37816,sg=37817,og=37818,ag=37819,lg=37820,ug=37821,qc=36492,GM=36283,cg=36284,fg=36285,dg=36286,ds=3e3,Ye=3001,WM=3200,HM=3201,Nv=0,jM=1,xi="srgb",Ga="srgb-linear",Ov="display-p3",Yc=7680,XM=519,hg=35044,pg="300 es",Nd=1035;class xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$c=Math.PI/180,mg=180/Math.PI;function tl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function sn(n,e,t){return Math.max(e,Math.min(t,n))}function qM(n,e){return(n%e+e)%e}function Zc(n,e,t){return(1-t)*n+t*e}function gg(n){return(n&n-1)===0&&n!==0}function YM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function wl(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vn(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],m=i[5],x=i[8],h=r[0],p=r[3],g=r[6],_=r[1],v=r[4],y=r[7],M=r[2],T=r[5],b=r[8];return s[0]=o*h+a*_+l*M,s[3]=o*p+a*v+l*T,s[6]=o*g+a*y+l*b,s[1]=u*h+c*_+d*M,s[4]=u*p+c*v+d*T,s[7]=u*g+c*y+d*b,s[2]=f*h+m*_+x*M,s[5]=f*p+m*v+x*T,s[8]=f*g+m*y+x*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,m=u*s-o*l,x=t*d+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/x;return e[0]=d*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*o)*h,e[3]=f*h,e[4]=(c*t-r*l)*h,e[5]=(r*s-a*t)*h,e[6]=m*h,e[7]=(i*l-u*t)*h,e[8]=(o*t-i*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Kc.makeScale(e,t)),this}rotate(e){return this.premultiply(Kc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kc.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kc=new Jt;function zv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}class hs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],m=s[o+1],x=s[o+2],h=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=h;return}if(d!==h||l!==f||u!==m||c!==x){let p=1-a;const g=l*f+u*m+c*x+d*h,_=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const M=Math.sqrt(v),T=Math.atan2(M,g*_);p=Math.sin(p*T)/M,a=Math.sin(a*T)/M}const y=a*_;if(l=l*p+f*y,u=u*p+m*y,c=c*p+x*y,d=d*p+h*y,p===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=M,u*=M,c*=M,d*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+c*d+l*m-u*f,e[t+1]=l*x+c*f+u*d-a*m,e[t+2]=u*x+c*m+a*f-l*d,e[t+3]=c*x-a*d-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*m*x,this._y=u*m*d-f*c*x,this._z=u*c*x+f*m*d,this._w=u*c*d-f*m*x;break;case"YXZ":this._x=f*c*d+u*m*x,this._y=u*m*d-f*c*x,this._z=u*c*x-f*m*d,this._w=u*c*d+f*m*x;break;case"ZXY":this._x=f*c*d-u*m*x,this._y=u*m*d+f*c*x,this._z=u*c*x+f*m*d,this._w=u*c*d-f*m*x;break;case"ZYX":this._x=f*c*d-u*m*x,this._y=u*m*d+f*c*x,this._z=u*c*x-f*m*d,this._w=u*c*d+f*m*x;break;case"YZX":this._x=f*c*d+u*m*x,this._y=u*m*d+f*c*x,this._z=u*c*x-f*m*d,this._w=u*c*d-f*m*x;break;case"XZY":this._x=f*c*d-u*m*x,this._y=u*m*d-f*c*x,this._z=u*c*x+f*m*d,this._w=u*c*d+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_g.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_g.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,d=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qc=new N,_g=new hs;function uo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Jc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const $M=new Jt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ZM=new Jt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),ur=new N;function KM(n){return n.convertSRGBToLinear(),ur.set(n.r,n.g,n.b).applyMatrix3(ZM),n.setRGB(ur.x,ur.y,ur.z)}function QM(n){return ur.set(n.r,n.g,n.b).applyMatrix3($M),n.setRGB(ur.x,ur.y,ur.z).convertLinearToSRGB()}const JM={[Ga]:n=>n,[xi]:n=>n.convertSRGBToLinear(),[Ov]:KM},ew={[Ga]:n=>n,[xi]:n=>n.convertLinearToSRGB(),[Ov]:QM},$t={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Ga},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=JM[e],r=ew[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Es;class Fv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Es===void 0&&(Es=Wa("canvas")),Es.width=e.width,Es.height=e.height;const i=Es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=uo(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(uo(t[i]/255)*255):t[i]=uo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Uv{constructor(e=null){this.isSource=!0,this.uuid=tl(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ef(r[o].image)):s.push(ef(r[o]))}else s=ef(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ef(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tw=0;class fn extends xs{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=ri,r=ri,s=Vn,o=Ba,a=si,l=fs,u=fn.DEFAULT_ANISOTROPY,c=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tw++}),this.uuid=tl(),this.name="",this.source=new Uv(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Iv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Id:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Id:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Iv;fn.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,i=0,r=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],m=l[5],x=l[9],h=l[2],p=l[6],g=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-h)<.01&&Math.abs(x-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+h)<.1&&Math.abs(x+p)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(m+1)/2,M=(g+1)/2,T=(c+f)/4,b=(d+h)/4,S=(x+p)/4;return v>y&&v>M?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=b/i):y>M?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=S/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=b/s,r=S/s),this.set(i,r,s,t),this}let _=Math.sqrt((p-x)*(p-x)+(d-h)*(d-h)+(f-c)*(f-c));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(d-h)/_,this.z=(f-c)/_,this.w=Math.acos((u+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ps extends xs{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Vn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Uv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bv extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nw extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nl{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)zr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(zr)}else i.boundingBox===null&&i.computeBoundingBox(),tf.copy(i.boundingBox),tf.applyMatrix4(e.matrixWorld),this.union(tf);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zr),zr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),El.subVectors(this.max,qo),Ts.subVectors(e.a,qo),bs.subVectors(e.b,qo),Cs.subVectors(e.c,qo),Qi.subVectors(bs,Ts),Ji.subVectors(Cs,bs),Fr.subVectors(Ts,Cs);let t=[0,-Qi.z,Qi.y,0,-Ji.z,Ji.y,0,-Fr.z,Fr.y,Qi.z,0,-Qi.x,Ji.z,0,-Ji.x,Fr.z,0,-Fr.x,-Qi.y,Qi.x,0,-Ji.y,Ji.x,0,-Fr.y,Fr.x,0];return!nf(t,Ts,bs,Cs,El)||(t=[1,0,0,0,1,0,0,0,1],!nf(t,Ts,bs,Cs,El))?!1:(Tl.crossVectors(Qi,Ji),t=[Tl.x,Tl.y,Tl.z],nf(t,Ts,bs,Cs,El))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new N,new N,new N,new N,new N,new N,new N,new N],zr=new N,tf=new nl,Ts=new N,bs=new N,Cs=new N,Qi=new N,Ji=new N,Fr=new N,qo=new N,El=new N,Tl=new N,Ur=new N;function nf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ur.fromArray(n,s);const a=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),l=e.dot(Ur),u=t.dot(Ur),c=i.dot(Ur);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const iw=new nl,Yo=new N,rf=new N;class nc{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):iw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);const t=Yo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(rf)),this.expandByPoint(Yo.copy(e.center).sub(rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new N,sf=new N,bl=new N,er=new N,of=new N,Cl=new N,af=new N;class Vv{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){sf.copy(e).add(t).multiplyScalar(.5),bl.copy(t).sub(e).normalize(),er.copy(this.origin).sub(sf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(bl),a=er.dot(this.direction),l=-er.dot(bl),u=er.lengthSq(),c=Math.abs(1-o*o);let d,f,m,x;if(c>0)if(d=o*l-a,f=o*a-l,x=s*c,d>=0)if(f>=-x)if(f<=x){const h=1/c;d*=h,f*=h,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+u):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(sf).addScaledVector(bl,f),m}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,r,s){of.subVectors(t,e),Cl.subVectors(i,e),af.crossVectors(of,Cl);let o=this.direction.dot(af),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;er.subVectors(this.origin,e);const l=a*this.direction.dot(Cl.crossVectors(er,Cl));if(l<0)return null;const u=a*this.direction.dot(of.cross(er));if(u<0||l+u>o)return null;const c=-a*er.dot(af);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,d,f,m,x,h,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=c,g[10]=d,g[14]=f,g[3]=m,g[7]=x,g[11]=h,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,m=o*d,x=a*c,h=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=m+x*u,t[5]=f-h*u,t[9]=-a*l,t[2]=h-f*u,t[6]=x+m*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,m=l*d,x=u*c,h=u*d;t[0]=f+h*a,t[4]=x*a-m,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=m*a-x,t[6]=h+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,m=l*d,x=u*c,h=u*d;t[0]=f-h*a,t[4]=-o*d,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*c,t[9]=h-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,m=o*d,x=a*c,h=a*d;t[0]=l*c,t[4]=x*u-m,t[8]=f*u+h,t[1]=l*d,t[5]=h*u+f,t[9]=m*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*u,x=a*l,h=a*u;t[0]=l*c,t[4]=h-f*d,t[8]=x*d+m,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*d+x,t[10]=f-h*d}else if(e.order==="XZY"){const f=o*l,m=o*u,x=a*l,h=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+h,t[5]=o*c,t[9]=m*d-x,t[2]=x*d-m,t[6]=a*c,t[10]=h*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rw,e,sw)}lookAt(e,t,i){const r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),tr.crossVectors(i,xn),tr.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),tr.crossVectors(i,xn)),tr.normalize(),Al.crossVectors(xn,tr),r[0]=tr.x,r[4]=Al.x,r[8]=xn.x,r[1]=tr.y,r[5]=Al.y,r[9]=xn.y,r[2]=tr.z,r[6]=Al.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],m=i[13],x=i[2],h=i[6],p=i[10],g=i[14],_=i[3],v=i[7],y=i[11],M=i[15],T=r[0],b=r[4],S=r[8],w=r[12],L=r[1],V=r[5],j=r[9],O=r[13],I=r[2],W=r[6],$=r[10],K=r[14],D=r[3],H=r[7],G=r[11],re=r[15];return s[0]=o*T+a*L+l*I+u*D,s[4]=o*b+a*V+l*W+u*H,s[8]=o*S+a*j+l*$+u*G,s[12]=o*w+a*O+l*K+u*re,s[1]=c*T+d*L+f*I+m*D,s[5]=c*b+d*V+f*W+m*H,s[9]=c*S+d*j+f*$+m*G,s[13]=c*w+d*O+f*K+m*re,s[2]=x*T+h*L+p*I+g*D,s[6]=x*b+h*V+p*W+g*H,s[10]=x*S+h*j+p*$+g*G,s[14]=x*w+h*O+p*K+g*re,s[3]=_*T+v*L+y*I+M*D,s[7]=_*b+v*V+y*W+M*H,s[11]=_*S+v*j+y*$+M*G,s[15]=_*w+v*O+y*K+M*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],m=e[14],x=e[3],h=e[7],p=e[11],g=e[15];return x*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*m-i*l*m)+h*(+t*l*m-t*u*f+s*o*f-r*o*m+r*u*c-s*l*c)+p*(+t*u*d-t*a*m-s*o*d+i*o*m+s*a*c-i*u*c)+g*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],m=e[11],x=e[12],h=e[13],p=e[14],g=e[15],_=d*p*u-h*f*u+h*l*m-a*p*m-d*l*g+a*f*g,v=x*f*u-c*p*u-x*l*m+o*p*m+c*l*g-o*f*g,y=c*h*u-x*d*u+x*a*m-o*h*m-c*a*g+o*d*g,M=x*d*l-c*h*l-x*a*f+o*h*f+c*a*p-o*d*p,T=t*_+i*v+r*y+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=_*b,e[1]=(h*f*s-d*p*s-h*r*m+i*p*m+d*r*g-i*f*g)*b,e[2]=(a*p*s-h*l*s+h*r*u-i*p*u-a*r*g+i*l*g)*b,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*m-i*l*m)*b,e[4]=v*b,e[5]=(c*p*s-x*f*s+x*r*m-t*p*m-c*r*g+t*f*g)*b,e[6]=(x*l*s-o*p*s-x*r*u+t*p*u+o*r*g-t*l*g)*b,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*m+t*l*m)*b,e[8]=y*b,e[9]=(x*d*s-c*h*s-x*i*m+t*h*m+c*i*g-t*d*g)*b,e[10]=(o*h*s-x*a*s+x*i*u-t*h*u-o*i*g+t*a*g)*b,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*m-t*a*m)*b,e[12]=M*b,e[13]=(c*h*r-x*d*r+x*i*f-t*h*f-c*i*p+t*d*p)*b,e[14]=(x*a*r-o*h*r-x*i*l+t*h*l+o*i*p-t*a*p)*b,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*b,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,m=s*c,x=s*d,h=o*c,p=o*d,g=a*d,_=l*u,v=l*c,y=l*d,M=i.x,T=i.y,b=i.z;return r[0]=(1-(h+g))*M,r[1]=(m+y)*M,r[2]=(x-v)*M,r[3]=0,r[4]=(m-y)*T,r[5]=(1-(f+g))*T,r[6]=(p+_)*T,r[7]=0,r[8]=(x+v)*b,r[9]=(p-_)*b,r[10]=(1-(f+h))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=As.set(r[0],r[1],r[2]).length();const o=As.set(r[4],r[5],r[6]).length(),a=As.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qn.copy(this);const u=1/s,c=1/o,d=1/a;return Qn.elements[0]*=u,Qn.elements[1]*=u,Qn.elements[2]*=u,Qn.elements[4]*=c,Qn.elements[5]*=c,Qn.elements[6]*=c,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,t.setFromRotationMatrix(Qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),d=(t+e)*l,f=(i+r)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const As=new N,Qn=new ct,rw=new N(0,0,0),sw=new N(1,1,1),tr=new N,Al=new N,xn=new N,vg=new ct,xg=new hs;class ic{constructor(e=0,t=0,i=0,r=ic.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xg.setFromEuler(this),this.setFromQuaternion(xg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ic.DEFAULT_ORDER="XYZ";class Gv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ow=0;const yg=new N,Ps=new hs,Di=new ct,Pl=new N,$o=new N,aw=new N,lw=new hs,Sg=new N(1,0,0),Mg=new N(0,1,0),wg=new N(0,0,1),uw={type:"added"},Eg={type:"removed"};class Ze extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ow++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DEFAULT_UP.clone();const e=new N,t=new ic,i=new hs,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Jt}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Gv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(Sg,e)}rotateY(e){return this.rotateOnAxis(Mg,e)}rotateZ(e){return this.rotateOnAxis(wg,e)}translateOnAxis(e,t){return yg.copy(e).applyQuaternion(this.quaternion),this.position.add(yg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sg,e)}translateY(e){return this.translateOnAxis(Mg,e)}translateZ(e){return this.translateOnAxis(wg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pl.copy(e):Pl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt($o,Pl,this.up):Di.lookAt(Pl,$o,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),Ps.setFromRotationMatrix(Di),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(uw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Eg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,aw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,lw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ze.DEFAULT_UP=new N(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new N,Ri=new N,lf=new N,Ii=new N,Ls=new N,Ds=new N,Tg=new N,uf=new N,cf=new N,ff=new N;class Fi{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jn.subVectors(e,t),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jn.subVectors(r,t),Ri.subVectors(i,t),lf.subVectors(e,t);const o=Jn.dot(Jn),a=Jn.dot(Ri),l=Jn.dot(lf),u=Ri.dot(Ri),c=Ri.dot(lf),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,m=(u*l-a*c)*f,x=(o*c-a*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ii),Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ii),l.set(0,0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l}static isFrontFacing(e,t,i,r){return Jn.subVectors(i,t),Ri.subVectors(e,t),Jn.cross(Ri).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Jn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Fi.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ls.subVectors(r,i),Ds.subVectors(s,i),uf.subVectors(e,i);const l=Ls.dot(uf),u=Ds.dot(uf);if(l<=0&&u<=0)return t.copy(i);cf.subVectors(e,r);const c=Ls.dot(cf),d=Ds.dot(cf);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Ls,o);ff.subVectors(e,s);const m=Ls.dot(ff),x=Ds.dot(ff);if(x>=0&&m<=x)return t.copy(s);const h=m*u-l*x;if(h<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Ds,a);const p=c*x-m*d;if(p<=0&&d-c>=0&&m-x>=0)return Tg.subVectors(s,r),a=(d-c)/(d-c+(m-x)),t.copy(r).addScaledVector(Tg,a);const g=1/(p+h+f);return o=h*g,a=f*g,t.copy(i).addScaledVector(Ls,o).addScaledVector(Ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let cw=0;class No extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cw++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=ao,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Lv,this.blendDst=Dv,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ld,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=XM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yc,this.stencilZFail=Yc,this.stencilZPass=Yc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(i.blending=this.blending),this.side!==br&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function df(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$t.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=$t.workingColorSpace){return this.r=e,this.g=t,this.b=i,$t.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=$t.workingColorSpace){if(e=qM(e,1),t=sn(t,0,1),i=sn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=df(o,s,e+1/3),this.g=df(o,s,e),this.b=df(o,s,e-1/3)}return $t.toWorkingColorSpace(this,r),this}setStyle(e,t=xi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,$t.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,$t.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,$t.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,$t.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xi){const i=Wv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}copyLinearToSRGB(e){return this.r=Jc(e.r),this.g=Jc(e.g),this.b=Jc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return $t.fromWorkingColorSpace(Ut.copy(this),e),sn(Ut.r*255,0,255)<<16^sn(Ut.g*255,0,255)<<8^sn(Ut.b*255,0,255)<<0}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$t.workingColorSpace){$t.fromWorkingColorSpace(Ut.copy(this),t);const i=Ut.r,r=Ut.g,s=Ut.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=xi){$t.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,r=Ut.b;return e!==xi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(ei),ei.h+=e,ei.s+=t,ei.l+=i,this.setHSL(ei.h,ei.s,ei.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Ll);const i=Zc(ei.h,Ll.h,t),r=Zc(ei.s,Ll.s,t),s=Zc(ei.l,Ll.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Ve;Ve.NAMES=Wv;class Yh extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new N,Dl=new Te;class li{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hg,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Dl.fromBufferAttribute(this,t),Dl.applyMatrix3(e),this.setXY(t,Dl.x,Dl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wl(t,this.array)),t}setX(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wl(t,this.array)),t}setY(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wl(t,this.array)),t}setW(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),i=vn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hg&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Hv extends li{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class jv extends li{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class An extends li{constructor(e,t,i){super(new Float32Array(e),t,i)}}let fw=0;const On=new ct,hf=new Ze,Rs=new N,yn=new nl,Zo=new nl,Ct=new N;class fi extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fw++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zv(e)?jv:Hv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Jt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,i){return On.makeTranslation(e,t,i),this.applyMatrix4(On),this}scale(e,t,i){return On.makeScale(e,t,i),this.applyMatrix4(On),this}lookAt(e){return hf.lookAt(e),hf.updateMatrix(),this.applyMatrix4(hf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new An(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Zo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(yn.min,Zo.min),yn.expandByPoint(Ct),Ct.addVectors(yn.max,Zo.max),yn.expandByPoint(Ct)):(yn.expandByPoint(Zo.min),yn.expandByPoint(Zo.max))}yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ct.fromBufferAttribute(a,u),l&&(Rs.fromBufferAttribute(e,u),Ct.add(Rs)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let L=0;L<a;L++)u[L]=new N,c[L]=new N;const d=new N,f=new N,m=new N,x=new Te,h=new Te,p=new Te,g=new N,_=new N;function v(L,V,j){d.fromArray(r,L*3),f.fromArray(r,V*3),m.fromArray(r,j*3),x.fromArray(o,L*2),h.fromArray(o,V*2),p.fromArray(o,j*2),f.sub(d),m.sub(d),h.sub(x),p.sub(x);const O=1/(h.x*p.y-p.x*h.y);isFinite(O)&&(g.copy(f).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(O),_.copy(m).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(O),u[L].add(g),u[V].add(g),u[j].add(g),c[L].add(_),c[V].add(_),c[j].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let L=0,V=y.length;L<V;++L){const j=y[L],O=j.start,I=j.count;for(let W=O,$=O+I;W<$;W+=3)v(i[W+0],i[W+1],i[W+2])}const M=new N,T=new N,b=new N,S=new N;function w(L){b.fromArray(s,L*3),S.copy(b);const V=u[L];M.copy(V),M.sub(b.multiplyScalar(b.dot(V))).normalize(),T.crossVectors(S,V);const O=T.dot(c[L])<0?-1:1;l[L*4]=M.x,l[L*4+1]=M.y,l[L*4+2]=M.z,l[L*4+3]=O}for(let L=0,V=y.length;L<V;++L){const j=y[L],O=j.start,I=j.count;for(let W=O,$=O+I;W<$;W+=3)w(i[W+0]),w(i[W+1]),w(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new li(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,c=new N,d=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),h=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,h),o.fromBufferAttribute(t,p),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let m=0,x=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?m=l[h]*a.data.stride+a.offset:m=l[h]*c;for(let g=0;g<c;g++)f[x++]=u[m++]}return new li(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const m=u[d];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,m=d.length;f<m;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bg=new ct,_i=new Vv,Rl=new nc,Cg=new N,Ko=new N,Qo=new N,Jo=new N,pf=new N,Il=new N,kl=new Te,Nl=new Te,Ol=new Te,mf=new N,zl=new N;class gt extends Ze{constructor(e=new fi,t=new Yh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Il.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(pf.fromBufferAttribute(d,e),o?Il.addScaledVector(pf,c):Il.addScaledVector(pf.sub(t),c))}t.add(Il)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(s),_i.copy(e.ray).recast(e.near),Rl.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Rl,Cg)===null||_i.origin.distanceToSquared(Cg)>(e.far-e.near)**2))||(bg.copy(s).invert(),_i.copy(e.ray).applyMatrix4(bg),i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,d=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){const h=d[m],p=r[h.materialIndex],g=Math.max(h.start,f.start),_=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let v=g,y=_;v<y;v+=3){const M=a.getX(v),T=a.getX(v+1),b=a.getX(v+2);o=Fl(this,p,e,_i,u,c,M,T,b),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let h=m,p=x;h<p;h+=3){const g=a.getX(h),_=a.getX(h+1),v=a.getX(h+2);o=Fl(this,r,e,_i,u,c,g,_,v),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){const h=d[m],p=r[h.materialIndex],g=Math.max(h.start,f.start),_=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let v=g,y=_;v<y;v+=3){const M=v,T=v+1,b=v+2;o=Fl(this,p,e,_i,u,c,M,T,b),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let h=m,p=x;h<p;h+=3){const g=h,_=h+1,v=h+2;o=Fl(this,r,e,_i,u,c,g,_,v),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}}}function dw(n,e,t,i,r,s,o,a){let l;if(e.side===Cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===br,a),l===null)return null;zl.copy(a),zl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(zl);return u<t.near||u>t.far?null:{distance:u,point:zl.clone(),object:n}}function Fl(n,e,t,i,r,s,o,a,l){n.getVertexPosition(o,Ko),n.getVertexPosition(a,Qo),n.getVertexPosition(l,Jo);const u=dw(n,e,t,i,Ko,Qo,Jo,mf);if(u){r&&(kl.fromBufferAttribute(r,o),Nl.fromBufferAttribute(r,a),Ol.fromBufferAttribute(r,l),u.uv=Fi.getUV(mf,Ko,Qo,Jo,kl,Nl,Ol,new Te)),s&&(kl.fromBufferAttribute(s,o),Nl.fromBufferAttribute(s,a),Ol.fromBufferAttribute(s,l),u.uv2=Fi.getUV(mf,Ko,Qo,Jo,kl,Nl,Ol,new Te));const c={a:o,b:a,c:l,normal:new N,materialIndex:0};Fi.getNormal(Ko,Qo,Jo,c.normal),u.face=c}return u}class il extends fi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new An(u,3)),this.setAttribute("normal",new An(c,3)),this.setAttribute("uv",new An(d,2));function x(h,p,g,_,v,y,M,T,b,S,w){const L=y/b,V=M/S,j=y/2,O=M/2,I=T/2,W=b+1,$=S+1;let K=0,D=0;const H=new N;for(let G=0;G<$;G++){const re=G*V-O;for(let k=0;k<W;k++){const Q=k*L-j;H[h]=Q*_,H[p]=re*v,H[g]=I,u.push(H.x,H.y,H.z),H[h]=0,H[p]=0,H[g]=T>0?1:-1,c.push(H.x,H.y,H.z),d.push(k/b),d.push(1-G/S),K+=1}}for(let G=0;G<S;G++)for(let re=0;re<b;re++){const k=f+re+W*G,Q=f+re+W*(G+1),J=f+(re+1)+W*(G+1),z=f+(re+1)+W*G;l.push(k,Q,z),l.push(Q,J,z),D+=6}a.addGroup(m,D,w),m+=D,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Eo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=Eo(n[t]);for(const r in i)e[r]=i[r]}return e}function hw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xv(n){return n.getRenderTarget()===null&&n.outputEncoding===Ye?xi:Ga}const pw={clone:Eo,merge:Zt};var mw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ms extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mw,this.fragmentShader=gw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Eo(e.uniforms),this.uniformsGroups=hw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qv extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wn extends qv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mg*2*Math.atan(Math.tan($c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($c*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Is=-90,ks=1;class _w extends Ze{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new wn(Is,ks,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new wn(Is,ks,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new wn(Is,ks,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new wn(Is,ks,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new wn(Is,ks,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new wn(Is,ks,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Wi,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Yv extends fn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:So,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vw extends ps{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Yv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new il(5,5,5),s=new ms({name:"CubemapFromEquirect",uniforms:Eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Sr});s.uniforms.tEquirect.value=t;const o=new gt(r,s),a=t.minFilter;return t.minFilter===Ba&&(t.minFilter=Vn),new _w(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const gf=new N,xw=new N,yw=new Jt;class Hr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=gf.subVectors(i,t).cross(xw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(gf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yw.getNormalMatrix(e),r=this.coplanarPoint(gf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new nc,Ul=new N;class $h{constructor(e=new Hr,t=new Hr,i=new Hr,r=new Hr,s=new Hr,o=new Hr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],m=i[9],x=i[10],h=i[11],p=i[12],g=i[13],_=i[14],v=i[15];return t[0].setComponents(a-r,d-l,h-f,v-p).normalize(),t[1].setComponents(a+r,d+l,h+f,v+p).normalize(),t[2].setComponents(a+s,d+u,h+m,v+g).normalize(),t[3].setComponents(a-s,d-u,h-m,v-g).normalize(),t[4].setComponents(a-o,d-c,h-x,v-_).normalize(),t[5].setComponents(a+o,d+c,h+x,v+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSprite(e){return Ns.center.set(0,0,0),Ns.radius=.7071067811865476,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ul.x=r.normal.x>0?e.max.x:e.min.x,Ul.y=r.normal.y>0?e.max.y:e.min.y,Ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $v(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Sw(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,d,f),u.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,m=c.updateRange;n.bindBuffer(d,u),m.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class Zh extends fi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,m=[],x=[],h=[],p=[];for(let g=0;g<c;g++){const _=g*f-o;for(let v=0;v<u;v++){const y=v*d-s;x.push(y,-_,0),h.push(0,0,1),p.push(v/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const v=_+u*g,y=_+u*(g+1),M=_+1+u*(g+1),T=_+1+u*g;m.push(v,y,T),m.push(y,M,T)}this.setIndex(m),this.setAttribute("position",new An(x,3)),this.setAttribute("normal",new An(h,3)),this.setAttribute("uv",new An(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zh(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ww=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ew=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Aw="vec3 transformed = vec3( position );",Pw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lw=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Dw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Iw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,kw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ow=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Gw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ww=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Xw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yw="gl_FragColor = linearToOutputTexel( gl_FragColor );",$w=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,aE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fE=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,dE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,_E=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vE=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,SE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ME=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,EE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,TE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,IE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,NE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,OE=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,VE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,GE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,WE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,HE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,qE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,eT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,sT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,dT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,hT=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,pT=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,mT=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,gT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,_T=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,vT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,xT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ST=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bT=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,AT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,RT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kT=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,UT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$T=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZT=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,QT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ee={alphamap_fragment:Mw,alphamap_pars_fragment:ww,alphatest_fragment:Ew,alphatest_pars_fragment:Tw,aomap_fragment:bw,aomap_pars_fragment:Cw,begin_vertex:Aw,beginnormal_vertex:Pw,bsdfs:Lw,iridescence_fragment:Dw,bumpmap_pars_fragment:Rw,clipping_planes_fragment:Iw,clipping_planes_pars_fragment:kw,clipping_planes_pars_vertex:Nw,clipping_planes_vertex:Ow,color_fragment:zw,color_pars_fragment:Fw,color_pars_vertex:Uw,color_vertex:Bw,common:Vw,cube_uv_reflection_fragment:Gw,defaultnormal_vertex:Ww,displacementmap_pars_vertex:Hw,displacementmap_vertex:jw,emissivemap_fragment:Xw,emissivemap_pars_fragment:qw,encodings_fragment:Yw,encodings_pars_fragment:$w,envmap_fragment:Zw,envmap_common_pars_fragment:Kw,envmap_pars_fragment:Qw,envmap_pars_vertex:Jw,envmap_physical_pars_fragment:fE,envmap_vertex:eE,fog_vertex:tE,fog_pars_vertex:nE,fog_fragment:iE,fog_pars_fragment:rE,gradientmap_pars_fragment:sE,lightmap_fragment:oE,lightmap_pars_fragment:aE,lights_lambert_fragment:lE,lights_lambert_pars_fragment:uE,lights_pars_begin:cE,lights_toon_fragment:dE,lights_toon_pars_fragment:hE,lights_phong_fragment:pE,lights_phong_pars_fragment:mE,lights_physical_fragment:gE,lights_physical_pars_fragment:_E,lights_fragment_begin:vE,lights_fragment_maps:xE,lights_fragment_end:yE,logdepthbuf_fragment:SE,logdepthbuf_pars_fragment:ME,logdepthbuf_pars_vertex:wE,logdepthbuf_vertex:EE,map_fragment:TE,map_pars_fragment:bE,map_particle_fragment:CE,map_particle_pars_fragment:AE,metalnessmap_fragment:PE,metalnessmap_pars_fragment:LE,morphcolor_vertex:DE,morphnormal_vertex:RE,morphtarget_pars_vertex:IE,morphtarget_vertex:kE,normal_fragment_begin:NE,normal_fragment_maps:OE,normal_pars_fragment:zE,normal_pars_vertex:FE,normal_vertex:UE,normalmap_pars_fragment:BE,clearcoat_normal_fragment_begin:VE,clearcoat_normal_fragment_maps:GE,clearcoat_pars_fragment:WE,iridescence_pars_fragment:HE,output_fragment:jE,packing:XE,premultiplied_alpha_fragment:qE,project_vertex:YE,dithering_fragment:$E,dithering_pars_fragment:ZE,roughnessmap_fragment:KE,roughnessmap_pars_fragment:QE,shadowmap_pars_fragment:JE,shadowmap_pars_vertex:eT,shadowmap_vertex:tT,shadowmask_pars_fragment:nT,skinbase_vertex:iT,skinning_pars_vertex:rT,skinning_vertex:sT,skinnormal_vertex:oT,specularmap_fragment:aT,specularmap_pars_fragment:lT,tonemapping_fragment:uT,tonemapping_pars_fragment:cT,transmission_fragment:fT,transmission_pars_fragment:dT,uv_pars_fragment:hT,uv_pars_vertex:pT,uv_vertex:mT,uv2_pars_fragment:gT,uv2_pars_vertex:_T,uv2_vertex:vT,worldpos_vertex:xT,background_vert:yT,background_frag:ST,backgroundCube_vert:MT,backgroundCube_frag:wT,cube_vert:ET,cube_frag:TT,depth_vert:bT,depth_frag:CT,distanceRGBA_vert:AT,distanceRGBA_frag:PT,equirect_vert:LT,equirect_frag:DT,linedashed_vert:RT,linedashed_frag:IT,meshbasic_vert:kT,meshbasic_frag:NT,meshlambert_vert:OT,meshlambert_frag:zT,meshmatcap_vert:FT,meshmatcap_frag:UT,meshnormal_vert:BT,meshnormal_frag:VT,meshphong_vert:GT,meshphong_frag:WT,meshphysical_vert:HT,meshphysical_frag:jT,meshtoon_vert:XT,meshtoon_frag:qT,points_vert:YT,points_frag:$T,shadow_vert:ZT,shadow_frag:KT,sprite_vert:QT,sprite_frag:JT},se={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Jt},uv2Transform:{value:new Jt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Jt}}},yi={basic:{uniforms:Zt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Zt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Zt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Zt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Zt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Zt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Zt([se.points,se.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Zt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Zt([se.common,se.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Zt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Zt([se.sprite,se.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:Zt([se.common,se.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:Zt([se.lights,se.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};yi.physical={uniforms:Zt([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Te(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const Bl={r:0,b:0,g:0};function e2(n,e,t,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,u,c,d=null,f=0,m=null;function x(p,g){let _=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v));const y=n.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?h(a,l):v&&v.isColor&&(h(v,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===tc)?(c===void 0&&(c=new gt(new il(1,1,1),new ms({name:"BackgroundCubeMaterial",uniforms:Eo(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=v.encoding!==Ye,(d!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new gt(new Zh(2,2),new ms({name:"BackgroundMaterial",uniforms:Eo(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=v.encoding!==Ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function h(p,g){p.getRGB(Bl,Xv(n)),i.buffers.color.setClear(Bl.r,Bl.g,Bl.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:x}}function t2(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function d(I,W,$,K,D){let H=!1;if(o){const G=h(K,$,W);u!==G&&(u=G,m(u.object)),H=g(I,K,$,D),H&&_(I,K,$,D)}else{const G=W.wireframe===!0;(u.geometry!==K.id||u.program!==$.id||u.wireframe!==G)&&(u.geometry=K.id,u.program=$.id,u.wireframe=G,H=!0)}D!==null&&t.update(D,34963),(H||c)&&(c=!1,S(I,W,$,K),D!==null&&n.bindBuffer(34963,t.get(D).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function x(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function h(I,W,$){const K=$.wireframe===!0;let D=a[I.id];D===void 0&&(D={},a[I.id]=D);let H=D[W.id];H===void 0&&(H={},D[W.id]=H);let G=H[K];return G===void 0&&(G=p(f()),H[K]=G),G}function p(I){const W=[],$=[],K=[];for(let D=0;D<r;D++)W[D]=0,$[D]=0,K[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:$,attributeDivisors:K,object:I,attributes:{},index:null}}function g(I,W,$,K){const D=u.attributes,H=W.attributes;let G=0;const re=$.getAttributes();for(const k in re)if(re[k].location>=0){const J=D[k];let z=H[k];if(z===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(z=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(z=I.instanceColor)),J===void 0||J.attribute!==z||z&&J.data!==z.data)return!0;G++}return u.attributesNum!==G||u.index!==K}function _(I,W,$,K){const D={},H=W.attributes;let G=0;const re=$.getAttributes();for(const k in re)if(re[k].location>=0){let J=H[k];J===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));const z={};z.attribute=J,J&&J.data&&(z.data=J.data),D[k]=z,G++}u.attributes=D,u.attributesNum=G,u.index=K}function v(){const I=u.newAttributes;for(let W=0,$=I.length;W<$;W++)I[W]=0}function y(I){M(I,0)}function M(I,W){const $=u.newAttributes,K=u.enabledAttributes,D=u.attributeDivisors;$[I]=1,K[I]===0&&(n.enableVertexAttribArray(I),K[I]=1),D[I]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,W),D[I]=W)}function T(){const I=u.newAttributes,W=u.enabledAttributes;for(let $=0,K=W.length;$<K;$++)W[$]!==I[$]&&(n.disableVertexAttribArray($),W[$]=0)}function b(I,W,$,K,D,H){i.isWebGL2===!0&&($===5124||$===5125)?n.vertexAttribIPointer(I,W,$,D,H):n.vertexAttribPointer(I,W,$,K,D,H)}function S(I,W,$,K){if(i.isWebGL2===!1&&(I.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const D=K.attributes,H=$.getAttributes(),G=W.defaultAttributeValues;for(const re in H){const k=H[re];if(k.location>=0){let Q=D[re];if(Q===void 0&&(re==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),re==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){const J=Q.normalized,z=Q.itemSize,ae=t.get(Q);if(ae===void 0)continue;const ue=ae.buffer,pe=ae.type,he=ae.bytesPerElement;if(Q.isInterleavedBufferAttribute){const Se=Q.data,we=Se.stride,be=Q.offset;if(Se.isInstancedInterleavedBuffer){for(let Ne=0;Ne<k.locationSize;Ne++)M(k.location+Ne,Se.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ne=0;Ne<k.locationSize;Ne++)y(k.location+Ne);n.bindBuffer(34962,ue);for(let Ne=0;Ne<k.locationSize;Ne++)b(k.location+Ne,z/k.locationSize,pe,J,we*he,(be+z/k.locationSize*Ne)*he)}else{if(Q.isInstancedBufferAttribute){for(let Se=0;Se<k.locationSize;Se++)M(k.location+Se,Q.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Se=0;Se<k.locationSize;Se++)y(k.location+Se);n.bindBuffer(34962,ue);for(let Se=0;Se<k.locationSize;Se++)b(k.location+Se,z/k.locationSize,pe,J,z*he,z/k.locationSize*Se*he)}}else if(G!==void 0){const J=G[re];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(k.location,J);break;case 3:n.vertexAttrib3fv(k.location,J);break;case 4:n.vertexAttrib4fv(k.location,J);break;default:n.vertexAttrib1fv(k.location,J)}}}}T()}function w(){j();for(const I in a){const W=a[I];for(const $ in W){const K=W[$];for(const D in K)x(K[D].object),delete K[D];delete W[$]}delete a[I]}}function L(I){if(a[I.id]===void 0)return;const W=a[I.id];for(const $ in W){const K=W[$];for(const D in K)x(K[D].object),delete K[D];delete W[$]}delete a[I.id]}function V(I){for(const W in a){const $=a[W];if($[I.id]===void 0)continue;const K=$[I.id];for(const D in K)x(K[D].object),delete K[D];delete $[I.id]}}function j(){O(),c=!0,u!==l&&(u=l,m(u.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:O,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:V,initAttributes:v,enableAttribute:y,disableUnusedAttributes:T}}function n2(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,u,c,d),t.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function i2(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),f=n.getParameter(35660),m=n.getParameter(3379),x=n.getParameter(34076),h=n.getParameter(34921),p=n.getParameter(36347),g=n.getParameter(36348),_=n.getParameter(36349),v=f>0,y=o||e.has("OES_texture_float"),M=v&&y,T=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:T}}function r2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Hr,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,m){const x=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,g=n.get(d);if(!r||x===null||x.length===0||s&&!p)s?c(null):u();else{const _=s?0:i,v=_*4;let y=g.clippingState||null;l.value=y,y=c(x,f,v,m);for(let M=0;M!==v;++M)y[M]=t[M];g.clippingState=y,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,m,x){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=l.value,x!==!0||p===null){const g=m+h*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,y=m;v!==h;++v,y+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function s2(n){let e=new WeakMap;function t(o,a){return a===Dd?o.mapping=So:a===Rd&&(o.mapping=Mo),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Dd||a===Rd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new vw(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class o2 extends qv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ks=4,Ag=[.125,.215,.35,.446,.526,.582],qr=20,_f=new o2,Pg=new Ve;let vf=null;const jr=(1+Math.sqrt(5))/2,Os=1/jr,Lg=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,jr,Os),new N(0,jr,-Os),new N(Os,0,jr),new N(-Os,0,jr),new N(jr,Os,0),new N(-jr,Os,0)];class Dg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){vf=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vf),e.scissorTest=!1,Vl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===So||e.mapping===Mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vf=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Va,format:si,encoding:ds,depthBuffer:!1},r=Rg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a2(s)),this._blurMaterial=l2(s,e,t)}return r}_compileMaterial(e){const t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,_f)}_sceneToCubeUV(e,t,i,r){const a=new wn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Pg),c.toneMapping=Wi,c.autoClear=!1;const m=new Yh({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),x=new gt(new il,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(Pg),h=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):_===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const v=this._cubeSize;Vl(r,_*v,g>2?v:0,v,v),c.setRenderTarget(r),h&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===So||e.mapping===Mo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ig());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new gt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Vl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,_f)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Lg[(r-1)%Lg.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new gt(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*qr-1),h=s/x,p=isFinite(s)?1+Math.floor(c*h):qr;p>qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qr}`);const g=[];let _=0;for(let b=0;b<qr;++b){const S=b/h,w=Math.exp(-S*S/2);g.push(w),b===0?_+=w:b<p&&(_+=2*w)}for(let b=0;b<g.length;b++)g[b]=g[b]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-i;const y=this._sizeLods[r],M=3*y*(r>v-Ks?r-v+Ks:0),T=4*(this._cubeSize-y);Vl(t,M,T,3*y,2*y),l.setRenderTarget(t),l.render(d,_f)}}function a2(n){const e=[],t=[],i=[];let r=n;const s=n-Ks+1+Ag.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ks?l=Ag[o-n+Ks-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,x=6,h=3,p=2,g=1,_=new Float32Array(h*x*m),v=new Float32Array(p*x*m),y=new Float32Array(g*x*m);for(let T=0;T<m;T++){const b=T%3*2/3-1,S=T>2?0:-1,w=[b,S,0,b+2/3,S,0,b+2/3,S+1,0,b,S,0,b+2/3,S+1,0,b,S+1,0];_.set(w,h*x*T),v.set(f,p*x*T);const L=[T,T,T,T,T,T];y.set(L,g*x*T)}const M=new fi;M.setAttribute("position",new li(_,h)),M.setAttribute("uv",new li(v,p)),M.setAttribute("faceIndex",new li(y,g)),e.push(M),r>Ks&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rg(n,e,t){const i=new ps(n,e,t);return i.texture.mapping=tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function l2(n,e,t){const i=new Float32Array(qr),r=new N(0,1,0);return new ms({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Ig(){return new ms({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function kg(){return new ms({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Kh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function u2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Dd||l===Rd,c=l===So||l===Mo;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Dg(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new Dg(n));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function c2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function f2(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],34962);const m=d.morphAttributes;for(const x in m){const h=m[x];for(let p=0,g=h.length;p<g;p++)e.update(h[p],34962)}}function u(d){const f=[],m=d.index,x=d.attributes.position;let h=0;if(m!==null){const _=m.array;h=m.version;for(let v=0,y=_.length;v<y;v+=3){const M=_[v+0],T=_[v+1],b=_[v+2];f.push(M,T,T,b,b,M)}}else{const _=x.array;h=x.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const M=v+0,T=v+1,b=v+2;f.push(M,T,T,b,b,M)}}const p=new(zv(f)?jv:Hv)(f,1);p.version=h;const g=s.get(d);g&&e.remove(g),s.set(d,p)}function c(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function d2(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,m){n.drawElements(s,m,a,f*l),t.update(m,s,1)}function d(f,m,x){if(x===0)return;let h,p;if(r)h=n,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,m,a,f*l,x),t.update(m,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function h2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function p2(n,e){return n[0]-e[0]}function m2(n,e){return Math.abs(e[1])-Math.abs(n[1])}function g2(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Je,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=x!==void 0?x.length:0;let p=s.get(c);if(p===void 0||p.count!==h){let W=function(){O.dispose(),s.delete(c),c.removeEventListener("dispose",W)};var m=W;p!==void 0&&p.texture.dispose();const v=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],S=c.morphAttributes.color||[];let w=0;v===!0&&(w=1),y===!0&&(w=2),M===!0&&(w=3);let L=c.attributes.position.count*w,V=1;L>e.maxTextureSize&&(V=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const j=new Float32Array(L*V*4*h),O=new Bv(j,L,V,h);O.type=Qr,O.needsUpdate=!0;const I=w*4;for(let $=0;$<h;$++){const K=T[$],D=b[$],H=S[$],G=L*V*4*$;for(let re=0;re<K.count;re++){const k=re*I;v===!0&&(o.fromBufferAttribute(K,re),j[G+k+0]=o.x,j[G+k+1]=o.y,j[G+k+2]=o.z,j[G+k+3]=0),y===!0&&(o.fromBufferAttribute(D,re),j[G+k+4]=o.x,j[G+k+5]=o.y,j[G+k+6]=o.z,j[G+k+7]=0),M===!0&&(o.fromBufferAttribute(H,re),j[G+k+8]=o.x,j[G+k+9]=o.y,j[G+k+10]=o.z,j[G+k+11]=H.itemSize===4?o.w:1)}}p={count:h,texture:O,size:new Te(L,V)},s.set(c,p),c.addEventListener("dispose",W)}let g=0;for(let v=0;v<f.length;v++)g+=f[v];const _=c.morphTargetsRelative?1:1-g;d.getUniforms().setValue(n,"morphTargetBaseInfluence",_),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const x=f===void 0?0:f.length;let h=i[c.id];if(h===void 0||h.length!==x){h=[];for(let y=0;y<x;y++)h[y]=[y,0];i[c.id]=h}for(let y=0;y<x;y++){const M=h[y];M[0]=y,M[1]=f[y]}h.sort(m2);for(let y=0;y<8;y++)y<x&&h[y][1]?(a[y][0]=h[y][0],a[y][1]=h[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(p2);const p=c.morphAttributes.position,g=c.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const M=a[y],T=M[0],b=M[1];T!==Number.MAX_SAFE_INTEGER&&b?(p&&c.getAttribute("morphTarget"+y)!==p[T]&&c.setAttribute("morphTarget"+y,p[T]),g&&c.getAttribute("morphNormal"+y)!==g[T]&&c.setAttribute("morphNormal"+y,g[T]),r[y]=b,_+=b):(p&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),g&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const v=c.morphTargetsRelative?1:1-_;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function _2(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Zv=new fn,Kv=new Bv,Qv=new nw,Jv=new Yv,Ng=[],Og=[],zg=new Float32Array(16),Fg=new Float32Array(9),Ug=new Float32Array(4);function Oo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ng[r];if(s===void 0&&(s=new Float32Array(r),Ng[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function St(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function rc(n,e){let t=Og[e];t===void 0&&(t=new Int32Array(e),Og[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function v2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function x2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),St(t,e)}}function y2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),St(t,e)}}function S2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),St(t,e)}}function M2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;Ug.set(i),n.uniformMatrix2fv(this.addr,!1,Ug),St(t,i)}}function w2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;Fg.set(i),n.uniformMatrix3fv(this.addr,!1,Fg),St(t,i)}}function E2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(yt(t,i))return;zg.set(i),n.uniformMatrix4fv(this.addr,!1,zg),St(t,i)}}function T2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function b2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),St(t,e)}}function C2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),St(t,e)}}function A2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),St(t,e)}}function P2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function L2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),St(t,e)}}function D2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),St(t,e)}}function R2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),St(t,e)}}function I2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Zv,r)}function k2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Qv,r)}function N2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Jv,r)}function O2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Kv,r)}function z2(n){switch(n){case 5126:return v2;case 35664:return x2;case 35665:return y2;case 35666:return S2;case 35674:return M2;case 35675:return w2;case 35676:return E2;case 5124:case 35670:return T2;case 35667:case 35671:return b2;case 35668:case 35672:return C2;case 35669:case 35673:return A2;case 5125:return P2;case 36294:return L2;case 36295:return D2;case 36296:return R2;case 35678:case 36198:case 36298:case 36306:case 35682:return I2;case 35679:case 36299:case 36307:return k2;case 35680:case 36300:case 36308:case 36293:return N2;case 36289:case 36303:case 36311:case 36292:return O2}}function F2(n,e){n.uniform1fv(this.addr,e)}function U2(n,e){const t=Oo(e,this.size,2);n.uniform2fv(this.addr,t)}function B2(n,e){const t=Oo(e,this.size,3);n.uniform3fv(this.addr,t)}function V2(n,e){const t=Oo(e,this.size,4);n.uniform4fv(this.addr,t)}function G2(n,e){const t=Oo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function W2(n,e){const t=Oo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function H2(n,e){const t=Oo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function j2(n,e){n.uniform1iv(this.addr,e)}function X2(n,e){n.uniform2iv(this.addr,e)}function q2(n,e){n.uniform3iv(this.addr,e)}function Y2(n,e){n.uniform4iv(this.addr,e)}function $2(n,e){n.uniform1uiv(this.addr,e)}function Z2(n,e){n.uniform2uiv(this.addr,e)}function K2(n,e){n.uniform3uiv(this.addr,e)}function Q2(n,e){n.uniform4uiv(this.addr,e)}function J2(n,e,t){const i=this.cache,r=e.length,s=rc(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Zv,s[o])}function e3(n,e,t){const i=this.cache,r=e.length,s=rc(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Qv,s[o])}function t3(n,e,t){const i=this.cache,r=e.length,s=rc(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Jv,s[o])}function n3(n,e,t){const i=this.cache,r=e.length,s=rc(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),St(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Kv,s[o])}function i3(n){switch(n){case 5126:return F2;case 35664:return U2;case 35665:return B2;case 35666:return V2;case 35674:return G2;case 35675:return W2;case 35676:return H2;case 5124:case 35670:return j2;case 35667:case 35671:return X2;case 35668:case 35672:return q2;case 35669:case 35673:return Y2;case 5125:return $2;case 36294:return Z2;case 36295:return K2;case 36296:return Q2;case 35678:case 36198:case 36298:case 36306:case 35682:return J2;case 35679:case 36299:case 36307:return e3;case 35680:case 36300:case 36308:case 36293:return t3;case 36289:case 36303:case 36311:case 36292:return n3}}class r3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=z2(t.type)}}class s3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=i3(t.type)}}class o3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const xf=/(\w+)(\])?(\[|\.)?/g;function Bg(n,e){n.seq.push(e),n.map[e.id]=e}function a3(n,e,t){const i=n.name,r=i.length;for(xf.lastIndex=0;;){const s=xf.exec(i),o=xf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Bg(t,u===void 0?new r3(a,n,e):new s3(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new o3(a),Bg(t,d)),t=d}}}class iu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);a3(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Vg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let l3=0;function u3(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function c3(n){switch(n){case ds:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Gg(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+u3(n.getShaderSource(e),o)}else return r}function f3(n,e){const t=c3(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function d3(n,e){let t;switch(e){case MM:t="Linear";break;case wM:t="Reinhard";break;case EM:t="OptimizedCineon";break;case TM:t="ACESFilmic";break;case bM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function h3(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(aa).join(`
`)}function p3(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function m3(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function aa(n){return n!==""}function Wg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const g3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(n){return n.replace(g3,_3)}function _3(n,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Od(t)}const v3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jg(n){return n.replace(v3,x3)}function x3(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xg(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function y3(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===eM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oa&&(e="SHADOWMAP_TYPE_VSM"),e}function S3(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case So:case Mo:e="ENVMAP_TYPE_CUBE";break;case tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M3(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Mo:e="ENVMAP_MODE_REFRACTION";break}return e}function w3(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rv:e="ENVMAP_BLENDING_MULTIPLY";break;case yM:e="ENVMAP_BLENDING_MIX";break;case SM:e="ENVMAP_BLENDING_ADD";break}return e}function E3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function T3(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=y3(t),u=S3(t),c=M3(t),d=w3(t),f=E3(t),m=t.isWebGL2?"":h3(t),x=p3(s),h=r.createProgram();let p,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[x].filter(aa).join(`
`),p.length>0&&(p+=`
`),g=[m,x].filter(aa).join(`
`),g.length>0&&(g+=`
`)):(p=[Xg(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),g=[m,Xg(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?Ee.tonemapping_pars_fragment:"",t.toneMapping!==Wi?d3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.encodings_pars_fragment,f3("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),o=Od(o),o=Wg(o,t),o=Hg(o,t),a=Od(a),a=Wg(a,t),a=Hg(a,t),o=jg(o),a=jg(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===pg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=_+p+o,y=_+g+a,M=Vg(r,35633,v),T=Vg(r,35632,y);if(r.attachShader(h,M),r.attachShader(h,T),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),n.debug.checkShaderErrors){const w=r.getProgramInfoLog(h).trim(),L=r.getShaderInfoLog(M).trim(),V=r.getShaderInfoLog(T).trim();let j=!0,O=!0;if(r.getProgramParameter(h,35714)===!1){j=!1;const I=Gg(r,M,"vertex"),W=Gg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+w+`
`+I+`
`+W)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(L===""||V==="")&&(O=!1);O&&(this.diagnostics={runnable:j,programLog:w,vertexShader:{log:L,prefix:p},fragmentShader:{log:V,prefix:g}})}r.deleteShader(M),r.deleteShader(T);let b;this.getUniforms=function(){return b===void 0&&(b=new iu(r,h)),b};let S;return this.getAttributes=function(){return S===void 0&&(S=m3(r,h)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=l3++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=M,this.fragmentShader=T,this}let b3=0;class C3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new A3(e),t.set(e,i)),i}}class A3{constructor(e){this.id=b3++,this.code=e,this.usedTimes=0}}function P3(n,e,t,i,r,s,o){const a=new Gv,l=new C3,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(S,w,L,V,j){const O=V.fog,I=j.geometry,W=S.isMeshStandardMaterial?V.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),K=$&&$.mapping===tc?$.image.height:null,D=x[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const H=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,G=H!==void 0?H.length:0;let re=0;I.morphAttributes.position!==void 0&&(re=1),I.morphAttributes.normal!==void 0&&(re=2),I.morphAttributes.color!==void 0&&(re=3);let k,Q,J,z;if(D){const we=yi[D];k=we.vertexShader,Q=we.fragmentShader}else k=S.vertexShader,Q=S.fragmentShader,l.update(S),J=l.getVertexShaderID(S),z=l.getFragmentShaderID(S);const ae=n.getRenderTarget(),ue=S.alphaTest>0,pe=S.clearcoat>0,he=S.iridescence>0;return{isWebGL2:c,shaderID:D,shaderName:S.type,vertexShader:k,fragmentShader:Q,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:f,outputEncoding:ae===null?n.outputEncoding:ae.isXRRenderTarget===!0?ae.texture.encoding:ds,map:!!S.map,matcap:!!S.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:K,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===jM,tangentSpaceNormalMap:S.normalMapType===Nv,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===Ye,clearcoat:pe,clearcoatMap:pe&&!!S.clearcoatMap,clearcoatRoughnessMap:pe&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!S.clearcoatNormalMap,iridescence:he,iridescenceMap:he&&!!S.iridescenceMap,iridescenceThicknessMap:he&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===ao,alphaMap:!!S.alphaMap,alphaTest:ue,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!I.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.iridescenceMap||S.iridescenceThicknessMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!O,useFog:S.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:Wi,useLegacyLights:n.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===lr,flipSided:S.side===Cn,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)w.push(L),w.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(g(w,S),_(w,S),w.push(n.outputEncoding)),w.push(S.customProgramCacheKey),w.join()}function g(S,w){S.push(w.precision),S.push(w.outputEncoding),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.combine),S.push(w.vertexUvs),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function _(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),S.push(a.mask)}function v(S){const w=x[S.type];let L;if(w){const V=yi[w];L=pw.clone(V.uniforms)}else L=S.uniforms;return L}function y(S,w){let L;for(let V=0,j=u.length;V<j;V++){const O=u[V];if(O.cacheKey===w){L=O,++L.usedTimes;break}}return L===void 0&&(L=new T3(n,w,S,s),u.push(L)),L}function M(S){if(--S.usedTimes===0){const w=u.indexOf(S);u[w]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function b(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:b}}function L3(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function D3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function qg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,m,x,h,p){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:m,groupOrder:x,renderOrder:d.renderOrder,z:h,group:p},n[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=m,g.groupOrder=x,g.renderOrder=d.renderOrder,g.z=h,g.group=p),e++,g}function a(d,f,m,x,h,p){const g=o(d,f,m,x,h,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):t.push(g)}function l(d,f,m,x,h,p){const g=o(d,f,m,x,h,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function u(d,f){t.length>1&&t.sort(d||D3),i.length>1&&i.sort(f||qg),r.length>1&&r.sort(f||qg)}function c(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function R3(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Yg,n.set(i,[o])):r>=s.length?(o=new Yg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function I3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ve};break;case"SpotLight":t={position:new N,direction:new N,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function k3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let N3=0;function O3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function z3(n,e){const t=new I3,i=k3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new N);const s=new N,o=new ct,a=new ct;function l(c,d){let f=0,m=0,x=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let h=0,p=0,g=0,_=0,v=0,y=0,M=0,T=0,b=0,S=0;c.sort(O3);const w=d===!0?Math.PI:1;for(let V=0,j=c.length;V<j;V++){const O=c[V],I=O.color,W=O.intensity,$=O.distance,K=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=I.r*W*w,m+=I.g*W*w,x+=I.b*W*w;else if(O.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(O.sh.coefficients[D],W);else if(O.isDirectionalLight){const D=t.get(O);if(D.color.copy(O.color).multiplyScalar(O.intensity*w),O.castShadow){const H=O.shadow,G=i.get(O);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,r.directionalShadow[h]=G,r.directionalShadowMap[h]=K,r.directionalShadowMatrix[h]=O.shadow.matrix,y++}r.directional[h]=D,h++}else if(O.isSpotLight){const D=t.get(O);D.position.setFromMatrixPosition(O.matrixWorld),D.color.copy(I).multiplyScalar(W*w),D.distance=$,D.coneCos=Math.cos(O.angle),D.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),D.decay=O.decay,r.spot[g]=D;const H=O.shadow;if(O.map&&(r.spotLightMap[b]=O.map,b++,H.updateMatrices(O),O.castShadow&&S++),r.spotLightMatrix[g]=H.matrix,O.castShadow){const G=i.get(O);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,r.spotShadow[g]=G,r.spotShadowMap[g]=K,T++}g++}else if(O.isRectAreaLight){const D=t.get(O);D.color.copy(I).multiplyScalar(W),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),r.rectArea[_]=D,_++}else if(O.isPointLight){const D=t.get(O);if(D.color.copy(O.color).multiplyScalar(O.intensity*w),D.distance=O.distance,D.decay=O.decay,O.castShadow){const H=O.shadow,G=i.get(O);G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,G.shadowCameraNear=H.camera.near,G.shadowCameraFar=H.camera.far,r.pointShadow[p]=G,r.pointShadowMap[p]=K,r.pointShadowMatrix[p]=O.shadow.matrix,M++}r.point[p]=D,p++}else if(O.isHemisphereLight){const D=t.get(O);D.skyColor.copy(O.color).multiplyScalar(W*w),D.groundColor.copy(O.groundColor).multiplyScalar(W*w),r.hemi[v]=D,v++}}_>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=x;const L=r.hash;(L.directionalLength!==h||L.pointLength!==p||L.spotLength!==g||L.rectAreaLength!==_||L.hemiLength!==v||L.numDirectionalShadows!==y||L.numPointShadows!==M||L.numSpotShadows!==T||L.numSpotMaps!==b)&&(r.directional.length=h,r.spot.length=g,r.rectArea.length=_,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=T+b-S,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=S,L.directionalLength=h,L.pointLength=p,L.spotLength=g,L.rectAreaLength=_,L.hemiLength=v,L.numDirectionalShadows=y,L.numPointShadows=M,L.numSpotShadows=T,L.numSpotMaps=b,r.version=N3++)}function u(c,d){let f=0,m=0,x=0,h=0,p=0;const g=d.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const y=c[_];if(y.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(y.isSpotLight){const M=r.spot[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),x++}else if(y.isRectAreaLight){const M=r.rectArea[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),a.identity(),o.copy(y.matrixWorld),o.premultiply(g),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),h++}else if(y.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),m++}else if(y.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:l,setupView:u,state:r}}function $g(n,e){const t=new z3(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function F3(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new $g(n,e),t.set(s,[l])):o>=a.length?(l=new $g(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class U3 extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class B3 extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const V3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function W3(n,e,t){let i=new $h;const r=new Te,s=new Te,o=new Je,a=new U3({depthPacking:HM}),l=new B3,u={},c=t.maxTextureSize,d={[br]:Cn,[Cn]:br,[lr]:lr},f=new ms({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:V3,fragmentShader:G3}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new fi;x.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new gt(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pv,this.render=function(y,M,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Sr),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let V=0,j=y.length;V<j;V++){const O=y[V],I=O.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const W=I.getFrameExtents();if(r.multiply(W),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/W.x),r.x=s.x*W.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/W.y),r.y=s.y*W.y,I.mapSize.y=s.y)),I.map===null){const K=this.type!==oa?{minFilter:Qt,magFilter:Qt}:{};I.map=new ps(r.x,r.y,K),I.map.texture.name=O.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const $=I.getViewportCount();for(let K=0;K<$;K++){const D=I.getViewport(K);o.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),L.viewport(o),I.updateMatrices(O,K),i=I.getFrustum(),v(M,T,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===oa&&g(I,T),I.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(b,S,w)};function g(y,M){const T=e.update(h);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new ps(r.x,r.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(M,null,T,f,h,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(M,null,T,m,h,null)}function _(y,M,T,b,S,w){let L=null;const V=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(V!==void 0)L=V;else if(L=T.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const j=L.uuid,O=M.uuid;let I=u[j];I===void 0&&(I={},u[j]=I);let W=I[O];W===void 0&&(W=L.clone(),I[O]=W),L=W}return L.visible=M.visible,L.wireframe=M.wireframe,w===oa?L.side=M.shadowSide!==null?M.shadowSide:M.side:L.side=M.shadowSide!==null?M.shadowSide:d[M.side],L.alphaMap=M.alphaMap,L.alphaTest=M.alphaTest,L.map=M.map,L.clipShadows=M.clipShadows,L.clippingPlanes=M.clippingPlanes,L.clipIntersection=M.clipIntersection,L.displacementMap=M.displacementMap,L.displacementScale=M.displacementScale,L.displacementBias=M.displacementBias,L.wireframeLinewidth=M.wireframeLinewidth,L.linewidth=M.linewidth,T.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(T.matrixWorld),L.nearDistance=b,L.farDistance=S),L}function v(y,M,T,b,S){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===oa)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const V=e.update(y),j=y.material;if(Array.isArray(j)){const O=V.groups;for(let I=0,W=O.length;I<W;I++){const $=O[I],K=j[$.materialIndex];if(K&&K.visible){const D=_(y,K,b,T.near,T.far,S);n.renderBufferDirect(T,null,V,D,y,$)}}}else if(j.visible){const O=_(y,j,b,T.near,T.far,S);n.renderBufferDirect(T,null,V,O,y,null)}}const L=y.children;for(let V=0,j=L.length;V<j;V++)v(L[V],M,T,b,S)}}function H3(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const Y=new Je;let te=null;const fe=new Je(0,0,0,0);return{setMask:function(me){te!==me&&!R&&(n.colorMask(me,me,me,me),te=me)},setLocked:function(me){R=me},setClear:function(me,Xe,Tt,qt,pi){pi===!0&&(me*=qt,Xe*=qt,Tt*=qt),Y.set(me,Xe,Tt,qt),fe.equals(Y)===!1&&(n.clearColor(me,Xe,Tt,qt),fe.copy(Y))},reset:function(){R=!1,te=null,fe.set(-1,0,0,0)}}}function s(){let R=!1,Y=null,te=null,fe=null;return{setTest:function(me){me?ue(2929):pe(2929)},setMask:function(me){Y!==me&&!R&&(n.depthMask(me),Y=me)},setFunc:function(me){if(te!==me){switch(me){case hM:n.depthFunc(512);break;case pM:n.depthFunc(519);break;case mM:n.depthFunc(513);break;case Ld:n.depthFunc(515);break;case gM:n.depthFunc(514);break;case _M:n.depthFunc(518);break;case vM:n.depthFunc(516);break;case xM:n.depthFunc(517);break;default:n.depthFunc(515)}te=me}},setLocked:function(me){R=me},setClear:function(me){fe!==me&&(n.clearDepth(me),fe=me)},reset:function(){R=!1,Y=null,te=null,fe=null}}}function o(){let R=!1,Y=null,te=null,fe=null,me=null,Xe=null,Tt=null,qt=null,pi=null;return{setTest:function(at){R||(at?ue(2960):pe(2960))},setMask:function(at){Y!==at&&!R&&(n.stencilMask(at),Y=at)},setFunc:function(at,Nn,mi){(te!==at||fe!==Nn||me!==mi)&&(n.stencilFunc(at,Nn,mi),te=at,fe=Nn,me=mi)},setOp:function(at,Nn,mi){(Xe!==at||Tt!==Nn||qt!==mi)&&(n.stencilOp(at,Nn,mi),Xe=at,Tt=Nn,qt=mi)},setLocked:function(at){R=at},setClear:function(at){pi!==at&&(n.clearStencil(at),pi=at)},reset:function(){R=!1,Y=null,te=null,fe=null,me=null,Xe=null,Tt=null,qt=null,pi=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},m={},x=new WeakMap,h=[],p=null,g=!1,_=null,v=null,y=null,M=null,T=null,b=null,S=null,w=!1,L=null,V=null,j=null,O=null,I=null;const W=n.getParameter(35661);let $=!1,K=0;const D=n.getParameter(7938);D.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(D)[1]),$=K>=1):D.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),$=K>=2);let H=null,G={};const re=n.getParameter(3088),k=n.getParameter(2978),Q=new Je().fromArray(re),J=new Je().fromArray(k);function z(R,Y,te){const fe=new Uint8Array(4),me=n.createTexture();n.bindTexture(R,me),n.texParameteri(R,10241,9728),n.texParameteri(R,10240,9728);for(let Xe=0;Xe<te;Xe++)n.texImage2D(Y+Xe,0,6408,1,1,0,6408,5121,fe);return me}const ae={};ae[3553]=z(3553,3553,1),ae[34067]=z(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ue(2929),l.setFunc(Ld),wt(!1),Et(zm),ue(2884),Mt(Sr);function ue(R){f[R]!==!0&&(n.enable(R),f[R]=!0)}function pe(R){f[R]!==!1&&(n.disable(R),f[R]=!1)}function he(R,Y){return m[R]!==Y?(n.bindFramebuffer(R,Y),m[R]=Y,i&&(R===36009&&(m[36160]=Y),R===36160&&(m[36009]=Y)),!0):!1}function Se(R,Y){let te=h,fe=!1;if(R)if(te=x.get(Y),te===void 0&&(te=[],x.set(Y,te)),R.isWebGLMultipleRenderTargets){const me=R.texture;if(te.length!==me.length||te[0]!==36064){for(let Xe=0,Tt=me.length;Xe<Tt;Xe++)te[Xe]=36064+Xe;te.length=me.length,fe=!0}}else te[0]!==36064&&(te[0]=36064,fe=!0);else te[0]!==1029&&(te[0]=1029,fe=!0);fe&&(t.isWebGL2?n.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function we(R){return p!==R?(n.useProgram(R),p=R,!0):!1}const be={[Fs]:32774,[nM]:32778,[iM]:32779};if(i)be[Vm]=32775,be[Gm]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(be[Vm]=R.MIN_EXT,be[Gm]=R.MAX_EXT)}const Ne={[rM]:0,[sM]:1,[oM]:768,[Lv]:770,[dM]:776,[cM]:774,[lM]:772,[aM]:769,[Dv]:771,[fM]:775,[uM]:773};function Mt(R,Y,te,fe,me,Xe,Tt,qt){if(R===Sr){g===!0&&(pe(3042),g=!1);return}if(g===!1&&(ue(3042),g=!0),R!==tM){if(R!==_||qt!==w){if((v!==Fs||T!==Fs)&&(n.blendEquation(32774),v=Fs,T=Fs),qt)switch(R){case ao:n.blendFuncSeparate(1,771,1,771);break;case Fm:n.blendFunc(1,1);break;case Um:n.blendFuncSeparate(0,769,0,1);break;case Bm:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ao:n.blendFuncSeparate(770,771,1,771);break;case Fm:n.blendFunc(770,1);break;case Um:n.blendFuncSeparate(0,769,0,1);break;case Bm:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}y=null,M=null,b=null,S=null,_=R,w=qt}return}me=me||Y,Xe=Xe||te,Tt=Tt||fe,(Y!==v||me!==T)&&(n.blendEquationSeparate(be[Y],be[me]),v=Y,T=me),(te!==y||fe!==M||Xe!==b||Tt!==S)&&(n.blendFuncSeparate(Ne[te],Ne[fe],Ne[Xe],Ne[Tt]),y=te,M=fe,b=Xe,S=Tt),_=R,w=!1}function jt(R,Y){R.side===lr?pe(2884):ue(2884);let te=R.side===Cn;Y&&(te=!te),wt(te),R.blending===ao&&R.transparent===!1?Mt(Sr):Mt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const fe=R.stencilWrite;u.setTest(fe),fe&&(u.setMask(R.stencilWriteMask),u.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),u.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),je(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ue(32926):pe(32926)}function wt(R){L!==R&&(R?n.frontFace(2304):n.frontFace(2305),L=R)}function Et(R){R!==QS?(ue(2884),R!==V&&(R===zm?n.cullFace(1029):R===JS?n.cullFace(1028):n.cullFace(1032))):pe(2884),V=R}function Ke(R){R!==j&&($&&n.lineWidth(R),j=R)}function je(R,Y,te){R?(ue(32823),(O!==Y||I!==te)&&(n.polygonOffset(Y,te),O=Y,I=te)):pe(32823)}function mn(R){R?ue(3089):pe(3089)}function Xt(R){R===void 0&&(R=33984+W-1),H!==R&&(n.activeTexture(R),H=R)}function A(R,Y,te){te===void 0&&(H===null?te=33984+W-1:te=H);let fe=G[te];fe===void 0&&(fe={type:void 0,texture:void 0},G[te]=fe),(fe.type!==R||fe.texture!==Y)&&(H!==te&&(n.activeTexture(te),H=te),n.bindTexture(R,Y||ae[R]),fe.type=R,fe.texture=Y)}function E(){const R=G[H];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function P(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function F(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function oe(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(R){Q.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Q.copy(R))}function _e(R){J.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),J.copy(R))}function Le(R,Y){let te=d.get(Y);te===void 0&&(te=new WeakMap,d.set(Y,te));let fe=te.get(R);fe===void 0&&(fe=n.getUniformBlockIndex(Y,R.name),te.set(R,fe))}function Oe(R,Y){const fe=d.get(Y).get(R);c.get(Y)!==fe&&(n.uniformBlockBinding(Y,fe,R.__bindingPointIndex),c.set(Y,fe))}function Be(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},H=null,G={},m={},x=new WeakMap,h=[],p=null,g=!1,_=null,v=null,y=null,M=null,T=null,b=null,S=null,w=!1,L=null,V=null,j=null,O=null,I=null,Q.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ue,disable:pe,bindFramebuffer:he,drawBuffers:Se,useProgram:we,setBlending:Mt,setMaterial:jt,setFlipSided:wt,setCullFace:Et,setLineWidth:Ke,setPolygonOffset:je,setScissorTest:mn,activeTexture:Xt,bindTexture:A,unbindTexture:E,compressedTexImage2D:q,compressedTexImage3D:ne,texImage2D:oe,texImage3D:ge,updateUBOMapping:Le,uniformBlockBinding:Oe,texStorage2D:F,texStorage3D:ce,texSubImage2D:ie,texSubImage3D:le,compressedTexSubImage2D:xe,compressedTexSubImage3D:P,scissor:ve,viewport:_e,reset:Be}}function j3(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,E){return g?new OffscreenCanvas(A,E):Wa("canvas")}function v(A,E,q,ne){let ie=1;if((A.width>ne||A.height>ne)&&(ie=ne/Math.max(A.width,A.height)),ie<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const le=E?YM:Math.floor,xe=le(ie*A.width),P=le(ie*A.height);h===void 0&&(h=_(xe,P));const F=q?_(xe,P):h;return F.width=xe,F.height=P,F.getContext("2d").drawImage(A,0,0,xe,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+xe+"x"+P+")."),F}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return gg(A.width)&&gg(A.height)}function M(A){return a?!1:A.wrapS!==ri||A.wrapT!==ri||A.minFilter!==Qt&&A.minFilter!==Vn}function T(A,E){return A.generateMipmaps&&E&&A.minFilter!==Qt&&A.minFilter!==Vn}function b(A){n.generateMipmap(A)}function S(A,E,q,ne,ie=!1){if(a===!1)return E;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le=E;return E===6403&&(q===5126&&(le=33326),q===5131&&(le=33325),q===5121&&(le=33321)),E===33319&&(q===5126&&(le=33328),q===5131&&(le=33327),q===5121&&(le=33323)),E===6408&&(q===5126&&(le=34836),q===5131&&(le=34842),q===5121&&(le=ne===Ye&&ie===!1?35907:32856),q===32819&&(le=32854),q===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function w(A,E,q){return T(A,q)===!0||A.isFramebufferTexture&&A.minFilter!==Qt&&A.minFilter!==Vn?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function L(A){return A===Qt||A===Wm||A===Gc?9728:9729}function V(A){const E=A.target;E.removeEventListener("dispose",V),O(E),E.isVideoTexture&&x.delete(E)}function j(A){const E=A.target;E.removeEventListener("dispose",j),W(E)}function O(A){const E=i.get(A);if(E.__webglInit===void 0)return;const q=A.source,ne=p.get(q);if(ne){const ie=ne[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&I(A),Object.keys(ne).length===0&&p.delete(q)}i.remove(A)}function I(A){const E=i.get(A);n.deleteTexture(E.__webglTexture);const q=A.source,ne=p.get(q);delete ne[E.__cacheKey],o.memory.textures--}function W(A){const E=A.texture,q=i.get(A),ne=i.get(E);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)n.deleteFramebuffer(q.__webglFramebuffer[ie]),q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer[ie]);else{if(n.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&n.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ie=0;ie<q.__webglColorRenderbuffer.length;ie++)q.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(q.__webglColorRenderbuffer[ie]);q.__webglDepthRenderbuffer&&n.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ie=0,le=E.length;ie<le;ie++){const xe=i.get(E[ie]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(E[ie])}i.remove(E),i.remove(A)}let $=0;function K(){$=0}function D(){const A=$;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),$+=1,A}function H(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.encoding),E.join()}function G(A,E){const q=i.get(A);if(A.isVideoTexture&&mn(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(q,A,E);return}}t.bindTexture(3553,q.__webglTexture,33984+E)}function re(A,E){const q=i.get(A);if(A.version>0&&q.__version!==A.version){pe(q,A,E);return}t.bindTexture(35866,q.__webglTexture,33984+E)}function k(A,E){const q=i.get(A);if(A.version>0&&q.__version!==A.version){pe(q,A,E);return}t.bindTexture(32879,q.__webglTexture,33984+E)}function Q(A,E){const q=i.get(A);if(A.version>0&&q.__version!==A.version){he(q,A,E);return}t.bindTexture(34067,q.__webglTexture,33984+E)}const J={[Id]:10497,[ri]:33071,[kd]:33648},z={[Qt]:9728,[Wm]:9984,[Gc]:9986,[Vn]:9729,[CM]:9985,[Ba]:9987};function ae(A,E,q){if(q?(n.texParameteri(A,10242,J[E.wrapS]),n.texParameteri(A,10243,J[E.wrapT]),(A===32879||A===35866)&&n.texParameteri(A,32882,J[E.wrapR]),n.texParameteri(A,10240,z[E.magFilter]),n.texParameteri(A,10241,z[E.minFilter])):(n.texParameteri(A,10242,33071),n.texParameteri(A,10243,33071),(A===32879||A===35866)&&n.texParameteri(A,32882,33071),(E.wrapS!==ri||E.wrapT!==ri)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,10240,L(E.magFilter)),n.texParameteri(A,10241,L(E.minFilter)),E.minFilter!==Qt&&E.minFilter!==Vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Qt||E.minFilter!==Gc&&E.minFilter!==Ba||E.type===Qr&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Va&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(A,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function ue(A,E){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",V));const ne=E.source;let ie=p.get(ne);ie===void 0&&(ie={},p.set(ne,ie));const le=H(E);if(le!==A.__cacheKey){ie[le]===void 0&&(ie[le]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ie[le].usedTimes++;const xe=ie[A.__cacheKey];xe!==void 0&&(ie[A.__cacheKey].usedTimes--,xe.usedTimes===0&&I(E)),A.__cacheKey=le,A.__webglTexture=ie[le].texture}return q}function pe(A,E,q){let ne=3553;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=35866),E.isData3DTexture&&(ne=32879);const ie=ue(A,E),le=E.source;t.bindTexture(ne,A.__webglTexture,33984+q);const xe=i.get(le);if(le.version!==xe.__version||ie===!0){t.activeTexture(33984+q),n.pixelStorei(37440,E.flipY),n.pixelStorei(37441,E.premultiplyAlpha),n.pixelStorei(3317,E.unpackAlignment),n.pixelStorei(37443,0);const P=M(E)&&y(E.image)===!1;let F=v(E.image,P,!1,c);F=Xt(E,F);const ce=y(F)||a,oe=s.convert(E.format,E.encoding);let ge=s.convert(E.type),ve=S(E.internalFormat,oe,ge,E.encoding,E.isVideoTexture);ae(ne,E,ce);let _e;const Le=E.mipmaps,Oe=a&&E.isVideoTexture!==!0,Be=xe.__version===void 0||ie===!0,R=w(E,F,ce);if(E.isDepthTexture)ve=6402,a?E.type===Qr?ve=36012:E.type===Kr?ve=33190:E.type===lo?ve=35056:ve=33189:E.type===Qr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ns&&ve===6402&&E.type!==kv&&E.type!==Kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Kr,ge=s.convert(E.type)),E.format===wo&&ve===6402&&(ve=34041,E.type!==lo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=lo,ge=s.convert(E.type))),Be&&(Oe?t.texStorage2D(3553,1,ve,F.width,F.height):t.texImage2D(3553,0,ve,F.width,F.height,0,oe,ge,null));else if(E.isDataTexture)if(Le.length>0&&ce){Oe&&Be&&t.texStorage2D(3553,R,ve,Le[0].width,Le[0].height);for(let Y=0,te=Le.length;Y<te;Y++)_e=Le[Y],Oe?t.texSubImage2D(3553,Y,0,0,_e.width,_e.height,oe,ge,_e.data):t.texImage2D(3553,Y,ve,_e.width,_e.height,0,oe,ge,_e.data);E.generateMipmaps=!1}else Oe?(Be&&t.texStorage2D(3553,R,ve,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,oe,ge,F.data)):t.texImage2D(3553,0,ve,F.width,F.height,0,oe,ge,F.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Oe&&Be&&t.texStorage3D(35866,R,ve,Le[0].width,Le[0].height,F.depth);for(let Y=0,te=Le.length;Y<te;Y++)_e=Le[Y],E.format!==si?oe!==null?Oe?t.compressedTexSubImage3D(35866,Y,0,0,0,_e.width,_e.height,F.depth,oe,_e.data,0,0):t.compressedTexImage3D(35866,Y,ve,_e.width,_e.height,F.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage3D(35866,Y,0,0,0,_e.width,_e.height,F.depth,oe,ge,_e.data):t.texImage3D(35866,Y,ve,_e.width,_e.height,F.depth,0,oe,ge,_e.data)}else{Oe&&Be&&t.texStorage2D(3553,R,ve,Le[0].width,Le[0].height);for(let Y=0,te=Le.length;Y<te;Y++)_e=Le[Y],E.format!==si?oe!==null?Oe?t.compressedTexSubImage2D(3553,Y,0,0,_e.width,_e.height,oe,_e.data):t.compressedTexImage2D(3553,Y,ve,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?t.texSubImage2D(3553,Y,0,0,_e.width,_e.height,oe,ge,_e.data):t.texImage2D(3553,Y,ve,_e.width,_e.height,0,oe,ge,_e.data)}else if(E.isDataArrayTexture)Oe?(Be&&t.texStorage3D(35866,R,ve,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,oe,ge,F.data)):t.texImage3D(35866,0,ve,F.width,F.height,F.depth,0,oe,ge,F.data);else if(E.isData3DTexture)Oe?(Be&&t.texStorage3D(32879,R,ve,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,oe,ge,F.data)):t.texImage3D(32879,0,ve,F.width,F.height,F.depth,0,oe,ge,F.data);else if(E.isFramebufferTexture){if(Be)if(Oe)t.texStorage2D(3553,R,ve,F.width,F.height);else{let Y=F.width,te=F.height;for(let fe=0;fe<R;fe++)t.texImage2D(3553,fe,ve,Y,te,0,oe,ge,null),Y>>=1,te>>=1}}else if(Le.length>0&&ce){Oe&&Be&&t.texStorage2D(3553,R,ve,Le[0].width,Le[0].height);for(let Y=0,te=Le.length;Y<te;Y++)_e=Le[Y],Oe?t.texSubImage2D(3553,Y,0,0,oe,ge,_e):t.texImage2D(3553,Y,ve,oe,ge,_e);E.generateMipmaps=!1}else Oe?(Be&&t.texStorage2D(3553,R,ve,F.width,F.height),t.texSubImage2D(3553,0,0,0,oe,ge,F)):t.texImage2D(3553,0,ve,oe,ge,F);T(E,ce)&&b(ne),xe.__version=le.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function he(A,E,q){if(E.image.length!==6)return;const ne=ue(A,E),ie=E.source;t.bindTexture(34067,A.__webglTexture,33984+q);const le=i.get(ie);if(ie.version!==le.__version||ne===!0){t.activeTexture(33984+q),n.pixelStorei(37440,E.flipY),n.pixelStorei(37441,E.premultiplyAlpha),n.pixelStorei(3317,E.unpackAlignment),n.pixelStorei(37443,0);const xe=E.isCompressedTexture||E.image[0].isCompressedTexture,P=E.image[0]&&E.image[0].isDataTexture,F=[];for(let Y=0;Y<6;Y++)!xe&&!P?F[Y]=v(E.image[Y],!1,!0,u):F[Y]=P?E.image[Y].image:E.image[Y],F[Y]=Xt(E,F[Y]);const ce=F[0],oe=y(ce)||a,ge=s.convert(E.format,E.encoding),ve=s.convert(E.type),_e=S(E.internalFormat,ge,ve,E.encoding),Le=a&&E.isVideoTexture!==!0,Oe=le.__version===void 0||ne===!0;let Be=w(E,ce,oe);ae(34067,E,oe);let R;if(xe){Le&&Oe&&t.texStorage2D(34067,Be,_e,ce.width,ce.height);for(let Y=0;Y<6;Y++){R=F[Y].mipmaps;for(let te=0;te<R.length;te++){const fe=R[te];E.format!==si?ge!==null?Le?t.compressedTexSubImage2D(34069+Y,te,0,0,fe.width,fe.height,ge,fe.data):t.compressedTexImage2D(34069+Y,te,_e,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+Y,te,0,0,fe.width,fe.height,ge,ve,fe.data):t.texImage2D(34069+Y,te,_e,fe.width,fe.height,0,ge,ve,fe.data)}}}else{R=E.mipmaps,Le&&Oe&&(R.length>0&&Be++,t.texStorage2D(34067,Be,_e,F[0].width,F[0].height));for(let Y=0;Y<6;Y++)if(P){Le?t.texSubImage2D(34069+Y,0,0,0,F[Y].width,F[Y].height,ge,ve,F[Y].data):t.texImage2D(34069+Y,0,_e,F[Y].width,F[Y].height,0,ge,ve,F[Y].data);for(let te=0;te<R.length;te++){const me=R[te].image[Y].image;Le?t.texSubImage2D(34069+Y,te+1,0,0,me.width,me.height,ge,ve,me.data):t.texImage2D(34069+Y,te+1,_e,me.width,me.height,0,ge,ve,me.data)}}else{Le?t.texSubImage2D(34069+Y,0,0,0,ge,ve,F[Y]):t.texImage2D(34069+Y,0,_e,ge,ve,F[Y]);for(let te=0;te<R.length;te++){const fe=R[te];Le?t.texSubImage2D(34069+Y,te+1,0,0,ge,ve,fe.image[Y]):t.texImage2D(34069+Y,te+1,_e,ge,ve,fe.image[Y])}}}T(E,oe)&&b(34067),le.__version=ie.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Se(A,E,q,ne,ie){const le=s.convert(q.format,q.encoding),xe=s.convert(q.type),P=S(q.internalFormat,le,xe,q.encoding);i.get(E).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,P,E.width,E.height,E.depth,0,le,xe,null):t.texImage2D(ie,0,P,E.width,E.height,0,le,xe,null)),t.bindFramebuffer(36160,A),je(E)?f.framebufferTexture2DMultisampleEXT(36160,ne,ie,i.get(q).__webglTexture,0,Ke(E)):(ie===3553||ie>=34069&&ie<=34074)&&n.framebufferTexture2D(36160,ne,ie,i.get(q).__webglTexture,0),t.bindFramebuffer(36160,null)}function we(A,E,q){if(n.bindRenderbuffer(36161,A),E.depthBuffer&&!E.stencilBuffer){let ne=33189;if(q||je(E)){const ie=E.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Qr?ne=36012:ie.type===Kr&&(ne=33190));const le=Ke(E);je(E)?f.renderbufferStorageMultisampleEXT(36161,le,ne,E.width,E.height):n.renderbufferStorageMultisample(36161,le,ne,E.width,E.height)}else n.renderbufferStorage(36161,ne,E.width,E.height);n.framebufferRenderbuffer(36160,36096,36161,A)}else if(E.depthBuffer&&E.stencilBuffer){const ne=Ke(E);q&&je(E)===!1?n.renderbufferStorageMultisample(36161,ne,35056,E.width,E.height):je(E)?f.renderbufferStorageMultisampleEXT(36161,ne,35056,E.width,E.height):n.renderbufferStorage(36161,34041,E.width,E.height),n.framebufferRenderbuffer(36160,33306,36161,A)}else{const ne=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0;ie<ne.length;ie++){const le=ne[ie],xe=s.convert(le.format,le.encoding),P=s.convert(le.type),F=S(le.internalFormat,xe,P,le.encoding),ce=Ke(E);q&&je(E)===!1?n.renderbufferStorageMultisample(36161,ce,F,E.width,E.height):je(E)?f.renderbufferStorageMultisampleEXT(36161,ce,F,E.width,E.height):n.renderbufferStorage(36161,F,E.width,E.height)}}n.bindRenderbuffer(36161,null)}function be(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const ne=i.get(E.depthTexture).__webglTexture,ie=Ke(E);if(E.depthTexture.format===ns)je(E)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,ie):n.framebufferTexture2D(36160,36096,3553,ne,0);else if(E.depthTexture.format===wo)je(E)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,ie):n.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function Ne(A){const E=i.get(A),q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");be(E.__webglFramebuffer,A)}else if(q){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]=n.createRenderbuffer(),we(E.__webglDepthbuffer[ne],A,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),we(E.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function Mt(A,E,q){const ne=i.get(A);E!==void 0&&Se(ne.__webglFramebuffer,A,A.texture,36064,3553),q!==void 0&&Ne(A)}function jt(A){const E=A.texture,q=i.get(A),ne=i.get(E);A.addEventListener("dispose",j),A.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=E.version,o.memory.textures++);const ie=A.isWebGLCubeRenderTarget===!0,le=A.isWebGLMultipleRenderTargets===!0,xe=y(A)||a;if(ie){q.__webglFramebuffer=[];for(let P=0;P<6;P++)q.__webglFramebuffer[P]=n.createFramebuffer()}else{if(q.__webglFramebuffer=n.createFramebuffer(),le)if(r.drawBuffers){const P=A.texture;for(let F=0,ce=P.length;F<ce;F++){const oe=i.get(P[F]);oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&je(A)===!1){const P=le?E:[E];q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let F=0;F<P.length;F++){const ce=P[F];q.__webglColorRenderbuffer[F]=n.createRenderbuffer(),n.bindRenderbuffer(36161,q.__webglColorRenderbuffer[F]);const oe=s.convert(ce.format,ce.encoding),ge=s.convert(ce.type),ve=S(ce.internalFormat,oe,ge,ce.encoding,A.isXRRenderTarget===!0),_e=Ke(A);n.renderbufferStorageMultisample(36161,_e,ve,A.width,A.height),n.framebufferRenderbuffer(36160,36064+F,36161,q.__webglColorRenderbuffer[F])}n.bindRenderbuffer(36161,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),we(q.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ne.__webglTexture),ae(34067,E,xe);for(let P=0;P<6;P++)Se(q.__webglFramebuffer[P],A,E,36064,34069+P);T(E,xe)&&b(34067),t.unbindTexture()}else if(le){const P=A.texture;for(let F=0,ce=P.length;F<ce;F++){const oe=P[F],ge=i.get(oe);t.bindTexture(3553,ge.__webglTexture),ae(3553,oe,xe),Se(q.__webglFramebuffer,A,oe,36064+F,3553),T(oe,xe)&&b(3553)}t.unbindTexture()}else{let P=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?P=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(P,ne.__webglTexture),ae(P,E,xe),Se(q.__webglFramebuffer,A,E,36064,P),T(E,xe)&&b(P),t.unbindTexture()}A.depthBuffer&&Ne(A)}function wt(A){const E=y(A)||a,q=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0,ie=q.length;ne<ie;ne++){const le=q[ne];if(T(le,E)){const xe=A.isWebGLCubeRenderTarget?34067:3553,P=i.get(le).__webglTexture;t.bindTexture(xe,P),b(xe),t.unbindTexture()}}}function Et(A){if(a&&A.samples>0&&je(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],q=A.width,ne=A.height;let ie=16384;const le=[],xe=A.stencilBuffer?33306:36096,P=i.get(A),F=A.isWebGLMultipleRenderTargets===!0;if(F)for(let ce=0;ce<E.length;ce++)t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,P.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,P.__webglFramebuffer);for(let ce=0;ce<E.length;ce++){le.push(36064+ce),A.depthBuffer&&le.push(xe);const oe=P.__ignoreDepthValues!==void 0?P.__ignoreDepthValues:!1;if(oe===!1&&(A.depthBuffer&&(ie|=256),A.stencilBuffer&&(ie|=1024)),F&&n.framebufferRenderbuffer(36008,36064,36161,P.__webglColorRenderbuffer[ce]),oe===!0&&(n.invalidateFramebuffer(36008,[xe]),n.invalidateFramebuffer(36009,[xe])),F){const ge=i.get(E[ce]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,ge,0)}n.blitFramebuffer(0,0,q,ne,0,0,q,ne,ie,9728),m&&n.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),F)for(let ce=0;ce<E.length;ce++){t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ce,36161,P.__webglColorRenderbuffer[ce]);const oe=i.get(E[ce]).__webglTexture;t.bindFramebuffer(36160,P.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ce,3553,oe,0)}t.bindFramebuffer(36009,P.__webglMultisampledFramebuffer)}}function Ke(A){return Math.min(d,A.samples)}function je(A){const E=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function mn(A){const E=o.render.frame;x.get(A)!==E&&(x.set(A,E),A.update())}function Xt(A,E){const q=A.encoding,ne=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Nd||q!==ds&&(q===Ye?a===!1?e.has("EXT_sRGB")===!0&&ne===si?(A.format=Nd,A.minFilter=Vn,A.generateMipmaps=!1):E=Fv.sRGBToLinear(E):(ne!==si||ie!==fs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),E}this.allocateTextureUnit=D,this.resetTextureUnits=K,this.setTexture2D=G,this.setTexture2DArray=re,this.setTexture3D=k,this.setTextureCube=Q,this.rebindTextures=Mt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=je}function X3(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===fs)return 5121;if(s===DM)return 32819;if(s===RM)return 32820;if(s===AM)return 5120;if(s===PM)return 5122;if(s===kv)return 5123;if(s===LM)return 5124;if(s===Kr)return 5125;if(s===Qr)return 5126;if(s===Va)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===IM)return 6406;if(s===si)return 6408;if(s===kM)return 6409;if(s===NM)return 6410;if(s===ns)return 6402;if(s===wo)return 34041;if(s===Nd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===OM)return 6403;if(s===zM)return 36244;if(s===FM)return 33319;if(s===UM)return 33320;if(s===BM)return 36249;if(s===Wc||s===Hc||s===jc||s===Xc)if(o===Ye)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Wc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Wc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hm||s===jm||s===Xm||s===qm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Hm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===VM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ym||s===$m)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ym)return o===Ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===$m)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zm||s===Km||s===Qm||s===Jm||s===eg||s===tg||s===ng||s===ig||s===rg||s===sg||s===og||s===ag||s===lg||s===ug)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Zm)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Km)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qm)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jm)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===eg)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tg)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ng)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ig)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rg)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sg)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===og)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ag)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lg)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ug)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===qc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===qc)return o===Ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===GM||s===cg||s===fg||s===dg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===qc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===cg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===lo?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class q3 extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qs extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Y3={type:"move"};class yf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,i),g=this._getHandJoint(u,h);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),m=.02,x=.005;u.inputState.pinching&&f>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Y3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class $3 extends fn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:ns,c!==ns&&c!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ns&&(i=Kr),i===void 0&&c===wo&&(i=lo),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1}}class Z3 extends xs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,m=null,x=null;const h=t.getContextAttributes();let p=null,g=null;const _=[],v=[],y=new Set,M=new Map,T=new wn;T.layers.enable(1),T.viewport=new Je;const b=new wn;b.layers.enable(2),b.viewport=new Je;const S=[T,b],w=new q3;w.layers.enable(1),w.layers.enable(2);let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Q=_[k];return Q===void 0&&(Q=new yf,_[k]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(k){let Q=_[k];return Q===void 0&&(Q=new yf,_[k]=Q),Q.getGripSpace()},this.getHand=function(k){let Q=_[k];return Q===void 0&&(Q=new yf,_[k]=Q),Q.getHandSpace()};function j(k){const Q=v.indexOf(k.inputSource);if(Q===-1)return;const J=_[Q];J!==void 0&&J.dispatchEvent({type:k.type,data:k.inputSource})}function O(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",I);for(let k=0;k<_.length;k++){const Q=v[k];Q!==null&&(v[k]=null,_[k].disconnect(Q))}L=null,V=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,g=null,re.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",O),r.addEventListener("inputsourceschange",I),h.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:m}),g=new ps(m.framebufferWidth,m.framebufferHeight,{format:si,type:fs,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let Q=null,J=null,z=null;h.depth&&(z=h.stencil?35056:33190,Q=h.stencil?wo:ns,J=h.stencil?lo:Kr);const ae={colorFormat:32856,depthFormat:z,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(ae),r.updateRenderState({layers:[f]}),g=new ps(f.textureWidth,f.textureHeight,{format:si,type:fs,depthTexture:new $3(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const ue=e.properties.get(g);ue.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function I(k){for(let Q=0;Q<k.removed.length;Q++){const J=k.removed[Q],z=v.indexOf(J);z>=0&&(v[z]=null,_[z].disconnect(J))}for(let Q=0;Q<k.added.length;Q++){const J=k.added[Q];let z=v.indexOf(J);if(z===-1){for(let ue=0;ue<_.length;ue++)if(ue>=v.length){v.push(J),z=ue;break}else if(v[ue]===null){v[ue]=J,z=ue;break}if(z===-1)break}const ae=_[z];ae&&ae.connect(J)}}const W=new N,$=new N;function K(k,Q,J){W.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(J.matrixWorld);const z=W.distanceTo($),ae=Q.projectionMatrix.elements,ue=J.projectionMatrix.elements,pe=ae[14]/(ae[10]-1),he=ae[14]/(ae[10]+1),Se=(ae[9]+1)/ae[5],we=(ae[9]-1)/ae[5],be=(ae[8]-1)/ae[0],Ne=(ue[8]+1)/ue[0],Mt=pe*be,jt=pe*Ne,wt=z/(-be+Ne),Et=wt*-be;Q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Et),k.translateZ(wt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Ke=pe+wt,je=he+wt,mn=Mt-Et,Xt=jt+(z-Et),A=Se*he/je*Ke,E=we*he/je*Ke;k.projectionMatrix.makePerspective(mn,Xt,A,E,Ke,je)}function D(k,Q){Q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;w.near=b.near=T.near=k.near,w.far=b.far=T.far=k.far,(L!==w.near||V!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,V=w.far);const Q=k.parent,J=w.cameras;D(w,Q);for(let ae=0;ae<J.length;ae++)D(J[ae],Q);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),k.matrix.copy(w.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const z=k.children;for(let ae=0,ue=z.length;ae<ue;ae++)z[ae].updateMatrixWorld(!0);J.length===2?K(w,T,b):w.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.getPlanes=function(){return y};let H=null;function G(k,Q){if(c=Q.getViewerPose(u||o),x=Q,c!==null){const J=c.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let z=!1;J.length!==w.cameras.length&&(w.cameras.length=0,z=!0);for(let ae=0;ae<J.length;ae++){const ue=J[ae];let pe=null;if(m!==null)pe=m.getViewport(ue);else{const Se=d.getViewSubImage(f,ue);pe=Se.viewport,ae===0&&(e.setRenderTargetTextures(g,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(g))}let he=S[ae];he===void 0&&(he=new wn,he.layers.enable(ae),he.viewport=new Je,S[ae]=he),he.matrix.fromArray(ue.transform.matrix),he.projectionMatrix.fromArray(ue.projectionMatrix),he.viewport.set(pe.x,pe.y,pe.width,pe.height),ae===0&&w.matrix.copy(he.matrix),z===!0&&w.cameras.push(he)}}for(let J=0;J<_.length;J++){const z=v[J],ae=_[J];z!==null&&ae!==void 0&&ae.update(z,Q,u||o)}if(H&&H(k,Q),Q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let J=null;for(const z of y)Q.detectedPlanes.has(z)||(J===null&&(J=[]),J.push(z));if(J!==null)for(const z of J)y.delete(z),M.delete(z),i.dispatchEvent({type:"planeremoved",data:z});for(const z of Q.detectedPlanes)if(!y.has(z))y.add(z),M.set(z,Q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:z});else{const ae=M.get(z);z.lastChangedTime>ae&&(M.set(z,z.lastChangedTime),i.dispatchEvent({type:"planechanged",data:z}))}}x=null}const re=new $v;re.setAnimationLoop(G),this.setAnimationLoop=function(k){H=k},this.dispose=function(){}}}function K3(n,e){function t(h,p){p.color.getRGB(h.fogColor.value,Xv(n)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,g,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,v)):p.isMeshMatcapMaterial?(r(h,p),m(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),x(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,g,_):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===Cn&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===Cn&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(h.envMap.value=g,h.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const y=n.useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.iridescenceMap?_=p.iridescenceMap:p.iridescenceThicknessMap?_=p.iridescenceThicknessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uv2Transform.value.copy(v.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,g,_){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*g,h.scale.value=_*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,g){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Cn&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function x(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Q3(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function u(_,v){let y=r[_.id];y===void 0&&(x(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",p));const M=v.program;i.updateUBOMapping(_,M);const T=e.render.frame;s[_.id]!==T&&(f(_),s[_.id]=T)}function c(_){const v=d();_.__bindingPointIndex=v;const y=n.createBuffer(),M=_.__size,T=_.usage;return n.bindBuffer(35345,y),n.bufferData(35345,M,T),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=r[_.id],y=_.uniforms,M=_.__cache;n.bindBuffer(35345,v);for(let T=0,b=y.length;T<b;T++){const S=y[T];if(m(S,T,M)===!0){const w=S.__offset,L=Array.isArray(S.value)?S.value:[S.value];let V=0;for(let j=0;j<L.length;j++){const O=L[j],I=h(O);typeof O=="number"?(S.__data[0]=O,n.bufferSubData(35345,w+V,S.__data)):O.isMatrix3?(S.__data[0]=O.elements[0],S.__data[1]=O.elements[1],S.__data[2]=O.elements[2],S.__data[3]=O.elements[0],S.__data[4]=O.elements[3],S.__data[5]=O.elements[4],S.__data[6]=O.elements[5],S.__data[7]=O.elements[0],S.__data[8]=O.elements[6],S.__data[9]=O.elements[7],S.__data[10]=O.elements[8],S.__data[11]=O.elements[0]):(O.toArray(S.__data,V),V+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,w,S.__data)}}n.bindBuffer(35345,null)}function m(_,v,y){const M=_.value;if(y[v]===void 0){if(typeof M=="number")y[v]=M;else{const T=Array.isArray(M)?M:[M],b=[];for(let S=0;S<T.length;S++)b.push(T[S].clone());y[v]=b}return!0}else if(typeof M=="number"){if(y[v]!==M)return y[v]=M,!0}else{const T=Array.isArray(y[v])?y[v]:[y[v]],b=Array.isArray(M)?M:[M];for(let S=0;S<T.length;S++){const w=T[S];if(w.equals(b[S])===!1)return w.copy(b[S]),!0}}return!1}function x(_){const v=_.uniforms;let y=0;const M=16;let T=0;for(let b=0,S=v.length;b<S;b++){const w=v[b],L={boundary:0,storage:0},V=Array.isArray(w.value)?w.value:[w.value];for(let j=0,O=V.length;j<O;j++){const I=V[j],W=h(I);L.boundary+=W.boundary,L.storage+=W.storage}if(w.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,b>0){T=y%M;const j=M-T;T!==0&&j-L.boundary<0&&(y+=M-T,w.__offset=y)}y+=L.storage}return T=y%M,T>0&&(y+=M-T),_.__size=y,_.__cache={},this}function h(_){const v={boundary:0,storage:0};return typeof _=="number"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function g(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:g}}function J3(){const n=Wa("canvas");return n.style.display="block",n}function Qh(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:J3(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let d=null,f=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ds,this.useLegacyLights=!0,this.toneMapping=Wi,this.toneMappingExposure=1;const h=this;let p=!1,g=0,_=0,v=null,y=-1,M=null;const T=new Je,b=new Je;let S=null,w=e.width,L=e.height,V=1,j=null,O=null;const I=new Je(0,0,w,L),W=new Je(0,0,w,L);let $=!1;const K=new $h;let D=!1,H=!1,G=null;const re=new ct,k=new N,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function J(){return v===null?V:1}let z=t;function ae(C,B){for(let X=0;X<C.length;X++){const U=C[X],Z=e.getContext(U,B);if(Z!==null)return Z}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qh}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",_e,!1),z===null){const B=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&B.shift(),z=ae(B,C),z===null)throw ae(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ue,pe,he,Se,we,be,Ne,Mt,jt,wt,Et,Ke,je,mn,Xt,A,E,q,ne,ie,le,xe,P,F;function ce(){ue=new c2(z),pe=new i2(z,ue,n),ue.init(pe),xe=new X3(z,ue,pe),he=new H3(z,ue,pe),Se=new h2,we=new L3,be=new j3(z,ue,he,we,pe,xe,Se),Ne=new s2(h),Mt=new u2(h),jt=new Sw(z,pe),P=new t2(z,ue,jt,pe),wt=new f2(z,jt,Se,P),Et=new _2(z,wt,jt,Se),ne=new g2(z,pe,be),A=new r2(we),Ke=new P3(h,Ne,Mt,ue,pe,P,A),je=new K3(h,we),mn=new R3,Xt=new F3(ue,pe),q=new e2(h,Ne,Mt,he,Et,c,o),E=new W3(h,Et,pe),F=new Q3(z,Se,pe,he),ie=new n2(z,ue,Se,pe),le=new d2(z,ue,Se,pe),Se.programs=Ke.programs,h.capabilities=pe,h.extensions=ue,h.properties=we,h.renderLists=mn,h.shadowMap=E,h.state=he,h.info=Se}ce();const oe=new Z3(h,z);this.xr=oe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=ue.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ue.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(w,L,!1))},this.getSize=function(C){return C.set(w,L)},this.setSize=function(C,B,X=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=C,L=B,e.width=Math.floor(C*V),e.height=Math.floor(B*V),X===!0&&(e.style.width=C+"px",e.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(w*V,L*V).floor()},this.setDrawingBufferSize=function(C,B,X){w=C,L=B,V=X,e.width=Math.floor(C*X),e.height=Math.floor(B*X),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(I)},this.setViewport=function(C,B,X,U){C.isVector4?I.set(C.x,C.y,C.z,C.w):I.set(C,B,X,U),he.viewport(T.copy(I).multiplyScalar(V).floor())},this.getScissor=function(C){return C.copy(W)},this.setScissor=function(C,B,X,U){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,B,X,U),he.scissor(b.copy(W).multiplyScalar(V).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(C){he.setScissorTest($=C)},this.setOpaqueSort=function(C){j=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(C=!0,B=!0,X=!0){let U=0;C&&(U|=16384),B&&(U|=256),X&&(U|=1024),z.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",_e,!1),mn.dispose(),Xt.dispose(),we.dispose(),Ne.dispose(),Mt.dispose(),Et.dispose(),P.dispose(),F.dispose(),Ke.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",te),oe.removeEventListener("sessionend",fe),G&&(G.dispose(),G=null),me.stop()};function ge(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const C=Se.autoReset,B=E.enabled,X=E.autoUpdate,U=E.needsUpdate,Z=E.type;ce(),Se.autoReset=C,E.enabled=B,E.autoUpdate=X,E.needsUpdate=U,E.type=Z}function _e(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Le(C){const B=C.target;B.removeEventListener("dispose",Le),Oe(B)}function Oe(C){Be(C),we.remove(C)}function Be(C){const B=we.get(C).programs;B!==void 0&&(B.forEach(function(X){Ke.releaseProgram(X)}),C.isShaderMaterial&&Ke.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,X,U,Z,ye){B===null&&(B=Q);const Me=Z.isMesh&&Z.matrixWorld.determinant()<0,Ce=xy(C,B,X,U,Z);he.setMaterial(U,Me);let Ae=X.index,Fe=1;U.wireframe===!0&&(Ae=wt.getWireframeAttribute(X),Fe=2);const Re=X.drawRange,Ie=X.attributes.position;let ft=Re.start*Fe,gn=(Re.start+Re.count)*Fe;ye!==null&&(ft=Math.max(ft,ye.start*Fe),gn=Math.min(gn,(ye.start+ye.count)*Fe)),Ae!==null?(ft=Math.max(ft,0),gn=Math.min(gn,Ae.count)):Ie!=null&&(ft=Math.max(ft,0),gn=Math.min(gn,Ie.count));const Ai=gn-ft;if(Ai<0||Ai===1/0)return;P.setup(Z,U,Ce,X,Ae);let kr,dt=ie;if(Ae!==null&&(kr=jt.get(Ae),dt=le,dt.setIndex(kr)),Z.isMesh)U.wireframe===!0?(he.setLineWidth(U.wireframeLinewidth*J()),dt.setMode(1)):dt.setMode(4);else if(Z.isLine){let ke=U.linewidth;ke===void 0&&(ke=1),he.setLineWidth(ke*J()),Z.isLineSegments?dt.setMode(1):Z.isLineLoop?dt.setMode(2):dt.setMode(3)}else Z.isPoints?dt.setMode(0):Z.isSprite&&dt.setMode(4);if(Z.isInstancedMesh)dt.renderInstances(ft,Ai,Z.count);else if(X.isInstancedBufferGeometry){const ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,dc=Math.min(X.instanceCount,ke);dt.renderInstances(ft,Ai,dc)}else dt.render(ft,Ai)},this.compile=function(C,B){function X(U,Z,ye){U.transparent===!0&&U.side===lr&&U.forceSinglePass===!1?(U.side=Cn,U.needsUpdate=!0,Nn(U,Z,ye),U.side=br,U.needsUpdate=!0,Nn(U,Z,ye),U.side=lr):Nn(U,Z,ye)}f=Xt.get(C),f.init(),x.push(f),C.traverseVisible(function(U){U.isLight&&U.layers.test(B.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(h.useLegacyLights),C.traverse(function(U){const Z=U.material;if(Z)if(Array.isArray(Z))for(let ye=0;ye<Z.length;ye++){const Me=Z[ye];X(Me,C,U)}else X(Z,C,U)}),x.pop(),f=null};let R=null;function Y(C){R&&R(C)}function te(){me.stop()}function fe(){me.start()}const me=new $v;me.setAnimationLoop(Y),typeof self<"u"&&me.setContext(self),this.setAnimationLoop=function(C){R=C,oe.setAnimationLoop(C),C===null?me.stop():me.start()},oe.addEventListener("sessionstart",te),oe.addEventListener("sessionend",fe),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(B),B=oe.getCamera()),C.isScene===!0&&C.onBeforeRender(h,C,B,v),f=Xt.get(C,x.length),f.init(),x.push(f),re.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(re),H=this.localClippingEnabled,D=A.init(this.clippingPlanes,H),d=mn.get(C,m.length),d.init(),m.push(d),Xe(C,B,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(j,O),D===!0&&A.beginShadows();const X=f.state.shadowsArray;if(E.render(X,C,B),D===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(d,C),f.setupLights(h.useLegacyLights),B.isArrayCamera){const U=B.cameras;for(let Z=0,ye=U.length;Z<ye;Z++){const Me=U[Z];Tt(d,C,Me,Me.viewport)}}else Tt(d,C,B);v!==null&&(be.updateMultisampleRenderTarget(v),be.updateRenderTargetMipmap(v)),C.isScene===!0&&C.onAfterRender(h,C,B),P.resetDefaultState(),y=-1,M=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function Xe(C,B,X,U){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){U&&k.setFromMatrixPosition(C.matrixWorld).applyMatrix4(re);const Me=Et.update(C),Ce=C.material;Ce.visible&&d.push(C,Me,Ce,X,k.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Se.render.frame&&(C.skeleton.update(),C.skeleton.frame=Se.render.frame),!C.frustumCulled||K.intersectsObject(C))){U&&k.setFromMatrixPosition(C.matrixWorld).applyMatrix4(re);const Me=Et.update(C),Ce=C.material;if(Array.isArray(Ce)){const Ae=Me.groups;for(let Fe=0,Re=Ae.length;Fe<Re;Fe++){const Ie=Ae[Fe],ft=Ce[Ie.materialIndex];ft&&ft.visible&&d.push(C,Me,ft,X,k.z,Ie)}}else Ce.visible&&d.push(C,Me,Ce,X,k.z,null)}}const ye=C.children;for(let Me=0,Ce=ye.length;Me<Ce;Me++)Xe(ye[Me],B,X,U)}function Tt(C,B,X,U){const Z=C.opaque,ye=C.transmissive,Me=C.transparent;f.setupLightsView(X),D===!0&&A.setGlobalState(h.clippingPlanes,X),ye.length>0&&qt(Z,B,X),U&&he.viewport(T.copy(U)),Z.length>0&&pi(Z,B,X),ye.length>0&&pi(ye,B,X),Me.length>0&&pi(Me,B,X),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function qt(C,B,X){const U=pe.isWebGL2;G===null&&(G=new ps(1024,1024,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?Va:fs,minFilter:Ba,samples:U&&s===!0?4:0}));const Z=h.getRenderTarget();h.setRenderTarget(G),h.clear();const ye=h.toneMapping;h.toneMapping=Wi,pi(C,B,X),h.toneMapping=ye,be.updateMultisampleRenderTarget(G),be.updateRenderTargetMipmap(G),h.setRenderTarget(Z)}function pi(C,B,X){const U=B.isScene===!0?B.overrideMaterial:null;for(let Z=0,ye=C.length;Z<ye;Z++){const Me=C[Z],Ce=Me.object,Ae=Me.geometry,Fe=U===null?Me.material:U,Re=Me.group;Ce.layers.test(X.layers)&&at(Ce,B,X,Ae,Fe,Re)}}function at(C,B,X,U,Z,ye){C.onBeforeRender(h,B,X,U,Z,ye),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(h,B,X,U,C,ye),Z.transparent===!0&&Z.side===lr&&Z.forceSinglePass===!1?(Z.side=Cn,Z.needsUpdate=!0,h.renderBufferDirect(X,B,U,Z,C,ye),Z.side=br,Z.needsUpdate=!0,h.renderBufferDirect(X,B,U,Z,C,ye),Z.side=lr):h.renderBufferDirect(X,B,U,Z,C,ye),C.onAfterRender(h,B,X,U,Z,ye)}function Nn(C,B,X){B.isScene!==!0&&(B=Q);const U=we.get(C),Z=f.state.lights,ye=f.state.shadowsArray,Me=Z.state.version,Ce=Ke.getParameters(C,Z.state,ye,B,X),Ae=Ke.getProgramCacheKey(Ce);let Fe=U.programs;U.environment=C.isMeshStandardMaterial?B.environment:null,U.fog=B.fog,U.envMap=(C.isMeshStandardMaterial?Mt:Ne).get(C.envMap||U.environment),Fe===void 0&&(C.addEventListener("dispose",Le),Fe=new Map,U.programs=Fe);let Re=Fe.get(Ae);if(Re!==void 0){if(U.currentProgram===Re&&U.lightsStateVersion===Me)return mi(C,Ce),Re}else Ce.uniforms=Ke.getUniforms(C),C.onBuild(X,Ce,h),C.onBeforeCompile(Ce,h),Re=Ke.acquireProgram(Ce,Ae),Fe.set(Ae,Re),U.uniforms=Ce.uniforms;const Ie=U.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ie.clippingPlanes=A.uniform),mi(C,Ce),U.needsLights=Sy(C),U.lightsStateVersion=Me,U.needsLights&&(Ie.ambientLightColor.value=Z.state.ambient,Ie.lightProbe.value=Z.state.probe,Ie.directionalLights.value=Z.state.directional,Ie.directionalLightShadows.value=Z.state.directionalShadow,Ie.spotLights.value=Z.state.spot,Ie.spotLightShadows.value=Z.state.spotShadow,Ie.rectAreaLights.value=Z.state.rectArea,Ie.ltc_1.value=Z.state.rectAreaLTC1,Ie.ltc_2.value=Z.state.rectAreaLTC2,Ie.pointLights.value=Z.state.point,Ie.pointLightShadows.value=Z.state.pointShadow,Ie.hemisphereLights.value=Z.state.hemi,Ie.directionalShadowMap.value=Z.state.directionalShadowMap,Ie.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ie.spotShadowMap.value=Z.state.spotShadowMap,Ie.spotLightMatrix.value=Z.state.spotLightMatrix,Ie.spotLightMap.value=Z.state.spotLightMap,Ie.pointShadowMap.value=Z.state.pointShadowMap,Ie.pointShadowMatrix.value=Z.state.pointShadowMatrix);const ft=Re.getUniforms(),gn=iu.seqWithValue(ft.seq,Ie);return U.currentProgram=Re,U.uniformsList=gn,Re}function mi(C,B){const X=we.get(C);X.outputEncoding=B.outputEncoding,X.instancing=B.instancing,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function xy(C,B,X,U,Z){B.isScene!==!0&&(B=Q),be.resetTextureUnits();const ye=B.fog,Me=U.isMeshStandardMaterial?B.environment:null,Ce=v===null?h.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:ds,Ae=(U.isMeshStandardMaterial?Mt:Ne).get(U.envMap||Me),Fe=U.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Re=!!U.normalMap&&!!X.attributes.tangent,Ie=!!X.morphAttributes.position,ft=!!X.morphAttributes.normal,gn=!!X.morphAttributes.color,Ai=U.toneMapped?h.toneMapping:Wi,kr=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dt=kr!==void 0?kr.length:0,ke=we.get(U),dc=f.state.lights;if(D===!0&&(H===!0||C!==M)){const _n=C===M&&U.id===y;A.setState(U,C,_n)}let bt=!1;U.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==dc.state.version||ke.outputEncoding!==Ce||Z.isInstancedMesh&&ke.instancing===!1||!Z.isInstancedMesh&&ke.instancing===!0||Z.isSkinnedMesh&&ke.skinning===!1||!Z.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Ae||U.fog===!0&&ke.fog!==ye||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==A.numPlanes||ke.numIntersection!==A.numIntersection)||ke.vertexAlphas!==Fe||ke.vertexTangents!==Re||ke.morphTargets!==Ie||ke.morphNormals!==ft||ke.morphColors!==gn||ke.toneMapping!==Ai||pe.isWebGL2===!0&&ke.morphTargetsCount!==dt)&&(bt=!0):(bt=!0,ke.__version=U.version);let Nr=ke.currentProgram;bt===!0&&(Nr=Nn(U,B,Z));let bp=!1,Fo=!1,hc=!1;const Yt=Nr.getUniforms(),Or=ke.uniforms;if(he.useProgram(Nr.program)&&(bp=!0,Fo=!0,hc=!0),U.id!==y&&(y=U.id,Fo=!0),bp||M!==C){if(Yt.setValue(z,"projectionMatrix",C.projectionMatrix),pe.logarithmicDepthBuffer&&Yt.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),M!==C&&(M=C,Fo=!0,hc=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const _n=Yt.map.cameraPosition;_n!==void 0&&_n.setValue(z,k.setFromMatrixPosition(C.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Yt.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Z.isSkinnedMesh)&&Yt.setValue(z,"viewMatrix",C.matrixWorldInverse)}if(Z.isSkinnedMesh){Yt.setOptional(z,Z,"bindMatrix"),Yt.setOptional(z,Z,"bindMatrixInverse");const _n=Z.skeleton;_n&&(pe.floatVertexTextures?(_n.boneTexture===null&&_n.computeBoneTexture(),Yt.setValue(z,"boneTexture",_n.boneTexture,be),Yt.setValue(z,"boneTextureSize",_n.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const pc=X.morphAttributes;if((pc.position!==void 0||pc.normal!==void 0||pc.color!==void 0&&pe.isWebGL2===!0)&&ne.update(Z,X,Nr),(Fo||ke.receiveShadow!==Z.receiveShadow)&&(ke.receiveShadow=Z.receiveShadow,Yt.setValue(z,"receiveShadow",Z.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Or.envMap.value=Ae,Or.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Fo&&(Yt.setValue(z,"toneMappingExposure",h.toneMappingExposure),ke.needsLights&&yy(Or,hc),ye&&U.fog===!0&&je.refreshFogUniforms(Or,ye),je.refreshMaterialUniforms(Or,U,V,L,G),iu.upload(z,ke.uniformsList,Or,be)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(iu.upload(z,ke.uniformsList,Or,be),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Yt.setValue(z,"center",Z.center),Yt.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Yt.setValue(z,"normalMatrix",Z.normalMatrix),Yt.setValue(z,"modelMatrix",Z.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const _n=U.uniformsGroups;for(let mc=0,My=_n.length;mc<My;mc++)if(pe.isWebGL2){const Cp=_n[mc];F.update(Cp,Nr),F.bind(Cp,Nr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nr}function yy(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function Sy(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(C,B,X){we.get(C.texture).__webglTexture=B,we.get(C.depthTexture).__webglTexture=X;const U=we.get(C);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=X===void 0,U.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,B){const X=we.get(C);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,X=0){v=C,g=B,_=X;let U=!0,Z=null,ye=!1,Me=!1;if(C){const Ae=we.get(C);Ae.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),U=!1):Ae.__webglFramebuffer===void 0?be.setupRenderTarget(C):Ae.__hasExternalTextures&&be.rebindTextures(C,we.get(C.texture).__webglTexture,we.get(C.depthTexture).__webglTexture);const Fe=C.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Me=!0);const Re=we.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Z=Re[B],ye=!0):pe.isWebGL2&&C.samples>0&&be.useMultisampledRTT(C)===!1?Z=we.get(C).__webglMultisampledFramebuffer:Z=Re,T.copy(C.viewport),b.copy(C.scissor),S=C.scissorTest}else T.copy(I).multiplyScalar(V).floor(),b.copy(W).multiplyScalar(V).floor(),S=$;if(he.bindFramebuffer(36160,Z)&&pe.drawBuffers&&U&&he.drawBuffers(C,Z),he.viewport(T),he.scissor(b),he.setScissorTest(S),ye){const Ae=we.get(C.texture);z.framebufferTexture2D(36160,36064,34069+B,Ae.__webglTexture,X)}else if(Me){const Ae=we.get(C.texture),Fe=B||0;z.framebufferTextureLayer(36160,36064,Ae.__webglTexture,X||0,Fe)}y=-1},this.readRenderTargetPixels=function(C,B,X,U,Z,ye,Me){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=we.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){he.bindFramebuffer(36160,Ce);try{const Ae=C.texture,Fe=Ae.format,Re=Ae.type;if(Fe!==si&&xe.convert(Fe)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Re===Va&&(ue.has("EXT_color_buffer_half_float")||pe.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Re!==fs&&xe.convert(Re)!==z.getParameter(35738)&&!(Re===Qr&&(pe.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-U&&X>=0&&X<=C.height-Z&&z.readPixels(B,X,U,Z,xe.convert(Fe),xe.convert(Re),ye)}finally{const Ae=v!==null?we.get(v).__webglFramebuffer:null;he.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(C,B,X=0){const U=Math.pow(2,-X),Z=Math.floor(B.image.width*U),ye=Math.floor(B.image.height*U);be.setTexture2D(B,0),z.copyTexSubImage2D(3553,X,0,0,C.x,C.y,Z,ye),he.unbindTexture()},this.copyTextureToTexture=function(C,B,X,U=0){const Z=B.image.width,ye=B.image.height,Me=xe.convert(X.format),Ce=xe.convert(X.type);be.setTexture2D(X,0),z.pixelStorei(37440,X.flipY),z.pixelStorei(37441,X.premultiplyAlpha),z.pixelStorei(3317,X.unpackAlignment),B.isDataTexture?z.texSubImage2D(3553,U,C.x,C.y,Z,ye,Me,Ce,B.image.data):B.isCompressedTexture?z.compressedTexSubImage2D(3553,U,C.x,C.y,B.mipmaps[0].width,B.mipmaps[0].height,Me,B.mipmaps[0].data):z.texSubImage2D(3553,U,C.x,C.y,Me,Ce,B.image),U===0&&X.generateMipmaps&&z.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(C,B,X,U,Z=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=C.max.x-C.min.x+1,Me=C.max.y-C.min.y+1,Ce=C.max.z-C.min.z+1,Ae=xe.convert(U.format),Fe=xe.convert(U.type);let Re;if(U.isData3DTexture)be.setTexture3D(U,0),Re=32879;else if(U.isDataArrayTexture)be.setTexture2DArray(U,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,U.flipY),z.pixelStorei(37441,U.premultiplyAlpha),z.pixelStorei(3317,U.unpackAlignment);const Ie=z.getParameter(3314),ft=z.getParameter(32878),gn=z.getParameter(3316),Ai=z.getParameter(3315),kr=z.getParameter(32877),dt=X.isCompressedTexture?X.mipmaps[0]:X.image;z.pixelStorei(3314,dt.width),z.pixelStorei(32878,dt.height),z.pixelStorei(3316,C.min.x),z.pixelStorei(3315,C.min.y),z.pixelStorei(32877,C.min.z),X.isDataTexture||X.isData3DTexture?z.texSubImage3D(Re,Z,B.x,B.y,B.z,ye,Me,Ce,Ae,Fe,dt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Re,Z,B.x,B.y,B.z,ye,Me,Ce,Ae,dt.data)):z.texSubImage3D(Re,Z,B.x,B.y,B.z,ye,Me,Ce,Ae,Fe,dt),z.pixelStorei(3314,Ie),z.pixelStorei(32878,ft),z.pixelStorei(3316,gn),z.pixelStorei(3315,Ai),z.pixelStorei(32877,kr),Z===0&&U.generateMipmaps&&z.generateMipmap(Re),he.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?be.setTextureCube(C,0):C.isData3DTexture?be.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?be.setTexture2DArray(C,0):be.setTexture2D(C,0),he.unbindTexture()},this.resetState=function(){g=0,_=0,v=null,he.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Qh.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(n){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!n}}});class eb extends Qh{}eb.prototype.isWebGL1Renderer=!0;class tb extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ex extends No{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zg=new ct,zd=new Vv,Gl=new nc,Wl=new N;class nb extends Ze{constructor(e=new fi,t=new ex){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gl.copy(i.boundingSphere),Gl.applyMatrix4(r),Gl.radius+=s,e.ray.intersectsSphere(Gl)===!1)return;Zg.copy(r).invert(),zd.copy(e.ray).applyMatrix4(Zg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,h=m;x<h;x++){const p=u.getX(x);Wl.fromBufferAttribute(d,p),Kg(Wl,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,h=m;x<h;x++)Wl.fromBufferAttribute(d,x),Kg(Wl,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kg(n,e,t,i,r,s,o){const a=zd.distanceSqToPoint(n);if(a<t){const l=new N;zd.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Zn extends fi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new N,f=new N,m=[],x=[],h=[],p=[];for(let g=0;g<=i;g++){const _=[],v=g/i;let y=0;g==0&&o==0?y=.5/t:g==i&&l==Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){const T=M/t;d.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),x.push(d.x,d.y,d.z),f.copy(d).normalize(),h.push(f.x,f.y,f.z),p.push(T+y,1-v),_.push(u++)}c.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){const v=c[g][_+1],y=c[g][_],M=c[g+1][_],T=c[g+1][_+1];(g!==0||o>0)&&m.push(v,y,T),(g!==i-1||l<Math.PI)&&m.push(y,M,T)}this.setIndex(m),this.setAttribute("position",new An(x,3)),this.setAttribute("normal",new An(h,3)),this.setAttribute("uv",new An(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sc extends fi{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],u=[],c=new N,d=new N,f=new N;for(let m=0;m<=i;m++)for(let x=0;x<=r;x++){const h=x/r*s,p=m/i*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(h),d.y=(e+t*Math.cos(p))*Math.sin(h),d.z=t*Math.sin(p),a.push(d.x,d.y,d.z),c.x=e*Math.cos(h),c.y=e*Math.sin(h),f.subVectors(d,c).normalize(),l.push(f.x,f.y,f.z),u.push(x/r),u.push(m/i)}for(let m=1;m<=i;m++)for(let x=1;x<=r;x++){const h=(r+1)*m+x-1,p=(r+1)*(m-1)+x-1,g=(r+1)*(m-1)+x,_=(r+1)*m+x;o.push(h,p,_),o.push(p,g,_)}this.setIndex(o),this.setAttribute("position",new An(a,3)),this.setAttribute("normal",new An(l,3)),this.setAttribute("uv",new An(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class di extends No{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nv,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Qg={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ib{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const m=u[d],x=u[d+1];if(m.global&&(m.lastIndex=0),m.test(c))return x}return null}}}const rb=new ib;class tx{constructor(e){this.manager=e!==void 0?e:rb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class sb extends tx{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Qg.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Wa("img");function l(){c(),Qg.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ob extends tx{constructor(e){super(e)}load(e,t,i,r){const s=new fn,o=new sb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class nx extends Ze{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Sf=new ct,Jg=new N,e_=new N;class ab{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $h,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Jg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jg),e_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(e_),t.updateMatrixWorld(),Sf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const t_=new ct,ea=new N,Mf=new N;class lb extends ab{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ea.setFromMatrixPosition(e.matrixWorld),i.position.copy(ea),Mf.copy(i.position),Mf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Mf),i.updateMatrixWorld(),r.makeTranslation(-ea.x,-ea.y,-ea.z),t_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(t_)}}class ub extends nx{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new lb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cb extends nx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class n_{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(sn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qh);function Ni(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ix(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},To={duration:.5,overwrite:!1,delay:0},Jh,Gt,pt,Wn=1e8,We=1/Wn,Fd=Math.PI*2,fb=Fd/4,db=0,rx=Math.sqrt,hb=Math.cos,pb=Math.sin,Lt=function(e){return typeof e=="string"},ot=function(e){return typeof e=="function"},Yi=function(e){return typeof e=="number"},ep=function(e){return typeof e>"u"},Ci=function(e){return typeof e=="object"},dn=function(e){return e!==!1},sx=function(){return typeof window<"u"},Hl=function(e){return ot(e)||Lt(e)},ox=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wt=Array.isArray,Ud=/(?:-?\.?\d|\.)+/gi,ax=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Js=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,lx=/[+-]=-?[.\d]+/,ux=/[^,'"\[\]\s]+/gi,mb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,tt,Fn,Bd,tp,Dn={},Du={},cx,fx=function(e){return(Du=gs(e,Dn))&&Rn},np=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ru=function(e,t){return!t&&console.warn(e)},dx=function(e,t){return e&&(Dn[e]=t)&&Du&&(Du[e]=t)||Dn},Ha=function(){return 0},gb={suppressEvents:!0,isStart:!0,kill:!1},ru={suppressEvents:!0,kill:!1},_b={suppressEvents:!0},ip={},Mr=[],Vd={},hx,Mn={},Ef={},i_=30,su=[],rp="",sp=function(e){var t=e[0],i,r;if(Ci(t)||ot(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=su.length;r--&&!su[r].targetTest(t););i=su[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Nx(e[r],i)))||e.splice(r,1);return e},is=function(e){return e._gsap||sp(Hn(e))[0]._gsap},px=function(e,t,i){return(i=e[t])&&ot(i)?e[t]():ep(i)&&e.getAttribute&&e.getAttribute(t)||i},hn=function(e,t){return(e=e.split(",")).forEach(t)||e},lt=function(e){return Math.round(e*1e5)/1e5||0},Rt=function(e){return Math.round(e*1e7)/1e7||0},co=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},vb=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Iu=function(){var e=Mr.length,t=Mr.slice(0),i,r;for(Vd={},Mr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},mx=function(e,t,i,r){Mr.length&&!Gt&&Iu(),e.render(t,i,r||Gt&&t<0&&(e._initted||e._startAt)),Mr.length&&!Gt&&Iu()},gx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ux).length<2?t:Lt(e)?e.trim():e},_x=function(e){return e},$n=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},xb=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},gs=function(e,t){for(var i in t)e[i]=t[i];return e},r_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ci(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},ku=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},xa=function(e){var t=e.parent||tt,i=e.keyframes?xb(Wt(e.keyframes)):$n;if(dn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},yb=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},vx=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},oc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Cr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},rs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Sb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Gd=function(e,t,i,r){return e._startAt&&(Gt?e._startAt.revert(ru):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Mb=function n(e){return!e||e._ts&&n(e.parent)},s_=function(e){return e._repeat?bo(e._tTime,e=e.duration()+e._rDelay)*e:0},bo=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Nu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ac=function(e){return e._end=Rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||We)||0))},lc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Rt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ac(e),i._dirty||rs(i,e)),e},xx=function(e,t){var i;if((t._time||t._initted&&!t._dur)&&(i=Nu(e.rawTime(),t),(!t._dur||rl(0,t.totalDuration(),i)-t._tTime>We)&&t.render(i,!0)),rs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-We}},wi=function(e,t,i,r){return t.parent&&Cr(t),t._start=Rt((Yi(i)?i:i||e!==tt?zn(e,i,t):e._time)+t._delay),t._end=Rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),vx(e,t,"_first","_last",e._sort?"_start":0),Wd(t)||(e._recent=t),r||xx(e,t),e._ts<0&&lc(e,e._tTime),e},yx=function(e,t){return(Dn.ScrollTrigger||np("scrollTrigger",t))&&Dn.ScrollTrigger.create(t,e)},Sx=function(e,t,i,r,s){if(ap(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Gt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&hx!==En.frame)return Mr.push(e),e._lazy=[s,r],1},wb=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Wd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Eb=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&wb(e)&&!(!e._initted&&Wd(e))||(e._ts<0||e._dp._ts<0)&&!Wd(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=rl(0,e._tDur,t),c=bo(l,a),e._yoyo&&c&1&&(o=1-o),c!==bo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Gt||r||e._zTime===We||!t&&e._zTime){if(!e._initted&&Sx(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?We:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Gd(e,t,i,!0),e._onUpdate&&!i&&jn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&jn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Cr(e,1),!i&&!Gt&&(jn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Tb=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Co=function(e,t,i,r){var s=e._repeat,o=Rt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Rt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&lc(e,e._tTime=e._tDur*a),e.parent&&ac(e),i||rs(e.parent,e),e},o_=function(e){return e instanceof on?rs(e):Co(e,e._dur)},bb={_start:0,endTime:Ha,totalDuration:Ha},zn=function n(e,t,i){var r=e.labels,s=e._recent||bb,o=e.duration()>=Wn?s.endTime(!1):e._dur,a,l,u;return Lt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Wt(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},ya=function(e,t,i){var r=Yi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=dn(l.vars.inherit)&&l.parent;o.immediateRender=dn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new vt(t[0],o,t[s+1])},Ir=function(e,t){return e||e===0?t(e):t},rl=function(e,t,i){return i<e?e:i>t?t:i},Vt=function(e,t){return!Lt(e)||!(t=mb.exec(e))?"":t[1]},Cb=function(e,t,i){return Ir(i,function(r){return rl(e,t,r)})},Hd=[].slice,Mx=function(e,t){return e&&Ci(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ci(e[0]))&&!e.nodeType&&e!==Fn},Ab=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Lt(r)&&!t||Mx(r,1)?(s=i).push.apply(s,Hn(r)):i.push(r)})||i},Hn=function(e,t,i){return pt&&!t&&pt.selector?pt.selector(e):Lt(e)&&!i&&(Bd||!Ao())?Hd.call((t||tp).querySelectorAll(e),0):Wt(e)?Ab(e,i):Mx(e)?Hd.call(e,0):e?[e]:[]},jd=function(e){return e=Hn(e)[0]||Ru("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Hn(t,i.querySelectorAll?i:i===e?Ru("Invalid scope")||tp.createElement("div"):e)}},wx=function(e){return e.sort(function(){return .5-Math.random()})},Ex=function(e){if(ot(e))return e;var t=Ci(e)?e:{each:e},i=ss(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return Lt(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,m,x){var h=(x||t).length,p=o[h],g,_,v,y,M,T,b,S,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,Wn])[1],!w){for(b=-Wn;b<(b=x[w++].getBoundingClientRect().left)&&w<h;);w--}for(p=o[h]=[],g=l?Math.min(w,h)*c-.5:r%w,_=w===Wn?0:l?h*d/w-.5:r/w|0,b=0,S=Wn,T=0;T<h;T++)v=T%w-g,y=_-(T/w|0),p[T]=M=u?Math.abs(u==="y"?y:v):rx(v*v+y*y),M>b&&(b=M),M<S&&(S=M);r==="random"&&wx(p),p.max=b-S,p.min=S,p.v=h=(parseFloat(t.amount)||parseFloat(t.each)*(w>h?h-1:u?u==="y"?h/w:w:Math.max(w,h/w))||0)*(r==="edges"?-1:1),p.b=h<0?s-h:s,p.u=Vt(t.amount||t.each)||0,i=i&&h<0?Rx(i):i}return h=(p[f]-p.min)/p.max||0,Rt(p.b+(i?i(h):h)*p.v)+p.u}},Xd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Rt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Yi(i)?0:Vt(i))}},Tx=function(e,t){var i=Wt(e),r,s;return!i&&Ci(e)&&(r=i=e.radius||Wn,e.values?(e=Hn(e.values),(s=!Yi(e[0]))&&(r*=r)):e=Xd(e.increment)),Ir(t,i?ot(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Wn,c=0,d=e.length,f,m;d--;)s?(f=e[d].x-a,m=e[d].y-l,f=f*f+m*m):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Yi(o)?c:c+Vt(o)}:Xd(e))},bx=function(e,t,i,r){return Ir(Wt(e)?!t:i===!0?!!(i=0):!r,function(){return Wt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Pb=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Lb=function(e,t){return function(i){return e(parseFloat(i))+(t||Vt(i))}},Db=function(e,t,i){return Ax(e,t,0,1,i)},Cx=function(e,t,i){return Ir(i,function(r){return e[~~t(r)]})},Rb=function n(e,t,i){var r=t-e;return Wt(e)?Cx(e,n(0,e.length),t):Ir(i,function(s){return(r+(s-e)%r)%r+e})},Ib=function n(e,t,i){var r=t-e,s=r*2;return Wt(e)?Cx(e,n(0,e.length-1),t):Ir(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},ja=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?ux:Ud),i+=e.substr(t,r-t)+bx(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},Ax=function(e,t,i,r,s){var o=t-e,a=r-i;return Ir(s,function(l){return i+((l-e)/o*a||0)})},kb=function n(e,t,i,r){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=Lt(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Wt(e)&&!Wt(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(x){x*=d;var h=Math.min(f,~~x);return c[h](x-h)},i=t}else r||(e=gs(Wt(e)?[]:{},e));if(!c){for(l in t)op.call(a,e,l,"get",t[l]);s=function(x){return cp(x,a)||(o?e.p:e)}}}return Ir(i,s)},a_=function(e,t,i){var r=e.labels,s=Wn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},jn=function(e,t,i){var r=e.vars,s=r[t],o=pt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Mr.length&&Iu(),a&&(pt=a),c=l?s.apply(u,l):s.call(u),pt=o,c},la=function(e){return Cr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Gt),e.progress()<1&&jn(e,"onInterrupt"),e},eo,Nb=function(e){e=!e.name&&e.default||e;var t=e.name,i=ot(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Ha,render:cp,add:op,kill:Kb,modifier:Zb,rawVars:0},o={targetTest:0,get:0,getSetter:up,aliases:{},register:0};if(Ao(),e!==r){if(Mn[t])return;$n(r,$n(ku(e,s),o)),gs(r.prototype,gs(s,ku(e,o))),Mn[r.prop=t]=r,e.targetTest&&(su.push(r),ip[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}dx(t,r),e.register&&e.register(Rn,r,pn)},Ge=255,ua={aqua:[0,Ge,Ge],lime:[0,Ge,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ge],navy:[0,0,128],white:[Ge,Ge,Ge],olive:[128,128,0],yellow:[Ge,Ge,0],orange:[Ge,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ge,0,0],pink:[Ge,192,203],cyan:[0,Ge,Ge],transparent:[Ge,Ge,Ge,0]},Tf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ge+.5|0},Px=function(e,t,i){var r=e?Yi(e)?[e>>16,e>>8&Ge,e&Ge]:0:ua.black,s,o,a,l,u,c,d,f,m,x;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ua[e])r=ua[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ge,r&Ge,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ge,e&Ge]}else if(e.substr(0,3)==="hsl"){if(r=x=e.match(Ud),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Tf(l+1/3,s,o),r[1]=Tf(l,s,o),r[2]=Tf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(ax),i&&r.length<4&&(r[3]=1),r}else r=e.match(Ud)||ua.transparent;r=r.map(Number)}return t&&!x&&(s=r[0]/Ge,o=r[1]/Ge,a=r[2]/Ge,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(m=d-f,u=c>.5?m/(2-d-f):m/(d+f),l=d===s?(o-a)/m+(o<a?6:0):d===o?(a-s)/m+2:(s-o)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},Lx=function(e){var t=[],i=[],r=-1;return e.split(wr).forEach(function(s){var o=s.match(Js)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},l_=function(e,t,i){var r="",s=(e+r).match(wr),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=Px(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=Lx(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(wr,"1").split(Js),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(wr),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},wr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ua)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Ob=/hsl[a]?\(/,Dx=function(e){var t=e.join(" "),i;if(wr.lastIndex=0,wr.test(t))return i=Ob.test(t),e[1]=l_(e[1],i),e[0]=l_(e[0],i,Lx(e[1])),!0},Xa,En=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,m,x=function h(p){var g=n()-r,_=p===!0,v,y,M,T;if(g>e&&(i+=g-t),r+=g,M=r-i,v=M-o,(v>0||_)&&(T=++d.frame,f=M-d.time*1e3,d.time=M=M/1e3,o+=v+(v>=s?4:s-v),y=1),_||(l=u(h)),y)for(m=0;m<a.length;m++)a[m](M,f,T,p)};return d={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){cx&&(!Bd&&sx()&&(Fn=Bd=window,tp=Fn.document||{},Dn.gsap=Rn,(Fn.gsapVersions||(Fn.gsapVersions=[])).push(Rn.version),fx(Du||Fn.GreenSockGlobals||!Fn.gsap&&Fn||{}),c=Fn.requestAnimationFrame),l&&d.sleep(),u=c||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Xa=1,x(2))},sleep:function(){(c?Fn.cancelAnimationFrame:clearTimeout)(l),Xa=0,u=Ha},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,g,_){var v=g?function(y,M,T,b){p(y,M,T,b),d.remove(v)}:p;return d.remove(p),a[_?"unshift":"push"](v),Ao(),v},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&m>=g&&m--},_listeners:a},d}(),Ao=function(){return!Xa&&En.wake()},De={},zb=/^[\d.\-M][\d.\-,\s]/,Fb=/["']/g,Ub=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(Fb,"").trim():+u,r=l.substr(a+1).trim();return t},Bb=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Vb=function(e){var t=(e+"").split("("),i=De[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Ub(t[1])]:Bb(e).split(",").map(gx)):De._CE&&zb.test(e)?De._CE("",e):i},Rx=function(e){return function(t){return 1-e(1-t)}},Ix=function n(e,t){for(var i=e._first,r;i;)i instanceof on?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},ss=function(e,t){return e&&(ot(e)?e:De[e]||Vb(e))||t},ys=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return hn(e,function(a){De[a]=Dn[a]=s,De[o=a.toLowerCase()]=i;for(var l in s)De[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=De[a+"."+l]=s[l]}),s},kx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},bf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Fd*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*pb((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:kx(a);return s=Fd/s,l.config=function(u,c){return n(e,u,c)},l},Cf=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:kx(i);return r.config=function(s){return n(e,s)},r};hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ys(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});De.Linear.easeNone=De.none=De.Linear.easeIn;ys("Elastic",bf("in"),bf("out"),bf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};ys("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ys("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});ys("Circ",function(n){return-(rx(1-n*n)-1)});ys("Sine",function(n){return n===1?1:-hb(n*fb)+1});ys("Back",Cf("in"),Cf("out"),Cf());De.SteppedEase=De.steps=Dn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-We;return function(a){return((r*rl(0,o,a)|0)+s)*i}}};To.ease=De["quad.out"];hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return rp+=n+","+n+"Params,"});var Nx=function(e,t){this.id=db++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:px,this.set=t?t.getSetter:up},Po=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Co(this,+t.duration,1,1),this.data=t.data,pt&&(this._ctx=pt,pt.data.push(this)),Xa||En.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Co(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ao(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(lc(this,i),!s._dp||s.parent||xx(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&wi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===We||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),mx(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+s_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+s_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?bo(this._tTime,s)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-We?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Nu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-We?0:this._rts,this.totalTime(rl(-this._delay,this._tDur,r),!0),ac(this),Sb(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ao(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==We&&(this._tTime-=We)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&wi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(dn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=_b);var r=Gt;return Gt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Gt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,o_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,o_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(zn(this,i),dn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,dn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-We:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-We,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-We)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=ot(i)?i:_x,a=function(){var u=r.then;r.then=null,ot(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){la(this)},n}();$n(Po.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-We,_prom:0,_ps:!1,_rts:1});var on=function(n){ix(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=dn(i.sortChildren),tt&&wi(i.parent||tt,Ni(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&yx(Ni(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return ya(0,arguments,this),this},t.from=function(r,s,o){return ya(1,arguments,this),this},t.fromTo=function(r,s,o,a){return ya(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,xa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new vt(r,s,zn(this,o),1),this},t.call=function(r,s,o){return wi(this,vt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new vt(r,o,zn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,xa(o).immediateRender=dn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,xa(a).immediateRender=dn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Rt(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,m,x,h,p,g,_,v,y,M,T,b;if(this!==tt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,y=this._start,v=this._ts,g=!v,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,p=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(f=Rt(c%p),c===l?(h=this._repeat,f=u):(h=~~(c/p),h&&h===c/p&&(f=u,h--),f>u&&(f=u)),M=bo(this._tTime,p),!a&&this._tTime&&M!==h&&(M=h),T&&h&1&&(f=u-f,b=1),h!==M&&!this._lock){var S=T&&M&1,w=S===(T&&h&1);if(h<M&&(S=!S),a=S?0:u,this._lock=1,this.render(a||(b?0:Rt(h*p)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&jn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,w&&(this._lock=2,a=S?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;Ix(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=Tb(this,Rt(a),Rt(f)),_&&(c-=f-(f=_._start))),this._tTime=c,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&(jn(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(m=this._first;m;){if(x=m._next,(m._act||f>=m._start)&&m._ts&&_!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,o),f!==this._time||!this._ts&&!g){_=0,x&&(c+=this._zTime=-We);break}}m=x}else{m=this._last;for(var L=r<0?r:f;m;){if(x=m._prev,(m._act||L<=m._end)&&m._ts&&_!==m){if(m.parent!==this)return this.render(r,s,o);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,s,o||Gt&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!g){_=0,x&&(c+=this._zTime=L?-We:We);break}}m=x}}if(_&&!s&&(this.pause(),_.render(f>=a?0:-We)._zTime=f>=a?1:-1,this._ts))return this._start=y,ac(this),this.render(r,s,o);this._onUpdate&&!s&&jn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Cr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(jn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Yi(s)||(s=zn(this,s,r)),!(r instanceof Po)){if(Wt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Lt(r))return this.addLabel(r,s);if(ot(r))r=vt.delayedCall(0,r);else return this}return this!==r?wi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Wn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof vt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Lt(r)?this.removeLabel(r):ot(r)?this.killTweensOf(r):(oc(this,r),r===this._recent&&(this._recent=this._last),rs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Rt(En.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=zn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=vt.delayedCall(0,s||Ha,o);return a.data="isPause",this._hasPause=1,wi(this,a,zn(this,r))},t.removePause=function(r){var s=this._first;for(r=zn(this,r);s;)s._start===r&&s.data==="isPause"&&Cr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)cr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Hn(r),l=this._first,u=Yi(s),c;l;)l instanceof vt?vb(l._targets,a)&&(u?(!cr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=zn(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,m,x=vt.to(o,$n({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||We,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());x._dur!==p&&Co(x,p,0,1).render(x._time,!0,!0),m=1}c&&c.apply(x,d||[])}},s));return f?x.render(0):x},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,$n({startAt:{time:zn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),a_(this,zn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),a_(this,zn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+We)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return rs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),rs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Wn,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,wi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Co(o,o===tt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(tt._ts&&(mx(tt,Nu(r,tt)),hx=En.frame),En.frame>=i_){i_+=Pn.autoSleep||120;var s=tt._first;if((!s||!s._ts)&&Pn.autoSleep&&En._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||En.sleep()}}},e}(Po);$n(on.prototype,{_lock:0,_hasPause:0,_forcing:0});var Gb=function(e,t,i,r,s,o,a){var l=new pn(this._pt,e,t,0,1,Vx,null,s),u=0,c=0,d,f,m,x,h,p,g,_;for(l.b=i,l.e=r,i+="",r+="",(g=~r.indexOf("random("))&&(r=ja(r)),o&&(_=[i,r],o(_,e,t),i=_[0],r=_[1]),f=i.match(wf)||[];d=wf.exec(r);)x=d[0],h=r.substring(u,d.index),m?m=(m+1)%5:h.substr(-5)==="rgba("&&(m=1),x!==f[c++]&&(p=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:h||c===1?h:",",s:p,c:x.charAt(1)==="="?co(p,x)-p:parseFloat(x)-p,m:m&&m<4?Math.round:0},u=wf.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(lx.test(r)||g)&&(l.e=0),this._pt=l,l},op=function(e,t,i,r,s,o,a,l,u,c){ot(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:ot(d)?u?e[t.indexOf("set")||!ot(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,m=ot(d)?u?qb:Ux:lp,x;if(Lt(r)&&(~r.indexOf("random(")&&(r=ja(r)),r.charAt(1)==="="&&(x=co(f,r)+(Vt(f)||0),(x||x===0)&&(r=x))),!c||f!==r||qd)return!isNaN(f*r)&&r!==""?(x=new pn(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?$b:Bx,0,m),u&&(x.fp=u),a&&x.modifier(a,this,e),this._pt=x):(!d&&!(t in e)&&np(t,r),Gb.call(this,e,t,f,r,m,l||Pn.stringFilter,u))},Wb=function(e,t,i,r,s){if(ot(e)&&(e=Sa(e,s,t,i,r)),!Ci(e)||e.style&&e.nodeType||Wt(e)||ox(e))return Lt(e)?Sa(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Sa(e[a],s,t,i,r);return o},Ox=function(e,t,i,r,s,o){var a,l,u,c;if(Mn[e]&&(a=new Mn[e]).init(s,a.rawVars?t[e]:Wb(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new pn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==eo))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},cr,qd,ap=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.onUpdateParams,d=r.callbackScope,f=r.runBackwards,m=r.yoyoEase,x=r.keyframes,h=r.autoRevert,p=e._dur,g=e._startAt,_=e._targets,v=e.parent,y=v&&v.data==="nested"?v.vars.targets:_,M=e._overwrite==="auto"&&!Jh,T=e.timeline,b,S,w,L,V,j,O,I,W,$,K,D,H;if(T&&(!x||!s)&&(s="none"),e._ease=ss(s,To.ease),e._yEase=m?Rx(ss(m===!0?s:m,To.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!T&&!!r.runBackwards,!T||x&&!r.stagger){if(I=_[0]?is(_[0]).harness:0,D=I&&r[I.prop],b=ku(r,ip),g&&(g._zTime<0&&g.progress(1),t<0&&f&&a&&!h?g.render(-1,!0):g.revert(f&&p?ru:gb),g._lazy=0),o){if(Cr(e._startAt=vt.set(_,$n({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!g&&dn(l),startAt:null,delay:0,onUpdate:u,onUpdateParams:c,callbackScope:d,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt||!a&&!h)&&e._startAt.revert(ru),a&&p&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(f&&p&&!g){if(t&&(a=!1),w=$n({overwrite:!1,data:"isFromStart",lazy:a&&!g&&dn(l),immediateRender:a,stagger:0,parent:v},b),D&&(w[I.prop]=D),Cr(e._startAt=vt.set(_,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt?e._startAt.revert(ru):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,We,We);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&dn(l)||l&&!p,S=0;S<_.length;S++){if(V=_[S],O=V._gsap||sp(_)[S]._gsap,e._ptLookup[S]=$={},Vd[O.id]&&Mr.length&&Iu(),K=y===_?S:y.indexOf(V),I&&(W=new I).init(V,D||b,e,K,y)!==!1&&(e._pt=L=new pn(e._pt,V,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(G){$[G]=L}),W.priority&&(j=1)),!I||D)for(w in b)Mn[w]&&(W=Ox(w,b,e,K,V,y))?W.priority&&(j=1):$[w]=L=op.call(e,V,w,"get",b[w],K,y,0,r.stringFilter);e._op&&e._op[S]&&e.kill(V,e._op[S]),M&&e._pt&&(cr=e,tt.killTweensOf(V,$,e.globalTime(t)),H=!e.parent,cr=0),e._pt&&l&&(Vd[O.id]=1)}j&&Gx(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!H,x&&t<=0&&T.render(Wn,!0,!0)},Hb=function(e,t,i,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,c,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return qd=1,e.vars[t]="+=0",ap(e,a),qd=0,1;l.push(u)}for(f=l.length;f--;)c=l[f],u=c._pt||c,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,c.e&&(c.e=lt(i)+Vt(c.e)),c.b&&(c.b=u.s+Vt(c.b))},jb=function(e,t){var i=e[0]?is(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=gs({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Xb=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Wt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Sa=function(e,t,i,r,s){return ot(e)?e.call(t,i,r,s):Lt(e)&&~e.indexOf("random(")?ja(e):e},zx=rp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Fx={};hn(zx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Fx[n]=1});var vt=function(n){ix(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:xa(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,m=l.overwrite,x=l.keyframes,h=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,_=r.parent||tt,v=(Wt(i)||ox(i)?Yi(i[0]):"length"in r)?[i]:Hn(i),y,M,T,b,S,w,L,V;if(a._targets=v.length?sp(v):Ru("GSAP target "+i+" not found. https://greensock.com",!Pn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,x||f||Hl(u)||Hl(c)){if(r=a.vars,y=a.timeline=new on({data:"nested",defaults:h||{},targets:_&&_.data==="nested"?_.vars.targets:v}),y.kill(),y.parent=y._dp=Ni(a),y._start=0,f||Hl(u)||Hl(c)){if(b=v.length,L=f&&Ex(f),Ci(f))for(S in f)~zx.indexOf(S)&&(V||(V={}),V[S]=f[S]);for(M=0;M<b;M++)T=ku(r,Fx),T.stagger=0,g&&(T.yoyoEase=g),V&&gs(T,V),w=v[M],T.duration=+Sa(u,Ni(a),M,w,v),T.delay=(+Sa(c,Ni(a),M,w,v)||0)-a._delay,!f&&b===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),y.to(w,T,L?L(M,w,v):0),y._ease=De.none;y.duration()?u=c=0:a.timeline=0}else if(x){xa($n(y.vars.defaults,{ease:"none"})),y._ease=ss(x.ease||r.ease||"none");var j=0,O,I,W;if(Wt(x))x.forEach(function($){return y.to(v,$,">")}),y.duration();else{T={};for(S in x)S==="ease"||S==="easeEach"||Xb(S,x[S],T,x.easeEach);for(S in T)for(O=T[S].sort(function($,K){return $.t-K.t}),j=0,M=0;M<O.length;M++)I=O[M],W={ease:I.e,duration:(I.t-(M?O[M-1].t:0))/100*u},W[S]=I.v,y.to(v,W,j),j+=W.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return m===!0&&!Jh&&(cr=Ni(a),tt.killTweensOf(v),cr=0),wi(_,Ni(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!x&&a._start===Rt(_._time)&&dn(d)&&Mb(Ni(a))&&_.data!=="nested")&&(a._tTime=-We,a.render(Math.max(0,-c)||0)),p&&yx(Ni(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-We&&!c?l:r<We?0:r,f,m,x,h,p,g,_,v,y;if(!u)Eb(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(f=d,v=this.timeline,this._repeat){if(h=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(h*100+r,s,o);if(f=Rt(d%h),d===l?(x=this._repeat,f=u):(x=~~(d/h),x&&x===d/h&&(f=u,x--),f>u&&(f=u)),g=this._yoyo&&x&1,g&&(y=this._yEase,f=u-f),p=bo(this._tTime,h),f===a&&!o&&this._initted)return this._tTime=d,this;x!==p&&(v&&this._yEase&&Ix(v,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=o=1,this.render(Rt(h*x),!0).invalidate()._lock=0))}if(!this._initted){if(Sx(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time)return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(y||this._ease)(f/u),this._from&&(this.ratio=_=1-_),f&&!a&&!s&&(jn(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(_,m.d),m=m._next;v&&v.render(r<0?r:!f&&g?-We:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Gd(this,r,s,o),jn(this,"onUpdate")),this._repeat&&x!==p&&this.vars.onRepeat&&!s&&this.parent&&jn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Gd(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Cr(this,1),!s&&!(c&&!a)&&(d||a||g)&&(jn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){Xa||En.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ap(this,l),u=this._ease(l/this._dur),Hb(this,r,s,o,a,u,l)?this.resetTo(r,s,o,a):(lc(this,0),this.parent||vx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?la(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,cr&&cr.vars.overwrite!==!0)._first||la(this),this.parent&&o!==this.timeline.totalDuration()&&Co(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Hn(r):a,u=this._ptLookup,c=this._pt,d,f,m,x,h,p,g;if((!s||s==="all")&&yb(a,l))return s==="all"&&(this._pt=0),la(this);for(d=this._op=this._op||[],s!=="all"&&(Lt(s)&&(h={},hn(s,function(_){return h[_]=1}),s=h),s=jb(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){f=u[g],s==="all"?(d[g]=s,x=f,m={}):(m=d[g]=d[g]||{},x=s);for(h in x)p=f&&f[h],p&&((!("kill"in p.d)||p.d.kill(h)===!0)&&oc(this,p,"_pt"),delete f[h]),m!=="all"&&(m[h]=1)}return this._initted&&!this._pt&&c&&la(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ya(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return ya(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return tt.killTweensOf(r,s,o)},e}(Po);$n(vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hn("staggerTo,staggerFrom,staggerFromTo",function(n){vt[n]=function(){var e=new on,t=Hd.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var lp=function(e,t,i){return e[t]=i},Ux=function(e,t,i){return e[t](i)},qb=function(e,t,i,r){return e[t](r.fp,i)},Yb=function(e,t,i){return e.setAttribute(t,i)},up=function(e,t){return ot(e[t])?Ux:ep(e[t])&&e.setAttribute?Yb:lp},Bx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},$b=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Vx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},cp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Zb=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},Kb=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?oc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},Qb=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Gx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},pn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Bx,this.d=l||this,this.set=u||lp,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Qb,this.m=i,this.mt=s,this.tween=r},n}();hn(rp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return ip[n]=1});Dn.TweenMax=Dn.TweenLite=vt;Dn.TimelineLite=Dn.TimelineMax=on;tt=new on({sortChildren:!1,defaults:To,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pn.stringFilter=Dx;var Lo=[],ou={},Jb=[],u_=0,Af=function(e){return(ou[e]||Jb).map(function(t){return t()})},Yd=function(){var e=Date.now(),t=[];e-u_>2&&(Af("matchMediaInit"),Lo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Fn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Af("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i)}),u_=e,Af("matchMedia"))},Wx=function(){function n(t,i){this.selector=i&&jd(i),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){ot(i)&&(s=r,r=i,i=ot);var o=this,a=function(){var u=pt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=jd(s)),pt=o,d=r.apply(o,arguments),ot(d)&&o._r.push(d),pt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===ot?a(o):i?o[i]=a:a},e.ignore=function(i){var r=pt;pt=null,i(this),pt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof vt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,u){return u.g-l.g||-1}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return!(l instanceof Po)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r){var a=Lo.indexOf(this);~a&&Lo.splice(a,1)}},e.revert=function(i){this.kill(i||{})},n}(),eC=function(){function n(t){this.contexts=[],this.scope=t}var e=n.prototype;return e.add=function(i,r,s){Ci(i)||(i={matches:i});var o=new Wx(0,s||this.scope),a=o.conditions={},l,u,c;this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Fn.matchMedia(i[u]),l&&(Lo.indexOf(o)<0&&Lo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Yd):l.addEventListener("change",Yd)));return c&&r(o),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Ou={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Nb(r)})},timeline:function(e){return new on(e)},getTweensOf:function(e,t){return tt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Lt(e)&&(e=Hn(e)[0]);var s=is(e||{}).get,o=i?_x:gx;return i==="native"&&(i=""),e&&(t?o((Mn[t]&&Mn[t].get||s)(e,t,i,r)):function(a,l,u){return o((Mn[a]&&Mn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Hn(e),e.length>1){var r=e.map(function(c){return Rn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=Mn[t],a=is(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;eo._pt=0,d.init(e,i?c+i:c,eo,0,[e]),d.render(1,d),eo._pt&&cp(1,eo)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=Rn.to(e,gs((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ss(e.ease,To.ease)),r_(To,e||{})},config:function(e){return r_(Pn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Mn[a]&&!Dn[a]&&Ru(t+" effect requires "+a+" plugin.")}),Ef[t]=function(a,l,u){return i(Hn(a),$n(l||{},s),u)},o&&(on.prototype[t]=function(a,l,u){return this.add(Ef[t](a,Ci(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){De[e]=ss(t)},parseEase:function(e,t){return arguments.length?ss(e,t):De},getById:function(e){return tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new on(e),r,s;for(i.smoothChildTiming=dn(e.smoothChildTiming),tt.remove(i),i._dp=0,i._time=i._tTime=tt._time,r=tt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof vt&&r.vars.onComplete===r._targets[0]))&&wi(i,r,r._start-r._delay),r=s;return wi(tt,i,0),i},context:function(e,t){return e?new Wx(e,t):pt},matchMedia:function(e){return new eC(e)},matchMediaRefresh:function(){return Lo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Yd()},addEventListener:function(e,t){var i=ou[e]||(ou[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=ou[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:Rb,wrapYoyo:Ib,distribute:Ex,random:bx,snap:Tx,normalize:Db,getUnit:Vt,clamp:Cb,splitColor:Px,toArray:Hn,selector:jd,mapRange:Ax,pipe:Pb,unitize:Lb,interpolate:kb,shuffle:wx},install:fx,effects:Ef,ticker:En,updateRoot:on.updateRoot,plugins:Mn,globalTimeline:tt,core:{PropTween:pn,globals:dx,Tween:vt,Timeline:on,Animation:Po,getCache:is,_removeLinkedListItem:oc,reverting:function(){return Gt},context:function(e){return e&&pt&&(pt.data.push(e),e._ctx=pt),pt},suppressOverwrites:function(e){return Jh=e}}};hn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Ou[n]=vt[n]});En.add(on.updateRoot);eo=Ou.to({},{duration:0});var tC=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},nC=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=tC(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Pf=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Lt(s)&&(l={},hn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}nC(a,s)}}}},Rn=Ou.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Gt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Pf("roundProps",Xd),Pf("modifiers"),Pf("snap",Tx))||Ou;vt.version=on.version=Rn.version="3.11.4";cx=1;sx()&&Ao();De.Power0;De.Power1;De.Power2;De.Power3;De.Power4;De.Linear;De.Quad;De.Cubic;De.Quart;De.Quint;De.Strong;De.Elastic;De.Back;De.SteppedEase;De.Bounce;De.Sine;De.Expo;De.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var c_,fr,fo,fp,Jr,f_,dp,iC=function(){return typeof window<"u"},$i={},Xr=180/Math.PI,ho=Math.PI/180,zs=Math.atan2,d_=1e8,hp=/([A-Z])/g,rC=/(left|right|width|margin|padding|x)/i,sC=/[\s,\(]\S/,Vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$d=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},oC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},aC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},lC=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Hx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},jx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},uC=function(e,t,i){return e.style[t]=i},cC=function(e,t,i){return e.style.setProperty(t,i)},fC=function(e,t,i){return e._gsap[t]=i},dC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},hC=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},pC=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},nt="transform",ui=nt+"Origin",mC=function(e,t){var i=this,r=this.target,s=r.style;if(e in $i){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Vi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=zi(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:zi(r,e)),this.props.indexOf(nt)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ui,t,"")),e=nt}(s||t)&&this.props.push(e,t,s[e])},Xx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},gC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].replace(hp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=dp(),s&&!s.isStart&&!i[nt]&&(Xx(i),r.uncache=1)}},qx=function(e,t){var i={target:e,props:[],revert:gC,save:mC};return t&&t.split(",").forEach(function(r){return i.save(r)}),i},Yx,Zd=function(e,t){var i=fr.createElementNS?fr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):fr.createElement(e);return i.style?i:fr.createElement(e)},bi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(hp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Do(t)||t,1)||""},h_="O,Moz,ms,Ms,Webkit".split(","),Do=function(e,t,i){var r=t||Jr,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(h_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?h_[o]:"")+e},Kd=function(){iC()&&window.document&&(c_=window,fr=c_.document,fo=fr.documentElement,Jr=Zd("div")||{style:{}},Zd("div"),nt=Do(nt),ui=nt+"Origin",Jr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Yx=!!Do("perspective"),dp=Rn.core.reverting,fp=1)},Lf=function n(e){var t=Zd("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(fo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),fo.removeChild(t),this.style.cssText=s,o},p_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},$x=function(e){var t;try{t=e.getBBox()}catch{t=Lf.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Lf||(t=Lf.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+p_(e,["x","cx","x1"])||0,y:+p_(e,["y","cy","y1"])||0,width:0,height:0}:t},Zx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&$x(e))},qa=function(e,t){if(t){var i=e.style;t in $i&&t!==ui&&(t=nt),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(hp,"-$1").toLowerCase())):i.removeAttribute(t)}},dr=function(e,t,i,r,s,o){var a=new pn(e._pt,t,i,0,1,o?jx:Hx);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},m_={deg:1,rad:1,turn:1},_C={grid:1,flex:1},Ar=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Jr.style,l=rC.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",m=r==="%",x,h,p,g;return r===o||!s||m_[r]||m_[o]?s:(o!=="px"&&!f&&(s=n(e,t,i,"px")),g=e.getCTM&&Zx(e),(m||o==="%")&&($i[t]||~t.indexOf("adius"))?(x=g?e.getBBox()[l?"width":"height"]:e[c],lt(m?s/x*d:s/100*x)):(a[l?"width":"height"]=d+(f?o:r),h=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,g&&(h=(e.ownerSVGElement||{}).parentNode),(!h||h===fr||!h.appendChild)&&(h=fr.body),p=h._gsap,p&&m&&p.width&&l&&p.time===En.time&&!p.uncache?lt(s/p.width*d):((m||o==="%")&&!_C[bi(h,"display")]&&(a.position=bi(e,"position")),h===e&&(a.position="static"),h.appendChild(Jr),x=Jr[c],h.removeChild(Jr),a.position="absolute",l&&m&&(p=is(h),p.time=En.time,p.width=h[c]),lt(f?x*s/d:x&&s?d/x*s:0))))},zi=function(e,t,i,r){var s;return fp||Kd(),t in Vi&&t!=="transform"&&(t=Vi[t],~t.indexOf(",")&&(t=t.split(",")[0])),$i[t]&&t!=="transform"?(s=$a(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Fu(bi(e,ui))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=zu[t]&&zu[t](e,t,i)||bi(e,t)||px(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ar(e,t,s,i)+i:s},vC=function(e,t,i,r){if(!i||i==="none"){var s=Do(t,e,1),o=s&&bi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=bi(e,"borderTopColor"))}var a=new pn(this._pt,e.style,t,0,1,Vx),l=0,u=0,c,d,f,m,x,h,p,g,_,v,y,M;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(e.style[t]=r,r=bi(e,t)||r,e.style[t]=i),c=[i,r],Dx(c),i=c[0],r=c[1],f=i.match(Js)||[],M=r.match(Js)||[],M.length){for(;d=Js.exec(r);)p=d[0],_=r.substring(l,d.index),x?x=(x+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(x=1),p!==(h=f[u++]||"")&&(m=parseFloat(h)||0,y=h.substr((m+"").length),p.charAt(1)==="="&&(p=co(m,p)+y),g=parseFloat(p),v=p.substr((g+"").length),l=Js.lastIndex-v.length,v||(v=v||Pn.units[t]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(m=Ar(e,t,h,v)||0),a._pt={_next:a._pt,p:_||u===1?_:",",s:m,c:g-m,m:x&&x<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?jx:Hx;return lx.test(r)&&(a.e=0),this._pt=a,a},g_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xC=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=g_[i]||i,t[1]=g_[r]||r,t.join(" ")},yC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],$i[a]&&(l=1,a=a==="transformOrigin"?ui:nt),qa(i,a);l&&(qa(i,nt),o&&(o.svg&&i.removeAttribute("transform"),$a(i,1),o.uncache=1,Xx(r)))}},zu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new pn(e._pt,t,i,0,0,yC);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Ya=[1,0,0,1,0,0],Kx={},Qx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},__=function(e){var t=bi(e,nt);return Qx(t)?Ya:t.substr(7).match(ax).map(lt)},pp=function(e,t){var i=e._gsap||is(e),r=e.style,s=__(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ya:s):(s===Ya&&!e.offsetParent&&e!==fo&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,fo.appendChild(e)),s=__(e),l?r.display=l:qa(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):fo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Qd=function(e,t,i,r,s,o){var a=e._gsap,l=s||pp(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,m=l[0],x=l[1],h=l[2],p=l[3],g=l[4],_=l[5],v=t.split(" "),y=parseFloat(v[0])||0,M=parseFloat(v[1])||0,T,b,S,w;i?l!==Ya&&(b=m*p-x*h)&&(S=y*(p/b)+M*(-h/b)+(h*_-p*g)/b,w=y*(-x/b)+M*(m/b)-(m*_-x*g)/b,y=S,M=w):(T=$x(e),y=T.x+(~v[0].indexOf("%")?y/100*T.width:y),M=T.y+(~(v[1]||v[0]).indexOf("%")?M/100*T.height:M)),r||r!==!1&&a.smooth?(g=y-u,_=M-c,a.xOffset=d+(g*m+_*h)-g,a.yOffset=f+(g*x+_*p)-_):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ui]="0px 0px",o&&(dr(o,a,"xOrigin",u,y),dr(o,a,"yOrigin",c,M),dr(o,a,"xOffset",d,a.xOffset),dr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},$a=function(e,t){var i=e._gsap||new Nx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=bi(e,ui)||"0",c,d,f,m,x,h,p,g,_,v,y,M,T,b,S,w,L,V,j,O,I,W,$,K,D,H,G,re,k,Q,J,z;return c=d=f=h=p=g=_=v=y=0,m=x=1,i.svg=!!(e.getCTM&&Zx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[nt]!=="none"?l[nt]:"")),r.scale=r.rotate=r.translate="none"),b=pp(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),u=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),Qd(e,K||u,!!K||i.originIsAbsolute,i.smooth!==!1,b)),M=i.xOrigin||0,T=i.yOrigin||0,b!==Ya&&(V=b[0],j=b[1],O=b[2],I=b[3],c=W=b[4],d=$=b[5],b.length===6?(m=Math.sqrt(V*V+j*j),x=Math.sqrt(I*I+O*O),h=V||j?zs(j,V)*Xr:0,_=O||I?zs(O,I)*Xr+h:0,_&&(x*=Math.abs(Math.cos(_*ho))),i.svg&&(c-=M-(M*V+T*O),d-=T-(M*j+T*I))):(z=b[6],Q=b[7],G=b[8],re=b[9],k=b[10],J=b[11],c=b[12],d=b[13],f=b[14],S=zs(z,k),p=S*Xr,S&&(w=Math.cos(-S),L=Math.sin(-S),K=W*w+G*L,D=$*w+re*L,H=z*w+k*L,G=W*-L+G*w,re=$*-L+re*w,k=z*-L+k*w,J=Q*-L+J*w,W=K,$=D,z=H),S=zs(-O,k),g=S*Xr,S&&(w=Math.cos(-S),L=Math.sin(-S),K=V*w-G*L,D=j*w-re*L,H=O*w-k*L,J=I*L+J*w,V=K,j=D,O=H),S=zs(j,V),h=S*Xr,S&&(w=Math.cos(S),L=Math.sin(S),K=V*w+j*L,D=W*w+$*L,j=j*w-V*L,$=$*w-W*L,V=K,W=D),p&&Math.abs(p)+Math.abs(h)>359.9&&(p=h=0,g=180-g),m=lt(Math.sqrt(V*V+j*j+O*O)),x=lt(Math.sqrt($*$+z*z)),S=zs(W,$),_=Math.abs(S)>2e-4?S*Xr:0,y=J?1/(J<0?-J:J):0),i.svg&&(K=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Qx(bi(e,nt)),K&&e.setAttribute("transform",K))),Math.abs(_)>90&&Math.abs(_)<270&&(s?(m*=-1,_+=h<=0?180:-180,h+=h<=0?180:-180):(x*=-1,_+=_<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=lt(m),i.scaleY=lt(x),i.rotation=lt(h)+a,i.rotationX=lt(p)+a,i.rotationY=lt(g)+a,i.skewX=_+a,i.skewY=v+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||0)&&(r[ui]=Fu(u)),i.xOffset=i.yOffset=0,i.force3D=Pn.force3D,i.renderTransform=i.svg?MC:Yx?Jx:SC,i.uncache=0,i},Fu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Df=function(e,t,i){var r=Vt(t);return lt(parseFloat(t)+parseFloat(Ar(e,"x",i+"px",r)))+r},SC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Jx(e,t)},Br="0deg",ta="0px",Vr=") ",Jx=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,m=i.skewY,x=i.scaleX,h=i.scaleY,p=i.transformPerspective,g=i.force3D,_=i.target,v=i.zOrigin,y="",M=g==="auto"&&e&&e!==1||g===!0;if(v&&(d!==Br||c!==Br)){var T=parseFloat(c)*ho,b=Math.sin(T),S=Math.cos(T),w;T=parseFloat(d)*ho,w=Math.cos(T),o=Df(_,o,b*w*-v),a=Df(_,a,-Math.sin(T)*-v),l=Df(_,l,S*w*-v+v)}p!==ta&&(y+="perspective("+p+Vr),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(M||o!==ta||a!==ta||l!==ta)&&(y+=l!==ta||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Vr),u!==Br&&(y+="rotate("+u+Vr),c!==Br&&(y+="rotateY("+c+Vr),d!==Br&&(y+="rotateX("+d+Vr),(f!==Br||m!==Br)&&(y+="skew("+f+", "+m+Vr),(x!==1||h!==1)&&(y+="scale("+x+", "+h+Vr),_.style[nt]=y||"translate(0, 0)"},MC=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,m=i.target,x=i.xOrigin,h=i.yOrigin,p=i.xOffset,g=i.yOffset,_=i.forceCSS,v=parseFloat(o),y=parseFloat(a),M,T,b,S,w;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=ho,u*=ho,M=Math.cos(l)*d,T=Math.sin(l)*d,b=Math.sin(l-u)*-f,S=Math.cos(l-u)*f,u&&(c*=ho,w=Math.tan(u-c),w=Math.sqrt(1+w*w),b*=w,S*=w,c&&(w=Math.tan(c),w=Math.sqrt(1+w*w),M*=w,T*=w)),M=lt(M),T=lt(T),b=lt(b),S=lt(S)):(M=d,S=f,T=b=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Ar(m,"x",o,"px"),y=Ar(m,"y",a,"px")),(x||h||p||g)&&(v=lt(v+x-(x*M+h*b)+p),y=lt(y+h-(x*T+h*S)+g)),(r||s)&&(w=m.getBBox(),v=lt(v+r/100*w.width),y=lt(y+s/100*w.height)),w="matrix("+M+","+T+","+b+","+S+","+v+","+y+")",m.setAttribute("transform",w),_&&(m.style[nt]=w)},wC=function(e,t,i,r,s){var o=360,a=Lt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Xr:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*d_)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*d_)%o-~~(u/o)*o)),e._pt=f=new pn(e._pt,t,i,r,u,oC),f.e=c,f.u="deg",e._props.push(i),f},v_=function(e,t){for(var i in t)e[i]=t[i];return e},EC=function(e,t,i){var r=v_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,m,x;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[nt]=t,a=$a(i,1),qa(i,nt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[nt],o[nt]=t,a=$a(i,1),o[nt]=u);for(l in $i)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(m=Vt(u),x=Vt(c),d=m!==x?Ar(i,l,u,x):parseFloat(u),f=parseFloat(c),e._pt=new pn(e._pt,a,l,d,f-d,$d),e._pt.u=x||0,e._props.push(l));v_(a,r)};hn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});zu[e>1?"border"+n:n]=function(a,l,u,c,d){var f,m;if(arguments.length<4)return f=o.map(function(x){return zi(a,x,u)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(c+"").split(" "),m={},o.forEach(function(x,h){return m[x]=f[h]=f[h]||f[(h-1)/2|0]}),a.init(l,m,d)}});var ey={name:"css",register:Kd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,m,x,h,p,g,_,v,y,M,T,b,S;fp||Kd(),this.styles=this.styles||qx(e),S=this.styles.props,this.tween=i;for(h in t)if(h!=="autoRound"&&(c=t[h],!(Mn[h]&&Ox(h,t,i,r,e,s)))){if(m=typeof c,x=zu[h],m==="function"&&(c=c.call(i,r,e,s),m=typeof c),m==="string"&&~c.indexOf("random(")&&(c=ja(c)),x)x(this,e,h,c,i)&&(b=1);else if(h.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(h)+"").trim(),c+="",wr.lastIndex=0,wr.test(u)||(p=Vt(u),g=Vt(c)),g?p!==g&&(u=Ar(e,h,u,g)+g):p&&(c+=p),this.add(a,"setProperty",u,c,r,s,0,0,h),o.push(h),S.push(h,0,a[h]);else if(m!=="undefined"){if(l&&h in l?(u=typeof l[h]=="function"?l[h].call(i,r,e,s):l[h],Lt(u)&&~u.indexOf("random(")&&(u=ja(u)),Vt(u+"")||(u+=Pn.units[h]||Vt(zi(e,h))||""),(u+"").charAt(1)==="="&&(u=zi(e,h))):u=zi(e,h),f=parseFloat(u),_=m==="string"&&c.charAt(1)==="="&&c.substr(0,2),_&&(c=c.substr(2)),d=parseFloat(c),h in Vi&&(h==="autoAlpha"&&(f===1&&zi(e,"visibility")==="hidden"&&d&&(f=0),S.push("visibility",0,a.visibility),dr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),h!=="scale"&&h!=="transform"&&(h=Vi[h],~h.indexOf(",")&&(h=h.split(",")[0]))),v=h in $i,v){if(this.styles.save(h),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||$a(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new pn(this._pt,a,nt,0,1,M.renderTransform,M,0,-1),y.dep=1),h==="scale")this._pt=new pn(this._pt,M,"scaleY",M.scaleY,(_?co(M.scaleY,_+d):d)-M.scaleY||0,$d),this._pt.u=0,o.push("scaleY",h),h+="X";else if(h==="transformOrigin"){S.push(ui,0,a[ui]),c=xC(c),M.svg?Qd(e,c,0,T,0,this):(g=parseFloat(c.split(" ")[2])||0,g!==M.zOrigin&&dr(this,M,"zOrigin",M.zOrigin,g),dr(this,a,h,Fu(u),Fu(c)));continue}else if(h==="svgOrigin"){Qd(e,c,1,T,0,this);continue}else if(h in Kx){wC(this,M,h,f,_?co(f,_+c):c);continue}else if(h==="smoothOrigin"){dr(this,M,"smooth",M.smooth,c);continue}else if(h==="force3D"){M[h]=c;continue}else if(h==="transform"){EC(this,c,e);continue}}else h in a||(h=Do(h)||h);if(v||(d||d===0)&&(f||f===0)&&!sC.test(c)&&h in a)p=(u+"").substr((f+"").length),d||(d=0),g=Vt(c)||(h in Pn.units?Pn.units[h]:p),p!==g&&(f=Ar(e,h,u,g)),this._pt=new pn(this._pt,v?M:a,h,f,(_?co(f,_+d):d)-f,!v&&(g==="px"||h==="zIndex")&&t.autoRound!==!1?lC:$d),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=u,this._pt.r=aC);else if(h in a)vC.call(this,e,h,u,_?_+c:c);else if(h in e)this.add(e,h,u||e[h],_?_+c:c,r,s);else if(h!=="parseTransform"){np(h,c);continue}v||(h in a?S.push(h,0,a[h]):S.push(h,1,u||e[h])),o.push(h)}}b&&Gx(this)},render:function(e,t){if(t.tween._time||!dp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:zi,aliases:Vi,getSetter:function(e,t,i){var r=Vi[t];return r&&r.indexOf(",")<0&&(t=r),t in $i&&t!==ui&&(e._gsap.x||zi(e,"x"))?i&&f_===i?t==="scale"?dC:fC:(f_=i||{})&&(t==="scale"?hC:pC):e.style&&!ep(e.style[t])?uC:~t.indexOf("-")?cC:up(e,t)},core:{_removeProperty:qa,_getMatrix:pp}};Rn.utils.checkPrefix=Do;Rn.core.getStyleSaver=qx;(function(n,e,t,i){var r=hn(n+","+e+","+t,function(s){$i[s]=1});hn(e,function(s){Pn.units[s]="deg",Kx[s]=1}),Vi[r[13]]=n+","+e,hn(i,function(s){var o=s.split(":");Vi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Pn.units[n]="px"});Rn.registerPlugin(ey);var ty=Rn.registerPlugin(ey)||Rn;ty.core.Tween;const x_={type:"change"},Rf={type:"start"},y_={type:"end"};class TC extends xs{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Xt),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Xt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(x_),i.update(),s=r.NONE},this.update=function(){const P=new N,F=new hs().setFromUnitVectors(e.up,new N(0,1,0)),ce=F.clone().invert(),oe=new N,ge=new hs,ve=2*Math.PI;return function(){const Le=i.object.position;P.copy(Le).sub(i.target),P.applyQuaternion(F),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&w(b()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Oe=i.minAzimuthAngle,Be=i.maxAzimuthAngle;return isFinite(Oe)&&isFinite(Be)&&(Oe<-Math.PI?Oe+=ve:Oe>Math.PI&&(Oe-=ve),Be<-Math.PI?Be+=ve:Be>Math.PI&&(Be-=ve),Oe<=Be?a.theta=Math.max(Oe,Math.min(Be,a.theta)):a.theta=a.theta>(Oe+Be)/2?Math.max(Oe,a.theta):Math.min(Be,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),P.setFromSpherical(a),P.applyQuaternion(ce),Le.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,d||oe.distanceToSquared(i.object.position)>o||8*(1-ge.dot(i.object.quaternion))>o?(i.dispatchEvent(x_),oe.copy(i.object.position),ge.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",q),i.domElement.removeEventListener("pointerdown",Mt),i.domElement.removeEventListener("pointercancel",Et),i.domElement.removeEventListener("wheel",mn),i.domElement.removeEventListener("pointermove",jt),i.domElement.removeEventListener("pointerup",wt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Xt),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new n_,l=new n_;let u=1;const c=new N;let d=!1;const f=new Te,m=new Te,x=new Te,h=new Te,p=new Te,g=new Te,_=new Te,v=new Te,y=new Te,M=[],T={};function b(){return 2*Math.PI/60/60*i.autoRotateSpeed}function S(){return Math.pow(.95,i.zoomSpeed)}function w(P){l.theta-=P}function L(P){l.phi-=P}const V=function(){const P=new N;return function(ce,oe){P.setFromMatrixColumn(oe,0),P.multiplyScalar(-ce),c.add(P)}}(),j=function(){const P=new N;return function(ce,oe){i.screenSpacePanning===!0?P.setFromMatrixColumn(oe,1):(P.setFromMatrixColumn(oe,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(ce),c.add(P)}}(),O=function(){const P=new N;return function(ce,oe){const ge=i.domElement;if(i.object.isPerspectiveCamera){const ve=i.object.position;P.copy(ve).sub(i.target);let _e=P.length();_e*=Math.tan(i.object.fov/2*Math.PI/180),V(2*ce*_e/ge.clientHeight,i.object.matrix),j(2*oe*_e/ge.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(V(ce*(i.object.right-i.object.left)/i.object.zoom/ge.clientWidth,i.object.matrix),j(oe*(i.object.top-i.object.bottom)/i.object.zoom/ge.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function I(P){i.object.isPerspectiveCamera?u/=P:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*P)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(P){i.object.isPerspectiveCamera?u*=P:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/P)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(P){f.set(P.clientX,P.clientY)}function K(P){_.set(P.clientX,P.clientY)}function D(P){h.set(P.clientX,P.clientY)}function H(P){m.set(P.clientX,P.clientY),x.subVectors(m,f).multiplyScalar(i.rotateSpeed);const F=i.domElement;w(2*Math.PI*x.x/F.clientHeight),L(2*Math.PI*x.y/F.clientHeight),f.copy(m),i.update()}function G(P){v.set(P.clientX,P.clientY),y.subVectors(v,_),y.y>0?I(S()):y.y<0&&W(S()),_.copy(v),i.update()}function re(P){p.set(P.clientX,P.clientY),g.subVectors(p,h).multiplyScalar(i.panSpeed),O(g.x,g.y),h.copy(p),i.update()}function k(P){P.deltaY<0?W(S()):P.deltaY>0&&I(S()),i.update()}function Q(P){let F=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,i.keyPanSpeed),F=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,-i.keyPanSpeed),F=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?w(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(i.keyPanSpeed,0),F=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?w(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(-i.keyPanSpeed,0),F=!0;break}F&&(P.preventDefault(),i.update())}function J(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const P=.5*(M[0].pageX+M[1].pageX),F=.5*(M[0].pageY+M[1].pageY);f.set(P,F)}}function z(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const P=.5*(M[0].pageX+M[1].pageX),F=.5*(M[0].pageY+M[1].pageY);h.set(P,F)}}function ae(){const P=M[0].pageX-M[1].pageX,F=M[0].pageY-M[1].pageY,ce=Math.sqrt(P*P+F*F);_.set(0,ce)}function ue(){i.enableZoom&&ae(),i.enablePan&&z()}function pe(){i.enableZoom&&ae(),i.enableRotate&&J()}function he(P){if(M.length==1)m.set(P.pageX,P.pageY);else{const ce=xe(P),oe=.5*(P.pageX+ce.x),ge=.5*(P.pageY+ce.y);m.set(oe,ge)}x.subVectors(m,f).multiplyScalar(i.rotateSpeed);const F=i.domElement;w(2*Math.PI*x.x/F.clientHeight),L(2*Math.PI*x.y/F.clientHeight),f.copy(m)}function Se(P){if(M.length===1)p.set(P.pageX,P.pageY);else{const F=xe(P),ce=.5*(P.pageX+F.x),oe=.5*(P.pageY+F.y);p.set(ce,oe)}g.subVectors(p,h).multiplyScalar(i.panSpeed),O(g.x,g.y),h.copy(p)}function we(P){const F=xe(P),ce=P.pageX-F.x,oe=P.pageY-F.y,ge=Math.sqrt(ce*ce+oe*oe);v.set(0,ge),y.set(0,Math.pow(v.y/_.y,i.zoomSpeed)),I(y.y),_.copy(v)}function be(P){i.enableZoom&&we(P),i.enablePan&&Se(P)}function Ne(P){i.enableZoom&&we(P),i.enableRotate&&he(P)}function Mt(P){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",jt),i.domElement.addEventListener("pointerup",wt)),ne(P),P.pointerType==="touch"?A(P):Ke(P))}function jt(P){i.enabled!==!1&&(P.pointerType==="touch"?E(P):je(P))}function wt(P){ie(P),M.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",jt),i.domElement.removeEventListener("pointerup",wt)),i.dispatchEvent(y_),s=r.NONE}function Et(P){ie(P)}function Ke(P){let F;switch(P.button){case 0:F=i.mouseButtons.LEFT;break;case 1:F=i.mouseButtons.MIDDLE;break;case 2:F=i.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Ms.DOLLY:if(i.enableZoom===!1)return;K(P),s=r.DOLLY;break;case Ms.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;D(P),s=r.PAN}else{if(i.enableRotate===!1)return;$(P),s=r.ROTATE}break;case Ms.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;$(P),s=r.ROTATE}else{if(i.enablePan===!1)return;D(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Rf)}function je(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;H(P);break;case r.DOLLY:if(i.enableZoom===!1)return;G(P);break;case r.PAN:if(i.enablePan===!1)return;re(P);break}}function mn(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(Rf),k(P),i.dispatchEvent(y_))}function Xt(P){i.enabled===!1||i.enablePan===!1||Q(P)}function A(P){switch(le(P),M.length){case 1:switch(i.touches.ONE){case ws.ROTATE:if(i.enableRotate===!1)return;J(),s=r.TOUCH_ROTATE;break;case ws.PAN:if(i.enablePan===!1)return;z(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ws.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ue(),s=r.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;pe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Rf)}function E(P){switch(le(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;he(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Se(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;be(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ne(P),i.update();break;default:s=r.NONE}}function q(P){i.enabled!==!1&&P.preventDefault()}function ne(P){M.push(P)}function ie(P){delete T[P.pointerId];for(let F=0;F<M.length;F++)if(M[F].pointerId==P.pointerId){M.splice(F,1);return}}function le(P){let F=T[P.pointerId];F===void 0&&(F=new Te,T[P.pointerId]=F),F.set(P.pageX,P.pageY)}function xe(P){const F=P.pointerId===M[0].pointerId?M[1]:M[0];return T[F.pointerId]}i.domElement.addEventListener("contextmenu",q),i.domElement.addEventListener("pointerdown",Mt),i.domElement.addEventListener("pointercancel",Et),i.domElement.addEventListener("wheel",mn,{passive:!1}),this.update()}}const bC="/SolarSystem/assets/sun-ff0f076b.jpg",CC="/SolarSystem/assets/mercury-5a5c8060.jpg",AC="/SolarSystem/assets/venus-dbe5db1c.jpg",PC="/SolarSystem/assets/earth-767ee1dc.jpg",LC="/SolarSystem/assets/mars-2d187f3e.jpg",DC="/SolarSystem/assets/jupiter-b0f04d00.jpg",RC="/SolarSystem/assets/saturn-54a900ca.jpg",IC="/SolarSystem/assets/saturnring-4b0644b2.png",kC="/SolarSystem/assets/uranus-d15239d4.jpg",NC="/SolarSystem/assets/neptune-cb42ea82.jpg",OC="/SolarSystem/assets/pluto-7faf9140.jpg",Nt=new tb,ny=new ub(16777215,1,1e3);ny.position.set(0,0,0);const zC=new cb(3355443,.2);Nt.add(zC);const Si={width:window.innerWidth,height:window.innerHeight},Pr=new wn(45,Si.width/Si.height,.1,2e3);Pr.position.z=20;Nt.add(Pr);const iy=document.getElementById("root"),zo=new Qh({canvas:iy});zo.setSize(Si.width,Si.height);zo.setPixelRatio(2);zo.render(Nt,Pr);const uc=new TC(Pr,iy);uc.enableDamping=!0;uc.enablePan=!1;uc.enableZoom=!0;window.addEventListener("resize",()=>{Si.width=window.innerWidth,Si.height=window.innerHeight,Pr.aspect=Si.width/Si.height,Pr.updateProjectionMatrix(),zo.setSize(Si.width,Si.height)});const hi=new ob,FC=new Zn(7,64,64),UC=new Yh({map:hi.load(bC)}),mp=new gt(FC,UC);mp.add(ny);Nt.add(mp);const BC=new Zn(1,64,64),VC=new di({map:hi.load(CC)}),ry=new gt(BC,VC);ry.position.set(13,0,10);const gp=new Ze;gp.add(ry);Nt.add(gp);const GC=new Zn(2,64,64),WC=new di({map:hi.load(AC)}),sy=new gt(GC,WC);sy.position.set(19,0,15);const _p=new Ze;_p.add(sy);Nt.add(_p);const HC=new Zn(3,64,64),jC=new di({map:hi.load(PC)}),vp=new gt(HC,jC);vp.position.set(24,0,30);const xp=new Ze;xp.add(vp);Nt.add(xp);const XC=new Zn(2,64,64),qC=new di({map:hi.load(LC)}),oy=new gt(XC,qC);oy.position.set(30,0,40);const yp=new Ze;yp.add(oy);Nt.add(yp);const YC=new Zn(5,64,64),$C=new di({map:hi.load(DC)}),Sp=new gt(YC,$C);Sp.position.set(45,0,50);const Mp=new Ze;Mp.add(Sp);Nt.add(Mp);const ZC=new Zn(4,64,64),KC=new di({map:hi.load(RC)}),ay=new gt(ZC,KC);ay.position.set(60,0,60);const QC=new sc(7,.6,30,200),JC=new di({map:hi.load(IC)}),wp=new gt(QC,JC);wp.position.set(60,0,60);let eA=new N(1,0,0);wp.rotateOnAxis(eA,20);const ly=new Ze;ly.add(ay);const cc=new Qs;cc.add(ly);cc.add(wp);Nt.add(cc);const tA=new Zn(3,64,64),nA=new di({map:hi.load(kC)}),uy=new gt(tA,nA);uy.position.set(67,0,65);const cy=new Ze,iA=new sc(3.5,.4,30,200),rA=new di({color:"#1BAD9C"}),fy=new gt(iA,rA);fy.position.set(67,0,65);cy.add(uy);const sl=new Qs;sl.add(cy);sl.add(fy);Nt.add(sl);Nt.add(sl);const sA=new Zn(2,64,64),oA=new di({map:hi.load(NC)}),dy=new gt(sA,oA);dy.position.set(75,0,70);const Ep=new Ze;Ep.add(dy);Nt.add(Ep);const aA=new Zn(1,64,64),lA=new di({map:hi.load(OC)}),hy=new gt(aA,lA);hy.position.set(89,0,80);const Tp=new Ze;Tp.add(hy);Nt.add(Tp);const py=new fi,uA=new ex({color:"#ffffff",size:.2}),my=15e3,gy=new Float32Array(my);for(let n=0;n<my;n++)gy[n]=(Math.random()-.5)*1e3;const cA=new li(gy,3);py.setAttribute("position",cA);const fA=new nb(py,uA),_y=new Ze;_y.add(fA);Nt.add(_y);function dA(){gp.rotateY(.04),_p.rotateY(.015),xp.rotateY(.01),yp.rotateY(.009),Mp.rotateY(.007),cc.rotateY(.004),sl.rotateY(.002),Ep.rotateY(.0012),Tp.rotateY(95e-5),vp.rotateY(.003),Sp.rotateY(.003),mp.rotateY(.004)}zo.setAnimationLoop(dA);const vy=()=>{uc.update(),zo.render(Nt,Pr),window.requestAnimationFrame(vy)};vy();const fc=ty.timeline({default:{duration:1}});fc.fromTo(Nt.scale,{x:0,z:0},{x:1,z:1});fc.fromTo("nav",{y:"-100%"},{y:"0%"});fc.fromTo(Pr.position,{z:20,x:0,y:0},{z:150,x:0,y:60});fc.fromTo("h1",{opacity:"0%"},{opacity:"100%"});function hA(){return kf("div",{})}Nf.createRoot(document.getElementById("root")).render(kf(Vy.StrictMode,{children:kf(hA,{})}));
