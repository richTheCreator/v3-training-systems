import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import {
  space
} from 'styled-system'
import { H3, Body1 } from '../../components/Typography'
import { Step } from '../../components'
import { SectionWrapper, SectionMax } from '../../components/Containers'

const Container = styled(SectionMax)`
  ${space}
  align-items:center;
  justify-content: 'center';
  height:100%;
`
const TextWrapper = styled(Col)`
  ${space}
`
const StepWrapper = styled(Col)`
  ${space}
`

const HowItWorks = ({ how }) => {
  return (
    <SectionWrapper center='xs' bg={'greyBlue'} style={{ position: 'relative' }}>
      <Container>
        <TextWrapper xs={12} mb={5}>
          <H3 mt={0} mb={2}>
            {how.title}
          </H3>
          <Body1 color={'darkGrey'}>
            {how.desc}
          </Body1>
        </TextWrapper>
        <Row>
          {
            how.steps.map((step, idx) => (
              <StepWrapper md={4} sm={6} xs={12} mb={4}>
                <Step number={idx + 1} title={step.step.title} desc={step.step.desc} />
              </StepWrapper>
            ))
          }
        </Row>
      </Container>
    </SectionWrapper>
  )
}

export default HowItWorks
