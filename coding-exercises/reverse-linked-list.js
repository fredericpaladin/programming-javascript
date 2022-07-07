/**
 * https://leetcode.com/problems/reverse-linked-list/
 * https://youtu.be/G0_I-ZF0S38
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {

    // Optimal solution: Time O(n) and Space O(1)
    let previous = null;
    let current = head;
    while (current != null) {

        // Store the next node
        const next = current.next;

        // Set the next node to the previous one
        current.next = previous;

        // Move 'previous' to the next pointer
        previous = current;

        // Move 'current' the next pointer
        current = next;
    }

    return previous;
};

module.exports.reverseList = reverseList;