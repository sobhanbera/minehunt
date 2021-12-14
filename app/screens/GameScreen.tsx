/* eslint-disable react/self-closing-comp */
/* eslint-disable curly */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
    View,
    Animated,
    PanResponder,
    StatusBar,
    Text,
    Dimensions,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {Header} from '../components';
import {useTheme} from '../contexts';
import {
    DEVICE_STATUSBAR_HEIGHT_CONSTANT,
    MEDIUM_ICON_SIZE,
    GAME_GRID_LEFT_SNAP_THRESHOLD,
    GAME_GRID_RIGHT_SNAP_THRESHOLD,
    GAME_GRID_UP_SNAP_THRESHOLD,
    GAME_GRID_DOWN_SNAP_THRESHOLD,
    HEADER_HEIGHT,
} from '../constants';
import {GameData, CellData} from '../interfaces';
import {
    formatSecondsToTimer,
    getCellColumnIndexFromID,
    getCellID,
    getCellRowIndexFromID,
} from '../utils';

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
    // console.log(pan.getLayout(), pan.getTranslateTransform());
    // const scale = new Animated.Value(1);
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
                pan.x.setValue(
                    gesture.moveX <= GAME_GRID_LEFT_SNAP_THRESHOLD ||
                        gesture.moveX >= GAME_GRID_RIGHT_SNAP_THRESHOLD
                        ? 0
                        : gesture.dx,
                );

                pan.y.setValue(
                    gesture.moveY <= GAME_GRID_UP_SNAP_THRESHOLD ||
                        gesture.moveY >= GAME_GRID_DOWN_SNAP_THRESHOLD
                        ? 0
                        : gesture.dy,
                );
            },
            onPanResponderRelease: () => {
                pan.flattenOffset();
            },
        }),
    )[0];

    const [grid, setGrid] = useState<CellData[][]>([]);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [gameWon, setGameWon] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(0);

    // the interval variable which is used to regulate the updation of timer
    let timerInterval = setInterval(() => {}, 0);
    clearInterval(timerInterval);

    /**
     * function to start the timer when the game starts
     */
    function startTimer() {
        setTimer(0);
        timerInterval = setInterval(() => {
            setTimer(value => value + 1);
        }, 1000);
    }

    /**
     * a another function which will stop the timer
     * this will either after a game over or game won condition
     * or other pause conditions
     */
    function stopTimer() {
        clearInterval(timerInterval);
    }

    useEffect(() => {
        generateGame();
    }, []);

    /**
     * function which will be used to generate all the grid/cells of the game
     * this function will generate data where will the mines and no mine cell will exist
     * this function also regulates how the grid looks
     * and many more
     */
    function generateGame() {
        let numOFBombs = gameData.mines,
            randomI = 0,
            randomJ = 0;

        setGameOver(false);
        setGameWon(false);

        let localGrid: CellData[][] = [];
        for (let i = 0; i < gameData.rows; ++i) {
            let localRow: CellData[] = [];
            for (let j = 0; j < gameData.columns; ++j) {
                localRow.push({
                    id: getCellID(i, j),
                    flag: true,
                    open: false,
                    value: 0,
                });
            }
            localGrid.push(localRow);
        }

        while (numOFBombs) {
            randomI = Math.floor(Math.random() * gameData.rows);
            randomJ = Math.floor(Math.random() * gameData.columns);

            if (localGrid[randomI][randomJ].value === -1) {
                continue;
            }
            localGrid[randomI][randomJ] = {
                ...localGrid[randomI][randomJ],
                value: -1,
            };
            // updateAdjacentCells(localGrid, localGrid[randomI][randomJ]);
            numOFBombs--;
        }

        for (let i = 0; i < gameData.rows; i++) {
            for (let j = 0; j < gameData.columns; j++) {
                // if the adjacent value is not updated then update it
                if (localGrid[i][j].value === 0) {
                    if (i > 0) {
                        if (j > 0)
                            if (localGrid[i - 1][j - 1].value === -1)
                                // top left cell
                                localGrid[i][j].value++;
                        if (localGrid[i - 1][j].value === -1)
                            // top middle or top cell
                            localGrid[i][j].value++;
                        if (j < gameData.columns - 1)
                            if (localGrid[i - 1][j + 1].value === -1)
                                // top right cell
                                localGrid[i][j].value++;
                    }

                    if (j > 0)
                        if (localGrid[i][j - 1].value === -1)
                            // left cell
                            localGrid[i][j].value++;

                    if (j < gameData.columns - 1)
                        if (localGrid[i][j + 1].value === -1)
                            // right cell
                            localGrid[i][j].value++;

                    if (i < gameData.rows - 1) {
                        if (j > 0)
                            if (localGrid[i + 1][j - 1].value === -1)
                                // bottom left cell
                                localGrid[i][j].value++;
                        if (localGrid[i + 1][j].value === -1)
                            // bottom middle or bottom cell
                            localGrid[i][j].value++;
                        if (j < 4)
                            if (localGrid[i + 1][j + 1].value === -1)
                                // bottom right cell
                                localGrid[i][j].value++;
                    }
                }
            }
        }

        // let str = '\n\nGAME GENERATED THIS TIME\n';
        // for (let i in localGrid) {
        //     for (let j in localGrid[i]) {
        //         if (localGrid[i][j].value === -1) str += ` * `;
        //         else str += ` ${localGrid[i][j].value} `;
        //     }
        //     str += '\n';
        // }
        // console.log(str);

        setGrid(localGrid);
        // startTimer();
    }

    function openCell(cell: CellData) {
        if (!gameOver || !gameWon) {
            let localGrid: CellData[][] = grid;

            const iIndex = getCellRowIndexFromID(cell);
            const jIndex = getCellColumnIndexFromID(cell);
            console.log(cell.value, iIndex, jIndex);

            if (cell.value === -1) {
                // game over
            } else if (cell.flag) {
                // cell is flagged so un-flag it
                localGrid[iIndex][jIndex].flag = false;
                console.log('yes');
            } else if (!cell.open) {
                // open the cell since it is not opened yet
                if (localGrid[iIndex][jIndex].flag) {
                    localGrid[iIndex][jIndex].flag = false;
                    console.log('no2');
                }
                console.log('no');
            }

            setGrid(localGrid);
        }
    }

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
                        flex: 1,
                        backgroundColor: themeColors.light[0] + '10',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        alignContent: 'center',
                        width: 2000,
                        // height: 2000,
                        padding: 100,
                        zIndex: 1,
                        transform: [
                            // {scale},
                            {translateX: pan.x},
                            {translateY: pan.y},
                        ],
                    },
                ]}
                {...panResponder.panHandlers}
                //
            >
                {grid.length >= 1 && grid[0].length >= 1
                    ? grid.map((row: CellData[], _) => {
                          return (
                              <View
                                  key={_}
                                  style={{
                                      flexDirection: 'row',
                                  }}>
                                  {row.map((cell: CellData) => {
                                      if (!cell.flag) console.log(cell);
                                      return (
                                          <Text
                                              key={cell.id}
                                              style={{
                                                  backgroundColor: cell.flag
                                                      ? themeColors.main[0]
                                                      : themeColors
                                                            .transparent[0],
                                                  width: 32,
                                                  height: 32,
                                                  margin: 1,
                                                  borderRadius: 5,
                                                  textAlign: 'center',
                                                  textAlignVertical: 'center',
                                                  fontSize: 18,
                                                  color: themeColors.text[0],
                                                  fontWeight: 'bold',
                                              }}
                                              onPress={() => openCell(cell)}>
                                              {cell.value}
                                          </Text>
                                      );
                                  })}
                              </View>
                          );
                      })
                    : null}
            </Animated.View>
        </View>
    );
};

export default GameScreen;
