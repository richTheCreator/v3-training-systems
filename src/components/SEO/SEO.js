import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Facebook from './Facebook'
import Twitter from './Twitter'

const SEO = ({ title, desc, banner, pathname, node }) => {
  const { site } = useStaticQuery(query)

  const {
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultBanner,
      siteLanguage,
      ogLanguage
    }
  } = site

  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    image: `${siteUrl}${banner || defaultBanner}`,
    url: `${siteUrl}${pathname || ''}`
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="V3-Training-Systems" content="V3 Fitness Training Programs" />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/img/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          href='/img/favicon-32x32.png'
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href='/img/favicon-16x16.png'
          sizes='16x16'
        />
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={'website'}
        url={seo.url}
        locale={ogLanguage}
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
      />
    </>
  )
}
export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl
        defaultTitle: title
        defaultDescription: description
        defaultBanner: banner
        siteLanguage
        ogLanguage
      }
    }
  }
`
