const assert = require('assert');
const LargestNumber = require('./largest-number');

describe('LargestNumber', function () {

    const inputs = [
        [10,2],
        [3,30,34,5,9],
    ];
    const outputs = [
        "210",
        "9534330"
    ];

    for (let i = 0; i < inputs.length; i++) {
        // Arrange
        const input = inputs[i];

        // Act
        const actual = LargestNumber.largestNumber(input);
        const expected = outputs[i];

        // Assert
        it(`Test ${i}: largestNumber(${JSON.stringify(input)}) should return ${expected}`, function () {
            assert.equal(actual, expected);
        });
    }
});
