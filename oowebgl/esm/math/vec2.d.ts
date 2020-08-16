import { Vector } from './vector';
import { Vec3 } from './vec3';
export declare class Vec2 extends Vector<Vec2> {
    static origin: Vec2;
    static from(...src: number[]): Vec2;
    static from(src: Iterable<number> | ArrayLike<number>): Vec2;
    constructor();
    constructor(arg: number);
    constructor(arg: Iterable<number> | ArrayLike<number> | ArrayBuffer);
    cross(operand: Vec2): Vec3;
}
