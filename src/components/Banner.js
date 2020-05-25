import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { color, space, gridArea } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import { H3 } from './Typography'
import { SectionWrapper } from './Containers'
import { Button } from './Button'

const Container = styled(BackgroundImage)`
  ${space}
  display:flex;
  flex-direction: row;
  border-radius: ${props => props.theme.borderRadius.xl}px;
  width:100%;
  height:350px;
  background-position: center center;
  background-size: cover;
  justify-content:center;
  align-items: center;
  position:relative;
  box-shadow: ${props => props.theme.shadows.md};
  &::before {
    border-radius: ${props => props.theme.borderRadius.xl}px!important;
    content: "";
  }
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  right:0;
  bottom:0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.black}!important;
  border-radius: ${props => props.theme.borderRadius.xl}px;
  opacity: .4;
`
const ContentContainer = styled(Col)`
  z-index:1;
  text-align:center;
`

const Banner = (props) => {
  return (
    <SectionWrapper style={{ maxWidth: '1400px', margin: 'auto', paddingRight: '0px', paddingLeft: '0px' }}>
      <Container fluid={props.banner.bg__img.childImageSharp.fluid}>
        <Overlay />
        <ContentContainer>
          <H3 mb={4} color={'white'}>
            {props.banner.title}
          </H3>
          <Button url={props.banner.button_url} bg={'white'} color={'black'} width={['100%', 'auto']}>
            {props.banner.button_text}
          </Button>
        </ContentContainer>
      </Container>
    </SectionWrapper>
  )
}

export { Banner }
