import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO/SEO'
import useSiteMetadata from './SiteMetadata'

// test

const TemplateWrapper = ({ children }) => {
  const { menuLinks } = useSiteMetadata()
  return (
    <div>
      <SEO />
      <Navbar menuLinks={menuLinks} />
      <div style={{ paddingTop: '99px' }}>{children}</div>
      {/* <Footer /> */}
    </div>
  )
}

export default TemplateWrapper
