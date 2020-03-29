import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { H1 } from '../../components/Typography'
import ProgramCard from './ProgramCard'
import { SectionWrapper, SectionMax } from '../../components/Containers'

const Title = styled(H1)`
  opacity : 8%;
  color: ${props => props.theme.colors.blackBlue};
  text-align : center;
  margin-bottom: 0px;
  margin-top:0px;
`

const Program = ({ program }) => {
  console.log('program', program)
  return (
    <SectionWrapper>
      <SectionMax style={{ justifyContent: 'center' }}>
        <Row xs={12} style={{ zIndex: 1, justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
          <Title fontSize={['14vw', '10vw']} >
            THE PROGRAM
          </Title>
        </Row>
        <Row style={{ marginTop: '-12px', zIndex: 2 }}>
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
