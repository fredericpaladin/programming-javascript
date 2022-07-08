const assert = require('assert');
const ValidSudoku = require('./valid-sudoku');

describe('ValidSudoku', function () {
    describe('valid board (partially complete board)', function () {
        // Arrange
        const board =
            [['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
            ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
            ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
            ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
            ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
            ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
            ['.', '.', '.', '.', '8', '.', '.', '7', '9']];

        // Act
        const actual = ValidSudoku.isValidSudoku(board);

        // Assert
        const expected = true;
        it(`The Sudoku board should be '${expected === true ? 'valid' : 'invalid'}'`, function () {
            assert.equal(actual, expected);
        });
    });

    describe('valid board (empty board)', function () {
        // Arrange
        const board =
            [['.', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.', '.', '.', '.']];

        // Act
        const actual = ValidSudoku.isValidSudoku(board);

        // Assert
        const expected = true;
        it(`The Sudoku board should be '${expected === true ? 'valid' : 'invalid'}'`, function () {
            assert.equal(actual, expected);
        });
    });

    describe('valid board (complete board)', function () {
        // Arrange
        const board =
            [['5', '3', '4', '6', '7', '8', '9', '1', '2'],
            ['6', '7', '2', '1', '9', '5', '3', '4', '8'],
            ['1', '9', '8', '3', '4', '2', '5', '6', '7'],
            ['8', '5', '9', '7', '6', '1', '4', '2', '3'],
            ['4', '2', '6', '8', '5', '3', '7', '9', '1'],
            ['7', '1', '3', '9', '2', '4', '8', '5', '6'],
            ['9', '6', '1', '5', '3', '7', '2', '8', '4'],
            ['2', '8', '7', '4', '1', '9', '6', '3', '5'],
            ['3', '4', '5', '2', '8', '6', '1', '7', '9']];

        // Act
        const actual = ValidSudoku.isValidSudoku(board);

        // Assert
        const expected = true;
        it(`The Sudoku board should be '${expected === true ? 'valid' : 'invalid'}'`, function () {
            assert.equal(actual, expected);
        });
    });

    describe('invalid board (duplicate value on a row)', function () {
        // Arrange
        const board =
            [['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
            ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
            ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
            ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
            ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
            ['1', '.', '.', '4', '1', '9', '.', '.', '5'],
            ['.', '.', '.', '.', '8', '.', '.', '7', '9']]

        // Act
        const actual = ValidSudoku.isValidSudoku(board);

        // Assert
        const expected = false;
        it(`The Sudoku board should be '${expected === true ? 'valid' : 'invalid'}'`, function () {
            assert.equal(actual, expected);
        });
    });

    describe('invalid board (duplicate value on a column)', function () {
        // Arrange
        const board =
            [['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
            ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
            ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
            ['7', '.', '.', '.', '1', '.', '.', '.', '6'],
            ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
            ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
            ['.', '.', '.', '.', '8', '.', '.', '7', '9']]

        // Act
        const actual = ValidSudoku.isValidSudoku(board);

        // Assert
        const expected = false;
        it(`The Sudoku board should be '${expected === true ? 'valid' : 'invalid'}'`, function () {
            assert.equal(actual, expected);
        });
    });

    describe('invalid board (duplicate value on a box)', function () {
        // Arrange
        const board =
            [['5', '3', '.', '.', '7', '.', '.', '.', '.'],
            ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
            ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
            ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
            ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
            ['7', '.', '.', '.', '2', '8', '.', '.', '6'],
            ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
            ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
            ['.', '.', '.', '.', '8', '.', '.', '7', '9']]

        // Act
        const actual = ValidSudoku.isValidSudoku(board);

        // Assert
        const expected = false;
        it(`The Sudoku board should be '${expected === true ? 'valid' : 'invalid'}'`, function () {
            assert.equal(actual, expected);
        });
    });
});
