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

    // other extra themes
    ThemeDarkAyu,
    ThemeDarkFalcon,
    ThemeDarkGitHub,
    ThemeDarkGruvbox,
    ThemeDarkOneDarkPro,
    ThemeDarkPurples,

    // light extra themes
    ThemeLightAtom,
    ThemeLightGruvbox,
    ThemeLightIceberg,
    ThemeLightMonokai,
    ThemeLightPaperColor,
    ThemeLightStrawberry,
} from '../themes/main';

const INTERFACES_MODULE_DETAILS =
    'All modals required in the application exists here.';
export default INTERFACES_MODULE_DETAILS;

// theme categories type
export type ThemeType = 'dark' | 'light';
// all theme
export type Themes =
    // default theme
    | 'default' // here default is dark only.

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
    | 'lightyellow'

    // other extra themes
    | 'themedarkgruvbox'
    | 'themedarkonedarkpro'
    | 'themedarkpurples'
    | 'themedarkayu'
    | 'themedarkfalcon'
    | 'themedarkgithub'

    // other light extra themes
    | 'themelightatom'
    | 'themelightgruvbox'
    | 'themelighticeberg'
    | 'themelightmonokai'
    | 'themelightpapercolor'
    | 'themelightstrawberry';

export interface ThemeData {
    id: number; // a unique id of the theme
    theme: ThemeColors; // the theme colors
    type: ThemeType; // dark or light
    name: Themes; // theme name
    placeholder: string; // a name to show to the user
    other?: boolean; // is the theme belong to any of the theme type and have random colors or unique color pallete
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

    // other extra themes
    themedarkgruvbox: ThemeData;
    themedarkonedarkpro: ThemeData;
    themedarkpurples: ThemeData;
    themedarkayu: ThemeData;
    themedarkfalcon: ThemeData;
    themedarkgithub: ThemeData;

    // other light extra themes
    themelightatom: ThemeData;
    themelightgruvbox: ThemeData;
    themelighticeberg: ThemeData;
    themelightmonokai: ThemeData;
    themelightpapercolor: ThemeData;
    themelightstrawberry: ThemeData;
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

    // other extra themes
    themedarkayu: {
        id: 3001,
        theme: ThemeDarkAyu,
        type: 'dark',
        name: 'themedarkayu',
        placeholder: 'Ayu',
        other: true,
    },
    themedarkfalcon: {
        id: 3002,
        theme: ThemeDarkFalcon,
        type: 'dark',
        name: 'themedarkfalcon',
        placeholder: 'Falcon',
        other: true,
    },
    themedarkgithub: {
        id: 3003,
        theme: ThemeDarkGitHub,
        type: 'dark',
        name: 'themedarkgithub',
        placeholder: 'GitHub',
        other: true,
    },
    themedarkgruvbox: {
        id: 3004,
        theme: ThemeDarkGruvbox,
        type: 'dark',
        name: 'themedarkgruvbox',
        placeholder: 'Gruvbox',
        other: true,
    },
    themedarkonedarkpro: {
        id: 3005,
        theme: ThemeDarkOneDarkPro,
        type: 'dark',
        name: 'themedarkonedarkpro',
        placeholder: 'One Dark Pro',
        other: true,
    },
    themedarkpurples: {
        id: 3006,
        theme: ThemeDarkPurples,
        type: 'dark',
        name: 'themedarkpurples',
        placeholder: 'Purples',
        other: true,
    },

    // other light extra themes
    themelightatom: {
        id: 4001,
        theme: ThemeLightAtom,
        type: 'light',
        name: 'themelightatom',
        placeholder: 'Atom',
        other: true,
    },
    themelightgruvbox: {
        id: 4002,
        theme: ThemeLightGruvbox,
        type: 'light',
        name: 'themelightgruvbox',
        placeholder: 'Gruvbox',
        other: true,
    },
    themelighticeberg: {
        id: 4003,
        theme: ThemeLightIceberg,
        type: 'light',
        name: 'themelighticeberg',
        placeholder: 'Iceberg',
        other: true,
    },
    themelightmonokai: {
        id: 4004,
        theme: ThemeLightMonokai,
        type: 'light',
        name: 'themelightmonokai',
        placeholder: 'Monokai',
        other: true,
    },
    themelightpapercolor: {
        id: 4005,
        theme: ThemeLightPaperColor,
        type: 'light',
        name: 'themelightpapercolor',
        placeholder: 'Paper',
        other: true,
    },
    themelightstrawberry: {
        id: 4006,
        theme: ThemeLightStrawberry,
        type: 'light',
        name: 'themelightstrawberry',
        placeholder: 'Strawberry',
        other: true,
    },
};

/**
 * language stuffs starts from here
 * like language code
 * types of language
 * and all such things
 */
export type LanguageCode = 'en' | 'bn' | 'hi';

export interface LanguageData {
    code: LanguageCode;
    lang: string;
    placeholder: string;
}

/**
 * all languages list...
 */
export const LanguagesList: LanguageData[] = [
    {
        code: 'en',
        lang: 'English',
        placeholder: 'English',
    },
    {
        code: 'bn',
        lang: 'বাংলা',
        placeholder: 'Bengali',
    },
    {
        code: 'hi',
        lang: 'हिंदी',
        placeholder: 'Hindi',
    },
];

/**
 * game types & games difficuly list
 * starts from here
 */
type GameDifficulties =
    | 'beginner'
    | 'easy'
    | 'medium'
    | 'advance'
    | 'expert'
    | 'professional'
    | 'legend'
    | 'custom';

export type GameType = 'custom' | 'new' | '';

export interface GameData {
    id: number;
    difficulty: GameDifficulties;
    mines: number;
    rows: number;
    columns: number;
}

export const GameTypesList: GameData[] = [
    {
        id: 1,
        difficulty: 'beginner',
        mines: 6,
        rows: 6,
        columns: 6,
    },
    {
        id: 2,
        difficulty: 'easy',
        mines: 16,
        rows: 10,
        columns: 10,
    },
    {
        id: 3,
        difficulty: 'medium',
        mines: 47,
        rows: 16,
        columns: 16,
    },
    {
        id: 4,
        difficulty: 'advance',
        mines: 94,
        rows: 25,
        columns: 25,
    },
    {
        id: 5,
        difficulty: 'expert',
        mines: 208,
        rows: 36,
        columns: 36,
    },
    {
        id: 6,
        difficulty: 'professional',
        mines: 400,
        rows: 50,
        columns: 50,
    },
    // {
    //     id: 7,
    //     difficulty: 'legend',
    //     mines: 596,
    //     rows: 63,
    //     columns: 63,
    // },
];

export interface CellData {
    id: string;
    open: boolean;
    flag: boolean;
    value: number;
}
