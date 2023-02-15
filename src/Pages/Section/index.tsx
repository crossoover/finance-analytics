/* eslint-disable prettier/prettier */
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import SectionLinks from '../../components/SectionLinks';
import { SectionsWrapper } from './styles';

type SectionProps = {
	subMenuRef: any;
	scrollHeight: number;
};

const Section: FC<SectionProps> = ({ subMenuRef, scrollHeight }) => (
	<>
		<SectionsWrapper>
			<SectionLinks subMenuRef={subMenuRef} scrollHeight={scrollHeight} />
			<Outlet />
		</SectionsWrapper>
		<Footer />
	</>
);

export default Section;
