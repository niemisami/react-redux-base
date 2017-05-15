import React from 'react';
import { Route, IndexRoute } from 'react-router';
import BeerPong from './containers/BeerPong';
import AuthenticatedContent from './containers/AuthenticatedContent';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import App from './containers/App';


export default (
    <Route component={App}>
        {/*<Route component={AuthenticatedContent}>*/}
            <Route path="/" component={BeerPong} />
        {/*</Route>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />*/}
    </Route>
);