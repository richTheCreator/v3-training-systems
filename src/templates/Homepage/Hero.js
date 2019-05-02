import React from 'react'
import styled from 'styled-components'
import ReactFitText from 'react-fittext'
import { Row, Col } from 'react-flexbox-grid'
import {
  color,
  space,
  backgroundPosition,
  flexDirection
} from 'styled-system'
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
`
const dotStyle = {
  position: 'absolute',
  top: '-25%',
  right: '35%',
  zIndex: '-1'
}

const LegendItems = styled(Row)
`
  ${flexDirection}
  height:100%;
  width:100%
`

const LegendWrapper = styled(Row)
`
  width: 100%;
  align-self: flex-end;
  height: 25vh;
  max-height:250px;
  z-index: 1;
  position: relative;
`
const HeroTitle = styled(Col)
`
  ${space}
  align-self: flex-end;
`

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
    <HeroTitle p={[4, 4, 5, 6]} xs={12} sm={10} md={8}>
      <ReactFitText maxFontSize={100}>
        <h1 className='heroTitle'>
          {hero.title.split(' ').slice(0, 2).join(' ')} <br />
          {hero.title.split(' ').slice(2, 4).join(' ')}
        </h1>
      </ReactFitText>
    </HeroTitle>
    <LegendWrapper>
      <Legend p={[4, 5, 6]} bg={'white'} xs={7} >
        <LegendItems flexDirection={['column', 'row', 'row']}>
          <Col style={{ backgroundColor: 'red' }} xs />
          <Col style={{ backgroundColor: 'blue' }} xs />
          <Col style={{ backgroundColor: 'purple' }} xs />
        </LegendItems>
      </Legend>
      <PreviewCompatibleImage
        isFixed
        imageInfo={hero.dots__image}
        style={dotStyle}
      />
    </LegendWrapper>
  </HeroContainer>
)

export default Hero
