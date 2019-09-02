import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import posed, { PoseGroup } from 'react-pose'
import { tween } from 'popmotion'
import SplitText from 'react-pose-text'
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
  letterSpacing
} from 'styled-system'
import { Subtitle1, Body2, Button } from '../../components/Typography'
import { Overlay } from '../../components/Containers'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

const HeroContainer = styled(Row)`
  ${color}
  ${backgroundPosition}
  ${space}
  ${backgroundSize}
  ${minHeight}
  background-image: url(${props => props.background});
  background-repeat:no-repeat;
`
const Legend = styled(Col)`
  ${color}
  ${space}
  max-width:1000px;
  position: relative;
`
const dotStyle = {
  position: 'absolute',
  top: '-25%',
  right: '-10%',
  zIndex: '-1'
}

const charPoses = {
  exit: { opacity: 0 },
  enter: {
    opacity: 1,
    y: 0
  }
}

const LegendItems = styled(Row)`
  ${flexDirection}
  ${alignItems}
  ${height}
  width:100%
`

const PosedLegend = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring'
    }
  },
  exit: {
    y: 224,
    opacity: 0
  }
})

const LegendWrapper = styled(PosedLegend)`
  ${justifyContent}
  width: 100%;
  align-self: flex-end;
  z-index: 1;
  position: absolute;
`

const TitleWrapper = styled(Col)`
  ${space}
  align-self: center;
  margin-bottom: 100px;
`
const SubtitleWrapper = styled.p`
  ${space}
  ${fontWeight}
  ${color}
  ${letterSpacing}
  text-align: center;
  font-size: calc(18px + (30 - 18) * ((100vw - 300px) / (1600 - 300)));
  font-style: italic;

`
const Ico_Arrow = styled.svg`
  ${color}
  height: 24px;
  width: 24px;
`

const ServiceItem = ({ title, text }) => (
  <Col className="hidden-xs hidden-sm" style={{ textAlign: 'center' }} xs>
    <Subtitle1 color="black">{title} </Subtitle1>
    <Body2 color="darkGrey"> {text} </Body2>
    <Button> VIEW </Button>
  </Col>
)

const ServiceItemM = ({ title }) => (
  <Row
    middle="xs"
    style={{ width: '100%' }}
    between="xs"
    className="hidden-xl hidden-lg hidden-md"
  >
    <Body2 pr={3} color="darkGrey">
      {' '}
      {title}{' '}
    </Body2>
    <Ico_Arrow>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.49 31.49">
        <path
          d="M21.205 5.007a1.112 1.112 0 0 0-1.587 0 1.12 1.12 0 0 0 0 1.571l8.047 8.047H1.111A1.106 1.106 0 0 0 0 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 0 0 1.587 0l9.952-9.952a1.093 1.093 0 0 0 0-1.571l-9.952-9.953z"
          fill="#FF5353"
        />
      </svg>
    </Ico_Arrow>
  </Row>
)

const Hero = ({ hero }) => (
  <HeroContainer
    minHeight={1}
    backgroundSize="cover"
    backgroundPosition={['top', 'top', 'right', 'right']}
    bg="black"
    background={
      hero.bg__image.childImageSharp
        ? hero.bg__image.childImageSharp.fluid.src
        : hero.bg__image
    }
  >
    <Overlay xs>
      <TitleWrapper p={[0, 4, 5, 7]} xs={12}>
        <SubtitleWrapper
          mb={4}
          color="white"
          fontWeight={3}
          letterSpacing={[9, 11, 11, 12]}
        >
          {hero.subtitle}
        </SubtitleWrapper>
        <OutlineTitle
          class="outlinedFont"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 20"
        >
          <text x="50%" y="60%" textAnchor="middle">
            {hero.title}
          </text>
        </OutlineTitle>
      </TitleWrapper>
      <LegendWrapper
        className="row"
        justifyContent={['flex-start', 'center', 'center']}
      >
        <Legend p={[4, 5, 6]} bg="white" md={10} sm={10} xs={10}>
          <LegendItems
            height={0}
            alignItems={['flex-start', 'flex-start', 'center', 'center']}
            flexDirection={['column', 'column', 'row', 'row']}
          >
            <PreviewCompatibleImage
              isFixed
              imageInfo={hero.dots__image}
              style={dotStyle}
            />
            <ServiceItem
              title={hero.blurbs.OT.title}
              text={hero.blurbs.OT.text}
            />
            <ServiceItem
              title={hero.blurbs.PT.title}
              text={hero.blurbs.PT.text}
            />
            <ServiceItem
              title={hero.blurbs.ET.title}
              text={hero.blurbs.ET.text}
            />
            <ServiceItemM
              title={hero.blurbs.OT.title}
              className="hidden-lg hidden-md"
            />
            <ServiceItemM
              title={hero.blurbs.PT.title}
              className="hidden-lg hidden-md"
            />
            <ServiceItemM
              title={hero.blurbs.ET.title}
              className="hidden-lg hidden-md"
            />
          </LegendItems>
        </Legend>
      </LegendWrapper>
    </Overlay>
  </HeroContainer>
)

export default Hero
