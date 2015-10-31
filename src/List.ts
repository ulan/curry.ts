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
export function sort<T>(xs : T[], compare : (a : T, b : T) => number) : T[] {
    return copy(xs).sort(compare);
}
export function sortInPlace<T>(xs : T[], compare : (a : T, b : T) => number) : T[] {
    xs.sort(compare);
    return xs;
}
export function maximumInRange<T>(xs : T[], s : number, e : number) : T {
    let result = xs[s];
    for (let i = s + 1; i <= e; i++) {
        if (result < xs[i]) result = xs[i];
    }
    return result;
}
export function maximum<T>(xs : T[]) : T {
    return maximumInRange(xs, 0, xs.length - 1);
}
export function maximumInRangeWith<T, R>(xs : T[], s : number, e : number, f : (x : T) => R) : R {
    let result = f(xs[s]);
    for (let i = s + 1; i <= e; i++) {
        let candidate = f(xs[i]);
        if (result < candidate) result = candidate;
    }
    return result;
}
export function maximumWith<T, R>(xs : T[], f : (x : T) => R) : R {
    return maximumInRangeWith(xs, 0, xs.length - 1, f);
}
export function minimumInRange<T>(xs : T[], s : number, e : number) : T {
    let result = xs[s];
    for (let i = s + 1; i <= e; i++) {
        if (result > xs[i]) result = xs[i];
    }
    return result;
}
export function minimum<T>(xs : T[]) : T {
    return minimumInRange(xs, 0, xs.length - 1);
}
export function minimumInRangeWith<T, R>(xs : T[], s : number, e : number, f : (x : T) => R) : R {
    let result = f(xs[s]);
    for (let i = s + 1; i <= e; i++) {
        let candidate = f(xs[i]);
        if (result > candidate) result = candidate;
    }
    return result;
}
export function minimumWith<T, R>(xs : T[], f : (x : T) => R) : R {
    return minimumInRangeWith(xs, 0, xs.length - 1, f);
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
    if (xs.length == 0) return [];
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
export function nub<T>(xs : T[]) : T[] {
    if (xs.length == 0) return [];
    let result : T[]= [];
    result.push(xs[0]);
    for (let i = 1; i < xs.length; i++) {
        if (xs[i] !== xs[i - 1]) {
            result.push(xs[i]);
        }
    }
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
export function range(from : number, to : number) : number[] {
    let result = Array(to - from + 1);
    for (let i = from; i <= to; i++) {
        result[i - from] = i;
    }
    return result;
}
export function copy<A>(xs : A[]) : A[] {
    return xs.slice(0);
}
export function apply_permutation<A>(p : number[], xs : A[]) : A[] {
    let n = xs.length;
    let result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = xs[p[i]];
    }
    return result;
}
export function next_permutation(p : number[]) : number[] {
    let n = p.length;
    if (n < 2) return null;
    let r = copy(p);
    let k = n - 2;
    for (; k >= 0 && r[k] >= r[k + 1]; k--);
    if (k < 0) return null;
    // r[k] < r[k + 1]
    for (let i = k + 1, j = n - 1; i < j; i++, j--) {
        let t = r[i];
        r[i] = r[j];
        r[j] = t;
    }
    let next = k + 1;
    for (; r[next] <= r[k]; next++);
    // r[k] < r[next].
    let t = r[k];
    r[k] = r[next];
    r[next] = t;
    return r;
}
export function create<T>(n : number, value : T) : T[] {
    return replicate(n, value);
}
export function createWith<T>(n : number, f : (i : number) => T) : T[]{
    let result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = f(i);
    }
    return result;
}
export function create2D<T>(n1 : number, n2 : number, value : T) : T[][] {
    return map(_ => replicate(n2, value), replicate(n1, 0));
}
export function create2DWith<T>(n1 : number, n2 : number, f : (i : number, j : number) => T) : T[][]{
    let result = new Array(n1);
    for (let i = 0; i < n1; i++) {
        result[i] = new Array(n2);
        for (let j = 0; j < n2; j++) {
            result[i][j] = f(i, j);
        }
    }
    return result;
}
