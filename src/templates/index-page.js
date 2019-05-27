import React from 'react'
import {
  // Link,
  graphql
} from 'gatsby'
import Layout from '../components/Layout'
import Hero from './Homepage/Hero'
import About from './Homepage/About'
import Services from './Homepage/Services'

const IndexPage = ({
  data
}) => {
  const {
    frontmatter
  } = data.markdownRemark

  return (
    <Layout>
      <Hero hero={frontmatter.hero} />
      <About about={frontmatter.about} />
      <Services services={frontmatter.services} hero={frontmatter.hero} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql `
  query HomePage {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        hero {
          subtitle
          title
          bg__image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          dots__image {
            childImageSharp {
              fixed(width: 200, height:200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          blurbs {
            pkg {
              title
              text
            }
            pkg {
              title
              text
            }
            pkg {
              title
              text
            }
          }
        }
        about {
          title
          bio
          callouts {
            first {
              count
              desc
            }
            second {
              count
              desc
            }
            third {
              count
              desc
            }
            fourth {
              count
              desc
            }
          }
          flex__image {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        services {
          OT {
            title
            desc
            includes
            service__image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
