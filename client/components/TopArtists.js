import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { fetchArtists } from '../actions';

import {
  CardsGrid,
} from '../styles/cards';

import Card from './Card';

const TopArtists = props => (
  <CardsGrid>
    <InfiniteScroll
      pageStart={0}
      loadMore={() => props.fetchArtists(props.artists.length)}
      hasMore={props.hasMore}
      // hasMore={this.props.artists.length <= 40 && this.props.hasMore}
      loader={<div className="loader">Loading...</div>}
      threshold={500}
    >
      {
        props.artists.map((artist, i) => (
          <Card key={artist.id} data={artist} type="artist" index={i} />
        ))
      }
    </InfiniteScroll>
  </CardsGrid>
);


function mapStateToProps(state) {
  return {
    artists: state.artists,
    hasMore: state.hasMoreArtists,
  };
}

export default connect(mapStateToProps, { fetchArtists })(TopArtists);
