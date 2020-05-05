import { setupWebGL, createProgram, raf, caf } from '../lib/utils.mjs';
setupWebGL(canvas)
  .then(gl => createProgram(gl, './index.vs', './index.fs', true))
  .then(gl => {
    const n = initVertices(gl);
    // gl.vertexAttrib3f(a_Position, 0.5, 0, 0.0);
    
    let lastType;
    const draw = (type) => {
      lastType = type;
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl[type], 0, n);
    };
    let ANGLE = 90.0;
    const rotate = (angle = ANGLE) => {
      const radian = Math.PI * angle / 180.0;
      const cosB = Math.cos(radian);
      const sinB = Math.sin(radian);

      let u_CosB = gl.getUniformLocation(gl.program, 'u_CosB');
      let u_SinB = gl.getUniformLocation(gl.program, 'u_SinB');

      gl.uniform1f(u_CosB, cosB);
      gl.uniform1f(u_SinB, sinB);
      draw(lastType);
    }
    btnTriangle.onclick = () => draw('TRIANGLES');
    btnPoints.onclick = () => draw('POINTS');

    btnRotate.onclick = () => rotate(ANGLE += 5.0);
    rotate(ANGLE);
    draw('TRIANGLES');
    let timer = 0;
    function update(){
      rotate(ANGLE += 1.0);
      timer = raf(update);
    }
    btnRotateForever.onclick = () => {
      if (!timer) {
        timer = raf(update);
      } else {
        caf(timer);
        timer = 0;
      }
    };
  });

function initVertices(gl) {
  const vertices = new Float32Array([
    0.0, 0.5,
    -0.5, -0.5,
    0.5, -0.5
  ]);
  const vertexBuffer = gl.createBuffer();
  if (!vertexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  const a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return -1;
  }
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(a_Position);
  return vertices.length / 2;
}