import { createSquareMatrixClass, determinant3x3 as det3x3 } from './utils-mat';
export class Mat3 extends createSquareMatrixClass(3) {
  determinant(): number {
    return det3x3(...this);
  }

  transpose() {
    const [
       , b, c,
      d,  , f,
      g, h,
    ] = this;
    // this[0] = a;
    this[1] = d;
    this[2] = g;
    this[3] = b;
    // this[4] = e;
    this[5] = h;
    this[6] = c;
    this[7] = f;
    // this[8] = i;
    return this;
  }

  inverse() {
    const det = this.determinant();
    if (det === 0) return null;
    const [
      a, b, c,
      d, e, f,
      g, h, i
    ] = this;
    this[0] = (-f*h+e*i) / det;
    this[1] = (+c*h-b*i) / det;
    this[2] = (-c*e+b*f) / det;
    this[3] = (+f*g-d*i) / det;
    this[4] = (-c*g+a*i) / det;
    this[5] = (+c*d-a*f) / det;
    this[6] = (-e*g+d*h) / det;
    this[7] = (+b*g-a*h) / det;
    this[8] = (-b*d+a*e) / det;
    return this;
  }
}