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

const ThemeLightAtom: ThemeColors = {
    /**
     * This is the object for Dark Theme
     */
    main: ['#4D81EF'],
    light: ['#E04D44'],
    dark: ['#4F9E4F'],

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

export default ThemeLightAtom;
