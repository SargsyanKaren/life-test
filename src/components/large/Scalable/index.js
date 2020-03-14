import React from 'react';
import { View, Text, colors } from '../../../styles';

const Scalable = () => {

	return (
		<View
			height='500px'
			bg='right url(http://themes.semicolonweb.com/html/canvas/images/appshowcase/ipad-section.png) no-repeat'
			bgColor={colors.light}
			flex
			jCenter
		>
			<View maxW='1170px' grow={1}>
				<View width='50%' flex column>
					<Text>AWESOME SCALABLE APPS</Text>
					<Text>Our Template acts & behaves truly as a Canvas.</Text>
					<View width='40px' borderT='2px solid' />
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Dolorem maiores pariatur voluptatem placeat laborum iste accusamus nam unde, iure id.
					</Text>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Eveniet cumque, perferendis accusamus porro illo exercitationem molestias,
						inventore obcaecati ut omnis voluptatibus ratione odio amet magnam quidem
						tempore necessitatibus quaerat, voluptates excepturi voluptatem, veritatis qui temporibus.
					</Text>
				</View>
			</View>
		</View>
	);
};

export default Scalable;
