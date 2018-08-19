import React from 'react';
import { Link } from 'react-router-dom';

import {
  PlaylistContainer,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  DangerInfo,
  FormButton,
} from '../../styles/playlist';

const PlaylistForm = ({
  name,
  description,
  numberOfTracks,
  handleChange,
  createPlaylist,
}) => (
  <PlaylistContainer>
    <h1>Create a playlist of your <Link to="/top-tracks">Top&nbsp;Tracks</Link></h1>
    <form onSubmit={e => createPlaylist(e)}>
      <FormGroup>
        <label htmlFor="playlist-name">Name
          <InputGroup>
            <input
              id="playlist-name"
              type="text"
              maxLength="100"
              value={name}
              onChange={e => handleChange('name', e.target.value)}
            />
            <InputGroupAddon>{name.length}/100</InputGroupAddon>
          </InputGroup>
        </label>
      </FormGroup>
      <FormGroup>
        <label htmlFor="playlist-description">Description
          <InputGroup>
            <textarea
              id="playlist-description"
              rows={3}
              maxLength="300"
              placeholder="Give your playlist a description."
              value={description}
              onChange={e => handleChange('description', e.target.value)}
            />
            <InputGroupAddon>
              {description.length}/300
            </InputGroupAddon>
          </InputGroup>
        </label>
      </FormGroup>
      <FormGroup number>
        <label htmlFor="playlist-number-of-tracks">Number of Tracks
          <input
            id="playlist-number-of-tracks"
            type="number"
            className={`${numberOfTracks < 1 || numberOfTracks > 50 ? 'danger' : ''}`}
            min={1}
            max={50}
            value={numberOfTracks}
            onChange={e => handleChange('numberOfTracks', e.target.value)}
          />
          {
            (numberOfTracks < 1 || numberOfTracks > 50)
            && <DangerInfo>Number of tracks must be between 1  and 50.</DangerInfo>
          }
        </label>
      </FormGroup>
      <FormButton>
        <button type="submit">Create</button>
      </FormButton>
    </form>
  </PlaylistContainer>
);

export default PlaylistForm;
