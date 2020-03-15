import React from 'react';
import styled from 'styled-components';
import { colors } from "../../../styles";

const ButtonStyled = styled.button`
	outline: none;
	border: 2px solid ${colors.grayDark};
	padding: 10px 20px;
	font-size: 15px;
	border-radius: 3px;
	font-weight: 900;
	transition: .2s;
	cursor: pointer;
	
	${({hover}) => hover ? `
		background-color: ${colors.white};	
		color: ${colors.grayDark};
			&:hover{
			background-color: ${colors.grayDark};
			color: ${colors.white};
		}
	` : `
		background-color: ${colors.grayDark};
		color: ${colors.white};
	`}
`;

const Button = ({
	children,
	hover = true
}) => {
	return (
		<ButtonStyled hover={hover}>
			{children}
		</ButtonStyled>
	);
};

export default Button;
