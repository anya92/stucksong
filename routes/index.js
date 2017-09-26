const express = require('express');
const passport = require('passport');
const router = express.Router();
const axios = require('axios');

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
      return res.redirect('/tracks');
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
router.get('/login', (req, res) => {
  res.json({ auth: false });
})
const isLoggedIn = (req, res, next) => {
   if (req.isAuthenticated()) { //middleware !!!
    next();
    return;
  } else {
    console.log('You have to be logged in');
    return res.redirect('/login');
    
  }
}

const checkAccessToken = (req, res, next) => {
  if (!req.cookies.accessToken) {
    console.log('You have to reathenticate');
    axios({
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
    })
      .then(response => {
        console.log('getAccessToken', response.data);
        res.cookie('accessToken', response.data.access_token, { maxAge: 3600 * 1000 });
        return res.redirect('/api/top_tracks');
      })
      .catch(error => console.log(error));
  } else {
    next();
    return;
  }  
}

router.get('/api/top_tracks', isLoggedIn, checkAccessToken, (req, res) => {
  let tracks = [];
  axios.get('https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term', 
    { 
      headers: {
        'Authorization': `Bearer ${req.cookies.accessToken}`

      }
    }
  ).then(response => {
      response.data.items.forEach(song => {
        tracks.push({title: song.name, artist: song.artists[0].name, album: song.album.name, image: song.album.images[0].url });
      });
      res.json(tracks);
    })
    .catch(err => console.log(err.response.statusText)); 
});

module.exports = router;
