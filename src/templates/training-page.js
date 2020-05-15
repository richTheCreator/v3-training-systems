import React from 'react'
import {
  // Link,
  graphql
} from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import TextHero from '../components/TextHero'
import Hero from './TrainingServices/Hero'
import Program from './TrainingServices/Program'
import Comparison from './TrainingServices/Comparisson'
import ForYou from './TrainingServices/ForYou'
import Pricing from './TrainingServices/Pricing'
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
      <Program program={frontmatter.program} />
      <Comparison comparison={frontmatter.comparison} />
      <Clients clientImages={edges} />
      <Pricing pricing={frontmatter.pricing} guarantee={frontmatter.guarantee} />
      <ForYou foryou={frontmatter.foryou} />
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
        foryou {
          title
          desc
          workout__image {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
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
