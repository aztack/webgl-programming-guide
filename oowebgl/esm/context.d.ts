import { OOWebGLObject } from './object';
import { OOWebGLShader } from './shader';
import { ShaderSource } from './types';
import { OOProgram } from './program';
import { OOBuffer } from './buffer';
import { Color } from './color';
import { OOTexture } from './texture';
export declare class OOWebGL extends OOWebGLObject {
    static bgColor: string;
    canvas: HTMLCanvasElement;
    name: string;
    currentProgram: OOProgram | null;
    constructor(canvas?: HTMLCanvasElement, opts?: any);
    init(opts?: any): Promise<OOWebGL>;
    createProgram(vss?: ShaderSource, fss?: ShaderSource): Promise<OOProgram>;
    useProgram(prog: OOProgram): void;
    createVertextShader(source: ShaderSource, name?: string): Promise<OOWebGLShader>;
    createFragmentShader(source: ShaderSource, name?: string): Promise<OOWebGLShader>;
    createBuffer(data: BufferSource, attr: number | string, elePerVertex?: number, type?: number, normalized?: boolean, stride?: number, offset?: number): OOBuffer;
    createTexture(sampler: WebGLUniformLocation, img: HTMLImageElement, texture?: OOTexture): OOTexture;
    clear(): OOWebGL;
    clear(color: Color, mask: number): OOWebGL;
    clear(r: number, g: number, b: number, a: number, mask: number): OOWebGL;
    draw(mode: string | undefined, count: number, first?: number): void;
}
