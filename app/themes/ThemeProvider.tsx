/**
 * © 2021 Minehunt
 *
 * @author : Sobhan Bera (sobhanbera)
 * @other_editors :
 * @file : Typescript
 *
 * Purpose - theme related component (provides what theme and all such good stuffs)
 */

import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {THEME_STORAGE_KEY} from '../constants';
import ThemeColors from './ThemeProps';

import {DarkTheme as DefaultTheme, LightTheme} from './main';

export type Themes = 'default' | 'dark' | 'light'; // here default is dark only.

/**
 * interface for the context api we are providing through
 * this component
 */
interface ThemeContextProps {
    theme: ThemeColors;
    setTheme(_theme: Themes): void;
}
/**
 * @d - dark theme
 * @l - light theme
 * @c - custom theme
 */
const ThemeContext = createContext<ThemeContextProps>({
    theme: DefaultTheme,
    setTheme: (_theme: Themes) => {},
});
const ThemeProvider = (props: {children: React.ReactChild}) => {
    const [theme, setTheme] = useState<ThemeColors>(DefaultTheme);

    /**
     * get theme data
     */
    const getTheme = async () => {
        const tempTheme: Themes | any = await AsyncStorage.getItem(
            THEME_STORAGE_KEY,
        );

        if (!tempTheme) {
            await AsyncStorage.setItem(THEME_STORAGE_KEY, 'dark');
            setTheme(DefaultTheme);
        } else {
            switch (tempTheme) {
                case 'default':
                    setTheme(DefaultTheme);
                    break;
                case 'dark':
                    setTheme(DefaultTheme);
                    break;

                case 'light':
                    setTheme(LightTheme);
                    break;
                default:
            }
        }
    };

    /**
     * update the application theme
     * @param newTheme the theme which is to be set
     */
    const setAppTheme = async (newTheme: Themes) => {
        await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme).then(() => {
            getTheme();
        });
    };

    // initializing theme service
    useEffect(() => {
        getTheme();
    }, []);

    const themeValue = {
        theme,
        setTheme: setAppTheme,
    };

    return (
        <ThemeContext.Provider value={themeValue}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
export const useTheme = () => useContext(ThemeContext);
