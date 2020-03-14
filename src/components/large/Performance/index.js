import React from 'react';
import { View, Text, colors } from '../../../styles';

const Performance = () => {
	const data = [
			{
				img: 'http://themes.semicolonweb.com/html/canvas/images/appshowcase/s1.png',
				title: 'Responsive Layout',
				subTitle: 'Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view.',
				id: 1
			},{
				img: 'http://themes.semicolonweb.com/html/canvas/images/appshowcase/s4.png',
				title: 'Retina Ready Graphics',
				subTitle: 'Looks beautiful & ultra-sharp on Retina Screen Displays. Retina Icons, Fonts & all others graphics are optimized.',
				id: 2
			},{
				img: 'http://themes.semicolonweb.com/html/canvas/images/appshowcase/s5.png',
				title: 'Powerful Performance',
				subTitle: 'Canvas includes tons of optimized code that are completely customizable and deliver unmatched fast performance.',
				id: 3
			}
	];

	return (
		<View flex jCenter padding='40px 0'>
			<View maxW='1170px' flex between>
				{data.map(item => (
					<View flex column aCenter>
						<img src={item.img} />
						<View margin='25px 0'>
							<Text fontWeight='bold'>{item.title}</Text>
						</View>
						<Text align='center' lineHeight='25px' size='13px'>{item.subTitle}</Text>
					</View>
				))}
			</View>
		</View>
	);
};

export default Performance;
