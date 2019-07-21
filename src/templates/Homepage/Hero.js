import React, { Component, useRef } from 'react'
import styled from 'styled-components'
import { useSpring, useTrail, useChain, config, animated } from 'react-spring'
import { Spring, Keyframes, animated as animated2 } from 'react-spring/renderprops'
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
import { Subtitle1, Body2, Button, H1, H4 } from '../../components/Typography'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import BlockReveal from '../../components/Animation'

const dotStyle = {
  position: 'absolute',
  top: '-25%',
  right: '-10%',
  zIndex: '-1'
}

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
  position:relative;
  transform-origin: left;
`

const Type_SubTitle = styled.p `
${space}
${fontWeight}
${color}
${letterSpacing}
-webkit-text-stroke-width: .8px;
-webkit-text-stroke-color: white;
text-align: center;
font-size: calc(18px + (40 - 18) * ((100vw - 300px) / (1600 - 300)));
font-style: italic;
display:inline-block;
min-width:10px;
`
const Type_Title = styled.h1`
${space}
${fontWeight}
${color}
letter-spacing:-5px;
line-height:100%;
text-align: center;
font-size: calc(60px + (120 - 24) * ((100vw - 300px) / (1600 - 300)));
font-style: italic;
display:inline-block;
min-width:10px;
`

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
const blockBase = {
  position: 'absolute',
  bottom: 0,
  top: 0,
  left: 0,
  right: 0
}

const Chain = Keyframes.Spring({
  // Slots can take arrays/chains,
  showAndHide: [{ x: 0, origin: 'left', from: { x: 1, origin: 'right' } }]

})

// const BlockRevealSpring = ({ bgColor, children, direction, delay }) => (
//   <div style={{ position: 'relative', display: 'inline-block' }}>
//     <Chain native state='showAndHide'>
//       {({ x, origin }) => (
//         <animated2.div
//           className='block-reveal-base'
//           style={{
//             backgroundColor: bgColor || '#EDEDED',
//             animationDelay: delay,
//             ...blockBase,
//             transformOrigin: origin.interpolate(origin => `${origin}`),
//             transform: x.interpolate(x => `scaleX(${x})`)
//           }} />
//       )}
//     </Chain>
//     {children}
//   </div>
// )

// const BlockRevealSpring = ({ bgColor, children, direction, delay }) => (
//   <div style={{ position: 'relative', display: 'inline-block' }}>
//     <animated.div
//       className='block-reveal-base'
//       style={{
//         ...blockAnim,
//         ...blockBase,
//         backgroundColor: bgColor || '#EDEDED',
//         animationDelay: delay
//       }}
//     />
//     {children}
//   </div>
// )

// HOC to forwardRef to components from Libs
function makeClassComponent (WrappedComponent) {
  return class extends React.Component {
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
}

const AnimatedSubtitle = animated(makeClassComponent(Type_SubTitle))
// const AnimatedBlockReveal = animated(makeClassComponent(BlockRevealSpring))
const AnimatedLegend = animated(makeClassComponent(Legend))
const AnimatedServiceItem = animated(makeClassComponent(ServiceItem))
const AnimatedServiceItemM = animated(makeClassComponent(ServiceItemM))

const AnimatedTitles = ({ hero, browser }) => {
  // animation configs
  const fadeInRef = useRef()

  // const fadeIn = useTrail(splitSub.length, {
  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  //   config: config.default,
  //   ref: fadeInRef
  // })

  const legendWidthRef = useRef()
  const legendWidth = useSpring({
    from: { opacity: 0, transform: 'scaleX(0)' },
    to: { opacity: 1, transform: 'scaleX(1)' },
    config: { duration: 500 },
    ref: legendWidthRef

  })
  const blockRevealRef = useRef()
  const blockReveal = useSpring({
    from: { opacity: 1, transform: 'scaleX(0)' },
    to: { opacity: 1, transform: 'scaleX(1)' },
    config: { duration: 300 },
    ref: blockRevealRef

  })

  const trailRef = useRef()
  const trail = useTrail(hero.blurbs.length, {
    from: { opacity: 0, transform: 'translate3d(0,100px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: config.slow,
    // delay: 200,
    ref: trailRef
  })

  const blockAnim = useSpring({
    to: async (next, cancel) => {
      await next({ transform: 'scaleX(1)', width: '100%' })
      await next({ transform: 'scaleX(0)'})
    },
    from: { transformOrigin: 'right', width: '0%', transform: 'scaleX(1)' }
  })

  useChain([blockRevealRef, fadeInRef, legendWidthRef, trailRef], [0, 0, 0.3, 1])

  return (
    <Row xs>
      <HeroTitle p={[3, 4, 5, 7]} xs={12}>
        <BlockReveal>
          <Type_SubTitle color={'transparent'} m={0}>{hero.subtitle}</Type_SubTitle>
        </BlockReveal>
        <Row>
          <BlockReveal delay={300} bgColor={'#FF5353'}>
            <Type_Title m={0} color={'white'}>
              {hero.title}
            </Type_Title>
          </BlockReveal>
        </Row>
      </HeroTitle>
      <LegendWrapper justifyContent={'flex-start'}>
        <AnimatedLegend native style={legendWidth} p={[4, 5, 6]} bg='white' md={10} sm={10} xs={10} >
          <LegendItems
            height={0}
            alignItems={['flex-start', 'flex-start', 'center', 'center']}
            flexDirection={['column', 'column', 'row', 'row']}
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
            <PreviewCompatibleImage
              isFixed
              imageInfo={hero.dots__image}
              style={dotStyle}
            />
          </LegendItems>
        </AnimatedLegend>
      </LegendWrapper>
    </Row>
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
        {this.state.browser !== undefined &&
          <AnimatedTitles hero={hero} browser={this.state.browser} />
        }
      </HeroContainer>
    )
  }
}

export default Hero
