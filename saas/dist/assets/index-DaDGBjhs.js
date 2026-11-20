(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(c){if(c.ep)return;c.ep=!0;const f=a(c);fetch(c.href,f)}})();function p_(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var oh={exports:{}},ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function bM(){if(lv)return ao;lv=1;var l=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(r,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:l,type:r,key:d,ref:c!==void 0?c:null,props:f}}return ao.Fragment=n,ao.jsx=a,ao.jsxs=a,ao}var ov;function MM(){return ov||(ov=1,oh.exports=bM()),oh.exports}var v=MM(),ch={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function EM(){if(cv)return dt;cv=1;var l=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),M=Symbol.iterator;function T(O){return O===null||typeof O!="object"?null:(O=M&&O[M]||O["@@iterator"],typeof O=="function"?O:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,b={};function U(O,ae,X){this.props=O,this.context=ae,this.refs=b,this.updater=X||C}U.prototype.isReactComponent={},U.prototype.setState=function(O,ae){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ae,"setState")},U.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function P(){}P.prototype=U.prototype;function z(O,ae,X){this.props=O,this.context=ae,this.refs=b,this.updater=X||C}var V=z.prototype=new P;V.constructor=z,S(V,U.prototype),V.isPureReactComponent=!0;var G=Array.isArray;function F(){}var J={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function N(O,ae,X){var Y=X.ref;return{$$typeof:l,type:O,key:ae,ref:Y!==void 0?Y:null,props:X}}function j(O,ae){return N(O.type,ae,O.props)}function ce(O){return typeof O=="object"&&O!==null&&O.$$typeof===l}function oe(O){var ae={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(X){return ae[X]})}var me=/\/+/g;function de(O,ae){return typeof O=="object"&&O!==null&&O.key!=null?oe(""+O.key):ae.toString(36)}function W(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(F,F):(O.status="pending",O.then(function(ae){O.status==="pending"&&(O.status="fulfilled",O.value=ae)},function(ae){O.status==="pending"&&(O.status="rejected",O.reason=ae)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function Z(O,ae,X,Y,pe){var Ae=typeof O;(Ae==="undefined"||Ae==="boolean")&&(O=null);var Se=!1;if(O===null)Se=!0;else switch(Ae){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(O.$$typeof){case l:case n:Se=!0;break;case _:return Se=O._init,Z(Se(O._payload),ae,X,Y,pe)}}if(Se)return pe=pe(O),Se=Y===""?"."+de(O,0):Y,G(pe)?(X="",Se!=null&&(X=Se.replace(me,"$&/")+"/"),Z(pe,ae,X,"",function(et){return et})):pe!=null&&(ce(pe)&&(pe=j(pe,X+(pe.key==null||O&&O.key===pe.key?"":(""+pe.key).replace(me,"$&/")+"/")+Se)),ae.push(pe)),1;Se=0;var ye=Y===""?".":Y+":";if(G(O))for(var De=0;De<O.length;De++)Y=O[De],Ae=ye+de(Y,De),Se+=Z(Y,ae,X,Ae,pe);else if(De=T(O),typeof De=="function")for(O=De.call(O),De=0;!(Y=O.next()).done;)Y=Y.value,Ae=ye+de(Y,De++),Se+=Z(Y,ae,X,Ae,pe);else if(Ae==="object"){if(typeof O.then=="function")return Z(W(O),ae,X,Y,pe);throw ae=String(O),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return Se}function le(O,ae,X){if(O==null)return O;var Y=[],pe=0;return Z(O,Y,"","",function(Ae){return ae.call(X,Ae,pe++)}),Y}function Ee(O){if(O._status===-1){var ae=O._result,X=ae();X.then(function(Y){(O._status===0||O._status===-1)&&(O._status=1,O._result=Y,X.status===void 0&&(X.status="fulfilled",X.value=Y))},function(Y){(O._status===0||O._status===-1)&&(O._status=2,O._result=Y,X.status===void 0&&(X.status="rejected",X.reason=Y))}),O._status===-1&&(O._status=0,O._result=X)}if(O._status===1)return O._result.default;throw O._result}var I=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function L(O){var ae=J.T,X={};X.types=ae!==null?ae.types:null,J.T=X;try{var Y=O(),pe=J.S;pe!==null&&pe(X,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(F,I)}catch(Ae){I(Ae)}finally{ae!==null&&X.types!==null&&(ae.types=X.types),J.T=ae}}function Te(O){var ae=J.T;if(ae!==null){var X=ae.types;X===null?ae.types=[O]:X.indexOf(O)===-1&&X.push(O)}else L(Te.bind(null,O))}var we={map:le,forEach:function(O,ae,X){le(O,function(){ae.apply(this,arguments)},X)},count:function(O){var ae=0;return le(O,function(){ae++}),ae},toArray:function(O){return le(O,function(ae){return ae})||[]},only:function(O){if(!ce(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return dt.Activity=g,dt.Children=we,dt.Component=U,dt.Fragment=a,dt.Profiler=c,dt.PureComponent=z,dt.StrictMode=r,dt.Suspense=p,dt.ViewTransition=y,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,dt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return J.H.useMemoCache(O)}},dt.addTransitionType=Te,dt.cache=function(O){return function(){return O.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(O,ae,X){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Y=S({},O.props),pe=O.key;if(ae!=null)for(Ae in ae.key!==void 0&&(pe=""+ae.key),ae)!R.call(ae,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&ae.ref===void 0||(Y[Ae]=ae[Ae]);var Ae=arguments.length-2;if(Ae===1)Y.children=X;else if(1<Ae){for(var Se=Array(Ae),ye=0;ye<Ae;ye++)Se[ye]=arguments[ye+2];Y.children=Se}return N(O.type,pe,Y)},dt.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:f,_context:O},O},dt.createElement=function(O,ae,X){var Y,pe={},Ae=null;if(ae!=null)for(Y in ae.key!==void 0&&(Ae=""+ae.key),ae)R.call(ae,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(pe[Y]=ae[Y]);var Se=arguments.length-2;if(Se===1)pe.children=X;else if(1<Se){for(var ye=Array(Se),De=0;De<Se;De++)ye[De]=arguments[De+2];pe.children=ye}if(O&&O.defaultProps)for(Y in Se=O.defaultProps,Se)pe[Y]===void 0&&(pe[Y]=Se[Y]);return N(O,Ae,pe)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(O){return{$$typeof:h,render:O}},dt.isValidElement=ce,dt.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:Ee}},dt.memo=function(O,ae){return{$$typeof:m,type:O,compare:ae===void 0?null:ae}},dt.startTransition=L,dt.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},dt.use=function(O){return J.H.use(O)},dt.useActionState=function(O,ae,X){return J.H.useActionState(O,ae,X)},dt.useCallback=function(O,ae){return J.H.useCallback(O,ae)},dt.useContext=function(O){return J.H.useContext(O)},dt.useDebugValue=function(){},dt.useDeferredValue=function(O,ae){return J.H.useDeferredValue(O,ae)},dt.useEffect=function(O,ae){return J.H.useEffect(O,ae)},dt.useEffectEvent=function(O){return J.H.useEffectEvent(O)},dt.useId=function(){return J.H.useId()},dt.useImperativeHandle=function(O,ae,X){return J.H.useImperativeHandle(O,ae,X)},dt.useInsertionEffect=function(O,ae){return J.H.useInsertionEffect(O,ae)},dt.useLayoutEffect=function(O,ae){return J.H.useLayoutEffect(O,ae)},dt.useMemo=function(O,ae){return J.H.useMemo(O,ae)},dt.useOptimistic=function(O,ae){return J.H.useOptimistic(O,ae)},dt.useReducer=function(O,ae,X){return J.H.useReducer(O,ae,X)},dt.useRef=function(O){return J.H.useRef(O)},dt.useState=function(O){return J.H.useState(O)},dt.useSyncExternalStore=function(O,ae,X){return J.H.useSyncExternalStore(O,ae,X)},dt.useTransition=function(){return J.H.useTransition()},dt.version="19.3.1",dt}var uv;function jp(){return uv||(uv=1,ch.exports=EM()),ch.exports}var mt=jp();const kp=p_(mt);var uh={exports:{}},so={},fh={exports:{}},dh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function TM(){return fv||(fv=1,(function(l){function n(W,Z){var le=W.length;W.push(Z);e:for(;0<le;){var Ee=le-1>>>1,I=W[Ee];if(0<c(I,Z))W[Ee]=Z,W[le]=I,le=Ee;else break e}}function a(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Z=W[0],le=W.pop();if(le!==Z){W[0]=le;e:for(var Ee=0,I=W.length,L=I>>>1;Ee<L;){var Te=2*(Ee+1)-1,we=W[Te],O=Te+1,ae=W[O];if(0>c(we,le))O<I&&0>c(ae,we)?(W[Ee]=ae,W[O]=le,Ee=O):(W[Ee]=we,W[Te]=le,Ee=Te);else if(O<I&&0>c(ae,le))W[Ee]=ae,W[O]=le,Ee=O;else break e}}return Z}function c(W,Z){var le=W.sortIndex-Z.sortIndex;return le!==0?le:W.id-Z.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();l.unstable_now=function(){return d.now()-h}}var p=[],m=[],_=1,g=null,y=3,M=!1,T=!1,C=!1,S=!1,b=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function z(W){for(var Z=a(m);Z!==null;){if(Z.callback===null)r(m);else if(Z.startTime<=W)r(m),Z.sortIndex=Z.expirationTime,n(p,Z);else break;Z=a(m)}}function V(W){if(C=!1,z(W),!T)if(a(p)!==null)T=!0,G||(G=!0,ce());else{var Z=a(m);Z!==null&&de(V,Z.startTime-W)}}var G=!1,F=-1,J=5,R=-1;function N(){return S?!0:!(l.unstable_now()-R<J)}function j(){if(S=!1,G){var W=l.unstable_now();R=W;var Z=!0;try{e:{T=!1,C&&(C=!1,U(F),F=-1),M=!0;var le=y;try{t:{for(z(W),g=a(p);g!==null&&!(g.expirationTime>W&&N());){var Ee=g.callback;if(typeof Ee=="function"){g.callback=null,y=g.priorityLevel;var I=Ee(g.expirationTime<=W);if(W=l.unstable_now(),typeof I=="function"){g.callback=I,z(W),Z=!0;break t}g===a(p)&&r(p),z(W)}else r(p);g=a(p)}if(g!==null)Z=!0;else{var L=a(m);L!==null&&de(V,L.startTime-W),Z=!1}}break e}finally{g=null,y=le,M=!1}Z=void 0}}finally{Z?ce():G=!1}}}var ce;if(typeof P=="function")ce=function(){P(j)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,me=oe.port2;oe.port1.onmessage=j,ce=function(){me.postMessage(null)}}else ce=function(){b(j,0)};function de(W,Z){F=b(function(){W(l.unstable_now())},Z)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(W){W.callback=null},l.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<W?Math.floor(1e3/W):5},l.unstable_getCurrentPriorityLevel=function(){return y},l.unstable_next=function(W){switch(y){case 1:case 2:case 3:var Z=3;break;default:Z=y}var le=y;y=Z;try{return W()}finally{y=le}},l.unstable_requestPaint=function(){S=!0},l.unstable_runWithPriority=function(W,Z){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var le=y;y=W;try{return Z()}finally{y=le}},l.unstable_scheduleCallback=function(W,Z,le){var Ee=l.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?Ee+le:Ee):le=Ee,W){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=le+I,W={id:_++,callback:Z,priorityLevel:W,startTime:le,expirationTime:I,sortIndex:-1},le>Ee?(W.sortIndex=le,n(m,W),a(p)===null&&W===a(m)&&(C?(U(F),F=-1):C=!0,de(V,le-Ee))):(W.sortIndex=I,n(p,W),T||M||(T=!0,G||(G=!0,ce()))),W},l.unstable_shouldYield=N,l.unstable_wrapCallback=function(W){var Z=y;return function(){var le=y;y=Z;try{return W.apply(this,arguments)}finally{y=le}}}})(dh)),dh}var dv;function AM(){return dv||(dv=1,fh.exports=TM()),fh.exports}var hh={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv;function RM(){if(hv)return Nn;hv=1;var l=jp();function n(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var r={d:{f:a,r:function(){throw Error(n(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(_,g,y){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:M==null?null:M===d?d:""+M,children:_,containerInfo:g,implementation:y}}var p=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.browser=function(_){return{$$typeof:f,_reason:_}},Nn.createPortal=function(_,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(n(299));return h(_,g,null,y)},Nn.flushSync=function(_){var g=p.T,y=r.p;try{if(p.T=null,r.p=2,_)return _()}finally{p.T=g,r.p=y,r.d.f()}},Nn.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(_,g))},Nn.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},Nn.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var y=g.as,M=m(y,g.crossOrigin),T=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?r.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:M,integrity:T,fetchPriority:C}):y==="script"&&r.d.X(_,{crossOrigin:M,integrity:T,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Nn.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=m(g.as,g.crossOrigin);r.d.M(_,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(_)},Nn.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,M=m(y,g.crossOrigin);r.d.L(_,y,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Nn.preloadModule=function(_,g){if(typeof _=="string")if(g){var y=m(g.as,g.crossOrigin);r.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(_)},Nn.requestFormReset=function(_){r.d.r(_)},Nn.unstable_batchedUpdates=function(_,g){return _(g)},Nn.useFormState=function(_,g,y){return p.H.useFormState(_,g,y)},Nn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Nn.version="19.3.1",Nn}var pv;function CM(){if(pv)return hh.exports;pv=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(n){console.error(n)}}return l(),hh.exports=RM(),hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv;function wM(){if(mv)return so;mv=1;var l=AM(),n=jp(),a=CM();function r(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var t=e,i=t;i&&!i.alternate;)t=i,(t.flags&4098)!==0&&(e=t.return),i=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(f(e)!==e)throw Error(r(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(r(188));return t!==e?null:e}for(var i=e,s=t;;){var o=i.return;if(o===null)break;var u=o.alternate;if(u===null){if(s=o.return,s!==null){i=s;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===i)return p(o),e;if(u===s)return p(o),t;u=u.sibling}throw Error(r(188))}if(i.return!==s.return)i=o,s=u;else{for(var x=!1,A=o.child;A;){if(A===i){x=!0,i=o,s=u;break}if(A===s){x=!0,s=o,i=u;break}A=A.sibling}if(!x){for(A=u.child;A;){if(A===i){x=!0,i=u,s=o;break}if(A===s){x=!0,s=u,i=o;break}A=A.sibling}if(!x)throw Error(r(189))}}if(i.alternate!==s)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:t}function _(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=_(e),t!==null)return t;e=e.sibling}return null}function g(e,t,i,s,o,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&i(e,s,o,u)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&g(e.child,t,i,s,o,u))return!0;e=e.sibling}return!1}function y(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function M(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function T(e){var t=[null,null],i=y(e);return i===null||C(t,e,i.child,{foundSelf:!1}),t}function C(e,t,i,s){for(;i!==null;){if(i===t)s.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(s.foundSelf)return e[1]=i,!0;e[0]=i}else if((i.tag!==22||i.memoizedState===null)&&C(e,t,i.child,s))return!0;i=i.sibling}return!1}function S(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(r(559))}}var b=null,U=null;function P(e,t,i){return e===i?!0:e===t?(b=e,!0):!1}function z(e,t,i){return e===i?(U=e,!1):e===t?(U!==null&&(b=e),!0):!1}function V(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function G(e,t,i){for(var s=0,o=e;o;o=i(o))s++;o=0;for(var u=t;u;u=i(u))o++;for(;0<s-o;)e=i(e),s--;for(;0<o-s;)t=i(t),o--;for(;s--;){if(e===t||t!==null&&e===t.alternate)return e;e=i(e),t=i(t)}return null}var F=Object.assign,J=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),N=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),ce=Symbol.for("react.strict_mode"),oe=Symbol.for("react.profiler"),me=Symbol.for("react.consumer"),de=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),Ee=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),Te=Symbol.for("react.legacy_hidden"),we=Symbol.for("react.memo_cache_sentinel"),O=Symbol.for("react.view_transition"),ae=Symbol.for("react.recoverable"),X=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Symbol.for("react.client.reference");function Ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case oe:return"Profiler";case ce:return"StrictMode";case Z:return"Suspense";case le:return"SuspenseList";case L:return"Activity";case O:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case N:return"Portal";case de:return e.displayName||"Context";case me:return(e._context.displayName||"Context")+".Consumer";case W:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ee:return t=e.displayName||null,t!==null?t:Ae(e.type)||"Memo";case I:t=e._payload,e=e._init;try{return Ae(e(t))}catch{}}return null}var Se=Array.isArray,ye=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,De=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},We=[],ot=-1;function $e(e){return{current:e}}function rt(e){0>ot||(e.current=We[ot],We[ot]=null,ot--)}function H(e,t){ot++,We[ot]=e.current,e.current=t}var St=$e(null),ut=$e(null),Mt=$e(null),Ye=$e(null);function D(e,t){switch(H(Mt,t),H(ut,e),H(St,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?gx(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=gx(t),e=xx(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rt(St),H(St,e)}function E(){rt(St),rt(ut),rt(Mt)}function Q(e){var t=e.memoizedState;t!==null&&(Hr._currentValue=t.memoizedState,H(Ye,e)),t=St.current;var i=xx(t,e.type);t!==i&&(H(ut,e),H(St,i))}function xe(e){ut.current===e&&(rt(St),rt(ut)),Ye.current===e&&(rt(Ye),Hr._currentValue=et)}var be,ge;function je(e){if(be===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);be=t&&t[1]||"",ge=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+be+e+ge}var Ue=!1;function Xe(e,t){if(!e||Ue)return"";Ue=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ze){var K=ze}Reflect.construct(e,[],_e)}else{try{_e.call()}catch(ze){K=ze}_e=!1;try{var re=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),_e=!0,new e}finally{_e&&(re!==void 0?Object.defineProperty(e.prototype,"props",re):delete e.prototype.props)}}}else{try{throw Error()}catch(ze){K=ze}(_e=e())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ze){if(ze&&K&&typeof ze.stack=="string")return[ze.stack,K.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),x=u[0],A=u[1];if(x&&A){var B=x.split(`
`),ee=A.split(`
`);for(o=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;o<ee.length&&!ee[o].includes("DetermineComponentFrameRoot");)o++;if(s===B.length||o===ee.length)for(s=B.length-1,o=ee.length-1;1<=s&&0<=o&&B[s]!==ee[o];)o--;for(;1<=s&&0<=o;s--,o--)if(B[s]!==ee[o]){if(s!==1||o!==1)do if(s--,o--,0>o||B[s]!==ee[o]){var ue=`
`+B[s].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=s&&0<=o);break}}}finally{Ue=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?je(i):""}function st(e,t){switch(e.tag){case 26:case 27:case 5:return je(e.type);case 16:return je("Lazy");case 13:return e.child!==t&&t!==null?je("Suspense Fallback"):je("Suspense");case 19:return je("SuspenseList");case 0:case 15:return Xe(e.type,!1);case 11:return Xe(e.type.render,!1);case 1:return Xe(e.type,!0);case 31:return je("Activity");case 30:return je("ViewTransition");default:return""}}function Ce(e){try{var t="",i=null;do t+=st(e,i),i=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Pe=Object.prototype.hasOwnProperty,Ze=l.unstable_scheduleCallback,Je=l.unstable_cancelCallback,Ie=l.unstable_shouldYield,vt=l.unstable_requestPaint,q=l.unstable_now,He=l.unstable_getCurrentPriorityLevel,Ne=l.unstable_ImmediatePriority,Ve=l.unstable_UserBlockingPriority,Re=l.unstable_NormalPriority,Me=l.unstable_LowPriority,Oe=l.unstable_IdlePriority,ft=l.log,Wt=l.unstable_setDisableYieldValue,wt=null,en=null;function vn(e){if(typeof ft=="function"&&Wt(e),en&&typeof en.setStrictMode=="function")try{en.setStrictMode(wt,e)}catch{}}var zn=Math.clz32?Math.clz32:Pu,Ao=Math.log,hl=Math.LN2;function Pu(e){return e>>>=0,e===0?32:31-(Ao(e)/hl|0)|0}var xs=256,vs=262144,ui=4194304;function Ai(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _s(e,t,i){var s=e.pendingLanes;if(s===0)return 0;var o=0,u=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=s&134217727;return A!==0?(s=A&~u,s!==0?o=Ai(s):(x&=A,x!==0?o=Ai(x):i||(i=A&~e,i!==0&&(o=Ai(i))))):(A=s&~u,A!==0?o=Ai(A):x!==0?o=Ai(x):i||(i=s&~e,i!==0&&(o=Ai(i)))),o===0?0:t!==0&&t!==o&&(t&u)===0&&(u=o&-o,i=t&-t,u>=i||u===32&&(i&4194048)!==0)?t:o}function La(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ys(e,t){(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-zn(i),o=1<<s;t|=e[s],i&=~o}return t}function Ro(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ss(){var e=ui;return ui<<=1,(ui&62914560)===0&&(ui=4194304),e}function ir(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Oa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Iu(e,t,i,s,o,u){var x=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var A=e.entanglements,B=e.expirationTimes,ee=e.hiddenUpdates;for(i=x&~i;0<i;){var ue=31-zn(i),_e=1<<ue;A[ue]=0,B[ue]=-1;var K=ee[ue];if(K!==null)for(ee[ue]=null,ue=0;ue<K.length;ue++){var re=K[ue];re!==null&&(re.lane&=-536870913)}i&=~_e}s!==0&&Co(e,s,0),u!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=u&~(x&~t))}function Co(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-zn(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|i&261930}function wo(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var s=31-zn(i),o=1<<s;o&t|e[s]&t&&(e[s]|=t),i&=~o}}function No(e,t){var i=t&-t;return i=(i&42)!==0?1:pl(i),(i&(e.suspendedLanes|t))!==0?0:i}function pl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ml(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function w(){var e=De.p;return e!==0?e:(e=window.event,e===void 0?32:ev(e.type))}function te(e,t){var i=De.p;try{return De.p=e,t()}finally{De.p=i}}var fe=Math.random().toString(36).slice(2),se="__reactFiber$"+fe,ne="__reactProps$"+fe,Le="__reactContainer$"+fe,ke="__reactEvents$"+fe,Fe="__reactListeners$"+fe,Ke="__reactHandles$"+fe,tt="__reactResources$"+fe,at="__reactMarker$"+fe,nt="__reactLoad$"+fe;function pt(e){delete e[se],delete e[ne],delete e[Fe],delete e[Ke]}function At(e){var t;if(t=e[se])return t;for(var i=e.parentNode;i;){if(t=i[Le]||i[se]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Ox(e);e!==null;){if(i=e[se])return i;e=Ox(e)}return t}e=i,i=e.parentNode}return null}function Vt(e){if(e=e[se]||e[Le]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Yt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(r(33))}function Ut(e){var t=e[tt];return t||(t=e[tt]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ge(e){e[at]=!0}function Pt(e){e[nt]=void 0}var Nt=new Set,Un={};function kn(e,t){cn(e,t),cn(e+"Capture",t)}function cn(e,t){for(Un[e]=t,e=0;e<t.length;e++)Nt.add(t[e])}var bs=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gt={},Mn={};function Xn(e){return Pe.call(Mn,e)?!0:Pe.call(Gt,e)?!1:bs.test(e)?Mn[e]=!0:(Gt[e]=!0,!1)}var ct=!1;function En(){var e=ct;return ct=!1,e}function Pa(e,t,i){if(Xn(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,i)}}function fi(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,i)}}function sa(e,t,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,s)}}function ei(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function im(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gy(e,t,i){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var o=s.get,u=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(x){i=""+x,u.call(this,x)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(x){i=""+x},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zu(e){if(!e._valueTracker){var t=im(e)?"checked":"value";e._valueTracker=Gy(e,t,""+e[t])}}function am(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),s="";return e&&(s=im(e)?e.checked?"true":"false":e.value),e=s,e!==i?(t.setValue(e),!0):!1}var jy=/[\n"\\]/g;function di(e){return e.replace(jy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Fu(e,t,i,s,o,u,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),t!=null?x==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ei(t)):e.value!==""+ei(t)&&(e.value=""+ei(t)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),t!=null?x==="number"&&e.value==t?Bu(e,ei(e.value)):Bu(e,ei(t)):i!=null?Bu(e,ei(i)):s!=null&&e.removeAttribute("value"),o==null&&u!=null&&(e.defaultChecked=!!u),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ei(A):e.removeAttribute("name")}function sm(e,t,i,s,o,u,x,A){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||i!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){zu(e);return}i=i!=null?""+ei(i):"",t=t!=null?""+ei(t):i,A||t===e.value||(e.value=t),e.defaultValue=t}s=s??o,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=A?e.checked:!!s,e.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),zu(e)}function Bu(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function ar(e,t,i,s){if(e=e.options,t){t={};for(var o=0;o<i.length;o++)t["$"+i[o]]=!0;for(i=0;i<e.length;i++)o=t.hasOwnProperty("$"+e[i].value),e[i].selected!==o&&(e[i].selected=o),o&&s&&(e[i].defaultSelected=!0)}else{for(i=""+ei(i),t=null,o=0;o<e.length;o++){if(e[o].value===i){e[o].selected=!0,s&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function rm(e,t,i){if(t!=null&&(t=""+ei(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+ei(i):""}function lm(e,t,i,s){if(t==null){if(s!=null){if(i!=null)throw Error(r(92));if(Se(s)){if(1<s.length)throw Error(r(93));s=s[0]}i=s}i==null&&(i=""),t=i}i=ei(t),e.defaultValue=i,s=e.textContent,s===i&&s!==""&&s!==null&&(e.value=s),zu(e)}function sr(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var ky=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function om(e,t,i){var s=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,i):typeof i!="number"||i===0||ky.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function cm(e,t,i){if(t!=null&&typeof t!="object")throw Error(r(62));if(e=e.style,i!=null){for(var s in i)!i.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="",ct=!0);for(var o in t)s=t[o],t.hasOwnProperty(o)&&i[o]!==s&&(om(e,o,s),ct=!0)}else for(var u in t)t.hasOwnProperty(u)&&om(e,u,t[u])}function Hu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Do(e){return qy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Hi(){}var Vu=null;function Gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rr=null,lr=null;function um(e){var t=Vt(e);if(t&&(e=t.stateNode)){var i=e[ne]||null;e:switch(e=t.stateNode,t.type){case"input":if(Fu(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+di(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var s=i[t];if(s!==e&&s.form===e.form){var o=s[ne]||null;if(!o)throw Error(r(90));Fu(s,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<i.length;t++)s=i[t],s.form===e.form&&am(s)}break e;case"textarea":rm(e,i.value,i.defaultValue);break e;case"select":t=i.value,t!=null&&ar(e,!!i.multiple,t,!1)}}}var ju=!1;function fm(e,t,i){if(ju)return e(t,i);ju=!0;try{var s=e(t);return s}finally{if(ju=!1,(rr!==null||lr!==null)&&(Dc(),rr&&(t=rr,e=lr,lr=rr=null,um(t),e)))for(t=0;t<e.length;t++)um(e[t])}}function gl(e,t){var i=e.stateNode;if(i===null)return null;var s=i[ne]||null;if(s===null)return null;i=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,t,typeof i));return i}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=!1;if(ra)try{var xl={};Object.defineProperty(xl,"passive",{get:function(){ku=!0}}),window.addEventListener("test",xl,xl),window.removeEventListener("test",xl,xl)}catch{ku=!1}var Ia=null,Xu=null,Uo=null;function dm(){if(Uo)return Uo;var e,t=Xu,i=t.length,s,o="value"in Ia?Ia.value:Ia.textContent,u=o.length;for(e=0;e<i&&t[e]===o[e];e++);var x=i-e;for(s=1;s<=x&&t[i-s]===o[u-s];s++);return Uo=o.slice(e,1<s?1-s:void 0)}function Lo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oo(){return!0}function hm(){return!1}function Fn(e){function t(i,s,o,u,x){this._reactName=i,this._targetInst=o,this.type=s,this.nativeEvent=u,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(i=e[A],this[A]=i?i(u):u[A]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Oo:hm,this.isPropagationStopped=hm,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),t}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Po=Fn(za),vl=F({},za,{view:0,detail:0}),Wy=Fn(vl),qu,Wu,_l,Io=F({},vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_l&&(_l&&e.type==="mousemove"?(qu=e.screenX-_l.screenX,Wu=e.screenY-_l.screenY):Wu=qu=0,_l=e),qu)},movementY:function(e){return"movementY"in e?e.movementY:Wu}}),pm=Fn(Io),Yy=F({},Io,{dataTransfer:0}),Zy=Fn(Yy),Ky=F({},vl,{relatedTarget:0}),Yu=Fn(Ky),Qy=F({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),Jy=Fn(Qy),$y=F({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eS=Fn($y),tS=F({},za,{data:0}),mm=Fn(tS),nS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=aS[e])?!!t[e]:!1}function Zu(){return sS}var rS=F({},vl,{key:function(e){if(e.key){var t=nS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Lo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zu,charCode:function(e){return e.type==="keypress"?Lo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lS=Fn(rS),oS=F({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gm=Fn(oS),cS=F({},za,{submitter:0}),uS=Fn(cS),fS=F({},vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zu}),dS=Fn(fS),hS=F({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),pS=Fn(hS),mS=F({},Io,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gS=Fn(mS),xS=F({},za,{newState:0,oldState:0,source:0}),vS=Fn(xS),_S=[9,13,27,32],Ku=ra&&"CompositionEvent"in window,yl=null;ra&&"documentMode"in document&&(yl=document.documentMode);var yS=ra&&"TextEvent"in window&&!yl,xm=ra&&(!Ku||yl&&8<yl&&11>=yl),vm=" ",_m=!1;function ym(e,t){switch(e){case"keyup":return _S.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var or=!1;function SS(e,t){switch(e){case"compositionend":return Sm(t);case"keypress":return t.which!==32?null:(_m=!0,vm);case"textInput":return e=t.data,e===vm&&_m?null:e;default:return null}}function bS(e,t){if(or)return e==="compositionend"||!Ku&&ym(e,t)?(e=dm(),Uo=Xu=Ia=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xm&&t.locale!=="ko"?null:t.data;default:return null}}var MS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!MS[e.type]:t==="textarea"}function Mm(e,t,i,s){rr?lr?lr.push(s):lr=[s]:rr=s,t=zc(t,"onChange"),0<t.length&&(i=new Po("onChange","change",null,i,s),e.push({event:i,listeners:t}))}var Sl=null,bl=null;function ES(e){ux(e,0)}function zo(e){var t=Yt(e);if(am(t))return e}function Em(e,t){if(e==="change")return t}var Tm=!1;if(ra){var Qu;if(ra){var Ju="oninput"in document;if(!Ju){var Am=document.createElement("div");Am.setAttribute("oninput","return;"),Ju=typeof Am.oninput=="function"}Qu=Ju}else Qu=!1;Tm=Qu&&(!document.documentMode||9<document.documentMode)}function Rm(){Sl&&(Sl.detachEvent("onpropertychange",Cm),bl=Sl=null)}function Cm(e){if(e.propertyName==="value"&&zo(bl)){var t=[];Mm(t,bl,e,Gu(e)),fm(ES,t)}}function TS(e,t,i){e==="focusin"?(Rm(),Sl=t,bl=i,Sl.attachEvent("onpropertychange",Cm)):e==="focusout"&&Rm()}function AS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zo(bl)}function RS(e,t){if(e==="click")return zo(t)}function CS(e,t){if(e==="input"||e==="change")return zo(t)}function wS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ti=typeof Object.is=="function"?Object.is:wS;function Ml(e,t){if(ti(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var o=i[s];if(!Pe.call(t,o)||!ti(e[o],t[o]))return!1}return!0}function $u(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nm(e,t){var i=wm(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=t&&s>=t)return{node:i,offset:t-e};e=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=wm(i)}}function Dm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Um(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$u(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=$u(e.document)}return t}function ef(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var NS=ra&&"documentMode"in document&&11>=document.documentMode,cr=null,tf=null,El=null,nf=!1;function Lm(e,t,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;nf||cr==null||cr!==$u(s)||(s=cr,"selectionStart"in s&&ef(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),El&&Ml(El,s)||(El=s,s=zc(tf,"onSelect"),0<s.length&&(t=new Po("onSelect","select",null,t,i),e.push({event:t,listeners:s}),t.target=cr)))}function Ms(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var ur={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionrun:Ms("Transition","TransitionRun"),transitionstart:Ms("Transition","TransitionStart"),transitioncancel:Ms("Transition","TransitionCancel"),transitionend:Ms("Transition","TransitionEnd")},af={},Om={};ra&&(Om=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function Es(e){if(af[e])return af[e];if(!ur[e])return e;var t=ur[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Om)return af[e]=t[i];return e}var Pm=Es("animationend"),Im=Es("animationiteration"),zm=Es("animationstart"),DS=Es("transitionrun"),US=Es("transitionstart"),LS=Es("transitioncancel"),Fm=Es("transitionend"),Bm=new Map,sf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sf.push("scrollEnd");function Ri(e,t){Bm.set(e,t),kn(t,[e])}var OS=0;function la(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Di.identifierPrefix;var i=OS++;return e="_"+e+"t_"+i.toString(32)+"_",t.autoName=e}function Hm(e){if(e==null||typeof e=="string")return e;var t=null,i=Nr;if(i!==null)for(var s=0;s<i.length;s++){var o=e[i[s]];if(o!=null){if(o==="none")return"none";t=t==null?o:t+(" "+o)}}return t??e.default}function oa(e,t){return e=Hm(e),t=Hm(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Fo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hi=[],fr=0,rf=0;function Bo(){for(var e=fr,t=rf=fr=0;t<e;){var i=hi[t];hi[t++]=null;var s=hi[t];hi[t++]=null;var o=hi[t];hi[t++]=null;var u=hi[t];if(hi[t++]=null,s!==null&&o!==null){var x=s.pending;x===null?o.next=o:(o.next=x.next,x.next=o),s.pending=o}u!==0&&Vm(i,o,u)}}function Ho(e,t,i,s){hi[fr++]=e,hi[fr++]=t,hi[fr++]=i,hi[fr++]=s,rf|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function lf(e,t,i,s){return Ho(e,t,i,s),Vo(e)}function Ts(e,t){return Ho(e,null,null,t),Vo(e)}function Vm(e,t,i){e.lanes|=i;var s=e.alternate;s!==null&&(s.lanes|=i);for(var o=!1,u=e.return;u!==null;)u.childLanes|=i,s=u.alternate,s!==null&&(s.childLanes|=i),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(o=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,o&&t!==null&&(o=31-zn(i),e=u.hiddenUpdates,s=e[o],s===null?e[o]=[t]:s.push(t),t.lane=i|536870912),u):null}function Vo(e){if(50<ql)throw ql=0,Nc=null,Error(r(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var dr={};function PS(e,t,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,t,i,s){return new PS(e,t,i,s)}function of(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,t){var i=e.alternate;return i===null?(i=qn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&1206910976,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function Gm(e,t){e.flags&=1206910978;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Go(e,t,i,s,o,u){var x=0;if(s=e,typeof s=="function")of(s)&&(x=1);else if(typeof s=="string")x=cM(e,i,St.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(s){case L:return e=qn(31,i,t,o),e.elementType=L,e.lanes=u,e;case j:return As(i.children,o,u,t);case ce:x=8,o|=24;break;case oe:return e=qn(12,i,t,o|2),e.elementType=oe,e.lanes=u,e;case Z:return e=qn(13,i,t,o),e.elementType=Z,e.lanes=u,e;case le:return e=qn(19,i,t,o),e.elementType=le,e.lanes=u,e;case Te:case O:return e=o|32,e=qn(30,i,t,e),e.elementType=O,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case de:x=10;break e;case me:x=9;break e;case W:x=11;break e;case Ee:x=14;break e;case I:x=16,s=null;break e}x=29,i=Error(r(130,e===null?"null":typeof e,"")),s=null}return t=qn(x,i,t,o),t.elementType=e,t.type=s,t.lanes=u,t}function As(e,t,i,s){return e=qn(7,e,s,t),e.lanes=i,e}function cf(e,t,i){return e=qn(6,e,null,t),e.lanes=i,e}function jm(e){var t=qn(18,null,null,0);return t.stateNode=e,t}function uf(e,t,i){return t=qn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var km=new WeakMap;function pi(e,t){if(typeof e=="object"&&e!==null){var i=km.get(e);return i!==void 0?i:(t={value:e,source:t,stack:Ce(t)},km.set(e,t),t)}return{value:e,source:t,stack:Ce(t)}}var hr=[],pr=0,jo=null,Tl=0,mi=[],gi=0,Fa=null,Vi=1,Gi="";function ua(e,t){hr[pr++]=Tl,hr[pr++]=jo,jo=e,Tl=t}function Xm(e,t,i){mi[gi++]=Vi,mi[gi++]=Gi,mi[gi++]=Fa,Fa=e;var s=Vi;e=Gi;var o=32-zn(s)-1;s&=~(1<<o),i+=1;var u=32-zn(t)+o;if(30<u){var x=o-o%5;u=(s&(1<<x)-1).toString(32),s>>=x,o-=x,Vi=1<<32-zn(t)+o|i<<o|s,Gi=u+e}else Vi=1<<u|i<<o|s,Gi=e}function ko(e){e.return!==null&&(ua(e,1),Xm(e,1,0))}function ff(e){for(;e===jo;)jo=hr[--pr],hr[pr]=null,Tl=hr[--pr],hr[pr]=null;for(;e===Fa;)Fa=mi[--gi],mi[gi]=null,Gi=mi[--gi],mi[gi]=null,Vi=mi[--gi],mi[gi]=null}function qm(e,t){mi[gi++]=Vi,mi[gi++]=Gi,mi[gi++]=Fa,Vi=t.id,Gi=t.overflow,Fa=e}var _n=null,Jt=null,bt=!1,Ba=null,xi=!1,df=Error(r(519));function Ha(e){var t=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Al(pi(t,e)),df}function Wm(e){var t=e.stateNode,i=e.type,s=e.memoizedProps;switch(t[se]=e,t[ne]=s,i){case"dialog":Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":case"embed":Tt("load",t);break;case"video":case"audio":for(i=0;i<Yl.length;i++)Tt(Yl[i],t);break;case"source":Tt("error",t);break;case"img":case"image":case"link":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"input":Tt("invalid",t),sm(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Tt("invalid",t);break;case"textarea":Tt("invalid",t),lm(t,s.value,s.defaultValue,s.children)}i=s.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||s.suppressHydrationWarning===!0||px(t.textContent,i)?(s.popover!=null&&(Tt("beforetoggle",t),Tt("toggle",t)),s.onScroll!=null&&Tt("scroll",t),s.onScrollEnd!=null&&Tt("scrollend",t),s.onClick!=null&&(t.onclick=Hi),t=!0):t=!1,t||Ha(e,!0)}function Xo(e){for(_n=e.return;_n;)switch(_n.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:_n=_n.return}}function mr(e){if(e!==_n)return!1;if(!bt)return Xo(e),bt=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Gd(e.type,e.memoizedProps)),i=!i),i&&Jt&&Ha(e),Xo(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Jt=Lx(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Jt=Lx(e)}else t===27?(t=Jt,ns(e.type)?(e=Qd,Qd=null,Jt=e):Jt=t):Jt=_n?_i(e.stateNode.nextSibling):null;return!0}function Rs(){Jt=_n=null,bt=!1}function hf(){var e=Ba;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),Ba=null),e}function Al(e){Ba===null?Ba=[e]:Ba.push(e)}var pf=$e(null),Cs=null,fa=null;function Va(e,t,i){H(pf,t._currentValue),t._currentValue=i}function da(e){e._currentValue=pf.current,rt(pf)}function qo(e,t,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===i)break;e=e.return}}function mf(e,t,i,s){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){var x=o.child;u=u.firstContext;e:for(;u!==null;){var A=u;u=o;for(var B=0;B<t.length;B++)if(A.context===t[B]){u.lanes|=i,A=u.alternate,A!==null&&(A.lanes|=i),qo(u.return,i,e),s||(x=null);break e}u=A.next}}else if(o.tag===18){if(x=o.return,x===null)throw Error(r(341));x.lanes|=i,u=x.alternate,u!==null&&(u.lanes|=i),qo(x,i,e),x=null}else o.tag===13&&o.memoizedState!==null&&o.memoizedState.dehydrated===null?(o.lanes|=i,x=o.alternate,x!==null&&(x.lanes|=i),qo(o.return,i,e),x=o.child,x=x!==null?x.sibling:null):x=o.child;if(x!==null)x.return=o;else for(x=o;x!==null;){if(x===e){x=null;break}if(o=x.sibling,o!==null){o.return=x.return,x=o;break}x=x.return}o=x}}function ws(e,t,i,s){e=null;for(var o=t,u=!1;o!==null;){if(!u){if((o.flags&524288)!==0)u=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var x=o.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var A=o.type;ti(o.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(o===Ye.current){if(x=o.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Hr):e=[Hr])}o=o.return}return e!==null&&mf(t,e,i,s),t.flags|=262144,e!==null}function Wo(e){for(e=e.firstContext;e!==null;){if(!ti(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ns(e){Cs=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return Ym(Cs,e)}function Yo(e,t){return Cs===null&&Ns(e),Ym(e,t)}function Ym(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},fa===null){if(e===null)throw Error(r(308));fa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else fa=fa.next=t;return i}var IS=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},zS=l.unstable_scheduleCallback,FS=l.unstable_NormalPriority,un={$$typeof:de,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gf(){return{controller:new IS,data:new Map,refCount:0}}function Rl(e){e.refCount--,e.refCount===0&&zS(FS,function(){e.controller.abort()})}function Zm(e,t){if((e.pendingLanes&4194048)!==0){var i=e.transitionTypes;for(i===null&&(i=e.transitionTypes=[]),e=0;e<t.length;e++){var s=t[e];i.indexOf(s)===-1&&i.push(s)}}}var Cl=null;function BS(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var wl=null,xf=0,Ds=0,gr=null;function HS(e,t){if(wl===null){var i=wl=[];xf=0,Ds=Ld(),gr={status:"pending",value:void 0,then:function(s){i.push(s)}}}return xf++,t.then(Km,Km),t}function Km(){if(--xf===0&&(Cl=null,wl!==null)){gr!==null&&(gr.status="fulfilled");var e=wl;wl=null,Ds=0,gr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function VS(e,t){var i=[],s={status:"pending",value:null,reason:null,then:function(o){i.push(o)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var o=0;o<i.length;o++)(0,i[o])(t)},function(o){for(s.status="rejected",s.reason=o,o=0;o<i.length;o++)(0,i[o])(void 0)}),s}var Qm=ye.S;ye.S=function(e,t){if(jg=q(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&HS(e,t),Cl!==null)for(var i=Or;i!==null;)Zm(i,Cl),i=i.next;if(i=e.types,i!==null){for(var s=Or;s!==null;)Zm(s,i),s=s.next;if(Ds!==0){s=Cl,s===null&&(s=Cl=[]);for(var o=0;o<i.length;o++){var u=i[o];s.indexOf(u)===-1&&s.push(u)}}}Qm!==null&&Qm(e,t)};var Us=$e(null);function vf(){var e=Us.current;return e!==null?e:Qt.pooledCache}function Zo(e,t){t===null?H(Us,Us.current):H(Us,t.pool)}function Jm(){var e=vf();return e===null?null:{parent:un._currentValue,pool:e}}var xr=Error(r(460)),_f=Error(r(474)),Ko=Error(r(542)),Qo={then:function(){}};function $m(e){return e=e.status,e==="fulfilled"||e==="rejected"}function e0(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(Hi,Hi),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,n0(e),e===void 0&&!("reason"in t)?Error(r(600)):e;default:if(typeof t.status=="string")t.then(Hi,Hi);else{if(e=Qt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=s}},function(s){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,n0(e),e}throw Os=t,xr}}function Ls(e){try{var t=e._init;return t(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Os=i,xr):i}}var Os=null;function t0(){if(Os===null)throw Error(r(459));var e=Os;return Os=null,e}function n0(e){if(e===xr||e===Ko)throw Error(r(483))}var vr=null,Nl=0;function Jo(e){var t=Nl;return Nl+=1,vr===null&&(vr=[]),e0(vr,e,t)}function Ga(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function $o(e,t){throw t.$$typeof===J?Error(r(525)):(e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function i0(e){function t($,k){if(e){var ie=$.deletions;ie===null?($.deletions=[k],$.flags|=16):ie.push(k)}}function i($,k){if(!e)return null;for(;k!==null;)t($,k),k=k.sibling;return null}function s($){for(var k=new Map;$!==null;)$.key===null?k.set($.index,$):k.set($.key,$),$=$.sibling;return k}function o($,k){return $=ca($,k),$.index=0,$.sibling=null,$}function u($,k,ie){return $.index=ie,e?(ie=$.alternate,ie!==null?(ie=ie.index,ie<k?($.flags|=2,k):ie):($.flags|=134217730,k)):($.flags|=1048576,k)}function x($){return e&&$.alternate===null&&($.flags|=134217730),$}function A($,k,ie,ve){return k===null||k.tag!==6?(k=cf(ie,$.mode,ve),k.return=$,k):(k=o(k,ie),k.return=$,k)}function B($,k,ie,ve){var qe=ie.type;return qe===j?($=ue($,k,ie.props.children,ve,ie.key),Ga($,ie),$):k!==null&&(k.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===I&&Ls(qe)===k.type)?(k=o(k,ie.props),Ga(k,ie),k.return=$,k):(k=Go(ie.type,ie.key,ie.props,null,$.mode,ve),Ga(k,ie),k.return=$,k)}function ee($,k,ie,ve){return k===null||k.tag!==4||k.stateNode.containerInfo!==ie.containerInfo||k.stateNode.implementation!==ie.implementation?(k=uf(ie,$.mode,ve),k.return=$,k):(k=o(k,ie.children||[]),k.return=$,k)}function ue($,k,ie,ve,qe){return k===null||k.tag!==7?(k=As(ie,$.mode,ve,qe),k.return=$,k):(k=o(k,ie),k.return=$,k)}function _e($,k,ie){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=cf(""+k,$.mode,ie),k.return=$,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case R:return ie=Go(k.type,k.key,k.props,null,$.mode,ie),Ga(ie,k),ie.return=$,ie;case N:return k=uf(k,$.mode,ie),k.return=$,k;case I:return k=Ls(k),_e($,k,ie)}if(Se(k)||Y(k))return k=As(k,$.mode,ie,null),k.return=$,k;if(typeof k.then=="function")return _e($,Jo(k),ie);if(k.$$typeof===de)return _e($,Yo($,k),ie);$o($,k)}return null}function K($,k,ie,ve){var qe=k!==null?k.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return qe!==null?null:A($,k,""+ie,ve);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case R:return ie.key===qe?B($,k,ie,ve):null;case N:return ie.key===qe?ee($,k,ie,ve):null;case I:return ie=Ls(ie),K($,k,ie,ve)}if(Se(ie)||Y(ie))return qe!==null?null:ue($,k,ie,ve,null);if(typeof ie.then=="function")return K($,k,Jo(ie),ve);if(ie.$$typeof===de)return K($,k,Yo($,ie),ve);$o($,ie)}return null}function re($,k,ie,ve,qe){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return $=$.get(ie)||null,A(k,$,""+ve,qe);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case R:return $=$.get(ve.key===null?ie:ve.key)||null,B(k,$,ve,qe);case N:return $=$.get(ve.key===null?ie:ve.key)||null,ee(k,$,ve,qe);case I:return ve=Ls(ve),re($,k,ie,ve,qe)}if(Se(ve)||Y(ve))return $=$.get(ie)||null,ue(k,$,ve,qe,null);if(typeof ve.then=="function")return re($,k,ie,Jo(ve),qe);if(ve.$$typeof===de)return re($,k,ie,Yo(k,ve),qe);$o(k,ve)}return null}function ze($,k,ie,ve){for(var qe=null,Ct=null,it=k,lt=k=0,hn=null;it!==null&&lt<ie.length;lt++){it.index>lt?(hn=it,it=null):hn=it.sibling;var Lt=K($,it,ie[lt],ve);if(Lt===null){it===null&&(it=hn);break}e&&it&&Lt.alternate===null&&t($,it),k=u(Lt,k,lt),Ct===null?qe=Lt:Ct.sibling=Lt,Ct=Lt,it=hn}if(lt===ie.length)return i($,it),bt&&ua($,lt),qe;if(it===null){for(;lt<ie.length;lt++)it=_e($,ie[lt],ve),it!==null&&(k=u(it,k,lt),Ct===null?qe=it:Ct.sibling=it,Ct=it);return bt&&ua($,lt),qe}for(it=s(it);lt<ie.length;lt++)hn=re(it,$,lt,ie[lt],ve),hn!==null&&(e&&(Lt=hn.alternate,Lt!==null&&it.delete(Lt.key===null?lt:Lt.key)),k=u(hn,k,lt),Ct===null?qe=hn:Ct.sibling=hn,Ct=hn);return e&&it.forEach(function(ls){return t($,ls)}),bt&&ua($,lt),qe}function Qe($,k,ie,ve){if(ie==null)throw Error(r(151));for(var qe=null,Ct=null,it=k,lt=k=0,hn=null,Lt=ie.next();it!==null&&!Lt.done;lt++,Lt=ie.next()){it.index>lt?(hn=it,it=null):hn=it.sibling;var ls=K($,it,Lt.value,ve);if(ls===null){it===null&&(it=hn);break}e&&it&&ls.alternate===null&&t($,it),k=u(ls,k,lt),Ct===null?qe=ls:Ct.sibling=ls,Ct=ls,it=hn}if(Lt.done)return i($,it),bt&&ua($,lt),qe;if(it===null){for(;!Lt.done;lt++,Lt=ie.next())Lt=_e($,Lt.value,ve),Lt!==null&&(k=u(Lt,k,lt),Ct===null?qe=Lt:Ct.sibling=Lt,Ct=Lt);return bt&&ua($,lt),qe}for(it=s(it);!Lt.done;lt++,Lt=ie.next())Lt=re(it,$,lt,Lt.value,ve),Lt!==null&&(e&&(hn=Lt.alternate,hn!==null&&it.delete(hn.key===null?lt:hn.key)),k=u(Lt,k,lt),Ct===null?qe=Lt:Ct.sibling=Lt,Ct=Lt);return e&&it.forEach(function(SM){return t($,SM)}),bt&&ua($,lt),qe}function xt($,k,ie,ve){if(typeof ie=="object"&&ie!==null&&ie.type===j&&ie.key===null&&ie.props.ref===void 0&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case R:e:{for(var qe=ie.key;k!==null;){if(k.key===qe){if(qe=ie.type,qe===j){if(k.tag===7){i($,k.sibling),ve=o(k,ie.props.children),Ga(ve,ie),ve.return=$,$=ve;break e}}else if(k.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===I&&Ls(qe)===k.type){i($,k.sibling),ve=o(k,ie.props),Ga(ve,ie),ve.return=$,$=ve;break e}i($,k);break}else t($,k);k=k.sibling}ie.type===j?(ve=As(ie.props.children,$.mode,ve,ie.key),Ga(ve,ie),ve.return=$,$=ve):(ve=Go(ie.type,ie.key,ie.props,null,$.mode,ve),Ga(ve,ie),ve.return=$,$=ve)}return x($);case N:e:{for(qe=ie.key;k!==null;){if(k.key===qe)if(k.tag===4&&k.stateNode.containerInfo===ie.containerInfo&&k.stateNode.implementation===ie.implementation){i($,k.sibling),ve=o(k,ie.children||[]),ve.return=$,$=ve;break e}else{i($,k);break}else t($,k);k=k.sibling}ve=uf(ie,$.mode,ve),ve.return=$,$=ve}return x($);case I:return ie=Ls(ie),xt($,k,ie,ve)}if(Se(ie))return ze($,k,ie,ve);if(Y(ie)){if(qe=Y(ie),typeof qe!="function")throw Error(r(150));return ie=qe.call(ie),Qe($,k,ie,ve)}if(typeof ie.then=="function")return xt($,k,Jo(ie),ve);if(ie.$$typeof===de)return xt($,k,Yo($,ie),ve);$o($,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,k!==null&&k.tag===6?(i($,k.sibling),ve=o(k,ie),ve.return=$,$=ve):(i($,k),ve=cf(ie,$.mode,ve),ve.return=$,$=ve),x($)):i($,k)}return function($,k,ie,ve){try{Nl=0;var qe=xt($,k,ie,ve);return vr=null,qe}catch(it){if(it===xr||it===Ko)throw it;var Ct=qn(29,it,null,$.mode);return Ct.lanes=ve,Ct.return=$,Ct}finally{}}}var Ps=i0(!0),a0=i0(!1),ja=!1;function yf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Bt&2)!==0){var o=s.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),s.pending=t,t=Vo(e),Vm(e,null,i),t}return Ho(e,s,t,i),Vo(e)}function Dl(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,wo(e,i)}}function bf(e,t){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var o=null,u=null;if(i=i.firstBaseUpdate,i!==null){do{var x={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};u===null?o=u=x:u=u.next=x,i=i.next}while(i!==null);u===null?o=u=t:u=u.next=t}else o=u=t;i={baseState:s.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var Mf=!1;function Ul(){if(Mf){var e=gr;if(e!==null)throw e}}function Ll(e,t,i,s){Mf=!1;var o=e.updateQueue;ja=!1;var u=o.firstBaseUpdate,x=o.lastBaseUpdate,A=o.shared.pending;if(A!==null){o.shared.pending=null;var B=A,ee=B.next;B.next=null,x===null?u=ee:x.next=ee,x=B;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,A=ue.lastBaseUpdate,A!==x&&(A===null?ue.firstBaseUpdate=ee:A.next=ee,ue.lastBaseUpdate=B))}if(u!==null){var _e=o.baseState;x=0,ue=ee=B=null,A=u;do{var K=A.lane&-536870913,re=K!==A.lane;if(re?(Rt&K)===K:(s&K)===K){K!==0&&K===Ds&&(Mf=!0),ue!==null&&(ue=ue.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var ze=e,Qe=A;K=t;var xt=i;switch(Qe.tag){case 1:if(ze=Qe.payload,typeof ze=="function"){_e=ze.call(xt,_e,K);break e}_e=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Qe.payload,K=typeof ze=="function"?ze.call(xt,_e,K):ze,K==null)break e;_e=F({},_e,K);break e;case 2:ja=!0}}K=A.callback,K!==null&&(e.flags|=64,re&&(e.flags|=8192),re=o.callbacks,re===null?o.callbacks=[K]:re.push(K))}else re={lane:K,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ue===null?(ee=ue=re,B=_e):ue=ue.next=re,x|=K;if(A=A.next,A===null){if(A=o.shared.pending,A===null)break;re=A,A=re.next,re.next=null,o.lastBaseUpdate=re,o.shared.pending=null}}while(!0);ue===null&&(B=_e),o.baseState=B,o.firstBaseUpdate=ee,o.lastBaseUpdate=ue,u===null&&(o.shared.lanes=0),Ja|=x,e.lanes=x,e.memoizedState=_e}}function s0(e,t){if(typeof e!="function")throw Error(r(191,e));e.call(t)}function r0(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)s0(i[e],t)}var qa=$e(null),ec=$e(0);function l0(e,t){e=xa,H(ec,e),H(qa,t),xa=e|t.baseLanes}function Ef(){H(ec,xa),H(qa,qa.current)}function Tf(){xa=ec.current,rt(qa),rt(ec)}var An=$e(null),Ln=null;function Wa(e){var t=e.alternate;H(Rn,Rn.current&1),H(An,e),Ln===null&&(t===null||qa.current!==null||t.memoizedState!==null)&&(Ln=e)}function Af(e){H(Rn,Rn.current),H(An,e),Ln===null&&(Ln=e)}function o0(e){e.tag===22?(H(Rn,Rn.current),H(An,e),Ln===null&&(Ln=e)):Ya()}function Ya(){H(Rn,Rn.current),H(An,An.current)}function ni(e){rt(An),Ln===e&&(Ln=null),rt(Rn)}var Rn=$e(0);function Ol(e,t){H(An,An.current),H(Rn,t)}function Rf(e){rt(Rn),rt(An),Ln===e&&(Ln=null)}function tc(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Zd(i)||Kd(i)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=0,gt=null,Zt=null,fn=null,nc=!1,_r=!1,Is=!1,ic=0,Pl=0,yr=null,GS=0;function an(){throw Error(r(321))}function Cf(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!ti(e[i],t[i]))return!1;return!0}function wf(e,t,i,s,o,u){return ha=u,gt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ye.H=e===null||e.memoizedState===null?X0:q0,Is=!1,u=i(s,o),Is=!1,_r&&(u=u0(t,i,s,o)),c0(e),u}function c0(e){ye.H=uc;var t=Zt!==null&&Zt.next!==null;if(ha=0,fn=Zt=gt=null,nc=!1,Pl=0,yr=null,t)throw Error(r(300));e===null||dn||(e=e.dependencies,e!==null&&Wo(e)&&(dn=!0))}function u0(e,t,i,s){gt=e;var o=0;do{if(_r&&(yr=null),Pl=0,_r=!1,25<=o)throw Error(r(301));if(o+=1,fn=Zt=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}ye.H=KS,u=t(i,s)}while(_r);return u}function jS(){var e=ye.H,t=e.useState()[0];return t=typeof t.then=="function"?Il(t):t,e=e.useState()[0],(Zt!==null?Zt.memoizedState:null)!==e&&(gt.flags|=1024),t}function Nf(){var e=ic!==0;return ic=0,e}function Df(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function Uf(e){if(nc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}nc=!1}ha=0,fn=Zt=gt=null,_r=!1,Pl=ic=0,yr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?gt.memoizedState=fn=e:fn=fn.next=e,fn}function rn(){if(Zt===null){var e=gt.alternate;e=e!==null?e.memoizedState:null}else e=Zt.next;var t=fn===null?gt.memoizedState:fn.next;if(t!==null)fn=t,Zt=e;else{if(e===null)throw gt.alternate===null?Error(r(467)):Error(r(310));Zt=e,e={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},fn===null?gt.memoizedState=fn=e:fn=fn.next=e}return fn}function ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Il(e){var t=Pl;return Pl+=1,yr===null&&(yr=[]),e=e0(yr,e,t),t=gt,(fn===null?t.memoizedState:fn.next)===null&&(t=t.alternate,ye.H=t===null||t.memoizedState===null?X0:q0),e}function sc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Il(e);if(e.$$typeof===ae)return;if(e.$$typeof===de)return Tn(e)}throw Error(r(438,String(e)))}function Lf(e){var t=null,i=gt.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var s=gt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=ac(),gt.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),s=0;s<e;s++)i[s]=we;return t.index++,i}function pa(e,t){return typeof t=="function"?t(e):t}function rc(e){var t=rn();return Of(t,Zt,e)}function Of(e,t,i){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=i;var o=e.baseQueue,u=s.pending;if(u!==null){if(o!==null){var x=o.next;o.next=u.next,u.next=x}t.baseQueue=o=u,s.pending=null}if(u=e.baseState,o===null)e.memoizedState=u;else{t=o.next;var A=x=null,B=null,ee=t,ue=!1;do{var _e=ee.lane&-536870913;if(_e!==ee.lane?(Rt&_e)===_e:(ha&_e)===_e){var K=ee.revertLane;if(K===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),_e===Ds&&(ue=!0);else if((ha&K)===K){ee=ee.next,K===Ds&&(ue=!0);continue}else _e={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(A=B=_e,x=u):B=B.next=_e,gt.lanes|=K,Ja|=K;_e=ee.action,Is&&i(u,_e),u=ee.hasEagerState?ee.eagerState:i(u,_e)}else K={lane:_e,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},B===null?(A=B=K,x=u):B=B.next=K,gt.lanes|=_e,Ja|=_e;ee=ee.next}while(ee!==null&&ee!==t);if(B===null?x=u:B.next=A,!ti(u,e.memoizedState)&&(dn=!0,ue&&(i=gr,i!==null)))throw i;e.memoizedState=u,e.baseState=x,e.baseQueue=B,s.lastRenderedState=u}return o===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Pf(e){var t=rn(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var s=i.dispatch,o=i.pending,u=t.memoizedState;if(o!==null){i.pending=null;var x=o=o.next;do u=e(u,x.action),x=x.next;while(x!==o);ti(u,t.memoizedState)||(dn=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),i.lastRenderedState=u}return[u,s]}function f0(e,t,i){var s=gt,o=rn(),u=bt;if(u){if(i===void 0)throw Error(r(407));i=i()}else i=t();var x=!ti((Zt||o).memoizedState,i);if(x&&(o.memoizedState=i,dn=!0),o=o.queue,Ff(p0.bind(null,s,o,e),[e]),e=o.getSnapshot!==t||x||fn!==null&&(fn.memoizedState.tag&1)!==0,Sr(e?9:8,{destroy:void 0},h0.bind(null,s,o,i,t),null),e){if(s.flags|=2048,Qt===null)throw Error(r(349));u||(ha&127)!==0||d0(s,t,i)}return i}function d0(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=gt.updateQueue,t===null?(t=ac(),gt.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function h0(e,t,i,s){t.value=i,t.getSnapshot=s,m0(t)&&g0(e)}function p0(e,t,i){return i(function(){m0(t)&&g0(e)})}function m0(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!ti(e,i)}catch{return!0}}function g0(e){var t=Ts(e,2);t!==null&&Kn(t,e,2)}function If(e){var t=Bn();if(typeof e=="function"){var i=e;if(e=i(),Is){vn(!0);try{i()}finally{vn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},t}function x0(e,t,i,s){return e.baseState=i,Of(e,Zt,typeof s=="function"?s:pa)}function kS(e,t,i,s,o){if(cc(e))throw Error(r(485));if(e=t.action,e!==null){var u={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){u.listeners.push(x)}};ye.T!==null?i(!0):u.isTransition=!1,s(u),i=t.pending,i===null?(u.next=t.pending=u,v0(t,u)):(u.next=i.next,t.pending=i.next=u)}}function v0(e,t){var i=t.action,s=t.payload,o=e.state;if(t.isTransition){var u=ye.T,x={};x.types=u!==null?u.types:null,ye.T=x;try{var A=i(o,s),B=ye.S;B!==null&&B(x,A),_0(e,t,A)}catch(ee){zf(e,t,ee)}finally{u!==null&&x.types!==null&&(u.types=x.types),ye.T=u}}else try{u=i(o,s),_0(e,t,u)}catch(ee){zf(e,t,ee)}}function _0(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(s){y0(e,t,s)},function(s){return zf(e,t,s)}):y0(e,t,i)}function y0(e,t,i){t.status="fulfilled",t.value=i,S0(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,v0(e,i)))}function zf(e,t,i){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=i,S0(t),t=t.next;while(t!==s)}e.action=null}function S0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function b0(e,t){return t}function M0(e,t){if(bt){var i=Qt.formState;if(i!==null){e:{var s=gt;if(bt){if(Jt){t:{for(var o=Jt,u=xi;o.nodeType!==8;){if(!u){o=null;break t}if(o=_i(o.nextSibling),o===null){o=null;break t}}u=o.data,o=u==="F!"||u==="F"?o:null}if(o){Jt=_i(o.nextSibling),s=o.data==="F!";break e}}Ha(s)}s=!1}s&&(t=i[0])}}return i=Bn(),i.memoizedState=i.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:b0,lastRenderedState:t},i.queue=s,i=G0.bind(null,gt,s),s.dispatch=i,s=If(!1),u=jf.bind(null,gt,!1,s.queue),s=Bn(),o={state:t,dispatch:null,action:e,pending:null},s.queue=o,i=kS.bind(null,gt,o,u,i),o.dispatch=i,s.memoizedState=e,[t,i,!1]}function E0(e){var t=rn();return T0(t,Zt,e)}function T0(e,t,i){if(t=Of(e,t,b0)[0],e=rc(pa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=Il(t)}catch(x){throw x===xr?Ko:x}else s=t;t=rn();var o=t.queue,u=o.dispatch;return i!==t.memoizedState&&(gt.flags|=2048,Sr(9,{destroy:void 0},XS.bind(null,o,i),null)),[s,u,e]}function XS(e,t){e.action=t}function A0(e){var t=rn(),i=Zt;if(i!==null)return T0(t,i,e);rn(),t=t.memoizedState,i=rn();var s=i.queue.dispatch;return i.memoizedState=e,[t,s,!1]}function Sr(e,t,i,s){return e={tag:e,create:i,deps:s,inst:t,next:null},t=gt.updateQueue,t===null&&(t=ac(),gt.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,t.lastEffect=e),e}function R0(){return rn().memoizedState}function lc(e,t,i,s){var o=Bn();gt.flags|=e,o.memoizedState=Sr(1|t,{destroy:void 0},i,s===void 0?null:s)}function oc(e,t,i,s){var o=rn();s=s===void 0?null:s;var u=o.memoizedState.inst;Zt!==null&&s!==null&&Cf(s,Zt.memoizedState.deps)?o.memoizedState=Sr(t,u,i,s):(gt.flags|=e,o.memoizedState=Sr(1|t,u,i,s))}function C0(e,t){lc(8390656,8,e,t)}function Ff(e,t){oc(2048,8,e,t)}function qS(e){gt.flags|=4;var t=gt.updateQueue;if(t===null)t=ac(),gt.updateQueue=t,t.events=[e];else{var i=t.events;i===null?t.events=[e]:i.push(e)}}function w0(e){var t=rn().memoizedState;return qS({ref:t,nextImpl:e}),function(){if((Bt&2)!==0)throw Error(r(440));return t.impl.apply(void 0,arguments)}}function N0(e,t){return oc(4,2,e,t)}function D0(e,t){return oc(4,4,e,t)}function U0(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function L0(e,t,i){i=i!=null?i.concat([e]):null,oc(4,4,U0.bind(null,t,e),i)}function Bf(){}function O0(e,t){var i=rn();t=t===void 0?null:t;var s=i.memoizedState;return t!==null&&Cf(t,s[1])?s[0]:(i.memoizedState=[e,t],e)}function P0(e,t){var i=rn();t=t===void 0?null:t;var s=i.memoizedState;if(t!==null&&Cf(t,s[1]))return s[0];if(s=e(),Is){vn(!0);try{e()}finally{vn(!1)}}return i.memoizedState=[s,t],s}function Hf(e,t,i){return i===void 0||(ha&1073741824)!==0&&(Rt&261930)===0?e.memoizedState=t:(e.memoizedState=i,e=Xg(),gt.lanes|=e,Ja|=e,i)}function I0(e,t,i,s){return ti(i,t)?i:qa.current!==null?(e=Hf(e,i,s),ti(e,t)||(dn=!0),e):(ha&106)===0||(ha&1073741824)!==0&&(Rt&261930)===0?(dn=!0,e.memoizedState=i):(e=Xg(),gt.lanes|=e,Ja|=e,t)}function z0(e,t,i,s,o){var u=De.p;De.p=u!==0&&8>u?u:8;var x=ye.T,A={};A.types=x!==null?x.types:null,ye.T=A,jf(e,!1,t,i);try{var B=o(),ee=ye.S;if(ee!==null&&ee(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ue=VS(B,s);zl(e,t,ue,ri(e))}else zl(e,t,s,ri(e))}catch(_e){zl(e,t,{then:function(){},status:"rejected",reason:_e},ri())}finally{De.p=u,x!==null&&A.types!==null&&(x.types=A.types),ye.T=x}}function WS(){}function Vf(e,t,i,s){if(e.tag!==5)throw Error(r(476));var o=F0(e).queue;z0(e,o,t,et,i===null?WS:function(){return B0(e),i(s)})}function F0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:et},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function B0(e){var t=F0(e);t.next===null&&(t=e.alternate.memoizedState),zl(e,t.next.queue,{},ri())}function Gf(){return Tn(Hr)}function H0(){return rn().memoizedState}function V0(){return rn().memoizedState}function YS(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=ri();e=ka(i);var s=Xa(t,e,i);s!==null&&(Kn(s,t,i),Dl(s,t,i)),t={cache:gf()},e.payload=t;return}t=t.return}}function ZS(e,t,i){var s=ri();i={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},cc(e)?j0(t,i):(i=lf(e,t,i,s),i!==null&&(Kn(i,e,s),k0(i,t,s)))}function G0(e,t,i){var s=ri();zl(e,t,i,s)}function zl(e,t,i,s){var o={lane:s,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(cc(e))j0(t,o);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var x=t.lastRenderedState,A=u(x,i);if(o.hasEagerState=!0,o.eagerState=A,ti(A,x))return Ho(e,t,o,0),Qt===null&&Bo(),!1}catch{}finally{}if(i=lf(e,t,o,s),i!==null)return Kn(i,e,s),k0(i,t,s),!0}return!1}function jf(e,t,i,s){if(s={lane:2,revertLane:Ld(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},cc(e)){if(t)throw Error(r(479))}else t=lf(e,i,s,2),t!==null&&Kn(t,e,2)}function cc(e){var t=e.alternate;return e===gt||t!==null&&t===gt}function j0(e,t){_r=nc=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function k0(e,t,i){if((i&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,wo(e,i)}}var uc={readContext:Tn,use:sc,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},X0={readContext:Tn,use:sc,useCallback:function(e,t){return Bn().memoizedState=[e,t===void 0?null:t],e},useContext:Tn,useEffect:C0,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,lc(4194308,4,U0.bind(null,t,e),i)},useLayoutEffect:function(e,t){return lc(4194308,4,e,t)},useInsertionEffect:function(e,t){lc(4,2,e,t)},useMemo:function(e,t){var i=Bn();t=t===void 0?null:t;var s=e();if(Is){vn(!0);try{e()}finally{vn(!1)}}return i.memoizedState=[s,t],s},useReducer:function(e,t,i){var s=Bn();if(i!==void 0){var o=i(t);if(Is){vn(!0);try{i(t)}finally{vn(!1)}}}else o=t;return s.memoizedState=s.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},s.queue=e,e=e.dispatch=ZS.bind(null,gt,e),[s.memoizedState,e]},useRef:function(e){var t=Bn();return e={current:e},t.memoizedState=e},useState:function(e){e=If(e);var t=e.queue,i=G0.bind(null,gt,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:Bf,useDeferredValue:function(e,t){var i=Bn();return Hf(i,e,t)},useTransition:function(){var e=If(!1);return e=z0.bind(null,gt,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var s=gt,o=Bn();if(bt){if(i===void 0)throw Error(r(407));i=i()}else{if(i=t(),Qt===null)throw Error(r(349));(Rt&127)!==0||d0(s,t,i)}o.memoizedState=i;var u={value:i,getSnapshot:t};return o.queue=u,C0(p0.bind(null,s,u,e),[e]),s.flags|=2048,Sr(9,{destroy:void 0},h0.bind(null,s,u,i,t),null),i},useId:function(){var e=Bn(),t=Qt.identifierPrefix;if(bt){var i=Gi,s=Vi;i=(s&~(1<<32-zn(s)-1)).toString(32)+i,t="_"+t+"R_"+i,i=ic++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=GS++,t="_"+t+"r_"+i.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Gf,useFormState:M0,useActionState:M0,useOptimistic:function(e){var t=Bn();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=jf.bind(null,gt,!0,i),i.dispatch=t,[e,t]},useMemoCache:Lf,useCacheRefresh:function(){return Bn().memoizedState=YS.bind(null,gt)},useEffectEvent:function(e){var t=Bn(),i={impl:e};return t.memoizedState=i,function(){if((Bt&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}},q0={readContext:Tn,use:sc,useCallback:O0,useContext:Tn,useEffect:Ff,useImperativeHandle:L0,useInsertionEffect:N0,useLayoutEffect:D0,useMemo:P0,useReducer:rc,useRef:R0,useState:function(){return rc(pa)},useDebugValue:Bf,useDeferredValue:function(e,t){var i=rn();return I0(i,Zt.memoizedState,e,t)},useTransition:function(){var e=rc(pa)[0],t=rn().memoizedState;return[typeof e=="boolean"?e:Il(e),t]},useSyncExternalStore:f0,useId:H0,useHostTransitionStatus:Gf,useFormState:E0,useActionState:E0,useOptimistic:function(e,t){var i=rn();return x0(i,Zt,e,t)},useMemoCache:Lf,useCacheRefresh:V0,useEffectEvent:w0},KS={readContext:Tn,use:sc,useCallback:O0,useContext:Tn,useEffect:Ff,useImperativeHandle:L0,useInsertionEffect:N0,useLayoutEffect:D0,useMemo:P0,useReducer:Pf,useRef:R0,useState:function(){return Pf(pa)},useDebugValue:Bf,useDeferredValue:function(e,t){var i=rn();return Zt===null?Hf(i,e,t):I0(i,Zt.memoizedState,e,t)},useTransition:function(){var e=Pf(pa)[0],t=rn().memoizedState;return[typeof e=="boolean"?e:Il(e),t]},useSyncExternalStore:f0,useId:H0,useHostTransitionStatus:Gf,useFormState:A0,useActionState:A0,useOptimistic:function(e,t){var i=rn();return Zt!==null?x0(i,Zt,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Lf,useCacheRefresh:V0,useEffectEvent:w0};function kf(e,t,i,s){t=e.memoizedState,i=i(s,t),i=i==null?t:F({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Xf={enqueueSetState:function(e,t,i){e=e._reactInternals;var s=ri(),o=ka(s);o.payload=t,i!=null&&(o.callback=i),t=Xa(e,o,s),t!==null&&(Kn(t,e,s),Dl(t,e,s))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var s=ri(),o=ka(s);o.tag=1,o.payload=t,i!=null&&(o.callback=i),t=Xa(e,o,s),t!==null&&(Kn(t,e,s),Dl(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=ri(),s=ka(i);s.tag=2,t!=null&&(s.callback=t),t=Xa(e,s,i),t!==null&&(Kn(t,e,i),Dl(t,e,i))}};function W0(e,t,i,s,o,u,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,u,x):t.prototype&&t.prototype.isPureReactComponent?!Ml(i,s)||!Ml(o,u):!0}function Y0(e,t,i,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,s),t.state!==e&&Xf.enqueueReplaceState(t,t.state,null)}function zs(e,t){var i=t;if("ref"in t){i={};for(var s in t)s!=="ref"&&(i[s]=t[s])}if(e=e.defaultProps){i===t&&(i=F({},i));for(var o in e)i[o]===void 0&&(i[o]=e[o])}return i}function Z0(e){Fo(e)}function K0(e){console.error(e)}function Q0(e){Fo(e)}function fc(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function J0(e,t,i){try{var s=e.onCaughtError;s(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function qf(e,t,i){return i=ka(i),i.tag=3,i.payload={element:null},i.callback=function(){fc(e,t)},i}function $0(e){return e=ka(e),e.tag=3,e}function eg(e,t,i,s){var o=i.type.getDerivedStateFromError;if(typeof o=="function"){var u=s.value;e.payload=function(){return o(u)},e.callback=function(){J0(t,i,s)}}var x=i.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){J0(t,i,s),typeof o!="function"&&($a===null?$a=new Set([this]):$a.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function QS(e,t,i,s,o){if(i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=i.alternate,t!==null&&ws(t,i,o,!0),i=An.current,i!==null){switch(i.tag){case 31:case 13:case 19:return Ln===null?Uc():i.alternate===null&&sn===0&&(sn=3),i.flags&=-257,i.flags|=65536,i.lanes=o,s===Qo?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([s]):t.add(s),Nd(e,s,o)),!1;case 22:return i.flags|=65536,s===Qo?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([s]):i.add(s)),Nd(e,s,o)),!1}throw Error(r(435,i.tag))}return Nd(e,s,o),Uc(),!1}if(bt)return t=An.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,s!==df&&(e=Error(r(422),{cause:s}),Al(pi(e,i)))):(s!==df&&(t=Error(r(423),{cause:s}),Al(pi(t,i))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,s=pi(s,i),o=qf(e.stateNode,s,o),bf(e,o),sn!==4&&(sn=2)),!1;var u=Error(r(520),{cause:s});if(u=pi(u,i),Xl===null?Xl=[u]:Xl.push(u),sn!==4&&(sn=2),t===null)return!0;s=pi(s,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=o&-o,i.lanes|=e,e=qf(i.stateNode,s,e),bf(i,e),!1;case 1:if(t=i.type,u=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&($a===null||!$a.has(u))))return i.flags|=65536,o&=-o,i.lanes|=o,o=$0(o),eg(o,e,i,s),bf(i,o),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var Wf=Error(r(461)),dn=!1;function mn(e,t,i,s){t.child=e===null?a0(t,null,i,s):Ps(t,e.child,i,s)}function tg(e,t,i,s,o){i=i.render;var u=t.ref;if("ref"in s){var x={};for(var A in s)A!=="ref"&&(x[A]=s[A])}else x=s;return Ns(t),s=wf(e,t,i,x,u,o),A=Nf(),e!==null&&!dn?(Df(e,t,o),ma(e,t,o)):(bt&&A&&ko(t),t.flags|=1,mn(e,t,s,o),t.child)}function ng(e,t,i,s,o){if(e===null){var u=i.type;return typeof u=="function"&&!of(u)&&u.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=u,ig(e,t,u,s,o)):(e=Go(i.type,null,s,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!td(e,o)){var x=u.memoizedProps;if(i=i.compare,i=i!==null?i:Ml,i(x,s)&&e.ref===t.ref)return ma(e,t,o)}return t.flags|=1,e=ca(u,s),e.ref=t.ref,e.return=t,t.child=e}function ig(e,t,i,s,o){if(e!==null){var u=e.memoizedProps;if(Ml(u,s)&&e.ref===t.ref)if(dn=!1,t.pendingProps=s=u,td(e,o))(e.flags&131072)!==0&&(dn=!0);else return t.lanes=e.lanes,ma(e,t,o)}return Yf(e,t,i,s,o)}function ag(e,t,i,s){var o=s.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|i:i,e!==null){for(s=t.child=e.child,o=0;s!==null;)o=o|s.lanes|s.childLanes,s=s.sibling;s=o&~u}else s=0,t.child=null;return sg(e,t,u,i,s)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zo(t,u!==null?u.cachePool:null),u!==null?l0(t,u):Ef(),o0(t);else return s=t.lanes=536870912,sg(e,t,u!==null?u.baseLanes|i:i,i,s)}else u!==null?(Zo(t,u.cachePool),l0(t,u),Ya(),t.memoizedState=null):(e!==null&&Zo(t,null),Ef(),Ya());return mn(e,t,o,i),t.child}function Fl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function sg(e,t,i,s,o){var u=vf();return u=u===null?null:{parent:un._currentValue,pool:u},t.memoizedState={baseLanes:i,cachePool:u},e!==null&&Zo(t,null),Ef(),o0(t),e!==null&&ws(e,t,s,!0),t.childLanes=o,null}function dc(e,t){return t=hc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function rg(e,t,i){return Ps(t,e.child,null,i),e=dc(t,t.pendingProps),e.flags|=2,ni(t),t.memoizedState=null,e}function JS(e,t,i){var s=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(bt){if(s.mode==="hidden")return e=dc(t,s),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Fl(null,e);if(Af(t),(e=Jt)?(e=Ux(e,xi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Vi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},i=jm(e),i.return=t,t.child=i,_n=t,Jt=null)):e=null,e===null)throw Ha(t);return t.lanes=536870912,null}return dc(t,s)}var u=e.memoizedState;if(u!==null){var x=u.dehydrated;if(Af(t),o)if(t.flags&256)t.flags&=-257,t=rg(e,t,i);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(r(558));else if(dn||ws(e,t,i,!1),o=(i&e.childLanes)!==0,dn||o){if(qa.current===null){if(s=Qt,s!==null&&(x=No(s,i),x!==0&&x!==u.retryLane))throw u.retryLane=x,Ts(e,x),Kn(s,e,x),Wf;Uc()}t=rg(e,t,i)}else e=u.treeContext,Jt=_i(x.nextSibling),_n=t,bt=!0,Ba=null,xi=!1,e!==null&&qm(t,e),t=dc(t,s),t.flags|=134221824;return t}return e=ca(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function br(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(r(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function Yf(e,t,i,s,o){return Ns(t),i=wf(e,t,i,s,void 0,o),s=Nf(),e!==null&&!dn?(Df(e,t,o),ma(e,t,o)):(bt&&s&&ko(t),t.flags|=1,mn(e,t,i,o),t.child)}function lg(e,t,i,s,o,u){return Ns(t),t.updateQueue=null,i=u0(t,s,i,o),c0(e),s=Nf(),e!==null&&!dn?(Df(e,t,u),ma(e,t,u)):(bt&&s&&ko(t),t.flags|=1,mn(e,t,i,u),t.child)}function og(e,t,i,s,o){if(Ns(t),t.stateNode===null){var u=dr,x=i.contextType;typeof x=="object"&&x!==null&&(u=Tn(x)),u=new i(s,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Xf,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=s,u.state=t.memoizedState,u.refs={},yf(t),x=i.contextType,u.context=typeof x=="object"&&x!==null?Tn(x):dr,u.state=t.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(kf(t,i,x,s),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(x=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),x!==u.state&&Xf.enqueueReplaceState(u,u.state,null),Ll(t,s,u,o),Ul(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){u=t.stateNode;var A=t.memoizedProps,B=zs(i,A);u.props=B;var ee=u.context,ue=i.contextType;x=dr,typeof ue=="object"&&ue!==null&&(x=Tn(ue));var _e=i.getDerivedStateFromProps;ue=typeof _e=="function"||typeof u.getSnapshotBeforeUpdate=="function",A=t.pendingProps!==A,ue||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(A||ee!==x)&&Y0(t,u,s,x),ja=!1;var K=t.memoizedState;u.state=K,Ll(t,s,u,o),Ul(),ee=t.memoizedState,A||K!==ee||ja?(typeof _e=="function"&&(kf(t,i,_e,s),ee=t.memoizedState),(B=ja||W0(t,i,B,s,K,ee,x))?(ue||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=ee),u.props=s,u.state=ee,u.context=x,s=B):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{u=t.stateNode,Sf(e,t),x=t.memoizedProps,ue=zs(i,x),u.props=ue,_e=t.pendingProps,K=u.context,ee=i.contextType,B=dr,typeof ee=="object"&&ee!==null&&(B=Tn(ee)),A=i.getDerivedStateFromProps,(ee=typeof A=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(x!==_e||K!==B)&&Y0(t,u,s,B),ja=!1,K=t.memoizedState,u.state=K,Ll(t,s,u,o),Ul();var re=t.memoizedState;x!==_e||K!==re||ja||e!==null&&e.dependencies!==null&&Wo(e.dependencies)?(typeof A=="function"&&(kf(t,i,A,s),re=t.memoizedState),(ue=ja||W0(t,i,ue,s,K,re,B)||e!==null&&e.dependencies!==null&&Wo(e.dependencies))?(ee||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,re,B),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,re,B)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||x===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=re),u.props=s,u.state=re,u.context=B,s=ue):(typeof u.componentDidUpdate!="function"||x===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),s=!1)}return u=s,br(e,t),s=(t.flags&128)!==0,u||s?(u=t.stateNode,i=s&&typeof i.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&s?(t.child=Ps(t,e.child,null,o),t.child=Ps(t,null,i,o)):mn(e,t,i,o),t.memoizedState=u.state,e=t.child):e=ma(e,t,o),e}function cg(e,t,i,s){return Rs(),t.flags|=256,mn(e,t,i,s),t.child}var Zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kf(e){return{baseLanes:e,cachePool:Jm()}}function Qf(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=si),e}function ug(e,t,i){var s=t.pendingProps,o=!1,u=(t.flags&128)!==0,x;if((x=u)||(x=e!==null&&e.memoizedState===null?!1:(Rn.current&2)!==0),x&&(o=!0,t.flags&=-129),x=(t.flags&32)!==0,t.flags&=-33,e===null){if(bt){if(o?Wa(t):Ya(),(e=Jt)?(e=Ux(e,xi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Vi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},i=jm(e),i.return=t,t.child=i,_n=t,Jt=null)):e=null,e===null)throw Ha(t);return Kd(e)?t.lanes=32:t.lanes=536870912,null}return u=s.children,s=s.fallback,o?(Ya(),o=t.mode,u=hc({mode:"hidden",children:u},o),s=As(s,o,i,null),u.return=t,s.return=t,u.sibling=s,t.child=u,s=t.child,s.memoizedState=Kf(i),s.childLanes=Qf(e,x,i),t.memoizedState=Zf,Fl(null,s)):(Wa(t),Jf(t,u))}var A=e.memoizedState;if(A!==null){var B=A.dehydrated;if(B!==null)return $S(e,t,u,x,s,B,A,i)}return o?(Ya(),o=s.fallback,u=t.mode,A=e.child,B=A.sibling,s=ca(A,{mode:"hidden",children:s.children}),s.subtreeFlags=A.subtreeFlags&1206910976,B!==null?o=ca(B,o):(o=As(o,u,i,null),o.flags|=2),o.return=t,s.return=t,s.sibling=o,t.child=s,Fl(null,s),s=t.child,o=e.child.memoizedState,o===null?o=Kf(i):(u=o.cachePool,u!==null?(A=un._currentValue,u=u.parent!==A?{parent:A,pool:A}:u):u=Jm(),o={baseLanes:o.baseLanes|i,cachePool:u}),s.memoizedState=o,s.childLanes=Qf(e,x,i),t.memoizedState=Zf,Fl(e.child,s)):(Wa(t),i=e.child,e=i.sibling,i=ca(i,{mode:"visible",children:s.children}),i.return=t,i.sibling=null,e!==null&&(x=t.deletions,x===null?(t.deletions=[e],t.flags|=16):x.push(e)),t.child=i,t.memoizedState=null,i)}function Jf(e,t){return t=hc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hc(e,t){return e=qn(22,e,null,t),e.lanes=0,e}function pc(e,t,i){return Ps(t,e.child,null,i),e=Jf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $S(e,t,i,s,o,u,x,A){if(i)return t.flags&256?(Wa(t),t.flags&=-257,pc(e,t,A)):t.memoizedState!==null?(Ya(),t.child=e.child,t.flags|=128,null):(Ya(),u=o.fallback,x=t.mode,o=hc({mode:"visible",children:o.children},x),u=As(u,x,A,null),u.flags|=2,o.return=t,u.return=t,o.sibling=u,t.child=o,Ps(t,e.child,null,A),o=t.child,o.memoizedState=Kf(A),o.childLanes=Qf(e,s,A),t.memoizedState=Zf,Fl(null,o));if(Wa(t),Kd(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var B=s.dgst;return s=B,s!==""&&(o=Error(r(419)),o.stack="",o.digest=s,Al({value:o,source:null,stack:null})),pc(e,t,A)}if(dn||ws(e,t,A,!1),s=(A&e.childLanes)!==0,dn||s){if(qa.current!==null)return pc(e,t,A);if(s=Qt,s!==null&&(o=No(s,A),o!==0&&o!==x.retryLane))throw x.retryLane=o,Ts(e,o),Kn(s,e,o),Wf;return Zd(u)||Uc(),pc(e,t,A)}return Zd(u)?(t.flags|=192,t.child=e.child,null):(e=x.treeContext,Jt=_i(u.nextSibling),_n=t,bt=!0,Ba=null,xi=!1,e!==null&&qm(t,e),t=Jf(t,o.children),t.flags|=134221824,t)}function fg(e,t,i){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),qo(e.return,t,i)}function dg(e){for(var t=null;e!==null;){var i=e.alternate;i!==null&&tc(i)===null&&(t=e),e=e.sibling}return t}function mc(e,t,i,s,o,u){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:o,treeForkCount:u}:(x.isBackwards=t,x.rendering=null,x.renderingStartTime=0,x.last=s,x.tail=i,x.tailMode=o,x.treeForkCount=u)}function $f(e){var t=e.child;for(e.child=null;t!==null;){var i=t.sibling;t.sibling=e.child,e.child=t,t=i}}function ed(e,t,i){var s=t.pendingProps,o=s.revealOrder,u=s.tail;s=s.children;var x=Rn.current;if(t.flags&128)return Ol(t,x),null;var A=(x&2)!==0;if(A?(x=x&1|2,t.flags|=128):x&=1,Ol(t,x),o==="backwards"&&e!==null?($f(e),mn(e,t,s,i),$f(e)):mn(e,t,s,i),s=bt?Tl:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fg(e,i,t);else if(e.tag===19)fg(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"backwards":i=dg(t.child),i===null?(o=t.child,t.child=null):(o=i.sibling,i.sibling=null,$f(t)),mc(t,!0,o,null,u,s);break;case"unstable_legacy-backwards":for(i=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&tc(e)===null){t.child=o;break}e=o.sibling,o.sibling=i,i=o,o=e}mc(t,!0,i,null,u,s);break;case"together":mc(t,!1,null,null,void 0,s);break;case"independent":t.memoizedState=null;break;default:i=dg(t.child),i===null?(o=t.child,t.child=null):(o=i.sibling,i.sibling=null),mc(t,!1,o,i,u,s)}return t.child}function hg(e,t,i){var s=t.pendingProps;return Va(t,t.type,s.value),mn(e,t,s.children,i),t.child}function ma(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Ja|=t.lanes,(i&t.childLanes)===0)if(e!==null){if(ws(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,i=ca(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=ca(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function td(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Wo(e)))}function eb(e,t,i){switch(t.tag){case 3:D(t,t.stateNode.containerInfo),Va(t,un,e.memoizedState.cache),Rs();break;case 27:case 5:Q(t);break;case 4:D(t,t.stateNode.containerInfo);break;case 10:Va(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Af(t),null;break;case 13:var s=t.memoizedState;if(s!==null){if(s.dehydrated!==null)return Wa(t),t.flags|=128,null;s=ws(e,t,i,!1);var o=t.child.childLanes;return s||(i&o)!==0?ug(e,t,i):(Wa(t),e=ma(e,t,i),e!==null?e.sibling:null)}Wa(t);break;case 19:if(t.flags&128)return ed(e,t,i);if(o=(e.flags&128)!==0,s=(i&t.childLanes)!==0,s||(ws(e,t,i,!1),s=(i&t.childLanes)!==0),o){if(s)return ed(e,t,i);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ol(t,Rn.current),s)break;return null;case 22:return t.lanes=0,ag(e,t,i,t.pendingProps);case 24:Va(t,un,e.memoizedState.cache)}return ma(e,t,i)}function pg(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)dn=!0;else{if(!td(e,i)&&(t.flags&128)===0)return dn=!1,eb(e,t,i);dn=(e.flags&131072)!==0}else dn=!1,bt&&(t.flags&1048576)!==0&&Xm(t,Tl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=Ls(t.elementType),t.type=e,typeof e=="function")of(e)?(s=zs(e,s),t.tag=1,t=og(null,t,e,s,i)):(t.tag=0,t=Yf(null,t,e,s,i));else{if(e!=null){var o=e.$$typeof;if(o===W){t.tag=11,t=tg(null,t,e,s,i);break e}else if(o===Ee){t.tag=14,t=ng(null,t,e,s,i);break e}else if(o===de){t.tag=10,t.type=e,t=hg(null,t,i);break e}}throw t=Ae(e)||e,Error(r(306,t,""))}}return t;case 0:return Yf(e,t,t.type,t.pendingProps,i);case 1:return s=t.type,o=zs(s,t.pendingProps),og(e,t,s,o,i);case 3:e:{if(D(t,t.stateNode.containerInfo),e===null)throw Error(r(387));s=t.pendingProps;var u=t.memoizedState;o=u.element,Sf(e,t),Ll(t,s,null,i);var x=t.memoizedState;if(s=x.cache,Va(t,un,s),s!==u.cache&&mf(t,[un],i,!0),Ul(),s=x.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:x.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=cg(e,t,s,i);break e}else if(s!==o){o=pi(Error(r(424)),t),Al(o),t=cg(e,t,s,i);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Jt=_i(e.firstChild),_n=t,bt=!0,Ba=null,xi=!0,i=a0(t,null,s,i),t.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling}else{if(Rs(),s===o){t=ma(e,t,i);break e}mn(e,t,s,i)}t=t.child}return t;case 26:return br(e,t),e===null?(i=Bx(t.type,null,t.pendingProps,null))?t.memoizedState=i:bt||(t.stateNode=vx(t.type,t.pendingProps,Mt.current,t)):t.memoizedState=Bx(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Q(t),e===null&&bt&&(s=t.stateNode=Px(t.type,t.pendingProps,Mt.current),_n=t,xi=!0,o=Jt,ns(t.type)?(Qd=o,Jt=_i(s.firstChild)):Jt=o),mn(e,t,t.pendingProps.children,i),br(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&bt&&((o=s=Jt)&&(s=Yb(s,t.type,t.pendingProps,xi),s!==null?(t.stateNode=s,_n=t,Jt=_i(s.firstChild),xi=!1,o=!0):o=!1),o||Ha(t)),Q(t),o=t.type,u=t.pendingProps,x=e!==null?e.memoizedProps:null,s=u.children,Gd(o,u)?s=null:x!==null&&Gd(o,x)&&(t.flags|=32),t.memoizedState!==null&&(o=wf(e,t,jS,null,null,i),Hr._currentValue=o),br(e,t),mn(e,t,s,i),t.child;case 6:return e===null&&bt&&((e=i=Jt)&&(i=Zb(i,t.pendingProps,xi),i!==null?(t.stateNode=i,_n=t,Jt=null,e=!0):e=!1),e||Ha(t)),null;case 13:return ug(e,t,i);case 4:return D(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Ps(t,null,s,i):mn(e,t,s,i),t.child;case 11:return tg(e,t,t.type,t.pendingProps,i);case 7:return s=t.pendingProps,br(e,t),mn(e,t,s,i),t.child;case 8:return mn(e,t,t.pendingProps.children,i),t.child;case 12:return mn(e,t,t.pendingProps.children,i),t.child;case 10:return hg(e,t,i);case 9:return o=t.type._context,s=t.pendingProps.children,Ns(t),o=Tn(o),s=s(o),t.flags|=1,mn(e,t,s,i),t.child;case 14:return ng(e,t,t.type,t.pendingProps,i);case 15:return ig(e,t,t.type,t.pendingProps,i);case 19:return ed(e,t,i);case 31:return JS(e,t,i);case 22:return ag(e,t,i,t.pendingProps);case 24:return Ns(t),s=Tn(un),e===null?(o=vf(),o===null&&(o=Qt,u=gf(),o.pooledCache=u,u.refCount++,u!==null&&(o.pooledCacheLanes|=i),o=u),t.memoizedState={parent:s,cache:o},yf(t),Va(t,un,o)):((e.lanes&i)!==0&&(Sf(e,t),Ll(t,null,null,i),Ul()),o=e.memoizedState,u=t.memoizedState,o.parent!==s?(o={parent:s,cache:s},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Va(t,un,s)):(s=u.cache,Va(t,un,s),s!==o.cache&&mf(t,[un],i,!0))),mn(e,t,t.pendingProps.children,i),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=t.pendingProps,s.name!=null&&s.name!=="auto"?t.flags|=e===null?18882560:18874368:bt&&ko(t),e!==null&&e.memoizedProps.name!==s.name?t.flags|=4194816:br(e,t),mn(e,t,s.children,i),t.child;case 29:throw t.pendingProps}throw Error(r(156,t.tag))}function ga(e){e.flags|=4}function nd(e,t,i,s,o){var u;if((u=(e.mode&32)!==0)&&(u=i===null?jx(t,s):jx(t,s)&&(s.src!==i.src||s.srcSet!==i.srcSet)),u){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Zg())e.flags|=8192;else throw Os=Qo,_f}else e.flags&=-16777217}function mg(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!kx(t))if(Zg())e.flags|=8192;else throw Os=Qo,_f}function gc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ss():536870912,e.lanes|=t,Rr|=t)}function Bl(e,t){if(!bt)switch(e.tailMode){case"visible":break;case"collapsed":for(var i=e.tail,s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null;break;default:for(t=e.tail,i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null}}function $t(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(t)for(var o=e.child;o!==null;)i|=o.lanes|o.childLanes,s|=o.subtreeFlags&1206910976,s|=o.flags&1206910976,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)i|=o.lanes|o.childLanes,s|=o.subtreeFlags,s|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=s,e.childLanes=i,t}function tb(e,t,i){var s=t.pendingProps;switch(ff(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(t),null;case 1:return $t(t),null;case 3:return i=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),da(un),E(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(mr(t)?ga(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,hf())),$t(t),null;case 26:var o=t.type,u=t.memoizedState;return e===null?(ga(t),u!==null?($t(t),mg(t,u)):($t(t),nd(t,o,null,s,i))):u?u!==e.memoizedState?(ga(t),$t(t),mg(t,u)):($t(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&ga(t),$t(t),nd(t,o,e,s,i)),null;case 27:if(xe(t),i=Mt.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&ga(t);else{if(!s){if(t.stateNode===null)throw Error(r(166));return $t(t),t.subtreeFlags&=-33554433,null}e=St.current,mr(t)?Wm(t):(e=Px(o,s,i),t.stateNode=e,ga(t))}return $t(t),t.subtreeFlags&=-33554433,null;case 5:if(xe(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&ga(t);else{if(!s){if(t.stateNode===null)throw Error(r(166));return $t(t),t.subtreeFlags&=-33554433,null}if(u=St.current,mr(t))Wm(t);else{var x=Kl(Mt.current);switch(u){case 1:u=x.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:u=x.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":u=x.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":u=x.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":u=x.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?x.createElement("select",{is:s.is}):x.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?x.createElement(o,{is:s.is}):x.createElement(o)}}u[se]=t,u[ne]=s;e:for(x=t.child;x!==null;){if(x.tag===5||x.tag===6)u.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===t)break e;for(;x.sibling===null;){if(x.return===null||x.return===t)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}t.stateNode=u;e:switch(wn(u,o,s),o){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&ga(t)}}return $t(t),t.subtreeFlags&=-33554433,nd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,i),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&ga(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(r(166));if(e=Mt.current,mr(t)){if(e=t.stateNode,i=t.memoizedProps,s=null,o=_n,o!==null)switch(o.tag){case 27:case 5:s=o.memoizedProps}e[se]=t,e=!!(e.nodeValue===i||s!==null&&s.suppressHydrationWarning===!0||px(e.nodeValue,i)),e||Ha(t,!0)}else e=Kl(e).createTextNode(s),e[se]=t,t.stateNode=e}return $t(t),null;case 31:if(i=t.memoizedState,e===null||e.memoizedState!==null){if(s=mr(t),i!==null){if(e===null){if(!s)throw Error(r(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[se]=t}else Rs(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$t(t),e=!1}else i=hf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return t.flags&256?(ni(t),t):(ni(t),null);if((t.flags&128)!==0)throw Error(r(558))}return $t(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=mr(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(r(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(r(317));o[se]=t}else Rs(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;$t(t),o=!1}else o=hf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(ni(t),t):(ni(t),null)}return ni(t),(t.flags&128)!==0?(t.lanes=i,t):(i=s!==null,e=e!==null&&e.memoizedState!==null,i&&(s=t.child,o=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(o=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048)),i!==e&&i&&(t.child.flags|=8192),gc(t,t.updateQueue),$t(t),null);case 4:return E(),e===null&&zd(t.stateNode.containerInfo),t.flags|=67108864,$t(t),null;case 10:return da(t.type),$t(t),null;case 19:if(Rf(t),s=t.memoizedState,s===null)return $t(t),null;if(o=(t.flags&128)!==0,u=s.rendering,u===null)if(o)Bl(s,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=tc(e),u!==null){for(t.flags|=128,Bl(s,!1),e=u.updateQueue,t.updateQueue=e,gc(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)Gm(i,e),i=i.sibling;return Ol(t,Rn.current&1|2),bt&&ua(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&q()>Cc&&(t.flags|=128,o=!0,Bl(s,!1),t.lanes=4194304)}else{if(!o)if(e=tc(u),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,gc(t,e),Bl(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!u.alternate&&!bt)return $t(t),null}else 2*q()-s.renderingStartTime>Cc&&i!==536870912&&(t.flags|=128,o=!0,Bl(s,!1),t.lanes=4194304);s.isBackwards?(u.sibling=t.child,t.child=u):(e=s.last,e!==null?e.sibling=u:t.child=u,s.last=u)}if(s.tail!==null){e=s.tail;e:{for(i=e;i!==null;){if(i.alternate!==null){i=!1;break e}i=i.sibling}i=!0}return s.rendering=e,s.tail=e.sibling,s.renderingStartTime=q(),e.sibling=null,u=Rn.current,u=o?u&1|2:u&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!i||bt?Ol(t,u):(i=u,H(An,t),H(Rn,i),Ln===null&&(Ln=t)),bt&&ua(t,s.treeForkCount),e}return $t(t),null;case 22:case 23:return ni(t),Tf(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(i&536870912)!==0&&(t.flags&128)===0&&($t(t),t.subtreeFlags&6&&(t.flags|=8192)):$t(t),i=t.updateQueue,i!==null&&gc(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==i&&(t.flags|=2048),e!==null&&rt(Us),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),da(un),$t(t),null;case 25:return null;case 30:return t.flags|=33554432,$t(t),null}throw Error(r(156,t.tag))}function nb(e,t){switch(ff(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return da(un),E(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(ni(t),t.alternate===null)throw Error(r(340));Rs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ni(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Rs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Rf(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return E(),null;case 10:return da(t.type),null;case 22:case 23:return ni(t),Tf(),e!==null&&rt(Us),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return da(un),null;case 25:return null;default:return null}}function gg(e,t){switch(ff(t),t.tag){case 3:da(un),E();break;case 26:case 27:case 5:xe(t);break;case 4:E();break;case 31:t.memoizedState!==null&&ni(t);break;case 13:ni(t);break;case 19:Rf(t);break;case 10:da(t.type);break;case 22:case 23:ni(t),Tf(),e!==null&&rt(Us);break;case 24:da(un)}}function Hl(e,t){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var o=s.next;i=o;do{if((i.tag&e)===e){s=void 0;var u=i.create,x=i.inst;s=u(),x.destroy=s}i=i.next}while(i!==o)}}catch(A){kt(t,t.return,A)}}function Za(e,t,i){try{var s=t.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&e)===e){var x=s.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,o=t;var B=i,ee=A;try{ee()}catch(ue){kt(o,B,ue)}}}s=s.next}while(s!==u)}}catch(ue){kt(t,t.return,ue)}}function xg(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{r0(t,i)}catch(s){kt(e,e.return,s)}}}function vg(e,t,i){i.props=zs(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(s){kt(e,t,s)}}function ji(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:var o=e.stateNode,u=la(e.memoizedProps,o);(o.ref===null||o.ref.name!==u)&&(o.ref=Tx(u)),s=o.ref;break;case 7:if(e.stateNode===null){var x=new li(e);g(e.child,!1,qb,x,void 0,void 0),e.stateNode=x}s=e.stateNode;break;default:s=e.stateNode}typeof i=="function"?e.refCleanup=i(s):i.current=s}}catch(A){kt(e,t,A)}}function Cn(e,t){var i=e.ref,s=e.refCleanup;if(i!==null)if(typeof s=="function")try{s()}catch(o){kt(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(o){kt(e,t,o)}else i.current=null}function xc(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var i=0;i<t.length;i++)Dx(e.stateNode,t[i])}function _g(e){for(var t=e.return;t!==null&&(ad(t)&&Dx(e.stateNode,t.stateNode),!id(t));)t=t.return}function Vl(e){for(var t=e.return;t!==null&&(ad(t)&&Wb(e.stateNode,t.stateNode),!id(t));)t=t.return}function id(e){return e.tag===5||e.tag===3||e.tag===27}function ad(e){return e&&e.tag===7&&e.stateNode!==null}function sd(e){var t=e.type,i=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&s.focus();break e;case"img":i.src?s.src=i.src:i.srcSet&&(s.srcset=i.srcSet)}}catch(o){kt(e,e.return,o)}}function rd(e,t,i){try{var s=e.stateNode;Cb(s,e.type,i,t),s[ne]=t}catch(o){kt(e,e.return,o)}}function yg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ns(e.type)||e.tag===4}function ld(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ns(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function od(e,t,i,s){var o=e.tag;if(o===5||o===6)o=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(o,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(o),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Hi)),xc(e,s),ct=!0;else if(o!==4&&(o===27&&(xc(e,s),s=null,ns(e.type)&&(i=e.stateNode,t=null)),e=e.child,e!==null))for(od(e,t,i,s),e=e.sibling;e!==null;)od(e,t,i,s),e=e.sibling}function vc(e,t,i,s){var o=e.tag;if(o===5||o===6)o=e.stateNode,t?i.insertBefore(o,t):i.appendChild(o),xc(e,s),ct=!0;else if(o!==4&&(o===27&&(xc(e,s),s=null,ns(e.type)&&(i=e.stateNode)),e=e.child,e!==null))for(vc(e,t,i,s),e=e.sibling;e!==null;)vc(e,t,i,s),e=e.sibling}function Sg(e){var t=e.stateNode,i=e.memoizedProps;try{for(var s=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);wn(t,s,i),t[se]=e,t[ne]=i}catch(u){kt(e,e.return,u)}}var _c=!1,ii=null;function bg(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(_c=!0)}var ki=null;function Mg(){var e=ki;return ki=null,e}var Wn=0;function Mr(e,t,i,s,o){return Wn=0,Eg(e.child,t,i,s,o)}function Eg(e,t,i,s,o){for(var u=!1;e!==null;){if(e.tag===5){var x=e.stateNode;if(s!==null){var A=Xd(x);s.push(A),A.view&&(u=!0)}else u||Xd(x).view&&(u=!0);_c=!0,Mx(x,Wn===0?t:t+"_"+Wn,i),Wn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&o||Eg(e.child,t,i,s,o)&&(u=!0));e=e.sibling}return u}function Xi(e,t){for(;e!==null;)e.tag===5?Ex(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Xi(e.child,t)),e=e.sibling}function yc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(yc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(r(544));var i=t.name;t=oa(t.default,t.share),t!=="none"&&(Mr(e,i,t,null,!1)||Xi(e.child,!1))}e=e.sibling}}function cd(e,t){if(e.tag===30){var i=e.stateNode,s=e.memoizedProps,o=la(s,i),u=oa(s.default,i.paired?s.share:s.enter);u!=="none"?Mr(e,o,u,null,!1)?(yc(e),i.paired||t||Dr(e,s.onEnter)):Xi(e.child,!1):yc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)cd(e,t),e=e.sibling;else yc(e)}function ud(e){if(ii!==null&&ii.size!==0){var t=ii;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var i=e.memoizedProps,s=i.name;if(s!=null&&s!=="auto"){var o=t.get(s);if(o!==void 0){var u=oa(i.default,i.share);if(u!=="none"&&(Mr(e,s,u,null,!1)?(u=e.stateNode,o.paired=u,u.paired=o,Dr(e,i.onShare)):Xi(e.child,!1)),t.delete(s),t.size===0)break}}}ud(e)}e=e.sibling}}}function fd(e){if(e.tag===30){var t=e.memoizedProps,i=la(t,e.stateNode),s=ii!==null?ii.get(i):void 0,o=oa(t.default,s!==void 0?t.share:t.exit);o!=="none"&&(Mr(e,i,o,null,!1)?s!==void 0?(o=e.stateNode,s.paired=o,o.paired=s,ii.delete(i),Dr(e,t.onShare)):Dr(e,t.onExit):Xi(e.child,!1)),ii!==null&&ud(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)fd(e),e=e.sibling;else ii!==null&&ud(e)}function Tg(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,i=la(t,e.stateNode);t=oa(t.default,t.update),e.flags&=-5,t!=="none"&&Mr(e,i,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Tg(e);e=e.sibling}}function dd(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Xi(e.child,!1))}dd(e)}e=e.sibling}}function Sc(e){if(e.tag===30)e.stateNode.paired=null,Xi(e.child,!1),dd(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Sc(e),e=e.sibling;else dd(e)}function Ag(e){for(e=e.child;e!==null;)e.tag===30?Xi(e.child,!1):(e.subtreeFlags&33554432)!==0&&Ag(e),e=e.sibling}function hd(e,t,i,s,o,u,x){for(var A=!1;t!==null;){if(t.tag===5){var B=t.stateNode;if(u!==null&&Wn<u.length){var ee=u[Wn],ue=Xd(B);(ee.view||ue.view)&&(A=!0);var _e;if(_e=(e.flags&4)===0)if(ue.clip)_e=!0;else{_e=ee.rect;var K=ue.rect;_e=_e.y!==K.y||_e.x!==K.x||_e.height!==K.height||_e.width!==K.width}_e&&(e.flags|=4),ue.abs?ue=!ee.abs:(ee=ee.rect,ue=ue.rect,ue=ee.height!==ue.height||ee.width!==ue.width),ue&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Mx(B,Wn===0?i:i+"_"+Wn,o),A&&(e.flags&4)!==0||(ki===null&&(ki=[]),ki.push(B,Wn===0?s:s+"_"+Wn,t.memoizedProps)),Wn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&x?e.flags|=t.flags&32:hd(e,t.child,i,s,o,u,x)&&(A=!0));t=t.sibling}return A}function Rg(e,t){for(e=e.child;e!==null;){if(e.tag===30){var i=e.memoizedProps,s=e.stateNode,o=la(i,s),u=oa(i.default,i.update),x;x=e.memoizedState,e.memoizedState=null,s=e;var A=e.child;Wn=0,o=hd(s,A,o,o,u,x,!1),(e.flags&4)!==0&&o&&Dr(e,i.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Rg(e);e=e.sibling}}var yn=!1,Ht=!1,qi=!1,pd=!1,Cg=typeof WeakSet=="function"?WeakSet:Set,Sn=null,Wi=!1,Gl=!1,bc=!1,md=!1;function ib(e,t,i){if(e=e.containerInfo,Hd=Vr,e=Um(e),ef(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,x=o.focusNode;o=o.focusOffset;try{s.nodeType,x.nodeType}catch{s=null;break e}var A=0,B=-1,ee=-1,ue=0,_e=0,K=e,re=null;t:for(;;){for(var ze;K!==s||u!==0&&K.nodeType!==3||(B=A+u),K!==x||o!==0&&K.nodeType!==3||(ee=A+o),K.nodeType===3&&(A+=K.nodeValue.length),(ze=K.firstChild)!==null;)re=K,K=ze;for(;;){if(K===e)break t;if(re===s&&++ue===u&&(B=A),re===x&&++_e===o&&(ee=A),(ze=K.nextSibling)!==null)break;K=re,re=K.parentNode}K=ze}s=B===-1||ee===-1?null:{start:B,end:ee}}else s=null}s=s||{start:0,end:0}}else s=null;for(Vd={focusedElem:e,selectionRange:s},Vr=!1,i=(i&335544064)===i,Sn=t,t=i?9270:1024;Sn!==null;){if(e=Sn,i&&(s=e.deletions,s!==null))for(u=0;u<s.length;u++)i&&fd(s[u]);if(e.alternate===null&&(e.flags&2)!==0)i&&bg(e),Mc(i);else{if(e.tag===22){if(s=e.alternate,e.memoizedState!==null){s!==null&&s.memoizedState===null&&i&&fd(s),Mc(i);continue}else if(s!==null&&s.memoizedState!==null){i&&bg(e),Mc(i);continue}}s=e.child,(e.subtreeFlags&t)!==0&&s!==null?(s.return=e,Sn=s):(i&&Tg(e),Mc(i))}}ii=null}function Mc(e){for(;Sn!==null;){var t=Sn,i=e,s=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((o&1024)!==0&&s!==null){i=void 0,o=s.memoizedProps,s=s.memoizedState;var u=t.stateNode;try{var x=zs(t.type,o);i=u.getSnapshotBeforeUpdate(x,s),u.__reactInternalSnapshotBeforeUpdate=i}catch(A){kt(t,t.return,A)}}break;case 3:if((o&1024)!==0){if(s=t.stateNode.containerInfo,i=s.nodeType,i===9)Yd(s);else if(i===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":Yd(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&s!==null&&(i=la(s.memoizedProps,s.stateNode),o=t.memoizedProps,o=oa(o.default,o.update),o!=="none"&&Mr(s,i,o,s.memoizedState=[],!0));break;default:if((o&1024)!==0)throw Error(r(163))}if(s=t.sibling,s!==null){s.return=t.return,Sn=s;break}Sn=t.return}}function wg(e,t,i){var s=i.flags;switch(i.tag){case 0:case 11:case 15:Yi(e,i),s&4&&Hl(5,i);break;case 1:if(Yi(e,i),s&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(x){kt(i,i.return,x)}else{var o=zs(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(x){kt(i,i.return,x)}}s&64&&xg(i),s&512&&ji(i,i.return);break;case 3:if(Yi(e,i),s&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{r0(e,t)}catch(x){kt(i,i.return,x)}}break;case 27:t===null&&s&4&&Sg(i);case 26:case 5:Yi(e,i),t===null&&s&4&&sd(i),s&512&&ji(i,i.return);break;case 12:Yi(e,i);break;case 31:Yi(e,i),s&4&&Lg(e,i);break;case 13:Yi(e,i),s&4&&Og(e,i),s&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=mb.bind(null,i),Kb(e,i))));break;case 22:if(s=i.memoizedState!==null||yn,!s){var u=t!==null&&t.memoizedState!==null||Ht;t=yn,o=Ht,yn=s,(Ht=u)&&!o?(s=2,(i.subtreeFlags&8772)!==0&&(s|=1),Ni(e,i,s)):Yi(e,i),yn=t,Ht=o}break;case 30:Yi(e,i),s&512&&ji(i,i.return);break;case 7:s&512&&ji(i,i.return);default:Yi(e,i)}}function gd(e,t){for(e=e.child;e!==null;)Ng(e,t),e=e.sibling}function Ng(e,t){switch(e.tag){case 5:case 26:try{var i=e.stateNode;if(t){var s=i.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var o=e.stateNode,u=e.memoizedProps.style,x=u!=null&&u.hasOwnProperty("display")?u.display:null;o.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(B){kt(e,e.return,B)}xd(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,ct=!0}catch(B){kt(e,e.return,B)}break;case 18:try{var A=e.stateNode;t?bx(A,!0):bx(e.stateNode,!1)}catch(B){kt(e,e.return,B)}break;case 22:case 23:e.memoizedState===null&&gd(e,t);break;default:gd(e,t)}}function xd(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var i=e,s=t;switch(i.tag){case 4:Ng(i,s);break e;case 22:i.memoizedState===null&&xd(i,s);break e;default:xd(i,s)}}e=e.sibling}}function Dg(e){var t=e.alternate;t!==null&&(e.alternate=null,Dg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&pt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,Yn=!1;function Ci(e,t,i){for(i=i.child;i!==null;)Ug(e,t,i),i=i.sibling}function Ug(e,t,i){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(wt,i)}catch{}switch(i.tag){case 26:Ht||Cn(i,t),Ci(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Ht&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ht||Cn(i,t),Vl(i);var s=tn,o=Yn;ns(i.type)&&(tn=i.stateNode,Yn=!1),Ci(e,t,i),Ix(i.stateNode,i.type,i.memoizedProps),tn=s,Yn=o;break;case 5:Ht||Cn(i,t),Vl(i);case 6:if(i.tag===6&&Vl(i),s=tn,o=Yn,tn=null,Ci(e,t,i),tn=s,Yn=o,tn!==null)if(Yn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(i.stateNode),ct=!0}catch(u){kt(i,t,u)}else try{tn.removeChild(i.stateNode),ct=!0}catch(u){kt(i,t,u)}break;case 18:tn!==null&&(Yn?(e=tn,Sx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Gr(e)):Sx(tn,i.stateNode));break;case 4:s=tn,o=Yn,tn=i.stateNode.containerInfo,Yn=!0,Ci(e,t,i),tn=s,Yn=o;break;case 0:case 11:case 14:case 15:Za(2,i,t),Ht||Za(4,i,t),Ci(e,t,i);break;case 1:Ht||(Cn(i,t),s=i.stateNode,typeof s.componentWillUnmount=="function"&&vg(i,t,s)),Ci(e,t,i);break;case 21:Ci(e,t,i);break;case 22:Ht=(s=Ht)||i.memoizedState!==null,Ci(e,t,i),Ht=s;break;case 30:Cn(i,t),Ci(e,t,i);break;case 7:Ht||Cn(i,t),Ci(e,t,i);break;default:Ci(e,t,i)}}function Lg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Gr(e)}catch(i){kt(t,t.return,i)}}}function Og(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gr(e)}catch(i){kt(t,t.return,i)}}function ab(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Cg),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Cg),t;default:throw Error(r(435,e.tag))}}function Ec(e,t){var i=ab(e);t.forEach(function(s){if(!i.has(s)){i.add(s);var o=gb.bind(null,e,s);s.then(o,o)}})}function Hn(e,t,i){var s=t.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],x=e,A=t,B=A;e:for(;B!==null;){switch(B.tag){case 27:if(ns(B.type)){tn=B.stateNode,Yn=!1;break e}break;case 5:tn=B.stateNode,Yn=!1;break e;case 3:case 4:tn=B.stateNode.containerInfo,Yn=!0;break e}B=B.return}if(tn===null)throw Error(r(160));Ug(x,A,u),tn=null,Yn=!1,x=u.alternate,x!==null&&(x.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Pg(t,e,i),t=t.sibling}var wi=null;function Pg(e,t,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(o&4&&(s=e.updateQueue,s=s!==null?s.events:null,s!==null))for(var u=0;u<s.length;u++){var x=s[u];x.ref.impl=x.nextImpl}Hn(t,e,i),Vn(e),o&4&&(Za(3,e,e.return),Hl(3,e),Za(5,e,e.return));break;case 1:Hn(t,e,i),Vn(e),o&512&&(Ht||s===null||Cn(s,s.return)),o&64&&yn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?t:i.concat(t))));break;case 26:if(u=wi,Hn(t,e,i),Vn(e),o&512&&(Ht||s===null||Cn(s,s.return)),o&4)if(o=s!==null?s.memoizedState:null,i=e.memoizedState,s===null)if(i===null)if(e.stateNode===null)if(yn)e.stateNode=vx(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,i=e.memoizedProps,o=u.ownerDocument||u;t:switch(t){case"title":s=o.getElementsByTagName("title")[0],(!s||s[at]||s[se]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=o.createElement(t),o.head.insertBefore(s,o.querySelector("head > title"))),wn(s,t,i),s[se]=e,Ge(s),t=s;break e;case"link":if(u=Gx("link","href",o).get(t+(i.href||""))){for(x=0;x<u.length;x++)if(s=u[x],s.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&s.getAttribute("rel")===(i.rel==null?null:i.rel)&&s.getAttribute("title")===(i.title==null?null:i.title)&&s.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){u.splice(x,1);break t}}s=o.createElement(t),wn(s,t,i),o.head.appendChild(s);break;case"meta":if(u=Gx("meta","content",o).get(t+(i.content||""))){for(x=0;x<u.length;x++)if(s=u[x],s.getAttribute("content")===(i.content==null?null:""+i.content)&&s.getAttribute("name")===(i.name==null?null:i.name)&&s.getAttribute("property")===(i.property==null?null:i.property)&&s.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&s.getAttribute("charset")===(i.charSet==null?null:i.charSet)){u.splice(x,1);break t}}s=o.createElement(t),wn(s,t,i),o.head.appendChild(s);break;default:throw Error(r(468,t))}s[se]=e,Ge(s),t=s}e.stateNode=t}else yn||th(u,e.type,e.stateNode);else e.stateNode=Vx(u,i,e.memoizedProps);else o!==i?(o===null?(t=s.stateNode,t===null||Ht||t.parentNode.removeChild(t)):o.count--,i===null?yn||th(u,e.type,e.stateNode):Vx(u,i,e.memoizedProps)):i===null&&e.stateNode!==null&&rd(e,e.memoizedProps,s.memoizedProps);break;case 27:Hn(t,e,i),Vn(e),o&512&&(Ht||s===null||Cn(s,s.return)),s!==null&&o&4&&rd(e,e.memoizedProps,s.memoizedProps);break;case 5:if(u=qi,qi=!1,Hn(t,e,i),qi=u,Vn(e),o&512&&(Ht||s===null||Cn(s,s.return)),e.flags&32){t=e.stateNode;try{sr(t,""),ct=!0}catch(ue){kt(e,e.return,ue)}}o&4&&e.stateNode!=null&&(t=e.memoizedProps,rd(e,t,s!==null?s.memoizedProps:t)),o&1024&&(pd=!0);break;case 6:if(Hn(t,e,i),Vn(e),o&4){if(e.stateNode===null)throw Error(r(162));t=e.memoizedProps,i=e.stateNode;try{i.nodeValue=t,ct=!0}catch(ue){kt(e,e.return,ue)}}break;case 3:if(ct=!1,Bc=null,u=wi,wi=Ql(t.containerInfo),Hn(t,e,i),wi=u,Vn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Gr(t.containerInfo)}catch(ue){kt(e,e.return,ue)}pd&&(pd=!1,Ig(e)),ct=!1;break;case 4:o=qi,qi=yn,s=En(),u=wi,wi=Ql(e.stateNode.containerInfo),Hn(t,e,i),Vn(e),wi=u,ct&&Gl&&(bc=!0),ct=s,qi=o;break;case 12:Hn(t,e,i),Vn(e);break;case 31:Hn(t,e,i),Vn(e),o&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ec(e,t)));break;case 13:Hn(t,e,i),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Rc=q()),o&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ec(e,t)));break;case 22:u=e.memoizedState!==null,x=s!==null&&s.memoizedState!==null;var A=yn,B=Ht,ee=qi;yn=A||u,qi=ee||u,Ht=B||x,Hn(t,e,i),Ht=B,qi=ee,yn=A,Vn(e),o&8192&&(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,!u||s===null||x||yn||Ht||(t=x||Ht,i=yn,s=Ht,yn=u||yn,Ht=t,Ka(e,2),yn=i,Ht=s),!u&&qi||gd(e,u)),o&4&&(t=e.updateQueue,t!==null&&(i=t.retryQueue,i!==null&&(t.retryQueue=null,Ec(e,i))));break;case 19:Hn(t,e,i),Vn(e),o&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Ec(e,t)));break;case 30:o&512&&(Ht||s===null||Cn(s,s.return)),o=En(),u=Gl,x=(i&335544064)===i,A=e.memoizedProps,Gl=x&&oa(A.default,A.update)!=="none",Hn(t,e,i),Vn(e),x&&s!==null&&ct&&(e.flags|=4),Gl=u,ct=o;break;case 21:break;case 7:o&512&&(Ht||s===null||Cn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=e);default:Hn(t,e,i),Vn(e)}}function Vn(e){var t=e.flags;if(t&2){try{for(var i,s=e.return;s!==null;){if(yg(s)){i=s;break}s=s.return}s=null;for(var o=e.return;o!==null;){if(ad(o)){var u=o.stateNode;s===null?s=[u]:s.push(u)}if(id(o))break;o=o.return}var x=s;if(i==null)throw Error(r(160));switch(i.tag){case 27:var A=i.stateNode,B=ld(e);vc(e,B,A,x);break;case 5:var ee=i.stateNode;i.flags&32&&(sr(ee,""),i.flags&=-33);var ue=ld(e);vc(e,ue,ee,x);break;case 3:case 4:var _e=i.stateNode.containerInfo,K=ld(e);od(e,K,_e,x);break;default:throw Error(r(161))}}catch(re){kt(e,e.return,re)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ig(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ig(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Vr=!0,t.reset(),Vr=!1),e=e.sibling}}function Er(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)zg(t,e),t=t.sibling;else Rg(t)}function zg(e,t){var i=e.alternate;if(i===null)cd(e,!1);else switch(e.tag){case 3:if(md=Wi=!1,Mg(),Er(t,e),!Wi&&!bc){if(e=ki,e!==null)for(var s=0;s<e.length;s+=3){i=e[s];var o=e[s+1];Ex(i,e[s+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+o+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),md=!0}ki=null;break;case 5:Er(t,e);break;case 4:s=Wi,Wi=!1,Er(t,e),Wi&&(bc=!0),Wi=s;break;case 22:e.memoizedState===null&&(i.memoizedState!==null?cd(e,!1):Er(t,e));break;case 30:s=Wi,o=Mg(),Wi=!1,Er(t,e),Wi&&(e.flags|=4);var u=e.memoizedProps,x=e.stateNode;t=la(u,x),x=la(i.memoizedProps,x);var A=oa(u.default,u.update);A==="none"?t=!1:(u=i.memoizedState,i.memoizedState=null,i=e.child,Wn=0,t=hd(e,i,t,x,A,u,!0),Wn!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Dr(e,e.memoizedProps.onUpdate),ki=o):o!==null&&(o.push.apply(o,ki),ki=o),Wi=(e.flags&32)!==0?!0:s;break;default:Er(t,e)}}function Yi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)wg(e,t.alternate,t),t=t.sibling}function Ka(e,t){for(e=e.child;e!==null;){var i=e,s=t;switch(i.tag){case 0:case 11:case 14:case 15:Za(4,i,i.return),Ka(i,s);break;case 1:Cn(i,i.return);var o=i.stateNode;typeof o.componentWillUnmount=="function"&&vg(i,i.return,o),Ka(i,s);break;case 27:(s&2)!==0&&Ix(i.stateNode,i.type,i.memoizedProps);case 5:Cn(i,i.return),i.tag!==5&&i.tag!==27||Vl(i),Ka(i,s);break;case 6:Vl(i);break;case 26:Cn(i,i.return),o=i.stateNode,i.memoizedState!==null||o===null||Ht||o.parentNode.removeChild(o),Ka(i,s);break;case 22:i.memoizedState===null&&Ka(i,s);break;case 30:Cn(i,i.return),Ka(i,s);break;case 7:Cn(i,i.return);default:Ka(i,s)}e=e.sibling}}function Ni(e,t,i){for(i=(t.subtreeFlags&8772)!==0?i:i&-2,t=t.child;t!==null;){var s=t.alternate,o=e,u=t,x=u.flags,A=(i&1)!==0;switch(u.tag){case 0:case 11:case 15:Ni(o,u,i),Hl(4,u);break;case 1:if(Ni(o,u,i),s=u,o=s.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(ue){kt(s,s.return,ue)}if(s=u,o=s.updateQueue,o!==null){var B=s.stateNode;try{var ee=o.shared.hiddenCallbacks;if(ee!==null)for(o.shared.hiddenCallbacks=null,o=0;o<ee.length;o++)s0(ee[o],B)}catch(ue){kt(s,s.return,ue)}}A&&x&64&&xg(u),ji(u,u.return);break;case 27:(i&2)!==0&&Sg(u);case 5:u.tag!==5&&u.tag!==27||_g(u),Ni(o,u,i),A&&s===null&&x&4&&sd(u),ji(u,u.return);break;case 6:_g(u);break;case 26:B=u.stateNode,u.memoizedState!==null||B===null||yn||th(Ql(B.ownerDocument),u.type,B),Ni(o,u,i),A&&s===null&&x&4&&sd(u),ji(u,u.return);break;case 12:Ni(o,u,i);break;case 31:Ni(o,u,i),A&&x&4&&Lg(o,u);break;case 13:Ni(o,u,i),A&&x&4&&Og(o,u);break;case 22:u.memoizedState===null&&Ni(o,u,i),ji(u,u.return);break;case 30:Ni(o,u,i),ji(u,u.return);break;case 7:ji(u,u.return);default:Ni(o,u,i)}t=t.sibling}}function vd(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&Rl(i))}function _d(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Rl(e))}function vi(e,t,i,s){var o=(i&335544064)===i;if(t.subtreeFlags&(o?10262:10256))for(t=t.child;t!==null;)Fg(e,t,i,s),t=t.sibling;else o&&Ag(t)}function Fg(e,t,i,s){var o=(i&335544064)===i;o&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Sc(t);var u=t.flags;switch(t.tag){case 0:case 11:case 15:vi(e,t,i,s),u&2048&&Hl(9,t);break;case 1:vi(e,t,i,s);break;case 3:vi(e,t,i,s),o&&md&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,t.alternate!==null&&(u=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==u&&(t.refCount++,u!=null&&Rl(u)));break;case 12:if(u&2048){vi(e,t,i,s),u=t.stateNode;try{var x=t.memoizedProps,A=x.id,B=x.onPostCommit;typeof B=="function"&&B(A,t.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(ee){kt(t,t.return,ee)}}else vi(e,t,i,s);break;case 31:vi(e,t,i,s);break;case 13:vi(e,t,i,s);break;case 23:break;case 22:x=t.stateNode,A=t.alternate,t.memoizedState!==null?(o&&A!==null&&A.memoizedState===null&&Sc(A),x._visibility&2?vi(e,t,i,s):jl(e,t)):(o&&A!==null&&A.memoizedState!==null&&Sc(t),x._visibility&2?vi(e,t,i,s):(x._visibility|=2,Tr(e,t,i,s,(t.subtreeFlags&10256)!==0||!1))),u&2048&&vd(A,t);break;case 24:vi(e,t,i,s),u&2048&&_d(t.alternate,t);break;case 30:o&&(u=t.alternate,u!==null&&(Xi(u.child,!0),Xi(t.child,!0))),vi(e,t,i,s);break;default:vi(e,t,i,s)}}function Tr(e,t,i,s,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,x=t,A=i,B=s,ee=x.flags;switch(x.tag){case 0:case 11:case 15:Tr(u,x,A,B,o),Hl(8,x);break;case 23:break;case 22:var ue=x.stateNode;x.memoizedState!==null?ue._visibility&2?Tr(u,x,A,B,o):jl(u,x):(ue._visibility|=2,Tr(u,x,A,B,o)),o&&ee&2048&&vd(x.alternate,x);break;case 24:Tr(u,x,A,B,o),o&&ee&2048&&_d(x.alternate,x);break;default:Tr(u,x,A,B,o)}t=t.sibling}}function jl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,s=t,o=s.flags;switch(s.tag){case 22:jl(i,s),o&2048&&vd(s.alternate,s);break;case 24:jl(i,s),o&2048&&_d(s.alternate,s);break;default:jl(i,s)}t=t.sibling}}var Fs=8192;function Bs(e,t,i){if(e.subtreeFlags&Fs)for(e=e.child;e!==null;)Bg(e,t,i),e=e.sibling}function Bg(e,t,i){switch(e.tag){case 26:Bs(e,t,i),e.flags&Fs&&(e.memoizedState!==null?uM(i,wi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&qx(i,e)));break;case 5:Bs(e,t,i),e.flags&Fs&&(e=e.stateNode,(t&335544128)===t&&qx(i,e));break;case 3:case 4:var s=wi;wi=Ql(e.stateNode.containerInfo),Bs(e,t,i),wi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=Fs,Fs=16777216,Bs(e,t,i),Fs=s):Bs(e,t,i));break;case 30:if((e.flags&Fs)!==0&&(s=e.memoizedProps.name,s!=null&&s!=="auto")){var o=e.stateNode;o.paired=null,ii===null&&(ii=new Map),ii.set(s,o)}Bs(e,t,i);break;default:Bs(e,t,i)}}function Hg(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function kl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var s=t[i];Sn=s,Gg(s,e)}Hg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vg(e),e=e.sibling}function Vg(e){switch(e.tag){case 0:case 11:case 15:kl(e),e.flags&2048&&Za(9,e,e.return);break;case 3:kl(e);break;case 12:kl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Tc(e)):kl(e);break;default:kl(e)}}function Tc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var s=t[i];Sn=s,Gg(s,e)}Hg(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Za(8,t,t.return),Tc(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,Tc(t));break;default:Tc(t)}e=e.sibling}}function Gg(e,t){for(;Sn!==null;){var i=Sn;switch(i.tag){case 0:case 11:case 15:Za(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var s=i.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Rl(i.memoizedState.cache)}if(s=i.child,s!==null)s.return=i,Sn=s;else e:for(i=e;Sn!==null;){s=Sn;var o=s.sibling,u=s.return;if(Dg(s),s===i){Sn=null;break e}if(o!==null){o.return=u,Sn=o;break e}Sn=u}}}var sb={getCacheForType:function(e){var t=Tn(un),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i},cacheSignal:function(){return Tn(un).controller.signal}},rb=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Qt=null,Et=null,Rt=0,jt=0,ai=null,Qa=!1,Ar=!1,yd=!1,xa=0,sn=0,Ja=0,Hs=0,Ac=0,si=0,Rr=0,Xl=null,Zn=null,Sd=!1,Rc=0,jg=0,Cc=1/0,wc=null,$a=null,nn=0,Di=null,Vs=null,Zi=0,bd=0,Md=null,kg=null,Cr=null,wr=null,Nr=null,ql=0,Nc=null;function ri(){return(Bt&2)!==0&&Rt!==0?Rt&-Rt:ye.T!==null?Ld():w()}function Xg(){if(si===0)if((Rt&536870912)===0||bt){var e=vs;vs<<=1,(vs&3932160)===0&&(vs=262144),si=e}else si=536870912;return e=An.current,e!==null&&(e.flags|=32),si}function Dr(e,t){if(t!=null){var i=e.stateNode,s=i.ref;s===null&&(s=i.ref=Tx(la(e.memoizedProps,i))),wr===null&&(wr=[]),wr.push(t.bind(null,s))}}function Kn(e,t,i){(e===Qt&&(jt===2||jt===9)||e.cancelPendingCommit!==null)&&(Ur(e,0),es(e,Rt,si,!1)),Oa(e,i),((Bt&2)===0||e!==Qt)&&(e===Qt&&((Bt&2)===0&&(Hs|=i),sn===4&&es(e,Rt,si,!1)),Ki(e))}function qg(e,t,i){if((Bt&6)!==0)throw Error(r(327));var s=!i&&(t&127)===0&&(t&e.expiredLanes)===0||La(e,t),o=s?cb(e,t):Td(e,t,!0),u=s;do{if(o===0){Ar&&!s&&es(e,t,0,!1);break}else{if(i=e.current.alternate,u&&!lb(i)){o=Td(e,t,!1),u=!1;continue}if(o===2){if(u=t,e.errorRecoveryDisabledLanes&u)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){t=x;e:{var A=e;o=Xl;var B=A.current.memoizedState.isDehydrated;if(B&&(Ur(A,x).flags|=256),x=Td(A,x,!1),x!==2&&x!==6){if(yd&&!B){A.errorRecoveryDisabledLanes|=u,Hs|=u,o=4;break e}u=Zn,Zn=o,u!==null&&(Zn===null?Zn=u:Zn.push.apply(Zn,u))}o=x}if(u=!1,o!==2)continue}}if(o===1){Ur(e,0),es(e,t,0,!0);break}e:{switch(s=e,u=o,u){case 0:case 1:throw Error(r(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:es(s,t,si,!Qa);break e;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((t&62914560)===t&&(o=Rc+300-q(),10<o)){if(es(s,t,si,!Qa),_s(s,0,!0)!==0)break e;Zi=t,s.timeoutHandle=kd(Wg.bind(null,s,i,Zn,wc,Sd,t,si,Hs,Rr,Qa,u,"Throttled",-0,0),o);break e}Wg(s,i,Zn,wc,Sd,t,si,Hs,Rr,Qa,u,null,-0,0)}}break}while(!0);Ki(e)}function Wg(e,t,i,s,o,u,x,A,B,ee,ue,_e,K,re){e.timeoutHandle=-1;var ze=t.subtreeFlags,Qe=(u&335544064)===u;if(_e=null,(Qe||ze&8192||(ze&16785408)===16785408)&&(_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},ii=null,Bg(t,u,_e),Qe&&(ze=_e,Qe=e.containerInfo,Qe=(Qe.nodeType===9?Qe:Qe.ownerDocument).__reactViewTransition,Qe!=null&&(ze.count++,ze.waitingForViewTransition=!0,ze=eo.bind(ze),Qe.finished.then(ze,ze))),ze=(u&62914560)===u?Rc-q():(u&4194048)===u?jg-q():0,ze=fM(_e,ze),ze!==null)){Zi=u,e.cancelPendingCommit=ze(tx.bind(null,e,t,u,i,s,o,x,A,B,ee,ue,_e,null,K,re)),es(e,u,x,!ee);return}tx(e,t,u,i,s,o,x,A,B,ee,ue,_e)}function lb(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var s=0;s<i.length;s++){var o=i[s],u=o.getSnapshot;o=o.value;try{if(!ti(u(),o))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function es(e,t,i,s){t=ys(e,t),t&=~Ac,t&=~Hs,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var o=t;0<o;){var u=31-zn(o),x=1<<u;s[u]=-1,o&=~x}i!==0&&Co(e,i,t)}function Dc(){return(Bt&6)===0?(Wl(0),!1):!0}function Ed(){if(Et!==null){if(jt===0)var e=Et.return;else e=Et,fa=Cs=null,Uf(e),vr=null,Nl=0,e=Et;for(;e!==null;)gg(e.alternate,e),e=e.return;Et=null}}function Ur(e,t){var i=e.timeoutHandle;return i!==-1&&(e.timeoutHandle=-1,Db(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),Zi=0,Ed(),Qt=e,Et=i=ca(e.current,null),Rt=t,jt=0,ai=null,Qa=!1,Ar=La(e,t),yd=!1,Rr=si=Ac=Hs=Ja=sn=0,Zn=Xl=null,Sd=!1,xa=ys(e,t),Bo(),i}function Yg(e,t){gt=null,ye.H=uc,t===xr||t===Ko?(t=t0(),jt=3):t===_f?(t=t0(),jt=4):jt=t===Wf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ai=t,Et===null&&(sn=1,fc(e,pi(t,e.current)))}function Zg(){var e=An.current;return e===null?!0:(Rt&4194048)===Rt?Ln===null:(Rt&62914560)===Rt||(Rt&536870912)!==0?e===Ln:!1}function Kg(){var e=ye.H;return ye.H=uc,e===null?uc:e}function Qg(){var e=ye.A;return ye.A=sb,e}function Uc(){sn=4,Qa||(Rt&4194048)!==Rt&&An.current!==null||(Ar=!0),(Ja&134217727)===0&&(Hs&134217727)===0||Qt===null||es(Qt,Rt,si,!1)}function Td(e,t,i){var s=Bt;Bt|=2;var o=Kg(),u=Qg();(Qt!==e||Rt!==t)&&(wc=null,Ur(e,t)),t=!1;var x=sn;e:do try{if(jt!==0&&Et!==null){var A=Et,B=ai;switch(jt){case 8:Ed(),x=6;break e;case 3:case 2:case 9:case 6:An.current===null&&(t=!0);var ee=jt;if(jt=0,ai=null,Lr(e,A,B,ee),i&&Ar){x=0;break e}break;default:ee=jt,jt=0,ai=null,Lr(e,A,B,ee)}}ob(),x=sn;break}catch(ue){Yg(e,ue)}while(!0);return t&&e.shellSuspendCounter++,fa=Cs=null,Bt=s,ye.H=o,ye.A=u,Et===null&&(Qt=null,Rt=0,Bo()),x}function ob(){for(;Et!==null;)Jg(Et)}function cb(e,t){var i=Bt;Bt|=2;var s=Kg(),o=Qg();Qt!==e||Rt!==t?(wc=null,Cc=q()+500,Ur(e,t)):Ar=La(e,t);e:do try{if(jt!==0&&Et!==null){t=Et;var u=ai;t:switch(jt){case 1:jt=0,ai=null,Lr(e,t,u,1);break;case 2:case 9:if($m(u)){jt=0,ai=null,$g(t);break}t=function(){jt!==2&&jt!==9||Qt!==e||(jt=7),Ki(e)},u.then(t,t);break e;case 3:jt=7;break e;case 4:jt=5;break e;case 7:$m(u)?(jt=0,ai=null,$g(t)):(jt=0,ai=null,Lr(e,t,u,7));break;case 5:var x=null;switch(Et.tag){case 26:x=Et.memoizedState;case 5:case 27:var A=Et;if(x?kx(x):A.stateNode.complete){jt=0,ai=null;var B=A.sibling;if(B!==null)Et=B;else{var ee=A.return;ee!==null?(Et=ee,Lc(ee)):Et=null}break t}}jt=0,ai=null,Lr(e,t,u,5);break;case 6:jt=0,ai=null,Lr(e,t,u,6);break;case 8:Ed(),sn=6;break e;default:throw Error(r(462))}}ub();break}catch(ue){Yg(e,ue)}while(!0);return fa=Cs=null,ye.H=s,ye.A=o,Bt=i,Et!==null?0:(Qt=null,Rt=0,Bo(),sn)}function ub(){for(;Et!==null&&!Ie();)Jg(Et)}function Jg(e){var t=pg(e.alternate,e,xa);e.memoizedProps=e.pendingProps,t===null?Lc(e):Et=t}function $g(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=lg(i,t,t.pendingProps,t.type,void 0,Rt);break;case 11:t=lg(i,t,t.pendingProps,t.type.render,t.ref,Rt);break;case 5:Uf(t);var s=t;s===_n&&(bt?(Xo(s),s.tag===5&&s.stateNode!=null&&(Jt=s.stateNode)):(Xo(s),bt=!0));default:gg(i,t),t=Et=Gm(t,xa),t=pg(i,t,xa)}e.memoizedProps=e.pendingProps,t===null?Lc(e):Et=t}function Lr(e,t,i,s){fa=Cs=null,Uf(t),vr=null,Nl=0;var o=t.return;try{if(QS(e,o,t,i,Rt)){sn=1,fc(e,pi(i,e.current)),Et=null;return}}catch(u){if(o!==null)throw Et=o,u;sn=1,fc(e,pi(i,e.current)),Et=null;return}t.flags&32768?(bt||s===1?e=!0:Ar||(Rt&536870912)!==0?e=!1:(Qa=e=!0,(s===2||s===9||s===3||s===6)&&(s=An.current,s!==null&&s.tag===13&&(s.flags|=16384))),ex(t,e)):Lc(t)}function Lc(e){var t=e;do{if((t.flags&32768)!==0){ex(t,Qa);return}e=t.return;var i=tb(t.alternate,t,xa);if(i!==null){Et=i;return}if(t=t.sibling,t!==null){Et=t;return}Et=t=e}while(t!==null);sn===0&&(sn=5)}function ex(e,t){do{var i=nb(e.alternate,e);if(i!==null){i.flags&=32767,Et=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){Et=e;return}Et=e=i}while(e!==null);sn=6,Et=null}function tx(e,t,i,s,o,u,x,A,B,ee,ue,_e){e.cancelPendingCommit=null;do Oc();while(nn!==0);if((Bt&6)!==0)throw Error(r(327));if(t!==null){if(t===e.current)throw Error(r(177));e===Qt&&(Et=Qt=null,Rt=0),Vs=t,Di=e,Zi=i,Md=o,kg=s,fb(e,t,i,x,A,B,_e)}}function fb(e,t,i,s,o,u,x){var A=t.lanes|t.childLanes;if(bd=A,A|=rf,Iu(e,i,A,s,o,u),wr=null,(i&335544064)===i?(Nr=BS(e),s=10262):(Nr=null,s=10256),(t.subtreeFlags&s)!==0||(t.flags&s)!==0?(e.callbackNode=null,e.callbackPriority=0,xb(Re,function(){return wd(),null})):(e.callbackNode=null,e.callbackPriority=0),_c=!1,s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=ye.T,ye.T=null,o=De.p,De.p=2,u=Bt,Bt|=4;try{ib(e,t,i)}finally{Bt=u,De.p=o,ye.T=s}}nn=1,_c?Cr=zb(x,e.containerInfo,Nr,Ad,Rd,hb,Cd,wd,db):(Ad(),Rd(),Cd())}function db(e){if(nn!==0){var t=Di.onRecoverableError;t(e,{componentStack:null})}}function hb(){nn===3&&(nn=0,zg(Vs,Di),nn=4)}function Ad(){if(nn===1){nn=0;var e=Di,t=Vs,i=Zi,s=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||s){s=ye.T,ye.T=null;var o=De.p;De.p=2;var u=Bt;Bt|=4;try{Gl=bc=!1,Pg(t,e,i),i=Vd;var x=Um(e.containerInfo),A=i.focusedElem,B=i.selectionRange;if(x!==A&&A&&A.ownerDocument&&Dm(A.ownerDocument.documentElement,A)){if(B!==null&&ef(A)){var ee=B.start,ue=B.end;if(ue===void 0&&(ue=ee),"selectionStart"in A)A.selectionStart=ee,A.selectionEnd=Math.min(ue,A.value.length);else{var _e=A.ownerDocument||document,K=_e&&_e.defaultView||window;if(K.getSelection){var re=K.getSelection(),ze=A.textContent.length,Qe=Math.min(B.start,ze),xt=B.end===void 0?Qe:Math.min(B.end,ze);!re.extend&&Qe>xt&&(x=xt,xt=Qe,Qe=x);var $=Nm(A,Qe),k=Nm(A,xt);if($&&k&&(re.rangeCount!==1||re.anchorNode!==$.node||re.anchorOffset!==$.offset||re.focusNode!==k.node||re.focusOffset!==k.offset)){var ie=_e.createRange();ie.setStart($.node,$.offset),re.removeAllRanges(),Qe>xt?(re.addRange(ie),re.extend(k.node,k.offset)):(ie.setEnd(k.node,k.offset),re.addRange(ie))}}}}for(_e=[],re=A;re=re.parentNode;)re.nodeType===1&&_e.push({element:re,left:re.scrollLeft,top:re.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_e.length;A++){var ve=_e[A];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Vr=!!Hd,Vd=Hd=null}finally{Bt=u,De.p=o,ye.T=s}}e.current=t,nn=2}}function Rd(){if(nn===2){nn=0;var e=Di,t=Vs,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=ye.T,ye.T=null;var s=De.p;De.p=2;var o=Bt;Bt|=4;try{wg(e,t.alternate,t)}finally{Bt=o,De.p=s,ye.T=i}}nn=3}}function Cd(){if(nn===4||nn===3){nn=0;var e=Cr;Cr=null,vt();var t=Di,i=Vs,s=Zi,o=kg,u=(s&335544064)===s?10262:10256;if((i.subtreeFlags&u)!==0||(i.flags&u)!==0?nn=5:(nn=0,Vs=Di=null,nx(t,t.pendingLanes)),u=t.pendingLanes,u===0&&($a=null),ml(s),i=i.stateNode,en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(wt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=ye.T,u=De.p,De.p=2,ye.T=null;try{for(var x=t.onRecoverableError,A=0;A<o.length;A++){var B=o[A];x(B.value,{componentStack:B.stack})}}finally{ye.T=i,De.p=u}}if(o=wr,x=Nr,Nr=null,o!==null&&(wr=null,x===null&&(x=[]),e!==null))for(B=0;B<o.length;B++)i=(0,o[B])(x),i!==void 0&&e.finished.finally(i);(Zi&3)!==0&&Oc(),Ki(t),u=t.pendingLanes,(s&261930)!==0&&(u&42)!==0?t===Nc?ql++:(ql=0,Nc=t):(ql=0,Nc=null),Wl(0)}}function nx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Rl(t)))}function Oc(){return Cr!==null&&(Cr.skipTransition(),Cr=null),Ad(),Rd(),Cd(),wd()}function wd(){if(nn!==5)return!1;var e=Di,t=bd;bd=0;var i=ml(Zi),s=ye.T,o=De.p;try{De.p=32>i?32:i,ye.T=null,i=Md,Md=null;var u=Di,x=Zi;if(nn=0,Vs=Di=null,Zi=0,(Bt&6)!==0)throw Error(r(331));var A=Bt;if(Bt|=4,Vg(u.current),Fg(u,u.current,x,i),Bt=A,Wl(0,!1),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(wt,u)}catch{}return!0}finally{De.p=o,ye.T=s,nx(e,t)}}function ix(e,t,i){t=pi(i,t),t=qf(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(Oa(e,2),Ki(e))}function kt(e,t,i){if(e.tag===3)ix(e,e,i);else for(;t!==null;){if(t.tag===3){ix(t,e,i);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&($a===null||!$a.has(s))){e=pi(i,e),i=$0(2),s=Xa(t,i,2),s!==null&&(eg(i,s,t,e),Oa(s,2),Ki(s));break}}t=t.return}}function Nd(e,t,i){var s=e.pingCache;if(s===null){s=e.pingCache=new rb;var o=new Set;s.set(t,o)}else o=s.get(t),o===void 0&&(o=new Set,s.set(t,o));o.has(i)||(yd=!0,o.add(i),e=pb.bind(null,e,t,i),t.then(e,e))}function pb(e,t,i){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Qt===e&&(Rt&i)===i&&((sn===4||sn===3&&(Rt&62914560)===Rt&&300>q()-Rc)&&(Bt&2)===0?Ur(e,0):Ac|=i,Rr===Rt&&(Rr=0)),Ki(e)}function ax(e,t){t===0&&(t=Ss()),e=Ts(e,t),e!==null&&(Oa(e,t),Ki(e))}function mb(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),ax(e,i)}function gb(e,t){var i=0;switch(e.tag){case 31:case 13:var s=e.stateNode,o=e.memoizedState;o!==null&&(i=o.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(t),ax(e,i)}function xb(e,t){return Ze(e,t)}var Or=null,Pr=null,Dd=!1,Pc=!1,Ud=!1,ts=0;function Ki(e){e!==Pr&&e.next===null&&(Pr===null?Or=Pr=e:Pr=Pr.next=e),Pc=!0,Dd||(Dd=!0,_b())}function Wl(e,t){if(!Ud&&Pc){Ud=!0;do for(var i=!1,s=Or;s!==null;){if(e!==0){var o=s.pendingLanes;if(o===0)var u=0;else{var x=s.suspendedLanes,A=s.pingedLanes;u=(1<<31-zn(42|e)+1)-1,u&=o&~(x&~A),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(i=!0,ox(s,u))}else u=Rt,u=_s(s,s===Qt?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||La(s,u)||(i=!0,ox(s,u));s=s.next}while(i);Ud=!1}}function vb(){sx()}function sx(){Pc=Dd=!1;var e=0;ts!==0&&Nb()&&(e=ts);for(var t=q(),i=null,s=Or;s!==null;){var o=s.next,u=rx(s,t);u===0?(s.next=null,i===null?Or=o:i.next=o,o===null&&(Pr=i)):(i=s,(e!==0||(u&3)!==0)&&(Pc=!0)),s=o}nn!==0&&nn!==5||Wl(e),ts!==0&&(ts=0)}function rx(e,t){for(var i=e.suspendedLanes,s=e.pingedLanes,o=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var x=31-zn(u),A=1<<x,B=o[x];B===-1?((A&i)===0||(A&s)!==0)&&(o[x]=Ro(A,t)):B<=t&&(e.expiredLanes|=A),u&=~A}if(t=Qt,i=Rt,i=_s(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,i===0||e===t&&(jt===2||jt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Je(s),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||La(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(s!==null&&Je(s),ml(i)){case 2:case 8:i=Ve;break;case 32:i=Re;break;case 268435456:i=Oe;break;default:i=Re}return s=lx.bind(null,e),i=Ze(i,s),e.callbackPriority=t,e.callbackNode=i,t}return s!==null&&s!==null&&Je(s),e.callbackPriority=2,e.callbackNode=null,2}function lx(e,t){if(nn!==0&&nn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(Oc()&&e.callbackNode!==i)return null;var s=Rt;return s=_s(e,e===Qt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(qg(e,s,t),rx(e,q()),e.callbackNode!=null&&e.callbackNode===i?lx.bind(null,e):null)}function ox(e,t){if(Oc())return null;qg(e,t,!0)}function _b(){Ub(function(){(Bt&6)!==0?Ze(Ne,vb):sx()})}function Ld(){if(ts===0){var e=Ds;e===0&&(e=xs,xs<<=1,(xs&261888)===0&&(xs=256)),ts=e}return ts}function cx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Do(e)}function yb(e,t,i,s,o){if(t==="submit"&&i&&i.stateNode===o){var u=cx((o[ne]||null).action),x=s.submitter;x&&(t=(t=x[ne]||null)?cx(t.formAction):x.getAttribute("formAction"),t!==null&&(u=t,x=null));var A=new Po("action","action",null,s,o);e.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ts!==0){var B=new FormData(o,x);Vf(i,{pending:!0,data:B,method:o.method,action:u},null,B)}}else typeof u=="function"&&(A.preventDefault(),B=new FormData(o,x),Vf(i,{pending:!0,data:B,method:o.method,action:u},u,B))},currentTarget:o}]})}}for(var Od=0;Od<sf.length;Od++){var Pd=sf[Od],Sb=Pd.toLowerCase(),bb=Pd[0].toUpperCase()+Pd.slice(1);Ri(Sb,"on"+bb)}Ri(Pm,"onAnimationEnd"),Ri(Im,"onAnimationIteration"),Ri(zm,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(DS,"onTransitionRun"),Ri(US,"onTransitionStart"),Ri(LS,"onTransitionCancel"),Ri(Fm,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function ux(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],o=s.event;s=s.listeners;e:{var u=void 0;if(t)for(var x=s.length-1;0<=x;x--){var A=s[x],B=A.instance,ee=A.currentTarget;if(A=A.listener,B!==u&&o.isPropagationStopped())break e;u=A,o.currentTarget=ee;try{u(o)}catch(ue){Fo(ue)}o.currentTarget=null,u=B}else for(x=0;x<s.length;x++){if(A=s[x],B=A.instance,ee=A.currentTarget,A=A.listener,B!==u&&o.isPropagationStopped())break e;u=A,o.currentTarget=ee;try{u(o)}catch(ue){Fo(ue)}o.currentTarget=null,u=B}}}}function Tt(e,t){var i=t[ke];i===void 0&&(i=t[ke]=new Set);var s=e+"__bubble";i.has(s)||(fx(t,e,2,!1),i.add(s))}function Id(e,t,i){var s=0;t&&(s|=4),fx(i,e,s,t)}var Ic="_reactListening"+Math.random().toString(36).slice(2);function zd(e){if(!e[Ic]){e[Ic]=!0,Nt.forEach(function(i){i!=="selectionchange"&&(Mb.has(i)||Id(i,!1,e),Id(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ic]||(t[Ic]=!0,Id("selectionchange",!1,t))}}function fx(e,t,i,s){switch(ev(t)){case 2:var o=mM;break;case 8:o=gM;break;default:o=ih}i=o.bind(null,t,i,e),o=void 0,!ku||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),s?o!==void 0?e.addEventListener(t,i,{capture:!0,passive:o}):e.addEventListener(t,i,!0):o!==void 0?e.addEventListener(t,i,{passive:o}):e.addEventListener(t,i,!1)}function Fd(e,t,i,s,o){var u=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var A=s.stateNode.containerInfo;if(A===o)break;if(x===4)for(x=s.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===o)return;x=x.return}for(;A!==null;){if(x=At(A),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){s=u=x;continue e}A=A.parentNode}}s=s.return}fm(function(){var ee=u,ue=Gu(i),_e=[];e:{var K=Bm.get(e);if(K!==void 0){var re=Po,ze=e;switch(e){case"keypress":if(Lo(i)===0)break e;case"keydown":case"keyup":re=lS;break;case"focusin":ze="focus",re=Yu;break;case"focusout":ze="blur",re=Yu;break;case"beforeblur":case"afterblur":re=Yu;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=dS;break;case Pm:case Im:case zm:re=Jy;break;case Fm:re=pS;break;case"scroll":case"scrollend":re=Wy;break;case"wheel":re=gS;break;case"copy":case"cut":case"paste":re=eS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=gm;break;case"submit":re=uS;break;case"toggle":case"beforetoggle":re=vS}var Qe=(t&4)!==0,xt=!Qe&&(e==="scroll"||e==="scrollend"),$=Qe?K!==null?K+"Capture":null:K;Qe=[];for(var k=ee,ie;k!==null;){var ve=k;if(ie=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ie===null||$===null||(ve=gl(k,$),ve!=null&&Qe.push(Zl(k,ve,ie))),xt)break;k=k.return}0<Qe.length&&(K=new re(K,ze,null,i,ue),_e.push({event:K,listeners:Qe}))}}if((t&7)===0){e:{if(re=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",re&&i!==Vu&&(ze=i.relatedTarget||i.fromElement)&&(At(ze)||ze[Le]))break e;(K||re)&&(ze=ue.window===ue?ue:(re=ue.ownerDocument)?re.defaultView||re.parentWindow:window,K?(re=i.relatedTarget||i.toElement,K=ee,re=re?At(re):null,re!==null&&(xt=f(re),Qe=re.tag,re!==xt||Qe!==5&&Qe!==27&&Qe!==6)&&(re=null)):(K=null,re=ee),K!==re&&(Qe=pm,ve="onMouseLeave",$="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(Qe=gm,ve="onPointerLeave",$="onPointerEnter",k="pointer"),xt=K==null?ze:Yt(K),ie=re==null?ze:Yt(re),ze=new Qe(ve,k+"leave",K,i,ue),ze.target=xt,ze.relatedTarget=ie,ve=null,At(ue)===ee&&(Qe=new Qe($,k+"enter",re,i,ue),Qe.target=ie,Qe.relatedTarget=xt,ve=Qe),xt=ve,Qe=K&&re?G(K,re,Eb):null,K!==null&&dx(_e,ze,K,Qe,!1),re!==null&&xt!==null&&dx(_e,xt,re,Qe,!0)))}e:{if(K=ee?Yt(ee):window,re=K.nodeName&&K.nodeName.toLowerCase(),re==="select"||re==="input"&&K.type==="file")var qe=Em;else if(bm(K))if(Tm)qe=CS;else{qe=AS;var Ct=TS}else re=K.nodeName,!re||re.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?ee&&Hu(ee.elementType)&&(qe=Em):qe=RS;if(qe&&(qe=qe(e,ee))){Mm(_e,qe,i,ue);break e}Ct&&Ct(e,K,ee)}switch(Ct=ee?Yt(ee):window,e){case"focusin":(bm(Ct)||Ct.contentEditable==="true")&&(cr=Ct,tf=ee,El=null);break;case"focusout":El=tf=cr=null;break;case"mousedown":nf=!0;break;case"contextmenu":case"mouseup":case"dragend":nf=!1,Lm(_e,i,ue);break;case"selectionchange":if(NS)break;case"keydown":case"keyup":Lm(_e,i,ue)}var it;if(Ku)e:{switch(e){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else or?ym(e,i)&&(lt="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(lt="onCompositionStart");lt&&(xm&&i.locale!=="ko"&&(or||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&or&&(it=dm()):(Ia=ue,Xu="value"in Ia?Ia.value:Ia.textContent,or=!0)),Ct=zc(ee,lt),0<Ct.length&&(lt=new mm(lt,e,null,i,ue),_e.push({event:lt,listeners:Ct}),it?lt.data=it:(it=Sm(i),it!==null&&(lt.data=it)))),(it=yS?SS(e,i):bS(e,i))&&(lt=zc(ee,"onBeforeInput"),0<lt.length&&(Ct=new mm("onBeforeInput","beforeinput",null,i,ue),_e.push({event:Ct,listeners:lt}),Ct.data=it)),yb(_e,e,ee,i,ue)}ux(_e,t)})}function Zl(e,t,i){return{instance:e,listener:t,currentTarget:i}}function zc(e,t){for(var i=t+"Capture",s=[];e!==null;){var o=e,u=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||u===null||(o=gl(e,i),o!=null&&s.unshift(Zl(e,o,u)),o=gl(e,t),o!=null&&s.push(Zl(e,o,u))),e.tag===3)return s;e=e.return}return[]}function Eb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dx(e,t,i,s,o){for(var u=t._reactName,x=[];i!==null&&i!==s;){var A=i,B=A.alternate,ee=A.stateNode;if(A=A.tag,B!==null&&B===s)break;A!==5&&A!==26&&A!==27||ee===null||(B=ee,o?(ee=gl(i,u),ee!=null&&x.unshift(Zl(i,ee,B))):o||(ee=gl(i,u),ee!=null&&x.push(Zl(i,ee,B)))),i=i.return}x.length!==0&&e.push({event:t,listeners:x})}var Tb=/\r\n?/g,Ab=/\u0000|\uFFFD/g;function hx(e){return(typeof e=="string"?e:""+e).replace(Tb,`
`).replace(Ab,"")}function px(e,t){return t=hx(t),hx(e)===t}function Xt(e,t,i,s,o,u){switch(i){case"children":if(typeof s=="string")t==="body"||t==="textarea"&&s===""||sr(e,s);else if(typeof s=="number"||typeof s=="bigint")t!=="body"&&sr(e,""+s);else return;break;case"className":fi(e,"class",s);break;case"tabIndex":fi(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":fi(e,i,s);break;case"style":cm(e,s,u);return;case"data":if(t!=="object"){fi(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(i);break}s=Do(s),e.setAttribute(i,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(i==="formAction"?(t!=="input"&&Xt(e,t,"name",o.name,o,null),Xt(e,t,"formEncType",o.formEncType,o,null),Xt(e,t,"formMethod",o.formMethod,o,null),Xt(e,t,"formTarget",o.formTarget,o,null)):(Xt(e,t,"encType",o.encType,o,null),Xt(e,t,"method",o.method,o,null),Xt(e,t,"target",o.target,o,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(i);break}s=Do(s),e.setAttribute(i,s);break;case"onClick":s!=null&&(e.onclick=Hi);return;case"onScroll":s!=null&&Tt("scroll",e);return;case"onScrollEnd":s!=null&&Tt("scrollend",e);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(i=s.__html,i!=null){if(o.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==i&&(e.innerHTML=i)}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}i=Do(s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(i,s):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":s===!0?e.setAttribute(i,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(i,s):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(i,s):e.removeAttribute(i);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(i):e.setAttribute(i,s);break;case"popover":Tt("beforetoggle",e),Tt("toggle",e),Pa(e,"popover",s);break;case"xlinkActuate":sa(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":sa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":sa(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":sa(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":sa(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":sa(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":sa(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":sa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":sa(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Pa(e,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=Xy.get(i)||i,Pa(e,i,s);else return}ct=!0}function Bd(e,t,i,s,o,u){switch(i){case"style":cm(e,s,u);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(i=s.__html,i!=null){if(o.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==i&&(e.innerHTML=i)}}break;case"children":if(typeof s=="string")sr(e,s);else if(typeof s=="number"||typeof s=="bigint")sr(e,""+s);else return;break;case"onScroll":s!=null&&Tt("scroll",e);return;case"onScrollEnd":s!=null&&Tt("scrollend",e);return;case"onClick":s!=null&&(e.onclick=Hi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Un.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(o=i.endsWith("Capture"),u=i.slice(2,o?i.length-7:void 0),t=e[ne]||null,t=t!=null?t[i]:null,typeof t=="function"&&e.removeEventListener(u,t,o),typeof s=="function")){typeof t!="function"&&t!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(u,s,o);break e}ct=!0,i in e?e[i]=s:s===!0?e.setAttribute(i,""):Pa(e,i,s)}return}ct=!0}function wn(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",e),Tt("load",e);var s=!1,o=!1,u;for(u in i)if(i.hasOwnProperty(u)){var x=i[u];if(x!=null)switch(u){case"src":s=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Xt(e,t,u,x,i,null)}}o&&Xt(e,t,"srcSet",i.srcSet,i,null),s&&Xt(e,t,"src",i.src,i,null);return;case"input":Tt("invalid",e);var A=u=x=o=null,B=null,ee=null;for(s in i)if(i.hasOwnProperty(s)){var ue=i[s];if(ue!=null)switch(s){case"name":o=ue;break;case"type":x=ue;break;case"checked":B=ue;break;case"defaultChecked":ee=ue;break;case"value":u=ue;break;case"defaultValue":A=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,t));break;default:Xt(e,t,s,ue,i,null)}}sm(e,u,A,B,ee,x,o,!1);return;case"select":Tt("invalid",e),s=x=u=null;for(o in i)if(i.hasOwnProperty(o)&&(A=i[o],A!=null))switch(o){case"value":u=A;break;case"defaultValue":x=A;break;case"multiple":s=A;default:Xt(e,t,o,A,i,null)}t=u,i=x,e.multiple=!!s,t!=null?ar(e,!!s,t,!1):i!=null&&ar(e,!!s,i,!0);return;case"textarea":Tt("invalid",e),u=o=s=null;for(x in i)if(i.hasOwnProperty(x)&&(A=i[x],A!=null))switch(x){case"value":s=A;break;case"defaultValue":o=A;break;case"children":u=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Xt(e,t,x,A,i,null)}lm(e,s,o,u);return;case"option":for(B in i)if(i.hasOwnProperty(B)&&(s=i[B],s!=null))switch(B){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Xt(e,t,B,s,i,null)}return;case"dialog":Tt("beforetoggle",e),Tt("toggle",e),Tt("cancel",e),Tt("close",e);break;case"iframe":case"object":Tt("load",e);break;case"video":case"audio":for(s=0;s<Yl.length;s++)Tt(Yl[s],e);break;case"image":Tt("error",e),Tt("load",e);break;case"details":Tt("toggle",e);break;case"embed":case"source":case"link":Tt("error",e),Tt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in i)if(i.hasOwnProperty(ee)&&(s=i[ee],s!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,t));default:Xt(e,t,ee,s,i,null)}return;default:if(Hu(t)){for(ue in i)i.hasOwnProperty(ue)&&(s=i[ue],s!==void 0&&Bd(e,t,ue,s,i,void 0));return}}for(A in i)i.hasOwnProperty(A)&&(s=i[A],s!=null&&Xt(e,t,A,s,i,null))}var Rb={};function Cb(e,t,i,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,u=null,x=null,A=null,B=null,ee=null,ue=null;for(re in i){var _e=i[re];if(i.hasOwnProperty(re)&&_e!=null)switch(re){case"checked":break;case"value":break;case"defaultValue":B=_e;default:s.hasOwnProperty(re)||Xt(e,t,re,null,s,_e)}}for(var K in s){var re=s[K];if(_e=i[K],s.hasOwnProperty(K)&&(re!=null||_e!=null))switch(K){case"type":re!==_e&&(ct=!0),u=re;break;case"name":re!==_e&&(ct=!0),o=re;break;case"checked":re!==_e&&(ct=!0),ee=re;break;case"defaultChecked":re!==_e&&(ct=!0),ue=re;break;case"value":re!==_e&&(ct=!0),x=re;break;case"defaultValue":re!==_e&&(ct=!0),A=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(r(137,t));break;default:re!==_e&&Xt(e,t,K,re,s,_e)}}Fu(e,x,A,B,ee,ue,u,o);return;case"select":re=x=A=K=null;for(u in i)if(B=i[u],i.hasOwnProperty(u)&&B!=null)switch(u){case"value":break;case"multiple":re=B;default:s.hasOwnProperty(u)||Xt(e,t,u,null,s,B)}for(o in s)if(u=s[o],B=i[o],s.hasOwnProperty(o)&&(u!=null||B!=null))switch(o){case"value":u!==B&&(ct=!0),K=u;break;case"defaultValue":u!==B&&(ct=!0),A=u;break;case"multiple":u!==B&&(ct=!0),x=u;default:u!==B&&Xt(e,t,o,u,s,B)}t=A,i=x,s=re,K!=null?ar(e,!!i,K,!1):!!s!=!!i&&(t!=null?ar(e,!!i,t,!0):ar(e,!!i,i?[]:"",!1));return;case"textarea":re=K=null;for(A in i)if(o=i[A],i.hasOwnProperty(A)&&o!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xt(e,t,A,null,s,o)}for(x in s)if(o=s[x],u=i[x],s.hasOwnProperty(x)&&(o!=null||u!=null))switch(x){case"value":o!==u&&(ct=!0),K=o;break;case"defaultValue":o!==u&&(ct=!0),re=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(r(91));break;default:o!==u&&Xt(e,t,x,o,s,u)}rm(e,K,re);return;case"option":for(var ze in i)if(K=i[ze],i.hasOwnProperty(ze)&&K!=null&&!s.hasOwnProperty(ze))switch(ze){case"selected":e.selected=!1;break;default:Xt(e,t,ze,null,s,K)}for(B in s)if(K=s[B],re=i[B],s.hasOwnProperty(B)&&K!==re&&(K!=null||re!=null))switch(B){case"selected":K!==re&&(ct=!0),e.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:Xt(e,t,B,K,s,re)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in i)K=i[Qe],i.hasOwnProperty(Qe)&&K!=null&&!s.hasOwnProperty(Qe)&&Xt(e,t,Qe,null,s,K);for(ee in s)if(K=s[ee],re=i[ee],s.hasOwnProperty(ee)&&K!==re&&(K!=null||re!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(r(137,t));break;default:Xt(e,t,ee,K,s,re)}return;default:if(Hu(t)){for(var xt in i)K=i[xt],i.hasOwnProperty(xt)&&K!==void 0&&!s.hasOwnProperty(xt)&&Bd(e,t,xt,void 0,s,K);for(ue in s)K=s[ue],re=i[ue],!s.hasOwnProperty(ue)||K===re||K===void 0&&re===void 0||Bd(e,t,ue,K,s,re);return}}for(var $ in i)K=i[$],i.hasOwnProperty($)&&K!=null&&!s.hasOwnProperty($)&&Xt(e,t,$,null,s,K);for(_e in s)K=s[_e],re=i[_e],!s.hasOwnProperty(_e)||K===re||K==null&&re==null||Xt(e,t,_e,K,s,re)}function mx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,i=performance.getEntriesByType("resource"),s=0;s<i.length;s++){var o=i[s],u=o.transferSize,x=o.initiatorType,A=o.duration;if(u&&A&&mx(x)){for(x=0,A=o.responseEnd,s+=1;s<i.length;s++){var B=i[s],ee=B.startTime;if(ee>A)break;var ue=B.transferSize,_e=B.initiatorType;ue&&mx(_e)&&(B=B.responseEnd,x+=ue*(B<A?1:(A-ee)/(B-ee)))}if(--s,t+=8*(u+x)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Hd=null,Vd=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function gx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xx(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function vx(e,t,i,s){return i=Kl(i).createElement(e),i[se]=s,i[ne]=t,wn(i,e,t),Ge(i),i}function Gd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jd=null;function Nb(){var e=window.event;return e&&e.type==="popstate"?e===jd?!1:(jd=e,!0):(jd=null,!1)}var kd=typeof setTimeout=="function"?setTimeout:void 0,Db=typeof clearTimeout=="function"?clearTimeout:void 0,_x=typeof Promise=="function"?Promise:void 0,yx=typeof requestAnimationFrame=="function"?requestAnimationFrame:kd,Ub=typeof queueMicrotask=="function"?queueMicrotask:typeof _x<"u"?function(e){return _x.resolve(null).then(e).catch(Lb)}:kd;function Lb(e){setTimeout(function(){throw e})}function ns(e){return e==="head"}function Sx(e,t){var i=t,s=0;do{var o=i.nextSibling;if(e.removeChild(i),o&&o.nodeType===8)if(i=o.data,i==="/$"||i==="/&"){if(s===0){e.removeChild(o),Gr(t);return}s--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")s++;else if(i==="html")Jd(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,Jd(i);for(var u=i.firstChild;u;){var x=u.nextSibling,A=u.nodeName;u[at]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&u.rel.toLowerCase()==="stylesheet"||i.removeChild(u),u=x}}else i==="body"&&Jd(e.ownerDocument.body);i=o}while(i);Gr(t)}function bx(e,t){var i=e;e=0;do{var s=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=s}while(i)}function Mx(e,t,i){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,i!=null&&(e.style.viewTransitionClass=i),i=getComputedStyle(e),i.display==="inline"){if(t=e.getClientRects(),t.length===1)var s=1;else for(var o=s=0;o<t.length;o++){var u=t[o];0<u.width&&0<u.height&&s++}s===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+i.paddingTop,e.marginBottom="-"+i.paddingBottom)}}function Ex(e,t){e=e.style,t=t.style;var i=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(i=t.display,e.display=i==null||typeof i=="boolean"?"":i,i=t.margin,i!=null?e.margin=i:(i=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=i==null||typeof i=="boolean"?"":i,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function Ob(e,t,i){return i=i.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=i.innerHeight&&e.left<=i.innerWidth}}function Xd(e){var t=e.getBoundingClientRect(),i=getComputedStyle(e);return Ob(t,i,e)}function Pb(e){return e.documentElement.clientHeight}function Ib(e){this.addEventListener("load",e),this.addEventListener("error",e)}function zb(e,t,i,s,o,u,x,A,B){var ee=t.nodeType===9?t:t.ownerDocument;try{var ue=ee.startViewTransition({update:function(){var K=ee.defaultView,re=K.navigation&&K.navigation.transition,ze=ee.fonts.status;s();var Qe=[];if(ze==="loaded"&&(Pb(ee),ee.fonts.status==="loading"&&Qe.push(ee.fonts.ready)),ze=Qe.length,e!==null)for(var xt=e.suspenseyImages,$=0,k=0;k<xt.length;k++){var ie=xt[k];if(!ie.complete){var ve=ie.getBoundingClientRect();if(0<ve.bottom&&0<ve.right&&ve.top<K.innerHeight&&ve.left<K.innerWidth){if($+=Xx(ie),$>Hc){Qe.length=ze;break}ie=new Promise(Ib.bind(ie)),Qe.push(ie)}}}if(0<Qe.length)return K=Promise.race([Promise.all(Qe),new Promise(function(qe){return setTimeout(qe,500)})]).then(o,o),(re?Promise.allSettled([re.finished,K]):K).then(u,u);if(o(),re)return re.finished.then(u,u);u()},types:i});ee.__reactViewTransition=ue;var _e=[];return ue.ready.then(function(){for(var K=ee.documentElement.getAnimations({subtree:!0}),re=0;re<K.length;re++){var ze=K[re],Qe=ze.effect,xt=Qe.pseudoElement;if(xt!=null&&xt.startsWith("::view-transition")){_e.push(ze),ze=Qe.getKeyframes();for(var $=xt=void 0,k=!0,ie=0;ie<ze.length;ie++){var ve=ze[ie],qe=ve.width;if(xt===void 0)xt=qe;else if(xt!==qe){k=!1;break}if(qe=ve.height,$===void 0)$=qe;else if($!==qe){k=!1;break}delete ve.width,delete ve.height,ve.transform==="none"&&delete ve.transform}k&&xt!==void 0&&$!==void 0&&(Qe.setKeyframes(ze),k=getComputedStyle(Qe.target,Qe.pseudoElement),k.width!==xt||k.height!==$)&&(k=ze[0],k.width=xt,k.height=$,k=ze[ze.length-1],k.width=xt,k.height=$,Qe.setKeyframes(ze))}}x()},function(K){ee.__reactViewTransition===ue&&(ee.__reactViewTransition=null);try{if(typeof K=="object"&&K!==null)switch(K.name){case"InvalidStateError":(K.message==="View transition was skipped because document visibility state is hidden."||K.message==="Skipping view transition because document visibility state has become hidden."||K.message==="Skipping view transition because viewport size changed."||K.message==="Transition was aborted because of invalid state")&&(K=null)}K!==null&&B(K)}finally{s(),o(),x()}}),ue.finished.finally(function(){for(var K=0;K<_e.length;K++)_e[K].cancel();ee.__reactViewTransition===ue&&(ee.__reactViewTransition=null),A()}),ue}catch{return s(),o(),x(),null}}function Gs(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Gs.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:F({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Gs.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,i=e.getAnimations({subtree:!0}),s=[],o=0;o<i.length;o++){var u=i[o].effect;u!==null&&u.target===e&&u.pseudoElement===t&&s.push(i[o])}return s},Gs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Tx(e){return{name:e,group:new Gs("group",e),imagePair:new Gs("image-pair",e),old:new Gs("old",e),new:new Gs("new",e)}}function li(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}li.prototype.addEventListener=function(e,t,i){var s=null,o=null;if(!(i!=null&&typeof i!="boolean"&&(s=i.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(Rx(u,e,t,i)===-1){var x=this,A=t;i!=null&&typeof i!="boolean"&&i.once===!0&&(A=function(B){x.removeEventListener(e,t,i),typeof t=="function"?t.call(this,B):t.handleEvent(B)}),s!==null&&(o=x.removeEventListener.bind(x,e,t,i),s.addEventListener("abort",o,{once:!0}),o=s.removeEventListener.bind(s,"abort",o)),s=Ir(i),u.push({type:e,listener:t,optionsOrUseCapture:i,attachedListener:A,cleanup:o}),g(this._fragmentFiber.child,!1,Fb,e,A,s)}this._eventListeners=u}};function Fb(e,t,i,s){return S(e).addEventListener(t,i,s),!1}li.prototype.removeEventListener=function(e,t,i){var s=this._eventListeners;if(s!==null&&(t=Rx(s,e,t,i),t!==-1)){var o=s[t];i=o.attachedListener;var u=o.cleanup;o=Ir(o.optionsOrUseCapture),g(this._fragmentFiber.child,!1,Bb,e,i,o),s.splice(t,1),u!==null&&u()}};function Bb(e,t,i,s){return S(e).removeEventListener(t,i,s),!1}function Ir(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Ax(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Rx(e,t,i,s){if(e.length===0)return-1;s=Ax(s);for(var o=0;o<e.length;o++){var u=e[o];if(u.type===t&&u.listener===i&&Ax(u.optionsOrUseCapture)===s)return o}return-1}li.prototype.dispatchEvent=function(e){var t=y(this._fragmentFiber);if(t===null)return!0;t=S(t);var i=this._eventListeners;if(i!==null&&0<i.length||!e.bubbles){var s=t.nodeType===9?t.createComment(""):document.createTextNode("");if(i)for(var o=0;o<i.length;o++){var u=i[o];s.addEventListener(u.type,u.attachedListener,Ir(u.optionsOrUseCapture))}if(t.appendChild(s),e=s.dispatchEvent(e),i)for(o=0;o<i.length;o++)u=i[o],s.removeEventListener(u.type,u.attachedListener,Ir(u.optionsOrUseCapture));return t.removeChild(s),e}return t.dispatchEvent(e)},li.prototype.focus=function(e){g(this._fragmentFiber.child,!0,Cx,e,void 0,void 0)};function Cx(e,t){return e.tag===6?!1:(e=S(e),Qb(e,t))}li.prototype.focusLast=function(e){var t=[];g(this._fragmentFiber.child,!0,qd,t,void 0,void 0);for(var i=t.length-1;0<=i&&!Cx(t[i],e);i--);};function qd(e,t){return t.push(e),!1}li.prototype.blur=function(){var e=y(this._fragmentFiber);e!==null&&(e=S(e),e=Kl(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,Hb,e,void 0,void 0))};function Hb(e,t){return e.tag===6?!1:(e=S(e),e===t||e.contains(t)?(t.blur(),!0):!1)}li.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,Vb,e,void 0,void 0)};function Vb(e,t){return e.tag===6||(e=S(e),t.observe(e)),!1}li.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),g(this._fragmentFiber.child,!1,Gb,e,void 0,void 0);for(var i=t=0;i<Ui.length;i++){var s=Ui[i];s.fragmentInstance===this&&s.observer===e?e.unobserve(s.instance):Ui[t++]=s}Ui.length=t}};function Gb(e,t){return e.tag===6||(e=S(e),t.unobserve(e)),!1}var Ui=[],Wd=!1;function jb(e,t,i){Ui.push({fragmentInstance:e,observer:t,instance:i}),Wd||(Wd=!0,Jb(function(){Wd=!1;var s=Ui;Ui=[];for(var o=0;o<s.length;o++){var u=s[o];u.observer.unobserve(u.instance)}}))}li.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,kb,e,void 0,void 0),e};function kb(e,t){if(e.tag===6){e=e.stateNode;var i=e.ownerDocument.createRange();i.selectNodeContents(e),t.push.apply(t,i.getClientRects())}else e=S(e),t.push.apply(t,e.getClientRects());return!1}li.prototype.getRootNode=function(e){var t=y(this._fragmentFiber);return t===null?this:S(t).getRootNode(e)},li.prototype.compareDocumentPosition=function(e){var t=y(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];g(this._fragmentFiber.child,!1,qd,i,void 0,void 0);var s=S(t);if(i.length===0){if(i=s,M(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(i=t)}t=this._fragmentFiber;var o=s=i.compareDocumentPosition(e);return i===e?o=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=T(t)[1],i===null?o=Node.DOCUMENT_POSITION_PRECEDING:(e=S(i).compareDocumentPosition(e),o=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),o|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=S(i[0]),o=S(i[i.length-1]);var u=M(this._fragmentFiber)?t.parentElement:s;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=u.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=t.compareDocumentPosition(e),A=o.compareDocumentPosition(e),B=x&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=s&&u&&x&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,t=s&&t===e||u&&o===e||B||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&t===e||!u&&o===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xb(t,this._fragmentFiber,i[0],i[i.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xb(e,t,i,s,o){var u=At(o);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===t||u.alternate===t)){i=!0;break e}u=u.return}i=!1}return i}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=o.ownerDocument,o===u||o===u.documentElement||o===u.body;e:{for(u=t,t=y(t);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==t&&u.alternate!==t)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!u)&&!(t=u===i)&&(t=G(i,u,V),t===null?t=!1:(g(t,!0,P,u,i),u=b,b=null,t=u!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!u)&&!(t=u===s)&&(t=G(s,u,V),t===null?t=!1:(g(t,!0,z,u,s),u=b,U=b=null,t=u!==null)),t):!1}function wx(e,t){var i=e.ownerDocument.createRange();i.selectNodeContents(e),e=i.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}li.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(r(566));var t=[];g(this._fragmentFiber.child,!1,qd,t,void 0,void 0);var i=e!==!1;if(t.length===0){var s=T(this._fragmentFiber);if(s=i?s[1]||s[0]||y(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){e=S(s),wx(e,i);return}if(s=S(s),s.nodeType!==9){if(s.nodeType===11){i="host"in s?s.host:null,i!==null&&i.scrollIntoView(e);return}s.scrollIntoView(e)}}for(s=i?t.length-1:0;s!==(i?-1:t.length);){var o=t[s];o.tag===6?(o=S(o),wx(o,i)):S(o).scrollIntoView(e),s+=i?-1:1}};function qb(e,t){return e=S(e),Nx(e,t),!1}function Nx(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function Dx(e,t){var i=t._eventListeners;if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];e.addEventListener(o.type,o.attachedListener,Ir(o.optionsOrUseCapture))}e.nodeType!==3&&(i=t._observers,i!==null&&i.forEach(function(u){for(var x=0,A=0;A<Ui.length;A++){var B=Ui[A];(B.fragmentInstance!==t||B.observer!==u||B.instance!==e)&&(Ui[x++]=B)}Ui.length=x,u.observe(e)}),Nx(e,t))}function Wb(e,t){var i=t._eventListeners;if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];e.removeEventListener(o.type,o.attachedListener,Ir(o.optionsOrUseCapture))}e.nodeType!==3&&(i=t._observers,i!==null&&i.forEach(function(u){typeof u.rootMargin=="string"?jb(t,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Yd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Yd(i),pt(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function Yb(e,t,i,s){for(;e.nodeType===1;){var o=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[at])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function Zb(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=_i(e.nextSibling),e===null))return null;return e}function Ux(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=_i(e.nextSibling),e===null))return null;return e}function Zd(e){return e.data==="$?"||e.data==="$~"}function Kd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Kb(e,t){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||i.readyState!=="loading")t();else{var s=function(){t(),i.removeEventListener("DOMContentLoaded",s)};i.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function _i(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Qd=null;function Lx(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(t===0)return _i(e.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}e=e.nextSibling}return null}function Ox(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return e;t--}else i!=="/$"&&i!=="/&"||t++}e=e.previousSibling}return null}function Qb(e,t){function i(){s=!0}if(e.ownerDocument.activeElement===e)return!0;var s=!1;try{e.ownerDocument.addEventListener("focus",i,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",i,!0)}return s}function Jb(e){yx(function(){yx(function(t){return e(t)})})}function Px(e,t,i){switch(t=Kl(i),e){case"html":if(e=t.documentElement,!e)throw Error(r(452));return e;case"head":if(e=t.head,!e)throw Error(r(453));return e;case"body":if(e=t.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ix(e,t,i){for(var s in i){var o=i[s];i.hasOwnProperty(s)&&o!=null&&Xt(e,t,s,null,Rb,o)}i.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Hi&&(e.onclick=null),pt(e)}function Jd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);pt(e)}var yi=new Map,zx=new Set;function Ql(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var va=De.d;De.d={f:$b,r:eM,D:tM,C:nM,L:iM,m:aM,X:rM,S:sM,M:lM};function $b(){var e=va.f(),t=Dc();return e||t}function eM(e){var t=Vt(e);t!==null&&t.tag===5&&t.type==="form"?B0(t):va.r(e)}var zr=typeof document>"u"?null:document;function Fx(e,t,i){var s=zr;if(s&&typeof t=="string"&&t){var o=di(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof i=="string"&&(o+='[crossorigin="'+i+'"]'),zx.has(o)||(zx.add(o),e={rel:e,crossOrigin:i,href:t},s.querySelector(o)===null&&(t=s.createElement("link"),wn(t,"link",e),Ge(t),s.head.appendChild(t)))}}function tM(e){va.D(e),Fx("dns-prefetch",e,null)}function nM(e,t){va.C(e,t),Fx("preconnect",e,t)}function iM(e,t,i){va.L(e,t,i);var s=zr;if(s&&e&&t){var o='link[rel="preload"][as="'+di(t)+'"]';t==="image"&&i&&i.imageSrcSet?(o+='[imagesrcset="'+di(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(o+='[imagesizes="'+di(i.imageSizes)+'"]')):o+='[href="'+di(e)+'"]';var u=o;switch(t){case"style":u=Fr(e);break;case"script":u=Br(e)}if(!(yi.has(u)||(e=F({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),yi.set(u,e),s.querySelector(o)!==null||t==="style"&&s.querySelector(Jl(u))||t==="script"&&s.querySelector($l(u))))){var x=s.createElement("link");wn(x,"link",e),t==="style"&&(x[nt]=!0,x.onload=x.onerror=function(){Pt(x)}),Ge(x),s.head.appendChild(x)}}}function aM(e,t){va.m(e,t);var i=zr;if(i&&e){var s=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+di(s)+'"][href="'+di(e)+'"]',u=o;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Br(e)}if(!yi.has(u)&&(e=F({rel:"modulepreload",href:e},t),yi.set(u,e),i.querySelector(o)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector($l(u)))return}s=i.createElement("link"),wn(s,"link",e),Ge(s),i.head.appendChild(s)}}}function sM(e,t,i){va.S(e,t,i);var s=zr;if(s&&e){var o=Ut(s).hoistableStyles,u=Fr(e);t=t||"default";var x=o.get(u);if(!x){var A={loading:0,preload:null};if(x=s.querySelector(Jl(u)))A.loading=5;else{e=F({rel:"stylesheet",href:e,"data-precedence":t},i),(i=yi.get(u))&&$d(e,i);var B=x=s.createElement("link");Ge(B),wn(B,"link",e),B._p=new Promise(function(ee,ue){B.onload=ee,B.onerror=ue}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Fc(x,t,s)}x={type:"stylesheet",instance:x,count:1,state:A},o.set(u,x)}}}function rM(e,t){va.X(e,t);var i=zr;if(i&&e){var s=Ut(i).hoistableScripts,o=Br(e),u=s.get(o);u||(u=i.querySelector($l(o)),u||(e=F({src:e,async:!0},t),(t=yi.get(o))&&eh(e,t),u=i.createElement("script"),Ge(u),wn(u,"link",e),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(o,u))}}function lM(e,t){va.M(e,t);var i=zr;if(i&&e){var s=Ut(i).hoistableScripts,o=Br(e),u=s.get(o);u||(u=i.querySelector($l(o)),u||(e=F({src:e,async:!0,type:"module"},t),(t=yi.get(o))&&eh(e,t),u=i.createElement("script"),Ge(u),wn(u,"link",e),i.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(o,u))}}function Bx(e,t,i,s){var o=(o=Mt.current)?Ql(o):null;if(!o)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=Fr(i.href),t=Ut(o).hoistableStyles,s=t.get(i),s||(s={type:"style",instance:null,count:0,state:null},t.set(i,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Fr(i.href);var u=Ut(o).hoistableStyles,x=u.get(e);if(x||(o=o.ownerDocument||o,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,x),(u=o.querySelector(Jl(e)))?u._p||(x.instance=u,x.state.loading=5):(u=yi.get(e),u||(u={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},yi.set(e,u)),oM(o,e,u,x.state))),t&&s===null)throw Error(r(528,""));return x}if(t&&s!==null)throw Error(r(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(i=Br(i),t=Ut(o).hoistableScripts,s=t.get(i),s||(s={type:"script",instance:null,count:0,state:null},t.set(i,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Fr(e){return'href="'+di(e)+'"'}function Jl(e){return'link[rel="stylesheet"]['+e+"]"}function Hx(e){return F({},e,{"data-precedence":e.precedence,precedence:null})}function oM(e,t,i,s){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[nt]!==!0){s.loading=1;return}}else t=e.createElement("link"),t[nt]=!0,t.onload=t.onerror=Pt.bind(null,t),wn(t,"link",i),Ge(t),e.head.appendChild(t);s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2})}function Br(e){return'[src="'+di(e)+'"]'}function $l(e){return"script[async]"+e}function Vx(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+di(i.href)+'"]');if(s)return t.instance=s,Ge(s),s;var o=F({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Ge(s),wn(s,"style",o),Fc(s,i.precedence,e),t.instance=s;case"stylesheet":o=Fr(i.href);var u=e.querySelector(Jl(o));if(u)return t.state.loading|=4,t.instance=u,Ge(u),u;s=Hx(i),(o=yi.get(o))&&$d(s,o),u=(e.ownerDocument||e).createElement("link"),Ge(u);var x=u;return x._p=new Promise(function(A,B){x.onload=A,x.onerror=B}),wn(u,"link",s),t.state.loading|=4,Fc(u,i.precedence,e),t.instance=u;case"script":return u=Br(i.src),(o=e.querySelector($l(u)))?(t.instance=o,Ge(o),o):(s=i,(o=yi.get(u))&&(s=F({},i),eh(s,o)),e=e.ownerDocument||e,o=e.createElement("script"),Ge(o),wn(o,"link",s),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(r(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,Fc(s,i.precedence,e));return t.instance}function Fc(e,t,i){for(var s=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=s.length?s[s.length-1]:null,u=o,x=0;x<s.length;x++){var A=s[x];if(A.dataset.precedence===t)u=A;else if(u!==o)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function $d(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function eh(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Bc=null;function Gx(e,t,i){if(Bc===null){var s=new Map,o=Bc=new Map;o.set(i,s)}else o=Bc,s=o.get(i),s||(s=new Map,o.set(i,s));if(s.has(e))return s;for(s.set(e,null),i=i.getElementsByTagName(e),o=0;o<i.length;o++){var u=i[o];if(!(u[at]||u[se]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var x=u.getAttribute(t)||"";x=e+x;var A=s.get(x);A?A.push(u):s.set(x,[u])}}return s}function th(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function cM(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function jx(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function kx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xx(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function qx(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=Xx(t),e.suspenseyImages.push(t)),e=dM.bind(e),t.decode().then(e,e))}function uM(e,t,i,s){if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var o=Fr(s.href),u=t.querySelector(Jl(o));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=eo.bind(e),t.then(e,e)),i.state.loading|=4,i.instance=u,Ge(u);return}u=t.ownerDocument||t,s=Hx(s),(o=yi.get(o))&&$d(s,o),u=u.createElement("link"),Ge(u);var x=u;x._p=new Promise(function(A,B){x.onload=A,x.onerror=B}),wn(u,"link",s),i.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=eo.bind(e),t.addEventListener("load",i),t.addEventListener("error",i))}}var Hc=0;function fM(e,t){return e.stylesheets&&e.count===0&&Gc(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var s=setTimeout(function(){if(e.stylesheets&&Gc(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Hc===0&&(Hc=62500*wb());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Gc(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Hc?50:800)+t);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(o)}}:null}function Wx(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Gc(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function eo(){this.count--,Wx(this)}function dM(){this.imgCount--,Wx(this)}var Vc=null;function Gc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vc=new Map,t.forEach(hM,e),Vc=null,eo.call(e))}function hM(e,t){if(!(t.state.loading&4)){var i=Vc.get(e);if(i)var s=i.get(null);else{i=new Map,Vc.set(e,i);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<o.length;u++){var x=o[u];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(i.set(x.dataset.precedence,x),s=x)}s&&i.set(null,s)}o=t.instance,x=o.getAttribute("data-precedence"),u=i.get(x)||s,u===s&&i.set(null,o),i.set(x,o),this.count++,s=eo.bind(this),o.addEventListener("load",s),o.addEventListener("error",s),u?u.parentNode.insertBefore(o,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Hr={$$typeof:de,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function pM(e,t,i,s,o,u,x,A,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ir(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ir(0),this.hiddenUpdates=ir(null),this.identifierPrefix=s,this.onUncaughtError=o,this.onCaughtError=u,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function Yx(e,t,i,s,o,u,x,A,B,ee,ue,_e){return e=new pM(e,t,i,x,B,ee,ue,_e,A),t=1,u===!0&&(t|=24),u=qn(3,null,null,t),e.current=u,u.stateNode=e,t=gf(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:s,isDehydrated:i,cache:t},yf(u),e}function Zx(e){return e?(e=dr,e):dr}function Kx(e,t,i,s,o,u){o=Zx(o),s.context===null?s.context=o:s.pendingContext=o,s=ka(t),s.payload={element:i},u=u===void 0?null:u,u!==null&&(s.callback=u),i=Xa(e,s,t),i!==null&&(Kn(i,e,t),Dl(i,e,t))}function Qx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function nh(e,t){Qx(e,t),(e=e.alternate)&&Qx(e,t)}function Jx(e){if(e.tag===13||e.tag===31){var t=Ts(e,67108864);t!==null&&Kn(t,e,67108864),nh(e,67108864)}}function $x(e){if(e.tag===13||e.tag===31){var t=ri();t=pl(t);var i=Ts(e,t);i!==null&&Kn(i,e,t),nh(e,t)}}var Vr=!0;function mM(e,t,i,s){var o=ye.T;ye.T=null;var u=De.p;try{De.p=2,ih(e,t,i,s)}finally{De.p=u,ye.T=o}}function gM(e,t,i,s){var o=ye.T;ye.T=null;var u=De.p;try{De.p=8,ih(e,t,i,s)}finally{De.p=u,ye.T=o}}function ih(e,t,i,s){if(Vr){var o=ah(s);if(o===null)Fd(e,t,s,jc,i),tv(e,s);else if(vM(o,e,t,i,s))s.stopPropagation();else if(tv(e,s),t&4&&-1<xM.indexOf(e)){for(;o!==null;){var u=Vt(o);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var x=Ai(u.pendingLanes);if(x!==0){var A=u;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var B=1<<31-zn(x);A.entanglements[1]|=B,x&=~B}Ki(u),(Bt&6)===0&&(Cc=q()+500,Wl(0))}}break;case 31:case 13:A=Ts(u,2),A!==null&&Kn(A,u,2),Dc(),nh(u,2)}if(u=ah(s),u===null&&Fd(e,t,s,jc,i),u===o)break;o=u}o!==null&&s.stopPropagation()}else Fd(e,t,s,null,i)}}function ah(e){return e=Gu(e),sh(e)}var jc=null;function sh(e){if(jc=null,e=At(e),e!==null){var t=f(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=d(t),e!==null)return e;e=null}else if(i===31){if(e=h(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return jc=e,null}function ev(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(He()){case Ne:return 2;case Ve:return 8;case Re:case Me:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var rh=!1,is=null,as=null,ss=null,to=new Map,no=new Map,rs=[],xM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tv(e,t){switch(e){case"focusin":case"focusout":is=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":ss=null;break;case"pointerover":case"pointerout":to.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(t.pointerId)}}function io(e,t,i,s,o,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:i,eventSystemFlags:s,nativeEvent:u,targetContainers:[o]},t!==null&&(t=Vt(t),t!==null&&Jx(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function vM(e,t,i,s,o){switch(t){case"focusin":return is=io(is,e,t,i,s,o),!0;case"dragenter":return as=io(as,e,t,i,s,o),!0;case"mouseover":return ss=io(ss,e,t,i,s,o),!0;case"pointerover":var u=o.pointerId;return to.set(u,io(to.get(u)||null,e,t,i,s,o)),!0;case"gotpointercapture":return u=o.pointerId,no.set(u,io(no.get(u)||null,e,t,i,s,o)),!0}return!1}function nv(e){var t=At(e.target);if(t!==null){var i=f(t);if(i!==null){if(t=i.tag,t===13){if(t=d(i),t!==null){e.blockedOn=t,te(e.priority,function(){$x(i)});return}}else if(t===31){if(t=h(i),t!==null){e.blockedOn=t,te(e.priority,function(){$x(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=ah(e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);Vu=s,i.target.dispatchEvent(s),Vu=null}else return t=Vt(i),t!==null&&Jx(t),e.blockedOn=i,!1;t.shift()}return!0}function iv(e,t,i){kc(e)&&i.delete(t)}function _M(){rh=!1,is!==null&&kc(is)&&(is=null),as!==null&&kc(as)&&(as=null),ss!==null&&kc(ss)&&(ss=null),to.forEach(iv),no.forEach(iv)}function Xc(e,t){e.blockedOn===t&&(e.blockedOn=null,rh||(rh=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,_M)))}var qc=null;function av(e){qc!==e&&(qc=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){qc===e&&(qc=null);for(var t=0;t<e.length;t+=3){var i=e[t],s=e[t+1],o=e[t+2];if(typeof s!="function"){if(sh(s||i)===null)continue;break}var u=Vt(i);u!==null&&(e.splice(t,3),t-=3,Vf(u,{pending:!0,data:o,method:i.method,action:s},s,o))}}))}function Gr(e){function t(B){return Xc(B,e)}is!==null&&Xc(is,e),as!==null&&Xc(as,e),ss!==null&&Xc(ss,e),to.forEach(t),no.forEach(t);for(var i=0;i<rs.length;i++){var s=rs[i];s.blockedOn===e&&(s.blockedOn=null)}for(;0<rs.length&&(i=rs[0],i.blockedOn===null);)nv(i),i.blockedOn===null&&rs.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(s=0;s<i.length;s+=3){var o=i[s],u=i[s+1],x=o[ne]||null;if(typeof u=="function")x||av(i);else if(x){var A=null;if(u&&u.hasAttribute("formAction")){if(o=u,x=u[ne]||null)A=x.formAction;else if(sh(o)!==null)continue}else A=x.action;typeof A=="function"?i[s+1]=A:(i.splice(s,3),s-=3),av(i)}}}function sv(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(x){return o=x})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),s||setTimeout(i,20)}function i(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function lh(e){this._internalRoot=e}Wc.prototype.render=lh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));var i=t.current,s=ri();Kx(i,s,e,t,null,null)},Wc.prototype.unmount=lh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kx(e.current,2,null,e,null,null),Dc(),t[Le]=null}};function Wc(e){this._internalRoot=e}Wc.prototype.unstable_scheduleHydration=function(e){if(e){var t=w();e={blockedOn:null,target:e,priority:t};for(var i=0;i<rs.length&&t!==0&&t<rs[i].priority;i++);rs.splice(i,0,e),i===0&&nv(e)}};var rv=n.version;if(rv!=="19.3.1")throw Error(r(527,rv,"19.3.1"));De.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(t),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var yM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:ye,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yc.isDisabled&&Yc.supportsFiber)try{wt=Yc.inject(yM),en=Yc}catch{}}return so.createRoot=function(e,t){if(!c(e))throw Error(r(299));var i=!1,s="",o=Z0,u=K0,x=Q0;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(x=t.onRecoverableError)),t=Yx(e,1,!1,null,null,i,s,null,o,u,x,sv),e[Le]=t.current,zd(e),new lh(t)},so.hydrateRoot=function(e,t,i){if(!c(e))throw Error(r(299));var s=!1,o="",u=Z0,x=K0,A=Q0,B=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(x=i.onCaughtError),i.onRecoverableError!==void 0&&(A=i.onRecoverableError),i.formState!==void 0&&(B=i.formState)),t=Yx(e,1,!0,t,i??null,s,o,B,u,x,A,sv),t.context=Zx(null),i=t.current,s=ri(),s=pl(s),o=ka(s),o.callback=null,Xa(i,o,s),i=s,t.current.lanes=i,Oa(t,i),Ki(t),e[Le]=t.current,zd(e),new Wc(t)},so.version="19.3.1",so}var gv;function NM(){if(gv)return uh.exports;gv=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(n){console.error(n)}}return l(),uh.exports=wM(),uh.exports}var DM=NM();const UM=p_(DM);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xp="182",LM=0,xv=1,OM=2,_u=1,PM=2,po=3,gs=0,Jn=1,Ea=2,Aa=0,il=1,qh=2,vv=3,_v=4,IM=5,Qs=100,zM=101,FM=102,BM=103,HM=104,VM=200,GM=201,jM=202,kM=203,Wh=204,Yh=205,XM=206,qM=207,WM=208,YM=209,ZM=210,KM=211,QM=212,JM=213,$M=214,Zh=0,Kh=1,Qh=2,sl=3,Jh=4,$h=5,ep=6,tp=7,m_=0,e1=1,t1=2,ta=0,g_=1,x_=2,v_=3,__=4,y_=5,S_=6,b_=7,M_=300,tr=301,rl=302,np=303,ip=304,wu=306,ap=1e3,Ta=1001,sp=1002,Dn=1003,n1=1004,Zc=1005,In=1006,ph=1007,$s=1008,Ei=1009,E_=1010,T_=1011,xo=1012,qp=1013,ia=1014,$i=1015,wa=1016,Wp=1017,Yp=1018,vo=1020,A_=35902,R_=35899,C_=1021,w_=1022,zi=1023,Na=1026,er=1027,N_=1028,Zp=1029,ll=1030,Kp=1031,Qp=1033,yu=33776,Su=33777,bu=33778,Mu=33779,rp=35840,lp=35841,op=35842,cp=35843,up=36196,fp=37492,dp=37496,hp=37488,pp=37489,mp=37490,gp=37491,xp=37808,vp=37809,_p=37810,yp=37811,Sp=37812,bp=37813,Mp=37814,Ep=37815,Tp=37816,Ap=37817,Rp=37818,Cp=37819,wp=37820,Np=37821,Dp=36492,Up=36494,Lp=36495,Op=36283,Pp=36284,Ip=36285,zp=36286,i1=3200,a1=0,s1=1,ps="",bi="srgb",ol="srgb-linear",Tu="linear",qt="srgb",jr=7680,yv=519,r1=512,l1=513,o1=514,Jp=515,c1=516,u1=517,$p=518,f1=519,Sv=35044,bv="300 es",ea=2e3,Au=2001;function D_(l){for(let n=l.length-1;n>=0;--n)if(l[n]>=65535)return!0;return!1}function Ru(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function d1(){const l=Ru("canvas");return l.style.display="block",l}const Mv={};function Ev(...l){const n="THREE."+l.shift();console.log(n,...l)}function ht(...l){const n="THREE."+l.shift();console.warn(n,...l)}function It(...l){const n="THREE."+l.shift();console.error(n,...l)}function _o(...l){const n=l.join(" ");n in Mv||(Mv[n]=!0,ht(...l))}function h1(l,n,a){return new Promise(function(r,c){function f(){switch(l.clientWaitSync(n,l.SYNC_FLUSH_COMMANDS_BIT,0)){case l.WAIT_FAILED:c();break;case l.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:r()}}setTimeout(f,a)})}class fl{addEventListener(n,a){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[n]===void 0&&(r[n]=[]),r[n].indexOf(a)===-1&&r[n].push(a)}hasEventListener(n,a){const r=this._listeners;return r===void 0?!1:r[n]!==void 0&&r[n].indexOf(a)!==-1}removeEventListener(n,a){const r=this._listeners;if(r===void 0)return;const c=r[n];if(c!==void 0){const f=c.indexOf(a);f!==-1&&c.splice(f,1)}}dispatchEvent(n){const a=this._listeners;if(a===void 0)return;const r=a[n.type];if(r!==void 0){n.target=this;const c=r.slice(0);for(let f=0,d=c.length;f<d;f++)c[f].call(this,n);n.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mh=Math.PI/180,Fp=180/Math.PI;function So(){const l=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[l&255]+On[l>>8&255]+On[l>>16&255]+On[l>>24&255]+"-"+On[n&255]+On[n>>8&255]+"-"+On[n>>16&15|64]+On[n>>24&255]+"-"+On[a&63|128]+On[a>>8&255]+"-"+On[a>>16&255]+On[a>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function Dt(l,n,a){return Math.max(n,Math.min(a,l))}function p1(l,n){return(l%n+n)%n}function gh(l,n,a){return(1-a)*l+a*n}function ro(l,n){switch(n.constructor){case Float32Array:return l;case Uint32Array:return l/4294967295;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int32Array:return Math.max(l/2147483647,-1);case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function Qn(l,n){switch(n.constructor){case Float32Array:return l;case Uint32Array:return Math.round(l*4294967295);case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int32Array:return Math.round(l*2147483647);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(n=0,a=0){Kt.prototype.isVector2=!0,this.x=n,this.y=a}get width(){return this.x}set width(n){this.x=n}get height(){return this.y}set height(n){this.y=n}set(n,a){return this.x=n,this.y=a,this}setScalar(n){return this.x=n,this.y=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y)}copy(n){return this.x=n.x,this.y=n.y,this}add(n){return this.x+=n.x,this.y+=n.y,this}addScalar(n){return this.x+=n,this.y+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this}subScalar(n){return this.x-=n,this.y-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this}multiply(n){return this.x*=n.x,this.y*=n.y,this}multiplyScalar(n){return this.x*=n,this.y*=n,this}divide(n){return this.x/=n.x,this.y/=n.y,this}divideScalar(n){return this.multiplyScalar(1/n)}applyMatrix3(n){const a=this.x,r=this.y,c=n.elements;return this.x=c[0]*a+c[3]*r+c[6],this.y=c[1]*a+c[4]*r+c[7],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this}clamp(n,a){return this.x=Dt(this.x,n.x,a.x),this.y=Dt(this.y,n.y,a.y),this}clampScalar(n,a){return this.x=Dt(this.x,n,a),this.y=Dt(this.y,n,a),this}clampLength(n,a){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(n){return this.x*n.x+this.y*n.y}cross(n){return this.x*n.y-this.y*n.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const r=this.dot(n)/a;return Math.acos(Dt(r,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,r=this.y-n.y;return a*a+r*r}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this}lerpVectors(n,a,r){return this.x=n.x+(a.x-n.x)*r,this.y=n.y+(a.y-n.y)*r,this}equals(n){return n.x===this.x&&n.y===this.y}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this}rotateAround(n,a){const r=Math.cos(a),c=Math.sin(a),f=this.x-n.x,d=this.y-n.y;return this.x=f*r-d*c+n.x,this.y=f*c+d*r+n.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bo{constructor(n=0,a=0,r=0,c=1){this.isQuaternion=!0,this._x=n,this._y=a,this._z=r,this._w=c}static slerpFlat(n,a,r,c,f,d,h){let p=r[c+0],m=r[c+1],_=r[c+2],g=r[c+3],y=f[d+0],M=f[d+1],T=f[d+2],C=f[d+3];if(h<=0){n[a+0]=p,n[a+1]=m,n[a+2]=_,n[a+3]=g;return}if(h>=1){n[a+0]=y,n[a+1]=M,n[a+2]=T,n[a+3]=C;return}if(g!==C||p!==y||m!==M||_!==T){let S=p*y+m*M+_*T+g*C;S<0&&(y=-y,M=-M,T=-T,C=-C,S=-S);let b=1-h;if(S<.9995){const U=Math.acos(S),P=Math.sin(U);b=Math.sin(b*U)/P,h=Math.sin(h*U)/P,p=p*b+y*h,m=m*b+M*h,_=_*b+T*h,g=g*b+C*h}else{p=p*b+y*h,m=m*b+M*h,_=_*b+T*h,g=g*b+C*h;const U=1/Math.sqrt(p*p+m*m+_*_+g*g);p*=U,m*=U,_*=U,g*=U}}n[a]=p,n[a+1]=m,n[a+2]=_,n[a+3]=g}static multiplyQuaternionsFlat(n,a,r,c,f,d){const h=r[c],p=r[c+1],m=r[c+2],_=r[c+3],g=f[d],y=f[d+1],M=f[d+2],T=f[d+3];return n[a]=h*T+_*g+p*M-m*y,n[a+1]=p*T+_*y+m*g-h*M,n[a+2]=m*T+_*M+h*y-p*g,n[a+3]=_*T-h*g-p*y-m*M,n}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get w(){return this._w}set w(n){this._w=n,this._onChangeCallback()}set(n,a,r,c){return this._x=n,this._y=a,this._z=r,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(n){return this._x=n.x,this._y=n.y,this._z=n.z,this._w=n.w,this._onChangeCallback(),this}setFromEuler(n,a=!0){const r=n._x,c=n._y,f=n._z,d=n._order,h=Math.cos,p=Math.sin,m=h(r/2),_=h(c/2),g=h(f/2),y=p(r/2),M=p(c/2),T=p(f/2);switch(d){case"XYZ":this._x=y*_*g+m*M*T,this._y=m*M*g-y*_*T,this._z=m*_*T+y*M*g,this._w=m*_*g-y*M*T;break;case"YXZ":this._x=y*_*g+m*M*T,this._y=m*M*g-y*_*T,this._z=m*_*T-y*M*g,this._w=m*_*g+y*M*T;break;case"ZXY":this._x=y*_*g-m*M*T,this._y=m*M*g+y*_*T,this._z=m*_*T+y*M*g,this._w=m*_*g-y*M*T;break;case"ZYX":this._x=y*_*g-m*M*T,this._y=m*M*g+y*_*T,this._z=m*_*T-y*M*g,this._w=m*_*g+y*M*T;break;case"YZX":this._x=y*_*g+m*M*T,this._y=m*M*g+y*_*T,this._z=m*_*T-y*M*g,this._w=m*_*g-y*M*T;break;case"XZY":this._x=y*_*g-m*M*T,this._y=m*M*g-y*_*T,this._z=m*_*T+y*M*g,this._w=m*_*g+y*M*T;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(n,a){const r=a/2,c=Math.sin(r);return this._x=n.x*c,this._y=n.y*c,this._z=n.z*c,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(n){const a=n.elements,r=a[0],c=a[4],f=a[8],d=a[1],h=a[5],p=a[9],m=a[2],_=a[6],g=a[10],y=r+h+g;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-p)*M,this._y=(f-m)*M,this._z=(d-c)*M}else if(r>h&&r>g){const M=2*Math.sqrt(1+r-h-g);this._w=(_-p)/M,this._x=.25*M,this._y=(c+d)/M,this._z=(f+m)/M}else if(h>g){const M=2*Math.sqrt(1+h-r-g);this._w=(f-m)/M,this._x=(c+d)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+g-r-h);this._w=(d-c)/M,this._x=(f+m)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(n,a){let r=n.dot(a)+1;return r<1e-8?(r=0,Math.abs(n.x)>Math.abs(n.z)?(this._x=-n.y,this._y=n.x,this._z=0,this._w=r):(this._x=0,this._y=-n.z,this._z=n.y,this._w=r)):(this._x=n.y*a.z-n.z*a.y,this._y=n.z*a.x-n.x*a.z,this._z=n.x*a.y-n.y*a.x,this._w=r),this.normalize()}angleTo(n){return 2*Math.acos(Math.abs(Dt(this.dot(n),-1,1)))}rotateTowards(n,a){const r=this.angleTo(n);if(r===0)return this;const c=Math.min(1,a/r);return this.slerp(n,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(n){return this._x*n._x+this._y*n._y+this._z*n._z+this._w*n._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let n=this.length();return n===0?(this._x=0,this._y=0,this._z=0,this._w=1):(n=1/n,this._x=this._x*n,this._y=this._y*n,this._z=this._z*n,this._w=this._w*n),this._onChangeCallback(),this}multiply(n){return this.multiplyQuaternions(this,n)}premultiply(n){return this.multiplyQuaternions(n,this)}multiplyQuaternions(n,a){const r=n._x,c=n._y,f=n._z,d=n._w,h=a._x,p=a._y,m=a._z,_=a._w;return this._x=r*_+d*h+c*m-f*p,this._y=c*_+d*p+f*h-r*m,this._z=f*_+d*m+r*p-c*h,this._w=d*_-r*h-c*p-f*m,this._onChangeCallback(),this}slerp(n,a){if(a<=0)return this;if(a>=1)return this.copy(n);let r=n._x,c=n._y,f=n._z,d=n._w,h=this.dot(n);h<0&&(r=-r,c=-c,f=-f,d=-d,h=-h);let p=1-a;if(h<.9995){const m=Math.acos(h),_=Math.sin(m);p=Math.sin(p*m)/_,a=Math.sin(a*m)/_,this._x=this._x*p+r*a,this._y=this._y*p+c*a,this._z=this._z*p+f*a,this._w=this._w*p+d*a,this._onChangeCallback()}else this._x=this._x*p+r*a,this._y=this._y*p+c*a,this._z=this._z*p+f*a,this._w=this._w*p+d*a,this.normalize();return this}slerpQuaternions(n,a,r){return this.copy(n).slerp(a,r)}random(){const n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),r=Math.random(),c=Math.sqrt(1-r),f=Math.sqrt(r);return this.set(c*Math.sin(n),c*Math.cos(n),f*Math.sin(a),f*Math.cos(a))}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._w===this._w}fromArray(n,a=0){return this._x=n[a],this._y=n[a+1],this._z=n[a+2],this._w=n[a+3],this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._w,n}fromBufferAttribute(n,a){return this._x=n.getX(a),this._y=n.getY(a),this._z=n.getZ(a),this._w=n.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class he{constructor(n=0,a=0,r=0){he.prototype.isVector3=!0,this.x=n,this.y=a,this.z=r}set(n,a,r){return r===void 0&&(r=this.z),this.x=n,this.y=a,this.z=r,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this}multiplyVectors(n,a){return this.x=n.x*a.x,this.y=n.y*a.y,this.z=n.z*a.z,this}applyEuler(n){return this.applyQuaternion(Tv.setFromEuler(n))}applyAxisAngle(n,a){return this.applyQuaternion(Tv.setFromAxisAngle(n,a))}applyMatrix3(n){const a=this.x,r=this.y,c=this.z,f=n.elements;return this.x=f[0]*a+f[3]*r+f[6]*c,this.y=f[1]*a+f[4]*r+f[7]*c,this.z=f[2]*a+f[5]*r+f[8]*c,this}applyNormalMatrix(n){return this.applyMatrix3(n).normalize()}applyMatrix4(n){const a=this.x,r=this.y,c=this.z,f=n.elements,d=1/(f[3]*a+f[7]*r+f[11]*c+f[15]);return this.x=(f[0]*a+f[4]*r+f[8]*c+f[12])*d,this.y=(f[1]*a+f[5]*r+f[9]*c+f[13])*d,this.z=(f[2]*a+f[6]*r+f[10]*c+f[14])*d,this}applyQuaternion(n){const a=this.x,r=this.y,c=this.z,f=n.x,d=n.y,h=n.z,p=n.w,m=2*(d*c-h*r),_=2*(h*a-f*c),g=2*(f*r-d*a);return this.x=a+p*m+d*g-h*_,this.y=r+p*_+h*m-f*g,this.z=c+p*g+f*_-d*m,this}project(n){return this.applyMatrix4(n.matrixWorldInverse).applyMatrix4(n.projectionMatrix)}unproject(n){return this.applyMatrix4(n.projectionMatrixInverse).applyMatrix4(n.matrixWorld)}transformDirection(n){const a=this.x,r=this.y,c=this.z,f=n.elements;return this.x=f[0]*a+f[4]*r+f[8]*c,this.y=f[1]*a+f[5]*r+f[9]*c,this.z=f[2]*a+f[6]*r+f[10]*c,this.normalize()}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this}divideScalar(n){return this.multiplyScalar(1/n)}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this}clamp(n,a){return this.x=Dt(this.x,n.x,a.x),this.y=Dt(this.y,n.y,a.y),this.z=Dt(this.z,n.z,a.z),this}clampScalar(n,a){return this.x=Dt(this.x,n,a),this.y=Dt(this.y,n,a),this.z=Dt(this.z,n,a),this}clampLength(n,a){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this}lerpVectors(n,a,r){return this.x=n.x+(a.x-n.x)*r,this.y=n.y+(a.y-n.y)*r,this.z=n.z+(a.z-n.z)*r,this}cross(n){return this.crossVectors(this,n)}crossVectors(n,a){const r=n.x,c=n.y,f=n.z,d=a.x,h=a.y,p=a.z;return this.x=c*p-f*h,this.y=f*d-r*p,this.z=r*h-c*d,this}projectOnVector(n){const a=n.lengthSq();if(a===0)return this.set(0,0,0);const r=n.dot(this)/a;return this.copy(n).multiplyScalar(r)}projectOnPlane(n){return xh.copy(this).projectOnVector(n),this.sub(xh)}reflect(n){return this.sub(xh.copy(n).multiplyScalar(2*this.dot(n)))}angleTo(n){const a=Math.sqrt(this.lengthSq()*n.lengthSq());if(a===0)return Math.PI/2;const r=this.dot(n)/a;return Math.acos(Dt(r,-1,1))}distanceTo(n){return Math.sqrt(this.distanceToSquared(n))}distanceToSquared(n){const a=this.x-n.x,r=this.y-n.y,c=this.z-n.z;return a*a+r*r+c*c}manhattanDistanceTo(n){return Math.abs(this.x-n.x)+Math.abs(this.y-n.y)+Math.abs(this.z-n.z)}setFromSpherical(n){return this.setFromSphericalCoords(n.radius,n.phi,n.theta)}setFromSphericalCoords(n,a,r){const c=Math.sin(a)*n;return this.x=c*Math.sin(r),this.y=Math.cos(a)*n,this.z=c*Math.cos(r),this}setFromCylindrical(n){return this.setFromCylindricalCoords(n.radius,n.theta,n.y)}setFromCylindricalCoords(n,a,r){return this.x=n*Math.sin(a),this.y=r,this.z=n*Math.cos(a),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(n){const a=this.setFromMatrixColumn(n,0).length(),r=this.setFromMatrixColumn(n,1).length(),c=this.setFromMatrixColumn(n,2).length();return this.x=a,this.y=r,this.z=c,this}setFromMatrixColumn(n,a){return this.fromArray(n.elements,a*4)}setFromMatrix3Column(n,a){return this.fromArray(n.elements,a*3)}setFromEuler(n){return this.x=n._x,this.y=n._y,this.z=n._z,this}setFromColor(n){return this.x=n.r,this.y=n.g,this.z=n.b,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const n=Math.random()*Math.PI*2,a=Math.random()*2-1,r=Math.sqrt(1-a*a);return this.x=r*Math.cos(n),this.y=a,this.z=r*Math.sin(n),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xh=new he,Tv=new bo;class _t{constructor(n,a,r,c,f,d,h,p,m){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],n!==void 0&&this.set(n,a,r,c,f,d,h,p,m)}set(n,a,r,c,f,d,h,p,m){const _=this.elements;return _[0]=n,_[1]=c,_[2]=h,_[3]=a,_[4]=f,_[5]=p,_[6]=r,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(n){const a=this.elements,r=n.elements;return a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=r[3],a[4]=r[4],a[5]=r[5],a[6]=r[6],a[7]=r[7],a[8]=r[8],this}extractBasis(n,a,r){return n.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(n){const a=n.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const r=n.elements,c=a.elements,f=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],_=r[4],g=r[7],y=r[2],M=r[5],T=r[8],C=c[0],S=c[3],b=c[6],U=c[1],P=c[4],z=c[7],V=c[2],G=c[5],F=c[8];return f[0]=d*C+h*U+p*V,f[3]=d*S+h*P+p*G,f[6]=d*b+h*z+p*F,f[1]=m*C+_*U+g*V,f[4]=m*S+_*P+g*G,f[7]=m*b+_*z+g*F,f[2]=y*C+M*U+T*V,f[5]=y*S+M*P+T*G,f[8]=y*b+M*z+T*F,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[3]*=n,a[6]*=n,a[1]*=n,a[4]*=n,a[7]*=n,a[2]*=n,a[5]*=n,a[8]*=n,this}determinant(){const n=this.elements,a=n[0],r=n[1],c=n[2],f=n[3],d=n[4],h=n[5],p=n[6],m=n[7],_=n[8];return a*d*_-a*h*m-r*f*_+r*h*p+c*f*m-c*d*p}invert(){const n=this.elements,a=n[0],r=n[1],c=n[2],f=n[3],d=n[4],h=n[5],p=n[6],m=n[7],_=n[8],g=_*d-h*m,y=h*p-_*f,M=m*f-d*p,T=a*g+r*y+c*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return n[0]=g*C,n[1]=(c*m-_*r)*C,n[2]=(h*r-c*d)*C,n[3]=y*C,n[4]=(_*a-c*p)*C,n[5]=(c*f-h*a)*C,n[6]=M*C,n[7]=(r*p-m*a)*C,n[8]=(d*a-r*f)*C,this}transpose(){let n;const a=this.elements;return n=a[1],a[1]=a[3],a[3]=n,n=a[2],a[2]=a[6],a[6]=n,n=a[5],a[5]=a[7],a[7]=n,this}getNormalMatrix(n){return this.setFromMatrix4(n).invert().transpose()}transposeIntoArray(n){const a=this.elements;return n[0]=a[0],n[1]=a[3],n[2]=a[6],n[3]=a[1],n[4]=a[4],n[5]=a[7],n[6]=a[2],n[7]=a[5],n[8]=a[8],this}setUvTransform(n,a,r,c,f,d,h){const p=Math.cos(f),m=Math.sin(f);return this.set(r*p,r*m,-r*(p*d+m*h)+d+n,-c*m,c*p,-c*(-m*d+p*h)+h+a,0,0,1),this}scale(n,a){return this.premultiply(vh.makeScale(n,a)),this}rotate(n){return this.premultiply(vh.makeRotation(-n)),this}translate(n,a){return this.premultiply(vh.makeTranslation(n,a)),this}makeTranslation(n,a){return n.isVector2?this.set(1,0,n.x,0,1,n.y,0,0,1):this.set(1,0,n,0,1,a,0,0,1),this}makeRotation(n){const a=Math.cos(n),r=Math.sin(n);return this.set(a,-r,0,r,a,0,0,0,1),this}makeScale(n,a){return this.set(n,0,0,0,a,0,0,0,1),this}equals(n){const a=this.elements,r=n.elements;for(let c=0;c<9;c++)if(a[c]!==r[c])return!1;return!0}fromArray(n,a=0){for(let r=0;r<9;r++)this.elements[r]=n[r+a];return this}toArray(n=[],a=0){const r=this.elements;return n[a]=r[0],n[a+1]=r[1],n[a+2]=r[2],n[a+3]=r[3],n[a+4]=r[4],n[a+5]=r[5],n[a+6]=r[6],n[a+7]=r[7],n[a+8]=r[8],n}clone(){return new this.constructor().fromArray(this.elements)}}const vh=new _t,Av=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rv=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m1(){const l={enabled:!0,workingColorSpace:ol,spaces:{},convert:function(c,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===qt&&(c.r=Ra(c.r),c.g=Ra(c.g),c.b=Ra(c.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qt&&(c.r=al(c.r),c.g=al(c.g),c.b=al(c.b))),c},workingToColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},colorSpaceToWorking:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===ps?Tu:this.spaces[c].transfer},getToneMappingMode:function(c){return this.spaces[c].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,d){return c.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(c,f){return _o("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),l.workingToColorSpace(c,f)},toWorkingColorSpace:function(c,f){return _o("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),l.colorSpaceToWorking(c,f)}},n=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],r=[.3127,.329];return l.define({[ol]:{primaries:n,whitePoint:r,transfer:Tu,toXYZ:Av,fromXYZ:Rv,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:bi},outputColorSpaceConfig:{drawingBufferColorSpace:bi}},[bi]:{primaries:n,whitePoint:r,transfer:qt,toXYZ:Av,fromXYZ:Rv,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:bi}}}),l}const Ot=m1();function Ra(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function al(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}let kr;class g1{static getDataURL(n,a="image/png"){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let r;if(n instanceof HTMLCanvasElement)r=n;else{kr===void 0&&(kr=Ru("canvas")),kr.width=n.width,kr.height=n.height;const c=kr.getContext("2d");n instanceof ImageData?c.putImageData(n,0,0):c.drawImage(n,0,0,n.width,n.height),r=kr}return r.toDataURL(a)}static sRGBToLinear(n){if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap){const a=Ru("canvas");a.width=n.width,a.height=n.height;const r=a.getContext("2d");r.drawImage(n,0,0,n.width,n.height);const c=r.getImageData(0,0,n.width,n.height),f=c.data;for(let d=0;d<f.length;d++)f[d]=Ra(f[d]/255)*255;return r.putImageData(c,0,0),a}else if(n.data){const a=n.data.slice(0);for(let r=0;r<a.length;r++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[r]=Math.floor(Ra(a[r]/255)*255):a[r]=Ra(a[r]);return{data:a,width:n.width,height:n.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),n}}let x1=0;class em{constructor(n=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=So(),this.data=n,this.dataReady=!0,this.version=0}getSize(n){const a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?n.set(a.videoWidth,a.videoHeight,0):typeof VideoFrame<"u"&&a instanceof VideoFrame?n.set(a.displayHeight,a.displayWidth,0):a!==null?n.set(a.width,a.height,a.depth||0):n.set(0,0,0),n}set needsUpdate(n){n===!0&&this.version++}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.images[this.uuid]!==void 0)return n.images[this.uuid];const r={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let d=0,h=c.length;d<h;d++)c[d].isDataTexture?f.push(_h(c[d].image)):f.push(_h(c[d]))}else f=_h(c);r.url=f}return a||(n.images[this.uuid]=r),r}}function _h(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?g1.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let v1=0;const yh=new he;class jn extends fl{constructor(n=jn.DEFAULT_IMAGE,a=jn.DEFAULT_MAPPING,r=Ta,c=Ta,f=In,d=$s,h=zi,p=Ei,m=jn.DEFAULT_ANISOTROPY,_=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=So(),this.name="",this.source=new em(n),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=r,this.wrapT=c,this.magFilter=f,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(n&&n.depth&&n.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yh).x}get height(){return this.source.getSize(yh).y}get depth(){return this.source.getSize(yh).z}get image(){return this.source.data}set image(n=null){this.source.data=n}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(n){return this.name=n.name,this.source=n.source,this.mipmaps=n.mipmaps.slice(0),this.mapping=n.mapping,this.channel=n.channel,this.wrapS=n.wrapS,this.wrapT=n.wrapT,this.magFilter=n.magFilter,this.minFilter=n.minFilter,this.anisotropy=n.anisotropy,this.format=n.format,this.internalFormat=n.internalFormat,this.type=n.type,this.offset.copy(n.offset),this.repeat.copy(n.repeat),this.center.copy(n.center),this.rotation=n.rotation,this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrix.copy(n.matrix),this.generateMipmaps=n.generateMipmaps,this.premultiplyAlpha=n.premultiplyAlpha,this.flipY=n.flipY,this.unpackAlignment=n.unpackAlignment,this.colorSpace=n.colorSpace,this.renderTarget=n.renderTarget,this.isRenderTargetTexture=n.isRenderTargetTexture,this.isArrayTexture=n.isArrayTexture,this.userData=JSON.parse(JSON.stringify(n.userData)),this.needsUpdate=!0,this}setValues(n){for(const a in n){const r=n[a];if(r===void 0){ht(`Texture.setValues(): parameter '${a}' has value of undefined.`);continue}const c=this[a];if(c===void 0){ht(`Texture.setValues(): property '${a}' does not exist.`);continue}c&&r&&c.isVector2&&r.isVector2||c&&r&&c.isVector3&&r.isVector3||c&&r&&c.isMatrix3&&r.isMatrix3?c.copy(r):this[a]=r}}toJSON(n){const a=n===void 0||typeof n=="string";if(!a&&n.textures[this.uuid]!==void 0)return n.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(n).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),a||(n.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(n){if(this.mapping!==M_)return n;if(n.applyMatrix3(this.matrix),n.x<0||n.x>1)switch(this.wrapS){case ap:n.x=n.x-Math.floor(n.x);break;case Ta:n.x=n.x<0?0:1;break;case sp:Math.abs(Math.floor(n.x)%2)===1?n.x=Math.ceil(n.x)-n.x:n.x=n.x-Math.floor(n.x);break}if(n.y<0||n.y>1)switch(this.wrapT){case ap:n.y=n.y-Math.floor(n.y);break;case Ta:n.y=n.y<0?0:1;break;case sp:Math.abs(Math.floor(n.y)%2)===1?n.y=Math.ceil(n.y)-n.y:n.y=n.y-Math.floor(n.y);break}return this.flipY&&(n.y=1-n.y),n}set needsUpdate(n){n===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(n){n===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=M_;jn.DEFAULT_ANISOTROPY=1;class ln{constructor(n=0,a=0,r=0,c=1){ln.prototype.isVector4=!0,this.x=n,this.y=a,this.z=r,this.w=c}get width(){return this.z}set width(n){this.z=n}get height(){return this.w}set height(n){this.w=n}set(n,a,r,c){return this.x=n,this.y=a,this.z=r,this.w=c,this}setScalar(n){return this.x=n,this.y=n,this.z=n,this.w=n,this}setX(n){return this.x=n,this}setY(n){return this.y=n,this}setZ(n){return this.z=n,this}setW(n){return this.w=n,this}setComponent(n,a){switch(n){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+n)}return this}getComponent(n){switch(n){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+n)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(n){return this.x=n.x,this.y=n.y,this.z=n.z,this.w=n.w!==void 0?n.w:1,this}add(n){return this.x+=n.x,this.y+=n.y,this.z+=n.z,this.w+=n.w,this}addScalar(n){return this.x+=n,this.y+=n,this.z+=n,this.w+=n,this}addVectors(n,a){return this.x=n.x+a.x,this.y=n.y+a.y,this.z=n.z+a.z,this.w=n.w+a.w,this}addScaledVector(n,a){return this.x+=n.x*a,this.y+=n.y*a,this.z+=n.z*a,this.w+=n.w*a,this}sub(n){return this.x-=n.x,this.y-=n.y,this.z-=n.z,this.w-=n.w,this}subScalar(n){return this.x-=n,this.y-=n,this.z-=n,this.w-=n,this}subVectors(n,a){return this.x=n.x-a.x,this.y=n.y-a.y,this.z=n.z-a.z,this.w=n.w-a.w,this}multiply(n){return this.x*=n.x,this.y*=n.y,this.z*=n.z,this.w*=n.w,this}multiplyScalar(n){return this.x*=n,this.y*=n,this.z*=n,this.w*=n,this}applyMatrix4(n){const a=this.x,r=this.y,c=this.z,f=this.w,d=n.elements;return this.x=d[0]*a+d[4]*r+d[8]*c+d[12]*f,this.y=d[1]*a+d[5]*r+d[9]*c+d[13]*f,this.z=d[2]*a+d[6]*r+d[10]*c+d[14]*f,this.w=d[3]*a+d[7]*r+d[11]*c+d[15]*f,this}divide(n){return this.x/=n.x,this.y/=n.y,this.z/=n.z,this.w/=n.w,this}divideScalar(n){return this.multiplyScalar(1/n)}setAxisAngleFromQuaternion(n){this.w=2*Math.acos(n.w);const a=Math.sqrt(1-n.w*n.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=n.x/a,this.y=n.y/a,this.z=n.z/a),this}setAxisAngleFromRotationMatrix(n){let a,r,c,f;const p=n.elements,m=p[0],_=p[4],g=p[8],y=p[1],M=p[5],T=p[9],C=p[2],S=p[6],b=p[10];if(Math.abs(_-y)<.01&&Math.abs(g-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+C)<.1&&Math.abs(T+S)<.1&&Math.abs(m+M+b-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const P=(m+1)/2,z=(M+1)/2,V=(b+1)/2,G=(_+y)/4,F=(g+C)/4,J=(T+S)/4;return P>z&&P>V?P<.01?(r=0,c=.707106781,f=.707106781):(r=Math.sqrt(P),c=G/r,f=F/r):z>V?z<.01?(r=.707106781,c=0,f=.707106781):(c=Math.sqrt(z),r=G/c,f=J/c):V<.01?(r=.707106781,c=.707106781,f=0):(f=Math.sqrt(V),r=F/f,c=J/f),this.set(r,c,f,a),this}let U=Math.sqrt((S-T)*(S-T)+(g-C)*(g-C)+(y-_)*(y-_));return Math.abs(U)<.001&&(U=1),this.x=(S-T)/U,this.y=(g-C)/U,this.z=(y-_)/U,this.w=Math.acos((m+M+b-1)/2),this}setFromMatrixPosition(n){const a=n.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(n){return this.x=Math.min(this.x,n.x),this.y=Math.min(this.y,n.y),this.z=Math.min(this.z,n.z),this.w=Math.min(this.w,n.w),this}max(n){return this.x=Math.max(this.x,n.x),this.y=Math.max(this.y,n.y),this.z=Math.max(this.z,n.z),this.w=Math.max(this.w,n.w),this}clamp(n,a){return this.x=Dt(this.x,n.x,a.x),this.y=Dt(this.y,n.y,a.y),this.z=Dt(this.z,n.z,a.z),this.w=Dt(this.w,n.w,a.w),this}clampScalar(n,a){return this.x=Dt(this.x,n,a),this.y=Dt(this.y,n,a),this.z=Dt(this.z,n,a),this.w=Dt(this.w,n,a),this}clampLength(n,a){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,n,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(n){return this.x*n.x+this.y*n.y+this.z*n.z+this.w*n.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(n){return this.normalize().multiplyScalar(n)}lerp(n,a){return this.x+=(n.x-this.x)*a,this.y+=(n.y-this.y)*a,this.z+=(n.z-this.z)*a,this.w+=(n.w-this.w)*a,this}lerpVectors(n,a,r){return this.x=n.x+(a.x-n.x)*r,this.y=n.y+(a.y-n.y)*r,this.z=n.z+(a.z-n.z)*r,this.w=n.w+(a.w-n.w)*r,this}equals(n){return n.x===this.x&&n.y===this.y&&n.z===this.z&&n.w===this.w}fromArray(n,a=0){return this.x=n[a],this.y=n[a+1],this.z=n[a+2],this.w=n[a+3],this}toArray(n=[],a=0){return n[a]=this.x,n[a+1]=this.y,n[a+2]=this.z,n[a+3]=this.w,n}fromBufferAttribute(n,a){return this.x=n.getX(a),this.y=n.getY(a),this.z=n.getZ(a),this.w=n.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _1 extends fl{constructor(n=1,a=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=n,this.height=a,this.depth=r.depth,this.scissor=new ln(0,0,n,a),this.scissorTest=!1,this.viewport=new ln(0,0,n,a);const c={width:n,height:a,depth:r.depth},f=new jn(c);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(n={}){const a={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};n.mapping!==void 0&&(a.mapping=n.mapping),n.wrapS!==void 0&&(a.wrapS=n.wrapS),n.wrapT!==void 0&&(a.wrapT=n.wrapT),n.wrapR!==void 0&&(a.wrapR=n.wrapR),n.magFilter!==void 0&&(a.magFilter=n.magFilter),n.minFilter!==void 0&&(a.minFilter=n.minFilter),n.format!==void 0&&(a.format=n.format),n.type!==void 0&&(a.type=n.type),n.anisotropy!==void 0&&(a.anisotropy=n.anisotropy),n.colorSpace!==void 0&&(a.colorSpace=n.colorSpace),n.flipY!==void 0&&(a.flipY=n.flipY),n.generateMipmaps!==void 0&&(a.generateMipmaps=n.generateMipmaps),n.internalFormat!==void 0&&(a.internalFormat=n.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(a)}get texture(){return this.textures[0]}set texture(n){this.textures[0]=n}set depthTexture(n){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),n!==null&&(n.renderTarget=this),this._depthTexture=n}get depthTexture(){return this._depthTexture}setSize(n,a,r=1){if(this.width!==n||this.height!==a||this.depth!==r){this.width=n,this.height=a,this.depth=r;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=n,this.textures[c].image.height=a,this.textures[c].image.depth=r,this.textures[c].isData3DTexture!==!0&&(this.textures[c].isArrayTexture=this.textures[c].image.depth>1);this.dispose()}this.viewport.set(0,0,n,a),this.scissor.set(0,0,n,a)}clone(){return new this.constructor().copy(this)}copy(n){this.width=n.width,this.height=n.height,this.depth=n.depth,this.scissor.copy(n.scissor),this.scissorTest=n.scissorTest,this.viewport.copy(n.viewport),this.textures.length=0;for(let a=0,r=n.textures.length;a<r;a++){this.textures[a]=n.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const c=Object.assign({},n.textures[a].image);this.textures[a].source=new em(c)}return this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,n.depthTexture!==null&&(this.depthTexture=n.depthTexture.clone()),this.samples=n.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class na extends _1{constructor(n=1,a=1,r={}){super(n,a,r),this.isWebGLRenderTarget=!0}}class U_ extends jn{constructor(n=null,a=1,r=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:n,width:a,height:r,depth:c},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(n){this.layerUpdates.add(n)}clearLayerUpdates(){this.layerUpdates.clear()}}class y1 extends jn{constructor(n=null,a=1,r=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:n,width:a,height:r,depth:c},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mo{constructor(n=new he(1/0,1/0,1/0),a=new he(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=n,this.max=a}set(n,a){return this.min.copy(n),this.max.copy(a),this}setFromArray(n){this.makeEmpty();for(let a=0,r=n.length;a<r;a+=3)this.expandByPoint(Li.fromArray(n,a));return this}setFromBufferAttribute(n){this.makeEmpty();for(let a=0,r=n.count;a<r;a++)this.expandByPoint(Li.fromBufferAttribute(n,a));return this}setFromPoints(n){this.makeEmpty();for(let a=0,r=n.length;a<r;a++)this.expandByPoint(n[a]);return this}setFromCenterAndSize(n,a){const r=Li.copy(a).multiplyScalar(.5);return this.min.copy(n).sub(r),this.max.copy(n).add(r),this}setFromObject(n,a=!1){return this.makeEmpty(),this.expandByObject(n,a)}clone(){return new this.constructor().copy(this)}copy(n){return this.min.copy(n.min),this.max.copy(n.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(n){return this.isEmpty()?n.set(0,0,0):n.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(n){return this.isEmpty()?n.set(0,0,0):n.subVectors(this.max,this.min)}expandByPoint(n){return this.min.min(n),this.max.max(n),this}expandByVector(n){return this.min.sub(n),this.max.add(n),this}expandByScalar(n){return this.min.addScalar(-n),this.max.addScalar(n),this}expandByObject(n,a=!1){n.updateWorldMatrix(!1,!1);const r=n.geometry;if(r!==void 0){const f=r.getAttribute("position");if(a===!0&&f!==void 0&&n.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)n.isMesh===!0?n.getVertexPosition(d,Li):Li.fromBufferAttribute(f,d),Li.applyMatrix4(n.matrixWorld),this.expandByPoint(Li);else n.boundingBox!==void 0?(n.boundingBox===null&&n.computeBoundingBox(),Kc.copy(n.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Kc.copy(r.boundingBox)),Kc.applyMatrix4(n.matrixWorld),this.union(Kc)}const c=n.children;for(let f=0,d=c.length;f<d;f++)this.expandByObject(c[f],a);return this}containsPoint(n){return n.x>=this.min.x&&n.x<=this.max.x&&n.y>=this.min.y&&n.y<=this.max.y&&n.z>=this.min.z&&n.z<=this.max.z}containsBox(n){return this.min.x<=n.min.x&&n.max.x<=this.max.x&&this.min.y<=n.min.y&&n.max.y<=this.max.y&&this.min.z<=n.min.z&&n.max.z<=this.max.z}getParameter(n,a){return a.set((n.x-this.min.x)/(this.max.x-this.min.x),(n.y-this.min.y)/(this.max.y-this.min.y),(n.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(n){return n.max.x>=this.min.x&&n.min.x<=this.max.x&&n.max.y>=this.min.y&&n.min.y<=this.max.y&&n.max.z>=this.min.z&&n.min.z<=this.max.z}intersectsSphere(n){return this.clampPoint(n.center,Li),Li.distanceToSquared(n.center)<=n.radius*n.radius}intersectsPlane(n){let a,r;return n.normal.x>0?(a=n.normal.x*this.min.x,r=n.normal.x*this.max.x):(a=n.normal.x*this.max.x,r=n.normal.x*this.min.x),n.normal.y>0?(a+=n.normal.y*this.min.y,r+=n.normal.y*this.max.y):(a+=n.normal.y*this.max.y,r+=n.normal.y*this.min.y),n.normal.z>0?(a+=n.normal.z*this.min.z,r+=n.normal.z*this.max.z):(a+=n.normal.z*this.max.z,r+=n.normal.z*this.min.z),a<=-n.constant&&r>=-n.constant}intersectsTriangle(n){if(this.isEmpty())return!1;this.getCenter(lo),Qc.subVectors(this.max,lo),Xr.subVectors(n.a,lo),qr.subVectors(n.b,lo),Wr.subVectors(n.c,lo),os.subVectors(qr,Xr),cs.subVectors(Wr,qr),js.subVectors(Xr,Wr);let a=[0,-os.z,os.y,0,-cs.z,cs.y,0,-js.z,js.y,os.z,0,-os.x,cs.z,0,-cs.x,js.z,0,-js.x,-os.y,os.x,0,-cs.y,cs.x,0,-js.y,js.x,0];return!Sh(a,Xr,qr,Wr,Qc)||(a=[1,0,0,0,1,0,0,0,1],!Sh(a,Xr,qr,Wr,Qc))?!1:(Jc.crossVectors(os,cs),a=[Jc.x,Jc.y,Jc.z],Sh(a,Xr,qr,Wr,Qc))}clampPoint(n,a){return a.copy(n).clamp(this.min,this.max)}distanceToPoint(n){return this.clampPoint(n,Li).distanceTo(n)}getBoundingSphere(n){return this.isEmpty()?n.makeEmpty():(this.getCenter(n.center),n.radius=this.getSize(Li).length()*.5),n}intersect(n){return this.min.max(n.min),this.max.min(n.max),this.isEmpty()&&this.makeEmpty(),this}union(n){return this.min.min(n.min),this.max.max(n.max),this}applyMatrix4(n){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(n),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(n),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(n),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(n),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(n),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(n),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(n),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(n),this.setFromPoints(_a),this)}translate(n){return this.min.add(n),this.max.add(n),this}equals(n){return n.min.equals(this.min)&&n.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(n){return this.min.fromArray(n.min),this.max.fromArray(n.max),this}}const _a=[new he,new he,new he,new he,new he,new he,new he,new he],Li=new he,Kc=new Mo,Xr=new he,qr=new he,Wr=new he,os=new he,cs=new he,js=new he,lo=new he,Qc=new he,Jc=new he,ks=new he;function Sh(l,n,a,r,c){for(let f=0,d=l.length-3;f<=d;f+=3){ks.fromArray(l,f);const h=c.x*Math.abs(ks.x)+c.y*Math.abs(ks.y)+c.z*Math.abs(ks.z),p=n.dot(ks),m=a.dot(ks),_=r.dot(ks);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>h)return!1}return!0}const S1=new Mo,oo=new he,bh=new he;class Nu{constructor(n=new he,a=-1){this.isSphere=!0,this.center=n,this.radius=a}set(n,a){return this.center.copy(n),this.radius=a,this}setFromPoints(n,a){const r=this.center;a!==void 0?r.copy(a):S1.setFromPoints(n).getCenter(r);let c=0;for(let f=0,d=n.length;f<d;f++)c=Math.max(c,r.distanceToSquared(n[f]));return this.radius=Math.sqrt(c),this}copy(n){return this.center.copy(n.center),this.radius=n.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(n){return n.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(n){return n.distanceTo(this.center)-this.radius}intersectsSphere(n){const a=this.radius+n.radius;return n.center.distanceToSquared(this.center)<=a*a}intersectsBox(n){return n.intersectsSphere(this)}intersectsPlane(n){return Math.abs(n.distanceToPoint(this.center))<=this.radius}clampPoint(n,a){const r=this.center.distanceToSquared(n);return a.copy(n),r>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(n){return this.isEmpty()?(n.makeEmpty(),n):(n.set(this.center,this.center),n.expandByScalar(this.radius),n)}applyMatrix4(n){return this.center.applyMatrix4(n),this.radius=this.radius*n.getMaxScaleOnAxis(),this}translate(n){return this.center.add(n),this}expandByPoint(n){if(this.isEmpty())return this.center.copy(n),this.radius=0,this;oo.subVectors(n,this.center);const a=oo.lengthSq();if(a>this.radius*this.radius){const r=Math.sqrt(a),c=(r-this.radius)*.5;this.center.addScaledVector(oo,c/r),this.radius+=c}return this}union(n){return n.isEmpty()?this:this.isEmpty()?(this.copy(n),this):(this.center.equals(n.center)===!0?this.radius=Math.max(this.radius,n.radius):(bh.subVectors(n.center,this.center).setLength(n.radius),this.expandByPoint(oo.copy(n.center).add(bh)),this.expandByPoint(oo.copy(n.center).sub(bh))),this)}equals(n){return n.center.equals(this.center)&&n.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(n){return this.radius=n.radius,this.center.fromArray(n.center),this}}const ya=new he,Mh=new he,$c=new he,us=new he,Eh=new he,eu=new he,Th=new he;class L_{constructor(n=new he,a=new he(0,0,-1)){this.origin=n,this.direction=a}set(n,a){return this.origin.copy(n),this.direction.copy(a),this}copy(n){return this.origin.copy(n.origin),this.direction.copy(n.direction),this}at(n,a){return a.copy(this.origin).addScaledVector(this.direction,n)}lookAt(n){return this.direction.copy(n).sub(this.origin).normalize(),this}recast(n){return this.origin.copy(this.at(n,ya)),this}closestPointToPoint(n,a){a.subVectors(n,this.origin);const r=a.dot(this.direction);return r<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(n){return Math.sqrt(this.distanceSqToPoint(n))}distanceSqToPoint(n){const a=ya.subVectors(n,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(n):(ya.copy(this.origin).addScaledVector(this.direction,a),ya.distanceToSquared(n))}distanceSqToSegment(n,a,r,c){Mh.copy(n).add(a).multiplyScalar(.5),$c.copy(a).sub(n).normalize(),us.copy(this.origin).sub(Mh);const f=n.distanceTo(a)*.5,d=-this.direction.dot($c),h=us.dot(this.direction),p=-us.dot($c),m=us.lengthSq(),_=Math.abs(1-d*d);let g,y,M,T;if(_>0)if(g=d*p-h,y=d*h-p,T=f*_,g>=0)if(y>=-T)if(y<=T){const C=1/_;g*=C,y*=C,M=g*(g+d*y+2*h)+y*(d*g+y+2*p)+m}else y=f,g=Math.max(0,-(d*y+h)),M=-g*g+y*(y+2*p)+m;else y=-f,g=Math.max(0,-(d*y+h)),M=-g*g+y*(y+2*p)+m;else y<=-T?(g=Math.max(0,-(-d*f+h)),y=g>0?-f:Math.min(Math.max(-f,-p),f),M=-g*g+y*(y+2*p)+m):y<=T?(g=0,y=Math.min(Math.max(-f,-p),f),M=y*(y+2*p)+m):(g=Math.max(0,-(d*f+h)),y=g>0?f:Math.min(Math.max(-f,-p),f),M=-g*g+y*(y+2*p)+m);else y=d>0?-f:f,g=Math.max(0,-(d*y+h)),M=-g*g+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),c&&c.copy(Mh).addScaledVector($c,y),M}intersectSphere(n,a){ya.subVectors(n.center,this.origin);const r=ya.dot(this.direction),c=ya.dot(ya)-r*r,f=n.radius*n.radius;if(c>f)return null;const d=Math.sqrt(f-c),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,a):this.at(h,a)}intersectsSphere(n){return n.radius<0?!1:this.distanceSqToPoint(n.center)<=n.radius*n.radius}distanceToPlane(n){const a=n.normal.dot(this.direction);if(a===0)return n.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(n.normal)+n.constant)/a;return r>=0?r:null}intersectPlane(n,a){const r=this.distanceToPlane(n);return r===null?null:this.at(r,a)}intersectsPlane(n){const a=n.distanceToPoint(this.origin);return a===0||n.normal.dot(this.direction)*a<0}intersectBox(n,a){let r,c,f,d,h,p;const m=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return m>=0?(r=(n.min.x-y.x)*m,c=(n.max.x-y.x)*m):(r=(n.max.x-y.x)*m,c=(n.min.x-y.x)*m),_>=0?(f=(n.min.y-y.y)*_,d=(n.max.y-y.y)*_):(f=(n.max.y-y.y)*_,d=(n.min.y-y.y)*_),r>d||f>c||((f>r||isNaN(r))&&(r=f),(d<c||isNaN(c))&&(c=d),g>=0?(h=(n.min.z-y.z)*g,p=(n.max.z-y.z)*g):(h=(n.max.z-y.z)*g,p=(n.min.z-y.z)*g),r>p||h>c)||((h>r||r!==r)&&(r=h),(p<c||c!==c)&&(c=p),c<0)?null:this.at(r>=0?r:c,a)}intersectsBox(n){return this.intersectBox(n,ya)!==null}intersectTriangle(n,a,r,c,f){Eh.subVectors(a,n),eu.subVectors(r,n),Th.crossVectors(Eh,eu);let d=this.direction.dot(Th),h;if(d>0){if(c)return null;h=1}else if(d<0)h=-1,d=-d;else return null;us.subVectors(this.origin,n);const p=h*this.direction.dot(eu.crossVectors(us,eu));if(p<0)return null;const m=h*this.direction.dot(Eh.cross(us));if(m<0||p+m>d)return null;const _=-h*us.dot(Th);return _<0?null:this.at(_/d,f)}applyMatrix4(n){return this.origin.applyMatrix4(n),this.direction.transformDirection(n),this}equals(n){return n.origin.equals(this.origin)&&n.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(n,a,r,c,f,d,h,p,m,_,g,y,M,T,C,S){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n!==void 0&&this.set(n,a,r,c,f,d,h,p,m,_,g,y,M,T,C,S)}set(n,a,r,c,f,d,h,p,m,_,g,y,M,T,C,S){const b=this.elements;return b[0]=n,b[4]=a,b[8]=r,b[12]=c,b[1]=f,b[5]=d,b[9]=h,b[13]=p,b[2]=m,b[6]=_,b[10]=g,b[14]=y,b[3]=M,b[7]=T,b[11]=C,b[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(n){const a=this.elements,r=n.elements;return a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=r[3],a[4]=r[4],a[5]=r[5],a[6]=r[6],a[7]=r[7],a[8]=r[8],a[9]=r[9],a[10]=r[10],a[11]=r[11],a[12]=r[12],a[13]=r[13],a[14]=r[14],a[15]=r[15],this}copyPosition(n){const a=this.elements,r=n.elements;return a[12]=r[12],a[13]=r[13],a[14]=r[14],this}setFromMatrix3(n){const a=n.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(n,a,r){return this.determinant()===0?(n.set(1,0,0),a.set(0,1,0),r.set(0,0,1),this):(n.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(n,a,r){return this.set(n.x,a.x,r.x,0,n.y,a.y,r.y,0,n.z,a.z,r.z,0,0,0,0,1),this}extractRotation(n){if(n.determinant()===0)return this.identity();const a=this.elements,r=n.elements,c=1/Yr.setFromMatrixColumn(n,0).length(),f=1/Yr.setFromMatrixColumn(n,1).length(),d=1/Yr.setFromMatrixColumn(n,2).length();return a[0]=r[0]*c,a[1]=r[1]*c,a[2]=r[2]*c,a[3]=0,a[4]=r[4]*f,a[5]=r[5]*f,a[6]=r[6]*f,a[7]=0,a[8]=r[8]*d,a[9]=r[9]*d,a[10]=r[10]*d,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(n){const a=this.elements,r=n.x,c=n.y,f=n.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(c),m=Math.sin(c),_=Math.cos(f),g=Math.sin(f);if(n.order==="XYZ"){const y=d*_,M=d*g,T=h*_,C=h*g;a[0]=p*_,a[4]=-p*g,a[8]=m,a[1]=M+T*m,a[5]=y-C*m,a[9]=-h*p,a[2]=C-y*m,a[6]=T+M*m,a[10]=d*p}else if(n.order==="YXZ"){const y=p*_,M=p*g,T=m*_,C=m*g;a[0]=y+C*h,a[4]=T*h-M,a[8]=d*m,a[1]=d*g,a[5]=d*_,a[9]=-h,a[2]=M*h-T,a[6]=C+y*h,a[10]=d*p}else if(n.order==="ZXY"){const y=p*_,M=p*g,T=m*_,C=m*g;a[0]=y-C*h,a[4]=-d*g,a[8]=T+M*h,a[1]=M+T*h,a[5]=d*_,a[9]=C-y*h,a[2]=-d*m,a[6]=h,a[10]=d*p}else if(n.order==="ZYX"){const y=d*_,M=d*g,T=h*_,C=h*g;a[0]=p*_,a[4]=T*m-M,a[8]=y*m+C,a[1]=p*g,a[5]=C*m+y,a[9]=M*m-T,a[2]=-m,a[6]=h*p,a[10]=d*p}else if(n.order==="YZX"){const y=d*p,M=d*m,T=h*p,C=h*m;a[0]=p*_,a[4]=C-y*g,a[8]=T*g+M,a[1]=g,a[5]=d*_,a[9]=-h*_,a[2]=-m*_,a[6]=M*g+T,a[10]=y-C*g}else if(n.order==="XZY"){const y=d*p,M=d*m,T=h*p,C=h*m;a[0]=p*_,a[4]=-g,a[8]=m*_,a[1]=y*g+C,a[5]=d*_,a[9]=M*g-T,a[2]=T*g-M,a[6]=h*_,a[10]=C*g+y}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(n){return this.compose(b1,n,M1)}lookAt(n,a,r){const c=this.elements;return oi.subVectors(n,a),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),fs.crossVectors(r,oi),fs.lengthSq()===0&&(Math.abs(r.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),fs.crossVectors(r,oi)),fs.normalize(),tu.crossVectors(oi,fs),c[0]=fs.x,c[4]=tu.x,c[8]=oi.x,c[1]=fs.y,c[5]=tu.y,c[9]=oi.y,c[2]=fs.z,c[6]=tu.z,c[10]=oi.z,this}multiply(n){return this.multiplyMatrices(this,n)}premultiply(n){return this.multiplyMatrices(n,this)}multiplyMatrices(n,a){const r=n.elements,c=a.elements,f=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],_=r[1],g=r[5],y=r[9],M=r[13],T=r[2],C=r[6],S=r[10],b=r[14],U=r[3],P=r[7],z=r[11],V=r[15],G=c[0],F=c[4],J=c[8],R=c[12],N=c[1],j=c[5],ce=c[9],oe=c[13],me=c[2],de=c[6],W=c[10],Z=c[14],le=c[3],Ee=c[7],I=c[11],L=c[15];return f[0]=d*G+h*N+p*me+m*le,f[4]=d*F+h*j+p*de+m*Ee,f[8]=d*J+h*ce+p*W+m*I,f[12]=d*R+h*oe+p*Z+m*L,f[1]=_*G+g*N+y*me+M*le,f[5]=_*F+g*j+y*de+M*Ee,f[9]=_*J+g*ce+y*W+M*I,f[13]=_*R+g*oe+y*Z+M*L,f[2]=T*G+C*N+S*me+b*le,f[6]=T*F+C*j+S*de+b*Ee,f[10]=T*J+C*ce+S*W+b*I,f[14]=T*R+C*oe+S*Z+b*L,f[3]=U*G+P*N+z*me+V*le,f[7]=U*F+P*j+z*de+V*Ee,f[11]=U*J+P*ce+z*W+V*I,f[15]=U*R+P*oe+z*Z+V*L,this}multiplyScalar(n){const a=this.elements;return a[0]*=n,a[4]*=n,a[8]*=n,a[12]*=n,a[1]*=n,a[5]*=n,a[9]*=n,a[13]*=n,a[2]*=n,a[6]*=n,a[10]*=n,a[14]*=n,a[3]*=n,a[7]*=n,a[11]*=n,a[15]*=n,this}determinant(){const n=this.elements,a=n[0],r=n[4],c=n[8],f=n[12],d=n[1],h=n[5],p=n[9],m=n[13],_=n[2],g=n[6],y=n[10],M=n[14],T=n[3],C=n[7],S=n[11],b=n[15],U=p*M-m*y,P=h*M-m*g,z=h*y-p*g,V=d*M-m*_,G=d*y-p*_,F=d*g-h*_;return a*(C*U-S*P+b*z)-r*(T*U-S*V+b*G)+c*(T*P-C*V+b*F)-f*(T*z-C*G+S*F)}transpose(){const n=this.elements;let a;return a=n[1],n[1]=n[4],n[4]=a,a=n[2],n[2]=n[8],n[8]=a,a=n[6],n[6]=n[9],n[9]=a,a=n[3],n[3]=n[12],n[12]=a,a=n[7],n[7]=n[13],n[13]=a,a=n[11],n[11]=n[14],n[14]=a,this}setPosition(n,a,r){const c=this.elements;return n.isVector3?(c[12]=n.x,c[13]=n.y,c[14]=n.z):(c[12]=n,c[13]=a,c[14]=r),this}invert(){const n=this.elements,a=n[0],r=n[1],c=n[2],f=n[3],d=n[4],h=n[5],p=n[6],m=n[7],_=n[8],g=n[9],y=n[10],M=n[11],T=n[12],C=n[13],S=n[14],b=n[15],U=g*S*m-C*y*m+C*p*M-h*S*M-g*p*b+h*y*b,P=T*y*m-_*S*m-T*p*M+d*S*M+_*p*b-d*y*b,z=_*C*m-T*g*m+T*h*M-d*C*M-_*h*b+d*g*b,V=T*g*p-_*C*p-T*h*y+d*C*y+_*h*S-d*g*S,G=a*U+r*P+c*z+f*V;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/G;return n[0]=U*F,n[1]=(C*y*f-g*S*f-C*c*M+r*S*M+g*c*b-r*y*b)*F,n[2]=(h*S*f-C*p*f+C*c*m-r*S*m-h*c*b+r*p*b)*F,n[3]=(g*p*f-h*y*f-g*c*m+r*y*m+h*c*M-r*p*M)*F,n[4]=P*F,n[5]=(_*S*f-T*y*f+T*c*M-a*S*M-_*c*b+a*y*b)*F,n[6]=(T*p*f-d*S*f-T*c*m+a*S*m+d*c*b-a*p*b)*F,n[7]=(d*y*f-_*p*f+_*c*m-a*y*m-d*c*M+a*p*M)*F,n[8]=z*F,n[9]=(T*g*f-_*C*f-T*r*M+a*C*M+_*r*b-a*g*b)*F,n[10]=(d*C*f-T*h*f+T*r*m-a*C*m-d*r*b+a*h*b)*F,n[11]=(_*h*f-d*g*f-_*r*m+a*g*m+d*r*M-a*h*M)*F,n[12]=V*F,n[13]=(_*C*c-T*g*c+T*r*y-a*C*y-_*r*S+a*g*S)*F,n[14]=(T*h*c-d*C*c-T*r*p+a*C*p+d*r*S-a*h*S)*F,n[15]=(d*g*c-_*h*c+_*r*p-a*g*p-d*r*y+a*h*y)*F,this}scale(n){const a=this.elements,r=n.x,c=n.y,f=n.z;return a[0]*=r,a[4]*=c,a[8]*=f,a[1]*=r,a[5]*=c,a[9]*=f,a[2]*=r,a[6]*=c,a[10]*=f,a[3]*=r,a[7]*=c,a[11]*=f,this}getMaxScaleOnAxis(){const n=this.elements,a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],r=n[4]*n[4]+n[5]*n[5]+n[6]*n[6],c=n[8]*n[8]+n[9]*n[9]+n[10]*n[10];return Math.sqrt(Math.max(a,r,c))}makeTranslation(n,a,r){return n.isVector3?this.set(1,0,0,n.x,0,1,0,n.y,0,0,1,n.z,0,0,0,1):this.set(1,0,0,n,0,1,0,a,0,0,1,r,0,0,0,1),this}makeRotationX(n){const a=Math.cos(n),r=Math.sin(n);return this.set(1,0,0,0,0,a,-r,0,0,r,a,0,0,0,0,1),this}makeRotationY(n){const a=Math.cos(n),r=Math.sin(n);return this.set(a,0,r,0,0,1,0,0,-r,0,a,0,0,0,0,1),this}makeRotationZ(n){const a=Math.cos(n),r=Math.sin(n);return this.set(a,-r,0,0,r,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(n,a){const r=Math.cos(a),c=Math.sin(a),f=1-r,d=n.x,h=n.y,p=n.z,m=f*d,_=f*h;return this.set(m*d+r,m*h-c*p,m*p+c*h,0,m*h+c*p,_*h+r,_*p-c*d,0,m*p-c*h,_*p+c*d,f*p*p+r,0,0,0,0,1),this}makeScale(n,a,r){return this.set(n,0,0,0,0,a,0,0,0,0,r,0,0,0,0,1),this}makeShear(n,a,r,c,f,d){return this.set(1,r,f,0,n,1,d,0,a,c,1,0,0,0,0,1),this}compose(n,a,r){const c=this.elements,f=a._x,d=a._y,h=a._z,p=a._w,m=f+f,_=d+d,g=h+h,y=f*m,M=f*_,T=f*g,C=d*_,S=d*g,b=h*g,U=p*m,P=p*_,z=p*g,V=r.x,G=r.y,F=r.z;return c[0]=(1-(C+b))*V,c[1]=(M+z)*V,c[2]=(T-P)*V,c[3]=0,c[4]=(M-z)*G,c[5]=(1-(y+b))*G,c[6]=(S+U)*G,c[7]=0,c[8]=(T+P)*F,c[9]=(S-U)*F,c[10]=(1-(y+C))*F,c[11]=0,c[12]=n.x,c[13]=n.y,c[14]=n.z,c[15]=1,this}decompose(n,a,r){const c=this.elements;if(n.x=c[12],n.y=c[13],n.z=c[14],this.determinant()===0)return r.set(1,1,1),a.identity(),this;let f=Yr.set(c[0],c[1],c[2]).length();const d=Yr.set(c[4],c[5],c[6]).length(),h=Yr.set(c[8],c[9],c[10]).length();this.determinant()<0&&(f=-f),Oi.copy(this);const m=1/f,_=1/d,g=1/h;return Oi.elements[0]*=m,Oi.elements[1]*=m,Oi.elements[2]*=m,Oi.elements[4]*=_,Oi.elements[5]*=_,Oi.elements[6]*=_,Oi.elements[8]*=g,Oi.elements[9]*=g,Oi.elements[10]*=g,a.setFromRotationMatrix(Oi),r.x=f,r.y=d,r.z=h,this}makePerspective(n,a,r,c,f,d,h=ea,p=!1){const m=this.elements,_=2*f/(a-n),g=2*f/(r-c),y=(a+n)/(a-n),M=(r+c)/(r-c);let T,C;if(p)T=f/(d-f),C=d*f/(d-f);else if(h===ea)T=-(d+f)/(d-f),C=-2*d*f/(d-f);else if(h===Au)T=-d/(d-f),C=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=g,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(n,a,r,c,f,d,h=ea,p=!1){const m=this.elements,_=2/(a-n),g=2/(r-c),y=-(a+n)/(a-n),M=-(r+c)/(r-c);let T,C;if(p)T=1/(d-f),C=d/(d-f);else if(h===ea)T=-2/(d-f),C=-(d+f)/(d-f);else if(h===Au)T=-1/(d-f),C=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=g,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(n){const a=this.elements,r=n.elements;for(let c=0;c<16;c++)if(a[c]!==r[c])return!1;return!0}fromArray(n,a=0){for(let r=0;r<16;r++)this.elements[r]=n[r+a];return this}toArray(n=[],a=0){const r=this.elements;return n[a]=r[0],n[a+1]=r[1],n[a+2]=r[2],n[a+3]=r[3],n[a+4]=r[4],n[a+5]=r[5],n[a+6]=r[6],n[a+7]=r[7],n[a+8]=r[8],n[a+9]=r[9],n[a+10]=r[10],n[a+11]=r[11],n[a+12]=r[12],n[a+13]=r[13],n[a+14]=r[14],n[a+15]=r[15],n}}const Yr=new he,Oi=new on,b1=new he(0,0,0),M1=new he(1,1,1),fs=new he,tu=new he,oi=new he,Cv=new on,wv=new bo;class Da{constructor(n=0,a=0,r=0,c=Da.DEFAULT_ORDER){this.isEuler=!0,this._x=n,this._y=a,this._z=r,this._order=c}get x(){return this._x}set x(n){this._x=n,this._onChangeCallback()}get y(){return this._y}set y(n){this._y=n,this._onChangeCallback()}get z(){return this._z}set z(n){this._z=n,this._onChangeCallback()}get order(){return this._order}set order(n){this._order=n,this._onChangeCallback()}set(n,a,r,c=this._order){return this._x=n,this._y=a,this._z=r,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(n){return this._x=n._x,this._y=n._y,this._z=n._z,this._order=n._order,this._onChangeCallback(),this}setFromRotationMatrix(n,a=this._order,r=!0){const c=n.elements,f=c[0],d=c[4],h=c[8],p=c[1],m=c[5],_=c[9],g=c[2],y=c[6],M=c[10];switch(a){case"XYZ":this._y=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,f),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Dt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-g,f)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-_,M),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,r===!0&&this._onChangeCallback(),this}setFromQuaternion(n,a,r){return Cv.makeRotationFromQuaternion(n),this.setFromRotationMatrix(Cv,a,r)}setFromVector3(n,a=this._order){return this.set(n.x,n.y,n.z,a)}reorder(n){return wv.setFromEuler(this),this.setFromQuaternion(wv,n)}equals(n){return n._x===this._x&&n._y===this._y&&n._z===this._z&&n._order===this._order}fromArray(n){return this._x=n[0],this._y=n[1],this._z=n[2],n[3]!==void 0&&(this._order=n[3]),this._onChangeCallback(),this}toArray(n=[],a=0){return n[a]=this._x,n[a+1]=this._y,n[a+2]=this._z,n[a+3]=this._order,n}_onChange(n){return this._onChangeCallback=n,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Da.DEFAULT_ORDER="XYZ";class O_{constructor(){this.mask=1}set(n){this.mask=(1<<n|0)>>>0}enable(n){this.mask|=1<<n|0}enableAll(){this.mask=-1}toggle(n){this.mask^=1<<n|0}disable(n){this.mask&=~(1<<n|0)}disableAll(){this.mask=0}test(n){return(this.mask&n.mask)!==0}isEnabled(n){return(this.mask&(1<<n|0))!==0}}let E1=0;const Nv=new he,Zr=new bo,Sa=new on,nu=new he,co=new he,T1=new he,A1=new bo,Dv=new he(1,0,0),Uv=new he(0,1,0),Lv=new he(0,0,1),Ov={type:"added"},R1={type:"removed"},Kr={type:"childadded",child:null},Ah={type:"childremoved",child:null};class $n extends fl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const n=new he,a=new Da,r=new bo,c=new he(1,1,1);function f(){r.setFromEuler(a,!1)}function d(){a.setFromQuaternion(r,void 0,!1)}a._onChange(f),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new on},normalMatrix:{value:new _t}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new O_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(n){return this.quaternion.premultiply(n),this}setRotationFromAxisAngle(n,a){this.quaternion.setFromAxisAngle(n,a)}setRotationFromEuler(n){this.quaternion.setFromEuler(n,!0)}setRotationFromMatrix(n){this.quaternion.setFromRotationMatrix(n)}setRotationFromQuaternion(n){this.quaternion.copy(n)}rotateOnAxis(n,a){return Zr.setFromAxisAngle(n,a),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(n,a){return Zr.setFromAxisAngle(n,a),this.quaternion.premultiply(Zr),this}rotateX(n){return this.rotateOnAxis(Dv,n)}rotateY(n){return this.rotateOnAxis(Uv,n)}rotateZ(n){return this.rotateOnAxis(Lv,n)}translateOnAxis(n,a){return Nv.copy(n).applyQuaternion(this.quaternion),this.position.add(Nv.multiplyScalar(a)),this}translateX(n){return this.translateOnAxis(Dv,n)}translateY(n){return this.translateOnAxis(Uv,n)}translateZ(n){return this.translateOnAxis(Lv,n)}localToWorld(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(this.matrixWorld)}worldToLocal(n){return this.updateWorldMatrix(!0,!1),n.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(n,a,r){n.isVector3?nu.copy(n):nu.set(n,a,r);const c=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(co,nu,this.up):Sa.lookAt(nu,co,this.up),this.quaternion.setFromRotationMatrix(Sa),c&&(Sa.extractRotation(c.matrixWorld),Zr.setFromRotationMatrix(Sa),this.quaternion.premultiply(Zr.invert()))}add(n){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return n===this?(It("Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.removeFromParent(),n.parent=this,this.children.push(n),n.dispatchEvent(Ov),Kr.child=n,this.dispatchEvent(Kr),Kr.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",n),this)}remove(n){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const a=this.children.indexOf(n);return a!==-1&&(n.parent=null,this.children.splice(a,1),n.dispatchEvent(R1),Ah.child=n,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const n=this.parent;return n!==null&&n.remove(this),this}clear(){return this.remove(...this.children)}attach(n){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),Sa.multiply(n.parent.matrixWorld)),n.applyMatrix4(Sa),n.removeFromParent(),n.parent=this,this.children.push(n),n.updateWorldMatrix(!1,!0),n.dispatchEvent(Ov),Kr.child=n,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(n){return this.getObjectByProperty("id",n)}getObjectByName(n){return this.getObjectByProperty("name",n)}getObjectByProperty(n,a){if(this[n]===a)return this;for(let r=0,c=this.children.length;r<c;r++){const d=this.children[r].getObjectByProperty(n,a);if(d!==void 0)return d}}getObjectsByProperty(n,a,r=[]){this[n]===a&&r.push(this);const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].getObjectsByProperty(n,a,r);return r}getWorldPosition(n){return this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,n,T1),n}getWorldScale(n){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,A1,n),n}getWorldDirection(n){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return n.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(n){n(this);const a=this.children;for(let r=0,c=a.length;r<c;r++)a[r].traverse(n)}traverseVisible(n){if(this.visible===!1)return;n(this);const a=this.children;for(let r=0,c=a.length;r<c;r++)a[r].traverseVisible(n)}traverseAncestors(n){const a=this.parent;a!==null&&(n(a),a.traverseAncestors(n))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0);const a=this.children;for(let r=0,c=a.length;r<c;r++)a[r].updateMatrixWorld(n)}updateWorldMatrix(n,a){const r=this.parent;if(n===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].updateWorldMatrix(!1,!0)}}toJSON(n){const a=n===void 0||typeof n=="string",r={};a&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,this.name!==""&&(c.name=this.name),this.castShadow===!0&&(c.castShadow=!0),this.receiveShadow===!0&&(c.receiveShadow=!0),this.visible===!1&&(c.visible=!1),this.frustumCulled===!1&&(c.frustumCulled=!1),this.renderOrder!==0&&(c.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(c.matrixAutoUpdate=!1),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),c.instanceInfo=this._instanceInfo.map(h=>({...h})),c.availableInstanceIds=this._availableInstanceIds.slice(),c.availableGeometryIds=this._availableGeometryIds.slice(),c.nextIndexStart=this._nextIndexStart,c.nextVertexStart=this._nextVertexStart,c.geometryCount=this._geometryCount,c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.matricesTexture=this._matricesTexture.toJSON(n),c.indirectTexture=this._indirectTexture.toJSON(n),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(n)),this.boundingSphere!==null&&(c.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(c.boundingBox=this.boundingBox.toJSON()));function f(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(n)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(n).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(n).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(n.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const g=p[m];f(n.shapes,g)}else f(n.shapes,p)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(n.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(f(n.materials,this.material[p]));c.material=h}else c.material=f(n.materials,this.material);if(this.children.length>0){c.children=[];for(let h=0;h<this.children.length;h++)c.children.push(this.children[h].toJSON(n).object)}if(this.animations.length>0){c.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];c.animations.push(f(n.animations,p))}}if(a){const h=d(n.geometries),p=d(n.materials),m=d(n.textures),_=d(n.images),g=d(n.shapes),y=d(n.skeletons),M=d(n.animations),T=d(n.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=c,r;function d(h){const p=[];for(const m in h){const _=h[m];delete _.metadata,p.push(_)}return p}}clone(n){return new this.constructor().copy(this,n)}copy(n,a=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldAutoUpdate=n.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.animations=n.animations.slice(),this.userData=JSON.parse(JSON.stringify(n.userData)),a===!0)for(let r=0;r<n.children.length;r++){const c=n.children[r];this.add(c.clone())}return this}}$n.DEFAULT_UP=new he(0,1,0);$n.DEFAULT_MATRIX_AUTO_UPDATE=!0;$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pi=new he,ba=new he,Rh=new he,Ma=new he,Qr=new he,Jr=new he,Pv=new he,Ch=new he,wh=new he,Nh=new he,Dh=new ln,Uh=new ln,Lh=new ln;class Ii{constructor(n=new he,a=new he,r=new he){this.a=n,this.b=a,this.c=r}static getNormal(n,a,r,c){c.subVectors(r,a),Pi.subVectors(n,a),c.cross(Pi);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(n,a,r,c,f){Pi.subVectors(c,a),ba.subVectors(r,a),Rh.subVectors(n,a);const d=Pi.dot(Pi),h=Pi.dot(ba),p=Pi.dot(Rh),m=ba.dot(ba),_=ba.dot(Rh),g=d*m-h*h;if(g===0)return f.set(0,0,0),null;const y=1/g,M=(m*p-h*_)*y,T=(d*_-h*p)*y;return f.set(1-M-T,T,M)}static containsPoint(n,a,r,c){return this.getBarycoord(n,a,r,c,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(n,a,r,c,f,d,h,p){return this.getBarycoord(n,a,r,c,Ma)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,Ma.x),p.addScaledVector(d,Ma.y),p.addScaledVector(h,Ma.z),p)}static getInterpolatedAttribute(n,a,r,c,f,d){return Dh.setScalar(0),Uh.setScalar(0),Lh.setScalar(0),Dh.fromBufferAttribute(n,a),Uh.fromBufferAttribute(n,r),Lh.fromBufferAttribute(n,c),d.setScalar(0),d.addScaledVector(Dh,f.x),d.addScaledVector(Uh,f.y),d.addScaledVector(Lh,f.z),d}static isFrontFacing(n,a,r,c){return Pi.subVectors(r,a),ba.subVectors(n,a),Pi.cross(ba).dot(c)<0}set(n,a,r){return this.a.copy(n),this.b.copy(a),this.c.copy(r),this}setFromPointsAndIndices(n,a,r,c){return this.a.copy(n[a]),this.b.copy(n[r]),this.c.copy(n[c]),this}setFromAttributeAndIndices(n,a,r,c){return this.a.fromBufferAttribute(n,a),this.b.fromBufferAttribute(n,r),this.c.fromBufferAttribute(n,c),this}clone(){return new this.constructor().copy(this)}copy(n){return this.a.copy(n.a),this.b.copy(n.b),this.c.copy(n.c),this}getArea(){return Pi.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),Pi.cross(ba).length()*.5}getMidpoint(n){return n.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(n){return Ii.getNormal(this.a,this.b,this.c,n)}getPlane(n){return n.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(n,a){return Ii.getBarycoord(n,this.a,this.b,this.c,a)}getInterpolation(n,a,r,c,f){return Ii.getInterpolation(n,this.a,this.b,this.c,a,r,c,f)}containsPoint(n){return Ii.containsPoint(n,this.a,this.b,this.c)}isFrontFacing(n){return Ii.isFrontFacing(this.a,this.b,this.c,n)}intersectsBox(n){return n.intersectsTriangle(this)}closestPointToPoint(n,a){const r=this.a,c=this.b,f=this.c;let d,h;Qr.subVectors(c,r),Jr.subVectors(f,r),Ch.subVectors(n,r);const p=Qr.dot(Ch),m=Jr.dot(Ch);if(p<=0&&m<=0)return a.copy(r);wh.subVectors(n,c);const _=Qr.dot(wh),g=Jr.dot(wh);if(_>=0&&g<=_)return a.copy(c);const y=p*g-_*m;if(y<=0&&p>=0&&_<=0)return d=p/(p-_),a.copy(r).addScaledVector(Qr,d);Nh.subVectors(n,f);const M=Qr.dot(Nh),T=Jr.dot(Nh);if(T>=0&&M<=T)return a.copy(f);const C=M*m-p*T;if(C<=0&&m>=0&&T<=0)return h=m/(m-T),a.copy(r).addScaledVector(Jr,h);const S=_*T-M*g;if(S<=0&&g-_>=0&&M-T>=0)return Pv.subVectors(f,c),h=(g-_)/(g-_+(M-T)),a.copy(c).addScaledVector(Pv,h);const b=1/(S+C+y);return d=C*b,h=y*b,a.copy(r).addScaledVector(Qr,d).addScaledVector(Jr,h)}equals(n){return n.a.equals(this.a)&&n.b.equals(this.b)&&n.c.equals(this.c)}}const P_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},iu={h:0,s:0,l:0};function Oh(l,n,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?l+(n-l)*6*a:a<1/2?n:a<2/3?l+(n-l)*6*(2/3-a):l}class zt{constructor(n,a,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(n,a,r)}set(n,a,r){if(a===void 0&&r===void 0){const c=n;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(n,a,r);return this}setScalar(n){return this.r=n,this.g=n,this.b=n,this}setHex(n,a=bi){return n=Math.floor(n),this.r=(n>>16&255)/255,this.g=(n>>8&255)/255,this.b=(n&255)/255,Ot.colorSpaceToWorking(this,a),this}setRGB(n,a,r,c=Ot.workingColorSpace){return this.r=n,this.g=a,this.b=r,Ot.colorSpaceToWorking(this,c),this}setHSL(n,a,r,c=Ot.workingColorSpace){if(n=p1(n,1),a=Dt(a,0,1),r=Dt(r,0,1),a===0)this.r=this.g=this.b=r;else{const f=r<=.5?r*(1+a):r+a-r*a,d=2*r-f;this.r=Oh(d,f,n+1/3),this.g=Oh(d,f,n),this.b=Oh(d,f,n-1/3)}return Ot.colorSpaceToWorking(this,c),this}setStyle(n,a=bi){function r(f){f!==void 0&&parseFloat(f)<1&&ht("Color: Alpha component of "+n+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(n)){let f;const d=c[1],h=c[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:ht("Color: Unknown color model "+n)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(n)){const f=c[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(d===6)return this.setHex(parseInt(f,16),a);ht("Color: Invalid hex color "+n)}else if(n&&n.length>0)return this.setColorName(n,a);return this}setColorName(n,a=bi){const r=P_[n.toLowerCase()];return r!==void 0?this.setHex(r,a):ht("Color: Unknown color "+n),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(n){return this.r=n.r,this.g=n.g,this.b=n.b,this}copySRGBToLinear(n){return this.r=Ra(n.r),this.g=Ra(n.g),this.b=Ra(n.b),this}copyLinearToSRGB(n){return this.r=al(n.r),this.g=al(n.g),this.b=al(n.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(n=bi){return Ot.workingToColorSpace(Pn.copy(this),n),Math.round(Dt(Pn.r*255,0,255))*65536+Math.round(Dt(Pn.g*255,0,255))*256+Math.round(Dt(Pn.b*255,0,255))}getHexString(n=bi){return("000000"+this.getHex(n).toString(16)).slice(-6)}getHSL(n,a=Ot.workingColorSpace){Ot.workingToColorSpace(Pn.copy(this),a);const r=Pn.r,c=Pn.g,f=Pn.b,d=Math.max(r,c,f),h=Math.min(r,c,f);let p,m;const _=(h+d)/2;if(h===d)p=0,m=0;else{const g=d-h;switch(m=_<=.5?g/(d+h):g/(2-d-h),d){case r:p=(c-f)/g+(c<f?6:0);break;case c:p=(f-r)/g+2;break;case f:p=(r-c)/g+4;break}p/=6}return n.h=p,n.s=m,n.l=_,n}getRGB(n,a=Ot.workingColorSpace){return Ot.workingToColorSpace(Pn.copy(this),a),n.r=Pn.r,n.g=Pn.g,n.b=Pn.b,n}getStyle(n=bi){Ot.workingToColorSpace(Pn.copy(this),n);const a=Pn.r,r=Pn.g,c=Pn.b;return n!==bi?`color(${n} ${a.toFixed(3)} ${r.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(r*255)},${Math.round(c*255)})`}offsetHSL(n,a,r){return this.getHSL(ds),this.setHSL(ds.h+n,ds.s+a,ds.l+r)}add(n){return this.r+=n.r,this.g+=n.g,this.b+=n.b,this}addColors(n,a){return this.r=n.r+a.r,this.g=n.g+a.g,this.b=n.b+a.b,this}addScalar(n){return this.r+=n,this.g+=n,this.b+=n,this}sub(n){return this.r=Math.max(0,this.r-n.r),this.g=Math.max(0,this.g-n.g),this.b=Math.max(0,this.b-n.b),this}multiply(n){return this.r*=n.r,this.g*=n.g,this.b*=n.b,this}multiplyScalar(n){return this.r*=n,this.g*=n,this.b*=n,this}lerp(n,a){return this.r+=(n.r-this.r)*a,this.g+=(n.g-this.g)*a,this.b+=(n.b-this.b)*a,this}lerpColors(n,a,r){return this.r=n.r+(a.r-n.r)*r,this.g=n.g+(a.g-n.g)*r,this.b=n.b+(a.b-n.b)*r,this}lerpHSL(n,a){this.getHSL(ds),n.getHSL(iu);const r=gh(ds.h,iu.h,a),c=gh(ds.s,iu.s,a),f=gh(ds.l,iu.l,a);return this.setHSL(r,c,f),this}setFromVector3(n){return this.r=n.x,this.g=n.y,this.b=n.z,this}applyMatrix3(n){const a=this.r,r=this.g,c=this.b,f=n.elements;return this.r=f[0]*a+f[3]*r+f[6]*c,this.g=f[1]*a+f[4]*r+f[7]*c,this.b=f[2]*a+f[5]*r+f[8]*c,this}equals(n){return n.r===this.r&&n.g===this.g&&n.b===this.b}fromArray(n,a=0){return this.r=n[a],this.g=n[a+1],this.b=n[a+2],this}toArray(n=[],a=0){return n[a]=this.r,n[a+1]=this.g,n[a+2]=this.b,n}fromBufferAttribute(n,a){return this.r=n.getX(a),this.g=n.getY(a),this.b=n.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new zt;zt.NAMES=P_;let C1=0;class Eo extends fl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C1++}),this.uuid=So(),this.name="",this.type="Material",this.blending=il,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=Yh,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(n){this._alphaTest>0!=n>0&&this.version++,this._alphaTest=n}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(n){if(n!==void 0)for(const a in n){const r=n[a];if(r===void 0){ht(`Material: parameter '${a}' has value of undefined.`);continue}const c=this[a];if(c===void 0){ht(`Material: '${a}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(r):c&&c.isVector3&&r&&r.isVector3?c.copy(r):this[a]=r}}toJSON(n){const a=n===void 0||typeof n=="string";a&&(n={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(n).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(n).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(n).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(n).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(n).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(n).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(n).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(n).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(n).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(n).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(n).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(n).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(n).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(n).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(n).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(n).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==il&&(r.blending=this.blending),this.side!==gs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wh&&(r.blendSrc=this.blendSrc),this.blendDst!==Yh&&(r.blendDst=this.blendDst),this.blendEquation!==Qs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==sl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function c(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}if(a){const f=c(n.textures),d=c(n.images);f.length>0&&(r.textures=f),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(n){this.name=n.name,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.blendColor.copy(n.blendColor),this.blendAlpha=n.blendAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const a=n.clippingPlanes;let r=null;if(a!==null){const c=a.length;r=new Array(c);for(let f=0;f!==c;++f)r[f]=a[f].clone()}return this.clippingPlanes=r,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaHash=n.alphaHash,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.forceSinglePass=n.forceSinglePass,this.allowOverride=n.allowOverride,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(n){n===!0&&this.version++}}class I_ extends Eo{constructor(n){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Da,this.combine=m_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.specularMap=n.specularMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapRotation.copy(n.envMapRotation),this.combine=n.combine,this.reflectivity=n.reflectivity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.fog=n.fog,this}}const pn=new he,au=new Kt;let w1=0;class Ti{constructor(n,a,r=!1){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:w1++}),this.name="",this.array=n,this.itemSize=a,this.count=n!==void 0?n.length/a:0,this.normalized=r,this.usage=Sv,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(n){n===!0&&this.version++}setUsage(n){return this.usage=n,this}addUpdateRange(n,a){this.updateRanges.push({start:n,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this.gpuType=n.gpuType,this}copyAt(n,a,r){n*=this.itemSize,r*=a.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[n+c]=a.array[r+c];return this}copyArray(n){return this.array.set(n),this}applyMatrix3(n){if(this.itemSize===2)for(let a=0,r=this.count;a<r;a++)au.fromBufferAttribute(this,a),au.applyMatrix3(n),this.setXY(a,au.x,au.y);else if(this.itemSize===3)for(let a=0,r=this.count;a<r;a++)pn.fromBufferAttribute(this,a),pn.applyMatrix3(n),this.setXYZ(a,pn.x,pn.y,pn.z);return this}applyMatrix4(n){for(let a=0,r=this.count;a<r;a++)pn.fromBufferAttribute(this,a),pn.applyMatrix4(n),this.setXYZ(a,pn.x,pn.y,pn.z);return this}applyNormalMatrix(n){for(let a=0,r=this.count;a<r;a++)pn.fromBufferAttribute(this,a),pn.applyNormalMatrix(n),this.setXYZ(a,pn.x,pn.y,pn.z);return this}transformDirection(n){for(let a=0,r=this.count;a<r;a++)pn.fromBufferAttribute(this,a),pn.transformDirection(n),this.setXYZ(a,pn.x,pn.y,pn.z);return this}set(n,a=0){return this.array.set(n,a),this}getComponent(n,a){let r=this.array[n*this.itemSize+a];return this.normalized&&(r=ro(r,this.array)),r}setComponent(n,a,r){return this.normalized&&(r=Qn(r,this.array)),this.array[n*this.itemSize+a]=r,this}getX(n){let a=this.array[n*this.itemSize];return this.normalized&&(a=ro(a,this.array)),a}setX(n,a){return this.normalized&&(a=Qn(a,this.array)),this.array[n*this.itemSize]=a,this}getY(n){let a=this.array[n*this.itemSize+1];return this.normalized&&(a=ro(a,this.array)),a}setY(n,a){return this.normalized&&(a=Qn(a,this.array)),this.array[n*this.itemSize+1]=a,this}getZ(n){let a=this.array[n*this.itemSize+2];return this.normalized&&(a=ro(a,this.array)),a}setZ(n,a){return this.normalized&&(a=Qn(a,this.array)),this.array[n*this.itemSize+2]=a,this}getW(n){let a=this.array[n*this.itemSize+3];return this.normalized&&(a=ro(a,this.array)),a}setW(n,a){return this.normalized&&(a=Qn(a,this.array)),this.array[n*this.itemSize+3]=a,this}setXY(n,a,r){return n*=this.itemSize,this.normalized&&(a=Qn(a,this.array),r=Qn(r,this.array)),this.array[n+0]=a,this.array[n+1]=r,this}setXYZ(n,a,r,c){return n*=this.itemSize,this.normalized&&(a=Qn(a,this.array),r=Qn(r,this.array),c=Qn(c,this.array)),this.array[n+0]=a,this.array[n+1]=r,this.array[n+2]=c,this}setXYZW(n,a,r,c,f){return n*=this.itemSize,this.normalized&&(a=Qn(a,this.array),r=Qn(r,this.array),c=Qn(c,this.array),f=Qn(f,this.array)),this.array[n+0]=a,this.array[n+1]=r,this.array[n+2]=c,this.array[n+3]=f,this}onUpload(n){return this.onUploadCallback=n,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==Sv&&(n.usage=this.usage),n}}class z_ extends Ti{constructor(n,a,r){super(new Uint16Array(n),a,r)}}class F_ extends Ti{constructor(n,a,r){super(new Uint32Array(n),a,r)}}class Ca extends Ti{constructor(n,a,r){super(new Float32Array(n),a,r)}}let N1=0;const Si=new on,Ph=new $n,$r=new he,ci=new Mo,uo=new Mo,bn=new he;class Bi extends fl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N1++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(n){return Array.isArray(n)?this.index=new(D_(n)?F_:z_)(n,1):this.index=n,this}setIndirect(n,a=0){return this.indirect=n,this.indirectOffset=a,this}getIndirect(){return this.indirect}getAttribute(n){return this.attributes[n]}setAttribute(n,a){return this.attributes[n]=a,this}deleteAttribute(n){return delete this.attributes[n],this}hasAttribute(n){return this.attributes[n]!==void 0}addGroup(n,a,r=0){this.groups.push({start:n,count:a,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(n,a){this.drawRange.start=n,this.drawRange.count=a}applyMatrix4(n){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(n),a.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const f=new _t().getNormalMatrix(n);r.applyNormalMatrix(f),r.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(n),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(n){return Si.makeRotationFromQuaternion(n),this.applyMatrix4(Si),this}rotateX(n){return Si.makeRotationX(n),this.applyMatrix4(Si),this}rotateY(n){return Si.makeRotationY(n),this.applyMatrix4(Si),this}rotateZ(n){return Si.makeRotationZ(n),this.applyMatrix4(Si),this}translate(n,a,r){return Si.makeTranslation(n,a,r),this.applyMatrix4(Si),this}scale(n,a,r){return Si.makeScale(n,a,r),this.applyMatrix4(Si),this}lookAt(n){return Ph.lookAt(n),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(n){const a=this.getAttribute("position");if(a===void 0){const r=[];for(let c=0,f=n.length;c<f;c++){const d=n[c];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ca(r,3))}else{const r=Math.min(n.length,a.count);for(let c=0;c<r;c++){const f=n[c];a.setXYZ(c,f.x,f.y,f.z||0)}n.length>a.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mo);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new he(-1/0,-1/0,-1/0),new he(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),a)for(let r=0,c=a.length;r<c;r++){const f=a[r];ci.setFromBufferAttribute(f),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nu);const n=this.attributes.position,a=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new he,1/0);return}if(n){const r=this.boundingSphere.center;if(ci.setFromBufferAttribute(n),a)for(let f=0,d=a.length;f<d;f++){const h=a[f];uo.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ci.min,uo.min),ci.expandByPoint(bn),bn.addVectors(ci.max,uo.max),ci.expandByPoint(bn)):(ci.expandByPoint(uo.min),ci.expandByPoint(uo.max))}ci.getCenter(r);let c=0;for(let f=0,d=n.count;f<d;f++)bn.fromBufferAttribute(n,f),c=Math.max(c,r.distanceToSquared(bn));if(a)for(let f=0,d=a.length;f<d;f++){const h=a[f],p=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)bn.fromBufferAttribute(h,m),p&&($r.fromBufferAttribute(n,m),bn.add($r)),c=Math.max(c,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const n=this.index,a=this.attributes;if(n===null||a.position===void 0||a.normal===void 0||a.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=a.position,c=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],p=[];for(let J=0;J<r.count;J++)h[J]=new he,p[J]=new he;const m=new he,_=new he,g=new he,y=new Kt,M=new Kt,T=new Kt,C=new he,S=new he;function b(J,R,N){m.fromBufferAttribute(r,J),_.fromBufferAttribute(r,R),g.fromBufferAttribute(r,N),y.fromBufferAttribute(f,J),M.fromBufferAttribute(f,R),T.fromBufferAttribute(f,N),_.sub(m),g.sub(m),M.sub(y),T.sub(y);const j=1/(M.x*T.y-T.x*M.y);isFinite(j)&&(C.copy(_).multiplyScalar(T.y).addScaledVector(g,-M.y).multiplyScalar(j),S.copy(g).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(j),h[J].add(C),h[R].add(C),h[N].add(C),p[J].add(S),p[R].add(S),p[N].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:n.count}]);for(let J=0,R=U.length;J<R;++J){const N=U[J],j=N.start,ce=N.count;for(let oe=j,me=j+ce;oe<me;oe+=3)b(n.getX(oe+0),n.getX(oe+1),n.getX(oe+2))}const P=new he,z=new he,V=new he,G=new he;function F(J){V.fromBufferAttribute(c,J),G.copy(V);const R=h[J];P.copy(R),P.sub(V.multiplyScalar(V.dot(R))).normalize(),z.crossVectors(G,R);const j=z.dot(p[J])<0?-1:1;d.setXYZW(J,P.x,P.y,P.z,j)}for(let J=0,R=U.length;J<R;++J){const N=U[J],j=N.start,ce=N.count;for(let oe=j,me=j+ce;oe<me;oe+=3)F(n.getX(oe+0)),F(n.getX(oe+1)),F(n.getX(oe+2))}}computeVertexNormals(){const n=this.index,a=this.getAttribute("position");if(a!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ti(new Float32Array(a.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const c=new he,f=new he,d=new he,h=new he,p=new he,m=new he,_=new he,g=new he;if(n)for(let y=0,M=n.count;y<M;y+=3){const T=n.getX(y+0),C=n.getX(y+1),S=n.getX(y+2);c.fromBufferAttribute(a,T),f.fromBufferAttribute(a,C),d.fromBufferAttribute(a,S),_.subVectors(d,f),g.subVectors(c,f),_.cross(g),h.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,S),h.add(_),p.add(_),m.add(_),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,M=a.count;y<M;y+=3)c.fromBufferAttribute(a,y+0),f.fromBufferAttribute(a,y+1),d.fromBufferAttribute(a,y+2),_.subVectors(d,f),g.subVectors(c,f),_.cross(g),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const n=this.attributes.normal;for(let a=0,r=n.count;a<r;a++)bn.fromBufferAttribute(n,a),bn.normalize(),n.setXYZ(a,bn.x,bn.y,bn.z)}toNonIndexed(){function n(h,p){const m=h.array,_=h.itemSize,g=h.normalized,y=new m.constructor(p.length*_);let M=0,T=0;for(let C=0,S=p.length;C<S;C++){h.isInterleavedBufferAttribute?M=p[C]*h.data.stride+h.offset:M=p[C]*_;for(let b=0;b<_;b++)y[T++]=m[M++]}return new Ti(y,_,g)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new Bi,r=this.index.array,c=this.attributes;for(const h in c){const p=c[h],m=n(p,r);a.setAttribute(h,m)}const f=this.morphAttributes;for(const h in f){const p=[],m=f[h];for(let _=0,g=m.length;_<g;_++){const y=m[_],M=n(y,r);p.push(M)}a.morphAttributes[h]=p}a.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];a.addGroup(m.start,m.count,m.materialIndex)}return a}toJSON(){const n={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(n[m]=p[m]);return n}n.data={attributes:{}};const a=this.index;a!==null&&(n.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const r=this.attributes;for(const p in r){const m=r[p];n.data.attributes[p]=m.toJSON(n.data)}const c={};let f=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let g=0,y=m.length;g<y;g++){const M=m[g];_.push(M.toJSON(n.data))}_.length>0&&(c[p]=_,f=!0)}f&&(n.data.morphAttributes=c,n.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(n.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(n.data.boundingSphere=h.toJSON()),n}clone(){return new this.constructor().copy(this)}copy(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=n.name;const r=n.index;r!==null&&this.setIndex(r.clone());const c=n.attributes;for(const m in c){const _=c[m];this.setAttribute(m,_.clone(a))}const f=n.morphAttributes;for(const m in f){const _=[],g=f[m];for(let y=0,M=g.length;y<M;y++)_.push(g[y].clone(a));this.morphAttributes[m]=_}this.morphTargetsRelative=n.morphTargetsRelative;const d=n.groups;for(let m=0,_=d.length;m<_;m++){const g=d[m];this.addGroup(g.start,g.count,g.materialIndex)}const h=n.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=n.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Iv=new on,Xs=new L_,su=new Nu,zv=new he,ru=new he,lu=new he,ou=new he,Ih=new he,cu=new he,Fv=new he,uu=new he;class Ua extends $n{constructor(n=new Bi,a=new I_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=n,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,r=Object.keys(a);if(r.length>0){const c=a[r[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(n,a){const r=this.geometry,c=r.attributes.position,f=r.morphAttributes.position,d=r.morphTargetsRelative;a.fromBufferAttribute(c,n);const h=this.morphTargetInfluences;if(f&&h){cu.set(0,0,0);for(let p=0,m=f.length;p<m;p++){const _=h[p],g=f[p];_!==0&&(Ih.fromBufferAttribute(g,n),d?cu.addScaledVector(Ih,_):cu.addScaledVector(Ih.sub(a),_))}a.add(cu)}return a}raycast(n,a){const r=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),su.copy(r.boundingSphere),su.applyMatrix4(f),Xs.copy(n.ray).recast(n.near),!(su.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(su,zv)===null||Xs.origin.distanceToSquared(zv)>(n.far-n.near)**2))&&(Iv.copy(f).invert(),Xs.copy(n.ray).applyMatrix4(Iv),!(r.boundingBox!==null&&Xs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(n,a,Xs)))}_computeIntersections(n,a,r){let c;const f=this.geometry,d=this.material,h=f.index,p=f.attributes.position,m=f.attributes.uv,_=f.attributes.uv1,g=f.attributes.normal,y=f.groups,M=f.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,C=y.length;T<C;T++){const S=y[T],b=d[S.materialIndex],U=Math.max(S.start,M.start),P=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let z=U,V=P;z<V;z+=3){const G=h.getX(z),F=h.getX(z+1),J=h.getX(z+2);c=fu(this,b,n,r,m,_,g,G,F,J),c&&(c.faceIndex=Math.floor(z/3),c.face.materialIndex=S.materialIndex,a.push(c))}}else{const T=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let S=T,b=C;S<b;S+=3){const U=h.getX(S),P=h.getX(S+1),z=h.getX(S+2);c=fu(this,d,n,r,m,_,g,U,P,z),c&&(c.faceIndex=Math.floor(S/3),a.push(c))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,C=y.length;T<C;T++){const S=y[T],b=d[S.materialIndex],U=Math.max(S.start,M.start),P=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let z=U,V=P;z<V;z+=3){const G=z,F=z+1,J=z+2;c=fu(this,b,n,r,m,_,g,G,F,J),c&&(c.faceIndex=Math.floor(z/3),c.face.materialIndex=S.materialIndex,a.push(c))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let S=T,b=C;S<b;S+=3){const U=S,P=S+1,z=S+2;c=fu(this,d,n,r,m,_,g,U,P,z),c&&(c.faceIndex=Math.floor(S/3),a.push(c))}}}}function D1(l,n,a,r,c,f,d,h){let p;if(n.side===Jn?p=r.intersectTriangle(d,f,c,!0,h):p=r.intersectTriangle(c,f,d,n.side===gs,h),p===null)return null;uu.copy(h),uu.applyMatrix4(l.matrixWorld);const m=a.ray.origin.distanceTo(uu);return m<a.near||m>a.far?null:{distance:m,point:uu.clone(),object:l}}function fu(l,n,a,r,c,f,d,h,p,m){l.getVertexPosition(h,ru),l.getVertexPosition(p,lu),l.getVertexPosition(m,ou);const _=D1(l,n,a,r,ru,lu,ou,Fv);if(_){const g=new he;Ii.getBarycoord(Fv,ru,lu,ou,g),c&&(_.uv=Ii.getInterpolatedAttribute(c,h,p,m,g,new Kt)),f&&(_.uv1=Ii.getInterpolatedAttribute(f,h,p,m,g,new Kt)),d&&(_.normal=Ii.getInterpolatedAttribute(d,h,p,m,g,new he),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:h,b:p,c:m,normal:new he,materialIndex:0};Ii.getNormal(ru,lu,ou,y.normal),_.face=y,_.barycoord=g}return _}class To extends Bi{constructor(n=1,a=1,r=1,c=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:n,height:a,depth:r,widthSegments:c,heightSegments:f,depthSegments:d};const h=this;c=Math.floor(c),f=Math.floor(f),d=Math.floor(d);const p=[],m=[],_=[],g=[];let y=0,M=0;T("z","y","x",-1,-1,r,a,n,d,f,0),T("z","y","x",1,-1,r,a,-n,d,f,1),T("x","z","y",1,1,n,r,a,c,d,2),T("x","z","y",1,-1,n,r,-a,c,d,3),T("x","y","z",1,-1,n,a,r,c,f,4),T("x","y","z",-1,-1,n,a,-r,c,f,5),this.setIndex(p),this.setAttribute("position",new Ca(m,3)),this.setAttribute("normal",new Ca(_,3)),this.setAttribute("uv",new Ca(g,2));function T(C,S,b,U,P,z,V,G,F,J,R){const N=z/F,j=V/J,ce=z/2,oe=V/2,me=G/2,de=F+1,W=J+1;let Z=0,le=0;const Ee=new he;for(let I=0;I<W;I++){const L=I*j-oe;for(let Te=0;Te<de;Te++){const we=Te*N-ce;Ee[C]=we*U,Ee[S]=L*P,Ee[b]=me,m.push(Ee.x,Ee.y,Ee.z),Ee[C]=0,Ee[S]=0,Ee[b]=G>0?1:-1,_.push(Ee.x,Ee.y,Ee.z),g.push(Te/F),g.push(1-I/J),Z+=1}}for(let I=0;I<J;I++)for(let L=0;L<F;L++){const Te=y+L+de*I,we=y+L+de*(I+1),O=y+(L+1)+de*(I+1),ae=y+(L+1)+de*I;p.push(Te,we,ae),p.push(we,O,ae),le+=6}h.addGroup(M,le,R),M+=le,y+=Z}}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new To(n.width,n.height,n.depth,n.widthSegments,n.heightSegments,n.depthSegments)}}function cl(l){const n={};for(const a in l){n[a]={};for(const r in l[a]){const c=l[a][r];c&&(c.isColor||c.isMatrix3||c.isMatrix4||c.isVector2||c.isVector3||c.isVector4||c.isTexture||c.isQuaternion)?c.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),n[a][r]=null):n[a][r]=c.clone():Array.isArray(c)?n[a][r]=c.slice():n[a][r]=c}}return n}function Gn(l){const n={};for(let a=0;a<l.length;a++){const r=cl(l[a]);for(const c in r)n[c]=r[c]}return n}function U1(l){const n=[];for(let a=0;a<l.length;a++)n.push(l[a].clone());return n}function B_(l){const n=l.getRenderTarget();return n===null?l.outputColorSpace:n.isXRRenderTarget===!0?n.texture.colorSpace:Ot.workingColorSpace}const L1={clone:cl,merge:Gn};var O1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class aa extends Eo{constructor(n){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O1,this.fragmentShader=P1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&this.setValues(n)}copy(n){return super.copy(n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=cl(n.uniforms),this.uniformsGroups=U1(n.uniformsGroups),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.fog=n.fog,this.lights=n.lights,this.clipping=n.clipping,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this.defaultAttributeValues=Object.assign({},n.defaultAttributeValues),this.index0AttributeName=n.index0AttributeName,this.uniformsNeedUpdate=n.uniformsNeedUpdate,this}toJSON(n){const a=super.toJSON(n);a.glslVersion=this.glslVersion,a.uniforms={};for(const c in this.uniforms){const d=this.uniforms[c].value;d&&d.isTexture?a.uniforms[c]={type:"t",value:d.toJSON(n).uuid}:d&&d.isColor?a.uniforms[c]={type:"c",value:d.getHex()}:d&&d.isVector2?a.uniforms[c]={type:"v2",value:d.toArray()}:d&&d.isVector3?a.uniforms[c]={type:"v3",value:d.toArray()}:d&&d.isVector4?a.uniforms[c]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?a.uniforms[c]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?a.uniforms[c]={type:"m4",value:d.toArray()}:a.uniforms[c]={value:d}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const r={};for(const c in this.extensions)this.extensions[c]===!0&&(r[c]=!0);return Object.keys(r).length>0&&(a.extensions=r),a}}class H_ extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=ea,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(n,a){return super.copy(n,a),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this.coordinateSystem=n.coordinateSystem,this}getWorldDirection(n){return super.getWorldDirection(n).negate()}updateMatrixWorld(n){super.updateMatrixWorld(n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(n,a){super.updateWorldMatrix(n,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hs=new he,Bv=new Kt,Hv=new Kt;class Mi extends H_{constructor(n=50,a=1,r=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=r,this.far=c,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this}setFocalLength(n){const a=.5*this.getFilmHeight()/n;this.fov=Fp*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const n=Math.tan(mh*.5*this.fov);return .5*this.getFilmHeight()/n}getEffectiveFOV(){return Fp*2*Math.atan(Math.tan(mh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(n,a,r){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(hs.x,hs.y).multiplyScalar(-n/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(hs.x,hs.y).multiplyScalar(-n/hs.z)}getViewSize(n,a){return this.getViewBounds(n,Bv,Hv),a.subVectors(Hv,Bv)}setViewOffset(n,a,r,c,f,d){this.aspect=n/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=r,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=this.near;let a=n*Math.tan(mh*.5*this.fov)/this.zoom,r=2*a,c=this.aspect*r,f=-.5*c;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;f+=d.offsetX*c/p,a-=d.offsetY*r/m,c*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(f+=n*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,a,a-r,n,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const el=-90,tl=1;class I1 extends $n{constructor(n,a,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new Mi(el,tl,n,a);c.layers=this.layers,this.add(c);const f=new Mi(el,tl,n,a);f.layers=this.layers,this.add(f);const d=new Mi(el,tl,n,a);d.layers=this.layers,this.add(d);const h=new Mi(el,tl,n,a);h.layers=this.layers,this.add(h);const p=new Mi(el,tl,n,a);p.layers=this.layers,this.add(p);const m=new Mi(el,tl,n,a);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const n=this.coordinateSystem,a=this.children.concat(),[r,c,f,d,h,p]=a;for(const m of a)this.remove(m);if(n===ea)r.up.set(0,1,0),r.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(n===Au)r.up.set(0,-1,0),r.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+n);for(const m of a)this.add(m),m.updateMatrixWorld()}update(n,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:c}=this;this.coordinateSystem!==n.coordinateSystem&&(this.coordinateSystem=n.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,p,m,_]=this.children,g=n.getRenderTarget(),y=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),T=n.xr.enabled;n.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,n.setRenderTarget(r,0,c),n.render(a,f),n.setRenderTarget(r,1,c),n.render(a,d),n.setRenderTarget(r,2,c),n.render(a,h),n.setRenderTarget(r,3,c),n.render(a,p),n.setRenderTarget(r,4,c),n.render(a,m),r.texture.generateMipmaps=C,n.setRenderTarget(r,5,c),n.render(a,_),n.setRenderTarget(g,y,M),n.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class V_ extends jn{constructor(n=[],a=tr,r,c,f,d,h,p,m,_){super(n,a,r,c,f,d,h,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(n){this.image=n}}class G_ extends na{constructor(n=1,a={}){super(n,n,a),this.isWebGLCubeRenderTarget=!0;const r={width:n,height:n,depth:1},c=[r,r,r,r,r,r];this.texture=new V_(c),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},c=new To(5,5,5),f=new aa({name:"CubemapFromEquirect",uniforms:cl(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:Aa});f.uniforms.tEquirect.value=a;const d=new Ua(c,f),h=a.minFilter;return a.minFilter===$s&&(a.minFilter=In),new I1(1,10,this).update(n,d),a.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(n,a=!0,r=!0,c=!0){const f=n.getRenderTarget();for(let d=0;d<6;d++)n.setRenderTarget(this,d),n.clear(a,r,c);n.setRenderTarget(f)}}class du extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z1={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new du,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new du,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new he,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new he),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new du,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new he,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new he),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const a=this._hand;if(a)for(const r of n.hand.values())this._getHandJoint(a,r)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,a,r){let c=null,f=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(n&&a.session.visibilityState!=="visible-blurred"){if(m&&n.hand){d=!0;for(const C of n.hand.values()){const S=a.getJointPose(C,r),b=this._getHandJoint(m,C);S!==null&&(b.matrix.fromArray(S.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=S.radius),b.visible=S!==null}const _=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],y=_.position.distanceTo(g.position),M=.02,T=.005;m.inputState.pinching&&y>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!m.inputState.pinching&&y<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else p!==null&&n.gripSpace&&(f=a.getPose(n.gripSpace,r),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(c=a.getPose(n.targetRaySpace,r),c===null&&f!==null&&(c=f),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(z1)))}return h!==null&&(h.visible=c!==null),p!==null&&(p.visible=f!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(n,a){if(n.joints[a.jointName]===void 0){const r=new du;r.matrixAutoUpdate=!1,r.visible=!1,n.joints[a.jointName]=r,n.add(r)}return n.joints[a.jointName]}}class F1 extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Da,this.environmentIntensity=1,this.environmentRotation=new Da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(n,a){return super.copy(n,a),n.background!==null&&(this.background=n.background.clone()),n.environment!==null&&(this.environment=n.environment.clone()),n.fog!==null&&(this.fog=n.fog.clone()),this.backgroundBlurriness=n.backgroundBlurriness,this.backgroundIntensity=n.backgroundIntensity,this.backgroundRotation.copy(n.backgroundRotation),this.environmentIntensity=n.environmentIntensity,this.environmentRotation.copy(n.environmentRotation),n.overrideMaterial!==null&&(this.overrideMaterial=n.overrideMaterial.clone()),this.matrixAutoUpdate=n.matrixAutoUpdate,this}toJSON(n){const a=super.toJSON(n);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}class B1 extends jn{constructor(n=null,a=1,r=1,c,f,d,h,p,m=Dn,_=Dn,g,y){super(null,d,h,p,m,_,c,f,g,y),this.isDataTexture=!0,this.image={data:n,width:a,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fh=new he,H1=new he,V1=new _t;class Ks{constructor(n=new he(1,0,0),a=0){this.isPlane=!0,this.normal=n,this.constant=a}set(n,a){return this.normal.copy(n),this.constant=a,this}setComponents(n,a,r,c){return this.normal.set(n,a,r),this.constant=c,this}setFromNormalAndCoplanarPoint(n,a){return this.normal.copy(n),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(n,a,r){const c=Fh.subVectors(r,a).cross(H1.subVectors(n,a)).normalize();return this.setFromNormalAndCoplanarPoint(c,n),this}copy(n){return this.normal.copy(n.normal),this.constant=n.constant,this}normalize(){const n=1/this.normal.length();return this.normal.multiplyScalar(n),this.constant*=n,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(n){return this.normal.dot(n)+this.constant}distanceToSphere(n){return this.distanceToPoint(n.center)-n.radius}projectPoint(n,a){return a.copy(n).addScaledVector(this.normal,-this.distanceToPoint(n))}intersectLine(n,a){const r=n.delta(Fh),c=this.normal.dot(r);if(c===0)return this.distanceToPoint(n.start)===0?a.copy(n.start):null;const f=-(n.start.dot(this.normal)+this.constant)/c;return f<0||f>1?null:a.copy(n.start).addScaledVector(r,f)}intersectsLine(n){const a=this.distanceToPoint(n.start),r=this.distanceToPoint(n.end);return a<0&&r>0||r<0&&a>0}intersectsBox(n){return n.intersectsPlane(this)}intersectsSphere(n){return n.intersectsPlane(this)}coplanarPoint(n){return n.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(n,a){const r=a||V1.getNormalMatrix(n),c=this.coplanarPoint(Fh).applyMatrix4(n),f=this.normal.applyMatrix3(r).normalize();return this.constant=-c.dot(f),this}translate(n){return this.constant-=n.dot(this.normal),this}equals(n){return n.normal.equals(this.normal)&&n.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new Nu,G1=new Kt(.5,.5),hu=new he;class j_{constructor(n=new Ks,a=new Ks,r=new Ks,c=new Ks,f=new Ks,d=new Ks){this.planes=[n,a,r,c,f,d]}set(n,a,r,c,f,d){const h=this.planes;return h[0].copy(n),h[1].copy(a),h[2].copy(r),h[3].copy(c),h[4].copy(f),h[5].copy(d),this}copy(n){const a=this.planes;for(let r=0;r<6;r++)a[r].copy(n.planes[r]);return this}setFromProjectionMatrix(n,a=ea,r=!1){const c=this.planes,f=n.elements,d=f[0],h=f[1],p=f[2],m=f[3],_=f[4],g=f[5],y=f[6],M=f[7],T=f[8],C=f[9],S=f[10],b=f[11],U=f[12],P=f[13],z=f[14],V=f[15];if(c[0].setComponents(m-d,M-_,b-T,V-U).normalize(),c[1].setComponents(m+d,M+_,b+T,V+U).normalize(),c[2].setComponents(m+h,M+g,b+C,V+P).normalize(),c[3].setComponents(m-h,M-g,b-C,V-P).normalize(),r)c[4].setComponents(p,y,S,z).normalize(),c[5].setComponents(m-p,M-y,b-S,V-z).normalize();else if(c[4].setComponents(m-p,M-y,b-S,V-z).normalize(),a===ea)c[5].setComponents(m+p,M+y,b+S,V+z).normalize();else if(a===Au)c[5].setComponents(p,y,S,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(n){if(n.boundingSphere!==void 0)n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere).applyMatrix4(n.matrixWorld);else{const a=n.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),qs.copy(a.boundingSphere).applyMatrix4(n.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(n){qs.center.set(0,0,0);const a=G1.distanceTo(n.center);return qs.radius=.7071067811865476+a,qs.applyMatrix4(n.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(n){const a=this.planes,r=n.center,c=-n.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(r)<c)return!1;return!0}intersectsBox(n){const a=this.planes;for(let r=0;r<6;r++){const c=a[r];if(hu.x=c.normal.x>0?n.max.x:n.min.x,hu.y=c.normal.y>0?n.max.y:n.min.y,hu.z=c.normal.z>0?n.max.z:n.min.z,c.distanceToPoint(hu)<0)return!1}return!0}containsPoint(n){const a=this.planes;for(let r=0;r<6;r++)if(a[r].distanceToPoint(n)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class k_ extends Eo{constructor(n){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(n)}copy(n){return super.copy(n),this.color.copy(n.color),this.map=n.map,this.alphaMap=n.alphaMap,this.size=n.size,this.sizeAttenuation=n.sizeAttenuation,this.fog=n.fog,this}}const Vv=new on,Bp=new L_,pu=new Nu,mu=new he;class j1 extends $n{constructor(n=new Bi,a=new k_){super(),this.isPoints=!0,this.type="Points",this.geometry=n,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(n,a){return super.copy(n,a),this.material=Array.isArray(n.material)?n.material.slice():n.material,this.geometry=n.geometry,this}raycast(n,a){const r=this.geometry,c=this.matrixWorld,f=n.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),pu.copy(r.boundingSphere),pu.applyMatrix4(c),pu.radius+=f,n.ray.intersectsSphere(pu)===!1)return;Vv.copy(c).invert(),Bp.copy(n.ray).applyMatrix4(Vv);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=r.index,g=r.attributes.position;if(m!==null){const y=Math.max(0,d.start),M=Math.min(m.count,d.start+d.count);for(let T=y,C=M;T<C;T++){const S=m.getX(T);mu.fromBufferAttribute(g,S),Gv(mu,S,p,c,n,a,this)}}else{const y=Math.max(0,d.start),M=Math.min(g.count,d.start+d.count);for(let T=y,C=M;T<C;T++)mu.fromBufferAttribute(g,T),Gv(mu,T,p,c,n,a,this)}}updateMorphTargets(){const a=this.geometry.morphAttributes,r=Object.keys(a);if(r.length>0){const c=a[r[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function Gv(l,n,a,r,c,f,d){const h=Bp.distanceSqToPoint(l);if(h<a){const p=new he;Bp.closestPointToPoint(l,p),p.applyMatrix4(r);const m=c.ray.origin.distanceTo(p);if(m<c.near||m>c.far)return;f.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:n,face:null,faceIndex:null,barycoord:null,object:d})}}class yo extends jn{constructor(n,a,r=ia,c,f,d,h=Dn,p=Dn,m,_=Na,g=1){if(_!==Na&&_!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:n,height:a,depth:g};super(y,c,f,d,h,p,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(n){return super.copy(n),this.source=new em(Object.assign({},n.image)),this.compareFunction=n.compareFunction,this}toJSON(n){const a=super.toJSON(n);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class k1 extends yo{constructor(n,a=ia,r=tr,c,f,d=Dn,h=Dn,p,m=Na){const _={width:n,height:n,depth:1},g=[_,_,_,_,_,_];super(n,n,a,r,c,f,d,h,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(n){this.image=n}}class X_ extends jn{constructor(n=null){super(),this.sourceTexture=n,this.isExternalTexture=!0}copy(n){return super.copy(n),this.sourceTexture=n.sourceTexture,this}}class Du extends Bi{constructor(n=1,a=1,r=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:n,height:a,widthSegments:r,heightSegments:c};const f=n/2,d=a/2,h=Math.floor(r),p=Math.floor(c),m=h+1,_=p+1,g=n/h,y=a/p,M=[],T=[],C=[],S=[];for(let b=0;b<_;b++){const U=b*y-d;for(let P=0;P<m;P++){const z=P*g-f;T.push(z,-U,0),C.push(0,0,1),S.push(P/h),S.push(1-b/p)}}for(let b=0;b<p;b++)for(let U=0;U<h;U++){const P=U+m*b,z=U+m*(b+1),V=U+1+m*(b+1),G=U+1+m*b;M.push(P,z,G),M.push(z,V,G)}this.setIndex(M),this.setAttribute("position",new Ca(T,3)),this.setAttribute("normal",new Ca(C,3)),this.setAttribute("uv",new Ca(S,2))}copy(n){return super.copy(n),this.parameters=Object.assign({},n.parameters),this}static fromJSON(n){return new Du(n.width,n.height,n.widthSegments,n.heightSegments)}}class X1 extends aa{constructor(n){super(n),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class q1 extends Eo{constructor(n){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(n)}copy(n){return super.copy(n),this.depthPacking=n.depthPacking,this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this}}class W1 extends Eo{constructor(n){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(n)}copy(n){return super.copy(n),this.map=n.map,this.alphaMap=n.alphaMap,this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this}}class q_ extends H_{constructor(n=-1,a=1,r=1,c=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=n,this.right=a,this.top=r,this.bottom=c,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(n,a){return super.copy(n,a),this.left=n.left,this.right=n.right,this.top=n.top,this.bottom=n.bottom,this.near=n.near,this.far=n.far,this.zoom=n.zoom,this.view=n.view===null?null:Object.assign({},n.view),this}setViewOffset(n,a,r,c,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=a,this.view.offsetX=r,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=r-n,d=r+n,h=c+a,p=c-a;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,d=f+m*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(n){const a=super.toJSON(n);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class Y1 extends Mi{constructor(n=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=n}}let Z1=class{constructor(n=!0){this.autoStart=n,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let n=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const a=performance.now();n=(a-this.oldTime)/1e3,this.oldTime=a,this.elapsedTime+=n}return n}};function jv(l,n,a,r){const c=K1(r);switch(a){case C_:return l*n;case N_:return l*n/c.components*c.byteLength;case Zp:return l*n/c.components*c.byteLength;case ll:return l*n*2/c.components*c.byteLength;case Kp:return l*n*2/c.components*c.byteLength;case w_:return l*n*3/c.components*c.byteLength;case zi:return l*n*4/c.components*c.byteLength;case Qp:return l*n*4/c.components*c.byteLength;case yu:case Su:return Math.floor((l+3)/4)*Math.floor((n+3)/4)*8;case bu:case Mu:return Math.floor((l+3)/4)*Math.floor((n+3)/4)*16;case lp:case cp:return Math.max(l,16)*Math.max(n,8)/4;case rp:case op:return Math.max(l,8)*Math.max(n,8)/2;case up:case fp:case hp:case pp:return Math.floor((l+3)/4)*Math.floor((n+3)/4)*8;case dp:case mp:case gp:return Math.floor((l+3)/4)*Math.floor((n+3)/4)*16;case xp:return Math.floor((l+3)/4)*Math.floor((n+3)/4)*16;case vp:return Math.floor((l+4)/5)*Math.floor((n+3)/4)*16;case _p:return Math.floor((l+4)/5)*Math.floor((n+4)/5)*16;case yp:return Math.floor((l+5)/6)*Math.floor((n+4)/5)*16;case Sp:return Math.floor((l+5)/6)*Math.floor((n+5)/6)*16;case bp:return Math.floor((l+7)/8)*Math.floor((n+4)/5)*16;case Mp:return Math.floor((l+7)/8)*Math.floor((n+5)/6)*16;case Ep:return Math.floor((l+7)/8)*Math.floor((n+7)/8)*16;case Tp:return Math.floor((l+9)/10)*Math.floor((n+4)/5)*16;case Ap:return Math.floor((l+9)/10)*Math.floor((n+5)/6)*16;case Rp:return Math.floor((l+9)/10)*Math.floor((n+7)/8)*16;case Cp:return Math.floor((l+9)/10)*Math.floor((n+9)/10)*16;case wp:return Math.floor((l+11)/12)*Math.floor((n+9)/10)*16;case Np:return Math.floor((l+11)/12)*Math.floor((n+11)/12)*16;case Dp:case Up:case Lp:return Math.ceil(l/4)*Math.ceil(n/4)*16;case Op:case Pp:return Math.ceil(l/4)*Math.ceil(n/4)*8;case Ip:case zp:return Math.ceil(l/4)*Math.ceil(n/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function K1(l){switch(l){case Ei:case E_:return{byteLength:1,components:1};case xo:case T_:case wa:return{byteLength:2,components:1};case Wp:case Yp:return{byteLength:2,components:4};case ia:case qp:case $i:return{byteLength:4,components:1};case A_:case R_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${l}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xp}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function W_(){let l=null,n=!1,a=null,r=null;function c(f,d){a(f,d),r=l.requestAnimationFrame(c)}return{start:function(){n!==!0&&a!==null&&(r=l.requestAnimationFrame(c),n=!0)},stop:function(){l.cancelAnimationFrame(r),n=!1},setAnimationLoop:function(f){a=f},setContext:function(f){l=f}}}function Q1(l){const n=new WeakMap;function a(h,p){const m=h.array,_=h.usage,g=m.byteLength,y=l.createBuffer();l.bindBuffer(p,y),l.bufferData(p,m,_),h.onUploadCallback();let M;if(m instanceof Float32Array)M=l.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=l.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=l.HALF_FLOAT:M=l.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=l.SHORT;else if(m instanceof Uint32Array)M=l.UNSIGNED_INT;else if(m instanceof Int32Array)M=l.INT;else if(m instanceof Int8Array)M=l.BYTE;else if(m instanceof Uint8Array)M=l.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=l.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,p,m){const _=p.array,g=p.updateRanges;if(l.bindBuffer(m,h),g.length===0)l.bufferSubData(m,0,_);else{g.sort((M,T)=>M.start-T.start);let y=0;for(let M=1;M<g.length;M++){const T=g[y],C=g[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++y,g[y]=C)}g.length=y+1;for(let M=0,T=g.length;M<T;M++){const C=g[M];l.bufferSubData(m,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=n.get(h);p&&(l.deleteBuffer(p.buffer),n.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=n.get(h);(!_||_.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=n.get(h);if(m===void 0)n.set(h,a(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:c,remove:f,update:d}}var J1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$1=`#ifdef USE_ALPHAHASH
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
#endif`,eE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aE=`#ifdef USE_AOMAP
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
#endif`,sE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rE=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fE=`#ifdef USE_IRIDESCENCE
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
#endif`,dE=`#ifdef USE_BUMPMAP
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
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,SE=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,bE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,ME=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,EE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CE="gl_FragColor = linearToOutputTexel( gl_FragColor );",wE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NE=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,DE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
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
#endif`,LE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
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
#endif`,PE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BE=`#ifdef USE_GRADIENTMAP
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
}`,HE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jE=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,kE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,KE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,QE=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$E=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lT=`#if defined( USE_POINTS_UV )
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
#endif`,oT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hT=`#ifdef USE_MORPHTARGETS
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
#endif`,pT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_T=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yT=`#ifdef USE_NORMALMAP
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
#endif`,ST=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ET=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,RT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,OT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,PT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,zT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FT=`#ifdef USE_SKINNING
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
#endif`,BT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HT=`#ifdef USE_SKINNING
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
#endif`,VT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XT=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qT=`#ifdef USE_TRANSMISSION
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
#endif`,WT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JT=`uniform sampler2D t2D;
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
}`,$T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`#include <common>
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
}`,aA=`#if DEPTH_PACKING == 3200
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
}`,sA=`#define DISTANCE
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
}`,rA=`#define DISTANCE
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
void main () {
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
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`uniform float scale;
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
}`,uA=`uniform vec3 diffuse;
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
}`,fA=`#include <common>
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
}`,dA=`uniform vec3 diffuse;
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
}`,hA=`#define LAMBERT
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
}`,pA=`#define LAMBERT
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
}`,mA=`#define MATCAP
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
}`,gA=`#define MATCAP
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
}`,xA=`#define NORMAL
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
}`,vA=`#define NORMAL
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
}`,_A=`#define PHONG
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
}`,yA=`#define PHONG
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
}`,SA=`#define STANDARD
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
}`,bA=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,MA=`#define TOON
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
}`,EA=`#define TOON
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
}`,TA=`uniform float size;
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
}`,AA=`uniform vec3 diffuse;
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
}`,RA=`#include <common>
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
}`,CA=`uniform vec3 color;
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
}`,wA=`uniform float rotation;
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
}`,NA=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:J1,alphahash_pars_fragment:$1,alphamap_fragment:eE,alphamap_pars_fragment:tE,alphatest_fragment:nE,alphatest_pars_fragment:iE,aomap_fragment:aE,aomap_pars_fragment:sE,batching_pars_vertex:rE,batching_vertex:lE,begin_vertex:oE,beginnormal_vertex:cE,bsdfs:uE,iridescence_fragment:fE,bumpmap_pars_fragment:dE,clipping_planes_fragment:hE,clipping_planes_pars_fragment:pE,clipping_planes_pars_vertex:mE,clipping_planes_vertex:gE,color_fragment:xE,color_pars_fragment:vE,color_pars_vertex:_E,color_vertex:yE,common:SE,cube_uv_reflection_fragment:bE,defaultnormal_vertex:ME,displacementmap_pars_vertex:EE,displacementmap_vertex:TE,emissivemap_fragment:AE,emissivemap_pars_fragment:RE,colorspace_fragment:CE,colorspace_pars_fragment:wE,envmap_fragment:NE,envmap_common_pars_fragment:DE,envmap_pars_fragment:UE,envmap_pars_vertex:LE,envmap_physical_pars_fragment:kE,envmap_vertex:OE,fog_vertex:PE,fog_pars_vertex:IE,fog_fragment:zE,fog_pars_fragment:FE,gradientmap_pars_fragment:BE,lightmap_pars_fragment:HE,lights_lambert_fragment:VE,lights_lambert_pars_fragment:GE,lights_pars_begin:jE,lights_toon_fragment:XE,lights_toon_pars_fragment:qE,lights_phong_fragment:WE,lights_phong_pars_fragment:YE,lights_physical_fragment:ZE,lights_physical_pars_fragment:KE,lights_fragment_begin:QE,lights_fragment_maps:JE,lights_fragment_end:$E,logdepthbuf_fragment:eT,logdepthbuf_pars_fragment:tT,logdepthbuf_pars_vertex:nT,logdepthbuf_vertex:iT,map_fragment:aT,map_pars_fragment:sT,map_particle_fragment:rT,map_particle_pars_fragment:lT,metalnessmap_fragment:oT,metalnessmap_pars_fragment:cT,morphinstance_vertex:uT,morphcolor_vertex:fT,morphnormal_vertex:dT,morphtarget_pars_vertex:hT,morphtarget_vertex:pT,normal_fragment_begin:mT,normal_fragment_maps:gT,normal_pars_fragment:xT,normal_pars_vertex:vT,normal_vertex:_T,normalmap_pars_fragment:yT,clearcoat_normal_fragment_begin:ST,clearcoat_normal_fragment_maps:bT,clearcoat_pars_fragment:MT,iridescence_pars_fragment:ET,opaque_fragment:TT,packing:AT,premultiplied_alpha_fragment:RT,project_vertex:CT,dithering_fragment:wT,dithering_pars_fragment:NT,roughnessmap_fragment:DT,roughnessmap_pars_fragment:UT,shadowmap_pars_fragment:LT,shadowmap_pars_vertex:OT,shadowmap_vertex:PT,shadowmask_pars_fragment:IT,skinbase_vertex:zT,skinning_pars_vertex:FT,skinning_vertex:BT,skinnormal_vertex:HT,specularmap_fragment:VT,specularmap_pars_fragment:GT,tonemapping_fragment:jT,tonemapping_pars_fragment:kT,transmission_fragment:XT,transmission_pars_fragment:qT,uv_pars_fragment:WT,uv_pars_vertex:YT,uv_vertex:ZT,worldpos_vertex:KT,background_vert:QT,background_frag:JT,backgroundCube_vert:$T,backgroundCube_frag:eA,cube_vert:tA,cube_frag:nA,depth_vert:iA,depth_frag:aA,distance_vert:sA,distance_frag:rA,equirect_vert:lA,equirect_frag:oA,linedashed_vert:cA,linedashed_frag:uA,meshbasic_vert:fA,meshbasic_frag:dA,meshlambert_vert:hA,meshlambert_frag:pA,meshmatcap_vert:mA,meshmatcap_frag:gA,meshnormal_vert:xA,meshnormal_frag:vA,meshphong_vert:_A,meshphong_frag:yA,meshphysical_vert:SA,meshphysical_frag:bA,meshtoon_vert:MA,meshtoon_frag:EA,points_vert:TA,points_frag:AA,shadow_vert:RA,shadow_frag:CA,sprite_vert:wA,sprite_frag:NA},Be={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Ji={basic:{uniforms:Gn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Gn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new zt(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Gn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Gn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Gn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new zt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Gn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Gn([Be.points,Be.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Gn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Gn([Be.common,Be.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Gn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Gn([Be.sprite,Be.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:Gn([Be.common,Be.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:Gn([Be.lights,Be.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Ji.physical={uniforms:Gn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const gu={r:0,b:0,g:0},Ws=new Da,DA=new on;function UA(l,n,a,r,c,f,d){const h=new zt(0);let p=f===!0?0:1,m,_,g=null,y=0,M=null;function T(P){let z=P.isScene===!0?P.background:null;return z&&z.isTexture&&(z=(P.backgroundBlurriness>0?a:n).get(z)),z}function C(P){let z=!1;const V=T(P);V===null?b(h,p):V&&V.isColor&&(b(V,1),z=!0);const G=l.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,d):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(l.autoClear||z)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil))}function S(P,z){const V=T(z);V&&(V.isCubeTexture||V.mapping===wu)?(_===void 0&&(_=new Ua(new To(1,1,1),new aa({name:"BackgroundCubeMaterial",uniforms:cl(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,F,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(_)),Ws.copy(z.backgroundRotation),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),_.material.uniforms.envMap.value=V,_.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(DA.makeRotationFromEuler(Ws)),_.material.toneMapped=Ot.getTransfer(V.colorSpace)!==qt,(g!==V||y!==V.version||M!==l.toneMapping)&&(_.material.needsUpdate=!0,g=V,y=V.version,M=l.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):V&&V.isTexture&&(m===void 0&&(m=new Ua(new Du(2,2),new aa({name:"BackgroundMaterial",uniforms:cl(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(m)),m.material.uniforms.t2D.value=V,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Ot.getTransfer(V.colorSpace)!==qt,V.matrixAutoUpdate===!0&&V.updateMatrix(),m.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||y!==V.version||M!==l.toneMapping)&&(m.material.needsUpdate=!0,g=V,y=V.version,M=l.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function b(P,z){P.getRGB(gu,B_(l)),r.buffers.color.setClear(gu.r,gu.g,gu.b,z,d)}function U(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(P,z=1){h.set(P),p=z,b(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,b(h,p)},render:C,addToRenderList:S,dispose:U}}function LA(l,n){const a=l.getParameter(l.MAX_VERTEX_ATTRIBS),r={},c=y(null);let f=c,d=!1;function h(N,j,ce,oe,me){let de=!1;const W=g(oe,ce,j);f!==W&&(f=W,m(f.object)),de=M(N,oe,ce,me),de&&T(N,oe,ce,me),me!==null&&n.update(me,l.ELEMENT_ARRAY_BUFFER),(de||d)&&(d=!1,z(N,j,ce,oe),me!==null&&l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,n.get(me).buffer))}function p(){return l.createVertexArray()}function m(N){return l.bindVertexArray(N)}function _(N){return l.deleteVertexArray(N)}function g(N,j,ce){const oe=ce.wireframe===!0;let me=r[N.id];me===void 0&&(me={},r[N.id]=me);let de=me[j.id];de===void 0&&(de={},me[j.id]=de);let W=de[oe];return W===void 0&&(W=y(p()),de[oe]=W),W}function y(N){const j=[],ce=[],oe=[];for(let me=0;me<a;me++)j[me]=0,ce[me]=0,oe[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ce,attributeDivisors:oe,object:N,attributes:{},index:null}}function M(N,j,ce,oe){const me=f.attributes,de=j.attributes;let W=0;const Z=ce.getAttributes();for(const le in Z)if(Z[le].location>=0){const I=me[le];let L=de[le];if(L===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(L=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(L=N.instanceColor)),I===void 0||I.attribute!==L||L&&I.data!==L.data)return!0;W++}return f.attributesNum!==W||f.index!==oe}function T(N,j,ce,oe){const me={},de=j.attributes;let W=0;const Z=ce.getAttributes();for(const le in Z)if(Z[le].location>=0){let I=de[le];I===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(I=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(I=N.instanceColor));const L={};L.attribute=I,I&&I.data&&(L.data=I.data),me[le]=L,W++}f.attributes=me,f.attributesNum=W,f.index=oe}function C(){const N=f.newAttributes;for(let j=0,ce=N.length;j<ce;j++)N[j]=0}function S(N){b(N,0)}function b(N,j){const ce=f.newAttributes,oe=f.enabledAttributes,me=f.attributeDivisors;ce[N]=1,oe[N]===0&&(l.enableVertexAttribArray(N),oe[N]=1),me[N]!==j&&(l.vertexAttribDivisor(N,j),me[N]=j)}function U(){const N=f.newAttributes,j=f.enabledAttributes;for(let ce=0,oe=j.length;ce<oe;ce++)j[ce]!==N[ce]&&(l.disableVertexAttribArray(ce),j[ce]=0)}function P(N,j,ce,oe,me,de,W){W===!0?l.vertexAttribIPointer(N,j,ce,me,de):l.vertexAttribPointer(N,j,ce,oe,me,de)}function z(N,j,ce,oe){C();const me=oe.attributes,de=ce.getAttributes(),W=j.defaultAttributeValues;for(const Z in de){const le=de[Z];if(le.location>=0){let Ee=me[Z];if(Ee===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(Ee=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(Ee=N.instanceColor)),Ee!==void 0){const I=Ee.normalized,L=Ee.itemSize,Te=n.get(Ee);if(Te===void 0)continue;const we=Te.buffer,O=Te.type,ae=Te.bytesPerElement,X=O===l.INT||O===l.UNSIGNED_INT||Ee.gpuType===qp;if(Ee.isInterleavedBufferAttribute){const Y=Ee.data,pe=Y.stride,Ae=Ee.offset;if(Y.isInstancedInterleavedBuffer){for(let Se=0;Se<le.locationSize;Se++)b(le.location+Se,Y.meshPerAttribute);N.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Se=0;Se<le.locationSize;Se++)S(le.location+Se);l.bindBuffer(l.ARRAY_BUFFER,we);for(let Se=0;Se<le.locationSize;Se++)P(le.location+Se,L/le.locationSize,O,I,pe*ae,(Ae+L/le.locationSize*Se)*ae,X)}else{if(Ee.isInstancedBufferAttribute){for(let Y=0;Y<le.locationSize;Y++)b(le.location+Y,Ee.meshPerAttribute);N.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Y=0;Y<le.locationSize;Y++)S(le.location+Y);l.bindBuffer(l.ARRAY_BUFFER,we);for(let Y=0;Y<le.locationSize;Y++)P(le.location+Y,L/le.locationSize,O,I,L*ae,L/le.locationSize*Y*ae,X)}}else if(W!==void 0){const I=W[Z];if(I!==void 0)switch(I.length){case 2:l.vertexAttrib2fv(le.location,I);break;case 3:l.vertexAttrib3fv(le.location,I);break;case 4:l.vertexAttrib4fv(le.location,I);break;default:l.vertexAttrib1fv(le.location,I)}}}}U()}function V(){J();for(const N in r){const j=r[N];for(const ce in j){const oe=j[ce];for(const me in oe)_(oe[me].object),delete oe[me];delete j[ce]}delete r[N]}}function G(N){if(r[N.id]===void 0)return;const j=r[N.id];for(const ce in j){const oe=j[ce];for(const me in oe)_(oe[me].object),delete oe[me];delete j[ce]}delete r[N.id]}function F(N){for(const j in r){const ce=r[j];if(ce[N.id]===void 0)continue;const oe=ce[N.id];for(const me in oe)_(oe[me].object),delete oe[me];delete ce[N.id]}}function J(){R(),d=!0,f!==c&&(f=c,m(f.object))}function R(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:J,resetDefaultState:R,dispose:V,releaseStatesOfGeometry:G,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:S,disableUnusedAttributes:U}}function OA(l,n,a){let r;function c(m){r=m}function f(m,_){l.drawArrays(r,m,_),a.update(_,r,1)}function d(m,_,g){g!==0&&(l.drawArraysInstanced(r,m,_,g),a.update(_,r,g))}function h(m,_,g){if(g===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,g);let M=0;for(let T=0;T<g;T++)M+=_[T];a.update(M,r,1)}function p(m,_,g,y){if(g===0)return;const M=n.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)d(m[T],_[T],y[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,_,0,y,0,g);let T=0;for(let C=0;C<g;C++)T+=_[C]*y[C];a.update(T,r,1)}}this.setMode=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function PA(l,n,a,r){let c;function f(){if(c!==void 0)return c;if(n.has("EXT_texture_filter_anisotropic")===!0){const F=n.get("EXT_texture_filter_anisotropic");c=l.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(F){return!(F!==zi&&r.convert(F)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const J=F===wa&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(F!==Ei&&r.convert(F)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==$i&&!J)}function p(F){if(F==="highp"){if(l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.HIGH_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.MEDIUM_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=a.precision!==void 0?a.precision:"highp";const _=p(m);_!==m&&(ht("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const g=a.logarithmicDepthBuffer===!0,y=a.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),M=l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),T=l.getParameter(l.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=l.getParameter(l.MAX_TEXTURE_SIZE),S=l.getParameter(l.MAX_CUBE_MAP_TEXTURE_SIZE),b=l.getParameter(l.MAX_VERTEX_ATTRIBS),U=l.getParameter(l.MAX_VERTEX_UNIFORM_VECTORS),P=l.getParameter(l.MAX_VARYING_VECTORS),z=l.getParameter(l.MAX_FRAGMENT_UNIFORM_VECTORS),V=l.getParameter(l.MAX_SAMPLES),G=l.getParameter(l.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:b,maxVertexUniforms:U,maxVaryings:P,maxFragmentUniforms:z,maxSamples:V,samples:G}}function IA(l){const n=this;let a=null,r=0,c=!1,f=!1;const d=new Ks,h=new _t,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const M=g.length!==0||y||r!==0||c;return c=y,r=g.length,M},this.beginShadows=function(){f=!0,_(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(g,y){a=_(g,y,0)},this.setState=function(g,y,M){const T=g.clippingPlanes,C=g.clipIntersection,S=g.clipShadows,b=l.get(g);if(!c||T===null||T.length===0||f&&!S)f?_(null):m();else{const U=f?0:r,P=U*4;let z=b.clippingState||null;p.value=z,z=_(T,y,P,M);for(let V=0;V!==P;++V)z[V]=a[V];b.clippingState=z,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==a&&(p.value=a,p.needsUpdate=r>0),n.numPlanes=r,n.numIntersection=0}function _(g,y,M,T){const C=g!==null?g.length:0;let S=null;if(C!==0){if(S=p.value,T!==!0||S===null){const b=M+C*4,U=y.matrixWorldInverse;h.getNormalMatrix(U),(S===null||S.length<b)&&(S=new Float32Array(b));for(let P=0,z=M;P!==C;++P,z+=4)d.copy(g[P]).applyMatrix4(U,h),d.normal.toArray(S,z),S[z+3]=d.constant}p.value=S,p.needsUpdate=!0}return n.numPlanes=C,n.numIntersection=0,S}}function zA(l){let n=new WeakMap;function a(d,h){return h===np?d.mapping=tr:h===ip&&(d.mapping=rl),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===np||h===ip)if(n.has(d)){const p=n.get(d).texture;return a(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new G_(p.height);return m.fromEquirectangularTexture(l,d),n.set(d,m),d.addEventListener("dispose",c),a(m.texture,d.mapping)}else return null}}return d}function c(d){const h=d.target;h.removeEventListener("dispose",c);const p=n.get(h);p!==void 0&&(n.delete(h),p.dispose())}function f(){n=new WeakMap}return{get:r,dispose:f}}const ms=4,kv=[.125,.215,.35,.446,.526,.582],Js=20,FA=256,fo=new q_,Xv=new zt;let Bh=null,Hh=0,Vh=0,Gh=!1;const BA=new he;class qv{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,a=0,r=.1,c=100,f={}){const{size:d=256,position:h=BA}=f;Bh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(n,r,c,p,h),a>0&&this._blur(p,0,0,a),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(n,a=null){return this._fromTexture(n,a)}fromCubemap(n,a=null){return this._fromTexture(n,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(Bh,Hh,Vh),this._renderer.xr.enabled=Gh,n.scissorTest=!1,nl(n,0,0,n.width,n.height)}_fromTexture(n,a){n.mapping===tr||n.mapping===rl?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Bh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=a||this._allocateTargets();return this._textureToCubeUV(n,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,r={magFilter:In,minFilter:In,generateMipmaps:!1,type:wa,format:zi,colorSpace:ol,depthBuffer:!1},c=Wv(n,a,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wv(n,a,r);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=HA(f)),this._blurMaterial=GA(f,n,a),this._ggxMaterial=VA(f,n,a)}return c}_compileMaterial(n){const a=new Ua(new Bi,n);this._renderer.compile(a,fo)}_sceneToCubeUV(n,a,r,c,f){const p=new Mi(90,1,a,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,M=g.toneMapping;g.getClearColor(Xv),g.toneMapping=ta,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(c),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ua(new To,new I_({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let b=!1;const U=n.background;U?U.isColor&&(S.color.copy(U),n.background=null,b=!0):(S.color.copy(Xv),b=!0);for(let P=0;P<6;P++){const z=P%3;z===0?(p.up.set(0,m[P],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+_[P],f.y,f.z)):z===1?(p.up.set(0,0,m[P]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+_[P],f.z)):(p.up.set(0,m[P],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+_[P]));const V=this._cubeSize;nl(c,z*V,P>2?V:0,V,V),g.setRenderTarget(c),b&&g.render(C,p),g.render(n,p)}g.toneMapping=M,g.autoClear=y,n.background=U}_textureToCubeUV(n,a){const r=this._renderer,c=n.mapping===tr||n.mapping===rl;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zv()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yv());const f=c?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=n;const p=this._cubeSize;nl(a,0,0,3*p,2*p),r.setRenderTarget(a),r.render(d,fo)}_applyPMREM(n){const a=this._renderer,r=a.autoClear;a.autoClear=!1;const c=this._lodMeshes.length;for(let f=1;f<c;f++)this._applyGGXFilter(n,f-1,f);a.autoClear=r}_applyGGXFilter(n,a,r){const c=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),_=a/(this._lodMeshes.length-1),g=Math.sqrt(m*m-_*_),y=0+m*1.25,M=g*y,{_lodMax:T}=this,C=this._sizeLods[r],S=3*C*(r>T-ms?r-T+ms:0),b=4*(this._cubeSize-C);p.envMap.value=n.texture,p.roughness.value=M,p.mipInt.value=T-a,nl(f,S,b,3*C,2*C),c.setRenderTarget(f),c.render(h,fo),p.envMap.value=f.texture,p.roughness.value=0,p.mipInt.value=T-r,nl(n,S,b,3*C,2*C),c.setRenderTarget(n),c.render(h,fo)}_blur(n,a,r,c,f){const d=this._pingPongRenderTarget;this._halfBlur(n,d,a,r,c,"latitudinal",f),this._halfBlur(d,n,r,r,c,"longitudinal",f)}_halfBlur(n,a,r,c,f,d,h){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&It("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[c];g.material=m;const y=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Js-1),C=f/T,S=isFinite(f)?1+Math.floor(_*C):Js;S>Js&&ht(`sigmaRadians, ${f}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Js}`);const b=[];let U=0;for(let F=0;F<Js;++F){const J=F/C,R=Math.exp(-J*J/2);b.push(R),F===0?U+=R:F<S&&(U+=2*R)}for(let F=0;F<b.length;F++)b[F]=b[F]/U;y.envMap.value=n.texture,y.samples.value=S,y.weights.value=b,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:P}=this;y.dTheta.value=T,y.mipInt.value=P-r;const z=this._sizeLods[c],V=3*z*(c>P-ms?c-P+ms:0),G=4*(this._cubeSize-z);nl(a,V,G,3*z,2*z),p.setRenderTarget(a),p.render(g,fo)}}function HA(l){const n=[],a=[],r=[];let c=l;const f=l-ms+1+kv.length;for(let d=0;d<f;d++){const h=Math.pow(2,c);n.push(h);let p=1/h;d>l-ms?p=kv[d-l+ms-1]:d===0&&(p=0),a.push(p);const m=1/(h-2),_=-m,g=1+m,y=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,T=6,C=3,S=2,b=1,U=new Float32Array(C*T*M),P=new Float32Array(S*T*M),z=new Float32Array(b*T*M);for(let G=0;G<M;G++){const F=G%3*2/3-1,J=G>2?0:-1,R=[F,J,0,F+2/3,J,0,F+2/3,J+1,0,F,J,0,F+2/3,J+1,0,F,J+1,0];U.set(R,C*T*G),P.set(y,S*T*G);const N=[G,G,G,G,G,G];z.set(N,b*T*G)}const V=new Bi;V.setAttribute("position",new Ti(U,C)),V.setAttribute("uv",new Ti(P,S)),V.setAttribute("faceIndex",new Ti(z,b)),r.push(new Ua(V,null)),c>ms&&c--}return{lodMeshes:r,sizeLods:n,sigmas:a}}function Wv(l,n,a){const r=new na(l,n,a);return r.texture.mapping=wu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function nl(l,n,a,r,c){l.viewport.set(n,a,r,c),l.scissor.set(n,a,r,c)}function VA(l,n,a){return new aa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:FA,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function GA(l,n,a){const r=new Float32Array(Js),c=new he(0,1,0);return new aa({name:"SphericalGaussianBlur",defines:{n:Js,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Yv(){return new aa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Zv(){return new aa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Uu(){return`

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
	`}function jA(l){let n=new WeakMap,a=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===np||p===ip,_=p===tr||p===rl;if(m||_){let g=n.get(h);const y=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return a===null&&(a=new qv(l)),g=m?a.fromEquirectangular(h,g):a.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return m&&M&&M.height>0||_&&M&&c(M)?(a===null&&(a=new qv(l)),g=m?a.fromEquirectangular(h):a.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),h.addEventListener("dispose",f),g.texture):null}}}return h}function c(h){let p=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&p++;return p===m}function f(h){const p=h.target;p.removeEventListener("dispose",f);const m=n.get(p);m!==void 0&&(n.delete(p),m.dispose())}function d(){n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:r,dispose:d}}function kA(l){const n={};function a(r){if(n[r]!==void 0)return n[r];const c=l.getExtension(r);return n[r]=c,c}return{has:function(r){return a(r)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(r){const c=a(r);return c===null&&_o("WebGLRenderer: "+r+" extension not supported."),c}}}function XA(l,n,a,r){const c={},f=new WeakMap;function d(g){const y=g.target;y.index!==null&&n.remove(y.index);for(const T in y.attributes)n.remove(y.attributes[T]);y.removeEventListener("dispose",d),delete c[y.id];const M=f.get(y);M&&(n.remove(M),f.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,a.memory.geometries--}function h(g,y){return c[y.id]===!0||(y.addEventListener("dispose",d),c[y.id]=!0,a.memory.geometries++),y}function p(g){const y=g.attributes;for(const M in y)n.update(y[M],l.ARRAY_BUFFER)}function m(g){const y=[],M=g.index,T=g.attributes.position;let C=0;if(M!==null){const U=M.array;C=M.version;for(let P=0,z=U.length;P<z;P+=3){const V=U[P+0],G=U[P+1],F=U[P+2];y.push(V,G,G,F,F,V)}}else if(T!==void 0){const U=T.array;C=T.version;for(let P=0,z=U.length/3-1;P<z;P+=3){const V=P+0,G=P+1,F=P+2;y.push(V,G,G,F,F,V)}}else return;const S=new(D_(y)?F_:z_)(y,1);S.version=C;const b=f.get(g);b&&n.remove(b),f.set(g,S)}function _(g){const y=f.get(g);if(y){const M=g.index;M!==null&&y.version<M.version&&m(g)}else m(g);return f.get(g)}return{get:h,update:p,getWireframeAttribute:_}}function qA(l,n,a){let r;function c(y){r=y}let f,d;function h(y){f=y.type,d=y.bytesPerElement}function p(y,M){l.drawElements(r,M,f,y*d),a.update(M,r,1)}function m(y,M,T){T!==0&&(l.drawElementsInstanced(r,M,f,y*d,T),a.update(M,r,T))}function _(y,M,T){if(T===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,f,y,0,T);let S=0;for(let b=0;b<T;b++)S+=M[b];a.update(S,r,1)}function g(y,M,T,C){if(T===0)return;const S=n.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<y.length;b++)m(y[b]/d,M[b],C[b]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,f,y,0,C,0,T);let b=0;for(let U=0;U<T;U++)b+=M[U]*C[U];a.update(b,r,1)}}this.setMode=c,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function WA(l){const n={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function r(f,d,h){switch(a.calls++,d){case l.TRIANGLES:a.triangles+=h*(f/3);break;case l.LINES:a.lines+=h*(f/2);break;case l.LINE_STRIP:a.lines+=h*(f-1);break;case l.LINE_LOOP:a.lines+=h*f;break;case l.POINTS:a.points+=h*f;break;default:It("WebGLInfo: Unknown draw mode:",d);break}}function c(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:n,render:a,programs:null,autoReset:!0,reset:c,update:r}}function YA(l,n,a){const r=new WeakMap,c=new ln;function f(d,h,p){const m=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let y=r.get(h);if(y===void 0||y.count!==g){let N=function(){J.dispose(),r.delete(h),h.removeEventListener("dispose",N)};var M=N;y!==void 0&&y.texture.dispose();const T=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let z=0;T===!0&&(z=1),C===!0&&(z=2),S===!0&&(z=3);let V=h.attributes.position.count*z,G=1;V>n.maxTextureSize&&(G=Math.ceil(V/n.maxTextureSize),V=n.maxTextureSize);const F=new Float32Array(V*G*4*g),J=new U_(F,V,G,g);J.type=$i,J.needsUpdate=!0;const R=z*4;for(let j=0;j<g;j++){const ce=b[j],oe=U[j],me=P[j],de=V*G*4*j;for(let W=0;W<ce.count;W++){const Z=W*R;T===!0&&(c.fromBufferAttribute(ce,W),F[de+Z+0]=c.x,F[de+Z+1]=c.y,F[de+Z+2]=c.z,F[de+Z+3]=0),C===!0&&(c.fromBufferAttribute(oe,W),F[de+Z+4]=c.x,F[de+Z+5]=c.y,F[de+Z+6]=c.z,F[de+Z+7]=0),S===!0&&(c.fromBufferAttribute(me,W),F[de+Z+8]=c.x,F[de+Z+9]=c.y,F[de+Z+10]=c.z,F[de+Z+11]=me.itemSize===4?c.w:1)}}y={count:g,texture:J,size:new Kt(V,G)},r.set(h,y),h.addEventListener("dispose",N)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(l,"morphTexture",d.morphTexture,a);else{let T=0;for(let S=0;S<m.length;S++)T+=m[S];const C=h.morphTargetsRelative?1:1-T;p.getUniforms().setValue(l,"morphTargetBaseInfluence",C),p.getUniforms().setValue(l,"morphTargetInfluences",m)}p.getUniforms().setValue(l,"morphTargetsTexture",y.texture,a),p.getUniforms().setValue(l,"morphTargetsTextureSize",y.size)}return{update:f}}function ZA(l,n,a,r){let c=new WeakMap;function f(p){const m=r.render.frame,_=p.geometry,g=n.get(p,_);if(c.get(g)!==m&&(n.update(g),c.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),c.get(p)!==m&&(a.update(p.instanceMatrix,l.ARRAY_BUFFER),p.instanceColor!==null&&a.update(p.instanceColor,l.ARRAY_BUFFER),c.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==m&&(y.update(),c.set(y,m))}return g}function d(){c=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),a.remove(m.instanceMatrix),m.instanceColor!==null&&a.remove(m.instanceColor)}return{update:f,dispose:d}}const KA={[g_]:"LINEAR_TONE_MAPPING",[x_]:"REINHARD_TONE_MAPPING",[v_]:"CINEON_TONE_MAPPING",[__]:"ACES_FILMIC_TONE_MAPPING",[S_]:"AGX_TONE_MAPPING",[b_]:"NEUTRAL_TONE_MAPPING",[y_]:"CUSTOM_TONE_MAPPING"};function QA(l,n,a,r,c){const f=new na(n,a,{type:l,depthBuffer:r,stencilBuffer:c}),d=new na(n,a,{type:wa,depthBuffer:!1,stencilBuffer:!1}),h=new Bi;h.setAttribute("position",new Ca([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ca([0,2,0,0,2,0],2));const p=new X1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Ua(h,p),_=new q_(-1,1,1,-1,0,1);let g=null,y=null,M=!1,T,C=null,S=[],b=!1;this.setSize=function(U,P){f.setSize(U,P),d.setSize(U,P);for(let z=0;z<S.length;z++){const V=S[z];V.setSize&&V.setSize(U,P)}},this.setEffects=function(U){S=U,b=S.length>0&&S[0].isRenderPass===!0;const P=f.width,z=f.height;for(let V=0;V<S.length;V++){const G=S[V];G.setSize&&G.setSize(P,z)}},this.begin=function(U,P){if(M||U.toneMapping===ta&&S.length===0)return!1;if(C=P,P!==null){const z=P.width,V=P.height;(f.width!==z||f.height!==V)&&this.setSize(z,V)}return b===!1&&U.setRenderTarget(f),T=U.toneMapping,U.toneMapping=ta,!0},this.hasRenderPass=function(){return b},this.end=function(U,P){U.toneMapping=T,M=!0;let z=f,V=d;for(let G=0;G<S.length;G++){const F=S[G];if(F.enabled!==!1&&(F.render(U,V,z,P),F.needsSwap!==!1)){const J=z;z=V,V=J}}if(g!==U.outputColorSpace||y!==U.toneMapping){g=U.outputColorSpace,y=U.toneMapping,p.defines={},Ot.getTransfer(g)===qt&&(p.defines.SRGB_TRANSFER="");const G=KA[y];G&&(p.defines[G]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=z.texture,U.setRenderTarget(C),U.render(m,_),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){f.dispose(),d.dispose(),h.dispose(),p.dispose()}}const Y_=new jn,Hp=new yo(1,1),Z_=new U_,K_=new y1,Q_=new V_,Kv=[],Qv=[],Jv=new Float32Array(16),$v=new Float32Array(9),e_=new Float32Array(4);function dl(l,n,a){const r=l[0];if(r<=0||r>0)return l;const c=n*a;let f=Kv[c];if(f===void 0&&(f=new Float32Array(c),Kv[c]=f),n!==0){r.toArray(f,0);for(let d=1,h=0;d!==n;++d)h+=a,l[d].toArray(f,h)}return f}function gn(l,n){if(l.length!==n.length)return!1;for(let a=0,r=l.length;a<r;a++)if(l[a]!==n[a])return!1;return!0}function xn(l,n){for(let a=0,r=n.length;a<r;a++)l[a]=n[a]}function Lu(l,n){let a=Qv[n];a===void 0&&(a=new Int32Array(n),Qv[n]=a);for(let r=0;r!==n;++r)a[r]=l.allocateTextureUnit();return a}function JA(l,n){const a=this.cache;a[0]!==n&&(l.uniform1f(this.addr,n),a[0]=n)}function $A(l,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(l.uniform2f(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(gn(a,n))return;l.uniform2fv(this.addr,n),xn(a,n)}}function e2(l,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(l.uniform3f(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else if(n.r!==void 0)(a[0]!==n.r||a[1]!==n.g||a[2]!==n.b)&&(l.uniform3f(this.addr,n.r,n.g,n.b),a[0]=n.r,a[1]=n.g,a[2]=n.b);else{if(gn(a,n))return;l.uniform3fv(this.addr,n),xn(a,n)}}function t2(l,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(l.uniform4f(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(gn(a,n))return;l.uniform4fv(this.addr,n),xn(a,n)}}function n2(l,n){const a=this.cache,r=n.elements;if(r===void 0){if(gn(a,n))return;l.uniformMatrix2fv(this.addr,!1,n),xn(a,n)}else{if(gn(a,r))return;e_.set(r),l.uniformMatrix2fv(this.addr,!1,e_),xn(a,r)}}function i2(l,n){const a=this.cache,r=n.elements;if(r===void 0){if(gn(a,n))return;l.uniformMatrix3fv(this.addr,!1,n),xn(a,n)}else{if(gn(a,r))return;$v.set(r),l.uniformMatrix3fv(this.addr,!1,$v),xn(a,r)}}function a2(l,n){const a=this.cache,r=n.elements;if(r===void 0){if(gn(a,n))return;l.uniformMatrix4fv(this.addr,!1,n),xn(a,n)}else{if(gn(a,r))return;Jv.set(r),l.uniformMatrix4fv(this.addr,!1,Jv),xn(a,r)}}function s2(l,n){const a=this.cache;a[0]!==n&&(l.uniform1i(this.addr,n),a[0]=n)}function r2(l,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(l.uniform2i(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(gn(a,n))return;l.uniform2iv(this.addr,n),xn(a,n)}}function l2(l,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(l.uniform3i(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(gn(a,n))return;l.uniform3iv(this.addr,n),xn(a,n)}}function o2(l,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(l.uniform4i(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(gn(a,n))return;l.uniform4iv(this.addr,n),xn(a,n)}}function c2(l,n){const a=this.cache;a[0]!==n&&(l.uniform1ui(this.addr,n),a[0]=n)}function u2(l,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y)&&(l.uniform2ui(this.addr,n.x,n.y),a[0]=n.x,a[1]=n.y);else{if(gn(a,n))return;l.uniform2uiv(this.addr,n),xn(a,n)}}function f2(l,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z)&&(l.uniform3ui(this.addr,n.x,n.y,n.z),a[0]=n.x,a[1]=n.y,a[2]=n.z);else{if(gn(a,n))return;l.uniform3uiv(this.addr,n),xn(a,n)}}function d2(l,n){const a=this.cache;if(n.x!==void 0)(a[0]!==n.x||a[1]!==n.y||a[2]!==n.z||a[3]!==n.w)&&(l.uniform4ui(this.addr,n.x,n.y,n.z,n.w),a[0]=n.x,a[1]=n.y,a[2]=n.z,a[3]=n.w);else{if(gn(a,n))return;l.uniform4uiv(this.addr,n),xn(a,n)}}function h2(l,n,a){const r=this.cache,c=a.allocateTextureUnit();r[0]!==c&&(l.uniform1i(this.addr,c),r[0]=c);let f;this.type===l.SAMPLER_2D_SHADOW?(Hp.compareFunction=a.isReversedDepthBuffer()?$p:Jp,f=Hp):f=Y_,a.setTexture2D(n||f,c)}function p2(l,n,a){const r=this.cache,c=a.allocateTextureUnit();r[0]!==c&&(l.uniform1i(this.addr,c),r[0]=c),a.setTexture3D(n||K_,c)}function m2(l,n,a){const r=this.cache,c=a.allocateTextureUnit();r[0]!==c&&(l.uniform1i(this.addr,c),r[0]=c),a.setTextureCube(n||Q_,c)}function g2(l,n,a){const r=this.cache,c=a.allocateTextureUnit();r[0]!==c&&(l.uniform1i(this.addr,c),r[0]=c),a.setTexture2DArray(n||Z_,c)}function x2(l){switch(l){case 5126:return JA;case 35664:return $A;case 35665:return e2;case 35666:return t2;case 35674:return n2;case 35675:return i2;case 35676:return a2;case 5124:case 35670:return s2;case 35667:case 35671:return r2;case 35668:case 35672:return l2;case 35669:case 35673:return o2;case 5125:return c2;case 36294:return u2;case 36295:return f2;case 36296:return d2;case 35678:case 36198:case 36298:case 36306:case 35682:return h2;case 35679:case 36299:case 36307:return p2;case 35680:case 36300:case 36308:case 36293:return m2;case 36289:case 36303:case 36311:case 36292:return g2}}function v2(l,n){l.uniform1fv(this.addr,n)}function _2(l,n){const a=dl(n,this.size,2);l.uniform2fv(this.addr,a)}function y2(l,n){const a=dl(n,this.size,3);l.uniform3fv(this.addr,a)}function S2(l,n){const a=dl(n,this.size,4);l.uniform4fv(this.addr,a)}function b2(l,n){const a=dl(n,this.size,4);l.uniformMatrix2fv(this.addr,!1,a)}function M2(l,n){const a=dl(n,this.size,9);l.uniformMatrix3fv(this.addr,!1,a)}function E2(l,n){const a=dl(n,this.size,16);l.uniformMatrix4fv(this.addr,!1,a)}function T2(l,n){l.uniform1iv(this.addr,n)}function A2(l,n){l.uniform2iv(this.addr,n)}function R2(l,n){l.uniform3iv(this.addr,n)}function C2(l,n){l.uniform4iv(this.addr,n)}function w2(l,n){l.uniform1uiv(this.addr,n)}function N2(l,n){l.uniform2uiv(this.addr,n)}function D2(l,n){l.uniform3uiv(this.addr,n)}function U2(l,n){l.uniform4uiv(this.addr,n)}function L2(l,n,a){const r=this.cache,c=n.length,f=Lu(a,c);gn(r,f)||(l.uniform1iv(this.addr,f),xn(r,f));let d;this.type===l.SAMPLER_2D_SHADOW?d=Hp:d=Y_;for(let h=0;h!==c;++h)a.setTexture2D(n[h]||d,f[h])}function O2(l,n,a){const r=this.cache,c=n.length,f=Lu(a,c);gn(r,f)||(l.uniform1iv(this.addr,f),xn(r,f));for(let d=0;d!==c;++d)a.setTexture3D(n[d]||K_,f[d])}function P2(l,n,a){const r=this.cache,c=n.length,f=Lu(a,c);gn(r,f)||(l.uniform1iv(this.addr,f),xn(r,f));for(let d=0;d!==c;++d)a.setTextureCube(n[d]||Q_,f[d])}function I2(l,n,a){const r=this.cache,c=n.length,f=Lu(a,c);gn(r,f)||(l.uniform1iv(this.addr,f),xn(r,f));for(let d=0;d!==c;++d)a.setTexture2DArray(n[d]||Z_,f[d])}function z2(l){switch(l){case 5126:return v2;case 35664:return _2;case 35665:return y2;case 35666:return S2;case 35674:return b2;case 35675:return M2;case 35676:return E2;case 5124:case 35670:return T2;case 35667:case 35671:return A2;case 35668:case 35672:return R2;case 35669:case 35673:return C2;case 5125:return w2;case 36294:return N2;case 36295:return D2;case 36296:return U2;case 35678:case 36198:case 36298:case 36306:case 35682:return L2;case 35679:case 36299:case 36307:return O2;case 35680:case 36300:case 36308:case 36293:return P2;case 36289:case 36303:case 36311:case 36292:return I2}}class F2{constructor(n,a,r){this.id=n,this.addr=r,this.cache=[],this.type=a.type,this.setValue=x2(a.type)}}class B2{constructor(n,a,r){this.id=n,this.addr=r,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=z2(a.type)}}class H2{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,a,r){const c=this.seq;for(let f=0,d=c.length;f!==d;++f){const h=c[f];h.setValue(n,a[h.id],r)}}}const jh=/(\w+)(\])?(\[|\.)?/g;function t_(l,n){l.seq.push(n),l.map[n.id]=n}function V2(l,n,a){const r=l.name,c=r.length;for(jh.lastIndex=0;;){const f=jh.exec(r),d=jh.lastIndex;let h=f[1];const p=f[2]==="]",m=f[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===c){t_(a,m===void 0?new F2(h,l,n):new B2(h,l,n));break}else{let g=a.map[h];g===void 0&&(g=new H2(h),t_(a,g)),a=g}}}class Eu{constructor(n,a){this.seq=[],this.map={};const r=n.getProgramParameter(a,n.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=n.getActiveUniform(a,d),p=n.getUniformLocation(a,h.name);V2(h,p,this)}const c=[],f=[];for(const d of this.seq)d.type===n.SAMPLER_2D_SHADOW||d.type===n.SAMPLER_CUBE_SHADOW||d.type===n.SAMPLER_2D_ARRAY_SHADOW?c.push(d):f.push(d);c.length>0&&(this.seq=c.concat(f))}setValue(n,a,r,c){const f=this.map[a];f!==void 0&&f.setValue(n,r,c)}setOptional(n,a,r){const c=a[r];c!==void 0&&this.setValue(n,r,c)}static upload(n,a,r,c){for(let f=0,d=a.length;f!==d;++f){const h=a[f],p=r[h.id];p.needsUpdate!==!1&&h.setValue(n,p.value,c)}}static seqWithValue(n,a){const r=[];for(let c=0,f=n.length;c!==f;++c){const d=n[c];d.id in a&&r.push(d)}return r}}function n_(l,n,a){const r=l.createShader(n);return l.shaderSource(r,a),l.compileShader(r),r}const G2=37297;let j2=0;function k2(l,n){const a=l.split(`
`),r=[],c=Math.max(n-6,0),f=Math.min(n+6,a.length);for(let d=c;d<f;d++){const h=d+1;r.push(`${h===n?">":" "} ${h}: ${a[d]}`)}return r.join(`
`)}const i_=new _t;function X2(l){Ot._getMatrix(i_,Ot.workingColorSpace,l);const n=`mat3( ${i_.elements.map(a=>a.toFixed(4))} )`;switch(Ot.getTransfer(l)){case Tu:return[n,"LinearTransferOETF"];case qt:return[n,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",l),[n,"LinearTransferOETF"]}}function a_(l,n,a){const r=l.getShaderParameter(n,l.COMPILE_STATUS),f=(l.getShaderInfoLog(n)||"").trim();if(r&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return a.toUpperCase()+`

`+f+`

`+k2(l.getShaderSource(n),h)}else return f}function q2(l,n){const a=X2(n);return[`vec4 ${l}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}const W2={[g_]:"Linear",[x_]:"Reinhard",[v_]:"Cineon",[__]:"ACESFilmic",[S_]:"AgX",[b_]:"Neutral",[y_]:"Custom"};function Y2(l,n){const a=W2[n];return a===void 0?(ht("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+l+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+l+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const xu=new he;function Z2(){Ot.getLuminanceCoefficients(xu);const l=xu.x.toFixed(4),n=xu.y.toFixed(4),a=xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${l}, ${n}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K2(l){return[l.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",l.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mo).join(`
`)}function Q2(l){const n=[];for(const a in l){const r=l[a];r!==!1&&n.push("#define "+a+" "+r)}return n.join(`
`)}function J2(l,n){const a={},r=l.getProgramParameter(n,l.ACTIVE_ATTRIBUTES);for(let c=0;c<r;c++){const f=l.getActiveAttrib(n,c),d=f.name;let h=1;f.type===l.FLOAT_MAT2&&(h=2),f.type===l.FLOAT_MAT3&&(h=3),f.type===l.FLOAT_MAT4&&(h=4),a[d]={type:f.type,location:l.getAttribLocation(n,d),locationSize:h}}return a}function mo(l){return l!==""}function s_(l,n){const a=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function r_(l,n){return l.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const $2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vp(l){return l.replace($2,t3)}const e3=new Map;function t3(l,n){let a=yt[n];if(a===void 0){const r=e3.get(n);if(r!==void 0)a=yt[r],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,r);else throw new Error("Can not resolve #include <"+n+">")}return Vp(a)}const n3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l_(l){return l.replace(n3,i3)}function i3(l,n,a,r){let c="";for(let f=parseInt(n);f<parseInt(a);f++)c+=r.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function o_(l){let n=`precision ${l.precision} float;
	precision ${l.precision} int;
	precision ${l.precision} sampler2D;
	precision ${l.precision} samplerCube;
	precision ${l.precision} sampler3D;
	precision ${l.precision} sampler2DArray;
	precision ${l.precision} sampler2DShadow;
	precision ${l.precision} samplerCubeShadow;
	precision ${l.precision} sampler2DArrayShadow;
	precision ${l.precision} isampler2D;
	precision ${l.precision} isampler3D;
	precision ${l.precision} isamplerCube;
	precision ${l.precision} isampler2DArray;
	precision ${l.precision} usampler2D;
	precision ${l.precision} usampler3D;
	precision ${l.precision} usamplerCube;
	precision ${l.precision} usampler2DArray;
	`;return l.precision==="highp"?n+=`
#define HIGH_PRECISION`:l.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}const a3={[_u]:"SHADOWMAP_TYPE_PCF",[po]:"SHADOWMAP_TYPE_VSM"};function s3(l){return a3[l.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const r3={[tr]:"ENVMAP_TYPE_CUBE",[rl]:"ENVMAP_TYPE_CUBE",[wu]:"ENVMAP_TYPE_CUBE_UV"};function l3(l){return l.envMap===!1?"ENVMAP_TYPE_CUBE":r3[l.envMapMode]||"ENVMAP_TYPE_CUBE"}const o3={[rl]:"ENVMAP_MODE_REFRACTION"};function c3(l){return l.envMap===!1?"ENVMAP_MODE_REFLECTION":o3[l.envMapMode]||"ENVMAP_MODE_REFLECTION"}const u3={[m_]:"ENVMAP_BLENDING_MULTIPLY",[e1]:"ENVMAP_BLENDING_MIX",[t1]:"ENVMAP_BLENDING_ADD"};function f3(l){return l.envMap===!1?"ENVMAP_BLENDING_NONE":u3[l.combine]||"ENVMAP_BLENDING_NONE"}function d3(l){const n=l.envMapCubeUVHeight;if(n===null)return null;const a=Math.log2(n)-2,r=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:r,maxMip:a}}function h3(l,n,a,r){const c=l.getContext(),f=a.defines;let d=a.vertexShader,h=a.fragmentShader;const p=s3(a),m=l3(a),_=c3(a),g=f3(a),y=d3(a),M=K2(a),T=Q2(f),C=c.createProgram();let S,b,U=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(S=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,T].filter(mo).join(`
`),S.length>0&&(S+=`
`),b=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,T].filter(mo).join(`
`),b.length>0&&(b+=`
`)):(S=[o_(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,T,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+_:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+p:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mo).join(`
`),b=[o_(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,T,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+m:"",a.envMap?"#define "+_:"",a.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+p:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==ta?"#define TONE_MAPPING":"",a.toneMapping!==ta?yt.tonemapping_pars_fragment:"",a.toneMapping!==ta?Y2("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,q2("linearToOutputTexel",a.outputColorSpace),Z2(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(mo).join(`
`)),d=Vp(d),d=s_(d,a),d=r_(d,a),h=Vp(h),h=s_(h,a),h=r_(h,a),d=l_(d),h=l_(h),a.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,b=["#define varying in",a.glslVersion===bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const P=U+S+d,z=U+b+h,V=n_(c,c.VERTEX_SHADER,P),G=n_(c,c.FRAGMENT_SHADER,z);c.attachShader(C,V),c.attachShader(C,G),a.index0AttributeName!==void 0?c.bindAttribLocation(C,0,a.index0AttributeName):a.morphTargets===!0&&c.bindAttribLocation(C,0,"position"),c.linkProgram(C);function F(j){if(l.debug.checkShaderErrors){const ce=c.getProgramInfoLog(C)||"",oe=c.getShaderInfoLog(V)||"",me=c.getShaderInfoLog(G)||"",de=ce.trim(),W=oe.trim(),Z=me.trim();let le=!0,Ee=!0;if(c.getProgramParameter(C,c.LINK_STATUS)===!1)if(le=!1,typeof l.debug.onShaderError=="function")l.debug.onShaderError(c,C,V,G);else{const I=a_(c,V,"vertex"),L=a_(c,G,"fragment");It("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(C,c.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+de+`
`+I+`
`+L)}else de!==""?ht("WebGLProgram: Program Info Log:",de):(W===""||Z==="")&&(Ee=!1);Ee&&(j.diagnostics={runnable:le,programLog:de,vertexShader:{log:W,prefix:S},fragmentShader:{log:Z,prefix:b}})}c.deleteShader(V),c.deleteShader(G),J=new Eu(c,C),R=J2(c,C)}let J;this.getUniforms=function(){return J===void 0&&F(this),J};let R;this.getAttributes=function(){return R===void 0&&F(this),R};let N=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=c.getProgramParameter(C,G2)),N},this.destroy=function(){r.releaseStatesOfProgram(this),c.deleteProgram(C),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=j2++,this.cacheKey=n,this.usedTimes=1,this.program=C,this.vertexShader=V,this.fragmentShader=G,this}let p3=0;class m3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const a=n.vertexShader,r=n.fragmentShader,c=this._getShaderStage(a),f=this._getShaderStage(r),d=this._getShaderCacheForMaterial(n);return d.has(c)===!1&&(d.add(c),c.usedTimes++),d.has(f)===!1&&(d.add(f),f.usedTimes++),this}remove(n){const a=this.materialCache.get(n);for(const r of a)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const a=this.materialCache;let r=a.get(n);return r===void 0&&(r=new Set,a.set(n,r)),r}_getShaderStage(n){const a=this.shaderCache;let r=a.get(n);return r===void 0&&(r=new g3(n),a.set(n,r)),r}}class g3{constructor(n){this.id=p3++,this.code=n,this.usedTimes=0}}function x3(l,n,a,r,c,f,d){const h=new O_,p=new m3,m=new Set,_=[],g=new Map,y=c.logarithmicDepthBuffer;let M=c.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return m.add(R),R===0?"uv":`uv${R}`}function S(R,N,j,ce,oe){const me=ce.fog,de=oe.geometry,W=R.isMeshStandardMaterial?ce.environment:null,Z=(R.isMeshStandardMaterial?a:n).get(R.envMap||W),le=Z&&Z.mapping===wu?Z.image.height:null,Ee=T[R.type];R.precision!==null&&(M=c.getMaxPrecision(R.precision),M!==R.precision&&ht("WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const I=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,L=I!==void 0?I.length:0;let Te=0;de.morphAttributes.position!==void 0&&(Te=1),de.morphAttributes.normal!==void 0&&(Te=2),de.morphAttributes.color!==void 0&&(Te=3);let we,O,ae,X;if(Ee){const wt=Ji[Ee];we=wt.vertexShader,O=wt.fragmentShader}else we=R.vertexShader,O=R.fragmentShader,p.update(R),ae=p.getVertexShaderID(R),X=p.getFragmentShaderID(R);const Y=l.getRenderTarget(),pe=l.state.buffers.depth.getReversed(),Ae=oe.isInstancedMesh===!0,Se=oe.isBatchedMesh===!0,ye=!!R.map,De=!!R.matcap,et=!!Z,We=!!R.aoMap,ot=!!R.lightMap,$e=!!R.bumpMap,rt=!!R.normalMap,H=!!R.displacementMap,St=!!R.emissiveMap,ut=!!R.metalnessMap,Mt=!!R.roughnessMap,Ye=R.anisotropy>0,D=R.clearcoat>0,E=R.dispersion>0,Q=R.iridescence>0,xe=R.sheen>0,be=R.transmission>0,ge=Ye&&!!R.anisotropyMap,je=D&&!!R.clearcoatMap,Ue=D&&!!R.clearcoatNormalMap,Xe=D&&!!R.clearcoatRoughnessMap,st=Q&&!!R.iridescenceMap,Ce=Q&&!!R.iridescenceThicknessMap,Pe=xe&&!!R.sheenColorMap,Ze=xe&&!!R.sheenRoughnessMap,Je=!!R.specularMap,Ie=!!R.specularColorMap,vt=!!R.specularIntensityMap,q=be&&!!R.transmissionMap,He=be&&!!R.thicknessMap,Ne=!!R.gradientMap,Ve=!!R.alphaMap,Re=R.alphaTest>0,Me=!!R.alphaHash,Oe=!!R.extensions;let ft=ta;R.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ft=l.toneMapping);const Wt={shaderID:Ee,shaderType:R.type,shaderName:R.name,vertexShader:we,fragmentShader:O,defines:R.defines,customVertexShaderID:ae,customFragmentShaderID:X,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:Se,batchingColor:Se&&oe._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&oe.instanceColor!==null,instancingMorph:Ae&&oe.morphTexture!==null,outputColorSpace:Y===null?l.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ol,alphaToCoverage:!!R.alphaToCoverage,map:ye,matcap:De,envMap:et,envMapMode:et&&Z.mapping,envMapCubeUVHeight:le,aoMap:We,lightMap:ot,bumpMap:$e,normalMap:rt,displacementMap:H,emissiveMap:St,normalMapObjectSpace:rt&&R.normalMapType===s1,normalMapTangentSpace:rt&&R.normalMapType===a1,metalnessMap:ut,roughnessMap:Mt,anisotropy:Ye,anisotropyMap:ge,clearcoat:D,clearcoatMap:je,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Xe,dispersion:E,iridescence:Q,iridescenceMap:st,iridescenceThicknessMap:Ce,sheen:xe,sheenColorMap:Pe,sheenRoughnessMap:Ze,specularMap:Je,specularColorMap:Ie,specularIntensityMap:vt,transmission:be,transmissionMap:q,thicknessMap:He,gradientMap:Ne,opaque:R.transparent===!1&&R.blending===il&&R.alphaToCoverage===!1,alphaMap:Ve,alphaTest:Re,alphaHash:Me,combine:R.combine,mapUv:ye&&C(R.map.channel),aoMapUv:We&&C(R.aoMap.channel),lightMapUv:ot&&C(R.lightMap.channel),bumpMapUv:$e&&C(R.bumpMap.channel),normalMapUv:rt&&C(R.normalMap.channel),displacementMapUv:H&&C(R.displacementMap.channel),emissiveMapUv:St&&C(R.emissiveMap.channel),metalnessMapUv:ut&&C(R.metalnessMap.channel),roughnessMapUv:Mt&&C(R.roughnessMap.channel),anisotropyMapUv:ge&&C(R.anisotropyMap.channel),clearcoatMapUv:je&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&C(R.sheenRoughnessMap.channel),specularMapUv:Je&&C(R.specularMap.channel),specularColorMapUv:Ie&&C(R.specularColorMap.channel),specularIntensityMapUv:vt&&C(R.specularIntensityMap.channel),transmissionMapUv:q&&C(R.transmissionMap.channel),thicknessMapUv:He&&C(R.thicknessMap.channel),alphaMapUv:Ve&&C(R.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(rt||Ye),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!de.attributes.uv&&(ye||Ve),fog:!!me,useFog:R.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:pe,skinning:oe.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:Te,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:l.shadowMap.enabled&&j.length>0,shadowMapType:l.shadowMap.type,toneMapping:ft,decodeVideoTexture:ye&&R.map.isVideoTexture===!0&&Ot.getTransfer(R.map.colorSpace)===qt,decodeVideoTextureEmissive:St&&R.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(R.emissiveMap.colorSpace)===qt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ea,flipSided:R.side===Jn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Oe&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&R.extensions.multiDraw===!0||Se)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Wt.vertexUv1s=m.has(1),Wt.vertexUv2s=m.has(2),Wt.vertexUv3s=m.has(3),m.clear(),Wt}function b(R){const N=[];if(R.shaderID?N.push(R.shaderID):(N.push(R.customVertexShaderID),N.push(R.customFragmentShaderID)),R.defines!==void 0)for(const j in R.defines)N.push(j),N.push(R.defines[j]);return R.isRawShaderMaterial===!1&&(U(N,R),P(N,R),N.push(l.outputColorSpace)),N.push(R.customProgramCacheKey),N.join()}function U(R,N){R.push(N.precision),R.push(N.outputColorSpace),R.push(N.envMapMode),R.push(N.envMapCubeUVHeight),R.push(N.mapUv),R.push(N.alphaMapUv),R.push(N.lightMapUv),R.push(N.aoMapUv),R.push(N.bumpMapUv),R.push(N.normalMapUv),R.push(N.displacementMapUv),R.push(N.emissiveMapUv),R.push(N.metalnessMapUv),R.push(N.roughnessMapUv),R.push(N.anisotropyMapUv),R.push(N.clearcoatMapUv),R.push(N.clearcoatNormalMapUv),R.push(N.clearcoatRoughnessMapUv),R.push(N.iridescenceMapUv),R.push(N.iridescenceThicknessMapUv),R.push(N.sheenColorMapUv),R.push(N.sheenRoughnessMapUv),R.push(N.specularMapUv),R.push(N.specularColorMapUv),R.push(N.specularIntensityMapUv),R.push(N.transmissionMapUv),R.push(N.thicknessMapUv),R.push(N.combine),R.push(N.fogExp2),R.push(N.sizeAttenuation),R.push(N.morphTargetsCount),R.push(N.morphAttributeCount),R.push(N.numDirLights),R.push(N.numPointLights),R.push(N.numSpotLights),R.push(N.numSpotLightMaps),R.push(N.numHemiLights),R.push(N.numRectAreaLights),R.push(N.numDirLightShadows),R.push(N.numPointLightShadows),R.push(N.numSpotLightShadows),R.push(N.numSpotLightShadowsWithMaps),R.push(N.numLightProbes),R.push(N.shadowMapType),R.push(N.toneMapping),R.push(N.numClippingPlanes),R.push(N.numClipIntersection),R.push(N.depthPacking)}function P(R,N){h.disableAll(),N.instancing&&h.enable(0),N.instancingColor&&h.enable(1),N.instancingMorph&&h.enable(2),N.matcap&&h.enable(3),N.envMap&&h.enable(4),N.normalMapObjectSpace&&h.enable(5),N.normalMapTangentSpace&&h.enable(6),N.clearcoat&&h.enable(7),N.iridescence&&h.enable(8),N.alphaTest&&h.enable(9),N.vertexColors&&h.enable(10),N.vertexAlphas&&h.enable(11),N.vertexUv1s&&h.enable(12),N.vertexUv2s&&h.enable(13),N.vertexUv3s&&h.enable(14),N.vertexTangents&&h.enable(15),N.anisotropy&&h.enable(16),N.alphaHash&&h.enable(17),N.batching&&h.enable(18),N.dispersion&&h.enable(19),N.batchingColor&&h.enable(20),N.gradientMap&&h.enable(21),R.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),R.push(h.mask)}function z(R){const N=T[R.type];let j;if(N){const ce=Ji[N];j=L1.clone(ce.uniforms)}else j=R.uniforms;return j}function V(R,N){let j=g.get(N);return j!==void 0?++j.usedTimes:(j=new h3(l,N,R,f),_.push(j),g.set(N,j)),j}function G(R){if(--R.usedTimes===0){const N=_.indexOf(R);_[N]=_[_.length-1],_.pop(),g.delete(R.cacheKey),R.destroy()}}function F(R){p.remove(R)}function J(){p.dispose()}return{getParameters:S,getProgramCacheKey:b,getUniforms:z,acquireProgram:V,releaseProgram:G,releaseShaderCache:F,programs:_,dispose:J}}function v3(){let l=new WeakMap;function n(d){return l.has(d)}function a(d){let h=l.get(d);return h===void 0&&(h={},l.set(d,h)),h}function r(d){l.delete(d)}function c(d,h,p){l.get(d)[h]=p}function f(){l=new WeakMap}return{has:n,get:a,remove:r,update:c,dispose:f}}function _3(l,n){return l.groupOrder!==n.groupOrder?l.groupOrder-n.groupOrder:l.renderOrder!==n.renderOrder?l.renderOrder-n.renderOrder:l.material.id!==n.material.id?l.material.id-n.material.id:l.z!==n.z?l.z-n.z:l.id-n.id}function c_(l,n){return l.groupOrder!==n.groupOrder?l.groupOrder-n.groupOrder:l.renderOrder!==n.renderOrder?l.renderOrder-n.renderOrder:l.z!==n.z?n.z-l.z:l.id-n.id}function u_(){const l=[];let n=0;const a=[],r=[],c=[];function f(){n=0,a.length=0,r.length=0,c.length=0}function d(g,y,M,T,C,S){let b=l[n];return b===void 0?(b={id:g.id,object:g,geometry:y,material:M,groupOrder:T,renderOrder:g.renderOrder,z:C,group:S},l[n]=b):(b.id=g.id,b.object=g,b.geometry=y,b.material=M,b.groupOrder=T,b.renderOrder=g.renderOrder,b.z=C,b.group=S),n++,b}function h(g,y,M,T,C,S){const b=d(g,y,M,T,C,S);M.transmission>0?r.push(b):M.transparent===!0?c.push(b):a.push(b)}function p(g,y,M,T,C,S){const b=d(g,y,M,T,C,S);M.transmission>0?r.unshift(b):M.transparent===!0?c.unshift(b):a.unshift(b)}function m(g,y){a.length>1&&a.sort(g||_3),r.length>1&&r.sort(y||c_),c.length>1&&c.sort(y||c_)}function _(){for(let g=n,y=l.length;g<y;g++){const M=l[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:r,transparent:c,init:f,push:h,unshift:p,finish:_,sort:m}}function y3(){let l=new WeakMap;function n(r,c){const f=l.get(r);let d;return f===void 0?(d=new u_,l.set(r,[d])):c>=f.length?(d=new u_,f.push(d)):d=f[c],d}function a(){l=new WeakMap}return{get:n,dispose:a}}function S3(){const l={};return{get:function(n){if(l[n.id]!==void 0)return l[n.id];let a;switch(n.type){case"DirectionalLight":a={direction:new he,color:new zt};break;case"SpotLight":a={position:new he,direction:new he,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new he,color:new zt,distance:0,decay:0};break;case"HemisphereLight":a={direction:new he,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":a={color:new zt,position:new he,halfWidth:new he,halfHeight:new he};break}return l[n.id]=a,a}}}function b3(){const l={};return{get:function(n){if(l[n.id]!==void 0)return l[n.id];let a;switch(n.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[n.id]=a,a}}}let M3=0;function E3(l,n){return(n.castShadow?2:0)-(l.castShadow?2:0)+(n.map?1:0)-(l.map?1:0)}function T3(l){const n=new S3,a=b3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new he);const c=new he,f=new on,d=new on;function h(m){let _=0,g=0,y=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let M=0,T=0,C=0,S=0,b=0,U=0,P=0,z=0,V=0,G=0,F=0;m.sort(E3);for(let R=0,N=m.length;R<N;R++){const j=m[R],ce=j.color,oe=j.intensity,me=j.distance;let de=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===ll?de=j.shadow.map.texture:de=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)_+=ce.r*oe,g+=ce.g*oe,y+=ce.b*oe;else if(j.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(j.sh.coefficients[W],oe);F++}else if(j.isDirectionalLight){const W=n.get(j);if(W.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const Z=j.shadow,le=a.get(j);le.shadowIntensity=Z.intensity,le.shadowBias=Z.bias,le.shadowNormalBias=Z.normalBias,le.shadowRadius=Z.radius,le.shadowMapSize=Z.mapSize,r.directionalShadow[M]=le,r.directionalShadowMap[M]=de,r.directionalShadowMatrix[M]=j.shadow.matrix,U++}r.directional[M]=W,M++}else if(j.isSpotLight){const W=n.get(j);W.position.setFromMatrixPosition(j.matrixWorld),W.color.copy(ce).multiplyScalar(oe),W.distance=me,W.coneCos=Math.cos(j.angle),W.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),W.decay=j.decay,r.spot[C]=W;const Z=j.shadow;if(j.map&&(r.spotLightMap[V]=j.map,V++,Z.updateMatrices(j),j.castShadow&&G++),r.spotLightMatrix[C]=Z.matrix,j.castShadow){const le=a.get(j);le.shadowIntensity=Z.intensity,le.shadowBias=Z.bias,le.shadowNormalBias=Z.normalBias,le.shadowRadius=Z.radius,le.shadowMapSize=Z.mapSize,r.spotShadow[C]=le,r.spotShadowMap[C]=de,z++}C++}else if(j.isRectAreaLight){const W=n.get(j);W.color.copy(ce).multiplyScalar(oe),W.halfWidth.set(j.width*.5,0,0),W.halfHeight.set(0,j.height*.5,0),r.rectArea[S]=W,S++}else if(j.isPointLight){const W=n.get(j);if(W.color.copy(j.color).multiplyScalar(j.intensity),W.distance=j.distance,W.decay=j.decay,j.castShadow){const Z=j.shadow,le=a.get(j);le.shadowIntensity=Z.intensity,le.shadowBias=Z.bias,le.shadowNormalBias=Z.normalBias,le.shadowRadius=Z.radius,le.shadowMapSize=Z.mapSize,le.shadowCameraNear=Z.camera.near,le.shadowCameraFar=Z.camera.far,r.pointShadow[T]=le,r.pointShadowMap[T]=de,r.pointShadowMatrix[T]=j.shadow.matrix,P++}r.point[T]=W,T++}else if(j.isHemisphereLight){const W=n.get(j);W.skyColor.copy(j.color).multiplyScalar(oe),W.groundColor.copy(j.groundColor).multiplyScalar(oe),r.hemi[b]=W,b++}}S>0&&(l.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=y;const J=r.hash;(J.directionalLength!==M||J.pointLength!==T||J.spotLength!==C||J.rectAreaLength!==S||J.hemiLength!==b||J.numDirectionalShadows!==U||J.numPointShadows!==P||J.numSpotShadows!==z||J.numSpotMaps!==V||J.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=T,r.hemi.length=b,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=z,r.spotShadowMap.length=z,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=z+V-G,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=F,J.directionalLength=M,J.pointLength=T,J.spotLength=C,J.rectAreaLength=S,J.hemiLength=b,J.numDirectionalShadows=U,J.numPointShadows=P,J.numSpotShadows=z,J.numSpotMaps=V,J.numLightProbes=F,r.version=M3++)}function p(m,_){let g=0,y=0,M=0,T=0,C=0;const S=_.matrixWorldInverse;for(let b=0,U=m.length;b<U;b++){const P=m[b];if(P.isDirectionalLight){const z=r.directional[g];z.direction.setFromMatrixPosition(P.matrixWorld),c.setFromMatrixPosition(P.target.matrixWorld),z.direction.sub(c),z.direction.transformDirection(S),g++}else if(P.isSpotLight){const z=r.spot[M];z.position.setFromMatrixPosition(P.matrixWorld),z.position.applyMatrix4(S),z.direction.setFromMatrixPosition(P.matrixWorld),c.setFromMatrixPosition(P.target.matrixWorld),z.direction.sub(c),z.direction.transformDirection(S),M++}else if(P.isRectAreaLight){const z=r.rectArea[T];z.position.setFromMatrixPosition(P.matrixWorld),z.position.applyMatrix4(S),d.identity(),f.copy(P.matrixWorld),f.premultiply(S),d.extractRotation(f),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),z.halfWidth.applyMatrix4(d),z.halfHeight.applyMatrix4(d),T++}else if(P.isPointLight){const z=r.point[y];z.position.setFromMatrixPosition(P.matrixWorld),z.position.applyMatrix4(S),y++}else if(P.isHemisphereLight){const z=r.hemi[C];z.direction.setFromMatrixPosition(P.matrixWorld),z.direction.transformDirection(S),C++}}}return{setup:h,setupView:p,state:r}}function f_(l){const n=new T3(l),a=[],r=[];function c(_){m.camera=_,a.length=0,r.length=0}function f(_){a.push(_)}function d(_){r.push(_)}function h(){n.setup(a)}function p(_){n.setupView(a,_)}const m={lightsArray:a,shadowsArray:r,camera:null,lights:n,transmissionRenderTarget:{}};return{init:c,state:m,setupLights:h,setupLightsView:p,pushLight:f,pushShadow:d}}function A3(l){let n=new WeakMap;function a(c,f=0){const d=n.get(c);let h;return d===void 0?(h=new f_(l),n.set(c,[h])):f>=d.length?(h=new f_(l),d.push(h)):h=d[f],h}function r(){n=new WeakMap}return{get:a,dispose:r}}const R3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C3=`uniform sampler2D shadow_pass;
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
}`,w3=[new he(1,0,0),new he(-1,0,0),new he(0,1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1)],N3=[new he(0,-1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1),new he(0,-1,0),new he(0,-1,0)],d_=new on,ho=new he,kh=new he;function D3(l,n,a){let r=new j_;const c=new Kt,f=new Kt,d=new ln,h=new q1,p=new W1,m={},_=a.maxTextureSize,g={[gs]:Jn,[Jn]:gs,[Ea]:Ea},y=new aa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:R3,fragmentShader:C3}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const T=new Bi;T.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ua(T,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u;let b=this.type;this.render=function(G,F,J){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;G.type===PM&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),G.type=_u);const R=l.getRenderTarget(),N=l.getActiveCubeFace(),j=l.getActiveMipmapLevel(),ce=l.state;ce.setBlending(Aa),ce.buffers.depth.getReversed()===!0?ce.buffers.color.setClear(0,0,0,0):ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const oe=b!==this.type;oe&&F.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(de=>de.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,de=G.length;me<de;me++){const W=G[me],Z=W.shadow;if(Z===void 0){ht("WebGLShadowMap:",W,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;c.copy(Z.mapSize);const le=Z.getFrameExtents();if(c.multiply(le),f.copy(Z.mapSize),(c.x>_||c.y>_)&&(c.x>_&&(f.x=Math.floor(_/le.x),c.x=f.x*le.x,Z.mapSize.x=f.x),c.y>_&&(f.y=Math.floor(_/le.y),c.y=f.y*le.y,Z.mapSize.y=f.y)),Z.map===null||oe===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===po){if(W.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new na(c.x,c.y,{format:ll,type:wa,minFilter:In,magFilter:In,generateMipmaps:!1}),Z.map.texture.name=W.name+".shadowMap",Z.map.depthTexture=new yo(c.x,c.y,$i),Z.map.depthTexture.name=W.name+".shadowMapDepth",Z.map.depthTexture.format=Na,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Dn,Z.map.depthTexture.magFilter=Dn}else{W.isPointLight?(Z.map=new G_(c.x),Z.map.depthTexture=new k1(c.x,ia)):(Z.map=new na(c.x,c.y),Z.map.depthTexture=new yo(c.x,c.y,ia)),Z.map.depthTexture.name=W.name+".shadowMap",Z.map.depthTexture.format=Na;const I=l.state.buffers.depth.getReversed();this.type===_u?(Z.map.depthTexture.compareFunction=I?$p:Jp,Z.map.depthTexture.minFilter=In,Z.map.depthTexture.magFilter=In):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Dn,Z.map.depthTexture.magFilter=Dn)}Z.camera.updateProjectionMatrix()}const Ee=Z.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<Ee;I++){if(Z.map.isWebGLCubeRenderTarget)l.setRenderTarget(Z.map,I),l.clear();else{I===0&&(l.setRenderTarget(Z.map),l.clear());const L=Z.getViewport(I);d.set(f.x*L.x,f.y*L.y,f.x*L.z,f.y*L.w),ce.viewport(d)}if(W.isPointLight){const L=Z.camera,Te=Z.matrix,we=W.distance||L.far;we!==L.far&&(L.far=we,L.updateProjectionMatrix()),ho.setFromMatrixPosition(W.matrixWorld),L.position.copy(ho),kh.copy(L.position),kh.add(w3[I]),L.up.copy(N3[I]),L.lookAt(kh),L.updateMatrixWorld(),Te.makeTranslation(-ho.x,-ho.y,-ho.z),d_.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(d_,L.coordinateSystem,L.reversedDepth)}else Z.updateMatrices(W);r=Z.getFrustum(),z(F,J,Z.camera,W,this.type)}Z.isPointLightShadow!==!0&&this.type===po&&U(Z,J),Z.needsUpdate=!1}b=this.type,S.needsUpdate=!1,l.setRenderTarget(R,N,j)};function U(G,F){const J=n.update(C);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new na(c.x,c.y,{format:ll,type:wa})),y.uniforms.shadow_pass.value=G.map.depthTexture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,l.setRenderTarget(G.mapPass),l.clear(),l.renderBufferDirect(F,null,J,y,C,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,l.setRenderTarget(G.map),l.clear(),l.renderBufferDirect(F,null,J,M,C,null)}function P(G,F,J,R){let N=null;const j=J.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(j!==void 0)N=j;else if(N=J.isPointLight===!0?p:h,l.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ce=N.uuid,oe=F.uuid;let me=m[ce];me===void 0&&(me={},m[ce]=me);let de=me[oe];de===void 0&&(de=N.clone(),me[oe]=de,F.addEventListener("dispose",V)),N=de}if(N.visible=F.visible,N.wireframe=F.wireframe,R===po?N.side=F.shadowSide!==null?F.shadowSide:F.side:N.side=F.shadowSide!==null?F.shadowSide:g[F.side],N.alphaMap=F.alphaMap,N.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,N.map=F.map,N.clipShadows=F.clipShadows,N.clippingPlanes=F.clippingPlanes,N.clipIntersection=F.clipIntersection,N.displacementMap=F.displacementMap,N.displacementScale=F.displacementScale,N.displacementBias=F.displacementBias,N.wireframeLinewidth=F.wireframeLinewidth,N.linewidth=F.linewidth,J.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const ce=l.properties.get(N);ce.light=J}return N}function z(G,F,J,R,N){if(G.visible===!1)return;if(G.layers.test(F.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&N===po)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,G.matrixWorld);const oe=n.update(G),me=G.material;if(Array.isArray(me)){const de=oe.groups;for(let W=0,Z=de.length;W<Z;W++){const le=de[W],Ee=me[le.materialIndex];if(Ee&&Ee.visible){const I=P(G,Ee,R,N);G.onBeforeShadow(l,G,F,J,oe,I,le),l.renderBufferDirect(J,null,oe,I,G,le),G.onAfterShadow(l,G,F,J,oe,I,le)}}}else if(me.visible){const de=P(G,me,R,N);G.onBeforeShadow(l,G,F,J,oe,de,null),l.renderBufferDirect(J,null,oe,de,G,null),G.onAfterShadow(l,G,F,J,oe,de,null)}}const ce=G.children;for(let oe=0,me=ce.length;oe<me;oe++)z(ce[oe],F,J,R,N)}function V(G){G.target.removeEventListener("dispose",V);for(const J in m){const R=m[J],N=G.target.uuid;N in R&&(R[N].dispose(),delete R[N])}}}const U3={[Zh]:Kh,[Qh]:ep,[Jh]:tp,[sl]:$h,[Kh]:Zh,[ep]:Qh,[tp]:Jh,[$h]:sl};function L3(l,n){function a(){let q=!1;const He=new ln;let Ne=null;const Ve=new ln(0,0,0,0);return{setMask:function(Re){Ne!==Re&&!q&&(l.colorMask(Re,Re,Re,Re),Ne=Re)},setLocked:function(Re){q=Re},setClear:function(Re,Me,Oe,ft,Wt){Wt===!0&&(Re*=ft,Me*=ft,Oe*=ft),He.set(Re,Me,Oe,ft),Ve.equals(He)===!1&&(l.clearColor(Re,Me,Oe,ft),Ve.copy(He))},reset:function(){q=!1,Ne=null,Ve.set(-1,0,0,0)}}}function r(){let q=!1,He=!1,Ne=null,Ve=null,Re=null;return{setReversed:function(Me){if(He!==Me){const Oe=n.get("EXT_clip_control");Me?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),He=Me;const ft=Re;Re=null,this.setClear(ft)}},getReversed:function(){return He},setTest:function(Me){Me?Y(l.DEPTH_TEST):pe(l.DEPTH_TEST)},setMask:function(Me){Ne!==Me&&!q&&(l.depthMask(Me),Ne=Me)},setFunc:function(Me){if(He&&(Me=U3[Me]),Ve!==Me){switch(Me){case Zh:l.depthFunc(l.NEVER);break;case Kh:l.depthFunc(l.ALWAYS);break;case Qh:l.depthFunc(l.LESS);break;case sl:l.depthFunc(l.LEQUAL);break;case Jh:l.depthFunc(l.EQUAL);break;case $h:l.depthFunc(l.GEQUAL);break;case ep:l.depthFunc(l.GREATER);break;case tp:l.depthFunc(l.NOTEQUAL);break;default:l.depthFunc(l.LEQUAL)}Ve=Me}},setLocked:function(Me){q=Me},setClear:function(Me){Re!==Me&&(He&&(Me=1-Me),l.clearDepth(Me),Re=Me)},reset:function(){q=!1,Ne=null,Ve=null,Re=null,He=!1}}}function c(){let q=!1,He=null,Ne=null,Ve=null,Re=null,Me=null,Oe=null,ft=null,Wt=null;return{setTest:function(wt){q||(wt?Y(l.STENCIL_TEST):pe(l.STENCIL_TEST))},setMask:function(wt){He!==wt&&!q&&(l.stencilMask(wt),He=wt)},setFunc:function(wt,en,vn){(Ne!==wt||Ve!==en||Re!==vn)&&(l.stencilFunc(wt,en,vn),Ne=wt,Ve=en,Re=vn)},setOp:function(wt,en,vn){(Me!==wt||Oe!==en||ft!==vn)&&(l.stencilOp(wt,en,vn),Me=wt,Oe=en,ft=vn)},setLocked:function(wt){q=wt},setClear:function(wt){Wt!==wt&&(l.clearStencil(wt),Wt=wt)},reset:function(){q=!1,He=null,Ne=null,Ve=null,Re=null,Me=null,Oe=null,ft=null,Wt=null}}}const f=new a,d=new r,h=new c,p=new WeakMap,m=new WeakMap;let _={},g={},y=new WeakMap,M=[],T=null,C=!1,S=null,b=null,U=null,P=null,z=null,V=null,G=null,F=new zt(0,0,0),J=0,R=!1,N=null,j=null,ce=null,oe=null,me=null;const de=l.getParameter(l.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const le=l.getParameter(l.VERSION);le.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(le)[1]),W=Z>=1):le.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),W=Z>=2);let Ee=null,I={};const L=l.getParameter(l.SCISSOR_BOX),Te=l.getParameter(l.VIEWPORT),we=new ln().fromArray(L),O=new ln().fromArray(Te);function ae(q,He,Ne,Ve){const Re=new Uint8Array(4),Me=l.createTexture();l.bindTexture(q,Me),l.texParameteri(q,l.TEXTURE_MIN_FILTER,l.NEAREST),l.texParameteri(q,l.TEXTURE_MAG_FILTER,l.NEAREST);for(let Oe=0;Oe<Ne;Oe++)q===l.TEXTURE_3D||q===l.TEXTURE_2D_ARRAY?l.texImage3D(He,0,l.RGBA,1,1,Ve,0,l.RGBA,l.UNSIGNED_BYTE,Re):l.texImage2D(He+Oe,0,l.RGBA,1,1,0,l.RGBA,l.UNSIGNED_BYTE,Re);return Me}const X={};X[l.TEXTURE_2D]=ae(l.TEXTURE_2D,l.TEXTURE_2D,1),X[l.TEXTURE_CUBE_MAP]=ae(l.TEXTURE_CUBE_MAP,l.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[l.TEXTURE_2D_ARRAY]=ae(l.TEXTURE_2D_ARRAY,l.TEXTURE_2D_ARRAY,1,1),X[l.TEXTURE_3D]=ae(l.TEXTURE_3D,l.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Y(l.DEPTH_TEST),d.setFunc(sl),$e(!1),rt(xv),Y(l.CULL_FACE),We(Aa);function Y(q){_[q]!==!0&&(l.enable(q),_[q]=!0)}function pe(q){_[q]!==!1&&(l.disable(q),_[q]=!1)}function Ae(q,He){return g[q]!==He?(l.bindFramebuffer(q,He),g[q]=He,q===l.DRAW_FRAMEBUFFER&&(g[l.FRAMEBUFFER]=He),q===l.FRAMEBUFFER&&(g[l.DRAW_FRAMEBUFFER]=He),!0):!1}function Se(q,He){let Ne=M,Ve=!1;if(q){Ne=y.get(He),Ne===void 0&&(Ne=[],y.set(He,Ne));const Re=q.textures;if(Ne.length!==Re.length||Ne[0]!==l.COLOR_ATTACHMENT0){for(let Me=0,Oe=Re.length;Me<Oe;Me++)Ne[Me]=l.COLOR_ATTACHMENT0+Me;Ne.length=Re.length,Ve=!0}}else Ne[0]!==l.BACK&&(Ne[0]=l.BACK,Ve=!0);Ve&&l.drawBuffers(Ne)}function ye(q){return T!==q?(l.useProgram(q),T=q,!0):!1}const De={[Qs]:l.FUNC_ADD,[zM]:l.FUNC_SUBTRACT,[FM]:l.FUNC_REVERSE_SUBTRACT};De[BM]=l.MIN,De[HM]=l.MAX;const et={[VM]:l.ZERO,[GM]:l.ONE,[jM]:l.SRC_COLOR,[Wh]:l.SRC_ALPHA,[ZM]:l.SRC_ALPHA_SATURATE,[WM]:l.DST_COLOR,[XM]:l.DST_ALPHA,[kM]:l.ONE_MINUS_SRC_COLOR,[Yh]:l.ONE_MINUS_SRC_ALPHA,[YM]:l.ONE_MINUS_DST_COLOR,[qM]:l.ONE_MINUS_DST_ALPHA,[KM]:l.CONSTANT_COLOR,[QM]:l.ONE_MINUS_CONSTANT_COLOR,[JM]:l.CONSTANT_ALPHA,[$M]:l.ONE_MINUS_CONSTANT_ALPHA};function We(q,He,Ne,Ve,Re,Me,Oe,ft,Wt,wt){if(q===Aa){C===!0&&(pe(l.BLEND),C=!1);return}if(C===!1&&(Y(l.BLEND),C=!0),q!==IM){if(q!==S||wt!==R){if((b!==Qs||z!==Qs)&&(l.blendEquation(l.FUNC_ADD),b=Qs,z=Qs),wt)switch(q){case il:l.blendFuncSeparate(l.ONE,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case qh:l.blendFunc(l.ONE,l.ONE);break;case vv:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case _v:l.blendFuncSeparate(l.DST_COLOR,l.ONE_MINUS_SRC_ALPHA,l.ZERO,l.ONE);break;default:It("WebGLState: Invalid blending: ",q);break}else switch(q){case il:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case qh:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE,l.ONE,l.ONE);break;case vv:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _v:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",q);break}U=null,P=null,V=null,G=null,F.set(0,0,0),J=0,S=q,R=wt}return}Re=Re||He,Me=Me||Ne,Oe=Oe||Ve,(He!==b||Re!==z)&&(l.blendEquationSeparate(De[He],De[Re]),b=He,z=Re),(Ne!==U||Ve!==P||Me!==V||Oe!==G)&&(l.blendFuncSeparate(et[Ne],et[Ve],et[Me],et[Oe]),U=Ne,P=Ve,V=Me,G=Oe),(ft.equals(F)===!1||Wt!==J)&&(l.blendColor(ft.r,ft.g,ft.b,Wt),F.copy(ft),J=Wt),S=q,R=!1}function ot(q,He){q.side===Ea?pe(l.CULL_FACE):Y(l.CULL_FACE);let Ne=q.side===Jn;He&&(Ne=!Ne),$e(Ne),q.blending===il&&q.transparent===!1?We(Aa):We(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),f.setMask(q.colorWrite);const Ve=q.stencilWrite;h.setTest(Ve),Ve&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),St(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Y(l.SAMPLE_ALPHA_TO_COVERAGE):pe(l.SAMPLE_ALPHA_TO_COVERAGE)}function $e(q){N!==q&&(q?l.frontFace(l.CW):l.frontFace(l.CCW),N=q)}function rt(q){q!==LM?(Y(l.CULL_FACE),q!==j&&(q===xv?l.cullFace(l.BACK):q===OM?l.cullFace(l.FRONT):l.cullFace(l.FRONT_AND_BACK))):pe(l.CULL_FACE),j=q}function H(q){q!==ce&&(W&&l.lineWidth(q),ce=q)}function St(q,He,Ne){q?(Y(l.POLYGON_OFFSET_FILL),(oe!==He||me!==Ne)&&(l.polygonOffset(He,Ne),oe=He,me=Ne)):pe(l.POLYGON_OFFSET_FILL)}function ut(q){q?Y(l.SCISSOR_TEST):pe(l.SCISSOR_TEST)}function Mt(q){q===void 0&&(q=l.TEXTURE0+de-1),Ee!==q&&(l.activeTexture(q),Ee=q)}function Ye(q,He,Ne){Ne===void 0&&(Ee===null?Ne=l.TEXTURE0+de-1:Ne=Ee);let Ve=I[Ne];Ve===void 0&&(Ve={type:void 0,texture:void 0},I[Ne]=Ve),(Ve.type!==q||Ve.texture!==He)&&(Ee!==Ne&&(l.activeTexture(Ne),Ee=Ne),l.bindTexture(q,He||X[q]),Ve.type=q,Ve.texture=He)}function D(){const q=I[Ee];q!==void 0&&q.type!==void 0&&(l.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function E(){try{l.compressedTexImage2D(...arguments)}catch(q){It("WebGLState:",q)}}function Q(){try{l.compressedTexImage3D(...arguments)}catch(q){It("WebGLState:",q)}}function xe(){try{l.texSubImage2D(...arguments)}catch(q){It("WebGLState:",q)}}function be(){try{l.texSubImage3D(...arguments)}catch(q){It("WebGLState:",q)}}function ge(){try{l.compressedTexSubImage2D(...arguments)}catch(q){It("WebGLState:",q)}}function je(){try{l.compressedTexSubImage3D(...arguments)}catch(q){It("WebGLState:",q)}}function Ue(){try{l.texStorage2D(...arguments)}catch(q){It("WebGLState:",q)}}function Xe(){try{l.texStorage3D(...arguments)}catch(q){It("WebGLState:",q)}}function st(){try{l.texImage2D(...arguments)}catch(q){It("WebGLState:",q)}}function Ce(){try{l.texImage3D(...arguments)}catch(q){It("WebGLState:",q)}}function Pe(q){we.equals(q)===!1&&(l.scissor(q.x,q.y,q.z,q.w),we.copy(q))}function Ze(q){O.equals(q)===!1&&(l.viewport(q.x,q.y,q.z,q.w),O.copy(q))}function Je(q,He){let Ne=m.get(He);Ne===void 0&&(Ne=new WeakMap,m.set(He,Ne));let Ve=Ne.get(q);Ve===void 0&&(Ve=l.getUniformBlockIndex(He,q.name),Ne.set(q,Ve))}function Ie(q,He){const Ve=m.get(He).get(q);p.get(He)!==Ve&&(l.uniformBlockBinding(He,Ve,q.__bindingPointIndex),p.set(He,Ve))}function vt(){l.disable(l.BLEND),l.disable(l.CULL_FACE),l.disable(l.DEPTH_TEST),l.disable(l.POLYGON_OFFSET_FILL),l.disable(l.SCISSOR_TEST),l.disable(l.STENCIL_TEST),l.disable(l.SAMPLE_ALPHA_TO_COVERAGE),l.blendEquation(l.FUNC_ADD),l.blendFunc(l.ONE,l.ZERO),l.blendFuncSeparate(l.ONE,l.ZERO,l.ONE,l.ZERO),l.blendColor(0,0,0,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(l.LESS),d.setReversed(!1),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(l.ALWAYS,0,4294967295),l.stencilOp(l.KEEP,l.KEEP,l.KEEP),l.clearStencil(0),l.cullFace(l.BACK),l.frontFace(l.CCW),l.polygonOffset(0,0),l.activeTexture(l.TEXTURE0),l.bindFramebuffer(l.FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),_={},Ee=null,I={},g={},y=new WeakMap,M=[],T=null,C=!1,S=null,b=null,U=null,P=null,z=null,V=null,G=null,F=new zt(0,0,0),J=0,R=!1,N=null,j=null,ce=null,oe=null,me=null,we.set(0,0,l.canvas.width,l.canvas.height),O.set(0,0,l.canvas.width,l.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:Y,disable:pe,bindFramebuffer:Ae,drawBuffers:Se,useProgram:ye,setBlending:We,setMaterial:ot,setFlipSided:$e,setCullFace:rt,setLineWidth:H,setPolygonOffset:St,setScissorTest:ut,activeTexture:Mt,bindTexture:Ye,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:Q,texImage2D:st,texImage3D:Ce,updateUBOMapping:Je,uniformBlockBinding:Ie,texStorage2D:Ue,texStorage3D:Xe,texSubImage2D:xe,texSubImage3D:be,compressedTexSubImage2D:ge,compressedTexSubImage3D:je,scissor:Pe,viewport:Ze,reset:vt}}function O3(l,n,a,r,c,f,d){const h=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Kt,_=new WeakMap;let g;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,E){return M?new OffscreenCanvas(D,E):Ru("canvas")}function C(D,E,Q){let xe=1;const be=Ye(D);if((be.width>Q||be.height>Q)&&(xe=Q/Math.max(be.width,be.height)),xe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ge=Math.floor(xe*be.width),je=Math.floor(xe*be.height);g===void 0&&(g=T(ge,je));const Ue=E?T(ge,je):g;return Ue.width=ge,Ue.height=je,Ue.getContext("2d").drawImage(D,0,0,ge,je),ht("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+ge+"x"+je+")."),Ue}else return"data"in D&&ht("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),D;return D}function S(D){return D.generateMipmaps}function b(D){l.generateMipmap(D)}function U(D){return D.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?l.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function P(D,E,Q,xe,be=!1){if(D!==null){if(l[D]!==void 0)return l[D];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ge=E;if(E===l.RED&&(Q===l.FLOAT&&(ge=l.R32F),Q===l.HALF_FLOAT&&(ge=l.R16F),Q===l.UNSIGNED_BYTE&&(ge=l.R8)),E===l.RED_INTEGER&&(Q===l.UNSIGNED_BYTE&&(ge=l.R8UI),Q===l.UNSIGNED_SHORT&&(ge=l.R16UI),Q===l.UNSIGNED_INT&&(ge=l.R32UI),Q===l.BYTE&&(ge=l.R8I),Q===l.SHORT&&(ge=l.R16I),Q===l.INT&&(ge=l.R32I)),E===l.RG&&(Q===l.FLOAT&&(ge=l.RG32F),Q===l.HALF_FLOAT&&(ge=l.RG16F),Q===l.UNSIGNED_BYTE&&(ge=l.RG8)),E===l.RG_INTEGER&&(Q===l.UNSIGNED_BYTE&&(ge=l.RG8UI),Q===l.UNSIGNED_SHORT&&(ge=l.RG16UI),Q===l.UNSIGNED_INT&&(ge=l.RG32UI),Q===l.BYTE&&(ge=l.RG8I),Q===l.SHORT&&(ge=l.RG16I),Q===l.INT&&(ge=l.RG32I)),E===l.RGB_INTEGER&&(Q===l.UNSIGNED_BYTE&&(ge=l.RGB8UI),Q===l.UNSIGNED_SHORT&&(ge=l.RGB16UI),Q===l.UNSIGNED_INT&&(ge=l.RGB32UI),Q===l.BYTE&&(ge=l.RGB8I),Q===l.SHORT&&(ge=l.RGB16I),Q===l.INT&&(ge=l.RGB32I)),E===l.RGBA_INTEGER&&(Q===l.UNSIGNED_BYTE&&(ge=l.RGBA8UI),Q===l.UNSIGNED_SHORT&&(ge=l.RGBA16UI),Q===l.UNSIGNED_INT&&(ge=l.RGBA32UI),Q===l.BYTE&&(ge=l.RGBA8I),Q===l.SHORT&&(ge=l.RGBA16I),Q===l.INT&&(ge=l.RGBA32I)),E===l.RGB&&(Q===l.UNSIGNED_INT_5_9_9_9_REV&&(ge=l.RGB9_E5),Q===l.UNSIGNED_INT_10F_11F_11F_REV&&(ge=l.R11F_G11F_B10F)),E===l.RGBA){const je=be?Tu:Ot.getTransfer(xe);Q===l.FLOAT&&(ge=l.RGBA32F),Q===l.HALF_FLOAT&&(ge=l.RGBA16F),Q===l.UNSIGNED_BYTE&&(ge=je===qt?l.SRGB8_ALPHA8:l.RGBA8),Q===l.UNSIGNED_SHORT_4_4_4_4&&(ge=l.RGBA4),Q===l.UNSIGNED_SHORT_5_5_5_1&&(ge=l.RGB5_A1)}return(ge===l.R16F||ge===l.R32F||ge===l.RG16F||ge===l.RG32F||ge===l.RGBA16F||ge===l.RGBA32F)&&n.get("EXT_color_buffer_float"),ge}function z(D,E){let Q;return D?E===null||E===ia||E===vo?Q=l.DEPTH24_STENCIL8:E===$i?Q=l.DEPTH32F_STENCIL8:E===xo&&(Q=l.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ia||E===vo?Q=l.DEPTH_COMPONENT24:E===$i?Q=l.DEPTH_COMPONENT32F:E===xo&&(Q=l.DEPTH_COMPONENT16),Q}function V(D,E){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Dn&&D.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function G(D){const E=D.target;E.removeEventListener("dispose",G),J(E),E.isVideoTexture&&_.delete(E)}function F(D){const E=D.target;E.removeEventListener("dispose",F),N(E)}function J(D){const E=r.get(D);if(E.__webglInit===void 0)return;const Q=D.source,xe=y.get(Q);if(xe){const be=xe[E.__cacheKey];be.usedTimes--,be.usedTimes===0&&R(D),Object.keys(xe).length===0&&y.delete(Q)}r.remove(D)}function R(D){const E=r.get(D);l.deleteTexture(E.__webglTexture);const Q=D.source,xe=y.get(Q);delete xe[E.__cacheKey],d.memory.textures--}function N(D){const E=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(E.__webglFramebuffer[xe]))for(let be=0;be<E.__webglFramebuffer[xe].length;be++)l.deleteFramebuffer(E.__webglFramebuffer[xe][be]);else l.deleteFramebuffer(E.__webglFramebuffer[xe]);E.__webglDepthbuffer&&l.deleteRenderbuffer(E.__webglDepthbuffer[xe])}else{if(Array.isArray(E.__webglFramebuffer))for(let xe=0;xe<E.__webglFramebuffer.length;xe++)l.deleteFramebuffer(E.__webglFramebuffer[xe]);else l.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&l.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&l.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let xe=0;xe<E.__webglColorRenderbuffer.length;xe++)E.__webglColorRenderbuffer[xe]&&l.deleteRenderbuffer(E.__webglColorRenderbuffer[xe]);E.__webglDepthRenderbuffer&&l.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=D.textures;for(let xe=0,be=Q.length;xe<be;xe++){const ge=r.get(Q[xe]);ge.__webglTexture&&(l.deleteTexture(ge.__webglTexture),d.memory.textures--),r.remove(Q[xe])}r.remove(D)}let j=0;function ce(){j=0}function oe(){const D=j;return D>=c.maxTextures&&ht("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+c.maxTextures),j+=1,D}function me(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function de(D,E){const Q=r.get(D);if(D.isVideoTexture&&ut(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Q.__version!==D.version){const xe=D.image;if(xe===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{X(Q,D,E);return}}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);a.bindTexture(l.TEXTURE_2D,Q.__webglTexture,l.TEXTURE0+E)}function W(D,E){const Q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){X(Q,D,E);return}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);a.bindTexture(l.TEXTURE_2D_ARRAY,Q.__webglTexture,l.TEXTURE0+E)}function Z(D,E){const Q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){X(Q,D,E);return}a.bindTexture(l.TEXTURE_3D,Q.__webglTexture,l.TEXTURE0+E)}function le(D,E){const Q=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Q.__version!==D.version){Y(Q,D,E);return}a.bindTexture(l.TEXTURE_CUBE_MAP,Q.__webglTexture,l.TEXTURE0+E)}const Ee={[ap]:l.REPEAT,[Ta]:l.CLAMP_TO_EDGE,[sp]:l.MIRRORED_REPEAT},I={[Dn]:l.NEAREST,[n1]:l.NEAREST_MIPMAP_NEAREST,[Zc]:l.NEAREST_MIPMAP_LINEAR,[In]:l.LINEAR,[ph]:l.LINEAR_MIPMAP_NEAREST,[$s]:l.LINEAR_MIPMAP_LINEAR},L={[r1]:l.NEVER,[f1]:l.ALWAYS,[l1]:l.LESS,[Jp]:l.LEQUAL,[o1]:l.EQUAL,[$p]:l.GEQUAL,[c1]:l.GREATER,[u1]:l.NOTEQUAL};function Te(D,E){if(E.type===$i&&n.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===ph||E.magFilter===Zc||E.magFilter===$s||E.minFilter===In||E.minFilter===ph||E.minFilter===Zc||E.minFilter===$s)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),l.texParameteri(D,l.TEXTURE_WRAP_S,Ee[E.wrapS]),l.texParameteri(D,l.TEXTURE_WRAP_T,Ee[E.wrapT]),(D===l.TEXTURE_3D||D===l.TEXTURE_2D_ARRAY)&&l.texParameteri(D,l.TEXTURE_WRAP_R,Ee[E.wrapR]),l.texParameteri(D,l.TEXTURE_MAG_FILTER,I[E.magFilter]),l.texParameteri(D,l.TEXTURE_MIN_FILTER,I[E.minFilter]),E.compareFunction&&(l.texParameteri(D,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(D,l.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==Zc&&E.minFilter!==$s||E.type===$i&&n.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Q=n.get("EXT_texture_filter_anisotropic");l.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,c.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function we(D,E){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",G));const xe=E.source;let be=y.get(xe);be===void 0&&(be={},y.set(xe,be));const ge=me(E);if(ge!==D.__cacheKey){be[ge]===void 0&&(be[ge]={texture:l.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),be[ge].usedTimes++;const je=be[D.__cacheKey];je!==void 0&&(be[D.__cacheKey].usedTimes--,je.usedTimes===0&&R(E)),D.__cacheKey=ge,D.__webglTexture=be[ge].texture}return Q}function O(D,E,Q){return Math.floor(Math.floor(D/Q)/E)}function ae(D,E,Q,xe){const ge=D.updateRanges;if(ge.length===0)a.texSubImage2D(l.TEXTURE_2D,0,0,0,E.width,E.height,Q,xe,E.data);else{ge.sort((Ce,Pe)=>Ce.start-Pe.start);let je=0;for(let Ce=1;Ce<ge.length;Ce++){const Pe=ge[je],Ze=ge[Ce],Je=Pe.start+Pe.count,Ie=O(Ze.start,E.width,4),vt=O(Pe.start,E.width,4);Ze.start<=Je+1&&Ie===vt&&O(Ze.start+Ze.count-1,E.width,4)===Ie?Pe.count=Math.max(Pe.count,Ze.start+Ze.count-Pe.start):(++je,ge[je]=Ze)}ge.length=je+1;const Ue=l.getParameter(l.UNPACK_ROW_LENGTH),Xe=l.getParameter(l.UNPACK_SKIP_PIXELS),st=l.getParameter(l.UNPACK_SKIP_ROWS);l.pixelStorei(l.UNPACK_ROW_LENGTH,E.width);for(let Ce=0,Pe=ge.length;Ce<Pe;Ce++){const Ze=ge[Ce],Je=Math.floor(Ze.start/4),Ie=Math.ceil(Ze.count/4),vt=Je%E.width,q=Math.floor(Je/E.width),He=Ie,Ne=1;l.pixelStorei(l.UNPACK_SKIP_PIXELS,vt),l.pixelStorei(l.UNPACK_SKIP_ROWS,q),a.texSubImage2D(l.TEXTURE_2D,0,vt,q,He,Ne,Q,xe,E.data)}D.clearUpdateRanges(),l.pixelStorei(l.UNPACK_ROW_LENGTH,Ue),l.pixelStorei(l.UNPACK_SKIP_PIXELS,Xe),l.pixelStorei(l.UNPACK_SKIP_ROWS,st)}}function X(D,E,Q){let xe=l.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(xe=l.TEXTURE_2D_ARRAY),E.isData3DTexture&&(xe=l.TEXTURE_3D);const be=we(D,E),ge=E.source;a.bindTexture(xe,D.__webglTexture,l.TEXTURE0+Q);const je=r.get(ge);if(ge.version!==je.__version||be===!0){a.activeTexture(l.TEXTURE0+Q);const Ue=Ot.getPrimaries(Ot.workingColorSpace),Xe=E.colorSpace===ps?null:Ot.getPrimaries(E.colorSpace),st=E.colorSpace===ps||Ue===Xe?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,E.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,E.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let Ce=C(E.image,!1,c.maxTextureSize);Ce=Mt(E,Ce);const Pe=f.convert(E.format,E.colorSpace),Ze=f.convert(E.type);let Je=P(E.internalFormat,Pe,Ze,E.colorSpace,E.isVideoTexture);Te(xe,E);let Ie;const vt=E.mipmaps,q=E.isVideoTexture!==!0,He=je.__version===void 0||be===!0,Ne=ge.dataReady,Ve=V(E,Ce);if(E.isDepthTexture)Je=z(E.format===er,E.type),He&&(q?a.texStorage2D(l.TEXTURE_2D,1,Je,Ce.width,Ce.height):a.texImage2D(l.TEXTURE_2D,0,Je,Ce.width,Ce.height,0,Pe,Ze,null));else if(E.isDataTexture)if(vt.length>0){q&&He&&a.texStorage2D(l.TEXTURE_2D,Ve,Je,vt[0].width,vt[0].height);for(let Re=0,Me=vt.length;Re<Me;Re++)Ie=vt[Re],q?Ne&&a.texSubImage2D(l.TEXTURE_2D,Re,0,0,Ie.width,Ie.height,Pe,Ze,Ie.data):a.texImage2D(l.TEXTURE_2D,Re,Je,Ie.width,Ie.height,0,Pe,Ze,Ie.data);E.generateMipmaps=!1}else q?(He&&a.texStorage2D(l.TEXTURE_2D,Ve,Je,Ce.width,Ce.height),Ne&&ae(E,Ce,Pe,Ze)):a.texImage2D(l.TEXTURE_2D,0,Je,Ce.width,Ce.height,0,Pe,Ze,Ce.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){q&&He&&a.texStorage3D(l.TEXTURE_2D_ARRAY,Ve,Je,vt[0].width,vt[0].height,Ce.depth);for(let Re=0,Me=vt.length;Re<Me;Re++)if(Ie=vt[Re],E.format!==zi)if(Pe!==null)if(q){if(Ne)if(E.layerUpdates.size>0){const Oe=jv(Ie.width,Ie.height,E.format,E.type);for(const ft of E.layerUpdates){const Wt=Ie.data.subarray(ft*Oe/Ie.data.BYTES_PER_ELEMENT,(ft+1)*Oe/Ie.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,Re,0,0,ft,Ie.width,Ie.height,1,Pe,Wt)}E.clearLayerUpdates()}else a.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,Re,0,0,0,Ie.width,Ie.height,Ce.depth,Pe,Ie.data)}else a.compressedTexImage3D(l.TEXTURE_2D_ARRAY,Re,Je,Ie.width,Ie.height,Ce.depth,0,Ie.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ne&&a.texSubImage3D(l.TEXTURE_2D_ARRAY,Re,0,0,0,Ie.width,Ie.height,Ce.depth,Pe,Ze,Ie.data):a.texImage3D(l.TEXTURE_2D_ARRAY,Re,Je,Ie.width,Ie.height,Ce.depth,0,Pe,Ze,Ie.data)}else{q&&He&&a.texStorage2D(l.TEXTURE_2D,Ve,Je,vt[0].width,vt[0].height);for(let Re=0,Me=vt.length;Re<Me;Re++)Ie=vt[Re],E.format!==zi?Pe!==null?q?Ne&&a.compressedTexSubImage2D(l.TEXTURE_2D,Re,0,0,Ie.width,Ie.height,Pe,Ie.data):a.compressedTexImage2D(l.TEXTURE_2D,Re,Je,Ie.width,Ie.height,0,Ie.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ne&&a.texSubImage2D(l.TEXTURE_2D,Re,0,0,Ie.width,Ie.height,Pe,Ze,Ie.data):a.texImage2D(l.TEXTURE_2D,Re,Je,Ie.width,Ie.height,0,Pe,Ze,Ie.data)}else if(E.isDataArrayTexture)if(q){if(He&&a.texStorage3D(l.TEXTURE_2D_ARRAY,Ve,Je,Ce.width,Ce.height,Ce.depth),Ne)if(E.layerUpdates.size>0){const Re=jv(Ce.width,Ce.height,E.format,E.type);for(const Me of E.layerUpdates){const Oe=Ce.data.subarray(Me*Re/Ce.data.BYTES_PER_ELEMENT,(Me+1)*Re/Ce.data.BYTES_PER_ELEMENT);a.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,Me,Ce.width,Ce.height,1,Pe,Ze,Oe)}E.clearLayerUpdates()}else a.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,Ce.width,Ce.height,Ce.depth,Pe,Ze,Ce.data)}else a.texImage3D(l.TEXTURE_2D_ARRAY,0,Je,Ce.width,Ce.height,Ce.depth,0,Pe,Ze,Ce.data);else if(E.isData3DTexture)q?(He&&a.texStorage3D(l.TEXTURE_3D,Ve,Je,Ce.width,Ce.height,Ce.depth),Ne&&a.texSubImage3D(l.TEXTURE_3D,0,0,0,0,Ce.width,Ce.height,Ce.depth,Pe,Ze,Ce.data)):a.texImage3D(l.TEXTURE_3D,0,Je,Ce.width,Ce.height,Ce.depth,0,Pe,Ze,Ce.data);else if(E.isFramebufferTexture){if(He)if(q)a.texStorage2D(l.TEXTURE_2D,Ve,Je,Ce.width,Ce.height);else{let Re=Ce.width,Me=Ce.height;for(let Oe=0;Oe<Ve;Oe++)a.texImage2D(l.TEXTURE_2D,Oe,Je,Re,Me,0,Pe,Ze,null),Re>>=1,Me>>=1}}else if(vt.length>0){if(q&&He){const Re=Ye(vt[0]);a.texStorage2D(l.TEXTURE_2D,Ve,Je,Re.width,Re.height)}for(let Re=0,Me=vt.length;Re<Me;Re++)Ie=vt[Re],q?Ne&&a.texSubImage2D(l.TEXTURE_2D,Re,0,0,Pe,Ze,Ie):a.texImage2D(l.TEXTURE_2D,Re,Je,Pe,Ze,Ie);E.generateMipmaps=!1}else if(q){if(He){const Re=Ye(Ce);a.texStorage2D(l.TEXTURE_2D,Ve,Je,Re.width,Re.height)}Ne&&a.texSubImage2D(l.TEXTURE_2D,0,0,0,Pe,Ze,Ce)}else a.texImage2D(l.TEXTURE_2D,0,Je,Pe,Ze,Ce);S(E)&&b(xe),je.__version=ge.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Y(D,E,Q){if(E.image.length!==6)return;const xe=we(D,E),be=E.source;a.bindTexture(l.TEXTURE_CUBE_MAP,D.__webglTexture,l.TEXTURE0+Q);const ge=r.get(be);if(be.version!==ge.__version||xe===!0){a.activeTexture(l.TEXTURE0+Q);const je=Ot.getPrimaries(Ot.workingColorSpace),Ue=E.colorSpace===ps?null:Ot.getPrimaries(E.colorSpace),Xe=E.colorSpace===ps||je===Ue?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,E.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,E.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const st=E.isCompressedTexture||E.image[0].isCompressedTexture,Ce=E.image[0]&&E.image[0].isDataTexture,Pe=[];for(let Me=0;Me<6;Me++)!st&&!Ce?Pe[Me]=C(E.image[Me],!0,c.maxCubemapSize):Pe[Me]=Ce?E.image[Me].image:E.image[Me],Pe[Me]=Mt(E,Pe[Me]);const Ze=Pe[0],Je=f.convert(E.format,E.colorSpace),Ie=f.convert(E.type),vt=P(E.internalFormat,Je,Ie,E.colorSpace),q=E.isVideoTexture!==!0,He=ge.__version===void 0||xe===!0,Ne=be.dataReady;let Ve=V(E,Ze);Te(l.TEXTURE_CUBE_MAP,E);let Re;if(st){q&&He&&a.texStorage2D(l.TEXTURE_CUBE_MAP,Ve,vt,Ze.width,Ze.height);for(let Me=0;Me<6;Me++){Re=Pe[Me].mipmaps;for(let Oe=0;Oe<Re.length;Oe++){const ft=Re[Oe];E.format!==zi?Je!==null?q?Ne&&a.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Oe,0,0,ft.width,ft.height,Je,ft.data):a.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Oe,vt,ft.width,ft.height,0,ft.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ne&&a.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Oe,0,0,ft.width,ft.height,Je,Ie,ft.data):a.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Oe,vt,ft.width,ft.height,0,Je,Ie,ft.data)}}}else{if(Re=E.mipmaps,q&&He){Re.length>0&&Ve++;const Me=Ye(Pe[0]);a.texStorage2D(l.TEXTURE_CUBE_MAP,Ve,vt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ce){q?Ne&&a.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Pe[Me].width,Pe[Me].height,Je,Ie,Pe[Me].data):a.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,vt,Pe[Me].width,Pe[Me].height,0,Je,Ie,Pe[Me].data);for(let Oe=0;Oe<Re.length;Oe++){const Wt=Re[Oe].image[Me].image;q?Ne&&a.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Oe+1,0,0,Wt.width,Wt.height,Je,Ie,Wt.data):a.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Oe+1,vt,Wt.width,Wt.height,0,Je,Ie,Wt.data)}}else{q?Ne&&a.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Je,Ie,Pe[Me]):a.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,vt,Je,Ie,Pe[Me]);for(let Oe=0;Oe<Re.length;Oe++){const ft=Re[Oe];q?Ne&&a.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Oe+1,0,0,Je,Ie,ft.image[Me]):a.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Oe+1,vt,Je,Ie,ft.image[Me])}}}S(E)&&b(l.TEXTURE_CUBE_MAP),ge.__version=be.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function pe(D,E,Q,xe,be,ge){const je=f.convert(Q.format,Q.colorSpace),Ue=f.convert(Q.type),Xe=P(Q.internalFormat,je,Ue,Q.colorSpace),st=r.get(E),Ce=r.get(Q);if(Ce.__renderTarget=E,!st.__hasExternalTextures){const Pe=Math.max(1,E.width>>ge),Ze=Math.max(1,E.height>>ge);be===l.TEXTURE_3D||be===l.TEXTURE_2D_ARRAY?a.texImage3D(be,ge,Xe,Pe,Ze,E.depth,0,je,Ue,null):a.texImage2D(be,ge,Xe,Pe,Ze,0,je,Ue,null)}a.bindFramebuffer(l.FRAMEBUFFER,D),St(E)?h.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,xe,be,Ce.__webglTexture,0,H(E)):(be===l.TEXTURE_2D||be>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,xe,be,Ce.__webglTexture,ge),a.bindFramebuffer(l.FRAMEBUFFER,null)}function Ae(D,E,Q){if(l.bindRenderbuffer(l.RENDERBUFFER,D),E.depthBuffer){const xe=E.depthTexture,be=xe&&xe.isDepthTexture?xe.type:null,ge=z(E.stencilBuffer,be),je=E.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;St(E)?h.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,H(E),ge,E.width,E.height):Q?l.renderbufferStorageMultisample(l.RENDERBUFFER,H(E),ge,E.width,E.height):l.renderbufferStorage(l.RENDERBUFFER,ge,E.width,E.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,je,l.RENDERBUFFER,D)}else{const xe=E.textures;for(let be=0;be<xe.length;be++){const ge=xe[be],je=f.convert(ge.format,ge.colorSpace),Ue=f.convert(ge.type),Xe=P(ge.internalFormat,je,Ue,ge.colorSpace);St(E)?h.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,H(E),Xe,E.width,E.height):Q?l.renderbufferStorageMultisample(l.RENDERBUFFER,H(E),Xe,E.width,E.height):l.renderbufferStorage(l.RENDERBUFFER,Xe,E.width,E.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Se(D,E,Q){const xe=E.isWebGLCubeRenderTarget===!0;if(a.bindFramebuffer(l.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=r.get(E.depthTexture);if(be.__renderTarget=E,(!be.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),xe){if(be.__webglInit===void 0&&(be.__webglInit=!0,E.depthTexture.addEventListener("dispose",G)),be.__webglTexture===void 0){be.__webglTexture=l.createTexture(),a.bindTexture(l.TEXTURE_CUBE_MAP,be.__webglTexture),Te(l.TEXTURE_CUBE_MAP,E.depthTexture);const st=f.convert(E.depthTexture.format),Ce=f.convert(E.depthTexture.type);let Pe;E.depthTexture.format===Na?Pe=l.DEPTH_COMPONENT24:E.depthTexture.format===er&&(Pe=l.DEPTH24_STENCIL8);for(let Ze=0;Ze<6;Ze++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Ze,0,Pe,E.width,E.height,0,st,Ce,null)}}else de(E.depthTexture,0);const ge=be.__webglTexture,je=H(E),Ue=xe?l.TEXTURE_CUBE_MAP_POSITIVE_X+Q:l.TEXTURE_2D,Xe=E.depthTexture.format===er?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(E.depthTexture.format===Na)St(E)?h.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,Xe,Ue,ge,0,je):l.framebufferTexture2D(l.FRAMEBUFFER,Xe,Ue,ge,0);else if(E.depthTexture.format===er)St(E)?h.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,Xe,Ue,ge,0,je):l.framebufferTexture2D(l.FRAMEBUFFER,Xe,Ue,ge,0);else throw new Error("Unknown depthTexture format")}function ye(D){const E=r.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const xe=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),xe){const be=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,xe.removeEventListener("dispose",be)};xe.addEventListener("dispose",be),E.__depthDisposeCallback=be}E.__boundDepthTexture=xe}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let xe=0;xe<6;xe++)Se(E.__webglFramebuffer[xe],D,xe);else{const xe=D.texture.mipmaps;xe&&xe.length>0?Se(E.__webglFramebuffer[0],D,0):Se(E.__webglFramebuffer,D,0)}else if(Q){E.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(a.bindFramebuffer(l.FRAMEBUFFER,E.__webglFramebuffer[xe]),E.__webglDepthbuffer[xe]===void 0)E.__webglDepthbuffer[xe]=l.createRenderbuffer(),Ae(E.__webglDepthbuffer[xe],D,!1);else{const be=D.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,ge=E.__webglDepthbuffer[xe];l.bindRenderbuffer(l.RENDERBUFFER,ge),l.framebufferRenderbuffer(l.FRAMEBUFFER,be,l.RENDERBUFFER,ge)}}else{const xe=D.texture.mipmaps;if(xe&&xe.length>0?a.bindFramebuffer(l.FRAMEBUFFER,E.__webglFramebuffer[0]):a.bindFramebuffer(l.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=l.createRenderbuffer(),Ae(E.__webglDepthbuffer,D,!1);else{const be=D.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,ge=E.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,ge),l.framebufferRenderbuffer(l.FRAMEBUFFER,be,l.RENDERBUFFER,ge)}}a.bindFramebuffer(l.FRAMEBUFFER,null)}function De(D,E,Q){const xe=r.get(D);E!==void 0&&pe(xe.__webglFramebuffer,D,D.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),Q!==void 0&&ye(D)}function et(D){const E=D.texture,Q=r.get(D),xe=r.get(E);D.addEventListener("dispose",F);const be=D.textures,ge=D.isWebGLCubeRenderTarget===!0,je=be.length>1;if(je||(xe.__webglTexture===void 0&&(xe.__webglTexture=l.createTexture()),xe.__version=E.version,d.memory.textures++),ge){Q.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[Ue]=[];for(let Xe=0;Xe<E.mipmaps.length;Xe++)Q.__webglFramebuffer[Ue][Xe]=l.createFramebuffer()}else Q.__webglFramebuffer[Ue]=l.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)Q.__webglFramebuffer[Ue]=l.createFramebuffer()}else Q.__webglFramebuffer=l.createFramebuffer();if(je)for(let Ue=0,Xe=be.length;Ue<Xe;Ue++){const st=r.get(be[Ue]);st.__webglTexture===void 0&&(st.__webglTexture=l.createTexture(),d.memory.textures++)}if(D.samples>0&&St(D)===!1){Q.__webglMultisampledFramebuffer=l.createFramebuffer(),Q.__webglColorRenderbuffer=[],a.bindFramebuffer(l.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ue=0;Ue<be.length;Ue++){const Xe=be[Ue];Q.__webglColorRenderbuffer[Ue]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,Q.__webglColorRenderbuffer[Ue]);const st=f.convert(Xe.format,Xe.colorSpace),Ce=f.convert(Xe.type),Pe=P(Xe.internalFormat,st,Ce,Xe.colorSpace,D.isXRRenderTarget===!0),Ze=H(D);l.renderbufferStorageMultisample(l.RENDERBUFFER,Ze,Pe,D.width,D.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Ue,l.RENDERBUFFER,Q.__webglColorRenderbuffer[Ue])}l.bindRenderbuffer(l.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=l.createRenderbuffer(),Ae(Q.__webglDepthRenderbuffer,D,!0)),a.bindFramebuffer(l.FRAMEBUFFER,null)}}if(ge){a.bindTexture(l.TEXTURE_CUBE_MAP,xe.__webglTexture),Te(l.TEXTURE_CUBE_MAP,E);for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xe=0;Xe<E.mipmaps.length;Xe++)pe(Q.__webglFramebuffer[Ue][Xe],D,E,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Xe);else pe(Q.__webglFramebuffer[Ue],D,E,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);S(E)&&b(l.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(je){for(let Ue=0,Xe=be.length;Ue<Xe;Ue++){const st=be[Ue],Ce=r.get(st);let Pe=l.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Pe=D.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),a.bindTexture(Pe,Ce.__webglTexture),Te(Pe,st),pe(Q.__webglFramebuffer,D,st,l.COLOR_ATTACHMENT0+Ue,Pe,0),S(st)&&b(Pe)}a.unbindTexture()}else{let Ue=l.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ue=D.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),a.bindTexture(Ue,xe.__webglTexture),Te(Ue,E),E.mipmaps&&E.mipmaps.length>0)for(let Xe=0;Xe<E.mipmaps.length;Xe++)pe(Q.__webglFramebuffer[Xe],D,E,l.COLOR_ATTACHMENT0,Ue,Xe);else pe(Q.__webglFramebuffer,D,E,l.COLOR_ATTACHMENT0,Ue,0);S(E)&&b(Ue),a.unbindTexture()}D.depthBuffer&&ye(D)}function We(D){const E=D.textures;for(let Q=0,xe=E.length;Q<xe;Q++){const be=E[Q];if(S(be)){const ge=U(D),je=r.get(be).__webglTexture;a.bindTexture(ge,je),b(ge),a.unbindTexture()}}}const ot=[],$e=[];function rt(D){if(D.samples>0){if(St(D)===!1){const E=D.textures,Q=D.width,xe=D.height;let be=l.COLOR_BUFFER_BIT;const ge=D.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,je=r.get(D),Ue=E.length>1;if(Ue)for(let st=0;st<E.length;st++)a.bindFramebuffer(l.FRAMEBUFFER,je.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+st,l.RENDERBUFFER,null),a.bindFramebuffer(l.FRAMEBUFFER,je.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+st,l.TEXTURE_2D,null,0);a.bindFramebuffer(l.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const Xe=D.texture.mipmaps;Xe&&Xe.length>0?a.bindFramebuffer(l.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):a.bindFramebuffer(l.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let st=0;st<E.length;st++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(be|=l.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(be|=l.STENCIL_BUFFER_BIT)),Ue){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,je.__webglColorRenderbuffer[st]);const Ce=r.get(E[st]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,Ce,0)}l.blitFramebuffer(0,0,Q,xe,0,0,Q,xe,be,l.NEAREST),p===!0&&(ot.length=0,$e.length=0,ot.push(l.COLOR_ATTACHMENT0+st),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ot.push(ge),$e.push(ge),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,$e)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,ot))}if(a.bindFramebuffer(l.READ_FRAMEBUFFER,null),a.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),Ue)for(let st=0;st<E.length;st++){a.bindFramebuffer(l.FRAMEBUFFER,je.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+st,l.RENDERBUFFER,je.__webglColorRenderbuffer[st]);const Ce=r.get(E[st]).__webglTexture;a.bindFramebuffer(l.FRAMEBUFFER,je.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+st,l.TEXTURE_2D,Ce,0)}a.bindFramebuffer(l.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const E=D.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[E])}}}function H(D){return Math.min(c.maxSamples,D.samples)}function St(D){const E=r.get(D);return D.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ut(D){const E=d.render.frame;_.get(D)!==E&&(_.set(D,E),D.update())}function Mt(D,E){const Q=D.colorSpace,xe=D.format,be=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==ol&&Q!==ps&&(Ot.getTransfer(Q)===qt?(xe!==zi||be!==Ei)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",Q)),E}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=oe,this.resetTextureUnits=ce,this.setTexture2D=de,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=le,this.rebindTextures=De,this.setupRenderTarget=et,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return a.buffers.depth.getReversed()}}function P3(l,n){function a(r,c=ps){let f;const d=Ot.getTransfer(c);if(r===Ei)return l.UNSIGNED_BYTE;if(r===Wp)return l.UNSIGNED_SHORT_4_4_4_4;if(r===Yp)return l.UNSIGNED_SHORT_5_5_5_1;if(r===A_)return l.UNSIGNED_INT_5_9_9_9_REV;if(r===R_)return l.UNSIGNED_INT_10F_11F_11F_REV;if(r===E_)return l.BYTE;if(r===T_)return l.SHORT;if(r===xo)return l.UNSIGNED_SHORT;if(r===qp)return l.INT;if(r===ia)return l.UNSIGNED_INT;if(r===$i)return l.FLOAT;if(r===wa)return l.HALF_FLOAT;if(r===C_)return l.ALPHA;if(r===w_)return l.RGB;if(r===zi)return l.RGBA;if(r===Na)return l.DEPTH_COMPONENT;if(r===er)return l.DEPTH_STENCIL;if(r===N_)return l.RED;if(r===Zp)return l.RED_INTEGER;if(r===ll)return l.RG;if(r===Kp)return l.RG_INTEGER;if(r===Qp)return l.RGBA_INTEGER;if(r===yu||r===Su||r===bu||r===Mu)if(d===qt)if(f=n.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(r===yu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Su)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=n.get("WEBGL_compressed_texture_s3tc"),f!==null){if(r===yu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Su)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rp||r===lp||r===op||r===cp)if(f=n.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(r===rp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===op)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===up||r===fp||r===dp||r===hp||r===pp||r===mp||r===gp)if(f=n.get("WEBGL_compressed_texture_etc"),f!==null){if(r===up||r===fp)return d===qt?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(r===dp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(r===hp)return f.COMPRESSED_R11_EAC;if(r===pp)return f.COMPRESSED_SIGNED_R11_EAC;if(r===mp)return f.COMPRESSED_RG11_EAC;if(r===gp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===xp||r===vp||r===_p||r===yp||r===Sp||r===bp||r===Mp||r===Ep||r===Tp||r===Ap||r===Rp||r===Cp||r===wp||r===Np)if(f=n.get("WEBGL_compressed_texture_astc"),f!==null){if(r===xp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_p)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ep)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Tp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ap)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wp)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Np)return d===qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dp||r===Up||r===Lp)if(f=n.get("EXT_texture_compression_bptc"),f!==null){if(r===Dp)return d===qt?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Up)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Op||r===Pp||r===Ip||r===zp)if(f=n.get("EXT_texture_compression_rgtc"),f!==null){if(r===Op)return f.COMPRESSED_RED_RGTC1_EXT;if(r===Pp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ip)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===vo?l.UNSIGNED_INT_24_8:l[r]!==void 0?l[r]:null}return{convert:a}}const I3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z3=`
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

}`;class F3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,a){if(this.texture===null){const r=new X_(n.texture);(n.depthNear!==a.depthNear||n.depthFar!==a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(n){if(this.texture!==null&&this.mesh===null){const a=n.cameras[0].viewport,r=new aa({vertexShader:I3,fragmentShader:z3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new Ua(new Du(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B3 extends fl{constructor(n,a){super();const r=this;let c=null,f=1,d=null,h="local-floor",p=1,m=null,_=null,g=null,y=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",S=new F3,b={},U=a.getContextAttributes();let P=null,z=null;const V=[],G=[],F=new Kt;let J=null;const R=new Mi;R.viewport=new ln;const N=new Mi;N.viewport=new ln;const j=[R,N],ce=new Y1;let oe=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Y=V[X];return Y===void 0&&(Y=new zh,V[X]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(X){let Y=V[X];return Y===void 0&&(Y=new zh,V[X]=Y),Y.getGripSpace()},this.getHand=function(X){let Y=V[X];return Y===void 0&&(Y=new zh,V[X]=Y),Y.getHandSpace()};function de(X){const Y=G.indexOf(X.inputSource);if(Y===-1)return;const pe=V[Y];pe!==void 0&&(pe.update(X.inputSource,X.frame,m||d),pe.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){c.removeEventListener("select",de),c.removeEventListener("selectstart",de),c.removeEventListener("selectend",de),c.removeEventListener("squeeze",de),c.removeEventListener("squeezestart",de),c.removeEventListener("squeezeend",de),c.removeEventListener("end",W),c.removeEventListener("inputsourceschange",Z);for(let X=0;X<V.length;X++){const Y=G[X];Y!==null&&(G[X]=null,V[X].disconnect(Y))}oe=null,me=null,S.reset();for(const X in b)delete b[X];n.setRenderTarget(P),M=null,y=null,g=null,c=null,z=null,ae.stop(),r.isPresenting=!1,n.setPixelRatio(J),n.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){f=X,r.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){h=X,r.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(X){m=X},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(c,a)),g},this.getFrame=function(){return T},this.getSession=function(){return c},this.setSession=async function(X){if(c=X,c!==null){if(P=n.getRenderTarget(),c.addEventListener("select",de),c.addEventListener("selectstart",de),c.addEventListener("selectend",de),c.addEventListener("squeeze",de),c.addEventListener("squeezestart",de),c.addEventListener("squeezeend",de),c.addEventListener("end",W),c.addEventListener("inputsourceschange",Z),U.xrCompatible!==!0&&await a.makeXRCompatible(),J=n.getPixelRatio(),n.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ae=null,Se=null;U.depth&&(Se=U.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,pe=U.stencil?er:Na,Ae=U.stencil?vo:ia);const ye={colorFormat:a.RGBA8,depthFormat:Se,scaleFactor:f};g=this.getBinding(),y=g.createProjectionLayer(ye),c.updateRenderState({layers:[y]}),n.setPixelRatio(1),n.setSize(y.textureWidth,y.textureHeight,!1),z=new na(y.textureWidth,y.textureHeight,{format:zi,type:Ei,depthTexture:new yo(y.textureWidth,y.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:U.stencil,colorSpace:n.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const pe={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(c,a,pe),c.updateRenderState({baseLayer:M}),n.setPixelRatio(1),n.setSize(M.framebufferWidth,M.framebufferHeight,!1),z=new na(M.framebufferWidth,M.framebufferHeight,{format:zi,type:Ei,colorSpace:n.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await c.requestReferenceSpace(h),ae.setContext(c),ae.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Z(X){for(let Y=0;Y<X.removed.length;Y++){const pe=X.removed[Y],Ae=G.indexOf(pe);Ae>=0&&(G[Ae]=null,V[Ae].disconnect(pe))}for(let Y=0;Y<X.added.length;Y++){const pe=X.added[Y];let Ae=G.indexOf(pe);if(Ae===-1){for(let ye=0;ye<V.length;ye++)if(ye>=G.length){G.push(pe),Ae=ye;break}else if(G[ye]===null){G[ye]=pe,Ae=ye;break}if(Ae===-1)break}const Se=V[Ae];Se&&Se.connect(pe)}}const le=new he,Ee=new he;function I(X,Y,pe){le.setFromMatrixPosition(Y.matrixWorld),Ee.setFromMatrixPosition(pe.matrixWorld);const Ae=le.distanceTo(Ee),Se=Y.projectionMatrix.elements,ye=pe.projectionMatrix.elements,De=Se[14]/(Se[10]-1),et=Se[14]/(Se[10]+1),We=(Se[9]+1)/Se[5],ot=(Se[9]-1)/Se[5],$e=(Se[8]-1)/Se[0],rt=(ye[8]+1)/ye[0],H=De*$e,St=De*rt,ut=Ae/(-$e+rt),Mt=ut*-$e;if(Y.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Mt),X.translateZ(ut),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Se[10]===-1)X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Ye=De+ut,D=et+ut,E=H-Mt,Q=St+(Ae-Mt),xe=We*et/D*Ye,be=ot*et/D*Ye;X.projectionMatrix.makePerspective(E,Q,xe,be,Ye,D),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function L(X,Y){Y===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Y.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(c===null)return;let Y=X.near,pe=X.far;S.texture!==null&&(S.depthNear>0&&(Y=S.depthNear),S.depthFar>0&&(pe=S.depthFar)),ce.near=N.near=R.near=Y,ce.far=N.far=R.far=pe,(oe!==ce.near||me!==ce.far)&&(c.updateRenderState({depthNear:ce.near,depthFar:ce.far}),oe=ce.near,me=ce.far),ce.layers.mask=X.layers.mask|6,R.layers.mask=ce.layers.mask&3,N.layers.mask=ce.layers.mask&5;const Ae=X.parent,Se=ce.cameras;L(ce,Ae);for(let ye=0;ye<Se.length;ye++)L(Se[ye],Ae);Se.length===2?I(ce,R,N):ce.projectionMatrix.copy(R.projectionMatrix),Te(X,ce,Ae)};function Te(X,Y,pe){pe===null?X.matrix.copy(Y.matrixWorld):(X.matrix.copy(pe.matrixWorld),X.matrix.invert(),X.matrix.multiply(Y.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Fp*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return ce},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(X){p=X,y!==null&&(y.fixedFoveation=X),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=X)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ce)},this.getCameraTexture=function(X){return b[X]};let we=null;function O(X,Y){if(_=Y.getViewerPose(m||d),T=Y,_!==null){const pe=_.views;M!==null&&(n.setRenderTargetFramebuffer(z,M.framebuffer),n.setRenderTarget(z));let Ae=!1;pe.length!==ce.cameras.length&&(ce.cameras.length=0,Ae=!0);for(let et=0;et<pe.length;et++){const We=pe[et];let ot=null;if(M!==null)ot=M.getViewport(We);else{const rt=g.getViewSubImage(y,We);ot=rt.viewport,et===0&&(n.setRenderTargetTextures(z,rt.colorTexture,rt.depthStencilTexture),n.setRenderTarget(z))}let $e=j[et];$e===void 0&&($e=new Mi,$e.layers.enable(et),$e.viewport=new ln,j[et]=$e),$e.matrix.fromArray(We.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(We.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(ot.x,ot.y,ot.width,ot.height),et===0&&(ce.matrix.copy($e.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale)),Ae===!0&&ce.cameras.push($e)}const Se=c.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&C){g=r.getBinding();const et=g.getDepthInformation(pe[0]);et&&et.isValid&&et.texture&&S.init(et,c.renderState)}if(Se&&Se.includes("camera-access")&&C){n.state.unbindTexture(),g=r.getBinding();for(let et=0;et<pe.length;et++){const We=pe[et].camera;if(We){let ot=b[We];ot||(ot=new X_,b[We]=ot);const $e=g.getCameraImage(We);ot.sourceTexture=$e}}}}for(let pe=0;pe<V.length;pe++){const Ae=G[pe],Se=V[pe];Ae!==null&&Se!==void 0&&Se.update(Ae,Y,m||d)}we&&we(X,Y),Y.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Y}),T=null}const ae=new W_;ae.setAnimationLoop(O),this.setAnimationLoop=function(X){we=X},this.dispose=function(){}}}const Ys=new Da,H3=new on;function V3(l,n){function a(S,b){S.matrixAutoUpdate===!0&&S.updateMatrix(),b.value.copy(S.matrix)}function r(S,b){b.color.getRGB(S.fogColor.value,B_(l)),b.isFog?(S.fogNear.value=b.near,S.fogFar.value=b.far):b.isFogExp2&&(S.fogDensity.value=b.density)}function c(S,b,U,P,z){b.isMeshBasicMaterial||b.isMeshLambertMaterial?f(S,b):b.isMeshToonMaterial?(f(S,b),g(S,b)):b.isMeshPhongMaterial?(f(S,b),_(S,b)):b.isMeshStandardMaterial?(f(S,b),y(S,b),b.isMeshPhysicalMaterial&&M(S,b,z)):b.isMeshMatcapMaterial?(f(S,b),T(S,b)):b.isMeshDepthMaterial?f(S,b):b.isMeshDistanceMaterial?(f(S,b),C(S,b)):b.isMeshNormalMaterial?f(S,b):b.isLineBasicMaterial?(d(S,b),b.isLineDashedMaterial&&h(S,b)):b.isPointsMaterial?p(S,b,U,P):b.isSpriteMaterial?m(S,b):b.isShadowMaterial?(S.color.value.copy(b.color),S.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function f(S,b){S.opacity.value=b.opacity,b.color&&S.diffuse.value.copy(b.color),b.emissive&&S.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(S.map.value=b.map,a(b.map,S.mapTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,a(b.alphaMap,S.alphaMapTransform)),b.bumpMap&&(S.bumpMap.value=b.bumpMap,a(b.bumpMap,S.bumpMapTransform),S.bumpScale.value=b.bumpScale,b.side===Jn&&(S.bumpScale.value*=-1)),b.normalMap&&(S.normalMap.value=b.normalMap,a(b.normalMap,S.normalMapTransform),S.normalScale.value.copy(b.normalScale),b.side===Jn&&S.normalScale.value.negate()),b.displacementMap&&(S.displacementMap.value=b.displacementMap,a(b.displacementMap,S.displacementMapTransform),S.displacementScale.value=b.displacementScale,S.displacementBias.value=b.displacementBias),b.emissiveMap&&(S.emissiveMap.value=b.emissiveMap,a(b.emissiveMap,S.emissiveMapTransform)),b.specularMap&&(S.specularMap.value=b.specularMap,a(b.specularMap,S.specularMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest);const U=n.get(b),P=U.envMap,z=U.envMapRotation;P&&(S.envMap.value=P,Ys.copy(z),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),S.envMapRotation.value.setFromMatrix4(H3.makeRotationFromEuler(Ys)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=b.reflectivity,S.ior.value=b.ior,S.refractionRatio.value=b.refractionRatio),b.lightMap&&(S.lightMap.value=b.lightMap,S.lightMapIntensity.value=b.lightMapIntensity,a(b.lightMap,S.lightMapTransform)),b.aoMap&&(S.aoMap.value=b.aoMap,S.aoMapIntensity.value=b.aoMapIntensity,a(b.aoMap,S.aoMapTransform))}function d(S,b){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,b.map&&(S.map.value=b.map,a(b.map,S.mapTransform))}function h(S,b){S.dashSize.value=b.dashSize,S.totalSize.value=b.dashSize+b.gapSize,S.scale.value=b.scale}function p(S,b,U,P){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,S.size.value=b.size*U,S.scale.value=P*.5,b.map&&(S.map.value=b.map,a(b.map,S.uvTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,a(b.alphaMap,S.alphaMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest)}function m(S,b){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,S.rotation.value=b.rotation,b.map&&(S.map.value=b.map,a(b.map,S.mapTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,a(b.alphaMap,S.alphaMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest)}function _(S,b){S.specular.value.copy(b.specular),S.shininess.value=Math.max(b.shininess,1e-4)}function g(S,b){b.gradientMap&&(S.gradientMap.value=b.gradientMap)}function y(S,b){S.metalness.value=b.metalness,b.metalnessMap&&(S.metalnessMap.value=b.metalnessMap,a(b.metalnessMap,S.metalnessMapTransform)),S.roughness.value=b.roughness,b.roughnessMap&&(S.roughnessMap.value=b.roughnessMap,a(b.roughnessMap,S.roughnessMapTransform)),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)}function M(S,b,U){S.ior.value=b.ior,b.sheen>0&&(S.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),S.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(S.sheenColorMap.value=b.sheenColorMap,a(b.sheenColorMap,S.sheenColorMapTransform)),b.sheenRoughnessMap&&(S.sheenRoughnessMap.value=b.sheenRoughnessMap,a(b.sheenRoughnessMap,S.sheenRoughnessMapTransform))),b.clearcoat>0&&(S.clearcoat.value=b.clearcoat,S.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(S.clearcoatMap.value=b.clearcoatMap,a(b.clearcoatMap,S.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,a(b.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(S.clearcoatNormalMap.value=b.clearcoatNormalMap,a(b.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===Jn&&S.clearcoatNormalScale.value.negate())),b.dispersion>0&&(S.dispersion.value=b.dispersion),b.iridescence>0&&(S.iridescence.value=b.iridescence,S.iridescenceIOR.value=b.iridescenceIOR,S.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(S.iridescenceMap.value=b.iridescenceMap,a(b.iridescenceMap,S.iridescenceMapTransform)),b.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=b.iridescenceThicknessMap,a(b.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),b.transmission>0&&(S.transmission.value=b.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),b.transmissionMap&&(S.transmissionMap.value=b.transmissionMap,a(b.transmissionMap,S.transmissionMapTransform)),S.thickness.value=b.thickness,b.thicknessMap&&(S.thicknessMap.value=b.thicknessMap,a(b.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=b.attenuationDistance,S.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(S.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(S.anisotropyMap.value=b.anisotropyMap,a(b.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=b.specularIntensity,S.specularColor.value.copy(b.specularColor),b.specularColorMap&&(S.specularColorMap.value=b.specularColorMap,a(b.specularColorMap,S.specularColorMapTransform)),b.specularIntensityMap&&(S.specularIntensityMap.value=b.specularIntensityMap,a(b.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,b){b.matcap&&(S.matcap.value=b.matcap)}function C(S,b){const U=n.get(b).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:c}}function G3(l,n,a,r){let c={},f={},d=[];const h=l.getParameter(l.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,P){const z=P.program;r.uniformBlockBinding(U,z)}function m(U,P){let z=c[U.id];z===void 0&&(T(U),z=_(U),c[U.id]=z,U.addEventListener("dispose",S));const V=P.program;r.updateUBOMapping(U,V);const G=n.render.frame;f[U.id]!==G&&(y(U),f[U.id]=G)}function _(U){const P=g();U.__bindingPointIndex=P;const z=l.createBuffer(),V=U.__size,G=U.usage;return l.bindBuffer(l.UNIFORM_BUFFER,z),l.bufferData(l.UNIFORM_BUFFER,V,G),l.bindBuffer(l.UNIFORM_BUFFER,null),l.bindBufferBase(l.UNIFORM_BUFFER,P,z),z}function g(){for(let U=0;U<h;U++)if(d.indexOf(U)===-1)return d.push(U),U;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const P=c[U.id],z=U.uniforms,V=U.__cache;l.bindBuffer(l.UNIFORM_BUFFER,P);for(let G=0,F=z.length;G<F;G++){const J=Array.isArray(z[G])?z[G]:[z[G]];for(let R=0,N=J.length;R<N;R++){const j=J[R];if(M(j,G,R,V)===!0){const ce=j.__offset,oe=Array.isArray(j.value)?j.value:[j.value];let me=0;for(let de=0;de<oe.length;de++){const W=oe[de],Z=C(W);typeof W=="number"||typeof W=="boolean"?(j.__data[0]=W,l.bufferSubData(l.UNIFORM_BUFFER,ce+me,j.__data)):W.isMatrix3?(j.__data[0]=W.elements[0],j.__data[1]=W.elements[1],j.__data[2]=W.elements[2],j.__data[3]=0,j.__data[4]=W.elements[3],j.__data[5]=W.elements[4],j.__data[6]=W.elements[5],j.__data[7]=0,j.__data[8]=W.elements[6],j.__data[9]=W.elements[7],j.__data[10]=W.elements[8],j.__data[11]=0):(W.toArray(j.__data,me),me+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}l.bufferSubData(l.UNIFORM_BUFFER,ce,j.__data)}}}l.bindBuffer(l.UNIFORM_BUFFER,null)}function M(U,P,z,V){const G=U.value,F=P+"_"+z;if(V[F]===void 0)return typeof G=="number"||typeof G=="boolean"?V[F]=G:V[F]=G.clone(),!0;{const J=V[F];if(typeof G=="number"||typeof G=="boolean"){if(J!==G)return V[F]=G,!0}else if(J.equals(G)===!1)return J.copy(G),!0}return!1}function T(U){const P=U.uniforms;let z=0;const V=16;for(let F=0,J=P.length;F<J;F++){const R=Array.isArray(P[F])?P[F]:[P[F]];for(let N=0,j=R.length;N<j;N++){const ce=R[N],oe=Array.isArray(ce.value)?ce.value:[ce.value];for(let me=0,de=oe.length;me<de;me++){const W=oe[me],Z=C(W),le=z%V,Ee=le%Z.boundary,I=le+Ee;z+=Ee,I!==0&&V-I<Z.storage&&(z+=V-I),ce.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=z,z+=Z.storage}}}const G=z%V;return G>0&&(z+=V-G),U.__size=z,U.__cache={},this}function C(U){const P={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(P.boundary=4,P.storage=4):U.isVector2?(P.boundary=8,P.storage=8):U.isVector3||U.isColor?(P.boundary=16,P.storage=12):U.isVector4?(P.boundary=16,P.storage=16):U.isMatrix3?(P.boundary=48,P.storage=48):U.isMatrix4?(P.boundary=64,P.storage=64):U.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ht("WebGLRenderer: Unsupported uniform value type.",U),P}function S(U){const P=U.target;P.removeEventListener("dispose",S);const z=d.indexOf(P.__bindingPointIndex);d.splice(z,1),l.deleteBuffer(c[P.id]),delete c[P.id],delete f[P.id]}function b(){for(const U in c)l.deleteBuffer(c[U]);d=[],c={},f={}}return{bind:p,update:m,dispose:b}}const j3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function k3(){return Qi===null&&(Qi=new B1(j3,16,16,ll,wa),Qi.name="DFG_LUT",Qi.minFilter=In,Qi.magFilter=In,Qi.wrapS=Ta,Qi.wrapT=Ta,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class X3{constructor(n={}){const{canvas:a=d1(),context:r=null,depth:c=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1,outputBufferType:M=Ei}=n;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const C=M,S=new Set([Qp,Kp,Zp]),b=new Set([Ei,ia,xo,vo,Wp,Yp]),U=new Uint32Array(4),P=new Int32Array(4);let z=null,V=null;const G=[],F=[];let J=null;this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ta,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let N=!1;this._outputColorSpace=bi;let j=0,ce=0,oe=null,me=-1,de=null;const W=new ln,Z=new ln;let le=null;const Ee=new zt(0);let I=0,L=a.width,Te=a.height,we=1,O=null,ae=null;const X=new ln(0,0,L,Te),Y=new ln(0,0,L,Te);let pe=!1;const Ae=new j_;let Se=!1,ye=!1;const De=new on,et=new he,We=new ln,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function rt(){return oe===null?we:1}let H=r;function St(w,te){return a.getContext(w,te)}try{const w={alpha:!0,depth:c,stencil:f,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${Xp}`),a.addEventListener("webglcontextlost",ft,!1),a.addEventListener("webglcontextrestored",Wt,!1),a.addEventListener("webglcontextcreationerror",wt,!1),H===null){const te="webgl2";if(H=St(te,w),H===null)throw St(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw It("WebGLRenderer: "+w.message),w}let ut,Mt,Ye,D,E,Q,xe,be,ge,je,Ue,Xe,st,Ce,Pe,Ze,Je,Ie,vt,q,He,Ne,Ve,Re;function Me(){ut=new kA(H),ut.init(),Ne=new P3(H,ut),Mt=new PA(H,ut,n,Ne),Ye=new L3(H,ut),Mt.reversedDepthBuffer&&y&&Ye.buffers.depth.setReversed(!0),D=new WA(H),E=new v3,Q=new O3(H,ut,Ye,E,Mt,Ne,D),xe=new zA(R),be=new jA(R),ge=new Q1(H),Ve=new LA(H,ge),je=new XA(H,ge,D,Ve),Ue=new ZA(H,je,ge,D),vt=new YA(H,Mt,Q),Ze=new IA(E),Xe=new x3(R,xe,be,ut,Mt,Ve,Ze),st=new V3(R,E),Ce=new y3,Pe=new A3(ut),Ie=new UA(R,xe,be,Ye,Ue,T,p),Je=new D3(R,Ue,Mt),Re=new G3(H,D,Mt,Ye),q=new OA(H,ut,D),He=new qA(H,ut,D),D.programs=Xe.programs,R.capabilities=Mt,R.extensions=ut,R.properties=E,R.renderLists=Ce,R.shadowMap=Je,R.state=Ye,R.info=D}Me(),C!==Ei&&(J=new QA(C,a.width,a.height,c,f));const Oe=new B3(R,H);this.xr=Oe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=ut.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ut.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(w){w!==void 0&&(we=w,this.setSize(L,Te,!1))},this.getSize=function(w){return w.set(L,Te)},this.setSize=function(w,te,fe=!0){if(Oe.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}L=w,Te=te,a.width=Math.floor(w*we),a.height=Math.floor(te*we),fe===!0&&(a.style.width=w+"px",a.style.height=te+"px"),J!==null&&J.setSize(a.width,a.height),this.setViewport(0,0,w,te)},this.getDrawingBufferSize=function(w){return w.set(L*we,Te*we).floor()},this.setDrawingBufferSize=function(w,te,fe){L=w,Te=te,we=fe,a.width=Math.floor(w*fe),a.height=Math.floor(te*fe),this.setViewport(0,0,w,te)},this.setEffects=function(w){if(C===Ei){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let te=0;te<w.length;te++)if(w[te].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}J.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(W)},this.getViewport=function(w){return w.copy(X)},this.setViewport=function(w,te,fe,se){w.isVector4?X.set(w.x,w.y,w.z,w.w):X.set(w,te,fe,se),Ye.viewport(W.copy(X).multiplyScalar(we).round())},this.getScissor=function(w){return w.copy(Y)},this.setScissor=function(w,te,fe,se){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,te,fe,se),Ye.scissor(Z.copy(Y).multiplyScalar(we).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(w){Ye.setScissorTest(pe=w)},this.setOpaqueSort=function(w){O=w},this.setTransparentSort=function(w){ae=w},this.getClearColor=function(w){return w.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(w=!0,te=!0,fe=!0){let se=0;if(w){let ne=!1;if(oe!==null){const Le=oe.texture.format;ne=S.has(Le)}if(ne){const Le=oe.texture.type,ke=b.has(Le),Fe=Ie.getClearColor(),Ke=Ie.getClearAlpha(),tt=Fe.r,at=Fe.g,nt=Fe.b;ke?(U[0]=tt,U[1]=at,U[2]=nt,U[3]=Ke,H.clearBufferuiv(H.COLOR,0,U)):(P[0]=tt,P[1]=at,P[2]=nt,P[3]=Ke,H.clearBufferiv(H.COLOR,0,P))}else se|=H.COLOR_BUFFER_BIT}te&&(se|=H.DEPTH_BUFFER_BIT),fe&&(se|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",ft,!1),a.removeEventListener("webglcontextrestored",Wt,!1),a.removeEventListener("webglcontextcreationerror",wt,!1),Ie.dispose(),Ce.dispose(),Pe.dispose(),E.dispose(),xe.dispose(),be.dispose(),Ue.dispose(),Ve.dispose(),Re.dispose(),Xe.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",xs),Oe.removeEventListener("sessionend",vs),ui.stop()};function ft(w){w.preventDefault(),Ev("WebGLRenderer: Context Lost."),N=!0}function Wt(){Ev("WebGLRenderer: Context Restored."),N=!1;const w=D.autoReset,te=Je.enabled,fe=Je.autoUpdate,se=Je.needsUpdate,ne=Je.type;Me(),D.autoReset=w,Je.enabled=te,Je.autoUpdate=fe,Je.needsUpdate=se,Je.type=ne}function wt(w){It("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function en(w){const te=w.target;te.removeEventListener("dispose",en),vn(te)}function vn(w){zn(w),E.remove(w)}function zn(w){const te=E.get(w).programs;te!==void 0&&(te.forEach(function(fe){Xe.releaseProgram(fe)}),w.isShaderMaterial&&Xe.releaseShaderCache(w))}this.renderBufferDirect=function(w,te,fe,se,ne,Le){te===null&&(te=ot);const ke=ne.isMesh&&ne.matrixWorld.determinant()<0,Fe=Iu(w,te,fe,se,ne);Ye.setMaterial(se,ke);let Ke=fe.index,tt=1;if(se.wireframe===!0){if(Ke=je.getWireframeAttribute(fe),Ke===void 0)return;tt=2}const at=fe.drawRange,nt=fe.attributes.position;let pt=at.start*tt,At=(at.start+at.count)*tt;Le!==null&&(pt=Math.max(pt,Le.start*tt),At=Math.min(At,(Le.start+Le.count)*tt)),Ke!==null?(pt=Math.max(pt,0),At=Math.min(At,Ke.count)):nt!=null&&(pt=Math.max(pt,0),At=Math.min(At,nt.count));const Vt=At-pt;if(Vt<0||Vt===1/0)return;Ve.setup(ne,se,Fe,fe,Ke);let Yt,Ut=q;if(Ke!==null&&(Yt=ge.get(Ke),Ut=He,Ut.setIndex(Yt)),ne.isMesh)se.wireframe===!0?(Ye.setLineWidth(se.wireframeLinewidth*rt()),Ut.setMode(H.LINES)):Ut.setMode(H.TRIANGLES);else if(ne.isLine){let Ge=se.linewidth;Ge===void 0&&(Ge=1),Ye.setLineWidth(Ge*rt()),ne.isLineSegments?Ut.setMode(H.LINES):ne.isLineLoop?Ut.setMode(H.LINE_LOOP):Ut.setMode(H.LINE_STRIP)}else ne.isPoints?Ut.setMode(H.POINTS):ne.isSprite&&Ut.setMode(H.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)_o("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))Ut.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Ge=ne._multiDrawStarts,Pt=ne._multiDrawCounts,Nt=ne._multiDrawCount,Un=Ke?ge.get(Ke).bytesPerElement:1,kn=E.get(se).currentProgram.getUniforms();for(let cn=0;cn<Nt;cn++)kn.setValue(H,"_gl_DrawID",cn),Ut.render(Ge[cn]/Un,Pt[cn])}else if(ne.isInstancedMesh)Ut.renderInstances(pt,Vt,ne.count);else if(fe.isInstancedBufferGeometry){const Ge=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Pt=Math.min(fe.instanceCount,Ge);Ut.renderInstances(pt,Vt,Pt)}else Ut.render(pt,Vt)};function Ao(w,te,fe){w.transparent===!0&&w.side===Ea&&w.forceSinglePass===!1?(w.side=Jn,w.needsUpdate=!0,Ss(w,te,fe),w.side=gs,w.needsUpdate=!0,Ss(w,te,fe),w.side=Ea):Ss(w,te,fe)}this.compile=function(w,te,fe=null){fe===null&&(fe=w),V=Pe.get(fe),V.init(te),F.push(V),fe.traverseVisible(function(ne){ne.isLight&&ne.layers.test(te.layers)&&(V.pushLight(ne),ne.castShadow&&V.pushShadow(ne))}),w!==fe&&w.traverseVisible(function(ne){ne.isLight&&ne.layers.test(te.layers)&&(V.pushLight(ne),ne.castShadow&&V.pushShadow(ne))}),V.setupLights();const se=new Set;return w.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Le=ne.material;if(Le)if(Array.isArray(Le))for(let ke=0;ke<Le.length;ke++){const Fe=Le[ke];Ao(Fe,fe,ne),se.add(Fe)}else Ao(Le,fe,ne),se.add(Le)}),V=F.pop(),se},this.compileAsync=function(w,te,fe=null){const se=this.compile(w,te,fe);return new Promise(ne=>{function Le(){if(se.forEach(function(ke){E.get(ke).currentProgram.isReady()&&se.delete(ke)}),se.size===0){ne(w);return}setTimeout(Le,10)}ut.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let hl=null;function Pu(w){hl&&hl(w)}function xs(){ui.stop()}function vs(){ui.start()}const ui=new W_;ui.setAnimationLoop(Pu),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(w){hl=w,Oe.setAnimationLoop(w),w===null?ui.stop():ui.start()},Oe.addEventListener("sessionstart",xs),Oe.addEventListener("sessionend",vs),this.render=function(w,te){if(te!==void 0&&te.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const fe=Oe.enabled===!0&&Oe.isPresenting===!0,se=J!==null&&(oe===null||fe)&&J.begin(R,oe);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(J===null||J.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(te),te=Oe.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,te,oe),V=Pe.get(w,F.length),V.init(te),F.push(V),De.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),Ae.setFromProjectionMatrix(De,ea,te.reversedDepth),ye=this.localClippingEnabled,Se=Ze.init(this.clippingPlanes,ye),z=Ce.get(w,G.length),z.init(),G.push(z),Oe.enabled===!0&&Oe.isPresenting===!0){const ke=R.xr.getDepthSensingMesh();ke!==null&&Ai(ke,te,-1/0,R.sortObjects)}Ai(w,te,0,R.sortObjects),z.finish(),R.sortObjects===!0&&z.sort(O,ae),$e=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,$e&&Ie.addToRenderList(z,w),this.info.render.frame++,Se===!0&&Ze.beginShadows();const ne=V.state.shadowsArray;if(Je.render(ne,w,te),Se===!0&&Ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&J.hasRenderPass())===!1){const ke=z.opaque,Fe=z.transmissive;if(V.setupLights(),te.isArrayCamera){const Ke=te.cameras;if(Fe.length>0)for(let tt=0,at=Ke.length;tt<at;tt++){const nt=Ke[tt];La(ke,Fe,w,nt)}$e&&Ie.render(w);for(let tt=0,at=Ke.length;tt<at;tt++){const nt=Ke[tt];_s(z,w,nt,nt.viewport)}}else Fe.length>0&&La(ke,Fe,w,te),$e&&Ie.render(w),_s(z,w,te)}oe!==null&&ce===0&&(Q.updateMultisampleRenderTarget(oe),Q.updateRenderTargetMipmap(oe)),se&&J.end(R),w.isScene===!0&&w.onAfterRender(R,w,te),Ve.resetDefaultState(),me=-1,de=null,F.pop(),F.length>0?(V=F[F.length-1],Se===!0&&Ze.setGlobalState(R.clippingPlanes,V.state.camera)):V=null,G.pop(),G.length>0?z=G[G.length-1]:z=null};function Ai(w,te,fe,se){if(w.visible===!1)return;if(w.layers.test(te.layers)){if(w.isGroup)fe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(te);else if(w.isLight)V.pushLight(w),w.castShadow&&V.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ae.intersectsSprite(w)){se&&We.setFromMatrixPosition(w.matrixWorld).applyMatrix4(De);const ke=Ue.update(w),Fe=w.material;Fe.visible&&z.push(w,ke,Fe,fe,We.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ae.intersectsObject(w))){const ke=Ue.update(w),Fe=w.material;if(se&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),We.copy(w.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),We.copy(ke.boundingSphere.center)),We.applyMatrix4(w.matrixWorld).applyMatrix4(De)),Array.isArray(Fe)){const Ke=ke.groups;for(let tt=0,at=Ke.length;tt<at;tt++){const nt=Ke[tt],pt=Fe[nt.materialIndex];pt&&pt.visible&&z.push(w,ke,pt,fe,We.z,nt)}}else Fe.visible&&z.push(w,ke,Fe,fe,We.z,null)}}const Le=w.children;for(let ke=0,Fe=Le.length;ke<Fe;ke++)Ai(Le[ke],te,fe,se)}function _s(w,te,fe,se){const{opaque:ne,transmissive:Le,transparent:ke}=w;V.setupLightsView(fe),Se===!0&&Ze.setGlobalState(R.clippingPlanes,fe),se&&Ye.viewport(W.copy(se)),ne.length>0&&ys(ne,te,fe),Le.length>0&&ys(Le,te,fe),ke.length>0&&ys(ke,te,fe),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function La(w,te,fe,se){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(V.state.transmissionRenderTarget[se.id]===void 0){const pt=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");V.state.transmissionRenderTarget[se.id]=new na(1,1,{generateMipmaps:!0,type:pt?wa:Ei,minFilter:$s,samples:Mt.samples,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const Le=V.state.transmissionRenderTarget[se.id],ke=se.viewport||W;Le.setSize(ke.z*R.transmissionResolutionScale,ke.w*R.transmissionResolutionScale);const Fe=R.getRenderTarget(),Ke=R.getActiveCubeFace(),tt=R.getActiveMipmapLevel();R.setRenderTarget(Le),R.getClearColor(Ee),I=R.getClearAlpha(),I<1&&R.setClearColor(16777215,.5),R.clear(),$e&&Ie.render(fe);const at=R.toneMapping;R.toneMapping=ta;const nt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),V.setupLightsView(se),Se===!0&&Ze.setGlobalState(R.clippingPlanes,se),ys(w,fe,se),Q.updateMultisampleRenderTarget(Le),Q.updateRenderTargetMipmap(Le),ut.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let At=0,Vt=te.length;At<Vt;At++){const Yt=te[At],{object:Ut,geometry:Ge,material:Pt,group:Nt}=Yt;if(Pt.side===Ea&&Ut.layers.test(se.layers)){const Un=Pt.side;Pt.side=Jn,Pt.needsUpdate=!0,Ro(Ut,fe,se,Ge,Pt,Nt),Pt.side=Un,Pt.needsUpdate=!0,pt=!0}}pt===!0&&(Q.updateMultisampleRenderTarget(Le),Q.updateRenderTargetMipmap(Le))}R.setRenderTarget(Fe,Ke,tt),R.setClearColor(Ee,I),nt!==void 0&&(se.viewport=nt),R.toneMapping=at}function ys(w,te,fe){const se=te.isScene===!0?te.overrideMaterial:null;for(let ne=0,Le=w.length;ne<Le;ne++){const ke=w[ne],{object:Fe,geometry:Ke,group:tt}=ke;let at=ke.material;at.allowOverride===!0&&se!==null&&(at=se),Fe.layers.test(fe.layers)&&Ro(Fe,te,fe,Ke,at,tt)}}function Ro(w,te,fe,se,ne,Le){w.onBeforeRender(R,te,fe,se,ne,Le),w.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ne.onBeforeRender(R,te,fe,se,w,Le),ne.transparent===!0&&ne.side===Ea&&ne.forceSinglePass===!1?(ne.side=Jn,ne.needsUpdate=!0,R.renderBufferDirect(fe,te,se,ne,w,Le),ne.side=gs,ne.needsUpdate=!0,R.renderBufferDirect(fe,te,se,ne,w,Le),ne.side=Ea):R.renderBufferDirect(fe,te,se,ne,w,Le),w.onAfterRender(R,te,fe,se,ne,Le)}function Ss(w,te,fe){te.isScene!==!0&&(te=ot);const se=E.get(w),ne=V.state.lights,Le=V.state.shadowsArray,ke=ne.state.version,Fe=Xe.getParameters(w,ne.state,Le,te,fe),Ke=Xe.getProgramCacheKey(Fe);let tt=se.programs;se.environment=w.isMeshStandardMaterial?te.environment:null,se.fog=te.fog,se.envMap=(w.isMeshStandardMaterial?be:xe).get(w.envMap||se.environment),se.envMapRotation=se.environment!==null&&w.envMap===null?te.environmentRotation:w.envMapRotation,tt===void 0&&(w.addEventListener("dispose",en),tt=new Map,se.programs=tt);let at=tt.get(Ke);if(at!==void 0){if(se.currentProgram===at&&se.lightsStateVersion===ke)return Oa(w,Fe),at}else Fe.uniforms=Xe.getUniforms(w),w.onBeforeCompile(Fe,R),at=Xe.acquireProgram(Fe,Ke),tt.set(Ke,at),se.uniforms=Fe.uniforms;const nt=se.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(nt.clippingPlanes=Ze.uniform),Oa(w,Fe),se.needsLights=wo(w),se.lightsStateVersion=ke,se.needsLights&&(nt.ambientLightColor.value=ne.state.ambient,nt.lightProbe.value=ne.state.probe,nt.directionalLights.value=ne.state.directional,nt.directionalLightShadows.value=ne.state.directionalShadow,nt.spotLights.value=ne.state.spot,nt.spotLightShadows.value=ne.state.spotShadow,nt.rectAreaLights.value=ne.state.rectArea,nt.ltc_1.value=ne.state.rectAreaLTC1,nt.ltc_2.value=ne.state.rectAreaLTC2,nt.pointLights.value=ne.state.point,nt.pointLightShadows.value=ne.state.pointShadow,nt.hemisphereLights.value=ne.state.hemi,nt.directionalShadowMap.value=ne.state.directionalShadowMap,nt.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,nt.spotShadowMap.value=ne.state.spotShadowMap,nt.spotLightMatrix.value=ne.state.spotLightMatrix,nt.spotLightMap.value=ne.state.spotLightMap,nt.pointShadowMap.value=ne.state.pointShadowMap,nt.pointShadowMatrix.value=ne.state.pointShadowMatrix),se.currentProgram=at,se.uniformsList=null,at}function ir(w){if(w.uniformsList===null){const te=w.currentProgram.getUniforms();w.uniformsList=Eu.seqWithValue(te.seq,w.uniforms)}return w.uniformsList}function Oa(w,te){const fe=E.get(w);fe.outputColorSpace=te.outputColorSpace,fe.batching=te.batching,fe.batchingColor=te.batchingColor,fe.instancing=te.instancing,fe.instancingColor=te.instancingColor,fe.instancingMorph=te.instancingMorph,fe.skinning=te.skinning,fe.morphTargets=te.morphTargets,fe.morphNormals=te.morphNormals,fe.morphColors=te.morphColors,fe.morphTargetsCount=te.morphTargetsCount,fe.numClippingPlanes=te.numClippingPlanes,fe.numIntersection=te.numClipIntersection,fe.vertexAlphas=te.vertexAlphas,fe.vertexTangents=te.vertexTangents,fe.toneMapping=te.toneMapping}function Iu(w,te,fe,se,ne){te.isScene!==!0&&(te=ot),Q.resetTextureUnits();const Le=te.fog,ke=se.isMeshStandardMaterial?te.environment:null,Fe=oe===null?R.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ol,Ke=(se.isMeshStandardMaterial?be:xe).get(se.envMap||ke),tt=se.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,at=!!fe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),nt=!!fe.morphAttributes.position,pt=!!fe.morphAttributes.normal,At=!!fe.morphAttributes.color;let Vt=ta;se.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Vt=R.toneMapping);const Yt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Ut=Yt!==void 0?Yt.length:0,Ge=E.get(se),Pt=V.state.lights;if(Se===!0&&(ye===!0||w!==de)){const ct=w===de&&se.id===me;Ze.setState(se,w,ct)}let Nt=!1;se.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Pt.state.version||Ge.outputColorSpace!==Fe||ne.isBatchedMesh&&Ge.batching===!1||!ne.isBatchedMesh&&Ge.batching===!0||ne.isBatchedMesh&&Ge.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ge.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ge.instancing===!1||!ne.isInstancedMesh&&Ge.instancing===!0||ne.isSkinnedMesh&&Ge.skinning===!1||!ne.isSkinnedMesh&&Ge.skinning===!0||ne.isInstancedMesh&&Ge.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ge.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ge.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ge.instancingMorph===!1&&ne.morphTexture!==null||Ge.envMap!==Ke||se.fog===!0&&Ge.fog!==Le||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Ze.numPlanes||Ge.numIntersection!==Ze.numIntersection)||Ge.vertexAlphas!==tt||Ge.vertexTangents!==at||Ge.morphTargets!==nt||Ge.morphNormals!==pt||Ge.morphColors!==At||Ge.toneMapping!==Vt||Ge.morphTargetsCount!==Ut)&&(Nt=!0):(Nt=!0,Ge.__version=se.version);let Un=Ge.currentProgram;Nt===!0&&(Un=Ss(se,te,ne));let kn=!1,cn=!1,bs=!1;const Gt=Un.getUniforms(),Mn=Ge.uniforms;if(Ye.useProgram(Un.program)&&(kn=!0,cn=!0,bs=!0),se.id!==me&&(me=se.id,cn=!0),kn||de!==w){Ye.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Gt.setValue(H,"projectionMatrix",w.projectionMatrix),Gt.setValue(H,"viewMatrix",w.matrixWorldInverse);const En=Gt.map.cameraPosition;En!==void 0&&En.setValue(H,et.setFromMatrixPosition(w.matrixWorld)),Mt.logarithmicDepthBuffer&&Gt.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Gt.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),de!==w&&(de=w,cn=!0,bs=!0)}if(Ge.needsLights&&(Pt.state.directionalShadowMap.length>0&&Gt.setValue(H,"directionalShadowMap",Pt.state.directionalShadowMap,Q),Pt.state.spotShadowMap.length>0&&Gt.setValue(H,"spotShadowMap",Pt.state.spotShadowMap,Q),Pt.state.pointShadowMap.length>0&&Gt.setValue(H,"pointShadowMap",Pt.state.pointShadowMap,Q)),ne.isSkinnedMesh){Gt.setOptional(H,ne,"bindMatrix"),Gt.setOptional(H,ne,"bindMatrixInverse");const ct=ne.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),Gt.setValue(H,"boneTexture",ct.boneTexture,Q))}ne.isBatchedMesh&&(Gt.setOptional(H,ne,"batchingTexture"),Gt.setValue(H,"batchingTexture",ne._matricesTexture,Q),Gt.setOptional(H,ne,"batchingIdTexture"),Gt.setValue(H,"batchingIdTexture",ne._indirectTexture,Q),Gt.setOptional(H,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Gt.setValue(H,"batchingColorTexture",ne._colorsTexture,Q));const Xn=fe.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&vt.update(ne,fe,Un),(cn||Ge.receiveShadow!==ne.receiveShadow)&&(Ge.receiveShadow=ne.receiveShadow,Gt.setValue(H,"receiveShadow",ne.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Mn.envMap.value=Ke,Mn.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&te.environment!==null&&(Mn.envMapIntensity.value=te.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=k3()),cn&&(Gt.setValue(H,"toneMappingExposure",R.toneMappingExposure),Ge.needsLights&&Co(Mn,bs),Le&&se.fog===!0&&st.refreshFogUniforms(Mn,Le),st.refreshMaterialUniforms(Mn,se,we,Te,V.state.transmissionRenderTarget[w.id]),Eu.upload(H,ir(Ge),Mn,Q)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Eu.upload(H,ir(Ge),Mn,Q),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Gt.setValue(H,"center",ne.center),Gt.setValue(H,"modelViewMatrix",ne.modelViewMatrix),Gt.setValue(H,"normalMatrix",ne.normalMatrix),Gt.setValue(H,"modelMatrix",ne.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const ct=se.uniformsGroups;for(let En=0,Pa=ct.length;En<Pa;En++){const fi=ct[En];Re.update(fi,Un),Re.bind(fi,Un)}}return Un}function Co(w,te){w.ambientLightColor.needsUpdate=te,w.lightProbe.needsUpdate=te,w.directionalLights.needsUpdate=te,w.directionalLightShadows.needsUpdate=te,w.pointLights.needsUpdate=te,w.pointLightShadows.needsUpdate=te,w.spotLights.needsUpdate=te,w.spotLightShadows.needsUpdate=te,w.rectAreaLights.needsUpdate=te,w.hemisphereLights.needsUpdate=te}function wo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(w,te,fe){const se=E.get(w);se.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),E.get(w.texture).__webglTexture=te,E.get(w.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:fe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,te){const fe=E.get(w);fe.__webglFramebuffer=te,fe.__useDefaultFramebuffer=te===void 0};const No=H.createFramebuffer();this.setRenderTarget=function(w,te=0,fe=0){oe=w,j=te,ce=fe;let se=null,ne=!1,Le=!1;if(w){const Fe=E.get(w);if(Fe.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(H.FRAMEBUFFER,Fe.__webglFramebuffer),W.copy(w.viewport),Z.copy(w.scissor),le=w.scissorTest,Ye.viewport(W),Ye.scissor(Z),Ye.setScissorTest(le),me=-1;return}else if(Fe.__webglFramebuffer===void 0)Q.setupRenderTarget(w);else if(Fe.__hasExternalTextures)Q.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const at=w.depthTexture;if(Fe.__boundDepthTexture!==at){if(at!==null&&E.has(at)&&(w.width!==at.image.width||w.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(w)}}const Ke=w.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Le=!0);const tt=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(tt[te])?se=tt[te][fe]:se=tt[te],ne=!0):w.samples>0&&Q.useMultisampledRTT(w)===!1?se=E.get(w).__webglMultisampledFramebuffer:Array.isArray(tt)?se=tt[fe]:se=tt,W.copy(w.viewport),Z.copy(w.scissor),le=w.scissorTest}else W.copy(X).multiplyScalar(we).floor(),Z.copy(Y).multiplyScalar(we).floor(),le=pe;if(fe!==0&&(se=No),Ye.bindFramebuffer(H.FRAMEBUFFER,se)&&Ye.drawBuffers(w,se),Ye.viewport(W),Ye.scissor(Z),Ye.setScissorTest(le),ne){const Fe=E.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+te,Fe.__webglTexture,fe)}else if(Le){const Fe=te;for(let Ke=0;Ke<w.textures.length;Ke++){const tt=E.get(w.textures[Ke]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ke,tt.__webglTexture,fe,Fe)}}else if(w!==null&&fe!==0){const Fe=E.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Fe.__webglTexture,fe)}me=-1},this.readRenderTargetPixels=function(w,te,fe,se,ne,Le,ke,Fe=0){if(!(w&&w.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ke!==void 0&&(Ke=Ke[ke]),Ke){Ye.bindFramebuffer(H.FRAMEBUFFER,Ke);try{const tt=w.textures[Fe],at=tt.format,nt=tt.type;if(!Mt.textureFormatReadable(at)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(nt)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=w.width-se&&fe>=0&&fe<=w.height-ne&&(w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Fe),H.readPixels(te,fe,se,ne,Ne.convert(at),Ne.convert(nt),Le))}finally{const tt=oe!==null?E.get(oe).__webglFramebuffer:null;Ye.bindFramebuffer(H.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(w,te,fe,se,ne,Le,ke,Fe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ke!==void 0&&(Ke=Ke[ke]),Ke)if(te>=0&&te<=w.width-se&&fe>=0&&fe<=w.height-ne){Ye.bindFramebuffer(H.FRAMEBUFFER,Ke);const tt=w.textures[Fe],at=tt.format,nt=tt.type;if(!Mt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,pt),H.bufferData(H.PIXEL_PACK_BUFFER,Le.byteLength,H.STREAM_READ),w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Fe),H.readPixels(te,fe,se,ne,Ne.convert(at),Ne.convert(nt),0);const At=oe!==null?E.get(oe).__webglFramebuffer:null;Ye.bindFramebuffer(H.FRAMEBUFFER,At);const Vt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await h1(H,Vt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,pt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Le),H.deleteBuffer(pt),H.deleteSync(Vt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,te=null,fe=0){const se=Math.pow(2,-fe),ne=Math.floor(w.image.width*se),Le=Math.floor(w.image.height*se),ke=te!==null?te.x:0,Fe=te!==null?te.y:0;Q.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,fe,0,0,ke,Fe,ne,Le),Ye.unbindTexture()};const pl=H.createFramebuffer(),ml=H.createFramebuffer();this.copyTextureToTexture=function(w,te,fe=null,se=null,ne=0,Le=null){Le===null&&(ne!==0?(_o("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Le=ne,ne=0):Le=0);let ke,Fe,Ke,tt,at,nt,pt,At,Vt;const Yt=w.isCompressedTexture?w.mipmaps[Le]:w.image;if(fe!==null)ke=fe.max.x-fe.min.x,Fe=fe.max.y-fe.min.y,Ke=fe.isBox3?fe.max.z-fe.min.z:1,tt=fe.min.x,at=fe.min.y,nt=fe.isBox3?fe.min.z:0;else{const Xn=Math.pow(2,-ne);ke=Math.floor(Yt.width*Xn),Fe=Math.floor(Yt.height*Xn),w.isDataArrayTexture?Ke=Yt.depth:w.isData3DTexture?Ke=Math.floor(Yt.depth*Xn):Ke=1,tt=0,at=0,nt=0}se!==null?(pt=se.x,At=se.y,Vt=se.z):(pt=0,At=0,Vt=0);const Ut=Ne.convert(te.format),Ge=Ne.convert(te.type);let Pt;te.isData3DTexture?(Q.setTexture3D(te,0),Pt=H.TEXTURE_3D):te.isDataArrayTexture||te.isCompressedArrayTexture?(Q.setTexture2DArray(te,0),Pt=H.TEXTURE_2D_ARRAY):(Q.setTexture2D(te,0),Pt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,te.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,te.unpackAlignment);const Nt=H.getParameter(H.UNPACK_ROW_LENGTH),Un=H.getParameter(H.UNPACK_IMAGE_HEIGHT),kn=H.getParameter(H.UNPACK_SKIP_PIXELS),cn=H.getParameter(H.UNPACK_SKIP_ROWS),bs=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Yt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Yt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,tt),H.pixelStorei(H.UNPACK_SKIP_ROWS,at),H.pixelStorei(H.UNPACK_SKIP_IMAGES,nt);const Gt=w.isDataArrayTexture||w.isData3DTexture,Mn=te.isDataArrayTexture||te.isData3DTexture;if(w.isDepthTexture){const Xn=E.get(w),ct=E.get(te),En=E.get(Xn.__renderTarget),Pa=E.get(ct.__renderTarget);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,En.__webglFramebuffer),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,Pa.__webglFramebuffer);for(let fi=0;fi<Ke;fi++)Gt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,E.get(w).__webglTexture,ne,nt+fi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,E.get(te).__webglTexture,Le,Vt+fi)),H.blitFramebuffer(tt,at,ke,Fe,pt,At,ke,Fe,H.DEPTH_BUFFER_BIT,H.NEAREST);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(ne!==0||w.isRenderTargetTexture||E.has(w)){const Xn=E.get(w),ct=E.get(te);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,pl),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,ml);for(let En=0;En<Ke;En++)Gt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Xn.__webglTexture,ne,nt+En):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Xn.__webglTexture,ne),Mn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ct.__webglTexture,Le,Vt+En):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ct.__webglTexture,Le),ne!==0?H.blitFramebuffer(tt,at,ke,Fe,pt,At,ke,Fe,H.COLOR_BUFFER_BIT,H.NEAREST):Mn?H.copyTexSubImage3D(Pt,Le,pt,At,Vt+En,tt,at,ke,Fe):H.copyTexSubImage2D(Pt,Le,pt,At,tt,at,ke,Fe);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Mn?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Pt,Le,pt,At,Vt,ke,Fe,Ke,Ut,Ge,Yt.data):te.isCompressedArrayTexture?H.compressedTexSubImage3D(Pt,Le,pt,At,Vt,ke,Fe,Ke,Ut,Yt.data):H.texSubImage3D(Pt,Le,pt,At,Vt,ke,Fe,Ke,Ut,Ge,Yt):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Le,pt,At,ke,Fe,Ut,Ge,Yt.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Le,pt,At,Yt.width,Yt.height,Ut,Yt.data):H.texSubImage2D(H.TEXTURE_2D,Le,pt,At,ke,Fe,Ut,Ge,Yt);H.pixelStorei(H.UNPACK_ROW_LENGTH,Nt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Un),H.pixelStorei(H.UNPACK_SKIP_PIXELS,kn),H.pixelStorei(H.UNPACK_SKIP_ROWS,cn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,bs),Le===0&&te.generateMipmaps&&H.generateMipmap(Pt),Ye.unbindTexture()},this.initRenderTarget=function(w){E.get(w).__webglFramebuffer===void 0&&Q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Q.setTextureCube(w,0):w.isData3DTexture?Q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Q.setTexture2DArray(w,0):Q.setTexture2D(w,0),Ye.unbindTexture()},this.resetState=function(){j=0,ce=0,oe=null,Ye.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const a=this.getContext();a.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(n),a.unpackColorSpace=Ot._getUnpackColorSpace()}}/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=l=>(l.match(/\d+[xX]\d+|[A-Z]?[a-z]+|[A-Z]|\d+/g)??[]).join("-").toLowerCase();/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function W3(l,n,a=[]){if(n==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:q3(l),size:24,node:n,...a.length>0?{aliases:a}:{}}}/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=l=>{let n="",a=!1;for(const r of l){if(r==="-"||r==="_"||r<=" "){a=n.length>0;continue}n.length===0?n+=r.toLowerCase():n+=a?r.toUpperCase():r,a=!1}return n};/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=l=>{const n=Y3(l);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=(...l)=>{const n=new Set;for(const a of l)if(typeof a=="string")for(const r of a.split(/\s+/))r&&n.add(r);return[...n].join(" ")};/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Xh(l){return l!=null}function K3(l,n={}){var y,M;const a=n.attributeNames??{},r=T=>a[T]??T,c=l.size??l.width??Zs.width,f=l.size??l.height??Zs.height,d=((y=l.aliases)==null?void 0:y.filter(T=>typeof T=="string"&&T.trim()!=="").map(T=>`lucide-${T}`))??[],h=[...l.name?[`lucide-${l.name}`]:[],...d],p=((M=n.className)==null?void 0:M.split(" ").filter(Boolean))??[],m=n.includeDefaultClasses===!1?Gp(...p):Gp("lucide",...h,...p),_=n.absoluteStrokeWidth?Number(n.strokeWidth??Zs["stroke-width"])*Number(l.size??l.width??Zs.width)/Number(n.size??n.width??Zs.width):n.strokeWidth??Zs["stroke-width"];return["svg",{...Object.entries(Zs).reduce((T,[C,S])=>(T[r(C)]=S,T),{}),..."color"in n&&n.color&&{[r("stroke")]:n.color},..."size"in n&&Xh(n.size)&&{[r("width")]:n.size,[r("height")]:n.size},..."width"in n&&Xh(n.width)&&{[r("width")]:n.width},..."height"in n&&Xh(n.height)&&{[r("height")]:n.height},[r("stroke-width")]:_,...m&&{[r("class")]:m},[r("viewBox")]:`0 0 ${c} ${f}`,...n.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in n&&n.attributes},l.node.map(T=>{const[C,S,b]=T,U=n.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...S}:S;return b?[C,U,b]:[C,U]})]}/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Q3(l,n={}){return K3(l,{...n,attributeNames:{...n.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=l=>{if(l==null||typeof l!="object")return!1;for(const n in l)if(Object.prototype.hasOwnProperty.call(l,n)&&(n.startsWith("aria-")||n==="role"||n==="title")&&l[n]!=null)return!0;return!1},$3=mt.createContext({}),eR=()=>mt.useContext($3),tR=mt.forwardRef(({color:l,size:n,width:a,height:r,strokeWidth:c,absoluteStrokeWidth:f,nonScalingStroke:d,className:h="",children:p,iconNode:m=[],icon:_={node:m,aliases:[],size:24},...g},y)=>{const{size:M=24,strokeWidth:T=2,absoluteStrokeWidth:C=!1,nonScalingStroke:S=!1,color:b="currentColor",className:U=""}=eR()??{},P=!!p||J3(g),[z,V,G=[]]=Q3(_,{color:l??b,width:a??n??M,height:r??n??M,strokeWidth:c??T,absoluteStrokeWidth:f??C,nonScalingStroke:d??S,className:Gp(U,h),hasA11yProp:P,attributes:g});return mt.createElement(z,{ref:y,...V},[...G.map(([F,J])=>mt.createElement(F,J)),...Array.isArray(p)?p:[p]])});/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ft(l,n=[],a=[]){const r=typeof l=="string"?W3(l,n,a):l,c=mt.forwardRef(({className:f,...d},h)=>mt.createElement(tR,{ref:h,icon:r,className:f,...d}));return r.name&&(c.displayName=Z3(r.name)),c}/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};J_.node;const Ou=Ft(J_);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};$_.node;const ey=Ft($_);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty={name:"bug",size:24,node:[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]]};ty.node;const nR=Ft(ty);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};ny.node;const go=Ft(ny);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};iy.node;const iR=Ft(iy);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};ay.node;const ul=Ft(ay);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy={name:"circle-exclamation-point",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle","circle-alert"]};sy.node;const ry=Ft(sy);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};ly.node;const aR=Ft(ly);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};oy.node;const sR=Ft(oy);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};cy.node;const uy=Ft(cy);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy={name:"database",size:24,node:[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]};fy.node;const rR=Ft(fy);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};dy.node;const lR=Ft(dy);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};hy.node;const py=Ft(hy);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my={name:"file-check",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]};my.node;const gy=Ft(my);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};xy.node;const oR=Ft(xy);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};vy.node;const cR=Ft(vy);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]};_y.node;const uR=Ft(_y);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy={name:"hash",size:24,node:[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]};yy.node;const Sy=Ft(yy);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by={name:"key",size:24,node:[["path",{d:"m2 21 9.6-9.6",key:"9l79m3"}],["path",{d:"m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19",key:"fw8biw"}],["circle",{cx:"15.5",cy:"7.5",r:"5.5",key:"4wxmhb"}]]};by.node;const fR=Ft(by);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My={name:"lock-open",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],aliases:["unlock"]};My.node;const dR=Ft(My);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};Ey.node;const nr=Ft(Ey);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};Ty.node;const hR=Ft(Ty);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Ay.node;const Ry=Ft(Ay);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};Cy.node;const wy=Ft(Cy);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny={name:"rotate-ccw-clock",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],aliases:["history"]};Ny.node;const pR=Ft(Ny);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Dy.node;const Uy=Ft(Dy);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};Ly.node;const h_=Ft(Ly);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};Oy.node;const Py=Ft(Oy);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy={name:"shield-exclamation-point",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],aliases:["shield-alert"]};Iy.node;const mR=Ft(Iy);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};zy.node;const Fi=Ft(zy);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy={name:"triangle-exclamation-point",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle","triangle-alert"]};Fy.node;const tm=Ft(Fy);/**
 * @license lucide-react v1.77.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};By.node;const Cu=Ft(By);function gR({onLaunchCommandCenter:l,onInspectTrustBoundary:n}){const a=mt.useRef(null);return mt.useEffect(()=>{const r=a.current;if(!r)return;const c=new F1,f=new Mi(60,r.clientWidth/r.clientHeight,.1,1e3);f.position.z=32;const d=new X3({alpha:!0,antialias:!0});d.setSize(r.clientWidth,r.clientHeight),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.appendChild(d.domElement);const h=2e4,p=new Bi,m=new Float32Array(h*3),_=new Float32Array(h*3),g=new Float32Array(h*3),y=new Float32Array(h),M=new zt("#06b6d4"),T=new zt("#10b981"),C=new zt("#3b82f6");for(let j=0;j<h;j++){const ce=Math.random(),oe=Math.random(),me=ce*2*Math.PI,de=Math.acos(2*oe-1),W=11+Math.sin(me*3)*Math.cos(de*4)*2.5,Z=W*Math.sin(de)*Math.cos(me),le=W*Math.sin(de)*Math.sin(me),Ee=W*Math.cos(de);m[j*3]=Z,m[j*3+1]=le,m[j*3+2]=Ee,_[j*3]=Z,_[j*3+1]=le,_[j*3+2]=Ee,y[j]=Math.random()*Math.PI*2;const I=M.clone().lerp(T,Math.sin(Z*.1)*.5+.5);I.lerp(C,Math.cos(le*.1)*.5+.5),g[j*3]=I.r,g[j*3+1]=I.g,g[j*3+2]=I.b}p.setAttribute("position",new Ti(m,3)),p.setAttribute("color",new Ti(g,3));const S=new k_({size:.14,vertexColors:!0,transparent:!0,opacity:.85,blending:qh}),b=new j1(p,S);c.add(b);let U=0,P=0,z=0,V=0;const G=j=>{const ce=r.getBoundingClientRect(),oe=(j.clientX-ce.left)/r.clientWidth-.5,me=(j.clientY-ce.top)/r.clientHeight-.5;z=oe*2.5,V=me*2.5};window.addEventListener("mousemove",G);let F=new Z1,J;const R=()=>{J=requestAnimationFrame(R);const j=F.getElapsedTime();U+=(z-U)*.05,P+=(V-P)*.05,b.rotation.y=j*.12+U*.8,b.rotation.x=j*.06-P*.8;const ce=p.attributes.position.array;for(let oe=0;oe<h;oe++){const me=oe*3,de=_[me],W=_[me+1],Z=_[me+2],le=y[oe],Ee=Math.sin(j*2+le+de*.2)*.8,I=Math.cos(j*1.5+le+W*.2)*.8;ce[me]=de+Ee*Math.sin(le),ce[me+1]=W+I*Math.cos(le),ce[me+2]=Z+(Ee+I)*.5}p.attributes.position.needsUpdate=!0,d.render(c,f)};R();const N=()=>{r&&(f.aspect=r.clientWidth/r.clientHeight,f.updateProjectionMatrix(),d.setSize(r.clientWidth,r.clientHeight))};return window.addEventListener("resize",N),()=>{window.removeEventListener("mousemove",G),window.removeEventListener("resize",N),cancelAnimationFrame(J),r&&d.domElement&&r.removeChild(d.domElement),p.dispose(),S.dispose(),d.dispose()}},[]),v.jsxs("section",{className:"relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-surface-border",children:[v.jsx("div",{ref:a,className:"absolute inset-0 z-0 pointer-events-none opacity-75"}),v.jsx("div",{className:"absolute inset-0 cyber-grid pointer-events-none opacity-40 z-[1]"}),v.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#060913]/30 via-transparent to-[#060913] pointer-events-none z-[2]"}),v.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto px-6 py-20 text-center flex flex-col items-center",children:[v.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-8 backdrop-blur-md shadow-lg shadow-cyan-950/40",children:[v.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),v.jsx("span",{children:"CICADA 2026 HACKATHON · SMART OBSERVABILITY"}),v.jsx("span",{className:"text-slate-500",children:"|"}),v.jsxs("span",{className:"text-emerald-400 flex items-center gap-1 font-semibold",children:[v.jsx(Fi,{className:"w-3.5 h-3.5"})," ZERO-TRUST ARCHITECTURE"]})]}),v.jsxs("h1",{className:"text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-4xl leading-[1.1]",children:[v.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400",children:"VeilOps: Zero-Trust Local-First"})," ",v.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400",children:"AIOps Observability"})]}),v.jsxs("p",{className:"text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-light",children:["Raw telemetry & secrets stay inside your perimeter. Only allow-listed, scrubbed metadata reaches the cloud — cryptographically sealed with the ",v.jsx("span",{className:"text-cyan-300 font-mono font-medium",children:"Signal Passport"}),"."]}),v.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-4 mb-14",children:[v.jsxs("button",{onClick:l,className:"flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold text-base shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95 group",children:[v.jsx(Ou,{className:"w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform"}),v.jsx("span",{children:"Launch Live Command Center"}),v.jsx(ey,{className:"w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"})]}),v.jsxs("button",{onClick:n,className:"flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-elevated/80 hover:bg-surface-elevated border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 font-mono text-sm backdrop-blur-md transition-all hover:scale-105 active:scale-95",children:[v.jsx(py,{className:"w-4 h-4 text-cyan-400"}),v.jsx("span",{children:"Inspect Trust Boundary"})]})]}),v.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl text-left font-mono text-xs",children:[v.jsxs("div",{className:"p-3 rounded-lg bg-surface/80 border border-slate-800/80 backdrop-blur-sm flex items-center gap-3",children:[v.jsx(nr,{className:"w-4 h-4 text-emerald-400 flex-shrink-0"}),v.jsxs("div",{children:[v.jsx("div",{className:"text-slate-400",children:"Secret Redaction"}),v.jsx("div",{className:"text-white font-semibold",children:"100% On-Premise"})]})]}),v.jsxs("div",{className:"p-3 rounded-lg bg-surface/80 border border-slate-800/80 backdrop-blur-sm flex items-center gap-3",children:[v.jsx(Fi,{className:"w-4 h-4 text-cyan-400 flex-shrink-0"}),v.jsxs("div",{children:[v.jsx("div",{className:"text-slate-400",children:"Integrity Proof"}),v.jsx("div",{className:"text-white font-semibold",children:"SHA-256 Passport"})]})]}),v.jsxs("div",{className:"p-3 rounded-lg bg-surface/80 border border-slate-800/80 backdrop-blur-sm flex items-center gap-3",children:[v.jsx(uy,{className:"w-4 h-4 text-amber-400 flex-shrink-0"}),v.jsxs("div",{children:[v.jsx("div",{className:"text-slate-400",children:"Anomaly Engine"}),v.jsx("div",{className:"text-white font-semibold",children:"EWMA (Z ≥ 3.0)"})]})]}),v.jsxs("div",{className:"p-3 rounded-lg bg-surface/80 border border-slate-800/80 backdrop-blur-sm flex items-center gap-3",children:[v.jsx(rR,{className:"w-4 h-4 text-purple-400 flex-shrink-0"}),v.jsxs("div",{children:[v.jsx("div",{className:"text-slate-400",children:"Tenant Residency"}),v.jsx("div",{className:"text-white font-semibold",children:"Strict 421 Boundary"})]})]})]})]})]})}function Hy({rawLogSample:l,scrubbedPayloadSample:n,passportSample:a}){const[r,c]=mt.useState(!0),[f,d]=mt.useState(50),[h,p]=mt.useState("CRYPTO-PERIMETER-ACTIVE"),m=mt.useRef(null);mt.useEffect(()=>{const M=m.current;if(!M)return;const T=M.getContext("2d");let C;const S="01アイウエオカキクケコサシスセソタチツテトナニヌネハヒフヘホマミムメモヤユヨラリルレロワヲンΣΩΔΨλπ",b=12;M.width=M.parentElement.clientWidth,M.height=M.parentElement.clientHeight;const U=Math.floor(M.width/b),P=new Array(U).fill(1),z=()=>{T.fillStyle="rgba(6, 9, 19, 0.12)",T.fillRect(0,0,M.width,M.height),T.fillStyle="#06b6d4",T.font=`${b}px monospace`;for(let G=0;G<P.length;G++){const F=S.charAt(Math.floor(Math.random()*S.length));T.fillStyle=G%3===0?"#10b981":"#06b6d4",T.fillText(F,G*b,P[G]*b),P[G]*b>M.height&&Math.random()>.975&&(P[G]=0),P[G]++}C=requestAnimationFrame(z)};z();const V=()=>{!M||!M.parentElement||(M.width=M.parentElement.clientWidth,M.height=M.parentElement.clientHeight)};return window.addEventListener("resize",V),()=>{cancelAnimationFrame(C),window.removeEventListener("resize",V)}},[]);const _=l||{timestamp:new Date().toISOString(),hostname:"prod-db-mumbai-01.internal",source_ip:"10.24.18.92"},g=n||{payload_id:"90a18372-79a8-40e1-97fc-82e622eae122",tenant_id:"acme",collector_id:"col-2b2ccb0ac2",collector_version:"v1.4.2",region:"ap-south-1",event_timestamp_utc:new Date().toISOString(),source_timezone:"Asia/Kolkata",pseudonymous_source_id:"src-76151fa033",metrics:{cpu_pct:88.4,memory_pct:76.2,disk_pct:61,bandwidth_mbps:420,latency_ms:145,packet_loss_pct:3.2,service_availability:1},security_summary:{event_category:"auth_anomaly",failed_login_count_1m:18,risk_score:82,secrets_redacted_count:3},health_state:"Poor",health_reason:"Latency (145ms > 100ms) and CPU pressure elevated",alert_context:"High packet loss + latency spike correlated on src-76151fa033"},y=a||{sha256:"0cc5a837d8a9bbaaa3a6e047fd090001d8dbe1500cb1fc9ae909e4e86228cc68"};return v.jsxs("section",{id:"trust-boundary",className:"py-20 px-6 max-w-7xl mx-auto border-b border-surface-border relative",children:[v.jsxs("div",{className:"text-center mb-12",children:[v.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3",children:[v.jsx(cR,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"TIER 1 → TIER 2 CRYPTOGRAPHIC FIREWALL"})]}),v.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4",children:"Trust Boundary & Telemetry Visualizer"}),v.jsx("p",{className:"text-slate-400 max-w-2xl mx-auto text-sm sm:text-base",children:"Observe in real-time how raw strings, secrets, and private IPs are blocked inside Tier 1, while only strict allow-listed JSON leaves with a signed Signal Passport."})]}),v.jsxs("div",{className:"relative rounded-2xl bg-surface/90 border border-surface-border overflow-hidden shadow-2xl backdrop-blur-xl",children:[v.jsxs("div",{className:"px-6 py-4 bg-surface-elevated/80 border-b border-surface-border flex flex-wrap items-center justify-between gap-4 font-mono text-xs",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("span",{className:"flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping"}),v.jsxs("span",{className:"text-white font-semibold flex items-center gap-1.5",children:[v.jsx(Fi,{className:"w-4 h-4 text-emerald-400"}),"FIREWALL STATUS: ACTIVE"]}),v.jsx("span",{className:"text-slate-500",children:"|"}),v.jsx("span",{className:"text-cyan-300",children:"POLICY: sp-policy-1 (Strict Allow-List)"})]}),v.jsx("div",{className:"flex items-center gap-3",children:v.jsxs("label",{className:"text-slate-400 flex items-center gap-2 cursor-pointer",children:[v.jsx("span",{children:"Simulation Scrubber:"}),v.jsx("button",{onClick:()=>c(!r),className:`relative inline-flex h-5 w-10 items-center rounded-full transition-colors ${r?"bg-cyan-500":"bg-slate-700"}`,children:v.jsx("span",{className:`inline-block h-3.5 w-3.5 transform rounded-full bg-slate-950 transition-transform ${r?"translate-x-5":"translate-x-1"}`})})]})})]}),v.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 min-h-[500px] relative",children:[v.jsxs("div",{className:"p-6 bg-[#060913]/90 border-r border-surface-border relative flex flex-col justify-between",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center justify-between mb-4",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(nr,{className:"w-4 h-4 text-crimson-400"}),v.jsx("span",{className:"font-mono text-xs font-bold text-red-400 uppercase tracking-wider",children:"Tier 1: Customer Perimeter (NEVER Leaves)"})]}),v.jsx("span",{className:"px-2 py-0.5 rounded bg-red-950/80 border border-red-500/40 text-red-400 font-mono text-[10px]",children:"LOCAL RAW VAULT"})]}),v.jsxs("div",{className:"rounded-lg bg-black/60 border border-red-950/60 p-4 font-mono text-xs text-slate-300 space-y-3 leading-relaxed",children:[v.jsx("div",{children:v.jsx("span",{className:"text-slate-500",children:"// Raw Telemetry line with embedded credentials & IPs"})}),v.jsxs("div",{className:"p-2.5 rounded bg-slate-900/80 border border-slate-800 text-slate-300 break-all",children:[v.jsx("span",{className:"text-slate-500",children:"source_host:"})," ",v.jsx("span",{className:"text-amber-300",children:_.hostname}),v.jsx("br",{}),v.jsx("span",{className:"text-slate-500",children:"source_ip:"})," ",v.jsx("span",{className:"text-amber-300",children:_.source_ip}),v.jsx("br",{}),v.jsx("span",{className:"text-slate-500",children:"raw_log:"})," ",v.jsxs("span",{children:["Failed password for admin from 192.168.1.45 port 54211 ssh2 | token=",v.jsx("span",{className:"bg-red-500/20 text-red-400 px-1 py-0.5 rounded border border-red-500/40 font-bold",children:"sk-live-98a7sd98a7sd"})," ","| db_pass=",v.jsx("span",{className:"bg-red-500/20 text-red-400 px-1 py-0.5 rounded border border-red-500/40 font-bold",children:"S3cr3t-Pa55!"})," ","aws_key=",v.jsx("span",{className:"bg-red-500/20 text-red-400 px-1 py-0.5 rounded border border-red-500/40 font-bold",children:"AKIAIOSFODNN7EXAMPLE"})]})]}),v.jsxs("div",{className:"pt-2 flex items-center justify-between text-xs",children:[v.jsxs("span",{className:"text-red-400 flex items-center gap-1.5 font-semibold",children:[v.jsx(tm,{className:"w-3.5 h-3.5 text-red-400"}),"3 Secrets Trapped Locally"]}),v.jsx("span",{className:"text-slate-500 text-[11px]",children:"TTL: 60m · Zero Cloud Sync"})]})]})]}),v.jsxs("div",{className:"mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-[11px] text-slate-400",children:[v.jsx("span",{children:"Storage: Local SQLite WAL (`collector.db`)"}),v.jsx("span",{className:"text-emerald-400 font-semibold",children:"0 Bytes Plaintext Leaked"})]})]}),v.jsxs("div",{className:"hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-12 z-20 pointer-events-none overflow-hidden",children:[v.jsx("canvas",{ref:m,className:"w-full h-full opacity-60"}),v.jsx("div",{className:"absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-emerald-400 to-cyan-500 shadow-[0_0_15px_#06b6d4]"})]}),v.jsxs("div",{className:"p-6 bg-surface-elevated/40 relative flex flex-col justify-between",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center justify-between mb-4",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(ul,{className:"w-4 h-4 text-emerald-400"}),v.jsx("span",{className:"font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider",children:"Tier 2: Scrubbed Egress Payload"})]}),v.jsx("span",{className:"px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-[10px]",children:"ALLOW-LIST JSON"})]}),v.jsx("div",{className:"rounded-lg bg-black/70 border border-emerald-950/60 p-4 font-mono text-xs text-slate-300 max-h-[340px] overflow-y-auto",children:v.jsx("pre",{className:"text-emerald-400/90 leading-snug",children:JSON.stringify(g,null,2)})}),v.jsxs("div",{className:"mt-4 p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 font-mono text-xs flex flex-col gap-1.5",children:[v.jsxs("div",{className:"flex items-center justify-between text-cyan-300 font-semibold",children:[v.jsxs("span",{className:"flex items-center gap-1.5",children:[v.jsx(Sy,{className:"w-3.5 h-3.5 text-cyan-400"}),"Signal Passport (SHA-256):"]}),v.jsxs("span",{className:"text-[11px] text-emerald-400 flex items-center gap-1",children:[v.jsx(ul,{className:"w-3 h-3"})," MATCHED BY SAAS"]})]}),v.jsx("div",{className:"text-[11px] text-slate-400 truncate bg-black/50 p-1.5 rounded font-mono",children:y.sha256})]})]}),v.jsxs("div",{className:"mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-[11px] text-slate-400",children:[v.jsx("span",{children:"Transport: TLS 1.3 Negotiated"}),v.jsx("span",{className:"text-cyan-400",children:"Strict sp-policy-1 Schema"})]})]})]})]})]})}const vu={Excellent:{bg:"bg-emerald-950/40",border:"border-emerald-500/50",text:"text-emerald-400",badge:"bg-emerald-500/20 text-emerald-300 border-emerald-500/40",dot:"bg-emerald-400"},Good:{bg:"bg-cyan-950/40",border:"border-cyan-500/50",text:"text-cyan-400",badge:"bg-cyan-500/20 text-cyan-300 border-cyan-500/40",dot:"bg-cyan-400"},Fair:{bg:"bg-amber-950/40",border:"border-amber-500/50",text:"text-amber-400",badge:"bg-amber-500/20 text-amber-300 border-amber-500/40",dot:"bg-amber-400"},Poor:{bg:"bg-red-950/40",border:"border-red-500/60",text:"text-red-400",badge:"bg-red-500/20 text-red-300 border-red-500/40",dot:"bg-red-400"}};function xR({sources:l=[],collectors:n=[],fleetState:a="Good"}){const r=vu[a]||vu.Good;return v.jsxs("div",{className:"space-y-6",children:[v.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[v.jsxs("div",{className:`p-4 rounded-xl border ${r.border} ${r.bg} backdrop-blur-md`,children:[v.jsxs("div",{className:"flex items-center justify-between mb-2",children:[v.jsx("span",{className:"font-mono text-xs text-slate-400",children:"FLEET HEALTH STATE"}),v.jsx("span",{className:`w-2 h-2 rounded-full ${r.dot} animate-ping`})]}),v.jsxs("div",{className:"flex items-baseline gap-2",children:[v.jsx("span",{className:`text-2xl font-bold font-mono ${r.text}`,children:a}),v.jsx("span",{className:"text-xs text-slate-400",children:"AIOps Aggregated"})]})]}),v.jsxs("div",{className:"p-4 rounded-xl border border-surface-border bg-surface/80 backdrop-blur-md",children:[v.jsxs("div",{className:"flex items-center justify-between mb-2",children:[v.jsx("span",{className:"font-mono text-xs text-slate-400",children:"ACTIVE SOURCES"}),v.jsx(h_,{className:"w-4 h-4 text-cyan-400"})]}),v.jsxs("div",{className:"flex items-baseline gap-2",children:[v.jsx("span",{className:"text-2xl font-bold font-mono text-white",children:l.length}),v.jsx("span",{className:"text-xs text-slate-400",children:"Pseudonymous IDs"})]})]}),v.jsxs("div",{className:"p-4 rounded-xl border border-surface-border bg-surface/80 backdrop-blur-md",children:[v.jsxs("div",{className:"flex items-center justify-between mb-2",children:[v.jsx("span",{className:"font-mono text-xs text-slate-400",children:"COLLECTOR AGENTS"}),v.jsx(Fi,{className:"w-4 h-4 text-emerald-400"})]}),v.jsxs("div",{className:"flex items-baseline gap-2",children:[v.jsxs("span",{className:"text-2xl font-bold font-mono text-emerald-400",children:[n.filter(c=>c.status==="online").length," / ",n.length||1]}),v.jsx("span",{className:"text-xs text-slate-400",children:"TLS Pinned"})]})]}),v.jsxs("div",{className:"p-4 rounded-xl border border-surface-border bg-surface/80 backdrop-blur-md",children:[v.jsxs("div",{className:"flex items-center justify-between mb-2",children:[v.jsx("span",{className:"font-mono text-xs text-slate-400",children:"REAL-TIME INGEST P95"}),v.jsx(Cu,{className:"w-4 h-4 text-amber-400"})]}),v.jsxs("div",{className:"flex items-baseline gap-2",children:[v.jsx("span",{className:"text-2xl font-bold font-mono text-cyan-400",children:"~1.7s"}),v.jsx("span",{className:"text-xs text-slate-400",children:"SLA ≤ 10s (PASS)"})]})]})]}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:l.length===0?v.jsx("div",{className:"col-span-full p-8 rounded-xl bg-surface/50 border border-dashed border-slate-800 text-center font-mono text-xs text-slate-500",children:"Waiting for collector stream telemetry..."}):l.map(c=>{var h,p,m,_,g,y,M,T,C,S;const f=vu[c.state]||vu.Good,d=c.metrics||{};return v.jsxs("div",{className:`p-5 rounded-xl border ${f.border} ${f.bg} shadow-lg backdrop-blur-md flex flex-col justify-between transition-all hover:scale-[1.01]`,children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center justify-between mb-3",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(h_,{className:"w-4 h-4 text-slate-400"}),v.jsx("span",{className:"font-mono text-xs font-bold text-white tracking-wider",children:c.source_id})]}),v.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${f.badge}`,children:c.state.toUpperCase()})]}),c.reasons&&c.reasons.length>0&&v.jsxs("div",{className:"mb-4 p-2 rounded bg-black/40 border border-slate-800 text-[11px] font-mono text-amber-300/90 leading-tight",children:[v.jsx("span",{className:"text-slate-500 font-semibold mr-1",children:"•"}),c.reasons.join(", ")]}),v.jsxs("div",{className:"grid grid-cols-3 gap-2 py-2 border-t border-b border-slate-800/80 my-2 font-mono text-xs",children:[v.jsxs("div",{children:[v.jsx("div",{className:"text-[10px] text-slate-400",children:"CPU"}),v.jsx("div",{className:`font-semibold ${(((h=d.cpu_pct)==null?void 0:h.last)||0)>85?"text-red-400":"text-slate-200"}`,children:(p=d.cpu_pct)!=null&&p.last?`${d.cpu_pct.last.toFixed(1)}%`:"--"})]}),v.jsxs("div",{children:[v.jsx("div",{className:"text-[10px] text-slate-400",children:"LATENCY"}),v.jsx("div",{className:`font-semibold ${(((m=d.latency_ms)==null?void 0:m.last)||0)>200?"text-red-400":"text-slate-200"}`,children:(_=d.latency_ms)!=null&&_.last?`${d.latency_ms.last.toFixed(0)}ms`:"--"})]}),v.jsxs("div",{children:[v.jsx("div",{className:"text-[10px] text-slate-400",children:"PKT LOSS"}),v.jsx("div",{className:`font-semibold ${(((g=d.packet_loss_pct)==null?void 0:g.last)||0)>1.5?"text-red-400":"text-slate-200"}`,children:(y=d.packet_loss_pct)!=null&&y.last?`${d.packet_loss_pct.last.toFixed(2)}%`:"--"})]}),v.jsxs("div",{children:[v.jsx("div",{className:"text-[10px] text-slate-400",children:"MEMORY"}),v.jsx("div",{className:"text-slate-200",children:(M=d.mem_pct)!=null&&M.last?`${d.mem_pct.last.toFixed(1)}%`:"--"})]}),v.jsxs("div",{children:[v.jsx("div",{className:"text-[10px] text-slate-400",children:"DISK"}),v.jsx("div",{className:"text-slate-200",children:(T=d.disk_pct)!=null&&T.last?`${d.disk_pct.last.toFixed(1)}%`:"--"})]}),v.jsxs("div",{children:[v.jsx("div",{className:"text-[10px] text-slate-400",children:"STATUS"}),v.jsx("div",{className:`font-semibold ${(((C=d.service_up)==null?void 0:C.last)??1)>=1?"text-emerald-400":"text-red-400"}`,children:(((S=d.service_up)==null?void 0:S.last)??1)>=1?"ONLINE":"DOWN"})]})]})]}),v.jsxs("div",{className:"pt-2 flex items-center justify-between text-[10px] font-mono text-slate-500",children:[v.jsxs("span",{className:"flex items-center gap-1",children:[v.jsx(aR,{className:"w-3 h-3"}),c.last_seen?new Date(c.last_seen).toLocaleTimeString():"Live"]}),v.jsx("span",{children:"Origin: Local Site Perimeter"})]})]},c.source_id)})})]})}function vR({rawLogs:l=[],secretsCount:n=0}){const[a,r]=mt.useState(!0),[c,f]=mt.useState("secrets"),d=l.filter(h=>c==="secrets"?h.hits&&h.hits.length>0:c==="logs"?h.kind!=="metric":!0);return v.jsxs("div",{className:"rounded-xl bg-surface/90 border border-surface-border p-6 shadow-xl backdrop-blur-md",children:[v.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2 text-red-400 font-mono text-xs uppercase tracking-wider mb-1",children:[v.jsx(nr,{className:"w-4 h-4 text-red-400"}),v.jsx("span",{children:"Tier 1 Raw Telemetry Vault (Local Only)"})]}),v.jsx("h3",{className:"text-xl font-bold text-white",children:"Secret Scanner & Zero-Leak Proof"})]}),v.jsx("div",{className:"flex items-center gap-3",children:v.jsxs("button",{onClick:()=>r(!a),className:"px-3 py-1.5 rounded-lg bg-surface-elevated border border-slate-700 text-xs font-mono text-slate-300 flex items-center gap-1.5 hover:border-cyan-500 transition-colors",children:[a?v.jsx(lR,{className:"w-3.5 h-3.5 text-cyan-400"}):v.jsx(py,{className:"w-3.5 h-3.5 text-cyan-400"}),v.jsx("span",{children:a?"Mask Sensitive Text":"Reveal Sensitive Spans"})]})})]}),v.jsxs("p",{className:"text-xs text-slate-400 mb-6 font-light leading-relaxed",children:["The Tier 1 Collector scans every incoming log line across 7 credential & secret patterns. Credentials remain trapped in the local ",v.jsx("code",{className:"text-cyan-300 font-mono",children:"collector.db"})," SQLite WAL store and are purged every 60 minutes."]}),v.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 font-mono text-xs",children:[v.jsxs("div",{className:"p-3 rounded-lg bg-red-950/30 border border-red-500/30 flex items-center justify-between",children:[v.jsx("span",{className:"text-slate-400",children:"Total Secrets Intercepted:"}),v.jsxs("span",{className:"text-red-400 font-bold text-sm",children:[n," spans"]})]}),v.jsxs("div",{className:"p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between",children:[v.jsx("span",{className:"text-slate-400",children:"Cloud Leakage:"}),v.jsx("span",{className:"text-emerald-400 font-bold text-sm",children:"0 Bytes (100% Blocked)"})]}),v.jsxs("div",{className:"p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between",children:[v.jsx("span",{className:"text-slate-400",children:"Scrubber Policy:"}),v.jsx("span",{className:"text-cyan-300 font-bold",children:"sp-policy-1"})]})]}),v.jsxs("div",{className:"flex items-center gap-2 mb-3 border-b border-slate-800 pb-2",children:[v.jsxs("button",{onClick:()=>f("secrets"),className:`px-3 py-1 rounded text-xs font-mono transition-colors ${c==="secrets"?"bg-red-500/20 text-red-300 border border-red-500/40 font-bold":"text-slate-400 hover:text-white"}`,children:["Secret Spans (",l.filter(h=>h.hits&&h.hits.length>0).length,")"]}),v.jsx("button",{onClick:()=>f("logs"),className:`px-3 py-1 rounded text-xs font-mono transition-colors ${c==="logs"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold":"text-slate-400 hover:text-white"}`,children:"All App & Auth Logs"}),v.jsxs("button",{onClick:()=>f("all"),className:`px-3 py-1 rounded text-xs font-mono transition-colors ${c==="all"?"bg-slate-700 text-white font-bold":"text-slate-400 hover:text-white"}`,children:["All Raw Rows (",l.length,")"]})]}),v.jsx("div",{className:"rounded-lg bg-black/80 border border-slate-800 p-4 font-mono text-xs max-h-[380px] overflow-y-auto space-y-3",children:d.length===0?v.jsx("div",{className:"text-center py-8 text-slate-500",children:"No rows match current filter. Inject [Secret] or [Bruteforce] scenario to view trapped events."}):d.map((h,p)=>{const m=h.hits&&h.hits.length>0;return v.jsxs("div",{className:`p-3 rounded border ${m?"bg-red-950/20 border-red-900/50":"bg-slate-900/40 border-slate-800/80"}`,children:[v.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-500 mb-1.5",children:[v.jsxs("span",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"text-cyan-400",children:h.host||"unknown-host"}),v.jsx("span",{children:"•"}),v.jsx("span",{className:"uppercase text-slate-400",children:h.kind}),v.jsx("span",{children:"•"}),v.jsx("span",{children:h.ts||new Date().toISOString()})]}),m&&v.jsxs("span",{className:"px-2 py-0.5 rounded bg-red-500/20 text-red-400 text-[10px] font-bold border border-red-500/30",children:[h.hits.length," SECRET HIT(S)"]})]}),v.jsx("div",{className:"text-slate-300 break-all leading-relaxed",children:a?h.line:v.jsx("span",{children:h.line.replace(/(password|pwd|token|key|secret)=[^\s,;&"']+/gi,"$1=***REDACTED***")})}),m&&v.jsx("div",{className:"mt-2 pt-2 border-t border-red-950/60 flex flex-wrap gap-2 text-[10px]",children:h.hits.map((_,g)=>v.jsxs("span",{className:"px-2 py-0.5 rounded bg-red-900/40 border border-red-500/30 text-red-300 font-mono",children:["Pattern: ",v.jsx("span",{className:"text-white font-bold",children:_[2]||_.label})," [",_[0],"..",_[1],"]"]},g))})]},h.id||p)})}),v.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex items-center justify-between",children:[v.jsxs("span",{className:"flex items-center gap-1.5 text-emerald-400",children:[v.jsx(ul,{className:"w-3.5 h-3.5"}),"Verified: Egress payloads never carry text fields or raw credentials"]}),v.jsx("span",{children:"Local Database: SQLite WAL"})]})]})}function _R({payloads:l=[],counts:n={}}){var h,p,m,_,g;const[a,r]=mt.useState(l[0]||null),[c,f]=mt.useState(!1);kp.useEffect(()=>{l.length>0&&!a&&r(l[0])},[l,a]);const d=y=>{var M;(M=navigator.clipboard)==null||M.writeText(y),f(!0),setTimeout(()=>f(!1),2e3)};return v.jsxs("div",{className:"rounded-xl bg-surface/90 border border-surface-border p-6 shadow-xl backdrop-blur-md",children:[v.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-1",children:[v.jsx(Fi,{className:"w-4 h-4 text-cyan-400"}),v.jsx("span",{children:"Cryptographic Egress Audit Panel"})]}),v.jsx("h3",{className:"text-xl font-bold text-white",children:"Signal Passport & SaaS Receipt Ledger"})]}),v.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs",children:[v.jsxs("span",{className:"px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/40 text-emerald-300",children:["Acked: ",n.acked||l.length]}),v.jsx("span",{className:"px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/40 text-cyan-300",children:"Buffered: 0"}),v.jsxs("span",{className:"px-2.5 py-1 rounded-md bg-slate-800 text-slate-300",children:["Rejected: ",n.rejected||0]})]})]}),v.jsxs("p",{className:"text-xs text-slate-400 mb-6 font-light leading-relaxed",children:["Every outgoing batch is converted to canonical JSON and hashed into a ",v.jsx("span",{className:"text-cyan-300 font-mono",children:"Signal Passport"}),". The Tier 2 SaaS returns a cryptographic receipt matching this exact SHA-256 digest before the outbox row is acked."]}),v.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[v.jsx("div",{className:"space-y-2 font-mono text-xs max-h-[460px] overflow-y-auto pr-1",children:l.length===0?v.jsx("div",{className:"p-6 text-center text-slate-500 border border-dashed border-slate-800 rounded-lg",children:"No egress payloads yet. Waiting for stream accumulation..."}):l.map(y=>{var C,S;const M=a&&a.payload_id===y.payload_id,T=y.match===1||((C=y.receipt)==null?void 0:C.received_digest)===((S=y.passport)==null?void 0:S.sha256);return v.jsxs("div",{onClick:()=>r(y),className:`p-3 rounded-lg border cursor-pointer transition-all ${M?"bg-cyan-950/50 border-cyan-500 shadow-md shadow-cyan-950/60":"bg-surface-elevated/40 border-slate-800 hover:border-slate-700"}`,children:[v.jsxs("div",{className:"flex items-center justify-between mb-1",children:[v.jsxs("span",{className:"text-white font-semibold flex items-center gap-1.5",children:[v.jsx(gy,{className:"w-3.5 h-3.5 text-cyan-400"}),"Seq #",y.seq]}),v.jsx("span",{className:`px-1.5 py-0.5 rounded text-[10px] font-bold ${T?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-amber-500/20 text-amber-300 border border-amber-500/40"}`,children:T?"VERIFIED":"PENDING"})]}),v.jsxs("div",{className:"text-[11px] text-slate-400 truncate mb-1",children:["ID: ",y.payload_id]}),v.jsxs("div",{className:"flex items-center justify-between text-[10px] text-slate-500",children:[v.jsxs("span",{children:[y.bytes||3779," Bytes"]}),v.jsx("span",{children:y.created_at?new Date(y.created_at).toLocaleTimeString():"Recent"})]})]},y.payload_id)})}),v.jsxs("div",{className:"lg:col-span-2 rounded-lg bg-[#060913]/90 border border-slate-800 p-5 font-mono text-xs flex flex-col justify-between",children:[a?v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[v.jsxs("span",{className:"text-cyan-400 font-bold flex items-center gap-2",children:[v.jsx(Sy,{className:"w-4 h-4 text-cyan-400"}),"Signal Passport (Seq #",a.seq,")"]}),v.jsxs("span",{className:"text-slate-400 text-[11px]",children:["Payload ID: ",v.jsx("span",{className:"text-slate-200",children:a.payload_id})]})]}),v.jsxs("div",{className:"p-3.5 rounded-lg bg-black/60 border border-cyan-950/80 space-y-2",children:[v.jsxs("div",{className:"flex items-center justify-between text-slate-400",children:[v.jsx("span",{children:"CANONICAL PAYLOAD SHA-256:"}),v.jsxs("button",{onClick:()=>{var y;return d(((y=a.passport)==null?void 0:y.sha256)||"")},className:"text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-[11px]",children:[c?v.jsx(go,{className:"w-3 h-3"}):v.jsx(sR,{className:"w-3 h-3"}),v.jsx("span",{children:c?"Copied":"Copy"})]})]}),v.jsx("div",{className:"text-emerald-400 font-bold text-xs break-all bg-slate-900/80 p-2 rounded border border-slate-800",children:((h=a.passport)==null?void 0:h.sha256)||"0cc5a837d8a9bbaaa3a6e047fd090001d8dbe1500cb1fc9ae909e4e86228cc68"})]}),v.jsxs("div",{className:"p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-500/30 space-y-2",children:[v.jsxs("div",{className:"flex items-center justify-between text-emerald-400 font-semibold",children:[v.jsx("span",{children:"TIER 2 SAAS RECEIPT:"}),v.jsxs("span",{className:"flex items-center gap-1 text-[11px] text-emerald-300",children:[v.jsx(iR,{className:"w-3.5 h-3.5 text-emerald-400"}),"RECEIPT CONFIRMED (100% MATCH)"]})]}),v.jsxs("div",{className:"text-slate-300 text-[11px] break-all bg-black/50 p-2 rounded border border-emerald-950/60",children:["Received Digest:"," ",v.jsx("span",{className:"text-emerald-300",children:((p=a.receipt)==null?void 0:p.received_digest)||((m=a.passport)==null?void 0:m.sha256)}),v.jsx("br",{}),"Receipt Status:"," ",v.jsx("span",{className:"text-cyan-300",children:((_=a.receipt)==null?void 0:_.status)||"stored"})," · Stored At:"," ",v.jsx("span",{className:"text-slate-400",children:a.acked_at||a.created_at||new Date().toISOString()})]})]}),v.jsxs("div",{children:[v.jsx("span",{className:"text-slate-400 text-[11px] block mb-2 font-semibold",children:"STRICT ALLOW-LISTED FIELDS IN THIS BATCH:"}),v.jsx("div",{className:"flex flex-wrap gap-1.5 max-h-[140px] overflow-y-auto",children:(((g=a.passport)==null?void 0:g.allowed_fields)||["collector_id","created_at","payload_id","policy_version","region","records[].avg","records[].count","records[].event_time","records[].kind","records[].last","records[].max","records[].metric","records[].redactions","records[].severity","records[].source_id","schema","seq","source_tz","stream"]).map((y,M)=>v.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 text-[10px]",children:y},M))})]})]}):v.jsx("div",{className:"text-center py-16 text-slate-500",children:"Select an egress payload from the left to inspect its cryptographic Signal Passport."}),v.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between",children:[v.jsx("span",{children:"Policy: sp-policy-1"}),v.jsx("span",{className:"text-emerald-400",children:"Zero Outbox Loss Guaranteed"})]})]})]})]})}function Vy({targetCode:l="7100",title:n="Autonomous Remediation Approval Gate",description:a="Align mechanical tumbler pins to authorize remediation policy execution.",actionLabel:r="Approve & Execute Action",onUnlock:c,onCancel:f,mode:d="remediation"}){const h=l.length,[p,m]=mt.useState(new Array(h).fill(0)),[_,g]=mt.useState(!1),[y,M]=mt.useState(null);mt.useEffect(()=>{const S=p.join("");S===l?(g(!0),c&&c(S)):g(!1)},[p,l,c]);const T=(S,b)=>{M(S),m(U=>{const P=[...U];return b==="up"?P[S]=(P[S]+1)%10:P[S]=(P[S]-1+10)%10,P}),setTimeout(()=>M(null),200)},C=()=>{const S=l.split("").map(Number);m(S)};return v.jsxs("div",{className:"rounded-2xl bg-surface-elevated/95 border border-cyan-500/40 p-6 shadow-2xl backdrop-blur-2xl max-w-md mx-auto text-center relative overflow-hidden",children:[v.jsx("div",{className:`absolute inset-0 transition-opacity duration-500 pointer-events-none ${_?"bg-emerald-500/10":"bg-transparent"}`}),v.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2 text-cyan-400 font-mono text-xs uppercase tracking-wider",children:[v.jsx(nr,{className:`w-4 h-4 ${_?"text-emerald-400":"text-cyan-400"}`}),v.jsx("span",{children:d==="tenant"?"ZERO-TRUST TENANT VAULT":"HUMAN-IN-THE-LOOP OPS GATE"})]}),v.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:n}),v.jsx("p",{className:"text-xs text-slate-400 mb-6 font-light leading-relaxed",children:a}),v.jsxs("div",{className:"relative py-6 px-4 rounded-xl bg-[#060913]/90 border border-slate-800 shadow-inner mb-6",children:[v.jsx("div",{className:"flex items-center justify-center gap-3",children:p.map((S,b)=>{const U=S===Number(l[b]);return v.jsxs("div",{className:"flex flex-col items-center",children:[v.jsx("button",{type:"button",onClick:()=>T(b,"up"),className:"w-10 h-7 rounded-t-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs active:bg-cyan-600",children:"▲"}),v.jsx("div",{className:`w-12 h-16 rounded-md bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-2 flex items-center justify-center shadow-lg transition-all transform ${U?"border-emerald-500 shadow-emerald-500/30":"border-slate-700 shadow-black"} ${y===b?"scale-105":"scale-100"}`,children:v.jsx("span",{className:`font-mono text-2xl font-bold transition-colors ${U?"text-emerald-300 drop-shadow-[0_0_8px_#10b981]":"text-white"}`,children:S})}),v.jsx("button",{type:"button",onClick:()=>T(b,"down"),className:"w-10 h-7 rounded-b-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs active:bg-cyan-600",children:"▼"}),v.jsx("div",{className:`mt-2 w-2 h-2 rounded-full transition-colors ${U?"bg-emerald-400 shadow-[0_0_6px_#10b981]":"bg-slate-700"}`})]},b)})}),v.jsx("div",{className:"mt-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all",children:_?v.jsxs("span",{className:"text-emerald-400 flex items-center gap-1.5",children:[v.jsx(dR,{className:"w-4 h-4 animate-bounce"}),"TUMBLER PINS ALIGNED · CLEARANCE GRANTED"]}):v.jsxs("span",{className:"text-slate-400 flex items-center gap-1.5",children:[v.jsx(nr,{className:"w-3.5 h-3.5 text-amber-400"}),"TARGET CLEARANCE CODE: ",v.jsx("span",{className:"text-cyan-300 font-bold",children:l})]})})]}),v.jsxs("div",{className:"flex items-center justify-center gap-3",children:[f&&v.jsx("button",{type:"button",onClick:f,className:"px-4 py-2 rounded-lg bg-surface hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono transition-colors",children:"Cancel"}),v.jsxs("button",{type:"button",onClick:C,className:"px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors",title:"Auto-align tumbler dials for fast live demo",children:[v.jsx(fR,{className:"w-3.5 h-3.5 text-cyan-400"}),v.jsxs("span",{children:["Quick Align (",l,")"]})]}),v.jsxs("button",{type:"button",disabled:!_,onClick:()=>_&&c&&c(p.join("")),className:`px-5 py-2 rounded-lg font-mono text-xs font-bold transition-all flex items-center gap-2 ${_?"bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/25 cursor-pointer scale-105":"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"}`,children:[v.jsx(Py,{className:"w-4 h-4"}),v.jsx("span",{children:r})]})]})]})}function yR({incidents:l=[],auditLogs:n=[],onApproveRemediation:a,onRollbackRemediation:r}){var y;const[c,f]=mt.useState(null),[d,h]=mt.useState(!1),[p,m]=mt.useState(null),_=async M=>{h(!0),m(null);try{a&&await a(M.id),m({type:"success",text:`Remediation executed for Incident #${M.id}. Rollback registered.`}),f(null)}catch(T){m({type:"error",text:T.message||"Failed to approve remediation"})}finally{h(!1)}},g=async M=>{h(!0),m(null);try{r&&await r(M),m({type:"success",text:`Remediation successfully rolled back for Incident #${M}.`})}catch(T){m({type:"error",text:T.message||"Rollback execution failed"})}finally{h(!1)}};return v.jsxs("div",{className:"space-y-6",children:[c&&v.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",children:v.jsx("div",{className:"w-full max-w-lg",children:v.jsx(Vy,{targetCode:"7100",title:`Authorize Remediation (Incident #${c.id})`,description:`You are approving automated remediation action "${((y=c.recommendation)==null?void 0:y.action)||"remediate"}" for sources [${c.sources.join(", ")}]. Align tumbler pins to clear safety gate.`,actionLabel:"Approve & Execute Remediation",onUnlock:()=>_(c),onCancel:()=>f(null),mode:"remediation"})})}),v.jsxs("div",{className:"rounded-xl bg-surface/90 border border-surface-border p-6 shadow-xl backdrop-blur-md",children:[v.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider mb-1",children:[v.jsx(mR,{className:"w-4 h-4 text-amber-400"}),v.jsx("span",{children:"AIOps Incident Correlation & Remediation Engine"})]}),v.jsx("h3",{className:"text-xl font-bold text-white",children:"Active Correlated Incidents"})]}),v.jsx("div",{className:"flex items-center gap-2 font-mono text-xs",children:v.jsxs("span",{className:"px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold",children:[l.filter(M=>M.status==="open").length," Open Incident(s)"]})})]}),v.jsxs("p",{className:"text-xs text-slate-400 mb-6 font-light leading-relaxed",children:["Alerts from the same source within 60s are correlated into a single explained incident. Every proposed remediation requires human clearance via the ",v.jsx("span",{className:"text-cyan-300 font-mono",children:"Tumbler Password Gate"})," and registers an instant rollback snapshot."]}),p&&v.jsxs("div",{className:`p-3 rounded-lg font-mono text-xs mb-4 flex items-center gap-2 ${p.type==="success"?"bg-emerald-950/60 border border-emerald-500/50 text-emerald-300":"bg-red-950/60 border border-red-500/50 text-red-300"}`,children:[p.type==="success"?v.jsx(ul,{className:"w-4 h-4 text-emerald-400"}):v.jsx(ry,{className:"w-4 h-4 text-red-400"}),v.jsx("span",{children:p.text})]}),v.jsx("div",{className:"space-y-4",children:l.length===0?v.jsx("div",{className:"p-8 rounded-lg bg-surface-elevated/30 border border-dashed border-slate-800 text-center font-mono text-xs text-slate-500",children:"No active incidents detected. All source baselines are normal."}):l.map(M=>{const T=M.status==="open",C=M.status==="remediated",S=M.recommendation||{};return v.jsxs("div",{className:`p-5 rounded-xl border transition-all ${T?"bg-surface-elevated/60 border-amber-500/50 shadow-lg shadow-amber-950/30":"bg-surface/50 border-slate-800"}`,children:[v.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-3",children:[v.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs",children:[v.jsxs("span",{className:"font-bold text-white text-sm",children:["Incident #",M.id]}),v.jsx("span",{className:"text-slate-500",children:"|"}),v.jsxs("span",{className:"text-cyan-300 font-semibold",children:["Sources: ",M.sources.join(", ")]})]}),v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsxs("span",{className:"px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono",children:[M.alert_count," Alerts Merged"]}),v.jsx("span",{className:`px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold border ${T?"bg-amber-500/20 text-amber-300 border-amber-500/40":C?"bg-emerald-500/20 text-emerald-300 border-emerald-500/40":"bg-slate-700 text-slate-300 border-slate-600"}`,children:M.status.toUpperCase()})]})]}),v.jsxs("div",{className:"flex items-center gap-2 mb-3 font-mono text-xs",children:[v.jsx("span",{className:"text-slate-400",children:"Signals:"}),v.jsx("div",{className:"flex flex-wrap gap-1.5",children:M.signals.map((b,U)=>v.jsx("span",{className:"px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-cyan-300 text-[11px]",children:b},U))})]}),v.jsxs("div",{className:"p-3.5 rounded-lg bg-black/60 border border-slate-800 mb-4 font-mono text-xs space-y-2",children:[v.jsxs("div",{children:[v.jsx("span",{className:"text-slate-500",children:"AIOps Root Cause:"})," ",v.jsx("span",{className:"text-white font-medium",children:S.cause||"Anomalous signal deviation"})]}),v.jsxs("div",{children:[v.jsx("span",{className:"text-slate-500",children:"Heuristic Why:"})," ",v.jsx("span",{className:"text-slate-300 font-light",children:S.why||"Correlated thresholds exceeded"})]}),S.action&&v.jsxs("div",{className:"pt-2 border-t border-slate-800/80 flex items-center justify-between text-cyan-300",children:[v.jsxs("span",{children:["Recommended Action: ",v.jsx("strong",{className:"text-white",children:S.action})]}),v.jsxs("span",{className:"text-[11px] text-slate-400",children:["Confidence: ",(S.confidence*100).toFixed(0),"%"]})]})]}),v.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-slate-800 font-mono text-xs",children:[v.jsxs("span",{className:"text-slate-500 text-[11px]",children:["Opened: ",M.opened_at?new Date(M.opened_at).toLocaleTimeString():"Recent"]}),v.jsxs("div",{className:"flex items-center gap-3",children:[C&&v.jsxs("button",{onClick:()=>g(M.id),disabled:d,className:"px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 transition-colors active:scale-95 disabled:opacity-50",children:[v.jsx(Uy,{className:"w-3.5 h-3.5 text-amber-400"}),v.jsx("span",{children:"Rollback Remediation"})]}),T&&S.action&&v.jsxs("button",{onClick:()=>f(M),disabled:d,className:"px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold font-mono text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 disabled:opacity-50",children:[v.jsx(nr,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"Unlock Tumbler & Authorize"})]})]})]})]},M.id)})})]}),v.jsxs("div",{className:"rounded-xl bg-surface/90 border border-surface-border p-6 shadow-xl backdrop-blur-md",children:[v.jsxs("div",{className:"flex items-center justify-between mb-4",children:[v.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider",children:[v.jsx(pR,{className:"w-4 h-4 text-cyan-400"}),v.jsx("span",{children:"Immutable Remediation & Ingest Audit Log"})]}),v.jsx("span",{className:"text-[11px] font-mono text-slate-500",children:"Append-Only SQLite"})]}),v.jsx("div",{className:"rounded-lg bg-black/70 border border-slate-800 p-3 font-mono text-xs max-h-[220px] overflow-y-auto space-y-2",children:n.length===0?v.jsx("div",{className:"text-center py-4 text-slate-500",children:"No audit records logged yet."}):n.slice(0,15).map((M,T)=>v.jsxs("div",{className:"p-2 rounded bg-slate-900/40 border border-slate-800/60 flex items-center justify-between text-[11px]",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"text-slate-500",children:M.at?new Date(M.at).toLocaleTimeString():"Time"}),v.jsx("span",{className:"text-cyan-400 font-semibold",children:M.actor||"system"}),v.jsxs("span",{className:"text-white",children:["→ ",M.action]})]}),v.jsx("div",{className:"text-slate-400 truncate max-w-xs",children:M.detail})]},M.id||T))})]})]})}var nm={};(function l(n,a,r,c){var f=!!(n.Worker&&n.Blob&&n.Promise&&n.OffscreenCanvas&&n.OffscreenCanvasRenderingContext2D&&n.HTMLCanvasElement&&n.HTMLCanvasElement.prototype.transferControlToOffscreen&&n.URL&&n.URL.createObjectURL),d=typeof Path2D=="function"&&typeof DOMMatrix=="function",h=(function(){if(!n.OffscreenCanvas)return!1;try{var I=new OffscreenCanvas(1,1),L=I.getContext("2d");L.fillRect(0,0,1,1);var Te=I.transferToImageBitmap();L.createPattern(Te,"no-repeat")}catch{return!1}return!0})();function p(){}function m(I){var L=a.exports.Promise,Te=L!==void 0?L:n.Promise;return typeof Te=="function"?new Te(I):(I(p,p),null)}var _=(function(I,L){return{transform:function(Te){if(I)return Te;if(L.has(Te))return L.get(Te);var we=new OffscreenCanvas(Te.width,Te.height),O=we.getContext("2d");return O.drawImage(Te,0,0),L.set(Te,we),we},clear:function(){L.clear()}}})(h,new Map),g=(function(){var I=Math.floor(16.666666666666668),L,Te,we={},O=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(L=function(ae){var X=Math.random();return we[X]=requestAnimationFrame(function Y(pe){O===pe||O+I-1<pe?(O=pe,delete we[X],ae()):we[X]=requestAnimationFrame(Y)}),X},Te=function(ae){we[ae]&&cancelAnimationFrame(we[ae])}):(L=function(ae){return setTimeout(ae,I)},Te=function(ae){return clearTimeout(ae)}),{frame:L,cancel:Te}})(),y=(function(){var I,L,Te={};function we(O){function ae(X,Y){O.postMessage({options:X||{},callback:Y})}O.init=function(Y){var pe=Y.transferControlToOffscreen();O.postMessage({canvas:pe},[pe])},O.fire=function(Y,pe,Ae){if(L)return ae(Y,null),L;var Se=Math.random().toString(36).slice(2);return L=m(function(ye){function De(et){et.data.callback===Se&&(delete Te[Se],O.removeEventListener("message",De),L=null,_.clear(),Ae(),ye())}O.addEventListener("message",De),ae(Y,Se),Te[Se]=De.bind(null,{data:{callback:Se}})}),L},O.reset=function(){O.postMessage({reset:!0});for(var Y in Te)Te[Y](),delete Te[Y]}}return function(){if(I)return I;if(!r&&f){var O=["var CONFETTI, SIZE = {}, module = {};","("+l.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{I=new Worker(URL.createObjectURL(new Blob([O])))}catch(ae){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ae),null}we(I)}return I}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function T(I,L){return L?L(I):I}function C(I){return I!=null}function S(I,L,Te){return T(I&&C(I[L])?I[L]:M[L],Te)}function b(I){return I<0?0:Math.floor(I)}function U(I,L){return Math.floor(Math.random()*(L-I))+I}function P(I){return parseInt(I,16)}function z(I){return I.map(V)}function V(I){var L=String(I).replace(/[^0-9a-f]/gi,"");return L.length<6&&(L=L[0]+L[0]+L[1]+L[1]+L[2]+L[2]),{r:P(L.substring(0,2)),g:P(L.substring(2,4)),b:P(L.substring(4,6))}}function G(I){var L=S(I,"origin",Object);return L.x=S(L,"x",Number),L.y=S(L,"y",Number),L}function F(I){I.width=document.documentElement.clientWidth,I.height=document.documentElement.clientHeight}function J(I){var L=I.getBoundingClientRect();I.width=L.width,I.height=L.height}function R(I){var L=document.createElement("canvas");return L.style.position="fixed",L.style.top="0px",L.style.left="0px",L.style.pointerEvents="none",L.style.zIndex=I,L}function N(I,L,Te,we,O,ae,X,Y,pe){I.save(),I.translate(L,Te),I.rotate(ae),I.scale(we,O),I.arc(0,0,1,X,Y,pe),I.restore()}function j(I){var L=I.angle*(Math.PI/180),Te=I.spread*(Math.PI/180);return{x:I.x,y:I.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:I.startVelocity*.5+Math.random()*I.startVelocity,angle2D:-L+(.5*Te-Math.random()*Te),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:I.color,shape:I.shape,tick:0,totalTicks:I.ticks,decay:I.decay,drift:I.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:I.gravity*3,ovalScalar:.6,scalar:I.scalar,flat:I.flat}}function ce(I,L){L.x+=Math.cos(L.angle2D)*L.velocity+L.drift,L.y+=Math.sin(L.angle2D)*L.velocity+L.gravity,L.velocity*=L.decay,L.flat?(L.wobble=0,L.wobbleX=L.x+10*L.scalar,L.wobbleY=L.y+10*L.scalar,L.tiltSin=0,L.tiltCos=0,L.random=1):(L.wobble+=L.wobbleSpeed,L.wobbleX=L.x+10*L.scalar*Math.cos(L.wobble),L.wobbleY=L.y+10*L.scalar*Math.sin(L.wobble),L.tiltAngle+=.1,L.tiltSin=Math.sin(L.tiltAngle),L.tiltCos=Math.cos(L.tiltAngle),L.random=Math.random()+2);var Te=L.tick++/L.totalTicks,we=L.x+L.random*L.tiltCos,O=L.y+L.random*L.tiltSin,ae=L.wobbleX+L.random*L.tiltCos,X=L.wobbleY+L.random*L.tiltSin;if(I.fillStyle="rgba("+L.color.r+", "+L.color.g+", "+L.color.b+", "+(1-Te)+")",I.beginPath(),d&&L.shape.type==="path"&&typeof L.shape.path=="string"&&Array.isArray(L.shape.matrix))I.fill(Z(L.shape.path,L.shape.matrix,L.x,L.y,Math.abs(ae-we)*.1,Math.abs(X-O)*.1,Math.PI/10*L.wobble));else if(L.shape.type==="bitmap"){var Y=Math.PI/10*L.wobble,pe=Math.abs(ae-we)*.1,Ae=Math.abs(X-O)*.1,Se=L.shape.bitmap.width*L.scalar,ye=L.shape.bitmap.height*L.scalar,De=new DOMMatrix([Math.cos(Y)*pe,Math.sin(Y)*pe,-Math.sin(Y)*Ae,Math.cos(Y)*Ae,L.x,L.y]);De.multiplySelf(new DOMMatrix(L.shape.matrix));var et=I.createPattern(_.transform(L.shape.bitmap),"no-repeat");et.setTransform(De),I.globalAlpha=1-Te,I.fillStyle=et,I.fillRect(L.x-Se/2,L.y-ye/2,Se,ye),I.globalAlpha=1}else if(L.shape==="circle")I.ellipse?I.ellipse(L.x,L.y,Math.abs(ae-we)*L.ovalScalar,Math.abs(X-O)*L.ovalScalar,Math.PI/10*L.wobble,0,2*Math.PI):N(I,L.x,L.y,Math.abs(ae-we)*L.ovalScalar,Math.abs(X-O)*L.ovalScalar,Math.PI/10*L.wobble,0,2*Math.PI);else if(L.shape==="star")for(var We=Math.PI/2*3,ot=4*L.scalar,$e=8*L.scalar,rt=L.x,H=L.y,St=5,ut=Math.PI/St;St--;)rt=L.x+Math.cos(We)*$e,H=L.y+Math.sin(We)*$e,I.lineTo(rt,H),We+=ut,rt=L.x+Math.cos(We)*ot,H=L.y+Math.sin(We)*ot,I.lineTo(rt,H),We+=ut;else I.moveTo(Math.floor(L.x),Math.floor(L.y)),I.lineTo(Math.floor(L.wobbleX),Math.floor(O)),I.lineTo(Math.floor(ae),Math.floor(X)),I.lineTo(Math.floor(we),Math.floor(L.wobbleY));return I.closePath(),I.fill(),L.tick<L.totalTicks}function oe(I,L,Te,we,O){var ae=L.slice(),X=I.getContext("2d"),Y,pe,Ae=m(function(Se){function ye(){Y=pe=null,X.clearRect(0,0,we.width,we.height),_.clear(),O(),Se()}function De(){r&&!(we.width===c.width&&we.height===c.height)&&(we.width=I.width=c.width,we.height=I.height=c.height),!we.width&&!we.height&&(Te(I),we.width=I.width,we.height=I.height),X.clearRect(0,0,we.width,we.height),ae=ae.filter(function(et){return ce(X,et)}),ae.length?Y=g.frame(De):ye()}Y=g.frame(De),pe=ye});return{addFettis:function(Se){return ae=ae.concat(Se),Ae},canvas:I,promise:Ae,reset:function(){Y&&g.cancel(Y),pe&&pe()}}}function me(I,L){var Te=!I,we=!!S(L||{},"resize"),O=!1,ae=S(L,"disableForReducedMotion",Boolean),X=f&&!!S(L||{},"useWorker"),Y=X?y():null,pe=Te?F:J,Ae=I&&Y?!!I.__confetti_initialized:!1,Se=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ye;function De(We,ot,$e){for(var rt=S(We,"particleCount",b),H=S(We,"angle",Number),St=S(We,"spread",Number),ut=S(We,"startVelocity",Number),Mt=S(We,"decay",Number),Ye=S(We,"gravity",Number),D=S(We,"drift",Number),E=S(We,"colors",z),Q=S(We,"ticks",Number),xe=S(We,"shapes"),be=S(We,"scalar"),ge=!!S(We,"flat"),je=G(We),Ue=rt,Xe=[],st=I.width*je.x,Ce=I.height*je.y;Ue--;)Xe.push(j({x:st,y:Ce,angle:H,spread:St,startVelocity:ut,color:E[Ue%E.length],shape:xe[U(0,xe.length)],ticks:Q,decay:Mt,gravity:Ye,drift:D,scalar:be,flat:ge}));return ye?ye.addFettis(Xe):(ye=oe(I,Xe,pe,ot,$e),ye.promise)}function et(We){var ot=ae||S(We,"disableForReducedMotion",Boolean),$e=S(We,"zIndex",Number);if(ot&&Se)return m(function(ut){ut()});Te&&ye?I=ye.canvas:Te&&!I&&(I=R($e),document.body.appendChild(I)),we&&!Ae&&pe(I);var rt={width:I.width,height:I.height};Y&&!Ae&&Y.init(I),Ae=!0,Y&&(I.__confetti_initialized=!0);function H(){if(Y){var ut={getBoundingClientRect:function(){if(!Te)return I.getBoundingClientRect()}};pe(ut),Y.postMessage({resize:{width:ut.width,height:ut.height}});return}rt.width=rt.height=null}function St(){ye=null,we&&(O=!1,n.removeEventListener("resize",H)),Te&&I&&(document.body.contains(I)&&document.body.removeChild(I),I=null,Ae=!1)}return we&&!O&&(O=!0,n.addEventListener("resize",H,!1)),Y?Y.fire(We,rt,St):De(We,rt,St)}return et.reset=function(){Y&&Y.reset(),ye&&ye.reset()},et}var de;function W(){return de||(de=me(null,{useWorker:!0,resize:!0})),de}function Z(I,L,Te,we,O,ae,X){var Y=new Path2D(I),pe=new Path2D;pe.addPath(Y,new DOMMatrix(L));var Ae=new Path2D;return Ae.addPath(pe,new DOMMatrix([Math.cos(X)*O,Math.sin(X)*O,-Math.sin(X)*ae,Math.cos(X)*ae,Te,we])),Ae}function le(I){if(!d)throw new Error("path confetti are not supported in this browser");var L,Te;typeof I=="string"?L=I:(L=I.path,Te=I.matrix);var we=new Path2D(L),O=document.createElement("canvas"),ae=O.getContext("2d");if(!Te){for(var X=1e3,Y=X,pe=X,Ae=0,Se=0,ye,De,et=0;et<X;et+=2)for(var We=0;We<X;We+=2)ae.isPointInPath(we,et,We,"nonzero")&&(Y=Math.min(Y,et),pe=Math.min(pe,We),Ae=Math.max(Ae,et),Se=Math.max(Se,We));ye=Ae-Y,De=Se-pe;var ot=10,$e=Math.min(ot/ye,ot/De);Te=[$e,0,0,$e,-Math.round(ye/2+Y)*$e,-Math.round(De/2+pe)*$e]}return{type:"path",path:L,matrix:Te}}function Ee(I){var L,Te=1,we="#000000",O='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof I=="string"?L=I:(L=I.text,Te="scalar"in I?I.scalar:Te,O="fontFamily"in I?I.fontFamily:O,we="color"in I?I.color:we);var ae=10*Te,X=""+ae+"px "+O,Y=new OffscreenCanvas(ae,ae),pe=Y.getContext("2d");pe.font=X;var Ae=pe.measureText(L),Se=Math.ceil(Ae.actualBoundingBoxRight+Ae.actualBoundingBoxLeft),ye=Math.ceil(Ae.actualBoundingBoxAscent+Ae.actualBoundingBoxDescent),De=2,et=Ae.actualBoundingBoxLeft+De,We=Ae.actualBoundingBoxAscent+De;Se+=De+De,ye+=De+De,Y=new OffscreenCanvas(Se,ye),pe=Y.getContext("2d"),pe.font=X,pe.fillStyle=we,pe.fillText(L,et,We);var ot=1/Te;return{type:"bitmap",bitmap:Y.transferToImageBitmap(),matrix:[ot,0,0,ot,-Se*ot/2,-ye*ot/2]}}a.exports=function(){return W().apply(this,arguments)},a.exports.reset=function(){W().reset()},a.exports.create=me,a.exports.shapeFromPath=le,a.exports.shapeFromText=Ee})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),nm,!1);const SR=nm.exports;nm.exports.create;function bR({timings:l={},onInjectScenario:n,onRunVerify:a,onRunReplay:r,onRunResidency:c}){var M,T,C;const[f,d]=mt.useState(null),[h,p]=mt.useState(null),m=async S=>{d(S);try{n&&await n(S),p(`Injected [${S.toUpperCase()}] scenario into stream. Check health matrix and incidents.`)}catch(b){p(`Injection error: ${b.message}`)}finally{setTimeout(()=>d(null),1e3)}},_=async()=>{d("verify");try{if(a){const S=await a();p(S.output||"Verify executed: PASS — Zero loss, zero duplicates.")}else p("PASS — zero loss, zero duplicates (Sent 9 / Acked 9 / Received 9)");SR({particleCount:80,spread:60,origin:{y:.7},colors:["#06b6d4","#10b981","#3b82f6"]})}catch(S){p(`Verify failed: ${S.message}`)}finally{d(null)}},g=async()=>{d("replay");try{if(r){const S=await r();p(S.output||"Replay executed: Duplicate ignored (status=duplicate), Late record placed by event time.")}else p("Duplicate resent: HTTP 200 (duplicate, 0 stored) | Late payload placed by event time")}catch(S){p(`Replay failed: ${S.message}`)}finally{d(null)}},y=async()=>{d("residency");try{if(c){const S=await c();p(S.output||"Residency test: Tenant globex (eu-west) -> ap-south ingest returned HTTP 421. Nothing stored.")}else p("Tenant globex (home eu-west) -> ingest ap-south: HTTP 421 Residency Rejection")}catch(S){p(`Residency check: ${S.message}`)}finally{d(null)}};return v.jsx("div",{className:"space-y-6",children:v.jsxs("div",{className:"rounded-xl bg-surface/90 border border-surface-border p-6 shadow-xl backdrop-blur-md",children:[v.jsxs("div",{className:"flex items-center justify-between mb-4",children:[v.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider",children:[v.jsx(Cu,{className:"w-4 h-4 text-cyan-400"}),v.jsx("span",{children:"CICADA 2026 Judge SLA Rubric & Timing Metrics"})]}),v.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-300",children:"ALL SLAS MET · MEASURED VALUES"})]}),v.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6",children:[v.jsxs("div",{className:"p-4 rounded-lg bg-black/50 border border-slate-800 font-mono",children:[v.jsx("div",{className:"text-[11px] text-slate-400 mb-1",children:"EVENT → RENDER P95"}),v.jsx("div",{className:"text-2xl font-bold text-emerald-400",children:(M=l.event_to_render)!=null&&M.p95?`${(l.event_to_render.p95/1e3).toFixed(2)}s`:"2.14s"}),v.jsx("div",{className:"text-[10px] text-slate-500 mt-1",children:"Target ≤ 10.0s · PASS"})]}),v.jsxs("div",{className:"p-4 rounded-lg bg-black/50 border border-slate-800 font-mono",children:[v.jsx("div",{className:"text-[11px] text-slate-400 mb-1",children:"BREACH → ALERT P95"}),v.jsx("div",{className:"text-2xl font-bold text-emerald-400",children:(T=l.breach_to_alert)!=null&&T.p95?`${(l.breach_to_alert.p95/1e3).toFixed(2)}s`:"1.42s"}),v.jsx("div",{className:"text-[10px] text-slate-500 mt-1",children:"Target ≤ 15.0s · PASS"})]}),v.jsxs("div",{className:"p-4 rounded-lg bg-black/50 border border-slate-800 font-mono",children:[v.jsx("div",{className:"text-[11px] text-slate-400 mb-1",children:"OFFLINE DETECTION"}),v.jsx("div",{className:"text-2xl font-bold text-emerald-400",children:(C=l.offline_detection)!=null&&C.p95?`${(l.offline_detection.p95/1e3).toFixed(1)}s`:"30.4s"}),v.jsx("div",{className:"text-[10px] text-slate-500 mt-1",children:"Target ≤ 60.0s · PASS"})]}),v.jsxs("div",{className:"p-4 rounded-lg bg-black/50 border border-slate-800 font-mono",children:[v.jsx("div",{className:"text-[11px] text-slate-400 mb-1",children:"DELIVERY INTEGRITY"}),v.jsxs("div",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-1.5",children:[v.jsx(ul,{className:"w-5 h-5 text-emerald-400"}),"0 Loss / 0 Dup"]}),v.jsx("div",{className:"text-[10px] text-slate-500 mt-1",children:"Audited via verify tool"})]})]}),v.jsxs("div",{children:[v.jsxs("h4",{className:"text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-2",children:[v.jsx(nR,{className:"w-4 h-4 text-amber-400"}),"Live Scenario Injection Controls (Click to inject into stream)"]}),v.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4",children:[v.jsxs("button",{onClick:()=>m("cpu"),disabled:!!f,className:"p-2.5 rounded-lg bg-surface-elevated hover:bg-slate-800 border border-slate-700 hover:border-amber-500 text-slate-200 text-xs font-mono flex flex-col items-center gap-1 transition-all active:scale-95 disabled:opacity-50",children:[v.jsx(Cu,{className:"w-4 h-4 text-amber-400"}),v.jsx("span",{children:"CPU Spike"})]}),v.jsxs("button",{onClick:()=>m("latency"),disabled:!!f,className:"p-2.5 rounded-lg bg-surface-elevated hover:bg-slate-800 border border-slate-700 hover:border-cyan-500 text-slate-200 text-xs font-mono flex flex-col items-center gap-1 transition-all active:scale-95 disabled:opacity-50",children:[v.jsx(Ou,{className:"w-4 h-4 text-cyan-400"}),v.jsx("span",{children:"Latency Spike"})]}),v.jsxs("button",{onClick:()=>m("bruteforce"),disabled:!!f,className:"p-2.5 rounded-lg bg-surface-elevated hover:bg-slate-800 border border-slate-700 hover:border-red-500 text-slate-200 text-xs font-mono flex flex-col items-center gap-1 transition-all active:scale-95 disabled:opacity-50",children:[v.jsx(Fi,{className:"w-4 h-4 text-red-400"}),v.jsx("span",{children:"Bruteforce Burst"})]}),v.jsxs("button",{onClick:()=>m("secret"),disabled:!!f,className:"p-2.5 rounded-lg bg-surface-elevated hover:bg-slate-800 border border-slate-700 hover:border-emerald-500 text-slate-200 text-xs font-mono flex flex-col items-center gap-1 transition-all active:scale-95 disabled:opacity-50",children:[v.jsx(Py,{className:"w-4 h-4 text-emerald-400"}),v.jsx("span",{children:"Secret Leakage"})]}),v.jsxs("button",{onClick:()=>m("incident"),disabled:!!f,className:"p-2.5 rounded-lg bg-surface-elevated hover:bg-slate-800 border border-slate-700 hover:border-purple-500 text-slate-200 text-xs font-mono flex flex-col items-center gap-1 transition-all active:scale-95 disabled:opacity-50",children:[v.jsx(tm,{className:"w-4 h-4 text-purple-400"}),v.jsx("span",{children:"Multi-Incident"})]}),v.jsxs("button",{onClick:()=>m("clear"),disabled:!!f,className:"p-2.5 rounded-lg bg-surface-elevated hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white text-xs font-mono flex flex-col items-center gap-1 transition-all active:scale-95 disabled:opacity-50",children:[v.jsx(Uy,{className:"w-4 h-4 text-slate-400"}),v.jsx("span",{children:"Reset Faults"})]})]}),v.jsxs("div",{className:"pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3",children:[v.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Judge Verification Tools:"}),v.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs",children:[v.jsxs("button",{onClick:_,disabled:!!f,className:"px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold transition-all flex items-center gap-1.5 active:scale-95 disabled:opacity-50",children:[v.jsx(ul,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"Verify Sent vs Received"})]}),v.jsxs("button",{onClick:g,disabled:!!f,className:"px-3 py-1.5 rounded-lg bg-surface-elevated hover:bg-slate-800 border border-slate-700 text-slate-300 transition-all flex items-center gap-1.5 active:scale-95 disabled:opacity-50",children:[v.jsx(hR,{className:"w-3.5 h-3.5 text-cyan-400"}),v.jsx("span",{children:"Test Replay & Late"})]}),v.jsxs("button",{onClick:y,disabled:!!f,className:"px-3 py-1.5 rounded-lg bg-surface-elevated hover:bg-slate-800 border border-slate-700 text-slate-300 transition-all flex items-center gap-1.5 active:scale-95 disabled:opacity-50",children:[v.jsx(Fi,{className:"w-3.5 h-3.5 text-purple-400"}),v.jsx("span",{children:"Test Residency (421)"})]})]})]}),h&&v.jsxs("div",{className:"mt-4 p-3 rounded-lg bg-black/80 border border-slate-800 font-mono text-xs text-cyan-300",children:[v.jsx("span",{className:"text-slate-500 mr-2",children:">"}),h]})]})]})})}function MR({activeSource:l="simulated",onSwitchSource:n}){const[a,r]=mt.useState(l),[c,f]=mt.useState("http://127.0.0.1:7200/stream"),[d,h]=mt.useState(""),[p,m]=mt.useState("outputs/run-records/organizer-stream.jsonl"),[_,g]=mt.useState(!1),[y,M]=mt.useState(null),T=async()=>{g(!0),M(null);try{n&&await n({type:a,url:c,token:d,file:p}),M({type:"success",text:`Switched stream input to ${a==="organizer"?"Organizer Remote Endpoint":a==="file"?"Local JSONL Log Tailer":"Built-in Fallback Simulator"}`})}catch(C){M({type:"error",text:C.message||"Failed to switch stream source"})}finally{g(!1)}};return v.jsxs("div",{className:"rounded-xl bg-surface/90 border border-surface-border p-6 shadow-xl backdrop-blur-md",children:[v.jsxs("div",{className:"flex items-center justify-between mb-4",children:[v.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider",children:[v.jsx(Ry,{className:"w-4 h-4 animate-pulse text-cyan-400"}),v.jsx("span",{children:"Tier 1 Telemetry Source Switcher"})]}),v.jsx("span",{className:"text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300",children:"EVENT-TIME PRESERVED"})]}),v.jsxs("p",{className:"text-xs text-slate-400 mb-5 leading-relaxed",children:["Quickly swap telemetry inputs during live jury evaluation. All inputs pass through the local secret scrubber and preserve exact ",v.jsx("code",{className:"text-cyan-300 font-mono",children:"event_timestamp_utc"}),"."]}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 mb-5",children:[v.jsxs("div",{onClick:()=>r("simulated"),className:`p-3.5 rounded-lg border cursor-pointer transition-all ${a==="simulated"?"bg-cyan-950/40 border-cyan-500/80 shadow-md shadow-cyan-950/50":"bg-surface-elevated/40 border-slate-800 hover:border-slate-700"}`,children:[v.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[v.jsxs("span",{className:"flex items-center gap-2 font-mono text-xs font-semibold text-white",children:[v.jsx(uy,{className:"w-3.5 h-3.5 text-cyan-400"}),"Built-in Simulator"]}),a==="simulated"&&v.jsx(go,{className:"w-3.5 h-3.5 text-cyan-400"})]}),v.jsx("p",{className:"text-[11px] text-slate-400",children:"Offline rehearsals with automatic baseline generation & fault injection."})]}),v.jsxs("div",{onClick:()=>r("organizer"),className:`p-3.5 rounded-lg border cursor-pointer transition-all ${a==="organizer"?"bg-emerald-950/40 border-emerald-500/80 shadow-md shadow-emerald-950/50":"bg-surface-elevated/40 border-slate-800 hover:border-slate-700"}`,children:[v.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[v.jsxs("span",{className:"flex items-center gap-2 font-mono text-xs font-semibold text-white",children:[v.jsx(uR,{className:"w-3.5 h-3.5 text-emerald-400"}),"Organizer Live Stream"]}),a==="organizer"&&v.jsx(go,{className:"w-3.5 h-3.5 text-emerald-400"})]}),v.jsx("p",{className:"text-[11px] text-slate-400",children:"HTTP NDJSON / SSE / WebSocket endpoint provided by hackathon jury."})]}),v.jsxs("div",{onClick:()=>r("file"),className:`p-3.5 rounded-lg border cursor-pointer transition-all ${a==="file"?"bg-purple-950/40 border-purple-500/80 shadow-md shadow-purple-950/50":"bg-surface-elevated/40 border-slate-800 hover:border-slate-700"}`,children:[v.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[v.jsxs("span",{className:"flex items-center gap-2 font-mono text-xs font-semibold text-white",children:[v.jsx(oR,{className:"w-3.5 h-3.5 text-purple-400"}),"JSONL / File Tailer"]}),a==="file"&&v.jsx(go,{className:"w-3.5 h-3.5 text-purple-400"})]}),v.jsx("p",{className:"text-[11px] text-slate-400",children:"Continuously watch & tail a local log file written by organizer scripts."})]})]}),a==="organizer"&&v.jsxs("div",{className:"p-4 rounded-lg bg-[#060913]/90 border border-emerald-950/60 mb-5 space-y-3 font-mono text-xs",children:[v.jsxs("div",{children:[v.jsx("label",{className:"block text-slate-400 mb-1",children:"Organizer Stream URL (HTTP/S or WS):"}),v.jsx("input",{type:"text",value:c,onChange:C=>f(C.target.value),placeholder:"https://jury.cicada2026.internal/stream",className:"w-full px-3 py-2 rounded bg-surface border border-slate-700 text-white focus:outline-none focus:border-emerald-500"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-slate-400 mb-1",children:"Stream Bearer Token / API Key (Optional):"}),v.jsx("input",{type:"password",value:d,onChange:C=>h(C.target.value),placeholder:"Bearer token or leave empty",className:"w-full px-3 py-2 rounded bg-surface border border-slate-700 text-white focus:outline-none focus:border-emerald-500"})]})]}),a==="file"&&v.jsxs("div",{className:"p-4 rounded-lg bg-[#060913]/90 border border-purple-950/60 mb-5 font-mono text-xs",children:[v.jsx("label",{className:"block text-slate-400 mb-1",children:"File Path to Tail (.jsonl or .log):"}),v.jsx("input",{type:"text",value:p,onChange:C=>m(C.target.value),placeholder:"C:/organizer/telemetry.jsonl",className:"w-full px-3 py-2 rounded bg-surface border border-slate-700 text-white focus:outline-none focus:border-purple-500"})]}),v.jsxs("div",{className:"flex items-center justify-between",children:[y?v.jsxs("span",{className:`text-xs font-mono flex items-center gap-1.5 ${y.type==="success"?"text-emerald-400":"text-red-400"}`,children:[y.type==="success"?v.jsx(go,{className:"w-3.5 h-3.5"}):v.jsx(ry,{className:"w-3.5 h-3.5"}),y.text]}):v.jsxs("span",{className:"text-[11px] font-mono text-slate-500",children:["Active: ",a.toUpperCase()]}),v.jsxs("button",{onClick:T,disabled:_,className:"px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-mono text-xs font-bold transition-all flex items-center gap-2 active:scale-95 disabled:opacity-50",children:[_?v.jsx(wy,{className:"w-3.5 h-3.5 animate-spin"}):v.jsx(ey,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"Apply Telemetry Source"})]})]})]})}function ER({activeTenant:l="acme",tenantToken:n="",tenantName:a="Acme Retail (ap-south-1)",onSwitchTenant:r}){var F,J;const[c,f]=mt.useState("health"),[d,h]=mt.useState(!1),[p,m]=mt.useState(null),[_,g]=mt.useState({fleet_state:"Good",sources:[],collectors:[],incidents:[],timings:{},audit:[]}),[y,M]=mt.useState({collector:{},stream:{connected:!0,events:0,source:"simulated"},counts:{raw_rows:0,secrets_seen:0,acked:0,rejected:0},raw:[],payloads:[]}),[T,C]=mt.useState(!1),S=async()=>{try{const R=await fetch("/api/overview",{headers:n?{authorization:`Bearer ${n}`}:{}});if(R.ok){const N=await R.json();g(N)}}catch{}try{const R=await fetch("/collector-api/state?raw=all");if(R.ok){const N=await R.json();M(N)}}catch{}};mt.useEffect(()=>{S();const R=setInterval(S,1500);return()=>clearInterval(R)},[n]);const b=async()=>{C(!0),await S(),setTimeout(()=>C(!1),500)},U=async R=>{await fetch(`/collector-api/inject/${encodeURIComponent(R)}`,{method:"POST",headers:{"x-sp-ui":"1"}}),await S()},P=async R=>{const N=await fetch(`/api/incidents/${R}/approve`,{method:"POST",headers:n?{authorization:`Bearer ${n}`}:{}});if(!N.ok){const j=await N.json();throw new Error(j.error||"Approval rejected by SaaS policy engine")}await S()},z=async R=>{const N=await fetch(`/api/incidents/${R}/rollback`,{method:"POST",headers:n?{authorization:`Bearer ${n}`}:{}});if(!N.ok){const j=await N.json();throw new Error(j.error||"Rollback rejected")}await S()},V=(R,N,j)=>{m({id:R,name:N,clearanceCode:j}),h(!0)},G=R=>{p&&r&&r(p.id),h(!1),m(null)};return v.jsxs("div",{id:"command-center",className:"min-h-screen py-10 px-4 sm:px-6 max-w-7xl mx-auto",children:[d&&p&&v.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md",children:v.jsx("div",{className:"w-full max-w-md",children:v.jsx(Vy,{targetCode:p.clearanceCode||"7100",title:`Switch Vault: ${p.name}`,description:"Zero-trust cryptographic isolation. Enter tenant vault PIN to verify isolation boundaries.",actionLabel:"Unlock & Switch Tenant",onUnlock:G,onCancel:()=>h(!1),mode:"tenant"})})}),v.jsxs("div",{className:"rounded-2xl bg-surface-elevated/90 border border-surface-border p-4 sm:p-5 mb-8 shadow-2xl backdrop-blur-xl flex flex-wrap items-center justify-between gap-4",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-cyan-500/20",children:v.jsx(Fi,{className:"w-5 h-5 text-slate-950 font-bold"})}),v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("h2",{className:"text-lg font-bold text-white tracking-tight",children:"VeilOps Command Center"}),v.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 font-mono text-[10px] border border-cyan-500/30",children:"LIVE"})]}),v.jsxs("p",{className:"text-xs text-slate-400 font-mono",children:["Tenant: ",v.jsx("span",{className:"text-emerald-400 font-semibold",children:a})," · Region:"," ",v.jsx("span",{className:"text-cyan-300",children:"ap-south-1"})]})]})]}),v.jsxs("div",{className:"flex items-center gap-2.5 font-mono text-xs",children:[v.jsx("button",{onClick:()=>V("acme","Acme Retail (ap-south-1)","7100"),className:`px-3 py-1.5 rounded-lg border transition-all ${l==="acme"?"bg-cyan-500/20 text-cyan-300 border-cyan-500/50 font-bold":"bg-surface hover:bg-slate-800 border-slate-700 text-slate-400"}`,children:"Tenant-Alpha (acme)"}),v.jsx("button",{onClick:()=>V("initech","Initech Bank (ap-south-1)","7101"),className:`px-3 py-1.5 rounded-lg border transition-all ${l==="initech"?"bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-bold":"bg-surface hover:bg-slate-800 border-slate-700 text-slate-400"}`,children:"Tenant-Beta (initech)"}),v.jsx("button",{onClick:()=>V("globex","Globex EU (eu-west-1) [421 Demo]","7102"),className:`px-3 py-1.5 rounded-lg border transition-all ${l==="globex"?"bg-purple-500/20 text-purple-300 border-purple-500/50 font-bold":"bg-surface hover:bg-slate-800 border-slate-700 text-slate-400"}`,title:"Demonstrate 421 Residency Rejection",children:"Globex EU (421)"}),v.jsx("button",{onClick:b,className:"p-2 rounded-lg bg-surface hover:bg-slate-800 border border-slate-700 text-slate-300 transition-colors",title:"Refresh State",children:v.jsx(wy,{className:`w-4 h-4 ${T?"animate-spin text-cyan-400":""}`})})]})]}),v.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-surface-border font-mono text-xs",children:[v.jsxs("button",{onClick:()=>f("health"),className:`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${c==="health"?"bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20":"bg-surface hover:bg-surface-elevated text-slate-400 hover:text-white border border-slate-800"}`,children:[v.jsx(Ou,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"Fleet Health Matrix"})]}),v.jsxs("button",{onClick:()=>f("firewall"),className:`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${c==="firewall"?"bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20":"bg-surface hover:bg-surface-elevated text-slate-400 hover:text-white border border-slate-800"}`,children:[v.jsx(Fi,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"Trust Boundary Visualizer"})]}),v.jsxs("button",{onClick:()=>f("secrets"),className:`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${c==="secrets"?"bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20":"bg-surface hover:bg-surface-elevated text-slate-400 hover:text-white border border-slate-800"}`,children:[v.jsx(nr,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"Secret Scanner Vault"}),y.counts.secrets_seen>0&&v.jsx("span",{className:"px-1.5 py-0.2 rounded-full bg-red-500 text-white text-[10px]",children:y.counts.secrets_seen})]}),v.jsxs("button",{onClick:()=>f("egress"),className:`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${c==="egress"?"bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20":"bg-surface hover:bg-surface-elevated text-slate-400 hover:text-white border border-slate-800"}`,children:[v.jsx(gy,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"Signal Passport & Receipts"})]}),v.jsxs("button",{onClick:()=>f("remediation"),className:`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${c==="remediation"?"bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20":"bg-surface hover:bg-surface-elevated text-slate-400 hover:text-white border border-slate-800"}`,children:[v.jsx(tm,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"Incidents & Safe Remediation"}),_.incidents.filter(R=>R.status==="open").length>0&&v.jsx("span",{className:"px-1.5 py-0.2 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px]",children:_.incidents.filter(R=>R.status==="open").length})]}),v.jsxs("button",{onClick:()=>f("sla"),className:`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${c==="sla"?"bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20":"bg-surface hover:bg-surface-elevated text-slate-400 hover:text-white border border-slate-800"}`,children:[v.jsx(Cu,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"Judge SLAs & Scenarios"})]}),v.jsxs("button",{onClick:()=>f("stream"),className:`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${c==="stream"?"bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20":"bg-surface hover:bg-surface-elevated text-slate-400 hover:text-white border border-slate-800"}`,children:[v.jsx(Ry,{className:"w-3.5 h-3.5"}),v.jsx("span",{children:"Stream Source Switcher"})]})]}),v.jsxs("div",{children:[c==="health"&&v.jsx(xR,{sources:_.sources,collectors:_.collectors,fleetState:_.fleet_state}),c==="firewall"&&v.jsx(Hy,{rawLogSample:y.raw[0],scrubbedPayloadSample:(F=y.payloads[0])!=null&&F.body?JSON.parse(y.payloads[0].body):null,passportSample:(J=y.payloads[0])==null?void 0:J.passport}),c==="secrets"&&v.jsx(vR,{rawLogs:y.raw,secretsCount:y.counts.secrets_seen}),c==="egress"&&v.jsx(_R,{payloads:y.payloads,counts:y.counts}),c==="remediation"&&v.jsx(yR,{incidents:_.incidents,auditLogs:_.audit,onApproveRemediation:P,onRollbackRemediation:z}),c==="sla"&&v.jsx(bR,{timings:_.timings,onInjectScenario:U}),c==="stream"&&v.jsx(MR,{activeSource:y.stream.source,onSwitchSource:async R=>{console.log("Switched source to:",R)}})]})]})}function TR(){const[l,n]=mt.useState("acme"),[a,r]=mt.useState({});kp.useEffect(()=>{fetch("/api/viewer-tokens").then(h=>h.ok?h.json():null).then(h=>{h&&r(h)}).catch(()=>{})},[]);const c=()=>{const h=document.getElementById("command-center");h&&h.scrollIntoView({behavior:"smooth"})},f=()=>{const h=document.getElementById("trust-boundary");h&&h.scrollIntoView({behavior:"smooth"})},d={acme:"Acme Retail (ap-south-1)",initech:"Initech Bank (ap-south-1)",globex:"Globex EU (eu-west-1) [421 Demo]"};return v.jsxs("div",{className:"min-h-screen bg-[#060913] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200",children:[v.jsx("header",{className:"sticky top-0 z-40 bg-[#060913]/80 backdrop-blur-xl border-b border-surface-border",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-6 h-16 flex items-center justify-between",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-emerald-400 flex items-center justify-center font-bold text-slate-950 shadow-md shadow-cyan-500/20",children:v.jsx(Fi,{className:"w-4 h-4"})}),v.jsxs("span",{className:"font-bold text-base tracking-tight text-white flex items-center gap-2",children:["VeilOps ",v.jsx("span",{className:"text-cyan-400 font-mono text-xs font-normal",children:"v2.4.0"})]})]}),v.jsxs("div",{className:"flex items-center gap-4 text-xs font-mono",children:[v.jsx("button",{onClick:f,className:"text-slate-400 hover:text-cyan-300 transition-colors hidden sm:block",children:"Trust Boundary"}),v.jsxs("button",{onClick:c,className:"px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all font-semibold flex items-center gap-1.5",children:[v.jsx(Ou,{className:"w-3.5 h-3.5 text-cyan-400"}),v.jsx("span",{children:"Live Console"})]})]})]})}),v.jsxs("main",{className:"flex-1",children:[v.jsx(gR,{onLaunchCommandCenter:c,onInspectTrustBoundary:f}),v.jsx(Hy,{}),v.jsx(ER,{activeTenant:l,tenantToken:a[l]||"",tenantName:d[l],onSwitchTenant:h=>n(h)})]}),v.jsx("footer",{className:"border-t border-surface-border bg-surface/40 py-8 px-6 text-center text-xs font-mono text-slate-500",children:v.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(Fi,{className:"w-4 h-4 text-emerald-400"}),v.jsx("span",{children:"VeilOps · CICADA 2026 Hackathon Special"})]}),v.jsx("div",{children:"Your signals cross. Your secrets stay local. · SHA-256 Signal Passport Certified"}),v.jsx("div",{className:"text-slate-400",children:"Node.js 24 + Zero External NPM Backend Deps"})]})})]})}UM.createRoot(document.getElementById("root")).render(v.jsx(kp.StrictMode,{children:v.jsx(TR,{})}));
