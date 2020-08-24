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

  adjugate(): Mat2 | null {
    const det = this.determinant();
    if (det === 0) return null;
    const [
      a, b,
      c, d
    ] = this;
    this[0] = +d;
    this[1] = -b;
    this[2] = -c;
    this[3] = +a;
    return this;
  }
}