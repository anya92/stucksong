import { 
	FETCH_USER, 
	FETCH_TRACKS, 
	FETCH_ARTISTS, 
	NEXT,
	CREATED_PLAYLIST_URL 
} from './types';
import axios from 'axios';

export const fetchUser = () => dispatch => {
	axios.get('/auth/current_user')
		.then(res => dispatch({ type: FETCH_USER, payload: res.data }));
};

export const fetchTracks = (offset = 0) => dispatch => {
	axios.get(`/api/top_tracks?limit=10&offset=${offset}`)
		.then(res => {
			// check if there will be data in the next request
			const next = !res.data.next ? false : true ;
			dispatch({ type: NEXT, payload: next });

			let tracks = [];
			res.data.items.forEach(track => {
				tracks.push({
					id: track.id,
					title: track.name,
					artist: track.artists[0].name,
					album: track.album.name,
					image: track.album.images[1].url
				});
			});
			dispatch({ type: FETCH_TRACKS, payload: tracks });
		});
};

export const fetchArtists = (offset = 0) => dispatch => {
	axios.get(`/api/top_artists?limit=10&offset=${offset}`)
		.then(res => {
			// check if there will be data in the next request
			const next = !res.data.next ? false : true ;
			dispatch({ type: NEXT, payload: next });

			let artists = [];
			res.data.items.forEach(artist => {
				artists.push({
					id: artist.id,
					name: artist.name,
					image: artist.images[1].url,
					genres: artist.genres
				});
			});
			dispatch({ type: FETCH_ARTISTS, payload: artists });
		});
};

export const createPlaylist = (numberOfTracks = 50) => dispatch => {
	axios.get(`/api/create_playlist?numberOfTracks=${numberOfTracks}`)
		.then(res => {
			dispatch({ type: CREATED_PLAYLIST_URL, payload: res.data.playlist_url });
		});
};
