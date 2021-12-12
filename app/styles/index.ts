const STYLES_MODULE_DETAILS =
    'Not all but many global styles are available here.';
export default STYLES_MODULE_DETAILS;

import {StyleSheet} from 'react-native';
import {DEVICE_STATUSBAR_HEIGHT_CONSTANT} from '../constants';

const globalStyles = StyleSheet.create({
    flex: {
        flex: 1,
    },

    mainLayout: {
        marginHorizontal: 30,
        marginVertical: 25,
        justifyContent: 'center',
        flex: 1,
    },

    statusBar: {
        paddingTop: DEVICE_STATUSBAR_HEIGHT_CONSTANT,
    },

    titleText: {
        fontSize: 18,
        fontWeight: '500',
        paddingHorizontal: 15,
        paddingVertical: 12,
    },
});

export {globalStyles as appstyles};
