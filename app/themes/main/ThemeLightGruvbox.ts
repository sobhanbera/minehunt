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

const ThemeLightGruvbox: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#c35e0a'],
    light: ['#c14a4a'],
    dark: ['#654735'],

    background: ['#f2e5bc'],

    themecolor: ['#ffffff'],
    themecolorrevert: ['#000000'],

    surface: ['#e7e7e7'], // for surface components
    surfacelight: ['#dfdfdf'], // for cards
    border: ['#E3D6AD'],
    placeholder: ['#323232'],
    text: ['#101010'],

    ...RequiredCommonColors,
};

export default ThemeLightGruvbox;
