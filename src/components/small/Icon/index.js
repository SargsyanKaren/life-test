import React from 'react';
import styled from 'styled-components';
import {
	IoIosDesktop,
	IoIosCheckmark,
	IoIosEye,
	IoMdThumbsUp,
	IoIosFlask,
	IoMdMagnet,
	IoIosMail,
	IoIosHeadset,
	IoLogoSkype,
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoGoogleplus,
	IoLogoPinterest,
	IoLogoVimeo,
	IoLogoGithub,
	IoLogoHackernews,
	IoLogoLinkedin
} from 'react-icons/io';

const icons = {
	IoIosDesktop,
	IoIosCheckmark,
	IoIosEye,
	IoMdThumbsUp,
	IoIosFlask,
	IoMdMagnet,
	IoIosMail,
	IoIosHeadset,
	IoLogoSkype,
	IoLogoFacebook,
	IoLogoTwitter,
	IoLogoGoogleplus,
	IoLogoPinterest,
	IoLogoVimeo,
	IoLogoGithub,
	IoLogoHackernews,
	IoLogoLinkedin
};

const Icon = ({
	name,
	size,
	color
}) => {
	const StyledIcon = styled(icons[name])`
		font-size: ${size}px;
		color: ${color}
	`;

	return (
		<StyledIcon />
	);
};

export default Icon;
