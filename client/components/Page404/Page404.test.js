import React from 'react';
import { shallow } from 'enzyme';

import Page404 from './Page404';

describe('Page404 component', () => {
  it('renders Page404 component correctly', () => {
    const wrapper = shallow(<Page404 />);
    expect(wrapper).toMatchSnapshot();
  });
});
