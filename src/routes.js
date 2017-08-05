import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './containers/Home';
import AuthenticatedContent from './containers/AuthenticatedContent';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import App from './containers/App';


export default (
  <Route component={App}>
    {/* <Route component={AuthenticatedContent}>*/}
    <Route path="/" component={Home} />
    <Route path="/event" component={Home} />
    <Route path="/contacts" component={Home} />
    {/* </Route>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />*/}
  </Route>
);
