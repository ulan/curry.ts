var chai = require('chai');
var List = require('../src/List');
var Prelude_1 = require('../src/Prelude');
var expect = chai.expect;
describe('List Tests', function () {
    it('should add lists', function () {
        expect(List.add([1, 3], [2, 4])).to.deep.equal([1, 3, 2, 4]);
    });
    it('should get list head', function () {
        expect(List.head([1, 2, 3])).to.equals(1);
    });
    it('should get list last', function () {
        expect(List.last([1, 2, 3])).to.equals(3);
    });
    it('should get list init', function () {
        expect(List.init([1, 2, 3])).to.deep.equal([1, 2]);
    });
    it('should map', function () {
        expect(List.map(Prelude_1.constant(1), [1, , 3])).to.deep.equal([1, 1, 1]);
    });
    it('should intersperse', function () {
        expect(List.intersperse(0, [1, 2, 3])).to.deep.equal([1, 0, 2, 0, 3]);
    });
    it('should intercalate', function () {
        expect(List.intercalate([0], [[1], [2], [3]])).to.deep.equal([1, 0, 2, 0, 3]);
    });
    it('should fold left', function () {
        expect(List.foldl(function (acc, x) { return List.add(acc, [x]); }, [], [1, 2, 3])).to.deep.equal([1, 2, 3]);
    });
    it('should fold right', function () {
        expect(List.foldr(function (x, acc) { return List.add(acc, [x]); }, [], [1, 2, 3])).to.deep.equal([3, 2, 1]);
    });
    it('should concat', function () {
        expect(List.concat([[1], [2], [3]])).to.deep.equal([1, 2, 3]);
    });
    it('should sum', function () {
        expect(List.sum([1, 2, 3, 4])).to.equals(10);
    });
    it('should product', function () {
        expect(List.product([1, 2, 3, 4])).to.equals(24);
    });
    it('should minimum', function () {
        expect(List.minimum([1, 2, 3, 0, 4])).to.equals(0);
    });
    it('should maximum', function () {
        expect(List.maximum([1, 2, 3, 10, 4])).to.equals(10);
    });
    it('should take 2', function () {
        expect(List.take(2, [1, 2, 3])).to.deep.equal([1, 2]);
    });
    it('should drop 2', function () {
        expect(List.drop(2, [1, 2, 3])).to.deep.equal([3]);
    });
    it('should splitAt', function () {
        expect(List.splitAt(2, [1, 2, 3])).to.deep.equal([[1, 2], [3]]);
    });
    it('should dropWhile', function () {
        expect(List.dropWhile(function (x) { return x % 2 === 0; }, [2, 4, 3, 2, 1])).to.deep.equal([3, 2, 1]);
    });
    it('should takeWhile', function () {
        expect(List.takeWhile(function (x) { return x % 2 === 0; }, [2, 4, 3, 2, 1])).to.deep.equal([2, 4]);
    });
    it('should group', function () {
        expect(List.group([1, 1, 0, 0, 2, 3])).to.deep.equal([[1, 1], [0, 0], [2], [3]]);
    });
    it('should filter', function () {
        expect(List.filter(function (x) { return x % 2 === 0; }, [1, 1, 0, 0, 2, 3])).to.deep.equal([0, 0, 2]);
    });
    it('should zip', function () {
        expect(List.zip([1, 2], [3, 4])).to.deep.equal([[1, 3], [2, 4]]);
    });
    it('should unzip', function () {
        expect(List.unzip([[1, 3], [2, 4]])[0]).to.deep.equal([1, 2]);
        expect(List.unzip([[1, 3], [2, 4]])[1]).to.deep.equal([3, 4]);
    });
});
