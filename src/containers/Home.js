import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import siteContents from '../siteContents-fi.json';
import siteContentsEn from '../siteContents-en.json';


const languages = [
  {
    text: 'FI',
    countryCode: 'fi',
    isSelected: true
  },
  {
    text: 'EN',
    countryCode: 'en',
    isSelected: false
  }
]

class Home extends React.Component {


  constructor(props) {
    super(props)

    const siteTexts = siteContents;
    this.state = {
      infoVisible: true,
      siteTexts,
      endDate: new Date(siteTexts.endDate),
      languages
    }
    this.onTimeZero = this.onTimeZero.bind(this);
    this.onLanguageChanged = this.onLanguageChanged.bind(this);
  }

  componentWillMount() {

    if (this.state.endDate.getTime() - new Date().getTime() < 0) {
      this.setState({ infoVisible: true });
    }
  }

  componentDidMount() {

  }

  onTimeZero = () => {
    this.setState({
      infoVisible: true
    })
  }

  onLanguageChanged = (language) => {
    let translate = false;
    if (language.countryCode === 'en') {
      translate = true;
    }

    const newLanguages = languages.map(lang => {
      if (lang.countryCode === language.countryCode) {
        lang.isSelected = true;
        return lang;
      } else {
        lang.isSelected = false;
        return lang;
      }
    })

    let siteTexts = {};
    if (translate) {
      siteTexts = JSON.parse(JSON.stringify(siteContentsEn))
    } else {
      siteTexts = JSON.parse(JSON.stringify(siteContents))
    }
    this.setState({
      languages: newLanguages,
      siteTexts: siteTexts
    });
  }


  render() {

    const { navItems, bodyText, organizers, contacts } = this.state.siteTexts;

    const mainPage =
      <div className="page-wrapper container-fluid text-center line-height-high">
        <div className="row center-xs" >
          <div className="col-sm-8 col-md-6">
            <Link to="/"><img className="img img-responsive margin-auto margin-2" alt="FSOBP" src="public/images/fsobp_logo_border_500.png" /></Link>
            <h1 className="text-center margin-1">Finnish Series of Beer Pong 2017</h1>
            {bodyText.map((paragraph, index) => (
              <div
                key={index}
                className="text-left">
                <p>{paragraph}</p>
                {index === bodyText.length - 1 ? '' : <hr />}
              </div>
            ))}
            <div className="row center-xs margin-top-2">
              <div className="text-center">
                <h3 className="title">{organizers}</h3>
                <div className="flex-container">
                  {/*Aalto Beer Pong*/}
                  <div className="flex-column">
                    <a className=" margin-1" href={this.state.siteTexts.abpLink} target="_blank">
                      <img className="bp-images" src="public/images/aalto_logo_500.png" />
                    </a>
                  </div>
                  <div className="flex-column">
                    <a className="margin-1" href={this.state.siteTexts.bptLink} target="_blank">
                      <img className="bp-images" src="public/images/bpt_logo.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >

    return (
      <div className="full-height">
        <div className="body-container">
          <Header navItems={navItems} languages={languages} onLanguageChanged={this.onLanguageChanged} />
          {mainPage}
          <Footer siteContent={this.state.siteTexts} />
        </div>
      </div>
    )
  }
}

export default Home;
