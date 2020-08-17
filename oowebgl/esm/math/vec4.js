import { __extends } from "tslib";
import { Vector } from './vector';
import { static_from } from './utils';
var Vec4 = /** @class */ (function (_super) {
    __extends(Vec4, _super);
    //@ts-ignore
    function Vec4(arg) {
        var _this = this;
        var ret = new Float32Array(arg || 4);
        Object.setPrototypeOf(ret, Vec4.prototype);
        // @ts-ignore
        Object.assign(ret, _this);
        return ret;
    }
    Vec4.prototype.cross = function ( /* operand: Vec4 */) {
        // TODO
        throw new Error("Not implemented");
    };
    Vec4.origin = new Vec4();
    Vec4.from = static_from(Vec4);
    return Vec4;
}(Vector));
export { Vec4 };
//# sourceMappingURL=vec4.js.map