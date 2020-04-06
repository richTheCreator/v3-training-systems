import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import {
  color,
  alignSelf,
  space
} from 'styled-system'
import { H2, Body1 } from '../../components/Typography'
import Button from '../../components/Button'
import { SectionWrapper, SectionMax } from '../../components/Containers'

const Container = styled(SectionMax)`
  ${space}
  align-items:center;
  background-color: ${props => props.theme.colors.greyBlue};
  height:100%;
  position:relative;
`
const Overlay = styled.div`
  background-size:cover;
  height:100%;
  position:absolute;
  width:75%;
  right:0px;
  background-repeat:no-repeat;
  background-position:center;
  background-image: url('/img/dots-overlay-light.png')
`

const ForYou = ({ foryou }) => {
  return (
    <SectionWrapper pt={'0px !important'} pl={['0px', 'inherit']} pr={['0px', 'inherit']}>
      <Container mt={0} p={['24px', '40px']}>
        <Col xs={12} md={6} style={{ zIndex: 1, padding: '0px' }}>
          <H2 mt={0} mb={3}>
            {foryou.title}
          </H2>
          <Body1 color={'darkGrey'}>
            {foryou.desc}
          </Body1>
        </Col>
        <Overlay />
      </Container>
    </SectionWrapper>
  )
}

export default ForYou