import { WebGLContext } from "./types";
import { DEBUG } from "./utils";

export class OOWebGLObject {
  ctx!: WebGLContext;
  [name: string]: any;
  init(ctx: WebGLContext) {
    this.ctx = ctx;
  }
  $debug(...args: any) {
    if (DEBUG) {
      //@ts-ignore
      args.unshift(`background:${this.constructor.bgColor || 'rgb(49,49,49)'}; color: #fff;border-radius:2px`);
      args.unshift(`%c[${this.name || this.constructor.name}]`);
      console.log(...args);
    }
  }
}