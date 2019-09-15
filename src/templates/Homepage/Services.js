import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
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
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

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

const ServiceItemM = ({ service, hero }) => (
  <Row
    className="hidden-xl hidden-lg"
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      padding: '54px 0px',
      width: '100%',
      backgroundColor: 'black'
    }}
  >
    <Col style={{ position: 'relative' }} xs={12}>
      <PreviewCompatibleImage
        style={{ maxHeight: '400px' }}
        imageInfo={service.service__image}
      />
    </Col>
    <Col xs={12} style={{ zIndex: 3 }}>
      <Outlined fontSize={'40px'} color={'transparent'} mb={0}>
        {' '}
        {service.title}{' '}
      </Outlined>
      <Body1 color={'mdGrey'}> {service.desc}</Body1>
      <Row>
        {service.includes.map(item => (
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

const ServiceItem = ({ service, hero, idx }) => (
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
        {service.title}{' '}
      </Outlined>
      <Body1 color={'mdGrey'}> {service.desc}</Body1>
      <div>
        {service.includes.map(item => (
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
        imageInfo={service.service__image}
        style={{ minHeight: '500px', height: '70vh' }}
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
    {services.map((service, idx) => (
      <>
        <ServiceItem service={service.service} idx={idx} hero={hero} />
        <ServiceItemM service={service.service} hero={hero} />
      </>
    ))}
  </SectionWrapper>
)

export default Services
