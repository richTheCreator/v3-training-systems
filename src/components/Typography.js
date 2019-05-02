import system from '@rebass/components'

const textStyles = ['fontSize', 'textAlign', 'fontWeight', 'fontStyle', 'color', 'lineHeight', 'letterSpacing', 'space']

export const H1 = system({
  is: 'H1',
  fontSize: [10, 11, 12],
  fontWeight: 3,
  fontStyle: 'italic',
  color: 'white',
  lineHeight: [7, 8, 9],
  letterSpacing: 0
}, ...textStyles)

export const H2 = system({
  is: 'H2',
  fontSize: [9, 10, 11],
  fontWeight: 3,
  color: 'black',
  lineHeight: [6, 7, 8],
  letterSpacing: 1,
  marginBottom: 4
}, ...textStyles)

export const H3 = system({
  is: 'H3',
  fontSize: 10,
  fontWeight: 2,
  color: 'black',
  lineHeight: 7,
  letterSpacing: 3
}, ...textStyles)

export const H4 = system({
  is: 'H4',
  fontSize: 9,
  fontWeight: 2,
  color: 'black',
  lineHeight: 6,
  letterSpacing: 5
}, ...textStyles)

export const H5 = system({
  is: 'H5',
  fontSize: 8,
  fontWeight: 2,
  color: 'black',
  lineHeight: 5,
  letterSpacing: 3
}, ...textStyles)

export const H6 = system({
  is: 'H6',
  fontSize: 7,
  fontWeight: 2,
  color: 'black',
  lineHeight: 3,
  letterSpacing: 5
}, ...textStyles)

export const Body1 = system({
  is: 'p',
  fontSize: 7,
  fontWeight: 0,
  color: 'darkGrey',
  lineHeight: 5,
  letterSpacing: 7
}, ...textStyles)

export const Body2 = system({
  is: 'p',
  fontSize: 4,
  fontWeight: 0,
  color: 'darkGrey',
  lineHeight: 1,
  letterSpacing: 5
}, ...textStyles)

export const Subtitle1 = system({
  is: 'p',
  fontSize: 5,
  fontWeight: 1,
  color: 'darkGrey',
  lineHeight: 2,
  letterSpacing: 4
}, ...textStyles)

export const Subtitle2 = system({
  is: 'p',
  fontSize: 3,
  fontWeight: 1,
  color: 'darkGrey',
  lineHeight: 2,
  letterSpacing: 2
}, ...textStyles)

export const Button = system({
  is: 'p',
  fontSize: 2,
  fontWeight: 3,
  color: 'accent',
  lineHeight: 0,
  letterSpacing: 8
}, ...textStyles)

export const Caption = system({
  is: 'p',
  fontSize: 1,
  fontWeight: 0,
  color: 'darkGrey',
  lineHeight: 0,
  letterSpacing: 6
}, ...textStyles)

export const Overline = system({
  is: 'p',
  fontSize: 4,
  fontWeight: 2,
  color: 'accent',
  lineHeight: 0,
  letterSpacing: 9
}, ...textStyles)

const fontSizes = [
  '11.61', // 0
  '11.85', // 1
  '13.37', // 2
  '13.7',  // 3
  '13.82', // 4
  '15.65', // 5
  '15.8',  // 6
  '19.36', // 7
  '23.23', // 8
  '32.91', // 9
  '46.45', // 10
  '57.3',  // 11
  '91.68'  // 12
]

const lineHeights = [
  16, // 0
  20, // 1
  24, // 2
  27, // 3
  28, // 4
  32, // 5
  45, // 6
  64, // 7
  78, // 8
  125 // 9
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
  400, // 0 Regular
  600, // 1 - Semi Bold
  700, // 2 - Bold
  800  // 3 - Extra Bold
]

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
