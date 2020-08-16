export declare abstract class Vector<RET extends Vector<RET>> extends Float32Array {
    toString(): string;
    clone(): RET;
    copy(src: Iterable<number> | ArrayLike<number>): RET;
    add(operand: Vector<RET>): RET;
    substract(operand: Vector<RET>): RET;
    multiply(operand: Vector<RET>): RET;
    divide(operand: Vector<RET>): RET;
    scale(scale: number): RET;
    negate(): RET;
    inverse(): RET;
    nomalize(): void;
    dot(operand: Vector<RET>): number;
    ceil(operand: Vector<RET>): RET;
    floor(operand: Vector<RET>): RET;
    round(operand: Vector<RET>): RET;
    zero(): RET;
    get len(): number;
    private _math;
}
