import { FETCH_TRACKS, HAS_MORE_TRACKS } from '../actions/types';

export const tracks = (state = [], action) => {
	switch(action.type) {
		case FETCH_TRACKS:
			return state.concat(action.payload);
		default:
			return state;
	}
};

export const hasMoreTracks = (state = true, action) => {
	switch(action.type) {
		case HAS_MORE_TRACKS:
			return action.payload;
		default:
			return state;		
	}
};
