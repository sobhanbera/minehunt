import React from 'react';
import {StatusBar} from 'react-native';
import MainNavigation from './screens/MainNavigation';

const MainApp = () => {
    return (
        <>
            <StatusBar backgroundColor={'#000000'} barStyle="light-content" />
            {/* <Contexts> */}
            <MainNavigation />
            {/* </Contexts> */}
        </>
    );
};

export default MainApp;
