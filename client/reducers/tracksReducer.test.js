import * as types from '../actions/types';
import topTracksReducer from './tracksReducer';

import { topTracks } from '../assets/sampleData';

describe('top tracks reducer', () => {
  const initialState = {
    pending: false,
    tracks: [],
    error: false,
    hasMore: true,
  };

  it('returns the initial state', () => {
    expect(topTracksReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_TOP_TRACKS_PENDING action', () => {
    const mockAction = {
      type: types.FETCH_TOP_TRACKS_PENDING,
    };
    expect(topTracksReducer(initialState, mockAction)).toHaveProperty('pending', true);
  });

  it('should handle FETCH_TOP_TRACKS_SUCCESS action', () => {
    const mockAction = {
      type: types.FETCH_TOP_TRACKS_SUCCESS,
      payload: topTracks,
    };
    expect(topTracksReducer(initialState, mockAction)).toEqual({
      pending: false,
      error: false,
      tracks: topTracks,
      hasMore: true,
    });
  });

  it('should handle FETCH_TOP_TRACKS_ERROR action', () => {
    const mockAction = {
      type: types.FETCH_TOP_TRACKS_ERROR,
      payload: 'Request failed',
    };
    expect(topTracksReducer(initialState, mockAction)).toHaveProperty('error', 'Request failed');
  });

  it('should handle FETCH_TOP_TRACKS_HAS_MORE action', () => {
    const mockAction = {
      type: types.FETCH_TOP_TRACKS_HAS_MORE,
      payload: false,
    };
    expect(topTracksReducer(initialState, mockAction)).toHaveProperty('hasMore', false);
  });
});
