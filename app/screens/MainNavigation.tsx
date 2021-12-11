import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// one line import for every screens...
import {HomeScreen} from './';

// the main stack navigator for the application..
const MainStackNavigator = createStackNavigator();
export default function MainNavigation() {
    return (
        <NavigationContainer>
            <MainStackNavigator.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <MainStackNavigator.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                />
            </MainStackNavigator.Navigator>
        </NavigationContainer>
    );
}
