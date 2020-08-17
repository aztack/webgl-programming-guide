import parseColor from 'parse-color';
import convert from 'color-convert'
import { Vec4 } from './math/vec4';
import { Tuple4, Override } from './types';
import { RGB } from 'color-convert/conversions';

export class Color extends (<Override<Vec4, 'toString'>>Vec4) {
  static readonly SupportedFormat = ['rgb' , 'rgba' , 'hex' , 'hsl'];

  static from(...args: any[]) {
    // @ts-ignore
    return new Color(...args);
  }

  get r(): number {
    return this[0];
  }
  set r(val) {
    this[0] = val;
  }
  get g(): number {
    return this[1];
  }
  set g(val) {
    this[1] = val;
  }
  get b(): number {
    return this[2];
  }
  set b(val) {
    this[2] = val;
  }
  get a(): number {
    return this[3];
  }
  set a(val) {
    this[3] = val;
  }

  constructor();
  constructor(r: number, g: number, b: number, a?: number);
  constructor(color: number);
  constructor(color: string);
  constructor(color: Array<number>);
  constructor(color: Color);
  constructor(color?: any) {
    super();
    // https://github.com/Microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work
    Object.setPrototypeOf(this, Color.prototype);
    this.constructor = Color;
    if (arguments.length >= 3) {
      copy(this, arguments);
    } else {
      if (!color) {
        copy(this, Color.BLACK.vec4);
      } else {
        if (typeof color === 'string') {
          copy(parseColor(color).rgba, this.vec4);
        } else if (color.length) {
          copy(this, color);
        } else if (typeof color === 'number') {
          this[0] = (color & 0x000000ff) >> 0;
          this[1] = (color & 0x0000ff00) >> 8;
          this[2] = (color & 0x00ff0000) >> 16;
          this[3] = (color & 0xff000000) >> 24;
        }
      }
    }
  }

  value(): number {
    return ((this.a << 24) >>> 0) + (this.b << 16) + (this.g << 8) + this.r;
  }

  toString(format: 'rgb' | 'rgba' | 'hex' | 'hsl' = 'rgba'): string {
    if (Color.SupportedFormat.indexOf(format) < 0) {
      throw new Error(`Color.prototype.toString(format) does not support format '${format}'`);
    }
    let vec3: RGB;
    let ret: string = '';
    switch(format) {
      case 'hex': return convert.rgb.hex(this.vec3);
      case 'hsl':
        vec3 = convert.rgb.hsl(Array.from(this).map(v => v*255) as RGB);
        ret = `hls(${vec3[0]}deg,${vec3[1]}%,${vec3[2]}%)`;
        break;
      case 'rgb':
        ret = `rgba(${this.r*255},${this.b*255},${this.b*255})`;
        break;
      case 'rgba':
      default:
        ret = `rgba(${this.r*255},${this.b*255},${this.b*255},${this.a*255})`;
        break;
    }
    return ret;
  }

  get vec3(): [number, number, number] {
    return this as unknown as [number , number, number];
  }

  get vec4(): [number, number, number, number] {
    return this as unknown as Tuple4<number>;
  }

  assign(another: Color) {
    copy(another, this.vec3);
    return this;
  }

