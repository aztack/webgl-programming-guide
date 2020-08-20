import { createSquareMatrixClass, determinant3x3 as det3x3 } from './utils-mat';
export class Mat3 extends createSquareMatrixClass(3) {
  determinant(): number {
    return det3x3(...this);
  }
}