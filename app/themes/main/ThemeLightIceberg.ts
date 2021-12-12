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

const ThemeLightIceberg: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#2d539e'],
    light: ['#33374c'],
    dark: ['#7759b4'],

    background: ['#dcdfe7'],

    themecolor: ['#ffffff'],
    themecolorrevert: ['#000000'],

    surface: ['#e7e7e7'], // for surface components
    surfacelight: ['#dfdfdf'], // for cards
    border: ['#CDD0D8'],
    placeholder: ['#323232'],
    text: ['#101010'],

    ...RequiredCommonColors,
};

export default ThemeLightIceberg;
