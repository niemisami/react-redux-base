import * as types from './actionTypes';

const timeoutLong = 3000;
// const timeoutShort = 1000;

export const displaySnackbar = message => dispatch => {
  dispatch(toggleSnackbar(message))
  setTimeout(() => dispatch(toggleSnackbar(message)), timeoutLong);
}

const toggleSnackbar = message => ({
  type: types.TOGGLE_SNACKBAR,
  snackbarMessage: message
});

