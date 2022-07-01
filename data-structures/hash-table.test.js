const assert = require('assert');
const HashTable = require('./hash-table');

describe('HashTable', function () {

    describe('add()', function () {
        // Arrange
        const count = 10;
        const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
        const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const hashTable = new HashTable();

        // Act
        for (let i = 0; i < count; i++) {
            const key = keys[i];
            const value = values[i];
            hashTable.add(key, value);
        }

        // Assert
        const expectedCount = count;

        it(`hash table should contain ${expectedCount} items`, function () {
            assert.equal(hashTable.count(), expectedCount);
        });

        it('hash table should not be empty', function () {
            assert.equal(hashTable.isEmpty(), false);
        });

        for (let i = 0; i < count; i++) {
            const key = keys[i];
            const expectedValue = values[i];

            it(`hash table should contain key '${key}'`, function () {
                assert.equal(hashTable.containsKey(key), true);
            });

            it(`key '${key}' should have a value of '${expectedValue}'`, function () {
                assert.equal(hashTable.get(key), expectedValue);
            });
        }
    });

    describe('remove() remove existing', function () {
        // Arrange
        const count = 10;
        const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
        const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const hashTable = new HashTable();
        for (let i = 0; i < count; i++) {
            const key = keys[i];
            const value = values[i];
            hashTable.add(key, value);
        }

        // Act
        const removedKey = 'd';
        hashTable.remove(removedKey);

        // Assert
        const expectedValue = undefined;
        const expectedCount = count - 1;

        it(`hash table should no longer contain key '${removedKey}'`, function () {
            assert.equal(hashTable.containsKey(removedKey), false);
        });

        it(`key '${removedKey}' should have a value of '${expectedValue}'`, function () {
            assert.equal(hashTable.get(removedKey), expectedValue);
        });

        it(`hash table should contain ${expectedCount} items`, function () {
            assert.equal(hashTable.count(), expectedCount);
        });

        it('hash table should not be empty', function () {
            assert.equal(hashTable.isEmpty(), false);
        });
    });

    describe('remove() remove non-existing', function () {
        // Arrange
        const count = 10;
        const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
        const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const hashTable = new HashTable();
        for (let i = 0; i < count; i++) {
            const key = keys[i];
            const value = values[i];
            hashTable.add(key, value);
        }

        // Act
        const removedKey = 'x';
        hashTable.remove(removedKey);

        // Assert
        const expectedValue = undefined;
        const expectedCount = count;

        it(`hash table should not contain key '${removedKey}'`, function () {
            assert.equal(hashTable.containsKey(removedKey), false);
        });

        it(`key '${removedKey}' should have a value of '${expectedValue}'`, function () {
            assert.equal(hashTable.get(removedKey), expectedValue);
        });

        it(`hash table should contain ${expectedCount} items`, function () {
            assert.equal(hashTable.count(), expectedCount);
        });

        it('hash table should not be empty', function () {
            assert.equal(hashTable.isEmpty(), false);
        });
    });
    

    describe('remove() remove key from empty table', function () {
        // Arrange
        const count = 0;
        const hashTable = new HashTable();

        // Act
        const removedKey = 'x';
        hashTable.remove(removedKey);

        // Assert
        const expectedValue = undefined;
        const expectedCount = count;

        it(`hash table should not contain key '${removedKey}'`, function () {
            assert.equal(hashTable.containsKey(removedKey), false);
        });

        it(`key '${removedKey}' should have a value of '${expectedValue}'`, function () {
            assert.equal(hashTable.get(removedKey), expectedValue);
        });

        it(`hash table should contain ${expectedCount} items`, function () {
            assert.equal(hashTable.count(), expectedCount);
        });

        it('hash table should be empty', function () {
            assert.equal(hashTable.isEmpty(), true);
        });
    });
});
