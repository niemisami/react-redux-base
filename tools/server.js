import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import favicon from 'serve-favicon';

/* eslint-disable no-console */
import { createStore } from 'redux';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server'
import configureStore from '../src/store/configureStore'
import App from '../src/components/App';
import indexTemplate from './assets/indexTemplate'


import { Router, browserHistory, match, RouterContext } from 'react-router';
import routes from '../src/routes';

// const favicon = require('serve-favicon');
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(favicon(path.join(__dirname, 'assets', 'public', 'favicon.ico')));
app.use(express.static(path.resolve(__dirname, '../src')));
app.use("/styles", express.static(path.join(__dirname, '..', 'src', 'styles')));

app.get("*", handleRender);

function handleRender(req, res) {



  match({ routes: routes, location: req.url }, function (error, redirectLocation, renderProps) {

    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {

      const title = "niemisami-redux"

      res.send(indexTemplate({
        title: title
      }));


    } else {
      res.status(404).send('Not found')
    }
  });
}

function stateJSONToString(jsonState) {
  return JSON.stringify(jsonState).replace(/</g, '\\u003c')
}

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});