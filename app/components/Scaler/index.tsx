import React, {useEffect} from 'react';
import {
    Animated,
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';

interface ScalerProps {
    buttonStyle?: StyleProp<any>;
    children?: React.ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
    scale?: number;
    touchableOpacity?: number;
    onPress: Function;
    onLongPress?: Function;
    center?: boolean;
    autoAnimate?: boolean;
}
export default function Scaler(props: ScalerProps) {
    const {
        buttonStyle,
        children,
        containerStyle,
        scale,
        touchableOpacity,
        onPress,
        onLongPress,
        center,
        autoAnimate,
    } = props;
    const animation = React.useRef(new Animated.Value(0)).current;
    const actualScale = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, scale ?? 0.95],
    });

    const onPressIn = () => {
        if (!autoAnimate) {
            Animated.spring(animation, {
                toValue: 1,
                useNativeDriver: true,
            }).start();
        }
    };
    const onPressOut = () => {
        if (!autoAnimate) {
            Animated.spring(animation, {
                toValue: 0,
                useNativeDriver: true,
                mass: 2,
            }).start();
        }
    };

    const autoAnimateContinue = () => {
        if (autoAnimate) {
            Animated.spring(animation, {
                toValue: 1,
                useNativeDriver: true,
                delay: 0,
            }).start(autoAnimationFirstPhase);
        }
    };

    const autoAnimationFirstPhase = () => {
        if (autoAnimate) {
            Animated.spring(animation, {
                toValue: 0,
                useNativeDriver: true,
                delay: 0,
            }).start(autoAnimateContinue);
        }
    };

    useEffect(() => {
        autoAnimationFirstPhase();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Animated.View
            style={[
                styles.containerStyle,
                containerStyle,
                {transform: [{scale: actualScale}]},
            ]}>
            <TouchableOpacity
                style={[center ? styles.buttonStyle : {}, buttonStyle]}
                activeOpacity={touchableOpacity ?? 0.85}
                onPressIn={() => onPressIn()}
                onPressOut={() => onPressOut()}
                onPress={() => onPress()}
                onLongPress={() => (onLongPress ? onLongPress() : {})}>
                {children}
            </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        overflow: 'hidden',
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
