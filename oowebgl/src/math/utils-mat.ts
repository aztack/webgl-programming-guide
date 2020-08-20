// matrix methods
import { Matrix } from './matrix';
import { Tuple2 } from '../types';

export function get<T extends Matrix>(this: T, row: number, col: number): number {
  if (row < 0 || col < 0) throw new Error(`row and column index should be positive!`);
  return this[row * this.shape[0] + col];
}

export function put<T extends Matrix>(this: T, row: number, col: number, value: number): T {
  this[row * this.shape[0] + col] = value;
  return this;
}

export function multiply<T extends Matrix>(this: T, operand: Matrix): Matrix {
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

export function determinant2x2(...a: number[]): number;
export function determinant2x2(
  a: number, b: number,
  c: number, d: number
): number {
  // https://en.wikipedia.org/wiki/Determinant#2_%C3%97_2_matrices
  return a*d - b*c;
}

export function determinant3x3(...a: number[]): number;
export function determinant3x3(
  a: number, b: number, c: number,
  d: number, e: number, f: number,
  g: number, h: number, i: number
): number {
  // https://en.wikipedia.org/wiki/Determinant#3_%C3%97_3_matrices
  return a*e*i + b*f*g + c*d*h - c*e*g - b*d*i - a*f*h;
}

export function createIdentity(size: number) {
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
  }
}
