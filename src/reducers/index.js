import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth, * as fromAuth from './authReducer';

const rootReducer = combineReducers(
  {
    auth,
    routing: routerReducer
  }
);

export default rootReducer;
