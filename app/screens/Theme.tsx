import React from 'react';
import {View, Text} from 'react-native';

import {appstyles} from '../styles';
import {useTheme} from '../contexts';

export default function ThemeScreen() {
    const {themeColors} = useTheme();

    return (
        <View
            style={[
                {
                    backgroundColor: themeColors.background[0],
                },
                appstyles.flex,
                appstyles.statusBar,
            ]}>
            <Text>Theme Screen</Text>
        </View>
    );
}
