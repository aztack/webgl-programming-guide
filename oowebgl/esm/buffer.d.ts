import { OOWebGLObject } from "./object";
import { WebGLContext } from "./types";
export declare class OOBuffer extends OOWebGLObject {
    buffer: WebGLBuffer;
    bound: boolean;
    constructor();
    init(ctx: WebGLContext): this;
    bind(): this;
    data(data: BufferSource): this;
    attribute(attr: number, elePerVertex: number, type?: number, normalized?: boolean, stride?: number, offset?: number): this;
    ensureCreated(): void;
    ensureBind(): void;
}
