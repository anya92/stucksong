import { NEXT } from '../actions/types';

export default (state = true, action) => {
	switch(action.type) {
		case NEXT:
			return action.payload;
		default:
			return state;		
	}
};
