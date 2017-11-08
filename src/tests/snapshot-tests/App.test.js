import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import App from '../../Components/App/App.js';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';


configure({ adapter: new Adapter() });

describe('App', () => {
  const mockStore = configureStore();
  const initialState = {
    locations: [],
    userLocation: {},
    activeUser: null,
    count: 10,
    favorites: []
  };
  const store = mockStore(initialState);
  let wrapper = shallow(<App store={store} />);

  it('should match the snapshot exactly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});