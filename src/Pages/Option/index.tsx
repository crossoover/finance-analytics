/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
import { FC, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast, Slide } from 'react-toastify';
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
import 'react-toastify/dist/ReactToastify.css';

export type IOptionInput = {
	label: string;
	value: string;
};

const successToast = () =>
	toast.success('Результат скопійовано в буфер обміну.', {
		toastId: 'success1',
	});

const errorToast = () =>
	toast.error(
		'Cталась помилка, будь ласка, перевірте правильність введених даних.',
		{ toastId: 'error1' }
	);

const Option: FC = () => {
	const { sectionId, optionId } = useParams();
	const [values, setValues] = useState<any>({});
	const { name, inputs, formula, resultName, info } =
		OPTIONS_CONFIG_LIST[Number(sectionId) - 1][Number(optionId) - 1];

	const areAllValuesEntered = Object.keys(values).length === inputs.length;

	const computeValue = () => {
		if (areAllValuesEntered) {
			// eslint-disable-next-line no-eval
			const res = eval(formula.replaceAll('num', 'values.num'));
			return !Number.isNaN(res) && res !== Infinity && res !== -Infinity
				? Math.round((res + Number.EPSILON) * 100) / 100
				: 'Помилка вводу.';
		}
	};

	const result = useMemo(() => {
		const res = computeValue();
		if (res === 'Помилка вводу.') errorToast();
		return res;
	}, [values]);

	const isError = result === 'Помилка вводу.';

	useEffect(() => setValues({}), [sectionId, optionId]);

	if (!sectionId || !optionId) return null;

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
				{areAllValuesEntered && !isError && `${resultName}: `}
				<ResultNumber
					onClick={() => {
						if (isError) return;
						successToast();
						navigator.clipboard.writeText(String(result));
					}}
					error={isError}
				>
					{result}
				</ResultNumber>
			</Result>
			<div>
				{info.map(({ heading, body }) => (
					<OptionInfo>
						<OptionInfoHeading>{heading}</OptionInfoHeading>
						<OptionInfoDescription dangerouslySetInnerHTML={{ __html: body }} />
					</OptionInfo>
				))}
			</div>
			<ToastContainer transition={Slide} limit={2} autoClose={3000} />
		</OptionWrapper>
	);
};

export default Option;
