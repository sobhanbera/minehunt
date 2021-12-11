import React from 'react';
import {View} from 'react-native';

import {DEFAULT_SPACER_SIZE} from '../../constants';

interface Props {
    space?: number;
}

const Spacer = (props: Props) => {
    return (
        <View
            style={{
                paddingBottom: props.space || DEFAULT_SPACER_SIZE, // default spacer size
            }}
        />
    );
};

export default Spacer;
