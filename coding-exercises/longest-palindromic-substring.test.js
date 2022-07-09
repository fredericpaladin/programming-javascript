const assert = require('assert');
const LongestPalindromicSubstring = require('./longest-palindromic-substring');

describe('LongestPalindromicSubstring', function () {

    const inputs = [
        'babad',
        'bb',
        'a'
    ];
    const outputs = [
        'bab',
        'bb',
        'a'
    ];

    for (let i = 0; i < inputs.length; i++) {
        // Arrange
        const input = inputs[i];
        const expected = outputs[i];

        // Act
        const actual = LongestPalindromicSubstring.longestPalindrome(input);

        // Assert
        it(`Test ${i}: longestPalindrome('${input}') should return '${JSON.stringify(expected)}'`, function () {
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });
    }
});
