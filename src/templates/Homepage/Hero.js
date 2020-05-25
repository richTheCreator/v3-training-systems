import React, { Component, useRef } from 'react'
import styled from 'styled-components'
import { useSpring, useTrail, useChain, config, animated } from 'react-spring'
import { Row, Col } from 'react-flexbox-grid'
import {
  space
} from 'styled-system'
import { Link } from 'gatsby'
import Bowser from 'bowser'
import { Body1, H3 } from '../../components/Typography'
import { SectionMax } from '../../components/Containers'
import { BlockReveal } from '../../components/Animation'
import { Button } from '../../components'

const HeroContainer = styled(Row)`
  ${space}
  background-position: center center;
  background-size: cover;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.greyBlue}
`
const RoundedImg = styled(Col)`
  background-image: url('/img/lifting-weight-nike.jpg');
  background-size:cover;
  background-position: center;
  border-radius:20px;
  min-height:360px;
`
const Dots = styled.div`
  background-image: url('/img/dots-overlay-tall.png');
  height:100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  width: 200px;
}
`

const TextContainer = styled(Col)`
  ${space}
  z-index:1;
  align-self:center;
`
class Hero extends Component {
  constructor (props) {
    super(props)
    this.state = {
      browser: undefined
    }
  }

  componentWillMount () {
    if (typeof window !== 'undefined') {
      const browser = Bowser.getParser(window.navigator.userAgent)
      this.setState({ browser })
      console.log('did', browser)
    }
  }

  render () {
    const { hero } = this.props
    return (
      <HeroContainer>
        <SectionMax m='auto!important' style={{ position: 'relative' }}>
          <Dots />
          <TextContainer p={5} lg={5} md={12} lgOffset={1}>
            <H3 color={'black'} m={0}> {hero.title} </H3>
            <Body1 maxWidth={['100%']} mb={4}>
              Choose a program that works for your lifestyle, environment, and goals.
            </Body1>
            <Row between='xs'>
              <Col xs={12} md={6}>
                <Button width={['100%']} mb={2} color={'white'} bg={'black'}> 💪Start training </Button>
              </Col>
              <Col xs={12} md={6}>
                <Button width={['100%']} color={'black'} bg={'white'}> 📱Or tap to call </Button>
              </Col>
            </Row>
          </TextContainer>
          <RoundedImg className={'hidden-xs hidden-sm hidden-md'} lg={6} />
        </SectionMax>
      </HeroContainer>
    )
  }
}

export default Hero
