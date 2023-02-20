/* eslint-disable prettier/prettier */
import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import {
	NextScreenWrapper,
	MainWrapper,
	SpecialLink,
	PlusImage,
	ThirdPlusImage,
	ForthPlusImage,
	FifthSectionText,
	ForthSectionText,
	FirstSectionText,
	ThirdSectionText,
	SecondSectionText,
	Heading,
	SectionsWrapper,
	FirstSection,
	SecondSection,
	ThirdSection,
	ForthSection,
	FifthSection,
} from './styles';
import AdditionalInfo from './AdditionalInfo';
import Footer from '../../components/Footer';
import { getOptionRouteById } from '../../utils/routes';

const SECTION_LINKS_MAP = [
	{
		name: 'Аналіз фінансової стійкості',
		sectionId: 1,
		WrapperComponent: FirstSection,
		TextWrapperComponent: FirstSectionText,
		imageComponent: (
			<PlusImage
				src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=255&g=255&b=255"
				alt="plus image"
			/>
		),
	},
	{
		name: 'Аналіз ліквідності',
		sectionId: 2,
		WrapperComponent: SecondSection,
		TextWrapperComponent: SecondSectionText,
		imageComponent: (
			<PlusImage
				src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=175&g=191&b=109"
				alt="plus image"
			/>
		),
	},
	{
		name: 'Аналіз фінансових результатів',
		sectionId: 3,
		WrapperComponent: ThirdSection,
		TextWrapperComponent: ThirdSectionText,
		imageComponent: (
			<ThirdPlusImage
				src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=255&g=255&b=255"
				alt="plus image"
			/>
		),
	},
	{
		name: 'Аналіз оборотності та основних ресурсів',
		sectionId: 4,
		WrapperComponent: ForthSection,
		TextWrapperComponent: ForthSectionText,
		imageComponent: (
			<ForthPlusImage
				src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=255&g=255&b=255"
				alt="plus image"
			/>
		),
	},
	{
		name: 'Фінансовий аналіз',
		sectionId: 5,
		WrapperComponent: FifthSection,
		TextWrapperComponent: FifthSectionText,
		imageComponent: (
			<PlusImage
				src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.0.0/png/iconmonstr-plus-circle-filled.png&r=0&g=0&b=0"
				alt="plus image"
			/>
		),
	},
];

const Dashboard = () => (
	<MainWrapper>
		<Heading>
			<span>C</span>inF<span>alc</span> - перший такий
			<span id="app-title">*</span> на просторах інтернету.
		</Heading>
		<SectionsWrapper>
			{SECTION_LINKS_MAP.map(
				({
					name,
					sectionId,
					WrapperComponent,
					TextWrapperComponent,
					imageComponent,
				}) => (
					<SpecialLink to={getOptionRouteById(sectionId, 1)}>
						<WrapperComponent>
							<TextWrapperComponent>{name}</TextWrapperComponent>
							{imageComponent}
						</WrapperComponent>
					</SpecialLink>
				)
			)}
		</SectionsWrapper>
		<NextScreenWrapper>
			<AdditionalInfo />
		</NextScreenWrapper>
		<Footer />
		<ReactTooltip
			style={{ maxWidth: '300px' }}
			place="bottom"
			anchorId="app-title"
			content={`*під словом "такий" мається на увазі швидкий, ергономічний та наповнений всіма можливими формулами фінансовий довідник-калькулятор. І це все Українською мовою.`}
		/>
	</MainWrapper>
);

export default Dashboard;
