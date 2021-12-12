/**
 * © 2021 Minehunt
 *
 * @author : Sobhan Bera (sobhanbera)
 * @other_editors :
 * @file : Typescript
 *
 * Purpose - dark green theme
 */

import ThemeColors, {RequiredCommonColors} from '../ThemeProps';

const DarkGreenTheme: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#23573b'],
    light: ['#458060'],
    dark: ['#336A4D'],

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

export default DarkGreenTheme;
