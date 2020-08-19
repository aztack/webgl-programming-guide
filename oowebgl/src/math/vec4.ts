import { Vector } from './vector';
import { static_from } from './utils-shared';

export class Vec4 extends Vector {
  static readonly origin: Vec4 = new Vec4();

  static from = static_from(Vec4);

  constructor();
  constructor(arg: number);
  constructor(arg: Iterable<number> | ArrayLike<number> | ArrayBuffer);
  //@ts-ignore
  constructor(arg?: any) {
    const ret = new Float32Array(arg || 4);
    Object.setPrototypeOf(ret, Vec4.prototype);
    // @ts-ignore
    Object.assign(ret, this);
    return ret as Vec4;
  }
}

Object.assign(Vec4.prototype, {

});