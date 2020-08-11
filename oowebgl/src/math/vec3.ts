import { IVec3 } from '../types';

export class Vec3 extends Array<number> implements IVec3 {
  length: 3 = 3;
}