const BinarySearchTree = require('./binary-search-tree');

const bst = new BinarySearchTree();

bst.insert(6);
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(4);
bst.insert(7);
bst.insert(8);

console.log('preOrder', bst.preOrder());
console.log('inOrder', bst.inOrder());
console.log('postOrder', bst.postOrder());
console.log('traversal', bst.traversal());

// console.log(bst.find(3));
// console.log(bst.find(9));

// bst.print();