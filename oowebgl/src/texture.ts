import { OOWebGLObject } from "./object";
import { WebGLContext } from "./types";

export class OOTexture extends OOWebGLObject {
  texture!: WebGLBuffer;
  init(ctx: WebGLContext, ) {
    super.init(ctx);
    const tex = ctx.createTexture();
    if (!tex) {
      throw new Error(`Create texture failed!`);
    }
    this.texture = tex;
    return this;
  }
  bind(sampler: WebGLUniformLocation, image: HTMLImageElement) {
    if (!image || !(image instanceof HTMLImageElement)) {
      throw new Error(`Invalid image!`);
    }
    const gl = this.ctx;
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
    gl.activeTexture(gl.TEXTURE0); // TODO
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
    gl.uniform1i(sampler, 0);
  }

  parameteri(name: number, value: number | string, target?: number): OOTexture {
    const gl = this.ctx;
    // @ts-ignore
    gl.texParameteri(target || gl.TEXTURE_2D, name, typeof value === 'number' ? value : gl[value]);
    return this;
  }
}