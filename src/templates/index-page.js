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
  Row,
  Col
} from 'react-flexbox-grid'
import {
  color,
  space,
  width,
  fontSize,
  themeGet
} from 'styled-system'
import {
  media
} from '../../static/styles/breakpoints'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const HeroContainer = styled(Row)
`
  ${color}
  background-size: contain;
  min-height:100vh;
  background-image: url(${props => props.background});
  background-repeat:no-repeat;
  ${media.sm`background-position: top;`};
  ${media.md`background-position: right;`};
`
const Legend = styled(Col)
`
  ${color}
  ${space}
`
const dotStyle = {
  position: 'absolute',
  top: '-25%',
  right: '35%',
  zIndex: '-1'
}

const LegendWrapper = styled(Row)
`
  width: 100%;
  align-self: flex-end;
  height: 25vh;
  z-index: 1;
  position: relative;
`
const HeroTitle = styled(Col)
`
  ${space}
  align-self: flex-end;
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
    <HeroTitle p={[4, 4, 5]} xs={12} sm={10} md={9}>
      <ReactFitText>
        <h1>
          {hero.title.split(' ').slice(0, 2).join(' ')} <br />
          {hero.title.split(' ').slice(2, 4).join(' ')}
        </h1>
      </ReactFitText>
    </HeroTitle>
    <LegendWrapper>
      <Legend p={5} bg='accent' xs={7} />
      <PreviewCompatibleImage
        isFixed
        imageInfo={hero.dots__image}
        style={dotStyle}
      />
    </LegendWrapper>
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
              fixed(width: 200) {
                ...GatsbyImageSharpFixed
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