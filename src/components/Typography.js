import React from 'react'
import system from '@rebass/components'
import styled from 'styled-components'
import { borderColor, space, fontWeight, color } from 'styled-system'
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
  fontSize: 6,
  fontWeight: 0,
  color: 'darkGrey',
  lineHeight: 4,
  letterSpacing: 5
}, ...textStyles)

export const Subtitle1 = system({
  is: 'p',
  fontSize: 5,
  fontWeight: 3,
  fontStyle: 'italic',
  color: 'darkGrey',
  lineHeight: 2,
  letterSpacing: 4
}, ...textStyles, {
  textTransform: 'uppercase'})

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
  letterSpacing: 9
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

// VARIANTS
const ListItemSquare = styled.li`
  display: flex;
  align-items:center;
  &:before {
    ${borderColor}
    content: " ";
    flex-shrink: 0;
    position: relative;
    width: 11px;
    height: 11px;
    margin-right: 8px;
    font-weight: 400;
    font-size: 30px;
    vertical-align: sub;
    border-width: 2px;
    border-style: solid;
    border-image: initial;
    border-radius: 3px;  
      }
`
export const WithDecorator = ({ bodyText, bodyColor, decoratorColor }) => (
  <ListItemSquare borderColor={decoratorColor}>
    <Body2 color={bodyColor}> {bodyText} </Body2>
  </ListItemSquare>
)

export const Outlined = styled.p `
${space}
${fontWeight}
${color}
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: black;
text-align: left;
font-size: calc(${props => props.fontSize} + (40 - 18) * ((100vw - 300px) / (1600 - 300)));
font-style: italic;
display:inline-block;
min-width:10px;
`
