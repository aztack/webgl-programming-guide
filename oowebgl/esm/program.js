import { __assign, __extends, __read, __spread } from "tslib";
import { OOWebGLObject } from './object';
import { OOWebGLShader } from './shader';
var programUuid = 0;
var OOProgram = /** @class */ (function (_super) {
    __extends(OOProgram, _super);
    function OOProgram() {
        var _this = _super.call(this) || this;
        _this.shaders = [];
        _this.attributes = {};
        _this.uniforms = {};
        _this.name = "program#" + programUuid++;
        return _this;
    }
    OOProgram.create = function (ctx, vss, fss) {
        var prog = new OOProgram().init(ctx);
        if (!vss || !fss)
            return Promise.resolve(prog);
        return Promise.all([
            OOWebGLShader.createVertextShader(ctx, vss),
            OOWebGLShader.createFragmentShader(ctx, fss)
        ]).then(function (shaders) {
            prog.attachShaders.apply(prog, __spread(shaders));
            return prog;
        });
    };
    OOProgram.prototype.init = function (ctx) {
        _super.prototype.init.call(this, ctx);
        var program = this.ctx.createProgram();
        if (!program) {
            throw new Error("Create program failed!");
        }
        this.program = program;
        return this;
    };
    OOProgram.prototype.use = function () {
        this.$debug("use " + this.name);
        this.octx.currentProgram = this;
        this.ctx.useProgram(this.program);
        return this;
    };
    OOProgram.prototype.attachShaders = function () {
        var _this = this;
        var shaders = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            shaders[_i] = arguments[_i];
        }
        this.ensureCreated();
        shaders.forEach(function (shader) {
            _this.ctx.attachShader(_this.program, shader.shader);
            _this.$debug(shader.name + " attached");
        });
        this.shaders = shaders;
        return this;
    };
    OOProgram.prototype.deleteShaders = function () {
        while (this.shaders.length) {
            var shader = this.shaders.pop();
            this.ctx.deleteShader(shader.shader);
            this.$debug("deleting shader", shader);
        }
        return this;
    };
    OOProgram.prototype.link = function () {
        var _this = this;
        this.ensureCreated();
        this.ctx.linkProgram(this.program);
        return new Promise(function (resolve, reject) {
            if (_this.linkStatus) {
                _this.$debug(_this.name + " linked");
                resolve();
            }
            else {
                reject(new Error(_this.infoLog || 'unknown error'));
            }
        });
    };
    OOProgram.prototype.linkAndUse = function () {
        var _this = this;
        return this.link().then(function () { return _this.use(); });
    };
    OOProgram.prototype.getParameter = function (name) {
        return this.ctx.getProgramParameter(this.program, name);
    };
    Object.defineProperty(OOProgram.prototype, "stat", {
        get: function () {
            var gl = this.ctx;
            // https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramParameter
            var stat = {
                // Returns a GLboolean indicating whether or not the program is flagged for deletion.
                DELETE_STATUS: gl.getProgramParameter(this.program, gl.DELETE_STATUS),
                // Returns a GLboolean indicating whether or not the last link operation was successful.
                LINK_STATUS: gl.getProgramParameter(this.program, gl.LINK_STATUS),
                // Returns a GLboolean indicating whether or not the last validation operation was successful.
                VALIDATE_STATUS: gl.getProgramParameter(this.program, gl.VALIDATE_STATUS),
                // Returns a GLint indicating the number of attached shaders to a program.
                ATTACHED_SHADERS: gl.getProgramParameter(this.program, gl.ATTACHED_SHADERS),
                // Returns a GLint indicating the number of active attribute variables to a program.
                ACTIVE_ATTRIBUTES: gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES),
                // Returns a GLint indicating the number of active uniform variables to a program.
                ACTIVE_UNIFORMS: gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS)
            };
            // webgl2
            if ('TRANSFORM_FEEDBACK_BUFFER_MODE' in gl) {
                stat = __assign(__assign({}, stat), { 
                    // Returns a GLenum indicating the buffer mode when transform feedback is active. May be gl.SEPARATE_ATTRIBS or gl.INTERLEAVED_ATTRIBS.
                    TRANSFORM_FEEDBACK_BUFFER_MODE: gl.getProgramParameter(this.program, gl.TRANSFORM_FEEDBACK_BUFFER_MODE), 
                    // Returns a GLint indicating the number of varying variables to capture in transform feedback mode.
                    TRANSFORM_FEEDBACK_VARYINGS: gl.getProgramParameter(this.program, gl.TRANSFORM_FEEDBACK_VARYINGS), 
                    // Returns a GLint indicating the number of uniform blocks containing active uniforms.
                    ACTIVE_UNIFORM_BLOCKS: gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORM_BLOCKS) });
            }
            return stat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OOProgram.prototype, "linkStatus", {
        get: function () {
            return this.getParameter(this.ctx.LINK_STATUS);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OOProgram.prototype, "valid", {
        get: function () {
            this.ctx.validateProgram(this.program);
            return this.getParameter(this.ctx.VALIDATE_STATUS);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OOProgram.prototype, "infoLog", {
        get: function () {
            return this.ctx.getProgramInfoLog(this.program);
        },
        enumerable: false,
        configurable: true
    });
    OOProgram.prototype.getAttribute = function (name) {
        var value = this.attributes[name];
        if (!value) {
            var tmp = this.ctx.getAttribLocation(this.program, name);
            if (tmp >= 0) {
                this.attributes[name] = tmp;
                value = tmp;
            }
        }
        return value;
    };
    OOProgram.prototype.getUniform = function (name) {
        var value = this.uniforms[name];
        if (!value) {
            var tmp = this.ctx.getUniformLocation(this.program, name);
            if (tmp) {
                this.uniforms[name] = tmp;
                value = tmp;
            }
        }
        return value;
    };
    OOProgram.prototype._setUniform = function (name, func) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        for (var i = 1; i < args.length; i++)
            args[i] += 0.0;
        // @ts-ignore
        var ret = this.ctx[func.replace(/i$/, 'f')].apply(this.ctx, args);
        args[0] = name;
        this.$debug(func + "(" + args.join(',') + ")");
        return ret;
    };
    OOProgram.prototype.setUniform = function (name, x, y, z, w) {
        var location = this.getUniform(name);
        if (!location)
            throw new Error("Can not get the uniform location of " + name);
        if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof z !== 'undefined' && typeof w !== 'undefined') {
            this._setUniform(name, 'uniform4f', location, x, y, z, w);
        }
        else if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof z !== 'undefined' && typeof w === 'undefined') {
            this._setUniform(name, 'uniform3f', location, x, y, z);
        }
        else if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof z === 'undefined' && typeof w === 'undefined') {
            this._setUniform(name, 'uniform2f', location, x, y);
        }
        else if (typeof x !== 'undefined' && typeof y === 'undefined' && typeof z === 'undefined' && typeof w === 'undefined') {
            this._setUniform(name, 'uniform1f', location, x);
        }
    };
    OOProgram.prototype.setAttribute = function (name, x, y, z, w) {
        var location = this.getAttribute(name);
        if (location < 0)
            throw new Error("Can not get the attribute location of " + name);
        var gl = this.ctx;
        if (typeof x === 'number') {
            if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof z !== 'undefined' && typeof w !== 'undefined') {
                gl.vertexAttrib4f(location, x, y, z, w);
            }
            else if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof z !== 'undefined' && typeof w === 'undefined') {
                gl.vertexAttrib3f(location, x, y, z);
            }
            else if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof z === 'undefined' && typeof w === 'undefined') {
                gl.vertexAttrib2f(location, x, y);
            }
            else if (typeof x !== 'undefined' && typeof y === 'undefined' && typeof z === 'undefined' && typeof w === 'undefined') {
                gl.vertexAttrib1f(location, x);
            }
        }
        else {
            var values = x;
            switch (values.length) {
                case 0: throw new Error("Empty list for vertexAttrib?fv");
                case 1:
                    gl.vertexAttrib1fv(location, values);
                    break;
                case 2:
                    gl.vertexAttrib2fv(location, values);
                    break;
                case 3:
                    gl.vertexAttrib3fv(location, values);
                    break;
                default:
                    gl.vertexAttrib4fv(location, values);
                    break;
            }
        }
        this.$debug("attribute " + name + " set to", x, y, z, w);
        return this;
    };
    OOProgram.prototype.destroy = function () {
        this.deleteShaders();
        this.ctx.deleteProgram(this.program);
        this.$debug("program destroyed");
    };
    OOProgram.prototype.ensureCreated = function () {
        if (!this.program)
            this.init(this.ctx);
    };
    OOProgram.bgColor = '#4CAF50';
    return OOProgram;
}(OOWebGLObject));
export { OOProgram };
//# sourceMappingURL=program.js.map