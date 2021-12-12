const CONSTANTS_MODULE_DETAILS = 'All constant value exists here.';
export default CONSTANTS_MODULE_DETAILS;

export const LANGUAGE_CODE_STORAGE_KEY = '@APP:LANGUAGE_CODE'; // Storage key where the app language variable exists, for internationlization purpose
export const THEME_STORAGE_KEY = '@APP:THEME'; // Storage key where the app language variable exists, for internationlization purpose

export const DEFAULT_THEME_NAME = 'themedarkayu'; // name of the default theme

export const DEFAULT_ICON_SIZE = 18; // default size of every icon in the application
export const SMALL_ICON_SIZE = 16; // small icon size
export const MEDIUM_ICON_SIZE = 20; // medium icon size in the application
export const LARGE_ICON_SIZE = 24; // large icon size in the application

export const DEFAULT_SPACER_SIZE = 15; // the size of the spacer to provide

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import {NativeModules} from 'react-native';
const {StatusBarManager} = NativeModules;
export const DEVICE_STATUSBAR_HEIGHT_CONSTANT = StatusBarManager.HEIGHT; // height of the status bar of android device
