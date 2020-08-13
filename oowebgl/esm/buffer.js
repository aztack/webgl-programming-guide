import { __extends } from "tslib";
import { OOWebGLObject } from "./object";
import { isDefined } from "./utils";
var OOBuffer = /** @class */ (function (_super) {
    __extends(OOBuffer, _super);
    function OOBuffer(ctx) {
        var _this = _super.call(this) || this;
        _this.bound = false;
        _this.init(ctx);
        return _this;
    }
    OOBuffer.prototype.init = function (ctx) {
        _super.prototype.init.call(this, ctx);
        var buf = ctx.createBuffer();
        this.$debug("buffer created", buf);
        if (!buf) {
            throw new Error("Create buffer failed!");
        }
        this.buffer = buf;
        return this;
    };
    OOBuffer.prototype.bind = function () {
        this.ensureCreated();
        var gl = this.ctx;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        this.bound = true;
        this.$debug('buffer bound');
        return this;
    };
    OOBuffer.prototype.data = function (data) {
        this.ensureCreated();
        this.ensureBind();
        var gl = this.ctx;
        gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
        this.$debug('buffer filled with data', data);
        return this;
    };
    OOBuffer.prototype.attribute = function (attr, elePerVertex, type, normalized, stride, offset) {
        this.ensureCreated();
        var gl = this.ctx;
        type = isDefined(type) ? type : gl.FLOAT;
        normalized = isDefined(normalized) ? normalized : false;
        stride = isDefined(stride) ? stride : 0;
        offset = isDefined(offset) ? offset : 0;
        gl.vertexAttribPointer(attr, elePerVertex, type, normalized, stride, offset);
        gl.enableVertexAttribArray(attr);
        return this;
    };
    OOBuffer.prototype.ensureCreated = function () {
        if (!this.buffer)
            this.init(this.ctx);
    };
    OOBuffer.prototype.ensureBind = function () {
        if (!this.bound)
            this.bind();
    };
    return OOBuffer;
}(OOWebGLObject));
export { OOBuffer };
//# sourceMappingURL=buffer.js.map