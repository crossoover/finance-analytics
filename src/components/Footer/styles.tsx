/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const FooterWrap = styled.div`
	width: 100vw;
	min-height: 250px;
	background: #0f0f0f;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const LinksWrapper = styled.div`
	width: 200px;
	display: flex;
	justify-content: space-between;
`;

export const LinkImage = styled.img`
	width: 35px;
	transition: 0.2s;

	&:hover {
		transform: scale(0.95);
	}
`;

export const FooterText = styled.p`
	margin-top: 30px;
	font-weight: bold;
	background: rgba(255, 200, 39, 1);
	background: -webkit-linear-gradient(
		163deg,
		rgba(255, 200, 39, 1) 0%,
		rgba(252, 128, 66, 1) 50%,
		rgba(239, 109, 155, 1) 100%
	);
	background: -moz-linear-gradient(
		163deg,
		rgba(255, 200, 39, 1) 0%,
		rgba(252, 128, 66, 1) 50%,
		rgba(239, 109, 155, 1) 100%
	);
	background: linear-gradient(
		163deg,
		rgba(255, 200, 39, 1) 0%,
		rgba(252, 128, 66, 1) 50%,
		rgba(239, 109, 155, 1) 100%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;
