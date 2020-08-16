import { Vector } from './vector';
import { Vec3 } from './vec3';

export class Vec2 extends Vector<Vec2> {
  static origin: Vec2 = new Vec2();

  static from(...src: number[]): Vec2;
  static from(src: Iterable<number> | ArrayLike<number>): Vec2;
  static from(src: any): Vec2 {
    if (arguments.length > 1) {
      return new Vec2().copy(Array.from(arguments));
    } else {
      return new Vec2().copy(src);
    }
  }

  constructor();
  constructor(arg: number);
  constructor(arg: Iterable<number> | ArrayLike<number> | ArrayBuffer);
  //@ts-ignore
  constructor(arg?: any) {
    const ret = new Float32Array(arg || 2);
    Object.setPrototypeOf(ret, Vec2.prototype);
    return ret as Vec2;
  }

  cross(operand: Vec2): Vec3 {
    return Vec3.from(0, 0, this[0] * operand[1] - this[1] * operand[0]);
  }
}