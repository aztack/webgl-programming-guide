import { setupWebGL, createProgram, initBuffer } from '../lib/utils.mjs';
setupWebGL(canvas)
  .then(gl => createProgram(gl, './index.vs', './index.fs', true))
  .then(init);

function init(gl) {
  const vertices = new Float32Array([
    -0.5, 0.5,   -0.5, -0.5,   0.5, 0.5,　0.5, -0.5
  ]);
  const a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return -1;
  }


  var u_Width = gl.getUniformLocation(gl.program, 'u_Width');
  if (!u_Width) {
    console.log('Failed to get the storage location of u_Width');
    return;
  }

  var u_Height = gl.getUniformLocation(gl.program, 'u_Height');
  if (!u_Height) {
    console.log('Failed to get the storage location of u_Height');
    return;
  }

  const n = vertices.length / 2;

  // Pass the width and hight of the <canvas>
  gl.uniform1f(u_Width, gl.drawingBufferWidth);
  gl.uniform1f(u_Height, gl.drawingBufferHeight);

  initBuffer(gl, vertices, 2, a_Position);

   // Specify the color for clearing <canvas>
   gl.clearColor(0.0, 0.0, 0.0, 1.0);

   // Clear <canvas>
   gl.clear(gl.COLOR_BUFFER_BIT);

   // Draw the rectangle
   gl.drawArrays(gl.TRIANGLES, 0, n);
}