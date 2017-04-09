import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { browserHistory } from 'react-router';


export default function counterReducer(state = initialState.value, action) {

  switch (action.type) {
    case types.INCREMENT_VALUE:
      return state + 1
    case types.DECREMENT_VALUE:
      return state - 1
    default:
      return state
  }
}
