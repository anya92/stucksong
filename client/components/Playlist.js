import React from 'react';
import {
  PlaylistContainer,
  PlaylistLinks,
  PlaylistLinkShare,
  PlaylistTracks,
  PlaylistTrackTitle,
  PlaylistTrackInfo,
} from '../styles/playlist';
import PlaylistShare from './PlaylistShare';
import spotifyImage from '../assets/spotify-logo.jpg';

const Playlist = ({ playlist: { name, description, image, tracks, url }, modal, toggleModal }) => (
  <div>
    <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Your playlist has been successfully created!</h1>
    <PlaylistContainer>
      <div>
        <img src={image || spotifyImage} alt="playlist" />
        <h1>{name}</h1>
        { description && <h4>{description}</h4> }
      </div>
      <div>
        <PlaylistLinks>
          <a href={url} target="_blank" rel="noopener noreferrer">Open in Spotify</a>
          <PlaylistLinkShare>
            Share with your friends:
            <PlaylistShare url={url} name={name} />
          </PlaylistLinkShare>
        </PlaylistLinks>
        <PlaylistTracks>
          { !tracks.length && <div>This playlist is empty</div> }
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
  </div>
);

export default Playlist;
