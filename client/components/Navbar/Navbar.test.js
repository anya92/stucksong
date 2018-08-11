import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';

import Navbar from './Navbar';

describe('Navbar component', () => {
  it('renders Navbar without auth correctly', () => {
    const auth = false;
    const wrapper = shallow(<Navbar auth={auth} />);
    expect(wrapper).toMatchSnapshot();
  });

  let wrapper;
  let auth;
  beforeEach(() => {
    auth = {
      username: 'user1',
    };
    wrapper = shallow(<Navbar auth={auth} />);
  });

  it('renders Navbar with auth correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('opens and closes mobile navbar on mobile menu click', () => {
    expect(wrapper.state()).toEqual({ open: false });
    wrapper.find('.mobile-menu').simulate('click');
    expect(wrapper.state()).toEqual({ open: true });
    wrapper.find('.mobile-menu').simulate('click');
    expect(wrapper.state()).toEqual({ open: false });
  });

  it('closes mobile navbar on link click', () => {
    wrapper.find('.mobile-menu').simulate('click');
    expect(wrapper.state()).toEqual({ open: true });
    wrapper.find(NavLink).first().simulate('click');
    expect(wrapper.state()).toEqual({ open: false });
  });

  it('contains a logout link', () => {
    expect(wrapper.find('a').props().href).toBe('/auth/logout');
    expect(wrapper.find('a').text()).toBe('logout');
  });
});
