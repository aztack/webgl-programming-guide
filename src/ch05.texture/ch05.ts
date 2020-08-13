window.parcelRequire = null
import { OOWebGL } from '../../oowebgl/esm/oowebgl';
(async () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const owgl = new OOWebGL(canvas);
  const shaders = [
    await owgl.createVertextShader(`/ch05.vs`),
    await owgl.createFragmentShader(`/ch05.fs`)
  ];

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
  const FSIZE = vertices.BYTES_PER_ELEMENT;

  function getValOfSlider(e: Event) {
    const max = parseInt((e.target as HTMLInputElement).max);
    const val = parseInt((e.target as HTMLInputElement).value);
    return val/max - 0.5;
  }

  document.getElementById('offsetX').addEventListener('change', e => {
    const x = getValOfSlider(e);
    vertices[ 0] = A[0] + x;
    vertices[ 4] = B[0] + x;
    vertices[ 8] = C[0] + x;
    vertices[12] = D[0] + x;
    render();
  });
  document.getElementById('offsetY').addEventListener('change', e => {
    const max = parseInt((e.target as HTMLElement).getAttribute('max'))
    const val = parseInt((e.target as HTMLInputElement).value);
    const y = val/max - 0.5;
    vertices[ 0 + 1] = A[1] + y;
    vertices[ 4 + 1] = B[1] + y;
    vertices[ 8 + 1] = C[1] + y;
    vertices[12 + 1] = D[1] + y;
    render();
  });

  // @ts-ignore
  const prog = window.g = await owgl.createProgram();

  await prog.attachShaders(...shaders).linkAndUse();
  const u_Sampler = prog.getUniform('u_Sampler');
  const buf1 = owgl.createBuffer(vertices, 'a_Position', 2, undefined, false, FSIZE * 4, 0);
  const buf2 = owgl.createBuffer(vertices, 'a_TexCoord', 2, undefined, false, FSIZE * 4, FSIZE * 2);
  const tex1 = owgl.createTexture(u_Sampler, document.getElementById('img') as HTMLImageElement);
  function render() {
    owgl.clear();
    buf1.bind()
      .data(vertices)
      .attribute('a_Position', 2, undefined, false, FSIZE * 4, 0);
    owgl.draw('TRIANGLE_STRIP', vertices.length / 4);
  }

  render();
})();