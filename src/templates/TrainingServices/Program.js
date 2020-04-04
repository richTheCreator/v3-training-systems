import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { H1 } from '../../components/Typography'
import ProgramCard from './ProgramCard'
import { SectionWrapper, SectionMax } from '../../components/Containers'

const Title = styled(H1)`
  opacity : 8%;
  color: ${props => props.theme.colors.blackBlue};
  text-align : left;
  margin-bottom: 0px;
  margin-top:0px;
  line-height: 80%!important;
`

const Program = ({ program }) => {
  return (
    <SectionWrapper>
      <SectionMax style={{ justifyContent: 'center' }}>
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
