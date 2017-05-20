import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Snackbar from '../components/Snackbar';

const App = ({ children, siteContent, authenticated, loaderVisible }) => (
  <div className="app-container">
    <Header
      siteContent={siteContent}
      authenticated={authenticated}
      loaderVisible={loaderVisible}
    />
    {children}
    <Snackbar />
  </div>
)


App.propTypes = {
  children: PropTypes.object.isRequired,
  siteContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    )
  }).isRequired,
  authenticated: PropTypes.bool.isRequired,
  loaderVisible: PropTypes.bool.isRequired
};


const mapStateToProps = state => ({
  siteContent: state.content.siteContent,
  authenticated: state.auth.authenticated,
  loaderVisible: state.ui.loaderVisible
})

export default connect(mapStateToProps)(App);

