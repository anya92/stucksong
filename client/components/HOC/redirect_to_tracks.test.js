import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import redirectToTracks from './redirect_to_tracks';

describe('redirectToTracks higher order component', () => {
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
    WrapperComponent = redirectToTracks(MockComponent);
  });

  it('redirects to top-tracks if user is logged in', () => {
    const store = mockStore({ auth: true });
    shallow(<WrapperComponent history={history} />, {
      context: { store },
    }).dive();
    expect(history.push).toHaveBeenCalledWith('/top-tracks');
  });

  it('renders wrapped component if user is not logged in', () => {
    const store = mockStore({ auth: false });
    const wrapper = shallow(<WrapperComponent history={history} />, {
      context: { store },
    }).dive();
    expect(history.push).not.toHaveBeenCalled();
    expect(wrapper.find(MockComponent)).toHaveLength(1);
  });
});
