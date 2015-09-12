var chai = require('chai');
var Prelude_1 = require('../src/Prelude');
var expect = chai.expect;
describe('Prelude Tests', function () {
    it('should compute min', function () {
        expect(Prelude_1.min(10, 1)).to.equals(1);
    });
    it('should compute max', function () {
        expect(Prelude_1.max(10, 1)).to.equals(10);
    });
    it('should curry', function () {
        expect(Prelude_1.curry(function (x, y) { return x + y; })(1)(2)).to.equals(3);
    });
    it('should uncurry', function () {
        expect(Prelude_1.uncurry(function (x) { return function (y) { return x + y; }; })(1, 2)).to.equals(3);
    });
    it('should flip', function () {
        expect(Prelude_1.flip(function (x) { return function (y) { return x - y; }; })(1)(2)).to.equals(1);
    });
    it('should flip2', function () {
        expect(Prelude_1.flip2(function (x, y) { return x - y; })(1, 2)).to.equals(1);
    });
    it('should compose', function () {
        expect(Prelude_1.compose(function (x) { return 1 + x; }, function (x) { return -x; })(10)).to.equals(-9);
    });
});
