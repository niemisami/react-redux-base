import { browserHistory } from 'react-router';
import * as types from './actionTypes';
import { displaySnackbar } from './uiActions'

export const hasUserAuthenticated = () => dispatch => {
  const userStorage = localStorage.getItem('userId');
  // TODO: fetch data from the server
  if (userStorage && typeof userStorage === 'string') {
    dispatch({
      type: types.LOGIN_SUCCESS,
      user: {
        id: '1',
        name: 'Sami Nieminen',
        profilePicture: 'upcomingProfilePicturePath'
      }
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
    user: {
      id: '1',
      name: 'Sami Nieminen',
      profilePicture: 'upcomingProfilePicturePath'
    }
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
