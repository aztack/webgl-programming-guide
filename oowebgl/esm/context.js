import { __extends } from "tslib";
import { create3DContext } from './utils';
import { OOWebGLObject } from './object';
import { OOWebGLShader } from './shader';
import { OOProgram } from './program';
import { OOBuffer } from './buffer';
var contextUuid = 0;
var OOWebGL = /** @class */ (function (_super) {
    __extends(OOWebGL, _super);
    function OOWebGL(canvas, opts) {
        var _this = _super.call(this) || this;
        _this.name = "context#" + contextUuid++;
        if (!canvas) {
            canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
        }
        _this.canvas = canvas;
        _this.init(opts);
        return _this;
    }
    OOWebGL.prototype.init = function (opts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ctx = create3DContext(_this.canvas, opts);
            _this.canvas.addEventListener('webglcontextcreationerror', reject);
            resolve(_this);
        });
    };
    OOWebGL.prototype.createProgram = function (vss, fss) {
        return OOProgram.create(this.ctx, vss, fss);
    };
    OOWebGL.prototype.useProgram = function (prog) {
        return this.ctx.useProgram(prog.program);
    };
    OOWebGL.prototype.createVertextShader = function (source, name) {
        return OOWebGLShader.createVertextShader(this.ctx, source).then(function (shader) {
            if (name)
                shader.name = name;
            return shader;
        });
    };
    OOWebGL.prototype.createFragmentShader = function (source, name) {
        return OOWebGLShader.createFragmentShader(this.ctx, source).then(function (shader) {
            if (name)
                shader.name = name;
            return shader;
        });
    };
    OOWebGL.prototype.createBuffer = function (data, attr, elePerVertex) {
        var ret = new OOBuffer(this.ctx).data(data);
        if (attr && elePerVertex)
            ret.attribute(attr, elePerVertex);
        return ret;
    };
    OOWebGL.prototype.clear = function (r, g, b, a, mask) {
        if (r === void 0) { r = 0; }
        if (g === void 0) { g = 0; }
        if (b === void 0) { b = 0; }
        if (a === void 0) { a = 1; }
        if (mask === void 0) { mask = this.ctx.COLOR_BUFFER_BIT; }
        this.$debug("clear");
        var gl = this.ctx;
        gl.clearColor(r, g, b, a);
        gl.clear(mask);
    };
    OOWebGL.prototype.draw = function (mode, count, first) {
        if (mode === void 0) { mode = 'TRIANGLES'; }
        if (first === void 0) { first = 0; }
        this.$debug("drawArrays(" + mode + ", " + first + ", " + count + ")");
        var gl = this.ctx;
        if (mode in gl) {
            // @ts-ignore
            gl.drawArrays(gl[mode], first, count);
        }
        else {
            throw new Error("Invaid drawArrays mode: " + mode);
        }
    };
    OOWebGL.bgColor = '#2196F3';
    return OOWebGL;
}(OOWebGLObject));
export { OOWebGL };
/*
(async () => {
  const ctx = new OOWebGL();
  const prog = await ctx.createProgram();
  prog.attachShaders(
    await ctx.createVertextShader(document.querySelector('#vs') as HTMLScriptElement),
    await ctx.createFragmentShader(document.querySelector('#fs') as HTMLScriptElement)
  ).link();
})();
*/ 
//# sourceMappingURL=context.js.map