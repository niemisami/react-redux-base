import React, { PropTypes } from 'react';
// import Header from './common/Header';

const App = ({ children }) => (
  <div className="container-fluid">
    {children}
  </div>
)

App.propTypes = {
  children: PropTypes.shape.isRequired
};

export default App
