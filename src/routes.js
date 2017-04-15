import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MordorMarket from './components/MordorMarket';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import App from './components/App';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={MordorMarket} />
        <Route path="/about" component={AboutPage} />
    </Route>
);