export type FromNumbers<T> = (...src: numbers[]) => T;
export type FromIterableArrayLike<T> = (src: Iterable<number> | ArrayLike<number>) => T;
export type FromAny<T> = (src: any) => T;
export type From<T> = ((...src: numbers[]) => T)
  & ((src: Iterable<number> | ArrayLike<number>) => T)
  & ((src: any) => T);


export interface Copyable<T> {
  copy(this: T, operand: T): T;
}

export type ConstructorOf<T> = new (...args: any) => T;

export type Addable = string | number;

export type Degree = number;
export type Radian = number;