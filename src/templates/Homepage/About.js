import React, { useRef } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { Overline, H3, Body1, H5 } from '../../components/Typography'
import { SectionWrapper, SectionMax } from '../../components/Containers'

import {
  color,
  alignSelf,
  space
} from 'styled-system'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

const Sections = styled(Col)`
  ${color}
  ${alignSelf}
  ${space}
`

const CalloutContainer = styled(Col)`
  ${space}
`
const Callout = ({ count, desc }) => (
  <CalloutContainer xs={6} p={2}>
    <H5 m={0} pr={3}>
      {' '}
      {count}{' '}
    </H5>
    <Body1 mt={0}> {desc} </Body1>
  </CalloutContainer>
)

const About = ({ about }) => {
  return (
    <SectionWrapper justifyContent='center' bg='lightGrey'>
      <SectionMax>
        <Sections m='auto' alignSelf={'center'} lg={5} md={5} sm={6} xs={10}>
          <PreviewCompatibleImage
            imageInfo={about.flex__image}
            imgStyle={{ objectFit: 'contain' }}
            style={{ maxHeight: '75vh' }}
          />
        </Sections>
        <Sections
          m='auto'
          alignSelf='center'
          bg='lightGrey'
          lg={6}
          md={7}
          sm={12}
          xs={12}
        >
          <Overline
            textAlign={['center', 'center', 'left', 'left']}
            color={'accent'}
          >
            MEET YOUR TRAINER
          </Overline>
          <H3 textAlign={['center', 'center', 'left', 'left']} mt={0} mb={3}>
            {about.title}
          </H3>
          <Body1> {about.bio} </Body1>
          <Row>
            {
              about.callouts.map((co, idx) => (
                <Callout count={co.callout.count} desc={co.callout.desc} />
              ))
            }
          </Row>
        </Sections>
      </SectionMax>
    </SectionWrapper>
  )
}

export default About
