import { Degree, Radian } from './types';

//#region [Constants]
export const RAD = 0.017453292519943295;
export const DEG = 57.29577951308232;
export const EPSILON = 0.000001;
//#endregion

//#region [Functions]
export const square = function (...args: number[]) {
  let acc = 0;
  for (let i = 0; i < args.length; i ++) acc = args[i] * args[i];
  return acc;
};

export const hypot = typeof Math.hypot === 'function' ? Math.hypot : function (...args: number[]) {
  return Math.sqrt(square(...args));
};

export function fuzzyEquals(a: number, b: number) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b))
}

export function clamp(value: number, min: number, max: number) {
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  }
  return value
}

export function fuzzyClamp(value: number, min: number, max: number) {
  if (Math.abs(value - min) < EPSILON) {
    return min;
  } else if (Math.abs(value - max) < EPSILON) {
    return max;
  }
  return value
}

export function degreeToRadian(degree: Degree) {
  return degree * DEG;
}

export function radianToDegree(radian: Radian) {
  return radian * DEG;
}
//#endregion