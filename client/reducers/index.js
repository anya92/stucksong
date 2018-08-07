import { combineReducers } from 'redux';
import auth from './authReducer';
import topTracks from './tracksReducer';
import topArtists from './artistsReducer';
import { recentlyPlayedTracks, hasMoreRecentlyPlayedTracks, recentlyPlayedBefore } from './recentlyPlayedReducer';
import playlistReducer from './playlistReducer';


export default combineReducers({
  auth,
  topTracks,
  topArtists,
  recentlyPlayedTracks,
  hasMoreRecentlyPlayedTracks,
  recentlyPlayedBefore,
  playlist: playlistReducer
});
