import React from 'react'
import { Body2 } from './Typography'

const InfoItem = ({ copy, children, textColor }) => (
  <span style={{ verticalAlign: 'middle', paddingRight: '16px' }}>
    <span style={{ verticalAlign: 'middle' }}>
      {children}
    </span>
    <Body2 color={textColor || 'mdGrey'} verticalAlign={'middle'} mt={2} mb={2} style={{ display: 'inline-block' }}> {copy} </Body2>
  </span>
)

export { InfoItem }
