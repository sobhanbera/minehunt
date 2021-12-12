import ThemeColors from '../themes/ThemeProps';
import {
    // dark themes
    DarkTheme as DefaultTheme,
    DarkBlueTheme,
    DarkGreenTheme,
    DarkPinkTheme,
    DarkRedTheme,
    DarkYellowTheme,

    // light themes
    LightTheme,
    LightBlueTheme,
    LightGreenTheme,
    LightPinkTheme,
    LightRedTheme,
    LightYellowTheme,
} from '../themes/main';

const INTERFACES_MODULE_DETAILS =
    'All modals required in the application exists here.';
export default INTERFACES_MODULE_DETAILS;

// theme categories type
export type ThemeType = 'dark' | 'light';
// all theme
export type Themes =
    // default theme
    | 'default'

    // dark themes
    | 'dark'
    | 'darkblue'
    | 'darkgreen'
    | 'darkpink'
    | 'darkred'
    | 'darkyellow'

    // light themes
    | 'light'
    | 'lightblue'
    | 'lightgreen'
    | 'lightpink'
    | 'lightred'
    | 'lightyellow'; // here default is dark only.

export interface ThemeData {
    id: number;
    theme: ThemeColors;
    type: ThemeType;
    name: Themes;
    placeholder: string;
}

// the interface denoting the actual theme with its data
export interface ActualThemesModal {
    // default theme
    default: ThemeData;

    // dark themes
    dark: ThemeData;
    darkblue: ThemeData;
    darkgreen: ThemeData;
    darkpink: ThemeData;
    darkred: ThemeData;
    darkyellow: ThemeData;

    // light themes
    light: ThemeData;
    lightblue: ThemeData;
    lightgreen: ThemeData;
    lightpink: ThemeData;
    lightred: ThemeData;
    lightyellow: ThemeData;
}

/**
 * list of all the themes to show to the user
 */
export const ThemesList: ActualThemesModal = {
    default: {
        id: 0,
        theme: DefaultTheme,
        type: 'dark',
        name: 'default',
        placeholder: 'dark',
    },

    // dark theme starts from here...
    dark: {
        id: 1000,
        theme: DefaultTheme,
        type: 'dark',
        name: 'dark',
        placeholder: 'dark',
    },
    darkblue: {
        id: 1001,
        theme: DarkBlueTheme,
        type: 'dark',
        name: 'darkblue',
        placeholder: 'Dark Blue',
    },
    darkgreen: {
        id: 1002,
        theme: DarkGreenTheme,
        type: 'dark',
        name: 'darkgreen',
        placeholder: 'Dark Green',
    },
    darkpink: {
        id: 1003,
        theme: DarkPinkTheme,
        type: 'dark',
        name: 'darkpink',
        placeholder: 'Dark Pink',
    },
    darkred: {
        id: 1004,
        theme: DarkRedTheme,
        type: 'dark',
        name: 'darkred',
        placeholder: 'Dark Red',
    },
    darkyellow: {
        id: 1005,
        theme: DarkYellowTheme,
        type: 'dark',
        name: 'darkyellow',
        placeholder: 'Dark Pink',
    },

    // light themes starts from here
    light: {
        id: 2000,
        theme: LightTheme,
        type: 'light',
        name: 'light',
        placeholder: 'light',
    },
    lightblue: {
        id: 2001,
        theme: LightBlueTheme,
        type: 'light',
        name: 'lightblue',
        placeholder: 'Light Blue',
    },
    lightgreen: {
        id: 2002,
        theme: LightGreenTheme,
        type: 'light',
        name: 'lightgreen',
        placeholder: 'Light Green',
    },
    lightpink: {
        id: 2003,
        theme: LightPinkTheme,
        type: 'light',
        name: 'lightpink',
        placeholder: 'Light Pink',
    },
    lightred: {
        id: 2004,
        theme: LightRedTheme,
        type: 'light',
        name: 'lightred',
        placeholder: 'Light Red',
    },
    lightyellow: {
        id: 2005,
        theme: LightYellowTheme,
        type: 'light',
        name: 'lightyellow',
        placeholder: 'Light Yellow',
    },
};
