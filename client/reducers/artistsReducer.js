import {
  FETCH_TOP_ARTISTS_PENDING,
  FETCH_TOP_ARTISTS_SUCCESS,
  FETCH_TOP_ARTISTS_ERROR,
  FETCH_TOP_ARTISTS_HAS_MORE,
} from '../actions/types';

const initialState = {
  pending: false,
  artists: [],
  error: false,
  hasMore: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_ARTISTS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_TOP_ARTISTS_SUCCESS:
      return {
        ...state,
        artists: [
          ...state.artists,
          ...action.payload,
        ],
      };
    case FETCH_TOP_ARTISTS_ERROR:
      return {
        ...state,
        pending: false,
        error: true,
      };
    case FETCH_TOP_ARTISTS_HAS_MORE:
      return {
        ...state,
        pending: false,
        hasMore: action.payload,
      };
    default:
      return state;
  }
};
