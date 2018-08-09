import React from 'react';
import {
  PlaylistContainer,
  PlaylistLink,
  PlaylistTracks,
  PlaylistTrackTitle,
  PlaylistTrackInfo,
} from '../styles/playlist';

const Playlist = ({ playlist: { name, description, image, tracks, url } }) => (
  <PlaylistContainer>
    <div>
      <img src={image} alt="playlist" />
      <h1>{name}</h1>
      { description && <h4>{description}</h4> }
    </div>
    <div>
      <PlaylistLink>
        <a href={url} target="_blank" rel="noopener noreferrer">Open in Spotify</a>
      </PlaylistLink>
      <PlaylistTracks>
        {
          tracks.map(({ id, title, artist, album }, i) => (
            <div key={id}>
              <PlaylistTrackTitle><span>{i + 1}.</span> {title}</PlaylistTrackTitle>
              <PlaylistTrackInfo>{artist}, <em>{album}</em></PlaylistTrackInfo>
            </div>
          ))
        }
      </PlaylistTracks>

    </div>
  </PlaylistContainer>
);

export default Playlist;
