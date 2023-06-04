/**
 * Binary Search Tree
 */
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root == null) {
            this.root = new BinarySearchTreeNode(value);
            return;
        }

        let node = this.root;
        while (true) {
            if (value < node.value) {
                if (node.left == null) {
                    // Found empty left child: add the new node and exit
                    node.left = new BinarySearchTreeNode(value);
                    break;
                }

                // traverse left node
                node = node.left;
            } else if (value > node.value) {
                if (node.right == null) {
                    // Found empty right child: add the new node and exit
                    node.right = new BinarySearchTreeNode(value);
                    break;
                }

                // traverse right node
                node = node.right;
            }
        }
    }

    /**
     * Pre-order traversal visits the tree nodes from mid, to left, to right.
     * @returns 
     */
    preOrder() {
        return this._preOrder(this.root);
    }

    _preOrder(node) {
        let nodes = [];
        if (node) {
            nodes.push(node.value);
            nodes = nodes.concat(this._preOrder(node.left));
            nodes = nodes.concat(this._preOrder(node.right));
        }

        return nodes;
    }

    /**
     *     traversal visits the tree nodes from left, to mid, to right.
     * @returns 
     */
    traversal() {

        let nodes = [];
        let stack = this.root ? [this.root] : [];
        while (stack.length > 0) {
            const node = stack.pop();

            // Add the children (if not null)
            if (node.left) {
                stack.push(node.left);
            }

            // Add the node to the result list
            nodes.push(node.value);


            if (node.right) {
                stack.push(node.right);
            }
        }

        return nodes;
    }

    /**
     * In-order traversal visits the tree nodes from left, to mid, to right.
     * @returns 
     */
    inOrder() {
        return this._inOrder(this.root);
    }

    _inOrder(node) {
        let nodes = [];
        if (node) {
            nodes = nodes.concat(this._inOrder(node.left));
            nodes.push(node.value);
            nodes = nodes.concat(this._inOrder(node.right));
        }

        return nodes;
    }

    /**
     * Post-order traversal visits the tree nodes from left, to right, to mid.
     * @returns 
     */
    postOrder() {
        return this._postOrder(this.root);
    }

    _postOrder(node) {
        let nodes = [];
        if (node) {
            nodes = nodes.concat(this._postOrder(node.left));
            nodes = nodes.concat(this._postOrder(node.right));
            nodes.push(node.value);
        }

        return nodes;
    }

    find(value) {
        let node = this.root;
        while (node) {
            if (value < node.value) {
                // traverse left node
                node = node.left;
            } else if (value > node.value) {
                // traverse right node
                node = node.right;
            } else {
                return node;
            }
        }

        return null;
    }

    delete(value) {

    }

    print() {
        console.log(JSON.stringify(this.root));
    }
}

class BinarySearchTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

module.exports = BinarySearchTree;