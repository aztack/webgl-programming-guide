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
    return OOTexture;
}(OOWebGLObject));
export { OOTexture };
