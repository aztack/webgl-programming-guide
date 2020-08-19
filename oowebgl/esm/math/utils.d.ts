import { Matrix } from './matrix';
import { Vector } from './vector';
import { From } from './types';
import { Tuple2 } from '../types';
export declare const square: (...args: number[]) => number;
export declare const hypot: (...values: number[]) => number;
export declare const DEG = 0.017453292519943295;
export declare const RAD = 57.29577951308232;
export declare let EPSILON: number;
export declare function fuzzyEquals(a: number, b: number): boolean;
declare type ConstructorOf<T> = new (...args: any) => T;
export declare function static_from<T extends Vector<T>>(Ctor: ConstructorOf<T>): From<T>;
export declare function toString<T extends Float32Array>(this: T): string;
export declare function copy<T extends Float32Array>(this: T, operand: Iterable<number> | ArrayLike<number>): T;
export declare function clone<T extends Float32Array>(this: T): T;
export declare function add<T extends Float32Array>(this: T, operand: T): T;
export declare function substract<T extends Float32Array>(this: T, operand: T): T;
export declare function multiply<T extends Float32Array>(this: T, operand: T): T;
export declare function divide<T extends Float32Array>(this: T, operand: T): T;
export declare function scale<T extends Float32Array>(this: T, scale: number): T;
export declare function negate<T extends Float32Array>(this: T): T;
export declare function inverse<T extends Float32Array>(this: T): T;
export declare function zero<T extends Float32Array>(this: T): T;
export declare function dot<T extends Float32Array>(this: T, operand: T): number;
export declare function normalize<T extends Float32Array>(this: T): T;
export declare function get<T extends Matrix>(this: T, row: number, col: number): number;
export declare function put<T extends Matrix>(this: T, row: number, col: number, value: number): T;
export declare function mat_multiply<T extends Matrix>(this: T, operand: Matrix): Matrix;
export declare function createSquareMatrixClass(size: number): {
    new (): {
        [index: number]: number;
        shape: Tuple2<number>;
        add: typeof add;
        clone: typeof clone;
        copy: typeof copy;
        get: typeof get;
        multiply: typeof mat_multiply;
        negate: typeof negate;
        put: typeof put;
        scale: typeof scale;
        substract: typeof substract;
        toString: typeof toString;
        zero: typeof zero;
        readonly BYTES_PER_ELEMENT: number;
        readonly buffer: ArrayBuffer;
        readonly byteLength: number;
        readonly byteOffset: number;
        copyWithin(target: number, start: number, end?: number | undefined): any;
        every(callbackfn: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean;
        fill(value: number, start?: number | undefined, end?: number | undefined): any;
        filter(callbackfn: (value: number, index: number, array: Float32Array) => any, thisArg?: any): Float32Array;
        find(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number | undefined;
        findIndex(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number;
        forEach(callbackfn: (value: number, index: number, array: Float32Array) => void, thisArg?: any): void;
        indexOf(searchElement: number, fromIndex?: number | undefined): number;
        join(separator?: string | undefined): string;
        lastIndexOf(searchElement: number, fromIndex?: number | undefined): number;
        readonly length: number;
        map(callbackfn: (value: number, index: number, array: Float32Array) => number, thisArg?: any): Float32Array;
        reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number;
        reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number;
        reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U;
        reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number;
        reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number;
        reduceRight<U_1>(callbackfn: (previousValue: U_1, currentValue: number, currentIndex: number, array: Float32Array) => U_1, initialValue: U_1): U_1;
        reverse(): Float32Array;
        set(array: ArrayLike<number>, offset?: number | undefined): void;
        slice(start?: number | undefined, end?: number | undefined): Float32Array;
        some(callbackfn: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean;
        sort(compareFn?: ((a: number, b: number) => number) | undefined): any;
        subarray(begin?: number | undefined, end?: number | undefined): Float32Array;
        toLocaleString(): string;
        valueOf(): Float32Array;
        [Symbol.iterator](): IterableIterator<number>;
        entries(): IterableIterator<[number, number]>;
        keys(): IterableIterator<number>;
        values(): IterableIterator<number>;
        readonly [Symbol.toStringTag]: "Float32Array";
        includes(searchElement: number, fromIndex?: number | undefined): boolean;
    };
    new (arg: number): {
        [index: number]: number;
        shape: Tuple2<number>;
        add: typeof add;
        clone: typeof clone;
        copy: typeof copy;
        get: typeof get;
        multiply: typeof mat_multiply;
        negate: typeof negate;
        put: typeof put;
        scale: typeof scale;
        substract: typeof substract;
        toString: typeof toString;
        zero: typeof zero;
        readonly BYTES_PER_ELEMENT: number;
        readonly buffer: ArrayBuffer;
        readonly byteLength: number;
        readonly byteOffset: number;
        copyWithin(target: number, start: number, end?: number | undefined): any;
        every(callbackfn: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean;
        fill(value: number, start?: number | undefined, end?: number | undefined): any;
        filter(callbackfn: (value: number, index: number, array: Float32Array) => any, thisArg?: any): Float32Array;
        find(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number | undefined;
        findIndex(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number;
        forEach(callbackfn: (value: number, index: number, array: Float32Array) => void, thisArg?: any): void;
        indexOf(searchElement: number, fromIndex?: number | undefined): number;
        join(separator?: string | undefined): string;
        lastIndexOf(searchElement: number, fromIndex?: number | undefined): number;
        readonly length: number;
        map(callbackfn: (value: number, index: number, array: Float32Array) => number, thisArg?: any): Float32Array;
        reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number;
        reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number;
        reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U;
        reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number;
        reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number;
        reduceRight<U_1>(callbackfn: (previousValue: U_1, currentValue: number, currentIndex: number, array: Float32Array) => U_1, initialValue: U_1): U_1;
        reverse(): Float32Array;
        set(array: ArrayLike<number>, offset?: number | undefined): void;
        slice(start?: number | undefined, end?: number | undefined): Float32Array;
        some(callbackfn: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean;
        sort(compareFn?: ((a: number, b: number) => number) | undefined): any;
        subarray(begin?: number | undefined, end?: number | undefined): Float32Array;
        toLocaleString(): string;
        valueOf(): Float32Array;
        [Symbol.iterator](): IterableIterator<number>;
        entries(): IterableIterator<[number, number]>;
        keys(): IterableIterator<number>;
        values(): IterableIterator<number>;
        readonly [Symbol.toStringTag]: "Float32Array";
        includes(searchElement: number, fromIndex?: number | undefined): boolean;
    };
    new (arg: Iterable<number> | ArrayLike<number> | ArrayBuffer): {
        [index: number]: number;
        shape: Tuple2<number>;
        add: typeof add;
        clone: typeof clone;
        copy: typeof copy;
        get: typeof get;
        multiply: typeof mat_multiply;
        negate: typeof negate;
        put: typeof put;
        scale: typeof scale;
        substract: typeof substract;
        toString: typeof toString;
        zero: typeof zero;
        readonly BYTES_PER_ELEMENT: number;
        readonly buffer: ArrayBuffer;
        readonly byteLength: number;
        readonly byteOffset: number;
        copyWithin(target: number, start: number, end?: number | undefined): any;
        every(callbackfn: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean;
        fill(value: number, start?: number | undefined, end?: number | undefined): any;
        filter(callbackfn: (value: number, index: number, array: Float32Array) => any, thisArg?: any): Float32Array;
        find(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number | undefined;
        findIndex(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number;
        forEach(callbackfn: (value: number, index: number, array: Float32Array) => void, thisArg?: any): void;
        indexOf(searchElement: number, fromIndex?: number | undefined): number;
        join(separator?: string | undefined): string;
        lastIndexOf(searchElement: number, fromIndex?: number | undefined): number;
        readonly length: number;
        map(callbackfn: (value: number, index: number, array: Float32Array) => number, thisArg?: any): Float32Array;
        reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number;
        reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number;
        reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U;
        reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number;
        reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number;
        reduceRight<U_1>(callbackfn: (previousValue: U_1, currentValue: number, currentIndex: number, array: Float32Array) => U_1, initialValue: U_1): U_1;
        reverse(): Float32Array;
        set(array: ArrayLike<number>, offset?: number | undefined): void;
        slice(start?: number | undefined, end?: number | undefined): Float32Array;
        some(callbackfn: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean;
        sort(compareFn?: ((a: number, b: number) => number) | undefined): any;
        subarray(begin?: number | undefined, end?: number | undefined): Float32Array;
        toLocaleString(): string;
        valueOf(): Float32Array;
        [Symbol.iterator](): IterableIterator<number>;
        entries(): IterableIterator<[number, number]>;
        keys(): IterableIterator<number>;
        values(): IterableIterator<number>;
        readonly [Symbol.toStringTag]: "Float32Array";
        includes(searchElement: number, fromIndex?: number | undefined): boolean;
    };
    identity: {
        [index: number]: number;
        shape: Tuple2<number>;
        add: typeof add;
        clone: typeof clone;
        copy: typeof copy;
        get: typeof get;
        multiply: typeof mat_multiply;
        negate: typeof negate;
        put: typeof put;
        scale: typeof scale;
        substract: typeof substract;
        toString: typeof toString;
        zero: typeof zero;
        readonly BYTES_PER_ELEMENT: number;
        readonly buffer: ArrayBuffer;
        readonly byteLength: number;
        readonly byteOffset: number;
        copyWithin(target: number, start: number, end?: number | undefined): any;
        every(callbackfn: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean;
        fill(value: number, start?: number | undefined, end?: number | undefined): any;
        filter(callbackfn: (value: number, index: number, array: Float32Array) => any, thisArg?: any): Float32Array;
        find(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number | undefined;
        findIndex(predicate: (value: number, index: number, obj: Float32Array) => boolean, thisArg?: any): number;
        forEach(callbackfn: (value: number, index: number, array: Float32Array) => void, thisArg?: any): void;
        indexOf(searchElement: number, fromIndex?: number | undefined): number;
        join(separator?: string | undefined): string;
        lastIndexOf(searchElement: number, fromIndex?: number | undefined): number;
        readonly length: number;
        map(callbackfn: (value: number, index: number, array: Float32Array) => number, thisArg?: any): Float32Array;
        reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number;
        reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number;
        reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U;
        reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number): number;
        reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue: number): number;
        reduceRight<U_1>(callbackfn: (previousValue: U_1, currentValue: number, currentIndex: number, array: Float32Array) => U_1, initialValue: U_1): U_1;
        reverse(): Float32Array;
        set(array: ArrayLike<number>, offset?: number | undefined): void;
        slice(start?: number | undefined, end?: number | undefined): Float32Array;
        some(callbackfn: (value: number, index: number, array: Float32Array) => unknown, thisArg?: any): boolean;
        sort(compareFn?: ((a: number, b: number) => number) | undefined): any;
        subarray(begin?: number | undefined, end?: number | undefined): Float32Array;
        toLocaleString(): string;
        valueOf(): Float32Array;
        [Symbol.iterator](): IterableIterator<number>;
        entries(): IterableIterator<[number, number]>;
        keys(): IterableIterator<number>;
        values(): IterableIterator<number>;
        readonly [Symbol.toStringTag]: "Float32Array";
        includes(searchElement: number, fromIndex?: number | undefined): boolean;
    };
    readonly BYTES_PER_ELEMENT: number;
    of(...items: number[]): Float32Array;
    from(arrayLike: ArrayLike<number>): Float32Array;
    from<T>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => number, thisArg?: any): Float32Array;
    from(arrayLike: Iterable<number>, mapfn?: ((v: number, k: number) => number) | undefined, thisArg?: any): Float32Array;
};
export {};