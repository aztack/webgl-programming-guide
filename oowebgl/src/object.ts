import { WebGLContext } from "./types";

export class OOWebGLObject {
  ctx!: WebGLContext;
  init(ctx: WebGLContext) {
    this.ctx = ctx;
  }
}