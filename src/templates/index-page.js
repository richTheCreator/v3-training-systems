import React, {
  useContext
} from 'react'
import {
  // Link,
  graphql
} from 'gatsby'
import styled from 'styled-components'
import ReactFitText from 'react-fittext'
import {
  Flex,
  Box
} from '@rebass/grid'
import {
  color,
  space,
  width,
  themeGet
} from 'styled-system'
import {
  media
} from '../../static/styles/breakpoints'
import Layout from '../components/Layout'

console.log('color', color)

const HeroContainer = styled(Flex)
`
  background-size: contain;
  min-height:100vh;
  background-image: url(${props => props.background});
  background-repeat:no-repeat;
  ${media.sm`background-position: top;`};
  ${media.md`background-position: right;`};
`

const BlueBox = styled(Box)
`
  background-color:Blue;
  height:200px;
`

export const IndexPageTemplate = ({
  hero
}) => (
  <HeroContainer
    alignItems='center'
    background={
      hero.bg__image.childImageSharp ?
        hero.bg__image.childImageSharp.fluid.src :
        hero.bg__image}
    bg='black'
  >
    <Box width={[1, 1 , 1, 1 / 2]}>
      <ReactFitText>
        <h1>
          {hero.title}
        </h1>
      </ReactFitText>
    </Box>
  </HeroContainer>
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
          bg__image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          dots__image {
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