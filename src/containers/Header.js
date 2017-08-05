import React, { PropTypes } from 'react'

class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { onLanguageChanged, languages, navItems } = this.props;
    return (
      <div className="navbar-fsobp">
        <div className="nav-container">
          <ul className="list-inline">
            {navItems.map((item, index) => (
              <li key={index}><a className="active hvr-underline-reveal">{item}</a></li>
            ))}
          </ul>
          {languages.map((language, index) => (
            <p
              key={index}
              className={"language " + (language.isSelected ? "active" : "")}
              onClick={() => onLanguageChanged(language)}>
              {language.text}
            </p>
          ))}
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
