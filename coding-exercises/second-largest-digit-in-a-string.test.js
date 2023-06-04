const assert = require('assert');
const SecondLargestDigitInAString = require('./second-largest-digit-in-a-string');

describe('SecondLargestDigitInAString', function () {

    const inputs = [
        'dfa12321afd',
        'abc1111',
    ];
    const outputs = [
        2,
        -1
    ];

    for (let i = 0; i < inputs.length; i++) {
        // Arrange
        const input = inputs[i];

        // Act
        const actual = SecondLargestDigitInAString.secondHighest(input);
        const expected = outputs[i];

        // Assert
        it(`Test ${i}: secondHighest('${input}') should return ${expected}`, function () {
            assert.equal(actual, expected);
        });
    }
});
