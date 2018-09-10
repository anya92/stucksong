import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from './index';
import * as types from './types';

const mockStore = configureMockStore([thunk]);

describe('fetchUser action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('calls fetch user action if the fetch response was successful', () => {
    const mockResponse = {
      _id: '2475hdsfh385',
      username: 'julia',
    };

    const expectedAction = [
      { type: types.FETCH_USER, payload: { _id: '2475hdsfh385', username: 'julia' } },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockResponse,
      });
    });

    const store = mockStore();
    store.dispatch(actions.fetchUser())
      .then(() => {
        const actions = store.getActions();
        expect(actions.length).toBe(1);
        expect(actions).toEqual(expectedAction);
      });
  });
});
