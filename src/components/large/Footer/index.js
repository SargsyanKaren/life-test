import React from 'react';
import { View, Text, colors } from '../../../styles';
import { Icon, IconHover, Link } from '../../index';

const Footer = () => {
    const socialsData = [
        { icon: 'IoLogoFacebook', hoverColor: colors.fbColor },
        { icon: 'IoLogoTwitter', hoverColor: colors.twColor },
        { icon: 'IoLogoGoogleplus', hoverColor: colors.googleColor },
        { icon: 'IoLogoPinterest', hoverColor: colors.pinterestColor },
        { icon: 'IoLogoVimeo', hoverColor: colors.vimeoColor },
        { icon: 'IoLogoGithub', hoverColor: colors.black },
        { icon: 'IoLogoHackernews', hoverColor: colors.hackerColor },
        { icon: 'IoLogoLinkedin', hoverColor: colors.ldColor },
    ];

    return (
        <View bgColor={colors.darkBlack} flex jCenter padding='40px 0'>
            <View flex between maxW='1170px' grow={1} wrap>
                <View>
                    <View>
                        <Text color={colors.gray} size='14px'>Copyrights © 2014 All Rights Reserved by Canvas Inc.</Text>
                    </View>
                    <View marginT='10px'>
                        <Text color={colors.gray} size='13px'>Terms of Use / Privacy Policy</Text>
                    </View>
                </View>
                <View>
                    <View flex jEnd marginB='5px'>
                        {socialsData.map((item, index) => (
                          <View key={index} margin='0 2px'>
                            <IconHover name={item.icon} color='gray' hoverColor={item.hoverColor} />
                          </View>
                        ))}
                    </View>
                    <View flex aCenter>
                        <View flex aCenter>
                            <Icon name='IoIosMail' color={colors.gray} />
                            <Text color={colors.gray} >info@canvas.com</Text>
                        </View>
                        <View
                          width='3px'
                          height='3px'
                          radius='50%'
                          bgColor={colors.gray}
                          margin='0 10px'
                        />
                        <View flex aCenter>
                            <Icon name='IoIosHeadset' color={colors.gray}  />
                            <Text color={colors.gray} >+91-11-6541-6369</Text>
                        </View>
                        <View
                          width='3px'
                          height='3px'
                          radius='50%'
                          bgColor={colors.gray}
                          margin='0 10px'
                        />
                        <View flex aCenter>
                            <Icon name='IoLogoSkype' color={colors.gray}  />
                            <Text color={colors.gray} >CanvasOnSkype</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Footer;
