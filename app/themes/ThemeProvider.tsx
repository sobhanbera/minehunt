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

import {DarkTheme as DefaultTheme, LightTheme, DarkPinkTheme} from './main';

export type ThemeType = 'dark' | 'light';
export type Themes = '' | 'default' | 'dark' | 'light' | 'darkpink'; // here default is dark only.
interface ActualThemesModal {
    default: {
        theme: ThemeColors;
        type: ThemeType;
    };
    dark: {
        theme: ThemeColors;
        type: ThemeType;
    };
    light: {
        theme: ThemeColors;
        type: ThemeType;
    };
    darkpink: {
        theme: ThemeColors;
        type: ThemeType;
    };
}
const ActualThemes: ActualThemesModal = {
    default: {
        theme: DefaultTheme,
        type: 'dark',
    },
    dark: {
        theme: DefaultTheme,
        type: 'dark',
    },
    light: {
        theme: LightTheme,
        type: 'light',
    },
    darkpink: {
        theme: DarkPinkTheme,
        type: 'dark',
    },
};

/**
 * interface for the context api we are providing through
 * this component
 */
interface ThemeContextProps {
    theme: ThemeType;
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
    themeColors: DefaultTheme,
    setTheme: (_theme: Themes) => {},
});
const ThemeProvider = (props: {children: React.ReactChild}) => {
    const [themeType, setThemeType] = useState<ThemeType>('dark');
    const [themeColor, setThemeColor] = useState<ThemeColors>(DefaultTheme);

    /**
     * get theme data
     */
    const getTheme = async () => {
        // default for now atleast..
        const tempTheme: Themes = await AsyncStorage.getItem(THEME_STORAGE_KEY);

        if (!tempTheme) {
            await AsyncStorage.setItem(THEME_STORAGE_KEY, 'dark');
            setThemeColor(DefaultTheme);
            setThemeType('dark');
        } else {
            setThemeColor(ActualThemes[tempTheme].theme);
            setThemeType(ActualThemes[tempTheme].type);
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
