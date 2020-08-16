import { __extends } from "tslib";
import { OOWebGLObject } from "./object";
var OOTexture = /** @class */ (function (_super) {
    __extends(OOTexture, _super);
    function OOTexture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OOTexture.prototype.init = function (ctx) {
        _super.prototype.init.call(this, ctx);
        var tex = ctx.createTexture();
        if (!tex) {
            throw new Error("Create texture failed!");
        }
        this.texture = tex;
        return this;
    };
    OOTexture.prototype.bind = function (sampler, image) {
        if (!image || !(image instanceof HTMLImageElement)) {
            throw new Error("Invalid image!");
        }
        var gl = this.ctx;
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        gl.activeTexture(gl.TEXTURE0); // TODO
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
        gl.uniform1i(sampler, 0);
    };
    OOTexture.prototype.parameteri = function (name, value, target) {
        var gl = this.ctx;
        // @ts-ignore
        gl.texParameteri(target || gl.TEXTURE_2D, name, typeof value === 'number' ? value : gl[value]);
        return this;
    };
    return OOTexture;
}(OOWebGLObject));
export { OOTexture };
//# sourceMappingURL=texture.js.map