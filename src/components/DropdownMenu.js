import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const DropdownMenu = ({ title, mainRedirect, content }) => (

  <div className="dropdown nav-link">
    <Link to={mainRedirect} className="dropbtn ">{title}</Link>
    <div className="dropdown-content">
      {content.map(item => (
        <Link key={item.id} to={item.redirect}>{item.name}</Link>
      ))}
    </div>
  </div>

)

DropdownMenu.defaultProps = {
  mainRedirect: null
}

DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  mainRedirect: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    redirect: PropTypes.string.isRequired
  })).isRequired
}

export default DropdownMenu;
