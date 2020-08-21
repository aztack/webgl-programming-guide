import { Vector } from './vector';
import { Vec3 } from './vec3';
import { static_from } from './utils-shared';

export class Vec2 extends Vector {
  static readonly origin: Vec2 = new Vec2();

  static from = static_from(Vec2);

  constructor();
  constructor(arg: number);
  constructor(arg: Iterable<number> | ArrayLike<number> | ArrayBuffer);
  //@ts-ignore
  constructor(arg?: any) {
    const ret = new Float32Array(arg || 2);
    Object.setPrototypeOf(ret, Vec2.prototype);
    // @ts-ignore
    Object.assign(ret, this);
    return ret as Vec2;
  }

  cross(operand: Vec2): Vec3 {
    // (a, b, 0)x(c, d, 0) = (0, 0, ad-bc)
    return Vec3.from(0, 0, this[0] * operand[1] - this[1] * operand[0]);
  }
}