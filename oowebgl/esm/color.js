import { __extends, __read, __spread } from "tslib";
import parseColor from 'parse-color';
import convert from 'color-convert';
import { Vec4 } from './math/vec4';
var Color = /** @class */ (function (_super) {
    __extends(Color, _super);
    function Color(color) {
        var _this = _super.call(this) || this;
        // https://github.com/Microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work
        Object.setPrototypeOf(_this, Color.prototype);
        _this.constructor = Color;
        if (arguments.length >= 3) {
            copy(_this, arguments);
        }
        else {
            if (!color) {
                copy(_this, Color.BLACK);
            }
            else {
                if (typeof color === 'string') {
                    copy(parseColor(color).rgba, _this);
                }
                else if (color.length) {
                    copy(_this, color);
                }
                else if (typeof color === 'number') {
                    _this[0] = (color & 0x000000ff) >> 0;
                    _this[1] = (color & 0x0000ff00) >> 8;
                    _this[2] = (color & 0x00ff0000) >> 16;
                    _this[3] = (color & 0xff000000) >> 24;
                }
            }
        }
        return _this;
    }
    Color.from = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // @ts-ignore
        return new (Color.bind.apply(Color, __spread([void 0], args)))();
    };
    Object.defineProperty(Color.prototype, "r", {
        get: function () {
            return this[0];
        },
        set: function (val) {
            this[0] = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "g", {
        get: function () {
            return this[1];
        },
        set: function (val) {
            this[1] = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "b", {
        get: function () {
            return this[2];
        },
        set: function (val) {
            this[2] = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "a", {
        get: function () {
            return this[3];
        },
        set: function (val) {
            this[3] = val;
        },
        enumerable: false,
        configurable: true
    });
    Color.prototype.valueOf = function () {
        return ((this.a << 24) >>> 0) + (this.b << 16) + (this.g << 8) + this.r;
    };
    Color.prototype.toString = function (format) {
        if (format === void 0) { format = 'rgba'; }
        if (Color.SupportedFormat.indexOf(format) < 0) {
            throw new Error("Color.prototype.toString(format) does not support format '" + format + "'");
        }
        var vec3;
        var ret = '';
        switch (format) {
            case 'hex': return convert.rgb.hex(this.vec3);
            case 'hsl':
                vec3 = convert.rgb.hsl(this.map(function (v) { return v * 255; }));
                ret = "hls(" + vec3[0] + "deg," + vec3[1] + "%," + vec3[2] + "%)";
                break;
            case 'rgb':
                ret = "rgba(" + this.r * 255 + "," + this.b * 255 + "," + this.b * 255 + ")";
                break;
            case 'rgba':
            default:
                ret = "rgba(" + this.r * 255 + "," + this.b * 255 + "," + this.b * 255 + "," + this.a * 255 + ")";
                break;
        }
        return ret;
    };
    Object.defineProperty(Color.prototype, "vec3", {
        get: function () {
            return this;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "vec4", {
        get: function () {
            return this;
        },
        enumerable: false,
        configurable: true
    });
    Color.prototype.assign = function (another) {
        copy(another, this);
        return this;
    };
    Object.defineProperty(Color, "ALICEBLUE", {
        get: function () { return new Color([240, 248, 255]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "ANTIQUEWHITE", {
        get: function () { return new Color([250, 235, 215]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "AQUA", {
        get: function () { return new Color([0, 255, 255]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "AQUAMARINE", {
        get: function () { return new Color([127, 255, 212]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "AZURE", {
        get: function () { return new Color([240, 255, 255]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "BEIGE", {
        get: function () { return new Color([245, 245, 220]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "BISQUE", {
        get: function () { return new Color([255, 228, 196]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "BLACK", {
        get: function () { return new Color([0, 0, 0]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "BLANCHEDALMOND", {
        get: function () { return new Color([255, 235, 205]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "BLUE", {
        get: function () { return new Color([0, 0, 255]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "BLUEVIOLET", {
        get: function () { return new Color([138, 43, 226]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "BROWN", {
        get: function () { return new Color([165, 42, 42]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "BURLYWOOD", {
        get: function () { return new Color([222, 184, 135]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "CADETBLUE", {
        get: function () { return new Color([95, 158, 160]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "CHARTREUSE", {
        get: function () { return new Color([127, 255, 0]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "CHOCOLATE", {
        get: function () { return new Color([210, 105, 30]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "CORAL", {
        get: function () { return new Color([255, 127, 80]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "CORNFLOWERBLUE", {
        get: function () { return new Color([100, 149, 237]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "CORNSILK", {
        get: function () { return new Color([255, 248, 220]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "CRIMSON", {
        get: function () { return new Color([220, 20, 60]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "CYAN", {
        get: function () { return new Color([0, 255, 255]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKBLUE", {
        get: function () { return new Color([0, 0, 139]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKCYAN", {
        get: function () { return new Color([0, 139, 139]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKGOLDENROD", {
        get: function () { return new Color([184, 134, 11]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKGRAY", {
        get: function () { return new Color([169, 169, 169]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKGREEN", {
        get: function () { return new Color([0, 100, 0]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKGREY", {
        get: function () { return new Color([169, 169, 169]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKKHAKI", {
        get: function () { return new Color([189, 183, 107]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKMAGENTA", {
        get: function () { return new Color([139, 0, 139]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKOLIVEGREEN", {
        get: function () { return new Color([85, 107, 47]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKORANGE", {
        get: function () { return new Color([255, 140, 0]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKORCHID", {
        get: function () { return new Color([153, 50, 204]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKRED", {
        get: function () { return new Color([139, 0, 0]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKSALMON", {
        get: function () { return new Color([233, 150, 122]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKSEAGREEN", {
        get: function () { return new Color([143, 188, 143]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKSLATEBLUE", {
        get: function () { return new Color([72, 61, 139]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKSLATEGRAY", {
        get: function () { return new Color([47, 79, 79]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKSLATEGREY", {
        get: function () { return new Color([47, 79, 79]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKTURQUOISE", {
        get: function () { return new Color([0, 206, 209]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DARKVIOLET", {
        get: function () { return new Color([148, 0, 211]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DEEPPINK", {
        get: function () { return new Color([255, 20, 147]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DEEPSKYBLUE", {
        get: function () { return new Color([0, 191, 255]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DIMGRAY", {
        get: function () { return new Color([105, 105, 105]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DIMGREY", {
        get: function () { return new Color([105, 105, 105]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "DODGERBLUE", {
        get: function () { return new Color([30, 144, 255]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "FIREBRICK", {
        get: function () { return new Color([178, 34, 34]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "FLORALWHITE", {
        get: function () { return new Color([255, 250, 240]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "FORESTGREEN", {
        get: function () { return new Color([34, 139, 34]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "FUCHSIA", {
        get: function () { return new Color([255, 0, 255]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "GAINSBORO", {
        get: function () { return new Color([220, 220, 220]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "GHOSTWHITE", {
        get: function () { return new Color([248, 248, 255]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "GOLD", {
        get: function () { return new Color([255, 215, 0]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "GOLDENROD", {
        get: function () { return new Color([218, 165, 32]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "GRAY", {
        get: function () { return new Color([128, 128, 128]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "GREEN", {
        get: function () { return new Color([0, 128, 0]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "GREENYELLOW", {
        get: function () { return new Color([173, 255, 47]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "GREY", {
        get: function () { return new Color([128, 128, 128]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "HONEYDEW", {
        get: function () { return new Color([240, 255, 240]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "HOTPINK", {
        get: function () { return new Color([255, 105, 180]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "INDIANRED", {
        get: function () { return new Color([205, 92, 92]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "INDIGO", {
        get: function () { return new Color([75, 0, 130]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "IVORY", {
        get: function () { return new Color([255, 255, 240]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "KHAKI", {
        get: function () { return new Color([240, 230, 140]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LAVENDER", {
        get: function () { return new Color([230, 230, 250]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LAVENDERBLUSH", {
        get: function () { return new Color([255, 240, 245]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LAWNGREEN", {
        get: function () { return new Color([124, 252, 0]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LEMONCHIFFON", {
        get: function () { return new Color([255, 250, 205]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LIGHTBLUE", {
        get: function () { return new Color([173, 216, 230]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LIGHTCORAL", {
        get: function () { return new Color([240, 128, 128]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LIGHTCYAN", {
        get: function () { return new Color([224, 255, 255]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LIGHTGOLDENRODYELLOW", {
        get: function () { return new Color([250, 250, 210]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LIGHTGRAY", {
        get: function () { return new Color([211, 211, 211]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LIGHTGREEN", {
        get: function () { return new Color([144, 238, 144]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LIGHTGREY", {
        get: function () { return new Color([211, 211, 211]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LIGHTPINK", {
        get: function () { return new Color([255, 182, 193]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LIGHTSALMON", {
        get: function () { return new Color([255, 160, 122]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LIGHTSEAGREEN", {
        get: function () { return new Color([32, 178, 170]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LIGHTSKYBLUE", {
        get: function () { return new Color([135, 206, 250]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LIGHTSLATEGRAY", {
        get: function () { return new Color([119, 136, 153]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LIGHTSLATEGREY", {
        get: function () { return new Color([119, 136, 153]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LIGHTSTEELBLUE", {
        get: function () { return new Color([176, 196, 222]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LIGHTYELLOW", {
        get: function () { return new Color([255, 255, 224]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LIME", {
        get: function () { return new Color([0, 255, 0]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LIMEGREEN", {
        get: function () { return new Color([50, 205, 50]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "LINEN", {
        get: function () { return new Color([250, 240, 230]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "MAGENTA", {
        get: function () { return new Color([255, 0, 255]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "MAROON", {
        get: function () { return new Color([128, 0, 0]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "MEDIUMAQUAMARINE", {
        get: function () { return new Color([102, 205, 170]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "MEDIUMBLUE", {
        get: function () { return new Color([0, 0, 205]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "MEDIUMORCHID", {
        get: function () { return new Color([186, 85, 211]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "MEDIUMPURPLE", {
        get: function () { return new Color([147, 112, 219]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "MEDIUMSEAGREEN", {
        get: function () { return new Color([60, 179, 113]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "MEDIUMSLATEBLUE", {
        get: function () { return new Color([123, 104, 238]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "MEDIUMSPRINGGREEN", {
        get: function () { return new Color([0, 250, 154]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "MEDIUMTURQUOISE", {
        get: function () { return new Color([72, 209, 204]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "MEDIUMVIOLETRED", {
        get: function () { return new Color([199, 21, 133]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "MIDNIGHTBLUE", {
        get: function () { return new Color([25, 25, 112]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "MINTCREAM", {
        get: function () { return new Color([245, 255, 250]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "MISTYROSE", {
        get: function () { return new Color([255, 228, 225]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "MOCCASIN", {
        get: function () { return new Color([255, 228, 181]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "NAVAJOWHITE", {
        get: function () { return new Color([255, 222, 173]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "NAVY", {
        get: function () { return new Color([0, 0, 128]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "OLDLACE", {
        get: function () { return new Color([253, 245, 230]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "OLIVE", {
        get: function () { return new Color([128, 128, 0]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "OLIVEDRAB", {
        get: function () { return new Color([107, 142, 35]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "ORANGE", {
        get: function () { return new Color([255, 165, 0]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "ORANGERED", {
        get: function () { return new Color([255, 69, 0]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "ORCHID", {
        get: function () { return new Color([218, 112, 214]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "PALEGOLDENROD", {
        get: function () { return new Color([238, 232, 170]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "PALEGREEN", {
        get: function () { return new Color([152, 251, 152]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "PALETURQUOISE", {
        get: function () { return new Color([175, 238, 238]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "PALEVIOLETRED", {
        get: function () { return new Color([219, 112, 147]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "PAPAYAWHIP", {
        get: function () { return new Color([255, 239, 213]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "PEACHPUFF", {
        get: function () { return new Color([255, 218, 185]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "PERU", {
        get: function () { return new Color([205, 133, 63]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "PINK", {
        get: function () { return new Color([255, 192, 203]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "PLUM", {
        get: function () { return new Color([221, 160, 221]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "POWDERBLUE", {
        get: function () { return new Color([176, 224, 230]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "PURPLE", {
        get: function () { return new Color([128, 0, 128]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "REBECCAPURPLE", {
        get: function () { return new Color([102, 51, 153]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "RED", {
        get: function () { return new Color([255, 0, 0]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "ROSYBROWN", {
        get: function () { return new Color([188, 143, 143]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "ROYALBLUE", {
        get: function () { return new Color([65, 105, 225]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "SADDLEBROWN", {
        get: function () { return new Color([139, 69, 19]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "SALMON", {
        get: function () { return new Color([250, 128, 114]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "SANDYBROWN", {
        get: function () { return new Color([244, 164, 96]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "SEAGREEN", {
        get: function () { return new Color([46, 139, 87]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "SEASHELL", {
        get: function () { return new Color([255, 245, 238]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "SIENNA", {
        get: function () { return new Color([160, 82, 45]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "SILVER", {
        get: function () { return new Color([192, 192, 192]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "SKYBLUE", {
        get: function () { return new Color([135, 206, 235]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "SLATEBLUE", {
        get: function () { return new Color([106, 90, 205]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "SLATEGRAY", {
        get: function () { return new Color([112, 128, 144]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "SLATEGREY", {
        get: function () { return new Color([112, 128, 144]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "SNOW", {
        get: function () { return new Color([255, 250, 250]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "SPRINGGREEN", {
        get: function () { return new Color([0, 255, 127]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "STEELBLUE", {
        get: function () { return new Color([70, 130, 180]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "TAN", {
        get: function () { return new Color([210, 180, 140]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "TEAL", {
        get: function () { return new Color([0, 128, 128]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "THISTLE", {
        get: function () { return new Color([216, 191, 216]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "TOMATO", {
        get: function () { return new Color([255, 99, 71]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "TURQUOISE", {
        get: function () { return new Color([64, 224, 208]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "VIOLET", {
        get: function () { return new Color([238, 130, 238]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "WHEAT", {
        get: function () { return new Color([245, 222, 179]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "WHITE", {
        get: function () { return new Color([255, 255, 255]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "WHITESMOKE", {
        get: function () { return new Color([245, 245, 245]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "YELLOW", {
        get: function () { return new Color([255, 255, 0]); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Color, "YELLOWGREEN", {
        get: function () { return new Color([154, 205, 50]); },
        enumerable: false,
        configurable: true
    });
    Color.SupportedFormat = ['rgb', 'rgba', 'hex', 'hsl'];
    return Color;
}(Vec4));
export { Color };
function copy(target, src) {
    for (var i = 0; i < 4; i++) {
        target[i] = typeof src[i] === 'undefined' ? (i < 3 ? 0 : 1) : Number(src[i]);
        if (target[i] > 1)
            target[i] /= 255;
    }
}
//# sourceMappingURL=color.js.map