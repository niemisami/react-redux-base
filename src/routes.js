import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import AdminPanel from './containers/AdminPanel';
import AuthenticatedContent from './containers/AuthenticatedContent';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';


export default (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route component={AuthenticatedContent}>
      <Route path="/admin" component={AdminPanel} />
    </Route>
      <Route path="/login" component={Home} />
  </Route>
);
