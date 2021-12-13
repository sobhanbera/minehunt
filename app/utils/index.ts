import {CellData} from '../interfaces';
import {CELL_ID_SPLITTING_CHARACTER} from '../constants';

const UTILS_MODULE_DETAILS = 'A';
export default UTILS_MODULE_DETAILS;

/**
 * get the maximum number of cells which could be mines by row and column
 * @param rows number of rows
 * @param columns number of columns
 * @returns maximum number of mines that particular board will have
 */
export function calculateNumberOfMines(rows: number, columns: number) {
    const numberOFCells: number = rows * columns;
    if (numberOFCells <= 200) {
        return Math.ceil((16 / 100) * numberOFCells); // maximum 16% of number of cells will be mine
    } else if (numberOFCells <= 500) {
        return Math.ceil((18 / 100) * numberOFCells); // maximum 18% of number of cells will be mine
    } else if (numberOFCells <= 1000) {
        return Math.ceil((15 / 100) * numberOFCells); // maximum 15% of number of cells will be mine
    } else if (numberOFCells <= 2500) {
        return Math.ceil((16 / 100) * numberOFCells); // maximum 16% of number of cells will be mine
    } else if (numberOFCells <= 1000) {
        return Math.ceil((20 / 100) * numberOFCells); // maximum 20% of number of cells will be mine
    }

    return Math.ceil((15 / 100) * numberOFCells); // default maximum is 15% of number of cells will be mine
}

/**
 * two digit number formatter
 * @param number any number
 * @returns if number < 10 than `0+${number}` else that number
 */
export function formateNumberToHave2Digits(number: number): string {
    if (number > 99) {
        return ('0' + number).slice(-3); // for 3 digit numbers
    }
    return ('0' + number).slice(-2); // for 1 and 2 digit numbers
}

/**
 * seconds to formatted text
 * @param seconds seconds of any time
 * @returns formatted text with format HH:MM:ss or MM:ss
 */
export function formatSecondsToTimer(seconds: number): string {
    // if is less than 1 minute
    if (seconds < 60) {
        return `00:${formateNumberToHave2Digits(seconds)}`;
    } else if (seconds >= 60 && seconds < 3600) {
        // if the seconds make more than 1 minute or so...
        var min = Math.floor((seconds % 3600) / 60);
        var sec = Math.floor((seconds % 3600) % 60);
        return `${formateNumberToHave2Digits(min)}:${formateNumberToHave2Digits(
            sec,
        )}`;
    }

    // if the seconds make more than 1 hours or so...
    var hour = Math.floor(seconds / 3600);
    var min = Math.floor((seconds % 3600) / 60);
    var sec = Math.floor((seconds % 3600) % 60);
    return `${formateNumberToHave2Digits(hour)}:${formateNumberToHave2Digits(
        min,
    )}:${formateNumberToHave2Digits(seconds)}`;
}

/**
 * get formatted and unique id for every cell
 * @param i row index
 * @param j column index
 * @returns returns a simple formatted id string including both i and j
 */
export function getCellID(i: number, j: number) {
    return `${i}${CELL_ID_SPLITTING_CHARACTER}${j}`;
}

/**
 * function to get the ith index or the row in which the cell exists
 * @param cell cell data of the cell
 * @returns row index
 */
export function getCellRowIndexFromID(cell: CellData): number {
    return Number(cell.id.split(CELL_ID_SPLITTING_CHARACTER)[0]);
}

/**
 * function to get the jth index or the column in which the cell exists
 * @param cell cell data of the cell
 * @returns column index
 */
export function getCellColumnIndexFromID(cell: CellData): number {
    return Number(cell.id.split(CELL_ID_SPLITTING_CHARACTER)[1]);
}
