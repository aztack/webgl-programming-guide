import { __extends } from "tslib";
import { Vector } from './vector';
var Vec4 = /** @class */ (function (_super) {
    __extends(Vec4, _super);
    //@ts-ignore
    function Vec4(arg) {
        var _this = this;
        var ret = new Float32Array(arg || 4);
        Object.setPrototypeOf(ret, Vec4.prototype);
        return ret;
    }
    Vec4.from = function (src) {
        if (arguments.length > 1) {
            return new Vec4([0, 0, 0, 0]).copy(Array.from(arguments));
        }
        else {
            return new Vec4([0, 0, 0, 0]).copy(src);
        }
    };
    Vec4.prototype.cross = function ( /* operand: Vec4 */) {
        // TODO
        throw new Error("Not implemented");
    };
    Vec4.origin = new Vec4([0, 0, 0]);
    return Vec4;
}(Vector));
export { Vec4 };
//# sourceMappingURL=vec4.js.map