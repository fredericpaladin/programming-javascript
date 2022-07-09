const assert = require('assert');
const ReverseLinkedList = require('./reverse-linked-list');
const ListNode = require('./structures/list-node');

describe('ReverseLinkedList', function () {

    const inputs = [
        [1, 2, 3, 4, 5],
        [1],
        [1, 2],
        []
    ];
    const outputs = [
        [5, 4, 3, 2, 1],
        [1],
        [2, 1],
        []
    ];

    for (let i = 0; i < inputs.length; i++) {
        // Arrange
        const input = inputs[i];
        const head = ListNode.createList(input);

        // Act
        const reversed = ReverseLinkedList.reverseList(head);
        const actual = ListNode.toArray(reversed);

        // Assert
        const expected = outputs[i];
        it(`Test ${i}: reverseList(${JSON.stringify(input)}) should return '${JSON.stringify(expected)}'`, function () {
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });
    }
});
