import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import ShowMoreButton from '../Components/ShowMoreButton/ShowMoreButton.js';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';


configure({ adapter: new Adapter() });


describe('ShowMoreButton', () => {
  const mockStore = configureStore();
  const initialState = {
    locations: [],
    userLocation: {},
    activeUser: null,
    count: 10,
    favorites: []
  };
  const store = mockStore(initialState);
  const wrapper = shallow(<ShowMoreButton store={store} />);
  
  it('should always match the Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});