import {
  FETCH_RECENTLY_PLAYED_TRACKS_PENDING,
  FETCH_RECENTLY_PLAYED_TRACKS_SUCCESS,
  FETCH_RECENTLY_PLAYED_TRACKS_HAS_MORE,
  FETCH_RECENTLY_PLAYED_TRACKS_BEFORE,
  FETCH_RECENTLY_PLAYED_TRACKS_ERROR,
} from '../actions/types';

const initialState = {
  pending: false,
  tracks: [],
  error: false,
  hasMore: true,
  before: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECENTLY_PLAYED_TRACKS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_RECENTLY_PLAYED_TRACKS_SUCCESS:
      return {
        ...state,
        tracks: [
          ...state.tracks,
          ...action.payload,
        ],
        error: false,
      };
    case FETCH_RECENTLY_PLAYED_TRACKS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    case FETCH_RECENTLY_PLAYED_TRACKS_HAS_MORE:
      return {
        ...state,
        pending: false,
        hasMore: action.payload,
      };
    case FETCH_RECENTLY_PLAYED_TRACKS_BEFORE:
      return {
        ...state,
        before: action.payload,
      };
    default:
      return state;
  }
};
