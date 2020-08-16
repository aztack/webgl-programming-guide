import { __extends } from "tslib";
import { Vector } from './vector';
var Vec3 = /** @class */ (function (_super) {
    __extends(Vec3, _super);
    //@ts-ignore
    function Vec3(arg) {
        var _this = this;
        var ret = new Float32Array(arg || 3);
        Object.setPrototypeOf(ret, Vec3.prototype);
        return ret;
    }
    Vec3.from = function (src) {
        if (arguments.length > 1) {
            return new Vec3().copy(Array.from(arguments));
        }
        else {
            return new Vec3().copy(src);
        }
    };
    Vec3.prototype.cross = function ( /*operand: Vec3*/) {
        // TODO
        throw new Error("Not implemented");
    };
    Vec3.origin = new Vec3();
    return Vec3;
}(Vector));
export { Vec3 };
//# sourceMappingURL=vec3.js.map