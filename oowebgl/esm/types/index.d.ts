export declare const OO_DEBUG: boolean;
export declare type WebGLContext = WebGLRenderingContext | WebGL2RenderingContext;
export declare type URLString = string;
export declare type ShaderSource = URLString | HTMLScriptElement;
declare type FixedSizeArray<N extends number, T> = {
    length: N;
} & ReadonlyArray<T>;
export declare type Tuple2<T> = [T, T];
export declare type Tuple3<T> = [T, T, T];
export declare type Tuple4<T> = [T, T, T, T];
export declare type IVec2 = FixedSizeArray<2, number>;
export declare type IVec3 = FixedSizeArray<3, number>;
export declare type IVec4 = FixedSizeArray<4, number>;
export {};
