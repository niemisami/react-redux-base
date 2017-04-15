import * as types from '../actions/actionTypes';


export default function counterReducer(state, action) {

  switch (action.type) {
    case types.INCREMENT_VALUE:
      return state + 1
    case types.DECREMENT_VALUE:
      return state - 1
    default:
      return state
  }
}