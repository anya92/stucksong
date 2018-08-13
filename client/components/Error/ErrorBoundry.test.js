import React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundry from './ErrorBoundry';

describe('ErrorBoundry component', () => {
  let wrapper;
  beforeEach(() => {
    const children = <div />;
    wrapper = shallow(<ErrorBoundry children={children} />);
  });

  it('renders correctly if there is no error', () => {
    expect(wrapper.state().hasError).toBe(false);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly if there is an error', () => {
    wrapper.setState({ hasError: true, error: 'Request failed' });
    expect(wrapper).toMatchSnapshot();
  });
});
