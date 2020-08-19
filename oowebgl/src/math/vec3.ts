import { Vector } from './vector';
import { static_from } from './utils-shared';

export class Vec3 extends Vector {
  static readonly origin: Vec3 = new Vec3();

  static from = static_from(Vec3);

  constructor();
  constructor(arg: number);
  constructor(arg: Iterable<number> | ArrayLike<number> | ArrayBuffer);
  //@ts-ignore
  constructor(arg?: any) {
    const ret = new Float32Array(arg || 3);
    Object.setPrototypeOf(ret, Vec3.prototype);
    // @ts-ignore
    Object.assign(ret, this);
    return ret as Vec3;
  }

  cross(/*operand: Vec3*/): Vec3 {
    // TODO
    throw new Error(`Not implemented`);
  }
}