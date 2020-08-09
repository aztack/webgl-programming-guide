import { setupWebGL, createProgram, initBuffer, initTexture } from '../lib/utils.mjs';
setupWebGL(canvas)
  .then(gl => createProgram(gl, './index.vs', './index.fs', true))
  .then(init);

function init(gl) {
  const A = [-0.5, +0.5];
  const B = [-0.5, -0.5];
  const C = [+0.5, +0.5];
  const D = [+0.5, -0.5];
  const vertices = new Float32Array([
    ...A, 0.0, 1.0,
    ...B, 0.0, 0.0,
    ...C, 1.0, 1.0,
    ...D, 1.0, 0.0
  ]);


  const a_Position = getAttribLocation('a_Position');
  const a_TexCoord = getAttribLocation('a_TexCoord');
  const u_Sampler  = getUniformLocation('u_Sampler');
  const FSIZE = vertices.BYTES_PER_ELEMENT;

  offsetX.addEventListener('change', e => {
    const max = parseInt(e.target.max)
    const val = parseInt(e.target.value);
    const x = val/max - 0.5;
    vertices[ 0] = A[0] + x;
    vertices[ 4] = B[0] + x;
    vertices[ 8] = C[0] + x;
    vertices[12] = D[0] + x;
    render();
  });
  offsetY.addEventListener('change', e => {
    const max = parseInt(e.target.max)
    const val = parseInt(e.target.value);
    const y = val/max - 0.5;
    vertices[ 0 + 1] = A[1] + y;
    vertices[ 4 + 1] = B[1] + y;
    vertices[ 8 + 1] = C[1] + y;
    vertices[12 + 1] = D[1] + y;
    render();
  });



  function render() {
    initBuffer(gl, vertices, a_Position, 2, FSIZE * 4, 0);
    initBuffer(gl, vertices, a_TexCoord, 2, FSIZE * 4, FSIZE * 2);
    initTexture(gl, gl.createTexture(), u_Sampler, img);
    draw(vertices.length / 4);
  }

  function getAttribLocation(name) {
    const attr = gl.getAttribLocation(gl.program, name);
    if (attr < 0) {
      console.log(`Failed to get the storage location of ${name}`);
      return -1;
    }
    return attr;
  }
  function getUniformLocation(name) {
    const uniform = gl.getUniformLocation(gl.program, name);
    if (uniform < 0) {
      console.log(`Failed to get the storage location of ${name}`);
      return -1;
    }
    return uniform;
  }

  function draw(n) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, n);
  }

  render();
}

