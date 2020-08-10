var contextNames = ['webgl2', 'webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'];
/**
 * Creates a webgl context.
 * @param {!Canvas} canvas The canvas tag to get context
 *     from. If one is not passed in one will be created.
 * @return {!WebGLContext} The created context.
 */
export function create3DContext(canvas, opts) {
    var ctx = null;
    for (var i = 0; i < contextNames.length; i++) {
        try {
            ctx = canvas.getContext(contextNames[i], opts);
        }
        catch (e) {
            // Do nothing
        }
        if (ctx)
            break;
    }
    if (!ctx) {
        throw new Error("Create 3D context failed, your browser does not support WebGL!");
    }
    return ctx;
}
var shaderPattern = /\s*void\s+main\(\s*\)/;
export function fetchShader(source) {
    if (source instanceof HTMLScriptElement) {
        if (source.textContent)
            return Promise.resolve(source.textContent);
    }
    else if (typeof source === 'string') {
        if (source.match(shaderPattern))
            return Promise.resolve(source);
        return fetch(source).then(function (resp) { return resp.text(); });
    }
    return Promise.reject(new Error("Failed to fetch shader"));
}
export function loadShader(gl, source, type) {
    return fetchShader(source).then(function (code) {
        var shader = gl.createShader(type);
        if (!shader) {
            throw new Error("Create shader failed!");
        }
        gl.shaderSource(shader, code);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            var t = type === gl.VERTEX_SHADER ? 'vertex' : 'fragment';
            var errMsg = gl.getShaderInfoLog(shader);
            var err = new Error("Failed to compile " + t + " shader:\n" + errMsg + "\nSOURCE:\n" + code);
            gl.deleteShader(shader);
            throw err;
        }
        return { code: code, shader: shader };
    });
}
// https://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer/20779354#20779354
export var isInteger = Number.isInteger || function (value) {
    return typeof value === 'number' &&
        isFinite(value) &&
        Math.floor(value) === value;
};
export function isDefined(val) {
    return typeof val !== 'undefined';
}
export function isArray(val) {
    return Array.isArray ? Array.isArray(val) : Object.prototype.toString.call(val) === '[object Array]';
}
var minInterval = 1000 / 60;
/**
 * Provides requestAnimationFrame and cancelAnimationFrame in a cross browser
 * way.
 */
export var raf = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        // @ts-ignore
        window.mozRequestAnimationFrame ||
        // @ts-ignore
        window.oRequestAnimationFrame ||
        // @ts-ignore
        window.msRequestAnimationFrame ||
        function (callback) {
            return window.setTimeout(callback, minInterval);
        };
})();
export var caf = (function () {
    return window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        // @ts-ignore
        window.mozCancelAnimationFrame ||
        // @ts-ignore
        window.oCancelAnimationFrame ||
        // @ts-ignore
        window.msCancelAnimationFrame ||
        function (id) {
            return window.clearTimeout(id);
        };
})();
