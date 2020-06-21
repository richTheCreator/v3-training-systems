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
          <Overline mb={4}> WHAT'S INCLUDED? </Overline>
          <Row style={{ marginTop: '-6px', zIndex: 2, overflowX: 'scroll', whiteSpace: 'nowrap', display: 'inline-block', width: '100%' }}>
            {program.map((service, idx) => (
              <div style={{ width: '300px', display: 'inline-block', marginRight: '16px', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
                <ProgramCard service={service.service} />
              </div>
            ))}
          </Row>
        </Col>
      </SectionMax>
    </SectionWrapper>
  )
}

export default Program
