import React from 'react';
import { View } from '../../styles';

import {
  Header,
  Footer,
  FreeTrial,
  Performance,
  Scalable
} from '../../components';

const Home = () => {
    return (
        <View>
            <Header />
            <FreeTrial />
            <Performance />
            <Scalable />
            <Footer />
        </View>
    );
};

export default Home;
