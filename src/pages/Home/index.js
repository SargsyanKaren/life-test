import React from 'react';
import { View } from '../../styles';

import {
  Header,
  Footer,
  FreeTrial,
  Performance,
  Scalable,
  Power,
  Responsive,
  Features,
  ClientSay
} from '../../components';

const Home = () => {
    return (
        <View>
            <Header />
            <FreeTrial />
            <Performance />
            <Scalable />
            <Power />
            <Responsive />
            <Features />
            <ClientSay />
            <Footer />
        </View>
    );
};

export default Home;
