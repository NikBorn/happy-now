import count from '../../reducers/count.js';

describe('count reducer', () => {

  it('should return a default state of 10', () => {
    const expectation = 10;
    expect(count(undefined, {})).toEqual(expectation);
  });

  it('should increase count by a measure of 10', () => {
    const expectation = 20;
    expect(count(undefined, { type:'INCREASE_COUNT'})).toEqual(expectation);
  })

});