import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'

// Initial state is not currently used
const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  )

  return store;
}

export default configureStore;
