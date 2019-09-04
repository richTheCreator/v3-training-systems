import React, { useRef } from 'react'
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

const BlockReveal = React.forwardRef(
  ({ bgColor, children, direction, delay }, ref) => {
    const fadeRef = useRef()
    const revealRef = useRef()

    const fadeAnimation = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      ref: fadeRef
    })
    const blockAnimation = useSpring({
      to: [
        { opacity: 1, width: '100%', transform: 'scaleX(1)' },
        {
          opacity: 1,
          width: '100%',
          transform: 'scaleX(0)',
          transformOrigin: 'right'
        }
      ],
      from: {
        opacity: 0,
        width: '0%',
        transform: 'scaleX(1)',
        transformOrigin: 'left'
      },
      delay: delay || null,
      ref: revealRef
    })
    const parsed = delay
      ? delay
        .toString()
        .split('')
        .map(Number)[0]
      : null
    const deci = Number(`.${parsed}`)
    const stagered = [0.2, deci + 0.6, deci + 1]
    const noStager = [0.2, 0.6, 1]

    useChain([revealRef, fadeRef, ref], delay ? stagered : noStager)
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <animated.div
          native
          className='block-reveal-base'
          style={{
            ...blockBase,
            ...blockAnimation,
            backgroundColor: bgColor
          }}
        />
        <animated.div
          native
          style={{
            ...fadeAnimation,
            zIndex: -2
          }}
        >
          {children}
        </animated.div>
      </div>
    )
  }
)

const FadeInUp = React.forwardRef(({ children }, ref) => {
  const fadeRef = useRef()
  const { o, x } = useSpring({
    to: { o: '1', x: '100%' },
    from: { o: '0', x: '0%' },
    ref: fadeRef
  })

  useChain([fadeRef])

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <animated.div
        native
        style={{
          zIndex: -2,
          transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
          opacity: o.interpolate({ range: [0, 1], output: [0, 1] })
        }}
      >
        {children}
      </animated.div>
    </div>
  )
})

export { BlockReveal, FadeInUp }
