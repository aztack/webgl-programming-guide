import { __read, __spread } from "tslib";
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
//# sourceMappingURL=utils.js.map