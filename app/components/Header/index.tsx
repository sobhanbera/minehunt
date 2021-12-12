/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StyleProp,
    ViewStyle,
    Pressable,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import {
    DEVICE_STATUSBAR_HEIGHT_CONSTANT,
    MEDIUM_ICON_SIZE,
} from '../../constants';
import {useTheme} from '../../contexts';

interface Props {
    navigation: any;
    title: string;
    morebutton?: React.ReactNode;
    goBack?: boolean;
    backgroundColor?: string;
    borderColor?: string;
    onPress?: Function;
    style?: StyleProp<ViewStyle>;
}
const Header = (props: Props) => {
    const {border, text, background} = useTheme().themeColors;

    return (
        <View
            style={[
                styles.header,
                {
                    backgroundColor: props.backgroundColor || background[0],
                    borderBottomColor: props.borderColor || border[0],
                    borderBottomWidth: 1,
                    marginTop: DEVICE_STATUSBAR_HEIGHT_CONSTANT, // the height of the statusbar of the device
                },
                props.style,
            ]}>
            <Pressable onPress={() => props.navigation.goBack()}>
                <Entypo
                    name="chevron-thin-left"
                    color={text[0] + 'DF'}
                    size={MEDIUM_ICON_SIZE}
                />
            </Pressable>
            <Text
                style={[
                    styles.title,
                    {
                        color: text[0] + 'DF',
                        paddingHorizontal: 20,
                    },
                ]}
                numberOfLines={1}>
                {props.title}
            </Text>
            {/* this below is a temporary component for making the parent center the title text component */}
            {props.morebutton ? (
                props.morebutton
            ) : (
                <Text style={{fontSize: 20}}>{'   '}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
});

export default Header;
