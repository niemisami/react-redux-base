import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import shop, * as fromShop from './shopReducer';
import auth, * as fromAuth from './authReducer';

const rootReducer = combineReducers({
  auth,
  shop,
  routing: routerReducer
});

export default rootReducer;