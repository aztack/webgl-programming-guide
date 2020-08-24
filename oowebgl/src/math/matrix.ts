import {
  toString, copy, clone,
  add, substract,
  scale, negate, zero, static_from
} from './utils-shared';

import {
  get, put, multiply, inverse
} from './utils-mat';

import {

} from './utils';
import { Tuple2 } from '../types';
import { Copyable } from './types';

export class Matrix extends Float32Array implements Copyable<Matrix> {
  shape!: Tuple2<number>;
  static from = static_from(Matrix);
  add!: typeof add;
  adjugate(): Matrix | null {
    throw new Error(`Not implemented`);
  }
  clone!: typeof clone;
  copy!: typeof copy;
  get!: typeof get;
  multiply!: typeof multiply;
  negate!: typeof negate;
  put!: typeof put;
  scale!: typeof scale;
  substract!: typeof substract;
  toString!: typeof toString;
  zero!: typeof zero;
  get isSquare() {
    return this.shape[0] === this.shape[1];
  }
}
Object.assign(Matrix.prototype, {
  add,
  clone,
  copy,
  get,
  inverse,
  multiply,
  negate,
  put,
  scale,
  substract,
  toString,
  zero,
});