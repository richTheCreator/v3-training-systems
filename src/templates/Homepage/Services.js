import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { space } from 'styled-system'
import {
  Body1,
  H5,
  Body2,
  H3,
  Overline
} from '../../components/Typography'
import { SectionWrapper, SectionMax } from '../../components/Containers'
import { Button, Badge, InfoItem } from '../../components'
import HomeIcon from '../../img/svg/home.svg'
import Calendar from '../../img/svg/calendar.svg'
import Skill from '../../img/svg/zap.svg'

const ProductImage = styled(BackgroundImage)`
  width: 100%;
  background-position: top center;
  background-size: cover;
  height:200px;
  border-radius: 4px;
  overflow:hidden;
`
const PromoBadge = styled(Badge)`
  position: absolute!important;
  left: -12px;
  top: 8px;
`
const ListWrapper = styled(Col)`
  ${space}
`
const StyledCalendar = styled(Calendar)`
  height:24px;
  width:24px;
  padding-right:4px;
  path {
    stroke: ${props => props.theme.colors.black}
  }
`
const StyledHome = styled(HomeIcon)`
height:24px;
width:24px;
padding-right:4px;
  path {
    stroke: ${props => props.theme.colors.black}
  }
`
const StyledSkill = styled(Skill)`
height:24px;
width:24px;
padding-right:4px;
  path {
    stroke: ${props => props.theme.colors.black}
  }
`
const TitleWrapper = styled(Col)`
  ${space}
`

const ProgramWrapper = styled(Col)`
`

const Program = ({
  service
}) => (
  <Row
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      width: '100%',
      maxWidth: '400px',
      marginBottom: '24px'
    }}
  >
    <Col style={{ position: 'relative', padding: '0px', marginBottom: '8px' }} xs={12}>
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
    <Col xs={12} style={{ zIndex: 3, padding: '0px' }}>
      <H5 mb={0} mt={1}>
        {service.title}
      </H5>
      <Row>
        <InfoItem size={24} textColor='black' copy={service.length}> <StyledCalendar /> </InfoItem>
        <InfoItem size={24} textColor='black' copy={service.env}> <StyledHome /> </InfoItem>
        <InfoItem size={24} textColor='black'copy={service.skill}> <StyledSkill /> </InfoItem>
      </Row>
      <Body2 mt={0} color={'mdGrey'}> {service.desc}</Body2>
      <Button
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
    <SectionMax m='auto!important' style={{ justifyContent: 'center' }}>
      <TitleWrapper mb={3} mt={3}>
        <Overline textAlign={'center'}> V3 TRAINING PROGRAMS </Overline>
        <H3 mt={0} mb={3} textAlign={'center'}> Choose your program </H3>
      </TitleWrapper>
      <Row>
        {services.programs.map((service, idx) => (
          <ProgramWrapper lg={4} md={6} sm={6} xs={12}>
            <Program service={service.program} />
          </ProgramWrapper>
        ))}
      </Row>
    </SectionMax>
  </SectionWrapper>
)

export default Services
