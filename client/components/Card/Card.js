import React from 'react';
import {
  string,
  number,
  shape,
  oneOf,
} from 'prop-types';
import format from 'date-fns/format';

import {
  CardImage,
  CardImageLink,
  CardImageDate,
  CardInfo,
  CardTitle,
  CardText,
  CardArtist,
  CardAlbum,
  CardGenres,
} from '../../styles/cards';

const formatGenres = (dataGenres) => {
  let genres = '';
  dataGenres.slice(0, 3).forEach((genre) => { genres += `${genre}, `; });
  return genres.slice(0, -2);
};

const Card = ({ data, type, index }) => (
  <div>
    <CardImage>
      <CardImageLink>
        <a
          href={`https://open.spotify.com/${type === 'artist' ? 'artist' : 'track'}/${data.id}`}
          // href={`${data.uri}`}
          target="_blank"
          rel="noopener noreferrer"
        > { type === 'artist' ? 'open' : 'play' }
        </a>
      </CardImageLink>
      <img src={data.image} alt={type === 'artist' ? data.name : data.album} />
      {
        type === 'recently-track'
        && <CardImageDate>{ format(data.played_at, 'DD MMM - HH:mm') }</CardImageDate>
      }
    </CardImage>
    <CardInfo>
      <CardTitle>
        { type !== 'recently-track' && <span>{index + 1}.</span> }
        { type === 'artist' ? data.name : data.title }
      </CardTitle>
      <CardText>
        {
          type === 'artist'
            ? <CardGenres>{ formatGenres(data.genres) }</CardGenres>
            : (
              <React.Fragment>
                <CardArtist>{data.artist}</CardArtist>
                <CardAlbum>{data.album}</CardAlbum>
              </React.Fragment>
            )
        }
      </CardText>
    </CardInfo>
  </div>
);

Card.propTypes = {
  data: shape({}).isRequired,
  type: oneOf(['track', 'artist', 'recently-track']).isRequired,
  index: number.isRequired,
};

export default Card;
