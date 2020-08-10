import { OOWebGLObject } from "./object";
import { WebGLContext } from "./types";
export declare class OOBuffer extends OOWebGLObject {
    buffer: WebGLBuffer;
    constructor(ctx: WebGLContext);
    init(ctx: WebGLContext): this;
    bind(data: BufferSource, elePerVertext: number, attr: number): this;
    data(data: BufferSource): this;
    attribute(attr: number, elePerVertex: number, type?: number, normalized?: boolean, stride?: number, offset?: number): this;
    ensureCreated(): void;
}
