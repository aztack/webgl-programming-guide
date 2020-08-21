import { createSquareMatrixClass, determinant4x4 as det4 } from './utils-mat';
export class Mat4 extends createSquareMatrixClass(4) {
  determinant(): number {
    // https://en.wikipedia.org/wiki/Determinant#Laplace's_expansion_and_the_adjugate_matrix
    /*
    let [
      a, b, c, d,
      e, f, g, h,
      i, j, k, l,
      m, n, o, p
    ] = this;
    return (
      +a * determinant3x3(f, g, h, j, k, l, n, o, p)
      -b * determinant3x3(e, g, h, i, k, l, m, o, p)
      +c * determinant3x3(e, f, h, i, j, l, m, n, p)
      -d * determinant3x3(e, f, g, i, j, k, m, n, o)
    );
    */
    return det4(...this);
  }
}