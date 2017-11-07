import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { mockLocation, mockLocationFavorite } from '../../Utils/mockData.js';
import { 
  switchFavorite, switchExtended, handleClick } from '../../Utils/helper.js';


configure({ adapter: new Adapter() });

describe('helper functions', () => {

  it('should toggle location.isfavorite', () => {
    let selectedLocation = Object.assign({}, mockLocation);
    
    expect(selectedLocation.isFavorite).toEqual(false);
    switchFavorite(selectedLocation);
    expect(selectedLocation.isFavorite).toEqual(true);
    switchFavorite(selectedLocation);
    expect(selectedLocation.isFavorite).toEqual(false);
  });

  it('should toggle location.isExtended', () => {
    let selectedLocation = Object.assign({}, mockLocation);

    expect(selectedLocation.isExtended).toEqual(false);
    switchExtended(selectedLocation);
    expect(selectedLocation.isExtended).toEqual(true);
    switchExtended(selectedLocation);
    expect(selectedLocation.isExtended).toEqual(false);
  });

  // it('should call removeFavorie or addFavorite given a certain location', () => {
  //   let location = Object.assign({}, mockLocation)
  //   let addFavorite = jest.fn();
  //   let props = Object.assign({}, {addFavorite})
  //   console.log(typeof props.addFavorite)
  //   expect(location.isFavorite).toEqual(false)
  //   handleClick(location, props.addFavorite)
  //   expect(jest.fn().mock.calls.length).toBe(1)
  // });

});
