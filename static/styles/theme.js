// Typography
const fonts = {
  sans: `Open Sans, sans-serif`
}

const fontSizes = [
  '11.61px', // 0
  '11.85px', // 1
  '13.37px', // 2
  '13.7px',  // 3
  '13.82px', // 4
  '15.65px', // 5
  '15.8px',  // 6
  '19.36px', // 7
  '23.23px', // 8
  '32.91px', // 9
  '46.45px', // 10
  '57.3px',  // 11
  '91.68px'  // 12
]

const lineHeights = [
  '16px', // 0
  '20px', // 1
  '24px', // 2
  '27px', // 3
  '28px', // 4
  '32px', // 5
  '45px', // 6
  '64px', // 7
  '78px', // 8
  '125px' // 9
]

const letterSpacings = [
  '-1.5', // 0
  '-0.5', // 1
  '.1',   // 2
  0,      // 3
  '.15',  // 4
  '.25',  // 5
  '.4',   // 6
  '.5',   // 7
  '1.25', // 8
  2       // 9
]

const fontWeights = [
  400, // 0 - Regular
  600, // 1 - Semi Bold
  700, // 2 - Bold
  800  // 3 - Extra Bold
]

const heights = [
  '100%',
  '100vh'
]

// Colors
const colors = {
  accent: '#FF5353',
  black: '#000',
  darkGrey: '#4e4e4e',
  lightGrey: '#EDEDED',
  red: '#F05D5E',
  white: '#FFF',
  disabled: '#DADEDF', // or opacity .3 of greyBlue
  opacity: {
    ghost: '.1'
  }
}

const breakpoints = ['48em', '64em', '75em']

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const space = [
  0,  // 0
  4,  // 1
  8,  // 2
  16, // 3
  24, // 4
  32, // 5
  48, // 6
  64  // 7
]

export default {
  fonts,
  fontWeights,
  lineHeights,
  fontSizes,
  breakpoints,
  letterSpacings,
  heights,
  space,
  colors
}
