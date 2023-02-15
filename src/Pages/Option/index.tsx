/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
import { FC, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { OPTIONS_CONFIG_LIST } from '../../utils/constants';
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

const Option: FC = () => {
	const { sectionId, optionId } = useParams();
	const [values, setValues] = useState<any>({});

	if (!sectionId || !optionId) return null;

	const { name, inputs, formula, resultName, info } =
		OPTIONS_CONFIG_LIST[Number(sectionId) - 1][Number(optionId) - 1];

	const computeValue = () => {
		if (Object.keys(values).length === inputs.length) {
			// eslint-disable-next-line no-eval
			const res = eval(formula.replaceAll('num', 'values.num'));
			return !Number.isNaN(res) && res !== Infinity && res !== -Infinity
				? res
				: 'сталася помилка, будь ласка, перевірте ввід даних.';
		}
	};

	const result = useMemo(() => computeValue(), [values]);

	useEffect(() => setValues({}), [sectionId, optionId]);

	return (
		<OptionWrapper>
			<OptionHeading>{name}</OptionHeading>
			<h3>Розрахувати {name.toLowerCase()} ⬇️</h3>
			<FormWrapper>
				{inputs.map(({ name: inputName, label }) => (
					<NumberInput
						type="number"
						name={inputName}
						placeholder={label}
						value={values[inputName]}
						onChange={(e) =>
							setValues((prev: any) => {
								return { ...prev, [inputName]: Number(e.target.value) };
							})
						}
					/>
				))}
			</FormWrapper>
			<Result>
				{resultName}: <ResultNumber>{result}</ResultNumber>
			</Result>
			<div>
				{info.map(({ heading, body }) => (
					<OptionInfo>
						<OptionInfoHeading>{heading}</OptionInfoHeading>
						<OptionInfoDescription dangerouslySetInnerHTML={{ __html: body }} />
					</OptionInfo>
				))}
			</div>
		</OptionWrapper>
	);
};

export default Option;
