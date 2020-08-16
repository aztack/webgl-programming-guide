import { hypot, square } from './utils';

export abstract class Vector<RET extends Vector<RET>> extends Float32Array {

  toString() {
    return `${this.constructor.name}(${this.join(',')})`;
  }

  clone() {
    return this.slice(0) as RET;
  }

  copy(src: Iterable<number> | ArrayLike<number>): RET {
    let i = 0;
    for (let it of src) {
      if (i >= this.length) break;
      this[i++] = it;
    }
    return this as unknown as RET;
  }

  add(operand: Vector<RET>) {
    for (let i = 0; i < this.length; i++) {
      this[i] += operand[i];
    }
    return this as unknown as RET;
  }

  substract(operand: Vector<RET>) {
    for (let i = 0; i < this.length; i++) {
      this[i] -= operand[i];
    }
    return this as unknown as RET;
  }

  multiply(operand: Vector<RET>) {
    for (let i = 0; i < this.length; i++) {
      this[i] *= operand[i];
    }
    return this as unknown as RET;
  }

  divide(operand: Vector<RET>) {
    for (let i = 0; i < this.length; i++) {
      this[i] /= operand[i];
    }
    return this as unknown as RET;
  }

  scale(scale: number) {
    for (let i = 0; i < this.length; i++) {
      this[i] *= scale;
    }
    return this as unknown as RET;
  }

  negate() {
    for (let i = 0; i < this.length; i++) {
      this[i] = -this[i];
    }
    return this as unknown as RET;
  }

  inverse() {
    for (let i = 0; i < this.length; i++) {
      this[i] = 1 / this[i];
    }
    return this as unknown as RET;
  }

  nomalize() {
    let unit = square(...this);
    if (unit !== 0) {
      this.scale(1 / Math.sqrt(unit));
    } else {
      this.zero();
    }
  }

  dot(operand: Vector<RET>): number {
    let acc = 0;
    for (let i = 0; i < this.length; i++) {
      acc = this[i] * operand[i];
    }
    return acc;
  }

  ceil(operand: Vector<RET>) {
    return this._math('ceil', operand);
  }

  floor(operand: Vector<RET>) {
    return this._math('floor', operand);
  }

  round(operand: Vector<RET>) {
    return this._math('round', operand);
  }

  zero() {
    for (let i = 0; i < this.length; i++) {
      this[i] = 0;
    }
    return this as unknown as RET;
  }

  get len(): number {
    return hypot(...this);
  }

  private _math(func: keyof Math, operand: Vector<RET>) {
    const fn = Math[func] as Function;
    for (let i = 0; i < this.length; i++) {
      this[i] = fn.call(Math, operand[i]);
    }
    return this as unknown as RET;
  }
}