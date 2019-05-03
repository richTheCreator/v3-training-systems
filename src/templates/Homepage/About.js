import React from 'react'
import {
  graphql
} from 'gatsby'
import styled from 'styled-components'
import ReactFitText from 'react-fittext'
import { Row, Col } from 'react-flexbox-grid'
import { Overline, H2, Body1, H4, Body2 } from '../../components/Typography'
import { SectionWrapper, SectionMax } from '../../components/Containers'
import {
  color,
  fontSize,
  height,
  alignSelf,
  maxWidth,
  space,
  flexDirection
} from 'styled-system'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

const Sections = styled(Col)`
  ${color}
  ${alignSelf}
  ${space}
`
const AboutContainer = styled(Row)`
  ${maxWidth}
  ${space}
`
const CalloutContainer = styled(Col)`
  ${space}
`
const Callout = ({ count, desc }) => (
  <CalloutContainer xs={6} p={2}>
    <Row>
      <H4 m={0} pr={3}> {count} </H4>
      <Body2> {desc} </Body2>
    </Row>
  </CalloutContainer>
)

const About = ({
  about
}) => (
  <SectionWrapper justifyContent='center' bg='lightGrey'>
    <SectionMax>
      <Sections m='auto' alignSelf={'center'} lg={5} md={5} sm={6} xs={10}>
        <PreviewCompatibleImage
          imageInfo={about.flex__image}
          imgStyle={{ objectFit: 'contain' }}
          style={{maxHeight: '90vh'}}
        />
      </Sections>
      <Sections m='auto' alignSelf='center' bg='lightGrey' lg={6} md={7} sm={12} xs={12}>
        <Overline textAlign={['center', 'center', 'left', 'left']} color={'accent'}>
          MEET YOUR TRAINER
        </Overline>
        <H2 textAlign={['center', 'center', 'left', 'left']} mt={0} mb={3}>
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
    </SectionMax>
  </SectionWrapper>

)

export default About
