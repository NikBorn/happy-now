import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Header from '../Components/Header/Header.js';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

describe('Header', () => {

  let wrapper = shallow(<Header/>)

  it('should create an instance of a card', () => {
    expect(wrapper).toMatchSnapshot();
  });

})