import { WebGLContext, ShaderSource } from "./types";

const contextNames = ['webgl2', 'webgl', 'experimental-webgl','webkit-3d', 'moz-webgl'];

/**
 * Creates a webgl context.
 * @param {!Canvas} canvas The canvas tag to get context
 *     from. If one is not passed in one will be created.
 * @return {!WebGLContext} The created context.
 */
export function create3DContext(canvas: HTMLCanvasElement, opts?: any) {
  let ctx = null;
  for (let i = 0; i < contextNames.length; i++) {
    try {
      ctx = canvas.getContext(contextNames[i], opts) as WebGLContext;
    } catch (e) {
      // Do nothing
    }
    if (ctx) break;
  }
  if (!ctx) {
    throw new Error(`Create 3D context failed, your browser does not support WebGL!`);
  }
  return ctx;
}

const shaderPattern = /\s*void\s+main\(\s*\)/;
export function fetchShader(source: ShaderSource) {
  if (source instanceof HTMLScriptElement) {
    if (source.textContent) return Promise.resolve(source.textContent);
  } else if (typeof source === 'string') {
    if (source.match(shaderPattern)) return Promise.resolve(source);
    return fetch(source).then(resp => resp.text());
  }
  return Promise.reject(new Error(`Failed to fetch shader`));
}

export function loadShader(gl: WebGLContext, source: ShaderSource, type: number) {
  return fetchShader(source).then(code => {
    const shader = gl.createShader(type);
    if (!shader) {
      throw new Error(`Create shader failed!`);
    }
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

// https://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer/20779354#20779354
export const isInteger = Number.isInteger || function(value) {
  return typeof value === 'number' &&
    isFinite(value) &&
    Math.floor(value) === value;
};