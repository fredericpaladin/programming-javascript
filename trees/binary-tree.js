class BinaryTree {
    constructor() {
        this.root = null;
    }

//     inOrder(root) {
//         const nodes = [];
//         if (root) {
//             inOrder(root.left)
//             nodes.push(root.val)
//             inOrder(root.right)
//         }
        
//         return nodes;
//     }

//     /**
// * @param {TreeNode} root
// */
// const inorder = (root) => {
//     const nodes = []
//     if (root) {
//         inorder(root.left)
//         nodes.push(root.val)
//         inorder(root.right)
//     }
//     return nodes
// }
// // for our example tree, this returns [1,2,3,4,5,6]
}

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

module.exports = BinaryTree;