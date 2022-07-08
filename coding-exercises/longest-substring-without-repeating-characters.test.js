const assert = require('assert');
const LongestSubstringWithoutRepeatingCharacters = require('./longest-substring-without-repeating-characters');

describe('LongestSubstringWithoutRepeatingCharacters', function () {

    const inputs = [
        'abcabcbb',
        'bbbbb',
        'pwwkew',
        'aab',
        'dvdf',
    ];
    const outputs = [
        3,
        1,
        3,
        2,
        3
    ];

    for (let i = 0; i < inputs.length; i++) {
        // Arrange
        const input = inputs[i];

        // Act
        const actual = LongestSubstringWithoutRepeatingCharacters.lengthOfLongestSubstring(input);
        const expected = outputs[i];

        // Assert
        it(`Test ${i}: lengthOfLongestSubstring('${input}') should return '${expected}'`, function () {
            assert.equal(actual, expected);
        });
    }
});
