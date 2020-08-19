import { Copyable, ConstructorOf, From } from './types';
import { fuzzyEquals as _fuzzyEquals } from './utils'

//#region Creation and Convertion
export function static_from<T extends Copyable<T>>(Ctor: ConstructorOf<T>): From<T> {
  return function (src: any) {
    return new Ctor().copy(arguments.length > 1 ? arguments : src);
  }
}

export function toString<T extends Float32Array>(this: T): string {
  return `${this.constructor.name}(${this.join(',')})`;
}

export function copy<T extends Float32Array>(this: T, operand: Iterable<number> | ArrayLike<number>): T {
  let i = 0;
  for (let it of operand) {
    if (i >= this.length) break;
    this[i++] = it;
  }
  return this
}

export function clone<T extends Float32Array>(this: T): T {
  return this.slice(0) as T;
}
//#endregion

//#region Arithmetic
export function add<T extends Float32Array>(this: T, operand: T): T {
  for (let i = 0; i < this.length; i++) {
    this[i] += operand[i];
  }
  return this;
}

export function substract<T extends Float32Array>(this: T, operand: T): T {
  for (let i = 0; i < this.length; i++) {
    this[i] -= operand[i];
  }
  return this;
}

export function scale<T extends Float32Array>(this: T, scale: number) {
  for (let i = 0; i < this.length; i++) {
    this[i] *= scale;
  }
  return this;
}

export function negate<T extends Float32Array>(this: T) {
  for (let i = 0; i < this.length; i++) {
    this[i] = -this[i];
  }
  return this;
}

export function zero<T extends Float32Array>(this: T) {
  for (let i = 0; i < this.length; i++) {
    this[i] = 0;
  }
  return this;
}
//#endregion

//#region Iteration
export function each<T extends Float32Array>(this: T, operation: (element: number) => number) {
  for (let i = 0; i < this.length; i++) {
    this[i] = operation(this[i]);
  }
  return this;
}
//#endregion

//#region Comparison

export function strictEquals<T extends Float32Array>(this: T, a: T): boolean {
  if (this.length !== a.length) return false;
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== a[i]) return false;
  }
  return true;
}

export function fuzzyEquals<T extends Float32Array>(this: T, a: T): boolean {
  if (this.length !== a.length) return false;
  for (let i = 0; i < this.length; i++) {
    if (!_fuzzyEquals(this[i], a[i])) return false;
  }
  return true;
}

//#endregion