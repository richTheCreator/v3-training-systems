// Typography
const fonts = {
  sans: `-apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif`
}

const fontSizes = [
  '11.61px', // 0
  '11.85px', // 1
  '13.37px', // 2
  '13.7px', // 3
  '13.82px', // 4
  '15.65px', // 5
  '16px', // 6
  '19.36px', // 7
  '23.23px', // 8
  '32.91px', // 9
  '46.45px', // 10
  '57.3px', // 11
  '91.68px' // 12
]

const lineHeights = [
  '16px', // 0
  '20px', // 1
  '24px', // 2
  '27px', // 3
  '28px', // 4
  '32px', // 5
  '45px', // 6
  '54px', // 7
  '78px', // 8
  '125px' // 9
]

const letterSpacings = [
  '-1.5px', // 0
  '-0.5px', // 1
  '.1px', // 2
  0, // 3
  '.15px', // 4
  '.25px', // 5
  '.4px', // 6
  '.5px', // 7
  '1.25px', // 8
  2, // 9
  4, // 10
  6, // 11
  9 // 12
]

const fontWeights = [
  400, // 0 - Regular
  600, // 1 - Semi Bold
  700, // 2 - Bold
  800 // 3 - Extra Bold
]

const heights = ['100%', '100vh']

const maxWidths = ['1200px', '1800px']

// Colors
const colors = {
  accent: '#FF5353',
  black: '#191c1f',
  blackBlue: '#222529',
  black70: 'rgba(0,0,0,.7)',
  darkGrey: '#4e4e4e',
  mdGrey: '#9d9d9d',
  lightGrey: '#EDEDED',
  greyBlue: '#F5F7F9',
  red: '#F05D5E',
  teal: '#629E9D',
  white: '#FFF',
  disabled: '#DADEDF' // or opacity .3 of greyBlue
}

const minHeights = ['100%', '100vh', '85vh']

const breakpoints = ['576px', '768px', '992px', '1200px']

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const space = [
  0, // 0
  4, // 1
  8, // 2
  16, // 3
  24, // 4
  32, // 5
  48, // 6
  64 // 7
]

const zIndices = [-1, 0, 1, 2, 4, 8]

const shadows = {
  md: '0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04);',
  sm: '0px 0px 1px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06), 0px 4px 8px rgba(0, 0, 0, 0.04);'
}

const borderRadius = {
  sm: 4,
  md: 8,
  xl: 20
}

export default {
  borderRadius,
  shadows,
  zIndices,
  fonts,
  minHeights,
  fontWeights,
  lineHeights,
  fontSizes,
  breakpoints,
  letterSpacings,
  maxWidths,
  heights,
  space,
  colors
}
