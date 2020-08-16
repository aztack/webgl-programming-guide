import { Vector } from './vector';
export declare class Vec3 extends Vector<Vec3> {
    static origin: Vec3;
    static from(...src: number[]): Vec3;
    static from(src: Iterable<number> | ArrayLike<number>): Vec3;
    constructor();
    constructor(arg: number);
    constructor(arg: Iterable<number> | ArrayLike<number> | ArrayBuffer);
    cross(): Vec3;
}
