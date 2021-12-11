import React from 'react';
import {View} from 'react-native';

interface Props {
    space: number;
}

const Spacer = (props: Props) => {
    return (
        <View
            style={{
                paddingVertical: props.space || 15,
            }}
        />
    );
};

export default Spacer;
