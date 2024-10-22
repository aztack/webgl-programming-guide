import { square, fuzzyClamp } from './utils';
import { Vector } from './vector';
import { Radian } from './types';

//#region Vector Arithmetic
export function divide<T extends Vector>(this: T, operand: T): T {
  for (let i = 0; i < this.length; i++) {
    this[i] /= operand[i];
  }
  return this;
}

export function dot<T extends Vector>(this: T, operand: T): number {
  let acc = 0;
  for (let i = 0; i < this.length; i++) {
    acc += this[i] * operand[i];
  }
  return acc;
}

export function inverse<T extends Vector>(this: T) {
  for (let i = 0; i < this.length; i++) {
    this[i] = 1.0 / this[i];
  }
  return this;
}

export function multiply<T extends Vector>(this: T, operand: T): T {
  for (let i = 0; i < this.length; i++) {
    this[i] *= operand[i];
  }
  return this;
}
//#endregion

//#region Vecotr Methods

export function angle<T extends Vector>(this: T, vec: T): Radian {
  // https://en.wikipedia.org/wiki/Dot_product#Geometric_definition
  // cosθ = x·y / |x||y| = x.dot(y) / x.mag * y.mag
  const product = this.mag * vec.mag;
  const cosine = product && this.dot(vec) / product;
  return Math.acos(fuzzyClamp(cosine, -1, 1));
}

export function normalize<T extends Vector>(this: T): T {
  let unit = square(...this);
  if (unit !== 0) {
    this.scale(1 / Math.sqrt(unit))
  } else {
    this.zero();
  }
  return this;
}

export function distance<T extends Vector>(this: T, operand: T): number {
  return Math.sqrt(this.squaredDistance(operand));
}

export function squaredDistance<T extends Vector>(this: T, operand: T): number {
  let acc = 0;
  for (let i = 0; i < this.length; i ++) {
    const dis = this[i] - operand[i];
    acc += dis * dis;
  }
  return acc;
}

export function lerp<T extends Vector>(this: T, a: T, b: T, t: number): T {
  let a0: number;
  for (let i = 0; i < this.length; i++) {
    a0 = a[0];
    this[0] = a0 + (b[0] - a0) * t;
  }
  return this;
}
//#endregion

//#region Vec3 Only Methods
// @ts-ignore
export function slerp<T extends Vector>(this: T, a: T, b: T): T {
  // TODO:
  return this;
}
// @ts-ignore
export function hermite<T extends Vector>(this: T, a: T, b: T): T {
  // TODO:
  return this;
}
// @ts-ignore
export function bezier<T extends Vector>(this: T, a: T, b: T): T {
  // TODO:
  return this;
}
//#endregion