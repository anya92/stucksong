const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id)
		.then(user => {
			done(null, user);
		});
});

passport.use(
	new SpotifyStrategy({
		clientID: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		callbackURL: '/auth/spotify/callback',
		proxy: true
	}, 
	(accessToken, refreshToken, profile, done) => {
		User.findOne({ spotifyId: profile.id })
			.then(existingUser => {
				if (existingUser) {
					// user is already in database
					done(null, existingUser, { refreshToken, accessToken });
				} else {
					// save new user
					new User({ 
						spotifyId: profile.id, 
						username: profile.displayName || profile.username,
						photo: profile.photos[0]
					})
						.save()
						.then(user => done(null, user, { refreshToken, accessToken }));
				}
			});
	})
);
