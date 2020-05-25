import system from '@rebass/components'
import styled from 'styled-components'
import { Row } from 'react-flexbox-grid'

const containerStyles = ['color', 'space', 'height', 'justifyContent', 'maxWidth', 'width', 'minHeight']

const FlexRow = styled(Row)`
`

export const SectionWrapper = system({
  extend: FlexRow,
  p: [3, 4, 5, 6],
  height: 0
}, ...containerStyles)

export const SectionMax = system(
  {
    extend: FlexRow,
    maxWidth: 0,
    mt: 5,
    mb: 5
  },
  ...containerStyles,
  {
    width: '100%'
  }
)

export const Overlay = system({
  extend: FlexRow,
  minHeight: 0,
  width: '100%',
  bg: 'black70'
}, ...containerStyles)

// const fontSizes = [
//   '11.61', // 0
//   '11.85', // 1
//   '13.37', // 2
//   '13.7',  // 3
//   '13.82', // 4
//   '15.65', // 5
//   '15.8',  // 6
//   '19.36', // 7
//   '23.23', // 8
//   '32.91', // 9
//   '46.45', // 10
//   '57.3',  // 11
//   '91.68'  // 12
// ]
//
// const lineHeights = [
//   16, // 0
//   20, // 1
//   24, // 2
//   27, // 3
//   28, // 4
//   32, // 5
//   45, // 6
//   64, // 7
//   78, // 8
//   125 // 9
// ]
//
// const letterSpacings = [
//   '-1.5', // 0
//   '-0.5', // 1
//   '.1',   // 2
//   0,      // 3
//   '.15',  // 4
//   '.25',  // 5
//   '.4',   // 6
//   '.5',   // 7
//   '1.25', // 8
//   2       // 9
// ]
//
// const fontWeights = [
//   400, // 0 Regular
//   600, // 1 - Semi Bold
//   700, // 2 - Bold
//   800  // 3 - Extra Bold
// ]
//
// const space = [
//   0,  // 0
//   4,  // 1
//   8,  // 2
//   16, // 3
//   24, // 4
//   32, // 5
//   48, // 6
//   64  // 7
// ]
