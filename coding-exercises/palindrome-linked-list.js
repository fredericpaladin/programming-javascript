/**
 * https://leetcode.com/problems/palindrome-linked-list/
 * https://youtu.be/yOzXms1J6Nk
 * 
 * @param {ListNode} head
 * @return {boolean}
 */
 const isPalindrome = function(head) {
    
    // This will get to the end of the list
    let fastPtr = head;
    
    // This will get to the middle of the list
    let slowPtr = head;
    
    while (fastPtr != null && fastPtr.next != null) {
        fastPtr = fastPtr.next.next; // Move 2 nodes at the time
        slowPtr = slowPtr.next; // Move 1 node at the time
    }
    
    // Reverse the second half of the list
    let tail = null;
    while (slowPtr != null) {
        const tmp = slowPtr.next;
        slowPtr.next = tail;
        tail = slowPtr;
        slowPtr = tmp
    }
    
    let left = head;
    let right = tail;
    while (right != null) {
        if (right.val != left.val)
            return false;
        
        right = right.next;
        left = left.next;
    }
    
    return true;
};

module.exports.isPalindrome = isPalindrome;