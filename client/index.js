import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import '../node_modules/modern-normalize/modern-normalize.css';
import './styles/style.css';

import reducer from './reducers';
import App from './components/App';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxThunk),
);
/* eslint-enable */

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'),
);
