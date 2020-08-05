import { OOWebGLObject } from './object';
import { WebGLContext, ShaderSource } from './types';
import { OOWebGLShader } from './shader';
import { isInteger } from './utils';

export class OOProgram extends OOWebGLObject {
  program!: WebGLProgram;
  shaders: OOWebGLShader[] = [];
  attributes: Record<string, number> = {};
  uniforms: Record<string, WebGLUniformLocation> = {};

  static create(ctx: WebGLContext, vss?: ShaderSource, fss?: ShaderSource) {
    const prog = new OOProgram().init(ctx);
    if (!vss || !fss) return Promise.resolve(prog);
    return Promise.all([
      OOWebGLShader.createFragmentShader(ctx, vss),
      OOWebGLShader.createFragmentShader(ctx, fss)
    ]).then((shaders: OOWebGLShader[]) => {
      prog.attachShaders(...shaders);
      return prog;
    });
  }

  init(ctx: WebGLContext): OOProgram {
    super.init(ctx);
    const program = this.ctx.createProgram()
    if (!program) {
      throw new Error(`Create program failed!`);
    }
    this.program = program;
    return this;
  }

  attachShaders(...shaders: OOWebGLShader[]) {
    this.ensureCreated();
    shaders.forEach(shader => {
      this.ctx.attachShader(this.program, shader.shader);
    });
    this.shaders = shaders;
    return this;
  }

  deleteShaders() {
    while(this.shaders.length) {
      const shader = this.shaders.pop();
      this.ctx.deleteShader(shader!.shader);
    }
    return this;
  }

  link(...shaders: OOWebGLShader[]) {
    this.ensureCreated();
    this.deleteShaders().attachShaders(...shaders);
    this.ctx.linkProgram(this.program);
    return new Promise((resolve, reject) => {
      if (this.linkStatus) {
        resolve()
      } else {
        reject(new Error(this.infoLog || 'unknown error'));
      }
    });
  }

  getParameter(name: number) {
    return this.ctx.getProgramParameter(this.program, name);
  }

  get linkStatus() {
    return this.getParameter(this.ctx.LINK_STATUS);
  }

  get infoLog() {
    return this.ctx.getProgramInfoLog(this.program);
  }

  getAttribute(name:string) {
    let value = this.attributes[name];
    if (!value) {
      const tmp = this.ctx.getAttribLocation(this.program, name);
      if (tmp) {
        this.attributes[name] = value;
        value = tmp;
      }
    }
    return value;
  }
  getUniform(name: string) {
    let value = this.uniforms[name];
    if (!value) {
      const tmp = this.ctx.getUniformLocation(this.program, name);
      if (tmp) {
        this.uniforms[name] = value;
        value = tmp;
      }
    }
    return value;
  }

  setUniform<T extends number>(name: string, x: T, y?: T, z?: T, w?: T) {
    const location = this.getUniform(name);
    if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof z !== 'undefined' && typeof w !== 'undefined') {
      isInteger(x) && isInteger(y) && isInteger(z) && isInteger(w)
        ? this.ctx.uniform4i(location, x, y, z, w)
        : this.ctx.uniform4f(location, x, y, z, w);
    } else if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof z !== 'undefined' && typeof w === 'undefined') {
      isInteger(x) && isInteger(y) && isInteger(z)
        ? this.ctx.uniform3i(location, x, y, z)
        : this.ctx.uniform3f(location, x, y, z);
    } else if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof z === 'undefined' && typeof w === 'undefined') {
      isInteger(x) && isInteger(y)
        ? this.ctx.uniform2i(location, x, y)
        : this.ctx.uniform2f(location, x, y);
    } else if (typeof x !== 'undefined' && typeof y === 'undefined' && typeof z === 'undefined' && typeof w === 'undefined') {
      isInteger(x)
        ? this.ctx.uniform1i(location, x)
        : this.ctx.uniform1f(location, x);
    }
  }

  destroy() {
    this.deleteShaders();
    this.ctx.deleteProgram(this.program);
  }

  private ensureCreated() {
    if (!this.program) this.init(this.ctx);
  }
}