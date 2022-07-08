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

    // These data structures are used to track
    // the numbers on the board for each row and column
    let rows = new Array(length);
    let columns = new Array(length);
    for (let i = 0; i < length; i++) {
        rows[i] = [];
        columns[i] = [];
    }

    // This data structure is used to track
    // the numbers on the board for each box.
    // In this case the keys are only [0..2, 0..2] (3x3)
    let boxes = new Array(length);
    for (let i = 0; i < length / 3; i++) {
        boxes[i] = new Array(length / 3);
        for (let j = 0; j < length / 3; j++) {
            boxes[i][j] = new Array(length / 3);
            for (let k = 0; k < length / 3; k++) {
                boxes[i][j][k] = [];
            }
        }
    }

    for (let r = 0; r < length; r++) {
        for (let c = 0; c < length; c++) {
            const value = board[r][c];
            if (value === '.') {
                continue; // Skip empty cell
            }

            if (columns[c].includes(value)) {
                console.log(`Value ${value} was found duplicate in column ${c}: ${JSON.stringify(columns[c])}`);
                return false;
            }

            if (rows[r].includes(value)) {
                console.log(`Value ${value} was found duplicate in row ${r}: ${JSON.stringify(rows[r])}`);
                return false;
            }

            const rBox = Math.floor(r / 3);
            const cBox = Math.floor(c / 3);
            if (boxes[rBox][cBox].includes(value)) {
                console.log(`Value ${value} was found duplicate in box ${rBox} ${cBox}: ${JSON.stringify(boxes[rBox][cBox])}`);
                return false;
            }

            columns[c].push(value);
            rows[r].push(value);
            boxes[rBox][cBox].push(value);
        }
    }
    
    return true;
};

module.exports.isValidSudoku = isValidSudoku;