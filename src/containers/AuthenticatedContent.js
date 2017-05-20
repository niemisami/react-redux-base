import React, { PropTypes } from 'react';
import { Router, browserHistory } from 'react-router';
import { connect } from 'react-redux'


class AuthenticatedContent extends React.Component {
  componentDidMount() {
    const { authenticated } = this.props;

    if (!authenticated) {
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)
      browserHistory.push('/login')
    }
  }

  render() {
    const { authenticated, children } = this.props;
    let content = {};
    if (authenticated) {
      content = children;
    } else {
      content = null;
    }
    return content;
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.

AuthenticatedContent.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  authenticated: state.auth.authenticated,
  currentURL: ownProps.location.pathname
})

export default connect(mapStateToProps)(AuthenticatedContent)
