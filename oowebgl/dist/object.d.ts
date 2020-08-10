import { WebGLContext } from "./types";
export declare class OOWebGLObject {
    ctx: WebGLContext;
    [name: string]: any;
    init(ctx: WebGLContext): void;
    $debug(...args: any): void;
}
