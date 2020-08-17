export declare type WebGLContext = WebGLRenderingContext | WebGL2RenderingContext;
export declare type URLString = string;
export declare type ShaderSource = URLString | HTMLScriptElement;
export declare type Tuple2<T> = [T, T];
export declare type Tuple3<T> = [T, T, T];
export declare type Tuple4<T> = [T, T, T, T];
export declare type Override<T, Methods> = new (...args: any[]) => {
    [P in Exclude<keyof T, Methods>]: T[P];
};
