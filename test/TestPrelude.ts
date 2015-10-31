import chai = require('chai');

import {min, max, curry, uncurry, flip, flip2, compose, gcd} from '../src/Prelude';

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
    it('should gcd', () => {
      expect(gcd(10, 3)).to.equals(1);
      expect(gcd(10, 10)).to.equals(10);
      expect(gcd(3, 6)).to.equals(3);
      expect(gcd(4, 6)).to.equals(2);
      expect(gcd(548399024, 274199512)).to.equals(274199512);
      expect(gcd(274199512, 274199512)).to.equals(274199512);
      expect(gcd(822598536, 274199512)).to.equals(274199512);
      expect(gcd(822598536, 548399024)).to.equals(274199512);
    });
});
