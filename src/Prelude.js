function min(a, b) {
    return a < b ? a : b;
}
exports.min = min;
function max(a, b) {
    return a < b ? b : a;
}
exports.max = max;
function curry(f) {
    return function (x) { return function (y) { return f(x, y); }; };
}
exports.curry = curry;
function uncurry(f) {
    return function (x, y) { return f(x)(y); };
}
exports.uncurry = uncurry;
function id(x) {
    return x;
}
exports.id = id;
function constant(x) {
    return function (_) { return x; };
}
exports.constant = constant;
function flip(f) {
    return function (y) { return function (x) { return f(x)(y); }; };
}
exports.flip = flip;
function flip2(f) {
    return function (y, x) { return f(x, y); };
}
exports.flip2 = flip2;
function compose(g, f) {
    return function (x) { return g(f(x)); };
}
exports.compose = compose;
