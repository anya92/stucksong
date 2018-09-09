import * as types from '../actions/types';
import recentlyPlayedTracksReducer from './recentlyPlayedReducer';

import { recentlyPlayedTracks } from '../assets/sampleData';

describe('recently played tracks reducer', () => {
  const initialState = {
    pending: false,
    tracks: [],
    error: false,
    hasMore: true,
    before: null,
  };

  it('returns the initial state', () => {
    expect(recentlyPlayedTracksReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_TOP_TRACKS_PENDING action', () => {
    const mockAction = {
      type: types.FETCH_RECENTLY_PLAYED_TRACKS_PENDING,
    };
    expect(recentlyPlayedTracksReducer(initialState, mockAction)).toHaveProperty('pending', true);
  });

  it('should handle FETCH_RECENTLY_PLAYED_TRACKS_SUCCESS action', () => {
    const mockAction = {
      type: types.FETCH_RECENTLY_PLAYED_TRACKS_SUCCESS,
      payload: recentlyPlayedTracks,
    };
    expect(recentlyPlayedTracksReducer(initialState, mockAction)).toEqual({
      pending: false,
      error: false,
      tracks: recentlyPlayedTracks,
      hasMore: true,
      before: null,
    });
  });

  it('should handle FETCH_RECENTLY_PLAYED_TRACKS_ERROR action', () => {
    const mockAction = {
      type: types.FETCH_RECENTLY_PLAYED_TRACKS_ERROR,
      payload: 'Request failed',
    };
    expect(recentlyPlayedTracksReducer(initialState, mockAction)).toHaveProperty('error', 'Request failed');
  });

  it('should handle FETCH_RECENTLY_PLAYED_TRACKS_HAS_MORE action', () => {
    const mockAction = {
      type: types.FETCH_RECENTLY_PLAYED_TRACKS_HAS_MORE,
      payload: false,
    };
    expect(recentlyPlayedTracksReducer(initialState, mockAction)).toHaveProperty('hasMore', false);
  });

  it('should handle FETCH_RECENTLY_PLAYED_TRACKS_BEFORE action', () => {
    const mockAction = {
      type: types.FETCH_RECENTLY_PLAYED_TRACKS_BEFORE,
      payload: '15438306506',
    };
    expect(recentlyPlayedTracksReducer(initialState, mockAction)).toHaveProperty('before', '15438306506');
  });
});
