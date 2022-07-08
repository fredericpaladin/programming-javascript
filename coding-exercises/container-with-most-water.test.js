const assert = require('assert');
const ContainerWithMostWater = require('./container-with-most-water');

describe('ContainerWithMostWater', function () {

    const inputs = [
        [1, 8, 6, 2, 5, 4, 8, 3, 7],
        [1, 1]
    ];
    const outputs = [
        49,
        1
    ];

    for (let i = 0; i < inputs.length; i++) {
        // Arrange
        const input = inputs[i];

        // Act
        const actual = ContainerWithMostWater.maxArea(input);
        const expected = outputs[i];

        // Assert
        it(`Test ${i}: maxArea('${input}') should return '${expected}'`, function () {
            assert.equal(actual, expected);
        });
    }
});
