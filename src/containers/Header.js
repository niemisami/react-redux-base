import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = ({ authenticated }) => (
  <div className="header">
    <div className="container">
      <div className="row between-xs top-xs">
        <div className="col-xs-4">
          <p className="header-title">Sami Nieminen</p>
        </div>
        <div className="col-xs-8 col-sm-8 end-xs navigation">
          <ul>
            <li><a href="/#about" className="nav-link">About</a></li>
            <li><a href="/#projects" className="nav-link">Projects</a></li>
            <li><a href="/#contacts" className="nav-link">Contacts</a></li>
            <li>
              {authenticated ?
                <Link to="/logout" className="nav-link active">Logout</Link>
                :
                <Link to="/login" className="nav-link active">Login</Link>
              }</li>
          </ul>
        </div>

      </div>
    </div>
  </div>
)

Header.defaultProps = {
  authenticated: false
}
Header.propTypes = {
  authenticated: PropTypes.bool
}

export default Header;
