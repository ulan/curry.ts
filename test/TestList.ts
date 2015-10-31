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
    it('should fold left', () => {
      expect(List.foldl((acc, x) => List.add(acc, [x]), [], [1, 2, 3])).to.deep.equal([1, 2, 3]);
    });
    it('should fold right', () => {
      expect(List.foldr((x, acc) => List.add(acc, [x]), [], [1, 2, 3])).to.deep.equal([3, 2, 1]);
    });
    it('should concat', () => {
      expect(List.concat([[1], [2], [3]])).to.deep.equal([1, 2, 3]);
    });
    it('should sum', () => {
      expect(List.sum([1, 2, 3, 4])).to.equals(10);
    });
    it('should product', () => {
      expect(List.product([1, 2, 3, 4])).to.equals(24);
    });
    it('should minimum', () => {
      expect(List.minimum([1, 2, 3, 0, 4])).to.equals(0);
    });
    it('should maximum', () => {
      expect(List.maximum([1, 2, 3, 10, 4])).to.equals(10);
    });
    it('should take 2', () => {
      expect(List.take(2, [1, 2, 3])).to.deep.equal([1, 2]);
    });
    it('should drop 2', () => {
      expect(List.drop(2, [1, 2, 3])).to.deep.equal([3]);
    });
    it('should splitAt', () => {
      expect(List.splitAt(2, [1, 2, 3])).to.deep.equal([[1, 2], [3]]);
    });
    it('should dropWhile', () => {
      expect(List.dropWhile(x => x % 2 === 0, [2, 4, 3, 2, 1])).to.deep.equal([3, 2, 1]);
    });
    it('should takeWhile', () => {
      expect(List.takeWhile(x => x % 2 === 0, [2, 4, 3, 2, 1])).to.deep.equal([2, 4]);
    });
    it('should group', () => {
      expect(List.group([1, 1, 0, 0, 2, 3])).to.deep.equal([[1, 1], [0, 0], [2], [3]]);
    });
    it('should filter', () => {
      expect(List.filter(x => x % 2 === 0, [1, 1, 0, 0, 2, 3])).to.deep.equal([0, 0, 2]);
    });
    it('should zip', () => {
      expect(List.zip([1, 2], [3, 4])).to.deep.equal([[1, 3], [2, 4]]);
    });
    it('should unzip', () => {
      expect(List.unzip([[1, 3], [2, 4]])[0]).to.deep.equal([1, 2]);
      expect(List.unzip([[1, 3], [2, 4]])[1]).to.deep.equal([3, 4]);
    });
    it('should permute 2', () => {
      expect(List.next_permutation([1, 2])).to.deep.equal([2, 1]);
      expect(List.next_permutation([2, 1])).to.equals(null);
    });
    it('should permute 3', () => {
      expect(List.next_permutation([1, 2, 3])).to.deep.equal([1, 3, 2]);
      expect(List.next_permutation([1, 3, 2])).to.deep.equal([2, 1, 3]);
      expect(List.next_permutation([2, 1, 3])).to.deep.equal([2, 3, 1]);
      expect(List.next_permutation([2, 3, 1])).to.deep.equal([3, 1, 2]);
      expect(List.next_permutation([3, 1, 2])).to.deep.equal([3, 2, 1]);
      expect(List.next_permutation([3, 2, 1])).to.equals(null);
    });
});
