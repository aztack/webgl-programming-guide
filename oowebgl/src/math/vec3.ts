import { Vector } from './vector';
import { static_from } from './utils-shared';
import { randomRadian } from './utils';

export class Vec3 extends Vector {
  static readonly origin: Vec3 = new Vec3();

  static from = static_from(Vec3);

  static random(r: number = 1.0) {
    // https://en.wikipedia.org/wiki/Spherical_coordinate_system#Coordinate_system_conversions
    // const phi = randomRadian(2);
    // const z = r * Math.cos(phi);
    //
    // const theta = randomRadian(2);
    // const t = r * Math.sin(phi);
    // const y = t * Math.cos(theta);
    // const x = t * Math.sin(theta);
    //
    // return Vec3.from(x, y, z);

    const phi1 = randomRadian();
    const phi2 = randomRadian(2);
    const x3 = r * Math.cos(phi1);
    const x2 = r * Math.sin(phi1) * Math.cos(phi2);
    const x1 = r * Math.sin(phi1) * Math.sin(phi2);
    return Vec3.from(x1, x2, x3);
  }

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

  get x() {
    return this[0];
  }

  get y() {
    return this[1];
  }

  get z() {
    return this[2];
  }

  cross(operand: Vec3): Vec3 {
    // https://en.wikipedia.org/wiki/Cross_product#Mnemonic
    const [bx, by, bz] = this;
    const [cx, cy, cz] = operand;
    return Vec3.from(
      by*cz - bz*cy,
      bz*cx - bx*cz,
      bx*cy - by*cx
    );
  }
}