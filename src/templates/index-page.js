import React from 'react'
import {
  graphql
} from 'gatsby'
import Layout from '../components/Layout'
import Hero from './Homepage/Hero'
import About from './Homepage/About'
import Services from './Homepage/Services'
import Clients from './Homepage/Clients'
import {
  Banner
} from '../components'

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { edges } = data.clientImages

  return (
    <>
      <Hero hero={frontmatter.hero}/>
      <Services services={frontmatter.services} hero={frontmatter.hero}/>
      <About about={frontmatter.about}/>
      <Clients clientImages={edges}/>
      <Banner banner={frontmatter.banner}/>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomePage {
    clientImages: allFile(filter:  { absolutePath: { regex: "/clients/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        hero {
          subtitle
          title
          dots__image {
            childImageSharp {
              fixed(width: 200, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          blurbs {
            pkg {
              title
              text
              url
            }
          }
        }
        about {
          title
          bio
          callouts {
            callout {
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
        services {
          title
          summary
          programs {
            program {
              title
              desc
              length
              env
              skill
              button_text
              button_url
              button_disabled
              button_subtext
              badge {
                promo
                text
              }
              service__image {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
// { lable: Program, name: program, widget: list, fields: [{ label: Service, name: service, widget: object, fields: [{ label: Title, name: title, widget: text }, { label: Title, name: desc, widget: text }] }] }
