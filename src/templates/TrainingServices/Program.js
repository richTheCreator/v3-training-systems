import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { H3, Body1, Overline } from '../../components/Typography'
import ProgramCard from './ProgramCard'
import { SectionWrapper, SectionMax } from '../../components/Containers'
import { space } from 'styled-system'
import styled from 'styled-components'
// import Content, { HTMLContent } from '../../components/Content'

const AboutWrapper = styled(Row)`
  ${space}
`
const Program = ({ about, program, content, contentComponent }) => {
  // const PostContent = HTMLContent || Content

  return (
    <SectionWrapper>
      <SectionMax style={{ justifyContent: 'center' }} m='auto!important'>
        <Col xs>
          <AboutWrapper mb={4} middle='xs'>
            <Col sm={12} lg={4} style={{ padding: '0px' }}>
              <H3 mt={0} mb={1}>
                {about.title}
              </H3>
            </Col>
            <Col sm={12} lg={8} style={{ padding: '0px' }}>
              <Body1>
                {about.desc}
              </Body1>
            </Col>
          </AboutWrapper>
          <Row>
            {program.map((service, idx) => (
              <Col xs={12} sm={6} md={6} lg={4}>
                <ProgramCard service={service.service} />
              </Col>
            ))}
          </Row>
        </Col>
      </SectionMax>
    </SectionWrapper>
  )
}

export default Program
