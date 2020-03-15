import React from 'react';
import { View, Text, colors } from '../../../styles';
import { FeatureCard } from '../../index';

import feature1 from '../../../assets/images/feature1.jpg';
import feature2 from '../../../assets/images/feature2.jpg';
import feature3 from '../../../assets/images/feature3.jpg';

const Features = () => {
	const data = [
		{
			img: feature1,
			title: 'GENETICKA ANALYZA',
			subTitle: 'Loocks beutiful & ultra-sharp on Retina Screen Displays. Retina Icons, Fonts & all others graphics are optimized.',
			button: 'ZJistit vice'
		},{
			img: feature2,
			title: 'NUTRAFITNESS DNA',
			subTitle: 'Loocks beutiful & ultra-sharp on Retina Screen Displays. Retina Icons, Fonts & all others graphics are optimized.',
			button: 'ZJistit vice'
		},{
			img: feature3,
			title: 'MAXIMUM PERFORMANCE',
			subTitle: 'Loocks beutiful & ultra-sharp on Retina Screen Displays. Retina Icons, Fonts & all others graphics are optimized.',
			button: 'ZJistit vice'
		}
	];

	return (
		<View flex jCenter padding='40px 0'>
			<View maxW='1170px' grow={1}>
				<View>
					<View flex jCenter>
						<Text size='20px' fontWeight={900}>EVEN MORE FEATURE RICH</Text>
					</View>
					<View flex column aCenter marginT='20px'>
						<Text color={colors.gray} lineHeight='35px' size='15px'>Philanthropy convener livelihoods, initiative end hunger gender rights local.</Text>
						<Text color={colors.gray} size='15px'>John Lennon storytelling; advocate, altruism impact catalyst.</Text>
					</View>
				</View>
				<View flex jCenter padding='20px 0'>
					<View width='40px' margin='10px 0' borderT='2px solid' />
				</View>
				<View flex between>
					{data.map((item, index) => (
						<FeatureCard
							key={index}
							title={item.title}
							subTitle={item.subTitle}
							img={item.img}
							button={item.button}
						/>
					))}
				</View>
			</View>
		</View>
	);
};

export default Features;
