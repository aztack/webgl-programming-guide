import { OOWebGLObject } from "./object";
import { WebGLContext } from "./types";
export declare class OOTexture extends OOWebGLObject {
    texture: WebGLBuffer;
    init(ctx: WebGLContext): this;
    bind(sampler: WebGLUniformLocation, image: HTMLImageElement): void;
}
