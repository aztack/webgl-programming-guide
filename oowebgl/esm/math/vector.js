import { __extends, __read, __spread, __values } from "tslib";
import { hypot, square } from './utils';
var Vector = /** @class */ (function (_super) {
    __extends(Vector, _super);
    function Vector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vector.prototype.toString = function () {
        return this.constructor.name + "(" + this.join(',') + ")";
    };
    Vector.prototype.clone = function () {
        return this.slice(0);
    };
    Vector.prototype.copy = function (src) {
        var e_1, _a;
        var i = 0;
        try {
            for (var src_1 = __values(src), src_1_1 = src_1.next(); !src_1_1.done; src_1_1 = src_1.next()) {
                var it = src_1_1.value;
                if (i >= this.length)
                    break;
                this[i++] = it;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (src_1_1 && !src_1_1.done && (_a = src_1.return)) _a.call(src_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this;
    };
    Vector.prototype.add = function (operand) {
        for (var i = 0; i < this.length; i++) {
            this[i] += operand[i];
        }
        return this;
    };
    Vector.prototype.substract = function (operand) {
        for (var i = 0; i < this.length; i++) {
            this[i] -= operand[i];
        }
        return this;
    };
    Vector.prototype.multiply = function (operand) {
        for (var i = 0; i < this.length; i++) {
            this[i] *= operand[i];
        }
        return this;
    };
    Vector.prototype.divide = function (operand) {
        for (var i = 0; i < this.length; i++) {
            this[i] /= operand[i];
        }
        return this;
    };
    Vector.prototype.scale = function (scale) {
        for (var i = 0; i < this.length; i++) {
            this[i] *= scale;
        }
        return this;
    };
    Vector.prototype.negate = function () {
        for (var i = 0; i < this.length; i++) {
            this[i] = -this[i];
        }
        return this;
    };
    Vector.prototype.inverse = function () {
        for (var i = 0; i < this.length; i++) {
            this[i] = 1 / this[i];
        }
        return this;
    };
    Vector.prototype.nomalize = function () {
        var unit = square.apply(void 0, __spread(this));
        if (unit !== 0) {
            this.scale(1 / Math.sqrt(unit));
        }
        else {
            this.zero();
        }
    };
    Vector.prototype.dot = function (operand) {
        var acc = 0;
        for (var i = 0; i < this.length; i++) {
            acc = this[i] * operand[i];
        }
        return acc;
    };
    Vector.prototype.ceil = function (operand) {
        return this._math('ceil', operand);
    };
    Vector.prototype.floor = function (operand) {
        return this._math('floor', operand);
    };
    Vector.prototype.round = function (operand) {
        return this._math('round', operand);
    };
    Vector.prototype.zero = function () {
        for (var i = 0; i < this.length; i++) {
            this[i] = 0;
        }
        return this;
    };
    Object.defineProperty(Vector.prototype, "len", {
        get: function () {
            return hypot.apply(void 0, __spread(this));
        },
        enumerable: false,
        configurable: true
    });
    Vector.prototype._math = function (func, operand) {
        var fn = Math[func];
        for (var i = 0; i < this.length; i++) {
            this[i] = fn.call(Math, operand[i]);
        }
        return this;
    };
    return Vector;
}(Float32Array));
export { Vector };
//# sourceMappingURL=vector.js.map