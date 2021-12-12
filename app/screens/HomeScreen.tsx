import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {MenuOption, Spacer} from '../components';
import {MEDIUM_ICON_SIZE} from '../constants';
import {useTheme} from '../contexts';
import {appstyles} from '../styles';

interface Props {
    navigation: {
        navigate: Function;
    };
}
export default function HomeScreen(props: Props) {
    const {themeColors} = useTheme();

    const launchScreen = (screenName: string, data?: Object) => {
        props.navigation.navigate(screenName, data);
    };

    return (
        <View
            style={[
                {
                    backgroundColor: themeColors.background[0],
                },
                appstyles.flex,
                appstyles.statusBar,
            ]}>
            <View style={[appstyles.mainLayout]}>
                <Text
                    style={[
                        styles.title,
                        {
                            color: themeColors.light[0] + '',
                        },
                    ]}>
                    MINE HUNT
                </Text>

                {/* continue the previous game */}
                <MenuOption
                    text="Continue"
                    icon={
                        <AntDesign
                            name="caretright"
                            size={MEDIUM_ICON_SIZE}
                            color={themeColors.themecolorrevert[0] + 'EF'}
                        />
                    }
                    onPress={() => {}}
                />

                <Spacer />

                {/* start new game button */}
                <MenuOption
                    text="New Game"
                    icon={
                        <AntDesign
                            name="plus"
                            size={MEDIUM_ICON_SIZE}
                            color={themeColors.themecolorrevert[0] + 'EF'}
                        />
                    }
                    onPress={() => {}}
                />

                {/* custom game grid button */}
                <MenuOption
                    text="Start Custom Game"
                    icon={
                        <MaterialIcons
                            name="dashboard-customize"
                            size={MEDIUM_ICON_SIZE}
                            color={themeColors.themecolorrevert[0] + 'EF'}
                        />
                    }
                    onPress={() => {}}
                />

                <Spacer />

                {/* update application theme */}
                <MenuOption
                    text="Update Theme"
                    icon={
                        <Ionicons
                            name="ios-sunny-outline"
                            size={MEDIUM_ICON_SIZE}
                            color={themeColors.themecolorrevert[0] + 'EF'}
                        />
                    }
                    onPress={() => launchScreen('ThemeScreen')}
                />

                {/* all settings */}
                <MenuOption
                    text="Settings"
                    icon={
                        <Ionicons
                            name="ios-settings-outline"
                            size={MEDIUM_ICON_SIZE}
                            color={themeColors.themecolorrevert[0] + 'EF'}
                        />
                    }
                    onPress={() => launchScreen('SettingsScreen')}
                />

                {/* all settings */}
                <MenuOption
                    text="Change Language"
                    icon={
                        <Ionicons
                            name="ios-settings-outline"
                            size={MEDIUM_ICON_SIZE}
                            color={themeColors.themecolorrevert[0] + 'EF'}
                        />
                    }
                    onPress={() => launchScreen('LanguageScreen')}
                />

                <Spacer />

                {/* game statistics */}
                <MenuOption
                    text="Stats"
                    icon={
                        <Ionicons
                            name="ios-stats-chart"
                            size={MEDIUM_ICON_SIZE}
                            color={themeColors.themecolorrevert[0] + 'EF'}
                        />
                    }
                    onPress={() => launchScreen('StatisticsScreen')}
                />

                <Spacer />

                {/* all game rules */}
                <MenuOption
                    text="Game Rules"
                    icon={
                        <MaterialIcons
                            name="rule"
                            size={MEDIUM_ICON_SIZE}
                            color={themeColors.themecolorrevert[0] + 'EF'}
                        />
                    }
                    onPress={() => launchScreen('TutorialsScreen')}
                />

                {/* application about section launcher button */}
                <MenuOption
                    text="About!"
                    icon={
                        <MaterialIcons
                            name="info-outline"
                            size={MEDIUM_ICON_SIZE}
                            color={themeColors.themecolorrevert[0] + 'EF'}
                        />
                    }
                    onPress={() => launchScreen('AboutScreen')}
                />

                <Spacer />

                {/* remove ads button */}
                <MenuOption
                    text="Remove Ads?"
                    icon={
                        <MaterialIcons
                            name="monetization-on"
                            size={MEDIUM_ICON_SIZE}
                            color={themeColors.themecolorrevert[0] + 'EF'}
                        />
                    }
                    onPress={() => {
                        console.log('Ads Removed!');
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 10,
        paddingVertical: 8,
    },
});
