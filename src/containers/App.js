import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Snackbar from '../components/Snackbar';

const App = ({ children }) => (
  <div className="app-container">
    {children}
    <Snackbar />
  </div>
)

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;

