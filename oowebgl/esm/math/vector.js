import { __extends, __read, __spread } from "tslib";
import { hypot, toString, copy, clone, add, substract, multiply, divide, scale, negate, inverse, zero, dot, normalize } from './utils';
var Vector = /** @class */ (function (_super) {
    __extends(Vector, _super);
    function Vector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vector.prototype.ceil = function () {
        return this._math('ceil');
    };
    Vector.prototype.floor = function () {
        return this._math('floor');
    };
    Vector.prototype.round = function () {
        return this._math('round');
    };
    Object.defineProperty(Vector.prototype, "len", {
        get: function () {
            return hypot.apply(void 0, __spread(this));
        },
        enumerable: false,
        configurable: true
    });
    Vector.prototype._math = function (func) {
        var fn = Math[func];
        for (var i = 0; i < this.length; i++) {
            this[i] = fn.call(Math, this[i]);
        }
        return this;
    };
    return Vector;
}(Float32Array));
export { Vector };
Object.assign(Vector.prototype, {
    toString: toString,
    copy: copy,
    clone: clone,
    add: add,
    substract: substract,
    multiply: multiply,
    divide: divide,
    scale: scale,
    negate: negate,
    inverse: inverse,
    zero: zero,
    dot: dot,
    normalize: normalize,
});
//# sourceMappingURL=vector.js.map