import { __extends } from "tslib";
import { OOWebGLObject } from './object';
import { Vec3 } from './math/vec3';
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lookAtPoint = Vec3.from(0, 0, -1);
        _this.eyePoint = Vec3.origin.clone();
        _this.upPoint = Vec3.from(0, 1, 0);
        return _this;
    }
    Camera.prototype.init = function () {
    };
    Camera.prototype.moveTo = function (point) {
        this.eyePoint = point;
    };
    Camera.prototype.lookAt = function (point) {
        this.lookAtPoint = point;
    };
    return Camera;
}(OOWebGLObject));
export { Camera };
//# sourceMappingURL=camera.js.map