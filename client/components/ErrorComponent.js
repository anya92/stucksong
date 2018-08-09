import React from 'react';
import { string } from 'prop-types';
import { ErrorContainer } from '../styles/error';

const ErrorComponent = ({ error }) => (
  <ErrorContainer>
    <h1>Error <span role="img" aria-label="sad-emoji">😞</span></h1>
    <h2>Please try again later.</h2>
    <p>Additional info: {error}</p>
  </ErrorContainer>
);

ErrorComponent.propTypes = {
  error: string.isRequired,
};

export default ErrorComponent;
