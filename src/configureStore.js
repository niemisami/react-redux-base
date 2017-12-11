import throttle from 'lodash/throttle';
import { loadState, saveState } from './utils/localStorage';
import { createStore } from 'redux';
import appReducer from './reducers';

const configureStore = () => {

  const persistedState = loadState();
  const store = createStore(
    appReducer,
    persistedState
  );

  // Each time state changes save it to the local storage only once a second
  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));
  return store;
}
export default configureStore;

