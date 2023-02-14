/* eslint-disable no-nested-ternary */
import { ResizableBox } from 'react-resizable'
import styled from 'styled-components'

export const StyledResizableBox = styled(ResizableBox)`
  display: flex;
  padding-top: 90px;
  background: #8e8e8e;

  @media screen and (max-width: 1070px) {
    width: auto !important;
    border-bottom: 10px solid #000;
  }
`

export const ResizeButton = styled.div<{
  currentSidebarWidth: number
}>`
  background-color: black;
  cursor: ${(p) =>
    p.currentSidebarWidth === 266
      ? 'e-resize'
      : p.currentSidebarWidth === 800
      ? 'w-resize'
      : 'ew-resize'};
  width: 100px;

  @media screen and (max-width: 1070px) {
    display: none;
  }
`

export const SectionHeading = styled.h2`
  margin: 10px 20px;

  @media screen and (max-width: 1070px) {
    font-size: 30px;
    text-align: center;
  }
`

export const SectionLinksWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  @media screen and (max-width: 1070px) {
    justify-content: space-around;
  }
`

export const LinkItemWrapper = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
  box-shadow: 10px 10px 19px #727272, -10px -10px 19px #8e8e8e;
  border-radius: 15px;
  padding: 10px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: linear-gradient(145deg, #737373, #898989);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 9px 9px 18px #6a6a6a, -9px -9px 18px #969696;
  }

  @media screen and (max-width: 1070px) {
    max-width: 400px;
  }
`

export const LinkText = styled.p`
  font-size: 15px;

  @media screen and (max-width: 1070px) {
    font-size: 20px;
  }
`
