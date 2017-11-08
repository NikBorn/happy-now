import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import HappyHourCard from '../../Components/HappyHourCard/HappyHourCard.js';
import Adapter from 'enzyme-adapter-react-16';
import { mockHappyHourInfo } from '../../Utils/mockData.js';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

describe('HappyHourCard', () => {

  const wrapper = shallow(
    <HappyHourCard key='12' happyHourInfo={ mockHappyHourInfo[0] } />);

  it('should always match the Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

