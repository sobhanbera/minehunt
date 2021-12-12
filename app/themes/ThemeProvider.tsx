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

import {Themes, ThemeType, ThemesList} from '../interfaces';

/**
 * interface for the context api we are providing through
 * this component
 */
interface ThemeContextProps {
    theme: ThemeType;
    themeName: Themes;
    themeColors: ThemeColors;
    setTheme(_theme: Themes): void;
}
/**
 * @d - dark theme
 * @l - light theme
 * @c - custom theme
 */
const ThemeContext = createContext<ThemeContextProps>({
    theme: 'dark',
    themeName: 'themedarkayu',
    themeColors: ThemesList.default.theme,
    setTheme: (_theme: Themes) => {},
});
const ThemeProvider = (props: {children: React.ReactChild}) => {
    const [themeType, setThemeType] = useState<ThemeType>('dark');
    const [themeName, setThemeName] = useState<Themes>('themedarkayu');
    const [themeColor, setThemeColor] = useState<ThemeColors>(
        ThemesList.default.theme,
    );

    /**
     * get theme data
     */
    const getTheme = async () => {
        // default for now atleast..
        const tempTheme: Themes = await AsyncStorage.getItem(THEME_STORAGE_KEY);

        if (!tempTheme) {
            await AsyncStorage.setItem(THEME_STORAGE_KEY, 'dark');
            setThemeColor(ThemesList.themedarkayu.theme);
            setThemeType('dark');
            setThemeName('themedarkayu');
        } else {
            setThemeColor(ThemesList[tempTheme].theme);
            setThemeType(ThemesList[tempTheme].type);
            setThemeName(ThemesList[tempTheme].name);
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
        theme: themeType,
        themeName: themeName,
        themeColors: themeColor,
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
