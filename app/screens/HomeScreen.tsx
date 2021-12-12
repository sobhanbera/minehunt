import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';

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
    const {t} = useTranslation();
    const {themeColors} = useTheme();

    const launchScreen = (screenName: string, data?: Object) => {
        props.navigation.navigate(screenName, data);
    };

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <View style={[appstyles.flex, appstyles.homeLayout]}>
                <View style={appstyles.mainLayout}>
                    <Text
                        style={[
                            styles.title,
                            {
                                color: themeColors.main[0] + '',
                            },
                        ]}>
                        MINE HUNT
                    </Text>

                    {/* continue the previous game */}
                    <MenuOption
                        text={t('home:continue')}
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
                        text={t('home:new_game')}
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
                        text={t('home:start_custom_game')}
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
                        text={t('home:update_theme')}
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
                        text={t('home:settings')}
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
                        text={t('home:change_lang')}
                        icon={
                            <Ionicons
                                name="ios-language-outline"
                                size={MEDIUM_ICON_SIZE}
                                color={themeColors.themecolorrevert[0] + 'EF'}
                            />
                        }
                        onPress={() => launchScreen('LanguageScreen')}
                    />

                    <Spacer />

                    {/* game statistics */}
                    <MenuOption
                        text={t('home:stats')}
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
                        text={t('home:game_rules')}
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
                        text={t('home:about')}
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

                    {/* TODO: remove ads button */}
                    {/* <MenuOption
                        text={t('home:remove_ads')}
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
                    /> */}
                </View>
            </View>
        </ScrollView>
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
