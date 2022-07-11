const assert = require('assert');
const insertion = require('./insertion');

describe('Insertion', function () {
    describe('sort() unique values', function () {

        // Arrange
        const array = [
            95, 15, 64, 35, 96, 72, 91, 84, 70, 51,
            99, 75, 38, 90, 11, 44, 100, 65, 68, 19,
            53, 87, 92, 69, 30, 5, 16, 59, 50, 76,
            63, 29, 28, 4, 88, 61, 40, 94, 93, 31,
            9, 62, 97, 45, 13, 2, 33, 66, 86, 20,
            56, 71, 32, 23, 49, 25, 18, 52, 58, 27,
            37, 39, 14, 60, 98, 79, 77, 17, 82, 10,
            3, 12, 46, 78, 8, 21, 41, 73, 26, 6,
            81, 67, 24, 36, 48, 43, 57, 85, 80, 55,
            83, 47, 74, 1, 89, 54, 42, 22, 7, 34,
        ];
        const expected = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
            51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
            61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
            71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
            81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
            91, 92, 93, 94, 95, 96, 97, 98, 99, 100
        ];

        // Act
        insertion.sort(array);

        // Assert 
        it('array should be sorted', function () {
            assert.equal(JSON.stringify(array), JSON.stringify(expected));
        });
    });

    describe('sort() duplicate values', function () {

        // Arrange
        const array = [
            19, 7, 8, 17, 18, 12, 18, 12, 9, 9,
            12, 1, 9, 17, 7, 9, 6, 13, 12, 10,
            10, 13, 15, 10, 6, 13, 11, 6, 5, 17,
            10, 6, 6, 14, 8, 20, 16, 11, 20, 14,
            12, 1, 9, 11, 17, 17, 6, 10, 17, 20
        ];
        const expected = [
            1, 1, 5, 6, 6, 6, 6, 6, 6, 7,
            7, 8, 8, 9, 9, 9, 9, 9, 10, 10,
            10, 10, 10, 11, 11, 11, 12, 12, 12, 12,
            12, 13, 13, 13, 14, 14, 15, 16, 17, 17,
            17, 17, 17, 17, 18, 18, 19, 20, 20, 20
        ];

        // Act
        insertion.sort(array);

        // Assert 
        it('array should be sorted', function () {
            assert.equal(JSON.stringify(array), JSON.stringify(expected));
        });
    });

    describe('sort() single value', function () {

        // Arrange
        const array = [33];
        const expected = [33];

        // Act
        insertion.sort(array);

        // Assert 
        it('array should be sorted', function () {
            assert.equal(JSON.stringify(array), JSON.stringify(expected));
        });
    });

    describe('sort() already sorted array', function () {

        // Arrange
        const array = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
            51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
            61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
            71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
            81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
            91, 92, 93, 94, 95, 96, 97, 98, 99, 100
        ];
        const expected = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
            51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
            61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
            71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
            81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
            91, 92, 93, 94, 95, 96, 97, 98, 99, 100
        ];

        // Act
        insertion.sort(array);

        // Assert 
        it('array should be sorted', function () {
            assert.equal(JSON.stringify(array), JSON.stringify(expected));
        });
    });

    describe('sort() empty array', function () {

        // Arrange
        const array = [];
        const expected = [];

        // Act
        insertion.sort(array);

        // Assert 
        it('array should be sorted', function () {
            assert.equal(JSON.stringify(array), JSON.stringify(expected));
        });
    });
});
