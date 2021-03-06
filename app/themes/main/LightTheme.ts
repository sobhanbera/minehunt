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

    background: ['#EFEFEF'],

    themecolor: ['#ffffff'],
    themecolorrevert: ['#000000'],

    surface: ['#e7e7e7'], // for surface components
    surfacelight: ['#dfdfdf'], // for cards
    border: ['#e0e0e0'],
    placeholder: ['#323232'],
    text: ['#101010'],

    ...RequiredCommonColors,
};

export default LightTheme;
