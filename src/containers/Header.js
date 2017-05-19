import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="row between-xs top-xs">
        <div className="col-xs-5 col-sm-4">
          <p className="header-title">Sami Nieminen</p>
        </div>
        <div className="col-xs-6 col-sm-8 end-xs navigation">
          <ul>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#contacts" className="nav-link">Contacts</a></li>

          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Header;
