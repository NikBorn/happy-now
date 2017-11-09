import favorites from '../../reducers/favorites.js';
import { mockFavLocationArray, mockAddFavObj } from '../../Utils/mockData.js';

describe('favorites-reducer', () => {
  it('should have a default state', () => {
    expect(favorites(undefined, {})).toEqual([]);
  });

  it('should add a favorite to state', () => {
    const action = {
      type: 'ADD_FAVORITE',
      location: mockAddFavObj
    };
    const expectation = [...mockFavLocationArray, mockAddFavObj];
    expect(favorites(mockFavLocationArray, action)).toEqual(expectation);
  });

  it('should remove a favorite from state', () => {
    const action = {
      type: 'REMOVE_FAVORITE',
      location: mockAddFavObj
    };
    const state = [...mockFavLocationArray, mockAddFavObj];
    const expectation = mockFavLocationArray;
    expect(favorites(state, action)).toEqual(expectation);
  });
  
});