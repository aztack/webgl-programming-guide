!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return u}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function o(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function u(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],u=0,c=i.length;u<c;u++,o++)n[o]=i[u];return n}},function(e,t,r){"use strict";r.r(t),r.d(t,"OOWebGLObject",(function(){return n}));var n=function(){function e(){}return e.prototype.init=function(e){this.ctx=e},e.prototype.$debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},e}()},function(e,t,r){"use strict";r.r(t),r.d(t,"create3DContext",(function(){return o})),r.d(t,"fetchShader",(function(){return u})),r.d(t,"loadShader",(function(){return c})),r.d(t,"isInteger",(function(){return f})),r.d(t,"isDefined",(function(){return a})),r.d(t,"isArray",(function(){return d}));var n=["webgl2","webgl","experimental-webgl","webkit-3d","moz-webgl"];function o(e,t){for(var r=null,o=0;o<n.length;o++){try{r=e.getContext(n[o],t)}catch(e){}if(r)break}if(!r)throw new Error("Create 3D context failed, your browser does not support WebGL!");return r}var i=/\s*void\s+main\(\s*\)/;function u(e){if(e instanceof HTMLScriptElement){if(e.textContent)return Promise.resolve(e.textContent)}else if("string"==typeof e)return e.match(i)?Promise.resolve(e):fetch(e).then((function(e){return e.text()}));return Promise.reject(new Error("Failed to fetch shader"))}function c(e,t,r){return u(t).then((function(t){var n=e.createShader(r);if(!n)throw new Error("Create shader failed!");if(e.shaderSource(n,t),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){var o=r===e.VERTEX_SHADER?"vertex":"fragment",i=e.getShaderInfoLog(n),u=new Error("Failed to compile "+o+" shader:\n"+i+"\nSOURCE:\n"+t);throw e.deleteShader(n),u}return{code:t,shader:n}}))}var f=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e};function a(e){return void 0!==e}function d(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,r){"use strict";r.r(t),r.d(t,"OOWebGLShader",(function(){return c}));var n=r(0),o=r(2),i=r(1),u=0,c=function(e){function t(t,r,n){var o=e.call(this)||this;return o.ctx=t,o.source=r,o.type=n,o.name="",o.name=(n===t.VERTEX_SHADER?"vertex":"fragment")+"-shader#"+u++,o}return Object(n.b)(t,e),t.createVertextShader=function(e,r){return new t(e,r,e.VERTEX_SHADER).init()},t.createFragmentShader=function(e,r){return new t(e,r,e.FRAGMENT_SHADER).init()},t.prototype.init=function(){var e=this;return Object(o.loadShader)(this.ctx,this.source,this.type).then((function(t){return e.$debug(e.name+" loaded:\n",t.code),e.shader=t.shader,e.shaderCode=t.code,e}))},t.bgColor="#FF5722",t}(i.OOWebGLObject)}])}));
//# sourceMappingURL=shader.js.map