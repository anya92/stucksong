import * as types from '../actions/types';
import playlistReducer from './playlistReducer';

import { playlist } from '../assets/sampleData';

describe('playlist reducer', () => {
  const initialState = {
    pending: false,
    playlist: null,
    error: false,
  };

  it('returns the initial state', () => {
    expect(playlistReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CREATE_PLAYLIST_PENDING action', () => {
    const mockAction = {
      type: types.CREATE_PLAYLIST_PENDING,
    };
    expect(playlistReducer(initialState, mockAction)).toHaveProperty('pending', true);
  });

  it('should handle CREATE_PLAYLIST_SUCCESS action', () => {
    const mockAction = {
      type: types.CREATE_PLAYLIST_SUCCESS,
      payload: playlist,
    };
    expect(playlistReducer(initialState, mockAction)).toEqual({
      pending: false,
      error: false,
      playlist,
    });
  });

  it('should handle CREATE_PLAYLIST_ERROR action', () => {
    const mockAction = {
      type: types.CREATE_PLAYLIST_ERROR,
      payload: 'Request failed',
    };
    expect(playlistReducer(initialState, mockAction)).toHaveProperty('error', 'Request failed');
  });
});
