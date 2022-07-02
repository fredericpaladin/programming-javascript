const assert = require('assert');
const Trie = require('./trie')

describe('Trie', function () {
    describe('insert() and search() single word', function () {
        // Arrange
        const word = 'card';
        const trie = new Trie();

        // Act
        trie.insert(word);

        // Assert
        it(`trie should contain the word '${word}'`, function () {
            assert.equal(trie.search(word), true);
        });

        const nonExistingWord = 'car';
        it(`trie should not contain the word '${nonExistingWord}'`, function () {
            assert.equal(trie.search(nonExistingWord), false);
        });
    });

    describe('insert() duplicate words', function () {
        // Arrange
        const words = ['apple', 'card', 'apple', 'app', 'card'];
        const trie = new Trie();

        // Act
        for (let i = 0; i < words.length; i++)
            trie.insert(words[i]);

        // Assert
        const existingWords = ['apple', 'card', 'app'];
        for (let i = 0; i < existingWords.length; i++) {
            it(`trie should contain the word '${existingWords[i]}'`, function () {
                assert.equal(trie.search(existingWords[i]), true);
            });
        }

        const nonExistingWords = ['ape', 'car', 'applicant'];
        for (let i = 0; i < nonExistingWords.length; i++) {
            it(`trie should not contain the word '${nonExistingWords[i]}'`, function () {
                assert.equal(trie.search(nonExistingWords[i]), false);
            });
        }
    });

    describe('insert() and search() multiple words', function () {
        // Arrange
        const words = ['apple', 'card', 'app', 'application'];
        const trie = new Trie();

        // Act
        for (let i = 0; i < words.length; i++)
            trie.insert(words[i]);

        // Assert
        for (let i = 0; i < words.length; i++) {
            it(`trie should contain the word '${words[i]}'`, function () {
                assert.equal(trie.search(words[i]), true);
            });
        }

        const nonExistingWords = ['ape', 'car', 'applicant'];
        for (let i = 0; i < nonExistingWords.length; i++) {
            it(`trie should not contain the word '${nonExistingWords[i]}'`, function () {
                assert.equal(trie.search(nonExistingWords[i]), false);
            });
        }
    });

    describe('startsWith()', function () {
        // Arrange
        const words = ['apple', 'card', 'application', 'texture'];
        const trie = new Trie();
        for (let i = 0; i < words.length; i++)
            trie.insert(words[i]);

        const existingPrefixes = ['app', 'apple', 'car', 'card', 'text', 'texture'];
        for (let i = 0; i < existingPrefixes.length; i++) {
            const prefix = existingPrefixes[i];

            // Act
            const actual = trie.startsWith(prefix);

            // Assert
            it(`trie should has a word that starts with '${prefix}'`, function () {
                assert.equal(actual, true);
            });
        }

        const nonExistingPrefixes = ['applicant', 'ape', 'test'];
        for (let i = 0; i < nonExistingPrefixes.length; i++) {
            const prefix = nonExistingPrefixes[i];

            // Act
            const actual = trie.startsWith(prefix);

            // Assert
            it(`trie should has a word that starts with '${prefix}'`, function () {
                assert.equal(actual, false);
            });
        }
    });
});
