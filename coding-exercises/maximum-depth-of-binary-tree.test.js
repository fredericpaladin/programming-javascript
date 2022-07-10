const assert = require('assert');
const MaximumDepthOfBinaryTree = require('./maximum-depth-of-binary-tree');
const BinaryTreeNode = require('./structures/binary-tree-node');

describe('MaximumDepthOfBinaryTree', function () {

    const inputs = [
        [3, 9, 20, null, null, 15, 7],
        [1, null, 2],
        [1],
        []
    ];
    const outputs = [
        3,
        2,
        1,
        0
    ];

    for (let i = 0; i < inputs.length; i++) {
        // Arrange
        const input = inputs[i];
        const treeNode = BinaryTreeNode.createTree(input);

        // Act
        const actual = MaximumDepthOfBinaryTree.maxDepth(treeNode);

        // Assert
        const expected = outputs[i];
        it(`Test ${i}: maxDepth(${JSON.stringify(input)}) should return '${expected}'`, function () {
            assert.equal(actual, expected);
        });
    }
});
