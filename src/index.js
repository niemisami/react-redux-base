/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

 // Grab the state from a global variable injected into the server-generated HTML
const initialState = window.__INITIAL_STATE__
// Allow the passed state to be garbage-collected
delete window.__INITIAL_STATE__
const store = configureStore(initialState);


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);