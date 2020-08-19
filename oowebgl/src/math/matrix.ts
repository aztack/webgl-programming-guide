import {
  toString, copy, clone,
  add, substract,
  scale, negate, zero
} from './utils-shared';

import {
  get, put, multiply
} from './utils-mat';

import {

} from './utils';
import { Tuple2 } from '../types';
import { Copyable } from './types';

export class Matrix extends Float32Array implements Copyable<Matrix> {
  shape!: Tuple2<number>;
  add!: typeof add;
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
}
Object.assign(Matrix.prototype, {
  add,
  clone,
  copy,
  get,
  multiply,
  negate,
  put,
  scale,
  substract,
  toString,
  zero,
});