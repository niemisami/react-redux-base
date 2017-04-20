import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { login, logout } from '../actions/authActions'
import { Router, browserHistory } from 'react-router';

class LoginPage extends React.Component {


  componentDidMount() {
    let authenticated = this.props.authenticated;
    let userId = this.props.userId;

    if (authenticated) {
      this.props.login(userId);
    }
  }

  render() {
    const {
        authenticated,
      login,
      logout
    } = this.props;

    return (
        <div className="form">
          <form className="">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p className="message">Already registered? <a onClick={() => console.log("Redirect to login view")}>Sign In</a></p>
          </form>
        </div>
    );
  }
}

LoginPage.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
  userId: state.auth.userId
})

export default connect(mapStateToProps, {
  login, logout
})(LoginPage);