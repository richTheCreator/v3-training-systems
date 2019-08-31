import React, { Component, useRef } from 'react'
import styled from 'styled-components'
import { useSpring, useTrail, useChain, config, animated } from 'react-spring'
import { Row, Col } from 'react-flexbox-grid'
import {
  color,
  space,
  backgroundPosition,
  justifyContent,
  flexDirection,
  fontWeight,
  fontSize,
  minHeight,
  height,
  alignItems,
  backgroundSize,
  letterSpacing,
  width,
  zIndex,
  gridArea
} from 'styled-system'
import Bowser from 'bowser'
import { Subtitle1, Body2, Button, Outlined } from '../../components/Typography'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import { BlockReveal } from '../../components/Animation'

const dotStyle = {
  position: 'absolute',
  top: '-25%',
  right: '-10%',
  zIndex: '-1'
}

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  height: 100vh;
`

const LeftHero = styled.div`
  ${gridArea}
  align-self:center;
`
const leftLG = `1 / 1 / 5 / 7`
const leftSM = `1 / 1 / 5 / 13`

const RightHero = styled.div`
  ${zIndex}
  ${color}
  ${backgroundPosition}
  ${space}
  ${backgroundSize}
  ${minHeight}
  ${gridArea}
  background-image: url(${props => props.background});
  background-repeat:no-repeat;
`
const rtLG =  `1 / 7 / 6 / 13`
const rtSM = `1 / 1 / 7 / 13`

const BottomBar = styled.div`
${gridArea}
${zIndex}
background-color: black
`

const btLG = `5 / 1 / 7 / 13`
const btSM = `5 / 1 / 7 / 11`

// const HeroContainer = styled(Row)
// `
//   ${color}
//   ${backgroundPosition}
//   ${space}
//   ${backgroundSize}
//   ${minHeight}
//   background-image: url(${props => props.background});
//   background-repeat:no-repeat;
// `

const Legend = styled(Col)
`
  ${color}
  ${space}
  max-width:1000px;
  position:relative;
  transform-origin: left;
`
const Type_Title = styled.h1`
${space}
${color}
${fontSize}
letter-spacing:-2px;
line-height:100%;
font-weight: 800;
font-style: italic;
display:inline-block;
`
const titleLG = `calc(8px + (80 - 8) * ((100vw - 300px) / (1600 - 300)));`
const titleSM = `calc(32px + (80 - 8) * ((100vw - 300px) / (1600 - 300)));`

const LegendItems = styled(Row)
`
  ${flexDirection}
  ${justifyContent}
  ${alignItems}
  ${height}
  width:100%
`

const LegendWrapper = styled(Row)
`
${justifyContent}
  width: 100%;
  height:100%;
  align-self: flex-end;
  z-index: 1;
  position: relative;
`

const HeroTitle = styled(Col)
`
  ${space}
`

const LegendItemsWidth = styled.div
`
  ${width}
`

const Arrow = styled.svg`
  ${color}
  height: 24px;
  width: 24px;
`
const ServiceItem = ({ title, text, style }) => (
  <Col className='hidden-xs hidden-sm' style={style} xs>
    <Subtitle1 color='white'>{title} </Subtitle1>
    <Body2 color='darkGrey'> {text} </Body2>
    <Button> VIEW </Button>
  </Col>
)

const ServiceItemM = ({ title, style }) => (
  <Row middle='xs' style={{ ...style, width: '100%', textTransform: 'uppercase' }} between='xs' className='hidden-xl hidden-lg hidden-md'>
    <Subtitle1 pr={3} color='white'> {title} </Subtitle1>
    <Arrow>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.49 31.49'>
        <path d='M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z' fill='#FF5353' />
      </svg>
    </Arrow>
  </Row>
)

// HOC to forwardRef to components from Libs
function makeClassComponent (WrappedComponent) {
  return class extends React.Component {
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
}

const AnimatedLegend = animated(makeClassComponent(Legend))
const AnimatedServiceItem = animated(makeClassComponent(ServiceItem))
const AnimatedServiceItemM = animated(makeClassComponent(ServiceItemM))

const AnimatedTitles = ({ hero, browser }) => {
  // animation configs
  // const block1Ref = useRef()
  const block2Ref = useRef()

  const legendWidthRef = useRef()
  const legendWidth = useSpring({
    from: { opacity: 0, transform: 'scaleX(0)' },
    to: { opacity: 1, transform: 'scaleX(1)' },
    config: { duration: 500 },
    ref: legendWidthRef
  })

  const trailRef = useRef()
  const trail = useTrail(hero.blurbs.length, {
    from: { opacity: 0, transform: 'translate3d(0,100px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: config.slow,
    // delay: 200,
    ref: trailRef
  })

  useChain([ block2Ref, legendWidthRef, trailRef ], [0, 0.7, 1.3, 1.7])

  return (
    <>
      <LeftHero gridArea={[leftSM,leftSM,leftLG]}>
        <HeroTitle p={[3, 4, 5, 7]} xs={12}>
          <BlockReveal ref={block2Ref} delay={300} bgColor={'#FF5353'}>
            <Type_Title fontSize={[titleSM, titleSM, titleLG]} m={0} color={['white', 'white', 'black']}>
              {hero.title}
            </Type_Title>
          </BlockReveal>
        </HeroTitle>
      </LeftHero>
      <RightHero
        zIndex={[0,0,0,0,2]}
        gridArea={[rtSM, rtSM, rtLG]}
        backgroundSize={'cover'}
        backgroundPosition={['center', 'center', 'right', 'right']}
        background={
          hero.bg__image.childImageSharp
            ? hero.bg__image.childImageSharp.fluid.src
            : hero.bg__image}
      />
      <BottomBar gridArea={[btSM,btSM, btLG]}>
        <LegendWrapper justifyContent={'flex-start'}>
          <AnimatedLegend native style={legendWidth} p={[4, 5, 6]} xs={12} sm={12} xl={6}>
            <LegendItems
              height={0}
              alignItems={['flex-start', 'flex-start', 'center', 'center']}
              justifyContent={'space-around'}
            >
              {trail.map((props, index) =>
                <LegendItemsWidth native width={['100%', '100%', 'auto', 'auto']}>
                  <AnimatedServiceItem
                    style={props}
                    title={hero.blurbs[index].pkg.title}
                    text={hero.blurbs[index].pkg.text}
                  />
                  <AnimatedServiceItemM
                    style={props}
                    title={hero.blurbs[index].pkg.title}
                  />
                </LegendItemsWidth>
              )}
            </LegendItems>
          </AnimatedLegend>
        </LegendWrapper>
      </BottomBar>
    </>
  )
}

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
        {this.state.browser !== undefined &&
          <AnimatedTitles hero={hero} browser={this.state.browser} />
        }
      </HeroContainer>
    )
  }
}

export default Hero

// <HeroContainer
//   minHeight={[2, 2, 1, 1]}
//   backgroundSize={'cover'}
//   backgroundPosition={['right', 'right', 'right', 'right']}
//   bg={'black'}
//   background={
//     hero.bg__image.childImageSharp
//       ? hero.bg__image.childImageSharp.fluid.src
//       : hero.bg__image}
// >
//   {this.state.browser !== undefined &&
//     <AnimatedTitles hero={hero} browser={this.state.browser} />
//   }
// </HeroContainer>
