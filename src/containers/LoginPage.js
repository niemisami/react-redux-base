import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions/authActions'
import LoginForm from '../components/LoginForm';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '', password: ''
      },
      errors: {}
    }
  }

  componentDidMount() {
    const { authenticated, userId } = this.props;
    if (authenticated) {
      this.props.login(userId);
    }
  }

  onAttemptLogin = event => {
    event.preventDefault();
    const { email, password } = this.state.user;
    if (email.length > 0 && password.length > 0) {
      this.props.login(this.state.user.email + this.state.user.password);
    }
  }

  onEmailChange = event => {
    const user = { ...this.state.user, email: event.target.value }
    this.setState({
      user
    });
  }
  onPasswordChange = event => {
    const user = { ...this.state.user, password: event.target.value }
    this.setState({
      user
    });
  }

  render() {
    const { user, errors } = this.state;

    return (
      <div className="login-page">
        <LoginForm
          user={user}
          errors={errors}
          onEmailChange={this.onEmailChange}
          onPasswordChange={this.onPasswordChange}
          onSubmit={this.onAttemptLogin}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  userId: state.auth.userId
})

export default connect(mapStateToProps, {
  login
})(LoginPage);
