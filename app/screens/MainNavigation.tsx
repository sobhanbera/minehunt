import React from 'react';
import {
    NavigationContainer,
    DarkTheme,
    DefaultTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// one line import for every screens...
import {
    HomeScreen,
    GameScreen,
    ThemeScreen,
    SettingsScreen,
    LanguageScreen,
    StatisticsScreen,
    TutorialScreen,
    AboutScreen,
} from './';

import {useTheme} from '../contexts';

// the main stack navigator for the application..
const MainStackNavigator = createStackNavigator();
export default function MainNavigation() {
    const {theme} = useTheme();

    return (
        <NavigationContainer
            theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
            <MainStackNavigator.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                {/* main entry screen */}
                <MainStackNavigator.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                />

                {/* the main game screen */}
                <MainStackNavigator.Screen
                    name="GameScreen"
                    component={GameScreen}
                />

                {/* update theme and related data */}
                <MainStackNavigator.Screen
                    name="ThemeScreen"
                    component={ThemeScreen}
                />

                {/* setting related to the configs of application/game */}
                <MainStackNavigator.Screen
                    name="SettingsScreen"
                    component={SettingsScreen}
                />

                {/* change language of the app */}
                <MainStackNavigator.Screen
                    name="LanguageScreen"
                    component={LanguageScreen}
                />

                {/* change language of the app */}
                <MainStackNavigator.Screen
                    name="StatisticsScreen"
                    component={StatisticsScreen}
                />

                {/* how to play the game / rules of the game */}
                <MainStackNavigator.Screen
                    name="TutorialsScreen"
                    component={TutorialScreen}
                />

                {/* screen containing the details of the application */}
                <MainStackNavigator.Screen
                    name="AboutScreen"
                    component={AboutScreen}
                />
            </MainStackNavigator.Navigator>
        </NavigationContainer>
    );
}
