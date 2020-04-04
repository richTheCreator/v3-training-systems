import React from 'react'
import {
  // Link,
  graphql
} from 'gatsby'
import Layout from '../components/Layout'
import TextHero from '../components/TextHero'
import Program from './TrainingServices/Program'
import Comparison from './TrainingServices/Comparisson'
import ForYou from './TrainingServices/ForYou'
import Pricing from './TrainingServices/Pricing'

const TrainingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TextHero data={frontmatter.hero} fontSize='42px' />
      <Program program={frontmatter.program} />
      <Comparison comparison={frontmatter.comparison} />
      <ForYou foryou={frontmatter.foryou} />
      <Pricing pricing={frontmatter.pricing} guarantee={frontmatter.guarantee} />
    </Layout>
  )
}

export default TrainingPage

export const pageQuery = graphql`
  query TrainingPage {
    markdownRemark(frontmatter: { templateKey: { eq: "training-page" } }) {
      frontmatter {
        hero {
          title
          button_text
          bg__image {
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
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          plans {
            plan {
              main
              callout
              title
              price
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
