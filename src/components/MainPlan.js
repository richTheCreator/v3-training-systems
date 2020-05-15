import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { H5, H2, Body2 } from './Typography'
import Button from './Button'
import { Checkout } from './Checkout'
const Container = styled(Row)`
  justify-content:center;
  align-items:center;
  background: ${({ themeColor }) =>
      themeColor ? 'linear-gradient(136.77deg, #222529 0%, #000000 100%)' : 'white'};
  height:100%;
  position:relative;
  padding: 4em 0em;
  box-shadow: ${props => props.theme.shadows.md}
`
const Planwrapper = styled(Col)`
z-index: 1;
justify-content: center;
display: flex;
flex-direction: column;
align-items: center;
`

const Price = styled(H2)`
  color: ${props =>
      props.themeColor ? props.theme.colors.white : props.theme.colors.black};;
  font-style:italic;
`

const PlanType = styled(H5)`
  color: ${props => props.theme.colors.disabled};
  letter-spacing: 0px;
`

const Callout = styled(Body2)`
  background: black;
  color:white;
  padding: 14px 24px;
  position: absolute;
  font-weight: 700;
  top: -36px;
  font-style: italic;
`

const MainPlan = ({ plan }) => {
  return (
    <Container themeColor={plan.main}>
      {
        plan.callout && (
          <Callout>
            {plan.callout}
          </Callout>
        )
      }
      <Planwrapper xs={12}>
        <PlanType m={'0px'}> {plan.title} </PlanType>
        <Price themeColor={plan.main} mt={'24px'}> {plan.price} </Price>
        <Checkout themeColor={plan.main} sku={plan.sku} buttonText={plan.button_text}>
          {plan.button_text}
        </Checkout>
      </Planwrapper>
    </Container>

  )
}

export default MainPlan
