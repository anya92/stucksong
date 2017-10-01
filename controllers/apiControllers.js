const axios = require('axios');

exports.isLoggedIn = (req, res, next) => {
	 if (req.isAuthenticated()) { //middleware !!!
		next();
		return;
	} else {
		console.log('You have to be logged in');
		return res.redirect('/');
	}
}

exports.checkAccessToken = async (req, res, next) => {
	if (!req.cookies.accessToken) {
		const response = await axios({
			url: 'https://accounts.spotify.com/api/token',
			method: 'post',
			params: {
				grant_type: 'refresh_token',
				refresh_token: req.session.refreshToken
			},
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			auth: {
				username: process.env.CLIENT_ID,
				password: process.env.CLIENT_SECRET
			}
		});
		res.cookie('accessToken', response.data.access_token, { maxAge: 3600 * 1000 });
		res.locals.accessToken = response.data.access_token;
		next();
	} else {
		next();
		return;
	}  
}

exports.catchErrors = fn => {
	return function(req, res, next) {
		return fn(req, res, next).catch(next);
	};
};

exports.getData = (type, time) => async (req, res) => {
	const limit = req.query.limit || 10;
	const offset = req.query.offset || 0;
	const response = await axios.get(
		`https://api.spotify.com/v1/me/top/${type}?limit=${limit}&offset=${offset}&time_range=${time}`, 
		{ 
			headers: { 
				'Authorization': `Bearer ${req.cookies.accessToken || res.locals.accessToken}` 
			} 
		});
	res.json(response.data); 
};

exports.createPlaylist = async (req, res, next) => {
	const playlist = await axios({
		url: `https://api.spotify.com/v1/users/${req.user.spotifyId}/playlists`,
		method: 'post',
		data: {
			name: `${req.user.username}'s Top Tracks`,
			description: 'The coolest playlist ever!'
		},
		headers: {
			'Authorization': `Bearer ${req.cookies.accessToken || res.locals.accessToken}`,
			'Content-Type': 'application/json'
		}
	});
	res.locals.playlistId = playlist.data.id;
	next();
}

exports.addTracks = () => async (req, res) => {
	// get tracks ids
	const numberOfTracks = req.query.numberOfTracks || 50;
	const tracks = await axios.get(
		`https://api.spotify.com/v1/me/top/tracks?limit=${numberOfTracks}&time_range=short_term`, 
		{ 
			headers: { 
				'Authorization': `Bearer ${req.cookies.accessToken || res.locals.accessToken}` 
			} 
		});
	let tracksIds = [];
	tracks.data.items.forEach(track => tracksIds.push(track.uri));
	
	const playlistUrl = await axios({
		url: `https://api.spotify.com/v1/users/${req.user.spotifyId}/playlists/${res.locals.playlistId}/tracks`,
		method: 'post',
		data: {
			uris: tracksIds
		},
		headers: {
			'Authorization': `Bearer ${req.cookies.accessToken || res.locals.accessToken}`,
			'Content-Type': 'application/json'
		}
	});
	res.json({
		'playlist_url': `https://open.spotify.com/user/${req.user.spotifyId}/playlist/${res.locals.playlistId}`
	});
}

exports.getCurrentlyPlaying = async (req, res) => {
	const track = await axios({
		url: 'https://api.spotify.com/v1/me/player/currently-playing',
		method: 'get',
		headers: {
			'Authorization': `Bearer ${req.cookies.accessToken || res.locals.accessToken}`
		}
	});
	res.json(track.data);
}

exports.getRecentlyPlayed = (before = 0) => async (req, res) => {
	
	const tracks = await axios({
		url: `https://api.spotify.com/v1/me/player/recently-played?limit=10${before ? `&before=${before}` : ''}`,
		method: 'get',
		headers: {
			'Authorization': `Bearer ${req.cookies.accessToken || res.locals.accessToken}`
		}
	});
	res.json(tracks.data);
}
