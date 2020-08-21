import {
  toString, copy, clone,
  add, substract,
  scale, negate, zero, each, static_from
} from './utils-shared';

import {
  divide,
  inverse, dot, multiply, normalize, angle, lerp, squaredDistance, distance
} from './utils-vec';

import {
  hypot
} from './utils'
import { Copyable } from './types';

export class Vector extends Float32Array implements Copyable<Vector> {
  static from = static_from(Vector);
  mag!: number;
  magnitude!: number;
  add!: typeof add;
  angle!: typeof angle;
  clone!: typeof clone;
  copy!: typeof copy;
  distance!: typeof distance;
  divide!: typeof divide;
  dot!: typeof dot;
  each!: typeof each;
  inverse!: typeof inverse;
  lerp!: typeof lerp;
  multiply!: typeof multiply;
  negate!: typeof negate;
  normalize!: typeof normalize;
  scale!: typeof scale;
  squaredDistance!: typeof squaredDistance;
  substract!: typeof substract;
  toString!: typeof toString;
  zero!: typeof zero;


  ceil() {
    return this.each(Math.ceil);
  }

  floor() {
    return this.each(Math.floor);
  }

  round() {
    return this.each(Math.round);
  }

}

function mag(this: Vector) {
  return hypot(...this);
}
const magGetter = {
  get: mag,
  enumerable: false,
  configurable: true
};
Object.defineProperty(Vector.prototype, "magnitude", magGetter);
Object.defineProperty(Vector.prototype, "mag", magGetter);

Object.assign(Vector.prototype, {
  add,
  angle,
  clone,
  copy,
  divide,
  distance,
  dot,
  each,
  inverse,
  lerp,
  multiply,
  negate,
  normalize,
  scale,
  squaredDistance,
  substract,
  toString,
  zero,
});