const passport = require('passport');

exports.login = passport.authenticate(
	'spotify', 
	{ scope: ['user-top-read', 'playlist-modify-private', 'playlist-modify-public'] }
);

exports.loginCallback = (req, res, next) => {
	passport.authenticate(
		'spotify', 
		(err, user, info) => {
			if (err) { return next(err); }
			if (!user) { return res.redirect('/'); }
			req.logIn(user, err => {
				if (err) { return next(err); }
				req.session.refreshToken = info.refreshToken;
				res.cookie('accessToken', info.accessToken, { maxAge: 3600 * 1000 });
				return res.redirect('/');
			});
		}
	)(req, res, next);
};

exports.getUser = (req, res) => {
	res.send(req.user);
};

exports.logout = (req, res) => {
	req.logout();
	res.redirect('/');
};
