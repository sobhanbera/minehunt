import React from 'react';
import {StatusBar} from 'react-native';

import MainNavigation from './screens/MainNavigation';
import {ThemeProvider} from './contexts';

const MainApp = () => {
    return (
        <>
            <StatusBar backgroundColor={'#000000'} barStyle="light-content" />
            {/* <Contexts> */}
            <ThemeProvider>
                <MainNavigation />
            </ThemeProvider>
            {/* </Contexts> */}
        </>
    );
};

export default MainApp;
