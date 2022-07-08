/**
 * https://leetcode.com/problems/valid-sudoku/
 * https://youtu.be/TjFXEUCMqI8
 * 
 * const board =
 * [['5', '3', '.', '.', '7', '.', '.', '.', '.']
 * ,['6', '.', '.', '1', '9', '5', '.', '.', '.']
 * ,['.', '9', '8', '.', '.', '.', '.', '6', '.']
 * ,['8', '.', '.', '.', '6', '.', '.', '.', '3']
 * ,['4', '.', '.', '8', '.', '3', '.', '.', '1']
 * ,['7', '.', '.', '.', '2', '.', '.', '.', '6']
 * ,['.', '6', '.', '.', '.', '.', '2', '8', '.']
 * ,['.', '.', '.', '4', '1', '9', '.', '.', '5']
 * ,['.', '.', '.', '.', '8', '.', '.', '7', '9']
 * ];
 * 
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * 
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {

    const length = board.length;

    // Track the numbers on the board for each row and column
    let rows = new Array(length);
    let columns = new Array(length);
    for (let i = 0; i < length; i++) {
        rows[i] = new Set();
        columns[i] = new Set();
    }

    // Track the numbers on the board for each box.
    // In this case the keys are only [0..2, 0..2] (3x3)
    let boxes = new Array(length);
    for (let i = 0; i < length / 3; i++) {
        boxes[i] = new Array(length / 3);
        for (let j = 0; j < length / 3; j++) {
            boxes[i][j] = new Set();
        }
    }

    for (let r = 0; r < length; r++) {
        for (let c = 0; c < length; c++) {
            const value = board[r][c];
            if (value === '.') {
                continue; // Skip empty cell
            }

            if (columns[c].has(value)) {
                console.log(`Value ${value} was found duplicate in column ${c}: ${JSON.stringify(columns[c])}`);
                return false;
            }

            if (rows[r].has(value)) {
                console.log(`Value ${value} was found duplicate in row ${r}: ${JSON.stringify(rows[r])}`);
                return false;
            }

            const rBox = Math.floor(r / 3);
            const cBox = Math.floor(c / 3);
            if (boxes[rBox][cBox].has(value)) {
                console.log(`Value ${value} was found duplicate in box ${rBox} ${cBox}: ${JSON.stringify(boxes[rBox][cBox])}`);
                return false;
            }

            columns[c].add(value);
            rows[r].add(value);
            boxes[rBox][cBox].add(value);
        }
    }

    return true;
};

module.exports.isValidSudoku = isValidSudoku;