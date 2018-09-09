import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

describe('App component', () => {
  let wrapper;
  let fetchUser;
  beforeEach(() => {
    fetchUser = jest.fn();
    const mockProps = {
      auth: null,
      fetchUser,
    };
    wrapper = shallow(<App {...mockProps} />);
  });

  it('calls fetchUser in componentDidMount', () => {
    // wrapper.instance().componentDidMount();
    expect(fetchUser).toHaveBeenCalled();
  });

  it('renders correctly', () => {
    wrapper.setProps({ auth: true });
    expect(wrapper).toMatchSnapshot();
  });
});
