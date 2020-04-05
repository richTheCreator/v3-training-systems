import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useChain } from 'react-spring'
import { Row, Col } from 'react-flexbox-grid'
import Bowser from 'bowser'
import { Outlined } from '../components/Typography'
import Button from '../components/Button'
import { BlockReveal } from '../components/Animation'

const Container = styled(Row)`
  justify-content:center;
  align-items:center;
  background-color: ${props => props.theme.colors.blackBlue};
  background-repeat:no-repeat;
  background-size:cover;
  height:100%;
  position:relative;
  padding: 4em 0em;
`
const Overlay = styled.div`
  background-size:cover;
  height:100%;
  position:absolute;
  width:75%;
  right:0px;
  background-repeat:no-repeat;
  background-position:center;
  background-image: url('/img/dots-overlay.png')
`

const Title = styled(Outlined)`
  color : transparent;
  text-align: center;
  margin-top : 24px;
  margin-bottom: 24px;
  width:100%;
`

// Need to rethink having this here vs updating the root H1
// const HeroTitle = styled.h1`
//   ${space}
//   ${fontSize}
//   font-size:calc(1.3rem + 2vw);
//   color: white;
//   margin-bottom: 20px;
//   line-height: 1.3em;
//   font-style: italic;
//   text-transform: uppercase;
//   white-space: pre-wrap;
//   font-weight: ${props => props.theme.fontWeights[2]};
//   letter-spacing: ${props => `${props.theme.letterSpacings[10]}px`};
// `
// Need to rethink having this here vs updating the root p
// const HeroSubtitle = styled.p`
//   ${space}
//   ${fontSize}
//   color: white;
//   line-height: 1.4em;
//   font-weight: 300;
//   max-width: 400px;
//   letter-spacing: 0.5px;
//   text-transform: none;
// `

const TextHero = ({ data, theme, fontSize }) => {
  const [browser, setBrowser] = useState('undefined')

  // animation configs
  const block1Ref = useRef()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const getBrowser = Bowser.getParser(window.navigator.userAgent)
      setBrowser(getBrowser)
    }
  }, [])

  return (
    <>
    {browser && (
      <Container
        background={
          data.bg__image.childImageSharp
            ? data.bg__image.childImageSharp.fluid.src
            : data.bg__image
        }
      >
        <Col xs={10} lg={6} style={{ zIndex: 1, justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
          <BlockReveal ref={block1Ref} bgColor="white">
            <Title fontSize={fontSize} outlineColor={'white'}>
              {data.title}
            </Title>
          </BlockReveal>
          <Button>
            {data.button_text}
          </Button>
        </Col>
        <Overlay/>
      </Container>

    )
    }
    </>

  )
}

export default TextHero
