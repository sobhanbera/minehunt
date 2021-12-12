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

const ThemePurples: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#F6E001'],
    light: ['#2F2957'],
    dark: ['#1D1C3C'],

    background: ['#160024'],

    themecolor: ['#000000'],
    themecolorrevert: ['#FFFFFF'],

    surface: ['#050505'], // for surface components
    surfacelight: ['#10131a'], // for cards
    border: ['#382246'],
    placeholder: ['#CFCFCF'],
    text: ['#EFEFEF'],

    ...RequiredCommonColors,
};

export default ThemePurples;
