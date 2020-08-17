export type WebGLContext = WebGLRenderingContext | WebGL2RenderingContext;
export type URLString = string;
export type ShaderSource = URLString | HTMLScriptElement

export type Tuple2<T> = [T, T];
export type Tuple3<T> = [T, T, T];
export type Tuple4<T> = [T, T, T, T];

export type Override<T, Methods> = new(...args: any[]) => {
  [P in Exclude<keyof T, Methods>]: T[P];
}
