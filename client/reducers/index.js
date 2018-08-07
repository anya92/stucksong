import { combineReducers } from 'redux';
import authReducer from './authReducer';
import topTracks from './tracksReducer';
import { artists, hasMoreArtists } from './artistsReducer';
import { recentlyPlayedTracks, hasMoreRecentlyPlayedTracks, recentlyPlayedBefore } from './recentlyPlayedReducer';
import playlistReducer from './playlistReducer';


export default combineReducers({
  auth: authReducer,
  topTracks,
  artists,
  hasMoreArtists,
  recentlyPlayedTracks,
  hasMoreRecentlyPlayedTracks,
  recentlyPlayedBefore,
  playlist: playlistReducer
});
