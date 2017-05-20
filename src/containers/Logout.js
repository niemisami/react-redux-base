import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions'
import { displaySnackbar } from '../actions/uiActions'


class Logout extends Component {

  componentWillMount() {
    if (!this.props.authenticated) {
      browserHistory.replace('/');
    } else {
      this.props.displaySnackbar('You have logged out!');
      this.props.logout();
    }
  }

  // FIXME: there must be a better way to handle logout
  render() {
    return null
  }
}


Logout.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  displaySnackbar: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

//
export default connect(mapStateToProps, { logout, displaySnackbar })(Logout);
