import React from 'react';
import { View, Text, colors } from '../../../styles';

import { IoIosSearch, IoIosCart } from 'react-icons/io';

import logo from '../../../assets/images/logo.png';

const Header = () => {
    const menuData = [
        { label: 'Home' },
        { label: 'Features' },
        { label: 'Pages' },
        { label: 'Portfolio' },
        { label: 'Blog' },
        { label: 'Shop' },
        { label: 'Shortcodes' },
    ];

    return (
        <View flex between shadow='0px 0px 12px 0px rgba(0,0,0,.2)' position='fixed' width='100%' bgColor={colors.white}>
            <View padding='15px 30px' borderR='1px solid rgba(0,0,0,.1)'>
                <View
                    width='80px'
                    height='40px'
                    bg={`center/contain url(${logo}) no-repeat`}
                />
            </View>
            <View flex>
                <View flex aCenter borderR='1px solid rgba(0,0,0,.1)'>
                    <View flex>
                        {menuData.map((item, index) => (
                            <View key={index} margin='0 15px'>
                                <Text fontWeight={700} hoverColor={colors.teal}>{item.label}</Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View flex aCenter padding='20px'>
                    <View margin='0 5px'>
                        <IoIosSearch />
                    </View>
                    <View margin='0 5px'>
                        <IoIosCart />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Header;