  static get ALICEBLUE() {return new Color([240,248,255])}
  static get ANTIQUEWHITE() {return new Color([250,235,215])}
  static get AQUA() {return new Color([0,255,255])}
  static get AQUAMARINE() {return new Color([127,255,212])}
  static get AZURE() {return new Color([240,255,255])}
  static get BEIGE() {return new Color([245,245,220])}
  static get BISQUE() {return new Color([255,228,196])}
  static get BLACK() {return new Color([0,0,0])}
  static get BLANCHEDALMOND() {return new Color([255,235,205])}
  static get BLUE() {return new Color([0,0,255])}
  static get BLUEVIOLET() {return new Color([138,43,226])}
  static get BROWN() {return new Color([165,42,42])}
  static get BURLYWOOD() {return new Color([222,184,135])}
  static get CADETBLUE() {return new Color([95,158,160])}
  static get CHARTREUSE() {return new Color([127,255,0])}
  static get CHOCOLATE() {return new Color([210,105,30])}
  static get CORAL() {return new Color([255,127,80])}
  static get CORNFLOWERBLUE() {return new Color([100,149,237])}
  static get CORNSILK() {return new Color([255,248,220])}
  static get CRIMSON() {return new Color([220,20,60])}
  static get CYAN() {return new Color([0,255,255])}
  static get DARKBLUE() {return new Color([0,0,139])}
  static get DARKCYAN() {return new Color([0,139,139])}
  static get DARKGOLDENROD() {return new Color([184,134,11])}
  static get DARKGRAY() {return new Color([169,169,169])}
  static get DARKGREEN() {return new Color([0,100,0])}
  static get DARKGREY() {return new Color([169,169,169])}
  static get DARKKHAKI() {return new Color([189,183,107])}
  static get DARKMAGENTA() {return new Color([139,0,139])}
  static get DARKOLIVEGREEN() {return new Color([85,107,47])}
  static get DARKORANGE() {return new Color([255,140,0])}
  static get DARKORCHID() {return new Color([153,50,204])}
  static get DARKRED() {return new Color([139,0,0])}
  static get DARKSALMON() {return new Color([233,150,122])}
  static get DARKSEAGREEN() {return new Color([143,188,143])}
  static get DARKSLATEBLUE() {return new Color([72,61,139])}
  static get DARKSLATEGRAY() {return new Color([47,79,79])}
  static get DARKSLATEGREY() {return new Color([47,79,79])}
  static get DARKTURQUOISE() {return new Color([0,206,209])}
  static get DARKVIOLET() {return new Color([148,0,211])}
  static get DEEPPINK() {return new Color([255,20,147])}
  static get DEEPSKYBLUE() {return new Color([0,191,255])}
  static get DIMGRAY() {return new Color([105,105,105])}
  static get DIMGREY() {return new Color([105,105,105])}
  static get DODGERBLUE() {return new Color([30,144,255])}
  static get FIREBRICK() {return new Color([178,34,34])}
  static get FLORALWHITE() {return new Color([255,250,240])}
  static get FORESTGREEN() {return new Color([34,139,34])}
  static get FUCHSIA() {return new Color([255,0,255])}
  static get GAINSBORO() {return new Color([220,220,220])}
  static get GHOSTWHITE() {return new Color([248,248,255])}
  static get GOLD() {return new Color([255,215,0])}
  static get GOLDENROD() {return new Color([218,165,32])}
  static get GRAY() {return new Color([128,128,128])}
  static get GREEN() {return new Color([0,128,0])}
  static get GREENYELLOW() {return new Color([173,255,47])}
  static get GREY() {return new Color([128,128,128])}
  static get HONEYDEW() {return new Color([240,255,240])}
  static get HOTPINK() {return new Color([255,105,180])}
  static get INDIANRED() {return new Color([205,92,92])}
  static get INDIGO() {return new Color([75,0,130])}
  static get IVORY() {return new Color([255,255,240])}
  static get KHAKI() {return new Color([240,230,140])}
  static get LAVENDER() {return new Color([230,230,250])}
  static get LAVENDERBLUSH() {return new Color([255,240,245])}
  static get LAWNGREEN() {return new Color([124,252,0])}
  static get LEMONCHIFFON() {return new Color([255,250,205])}
  static get LIGHTBLUE() {return new Color([173,216,230])}
  static get LIGHTCORAL() {return new Color([240,128,128])}
  static get LIGHTCYAN() {return new Color([224,255,255])}
  static get LIGHTGOLDENRODYELLOW() {return new Color([250,250,210])}
  static get LIGHTGRAY() {return new Color([211,211,211])}
  static get LIGHTGREEN() {return new Color([144,238,144])}
  static get LIGHTGREY() {return new Color([211,211,211])}
  static get LIGHTPINK() {return new Color([255,182,193])}
  static get LIGHTSALMON() {return new Color([255,160,122])}
  static get LIGHTSEAGREEN() {return new Color([32,178,170])}
  static get LIGHTSKYBLUE() {return new Color([135,206,250])}
  static get LIGHTSLATEGRAY() {return new Color([119,136,153])}
  static get LIGHTSLATEGREY() {return new Color([119,136,153])}
  static get LIGHTSTEELBLUE() {return new Color([176,196,222])}
  static get LIGHTYELLOW() {return new Color([255,255,224])}
  static get LIME() {return new Color([0,255,0])}
  static get LIMEGREEN() {return new Color([50,205,50])}
  static get LINEN() {return new Color([250,240,230])}
  static get MAGENTA() {return new Color([255,0,255])}
  static get MAROON() {return new Color([128,0,0])}
  static get MEDIUMAQUAMARINE() {return new Color([102,205,170])}
  static get MEDIUMBLUE() {return new Color([0,0,205])}
  static get MEDIUMORCHID() {return new Color([186,85,211])}
  static get MEDIUMPURPLE() {return new Color([147,112,219])}
  static get MEDIUMSEAGREEN() {return new Color([60,179,113])}
  static get MEDIUMSLATEBLUE() {return new Color([123,104,238])}
  static get MEDIUMSPRINGGREEN() {return new Color([0,250,154])}
  static get MEDIUMTURQUOISE() {return new Color([72,209,204])}
  static get MEDIUMVIOLETRED() {return new Color([199,21,133])}
  static get MIDNIGHTBLUE() {return new Color([25,25,112])}
  static get MINTCREAM() {return new Color([245,255,250])}
  static get MISTYROSE() {return new Color([255,228,225])}
  static get MOCCASIN() {return new Color([255,228,181])}
  static get NAVAJOWHITE() {return new Color([255,222,173])}
  static get NAVY() {return new Color([0,0,128])}
  static get OLDLACE() {return new Color([253,245,230])}
  static get OLIVE() {return new Color([128,128,0])}
  static get OLIVEDRAB() {return new Color([107,142,35])}
  static get ORANGE() {return new Color([255,165,0])}
  static get ORANGERED() {return new Color([255,69,0])}
  static get ORCHID() {return new Color([218,112,214])}
  static get PALEGOLDENROD() {return new Color([238,232,170])}
  static get PALEGREEN() {return new Color([152,251,152])}
  static get PALETURQUOISE() {return new Color([175,238,238])}
  static get PALEVIOLETRED() {return new Color([219,112,147])}
  static get PAPAYAWHIP() {return new Color([255,239,213])}
  static get PEACHPUFF() {return new Color([255,218,185])}
  static get PERU() {return new Color([205,133,63])}
  static get PINK() {return new Color([255,192,203])}
  static get PLUM() {return new Color([221,160,221])}
  static get POWDERBLUE() {return new Color([176,224,230])}
  static get PURPLE() {return new Color([128,0,128])}
  static get REBECCAPURPLE() {return new Color([102,51,153])}
  static get RED() {return new Color([255,0,0])}
  static get ROSYBROWN() {return new Color([188,143,143])}
  static get ROYALBLUE() {return new Color([65,105,225])}
  static get SADDLEBROWN() {return new Color([139,69,19])}
  static get SALMON() {return new Color([250,128,114])}
  static get SANDYBROWN() {return new Color([244,164,96])}
  static get SEAGREEN() {return new Color([46,139,87])}
  static get SEASHELL() {return new Color([255,245,238])}
  static get SIENNA() {return new Color([160,82,45])}
  static get SILVER() {return new Color([192,192,192])}
  static get SKYBLUE() {return new Color([135,206,235])}
  static get SLATEBLUE() {return new Color([106,90,205])}
  static get SLATEGRAY() {return new Color([112,128,144])}
  static get SLATEGREY() {return new Color([112,128,144])}
  static get SNOW() {return new Color([255,250,250])}
  static get SPRINGGREEN() {return new Color([0,255,127])}
  static get STEELBLUE() {return new Color([70,130,180])}
  static get TAN() {return new Color([210,180,140])}
  static get TEAL() {return new Color([0,128,128])}
  static get THISTLE() {return new Color([216,191,216])}
  static get TOMATO() {return new Color([255,99,71])}
  static get TURQUOISE() {return new Color([64,224,208])}
  static get VIOLET() {return new Color([238,130,238])}
  static get WHEAT() {return new Color([245,222,179])}
  static get WHITE() {return new Color([255,255,255])}
  static get WHITESMOKE() {return new Color([245,245,245])}
  static get YELLOW() {return new Color([255,255,0])}
  static get YELLOWGREEN() {return new Color([154,205,50])}
}

function copy(target: {[i: number]: number, length: number}, src: number[] | IArguments) {
  for(let i = 0; i < 4; i++) {
    target[i] = typeof src[i] === 'undefined' ? (i < 3 ? 0 : 1) : Number(src[i]);
    if (target[i] > 1) target[i] /= 255;
  }
}