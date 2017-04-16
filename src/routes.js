import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MordorMarket from './containers/MordorMarket';
import App from './containers/App';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={MordorMarket} />
    </Route>
);