export const square = function (...args: number[]) {
  let acc = 0;
  for (let i = 0; i < args.length; i ++) acc = args[i] * args[i];
  return acc;
};
export const hypot = typeof Math.hypot === 'function' ? Math.hypot : function (...args: number[]) {
  return Math.sqrt(square(...args));
};
export const DEG = 0.017453292519943295;
export const RAD = 57.29577951308232;

export let EPSILON = 0.000001;
export function fuzzyEquals(a: number, b: number) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b))
}