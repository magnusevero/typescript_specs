import { calculator } from './calculator';
import { expect } from 'chai';
import 'mocha';

describe('Miniräknare', () => {
  var calc = new calculator();
  it('ska returnera 7 när man kör add på 2 och 5', () => {
    expect(calc.add(2, 5)).to.equal(7);
  });

  it('ska returnera 3 när man tar 6 minus 3', () => {
    expect(calc.subtract(6, 3)).to.equal(3);
  });

  it('ska returnera 12 när man tar 3 gånger 4', () => {
    expect(calc.multiply(3, 4)).to.equal(12);
  });

  it('ska returnera 2 när man tar 4 delat med 2', () => {
    expect(calc.divide(4, 2)).to.equal(2);
  });
});