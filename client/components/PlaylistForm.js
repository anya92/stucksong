import React from 'react';
import { Link } from 'react-router-dom';

import {
  PlaylistContainer,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  DangerInfo,
  FormButton,
} from '../styles/playlist';

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
        <label>Name</label>
        <InputGroup>
          <input 
            type="text"
            maxLength="100"
            value={name}
            onChange={e => handleChange('name', e.target.value)}
          />
          <InputGroupAddon>{name.length}/100</InputGroupAddon>
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <label>Description</label>
        <InputGroup>
          <textarea
            rows={3}
            maxLength="300"
            placeholder="Give your playlist a description."
            value={description}
            onChange={e => handleChange('description', e.target.value)}
          />
          <InputGroupAddon>{description.length}/300</InputGroupAddon>
        </InputGroup>
      </FormGroup>
      <FormGroup number>
        <label>Number of Tracks</label>
        <input
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
      </FormGroup>
      <FormButton>
        <button type="submit">Create</button>
      </FormButton>
    </form>
  </PlaylistContainer>
);

export default PlaylistForm;
