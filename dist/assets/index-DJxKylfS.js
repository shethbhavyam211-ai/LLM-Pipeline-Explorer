(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Qv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var kg={exports:{}},mc={},Bg={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),Jv=Symbol.for("react.portal"),e_=Symbol.for("react.fragment"),t_=Symbol.for("react.strict_mode"),n_=Symbol.for("react.profiler"),i_=Symbol.for("react.provider"),r_=Symbol.for("react.context"),s_=Symbol.for("react.forward_ref"),a_=Symbol.for("react.suspense"),o_=Symbol.for("react.memo"),l_=Symbol.for("react.lazy"),tp=Symbol.iterator;function c_(t){return t===null||typeof t!="object"?null:(t=tp&&t[tp]||t["@@iterator"],typeof t=="function"?t:null)}var zg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hg=Object.assign,Gg={};function $s(t,e,n){this.props=t,this.context=e,this.refs=Gg,this.updater=n||zg}$s.prototype.isReactComponent={};$s.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$s.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vg(){}Vg.prototype=$s.prototype;function Id(t,e,n){this.props=t,this.context=e,this.refs=Gg,this.updater=n||zg}var Ud=Id.prototype=new Vg;Ud.constructor=Id;Hg(Ud,$s.prototype);Ud.isPureReactComponent=!0;var np=Array.isArray,Wg=Object.prototype.hasOwnProperty,Fd={current:null},Xg={key:!0,ref:!0,__self:!0,__source:!0};function jg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Wg.call(e,i)&&!Xg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:so,type:t,key:s,ref:a,props:r,_owner:Fd.current}}function u_(t,e){return{$$typeof:so,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Od(t){return typeof t=="object"&&t!==null&&t.$$typeof===so}function f_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ip=/\/+/g;function Fc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?f_(""+t.key):e.toString(36)}function hl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case so:case Jv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Fc(a,0):i,np(r)?(n="",t!=null&&(n=t.replace(ip,"$&/")+"/"),hl(r,e,n,"",function(c){return c})):r!=null&&(Od(r)&&(r=u_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(ip,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",np(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Fc(s,o);a+=hl(s,e,n,l,r)}else if(l=c_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Fc(s,o++),a+=hl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function go(t,e,n){if(t==null)return t;var i=[],r=0;return hl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function d_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var hn={current:null},pl={transition:null},h_={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Fd};function $g(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:go,forEach:function(t,e,n){go(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return go(t,function(){e++}),e},toArray:function(t){return go(t,function(e){return e})||[]},only:function(t){if(!Od(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=$s;Ge.Fragment=e_;Ge.Profiler=n_;Ge.PureComponent=Id;Ge.StrictMode=t_;Ge.Suspense=a_;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h_;Ge.act=$g;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Hg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Fd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Wg.call(e,l)&&!Xg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:so,type:t.type,key:r,ref:s,props:i,_owner:a}};Ge.createContext=function(t){return t={$$typeof:r_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:i_,_context:t},t.Consumer=t};Ge.createElement=jg;Ge.createFactory=function(t){var e=jg.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:s_,render:t}};Ge.isValidElement=Od;Ge.lazy=function(t){return{$$typeof:l_,_payload:{_status:-1,_result:t},_init:d_}};Ge.memo=function(t,e){return{$$typeof:o_,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=pl.transition;pl.transition={};try{t()}finally{pl.transition=e}};Ge.unstable_act=$g;Ge.useCallback=function(t,e){return hn.current.useCallback(t,e)};Ge.useContext=function(t){return hn.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return hn.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return hn.current.useEffect(t,e)};Ge.useId=function(){return hn.current.useId()};Ge.useImperativeHandle=function(t,e,n){return hn.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return hn.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return hn.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return hn.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return hn.current.useReducer(t,e,n)};Ge.useRef=function(t){return hn.current.useRef(t)};Ge.useState=function(t){return hn.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return hn.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return hn.current.useTransition()};Ge.version="18.3.1";Bg.exports=Ge;var Ht=Bg.exports;const p_=Qv(Ht);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_=Ht,g_=Symbol.for("react.element"),x_=Symbol.for("react.fragment"),v_=Object.prototype.hasOwnProperty,__=m_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S_={key:!0,ref:!0,__self:!0,__source:!0};function Yg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)v_.call(e,i)&&!S_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:g_,type:t,key:s,ref:a,props:r,_owner:__.current}}mc.Fragment=x_;mc.jsx=Yg;mc.jsxs=Yg;kg.exports=mc;var S=kg.exports,Ku={},qg={exports:{}},Cn={},Kg={exports:{}},Zg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(X,k){var H=X.length;X.push(k);e:for(;0<H;){var ne=H-1>>>1,he=X[ne];if(0<r(he,k))X[ne]=k,X[H]=he,H=ne;else break e}}function n(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var k=X[0],H=X.pop();if(H!==k){X[0]=H;e:for(var ne=0,he=X.length,Le=he>>>1;ne<Le;){var te=2*(ne+1)-1,ge=X[te],ye=te+1,Ne=X[ye];if(0>r(ge,H))ye<he&&0>r(Ne,ge)?(X[ne]=Ne,X[ye]=H,ne=ye):(X[ne]=ge,X[te]=H,ne=te);else if(ye<he&&0>r(Ne,H))X[ne]=Ne,X[ye]=H,ne=ye;else break e}}return k}function r(X,k){var H=X.sortIndex-k.sortIndex;return H!==0?H:X.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,h=null,f=3,m=!1,v=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(X){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=X)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function M(X){if(E=!1,y(X),!v)if(n(l)!==null)v=!0,ie(R);else{var k=n(c);k!==null&&G(M,k.startTime-X)}}function R(X,k){v=!1,E&&(E=!1,u(T),T=-1),m=!0;var H=f;try{for(y(k),h=n(l);h!==null&&(!(h.expirationTime>k)||X&&!I());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,f=h.priorityLevel;var he=ne(h.expirationTime<=k);k=t.unstable_now(),typeof he=="function"?h.callback=he:h===n(l)&&i(l),y(k)}else i(l);h=n(l)}if(h!==null)var Le=!0;else{var te=n(c);te!==null&&G(M,te.startTime-k),Le=!1}return Le}finally{h=null,f=H,m=!1}}var b=!1,g=null,T=-1,O=5,N=-1;function I(){return!(t.unstable_now()-N<O)}function $(){if(g!==null){var X=t.unstable_now();N=X;var k=!0;try{k=g(!0,X)}finally{k?ee():(b=!1,g=null)}}else b=!1}var ee;if(typeof p=="function")ee=function(){p($)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,q=L.port2;L.port1.onmessage=$,ee=function(){q.postMessage(null)}}else ee=function(){x($,0)};function ie(X){g=X,b||(b=!0,ee())}function G(X,k){T=x(function(){X(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(X){X.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,ie(R))},t.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<X?Math.floor(1e3/X):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(X){switch(f){case 1:case 2:case 3:var k=3;break;default:k=f}var H=f;f=k;try{return X()}finally{f=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(X,k){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var H=f;f=X;try{return k()}finally{f=H}},t.unstable_scheduleCallback=function(X,k,H){var ne=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ne+H:ne):H=ne,X){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=H+he,X={id:d++,callback:k,priorityLevel:X,startTime:H,expirationTime:he,sortIndex:-1},H>ne?(X.sortIndex=H,e(c,X),n(l)===null&&X===n(c)&&(E?(u(T),T=-1):E=!0,G(M,H-ne))):(X.sortIndex=he,e(l,X),v||m||(v=!0,ie(R))),X},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(X){var k=f;return function(){var H=f;f=k;try{return X.apply(this,arguments)}finally{f=H}}}})(Zg);Kg.exports=Zg;var y_=Kg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_=Ht,Rn=y_;function de(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qg=new Set,Ba={};function Gr(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(Ba[t]=e,t=0;t<e.length;t++)Qg.add(e[t])}var Di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zu=Object.prototype.hasOwnProperty,E_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rp={},sp={};function w_(t){return Zu.call(sp,t)?!0:Zu.call(rp,t)?!1:E_.test(t)?sp[t]=!0:(rp[t]=!0,!1)}function T_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A_(t,e,n,i){if(e===null||typeof e>"u"||T_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var kd=/[\-:]([a-z])/g;function Bd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kd,Bd);Wt[e]=new pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kd,Bd);Wt[e]=new pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kd,Bd);Wt[e]=new pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new pn(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function zd(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(A_(e,n,r,i)&&(n=null),i||r===null?w_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ki=M_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xo=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),Hd=Symbol.for("react.strict_mode"),Qu=Symbol.for("react.profiler"),Jg=Symbol.for("react.provider"),e0=Symbol.for("react.context"),Gd=Symbol.for("react.forward_ref"),Ju=Symbol.for("react.suspense"),ef=Symbol.for("react.suspense_list"),Vd=Symbol.for("react.memo"),Yi=Symbol.for("react.lazy"),t0=Symbol.for("react.offscreen"),ap=Symbol.iterator;function ta(t){return t===null||typeof t!="object"?null:(t=ap&&t[ap]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,Oc;function Sa(t){if(Oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Oc=e&&e[1]||""}return`
`+Oc+t}var kc=!1;function Bc(t,e){if(!t||kc)return"";kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Sa(t):""}function b_(t){switch(t.tag){case 5:return Sa(t.type);case 16:return Sa("Lazy");case 13:return Sa("Suspense");case 19:return Sa("SuspenseList");case 0:case 2:case 15:return t=Bc(t.type,!1),t;case 11:return t=Bc(t.type.render,!1),t;case 1:return t=Bc(t.type,!0),t;default:return""}}function tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case Qu:return"Profiler";case Hd:return"StrictMode";case Ju:return"Suspense";case ef:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case e0:return(t.displayName||"Context")+".Consumer";case Jg:return(t._context.displayName||"Context")+".Provider";case Gd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vd:return e=t.displayName||null,e!==null?e:tf(t.type)||"Memo";case Yi:e=t._payload,t=t._init;try{return tf(t(e))}catch{}}return null}function R_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tf(e);case 8:return e===Hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function n0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function C_(t){var e=n0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vo(t){t._valueTracker||(t._valueTracker=C_(t))}function i0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=n0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nf(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function op(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function r0(t,e){e=e.checked,e!=null&&zd(t,"checked",e,!1)}function rf(t,e){r0(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sf(t,e.type,n):e.hasOwnProperty("defaultValue")&&sf(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sf(t,e,n){(e!=="number"||Ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ya=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function af(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(de(92));if(ya(n)){if(1<n.length)throw Error(de(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function s0(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function up(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function a0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function of(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?a0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _o,o0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_o=_o||document.createElement("div"),_o.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_o.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N_=["Webkit","ms","Moz","O"];Object.keys(ba).forEach(function(t){N_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ba[e]=ba[t]})});function l0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ba.hasOwnProperty(t)&&ba[t]?(""+e).trim():e+"px"}function c0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=l0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var P_=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lf(t,e){if(e){if(P_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function cf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uf=null;function Wd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ff=null,Cs=null,Ns=null;function fp(t){if(t=lo(t)){if(typeof ff!="function")throw Error(de(280));var e=t.stateNode;e&&(e=Sc(e),ff(t.stateNode,t.type,e))}}function u0(t){Cs?Ns?Ns.push(t):Ns=[t]:Cs=t}function f0(){if(Cs){var t=Cs,e=Ns;if(Ns=Cs=null,fp(t),e)for(t=0;t<e.length;t++)fp(e[t])}}function d0(t,e){return t(e)}function h0(){}var zc=!1;function p0(t,e,n){if(zc)return t(e,n);zc=!0;try{return d0(t,e,n)}finally{zc=!1,(Cs!==null||Ns!==null)&&(h0(),f0())}}function Ha(t,e){var n=t.stateNode;if(n===null)return null;var i=Sc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(de(231,e,typeof n));return n}var df=!1;if(Di)try{var na={};Object.defineProperty(na,"passive",{get:function(){df=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{df=!1}function L_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ra=!1,Dl=null,Il=!1,hf=null,D_={onError:function(t){Ra=!0,Dl=t}};function I_(t,e,n,i,r,s,a,o,l){Ra=!1,Dl=null,L_.apply(D_,arguments)}function U_(t,e,n,i,r,s,a,o,l){if(I_.apply(this,arguments),Ra){if(Ra){var c=Dl;Ra=!1,Dl=null}else throw Error(de(198));Il||(Il=!0,hf=c)}}function Vr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function m0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dp(t){if(Vr(t)!==t)throw Error(de(188))}function F_(t){var e=t.alternate;if(!e){if(e=Vr(t),e===null)throw Error(de(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return dp(r),t;if(s===i)return dp(r),e;s=s.sibling}throw Error(de(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(de(189))}}if(n.alternate!==i)throw Error(de(190))}if(n.tag!==3)throw Error(de(188));return n.stateNode.current===n?t:e}function g0(t){return t=F_(t),t!==null?x0(t):null}function x0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=x0(t);if(e!==null)return e;t=t.sibling}return null}var v0=Rn.unstable_scheduleCallback,hp=Rn.unstable_cancelCallback,O_=Rn.unstable_shouldYield,k_=Rn.unstable_requestPaint,Et=Rn.unstable_now,B_=Rn.unstable_getCurrentPriorityLevel,Xd=Rn.unstable_ImmediatePriority,_0=Rn.unstable_UserBlockingPriority,Ul=Rn.unstable_NormalPriority,z_=Rn.unstable_LowPriority,S0=Rn.unstable_IdlePriority,gc=null,di=null;function H_(t){if(di&&typeof di.onCommitFiberRoot=="function")try{di.onCommitFiberRoot(gc,t,void 0,(t.current.flags&128)===128)}catch{}}var ei=Math.clz32?Math.clz32:W_,G_=Math.log,V_=Math.LN2;function W_(t){return t>>>=0,t===0?32:31-(G_(t)/V_|0)|0}var So=64,yo=4194304;function Ma(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ma(o):(s&=a,s!==0&&(i=Ma(s)))}else a=n&~r,a!==0?i=Ma(a):s!==0&&(i=Ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ei(e),r=1<<n,i|=t[n],e&=~r;return i}function X_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ei(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=X_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function pf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function y0(){var t=So;return So<<=1,!(So&4194240)&&(So=64),t}function Hc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ao(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ei(e),t[e]=n}function $_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ei(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function jd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ei(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function M0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E0,$d,w0,T0,A0,mf=!1,Mo=[],sr=null,ar=null,or=null,Ga=new Map,Va=new Map,Qi=[],Y_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pp(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(e.pointerId)}}function ia(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=lo(e),e!==null&&$d(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function q_(t,e,n,i,r){switch(e){case"focusin":return sr=ia(sr,t,e,n,i,r),!0;case"dragenter":return ar=ia(ar,t,e,n,i,r),!0;case"mouseover":return or=ia(or,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ga.set(s,ia(Ga.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Va.set(s,ia(Va.get(s)||null,t,e,n,i,r)),!0}return!1}function b0(t){var e=Rr(t.target);if(e!==null){var n=Vr(e);if(n!==null){if(e=n.tag,e===13){if(e=m0(n),e!==null){t.blockedOn=e,A0(t.priority,function(){w0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);uf=i,n.target.dispatchEvent(i),uf=null}else return e=lo(n),e!==null&&$d(e),t.blockedOn=n,!1;e.shift()}return!0}function mp(t,e,n){ml(t)&&n.delete(e)}function K_(){mf=!1,sr!==null&&ml(sr)&&(sr=null),ar!==null&&ml(ar)&&(ar=null),or!==null&&ml(or)&&(or=null),Ga.forEach(mp),Va.forEach(mp)}function ra(t,e){t.blockedOn===e&&(t.blockedOn=null,mf||(mf=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,K_)))}function Wa(t){function e(r){return ra(r,t)}if(0<Mo.length){ra(Mo[0],t);for(var n=1;n<Mo.length;n++){var i=Mo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(sr!==null&&ra(sr,t),ar!==null&&ra(ar,t),or!==null&&ra(or,t),Ga.forEach(e),Va.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)b0(n),n.blockedOn===null&&Qi.shift()}var Ps=ki.ReactCurrentBatchConfig,Ol=!0;function Z_(t,e,n,i){var r=nt,s=Ps.transition;Ps.transition=null;try{nt=1,Yd(t,e,n,i)}finally{nt=r,Ps.transition=s}}function Q_(t,e,n,i){var r=nt,s=Ps.transition;Ps.transition=null;try{nt=4,Yd(t,e,n,i)}finally{nt=r,Ps.transition=s}}function Yd(t,e,n,i){if(Ol){var r=gf(t,e,n,i);if(r===null)Zc(t,e,i,kl,n),pp(t,i);else if(q_(r,t,e,n,i))i.stopPropagation();else if(pp(t,i),e&4&&-1<Y_.indexOf(t)){for(;r!==null;){var s=lo(r);if(s!==null&&E0(s),s=gf(t,e,n,i),s===null&&Zc(t,e,i,kl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Zc(t,e,i,null,n)}}var kl=null;function gf(t,e,n,i){if(kl=null,t=Wd(i),t=Rr(t),t!==null)if(e=Vr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=m0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kl=t,null}function R0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B_()){case Xd:return 1;case _0:return 4;case Ul:case z_:return 16;case S0:return 536870912;default:return 16}default:return 16}}var tr=null,qd=null,gl=null;function C0(){if(gl)return gl;var t,e=qd,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return gl=r.slice(t,1<i?1-i:void 0)}function xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Eo(){return!0}function gp(){return!1}function Nn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Eo:gp,this.isPropagationStopped=gp,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),e}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kd=Nn(Ys),oo=xt({},Ys,{view:0,detail:0}),J_=Nn(oo),Gc,Vc,sa,xc=xt({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sa&&(sa&&t.type==="mousemove"?(Gc=t.screenX-sa.screenX,Vc=t.screenY-sa.screenY):Vc=Gc=0,sa=t),Gc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),xp=Nn(xc),eS=xt({},xc,{dataTransfer:0}),tS=Nn(eS),nS=xt({},oo,{relatedTarget:0}),Wc=Nn(nS),iS=xt({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),rS=Nn(iS),sS=xt({},Ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aS=Nn(sS),oS=xt({},Ys,{data:0}),vp=Nn(oS),lS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uS[t])?!!e[t]:!1}function Zd(){return fS}var dS=xt({},oo,{key:function(t){if(t.key){var e=lS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zd,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hS=Nn(dS),pS=xt({},xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_p=Nn(pS),mS=xt({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zd}),gS=Nn(mS),xS=xt({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),vS=Nn(xS),_S=xt({},xc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),SS=Nn(_S),yS=[9,13,27,32],Qd=Di&&"CompositionEvent"in window,Ca=null;Di&&"documentMode"in document&&(Ca=document.documentMode);var MS=Di&&"TextEvent"in window&&!Ca,N0=Di&&(!Qd||Ca&&8<Ca&&11>=Ca),Sp=" ",yp=!1;function P0(t,e){switch(t){case"keyup":return yS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function ES(t,e){switch(t){case"compositionend":return L0(e);case"keypress":return e.which!==32?null:(yp=!0,Sp);case"textInput":return t=e.data,t===Sp&&yp?null:t;default:return null}}function wS(t,e){if(xs)return t==="compositionend"||!Qd&&P0(t,e)?(t=C0(),gl=qd=tr=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return N0&&e.locale!=="ko"?null:e.data;default:return null}}var TS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TS[t.type]:e==="textarea"}function D0(t,e,n,i){u0(i),e=Bl(e,"onChange"),0<e.length&&(n=new Kd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Na=null,Xa=null;function AS(t){W0(t,0)}function vc(t){var e=Ss(t);if(i0(e))return t}function bS(t,e){if(t==="change")return e}var I0=!1;if(Di){var Xc;if(Di){var jc="oninput"in document;if(!jc){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),jc=typeof Ep.oninput=="function"}Xc=jc}else Xc=!1;I0=Xc&&(!document.documentMode||9<document.documentMode)}function wp(){Na&&(Na.detachEvent("onpropertychange",U0),Xa=Na=null)}function U0(t){if(t.propertyName==="value"&&vc(Xa)){var e=[];D0(e,Xa,t,Wd(t)),p0(AS,e)}}function RS(t,e,n){t==="focusin"?(wp(),Na=e,Xa=n,Na.attachEvent("onpropertychange",U0)):t==="focusout"&&wp()}function CS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vc(Xa)}function NS(t,e){if(t==="click")return vc(e)}function PS(t,e){if(t==="input"||t==="change")return vc(e)}function LS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ii=typeof Object.is=="function"?Object.is:LS;function ja(t,e){if(ii(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Zu.call(e,r)||!ii(t[r],e[r]))return!1}return!0}function Tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ap(t,e){var n=Tp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tp(n)}}function F0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?F0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function O0(){for(var t=window,e=Ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ll(t.document)}return e}function Jd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function DS(t){var e=O0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&F0(n.ownerDocument.documentElement,n)){if(i!==null&&Jd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ap(n,s);var a=Ap(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var IS=Di&&"documentMode"in document&&11>=document.documentMode,vs=null,xf=null,Pa=null,vf=!1;function bp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vf||vs==null||vs!==Ll(i)||(i=vs,"selectionStart"in i&&Jd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Pa&&ja(Pa,i)||(Pa=i,i=Bl(xf,"onSelect"),0<i.length&&(e=new Kd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=vs)))}function wo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _s={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},$c={},k0={};Di&&(k0=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function _c(t){if($c[t])return $c[t];if(!_s[t])return t;var e=_s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k0)return $c[t]=e[n];return t}var B0=_c("animationend"),z0=_c("animationiteration"),H0=_c("animationstart"),G0=_c("transitionend"),V0=new Map,Rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){V0.set(t,e),Gr(e,[t])}for(var Yc=0;Yc<Rp.length;Yc++){var qc=Rp[Yc],US=qc.toLowerCase(),FS=qc[0].toUpperCase()+qc.slice(1);gr(US,"on"+FS)}gr(B0,"onAnimationEnd");gr(z0,"onAnimationIteration");gr(H0,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(G0,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function Cp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,U_(i,e,void 0,t),t.currentTarget=null}function W0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Cp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Cp(r,o,c),s=l}}}if(Il)throw t=hf,Il=!1,hf=null,t}function ut(t,e){var n=e[Ef];n===void 0&&(n=e[Ef]=new Set);var i=t+"__bubble";n.has(i)||(X0(e,t,2,!1),n.add(i))}function Kc(t,e,n){var i=0;e&&(i|=4),X0(n,t,i,e)}var To="_reactListening"+Math.random().toString(36).slice(2);function $a(t){if(!t[To]){t[To]=!0,Qg.forEach(function(n){n!=="selectionchange"&&(OS.has(n)||Kc(n,!1,t),Kc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[To]||(e[To]=!0,Kc("selectionchange",!1,e))}}function X0(t,e,n,i){switch(R0(e)){case 1:var r=Z_;break;case 4:r=Q_;break;default:r=Yd}n=r.bind(null,e,n,t),r=void 0,!df||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Zc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Rr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}p0(function(){var c=s,d=Wd(n),h=[];e:{var f=V0.get(t);if(f!==void 0){var m=Kd,v=t;switch(t){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":m=hS;break;case"focusin":v="focus",m=Wc;break;case"focusout":v="blur",m=Wc;break;case"beforeblur":case"afterblur":m=Wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=tS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=gS;break;case B0:case z0:case H0:m=rS;break;case G0:m=vS;break;case"scroll":m=J_;break;case"wheel":m=SS;break;case"copy":case"cut":case"paste":m=aS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=_p}var E=(e&4)!==0,x=!E&&t==="scroll",u=E?f!==null?f+"Capture":null:f;E=[];for(var p=c,y;p!==null;){y=p;var M=y.stateNode;if(y.tag===5&&M!==null&&(y=M,u!==null&&(M=Ha(p,u),M!=null&&E.push(Ya(p,M,y)))),x)break;p=p.return}0<E.length&&(f=new m(f,v,null,n,d),h.push({event:f,listeners:E}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==uf&&(v=n.relatedTarget||n.fromElement)&&(Rr(v)||v[Ii]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?Rr(v):null,v!==null&&(x=Vr(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(E=xp,M="onMouseLeave",u="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(E=_p,M="onPointerLeave",u="onPointerEnter",p="pointer"),x=m==null?f:Ss(m),y=v==null?f:Ss(v),f=new E(M,p+"leave",m,n,d),f.target=x,f.relatedTarget=y,M=null,Rr(d)===c&&(E=new E(u,p+"enter",v,n,d),E.target=y,E.relatedTarget=x,M=E),x=M,m&&v)t:{for(E=m,u=v,p=0,y=E;y;y=$r(y))p++;for(y=0,M=u;M;M=$r(M))y++;for(;0<p-y;)E=$r(E),p--;for(;0<y-p;)u=$r(u),y--;for(;p--;){if(E===u||u!==null&&E===u.alternate)break t;E=$r(E),u=$r(u)}E=null}else E=null;m!==null&&Np(h,f,m,E,!1),v!==null&&x!==null&&Np(h,x,v,E,!0)}}e:{if(f=c?Ss(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var R=bS;else if(Mp(f))if(I0)R=PS;else{R=CS;var b=RS}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=NS);if(R&&(R=R(t,c))){D0(h,R,n,d);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&sf(f,"number",f.value)}switch(b=c?Ss(c):window,t){case"focusin":(Mp(b)||b.contentEditable==="true")&&(vs=b,xf=c,Pa=null);break;case"focusout":Pa=xf=vs=null;break;case"mousedown":vf=!0;break;case"contextmenu":case"mouseup":case"dragend":vf=!1,bp(h,n,d);break;case"selectionchange":if(IS)break;case"keydown":case"keyup":bp(h,n,d)}var g;if(Qd)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else xs?P0(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(N0&&n.locale!=="ko"&&(xs||T!=="onCompositionStart"?T==="onCompositionEnd"&&xs&&(g=C0()):(tr=d,qd="value"in tr?tr.value:tr.textContent,xs=!0)),b=Bl(c,T),0<b.length&&(T=new vp(T,t,null,n,d),h.push({event:T,listeners:b}),g?T.data=g:(g=L0(n),g!==null&&(T.data=g)))),(g=MS?ES(t,n):wS(t,n))&&(c=Bl(c,"onBeforeInput"),0<c.length&&(d=new vp("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=g))}W0(h,e)})}function Ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ha(t,n),s!=null&&i.unshift(Ya(t,s,r)),s=Ha(t,e),s!=null&&i.push(Ya(t,s,r))),t=t.return}return i}function $r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Np(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ha(n,s),l!=null&&a.unshift(Ya(n,l,o))):r||(l=Ha(n,s),l!=null&&a.push(Ya(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var kS=/\r\n?/g,BS=/\u0000|\uFFFD/g;function Pp(t){return(typeof t=="string"?t:""+t).replace(kS,`
`).replace(BS,"")}function Ao(t,e,n){if(e=Pp(e),Pp(t)!==e&&n)throw Error(de(425))}function zl(){}var _f=null,Sf=null;function yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mf=typeof setTimeout=="function"?setTimeout:void 0,zS=typeof clearTimeout=="function"?clearTimeout:void 0,Lp=typeof Promise=="function"?Promise:void 0,HS=typeof queueMicrotask=="function"?queueMicrotask:typeof Lp<"u"?function(t){return Lp.resolve(null).then(t).catch(GS)}:Mf;function GS(t){setTimeout(function(){throw t})}function Qc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Wa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Wa(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qs=Math.random().toString(36).slice(2),ui="__reactFiber$"+qs,qa="__reactProps$"+qs,Ii="__reactContainer$"+qs,Ef="__reactEvents$"+qs,VS="__reactListeners$"+qs,WS="__reactHandles$"+qs;function Rr(t){var e=t[ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dp(t);t!==null;){if(n=t[ui])return n;t=Dp(t)}return e}t=n,n=t.parentNode}return null}function lo(t){return t=t[ui]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(de(33))}function Sc(t){return t[qa]||null}var wf=[],ys=-1;function xr(t){return{current:t}}function ft(t){0>ys||(t.current=wf[ys],wf[ys]=null,ys--)}function ct(t,e){ys++,wf[ys]=t.current,t.current=e}var pr={},sn=xr(pr),vn=xr(!1),Dr=pr;function Os(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function Hl(){ft(vn),ft(sn)}function Ip(t,e,n){if(sn.current!==pr)throw Error(de(168));ct(sn,e),ct(vn,n)}function j0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,R_(t)||"Unknown",r));return xt({},n,i)}function Gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Dr=sn.current,ct(sn,t),ct(vn,vn.current),!0}function Up(t,e,n){var i=t.stateNode;if(!i)throw Error(de(169));n?(t=j0(t,e,Dr),i.__reactInternalMemoizedMergedChildContext=t,ft(vn),ft(sn),ct(sn,t)):ft(vn),ct(vn,n)}var Ti=null,yc=!1,Jc=!1;function $0(t){Ti===null?Ti=[t]:Ti.push(t)}function XS(t){yc=!0,$0(t)}function vr(){if(!Jc&&Ti!==null){Jc=!0;var t=0,e=nt;try{var n=Ti;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ti=null,yc=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(t+1)),v0(Xd,vr),r}finally{nt=e,Jc=!1}}return null}var Ms=[],Es=0,Vl=null,Wl=0,Dn=[],In=0,Ir=null,bi=1,Ri="";function Ar(t,e){Ms[Es++]=Wl,Ms[Es++]=Vl,Vl=t,Wl=e}function Y0(t,e,n){Dn[In++]=bi,Dn[In++]=Ri,Dn[In++]=Ir,Ir=t;var i=bi;t=Ri;var r=32-ei(i)-1;i&=~(1<<r),n+=1;var s=32-ei(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,bi=1<<32-ei(e)+r|n<<r|i,Ri=s+t}else bi=1<<s|n<<r|i,Ri=t}function eh(t){t.return!==null&&(Ar(t,1),Y0(t,1,0))}function th(t){for(;t===Vl;)Vl=Ms[--Es],Ms[Es]=null,Wl=Ms[--Es],Ms[Es]=null;for(;t===Ir;)Ir=Dn[--In],Dn[In]=null,Ri=Dn[--In],Dn[In]=null,bi=Dn[--In],Dn[In]=null}var bn=null,Tn=null,dt=!1,Kn=null;function q0(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,bn=t,Tn=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,bn=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:bi,overflow:Ri}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,bn=t,Tn=null,!0):!1;default:return!1}}function Tf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Af(t){if(dt){var e=Tn;if(e){var n=e;if(!Fp(t,e)){if(Tf(t))throw Error(de(418));e=lr(n.nextSibling);var i=bn;e&&Fp(t,e)?q0(i,n):(t.flags=t.flags&-4097|2,dt=!1,bn=t)}}else{if(Tf(t))throw Error(de(418));t.flags=t.flags&-4097|2,dt=!1,bn=t}}}function Op(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function bo(t){if(t!==bn)return!1;if(!dt)return Op(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yf(t.type,t.memoizedProps)),e&&(e=Tn)){if(Tf(t))throw K0(),Error(de(418));for(;e;)q0(t,e),e=lr(e.nextSibling)}if(Op(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(de(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=bn?lr(t.stateNode.nextSibling):null;return!0}function K0(){for(var t=Tn;t;)t=lr(t.nextSibling)}function ks(){Tn=bn=null,dt=!1}function nh(t){Kn===null?Kn=[t]:Kn.push(t)}var jS=ki.ReactCurrentBatchConfig;function aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(de(309));var i=n.stateNode}if(!i)throw Error(de(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(de(284));if(!n._owner)throw Error(de(290,t))}return t}function Ro(t,e){throw t=Object.prototype.toString.call(e),Error(de(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function kp(t){var e=t._init;return e(t._payload)}function Z0(t){function e(u,p){if(t){var y=u.deletions;y===null?(u.deletions=[p],u.flags|=16):y.push(p)}}function n(u,p){if(!t)return null;for(;p!==null;)e(u,p),p=p.sibling;return null}function i(u,p){for(u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function r(u,p){return u=dr(u,p),u.index=0,u.sibling=null,u}function s(u,p,y){return u.index=y,t?(y=u.alternate,y!==null?(y=y.index,y<p?(u.flags|=2,p):y):(u.flags|=2,p)):(u.flags|=1048576,p)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,p,y,M){return p===null||p.tag!==6?(p=au(y,u.mode,M),p.return=u,p):(p=r(p,y),p.return=u,p)}function l(u,p,y,M){var R=y.type;return R===gs?d(u,p,y.props.children,M,y.key):p!==null&&(p.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Yi&&kp(R)===p.type)?(M=r(p,y.props),M.ref=aa(u,p,y),M.return=u,M):(M=wl(y.type,y.key,y.props,null,u.mode,M),M.ref=aa(u,p,y),M.return=u,M)}function c(u,p,y,M){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=ou(y,u.mode,M),p.return=u,p):(p=r(p,y.children||[]),p.return=u,p)}function d(u,p,y,M,R){return p===null||p.tag!==7?(p=Lr(y,u.mode,M,R),p.return=u,p):(p=r(p,y),p.return=u,p)}function h(u,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=au(""+p,u.mode,y),p.return=u,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xo:return y=wl(p.type,p.key,p.props,null,u.mode,y),y.ref=aa(u,null,p),y.return=u,y;case ms:return p=ou(p,u.mode,y),p.return=u,p;case Yi:var M=p._init;return h(u,M(p._payload),y)}if(ya(p)||ta(p))return p=Lr(p,u.mode,y,null),p.return=u,p;Ro(u,p)}return null}function f(u,p,y,M){var R=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return R!==null?null:o(u,p,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xo:return y.key===R?l(u,p,y,M):null;case ms:return y.key===R?c(u,p,y,M):null;case Yi:return R=y._init,f(u,p,R(y._payload),M)}if(ya(y)||ta(y))return R!==null?null:d(u,p,y,M,null);Ro(u,y)}return null}function m(u,p,y,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(y)||null,o(p,u,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case xo:return u=u.get(M.key===null?y:M.key)||null,l(p,u,M,R);case ms:return u=u.get(M.key===null?y:M.key)||null,c(p,u,M,R);case Yi:var b=M._init;return m(u,p,y,b(M._payload),R)}if(ya(M)||ta(M))return u=u.get(y)||null,d(p,u,M,R,null);Ro(p,M)}return null}function v(u,p,y,M){for(var R=null,b=null,g=p,T=p=0,O=null;g!==null&&T<y.length;T++){g.index>T?(O=g,g=null):O=g.sibling;var N=f(u,g,y[T],M);if(N===null){g===null&&(g=O);break}t&&g&&N.alternate===null&&e(u,g),p=s(N,p,T),b===null?R=N:b.sibling=N,b=N,g=O}if(T===y.length)return n(u,g),dt&&Ar(u,T),R;if(g===null){for(;T<y.length;T++)g=h(u,y[T],M),g!==null&&(p=s(g,p,T),b===null?R=g:b.sibling=g,b=g);return dt&&Ar(u,T),R}for(g=i(u,g);T<y.length;T++)O=m(g,u,T,y[T],M),O!==null&&(t&&O.alternate!==null&&g.delete(O.key===null?T:O.key),p=s(O,p,T),b===null?R=O:b.sibling=O,b=O);return t&&g.forEach(function(I){return e(u,I)}),dt&&Ar(u,T),R}function E(u,p,y,M){var R=ta(y);if(typeof R!="function")throw Error(de(150));if(y=R.call(y),y==null)throw Error(de(151));for(var b=R=null,g=p,T=p=0,O=null,N=y.next();g!==null&&!N.done;T++,N=y.next()){g.index>T?(O=g,g=null):O=g.sibling;var I=f(u,g,N.value,M);if(I===null){g===null&&(g=O);break}t&&g&&I.alternate===null&&e(u,g),p=s(I,p,T),b===null?R=I:b.sibling=I,b=I,g=O}if(N.done)return n(u,g),dt&&Ar(u,T),R;if(g===null){for(;!N.done;T++,N=y.next())N=h(u,N.value,M),N!==null&&(p=s(N,p,T),b===null?R=N:b.sibling=N,b=N);return dt&&Ar(u,T),R}for(g=i(u,g);!N.done;T++,N=y.next())N=m(g,u,T,N.value,M),N!==null&&(t&&N.alternate!==null&&g.delete(N.key===null?T:N.key),p=s(N,p,T),b===null?R=N:b.sibling=N,b=N);return t&&g.forEach(function($){return e(u,$)}),dt&&Ar(u,T),R}function x(u,p,y,M){if(typeof y=="object"&&y!==null&&y.type===gs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case xo:e:{for(var R=y.key,b=p;b!==null;){if(b.key===R){if(R=y.type,R===gs){if(b.tag===7){n(u,b.sibling),p=r(b,y.props.children),p.return=u,u=p;break e}}else if(b.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Yi&&kp(R)===b.type){n(u,b.sibling),p=r(b,y.props),p.ref=aa(u,b,y),p.return=u,u=p;break e}n(u,b);break}else e(u,b);b=b.sibling}y.type===gs?(p=Lr(y.props.children,u.mode,M,y.key),p.return=u,u=p):(M=wl(y.type,y.key,y.props,null,u.mode,M),M.ref=aa(u,p,y),M.return=u,u=M)}return a(u);case ms:e:{for(b=y.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(u,p.sibling),p=r(p,y.children||[]),p.return=u,u=p;break e}else{n(u,p);break}else e(u,p);p=p.sibling}p=ou(y,u.mode,M),p.return=u,u=p}return a(u);case Yi:return b=y._init,x(u,p,b(y._payload),M)}if(ya(y))return v(u,p,y,M);if(ta(y))return E(u,p,y,M);Ro(u,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(u,p.sibling),p=r(p,y),p.return=u,u=p):(n(u,p),p=au(y,u.mode,M),p.return=u,u=p),a(u)):n(u,p)}return x}var Bs=Z0(!0),Q0=Z0(!1),Xl=xr(null),jl=null,ws=null,ih=null;function rh(){ih=ws=jl=null}function sh(t){var e=Xl.current;ft(Xl),t._currentValue=e}function bf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){jl=t,ih=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(ih!==t)if(t={context:t,memoizedValue:e,next:null},ws===null){if(jl===null)throw Error(de(308));ws=t,jl.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return e}var Cr=null;function ah(t){Cr===null?Cr=[t]:Cr.push(t)}function J0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ah(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qi=!1;function oh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ex(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,ah(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jd(t,n)}}function Bp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $l(t,e,n,i){var r=t.updateQueue;qi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,E=o;switch(f=e,m=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){h=v.call(m,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,f=typeof v=="function"?v.call(m,h,f):v,f==null)break e;h=xt({},h,f);break e;case 2:qi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=a,t.lanes=a,t.memoizedState=h}}function zp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var co={},hi=xr(co),Ka=xr(co),Za=xr(co);function Nr(t){if(t===co)throw Error(de(174));return t}function lh(t,e){switch(ct(Za,e),ct(Ka,t),ct(hi,co),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:of(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=of(e,t)}ft(hi),ct(hi,e)}function zs(){ft(hi),ft(Ka),ft(Za)}function tx(t){Nr(Za.current);var e=Nr(hi.current),n=of(e,t.type);e!==n&&(ct(Ka,t),ct(hi,n))}function ch(t){Ka.current===t&&(ft(hi),ft(Ka))}var mt=xr(0);function Yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var eu=[];function uh(){for(var t=0;t<eu.length;t++)eu[t]._workInProgressVersionPrimary=null;eu.length=0}var _l=ki.ReactCurrentDispatcher,tu=ki.ReactCurrentBatchConfig,Ur=0,gt=null,Ct=null,Ft=null,ql=!1,La=!1,Qa=0,$S=0;function Qt(){throw Error(de(321))}function fh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ii(t[n],e[n]))return!1;return!0}function dh(t,e,n,i,r,s){if(Ur=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_l.current=t===null||t.memoizedState===null?ZS:QS,t=n(i,r),La){s=0;do{if(La=!1,Qa=0,25<=s)throw Error(de(301));s+=1,Ft=Ct=null,e.updateQueue=null,_l.current=JS,t=n(i,r)}while(La)}if(_l.current=Kl,e=Ct!==null&&Ct.next!==null,Ur=0,Ft=Ct=gt=null,ql=!1,e)throw Error(de(300));return t}function hh(){var t=Qa!==0;return Qa=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?gt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function zn(){if(Ct===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Ft===null?gt.memoizedState:Ft.next;if(e!==null)Ft=e,Ct=t;else{if(t===null)throw Error(de(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Ft===null?gt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function Ja(t,e){return typeof e=="function"?e(t):e}function nu(t){var e=zn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Ur&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,gt.lanes|=d,Fr|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ii(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Fr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function iu(t){var e=zn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ii(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function nx(){}function ix(t,e){var n=gt,i=zn(),r=e(),s=!ii(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,ph(ax.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,eo(9,sx.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(de(349));Ur&30||rx(n,e,r)}return r}function rx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sx(t,e,n,i){e.value=n,e.getSnapshot=i,ox(e)&&lx(t)}function ax(t,e,n){return n(function(){ox(e)&&lx(t)})}function ox(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ii(t,n)}catch{return!0}}function lx(t){var e=Ui(t,1);e!==null&&ti(e,t,1,-1)}function Hp(t){var e=li();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:t},e.queue=t,t=t.dispatch=KS.bind(null,gt,t),[e.memoizedState,t]}function eo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function cx(){return zn().memoizedState}function Sl(t,e,n,i){var r=li();gt.flags|=t,r.memoizedState=eo(1|e,n,void 0,i===void 0?null:i)}function Mc(t,e,n,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var a=Ct.memoizedState;if(s=a.destroy,i!==null&&fh(i,a.deps)){r.memoizedState=eo(e,n,s,i);return}}gt.flags|=t,r.memoizedState=eo(1|e,n,s,i)}function Gp(t,e){return Sl(8390656,8,t,e)}function ph(t,e){return Mc(2048,8,t,e)}function ux(t,e){return Mc(4,2,t,e)}function fx(t,e){return Mc(4,4,t,e)}function dx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hx(t,e,n){return n=n!=null?n.concat([t]):null,Mc(4,4,dx.bind(null,e,t),n)}function mh(){}function px(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&fh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function mx(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&fh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function gx(t,e,n){return Ur&21?(ii(n,e)||(n=y0(),gt.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function YS(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=tu.transition;tu.transition={};try{t(!1),e()}finally{nt=n,tu.transition=i}}function xx(){return zn().memoizedState}function qS(t,e,n){var i=fr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},vx(t))_x(e,n);else if(n=J0(t,e,n,i),n!==null){var r=fn();ti(n,t,i,r),Sx(n,e,i)}}function KS(t,e,n){var i=fr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(vx(t))_x(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ii(o,a)){var l=e.interleaved;l===null?(r.next=r,ah(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=J0(t,e,r,i),n!==null&&(r=fn(),ti(n,t,i,r),Sx(n,e,i))}}function vx(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function _x(t,e){La=ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Sx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jd(t,n)}}var Kl={readContext:Bn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},ZS={readContext:Bn,useCallback:function(t,e){return li().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:Gp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sl(4194308,4,dx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sl(4,2,t,e)},useMemo:function(t,e){var n=li();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=li();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=qS.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=li();return t={current:t},e.memoizedState=t},useState:Hp,useDebugValue:mh,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=Hp(!1),e=t[0];return t=YS.bind(null,t[1]),li().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=li();if(dt){if(n===void 0)throw Error(de(407));n=n()}else{if(n=e(),Ot===null)throw Error(de(349));Ur&30||rx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Gp(ax.bind(null,i,s,t),[t]),i.flags|=2048,eo(9,sx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=li(),e=Ot.identifierPrefix;if(dt){var n=Ri,i=bi;n=(i&~(1<<32-ei(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$S++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},QS={readContext:Bn,useCallback:px,useContext:Bn,useEffect:ph,useImperativeHandle:hx,useInsertionEffect:ux,useLayoutEffect:fx,useMemo:mx,useReducer:nu,useRef:cx,useState:function(){return nu(Ja)},useDebugValue:mh,useDeferredValue:function(t){var e=zn();return gx(e,Ct.memoizedState,t)},useTransition:function(){var t=nu(Ja)[0],e=zn().memoizedState;return[t,e]},useMutableSource:nx,useSyncExternalStore:ix,useId:xx,unstable_isNewReconciler:!1},JS={readContext:Bn,useCallback:px,useContext:Bn,useEffect:ph,useImperativeHandle:hx,useInsertionEffect:ux,useLayoutEffect:fx,useMemo:mx,useReducer:iu,useRef:cx,useState:function(){return iu(Ja)},useDebugValue:mh,useDeferredValue:function(t){var e=zn();return Ct===null?e.memoizedState=t:gx(e,Ct.memoizedState,t)},useTransition:function(){var t=iu(Ja)[0],e=zn().memoizedState;return[t,e]},useMutableSource:nx,useSyncExternalStore:ix,useId:xx,unstable_isNewReconciler:!1};function Yn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ec={isMounted:function(t){return(t=t._reactInternals)?Vr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=fr(t),s=Ni(i,r);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(ti(e,t,r,i),vl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=fr(t),s=Ni(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(ti(e,t,r,i),vl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=fr(t),r=Ni(n,i);r.tag=2,e!=null&&(r.callback=e),e=cr(t,r,i),e!==null&&(ti(e,t,i,n),vl(e,t,i))}};function Vp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ja(n,i)||!ja(r,s):!0}function yx(t,e,n){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=_n(e)?Dr:sn.current,i=e.contextTypes,s=(i=i!=null)?Os(t,r):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ec,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ec.enqueueReplaceState(e,e.state,null)}function Cf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},oh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=_n(e)?Dr:sn.current,r.context=Os(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ec.enqueueReplaceState(r,r.state,null),$l(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",i=e;do n+=b_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ru(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ey=typeof WeakMap=="function"?WeakMap:Map;function Mx(t,e,n){n=Ni(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ql||(Ql=!0,zf=i),Nf(t,e)},n}function Ex(t,e,n){n=Ni(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Nf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nf(t,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Xp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ey;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=py.bind(null,t,e,n),e.then(t,t))}function jp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $p(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ni(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var ty=ki.ReactCurrentOwner,gn=!1;function un(t,e,n,i){e.child=t===null?Q0(e,null,n,i):Bs(e,t.child,n,i)}function Yp(t,e,n,i,r){n=n.render;var s=e.ref;return Ls(e,r),i=dh(t,e,n,i,s,r),n=hh(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(dt&&n&&eh(e),e.flags|=1,un(t,e,i,r),e.child)}function qp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Eh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wx(t,e,s,i,r)):(t=wl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ja,n(a,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function wx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ja(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return Pf(t,e,n,i,r)}function Tx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(As,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(As,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(As,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(As,wn),wn|=i;return un(t,e,r,n),e.child}function Ax(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pf(t,e,n,i,r){var s=_n(n)?Dr:sn.current;return s=Os(e,s),Ls(e,r),n=dh(t,e,n,i,s,r),i=hh(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(dt&&i&&eh(e),e.flags|=1,un(t,e,n,r),e.child)}function Kp(t,e,n,i,r){if(_n(n)){var s=!0;Gl(e)}else s=!1;if(Ls(e,r),e.stateNode===null)yl(t,e),yx(e,n,i),Cf(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=_n(n)?Dr:sn.current,c=Os(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Wp(e,a,i,c),qi=!1;var f=e.memoizedState;a.state=f,$l(e,i,a,r),l=e.memoizedState,o!==i||f!==l||vn.current||qi?(typeof d=="function"&&(Rf(e,n,d,i),l=e.memoizedState),(o=qi||Vp(e,n,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,ex(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Yn(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=_n(n)?Dr:sn.current,l=Os(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&Wp(e,a,i,l),qi=!1,f=e.memoizedState,a.state=f,$l(e,i,a,r);var v=e.memoizedState;o!==h||f!==v||vn.current||qi?(typeof m=="function"&&(Rf(e,n,m,i),v=e.memoizedState),(c=qi||Vp(e,n,c,i,f,v,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Lf(t,e,n,i,s,r)}function Lf(t,e,n,i,r,s){Ax(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Up(e,n,!1),Fi(t,e,s);i=e.stateNode,ty.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Bs(e,t.child,null,s),e.child=Bs(e,null,o,s)):un(t,e,o,s),e.memoizedState=i.state,r&&Up(e,n,!0),e.child}function bx(t){var e=t.stateNode;e.pendingContext?Ip(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ip(t,e.context,!1),lh(t,e.containerInfo)}function Zp(t,e,n,i,r){return ks(),nh(r),e.flags|=256,un(t,e,n,i),e.child}var Df={dehydrated:null,treeContext:null,retryLane:0};function If(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rx(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(mt,r&1),t===null)return Af(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ac(a,i,0,null),t=Lr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=If(n),e.memoizedState=Df,t):gh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return ny(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=dr(o,s):(s=Lr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?If(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Df,i}return s=t.child,t=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function gh(t,e){return e=Ac({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Co(t,e,n,i){return i!==null&&nh(i),Bs(e,t.child,null,n),t=gh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ny(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=ru(Error(de(422))),Co(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ac({mode:"visible",children:i.children},r,0,null),s=Lr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Bs(e,t.child,null,a),e.child.memoizedState=If(a),e.memoizedState=Df,s);if(!(e.mode&1))return Co(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(de(419)),i=ru(s,i,void 0),Co(t,e,a,i)}if(o=(a&t.childLanes)!==0,gn||o){if(i=Ot,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),ti(i,t,r,-1))}return Mh(),i=ru(Error(de(421))),Co(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=my.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Tn=lr(r.nextSibling),bn=e,dt=!0,Kn=null,t!==null&&(Dn[In++]=bi,Dn[In++]=Ri,Dn[In++]=Ir,bi=t.id,Ri=t.overflow,Ir=e),e=gh(e,i.children),e.flags|=4096,e)}function Qp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),bf(t.return,e,n)}function su(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Cx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(un(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qp(t,n,e);else if(t.tag===19)Qp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Yl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),su(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Yl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}su(e,!0,n,null,s);break;case"together":su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(de(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iy(t,e,n){switch(e.tag){case 3:bx(e),ks();break;case 5:tx(e);break;case 1:_n(e.type)&&Gl(e);break;case 4:lh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(Xl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?Rx(t,e,n):(ct(mt,mt.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);ct(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Cx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,Tx(t,e,n)}return Fi(t,e,n)}var Nx,Uf,Px,Lx;Nx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uf=function(){};Px=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Nr(hi.current);var s=null;switch(n){case"input":r=nf(t,r),i=nf(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=af(t,r),i=af(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=zl)}lf(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ba.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ba.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Lx=function(t,e,n,i){n!==i&&(e.flags|=4)};function oa(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ry(t,e,n){var i=e.pendingProps;switch(th(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return _n(e.type)&&Hl(),Jt(e),null;case 3:return i=e.stateNode,zs(),ft(vn),ft(sn),uh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(bo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kn!==null&&(Vf(Kn),Kn=null))),Uf(t,e),Jt(e),null;case 5:ch(e);var r=Nr(Za.current);if(n=e.type,t!==null&&e.stateNode!=null)Px(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return Jt(e),null}if(t=Nr(hi.current),bo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ui]=e,i[qa]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<Ea.length;r++)ut(Ea[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":op(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":cp(i,s),ut("invalid",i)}lf(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ao(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ao(i.textContent,o,t),r=["children",""+o]):Ba.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ut("scroll",i)}switch(n){case"input":vo(i),lp(i,s,!0);break;case"textarea":vo(i),up(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=zl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=a0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ui]=e,t[qa]=i,Nx(t,e,!1,!1),e.stateNode=t;e:{switch(a=cf(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ea.length;r++)ut(Ea[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":op(t,i),r=nf(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":cp(t,i),r=af(t,i),ut("invalid",t);break;default:r=i}lf(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?c0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&o0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&za(t,l):typeof l=="number"&&za(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ba.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&zd(t,s,l,a))}switch(n){case"input":vo(t),lp(t,i,!1);break;case"textarea":vo(t),up(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=zl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(t&&e.stateNode!=null)Lx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(n=Nr(Za.current),Nr(hi.current),bo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ui]=e,(s=i.nodeValue!==n)&&(t=bn,t!==null))switch(t.tag){case 3:Ao(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ao(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return Jt(e),null;case 13:if(ft(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&Tn!==null&&e.mode&1&&!(e.flags&128))K0(),ks(),e.flags|=98560,s=!1;else if(s=bo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[ui]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else Kn!==null&&(Vf(Kn),Kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Nt===0&&(Nt=3):Mh())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return zs(),Uf(t,e),t===null&&$a(e.stateNode.containerInfo),Jt(e),null;case 10:return sh(e.type._context),Jt(e),null;case 17:return _n(e.type)&&Hl(),Jt(e),null;case 19:if(ft(mt),s=e.memoizedState,s===null)return Jt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)oa(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Yl(t),a!==null){for(e.flags|=128,oa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Gs&&(e.flags|=128,i=!0,oa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Yl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!dt)return Jt(e),null}else 2*Et()-s.renderingStartTime>Gs&&n!==1073741824&&(e.flags|=128,i=!0,oa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=mt.current,ct(mt,i?n&1|2:n&1),e):(Jt(e),null);case 22:case 23:return yh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function sy(t,e){switch(th(e),e.tag){case 1:return _n(e.type)&&Hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),ft(vn),ft(sn),uh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ch(e),null;case 13:if(ft(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(de(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(mt),null;case 4:return zs(),null;case 10:return sh(e.type._context),null;case 22:case 23:return yh(),null;case 24:return null;default:return null}}var No=!1,nn=!1,ay=typeof WeakSet=="function"?WeakSet:Set,we=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function Ff(t,e,n){try{n()}catch(i){_t(t,e,i)}}var Jp=!1;function oy(t,e){if(_f=Ol,t=O0(),Jd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++d===i&&(l=a),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sf={focusedElem:t,selectionRange:n},Ol=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,x=v.memoizedState,u=e.stateNode,p=u.getSnapshotBeforeUpdate(e.elementType===e.type?E:Yn(e.type,E),x);u.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(M){_t(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return v=Jp,Jp=!1,v}function Da(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ff(e,n,s)}r=r.next}while(r!==i)}}function wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Dx(t){var e=t.alternate;e!==null&&(t.alternate=null,Dx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ui],delete e[qa],delete e[Ef],delete e[VS],delete e[WS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ix(t){return t.tag===5||t.tag===3||t.tag===4}function em(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ix(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zl));else if(i!==4&&(t=t.child,t!==null))for(kf(t,e,n),t=t.sibling;t!==null;)kf(t,e,n),t=t.sibling}function Bf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}var zt=null,qn=!1;function Hi(t,e,n){for(n=n.child;n!==null;)Ux(t,e,n),n=n.sibling}function Ux(t,e,n){if(di&&typeof di.onCommitFiberUnmount=="function")try{di.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 5:nn||Ts(n,e);case 6:var i=zt,r=qn;zt=null,Hi(t,e,n),zt=i,qn=r,zt!==null&&(qn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(qn?(t=zt,n=n.stateNode,t.nodeType===8?Qc(t.parentNode,n):t.nodeType===1&&Qc(t,n),Wa(t)):Qc(zt,n.stateNode));break;case 4:i=zt,r=qn,zt=n.stateNode.containerInfo,qn=!0,Hi(t,e,n),zt=i,qn=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ff(n,e,a),r=r.next}while(r!==i)}Hi(t,e,n);break;case 1:if(!nn&&(Ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){_t(n,e,o)}Hi(t,e,n);break;case 21:Hi(t,e,n);break;case 22:n.mode&1?(nn=(i=nn)||n.memoizedState!==null,Hi(t,e,n),nn=i):Hi(t,e,n);break;default:Hi(t,e,n)}}function tm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ay),e.forEach(function(i){var r=gy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:zt=o.stateNode,qn=!1;break e;case 3:zt=o.stateNode.containerInfo,qn=!0;break e;case 4:zt=o.stateNode.containerInfo,qn=!0;break e}o=o.return}if(zt===null)throw Error(de(160));Ux(s,a,r),zt=null,qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){_t(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fx(e,t),e=e.sibling}function Fx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Wn(e,t),si(t),i&4){try{Da(3,t,t.return),wc(3,t)}catch(E){_t(t,t.return,E)}try{Da(5,t,t.return)}catch(E){_t(t,t.return,E)}}break;case 1:Wn(e,t),si(t),i&512&&n!==null&&Ts(n,n.return);break;case 5:if(Wn(e,t),si(t),i&512&&n!==null&&Ts(n,n.return),t.flags&32){var r=t.stateNode;try{za(r,"")}catch(E){_t(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&r0(r,s),cf(o,a);var c=cf(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?c0(r,h):d==="dangerouslySetInnerHTML"?o0(r,h):d==="children"?za(r,h):zd(r,d,h,c)}switch(o){case"input":rf(r,s);break;case"textarea":s0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Rs(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[qa]=s}catch(E){_t(t,t.return,E)}}break;case 6:if(Wn(e,t),si(t),i&4){if(t.stateNode===null)throw Error(de(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){_t(t,t.return,E)}}break;case 3:if(Wn(e,t),si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wa(e.containerInfo)}catch(E){_t(t,t.return,E)}break;case 4:Wn(e,t),si(t);break;case 13:Wn(e,t),si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(_h=Et())),i&4&&tm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||d,Wn(e,t),nn=c):Wn(e,t),si(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(we=t,d=t.child;d!==null;){for(h=we=d;we!==null;){switch(f=we,m=f.child,f.tag){case 0:case 11:case 14:case 15:Da(4,f,f.return);break;case 1:Ts(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){_t(i,n,E)}}break;case 5:Ts(f,f.return);break;case 22:if(f.memoizedState!==null){im(h);continue}}m!==null?(m.return=f,we=m):im(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=l0("display",a))}catch(E){_t(t,t.return,E)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(E){_t(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Wn(e,t),si(t),i&4&&tm(t);break;case 21:break;default:Wn(e,t),si(t)}}function si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ix(n)){var i=n;break e}n=n.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(za(r,""),i.flags&=-33);var s=em(t);Bf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=em(t);kf(t,o,a);break;default:throw Error(de(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ly(t,e,n){we=t,Ox(t)}function Ox(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||No;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||nn;o=No;var c=nn;if(No=a,(nn=l)&&!c)for(we=r;we!==null;)a=we,l=a.child,a.tag===22&&a.memoizedState!==null?rm(r):l!==null?(l.return=a,we=l):rm(r);for(;s!==null;)we=s,Ox(s),s=s.sibling;we=r,No=o,nn=c}nm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):nm(t)}}function nm(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||wc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Yn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Wa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}nn||e.flags&512&&Of(e)}catch(f){_t(e,e.return,f)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function im(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function rm(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wc(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{Of(e)}catch(l){_t(e,s,l)}break;case 5:var a=e.return;try{Of(e)}catch(l){_t(e,a,l)}}}catch(l){_t(e,e.return,l)}if(e===t){we=null;break}var o=e.sibling;if(o!==null){o.return=e.return,we=o;break}we=e.return}}var cy=Math.ceil,Zl=ki.ReactCurrentDispatcher,xh=ki.ReactCurrentOwner,kn=ki.ReactCurrentBatchConfig,qe=0,Ot=null,bt=null,Vt=0,wn=0,As=xr(0),Nt=0,to=null,Fr=0,Tc=0,vh=0,Ia=null,mn=null,_h=0,Gs=1/0,wi=null,Ql=!1,zf=null,ur=null,Po=!1,nr=null,Jl=0,Ua=0,Hf=null,Ml=-1,El=0;function fn(){return qe&6?Et():Ml!==-1?Ml:Ml=Et()}function fr(t){return t.mode&1?qe&2&&Vt!==0?Vt&-Vt:jS.transition!==null?(El===0&&(El=y0()),El):(t=nt,t!==0||(t=window.event,t=t===void 0?16:R0(t.type)),t):1}function ti(t,e,n,i){if(50<Ua)throw Ua=0,Hf=null,Error(de(185));ao(t,n,i),(!(qe&2)||t!==Ot)&&(t===Ot&&(!(qe&2)&&(Tc|=n),Nt===4&&Ji(t,Vt)),Sn(t,i),n===1&&qe===0&&!(e.mode&1)&&(Gs=Et()+500,yc&&vr()))}function Sn(t,e){var n=t.callbackNode;j_(t,e);var i=Fl(t,t===Ot?Vt:0);if(i===0)n!==null&&hp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&hp(n),e===1)t.tag===0?XS(sm.bind(null,t)):$0(sm.bind(null,t)),HS(function(){!(qe&6)&&vr()}),n=null;else{switch(M0(i)){case 1:n=Xd;break;case 4:n=_0;break;case 16:n=Ul;break;case 536870912:n=S0;break;default:n=Ul}n=Xx(n,kx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kx(t,e){if(Ml=-1,El=0,qe&6)throw Error(de(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var i=Fl(t,t===Ot?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ec(t,i);else{e=i;var r=qe;qe|=2;var s=zx();(Ot!==t||Vt!==e)&&(wi=null,Gs=Et()+500,Pr(t,e));do try{dy();break}catch(o){Bx(t,o)}while(!0);rh(),Zl.current=s,qe=r,bt!==null?e=0:(Ot=null,Vt=0,e=Nt)}if(e!==0){if(e===2&&(r=pf(t),r!==0&&(i=r,e=Gf(t,r))),e===1)throw n=to,Pr(t,0),Ji(t,i),Sn(t,Et()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!uy(r)&&(e=ec(t,i),e===2&&(s=pf(t),s!==0&&(i=s,e=Gf(t,s))),e===1))throw n=to,Pr(t,0),Ji(t,i),Sn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:br(t,mn,wi);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=_h+500-Et(),10<e)){if(Fl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Mf(br.bind(null,t,mn,wi),e);break}br(t,mn,wi);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ei(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cy(i/1960))-i,10<i){t.timeoutHandle=Mf(br.bind(null,t,mn,wi),i);break}br(t,mn,wi);break;case 5:br(t,mn,wi);break;default:throw Error(de(329))}}}return Sn(t,Et()),t.callbackNode===n?kx.bind(null,t):null}function Gf(t,e){var n=Ia;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=ec(t,e),t!==2&&(e=mn,mn=n,e!==null&&Vf(e)),t}function Vf(t){mn===null?mn=t:mn.push.apply(mn,t)}function uy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ii(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~vh,e&=~Tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ei(e),i=1<<n;t[n]=-1,e&=~i}}function sm(t){if(qe&6)throw Error(de(327));Ds();var e=Fl(t,0);if(!(e&1))return Sn(t,Et()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var i=pf(t);i!==0&&(e=i,n=Gf(t,i))}if(n===1)throw n=to,Pr(t,0),Ji(t,e),Sn(t,Et()),n;if(n===6)throw Error(de(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,mn,wi),Sn(t,Et()),null}function Sh(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Gs=Et()+500,yc&&vr())}}function Or(t){nr!==null&&nr.tag===0&&!(qe&6)&&Ds();var e=qe;qe|=1;var n=kn.transition,i=nt;try{if(kn.transition=null,nt=1,t)return t()}finally{nt=i,kn.transition=n,qe=e,!(qe&6)&&vr()}}function yh(){wn=As.current,ft(As)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zS(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(th(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Hl();break;case 3:zs(),ft(vn),ft(sn),uh();break;case 5:ch(i);break;case 4:zs();break;case 13:ft(mt);break;case 19:ft(mt);break;case 10:sh(i.type._context);break;case 22:case 23:yh()}n=n.return}if(Ot=t,bt=t=dr(t.current,null),Vt=wn=e,Nt=0,to=null,vh=Tc=Fr=0,mn=Ia=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Cr=null}return t}function Bx(t,e){do{var n=bt;try{if(rh(),_l.current=Kl,ql){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ql=!1}if(Ur=0,Ft=Ct=gt=null,La=!1,Qa=0,xh.current=null,n===null||n.return===null){Nt=1,to=e,bt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Vt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=jp(a);if(m!==null){m.flags&=-257,$p(m,a,o,s,e),m.mode&1&&Xp(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var E=new Set;E.add(l),e.updateQueue=E}else v.add(l);break e}else{if(!(e&1)){Xp(s,c,e),Mh();break e}l=Error(de(426))}}else if(dt&&o.mode&1){var x=jp(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),$p(x,a,o,s,e),nh(Hs(l,o));break e}}s=l=Hs(l,o),Nt!==4&&(Nt=2),Ia===null?Ia=[s]:Ia.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Mx(s,l,e);Bp(s,u);break e;case 1:o=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ur===null||!ur.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Ex(s,o,e);Bp(s,M);break e}}s=s.return}while(s!==null)}Gx(n)}catch(R){e=R,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function zx(){var t=Zl.current;return Zl.current=Kl,t===null?Kl:t}function Mh(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Ot===null||!(Fr&268435455)&&!(Tc&268435455)||Ji(Ot,Vt)}function ec(t,e){var n=qe;qe|=2;var i=zx();(Ot!==t||Vt!==e)&&(wi=null,Pr(t,e));do try{fy();break}catch(r){Bx(t,r)}while(!0);if(rh(),qe=n,Zl.current=i,bt!==null)throw Error(de(261));return Ot=null,Vt=0,Nt}function fy(){for(;bt!==null;)Hx(bt)}function dy(){for(;bt!==null&&!O_();)Hx(bt)}function Hx(t){var e=Wx(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?Gx(t):bt=e,xh.current=null}function Gx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=sy(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,bt=null;return}}else if(n=ry(n,e,wn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Nt===0&&(Nt=5)}function br(t,e,n){var i=nt,r=kn.transition;try{kn.transition=null,nt=1,hy(t,e,n,i)}finally{kn.transition=r,nt=i}return null}function hy(t,e,n,i){do Ds();while(nr!==null);if(qe&6)throw Error(de(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(de(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($_(t,s),t===Ot&&(bt=Ot=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Po||(Po=!0,Xx(Ul,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var a=nt;nt=1;var o=qe;qe|=4,xh.current=null,oy(t,n),Fx(n,t),DS(Sf),Ol=!!_f,Sf=_f=null,t.current=n,ly(n),k_(),qe=o,nt=a,kn.transition=s}else t.current=n;if(Po&&(Po=!1,nr=t,Jl=r),s=t.pendingLanes,s===0&&(ur=null),H_(n.stateNode),Sn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ql)throw Ql=!1,t=zf,zf=null,t;return Jl&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===Hf?Ua++:(Ua=0,Hf=t):Ua=0,vr(),null}function Ds(){if(nr!==null){var t=M0(Jl),e=kn.transition,n=nt;try{if(kn.transition=null,nt=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,Jl=0,qe&6)throw Error(de(331));var r=qe;for(qe|=4,we=t.current;we!==null;){var s=we,a=s.child;if(we.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(we=c;we!==null;){var d=we;switch(d.tag){case 0:case 11:case 15:Da(8,d,s)}var h=d.child;if(h!==null)h.return=d,we=h;else for(;we!==null;){d=we;var f=d.sibling,m=d.return;if(Dx(d),d===c){we=null;break}if(f!==null){f.return=m,we=f;break}we=m}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var x=E.sibling;E.sibling=null,E=x}while(E!==null)}}we=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,we=a;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Da(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,we=u;break e}we=s.return}}var p=t.current;for(we=p;we!==null;){a=we;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,we=y;else e:for(a=p;we!==null;){if(o=we,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:wc(9,o)}}catch(R){_t(o,o.return,R)}if(o===a){we=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,we=M;break e}we=o.return}}if(qe=r,vr(),di&&typeof di.onPostCommitFiberRoot=="function")try{di.onPostCommitFiberRoot(gc,t)}catch{}i=!0}return i}finally{nt=n,kn.transition=e}}return!1}function am(t,e,n){e=Hs(n,e),e=Mx(t,e,1),t=cr(t,e,1),e=fn(),t!==null&&(ao(t,1,e),Sn(t,e))}function _t(t,e,n){if(t.tag===3)am(t,t,n);else for(;e!==null;){if(e.tag===3){am(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){t=Hs(n,t),t=Ex(e,t,1),e=cr(e,t,1),t=fn(),e!==null&&(ao(e,1,t),Sn(e,t));break}}e=e.return}}function py(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(Vt&n)===n&&(Nt===4||Nt===3&&(Vt&130023424)===Vt&&500>Et()-_h?Pr(t,0):vh|=n),Sn(t,e)}function Vx(t,e){e===0&&(t.mode&1?(e=yo,yo<<=1,!(yo&130023424)&&(yo=4194304)):e=1);var n=fn();t=Ui(t,e),t!==null&&(ao(t,e,n),Sn(t,n))}function my(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vx(t,n)}function gy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),Vx(t,n)}var Wx;Wx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,iy(t,e,n);gn=!!(t.flags&131072)}else gn=!1,dt&&e.flags&1048576&&Y0(e,Wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yl(t,e),t=e.pendingProps;var r=Os(e,sn.current);Ls(e,n),r=dh(null,e,i,t,r,n);var s=hh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,Gl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,oh(e),r.updater=Ec,e.stateNode=r,r._reactInternals=e,Cf(e,i,t,n),e=Lf(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&eh(e),un(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=vy(i),t=Yn(i,t),r){case 0:e=Pf(null,e,i,t,n);break e;case 1:e=Kp(null,e,i,t,n);break e;case 11:e=Yp(null,e,i,t,n);break e;case 14:e=qp(null,e,i,Yn(i.type,t),n);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Pf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Kp(t,e,i,r,n);case 3:e:{if(bx(e),t===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ex(t,e),$l(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Hs(Error(de(423)),e),e=Zp(t,e,i,n,r);break e}else if(i!==r){r=Hs(Error(de(424)),e),e=Zp(t,e,i,n,r);break e}else for(Tn=lr(e.stateNode.containerInfo.firstChild),bn=e,dt=!0,Kn=null,n=Q0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),i===r){e=Fi(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 5:return tx(e),t===null&&Af(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,yf(i,r)?a=null:s!==null&&yf(i,s)&&(e.flags|=32),Ax(t,e),un(t,e,a,n),e.child;case 6:return t===null&&Af(e),null;case 13:return Rx(t,e,n);case 4:return lh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Bs(e,null,i,n):un(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),Yp(t,e,i,r,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ct(Xl,i._currentValue),i._currentValue=a,s!==null)if(ii(s.value,a)){if(s.children===r.children&&!vn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ni(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),bf(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(de(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),bf(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}un(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ls(e,n),r=Bn(r),i=i(r),e.flags|=1,un(t,e,i,n),e.child;case 14:return i=e.type,r=Yn(i,e.pendingProps),r=Yn(i.type,r),qp(t,e,i,r,n);case 15:return wx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Yn(i,r),yl(t,e),e.tag=1,_n(i)?(t=!0,Gl(e)):t=!1,Ls(e,n),yx(e,i,r),Cf(e,i,r,n),Lf(null,e,i,!0,t,n);case 19:return Cx(t,e,n);case 22:return Tx(t,e,n)}throw Error(de(156,e.tag))};function Xx(t,e){return v0(t,e)}function xy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new xy(t,e,n,i)}function Eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vy(t){if(typeof t=="function")return Eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gd)return 11;if(t===Vd)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Eh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case gs:return Lr(n.children,r,s,e);case Hd:a=8,r|=8;break;case Qu:return t=On(12,n,e,r|2),t.elementType=Qu,t.lanes=s,t;case Ju:return t=On(13,n,e,r),t.elementType=Ju,t.lanes=s,t;case ef:return t=On(19,n,e,r),t.elementType=ef,t.lanes=s,t;case t0:return Ac(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jg:a=10;break e;case e0:a=9;break e;case Gd:a=11;break e;case Vd:a=14;break e;case Yi:a=16,i=null;break e}throw Error(de(130,t==null?t:typeof t,""))}return e=On(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Lr(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function Ac(t,e,n,i){return t=On(22,t,i,e),t.elementType=t0,t.lanes=n,t.stateNode={isHidden:!1},t}function au(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function ou(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _y(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hc(0),this.expirationTimes=Hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function wh(t,e,n,i,r,s,a,o,l){return t=new _y(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oh(s),t}function Sy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function jx(t){if(!t)return pr;t=t._reactInternals;e:{if(Vr(t)!==t||t.tag!==1)throw Error(de(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(t.tag===1){var n=t.type;if(_n(n))return j0(t,n,e)}return e}function $x(t,e,n,i,r,s,a,o,l){return t=wh(n,i,!0,t,r,s,a,o,l),t.context=jx(null),n=t.current,i=fn(),r=fr(n),s=Ni(i,r),s.callback=e??null,cr(n,s,r),t.current.lanes=r,ao(t,r,i),Sn(t,i),t}function bc(t,e,n,i){var r=e.current,s=fn(),a=fr(r);return n=jx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ni(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=cr(r,e,a),t!==null&&(ti(t,r,a,s),vl(t,r,a)),a}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function om(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Th(t,e){om(t,e),(t=t.alternate)&&om(t,e)}function yy(){return null}var Yx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ah(t){this._internalRoot=t}Rc.prototype.render=Ah.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(de(409));bc(t,e,null,null)};Rc.prototype.unmount=Ah.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){bc(null,t,null,null)}),e[Ii]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=T0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&b0(t)}};function bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lm(){}function My(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tc(a);s.call(c)}}var a=$x(e,i,t,0,null,!1,!1,"",lm);return t._reactRootContainer=a,t[Ii]=a.current,$a(t.nodeType===8?t.parentNode:t),Or(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=tc(l);o.call(c)}}var l=wh(t,0,!1,null,null,!1,!1,"",lm);return t._reactRootContainer=l,t[Ii]=l.current,$a(t.nodeType===8?t.parentNode:t),Or(function(){bc(e,l,n,i)}),l}function Nc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=tc(a);o.call(l)}}bc(e,a,t,r)}else a=My(n,e,t,r,i);return tc(a)}E0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ma(e.pendingLanes);n!==0&&(jd(e,n|1),Sn(e,Et()),!(qe&6)&&(Gs=Et()+500,vr()))}break;case 13:Or(function(){var i=Ui(t,1);if(i!==null){var r=fn();ti(i,t,1,r)}}),Th(t,1)}};$d=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=fn();ti(e,t,134217728,n)}Th(t,134217728)}};w0=function(t){if(t.tag===13){var e=fr(t),n=Ui(t,e);if(n!==null){var i=fn();ti(n,t,e,i)}Th(t,e)}};T0=function(){return nt};A0=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};ff=function(t,e,n){switch(e){case"input":if(rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Sc(i);if(!r)throw Error(de(90));i0(i),rf(i,r)}}}break;case"textarea":s0(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};d0=Sh;h0=Or;var Ey={usingClientEntryPoint:!1,Events:[lo,Ss,Sc,u0,f0,Sh]},la={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wy={bundleType:la.bundleType,version:la.version,rendererPackageName:la.rendererPackageName,rendererConfig:la.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=g0(t),t===null?null:t.stateNode},findFiberByHostInstance:la.findFiberByHostInstance||yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{gc=Lo.inject(wy),di=Lo}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ey;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bh(e))throw Error(de(200));return Sy(t,e,null,n)};Cn.createRoot=function(t,e){if(!bh(t))throw Error(de(299));var n=!1,i="",r=Yx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=wh(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,$a(t.nodeType===8?t.parentNode:t),new Ah(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(de(188)):(t=Object.keys(t).join(","),Error(de(268,t)));return t=g0(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return Or(t)};Cn.hydrate=function(t,e,n){if(!Cc(e))throw Error(de(200));return Nc(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!bh(t))throw Error(de(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Yx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=$x(e,null,t,1,n??null,r,!1,s,a),t[Ii]=e.current,$a(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Rc(e)};Cn.render=function(t,e,n){if(!Cc(e))throw Error(de(200));return Nc(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!Cc(t))throw Error(de(40));return t._reactRootContainer?(Or(function(){Nc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};Cn.unstable_batchedUpdates=Sh;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Cc(n))throw Error(de(200));if(t==null||t._reactInternals===void 0)throw Error(de(38));return Nc(t,e,n,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function qx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qx)}catch(t){console.error(t)}}qx(),qg.exports=Cn;var Ty=qg.exports,cm=Ty;Ku.createRoot=cm.createRoot,Ku.hydrateRoot=cm.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rh="187",Ay=0,um=1,by=2,Tl=1,Ry=2,wa=3,kr=0,yn=1,Ai=2,Is=0,Fa=1,bs=2,fm=3,dm=4,Cy=5,ps=100,Ny=101,Py=102,Ly=103,Dy=104,Iy=200,Uy=201,Fy=202,Oy=203,Kx=204,Zx=205,ky=206,By=207,zy=208,Hy=209,Gy=210,Vy=211,Wy=212,Xy=213,jy=214,Wf=0,Xf=1,jf=2,no=3,$f=4,Yf=5,qf=6,Kf=7,Qx=0,$y=1,Yy=2,Pi=0,Jx=1,Ch=2,ev=3,tv=4,nv=5,iv=6,rv=7,sv=300,Vs=301,io=302,lu=303,cu=304,Zf=1e3,Ci=1001,Qf=1002,Gt=1003,qy=1004,Do=1005,xn=1006,uu=1007,ir=1008,Un=1009,av=1010,ov=1011,ro=1012,Nh=1013,mi=1014,Qn=1015,gi=1016,Ph=1017,Lh=1018,Ws=1020,lv=35902,cv=35899,uv=1021,fv=1022,fi=1023,mr=1026,rr=1027,Dh=1028,Ih=1029,Br=1030,Uh=1031,Fh=1033,Al=33776,bl=33777,Rl=33778,Cl=33779,Jf=35840,ed=35841,td=35842,nd=35843,id=36196,rd=37492,sd=37496,ad=37488,od=37489,nc=37490,ld=37491,cd=37808,ud=37809,fd=37810,dd=37811,hd=37812,pd=37813,md=37814,gd=37815,xd=37816,vd=37817,_d=37818,Sd=37819,yd=37820,Md=37821,Ed=36492,wd=36494,Td=36495,Ad=36283,bd=36284,ic=36285,Rd=36286,Ky=3200,hm=0,Zy=1,er="",Ln="srgb",rc="srgb-linear",sc="linear",tt="srgb",fu=7680,Qy=519,Jy=512,eM=513,tM=514,dv=515,nM=516,iM=517,hv=518,pv=519,mv=35044,Yr=35048,pm="300 es",Jn=2e3,ac=2001;function rM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function oc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function sM(){const t=oc("canvas");return t.style.display="block",t}const mm={};function lc(...t){const e="THREE."+t.shift();console.log(e,...t)}function gv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=gv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Qe(...t){t=gv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Nl(...t){const e=t.join(" ");e in mm||(mm[e]=!0,Ie(...t))}function aM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const oM={[Wf]:Wf,[jf]:qf,[$f]:$f,[no]:Yf,[Xf]:Xf,[qf]:jf,[Kf]:Kf,[Yf]:no};class Wr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],du=Math.PI/180,Cd=180/Math.PI;function Xr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function lM(t,e){return(t%e+e)%e}function hu(t,e,n){return(1-n)*t+n*e}function cM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Pc(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function xv(t,e){if(e.constructor===Float32Array)return t;const n=Pc(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function vv(t,e){if(e.constructor===Float32Array)return t;const n=Pc(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const zh=class zh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zh.prototype.isVector2=!0;let ze=zh;class Ks{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3],f=s[a+0],m=s[a+1],v=s[a+2],E=s[a+3];if(h!==E||l!==f||c!==m||d!==v){let x=l*f+c*m+d*v+h*E;x<0&&(f=-f,m=-m,v=-v,E=-E,x=-x);let u=1-o;if(x<.9995){const p=Math.acos(x),y=Math.sin(p);u=Math.sin(u*p)/y,o=Math.sin(o*p)/y,l=l*u+f*o,c=c*u+m*o,d=d*u+v*o,h=h*u+E*o}else{l=l*u+f*o,c=c*u+m*o,d=d*u+v*o,h=h*u+E*o;const p=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=p,c*=p,d*=p,h*=p}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+d*h+l*m-c*f,e[n+1]=l*v+d*f+c*h-o*m,e[n+2]=c*v+d*m+o*f-l*h,e[n+3]=d*v-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),f=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*d*h+c*m*v,this._y=c*m*h-f*d*v,this._z=c*d*v+f*m*h,this._w=c*d*h-f*m*v;break;case"YXZ":this._x=f*d*h+c*m*v,this._y=c*m*h-f*d*v,this._z=c*d*v-f*m*h,this._w=c*d*h+f*m*v;break;case"ZXY":this._x=f*d*h-c*m*v,this._y=c*m*h+f*d*v,this._z=c*d*v+f*m*h,this._w=c*d*h-f*m*v;break;case"ZYX":this._x=f*d*h-c*m*v,this._y=c*m*h+f*d*v,this._z=c*d*v-f*m*h,this._w=c*d*h+f*m*v;break;case"YZX":this._x=f*d*h+c*m*v,this._y=c*m*h+f*d*v,this._z=c*d*v-f*m*h,this._w=c*d*h-f*m*v;break;case"XZY":this._x=f*d*h-c*m*v,this._y=c*m*h-f*d*v,this._z=c*d*v+f*m*h,this._w=c*d*h+f*m*v;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Hh=class Hh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pu.copy(this).projectOnVector(e),this.sub(pu)}reflect(e){return this.sub(pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hh.prototype.isVector3=!0;let Y=Hh;const pu=new Y,gm=new Ks,Gh=class Gh{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],v=i[8],E=r[0],x=r[3],u=r[6],p=r[1],y=r[4],M=r[7],R=r[2],b=r[5],g=r[8];return s[0]=a*E+o*p+l*R,s[3]=a*x+o*y+l*b,s[6]=a*u+o*M+l*g,s[1]=c*E+d*p+h*R,s[4]=c*x+d*y+h*b,s[7]=c*u+d*M+h*g,s[2]=f*E+m*p+v*R,s[5]=f*x+m*y+v*b,s[8]=f*u+m*M+v*g,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,f=o*l-d*s,m=c*s-a*l,v=n*h+i*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=h*E,e[1]=(r*c-d*i)*E,e[2]=(o*i-r*a)*E,e[3]=f*E,e[4]=(d*n-r*l)*E,e[5]=(r*s-o*n)*E,e[6]=m*E,e[7]=(i*l-c*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Nl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mu.makeScale(e,n)),this}rotate(e){return Nl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mu.makeRotation(-e)),this}translate(e,n){return Nl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gh.prototype.isMatrix3=!0;let Oe=Gh;const mu=new Oe,xm=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vm=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uM(){const t={enabled:!0,workingColorSpace:rc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(r.r=Us(r.r),r.g=Us(r.g),r.b=Us(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?sc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[rc]:{primaries:e,whitePoint:i,transfer:sc,toXYZ:xm,fromXYZ:vm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:xm,fromXYZ:vm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),t}const je=uM();function Li(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Us(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let qr;class fM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qr===void 0&&(qr=oc("canvas")),qr.width=e.width,qr.height=e.height;const r=qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=qr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=oc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Li(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Li(n[i]/255)*255):n[i]=Li(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dM=0;class Oh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Xr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(gu(r[a].image)):s.push(gu(r[a]))}else s=gu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function gu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?fM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let hM=0;const xu=new Y;class rn extends Wr{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=Ci,r=Ci,s=xn,a=ir,o=fi,l=Un,c=rn.DEFAULT_ANISOTROPY,d=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Xr(),this.name="",this.source=new Oh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xu).x}get height(){return this.source.getSize(xu).y}get depth(){return this.source.getSize(xu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zf:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Qf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zf:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Qf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=sv;rn.DEFAULT_ANISOTROPY=1;const Vh=class Vh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],v=l[9],E=l[2],x=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-E)<.01&&Math.abs(v-x)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+E)<.1&&Math.abs(v+x)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,M=(m+1)/2,R=(u+1)/2,b=(d+f)/4,g=(h+E)/4,T=(v+x)/4;return y>M&&y>R?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=b/i,s=g/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=T/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=g/s,r=T/s),this.set(i,r,s,n),this}let p=Math.sqrt((x-v)*(x-v)+(h-E)*(h-E)+(f-d)*(f-d));return Math.abs(p)<.001&&(p=1),this.x=(x-v)/p,this.y=(h-E)/p,this.z=(f-d)/p,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vh.prototype.isVector4=!0;let St=Vh;class pM extends Wr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new rn({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Oh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends pM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class _v extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mM extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const pc=class pc{constructor(e,n,i,r,s,a,o,l,c,d,h,f,m,v,E,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,h,f,m,v,E,x)}set(e,n,i,r,s,a,o,l,c,d,h,f,m,v,E,x){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=v,u[11]=E,u[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),s=1/Kr.setFromMatrixColumn(e,1).length(),a=1/Kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,m=a*h,v=o*d,E=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+v*c,n[5]=f-E*c,n[9]=-o*l,n[2]=E-f*c,n[6]=v+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,v=c*d,E=c*h;n[0]=f+E*o,n[4]=v*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=m*o-v,n[6]=E+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,v=c*d,E=c*h;n[0]=f-E*o,n[4]=-a*h,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*d,n[9]=E-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,m=a*h,v=o*d,E=o*h;n[0]=l*d,n[4]=v*c-m,n[8]=f*c+E,n[1]=l*h,n[5]=E*c+f,n[9]=m*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,v=o*l,E=o*c;n[0]=l*d,n[4]=E-f*h,n[8]=v*h+m,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*h+v,n[10]=f-E*h}else if(e.order==="XZY"){const f=a*l,m=a*c,v=o*l,E=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+E,n[5]=a*d,n[9]=m*h-v,n[2]=v*h-m,n[6]=o*d,n[10]=E*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gM,e,xM)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Gi.crossVectors(i,Mn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Gi.crossVectors(i,Mn)),Gi.normalize(),Io.crossVectors(Mn,Gi),r[0]=Gi.x,r[4]=Io.x,r[8]=Mn.x,r[1]=Gi.y,r[5]=Io.y,r[9]=Mn.y,r[2]=Gi.z,r[6]=Io.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],v=i[2],E=i[6],x=i[10],u=i[14],p=i[3],y=i[7],M=i[11],R=i[15],b=r[0],g=r[4],T=r[8],O=r[12],N=r[1],I=r[5],$=r[9],ee=r[13],L=r[2],q=r[6],ie=r[10],G=r[14],X=r[3],k=r[7],H=r[11],ne=r[15];return s[0]=a*b+o*N+l*L+c*X,s[4]=a*g+o*I+l*q+c*k,s[8]=a*T+o*$+l*ie+c*H,s[12]=a*O+o*ee+l*G+c*ne,s[1]=d*b+h*N+f*L+m*X,s[5]=d*g+h*I+f*q+m*k,s[9]=d*T+h*$+f*ie+m*H,s[13]=d*O+h*ee+f*G+m*ne,s[2]=v*b+E*N+x*L+u*X,s[6]=v*g+E*I+x*q+u*k,s[10]=v*T+E*$+x*ie+u*H,s[14]=v*O+E*ee+x*G+u*ne,s[3]=p*b+y*N+M*L+R*X,s[7]=p*g+y*I+M*q+R*k,s[11]=p*T+y*$+M*ie+R*H,s[15]=p*O+y*ee+M*G+R*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],v=e[3],E=e[7],x=e[11],u=e[15],p=l*m-c*f,y=o*m-c*h,M=o*f-l*h,R=a*m-c*d,b=a*f-l*d,g=a*h-o*d;return n*(E*p-x*y+u*M)-i*(v*p-x*R+u*b)+r*(v*y-E*R+u*g)-s*(v*M-E*b+x*g)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return n*(a*d-o*c)-i*(s*d-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],v=e[12],E=e[13],x=e[14],u=e[15],p=n*o-i*a,y=n*l-r*a,M=n*c-s*a,R=i*l-r*o,b=i*c-s*o,g=r*c-s*l,T=d*E-h*v,O=d*x-f*v,N=d*u-m*v,I=h*x-f*E,$=h*u-m*E,ee=f*u-m*x,L=p*ee-y*$+M*I+R*N-b*O+g*T;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/L;return e[0]=(o*ee-l*$+c*I)*q,e[1]=(r*$-i*ee-s*I)*q,e[2]=(E*g-x*b+u*R)*q,e[3]=(f*b-h*g-m*R)*q,e[4]=(l*N-a*ee-c*O)*q,e[5]=(n*ee-r*N+s*O)*q,e[6]=(x*M-v*g-u*y)*q,e[7]=(d*g-f*M+m*y)*q,e[8]=(a*$-o*N+c*T)*q,e[9]=(i*N-n*$-s*T)*q,e[10]=(v*b-E*M+u*p)*q,e[11]=(h*M-d*b-m*p)*q,e[12]=(o*O-a*I-l*T)*q,e[13]=(n*I-i*O+r*T)*q,e[14]=(E*y-v*R-x*p)*q,e[15]=(d*R-h*y+f*p)*q,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,h=o+o,f=s*c,m=s*d,v=s*h,E=a*d,x=a*h,u=o*h,p=l*c,y=l*d,M=l*h,R=i.x,b=i.y,g=i.z;return r[0]=(1-(E+u))*R,r[1]=(m+M)*R,r[2]=(v-y)*R,r[3]=0,r[4]=(m-M)*b,r[5]=(1-(f+u))*b,r[6]=(x+p)*b,r[7]=0,r[8]=(v+y)*g,r[9]=(x-p)*g,r[10]=(1-(f+E))*g,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Kr.set(r[0],r[1],r[2]).length();const o=Kr.set(r[4],r[5],r[6]).length(),l=Kr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Xn.copy(this);const c=1/a,d=1/o,h=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=d,Xn.elements[5]*=d,Xn.elements[6]*=d,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,n.setFromRotationMatrix(Xn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Jn,l=!1){const c=this.elements,d=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let v,E;if(l)v=s/(a-s),E=a*s/(a-s);else if(o===Jn)v=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===ac)v=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Jn,l=!1){const c=this.elements,d=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let v,E;if(l)v=1/(a-s),E=a/(a-s);else if(o===Jn)v=-2/(a-s),E=-(a+s)/(a-s);else if(o===ac)v=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};pc.prototype.isMatrix4=!0;let st=pc;const Kr=new Y,Xn=new st,gM=new Y(0,0,0),xM=new Y(1,1,1),Gi=new Y,Io=new Y,Mn=new Y,_m=new st,Sm=new Ks;class zr{constructor(e=0,n=0,i=0,r=zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _m.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_m,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sm.setFromEuler(this),this.setFromQuaternion(Sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zr.DEFAULT_ORDER="XYZ";class Sv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vM=0;const ym=new Y,Zr=new Ks,vi=new st,Uo=new Y,ca=new Y,_M=new Y,SM=new Ks,Mm=new Y(1,0,0),Em=new Y(0,1,0),wm=new Y(0,0,1),Tm={type:"added"},yM={type:"removed"},Qr={type:"childadded",child:null},vu={type:"childremoved",child:null};class dn extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new Y,n=new zr,i=new Ks,r=new Y(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new Oe}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(Mm,e)}rotateY(e){return this.rotateOnAxis(Em,e)}rotateZ(e){return this.rotateOnAxis(wm,e)}translateOnAxis(e,n){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mm,e)}translateY(e){return this.translateOnAxis(Em,e)}translateZ(e){return this.translateOnAxis(wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Uo.copy(e):Uo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(ca,Uo,this.up):vi.lookAt(Uo,ca,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(vi),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tm),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yM),vu.child=e,this.dispatchEvent(vu),vu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tm),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,_M),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,SM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}dn.DEFAULT_UP=new Y(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ta extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MM={type:"move"};class _u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const x=n.getJointPose(E,i),u=this._getHandJoint(c,E);x!==null&&(u.matrix.fromArray(x.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=x.radius),u.visible=x!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(MM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ta;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const yv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function Su(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=lM(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Su(a,s,e+1/3),this.g=Su(a,s,e),this.b=Su(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,n=Ln){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ln){const i=yv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return je.workingToColorSpace(tn.copy(this),e),Math.round($e(tn.r*255,0,255))*65536+Math.round($e(tn.g*255,0,255))*256+Math.round($e(tn.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(tn.copy(this),n);const i=tn.r,r=tn.g,s=tn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Ln){je.workingToColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b;return e!==Ln?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(Fo);const i=hu(Vi.h,Fo.h,n),r=hu(Vi.s,Fo.s,n),s=hu(Vi.l,Fo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Xe;Xe.NAMES=yv;class EM extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zr,this.environmentIntensity=1,this.environmentRotation=new zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const jn=new Y,_i=new Y,yu=new Y,Si=new Y,Jr=new Y,es=new Y,Am=new Y,Mu=new Y,Eu=new Y,wu=new Y,Tu=new St,Au=new St,bu=new St;class Fn{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),_i.subVectors(i,n),yu.subVectors(e,n);const a=jn.dot(jn),o=jn.dot(_i),l=jn.dot(yu),c=_i.dot(_i),d=_i.dot(yu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-o*d)*f,v=(a*d-o*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Tu.setScalar(0),Au.setScalar(0),bu.setScalar(0),Tu.fromBufferAttribute(e,n),Au.fromBufferAttribute(e,i),bu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Tu,s.x),a.addScaledVector(Au,s.y),a.addScaledVector(bu,s.z),a}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),_i.subVectors(e,n),jn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),jn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Fn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Jr.subVectors(r,i),es.subVectors(s,i),Mu.subVectors(e,i);const l=Jr.dot(Mu),c=es.dot(Mu);if(l<=0&&c<=0)return n.copy(i);Eu.subVectors(e,r);const d=Jr.dot(Eu),h=es.dot(Eu);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0&&l-d>0)return a=l/(l-d),n.copy(i).addScaledVector(Jr,a);wu.subVectors(e,s);const m=Jr.dot(wu),v=es.dot(wu);if(v>=0&&m<=v)return n.copy(s);const E=m*c-l*v;if(E<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(es,o);const x=d*v-m*h;if(x<=0&&h-d>=0&&m-v>=0)return Am.subVectors(s,r),o=(h-d)/(h-d+(m-v)),n.copy(r).addScaledVector(Am,o);const u=1/(x+E+f);return a=E*u,o=f*u,n.copy(i).addScaledVector(Jr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class jr{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint($n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint($n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=$n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(s,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oo.copy(i.boundingBox)),Oo.applyMatrix4(e.matrixWorld),this.union(Oo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),ko.subVectors(this.max,ua),ts.subVectors(e.a,ua),ns.subVectors(e.b,ua),is.subVectors(e.c,ua),Wi.subVectors(ns,ts),Xi.subVectors(is,ns),Mr.subVectors(ts,is);let n=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-Mr.z,Mr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,Mr.z,0,-Mr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-Mr.y,Mr.x,0];return!Ru(n,ts,ns,is,ko)||(n=[1,0,0,0,1,0,0,0,1],!Ru(n,ts,ns,is,ko))?!1:(Bo.crossVectors(Wi,Xi),n=[Bo.x,Bo.y,Bo.z],Ru(n,ts,ns,is,ko))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],$n=new Y,Oo=new jr,ts=new Y,ns=new Y,is=new Y,Wi=new Y,Xi=new Y,Mr=new Y,ua=new Y,ko=new Y,Bo=new Y,Er=new Y;function Ru(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Er.fromArray(t,s);const o=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),c=n.dot(Er),d=i.dot(Er);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Tt=new Y,zo=new ze;let wM=0;class An extends Wr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mv,this.updateRanges=[],this.gpuType=Qn,this.version=0,this._normalizationScale=e!==void 0?Pc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)zo.fromBufferAttribute(this,n),zo.applyMatrix3(e),this.setXY(n,zo.x,zo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):xv(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):vv(e,this.array)}}class Mv extends An{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ev extends An{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ni extends An{constructor(e,n,i){super(new Float32Array(e),n,i)}}const TM=new jr,fa=new Y,Cu=new Y;class Zs{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):TM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const n=fa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(fa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(Cu)),this.expandByPoint(fa.copy(e.center).sub(Cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let AM=0;const Pn=new st,Nu=new dn,rs=new Y,En=new jr,da=new jr,Ut=new Y;class ri extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rM(e)?Ev:Mv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return Nu.lookAt(e),Nu.updateMatrix(),this.applyMatrix4(Nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ni(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];da.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(En.min,da.min),En.expandByPoint(Ut),Ut.addVectors(En.max,da.max),En.expandByPoint(Ut)):(En.expandByPoint(da.min),En.expandByPoint(da.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ut.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(e,c),Ut.add(rs)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new An(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let O=0;O<i.count;O++)o[O]=new Y,l[O]=new Y;const d=new Y,h=new Y,f=new Y,m=new ze,v=new ze,E=new ze,x=new Y,u=new Y;function p(O,N,I){c[O]=c[N]=c[I]=1,d.fromBufferAttribute(i,O),h.fromBufferAttribute(i,N),f.fromBufferAttribute(i,I),m.fromBufferAttribute(s,O),v.fromBufferAttribute(s,N),E.fromBufferAttribute(s,I),h.sub(d),f.sub(d),v.sub(m),E.sub(m);const $=1/(v.x*E.y-E.x*v.y);isFinite($)&&(x.copy(h).multiplyScalar(E.y).addScaledVector(f,-v.y).multiplyScalar($),u.copy(f).multiplyScalar(v.x).addScaledVector(h,-E.x).multiplyScalar($),o[O].add(x),o[N].add(x),o[I].add(x),l[O].add(u),l[N].add(u),l[I].add(u))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let O=0,N=y.length;O<N;++O){const I=y[O],$=I.start,ee=I.count;for(let L=$,q=$+ee;L<q;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const M=new Y,R=new Y,b=new Y,g=new Y;function T(O){b.fromBufferAttribute(r,O),g.copy(b);const N=o[O];M.copy(N),M.sub(b.multiplyScalar(b.dot(N))).normalize(),R.crossVectors(g,N);const $=R.dot(l[O])<0?-1:1;a.setXYZW(O,M.x,M.y,M.z,$)}for(let O=0,N=i.count;O<N;++O)c[O]&&T(O);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new An(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new Y,s=new Y,a=new Y,o=new Y,l=new Y,c=new Y,d=new Y,h=new Y;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),E=e.getX(f+1),x=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,x),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,x),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let m=0,v=0;for(let E=0,x=l.length;E<x;E++){o.isInterleavedBufferAttribute?m=l[E]*o.data.stride+o.offset:m=l[E]*d;for(let u=0;u<d;u++)f[v++]=c[m++]}return new An(f,d,h)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ri,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bM{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=mv,this.updateRanges=[],this.version=0,this.uuid=Xr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=bm(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[n]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=bm(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:n,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function bm(t){return t.buffer._uuid===void 0&&(t.buffer._uuid=Xr()),t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer._uuid:t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}const ln=new Y;class cc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?Pc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix4(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyNormalMatrix(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.transformDirection(e),this.setXYZ(n,ln.x,ln.y,ln.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=this._denormalize(n)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=this._denormalize(n)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=this._denormalize(n)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=this._denormalize(n)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){lc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new An(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){lc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):xv(e,this.data.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):vv(e,this.data.array)}}const Pu=new Y,RM=new Y,CM=new Oe;class Ki{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Pu.subVectors(i,n).cross(RM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Pu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||CM.getNormalMatrix(e),r=this.coplanarPoint(Pu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let NM=0;class Qs extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Xr(),this.name="",this.type="Material",this.blending=Fa,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kx,this.blendDst=Zx,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fu,this.stencilZFail=fu,this.stencilZPass=fu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ki().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wv extends Qs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ss;const ha=new Y,as=new Y,os=new Y,ls=new ze,pa=new ze,Tv=new st,Ho=new Y,ma=new Y,Go=new Y,Rm=new ze,Lu=new ze,Cm=new ze;class PM extends dn{constructor(e=new wv){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new ri;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new bM(n,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new cc(i,3,0,!1)),ss.setAttribute("uv",new cc(i,2,3,!1))}this.geometry=ss,this.material=e,this.center=new ze(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&Qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),Tv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-os.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Vo(Ho.set(-.5,-.5,0),os,a,as,r,s),Vo(ma.set(.5,-.5,0),os,a,as,r,s),Vo(Go.set(.5,.5,0),os,a,as,r,s),Rm.set(0,0),Lu.set(1,0),Cm.set(1,1);let o=e.ray.intersectTriangle(Ho,ma,Go,!1,ha);if(o===null&&(Vo(ma.set(-.5,.5,0),os,a,as,r,s),Lu.set(0,1),o=e.ray.intersectTriangle(Ho,Go,ma,!1,ha),o===null))return;const l=e.ray.origin.distanceTo(ha);l<e.near||l>e.far||n.push({distance:l,point:ha.clone(),uv:Fn.getInterpolation(ha,Ho,ma,Go,Rm,Lu,Cm,new ze),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const n=super.toJSON(e);return n.object.center=this.center.toArray(),n}}function Vo(t,e,n,i,r,s){ls.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(pa.x=s*ls.x-r*ls.y,pa.y=r*ls.x+s*ls.y):pa.copy(ls),t.copy(e),t.x+=pa.x,t.y+=pa.y,t.applyMatrix4(Tv)}const Mi=new Y,Du=new Y,Wo=new Y,Xo=new Y;class Av{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Du.copy(e).add(n).multiplyScalar(.5),Wo.copy(n).sub(e).normalize(),Xo.copy(this.origin).sub(Du);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Wo),o=Xo.dot(this.direction),l=-Xo.dot(Wo),c=Xo.lengthSq(),d=Math.abs(1-a*a);let h,f,m,v;if(d>0)if(h=a*l-o,f=a*o-l,v=s*d,h>=0)if(f>=-v)if(f<=v){const E=1/d;h*=E,f*=E,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Du).addScaledVector(Wo,f),m}intersectSphere(e,n){if(e.radius<0)return null;Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,h=e.x-a.x,f=e.y-a.y,m=e.z-a.z,v=n.x-a.x,E=n.y-a.y,x=n.z-a.z,u=i.x-a.x,p=i.y-a.y,y=i.z-a.z,M=Math.abs(l),R=Math.abs(c),b=Math.abs(d);let g,T,O,N,I,$,ee,L,q,ie,G,X;if(M>=R&&M>=b?(O=l,$=h,q=v,X=u,l>=0?(g=c,T=d,N=f,I=m,ee=E,L=x,ie=p,G=y):(g=d,T=c,N=m,I=f,ee=x,L=E,ie=y,G=p)):R>=b?(O=c,$=f,q=E,X=p,c>=0?(g=d,T=l,N=m,I=h,ee=x,L=v,ie=y,G=u):(g=l,T=d,N=h,I=m,ee=v,L=x,ie=u,G=y)):(O=d,$=m,q=x,X=y,d>=0?(g=l,T=c,N=h,I=f,ee=v,L=E,ie=u,G=p):(g=c,T=l,N=f,I=h,ee=E,L=v,ie=p,G=u)),O===0)return null;const k=g/O,H=T/O,ne=1/O,he=N-k*$,Le=I-H*$,te=ee-k*q,ge=L-H*q,ye=ie-k*X,Ne=G-H*X,ve=ye*ge-Ne*te,Ue=he*Ne-Le*ye,ht=te*Le-ge*he;if(r){if(ve<0||Ue<0||ht<0)return null}else if((ve<0||Ue<0||ht<0)&&(ve>0||Ue>0||ht>0))return null;const Pe=ve+Ue+ht;if(Pe===0)return null;const Ke=ne*(ve*$+Ue*q+ht*X);return(Pe>0?Ke<0:Ke>0)?null:this.at(Ke/Pe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bv extends Qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zr,this.combine=Qx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nm=new st,wr=new Av,jo=new Zs,Pm=new Y,$o=new Y,Yo=new Y,qo=new Y,Iu=new Y,Ko=new Y,Lm=new Y,Zo=new Y;class Oi extends dn{constructor(e=new ri,n=new bv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ko.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Iu.fromBufferAttribute(h,e),a?Ko.addScaledVector(Iu,d):Ko.addScaledVector(Iu.sub(n),d))}n.add(Ko)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(s),wr.copy(e.ray).recast(e.near),!(jo.containsPoint(wr.origin)===!1&&(wr.intersectSphere(jo,Pm)===null||wr.origin.distanceToSquared(Pm)>(e.far-e.near)**2))&&(Nm.copy(s).invert(),wr.copy(e.ray).applyMatrix4(Nm),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,wr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){const x=f[v],u=a[x.materialIndex],p=Math.max(x.start,m.start),y=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let M=p,R=y;M<R;M+=3){const b=o.getX(M),g=o.getX(M+1),T=o.getX(M+2);r=Qo(this,u,e,i,c,d,h,b,g,T),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let x=v,u=E;x<u;x+=3){const p=o.getX(x),y=o.getX(x+1),M=o.getX(x+2);r=Qo(this,a,e,i,c,d,h,p,y,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){const x=f[v],u=a[x.materialIndex],p=Math.max(x.start,m.start),y=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let M=p,R=y;M<R;M+=3){const b=M,g=M+1,T=M+2;r=Qo(this,u,e,i,c,d,h,b,g,T),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let x=v,u=E;x<u;x+=3){const p=x,y=x+1,M=x+2;r=Qo(this,a,e,i,c,d,h,p,y,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function LM(t,e,n,i,r,s,a,o){let l;if(e.side===yn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===kr,o),l===null)return null;Zo.copy(o),Zo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Zo);return c<n.near||c>n.far?null:{distance:c,point:Zo.clone(),object:t}}function Qo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,$o),t.getVertexPosition(l,Yo),t.getVertexPosition(c,qo);const d=LM(t,e,n,i,$o,Yo,qo,Lm);if(d){const h=new Y;Fn.getBarycoord(Lm,$o,Yo,qo,h),r&&(d.uv=Fn.getInterpolatedAttribute(r,o,l,c,h,new ze)),s&&(d.uv1=Fn.getInterpolatedAttribute(s,o,l,c,h,new ze)),a&&(d.normal=Fn.getInterpolatedAttribute(a,o,l,c,h,new Y),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new Y,materialIndex:0};Fn.getNormal($o,Yo,qo,f.normal),d.face=f,d.barycoord=h}return d}class Rv extends rn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Gt,d=Gt,h,f){super(null,a,o,l,c,d,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nd extends An{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const cs=new st,Dm=new st,Jo=[],Im=new jr,DM=new st,ga=new Oi,xa=new Zs;class IM extends Oi{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Nd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,DM)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new jr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,cs),Im.copy(e.boundingBox).applyMatrix4(cs),this.boundingBox.union(Im)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,cs),xa.copy(e.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(xa)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(ga.geometry=this.geometry,ga.material=this.material,ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(i),e.ray.intersectsSphere(xa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,cs),Dm.multiplyMatrices(i,cs),ga.matrixWorld=Dm,ga.raycast(e,Jo);for(let a=0,o=Jo.length;a<o;a++){const l=Jo[a];l.instanceId=s,l.object=this,n.push(l)}Jo.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new Nd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Rv(new Float32Array(r*this.count),r,this.count,Dh,Qn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Tr=new Zs,UM=new ze(.5,.5),el=new Y;class uc{constructor(e=new Ki,n=new Ki,i=new Ki,r=new Ki,s=new Ki,a=new Ki){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Jn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],h=s[5],f=s[6],m=s[7],v=s[8],E=s[9],x=s[10],u=s[11],p=s[12],y=s[13],M=s[14],R=s[15];if(r[0].setComponents(c-a,m-d,u-v,R-p).normalize(),r[1].setComponents(c+a,m+d,u+v,R+p).normalize(),r[2].setComponents(c+o,m+h,u+E,R+y).normalize(),r[3].setComponents(c-o,m-h,u-E,R-y).normalize(),i)r[4].setComponents(l,f,x,M).normalize(),r[5].setComponents(c-l,m-f,u-x,R-M).normalize();else if(r[4].setComponents(c-l,m-f,u-x,R-M).normalize(),n===Jn)r[5].setComponents(c+l,m+f,u+x,R+M).normalize();else if(n===ac)r[5].setComponents(l,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const n=UM.distanceTo(e.center);return Tr.radius=.7071067811865476+n,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Um=new st;class kh{constructor(){this.coordinateSystem=Jn,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];Um.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new uc),i[r].setFromProjectionMatrix(Um,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new uc),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new kh().copy(this)}}class Pd extends Qs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fc=new Y,dc=new Y,Fm=new st,va=new Av,tl=new Zs,Uu=new Y,Om=new Y;class Cv extends dn{constructor(e=new ri,n=new Pd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)fc.fromBufferAttribute(n,r-1),dc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=fc.distanceTo(dc);e.setAttribute("lineDistance",new ni(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(r),tl.radius+=s,e.ray.intersectsSphere(tl)===!1)return;Fm.copy(r).invert(),va.copy(e.ray).applyMatrix4(Fm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const m=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let E=m,x=v-1;E<x;E+=c){const u=d.getX(E),p=d.getX(E+1),y=nl(this,e,va,l,u,p,E);y&&n.push(y)}if(this.isLineLoop){const E=d.getX(v-1),x=d.getX(m),u=nl(this,e,va,l,E,x,v-1);u&&n.push(u)}}else{const m=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let E=m,x=v-1;E<x;E+=c){const u=nl(this,e,va,l,E,E+1,E);u&&n.push(u)}if(this.isLineLoop){const E=nl(this,e,va,l,v-1,m,v-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function nl(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(fc.fromBufferAttribute(o,r),dc.fromBufferAttribute(o,s),n.distanceSqToSegment(fc,dc,Uu,Om)>i)return;Uu.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Uu);if(!(c<e.near||c>e.far))return{distance:c,point:Om.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const km=new Y,Bm=new Y;class FM extends Cv{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)km.fromBufferAttribute(n,r),Bm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+km.distanceTo(Bm);e.setAttribute("lineDistance",new ni(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nv extends rn{constructor(e=[],n=Vs,i,r,s,a,o,l,c,d){super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xs extends rn{constructor(e,n,i=mi,r,s,a,o=Gt,l=Gt,c,d=mr,h=1){if(d!==mr&&d!==rr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Pv extends Xs{constructor(e,n=mi,i=Vs,r,s,a=Gt,o=Gt,l,c=mr){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lv extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class uo extends ri{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ni(c,3)),this.setAttribute("normal",new ni(d,3)),this.setAttribute("uv",new ni(h,2));function v(E,x,u,p,y,M,R,b,g,T,O){const N=M/g,I=R/T,$=M/2,ee=R/2,L=b/2,q=g+1,ie=T+1;let G=0,X=0;const k=new Y;for(let H=0;H<ie;H++){const ne=H*I-ee;for(let he=0;he<q;he++){const Le=he*N-$;k[E]=Le*p,k[x]=ne*y,k[u]=L,c.push(k.x,k.y,k.z),k[E]=0,k[x]=0,k[u]=b>0?1:-1,d.push(k.x,k.y,k.z),h.push(he/g),h.push(1-H/T),G+=1}}for(let H=0;H<T;H++)for(let ne=0;ne<g;ne++){const he=f+ne+q*H,Le=f+ne+q*(H+1),te=f+(ne+1)+q*(H+1),ge=f+(ne+1)+q*H;l.push(he,Le,ge),l.push(Le,te,ge),X+=6}o.addGroup(m,X,O),m+=X,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fo extends ri{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,f=n/l,m=[],v=[],E=[],x=[];for(let u=0;u<d;u++){const p=u*f-a;for(let y=0;y<c;y++){const M=y*h-s;v.push(M,-p,0),E.push(0,0,1),x.push(y/o),x.push(1-u/l)}}for(let u=0;u<l;u++)for(let p=0;p<o;p++){const y=p+c*u,M=p+c*(u+1),R=p+1+c*(u+1),b=p+1+c*u;m.push(y,M,b),m.push(M,R,b)}this.setIndex(m),this.setAttribute("position",new ni(v,3)),this.setAttribute("normal",new ni(E,3)),this.setAttribute("uv",new ni(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.widthSegments,e.heightSegments)}}function js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(zm(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(zm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=js(t[n]);for(const r in i)e[r]=i[r]}return e}function zm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function OM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Dv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const kM={clone:js,merge:cn};var BM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hr extends Qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BM,this.fragmentShader=zM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=OM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(r.value);break;case"v2":this.uniforms[i].value=new ze().fromArray(r.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(r.value);break;case"v4":this.uniforms[i].value=new St().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new st().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class HM extends Hr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class GM extends Qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VM extends Qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const il=new Y,rl=new Ks,ai=new Y;class Iv extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(il,rl,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(il,rl,ai.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(il,rl,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(il,rl,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ji=new Y,Hm=new ze,Gm=new ze;class Zn extends Iv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Cd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(du*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cd*2*Math.atan(Math.tan(du*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,n){return this.getViewBounds(e,Hm,Gm),n.subVectors(Gm,Hm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(du*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class WM extends Iv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const us=-90,fs=1;class Ld extends dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zn(us,fs,e,n);r.layers=this.layers,this.add(r);const s=new Zn(us,fs,e,n);s.layers=this.layers,this.add(s);const a=new Zn(us,fs,e,n);a.layers=this.layers,this.add(a);const o=new Zn(us,fs,e,n);o.layers=this.layers,this.add(o);const l=new Zn(us,fs,e,n);l.layers=this.layers,this.add(l);const c=new Zn(us,fs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=E,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class XM extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Vm(t,e,n,i){const r=jM(i);switch(n){case uv:return t*e;case Dh:return t*e/r.components*r.byteLength;case Ih:return t*e/r.components*r.byteLength;case Br:return t*e*2/r.components*r.byteLength;case Uh:return t*e*2/r.components*r.byteLength;case fv:return t*e*3/r.components*r.byteLength;case fi:return t*e*4/r.components*r.byteLength;case Fh:return t*e*4/r.components*r.byteLength;case Al:case bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rl:case Cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ed:case nd:return Math.max(t,16)*Math.max(e,8)/4;case Jf:case td:return Math.max(t,8)*Math.max(e,8)/2;case id:case rd:case ad:case od:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sd:case nc:case ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case fd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case dd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case hd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case pd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case md:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case gd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case xd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case _d:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Sd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case yd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Md:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ed:case wd:case Td:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ad:case bd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ic:case Rd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jM(t){switch(t){case Un:case av:return{byteLength:1,components:1};case ro:case ov:case gi:return{byteLength:2,components:1};case Ph:case Lh:return{byteLength:2,components:4};case mi:case Nh:case Qn:return{byteLength:4,components:1};case lv:case cv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uv(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function $M(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,d);else{h.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<h.length;m++){const v=h[f],E=h[m];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++f,h[f]=E)}h.length=f+1;for(let m=0,v=h.length;m<v;m++){const E=h[m];t.bufferSubData(c,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var YM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,KM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,i1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o1=`#ifdef USE_IRIDESCENCE
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
#endif`,l1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,x1=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,v1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,_1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E1="gl_FragColor = linearToOutputTexel( gl_FragColor );",w1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,A1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,R1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,N1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I1=`#ifdef USE_GRADIENTMAP
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
}`,U1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,B1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,z1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,X1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Y1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q1=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,K1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oE=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ME=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,EE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,NE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,LE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,UE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FE=`#ifdef USE_SKINNING
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
#endif`,OE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GE=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YE=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,ew=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,nw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ow=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,lw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,uw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,dw=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,gw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,vw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_w=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Sw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Mw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ew=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,ww=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Aw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:YM,alphahash_pars_fragment:qM,alphamap_fragment:KM,alphamap_pars_fragment:ZM,alphatest_fragment:QM,alphatest_pars_fragment:JM,aomap_fragment:e1,aomap_pars_fragment:t1,batching_pars_vertex:n1,batching_vertex:i1,begin_vertex:r1,beginnormal_vertex:s1,bsdfs:a1,iridescence_fragment:o1,bumpmap_pars_fragment:l1,clipping_planes_fragment:c1,clipping_planes_pars_fragment:u1,clipping_planes_pars_vertex:f1,clipping_planes_vertex:d1,color_fragment:h1,color_pars_fragment:p1,color_pars_vertex:m1,color_vertex:g1,common:x1,defaultnormal_vertex:v1,displacementmap_pars_vertex:_1,displacementmap_vertex:S1,emissivemap_fragment:y1,emissivemap_pars_fragment:M1,colorspace_fragment:E1,colorspace_pars_fragment:w1,envmap_fragment:T1,envmap_common_pars_fragment:A1,envmap_pars_fragment:b1,envmap_pars_vertex:R1,envmap_physical_pars_fragment:B1,envmap_vertex:C1,fog_vertex:N1,fog_pars_vertex:P1,fog_fragment:L1,fog_pars_fragment:D1,gradientmap_pars_fragment:I1,lightmap_pars_fragment:U1,lights_lambert_fragment:F1,lights_lambert_pars_fragment:O1,lights_pars_begin:k1,lights_toon_fragment:z1,lights_toon_pars_fragment:H1,lights_phong_fragment:G1,lights_phong_pars_fragment:V1,lights_physical_fragment:W1,lights_physical_pars_fragment:X1,lights_fragment_begin:j1,lights_fragment_maps:$1,lights_fragment_end:Y1,lightprobes_pars_fragment:q1,logdepthbuf_fragment:K1,logdepthbuf_pars_fragment:Z1,logdepthbuf_pars_vertex:Q1,logdepthbuf_vertex:J1,map_fragment:eE,map_pars_fragment:tE,map_particle_fragment:nE,map_particle_pars_fragment:iE,metalnessmap_fragment:rE,metalnessmap_pars_fragment:sE,morphinstance_vertex:aE,morphcolor_vertex:oE,morphnormal_vertex:lE,morphtarget_pars_vertex:cE,morphtarget_vertex:uE,normal_fragment_begin:fE,normal_fragment_maps:dE,normal_pars_fragment:hE,normal_pars_vertex:pE,normal_vertex:mE,normalmap_pars_fragment:gE,clearcoat_normal_fragment_begin:xE,clearcoat_normal_fragment_maps:vE,clearcoat_pars_fragment:_E,iridescence_pars_fragment:SE,opaque_fragment:yE,packing:ME,premultiplied_alpha_fragment:EE,project_vertex:wE,dithering_fragment:TE,dithering_pars_fragment:AE,roughnessmap_fragment:bE,roughnessmap_pars_fragment:RE,shadowmap_pars_fragment:CE,shadowmap_pars_vertex:NE,shadowmap_vertex:PE,shadowmask_pars_fragment:LE,skinbase_vertex:DE,skinning_pars_vertex:IE,skinning_vertex:UE,skinnormal_vertex:FE,specularmap_fragment:OE,specularmap_pars_fragment:kE,tonemapping_fragment:BE,tonemapping_pars_fragment:zE,transmission_fragment:HE,transmission_pars_fragment:GE,uv_pars_fragment:VE,uv_pars_vertex:WE,uv_vertex:XE,worldpos_vertex:jE,background_vert:$E,background_frag:YE,backgroundCube_vert:qE,backgroundCube_frag:KE,cube_vert:ZE,cube_frag:QE,depth_vert:JE,depth_frag:ew,distance_vert:tw,distance_frag:nw,equirect_vert:iw,equirect_frag:rw,linedashed_vert:sw,linedashed_frag:aw,meshbasic_vert:ow,meshbasic_frag:lw,meshlambert_vert:cw,meshlambert_frag:uw,meshmatcap_vert:fw,meshmatcap_frag:dw,meshnormal_vert:hw,meshnormal_frag:pw,meshphong_vert:mw,meshphong_frag:gw,meshphysical_vert:xw,meshphysical_frag:vw,meshtoon_vert:_w,meshtoon_frag:Sw,points_vert:yw,points_frag:Mw,shadow_vert:Ew,shadow_frag:ww,sprite_vert:Tw,sprite_frag:Aw},Se={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ci={basic:{uniforms:cn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:cn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:cn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:cn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:cn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:cn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:cn([Se.points,Se.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:cn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:cn([Se.common,Se.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:cn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:cn([Se.sprite,Se.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:cn([Se.common,Se.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:cn([Se.lights,Se.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ci.physical={uniforms:cn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const sl={r:0,b:0,g:0},bw=new st,Fv=new Oe;Fv.set(-1,0,0,0,1,0,0,0,1);function Rw(t,e,n,i,r,s){const a=new Xe(0);let o=r===!0?0:1,l,c,d=null,h=0,f=null;function m(p){let y=p.isScene===!0?p.background:null;if(y&&y.isTexture){const M=p.backgroundBlurriness>0;y=e.get(y,M)}return y}function v(p){let y=!1;const M=m(p);M===null?x(a,o):M&&M.isColor&&(x(M,1),y=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(p,y){const M=m(y);M&&M.isCubeTexture?(c===void 0&&(c=new Oi(new uo(1,1,1),new Hr({name:"BackgroundCubeMaterial",uniforms:js(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,b,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bw.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fv),c.material.toneMapped=je.getTransfer(M.colorSpace)!==tt,(d!==M||h!==M.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,f=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Oi(new fo(2,2),new Hr({name:"BackgroundMaterial",uniforms:js(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=je.getTransfer(M.colorSpace)!==tt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,d=M,h=M.version,f=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,y){p.getRGB(sl,Dv(t)),n.buffers.color.setClear(sl.r,sl.g,sl.b,y,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(p,y=1){a.set(p),o=y,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,x(a,o)},render:v,addToRenderList:E,dispose:u}}function Cw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(I,$,ee,L,q){let ie=!1;const G=h(I,L,ee,$);s!==G&&(s=G,c(s.object)),ie=m(I,L,ee,q),ie&&v(I,L,ee,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,M(I,$,ee,L),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function d(I){return t.deleteVertexArray(I)}function h(I,$,ee,L){const q=L.wireframe===!0;let ie=i[$.id];ie===void 0&&(ie={},i[$.id]=ie);const G=I.isInstancedMesh===!0?I.id:0;let X=ie[G];X===void 0&&(X={},ie[G]=X);let k=X[ee.id];k===void 0&&(k={},X[ee.id]=k);let H=k[q];return H===void 0&&(H=f(l()),k[q]=H),H}function f(I){const $=[],ee=[],L=[];for(let q=0;q<n;q++)$[q]=0,ee[q]=0,L[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ee,attributeDivisors:L,object:I,attributes:{},index:null}}function m(I,$,ee,L){const q=s.attributes,ie=$.attributes;let G=0;const X=ee.getAttributes();for(const k in X)if(X[k].location>=0){const ne=q[k];let he=ie[k];if(he===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(he=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(he=I.instanceColor)),ne===void 0||ne.attribute!==he||he&&ne.data!==he.data)return!0;G++}return s.attributesNum!==G||s.index!==L}function v(I,$,ee,L){const q={},ie=$.attributes;let G=0;const X=ee.getAttributes();for(const k in X)if(X[k].location>=0){let ne=ie[k];ne===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));const he={};he.attribute=ne,ne&&ne.data&&(he.data=ne.data),q[k]=he,G++}s.attributes=q,s.attributesNum=G,s.index=L}function E(){const I=s.newAttributes;for(let $=0,ee=I.length;$<ee;$++)I[$]=0}function x(I){u(I,0)}function u(I,$){const ee=s.newAttributes,L=s.enabledAttributes,q=s.attributeDivisors;ee[I]=1,L[I]===0&&(t.enableVertexAttribArray(I),L[I]=1),q[I]!==$&&(t.vertexAttribDivisor(I,$),q[I]=$)}function p(){const I=s.newAttributes,$=s.enabledAttributes;for(let ee=0,L=$.length;ee<L;ee++)$[ee]!==I[ee]&&(t.disableVertexAttribArray(ee),$[ee]=0)}function y(I,$,ee,L,q,ie,G){G===!0?t.vertexAttribIPointer(I,$,ee,q,ie):t.vertexAttribPointer(I,$,ee,L,q,ie)}function M(I,$,ee,L){E();const q=L.attributes,ie=ee.getAttributes(),G=$.defaultAttributeValues;for(const X in ie){const k=ie[X];if(k.location>=0){let H=q[X];if(H===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(H=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(H=I.instanceColor)),H!==void 0){const ne=H.normalized,he=H.itemSize,Le=e.get(H);if(Le===void 0)continue;const te=Le.buffer,ge=Le.type,ye=Le.bytesPerElement,Ne=ge===t.INT||ge===t.UNSIGNED_INT||H.gpuType===Nh;if(H.isInterleavedBufferAttribute){const ve=H.data,Ue=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,ht=H.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Pe=0;Pe<k.locationSize;Pe++)u(k.location+Pe,ve.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Pe=0;Pe<k.locationSize;Pe++)x(k.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,te);for(let Pe=0;Pe<k.locationSize;Pe++)y(k.location+Pe,he/k.locationSize,ge,ne,Ue*ye,(ht+he/k.locationSize*Pe)*ye,Ne)}else{if(H.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)u(k.location+ve,H.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ve=0;ve<k.locationSize;ve++)x(k.location+ve);t.bindBuffer(t.ARRAY_BUFFER,te);for(let ve=0;ve<k.locationSize;ve++)y(k.location+ve,he/k.locationSize,ge,ne,he*ye,he/k.locationSize*ve*ye,Ne)}}else if(G!==void 0){const ne=G[X];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(k.location,ne);break;case 3:t.vertexAttrib3fv(k.location,ne);break;case 4:t.vertexAttrib4fv(k.location,ne);break;default:t.vertexAttrib1fv(k.location,ne)}}}}p()}function R(){O();for(const I in i){const $=i[I];for(const ee in $){const L=$[ee];for(const q in L){const ie=L[q];for(const G in ie)d(ie[G].object),delete ie[G];delete L[q]}}delete i[I]}}function b(I){if(i[I.id]===void 0)return;const $=i[I.id];for(const ee in $){const L=$[ee];for(const q in L){const ie=L[q];for(const G in ie)d(ie[G].object),delete ie[G];delete L[q]}}delete i[I.id]}function g(I){for(const $ in i){const ee=i[$];for(const L in ee){const q=ee[L];if(q[I.id]===void 0)continue;const ie=q[I.id];for(const G in ie)d(ie[G].object),delete ie[G];delete q[I.id]}}}function T(I){for(const $ in i){const ee=i[$],L=I.isInstancedMesh===!0?I.id:0,q=ee[L];if(q!==void 0){for(const ie in q){const G=q[ie];for(const X in G)d(G[X].object),delete G[X];delete q[ie]}delete ee[L],Object.keys(ee).length===0&&delete i[$]}}}function O(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:N,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfObject:T,releaseStatesOfProgram:g,initAttributes:E,enableAttribute:x,disableUnusedAttributes:p}}function Nw(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let f=0;for(let m=0;m<d;m++)f+=c[m];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Pw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(g){return!(g!==fi&&i.convert(g)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const T=g===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Un&&g!==Qn&&!T&&i.convert(g)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Ie("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.logarithmicDepthBuffer===!0&&h===!1;n.reversedDepthBuffer===!0&&h===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&h===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:x,maxAttributes:u,maxVertexUniforms:p,maxVaryings:y,maxFragmentUniforms:M,maxSamples:R,samples:b}}function Lw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ki,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const v=h.clippingPlanes,E=h.clipIntersection,x=h.clipShadows,u=t.get(h);if(!r||v===null||v.length===0||s&&!x)s?d(null):c();else{const p=s?0:i,y=p*4;let M=u.clippingState||null;l.value=M,M=d(v,f,y,m);for(let R=0;R!==y;++R)M[R]=n[R];u.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,v){const E=h!==null?h.length:0;let x=null;if(E!==0){if(x=l.value,v!==!0||x===null){const u=m+E*4,p=f.matrixWorldInverse;o.getNormalMatrix(p),(x===null||x.length<u)&&(x=new Float32Array(u));for(let y=0,M=m;y!==E;++y,M+=4)a.copy(h[y]).applyMatrix4(p,o),a.normal.toArray(x,M),x[M+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}class Bh extends pi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new uo(5,5,5),s=new Hr({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Is});s.uniforms.tEquirect.value=n;const a=new Oi(r,s),o=n.minFilter;return n.minFilter===ir&&(n.minFilter=xn),new Ld(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Wm=256,Dw=3,Iw=20,Ov=256,kv=16,Uw=3,Fw=new Y,Ow=new Xe;class hc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ld(1,10,null),this._boxMesh=new Oi(new uo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=Fw}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),d=this._getSourceTarget(!0);n>0&&(d.texture.mipmapsAutoUpdate=!1);const h=l.autoClear,f=l.autoClearColor,m=l.autoClearDepth,v=l.autoClearStencil,E=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,E===null&&(e.background=l.getClearColor(Ow));const x=new Ld(i,r,d);return x.position.copy(o),x.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=m,l.autoClearStencil=v,e.background=E,n>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Wm,cM(e))}_fromTexture(e,n){e.mapping===Vs||e.mapping===io?this._setSize(e.image.length===0?Wm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=Xm(e,!1,!1),i=Math.log2(e)-Dw;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Xm(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Vs||e.mapping===io?(this._cubemapMaterial===null&&(this._cubemapMaterial=$m()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=jm()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=kw(),this._integrationMaterial=Bw());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/kv);for(let a=0;a<=i;a++){const o=hc.lodToRoughness(a,i);if(a>i-Uw)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(Ov*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=zw());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function Xm(t,e,n){return new Bh(t,{minFilter:ir,generateMipmaps:e,type:gi,colorSpace:rc,depthBuffer:n})}function ho(t,e,n){return new Hr({name:t,uniforms:e,vertexShader:Be.cube_vert,fragmentShader:n,side:yn,blending:Is,depthTest:!1,depthWrite:!1})}function kw(){return ho("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ov}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Bw(){return ho("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:kv}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function zw(){return ho("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Iw}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function jm(){return ho("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function $m(){return ho("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Hw(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===lu||m===cu)if(e.has(f)){const v=e.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const E=new Bh(v.height);return E.fromEquirectangularTexture(t,f),e.set(f,E),f.addEventListener("dispose",c),o(E.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const m=f.mapping,v=m===lu||m===cu,E=m===Vs||m===io;if(v||E){let x=n.get(f);const u=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return i===null&&(i=new hc(t)),x=v?i.fromEquirectangular(f,x):i.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),x.texture;if(x!==void 0)return x.texture;{const p=f.image;return v&&p&&p.height>0||E&&p&&l(p)?(i===null&&(i=new hc(t)),x=v?i.fromEquirectangular(f):i.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),f.addEventListener("dispose",d),x.texture):null}}}return f}function o(f,m){return m===lu?f.mapping=Vs:m===cu&&(f.mapping=io),f}function l(f){let m=0;const v=6;for(let E=0;E<v;E++)f[E]!==void 0&&m++;return m===v}function c(f){const m=f.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function d(f){const m=f.target;m.removeEventListener("dispose",d);const v=n.get(m);v!==void 0&&(n.delete(m),v.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Gw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Nl("WebGLRenderer: "+i+" extension not supported."),r}}}function Vw(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(v=>delete r[v]);function o(v){l(v.target)}function l(v){v.index!==null&&e.remove(v.index);for(const x in v.attributes)e.remove(v.attributes[x]);v.removeEventListener("dispose",o),delete r[v.id],a.unregister(v);const E=s.get(v);E&&(e.remove(E),s.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function c(v,E){return r[E.id]!==void 0||(E.addEventListener("dispose",o),r[E.id]=new WeakRef(E),a.register(E,E.id,E),n.memory.geometries++),E}function d(v){const E=v.attributes;for(const x in E)e.update(E[x],t.ARRAY_BUFFER)}function h(v){const E=v.index,x=v.attributes.position;let u=0;if(x===void 0)return;const p=E!==null?E.array.length:x.array.length/3-1,y=x.count>=65535?Ev:Mv,M=new y(Math.ceil(p/3)*6,1),R=M.array;if(E!==null){const g=E.array;u=E.version;for(let T=0,O=0;T<p;T+=3){const N=g[T+0],I=g[T+1],$=g[T+2];R[O++]=N,R[O++]=I,R[O++]=I,R[O++]=$,R[O++]=$,R[O++]=N}}else{u=x.version;for(let g=0,T=0;g<p;g+=3){const O=g+0,N=g+1,I=g+2;R[T++]=O,R[T++]=N,R[T++]=N,R[T++]=I,R[T++]=I,R[T++]=O}}M.version=u;const b=s.get(v);b&&e.remove(b),s.set(v,M)}function f(v){const E=s.get(v);if(E){const x=v.index;x!==null&&E.version<x.version&&h(v)}else h(v);return s.get(v)}function m(){for(const v in r){const E=r[v].deref();E!==void 0&&l(E)}}return{get:c,update:d,getWireframeAttribute:f,dispose:m}}function Ww(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){t.drawElements(i,f,s,h*a),n.update(f,i,1)}function c(h,f,m){m!==0&&(t.drawElementsInstanced(i,f,s,h*a,m),n.update(f,i,m))}function d(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,m);let E=0;for(let x=0;x<m;x++)E+=f[x];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Xw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jw(t,e,n){const i=new WeakMap,r=new St;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let N=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var m=N;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),E===!0&&(M=2),x===!0&&(M=3);let R=o.attributes.position.count*M,b=1;R>e.maxTextureSize&&(b=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const g=new Float32Array(R*b*4*h),T=new _v(g,R,b,h);T.type=Qn,T.needsUpdate=!0;const O=M*4;for(let I=0;I<h;I++){const $=u[I],ee=p[I],L=y[I],q=R*b*4*I;for(let ie=0;ie<$.count;ie++){const G=ie*O;v===!0&&(r.fromBufferAttribute($,ie),g[q+G+0]=r.x,g[q+G+1]=r.y,g[q+G+2]=r.z,g[q+G+3]=0),E===!0&&(r.fromBufferAttribute(ee,ie),g[q+G+4]=r.x,g[q+G+5]=r.y,g[q+G+6]=r.z,g[q+G+7]=0),x===!0&&(r.fromBufferAttribute(L,ie),g[q+G+8]=r.x,g[q+G+9]=r.y,g[q+G+10]=r.z,g[q+G+11]=L.itemSize===4?r.w:1)}}f={count:h,texture:T,size:new ze(R,b)},i.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let x=0;x<c.length;x++)v+=c[x];const E=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function $w(t,e,n,i,r){let s=new WeakMap;function a(c){const d=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==d&&(e.update(f),s.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==d&&(m.update(),s.set(m,d))}return f}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:o}}const Yw={[Jx]:"LINEAR_TONE_MAPPING",[Ch]:"REINHARD_TONE_MAPPING",[ev]:"CINEON_TONE_MAPPING",[tv]:"ACES_FILMIC_TONE_MAPPING",[iv]:"AGX_TONE_MAPPING",[rv]:"NEUTRAL_TONE_MAPPING",[nv]:"CUSTOM_TONE_MAPPING"};function qw(t,e,n,i,r,s){const a=new pi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const d=new ri;d.setAttribute("position",new ni([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ni([0,2,0,0,2,0],2));const h=new HM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Oi(d,h),m=new WM(-1,1,1,-1,0,1);let v=null,E=null,x=!1,u,p=null,y=[],M=!1;this.setSize=function(R,b){a.setSize(R,b),o!==null&&o.setSize(R,b),l!==null&&l.setSize(R,b);for(let g=0;g<y.length;g++){const T=y[g];T.setSize&&T.setSize(R,b)}},this.setEffects=function(R){y=R,M=y.length>0&&y[0].isRenderPass===!0;const b=a.width,g=a.height;y.length>0&&o===null&&(o=new pi(b,g,{type:gi,depthBuffer:!1,stencilBuffer:!1}),l=new pi(b,g,{type:gi,depthBuffer:!1,stencilBuffer:!1}));const T=r===!0&&y.some(O=>O.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&c===null&&(c=new Xs(b,g),s===!0&&(c.format=rr,c.type=Ws)),a.dispose(),a.depthTexture=T?c:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let O=0;O<y.length;O++){const N=y[O];N.setSize&&N.setSize(b,g),T&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(R,b){if(x||R.toneMapping===Pi&&y.length===0)return!1;if(p=b,b!==null){const g=b.width,T=b.height;(a.width!==g||a.height!==T)&&this.setSize(g,T)}return M===!1&&R.setRenderTarget(a),u=R.toneMapping,R.toneMapping=Pi,!0},this.hasRenderPass=function(){return M},this.end=function(R,b){R.toneMapping=u,x=!0;let g=a,T=o;for(let O=0;O<y.length;O++){const N=y[O];N.enabled!==!1&&(N.render(R,T,g,b),N.needsSwap!==!1&&(g=T,T=T===o?l:o))}if(v!==R.outputColorSpace||E!==R.toneMapping){v=R.outputColorSpace,E=R.toneMapping,h.defines={},je.getTransfer(v)===tt&&(h.defines.SRGB_TRANSFER="");const O=Yw[E];O&&(h.defines[O]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=g.texture,R.setRenderTarget(p),R.render(f,m),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),h.dispose()}}const Bv=new rn,zv=new Xs(1,1),Hv=new Pv(1),Gv=new _v,Vv=new mM,Wv=new Nv,Ym=[],qm=[],Km=new Float32Array(16),Zm=new Float32Array(9),Qm=new Float32Array(4);function Js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ym[r];if(s===void 0&&(s=new Float32Array(r),Ym[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Lc(t,e){let n=qm[e];n===void 0&&(n=new Int32Array(e),qm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Kw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function Qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function Jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function eT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Qm.set(i),t.uniformMatrix2fv(this.addr,!1,Qm),Lt(n,i)}}function tT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Zm.set(i),t.uniformMatrix3fv(this.addr,!1,Zm),Lt(n,i)}}function nT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Km.set(i),t.uniformMatrix4fv(this.addr,!1,Km),Lt(n,i)}}function iT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function oT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function Dc(t){return t.version===0&&(t.compareFunction=pv,t.needsUpdate=!0),t}function fT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=Dc(zv):s=Bv,n.setTexture2D(e||s,r)}function dT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Vv,r)}function hT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=Dc(Hv):s=Wv,n.setTextureCube(e||s,r)}function pT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Gv,r)}function mT(t){switch(t){case 5126:return Kw;case 35664:return Zw;case 35665:return Qw;case 35666:return Jw;case 35674:return eT;case 35675:return tT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return rT;case 35668:case 35672:return sT;case 35669:case 35673:return aT;case 5125:return oT;case 36294:return lT;case 36295:return cT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return hT;case 36289:case 36303:case 36311:case 36292:return pT}}function gT(t,e){t.uniform1fv(this.addr,e)}function xT(t,e){const n=Js(e,this.size,2);t.uniform2fv(this.addr,n)}function vT(t,e){const n=Js(e,this.size,3);t.uniform3fv(this.addr,n)}function _T(t,e){const n=Js(e,this.size,4);t.uniform4fv(this.addr,n)}function ST(t,e){const n=Js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function yT(t,e){const n=Js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function MT(t,e){const n=Js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ET(t,e){t.uniform1iv(this.addr,e)}function wT(t,e){t.uniform2iv(this.addr,e)}function TT(t,e){t.uniform3iv(this.addr,e)}function AT(t,e){t.uniform4iv(this.addr,e)}function bT(t,e){t.uniform1uiv(this.addr,e)}function RT(t,e){t.uniform2uiv(this.addr,e)}function CT(t,e){t.uniform3uiv(this.addr,e)}function NT(t,e){t.uniform4uiv(this.addr,e)}function PT(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Dc(zv):a=Bv;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function LT(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Vv,s[a])}function DT(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=Dc(Hv):a=Wv;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function IT(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Gv,s[a])}function UT(t){switch(t){case 5126:return gT;case 35664:return xT;case 35665:return vT;case 35666:return _T;case 35674:return ST;case 35675:return yT;case 35676:return MT;case 5124:case 35670:return ET;case 35667:case 35671:return wT;case 35668:case 35672:return TT;case 35669:case 35673:return AT;case 5125:return bT;case 36294:return RT;case 36295:return CT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return IT}}class FT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=mT(n.type)}}class OT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=UT(n.type)}}class kT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Fu=/(\w+)(\])?(\[|\.)?/g;function Jm(t,e){t.seq.push(e),t.map[e.id]=e}function BT(t,e,n){const i=t.name,r=i.length;for(Fu.lastIndex=0;;){const s=Fu.exec(i),a=Fu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Jm(n,c===void 0?new FT(o,t,e):new OT(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new kT(o),Jm(n,h)),n=h}}}class Pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);BT(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function eg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const zT=37297;let HT=0;function GT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const tg=new Oe;function VT(t){je._getMatrix(tg,je.workingColorSpace,t);const e=`mat3( ${tg.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case sc:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ng(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+GT(t.getShaderSource(e),o)}else return s}function WT(t,e){const n=VT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const XT={[Jx]:"Linear",[Ch]:"Reinhard",[ev]:"Cineon",[tv]:"ACESFilmic",[iv]:"AgX",[rv]:"Neutral",[nv]:"Custom"};function jT(t,e){const n=XT[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const al=new Y;function $T(){je.getLuminanceCoefficients(al);const t=al.x.toFixed(4),e=al.y.toFixed(4),n=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function qT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function KT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Aa(t){return t!==""}function ig(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function rg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dd(t){return t.replace(ZT,QT)}function QT(t,e){const n=Be[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Dd(n)}const JT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sg(t){return t.replace(JT,eA)}function eA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ag(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const tA={[Tl]:"SHADOWMAP_TYPE_PCF",[wa]:"SHADOWMAP_TYPE_VSM"};function nA(t){return tA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iA={[io]:"ENVMAP_MODE_REFRACTION"};function rA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":iA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sA={[Qx]:"ENVMAP_BLENDING_MULTIPLY",[$y]:"ENVMAP_BLENDING_MIX",[Yy]:"ENVMAP_BLENDING_ADD"};function aA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":sA[t.combine]||"ENVMAP_BLENDING_NONE"}function oA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=nA(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=rA(n),h=aA(n),f=YT(n),m=qT(s),v=r.createProgram();let E,x,u=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(E=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Aa).join(`
`),E.length>0&&(E+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Aa).join(`
`),x.length>0&&(x+=`
`)):(E=[ag(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),x=[ag(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?Be.tonemapping_pars_fragment:"",n.toneMapping!==Pi?jT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,WT("linearToOutputTexel",n.outputColorSpace),$T(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Aa).join(`
`)),a=Dd(a),a=ig(a,n),a=rg(a,n),o=Dd(o),o=ig(o,n),o=rg(o,n),a=sg(a),o=sg(o),n.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,E=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,x=["#define varying in",n.glslVersion===pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const p=u+E+a,y=u+x+o,M=eg(r,r.VERTEX_SHADER,p),R=eg(r,r.FRAGMENT_SHADER,y);r.attachShader(v,M),r.attachShader(v,R),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(N){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(v)||"",$=r.getShaderInfoLog(M)||"",ee=r.getShaderInfoLog(R)||"",L=I.trim(),q=$.trim(),ie=ee.trim();let G=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,M,R);else{const k=ng(r,M,"vertex"),H=ng(r,R,"fragment");Qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+L+`
`+k+`
`+H)}else L!==""?Ie("WebGLProgram: Program Info Log:",L):(q===""||ie==="")&&(X=!1);X&&(N.diagnostics={runnable:G,programLog:L,vertexShader:{log:q,prefix:E},fragmentShader:{log:ie,prefix:x}})}r.deleteShader(M),r.deleteShader(R),g=new Pl(r,v),T=KT(r,v)}let g;this.getUniforms=function(){return g===void 0&&b(this),g};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(v,zT)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=HT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=R,this}let lA=0;class cA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new uA(e),n.set(e,i)),i}}class uA{constructor(e){this.id=lA++,this.code=e,this.usedTimes=0}}function fA(t){return t===Br||t===nc||t===ic}function dA(t,e,n,i,r,s){const a=new Sv,o=new cA,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return l.add(g),g===0?"uv":`uv${g}`}function v(g,T,O,N,I,$){const ee=N.fog,L=I.geometry,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?N.environment:null,ie=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,G=e.get(g.envMap||q,ie),X=f[g.type];let k=i.precision;g.precision!==null&&(k=i.getMaxPrecision(g.precision),k!==g.precision&&Ie("WebGLProgram.getParameters:",g.precision,"not supported, using",k,"instead."));const H=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ne=H!==void 0?H.length:0;let he=0;L.morphAttributes.position!==void 0&&(he=1),L.morphAttributes.normal!==void 0&&(he=2),L.morphAttributes.color!==void 0&&(he=3);let Le,te,ge,ye;if(X){const _e=ci[X];Le=_e.vertexShader,te=_e.fragmentShader}else{Le=g.vertexShader,te=g.fragmentShader;const _e=o.getVertexShaderStage(g),et=o.getFragmentShaderStage(g);o.update(g,_e,et),ge=_e.id,ye=et.id}const Ne=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),Ue=I.isInstancedMesh===!0,ht=I.isBatchedMesh===!0,Pe=!!g.map,Ke=!!g.matcap,Ze=!!G,He=Ze&&G.isPMREMTexture===!0,Rt=!!g.aoMap,yt=!!g.lightMap,jt=!!g.bumpMap&&g.wireframe===!1,it=!!g.normalMap,an=!!g.displacementMap,Mt=!!g.emissiveMap,kt=!!g.metalnessMap,$t=!!g.roughnessMap,Yt=g.anisotropy>0,F=g.clearcoat>0,qt=g.diffuseRoughness>0,at=g.dispersion>0,ot=g.retroreflectivity>0,xe=g.iridescence>0,vt=g.sheen>0,U=g.transmission>0,fe=Yt&&!!g.anisotropyMap,A=F&&!!g.clearcoatMap,_=F&&!!g.clearcoatNormalMap,D=F&&!!g.clearcoatRoughnessMap,re=qt&&!!g.diffuseRoughnessMap,J=xe&&!!g.iridescenceMap,se=xe&&!!g.iridescenceThicknessMap,Q=vt&&!!g.sheenColorMap,V=vt&&!!g.sheenRoughnessMap,B=!!g.specularMap,ae=!!g.specularColorMap,C=!!g.specularIntensityMap,K=U&&!!g.transmissionMap,z=U&&!!g.thicknessMap,le=!!g.gradientMap,oe=!!g.alphaMap,ue=g.alphaTest>0,Ee=!!g.alphaHash,De=!!g.extensions;let ce=Pi;g.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(ce=t.toneMapping);const Te=He?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Fe={shaderID:X,shaderType:g.type,shaderName:g.name,vertexShader:Le,fragmentShader:te,defines:g.defines,customVertexShaderID:ge,customFragmentShaderID:ye,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:k,batching:ht,batchingColor:ht&&I._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&I.instanceColor!==null,instancingMorph:Ue&&I.morphTexture!==null,outputColorSpace:Ne===null?t.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Pe,matcap:Ke,envMap:Ze,envMapMode:Ze&&G.mapping,envMapPMREM:He,envMapMaxLod:He?Te.length-1:null,envMapSize:He?Te[0].width:null,aoMap:Rt,lightMap:yt,bumpMap:jt,normalMap:it,displacementMap:an,emissiveMap:Mt,normalMapObjectSpace:it&&g.normalMapType===Zy,normalMapTangentSpace:it&&g.normalMapType===hm,packedNormalMap:it&&g.normalMapType===hm&&fA(g.normalMap.format),metalnessMap:kt,roughnessMap:$t,anisotropy:Yt,anisotropyMap:fe,clearcoat:F,clearcoatMap:A,clearcoatNormalMap:_,clearcoatRoughnessMap:D,diffuseRoughness:qt,diffuseRoughnessMap:re,dispersion:at,retroreflection:ot,iridescence:xe,iridescenceMap:J,iridescenceThicknessMap:se,sheen:vt,sheenColorMap:Q,sheenRoughnessMap:V,specularMap:B,specularColorMap:ae,specularIntensityMap:C,transmission:U,transmissionMap:K,thicknessMap:z,gradientMap:le,opaque:g.transparent===!1&&g.blending===Fa&&g.alphaToCoverage===!1,alphaMap:oe,alphaTest:ue,alphaHash:Ee,combine:g.combine,mapUv:Pe&&m(g.map.channel),aoMapUv:Rt&&m(g.aoMap.channel),lightMapUv:yt&&m(g.lightMap.channel),bumpMapUv:jt&&m(g.bumpMap.channel),normalMapUv:it&&m(g.normalMap.channel),displacementMapUv:an&&m(g.displacementMap.channel),emissiveMapUv:Mt&&m(g.emissiveMap.channel),metalnessMapUv:kt&&m(g.metalnessMap.channel),roughnessMapUv:$t&&m(g.roughnessMap.channel),anisotropyMapUv:fe&&m(g.anisotropyMap.channel),clearcoatMapUv:A&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:_&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:D&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:J&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:se&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:V&&m(g.sheenRoughnessMap.channel),specularMapUv:B&&m(g.specularMap.channel),specularColorMapUv:ae&&m(g.specularColorMap.channel),specularIntensityMapUv:C&&m(g.specularIntensityMap.channel),transmissionMapUv:K&&m(g.transmissionMap.channel),thicknessMapUv:z&&m(g.thicknessMap.channel),alphaMapUv:oe&&m(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(it||Yt),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Pe||oe),fog:!!ee,useFog:g.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&it===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ve,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:he,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:$.filter(_e=>_e.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:ce,decodeVideoTexture:Pe&&g.map.isVideoTexture===!0&&je.getTransfer(g.map.colorSpace)===tt,decodeVideoTextureEmissive:Mt&&g.emissiveMap.isVideoTexture===!0&&je.getTransfer(g.emissiveMap.colorSpace)===tt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ai,flipSided:g.side===yn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:De&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&g.extensions.multiDraw===!0||ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function E(g){const T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(const O in g.defines)T.push(O),T.push(g.defines[O]);return g.isRawShaderMaterial===!1&&(x(T,g),u(T,g),T.push(t.outputColorSpace)),T.push(g.customProgramCacheKey),T.join()}function x(g,T){g.push(T.precision),g.push(T.outputColorSpace),g.push(T.envMapMode),g.push(T.envMapPMREM),g.push(T.envMapMaxLod),g.push(T.envMapSize),g.push(T.mapUv),g.push(T.alphaMapUv),g.push(T.lightMapUv),g.push(T.aoMapUv),g.push(T.bumpMapUv),g.push(T.normalMapUv),g.push(T.displacementMapUv),g.push(T.emissiveMapUv),g.push(T.metalnessMapUv),g.push(T.roughnessMapUv),g.push(T.anisotropyMapUv),g.push(T.clearcoatMapUv),g.push(T.clearcoatNormalMapUv),g.push(T.clearcoatRoughnessMapUv),g.push(T.diffuseRoughnessMapUv),g.push(T.iridescenceMapUv),g.push(T.iridescenceThicknessMapUv),g.push(T.sheenColorMapUv),g.push(T.sheenRoughnessMapUv),g.push(T.specularMapUv),g.push(T.specularColorMapUv),g.push(T.specularIntensityMapUv),g.push(T.transmissionMapUv),g.push(T.thicknessMapUv),g.push(T.combine),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.numSunLights),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numSunLightShadows),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.numLightProbes),g.push(T.numLightProbeGrids),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function u(g,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function p(g){const T=f[g.type];let O;if(T){const N=ci[T];O=kM.clone(N.uniforms)}else O=g.uniforms;return O}function y(g,T){let O=d.get(T);return O!==void 0?++O.usedTimes:(O=new oA(t,T,g,r),c.push(O),d.set(T,O)),O}function M(g){if(--g.usedTimes===0){const T=c.indexOf(g);c[T]=c[c.length-1],c.pop(),d.delete(g.cacheKey),g.destroy()}}function R(g){o.remove(g)}function b(){o.dispose()}return{getParameters:v,getProgramCacheKey:E,getUniforms:p,acquireProgram:y,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:b}}function hA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function pA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function og(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function lg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,v,E,x,u){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:m,material:v,materialVariant:a(f),groupOrder:E,renderOrder:f.renderOrder,z:x,group:u},t[e]=p):(p.id=f.id,p.object=f,p.geometry=m,p.material=v,p.materialVariant=a(f),p.groupOrder=E,p.renderOrder=f.renderOrder,p.z=x,p.group=u),e++,p}function l(f,m,v,E,x,u,p){p.reversedDepth===!0&&(x=-x);const y=o(f,m,v,E,x,u);v.transmission>0?i.push(y):v.transparent===!0?r.push(y):n.push(y)}function c(f,m,v,E,x,u){const p=o(f,m,v,E,x,u);v.transmission>0?i.unshift(p):v.transparent===!0?r.unshift(p):n.unshift(p)}function d(f,m){n.length>1&&n.sort(f||pA),i.length>1&&i.sort(m||og),r.length>1&&r.sort(m||og)}function h(){for(let f=e,m=t.length;f<m;f++){const v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:d}}function mA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new lg,t.set(i,[a])):r>=s.length?(a=new lg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function gA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new Y,color:new Xe};break;case"SpotLight":n={position:new Y,direction:new Y,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function xA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let vA=0;function _A(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function SA(t){const e=new gA,n=xA(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new st,a=new st;function o(c){let d=0,h=0,f=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let m=0,v=0,E=0,x=0,u=0,p=0,y=0,M=0,R=0,b=0,g=0,T=0,O=0,N=0;c.sort(_A);for(let $=0,ee=c.length;$<ee;$++){const L=c[$],q=L.color,ie=L.intensity,G=L.distance;let X=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Br?X=L.shadow.map.texture:X=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=q.r*ie,h+=q.g*ie,f+=q.b*ie;else if(L.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(L.sh.coefficients[k],ie);N++}else if(L.isSunLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,ne=n.get(L);ne.shadowIntensity=H.intensity,ne.shadowBias=H.bias,ne.shadowNormalBias=H.normalBias,ne.shadowRadius=H.radius,ne.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),i.sunShadow[v]=ne,i.sunShadowMap[v]=X;const he=H.getViewportCount();for(let Le=0;Le<he;Le++)i.sunShadowMatrix[E+Le]=H.getMatrix(Le),i.sunShadowCascade[E+Le]=H._cascadeData[Le];E+=he,v++}i.sun[m]=k,m++}else if(L.isDirectionalLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,ne=n.get(L);ne.shadowIntensity=H.intensity,ne.shadowBias=H.bias,ne.shadowNormalBias=H.normalBias,ne.shadowRadius=H.radius,ne.shadowMapSize=H.mapSize,i.directionalShadow[x]=ne,i.directionalShadowMap[x]=X,i.directionalShadowMatrix[x]=L.shadow.matrix,R++}i.directional[x]=k,x++}else if(L.isSpotLight){const k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(q).multiplyScalar(ie),k.distance=G,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,i.spot[p]=k;const H=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,H.updateMatrices(L),L.castShadow&&O++),i.spotLightMatrix[p]=H.matrix,L.castShadow){const ne=n.get(L);ne.shadowIntensity=H.intensity,ne.shadowBias=H.bias,ne.shadowNormalBias=H.normalBias,ne.shadowRadius=H.radius,ne.shadowMapSize=H.mapSize,i.spotShadow[p]=ne,i.spotShadowMap[p]=X,g++}p++}else if(L.isRectAreaLight){const k=e.get(L);k.color.copy(q).multiplyScalar(ie),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=k,y++}else if(L.isPointLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const H=L.shadow,ne=n.get(L);ne.shadowIntensity=H.intensity,ne.shadowBias=H.bias,ne.shadowNormalBias=H.normalBias,ne.shadowRadius=H.radius,ne.shadowMapSize=H.mapSize,ne.shadowCameraNear=H.camera.near,ne.shadowCameraFar=H.camera.far,i.pointShadow[u]=ne,i.pointShadowMap[u]=X,i.pointShadowMatrix[u]=L.shadow.matrix,b++}i.point[u]=k,u++}else if(L.isHemisphereLight){const k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(ie),k.groundColor.copy(L.groundColor).multiplyScalar(ie),i.hemi[M]=k,M++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const I=i.hash;(I.sunLength!==m||I.directionalLength!==x||I.pointLength!==u||I.spotLength!==p||I.rectAreaLength!==y||I.hemiLength!==M||I.numSunShadows!==v||I.numDirectionalShadows!==R||I.numPointShadows!==b||I.numSpotShadows!==g||I.numSpotMaps!==T||I.numLightProbes!==N)&&(i.sun.length=m,i.directional.length=x,i.spot.length=p,i.rectArea.length=y,i.point.length=u,i.hemi.length=M,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=E,i.sunShadowCascade.length=E,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+T-O,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=N,I.sunLength=m,I.directionalLength=x,I.pointLength=u,I.spotLength=p,I.rectAreaLength=y,I.hemiLength=M,I.numSunShadows=v,I.numDirectionalShadows=R,I.numPointShadows=b,I.numSpotShadows=g,I.numSpotMaps=T,I.numLightProbes=N,i.version=vA++)}function l(c,d){let h=0,f=0,m=0,v=0,E=0,x=0;const u=d.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isSunLight){const R=i.sun[h];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(u),h++}else if(M.isDirectionalLight){const R=i.directional[f];R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(u),f++}else if(M.isSpotLight){const R=i.spot[v];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(u),v++}else if(M.isRectAreaLight){const R=i.rectArea[E];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(u),a.identity(),s.copy(M.matrixWorld),s.premultiply(u),a.extractRotation(s),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),E++}else if(M.isPointLight){const R=i.point[m];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(u),m++}else if(M.isHemisphereLight){const R=i.hemi[x];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(u),x++}}}return{setup:o,setupView:l,state:i}}function cg(t){const e=new SA(t),n=[],i=[],r=[];function s(h){d.camera=h,n.length=0,i.length=0,r.length=0}function a(h){h.isLightProbeGrid?r.push(h):n.push(h)}function o(h){i.push(h)}function l(){e.setup(n),r.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(n,h)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function yA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new cg(t),e.set(r,[o])):s>=a.length?(o=new cg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const MA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wA=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],TA=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],ug=new st,_a=new Y,Ou=new Y;function AA(t,e,n){let i=new uc;const r=new ze,s=new ze,a=new St,o=new GM,l=new VM,c={},d=n.maxTextureSize,h={[kr]:yn,[yn]:kr,[Ai]:Ai},f=new Hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:MA,fragmentShader:EA}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new ri;v.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Oi(v,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let u=this.type;this.render=function(b,g,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;this.type===Ry&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Tl);const O=t.getRenderTarget(),N=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),$=t.state;$.setBlending(Is),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ee=u!==this.type;ee&&g.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(q=>q.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,q=b.length;L<q;L++){const ie=b[L],G=ie.shadow;if(G===void 0){Ie("WebGLShadowMap:",ie,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const X=G.getFrameExtents();r.multiply(X),s.copy(G.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/X.x),r.x=s.x*X.x,G.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/X.y),r.y=s.y*X.y,G.mapSize.y=s.y));const k=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=k,G.map===null||ee===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===wa){if(ie.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new pi(r.x,r.y,{format:Br,type:gi,minFilter:xn,magFilter:xn,generateMipmaps:!1}),G.map.texture.name=ie.name+".shadowMap",G.map.depthTexture=new Xs(r.x,r.y,Qn),G.map.depthTexture.name=ie.name+".shadowMapDepth",G.map.depthTexture.format=mr,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Gt,G.map.depthTexture.magFilter=Gt}else ie.isPointLight?(G.map=new Bh(r.x),G.map.depthTexture=new Pv(r.x,mi)):(G.map=new pi(r.x,r.y),G.map.depthTexture=new Xs(r.x,r.y,mi)),G.map.depthTexture.name=ie.name+".shadowMap",G.map.depthTexture.format=mr,this.type===Tl?(G.map.depthTexture.compareFunction=k?hv:dv,G.map.depthTexture.minFilter=xn,G.map.depthTexture.magFilter=xn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Gt,G.map.depthTexture.magFilter=Gt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==r.x||G.map.height!==r.y)&&G.map.setSize(r.x,r.y);const H=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();ie.isPointLight!==!0&&G.updateMatrices(ie,T);const ne=G.camera.layers.mask&4294967294?G.camera.layers:T.layers;for(let he=0;he<H;he++){const Le=G.getCamera(he);if(ie.isPointLight){const te=G.camera,ge=G.matrix,ye=ie.distance||te.far;ye!==te.far&&(te.far=ye,te.updateProjectionMatrix()),_a.setFromMatrixPosition(ie.matrixWorld),te.position.copy(_a),Ou.copy(te.position),Ou.add(wA[he]),te.up.copy(TA[he]),te.lookAt(Ou),te.updateMatrixWorld(),ge.makeTranslation(-_a.x,-_a.y,-_a.z),ug.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ug,te.coordinateSystem,te.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,he),t.clear();else{he===0&&(t.setRenderTarget(G.map),t.clear());const te=G.getViewport(he);a.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),$.viewport(a)}i=G.getFrustum(he),M(g,T,Le,ie,ne,this.type)}G.isPointLightShadow!==!0&&this.type===wa&&p(G,T),G.needsUpdate=!1}u=this.type,x.needsUpdate=!1,t.setRenderTarget(O,N,I)};function p(b,g){const T=e.update(E);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null?b.mapPass=new pi(r.x,r.y,{format:Br,type:gi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(g,null,T,f,E,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value.set(b.map.width,b.map.height),m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(g,null,T,m,E,null)}function y(b,g,T,O){let N=null;const I=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)N=I;else if(N=T.isPointLight===!0?l:o,t.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const $=N.uuid,ee=g.uuid;let L=c[$];L===void 0&&(L={},c[$]=L);let q=L[ee];q===void 0&&(q=N.clone(),L[ee]=q,g.addEventListener("dispose",R)),N=q}if(N.visible=g.visible,N.wireframe=g.wireframe,O===wa?N.side=g.shadowSide!==null?g.shadowSide:g.side:N.side=g.shadowSide!==null?g.shadowSide:h[g.side],N.alphaMap=g.alphaMap,N.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,N.map=g.map,N.clipShadows=g.clipShadows,N.clippingPlanes=g.clippingPlanes,N.clipIntersection=g.clipIntersection,N.displacementMap=g.displacementMap,N.displacementScale=g.displacementScale,N.displacementBias=g.displacementBias,N.wireframeLinewidth=g.wireframeLinewidth,N.linewidth=g.linewidth,T.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const $=t.properties.get(N);$.light=T}return N}function M(b,g,T,O,N,I){if(b.visible===!1)return;if(b.layers.test(N)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===wa)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const L=e.update(b),q=b.material;if(Array.isArray(q)){const ie=L.groups;for(let G=0,X=ie.length;G<X;G++){const k=ie[G],H=q[k.materialIndex];if(H&&H.visible){const ne=y(b,H,O,I);b.onBeforeShadow(t,b,g,T,L,ne,k),t.renderBufferDirect(T,null,L,ne,b,k),b.onAfterShadow(t,b,g,T,L,ne,k)}}}else if(q.visible){const ie=y(b,q,O,I);b.onBeforeShadow(t,b,g,T,L,ie,null),t.renderBufferDirect(T,null,L,ie,b,null),b.onAfterShadow(t,b,g,T,L,ie,null)}}const ee=b.children;for(let L=0,q=ee.length;L<q;L++)M(ee[L],g,T,O,N,I)}function R(b){b.target.removeEventListener("dispose",R);for(const T in c){const O=c[T],N=b.target.uuid;N in O&&(O[N].dispose(),delete O[N])}}}function bA(t,e){function n(){let C=!1;const K=new St;let z=null;const le=new St(0,0,0,0);return{setMask:function(oe){z!==oe&&!C&&(t.colorMask(oe,oe,oe,oe),z=oe)},setLocked:function(oe){C=oe},setClear:function(oe,ue,Ee,De,ce){ce===!0&&(oe*=De,ue*=De,Ee*=De),K.set(oe,ue,Ee,De),le.equals(K)===!1&&(t.clearColor(oe,ue,Ee,De),le.copy(K))},reset:function(){C=!1,z=null,le.set(-1,0,0,0)}}}function i(){let C=!1,K=!1,z=null,le=null,oe=null;return{setReversed:function(ue){if(K!==ue){const Ee=e.get("EXT_clip_control");ue?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),K=ue;const De=oe;oe=null,this.setClear(De)}},getReversed:function(){return K},setTest:function(ue){ue?ve(t.DEPTH_TEST):Ue(t.DEPTH_TEST)},setMask:function(ue){z!==ue&&!C&&(t.depthMask(ue),z=ue)},setFunc:function(ue){if(K&&(ue=oM[ue]),le!==ue){switch(ue){case Wf:t.depthFunc(t.NEVER);break;case Xf:t.depthFunc(t.ALWAYS);break;case jf:t.depthFunc(t.LESS);break;case no:t.depthFunc(t.LEQUAL);break;case $f:t.depthFunc(t.EQUAL);break;case Yf:t.depthFunc(t.GEQUAL);break;case qf:t.depthFunc(t.GREATER);break;case Kf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=ue}},setLocked:function(ue){C=ue},setClear:function(ue){oe!==ue&&(oe=ue,K&&(ue=1-ue),t.clearDepth(ue))},reset:function(){C=!1,z=null,le=null,oe=null,K=!1}}}function r(){let C=!1,K=null,z=null,le=null,oe=null,ue=null,Ee=null,De=null,ce=null;return{setTest:function(Te){C||(Te?ve(t.STENCIL_TEST):Ue(t.STENCIL_TEST))},setMask:function(Te){K!==Te&&!C&&(t.stencilMask(Te),K=Te)},setFunc:function(Te,Fe,_e){(z!==Te||le!==Fe||oe!==_e)&&(t.stencilFunc(Te,Fe,_e),z=Te,le=Fe,oe=_e)},setOp:function(Te,Fe,_e){(ue!==Te||Ee!==Fe||De!==_e)&&(t.stencilOp(Te,Fe,_e),ue=Te,Ee=Fe,De=_e)},setLocked:function(Te){C=Te},setClear:function(Te){ce!==Te&&(t.clearStencil(Te),ce=Te)},reset:function(){C=!1,K=null,z=null,le=null,oe=null,ue=null,Ee=null,De=null,ce=null}}}const s=new n,a=new i,o=new r;let l={};const c=new WeakMap;let d={},h={},f={},m=new WeakMap,v=[],E=null,x=!1,u=null,p=null,y=null,M=null,R=null,b=null,g=null,T=new Xe(0,0,0),O=0,N=!1,I=null,$=null,ee=null,L=null,q=null;const ie=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,X=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=X>=2);let H=null,ne={};const he=t.getParameter(t.SCISSOR_BOX),Le=t.getParameter(t.VIEWPORT),te=new St().fromArray(he),ge=new St().fromArray(Le);function ye(C,K,z,le){const oe=new Uint8Array(4),ue=t.createTexture();t.bindTexture(C,ue),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<z;Ee++)C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY?t.texImage3D(K,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(K+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return ue}const Ne={};Ne[t.TEXTURE_2D]=ye(t.TEXTURE_2D,t.TEXTURE_2D,1),Ne[t.TEXTURE_CUBE_MAP]=ye(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ne[t.TEXTURE_2D_ARRAY]=ye(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ne[t.TEXTURE_3D]=ye(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(t.DEPTH_TEST),a.setFunc(no),jt(!1),it(um),ve(t.CULL_FACE),Rt(Is);function ve(C){d[C]!==!0&&(t.enable(C),d[C]=!0)}function Ue(C){d[C]!==!1&&(t.disable(C),d[C]=!1)}function ht(C,K){return f[C]!==K?(t.bindFramebuffer(C,K),f[C]=K,C===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=K),C===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=K),!0):!1}function Pe(C,K){let z=v,le=!1;if(C){z=m.get(K),z===void 0&&(z=[],m.set(K,z));const oe=C.textures;if(z.length!==oe.length||z[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Ee=oe.length;ue<Ee;ue++)z[ue]=t.COLOR_ATTACHMENT0+ue;z.length=oe.length,le=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,le=!0);le&&t.drawBuffers(z)}function Ke(C){return E!==C?(t.useProgram(C),E=C,!0):!1}const Ze={[ps]:t.FUNC_ADD,[Ny]:t.FUNC_SUBTRACT,[Py]:t.FUNC_REVERSE_SUBTRACT};Ze[Ly]=t.MIN,Ze[Dy]=t.MAX;const He={[Iy]:t.ZERO,[Uy]:t.ONE,[Fy]:t.SRC_COLOR,[Kx]:t.SRC_ALPHA,[Gy]:t.SRC_ALPHA_SATURATE,[zy]:t.DST_COLOR,[ky]:t.DST_ALPHA,[Oy]:t.ONE_MINUS_SRC_COLOR,[Zx]:t.ONE_MINUS_SRC_ALPHA,[Hy]:t.ONE_MINUS_DST_COLOR,[By]:t.ONE_MINUS_DST_ALPHA,[Vy]:t.CONSTANT_COLOR,[Wy]:t.ONE_MINUS_CONSTANT_COLOR,[Xy]:t.CONSTANT_ALPHA,[jy]:t.ONE_MINUS_CONSTANT_ALPHA};function Rt(C,K,z,le,oe,ue,Ee,De,ce,Te){if(C===Is){x===!0&&(Ue(t.BLEND),x=!1);return}if(x===!1&&(ve(t.BLEND),x=!0),C!==Cy){if(C!==u||Te!==N){if((p!==ps||R!==ps)&&(t.blendEquation(t.FUNC_ADD),p=ps,R=ps),Te)switch(C){case Fa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bs:t.blendFunc(t.ONE,t.ONE);break;case fm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Qe("WebGLState: Invalid blending: ",C);break}else switch(C){case Fa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case fm:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dm:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",C);break}y=null,M=null,b=null,g=null,T.set(0,0,0),O=0,u=C,N=Te}return}oe=oe||K,ue=ue||z,Ee=Ee||le,(K!==p||oe!==R)&&(t.blendEquationSeparate(Ze[K],Ze[oe]),p=K,R=oe),(z!==y||le!==M||ue!==b||Ee!==g)&&(t.blendFuncSeparate(He[z],He[le],He[ue],He[Ee]),y=z,M=le,b=ue,g=Ee),(De.equals(T)===!1||ce!==O)&&(t.blendColor(De.r,De.g,De.b,ce),T.copy(De),O=ce),u=C,N=!1}function yt(C,K){C.side===Ai?Ue(t.CULL_FACE):ve(t.CULL_FACE);let z=C.side===yn;K&&(z=!z),jt(z),C.blending===Fa&&C.transparent===!1?Rt(Is):Rt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const le=C.stencilWrite;o.setTest(le),le&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Mt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):Ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function jt(C){I!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),I=C)}function it(C){C!==Ay?(ve(t.CULL_FACE),C!==$&&(C===um?t.cullFace(t.BACK):C===by?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ue(t.CULL_FACE),$=C}function an(C){C!==ee&&(G&&t.lineWidth(C),ee=C)}function Mt(C,K,z){C?(ve(t.POLYGON_OFFSET_FILL),(L!==K||q!==z)&&(L=K,q=z,a.getReversed()&&(K=-K,z=-z),t.polygonOffset(K,z))):Ue(t.POLYGON_OFFSET_FILL)}function kt(C){C?ve(t.SCISSOR_TEST):Ue(t.SCISSOR_TEST)}function $t(C){C===void 0&&(C=t.TEXTURE0+ie-1),H!==C&&(t.activeTexture(C),H=C)}function Yt(C,K,z){z===void 0&&(H===null?z=t.TEXTURE0+ie-1:z=H);let le=ne[z];le===void 0&&(le={type:void 0,texture:void 0},ne[z]=le),(le.type!==C||le.texture!==K)&&(H!==z&&(t.activeTexture(z),H=z),t.bindTexture(C,K||Ne[C]),le.type=C,le.texture=K)}function F(){const C=ne[H];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function qt(){try{t.compressedTexImage2D(...arguments)}catch(C){Qe("WebGLState:",C)}}function at(){try{t.compressedTexImage3D(...arguments)}catch(C){Qe("WebGLState:",C)}}function ot(){try{t.texSubImage2D(...arguments)}catch(C){Qe("WebGLState:",C)}}function xe(){try{t.texSubImage3D(...arguments)}catch(C){Qe("WebGLState:",C)}}function vt(){try{t.compressedTexSubImage2D(...arguments)}catch(C){Qe("WebGLState:",C)}}function U(){try{t.compressedTexSubImage3D(...arguments)}catch(C){Qe("WebGLState:",C)}}function fe(){try{t.texStorage2D(...arguments)}catch(C){Qe("WebGLState:",C)}}function A(){try{t.texStorage3D(...arguments)}catch(C){Qe("WebGLState:",C)}}function _(){try{t.texImage2D(...arguments)}catch(C){Qe("WebGLState:",C)}}function D(){try{t.texImage3D(...arguments)}catch(C){Qe("WebGLState:",C)}}function re(C){return h[C]!==void 0?h[C]:t.getParameter(C)}function J(C,K){h[C]!==K&&(t.pixelStorei(C,K),h[C]=K)}function se(C){te.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),te.copy(C))}function Q(C){ge.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),ge.copy(C))}function V(C,K){let z=c.get(K);z===void 0&&(z=new WeakMap,c.set(K,z));let le=z.get(C);le===void 0&&(le=t.getUniformBlockIndex(K,C.name),t.uniformBlockBinding(K,le,le),z.set(C,le))}function B(C,K,z){const oe=c.get(K).get(C);l[oe]!==z&&(t.bindBufferBase(t.UNIFORM_BUFFER,oe,z),l[oe]=z)}function ae(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},h={},H=null,ne={},f={},l={},m=new WeakMap,v=[],E=null,x=!1,u=null,p=null,y=null,M=null,R=null,b=null,g=null,T=new Xe(0,0,0),O=0,N=!1,I=null,$=null,ee=null,L=null,q=null,te.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ve,disable:Ue,bindFramebuffer:ht,drawBuffers:Pe,useProgram:Ke,setBlending:Rt,setMaterial:yt,setFlipSided:jt,setCullFace:it,setLineWidth:an,setPolygonOffset:Mt,setScissorTest:kt,activeTexture:$t,bindTexture:Yt,unbindTexture:F,compressedTexImage2D:qt,compressedTexImage3D:at,texImage2D:_,texImage3D:D,pixelStorei:J,getParameter:re,updateUBOMapping:V,uniformBlockBinding:B,texStorage2D:fe,texStorage3D:A,texSubImage2D:ot,texSubImage3D:xe,compressedTexSubImage2D:vt,compressedTexSubImage3D:U,scissor:se,viewport:Q,reset:ae}}function RA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,d=new WeakMap,h=new Set;let f;const m=new WeakMap,v=new Set,E=new FinalizationRegistry(A=>v.delete(A));let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(A,_){return x?new OffscreenCanvas(A,_):oc("canvas")}function p(A,_,D){let re=1;const J=fe(A);if((J.width>D||J.height>D)&&(re=D/Math.max(J.width,J.height)),re<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const se=Math.floor(re*J.width),Q=Math.floor(re*J.height);f===void 0&&(f=u(se,Q));const V=_?u(se,Q):f;return V.width=se,V.height=Q,V.getContext("2d").drawImage(A,0,0,se,Q),Ie("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+se+"x"+Q+")."),V}else return"data"in A&&Ie("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function y(A){return A.generateMipmaps}function M(A){t.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function b(A,_,D,re,J,se=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q;re&&(Q=e.get("EXT_texture_norm16"),Q||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=_;if(_===t.RED&&(D===t.FLOAT&&(V=t.R32F),D===t.HALF_FLOAT&&(V=t.R16F),D===t.UNSIGNED_BYTE&&(V=t.R8),D===t.UNSIGNED_SHORT&&Q&&(V=Q.R16_EXT),D===t.SHORT&&Q&&(V=Q.R16_SNORM_EXT)),_===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(V=t.R8UI),D===t.UNSIGNED_SHORT&&(V=t.R16UI),D===t.UNSIGNED_INT&&(V=t.R32UI),D===t.BYTE&&(V=t.R8I),D===t.SHORT&&(V=t.R16I),D===t.INT&&(V=t.R32I)),_===t.RG&&(D===t.FLOAT&&(V=t.RG32F),D===t.HALF_FLOAT&&(V=t.RG16F),D===t.UNSIGNED_BYTE&&(V=t.RG8),D===t.UNSIGNED_SHORT&&Q&&(V=Q.RG16_EXT),D===t.SHORT&&Q&&(V=Q.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(V=t.RG8UI),D===t.UNSIGNED_SHORT&&(V=t.RG16UI),D===t.UNSIGNED_INT&&(V=t.RG32UI),D===t.BYTE&&(V=t.RG8I),D===t.SHORT&&(V=t.RG16I),D===t.INT&&(V=t.RG32I)),_===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(V=t.RGB8UI),D===t.UNSIGNED_SHORT&&(V=t.RGB16UI),D===t.UNSIGNED_INT&&(V=t.RGB32UI),D===t.BYTE&&(V=t.RGB8I),D===t.SHORT&&(V=t.RGB16I),D===t.INT&&(V=t.RGB32I)),_===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(V=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(V=t.RGBA16UI),D===t.UNSIGNED_INT&&(V=t.RGBA32UI),D===t.BYTE&&(V=t.RGBA8I),D===t.SHORT&&(V=t.RGBA16I),D===t.INT&&(V=t.RGBA32I)),_===t.RGB&&(D===t.UNSIGNED_SHORT&&Q&&(V=Q.RGB16_EXT),D===t.SHORT&&Q&&(V=Q.RGB16_SNORM_EXT),D===t.UNSIGNED_INT_5_9_9_9_REV&&(V=t.RGB9_E5),D===t.UNSIGNED_INT_10F_11F_11F_REV&&(V=t.R11F_G11F_B10F)),_===t.RGBA){const B=se?sc:je.getTransfer(J);D===t.FLOAT&&(V=t.RGBA32F),D===t.HALF_FLOAT&&(V=t.RGBA16F),D===t.UNSIGNED_BYTE&&(V=B===tt?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT&&Q&&(V=Q.RGBA16_EXT),D===t.SHORT&&Q&&(V=Q.RGBA16_SNORM_EXT),D===t.UNSIGNED_SHORT_4_4_4_4&&(V=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(V=t.RGB5_A1)}return(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function g(A,_){let D;return A?_===null||_===mi||_===Ws?D=t.DEPTH24_STENCIL8:_===Qn?D=t.DEPTH32F_STENCIL8:_===ro&&(D=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===mi||_===Ws?D=t.DEPTH_COMPONENT24:_===Qn?D=t.DEPTH_COMPONENT32F:_===ro&&(D=t.DEPTH_COMPONENT16),D}function T(A,_){return y(A)===!0||A.isFramebufferTexture&&A.minFilter!==Gt&&A.minFilter!==xn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function O(A){const _=new WeakRef(A);i.get(A).__ref=_,v.add(_),E.register(A,_,_)}function N(A){const _=i.get(A).__ref;_!==void 0&&(v.delete(_),E.unregister(_))}function I(A){ee(A.target)}function $(A){L(A.target)}function ee(A){A.removeEventListener("dispose",I),N(A),ie(A),A.isVideoTexture&&d.delete(A),A.isHTMLTexture&&h.delete(A)}function L(A){A.removeEventListener("dispose",$),N(A),X(A)}function q(){for(const A of v){const _=A.deref();_!==void 0&&(_.isRenderTarget===!0?L(_):ee(_))}v.clear(),h.clear()}function ie(A){const _=i.get(A);if(_.__webglInit===void 0)return;const D=A.source,re=m.get(D);if(re){const J=re[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&G(A),Object.keys(re).length===0&&m.delete(D)}i.remove(A)}function G(A){const _=i.get(A);t.deleteTexture(_.__webglTexture);const D=A.source,re=m.get(D);delete re[_.__cacheKey],a.memory.textures--}function X(A){const _=i.get(A);_.__depthDisposeCallback&&_.__depthDisposeCallback();const D=A.depthTexture;if(D&&D.renderTarget===A&&ee(D),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let se=0;se<_.__webglFramebuffer[J].length;se++)t.deleteFramebuffer(_.__webglFramebuffer[J][se]);else t.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)t.deleteFramebuffer(_.__webglFramebuffer[J]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const re=A.textures;for(let J=0,se=re.length;J<se;J++){const Q=i.get(re[J]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(re[J])}i.remove(A)}let k=0;function H(){k=0}function ne(){return k}function he(A){k=A}function Le(){const A=k;return A>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+r.maxTextures),k+=1,A}function te(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.mipmapsAutoUpdate),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function ge(A,_){const D=i.get(A);if(A.isVideoTexture&&vt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&D.__version!==A.version){const re=A.image;if(re===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(D,A,_);return}}else A.isExternalTexture&&(D.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+_)}function ye(A,_){const D=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){yt(D,A,_);return}else A.isExternalTexture&&(D.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+_)}function Ne(A,_){const D=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){yt(D,A,_);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+_)}function ve(A,_){const D=i.get(A);if(A.version>0&&D.__version!==A.version){jt(D,A,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+_)}const Ue={[Zf]:t.REPEAT,[Ci]:t.CLAMP_TO_EDGE,[Qf]:t.MIRRORED_REPEAT},ht={[Gt]:t.NEAREST,[qy]:t.NEAREST_MIPMAP_NEAREST,[Do]:t.NEAREST_MIPMAP_LINEAR,[xn]:t.LINEAR,[uu]:t.LINEAR_MIPMAP_NEAREST,[ir]:t.LINEAR_MIPMAP_LINEAR},Pe={[Jy]:t.NEVER,[pv]:t.ALWAYS,[eM]:t.LESS,[dv]:t.LEQUAL,[tM]:t.EQUAL,[hv]:t.GEQUAL,[nM]:t.GREATER,[iM]:t.NOTEQUAL};function Ke(A,_){if(_.type===Qn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===xn||_.magFilter===uu||_.magFilter===Do||_.magFilter===ir||_.minFilter===xn||_.minFilter===uu||_.minFilter===Do||_.minFilter===ir)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,Ue[_.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Ue[_.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Ue[_.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ht[_.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Gt||_.minFilter!==Do&&_.minFilter!==ir||_.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ze(A,_){let D=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",I),O(_));const re=_.source;let J=m.get(re);J===void 0&&(J={},m.set(re,J));const se=te(_);if(se!==A.__cacheKey){J[se]===void 0&&(J[se]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,D=!0),J[se].usedTimes++;const Q=J[A.__cacheKey];Q!==void 0&&(J[A.__cacheKey].usedTimes--,Q.usedTimes===0&&G(_)),A.__cacheKey=se,A.__webglTexture=J[se].texture}return D}function He(A,_,D){return Math.floor(Math.floor(A/D)/_)}function Rt(A,_,D,re){const se=A.updateRanges;if(se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,D,re,_.data);else{se.sort((C,K)=>C.start-K.start);let Q=0;for(let C=1;C<se.length;C++){const K=se[Q],z=se[C],le=K.start+K.count,oe=He(z.start,_.width,4),ue=He(K.start,_.width,4);z.start<=le+1&&oe===ue&&He(z.start+z.count-1,_.width,4)===oe?K.count=Math.max(K.count,z.start+z.count-K.start):(++Q,se[Q]=z)}se.length=Q+1;const V=n.getParameter(t.UNPACK_ROW_LENGTH),B=n.getParameter(t.UNPACK_SKIP_PIXELS),ae=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let C=0,K=se.length;C<K;C++){const z=se[C],le=Math.floor(z.start/4),oe=Math.ceil(z.count/4),ue=le%_.width,Ee=Math.floor(le/_.width),De=oe,ce=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ue),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ee),n.texSubImage2D(t.TEXTURE_2D,0,ue,Ee,De,ce,D,re,_.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,V),n.pixelStorei(t.UNPACK_SKIP_PIXELS,B),n.pixelStorei(t.UNPACK_SKIP_ROWS,ae)}}function yt(A,_,D){let re=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(re=t.TEXTURE_3D);const J=Ze(A,_),se=_.source;n.bindTexture(re,A.__webglTexture,t.TEXTURE0+D);const Q=i.get(se);if(se.version!==Q.__version||J===!0){if(n.activeTexture(t.TEXTURE0+D),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ce=je.getPrimaries(je.workingColorSpace),Te=_.colorSpace===er?null:je.getPrimaries(_.colorSpace),Fe=_.colorSpace===er||ce===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let B=p(_.image,!1,r.maxTextureSize);B=U(_,B);const ae=s.convert(_.format,_.colorSpace),C=s.convert(_.type);let K=b(_.internalFormat,ae,C,_.normalized,_.colorSpace,_.isVideoTexture);Ke(re,_);let z;const le=_.mipmaps,oe=_.isVideoTexture!==!0,ue=Q.__version===void 0||J===!0,Ee=se.dataReady,De=T(_,B);if(_.isDepthTexture)K=g(_.format===rr,_.type),ue&&(oe?n.texStorage2D(t.TEXTURE_2D,1,K,B.width,B.height):n.texImage2D(t.TEXTURE_2D,0,K,B.width,B.height,0,ae,C,null));else if(_.isDataTexture)if(le.length>0){oe&&ue&&n.texStorage2D(t.TEXTURE_2D,De,K,le[0].width,le[0].height);for(let ce=0,Te=le.length;ce<Te;ce++)z=le[ce],oe?Ee&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,z.width,z.height,ae,C,z.data):n.texImage2D(t.TEXTURE_2D,ce,K,z.width,z.height,0,ae,C,z.data);_.generateMipmaps=!1}else oe?(ue&&n.texStorage2D(t.TEXTURE_2D,De,K,B.width,B.height),Ee&&Rt(_,B,ae,C)):n.texImage2D(t.TEXTURE_2D,0,K,B.width,B.height,0,ae,C,B.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){oe&&ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,K,le[0].width,le[0].height,B.depth);for(let ce=0,Te=le.length;ce<Te;ce++)if(z=le[ce],_.format!==fi)if(ae!==null)if(oe){if(Ee)if(_.layerUpdates.size>0){const Fe=Vm(z.width,z.height,_.format,_.type);for(const _e of _.layerUpdates){const et=z.data.subarray(_e*Fe/z.data.BYTES_PER_ELEMENT,(_e+1)*Fe/z.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,_e,z.width,z.height,1,ae,et)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,z.width,z.height,B.depth,ae,z.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ce,K,z.width,z.height,B.depth,0,z.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Ee&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ce,0,0,0,z.width,z.height,B.depth,ae,C,z.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ce,K,z.width,z.height,B.depth,0,ae,C,z.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{oe&&ue&&n.texStorage2D(t.TEXTURE_2D,De,K,le[0].width,le[0].height);for(let ce=0,Te=le.length;ce<Te;ce++)z=le[ce],_.format!==fi?ae!==null?oe?Ee&&n.compressedTexSubImage2D(t.TEXTURE_2D,ce,0,0,z.width,z.height,ae,z.data):n.compressedTexImage2D(t.TEXTURE_2D,ce,K,z.width,z.height,0,z.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Ee&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,z.width,z.height,ae,C,z.data):n.texImage2D(t.TEXTURE_2D,ce,K,z.width,z.height,0,ae,C,z.data)}else if(_.isDataArrayTexture)if(oe){if(ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,K,B.width,B.height,B.depth),Ee)if(_.layerUpdates.size>0){const ce=Vm(B.width,B.height,_.format,_.type);for(const Te of _.layerUpdates){const Fe=B.data.subarray(Te*ce/B.data.BYTES_PER_ELEMENT,(Te+1)*ce/B.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Te,B.width,B.height,1,ae,C,Fe)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,ae,C,B.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,K,B.width,B.height,B.depth,0,ae,C,B.data);else if(_.isData3DTexture)oe?(ue&&n.texStorage3D(t.TEXTURE_3D,De,K,B.width,B.height,B.depth),Ee&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,ae,C,B.data)):n.texImage3D(t.TEXTURE_3D,0,K,B.width,B.height,B.depth,0,ae,C,B.data);else if(_.isFramebufferTexture){if(ue)if(oe)n.texStorage2D(t.TEXTURE_2D,De,K,B.width,B.height);else{let ce=B.width,Te=B.height;for(let Fe=0;Fe<De;Fe++)n.texImage2D(t.TEXTURE_2D,Fe,K,ce,Te,0,ae,C,null),ce>>=1,Te>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const ce=t.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),B.parentNode!==ce){ce.appendChild(B),h.add(_),ce.onpaint=Te=>{const Fe=Te.changedElements;for(const _e of h)Fe.includes(_e.image)&&(_e.needsUpdate=!0)},ce.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,B);else{const Fe=t.RGBA,_e=t.RGBA,et=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Fe,_e,et,B)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(le.length>0){if(oe&&ue){const ce=fe(le[0]);n.texStorage2D(t.TEXTURE_2D,De,K,ce.width,ce.height)}for(let ce=0,Te=le.length;ce<Te;ce++)z=le[ce],oe?Ee&&n.texSubImage2D(t.TEXTURE_2D,ce,0,0,ae,C,z):n.texImage2D(t.TEXTURE_2D,ce,K,ae,C,z);_.generateMipmaps=!1}else if(oe){if(ue){const ce=fe(B);n.texStorage2D(t.TEXTURE_2D,De,K,ce.width,ce.height)}Ee&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae,C,B)}else n.texImage2D(t.TEXTURE_2D,0,K,ae,C,B);y(_)&&_.mipmapsAutoUpdate===!0&&M(re),Q.__version=se.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function jt(A,_,D){if(_.image.length!==6)return;const re=Ze(A,_),J=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+D);const se=i.get(J);if(J.version!==se.__version||re===!0){n.activeTexture(t.TEXTURE0+D);const Q=je.getPrimaries(je.workingColorSpace),V=_.colorSpace===er?null:je.getPrimaries(_.colorSpace),B=_.colorSpace===er||Q===V?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);const ae=_.isCompressedTexture||_.image[0].isCompressedTexture,C=_.image[0]&&_.image[0].isDataTexture,K=[];for(let _e=0;_e<6;_e++)!ae&&!C?K[_e]=p(_.image[_e],!0,r.maxCubemapSize):K[_e]=C?_.image[_e].image:_.image[_e],K[_e]=U(_,K[_e]);const z=K[0],le=s.convert(_.format,_.colorSpace),oe=s.convert(_.type);let ue=b(_.internalFormat,le,oe,_.normalized,_.colorSpace);const Ee=_.isVideoTexture!==!0,De=se.__version===void 0||re===!0,ce=J.dataReady;let Te=T(_,z);Ke(t.TEXTURE_CUBE_MAP,_);let Fe;if(_.isDepthTexture){if(ue=g(_.format===rr,_.type),De)if(Ee)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,ue,z.width,z.height);else for(let _e=0;_e<6;_e++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ue,z.width,z.height,0,le,oe,null)}else if(ae){Ee&&De&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,ue,z.width,z.height);for(let _e=0;_e<6;_e++){Fe=K[_e].mipmaps;for(let et=0;et<Fe.length;et++){const Dt=Fe[et];_.format!==fi?le!==null?Ee?ce&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,0,0,Dt.width,Dt.height,le,Dt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,ue,Dt.width,Dt.height,0,Dt.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,0,0,Dt.width,Dt.height,le,oe,Dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,ue,Dt.width,Dt.height,0,le,oe,Dt.data)}}}else{if(Fe=_.mipmaps,Ee&&De){Fe.length>0&&Te++;const _e=fe(K[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,ue,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(C){Ee?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,K[_e].width,K[_e].height,le,oe,K[_e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ue,K[_e].width,K[_e].height,0,le,oe,K[_e].data);for(let et=0;et<Fe.length;et++){const Bi=Fe[et].image[_e].image;Ee?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,0,0,Bi.width,Bi.height,le,oe,Bi.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,ue,Bi.width,Bi.height,0,le,oe,Bi.data)}}else{Ee?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,le,oe,K[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ue,le,oe,K[_e]);for(let et=0;et<Fe.length;et++){const Dt=Fe[et];Ee?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,0,0,le,oe,Dt.image[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,ue,le,oe,Dt.image[_e])}}}y(_)&&_.mipmapsAutoUpdate===!0&&M(t.TEXTURE_CUBE_MAP),se.__version=J.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function it(A,_,D,re,J,se){const Q=s.convert(D.format,D.colorSpace),V=s.convert(D.type),B=b(D.internalFormat,Q,V,D.normalized,D.colorSpace),ae=i.get(_),C=i.get(D);if(C.__renderTarget=_,!ae.__hasExternalTextures){const K=Math.max(1,_.width>>se),z=Math.max(1,_.height>>se);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,se,B,K,z,_.depth,0,Q,V,null):n.texImage2D(J,se,B,K,z,0,Q,V,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),xe(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,J,C.__webglTexture,0,ot(_)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,J,C.__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function an(A,_,D){if(t.bindRenderbuffer(t.RENDERBUFFER,A),_.depthBuffer){const re=_.depthTexture,J=re&&re.isDepthTexture?re.type:null,se=g(_.stencilBuffer,J),Q=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;xe(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ot(_),se,_.width,_.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,ot(_),se,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,se,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,A)}else{const re=_.textures;for(let J=0;J<re.length;J++){const se=re[J],Q=s.convert(se.format,se.colorSpace),V=s.convert(se.type),B=b(se.internalFormat,Q,V,se.normalized,se.colorSpace);xe(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ot(_),B,_.width,_.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,ot(_),B,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,B,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Mt(A,_,D){const re=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(_.depthTexture);J.__renderTarget=_;const se=re?_.depthTexture.image[0]:_.depthTexture.image;(!J.__webglTexture||se.width!==_.width||se.height!==_.height)&&(se.width=_.width,se.height=_.height,_.depthTexture.needsUpdate=!0),re?ve(_.depthTexture,0):ge(_.depthTexture,0);const Q=J.__webglTexture,V=ot(_),B=re?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,ae=_.depthTexture.format===rr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===mr)xe(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,B,Q,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,ae,B,Q,0);else if(_.depthTexture.format===rr)xe(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,B,Q,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,ae,B,Q,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function kt(A){const _=i.get(A),D=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const re=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),re){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,re.removeEventListener("dispose",J)};re.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=re}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(D)for(let re=0;re<6;re++)Mt(_.__webglFramebuffer[re],A,re);else A.texture.mipmaps.length>0?Mt(_.__webglFramebuffer[0],A,0):Mt(_.__webglFramebuffer,A,0);else if(D){_.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[re]),_.__webglDepthbuffer[re]===void 0)_.__webglDepthbuffer[re]=t.createRenderbuffer(),an(_.__webglDepthbuffer[re],A,!1);else{const J=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[re];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,se)}}else if(A.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),an(_.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,se)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function $t(A,_,D){const re=i.get(A);_!==void 0&&it(re.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&kt(A)}function Yt(A){const _=A.texture,D=i.get(A),re=i.get(_);A.addEventListener("dispose",$),O(A);const J=A.textures,se=A.isWebGLCubeRenderTarget===!0,Q=J.length>1;if(Q||(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=_.version,a.memory.textures++),se){D.__webglFramebuffer=[];for(let V=0;V<6;V++)if(_.mipmaps.length>0){D.__webglFramebuffer[V]=[];for(let B=0;B<_.mipmaps.length;B++)D.__webglFramebuffer[V][B]=t.createFramebuffer()}else D.__webglFramebuffer[V]=t.createFramebuffer()}else{if(_.mipmaps.length>0){D.__webglFramebuffer=[];for(let V=0;V<_.mipmaps.length;V++)D.__webglFramebuffer[V]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(Q)for(let V=0,B=J.length;V<B;V++){const ae=i.get(J[V]);ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&xe(A)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let V=0;V<J.length;V++){const B=J[V];D.__webglColorRenderbuffer[V]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[V]);const ae=s.convert(B.format,B.colorSpace),C=s.convert(B.type),K=b(B.internalFormat,ae,C,B.normalized,B.colorSpace,A.isXRRenderTarget===!0),z=ot(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,z,K,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+V,t.RENDERBUFFER,D.__webglColorRenderbuffer[V])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),an(D.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),Ke(t.TEXTURE_CUBE_MAP,_);for(let V=0;V<6;V++)if(_.mipmaps.length>0)for(let B=0;B<_.mipmaps.length;B++)it(D.__webglFramebuffer[V][B],A,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+V,B);else it(D.__webglFramebuffer[V],A,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);y(_)?M(t.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),n.unbindTexture()}else if(Q){for(let V=0,B=J.length;V<B;V++){const ae=J[V],C=i.get(ae);let K=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(K,C.__webglTexture),Ke(K,ae),it(D.__webglFramebuffer,A,ae,t.COLOR_ATTACHMENT0+V,K,0),y(ae)&&M(K)}n.unbindTexture()}else{let V=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(V=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(V,re.__webglTexture),Ke(V,_),_.mipmaps.length>0)for(let B=0;B<_.mipmaps.length;B++)it(D.__webglFramebuffer[B],A,_,t.COLOR_ATTACHMENT0,V,B);else it(D.__webglFramebuffer,A,_,t.COLOR_ATTACHMENT0,V,0);y(_)?M(V):_.mipmaps.length>0&&t.texParameteri(V,t.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),n.unbindTexture()}A.depthBuffer&&kt(A)}function F(A){const _=A.textures;for(let D=0,re=_.length;D<re;D++){const J=_[D];if(y(J)&&J.mipmapsAutoUpdate===!0){const se=R(A),Q=i.get(J).__webglTexture;n.bindTexture(se,Q),M(se),n.unbindTexture()}}}const qt=[];function at(A){if(A.samples>0){if(xe(A)===!1){const _=A.textures,D=A.width,re=A.height;let J=t.COLOR_BUFFER_BIT;const se=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=i.get(A),V=_.length>1;if(V)for(let ae=0;ae<_.length;ae++)n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let ae=0;ae<_.length;ae++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),V){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Q.__webglColorRenderbuffer[ae]);const C=i.get(_[ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,C,0)}t.blitFramebuffer(0,0,D,re,0,0,D,re,J,t.NEAREST),l===!0&&(qt.length=0,qt.push(t.COLOR_ATTACHMENT0+ae),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&qt.push(se),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,qt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),V)for(let ae=0;ae<_.length;ae++){n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,Q.__webglColorRenderbuffer[ae]);const C=i.get(_[ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,C,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const _=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function ot(A){return Math.min(r.maxSamples,A.samples)}function xe(A){const _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function vt(A){const _=a.render.frame;d.get(A)!==_&&(d.set(A,_),A.update())}function U(A,_){const D=A.colorSpace,re=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||D!==rc&&D!==er&&(je.getTransfer(D)===tt?(re!==fi||J!==Un)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",D)),_}function fe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Le,this.resetTextureUnits=H,this.getTextureUnits=ne,this.setTextureUnits=he,this.setTexture2D=ge,this.setTexture2DArray=ye,this.setTexture3D=Ne,this.setTextureCube=ve,this.rebindTextures=$t,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=xe,this.dispose=q}function CA(t,e){function n(i,r=er){let s;const a=je.getTransfer(r);if(i===Un)return t.UNSIGNED_BYTE;if(i===Ph)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Lh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===lv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===cv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===av)return t.BYTE;if(i===ov)return t.SHORT;if(i===ro)return t.UNSIGNED_SHORT;if(i===Nh)return t.INT;if(i===mi)return t.UNSIGNED_INT;if(i===Qn)return t.FLOAT;if(i===gi)return t.HALF_FLOAT;if(i===uv)return t.ALPHA;if(i===fv)return t.RGB;if(i===fi)return t.RGBA;if(i===mr)return t.DEPTH_COMPONENT;if(i===rr)return t.DEPTH_STENCIL;if(i===Dh)return t.RED;if(i===Ih)return t.RED_INTEGER;if(i===Br)return t.RG;if(i===Uh)return t.RG_INTEGER;if(i===Fh)return t.RGBA_INTEGER;if(i===Al||i===bl||i===Rl||i===Cl)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Al)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Al)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jf||i===ed||i===td||i===nd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ed)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===td)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===id||i===rd||i===sd||i===ad||i===od||i===nc||i===ld)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===id||i===rd)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ad)return s.COMPRESSED_R11_EAC;if(i===od)return s.COMPRESSED_SIGNED_R11_EAC;if(i===nc)return s.COMPRESSED_RG11_EAC;if(i===ld)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cd||i===ud||i===fd||i===dd||i===hd||i===pd||i===md||i===gd||i===xd||i===vd||i===_d||i===Sd||i===yd||i===Md)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ud)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===md)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_d)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Md)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ed||i===wd||i===Td)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ed)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Td)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ad||i===bd||i===ic||i===Rd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ad)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ic)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const NA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Lv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Hr({vertexShader:NA,fragmentShader:PA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Oi(new fo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DA extends Wr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,v=null;const E=typeof XRWebGLBinding<"u",x=new LA,u={},p=n.getContextAttributes();let y=null,M=null;const R=[],b=[],g=new ze;let T=null,O=null;const N=new Zn;N.viewport=new St;const I=new Zn;I.viewport=new St;const $=[N,I],ee=new XM;let L=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ge=R[te];return ge===void 0&&(ge=new _u,R[te]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(te){let ge=R[te];return ge===void 0&&(ge=new _u,R[te]=ge),ge.getGripSpace()},this.getHand=function(te){let ge=R[te];return ge===void 0&&(ge=new _u,R[te]=ge),ge.getHandSpace()};function ie(te){const ge=b.indexOf(te.inputSource);if(ge===-1)return;const ye=R[ge];ye!==void 0&&(ye.update(te.inputSource,te.frame,c||a),ye.dispatchEvent({type:te.type,data:te.inputSource}))}function G(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",X);for(let te=0;te<R.length;te++){const ge=b[te];ge!==null&&(b[te]=null,R[te].disconnect(ge))}L=null,q=null,x.reset();for(const te in u)delete u[te];if(e.setRenderTarget(y),m=null,f=null,h=null,r=null,M=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(g.width,g.height,!1),O!==null){const te=O.camera;te.fov=O.fov,te.zoom=O.zoom,te.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",G),r.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(g),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ne=null,ve=null;p.depth&&(ve=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=p.stencil?rr:mr,Ne=p.stencil?Ws:mi);const Ue={colorFormat:n.RGBA8,depthFormat:ve,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new pi(f.textureWidth,f.textureHeight,{format:fi,type:Un,depthTexture:new Xs(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ye={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ye),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new pi(m.framebufferWidth,m.framebufferHeight,{format:fi,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(te){for(let ge=0;ge<te.removed.length;ge++){const ye=te.removed[ge],Ne=b.indexOf(ye);Ne>=0&&(b[Ne]=null,R[Ne].disconnect(ye))}for(let ge=0;ge<te.added.length;ge++){const ye=te.added[ge];let Ne=b.indexOf(ye);if(Ne===-1){for(let Ue=0;Ue<R.length;Ue++)if(Ue>=b.length){b.push(ye),Ne=Ue;break}else if(b[Ue]===null){b[Ue]=ye,Ne=Ue;break}if(Ne===-1)break}const ve=R[Ne];ve&&ve.connect(ye)}}function k(te,ge){ge===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ge.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ge=te.near,ye=te.far;x.texture!==null&&(x.depthNear>0&&(ge=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),ee.near=I.near=N.near=ge,ee.far=I.far=N.far=ye,(L!==ee.near||q!==ee.far)&&(r.updateRenderState({depthNear:ee.near,depthFar:ee.far}),L=ee.near,q=ee.far),ee.layers.mask=te.layers.mask|6,N.layers.mask=ee.layers.mask&-5,I.layers.mask=ee.layers.mask&-3;const Ne=te.parent,ve=ee.cameras;k(ee,Ne);for(let Ue=0;Ue<ve.length;Ue++)k(ve[Ue],Ne);ee.projectionMatrix.copy(N.projectionMatrix),ee.projectionMatrixInverse.copy(N.projectionMatrixInverse),O===null&&te.isPerspectiveCamera&&(O={camera:te,fov:te.fov,zoom:te.zoom}),H(te,ee,Ne)};function H(te,ge,ye){ye===null?te.matrix.copy(ge.matrixWorld):(te.matrix.copy(ye.matrixWorld),te.matrix.invert(),te.matrix.multiply(ge.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Cd*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ee)},this.getCameraTexture=function(te){return u[te]};let ne=null;function he(te,ge){if(d=ge.getViewerPose(c||a),v=ge,d!==null){const ye=d.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Ne=!1;ye.length!==ee.cameras.length&&(ee.cameras.length=0,Ne=!0);for(let Pe=0;Pe<ye.length;Pe++){const Ke=ye[Pe];let Ze=null;if(m!==null)Ze=m.getViewport(Ke);else{const Rt=h.getViewSubImage(f,Ke);Ze=Rt.viewport,Pe===0&&(e.setRenderTargetTextures(M,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(M))}let He=$[Pe];He===void 0&&(He=new Zn,He.layers.enable(Pe),He.viewport=new St,$[Pe]=He),He.matrix.fromArray(Ke.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ke.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Pe===0&&(ee.matrix.copy(He.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Ne===!0&&ee.cameras.push(He)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const Pe=h.getDepthInformation(ye[0]);Pe&&Pe.isValid&&Pe.texture&&x.init(Pe,r.renderState)}if(ve&&ve.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let Pe=0;Pe<ye.length;Pe++){const Ke=ye[Pe].camera;if(Ke){let Ze=u[Ke];Ze||(Ze=new Lv,u[Ke]=Ze);const He=h.getCameraImage(Ke);Ze.sourceTexture=He}}}}for(let ye=0;ye<R.length;ye++){const Ne=b[ye],ve=R[ye];Ne!==null&&ve!==void 0&&ve.update(Ne,ge,c||a)}ne&&ne(te,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),v=null}const Le=new Uv;Le.setAnimationLoop(he),this.setAnimationLoop=function(te){ne=te},this.dispose=function(){}}}const IA=new st,Xv=new Oe;Xv.set(-1,0,0,0,1,0,0,0,1);function UA(t,e){function n(x,u){x.matrixAutoUpdate===!0&&x.updateMatrix(),u.value.copy(x.matrix)}function i(x,u){u.color.getRGB(x.fogColor.value,Dv(t)),u.isFog?(x.fogNear.value=u.near,x.fogFar.value=u.far):u.isFogExp2&&(x.fogDensity.value=u.density)}function r(x,u,p,y,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(x,u):u.isMeshLambertMaterial?(s(x,u),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(x,u),h(x,u)):u.isMeshPhongMaterial?(s(x,u),d(x,u),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(x,u),f(x,u),u.isMeshPhysicalMaterial&&m(x,u,M)):u.isMeshMatcapMaterial?(s(x,u),v(x,u)):u.isMeshDepthMaterial?s(x,u):u.isMeshDistanceMaterial?(s(x,u),E(x,u)):u.isMeshNormalMaterial?s(x,u):u.isLineBasicMaterial?(a(x,u),u.isLineDashedMaterial&&o(x,u)):u.isPointsMaterial?l(x,u,p,y):u.isSpriteMaterial?c(x,u):u.isShadowMaterial?(x.color.value.copy(u.color),x.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(x,u){x.opacity.value=u.opacity,u.color&&x.diffuse.value.copy(u.color),u.emissive&&x.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(x.map.value=u.map,n(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.bumpMap&&(x.bumpMap.value=u.bumpMap,n(u.bumpMap,x.bumpMapTransform),x.bumpScale.value=u.bumpScale,u.side===yn&&(x.bumpScale.value*=-1)),u.normalMap&&(x.normalMap.value=u.normalMap,n(u.normalMap,x.normalMapTransform),x.normalScale.value.copy(u.normalScale),u.side===yn&&x.normalScale.value.negate()),u.displacementMap&&(x.displacementMap.value=u.displacementMap,n(u.displacementMap,x.displacementMapTransform),x.displacementScale.value=u.displacementScale,x.displacementBias.value=u.displacementBias),u.emissiveMap&&(x.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,x.emissiveMapTransform)),u.specularMap&&(x.specularMap.value=u.specularMap,n(u.specularMap,x.specularMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest);const p=e.get(u),y=p.envMap,M=p.envMapRotation;y&&(x.envMap.value=y,x.envMapRotation.value.setFromMatrix4(IA.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Xv),x.reflectivity.value=u.reflectivity,x.ior.value=u.ior,x.refractionRatio.value=u.refractionRatio),u.lightMap&&(x.lightMap.value=u.lightMap,x.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,x.lightMapTransform)),u.aoMap&&(x.aoMap.value=u.aoMap,x.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,x.aoMapTransform))}function a(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,u.map&&(x.map.value=u.map,n(u.map,x.mapTransform))}function o(x,u){x.dashSize.value=u.dashSize,x.totalSize.value=u.dashSize+u.gapSize,x.scale.value=u.scale}function l(x,u,p,y){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.size.value=u.size*p,x.scale.value=y*.5,u.map&&(x.map.value=u.map,n(u.map,x.uvTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function c(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.rotation.value=u.rotation,u.map&&(x.map.value=u.map,n(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function d(x,u){x.specular.value.copy(u.specular),x.shininess.value=Math.max(u.shininess,1e-4)}function h(x,u){u.gradientMap&&(x.gradientMap.value=u.gradientMap)}function f(x,u){x.metalness.value=u.metalness,u.metalnessMap&&(x.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,x.metalnessMapTransform)),x.roughness.value=u.roughness,u.roughnessMap&&(x.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,x.roughnessMapTransform)),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)}function m(x,u,p){x.ior.value=u.ior,u.diffuseRoughness>0&&(x.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=u.diffuseRoughnessMap,n(u.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),u.sheen>0&&(x.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),x.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(x.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,x.sheenColorMapTransform)),u.sheenRoughnessMap&&(x.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,x.sheenRoughnessMapTransform))),u.clearcoat>0&&(x.clearcoat.value=u.clearcoat,x.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(x.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,x.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(x.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yn&&x.clearcoatNormalScale.value.negate())),u.dispersion>0&&(x.dispersion.value=u.dispersion),u.retroreflectivity>0&&(x.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(x.iridescence.value=u.iridescence,x.iridescenceIOR.value=u.iridescenceIOR,x.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(x.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,x.iridescenceMapTransform)),u.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),u.transmission>0&&(x.transmission.value=u.transmission,x.transmissionSamplerMap.value=p.texture,x.transmissionSamplerSize.value.set(p.width,p.height),u.transmissionMap&&(x.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,x.transmissionMapTransform)),x.thickness.value=u.thickness,u.thicknessMap&&(x.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=u.attenuationDistance,x.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(x.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(x.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=u.specularIntensity,x.specularColor.value.copy(u.specularColor),u.specularColorMap&&(x.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,x.specularColorMapTransform)),u.specularIntensityMap&&(x.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,u){u.matcap&&(x.matcap.value=u.matcap)}function E(x,u){const p=e.get(u).light;x.referencePosition.value.setFromMatrixPosition(p.matrixWorld),x.nearDistance.value=p.shadow.camera.near,x.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function FA(t,e,n,i){let r={},s={};function a(p,y){const M=y.program;i.uniformBlockBinding(p,M,r[p.id])}function o(p,y){let M=r[p.id];M===void 0&&(v(p),M=l(p),r[p.id]=M,p.addEventListener("dispose",x));const R=y.program;i.updateUBOMapping(p,R);const b=e.render.frame;s[p.id]!==b&&(c(p),s[p.id]=b)}function l(p){const y=t.createBuffer(),M=p.__size,R=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,M,R),t.bindBuffer(t.UNIFORM_BUFFER,null),y}function c(p){const y=r[p.id],M=p.uniforms,R=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let b=0,g=M.length;b<g;b++){const T=M[b];if(Array.isArray(T))for(let O=0,N=T.length;O<N;O++)d(T[O],b,O,R);else d(T,b,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(p,y,M,R){if(f(p,y,M,R)===!0){const b=p.__offset,g=p.value;if(Array.isArray(g)){let T=0;for(let O=0;O<g.length;O++){const N=g[O],I=E(N,!0);h(N,p.__data,T),T+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else h(g,p.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,b,p.__data)}}function h(p,y,M){typeof p=="number"||typeof p=="boolean"?y[M]=p:p.isMatrix3?(y[M]=p.elements[0],y[M+1]=p.elements[1],y[M+2]=p.elements[2],y[M+3]=0,y[M+4]=p.elements[3],y[M+5]=p.elements[4],y[M+6]=p.elements[5],y[M+7]=0,y[M+8]=p.elements[6],y[M+9]=p.elements[7],y[M+10]=p.elements[8],y[M+11]=0):ArrayBuffer.isView(p)?y.set(p.subarray(0,y.length-M),M):p.toArray(y,M)}function f(p,y,M,R){const b=p.value,g=y+"_"+M;if(Array.isArray(b)){R[g]===void 0&&(R[g]=[]);const T=R[g];let O=!1;for(let N=0;N<b.length;N++)m(b[N],T,N)===!0&&(O=!0);return O}return m(b,R,g)}function m(p,y,M){if(y[M]===void 0)return typeof p=="number"||typeof p=="boolean"?y[M]=p:ArrayBuffer.isView(p)?y[M]=p.slice():y[M]=p.clone(),!0;{const R=y[M];if(typeof p=="number"||typeof p=="boolean"){if(R!==p)return y[M]=p,!0}else{if(ArrayBuffer.isView(p))return!0;if(R.equals(p)===!1)return R.copy(p),!0}}return!1}function v(p){const y=p.uniforms;let M=0;const R=16;for(let g=0,T=y.length;g<T;g++){const O=Array.isArray(y[g])?y[g]:[y[g]];for(let N=0,I=O.length;N<I;N++){const $=O[N],ee=Array.isArray($.value)?$.value:[$.value],L=Array.isArray(y[g])||Array.isArray($.value);let q=M;for(let G=0,X=ee.length;G<X;G++){const k=ee[G],H=E(k,L),ne=M%R,he=ne%H.boundary,Le=ne+he;M+=he,Le!==0&&R-Le<H.storage&&(M+=R-Le),G===0&&(q=M),M+=H.storage}const ie=$.type==="int"?Int32Array:$.type==="uint"?Uint32Array:Float32Array;$.__data=new ie((M-q)/Float32Array.BYTES_PER_ELEMENT),$.__offset=q}}const b=M%R;return b>0&&(M+=R-b),p.__size=M,p.__cache={},this}function E(p,y){const M={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(M.boundary=4,M.storage=4):p.isVector2?(M.boundary=8,M.storage=8):p.isVector3||p.isColor?(M.boundary=16,M.storage=12):p.isVector4?(M.boundary=16,M.storage=16):p.isMatrix3?(M.boundary=16,M.storage=48):p.isMatrix4?(M.boundary=16,M.storage=64):p.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(M.boundary=16,M.storage=p.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",p),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function x(p){const y=p.target;y.removeEventListener("dispose",x),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const p in r)t.deleteBuffer(r[p]);r={},s={}}return{bind:a,update:o,dispose:u}}const OA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function kA(){return oi===null&&(oi=new Rv(OA,16,16,Br,gi),oi.name="DFG_LUT",oi.minFilter=xn,oi.magFilter=xn,oi.wrapS=Ci,oi.wrapT=Ci,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class BA{constructor(e={}){const{canvas:n=sM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Un}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const E=m,x=new Set([Fh,Uh,Ih]),u=new Set([Un,mi,ro,Ws,Ph,Lh]),p=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let R=null,b=null;const g=[],T=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let I=!1,$=null,ee=null,L=null,q=null;this._outputColorSpace=Ln;let ie=0,G=0,X=null,k=-1,H=null;const ne=new St,he=new St;let Le=null;const te=new Xe(0);let ge=0,ye=n.width,Ne=n.height,ve=1,Ue=null,ht=null;const Pe=new St(0,0,ye,Ne),Ke=new St(0,0,ye,Ne);let Ze=!1;const He=new uc,Rt=new kh;let yt=!1,jt=!1;const it=new st,an=new Y,Mt=new St,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function Yt(){return X===null?ve:1}let F=i;function qt(w,P){return n.getContext(w,P)}let at,ot,xe,vt,U,fe,A,_,D,re,J,se,Q,V,B,ae,C,K,z,le,oe,ue,Ee;try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rh}`),n.addEventListener("webglcontextlost",Te,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",_e,!1),F===null){const P="webgl2";if(F=qt(P,w),F===null)throw qt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(w){throw n.removeEventListener("webglcontextlost",Te,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),Qe("WebGLRenderer: "+w.message),w}function De(){at=new Gw(F),at.init(),oe=new CA(F,at),ot=new Pw(F,at,e,oe),xe=new bA(F,at),ot.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),ee=F.createFramebuffer(),L=F.createFramebuffer(),q=F.createFramebuffer(),vt=new Xw(F),U=new hA,fe=new RA(F,at,xe,U,ot,oe,vt),A=new Hw(N),_=new $M(F),ue=new Cw(F,_),D=new Vw(F,_,vt,ue),re=new $w(F,D,_,ue,vt),K=new jw(F,ot,fe),B=new Lw(U),J=new dA(N,A,at,ot,ue,B),se=new UA(N,U),Q=new mA,V=new yA(at),C=new Rw(N,A,xe,re,v,l),ae=new AA(N,re,ot),Ee=new FA(F,vt,ot,xe),z=new Nw(F,at,vt),le=new Ww(F,at,vt),vt.programs=J.programs,N.capabilities=ot,N.extensions=at,N.properties=U,N.renderLists=Q,N.shadowMap=ae,N.state=xe,N.info=vt}E!==Un&&(O=new qw(E,n.width,n.height,o,r,s));const ce=new DA(N,F);this.xr=ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=at.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=at.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(w){w!==void 0&&(ve=w,this.setSize(ye,Ne,!1))},this.getSize=function(w){return w.set(ye,Ne)},this.setSize=function(w,P,Z=!0){if(ce.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=w,Ne=P,n.width=Math.floor(w*ve),n.height=Math.floor(P*ve),Z===!0&&(n.style.width=w+"px",n.style.height=P+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,w,P)},this.getDrawingBufferSize=function(w){return w.set(ye*ve,Ne*ve).floor()},this.setDrawingBufferSize=function(w,P,Z){ye=w,Ne=P,ve=Z,n.width=Math.floor(w*Z),n.height=Math.floor(P*Z),this.setViewport(0,0,w,P)},this.setEffects=function(w){if(E===Un){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let P=0;P<w.length;P++)if(w[P].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ne)},this.getViewport=function(w){return w.copy(Pe)},this.setViewport=function(w,P,Z,W){w.isVector4?Pe.set(w.x,w.y,w.z,w.w):Pe.set(w,P,Z,W),xe.viewport(ne.copy(Pe).multiplyScalar(Yt()).round())},this.getScissor=function(w){return w.copy(Ke)},this.setScissor=function(w,P,Z,W){w.isVector4?Ke.set(w.x,w.y,w.z,w.w):Ke.set(w,P,Z,W),xe.scissor(he.copy(Ke).multiplyScalar(Yt()).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(w){xe.setScissorTest(Ze=w)},this.setOpaqueSort=function(w){Ue=w},this.setTransparentSort=function(w){ht=w},this.getClearColor=function(w){return w.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(w=!0,P=!0,Z=!0){let W=0;if(w){let j=!1;if(X!==null){const me=X.texture.format;j=x.has(me)}if(j){const me=X.texture.type,Ae=u.has(me),pe=C.getClearColor(),Me=C.getClearAlpha(),Ce=pe.r,ke=pe.g,Ve=pe.b;Ae?(p[0]=Ce,p[1]=ke,p[2]=Ve,p[3]=Me,F.clearBufferuiv(F.COLOR,0,p)):(y[0]=Ce,y[1]=ke,y[2]=Ve,y[3]=Me,F.clearBufferiv(F.COLOR,0,y))}else W|=F.COLOR_BUFFER_BIT}P&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),$=w},this.dispose=function(){n.removeEventListener("webglcontextlost",Te,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),C.dispose(),Q.dispose(),V.dispose(),fe.dispose(),U.dispose(),A.dispose(),re.dispose(),D.dispose(),ue.dispose(),Ee.dispose(),J.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Xh),ce.removeEventListener("sessionend",jh),_r.stop()};function Te(w){w.preventDefault(),lc("WebGLRenderer: Context Lost."),I=!0}function Fe(){lc("WebGLRenderer: Context Restored."),I=!1;const w=vt.autoReset,P=ae.enabled,Z=ae.autoUpdate,W=ae.needsUpdate,j=ae.type;De(),vt.autoReset=w,ae.enabled=P,ae.autoUpdate=Z,ae.needsUpdate=W,ae.type=j}function _e(w){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function et(w){const P=w.target;P.removeEventListener("dispose",et),Dt(P)}function Dt(w){Bi(w),U.remove(w)}function Bi(w){const P=U.get(w).programs;P!==void 0&&(P.forEach(function(Z){J.releaseProgram(Z)}),w.isShaderMaterial&&J.releaseShaderCache(w))}this.renderBufferDirect=function(w,P,Z,W,j,me){P===null&&(P=kt);const Ae=j.isMesh&&j.matrixWorld.determinantAffine()<0,pe=qv(w,P,Z,W,j);xe.setMaterial(W,Ae);let Me=Z.index,Ce=1;if(W.wireframe===!0){if(Me=D.getWireframeAttribute(Z),Me===void 0)return;Ce=2}const ke=Z.drawRange,Ve=Z.attributes.position;let be=ke.start*Ce,We=(ke.start+ke.count)*Ce;me!==null&&(be=Math.max(be,me.start*Ce),We=Math.min(We,(me.start+me.count)*Ce)),Me!==null?(be=Math.max(be,0),We=Math.min(We,Me.count)):Ve!=null&&(be=Math.max(be,0),We=Math.min(We,Ve.count));const wt=We-be;if(wt<0||wt===1/0)return;ue.setup(j,W,pe,Z,Me);let lt,rt=z;if(Me!==null&&(lt=_.get(Me),rt=le,rt.setIndex(lt)),j.isMesh)W.wireframe===!0?(xe.setLineWidth(W.wireframeLinewidth*Yt()),rt.setMode(F.LINES)):rt.setMode(F.TRIANGLES);else if(j.isLine){let Kt=W.linewidth;Kt===void 0&&(Kt=1),xe.setLineWidth(Kt*Yt()),j.isLineSegments?rt.setMode(F.LINES):j.isLineLoop?rt.setMode(F.LINE_LOOP):rt.setMode(F.LINE_STRIP)}else j.isPoints?rt.setMode(F.POINTS):j.isSprite&&rt.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(at.get("WEBGL_multi_draw"))rt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,Re=j._multiDrawCounts,on=j._multiDrawCount,Je=Me?_.get(Me).bytesPerElement:1,Sr=U.get(W).currentProgram.getUniforms();for(let Zt=0;Zt<on;Zt++)Sr.setValue(F,"_gl_DrawID",Zt),rt.render(Kt[Zt]/Je,Re[Zt])}else if(j.isInstancedMesh)rt.renderInstances(be,wt,j.count);else if(Z.isInstancedBufferGeometry){const Kt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Re=Math.min(Z.instanceCount,Kt);rt.renderInstances(be,wt,Re)}else rt.render(be,wt)};function Wh(w,P,Z,W){$!==null&&w.isNodeMaterial&&$.setObject(W,w),yt===!0&&B.setState(w,Z,!1),w.transparent===!0&&w.side===Ai&&w.forceSinglePass===!1?(w.side=yn,w.needsUpdate=!0,ea(w,P,W),w.side=kr,w.needsUpdate=!0,ea(w,P,W),w.side=Ai):ea(w,P,W)}this.compile=function(w,P,Z=null){Z===null&&(Z=w),$!==null&&$.renderStart(w,P,Z),b=V.get(Z),b.init(P),T.push(b),Z.traverseVisible(function(j){j.isLight&&j.layers.test(P.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),w!==Z&&w.traverseVisible(function(j){j.isLight&&j.layers.test(P.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),b.setupLights(),$!==null&&$.updateLights(b.state.lightsArray),jt=this.localClippingEnabled,yt=B.init(this.clippingPlanes,jt),yt===!0&&B.setGlobalState(this.clippingPlanes,P),$!==null&&ae.render(b.state.shadowsArray,Z,P);const W=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const me=j.material;if(me)if(Array.isArray(me))for(let Ae=0;Ae<me.length;Ae++){const pe=me[Ae];Wh(pe,Z,P,j),W.add(pe)}else Wh(me,Z,P,j),W.add(me)}),b=T.pop(),$!==null&&$.renderEnd(),W},this.compileAsync=function(w,P,Z=null){const W=this.compile(w,P,Z);return new Promise(j=>{function me(){if(W.forEach(function(Ae){const Me=U.get(Ae).currentProgram;(Me===void 0||Me.isReady())&&W.delete(Ae)}),W.size===0){j(w);return}setTimeout(me,10)}at.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Ic=null;function $v(w){Ic&&Ic(w)}function Xh(){_r.stop()}function jh(){_r.start()}const _r=new Uv;_r.setAnimationLoop($v),typeof self<"u"&&_r.setContext(self),this.setAnimationLoop=function(w){Ic=w,ce.setAnimationLoop(w),w===null?_r.stop():_r.start()},ce.addEventListener("sessionstart",Xh),ce.addEventListener("sessionend",jh),this.render=function(w,P){if(P!==void 0&&P.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;$!==null&&$.renderStart(w,P);const Z=ce.enabled===!0&&ce.isPresenting===!0,W=O!==null&&(X===null||Z)&&O.begin(N,X);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(P),P=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(N,w,P,X),b=V.get(w,T.length),b.init(P),b.state.textureUnits=fe.getTextureUnits(),T.push(b),it.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?Rt.setFromArrayCamera(P):He.setFromProjectionMatrix(it,Jn,P.reversedDepth),jt=this.localClippingEnabled,yt=B.init(this.clippingPlanes,jt),R=Q.get(w,g.length),R.init(),g.push(R),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){const Ae=N.xr.getDepthSensingMesh();Ae!==null&&Uc(Ae,P,-1/0,N.sortObjects)}Uc(w,P,0,N.sortObjects),R.finish(),$!==null&&$.updateLights(b.state.lightsArray),N.sortObjects===!0&&R.sort(Ue,ht),$t=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,$t&&C.addToRenderList(R,w),this.info.autoReset===!0&&this.info.reset(),yt===!0&&B.beginShadows();const j=b.state.shadowsArray;if(ae.render(j,w,P),yt===!0&&B.endShadows(),(W&&O.hasRenderPass())===!1){const Ae=R.opaque,pe=R.transmissive;if(b.setupLights(),P.isArrayCamera){const Me=P.cameras;if(pe.length>0)for(let Ce=0,ke=Me.length;Ce<ke;Ce++){const Ve=Me[Ce];Yh(Ae,pe,w,Ve)}$t&&C.render(w);for(let Ce=0,ke=Me.length;Ce<ke;Ce++){const Ve=Me[Ce];$h(R,w,Ve,Ve.viewport)}}else pe.length>0&&Yh(Ae,pe,w,P),$t&&C.render(w),$h(R,w,P)}X!==null&&G===0&&(fe.updateMultisampleRenderTarget(X),fe.updateRenderTargetMipmap(X)),W&&O.end(N),w.isScene===!0&&w.onAfterRender(N,w,P),ue.resetDefaultState(),k=-1,H=null,T.pop(),T.length>0?(b=T[T.length-1],fe.setTextureUnits(b.state.textureUnits),yt===!0&&B.setGlobalState(N.clippingPlanes,b.state.camera)):b=null,g.pop(),g.length>0?R=g[g.length-1]:R=null,$!==null&&$.renderEnd()};function Uc(w,P,Z,W){if(w.visible===!1)return;if(w.layers.test(P.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(P);else if(w.isLight)b.pushLight(w),w.castShadow&&b.pushShadow(w);else if(w.isSprite){const Ae=P.isArrayCamera?Rt:He;if(!w.frustumCulled||w.intersectsFrustum(Ae)){W&&Mt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(it);const pe=re.update(w),Me=w.material;Me.visible&&R.push(w,pe,Me,Z,Mt.z,null,P)}}else if(w.isMesh||w.isLine||w.isPoints){const Ae=P.isArrayCamera?Rt:He;if(!w.frustumCulled||w.intersectsFrustum(Ae)){const pe=re.update(w),Me=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Mt.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Mt.copy(pe.boundingSphere.center)),Mt.applyMatrix4(w.matrixWorld).applyMatrix4(it)),Array.isArray(Me)){const Ce=pe.groups;for(let ke=0,Ve=Ce.length;ke<Ve;ke++){const be=Ce[ke],We=Me[be.materialIndex];We&&We.visible&&R.push(w,pe,We,Z,Mt.z,be,P)}}else Me.visible&&R.push(w,pe,Me,Z,Mt.z,null,P)}}}const me=w.children;for(let Ae=0,pe=me.length;Ae<pe;Ae++)Uc(me[Ae],P,Z,W)}function $h(w,P,Z,W){const{opaque:j,transmissive:me,transparent:Ae}=w;b.setupLightsView(Z),yt===!0&&B.setGlobalState(N.clippingPlanes,Z),W&&xe.viewport(ne.copy(W)),j.length>0&&po(j,P,Z),me.length>0&&po(me,P,Z),Ae.length>0&&po(Ae,P,Z),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Yh(w,P,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){const be=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new pi(1,1,{generateMipmaps:!0,type:be?gi:Un,minFilter:ir,samples:Math.max(4,ot.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}const me=b.state.transmissionRenderTarget[W.id],Ae=W.viewport||ne;me.setSize(Ae.z*N.transmissionResolutionScale,Ae.w*N.transmissionResolutionScale);const pe=N.getRenderTarget(),Me=N.getActiveCubeFace(),Ce=N.getActiveMipmapLevel();N.setRenderTarget(me),N.getClearColor(te),ge=N.getClearAlpha(),ge<1&&N.setClearColor(16777215,.5),N.clear(),$t&&C.render(Z);const ke=N.toneMapping;N.toneMapping=Pi;const Ve=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),yt===!0&&B.setGlobalState(N.clippingPlanes,W),po(w,Z,W),fe.updateMultisampleRenderTarget(me),fe.updateRenderTargetMipmap(me),at.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let We=0,wt=P.length;We<wt;We++){const lt=P[We],{object:rt,geometry:Kt,material:Re,group:on}=lt;if(Re.side===Ai&&rt.layers.test(W.layers)){const Je=Re.side;Re.side=yn,Re.needsUpdate=!0,qh(rt,Z,W,Kt,Re,on),Re.side=Je,Re.needsUpdate=!0,be=!0}}be===!0&&(fe.updateMultisampleRenderTarget(me),fe.updateRenderTargetMipmap(me))}N.setRenderTarget(pe,Me,Ce),N.setClearColor(te,ge),Ve!==void 0&&(W.viewport=Ve),N.toneMapping=ke}function po(w,P,Z){const W=P.isScene===!0?P.overrideMaterial:null;for(let j=0,me=w.length;j<me;j++){const Ae=w[j],{object:pe,geometry:Me,group:Ce}=Ae;let ke=Ae.material;ke.allowOverride===!0&&W!==null&&(ke=W),pe.layers.test(Z.layers)&&qh(pe,P,Z,Me,ke,Ce)}}function qh(w,P,Z,W,j,me){$!==null&&j.isNodeMaterial&&$.setObject(w,j),w.onBeforeRender(N,P,Z,W,j,me),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(N,P,Z,W,w,me),j.transparent===!0&&j.side===Ai&&j.forceSinglePass===!1?(j.side=yn,j.needsUpdate=!0,N.renderBufferDirect(Z,P,W,j,w,me),j.side=kr,j.needsUpdate=!0,N.renderBufferDirect(Z,P,W,j,w,me),j.side=Ai):N.renderBufferDirect(Z,P,W,j,w,me),w.onAfterRender(N,P,Z,W,j,me)}function Kh(w){let P=0;for(const Z of w)Z.texture!==null&&P++;return P}function ea(w,P,Z){P.isScene!==!0&&(P=kt);const W=U.get(w),j=b.state.lights,me=b.state.shadowsArray,Ae=j.state.version,pe=J.getParameters(w,j.state,me,P,Z,b.state.lightProbeGridArray),Me=J.getProgramCacheKey(pe);let Ce=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?P.environment:null,W.fog=P.fog;const ke=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=A.get(w.envMap||W.environment,ke),W.envMapRotation=W.environment!==null&&w.envMap===null?P.environmentRotation:w.envMapRotation,Ce===void 0&&(w.addEventListener("dispose",et),Ce=new Map,W.programs=Ce,W.programVariants=new Map);let Ve=Ce.get(Me);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===Ae)return Qh(w,pe),Ve}else pe.uniforms=J.getUniforms(w),$!==null&&w.isNodeMaterial&&$.build(w,Z,pe),w.onBeforeCompile(pe,N),Ve=J.acquireProgram(pe,Me),Ce.set(Me,Ve),W.uniforms=pe.uniforms;const be=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=B.uniform),Qh(w,pe),W.needsLights=Zv(w),W.lightsStateVersion=Ae,W.needsLights&&(be.ambientLightColor.value=j.state.ambient,be.lightProbe.value=j.state.probe,be.sunLights.value=j.state.sun,be.sunLightShadows.value=j.state.sunShadow,be.directionalLights.value=j.state.directional,be.directionalLightShadows.value=j.state.directionalShadow,be.spotLights.value=j.state.spot,be.spotLightShadows.value=j.state.spotShadow,be.rectAreaLights.value=j.state.rectArea,be.ltc_1.value=j.state.rectAreaLTC1,be.ltc_2.value=j.state.rectAreaLTC2,be.pointLights.value=j.state.point,be.pointLightShadows.value=j.state.pointShadow,be.hemisphereLights.value=j.state.hemi,be.sunShadowMatrix.value=j.state.sunShadowMatrix,be.sunShadowCascade.value=j.state.sunShadowCascade,be.directionalShadowMatrix.value=j.state.directionalShadowMatrix,be.spotLightMatrix.value=j.state.spotLightMatrix,be.spotLightMap.value=j.state.spotLightMap,be.pointShadowMatrix.value=j.state.pointShadowMatrix),W.numLightProbeGrids=Kh(b.state.lightProbeGridArray),W.currentProgram=Ve,W.uniformsList=null,Ve}function Yv(w,P,Z,W,j){const me=U.get(w),Ae=me.currentProgram.id+","+W+","+j;let pe=me.programVariants.get(Ae);return pe===void 0?(pe=ea(w,P,Z),me.programVariants.set(Ae,pe)):(me.currentProgram=pe,me.uniformsList=null,me.outputColorSpace=W,me.toneMapping=j),pe}function Zh(w){if(w.uniformsList===null){const P=w.currentProgram.getUniforms();w.uniformsList=Pl.seqWithValue(P.seq,w.uniforms)}return w.uniformsList}function Qh(w,P){const Z=U.get(w);Z.outputColorSpace=P.outputColorSpace,Z.batching=P.batching,Z.batchingColor=P.batchingColor,Z.instancing=P.instancing,Z.instancingColor=P.instancingColor,Z.instancingMorph=P.instancingMorph,Z.skinning=P.skinning,Z.morphTargets=P.morphTargets,Z.morphNormals=P.morphNormals,Z.morphColors=P.morphColors,Z.morphTargetsCount=P.morphTargetsCount,Z.numClippingPlanes=P.numClippingPlanes,Z.numIntersection=P.numClipIntersection,Z.vertexAlphas=P.vertexAlphas,Z.vertexTangents=P.vertexTangents,Z.toneMapping=P.toneMapping}function qv(w,P,Z,W,j){P.isScene!==!0&&(P=kt),fe.resetTextureUnits();const me=P.fog,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?P.environment:null,pe=X===null?N.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:je.workingColorSpace,Me=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ce=A.get(W.envMap||Ae,Me),ke=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ve=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),be=!!Z.morphAttributes.position,We=!!Z.morphAttributes.normal,wt=!!Z.morphAttributes.color;let lt=Pi;W.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(lt=N.toneMapping);const rt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Kt=rt!==void 0?rt.length:0,Re=U.get(W),on=b.state.lights;if(yt===!0&&(jt===!0||w!==H)){const pt=w===H&&W.id===k;B.setState(W,w,pt)}let Je=!1,Sr=!1;W.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==on.state.version||j.isBatchedMesh&&Re.batching===!1||!j.isBatchedMesh&&Re.batching===!0||j.isBatchedMesh&&Re.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Re.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Re.instancing===!1||!j.isInstancedMesh&&Re.instancing===!0||j.isSkinnedMesh&&Re.skinning===!1||!j.isSkinnedMesh&&Re.skinning===!0||j.isInstancedMesh&&Re.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Re.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Re.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Re.instancingMorph===!1&&j.morphTexture!==null||Re.envMap!==Ce||W.fog===!0&&Re.fog!==me||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==B.numPlanes||Re.numIntersection!==B.numIntersection)||Re.vertexAlphas!==ke||Re.vertexTangents!==Ve||Re.morphTargets!==be||Re.morphNormals!==We||Re.morphColors!==wt||Re.morphTargetsCount!==Kt||Re.numLightProbeGrids!==Kh(b.state.lightProbeGridArray)?Je=!0:(Re.outputColorSpace!==pe||Re.toneMapping!==lt)&&(Sr=!0):(Je=!0,Re.__version=W.version);let Zt=Re.currentProgram;(Je===!0||Sr===!0)&&(Zt=Sr===!0?Yv(W,P,j,pe,lt):ea(W,P,j),$&&W.isNodeMaterial&&$.onUpdateProgram(W,Zt,Re));let mo=!1,zi=!1,yr=!1;const Ye=Zt.getUniforms(),Bt=Re.uniforms;if(xe.useProgram(Zt.program)&&(mo=!0,zi=!0,yr=!0),W.id!==k&&(k=W.id,zi=!0),mo||H!==w){xe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ye.setValue(F,"projectionMatrix",w.projectionMatrix),Ye.setValue(F,"viewMatrix",w.matrixWorldInverse);const It=Ye.map.cameraPosition;It!==void 0&&It.setValue(F,an.setFromMatrixPosition(w.matrixWorld)),ot.logarithmicDepthBuffer&&Ye.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ye.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),H!==w&&(H=w,zi=!0,yr=!0)}if(Re.needsLights&&(on.state.sunShadowMap.length>0&&Ye.setValue(F,"sunShadowMap",on.state.sunShadowMap,fe),on.state.directionalShadowMap.length>0&&Ye.setValue(F,"directionalShadowMap",on.state.directionalShadowMap,fe),on.state.spotShadowMap.length>0&&Ye.setValue(F,"spotShadowMap",on.state.spotShadowMap,fe),on.state.pointShadowMap.length>0&&Ye.setValue(F,"pointShadowMap",on.state.pointShadowMap,fe)),j.isSkinnedMesh){Ye.setOptional(F,j,"bindMatrix"),Ye.setOptional(F,j,"bindMatrixInverse");const pt=j.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),Ye.setValue(F,"boneTexture",pt.boneTexture,fe))}j.isBatchedMesh&&(Ye.setOptional(F,j,"batchingTexture"),Ye.setValue(F,"batchingTexture",j._matricesTexture,fe),Ye.setOptional(F,j,"batchingIdTexture"),Ye.setValue(F,"batchingIdTexture",j._indirectTexture,fe),Ye.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Ye.setValue(F,"batchingColorTexture",j._colorsTexture,fe));const Vn=Z.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&K.update(j,Z,Zt),(zi||Re.receiveShadow!==j.receiveShadow)&&(Re.receiveShadow=j.receiveShadow,Ye.setValue(F,"receiveShadow",j.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&P.environment!==null&&(Bt.envMapIntensity.value=P.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=kA()),zi){if(Ye.setValue(F,"toneMappingExposure",N.toneMappingExposure),Re.needsLights&&Kv(Bt,yr),me&&W.fog===!0&&se.refreshFogUniforms(Bt,me),se.refreshMaterialUniforms(Bt,W,ve,Ne,b.state.transmissionRenderTarget[w.id]),Re.needsLights&&Re.numLightProbeGrids>0){const pt=M;let It=0;for(const xi of b.state.lightProbeGridArray)xi.texture!==null&&(pt.textures[It]=xi.texture,pt.min[It]=xi.boundingBox.min,pt.max[It]=xi.boundingBox.max,pt.resolution[It]=xi.resolution,It++);for(const xi in pt)pt[xi].length=It;Bt.probesSH.value=pt.textures,Bt.probesMin.value=pt.min,Bt.probesMax.value=pt.max,Bt.probesResolution.value=pt.resolution}Pl.upload(F,Zh(Re),Bt,fe)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Pl.upload(F,Zh(Re),Bt,fe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ye.setValue(F,"center",j.center),Ye.setValue(F,"modelViewMatrix",j.modelViewMatrix),Ye.setValue(F,"normalMatrix",j.normalMatrix),Ye.setValue(F,"modelMatrix",j.matrixWorld),W.uniformsGroups!==void 0){const pt=W.uniformsGroups;for(let It=0,xi=pt.length;It<xi;It++){const ep=pt[It];Ee.update(ep,Zt),Ee.bind(ep,Zt)}}return Zt}function Kv(w,P){w.ambientLightColor.needsUpdate=P,w.lightProbe.needsUpdate=P,w.sunLights.needsUpdate=P,w.sunLightShadows.needsUpdate=P,w.directionalLights.needsUpdate=P,w.directionalLightShadows.needsUpdate=P,w.pointLights.needsUpdate=P,w.pointLightShadows.needsUpdate=P,w.spotLights.needsUpdate=P,w.spotLightShadows.needsUpdate=P,w.rectAreaLights.needsUpdate=P,w.hemisphereLights.needsUpdate=P}function Zv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(w,P,Z){const W=U.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),U.get(w.texture).__webglTexture=P,U.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,P){const Z=U.get(w);Z.__webglFramebuffer=P,Z.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(w,P=0,Z=0){X=w,ie=P,G=Z;let W=null,j=!1,me=!1;if(w){const pe=U.get(w);if(pe.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(F.FRAMEBUFFER,pe.__webglFramebuffer),ne.copy(w.viewport),he.copy(w.scissor),Le=w.scissorTest,xe.viewport(ne),xe.scissor(he),xe.setScissorTest(Le),k=-1;return}else if(pe.__webglFramebuffer===void 0)fe.setupRenderTarget(w);else if(pe.__hasExternalTextures)fe.rebindTextures(w,U.get(w.texture).__webglTexture,U.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ke=w.depthTexture;if(pe.__boundDepthTexture!==ke){if(ke!==null&&U.has(ke)&&(w.width!==ke.image.width||w.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(w)}}const Me=w.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(me=!0);const Ce=U.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ce[P])?W=Ce[P][Z]:W=Ce[P],j=!0):w.samples>0&&fe.useMultisampledRTT(w)===!1?W=U.get(w).__webglMultisampledFramebuffer:Array.isArray(Ce)?W=Ce[Z]:W=Ce,ne.copy(w.viewport),he.copy(w.scissor),Le=w.scissorTest}else ne.copy(Pe).multiplyScalar(ve).floor(),he.copy(Ke).multiplyScalar(ve).floor(),Le=Ze;if(Z!==0&&(W=ee),xe.bindFramebuffer(F.FRAMEBUFFER,W)&&xe.drawBuffers(w,W),xe.viewport(ne),xe.scissor(he),xe.setScissorTest(Le),j){const pe=U.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+P,pe.__webglTexture,Z)}else if(me){const pe=P;for(let Me=0;Me<w.textures.length;Me++){const Ce=U.get(w.textures[Me]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Me,Ce.__webglTexture,Z,pe)}}else if(w!==null&&Z!==0){const pe=U.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pe.__webglTexture,Z)}k=-1};function Jh(w){const P=U.get(w);return(P.__readFormat!==w.format||P.__readType!==w.type)&&(P.__readFormat=w.format,P.__readType=w.type,P.__formatReadable=ot.textureFormatReadable(w.format),P.__typeReadable=ot.textureTypeReadable(w.type)),P}this.readRenderTargetPixels=function(w,P,Z,W,j,me,Ae,pe=0){if(!(w&&w.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=U.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Me=Me[Ae],Array.isArray(Me)&&(Me=Me[0])),Me){xe.bindFramebuffer(F.FRAMEBUFFER,Me);try{const Ce=w.textures[pe],ke=Ce.format,Ve=Ce.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe);const be=Jh(Ce);if(be.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=w.width-W&&Z>=0&&Z<=w.height-j&&F.readPixels(P,Z,W,j,oe.convert(ke),oe.convert(Ve),me)}finally{const Ce=X!==null?U.get(X).__webglFramebuffer:null;xe.bindFramebuffer(F.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(w,P,Z,W,j,me,Ae,pe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=U.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(Me=Me[Ae],Array.isArray(Me)&&(Me=Me[0])),Me)if(P>=0&&P<=w.width-W&&Z>=0&&Z<=w.height-j){xe.bindFramebuffer(F.FRAMEBUFFER,Me);const Ce=w.textures[pe],ke=Ce.format,Ve=Ce.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe);const be=Jh(Ce);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,We),F.bufferData(F.PIXEL_PACK_BUFFER,me.byteLength,F.STREAM_READ),F.readPixels(P,Z,W,j,oe.convert(ke),oe.convert(Ve),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const wt=X!==null?U.get(X).__webglFramebuffer:null;xe.bindFramebuffer(F.FRAMEBUFFER,wt);const lt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await aM(F,lt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,We),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,me),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(We),F.deleteSync(lt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,P=null,Z=0){const W=Math.pow(2,-Z),j=Math.floor(w.image.width*W),me=Math.floor(w.image.height*W),Ae=P!==null?P.x:0,pe=P!==null?P.y:0;fe.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,Ae,pe,j,me),xe.unbindTexture()},this.copyTextureToTexture=function(w,P,Z=null,W=null,j=0,me=0){let Ae,pe,Me,Ce,ke,Ve,be,We,wt;const lt=w.isCompressedTexture?w.mipmaps[me]:w.image;if(Z!==null)Ae=Z.max.x-Z.min.x,pe=Z.max.y-Z.min.y,Me=Z.isBox3?Z.max.z-Z.min.z:1,Ce=Z.min.x,ke=Z.min.y,Ve=Z.isBox3?Z.min.z:0;else{const Ye=Math.pow(2,-j);Ae=Math.floor(lt.width*Ye),pe=Math.floor(lt.height*Ye),w.isDataArrayTexture?Me=lt.depth:w.isData3DTexture?Me=Math.floor(lt.depth*Ye):Me=1,Ce=0,ke=0,Ve=0}W!==null?(be=W.x,We=W.y,wt=W.z):(be=0,We=0,wt=0);const rt=oe.convert(P.format),Kt=oe.convert(P.type);let Re;P.isData3DTexture?(fe.setTexture3D(P,0),Re=F.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(fe.setTexture2DArray(P,0),Re=F.TEXTURE_2D_ARRAY):(fe.setTexture2D(P,0),Re=F.TEXTURE_2D),xe.activeTexture(F.TEXTURE0),xe.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,P.flipY),xe.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),xe.pixelStorei(F.UNPACK_ALIGNMENT,P.unpackAlignment);const on=xe.getParameter(F.UNPACK_ROW_LENGTH),Je=xe.getParameter(F.UNPACK_IMAGE_HEIGHT),Sr=xe.getParameter(F.UNPACK_SKIP_PIXELS),Zt=xe.getParameter(F.UNPACK_SKIP_ROWS),mo=xe.getParameter(F.UNPACK_SKIP_IMAGES);xe.pixelStorei(F.UNPACK_ROW_LENGTH,lt.width),xe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,lt.height),xe.pixelStorei(F.UNPACK_SKIP_PIXELS,Ce),xe.pixelStorei(F.UNPACK_SKIP_ROWS,ke),xe.pixelStorei(F.UNPACK_SKIP_IMAGES,Ve);const zi=w.isDataArrayTexture||w.isData3DTexture,yr=P.isDataArrayTexture||P.isData3DTexture;if(w.isDepthTexture){const Ye=U.get(w),Bt=U.get(P),Vn=U.get(Ye.__renderTarget),pt=U.get(Bt.__renderTarget);xe.bindFramebuffer(F.READ_FRAMEBUFFER,Vn.__webglFramebuffer),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let It=0;It<Me;It++)zi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,U.get(w).__webglTexture,j,Ve+It),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,U.get(P).__webglTexture,me,wt+It)),F.blitFramebuffer(Ce,ke,Ce+Ae,ke+pe,be,We,be+Ae,We+pe,F.DEPTH_BUFFER_BIT,F.NEAREST);xe.bindFramebuffer(F.READ_FRAMEBUFFER,null),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||U.has(w)){const Ye=U.get(w),Bt=U.get(P);xe.bindFramebuffer(F.READ_FRAMEBUFFER,L),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,q);for(let Vn=0;Vn<Me;Vn++)zi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ye.__webglTexture,j,Ve+Vn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ye.__webglTexture,j),yr?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Bt.__webglTexture,me,wt+Vn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Bt.__webglTexture,me),j!==0?F.blitFramebuffer(Ce,ke,Ce+Ae,ke+pe,be,We,be+Ae,We+pe,F.COLOR_BUFFER_BIT,F.NEAREST):yr?F.copyTexSubImage3D(Re,me,be,We,wt+Vn,Ce,ke,Ae,pe):F.copyTexSubImage2D(Re,me,be,We,Ce,ke,Ae,pe);xe.bindFramebuffer(F.READ_FRAMEBUFFER,null),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else yr?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(Re,me,be,We,wt,Ae,pe,Me,rt,Kt,lt.data):P.isCompressedArrayTexture?F.compressedTexSubImage3D(Re,me,be,We,wt,Ae,pe,Me,rt,lt.data):F.texSubImage3D(Re,me,be,We,wt,Ae,pe,Me,rt,Kt,lt):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,me,be,We,Ae,pe,rt,Kt,lt.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,me,be,We,lt.width,lt.height,rt,lt.data):F.texSubImage2D(F.TEXTURE_2D,me,be,We,Ae,pe,rt,Kt,lt);xe.pixelStorei(F.UNPACK_ROW_LENGTH,on),xe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Je),xe.pixelStorei(F.UNPACK_SKIP_PIXELS,Sr),xe.pixelStorei(F.UNPACK_SKIP_ROWS,Zt),xe.pixelStorei(F.UNPACK_SKIP_IMAGES,mo),me===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&F.generateMipmap(Re),xe.unbindTexture()},this.initRenderTarget=function(w){U.get(w).__webglFramebuffer===void 0&&fe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?fe.setTextureCube(w,0):w.isData3DTexture?fe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?fe.setTexture2DArray(w,0):fe.setTexture2D(w,0),xe.unbindTexture()},this.resetState=function(){ie=0,G=0,X=null,xe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}function zA(){const[t,e]=Ht.useState(!1);return Ht.useEffect(()=>{const n=window.matchMedia("(prefers-reduced-motion: reduce)"),i=()=>e(n.matches);return i(),n.addEventListener("change",i),()=>n.removeEventListener("change",i)},[]),t}const At={background:"#000000",topRadius:380,waistRadius:53,waistPosition:50,bottomRadius:1150,twist:3,zoom:75,speed:10,direction:"right",lineOptions:{count:240,color:"#ffffff",glow:10},dots:!0,dotOptions:{count:8e3,size:20,color:"#ffffff",glow:10,flicker:10},comets:!0,cometOptions:{count:10,speed:6,color:"#F9731A",glow:6,tail:19,delay:8,collide:6},repel:!1,repelOptions:{radius:60,strength:10}},Oa=Math.PI*2,ku=60,Bu=1024,ds=400,zu=.008,ol=.15,ka=10,jv=67,Hu=t=>Zi(2*jv-t,1,175),HA=1,GA=4.2,VA=.15,WA=1,XA=1e3,fg=2,dg=.5,jA=9,$A=11,YA=1.8,qA=5,hg=1.2,KA=.8,ZA=2.5,QA=.04,Gu=16,Vu=.03,Wu=.95,pg=.1,mg=.8,gg=1.6,xg=.4,vg=6,_g=.6,Sg=1.3,JA=8,yg=1/30,hs={strandStart:0,strandEnd:2,dotStart:1.2,dotEnd:3,cometStart:3,cometEnd:5},eb=.45,Zi=(t,e,n)=>Math.min(Math.max(t,e),n);function Xu(t,e,n){if(t<=e)return 0;if(t>=n)return 1;const i=(t-e)/(n-e);return 1-(1-i)*(1-i)*(1-i)}function ju(t){const e=t.length,n=[];for(let r=0;r<e-1;r++)n[r]=(t[r+1][1]-t[r][1])/(t[r+1][0]-t[r][0]);const i=[n[0]];for(let r=1;r<e-1;r++)i[r]=n[r-1]*n[r]<=0?0:(n[r-1]+n[r])/2;i[e-1]=n[e-2];for(let r=0;r<e-1;r++){if(Math.abs(n[r])<1e-12){i[r]=i[r+1]=0;continue}const s=i[r]/n[r],a=i[r+1]/n[r],o=s*s+a*a;if(o>9){const l=3/Math.sqrt(o);i[r]=l*s*n[r],i[r+1]=l*a*n[r]}}return r=>{if(r<=t[0][0])return t[0][1];if(r>=t[e-1][0])return t[e-1][1];let s=0;for(;s<e-2&&t[s+1][0]<r;)s++;const a=t[s+1][0]-t[s][0],o=(r-t[s][0])/a,l=o*o,c=l*o;return(2*c-3*l+1)*t[s][1]+(c-2*l+o)*a*i[s]+(-2*c+3*l)*t[s+1][1]+(c-l)*a*i[s+1]}}function $u(t){const e=new Float32Array(Bu);for(let n=0;n<Bu;n++)e[n]=t(n/(Bu-1));return e}function Yu(t,e){if(e<=0)return t[0];const n=t.length-1;if(e>=1)return t[n];const i=e*n,r=i|0;return t[r]+(t[r+1]-t[r])*(i-r)}function tb(t){const e=Zi(t.waistAt,.08,.92),n=t.floorRadius,i=t.crownRadius,r=t.twist*Oa,s=$u(ju([[0,n],[.24*e,n*.667],[.5*e,n*.3],[.76*e,n*.08],[e,t.waistRadius],[e+.3*(1-e),i*.2],[e+.6*(1-e),i*.44],[1,i]])),a=$u(ju([[0,0],[.1,.2],[.2,.8],[.35,2],[.5,ka*.38],[.75,ka*.7],[1,ka]])),o=$u(ju([[0,0],[.15,.15*r],[.25,.25*r],[.45,.55*r],[.6,.7*r],[.8,.88*r],[1,r]]));return{writePoint(l,c,d,h,f,m,v,E){const x=Yu(s,d),u=Yu(a,d),p=Yu(o,d)+h+f,y=x+Math.sin(d*25+v+E*.3)*m*x;l[c]=Math.cos(p)*y,l[c+1]=u,l[c+2]=Math.sin(p)*y},lane:(l,c)=>l/c*Oa}}function nb(t,e,n){const i=new BA({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"});i.setClearColor(0,0),i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),i.toneMapping=Ch,i.toneMappingExposure=1.25;const r=new EM,s=new Zn(Hu(n.current.zoom),1,.1,500),a=new Ta;r.add(a);const o={uMouse:{value:new ze(0,0)},uAspect:{value:1},uRadius:{value:.2},uStrength:{value:0}},l=U=>(U.onBeforeCompile=fe=>{fe.uniforms.uMouse=o.uMouse,fe.uniforms.uAspect=o.uAspect,fe.uniforms.uRadius=o.uRadius,fe.uniforms.uStrength=o.uStrength,fe.vertexShader=fe.vertexShader.replace("void main() {",`
                    uniform vec2 uMouse;
                    uniform float uAspect;
                    uniform float uRadius;
                    uniform float uStrength;
                    void main() {
                    `).replace("#include <fog_vertex>",`
                    #include <fog_vertex>
                    if (uStrength > 0.0 && uRadius > 0.0 && gl_Position.w > 0.0) {
                        vec2 ndc = gl_Position.xy / gl_Position.w;
                        vec2 off = ndc - uMouse;
                        float dist = length(off * vec2(uAspect, 1.0));
                        float f = uStrength * exp(-(dist * dist) / (2.0 * uRadius * uRadius));
                        float m = length(off);
                        if (m > 1e-4) {
                            ndc += (off / m) * f;
                            gl_Position.xy = ndc * gl_Position.w;
                        }
                    }
                    `)},U);let c,d=[];const h=U=>(d.push(U),U);let f=[],m=new Float32Array(0),v=new Float32Array(0),E=null,x=[],u=0,p=null,y=new Float32Array(0),M=new Float32Array(0),R=new Float32Array(0),b=new Float32Array(0),g=new Float32Array(0),T=new Float32Array(0),O=new Float32Array(0),N=new Float32Array(0),I=new Float32Array(0),$=!1,ee=[],L=null,q=[],ie=!1;const G=new st,X=new Y,k=new Y,H={strand:new Xe,dot:new Xe,comet:new Xe};let ne={line:"",dot:"",comet:""};function he(U){if(U.lineColor!==ne.line&&(H.strand.set(U.lineColor),ne.line=U.lineColor),U.dotColor!==ne.dot&&(H.dot.set(U.dotColor),ne.dot=U.dotColor),U.cometColor!==ne.comet){H.comet.set(U.cometColor),ne.comet=U.cometColor;for(const fe of ee)fe.head.material.color.setRGB(H.comet.r*1.2,H.comet.g*1.2,H.comet.b*1.2)}}function Le(U,fe){const A=document.createElement("canvas");A.width=A.height=U;const _=A.getContext("2d");if(_){const re=_.createRadialGradient(U/2,U/2,0,U/2,U/2,U/2);for(const[J,se]of fe)re.addColorStop(J,se);_.fillStyle=re,_.fillRect(0,0,U,U)}const D=new rn(A);return D.needsUpdate=!0,D}function te(){const U=n.current;for(let Q=a.children.length-1;Q>=0;Q--)a.remove(a.children[Q]);for(const Q of d)Q.dispose();d=[],c=tb(U),s.fov=Hu(U.zoom),s.updateProjectionMatrix(),he(U);const fe=Math.max(3,Math.round(U.lineCount)),A=ds-1,_=fe*A*2;m=new Float32Array(_*3),v=new Float32Array(_*3),E=h(new ri),E.setAttribute("position",new An(m,3).setUsage(Yr)),E.setAttribute("color",new An(v,3).setUsage(Yr));const D=h(l(new Pd({vertexColors:!0,transparent:!0,opacity:.5,blending:bs,depthWrite:!1}))),re=new FM(E,D);re.frustumCulled=!1,a.add(re),f=[];for(let Q=0;Q<fe;Q++)f.push({lane:c.lane(Q,fe),speed:.95+Math.random()*.1,pulse:Math.random()*Oa,wobblePhase:Math.random()*Oa,from:0,to:1,bright:.5,offset:Q*A*2*3,pts:new Float32Array(ds*3),cols:new Float32Array(ds*3)});u=U.showDots?Math.max(0,Math.round(U.dotCount)):0,x=[];for(let Q=0;Q<u;Q++){const V=Math.random()<.5?.2+Math.random()*.4:.05+Math.random()*.9,B=Math.floor(Math.random()*f.length);x.push({s:V,lane:f[B].lane,strand:B,pulse:Math.random()*Oa,flickerRate:.15+Math.random()*4.5,bright:.04+Math.random()**1.5*.96})}if(M=new Float32Array(u*3),R=new Float32Array(u*3),b=new Float32Array(u*3),g=new Float32Array(u).fill(1),T=new Float32Array(u),O=new Float32Array(u),N=new Float32Array(u),I=new Float32Array(u).fill(1),y=new Float32Array(u*3),$=!1,u>0){const Q=h(new fo(1,1)),V=h(l(new bv({color:16777215,transparent:!0,opacity:.9,blending:bs,depthWrite:!1})));p=new IM(Q,V,u),p.instanceMatrix.setUsage(Yr),p.instanceColor=new Nd(y,3),p.instanceColor.setUsage(Yr),p.frustumCulled=!1,a.add(p)}else p=null;q=[];for(let Q=0;Q<Gu;Q++)q.push({active:!1,x:0,y:0,z:0,at:0,amp:1});ie=!1,L=h(Le(32,[[0,"rgba(255,255,255,0.9)"],[.3,"rgba(255,120,255,0.4)"],[.7,"rgba(200,50,200,0.08)"],[1,"rgba(0,0,0,0)"]]));const J=U.showComets?Math.max(0,Math.round(U.cometCount)):0,se=Math.max(2,Math.round(U.cometTail));ee=[];for(let Q=0;Q<J;Q++){const V=new Float32Array(se*3),B=new Float32Array(se*3),ae=h(new ri);ae.setAttribute("position",new An(V,3).setUsage(Yr)),ae.setAttribute("color",new An(B,3).setUsage(Yr));const C=h(l(new Pd({vertexColors:!0,transparent:!0,opacity:.9,blending:bs,depthWrite:!1}))),K=new Cv(ae,C);K.frustumCulled=!1;const z=h(new wv({map:L,transparent:!0,opacity:0,blending:bs,depthWrite:!1,color:new Xe(H.comet.r*1.2,H.comet.g*1.2,H.comet.b*1.2)})),le=new PM(z);le.scale.set(.35,.35,1),a.add(K),a.add(le);const oe=f[Math.floor(Math.random()*f.length)],ue=U.cometSpeed*(.7+Math.random()*.6);ee.push({bright:.7+Math.random()*.3,lane:oe.lane,speed:ue,pulse:oe.speed,wobblePhase:oe.wobblePhase,base:ue,boost:0,boostMul:1,racing:!1,s:0,idle:0,idleFor:.4+Q/J*U.cometDelay,trail:V,trailCol:B,geo:ae,line:K,head:le})}an=0,Ue()}const ge=ka/2/Math.tan(jv*Math.PI/180/2),ye=new Y(3.4,-.6,10).normalize(),Ne=new Y(0,ka/2,0);s.position.copy(Ne).addScaledVector(ye,ge),s.lookAt(Ne);let ve=1;function Ue(){const U=n.current,fe=e.clientWidth||1,A=e.clientHeight||1;ve=A,i.setSize(fe,A,!1),s.aspect=fe/A,s.updateProjectionMatrix(),o.uAspect.value=fe/A,o.uRadius.value=Zi(U.repelRadius/(A/2),.01,3),U.running||i.render(r,s)}const ht=new ResizeObserver(Ue);let Pe=0;const Ke=U=>{const fe=n.current,A=e.getBoundingClientRect();!A.width||!A.height||(o.uMouse.value.set((U.clientX-A.left)/A.width*2-1,-((U.clientY-A.top)/A.height*2-1)),Pe=fe.hoverRepel&&fe.running?Zi(fe.repelStrength/100,0,1)*eb:0)},Ze=()=>{Pe=0};e.addEventListener("pointermove",Ke),e.addEventListener("pointerleave",Ze),e.addEventListener("pointercancel",Ze);function He(U,fe,A,_,D){ie=!0;let re=0,J=1/0;for(let se=0;se<Gu;se++){if(!q[se].active){re=se;break}q[se].at<J&&(J=q[se].at,re=se)}q[re]={active:!0,x:U,y:fe,z:A,at:_,amp:D}}function Rt(U,fe,A,_,D,re,J){let se=0,Q=0,V=0,B=!1;for(let ae=0;ae<Gu;ae++){const C=q[ae];if(!C.active)continue;const K=_-C.at;if(K>ZA){C.active=!1;continue}B=!0;const z=U-C.x,le=fe-C.y,oe=A-C.z,ue=Math.sqrt(z*z+le*le+oe*oe);if(ue<.001||ue>J*1.5)continue;const Ee=Math.abs(ue-qA*K);if(Ee>hg)continue;const De=Math.cos(Ee/hg*Math.PI/2),ce=Math.exp(-K/KA),Te=1/Math.max(ue,.3),Fe=dg*C.amp*QA*De*ce*Te;se+=z/ue*Fe,Q+=le/ue*Fe,V+=oe/ue*Fe}B||(ie=!1),D[re]+=se,D[re+1]+=Q,D[re+2]+=V}function yt(U,fe,A){$=!0;const _=M[U*3],D=M[U*3+1],re=M[U*3+2];He(_,D,re,fe,A);const J=fg,se=J*J;for(let Q=0;Q<u;Q++){const V=M[Q*3]-_,B=M[Q*3+1]-D,ae=M[Q*3+2]-re,C=V*V+B*B+ae*ae;if(C>se||C<1e-4)continue;const K=Math.sqrt(C),z=1-K/J,le=dg*A*z*z/Math.max(K,.1);b[Q*3]+=V*le,b[Q*3+1]+=B*le,b[Q*3+2]+=ae*le;const oe=1+(YA-1)*A*z*z;oe>g[Q]&&(g[Q]=oe,T[Q]=0)}}function jt(U){let fe=!1;for(let A=0;A<u;A++){const _=A*3;for(let se=0;se<3;se++){const Q=-50*R[_+se]-jA*b[_+se];b[_+se]+=Q*U,R[_+se]+=b[_+se]*U}const D=R[_]**2+R[_+1]**2+R[_+2]**2,re=b[_]**2+b[_+1]**2+b[_+2]**2;D<1e-8&&re<1e-8?(R[_]=R[_+1]=R[_+2]=0,b[_]=b[_+1]=b[_+2]=0):fe=!0;const J=-65*(g[A]-1)-$A*T[A];T[A]+=J*U,g[A]+=T[A]*U,Math.abs(g[A]-1)<.001&&Math.abs(T[A])<.001?(g[A]=1,T[A]=0):fe=!0}fe||($=!1)}let it=0,an=0,Mt=0,kt=0,$t=0,Yt=!1,F=0,qt=performance.now();function at(U,fe,A){const _=n.current,D=kt*U.speed,re=U.bright*_.lineGlow,J=.15+re*1.5,se=Math.min(re*.5*(.9+.1*Math.sin(fe*.18+U.pulse)),.7)*Math.min(A*3,1),Q=U.from+A*(U.to-U.from),V=.15*(U.to-U.from),{pts:B,cols:ae}=U;for(let K=0;K<ds;K++){const z=K/(ds-1),le=U.from+z*(U.to-U.from),oe=K*3;c.writePoint(B,oe,le,U.lane,D,zu,U.wobblePhase,fe),ie&&Rt(B[oe],B[oe+1],B[oe+2],fe,B,oe,fg);let ue=1;if(z<ol){const ce=z/ol;ue=ce*ce}else if(z>1-ol){const ce=(1-z)/ol;ue=ce*ce}let Ee=1;le>Q?Ee=0:le>Q-V&&(Ee=(Q-le)/V,Ee*=Ee);const De=ue*J*Ee*se;ae[oe]=H.strand.r*De,ae[oe+1]=H.strand.g*De,ae[oe+2]=H.strand.b*De}let C=U.offset;for(let K=0;K<ds-1;K++){const z=K*3,le=(K+1)*3;m[C]=B[z],m[C+1]=B[z+1],m[C+2]=B[z+2],v[C]=ae[z],v[C+1]=ae[z+1],v[C+2]=ae[z+2],C+=3,m[C]=B[le],m[C+1]=B[le+1],m[C+2]=B[le+2],v[C]=ae[le],v[C+1]=ae[le+1],v[C+2]=ae[le+2],C+=3}}function ot(U,fe,A,_){const D=n.current,re=U.trail.length/3;if(!U.racing){if(U.head.material.opacity=0,_<.3)return;if(U.idle+=A,U.idle>U.idleFor){U.racing=!0,U.s=D.flowDir<0?Wu:Vu,U.base=D.cometSpeed*(.7+Math.random()*.6),U.speed=U.base,U.boost=0,U.boostMul=1;const V=f[Math.floor(Math.random()*f.length)];U.lane=V.lane,U.pulse=V.speed,U.wobblePhase=V.wobblePhase}return}if(U.boost>0&&(U.boost-=A,U.boost<=0?(U.boost=0,U.boostMul=1):U.boostMul=1+(gg-1)*(U.boost/xg),U.speed=U.base*U.boostMul),U.s+=A*U.speed*D.flowDir,D.flowDir<0?U.s<Vu:U.s>Wu){U.racing=!1,U.idle=0,U.idleFor=D.cometDelay*(.6+Math.random()*.8),U.trailCol.fill(0),U.geo.attributes.color.needsUpdate=!0,U.head.material.opacity=0;return}const J=kt*U.pulse,se=Zi((U.s-Vu)/pg,0,1)*Zi((Wu-U.s)/pg,0,1);for(let V=0;V<re;V++){const B=Zi(U.s-V*.005*D.flowDir,.005,.995),ae=V*3;c.writePoint(U.trail,ae,B,U.lane,J,zu,U.wobblePhase,fe);const C=(1-V/re)**2,K=U.bright*D.cometGlow*C*se,z=_*(V<3?1.3:1);U.trailCol[ae]=H.comet.r*K*z,U.trailCol[ae+1]=H.comet.g*K*z,U.trailCol[ae+2]=H.comet.b*K*z}U.head.position.set(U.trail[0],U.trail[1],U.trail[2]);const Q=U.boost>0?1+(U.boostMul-1)*.8:1;U.head.material.opacity=se*.35*_*Q,U.head.scale.set(.35*Q,.35*Q,1),U.geo.attributes.position.needsUpdate=!0,U.geo.attributes.color.needsUpdate=!0}function xe(U){const A=n.current.collideForce;if(A<=0)return;const _=mg*mg;for(const D of ee){if(!D.racing)continue;const re=D.trail[0],J=D.trail[1],se=D.trail[2];if(!(re===0&&J===0&&se===0))for(let Q=0;Q<u;Q+=3){const V=M[Q*3]-re,B=M[Q*3+1]-J,ae=M[Q*3+2]-se;V*V+B*B+ae*ae<_&&O[Q]===0&&(O[Q]=.001,N[Q]=vg*A,g[Q]=1+(Sg-1)*A,yt(Q,U,A),D.boost=xg,D.boostMul=1+(gg-1)*A,D.speed=D.base*D.boostMul)}}}function vt(U){it=requestAnimationFrame(vt);const fe=n.current,A=Math.min((U-qt)/1e3,.04);if(qt=U,!fe.running){Yt||(i.render(r,s),Yt=!0);return}Yt=!1,an===0&&(an=U),Mt=(U-an)/1e3;const _=Mt,D=Xu(_,hs.strandStart,hs.strandEnd),re=Xu(_,hs.dotStart,hs.dotEnd),J=Xu(_,hs.cometStart,hs.cometEnd);he(fe);const se=Hu(fe.zoom);s.fov!==se&&(s.fov=se,s.updateProjectionMatrix()),o.uRadius.value=Zi(fe.repelRadius/(ve/2),.01,3),kt+=A*fe.flowSpeed;const Q=o.uStrength;if(Q.value+=(Pe-Q.value)*Math.min(1,A*12),$t+=A,$t>=yg&&E){$t-=yg;for(const V of f)at(V,_,D);E.attributes.position.needsUpdate=!0,E.attributes.color.needsUpdate=!0}if($&&jt(A),p&&u>0){const V=fe.dotSize;for(let B=0;B<u;B++){const ae=x[B],C=f[ae.strand]??f[0],K=kt*C.speed,z=B*3;if(c.writePoint(M,z,ae.s,ae.lane,K,zu,C.wobblePhase,_),O[B]>0){O[B]+=A;const ce=O[B];if(ce<_g){const Te=ce/_g;I[B]=(1+(Sg-1)*(1-Te))*(1-Te*Te),N[B]=vg*(1-Te*Te)*(1-Te*Te)}else I[B]=0,N[B]=0;ce>JA&&(O[B]=0,I[B]=1,N[B]=0)}const le=I[B],oe=V*g[B]*le;X.set(M[z]+R[z],M[z+1]+R[z+1],M[z+2]+R[z+2]),k.set(oe,oe,oe),G.compose(X,s.quaternion,k),p.setMatrixAt(B,G);const ue=1-fe.dotFlicker+fe.dotFlicker*(.08+.92*Math.max(0,Math.sin(_*ae.flickerRate+ae.pulse))**2.5),Ee=g[B]>1.02?1+(g[B]-1)*.5:1,De=ae.bright*ue*fe.dotGlow*Ee*re*(1+N[B])*le;y[z]=H.dot.r*De,y[z+1]=H.dot.g*De,y[z+2]=H.dot.b*De}p.instanceMatrix.needsUpdate=!0,p.instanceColor&&(p.instanceColor.needsUpdate=!0),p.material.opacity=.9*re}for(const V of ee)ot(V,_,A,J);F++,F%2===0&&u>0&&xe(_),i.render(r,s)}return te(),ht.observe(e),qt=performance.now(),it=requestAnimationFrame(vt),{rebuild(){te()},dispose(){var U;cancelAnimationFrame(it),ht.disconnect(),e.removeEventListener("pointermove",Ke),e.removeEventListener("pointerleave",Ze),e.removeEventListener("pointercancel",Ze);for(const fe of d)fe.dispose();i.dispose(),(U=i.forceContextLoss)==null||U.call(i)}}}function ib(t){const{background:e=At.background,topRadius:n=At.topRadius,waistRadius:i=At.waistRadius,waistPosition:r=At.waistPosition,bottomRadius:s=At.bottomRadius,twist:a=At.twist,zoom:o=At.zoom,speed:l=At.speed,direction:c=At.direction,lineOptions:d=At.lineOptions,dots:h=At.dots,dotOptions:f=At.dotOptions,comets:m=At.comets,cometOptions:v=At.cometOptions,repel:E=At.repel,repelOptions:x=At.repelOptions,style:u}=t,p=Ht.useRef(null),y=Ht.useRef(null),R=!zA(),b={...At.lineOptions,...d},g={...At.dotOptions,...f},T={...At.cometOptions,...v},O={...At.repelOptions,...x},N={floorRadius:s/ku,waistRadius:i/ku,crownRadius:n/ku,waistAt:1-r/100,twist:a,zoom:o,flowDir:c==="left"?-1:1,flowSpeed:l/100*(c==="left"?-1:1),lineCount:b.count,lineColor:b.color,lineGlow:b.glow/10*HA,showDots:h,dotCount:g.count,dotSize:g.size/XA,dotColor:g.color,dotGlow:g.glow/10*GA,dotFlicker:g.flicker/10,showComets:m,cometCount:T.count,cometSpeed:T.speed/10*VA,cometColor:T.color,cometGlow:T.glow/10*WA,cometTail:T.tail,cometDelay:T.delay,collideForce:T.collide/10,hoverRepel:E,repelRadius:O.radius,repelStrength:O.strength,running:R},I=JSON.stringify([N.floorRadius,N.waistRadius,N.crownRadius,N.waistAt,N.twist,N.lineCount,N.showDots,N.dotCount,N.showComets,N.cometCount,N.cometTail]),$=Ht.useRef(N);$.current=N;const ee=Ht.useRef(null);Ht.useEffect(()=>{const q=y.current,ie=p.current;if(!(!q||!ie)){try{ee.current=nb(q,ie,$)}catch(G){console.warn("[Vortex] init failed:",G);return}return()=>{var G;(G=ee.current)==null||G.dispose(),ee.current=null}}},[]);const L=Ht.useRef(!1);return Ht.useEffect(()=>{var q;if(!L.current){L.current=!0;return}(q=ee.current)==null||q.rebuild()},[I]),S.jsx("div",{ref:p,style:{...u,position:"relative",width:"100%",height:"100%",background:e,overflow:"hidden"},children:S.jsx("canvas",{ref:y,style:{display:"block",width:"100%",height:"100%"}})})}const rb={maskImage:"linear-gradient(#000 0 0), linear-gradient(#000 0 0)",maskClip:"border-box, content-box",maskComposite:"exclude",WebkitMaskImage:"linear-gradient(#000 0 0), linear-gradient(#000 0 0)",WebkitMaskClip:"border-box, content-box",WebkitMaskComposite:"xor"},sb=10;function Mg({color:t="#52ae54",bandWidth:e=1.5,arcPercent:n=20,speed:i=3,direction:r="ccw"}){const s=Ht.useRef(null),a=Ht.useRef(null),[o,l]=Ht.useState(0);Ht.useEffect(()=>{const h=a.current;if(!h)return;const f=()=>l(Math.ceil(Math.hypot(h.offsetWidth,h.offsetHeight)*1.02));f();const m=new ResizeObserver(f);return m.observe(h),()=>m.disconnect()},[]),Ht.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const f=360/Math.max(.5,sb/Math.max(1,i))*(r==="cw"?1:-1);let m=0,v=0,E=0;const x=u=>{v||(v=u),E=(E+f*(u-v)/1e3)%360,v=u;const p=s.current;p&&(p.style.transform=`rotate(${E}deg)`),m=requestAnimationFrame(x)};return m=requestAnimationFrame(x),()=>cancelAnimationFrame(m)},[i,r]);const c=Math.max(0,Math.min(100,n))/100*360,d=r==="cw"?`conic-gradient(from 0deg, rgba(0,0,0,0) 0deg, rgba(0,0,0,0) calc(360deg - ${c}deg), ${t} 360deg)`:`conic-gradient(from 0deg, ${t} 0deg, rgba(0,0,0,0) ${c}deg, rgba(0,0,0,0) 360deg)`;return S.jsx("div",{ref:a,"aria-hidden":!0,className:"pointer-events-none absolute inset-0 rounded-[inherit]",style:{boxSizing:"border-box",padding:e,...rb},children:S.jsxs("div",{ref:s,style:{position:"absolute",top:"50%",left:"50%",width:o,height:o,marginTop:-o/2,marginLeft:-o/2,transformOrigin:"center"},children:[S.jsx("div",{style:{position:"absolute",inset:0,background:d,filter:"blur(6px)"}}),S.jsx("div",{style:{position:"absolute",inset:0,background:d,opacity:.6}})]})})}function Hn(t){return`/originkit/hero-18/${t}`}const Eg=Hn("tablet/diagonal-lines.png"),wg=Hn("tablet/diagonal-lines-1.svg"),ll=Hn("tablet/element.svg"),Tg=Hn("tablet/element-1.svg"),Ag=Hn("tablet/element-2.svg"),ab=Hn("tablet/element-3.svg"),ob=Hn("tablet/element-4.svg"),lb=Hn("tablet/elements.svg"),cb=Hn("tablet/ellipse.svg"),ub=Hn("tablet/ellipse-1.svg"),fb=Hn("tablet/polygon-1.svg"),db=Hn("tablet/polygon-2.svg");function hb(){return S.jsxs("div",{className:"pointer-events-none absolute left-0 top-0 h-[529px] w-[744px]",style:{transform:"scale(max(1, 100vw / 744px))",transformOrigin:"top left"},children:[S.jsx("div",{className:"absolute bg-size-[3.617px_3.617px] bg-top-left h-[1107px] left-[-107px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-102.866px_16.133px] mask-size-[536.732px_1009.734px] top-[160px] w-[669px]",style:{backgroundImage:`url("${Eg}")`,maskImage:`url("${wg}")`}}),S.jsx("div",{className:"absolute flex h-[1107px] items-center justify-center left-[71px] top-[173px] w-[681px]",children:S.jsx("div",{className:"-scale-y-100 flex-none rotate-180",children:S.jsx("div",{className:"bg-size-[3.617px_3.617px] bg-top-left h-[1107px] mask-alpha mask-intersect mask-no-clip mask-no-repeat relative w-[681px]",style:{backgroundImage:`url("${Eg}")`,maskImage:`url("${wg}"), linear-gradient(to right, black 0%, black calc(100% - 60px), transparent 100%)`,maskSize:"536.732px 1009.734px, 100% 100%",maskPosition:"235.134px 16.133px, 0 0"}})})}),S.jsx("div",{className:"absolute left-0 top-0 h-[529.067px] w-[744px]",children:S.jsx("div",{className:"-scale-y-100 flex-none rotate-180 h-full w-full",children:S.jsxs("div",{className:"drop-shadow-[0px_2.067px_3.617px_rgba(0,0,0,0.25)] h-[529.067px] overflow-clip relative w-[744px]",children:[S.jsx("div",{className:"absolute contents left-[-152.32px] top-[-293.22px]",children:S.jsxs("div",{className:"absolute contents left-[154.98px] size-[964.4px] top-[-381.7px]",children:[S.jsx("div",{className:"absolute flex items-center justify-center left-[496.83px] size-[622.546px] top-[-381.7px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[458.582px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[71.736px_88.48px] mask-size-[1199.962px_1199.959px] relative w-[421.832px]",style:{maskImage:`url("${ll}")`},children:S.jsx("div",{className:"absolute inset-[-29.85%_-32.46%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Tg})})})})}),S.jsx("div",{className:"absolute flex h-[530.617px] items-center justify-center left-[239.48px] mix-blend-plus-lighter top-[-98.67px] w-[514.393px]",children:S.jsx("div",{className:"flex-none rotate-[43.56deg] skew-x-[-0.22deg]",children:S.jsx("div",{className:"bg-gradient-to-b blur-[7.907px] from-[#52ae54] h-[647.674px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-293.764px_-194.543px] mask-size-[1199.962px_1199.959px] opacity-30 relative to-[80%] to-[rgba(82,174,84,0)] w-[91.435px]",style:{maskImage:`url("${ll}")`}})})}),S.jsx("div",{className:"absolute flex h-[517.307px] items-center justify-center left-[274.29px] mix-blend-plus-lighter top-[-50.48px] w-[527.863px]",children:S.jsx("div",{className:"flex-none rotate-[45.93deg] skew-x-[0.14deg]",children:S.jsx("div",{className:"bg-gradient-to-b blur-[13.965px] from-[#52ae54] h-[647.689px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-245.487px_-242.739px] mask-size-[1199.962px_1199.959px] opacity-80 relative to-[88%] to-[rgba(82,174,84,0)] w-[91.432px]",style:{maskImage:`url("${ll}")`}})})}),S.jsx("div",{className:"absolute flex h-[502.328px] items-center justify-center left-[314.33px] top-[-1.81px] w-[541.35px]",children:S.jsx("div",{className:"flex-none rotate-[48.45deg] skew-x-[0.52deg]",children:S.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[8.18px] h-[647.549px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-191.964px_-291.407px] mask-size-[1199.962px_1199.959px] opacity-30 relative w-[91.455px]",style:{maskImage:`url("${ll}")`}})})})]})}),S.jsxs("div",{className:"absolute contents left-[154.98px] size-[964.4px] top-[-381.7px]",children:[S.jsx("div",{className:"absolute flex items-center justify-center left-[496.83px] size-[622.546px] top-[-381.7px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[458.582px] relative w-[421.832px]",children:S.jsx("div",{className:"absolute inset-[-29.85%_-32.46%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Tg})})})})}),S.jsx("div",{className:"absolute flex h-[530.617px] items-center justify-center left-[239.49px] mix-blend-plus-lighter top-[-98.68px] w-[514.393px]",children:S.jsx("div",{className:"flex-none rotate-[43.56deg] skew-x-[-0.22deg]",children:S.jsx("div",{className:"bg-gradient-to-b blur-[7.907px] from-[#52ae54] h-[647.674px] opacity-30 relative to-[80%] to-[rgba(82,174,84,0)] w-[91.435px]"})})}),S.jsx("div",{className:"absolute flex h-[517.307px] items-center justify-center left-[298.12px] top-[-52.7px] w-[527.863px]",children:S.jsx("div",{className:"flex-none rotate-[45.93deg] skew-x-[0.14deg]",children:S.jsx("div",{className:"blur-[13.965px] h-[647.689px] opacity-51 relative w-[91.432px]",style:{backgroundImage:"linear-gradient(179.20787261703023deg, rgb(82, 174, 84) 23.065%, rgba(82, 174, 84, 0.737) 14.923%, rgba(82, 174, 84, 0.307) 51.616%, rgba(82, 174, 84, 0) 99.903%)"}})})}),S.jsx("div",{className:"absolute flex h-[502.328px] items-center justify-center left-[314.33px] top-[-1.81px] w-[541.35px]",children:S.jsx("div",{className:"flex-none rotate-[48.45deg] skew-x-[0.52deg]",children:S.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[8.18px] h-[647.549px] opacity-30 relative w-[91.455px]"})})}),S.jsx("div",{className:"absolute flex items-center justify-center left-[480.53px] mix-blend-plus-lighter size-[308.491px] top-[15.17px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[436.272px] relative w-0",children:S.jsx("div",{className:"absolute inset-[-3.06%_-14.7px]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Ag})})})})}),S.jsx("div",{className:"absolute flex items-center justify-center left-[375.76px] mix-blend-plus-lighter size-[308.491px] top-[-58.98px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[436.272px] relative w-0",children:S.jsx("div",{className:"absolute inset-[-3.06%_-14.7px]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Ag})})})})}),S.jsx("div",{className:"absolute flex items-center justify-center left-[447.63px] mix-blend-plus-lighter size-[230.949px] top-[37.39px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[326.612px] relative w-0",children:S.jsx("div",{className:"absolute inset-[-4.08%_-13.67px]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:ab})})})})})]}),S.jsxs("div",{className:"absolute contents left-[-123.77px] size-[1010.405px] top-[-454.82px]",children:[S.jsx("div",{className:"absolute flex items-center justify-center left-[241.69px] size-[644.942px] top-[-454.82px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[490.254px] opacity-30 relative w-[421.832px]",children:S.jsx("div",{className:"absolute inset-[-27.93%_-32.46%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:ob})})})})}),S.jsx("div",{className:"absolute flex h-[562.128px] items-center justify-center left-[-39.26px] mix-blend-plus-lighter top-[-157.42px] w-[546.128px]",children:S.jsx("div",{className:"flex-none rotate-[43.47deg] skew-x-[-0.4deg]",children:S.jsx("div",{className:"bg-gradient-to-b blur-[7.75px] from-[#52ae54] h-[692.387px] opacity-9 relative to-[88%] to-[rgba(82,174,84,0)] w-[91.439px]"})})}),S.jsx("div",{className:"absolute flex h-[549.008px] items-center justify-center left-[-4.36px] mix-blend-plus-lighter top-[-109.32px] w-[559.419px]",children:S.jsx("div",{className:"flex-none rotate-46 skew-x-[0.26deg]",children:S.jsx("div",{className:"bg-gradient-to-b blur-[14.467px] from-[#52ae54] h-[692.414px] opacity-24 relative to-[88%] to-[rgba(82,174,84,0)] w-[91.434px]"})})}),S.jsx("div",{className:"absolute flex h-[534.179px] items-center justify-center left-[35.99px] top-[-60.92px] w-[572.664px]",children:S.jsx("div",{className:"flex-none rotate-[48.69deg] skew-x-[0.95deg]",children:S.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[8.267px] h-[692.159px] opacity-9 relative w-[91.479px]"})})})]}),S.jsxs("div",{className:"absolute contents left-[-285.03px] size-[886.303px] top-[-443.15px]",children:[S.jsx("div",{className:"absolute flex items-center justify-center left-[16.74px] size-[584.529px] top-[-443.15px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[404.818px] opacity-30 relative w-[421.832px]",children:S.jsx("div",{className:"absolute inset-[-33.44%_-32.09%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:lb})})})})}),S.jsx("div",{className:"absolute flex h-[477.126px] items-center justify-center left-[-200.52px] mix-blend-plus-lighter top-[-184.54px] w-[460.522px]",children:S.jsx("div",{className:"flex-none rotate-[43.73deg] skew-x-[0.11deg]",children:S.jsx("div",{className:"blur-[20.667px] h-[571.778px] opacity-24 relative w-[91.428px]",style:{backgroundImage:"linear-gradient(180.31009559830392deg, rgb(82, 174, 84) 38.81%, rgba(82, 174, 84, 0) 72.523%)"}})})}),S.jsx("div",{className:"absolute flex h-[463.495px] items-center justify-center left-[-165.87px] top-[-136.18px] w-[474.298px]",children:S.jsx("div",{className:"flex-none rotate-[45.82deg] skew-x-[-0.07deg]",children:S.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[20.667px] h-[571.77px] opacity-24 relative w-[91.429px]"})})}),S.jsx("div",{className:"absolute flex h-[448.259px] items-center justify-center left-[-126.37px] top-[-87.06px] w-[488.195px]",children:S.jsx("div",{className:"flex-none rotate-[48.05deg] skew-x-[-0.27deg]",children:S.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[8.18px] h-[571.842px] opacity-9 relative w-[91.419px]"})})})]}),S.jsx("div",{className:"absolute flex items-center justify-center left-[-65.32px] mix-blend-plus-lighter size-[497.673px] top-[-139.32px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[640.686px] relative w-[63.13px]",children:S.jsx("div",{className:"absolute inset-[-8.06%_-81.84%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:cb})})})})}),S.jsx("div",{className:"absolute flex items-center justify-center left-[180.79px] mix-blend-plus-lighter size-[497.673px] top-[-183.96px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[640.686px] relative w-[63.13px]",children:S.jsx("div",{className:"absolute inset-[-3.71%_-37.65%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:ub})})})})})]})})}),S.jsx("div",{className:"absolute flex h-[283.684px] items-center justify-center right-[-125.26px] top-[-261.51px] w-[253.261px]",children:S.jsx("div",{className:"-scale-y-100 flex-none rotate-[37.91deg]",children:S.jsx("div",{className:"h-[278.462px] relative w-[104.141px]",children:S.jsx("div",{className:"absolute inset-[-132.28%_-346.99%_-107.28%_-346.99%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:db})})})})}),S.jsx("div",{className:"absolute flex h-[100.818px] items-center justify-center left-[-81px] top-[430px] w-[86.192px]",children:S.jsx("div",{className:"flex-none rotate-[35.26deg]",children:S.jsx("div",{className:"h-[97.65px] relative w-[36.52px]",children:S.jsx("div",{className:"absolute inset-[-132.28%_-346.99%_-107.28%_-346.99%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:fb})})})})})]})}function Gn(t){return`/originkit/hero-18/${t}`}const bg=Gn("mobile/diagonal-lines.png"),pb=Gn("mobile/diagonal-lines-1.svg"),mb=Gn("mobile/diagonal-lines-2.svg"),cl=Gn("mobile/element.svg"),Rg=Gn("mobile/element-1.svg"),Cg=Gn("mobile/element-2.svg"),gb=Gn("mobile/element-3.svg"),xb=Gn("mobile/element-4.svg"),vb=Gn("mobile/elements.svg"),_b=Gn("mobile/ellipse.svg"),Sb=Gn("mobile/ellipse-1.svg"),yb=Gn("mobile/polygon-1.svg");function Mb(){return S.jsxs("div",{className:"pointer-events-none absolute left-0 top-0 h-[387px] w-[544px]",style:{transform:"scale(max(1, 100vw / 544px))",transformOrigin:"top left"},children:[S.jsx("div",{className:"absolute flex h-[1107px] items-center justify-center left-[-19px] top-[-7px] w-[681px]",children:S.jsx("div",{className:"-scale-y-100 flex-none rotate-180",children:S.jsx("div",{className:"bg-size-[3.617px_3.617px] bg-top-left h-[1107px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[235.134px_156.133px] mask-size-[536.733px_869.734px] relative w-[681px]",style:{backgroundImage:`url("${bg}")`,maskImage:`url("${pb}")`}})})}),S.jsx("div",{className:"absolute bg-size-[3.617px_3.617px] bg-top-left h-[1107px] left-[-107px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-102.866px_16.133px] mask-size-[536.732px_1009.734px] top-[120px] w-[669px]",style:{backgroundImage:`url("${bg}")`,maskImage:`url("${mb}")`}}),S.jsx("div",{className:"absolute left-0 top-0 h-[386.844px] w-[544px]",children:S.jsx("div",{className:"-scale-y-100 flex-none rotate-180 h-full w-full",children:S.jsxs("div",{className:"drop-shadow-[0px_1.511px_2.644px_rgba(0,0,0,0.25)] h-[386.844px] overflow-clip relative w-[544px]",children:[S.jsx("div",{className:"absolute contents left-[-111.37px] top-[-214.39px]",children:S.jsxs("div",{className:"absolute contents left-[113.32px] size-[705.154px] top-[-279.09px]",children:[S.jsx("div",{className:"absolute flex items-center justify-center left-[363.28px] size-[455.195px] top-[-279.08px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[335.307px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[52.451px_64.695px] mask-size-[877.391px_877.393px] relative w-[308.436px]",style:{maskImage:`url("${cl}")`},children:S.jsx("div",{className:"absolute inset-[-29.85%_-32.46%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Rg})})})})}),S.jsx("div",{className:"absolute flex h-[387.978px] items-center justify-center left-[175.11px] mix-blend-plus-lighter top-[-72.14px] w-[376.115px]",children:S.jsx("div",{className:"flex-none rotate-[43.56deg] skew-x-[-0.22deg]",children:S.jsx("div",{className:"bg-gradient-to-b blur-[5.781px] from-[#52ae54] h-[473.568px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-214.799px_-142.248px] mask-size-[877.391px_877.393px] opacity-30 relative to-[80%] to-[rgba(82,174,84,0)] w-[66.855px]",style:{maskImage:`url("${cl}")`}})})}),S.jsx("div",{className:"absolute flex h-[378.246px] items-center justify-center left-[200.56px] mix-blend-plus-lighter top-[-36.9px] w-[385.965px]",children:S.jsx("div",{className:"flex-none rotate-[45.93deg] skew-x-[0.14deg]",children:S.jsx("div",{className:"bg-gradient-to-b blur-[10.211px] from-[#52ae54] h-[473.579px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-179.495px_-177.486px] mask-size-[877.391px_877.393px] opacity-80 relative to-[88%] to-[rgba(82,174,84,0)] w-[66.854px]",style:{maskImage:`url("${cl}")`}})})}),S.jsx("div",{className:"absolute flex h-[367.293px] items-center justify-center left-[229.83px] top-[-1.32px] w-[395.826px]",children:S.jsx("div",{className:"flex-none rotate-[48.45deg] skew-x-[0.52deg]",children:S.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[5.981px] h-[473.477px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-140.363px_-213.074px] mask-size-[877.391px_877.393px] opacity-30 relative w-[66.871px]",style:{maskImage:`url("${cl}")`}})})})]})}),S.jsxs("div",{className:"absolute contents left-[113.32px] size-[705.154px] top-[-279.09px]",children:[S.jsx("div",{className:"absolute flex items-center justify-center left-[363.28px] size-[455.195px] top-[-279.09px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[335.307px] relative w-[308.436px]",children:S.jsx("div",{className:"absolute inset-[-29.85%_-32.46%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Rg})})})})}),S.jsx("div",{className:"absolute flex h-[387.978px] items-center justify-center left-[175.11px] mix-blend-plus-lighter top-[-72.15px] w-[376.115px]",children:S.jsx("div",{className:"flex-none rotate-[43.56deg] skew-x-[-0.22deg]",children:S.jsx("div",{className:"bg-gradient-to-b blur-[5.781px] from-[#52ae54] h-[473.568px] opacity-30 relative to-[80%] to-[rgba(82,174,84,0)] w-[66.855px]"})})}),S.jsx("div",{className:"absolute flex h-[378.246px] items-center justify-center left-[217.98px] top-[-38.54px] w-[385.965px]",children:S.jsx("div",{className:"flex-none rotate-[45.93deg] skew-x-[0.14deg]",children:S.jsx("div",{className:"blur-[10.211px] h-[473.579px] opacity-51 relative w-[66.854px]",style:{backgroundImage:"linear-gradient(179.20787259385162deg, rgb(82, 174, 84) 23.065%, rgba(82, 174, 84, 0.737) 14.923%, rgba(82, 174, 84, 0.307) 51.616%, rgba(82, 174, 84, 0) 99.903%)"}})})}),S.jsx("div",{className:"absolute flex h-[367.293px] items-center justify-center left-[229.83px] top-[-1.32px] w-[395.826px]",children:S.jsx("div",{className:"flex-none rotate-[48.45deg] skew-x-[0.52deg]",children:S.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[5.981px] h-[473.477px] opacity-30 relative w-[66.871px]"})})}),S.jsx("div",{className:"absolute flex items-center justify-center left-[351.36px] mix-blend-plus-lighter size-[225.563px] top-[11.09px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[318.995px] relative w-0",children:S.jsx("div",{className:"absolute inset-[-3.06%_-10.75px]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Cg})})})})}),S.jsx("div",{className:"absolute flex items-center justify-center left-[274.75px] mix-blend-plus-lighter size-[225.563px] top-[-43.12px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[318.995px] relative w-0",children:S.jsx("div",{className:"absolute inset-[-3.06%_-10.75px]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Cg})})})})}),S.jsx("div",{className:"absolute flex items-center justify-center left-[327.3px] mix-blend-plus-lighter size-[168.866px] top-[27.34px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[238.813px] relative w-0",children:S.jsx("div",{className:"absolute inset-[-4.08%_-10px]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:gb})})})})})]}),S.jsxs("div",{className:"absolute contents left-[-90.5px] size-[738.79px] top-[-332.56px]",children:[S.jsx("div",{className:"absolute flex items-center justify-center left-[176.72px] size-[471.57px] top-[-332.56px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[358.465px] opacity-30 relative w-[308.436px]",children:S.jsx("div",{className:"absolute inset-[-27.93%_-32.46%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:xb})})})})}),S.jsx("div",{className:"absolute flex h-[411.019px] items-center justify-center left-[-28.71px] mix-blend-plus-lighter top-[-115.1px] w-[399.319px]",children:S.jsx("div",{className:"flex-none rotate-[43.47deg] skew-x-[-0.4deg]",children:S.jsx("div",{className:"bg-gradient-to-b blur-[5.667px] from-[#52ae54] h-[506.261px] opacity-9 relative to-[88%] to-[rgba(82,174,84,0)] w-[66.858px]"})})}),S.jsx("div",{className:"absolute flex h-[401.425px] items-center justify-center left-[-3.19px] mix-blend-plus-lighter top-[-79.93px] w-[409.037px]",children:S.jsx("div",{className:"flex-none rotate-46 skew-x-[0.26deg]",children:S.jsx("div",{className:"bg-gradient-to-b blur-[10.578px] from-[#52ae54] h-[506.281px] opacity-24 relative to-[88%] to-[rgba(82,174,84,0)] w-[66.855px]"})})}),S.jsx("div",{className:"absolute flex h-[390.583px] items-center justify-center left-[26.31px] top-[-44.54px] w-[418.722px]",children:S.jsx("div",{className:"flex-none rotate-[48.69deg] skew-x-[0.95deg]",children:S.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[6.044px] h-[506.095px] opacity-9 relative w-[66.888px]"})})})]}),S.jsxs("div",{className:"absolute contents left-[-208.41px] size-[648.05px] top-[-324.03px]",children:[S.jsx("div",{className:"absolute flex items-center justify-center left-[12.25px] size-[427.398px] top-[-324.03px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[295.996px] opacity-30 relative w-[308.436px]",children:S.jsx("div",{className:"absolute inset-[-33.44%_-32.09%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:vb})})})})}),S.jsx("div",{className:"absolute flex h-[348.867px] items-center justify-center left-[-146.61px] mix-blend-plus-lighter top-[-134.94px] w-[336.726px]",children:S.jsx("div",{className:"flex-none rotate-[43.73deg] skew-x-[0.11deg]",children:S.jsx("div",{className:"blur-[15.111px] h-[418.074px] opacity-24 relative w-[66.851px]",style:{backgroundImage:"linear-gradient(180.3100955887092deg, rgb(82, 174, 84) 38.81%, rgba(82, 174, 84, 0) 72.523%)"}})})}),S.jsx("div",{className:"absolute flex h-[338.899px] items-center justify-center left-[-121.28px] top-[-99.58px] w-[346.798px]",children:S.jsx("div",{className:"flex-none rotate-[45.82deg] skew-x-[-0.07deg]",children:S.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[15.111px] h-[418.068px] opacity-24 relative w-[66.852px]"})})}),S.jsx("div",{className:"absolute flex h-[327.759px] items-center justify-center left-[-92.4px] top-[-63.66px] w-[356.96px]",children:S.jsx("div",{className:"flex-none rotate-[48.05deg] skew-x-[-0.27deg]",children:S.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[5.981px] h-[418.121px] opacity-9 relative w-[66.844px]"})})})]}),S.jsx("div",{className:"absolute flex items-center justify-center left-[-47.76px] mix-blend-plus-lighter size-[363.89px] top-[-101.86px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[468.458px] relative w-[46.16px]",children:S.jsx("div",{className:"absolute inset-[-8.06%_-81.84%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:_b})})})})}),S.jsx("div",{className:"absolute flex items-center justify-center left-[132.19px] mix-blend-plus-lighter size-[363.89px] top-[-134.51px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[468.458px] relative w-[46.16px]",children:S.jsx("div",{className:"absolute inset-[-3.71%_-37.65%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Sb})})})})})]})})}),S.jsx("div",{className:"absolute flex h-[53.91px] items-center justify-center left-[-99.25px] top-[343.45px] w-[102.712px]",children:S.jsx("div",{className:"flex-none rotate-[79.37deg]",children:S.jsx("div",{className:"h-[97.65px] relative w-[36.52px]",children:S.jsx("div",{className:"absolute inset-[-132.28%_-346.99%_-107.28%_-346.99%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:yb})})})})})]})}function Ei(t){return`/originkit/hero-18/${t}`}const Ng=[{name:"Logiqo",src:Ei("logos/logiqo.svg")},{name:"Nexora",src:Ei("logos/nexora.svg")},{name:"Brandly",src:Ei("logos/brandly.svg")},{name:"Markivo",src:Ei("logos/markivo.svg")},{name:"Typely",src:Ei("logos/typely.svg")},{name:"Framex",src:Ei("logos/framex.svg")},{name:"Webora",src:Ei("logos/webora.svg")},{name:"Designo",src:Ei("logos/designo.svg")},{name:"Formix",src:Ei("logos/formix.svg")}];function Pg({className:t=""}){return S.jsx("div",{className:`relative overflow-hidden h18-logo-fade ${t}`,children:S.jsx("div",{className:"flex h-full w-max items-center h18-logo-track",children:[...Ng,...Ng].map((e,n)=>S.jsx("img",{alt:e.name,src:e.src,className:"h-full w-auto shrink-0 opacity-70"},`${e.name}-${n}`))})})}function Xt(t){return`/originkit/hero-18/${t}`}const qu=Xt("diagonal-lines.png"),Eb=Xt("diagonal-lines-1.svg"),wb=Xt("diagonal-lines-2.svg"),Tb=Xt("diagonal-lines-3.svg"),Ab=Xt("polygon-1.svg"),bb=Xt("polygon-2.svg"),Lg=Xt("subtract.svg"),Dg=Xt("bold-astronomy-planet.svg"),ul=Xt("group.svg"),fl=Xt("element.svg"),Ig=Xt("element-1.svg"),Ug=Xt("element-2.svg"),Rb=Xt("element-3.svg"),Cb=Xt("element-4.svg"),Nb=Xt("elements.svg"),Pb=Xt("ellipse.svg"),Lb=Xt("ellipse-1.svg"),Fg="font-[family-name:var(--font-inter)]",dl="font-[family-name:var(--font-inter-tight)]",$i="font-[family-name:var(--font-lato)]",Og="font-[family-name:var(--font-instrument-serif)]",Db=["Platform","Solutions","Resources","Pricing"];function Ib(){return S.jsxs("div",{className:"relative w-full overflow-hidden bg-[#0a0a0a] lg:h-full h18-background",children:[S.jsx("div",{className:"md:hidden",children:S.jsx(Mb,{})}),S.jsx("div",{className:"hidden md:block lg:hidden",children:S.jsx(hb,{})}),S.jsx("div",{className:"pointer-events-none absolute -top-[127px] left-0 hidden h-full w-full lg:block",children:S.jsxs("div",{className:"drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] relative size-full",style:{transform:"scaleX(-1)",transformOrigin:"720px 0"},children:[S.jsx("div",{className:"absolute contents left-[-294.8px] top-[-567.51px]",children:S.jsxs("div",{className:"absolute contents left-[299.96px] size-[1866.579px] top-[-738.76px]",children:[S.jsx("div",{className:"absolute flex items-center justify-center left-[961.61px] size-[1204.928px] top-[-738.76px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[887.578px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[138.846px_171.255px] mask-size-[2322.501px_2322.501px] relative w-[816.448px]",style:{maskImage:`url("${fl}")`},children:S.jsx("div",{className:"absolute inset-[-29.85%_-32.46%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Ig})})})})}),S.jsx("div",{className:"absolute flex h-[1027.001px] items-center justify-center left-[463.52px] mix-blend-plus-lighter top-[-190.98px] w-[995.599px]",children:S.jsx("div",{className:"flex-none rotate-[43.56deg] skew-x-[-0.22deg]",children:S.jsx("div",{className:"bg-gradient-to-b blur-[15.303px] from-[#52ae54] h-[1253.563px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-568.574px_-376.532px] mask-size-[2322.501px_2322.501px] opacity-30 relative to-[80%] to-[rgba(82,174,84,0)] w-[176.97px]",style:{maskImage:`url("${fl}")`}})})}),S.jsx("div",{className:"absolute flex h-[1001.24px] items-center justify-center left-[530.89px] mix-blend-plus-lighter top-[-97.69px] w-[1021.671px]",children:S.jsx("div",{className:"flex-none rotate-[45.93deg] skew-x-[0.14deg]",children:S.jsx("div",{className:"bg-gradient-to-b blur-[27.029px] from-[#52ae54] h-[1253.592px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-475.135px_-469.815px] mask-size-[2322.501px_2322.501px] opacity-80 relative to-[88%] to-[rgba(82,174,84,0)] w-[176.965px]",style:{maskImage:`url("${fl}")`}})})}),S.jsx("div",{className:"absolute flex h-[972.247px] items-center justify-center left-[608.38px] top-[-3.5px] w-[1047.775px]",children:S.jsx("div",{className:"flex-none rotate-[48.45deg] skew-x-[0.52deg]",children:S.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[15.833px] h-[1253.321px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-371.539px_-564.01px] mask-size-[2322.501px_2322.501px] opacity-30 relative w-[177.01px]",style:{maskImage:`url("${fl}")`}})})})]})}),S.jsxs("div",{className:"absolute contents left-[299.96px] size-[1866.58px] top-[-738.76px]",children:[S.jsx("div",{className:"absolute flex items-center justify-center left-[961.61px] size-[1204.928px] top-[-738.76px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[887.578px] relative w-[816.448px]",children:S.jsx("div",{className:"absolute inset-[-29.85%_-32.46%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Ig})})})})}),S.jsx("div",{className:"absolute flex h-[1027.001px] items-center justify-center left-[463.52px] mix-blend-plus-lighter top-[-190.98px] w-[995.599px]",children:S.jsx("div",{className:"flex-none rotate-[43.56deg] skew-x-[-0.22deg]",children:S.jsx("div",{className:"bg-gradient-to-b blur-[15.303px] from-[#52ae54] h-[1253.563px] opacity-30 relative to-[80%] to-[rgba(82,174,84,0)] w-[176.97px]"})})}),S.jsx("div",{className:"absolute flex h-[1001.24px] items-center justify-center left-[577px] top-[-102px] w-[1021.671px]",children:S.jsx("div",{className:"flex-none rotate-[45.93deg] skew-x-[0.14deg]",children:S.jsx("div",{className:"blur-[27.029px] h-[1253.592px] opacity-51 relative w-[176.965px]",style:{backgroundImage:"linear-gradient(179.20787263074158deg, rgb(82, 174, 84) 23.065%, rgba(82, 174, 84, 0.737) 14.923%, rgba(82, 174, 84, 0.307) 51.616%, rgba(82, 174, 84, 0) 99.903%)"}})})}),S.jsx("div",{className:"absolute flex h-[972.247px] items-center justify-center left-[608.38px] top-[-3.5px] w-[1047.775px]",children:S.jsx("div",{className:"flex-none rotate-[48.45deg] skew-x-[0.52deg]",children:S.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[15.833px] h-[1253.321px] opacity-30 relative w-[177.01px]"})})}),S.jsx("div",{className:"absolute flex items-center justify-center left-[930.06px] mix-blend-plus-lighter size-[597.079px] top-[29.37px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[844.398px] relative w-0",children:S.jsx("div",{className:"absolute inset-[-3.06%_-28.45px]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Ug})})})})}),S.jsx("div",{className:"absolute flex items-center justify-center left-[727.28px] mix-blend-plus-lighter size-[597.079px] top-[-114.14px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[844.398px] relative w-0",children:S.jsx("div",{className:"absolute inset-[-3.06%_-28.45px]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Ug})})})})}),S.jsx("div",{className:"absolute flex items-center justify-center left-[866.38px] mix-blend-plus-lighter size-[446.999px] top-[72.37px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[632.151px] relative w-0",children:S.jsx("div",{className:"absolute inset-[-4.08%_-26.46px]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Rb})})})})})]}),S.jsxs("div",{className:"absolute contents left-[-239.55px] size-[1955.623px] top-[-880.31px]",children:[S.jsx("div",{className:"absolute flex items-center justify-center left-[467.8px] size-[1248.275px] top-[-880.31px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[948.879px] opacity-30 relative w-[816.448px]",children:S.jsx("div",{className:"absolute inset-[-27.93%_-32.46%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Cb})})})})}),S.jsx("div",{className:"absolute flex h-[1087.991px] items-center justify-center left-[-75.99px] mix-blend-plus-lighter top-[-304.68px] w-[1057.022px]",children:S.jsx("div",{className:"flex-none rotate-[43.47deg] skew-x-[-0.4deg]",children:S.jsx("div",{className:"bg-gradient-to-b blur-[15px] from-[#52ae54] h-[1340.103px] opacity-9 relative to-[88%] to-[rgba(82,174,84,0)] w-[176.978px]"})})}),S.jsx("div",{className:"absolute flex h-[1062.596px] items-center justify-center left-[-8.45px] mix-blend-plus-lighter top-[-211.58px] w-[1082.746px]",children:S.jsx("div",{className:"flex-none rotate-46 skew-x-[0.26deg]",children:S.jsx("div",{className:"bg-gradient-to-b blur-[28px] from-[#52ae54] h-[1340.156px] opacity-24 relative to-[88%] to-[rgba(82,174,84,0)] w-[176.969px]"})})}),S.jsx("div",{className:"absolute flex h-[1033.896px] items-center justify-center left-[69.65px] top-[-117.91px] w-[1108.382px]",children:S.jsx("div",{className:"flex-none rotate-[48.69deg] skew-x-[0.95deg]",children:S.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[16px] h-[1339.663px] opacity-9 relative w-[177.056px]"})})})]}),S.jsxs("div",{className:"absolute contents left-[-551.67px] size-[1715.427px] top-[-857.71px]",children:[S.jsx("div",{className:"absolute flex items-center justify-center left-[32.41px] size-[1131.347px] top-[-857.71px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[783.518px] opacity-30 relative w-[816.448px]",children:S.jsx("div",{className:"absolute inset-[-33.44%_-32.09%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Nb})})})})}),S.jsx("div",{className:"absolute flex h-[923.47px] items-center justify-center left-[-388.11px] mix-blend-plus-lighter top-[-357.18px] w-[891.334px]",children:S.jsx("div",{className:"flex-none rotate-[43.73deg] skew-x-[0.11deg]",children:S.jsx("div",{className:"blur-[40px] h-[1106.666px] opacity-24 relative w-[176.958px]",style:{backgroundImage:"linear-gradient(180.31009561457427deg, rgb(82, 174, 84) 38.81%, rgba(82, 174, 84, 0) 72.523%)"}})})}),S.jsx("div",{className:"absolute flex h-[897.087px] items-center justify-center left-[-321.04px] mix-blend-plus-lighter top-[-263.59px] w-[917.996px]",children:S.jsx("div",{className:"flex-none rotate-[45.82deg] skew-x-[-0.07deg]",children:S.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[40px] h-[1106.651px] opacity-24 relative w-[176.96px]"})})}),S.jsx("div",{className:"absolute flex h-[867.597px] items-center justify-center left-[-244.58px] top-[-168.51px] w-[944.893px]",children:S.jsx("div",{className:"flex-none rotate-[48.05deg] skew-x-[-0.27deg]",children:S.jsx("div",{className:"bg-[rgba(82,174,84,0)] blur-[15.833px] h-[1106.791px] opacity-9 relative w-[176.939px]"})})})]}),S.jsx("div",{className:"absolute flex items-center justify-center left-[-126.42px] mix-blend-plus-lighter size-[963.238px] top-[-269.64px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[1240.037px] relative w-[122.187px]",children:S.jsx("div",{className:"absolute inset-[-8.06%_-81.84%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Pb})})})})}),S.jsx("div",{className:"absolute flex items-center justify-center left-[349.92px] mix-blend-plus-lighter size-[963.238px] top-[-356.04px]",children:S.jsx("div",{className:"flex-none rotate-45",children:S.jsx("div",{className:"h-[1240.037px] relative w-[122.187px]",children:S.jsx("div",{className:"absolute inset-[-3.71%_-37.65%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Lb})})})})})]})}),S.jsxs("div",{className:"hidden lg:contents",children:[S.jsx("div",{className:"absolute contents left-[859px] top-[-79px]",children:S.jsx("div",{className:"absolute bg-size-[7px_7px] bg-top-left h-[762px] left-[651px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[156px_-53px] mask-size-[811px_855px] top-[-78px] w-[1296px]",style:{backgroundImage:`url("${qu}")`,maskImage:`url("${Eb}")`}})}),S.jsx("div",{className:"absolute contents left-[465px] top-[41px]",children:S.jsx("div",{className:"absolute bg-size-[7px_7px] bg-top-left h-[762px] left-[361.4px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[168.353px_100.314px] mask-size-[474.229px_622.65px] top-[-78.24px] w-[1296px]",style:{backgroundImage:`url("${qu}")`,maskImage:`url("${wb}")`}})}),S.jsx("div",{className:"absolute contents left-[-50px] top-[302px]",children:S.jsx("div",{className:"absolute bg-size-[7px_7px] bg-top-left h-[762px] left-[-258px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[156px_-53px] mask-size-[685px_658px] top-[303px] w-[1296px]",style:{backgroundImage:`url("${qu}")`,maskImage:`url("${Tb}")`}})})]}),S.jsxs("nav",{className:"relative z-20 flex items-center justify-between px-6 py-5 md:px-10 md:py-6 lg:hidden",children:[S.jsxs("div",{className:"flex items-center gap-[8px]",children:[S.jsx("div",{className:"relative shrink-0 size-[22px]",children:S.jsx("img",{alt:"",className:"absolute block inset-0 max-w-none size-full",src:Lg})}),S.jsx("p",{className:`${Fg} font-semibold text-[20px] text-white tracking-[-0.4px] whitespace-nowrap`,children:"Zentra"})]}),S.jsxs("div",{"aria-label":"Menu",className:"flex size-[38px] shrink-0 flex-col items-center justify-center gap-[5px] rounded-[10px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)]",children:[S.jsx("span",{className:"block h-[2px] w-[18px] rounded-full bg-white"}),S.jsx("span",{className:"block h-[2px] w-[18px] rounded-full bg-white"}),S.jsx("span",{className:"block h-[2px] w-[18px] rounded-full bg-white"})]})]}),S.jsx("div",{className:"pointer-events-none hidden lg:absolute lg:inset-y-0 lg:z-10 lg:block lg:w-[1440px]",style:{left:"max(0px, calc((100% - 1440px) / 2))",transform:"scale(min(1, calc(100vw / 1440px)))",transformOrigin:"top left"},children:S.jsxs("nav",{className:"pointer-events-auto lg:absolute lg:content-stretch lg:flex items-center justify-between left-[52px] top-[36px] w-[1336.357px]",children:[S.jsxs("div",{className:"content-stretch flex gap-[52px] items-center relative shrink-0 w-[723.679px]",children:[S.jsxs("div",{className:"content-stretch flex gap-[8px] items-center relative shrink-0",children:[S.jsx("div",{className:"relative shrink-0 size-[22px]",children:S.jsx("img",{alt:"",className:"absolute block inset-0 max-w-none size-full",src:Lg})}),S.jsx("p",{className:`${Fg} font-semibold leading-[25.5px] relative shrink-0 text-[20px] text-white tracking-[-0.4px] whitespace-nowrap`,children:"Zentra"})]}),S.jsx("ul",{className:`${dl} content-stretch flex font-normal gap-[24px] items-center leading-[25.5px] relative shrink-0 text-[17px] tracking-[-0.34px] whitespace-nowrap`,children:Db.map(t=>S.jsx("li",{children:S.jsx("a",{href:`#${t.toLowerCase()}`,className:"text-white/80 transition-colors duration-150 hover:text-white",children:t})},t))})]}),S.jsx("div",{className:"content-stretch flex items-center justify-end relative shrink-0 w-[299px]",children:S.jsx("a",{href:"#start",className:"bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex items-center justify-center px-[20px] py-[12px] relative rounded-[12px] shrink-0 transition-colors duration-150 hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)]",children:S.jsx("p",{className:`${dl} font-medium leading-[normal] relative shrink-0 text-[16px] text-center text-white tracking-[-0.48px] whitespace-nowrap`,children:"Start Free"})})})]})}),S.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-[40px] px-6 pb-[20px] pt-[16px] text-center md:gap-[56px] md:px-10 md:pb-[24px] md:pt-[24px] lg:hidden",children:[S.jsxs("div",{className:"flex flex-col items-center gap-[20px] md:gap-[24px]",children:[S.jsxs("div",{className:"relative flex items-center gap-[10px] rounded-[12px] bg-[rgba(255,255,255,0.02)] px-[12px] py-[8px]",children:[S.jsx("div",{className:"bg-[#1a781c] content-stretch flex items-center p-[6.4px] relative rounded-[80px] shrink-0",children:S.jsx("div",{className:"relative shrink-0 size-[19.2px]",children:S.jsx("img",{alt:"",className:"absolute block inset-0 max-w-none size-full",src:Dg})})}),S.jsx("p",{className:`${$i} text-[15px] text-white tracking-[-0.3px] whitespace-nowrap md:text-[17px]`,children:"Adaptive Intelligence"}),S.jsx(Mg,{})]}),S.jsxs("div",{className:"flex flex-col items-center gap-[14px] text-white md:gap-[16px]",children:[S.jsx("h1",{className:`${Og} max-w-[280px] font-normal leading-[1.15] text-[34px] tracking-[-0.68px] md:max-w-[460px] md:text-[52px] md:leading-[1.1] md:tracking-[-1.04px]`,children:"Transform Every Signal Into Action"}),S.jsx("p",{className:`${$i} max-w-[320px] text-[15px] leading-[1.4] opacity-70 md:max-w-[440px] md:text-[18px]`,children:"A unified AI platform that transforms data into real-time recommendations."})]}),S.jsxs("div",{className:"flex items-center gap-[12px] md:gap-[16px]",children:[S.jsxs("a",{href:"#explore",className:"relative flex items-center justify-between gap-[8px] overflow-clip rounded-[12px] border-t border-[rgba(255,255,255,0.15)] py-[12px] pl-[18px] pr-[12px] shadow-[0px_3px_6px_0px_rgba(82,82,82,0.1)] transition-[filter] duration-150 hover:brightness-110 md:py-[14px] md:pl-[24px] md:pr-[14px]",children:[S.jsx("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none rounded-[12px]",style:{backgroundImage:"linear-gradient(180deg, rgba(255, 255, 255, 0.2) 4.0988%, rgba(255, 255, 255, 0) 43.902%), linear-gradient(90deg, rgb(26, 120, 28) 0%, rgb(26, 120, 28) 100%)"}}),S.jsx("p",{className:`${$i} relative font-bold text-[14px] text-white tracking-[-0.28px] whitespace-nowrap md:text-[16px]`,children:"Explore AI"}),S.jsx("div",{className:"relative shrink-0 size-[18px] md:size-[22px]",children:S.jsx("div",{className:"absolute inset-[28.66%_35.71%_23.78%_35.72%]",children:S.jsx("img",{alt:"",className:"absolute block inset-0 max-w-none size-full",src:ul})})}),S.jsx("div",{className:"absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.3)]"})]}),S.jsxs("a",{href:"#demo",className:"bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] border-solid flex items-center justify-center gap-[10px] rounded-[10px] py-[12px] pl-[18px] pr-[12px] transition-colors duration-150 hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] md:py-[14px] md:pl-[24px] md:pr-[14px]",children:[S.jsx("p",{className:`${$i} text-[13px] text-white tracking-[-0.35px] whitespace-nowrap md:text-[14px]`,children:"Request Demo"}),S.jsx("div",{className:"relative shrink-0 size-[18px] md:size-[22px]",children:S.jsx("div",{className:"absolute inset-[28.66%_35.71%_23.78%_35.72%]",children:S.jsx("img",{alt:"",className:"absolute block inset-0 max-w-none size-full",src:ul})})})]})]})]}),S.jsxs("div",{className:"flex flex-col items-center gap-[12px] self-stretch",children:[S.jsx("p",{className:`${dl} font-light text-[14px] text-white opacity-50 md:text-[16px]`,children:"Trusted by 5,000+ Teams"}),S.jsx(Pg,{className:"h-[42px] w-full md:h-[82px]"})]})]}),S.jsx("div",{className:"pointer-events-none hidden lg:absolute lg:inset-y-0 lg:z-10 lg:block lg:w-[1440px]",style:{left:"max(0px, calc((100% - 1440px) / 2))",transform:"scale(min(1, calc(100vw / 1440px)))",transformOrigin:"top left"},children:S.jsxs("div",{className:"pointer-events-auto lg:absolute lg:content-stretch lg:flex flex-col gap-[72px] items-start left-[82px] top-[207px] w-[688px]",children:[S.jsxs("div",{className:"content-stretch flex flex-col gap-[24px] items-start relative shrink-0",children:[S.jsxs("div",{className:"bg-[rgba(255,255,255,0.02)] content-stretch flex flex-col gap-[10px] items-start px-[12px] py-[8px] relative rounded-[12px] shrink-0",children:[S.jsxs("div",{className:"content-stretch flex gap-[10px] items-center justify-center relative rounded-[12px] shrink-0",children:[S.jsx("div",{className:"bg-[#1a781c] content-stretch flex items-center p-[6.4px] relative rounded-[80px] shrink-0",children:S.jsx("div",{className:"relative shrink-0 size-[19.2px]",children:S.jsx("img",{alt:"",className:"absolute block inset-0 max-w-none size-full",src:Dg})})}),S.jsx("p",{className:`${$i} font-normal leading-[normal] relative shrink-0 text-[17px] text-white tracking-[-0.34px] whitespace-nowrap`,children:"Adaptive Intelligence"})]}),S.jsx(Mg,{})]}),S.jsxs("div",{className:"content-stretch flex flex-col gap-[32px] items-start relative shrink-0",children:[S.jsxs("div",{className:"content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-white",children:[S.jsx("h1",{className:`${Og} font-normal leading-[1.1] relative shrink-0 text-[62px] tracking-[-1.24px] w-[502px]`,children:"Transform Every Signal Into Action"}),S.jsx("p",{className:`${$i} font-normal leading-[normal] opacity-70 relative shrink-0 text-[20px] tracking-[-0.4px] w-[474px]`,children:"A unified AI platform that transforms data into real-time recommendations."})]}),S.jsxs("div",{className:"content-stretch flex gap-[16px] items-center relative shrink-0",children:[S.jsxs("a",{href:"#explore",className:"border-[rgba(255,255,255,0.15)] border-solid border-t content-stretch flex items-center justify-between overflow-clip pl-[24px] pr-[14px] py-[14px] relative rounded-[12px] shadow-[0px_63px_18px_0px_rgba(82,82,82,0),0px_40px_16px_0px_rgba(82,82,82,0.01),0px_23px_14px_0px_rgba(82,82,82,0.05),0px_10px_10px_0px_rgba(82,82,82,0.09),0px_3px_6px_0px_rgba(82,82,82,0.1)] shrink-0 w-[136px] transition-[filter] duration-150 hover:brightness-110",children:[S.jsx("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none rounded-[12px]",style:{backgroundImage:"linear-gradient(180deg, rgba(255, 255, 255, 0.2) 4.0988%, rgba(255, 255, 255, 0) 43.902%), linear-gradient(90deg, rgb(26, 120, 28) 0%, rgb(26, 120, 28) 100%)"}}),S.jsx("p",{className:`${$i} font-bold leading-[1.5] relative shrink-0 text-[16px] text-white tracking-[-0.32px] whitespace-nowrap`,children:"Explore AI"}),S.jsx("div",{className:"relative shrink-0 size-[22px]",children:S.jsx("div",{className:"absolute inset-[28.66%_35.71%_23.78%_35.72%]",children:S.jsx("img",{alt:"",className:"absolute block inset-0 max-w-none size-full",src:ul})})}),S.jsx("div",{className:"absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.3)]"})]}),S.jsxs("a",{href:"#demo",className:"bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] border-solid content-stretch flex gap-[10px] h-full items-center justify-center pl-[24px] pr-[14px] py-[14px] relative rounded-[10px] shrink-0 transition-colors duration-150 hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)]",children:[S.jsx("p",{className:`${$i} font-normal leading-[1.5] relative shrink-0 text-[14px] text-white tracking-[-0.42px] whitespace-nowrap`,children:"Request Demo"}),S.jsx("div",{className:"relative shrink-0 size-[22px]",children:S.jsx("div",{className:"absolute inset-[28.66%_35.71%_23.78%_35.72%]",children:S.jsx("img",{alt:"",className:"absolute block inset-0 max-w-none size-full",src:ul})})})]})]})]})]}),S.jsxs("div",{className:"content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full",children:[S.jsx("p",{className:`${dl} font-light leading-[1.3] opacity-50 relative shrink-0 text-[16px] text-white w-full`,children:"Trusted by 5,000+ Teams"}),S.jsx(Pg,{className:"h-[85px] w-full"})]})]})}),S.jsxs("div",{className:"relative z-0 h-[340px] w-full md:h-[440px] lg:absolute lg:inset-0 lg:h-auto lg:overflow-hidden",children:[S.jsx("div",{className:"h-full w-full lg:absolute lg:left-0 lg:top-1/2 lg:aspect-[1440/1024] lg:h-auto lg:w-[max(130%,calc(100vh*1440/1024))] lg:-translate-y-1/2",children:S.jsx(ib,{background:"transparent",lineOptions:{color:"#7CFC8A",glow:5},dotOptions:{color:"#ffffff",glow:.8,count:5e3}})}),S.jsx("div",{className:"pointer-events-none absolute inset-x-0 -top-[64px] h-[160px] lg:hidden",style:{backgroundImage:"linear-gradient(to bottom, rgba(10,10,10,0) 0%, #0a0a0a 40%, #0a0a0a 55%, rgba(10,10,10,0) 100%)"}})]}),S.jsx("div",{className:"hidden lg:absolute lg:flex h-[195.131px] items-center justify-center left-[-162px] top-[508px] w-[166.822px]",children:S.jsx("div",{className:"flex-none rotate-[35.26deg]",children:S.jsx("div",{className:"h-[189px] relative w-[70.683px]",children:S.jsx("div",{className:"absolute inset-[-132.28%_-346.99%_-107.28%_-346.99%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:Ab})})})})}),S.jsx("div",{className:"hidden lg:absolute lg:flex h-[192.545px] items-center justify-center right-[-92.25px] top-[-170.71px] w-[171.896px]",children:S.jsx("div",{className:"-scale-y-100 flex-none rotate-[37.91deg]",children:S.jsx("div",{className:"h-[189px] relative w-[70.683px]",children:S.jsx("div",{className:"absolute inset-[-132.28%_-346.99%_-107.28%_-346.99%]",children:S.jsx("img",{alt:"",className:"block max-w-none size-full",src:bb})})})})})]})}const Ub=()=>S.jsx("main",{className:"relative w-full lg:h-screen lg:min-h-[769px] lg:shrink-0",children:S.jsx(Ib,{})});function Fb(){return S.jsxs("div",{className:"min-h-screen bg-[#0a0a0a] text-white flex flex-col",children:[S.jsx("section",{className:"relative w-full",children:S.jsx(Ub,{})}),S.jsx("section",{id:"pipeline-explorer",className:"w-full py-12 px-4 bg-[#1b1220] border-t border-[#44304f]/50",children:S.jsxs("div",{className:"max-w-6xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-8",children:[S.jsx("h2",{className:"text-3xl font-bold tracking-tight text-[#fbeef5] mb-2",children:"Interactive LLM Pipeline Explorer"}),S.jsx("p",{className:"text-[#c3a6b8]",children:"Tokenize text, compute 64-D embeddings, and visualize tokens in 3D space below."})]}),S.jsx("div",{className:"w-full rounded-xl overflow-hidden shadow-2xl border border-[#44304f] bg-[#1b1220]",children:S.jsx("iframe",{src:"/pipeline.html",title:"LLM Pipeline Explorer",className:"w-full h-[1800px] border-none"})})]})})]})}Ku.createRoot(document.getElementById("root")).render(S.jsx(p_.StrictMode,{children:S.jsx(Fb,{})}));
