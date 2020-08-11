import { WebGLContext, ShaderSource } from "./types";
/**
 * Creates a webgl context.
 * @param {!Canvas} canvas The canvas tag to get context
 *     from. If one is not passed in one will be created.
 * @return {!WebGLContext} The created context.
 */
export declare function create3DContext(canvas: HTMLCanvasElement, opts?: any): WebGLContext;
export declare function fetchShader(source: ShaderSource): Promise<string>;
export declare function loadShader(gl: WebGLContext, source: ShaderSource, type: number): Promise<{
    code: string;
    shader: WebGLShader;
}>;
export declare const isInteger: (number: unknown) => boolean;
export declare function isDefined(val: unknown): boolean;
export declare function isArray(val: unknown): boolean;
