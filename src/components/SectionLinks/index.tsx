import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ALL_OPTIONS, MIN_WIDTH_BREAKPOINT } from '../../utils/constants'
import { getOptionRouteById } from '../../utils/routes'
import {
  LinkText,
  SectionHeading,
  LinkItemWrapper,
  SectionLinksWrapper,
  Wrapper,
} from './styles'

const scroll = (height: number) => {
  setTimeout(() => {
    if (window.innerWidth < MIN_WIDTH_BREAKPOINT) {
      window.scrollTo({
        // 90 here goes for the subtracted height of the navbar
        top: height - 90,
        behavior: 'smooth',
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }, 0)
}

type SectionLinksProps = {
  subMenuRef: any
  scrollHeight: number
}

const SectionLinks: FC<SectionLinksProps> = ({ subMenuRef, scrollHeight }) => {
  const navigate = useNavigate()
  const { sectionId } = useParams()
  const { label, options, id } = ALL_OPTIONS[Number(sectionId) - 1]

  return (
    <Wrapper ref={subMenuRef}>
      <SectionHeading>{label}</SectionHeading>
      <SectionLinksWrapper>
        {options.map((item, index) => (
          <LinkItemWrapper
            key={item.id}
            onClick={() => {
              navigate(getOptionRouteById(id, index + 1))
              scroll(scrollHeight)
            }}
          >
            <LinkText>{item.name}</LinkText>
          </LinkItemWrapper>
        ))}
      </SectionLinksWrapper>
    </Wrapper>
  )
}

export default SectionLinks
