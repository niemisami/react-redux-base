import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackConfig from '../webpack.config.dev';
import open from 'open';
import favicon from 'serve-favicon';


/**Authentication */
import passport from 'passport';
import session from 'express-session';
import redis from 'connect-redis';
import config from './config';

/* eslint-disable no-console */
import { createStore } from 'redux';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import configureStore from '../src/store/configureStore';
import App from '../src/containers/App';
import indexTemplate from './assets/indexTemplate';

import { Router, browserHistory, match, RouterContext } from 'react-router';
import routes from '../src/routes';




// const favicon = require('serve-favicon');
const port = 3000;
const app = express();
const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(favicon(path.join(__dirname, 'assets', 'public', 'favicon.png')));
app.use(express.static(path.resolve(__dirname, '../src')));
app.use("/styles", express.static(path.join(__dirname, '..', 'src', 'styles')));

/**Auth session and paths */
const RedisStore = redis(session);
app.use(session({
  store: new RedisStore({
    url: config.redisStore.url
  }),
  secret: config.redisStore.secret,
  resave: false,
  saveUnitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/user', function (req, res) {
  res.status(200).send({
    user:
    { name: "Pekkajäbä", balance: 10 }
  });
});


app.get('/wallofshame', function (req, res) {
  wallOfShamePromise.then(wallOfShameJson => {
    res.status(200).send(wallOfShameJson);
  })
  .catch(reason => {
    res.status(404).send(reason);
  }) 
});

let wallOfShamePromise = new Promise((resolve, reject) => {
  let shameJson = {
    users: [
      { id: 1, name: "Pekkajäbä", balance: -1 },
      { id: 2, name: "Typerä amkkijäbä", balance: -1 },
      { id: 3, name: "git ", balance: -1 },
      { id: 4, name: "Piita", balance: -200 },
      { id: 5, name: "Merijäbä", balance: -1 },
      { id: 6, name: "Vanha pieru", balance: -5 },
      { id: 7, name: "Julius", balance: -10 }
    ]
  }
  if (shameJson !== undefined && shameJson.users.length >= 0) {
    setTimeout(() => {
      resolve(shameJson);
    },2000)
  } else{
    reject({error: "Didn't find wall of shame"})
  }
})



app.get('/product', function (req, res) {
  res.status(200).send({
    products:
    [{ id: 1, name: "Kola", price: 1 },
    { id: 2, name: "ES", price: 1.5 },
    { id: 3, name: "Ohrapirtelö", price: 1.15 },
    { id: 4, name: "Omenamehu", price: 1.5 },
    { id: 5, name: "Tuplapatukka", price: 0.5 }]
  })
});

app.get('/product/:id', function (req, res) {
  res.status(200).send({
    product: { id: 1, name: "Kola", price: 1 }
  })
});

app.post('/purchase/:id', function (req, res) {
  res.status(200).send({
    purchase: {
      message: "purchase done"
    }
  });
});


app.get("*", handleRender);

function handleRender(req, res) {

  match({ routes: routes, location: req.url }, function (error, redirectLocation, renderProps) {

    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const title = "MordorMarket2.0"
      console.log(title);
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