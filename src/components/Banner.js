import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { space, borderRadius } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import { H2 } from './Typography'
import { SectionWrapper, SectionMax } from './Containers'
import { Button } from './Button'

const Container = styled(BackgroundImage)`
  ${space}
  ${borderRadius}
  display:flex;
  flex-direction: row;
  width:100%;
  height:350px;
  background-position:top;
  background-size: cover;
  justify-content:flex-start;
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
  background-image:linear-gradient(to right,#000000,#00000000)
`
const ContentContainer = styled(Col)`
  z-index:1;
  alignItems:flex-start;
`
const mailTo = (href) => {
  window.open('mailto:conquerfitness01@gmail.com?subject=V3%20Online%20Fitness%20Program%20-%20Customer%20Contact', '_blank')
}

const Banner = (props) => {
  return (
    <SectionWrapper style={{ justifyContent: 'center' }}>
      <SectionMax>
        <Container p={[2, 4]} fluid={props.banner.bg__img.childImageSharp.fluid} borderRadius={['20px']}>
          <Overlay />
          <ContentContainer xs={10} md={5}>
            <H2 mb={4} textAlign={'left'} color={'white'}>
              {props.banner.title}
            </H2>
            {props.children}
          </ContentContainer>
        </Container>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Banner }
