import React from 'react'
import { Body2 } from './Typography'
import styled from 'styled-components'
import { space } from 'styled-system'

const SVGwrapper = styled.div`
  ${space}
  vertical-align: middle;
  width: ${props => props.size || 32}px;
  display: inline-block;
  padding-right:4px
`
const InfoItem = ({ copy, children, textColor, size }) => (
  <span style={{ verticalAlign: 'middle', paddingRight: '8px' }}>
    <SVGwrapper size={size}>
      {children}
    </SVGwrapper>
    <Body2 color={textColor || 'white'} verticalAlign={'middle'} mt={2} mb={2} style={{ display: 'inline-block' }}> {copy} </Body2>
  </span>
)

export { InfoItem }
