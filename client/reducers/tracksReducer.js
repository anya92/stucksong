import {
  FETCH_TOP_TRACKS_PENDING,
  FETCH_TOP_TRACKS_SUCCESS,
  FETCH_TOP_TRACKS_ERROR,
  FETCH_TOP_TRACKS_HAS_MORE,
} from '../actions/types';

const initialState = {
  pending: false,
  tracks: [],
  error: false,
  hasMore: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_TRACKS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_TOP_TRACKS_SUCCESS:
      return {
        ...state,
        tracks: [
          ...state.tracks,
          ...action.payload,
        ],
        error: false,
      };
    case FETCH_TOP_TRACKS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    case FETCH_TOP_TRACKS_HAS_MORE:
      return {
        ...state,
        pending: false,
        hasMore: action.payload,
      };
    default:
      return state;
  }
};
