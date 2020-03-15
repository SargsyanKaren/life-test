import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../index';
import { View, colors } from '../../../styles';

const Content = styled(View)`
	position: relative;
	top: 0;
	transition: .3s;
	border-radius: 3px;
	cursor: pointer;
	&:hover{
		top: -32px;
		background-color: ${({hoverColor}) => hoverColor};
	}
`;

const IconHover = ({
	name,
	color,
	hoverColor
}) => {
	return (
		<View width='32px' height='32px' overflow='hidden' radius='3px'>
			<Content hoverColor={hoverColor}>
				<View width='32px' height='32px' flex aCenter jCenter>
					<Icon name={name} color={color} />
				</View>
				<View width='32px' height='32px' flex aCenter jCenter>
					<Icon name={name} color={colors.white} />
				</View>
			</Content>
		</View>
	);
};

export default IconHover;
