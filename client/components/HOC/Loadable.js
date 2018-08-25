import React from 'react';
import L from 'react-loadable';

const LoadingComponent = () => <div />;

const Loadable = opts => L({
  loading: LoadingComponent,
  // delay: 300,
  ...opts,
});

export default Loadable;
