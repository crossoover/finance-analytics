/* eslint-disable prettier/prettier */
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const pulse = keyframes`
    0%{
        transform: scale(1);
    }
    
    50%{
        transform: scale(0.8);
    }
    
    100%{
        transform: scale(1);
    }
`;

export const Wrapper = styled.nav`
	display: flex;
`;

export const Navigation = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 0;
	position: fixed;
	background: #0f0f0f;
	width: 100vw;
	padding: 0 30px;
	height: 90px;
	z-index: 100;

	@media screen and (max-width: 1070px) {
		padding: 0;
	}
`;

export const AllLinksWrapper = styled.div`
	display: flex;

	@media screen and (max-width: 1070px) {
		display: none;
	}
`;

export const MobileMenu = styled.div<{ isMenuActive: boolean }>`
	display: ${({ isMenuActive }) => (isMenuActive ? 'flex' : 'none')};
	flex-direction: column;
	align-items: center;
	background: #808080;
	margin-top: 90px;
	width: 100vw;
	height: 100vh;
	position: absolute;
	z-index: 10;
`;

export const LogoText = styled.p`
	margin-left: 20px;
	color: white;
	font-weight: bold;
	font-size: 30px;
`;

export const NavigationLinkItem = styled.li<{ autoWidth?: boolean }>`
	list-style-type: none;
	border: 2px solid transparent;
	text-align: center;
	padding: 5px 15px;
	transition: 0.1s;
	width: ${(p) => (p.autoWidth ? 'auto' : '150px')};
	display: flex;
	align-items: center;
	transition: 0.1s;

	&:hover {
		border-bottom: 2px solid white;
	}

	@media screen and (max-width: 1070px) {
		width: 250px;
		margin-top: 10px;
		font-size: 20px;

		&:hover {
			border-bottom: 2px solid transparent;
		}
	}
`;

export const NavigationLink = styled(Link)`
	color: white;
	text-decoration: none;

	@media screen and (max-width: 1070px) {
		border-radius: 15px;
		box-shadow: 5px 5px 18px #747474, -5px -5px 18px #8c8c8c,
			inset 5px 5px 18px #6a6a6a, inset -5px -5px 18px #969696;
		padding: 10px;
		transition: 0.1s;

		&:active {
			animation: ${pulse} 0.1s linear;
		}
	}
`;

export const MainNavigationLink = styled(NavigationLink)`
	display: flex;
	align-items: center;
	font-size: 16px;

	@media screen and (max-width: 1070px) {
		margin-top: -10px;
		border: none;
		box-shadow: none;
	}
`;
