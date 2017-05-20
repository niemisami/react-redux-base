# Sami Nieminen's portfolio website
Using [react-redux-base](https://github.com/niemisami/react-redux-base) repo as the base for the site.

#Updates:

* 19.5. Client side authentication
	- Login/logout action
	- Store `userId`cookie in browser
	- TODO: connect to the backend	
* 20.5. Snackbar 
  - Display short messages throughout the application to the user
  - Snackbar's state is handled in `uiActions` and `uiReducer`
  - `Snackbar` is defined in `app.js` and used in `containers/logout.js`
