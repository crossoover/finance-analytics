import { FC, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  OptionWrapper,
  OptionHeading,
  FormWrapper,
  NumberInput,
  Result,
  ResultNumber,
  OptionInfo,
  OptionInfoHeading,
  OptionInfoDescription,
} from './styles'

export type IOptionInput = {
  label: string
  value: string
}

type IOption = {
  name: string
  inputs: IOptionInput[]
  formula: string
  definition: string
  calculationExplanation: string
  normalValue: string
}

const Option: FC = () => {
  const { optionId } = useParams()
  console.log(optionId)
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)

  const calculatedValue = useMemo(() => {
    if (!number1 || !number2) return null
    return number1 / number2
  }, [number1, number2])

  const {
    name,
    inputs,
    formula,
    definition,
    calculationExplanation,
    normalValue,
  } = {
    name: 'Чистые активы',
    inputs: [
      {
        label: 'Обязательства',
        value: 'num1',
      },
      {
        label: 'Собственный капитал',
        value: 'num2',
      },
    ],
    formula: 'num1/num2',
    definition: 'test definition',
    calculationExplanation: 'test calculationExplanation',
    normalValue:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quas, mollitia vel hic earum distinctio quae, nobis ipsam ad ex animi quam! Voluptas excepturi voluptate delectus praesentium ea eligendi reiciendis dicta magnam nihil ex, neque obcaecati fugit iure provident ipsa? Natus numquam eius assumenda culpa minima. Cupiditate impedit atque fugiat veniam ad ipsam doloremque ea magnam quod a neque esse similique enim et explicabo autem eligendi voluptate, voluptas, quas veritatis libero! Deserunt sint minus nesciunt odio nobis vel quam nihil exercitationem eius inventore repudiandae ea dignissimos corrupti eum odit consequuntur explicabo maxime voluptatum libero, voluptate iste magnam debitis. Aliquid, provident.',
  }

  return (
    <OptionWrapper>
      <OptionHeading>option: {optionId}</OptionHeading>
      <h3>Рассчитать {name.toLowerCase()}⬇️</h3>
      <FormWrapper>
        <NumberInput
          type="number"
          name="number1"
          placeholder="Обязательства"
          onChange={(e) => setNumber1(Number(e.target.value))}
        />
        <NumberInput
          type="number"
          name="number2"
          placeholder="Собственный капитал"
          onChange={(e) => setNumber2(Number(e.target.value))}
        />
      </FormWrapper>
      <Result>
        Чистые активы: <ResultNumber>{calculatedValue}</ResultNumber>
      </Result>
      <div>
        <OptionInfo>
          <OptionInfoHeading>Определение</OptionInfoHeading>
          <OptionInfoDescription>{definition}</OptionInfoDescription>
        </OptionInfo>
        <OptionInfo>
          <OptionInfoHeading>Расчет (формула)</OptionInfoHeading>
          <OptionInfoDescription>
            {calculationExplanation}
          </OptionInfoDescription>
        </OptionInfo>
        <OptionInfo>
          <OptionInfoHeading>Нормальное значение</OptionInfoHeading>
          <OptionInfoDescription>{normalValue}</OptionInfoDescription>
        </OptionInfo>
      </div>
    </OptionWrapper>
  )
}

export default Option
