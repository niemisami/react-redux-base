import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


const Header = ({ authenticated, siteContent }) => (
  <div className="header">
    <div className="container">
      <div className="row between-xs top-xs">
        <div className="col-xs-4">
          <p className="header-title">{siteContent.title}</p>
        </div>
        <div className="col-xs-8 col-sm-8 end-xs navigation">
          <ul>
            {siteContent.content.map((navItem, index) => (
              <li key={index}><a href={'/#' + navItem.title} className="nav-link">{navItem.title}</a></li>
            ))}
            <li key="auth1">{
              authenticated ?
                <Link to="/logout" className="nav-link active">Logout</Link>
                :
                <Link to="/login" className="nav-link active">Login</Link>
            }</li>
          </ul>
        </div>

      </div>
    </div >
  </div >
)

Header.defaultProps = {
  siteContent: {},
  authenticated: false
}

Header.propTypes = {
  authenticated: PropTypes.bool,
  siteContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    )
  })
};

const mapStateToProps = state => ({
  siteContent: state.content.siteContent
});

export default connect(mapStateToProps)(Header);
