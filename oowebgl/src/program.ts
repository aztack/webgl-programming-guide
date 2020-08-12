import { OOWebGLObject } from './object';
import { WebGLContext, ShaderSource } from './types';
import { OOWebGLShader } from './shader';

let programUuid = 0;

export class OOProgram extends OOWebGLObject {
  static bgColor = '#4CAF50';
  program!: WebGLProgram;
  shaders: OOWebGLShader[] = [];
  attributes: Record<string, number> = {};
  uniforms: Record<string, WebGLUniformLocation> = {};
  name: string;

  static create(ctx: WebGLContext, vss?: ShaderSource, fss?: ShaderSource) {
    const prog = new OOProgram().init(ctx);
    if (!vss || !fss) return Promise.resolve(prog);
    return Promise.all([
      OOWebGLShader.createVertextShader(ctx, vss),
      OOWebGLShader.createFragmentShader(ctx, fss)
    ]).then((shaders: OOWebGLShader[]) => {
      prog.attachShaders(...shaders);
      return prog;
    });
  }

  constructor() {
    super();
    this.name = `program#${programUuid++}`;
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

  use(): OOProgram {
    this.$debug(`use ${this.name}`);
    this.ctx.useProgram(this.program);
    return this;
  }

  attachShaders(...shaders: OOWebGLShader[]) {
    this.ensureCreated();
    shaders.forEach(shader => {
      this.ctx.attachShader(this.program, shader.shader);
      this.$debug(`${shader.name} attached`);
    });
    this.shaders = shaders;
    return this;
  }

  deleteShaders() {
    while(this.shaders.length) {
      const shader = this.shaders.pop();
      this.ctx.deleteShader(shader!.shader);
      this.$debug(`deleting shader`, shader);
    }
    return this;
  }

  link() {
    this.ensureCreated();
    this.ctx.linkProgram(this.program);
    return new Promise((resolve, reject) => {
      if (this.linkStatus) {
        this.$debug(`${this.name} linked`);
        resolve()
      } else {
        reject(new Error(this.infoLog || 'unknown error'));
      }
    });
  }

  linkAndUse() {
    return this.link().then(() => this.use());
  }

  getParameter(name: number) {
    return this.ctx.getProgramParameter(this.program, name);
  }

  get stat() {
    const gl = this.ctx;
    // https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramParameter
    let stat: Record<string, any> = {
      // Returns a GLboolean indicating whether or not the program is flagged for deletion.
      DELETE_STATUS: gl.getProgramParameter(this.program, gl.DELETE_STATUS),
      // Returns a GLboolean indicating whether or not the last link operation was successful.
      LINK_STATUS: gl.getProgramParameter(this.program, gl.LINK_STATUS),
      // Returns a GLboolean indicating whether or not the last validation operation was successful.
      VALIDATE_STATUS: gl.getProgramParameter(this.program, gl.VALIDATE_STATUS),
      // Returns a GLint indicating the number of attached shaders to a program.
      ATTACHED_SHADERS: gl.getProgramParameter(this.program, gl.ATTACHED_SHADERS),
      // Returns a GLint indicating the number of active attribute variables to a program.
      ACTIVE_ATTRIBUTES: gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES),
      // Returns a GLint indicating the number of active uniform variables to a program.
      ACTIVE_UNIFORMS: gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS)
    };
    // webgl2
    if ('TRANSFORM_FEEDBACK_BUFFER_MODE' in gl) {
      stat = {
        ...stat,
        // Returns a GLenum indicating the buffer mode when transform feedback is active. May be gl.SEPARATE_ATTRIBS or gl.INTERLEAVED_ATTRIBS.
        TRANSFORM_FEEDBACK_BUFFER_MODE: gl.getProgramParameter(this.program, gl.TRANSFORM_FEEDBACK_BUFFER_MODE),
        // Returns a GLint indicating the number of varying variables to capture in transform feedback mode.
        TRANSFORM_FEEDBACK_VARYINGS: gl.getProgramParameter(this.program, gl.TRANSFORM_FEEDBACK_VARYINGS),
        // Returns a GLint indicating the number of uniform blocks containing active uniforms.
        ACTIVE_UNIFORM_BLOCKS: gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORM_BLOCKS),
      };
    }
    return stat;
  }

  get linkStatus() {
    return this.getParameter(this.ctx.LINK_STATUS);
  }

  get valid() {
    this.ctx.validateProgram(this.program);
    return this.getParameter(this.ctx.VALIDATE_STATUS);
  }

  get infoLog() {
    return this.ctx.getProgramInfoLog(this.program);
  }

  getAttribute(name:string) {
    let value = this.attributes[name];
    if (!value) {
      const tmp = this.ctx.getAttribLocation(this.program, name);
      if (tmp >= 0) {
        this.attributes[name] = tmp;
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
        this.uniforms[name] = tmp;
        value = tmp;
      }
    }
    return value;
  }

  _setUniform(name: string, func: string, ...args: any[]) {
    for (let i = 1; i < args.length; i++) args[i] += 0.0;
    // @ts-ignore
    const ret = this.ctx[func.replace(/i$/,'f')].apply(this.ctx, args);
    args[0] = name;
    this.$debug(`${func}(${args.join(',')})`);
    return ret;
  }

  setUniform<T extends number>(name: string, x: T, y?: T, z?: T, w?: T) {
    const location = this.getUniform(name);
    if (!location) throw new Error(`Can not get the uniform location of ${name}`);
    if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof z !== 'undefined' && typeof w !== 'undefined') {
        this._setUniform(name, 'uniform4f', location, x, y, z, w);
    } else if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof z !== 'undefined' && typeof w === 'undefined') {
      this._setUniform(name, 'uniform3f', location, x, y, z);
    } else if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof z === 'undefined' && typeof w === 'undefined') {
      this._setUniform(name, 'uniform2f', location, x, y);
    } else if (typeof x !== 'undefined' && typeof y === 'undefined' && typeof z === 'undefined' && typeof w === 'undefined') {
      this._setUniform(name, 'uniform1f', location, x);
    }
  }

  setAttribute(name: string, x: number): OOProgram;
  setAttribute(name: string, x: number, y: number): OOProgram;
  setAttribute(name: string, x: number, y: number, z: number): OOProgram;
  setAttribute(name: string, x: number, y: number, z: number, w: number): OOProgram;
  setAttribute(name: string, x: Float32List): OOProgram;
  setAttribute<
    NUMBER_OR_LIST extends number | Float32List,
    NUMBER extends number
  >(name: string, x: NUMBER_OR_LIST, y?: NUMBER, z?: NUMBER, w?: NUMBER): OOProgram {
    const location = this.getAttribute(name);
    if (location < 0) throw new Error(`Can not get the attribute location of ${name}`);
    const gl = this.ctx;
    if (typeof x === 'number') {
      if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof z !== 'undefined' && typeof w !== 'undefined') {
        gl.vertexAttrib4f(location, x, y, z, w);
      } else if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof z !== 'undefined' && typeof w === 'undefined') {
        gl.vertexAttrib3f(location, x, y, z);
      } else if (typeof x !== 'undefined' && typeof y !== 'undefined' && typeof z === 'undefined' && typeof w === 'undefined') {
        gl.vertexAttrib2f(location, x, y);
      } else if (typeof x !== 'undefined' && typeof y === 'undefined' && typeof z === 'undefined' && typeof w === 'undefined') {
        gl.vertexAttrib1f(location, x);
      }
    } else {
      const values = x as Float32List;
      switch(values.length) {
        case 0: throw new Error(`Empty list for vertexAttrib?fv`);
        case 1: gl.vertexAttrib1fv(location, values); break;
        case 2: gl.vertexAttrib2fv(location, values); break;
        case 3: gl.vertexAttrib3fv(location, values); break;
        default: gl.vertexAttrib4fv(location, values); break;
      }
    }
    this.$debug(`attribute ${name} set to`, x, y, z, w);
    return this;
  }

  destroy() {
    this.deleteShaders();
    this.ctx.deleteProgram(this.program);
    this.$debug(`program destroyed`);
  }

  private ensureCreated() {
    if (!this.program) this.init(this.ctx);
  }
}