import React from 'react';
import { View, Text, colors } from '../../../styles';
import { Button } from '../../index';

const Scalable = () => {

	return (
		<View
			bg='right url(http://themes.semicolonweb.com/html/canvas/images/appshowcase/ipad-section.png) no-repeat'
			bgColor={colors.light}
			flex
			jCenter
			aCenter
			padding='80px 0'
		>
			<View maxW='1170px' grow={1}>
				<View width='50%' flex column>
					<View padding='10px 0'>
						<Text size='25px'>AWESOME SCALABLE APPS</Text>
					</View>
					<View padding='10px 0'>
						<Text size='20px' color={colors.gray}>Our Template acts & behaves truly as a Canvas.</Text>
					</View>
					<View width='40px' margin='10px 0' borderT='2px solid' />
					<View padding='10px 0'>
						<Text size='14px' lineHeight='25px'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Dolorem maiores pariatur voluptatem placeat laborum iste accusamus nam unde, iure id.
						</Text>
					</View>
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

export default Scalable;
