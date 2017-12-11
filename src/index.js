import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
global.Promise = require("bluebird")
import configureStore from './configureStore';
import App from './App';


const store = configureStore();
const root = document.getElementById('app');
const render = () => {
  const comp = (
    <Provider store={store}>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>
  );
  ReactDOM.render(comp, root);
};

render();

if (module.hot) {
  module.hot.accept('./App', render);
}
