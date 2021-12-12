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

const ThemeLightMonokai: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#AB9DF2'],
    light: ['#78DCE8'],
    dark: ['#FFD866'],

    background: ['#FDF9F3'],

    themecolor: ['#ffffff'],
    themecolorrevert: ['#000000'],

    surface: ['#e7e7e7'], // for surface components
    surfacelight: ['#dfdfdf'], // for cards
    border: ['#EEEAE4'],
    placeholder: ['#323232'],
    text: ['#101010'],

    ...RequiredCommonColors,
};

export default ThemeLightMonokai;
