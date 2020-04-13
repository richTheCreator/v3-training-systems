import React from 'react'
import styled from 'styled-components'
import { space, width, color } from 'styled-system'
import { Link } from 'gatsby'
import { Button as ButtonText } from '../components/Typography'

const Container = styled.button`
  ${space}
  ${color}
  ${width}
  background-color: ${props => props.disabled ? props.theme.colors.disabled : props.backgroundColor};
  box-shadow: ${props => props.theme.shadows.md};
  align-self: center;
  border: 0px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}
`

const Button = (props) =>
  <Link style={{ margin: 'auto' }} to={props.url}>
    <Container {...props}>
      <ButtonText color={props.disabled ? 'mdGrey' : props.color}>
        {props.children}
      </ButtonText>
    </Container>
  </Link>

export { Button }
