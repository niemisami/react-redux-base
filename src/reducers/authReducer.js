import * as types from '../actions/actionTypes';

const initialState = {
  user: {
    id: 'none',
    name: '',
    profilePicture: ''
  },
  authenticated: false
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        userId: 'none',
        
        user: action.user,
        authenticated: true
      })
    case types.LOGIN_FAIL:
    case types.REQUEST_LOGOUT:
    case types.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        userId: 'none',
        user: {
          id: 'none',
          name: '',
          profilePicture: ''
        },
        authenticated: false
      })
    case types.REQUEST_LOGIN:
    default:
      return state;
  }
}
