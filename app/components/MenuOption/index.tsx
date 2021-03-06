import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';

import {useTheme} from '../../contexts';
import IconText from '../IconText';

interface Props {
    icon: React.ReactNode;
    text: string;
    onPress: Function;
}
const MenuOption = (props: Props) => {
    const {themeColors} = useTheme();

    return (
        <TouchableHighlight
            style={styles.menuOption}
            onPress={() => props.onPress()}
            activeOpacity={0.23}
            underlayColor={themeColors.main[0] + 'BF'}>
            <IconText icon={props.icon} text={props.text} />
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    menuOption: {
        borderRadius: 4,
        overflow: 'hidden',
        marginVertical: 5,
    },
});

export default MenuOption;
