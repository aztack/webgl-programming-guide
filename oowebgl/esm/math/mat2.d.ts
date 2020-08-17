declare const Mat2_base: {
    new (): {
        [index: number]: number;
        shape: import("../types").Tuple2<number>;
        add: typeof import("./utils").add;
        clone: typeof import("./utils").clone;
        copy: typeof import("./utils").copy;
        get: typeof import("./utils").get;
        multiply: typeof import("./utils").mat_multiply;
        negate: typeof import("./utils").negate;
        put: typeof import("./utils").put;
        scale: typeof import("./utils").scale;
        substract: typeof import("./utils").substract;
        toString: typeof import("./utils").toString;
        zero: typeof import("./utils").zero;
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
        shape: import("../types").Tuple2<number>;
        add: typeof import("./utils").add;
        clone: typeof import("./utils").clone;
        copy: typeof import("./utils").copy;
        get: typeof import("./utils").get;
        multiply: typeof import("./utils").mat_multiply;
        negate: typeof import("./utils").negate;
        put: typeof import("./utils").put;
        scale: typeof import("./utils").scale;
        substract: typeof import("./utils").substract;
        toString: typeof import("./utils").toString;
        zero: typeof import("./utils").zero;
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
    new (arg: ArrayBuffer | ArrayLike<number> | Iterable<number>): {
        [index: number]: number;
        shape: import("../types").Tuple2<number>;
        add: typeof import("./utils").add;
        clone: typeof import("./utils").clone;
        copy: typeof import("./utils").copy;
        get: typeof import("./utils").get;
        multiply: typeof import("./utils").mat_multiply;
        negate: typeof import("./utils").negate;
        put: typeof import("./utils").put;
        scale: typeof import("./utils").scale;
        substract: typeof import("./utils").substract;
        toString: typeof import("./utils").toString;
        zero: typeof import("./utils").zero;
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
        shape: import("../types").Tuple2<number>;
        add: typeof import("./utils").add;
        clone: typeof import("./utils").clone;
        copy: typeof import("./utils").copy;
        get: typeof import("./utils").get;
        multiply: typeof import("./utils").mat_multiply;
        negate: typeof import("./utils").negate;
        put: typeof import("./utils").put;
        scale: typeof import("./utils").scale;
        substract: typeof import("./utils").substract;
        toString: typeof import("./utils").toString;
        zero: typeof import("./utils").zero;
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
export declare class Mat2 extends Mat2_base {
}
export {};
