import styled, { keyframes } from 'styled-components'
import { ICircle } from '.'

const ripple = keyframes`
    0%{
      transform: scale(0.8);
    }
    
    50%{
      transform: scale(1.1);
    }
    
    100%{
      transform: scale(0.8);
    }
`

export const CirclesWrap = styled.div`
  z-index: -1;
  width: 650px;
  height: 650px;
  top: 220px;
  right: 0px;
  overflow: hidden;
  position: absolute;
`

export const Circle = styled.div<ICircle>`
  position: absolute;
  border-radius: 50%;
  background: #000000;
  box-shadow: 0px 0px 1px 0px #616161;
  z-index: -1;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  right: -${({ size }) => size / 2}px;
  bottom: -${({ size }) => size / 2}px;
  opacity: ${({ opacity }) => opacity};
  animation: ${ripple} ${({ duration }) => duration}s infinite;
`
