import { OOWebGLObject } from './object';
import { Vec3 } from './math/vec3';
export declare class Camera extends OOWebGLObject {
    lookAtPoint: Vec3;
    eyePoint: Vec3;
    upPoint: Vec3;
    init(): void;
    moveTo(point: Vec3): void;
    lookAt(point: Vec3): void;
}
