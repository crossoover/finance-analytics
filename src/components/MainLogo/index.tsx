import { FC } from 'react'
import styled from 'styled-components'

const Logo = styled.svg`
  fill: white;
  width: 40px;
  height: 40px;
`

const MainLogo: FC = () => (
  <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-17 5c0-1.654 1.346-3 3-3h6v9h-9v-6zm0 14v-6h9v9h-6c-1.654 0-3-1.346-3-3zm20 0c0 1.654-1.346 3-3 3h-6v-9h9v6zm0-8h-9v-9h6c1.654 0 3 1.346 3 3v6zm-2 6h-5v-1h5v1zm-5-11h5v1h-5v-1zm0 13v-1h5v1h-5zm-6-2v1h-2v2h-1v-2h-2v-1h2v-2h1v2h2zm-1.793-10.5l1.414 1.414-.707.707-1.414-1.414-1.414 1.414-.708-.707 1.414-1.414-1.414-1.414.707-.707 1.415 1.414 1.415-1.415.708.708-1.416 1.414zm9.793-2c0-.276.224-.5.5-.5s.5.224.5.5-.224.5-.5.5-.5-.224-.5-.5zm1 4c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5z" />
  </Logo>
)

export default MainLogo
