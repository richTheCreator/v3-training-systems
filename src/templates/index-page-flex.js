// import React from 'react'
// import {
//   Link,
//   graphql
// } from 'gatsby'
// import styled from 'styled-components'
// import { Grid, Row, Col } from 'react-flexbox-grid'
// import ReactFitText from 'react-fittext'
// import Colors from '../../static/styles/Colors'
// import Sizes from '../../static/styles/Sizes'
// import Layout from '../components/Layout'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
//
// const HeroContainer = styled(Row)`
//   background-size: contain;
//   min-height:100vh;
//   background-color:${Colors.black};
//   background-image: url(${props => props.background});
//   background-position:right;
//   background-repeat:no-repeat;
// `
// const Legend = styled(Col)`
//   height:25vh;
//   background-color:${Colors.white};
//   align-self:flex-end;
//   z-index:1;
//   padding:${Sizes.lg};
// `
// const HeroTitle = styled(Col)`
//   padding:${props => props.xs ? Sizes.lg : Sizes.sm};
//   align-self:flex-end;
// `
//
// export const IndexPageTemplate = ({
//   hero
// }) => (
//   <HeroContainer background={
//     hero.bg__image.childImageSharp ? hero.bg__image.childImageSharp.fluid.src : hero.bg__image} middle='xs'>
//     <HeroTitle xs={12} sm={8}>
//       <ReactFitText>
//         <h1>
//           {hero.title}
//         </h1>
//       </ReactFitText>
//     </HeroTitle>
//
//     <Legend xs={7}>
//       <PreviewCompatibleImage imageInfo={hero.dots__image} />
//     </Legend>
//   </HeroContainer>
// )
//
// const IndexPage = ({
//   data
// }) => {
//   const {
//     frontmatter
//   } = data.markdownRemark
//
//   return (
//     <Layout>
//       <IndexPageTemplate
//         hero={frontmatter.hero}
//       />
//     </Layout>
//   )
// }
//
// export default IndexPage
//
// export const pageQuery = graphql `
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
//       frontmatter {
//         hero {
//           title
//           bg__image {
//             childImageSharp {
//               fluid(maxWidth: 2048, quality: 100) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           dots__image {
//             childImageSharp {
//               fluid(maxWidth: 2048, quality: 100) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           blurbs {
//             OT {
//               title
//               text
//             }
//           }
//         }
//       }
//     }
//   }
// `
