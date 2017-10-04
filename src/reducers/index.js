import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { tracks, hasMoreTracks } from './tracksReducer';
import { artists, hasMoreArtists } from './artistsReducer';
import { recentlyPlayedTracks, hasMoreRecentlyPlayedTracks, recentlyPlayedBefore } from './recentlyPlayedReducer';
import playlistReducer from './playlistReducer';


export default combineReducers({
	auth: authReducer,
	tracks,
	hasMoreTracks,
	artists,
	hasMoreArtists,
	recentlyPlayedTracks,
	hasMoreRecentlyPlayedTracks,
	recentlyPlayedBefore,
	playlist: playlistReducer
});
