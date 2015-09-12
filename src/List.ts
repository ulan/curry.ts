import {min} from './Prelude';

export function add<T>(xs : T[], ys : T[]) : T[] {
    return xs.concat(ys);
}
export function head<T>(xs : T[]) : T {
    return xs[0];
}
export function last<T>(xs : T[]) : T {
    return xs[xs.length - 1];
}
export function tail<T>(xs : T[]) : T[] {
    return xs.slice(1);
}
export function init<T>(xs : T[]) : T[] {
    return xs.slice(0, xs.length - 1);
}
export function map<A,B>(f : (x: A) => B, xs : A[]) : B[] {
    let result : B[] = new Array(xs.length);
    for (let i = 0; i < xs.length; i++) {
        result[i] = f(xs[i]);
    }
    return result;
}
export function reverse<T>(xs : T[]) : T[] {
    return xs.slice().reverse();
}
export function intersperse<T>(x : T, xs : T[]) : T[] {
    if (xs.length == 0) {
        return [];
    }
    let result : T[] = new Array(xs.length + xs.length - 1);
    for (let i = 0; i + 1 < xs.length; i++) {
        result[i + i] = xs[i];
        result[i + i + 1] = x;
    }
    result[result.length - 1] = xs[xs.length - 1];
    return result;
}
export function intercalate<T>(xs : T[], xss : T[][]) : T[] {
    return concat(intersperse(xs, xss));
}
export function foldl<A, B>(f : (acc : B, x : A) => B, initial : B, xs : A[]) : B {
    let result = initial;
    for (let i = 0; i < xs.length; i++) {
        result = f(result, xs[i]);
    }
    return result;
}
export function foldr<A, B>(f : (x : A, acc : B) => B, initial : B, xs : A[]) : B {
    let result = initial;
    for (let i = xs.length - 1; i >= 0; i--) {
        result = f(xs[i], result);
    }
    return result;
}
export function concat<T>(xss : T[][]) : T[] {
    let total = sum(map(xs => xs.length, xss));
    let result = new Array(total);
    let m = 0;
    for (let i = 0; i < xss.length; i++) {
        let xs = xss[i];
        for (let j = 0; j < xs.length; j++) {
            result[m++] = xs[j];
        }
    }
    return result;
}
export function sum(xs : number[]) : number {
    let result = 0;
    for (let i = 0; i < xs.length; i++) {
        result += xs[i];
    }
    return result;
}
export function product<T>(xs : number[]) : number {
    let result = 1;
    for (let i = 0; i < xs.length; i++) {
        result *= xs[i];
    }
    return result;
}
export function maximum<T>(xs : T[]) : T {
    let result = xs[0];
    for (let i = 1; i < xs.length; i++) {
        if (result < xs[i]) result = xs[i];
    }
    return result;
}
export function minimum<T>(xs : T[]) : T {
    let result = xs[0];
    for (let i = 1; i < xs.length; i++) {
        if (result > xs[i]) result = xs[i];
    }
    return result;
}
export function replicate<T>(n : number, x : T) : T[] {
    let result = new Array(n);
    for (let i = 0; i < result.length; i++) {
        result[i] = x;
    }
    return result;
}
export function take<T>(n : number, xs : T[]) : T[] {
    return xs.slice(0, n);
}
export function drop<T>(n : number, xs : T[]) : T[] {
    return xs.slice(n);
}
export function splitAt<T>(n : number, xs : T[]) : [T[], T[]] {
    return [take(n, xs), drop(n, xs)];
}
export function takeWhile<T>(f : (x : T) => boolean, xs : T[]) : T[] {
    for (let i = 0; i < xs.length; i++) {
        if (!f(xs[i])) {
            return xs.slice(0, i);
        }
    }
    return xs.slice();
}
export function dropWhile<T>(f : (x : T) => boolean, xs : T[]) : T[] {
    for (let i = 0; i < xs.length; i++) {
        if (!f(xs[i])) {
            return xs.slice(i);
        }
    }
    return [];
}
export function group<T>(xs : T[]) : T[][] {
    if (xs.length == 0) {
        return [];
    }
    let result : T[][] = [];
    let last = [xs[0]];
    for (let i = 1; i < xs.length; i++) {
        if (last[0] === xs[i]) {
            last.push(xs[i]);
        } else {
            result.push(last);
            last = [xs[i]];
        }
    }
    result.push(last);
    return result;
}
export function filter<T>(f : (x : T) => boolean, xs : T[]) : T[] {
    let result : T[] = [];
    for (let i = 0; i < xs.length; i++) {
        if (f(xs[i])) result.push(xs[i]);
    }
    return result;
}
export function zip<A, B>(xs : A[], ys : B[]) : [A, B][] {
    let n = min(xs.length, ys.length);
    let result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = [xs[i], ys[i]];
    }
    return result;
}
export function unzip<A,B>(xs : [A, B][]) : [A[], B[]] {
    let r1 = new Array(xs.length);
    let r2 = new Array(xs.length);
    for (let i = 0; i < xs.length; i++) {
        r1[i] = xs[i][0];
        r2[i] = xs[i][1];
    }
    return [r1, r2];
}
