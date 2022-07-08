const assert = require('assert');
const BinarySearch = require('./binary-search');

describe('BinarySearch', function () {

    const inputs = [
        [[-1,0,3,5,9,12], 9],
        [[-1,0,3,5,9,12], 2],
        [[-1], 2],
        [[2], 2]
    ];
    const outputs = [
        4,
        -1,
        -1,
        0
    ];

    for (let i = 0; i < inputs.length; i++) {
        // Arrange
        const nums = inputs[i][0];
        const target = inputs[i][1];

        // Act
        const actual = BinarySearch.search(nums, target)

        // Assert
        const expected = outputs[i];
        it(`Test ${i}: search(${JSON.stringify(nums)}, ${target}) should return '${JSON.stringify(expected)}'`, function () {
            assert.equal(actual, expected);
        });
    }
});
