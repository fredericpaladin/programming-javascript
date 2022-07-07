const assert = require('assert');
const StringToIntegerAtoi = require('./string-to-integer-atoi');

describe('StringToIntegerAtoi', function () {

    const inputs = [
        '42',
        '   -42',
        '4193 with words',
        '+-12',
        '00000-42a1234',
        '   +0 123',
        '  -0012a42',
        '-5-',
        '  +  413'
    ];
    const outputs = [
        42,
        -42,
        4193,
        0,
        0,
        0,
        -12,
        -5,
        0
    ];

    for (let i = 0; i < inputs.length; i++) {
        // Arrange
        const input = inputs[i];

        // Act
        const actual = StringToIntegerAtoi.myAtoi(input);
        const expected = outputs[i];

        // Assert
        it(`Test ${i}: myAtoi('${input}') should return '${expected}'`, function () {
            assert.equal(actual, expected);
        });
    }
});
