const assert = require('assert');
const ValidAnagram = require('./valid-anagram');

describe('ValidAnagram', function () {

    describe('anagram words', function () {
        const inputs = [
            ['anagram', 'nagaram'],
            ['angel', 'glean'],
            ['arc', 'car'],
            ['brag', 'grab'],
            ['bored', 'robed'],
            ['cat', 'act'],
            ['cider', 'cried'],
            ['dusty', 'study'],
            ['elbow', 'below'],
            ['inch', 'chin'],
            ['night', 'thing'],
            ['peach', 'cheap'],
            ['players', 'parsley'],
            ['sadder', 'dreads'],
            ['save', 'vase'],
            ['state', 'taste'],
            ['same', 'same']
        ];

        for (let i = 0; i < inputs.length; i++) {

            // Arrange
            const word1 = inputs[i][0];
            const word2 = inputs[i][1];

            // Act
            const actual = ValidAnagram.isAnagram(word1, word2);

            // Assert
            it(`Test ${i}: '${word1}' should be an anagram of '${word2}'.`, function () {
                assert.equal(actual, true);
            });
        }
    });

    describe('anagram phrases', function () {
        const inputs = [
            ['Debit card', 'Bad credit'],
            ['Dormitory', 'Dirty room'],
            ['School master', 'The classroom'],
            ['Same text', 'Same text']
        ];

        for (let i = 0; i < inputs.length; i++) {

            // Arrange
            const word1 = inputs[i][0];
            const word2 = inputs[i][1];

            // Act
            const actual = ValidAnagram.isAnagram(word1, word2);

            // Assert
            it(`Test ${i}: '${word1}' should be an anagram of '${word2}'.`, function () {
                assert.equal(actual, true);
            });
        }
    });
    
    describe('not valid anagrams', function () {
        const inputs = [
            ['abc', 'def'],
            ['arc', 'cart'],
            ['brag', 'grad'],
            ['bored', ''],
            ['cate', 'act'],
            ['', 'cried'],
            ['save', 'saved'],
            ['state', 'tasted'],
            ['Debit card', 'Credit card'],
            ['School master', 'School waster']
        ];

        for (let i = 0; i < inputs.length; i++) {

            // Arrange
            const word1 = inputs[i][0];
            const word2 = inputs[i][1];

            // Act
            const actual = ValidAnagram.isAnagram(word1, word2);

            // Assert
            it(`Test ${i}: '${word1}' should not be an anagram of '${word2}'.`, function () {
                assert.equal(actual, false);
            });
        }
    });

});
