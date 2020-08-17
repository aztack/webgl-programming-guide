import { toString, copy, clone, add, substract, multiply, divide, scale, negate, inverse, zero, dot, normalize } from './utils';
export declare class Vector<RET extends Vector<RET>> extends Float32Array {
    toString: typeof toString;
    add: typeof add;
    copy: typeof copy;
    clone: typeof clone;
    substract: typeof substract;
    multiply: typeof multiply;
    divide: typeof divide;
    scale: typeof scale;
    negate: typeof negate;
    inverse: typeof inverse;
    zero: typeof zero;
    dot: typeof dot;
    normalize: typeof normalize;
    ceil(): RET;
    floor(): RET;
    round(): RET;
    get len(): number;
    private _math;
}
