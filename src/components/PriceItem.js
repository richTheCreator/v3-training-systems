import React from 'react'
import styled from 'styled-components'
import { Row } from 'react-flexbox-grid'
import { color } from 'styled-system'
import { Body2 } from './Typography'

const Container = styled(Row)`
  ${color}
  justify-content:space-between;
`

const Label = styled(Body2)`
  ${color}
`
const Price = styled(Body2)`
  ${color}
`
const Strikeout = styled(Body2)`
  ${color}
  text-decoration: line-through
`

const PriceItem = ({ price, strikeout, program }) => {
  return (
    <Container>
      <Label m={0}> {program} </Label>
      <Row>
        <Price color='teal' m={0} mr={2}> ${price}</Price>
        <Strikeout m={0} color='mdGrey'> ${strikeout} </Strikeout>
      </Row>
    </Container>
  )
}

export { PriceItem }
