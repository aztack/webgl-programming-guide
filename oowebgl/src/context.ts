import { create3DContext, isDefined } from './utils';
import { OOWebGLObject } from './object';
import { OOWebGLShader } from './shader';
import { ShaderSource } from './types';
import { OOProgram } from './program';
import { OOBuffer } from './buffer';
import { Color } from './color';
import { OOTexture } from './texture';

let contextUuid = 0;
export class OOWebGL extends OOWebGLObject{
  static bgColor = '#2196F3';
  canvas: HTMLCanvasElement;
  name: string;
  currentProgram: OOProgram | null = null;
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
    return OOProgram.create(this.ctx, vss, fss).then(prog => {
      prog.octx = this;
      return prog;
    });
  }

  useProgram(prog: OOProgram) {
    this.currentProgram = prog;
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

  createBuffer(data: BufferSource, attr: number | string, elePerVertex?: number, type?: number, normalized?: boolean, stride?: number, offset?: number): OOBuffer {
    let attrLoc: number;
    if (typeof attr === 'string') {
      attrLoc = this.currentProgram!.getAttribute(attr);
    } else {
      attrLoc = attr;
    }
    const ret = new OOBuffer().init(this.ctx).data(data);
    if (attr && elePerVertex) ret.attribute(attrLoc, elePerVertex, type, normalized, stride, offset);
    return ret;
  }

  createTexture(sampler: WebGLUniformLocation, img: HTMLImageElement, texture?: OOTexture): OOTexture {
    const tex = texture || new OOTexture();
    tex.init(this.ctx);
    tex.bind(sampler, img);
    return tex;
  }

  clear(): OOWebGL;
  clear(color: Color , mask: number): OOWebGL;
  clear(r: number, g: number, b: number, a: number, mask:number): OOWebGL;
  clear(r?: any, g?: any, b?: number, a?: number, mask?: number): OOWebGL {
    this.$debug(`clear`);
    const gl = this.ctx;
    if (arguments.length === 0) {
      gl.clearColor(0, 0, 0, 1);
    } else {
      if (r instanceof Color) {
        gl.clearColor(...r.vec4);
      } else {
        gl.clearColor(r, g, b!, a!);
      }
    }
    if (!isDefined(mask)) mask = gl.COLOR_BUFFER_BIT;
    gl.clear(mask!);
    return this;
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