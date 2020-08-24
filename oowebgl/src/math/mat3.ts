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
}