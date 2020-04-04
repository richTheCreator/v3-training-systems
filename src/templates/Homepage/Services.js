import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import {
  Body1,
  WithDecorator,
  Outlined
} from '../../components/Typography'
import { SectionWrapper } from '../../components/Containers'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

// const numberStyle = {
//   lineHeight: '160px',
//   marignBottom: '0px',
//   marginTop: '0px',
//   textAlign: 'right',
//   opacity: 0.1
// }

// const ListItemSquare = styled.li`
//   display: flex;
//   align-items: center;
//   &:before {
//     ${borderColor}
//     content: " ";
//     flex-shrink: 0;
//     position: relative;
//     width: 11px;
//     height: 11px;
//     margin-right: 8px;
//     font-weight: 400;
//     font-size: 30px;
//     vertical-align: sub;
//     border-width: 2px;
//     border-style: solid;
//     border-image: initial;
//     border-radius: 3px;
//   }
// `

const ServiceItemM = ({ service, hero, inverted }) => (
  <Row
    className="hidden-xl hidden-lg"
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      padding: '54px 0px',
      width: '100%',
      backgroundColor: inverted ? '#EDEDED' : 'transparent'
    }}
  >
    <Col style={{ position: 'relative' }} xs={12}>
      <PreviewCompatibleImage
        style={{ maxHeight: '400px' }}
        imageInfo={service.service__image}
      />
    </Col>
    <Col xs={12} style={{ zIndex: 3 }}>
      <Outlined fontSize={'40px'} color={'transparent'} mb={0} outlineColor={inverted ? 'black' : 'white'}>
        {' '}
        {service.title}{' '}
      </Outlined>
      <Body1 color={'mdGrey'}> {service.desc}</Body1>
      <Row>
        {service.includes.map(item => (
          <Col sm={6}>
            <WithDecorator
              bodyText={item}
              bodyColor={inverted ? 'black' : 'white'}
              decoratorColor="accent"
            />
          </Col>
        ))}
      </Row>
    </Col>
  </Row>
)

const ServiceItem = ({ service, hero, idx, inverted, flipped }) => (
  <Row
    className="hidden-xs hidden-sm hidden-md"
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      padding: '24px',
      marginTop: '64px',
      backgroundColor: inverted ? '#F5F7F9' : '#191c1f',
      width: '100%',
      height: '100vh',
      flexDirection: flipped ? 'row-reverse' : 'row'
    }}
  >
    <Col style={{ maxWidth: '400px' }} lg={5} style={{ paddingLeft: flipped ? '24px' : 'inherit' }}>
      <Outlined fontSize={'40px'} color={'transparent'} mb={0} outlineColor={inverted ? 'black' : 'white'}>
        {' '}
        {service.title}{' '}
      </Outlined>
      <Body1 color={'mdGrey'}> {service.desc}</Body1>
      <div>
        {service.includes.map(item => (
          <WithDecorator
            bodyText={item}
            bodyColor={inverted ? 'black' : 'white'}
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

const Services = ({ services, hero, inverted }) => (
  <SectionWrapper bg={inverted ? 'white' : 'rgb(34, 37, 41)' }>
    {services.map((service, idx) => (
      <>
        <ServiceItem flipped={idx % 2} inverted={inverted} service={service.service} idx={idx} hero={hero} />
        <ServiceItemM inverted={inverted} service={service.service} hero={hero} />
      </>
    ))}
  </SectionWrapper>
)

export default Services
