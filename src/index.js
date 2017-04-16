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
import { fetchProducts, fetchUsers } from './actions/shopActions';

const store = configureStore(initialState);

const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(fetchProducts());
// store.dispatch(fetchUsers());

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);