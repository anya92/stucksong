import { FETCH_TRACKS } from '../actions/types';

export default (state = [], action) => {
	switch(action.type) {
		case FETCH_TRACKS:
			console.log('state', state, 'action', action.payload);
			return state.concat(action.payload);
		default:
			return state;
	}
};
