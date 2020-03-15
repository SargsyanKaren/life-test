import React from 'react';
import styled from 'styled-components';

const LinkStyled = styled.a`
	color: black;
	text-decoration: none;
	cursor: pointer;
`;

const Link = ({ children }) => {
	return (
		<LinkStyled>
			{children}
		</LinkStyled>
	);
};

export default Link;
