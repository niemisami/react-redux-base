import {combineReducers} from 'redux';
// import cats from './catReducer';
import hobbies from './hobbyReducer';
import counter from './counterReducer';

const rootReducer = combineReducers({
  // short hand property names
//   cats 
hobbies,
  counter   
})

export default rootReducer;