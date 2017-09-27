import { CREATED_PLAYLIST_URL } from '../actions/types';

export default (state = null, action) => {
	switch(action.type) {
		case CREATED_PLAYLIST_URL:
			return action.payload;
		default:
			return state;		
	}
};
