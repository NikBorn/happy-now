import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Header from '../../Components/Header/Header.js';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';


configure({ adapter: new Adapter() });

describe('Header', () => {
  const mockStore = configureStore();
  const initialState = {
    locations: [],
    userLocation: {},
    activeUser: null,
    count: 10,
    favorites: []
  };
  const store = mockStore(initialState);
  let wrapper = shallow(<Header store={store}/>);

  it('should create an instance of a card', () => {
    expect(wrapper).toMatchSnapshot();
  });

});