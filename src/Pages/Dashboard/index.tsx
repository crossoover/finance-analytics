import React from 'react'
import {
  NextScreenWrapper,
  GlobalStyle,
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

const Dashboard = () => {
  return (
    <MainWrapper>
      <GlobalStyle />
      <Heading>Ваш новый финансовый помощник уже здесь!</Heading>
      <SectionsWrapper>
        <SpecialLink to={getOptionRouteById(1, 1)}>
          <FirstSection>
            <FirstSectionText>Анализ финансовой устойчивости</FirstSectionText>
            <PlusImage
              src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=255&g=255&b=255"
              alt="Open button"
            />
          </FirstSection>
        </SpecialLink>

        <SpecialLink to={getOptionRouteById(2, 1)}>
          <SecondSection>
            <SecondSectionText>Анализ ликвидности</SecondSectionText>
            <PlusImage
              src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=175&g=191&b=109"
              alt="Open button"
            />
          </SecondSection>
        </SpecialLink>

        <SpecialLink to={getOptionRouteById(3, 1)}>
          <ThirdSection>
            <ThirdSectionText>Анализ финансовых результатов</ThirdSectionText>
            <ThirdPlusImage
              src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=255&g=255&b=255"
              alt="Open button"
            />
          </ThirdSection>
        </SpecialLink>

        <SpecialLink to={getOptionRouteById(4, 1)}>
          <ForthSection>
            <ForthSectionText>
              Анализ оборачиваемости и основных средств
            </ForthSectionText>
            <ForthPlusImage
              src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=255&g=255&b=255"
              alt="Open button"
            />
          </ForthSection>
        </SpecialLink>

        <SpecialLink to={getOptionRouteById(5, 1)}>
          <FifthSection>
            <FifthSectionText>Финансовый анализ</FifthSectionText>
            <PlusImage
              src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=0&g=0&b=0"
              alt="Open button"
            />
          </FifthSection>
        </SpecialLink>
      </SectionsWrapper>

      <NextScreenWrapper>
        <AdditionalInfo />
      </NextScreenWrapper>
      <Footer />
    </MainWrapper>
  )
}

export default Dashboard
