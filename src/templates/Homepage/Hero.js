import React from 'react'
import styled from 'styled-components'
import ReactFitText from 'react-fittext'
import { Row, Col } from 'react-flexbox-grid'
import {
  color,
  space,
  backgroundPosition,
  flexDirection,
  alignItems,
  backgroundSize
} from 'styled-system'
import { Subtitle1, Body2, Body1, Button } from '../../components/Typography'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

const HeroContainer = styled(Row)
`
  ${color}
  ${backgroundPosition}
  ${space}
  ${backgroundSize}
  min-height:100vh;
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
const dotStyle = {
  position: 'absolute',
  top: '-25%',
  right: '-10%',
  zIndex: '-1'
}

const LegendItems = styled(Row)
`
  ${flexDirection}
  ${alignItems}
  height:100%;
  width:100%
`

const LegendWrapper = styled(Row)
`
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

const ServiceItem = ({ title, text }) => (
  <Col className='hidden-xs hidden-sm' xs>
    <Subtitle1 color='black'>{title} </Subtitle1>
    <Body2 color='darkGrey'> {text} </Body2>
    <Button> VIEW </Button>
  </Col>
)

const Ico_Arrow = styled.svg`
  ${color}
  height: 24px;
  width: 24px;
`
const ServiceItemM = ({ title }) => (
  <Row middle='xs' style={{ width: '100%' }} between='xs' className='hidden-xl hidden-lg hidden-md'>
    <Body2 pr={3} color='darkGrey'> {title} </Body2>
    <Ico_Arrow>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 31.49 31.49'>
        <path d='M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z' fill='#FF5353' />
      </svg>
    </Ico_Arrow>
  </Row>
)

const Hero = ({
  hero
}) => (
  <HeroContainer
    backgroundSize={['cover', 'cover', 'contain']}
    backgroundPosition={['top', 'top', 'right', 'right']}
    bg={'black'}
    background={
      hero.bg__image.childImageSharp
        ? hero.bg__image.childImageSharp.fluid.src
        : hero.bg__image}
  >
    <HeroTitle p={[3, 4, 5, 7]} xs={12} sm={10} md={8} lg={8}>
      <ReactFitText maxFontSize={125} minFontSize={42}>
        <h1 className='heroTitle'>
          {hero.title.split(' ').slice(0, 2).join(' ')} <br />
          {hero.title.split(' ').slice(2, 4).join(' ')}
        </h1>
      </ReactFitText>
    </HeroTitle>
    <LegendWrapper>
      <Legend p={[4, 5, 6]} bg='white' md={10} sm={6} xs={8} >
        <LegendItems
          alignItems={['flex-start', 'flex-start', 'center', 'center']}
          flexDirection={['column', 'column', 'row', 'row']}
          >
          <PreviewCompatibleImage
            isFixed
            imageInfo={hero.dots__image}
            style={dotStyle}
          />
          <ServiceItem title={hero.blurbs.OT.title} text={hero.blurbs.OT.text} />
          <ServiceItem title={hero.blurbs.PT.title} text={hero.blurbs.PT.text} />
          <ServiceItem title={hero.blurbs.ET.title} text={hero.blurbs.ET.text} />
          <ServiceItemM title={hero.blurbs.OT.title} className='hidden-lg hidden-md' />
          <ServiceItemM title={hero.blurbs.PT.title} className='hidden-lg hidden-md' />
          <ServiceItemM title={hero.blurbs.ET.title} className='hidden-lg hidden-md' />
        </LegendItems>
      </Legend>
    </LegendWrapper>
  </HeroContainer>
)

export default Hero
