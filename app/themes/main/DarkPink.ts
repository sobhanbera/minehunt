/**
 * © 2021 Minehunt
 *
 * @author : Sobhan Bera (sobhanbera)
 * @other_editors :
 * @file : Typescript
 *
 * Purpose - pinkish theme under dark
 */

import ThemeColors, {RequiredCommonColors} from '../ThemeProps';

const DarkPinkTheme: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#EF1559'],
    light: ['#F9B5AC'],
    dark: ['#EE7674'],

    background: ['#000000'],

    themecolor: ['#000000'],
    themecolorrevert: ['#FFFFFF'],

    surface: ['#050505'], // for surface components
    surfacelight: ['#10131a'], // for cards
    border: ['#161616'],
    placeholder: ['#CFCFCF'],
    text: ['#EFEFEF'],

    ...RequiredCommonColors,
};

export default DarkPinkTheme;
