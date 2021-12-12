import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {useTheme} from '../../contexts';

interface Props {
    icon: React.ReactNode;
    text: string;
}

const IconText = (props: Props) => {
    const {themeColors} = useTheme();

    return (
        <View style={styles.iconText}>
            {props.icon}
            <Text
                style={[
                    styles.text,
                    {
                        color: themeColors.themecolorrevert[0] + 'EF',
                    },
                ]}>
                {props.text}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    iconText: {
        paddingHorizontal: 13,
        paddingVertical: 9,
        borderRadius: 6,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        paddingHorizontal: 10,
        fontSize: 18,
        fontWeight: '600',
    },
});

export default IconText;
