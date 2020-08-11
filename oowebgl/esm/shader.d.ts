import { ShaderSource, WebGLContext } from "./types";
import { OOWebGLObject } from './object';
export declare class OOWebGLShader extends OOWebGLObject {
    ctx: WebGLContext;
    source: ShaderSource;
    type: number;
    static bgColor: string;
    name: string;
    shader: WebGLShader;
    shaderCode: string;
    static createVertextShader(ctx: WebGLContext, source: ShaderSource): Promise<OOWebGLShader>;
    static createFragmentShader(ctx: WebGLContext, source: ShaderSource): Promise<OOWebGLShader>;
    constructor(ctx: WebGLContext, source: ShaderSource, type: number);
    init(): Promise<OOWebGLShader>;
}
