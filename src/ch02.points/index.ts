import { OOWebGL } from '../../oowebgl/dist/oowebgl';
(async () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const owgl = new OOWebGL(canvas);
  const shaders = [
    await owgl.createVertextShader(`./index.vs`),
    await owgl.createFragmentShader(`./index.fs`.trim())
  ];

  // @ts-ignore
  const prog = window.g = await owgl.createProgram();
  await prog.attachShaders(...shaders).linkAndUse()
  owgl.clear();
  prog.setUniform('u_FragColor', 1, 0, 0, 1);
  prog.setAttribute('a_Position', -0.5, 0, 0);
  owgl.draw('POINTS', 1);
  prog.setAttribute('a_Position', 0.5, 0, 0.0);
  prog.setUniform('u_FragColor', 1, 1, 0, 1);
  owgl.draw('POINTS', 1);
})();