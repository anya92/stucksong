import axios from 'axios';
import * as types from './types';

export const fetchUser = () => (dispatch) => {
  axios.get('/auth/current_user')
    .then(res => dispatch({ type: types.FETCH_USER, payload: res.data }))
    .catch(console.log);
};

export const fetchTracks = (offset = 0) => (dispatch) => {
  dispatch({ type: types.FETCH_TOP_TRACKS_PENDING });
  axios.get(`/api/top_tracks?offset=${offset}`)
    .then((res) => {
      const tracks = [];
      res.data.items.forEach((track) => {
        tracks.push({
          id: track.id,
          title: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          image: track.album.images[1].url,
          uri: track.uri,
        });
      });
      dispatch({ type: types.FETCH_TOP_TRACKS_SUCCESS, payload: tracks });
      // check if there will be data in the next request
      const hasMore = res.data.next !== null;
      dispatch({ type: types.FETCH_TOP_TRACKS_HAS_MORE, payload: hasMore });
    })
    .catch(error => dispatch({ type: types.FETCH_TOP_TRACKS_ERROR, payload: error.message }));
};

export const fetchArtists = (offset = 0) => (dispatch) => {
  dispatch({ type: types.FETCH_TOP_ARTISTS_PENDING });
  axios.get(`/api/top_artists?offset=${offset}`)
    .then((res) => {
      const artists = [];
      res.data.items.forEach((artist) => {
        artists.push({
          id: artist.id,
          name: artist.name,
          image: artist.images[1].url,
          genres: artist.genres,
          uri: artist.uri,
        });
      });
      dispatch({ type: types.FETCH_TOP_ARTISTS_SUCCESS, payload: artists });
      // check if there will be data in the next request
      const hasMore = res.data.next !== null;
      dispatch({ type: types.FETCH_TOP_ARTISTS_HAS_MORE, payload: hasMore });
    })
    .catch(error => dispatch({ type: types.FETCH_TOP_ARTISTS_ERROR, payload: error.message }));
};

export const fetchRecentlyPlayed = before => (dispatch) => {
  dispatch({ type: types.FETCH_RECENTLY_PLAYED_TRACKS_PENDING });

  axios.get(`/api/recently_played?before=${before || Date.now()}`)
    .then((res) => {
      const tracks = [];
      res.data.items.forEach((item) => {
        tracks.push({
          id: item.track.id,
          title: item.track.name,
          artist: item.track.artists[0].name,
          album: item.track.album.name,
          image: item.track.album.images[1].url,
          played_at: item.played_at,
          uri: item.track.uri,
        });
      });
      dispatch({ type: types.FETCH_RECENTLY_PLAYED_TRACKS_SUCCESS, payload: tracks });
      // check if there will be data in the next request
      const hasMore = res.data.next !== null;
      dispatch({ type: types.FETCH_RECENTLY_PLAYED_TRACKS_HAS_MORE, payload: hasMore });
      // get 'before' param for the next request
      const before = res.data.next ? res.data.cursors.before : null;
      dispatch({ type: types.FETCH_RECENTLY_PLAYED_TRACKS_BEFORE, payload: before });
    })
    .catch((error) => {
      dispatch({ type: types.FETCH_RECENTLY_PLAYED_TRACKS_ERROR, payload: error.message });
    });
};

export const createPlaylist = (name, description, numberOfTracks = 50) => (dispatch) => {
  axios.get(`/api/create_playlist?name=${name}&description=${description}&numberOfTracks=${numberOfTracks}`)
    .then((res) => {
      // const tracksImages = res.data.playlist_info.tracks.items.map(item => item.track.album.images[0].url);
      const playlist = {
        name: res.data.playlist_info.name,
        description: res.data.playlist_info.description,
        url: res.data.playlist_info.external_urls.spotify,
        image: res.data.playlist_info.images[0].url,
        numberOfTracks: res.data.playlist_info.tracks.total,
        tracks: res.data.playlist_info.tracks.items,
        // tracksImages,
      };
      dispatch({ type: types.CREATED_PLAYLIST, payload: playlist });
    });
};
