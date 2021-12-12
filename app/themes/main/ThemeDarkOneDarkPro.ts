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

const ThemeOneDarkPro: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#2A73C9'],
    light: ['#E69F51'],
    dark: ['#E2514E'],

    background: ['#2A2734'],

    themecolor: ['#000000'],
    themecolorrevert: ['#FFFFFF'],

    surface: ['#050505'], // for surface components
    surfacelight: ['#10131a'], // for cards
    border: ['#4C4956'],
    placeholder: ['#CFCFCF'],
    text: ['#EFEFEF'],

    ...RequiredCommonColors,
};

export default ThemeOneDarkPro;
