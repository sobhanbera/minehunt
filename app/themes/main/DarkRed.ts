/**
 * © 2021 Minehunt
 *
 * @author : Sobhan Bera (sobhanbera)
 * @other_editors :
 * @file : Typescript
 *
 * Purpose - dark red theme
 */

import ThemeColors, {RequiredCommonColors} from '../ThemeProps';

const DarkRedTheme: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#9b0d00'],
    light: ['#ff5343'],
    dark: ['#e41c09'],

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

export default DarkRedTheme;
