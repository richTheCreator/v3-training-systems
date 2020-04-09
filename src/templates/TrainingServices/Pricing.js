import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import {
  space
} from 'styled-system'
import { H3 } from '../../components/Typography'
import MainPlan from '../../components/MainPlan'
import Guarantee from '../../components/Guarantee'
import { SectionWrapper, SectionMax } from '../../components/Containers'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

const Container = styled(SectionMax)`
  ${space}
  align-items:center;
  background-color: ${props => props.theme.colors.white};
  height:100%;
  position:relative;
  justify-content: center;
`
// const Overlay = styled.div`
//   background-size:cover;
//   height:100%;
//   position:absolute;
//   width:75%;
//   right:0px;
//   background-repeat:no-repeat;
//   background-position:center;
//   background-image: url('/img/dots-overlay-light.png')
// `

const Pricing = ({ pricing, guarantee }) => {
  console.log('pricing', pricing)
  return (
    <SectionWrapper pt={'0px !important'}>
      <PreviewCompatibleImage
        imageInfo={pricing.dots__image}
        isFixed
        style={{ position: 'absolute', bottom: '-10%', left: '-5%' }}
      />
      <Container mt={0} p={['0px', '40px']}>
        <Col xs={12} md={12} lg={9} style={{ padding: '0px' }}>
          <Col xs={12} md={6} style={{ margin: 'auto', padding: '0px' }}>
            <H3 mt={0} mb={7} textAlign='center'>
              {pricing.title}
            </H3>
          </Col>
          <Row>
            {
              pricing.plans.map((plan, idx) => (
                <Col md={6} style={{ marginTop: '24px' }}>
                  <MainPlan plan={plan.plan} />
                </Col>
              ))}
          </Row>
          <Guarantee guarantee={guarantee} />
        </Col>
      </Container>
    </SectionWrapper>
  )
}

export default Pricing
