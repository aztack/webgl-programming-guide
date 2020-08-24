import { Vector } from './vector';
import { static_from } from './utils-shared';
import { randomRadian } from './utils';

export class Vec4 extends Vector {
  static readonly origin: Vec4 = new Vec4();

  static from = static_from(Vec4);

  static random(r: number = 1.0) {
    // https://en.wikipedia.org/wiki/N-sphere#Spherical_coordinates
    const phi1 = randomRadian(2);
    const phi2 = randomRadian(2);
    const phi3 = randomRadian(2);

    // const x4 = r * Math.cos(phi1);
    // const x3 = r * Math.sin(phi1) * Math.cos(phi2);
    // const x2 = r * Math.sin(phi1) * Math.sin(phi2) * Math.cos(phi3);
    // const x1 = r * Math.sin(phi1) * Math.sin(phi2) * Math.sin(phi3);

    const x4 = r * Math.cos(phi1);
    const t1 = r * Math.sin(phi1);
    const x3 = t1 * Math.cos(phi2);
    const t2 = t1 * Math.sin(phi2);
    const x2 = t2 * Math.cos(phi3);
    const x1 = t2 * Math.sin(phi3);

    return Vec4.from(x1, x2, x3, x4);
  }

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