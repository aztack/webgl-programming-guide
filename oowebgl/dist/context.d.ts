import { OOWebGLObject } from './object';
import { OOWebGLShader } from './shader';
import { ShaderSource } from './types';
import { OOProgram } from './program';
import { OOBuffer } from './buffer';
export declare class OOWebGL extends OOWebGLObject {
    static bgColor: string;
    canvas: HTMLCanvasElement;
    name: string;
    constructor(canvas?: HTMLCanvasElement, opts?: any);
    init(opts?: any): Promise<OOWebGL>;
    createProgram(vss?: ShaderSource, fss?: ShaderSource): Promise<OOProgram>;
    useProgram(prog: OOProgram): void;
    createVertextShader(source: ShaderSource, name?: string): Promise<OOWebGLShader>;
    createFragmentShader(source: ShaderSource, name?: string): Promise<OOWebGLShader>;
    createBuffer(data: BufferSource, attr?: number, elePerVertex?: number): OOBuffer;
    clear(r?: number, g?: number, b?: number, a?: number, mask?: number): void;
    draw(mode: string | undefined, count: number, first?: number): void;
}
