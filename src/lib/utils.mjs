const minInterval = 1000 / 60;
/**
 * Provides requestAnimationFrame and cancelAnimationFrame in a cross browser
 * way.
 */
export const raf = (() => {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      return window.setTimeout(callback, minInterval);
    }
})();

export const caf = (() => {
  return window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.oCancelAnimationFrame ||
    window.msCancelAnimationFrame ||
    function (id) {
      return window.clearTimeout(id);
    }
})();

export const contextNames = ['webgl2', 'webgl', 'experimental-webgl','webkit-3d', 'moz-webgl'];
/**
 * Creates a webgl context.
 * @param {!Canvas} canvas The canvas tag to get context
 *     from. If one is not passed in one will be created.
 * @return {!WebGLContext} The created context.
 */
export function create3DContext(canvas, opts) {
  let ctx = null;
  for (let i = 0; i < contextNames.length; i++) {
    try {
      ctx = canvas.getContext(contextNames[i], opts);
    } catch (e) {
      // Do nothing
    }
    if (ctx) break;
  }
  return ctx;
}

/**
 * Setup WebGL
 * @param {HTMLCanvasElement} canvas
 * @param {*} opts
 */
export function setupWebGL (canvas, opts) {
  return new Promise((resolve, reject) => {
    const ctx = create3DContext(canvas, opts);
    canvas.addEventListener('webglcontextcreationerror', reject);
    if (!ctx) reject(new Error(`Your browser does not support WebGL`));
    resolve(ctx);
  });
}

/**
 *
 * @param {WebGLRenderingContext} gl
 * @param {HTMLScriptElement | string} vs Vertex Shader
 * @param {HTMLScriptElement | string} fs Fragment Shader
 * @param {boolean} isUse is use created program
 */
export function createProgram(gl, vs, fs, isUse) {
  return Promise.all([
    loadShader(gl, vs, gl.VERTEX_SHADER),
    loadShader(gl, fs, gl.FRAGMENT_SHADER)
  ]).then(([vs, fs]) => {
    const program = createAndLinkProgram(gl, vs, fs);
    if (isUse) {
      gl.useProgram(program);
      gl.program = program;
    }
    return gl;
  });
}

export function createAndLinkProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  const linked = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!linked) {
    const errMsg = gl.getProgramInfoLog(program);
    const err = new Error(`Failed to link shaders: ${errMsg}`);
    gl.deleteProgram(program);
    gl.deleteShader(fragment);
    gl.deleteShader(vertex);
    throw err;
  }
  return program;
}

export function loadShader(gl, source, type) {
  return fetchShader(source).then(code => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, code);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const t = type === gl.VERTEX_SHADER ? 'vertex' : 'fragment';
      const errMsg = gl.getShaderInfoLog(shader);
      const err = new Error(`Failed to compile ${t} shader:\n${errMsg}\nSOURCE:\n${code}`);
      gl.deleteShader(shader);
      throw err;
    }
    return shader;
  });
}

const shaderPattern = /\s*void\s+main\(\s*\)/;
export function fetchShader(source) {
  if (source instanceof HTMLScriptElement) {
    if (source.textContent) return Promise.resolve(source.textContent);
  } else if (typeof source === 'string') {
    if (source.match(shaderPattern)) return Promise.resolve(source);
    return fetch(source).then(resp => resp.text());
  } else {
    return Promise.reject(new Error(`Failed to fetch shader`));
  }
}

export function initBuffer (gl, data, elemPerVertex, attribute) {
  var buffer = gl.createBuffer();
  if (!buffer) throw new Error('Failed to create buffer.');
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
  gl.vertexAttribPointer(attribute, elemPerVertex, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(attribute);
};