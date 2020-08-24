import { createSquareMatrixClass, determinant2x2 as det2x2 } from './utils-mat';
export class Mat2 extends createSquareMatrixClass(2) {
  determinant(): number {
    return det2x2(...this);
  }

  transpose() {
    const [
       , b,
      c,
    ] = this;
    // this[0] = a;
    this[1] = c;
    this[2] = b;
    // this[3] = d;
    return this;
  }
}