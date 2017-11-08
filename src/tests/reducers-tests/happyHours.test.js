import happyHours from '../../reducers/happyHours.js';
import { mockFavLocationArray } from '../../Utils/mockData.js';

describe('happyHours reducer', () => {
  it('should have a default state', () => {
    expect(happyHours(undefined, {})).toEqual([]);
  });

  it('should set happyHourData to State', () => {
    const action = {
      type: 'SET_HAPPY_HOURS',
      happyHours: mockFavLocationArray
    }
    const expectation = mockFavLocationArray;
    expect(happyHours(undefined, action)).toEqual(expectation)
  })
});