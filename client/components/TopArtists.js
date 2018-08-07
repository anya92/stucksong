import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import {
  arrayOf,
  shape,
  string,
  func,
  bool,
} from 'prop-types';

import { fetchArtists } from '../actions';

import Card from './Card';
import {
  CardsGrid,
  Title,
} from '../styles/cards';
import Loader from '../styles/loader';

class TopArtists extends Component {
  componentDidMount = () => {
    this.props.fetchArtists();
  }

  render() {
    const { pending, hasMore, artists } = this.props.topArtists;
    return (
      <CardsGrid>
        <Title>Top Artists</Title>
        <InfiniteScroll
          initialLoad={false}
          loadMore={() => this.props.fetchArtists(artists.length)}
          hasMore={!pending && hasMore}
          threshold={250}
        >
          {
            artists.map((artist, i) => (
              <Card key={artist.id} data={artist} type="artist" index={i} />
            ))
          }
          { pending && <Loader>Loading...</Loader> }
        </InfiniteScroll>
      </CardsGrid>
    );
  }
}

TopArtists.propTypes = {
  topArtists: shape({
    pending: bool.isRequired,
    error: bool.isRequired,
    hasMore: bool.isRequired,
    artists: arrayOf(shape({
      id: string.isRequired,
      name: string.isRequired,
      image: string.isRequired,
      genres: arrayOf(string).isRequired,
      uri: string.isRequired,
    })).isRequired,
  }).isRequired,
  fetchArtists: func.isRequired,
};


function mapStateToProps(state) {
  return {
    topArtists: state.topArtists,
  };
}

export default connect(mapStateToProps, { fetchArtists })(TopArtists);
