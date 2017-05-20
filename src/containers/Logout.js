import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions'


class Logout extends Component {


  componentWillMount() {

    if (!this.props.authenticated) {
      browserHistory.replace('/');
    } else {
      this.props.logout();
    }
  }

  render() {
    return (
      (this.props.authenticated ?
        <div>You have logged out</div>
        :
        null)
    )
  }
}


Logout.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

//
export default connect(mapStateToProps, { logout })(Logout);
