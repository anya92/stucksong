import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import {
  arrayOf,
  shape,
  string,
  func,
  bool,
} from 'prop-types';
import { fetchTracks } from '../actions';

import Card from './Card';
import {
  CardsGrid,
  Title,
} from '../styles/cards';
import Loader from '../styles/loader';

class TopTracks extends Component {
  componentDidMount = () => {
    this.props.fetchTracks();
  }

  render() {
    const { tracks, hasMore, pending } = this.props.topTracks;
    return (
      <CardsGrid>
        <Title>Top Tracks</Title>
        <InfiniteScroll
          initialLoad={false}
          loadMore={() => this.props.fetchTracks(tracks.length)}
          hasMore={!pending && hasMore}
          threshold={250}
        >
          {
            tracks.map((track, i) => (
              <Card key={`${track.id}${i}`} data={track} type="track" index={i} />
            ))
          }
          { pending && <Loader>Loading...</Loader> }
        </InfiniteScroll>
      </CardsGrid>
    );
  }
}

TopTracks.propTypes = {
  topTracks: shape({
    pending: bool.isRequired,
    error: bool.isRequired,
    hasMore: bool.isRequired,
    tracks: arrayOf(shape({
      id: string.isRequired,
      title: string.isRequired,
      artist: string.isRequired,
      album: string.isRequired,
      image: string.isRequired,
    })).isRequired,
  }).isRequired,
  fetchTracks: func.isRequired,
};

function mapStateToProps(state) {
  return {
    topTracks: state.topTracks,
  };
}

export default connect(mapStateToProps, { fetchTracks })(TopTracks);
