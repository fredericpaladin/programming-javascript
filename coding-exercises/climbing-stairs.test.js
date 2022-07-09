const assert = require('assert');
const ClimbingStairs = require('./climbing-stairs');

describe('ClimbingStairs', function () {

    const inputs = [
        2,
        3,
        5,
        45
    ];
    const outputs = [
        2,
        3,
        8,
        1836311903
    ];

    for (let i = 0; i < inputs.length; i++) {
        // Arrange
        const input = inputs[i];
        const expected = outputs[i];

        // Act
        const actual = ClimbingStairs.climbStairs(input);

        // Assert
        it(`Test ${i}: climbStairs(${input}) should return '${JSON.stringify(expected)}'`, function () {
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });
    }
});
