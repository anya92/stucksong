import React from 'react';
import svgSrc from '../../assets/spotify.svg';

import {
  Container,
  Background,
  Title,
  Description,
  LinkWrapper,
} from '../../styles/home';

export default () => (
  <Container>
    <Background />
    <Title>
      stucksong
    </Title>
    <Description>
      Get your top tracks and artists <br />
      Create a playlist of your top songs
    </Description>
    <LinkWrapper>
      <a href="/auth/spotify">
        <img src={svgSrc} alt="spotify-logo" />
        Login with Spotify
      </a>
    </LinkWrapper>
  </Container>
);
