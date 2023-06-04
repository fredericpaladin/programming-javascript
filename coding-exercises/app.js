const TreeNode = require('./structures/binary-tree-node');

const array = [3,9,20,null,null,15,7];

const tree = TreeNode.createTree(array);

console.log(tree)
console.log(TreeNode.toArray(tree))
