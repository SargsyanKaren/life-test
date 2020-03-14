import styled from 'styled-components';

const setStyles = ({
	size,
	color,
	hoverColor,
	cursor,
	fontWeight,
	lineHeight,
	align
}) => `
	${size ? `font-size: ${size};` : ''}
	${color ? `color: ${color};` : ''}
	${cursor ? `cursor: ${cursor};` : ''}
	${fontWeight ? `font-weight: ${fontWeight};` : ''}
	${lineHeight ? `line-height: ${lineHeight};` : ''}
	${align ? `text-align: ${align};` : ''}
	${hoverColor ? `
		&:hover{
			color: ${hoverColor};
		}
	` : ''}
`;

const Text = styled.span`
  ${setStyles}
`;

export default Text;
