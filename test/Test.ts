import chai = require('chai');

import * as List from '../src/List';

var expect = chai.expect;

describe('List Tests', () => {
    it('should add lists', () => {
      expect(List.add([1,3], [2,4])).to.equals([1,3,2,4]);
    });
});
