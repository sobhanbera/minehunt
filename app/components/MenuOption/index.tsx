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
    const {theme} = useTheme();

    return (
        <TouchableHighlight
            style={styles.menuOption}
            onPress={() => props.onPress()}
            activeOpacity={0.23}
            underlayColor={theme.main[0] + '50'}>
            <IconText icon={props.icon} text={props.text} />
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    menuOption: {
        borderRadius: 4,
        overflow: 'hidden',
    },
});

export default MenuOption;
