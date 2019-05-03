import React from 'react'
import styled from 'styled-components'
import ReactFitText from 'react-fittext'
import { Row, Col } from 'react-flexbox-grid'
import {
  color,
  space,
  backgroundPosition,
  flexDirection,
  alignItems
} from 'styled-system'
import { Subtitle1, Body2, Button } from '../../components/Typography'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

const HeroContainer = styled(Row)
`
  ${color}
  ${backgroundPosition}
  ${space}
  background-size: contain;
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
  <Col xs>
    <Subtitle1 color='black'>{title} </Subtitle1>
    <Body2 color='darkGrey'> {text} </Body2>
    <Button> VIEW </Button>
  </Col>
)

const Hero = ({
  hero
}) => (
  <HeroContainer
    backgroundPosition={['top', 'right', 'right']}
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
      <Legend p={[4, 5, 6]} bg='white' xs={7} >
        <LegendItems alignItems='center' flexDirection={['column', 'column', 'row', 'row']}>
          <PreviewCompatibleImage
            isFixed
            imageInfo={hero.dots__image}
            style={dotStyle}
          />
          <ServiceItem title={hero.blurbs.OT.title} text={hero.blurbs.OT.text} />
          <ServiceItem title={hero.blurbs.PT.title} text={hero.blurbs.PT.text} />
          <ServiceItem title={hero.blurbs.ET.title} text={hero.blurbs.ET.text} />
        </LegendItems>
      </Legend>
    </LegendWrapper>
  </HeroContainer>
)

export default Hero
