/* eslint-disable prettier/prettier */
import { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLogo from '../../components/MainLogo';
import MenuTrigger from '../../components/MenuTrigger';
import { PAGES_CONFIG_MAP } from '../../utils/constants';
import {
	BASE_ROUTE,
	getOptionRouteById,
	OPTION_ROUTE,
	SECTION_ROUTE,
} from '../../utils/routes';
import Dashboard from '../Dashboard';
import Section from '../Section';
import Option from '../Option';
import {
	Wrapper,
	MainNavigationLink,
	MobileMenu,
	Navigation,
	LogoText,
	NavigationLink,
	AllLinksWrapper,
	NavigationLinkItem,
} from './styles';

const renderLinks = (menuHandler: () => void, fireHandler: boolean) =>
	PAGES_CONFIG_MAP.map((item) => (
		<NavigationLinkItem
			onClick={fireHandler ? menuHandler : undefined}
			key={item.name}
		>
			<NavigationLink to={getOptionRouteById(item.id, 1)}>
				{item.name}
			</NavigationLink>
		</NavigationLinkItem>
	));

const Navigator = () => {
	const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
	const subMenuRef = useRef<any>(null);
	const [scrollHeight, setScrollHeight] = useState(0);

	useEffect(() => {
		setScrollHeight(subMenuRef?.current?.clientHeight);
	}, [isMenuActive]);

	const menuHandler = () => {
		setIsMenuActive(!isMenuActive);
		window.scrollTo(0, 0);
	};

	const closeMenu = () => {
		setIsMenuActive(false);
		window.scrollTo(0, 0);
	};

	return (
		<div>
			<Wrapper>
				<Navigation>
					<NavigationLinkItem onClick={closeMenu}>
						<MainNavigationLink to={BASE_ROUTE}>
							<MainLogo />
							<LogoText>Справочник финансиста</LogoText>
						</MainNavigationLink>
					</NavigationLinkItem>
					<MenuTrigger onClick={menuHandler} isActive={isMenuActive} />
					<MobileMenu isMenuActive={isMenuActive}>
						{renderLinks(menuHandler, true)}
					</MobileMenu>
					<AllLinksWrapper>{renderLinks(menuHandler, false)}</AllLinksWrapper>
				</Navigation>
			</Wrapper>
			<Routes>
				<Route path={BASE_ROUTE}>
					<Route
						path={SECTION_ROUTE}
						element={
							<Section scrollHeight={scrollHeight} subMenuRef={subMenuRef} />
						}
					>
						<Route path={OPTION_ROUTE} element={<Option />} />
					</Route>
					<Route index element={<Dashboard />} />
				</Route>
			</Routes>
		</div>
	);
};

export default Navigator;
