import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

import reducer from './reducers';
import App from './components/App';

const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxThunk)
);

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
