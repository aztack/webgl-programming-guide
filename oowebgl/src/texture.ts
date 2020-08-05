import { OOWebGLObject } from "./object";
import { WebGLContext } from "./types";

export class OOTexture extends OOWebGLObject {
  texture!: WebGLBuffer;
  init(ctx: WebGLContext) {
    super.init(ctx);
    const tex = ctx.createTexture();
    if (!tex) {
      throw new Error(`Create texture failed!`);
    }
    this.texture = tex;
    return this;
  }
}