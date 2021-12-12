/**
 * © 2021 Minehunt
 *
 * @author : Sobhan Bera (sobhanbera)
 * @other_editors :
 * @file : Typescript
 *
 * Purpose - light blue theme
 */

import ThemeColors, {RequiredCommonColors} from '../ThemeProps';

const LightBlueTheme: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#2364aa'],
    light: ['#73bfb8'],
    dark: ['#3da5d9'],

    background: ['#E0E0E0'],

    themecolor: ['#ffffff'],
    themecolorrevert: ['#000000'],

    surface: ['#e7e7e7'], // for surface components
    surfacelight: ['#dfdfdf'], // for cards
    border: ['#cfcfcf'],
    placeholder: ['#323232'],
    text: ['#101010'],

    ...RequiredCommonColors,
};

export default LightBlueTheme;
