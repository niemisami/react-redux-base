/*eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';
import { hasUserAuthenticated } from './actions/authActions'
import { fetchSiteContent } from './actions/contentActions';


const store = configureStore(initialState);

const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(fetchSiteContent());
store.dispatch(hasUserAuthenticated());

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
