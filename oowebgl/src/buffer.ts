import { OOWebGLObject } from "./object";
import { WebGLContext } from "./types";
import { isDefined } from "./utils";

let bufferId = 0;
export class OOBuffer extends OOWebGLObject {
  buffer!: WebGLBuffer;
  bound: boolean = false;
  constructor() {
    super();
    this.name = `buffer#${bufferId++}`;
  }

  init(ctx: WebGLContext) {
    super.init(ctx);
    const buf = ctx.createBuffer();
    this.$debug(`buffer created`, buf);
    if (!buf) {
      throw new Error(`Create buffer failed!`);
    }
    this.buffer = buf;
    return this;
  }

  bind() {
    this.ensureCreated();
    const gl = this.ctx;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    this.bound = true;
    this.$debug('buffer bound');
    return this;
  }

  data(data: BufferSource) {
    this.ensureCreated();
    this.ensureBind();
    const gl = this.ctx;
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    this.$debug('buffer filled with data', data);
    return this;
  }

  attribute(attr: number, elePerVertex: number, type?: number, normalized?: boolean, stride?: number, offset?: number) {
    this.ensureCreated();
    const gl = this.ctx;
    type = isDefined(type) ? type : gl.FLOAT;
    normalized = isDefined(normalized) ? normalized : false;
    stride = isDefined(stride) ? stride : 0;
    offset = isDefined(offset) ? offset : 0;
    gl.vertexAttribPointer(attr, elePerVertex, type!, normalized!, stride!, offset!);
    gl.enableVertexAttribArray(attr);
    return this;
  }

  ensureCreated() {
    if (!this.buffer) this.init(this.ctx);
  }

  ensureBind() {
    if (!this.bound) this.bind();
  }
}