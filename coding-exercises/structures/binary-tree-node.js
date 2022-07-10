/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

/**
 * Helper function to convert a TreeNode to an array using BFS.
 * @param {TreeNode} node 
 * @returns {*} array 
 */
const toArray = function (node) {
    const nodes = [];
    const queue = [node];
    while (queue.length > 0) {
        const current = queue.shift();

        if (current) {
            nodes.push(current.val);

            // BFS: loop through the children first
            queue.push(current.left);
            queue.push(current.right);
        }
    }

    return nodes;
}

/**
 * Helper function to create the TreeNode from an array.
 * Example: [3,9,20,null,null,15,7]
 * 
 * @param {*} array 
 * @param {*} i 
 * @returns 
 */
const createTree = function (array, i = 0) {

    let node = null;

    // Base case for recursion
    if (i < array.length) {
        node = new TreeNode(array[i]);
        node.left = createTree(array, 2 * i + 1);
        node.right = createTree(array, 2 * i + 2);
    }

    return node;
}

module.exports.toArray = toArray;
module.exports.createTree = createTree;