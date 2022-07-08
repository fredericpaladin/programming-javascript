const assert = require('assert');
const ValidPalindrome = require('./valid-palindrome');

describe('ValidPalindrome', function () {

    const inputs = [
        'A man, a plan, a canal: Panama',
        'race a car',
        ' ',
        '0P'
    ];
    const outputs = [
        true,
        false,
        true,
        false,
    ];

    for (let i = 0; i < inputs.length; i++) {
        // Arrange
        const input = inputs[i];

        // Act
        const actual = ValidPalindrome.isPalindrome(input);
        const expected = outputs[i];

        // Assert
        it(`Test ${i}: isPalindrome('${input}') should return '${expected}'`, function () {
            assert.equal(actual, expected);
        });
    }
});
