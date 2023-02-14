/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
import { FC, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
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
} from './styles';

export type IOptionInput = {
	label: string;
	value: string;
};

type IOption = {
	name: string;
	inputs: IOptionInput[];
	formula: string;
	resultName: string;
	definition: string;
	calculationExplanation: string;
	normalValue: string;
};

const Option: FC = () => {
	const { sectionId, optionId } = useParams();
	const [values, setValues] = useState({});

	const {
		name,
		inputs,
		formula,
		resultName,
		definition,
		calculationExplanation,
		normalValue,
	} = {
		name: 'Чистые активы',
		inputs: [
			{
				label: 'Обязательства',
				name: 'num1',
			},
			{
				label: 'Собственный капитал',
				name: 'num2',
			},
		],
		formula: 'num1/num2',
		resultName: 'resultName',
		definition: 'test definition',
		calculationExplanation: 'test calculationExplanation',
		normalValue:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quas, mollitia vel hic earum distinctio quae, nobis ipsam ad ex animi quam! Voluptas excepturi voluptate delectus praesentium ea eligendi reiciendis dicta magnam nihil ex, neque obcaecati fugit iure provident ipsa? Natus numquam eius assumenda culpa minima. Cupiditate impedit atque fugiat veniam ad ipsam doloremque ea magnam quod a neque esse similique enim et explicabo autem eligendi voluptate, voluptas, quas veritatis libero! Deserunt sint minus nesciunt odio nobis vel quam nihil exercitationem eius inventore repudiandae ea dignissimos corrupti eum odit consequuntur explicabo maxime voluptatum libero, voluptate iste magnam debitis. Aliquid, provident.',
	};

	const computeValue = () => {
		if (Object.keys(values).length === inputs.length)
			// eslint-disable-next-line no-eval
			return eval(formula.replaceAll('num', 'values.num'));
	};

	const result = useMemo(() => computeValue(), [values]);

	return (
		<OptionWrapper>
			<OptionHeading>
				section: {sectionId} option: {optionId}
			</OptionHeading>
			<h3>Рассчитать {name.toLowerCase()}⬇️</h3>
			<FormWrapper>
				{inputs.map((item) => {
					return (
						<NumberInput
							type="number"
							name={item.name}
							placeholder={item.label}
							onChange={(e) =>
								setValues((prev) => {
									return { ...prev, [item.name]: Number(e.target.value) };
								})
							}
						/>
					);
				})}
			</FormWrapper>
			<Result>
				{resultName}: <ResultNumber>{result}</ResultNumber>
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
	);
};

export default Option;
