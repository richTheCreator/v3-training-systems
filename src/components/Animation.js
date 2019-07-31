import React, { Component, useRef } from 'react'
import { useSpring, animated, useChain } from 'react-spring'

const blockBase = {
  position: 'absolute',
  bottom: 0,
  top: 0,
  left: 0,
  right: 0,
  zIndex: 10
}

// const FancyButton = React.forwardRef((props, ref) => (
//   <button ref={ref} className='FancyButton'>
//     {props.children}
//   </button>
// ))

const BlockReveal = React.forwardRef(({ bgColor, children, direction, delay }, ref) => {
  const blockAnim = useSpring({
    from: { transformOrigin: 'right', width: '0%', transform: 'scaleX(1)' },
    to: async (next, cancel) => {
      await next({ transform: 'scaleX(1)', width: '100%' })
      await next({ transform: 'scaleX(0)' })
    },
    delay: delay || null,
    ref: ref || null
  })

  const fadeRef = useRef()
  const { o } = useSpring({
    to: { o: '1' },
    from: { o: '0' },
    ref: fadeRef
  })

  useChain([ ref, fadeRef ], [0, 0.8])

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
)

export default BlockReveal
