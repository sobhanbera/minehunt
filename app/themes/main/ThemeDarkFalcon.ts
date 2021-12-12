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

const ThemeFalcon: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#F000A8'],
    light: ['#5352DC'],
    dark: ['#8B03C5'],

    background: ['#020222'],

    themecolor: ['#000000'],
    themecolorrevert: ['#FFFFFF'],

    surface: ['#050505'], // for surface components
    surfacelight: ['#10131a'], // for cards
    border: ['#242444'],
    placeholder: ['#CFCFCF'],
    text: ['#EFEFEF'],

    ...RequiredCommonColors,
};

export default ThemeFalcon;
