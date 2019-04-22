
import './static/styles/global.css'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './static/styles/theme'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  )
}
