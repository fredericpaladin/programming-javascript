const assert = require('assert');
const Queue = require('./queue');

describe('Queue', function () {

    describe('enqueue()', function () {
        // Arrange
        const count = 10;
        const queue = new Queue();

        // Act
        for (let i = 0; i < count; i++)
            queue.enqueue(i);

        // Assert
        const expectedCount = count;

        it(`queue should contain ${expectedCount} items`, function () {
            assert.equal(queue.count(), expectedCount);
        });

        it('queue should not be empty', function () {
            assert.equal(queue.isEmpty(), false);
        });
    });

    describe('dequeue() remove one', function () {
        // Arrange
        const count = 10;
        const queue = new Queue();
        for (let i = 0; i < count; i++)
            queue.enqueue(i);

        // Act
        const actualItem = queue.dequeue();

        // Assert
        const expectedItem = 0;
        const expectedCount = count - 1;

        it(`removed item should be '${expectedItem}'`, function () {
            assert.equal(actualItem, expectedItem);
        });

        it(`queue should contain ${expectedCount} items`, function () {
            assert.equal(queue.count(), expectedCount);
        });

        it('queue should not be empty', function () {
            assert.equal(queue.isEmpty(), false);
        });
    });

    describe('dequeue() remove all', function () {
        // Arrange
        const count = 10;
        const queue = new Queue();

        for (let i = 0; i < count; i++)
            queue.enqueue(i);

        for (let i = 0; i < count; i++) {
            
            // Act
            const actualItem = queue.dequeue();

            // Assert
            it(`removed item should be '${i}'`, function () {
                assert.equal(actualItem, i);
            });
        }

        const expectedCount = 0;
        it(`queue should contain ${expectedCount} items`, function () {
            assert.equal(queue.count(), expectedCount);
        });

        it('queue should be empty', function () {
            assert.equal(queue.isEmpty(), true);
        });
    });
    
    describe('dequeue() empty queue', function () {
        // Arrange
        const queue = new Queue();

        // Act
        const actualItem = queue.dequeue();

        // Assert
        const expectedItem = null;
        const expectedCount = 0;

        it(`removed item should be '${expectedItem}'`, function () {
            assert.equal(actualItem, expectedItem);
        });

        it(`queue should contain ${expectedCount} items`, function () {
            assert.equal(queue.count(), expectedCount);
        });

        it('queue should be empty', function () {
            assert.equal(queue.isEmpty(), true);
        });
    });
});
