import React from 'react';
import { View, Text, colors } from '../../../styles';
import styled from 'styled-components';

import { IoLogoApple } from 'react-icons/io';

const Icon = styled(IoLogoApple)`
	font-size: 55px;
	color: white;
`;

const Button = styled(View)`
	transition: .3s;
	&:hover{
		background-color: white;
	}
	&:hover span{
		color: black;
	}
	&:hover svg{
		fill: black;
	}
`;

const FreeTrial = () => {

	return (
		<View
			height='100vh'
			bg='center/cover url(http://themes.semicolonweb.com/html/canvas/images/appshowcase/1.jpg)'
			flex
			jCenter
		>
			<View maxW='1170px' flex>
				<View flex aEnd>
					<img src='http://themes.semicolonweb.com/html/canvas/images/appshowcase/slider-iphone.png' />
				</View>
				<View flex aCenter>
					<View>
						<Text size='50px' color={colors.white} lineHeight='70px'>The new way to create awesome websites. Try using Canvas Template.</Text>
						<View flex paddingT='30px'>
							<Button flex aCenter radius='3px' border='2px solid white' padding='24px 34px'>
								<Icon />
								<View flex column>
									<View margin='3px 5px'>
										<Text color={colors.white} size='23px'>START YOUR FREE TRIAL</Text>
									</View>
									<View margin='3px 5px'>
										<Text color={colors.white} size='13px'>30-days and No Credit card Required</Text>
									</View>
								</View>
							</Button>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default FreeTrial;
