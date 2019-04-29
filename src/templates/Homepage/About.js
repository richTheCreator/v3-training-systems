import React from 'react'
import {
  graphql
} from 'gatsby'
import styled from 'styled-components'
import ReactFitText from 'react-fittext'
import { Row, Col } from 'react-flexbox-grid'
import { Overline, H2, Body1 } from '../../components/Typography'
import {
  color,
  fontSize,
  alignSelf,
  space,
  flexDirection
} from 'styled-system'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

const Sections = styled(Col)`
  ${color}
  ${alignSelf}
  ${space}
`
const AboutWrapper = styled(Row)`
  ${color}
  max-width:1400px;
  margin:auto;
`
const Callout = styled(Col)`
  ${color}
  height:50px
`
const About = ({
  about
}) => (
  <Row style={{backgroundColor: '#EDEDED'}}>
    <AboutWrapper>
      <Sections alignSelf='flex-end' pt={5} md={5} xs={12}>
        <PreviewCompatibleImage
          imageInfo={about.flex__image}
          imgStyle={{ objectFit: 'contain' }}
          style={{maxHeight: '750px'}}
        />
      </Sections>
      <Sections alignSelf='center' p={3} bg='lightGrey' md={6}>
        <Overline color={'darkGrey'}>
          MEET YOUR TRAINER
        </Overline>
        <H2 mt={0} mb={5}>
          {about.title}
        </H2>
        <Body1 color={'darkGrey'}> {about.bio} </Body1>
        <Row>
          <Callout xs={6} bg={'purple'} />
          <Callout xs={6} bg={'red'} />
          <Callout xs={6} bg={'blue'} />
          <Callout xs={6} bg={'green'} />
        </Row>
      </Sections>
    </AboutWrapper>
  </Row>

)

export default About
