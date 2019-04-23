
import './static/styles/global.css'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './static/styles/theme'

export const wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider {...props} theme={theme}>
      {element}
    </ThemeProvider>
  )
}
