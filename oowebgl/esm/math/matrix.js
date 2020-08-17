import { __extends } from "tslib";
import { toString, copy, clone, add, substract, scale, negate, zero, get, put, mat_multiply } from './utils';
var Matrix = /** @class */ (function (_super) {
    __extends(Matrix, _super);
    function Matrix() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Matrix;
}(Float32Array));
export { Matrix };
Object.assign(Matrix.prototype, {
    add: add,
    clone: clone,
    copy: copy,
    get: get,
    multiply: mat_multiply,
    negate: negate,
    put: put,
    scale: scale,
    substract: substract,
    toString: toString,
    zero: zero,
});
//# sourceMappingURL=matrix.js.map