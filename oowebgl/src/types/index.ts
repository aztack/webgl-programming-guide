export type WebGLContext = WebGLRenderingContext | WebGL2RenderingContext;
export type URLString = string;
export type ShaderSource = URLString | HTMLScriptElement

type FixedSizeArray<N extends number, T> = {
  length: N;
} & ReadonlyArray<T>;


export type Tuple2<T> = [T, T];
export type Tuple3<T> = [T, T, T];
export type Tuple4<T> = [T, T, T, T];

export type IVec2 = FixedSizeArray<2, number>;
export type IVec3 = FixedSizeArray<3, number>;
export type IVec4 = FixedSizeArray<4, number>;