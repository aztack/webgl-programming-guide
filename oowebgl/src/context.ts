import { create3DContext } from './utils';
import { OOWebGLObject } from './object';
import { OOWebGLShader } from './shader';
import { ShaderSource } from './types';
import { OOProgram } from './program';
import { OOBuffer } from './buffer';

let contextUuid = 0;
export class OOWebGL extends OOWebGLObject{
  static bgColor = '#2196F3';
  canvas: HTMLCanvasElement;
  name: string;
  constructor(canvas?: HTMLCanvasElement, opts?: any) {
    super();
    this.name = `context#${contextUuid++}`;
    if (!canvas) {
      canvas = document.createElement('canvas');
      document.body.appendChild(canvas);
    }
    this.canvas = canvas;
    this.init(opts);
  }

  init(opts?: any): Promise<OOWebGL> {
    return new Promise((resolve, reject) => {
      this.ctx = create3DContext(this.canvas, opts);
      this.canvas.addEventListener('webglcontextcreationerror', reject);
      resolve(this);
    });
  }

  createProgram(vss?: ShaderSource, fss?: ShaderSource) {
    return OOProgram.create(this.ctx, vss, fss);
  }

  useProgram(prog: OOProgram) {
    return this.ctx.useProgram(prog.program);
  }

  createVertextShader(source: ShaderSource, name?: string): Promise<OOWebGLShader> {
    return OOWebGLShader.createVertextShader(this.ctx, source).then(shader => {
      if (name) shader.name = name;
      return shader;
    });
  }

  createFragmentShader(source: ShaderSource, name?: string): Promise<OOWebGLShader> {
    return OOWebGLShader.createFragmentShader(this.ctx, source).then(shader => {
      if (name) shader.name = name;
      return shader;
    });
  }

  createBuffer(data: BufferSource, attr?: number, elePerVertex?: number) {
    const ret = new OOBuffer(this.ctx).data(data);
    if (attr && elePerVertex) ret.attribute(attr, elePerVertex);
    return ret;
  }

  clear(r: number = 0, g: number = 0, b: number = 0, a: number = 1, mask = this.ctx.COLOR_BUFFER_BIT) {
    this.$debug(`clear`);
    const gl = this.ctx;
    gl.clearColor(r, g, b, a);
    gl.clear(mask);
  }

  draw(mode: string = 'TRIANGLES', count: number, first: number = 0) {
    this.$debug(`drawArrays(${mode}, ${first}, ${count})`);
    const gl = this.ctx;
    if (mode in gl) {
      // @ts-ignore
      gl.drawArrays(gl[mode], first, count);
    } else {
      throw new Error(`Invaid drawArrays mode: ${mode}`);
    }
  }
}

/*
(async () => {
  const ctx = new OOWebGL();
  const prog = await ctx.createProgram();
  prog.attachShaders(
    await ctx.createVertextShader(document.querySelector('#vs') as HTMLScriptElement),
    await ctx.createFragmentShader(document.querySelector('#fs') as HTMLScriptElement)
  ).link();
})();
*/