import styled from 'styled-components';

const setStyles = ({
	size,
	color,
	hoverColor,
	cursor,
}) => `
	${size ? `font-size: ${size};` : ''}
	${color ? `color: ${color};` : ''}
	${cursor ? `cursor: ${cursor};` : ''}
	${hoverColor ? `
		transition-property: color;
		transition-duration: .4s; 
		&:hover{
			color: ${hoverColor};
		}
	` : ''}
`;

const Text = styled.span`
  ${setStyles}
`;

export default Text;
