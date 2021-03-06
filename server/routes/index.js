const express = require('express');
const authControllers = require('../controllers/authControllers');
const apiControllers = require('../controllers/apiControllers');

const router = express.Router();
const { catchErrors } = apiControllers;

router.get('/auth/spotify', authControllers.login);

router.get('/auth/spotify/callback', authControllers.loginCallback);

router.get('/auth/current_user', authControllers.getUser);

router.get('/auth/logout', authControllers.logout);

/* eslint-disable no-tabs */

router.get('/api/top_tracks',
  apiControllers.isLoggedIn,
  catchErrors(apiControllers.checkAccessToken),
  catchErrors(apiControllers.getData('tracks', 'short_term')),
);

router.get('/api/top_tracks_long',
  apiControllers.isLoggedIn,
  catchErrors(apiControllers.checkAccessToken),
  catchErrors(apiControllers.getData('tracks', 'long_term')),
);

router.get('/api/top_artists',
  apiControllers.isLoggedIn,
  catchErrors(apiControllers.checkAccessToken),
  catchErrors(apiControllers.getData('artists', 'short_term')),
);

router.get('/api/top_artists_long',
  apiControllers.isLoggedIn,
  catchErrors(apiControllers.checkAccessToken),
  catchErrors(apiControllers.getData('artists', 'long_term')),
);

router.get('/api/create_playlist',
  apiControllers.isLoggedIn,
  catchErrors(apiControllers.checkAccessToken),
  catchErrors(apiControllers.createPlaylist),
  catchErrors(apiControllers.addTracks()),
);

router.get('/api/current_play',
  apiControllers.isLoggedIn,
  catchErrors(apiControllers.checkAccessToken),
  catchErrors(apiControllers.getCurrentlyPlaying),
);

router.get('/api/recently_played',
  apiControllers.isLoggedIn,
  catchErrors(apiControllers.checkAccessToken),
  catchErrors(apiControllers.getRecentlyPlayed()),
);

/* eslint-enable */

module.exports = router;
