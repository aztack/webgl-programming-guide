import { __extends } from "tslib";
import { loadShader } from "./utils";
import { OOWebGLObject } from './object';
var shaderUuid = 0;
var OOWebGLShader = /** @class */ (function (_super) {
    __extends(OOWebGLShader, _super);
    function OOWebGLShader(ctx, source, type) {
        var _this = _super.call(this) || this;
        _this.ctx = ctx;
        _this.source = source;
        _this.type = type;
        _this.name = '';
        _this.name = (type === ctx.VERTEX_SHADER ? 'vertex' : 'fragment') + "-shader#" + shaderUuid++;
        return _this;
    }
    OOWebGLShader.createVertextShader = function (ctx, source) {
        return new OOWebGLShader(ctx, source, ctx.VERTEX_SHADER).init();
    };
    OOWebGLShader.createFragmentShader = function (ctx, source) {
        return new OOWebGLShader(ctx, source, ctx.FRAGMENT_SHADER).init();
    };
    OOWebGLShader.prototype.init = function () {
        var _this = this;
        return loadShader(this.ctx, this.source, this.type).then(function (result) {
            _this.$debug(_this.name + " loaded:\n", result.code);
            _this.shader = result.shader;
            _this.shaderCode = result.code;
            return _this;
        });
    };
    OOWebGLShader.bgColor = '#FF5722';
    return OOWebGLShader;
}(OOWebGLObject));
export { OOWebGLShader };
//# sourceMappingURL=shader.js.map