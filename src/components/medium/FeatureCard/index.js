import React from 'react';
import styled from 'styled-components';
import { View, Text, colors } from "../../../styles";
import { Button } from '../../index';

const ImgStyled = styled.img`
	width: 100%;
`;

const FeatureCard = ({
	img,
	title,
	subTitle,
	button
}) => {
	return (
		<View border='2px solid rgba(0,0,0,.1)' radius='5px' maxW='350px' grow={1}>
			<View>
				<ImgStyled src={img} />
			</View>
			<View padding='15px 30px'>
				<View flex jCenter>
					<Text>{title}</Text>
				</View>
				<View textAlign='center' marginT='10px'>
					<Text size='13px' lineHeight='20px' color={colors.gray}>{subTitle}</Text>
				</View>
			</View>
			<View paddingB='15px' flex jCenter>
				<Button hover={false}>{button}</Button>
			</View>
		</View>
	);
};

export default FeatureCard;
