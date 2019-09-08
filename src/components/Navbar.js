import React, { useState, useRef } from 'react'
import { Link } from 'gatsby'
import { Row, Col } from 'react-flexbox-grid'
import { fontSize } from 'styled-system'
import {
  useSpring,
  useTransition,
  useChain,
  config,
  animated
} from 'react-spring'
import styled from 'styled-components'

const NavWrapper = styled.header`
  top: 0px;
  left: 0px;
  right: 0px;
  position: fixed;
  z-index: 1000;
  height: 55px;
  padding: 0px 32px;
  background-color: ${props => props.theme.colors.white};
`

const LinkStyle = styled(Link)`
  vertical-align: middle;
  display: table-cell;
  height: 55px;
  padding: 0px 24px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSizes[4]};
  font-weight: ${props => props.theme.fontWeights[2]};
  color: ${props => props.theme.colors.black};
  letter-spacing: ${props => props.theme.letterSpacings[8]};
`

const MenuList = styled(Col)`
  position: fixed;
  opacity: 0;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 55px;
  height: 100%;
  z-index: 10;
  overflow-y: scroll;
  transform-origin: top;
  background: ${props => props.theme.colors.white};
`

function makeClassComponent (WrappedComponent) {
  return class extends React.Component {
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
}

const AnimatedMenu = animated(makeClassComponent(MenuList))
const AnimatedLink = animated(makeClassComponent(LinkStyle))

const NavbarLG = ({ menuLinks }) => (
  <Row className="hidden-xs hidden-sm" middle="xs">
    <Col xs={-1}>
      <Link to="/" className="navbar-item" title="Logo">
        <svg
          width="60"
          height="32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.769 0h8.423L18.434 31.371h-6.571L0 0h8.6l7.452 21.105L26.77 0zM54.01 15.394c1.573.487 2.811 1.283 3.714 2.386.903 1.104 1.355 2.459 1.355 4.064 0 1.835-.48 3.469-1.442 4.902-.961 1.433-2.367 2.558-4.217 3.375-1.85.817-4.07 1.226-6.663 1.226-2.272 0-4.399-.287-6.38-.86-1.98-.573-3.684-1.376-5.112-2.408l3.015-5.719c2.71 1.835 5.564 2.752 8.564 2.752 1.515 0 2.651-.287 3.408-.86.758-.573 1.136-1.405 1.136-2.494 0-1.118-.364-1.92-1.092-2.408-.728-.487-1.864-.731-3.408-.731h-4.72l.525-6.192h3.933c1.631 0 2.847-.265 3.648-.795.801-.53 1.202-1.355 1.202-2.473 0-1.95-1.267-2.924-3.801-2.924-1.282 0-2.608.236-3.977.71a15.565 15.565 0 0 0-3.932 2.042l-2.054-5.719c1.31-1.032 2.928-1.835 4.85-2.408C44.485.287 46.553 0 48.767 0c2.068 0 3.91.33 5.527.989 1.617.66 2.877 1.591 3.78 2.795s1.354 2.594 1.354 4.171c0 3.583-1.806 6.063-5.418 7.439z"
            fill="#FF5353"
          />
        </svg>
      </Link>
    </Col>
    <Col style={{ padding: '0px 16px' }}>
      <Row around="xs">
        {menuLinks.map(navItems =>
          navItems.link !== navItems.link[0] ? (
            <Row style={{ display: 'table' }}>
              <LinkStyle to={navItems.link}>{navItems.name}</LinkStyle>
            </Row>
          ) : null
        )}
      </Row>
    </Col>
  </Row>
)
const NavbarSM = ({ menuLinks, toggleMenu }) => (
  <Row
    style={{ height: '100%' }}
    className="hidden-xl hidden-lg hidden-md"
    middle="xs"
  >
    <Col>
      <Row around="xs">
        <svg
          onClick={toggleMenu}
          width="28"
          height="23"
          viewBox="0 0 28 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.7954 0H1.12795C0.50502 0 0 1.0912 0 2.43718C0 3.78316 0.50502 4.87436 1.12795 4.87436H26.7954C27.4184 4.87436 27.9234 3.78316 27.9234 2.43718C27.9234 1.0912 27.4184 0 26.7954 0ZM26.7954 9.06282H1.12795C0.50502 9.06282 0 10.1539 0 11.5C0 12.8461 0.50502 13.9372 1.12795 13.9372H26.7954C27.4184 13.9372 27.9234 12.8461 27.9234 11.5C27.9234 10.154 27.4184 9.06282 26.7954 9.06282ZM1.12795 18.1256H26.7954C27.4184 18.1256 27.9234 19.2167 27.9234 20.5628C27.9234 21.9089 27.4184 23 26.7954 23H1.12795C0.50502 23 0 21.9089 0 20.5628C0 19.2167 0.50502 18.1256 1.12795 18.1256Z"
            fill="black"
          />
        </svg>
      </Row>
    </Col>
    <Col style={{ width: '100%', textAlign: 'center' }} xs={10}>
      <Link to="/" className="navbar-item" title="Logo">
        <svg
          width="60"
          height="32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.769 0h8.423L18.434 31.371h-6.571L0 0h8.6l7.452 21.105L26.77 0zM54.01 15.394c1.573.487 2.811 1.283 3.714 2.386.903 1.104 1.355 2.459 1.355 4.064 0 1.835-.48 3.469-1.442 4.902-.961 1.433-2.367 2.558-4.217 3.375-1.85.817-4.07 1.226-6.663 1.226-2.272 0-4.399-.287-6.38-.86-1.98-.573-3.684-1.376-5.112-2.408l3.015-5.719c2.71 1.835 5.564 2.752 8.564 2.752 1.515 0 2.651-.287 3.408-.86.758-.573 1.136-1.405 1.136-2.494 0-1.118-.364-1.92-1.092-2.408-.728-.487-1.864-.731-3.408-.731h-4.72l.525-6.192h3.933c1.631 0 2.847-.265 3.648-.795.801-.53 1.202-1.355 1.202-2.473 0-1.95-1.267-2.924-3.801-2.924-1.282 0-2.608.236-3.977.71a15.565 15.565 0 0 0-3.932 2.042l-2.054-5.719c1.31-1.032 2.928-1.835 4.85-2.408C44.485.287 46.553 0 48.767 0c2.068 0 3.91.33 5.527.989 1.617.66 2.877 1.591 3.78 2.795s1.354 2.594 1.354 4.171c0 3.583-1.806 6.063-5.418 7.439z"
            fill="#FF5353"
          />
        </svg>
      </Link>
    </Col>
  </Row>
)

const Navbar = ({ menuLinks }) => {
  const [expanded, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(expanded => !expanded)
  }

  // Animation helpers
  const menuRef = useRef()
  const springMenu = useSpring({
    opacity: expanded ? 1 : 0,
    transform: expanded ? 'scaleY(1)' : 'scaleY(0)',
    ref: menuRef
    // visibility: expanded ? 'visible' : 'hidden'
  })
  const trailRef = useRef()
  const transitions = useTransition(
    expanded ? menuLinks : [],
    item => item.name,
    {
      from: { opacity: 0, transform: 'translate3d(0,-100px,0)' },
      enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(0,-100px,0)' },
      unique: true,
      trail: 300 / menuLinks.length,
      ref: trailRef
      // delay: 200,
    }
  )

  useChain(expanded ? [menuRef, trailRef] : [trailRef, menuRef], [0, 0])

  return (
    <NavWrapper>
      <NavbarLG menuLinks={menuLinks} />
      <NavbarSM menuLinks={menuLinks} toggleMenu={toggleMenu} />
      <AnimatedMenu xs={12} native style={{ ...springMenu }}>
        {transitions.map(({ item, key, props }) => (
          <Row style={{ display: 'table', margin: '8px 0' }}>
            <AnimatedLink key={key} style={props} to={item.link}>
              {item.name}
            </AnimatedLink>
          </Row>
        ))}
      </AnimatedMenu>
    </NavWrapper>
  )
}

export default Navbar
