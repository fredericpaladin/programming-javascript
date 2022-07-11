const assert = require('assert');
const RemoveKDigits = require('./remove-k-digits');

describe('RemoveKDigits', function () {

    const inputs = [
        ["1432219", 3],
        ["10200", 1],
        ["10", 2],
        ["9", 1],
        ["112", 1]
    ];
    const outputs = [
        "1219",
        "200",
        "0",
        "0",
        "11"
    ];

    for (let i = 0; i < inputs.length; i++) {
        // Arrange
        const num = inputs[i][0];
        const k = inputs[i][1];

        // Act
        const actual = RemoveKDigits.removeKdigits(num, k);

        // Assert
        const expected = outputs[i];
        it(`Test ${i}: removeKdigits('${num}', ${k}) should return '${expected}'`, function () {
            assert.equal(actual, expected);
        });
    }
});
