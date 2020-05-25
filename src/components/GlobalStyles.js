import {
  createGlobalStyle
} from 'styled-components'
import theme from '../../public/styles/theme'

export const GlobalStyle = createGlobalStyle`
  body,
  .article {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    margin: auto;
    color:#191c1f
  }
  blockquote {
    border-left: 5px solid ${theme.colors.lightGrey};
    padding-left: 1.5rem;
    margin-left: 0px;
    margin-right: 1.5rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
  }
  }
  h1 {
    font-size: ${theme.fontSizes[12]};
    font-weight: ${theme.fontWeights[2]};
    color: ${theme.colors.black};
    line-height: ${theme.lineHeights[9]};
    letter-spacing: ${theme.letterSpacings[0]};
  }
  h2 {
    font-size: ${theme.fontSizes[11]};
    font-weight: ${theme.fontWeights[2]};
    color: ${theme.colors.black};
    line-height: ${theme.lineHeights[8]};
    letter-spacing: ${theme.letterSpacings[1]};
  }
  h3 {
    font-size: ${theme.fontSizes[10]};
    font-weight: ${theme.fontWeights[2]};
    color: ${theme.colors.black};
    line-height: ${theme.lineHeights[7]};
    letter-spacing: ${theme.letterSpacings[0]};
  }
  h4 {
    font-size: ${theme.fontSizes[9]};
    font-weight: ${theme.fontWeights[2]};
    color: ${theme.colors.black};
    line-height: ${theme.lineHeights[6]};
    letter-spacing: ${theme.letterSpacings[5]};
  }
  h5 {
    font-size: ${theme.fontSizes[8]};
    font-weight: ${theme.fontWeights[2]};
    color: ${theme.colors.black};
    line-height: ${theme.lineHeights[5]};
    letter-spacing: ${theme.letterSpacings[5]};
    margin: 16px 0px;
  }
  h6 {
    font-size: ${theme.fontSizes[7]};
    font-weight: ${theme.fontWeights[2]};
    color: ${theme.colors.black};
    line-height: ${theme.lineHeights[3]};
    letter-spacing: ${theme.letterSpacings[5]};
    margin: 8px 0px;
  }
  p {
    font-size: ${theme.fontSizes[7]};
    font-weight: 300;
    color: ${theme.colors.darkGrey};
    line-height: ${theme.lineHeights[5]};
    letter-spacing: ${theme.letterSpacings[7]};
    margin: 8px 0px;
  }
  li {
    padding: 8px 0px;
    font-size: ${theme.fontSizes[6]};
    font-weight: 300;
    color: ${theme.colors.darkGrey};
    line-height: ${theme.lineHeights[4]};
    letter-spacing: ${theme.letterSpacings[7]};
  }
  li p {
    margin:0px;
  }
  .outlinedFont {
    font-weight: 800;
    fill: transparent;
    stroke: white;
    font-style: italic;
    stroke-width: 0.3px;
    display: block;
    max-width: 1200px;
    margin: auto;
    stroke-dasharray: 1000;
  }

  .block-reveal-base {
    height: 100%;
    /* width: 100%; */
    animation-fill-mode: both;
  }

  /*  FLEXBOX GRID OVERRIDES  */

  .row {
    margin-left: 0px;
    margin-right: 0px;
  }
`
