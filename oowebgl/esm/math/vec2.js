import { __extends } from "tslib";
import { Vector } from './vector';
import { Vec3 } from './vec3';
import { static_from } from './utils';
var Vec2 = /** @class */ (function (_super) {
    __extends(Vec2, _super);
    //@ts-ignore
    function Vec2(arg) {
        var _this = this;
        var ret = new Float32Array(arg || 2);
        Object.setPrototypeOf(ret, Vec2.prototype);
        // @ts-ignore
        Object.assign(ret, _this);
        return ret;
    }
    Vec2.prototype.cross = function (operand) {
        return Vec3.from(0, 0, this[0] * operand[1] - this[1] * operand[0]);
    };
    Vec2.origin = new Vec2();
    Vec2.from = static_from(Vec2);
    return Vec2;
}(Vector));
export { Vec2 };
//# sourceMappingURL=vec2.js.map