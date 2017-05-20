import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './authReducer';
import ui from './uiReducer';
import content from './contentReducer';

const rootReducer = combineReducers(
  {
    content,
    auth,
    ui,
    routing: routerReducer
  }
);

export default rootReducer;
