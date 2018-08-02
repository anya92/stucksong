import { FETCH_ARTISTS, HAS_MORE_ARTISTS } from '../actions/types';

export const artists = (state = [], action) => {
	switch(action.type) {
		case FETCH_ARTISTS:
			return state.concat(action.payload);
		default:
			return state;
	}
};

export const hasMoreArtists = (state = true, action) => {
	switch(action.type) {
		case HAS_MORE_ARTISTS:
			return action.payload;
		default:
			return state;		
	}
};
