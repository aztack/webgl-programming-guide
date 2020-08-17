import { Matrix } from './matrix';
import { Vector } from './vector';
import { From } from './types';
import { Tuple2 } from '../types';

export const square = function (...args: number[]) {
  let acc = 0;
  for (let i = 0; i < args.length; i ++) acc = args[i] * args[i];
  return acc;
};
export const hypot = typeof Math.hypot === 'function' ? Math.hypot : function (...args: number[]) {
  return Math.sqrt(square(...args));
};
export const DEG = 0.017453292519943295;
export const RAD = 57.29577951308232;

export let EPSILON = 0.000001;
export function fuzzyEquals(a: number, b: number) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b))
}

// vector operations

type ConstructorOf<T> = new (...args: any) => T;

export function static_from<T extends Vector<T>>(Ctor: ConstructorOf<T>): From<T> {
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

// arithmatic
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

export function multiply<T extends Float32Array>(this: T, operand: T): T {
  for (let i = 0; i < this.length; i++) {
    this[i] *= operand[i];
  }
  return this;
}

export function divide<T extends Float32Array>(this: T, operand: T): T {
  for (let i = 0; i < this.length; i++) {
    this[i] /= operand[i];
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

export function inverse<T extends Float32Array>(this: T) {
  for (let i = 0; i < this.length; i++) {
    this[i] = 1 / this[i];
  }
  return this;
}

export function zero<T extends Float32Array>(this: T) {
  for (let i = 0; i < this.length; i++) {
    this[i] = 0;
  }
  return this;
}

export function dot<T extends Float32Array>(this: T, operand: T): number {
  let acc = 0;
  for (let i = 0; i < this.length; i++) {
    acc += this[i] * operand[i];
  }
  return acc;
}

export function normalize<T extends Float32Array>(this: T): T {
  let unit = square(...this);
  if (unit !== 0) {
    scale.call(this, 1 / Math.sqrt(unit));
  } else {
    zero.call(this);
  }
  return this;
}

// matrix operations

export function get<T extends Matrix>(this: T, row: number, col: number): number {
  if (row < 0 || col < 0) throw new Error(`row and column index should be positive!`);
  return this[row * this.shape[0] + col];
}

export function put<T extends Matrix>(this: T, row: number, col: number, value: number): T {
  this[row * this.shape[0] + col] = value;
  return this;
}

export function mat_multiply<T extends Matrix>(this: T, operand: Matrix): Matrix {
  // https://en.wikipedia.org/wiki/Matrix_multiplication_algorithm#Iterative_algorithm
  const n = this.shape[0];
  const m = this.shape[1];
  const p = operand.shape[1];
  const c = new (<new(size: number) => T>this.constructor)(n*p);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let sum = 0;
      for (let k = 0; k < p; k++) {
        sum += this.get(i, k) * operand.get(k, j);
      }
      c.put(i, j, sum);
    }
  }
  return c;
}

function createIdentity(size: number) {
  const ident = Array(size * size);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      ident[i * size + j] = +(i === j);
    }
  }
  return ident;
}

export function createSquareMatrixClass(size: number) {
  return class _Matrix extends Matrix {
    static identity: _Matrix = new _Matrix(createIdentity(size));
    shape!: Tuple2<number>;
    constructor();
    constructor(arg: number);
    constructor(arg: Iterable<number> | ArrayLike<number> | ArrayBuffer);
    //@ts-ignore
    constructor(arg?: any) {
      const ret = new Float32Array(arg || size);
      Object.setPrototypeOf(ret, _Matrix.prototype);
      Object.defineProperty(ret, 'shape', {
        value: Object.freeze([size, size]),
        writable: false,
        enumerable: false
      });
      return ret as _Matrix;
    }
  };
}