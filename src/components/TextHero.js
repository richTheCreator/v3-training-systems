import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useChain } from 'react-spring'
import { Row, Col } from 'react-flexbox-grid'
import Bowser from 'bowser'
import { Outlined, H2, H5, Body2 } from '../components/Typography'
import Button from '../components/Button'
import { BlockReveal } from '../components/Animation'
import { space } from 'styled-system'

const Container = styled(Row)`
  justify-content:center;
  align-items:center;
  background-color: ${props => props.theme.colors.blackBlue};
  background-repeat:no-repeat;
  background-size:cover;
  height:100%;
  position:relative;
  padding: 4em 0em;
  border-image: linear-gradient(139deg, #d22030, #ff4b01, #c12127, #d22030) 3;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
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

const Title = styled(H2)`
  text-align : center;
  margin-top : 24px;
  margin-bottom: 24px;
  width:100%;
`

const CalloutContainer = styled(Col)`
  ${space}
  justify-content:center;
  align-items:center;
`
const Callout = ({ count, desc }) => (
  <CalloutContainer xs={4} md={2}>
    <H5 m={0} color={'white'} textAlign={'center'} letterSpacing={0}>
      {' '}
      {count}{' '}
    </H5>
    <Body2 color={'lightGrey'} mt={1} textAlign={'center'}> {desc} </Body2>
  </CalloutContainer>
)
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
            data.workout__image.childImageSharp
              ? data.workout__image.childImageSharp.fluid.src
              : data.workout__image
          }
        >
          <Col xs={12} style={{ zIndex: 1, justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <BlockReveal ref={block1Ref} bgColor="white">
              <Title color={'white'} fontStyle={'italic'}>
                {data.title}
              </Title>
            </BlockReveal>
          </Col>
          <Overlay/>
        </Container>

      )
      }
    </>

  )
}

export default TextHero
