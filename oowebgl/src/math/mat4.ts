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

  adjugate(): Mat4 | null {
    const det = this.determinant();
    if (det === 0) return null;
    const [
      a, b, c, d,
      e, f, g, h,
      i, j, k, l,
      m, n, o, p
    ] = this;
    this[ 0] = -h*k*n+g*l*n+h*j*o-f*l*o-g*j*p+f*k*p;
    this[ 1] = +d*k*n-c*l*n-d*j*o+b*l*o+c*j*p-b*k*p;
    this[ 2] = -d*g*n+c*h*n+d*f*o-b*h*o-c*f*p+b*g*p;
    this[ 3] = +d*g*j-c*h*j-d*f*k+b*h*k+c*f*l-b*g*l;
    this[ 4] = +h*k*m-g*l*m-h*i*o+e*l*o+g*i*p-e*k*p;
    this[ 5] = -d*k*m+c*l*m+d*i*o-a*l*o-c*i*p+a*k*p;
    this[ 6] = +d*g*m-c*h*m-d*e*o+a*h*o+c*e*p-a*g*p;
    this[ 7] = -d*g*i+c*h*i+d*e*k-a*h*k-c*e*l+a*g*l;
    this[ 8] = -h*j*m+f*l*m+h*i*n-e*l*n-f*i*p+e*j*p;
    this[ 9] = +d*j*m-b*l*m-d*i*n+a*l*n+b*i*p-a*j*p;
    this[10] = -d*f*m+b*h*m+d*e*n-a*h*n-b*e*p+a*f*p;
    this[11] = +d*f*i-b*h*i-d*e*j+a*h*j+b*e*l-a*f*l;
    this[12] = +g*j*m-f*k*m-g*i*n+e*k*n+f*i*o-e*j*o;
    this[13] = -c*j*m+b*k*m+c*i*n-a*k*n-b*i*o+a*j*o;
    this[14] = +c*f*m-b*g*m-c*e*n+a*g*n+b*e*o-a*f*o;
    this[15] = -c*f*i+b*g*i+c*e*j-a*g*j-b*e*k+a*f*k;
    return this;
  }
}