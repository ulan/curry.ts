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
});
