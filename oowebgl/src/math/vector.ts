import {
  hypot,
  toString, copy, clone,
  add, substract, multiply, divide,
  scale, negate, inverse, zero, dot, normalize
} from './utils';

export class Vector<RET extends Vector<RET>> extends Float32Array {
  toString!: typeof toString;
  add!: typeof add;
  copy!: typeof copy;
  clone!: typeof clone;
  substract!: typeof substract;
  multiply!: typeof multiply;
  divide!: typeof divide;
  scale!: typeof scale;
  negate!: typeof negate;
  inverse!: typeof inverse;
  zero!: typeof zero;
  dot!: typeof dot;
  normalize!: typeof normalize;

  ceil() {
    return this._math('ceil');
  }

  floor() {
    return this._math('floor');
  }

  round() {
    return this._math('round');
  }

  get len(): number {
    return hypot(...this);
  }

  private _math(func: keyof Math) {
    const fn = Math[func] as Function;
    for (let i = 0; i < this.length; i++) {
      this[i] = fn.call(Math, this[i]);
    }
    return this as unknown as RET;
  }
}

Object.assign(Vector.prototype, {
  toString,
  copy,
  clone,
  add,
  substract,
  multiply,
  divide,
  scale,
  negate,
  inverse,
  zero,
  dot,
  normalize,
});