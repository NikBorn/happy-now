import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import locations from '../../reducers/locations.js';
import { mockLocationsResponse, mockFavLocationArray, mockFavoriteObj } from '../../Utils/mockData.js';


describe('locations reducer', () => {
  it('should have a default state', () => {
    const expectation = [];

    expect(locations(undefined, {})).toEqual(expectation)
  })

  it('should return an array with an object that has an updated isFav property', () => {
    const expectation = mockFavLocationArray;
    const currentState = mockLocationsResponse;
    const action = { type: 'TOGGLE_FAVORITE', location: mockFavoriteObj };

    expect(locations(currentState, action)).toEqual(expectation)
  })



})

