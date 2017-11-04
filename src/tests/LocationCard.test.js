import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import LocationCard from '../Components/LocationCard/LocationCard.js';
import Adapter from 'enzyme-adapter-react-16';
import { MockLocation } from '../Utils/mockData.js';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

describe('LocationCard', () => {
  const mockStore = configureStore();
  const initialState = {
    locations: [],
    userLocation: {},
    activeUser: null,
    count: 10,
    favorites: []
  };
  const store = mockStore(initialState);
  const locationInfo = MockLocation;
  const wrapper = shallow(
    <LocationCard store={store} 
      key={locationInfo.id} 
      locationInfo={locationInfo} />);

  it('should always match the Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});