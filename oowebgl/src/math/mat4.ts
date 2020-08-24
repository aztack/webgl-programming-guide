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

  transpose() {
    const [
       , b, c, d,
      e,  , g, h,
      i, j,  , l,
      m, n, o,
    ] = this;
    // this[0] = a;
    this[1] = e;
    this[2] = i;
    this[3] = m;
    this[4] = b;
    // this[5] = f;
    this[6] = j;
    this[7] = n;
    this[8] = c;
    this[9] = g;
    // this[10] = k;
    this[11] = o;
    this[12] = d;
    this[13] = h;
    this[14] = l;
    // this[15] = p;
    return  this;
  }
}