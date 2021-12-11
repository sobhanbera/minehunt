/**
 * © 2021 Minehunt
 *
 * @author : Sobhan Bera (sobhanbera)
 * @other_editors :
 * @file : Typescript
 *
 * Purpose - apps dark and default theme scheme
 */

import ThemeColors, {RequiredCommonColors} from '../ThemeProps';

/**
 * Here different Theme could be written which should include all the following properties of @theme_interface
 * and includig @common_colors_interface as the object given above @theme_interface__object + @common_colors_interface__object
 */

/**
 * @define as much themes you want below this comment only...
 * @and also give some sutaible detail of the corresponsing theme...
 */
const DarkTheme: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#003785'],
    light: ['#5a8de9'],
    dark: ['#0f60b6'],

    background: ['#000000'],

    themecolor: ['#000000'],
    themecolorrevert: ['#FFFFFF'],

    surface: ['#050505'], // for surface components
    surfacelight: ['#21242b'], // for cards
    border: ['#303030'],
    placeholder: ['#CFCFCF'],
    text: ['#EFEFEF'],

    ...RequiredCommonColors,
};
/**
 * @end of themes object themes should not be written
 * below this comment for the sake of best programming practices...
 */

export default DarkTheme;
