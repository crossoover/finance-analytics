import React from 'react'
import {
  NextScreenWrapper,
  MainWrapper,
  SpecialLink,
  PlusImage,
  ThirdPlusImage,
  ForthPlusImage,
  FifthSectionText,
  ForthSectionText,
  FirstSectionText,
  ThirdSectionText,
  SecondSectionText,
  Heading,
  SectionsWrapper,
  FirstSection,
  SecondSection,
  ThirdSection,
  ForthSection,
  FifthSection,
} from './styles'
import AdditionalInfo from './AdditionalInfo'
import Footer from '../../components/Footer'
import { getOptionRouteById } from '../../utils/routes'

const SECTION_LINKS_MAP = [
  {
    name: 'Анализ финансовой устойчивости',
    sectionId: 1,
    WrapperComponent: FirstSection,
    TextWrapperComponent: FirstSectionText,
    getPlusImageComponent: () => (
      <PlusImage
        src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=255&g=255&b=255"
        alt="plus image"
      />
    ),
  },
  {
    name: 'Анализ ликвидности',
    sectionId: 2,
    WrapperComponent: SecondSection,
    TextWrapperComponent: SecondSectionText,
    getPlusImageComponent: () => (
      <PlusImage
        src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=175&g=191&b=109"
        alt="plus image"
      />
    ),
  },
  {
    name: 'Анализ финансовых результатов',
    sectionId: 3,
    WrapperComponent: ThirdSection,
    TextWrapperComponent: ThirdSectionText,
    getPlusImageComponent: () => (
      <ThirdPlusImage
        src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=255&g=255&b=255"
        alt="plus image"
      />
    ),
  },
  {
    name: 'Анализ оборачиваемости и основных средств',
    sectionId: 4,
    WrapperComponent: ForthSection,
    TextWrapperComponent: ForthSectionText,
    getPlusImageComponent: () => (
      <ForthPlusImage
        src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=255&g=255&b=255"
        alt="plus image"
      />
    ),
  },
  {
    name: 'Финансовый анализ',
    sectionId: 5,
    WrapperComponent: FifthSection,
    TextWrapperComponent: FifthSectionText,
    getPlusImageComponent: () => (
      <PlusImage
        src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=0&g=0&b=0"
        alt="plus image"
      />
    ),
  },
]

const Dashboard = () => (
  <MainWrapper>
    <Heading>Ваш новый финансовый помощник уже здесь!</Heading>
    <SectionsWrapper>
      {SECTION_LINKS_MAP.map(
        ({
          name,
          sectionId,
          WrapperComponent,
          TextWrapperComponent,
          getPlusImageComponent,
        }) => (
          <SpecialLink to={getOptionRouteById(sectionId, 1)}>
            <WrapperComponent>
              <TextWrapperComponent>{name}</TextWrapperComponent>
              {getPlusImageComponent()}
            </WrapperComponent>
          </SpecialLink>
        )
      )}
    </SectionsWrapper>
    <NextScreenWrapper>
      <AdditionalInfo />
    </NextScreenWrapper>
    <Footer />
  </MainWrapper>
)

export default Dashboard
