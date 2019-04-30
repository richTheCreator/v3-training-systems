import React from 'react'
import {
  graphql
} from 'gatsby'
import styled from 'styled-components'
import ReactFitText from 'react-fittext'
import { Row, Col } from 'react-flexbox-grid'
import { Overline, H2, Body1, H4, Body2 } from '../../components/Typography'
import {
  color,
  fontSize,
  height,
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
  ${space}
  ${color}
  height:100%
`

const AboutContainer = styled(Row)`
  max-width:1400px;
  margin:auto;
  ${space}
`
const CalloutContainer = styled(Col)`
  ${space}
`

const Callout = ({ count, desc }) => (
  <CalloutContainer xs={6} p={3}>
    <Row>
      <H4 m={0} pr={3}> {count} </H4>
      <Body2> {desc} </Body2>
    </Row>
  </CalloutContainer>
)

const About = ({
  about
}) => (
  <AboutWrapper bg='lightGrey' p={5}>
    <AboutContainer mt={7} mb={7}>
      <Sections alignSelf={'center'} lg={6} md={5} sm={7}>
        <PreviewCompatibleImage
          imageInfo={about.flex__image}
          imgStyle={{ objectFit: 'contain' }}
          style={{maxHeight: '600px'}}
        />
      </Sections>
      <Sections alignSelf='center' bg='lightGrey' lg={6} md={7} sm={12}>
        <Overline color={'darkGrey'}>
          MEET YOUR TRAINER
        </Overline>
        <H2 mt={0} mb={5}>
          {about.title}
        </H2>
        <Body1 color={'darkGrey'}> {about.bio} </Body1>
        <Row>
          <Callout count={about.callouts.first.count} desc={about.callouts.first.desc} />
          <Callout count={about.callouts.second.count} desc={about.callouts.second.desc} />
          <Callout count={about.callouts.third.count} desc={about.callouts.third.desc} />
          <Callout count={about.callouts.fourth.count} desc={about.callouts.fourth.desc} />
        </Row>
      </Sections>
    </AboutContainer>
  </AboutWrapper>

)

export default About
