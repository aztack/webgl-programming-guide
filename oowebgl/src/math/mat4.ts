import { createSquareMatrixClass, determinant3x3 as det3x3 } from './utils-mat';
export class Mat4 extends createSquareMatrixClass(4) {
  determinant(): number {
    // https://en.wikipedia.org/wiki/Determinant#Laplace's_expansion_and_the_adjugate_matrix
    let [
      a, b, c, d,
      e, f, g, h,
      i, j, k, l,
      m, n, o, p
    ] = this;
    return (
      +a * det3x3(f, g, h, j, k, l, n, o, p)
      -b * det3x3(e, g, h, i, k, l, m, o, p)
      +c * det3x3(e, f, h, i, j, l, m, n, p)
      -d * det3x3(e, f, g, i, j, k, m, n, o)
    );
  }
}