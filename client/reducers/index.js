import { combineReducers } from 'redux';
import auth from './authReducer';
import topTracks from './tracksReducer';
import topArtists from './artistsReducer';
import recentlyPlayedTracks from './recentlyPlayedReducer';
import playlistReducer from './playlistReducer';


export default combineReducers({
  auth,
  topTracks,
  topArtists,
  recentlyPlayedTracks,
  playlist: playlistReducer,
});
