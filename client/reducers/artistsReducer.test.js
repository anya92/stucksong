import * as types from '../actions/types';
import topArtistsReducer from './artistsReducer';

import { topArtists } from '../assets/sampleData';

describe('top artists reducer', () => {
  const initialState = {
    pending: false,
    artists: [],
    error: false,
    hasMore: true,
  };

  it('returns the initial state', () => {
    expect(topArtistsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_TOP_TRACKS_PENDING action', () => {
    const mockAction = {
      type: types.FETCH_TOP_ARTISTS_PENDING,
    };
    expect(topArtistsReducer(initialState, mockAction)).toHaveProperty('pending', true);
  });

  it('should handle FETCH_TOP_ARTISTS_SUCCESS action', () => {
    const mockAction = {
      type: types.FETCH_TOP_ARTISTS_SUCCESS,
      payload: topArtists,
    };
    expect(topArtistsReducer(initialState, mockAction)).toEqual({
      pending: false,
      error: false,
      artists: topArtists,
      hasMore: true,
    });
  });

  it('should handle FETCH_TOP_ARTISTS_ERROR action', () => {
    const mockAction = {
      type: types.FETCH_TOP_ARTISTS_ERROR,
      payload: 'Request failed',
    };
    expect(topArtistsReducer(initialState, mockAction)).toHaveProperty('error', 'Request failed');
  });

  it('should handle FETCH_TOP_ARTISTS_HAS_MORE action', () => {
    const mockAction = {
      type: types.FETCH_TOP_ARTISTS_HAS_MORE,
      payload: false,
    };
    expect(topArtistsReducer(initialState, mockAction)).toHaveProperty('hasMore', false);
  });
});
