/**
 * Data structure for min heap.
 */
class MinHeap {

    constructor() {
        // To simplify the math, the first element will remain empty
        this.heap = [null];

        // Heap can be represented using a simple array:
        // - left child: i * 2
        // - right child: i * 2 + 1
        // - parent: i / 2 (integer division)
    }

    insert(num) {
        // Add the element at the end of the heap
        this.heap.push(num);

        if (this.heap.length <= 2) {
            // The heap has only 1 element: no further operation needed
            // Note: we don't count the element at position 0 in the array
            return;
        }

        // Move the newely added value to its correct position
        let index = this.heap.length - 1; // Current position of the new value

        // Loop through the array (aka, go up to the tree branch)
        // for as long as the new value is less than its parent
        while (this.heap[index] < this.heap[Math.floor(index / 2)] && index > 1) {

            // Swap the position of the current value with its parent
            const node = this.heap[index];
            this.heap[index] = this.heap[Math.floor(index / 2)];
            this.heap[Math.floor(index / 2)] = node;

            // Update the index and go 1 level up
            index = Math.floor(index / 2);
        }
    }

    removeMinValue() {
        // TODO
    }

    getMinValue() {
        if (this.heap.length < 2)
            return null;

        return this.heap[1];
    }

    getArray() {
        return this.heap;
    }
}

module.exports = MinHeap;