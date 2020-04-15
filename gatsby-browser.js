
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from './src/components/Layout'

import theme from './static/styles/theme'
import './static/styles/global.css'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  )
}

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
