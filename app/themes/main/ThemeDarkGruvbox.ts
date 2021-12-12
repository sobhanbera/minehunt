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

const ThemeDarkGruvbox: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#CC241D'],
    light: ['#98971A'],
    dark: ['#D79921'],

    background: ['#282828'],

    themecolor: ['#000000'],
    themecolorrevert: ['#FFFFFF'],

    surface: ['#050505'], // for surface components
    surfacelight: ['#10131a'], // for cards
    border: ['#3d3d3d'],
    placeholder: ['#CFCFCF'],
    text: ['#EFEFEF'],

    ...RequiredCommonColors,
};

export default ThemeDarkGruvbox;
