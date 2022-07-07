/**
 * Definition for singly-linked list for various problems.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 * Helper function to convert a ListNode to an array.
 * @param {ListNode} head 
 * @returns {*} array 
 */
const toArray = function(head) {
    const array = [];
    let current = head;
    while (current != null) {
        array.push(current.val);
        current = current.next;
    }

    return array;
}

/**
 * Helper function to create the ListNode from an array.
 * @param {*} array 
 * @returns {ListNode}
 */
 const createList = function (array) {

    // Due to the nature of the ListNode structure
    // we can loop backwards to build the linked list
    let previous = null;
    for (let i = array.length - 1; i >= 0; i--) {
        previous =  new ListNode(array[i], previous);
    }

    return previous;
}

module.exports.toArray = toArray;
module.exports.createList = createList;