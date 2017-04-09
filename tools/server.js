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
import counterApp from '../src/reducers';
import App from '../src/components/App';


// const favicon = require('serve-favicon');
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
// app.use(favicon(__dirname + '/assets/public/favicon.ico'));
app.use(favicon(path.join(__dirname, 'assets', 'public', 'favicon.ico')));

app.use(handleRender);

function handleRender(req, res) {


  const store = createStore(counterApp);

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  const preloadedState = store.getState();
  console.log("Server side" + preloadedState);

  res.send(renderFullPage(html, preloadedState));
}


function renderFullPage(html, preloadedState) {
  return `
  <!DOCTYPE html>
  < html lang= "en" >
    <head>
        <title>React Training</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">

    </head> 
    <body>
      <div id="app">${html}</div>
              <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
      <script src="/bundle.js"></script>
    </body>
  </html>
`
}

// app.get('*', function(req, res) {
//   res.sendFile(path.join( __dirname, '../src/index.html'));
// });

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});