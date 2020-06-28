import React from 'react'
import { Link } from 'gatsby'
import { Row, Col } from 'react-flexbox-grid'
import { space, width } from 'styled-system'
import styled from 'styled-components'
import { SectionWrapper, SectionMax } from './Containers'
import { H5, Body1, Button, Overline, Caption } from './Typography'
import V3_Logo from '../img/svg/v3-logo.svg'
import IG_Logo from '../img/svg/instagram.svg'
import FB_Logo from '../img/svg/facebook.svg'
import Phone_Icon from '../img/svg/phone.svg'
import Mail_Icon from '../img/svg/mail.svg'
import useSiteMetadata from './SiteMetadata'

const LinkStyle = styled(Link)`
  ${space}
  display:inline-block;
  width:100%;
  text-decoration: none;
  font-size: ${props => props.theme.fontSizes[4]};
  font-weight: ${props => props.theme.fontWeights[2]};
  color: ${props => props.theme.colors.white};
  letter-spacing: ${props => props.theme.letterSpacings[8]};
`

const IconContainer = styled(Col)`
`
const CTAcontaienr = styled(Row)`
  ${space}
  ${width}
  border-radius: ${props => props.theme.borderRadius.sm}px;
  border: 1px solid white;
`
const ContactCTA = (props) => {
  return (
    <a href={props.url} style={{ width: '100%', height: '100%', cursor: 'pointer' }}>
      <CTAcontaienr {...props} middle='xs' borderRadius>
        <IconContainer xs={3}>
          {props.children}
        </IconContainer>
        <Col xs={9} style={{ borderLeft: '1px solid white' }}>
          <Button textAlign='center' color='white'>
            {props.text}
          </Button>
        </Col>
      </CTAcontaienr>
    </a>

  )
}

const CTAWrapper = styled(Col)`
  ${width}
`

const Footer = () => {
  const { menuLinks } = useSiteMetadata()

  return (
    <SectionWrapper justifyContent='center' bg='blackBlue'>
      <SectionMax>
        <Row between='xs' start='xs' style={{ width: '100%' }}>
          <Col xs={12} md={5}>
            <Row middle='xs'>
              <Link to='/' className='navbar-item' title='Logo'>
                <V3_Logo />
              </Link>
              <H5 pl={2} color='white'> Training Systems </H5>
            </Row>
            <Body1 color='lightGrey' pb={[3, 0]}>
                Veni Vidi Vici - You came, you saw, you conquered. Training programs tailored to your unique anatomy, lifestyle, and goals.
            </Body1>
          </Col>
          <Col xs={12} md={3}>
            <Overline mb={3} color='mdGrey'> PROGRAMS </Overline>
            {menuLinks.map(navItems =>
              navItems.name !== 'Home' ? (
                <LinkStyle mb={4} to={navItems.link}>{navItems.name}</LinkStyle>
              ) : null
            )}
          </Col>
          <Col xs={12} md={3} style={{ paddingBottom: '16px' }}>
            <Overline textAlign={['left', 'right']} mb={3} color='mdGrey'> GET IN TOUCH </Overline>
            <Row end='md' start='xs'>
              <CTAWrapper width={'100%'}>
                <ContactCTA mb={3} width={'100%'} url='tel:+15126302038' text={'Call V3TS'}>
                  <Phone_Icon style={{ width: '100%', fill: 'white', paddingRight: '8px' }} />
                </ContactCTA>
                <ContactCTA url='mailto:conquerfitness01@gmail.com?subject=V3%20Online%20Fitness%20Program%20-%20Customer%20Contact' mb={4} text={'Email V3TS'}>
                  <Mail_Icon style={{ width: '100%', fill: 'white', paddingRight: '8px' }} />
                </ContactCTA>
              </CTAWrapper>
            </Row>
            <Row end='md' start='xs'>
              <a href='https://www.facebook.com/conquerfitnesstx/' title='instagram'>
                <FB_Logo style={{ fill: 'white', paddingRight: '12px' }} />
              </a>
              <a href='https://www.instagram.com/v3_training_systems/' title='instagram'>
                <IG_Logo style={{ fill: 'white' }} />
              </a>
            </Row>
          </Col>
        </Row>
        <Row>
          <Caption color='mdGrey'>
           © 2020 V-3 Training Systems
          </Caption>
        </Row>
      </SectionMax>
    </SectionWrapper>
  )
}

export default Footer
