const STYLES_MODULE_DETAILS =
    'Not all but many global styles are available here.';
export default STYLES_MODULE_DETAILS;

import {StyleSheet} from 'react-native';

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
});

export {globalStyles as appstyles};
