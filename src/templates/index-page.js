import React from 'react'
import {
  Link,
  graphql
} from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Hero = styled.div `
  background-size: cover;
  min-height:100vh;
  background-position:right;
  background-image: url(${props => props.background});
  background-color:black;
  background-repeat:no-repeat;
`
export const IndexPageTemplate = ({
  hero
}) => (
  <Hero background={hero.image.childImageSharp ? hero.image.childImageSharp.fluid.src : hero.image}>
    <h1>{hero.title}</h1>
  </Hero>
)

const IndexPage = ({
  data
}) => {
  const {
    frontmatter
  } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        hero={frontmatter.hero}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql `
  query IndexPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        hero {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          blurbs {
            OT {
              title
              text
            }
          }
        }
      }
    }
  }

`