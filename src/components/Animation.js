import React from 'react'
import { useSpring, animated } from 'react-spring'

const blockBase = {
  position: 'absolute',
  bottom: 0,
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10
}

const BlockReveal = ({ bgColor, children, direction, delay }) => {
  const blockAnim = useSpring({
    from: { transformOrigin: 'right', width: '0%', transform: 'scaleX(1)' },
    to: async (next, cancel) => {
      await next({ transform: 'scaleX(1)', width: '100%' })
      await next({ transform: 'scaleX(0)' })
    },
    delay: delay || null
  })

  const { o } = useSpring({
    to: { o: '1' },
    from: { o: '0' },
    delay: 700
  })

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <animated.div
        className='block-reveal-base'
        style={{
          ...blockBase,
          ...blockAnim,
          backgroundColor: bgColor || '#EDEDED'
        }}
      />
      <animated.div style={{
        zIndex: -2,
        opacity: o.interpolate({ range: [0, 1], output: [0, 1] })
      }}>
        {children}
      </animated.div>
    </div>

  )
}

export default BlockReveal
