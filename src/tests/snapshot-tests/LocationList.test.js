import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import LocationList from '../../Components/LocationList/LocationList.js';
import Adapter from 'enzyme-adapter-react-16';
import { mockLocation, mockLocationsResponse } from '../../Utils/mockData.js';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

describe('LocationList', () => {
  const mockStore = configureStore();
  const stateLocations = mockLocationsResponse;
  const initialState = {
    locations: stateLocations,
    userLocation: {},
    activeUser: null,
    count: 10,
    favorites: []
  };
  const store = mockStore(initialState);
  const wrapper = shallow(
    <LocationList store={store} locations={stateLocations} />);

  it('shold always match the Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});