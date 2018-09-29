import { calculator } from './calculator';
import { expect } from 'chai';
import 'mocha';


describe('Calculator add', () => {
  var calc = new calculator();
  it('should return 7 when adding 2 and 5', () => {
    const result = calc.add(2, 5);
    expect(result).to.equal(7);
  });
});