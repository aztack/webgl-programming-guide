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

const contextNames = ['webgl2', 'webgl', 'experimental-webgl','webkit-3d', 'moz-webgl']
function create3DContext(canvas, opts) {
  
}