import { ShaderSource, WebGLContext } from "./types";
import { loadShader } from "./utils";
import { OOWebGLObject } from './object';

let shaderUuid = 0;

export class OOWebGLShader extends OOWebGLObject{
  static bgColor = '#FF5722';
  name: string = '';
  shader!: WebGLShader;
  shaderCode!: string;

  static createVertextShader(ctx: WebGLContext, source: ShaderSource) {
    return new OOWebGLShader(ctx, source, ctx.VERTEX_SHADER).init();
  }
  static createFragmentShader(ctx: WebGLContext, source: ShaderSource) {
    return new OOWebGLShader(ctx, source, ctx.FRAGMENT_SHADER).init();
  }
  constructor(public ctx: WebGLContext, public source: ShaderSource, public type: number) {
    super();
    this.name = `${type === ctx.VERTEX_SHADER ? 'vertex' : 'fragment'}-shader#${shaderUuid++}`;
  }

  init(): Promise<OOWebGLShader> {
    return loadShader(this.ctx, this.source, this.type).then(result => {
      this.$debug(`${this.name} loaded:\n`, result.code);
      this.shader = result.shader;
      this.shaderCode = result.code;
      return this;
    });
  }
}