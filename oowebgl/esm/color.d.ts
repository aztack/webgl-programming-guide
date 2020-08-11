import { Vec4 } from './math/vec4';
export declare class Color extends Vec4 {
    static readonly SupportedFormat: string[];
    static from(...args: any[]): Color;
    get r(): number;
    set r(val: number);
    get g(): number;
    set g(val: number);
    get b(): number;
    set b(val: number);
    get a(): number;
    set a(val: number);
    constructor();
    constructor(r: number, g: number, b: number, a?: number);
    constructor(color: number);
    constructor(color: string);
    constructor(color: Array<number>);
    constructor(color: Color);
    valueOf(): number;
    toString(format?: 'rgb' | 'rgba' | 'hex' | 'hsl'): string;
    get vec3(): [number, number, number];
    get vec4(): [number, number, number, number];
    assign(another: Color): this;
    static get ALICEBLUE(): Color;
    static get ANTIQUEWHITE(): Color;
    static get AQUA(): Color;
    static get AQUAMARINE(): Color;
    static get AZURE(): Color;
    static get BEIGE(): Color;
    static get BISQUE(): Color;
    static get BLACK(): Color;
    static get BLANCHEDALMOND(): Color;
    static get BLUE(): Color;
    static get BLUEVIOLET(): Color;
    static get BROWN(): Color;
    static get BURLYWOOD(): Color;
    static get CADETBLUE(): Color;
    static get CHARTREUSE(): Color;
    static get CHOCOLATE(): Color;
    static get CORAL(): Color;
    static get CORNFLOWERBLUE(): Color;
    static get CORNSILK(): Color;
    static get CRIMSON(): Color;
    static get CYAN(): Color;
    static get DARKBLUE(): Color;
    static get DARKCYAN(): Color;
    static get DARKGOLDENROD(): Color;
    static get DARKGRAY(): Color;
    static get DARKGREEN(): Color;
    static get DARKGREY(): Color;
    static get DARKKHAKI(): Color;
    static get DARKMAGENTA(): Color;
    static get DARKOLIVEGREEN(): Color;
    static get DARKORANGE(): Color;
    static get DARKORCHID(): Color;
    static get DARKRED(): Color;
    static get DARKSALMON(): Color;
    static get DARKSEAGREEN(): Color;
    static get DARKSLATEBLUE(): Color;
    static get DARKSLATEGRAY(): Color;
    static get DARKSLATEGREY(): Color;
    static get DARKTURQUOISE(): Color;
    static get DARKVIOLET(): Color;
    static get DEEPPINK(): Color;
    static get DEEPSKYBLUE(): Color;
    static get DIMGRAY(): Color;
    static get DIMGREY(): Color;
    static get DODGERBLUE(): Color;
    static get FIREBRICK(): Color;
    static get FLORALWHITE(): Color;
    static get FORESTGREEN(): Color;
    static get FUCHSIA(): Color;
    static get GAINSBORO(): Color;
    static get GHOSTWHITE(): Color;
    static get GOLD(): Color;
    static get GOLDENROD(): Color;
    static get GRAY(): Color;
    static get GREEN(): Color;
    static get GREENYELLOW(): Color;
    static get GREY(): Color;
    static get HONEYDEW(): Color;
    static get HOTPINK(): Color;
    static get INDIANRED(): Color;
    static get INDIGO(): Color;
    static get IVORY(): Color;
    static get KHAKI(): Color;
    static get LAVENDER(): Color;
    static get LAVENDERBLUSH(): Color;
    static get LAWNGREEN(): Color;
    static get LEMONCHIFFON(): Color;
    static get LIGHTBLUE(): Color;
    static get LIGHTCORAL(): Color;
    static get LIGHTCYAN(): Color;
    static get LIGHTGOLDENRODYELLOW(): Color;
    static get LIGHTGRAY(): Color;
    static get LIGHTGREEN(): Color;
    static get LIGHTGREY(): Color;
    static get LIGHTPINK(): Color;
    static get LIGHTSALMON(): Color;
    static get LIGHTSEAGREEN(): Color;
    static get LIGHTSKYBLUE(): Color;
    static get LIGHTSLATEGRAY(): Color;
    static get LIGHTSLATEGREY(): Color;
    static get LIGHTSTEELBLUE(): Color;
    static get LIGHTYELLOW(): Color;
    static get LIME(): Color;
    static get LIMEGREEN(): Color;
    static get LINEN(): Color;
    static get MAGENTA(): Color;
    static get MAROON(): Color;
    static get MEDIUMAQUAMARINE(): Color;
    static get MEDIUMBLUE(): Color;
    static get MEDIUMORCHID(): Color;
    static get MEDIUMPURPLE(): Color;
    static get MEDIUMSEAGREEN(): Color;
    static get MEDIUMSLATEBLUE(): Color;
    static get MEDIUMSPRINGGREEN(): Color;
    static get MEDIUMTURQUOISE(): Color;
    static get MEDIUMVIOLETRED(): Color;
    static get MIDNIGHTBLUE(): Color;
    static get MINTCREAM(): Color;
    static get MISTYROSE(): Color;
    static get MOCCASIN(): Color;
    static get NAVAJOWHITE(): Color;
    static get NAVY(): Color;
    static get OLDLACE(): Color;
    static get OLIVE(): Color;
    static get OLIVEDRAB(): Color;
    static get ORANGE(): Color;
    static get ORANGERED(): Color;
    static get ORCHID(): Color;
    static get PALEGOLDENROD(): Color;
    static get PALEGREEN(): Color;
    static get PALETURQUOISE(): Color;
    static get PALEVIOLETRED(): Color;
    static get PAPAYAWHIP(): Color;
    static get PEACHPUFF(): Color;
    static get PERU(): Color;
    static get PINK(): Color;
    static get PLUM(): Color;
    static get POWDERBLUE(): Color;
    static get PURPLE(): Color;
    static get REBECCAPURPLE(): Color;
    static get RED(): Color;
    static get ROSYBROWN(): Color;
    static get ROYALBLUE(): Color;
    static get SADDLEBROWN(): Color;
    static get SALMON(): Color;
    static get SANDYBROWN(): Color;
    static get SEAGREEN(): Color;
    static get SEASHELL(): Color;
    static get SIENNA(): Color;
    static get SILVER(): Color;
    static get SKYBLUE(): Color;
    static get SLATEBLUE(): Color;
    static get SLATEGRAY(): Color;
    static get SLATEGREY(): Color;
    static get SNOW(): Color;
    static get SPRINGGREEN(): Color;
    static get STEELBLUE(): Color;
    static get TAN(): Color;
    static get TEAL(): Color;
    static get THISTLE(): Color;
    static get TOMATO(): Color;
    static get TURQUOISE(): Color;
    static get VIOLET(): Color;
    static get WHEAT(): Color;
    static get WHITE(): Color;
    static get WHITESMOKE(): Color;
    static get YELLOW(): Color;
    static get YELLOWGREEN(): Color;
}
