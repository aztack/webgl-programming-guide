import { __extends, __read, __spread } from "tslib";
import { create3DContext, isDefined } from './utils';
import { OOWebGLObject } from './object';
import { OOWebGLShader } from './shader';
import { OOProgram } from './program';
import { OOBuffer } from './buffer';
import { Color } from './color';
import { OOTexture } from './texture';
var contextUuid = 0;
var OOWebGL = /** @class */ (function (_super) {
    __extends(OOWebGL, _super);
    function OOWebGL(canvas, opts) {
        var _this = _super.call(this) || this;
        _this.currentProgram = null;
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
        var _this = this;
        return OOProgram.create(this.ctx, vss, fss).then(function (prog) {
            prog.octx = _this;
            return prog;
        });
    };
    OOWebGL.prototype.useProgram = function (prog) {
        this.currentProgram = prog;
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
    OOWebGL.prototype.createBuffer = function (data, attr, elePerVertex, type, normalized, stride, offset) {
        var attrLoc;
        if (typeof attr === 'string') {
            attrLoc = this.currentProgram.getAttribute(attr);
        }
        else {
            attrLoc = attr;
        }
        var ret = new OOBuffer().init(this.ctx).data(data);
        if (attr && elePerVertex)
            ret.attribute(attrLoc, elePerVertex, type, normalized, stride, offset);
        return ret;
    };
    OOWebGL.prototype.createTexture = function (sampler, img, texture) {
        var tex = texture || new OOTexture();
        tex.init(this.ctx);
        tex.bind(sampler, img);
        return tex;
    };
    OOWebGL.prototype.clear = function (r, g, b, a, mask) {
        this.$debug("clear");
        var gl = this.ctx;
        if (arguments.length === 0) {
            gl.clearColor(0, 0, 0, 1);
        }
        else {
            if (r instanceof Color) {
                gl.clearColor.apply(gl, __spread(r.vec4));
            }
            else {
                gl.clearColor(r, g, b, a);
            }
        }
        if (!isDefined(mask))
            mask = gl.COLOR_BUFFER_BIT;
        gl.clear(mask);
        return this;
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