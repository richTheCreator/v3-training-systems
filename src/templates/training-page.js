import React from 'react'
import {
  // Link,
  graphql
} from 'gatsby'
import Layout from '../components/Layout'
import TextHero from '../components/TextHero'
import Program from './TrainingServices/Program'
const TrainingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TextHero data={frontmatter.hero} />
      <Program program={frontmatter.program} />
    </Layout>
  )
}

export default TrainingPage

export const pageQuery = graphql`
  query TrainingPage {
    markdownRemark(frontmatter: { templateKey: { eq: "training-page" } }) {
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
        }
        program {
          service {
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
