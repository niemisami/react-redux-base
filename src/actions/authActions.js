import { browserHistory } from 'react-router';
import * as types from './actionTypes';
import { displaySnackbar } from './uiActions'

export const hasUserAuthenticated = () => dispatch => {
  const userStorage = localStorage.getItem('userId');
  if (userStorage && typeof userStorage === 'string') {
    dispatch({
      type: types.LOGIN_SUCCESS,
      userId: userStorage,
      userName: 'dummy'
    })
  } else {
    dispatch({
      type: types.LOGIN_FAIL
    })
  }
}

export const login = userId => dispatch => {
  localStorage.setItem('userId', userId);
  browserHistory.replace('/');
  dispatch({
    type: types.LOGIN_SUCCESS,
    userId: userId,
    userName: 'dummy'
  })
  displaySnackbar('You have logged in!')(dispatch);
}


export const logout = () => dispatch => {
  localStorage.removeItem('userId');
  browserHistory.replace('/');
  dispatch({
    type: types.REQUEST_LOGOUT
  })
}
