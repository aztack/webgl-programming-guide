export interface From<RET extends Float32Array> {
  (src: any): RET;
  (...src: numbers[]): RET;
  /* typeof Float32Array["from"] */
  (arrayLike: ArrayLike<number>): RET;
  <T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): RET;
  (arrayLike: Iterable<number>, mapfn?: ((v: number, k: number) => number) | undefined, thisArg?: any): RET;
};


export interface Copyable<T> extends Float32Array {
  copy(this: T, operand: T): T;
}

export type ConstructorOf<T> = new (...args: any) => T;

export type Addable = string | number;

export type Degree = number;
export type Radian = number;