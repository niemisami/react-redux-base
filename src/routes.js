import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import App from './components/App';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/nobout" component={HomePage} />
    </Route>
);