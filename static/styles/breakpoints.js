import { css } from 'styled-components'
const sizes = {
  sm: '32',
  md: '48',
  lg: '64',
  xl: '80'
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})
