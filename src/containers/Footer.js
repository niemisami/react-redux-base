import React from 'react'

const Footer = ({ siteContent }) => {
  return (

    <footer className="sticky-footer margin-clear">
      <div className="flex-column text-center margin-top-20">
        <p>FSOBP | 2017</p>
        <p><b>{siteContent.contacts}:</b></p>
        <p><a className="mail-link" href={'mailto:' + siteContent.contactInformation}>{siteContent.contactInformation}</a> | <a className="mail-link" href={'mailto:' + siteContent.contactInformationBpt}>{siteContent.contactInformationBpt}</a></p>
      </div>
    </footer>
  )
}


export default Footer;