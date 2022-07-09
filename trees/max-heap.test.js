const assert = require('assert');
const MaxHeap = require('./max-heap')

describe('MaxHeap', function () {
    describe('insert()', function () {
        // Arrange
        const maxHeap = new MaxHeap();

        // Act
        maxHeap.insert(4);
        maxHeap.insert(6);
        maxHeap.insert(8);
        maxHeap.insert(10);
        maxHeap.insert(5);
        maxHeap.insert(16);
        maxHeap.insert(3);

        // Assert
        const actualMaxValue = maxHeap.getMaxValue();
        const actualArray = maxHeap.getArray();
        const expectedMaxValue = 16;
        const expectedArray = [null, 16, 8, 10, 4, 5, 6, 3];

        it(`The smallest value in the heap should be '${expectedMaxValue}'`, function () {
            assert.equal(actualMaxValue, expectedMaxValue);
        });

        it(`The heap should contain '${JSON.stringify(expectedArray)}'`, function () {
            assert.equal(JSON.stringify(actualArray), JSON.stringify(expectedArray));
        });
    });

    describe('empty heap', function () {
        // Arrange
        const maxHeap = new MaxHeap();

        // Assert
        const actualMaxValue = maxHeap.getMaxValue();
        const actualArray = maxHeap.getArray();
        const expectedMaxValue = null;
        const expectedArray = [null];

        it(`The greatest value in the heap should be '${expectedMaxValue}'`, function () {
            assert.equal(actualMaxValue, expectedMaxValue);
        });

        it(`The heap should contain '${JSON.stringify(expectedArray)}'`, function () {
            assert.equal(JSON.stringify(actualArray), JSON.stringify(expectedArray));
        });
    });
});
