import * as types from '../actions/types';
import authReducer from './authReducer';

describe('auth reducer', () => {
  const initialState = null;

  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(null);
  });

  it('should handle FETCH_USER action', () => {
    const mockAction = {
      type: types.FETCH_USER,
      payload: {
        username: 'julia',
      },
    };
    expect(authReducer(initialState, mockAction)).toEqual({ username: 'julia' });
  });
});
