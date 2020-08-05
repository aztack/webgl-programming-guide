import { OOWebGLObject } from "./object";
import { WebGLContext } from "./types";

export class OOBuffer extends OOWebGLObject {
  buffer!: WebGLBuffer;
  constructor(ctx: WebGLContext) {
    super();
    this.init(ctx);
  }
  init(ctx: WebGLContext) {
    super.init(ctx);
    const buf = ctx.createBuffer();
    if (!buf) {
      throw new Error(`Create buffer failed!`);
    }
    this.buffer = buf;
    return this;
  }


  bind(data: BufferSource, elePerVertext: number, attr: number) {
    this.ensureCreated();
    const gl = this.ctx;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    return this;
  }

  data(data: BufferSource) {
    this.ensureCreated();
    const gl = this.ctx;
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    return this;
  }

  attribute(attr: number, elePerVertex: number) {
    this.ensureCreated();
    const gl = this.ctx;
    gl.vertexAttribPointer(attr, elePerVertex, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(attr);
    return this;
  }

  ensureCreated() {
    if (!this.buffer) this.init(this.ctx);
  }
}