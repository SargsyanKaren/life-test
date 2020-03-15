import React from 'react';
import { View, Text, colors } from '../../../styles';
import {Button, Icon} from '../../index';

const Responsive = () => {

	return (
		<View
			bgColor={colors.light}
			flex
			jCenter
			aCenter
			padding='80px 0'
		>
			<View maxW='1170px' grow={1} flex aCenter>
				<View grow={1} flex aCcenter>
					<img src='http://themes.semicolonweb.com/html/canvas/images/appshowcase/iphone-solid.png' />
				</View>
				<View flex column grow={1} width='50%' paddingL='30px'>
					<View padding='10px 0'>
						<Text size='25px'>TYPICALLY RESPONSIVE</Text>
					</View>
					<View padding='10px 0'>
						<Text size='20px' color={colors.gray}>Our App scales beautifully to different Devices.</Text>
					</View>
					<View width='40px' margin='10px 0' borderT='2px solid' />
					<View padding='10px 0'>
						<Text size='14px' lineHeight='25px'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Eveniet cumque, perferendis accusamus porro illo exercitationem molestias,
							inventore obcaecati ut omnis voluptatibus ratione odio amet magnam quidem
							tempore necessitatibus quaerat, voluptates excepturi voluptatem, veritatis qui temporibus.
						</Text>
					</View>
					<View marginT='20px'>
						<Button>START TRIAL</Button>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Responsive;
