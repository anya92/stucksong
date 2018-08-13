import React from 'react';
import { shallow } from 'enzyme';

import ErrorComponent from './ErrorComponent';

describe('ErrorComponent', () => {
  it('renders Error Component correctly', () => {
    const error = 'Request failed';
    const wrapper = shallow(<ErrorComponent error={error} />);
    expect(wrapper).toMatchSnapshot();
  });
});
