/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

export const OptionWrapper = styled.div`
	background: #f2f2f2;
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 100px 15px 0 15px;
	min-height: 100vh;

	@media screen and (max-width: 1070px) {
		padding: 20px;
	}
`;

export const OptionHeading = styled.h2`
	text-align: center;
	font-size: 30px;
	margin-bottom: 30px;
	background: linear-gradient(
		90deg,
		rgba(4, 54, 4, 1) 0%,
		rgba(164, 187, 45, 1) 35%,
		rgba(255, 143, 0, 1) 100%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
`;

export const NumberInput = styled.input`
	max-width: 430px;
	padding: 10px 20px;
	margin-top: 20px;
	border-radius: 10px;
	background: #f2f2f2;
	box-shadow: 9px 9px 11px #e3e3e3, -9px -9px 11px #ffffff;
	-webkit-appearance: none;

	&::placeholder {
		font-size: 15px;
	}
`;

export const Result = styled.p`
	margin-top: 20px;
	font-size: 20px;
`;

export const ResultNumber = styled.span<{ error: boolean }>`
	font-weight: bold;
	color: ${(props) => props.error && 'red'};

	${(props) =>
		!props.error &&
		css`
			cursor: pointer;

			&:hover {
				text-decoration: underline;
			}
		`};
`;

export const OptionInfo = styled.div`
	margin: 50px 0;
	box-shadow: 9px 9px 11px #e3e3e3, -9px -9px 11px #ffffff;
	padding: 20px;
	border-radius: 20px;
`;

export const OptionInfoHeading = styled.h3`
	font-size: 25px;
	margin-bottom: 10px;
`;

export const OptionInfoDescription = styled.p`
	text-align: left;
	@media screen and (max-width: 1070px) {
		font-size: 18px;
	}
`;

export const LabelForInput = styled.label`
	font-size: 12px;
	margin-top: 3px;
`;
