/**
 * © 2021 Minehunt
 *
 * @author : Sobhan Bera (sobhanbera)
 * @other_editors :
 * @file : Typescript
 *
 * Purpose - light green theme
 */

import ThemeColors, {RequiredCommonColors} from '../ThemeProps';

const LightGreenTheme: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#007a58'],
    light: ['#12ca96'],
    dark: ['#00a878'],

    background: ['#EFEFEF'],

    themecolor: ['#ffffff'],
    themecolorrevert: ['#000000'],

    surface: ['#e7e7e7'], // for surface components
    surfacelight: ['#dfdfdf'], // for cards
    border: ['#e0e0e0'],
    placeholder: ['#323232'],
    text: ['#101010'],

    ...RequiredCommonColors,
};

export default LightGreenTheme;
