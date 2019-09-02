import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import ReactFitText from 'react-fittext'
import {
  Overline,
  H2,
  Body1,
  H4,
  Body2,
  WithDecorator,
  Outlined
} from '../../components/Typography'
import { SectionWrapper, SectionMax } from '../../components/Containers'
import { borderColor, flexDirection } from 'styled-system'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

const numberStyle = {
  lineHeight: '160px',
  marignBottom: '0px',
  marginTop: '0px',
  textAlign: 'right',
  opacity: 0.1
}

const ListItemSquare = styled.li`
  display: flex;
  align-items: center;
  &:before {
    ${borderColor}
    content: " ";
    flex-shrink: 0;
    position: relative;
    width: 11px;
    height: 11px;
    margin-right: 8px;
    font-weight: 400;
    font-size: 30px;
    vertical-align: sub;
    border-width: 2px;
    border-style: solid;
    border-image: initial;
    border-radius: 3px;
  }
`

const ServiceItemM = ({ services, hero }) => (
  <Row
    className="hidden-xl hidden-lg"
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      width: '100%',
      backgroundColor: 'black'
    }}
  >
    <Col style={{ position: 'relative' }} xs={12}>
      <PreviewCompatibleImage
        style={{ maxHeight: '400px' }}
        imageInfo={services.OT.service__image}
      />
    </Col>
    <Col xs={12} style={{ zIndex: 10000 }}>
      <Outlined fontSize={'40px'} color={'transparent'} mb={0}>
        {' '}
        {services.OT.title}{' '}
      </Outlined>
      <Body1 color={'darkGrey'}> {services.OT.desc}</Body1>
      <Row>
        {services.OT.includes.map(item => (
          <Col sm={6}>
            <WithDecorator
              bodyText={item}
              bodyColor="white"
              decoratorColor="accent"
            />
          </Col>
        ))}
      </Row>
    </Col>
  </Row>
)

const ServiceItem = ({ services, hero }) => (
  <Row
    className="hidden-xs hidden-sm hidden-md"
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      padding: '64px',
      backgroundColor: 'black',
      width: '100%',
      height: '100vh'
    }}
  >
    <Col style={{ maxWidth: '400px' }} lg={5}>
      <Outlined fontSize={'40px'} color={'transparent'} mb={0}>
        {' '}
        {services.OT.title}{' '}
      </Outlined>
      <Body1 color={'darkGrey'}> {services.OT.desc}</Body1>
      <div>
        {services.OT.includes.map(item => (
          <WithDecorator
            bodyText={item}
            bodyColor="white"
            decoratorColor="accent"
          />
        ))}
      </div>
    </Col>
    <Col style={{ position: 'relative' }} lg={7}>
      <PreviewCompatibleImage
        imageInfo={services.OT.service__image}
        style={{ minHeight: '500px' }}
      />
      <PreviewCompatibleImage
        imageInfo={hero.dots__image}
        isFixed
        style={{ position: 'absolute', bottom: '-10%', left: '-5%' }}
      />
    </Col>
  </Row>
)

const Services = ({ services, hero }) => (
  <SectionWrapper bg="black">
    <ServiceItemM services={services} hero={hero} />
    <ServiceItem services={services} hero={hero} />
  </SectionWrapper>
)

export default Services
