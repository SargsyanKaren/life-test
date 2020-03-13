import React from 'react';
import { View, Text } from '../../../styles';

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
    ]

    return (
        <View flex between>
            <View padding='20px 40px' borderR='1px solid rgba(0,0,0,.1)'>
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
                            <View key={index} margin='0 10px'>
                                <Text color='red' hoverColor='blue'>{item.label}</Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View flex aCenter padding='20px'>
                    <IoIosSearch />
                    <IoIosCart />
                </View>
            </View>
        </View>
    );
};

export default Header;
