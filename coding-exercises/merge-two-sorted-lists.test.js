const assert = require('assert');
const MergeTwoSortedLists = require('./merge-two-sorted-lists');
const ListNode = require('./structures/list-node');

describe('MergeTwoSortedLists', function () {

    const inputs = [
        [[1, 2, 4], [1, 3, 4]],
        [[], []],
        [[], [0]]
    ];
    const outputs = [
        [1, 1, 2, 3, 4, 4],
        [],
        [0]
    ];

    for (let i = 0; i < inputs.length; i++) {
        // Arrange
        const input1 = inputs[i][0];
        const input2 = inputs[i][1];
        const list1 = ListNode.createList(input1);
        const list2 = ListNode.createList(input2);

        // Act
        const merged = MergeTwoSortedLists.mergeTwoLists(list1, list2);
        const actual = ListNode.toArray(merged);

        // Assert
        const expected = outputs[i];
        it(`Test ${i}: mergeTwoLists(${JSON.stringify(input1)}, ${JSON.stringify(input2)}) should return '${JSON.stringify(expected)}'`, function () {
            assert.equal(JSON.stringify(actual), JSON.stringify(expected));
        });
    }
});
