import React from 'react';
import { shallow } from 'enzyme';

import NoData from './NoData';

describe('NoData component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NoData />);
    expect(wrapper).toMatchSnapshot();
  });
});
