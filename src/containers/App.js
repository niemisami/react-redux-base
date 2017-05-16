import React, { PropTypes } from 'react';
import Header from './Header';

const App = ({ children }) => (
  <div className="site-container">
    <Header />
    {children}
  </div>
)

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App
