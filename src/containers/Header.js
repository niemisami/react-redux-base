import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import DropdownMenu from '../components/DropdownMenu';

const testMenuItems = [
  {
    id: 0,
    name: 'Profile',
    redirect: '/admin/profile'
  }, {
    id: 1,
    name: 'CMS',
    redirect: '/admin/cms'
  }, {
    id: 2,
    name: 'Statistics',
    redirect: '/admin/stats'
  }
]


const Header = ({ siteContent, authenticated, loaderVisible }) => (
  <div className="header">
    <div className="container">
      <div className="row between-xs top-xs">
        <div className="col-xs-4">
          {/*Display loader before content is loaded from the server*/}
          {loaderVisible ?
            <div id="loader" />
            :
            <p className="header-title">{siteContent.title}</p>
          }
        </div>
        <div className="col-xs-8 col-sm-8 end-xs navigation">
          <ul>
            {siteContent.content.map((navItem, index) => (
              <li key={index}>
                <a href={'/#' + navItem.title.toLowerCase()} className="nav-link">{navItem.title}</a>
              </li>
            ))}
            <li key="admin1">{
              authenticated &&
              <DropdownMenu
                title="Admin"
                mainRedirect="admin"
                content={testMenuItems}
              />
            }</li>
            <li key="auth1">{
              authenticated ?
                <Link to="/logout" className="nav-link active">Logout</Link>
                :
                <Link to="/login" className="nav-link" activeClassName="active">Login</Link>
            }</li>
          </ul>
        </div>

      </div>
    </div >
  </div >
)

Header.defaultProps = {
  siteContent: {},
  authenticated: false,
  loaderVisible: false
}

Header.propTypes = {
  siteContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    )
  }),
  authenticated: PropTypes.bool,
  loaderVisible: PropTypes.bool
};

export default Header;
