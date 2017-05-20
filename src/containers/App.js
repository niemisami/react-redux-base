import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Snackbar from '../components/Snackbar';

const App = ({ children, authenticated }) => (
  <div className="app-container">
    <Header
      authenticated={authenticated}
    />
    {children}
    <Snackbar />
  </div>
)

App.propTypes = {
  children: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired
};


const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})


export default connect(mapStateToProps)(App);

