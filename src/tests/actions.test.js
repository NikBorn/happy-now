import { 
  mockLocation, 
  mockUser,
  mockLocationsResponse } from '../Utils/mockData.js';
import { 
  setLocations, 
  toggleFavorite, 
  setActiveuser, 
  increaseCount, 
  addFavorite,
  removeFavorite, 
  toggleShowFavorites, 
  toggleExtended, 
  sendHappyHoursToState } from '../actions/index.js';

describe('actions', () => {
  it('setLocations should return an object with a type and a' + 
  'payload of locations give an array of locations', () => {
    const expectation = {
      type: 'SET_LOCATIONS',
      locations: mockLocationsResponse
    };

    expect(setLocations(mockLocationsResponse)).toEqual(expectation);
  });

  it('toggleFavorite should return an object' + 
  'with a type and a payload of locaiton', () => {
    const expectation = {
      type: 'TOGGLE_FAVORITE',
      location: mockLocation
    };

    expect(toggleFavorite(mockLocation)).toEqual(expectation);
  });

  it('setActiveuser should returna an object with a' + 
  'type and a payload of user', () => {
    const expectation = {
      type: 'SET_ACTIVE_USER',
      user: mockUser
    };

    expect(setActiveuser(mockUser)).toEqual(expectation);
  });

  it('increaseCount should return an object with a type', () => {
    const expectation = {
      type: 'INCREASE_COUNT'
    };

    expect(increaseCount()).toEqual(expectation);
  });

  it('addFavorite should return an object with a type' + 
  'and a payload of location', () => {
    const expectation = {
      type: 'ADD_FAVORITE',
      location: mockLocation
    };

    expect(addFavorite(mockLocation)).toEqual(expectation);
  });

  it('removeFavorite should return an object with a type' + 
  'and a payload of location', () => {
    const expectation = {
      type: 'REMOVE_FAVORITE',
      location: mockLocation
    };

    expect(removeFavorite(mockLocation)).toEqual(expectation);
  });

  it('toggleShowFavorites should return an object with a type' + 
  'and a payload of bool', () => {
    const expectation = {
      type: 'TOGGLE_SHOW_FAVORITES',
      bool: true
    };

    expect(toggleShowFavorites(true)).toEqual(expectation);
  });

  it('toggleExtended should return an object with a type' + 
  'and a payload of object', () => {
    const expectation = {
      type: 'TOGGLE_EXTENDED_CARD',
      location: mockLocation
    };

    expect(toggleExtended(mockLocation)).toEqual(expectation)
  });

  it('sendHappyHoursToState should return an object with a type' + 
  'and a payload of happyHours', () => {
    const expectation = {
      type: 'SET_HAPPY_HOURS',
      happyHours: mockLocationsResponse
    };

    expect(sendHappyHoursToState(mockLocationsResponse)).toEqual(expectation);
  });

});


