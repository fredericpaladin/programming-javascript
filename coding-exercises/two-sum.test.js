const assert = require('assert');
const TwoSum = require('./two-sum');

describe('TwoSum', function () {

    const inputs = [
        [[2,7,11,15], 9],
        [[3,2,4], 6],
        [[3,3], 6]
    ];
    const outputs = [
        [0,1],
        [1,2],
        [0,1]
    ];

    for (let i = 0; i < inputs.length; i++) {
        // Arrange
        const nums = inputs[i][0];
        const target = inputs[i][1];

        // Act
        const actual = TwoSum.twoSum(nums, target)

        // Assert
        const expected = outputs[i];
        it(`Test ${i}: twoSum(${JSON.stringify(nums)}, ${target}) should return '${JSON.stringify(expected)}'`, function () {
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });
    }
});
