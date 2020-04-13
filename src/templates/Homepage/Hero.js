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
import { BlockReveal } from '../../components/Animation'
import { Button } from '../../components'

const HeroContainer = styled(Row)`
  ${space}
  position: relative;
  background-position: center center;
  background-size: cover;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.greyBlue}
`
const RoundedImg = styled(Col)`
  background-image: url('/img/lifting-weight-nike.jpg');
  background-size:cover;
  background-position: center;
  border-radius: 100px 0px;
  min-height:200px;
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
        <Dots />
        <TextContainer p={5} pb={'60px!important'} lgOffset={1} lg={5} md={12}>
          <H3 color={'black'} m={0} textAlign={['center', 'center', 'left']}> {hero.title} </H3>
          <Body1 maxWidth={['100%']} textAlign={['center', 'center', 'left']}>
            Something about how dope and strong and big and weird KG is.
          </Body1>
          <Button color={'white'} width={['100%', '100%', 'auto', 'auto']} bg={'black'} mb={4}> Start training </Button> <br />
          <Button color={'black'} width={['100%', '100%', 'auto', 'auto']} bg={'white'}> Or tap to call </Button>
        </TextContainer>
        <RoundedImg className={'hidden-xs hidden-sm hidden-md'} lg={6} />
      </HeroContainer>
    )
  }
}

export default Hero
