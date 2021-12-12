/* eslint-disable react-native/no-inline-styles */
// /* eslint-disable react/self-closing-comp */
import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Slider from '@react-native-community/slider';
import {useTranslation} from 'react-i18next';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {MenuOption, Spacer, Button} from '../components';
import {MEDIUM_ICON_SIZE} from '../constants';
import {useTheme} from '../contexts';
import {appstyles} from '../styles';
import {calculateNumberOfMines} from '../utils';
import {GameType, GameData, GameTypesList} from '../interfaces';

interface NewGameOptionsTextProps {
    gameData: GameData;
    onPress: Function;
}
function NewGameOptionsText(props: NewGameOptionsTextProps) {
    const {themeColors} = useTheme();

    return (
        <TouchableOpacity
            onPress={() => props.onPress()}
            style={styles.newGameOptionArea}
            activeOpacity={0.6}>
            <>
                <Text
                    style={[
                        styles.newGameOptionAreaText,
                        {
                            color: themeColors.text[0],
                        },
                    ]}>
                    {props.gameData.difficulty}
                </Text>
                <Text
                    style={[
                        styles.newGameOptionAreaText,
                        {
                            color: themeColors.text[0],
                            textTransform: 'lowercase',
                        },
                    ]}>
                    {props.gameData.rows.toString()}
                    {' x '}
                    {props.gameData.columns.toString()}
                    {' x '}
                    {props.gameData.mines.toString()}
                </Text>
            </>
        </TouchableOpacity>
    );
}

interface SliderComponentProps {
    value: number;
    setValue: Function;
    max?: number;
    min?: number;
    title: string;
}
function SliderComponent(props: SliderComponentProps) {
    const {themeColors} = useTheme();

    return (
        <View style={styles.customGameOptionAreaSliderHolder}>
            <Text
                style={[
                    styles.customGameOptionAreaText,
                    {
                        color: themeColors.text[0],
                    },
                ]}>
                {props.title}
            </Text>
            <View style={styles.customGameOptionAreaSliderAndValueHolder}>
                <Slider
                    step={1}
                    tapToSeek
                    value={props.value}
                    onSlidingComplete={value => props.setValue(value)}
                    style={styles.customGameOptionAreaSlider}
                    maximumValue={props.max || 50}
                    minimumValue={props.min || 10}
                    thumbTintColor={themeColors.main[0]}
                    minimumTrackTintColor={themeColors.main[0]}
                    maximumTrackTintColor={themeColors.border[0]}
                />
                <Text
                    style={[
                        styles.customGameOptionAreaText,
                        styles.countText,
                        {
                            color: themeColors.text[0],
                        },
                    ]}>
                    {Math.floor(props.value)}
                </Text>
            </View>
        </View>
    );
}

interface Props {
    navigation: {
        navigate: Function;
    };
}
export default function HomeScreen(props: Props) {
    const {t} = useTranslation();
    const {themeColors} = useTheme();

    const [showGameOptions, setShowGameOptions] = useState<GameType>('');
    const [rows, setRows] = useState<number>(10);
    const [columns, setColumns] = useState<number>(10);
    const [mines, setMines] = useState<number>(10);

    useEffect(() => {
        setMines(value =>
            value <= calculateNumberOfMines(rows, columns) ? value : 10,
        );
    }, [rows, columns]);

    const launchScreen = (screenName: string, data?: Object) => {
        props.navigation.navigate(screenName, data);
    };

    const startNewGame = (gameData: GameData) => {
        props.navigation.navigate('GameScreen', gameData);
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
                        onPress={() =>
                            setShowGameOptions(value =>
                                value === 'new' ? '' : 'new',
                            )
                        }
                    />

                    {showGameOptions === 'new' ? (
                        <View
                            style={[
                                styles.gameOptionArea,
                                {
                                    borderColor: themeColors.border[0],
                                },
                            ]}>
                            {GameTypesList.map(gameType => {
                                return (
                                    <NewGameOptionsText
                                        key={gameType.id}
                                        gameData={gameType}
                                        onPress={() =>
                                            startNewGame({
                                                ...gameType,
                                            })
                                        }
                                    />
                                );
                            })}
                        </View>
                    ) : showGameOptions === 'custom' ? (
                        <View
                            style={[
                                styles.gameOptionArea,
                                {
                                    borderColor: themeColors.border[0],
                                },
                            ]}>
                            {/* custom number of mines updater */}
                            <SliderComponent
                                value={mines}
                                setValue={setMines}
                                title="Mines:"
                                min={10}
                                max={calculateNumberOfMines(rows, columns)}
                            />

                            {/* custom rows updater */}
                            <SliderComponent
                                value={rows}
                                setValue={setRows}
                                title="Rows:"
                            />

                            {/* custom columns updater */}
                            <SliderComponent
                                value={columns}
                                setValue={setColumns}
                                title="Columns:"
                            />

                            <Button
                                onPress={() =>
                                    startNewGame({
                                        id: 0,
                                        mines,
                                        rows,
                                        columns,
                                        difficulty: 'custom',
                                    })
                                }
                                title={t('home:play')}
                            />
                        </View>
                    ) : null}

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
                        onPress={() =>
                            setShowGameOptions(value =>
                                value === 'custom' ? '' : 'custom',
                            )
                        }
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

    gameOptionArea: {
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderWidth: 0.6,
        borderRadius: 6,
    },

    newGameOptionArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginVertical: 3,
        borderRadius: 4,
    },
    newGameOptionAreaText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        fontWeight: '500',
        textTransform: 'capitalize',
    },

    customGameOptionAreaSliderHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 5,
    },
    customGameOptionAreaSliderAndValueHolder: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    customGameOptionAreaSlider: {
        maxWidth: 200,
        width: 200,
    },
    customGameOptionAreaText: {
        fontSize: 16,
    },
    countText: {
        maxWidth: 30,
        width: 30,
    },
});
