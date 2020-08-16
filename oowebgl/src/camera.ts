import { OOWebGLObject } from './object';
import { Vec3 } from './math/vec3';

export class Camera extends OOWebGLObject {

  lookAtPoint: Vec3 = Vec3.from(0, 0, -1);
  eyePoint: Vec3 = Vec3.origin.clone();
  upPoint: Vec3 = Vec3.from(0, 1, 0);

  init() {

  }

  moveTo(point: Vec3) {
    this.eyePoint = point;
  }
  lookAt(point: Vec3) {
    this.lookAtPoint = point;
  }
}