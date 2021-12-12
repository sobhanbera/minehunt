/**
 * © 2021 Minehunt
 *
 * @author : Sobhan Bera (sobhanbera)
 * @other_editors :
 * @file : Typescript
 *
 * Purpose - dark blue theme
 */

import ThemeColors, {RequiredCommonColors} from '../ThemeProps';

const DarkBlueTheme: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#03045e'],
    light: ['#00b4d8'],
    dark: ['#0077b6'],

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

export default DarkBlueTheme;
