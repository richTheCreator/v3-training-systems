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
      <SectionMax style={{ justifyContent: 'center' }}>
        <Row>
          <Col sm={12} lg={4}>
            <H3 mt={0} mr={3}>
              A program designed for you
            </H3>
          </Col>
          <Col sm={12} lg={8}>
            <PostContent content={content} />
          </Col>
        </Row>
        <Row style={{ marginTop: '-6px', zIndex: 2 }}>
          {program.map((service, idx) => (
            <Col xs={12} md={6} lg={4}>
              <ProgramCard service={service.service} />
            </Col>
          ))}
        </Row>
      </SectionMax>
    </SectionWrapper>
  )
}

export default Program
