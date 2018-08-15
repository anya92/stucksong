import React from 'react';

import { InfoContainer } from '../styles/info';

const NoData = () => (
  <InfoContainer>
    <h1>
      You haven't been listening to music lately, have you?
      <span role="img" aria-label="thinking-emoji">🤔</span>
    </h1>
    <h2>Please try again later.</h2>
  </InfoContainer>
);

export default NoData;
