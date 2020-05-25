import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { H3 } from '../../components/Typography'
import ProgramCard from './ProgramCard'
import { SectionWrapper, SectionMax } from '../../components/Containers'
import Content, { HTMLContent } from '../../components/Content'

const Program = ({ program, content, contentComponent }) => {
  const PostContent = HTMLContent || Content

  return (
    <SectionWrapper>
      <SectionMax style={{ justifyContent: 'center' }} m='auto!important'>
        <Row>
          <Col sm={12} lg={4} style={{ padding: '0px' }}>
            <H3 mt={0} mb={1}>
              A program designed for you
            </H3>
          </Col>
          <Col sm={12} lg={8} style={{ padding: '0px' }}>
            <PostContent content={content} />
          </Col>
        </Row>
      </SectionMax>
    </SectionWrapper>
  )
}

export default Program
