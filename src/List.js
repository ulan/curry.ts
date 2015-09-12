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
function maximum(xs) {
    var result = xs[0];
    for (var i = 1; i < xs.length; i++) {
        if (result < xs[i])
            result = xs[i];
    }
    return result;
}
exports.maximum = maximum;
function minimum(xs) {
    var result = xs[0];
    for (var i = 1; i < xs.length; i++) {
        if (result > xs[i])
            result = xs[i];
    }
    return result;
}
exports.minimum = minimum;
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
    if (xs.length == 0) {
        return [];
    }
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
function filter(f, xs) {
    var result = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i]))
            result.push(xs[i]);
    }
    return result;
}
exports.filter = filter;
function min(a, b) {
    return a < b ? a : b;
}
function zip(xs, ys) {
    var n = min(xs.length, ys.length);
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
