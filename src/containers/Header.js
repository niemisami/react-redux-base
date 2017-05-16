import React from 'react';

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="row between-xs middle-xs">
        <div className="col-xs-3">
          <p className="header-title">Sami Nieminen</p>
        </div>
        <div className="col-xs-6 navigation">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contacts</a>
        </div>
      </div>
    </div>
  </div>
)

export default Header;
