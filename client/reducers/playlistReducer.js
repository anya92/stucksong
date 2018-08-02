import { CREATED_PLAYLIST } from '../actions/types';

export default (state = null, action) => {
  switch(action.type) {
    case CREATED_PLAYLIST:
      return action.payload;
    default:
      return state;		
  }
};
