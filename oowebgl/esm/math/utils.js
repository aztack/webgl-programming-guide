import { __extends, __read, __spread, __values } from "tslib";
import { Matrix } from './matrix';
export var square = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var acc = 0;
    for (var i = 0; i < args.length; i++)
        acc = args[i] * args[i];
    return acc;
};
export var hypot = typeof Math.hypot === 'function' ? Math.hypot : function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Math.sqrt(square.apply(void 0, __spread(args)));
};
export var DEG = 0.017453292519943295;
export var RAD = 57.29577951308232;
export var EPSILON = 0.000001;
export function fuzzyEquals(a, b) {
    return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
export function static_from(Ctor) {
    return function (src) {
        return new Ctor().copy(arguments.length > 1 ? arguments : src);
    };
}
export function toString() {
    return this.constructor.name + "(" + this.join(',') + ")";
}
export function copy(operand) {
    var e_1, _a;
    var i = 0;
    try {
        for (var operand_1 = __values(operand), operand_1_1 = operand_1.next(); !operand_1_1.done; operand_1_1 = operand_1.next()) {
            var it = operand_1_1.value;
            if (i >= this.length)
                break;
            this[i++] = it;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (operand_1_1 && !operand_1_1.done && (_a = operand_1.return)) _a.call(operand_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return this;
}
export function clone() {
    return this.slice(0);
}
// arithmatic
export function add(operand) {
    for (var i = 0; i < this.length; i++) {
        this[i] += operand[i];
    }
    return this;
}
export function substract(operand) {
    for (var i = 0; i < this.length; i++) {
        this[i] -= operand[i];
    }
    return this;
}
export function multiply(operand) {
    for (var i = 0; i < this.length; i++) {
        this[i] *= operand[i];
    }
    return this;
}
export function divide(operand) {
    for (var i = 0; i < this.length; i++) {
        this[i] /= operand[i];
    }
    return this;
}
export function scale(scale) {
    for (var i = 0; i < this.length; i++) {
        this[i] *= scale;
    }
    return this;
}
export function negate() {
    for (var i = 0; i < this.length; i++) {
        this[i] = -this[i];
    }
    return this;
}
export function inverse() {
    for (var i = 0; i < this.length; i++) {
        this[i] = 1 / this[i];
    }
    return this;
}
export function zero() {
    for (var i = 0; i < this.length; i++) {
        this[i] = 0;
    }
    return this;
}
export function dot(operand) {
    var acc = 0;
    for (var i = 0; i < this.length; i++) {
        acc += this[i] * operand[i];
    }
    return acc;
}
export function normalize() {
    var unit = square.apply(void 0, __spread(this));
    if (unit !== 0) {
        scale.call(this, 1 / Math.sqrt(unit));
    }
    else {
        zero.call(this);
    }
    return this;
}
// matrix operations
export function get(row, col) {
    if (row < 0 || col < 0)
        throw new Error("row and column index should be positive!");
    return this[row * this.shape[0] + col];
}
export function put(row, col, value) {
    this[row * this.shape[0] + col] = value;
    return this;
}
export function mat_multiply(operand) {
    // https://en.wikipedia.org/wiki/Matrix_multiplication_algorithm#Iterative_algorithm
    var n = this.shape[0];
    var m = this.shape[1];
    var p = operand.shape[1];
    var c = new this.constructor(n * p);
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            var sum = 0;
            for (var k = 0; k < p; k++) {
                sum += this.get(i, k) * operand.get(k, j);
            }
            c.put(i, j, sum);
        }
    }
    return c;
}
function createIdentity(size) {
    var ident = Array(size * size);
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            ident[i * size + j] = +(i === j);
        }
    }
    return ident;
}
export function createSquareMatrixClass(size) {
    var _a;
    return _a = /** @class */ (function (_super) {
            __extends(_Matrix, _super);
            //@ts-ignore
            function _Matrix(arg) {
                var _this = this;
                var ret = new Float32Array(arg || size);
                Object.setPrototypeOf(ret, _Matrix.prototype);
                Object.defineProperty(ret, 'shape', {
                    value: Object.freeze([size, size]),
                    writable: false,
                    enumerable: false
                });
                return ret;
            }
            return _Matrix;
        }(Matrix)),
        _a.identity = new _a(createIdentity(size)),
        _a;
}
//# sourceMappingURL=utils.js.map