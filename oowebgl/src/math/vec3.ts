import { Vector } from './vector';

export class Vec3 extends Vector<Vec3> {
  static origin: Vec3 = new Vec3();

  static from(...src: number[]): Vec3;
  static from(src: Iterable<number> | ArrayLike<number>): Vec3;
  static from(src: any): Vec3 {
    if (arguments.length > 1) {
      return new Vec3().copy(Array.from(arguments));
    } else {
      return new Vec3().copy(src);
    }
  }

  constructor();
  constructor(arg: number);
  constructor(arg: Iterable<number> | ArrayLike<number> | ArrayBuffer);
  //@ts-ignore
  constructor(arg?: any) {
    const ret = new Float32Array(arg || 3);
    Object.setPrototypeOf(ret, Vec3.prototype);
    return ret as Vec3;
  }

  cross(/*operand: Vec3*/): Vec3 {
    // TODO
    throw new Error(`Not implemented`);
  }
}