import React, { useState, useEffect } from 'react';
import { View, Text, colors } from '../../../styles';

const ClientSay = () => {
	const [showIndex, setShowIndex] = useState(0);

	const data = [
		{
			avatar: 'https://lh3.googleusercontent.com/proxy/mgSiseRKassRsNU_2x9JkjckA9A-jPxRovwns-0YCST3xy1SRYnu4KZ0lC7xn4HAlLFGo-nh55y2Q_Qh6C0zSR5wkBc4XuCB',
			text: '"Natus voluptation enim quod necessitatibus quis expedita harum provident eos obcaecati id culpa corparis molestias"',
			name: `- COLLIS TA'EED`,
			subName: 'Envato Inc'
		},{
			avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuJV_HjWonmBaHjuaD4pOTCucSsQXgLHEMzTcJLhHpzScdzK53',
			text: '"Natus voluptation enim quod necessitatibus quis expedita harum provident eos obcaecati id culpa corparis molestias"',
			name: `- COLLIS TA'EED`,
			subName: 'Envato Inc'
		},{
			avatar: 'https://www.fromdoppler.com/wp-content/themes/doppler_site/img/client-manager-hans-hatch.jpg',
			text: '"Natus voluptation enim quod necessitatibus quis expedita harum provident eos obcaecati id culpa corparis molestias"',
			name: `- COLLIS TA'EED`,
			subName: 'Envato Inc'
		}
	];

	useEffect(() => {
		setInterval(() => {
			setShowIndex(showIndex => showIndex === data.length - 1 ? 0 : showIndex + 1);
		}, 10000);
	}, []);

	return (
		<View bg={`center/cover url(https://s.appleinsider.ru/2017/03/ipad_pro_pencil_ad-2-750x422.jpg)`}>
			<View bgColor='rgba(0,0,0,.8)' flex jCenter padding='50px 0'>
				<View>
					<View flex jCenter>
						<Text color={colors.white} size='20px'>WHAT CLIENT SAY ?</Text>
					</View>
					<View flex jCenter margin='20px 0'>
						<View width='40px' margin='10px 0' borderT={`2px solid ${colors.gray}`} />
					</View>
					<View flex column aCenter marginT='30px'>
						<View
							width='50px'
							height='50px'
							radius='50%'
							bg={`center/cover url(${data[showIndex].avatar})`}
						/>
						<View textAlign='center' marginT='20px' maxW='600px'>
							<Text color={colors.white} size='15px' lineHeight='30px'>{data[showIndex].text}</Text>
						</View>
						<View textAlign='center' marginT='20px'>
							<Text color={colors.white} size='15px'>{data[showIndex].name}</Text>
						</View>
						<View textAlign='center'>
							<Text color={colors.gray} size='13px'>{data[showIndex].subName}</Text>
						</View>
						<View flex jCenter marginT='20px'>
							{data.map((item, index) => (
								<View
									width='6px'
									height='6px'
									border={`1px solid ${showIndex === index ? colors.white : colors.gray}`}
									bgColor={showIndex === index ? colors.white : ''}
									radius='50%'
									margin='0 2px'
								/>
							))}
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

export default ClientSay;
