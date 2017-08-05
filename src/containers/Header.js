import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { onLanguageChanged, languages, navItems } = this.props;
    return (
      <div className="navbar-fsobp margin-clear">
        <div className="nav-container row middle-xs between-xs start-xs around-sm">
          <div className="col-xs-6 col-sm-3" >
            <ul className="list-inline">
              {navItems.map((item) => (
                <li key={item.text}><Link to={item.location} className="hvr-underline-reveal">{item.text}</Link></li>
              ))}
            </ul>
          </div>
          <div className="col-xs-6 col-sm-3 end-xs">
            {languages.map((language, index) => (
              <p
                key={language.countryCode}
                className={"language " + (language.isSelected && 'active')}
                onClick={() => onLanguageChanged(language)}
              >
                {language.text}
              </p>
            ))}
          </div>
        </div>

      </div>
    )
  }
}

Header.propTypes = {
  onLanguageChanged: PropTypes.func.isRequired,
  languages: PropTypes.array.isRequired,
  navItems: PropTypes.array.isRequired
}

export default Header;
