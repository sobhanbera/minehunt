/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Animated, PanResponder, StatusBar} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

// import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

import {Header} from '../components';
import {useTheme} from '../contexts';
import {DEVICE_STATUSBAR_HEIGHT_CONSTANT, MEDIUM_ICON_SIZE} from '../constants';
import {GameData} from '../interfaces';
import {formatSecondsToTimer} from '../utils';

// const {Value} = Animated;

interface Props {
    navigation: {
        navigate: Function;
    };
    route: {
        params: {
            gameData: GameData;
        };
    };
}
const GameScreen = (props: Props) => {
    const {themeColors} = useTheme();

    const {route, navigation} = props;
    const {gameData} = route.params;
    // console.log(props.route.params.gameData);

    /**
     * pan object containing a 2d coordinate
     */
    const pan = useState(new Animated.ValueXY())[0];
    /**
     * the actual pan responder object
     * this is used to perform actions like to move the pan value or update it
     * or when the pan release action is triggered
     * or else
     */
    const panResponder = useState(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value,
                });
            },
            onPanResponderMove: (_, gesture) => {
                // if(maximumPanMoveX(gameData.rows, gameData.columns) <= gesture.dx) {}
                pan.x.setValue(gesture.dx);
                pan.y.setValue(gesture.dy);
            },
            onPanResponderRelease: () => {
                pan.flattenOffset();
            },
        }),
    )[0];
    // console.log(pan.getLayout(), pan.getTranslateTransform());

    const [timer, setTimer] = useState<number>(0);

    useEffect(() => {
        let timer = setInterval(() => {
            setTimer(value => value + 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    /**
     * function to start the game for the first time
     * this may be triggered when the initial cell is minned
     */
    // function startGame() {}

    /**
     * when the user presses the restart button
     * this function will restart the game
     */
    // function restartGame() {}

    /**
     * minned on a cell containing mine in it
     * so this function will control all actions of game over
     */
    // function gameOver() {}

    /**
     * main game renderer
     */
    return (
        <View
            style={{
                flex: 1,
                // backgroundColor: 'red',
            }}>
            <StatusBar translucent={true} />

            {/**
             * an extra view to show at the statusbar
             * when rendered inside header compoenent many other changes are needed
             * so used an extra view for that purpose
             * 1. also this contains a transparent background color for a elegent look
             **/}
            <View
                style={{
                    height: DEVICE_STATUSBAR_HEIGHT_CONSTANT,
                    zIndex: 100,
                    backgroundColor: themeColors.background[0] + 'CF',
                }}
            />
            <Header
                navigation={navigation}
                title={formatSecondsToTimer(timer)}
                backgroundColor={themeColors.background[0] + 'CF'}
                morebutton={
                    <AntDesign
                        name="reload1"
                        size={MEDIUM_ICON_SIZE}
                        color={themeColors.text[0]}
                        onPress={() => {}}
                    />
                }
                style={{
                    marginTop: 0,
                }}
            />

            <Animated.View
                style={[
                    {
                        backgroundColor: themeColors.surface[0],
                        zIndex: 1,
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',

                        width: 10000,
                        // height: 1000,

                        transform: [
                            {
                                translateX: pan.x,
                            },
                            {
                                translateY: pan.y,
                            },
                        ],
                    },
                ]}
                {...panResponder.panHandlers}>
                {Array(gameData.rows)
                    .fill(0)
                    .map((row: any, _) => {
                        return (
                            <View
                                key={_}
                                style={{
                                    flexDirection: 'row',
                                }}>
                                {Array(gameData.columns)
                                    .fill(0)
                                    .map((column: any, _) => {
                                        return (
                                            <View
                                                key={_}
                                                style={{
                                                    backgroundColor:
                                                        themeColors.main[0],
                                                    width: 32,
                                                    height: 32,
                                                    margin: 1,
                                                    borderRadius: 5,
                                                }}
                                            />
                                        );
                                    })}
                            </View>
                        );
                    })}
            </Animated.View>
        </View>
    );
};

export default GameScreen;
