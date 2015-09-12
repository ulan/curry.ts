import chai = require('chai');

import {min, max, curry, uncurry, flip, flip2, compose} from '../src/Prelude';

var expect = chai.expect;

describe('Prelude Tests', () => {
    it('should compute min', () => {
      expect(min(10, 1)).to.equals(1);
    });
    it('should compute max', () => {
      expect(max(10, 1)).to.equals(10);
    });
    it('should curry', () => {
      expect(curry((x : number, y : number) => x + y)(1)(2)).to.equals(3);
    });
    it('should uncurry', () => {
      expect(uncurry((x : number) => (y : number) => x + y)(1, 2)).to.equals(3);
    });
    it('should flip', () => {
      expect(flip((x : number) => (y : number) => x - y)(1)(2)).to.equals(1);
    });
    it('should flip2', () => {
      expect(flip2((x : number, y : number) => x - y)(1, 2)).to.equals(1);
    });
    it('should compose', () => {
      expect(compose((x : number) => 1 + x, (x : number) => -x)(10)).to.equals(-9);
    });
});
