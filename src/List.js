var Prelude_1 = require('./Prelude');
function add(xs, ys) {
    return xs.concat(ys);
}
exports.add = add;
function head(xs) {
    return xs[0];
}
exports.head = head;
function last(xs) {
    return xs[xs.length - 1];
}
exports.last = last;
function tail(xs) {
    return xs.slice(1);
}
exports.tail = tail;
function init(xs) {
    return xs.slice(0, xs.length - 1);
}
exports.init = init;
function map(f, xs) {
    var result = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        result[i] = f(xs[i]);
    }
    return result;
}
exports.map = map;
function reverse(xs) {
    return xs.slice().reverse();
}
exports.reverse = reverse;
function intersperse(x, xs) {
    if (xs.length == 0) {
        return [];
    }
    var result = new Array(xs.length + xs.length - 1);
    for (var i = 0; i + 1 < xs.length; i++) {
        result[i + i] = xs[i];
        result[i + i + 1] = x;
    }
    result[result.length - 1] = xs[xs.length - 1];
    return result;
}
exports.intersperse = intersperse;
function intercalate(xs, xss) {
    return concat(intersperse(xs, xss));
}
exports.intercalate = intercalate;
function foldl(f, initial, xs) {
    var result = initial;
    for (var i = 0; i < xs.length; i++) {
        result = f(result, xs[i]);
    }
    return result;
}
exports.foldl = foldl;
function foldr(f, initial, xs) {
    var result = initial;
    for (var i = xs.length - 1; i >= 0; i--) {
        result = f(xs[i], result);
    }
    return result;
}
exports.foldr = foldr;
function concat(xss) {
    var total = sum(map(function (xs) { return xs.length; }, xss));
    var result = new Array(total);
    var m = 0;
    for (var i = 0; i < xss.length; i++) {
        var xs = xss[i];
        for (var j = 0; j < xs.length; j++) {
            result[m++] = xs[j];
        }
    }
    return result;
}
exports.concat = concat;
function sum(xs) {
    var result = 0;
    for (var i = 0; i < xs.length; i++) {
        result += xs[i];
    }
    return result;
}
exports.sum = sum;
function product(xs) {
    var result = 1;
    for (var i = 0; i < xs.length; i++) {
        result *= xs[i];
    }
    return result;
}
exports.product = product;
function sort(xs, compare) {
    return copy(xs).sort(compare);
}
exports.sort = sort;
function sortInPlace(xs, compare) {
    xs.sort(compare);
    return xs;
}
exports.sortInPlace = sortInPlace;
function maximumInRange(xs, s, e) {
    var result = xs[s];
    for (var i = s + 1; i <= e; i++) {
        if (result < xs[i])
            result = xs[i];
    }
    return result;
}
exports.maximumInRange = maximumInRange;
function maximum(xs) {
    return maximumInRange(xs, 0, xs.length - 1);
}
exports.maximum = maximum;
function maximumInRangeWith(xs, s, e, f) {
    var result = f(xs[s]);
    for (var i = s + 1; i <= e; i++) {
        var candidate = f(xs[i]);
        if (result < candidate)
            result = candidate;
    }
    return result;
}
exports.maximumInRangeWith = maximumInRangeWith;
function maximumWith(xs, f) {
    return maximumInRangeWith(xs, 0, xs.length - 1, f);
}
exports.maximumWith = maximumWith;
function minimumInRange(xs, s, e) {
    var result = xs[s];
    for (var i = s + 1; i <= e; i++) {
        if (result > xs[i])
            result = xs[i];
    }
    return result;
}
exports.minimumInRange = minimumInRange;
function minimum(xs) {
    return minimumInRange(xs, 0, xs.length - 1);
}
exports.minimum = minimum;
function minimumInRangeWith(xs, s, e, f) {
    var result = f(xs[s]);
    for (var i = s + 1; i <= e; i++) {
        var candidate = f(xs[i]);
        if (result > candidate)
            result = candidate;
    }
    return result;
}
exports.minimumInRangeWith = minimumInRangeWith;
function minimumWith(xs, f) {
    return minimumInRangeWith(xs, 0, xs.length - 1, f);
}
exports.minimumWith = minimumWith;
function replicate(n, x) {
    var result = new Array(n);
    for (var i = 0; i < result.length; i++) {
        result[i] = x;
    }
    return result;
}
exports.replicate = replicate;
function take(n, xs) {
    return xs.slice(0, n);
}
exports.take = take;
function drop(n, xs) {
    return xs.slice(n);
}
exports.drop = drop;
function splitAt(n, xs) {
    return [take(n, xs), drop(n, xs)];
}
exports.splitAt = splitAt;
function takeWhile(f, xs) {
    for (var i = 0; i < xs.length; i++) {
        if (!f(xs[i])) {
            return xs.slice(0, i);
        }
    }
    return xs.slice();
}
exports.takeWhile = takeWhile;
function dropWhile(f, xs) {
    for (var i = 0; i < xs.length; i++) {
        if (!f(xs[i])) {
            return xs.slice(i);
        }
    }
    return [];
}
exports.dropWhile = dropWhile;
function group(xs) {
    if (xs.length == 0)
        return [];
    var result = [];
    var last = [xs[0]];
    for (var i = 1; i < xs.length; i++) {
        if (last[0] === xs[i]) {
            last.push(xs[i]);
        }
        else {
            result.push(last);
            last = [xs[i]];
        }
    }
    result.push(last);
    return result;
}
exports.group = group;
function nub(xs) {
    if (xs.length == 0)
        return [];
    var result = [];
    result.push(xs[0]);
    for (var i = 1; i < xs.length; i++) {
        if (xs[i] !== xs[i - 1]) {
            result.push(xs[i]);
        }
    }
    return result;
}
exports.nub = nub;
function filter(f, xs) {
    var result = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i]))
            result.push(xs[i]);
    }
    return result;
}
exports.filter = filter;
function zip(xs, ys) {
    var n = Prelude_1.min(xs.length, ys.length);
    var result = new Array(n);
    for (var i = 0; i < n; i++) {
        result[i] = [xs[i], ys[i]];
    }
    return result;
}
exports.zip = zip;
function unzip(xs) {
    var r1 = new Array(xs.length);
    var r2 = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        r1[i] = xs[i][0];
        r2[i] = xs[i][1];
    }
    return [r1, r2];
}
exports.unzip = unzip;
function range(from, to) {
    var result = Array(to - from + 1);
    for (var i = from; i <= to; i++) {
        result[i - from] = i;
    }
    return result;
}
exports.range = range;
function copy(xs) {
    return xs.slice(0);
}
exports.copy = copy;
function apply_permutation(p, xs) {
    var n = xs.length;
    var result = new Array(n);
    for (var i = 0; i < n; i++) {
        result[i] = xs[p[i]];
    }
    return result;
}
exports.apply_permutation = apply_permutation;
function next_permutation(p) {
    var n = p.length;
    if (n < 2)
        return null;
    var r = copy(p);
    var k = n - 2;
    for (; k >= 0 && r[k] >= r[k + 1]; k--)
        ;
    if (k < 0)
        return null;
    for (var i = k + 1, j = n - 1; i < j; i++, j--) {
        var t_1 = r[i];
        r[i] = r[j];
        r[j] = t_1;
    }
    var next = k + 1;
    for (; r[next] <= r[k]; next++)
        ;
    var t = r[k];
    r[k] = r[next];
    r[next] = t;
    return r;
}
exports.next_permutation = next_permutation;
function create(n, value) {
    return replicate(n, value);
}
exports.create = create;
function createWith(n, f) {
    var result = new Array(n);
    for (var i = 0; i < n; i++) {
        result[i] = f(i);
    }
    return result;
}
exports.createWith = createWith;
function create2D(n1, n2, value) {
    return map(function (_) { return replicate(n2, value); }, replicate(n1, 0));
}
exports.create2D = create2D;
function create2DWith(n1, n2, f) {
    var result = new Array(n1);
    for (var i = 0; i < n1; i++) {
        result[i] = new Array(n2);
        for (var j = 0; j < n2; j++) {
            result[i][j] = f(i, j);
        }
    }
    return result;
}
exports.create2DWith = create2DWith;
