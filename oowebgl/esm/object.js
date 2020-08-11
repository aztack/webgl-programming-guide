var OOWebGLObject = /** @class */ (function () {
    function OOWebGLObject() {
    }
    OOWebGLObject.prototype.init = function (ctx) {
        this.ctx = ctx;
    };
    OOWebGLObject.prototype.$debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        //@ts-ignore
        args.unshift("background:" + (this.constructor.bgColor || 'rgb(49,49,49)') + "; color: #fff;border-radius:2px");
        args.unshift("%c[" + (this.name || this.constructor.name) + "]");
        console.log.apply(console, args);
    };
    return OOWebGLObject;
}());
export { OOWebGLObject };
