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
import Clients from './Homepage/Clients'

const TrainingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { edges } = data.clientImages

  return (
    <Layout>
      <TextHero data={frontmatter.hero} fontSize='32px' />
      <Program program={frontmatter.program} />
      <Comparison comparison={frontmatter.comparison} />
      <Pricing pricing={frontmatter.pricing} guarantee={frontmatter.guarantee} />
      <Clients clientImages={edges} />
      <ForYou foryou={frontmatter.foryou} />
    </Layout>
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
