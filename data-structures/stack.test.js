const assert = require('assert');
const Stack = require('./stack');

describe('Stack', function () {

    describe('push()', function () {
        // Arrange
        const count = 10;
        const stack = new Stack();

        // Act
        for (let i = 0; i < count; i++)
            stack.push(i);

        // Assert
        const expectedCount = count;

        it(`stack should contain ${expectedCount} items`, function () {
            assert.equal(stack.count(), expectedCount);
        });

        it('stack should not be empty', function () {
            assert.equal(stack.isEmpty(), false);
        });
    });

    describe('pop() remove one', function () {
        // Arrange
        const count = 10;
        const stack = new Stack();
        for (let i = 0; i < count; i++)
            stack.push(i);

        // Act
        const actualItem = stack.pop();

        // Assert
        const expectedItem = 9;
        const expectedCount = count - 1;

        it(`removed item should be '${expectedItem}'`, function () {
            assert.equal(actualItem, expectedItem);
        });

        it(`stack should contain ${expectedCount} items`, function () {
            assert.equal(stack.count(), expectedCount);
        });

        it('stack should not be empty', function () {
            assert.equal(stack.isEmpty(), false);
        });
    });

    describe('pop() remove all', function () {
        // Arrange
        const count = 10;
        const stack = new Stack();

        for (let i = 0; i < count; i++)
            stack.push(i);

        for (let i = count - 1; i >= 0; i--) {
            
            // Act
            const actualItem = stack.pop();

            // Assert
            it(`removed item should be '${i}'`, function () {
                assert.equal(actualItem, i);
            });
        }

        const expectedCount = 0;
        it(`stack should contain ${expectedCount} items`, function () {
            assert.equal(stack.count(), expectedCount);
        });

        it('stack should be empty', function () {
            assert.equal(stack.isEmpty(), true);
        });
    });
    
    describe('pop() empty stack', function () {
        // Arrange
        const stack = new Stack();

        // Act
        const actualItem = stack.pop();

        // Assert
        const expectedItem = null;
        const expectedCount = 0;
        
        it(`removed item should be '${expectedItem}'`, function () {
            assert.equal(actualItem, expectedItem);
        });

        it(`stack should contain ${expectedCount} items`, function () {
            assert.equal(stack.count(), expectedCount);
        });

        it('stack should be empty', function () {
            assert.equal(stack.isEmpty(), true);
        });
    });
});
