import { ShaderSource, WebGLContext } from "./types";
import { loadShader } from "./utils";

let shaderUuid = 0;

export class OOWebGLShader {
  name: string = '';
  shader!: WebGLShader;

  static createVertextShader(ctx: WebGLContext, source: ShaderSource) {
    return new OOWebGLShader(ctx, source, ctx.VERTEX_SHADER).init();
  }
  static createFragmentShader(ctx: WebGLContext, source: ShaderSource) {
    return new OOWebGLShader(ctx, source, ctx.FRAGMENT_SHADER).init();
  }
  constructor(public ctx: WebGLContext, public source: ShaderSource, public type: number) {
    this.name = `${type === ctx.VERTEX_SHADER ? 'vertex' : 'fragment'}-shader#${shaderUuid++}`;
  }

  init(): Promise<OOWebGLShader> {
    return loadShader(this.ctx, this.source, this.type).then(shader => {
      this.shader = shader;
      return this
    });
  }
}