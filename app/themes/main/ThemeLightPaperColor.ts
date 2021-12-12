/**
 * © 2021 Minehunt
 *
 * @author : Sobhan Bera (sobhanbera)
 * @other_editors :
 * @file : Typescript
 *
 * Purpose - extra theme
 */

import ThemeColors, {RequiredCommonColors} from '../ThemeProps';

const ThemeLightPaperColor: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#8700af'],
    light: ['#d70087'],
    dark: ['#005faf'],

    background: ['#eeeeee'],

    themecolor: ['#ffffff'],
    themecolorrevert: ['#000000'],

    surface: ['#e7e7e7'], // for surface components
    surfacelight: ['#dfdfdf'], // for cards
    border: ['#DFDFDF'],
    placeholder: ['#323232'],
    text: ['#101010'],

    ...RequiredCommonColors,
};

export default ThemeLightPaperColor;
