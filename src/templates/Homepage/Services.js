import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { space } from 'styled-system'
import {
  Body1,
  WithDecorator,
  H5,
  Body2,
  H3
} from '../../components/Typography'
import { SectionWrapper, SectionMax } from '../../components/Containers'
import { Button, Badge } from '../../components'

const ProductImage = styled(BackgroundImage)`
  width: 100%;
  background-position: top center;
  background-size: cover;
  height:200px;
  border-radius: 4px;
  &::before {
    border-radius: 4px;
  }
`
const PromoBadge = styled(Badge)`
  position: absolute!important;
  left: -12px;
  top: 8px;
`
const ListWrapper = styled(Col)`
  ${space}
`
const Program = ({
  service
}) => (
  <Row
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      width: '100%'
    }}
  >
    <Col style={{ position: 'relative' }} xs={12}>

      <H5 mb={0} textAlign={'center'}>
        {service.title}
      </H5>
      <Body1 textAlign={'center'} mt={2} color={'mdGrey'}> {service.desc}</Body1>
      <div style={{ position: 'relative' }}>
        <ProductImage
          fluid={service.service__image.childImageSharp.fluid}
        />
        {service.badge &&
          <PromoBadge badgeTheme={service.badge.promo}>
            {service.badge.text}
          </PromoBadge>
        }
      </div>
    </Col>
    <Col xs={12} style={{ zIndex: 3 }}>
      <Col>
        {service.includes.map((item, idx) => (
          <ListWrapper mt={3} mb={3}>
            <WithDecorator
              bodyText={item}
              bodyColor={'black'}
              decoratorColor={service.title === 'Online Training' ? 'accent' : 'disabled'} />
          </ListWrapper>
        ))}
      </Col>
      <Button
        mt={4}
        width={'100%'}
        disabled={service.button_disabled}
        url={service.button_url}
        backgroundColor={'black'}
        color={'white'}
      >
        { service.button_text}
      </Button>
      <Body2 color={'mdGrey'} textAlign={'center'}>
        {service.button_subtext}
      </Body2>
    </Col>
  </Row>
)

const Services = ({ services }) => (
  <SectionWrapper>
    <SectionMax>
      {services.programs.map((service, idx) => (
        <Col lg={4} md={6} sm={12} xs={12}>
          <Program service={service.program} />
        </Col>
      ))}
    </SectionMax>
  </SectionWrapper>
)

export default Services
