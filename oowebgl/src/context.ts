import { create3DContext, loadShader } from './utils';
import { OOWebGLObject } from './object';
import { OOWebGLShader } from './shader';
import { ShaderSource } from './types';
import { OOProgram } from './program';
import { OOBuffer } from './buffer';

export class OOWebGL extends OOWebGLObject{
  canvas: HTMLCanvasElement;
  constructor(canvas?: HTMLCanvasElement) {
    super();
    if (!canvas) {
      canvas = document.createElement('canvas');
      document.body.appendChild(canvas);
    }
    this.canvas = canvas;
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

  draw() {
    const gl = this.ctx;
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    //gl.drawArrays(gl.TRIANGLES, 0, ?)
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