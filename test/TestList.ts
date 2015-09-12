import chai = require('chai');

import * as List from '../src/List';
import {constant} from '../src/Prelude';

var expect = chai.expect;

describe('List Tests', () => {
    it('should add lists', () => {
      expect(List.add([1, 3], [2, 4])).to.deep.equal([1, 3, 2, 4]);
    });
    it('should get list head', () => {
      expect(List.head([1, 2, 3])).to.equals(1);
    });
    it('should get list last', () => {
      expect(List.last([1, 2, 3])).to.equals(3);
    });
    it('should get list init', () => {
      expect(List.init([1, 2, 3])).to.deep.equal([1, 2]);
    });
    it('should map', () => {
      expect(List.map(constant(1), [1, , 3])).to.deep.equal([1, 1, 1]);
    });
    it('should intersperse', () => {
      expect(List.intersperse(0, [1, 2, 3])).to.deep.equal([1, 0, 2, 0, 3]);
    });
    it('should intercalate', () => {
      expect(List.intercalate([0], [[1], [2], [3]])).to.deep.equal([1, 0, 2, 0, 3]);
    });
});
