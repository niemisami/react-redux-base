/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';
import { hasUserAuthenticated } from './actions/authActions'

const store = configureStore(initialState);

const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(hasUserAuthenticated());

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);