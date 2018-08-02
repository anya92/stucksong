import React from 'react';

import {
  Container,
  Background,
  Title,
  Description,
  Link,
} from '../styles/homePage';

export default () => (
  <Container>
    <Background />
    <Title>
      stucksong
    </Title>
    <Description>
      Get your top tracks and artists <br/> 
      Create a playlist of your top songs
    </Description>
    <Link>
      <a href="/auth/spotify">
      <i className="fa fa-spotify" aria-hidden="true" />Login with Spotify</a>
    </Link>
  </Container>
);
