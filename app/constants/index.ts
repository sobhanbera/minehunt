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
import {NativeModules, Dimensions} from 'react-native';
const {StatusBarManager} = NativeModules;
export const DEVICE_STATUSBAR_HEIGHT_CONSTANT = StatusBarManager.HEIGHT; // height of the status bar of android device

export const DEVICE_SCREEN_WIDTH = Dimensions.get('screen').width;
export const DEVICE_SCREEN_HEIGHT = Dimensions.get('screen').height;

export const HEADER_HEIGHT = 50; // maximum height of a header should have

export const GAME_GRID_ALL_DIRECTION_SNAP_THRESHOLD = 35;

export const GAME_GRID_LEFT_SNAP_THRESHOLD =
    GAME_GRID_ALL_DIRECTION_SNAP_THRESHOLD; // a limit after which the grid could not be moved furthure in the negative X-axis

export const GAME_GRID_RIGHT_SNAP_THRESHOLD =
    DEVICE_SCREEN_WIDTH - GAME_GRID_ALL_DIRECTION_SNAP_THRESHOLD; // a limit after which the grid could not be moved furthure in the positive X-axis

// this will be including the statusbar height and the header height and than the main area required
export const GAME_GRID_UP_SNAP_THRESHOLD =
    GAME_GRID_ALL_DIRECTION_SNAP_THRESHOLD +
    HEADER_HEIGHT +
    DEVICE_STATUSBAR_HEIGHT_CONSTANT; // a limit after which the grid could not be moved furthure in the positive Y-axis

export const GAME_GRID_DOWN_SNAP_THRESHOLD =
    // GAME_GRID_ALL_DIRECTION_SNAP_THRESHOLD +
    DEVICE_SCREEN_HEIGHT - GAME_GRID_ALL_DIRECTION_SNAP_THRESHOLD; // a limit after which the grid could not be moved furthure in the negative Y-axis

export const CELL_ID_SPLITTING_CHARACTER = ':'; // a single character which will be separating two part of id of any cell for ex: [row:column]
