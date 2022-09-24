import { FC } from 'react'
import styled, { css } from 'styled-components'

const Menu = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 30px;
  margin: 30px 20px 0 0;

  @media screen and (max-width: 1070px) {
    display: flex;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      > div {
        :first-of-type {
          transform-origin: 0;
          rotate: 45deg;
          width: 125%;
        }
        :nth-of-type(2) {
          scale: 0;
        }
        :last-of-type {
          transform-origin: 0;
          rotate: -45deg;
          width: 125%;
        }
      }
    `}
`

const MenuLine = styled.div`
  width: 100%;
  height: 3px;
  background: #ffffff;
  transition: 0.2s;
`

type MenuTriggerProps = {
  onClick: () => void
  isActive: boolean
}

export const MenuTrigger: FC<MenuTriggerProps> = ({ onClick, isActive }) => {
  return (
    <Menu onClick={onClick} isActive={isActive}>
      <MenuLine />
      <MenuLine />
      <MenuLine />
    </Menu>
  )
}

export default MenuTrigger
