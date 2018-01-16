import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import requireAuth from './HOC/require_authentication';
import redirectToTracks from './HOC/redirect_to_tracks';
import Loadable from './HOC/Loadable';

const AsyncHome = Loadable({
  loader: () => import('./Home')
});

const AsyncTracks = Loadable({
  loader: () => import('./Tracks')
});

const AsyncArtists = Loadable({
  loader: () => import('./Artists')
});

const AsyncRecently = Loadable({
  loader: () => import('./Recently')
});

const AsyncCreatePlaylist = Loadable({
  loader: () => import('./CreatePlaylist')
});

import Navbar from './Navbar';

export default ({ auth }) => (
  <Router>
    <div>
      <Navbar auth={auth} />
      <Switch>
        <Route exact path='/' component={redirectToTracks(AsyncHome)} />
        <Route path='/top-tracks' component={requireAuth(AsyncTracks)} />
        <Route path='/top-artists' component={requireAuth(AsyncArtists)} />
        <Route path='/recently-played' component={requireAuth(AsyncRecently)} />
        <Route path='/create-playlist' component={requireAuth(AsyncCreatePlaylist)} />
      </Switch>
    </div>  
  </Router>
);
