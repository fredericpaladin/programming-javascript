const assert = require('assert');
const MinHeap = require('./min-heap')

describe('MinHeap', function () {
    describe('insert()', function () {
        // Arrange
        const minHeap = new MinHeap();

        // Act
        minHeap.insert(4);
        minHeap.insert(6);
        minHeap.insert(8);
        minHeap.insert(10);
        minHeap.insert(5);
        minHeap.insert(16);
        minHeap.insert(3);

        // Assert
        const actualMinValue = minHeap.getMinValue();
        const actualArray = minHeap.getArray();
        const expectedMinValue = 3;
        const expectedArray = [null, 3, 5, 4, 10, 6, 16, 8];

        it(`The smallest value in the heap should be '${expectedMinValue}'`, function () {
            assert.equal(actualMinValue, expectedMinValue);
        });

        it(`The heap should contain '${JSON.stringify(expectedArray)}'`, function () {
            assert.equal(JSON.stringify(actualArray), JSON.stringify(expectedArray));
        });
    });

    describe('empty heap', function () {
        // Arrange
        const minHeap = new MinHeap();

        // Assert
        const actualMinValue = minHeap.getMinValue();
        const actualArray = minHeap.getArray();
        const expectedMinValue = null;
        const expectedArray = [null];

        it(`The smallest value in the heap should be '${expectedMinValue}'`, function () {
            assert.equal(actualMinValue, expectedMinValue);
        });

        it(`The heap should contain '${JSON.stringify(expectedArray)}'`, function () {
            assert.equal(JSON.stringify(actualArray), JSON.stringify(expectedArray));
        });
    });
});
