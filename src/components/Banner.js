import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { space, borderRadius } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import { H3 } from './Typography'
import { SectionWrapper, SectionMax } from './Containers'
import { Button } from './Button'

const Container = styled(BackgroundImage)`
  ${space}
  ${borderRadius}
  display:flex;
  flex-direction: row;
  width:100%;
  height:350px;
  background-position: center center;
  background-size: cover;
  justify-content:center;
  align-items: center;
  position:relative;
  box-shadow: ${props => props.theme.shadows.md};
  overflow: hidden
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
  opacity: .5;
`
const ContentContainer = styled(Col)`
  z-index:1;
  text-align:center;
`
const mailTo = (href) => {
  window.open('mailto:conquerfitness01@gmail.com?subject=V3%20Online%20Fitness%20Program%20-%20Customer%20Contact', '_blank')
}

const Banner = (props) => {
  return (
    <SectionWrapper style={{ justifyContent: 'center' }}>
      <SectionMax>
        <Container fluid={props.banner.bg__img.childImageSharp.fluid} borderRadius={['20px']}>
          <Overlay />
          <ContentContainer>
            <H3 mb={4} color={'white'}>
              {props.banner.title}
            </H3>
            {props.children}
          </ContentContainer>
        </Container>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Banner }
