import { combineReducers } from 'redux';
import counter from './counterReducer';
import shop from './shopReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  counter,
  shop,
  routing: routerReducer
})

export default rootReducer;