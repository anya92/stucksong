import { FETCH_USER, FETCH_TRACKS } from './types';
import axios from 'axios';

export const fetchUser = () => dispatch => {
  axios.get('/auth/current_user')
    .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
}

export const fetchTracks = () => dispatch => {
  axios.get('/api/top_tracks')
    .then(res => {
      let tracks = [];
      res.data.forEach(track => {
        tracks.push({
          title: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          image: track.album.images[0].url
        });
      })
      dispatch({ type: FETCH_TRACKS, payload: tracks });
    });
}
