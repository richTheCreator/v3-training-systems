import React from 'react'
import {
  // Link,
  graphql
} from 'gatsby'
import Hero from './TrainingServices/Hero'
import Program from './TrainingServices/Program'
import Comparison from './TrainingServices/Comparisson'
import { Banner } from '../components'
import HowItWorks from './TrainingServices/Howitworks'
import Footer from '../components/Footer'
import Clients from './Homepage/Clients'
import SEO from '../components/SEO/SEO'

const TrainingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { edges } = data.clientImages
  return (
    <>
      <SEO
        title={'Online Fitness Program'}
        desc={'1 or 3 month program tailored to you and your goals. Includes workout routines, nutrition plan, premium support, and more.'}
      />
      <Hero hero={frontmatter.hero} />
      <Program about={frontmatter.about} program={frontmatter.program} />
      <Comparison comparison={frontmatter.comparison} />
      <HowItWorks how={frontmatter.how} />
      <Clients clientImages={edges} />
      <Banner banner={frontmatter.banner} />
      <Footer/>
    </>
  )
}

export default TrainingPage

export const pageQuery = graphql`
  query TrainingPage {
    clientImages: allFile(filter:  { absolutePath: { regex: "/clients/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "training-page" } }) {
      html
      frontmatter {
        hero {
          title
          button_text
          workout__image {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        banner {
          title
          bg__img {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        pricing {
          title
          dots__image {
            childImageSharp {
              fixed(width: 200, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          plans {
            plan {
              main
              callout
              title
              price
              sku
              button_text
            }
          }
        }
        how {
          title
          desc
          steps {
            step {
              title
              desc
            }
          }
        }
        program {
          service {
            title
            desc
            service__image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        about {
          title
          desc
        }
        comparison {
          title
          workout__image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          items {
            item {
              title
              includes
            }
          }
        }
        guarantee {
          includes
        }
      }
    }
  }
`
