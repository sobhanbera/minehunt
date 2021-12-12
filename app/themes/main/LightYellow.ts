/**
 * © 2021 Minehunt
 *
 * @author : Sobhan Bera (sobhanbera)
 * @other_editors :
 * @file : Typescript
 *
 * Purpose - light yellow theme
 */

import ThemeColors, {RequiredCommonColors} from '../ThemeProps';

const LightYellowTheme: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#f8961e'],
    light: ['#ffd60a'],
    dark: ['#ffc300'],

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

export default LightYellowTheme;
