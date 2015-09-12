export declare function add<T>(xs: T[], ys: T[]): T[];
export declare function head<T>(xs: T[]): T;
export declare function last<T>(xs: T[]): T;
export declare function tail<T>(xs: T[]): T[];
export declare function init<T>(xs: T[]): T[];
export declare function map<A, B>(f: (x: A) => B, xs: A[]): B[];
export declare function reverse<T>(xs: T[]): T[];
export declare function intersperse<T>(x: T, xs: T[]): T[];
export declare function intercalate<T>(xs: T[], xss: T[][]): T[];
export declare function foldl<A, B>(f: (acc: B, x: A) => B, initial: B, xs: A[]): B;
export declare function foldr<A, B>(f: (x: A, acc: B) => B, initial: B, xs: A[]): B;
export declare function concat<T>(xss: T[][]): T[];
export declare function sum(xs: number[]): number;
export declare function product<T>(xs: number[]): number;
export declare function maximum<T>(xs: T[]): T;
export declare function minimum<T>(xs: T[]): T;
export declare function replicate<T>(n: number, x: T): T[];
export declare function take<T>(n: number, xs: T[]): T[];
export declare function drop<T>(n: number, xs: T[]): T[];
export declare function splitAt<T>(n: number, xs: T[]): [T[], T[]];
export declare function takeWhile<T>(f: (x: T) => boolean, xs: T[]): T[];
export declare function dropWhile<T>(f: (x: T) => boolean, xs: T[]): T[];
export declare function group<T>(xs: T[]): T[][];
export declare function filter<T>(f: (x: T) => boolean, xs: T[]): T[];
export declare function zip<A, B>(xs: A[], ys: B[]): [A, B][];
export declare function unzip<A, B>(xs: [A, B][]): [A[], B[]];