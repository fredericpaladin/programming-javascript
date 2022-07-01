/**
 * Stack data structure. LIFO: Last In - First Out.
 */
class Stack {
    constructor() {
        this.items = [];
    }

    /**
     * Add item to the stack.
     * @param {*} item 
     */
    push(item) {
        this.items.push(item);
    }

    /**
     * Remove item from the stack.
     */
    pop() {
        if (this.isEmpty())
            return null;

        const last = this.items[this.items.length - 1];

        // Create a new collection and skip the last item
        const newItems = [];
        for (let i = 0; i < this.items.length - 1; i++)
            newItems.push(this.items[i]);

        this.items = newItems;

        return last;
    }

    /**
     * Get the next item from the stack without removing it.
     */
    peek() {
        if (this.isEmpty())
            return null;

        return this.items[this.items.length - 1];
    }

    /**
     * Return true if the stack is empty.
     * @returns 
     */
    isEmpty() {
        return this.count() == 0;
    }

    /**
     * Return the number of elements in the stack.
     * @returns 
     */
    count() {
        return this.items.length;
    }
}

module.exports = Stack;