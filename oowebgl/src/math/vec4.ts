import { Vector } from './vector';

export class Vec4 extends Vector<Vec4> {
  static readonly origin: Vec4 = new Vec4([0, 0, 0]);

  static from(...src: number[]): Vec4;
  static from(src: Iterable<number> | ArrayLike<number>): Vec4;
  static from(src: any): Vec4 {
    if (arguments.length > 1) {
      return new Vec4([0, 0, 0, 0]).copy(Array.from(arguments));
    } else {
      return new Vec4([0, 0, 0, 0]).copy(src);
    }
  }

  constructor();
  constructor(arg: number);
  constructor(arg: Iterable<number> | ArrayLike<number> | ArrayBuffer);
  //@ts-ignore
  constructor(arg?: any) {
    const ret = new Float32Array(arg || 4);
    Object.setPrototypeOf(ret, Vec4.prototype);
    return ret as Vec4;
  }

  cross(/* operand: Vec4 */): Vec4 {
    // TODO
    throw new Error(`Not implemented`);
  }
}