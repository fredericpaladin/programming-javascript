/**
 * Queue data structure. FIFO: First In - First Out
 */
class Queue {
    constructor() {
        this.items = [];
    }

    /**
     * Add the item to the queue.
     * @param {*} item 
     */
    enqueue(item) {
        this.items.push(item);
    }

    /**
     * Remove the first item from the queue.
     * @returns 
     */
    dequeue() {
        if (this.isEmpty())
            return null;

        const first = this.items[0];

        // Create a new collection and start from position 1
        const newItems = [];
        for (let i = 1; i < this.items.length; i++)
            newItems.push(this.items[i]);
        this.items = newItems;

        return first;
    }

    /**
     * Return true if the queue is empty.
     * @returns 
     */
    isEmpty() {
        return this.count() == 0;
    }

    /**
     * Return the number of elements in the queue.
     * @returns 
     */
    count() {
        return this.items.length;
    }
}

module.exports = Queue;