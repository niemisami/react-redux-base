import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';


// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );
}