import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth, * as fromAuth from './authReducer';
import ui from './uiReducer';

const rootReducer = combineReducers(
  {
    auth,
    ui,
    routing: routerReducer
  }
);

export default rootReducer;
