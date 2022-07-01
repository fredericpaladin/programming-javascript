/**
 * Signle-Linked List Data Structure.
 */
class SingleLinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * Add item at the end of the list.
     * @param {*} value 
     */
    append(value) {
        const newNode = new SingleLinkedListNode(value);

        if (this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    /**
     * Add item at the beginning of the list.
     * @param {*} value 
     */
    prepend(value) {
        const newNode = new SingleLinkedListNode(value);

        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    /**
     * Remove first item from the list.
     * @returns 
     */
    removeFirst() {
        if (this.head == null)
            return null;

        const head = this.head;
        this.head = head.next;

        return head;
    }

    /**
     * Remove last item from the list.
     * @returns 
     */
    removeLast() {
        if (this.head == null)
            return null;

        let current = this.head;
        let previous = current;
        while (current.next != null) {
            previous = current;
            current = current.next;
        }

        previous.next = null;

        return current;
    }

    /**
     * Remove all items from the list.
     * @returns 
     */
    removeAll() {
        this.head = null;
    }

    /**
     * Return an array representation, in order, of the list.
     * @returns 
     */
    toArray() {
        const list = [];
        let current = this.head;
        while (current != null) {
            list.push(current.value);
            current = current.next;
        }

        return list;
    }
}

class SingleLinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

module.exports = SingleLinkedList;