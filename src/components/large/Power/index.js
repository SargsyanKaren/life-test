import React from 'react';
import { View, Text, colors } from '../../../styles';
import { Icon } from '../../index';

const Power = () => {
	const data = [
		{
			icon: 'IoIosDesktop',
			title: 'RESPONSIVE LAYOUT',
			subTitle: 'Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view.',
			id: 1
		},{
			icon: 'IoIosEye',
			title: 'RETINA READY GRAPHICS',
			subTitle: 'Looks beautiful & ultra-sharp on Retina Screen Displays. Retina Icons, Fonts & all others graphics are optimized.',
			id: 2
		},{
			icon: 'IoIosFlask',
			title: 'POWERFUL PERFORMANCE',
			subTitle: 'Canvas includes tons of optimized code that are completely customizable and deliver unmatched fast performance.',
			id: 3
		},{
			icon: 'IoIosCheckmark',
			title: '12+ HEADER DESIGNS',
			subTitle: 'We have included 12+ Header + Menu Designs for your convenience so that you can match your style.',
			id: 4
		},{
			icon: 'IoMdThumbsUp',
			title: 'AWESOME MEGA MENU',
			subTitle: 'Completely Customizable 2 Columns, 3 Columns, 4 Columns & 5 Columns Mega Menus are available with Canvas.',
			id: 5
		},{
			icon: 'IoMdMagnet',
			title: 'ATTRACTIVE STICKY MENU',
			subTitle: 'Smooth & Stylish Sticky Menu is what will make your Website differentiate with others.',
			id: 6
		}
	];

	return (
		<View flex jCenter bgColor={colors.darkBlack} padding='20px 0'>
			<View maxW='1170px' flex wrap between>
				{data.map(item => (
					<View key={item.id} flex width='30%' margin='20px 0'>
						<View padding='5px'>
							<Icon name={item.icon} size={50} color={colors.teal} />
						</View>
						<View flex column marginL='15px'>
							<View>
								<Text color={colors.light}>{item.title}</Text>
							</View>
							<View marginT='10px'>
								<Text color={colors.gray} size='13px' lineHeight='25px'>{item.subTitle}</Text>
							</View>
						</View>
					</View>
				))}
			</View>
		</View>
	);
};

export default Power;
