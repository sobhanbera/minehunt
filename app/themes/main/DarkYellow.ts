/**
 * © 2021 Minehunt
 *
 * @author : Sobhan Bera (sobhanbera)
 * @other_editors :
 * @file : Typescript
 *
 * Purpose - dark yellow theme
 */

import ThemeColors, {RequiredCommonColors} from '../ThemeProps';

const DarkYellowTheme: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#f8961e'],
    light: ['#ffd60a'],
    dark: ['#ffc300'],

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

export default DarkYellowTheme;
