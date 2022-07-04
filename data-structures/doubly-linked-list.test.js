const assert = require('assert');
const DoublyLinkedList = require('./doubly-linked-list');

describe('DoublyLinkedList', function () {

    describe('append()', function () {
        // Arrange
        const list = new DoublyLinkedList();

        // Act
        for (let i = 0; i < 10; i++)
            list.append(i);

        // Assert
        const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const expectedHead = expectedArray[0];
        const expectedTail = expectedArray[expectedArray.length - 1];

        it(`the head should be '${expectedHead}'`, function () {
            assert.equal(list.head.value, expectedHead);
        });

        it(`the tail should be '${expectedTail}'`, function () {
            assert.equal(list.tail.value, expectedTail);
        });

        it(`list should contain ${expectedArray.length} items`, function () {
            assert.equal(list.toArray().length, expectedArray.length);
        });

        it(`list should contain items ${JSON.stringify(expectedArray)}`, function () {
            assert.equal(JSON.stringify(list.toArray()), JSON.stringify(expectedArray));
        });
    });

    describe('prepend()', function () {
        // Arrange
        const list = new DoublyLinkedList();

        // Act
        for (let i = 0; i < 10; i++)
            list.prepend(i);

        // Assert
        const expectedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        const expectedHead = expectedArray[0];
        const expectedTail = expectedArray[expectedArray.length - 1];

        it(`the head should be '${expectedHead}'`, function () {
            assert.equal(list.head.value, expectedHead);
        });

        it(`the tail should be '${expectedTail}'`, function () {
            assert.equal(list.tail.value, expectedTail);
        });

        it(`list should contain ${expectedArray.length} items`, function () {
            assert.equal(list.toArray().length, expectedArray.length);
        });

        it(`list should contain items ${JSON.stringify(expectedArray)}`, function () {
            assert.equal(JSON.stringify(list.toArray()), JSON.stringify(expectedArray));
        });
    });

    describe('removeFirst()', function () {
        // Arrange
        const list = new DoublyLinkedList();
        for (let i = 0; i < 10; i++)
            list.append(i);

        // Act
        const removed = list.removeFirst();

        // Assert
        const expectedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const expectedHead = expectedArray[0];
        const expectedTail = expectedArray[expectedArray.length - 1];
        const expectedRemoved = 0;

        it(`the head should be '${expectedHead}'`, function () {
            assert.equal(list.head.value, expectedHead);
        });

        it(`the tail should be '${expectedTail}'`, function () {
            assert.equal(list.tail.value, expectedTail);
        });

        it(`item '${expectedRemoved}' removed as expected`, function () {
            assert.equal(removed.value, expectedRemoved);
        });

        it(`list should contain ${expectedArray.length} items`, function () {
            assert.equal(list.toArray().length, expectedArray.length);
        });

        it(`list should contain items ${JSON.stringify(expectedArray)}`, function () {
            assert.equal(JSON.stringify(list.toArray()), JSON.stringify(expectedArray));
        });
    });

    describe('removeFirst() with empty list', function () {
        // Arrange
        const list = new DoublyLinkedList();

        // Act
        const removed = list.removeFirst();

        // Assert
        const expectedArray = [];

        it('the head should be null', function () {
            assert.equal(list.head, null);
        });

        it('the tail should be null', function () {
            assert.equal(list.tail, null);
        });

        it('no item removed', function () {
            assert.equal(removed, null);
        });

        it(`list should contain ${expectedArray.length} items`, function () {
            assert.equal(list.toArray().length, expectedArray.length);
        });

        it(`list should contain items ${JSON.stringify(expectedArray)}`, function () {
            assert.equal(JSON.stringify(list.toArray()), JSON.stringify(expectedArray));
        });
    });

    describe('removeLast()', function () {
        // Arrange
        const list = new DoublyLinkedList();
        for (let i = 0; i < 10; i++)
            list.append(i);

        // Act
        const removed = list.removeLast();

        // Assert
        const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        const expectedHead = expectedArray[0];
        const expectedTail = expectedArray[expectedArray.length - 1];
        const expectedRemoved = 9;

        it(`the head should be '${expectedHead}'`, function () {
            assert.equal(list.head.value, expectedHead);
        });

        it(`the tail should be '${expectedTail}'`, function () {
            assert.equal(list.tail.value, expectedTail);
        });

        it(`item '${expectedRemoved}' removed as expected`, function () {
            assert.equal(removed.value, expectedRemoved);
        });

        it(`list should contain ${expectedArray.length} items`, function () {
            assert.equal(list.toArray().length, expectedArray.length);
        });

        it(`list should contain items ${JSON.stringify(expectedArray)}`, function () {
            assert.equal(JSON.stringify(list.toArray()), JSON.stringify(expectedArray));
        });
    });

    describe('removeLast() with empty list', function () {
        // Arrange
        const list = new DoublyLinkedList();

        // Act
        const removed = list.removeLast();

        // Assert
        const expectedArray = [];

        it('the head should be null', function () {
            assert.equal(list.head, null);
        });

        it('the tail should be null', function () {
            assert.equal(list.tail, null);
        });

        it('no item removed', function () {
            assert.equal(removed, null);
        });

        it(`list should contain ${expectedArray.length} items`, function () {
            assert.equal(list.toArray().length, expectedArray.length);
        });

        it(`list should contain items ${JSON.stringify(expectedArray)}`, function () {
            assert.equal(JSON.stringify(list.toArray()), JSON.stringify(expectedArray));
        });
    });

    describe('removeAll()', function () {
        // Arrange
        const list = new DoublyLinkedList();
        for (let i = 0; i < 10; i++)
            list.append(i);

        // Act
        list.removeAll();

        // Assert
        const expectedArray = [];
        
        it('the head should be null', function () {
            assert.equal(list.head, null);
        });

        it('the tail should be null', function () {
            assert.equal(list.tail, null);
        });

        it(`list should contain ${expectedArray.length} items`, function () {
            assert.equal(list.toArray().length, expectedArray.length);
        });

        it(`list should contain items ${JSON.stringify(expectedArray)}`, function () {
            assert.equal(JSON.stringify(list.toArray()), JSON.stringify(expectedArray));
        });
    });

    describe('removeAll() with empty list', function () {
        // Arrange
        const list = new DoublyLinkedList();

        // Act
        list.removeAll();

        // Assert
        const expectedArray = [];

        it('the head should be null', function () {
            assert.equal(list.head, null);
        });

        it('the tail should be null', function () {
            assert.equal(list.tail, null);
        });

        it(`list should contain ${expectedArray.length} items`, function () {
            assert.equal(list.toArray().length, expectedArray.length);
        });

        it(`list should contain items ${JSON.stringify(expectedArray)}`, function () {
            assert.equal(JSON.stringify(list.toArray()), JSON.stringify(expectedArray));
        });
    });
    
    describe('toArray()', function () {
        // Arrange
        const list = new DoublyLinkedList();

        // Act
        for (let i = 0; i < 10; i++)
            list.append(i);

        // Assert
        const actualArray = list.toArray();
        const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        it(`the array should contain ${expectedArray.length} items`, function () {
            assert.equal(actualArray.length, expectedArray.length);
        });

        for (let i = 0; i < expectedArray.length; i++) {
            const actualItem = actualArray[i];
            const expectedItem = expectedArray[i];

            it(`item at index '${i}' should be '${expectedItem}'`, function () {
                assert.equal(actualItem, expectedItem);
            });
        }
    });
    
    describe('toReverseArray()', function () {
        // Arrange
        const list = new DoublyLinkedList();

        // Act
        for (let i = 0; i < 10; i++)
            list.append(i);

        // Assert
        const actualArray = list.toReverseArray();
        const expectedArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

        it(`the array should contain ${expectedArray.length} items`, function () {
            assert.equal(actualArray.length, expectedArray.length);
        });

        for (let i = 0; i < expectedArray.length; i++) {
            const actualItem = actualArray[i];
            const expectedItem = expectedArray[i];

            it(`item at index '${i}' should be '${expectedItem}'`, function () {
                assert.equal(actualItem, expectedItem);
            });
        }
    });
});
