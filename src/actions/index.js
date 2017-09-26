import { FETCH_USER, FETCH_TRACKS } from './types';
import axios from 'axios';

export const fetchUser = () => dispatch => {
  axios.get('/auth/current_user')
    .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
}

export const fetchTracks = () => dispatch => {
  axios.get('/api/top_tracks')
    .then(res => dispatch({ type: FETCH_TRACKS, payload: res.data }));
}
