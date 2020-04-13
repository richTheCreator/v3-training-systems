import React from 'react'
import styled from 'styled-components'
import { Row } from 'react-flexbox-grid'
import { color } from 'styled-system'

const Container = styled.div`
  ${color}
  font-size: 11px;
  padding: 8px 12px;
  font-family: ${props => props.theme.fonts.sans};
  text-transform: uppercase;
  letter-spacing: .5px;
  text-align:center;
  width:fit-content;
  border-radius: 4px;
  font-weight: 700;
`

const Badge = (props) => {
  return (
    <Container {...props} color={'white'} backgroundColor={props.badgeTheme === true ? 'accent' : 'black'}>
      {props.children}
    </Container>
  )
}

export { Badge }
