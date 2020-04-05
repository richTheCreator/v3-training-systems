import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import { Link } from 'gatsby'

import { Button as ButtonText } from '../components/Typography'

const Container = styled.button`
  ${space}
  background-color: ${props => props.disabled ? props.theme.colors.disabled : props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.md};
  align-self: center;
  border: 0px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}
`

const Button = (props) =>
  <Link style={{ margin: 'auto' }} to={props.url}>
    <Container {...props}>
      <ButtonText color={props.disabled ? 'mdGrey' : 'black'}>
        {props.children}
      </ButtonText>
    </Container>
  </Link>

export default Button
