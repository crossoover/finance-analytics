import { FC } from 'react'
import { CirclesWrap, Circle } from './styles'
import { CIRCLE_CONFIG_MAP, MIN_WIDTH_BREAKPOINT } from '../../utils/constants'

export type ICircle = {
  size: number
  duration: number
  opacity: number
}

const RippleAnimation: FC = () => {
  return window.innerWidth > MIN_WIDTH_BREAKPOINT ? (
    <CirclesWrap>
      {CIRCLE_CONFIG_MAP.map((circle) => (
        <Circle key={circle.size} {...circle} />
      ))}
    </CirclesWrap>
  ) : null
}

export default RippleAnimation
