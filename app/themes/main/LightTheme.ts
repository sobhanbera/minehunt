/**
 * © 2021 Minehunt
 *
 * @author : Sobhan Bera (sobhanbera)
 * @other_editors :
 * @file : Typescript
 *
 * Purpose - apps light 2nd default theme
 */

import ThemeColors, {RequiredCommonColors} from '../ThemeProps';

const LightTheme: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#0F60B6'],
    light: ['#5a8de9'],
    dark: ['#003785'],

    background: ['#101010'],

    themecolor: ['#ffffff'],
    themecolorrevert: ['#000000'],

    surface: ['#050505'], // for surface components
    surfacelight: ['#21242b'], // for cards
    border: ['#303030'],
    placeholder: ['#CFCFCF'],
    text: ['#EFEFEF'],

    ...RequiredCommonColors,
};

export default LightTheme;
