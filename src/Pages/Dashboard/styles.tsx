import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MainWrapper = styled.div`
  padding-top: 100px;
  min-height: 100vh;
`

export const SpecialLink = styled(Link)`
  text-decoration: none;
`

export const Heading = styled.h1`
  text-align: center;
  padding: 10px;
`

export const SectionText = styled.p`
  font-weight: bold;
  font-size: 28px;
`

export const FirstSectionText = styled(SectionText)`
  font-size: 32px;
  color: white;
`

export const SecondSectionText = styled(SectionText)`
  font-size: 37px;
  background: #95cb5a;
  background: -webkit-linear-gradient(to right, #95cb5a 0%, #dac355 100%);
  background: -moz-linear-gradient(to right, #95cb5a 0%, #dac355 100%);
  background: linear-gradient(to right, #95cb5a 0%, #dac355 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const ThirdSectionText = styled(SectionText)`
  color: white;
  font-size: 35px;
`

export const ForthSectionText = styled(SectionText)`
  color: white;
`

export const FifthSectionText = styled(SectionText)`
  font-size: 35px;
`

export const SectionsWrapper = styled.div`
  margin: 10px 0 0 100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  max-width: 700px;
  padding: 50px 0;

  @media screen and (max-width: 1070px) {
    margin: 20px auto;
  }
`

export const Section = styled.div`
  width: 300px;
  height: 160px;
  margin: 20px;
  border-radius: 15px;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 19px 19px 38px #ededed, -19px -19px 38px #ededed;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 10px 10px 20px #e7e7e7, -10px -10px 20px #e7e7e7;
    transform: scale(0.98);
  }

  @media screen and (max-width: 1070px) {
    transform: scale(0.95);
    transition: 0.1s;
  }
`

export const FirstSection = styled(Section)`
  background: #000;
`

export const SecondSection = styled(Section)`
  background: #fff;
`

export const ThirdSection = styled(Section)`
  background: rgb(255, 200, 39);
  background: linear-gradient(
    163deg,
    rgba(255, 200, 39, 1) 0%,
    rgba(252, 128, 66, 1) 50%,
    rgba(239, 109, 155, 1) 100%
  );
`

export const ForthSection = styled(Section)`
  background: linear-gradient(
    94deg,
    rgba(149, 203, 90, 0.6) 0%,
    rgba(218, 195, 85, 0.6) 80%
  );
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`

export const FifthSection = styled(Section)`
  background: #fff;
`

export const PlusImage = styled.img`
  width: 22px;
  height: 22px;
  align-self: flex-end;
  transition: 0.25s;
  transition-delay: 0.8s;

  &:hover {
    transition-delay: 0.01s;
    transform: rotate(135deg);
    cursor: pointer;
  }
`

export const ThirdPlusImage = styled(PlusImage)`
  margin-top: -2px;
`

export const ForthPlusImage = styled(PlusImage)`
  margin-top: -10px;
`

export const NextScreenWrapper = styled.div`
  background: black;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 150px 0;
`
