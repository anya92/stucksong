import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import requireAuthentication from './require_authentication';

describe('requireAuthentication higher order component', () => {
  let mockStore;
  let history;
  let MockComponent;
  let WrapperComponent;

  beforeEach(() => {
    mockStore = configureStore([thunk]);
    history = {
      push: jest.fn(),
    };
    MockComponent = () => (
      <div>Component</div>
    );
    WrapperComponent = requireAuthentication(MockComponent);
  });

  it('redirects to / if user is not logged in', () => {
    const store = mockStore({ auth: false });
    shallow(<WrapperComponent history={history} />, {
      context: { store },
    }).dive();
    expect(history.push).toHaveBeenCalledWith('/');
  });

  it('renders wrapped component if user is logged in', () => {
    const store = mockStore({ auth: true });
    const wrapper = shallow(<WrapperComponent history={history} />, {
      context: { store },
    }).dive();
    expect(history.push).not.toHaveBeenCalled();
    expect(wrapper.find(MockComponent)).toHaveLength(1);
  });
});
