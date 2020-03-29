import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { Button as ButtonText } from '../components/Typography'
const Container = styled.button`
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.md};
  align-self: center;
  border: 0px;
`

const Button = ({ data, theme }) =>
  <Container>
    <ButtonText color={'black'}>
      Text
    </ButtonText>
  </Container>

export default Button
