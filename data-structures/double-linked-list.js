/**
 * Double-Linked List Data Structure.
 */
class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Add item at the end of the list.
     * @param {*} value 
     */
    append(value) {
        const newNode = new DoubleLinkedListNode(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    /**
     * Add item at the beginning of the list.
     * @param {*} value 
     */
    prepend(value) {
        const newNode = new DoubleLinkedListNode(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
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
        head.prev = null;

        this.head = head.next;

        return head;
    }

    /**
     * Remove last item from the list.
     * @returns 
     */
    removeLast() {
        if (this.tail == null)
            return null;

        const tail = this.tail;
        this.tail = tail.prev;
        this.tail.next = null;
        
        return tail;
    }

    /**
     * Remove all items from the list.
     * @returns 
     */
    removeAll() {
        this.head = null;
        this.tail = null;
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
    
    /**
     * Return an array representation, in reverse order, of the list.
     * @returns 
     */
    toReverseArray() {
        const list = [];
        let current = this.tail;
        while (current != null) {
            list.push(current.value);
            current = current.prev;
        }

        return list;
    }
}

class DoubleLinkedListNode {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

module.exports = DoubleLinkedList;