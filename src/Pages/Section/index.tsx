import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import SectionLinks from '../../components/SectionLinks'
import { SectionsWrapper } from './styles'

type SectionProps = {
  subMenuRef: any
  scrollHeight: number
}

const Section: FC<SectionProps> = ({ subMenuRef, scrollHeight }) => (
  <SectionsWrapper>
    <SectionLinks subMenuRef={subMenuRef} scrollHeight={scrollHeight} />
    <Outlet />
  </SectionsWrapper>
)

export default Section
