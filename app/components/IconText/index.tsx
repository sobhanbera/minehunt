import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
    icon: React.ReactNode;
    text: string;
}

const IconText = (props: Props) => {
    return (
        <View style={styles.iconText}>
            {props.icon}
            <Text style={styles.text}>{props.text}</Text>
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
    },
});

export default IconText;
