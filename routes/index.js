const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('It works.')
});

router.get('/auth/spotify', 
  passport.authenticate('spotify', {
    scope: ['user-top-read']
  })
);

router.get('/auth/spotify/callback', (req, res, next) => {
  passport.authenticate('spotify', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/'); }
    req.logIn(user, err => {
      if (err) { return next(err); }
      req.session.refreshToken = info.refreshToken;
      res.cookie('accessToken', info.accessToken, { maxAge: 3600 * 1000 });
      return res.redirect('/');
    })
  })(req, res, next);
});

router.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

router.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
