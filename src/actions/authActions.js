import cookie from 'react-cookie';
import { browserHistory } from 'react-router';
import * as types from './actionTypes';
import { displaySnackbar } from './uiActions'

export const hasUserAuthenticated = () => dispatch => {
  const userCookie = cookie.load('userId');
  if (userCookie && typeof userCookie === 'string') {
    dispatch({
      type: types.LOGIN_SUCCESS,
      userId: userCookie,
      userName: 'dummy'
    })
  } else {
    dispatch({
      type: types.LOGIN_FAIL
    })
  }
}

export const login = userId => dispatch => {
  cookie.save('userId', userId, { path: '/' });
  browserHistory.replace('/');
  dispatch({
    type: types.LOGIN_SUCCESS,
    userId: userId,
    userName: 'dummy'
  })
  displaySnackbar('You have logged in!')(dispatch);
}


export const logout = () => dispatch => {
  cookie.remove('userId', { path: '/' });
  browserHistory.replace('/');
  dispatch({
    type: types.REQUEST_LOGOUT
  })
}
