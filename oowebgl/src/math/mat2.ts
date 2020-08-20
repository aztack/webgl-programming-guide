import { createSquareMatrixClass, determinant2x2 as det2x2 } from './utils-mat';
export class Mat2 extends createSquareMatrixClass(2) {
  determinant(): number {
    return det2x2(...this);
  }
}