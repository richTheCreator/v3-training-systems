// Typography
const fonts = {
  sans: `Open Sans, sans-serif`
}

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96, 128]

const lineHeights = [1, 1.125, 1.25, 1.5]

const fontWeights = [
  600,
  800
]

// Colors
const color = {
  accent: '#FF5353',
  black: '#000',
  darkGrey: '#9C9C9C',
  lightGrey: '#EDEDED',
  red: '#F05D5E',
  white: '#FFF',
  disabled: '#DADEDF', // or opacity .3 of greyBlue
  opacity: {
    ghost: '.1'
  }
}

const breakpoints = [
  '48em',
  '64em',
  '75em'
]

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const space = [
  0,
  4,
  8,
  16,
  32,
  64,
  128
]

export default {
  fonts,
  fontWeights,
  lineHeights,
  fontSizes,
  color,
  breakpoints,
  space
}
