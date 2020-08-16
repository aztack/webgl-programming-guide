import { OOWebGL } from '../../oowebgl/esm/oowebgl';
(async () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const owgl = new OOWebGL(canvas);
  const gl = owgl.ctx;
  const shaders = [
    await owgl.createVertextShader(`/ch07.vs`),
    await owgl.createFragmentShader(`/ch07.fs`)
  ];

  // @ts-ignore
  const prog = window.g = await owgl.createProgram();
})();