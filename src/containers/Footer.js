import React from 'react'

const Footer = ({ siteContent }) => {
  return (

    <footer className="sticky-footer">
      <div className="flex-column text-center padding-2">
        <p>FSOBP | 2017</p>
        <p><b>{siteContent.contacts}:</b></p>
        <p><a className="mail-link" href={'mailto:' + siteContent.contactInformation}>{siteContent.contactInformation}</a></p>
      </div>
    </footer>
  )
}


export default Footer;