/**
 * © 2021 Minehunt
 *
 * @author : Sobhan Bera (sobhanbera)
 * @other_editors :
 * @file : Typescript
 *
 * Purpose - light pink theme
 */

import ThemeColors, {RequiredCommonColors} from '../ThemeProps';

const LightPinkTheme: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#EF1559'],
    light: ['#F9B5AC'],
    dark: ['#EE7674'],

    background: ['#E0E0E0'],

    themecolor: ['#ffffff'],
    themecolorrevert: ['#000000'],

    surface: ['#e7e7e7'], // for surface components
    surfacelight: ['#dfdfdf'], // for cards
    border: ['#cfcfcf'],
    placeholder: ['#323232'],
    text: ['#101010'],

    ...RequiredCommonColors,
};

export default LightPinkTheme;
