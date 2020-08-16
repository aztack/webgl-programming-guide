import { Vector } from './vector';
export declare class Vec4 extends Vector<Vec4> {
    static readonly origin: Vec4;
    static from(...src: number[]): Vec4;
    static from(src: Iterable<number> | ArrayLike<number>): Vec4;
    constructor();
    constructor(arg: number);
    constructor(arg: Iterable<number> | ArrayLike<number> | ArrayBuffer);
    cross(): Vec4;
}
