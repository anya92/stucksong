import React from 'react';
import {
  string,
  number,
  object,
} from 'prop-types';
import moment from 'moment';

import {
  CardImage,
  CardImageLink,
  CardImageDate,
  CardInfo,
  CardTitle,
  CardText,
  CardArtist,
  CardAlbum,
} from '../styles/cards';

const Card = ({ data, type, index }) => (
  <div>
    <CardImage>
      <CardImageLink>
        <a
          href={`https://open.spotify.com/${type}/${data.id}`}
          // href={`${data.uri}`}
          target="_blank"
          rel="noopener noreferrer"
        >play
        </a>
      </CardImageLink>
      <img src={data.image} alt={type === 'artists' ? data.name : data.album} />
      {
        type === 'recently-track'
        && <CardImageDate>{ moment(data.played_at).format('DD MMM - HH:mm') }</CardImageDate>
      }
    </CardImage>
    <CardInfo>
      <CardTitle>
        {type !== 'recently-track' && <span>{index + 1}.</span> } {data.title}
      </CardTitle>
      <CardText>
        <CardArtist>{data.artist}</CardArtist>
        <CardAlbum>{data.album}</CardAlbum>
      </CardText>
    </CardInfo>
  </div>
);

Card.propTypes = {
  data: object.isRequired,
  type: string.isRequired,
  index: number.isRequired,
};

export default Card;
