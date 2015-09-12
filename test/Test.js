var chai = require('chai');
var List = require('../src/List');
var expect = chai.expect;
describe('List Tests', function () {
    it('should add lists', function () {
        expect(List.add([1, 3], [2, 4])).to.deep.equal([1, 3, 2, 4]);
    });
});
