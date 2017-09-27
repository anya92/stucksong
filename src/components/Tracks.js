import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTracks } from '../actions';

class Tracks extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }
  componentDidMount() {
    this.props.fetchTracks();
  }
  render() {
    return !this.props.tracks ? <div></div> : (
      <div>
        <h1>Your Top Tracks</h1>
        {
          this.props.tracks.map((track, i) => {
            return (
              <div key={i}>
               {i+1}. {track.title}
              </div>
            )
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks
  };
}

export default connect(mapStateToProps, { fetchTracks })(Tracks);
