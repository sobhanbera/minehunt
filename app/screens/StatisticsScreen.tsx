import React from 'react';
import {View} from 'react-native';

import {appstyles} from '../styles';
import {useTheme} from '../contexts';
import {Header} from '../components';

interface Props {
    navigation: {
        navigate: Function;
    };
}
export default function StatisticsScreen(props: Props) {
    const {themeColors} = useTheme();

    return (
        <View
            style={[
                {
                    backgroundColor: themeColors.background[0],
                },
                appstyles.flex,
            ]}>
            <Header navigation={props.navigation} title="Players Stats" />
        </View>
    );
}
