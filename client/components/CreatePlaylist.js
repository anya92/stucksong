import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPlaylist } from '../actions';
import Loadable from './HOC/Loadable';

import PlaylistForm from './PlaylistForm';
import Loader from '../styles/loader';

const AsyncError = Loadable({
  loader: () => import('./Error/ErrorComponent'),
});

const AsyncPlaylist = Loadable({
  loader: () => import('./Playlist'),
});

class CreatePlaylist extends Component {
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
        modal={this.state.modal}
        toggleModal={this.toggleModal}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    playlist: state.playlist,
  };
}

export default connect(mapStateToProps, { createPlaylist })(CreatePlaylist);
