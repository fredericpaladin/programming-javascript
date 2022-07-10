/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * https://youtu.be/XIdigk956u0
 * 
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
    
    // Create a dummy node to start the merge operations: we will return it's 'next' node at the end
    let dummy = { val: 0, next: null };
    let current = dummy;

    let ptr1 = list1;
    let ptr2 = list2;
    while (ptr1 != null && ptr2 != null) {
        if (ptr1.val < ptr2.val) {
            current.next = ptr1;
            ptr1 = ptr1.next;
        } else {
            current.next = ptr2;
            ptr2 = ptr2.next;
        }

        current = current.next;
    }

    // Add any portion of the remaining lists
    if (ptr1 != null) {
        current.next = ptr1;
    }

    if (ptr2 != null) {
        current.next = ptr2;
    }

    return dummy.next;
};


module.exports.mergeTwoLists = mergeTwoLists;