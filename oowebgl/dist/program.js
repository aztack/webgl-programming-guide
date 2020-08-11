!function(t,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e=r();for(var n in e)("object"==typeof exports?exports:t)[n]=e[n]}}(window,(function(){return function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=5)}([function(t,r,e){"use strict";e.d(r,"b",(function(){return o})),e.d(r,"a",(function(){return i})),e.d(r,"c",(function(){return a}));
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
var n=function(t,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])})(t,r)};function o(t,r){function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}var i=function(){return(i=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)};function a(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;var n=Array(t),o=0;for(r=0;r<e;r++)for(var i=arguments[r],a=0,u=i.length;a<u;a++,o++)n[o]=i[a];return n}},function(t,r,e){"use strict";e.r(r),e.d(r,"OOWebGLObject",(function(){return n}));var n=function(){function t(){}return t.prototype.init=function(t){this.ctx=t},t.prototype.$debug=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]},t}()},function(t,r,e){"use strict";e.r(r),e.d(r,"create3DContext",(function(){return o})),e.d(r,"fetchShader",(function(){return a})),e.d(r,"loadShader",(function(){return u})),e.d(r,"isInteger",(function(){return s})),e.d(r,"isDefined",(function(){return f})),e.d(r,"isArray",(function(){return c}));var n=["webgl2","webgl","experimental-webgl","webkit-3d","moz-webgl"];function o(t,r){for(var e=null,o=0;o<n.length;o++){try{e=t.getContext(n[o],r)}catch(t){}if(e)break}if(!e)throw new Error("Create 3D context failed, your browser does not support WebGL!");return e}var i=/\s*void\s+main\(\s*\)/;function a(t){if(t instanceof HTMLScriptElement){if(t.textContent)return Promise.resolve(t.textContent)}else if("string"==typeof t)return t.match(i)?Promise.resolve(t):fetch(t).then((function(t){return t.text()}));return Promise.reject(new Error("Failed to fetch shader"))}function u(t,r,e){return a(r).then((function(r){var n=t.createShader(e);if(!n)throw new Error("Create shader failed!");if(t.shaderSource(n,r),t.compileShader(n),!t.getShaderParameter(n,t.COMPILE_STATUS)){var o=e===t.VERTEX_SHADER?"vertex":"fragment",i=t.getShaderInfoLog(n),a=new Error("Failed to compile "+o+" shader:\n"+i+"\nSOURCE:\n"+r);throw t.deleteShader(n),a}return{code:r,shader:n}}))}var s=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t};function f(t){return void 0!==t}function c(t){return Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)}},function(t,r,e){"use strict";e.r(r),e.d(r,"OOWebGLShader",(function(){return u}));var n=e(0),o=e(2),i=e(1),a=0,u=function(t){function r(r,e,n){var o=t.call(this)||this;return o.ctx=r,o.source=e,o.type=n,o.name="",o.name=(n===r.VERTEX_SHADER?"vertex":"fragment")+"-shader#"+a++,o}return Object(n.b)(r,t),r.createVertextShader=function(t,e){return new r(t,e,t.VERTEX_SHADER).init()},r.createFragmentShader=function(t,e){return new r(t,e,t.FRAGMENT_SHADER).init()},r.prototype.init=function(){var t=this;return Object(o.loadShader)(this.ctx,this.source,this.type).then((function(r){return t.$debug(t.name+" loaded:\n",r.code),t.shader=r.shader,t.shaderCode=r.code,t}))},r.bgColor="#FF5722",r}(i.OOWebGLObject)},,function(t,r,e){"use strict";e.r(r),e.d(r,"OOProgram",(function(){return u}));var n=e(0),o=e(1),i=e(3),a=0,u=function(t){function r(){var r=t.call(this)||this;return r.shaders=[],r.attributes={},r.uniforms={},r.name="program#"+a++,r}return Object(n.b)(r,t),r.create=function(t,e,n){var o=(new r).init(t);return e&&n?Promise.all([i.OOWebGLShader.createVertextShader(t,e),i.OOWebGLShader.createFragmentShader(t,n)]).then((function(t){return o.attachShaders.apply(o,t),o})):Promise.resolve(o)},r.prototype.init=function(r){t.prototype.init.call(this,r);var e=this.ctx.createProgram();if(!e)throw new Error("Create program failed!");return this.program=e,this},r.prototype.use=function(){return this.$debug("use "+this.name),this.ctx.useProgram(this.program),this},r.prototype.attachShaders=function(){for(var t=this,r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return this.ensureCreated(),r.forEach((function(r){t.ctx.attachShader(t.program,r.shader),t.$debug(r.name+" attached")})),this.shaders=r,this},r.prototype.deleteShaders=function(){for(;this.shaders.length;){var t=this.shaders.pop();this.ctx.deleteShader(t.shader),this.$debug("deleting shader",t)}return this},r.prototype.link=function(){for(var t=this,r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return this.ensureCreated(),this.ctx.linkProgram(this.program),new Promise((function(r,e){t.linkStatus?(t.$debug(t.name+" linked"),r()):e(new Error(t.infoLog||"unknown error"))}))},r.prototype.linkAndUse=function(){for(var t=this,r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return this.link.apply(this,r).then((function(){return t.use()}))},r.prototype.getParameter=function(t){return this.ctx.getProgramParameter(this.program,t)},Object.defineProperty(r.prototype,"stat",{get:function(){var t=this.ctx,r={DELETE_STATUS:t.getProgramParameter(this.program,t.DELETE_STATUS),LINK_STATUS:t.getProgramParameter(this.program,t.LINK_STATUS),VALIDATE_STATUS:t.getProgramParameter(this.program,t.VALIDATE_STATUS),ATTACHED_SHADERS:t.getProgramParameter(this.program,t.ATTACHED_SHADERS),ACTIVE_ATTRIBUTES:t.getProgramParameter(this.program,t.ACTIVE_ATTRIBUTES),ACTIVE_UNIFORMS:t.getProgramParameter(this.program,t.ACTIVE_UNIFORMS)};return"TRANSFORM_FEEDBACK_BUFFER_MODE"in t&&(r=Object(n.a)(Object(n.a)({},r),{TRANSFORM_FEEDBACK_BUFFER_MODE:t.getProgramParameter(this.program,t.TRANSFORM_FEEDBACK_BUFFER_MODE),TRANSFORM_FEEDBACK_VARYINGS:t.getProgramParameter(this.program,t.TRANSFORM_FEEDBACK_VARYINGS),ACTIVE_UNIFORM_BLOCKS:t.getProgramParameter(this.program,t.ACTIVE_UNIFORM_BLOCKS)})),r},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"linkStatus",{get:function(){return this.getParameter(this.ctx.LINK_STATUS)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"valid",{get:function(){return this.ctx.validateProgram(this.program),this.getParameter(this.ctx.VALIDATE_STATUS)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"infoLog",{get:function(){return this.ctx.getProgramInfoLog(this.program)},enumerable:!1,configurable:!0}),r.prototype.getAttribute=function(t){var r=this.attributes[t];if(!r){var e=this.ctx.getAttribLocation(this.program,t);e>=0&&(this.attributes[t]=e,r=e)}return r},r.prototype.getUniform=function(t){var r=this.uniforms[t];if(!r){var e=this.ctx.getUniformLocation(this.program,t);e&&(this.uniforms[t]=e,r=e)}return r},r.prototype._setUniform=function(t,r){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];for(var o=1;o<e.length;o++)e[o]+=0;var i=this.ctx[r.replace(/i$/,"f")].apply(this.ctx,e);return e[0]=t,this.$debug(r+"("+e.join(",")+")"),i},r.prototype.setUniform=function(t,r,e,n,o){var i=this.getUniform(t);if(!i)throw new Error("Can not get the uniform location of "+t);void 0!==r&&void 0!==e&&void 0!==n&&void 0!==o?this._setUniform(t,"uniform4f",i,r,e,n,o):void 0!==r&&void 0!==e&&void 0!==n&&void 0===o?this._setUniform(t,"uniform3f",i,r,e,n):void 0!==r&&void 0!==e&&void 0===n&&void 0===o?this._setUniform(t,"uniform2f",i,r,e):void 0!==r&&void 0===e&&void 0===n&&void 0===o&&this._setUniform(t,"uniform1f",i,r)},r.prototype.setAttribute=function(t,r,e,n,o){var i=this.getAttribute(t);if(i<0)throw new Error("Can not get the attribute location of "+t);var a=this.ctx;if("number"==typeof r)void 0!==r&&void 0!==e&&void 0!==n&&void 0!==o?a.vertexAttrib4f(i,r,e,n,o):void 0!==r&&void 0!==e&&void 0!==n&&void 0===o?a.vertexAttrib3f(i,r,e,n):void 0!==r&&void 0!==e&&void 0===n&&void 0===o?a.vertexAttrib2f(i,r,e):void 0!==r&&void 0===e&&void 0===n&&void 0===o&&a.vertexAttrib1f(i,r);else{var u=r;switch(u.length){case 0:throw new Error("Empty list for vertexAttrib?fv");case 1:a.vertexAttrib1fv(i,u);break;case 2:a.vertexAttrib2fv(i,u);break;case 3:a.vertexAttrib3fv(i,u);break;default:a.vertexAttrib4fv(i,u)}}return this.$debug("attribute "+t+" set to",r,e,n,o),this},r.prototype.destroy=function(){this.deleteShaders(),this.ctx.deleteProgram(this.program),this.$debug("program destroyed")},r.prototype.ensureCreated=function(){this.program||this.init(this.ctx)},r.bgColor="#4CAF50",r}(o.OOWebGLObject)}])}));
//# sourceMappingURL=program.js.map