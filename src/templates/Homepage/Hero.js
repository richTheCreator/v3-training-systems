import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useSpring, useTransition, useTrail, animated, useChain, config } from 'react-spring'
import { Row, Col } from 'react-flexbox-grid'
import {
  color,
  space,
  backgroundPosition,
  justifyContent,
  flexDirection,
  fontWeight,
  minHeight,
  height,
  alignItems,
  backgroundSize,
  letterSpacing,
  width
} from 'styled-system'
import Bowser from 'bowser'
import { Subtitle1, Body2, Button } from '../../components/Typography'
import { Overlay } from '../../components/Containers'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

const browser = Bowser.getParser(window.navigator.userAgent)

const HeroContainer = styled(Row)
`
  ${color}
  ${backgroundPosition}
  ${space}
  ${backgroundSize}
  ${minHeight}
  background-image: url(${props => props.background});
  background-repeat:no-repeat;
`

const Legend = styled(Col)
`
  ${color}
  ${space}
  max-width:1000px;
  position:relative
`
const ServiceItem = ({ title, text, style }) => (
  <Col className='hidden-xs hidden-sm' style={style} xs>
    <Subtitle1 color='black'>{title} </Subtitle1>
    <Body2 color='darkGrey'> {text} </Body2>
    <Button> VIEW </Button>
  </Col>
)

const ServiceItemM = ({ title, style }) => (
  <Row middle='xs' style={{ ...style, width: '100%', textTransform: 'uppercase' }} between='xs' className='hidden-xl hidden-lg hidden-md'>
    <Subtitle1 pr={3} color='darkGrey'> {title} </Subtitle1>
    <Ico_Arrow>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.49 31.49'>
        <path d='M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z' fill='#FF5353' />
      </svg>
    </Ico_Arrow>
  </Row>
)

const Type_SubTitle = styled(animated.p)`
  ${space}
  ${fontWeight}
  ${color}
  ${letterSpacing}
  text-align: center;
  font-size: calc(18px + (30 - 18) * ((100vw - 300px) / (1600 - 300)));
  font-style: italic;
  display:inline-block;
  min-width:10px;
`

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
const AnimatedSubtitle = animated(makeClassComponent(Type_SubTitle))

const dotStyle = {
  position: 'absolute',
  top: '-25%',
  right: '-10%',
  zIndex: '-1'
}

const outlinedFont = {
  fontWeight: 800,
  fill: 'transparent',
  stroke: 'white',
  fontStyle: 'italic',
  strokeWidth: '.3px',
  display: 'block',
  maxWidth: '1200px',
  margin: 'auto',
  strokeDasharray: browser.isBrowser('Safari') ? 1000 : 500
}

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
  align-self: flex-end;
  z-index: 1;
  position: relative;
`

const HeroTitle = styled(Col)
`
  ${space}
  align-self: flex-end;
`
const LegendItemsWidth = styled.div
`
  ${width}
`

const Ico_Arrow = styled.svg`
  ${color}
  height: 24px;
  width: 24px;
`

const AnimatedTitles = ({ hero }) => {
  // animation configs
  const dashRef = useRef()
  const dash = useSpring({
    from: { dash: browser.isBrowser('Safari') ? 1000 : 500 },
    to: { dash: browser.isBrowser('Safari') ? 0 : 430 },
    config: {duration: 1200},
    delay: 500,
    ref: dashRef
  })

  const splitSub = hero.subtitle.split(/(\s+)/)
  const fadeInRef = useRef()
  const fadeIn = useTrail(splitSub.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.default,
    ref: fadeInRef
  })

  const legendWidthRef = useRef()
  const legendWidth = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
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

  useChain([fadeInRef, legendWidthRef, trailRef, dashRef], [0, 0, 0.3, 1])

  return (
    <Overlay xs>
      <HeroTitle p={[0, 4, 5, 7]} xs={12}>
        <Row style={{ justifyContent: 'center' }}>
          {fadeIn.map((props, index) =>
            <AnimatedSubtitle native style={props} mb={4} color='white' fontWeight={3} letterSpacing={9}>
              {splitSub[index]}
            </AnimatedSubtitle>
          )
          }
        </Row>
        <animated.svg native strokeDashoffset={dash.dash} style={outlinedFont} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20'>
          <text x='50%' y='60%' text-anchor='middle'>{hero.title}</text>
        </animated.svg>
      </HeroTitle>
      <LegendWrapper justifyContent={'flex-start'}>
        <AnimatedLegend native style={legendWidth} p={[4, 5, 6]} bg='white' md={10} sm={10} xs={10} >
          <LegendItems
            height={0}
            alignItems={['flex-start', 'flex-start', 'center', 'center']}
            flexDirection={['column', 'column', 'row', 'row']}
            justifyContent={'space-around'}
          >
            <PreviewCompatibleImage
              isFixed
              imageInfo={hero.dots__image}
              style={dotStyle}
            />
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
    </Overlay>
  )
}

const Hero = ({
  hero
}) => {
  return (
    <HeroContainer
      minHeight={[2, 2, 1, 1]}
      backgroundSize={'cover'}
      backgroundPosition={['top', 'top', 'right', 'right']}
      bg={'black'}
      background={
        hero.bg__image.childImageSharp
          ? hero.bg__image.childImageSharp.fluid.src
          : hero.bg__image}
    >
      <AnimatedTitles hero={hero} />
    </HeroContainer>

  )
}

export default Hero
