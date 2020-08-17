import { Vector } from './vector';
import { Vec3 } from './vec3';
export declare class Vec2 extends Vector<Vec2> {
    static origin: Vec2;
    static from: import("./types").From<Vec2>;
    constructor();
    constructor(arg: number);
    constructor(arg: Iterable<number> | ArrayLike<number> | ArrayBuffer);
    cross(operand: Vec2): Vec3;
}
