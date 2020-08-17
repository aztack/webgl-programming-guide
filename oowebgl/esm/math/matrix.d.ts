import { toString, copy, clone, add, substract, scale, negate, zero, get, put, mat_multiply } from './utils';
import { Tuple2 } from '../types';
export declare class Matrix extends Float32Array {
    shape: Tuple2<number>;
    add: typeof add;
    clone: typeof clone;
    copy: typeof copy;
    get: typeof get;
    multiply: typeof mat_multiply;
    negate: typeof negate;
    put: typeof put;
    scale: typeof scale;
    substract: typeof substract;
    toString: typeof toString;
    zero: typeof zero;
}
