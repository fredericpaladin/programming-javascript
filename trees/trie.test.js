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

        const nonExistingWords = ['ape', 'car', 'cat', 'applicant'];
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

        const nonExistingWords = ['ape', 'car', 'cat', 'applicant'];
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

        const nonExistingPrefixes = ['applicant', 'ape', 'cat', 'test'];
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

    describe('hasChildren()', function () {
        // Arrange
        const words = ['ape', 'bee', 'cat'];
        const trie = new Trie();
        for (let i = 0; i < words.length; i++)
            trie.insert(words[i]);

        // Assert
        it('the first node of the trie should have children', function () {
            assert.equal(trie.root.hasChildren(), true);
        });

        for (const key of Object.keys(trie.root.children)) {
            const child = trie.root.children[key];
            it(`child node '${key}' should have children`, function () {
                assert.equal(child.hasChildren(), true);
            });
        }
    });

    describe('hasChildren() one level', function () {
        // Arrange
        const words = ['a', 'b', 'c'];
        const trie = new Trie();
        for (let i = 0; i < words.length; i++)
            trie.insert(words[i]);

        // Assert
        it('the first node of the trie should have children', function () {
            assert.equal(trie.root.hasChildren(), true);
        });

        for (const key of Object.keys(trie.root.children)) {
            const child = trie.root.children[key];
            it(`child node '${key}' should not have children`, function () {
                assert.equal(child.hasChildren(), false);
            });
        }
    });

    describe('delete() existing word', function () {
        // Arrange
        const words = ['apple', 'card', 'car', 'app', 'application'];
        const trie = new Trie();
        for (let i = 0; i < words.length; i++)
            trie.insert(words[i]);

        // Act
        const deleteWord = 'car';
        trie.delete(deleteWord);

        // Assert
        it(`trie should no longer contain the word '${deleteWord}'`, function () {
            assert.equal(trie.search(deleteWord), false);
        });

        const deleteWordStartsWith = 'car'; // This should work with 'card'
        it(`trie should still contain a word that starts with '${deleteWordStartsWith}'`, function () {
            assert.equal(trie.startsWith(deleteWordStartsWith), true);
        });

        const remainingWords = ['apple', 'card', 'app', 'application'];
        for (let i = 0; i < remainingWords.length; i++) {
            it(`trie should still contain the word '${remainingWords[i]}'`, function () {
                assert.equal(trie.search(remainingWords[i]), true);
            });
        }
    });

    describe('delete() existing word with no similar words', function () {
        // Arrange
        const words = ['apple', 'car', 'app', 'application'];
        const trie = new Trie();
        for (let i = 0; i < words.length; i++)
            trie.insert(words[i]);

        // Act
        const deleteWord = 'car';
        trie.delete(deleteWord);

        // Assert
        it(`trie should no longer contain the word '${deleteWord}'`, function () {
            assert.equal(trie.search(deleteWord), false);
        });

        const deleteWordStartsWith = 'c';
        it(`trie should no longer contain a word that starts with '${deleteWordStartsWith}'`, function () {
            assert.equal(trie.startsWith(deleteWordStartsWith), false);
        });

        const remainingWords = ['apple', 'app', 'application'];
        for (let i = 0; i < remainingWords.length; i++) {
            it(`trie should still contain the word '${remainingWords[i]}'`, function () {
                assert.equal(trie.search(remainingWords[i]), true);
            });
        }
    });

    describe('delete() non existing word', function () {
        // Arrange
        const words = ['apple', 'card', 'car', 'application'];
        const trie = new Trie();
        for (let i = 0; i < words.length; i++)
            trie.insert(words[i]);

        // Act
        const deleteWord = 'app';
        trie.delete(deleteWord);

        // Assert
        it(`trie should not contain the word '${deleteWord}'`, function () {
            assert.equal(trie.search(deleteWord), false);
        });

        const deleteWordStartsWith = 'app'; // This should work with 'apple' and'application'
        it(`trie should still contain a word that starts with '${deleteWordStartsWith}'`, function () {
            assert.equal(trie.startsWith(deleteWordStartsWith), true);
        });

        for (let i = 0; i < words.length; i++) {
            it(`trie should still contain the word '${words[i]}'`, function () {
                assert.equal(trie.search(words[i]), true);
            });
        }
    });
});
