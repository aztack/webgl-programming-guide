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

  cross(operand1: Vec4, operand2: Vec4): Vec4 {
    const [a, b, c, d] = this;
    const [e, f, g, h] = operand1;
    const [i, j, k, l] = operand2;
    return Vec4.from(
      +d*g*j - c*h*j - d*f*k + b*h*k + c*f*l - b*g*l,
      -d*g*i + c*h*i + d*e*k - a*h*k - c*e*l + a*g*l,
      +d*f*i - b*h*i - d*e*j + a*h*j + b*e*l - a*f*l,
      -c*f*i + b*g*i + c*e*j - a*g*j - b*e*k + a*f*k
    );
  }
}