// /* eslint-disable react/self-closing-comp */
// /* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {appstyles} from '../styles';
import {useTheme} from '../contexts';
import {Header} from '../components';
import {ThemesList, ThemeData} from '../interfaces';
import {Scaler} from '../components';
import {DEFAULT_THEME_NAME, MEDIUM_ICON_SIZE} from '../constants';

interface ThemeCardProps {
    theme: ThemeData;
}
function ThemeCard(props: ThemeCardProps) {
    const {theme} = props;

    const {themeColors, themeName, setTheme} = useTheme();

    return (
        <Scaler
            key={theme.id}
            onPress={() => {
                setTheme(theme.name);
            }}
            touchableOpacity={1}>
            <View
                style={[
                    styles.themeCard,
                    {
                        backgroundColor: theme.theme.transparent[0],
                        borderColor: themeColors.border[0],
                    },
                ]}>
                {/* checkbox holder */}
                <View
                    style={[
                        styles.themePallete,
                        styles.enabledThemeCheckMarkHolder,
                        {
                            backgroundColor: theme.theme.background[0],
                        },
                    ]}>
                    {themeName === theme.name ? (
                        <AntDesign
                            name="check"
                            size={MEDIUM_ICON_SIZE}
                            color={theme.theme.text[0]}
                        />
                    ) : null}
                </View>

                <View
                    style={[
                        styles.themePallete,
                        {
                            backgroundColor: theme.theme.main[0],
                        },
                    ]}
                />
                <View
                    style={[
                        styles.themePallete,
                        {
                            backgroundColor: theme.theme.dark[0],
                        },
                    ]}
                />
                <View
                    style={[
                        styles.themePallete,
                        {
                            backgroundColor: theme.theme.light[0],
                        },
                    ]}
                />
            </View>
        </Scaler>
    );
}

interface Props {
    navigation: {
        navigate: Function;
    };
}
export default function ThemeScreen(props: Props) {
    const {themeColors, setTheme} = useTheme();

    return (
        <View
            style={[
                {
                    backgroundColor: themeColors.background[0],
                },
                appstyles.flex,
            ]}>
            <Header
                navigation={props.navigation}
                title="Choose Theme"
                morebutton={
                    <AntDesign
                        name="reload1"
                        size={MEDIUM_ICON_SIZE}
                        color={themeColors.text[0]}
                        onPress={() => setTheme(DEFAULT_THEME_NAME)}
                    />
                }
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <View style={appstyles.paddingBottom}>
                    {/**
                     * first we will render all the dark themes then we will render all the light themes
                     * we are rendering dark themes here...
                     **/}
                    <Text
                        style={[
                            appstyles.titleText,
                            {
                                color: themeColors.text[0],
                            },
                        ]}>
                        Dark Themes
                    </Text>
                    <View style={styles.themeCardsContainer}>
                        {Object.values(ThemesList)
                            .filter(
                                (theme: ThemeData) =>
                                    theme.type === 'dark' && !theme.other,
                            )
                            .map((theme: ThemeData, index) => {
                                /**
                                 * if the index is greater than or equal to 1 than only render that particular
                                 * theme data to the screen
                                 * because DefaultTheme - index 0
                                 * and DarkTheme - index 1
                                 * both are same in that way we will be rendering the same theme data two times
                                 */
                                if (index) {
                                    return (
                                        <ThemeCard
                                            theme={theme}
                                            key={theme.id}
                                        />
                                    );
                                } else {
                                    return null;
                                }
                            })}
                    </View>

                    {/* here starts the dark themes selection area */}
                    <Text
                        style={[
                            appstyles.titleText,
                            {
                                color: themeColors.text[0],
                            },
                        ]}>
                        Light Themes
                    </Text>
                    <View style={styles.themeCardsContainer}>
                        {Object.values(ThemesList)
                            .filter(
                                (theme: ThemeData) =>
                                    theme.type === 'light' && !theme.other,
                            )
                            .map((theme: ThemeData, _index: number) => {
                                /**
                                 * here we haven't given the same condition because the light theme is neither the default
                                 * nor it is in the first position
                                 */
                                return (
                                    <ThemeCard theme={theme} key={theme.id} />
                                );
                            })}
                    </View>

                    <Text
                        style={[
                            appstyles.titleText,
                            {
                                color: themeColors.text[0],
                            },
                        ]}>
                        Extra Themes
                    </Text>
                    <View style={styles.themeCardsContainer}>
                        {Object.values(ThemesList)
                            .filter((theme: ThemeData) => theme.other === true)
                            .map((theme: ThemeData, _index: number) => {
                                /**
                                 * here we haven't given the same condition because the light theme is neither the default
                                 * nor it is in the first position
                                 */
                                return (
                                    <ThemeCard theme={theme} key={theme.id} />
                                );
                            })}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    themeCardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        // paddingTop: 30,
        paddingBottom: 10,
    },
    themeCard: {
        width: 100,
        height: 100,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 6,
        overflow: 'hidden',
        borderWidth: 1,
        // marginHorizontal: 8,
        // marginVertical: 8,
        margin: 7,
        elevation: 0,
    },
    themePallete: {
        width: '50%',
        height: '50%',
    },

    enabledThemeCheckMarkHolder: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
