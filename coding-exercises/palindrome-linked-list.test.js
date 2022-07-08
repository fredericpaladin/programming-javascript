const assert = require('assert');
const PalindromeLinkedList = require('./palindrome-linked-list');
const ListNode = require('./structures/list-node');

describe('PalindromeLinkedList', function () {

    const inputs = [
        [1, 2, 2, 1],
        [1],
        [1, 2],
        []
    ];
    const outputs = [
        true,
        true,
        false,
        true
    ];

    for (let i = 0; i < inputs.length; i++) {
        // Arrange
        const input = inputs[i];
        const head = ListNode.createList(input);

        // Act
        const actual = PalindromeLinkedList.isPalindrome(head);

        // Assert
        const expected = outputs[i];
        it(`Test ${i}: reverseList('${input}') should return '${JSON.stringify(expected)}'`, function () {
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });
    }
});
