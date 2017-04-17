import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

// Initial state is not currently used
const configureStore = (initialState) => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )

    return store;
}

export default configureStore;