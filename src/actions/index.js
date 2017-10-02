import { 
	FETCH_USER, 
	FETCH_TRACKS, 
	HAS_MORE_TRACKS,
	FETCH_ARTISTS, 
	HAS_MORE_ARTISTS,
	CREATED_PLAYLIST_URL,
	// FETCH_CURRENTLY_PLAYING,
	FETCH_RECENTLY_PLAYED,
	HAS_MORE_RECENTLY_PLAYED_TRACKS,
	RECENTLY_PLAYED_BEFORE 
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
			const hasMore = !res.data.next ? false : true;
			dispatch({ type: HAS_MORE_TRACKS, payload: hasMore });

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
			const hasMore = !res.data.next ? false : true;
			dispatch({ type: HAS_MORE_ARTISTS, payload: hasMore });

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

// export const fetchCurrentlyPlaying = () => dispatch => {
// 	axios.get('/api/current_play')
// 		.then(res => console.log(res.data));
// };

export const fetchRecentlyPlayed = before => dispatch => {
	axios.get(`/api/recently_played?before=${before}`)
		.then(res =>{
			// check if there will be data in the next request
			const hasMore = !res.data.next ? false : true;
			dispatch({ type: HAS_MORE_RECENTLY_PLAYED_TRACKS, payload: hasMore });
			// get before param for the next request
			const before = res.data.next ? res.data.cursors.before : null;
			dispatch({ type: RECENTLY_PLAYED_BEFORE, payload: before });
			
			console.log(res.data);
			let tracks = [];
			res.data.items.forEach(item => {
				tracks.push({
					id: item.track.id,
					title: item.track.name,
					artist: item.track.artists[0].name,
					album: item.track.album.name,
					image: item.track.album.images[1].url,
					played_at: item.played_at
				});
			});

			dispatch({ type: FETCH_RECENTLY_PLAYED, payload: tracks });
		});
};
