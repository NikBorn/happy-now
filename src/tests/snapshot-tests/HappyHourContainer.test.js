import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import HappyHourContainer from 
  '../../Components/HappyHourContainer/HappyHourContainer.js';
import { mockHappyHourInfo } from '../../Utils/mockData.js';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('HappyHourContainer', () => {
  it('should match the snapshot everytime', () => {
 
    const wrapper = shallow(
      <HappyHourContainer locations={mockHappyHourInfo} />);
    
    expect(wrapper).toMatchSnapshot();
  });
});


