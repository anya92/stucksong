import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  shape,
  oneOfType,
  bool,
  string,
  number,
  arrayOf,
  func,
} from 'prop-types';
import { createPlaylist } from '../../actions';
import Loadable from '../HOC/Loadable';

import PlaylistForm from './PlaylistForm';
import Loader from '../../styles/loader';

const AsyncError = Loadable({
  loader: () => import('../Error/ErrorComponent'),
});

const AsyncPlaylist = Loadable({
  loader: () => import('./Playlist'),
});

export class CreatePlaylist extends Component {
  state = {
    name: `${this.props.auth.username}'s Top Tracks`,
    description: '',
    numberOfTracks: 25,
  }

  createPlaylist = (e) => {
    e.preventDefault();
    const { name, description, numberOfTracks } = this.state;
    this.props.createPlaylist(name, description, numberOfTracks);
  }

  handleChange = (type, value) => {
    this.setState({ [type]: value });
  }

  render() {
    const { pending, playlist, error } = this.props.playlist;
    if (error) return <AsyncError error={error} />;
    if (pending) return <Loader>Loading...</Loader>;
    if (!playlist) {
      return (
        <PlaylistForm
          name={this.state.name}
          description={this.state.description}
          numberOfTracks={this.state.numberOfTracks}
          handleChange={this.handleChange}
          createPlaylist={this.createPlaylist}
        />
      );
    }
    return (
      <AsyncPlaylist
        playlist={playlist}
      />
    );
  }
}

CreatePlaylist.propTypes = {
  auth: shape({
    username: string,
  }).isRequired,
  playlist: shape({
    pending: bool.isRequired,
    error: oneOfType([bool, string]).isRequired,
    playlist: shape({
      name: string,
      description: string,
      image: string,
      numberOfTracks: number,
      tracks: arrayOf(shape({})),
    }),
  }).isRequired,
  createPlaylist: func.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    playlist: state.playlist,
  };
}

export default connect(mapStateToProps, { createPlaylist })(CreatePlaylist);
