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
