import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { oneOfType, bool, object } from 'prop-types';

import requireAuth from './HOC/require_authentication';
import redirectToTracks from './HOC/redirect_to_tracks';
import Loadable from './HOC/Loadable';
import Navbar from './Navbar/Navbar';

const AsyncHome = Loadable({
  loader: () => import('./Home/Home'),
});

const AsyncTracks = Loadable({
  loader: () => import('./TopTracks/TopTracks'),
});

const AsyncArtists = Loadable({
  loader: () => import('./TopArtists/TopArtists'),
});

const AsyncRecently = Loadable({
  loader: () => import('./RecentlyPlayedTracks/RecentlyPlayedTracks'),
});

const AsyncCreatePlaylist = Loadable({
  loader: () => import('./Playlist/CreatePlaylist'),
});

const AsyncPage404 = Loadable({
  loader: () => import('./Page404/Page404'),
});

const Routes = ({ auth }) => (
  <Router>
    <div>
      <Navbar auth={auth} />
      <Switch>
        <Route exact path="/" component={redirectToTracks(AsyncHome)} />
        <Route path="/top-tracks" component={requireAuth(AsyncTracks)} />
        <Route path="/top-artists" component={requireAuth(AsyncArtists)} />
        <Route path="/recently-played" component={requireAuth(AsyncRecently)} />
        <Route path="/create-playlist" component={requireAuth(AsyncCreatePlaylist)} />
        <Route component={AsyncPage404} />
      </Switch>
    </div>
  </Router>
);

Routes.propTypes = {
  auth: oneOfType([bool, object]).isRequired,
};

export default Routes;
