import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tracksReducer from './tracksReducer';
import artistsReducer from './artistsReducer';
import isNextReducer from './isNextReducer';

export default combineReducers({
	auth: authReducer,
	tracks: tracksReducer,
	artists: artistsReducer,
	next: isNextReducer
});
