const assert = require('assert');
const MinCostClimbingStairs = require('./min-cost-climbing-stairs');

describe('MinCostClimbingStairs', function () {

    const inputs = [
        [10,15,20],
        [1,100,1,1,1,100,1,1,100,1]
    ];
    const outputs = [
        15,
        6
    ];

    for (let i = 0; i < inputs.length; i++) {
        // Arrange
        const input = inputs[i];
        const expected = outputs[i];

        // Act
        const actual = MinCostClimbingStairs.minCostClimbingStairs(input);

        // Assert
        it(`Test ${i}: minCostClimbingStairs(${JSON.stringify(input)}) should return '${JSON.stringify(expected)}'`, function () {
            assert.equal(actual, expected);
        });
    }
});
