import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

import {useTheme} from '../../contexts';

interface Props {
    onPress: Function;
    title: string;
}

const Button = (props: Props) => {
    const {themeColors} = useTheme();

    return (
        <Pressable
            onPress={() => props.onPress()}
            style={[
                styles.button,
                {
                    backgroundColor: themeColors.main[0],
                },
            ]}>
            <Text
                style={[
                    styles.title,
                    {
                        color: themeColors.background[0],
                    },
                ]}>
                {props.title}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        overflow: 'hidden',
        borderRadius: 6,
        marginTop: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
});

export default Button;
