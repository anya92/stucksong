import { FETCH_RECENTLY_PLAYED, HAS_MORE_RECENTLY_PLAYED_TRACKS } from '../actions/types';

export const recentlyPlayedTracks = (state = [], action) => {
	switch(action.type) {
		case FETCH_RECENTLY_PLAYED:
			return state.concat(action.payload);
		default:
			return state;
	}
};

export const hasMoreRecentlyPlayedTracks = (state = true, action) => {
	switch(action.type) {
		case HAS_MORE_RECENTLY_PLAYED_TRACKS:
			return action.payload;
		default:
			return state;		
	}
};

export const recentlyPlayedBefore = (state = null, action) => {
	switch(action.type) {
		case 'RECENTLY_PLAYED_BEFORE':
			return action.payload;
		default: 
			return state;	
	}
};
